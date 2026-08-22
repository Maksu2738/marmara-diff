# -*- coding: utf-8 -*-
"""Arama indeksi ve matematik normalizasyonu.

Sorun: kaynakta `$y^{\\prime\\prime}-6y^{\\prime}+25y=0$` yaziyor ama kullanici
arama kutusuna `y''-6y'+25y` yazacak. Ayni denklemin uc ayri yazimi var:

    kaynak LaTeX   y^{\\prime\\prime}-6y^{\\prime}+25y=0
    ekranda basili  y′′−6y′+25y=0        (unicode tirnak ve eksi)
    kullanicinin    y''-6y'+25y=0

`normalize()` ucunu de ayni bicime indirger:  y''-6y'+25y=0

Ayni fonksiyon hem indeks kurulurken hem sorgu gelirken calisir; app.js'te
birebir ayni kurallarin JavaScript kopyasi var (bkz. sablon/app.js).
"""

import re

BS = chr(92)

# \komut  ->  komut  (bazilari tumden atilir)
# NOT: regexte literal ters bolu icin iki tane gerekir; tek birakilirsa
# sonraki parantezi kacirir ve desen bozulur.
_KOMUT = re.compile(BS + BS + r'([a-zA-Z]+)')
# ^{...} -> ^...   _{...} -> _...
_USSU = re.compile(r'([_^])\{([^{}]*)\}')
# \frac{a}{b} -> a/b   (\dfrac, \tfrac dahil)
_KESIR = re.compile(BS + BS + r'[dt]?frac\{([^{}]*)\}\{([^{}]*)\}')
_ETIKET = re.compile(r'<[^>]*>')
_VARLIK = re.compile(r'&[a-zA-Z]+;|&#\d+;')

# Anlam tasimayan bicimleme komutlari: tumden atilir
_ATILACAK = frozenset((
    'left', 'right', 'displaystyle', 'quad', 'qquad', 'nbsp', 'cdot',
    'times', 'bigl', 'bigr', 'biggl', 'biggr', 'boxed', 'underbrace',
    'overbrace', 'text', 'mathrm', 'operatorname', 'begin', 'end',
    'array', 'cases', 'strong', 'em', 'checkmark', 'ldots', 'cdots',
    'dots', 'qquad', 'hspace', 'vspace', 'tag', 'label',
    'mathcal', 'mathbf', 'mathbb', 'mathfrak', 'nolimits', 'limits',
))

# Kendi ascii karsiligi olan komutlar
_KOMUT_KARSILIK = {
    'prime': "'",
    'to': '->',
    'Longrightarrow': '=>',
    'Rightarrow': '=>',
    'infty': 'infty',
    'le': 'le', 'leq': 'le', 'ge': 'ge', 'geq': 'ge', 'neq': 'ne',
}

# Sembolun kendisi yapistirilirsa da bulunsun
_SEMBOL = {
    'π': 'pi', 'α': 'alpha', 'β': 'beta', 'λ': 'lambda',
    'θ': 'theta', 'ω': 'omega', 'μ': 'mu', 'τ': 'tau',
    'δ': 'delta', 'Δ': 'delta', 'Σ': 'sum', '∫': 'int',
    '√': 'sqrt', '∞': 'infty', '∂': 'partial',
    '′': "'", '″': "''", '‴': "'''",
    '−': '-', '≤': 'le', '≥': 'ge', '≠': 'ne',
    '→': '->', '⇒': '=>', '·': '',
}

# Turkce harfler: "donusum" yazan "dönüşüm"u de bulsun
_TR = {
    'ı': 'i', 'İ': 'i', 'ş': 's', 'Ş': 's',
    'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u',
    'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c',
}


def normalize(metin):
    """Metni aranabilir normal bicime indirger."""
    t = metin.lower()

    for k, v in _SEMBOL.items():
        t = t.replace(k, v)
    for k, v in _TR.items():
        t = t.replace(k, v)

    t = _ETIKET.sub(' ', t)
    t = _VARLIK.sub(' ', t)

    # ic ice kesirler icin birkac tur
    for _ in range(3):
        yeni = _KESIR.sub(r'\1/\2', t)
        if yeni == t:
            break
        t = yeni

    t = _USSU.sub(r'\1\2', t)

    def _komut(m):
        ad = m.group(1)
        if ad in _ATILACAK:
            return ' '
        return _KOMUT_KARSILIK.get(ad, ad)
    t = _KOMUT.sub(_komut, t)

    # us konumundaki tirnak zaten tirnaktir:  y^'' -> y''
    t = t.replace("^'", "'")

    for c in '{}$' + BS + '&~*_':
        t = t.replace(c, ' ')

    return re.sub(r'\s+', ' ', t).strip()


def indeks(bolumler):
    """Her parca icin arama kaydi uretir.

    i = capa (id), b = bolum adi, t = baslik, m = aranabilir metin
    """
    kayitlar = []
    for b in bolumler:
        for p in b['parcalar']:
            bas = p['basliklar']
            pid = bas.get('id', '')
            if not pid:
                continue
            ham = bas.get('baslik') or bas.get('menu') or ''
            baslik = _VARLIK.sub(' ', _ETIKET.sub('', ham))
            baslik = re.sub(r'\s+', ' ', baslik).strip()
            if not baslik:
                # Ne baslik ne menu var (ara gecis parcalari); capayi
                # okunur hale getirip gosterelim ki sonuc bos gorunmesin.
                baslik = pid.replace('-', ' ')
            kayitlar.append({
                'i': pid,
                'b': b['ad'],
                't': baslik,
                'm': normalize(baslik + ' ' + p['govde'])[:5000],
            })
    return kayitlar

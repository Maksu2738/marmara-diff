# -*- coding: utf-8 -*-
"""
build.py — icerik/ klasorundeki parcalari tek bir siteye derler.

  icerik/<ders>/ders.txt              ders ayarlari
  icerik/<ders>/bolum-N/_bolum.txt    bolum adi
  icerik/<ders>/bolum-N/*.html        hazir HTML parca (aynen alinir)
  icerik/<ders>/bolum-N/*.md          Markdown parca (HTML'e cevrilir)
              -->  docs/index.html + docs/style.css + docs/app.js

Dosyalar ad sirasina gore dizilir; onlerindeki sayi (010, 020, ...)
sirayi belirler. Sidebar bu yapidan otomatik uretilir.

Kullanim:  python build.py
"""

import hashlib
import os
import re
import shutil
import sys

KOK = os.path.dirname(os.path.abspath(__file__))
ICERIK = os.path.join(KOK, 'icerik')
SABLON = os.path.join(KOK, 'sablon')
CIKTI = os.path.join(KOK, 'docs')

GIRINTI = ' ' * 20          # govde parcalarinin girintisi
ROZETLER = {'konu': 'Konu', 'ornek': 'Örnek', 'sorular': 'Sorular', 'odev': 'Ödev'}


# ---------------------------------------------------------------- yardimcilar

def dosya_oku(yol):
    with open(yol, encoding='utf-8') as f:
        return f.read()


def ayar_oku(yol):
    """'anahtar: deger' satirlarindan sozluk uretir."""
    d = {}
    if not os.path.exists(yol):
        return d
    for satir in dosya_oku(yol).split('\n'):
        satir = satir.strip()
        if not satir or satir.startswith('#'):
            continue
        if ':' in satir:
            k, v = satir.split(':', 1)
            d[k.strip()] = v.strip()
    return d


def kimlik_ayir(metin, md):
    """
    Parcanin basindaki kimlik blogunu ayirir.
    .md  ->  --- ... ---
    .html -> <!--@ ... -->
    (baslik, govde) dondurur.
    """
    satirlar = metin.split('\n')
    bas = ['---'] if md else ['<!--@']
    son = '---' if md else '-->'

    if not satirlar or satirlar[0].strip() not in bas:
        return {}, metin

    for i in range(1, len(satirlar)):
        if satirlar[i].strip() == son:
            basliklar = {}
            for s in satirlar[1:i]:
                s = s.strip()
                if ':' in s:
                    k, v = s.split(':', 1)
                    basliklar[k.strip()] = v.strip()
            return basliklar, '\n'.join(satirlar[i + 1:])
    return {}, metin


# ------------------------------------------------------------ markdown -> html

MATEMATIK = re.compile(r'(\$\$.+?\$\$|\$[^$\n]+?\$)', re.S)


def matematigi_sakla(metin, kasa):
    """$...$ ve $$...$$ araligini dokunulmaz kilar."""
    def degistir(m):
        kasa.append(m.group(0))
        return '\x00M%d\x00' % (len(kasa) - 1)
    return MATEMATIK.sub(degistir, metin)


def matematik_kacir(m):
    """Matematik icindeki &, <, > karakterlerini HTML kacisina cevirir.

    Tarayici HTML'i KaTeX'ten ONCE ayristirir; $0<t<2$ gibi bir ifadede
    "<t<2$ ... $" parcasi etiket sanilip yutulur, KaTeX de geriye kalan
    bozuk LaTeX yuzunden ham metni gosterir. KaTeX icerigi textContent
    uzerinden okudugu icin kacislar cozulmus halde ona ulasir --
    goruntude hicbir fark olmaz.
    """
    return m.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


ETIKET_BASI = re.compile(r'</?[A-Za-z][A-Za-z0-9]*[\s/>]')


def ham_html_matematigi_kacir(satir):
    """Ham HTML satirindaki (orn. <td>$s>0$</td>) matematigi kacirir.

    Yalnizca $...$ araliklarina dokunur; gercek etiketler oldugu gibi
    kalir. Icinde etiket baslangici gibi gorunen bir sey barindiran
    aralik -- tek sayida '$' yuzunden yanlis eslesmis olabilir --
    guvenlik icin atlanir.
    """
    def degistir(m):
        t = m.group(0)
        if ETIKET_BASI.search(t):
            return t
        return t.replace('<', '&lt;').replace('>', '&gt;')
    return MATEMATIK.sub(degistir, satir)


def matematigi_geri_koy(metin, kasa):
    for i, m in enumerate(kasa):
        metin = metin.replace('\x00M%d\x00' % i, matematik_kacir(m))
    return metin


def satir_ici(metin):
    """Satir ici bicimlendirme. Matematik korunur."""
    kasa = []
    metin = matematigi_sakla(metin, kasa)

    metin = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', metin)
    metin = re.sub(r'(?<![\w*])\*([^*\n]+?)\*(?![\w*])', r'<em>\1</em>', metin)
    # .highlight bu projede blok kutusudur; satir ici vurgu icin .vurgu kullanilir
    metin = re.sub(r'==(.+?)==', r'<span class="vurgu">\1</span>', metin)
    metin = re.sub(r'__(.+?)__', r'<u>\1</u>', metin)
    metin = re.sub(r'\[([^\]]+)\]\((https?://[^)]+)\)', r'<a href="\2">\1</a>', metin)

    return matematigi_geri_koy(metin, kasa)


def bloklari_cevir(satirlar, girinti):
    """Markdown govdesini HTML'e cevirir. Ham HTML satirlari aynen gecer."""
    cikti = []
    i = 0
    n = len(satirlar)

    def ekle(s, ek=0):
        cikti.append(girinti + ' ' * ek + s if s else '')

    while i < n:
        satir = satirlar[i]
        cip = satir.strip()

        if not cip:
            i += 1
            continue

        # --- ham HTML ya da $$ blok matematigi: aynen gecir
        if cip.startswith('<') or cip.startswith('$$'):
            ekle(matematik_kacir(cip) if cip.startswith('$$')
                 else ham_html_matematigi_kacir(cip))
            i += 1
            continue

        # --- yatay cizgi
        if cip in ('---', '***'):
            ekle('<hr>')
            i += 1
            continue

        # --- basliklar
        if cip.startswith('#### '):
            ekle('<h4>%s</h4>' % satir_ici(cip[5:].strip()))
            i += 1
            continue
        if cip.startswith('### '):
            ekle('<h3 style="margin: 1.25rem 0 0.75rem; color: #4a5568;">%s</h3>'
                 % satir_ici(cip[4:].strip()))
            i += 1
            continue

        # --- vurgu kutusu (callout)
        if cip.startswith('[KUTU]'):
            ic = []
            i += 1
            while i < n and not satirlar[i].strip().startswith('[/KUTU]'):
                ic.append(satirlar[i])
                i += 1
            i += 1                      # [/KUTU] satirini atla
            ekle('<div class="highlight">')
            cikti.extend(bloklari_cevir(ic, girinti + ' ' * 4))
            ekle('</div>')
            continue

        # --- soru blogu
        if cip.startswith('[SORU]') or cip.startswith('[SORU*]'):
            i = soru_blogu(satirlar, i, cikti, girinti)
            continue

        # --- markdown tablosu
        if (cip.startswith('|') and i + 1 < n
                and tablo_ayraci(satirlar[i + 1].strip())):
            i = tablo_blogu(satirlar, i, cikti, girinti)
            continue

        # --- siralanmis liste
        if re.match(r'^\d+\.\s', cip):
            ekle('<ol>')
            while i < n and re.match(r'^\d+\.\s', satirlar[i].strip()):
                ic = re.sub(r'^\d+\.\s', '', satirlar[i].strip())
                ekle('<li>%s</li>' % satir_ici(ic), 4)
                i += 1
            ekle('</ol>')
            continue

        # --- madde listesi
        if cip.startswith('- '):
            ekle('<ul style="margin-left: 1rem;">')
            while i < n and satirlar[i].strip().startswith('- '):
                ekle('<li>%s</li>' % satir_ici(satirlar[i].strip()[2:]), 4)
                i += 1
            ekle('</ul>')
            continue

        # --- paragraf (bos satira kadar)
        parca = []
        while i < n and satirlar[i].strip() and not _blok_basi(satirlar[i].strip()):
            parca.append(satirlar[i].strip())
            i += 1

        if not parca:
            # Buraya dusen satir bir blok basi ama yukaridaki kurallarin
            # hicbiri onu yakalamadi: kapatilmamis [CEVAP], basibos [/KUTU],
            # '### ' olmayan bir '#' satiri gibi. Satiri atlamazsak i hic
            # artmaz ve derleme sonsuz donguye girer.
            sys.stderr.write('  UYARI: beklenmedik blok satiri atlandi -> ' + cip[:60] + chr(10))
            ekle('<p>%s</p>' % satir_ici(cip))
            i += 1
            continue

        ekle('<p>%s</p>' % satir_ici(' '.join(parca)))

    return cikti


def _blok_basi(cip):
    return (cip.startswith('<') or cip.startswith('$$') or cip.startswith('- ')
            or cip.startswith('|')
            or cip.startswith('#') or cip.startswith('[SORU]')
            or cip.startswith('[SORU*]')
            or cip.startswith('[CEVAP]') or cip.startswith('[/CEVAP]')
            or cip.startswith('[KUTU]') or cip.startswith('[/KUTU]')
            or cip in ('---', '***') or re.match(r'^\d+\.\s', cip) is not None)


def tablo_ayraci(cip):
    """|---|---| gibi bir markdown tablo ayrac satiri mi?"""
    if not cip.startswith('|'):
        return False
    govde = cip.strip('|').replace(' ', '')
    return bool(govde) and set(govde) <= set('-:|')


def _hucreler(cip):
    return [h.strip() for h in cip.strip().strip('|').split('|')]


def tablo_blogu(satirlar, i, cikti, girinti):
    """Markdown tablosunu <div class="tablo-sar"><table> blogua cevirir.

    Dar ekranda yatay kaydirma icin sarmalayici sart (bkz. CLAUDE.md).
    Ayrac satiri yoksa tablo sayilmaz; cagiran taraf kontrol eder.
    """
    g = girinti
    basliklar = _hucreler(satirlar[i])
    i += 2                                  # baslik + ayrac satiri
    cikti.append(g + '<div class="tablo-sar">')
    cikti.append(g + '<table>')
    cikti.append(g + '    <tr>' + ''.join(
        '<th>%s</th>' % satir_ici(h) for h in basliklar) + '</tr>')
    while i < len(satirlar) and satirlar[i].strip().startswith('|'):
        h = _hucreler(satirlar[i])
        cikti.append(g + '    <tr>' + ''.join(
            '<td>%s</td>' % satir_ici(x) for x in h) + '</tr>')
        i += 1
    cikti.append(g + '</table>')
    cikti.append(g + '</div>')
    return i


def soru_blogu(satirlar, i, cikti, girinti):
    """[SORU] ... [CEVAP] ... blogunu question-block HTML'ine cevirir."""
    n = len(satirlar)
    bas = satirlar[i].strip()
    yildizli = bas.startswith('[SORU*]')       # ders notundan gelen soru
    soru = [bas[7:].strip() if yildizli else bas[6:].strip()]
    i += 1
    while i < n:
        cip = satirlar[i].strip()
        if not cip or cip.startswith('[CEVAP]') or cip.startswith('[SORU'):
            break
        soru.append(cip)
        i += 1

    cevap = []
    if i < n and satirlar[i].strip().startswith('[CEVAP]'):
        i += 1
        while i < n:
            cip = satirlar[i].strip()
            if cip.startswith('[SORU]') or cip.startswith('[SORU*]'):
                break
            if cip.startswith('[/CEVAP]'):
                i += 1
                break
            cevap.append(satirlar[i])
            i += 1

    g = girinti
    sinif = 'question-block yildizli' if yildizli else 'question-block'
    cikti.append(g + '<div class="%s">' % sinif)
    if yildizli:
        cikti.append(g + '    <span class="ders-notu-rozet" title="Ders notlarinda gecen soru">'
                         '<span class="yildiz">&#9733;</span> Ders Notu Sorusu</span>')
    cikti.append(g + '    <p class="question-text">%s</p>' % satir_ici(' '.join(soru)))
    if cevap:
        cikti.append(g + '    <button class="toggle-btn" onclick="toggleAnswer(this)">Cevabı Göster</button>')
        cikti.append(g + '    <div class="answer">')
        cikti.extend(bloklari_cevir(cevap, g + ' ' * 8))
        cikti.append(g + '    </div>')
    cikti.append(g + '</div>')
    return i


def md_parcasi(basliklar, govde):
    """Markdown parcasini tam bir <div class="section ..."> blogu yapar."""
    tip = basliklar.get('tip', 'konu')
    pid = basliklar.get('id', '')
    baslik = basliklar.get('baslik', '')

    # 'defterde: yok' -> konu kitapta var ama hocanin ders defterinde
    # islenmemis. Bolume kirmizi zemin ve uyari seridi eklenir.
    defterde_yok = basliklar.get('defterde', '').strip().lower() == 'yok'
    sinif = 'section %s%s' % (tip, ' defter-disi' if defterde_yok else '')

    satirlar = [GIRINTI + '<div id="%s" class="%s">' % (pid, sinif)]

    if baslik:
        satirlar.append(GIRINTI + '    <div class="section-title">')
        # 'rozet: yok' rozeti kaldirir; baska bir deger yazilirsa
        # varsayilan metnin yerine o kullanilir (orn. 'rozet: Ödev 1')
        istek = basliklar.get('rozet', '').strip()
        if istek.lower() == 'yok':
            rozet = None
        else:
            rozet = istek or ROZETLER.get(tip)
        if rozet:
            satirlar.append(GIRINTI + '        <span class="badge">%s</span>' % rozet)
        satirlar.append(GIRINTI + '        ' + satir_ici(baslik))
        satirlar.append(GIRINTI + '    </div>')

    if defterde_yok:
        satirlar.append(GIRINTI + '    <div class="defter-disi-uyari">')
        satirlar.append(GIRINTI + '        <span class="defter-disi-rozet">&#9888; DERSTE İŞLENMEDİ</span>')
        satirlar.append(GIRINTI + '        <span>Bu konu <strong>kitapta var</strong> ama hocanın ders defterinde geçmiyor. Sorulabilir; önceliği düşük tutun.</span>')
        satirlar.append(GIRINTI + '    </div>')

    satirlar.extend(bloklari_cevir(govde.split('\n'), GIRINTI + '    '))
    satirlar.append(GIRINTI + '</div>')
    return '\n'.join(satirlar)


# ------------------------------------------------------------------- derleme

def bolumleri_topla(ders_yolu):
    bolumler = []
    for ad in sorted(os.listdir(ders_yolu)):
        yol = os.path.join(ders_yolu, ad)
        if not os.path.isdir(yol) or not ad.startswith('bolum-'):
            continue
        try:
            no = int(ad.split('-')[1])
        except (IndexError, ValueError):
            continue

        ayar = ayar_oku(os.path.join(yol, '_bolum.txt'))
        parcalar = []
        for dosya in sorted(os.listdir(yol)):
            if dosya.startswith('_') or not dosya.endswith(('.html', '.md')):
                continue
            tam = os.path.join(yol, dosya)
            md = dosya.endswith('.md')
            basliklar, govde = kimlik_ayir(dosya_oku(tam), md)
            parcalar.append({
                'dosya': dosya, 'md': md, 'basliklar': basliklar,
                'govde': govde, 'yol': tam,
            })

        bolumler.append({
            'no': no,
            # sidebar'daki yuvarlakta gorunen etiket; sayi disinda bir sey
            # istenirse _bolum.txt icine 'numara: Ö' yazilir
            'etiket': ayar.get('numara', str(no)),
            'ad': ayar.get('ad', 'Bölüm %d' % no),
            'acik': ayar.get('acik', 'hayir') == 'evet',
            'parcalar': parcalar,
        })
    bolumler.sort(key=lambda b: b['no'])
    return bolumler


def sidebar_uret(bolumler):
    for _b in bolumler:
        for _p in _b.get('parcalar', []):
            _m = _p.get('basliklar', {}).get('menu', '')
            if '$' in _m:
                sys.stderr.write("  UYARI: menu: satirinda matematik var, sidebarda KaTeX calismaz -> " + _m[:60] + chr(10))
    s = ['                <ul>', '']
    for b in bolumler:
        s.append('                    <!-- ===== BÖLÜM %d ===== -->' % b['no'])
        s.append('                    <li>')
        s.append('                        <button class="chapter-toggle%s" onclick="toggleChapter(this)">'
                 % (' open' if b['acik'] else ''))
        s.append('                            <span class="chapter-num">%s</span>' % b['etiket'])
        s.append('                            <span class="chapter-name">%s</span>' % b['ad'])
        s.append('                            <span class="chevron">&#9654;</span>')
        s.append('                        </button>')
        s.append('                        <ul class="chapter-links%s">' % (' open' if b['acik'] else ''))
        for p in b['parcalar']:
            menu = p['basliklar'].get('menu')
            if not menu:
                continue
            _s = []
            if p['basliklar'].get('durum') == 'bekliyor':
                _s.append('pending')
            if p['basliklar'].get('defterde', '').strip().lower() == 'yok':
                _s.append('defterde-yok')
            sinif = ' class="%s"' % ' '.join(_s) if _s else ''
            s.append('                            <li><a href="#%s"%s>%s</a></li>'
                     % (p['basliklar'].get('id', ''), sinif, menu))
        s.append('                        </ul>')
        s.append('                    </li>')
        s.append('')
    s.append('                </ul>')
    return '\n'.join(s)


def icerik_uret(bolumler):
    parcalar = []
    for b in bolumler:
        parcalar.append('')
        parcalar.append(GIRINTI + '<!-- ' + '#' * 56 + ' -->')
        parcalar.append(GIRINTI + '<!-- BÖLÜM %d — %s -->' % (b['no'], b['ad']))
        parcalar.append(GIRINTI + '<!-- ' + '#' * 56 + ' -->')
        parcalar.append('')
        for p in b['parcalar']:
            if p['md']:
                parcalar.append(md_parcasi(p['basliklar'], p['govde']))
            else:
                parcalar.append(p['govde'].strip('\n'))
            parcalar.append('')
    return '\n'.join(parcalar)


def kimlik_denetimi(bolumler):
    """Ayni id'nin birden fazla kullanilmasini yakalar."""
    gorulen = {}
    sorunlar = []
    for b in bolumler:
        for p in b['parcalar']:
            pid = p['basliklar'].get('id')
            if not pid:
                continue
            if pid in gorulen:
                sorunlar.append('%s  <->  %s   (id: %s)' % (gorulen[pid], p['dosya'], pid))
            gorulen[pid] = p['dosya']
    return sorunlar


def derle(ders):
    ders_yolu = os.path.join(ICERIK, ders)
    ayar = ayar_oku(os.path.join(ders_yolu, 'ders.txt'))
    bolumler = bolumleri_topla(ders_yolu)

    kabuk = dosya_oku(os.path.join(SABLON, 'kabuk.html'))
    sayfa = (kabuk
             .replace('<!--SIDEBAR_BASLIK-->', ayar.get('sidebar_baslik', 'Ders Notları'))
             .replace('<!--SIDEBAR_ALTBASLIK-->', ayar.get('sidebar_altbaslik', ''))
             .replace('<!--BASLIK-->', ayar.get('baslik', 'Ders Notları'))
             .replace('<!--ALTBASLIK-->', ayar.get('altbaslik', ''))
             .replace('<!--FOOTER-->', ayar.get('footer', ''))
             .replace('<!--SIDEBAR-->', sidebar_uret(bolumler))
             .replace('<!--ICERIK-->', icerik_uret(bolumler))
             .replace('<!--EXTRA_CSS-->', '')
             .replace('<!--EXTRA_JS-->', ''))

    # <title>
    sayfa = re.sub(r'<title>.*?</title>',
                   '<title>%s</title>' % ayar.get('baslik', 'Ders Notları'),
                   sayfa, count=1)

    os.makedirs(CIKTI, exist_ok=True)
    # Tarayici style.css / app.js'i onbellekte tutup eski surumu
    # gosterebiliyor. Icerik degistikce degisen bir damga ekliyoruz.
    _damga = hashlib.md5(
        (dosya_oku(os.path.join(SABLON, 'style.css'))
         + dosya_oku(os.path.join(SABLON, 'app.js'))).encode('utf-8')
    ).hexdigest()[:8]
    sayfa = sayfa.replace('href="style.css"', 'href="style.css?v=%s"' % _damga)
    sayfa = sayfa.replace('src="app.js"', 'src="app.js?v=%s"' % _damga)

    hedef = os.path.join(CIKTI, ayar.get('cikti', '%s.html' % ders))
    with open(hedef, 'w', encoding='utf-8', newline='\n') as f:
        f.write(sayfa)

    parca_sayisi = sum(len(b['parcalar']) for b in bolumler)
    md_sayisi = sum(1 for b in bolumler for p in b['parcalar'] if p['md'])
    print('  %-22s %2d bolum, %3d parca (%d markdown)  ->  docs/%s  [%d KB]'
          % (ders, len(bolumler), parca_sayisi, md_sayisi,
             os.path.basename(hedef), os.path.getsize(hedef) // 1024))

    for sorun in kimlik_denetimi(bolumler):
        print('  !! tekrar eden id: %s' % sorun)


def main():
    if not os.path.isdir(ICERIK):
        sys.exit('icerik/ klasoru yok.')

    os.makedirs(CIKTI, exist_ok=True)
    for varlik in ('style.css', 'app.js'):
        kaynak = os.path.join(SABLON, varlik)
        if os.path.exists(kaynak):
            shutil.copy2(kaynak, os.path.join(CIKTI, varlik))

    print('Derleniyor...')
    dersler = [a for a in sorted(os.listdir(ICERIK))
               if os.path.isdir(os.path.join(ICERIK, a))]
    for ders in dersler:
        if os.path.exists(os.path.join(ICERIK, ders, 'ders.txt')):
            derle(ders)
    print('Bitti.')


if __name__ == '__main__':
    main()

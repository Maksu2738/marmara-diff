# -*- coding: utf-8 -*-
"""
bol.py — TEK SEFERLIK TASIMA SCRIPTI

Mevcut index.html'i okur ve <main> icindeki her bolumu
icerik/diferansiyel/bolum-N/ altina AYRI dosya olarak yazar.

Icerik BIREBIR kopyalanir; tek karakter degistirilmez.
Sidebar'daki menu etiketleri okunup her parcanin basina
kucuk bir kimlik blogu olarak eklenir; build.py sidebar'i
bundan yeniden uretir.

Kullanim:  python bol.py
"""

import os
import re

KAYNAK = 'index.html'
HEDEF = os.path.join('icerik', 'diferansiyel')

# Bolum govdesindeki bolum basi girintisi (20 bosluk)
BOLUM_BASI = re.compile(r'^ {20}<div id="([^"]+)"')


def oku(yol):
    with open(yol, encoding='utf-8') as f:
        return f.read().split('\n')


def sidebar_haritasi(satirlar):
    """Sidebar'dan bolum adlarini ve id -> menu etiketi haritasini cikarir."""
    bolumler = []          # [{no, ad, acik, kayitlar: [(id, menu, bekliyor)]}]
    suanki = None

    nav_bas = nav_son = None
    for i, s in enumerate(satirlar):
        if '<nav class="sidebar">' in s:
            nav_bas = i
        elif '</nav>' in s and nav_bas is not None:
            nav_son = i
            break

    re_no = re.compile(r'<span class="chapter-num">(\d+)</span>')
    re_ad = re.compile(r'<span class="chapter-name">(.*?)</span>')
    re_link = re.compile(r'<li><a href="#([^"]+)"(\s+class="pending")?>(.*?)</a></li>')

    acik_bayragi = False
    for s in satirlar[nav_bas:nav_son]:
        # 'open' sinifi chapter-toggle butonunda durur, numara satirinda degil
        if 'chapter-toggle' in s:
            acik_bayragi = 'open' in s.split('onclick')[0]
            continue
        m = re_no.search(s)
        if m:
            suanki = {'no': int(m.group(1)), 'ad': '', 'acik': acik_bayragi, 'kayitlar': []}
            bolumler.append(suanki)
            continue
        m = re_ad.search(s)
        if m and suanki is not None:
            suanki['ad'] = m.group(1)
            continue
        m = re_link.search(s)
        if m and suanki is not None:
            suanki['kayitlar'].append((m.group(1), m.group(3), bool(m.group(2))))

    return bolumler


def govde_sinirlari(satirlar):
    """<div id="content-area"> ile </main> arasindaki satir araligi."""
    bas = son = None
    for i, s in enumerate(satirlar):
        if '<div id="content-area">' in s:
            bas = i + 1
        elif '</main>' in s:
            # content-area'yi kapatan </div> bir onceki satirda
            son = i - 1
            break
    return bas, son


def parcalara_ayir(satirlar, bas, son):
    """
    Govdeyi bolum baslarindan parcalara ayirir.
    Bir parcanin onundeki yorum/bos satirlar o parcaya dahil edilir.
    """
    sinirlar = []
    for i in range(bas, son):
        if BOLUM_BASI.match(satirlar[i]):
            sinirlar.append(i)

    parcalar = []
    for k, cizgi in enumerate(sinirlar):
        # onundeki yorum ve bos satirlari geri sar.
        # Yorum bloklari cok satirli olabilir; yarim birakmamak icin
        # '-->' gorunce blogun '<!--' satirina kadar geri gidilir.
        onek = cizgi
        while onek - 1 >= bas:
            onceki = satirlar[onek - 1].strip()
            if onceki == '':
                onek -= 1
            elif onceki.endswith('-->'):
                j = onek - 1
                while j >= bas and '<!--' not in satirlar[j]:
                    j -= 1
                if j < bas:
                    break          # acilisi kayip; dokunma
                onek = j
            else:
                break
        # bir onceki parcanin bitisini asma
        if parcalar and onek < parcalar[-1][2]:
            onek = parcalar[-1][2]

        bitis = sinirlar[k + 1] if k + 1 < len(sinirlar) else son
        parcalar.append((satirlar[cizgi], onek, bitis))

    # her parcanin gercek bitisini bir sonrakinin onegine gore duzelt
    duzeltilmis = []
    for k, (basSatir, p_bas, p_son) in enumerate(parcalar):
        if k + 1 < len(parcalar):
            p_son = parcalar[k + 1][1]
        duzeltilmis.append((basSatir, p_bas, p_son))
    return duzeltilmis


def main():
    satirlar = oku(KAYNAK)
    bolumler = sidebar_haritasi(satirlar)
    bas, son = govde_sinirlari(satirlar)

    # id -> (bolum_no, menu, bekliyor)
    menu_haritasi = {}
    for b in bolumler:
        for (kid, menu, bekliyor) in b['kayitlar']:
            menu_haritasi[kid] = (b['no'], menu, bekliyor)

    parcalar = parcalara_ayir(satirlar, bas, son)
    print('Bulunan bolum sayisi (sidebar):', len(bolumler))
    print('Bulunan icerik parcasi:', len(parcalar))

    # her parca icin bolum numarasini belirle: sidebar'da varsa oradan,
    # yoksa bir onceki parcanin bolumunu devral
    aktif_bolum = 1
    kayitlar = []
    for basSatir, p_bas, p_son in parcalar:
        pid = BOLUM_BASI.match(basSatir).group(1)
        if pid in menu_haritasi:
            aktif_bolum, menu, bekliyor = menu_haritasi[pid]
        else:
            menu, bekliyor = None, False
        kayitlar.append({
            'id': pid, 'bolum': aktif_bolum, 'menu': menu,
            'bekliyor': bekliyor, 'bas': p_bas, 'son': p_son,
        })

    # yaz
    sayaclar = {}
    yazilan = 0
    for k in kayitlar:
        klasor = os.path.join(HEDEF, 'bolum-%d' % k['bolum'])
        os.makedirs(klasor, exist_ok=True)

        sayaclar[k['bolum']] = sayaclar.get(k['bolum'], 0) + 10
        adSayi = sayaclar[k['bolum']]

        govde = '\n'.join(satirlar[k['bas']:k['son']])
        # bastaki ve sondaki bos satirlari kirp (build.py yeniden ekler)
        govde = govde.strip('\n')

        kimlik = ['<!--@', 'id: %s' % k['id']]
        if k['menu']:
            kimlik.append('menu: %s' % k['menu'])
        if k['bekliyor']:
            kimlik.append('durum: bekliyor')
        kimlik.append('-->')

        dosya = os.path.join(klasor, '%03d-%s.html' % (adSayi, k['id']))
        with open(dosya, 'w', encoding='utf-8') as f:
            f.write('\n'.join(kimlik) + '\n' + govde + '\n')
        yazilan += 1

    # bolum adlarini yaz
    for b in bolumler:
        klasor = os.path.join(HEDEF, 'bolum-%d' % b['no'])
        os.makedirs(klasor, exist_ok=True)
        with open(os.path.join(klasor, '_bolum.txt'), 'w', encoding='utf-8') as f:
            f.write('ad: %s\n' % b['ad'])
            f.write('acik: %s\n' % ('evet' if b['acik'] else 'hayir'))

    print('Yazilan parca dosyasi:', yazilan)
    for b in bolumler:
        n = sum(1 for k in kayitlar if k['bolum'] == b['no'])
        print('  bolum-%d  (%2d parca)  %s' % (b['no'], n, b['ad']))


if __name__ == '__main__':
    main()

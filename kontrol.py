# -*- coding: utf-8 -*-
"""Icerik parcalarinda kaynak duzeyinde matematik hatasi arar.

Kullanim:  python kontrol.py

Bilerek dar tutuldu: yalnizca KESIN hatalar raporlanir. Sezgisel kontroller
(rakam arasi bosluk, suslu parantez dengesi) denendi; asilsiz uyari uretip
gercek hatayi gurultude bogduklari icin cikarildi.

Bu script tarayiciya gitmeden yakalanabilecekleri bulur. Kesin dogrulama
tarayicidaki KaTeX taramasidir -- bkz. .ocr-durum.md "Formul dogrulama".

NOT: Bu dosyayi bash heredoc ile yazma. Heredoc ters bolu isaretlerini
yiyor ve regex'leri bozuyor. Write aracini kullan.
"""
import io
import os
import re
import glob
import sys

KOK = os.path.join('icerik', 'diferansiyel')

# Ham LaTeX ayraclari: markdown govdesinde \[ \] \( \) yerine $ kullanilmali.
# Onundeki (?<!\\) sart: LaTeX'te satir sonu \\ ile yazilir ve \\[2pt] gibi
# bosluk ayari alabilir -- o bir ayrac degil, yanlis alarm vermemeli.
HAM_AYRAC = re.compile(r'(?<!\\)\\\[|(?<!\\)\\\]|(?<!\\)\\\(|(?<!\\)\\\)')

bulgular = []
dosyalar = sorted(glob.glob(os.path.join(KOK, 'bolum-*', '*.md')))

for yol in dosyalar:
    ad = os.path.basename(yol)
    satirlar = io.open(yol, encoding='utf-8').read().split('\n')
    acik_blok = False          # cok satirli $$ ... $$ blogu icinde miyiz

    for i, satir in enumerate(satirlar, 1):
        if satir.lstrip().startswith('<'):
            continue           # ham HTML kacis kapisi -- dokunma

        cift = satir.count('$$')

        # 1) Tek kalmis $ -- KaTeX'in yanlis eslestirmesinin bir numarali sebebi
        if not acik_blok and cift % 2 == 0:
            kalan = satir.replace('$$', '')
            if kalan.count('$') % 2 == 1:
                bulgular.append((ad, i, 'TEK $', satir.strip()[:75]))

        # 2) Markdown govdesinde ham LaTeX ayraci
        if HAM_AYRAC.search(satir):
            bulgular.append((ad, i, 'HAM LATEX AYRACI', satir.strip()[:75]))

        # 3) Cok satirli $$ blogunun acilip kapandigini izle
        if cift % 2 == 1:
            acik_blok = not acik_blok

    if acik_blok:
        bulgular.append((ad, len(satirlar), 'KAPANMAMIS $$ BLOGU', '(dosya sonu)'))

if bulgular:
    print('%d kesin bulgu:' % len(bulgular))
    for d, s, t, ayrinti in bulgular:
        print('  %-34s satir %-4d %-20s %s' % (d, s, t, ayrinti))
    sys.exit(1)

print('Temiz - kaynak duzeyinde matematik hatasi yok. (%d dosya tarandi)'
      % len(dosyalar))

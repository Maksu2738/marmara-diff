# Ders Notları Sitesi — Çalışma Kuralları

## En önemli kural

**`docs/index.html` ve kökteki `index.html` DOSYALARINI ASLA OKUMA.**
Bunlar üretilmiş/arşiv dosyalardır, 5000 satırdır ve okumak seansın token
bütçesini yakar. İçeriğe her zaman `icerik/` altındaki küçük parça
dosyalarından ulaş.

## Yapı

```
icerik/diferansiyel/
    ders.txt                 site başlıkları
    bolum-N/
        _bolum.txt           bölümün adı, açık/kapalı durumu, sidebar etiketi
                             (`numara: Ö` gibi bir satırla yuvarlaktaki sayı
                             yerine harf konabilir — Ödevler bölümü böyle)
        010-*.html           eski içerik (HTML, aynen korunuyor)
        020-*.md             yeni içerik (Markdown — bundan sonrası böyle)
sablon/
    kabuk.html  style.css  app.js
build.py                     icerik/ -> docs/
bol.py                       tek seferlik taşıma script'i (tekrar çalıştırma)
docs/                        ÜRETİLEN site — elle düzenleme
```

## Yeni içerik eklerken

1. İlgili `icerik/diferansiyel/bolum-N/` klasörüne **yeni bir `.md` dosyası** yaz.
   Dosya adı `NNN-kisa-ad.md`; baştaki sayı sırayı belirler (010, 020, ... aralık
   bırakılmıştır, araya eklemek için 025 gibi bir sayı kullan).
2. `python build.py` çalıştır.
3. Bitti — sidebar linki otomatik oluşur, elle eklemeye gerek yok.

Mevcut bir bölümü değiştirmek gerekirse sadece o parça dosyasını aç; tüm siteyi
değil.

## Markdown formatı

Her dosya bir kimlik bloğuyla başlar:

```
---
id: bolum-5-1
menu: 5.1 Yay-Kütle Titreşim Denklemi
tip: konu
baslik: 5.1 &nbsp;Yay Üzerindeki Kütlenin Titreşim Diferansiyel Denklemi
---
```

- `id` — sayfa içi çapa; benzersiz olmalı (`build.py` çakışmayı uyarır)
- `menu` — sidebar'da görünecek yazı. **Satırı hiç yazmazsan** o bölüm sidebar'a
  eklenmez (ara bölümler için kullanışlı).
- `tip` — `konu` / `ornek` / `sorular` / `odev` / `chapter-head` / `placeholder`.
  Rozet (Konu / Örnek / Sorular / Ödev) ve sol kenar rengi buna göre otomatik
  gelir. `rozet: yok` ile rozet kapatılır.
- `durum: bekliyor` — sidebar linkini soluk gösterir (içerik henüz yoksa)

Gövde:

| Yazım | Sonuç |
|---|---|
| boş satırla ayrılmış metin | `<p>` |
| `### Başlık` / `#### Başlık` | `<h3>` / `<h4>` |
| `- madde` | `<ul>` |
| `1. madde` | `<ol>` |
| `---` | `<hr>` |
| `**kalın**` `*eğik*` `==vurgulu==` `__altı çizili__` | `<strong>` `<em>` `<span class="highlight">` `<u>` |
| `$...$` ve `$$...$$` | **hiç dokunulmaz**, KaTeX'e gider |
| `<` ile başlayan satır | ham HTML, aynen geçer (kaçış kapısı) |

Soru blokları:

```
[SORU] 1. &nbsp; $\displaystyle\frac{dy}{dx}+x^{2}y=xe^{x}$
[CEVAP]
- **Tür:** Adi diferansiyel denklem
- **Mertebe:** 1

[SORU] 2. &nbsp; Cevapsız soru — örnek bloğu gibi görünür
```

`[CEVAP]` bloğu bir sonraki `[SORU]` satırına kadar sürer; erken bitirmek
gerekirse `[/CEVAP]` yazılır. Cevap içinde paragraf, liste, `$$...$$` serbestçe
kullanılabilir.

## Dikkat

- Matematik içindeki `<`, `_`, `\` karakterleri korunur; `$...$` dışında ham `<`
  kullanacaksan `&lt;` yaz.
- `bol.py` tek seferlik taşıma içindi, **tekrar çalıştırma** — `icerik/`
  altındaki değişiklikleri siler.
- `arsiv/` klasörü taşımadan önceki orijinal dosyaları tutar; referans içindir,
  build'e dahil değildir.

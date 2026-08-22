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

Bölüm klasörleri numara sırasına göre dizilir. **Ders bölümleri `bolum-1`,
`bolum-2`, ... diye devam eder; ders dışı bölümler sona sabitlenmiştir:**
`bolum-89` = Vize (`numara: V`), `bolum-90` = Ödevler (`numara: Ö`),
`bolum-91` = Kapsam Dışı (`numara: K`).
Yeni bir ders bölümü eklerken sıradaki küçük numarayı kullan (Bölüm 4 ->
`bolum-4`); 89/90/91'e dokunma.

## Dış kaynak klasörü

Kullanıcı ham içerikleri `Desktop\ders-icerik\` altına atar: `konular/`,
`odevler/`, `vize/`. "Yeni dosya var" dendiğinde oradan oku, eksik çözümleri
tamamla, `icerik/` altına parça dosya olarak yaz, `python build.py` çalıştır.
Ham dosyaları silme.

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
  gelir. `rozet: yok` rozeti kaldırır; `rozet: Ödev 3` gibi bir değer yazılırsa
  varsayılan metnin yerine o kullanılır (Ödevler bölümü böyle çalışıyor:
  rozet numarayı, başlık konuyu taşır).
- `durum: bekliyor` — sidebar linkini soluk gösterir (içerik henüz yoksa)

Gövde:

| Yazım | Sonuç |
|---|---|
| boş satırla ayrılmış metin | `<p>` |
| `### Başlık` / `#### Başlık` | `<h3>` / `<h4>` |
| `- madde` | `<ul>` |
| `1. madde` | `<ol>` |
| `---` | `<hr>` |
| `**kalın**` `*eğik*` `==vurgulu==` `__altı çizili__` | `<strong>` `<em>` `<span class="vurgu">` `<u>` |
| `[KUTU]` … `[/KUTU]` | `<div class="highlight">` — "Not:", tanım vb. için kutu |
| `\| a \| b \|` + `\|---\|---\|` | `<table>` — otomatik `<div class="tablo-sar">` içine alınır |
| `$...$` ve `$$...$$` | içerik korunur, yalnız `& < >` HTML kaçışına çevrilir |
| `<` ile başlayan satır | ham HTML, aynen geçer (kaçış kapısı) |

Tablo: ilk satır başlık, ikinci satır `|---|---|` ayracı olmak zorunda (ayraç yoksa
tablo sayılmaz, paragraf olur). `th`/`td` stilleri hazır, satır içi stil yazma.
Sarmalayıcı `tablo-sar` dar ekranda yatay kaydırma sağlar ve build otomatik ekler.
Hücre içinde `|` gerekiyorsa `\vert` yaz.

Soru blokları:

```
[SORU] 1. &nbsp; $\displaystyle\frac{dy}{dx}+x^{2}y=xe^{x}$
[CEVAP]
- **Tür:** Adi diferansiyel denklem
- **Mertebe:** 1

[SORU] 2. &nbsp; Cevapsız soru — örnek bloğu gibi görünür
```

`[SORU*]` yazılırsa soru **ders notu sorusu** olarak işaretlenir: bloğa yıldız
rozeti eklenir, kenarı parlar ve yıldız zıplar. Yalnızca hocanın ders defterinde
geçtiği doğrulanmış sorulara ver. `.html` parçalarda karşılığı elle yazılır:
`<div class="question-block yildizli">` + rozet `<span>`i.

**Soru metni tek satır olmalı.** `[SORU]` satırı ilk boş satırda biter; araya boş
satır koyarsan `[CEVAP]` sahipsiz kalır. Denklemi `$\displaystyle ...$` ile satır
içine al, şıkları `<br>**(a)**` diye ayır — `$$...$$` bloğu kullanma. (Yanlış
yazarsan `build.py` uyarı basar, artık kilitlenmez.)

`[CEVAP]` bloğu bir sonraki `[SORU]` satırına kadar sürer; erken bitirmek
gerekirse `[/CEVAP]` yazılır. Cevap içinde paragraf, liste, `$$...$$` serbestçe
kullanılabilir.

## Yazım tercihi

"Teorem" kelimesi sitede **her yerde `THEoREM`** olarak yazılır — başlıkta da,
cümle içinde de. Kullanıcının kişisel tercihi.

Türkçe ekler kesme işaretiyle bağlanır: `THEoREM'i`, `THEoREM'ler`,
`THEoREM'den`, `THEoREM'inin`. Ek yoksa düz `THEoREM`.

`id:` satırlarına ve `$...$` matematiğine **dokunma** — çapa isimleri
küçük harfli kalır (`bolum-4-6`, `teorem-...` gibi mevcut id'ler değişmez).

## Dikkat

- Matematik içindeki `<`, `>`, `&` karakterlerini **olduğu gibi yaz** — `build.py`
  bunları HTML kaçışına çevirir (KaTeX metni `textContent`'ten okuduğu için
  görüntüde fark olmaz). Elle `&lt;` yazmak da çalışır ama gereksizdir.
  Kaçış olmadan `$0<t<2$` gibi bir ifadede `<t<2$ ... $` parçası tarayıcı
  tarafından etiket sanılıp yutulur ve formül ham metin olarak görünür.
- `$...$` dışında ham `<` kullanacaksan (metin içinde) `&lt;` yaz.
- `.highlight` **blok kutusudur**, satır içi vurgu için değil. Satır içi vurgu
  `.vurgu` sınıfıdır (`==...==` bunu üretir). Karıştırma — `<span class="highlight">`
  yazarsan metnin üstüne taşan bir kutu çıkar.
- `bol.py` tek seferlik taşıma içindi, **tekrar çalıştırma** — `icerik/`
  altındaki değişiklikleri siler.
- `arsiv/` klasörü taşımadan önceki orijinal dosyaları tutar; referans içindir,
  build'e dahil değildir.

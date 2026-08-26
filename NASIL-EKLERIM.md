# Claude olmadan içerik ekleme kılavuzu

Bu site **tamamen statiktir**. Çalışması için gereken tek şey Python'dur —
Claude'a, internete ya da herhangi bir servise bağlı değildir. Aşağıdaki
adımlarla her şeyi kendiniz ekleyebilirsiniz.

---

## 1. Yeni konu eklemek — 3 adım

**Adım 1.** İlgili bölüm klasörüne yeni bir `.md` dosyası koyun:

```
icerik/diferansiyel/bolum-8/095-yeni-konu.md
```

Dosya adının başındaki sayı **sırayı belirler**. Mevcut dosyalar 010, 020,
030... diye gider; araya girmek için 025 gibi bir sayı seçin.

**Adım 2.** `yayinla.bat` dosyasına çift tıklayın. (Ya da komut satırında
`python build.py`.)

**Adım 3.** Bitti. Sidebar linki otomatik oluşur, elle eklemeye gerek yok.

Değişikliği GitHub'a göndermek için:

```
git add -A
git commit -m "Bölüm 8.9 eklendi"
git push
```

---

## 2. Dosyanın başındaki kimlik bloğu

Her `.md` dosyası şu blokla **başlamak zorundadır**:

```
---
id: kdd-yeni-konu
menu: 8.9 Yeni Konunun Adı
tip: konu
baslik: 8.9 &nbsp;Sayfada Görünecek Uzun Başlık
---
```

| Satır | Ne işe yarar |
|---|---|
| `id` | Sayfa içi çapa. **Benzersiz olmalı** — çakışırsa build uyarır. |
| `menu` | Soldaki listede görünecek yazı. Satırı **hiç yazmazsanız** o bölüm listeye eklenmez. |
| `tip` | `konu` / `ornek` / `sorular` / `odev` / `chapter-head` / `placeholder`. Rozet ve kenar rengi buna göre gelir. |
| `baslik` | Sayfada büyük harflerle görünen başlık. |

İsteğe bağlı satırlar:

- `durum: bekliyor` — sidebar linkini soluk gösterir (içerik henüz yoksa)
- `rozet: yok` — rozeti kaldırır. `rozet: Ödev 3` yazarsanız o metni kullanır.
- `defterde: yok` — "kitapta var ama hoca derste işlemedi" uyarısı koyar

---

## 3. Yazım kuralları (kopyala-yapıştır)

### Metin

| Yazdığınız | Çıkan |
|---|---|
| boş satırla ayrılmış metin | normal paragraf |
| `### Başlık` | ara başlık |
| `- madde` | madde listesi |
| `1. madde` | numaralı liste |
| `**kalın**` | **kalın** |
| `*eğik*` | *eğik* |
| `==vurgulu==` | sarı vurgulu metin |
| `---` | yatay çizgi |

### Matematik

`$...$` satır içi, `$$...$$` ortalanmış blok. KaTeX yazımı geçerlidir.

> **Önemli:** matematik içindeki `<`, `>`, `&` karakterlerini **olduğu gibi
> yazın**. `build.py` bunları kendisi dönüştürür. Elle `&lt;` yazmanıza
> gerek yok.

### Kutular

```
[KUTU]
Mor kutu — tanım, not, uyarı için.
[/KUTU]
```

```
[CLAUDE] İsteğe bağlı başlık
Turkuaz kutu — "kitaptan gelmeyen tüyo" anlamına gelir.
[/CLAUDE]
```

### Soru–cevap blokları

```
[SORU] **Örnek 8.11.** &nbsp; $\displaystyle u_t = k u_{xx}$ denklemini çözünüz.
[CEVAP]
Cevap metni buraya. Paragraf, liste, $$...$$ serbestçe girer.
[/CEVAP]
```

`[SORU*]` yazarsanız soru **yıldızlı** olur — yalnızca ders notunda geçtiği
kesin olan sorulara verin.

> **Kural:** `[SORU]` satırı **tek satır olmalıdır**. Araya boş satır
> koyarsanız `[CEVAP]` sahipsiz kalır ve build uyarı basar. Denklemi
> `$\displaystyle ...$` ile satır içine alın, şıkları `<br>**(a)**` diye
> ayırın.

### Tablo

```
| Başlık 1 | Başlık 2 |
|---|---|
| satır | satır |
```

İkinci satırdaki `|---|---|` **zorunludur**; yoksa tablo sayılmaz.
Hücre içinde `|` gerekiyorsa `\vert` yazın.

### Kaçış kapısı

`<` ile başlayan satır **ham HTML** olarak geçer. Markdown'ın
yetmediği yerde doğrudan HTML yazabilirsiniz.

---

## 4. Yeni bölüm eklemek

`icerik/diferansiyel/bolum-9/` klasörü açın, içine `_bolum.txt` koyun:

```
ad: Bölümün Adı
acik: hayir
```

Sonra normal `.md` dosyalarını ekleyin.

> Ders bölümleri `bolum-1`, `bolum-2`, ... diye devam eder.
> `bolum-89` (Vize) ve `bolum-90` (Ödevler) **sona sabitlenmiştir**;
> onlara dokunmayın.

---

## 5. Bir şey ters giderse

**`python build.py` hata verdi.**
Hata mesajı hangi dosyada olduğunu söyler. En sık sebepler: kimlik bloğunun
`---` satırları eksik, `id` başka dosyayla çakışıyor, `[SORU]` satırı boş
satırla bölünmüş.

**Formül ham metin olarak görünüyor.**
Matematik içinde elle `&lt;` yazmış olabilirsiniz ya da `$` sayısı tek
kalmıştır. `python kontrol.py` çalıştırın — kaynak düzeyindeki matematik
hatalarını bulur.

**Sidebar'da link çıkmadı.**
Kimlik bloğunda `menu:` satırı yok demektir.

**Site güncellenmedi.**
`python build.py` çalıştırmayı unutmuş olabilirsiniz. `docs/` klasörü
üretilen çıktıdır — **elle düzenlemeyin**, her build'de üzerine yazılır.

---

## 6. Asla yapılmayacaklar

- `bol.py` **çalıştırmayın**. Tek seferlik taşıma script'iydi;
  tekrar çalıştırırsanız `icerik/` altındaki değişiklikleri siler.
- `docs/index.html` dosyasını **elle düzenlemeyin**. Üretilen dosyadır.
- `arsiv/` klasörü taşımadan önceki orijinalleri tutar; build'e dahil
  değildir, referans içindir.

---

## 7. Dosya haritası

```
icerik/diferansiyel/     ← BÜTÜN İÇERİK BURADA, tek düzenlenecek yer
    ders.txt                 site başlıkları
    bolum-N/
        _bolum.txt           bölüm adı
        NNN-*.md             içerik parçaları
sablon/                  kabuk.html, style.css, app.js — görünüm
build.py                 icerik/ -> docs/
kontrol.py               matematik hatası tarar
arama.py                 arama indeksi
yayinla.bat              çift tıkla, build'i çalıştırır
docs/                    ÜRETİLEN site — elle dokunma
```

---
id: laplace-yuksek-turev
menu: 4.1 Yüksek Mertebeden Türevler
tip: konu
baslik: 4.1 &nbsp;Yüksek Mertebeden Türevlerin Dönüşümü
---

THEoREM 9.3 birinci türevi $s$ ile çarpmaya çevirdi. İkinci, üçüncü ve daha yüksek türevler için de benzer bir kural gerekiyor — çünkü çözeceğimiz denklemler genelde ikinci mertebeden.

[KUTU]
**THEoREM 9.4**

Uygun koşullar altında ($f$, $f'$, ..., $f^{(n-1)}$ sürekli ve üstel mertebeden; $f^{(n)}$ parçalı sürekli) $\mathcal{L}\{f^{(n)}\}$, $s>\alpha$ için vardır ve

$$\mathcal{L}\{f^{(n)}(t)\}=s^{n}\mathcal{L}\{f(t)\}-s^{n-1}f(0)-s^{n-2}f'(0)-\dots-f^{(n-1)}(0) \tag{9.17}$$
[/KUTU]

**İspatın fikri.** Önce THEoREM 9.3'teki gibi ilerlenerek

$$\mathcal{L}\{f^{(n)}\}=s\,\mathcal{L}\{f^{(n-1)}\}-f^{(n-1)}(0)$$

gösterilir — yani ==her türev alma bir basamak aşağı iner==. Sonra **tümevarımla (mathematical induction)** genel formüle ulaşılır. $\blacksquare$

### En çok kullanılan iki özel durum

$n=1$ (THEoREM 9.3'te bulunmuştu):

$$\mathcal{L}\{f'(t)\}=s\,\mathcal{L}\{f(t)\}-f(0) \tag{9.11}$$

$n=2$:

$$\boxed{\;\mathcal{L}\{f''(t)\}=s^{2}\mathcal{L}\{f(t)\}-s\,f(0)-f'(0)\;} \tag{9.18}$$

[KUTU]
**Yapıyı ezberlemenin kolay yolu.** $s$'nin kuvveti ile türev mertebesi ==ters sırada== ilerler: en yüksek $s$ kuvveti $f(0)$'ın yanında, en düşüğü ($s^{0}=1$) en yüksek türevin başlangıç değerinin yanındadır.

$n=2$ için: $s^{2}\mathcal{L}\{f\}$, sonra $s^{1}f(0)$, sonra $s^{0}f'(0)$. Hepsi eksi işaretli.

==$n$. mertebeden bir denklem için $n$ tane başlangıç değeri gerekir== — formül bunu kendiliğinden talep eder.
[/KUTU]

---

[SORU] **Örnek 9.14.** &nbsp; THEoREM 9.4'ü $n=2$ ile kullanarak $\mathcal{L}\{\sin bt\}$ değerini bulunuz (bunu $(9.5)$'te doğrudan integralle bulmuştuk).
[CEVAP]
$f(t)=\sin bt$ fonksiyonu THEoREM'in hipotezlerini $\alpha=0$ ile sağlar.

**Adım 1 — Gerekli değerleri hesapla.**

$$f'(t)=b\cos bt,\qquad f''(t)=-b^{2}\sin bt$$
$$f(0)=0,\qquad f'(0)=b$$

**Adım 2 — $(9.18)$'e yerleştir.**

$$\mathcal{L}\{f''(t)\}=s^{2}\mathcal{L}\{f(t)\}-s\cdot 0-b$$

$$\mathcal{L}\{-b^{2}\sin bt\}=s^{2}\mathcal{L}\{\sin bt\}-b$$

**Adım 3 — Lineerlikle sol tarafı aç ve çöz.**

$$-b^{2}\mathcal{L}\{\sin bt\}=s^{2}\mathcal{L}\{\sin bt\}-b$$

$\mathcal{L}\{\sin bt\}$ terimlerini bir tarafa toplayalım:

$$b=s^{2}\mathcal{L}\{\sin bt\}+b^{2}\mathcal{L}\{\sin bt\}=\left(s^{2}+b^{2}\right)\mathcal{L}\{\sin bt\}$$

$$\boxed{\;\mathcal{L}\{\sin bt\}=\frac{b}{s^{2}+b^{2}}\;}$$

==$(9.5)$ ile birebir aynı.== Dikkat çekici olan şudur: burada **hiç integral almadık**. $\sin bt$'nin ikinci türevinin yine kendisiyle orantılı olması ($f''=-b^{2}f$), dönüşümü cebirsel olarak çözmemizi sağladı.

[SORU] **Örnek 9.15.** &nbsp; $f''-6f'+5f=0$, $f(0)=3$, $f'(0)=7$ koşullarını sağlayan $f$ için $\mathcal{L}\{f(t)\}$ ifadesini bulunuz.
[CEVAP]
**Adım 1 — Türevlerin dönüşümlerini yaz.**

$(9.18)$ ile:

$$\mathcal{L}\{f''(t)\}=s^{2}\mathcal{L}\{f(t)\}-s\,f(0)-f'(0)=s^{2}\mathcal{L}\{f(t)\}-3s-7$$

$(9.11)$ ile:

$$\mathcal{L}\{f'(t)\}=s\,\mathcal{L}\{f(t)\}-f(0)=s\,\mathcal{L}\{f(t)\}-3$$

**Adım 2 — Denklemin dönüşümünü al.**

$$s^{2}\mathcal{L}\{f(t)\}-3s-7-6\Big[s\,\mathcal{L}\{f(t)\}-3\Big]+5\mathcal{L}\{f(t)\}=0$$

**Adım 3 — Benzer terimleri topla.**

$\mathcal{L}\{f(t)\}$ çarpanları: $s^{2}-6s+5$. Sabit terimler: $-3s-7+18=-3s+11$.

$$\left[s^{2}-6s+5\right]\mathcal{L}\{f(t)\}-3s+11=0$$

**Adım 4 — Çöz.**

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{3s-11}{s^{2}-6s+5}\;}$$

[KUTU]
**Buraya kadar geldik ama iş bitmedi.** Elimizde $f$'nin kendisi değil, ==dönüşümü== var. $f(t)$'yi bulmak için "dönüşümü bu olan fonksiyon hangisidir" sorusunu yanıtlamamız gerekiyor.

Bu **ters dönüşüm (inverse transform)** işlemidir ve 4.2'de ele alınacaktır. Laplace yönteminin en zahmetli kısmı da genelde burasıdır.

Bu örnekte payda $s^{2}-6s+5=(s-1)(s-5)$ çarpanlarına ayrılır; kısmi kesirlere açılıp tablodan geri okunabilir.
[/KUTU]

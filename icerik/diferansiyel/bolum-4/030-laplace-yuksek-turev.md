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

[SORU*] **Örnek 9.15.** &nbsp; $f''-6f'+5f=0$, $f(0)=3$, $f'(0)=7$ koşullarını sağlayan $f$ için $\mathcal{L}\{f(t)\}$ ifadesini bulunuz.
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

---

### Türev THEoREM'inin iki yönlü kullanımı

Örnek 9.14'te THEoREM'i **bilinmeyen dönüşümü bulmak** için kullandık. Aynı THEoREM ters yönde de çalışır: ==zor bir fonksiyonun, dönüşümü kolay bir fonksiyonun türevi olduğunu fark edersek== hesap tek satıra iner.

[SORU*] **Ders Notu Örneği A.** &nbsp; $(9.11)$'i kullanarak $\mathcal{L}\{1\}=\dfrac{1}{s}$ olduğunu, $\mathcal{L}\{t\}$ üzerinden gösteriniz.
[CEVAP]
**Adım 1 — Uygun $f$'yi seç.**

$f'(t)=1$ olmasını istiyoruz; buna karşılık gelen fonksiyon $f(t)=t$'dir ve $f(0)=0$.

**Adım 2 — $(9.11)$'i yaz.**

$$\mathcal{L}\{f'(t)\}=s\,\mathcal{L}\{f(t)\}-f(0)\;\Longrightarrow\;\mathcal{L}\{1\}=s\,\mathcal{L}\{t\}-0$$

**Adım 3 — $\mathcal{L}\{t\}$'yi kısmi integrasyonla bul.**

$$\mathcal{L}\{t\}=\int_{0}^{\infty}e^{-st}\,t\,dt$$

$u=t$, $dv=e^{-st}dt$ &nbsp;($du=dt$, $v=-\tfrac{1}{s}e^{-st}$):

$$=\left[-\frac{t}{s}e^{-st}\right]_{0}^{\infty}+\frac{1}{s}\int_{0}^{\infty}e^{-st}\,dt$$

$s>0$ için köşeli parantez her iki uçta da sıfırdır ($t\to\infty$'da üstel azalma doğrusal büyümeyi yener):

$$\mathcal{L}\{t\}=0+\frac{1}{s}\cdot\frac{1}{s}=\frac{1}{s^{2}}$$

**Adım 4 — Geri yerleştir.**

$$\mathcal{L}\{1\}=s\cdot\frac{1}{s^{2}}=\boxed{\frac{1}{s}}$$

Örnek 9.1'de doğrudan integralle bulduğumuz sonucun aynısı. &#10003;
[/CEVAP]

[SORU*] **Ders Notu Örneği B.** &nbsp; $\mathcal{L}\{2a\sin at\cos at\}$ değerini, $(9.11)$ ve $(9.10)$'u kullanarak bulunuz.
[CEVAP]
**Adım 1 — Çarpımı bir türev olarak tanı.**

Zincir kuralıyla:

$$\frac{d}{dt}\sin^{2}at=2\sin at\cdot\frac{d}{dt}(\sin at)=2a\sin at\cos at$$

Yani aradığımız fonksiyon, $f(t)=\sin^{2}at$'nin türevidir. ==Püf nokta bu: çarpımı doğrudan dönüştürmeye çalışmak yerine, dönüşümü bilinen bir fonksiyonun türevi olduğunu görmek.==

**Adım 2 — $(9.11)$'i uygula.**

$f(0)=\sin^{2}0=0$ olduğuna dikkat edin:

$$\mathcal{L}\{2a\sin at\cos at\}=\mathcal{L}\{f'(t)\}=s\,\mathcal{L}\left\{\sin^{2}at\right\}-\underbrace{f(0)}_{=\,0}$$

**Adım 3 — $(9.10)$'dan oku ve sadeleştir.**

Örnek 9.11'de $\mathcal{L}\{\sin^{2}at\}=\dfrac{2a^{2}}{s\left(s^{2}+4a^{2}\right)}$ bulmuştuk:

$$=s\cdot\frac{2a^{2}}{s\left(s^{2}+4a^{2}\right)}=\boxed{\;\frac{2a^{2}}{s^{2}+4a^{2}}\;}$$

**Doğrulama.** $2a\sin at\cos at=a\sin 2at$ olduğundan, sonucu $(9.5)$'ten de okuyabiliriz: $\mathcal{L}\{a\sin 2at\}=a\cdot\dfrac{2a}{s^{2}+(2a)^{2}}=\dfrac{2a^{2}}{s^{2}+4a^{2}}$. &#10003;
[/CEVAP]

[KUTU]
**İki yolun karşılaştırması.** Doğrulamada gördüğümüz gibi bu örnek $\sin 2at$ özdeşliğiyle de çözülebilirdi. Ama sınavda her zaman böyle bir özdeşlik olmaz; ==türev THEoREM'i özdeşliğe ihtiyaç duymadan çalışır==. $f(0)=0$ olması da çoğu zaman işi kolaylaştırır — sabit terim düşer.
[/KUTU]

---

[CLAUDE] Türev THEoREM'ini formül olarak değil, desen olarak hatırlayın
$$\mathcal{L}\left\{y^{(n)}\right\}=s^{n}Y-s^{n-1}y(0)-s^{n-2}y'(0)-\cdots-y^{(n-1)}(0)$$

**Desen:** $s$'nin kuvveti azalırken $y$'nin türev mertebesi artar; ==her terimde ikisinin toplamı hep $n-1$.== Bunu bilirseniz formülü yeniden yazabilirsiniz.

**Sınav kısayolu (ikinci mertebe).** $ay''+by'+cy$ ifadesinin dönüşümü her zaman şudur:

$$\underbrace{\left(as^{2}+bs+c\right)}_{\text{karakteristik polinom}}Y(s)-\underbrace{\Big[a\left(sy_{0}+y_{0}'\right)+by_{0}\Big]}_{\text{başlangıç koşulu polinomu}}$$

Denklemi her seferinde tek tek dönüştürmek yerine bunu doğrudan yazın. ==Paydanın karakteristik polinom olması da bir kontrol noktası:== $Y(s)$'nin paydası, elle çözseniz bulacağınız karakteristik denklemle aynı olmalı.
[/CLAUDE]

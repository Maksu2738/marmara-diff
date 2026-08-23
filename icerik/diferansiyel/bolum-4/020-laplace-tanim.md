---
id: laplace-tanim
menu: 4.1 Tanım ve Temel Dönüşümler
tip: konu
baslik: 4.1 &nbsp;Laplace Dönüşümünün Tanımı ve Temel Dönüşümler
---

**Laplace dönüşümü (Laplace transform)**, gerçel değişkenli uygun bir $f$ fonksiyonunu, gerçel değişkenli bir $F$ fonksiyonuna dönüştürür. Bir lineer diferansiyel denklemin **başlangıç değer problemine (initial-value problem)** uygulandığında, problemi ==$s$ değişkenli cebirsel bir probleme== çevirir.

Fikir şudur: türev almak $s$ ile çarpmaya dönüşür, dolayısıyla diferansiyel denklem cebirsel denkleme iner; cebirsel denklem çözülür ve sonuç geri çevrilir.

[KUTU]
**TANIM.** $f$, $t>0$ için tanımlı, gerçel değişkenli gerçel değerli bir fonksiyon olsun. $s$ gerçel bir değişken olmak üzere

$$F(s)=\int_{0}^{\infty}e^{-st}f(t)\,dt \tag{9.1}$$

integrali ile tanımlanan $F$ fonksiyonuna, $f$ fonksiyonunun **Laplace dönüşümü** denir. Gösterimi:

$$\mathcal{L}\{f\}=F,\qquad \mathcal{L}\{f(t)\}=F(s)$$
[/KUTU]

$(9.1)$ bir **has olmayan integraldir (improper integral)**; analiz dersinden hatırlayacağınız gibi bir limit olarak tanımlanır:

$$F(s)=\int_{0}^{\infty}e^{-st}f(t)\,dt=\lim_{R\to\infty}\int_{0}^{R}e^{-st}f(t)\,dt$$

==Bu limitin var olması gerekir==; dönüşümün tanımlı olduğu $s$ değerleri de buna göre belirlenir. Aşağıdaki her örnekte, sonucun geçerli olduğu $s$ aralığına dikkat edin.

---

[SORU*] **Örnek 9.1.** &nbsp; $f(t)=1$ ($t>0$) fonksiyonunun Laplace dönüşümünü bulunuz.
[CEVAP]
$$\mathcal{L}\{1\}=\int_{0}^{\infty}e^{-st}\cdot 1\,dt=\lim_{R\to\infty}\int_{0}^{R}e^{-st}\,dt=\lim_{R\to\infty}\left[\frac{-e^{-st}}{s}\right]_{0}^{R}$$

$$=\lim_{R\to\infty}\left[\frac{1}{s}-\frac{e^{-sR}}{s}\right]$$

$s>0$ ise $e^{-sR}\to 0$ olur ve limit vardır:

$$\boxed{\;\mathcal{L}\{1\}=\frac{1}{s}\qquad (s>0)\;} \tag{9.2}$$

==$s\le 0$ için $e^{-sR}$ sınırsız büyür ve integral ıraksar==; kısıtın kaynağı budur.

[SORU*] **Örnek 9.2.** &nbsp; $f(t)=t$ fonksiyonunun Laplace dönüşümünü bulunuz.
[CEVAP]
Kısmi integrasyonla ilkel fonksiyon bulunur:

$$\int e^{-st}t\,dt=-\frac{e^{-st}}{s^{2}}(st+1)$$

Buradan

$$\mathcal{L}\{t\}=\lim_{R\to\infty}\left[-\frac{e^{-st}}{s^{2}}(st+1)\right]_{0}^{R}=\lim_{R\to\infty}\left[\frac{1}{s^{2}}-\frac{e^{-sR}}{s^{2}}(sR+1)\right]$$

$s>0$ için $e^{-sR}(sR+1)\to 0$ olur — ==üstel azalma, doğrusal büyümeyi yener==:

$$\boxed{\;\mathcal{L}\{t\}=\frac{1}{s^{2}}\qquad (s>0)\;} \tag{9.3}$$

[SORU*] **Örnek 9.3.** &nbsp; $f(t)=e^{at}$ fonksiyonunun Laplace dönüşümünü bulunuz.
[CEVAP]
İki üstel birleşir:

$$\mathcal{L}\{e^{at}\}=\int_{0}^{\infty}e^{-st}e^{at}\,dt=\lim_{R\to\infty}\int_{0}^{R}e^{(a-s)t}\,dt=\lim_{R\to\infty}\left[\frac{e^{(a-s)t}}{a-s}\right]_{0}^{R}$$

$$=\lim_{R\to\infty}\left[\frac{e^{(a-s)R}}{a-s}-\frac{1}{a-s}\right]$$

$s>a$ ise $a-s<0$ olur, $e^{(a-s)R}\to 0$ ve limit vardır:

$$\boxed{\;\mathcal{L}\{e^{at}\}=-\frac{1}{a-s}=\frac{1}{s-a}\qquad (s>a)\;} \tag{9.4}$$

==Kısıt bu kez $s>0$ değil $s>a$.== $a=0$ konursa Örnek 9.1'e indirgenir.

[SORU*] **Örnek 9.4.** &nbsp; $f(t)=\sin bt$ fonksiyonunun Laplace dönüşümünü bulunuz.
[CEVAP]
İlkel fonksiyon (iki kez kısmi integrasyonla bulunur):

$$\int e^{-st}\sin bt\,dt=-\frac{e^{-st}}{s^{2}+b^{2}}\left(s\sin bt+b\cos bt\right)$$

$$\mathcal{L}\{\sin bt\}=\lim_{R\to\infty}\left[\frac{b}{s^{2}+b^{2}}-\frac{e^{-sR}}{s^{2}+b^{2}}\left(s\sin bR+b\cos bR\right)\right]$$

Parantez içindeki ifade ==sınırlıdır== ($\sin$ ve $\cos$ $[-1,1]$ arasında), $e^{-sR}$ ise $s>0$ için sıfıra gider; çarpım sıfırdır:

$$\boxed{\;\mathcal{L}\{\sin bt\}=\frac{b}{s^{2}+b^{2}}\qquad (s>0)\;} \tag{9.5}$$

[SORU*] **Örnek 9.5.** &nbsp; $f(t)=\cos bt$ fonksiyonunun Laplace dönüşümünü bulunuz.
[CEVAP]
Aynı yolla:

$$\mathcal{L}\{\cos bt\}=\lim_{R\to\infty}\left[\frac{s}{s^{2}+b^{2}}+\frac{e^{-sR}}{s^{2}+b^{2}}\left(-s\cos bR+b\sin bR\right)\right]$$

$$\boxed{\;\mathcal{L}\{\cos bt\}=\frac{s}{s^{2}+b^{2}}\qquad (s>0)\;} \tag{9.6}$$

---

### Temel dönüşümler tablosu

Buraya kadar bulduklarımız:

<div class="tablo-sar">
<table>
<tr><th>$f(t)$</th><th>$\mathcal{L}\{f(t)\}$</th><th>Geçerlilik</th></tr>
<tr><td>$1$</td><td>$\dfrac{1}{s}$</td><td>$s>0$</td></tr>
<tr><td>$t$</td><td>$\dfrac{1}{s^{2}}$</td><td>$s>0$</td></tr>
<tr><td>$e^{at}$</td><td>$\dfrac{1}{s-a}$</td><td>$s>a$</td></tr>
<tr><td>$\sin bt$</td><td>$\dfrac{b}{s^{2}+b^{2}}$</td><td>$s>0$</td></tr>
<tr><td>$\cos bt$</td><td>$\dfrac{s}{s^{2}+b^{2}}$</td><td>$s>0$</td></tr>
</table>
</div>

[KUTU]
**$\sin$ ile $\cos$ arasındaki simetriye dikkat.** Paydaları aynıdır ($s^{2}+b^{2}$); paylarda $\sin$ için $b$, $\cos$ için $s$ vardır. Bu ikisini karıştırmak sınavda en sık yapılan hatadır. Hatırlama yolu: $t=0$'da $\cos 0=1$ olduğu için $\cos$'un dönüşümü $s\to\infty$ iken $\frac{1}{s}$ gibi davranmalıdır — payında $s$ olan odur.
[/KUTU]

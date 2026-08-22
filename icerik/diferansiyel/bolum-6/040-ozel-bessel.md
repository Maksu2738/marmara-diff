---
id: ozel-dd-bessel
menu: 6.3 Bessel Denklemi
tip: konu
baslik: 6.3 &nbsp;Bessel Denklemi ve Bessel Fonksiyonları
---

$p$ bir parametre olmak üzere

$$x^{2}y''+xy'+\left(x^{2}-p^{2}\right)y=0 \tag{6.101}$$

denklemine **$p$. mertebeden Bessel denklemi (Bessel's equation of order $p$)** denir. Bu denklemin herhangi bir çözümüne **$p$. mertebeden Bessel fonksiyonu (Bessel function of order $p$)** adı verilir.

Bessel denklemi ve Bessel fonksiyonları fizik ve mühendislikte pek çok problemde — özellikle silindirik simetrili olanlarda — karşımıza çıkar; bu konuda geniş bir literatür vardır.

[KUTU]
**Bu bölüm neden Bölüm 5'in doğal devamıdır?** Sıfırıncı mertebeden Bessel denklemi, belirtici denklemin ==kökleri eşit çıkan== durumun tam örneğidir. Bölüm 5.10'da bu durumun teorisini kurmuş ama örneğini görmemiştik; burada göreceğiz. Logaritmalı ikinci çözüm burada kaçınılmaz olarak ortaya çıkacak.
[/KUTU]

---

### Sıfırıncı mertebeden Bessel denklemi

$p=0$ alırsak $(6.101)$ şuna denktir:

$$xy''+y'+xy=0 \tag{6.102}$$

Buna **sıfırıncı mertebeden Bessel denklemi (Bessel's equation of order zero)** denir. $0<x<R$ aralığında çözüm arayacağız.

$x=0$ düzgün tekil noktadır, dolayısıyla Frobenius uygulanır:

$$y=\sum_{n=0}^{\infty}c_{n}x^{n+r},\qquad c_{0}\neq 0$$

Türevleri alıp $(6.102)$'ye koyarsak:

$$\sum_{n=0}^{\infty}(n+r)(n+r-1)c_{n}x^{n+r-1}+\sum_{n=0}^{\infty}(n+r)c_{n}x^{n+r-1}+\sum_{n=0}^{\infty}c_{n}x^{n+r+1}=0$$

İlk iki toplamda ortak çarpan alalım — $(n+r)(n+r-1)+(n+r)=(n+r)^{2}$ — ve üçüncüde $n\to n-2$ kaydıralım:

$$\sum_{n=0}^{\infty}(n+r)^{2}c_{n}x^{n+r-1}+\sum_{n=2}^{\infty}c_{n-2}x^{n+r-1}=0$$

$n=0$ ve $n=1$ terimlerini ayırırsak:

$$r^{2}c_{0}x^{r-1}+(1+r)^{2}c_{1}x^{r}+\sum_{n=2}^{\infty}\Big[(n+r)^{2}c_{n}+c_{n-2}\Big]x^{n+r-1}=0$$

**Belirtici denklem:**

$$r^{2}=0\;\Longrightarrow\;\boxed{\,r_{1}=r_{2}=0\,}$$

==Kökler eşit.== THEoREM 5.3'ün Sonuç 3 durumundayız: tek bir Frobenius çözümü olacak, ikincisi kesinlikle logaritma içerecek.

---

### Birinci çözüm: $J_{0}$

$r=0$ koyalım. $(1+r)^{2}c_{1}=0$ koşulu $c_{1}=0$ verir. Özyineleme:

$$n^{2}c_{n}+c_{n-2}=0\;\Longrightarrow\;\boxed{\,c_{n}=-\frac{c_{n-2}}{n^{2}},\quad n\ge 2\,}$$

$$c_{2}=-\frac{c_{0}}{2^{2}},\qquad c_{3}=-\frac{c_{1}}{3^{2}}=0,\qquad c_{4}=-\frac{c_{2}}{4^{2}}=\frac{c_{0}}{2^{2}\cdot 4^{2}}$$

$c_{1}=0$ olduğundan bütün tek indisli katsayılar sıfırdır. Genel çift katsayı:

$$c_{2n}=\frac{(-1)^{n}c_{0}}{2^{2}\cdot 4^{2}\cdot 6^{2}\cdots(2n)^{2}}=\frac{(-1)^{n}c_{0}}{(n!)^{2}\,2^{2n}}$$

Buradan

$$y_{1}(x)=c_{0}\sum_{n=0}^{\infty}\frac{(-1)^{n}}{(n!)^{2}}\left(\frac{x}{2}\right)^{2n}$$

[KUTU]
**TANIM.** $c_{0}=1$ seçilirse elde edilen özel çözüme **birinci tür sıfırıncı mertebeden Bessel fonksiyonu (Bessel function of the first kind of order zero)** denir ve $J_{0}$ ile gösterilir:

$$J_{0}(x)=\sum_{n=0}^{\infty}\frac{(-1)^{n}}{(n!)^{2}}\left(\frac{x}{2}\right)^{2n} \tag{6.107}$$
[/KUTU]

İlk birkaç terimi açalım:

$$J_{0}(x)=1-\frac{1}{(1!)^{2}}\left(\frac{x}{2}\right)^{2}+\frac{1}{(2!)^{2}}\left(\frac{x}{2}\right)^{4}-\frac{1}{(3!)^{2}}\left(\frac{x}{2}\right)^{6}+\dots$$

$$\boxed{\;J_{0}(x)=1-\frac{x^{2}}{4}+\frac{x^{4}}{64}-\frac{x^{6}}{2304}+\dots\;} \tag{6.108}$$

---

### İkinci çözüm: mertebe indirgeme ve logaritma

Kökler eşit olduğundan bağımsız ikinci çözüm şu biçimde olmalıdır:

$$y=x\sum_{n=0}^{\infty}c_{n}^{*}x^{n}+J_{0}(x)\ln x$$

Bunu mertebe indirgemeyle bulalım. $y''+P_{1}y'+P_{2}y=0$ biçiminde $P_{1}(x)=\dfrac{1}{x}$ olduğundan

$$y_{2}(x)=J_{0}(x)\int\frac{e^{-\int dx/x}}{\left[J_{0}(x)\right]^{2}}\,dx=J_{0}(x)\int\frac{dx}{x\left[J_{0}(x)\right]^{2}}$$

$(6.108)$'den kareyi alalım:

$$\left[J_{0}(x)\right]^{2}=1-\frac{x^{2}}{2}+\frac{3x^{4}}{32}-\frac{5x^{6}}{576}+\dots$$

Tersini seri olarak açalım:

$$\frac{1}{\left[J_{0}(x)\right]^{2}}=1+\frac{x^{2}}{2}+\frac{5x^{4}}{32}+\frac{23x^{6}}{576}+\dots$$

$x$'e bölüp integre edelim — ==$\frac{1}{x}$ terimi logaritmayı doğuruyor:==

$$\int\left(\frac{1}{x}+\frac{x}{2}+\frac{5x^{3}}{32}+\frac{23x^{5}}{576}+\dots\right)dx=\ln x+\frac{x^{2}}{4}+\frac{5x^{4}}{128}+\frac{23x^{6}}{3456}+\dots$$

$J_{0}$ ile çarpıp düzenlersek:

$$y_{2}(x)=J_{0}(x)\ln x+\frac{x^{2}}{4}-\frac{3x^{4}}{128}+\frac{11x^{6}}{13824}+\dots$$

---

### Genel katsayının keşfi

Mertebe indirgeme ilk birkaç terimi verdi ama genel katsayı $c_{2n}^{*}$ hakkında bilgi vermiyor. Bulunan sayılara dikkatle bakalım:

$$(-1)^{2}\frac{1}{2^{2}(1!)^{2}}\cdot 1=\frac{1}{4}$$

$$(-1)^{3}\frac{1}{2^{4}(2!)^{2}}\left(1+\frac{1}{2}\right)=-\frac{3}{128}$$

$$(-1)^{4}\frac{1}{2^{6}(3!)^{2}}\left(1+\frac{1}{2}+\frac{1}{3}\right)=\frac{11}{13824}$$

==Örüntü ortaya çıktı:== her katsayıda **harmonik toplam** $1+\frac12+\dots+\frac1n$ beliriyor. Buradan genel katsayının

$$c_{2n}^{*}=\frac{(-1)^{n+1}}{2^{2n}(n!)^{2}}\left(1+\frac{1}{2}+\frac{1}{3}+\dots+\frac{1}{n}\right),\qquad n\ge 1$$

olduğu tahmin edilir. Bunun gerçekten doğru olduğu gösterilebilir (kolay değildir). Böylece:

$$\boxed{\;y_{2}(x)=J_{0}(x)\ln x+\sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^{2n}}{2^{2n}(n!)^{2}}\left(1+\frac{1}{2}+\dots+\frac{1}{n}\right)\;} \tag{6.109}$$

[KUTU]
**Neden harmonik sayılar?** Logaritmanın türevi $\frac1x$'tir ve harmonik toplam $\sum\frac1k$, $\ln$ fonksiyonunun ayrık karşılığıdır. Logaritmalı çözümlerde harmonik sayıların belirmesi tesadüf değil, bu akrabalığın sonucudur.
[/KUTU]

---

### İkinci tür Bessel fonksiyonu

$y_{2}$, $J_{0}$'dan lineer bağımsızdır; genel çözümü $J_{0}$ ile $y_{2}$'nin lineer birleşimi olarak yazabilirdik. Ancak alışılagelen yol bu değildir: ikinci çözüm olarak belirli bir **özel lineer birleşim** seçilir:

$$\frac{2}{\pi}\Big[y_{2}(x)+(\gamma-\ln 2)J_{0}(x)\Big]$$

Buradaki $\gamma$, **Euler-Mascheroni sabitidir**:

$$\gamma=\lim_{n\to\infty}\left(1+\frac{1}{2}+\frac{1}{3}+\dots+\frac{1}{n}-\ln n\right)\approx 0{,}5772$$

Bu özel birleşim, ==büyük $x$ değerlerinde $J_{0}$ ile aynı asimptotik davranışı vermek üzere== seçilmiştir; tablolar ve uygulamalar bu normalleştirmeye göre hazırlanır.

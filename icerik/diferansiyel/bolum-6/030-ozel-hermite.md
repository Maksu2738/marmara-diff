---
id: ozel-dd-hermite
menu: 6.2 Hermite Denklemi
tip: konu
baslik: 6.2 &nbsp;Hermite Denklemi ve Hermite Polinomları
---

**Hermite denklemi (Hermite equation)**:

$$y''-2xy'+\lambda y=0 \tag{6.4}$$

[KUTU]
**★ Bu bölüm hocanın ders notunu izliyor.** Özellikle ==serinin polinoma kesilmesi== ($\lambda=2n$) ve bunun kuantum harmonik salınıcıdaki enerji seviyeleriyle bağı hocanın anlattığı sıradır.
[/KUTU]

Burada $\lambda$ bir **parametredir**; denklemin karakteri onun değerine göre değişir. Kuantum mekaniğinde **harmonik salınıcı (quantum harmonic oscillator)** probleminin çözümü doğrudan bu denkleme indirgenir ve $\lambda$'nın alabileceği değerler ==enerji seviyelerini== verir.

$x=0$ adi noktadır ($-2x$ ve $\lambda$ her yerde analitiktir), dolayısıyla yine standart kuvvet serisi yöntemi uygulanır.

---

### Seri çözüm

[SORU*] **Örnek 6.3.** &nbsp; $y''-2xy'+\lambda y=0$ Hermite denkleminin $x_{0}=0$ etrafındaki kuvvet serisi çözümünü bulunuz.
[CEVAP]
**Adım 1 — Seriyi yerleştir.**

$$y=\sum_{n=0}^{\infty}a_{n}x^{n},\qquad y'=\sum_{n=1}^{\infty}n\,a_{n}x^{n-1},\qquad y''=\sum_{n=0}^{\infty}(n+1)(n+2)\,a_{n+2}x^{n}$$

Orta terim doğrudan $x^{n}$ kuvvetlerinde çıkar:

$$-2xy'=-2\sum_{n=0}^{\infty}n\,a_{n}x^{n}$$

**Adım 2 — Katsayıları eşitle.**

$$\sum_{n=0}^{\infty}\Big[(n+1)(n+2)a_{n+2}-2n\,a_{n}+\lambda\,a_{n}\Big]x^{n}=0$$

Her köşeli parantez sıfırdır; $a_{n+2}$ için çözelim:

$$\boxed{\;a_{n+2}=\frac{2n-\lambda}{(n+1)(n+2)}\,a_{n}\;} \tag{6.5}$$

==Bu bağıntı ikişer adım atlıyor==, dolayısıyla çift indisliler $a_{0}$'a, tek indisliler $a_{1}$'e bağlıdır: çözüm bir **çift** ve bir **tek** parçaya ayrılır.

**Adım 3 — Katsayıları üret.**

Çift aile ($a_{0}$'dan):

$$a_{2}=\frac{-\lambda}{1\cdot 2}a_{0}=-\frac{\lambda}{2!}\,a_{0}$$
$$a_{4}=\frac{4-\lambda}{3\cdot 4}a_{2}=-\frac{\lambda(4-\lambda)}{4!}\,a_{0}$$
$$a_{6}=\frac{8-\lambda}{5\cdot 6}a_{4}=-\frac{\lambda(4-\lambda)(8-\lambda)}{6!}\,a_{0}$$

Tek aile ($a_{1}$'den):

$$a_{3}=\frac{2-\lambda}{2\cdot 3}a_{1}=\frac{2-\lambda}{3!}\,a_{1}$$
$$a_{5}=\frac{6-\lambda}{4\cdot 5}a_{3}=\frac{(2-\lambda)(6-\lambda)}{5!}\,a_{1}$$

**Adım 4 — Çözümü topla.**

$$y=a_{0}\left[1-\frac{\lambda}{2!}x^{2}-\frac{\lambda(4-\lambda)}{4!}x^{4}-\frac{\lambda(4-\lambda)(8-\lambda)}{6!}x^{6}-\cdots\right]$$
$$\qquad+\;a_{1}\left[x+\frac{2-\lambda}{3!}x^{3}+\frac{(2-\lambda)(6-\lambda)}{5!}x^{5}+\cdots\right] \tag{6.6}$$

**Doğrulama.** $(6.5)$'i $n=0$ için sınayalım: $a_{2}=\dfrac{0-\lambda}{1\cdot 2}a_{0}=-\dfrac{\lambda}{2}a_{0}$. Öte yandan denklemde $x=0$ konursa $y''(0)-0+\lambda y(0)=0$, yani $2a_{2}+\lambda a_{0}=0$ — aynı sonuç. &#10003;
[/CEVAP]

[KUTU]
**Payda $4!$, $6!$ diye gidiyor ama pay öyle değil.** $(6.6)$'daki paydaların faktöriyel olması bir tesadüf değil: $(n+1)(n+2)$ çarpanları ardışık olduğu için üst üste bindiklerinde faktöriyel oluşur. Paydaki $\lambda(4-\lambda)(8-\lambda)$ çarpanları ise ==dörder dörder== artan bir dizidir; $2n-\lambda$ ifadesinde $n$ ikişer adım atladığı için.
[/KUTU]

---

### Serinin polinoma dönüşmesi

$(6.5)$'e tekrar bakalım: pay $2n-\lambda$'dır. ==Eğer $\lambda$ bir çift tam sayının iki katıysa==, yani

$$\lambda=2n \quad\text{(bir } n \text{ tam sayısı için)}$$

o zaman $a_{n+2}=0$ olur ve ondan sonraki bütün katsayılar sıfırlanır. Serilerden biri **kesilir** ve geriye ==sonlu dereceli bir polinom== kalır.

Bu, fizik açısından belirleyici bir olaydır: sonsuz seriler $|x|$ büyüdüğünde $e^{x^{2}}$ gibi patlar ve fiziksel olarak kabul edilemez; ancak kesilen (polinom) çözüm sınırlı kalır. Kuantum harmonik salınıcıda ==enerjinin kesikli (quantized) olmasının sebebi tam olarak budur==.

$(6.6)$'da birkaç $\lambda$ değerini yerine koyalım:

<div class="tablo-sar">
<table>
<tr><th>$\lambda$</th><th>Çift parça</th><th>Tek parça</th></tr>
<tr><td>$0$</td><td>$1$ &nbsp;<strong>(kesildi)</strong></td><td>$x+\tfrac{2}{3!}x^{3}+\tfrac{12}{5!}x^{5}+\cdots$</td></tr>
<tr><td>$2$</td><td>$1-x^{2}-\tfrac{1}{6}x^{4}-\tfrac{1}{30}x^{6}-\cdots$</td><td>$x$ &nbsp;<strong>(kesildi)</strong></td></tr>
<tr><td>$4$</td><td>$1-2x^{2}$ &nbsp;<strong>(kesildi)</strong></td><td>$x-\tfrac{1}{3}x^{3}-\tfrac{1}{30}x^{5}-\cdots$</td></tr>
<tr><td>$6$</td><td>$1-3x^{2}+\tfrac{1}{2}x^{4}+\cdots$</td><td>$x-\tfrac{2}{3}x^{3}$ &nbsp;<strong>(kesildi)</strong></td></tr>
</table>
</div>

Kesilen parçalar sırasıyla

$$1,\qquad x,\qquad 1-2x^{2},\qquad x-\frac{2}{3}x^{3}$$

polinomlarıdır. Bunlar, uygun sabitlerle çarpıldığında **Hermite polinomlarını (Hermite polynomials)** verir.

---

### Hermite polinomları

$H_{n}(x)$ ile $n$. mertebeden Hermite polinomu gösterilir. İlk birkaçı:

$$H_{0}(x)=1,\qquad H_{1}(x)=2x,\qquad H_{2}(x)=4x^{2}-2,\qquad H_{3}(x)=8x^{3}-12x$$
$$H_{4}(x)=16x^{4}-48x^{2}+12,\qquad H_{5}(x)=32x^{5}-160x^{3}+120x$$

Yukarıdaki tabloyla karşılaştırın: $1-2x^{2}$ ile $H_{2}=4x^{2}-2$ arasındaki fark yalnızca $-2$ çarpanıdır; $x-\tfrac{2}{3}x^{3}$ ile $H_{3}=8x^{3}-12x$ arasında ise $-12$. ==Normalleştirme sabiti dışında aynı polinomlar.== Standart seçim, $x^{n}$'nin katsayısının $2^{n}$ olmasıdır.

#### Rodrigues formülü

Polinomları indirgeme bağıntısıyla tek tek üretmek yerine kapalı bir formülle de yazabiliriz — **Rodrigues formülü (Rodrigues' formula)**:

$$\boxed{\;H_{n}(x)=(-1)^{n}\,e^{x^{2}}\,\frac{d^{n}}{dx^{n}}\,e^{-x^{2}}\;} \tag{6.7}$$

[SORU] **Örnek 6.4.** &nbsp; Rodrigues formülünü kullanarak $H_{0}$, $H_{1}$ ve $H_{2}$'yi bulunuz.
[CEVAP]
**$n=0$:** Türev alınmıyor.

$$H_{0}=(-1)^{0}e^{x^{2}}\cdot e^{-x^{2}}=1$$

**$n=1$:**

$$\frac{d}{dx}e^{-x^{2}}=-2x\,e^{-x^{2}}$$
$$H_{1}=(-1)^{1}e^{x^{2}}\left(-2x\,e^{-x^{2}}\right)=2x$$

**$n=2$:**

$$\frac{d^{2}}{dx^{2}}e^{-x^{2}}=\frac{d}{dx}\left(-2x\,e^{-x^{2}}\right)=-2e^{-x^{2}}+4x^{2}e^{-x^{2}}=\left(4x^{2}-2\right)e^{-x^{2}}$$
$$H_{2}=(-1)^{2}e^{x^{2}}\left(4x^{2}-2\right)e^{-x^{2}}=4x^{2}-2$$

Üçü de yukarıdaki listeyle uyuşuyor. &#10003;
[/CEVAP]

#### Sağladıkları denklem

Hermite polinomları, $\lambda=2n$ alınmış Hermite denkleminin çözümleridir:

$$H_{n}''-2x\,H_{n}'+2n\,H_{n}=0 \tag{6.8}$$

**Hızlı doğrulama ($n=2$).** $H_{2}=4x^{2}-2$ için $H_{2}'=8x$, $H_{2}''=8$:

$$8-2x(8x)+4\left(4x^{2}-2\right)=8-16x^{2}+16x^{2}-8=0\;\checkmark$$

[KUTU]
**$\lambda=2n$ koşulunun okunuşu.** $(6.5)$'te pay $2n-\lambda$ idi. $\lambda=2n$ seçmek, ==tam $n$. adımda payı sıfırlamak== demektir; böylece $a_{n+2}=0$ ve seri $x^{n}$ terimiyle biter. Dolayısıyla $\lambda=2n$ ile elde edilen polinomun derecesi tam olarak $n$'dir.

Kuantum harmonik salınıcıda enerji $E_{n}=\left(n+\tfrac{1}{2}\right)\hbar\omega$ biçiminde çıkar; buradaki $n$ ile bu $n$ aynı $n$'dir. ==Fizikteki kesikli enerji seviyeleri, seri çözümün kesilme koşulundan doğar.==
[/KUTU]

---

[CLAUDE] Hermite'in püf noktası: seri ne zaman polinoma dönüşür
$y''-2xy'+2\alpha y=0$ denkleminin bağıntısında pay $2(n-\alpha)$ çarpanını taşır. ==$\alpha$ negatif olmayan bir tam sayıysa bu çarpan bir yerde sıfırlanır ve seri kesilir== — sonsuz seri yerine bir **polinom** elde edersiniz. Bunlar Hermite polinomlarıdır.

**Hangi çözüm kesilir?** $\alpha$'nın **tekliği/çiftliği** belirler:

- $\alpha$ çift → $a_{0}$ zinciri (çift kuvvetler) kesilir
- $\alpha$ tek → $a_{1}$ zinciri (tek kuvvetler) kesilir

Diğer zincir sonsuz seri olarak kalır. ==Yani bir çözüm polinom, öteki sonsuz seri.==

**Sınavda ne sorulur:** genelde "$\alpha=3$ için polinom çözümü bulun" gibi. O zaman $a_{1}$ zincirini yazın, $n=3$'te sıfırlandığını gösterin, üç terimle bitirin. ==Bütün seriyi açmaya gerek yok.==
[/CLAUDE]

---
id: ozel-dd-bessel-gama
menu: 6.3 Gama Fonksiyonu ve $J_p$
tip: konu
baslik: 6.3 &nbsp;Gama Fonksiyonunun Özellikleri ve Birinci Tür Bessel Fonksiyonu
---

### Gama fonksiyonunun özyineleme bağıntısı

Gama fonksiyonu şu bağıntıyı sağlar:

$$\Gamma(N+1)=N\,\Gamma(N)\qquad (N>0) \tag{6.122}$$

$\Gamma(N)$ değerleri tablolanmıştır ve genellikle ==yalnızca $1\le N\le 2$ aralığı için== verilir. Bu aralıktaki değerlerle, $(6.122)$'yi tekrar tekrar uygulayarak her $N>0$ için $\Gamma(N)$ hesaplanabilir.

[KUTU]
**Örnek hesap.** $\left(\frac{3}{2}\right)!$ değerini bulalım.

$(6.121)$ tanımından $\left(\frac{3}{2}\right)!=\Gamma\!\left(\frac{5}{2}\right)$ yazılır. $(6.122)$ ile bir adım aşağı inelim:

$$\Gamma\!\left(\frac{5}{2}\right)=\frac{3}{2}\,\Gamma\!\left(\frac{3}{2}\right)$$

$\frac32$ artık tablo aralığındadır: $\Gamma\!\left(\frac{3}{2}\right)\approx 0{,}8862$. Buradan

$$\left(\frac{3}{2}\right)!=\Gamma\!\left(\frac{5}{2}\right)\approx\frac{3}{2}\cdot 0{,}8862\approx 1{,}3293$$
[/KUTU]

### Negatif değerlere genişletme

$N<0$ için $(6.120)$ integrali **ıraksar**, dolayısıyla $\Gamma(N)$ negatif değerlerde integralle tanımlanamaz. Tanım şöyle genişletilir: ==$(6.122)$ özyineleme bağıntısının negatif $N$ için de geçerli olması istenir.==

$$\Gamma(N)=\frac{\Gamma(N+1)}{N}$$

Bu bağıntının tekrarlı kullanımı, tam sayı olmayan her negatif $N$ için $\Gamma(N)$'yi tanımlar. Böylece $\Gamma(N)$, $N\neq 0,-1,-2,-3,\dots$ olan bütün değerlerde tanımlıdır. Aynı şekilde $N!$ de $N\neq -1,-2,-3,\dots$ için $(6.121)$ ile tanımlanır.

---

### $p$ tam sayı değilken çözümün gama biçimi

$(6.118)$ çözümüne dönelim ve $p$'nin pozitif tam sayı olmadığı durumu ele alalım. $(6.122)$'yi sırasıyla $N=n+p,\;n+p-1,\;\dots,\;p+1$ için uygularsak:

$$\Gamma(n+p+1)=(n+p)(n+p-1)\cdots(p+1)\,\Gamma(p+1)$$

Yani $(6.118)$'deki paydada duran çarpım, iki gama değerinin oranıdır:

$$(1+p)(2+p)\cdots(n+p)=\frac{\Gamma(n+p+1)}{\Gamma(p+1)}$$

Yerine koyarsak:

$$y_{1}(x)=c_{0}\,2^{p}\,\Gamma(p+1)\sum_{n=0}^{\infty}\frac{(-1)^{n}}{n!\,\Gamma(n+p+1)}\left(\frac{x}{2}\right)^{2n+p} \tag{6.123}$$

$(6.121)$'i $N=p$ ve $N=n+p$ için kullanırsak bu ifade tam olarak $(6.119)$ biçimine döner. ==Yani $p$ tam sayı olsun olmasın aynı formül geçerlidir==; $p!$ ve $(n+p)!$ sembolleri, $p$ tam sayı değilse sırasıyla $\Gamma(p+1)$ ve $\Gamma(n+p+1)$ anlamına gelir.

---

### Birinci tür Bessel fonksiyonu $J_{p}$

[KUTU]
**TANIM.** $(6.119)$'daki keyfi sabit $c_{0}$, $\dfrac{1}{2^{p}p!}$ seçilirse elde edilen özel çözüme **$p$. mertebeden birinci tür Bessel fonksiyonu (Bessel function of the first kind of order $p$)** denir ve $J_{p}$ ile gösterilir:

$$J_{p}(x)=\sum_{n=0}^{\infty}\frac{(-1)^{n}}{n!\,(n+p)!}\left(\frac{x}{2}\right)^{2n+p} \tag{6.124}$$

Burada $p$ pozitif tam sayı değilse $(n+p)!$ ifadesi $\Gamma(n+p+1)$ ile tanımlanır.
[/KUTU]

**Tutarlılık kontrolü.** $p=0$ alınırsa $(6.101)$ denklemi $(6.102)$'ye, $(6.124)$ çözümü de $(6.107)$'deki $J_{0}$'a indirgenir. Yani $J_{0}$, $J_{p}$ ailesinin özel bir üyesidir.

---

### Birinci mertebeden Bessel denklemi

$p=1$ alırsak denklem

$$x^{2}y''+xy'+\left(x^{2}-1\right)y=0 \tag{6.125}$$

hâlini alır; buna **birinci mertebeden Bessel denklemi** denir. $(6.124)$'te $p=1$ koyarsak **birinci mertebeden birinci tür Bessel fonksiyonu** çıkar:

$$J_{1}(x)=\sum_{n=0}^{\infty}\frac{(-1)^{n}}{n!\,(n+1)!}\left(\frac{x}{2}\right)^{2n+1} \tag{6.126}$$

---

### $J_{p}$ fonksiyonlarının davranışı

[KUTU]
$J_{0}$ ve $J_{1}$ grafikleri iki önemli özelliği gösterir; ikisi de her $p\ge 0$ için geçerlidir:

1. **Sönümlü salınım (damped oscillatory behavior).** $x\to\infty$ iken $J_{p}$ salınır ama genliği azalarak sıfıra yaklaşır. Trigonometrik fonksiyonlara benzer, ancak genlikleri sabit değildir.

2. **Sıfırların birbirini ayırması.** $J_{p}$ ile $J_{p+1}$'in pozitif sıfırları ==birbirini ayırır==: $J_{p}$'nin ardışık iki sıfırı arasında $J_{p+1}$'in tam olarak bir sıfırı bulunur. $\sin$ ile $\cos$ arasındaki ilişkinin karşılığıdır.
[/KUTU]

Bu özellikler, Bessel fonksiyonlarının silindirik simetrili titreşim ve ısı iletimi problemlerinde neden doğal olarak ortaya çıktığını da açıklar: bu problemlerin özdeğerleri $J_{p}$'nin sıfırlarıdır.

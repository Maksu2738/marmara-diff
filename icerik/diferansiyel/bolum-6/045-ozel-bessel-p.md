---
id: ozel-dd-bessel-p
menu: 6.3 Bessel — İkinci Tür ve p. Mertebe
tip: konu
baslik: 6.3 &nbsp;İkinci Tür Bessel Fonksiyonu ve p. Mertebeden Bessel Denklemi
---

[KUTU]
**Bu sayfanın iki yarısı farklı kaynaklardan.** Aşağıdaki $Y_{0}$ kısmı ==kitaptandır==; hocanın ders notunda geçmez. Buna karşılık ikinci yarıdaki **$p$. mertebeden Bessel denklemi ve $J_{p}$ türetimi ders notunda birebir vardır** — bkz. "★ Ders Notu — $J_p$ ve Neumann $N_p$" sayfası.
[/KUTU]

### $Y_{0}$ — ikinci tür Bessel fonksiyonu

Önceki bölümde ikinci çözüm olarak seçilen özel lineer birleşime **sıfırıncı mertebeden ikinci tür Bessel fonksiyonu (Bessel function of the second kind of order zero, Weber biçimi)** denir ve $Y_{0}$ ile gösterilir:

$$Y_{0}(x)=\frac{2}{\pi}\left[J_{0}(x)\ln x+\sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^{2n}}{2^{2n}(n!)^{2}}\left(1+\frac{1}{2}+\dots+\frac{1}{n}\right)+(\gamma-\ln 2)J_{0}(x)\right]$$

Logaritmalı terimleri birleştirirsek daha derli toplu bir biçim çıkar. $\ln x+\gamma-\ln 2=\ln\dfrac{x}{2}+\gamma$ olduğundan:

$$\boxed{\;Y_{0}(x)=\frac{2}{\pi}\left[\left(\ln\frac{x}{2}+\gamma\right)J_{0}(x)+\sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^{2n}}{2^{2n}(n!)^{2}}\left(1+\frac{1}{2}+\dots+\frac{1}{n}\right)\right]\;} \tag{6.110}$$

İkinci çözüm olarak $Y_{0}$ seçilirse, $(6.102)$ denkleminin $0<x<R$ aralığındaki **genel çözümü**:

$$y=c_{1}J_{0}(x)+c_{2}Y_{0}(x) \tag{6.111}$$

$J_{0}$ ve $Y_{0}$ fonksiyonları ayrıntılı biçimde incelenmiş ve tablolanmıştır.

[KUTU]
**Davranış farkı.** $J_{0}$, $x=0$'da sonlu ve $J_{0}(0)=1$'dir. $Y_{0}$ ise logaritmalı terim yüzünden $x\to 0^{+}$ iken $-\infty$'a gider. ==Fiziksel problemlerde çözümün merkezde sonlu kalması isteniyorsa $c_{2}=0$ alınır== ve yalnızca $J_{0}$ kullanılır; bu, sınır koşullarının seçimini belirleyen en yaygın gerekçedir.
[/KUTU]

---

### $p$. mertebeden Bessel denklemi

Şimdi $p$ reel ve pozitif olmak üzere genel denklemi ele alalım:

$$x^{2}y''+xy'+\left(x^{2}-p^{2}\right)y=0 \tag{6.101}$$

$x=0$ düzgün tekil noktadır. $y=\displaystyle\sum_{n=0}^{\infty}c_{n}x^{n+r}$, $c_{0}\neq 0$ varsayıp yerleştirir ve düzenlersek:

$$\left(r^{2}-p^{2}\right)c_{0}x^{r}+\Big[(r+1)^{2}-p^{2}\Big]c_{1}x^{r+1}+\sum_{n=2}^{\infty}\Big\{\Big[(n+r)^{2}-p^{2}\Big]c_{n}+c_{n-2}\Big\}x^{n+r}=0$$

Katsayıları sıfıra eşitlersek üç koşul çıkar:

$$r^{2}-p^{2}=0,\qquad \Big[(r+1)^{2}-p^{2}\Big]c_{1}=0,\qquad \Big[(n+r)^{2}-p^{2}\Big]c_{n}+c_{n-2}=0\;\;(n\ge 2)$$

**Belirtici denklem** birincisidir; kökleri:

$$\boxed{\,r_{1}=p>0,\qquad r_{2}=-p\,}$$

$$r_{1}-r_{2}=2p$$

[KUTU]
**Hangi durumda olduğumuz $p$'ye bağlı:**

- $2p$ **pozitif tam sayı değilse** → THEoREM 5.3 Sonuç 1: her iki köke karşılık gelen, lineer bağımsız iki Frobenius çözümü vardır.
- $2p$ **pozitif tam sayıysa** → yalnızca büyük kök $r_{1}=p$'ye karşılık gelen çözümden emin olabiliriz.

Yani $p=\frac12,1,\frac32,2,\dots$ değerleri "tehlikeli" değerlerdir. Her durumda ==büyük kökün çözümü daima vardır==; aşağıda onu buluyoruz.
[/KUTU]

**Büyük kök $r=p$:**

İkinci koşulda $(p+1)^{2}-p^{2}=2p+1$ olur, yani $(2p+1)c_{1}=0$. $p>0$ olduğundan $2p+1\neq 0$ ve ==$c_{1}=0$== çıkar.

Özyineleme koşulunda $(n+p)^{2}-p^{2}=n^{2}+2np=n(n+2p)$ olur:

$$n(n+2p)c_{n}+c_{n-2}=0\;\Longrightarrow\;\boxed{\,c_{n}=-\frac{c_{n-2}}{n(n+2p)},\quad n\ge 2\,} \tag{6.117}$$

$c_{1}=0$ olduğundan bütün tek indisli katsayılar sıfırdır. Genel çift katsayı:

$$c_{2n}=\frac{(-1)^{n}c_{0}}{\big[2\cdot 4\cdots(2n)\big]\big[(2+2p)(4+2p)\cdots(2n+2p)\big]}=\frac{(-1)^{n}c_{0}}{2^{2n}\,n!\,\big[(1+p)(2+p)\cdots(n+p)\big]}$$

İkinci eşitlikte her iki köşeli parantezden $2^{n}$ çarpanı çekilmiştir. Böylece büyük köke karşılık gelen çözüm:

$$y_{1}(x)=c_{0}\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n+p}}{2^{2n}\,n!\,\big[(1+p)(2+p)\cdots(n+p)\big]} \tag{6.118}$$

---

### $p$ pozitif tam sayıysa

Bu durumda paydadaki çarpım faktöriyele iner:

$$(1+p)(2+p)\cdots(n+p)=\frac{(n+p)!}{p!}$$

Yerine koyup düzenlersek:

$$y_{1}(x)=c_{0}\,2^{p}\,p!\sum_{n=0}^{\infty}\frac{(-1)^{n}}{n!\,(n+p)!}\left(\frac{x}{2}\right)^{2n+p} \tag{6.119}$$

==Bu biçim $J_{0}$'ınkiyle aynı yapıdadır== ve $p=0$ için ona indirgenir.

---

### Gama fonksiyonu — $p$ tam sayı değilken

$p$ pozitif bir tam sayı değilse $(6.119)$'daki $p!$ ve $(n+p)!$ ifadeleri anlamsızdır. Faktöriyeli tam sayı olmayan değerlere genişletmek gerekir; bunu **gama fonksiyonu (gamma function)** sağlar.

[KUTU]
**TANIM.** $N>0$ için gama fonksiyonu, yakınsak has olmayan integralle tanımlanır:

$$\Gamma(N)=\int_{0}^{\infty}e^{-x}x^{N-1}\,dx \tag{6.120}$$
[/KUTU]

$N$ pozitif bir tam sayıysa şu bağıntı gösterilebilir:

$$N!=\Gamma(N+1) \tag{6.121}$$

$N$ pozitif ama tam sayı değilse, $N!$ ifadesi ==tanım olarak== $(6.121)$ ile verilir. Böylece $(6.119)$ biçimi her pozitif $p$ için anlamlı hâle gelir.

**Neden $N+1$?** Kaydırma tanımın kendisinden gelir: kısmi integrasyonla $\Gamma(N+1)=N\,\Gamma(N)$ bağıntısı elde edilir ve $\Gamma(1)=\displaystyle\int_{0}^{\infty}e^{-x}dx=1$ olduğundan tümevarımla $\Gamma(N+1)=N!$ çıkar. ==Gama fonksiyonu faktöriyelin bir adım kaydırılmış sürekli karşılığıdır.==

---

[CLAUDE] $p$ tam sayı olduğunda ne bozuluyor
Kök farkı $2p$ idi. $p$ tam sayıyken bu **çift bir tam sayı** olur ve Frobenius'un belirsiz durumuna düşeriz. Burada belirsizlik ==kötü tarafa çözülür:==

$$J_{-p}(x)=(-1)^{p}J_{p}(x)\qquad (p \text{ tam sayı})$$

Yani $J_{-p}$, $J_{p}$'nin sabit katıdır — ==bağımsız bir ikinci çözüm değildir.== İkinci çözüm için $Y_{p}$ (ikinci tür Bessel fonksiyonu) tanımlanır ve içinde logaritma vardır.

**Neden $(-1)^{p}$ çıkıyor?** $J_{-p}$ serisinin ilk $p$ terimi, paydadaki gama fonksiyonu ==negatif tam sayıda kutup verdiği için== sıfırlanır. Seri fiilen $p$. terimden başlar ve indis kaydırınca $J_{p}$'ye dönüşür.

**Sınav için ayırt etme kuralı:**

- $p$ **tam sayı değilse** → $\left\{J_{p},\,J_{-p}\right\}$ ikilisi yeter, $Y_{p}$'ye gerek yok
- $p$ **tam sayıysa** → $\left\{J_{p},\,Y_{p}\right\}$ kullanmak zorundasınız

==Genel çözümü $c_{1}J_{p}+c_{2}J_{-p}$ diye yazmadan önce $p$'nin tam sayı olup olmadığına bakın.== En sık yapılan hata budur.
[/CLAUDE]

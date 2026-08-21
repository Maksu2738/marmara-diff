---
id: ornek-frobenius
menu: 5.7 Örnek — Frobenius Yöntemiyle Çözüm
tip: ornek
baslik: 5.7 &nbsp;Çözümlü Örnek — Frobenius Yönteminin Tam Uygulaması
---

[SORU] **Örnek 5.10.** &nbsp; Frobenius yöntemiyle $\displaystyle 2x^{2}y''-xy'+(x-5)y=0$ denkleminin $0<x<R$ aralığındaki çözümlerini bulunuz.
[CEVAP]
Örnek 5.7'de $x=0$'ın bu denklemin **düzgün tekil noktası** olduğunu göstermiştik, dolayısıyla THEoREM 5.2 uygulanır.

**Adım 1 — Çözümü varsay.**

$$y=\sum_{n=0}^{\infty}c_{n}x^{n+r},\qquad c_{0}\neq 0$$

$$y'=\sum_{n=0}^{\infty}(n+r)c_{n}x^{n+r-1},\qquad y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)c_{n}x^{n+r-2}$$

**Adım 2 — Denkleme yerleştir.**

$$2\sum_{n=0}^{\infty}(n+r)(n+r-1)c_{n}x^{n+r}-\sum_{n=0}^{\infty}(n+r)c_{n}x^{n+r}+\sum_{n=0}^{\infty}c_{n}x^{n+r+1}-5\sum_{n=0}^{\infty}c_{n}x^{n+r}=0$$

$2x^{2}\cdot y''$ çarpımında $x^{2}$ ile $x^{n+r-2}$ birleşip $x^{n+r}$ verdi; benzer biçimde $-x\cdot y'$ de $x^{n+r}$ verdi. Yalnızca $x\cdot y$ teriminden gelen toplamda üs bir fazla: $x^{n+r+1}$.

**Adım 3 — Üsleri eşitle ve topla.**

Son toplamda $n\to n-1$ kaydırması yaparsak üs $x^{n+r}$ olur, alt sınır $n=1$'e çıkar:

$$\sum_{n=0}^{\infty}\Big[2(n+r)(n+r-1)-(n+r)-5\Big]c_{n}x^{n+r}+\sum_{n=1}^{\infty}c_{n-1}x^{n+r}=0$$

Birinci toplamın $n=0$ terimini ayırırsak:

$$\Big[2r(r-1)-r-5\Big]c_{0}x^{r}+\sum_{n=1}^{\infty}\Big\{\Big[2(n+r)(n+r-1)-(n+r)-5\Big]c_{n}+c_{n-1}\Big\}x^{n+r}=0$$

**Adım 4 — Belirtici denklem.**

En düşük kuvvet olan $x^{r}$'nin katsayısını sıfıra eşitleriz. ==$c_{0}\neq 0$ olduğu için köşeli parantez sıfır olmak zorundadır:==

$$2r(r-1)-r-5=0\;\Longrightarrow\;2r^{2}-2r-r-5=0\;\Longrightarrow\;2r^{2}-3r-5=0$$

$$r=\frac{3\pm\sqrt{9+40}}{4}=\frac{3\pm 7}{4}$$

$$\boxed{\,r_{1}=\frac{5}{2},\qquad r_{2}=-1\,}$$

Kökler ==reel ve farklıdır==; ayrıca $r_{1}-r_{2}=\dfrac{7}{2}$ bir tam sayı **değildir** — bu, iki bağımsız çözüm bulacağımızın işaretidir.

**Adım 5 — Genel özyineleme formülü.**

Yüksek kuvvetlerin katsayılarını sıfıra eşitlersek:

$$\Big[2(n+r)(n+r-1)-(n+r)-5\Big]c_{n}+c_{n-1}=0,\qquad n\ge 1$$

---

### Büyük kök: $r_{1}=\dfrac{5}{2}$

$r=\frac{5}{2}$ koyalım. Köşeli parantezi açalım:

$$2\left(n+\tfrac{5}{2}\right)\left(n+\tfrac{3}{2}\right)-\left(n+\tfrac{5}{2}\right)-5$$

$$=2\left(n^{2}+4n+\tfrac{15}{4}\right)-n-\tfrac{5}{2}-5=2n^{2}+8n+\tfrac{15}{2}-n-\tfrac{15}{2}=2n^{2}+7n$$

$$=n(2n+7)$$

Böylece

$$n(2n+7)c_{n}+c_{n-1}=0\;\Longrightarrow\;\boxed{\,c_{n}=-\frac{c_{n-1}}{n(2n+7)},\quad n\ge 1\,}$$

Katsayılar:

$$c_{1}=-\frac{c_{0}}{1\cdot 9}=-\frac{c_{0}}{9},\qquad c_{2}=-\frac{c_{1}}{2\cdot 11}=-\frac{c_{1}}{22}=\frac{c_{0}}{198}$$

$$c_{3}=-\frac{c_{2}}{3\cdot 13}=-\frac{c_{2}}{39}=-\frac{c_{0}}{7722}$$

Birinci çözüm:

$$y_{1}=c_{0}\,x^{5/2}\left(1-\frac{1}{9}x+\frac{1}{198}x^{2}-\frac{1}{7722}x^{3}+\dots\right)$$

---

### Küçük kök: $r_{2}=-1$

$r=-1$ koyalım:

$$2(n-1)(n-2)-(n-1)-5=2\left(n^{2}-3n+2\right)-n+1-5=2n^{2}-6n+4-n-4=2n^{2}-7n$$

$$=n(2n-7)$$

$$\boxed{\,c_{n}=-\frac{c_{n-1}}{n(2n-7)},\quad n\ge 1\,}$$

Katsayılar — ==paydaların işaretine dikkat, küçük $n$ için $2n-7$ negatiftir:==

$$c_{1}=-\frac{c_{0}}{1\cdot(-5)}=\frac{c_{0}}{5}$$

$$c_{2}=-\frac{c_{1}}{2\cdot(-3)}=\frac{c_{1}}{6}=\frac{c_{0}}{30}$$

$$c_{3}=-\frac{c_{2}}{3\cdot(-1)}=\frac{c_{2}}{3}=\frac{c_{0}}{90}$$

$$c_{4}=-\frac{c_{3}}{4\cdot 1}=-\frac{c_{0}}{360}$$

$n=4$'ten itibaren $2n-7>0$ olduğu için ==işaret değişir==. İkinci çözüm:

$$y_{2}=c_{0}\,x^{-1}\left(1+\frac{1}{5}x+\frac{1}{30}x^{2}+\frac{1}{90}x^{3}-\frac{1}{360}x^{4}+\dots\right)$$

---

### Genel çözüm

İki çözüm lineer bağımsızdır, dolayısıyla genel çözüm:

$$\boxed{\;y=C_{1}x^{5/2}\left(1-\frac{x}{9}+\frac{x^{2}}{198}-\frac{x^{3}}{7722}+\dots\right)+C_{2}x^{-1}\left(1+\frac{x}{5}+\frac{x^{2}}{30}+\frac{x^{3}}{90}-\dots\right)\;}$$

$C_{1}$ ve $C_{2}$ keyfi sabitlerdir.

[KUTU]
**$x=0$'da ne oluyor?** İkinci çözümdeki $x^{-1}$ çarpanı $x\to 0^{+}$ iken sonsuza gider. THEoREM 5.2'nin aralığı bu yüzden ==delinmiştir== ($0<x<R$); $x=0$ noktası çözümün tanım kümesinde değildir. Sıradan bir kuvvet serisi böyle bir çözümü asla üretemezdi — Frobenius'un $x^{r}$ çarpanının varlık sebebi tam olarak budur.
[/KUTU]

**Neden burada iki bağımsız çözüm çıktı?** $r_{1}-r_{2}=\dfrac{7}{2}$ tam sayı olmadığı için iki dal birbirinden bağımsız kaldı. Kökler eşit olsaydı ya da farkları tam sayı olsaydı, küçük kök dalı ya aynı çözümü verir ya da bağımlı çıkardı; o durumda ikinci çözüm için başka bir yöntem gerekirdi.

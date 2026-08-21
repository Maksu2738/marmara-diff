---
id: ornek-frobenius-cift
menu: 5.8 Örnek — İki Bağımsız Frobenius Çözümü
tip: ornek
baslik: 5.8 &nbsp;Çözümlü Örnek — Sonuç 1 Durumu ve Sıfırlanan Katsayılar
---

[SORU] **Örnek 5.11.** &nbsp; Frobenius yöntemiyle $\displaystyle 2x^{2}y''+xy'+\left(x^{2}-3\right)y=0$ denkleminin $0<x<R$ aralığındaki çözümlerini bulunuz.
[CEVAP]
$x=0$'ın düzgün tekil nokta olduğu doğrudan görülür ($xP_{1}=\tfrac12$ ve $x^{2}P_{2}=\tfrac{x^{2}-3}{2}$ analitiktir). Çözümü varsayalım:

$$y=\sum_{n=0}^{\infty}c_{n}x^{n+r},\qquad c_{0}\neq 0$$

**Adım 1 — Yerleştir.**

$$2\sum_{n=0}^{\infty}(n+r)(n+r-1)c_{n}x^{n+r}+\sum_{n=0}^{\infty}(n+r)c_{n}x^{n+r}+\sum_{n=0}^{\infty}c_{n}x^{n+r+2}-3\sum_{n=0}^{\infty}c_{n}x^{n+r}=0$$

==Bu kez $x^{2}y$ terimi üssü **iki** artırıyor== ($x^{n+r+2}$), Örnek 5.10'daki $xy$ terimi ise bir artırıyordu. Bu fark, özyinelemenin $c_{n-1}$ yerine $c_{n-2}$ içermesine yol açacak.

**Adım 2 — İndeks kaydır ve düzenle.**

Son toplamda $n\to n-2$ kaydırırsak alt sınır $n=2$ olur:

$$\sum_{n=0}^{\infty}\Big[2(n+r)(n+r-1)+(n+r)-3\Big]c_{n}x^{n+r}+\sum_{n=2}^{\infty}c_{n-2}x^{n+r}=0$$

Birinci toplamın $n=0$ ve $n=1$ terimlerini ayıralım:

$$\Big[2r(r-1)+r-3\Big]c_{0}x^{r}+\Big[2(r+1)r+(r+1)-3\Big]c_{1}x^{r+1}+\sum_{n=2}^{\infty}\Big\{\big[\cdots\big]c_{n}+c_{n-2}\Big\}x^{n+r}=0$$

**Adım 3 — Belirtici denklem.**

$$2r(r-1)+r-3=0\;\Longrightarrow\;2r^{2}-r-3=0\;\Longrightarrow\;r=\frac{1\pm\sqrt{1+24}}{4}=\frac{1\pm 5}{4}$$

$$\boxed{\,r_{1}=\frac{3}{2},\qquad r_{2}=-1\,}$$

$$r_{1}-r_{2}=\frac{3}{2}+1=\frac{5}{2}$$

$\frac52$ ne sıfır ne de pozitif tam sayıdır → ==THEoREM 5.3, Sonuç 1 geçerlidir==: iki dal da $(5.49)$ biçiminde, logaritmasız, lineer bağımsız çözüm verecek.

**Adım 4 — İki koşul.**

$x^{r+1}$ katsayısından:

$$\Big[2(r+1)r+(r+1)-3\Big]c_{1}=0$$

ve $n\ge 2$ için özyineleme:

$$\Big[2(n+r)(n+r-1)+(n+r)-3\Big]c_{n}+c_{n-2}=0$$

---

### Büyük kök: $r_{1}=\dfrac{3}{2}$

**$c_{1}$ koşulu:** $2\left(\tfrac52\right)\left(\tfrac32\right)+\tfrac52-3=\tfrac{15}{2}+\tfrac52-3=10-3=7$, yani

$$7c_{1}=0\;\Longrightarrow\;c_{1}=0$$

**Özyineleme:** Köşeli parantezi sadeleştirelim.

$$2\left(n+\tfrac32\right)\left(n+\tfrac12\right)+\left(n+\tfrac32\right)-3=2\left(n^{2}+2n+\tfrac34\right)+n+\tfrac32-3$$

$$=2n^{2}+4n+\tfrac32+n-\tfrac32=2n^{2}+5n=n(2n+5)$$

$$\boxed{\,c_{n}=-\frac{c_{n-2}}{n(2n+5)},\quad n\ge 2\,}$$

Katsayılar:

$$c_{2}=-\frac{c_{0}}{2\cdot 9}=-\frac{c_{0}}{18},\qquad c_{3}=-\frac{c_{1}}{3\cdot 11}=0,\qquad c_{4}=-\frac{c_{2}}{4\cdot 13}=-\frac{c_{2}}{52}=\frac{c_{0}}{936}$$

==$c_{1}=0$ olduğu ve özyineleme iki adım geriye baktığı için bütün tek indisli katsayılar sıfırdır.== Çözüm yalnızca çift kuvvetler içerir:

$$y_{1}(x)=c_{0}\,x^{3/2}\left(1-\frac{1}{18}x^{2}+\frac{1}{936}x^{4}-\dots\right)$$

---

### Küçük kök: $r_{2}=-1$

**$c_{1}$ koşulu:** $2(0)(-1)+0-3=-3$, yani

$$-3c_{1}=0\;\Longrightarrow\;c_{1}=0$$

**Özyineleme:**

$$2(n-1)(n-2)+(n-1)-3=2\left(n^{2}-3n+2\right)+n-4=2n^{2}-6n+4+n-4=2n^{2}-5n=n(2n-5)$$

$$\boxed{\,c_{n}=-\frac{c_{n-2}}{n(2n-5)},\quad n\ge 2\,}$$

Katsayılar — ==$n=2$ için $2n-5=-1$ negatiftir, işarete dikkat:==

$$c_{2}=-\frac{c_{0}}{2\cdot(-1)}=\frac{c_{0}}{2},\qquad c_{3}=-\frac{c_{1}}{3\cdot 1}=0,\qquad c_{4}=-\frac{c_{2}}{4\cdot 3}=-\frac{c_{2}}{12}=-\frac{c_{0}}{24}$$

$$y_{2}(x)=c_{0}\,x^{-1}\left(1+\frac{1}{2}x^{2}-\frac{1}{24}x^{4}+\dots\right)$$

---

### Genel çözüm

$$\boxed{\;y=C_{1}x^{3/2}\left(1-\frac{x^{2}}{18}+\frac{x^{4}}{936}-\dots\right)+C_{2}x^{-1}\left(1+\frac{x^{2}}{2}-\frac{x^{4}}{24}+\dots\right)\;}$$

[KUTU]
**Bu örnekten çıkarılacak iki ders:**

1. **Özyinelemenin adım genişliği denklemden gelir.** $x^{2}y$ terimi $c_{n-2}$ üretti, dolayısıyla katsayılar ikişer ikişer bağlandı ve tek/çift zincirler ayrıştı. Örnek 5.10'da $xy$ terimi vardı, orada $c_{n-1}$ çıkmış ve bütün katsayılar tek bir zincire bağlanmıştı.

2. **$c_{1}$ için ayrı bir koşul çıkması normaldir.** $x^{r+1}$ terimi özyinelemenin kapsamı dışında kalır ($n\ge 2$'den başlar), bu yüzden ayrıca ele alınır. Buradaki gibi katsayısı sıfırdan farklıysa $c_{1}=0$ olmak zorundadır ve bu bütün tek indisli katsayıları siler.
[/KUTU]

**Kontrol.** THEoREM 5.3 Sonuç 1'in öngörüsü tuttu: fark $\frac52$ tam sayı olmadığı için iki dal da logaritmasız çözüm verdi ve çözümler lineer bağımsız çıktı ($x^{3/2}$ ile $x^{-1}$ çarpanları birbirinin sabit katı olamaz).

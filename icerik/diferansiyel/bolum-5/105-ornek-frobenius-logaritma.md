---
id: ornek-frobenius-logaritma
menu: 5.9 Örnek — Logaritmalı İkinci Çözüm
tip: ornek
baslik: 5.9 &nbsp;Çözümlü Örnek — Logaritmanın Kaçınılmaz Olduğu Durum
---

Örnek 5.12'de kök farkı pozitif tam sayıydı ve şanslıydık: küçük kök çelişkiye düşmedi, hatta tek başına genel çözümü verdi. ==Ama bu her zaman olmaz.== Aşağıdaki örnek, aynı koşullar altında çelişkinin çıktığı ve logaritmalı terimin kaçınılmaz olduğu durumu gösteriyor.

[SORU] **Örnek 5.13.** &nbsp; Frobenius yöntemiyle $\displaystyle x^{2}y''+\left(x^{2}-3x\right)y'+3y=0$ denkleminin $0<x<R$ aralığındaki çözümlerini bulunuz.
[CEVAP]
$x=0$ düzgün tekil noktadır. $y=\displaystyle\sum_{n=0}^{\infty}c_{n}x^{n+r}$, $c_{0}\neq 0$ varsayalım.

**Adım 1 — Yerleştir ve düzenle.**

$$\sum_{n=0}^{\infty}(n+r)(n+r-1)c_{n}x^{n+r}+\sum_{n=0}^{\infty}(n+r)c_{n}x^{n+r+1}-3\sum_{n=0}^{\infty}(n+r)c_{n}x^{n+r}+3\sum_{n=0}^{\infty}c_{n}x^{n+r}=0$$

İkinci toplamda $n\to n-1$ kaydırıp $n=0$ terimini ayırırsak:

$$\Big[r(r-1)-3r+3\Big]c_{0}x^{r}+\sum_{n=1}^{\infty}\Big\{\Big[(n+r)(n+r-1)-3(n+r)+3\Big]c_{n}+(n+r-1)c_{n-1}\Big\}x^{n+r}=0$$

**Adım 2 — Belirtici denklem.**

$$r(r-1)-3r+3=0\;\Longrightarrow\;r^{2}-4r+3=0\;\Longrightarrow\;(r-1)(r-3)=0$$

$$\boxed{\,r_{1}=3,\qquad r_{2}=1,\qquad r_{1}-r_{2}=2\,}$$

Fark yine **pozitif tam sayı** — Sonuç 2 durumu. Örnek 5.12'nin dersine uyup önce küçük kökle başlamak cazip, ama burada bilerek büyük kökten başlayacağız; ikinci çözümü bulurken $y_{1}$'e ihtiyacımız olacak.

**Genel özyineleme:**

$$\Big[(n+r)(n+r-1)-3(n+r)+3\Big]c_{n}+(n+r-1)c_{n-1}=0,\qquad n\ge 1$$

---

### Büyük kök: $r_{1}=3$

Köşeli parantez:

$$(n+3)(n+2)-3(n+3)+3=n^{2}+5n+6-3n-9+3=n^{2}+2n=n(n+2)$$

ve $(n+r-1)=n+2$. Yani

$$n(n+2)c_{n}+(n+2)c_{n-1}=0$$

$n\ge 1$ için $n+2\neq 0$, sadeleştirebiliriz:

$$\boxed{\,c_{n}=-\frac{c_{n-1}}{n},\quad n\ge 1\,}$$

$$c_{1}=-c_{0},\qquad c_{2}=-\frac{c_{1}}{2}=\frac{c_{0}}{2!},\qquad c_{3}=-\frac{c_{2}}{3}=-\frac{c_{0}}{3!},\qquad c_{n}=\frac{(-1)^{n}c_{0}}{n!}$$

$$y_{1}(x)=c_{0}x^{3}\left[1-x+\frac{x^{2}}{2!}-\frac{x^{3}}{3!}+\dots\right]$$

Köşeli parantezdeki seri $e^{-x}$'in Maclaurin açılımıdır. ==Çözüm kapalı biçime iniyor:==

$$\boxed{\;y_{1}(x)=c_{0}\,x^{3}e^{-x}\;}$$

**Doğrulama.** $y=x^{3}e^{-x}$ için $y'=\left(3x^{2}-x^{3}\right)e^{-x}$ ve $y''=\left(x^{3}-6x^{2}+6x\right)e^{-x}$. Yerine koyalım:

$$x^{2}y''+\left(x^{2}-3x\right)y'+3y=\left(6x^{3}-6x^{4}+x^{5}\right)e^{-x}+\left(6x^{4}-x^{5}-9x^{3}\right)e^{-x}+3x^{3}e^{-x}$$

$$=\left(6x^{3}-9x^{3}+3x^{3}\right)e^{-x}=0\;\checkmark$$

---

### Küçük kök: $r_{2}=1$ — burada çelişki çıkıyor

Köşeli parantez:

$$(n+1)n-3(n+1)+3=n^{2}+n-3n-3+3=n^{2}-2n=n(n-2)$$

ve $(n+r-1)=n$. Yani

$$n(n-2)c_{n}+n\,c_{n-1}=0,\qquad n\ge 1$$

$n\neq 2$ için $n$ sadeleşir:

$$c_{n}=-\frac{c_{n-1}}{n-2},\qquad n\ge 1,\;n\neq 2$$

**$n=1$:** $c_{1}=-\dfrac{c_{0}}{1-2}=c_{0}$

**$n=2$:** Formül geçersiz, ham koşula dönelim:

$$2\cdot 0\cdot c_{2}+2c_{1}=0\;\Longrightarrow\;2c_{1}=0\;\Longrightarrow\;c_{1}=0$$

[KUTU]
**Çelişki.** $n=1$ bize $c_{1}=c_{0}$ dedi, $n=2$ ise $c_{1}=0$ diyor. İkisi birlikte $c_{0}=0$ demektir — oysa varsayımımız ==$c_{0}\neq 0$== idi.

Sonuç: küçük kök $r_{2}=1$'e karşılık gelen, $c_{0}\neq 0$ olan **hiçbir Frobenius çözümü yoktur.** Örnek 5.12'de $0\cdot c_{3}=0$ çıkmıştı ve $c_{3}$ serbest kalmıştı; burada $0\cdot c_{2}=-2c_{1}\neq 0$ çıkıyor. ==İki örnek arasındaki tek fark bu adım.==
[/KUTU]

**Peki $n\ge 3$ ile devam edilse ne olur?** $c_{2}$ keyfi kalır ve

$$c_{3}=-c_{2},\quad c_{4}=\frac{c_{2}}{2!},\quad c_{5}=-\frac{c_{2}}{3!},\quad c_{n+2}=\frac{(-1)^{n}c_{2}}{n!}$$

bulunur. Bunları yerine koyarsak:

$$y=c_{2}x\left[x^{2}-x^{3}+\frac{x^{4}}{2!}-\dots\right]=c_{2}x^{3}\left[1-x+\frac{x^{2}}{2!}-\dots\right]=c_{2}x^{3}e^{-x}$$

==Bu zaten $y_{1}$'dir.== Yeni bir şey vermedi. Demek ki gerçekten bağımsız ikinci çözüm başka biçimde olmalı.

---

### İkinci çözüm: mertebe indirgeme

THEoREM 5.3, Sonuç 2 gereği ikinci çözüm şu biçimdedir:

$$\sum_{n=0}^{\infty}c_{n}^{*}x^{n+1}+C\,y_{1}(x)\ln x,\qquad c_{0}^{*}\neq 0,\;\;C\neq 0$$

Bunu bulmak için **mertebe indirgeme (reduction of order)** kullanalım: bilinen çözümü $y_{1}=x^{3}e^{-x}$ alıp $y=x^{3}e^{-x}v$ yazalım.

$$y'=x^{3}e^{-x}v'+\left(3x^{2}-x^{3}\right)e^{-x}v$$

$$y''=x^{3}e^{-x}v''+2\left(3x^{2}-x^{3}\right)e^{-x}v'+\left(x^{3}-6x^{2}+6x\right)e^{-x}v$$

Denkleme koyalım. ==$y_{1}$ zaten çözüm olduğu için $v$'li terimlerin tamamı sıfırlanır==, geriye yalnızca $v''$ ve $v'$ kalır:

$$x^{5}e^{-x}v''+\left[2x^{2}\left(3x^{2}-x^{3}\right)+\left(x^{2}-3x\right)x^{3}\right]e^{-x}v'=0$$

Köşeli parantez: $6x^{4}-2x^{5}+x^{5}-3x^{4}=3x^{4}-x^{5}$. Tümünü $x^{4}e^{-x}$'e bölersek:

$$\boxed{\,xv''+(3-x)v'=0\,}$$

**Bunu çöz.** $w=v'$ dersek $xw'+(3-x)w=0$, yani

$$\frac{w'}{w}=\frac{x-3}{x}=1-\frac{3}{x}\;\Longrightarrow\;\ln w=x-3\ln x\;\Longrightarrow\;w=x^{-3}e^{x}$$

$$v=\int x^{-3}e^{x}\,dx\qquad\Longrightarrow\qquad y_{2}(x)=x^{3}e^{-x}\int x^{-3}e^{x}\,dx$$

---

### Logaritma nereden çıkıyor?

$e^{x}$'in Maclaurin serisini koyalım:

$$x^{-3}e^{x}=x^{-3}\left(1+x+\frac{x^{2}}{2}+\frac{x^{3}}{6}+\frac{x^{4}}{24}+\dots\right)=x^{-3}+x^{-2}+\frac{1}{2}x^{-1}+\frac{1}{6}+\frac{x}{24}+\dots$$

==Serideki $x^{-1}$ terimi belirleyicidir:== integrali $\ln x$ verir, diğer bütün terimler kuvvet verir.

$$v=\int\left(x^{-3}+x^{-2}+\frac{1}{2}x^{-1}+\frac{1}{6}+\frac{x}{24}+\dots\right)dx=-\frac{1}{2x^{2}}-\frac{1}{x}+\frac{1}{2}\ln x+\frac{x}{6}+\frac{x^{2}}{48}+\dots$$

$x^{3}e^{-x}$ ile çarpalım. Logaritmalı kısım ayrılır:

$$y_{2}(x)=x^{3}e^{-x}\left[-\frac{1}{2x^{2}}-\frac{1}{x}+\frac{x}{6}+\frac{x^{2}}{48}+\dots\right]+\frac{1}{2}x^{3}e^{-x}\ln x$$

Kalan çarpımı açalım ($x^{3}e^{-x}=x^{3}-x^{4}+\frac{x^{5}}{2}-\frac{x^{6}}{6}+\dots$):

$$y_{2}(x)=\left(-\frac{1}{2}x-\frac{1}{2}x^{2}+\frac{3}{4}x^{3}-\frac{1}{4}x^{4}+\dots\right)+\frac{1}{2}x^{3}e^{-x}\ln x$$

Bu tam olarak THEoREM 5.3 Sonuç 2'nin öngördüğü biçimdir; burada $C=\dfrac{1}{2}\neq 0$'dır.

**Genel çözüm:**

$$\boxed{\;y=C_{1}\,x^{3}e^{-x}+C_{2}\left[\left(-\frac{x}{2}-\frac{x^{2}}{2}+\frac{3x^{3}}{4}-\frac{x^{4}}{4}+\dots\right)+\frac{1}{2}x^{3}e^{-x}\ln x\right]\;}$$

[KUTU]
**Katsayıların nasıl çıktığını takip etmek isterseniz:** $x^{4}$ katsayısı üç ayrı çarpımdan gelir — $\frac{x^{5}}{2}\cdot\left(-\frac1x\right)=-\frac{x^{4}}{2}$, $x^{3}\cdot\frac{x}{6}=\frac{x^{4}}{6}$ ve $-\frac{x^{6}}{6}\cdot\left(-\frac{1}{2x^{2}}\right)=\frac{x^{4}}{12}$. Toplamı $-\frac12+\frac16+\frac1{12}=-\frac14$ eder. ==Üçüncü katkıyı atlamak sık yapılan bir hatadır.==
[/KUTU]

**Neden $y_{1}$'in kapalı biçimde çıkması şanstı?** $y_{1}=x^{3}e^{-x}$ elde edebildiğimiz için mertebe indirgeme hesabı kolaydı. Kapalı biçim bulunamasaydı yöntem yine uygulanabilirdi, ama bütün adımlar $y_{1}$'in seri ifadesiyle yürütülecek ve hesap epey karmaşıklaşacaktı.

---
id: ornek-frobenius-tamsayi-fark
menu: 5.8 Örnek — Kök Farkı Tam Sayı
tip: ornek
baslik: 5.8 &nbsp;Çözümlü Örnek — Kök Farkı Pozitif Tam Sayı Olduğunda
defterde: yok
---

[SORU] **Örnek 5.12.** &nbsp; Frobenius yöntemiyle $\displaystyle x^{2}y''-xy'-\left(x^{2}+\frac{5}{4}\right)y=0$ denkleminin $0<x<R$ aralığındaki çözümlerini bulunuz.
[CEVAP]
$x=0$ düzgün tekil noktadır. Çözümü varsayalım: $y=\displaystyle\sum_{n=0}^{\infty}c_{n}x^{n+r}$, $c_{0}\neq 0$.

**Adım 1 — Yerleştirme ve düzenleme.**

$$\sum_{n=0}^{\infty}(n+r)(n+r-1)c_{n}x^{n+r}-\sum_{n=0}^{\infty}(n+r)c_{n}x^{n+r}-\sum_{n=0}^{\infty}c_{n}x^{n+r+2}-\frac{5}{4}\sum_{n=0}^{\infty}c_{n}x^{n+r}=0$$

Son toplamda $n\to n-2$ kaydırıp $n=0$ ve $n=1$ terimlerini ayırırsak:

$$\left[r(r-1)-r-\frac{5}{4}\right]c_{0}x^{r}+\left[(r+1)r-(r+1)-\frac{5}{4}\right]c_{1}x^{r+1}+\sum_{n=2}^{\infty}\Big\{[\cdots]c_{n}-c_{n-2}\Big\}x^{n+r}=0$$

**Adım 2 — Belirtici denklem.**

$$r(r-1)-r-\frac{5}{4}=0\;\Longrightarrow\;r^{2}-2r-\frac{5}{4}=0\;\Longrightarrow\;r=\frac{2\pm\sqrt{4+5}}{2}=\frac{2\pm 3}{2}$$

$$\boxed{\,r_{1}=\frac{5}{2},\qquad r_{2}=-\frac{1}{2}\,}$$

**Kritik gözlem:** Köklerin kendileri tam sayı değil, ama ==farkları tam sayı:==

$$r_{1}-r_{2}=\frac{5}{2}+\frac{1}{2}=3$$

$3$ pozitif bir tam sayıdır → ==THEoREM 5.3, Sonuç 2 durumundayız.== Büyük kökten bir çözüm garanti; küçük kökten çıkacak olan ise logaritmalı olabilir.

**Adım 3 — Koşullar.**

$$\left[(r+1)r-(r+1)-\frac{5}{4}\right]c_{1}=0$$

$$\left[(n+r)(n+r-1)-(n+r)-\frac{5}{4}\right]c_{n}-c_{n-2}=0,\qquad n\ge 2$$

---

### Büyük kök: $r_{1}=\dfrac{5}{2}$

$c_{1}$ koşulu: $\left(\tfrac72\right)\left(\tfrac52\right)-\tfrac72-\tfrac54=\tfrac{35}{4}-\tfrac{14}{4}-\tfrac{5}{4}=4$, yani $4c_{1}=0\Rightarrow c_{1}=0$.

Özyineleme parantezi:

$$\left(n+\tfrac52\right)\left(n+\tfrac32\right)-\left(n+\tfrac52\right)-\tfrac54=n^{2}+4n+\tfrac{15}{4}-n-\tfrac{10}{4}-\tfrac{5}{4}=n^{2}+3n=n(n+3)$$

$$\boxed{\,c_{n}=\frac{c_{n-2}}{n(n+3)},\quad n\ge 2\,}$$

$$c_{2}=\frac{c_{0}}{2\cdot 5},\qquad c_{3}=\frac{c_{1}}{3\cdot 6}=0,\qquad c_{4}=\frac{c_{2}}{4\cdot 7}=\frac{c_{0}}{2\cdot 4\cdot 5\cdot 7}$$

Tek indisliler sıfırdır. Genel çift katsayı:

$$c_{2n}=\frac{c_{0}}{\big[2\cdot 4\cdot 6\cdots(2n)\big]\big[5\cdot 7\cdot 9\cdots(2n+3)\big]},\qquad n\ge 1$$

$$y_{1}(x)=c_{0}\,x^{5/2}\left[1+\sum_{n=1}^{\infty}\frac{x^{2n}}{\big[2\cdot 4\cdots(2n)\big]\big[5\cdot 7\cdots(2n+3)\big]}\right]=c_{0}x^{5/2}\left[1+\frac{x^{2}}{10}+\frac{x^{4}}{280}+\dots\right]$$

---

### Küçük kök: $r_{2}=-\dfrac{1}{2}$ — burada ne olacağı belli değil

THEoREM 5.3 bu kök için $(5.49)$ biçiminde bağımsız bir çözüm ==garanti etmiyor==. Yalnızca

$$\sum_{n=0}^{\infty}c_{n}^{*}x^{n+r_{2}}+C\,y_{1}(x)\ln x$$

biçiminde bir çözüm olduğunu söylüyor; $C$ sıfır olabilir de olmayabilir de. **$C=0$ olduğunu umarak** sıradan yoldan devam edelim ve ne olacağını görelim.

$c_{1}$ koşulu: $\left(\tfrac12\right)\left(-\tfrac12\right)-\tfrac12-\tfrac54=-\tfrac14-\tfrac24-\tfrac54=-2$, yani $-2c_{1}=0\Rightarrow c_{1}=0$.

Özyineleme parantezi:

$$\left(n-\tfrac12\right)\left(n-\tfrac32\right)-\left(n-\tfrac12\right)-\tfrac54=n^{2}-2n+\tfrac34-n+\tfrac24-\tfrac54=n^{2}-3n=n(n-3)$$

$$n(n-3)c_{n}-c_{n-2}=0,\qquad n\ge 2$$

$n\neq 3$ için:

$$c_{n}=\frac{c_{n-2}}{n(n-3)}$$

**$n=3$'te ne oluyor?** $n(n-3)=3\cdot 0=0$ olduğu için bu formül ==kullanılamaz==. Ham koşula dönelim:

$$0\cdot c_{3}-c_{1}=0$$

$c_{1}=0$ olduğundan bu denklem $0=0$'a indirgenir — ==her zaman doğrudur.==

[KUTU]
**Buradaki an, bütün örneğin kilit noktası.** $n=N=3$ adımında $c_{3}$'ün katsayısı sıfır oldu. İki ihtimal vardı:

- $0\cdot c_{3}=(\text{sıfırdan farklı bir şey})$ çıksaydı → **çelişki**, logaritmalı terim şart olurdu ($C\neq 0$).
- $0\cdot c_{3}=0$ çıktı → $c_{3}$ **hiçbir kısıt altında değil**, yani ==$c_{0}$'dan bağımsız ikinci bir keyfi sabit==. Demek ki $C=0$ ve umudumuz doğru çıktı.
[/KUTU]

Katsayıları hesaplayalım:

$$c_{2}=\frac{c_{0}}{2\cdot(-1)}=-\frac{c_{0}}{2},\qquad c_{4}=\frac{c_{2}}{4\cdot 1}=-\frac{c_{0}}{2\cdot 4},\qquad c_{6}=\frac{c_{4}}{6\cdot 3}=-\frac{c_{0}}{2\cdot 4\cdot 6\cdot 3}$$

$$c_{5}=\frac{c_{3}}{5\cdot 2}=\frac{c_{3}}{2\cdot 5},\qquad c_{7}=\frac{c_{5}}{7\cdot 4}=\frac{c_{3}}{2\cdot 4\cdot 5\cdot 7}$$

Yani ==çift katsayılar $c_{0}$ cinsinden, $c_{3}$'ten sonraki tek katsayılar $c_{3}$ cinsinden== ifade edilir:

$$c_{2n}=-\frac{c_{0}}{\big[2\cdot 4\cdots(2n)\big]\big[3\cdot 5\cdots(2n-3)\big]}\quad (n\ge 3),\qquad c_{2n+1}=\frac{c_{3}}{\big[2\cdot 4\cdots(2n-2)\big]\big[5\cdot 7\cdots(2n+1)\big]}\quad (n\ge 2)$$

**Çözüm:**

$$y_{2}(x)=x^{-1/2}\left[c_{0}\left(1-\frac{x^{2}}{2}-\frac{x^{4}}{8}-\frac{x^{6}}{144}-\dots\right)+c_{3}\left(x^{3}+\frac{x^{5}}{10}+\frac{x^{7}}{280}+\dots\right)\right]$$

---

### Şaşırtıcı sonuç: küçük kök tek başına genel çözümü verdi

$c_{3}$'lü kısmı ayırıp $x^{-1/2}$ ile çarpalım:

$$x^{-1/2}\cdot c_{3}\left(x^{3}+\frac{x^{5}}{10}+\frac{x^{7}}{280}+\dots\right)=c_{3}\,x^{5/2}\left(1+\frac{x^{2}}{10}+\frac{x^{4}}{280}+\dots\right)$$

==Bu tam olarak $y_{1}(x)$'tir.== Yani küçük kökten gelen ifade, içinde büyük kökün çözümünü de barındırıyor:

$$\boxed{\;y=c_{0}\,x^{-1/2}\left(1-\frac{x^{2}}{2}-\frac{x^{4}}{8}-\frac{x^{6}}{144}-\dots\right)+c_{3}\,x^{5/2}\left(1+\frac{x^{2}}{10}+\frac{x^{4}}{280}+\dots\right)\;}$$

İki keyfi sabit ($c_{0}$ ve $c_{3}$) içerdiğinden bu ==genel çözümdür==.

[KUTU]
**Pratik ders:** Kök farkı pozitif tam sayı olduğunda **önce küçük kökü denemek** bazen daha verimlidir. Çelişki çıkmazsa, küçük kök tek hamlede genel çözümü verir ve büyük kökle ayrıca uğraşmaya gerek kalmaz. Çelişki çıkarsa da kaybınız yoktur — o zaman logaritmalı biçime geçersiniz.
[/KUTU]

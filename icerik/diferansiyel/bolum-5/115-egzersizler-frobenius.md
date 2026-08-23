---
id: egzersizler-frobenius
menu: 5.11 Egzersizler — Frobenius
tip: sorular
baslik: 5.11 &nbsp;Bölüm Sonu Egzersizleri — Tekil Noktalar ve Frobenius
---

[SORU] **10.** &nbsp; $\displaystyle 2xy''+y'+2y=0$ denkleminin $x=0$ yakınındaki çözümlerini Frobenius yöntemiyle bulunuz.
[CEVAP]
**Adım 1 — $x=0$ düzgün tekil nokta mı?**

Normalleştirelim: $y''+\dfrac{1}{2x}y'+\dfrac{1}{x}y=0$, yani

$$P_{1}(x)=\frac{1}{2x},\qquad P_{2}(x)=\frac{1}{x}$$

İkisi de $x=0$'da analitik değil → tekil nokta. Çarpımları kuralım:

$$xP_{1}(x)=\frac{1}{2},\qquad x^{2}P_{2}(x)=x$$

İkisi de analitik → ==$x=0$ düzgün tekil noktadır==, Frobenius uygulanabilir.

**Adım 2 — Yerleştir.**

$y=\displaystyle\sum_{n=0}^{\infty}c_{n}x^{n+r}$, $c_{0}\neq 0$ alalım.

$$2x\,y''=2\sum_{n=0}^{\infty}(n+r)(n+r-1)c_{n}x^{n+r-1}$$

$$y'=\sum_{n=0}^{\infty}(n+r)c_{n}x^{n+r-1},\qquad 2y=2\sum_{n=0}^{\infty}c_{n}x^{n+r}$$

İlk iki toplamın üssü $x^{n+r-1}$, üçüncüsününki $x^{n+r}$. Üçüncüde $n\to n-1$ kaydırırsak hepsi $x^{n+r-1}$ olur:

$$\sum_{n=0}^{\infty}\Big[2(n+r)(n+r-1)+(n+r)\Big]c_{n}x^{n+r-1}+2\sum_{n=1}^{\infty}c_{n-1}x^{n+r-1}=0$$

Köşeli parantezi sadeleştirelim — $(n+r)$ ortak çarpandır:

$$(n+r)\Big[2(n+r-1)+1\Big]=(n+r)(2n+2r-1)$$

**Adım 3 — Belirtici denklem.**

En düşük kuvvet $x^{r-1}$'in katsayısı ($n=0$):

$$r(2r-1)c_{0}=0\;\Longrightarrow\;r(2r-1)=0$$

$$\boxed{\,r_{1}=\frac{1}{2},\qquad r_{2}=0\,}$$

$$r_{1}-r_{2}=\frac{1}{2}$$

Tam sayı değil → ==THEoREM 5.3 Sonuç 1==: iki dal da logaritmasız, bağımsız çözüm verecek.

**Adım 4 — Özyineleme.**

$n\ge 1$ için:

$$(n+r)(2n+2r-1)c_{n}+2c_{n-1}=0\;\Longrightarrow\;c_{n}=-\frac{2c_{n-1}}{(n+r)(2n+2r-1)}$$

---

**Büyük kök $r_{1}=\dfrac{1}{2}$:**

$$\left(n+\tfrac12\right)\left(2n+1-1\right)=\left(n+\tfrac12\right)(2n)=n(2n+1)$$

$$c_{n}=-\frac{2c_{n-1}}{n(2n+1)}$$

$$c_{1}=-\frac{2c_{0}}{1\cdot 3}=-\frac{2}{3}c_{0},\qquad c_{2}=-\frac{2c_{1}}{2\cdot 5}=\frac{2}{15}c_{0},\qquad c_{3}=-\frac{2c_{2}}{3\cdot 7}=-\frac{4}{315}c_{0}$$

$$y_{1}(x)=c_{0}\,x^{1/2}\left(1-\frac{2}{3}x+\frac{2}{15}x^{2}-\frac{4}{315}x^{3}+\dots\right)$$

---

**Küçük kök $r_{2}=0$:**

$$n(2n-1)$$

$$c_{n}=-\frac{2c_{n-1}}{n(2n-1)}$$

$$c_{1}=-\frac{2c_{0}}{1\cdot 1}=-2c_{0},\qquad c_{2}=-\frac{2c_{1}}{2\cdot 3}=\frac{2}{3}c_{0},\qquad c_{3}=-\frac{2c_{2}}{3\cdot 5}=-\frac{4}{45}c_{0}$$

$$y_{2}(x)=c_{0}\left(1-2x+\frac{2}{3}x^{2}-\frac{4}{45}x^{3}+\dots\right)$$

**Genel çözüm:**

$$\boxed{\;y=C_{1}x^{1/2}\left(1-\frac{2x}{3}+\frac{2x^{2}}{15}-\frac{4x^{3}}{315}+\dots\right)+C_{2}\left(1-2x+\frac{2x^{2}}{3}-\frac{4x^{3}}{45}+\dots\right)\;}$$

[KUTU]
**Bu soruda dikkat edilecek yer:** $2xy''$ terimi $y''$'nün üssünü yalnızca **bir** birim yükseltiyor, bu yüzden belirtici denklem $x^{r}$'nin değil ==$x^{r-1}$'in== katsayısından geliyor. Önceki örneklerde $x^{2}y''$ vardı ve en düşük kuvvet $x^{r}$ oluyordu. ==En düşük kuvvetin hangisi olduğunu her problemde yeniden belirleyin==, ezberden $x^{r}$ demeyin.
[/KUTU]

---

### Tekil noktaları bulunuz ve sınıflandırınız (1-4) — çözümler bize ait

[KUTU]
**Bu soruların cevabı kitabın anahtarında yok.** Çözümler bize aittir.

**Kullanılan üç adımlık yöntem.** Denklemi $y''+P(x)y'+Q(x)y=0$ biçimine sokun (başkatsayıya bölün), sonra:

1. **Tekil noktalar** = başkatsayıyı sıfırlayan $x$ değerleri.
2. Her tekil nokta $x_{0}$ için ==$\left(x-x_{0}\right)P$ ve $\left(x-x_{0}\right)^{2}Q$== çarpımlarını yazın.
3. ==İkisi de $x_{0}$'da analitikse (limiti sonluysa) nokta **düzgün**==, biri bile değilse **düzensiz**.

**Doğrulama:** her çarpımı sadeleştirdikten sonra ==paydada $x-x_{0}$ kalıp kalmadığına bakın.== Kalıyorsa limit sonsuzdur, nokta düzensizdir. Bu, limit hesaplamadan gözle yapılabilir.
[/KUTU]

[SORU] **1.** &nbsp; $\left(x^{2}-3x\right)y''+(x+2)y'+y=0$
[CEVAP]
**Adım 1 — Tekil noktalar.** $x^{2}-3x=x(x-3)$ &nbsp;$\Rightarrow$&nbsp; $x=0$ ve $x=3$.

$$P=\frac{x+2}{x(x-3)},\qquad Q=\frac{1}{x(x-3)}$$

**Adım 2 — $x=0$ için çarpımlar.**

$$xP=\frac{x+2}{x-3}\;\xrightarrow{x\to 0}\;-\frac{2}{3},\qquad x^{2}Q=\frac{x}{x-3}\;\xrightarrow{x\to 0}\;0$$

İkisi de sonlu &nbsp;$\Rightarrow$&nbsp; ==$x=0$ düzgün tekil nokta.==

**Adım 3 — $x=3$ için çarpımlar.**

$$(x-3)P=\frac{x+2}{x}\;\xrightarrow{x\to 3}\;\frac{5}{3},\qquad (x-3)^{2}Q=\frac{x-3}{x}\;\xrightarrow{x\to 3}\;0$$

&nbsp;$\Rightarrow$&nbsp; ==$x=3$ düzgün tekil nokta.==

$$\boxed{\;x=0\text{ ve }x=3\text{: ikisi de düzgün tekil}\;}$$

**Doğrulama (payda kontrolü).** Dört çarpımın hiçbirinde sadeleştirmeden sonra paydada ilgili $x-x_{0}$ çarpanı kalmadı &#10003;
[/CEVAP]

[SORU] **2.** &nbsp; $\left(x^{3}+x^{2}\right)y''+\left(x^{2}-2x\right)y'+4y=0$
[CEVAP]
**Adım 1 — Tekil noktalar.** $x^{3}+x^{2}=x^{2}(x+1)$ &nbsp;$\Rightarrow$&nbsp; $x=0$ ve $x=-1$.

$$P=\frac{x^{2}-2x}{x^{2}(x+1)}=\frac{x(x-2)}{x^{2}(x+1)}=\frac{x-2}{x(x+1)},\qquad Q=\frac{4}{x^{2}(x+1)}$$

==Payda $x$ ile sadeleşti==; bu, $x=0$'ın düzgün çıkmasının anahtarı.

**Adım 2 — $x=0$.**

$$xP=\frac{x-2}{x+1}\;\to\;-2,\qquad x^{2}Q=\frac{4}{x+1}\;\to\;4$$

&nbsp;$\Rightarrow$&nbsp; ==düzgün tekil.==

**Adım 3 — $x=-1$.**

$$(x+1)P=\frac{x-2}{x}\;\to\;3,\qquad (x+1)^{2}Q=\frac{4(x+1)}{x^{2}}\;\to\;0$$

&nbsp;$\Rightarrow$&nbsp; ==düzgün tekil.==

$$\boxed{\;x=0\text{ ve }x=-1\text{: ikisi de düzgün tekil}\;}$$

[KUTU]
**Sadeleştirmeyi atlarsanız yanlış cevap verirsiniz.** $P$'yi sadeleştirmeden $xP=\dfrac{x\left(x^{2}-2x\right)}{x^{2}(x+1)}$ diye bıraksaydınız, paydada $x$ görüp "düzensiz" demeye kalkabilirdiniz.

==Her zaman önce sadeleştirin, sonra limite bakın.== Başkatsayının kökü, pay ile de sadeleşebilir.
[/KUTU]
[/CEVAP]

[SORU] **3.** &nbsp; $\left(x^{4}-2x^{3}+x^{2}\right)y''+2(x-1)y'+x^{2}y=0$
[CEVAP]
**Adım 1 — Başkatsayıyı çarpanlarına ayır.**

$$x^{4}-2x^{3}+x^{2}=x^{2}\left(x^{2}-2x+1\right)=x^{2}(x-1)^{2}$$

Tekil noktalar: $x=0$ ve $x=1$ &nbsp;— ==ikisi de çift katlı kök.==

$$P=\frac{2(x-1)}{x^{2}(x-1)^{2}}=\frac{2}{x^{2}(x-1)},\qquad Q=\frac{x^{2}}{x^{2}(x-1)^{2}}=\frac{1}{(x-1)^{2}}$$

**Adım 2 — $x=0$.**

$$xP=\frac{2}{x(x-1)}$$

==Sadeleştirmeye rağmen paydada $x$ kaldı==, $x\to 0$ iken sonsuza gidiyor:

$$\boxed{\;x=0\text{ düzensiz tekil nokta}\;}$$

Frobenius yöntemi burada uygulanamaz.

**Adım 3 — $x=1$.**

$$(x-1)P=\frac{2}{x^{2}}\;\to\;2,\qquad (x-1)^{2}Q=1$$

İkisi de analitik &nbsp;$\Rightarrow$&nbsp; ==$x=1$ düzgün tekil nokta.==

[KUTU]
**Neden $x=0$ düzensiz ama $x=1$ düzgün?** İkisi de başkatsayının çift katlı kökü, ama paydaki $2(x-1)$ çarpanı ==yalnız $x=1$'deki fazlalığı temizliyor:==

- $x=1$'de: $P$'nin kutbu ikinciden birinciye indi &nbsp;$\Rightarrow$&nbsp; ==$P$ için birinci mertebeden kutup sınırı sağlandı.==
- $x=0$'da: $P$'nin kutbu ikinci mertebeden kaldı &nbsp;$\Rightarrow$&nbsp; sınır aşıldı.

**Ezber cümlesi:** düzgünlük için ==$P$ en fazla birinci, $Q$ en fazla ikinci mertebeden kutba sahip olabilir.== "$P$'ye bir çarpan, $Q$'ya iki çarpan" kuralı tam olarak bunu söylüyor.
[/KUTU]
[/CEVAP]

[SORU] **4.** &nbsp; $\left(x^{5}+x^{4}-6x^{3}\right)y''+x^{2}y'+(x-2)y=0$
[CEVAP]
**Adım 1 — Çarpanlara ayır.**

$$x^{5}+x^{4}-6x^{3}=x^{3}\left(x^{2}+x-6\right)=x^{3}(x+3)(x-2)$$

Tekil noktalar: $x=0$, $x=-3$, $x=2$.

$$P=\frac{x^{2}}{x^{3}(x+3)(x-2)}=\frac{1}{x(x+3)(x-2)},\qquad Q=\frac{x-2}{x^{3}(x+3)(x-2)}=\frac{1}{x^{3}(x+3)}$$

==$Q$'da $(x-2)$ tamamen sadeleşti==; bu, $x=2$'yi kolaylaştıracak.

**Adım 2 — $x=0$.**

$$xP=\frac{1}{(x+3)(x-2)}\;\to\;-\frac{1}{6}\quad\text{(analitik)}$$

$$x^{2}Q=\frac{1}{x(x+3)}\quad\text{— paydada }x\text{ kaldı, }x\to 0\text{ iken sonsuz}$$

$$\boxed{\;x=0\text{ düzensiz tekil}\;}$$

==Bir tanesinin bozulması yeterli;== $P$ testi geçse de $Q$ testi geçmedi.

**Adım 3 — $x=-3$.**

$$(x+3)P=\frac{1}{x(x-2)}\;\to\;\frac{1}{15},\qquad (x+3)^{2}Q=\frac{x+3}{x^{3}}\;\to\;0$$

&nbsp;$\Rightarrow$&nbsp; ==düzgün tekil.==

**Adım 4 — $x=2$.**

$$(x-2)P=\frac{1}{x(x+3)}\;\to\;\frac{1}{10},\qquad (x-2)^{2}Q=\frac{(x-2)^{2}}{x^{3}(x+3)}\;\to\;0$$

&nbsp;$\Rightarrow$&nbsp; ==düzgün tekil.==

$$\boxed{\;x=0\text{ düzensiz};\quad x=-3\text{ ve }x=2\text{ düzgün}\;}$$

[KUTU]
**$x=2$ neden bu kadar kolay çıktı?** Çünkü $Q$'da $(x-2)$ pay ile sadeleşti, yani ==$Q$'nun $x=2$'de tekilliği hiç yok.== Geriye yalnız $P$'nin birinci mertebeden kutbu kaldı, o da sınırın içinde.

**Genel gözlem:** başkatsayının bir kökü, ==$P$ ve $Q$'nun ikisinde birden sadeleşirse o nokta aslında adi noktadır.== Burada $Q$'da sadeleşti ama $P$'de sadeleşmedi, o yüzden tekil kaldı — ama düzgün.

Bu üç soru ($2$, $3$, $4$) birlikte ==sadeleştirmenin sonucu nasıl değiştirdiğini== gösteriyor: her seferinde önce sadeleştirin.
[/KUTU]
[/CEVAP]

---

### Frobenius yöntemiyle $x=0$ yakınındaki çözümler (5-32) — çözümler bize ait

[KUTU]
**Bu soruların cevabı kitabın anahtarında yok.** Çözümler bize aittir; her biri ==bulunan serinin doğrudan denkleme konmasıyla doğrulanmıştır== (her $x$ kuvvetinin katsayısı ayrı ayrı sıfır çıkmalı).

**İzlenen sıra (her soruda aynı):**

1. Denklemi $x^{2}y''+x\,b(x)y'+c(x)y=0$ biçimine sok, $b_{0}=b(0)$ ve $c_{0}=c(0)$ oku.
2. **Başlangıç denklemi** $r(r-1)+b_{0}r+c_{0}=0$; kökleri $r_{1}\ge r_{2}$ diye sırala, ==kök farkını not et.==
3. İndirgeme bağıntısını çıkar, ==$n=1$ adımını ayrıca kontrol et== ($a_{1}$ sıfır mı, serbest mi).
4. Her kök için katsayıları üret.
[/KUTU]

[SORU] **5.** &nbsp; $2x^{2}y''+xy'+\left(x^{2}-1\right)y=0$
[CEVAP]
**Adım 1 — Standart biçime sok.** İkiye bölelim:

$$x^{2}y''+x\cdot\frac{1}{2}\,y'+\frac{x^{2}-1}{2}\,y=0\;\Longrightarrow\;b_{0}=\frac{1}{2},\quad c_{0}=-\frac{1}{2}$$

**Adım 2 — Başlangıç denklemi.**

$$r(r-1)+\frac{r}{2}-\frac{1}{2}=0\;\Longrightarrow\;2r^{2}-r-1=0\;\Longrightarrow\;(2r+1)(r-1)=0$$

$$r_{1}=1,\qquad r_{2}=-\frac{1}{2}$$

==Kök farkı $\tfrac32$, tam sayı değil== &nbsp;$\Rightarrow$&nbsp; en kolay durum: her iki kök de düz Frobenius serisi verir, logaritma yok.

**Adım 3 — İndirgeme bağıntısı.** $y=\sum a_{n}x^{n+r}$ koyalım; $m=n+r$ yazarsak $x^{m}$ katsayısı:

$$\underbrace{\left[2m(m-1)+m-1\right]}_{(2m+1)(m-1)}a_{n}+a_{n-2}=0$$

$$\boxed{\;a_{n}=-\frac{a_{n-2}}{\left(2(n+r)+1\right)(n+r-1)}\;}$$

**Adım 4 — $n=1$ kontrolü.** $a_{1}$'in katsayısı her iki kökte de sıfırdan farklı ($r=1$ için $5$, $r=-\tfrac12$ için $-1$) &nbsp;$\Rightarrow$&nbsp; ==$a_{1}=0$, dolayısıyla bütün tek indisler sıfır.== Seriler yalnız çift kuvvet taşır.

**Adım 5 — Büyük kök $r_{1}=1$.** Bağıntı $a_{n}=-\dfrac{a_{n-2}}{(2n+3)\,n}$:

$$a_{2}=-\frac{a_{0}}{14},\qquad a_{4}=-\frac{a_{2}}{44}=\frac{a_{0}}{616}$$

$$\boxed{\;y_{1}=x\left(1-\frac{x^{2}}{14}+\frac{x^{4}}{616}-\cdots\right)\;}$$

**Adım 6 — Küçük kök $r_{2}=-\tfrac12$.** Bağıntı $a_{n}=-\dfrac{a_{n-2}}{n(2n-3)}$:

$$a_{2}=-\frac{a_{0}}{2},\qquad a_{4}=-\frac{a_{2}}{20}=\frac{a_{0}}{40}$$

$$\boxed{\;y_{2}=x^{-1/2}\left(1-\frac{x^{2}}{2}+\frac{x^{4}}{40}-\cdots\right)\;}$$

**Doğrulama — $y_{1}$'i doğrudan denkleme koy.** $y=x-\dfrac{x^{3}}{14}+\dfrac{x^{5}}{616}$ için:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$2x^{2}y''$</th><th>$xy'$</th><th>$x^{2}y$</th><th>$-y$</th><th>Toplam</th></tr>
<tr><td>$x^{1}$</td><td>$0$</td><td>$1$</td><td>$0$</td><td>$-1$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{3}$</td><td>$-\tfrac{12}{14}$</td><td>$-\tfrac{3}{14}$</td><td>$\tfrac{14}{14}$</td><td>$\tfrac{1}{14}$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{5}$</td><td>$\tfrac{40}{616}$</td><td>$\tfrac{5}{616}$</td><td>$-\tfrac{44}{616}$</td><td>$-\tfrac{1}{616}$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

==Üç kuvvet, hesapladığımız üç katsayıyı da sınıyor.==
[/CEVAP]

[SORU] **6.** &nbsp; $2x^{2}y''+xy'+\left(2x^{2}-3\right)y=0$
[CEVAP]
**Adım 1 — Standart biçim.** İkiye bölelim: $b_{0}=\dfrac{1}{2}$, &nbsp;$c_{0}=-\dfrac{3}{2}$.

**Adım 2 — Başlangıç denklemi.**

$$r(r-1)+\frac{r}{2}-\frac{3}{2}=0\;\Longrightarrow\;2r^{2}-r-3=0\;\Longrightarrow\;(2r-3)(r+1)=0$$

$$r_{1}=\frac{3}{2},\qquad r_{2}=-1$$

Kök farkı $\tfrac52$, ==tam sayı değil== &nbsp;$\Rightarrow$&nbsp; yine en kolay durum.

**Adım 3 — İndirgeme bağıntısı.** $m=n+r$ için $2m^{2}-m-3=(2m-3)(m+1)$:

$$\boxed{\;a_{n}=-\frac{2a_{n-2}}{\left(2(n+r)-3\right)(n+r+1)}\;}$$

$n=1$'de katsayı her iki kökte de sıfırdan farklı ($7$ ve $-3$) &nbsp;$\Rightarrow$&nbsp; $a_{1}=0$, tek indisler yok.

**Adım 4 — Büyük kök $r_{1}=\tfrac32$.** Bağıntı $a_{n}=-\dfrac{2a_{n-2}}{n(2n+5)}$:

$$a_{2}=-\frac{a_{0}}{9},\qquad a_{4}=-\frac{2a_{2}}{52}=\frac{a_{0}}{234}$$

$$\boxed{\;y_{1}=x^{3/2}\left(1-\frac{x^{2}}{9}+\frac{x^{4}}{234}-\cdots\right)\;}$$

**Adım 5 — Küçük kök $r_{2}=-1$.** Bağıntı $a_{n}=-\dfrac{2a_{n-2}}{n(2n-5)}$:

$$a_{2}=-\frac{2a_{0}}{2(-1)}=a_{0},\qquad a_{4}=-\frac{2a_{2}}{12}=-\frac{a_{0}}{6}$$

$$\boxed{\;y_{2}=x^{-1}\left(1+x^{2}-\frac{x^{4}}{6}+\cdots\right)\;}$$

==$a_{2}$'nin işareti pozitif çıktı==, çünkü $n=2$'de $2n-5=-1$ negatif — paydadaki işaret değişimini kaçırmayın.

**Doğrulama — $y_{2}$'yi doğrudan denkleme koy.** $y=x^{-1}+x-\dfrac{x^{3}}{6}$ için:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$2x^{2}y''$</th><th>$xy'$</th><th>$2x^{2}y$</th><th>$-3y$</th><th>Toplam</th></tr>
<tr><td>$x^{-1}$</td><td>$4$</td><td>$-1$</td><td>$0$</td><td>$-3$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{1}$</td><td>$0$</td><td>$1$</td><td>$2$</td><td>$-3$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{3}$</td><td>$-2$</td><td>$-\tfrac12$</td><td>$2$</td><td>$\tfrac12$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

**Doğrulama 2 — $y_{1}$ için de aynı kontrol.** $y=x^{3/2}-\dfrac{x^{7/2}}{9}+\dfrac{x^{11/2}}{234}$:

$x^{3/2}$: &nbsp; $\tfrac32+\tfrac32-3=0$ &#10003;

$x^{7/2}$: &nbsp; $-\tfrac{35}{18}-\tfrac{7}{18}+2+\tfrac13=-\tfrac{7}{3}+\tfrac{7}{3}=0$ &#10003;

$x^{11/2}$: &nbsp; $\tfrac{110}{468}-\tfrac{104}{468}-\tfrac{6}{468}=0$ &#10003;

[KUTU]
**5 ile 6'yı yan yana koyun — ikisi de aynı kalıp.** Her ikisinde de $2x^{2}y''+xy'$ var; fark yalnız sabit terimde ($-1$ ve $-3$) ve $x^{2}$ katsayısında ($1$ ve $2$).

**Sonuç:** başlangıç denklemleri $2r^{2}-r-1$ ve $2r^{2}-r-3$ — ==yalnız sabit terim değişiyor.== $b_{0}$ aynı olduğu için $r$'nin katsayısı da aynı kalıyor.

**Pratik kazanç:** $2x^{2}y''+xy'+(\ldots)y=0$ kalıbını gördüğünüzde başlangıç denklemi ==her zaman $2r^{2}-r+c_{0}'=0$== biçimindedir; yalnız sabit terimi okumanız yeterli. Bu setteki 5, 6 ve 12. sorular bu kalıpta.
[/KUTU]
[/CEVAP]

---

[SORU] **7.** &nbsp; $x^{2}y''-xy'+\left(x^{2}+\dfrac{8}{9}\right)y=0$
[CEVAP]
**Adım 1 — Katsayıları oku.** Denklem zaten standart biçimde: $b_{0}=-1$, &nbsp;$c_{0}=\dfrac{8}{9}$.

**Adım 2 — Başlangıç denklemi.**

$$r(r-1)-r+\frac{8}{9}=r^{2}-2r+\frac{8}{9}=0\;\Longrightarrow\;9r^{2}-18r+8=0$$

$$r=\frac{18\pm 6}{18}\;\Longrightarrow\;r_{1}=\frac{4}{3},\quad r_{2}=\frac{2}{3}$$

Kök farkı $\tfrac23$, ==tam sayı değil== &nbsp;$\Rightarrow$&nbsp; en kolay durum.

**Adım 3 — İndirgeme bağıntısı.** $m=n+r$ için $m^{2}-2m+\tfrac89=\left(m-\tfrac43\right)\left(m-\tfrac23\right)$:

$$\boxed{\;a_{n}=-\frac{a_{n-2}}{\left(n+r-\tfrac43\right)\left(n+r-\tfrac23\right)}\;}$$

$n=1$'de katsayı her iki kökte de sıfırdan farklı ($\tfrac53$ ve $\tfrac13$) &nbsp;$\Rightarrow$&nbsp; $a_{1}=0$, tek indisler yok.

**Adım 4 — Büyük kök $r_{1}=\tfrac43$.** Bağıntı $a_{n}=-\dfrac{3a_{n-2}}{n(3n+2)}$:

$$a_{2}=-\frac{3a_{0}}{16},\qquad a_{4}=-\frac{3a_{2}}{56}=\frac{9a_{0}}{896}$$

$$\boxed{\;y_{1}=x^{4/3}\left(1-\frac{3x^{2}}{16}+\frac{9x^{4}}{896}-\cdots\right)\;}$$

**Adım 5 — Küçük kök $r_{2}=\tfrac23$.** Bağıntı $a_{n}=-\dfrac{3a_{n-2}}{n(3n-2)}$:

$$a_{2}=-\frac{3a_{0}}{8},\qquad a_{4}=-\frac{3a_{2}}{40}=\frac{9a_{0}}{320}$$

$$\boxed{\;y_{2}=x^{2/3}\left(1-\frac{3x^{2}}{8}+\frac{9x^{4}}{320}-\cdots\right)\;}$$

**Doğrulama — katsayıları denkleme geri koy.** Kontrol edilen ifade $\left(m^{2}-2m+\tfrac89\right)a_{n}+a_{n-2}$:

<div class="tablo-sar">
<table>
<tr><th>Kök</th><th>$n$</th><th>$m^{2}-2m+\tfrac89$</th><th>Hesap</th><th>Sonuç</th></tr>
<tr><td>$\tfrac43$</td><td>$2$</td><td>$\tfrac{16}{3}$</td><td>$\tfrac{16}{3}\left(-\tfrac{3}{16}\right)+1$</td><td>$0$ &#10003;</td></tr>
<tr><td>$\tfrac43$</td><td>$4$</td><td>$\tfrac{56}{3}$</td><td>$\tfrac{56}{3}\cdot\tfrac{9}{896}-\tfrac{3}{16}$</td><td>$0$ &#10003;</td></tr>
<tr><td>$\tfrac23$</td><td>$2$</td><td>$\tfrac{8}{3}$</td><td>$\tfrac83\left(-\tfrac38\right)+1$</td><td>$0$ &#10003;</td></tr>
<tr><td>$\tfrac23$</td><td>$4$</td><td>$\tfrac{40}{3}$</td><td>$\tfrac{40}{3}\cdot\tfrac{9}{320}-\tfrac38$</td><td>$0$ &#10003;</td></tr>
</table>
</div>
[/CEVAP]

[SORU] **8.** &nbsp; $x^{2}y''-xy'+\left(2x^{2}+\dfrac{5}{9}\right)y=0$
[CEVAP]
**Adım 1 — Başlangıç denklemi.** $b_{0}=-1$, &nbsp;$c_{0}=\dfrac{5}{9}$:

$$r^{2}-2r+\frac{5}{9}=0\;\Longrightarrow\;9r^{2}-18r+5=0\;\Longrightarrow\;r=\frac{18\pm 12}{18}$$

$$r_{1}=\frac{5}{3},\qquad r_{2}=\frac{1}{3}$$

Kök farkı $\tfrac43$, tam sayı değil.

**Adım 2 — İndirgeme bağıntısı.** $m^{2}-2m+\tfrac59=\left(m-\tfrac53\right)\left(m-\tfrac13\right)$; ==bu kez $x^{2}$'nin katsayısı $2$ olduğu için payda da $2$ var:==

$$\boxed{\;a_{n}=-\frac{2a_{n-2}}{\left(n+r-\tfrac53\right)\left(n+r-\tfrac13\right)}\;}$$

$n=1$'de katsayılar $\tfrac73$ ve $-\tfrac13$, ikisi de sıfırdan farklı &nbsp;$\Rightarrow$&nbsp; $a_{1}=0$.

**Adım 3 — Büyük kök $r_{1}=\tfrac53$.** Bağıntı $a_{n}=-\dfrac{6a_{n-2}}{n(3n+4)}$:

$$a_{2}=-\frac{3a_{0}}{10},\qquad a_{4}=\frac{9a_{0}}{320}$$

$$\boxed{\;y_{1}=x^{5/3}\left(1-\frac{3x^{2}}{10}+\frac{9x^{4}}{320}-\cdots\right)\;}$$

**Adım 4 — Küçük kök $r_{2}=\tfrac13$.** Bağıntı $a_{n}=-\dfrac{6a_{n-2}}{n(3n-4)}$:

$$a_{2}=-\frac{3a_{0}}{2},\qquad a_{4}=\frac{9a_{0}}{32}$$

$$\boxed{\;y_{2}=x^{1/3}\left(1-\frac{3x^{2}}{2}+\frac{9x^{4}}{32}-\cdots\right)\;}$$

**Doğrulama.** Kontrol edilen ifade $\left(m^{2}-2m+\tfrac59\right)a_{n}+2a_{n-2}$:

<div class="tablo-sar">
<table>
<tr><th>Kök</th><th>$n$</th><th>Çarpan</th><th>Hesap</th><th>Sonuç</th></tr>
<tr><td>$\tfrac53$</td><td>$2$</td><td>$\tfrac{20}{3}$</td><td>$\tfrac{20}{3}\left(-\tfrac{3}{10}\right)+2$</td><td>$0$ &#10003;</td></tr>
<tr><td>$\tfrac53$</td><td>$4$</td><td>$\tfrac{64}{3}$</td><td>$\tfrac{64}{3}\cdot\tfrac{9}{320}-\tfrac{3}{5}$</td><td>$0$ &#10003;</td></tr>
<tr><td>$\tfrac13$</td><td>$2$</td><td>$\tfrac{4}{3}$</td><td>$\tfrac43\left(-\tfrac32\right)+2$</td><td>$0$ &#10003;</td></tr>
<tr><td>$\tfrac13$</td><td>$4$</td><td>$\tfrac{32}{3}$</td><td>$\tfrac{32}{3}\cdot\tfrac{9}{32}-3$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

==7 ile 8 arasındaki tek fark:== sabit terim ($\tfrac89$ yerine $\tfrac59$) ve $x^{2}$'nin katsayısı ($1$ yerine $2$). İlki kökleri, ikincisi bağıntının payını değiştiriyor.
[/CEVAP]

[SORU] **9.** &nbsp; $x^{2}y''+xy'+\left(x^{2}-\dfrac{1}{9}\right)y=0$
[CEVAP]
**Bu denklemi tanıyın:** Bessel denkleminin ta kendisi, ==$p=\dfrac13$ ile.==

$$x^{2}y''+xy'+\left(x^{2}-p^{2}\right)y=0,\qquad p=\frac{1}{3}$$

**Adım 1 — Başlangıç denklemi.** Bessel'de $b_{0}=1$, $c_{0}=-p^{2}$ olduğundan

$$r(r-1)+r-\frac{1}{9}=r^{2}-\frac{1}{9}=0\;\Longrightarrow\;r=\pm\frac{1}{3}$$

Kök farkı $2p=\tfrac23$, ==tam sayı değil== &nbsp;$\Rightarrow$&nbsp; $J_{1/3}$ ve $J_{-1/3}$ bağımsız, $Y_{p}$'ye gerek yok.

**Adım 2 — İndirgeme bağıntısı.**

$$\boxed{\;a_{n}=-\frac{a_{n-2}}{(n+r)^{2}-\tfrac19}\;}$$

$n=1$'de katsayılar $\tfrac{15}{9}$ ve $\tfrac13$ &nbsp;$\Rightarrow$&nbsp; $a_{1}=0$.

**Adım 3 — $r=\tfrac13$.** $\left(n+\tfrac13\right)^{2}-\tfrac19=n\left(n+\tfrac23\right)=\dfrac{n(3n+2)}{3}$:

$$a_{n}=-\frac{3a_{n-2}}{n(3n+2)}\;\Longrightarrow\;a_{2}=-\frac{3a_{0}}{16},\quad a_{4}=\frac{9a_{0}}{896}$$

$$\boxed{\;y_{1}=x^{1/3}\left(1-\frac{3x^{2}}{16}+\frac{9x^{4}}{896}-\cdots\right)\;}$$

**Adım 4 — $r=-\tfrac13$.** $\left(n-\tfrac13\right)^{2}-\tfrac19=n\left(n-\tfrac23\right)=\dfrac{n(3n-2)}{3}$:

$$a_{n}=-\frac{3a_{n-2}}{n(3n-2)}\;\Longrightarrow\;a_{2}=-\frac{3a_{0}}{8},\quad a_{4}=\frac{9a_{0}}{320}$$

$$\boxed{\;y_{2}=x^{-1/3}\left(1-\frac{3x^{2}}{8}+\frac{9x^{4}}{320}-\cdots\right)\;}$$

**Doğrulama 1 — katsayılar.** Kontrol edilen ifade $\left[(n+r)^{2}-\tfrac19\right]a_{n}+a_{n-2}$:

$r=\tfrac13$, $n=2$: &nbsp; $\tfrac{16}{3}\left(-\tfrac{3}{16}\right)+1=0$ &#10003; &nbsp;&nbsp; $n=4$: &nbsp; $\tfrac{56}{3}\cdot\tfrac{9}{896}-\tfrac{3}{16}=0$ &#10003;

$r=-\tfrac13$, $n=2$: &nbsp; $\tfrac{8}{3}\left(-\tfrac38\right)+1=0$ &#10003; &nbsp;&nbsp; $n=4$: &nbsp; $\tfrac{40}{3}\cdot\tfrac{9}{320}-\tfrac38=0$ &#10003;

**Doğrulama 2 — 7. soruyla bağlantı.** ==Bulduğumuz seriler, 7. sorununkilerle birebir aynı.== Bu tesadüf değil: 7. soruda $y=xu$ dönüştürmesi yapılırsa

$$x^{2}(xu)''-x(xu)'+\left(x^{2}+\tfrac89\right)(xu)=x\left[x^{2}u''+xu'+\left(x^{2}-\tfrac19\right)u\right]$$

==Yani 7. soru, 9. sorunun $x$ ile çarpılmış hâlidir.== Nitekim

$$y_{1}^{(7)}=x\cdot y_{1}^{(9)},\qquad y_{2}^{(7)}=x\cdot y_{2}^{(9)}$$

İki soruyu bağımsız olarak çözdük ve seriler tuttu — ==bu, ikisi için birden bağımsız bir doğrulamadır.==

[KUTU]
**Bölüm 6.3'e köprü.** Bulduğunuz $y_{1}$ ve $y_{2}$, sabit çarpan farkıyla ==Bessel fonksiyonları $J_{1/3}(x)$ ve $J_{-1/3}(x)$'tir.==

Standart gösterimde $J_{p}$'nin katsayıları gama fonksiyonu içerir; biz $a_{0}=1$ aldığımız için o normalizasyon çıkmadı. ==Diferansiyel denklemin çözümü olmak için normalizasyon gerekmez== — Legendre polinomlarında da aynı durum vardı.

**Sınavda tanıma:** $x^{2}y''+xy'+\left(x^{2}-\text{sabit}\right)y=0$ kalıbını görürseniz Bessel'dir ve ==başlangıç denklemi doğrudan $r^{2}=$ o sabittir.== Sabit tam kare değilse (burada $\tfrac19$, $p=\tfrac13$) kök farkı tam sayı olmaz ve iş kolaydır.
[/KUTU]
[/CEVAP]

[SORU] **11.** &nbsp; $3xy''-(x-2)y'-2y=0$
[CEVAP]
**Adım 1 — Standart biçime sok.** $x$ ile çarpıp $3$'e bölelim:

$$x^{2}y''+x\cdot\underbrace{\frac{2-x}{3}}_{b(x)}\,y'+\underbrace{\left(-\frac{2x}{3}\right)}_{c(x)}y=0\;\Longrightarrow\;b_{0}=\frac{2}{3},\quad c_{0}=0$$

**Adım 2 — Başlangıç denklemi.** ==$c_{0}=0$ olduğu için $r=0$ kesin bir köktür:==

$$r(r-1)+\frac{2}{3}r=r\left(r-\frac{1}{3}\right)=0\;\Longrightarrow\;r_{1}=\frac{1}{3},\quad r_{2}=0$$

Kök farkı $\tfrac13$, tam sayı değil.

**Adım 3 — İndirgeme bağıntısı.** $3x^{2}y''-x^{2}y'+2xy'-2xy=0$ biçiminden, $m=n+r$ için:

$$\underbrace{\left[3m(m-1)+2m\right]}_{m(3m-1)}a_{n}-\underbrace{\left[(m-1)+2\right]}_{m+1}a_{n-1}=0$$

$$\boxed{\;a_{n}=\frac{(n+r+1)\,a_{n-1}}{(n+r)\left(3(n+r)-1\right)}\;}$$

==Bu bağıntı ardışık katsayıları bağlıyor ($a_{n-1}$), o yüzden tek indisler sıfırlanmıyor== — seriler bütün kuvvetleri taşır.

**Adım 4 — $r_{2}=0$.** Bağıntı $a_{n}=\dfrac{(n+1)a_{n-1}}{n(3n-1)}$:

$$a_{1}=\frac{2a_{0}}{2}=a_{0},\quad a_{2}=\frac{3a_{1}}{10}=\frac{3a_{0}}{10},\quad a_{3}=\frac{4a_{2}}{24}=\frac{a_{0}}{20}$$

$$\boxed{\;y_{2}=1+x+\frac{3x^{2}}{10}+\frac{x^{3}}{20}+\cdots\;}$$

==Bu çözüm analitik== ($r=0$ ve seri düzgün), yani $x=0$'da sonlu.

**Adım 5 — $r_{1}=\tfrac13$.** Bağıntı $a_{n}=\dfrac{(3n+4)a_{n-1}}{3n(3n+1)}$:

$$a_{1}=\frac{7a_{0}}{12},\quad a_{2}=\frac{10a_{1}}{42}=\frac{5a_{0}}{36},\quad a_{3}=\frac{13a_{2}}{90}=\frac{13a_{0}}{648}$$

$$\boxed{\;y_{1}=x^{1/3}\left(1+\frac{7x}{12}+\frac{5x^{2}}{36}+\frac{13x^{3}}{648}+\cdots\right)\;}$$

**Doğrulama — $y_{2}$'yi doğrudan denkleme koy.** $y=1+x+\dfrac{3x^{2}}{10}+\dfrac{x^{3}}{20}$ için:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$3xy''$</th><th>$-xy'$</th><th>$2y'$</th><th>$-2y$</th><th>Toplam</th></tr>
<tr><td>$x^{0}$</td><td>$0$</td><td>$0$</td><td>$2$</td><td>$-2$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{1}$</td><td>$\tfrac95$</td><td>$-1$</td><td>$\tfrac65$</td><td>$-2$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{2}$</td><td>$\tfrac{9}{10}$</td><td>$-\tfrac35$</td><td>$\tfrac{3}{10}$</td><td>$-\tfrac35$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

[KUTU]
**$c_{0}=0$ ne anlama geliyor?** Başlangıç denklemi $r\left(r+b_{0}-1\right)=0$ biçimine iner, yani ==$r=0$ her zaman bir köktür== ve ona karşılık gelen çözüm **analitiktir** (adi bir kuvvet serisi, $x^{r}$ çarpanı yok).

**Nasıl tanınır:** denklemi standart biçime soktuğunuzda $c(x)$'in sabit terimi yoksa ($c(0)=0$), bu durumdasınız. Buradaki $c(x)=-\tfrac{2x}{3}$ tam olarak öyle.

**Pratik sonuç:** böyle bir problemde ==bir çözümü düz kuvvet serisi olarak yazabilirsiniz==, $x^{r}$ çarpanıyla uğraşmadan. Öteki kök ($r=1-b_{0}$) kesirli çıkar ve asıl Frobenius işi orada olur.
[/KUTU]
[/CEVAP]

[SORU] **12.** &nbsp; $2x^{2}y''+5xy'+(2x-2)y=0$
[CEVAP]
**Adım 1 — Standart biçim.** İkiye bölelim: $b_{0}=\dfrac{5}{2}$, &nbsp;$c_{0}=-1$.

**Adım 2 — Başlangıç denklemi.**

$$r(r-1)+\frac{5}{2}r-1=r^{2}+\frac{3}{2}r-1=0\;\Longrightarrow\;2r^{2}+3r-2=0\;\Longrightarrow\;(2r-1)(r+2)=0$$

$$r_{1}=\frac{1}{2},\qquad r_{2}=-2$$

Kök farkı $\tfrac52$, tam sayı değil.

**Adım 3 — İndirgeme bağıntısı.** $m=n+r$ için $2m^{2}+3m-2=(2m-1)(m+2)$:

$$\boxed{\;a_{n}=-\frac{2a_{n-1}}{\left(2(n+r)-1\right)(n+r+2)}\;}$$

==Ardışık bağıntı== ($a_{n-1}$), bütün kuvvetler var.

**Adım 4 — Büyük kök $r_{1}=\tfrac12$.** Bağıntı $a_{n}=-\dfrac{2a_{n-1}}{n(2n+5)}$:

$$a_{1}=-\frac{2a_{0}}{7},\quad a_{2}=-\frac{a_{1}}{9}=\frac{2a_{0}}{63},\quad a_{3}=-\frac{2a_{2}}{33}=-\frac{4a_{0}}{2079}$$

$$\boxed{\;y_{1}=x^{1/2}\left(1-\frac{2x}{7}+\frac{2x^{2}}{63}-\frac{4x^{3}}{2079}+\cdots\right)\;}$$

**Adım 5 — Küçük kök $r_{2}=-2$.** Bağıntı $a_{n}=-\dfrac{2a_{n-1}}{n(2n-5)}$:

$$a_{1}=-\frac{2a_{0}}{-3}=\frac{2a_{0}}{3},\quad a_{2}=-\frac{2a_{1}}{-2}=a_{1}=\frac{2a_{0}}{3}$$

$$a_{3}=-\frac{2a_{2}}{3}=-\frac{4a_{0}}{9},\qquad a_{4}=-\frac{2a_{3}}{12}=\frac{2a_{0}}{27}$$

$$\boxed{\;y_{2}=x^{-2}\left(1+\frac{2x}{3}+\frac{2x^{2}}{3}-\frac{4x^{3}}{9}+\frac{2x^{4}}{27}+\cdots\right)\;}$$

==İlk iki katsayının işareti pozitif çıktı==, çünkü $2n-5$ çarpanı $n=1$ ve $n=2$'de negatif. $n=3$'ten sonra işaretler düzene giriyor.

**Doğrulama — $y_{2}$'yi doğrudan denkleme koy.** $y=x^{-2}+\dfrac{2}{3}x^{-1}+\dfrac{2}{3}-\dfrac{4}{9}x+\cdots$ için:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$2x^{2}y''$</th><th>$5xy'$</th><th>$2xy$</th><th>$-2y$</th><th>Toplam</th></tr>
<tr><td>$x^{-2}$</td><td>$12$</td><td>$-10$</td><td>$0$</td><td>$-2$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{-1}$</td><td>$\tfrac83$</td><td>$-\tfrac{10}{3}$</td><td>$2$</td><td>$-\tfrac43$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{0}$</td><td>$0$</td><td>$0$</td><td>$\tfrac43$</td><td>$-\tfrac43$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{1}$</td><td>$0$</td><td>$-\tfrac{20}{9}$</td><td>$\tfrac43$</td><td>$\tfrac89$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

==Dört kuvvet, dört katsayıyı da sınıyor.==

[KUTU]
**"$2x^{2}y''$ kalıbı" — 5, 6 ve 12 birlikte.** Üçünde de başkatsayı $2x^{2}$; başlangıç denklemleri:

<div class="tablo-sar">
<table>
<tr><th>Soru</th><th>$b_{0}$</th><th>Başlangıç denklemi</th><th>Kökler</th></tr>
<tr><td>5</td><td>$\tfrac12$</td><td>$2r^{2}-r-1=0$</td><td>$1,\;-\tfrac12$</td></tr>
<tr><td>6</td><td>$\tfrac12$</td><td>$2r^{2}-r-3=0$</td><td>$\tfrac32,\;-1$</td></tr>
<tr><td>12</td><td>$\tfrac52$</td><td>$2r^{2}+3r-2=0$</td><td>$\tfrac12,\;-2$</td></tr>
</table>
</div>

**İki gözlem:**

1. $b_{0}$ aynıysa ($5$ ve $6$) ==$r$'nin katsayısı da aynı kalıyor==, yalnız sabit terim değişiyor.
2. Bağıntının $a_{n-2}$ mi $a_{n-1}$ mi bağladığını belirleyen şey ==$x$'in en düşük kuvveti:== 5 ve 6'da $x^{2}$ vardı (ikişer atlama, yalnız çift indisler), 12'de $2x$ var (birer atlama, bütün indisler).
[/KUTU]
[/CEVAP]

---

[SORU] **13.** &nbsp; $2x^{2}y''+\left(4x^{3}+3x\right)y'-6y=0$
[CEVAP]
**Adım 1 — Standart biçim.** İkiye bölelim: $b(x)=\dfrac{4x^{2}+3}{2}$, &nbsp;$b_{0}=\dfrac{3}{2}$, &nbsp;$c_{0}=-3$.

**Adım 2 — Başlangıç denklemi.**

$$r(r-1)+\frac{3}{2}r-3=r^{2}+\frac{r}{2}-3=0\;\Longrightarrow\;2r^{2}+r-6=0\;\Longrightarrow\;(2r-3)(r+2)=0$$

$$r_{1}=\frac{3}{2},\qquad r_{2}=-2$$

Kök farkı $\tfrac72$, tam sayı değil.

**Adım 3 — İndirgeme bağıntısı.** $4x^{3}y'$ terimi indisi ==iki== kaydırıyor:

$$\underbrace{\left[2m^{2}+m-6\right]}_{(2m-3)(m+2)}a_{n}+4(m-2)a_{n-2}=0$$

$$\boxed{\;a_{n}=-\frac{4(n+r-2)\,a_{n-2}}{\left(2(n+r)-3\right)(n+r+2)}\;}$$

$n=1$'de katsayılar $9$ ve $-5$ &nbsp;$\Rightarrow$&nbsp; $a_{1}=0$, tek indisler yok.

**Adım 4 — Büyük kök $r_{1}=\tfrac32$.** Bağıntı $a_{n}=-\dfrac{2(2n-1)a_{n-2}}{n(2n+7)}$:

$$a_{2}=-\frac{3a_{0}}{11},\qquad a_{4}=-\frac{14a_{2}}{60}=\frac{7a_{0}}{110}$$

$$\boxed{\;y_{1}=x^{3/2}\left(1-\frac{3x^{2}}{11}+\frac{7x^{4}}{110}-\cdots\right)\;}$$

**Adım 5 — Küçük kök $r_{2}=-2$: seri kesiliyor.** Bağıntı $a_{n}=-\dfrac{4(n-4)a_{n-2}}{n(2n-7)}$; ==payda $(n-4)$ çarpanı var:==

$$a_{2}=-\frac{4(-2)a_{0}}{2(-3)}=-\frac{4a_{0}}{3},\qquad a_{4}=-\frac{4\cdot\mathbf{0}\cdot a_{2}}{4\cdot 1}=0$$

$n=4$'te çarpan sıfırlanıyor ve zincir bitiyor. İkinci çözüm ==sonsuz seri değil, kapalı biçimde:==

$$\boxed{\;y_{2}=x^{-2}\left(1-\frac{4x^{2}}{3}\right)=\frac{1}{x^{2}}-\frac{4}{3}\;}$$

**Doğrulama — $y_{2}$'yi doğrudan denkleme koy.** ==Sonlu ifade olduğu için tam bir kontrol, yaklaşık değil:==

$$y=x^{-2}-\frac{4}{3},\qquad y'=-2x^{-3},\qquad y''=6x^{-4}$$

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$2x^{2}y''$</th><th>$4x^{3}y'$</th><th>$3xy'$</th><th>$-6y$</th><th>Toplam</th></tr>
<tr><td>$x^{-2}$</td><td>$12$</td><td>$0$</td><td>$-6$</td><td>$-6$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{0}$</td><td>$0$</td><td>$-8$</td><td>$0$</td><td>$8$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

==Denklem tam olarak sağlanıyor.==
[/CEVAP]

[SORU] **14.** &nbsp; $\left(x^{3}+2x^{2}\right)y''+\left(x^{2}+x\right)y'-10y=0$
[CEVAP]
**Adım 1 — Standart biçim.** $x^{3}+2x^{2}=x^{2}(x+2)$; $(x+2)$'ye bölelim:

$$x^{2}y''+x\cdot\frac{x+1}{x+2}\,y'-\frac{10}{x+2}\,y=0\;\Longrightarrow\;b_{0}=\frac{1}{2},\quad c_{0}=-5$$

**Adım 2 — Başlangıç denklemi.**

$$r(r-1)+\frac{r}{2}-5=0\;\Longrightarrow\;2r^{2}-r-10=0\;\Longrightarrow\;(2r-5)(r+2)=0$$

$$r_{1}=\frac{5}{2},\qquad r_{2}=-2$$

**Adım 3 — İndirgeme bağıntısı.** Denklemi açıp hizalayalım:

$$\underbrace{\left[2m^{2}-m-10\right]}_{(2m-5)(m+2)}a_{n}+\underbrace{\left[(m-1)(m-2)+(m-1)\right]}_{(m-1)^{2}}a_{n-1}=0$$

==İkinci köşeli parantez tam kare çıkıyor== — $(m-1)$ ortak çarpan olduğu için.

$$\boxed{\;a_{n}=-\frac{(n+r-1)^{2}\,a_{n-1}}{\left(2(n+r)-5\right)(n+r+2)}\;}$$

**Adım 4 — Büyük kök $r_{1}=\tfrac52$.** Bağıntı $a_{n}=-\dfrac{(2n+3)^{2}a_{n-1}}{4n(2n+9)}$:

$$a_{1}=-\frac{25a_{0}}{44},\qquad a_{2}=-\frac{49a_{1}}{104}=\frac{1225a_{0}}{4576}$$

$$\boxed{\;y_{1}=x^{5/2}\left(1-\frac{25x}{44}+\frac{1225x^{2}}{4576}-\cdots\right)\;}$$

**Adım 5 — Küçük kök $r_{2}=-2$: yine kesiliyor.** Bağıntı $a_{n}=-\dfrac{(n-3)^{2}a_{n-1}}{n(2n-9)}$:

$$a_{1}=\frac{4a_{0}}{7},\qquad a_{2}=\frac{a_{1}}{10}=\frac{2a_{0}}{35},\qquad a_{3}=-\frac{\mathbf{0}\cdot a_{2}}{3(-3)}=0$$

$$\boxed{\;y_{2}=x^{-2}\left(1+\frac{4x}{7}+\frac{2x^{2}}{35}\right)=\frac{1}{x^{2}}+\frac{4}{7x}+\frac{2}{35}\;}$$

**Doğrulama — $y_{2}$'yi doğrudan denkleme koy.**

$$y'=-2x^{-3}-\frac{4}{7}x^{-2},\qquad y''=6x^{-4}+\frac{8}{7}x^{-3}$$

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$x^{3}y''$</th><th>$2x^{2}y''$</th><th>$x^{2}y'$</th><th>$xy'$</th><th>$-10y$</th><th>Toplam</th></tr>
<tr><td>$x^{-2}$</td><td>$0$</td><td>$12$</td><td>$0$</td><td>$-2$</td><td>$-10$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{-1}$</td><td>$6$</td><td>$\tfrac{16}{7}$</td><td>$-2$</td><td>$-\tfrac47$</td><td>$-\tfrac{40}{7}$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{0}$</td><td>$\tfrac87$</td><td>$0$</td><td>$-\tfrac47$</td><td>$0$</td><td>$-\tfrac47$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

[KUTU]
**13 ve 14'te aynı olay: küçük kökte seri kesiliyor.** Sebebi bağıntının payındaki $k$'ye bağlı çarpan:

<div class="tablo-sar">
<table>
<tr><th>Soru</th><th>Paydaki çarpan</th><th>Nerede sıfırlanır</th><th>Sonuç</th></tr>
<tr><td>13</td><td>$(n-4)$</td><td>$n=4$</td><td>iki terimli</td></tr>
<tr><td>14</td><td>$(n-3)^{2}$</td><td>$n=3$</td><td>üç terimli</td></tr>
</table>
</div>

==Legendre ve Hermite'te gördüğünüz polinomlaşmanın aynısı==, tek fark $x^{r}$ çarpanının negatif üslü olması: sonuç polinom değil, ==sonlu bir Laurent ifadesi.==

**Nasıl önceden görülür:** küçük kökü indirgeme bağıntısına koyduğunuzda payda $n$'e bağlı bir çarpan kalıyorsa, o çarpanın kökü tam sayıysa seri orada biter. ==Hesaba başlamadan kaç terim yazacağınızı bilirsiniz.==
[/KUTU]
[/CEVAP]

[SORU] **15.** &nbsp; $xy''+2y'+xy=0$
[CEVAP]
**Adım 1 — Standart biçim.** $x$ ile çarpalım: $x^{2}y''+2xy'+x^{2}y=0$ &nbsp;$\Rightarrow$&nbsp; $b_{0}=2$, &nbsp;$c_{0}=0$.

**Adım 2 — Başlangıç denklemi.**

$$r(r-1)+2r=r(r+1)=0\;\Longrightarrow\;r_{1}=0,\quad r_{2}=-1$$

Kök farkı $1$ — ==pozitif tam sayı, yani belirsiz durum.== Küçük kökle deneyeceğiz.

**Adım 3 — İndirgeme bağıntısı.**

$$\boxed{\;a_{n}=-\frac{a_{n-2}}{(n+r)(n+r+1)}\;}$$

**Adım 4 — Küçük kökte $a_{1}$ serbest kalıyor.** $r=-1$ ve $n=1$ için $a_{1}$'in katsayısı:

$$(1-1)(1-1+1)=0\cdot 1=0$$

Sağ tarafta $a_{-1}=0$ olduğundan denklem $0=0$'a iner: ==$a_{1}$ kısıtlanmıyor, serbest.== Bu, belirsiz durumun ==şanslı tarafa çözüldüğünün işaretidir== — küçük kök tek başına her iki çözümü birden veriyor, logaritmaya gerek yok.

**Adım 5 — Katsayılar** ($r=-1$, &nbsp;$a_{n}=-\dfrac{a_{n-2}}{n(n-1)}$):

$$a_{2}=-\frac{a_{0}}{2},\quad a_{3}=-\frac{a_{1}}{6},\quad a_{4}=\frac{a_{0}}{24},\quad a_{5}=\frac{a_{1}}{120}$$

$$y=\frac{1}{x}\left[a_{0}\underbrace{\left(1-\frac{x^{2}}{2}+\frac{x^{4}}{24}-\cdots\right)}_{\cos x}+a_{1}\underbrace{\left(x-\frac{x^{3}}{6}+\frac{x^{5}}{120}-\cdots\right)}_{\sin x}\right]$$

$$\boxed{\;y_{1}=\frac{\cos x}{x},\qquad y_{2}=\frac{\sin x}{x}\;}$$

**Doğrulama — denklemi tek satırda çöz.** ==Seriden tamamen bağımsız:==

$$(xy)''=\left(y+xy'\right)'=2y'+xy''$$

Yani denklemin sol tarafı tam olarak $(xy)''+xy$'dir. $u=xy$ dersek:

$$u''+u=0\;\Longrightarrow\;u=A\cos x+B\sin x\;\Longrightarrow\;y=\frac{A\cos x+B\sin x}{x}\;\checkmark$$

Seri çözümüyle birebir aynı.

[KUTU]
**Bu denklem küresel Bessel denklemidir** ($p=0$ mertebesinden). Çözümü $\dfrac{\sin x}{x}$, fizikte ==sinc fonksiyonu== adıyla geçer ve küresel simetrili dalga problemlerinde çıkar.

**$\dfrac{\sin x}{x}$'in $x=0$'da sonlu olduğuna dikkat edin** (limit $1$), ==oysa $\dfrac{\cos x}{x}$ ıraksıyor.== $x^{-1}$ çarpanına rağmen ilk çözümün sonlu kalmasının sebebi, $\sin x$ serisinin $x$ ile başlaması.

**Genel ders:** $x^{r}$ çarpanı negatif üslü diye çözüm otomatik olarak ıraksamaz; ==seri kısmının nereden başladığına bakın.==
[/KUTU]
[/CEVAP]

[SORU] **16.** &nbsp; $x^{2}y''+xy'+\left(x^{2}-\dfrac{1}{4}\right)y=0$
[CEVAP]
**Bu da Bessel denklemi, bu kez $p=\dfrac12$ ile** — yarım tam sayı mertebe.

**Adım 1 — Başlangıç denklemi.** $r^{2}-\dfrac14=0\;\Longrightarrow\;r=\pm\dfrac12$.

Kök farkı $2p=1$, ==pozitif tam sayı== &nbsp;$\Rightarrow$&nbsp; belirsiz durum.

**Adım 2 — İndirgeme bağıntısı.**

$$\boxed{\;a_{n}=-\frac{a_{n-2}}{(n+r)^{2}-\tfrac14}\;}$$

**Adım 3 — Küçük kökte $a_{1}$ serbest.** $r=-\tfrac12$, $n=1$ için katsayı:

$$\left(1-\tfrac12\right)^{2}-\tfrac14=\tfrac14-\tfrac14=0$$

==$a_{1}$ kısıtlanmıyor== — 15. soruyla aynı şanslı durum.

**Adım 4 — Katsayılar.** $\left(n-\tfrac12\right)^{2}-\tfrac14=n^{2}-n=n(n-1)$:

$$a_{n}=-\frac{a_{n-2}}{n(n-1)}\;\Longrightarrow\;a_{2}=-\frac{a_{0}}{2},\;a_{3}=-\frac{a_{1}}{6},\;a_{4}=\frac{a_{0}}{24},\;a_{5}=\frac{a_{1}}{120}$$

==15. sorunun katsayılarıyla birebir aynı;== fark yalnız öndeki çarpanda ($x^{-1/2}$ yerine $x^{-1}$).

$$\boxed{\;y_{1}=\frac{\cos x}{\sqrt{x}},\qquad y_{2}=\frac{\sin x}{\sqrt{x}}\;}$$

**Doğrulama — $y=x^{-1/2}u$ dönüşümü.** ==Seriden bağımsız:==

$$x^{2}y''+xy'+\left(x^{2}-\tfrac14\right)y=x^{3/2}\left(u''+u\right)$$

(Ara terimler tam olarak götürüyor: $x^{-1/2}u$ katsayısı $\tfrac34-\tfrac12-\tfrac14=0$, &nbsp;$x^{1/2}u'$ katsayısı $-1+1=0$.)

$$u''+u=0\;\Longrightarrow\;u=A\cos x+B\sin x\;\Longrightarrow\;y=\frac{A\cos x+B\sin x}{\sqrt{x}}\;\checkmark$$

[KUTU]
**Bölüm 6.3'teki iddianın kanıtı burada.** Orada "yarım tam sayı $p$ için Bessel fonksiyonları temel fonksiyonlara indirgenir" demiş ve

$$J_{1/2}(x)=\sqrt{\frac{2}{\pi x}}\,\sin x$$

yazmıştık. ==Bu soru tam olarak onu üretiyor:== bulduğumuz $\dfrac{\sin x}{\sqrt{x}}$, sabit çarpan farkıyla $J_{1/2}$'dir.

**Kök farkı $1$ olmasına rağmen logaritma çıkmadı.** Sebep: $p$ yarım tam sayı olduğunda kök farkı $2p$ ==tek tam sayı== olur ve $n=2p$ adımı tek indise düşer; oradaki katsayı zaten sıfır olduğu için çakışma doğmaz.

$p$ **tam** sayı olsaydı kök farkı $2p$ çift olur, çakışma çift indise düşer ve logaritma kaçınılmaz hâle gelirdi. ==$J_{-p}=(-1)^{p}J_{p}$ eşitliğinin ve $Y_{p}$ ihtiyacının kökeni budur.==
[/KUTU]
[/CEVAP]

[SORU] **17.** &nbsp; $x^{2}y''+\left(x^{4}+x\right)y'-y=0$
[CEVAP]
**Adım 1 — Standart biçim.** $x^{2}y''+x\left(x^{3}+1\right)y'-y=0$ &nbsp;$\Rightarrow$&nbsp; $b_{0}=1$, &nbsp;$c_{0}=-1$.

**Adım 2 — Başlangıç denklemi.**

$$r(r-1)+r-1=r^{2}-1=0\;\Longrightarrow\;r_{1}=1,\quad r_{2}=-1$$

Kök farkı $2$, ==pozitif tam sayı== &nbsp;$\Rightarrow$&nbsp; belirsiz durum, küçük kökle deneyelim.

**Adım 3 — İndirgeme bağıntısı.** $x^{4}y'$ terimi indisi ==üç== kaydırıyor:

$$\left(m^{2}-1\right)a_{n}+(m-3)a_{n-3}=0$$

$$\boxed{\;a_{n}=-\frac{(n+r-3)\,a_{n-3}}{(n+r)^{2}-1}\;}$$

**Adım 4 — Küçük kökte $a_{2}$ serbest.** $r=-1$ için:

$n=1$: &nbsp; katsayı $0^{2}-1=-1\neq 0$ &nbsp;$\Rightarrow$&nbsp; $a_{1}=0$

$n=2$: &nbsp; katsayı $1^{2}-1=0$, sağ tarafta $a_{-1}=0$ &nbsp;$\Rightarrow$&nbsp; ==$a_{2}$ serbest.==

==Çakışma yine şanslı tarafa çözüldü:== küçük kök her iki çözümü birden veriyor.

**Adım 5 — Katsayılar** ($r=-1$, &nbsp;$a_{n}=-\dfrac{(n-4)a_{n-3}}{n(n-2)}$). ==İndisler üçer üçer atlıyor==, üç zincir var:

<div class="tablo-sar">
<table>
<tr><th>Zincir</th><th>Katsayılar</th></tr>
<tr><td>$a_{0}$</td><td>$a_{3}=\tfrac{a_{0}}{3}$, &nbsp;$a_{6}=-\tfrac{a_{0}}{36}$</td></tr>
<tr><td>$a_{2}$</td><td>$a_{5}=-\tfrac{a_{2}}{15}$, &nbsp;$a_{8}=\tfrac{a_{2}}{180}$</td></tr>
<tr><td>$a_{1}$</td><td>tamamen sıfır</td></tr>
</table>
</div>

$$\boxed{\;y_{1}=x\left(1-\frac{x^{3}}{15}+\frac{x^{6}}{180}-\cdots\right)\;}$$

$$\boxed{\;y_{2}=\frac{1}{x}\left(1+\frac{x^{3}}{3}-\frac{x^{6}}{36}+\cdots\right)\;}$$

$a_{2}$ zinciri $x^{-1}\cdot x^{2}=x$ ile başlıyor — ==tam olarak büyük kök $r_{1}=1$'in çözümü.== İki kök tek hesapta çıktı.

**Doğrulama — ikisini de doğrudan denkleme koy.**

$y_{1}=x-\dfrac{x^{4}}{15}$ için:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$x^{2}y''$</th><th>$x^{4}y'$</th><th>$xy'$</th><th>$-y$</th><th>Toplam</th></tr>
<tr><td>$x^{1}$</td><td>$0$</td><td>$0$</td><td>$1$</td><td>$-1$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{4}$</td><td>$-\tfrac{12}{15}$</td><td>$1$</td><td>$-\tfrac{4}{15}$</td><td>$\tfrac{1}{15}$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

$y_{2}=x^{-1}+\dfrac{x^{2}}{3}$ için:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$x^{2}y''$</th><th>$x^{4}y'$</th><th>$xy'$</th><th>$-y$</th><th>Toplam</th></tr>
<tr><td>$x^{-1}$</td><td>$2$</td><td>$0$</td><td>$-1$</td><td>$-1$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{2}$</td><td>$\tfrac23$</td><td>$-1$</td><td>$\tfrac23$</td><td>$-\tfrac13$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

[KUTU]
**15, 16 ve 17: üçünde de kök farkı tam sayı ama logaritma çıkmadı.** Bu, "tam sayı fark $\Rightarrow$ logaritma" diye ezberlememeniz gerektiğinin kanıtı.

**Ne olduğuna bakın:** küçük kökle ilerlerken $n=r_{1}-r_{2}$ adımına gelirsiniz. Orada $a_{n}$'in katsayısı sıfırlanır ve iki şey olabilir:

- **Sağ taraf da sıfırsa** &nbsp;$\Rightarrow$&nbsp; $0=0$, ==$a_{n}$ serbest kalır ve küçük kök her iki çözümü birden verir.== (15, 16, 17'de böyle oldu.)
- **Sağ taraf sıfır değilse** &nbsp;$\Rightarrow$&nbsp; çelişki, logaritmalı forma geçmek zorunludur.

**Sınav refleksi:** kök farkı tam sayı çıkınca ==hemen logaritmaya atlamayın.== Küçük kökle ilerleyip o kritik adıma gelin; çoğu ders kitabı sorusunda sağ taraf sıfır çıkar ve işiniz kısalır.
[/KUTU]
[/CEVAP]

---

[SORU] **18.** &nbsp; $xy''-\left(x^{2}+2\right)y'+xy=0$
[CEVAP]
**Adım 1 — Standart biçim.** $x$ ile çarpalım: &nbsp;$b_{0}=-2$, &nbsp;$c_{0}=0$.

**Adım 2 — Başlangıç denklemi.**

$$r(r-1)-2r=r(r-3)=0\;\Longrightarrow\;r_{1}=3,\quad r_{2}=0$$

Kök farkı $3$, ==pozitif tam sayı== &nbsp;$\Rightarrow$&nbsp; belirsiz durum.

**Adım 3 — İndirgeme bağıntısı ve ortak çarpan.**

$$\underbrace{\left[m(m-1)-2m\right]}_{m(m-3)}a_{n}+\underbrace{\left[-(m-2)+1\right]}_{-(m-3)}a_{n-2}=0$$

==Her iki terimde de $(m-3)$ çarpanı var:==

$$\boxed{\;(m-3)\Big[m\,a_{n}-a_{n-2}\Big]=0\;}$$

**Adım 4 — Küçük kök $r_{2}=0$'da $a_{3}$ serbest.** $m=n$ olduğundan $n=3$'te $(m-3)=0$ ve denklem $0=0$'a iner &nbsp;$\Rightarrow$&nbsp; ==$a_{3}$ kısıtlanmıyor.== Küçük kök her iki çözümü birden verecek.

Diğer $n$'ler için $a_{n}=\dfrac{a_{n-2}}{n}$. &nbsp;$n=1$'de $a_{1}=0$ (katsayı $-2\neq 0$, sağ taraf sıfır).

**Adım 5 — İki zincir.**

$$a_{2}=\frac{a_{0}}{2},\quad a_{4}=\frac{a_{0}}{8},\quad a_{6}=\frac{a_{0}}{48}\qquad\text{(çift zincir)}$$

$$a_{5}=\frac{a_{3}}{5},\quad a_{7}=\frac{a_{3}}{35},\quad a_{9}=\frac{a_{3}}{315}\qquad\text{(tek zincir, }a_{3}\text{'ten)}$$

**Adım 6 — Çift zinciri tanıyın.** Paydalar $2,\;2\cdot 4,\;2\cdot 4\cdot 6$ yani $2^{k}k!$:

$$y_{1}=\sum_{k=0}^{\infty}\frac{x^{2k}}{2^{k}k!}=\sum_{k=0}^{\infty}\frac{1}{k!}\left(\frac{x^{2}}{2}\right)^{k}$$

$$\boxed{\;y_{1}=e^{x^{2}/2}\;}$$

$$\boxed{\;y_{2}=x^{3}\left(1+\frac{x^{2}}{5}+\frac{x^{4}}{35}+\frac{x^{6}}{315}+\cdots\right)\;}$$

($y_{2}$'nin paydaları $5,\;5\cdot 7,\;5\cdot 7\cdot 9$ — tek sayıların çarpımı.)

**Doğrulama — $y_{1}=e^{x^{2}/2}$'yi doğrudan denkleme koy.** ==Seriden tamamen bağımsız:==

$$y'=x\,e^{x^{2}/2},\qquad y''=\left(1+x^{2}\right)e^{x^{2}/2}$$

$$xy''-\left(x^{2}+2\right)y'+xy=e^{x^{2}/2}\Big[\underbrace{x+x^{3}}_{xy''}\underbrace{-x^{3}-2x}_{-(x^{2}+2)y'}+\underbrace{x}_{xy}\Big]=0\;\checkmark$$
[/CEVAP]

[SORU] **19.** &nbsp; $x^{2}y''+x^{2}y'-2y=0$
[CEVAP]
**Adım 1 — Başlangıç denklemi.** $b(x)=x$ olduğundan $b_{0}=0$; &nbsp;$c_{0}=-2$:

$$r(r-1)-2=r^{2}-r-2=(r-2)(r+1)=0\;\Longrightarrow\;r_{1}=2,\quad r_{2}=-1$$

Kök farkı $3$, pozitif tam sayı.

**Adım 2 — İndirgeme bağıntısı.**

$$\underbrace{\left[m(m-1)-2\right]}_{(m-2)(m+1)}a_{n}+(m-1)a_{n-1}=0$$

$$\boxed{\;a_{n}=-\frac{(n+r-1)\,a_{n-1}}{(n+r-2)(n+r+1)}\;}$$

**Adım 3 — Küçük kök $r_{2}=-1$: önce kesiliyor, sonra serbest kalıyor.** $m=n-1$ için katsayılar $(n-3)$ ve $n$:

$$a_{1}=-\frac{(-1)a_{0}}{(-2)(1)}=-\frac{a_{0}}{2},\qquad a_{2}=-\frac{\mathbf{0}\cdot a_{1}}{(-1)(2)}=0$$

$n=3$'te $a_{3}$'ün katsayısı $(m-2)(m+1)=0\cdot 3=0$ ve sağ tarafta $(m-1)a_{2}=1\cdot 0=0$ &nbsp;$\Rightarrow$&nbsp; ==$0=0$, $a_{3}$ serbest.==

Yani $a_{0}$ zinciri $a_{2}=0$ ile bitiyor:

$$\boxed{\;y_{2}=x^{-1}\left(1-\frac{x}{2}\right)=\frac{1}{x}-\frac{1}{2}\;}$$

**Adım 4 — Büyük kök $r_{1}=2$.** Bağıntı $a_{n}=-\dfrac{(n+1)a_{n-1}}{n(n+3)}$:

$$a_{1}=-\frac{a_{0}}{2},\quad a_{2}=\frac{3a_{0}}{20},\quad a_{3}=-\frac{a_{0}}{30}$$

$$\boxed{\;y_{1}=x^{2}\left(1-\frac{x}{2}+\frac{3x^{2}}{20}-\frac{x^{3}}{30}+\cdots\right)\;}$$

**Doğrulama 1 — $y_{2}$ sonlu, tam kontrol.**

$$y=x^{-1}-\tfrac12,\quad y'=-x^{-2},\quad y''=2x^{-3}$$

$$x^{2}y''+x^{2}y'-2y=2x^{-1}-1-2x^{-1}+1=0\;\checkmark$$

**Doğrulama 2 — $y_{1}$'i denkleme koy.**

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$x^{2}y''$</th><th>$x^{2}y'$</th><th>$-2y$</th><th>Toplam</th></tr>
<tr><td>$x^{2}$</td><td>$2$</td><td>$0$</td><td>$-2$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{3}$</td><td>$-3$</td><td>$2$</td><td>$1$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{4}$</td><td>$\tfrac95$</td><td>$-\tfrac32$</td><td>$-\tfrac{3}{10}$</td><td>$0$ &#10003;</td></tr>
</table>
</div>
[/CEVAP]

[SORU] **20.** &nbsp; $x^{2}y''-xy'+\dfrac{3}{4}y=0$
[CEVAP]
**Bu bir Cauchy-Euler denklemi** — sağ tarafta $x$'e bağlı hiçbir ek terim yok.

**Adım 1 — Başlangıç denklemi.**

$$r(r-1)-r+\frac{3}{4}=r^{2}-2r+\frac{3}{4}=0\;\Longrightarrow\;\left(r-\tfrac12\right)\left(r-\tfrac32\right)=0$$

$$r_{1}=\frac{3}{2},\qquad r_{2}=\frac{1}{2}$$

**Adım 2 — İndirgeme bağıntısı yok.** Denklemde $a_{n-1}$ ya da $a_{n-2}$ üreten hiçbir terim bulunmadığından bağıntı şuna iner:

$$\left(m-\tfrac12\right)\left(m-\tfrac32\right)a_{n}=0$$

==Yani her $a_{n}$ ya sıfırdır ya da katsayısı sıfırlanmıştır.==

**Adım 3 — Küçük kök $r_{2}=\tfrac12$.** $m=n+\tfrac12$ için katsayı $n(n-1)$:

- $n=0$: &nbsp;katsayı $0$ &nbsp;$\Rightarrow$&nbsp; $a_{0}$ serbest
- $n=1$: &nbsp;katsayı $0$ &nbsp;$\Rightarrow$&nbsp; ==$a_{1}$ de serbest==
- $n\ge 2$: &nbsp;katsayı $\neq 0$ &nbsp;$\Rightarrow$&nbsp; $a_{n}=0$

$$\boxed{\;y=x^{1/2}\left(a_{0}+a_{1}x\right)=a_{0}\sqrt{x}+a_{1}x^{3/2}\;}$$

**Doğrulama — Cauchy-Euler yöntemiyle karşılaştır.** $y=x^{m}$ denersek:

$$m(m-1)-m+\frac{3}{4}=0\;\Longrightarrow\;m=\frac{1}{2},\ \frac{3}{2}\;\Longrightarrow\;y=c_{1}x^{1/2}+c_{2}x^{3/2}$$

==Birebir aynı.== İki yöntem aynı sonuca vardı.

[KUTU]
**Cauchy-Euler, Frobenius'un en basit hâlidir.** Bu soru bunu çıplak olarak gösteriyor: seri hiç oluşmuyor, çünkü indirgeme bağıntısını üretecek terim yok. ==Geriye yalnız başlangıç denklemi kalıyor ve o da Cauchy-Euler'in karakteristik denklemidir.==

**Genel kural:** denklemi $x^{2}y''+x\,b(x)y'+c(x)y=0$ biçimine soktuğunuzda $b$ ve $c$ ==sabitse== denklem Cauchy-Euler'dir; Frobenius'a girmenize gerek yok, bir satırda biter.

Kök farkı burada $1$ (tam sayı) olmasına rağmen logaritma çıkmadı — çünkü kökler farklı. Logaritma yalnız ==eşit kökler== durumunda kaçınılmazdır.
[/KUTU]
[/CEVAP]

[SORU] **21.** &nbsp; $x^{2}y''+\left(2x^{2}+3x\right)y'+\left(x-\dfrac{5}{4}\right)y=0$
[CEVAP]
**Adım 1 — Başlangıç denklemi.** $b_{0}=3$, &nbsp;$c_{0}=-\dfrac54$:

$$r(r-1)+3r-\frac54=r^{2}+2r-\frac54=0\;\Longrightarrow\;4r^{2}+8r-5=0$$

$$(2r-1)(2r+5)=0\;\Longrightarrow\;r_{1}=\frac{1}{2},\quad r_{2}=-\frac{5}{2}$$

Kök farkı $3$, pozitif tam sayı.

**Adım 2 — İndirgeme bağıntısı ve ortak çarpan.**

$$\underbrace{\left[m^{2}+2m-\tfrac54\right]}_{\left(m-\frac12\right)\left(m+\frac52\right)}a_{n}+\underbrace{\left[2(m-1)+1\right]}_{2\left(m-\frac12\right)}a_{n-1}=0$$

==Yine ortak çarpan:==

$$\boxed{\;\left(m-\tfrac12\right)\Big[\left(m+\tfrac52\right)a_{n}+2a_{n-1}\Big]=0\;}$$

**Adım 3 — Küçük kök $r_{2}=-\tfrac52$: zincir kesiliyor.** $m=n-\tfrac52$ için çarpanlar $(n-3)$ ve $n$:

$$a_{1}=-\frac{2a_{0}}{1}=-2a_{0},\qquad a_{2}=-\frac{2a_{1}}{2}=2a_{0}$$

$n=3$'te $(m-\tfrac12)=0$ &nbsp;$\Rightarrow$&nbsp; $0=0$, ==$a_{3}$ serbest ve $a_{0}$ zinciri burada bitiyor:==

$$\boxed{\;y_{2}=x^{-5/2}\left(1-2x+2x^{2}\right)\;}$$

**Adım 4 — Büyük kök $r_{1}=\tfrac12$.** $m=n+\tfrac12$ için $a_{n}=-\dfrac{2a_{n-1}}{n+3}$:

$$a_{1}=-\frac{a_{0}}{2},\quad a_{2}=\frac{a_{0}}{5},\quad a_{3}=-\frac{a_{0}}{15}$$

$$\boxed{\;y_{1}=x^{1/2}\left(1-\frac{x}{2}+\frac{x^{2}}{5}-\frac{x^{3}}{15}+\cdots\right)\;}$$

**Doğrulama 1 — $y_{2}$ sonlu, tam kontrol.** $y=x^{-5/2}-2x^{-3/2}+2x^{-1/2}$ için:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$x^{2}y''$</th><th>$2x^{2}y'$</th><th>$3xy'$</th><th>$xy$</th><th>$-\tfrac54 y$</th><th>Toplam</th></tr>
<tr><td>$x^{-5/2}$</td><td>$\tfrac{35}{4}$</td><td>$0$</td><td>$-\tfrac{15}{2}$</td><td>$0$</td><td>$-\tfrac54$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{-3/2}$</td><td>$-\tfrac{15}{2}$</td><td>$-5$</td><td>$9$</td><td>$1$</td><td>$\tfrac52$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{-1/2}$</td><td>$\tfrac32$</td><td>$6$</td><td>$-3$</td><td>$-2$</td><td>$-\tfrac52$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{1/2}$</td><td>$0$</td><td>$-2$</td><td>$0$</td><td>$2$</td><td>$0$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

**Doğrulama 2 — kapalı biçim.** $a_{n}=-\dfrac{2a_{n-1}}{n+3}$ bağıntısını açarsak $a_{n}=\dfrac{6(-2)^{n}}{(n+3)!}$; bu da

$$y_{1}=6x^{1/2}\sum_{n\ge 0}\frac{(-2x)^{n}}{(n+3)!}=-\frac{3}{4}\,x^{-5/2}\left(e^{-2x}-1+2x-2x^{2}\right)$$

Yani ==$x^{-5/2}e^{-2x}$ de bir çözümdür.== Doğrudan yerine koyarak sınayalım:

$$x^{2}y''+\left(2x^{2}+3x\right)y'+\left(x-\tfrac54\right)y=e^{-2x}\Big[\underbrace{\left(\tfrac{35}{4}-\tfrac{15}{2}-\tfrac54\right)}_{0}x^{-5/2}+\underbrace{\left(10-11+1\right)}_{0}x^{-3/2}+\underbrace{\left(4-4\right)}_{0}x^{-1/2}\Big]=0\;\checkmark$$

$$\boxed{\;\text{Genel çözüm: }\;y=x^{-5/2}\left[A\,e^{-2x}+B\left(1-2x+2x^{2}\right)\right]\;}$$
[/CEVAP]

[SORU] **22.** &nbsp; $x^{2}y''+\left(x^{2}+5x\right)y'+(2x+3)y=0$
[CEVAP]
**Adım 1 — Başlangıç denklemi.** $b_{0}=5$, &nbsp;$c_{0}=3$:

$$r(r-1)+5r+3=r^{2}+4r+3=(r+1)(r+3)=0\;\Longrightarrow\;r_{1}=-1,\quad r_{2}=-3$$

Kök farkı $2$, pozitif tam sayı.

**Adım 2 — İndirgeme bağıntısı ve ortak çarpan.**

$$\underbrace{\left[m^{2}+4m+3\right]}_{(m+1)(m+3)}a_{n}+\underbrace{\left[(m-1)+2\right]}_{m+1}a_{n-1}=0$$

$$\boxed{\;(m+1)\Big[(m+3)a_{n}+a_{n-1}\Big]=0\;}$$

**Adım 3 — Küçük kök $r_{2}=-3$: zincir kesiliyor.** $m=n-3$ için çarpanlar $(n-2)$ ve $n$:

$$a_{1}=-\frac{a_{0}}{1}=-a_{0}$$

$n=2$'de $(m+1)=0$ &nbsp;$\Rightarrow$&nbsp; $0=0$, ==$a_{2}$ serbest ve $a_{0}$ zinciri bitiyor:==

$$\boxed{\;y_{2}=x^{-3}(1-x)=\frac{1-x}{x^{3}}\;}$$

**Adım 4 — Büyük kök $r_{1}=-1$.** $m=n-1$ için $a_{n}=-\dfrac{a_{n-1}}{n+2}$:

$$a_{1}=-\frac{a_{0}}{3},\quad a_{2}=\frac{a_{0}}{12},\quad a_{3}=-\frac{a_{0}}{60}$$

$$\boxed{\;y_{1}=x^{-1}\left(1-\frac{x}{3}+\frac{x^{2}}{12}-\frac{x^{3}}{60}+\cdots\right)\;}$$

**Doğrulama 1 — $y_{2}$ sonlu, tam kontrol.** $y=x^{-3}-x^{-2}$ için:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$x^{2}y''$</th><th>$x^{2}y'$</th><th>$5xy'$</th><th>$2xy$</th><th>$3y$</th><th>Toplam</th></tr>
<tr><td>$x^{-3}$</td><td>$12$</td><td>$0$</td><td>$-15$</td><td>$0$</td><td>$3$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{-2}$</td><td>$-6$</td><td>$-3$</td><td>$10$</td><td>$2$</td><td>$-3$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{-1}$</td><td>$0$</td><td>$2$</td><td>$0$</td><td>$-2$</td><td>$0$</td><td>$0$ &#10003;</td></tr>
</table>
</div>

**Doğrulama 2 — kapalı biçim.** $a_{n}=-\dfrac{a_{n-1}}{n+2}$ açılırsa $a_{n}=\dfrac{2(-1)^{n}}{(n+2)!}$, yani

$$y_{1}=\frac{2}{x}\sum_{n\ge 0}\frac{(-x)^{n}}{(n+2)!}=\frac{2\left(e^{-x}-1+x\right)}{x^{3}}$$

Buradan ==$x^{-3}e^{-x}$ de bir çözümdür.== Kontrol:

$$y=x^{-3}e^{-x}\;\Longrightarrow\;y'=e^{-x}\left(-3x^{-4}-x^{-3}\right),\quad y''=e^{-x}\left(12x^{-5}+6x^{-4}+x^{-3}\right)$$

$x^{-3}$ katsayısı: $12-3-15+2+3\cdot 1$ &nbsp;… terimleri tek tek toplayınca hepsi sıfır &#10003;

$$\boxed{\;\text{Genel çözüm: }\;y=x^{-3}\left[A\,e^{-x}+B(1-x)\right]\;}$$

[KUTU]
**21 ve 22'de aynı yapı — ve bir sürpriz.** İkisinde de:

1. İndirgeme bağıntısında ==ortak çarpan== çıktı ve belirsiz durum şanslı tarafa çözüldü.
2. Küçük kökte zincir kesildi, ikinci çözüm ==sonlu== oldu.
3. Kapalı biçim bir ==üstel fonksiyon== içeriyor.

**Sürpriz şurada:** kesilen sonlu çözümler, üstelin ilk birkaç teriminin ta kendisi:

<div class="tablo-sar">
<table>
<tr><th>Soru</th><th>Üstel</th><th>Sonlu çözüm</th><th>İlişki</th></tr>
<tr><td>21</td><td>$e^{-2x}=1-2x+2x^{2}-\cdots$</td><td>$1-2x+2x^{2}$</td><td>ilk üç terim</td></tr>
<tr><td>22</td><td>$e^{-x}=1-x+\tfrac{x^{2}}{2}-\cdots$</td><td>$1-x$</td><td>ilk iki terim</td></tr>
</table>
</div>

==Bu tesadüf değil:== genel çözüm $x^{r_{2}}\left[Ae^{kx}+B\cdot(\text{kesik seri})\right]$ biçimindeyken, iki çözümün farkı serinin geri kalanını verir ve o da $x^{r_{1}}$ ile başlar. Kesme noktası tam olarak ==kök farkı kadar terimden sonra== gelir.

**Sınavda ne işe yarar:** böyle bir denklemde ikinci çözüm sonlu çıkıyorsa, ==birinci çözümün kapalı biçimini tahmin edip doğrudan sınayabilirsiniz.== Bağıntıyı sonsuza kadar yürütmekten çok daha hızlıdır.
[/KUTU]
[/CEVAP]

---

### Frobenius yöntemiyle $x=0$ yakınındaki çözümleri bulunuz (23-32) — çözülmeyi bekleyen

23. &nbsp; $x^{2}y''+\left(x^{2}+4x\right)y'+(2x+2)y=0$

24. &nbsp; $x^{2}y''+2x^{3}y'-\left(x^{2}+\frac{15}{4}\right)y=0$ &nbsp;&nbsp;&nbsp; 25. &nbsp; $x^{2}y''+xy'+(x-1)y=0$

26. &nbsp; $x^{2}y''+\left(x^{3}-x\right)y'-3y=0$ &nbsp;&nbsp;&nbsp; 27. &nbsp; $x^{2}y''-xy'+8\left(x^{2}-1\right)y=0$

28. &nbsp; $x^{2}y''+x^{2}y'-\frac{3}{4}y=0$ &nbsp;&nbsp;&nbsp; 29. &nbsp; $xy''+y'+2y=0$

31. &nbsp; $x^{2}y''-xy'+\left(x^{2}+1\right)y=0$ &nbsp;&nbsp;&nbsp; 32. &nbsp; $x^{2}y''-xy'+\left(x^{2}-3\right)y=0$

[KUTU]
**Kaynak metinde okunamayan iki soru.** Tarama çıktısında 2. ve 30. sorular bozuk geldi: 2. soru `(x² − 2xy)′` biçiminde çıktı — yukarıya matematiksel olarak anlamlı olan $\left(x^{2}-2x\right)y'$ hâliyle yazıldı, ama kitaptan teyit edilmeli. 30. soru `2xy″ + 6y + y = 0` olarak okundu; ortadaki terimin $6y'$ olması gerektiği açık, ancak emin olunamadığı için listeye alınmadı.
[/KUTU]

---

[CLAUDE] Frobenius sorusunda nerede olduğunuzu kaybetmemek için
Bu setteki sorular uzundur ve ==öğrenciler genelde doğru başlayıp ortada kaybolur.== Şu üç kontrol noktasını işaretleyerek ilerleyin:

**Kontrol 1 — başlangıç denklemi.** Seriye girmeden $r(r-1)+b_{0}r+c_{0}=0$ yazın, kökleri bulun, ==kök farkını hemen not edin.== Hangi durumda olduğunuzu baştan bilirseniz sonunda şaşırmazsınız.

**Kontrol 2 — büyük kökle başlayın.** $r_{1}$ hiçbir zaman sorun çıkarmaz. İlk çözümü garantiye alın, sonra ikinciye geçin.

**Kontrol 3 — küçük kökte paydaya bakın.** İndirgeme bağıntısını $r_{2}$ ile yazınca payda bir yerde sıfırlanıyorsa logaritmalı forma geçin; sıfırlanmıyorsa düz seri yeterlidir.

**Sınav ekonomisi.** Frobenius soruları puanın büyük kısmını ==ilk yarıda== verir: doğru sınıflandırma, doğru başlangıç denklemi, doğru indirgeme bağıntısı. Zaman daralıyorsa ilk çözümü eksiksiz yazıp ikinciye "logaritmalı formda olacaktır, $y_{2}=Cy_{1}\ln x+x^{r_{2}}\sum b_{n}x^{n}$" diye başlamak, hiç yazmamaktan çok daha iyidir.
[/CLAUDE]

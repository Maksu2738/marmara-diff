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

### Frobenius yöntemiyle $x=0$ yakınındaki çözümleri bulunuz (7-32) — çözülmeyi bekleyen

7. &nbsp; $x^{2}y''-xy'+\left(x^{2}+\frac{8}{9}\right)y=0$ &nbsp;&nbsp;&nbsp; 8. &nbsp; $x^{2}y''-xy'+\left(2x^{2}+\frac{5}{9}\right)y=0$

9. &nbsp; $x^{2}y''+xy'+\left(x^{2}-\frac{1}{9}\right)y=0$ &nbsp;&nbsp;&nbsp; 11. &nbsp; $3xy''-(x-2)y'-2y=0$

12. &nbsp; $2x^{2}y''+5xy'+(2x-2)y=0$ &nbsp;&nbsp;&nbsp; 13. &nbsp; $2x^{2}y''+\left(4x^{3}+3x\right)y'-6y=0$

14. &nbsp; $\left(x^{3}+2x^{2}\right)y''+\left(x^{2}+x\right)y'-10y=0$ &nbsp;&nbsp;&nbsp; 15. &nbsp; $xy''+2y'+xy=0$

16. &nbsp; $x^{2}y''+xy'+\left(x^{2}-\frac{1}{4}\right)y=0$ &nbsp;&nbsp;&nbsp; 17. &nbsp; $x^{2}y''+\left(x^{4}+x\right)y'-y=0$

18. &nbsp; $xy''-\left(x^{2}+2\right)y'+xy=0$ &nbsp;&nbsp;&nbsp; 19. &nbsp; $x^{2}y''+x^{2}y'-2y=0$

20. &nbsp; $x^{2}y''-xy'+\frac{3}{4}y=0$ &nbsp;&nbsp;&nbsp; 21. &nbsp; $x^{2}y''+\left(2x^{2}+3x\right)y'+\left(x-\frac{5}{4}\right)y=0$

22. &nbsp; $x^{2}y''+\left(x^{2}+5x\right)y'+(2x+3)y=0$ &nbsp;&nbsp;&nbsp; 23. &nbsp; $x^{2}y''+\left(x^{2}+4x\right)y'+(2x+2)y=0$

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

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

### Tekil noktaları bulunuz ve sınıflandırınız (1-4)

1. &nbsp; $\left(x^{2}-3x\right)y''+(x+2)y'+y=0$

2. &nbsp; $\left(x^{3}+x^{2}\right)y''+\left(x^{2}-2x\right)y'+4y=0$

3. &nbsp; $\left(x^{4}-2x^{3}+x^{2}\right)y''+2(x-1)y'+x^{2}y=0$

4. &nbsp; $\left(x^{5}+x^{4}-6x^{3}\right)y''+x^{2}y'+(x-2)y=0$

### Frobenius yöntemiyle $x=0$ yakınındaki çözümleri bulunuz (5-32)

5. &nbsp; $2x^{2}y''+xy'+\left(x^{2}-1\right)y=0$ &nbsp;&nbsp;&nbsp; 6. &nbsp; $2x^{2}y''+xy'+\left(2x^{2}-3\right)y=0$

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

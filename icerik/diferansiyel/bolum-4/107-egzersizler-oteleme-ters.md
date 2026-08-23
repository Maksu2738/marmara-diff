---
id: egzersizler-oteleme-ters
menu: 4.4 Egzersizler — Ötelenmiş Ters Dönüşüm
tip: sorular
defterde: yok
baslik: 4.4 &nbsp;Egzersizler — Üstel Çarpanlı İfadelerin Ters Dönüşümü
---

Bu setin tamamında $F(s)$ bir $e^{-as}$ çarpanı taşıyor. Yöntem **ikinci öteleme THEoREM'idir**:

$$\mathcal{L}^{-1}\left\{e^{-as}G(s)\right\}=g(t-a)\,u_{a}(t)$$

**Üç adım:** üstel çarpanı ayır → $g(t)$'yi bul → $g(t-a)$ yazıp sadeleştir.

[KUTU]
**3. adımı asla atlamayın.** $g(t-a)$ ifadesi çoğu zaman sadeleşir ve cevabın gerçek biçimini ancak sadeleştirdikten sonra görürsünüz:

- **Trigonometrik** $g$ ve $a$ periyodun katı ise öteleme ==kaybolur ya da işaret çevirir== (5, 11, 13).
- **Üstel** $g$'de öteleme $e^{-c(t-a)}$ olarak ==kalır== (3, 7).
- **Polinom** $g$ açılır, ==farklı katsayılı yeni bir polinom== verir (1, 9).
[/KUTU]

---

[SORU] **1.** &nbsp; $F(s)=\dfrac{4s^{2}+6}{s^{3}}\,e^{-3s}$
[CEVAP]
**Adım 1 — Üstel çarpanı ayır, terimlere böl.**

$$G(s)=\frac{4s^{2}+6}{s^{3}}=\frac{4}{s}+\frac{6}{s^{3}}$$

$\mathcal{L}^{-1}\left\{\dfrac{1}{s^{3}}\right\}=\dfrac{t^{2}}{2}$ olduğundan ikinci terim $3t^{2}$ verir:

$$g(t)=4+3t^{2}$$

**Adım 2 — Ötele ve aç.** $a=3$:

$$g(t-3)=4+3(t-3)^{2}=4+3\left(t^{2}-6t+9\right)=3t^{2}-18t+31$$

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<3\\[4pt] 3t^{2}-18t+31, & t>3\end{cases}\;}$$

**Doğrulama ($t=3$).** $f(3^{+})=27-54+31=4$. Aynı değeri $g(0)=4$'ten de okuyabiliriz &#10003; — ötelenmiş fonksiyon $t=a$ anında $g(0)$'dan başlar.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **3.** &nbsp; $F(s)=\dfrac{s}{s^{2}-5s+6}\,e^{-2s}$
[CEVAP]
**Adım 1 — Kısmi kesirler.** $s^{2}-5s+6=(s-2)(s-3)$:

$$\frac{s}{(s-2)(s-3)}=\frac{A}{s-2}+\frac{B}{s-3}$$

$s=2$: &nbsp; $A=\dfrac{2}{2-3}=-2$ &nbsp;&nbsp; $s=3$: &nbsp; $B=\dfrac{3}{3-2}=3$

$$g(t)=-2e^{2t}+3e^{3t}$$

**Adım 2 — Ötele.** $a=2$; üstel fonksiyonda öteleme ==sadeleşmez, olduğu gibi kalır==:

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<2\\[4pt] -2e^{2(t-2)}+3e^{3(t-2)}, & t>2\end{cases}\;}$$

**Doğrulama ($t=2$).** $f(2^{+})=-2+3=1=g(0)$ &#10003;

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **5.** &nbsp; $F(s)=\dfrac{5s+6}{s^{2}+9}\,e^{-\pi s}$
[CEVAP]
**Adım 1 — Payı ikiye böl.**

$$G(s)=5\cdot\frac{s}{s^{2}+9}+2\cdot\frac{3}{s^{2}+9}\;\Longrightarrow\;g(t)=5\cos 3t+2\sin 3t$$

==Sinüs terimindeki $6$'yı $2\cdot 3$ diye yazmak şart==: tabloda pay $3$ olarak durur.

**Adım 2 — Ötele ve sadeleştir.** $a=\pi$, açısal frekans $3$; öteleme $3\pi$ kadar, yani ==tek sayıda yarım periyot==:

$$\cos 3(t-\pi)=\cos(3t-3\pi)=-\cos 3t,\qquad \sin 3(t-\pi)=\sin(3t-3\pi)=-\sin 3t$$

İkisi de işaret çeviriyor:

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<\pi\\[4pt] -5\cos 3t-2\sin 3t, & t>\pi\end{cases}\;}$$

[KUTU]
**21. tekrar sorusuyla karşılaştırın.** Orada da $a=\pi$ idi ama açısal frekans $2$'ydi; öteleme $2\pi$, yani ==tam bir periyot== olduğu için hiçbir şey değişmemişti. Burada frekans $3$ olduğundan öteleme $3\pi$ ve işaret dönüyor.

**Kural:** $\cos b(t-a)$ ve $\sin b(t-a)$ ifadelerinde belirleyici olan $ba$ çarpımıdır. $ba=2k\pi$ ise değişmez, $ba=(2k+1)\pi$ ise ikisi de işaret çevirir, aradaysa açı toplama formülü gerekir.
[/KUTU]

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **7.** &nbsp; $F(s)=\dfrac{s+8}{s^{2}+4s+13}\,e^{-\pi s/2}$
[CEVAP]
**Adım 1 — Tamkareye tamamla ve payı ötele.**

$$s^{2}+4s+13=(s+2)^{2}+9$$

Pay da $s+2$ cinsinden yazılmalı: $s+8=(s+2)+6$

$$G(s)=\frac{s+2}{(s+2)^{2}+9}+2\cdot\frac{3}{(s+2)^{2}+9}$$

$$g(t)=e^{-2t}\left[\cos 3t+2\sin 3t\right]$$

**Adım 2 — Ötele.** $a=\dfrac{\pi}{2}$; üstel kısım $e^{-2(t-\pi/2)}$ olarak kalır, trigonometrik kısımda $3\left(t-\tfrac{\pi}{2}\right)=3t-\tfrac{3\pi}{2}$:

$$\cos\left(3t-\tfrac{3\pi}{2}\right)=-\sin 3t,\qquad \sin\left(3t-\tfrac{3\pi}{2}\right)=\cos 3t$$

==Bu kez öteleme sinüsle kosinüsü yer değiştiriyor==, çünkü $\tfrac{3\pi}{2}$ çeyrek periyodun tek katı.

$$-\sin 3t+2\cos 3t$$

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<\dfrac{\pi}{2}\\[6pt] e^{-2\left(t-\pi/2\right)}\left[2\cos 3t-\sin 3t\right], & t>\dfrac{\pi}{2}\end{cases}\;}$$

Cevapta ==üstel öteleme duruyor ama trigonometrik öteleme kayboldu==; bu setin en öğretici sorusu, çünkü iki davranış aynı ifadede yan yana.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **9.** &nbsp; $F(s)=\dfrac{e^{-4s}-e^{-7s}}{s^{2}}$
[CEVAP]
**Adım 1 — İki ayrı ötelemeye böl.**

$$F(s)=e^{-4s}\cdot\frac{1}{s^{2}}-e^{-7s}\cdot\frac{1}{s^{2}},\qquad \mathcal{L}^{-1}\left\{\frac{1}{s^{2}}\right\}=t$$

$$f(t)=(t-4)\,u_{4}(t)-(t-7)\,u_{7}(t)$$

**Adım 2 — Parçalı biçime aç.**

$4<t<7$ aralığında yalnız birinci terim etkin: $t-4$

$t>7$ aralığında ikisi birden: $(t-4)-(t-7)=3$

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<4\\[4pt] t-4, & 4<t<7\\[4pt] 3, & t>7\end{cases}\;}$$

[KUTU]
**Bu bir "rampa sonra doyum" fonksiyonudur.** $t=4$'te sıfırdan doğrusal yükselmeye başlar, $t=7$'de $3$ değerine ulaşır ve orada sabit kalır. ==İkinci öteleme rampayı durdurmak için== eklenmiştir: eğimi $+1$ olan bir terimden eğimi $+1$ olan başka bir terim çıkarılınca eğim sıfırlanır.

Fizikte doyuma ulaşan bir yükleme, elektrikte kapasitörün dolması bu biçimdedir.
[/KUTU]

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **11.** &nbsp; $F(s)=\dfrac{1+e^{-\pi s}}{s^{2}+4}$
[CEVAP]
**Adım 1 — Çarpanı aç.** Aynı $G$ hem ötelenmemiş hem ötelenmiş olarak görünüyor:

$$F(s)=G(s)+e^{-\pi s}G(s),\qquad G(s)=\frac{1}{s^{2}+4}\;\Longrightarrow\;g(t)=\frac{1}{2}\sin 2t$$

**Adım 2 — Ötelenmiş parçayı sadeleştir.** $a=\pi$, frekans $2$; $ba=2\pi$ ==tam bir periyot==, hiçbir şey değişmez:

$$\sin 2(t-\pi)=\sin(2t-2\pi)=\sin 2t$$

**Adım 3 — Parçalı yaz.**

$t>\pi$ için iki parça toplanır: $\tfrac{1}{2}\sin 2t+\tfrac{1}{2}\sin 2t=\sin 2t$

$$\boxed{\;f(t)=\begin{cases}\dfrac{1}{2}\sin 2t, & 0<t<\pi\\[6pt] \sin 2t, & t>\pi\end{cases}\;}$$

==Genlik $t=\pi$'de ikiye katlanıyor==, dalga biçimi aynı kalıyor. Fiziksel karşılığı: sisteme $t=\pi$'de tam aynı fazda ikinci bir kaynak ekleniyor.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **13.** &nbsp; $F(s)=\dfrac{2\left[1+e^{-\pi s/2}\right]}{s^{2}-2s+5}$
[CEVAP]
**Adım 1 — Tamkareye tamamla.**

$$s^{2}-2s+5=(s-1)^{2}+4\;\Longrightarrow\;G(s)=\frac{2}{(s-1)^{2}+2^{2}}$$

$$g(t)=e^{t}\sin 2t$$

**Adım 2 — Ötelenmiş parçayı sadeleştir.** $a=\dfrac{\pi}{2}$, frekans $2$; $ba=\pi$ ==yarım periyot==, sinüs işaret çevirir:

$$g\left(t-\tfrac{\pi}{2}\right)=e^{t-\pi/2}\sin\left(2t-\pi\right)=-e^{-\pi/2}\,e^{t}\sin 2t$$

Üstel kısmı $e^{t-\pi/2}=e^{-\pi/2}e^{t}$ diye ayırdığımıza dikkat: sabit $e^{-\pi/2}$ öne çıkıyor.

**Adım 3 — Topla.**

$t>\tfrac{\pi}{2}$ için: $e^{t}\sin 2t-e^{-\pi/2}e^{t}\sin 2t=\left(1-e^{-\pi/2}\right)e^{t}\sin 2t$

$$\boxed{\;f(t)=\begin{cases}e^{t}\sin 2t, & 0<t<\dfrac{\pi}{2}\\[6pt] \left(1-e^{-\pi/2}\right)e^{t}\sin 2t, & t>\dfrac{\pi}{2}\end{cases}\;}$$

$1-e^{-\pi/2}\approx 0{,}79$ olduğundan ikinci kaynak burada genliği ==azaltıyor== — 11. sorunun tersi. Sebep: orada iki parça aynı fazdaydı, burada ters fazda.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

---

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu soruların cevabı kitabın anahtarında yok.** Çözümler bize aittir; her biri ==ikinci bir bağımsız yolla doğrulanmıştır==. Bu sette en kullanışlı kontrol şu:

$$f(a^{+})=g(0)$$

Ötelenmiş fonksiyon $t=a$ anında, ötelenmemiş $g$'nin başlangıç değerinden başlar. ==Tek satırda hem kısmi kesirleri hem öteleme sadeleştirmesini sınar.==
[/KUTU]

[SORU] **2.** &nbsp; $F(s)=\dfrac{3s+1}{(s-2)^{2}}\,e^{-5s}$
[CEVAP]
**Adım 1 — Tekrarlı çarpan: payı $s-2$ cinsine sok.**

$$3s+1=3(s-2)+7$$

$$G(s)=\frac{3(s-2)+7}{(s-2)^{2}}=\frac{3}{s-2}+\frac{7}{(s-2)^{2}}$$

**Adım 2 — Tablodan oku.** $\mathcal{L}^{-1}\left\{\dfrac{1}{(s-a)^{2}}\right\}=t\,e^{at}$:

$$g(t)=3e^{2t}+7t\,e^{2t}$$

**Adım 3 — Ötele.** $a=5$; ==üstel çarpanda öteleme sadeleşmez, hem $e^{2(t-5)}$ hem $(t-5)$ olduğu gibi kalır:==

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<5\\[4pt] \left[3+7(t-5)\right]e^{2(t-5)}, & t>5\end{cases}\;}$$

**Doğrulama (ileri dönüşüm).** Adım 1'i tersine çevirelim:

$$\frac{3}{s-2}+\frac{7}{(s-2)^{2}}=\frac{3(s-2)+7}{(s-2)^{2}}=\frac{3s+1}{(s-2)^{2}}\;\checkmark$$

**Başlangıç kontrolü.** $f(5^{+})=\left[3+0\right]e^{0}=3$ ve $g(0)=3e^{0}+0=3$ &#10003;
[/CEVAP]

[SORU] **4.** &nbsp; $F(s)=\dfrac{12}{s^{2}+s-2}\,e^{-4s}$
[CEVAP]
**Adım 1 — Paydayı çarpanlara ayır.**

$$s^{2}+s-2=(s+2)(s-1)$$

**Adım 2 — Kısmi kesirler.**

$$\frac{12}{(s+2)(s-1)}=\frac{A}{s+2}+\frac{B}{s-1}$$

$s=-2$: &nbsp; $A=\dfrac{12}{-3}=-4$ &nbsp;&nbsp;&nbsp; $s=1$: &nbsp; $B=\dfrac{12}{3}=4$

$$g(t)=4e^{t}-4e^{-2t}$$

**Adım 3 — Ötele.** $a=4$:

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<4\\[4pt] 4e^{t-4}-4e^{-2(t-4)}, & t>4\end{cases}\;}$$

**Doğrulama (genel kalıpla).** 4.2'deki konvolüsyon setinde şu kalıbı çıkarmıştık:

$$\mathcal{L}^{-1}\left\{\frac{1}{(s-a)(s-b)}\right\}=\frac{e^{at}-e^{bt}}{a-b}$$

Burada $a=1$, $b=-2$, $a-b=3$ ve pay $12$:

$$g(t)=12\cdot\frac{e^{t}-e^{-2t}}{3}=4\left(e^{t}-e^{-2t}\right)\;\checkmark$$

Kısmi kesirlerle bulduğumuzun aynısı. ==İki bağımsız yol.==

**Başlangıç kontrolü.** $f(4^{+})=4-4=0$ ve $g(0)=4-4=0$ &#10003;

[KUTU]
**Sıfırdan başlaması ne anlama geliyor?** $F(s)$'nin payı sabit, paydası ikinci dereceden — yani ==derece farkı $2$==. Böyle bir dönüşümün ters dönüşümü $t=0$'da her zaman sıfırdır (başlangıç değer THEoREM'i: $\lim sG=0$).

2. soruda derece farkı $1$ idi ve $f(5^{+})=3\neq 0$ çıkmıştı. ==Derece farkına bakarak başlangıç değerini önceden kestirebilirsiniz.==
[/KUTU]
[/CEVAP]

[SORU] **6.** &nbsp; $F(s)=\dfrac{s+10}{s^{2}+2s-8}\,e^{-2s}$
[CEVAP]
**Adım 1 — Paydayı çarpanlara ayır.** $\Delta=4+32=36>0$, çarpanlanıyor:

$$s^{2}+2s-8=(s+4)(s-2)$$

**Adım 2 — Kısmi kesirler.**

$$\frac{s+10}{(s+4)(s-2)}=\frac{A}{s+4}+\frac{B}{s-2}$$

$s=-4$: &nbsp; $A=\dfrac{-4+10}{-6}=-1$ &nbsp;&nbsp;&nbsp; $s=2$: &nbsp; $B=\dfrac{2+10}{6}=2$

$$g(t)=2e^{2t}-e^{-4t}$$

**Adım 3 — Ötele.** $a=2$; üstelde öteleme sadeleşmez:

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<2\\[4pt] 2e^{2(t-2)}-e^{-4(t-2)}, & t>2\end{cases}\;}$$

**Doğrulama (ileri dönüşüm).**

$$\frac{-1}{s+4}+\frac{2}{s-2}=\frac{-(s-2)+2(s+4)}{(s+4)(s-2)}=\frac{s+10}{s^{2}+2s-8}\;\checkmark$$

**Başlangıç kontrolü.** $f(2^{+})=2-1=1$ ve $g(0)=2-1=1$ &#10003;

==Derece farkı $1$ olduğu için sıfırdan farklı çıkması beklenen bir sonuç== (4. sorudaki kutuya bakınız).
[/CEVAP]

[SORU] **8.** &nbsp; $F(s)=\dfrac{2s+9}{s^{2}+4s+13}\,e^{-3s}$
[CEVAP]
**Adım 1 — Tamkareye tamamla.** $\Delta=16-52<0$, çarpanlanmıyor:

$$s^{2}+4s+13=(s+2)^{2}+9$$

**Adım 2 — Payı da $s+2$ cinsine sok.**

$$2s+9=2(s+2)+5$$

$$G(s)=\frac{2(s+2)}{(s+2)^{2}+9}+\frac{5}{3}\cdot\frac{3}{(s+2)^{2}+9}$$

==Sinüs teriminde payı $3$'e tamamladık==, bu yüzden katsayı $\tfrac{5}{3}$ oldu.

$$g(t)=e^{-2t}\left[2\cos 3t+\frac{5}{3}\sin 3t\right]$$

**Adım 3 — Ötele.** $a=3$, açısal frekans $b=3$; ==çarpım $ba=9$, $\pi$'nin katı değil==, dolayısıyla **sadeleşme yok**. Öteleme olduğu gibi kalır:

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<3\\[6pt] e^{-2(t-3)}\left[2\cos 3(t-3)+\dfrac{5}{3}\sin 3(t-3)\right], & t>3\end{cases}\;}$$

**Doğrulama (ileri dönüşüm).**

$$\frac{2(s+2)+5}{(s+2)^{2}+9}=\frac{2s+9}{s^{2}+4s+13}\;\checkmark$$

**Başlangıç kontrolü.** $f(3^{+})=e^{0}\left[2\cdot 1+0\right]=2$ ve $g(0)=2$ &#10003;

[KUTU]
**5, 7 ve 8'i yan yana koyun.** Üçünde de $a$ ve $b$ var, ama sonuç bambaşka:

<div class="tablo-sar">
<table>
<tr><th>Soru</th><th>$b\cdot a$</th><th>Ne oldu</th></tr>
<tr><td>5</td><td>$3\pi$</td><td>işaret çevirdi</td></tr>
<tr><td>7</td><td>$\tfrac{3\pi}{2}$</td><td>$\sin$ ile $\cos$ yer değiştirdi</td></tr>
<tr><td>8</td><td>$9$</td><td>hiçbir şey — sadeleşme yok</td></tr>
</table>
</div>

$\pi$ görmüyorsanız sadeleştirmeye çalışmayın; ==cevabı $t-a$ cinsinden bırakmak doğru cevaptır.==
[/KUTU]
[/CEVAP]

[SORU] **10.** &nbsp; $F(s)=\dfrac{e^{-3s}-e^{-8s}}{s^{3}}$
[CEVAP]
**Adım 1 — İki ayrı ötelemeye böl.**

$$\mathcal{L}^{-1}\left\{\frac{1}{s^{3}}\right\}=\frac{t^{2}}{2}$$

$$f(t)=\frac{(t-3)^{2}}{2}\,u_{3}(t)-\frac{(t-8)^{2}}{2}\,u_{8}(t)$$

**Adım 2 — Üçüncü aralığı sadeleştir.** $t>8$ için iki terim de etkin. İki kare farkını çarpanlara ayıralım:

$$(t-3)^{2}-(t-8)^{2}=\big[(t-3)-(t-8)\big]\big[(t-3)+(t-8)\big]=5(2t-11)$$

$$\frac{5(2t-11)}{2}=5t-\frac{55}{2}$$

==Kareler götürüp geriye doğrusal bir ifade kalıyor.==

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<3\\[6pt] \dfrac{(t-3)^{2}}{2}, & 3<t<8\\[6pt] 5t-\dfrac{55}{2}, & t>8\end{cases}\;}$$

**Doğrulama (süreklilik ve türev sürekliliği).**

$t=3$'te: ikinci ifade $\to 0$ &#10003;

$t=8$'de: ikinci ifade $\to\dfrac{25}{2}=12{,}5$; &nbsp; üçüncü ifade $\to 40-27{,}5=12{,}5$ &#10003;

Türevler de uyuşuyor: ikinci parçanın türevi $t-3$, $t=8$'de $5$; üçüncü parçanın türevi sabit $5$ &#10003;

==Fonksiyon hem sürekli hem türevi sürekli== — $\dfrac{1}{s^{3}}$ gibi yüksek dereceli bir paydada beklenen davranış budur.

[KUTU]
**9. soruyla karşılaştırın.** Orada payda $s^{2}$ idi ve üçüncü parça **sabit** ($3$) çıkmıştı. Burada payda $s^{3}$ ve üçüncü parça **doğrusal**.

**Kural:** iki eşit ağırlıklı öteleme birbirini götürdüğünde derece bir düşer. $s^{2}$ rampayı sabite indiriyordu, $s^{3}$ parabolü rampaya indiriyor.
[/KUTU]
[/CEVAP]

[SORU] **12.** &nbsp; $F(s)=\dfrac{2-e^{-3s}}{s^{2}+9}$
[CEVAP]
**Adım 1 — Çarpanı aç.**

$$F(s)=2G(s)-e^{-3s}G(s),\qquad G(s)=\frac{1}{s^{2}+9}\;\Longrightarrow\;g(t)=\frac{1}{3}\sin 3t$$

**Adım 2 — Ötelenmiş parça.** $a=3$, $b=3$; ==$ba=9$ yine $\pi$'nin katı değil==, sadeleşme yok:

$$g(t-3)=\frac{1}{3}\sin 3(t-3)$$

**Adım 3 — Parçalı yaz.**

$$\boxed{\;f(t)=\begin{cases}\dfrac{2}{3}\sin 3t, & 0<t<3\\[8pt] \dfrac{2}{3}\sin 3t-\dfrac{1}{3}\sin 3(t-3), & t>3\end{cases}\;}$$

**Doğrulama (süreklilik).** $t=3$'te:

birinci ifade $\to\dfrac{2}{3}\sin 9$; &nbsp; ikinci ifade $\to\dfrac{2}{3}\sin 9-\dfrac{1}{3}\sin 0=\dfrac{2}{3}\sin 9$ &#10003;

**Başlangıç kontrolü.** $f(0)=\dfrac{2}{3}\sin 0=0$; derece farkı $2$ olduğu için beklenen sonuç &#10003;

[KUTU]
**11. soruyla farkı.** Orada $a=\pi$, $b=2$, çarpım $2\pi$ idi; iki terim ==aynı fazda== birleşip genliği ikiye katlamıştı. Burada $ba=9$ olduğu için iki sinüs farklı fazda ve **birleştirilemiyor**.

Zorlamak isterseniz açı toplama formülüyle $\sin(3t-9)=\sin 3t\cos 9-\cos 3t\sin 9$ yazıp toplayabilirsiniz, ama sonuç daha karışık olur. ==Cevabı olduğu gibi bırakmak doğru.==
[/KUTU]
[/CEVAP]

[SORU] **14.** &nbsp; $F(s)=\dfrac{4\left(e^{-2s}-1\right)}{s\left(s^{2}+4\right)}$
[CEVAP]
**Adım 1 — Önce $G$'yi bul.**

$$\frac{4}{s\left(s^{2}+4\right)}=\frac{1}{s}-\frac{s}{s^{2}+4}$$

**Kontrol:** ortak paydada $\dfrac{\left(s^{2}+4\right)-s^{2}}{s\left(s^{2}+4\right)}=\dfrac{4}{s\left(s^{2}+4\right)}$ &#10003;

$$g(t)=1-\cos 2t$$

**Adım 2 — İşarete dikkat.** Parantez $e^{-2s}-1$, yani ==ötelenmemiş parça eksi işaretli:==

$$F(s)=e^{-2s}G(s)-G(s)\;\Longrightarrow\;f(t)=g(t-2)\,u_{2}(t)-g(t)$$

**Adım 3 — Parçalı yaz.**

$0<t<2$ için yalnız ikinci terim: &nbsp; $-\left(1-\cos 2t\right)=\cos 2t-1$

$t>2$ için ikisi birden:

$$\left[1-\cos 2(t-2)\right]-\left[1-\cos 2t\right]=\cos 2t-\cos 2(t-2)$$

==Sabit $1$'ler götürüyor.==

$$\boxed{\;f(t)=\begin{cases}\cos 2t-1, & 0<t<2\\[4pt] \cos 2t-\cos 2(t-2), & t>2\end{cases}\;}$$

**Doğrulama (süreklilik).** $t=2$'de:

birinci ifade $\to\cos 4-1$; &nbsp; ikinci ifade $\to\cos 4-\cos 0=\cos 4-1$ &#10003;

**Doğrulama (başlangıç değer THEoREM'i).** $f(0)=\cos 0-1=0$ olmalı:

$$sF(s)=\frac{4\left(e^{-2s}-1\right)}{s^{2}+4}\;\xrightarrow{\;s\to\infty\;}\;\frac{4(0-1)}{\infty}=0\;\checkmark$$

[KUTU]
**Bu setteki tek "ters işaretli" soru.** Diğerlerinde ötelenmemiş parça artıydı; burada $e^{-2s}-1$ yazıldığı için ==önce eksi bir kopya, sonra ötelenmiş artı kopya== geliyor.

Pratikte anlamı: fonksiyon $t=0$'da sıfırdan başlayıp aşağı salınıyor, $t=2$'de ikinci bir kaynak devreye girip onu kısmen dengeliyor. Sabit terimlerin götürmesi de bunun cebirsel karşılığı.
[/KUTU]
[/CEVAP]

[KUTU]
**Setin tamamı bitti.** 14 sorunun 14'ü çözülü: tek numaralılar kitabın cevap anahtarıyla, çift numaralılar ==ileri dönüşüm, süreklilik kontrolü ve başlangıç değer THEoREM'i== ile doğrulanmıştır.

**Setin özeti — öteleme sonrası ne olur?**

Belirleyici olan **$b\cdot a$ çarpımıdır** ($b$ açısal frekans, $a$ öteleme miktarı):

<div class="tablo-sar">
<table>
<tr><th>$b\cdot a$</th><th>Sonuç</th><th>Soru</th></tr>
<tr><td>$2k\pi$</td><td>hiçbir şey değişmez</td><td>11</td></tr>
<tr><td>$(2k+1)\pi$</td><td>işaret çevirir</td><td>5, 13</td></tr>
<tr><td>çeyrek periyodun tek katı</td><td>$\sin\leftrightarrow\cos$</td><td>7</td></tr>
<tr><td>$\pi$'nin katı değil</td><td>sadeleşme yok, $t-a$ cinsinde bırakılır</td><td>8, 12</td></tr>
</table>
</div>

Üstel çarpanda öteleme **asla** sadeleşmez (3, 6). Polinomda ise açılır ve derece düşebilir (1, 9, 10).
[/KUTU]

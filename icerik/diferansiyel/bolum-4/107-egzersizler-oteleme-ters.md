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

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**2.** &nbsp; $F(s)=\dfrac{3s+1}{(s-2)^{2}}\,e^{-5s}$

**4.** &nbsp; $F(s)=\dfrac{12}{s^{2}+s-2}\,e^{-4s}$

**6.** &nbsp; $F(s)=\dfrac{s+10}{s^{2}+2s-8}\,e^{-2s}$

**8.** &nbsp; $F(s)=\dfrac{2s+9}{s^{2}+4s+13}\,e^{-3s}$

**10.** &nbsp; $F(s)=\dfrac{e^{-3s}-e^{-8s}}{s^{3}}$

**12.** &nbsp; $F(s)=\dfrac{2-e^{-3s}}{s^{2}+9}$

**14.** &nbsp; $F(s)=\dfrac{4\left(e^{-2s}-1\right)}{s\left(s^{2}+4\right)}$

[KUTU]
**İpuçları.**

**2** → tekrarlı çarpan: payı $s-2$ cinsinden yazın ($3s+1=3(s-2)+7$), sonuç $e^{2(t-5)}$ ve $(t-5)e^{2(t-5)}$ karışımı olur.

**4, 6** → 3 gibi: paydayı çarpanlarına ayırıp kısmi kesirlere geçin. $s^{2}+s-2=(s+2)(s-1)$, $s^{2}+2s-8=(s+4)(s-2)$.

**8** → 7 gibi tamkare, ama $a=3$ ve $3$ ile açısal frekans $3$'ün çarpımı $9$; ==$\pi$'nin katı değil==, dolayısıyla açı toplama formülünü açıkça yazmanız gerekir. Sadeleşme olmaz, cevap $\cos 3(t-3)$ ve $\sin 3(t-3)$ cinsinden kalır.

**10** → 9 gibi ama $1/s^{3}\to t^{2}/2$; üç parçalı cevap çıkar, son parça sabit değil doğrusal olur.

**12** → 11 gibi ama katsayılar farklı ($2$ ve $-1$) ve $a=3$, frekans $3$; $ba=9$ yine $\pi$ katı değil.

**14** → önce kısmi kesirlere ayırın: $\dfrac{4}{s\left(s^{2}+4\right)}=\dfrac{1}{s}-\dfrac{s}{s^{2}+4}$. İşarete dikkat, parantez $e^{-2s}-1$ yani ==ötelenmemiş parça eksi işaretli==.

**Doğrulama.** Hepsinde $t=a$ noktasında ==$f(a^{+})=g(0)$== olmalıdır (11, 12 ve 14 gibi ötelenmemiş parçası da olanlarda: $f(a^{+})=g(a)+g(0)$). Bu tek satırlık kontrol, öteleme sadeleştirmesindeki işaret hatalarını anında yakalar.
[/KUTU]

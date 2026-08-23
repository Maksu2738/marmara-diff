---
id: egzersizler-basamak-2
menu: 4.4 Egzersizler — Trigonometrik ve Periyodik
tip: sorular
baslik: 4.4 &nbsp;Egzersizler — Trigonometrik Öteleme ve Periyodik Fonksiyonlar
defterde: yok
---

Bu grup, öncekinden iki bakımdan zorlaşıyor: ifadeler **trigonometrik** ve son dördü **periyodik**.

[SORU] **15.** &nbsp; $f(t)=\begin{cases}0, & 0<t<\frac{\pi}{2}\\ \cos t, & t>\frac{\pi}{2}\end{cases}$
[CEVAP]
$\cos t$'yi $t-\frac{\pi}{2}$ cinsinden yazmalıyız. Toplam formülüyle:

$$\cos t=\cos\left[\left(t-\tfrac{\pi}{2}\right)+\tfrac{\pi}{2}\right]=\cos\left(t-\tfrac{\pi}{2}\right)\underbrace{\cos\tfrac{\pi}{2}}_{0}-\sin\left(t-\tfrac{\pi}{2}\right)\underbrace{\sin\tfrac{\pi}{2}}_{1}$$

$$\cos t=-\sin\left(t-\tfrac{\pi}{2}\right)$$

Yani $g(t)=-\sin t$ ile $f(t)=u_{\pi/2}(t)\,g\!\left(t-\tfrac{\pi}{2}\right)$.

$$G(s)=\mathcal{L}\{-\sin t\}=-\frac{1}{s^{2}+1}$$

$$\boxed{\;\mathcal{L}\{f(t)\}=-\frac{e^{-\pi s/2}}{s^{2}+1}\;}$$

==Eksi işaretine dikkat==; $\cos$ ile $\sin$ arasındaki $\frac{\pi}{2}$ kaydırması işaret üretir.

*Kitabın cevabıyla uyuşuyor.*

[SORU] **17.** &nbsp; $f(t)=\begin{cases}0, & 0<t<4\\ t-4, & 4<t<7\\ 3, & t>7\end{cases}$
[CEVAP]
Bu bir **rampa**: $t=4$'te başlıyor, $t=7$'de $3$ değerinde doyuma ulaşıyor.

Doyumu, ikinci bir rampa çıkararak kurarız:

$$f(t)=u_{4}(t)(t-4)-u_{7}(t)(t-7)$$

**Kontrol:**

- $4<t<7$: $\;(t-4)-0=t-4\;\checkmark$
- $t>7$: $\;(t-4)-(t-7)=3\;\checkmark$

İki terim de $(9.78)$ biçimindedir ($g(t)=t$, sırasıyla $a=4$ ve $a=7$):

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{e^{-4s}-e^{-7s}}{s^{2}}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **19.** &nbsp; $f(t)=\begin{cases}0, & 0<t<2\pi\\ \sin t, & 2\pi<t<4\pi\\ 0, & t>4\pi\end{cases}$
[CEVAP]
==Burada $\sin$'in periyodikliği işi kolaylaştırıyor:== $\sin$ fonksiyonu $2\pi$ periyotlu olduğundan

$$\sin t=\sin(t-2\pi)=\sin(t-4\pi)$$

Dolayısıyla hiçbir trigonometrik dönüşüme gerek kalmadan, aç-kapat kalıbı doğrudan uygulanır:

$$f(t)=u_{2\pi}(t)\sin(t-2\pi)-u_{4\pi}(t)\sin(t-4\pi)$$

$g(t)=\sin t$ için $G(s)=\dfrac{1}{s^{2}+1}$:

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{e^{-2\pi s}-e^{-4\pi s}}{s^{2}+1}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **21.** &nbsp; $f(t)=\begin{cases}4, & 0\le t<3\\ 0, & 3\le t<6\end{cases}$ &nbsp;ve&nbsp; $f(t+6)=f(t)$
[CEVAP]
Periyodik fonksiyon, $P=6$. THEoREM 9.10 uygulanır — ==yalnızca bir periyot integre edilir:==

$$\mathcal{L}\{f(t)\}=\frac{1}{1-e^{-6s}}\int_{0}^{3}4e^{-st}\,dt$$

($3<t<6$ aralığında $f=0$ olduğundan o kısım katkı vermez.)

$$\int_{0}^{3}4e^{-st}\,dt=4\left[\frac{-e^{-st}}{s}\right]_{0}^{3}=\frac{4\left(1-e^{-3s}\right)}{s}$$

$$\mathcal{L}\{f(t)\}=\frac{4\left(1-e^{-3s}\right)}{s\left(1-e^{-6s}\right)}$$

**Sadeleştir.** Payda iki kare farkıdır:

$$1-e^{-6s}=\left(1-e^{-3s}\right)\left(1+e^{-3s}\right)$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{4}{s\left(1+e^{-3s}\right)}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **23.** &nbsp; $f(t)=\begin{cases}t, & 0\le t<1\\ 2-t, & 1\le t<2\end{cases}$ &nbsp;ve&nbsp; $f(t+2)=f(t)$
[CEVAP]
**Üçgen dalga**, $P=2$.

$$\mathcal{L}\{f(t)\}=\frac{1}{1-e^{-2s}}\left[\int_{0}^{1}te^{-st}\,dt+\int_{1}^{2}(2-t)e^{-st}\,dt\right]$$

**Birinci integral** (kısmi integrasyon):

$$\int_{0}^{1}te^{-st}\,dt=\left[-\frac{te^{-st}}{s}-\frac{e^{-st}}{s^{2}}\right]_{0}^{1}=-\frac{e^{-s}}{s}-\frac{e^{-s}}{s^{2}}+\frac{1}{s^{2}}$$

**İkinci integral.** $u=2-t$ değişken değişimi yapalım ($du=-dt$; $t=1\Rightarrow u=1$, $t=2\Rightarrow u=0$):

$$\int_{1}^{2}(2-t)e^{-st}\,dt=e^{-2s}\int_{0}^{1}u\,e^{su}\,du=e^{-2s}\left[\frac{e^{s}}{s}-\frac{e^{s}}{s^{2}}+\frac{1}{s^{2}}\right]$$

$$=\frac{e^{-s}}{s}-\frac{e^{-s}}{s^{2}}+\frac{e^{-2s}}{s^{2}}$$

**Topla** — ==$\frac{e^{-s}}{s}$ terimleri birbirini götürüyor:==

$$\frac{1}{s^{2}}-\frac{2e^{-s}}{s^{2}}+\frac{e^{-2s}}{s^{2}}=\frac{1-2e^{-s}+e^{-2s}}{s^{2}}=\frac{\left(1-e^{-s}\right)^{2}}{s^{2}}$$

**Payda ile sadeleştir.** $1-e^{-2s}=\left(1-e^{-s}\right)\left(1+e^{-s}\right)$:

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{1-e^{-s}}{s^{2}\left(1+e^{-s}\right)}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[KUTU]
**Periyodik sorularda tekrar eden desen.** 21 ve 23'te de sadeleşme aynı yerden geldi: pay $\left(1-e^{-Ps/2}\right)^{k}$ biçiminde çıktı, payda $1-e^{-Ps}$ ise iki kare farkı olarak açıldı. ==Bir periyodun yarısında işaret ya da yön değiştiren her dalgada bu sadeleşme olur== ve sonuçta payda $1+e^{-Ps/2}$ (artı işaretli) kalır.
[/KUTU]

---

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu üç sorunun cevabı kitabın anahtarında yok.** Çözümler bize aittir; her biri ==ikinci bir bağımsız yolla doğrulanmıştır==.

Periyodik fonksiyonlarda kullandığımız kontrol şu: **son değer THEoREM'i periyodik bir fonksiyonda ortalama değeri verir.**

$$\lim_{s\to 0}s\,F(s)=\frac{1}{P}\int_{0}^{P}f(t)\,dt$$

Sağ taraf elle kolayca hesaplanır, dolayısıyla ==bulunan $F(s)$'nin tamamını sınayan tek satırlık bir testtir.==
[/KUTU]

[SORU] **20.** &nbsp; $f(t)=\begin{cases}0, & 0<t<\frac{3\pi}{2}\\ \cos t, & \frac{3\pi}{2}<t<\frac{9\pi}{2}\\ 0, & t>\frac{9\pi}{2}\end{cases}$
[CEVAP]
**Adım 1 — Pencere biçiminde yaz.**

$$f(t)=\cos t\left[u_{3\pi/2}(t)-u_{9\pi/2}(t)\right]$$

**Adım 2 — Her terimde $\cos t$'yi kendi $t-a$ cinsine sok.** ==İki terimde $a$ farklı olduğu için ayrı ayrı yapılmalı.==

**Birinci terim** ($a=\tfrac{3\pi}{2}$): açı toplama formülüyle

$$\cos t=\cos\!\left(t-\tfrac{3\pi}{2}\right)\underbrace{\cos\tfrac{3\pi}{2}}_{0}-\sin\!\left(t-\tfrac{3\pi}{2}\right)\underbrace{\sin\tfrac{3\pi}{2}}_{-1}=\sin\!\left(t-\tfrac{3\pi}{2}\right)$$

**İkinci terim** ($a=\tfrac{9\pi}{2}=4\pi+\tfrac{\pi}{2}$): &nbsp;$\cos\tfrac{9\pi}{2}=0$, &nbsp;$\sin\tfrac{9\pi}{2}=1$

$$\cos t=-\sin\!\left(t-\tfrac{9\pi}{2}\right)$$

İkinci terimin önünde zaten eksi olduğu için ==iki eksi artı yapıyor:==

$$-\cos t\,u_{9\pi/2}(t)=+\sin\!\left(t-\tfrac{9\pi}{2}\right)u_{9\pi/2}(t)$$

**Adım 3 — Dönüştür.** İkisi de $\sin$ olduğundan aynı tablo girdisi:

$$\boxed{\;\mathcal{L}\{f\}=\frac{e^{-3\pi s/2}+e^{-9\pi s/2}}{s^{2}+1}\;}$$

**Doğrulama (tanımdan integral).** Standart sonuç $\displaystyle\int e^{-st}\cos t\,dt=\frac{e^{-st}\left(-s\cos t+\sin t\right)}{s^{2}+1}$:

Üst uçta ($t=\tfrac{9\pi}{2}$): &nbsp;$\cos=0$, $\sin=1$ &nbsp;$\Rightarrow$&nbsp; $\dfrac{e^{-9\pi s/2}}{s^{2}+1}$

Alt uçta ($t=\tfrac{3\pi}{2}$): &nbsp;$\cos=0$, $\sin=-1$ &nbsp;$\Rightarrow$&nbsp; $\dfrac{-e^{-3\pi s/2}}{s^{2}+1}$

$$\int_{3\pi/2}^{9\pi/2}\cos t\,e^{-st}\,dt=\frac{e^{-9\pi s/2}}{s^{2}+1}-\frac{-e^{-3\pi s/2}}{s^{2}+1}=\frac{e^{-3\pi s/2}+e^{-9\pi s/2}}{s^{2}+1}\;\checkmark$$

[KUTU]
**İki terimin de artı çıkması dikkat çekici.** Pencere biçiminde ikinci terim eksiyle giriyordu; ama $\tfrac{9\pi}{2}$ ötelemesi kosinüsü $-\sin$'e çevirdiği için ==işaret bir kez daha döndü==.

**Neden böyle:** aralığın uzunluğu $\tfrac{9\pi}{2}-\tfrac{3\pi}{2}=3\pi$, yani $2\pi$'nin katı **değil**. Tam periyot katı olsaydı iki terim de aynı biçimi alır ve fark $\left(e^{-as}-e^{-bs}\right)$ olarak kalırdı. Burada tek sayıda yarım periyot olduğu için toplam çıkıyor.
[/KUTU]
[/CEVAP]

[SORU] **22.** &nbsp; $f(t)=\begin{cases}t, & 0\le t<1\\ 1, & 1\le t<2\end{cases}$ &nbsp;ve&nbsp; $f(t+2)=f(t)$
[CEVAP]
**Adım 1 — Periyodik dönüşüm formülü.** $P=2$:

$$\mathcal{L}\{f\}=\frac{1}{1-e^{-Ps}}\int_{0}^{P}e^{-st}f(t)\,dt=\frac{1}{1-e^{-2s}}\left[\int_{0}^{1}te^{-st}\,dt+\int_{1}^{2}e^{-st}\,dt\right]$$

**Adım 2 — Birinci integral** (kısmi integrasyon, $u=t$):

$$\int_{0}^{1}te^{-st}\,dt=\left[-\frac{t}{s}e^{-st}\right]_{0}^{1}+\frac{1}{s}\int_{0}^{1}e^{-st}\,dt=-\frac{e^{-s}}{s}+\frac{1-e^{-s}}{s^{2}}$$

**Adım 3 — İkinci integral.**

$$\int_{1}^{2}e^{-st}\,dt=\frac{e^{-s}-e^{-2s}}{s}$$

**Adım 4 — Topla.** ==$\dfrac{e^{-s}}{s}$ terimleri birbirini götürüyor:==

$$\int_{0}^{2}=\frac{1-e^{-s}}{s^{2}}-\frac{e^{-2s}}{s}$$

$$\boxed{\;\mathcal{L}\{f\}=\frac{1}{1-e^{-2s}}\left[\frac{1-e^{-s}}{s^{2}}-\frac{e^{-2s}}{s}\right]\;}$$

**Doğrulama (ortalama değer).** Bir periyottaki ortalama:

$$\frac{1}{2}\left[\int_{0}^{1}t\,dt+\int_{1}^{2}1\,dt\right]=\frac{1}{2}\left[\frac{1}{2}+1\right]=\frac{3}{4}$$

Şimdi $s\to 0$ limitini alalım. $s$ küçükken $1-e^{-2s}\approx 2s$, &nbsp;$\dfrac{1-e^{-s}}{s}\approx 1-\dfrac{s}{2}$, &nbsp;$e^{-2s}\approx 1-2s$:

$$s\,\mathcal{L}\{f\}=\frac{1}{1-e^{-2s}}\left[\frac{1-e^{-s}}{s}-e^{-2s}\right]\approx\frac{\left(1-\tfrac{s}{2}\right)-\left(1-2s\right)}{2s}=\frac{\tfrac{3s}{2}}{2s}=\frac{3}{4}\;\checkmark$$

==Ortalama değer tuttu== — payın bütün terimleri bu tek kontrole giriyor.
[/CEVAP]

[SORU] **24.** &nbsp; $f(t)=|\sin t|$ &nbsp;($0\le t<\pi$) &nbsp;ve&nbsp; $f(t+\pi)=f(t)$
[CEVAP]
Bu fonksiyon **doğrultulmuş sinüs (rectified sine)** adını alır; elektronikte tam dalga doğrultucunun çıkışıdır.

**Adım 1 — Periyot $\pi$, mutlak değer düşüyor.** $[0,\pi]$ aralığında $\sin t\ge 0$ olduğundan $|\sin t|=\sin t$:

$$\mathcal{L}\{f\}=\frac{1}{1-e^{-\pi s}}\int_{0}^{\pi}e^{-st}\sin t\,dt$$

**Adım 2 — İntegrali al.** Standart sonuç:

$$\int e^{-st}\sin t\,dt=\frac{e^{-st}\left(-s\sin t-\cos t\right)}{s^{2}+1}$$

Üst uçta ($t=\pi$): &nbsp;$\sin=0$, $\cos=-1$ &nbsp;$\Rightarrow$&nbsp; $\dfrac{e^{-\pi s}}{s^{2}+1}$

Alt uçta ($t=0$): &nbsp;$\sin=0$, $\cos=1$ &nbsp;$\Rightarrow$&nbsp; $\dfrac{-1}{s^{2}+1}$

$$\int_{0}^{\pi}e^{-st}\sin t\,dt=\frac{1+e^{-\pi s}}{s^{2}+1}$$

**Adım 3 — Birleştir.**

$$\mathcal{L}\{f\}=\frac{1+e^{-\pi s}}{\left(s^{2}+1\right)\left(1-e^{-\pi s}\right)}$$

**Adım 4 — Hiperbolik biçime sok.** Pay ve paydayı $e^{\pi s/2}$ ile çarpalım:

$$\frac{1+e^{-\pi s}}{1-e^{-\pi s}}=\frac{e^{\pi s/2}+e^{-\pi s/2}}{e^{\pi s/2}-e^{-\pi s/2}}=\coth\frac{\pi s}{2}$$

$$\boxed{\;\mathcal{L}\{|\sin t|\}=\frac{1}{s^{2}+1}\coth\frac{\pi s}{2}\;}$$

**Doğrulama (ortalama değer).** $|\sin t|$'nin bir periyottaki ortalaması:

$$\frac{1}{\pi}\int_{0}^{\pi}\sin t\,dt=\frac{1}{\pi}\Big[-\cos t\Big]_{0}^{\pi}=\frac{2}{\pi}$$

$s\to 0$ iken $\coth x\approx\dfrac{1}{x}$ olduğundan $\coth\dfrac{\pi s}{2}\approx\dfrac{2}{\pi s}$:

$$\lim_{s\to 0}s\,\mathcal{L}\{f\}=\lim_{s\to 0}\frac{s}{s^{2}+1}\cdot\frac{2}{\pi s}=\frac{2}{\pi}\;\checkmark$$

==Fizikte bilinen sonuç:== doğrultulmuş sinüsün ortalaması, tepe değerinin $\tfrac{2}{\pi}\approx 0{,}637$ katıdır.

[KUTU]
**$\coth$ biçimi neden tercih edilir?** İki sebeple:

1. **Daha kısa** ve tabloların standart gösterimi budur.
2. ==Davranışı okunabilir:== $s\to 0$ iken $\coth\tfrac{\pi s}{2}\to\infty$ gibi görünse de $\tfrac{1}{s^{2}+1}$ ile çarpımı sonlu kalır ve ortalama değeri verir; $s\to\infty$ iken $\coth\to 1$, yani dönüşüm $\tfrac{1}{s^{2}+1}$'e yaklaşır — tek bir yarım dalganın dönüşümü.

Periyodik fonksiyonların dönüşümünde $\coth$, $\tanh$ ve $\dfrac{1}{1-e^{-Ps}}$ biçimleri sık çıkar; hepsi ==sonsuz tekrarın cebirsel özeti==.
[/KUTU]
[/CEVAP]

[KUTU]
**Setin tamamı bitti.** Bütün sorular çözülü: tek numaralılar kitabın cevap anahtarıyla, çift numaralılar ==tanımdan integral ve ortalama değer kontrolü== ile doğrulanmıştır.

**Periyodik fonksiyonlarda iki refleks:**

1. **Bir periyodu integralle, sonra $\dfrac{1}{1-e^{-Ps}}$ ile çarp.** Bütün iş tek bir sonlu integraldir.
2. **Ortalama değerle sına.** $\displaystyle\lim_{s\to 0}sF(s)$ periyottaki ortalamayı vermeli. Bu, cevabın tamamını tek satırda kontrol eder ve elle hesaplanması kolaydır.
[/KUTU]

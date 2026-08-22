---
id: egzersizler-basamak-2
menu: 4.4 Egzersizler — Trigonometrik ve Periyodik
tip: sorular
baslik: 4.4 &nbsp;Egzersizler — Trigonometrik Öteleme ve Periyodik Fonksiyonlar
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

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**20.** &nbsp; $f(t)=\begin{cases}0, & 0<t<\frac{3\pi}{2}\\ \cos t, & \frac{3\pi}{2}<t<\frac{9\pi}{2}\\ 0, & t>\frac{9\pi}{2}\end{cases}$

**22.** &nbsp; $f(t)=\begin{cases}t, & 0\le t<1\\ 1, & 1\le t<2\end{cases}$ &nbsp;ve&nbsp; $f(t+2)=f(t)$

**24.** &nbsp; $f(t)=|\sin t|$ &nbsp;($0\le t<\pi$) &nbsp;ve&nbsp; $f(t+\pi)=f(t)$

[KUTU]
**İpuçları.** 20 → soru 19 ile aynı yapıda; $\cos$ da $2\pi$ periyotlu olduğundan $\frac{9\pi}{2}-\frac{3\pi}{2}=3\pi$ farkına dikkat edin, bu $2\pi$'nin katı **değildir**, o yüzden ikinci terimde $\cos$'u yeniden kaydırmanız gerekir.

22 → soru 23 ile aynı yol, ama ikinci parça sabit olduğu için integral daha kolay; sadeleşme bu kez olmayabilir.

24 → **doğrultulmuş sinüs (rectified sine)**. $P=\pi$ alın ve $\int_{0}^{\pi}e^{-st}\sin t\,dt$ integralini hesaplayın; $\sin$ bu aralıkta zaten pozitif olduğundan mutlak değer düşer.
[/KUTU]

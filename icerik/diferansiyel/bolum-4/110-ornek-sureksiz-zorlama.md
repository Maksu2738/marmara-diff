---
id: ornek-sureksiz-zorlama
menu: 4.4 Örnek — Süreksiz Zorlamalı Problem
tip: ornek
baslik: 4.4 &nbsp;Çözümlü Örnek — Süreksiz Zorlamalı Başlangıç Değer Problemi
---

Bölüm 4.4'ün bütün araçları burada bir araya geliyor. ==Bu, Laplace yönteminin klasik yöntemlere karşı en belirgin üstünlük gösterdiği problem türüdür.==

[SORU] **Örnek 9.36.** &nbsp; Aşağıdaki başlangıç değer problemini çözünüz:
$$y''+2y'+5y=h(t),\qquad h(t)=\begin{cases}1, & 0<t<\pi\\ 0, & t>\pi\end{cases}$$
$$y(0)=0,\qquad y'(0)=0$$
[CEVAP]
**Adım 1 — Sol tarafın dönüşümü.**

Her iki başlangıç koşulu sıfır olduğundan türev terimleri sadeleşir:

$$\mathcal{L}\{y''\}+2\mathcal{L}\{y'\}+5\mathcal{L}\{y\}=\left[s^{2}+2s+5\right]Y(s)$$

**Adım 2 — Sağ tarafın dönüşümü.**

$h$ bir dikdörtgen darbedir. Sıçrama kuralıyla ($t=0$'da $+1$, $t=\pi$'de $-1$):

$$h(t)=u_{0}(t)-u_{\pi}(t)$$

$$\mathcal{L}\{h(t)\}=\frac{1}{s}-\frac{e^{-\pi s}}{s}=\frac{1-e^{-\pi s}}{s}$$

**Adım 3 — Cebirsel denklemi çöz.**

$$\left[s^{2}+2s+5\right]Y(s)=\frac{1-e^{-\pi s}}{s}$$

$$Y(s)=\frac{1}{s\left(s^{2}+2s+5\right)}-e^{-\pi s}\cdot\frac{1}{s\left(s^{2}+2s+5\right)}$$

==İki terim de aynı $F(s)$ çarpanını içeriyor;== yalnızca ikincisinde $e^{-\pi s}$ var. Demek ki bir kez $F$'nin ters dönüşümünü bulmak yeterli.

**Adım 4 — $F(s)$'nin ters dönüşümü.**

$$F(s)=\frac{1}{s\left(s^{2}+2s+5\right)}=\frac{A}{s}+\frac{Bs+C}{s^{2}+2s+5}$$

$$1=A\left(s^{2}+2s+5\right)+(Bs+C)s$$

$s=0$: $1=5A\Rightarrow A=\frac{1}{5}$. &nbsp; $s^{2}$: $0=A+B\Rightarrow B=-\frac{1}{5}$. &nbsp; $s^{1}$: $0=2A+C\Rightarrow C=-\frac{2}{5}$.

$$F(s)=\frac{1}{5}\cdot\frac{1}{s}-\frac{1}{5}\cdot\frac{s+2}{s^{2}+2s+5}$$

Paydayı tamkareye tamamlayalım: $s^{2}+2s+5=(s+1)^{2}+4$. Payı da öteleyelim: $s+2=(s+1)+1$.

$$\frac{s+2}{(s+1)^{2}+4}=\frac{s+1}{(s+1)^{2}+4}+\frac{1}{2}\cdot\frac{2}{(s+1)^{2}+4}$$

Tablo 9.1'in 1, 12 ve 11 numaralı girdileriyle:

$$f(t)=\frac{1}{5}-\frac{1}{5}e^{-t}\cos 2t-\frac{1}{10}e^{-t}\sin 2t$$

**Adım 5 — İkinci terimi öteleyerek yaz.**

$(9.86)$ ile $a=\pi$:

$$y=f(t)-u_{\pi}(t)\,f(t-\pi)$$

**Adım 6 — Parçalı biçimde ver.**

**$0<t<\pi$ için** $u_{\pi}=0$, geriye yalnızca $f(t)$ kalır:

$$y=\frac{1}{5}\left[1-e^{-t}\left(\cos 2t+\frac{1}{2}\sin 2t\right)\right]$$

**$t>\pi$ için** $f(t)-f(t-\pi)$ hesaplanır. Burada ==$2\pi$ periyodikliği işi kolaylaştırıyor:==

$$\cos 2(t-\pi)=\cos(2t-2\pi)=\cos 2t,\qquad \sin 2(t-\pi)=\sin 2t$$

$$f(t-\pi)=\frac{1}{5}-\frac{1}{5}e^{\pi}e^{-t}\cos 2t-\frac{1}{10}e^{\pi}e^{-t}\sin 2t$$

Farkı alalım — ==sabit $\frac15$ terimleri birbirini götürüyor:==

$$y=\frac{e^{-t}}{5}\left[\left(e^{\pi}-1\right)\cos 2t+\frac{e^{\pi}-1}{2}\sin 2t\right]$$

**Sonuç:**

$$\boxed{\;y=\begin{cases}\dfrac{1}{5}\left[1-e^{-t}\left(\cos 2t+\dfrac{1}{2}\sin 2t\right)\right], & 0<t<\pi\\[2ex] \dfrac{e^{-t}}{5}\left[\left(e^{\pi}-1\right)\cos 2t+\dfrac{e^{\pi}-1}{2}\sin 2t\right], & t>\pi\end{cases}\;}$$

[KUTU]
**Çözümün fiziksel okunuşu.** $0<t<\pi$ aralığında sistem sabit bir kuvvetle sürülüyor; çözüm $\frac{1}{5}$ değerine doğru sönümlü salınımla yaklaşıyor.

$t=\pi$'de zorlama kesiliyor. Ondan sonra sabit terim kayboluyor ve geriye ==yalnızca sönümlü serbest salınım== kalıyor: $e^{-t}$ çarpanı genliği sürekli küçültüyor, sistem sıfıra dönüyor.

$e^{\pi}-1$ katsayısı, kesilme anında sistemde biriken enerjinin ölçüsüdür.
[/KUTU]

[KUTU]
**Klasik yöntemle çözülseydi ne olurdu?** İki ayrı problem kurmak gerekirdi:

1. $0<t<\pi$ için $y''+2y'+5y=1$, verilen başlangıç koşullarıyla.
2. $t>\pi$ için $y''+2y'+5y=0$, **birinci çözümün $t=\pi$'deki değeri ve türevi** yeni başlangıç koşulu olarak.

Yani bağlantı koşullarını elle taşımak gerekirdi. ==Laplace bunu kendiliğinden yaptı;== $u_{\pi}(t)f(t-\pi)$ terimi süreklilik ve türev sürekliliğini otomatik sağlıyor.

Zorlama iki değil de beş parçalı olsaydı, klasik yöntemde beş ayrı problem ve dört bağlantı adımı gerekirdi; Laplace'ta yalnızca birkaç $u_{a}$ terimi daha eklenirdi.
[/KUTU]

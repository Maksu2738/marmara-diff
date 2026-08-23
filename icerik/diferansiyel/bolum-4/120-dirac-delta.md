---
id: laplace-dirac-delta
menu: 4.4 Dirac Delta Fonksiyonu
tip: konu
baslik: 4.4 &nbsp;Dirac Delta Fonksiyonu ve Anlık Etkiler
defterde: yok
---

Şimdiye kadarki zorlama terimleri bir süre boyunca etkiliydi. Peki **anlık** bir etki nasıl modellenir — bir çekiç darbesi, ani bir voltaj sıçraması?

Böyle bir etkiyi doğrudan yazamayız; ==bir limit süreciyle yaklaşırız.==

### Yaklaşan fonksiyon

$\varepsilon$ küçük bir pozitif sayı, $t_{0}>0$ ve $t_{0}-\varepsilon>0$ olmak üzere şu fonksiyonu tanımlayalım:

$$\delta_{\varepsilon}(t-t_{0})=\frac{1}{2\varepsilon}\left[u_{t_{0}-\varepsilon}(t)-u_{t_{0}+\varepsilon}(t)\right] \tag{9.97}$$

Bu, $t_{0}$ etrafında **genişliği $2\varepsilon$, yüksekliği $\frac{1}{2\varepsilon}$** olan bir dikdörtgen darbedir.

==Kritik özellik: alanı her zaman $1$'dir.==

$$\int_{-\infty}^{\infty}\delta_{\varepsilon}(t-t_{0})\,dt=\int_{t_{0}-\varepsilon}^{t_{0}+\varepsilon}\frac{1}{2\varepsilon}\,dt=\frac{1}{2\varepsilon}\cdot 2\varepsilon=1 \tag{9.98}$$

[KUTU]
**Fiziksel karşılığı.** Yay üzerindeki kütle gibi mekanik bir sistemde bu integral, $\delta_{\varepsilon}$ kuvvetinin ilgili aralıktaki **toplam impulsudur (impulse)**.

$\varepsilon$ küçüldükçe darbe daralıp yükselir, ama ==impuls sabit kalır.== Yani "aynı toplam etkiyi giderek daha kısa sürede uygulamak" demektir.
[/KUTU]

### Limit

$\varepsilon\to 0$ alalım:

$$\delta(t-t_{0})=\lim_{\varepsilon\to 0}\delta_{\varepsilon}(t-t_{0}) \tag{9.99}$$

Limitte $\delta(t-t_{0})$, $t=t_{0}$ dışında sıfırdır ve $t=t_{0}$'da "sonsuza gider". $(9.98)$ her $\varepsilon>0$ için geçerli olduğundan alan da korunur.

[KUTU]
**TANIM.** **Dirac delta fonksiyonu**, şu iki özellikle karakterize edilir:

$$\delta(t-t_{0})=\begin{cases}\infty, & t=t_{0}\\ 0, & t\neq t_{0}\end{cases} \tag{9.100}$$

$$\int_{-\infty}^{\infty}\delta(t-t_{0})\,dt=1 \tag{9.101}$$
[/KUTU]

**Önemli uyarı.** $\delta(t-t_{0})$, ==temel analiz anlamında bir fonksiyon değildir.== Hiçbir sıradan fonksiyon tek bir noktada sonsuz olup sonlu bir integrale sahip olamaz. Bu, **genelleştirilmiş fonksiyon (generalized function)** denen daha geniş bir sınıfın örneğidir.

---

### Dönüşümü

Önce yaklaşan fonksiyonun dönüşümünü bulalım. $t_{0}-\varepsilon>0$ varsayımı altında $\delta_{\varepsilon}$, THEoREM 9.1'in hipotezlerini sağlar:

$$\mathcal{L}\left\{\delta_{\varepsilon}(t-t_{0})\right\}=\frac{1}{2\varepsilon}\int_{t_{0}-\varepsilon}^{t_{0}+\varepsilon}e^{-st}\,dt=\frac{1}{2\varepsilon}\cdot\frac{1}{-s}\left[e^{-s(t_{0}+\varepsilon)}-e^{-s(t_{0}-\varepsilon)}\right]$$

$e^{-st_{0}}$ ortak çarpanını çekelim:

$$\mathcal{L}\left\{\delta_{\varepsilon}(t-t_{0})\right\}=\frac{e^{-st_{0}}\left(e^{s\varepsilon}-e^{-s\varepsilon}\right)}{2\varepsilon s} \tag{9.102}$$

$\delta$ ise THEoREM 9.1'in hipotezlerini **sağlamaz**; dönüşümünün varlığı garanti değildir. Tanımı bir limit olduğu için dönüşümünü de ==biçimsel olarak== limitle alırız:

$$\mathcal{L}\left\{\delta(t-t_{0})\right\}=\lim_{\varepsilon\to 0}\frac{e^{-st_{0}}\left(e^{s\varepsilon}-e^{-s\varepsilon}\right)}{2\varepsilon s}$$

Parantez içi $2\sinh(s\varepsilon)$'dir, dolayısıyla ifade $e^{-st_{0}}\dfrac{\sinh(s\varepsilon)}{s\varepsilon}$ olur. $\varepsilon\to 0$ iken $\dfrac{\sinh u}{u}\to 1$:

$$\boxed{\;\mathcal{L}\left\{\delta(t-t_{0})\right\}=e^{-st_{0}}\;} \tag{9.103}$$

[KUTU]
**Bu sonucun sadeliği dikkat çekicidir.** Birim basamağın dönüşümü $\frac{e^{-as}}{s}$ iken, delta'nınki yalnızca $e^{-as}$. ==Aradaki $\frac{1}{s}$ farkı tesadüf değil:== delta, basamağın türevidir. $\mathcal{L}\{f'\}=s\mathcal{L}\{f\}-f(0)$ kuralıyla türev alınca $s$ ile çarpılır, payda gider.
[/KUTU]

---

[SORU] **Örnek 9.37.** &nbsp; Aşağıdaki başlangıç değer problemini çözünüz:
$$y''+2y'+5y=\delta\!\left(t-\tfrac{\pi}{2}\right),\qquad y(0)=1,\quad y'(0)=-1$$
[CEVAP]
**Adım 1 — Dönüşümü al.**

$$\mathcal{L}\{y''\}=s^{2}Y(s)-s\,y(0)-y'(0)=s^{2}Y(s)-s+1$$

$$\mathcal{L}\{y'\}=s\,Y(s)-1$$

$(9.103)$ ile sağ taraf $e^{-\pi s/2}$:

$$s^{2}Y-s+1+2(sY-1)+5Y=e^{-\pi s/2}$$

$$\left(s^{2}+2s+5\right)Y=e^{-\pi s/2}+s+1$$

**Adım 2 — $Y(s)$'yi ayır.**

$$Y(s)=\underbrace{\frac{s+1}{s^{2}+2s+5}}_{\text{başlangıç koşullarından}}+\underbrace{\frac{e^{-\pi s/2}}{s^{2}+2s+5}}_{\text{darbeden}}$$

**Adım 3 — Birinci terim.**

$s^{2}+2s+5=(s+1)^{2}+2^{2}$ olduğundan pay zaten $s+1$; Tablo 9.1, 12 numara ($a=1$, $b=2$):

$$\mathcal{L}^{-1}\left\{\frac{s+1}{(s+1)^{2}+2^{2}}\right\}=e^{-t}\cos 2t$$

**Adım 4 — İkinci terim.**

$$F(s)=\frac{1}{s^{2}+2s+5}=\frac{1}{2}\cdot\frac{2}{(s+1)^{2}+2^{2}}\;\Longrightarrow\;f(t)=\frac{1}{2}e^{-t}\sin 2t$$

$(9.86)$ ile $a=\frac{\pi}{2}$:

$$\mathcal{L}^{-1}\left\{e^{-\pi s/2}F(s)\right\}=u_{\pi/2}(t)\,f\!\left(t-\tfrac{\pi}{2}\right)=u_{\pi/2}(t)\cdot\frac{1}{2}e^{-(t-\pi/2)}\sin 2\!\left(t-\tfrac{\pi}{2}\right)$$

Sinüsü sadeleştirelim — ==$\sin(2t-\pi)=-\sin 2t$:==

$$=-\frac{1}{2}e^{\pi/2}e^{-t}\sin 2t\cdot u_{\pi/2}(t)$$

**Sonuç:**

$$\boxed{\;y=\begin{cases}e^{-t}\cos 2t, & 0<t<\dfrac{\pi}{2}\\[2ex] e^{-t}\left(\cos 2t-\dfrac{e^{\pi/2}}{2}\sin 2t\right), & t>\dfrac{\pi}{2}\end{cases}\;}$$

[KUTU]
**Darbenin etkisi nasıl görünüyor?** $t<\frac{\pi}{2}$ aralığında sistem serbest sönümlü salınım yapıyor. $t=\frac{\pi}{2}$'de darbe geliyor ve ==çözüme yeni bir salınım bileşeni ekliyor.==

$y$'nin kendisi $t=\frac{\pi}{2}$'de süreklidir (çünkü $\sin 2t$ orada sıfırdır), ama **türevi sıçrar** — darbenin anlık momentum aktarması budur. Süreksiz basamak zorlamada ($4.4$'teki Örnek 9.36) hem $y$ hem $y'$ sürekliydi; delta ile $y'$ süreksiz hâle geliyor.

==Genel kural: $\delta$ zorlaması, çözümün bir mertebe düşük türevinde sıçrama yaratır.==
[/KUTU]

---

[CLAUDE] Delta, basamağın türevidir — ve bu her şeyi kolaylaştırır
$$\mathcal{L}\left\{\delta(t-a)\right\}=e^{-as}$$

==Tablodaki en basit girdi.== Sebebi de basit: $\delta$, birim basamağın türevidir, türev almak da $s$ ile çarpmaktır:

$$s\cdot\frac{e^{-as}}{s}=e^{-as}$$

**Buradan çıkan kısayol.** Bir sisteme $\delta(t-a)$ uyguladığınızdaki cevap, ==aynı sisteme $u_{a}(t)$ uyguladığınızdaki cevabın türevidir.== Basamak yanıtını zaten hesapladıysanız darbe yanıtı için yeni bir problem çözmeyin, türevini alın.

**Fiziksel okuma:** $\delta$ anlık bir vuruştur (çekiç darbesi, ani voltaj). Etkisi $y$'yi değil, $y'$'yü sıçratır — ==konum sürekli kalır, hız bir anda değişir.== Süreksiz zorlamada ise sıçrayan $y''$ idi. Bu üçlü sıralamayı aklınızda tutun: basamak $y''$'yü, delta $y'$'yü kırar.
[/CLAUDE]

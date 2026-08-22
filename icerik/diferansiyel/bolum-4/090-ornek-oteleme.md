---
id: ornek-oteleme
menu: 4.4 Örnekler — Ötelenmiş Biçime Sokma
tip: ornek
baslik: 4.4 &nbsp;Çözümlü Örnekler — Fonksiyonu $t-a$ Cinsinden Yazmak
---

THEoREM 9.9'u uygulamanın önündeki tek engel şudur: fonksiyonun ==$f(t-a)$ biçiminde== yazılmış olması gerekir. Verilen ifade genelde bu biçimde değildir; önce dönüştürmek gerekir.

[SORU] **Örnek 9.31.** &nbsp; Aşağıdaki fonksiyonun Laplace dönüşümünü bulunuz:
$$g(t)=\begin{cases}0, & 0<t<5\\ t-3, & t>5\end{cases}$$
[CEVAP]
**Adım 1 — İfadeyi $t-5$ cinsinden yaz.**

Sıçrama $t=5$'te olduğuna göre $a=5$'tir. Ama elimizdeki ifade $t-3$; ==$t-5$ cinsinden değil.== Şöyle düzenleyelim:

$$t-3=(t-5)+2$$

$$g(t)=\begin{cases}0, & 0<t<5\\ (t-5)+2, & t>5\end{cases}$$

**Adım 2 — Hangi $f$ olduğunu tanı.**

Bu artık $(9.78)$ biçimindedir:

$$g(t)=u_{5}(t)\,f(t-5),\qquad f(t)=t+2$$

==Püf noktası şu:== $f$'yi bulmak için, $(t-5)+2$ ifadesinde $t-5$ yerine $t$ yazarsınız; geriye $t+2$ kalır.

**Adım 3 — $F(s)$'yi hesapla.**

$$F(s)=\mathcal{L}\{t+2\}=\mathcal{L}\{t\}+2\mathcal{L}\{1\}=\frac{1}{s^{2}}+\frac{2}{s}$$

**Adım 4 — THEoREM 9.9'u uygula ($a=5$).**

$$\boxed{\;\mathcal{L}\{g(t)\}=e^{-5s}\left(\frac{1}{s^{2}}+\frac{2}{s}\right)\;}$$

[KUTU]
**Neden doğrudan $\mathcal{L}\{t-3\}$ yazamıyoruz?** Çünkü THEoREM 9.9'un istediği şey, $t>a$ bölgesindeki ifadenin ==$a$ noktasından itibaren yeniden başlayan== bir fonksiyon olarak görülmesidir. $t-3$ ifadesi $t=5$'te $2$ değerindedir, $0$ değil; bu yüzden "kaydırılmış $t$" değil, "kaydırılmış $t+2$"dir.
[/KUTU]

[SORU] **Örnek 9.32.** &nbsp; Aşağıdaki fonksiyonun Laplace dönüşümünü bulunuz:
$$g(t)=\begin{cases}0, & 0<t<\frac{\pi}{2}\\ \sin t, & t>\frac{\pi}{2}\end{cases}$$
[CEVAP]
**Adım 1 — $\sin t$'yi $t-\frac{\pi}{2}$ cinsinden yaz.**

Burada cebirsel düzenleme yetmez; ==trigonometrik özdeşlik gerekir.== Toplam formülünü açalım:

$$\cos\left(t-\frac{\pi}{2}\right)=\cos t\cos\frac{\pi}{2}+\sin t\sin\frac{\pi}{2}=0+\sin t=\sin t$$

Yani her $t$ için

$$\sin t=\cos\left(t-\frac{\pi}{2}\right)$$

**Adım 2 — Ötelenmiş biçime sok.**

$$g(t)=u_{\pi/2}(t)\,f\!\left(t-\frac{\pi}{2}\right),\qquad f(t)=\cos t$$

**Adım 3 — $F(s)$ ve sonuç.**

$$F(s)=\mathcal{L}\{\cos t\}=\frac{s}{s^{2}+1}$$

$$\boxed{\;\mathcal{L}\{g(t)\}=\frac{s\,e^{-(\pi/2)s}}{s^{2}+1}\;}$$

[KUTU]
**Trigonometrik kaydırmalarda genel yol.** $\sin$ veya $\cos$ içeren bir ifadeyi $t-a$ cinsinden yazmak için toplam formüllerini kullanın:

$$\sin t=\sin\big[(t-a)+a\big]=\sin(t-a)\cos a+\cos(t-a)\sin a$$

$a=\frac{\pi}{2}$ için $\cos a=0$, $\sin a=1$ olduğundan ifade tek terime iner ve $\cos(t-a)$ kalır. ==Bu kadar temiz çıkması $\frac{\pi}{2}$'ye özgüdür;== başka bir $a$ için iki terim birden kalır ve dönüşüm iki parçalı olur.
[/KUTU]

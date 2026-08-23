---
id: egzersizler-sureksiz
menu: 4.4 Egzersizler — Süreksiz Zorlama
tip: sorular
baslik: 4.4 &nbsp;Egzersizler — Süreksiz Zorlamalı Başlangıç Değer Problemleri
---

Aşağıdaki başlangıç değer problemlerini Laplace dönüşümüyle çözünüz.

[SORU] **1.** &nbsp; $y'+2y=h(t)$, &nbsp; $h(t)=\begin{cases}4, & 0<t<6\\ 0, & t>6\end{cases}$, &nbsp; $y(0)=5$
[CEVAP]
**Adım 1 — Dönüşümler.**

$h(t)=4u_{0}(t)-4u_{6}(t)$ olduğundan $\mathcal{L}\{h\}=\dfrac{4\left(1-e^{-6s}\right)}{s}$.

$$sY-5+2Y=\frac{4\left(1-e^{-6s}\right)}{s}$$

$$Y=\frac{5}{s+2}+\underbrace{\frac{4}{s(s+2)}}_{F(s)}-e^{-6s}\underbrace{\frac{4}{s(s+2)}}_{F(s)}$$

**Adım 2 — $F(s)$'nin ters dönüşümü.**

$$\frac{4}{s(s+2)}=\frac{A}{s}+\frac{B}{s+2},\qquad 4=A(s+2)+Bs$$

$s=0$: $4=2A\Rightarrow A=2$. &nbsp; $s=-2$: $4=-2B\Rightarrow B=-2$.

$$f(t)=2-2e^{-2t}$$

**Adım 3 — Birleştir.**

$$y=5e^{-2t}+f(t)-u_{6}(t)f(t-6)$$

**$0<t<6$:** &nbsp; $y=5e^{-2t}+2-2e^{-2t}=3e^{-2t}+2$

**$t>6$:** &nbsp; $f(t-6)=2-2e^{-2(t-6)}$ olduğundan ==sabit $2$'ler götürüyor:==

$$y=3e^{-2t}+2-\left[2-2e^{-2(t-6)}\right]=3e^{-2t}+2e^{-2(t-6)}$$

$$\boxed{\;y=\begin{cases}3e^{-2t}+2, & 0<t<6\\ 3e^{-2t}+2e^{-2(t-6)}, & t>6\end{cases}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **3.** &nbsp; $y''-3y'+2y=h(t)$, &nbsp; $h(t)=\begin{cases}2, & 0<t<4\\ 0, & t>4\end{cases}$, &nbsp; $y(0)=0,\;\; y'(0)=0$
[CEVAP]
**Adım 1 — Dönüşümler.**

Başlangıç koşulları sıfır olduğundan sol taraf sade:

$$\left(s^{2}-3s+2\right)Y=\frac{2\left(1-e^{-4s}\right)}{s}$$

$s^{2}-3s+2=(s-1)(s-2)$:

$$Y=\left(1-e^{-4s}\right)\underbrace{\frac{2}{s(s-1)(s-2)}}_{F(s)}$$

**Adım 2 — $F(s)$'nin ters dönüşümü.**

$$2=A(s-1)(s-2)+Bs(s-2)+Cs(s-1)$$

$s=0$: $2=A(-1)(-2)=2A\Rightarrow A=1$

$s=1$: $2=B(1)(-1)=-B\Rightarrow B=-2$

$s=2$: $2=C(2)(1)=2C\Rightarrow C=1$

$$f(t)=1-2e^{t}+e^{2t}$$

**Adım 3 — Birleştir.**

$$y=f(t)-u_{4}(t)f(t-4)$$

**$0<t<4$:**

$$y=-2e^{t}+e^{2t}+1$$

**$t>4$:** &nbsp; $f(t-4)=1-2e^{t-4}+e^{2(t-4)}=1-2e^{-4}e^{t}+e^{-8}e^{2t}$

$$y=\left(1-2e^{t}+e^{2t}\right)-\left(1-2e^{-4}e^{t}+e^{-8}e^{2t}\right)$$

==Sabit $1$'ler götürüyor==, üstel terimler katsayı toplanıyor:

$$y=2\left(e^{-4}-1\right)e^{t}+\left(1-e^{-8}\right)e^{2t}$$

$$\boxed{\;y=\begin{cases}-2e^{t}+e^{2t}+1, & 0<t<4\\ 2\left(e^{-4}-1\right)e^{t}+\left(1-e^{-8}\right)e^{2t}, & t>4\end{cases}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[KUTU]
**Bu iki soruda tekrar eden yapı.** İkisinde de $Y(s)$ şu biçimde çıktı:

$$Y(s)=\underbrace{(\text{başlangıç koşullarından gelen})}_{e^{-as}\text{ içermez}}+\left(1-e^{-as}\right)F(s)$$

Dolayısıyla çözüm hep

$$y=(\text{başlangıç kısmı})+f(t)-u_{a}(t)f(t-a)$$

biçiminde olur. ==Tek bir $F$'nin ters dönüşümünü bulmak yeterlidir==; ikinci parça onun ötelenmişidir. Zorlama kaç parçalı olursa olsun bu yapı korunur, yalnızca $u_{a}$ terimlerinin sayısı artar.

**Sadeleşme deseni:** $t>a$ bölgesinde $f(t)$ ile $f(t-a)$'nın **sabit terimleri** her zaman birbirini götürür, çünkü ikisi de aynı sabiti içerir. Geriye yalnızca üstel/trigonometrik kısımlar kalır.
[/KUTU]

---

[SORU] **5.** &nbsp; $y''+4y'+5y=h(t)$, &nbsp; $h(t)=\begin{cases}1, & 0<t<\pi/2\\ 0, & t>\pi/2\end{cases}$, &nbsp; $y(0)=0,\;y'(0)=1$
[CEVAP]
**Adım 1 — Zorlamayı basamakla yaz.**

$$h(t)=1-u_{\pi/2}(t)\;\Longrightarrow\;\mathcal{L}\{h\}=\frac{1-e^{-\pi s/2}}{s}$$

**Adım 2 — Dönüşümü al.** $y(0)=0$, $y'(0)=1$:

$$\left(s^{2}Y-1\right)+4sY+5Y=\frac{1-e^{-\pi s/2}}{s}$$

$$\left(s^{2}+4s+5\right)Y=1+\frac{1-e^{-\pi s/2}}{s}$$

$$Y=\underbrace{\frac{1}{s^{2}+4s+5}}_{\text{başlangıç koşulundan}}+\underbrace{\frac{1}{s\left(s^{2}+4s+5\right)}}_{G(s)}\left(1-e^{-\pi s/2}\right)$$

**Adım 3 — Parçaları çevir.** Payda $s^{2}+4s+5=(s+2)^{2}+1$:

$$\mathcal{L}^{-1}\left\{\frac{1}{(s+2)^{2}+1}\right\}=e^{-2t}\sin t$$

$G(s)$ için kısmi kesirler: $\dfrac{1}{s\left(s^{2}+4s+5\right)}=\dfrac{1}{5}\left[\dfrac{1}{s}-\dfrac{s+4}{(s+2)^{2}+1}\right]$

Payı ötelersek $s+4=(s+2)+2$:

$$g(t)=\frac{1}{5}\left[1-e^{-2t}\cos t-2e^{-2t}\sin t\right]$$

**Adım 4 — Birinci aralık ($0<t<\pi/2$).**

$$y=e^{-2t}\sin t+\frac{1}{5}\left[1-e^{-2t}\cos t-2e^{-2t}\sin t\right]$$

$e^{-2t}\sin t$ katsayıları: $1-\tfrac{2}{5}=\tfrac{3}{5}$

$$\boxed{\;y=\frac{1}{5}\left[1+e^{-2t}\left(3\sin t-\cos t\right)\right],\qquad 0<t<\frac{\pi}{2}\;}$$

**Adım 5 — İkinci aralık ($t>\pi/2$).** $g(t-\pi/2)$ çıkarılacak. Ötelemeyi sadeleştirelim:

$$\cos\left(t-\tfrac{\pi}{2}\right)=\sin t,\qquad \sin\left(t-\tfrac{\pi}{2}\right)=-\cos t,\qquad e^{-2(t-\pi/2)}=e^{\pi}e^{-2t}$$

$$g\left(t-\tfrac{\pi}{2}\right)=\frac{1}{5}\left[1-e^{\pi}e^{-2t}\sin t+2e^{\pi}e^{-2t}\cos t\right]$$

Çıkarınca ==sabit terimler ($\tfrac15$) birbirini götürüyor==:

$$\boxed{\;y=\frac{e^{-2t}}{5}\Big[\left(e^{\pi}+3\right)\sin t-\left(2e^{\pi}+1\right)\cos t\Big],\qquad t>\frac{\pi}{2}\;}$$

**Doğrulama (süreklilik).** $t=\tfrac{\pi}{2}$'de $\sin t=1$, $\cos t=0$:

birinci ifade $\to \frac{1}{5}\left[1+3e^{-\pi}\right]$, &nbsp; ikinci ifade $\to \frac{e^{-\pi}}{5}\left(e^{\pi}+3\right)=\frac{1+3e^{-\pi}}{5}$ &#10003;

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **7.** &nbsp; $y''+4y=h(t)$, &nbsp; $h(t)=\begin{cases}-4t+8\pi, & 0<t<2\pi\\ 0, & t>2\pi\end{cases}$, &nbsp; $y(0)=2,\;y'(0)=0$
[CEVAP]
**Adım 1 — Zorlamayı basamakla yaz.** Kapatma terimini $t-2\pi$ cinsine sokmak gerekiyor; şanslıyız ki

$$-4t+8\pi=-4(t-2\pi)$$

$$h(t)=(-4t+8\pi)+4(t-2\pi)\,u_{2\pi}(t)$$

$$\mathcal{L}\{h\}=-\frac{4}{s^{2}}+\frac{8\pi}{s}+\frac{4e^{-2\pi s}}{s^{2}}$$

**Adım 2 — Dönüşümü al.**

$$\left(s^{2}Y-2s\right)+4Y=-\frac{4}{s^{2}}+\frac{8\pi}{s}+\frac{4e^{-2\pi s}}{s^{2}}$$

$$Y=\frac{2s}{s^{2}+4}-\frac{4}{s^{2}\left(s^{2}+4\right)}+\frac{8\pi}{s\left(s^{2}+4\right)}+\frac{4e^{-2\pi s}}{s^{2}\left(s^{2}+4\right)}$$

**Adım 3 — İki temel kısmi kesir.**

$$\frac{1}{s^{2}\left(s^{2}+4\right)}=\frac{1}{4}\left[\frac{1}{s^{2}}-\frac{1}{s^{2}+4}\right],\qquad \frac{1}{s\left(s^{2}+4\right)}=\frac{1}{4}\left[\frac{1}{s}-\frac{s}{s^{2}+4}\right]$$

Terim terim çevirelim:

$$\frac{2s}{s^{2}+4}\to 2\cos 2t,\qquad -\frac{4}{s^{2}\left(s^{2}+4\right)}\to -t+\frac{1}{2}\sin 2t,\qquad \frac{8\pi}{s\left(s^{2}+4\right)}\to 2\pi-2\pi\cos 2t$$

**Adım 4 — Birinci aralık ($0<t<2\pi$).**

$$\boxed{\;y=-t+2\pi+\frac{1}{2}\sin 2t+(2-2\pi)\cos 2t,\qquad 0<t<2\pi\;}$$

**Adım 5 — İkinci aralık ($t>2\pi$).** Son terim: $\dfrac{4}{s^{2}\left(s^{2}+4\right)}\to t-\dfrac{1}{2}\sin 2t$, ötelenmiş hâli

$$(t-2\pi)-\frac{1}{2}\sin 2(t-2\pi)=(t-2\pi)-\frac{1}{2}\sin 2t$$

($2\cdot 2\pi=4\pi$ tam iki periyot, sinüs değişmiyor.) Eklersek:

$$\left[-t+2\pi+\frac{1}{2}\sin 2t+(2-2\pi)\cos 2t\right]+\left[t-2\pi-\frac{1}{2}\sin 2t\right]$$

$$\boxed{\;y=(2-2\pi)\cos 2t,\qquad t>2\pi\;}$$

[KUTU]
**Bu sorunun güzelliği:** $t>2\pi$ bölgesinde ==doğrusal terim, sabit ve sinüs tamamen götürüyor==, geriye tek bir kosinüs kalıyor.

Fiziksel okuması şu: zorlama $t=2\pi$'de tam olarak sıfıra inecek biçimde ayarlanmış ($-4t+8\pi$ ifadesi $t=2\pi$'de sıfır). Yani sistem sarsıntısız biçimde ==serbest salınıma bırakılıyor== ve o andan sonra saf harmonik hareket yapıyor. Zorlama aniden kesilseydi geçici terimler kalırdı.
[/KUTU]

**Doğrulama.** $y(0)=0+2\pi+0+(2-2\pi)=2\;\checkmark$

$t=2\pi$'de süreklilik: birinci ifade $\to -2\pi+2\pi+0+(2-2\pi)=2-2\pi$; ikinci ifade $\to (2-2\pi)\cos 4\pi=2-2\pi$ &#10003;

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **9.** &nbsp; $y''+5y'-6y=3u_{4}(t)$, &nbsp; $y(0)=8,\;y'(0)=1$
[CEVAP]
**Adım 1 — Dönüşümü al.** Zorlama zaten basamak biçiminde: $\mathcal{L}\{3u_{4}(t)\}=\dfrac{3e^{-4s}}{s}$.

$$\left(s^{2}Y-8s-1\right)+5\left(sY-8\right)-6Y=\frac{3e^{-4s}}{s}$$

$$\left(s^{2}+5s-6\right)Y=8s+41+\frac{3e^{-4s}}{s}$$

Payda çarpanlanır: $s^{2}+5s-6=(s+6)(s-1)$

$$Y=\frac{8s+41}{(s+6)(s-1)}+\frac{3e^{-4s}}{s(s+6)(s-1)}$$

**Adım 2 — Birinci parça (başlangıç koşullarından).**

$$\frac{8s+41}{(s+6)(s-1)}=\frac{A}{s+6}+\frac{B}{s-1}$$

$s=-6$: &nbsp; $\dfrac{-48+41}{-7}=\dfrac{-7}{-7}=1\Rightarrow A=1$ &nbsp;&nbsp; $s=1$: &nbsp; $\dfrac{49}{7}=7\Rightarrow B=7$

$$\boxed{\;y=e^{-6t}+7e^{t},\qquad 0<t<4\;}$$

**Adım 3 — İkinci parça.**

$$G(s)=\frac{3}{s(s+6)(s-1)}=\frac{A}{s}+\frac{B}{s+6}+\frac{C}{s-1}$$

$s=0$: &nbsp; $3=A(6)(-1)\Rightarrow A=-\tfrac{1}{2}$

$s=-6$: &nbsp; $3=B(-6)(-7)=42B\Rightarrow B=\tfrac{1}{14}$

$s=1$: &nbsp; $3=C(1)(7)\Rightarrow C=\tfrac{3}{7}$

$$g(t)=-\frac{1}{2}+\frac{1}{14}e^{-6t}+\frac{3}{7}e^{t}$$

**Adım 4 — Ötele ve ekle.** $a=4$:

$$g(t-4)=-\frac{1}{2}+\frac{1}{14}e^{-6(t-4)}+\frac{3}{7}e^{t-4}=-\frac{1}{2}+\frac{e^{24}}{14}e^{-6t}+\frac{3e^{-4}}{7}e^{t}$$

==Buradaki $e^{24}$ ve $e^{-4}$ sabitleri ötelemeden doğuyor==: $e^{-6(t-4)}=e^{24}e^{-6t}$.

$$\boxed{\;y=\left[1+\frac{e^{24}}{14}\right]e^{-6t}+\left[7+\frac{3e^{-4}}{7}\right]e^{t}-\frac{1}{2},\qquad t>4\;}$$

**Doğrulama (süreklilik, $t=4$).** İkinci ifadeden birinciyi çıkaralım; fark tam olarak $g(t-4)$'tür ve $g(0)=-\tfrac12+\tfrac1{14}+\tfrac37=\dfrac{-7+1+6}{14}=0$ &#10003; — ==zorlama devreye girdiği anda çözüm sıçramıyor.==

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

---

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**2.** &nbsp; $3y'-5y=h(t)$, &nbsp; $h(t)=\begin{cases}0, & 0<t<6\\ 10, & t>6\end{cases}$, &nbsp; $y(0)=4$

**4.** &nbsp; $y''+5y'+6y=h(t)$, &nbsp; $h(t)=\begin{cases}6, & 0<t<2\\ 0, & t>2\end{cases}$, &nbsp; $y(0)=0,\;y'(0)=0$

**6.** &nbsp; $y''+6y'+8y=h(t)$, &nbsp; $h(t)=\begin{cases}3, & 0<t<2\pi\\ 0, & t>2\pi\end{cases}$, &nbsp; $y(0)=1,\;y'(0)=-1$

**8.** &nbsp; $y''+y=h(t)$, &nbsp; $h(t)=\begin{cases}t, & 0<t<\pi\\ \pi, & t>\pi\end{cases}$, &nbsp; $y(0)=2,\;y'(0)=3$

**10.** &nbsp; $y''+6y'+25y=25\left[u_{2}(t)-u_{4}(t)\right]$, &nbsp; $y(0)=3,\;y'(0)=-9$

**11.** &nbsp; $y'-3y=h(t)$, &nbsp; $h(t)=\begin{cases}10\sin t, & 0<t<2\pi\\ 0, & t>2\pi\end{cases}$, &nbsp; $y(0)=0$

**12.** &nbsp; $y''-y'=h(t)$, &nbsp; $h(t)=\begin{cases}4-2t, & 0\le t\le 2\\ 0, & t>2\end{cases}$, &nbsp; $y(0)=1,\;y'(0)=-2$

[KUTU]
**İpuçları.**

**2** ve **4** → soru 1 ve 3 ile aynı yapıda. 2'de zorlama sonradan **başlıyor**, yani $\mathcal{L}\{h\}=\frac{10e^{-6s}}{s}$; $(1-e^{-as})$ değil yalnız $e^{-as}$ çarpanı çıkar.

**8** → zorlama sabit değil, rampa. $h(t)=t-u_{\pi}(t)(t-\pi)$ yazın (4.4 egzersiz 13'teki doyum kalıbı).

**10** → zorlama zaten $u_{a}$ cinsinden verilmiş, dönüştürmeye gerek yok. Payda $s^{2}+6s+25=(s+3)^{2}+16$ tamkareye gider.

**12** → $h(t)=4-2t-u_{2}(t)\left[4-2t\right]$ ifadesini $t-2$ cinsinden yazın: $4-2t=-2(t-2)$, yani $h(t)=(4-2t)+2u_{2}(t)(t-2)$.

**Doğrulama.** Cevap anahtarı olmasa da her çözümü sınayabilirsiniz: bulduğunuz $y$'yi ==her iki aralıkta ayrı ayrı== denkleme koyun, ayrıca $t=a$ noktasında $y$ ve $y'$'nin sürekli olduğunu kontrol edin. Süreksiz zorlamada çözümün kendisi ve türevi süreklidir; sıçrayan yalnızca ikinci türevdir.
[/KUTU]

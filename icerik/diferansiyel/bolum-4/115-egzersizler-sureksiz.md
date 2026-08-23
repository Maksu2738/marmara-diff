---
id: egzersizler-sureksiz
menu: 4.4 Egzersizler — Süreksiz Zorlama
tip: sorular
baslik: 4.4 &nbsp;Egzersizler — Süreksiz Zorlamalı Başlangıç Değer Problemleri
defterde: yok
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

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu soruların cevabı kitabın anahtarında yok.** Çözümler bize aittir; her biri ==ikinci bir bağımsız yolla doğrulanmıştır==.

Süreksiz zorlamalı problemlerde en güçlü kontrol, çözümü ==her aralıkta ayrı ayrı denkleme geri koymaktır==. Buna ek olarak her zaman şu iki şey doğru olmalı:

$$g(0)=0\qquad\text{ve}\qquad g'(0)=0$$

Burada $g$, ötelenmiş parçanın ötelenmemiş hâlidir. ==Bu iki eşitlik, $t=a$ noktasında hem $y$'nin hem $y'$'nün sürekli olduğunu garantiler== — süreksiz zorlamada sıçrayan yalnızca $y''$'dür.
[/KUTU]

[SORU] **2.** &nbsp; $3y'-5y=h(t)$, &nbsp; $h(t)=\begin{cases}0, & 0<t<6\\ 10, & t>6\end{cases}$, &nbsp; $y(0)=4$
[CEVAP]
**Adım 1 — Zorlamayı basamak cinsinden yaz.** Zorlama sonradan **başlıyor**, o yüzden tek terim:

$$h(t)=10\,u_{6}(t)\qquad\Longrightarrow\qquad \mathcal{L}\{h\}=\frac{10e^{-6s}}{s}$$

==$(1-e^{-as})$ değil, yalnız $e^{-as}$ çarpanı çıkıyor.==

**Adım 2 — Denklemi dönüştür.**

$$3\left[sY-4\right]-5Y=\frac{10e^{-6s}}{s}\quad\Longrightarrow\quad (3s-5)Y=12+\frac{10e^{-6s}}{s}$$

$$Y(s)=\underbrace{\frac{12}{3s-5}}_{\text{başlangıç koşulu}}+\underbrace{\frac{10e^{-6s}}{s(3s-5)}}_{\text{zorlama}}$$

**Adım 3 — Birinci terim.** Katsayıyı $3$'e böl, standart biçime sok:

$$\frac{12}{3s-5}=\frac{4}{s-\tfrac{5}{3}}\quad\Longrightarrow\quad 4e^{5t/3}$$

**Adım 4 — İkinci terimin ötelenmemiş hâli.**

$$G(s)=\frac{10}{s(3s-5)}=\frac{A}{s}+\frac{B}{3s-5},\qquad 10=A(3s-5)+Bs$$

$s=0$: &nbsp; $10=-5A\Rightarrow A=-2$ &nbsp;&nbsp;&nbsp; $s=\tfrac53$: &nbsp; $10=\tfrac53 B\Rightarrow B=6$

$$G(s)=-\frac{2}{s}+\frac{6}{3s-5}=-\frac{2}{s}+\frac{2}{s-\tfrac53}\quad\Longrightarrow\quad g(t)=2e^{5t/3}-2$$

**Adım 5 — Ötele ve birleştir.**

$$\boxed{\;y(t)=\begin{cases}4e^{5t/3}, & 0<t<6\\[4pt] 4e^{5t/3}+2e^{5(t-6)/3}-2, & t>6\end{cases}\;}$$

**Doğrulama 1 — çözümü denkleme geri koy.**

$0<t<6$ için: &nbsp; $3\cdot 4\cdot\tfrac53 e^{5t/3}-5\cdot 4e^{5t/3}=20e^{5t/3}-20e^{5t/3}=0$ &#10003; &nbsp;ve&nbsp; $y(0)=4$ &#10003;

$t>6$ için: &nbsp; $y'=\tfrac{20}{3}e^{5t/3}+\tfrac{10}{3}e^{5(t-6)/3}$

$$3y'-5y=\left[20e^{5t/3}+10e^{5(t-6)/3}\right]-\left[20e^{5t/3}+10e^{5(t-6)/3}-10\right]=10\;\checkmark$$

**Doğrulama 2 — süreklilik.** $g(0)=2-2=0$ &#10003; — ==zorlama devreye girdiğinde çözüm sıçramıyor.==

[KUTU]
**Bu problemde çözüm sınırsız büyüyor.** Katsayı $-5$ değil $+5$ olduğu için kök $s=\tfrac53>0$; homojen çözüm $e^{5t/3}$ patlıyor. ==Zorlamanın getirdiği $-2$ sabiti bunun yanında görünmez kalıyor.==

Kararlı (stable) bir sistemde beklediğimiz "zorlama kesilince çözüm sabite oturur" davranışı burada **yok** — sistemin kendisi kararsız.
[/KUTU]
[/CEVAP]

[SORU] **4.** &nbsp; $y''+5y'+6y=h(t)$, &nbsp; $h(t)=\begin{cases}6, & 0<t<2\\ 0, & t>2\end{cases}$, &nbsp; $y(0)=0,\;y'(0)=0$
[CEVAP]
**Adım 1 — Pencere biçimi.**

$$h(t)=6\left[1-u_{2}(t)\right]\qquad\Longrightarrow\qquad \mathcal{L}\{h\}=\frac{6\left(1-e^{-2s}\right)}{s}$$

**Adım 2 — Dönüştür.** Başlangıç koşulları sıfır olduğu için ==homojen terim hiç yok:==

$$\left(s^{2}+5s+6\right)Y=\frac{6\left(1-e^{-2s}\right)}{s},\qquad s^{2}+5s+6=(s+2)(s+3)$$

$$Y(s)=\frac{6\left(1-e^{-2s}\right)}{s(s+2)(s+3)}$$

**Adım 3 — Ötelenmemiş parça.** $G(s)=\dfrac{6}{s(s+2)(s+3)}$; kapatma yöntemiyle (cover-up):

$s=0$: &nbsp; $\dfrac{6}{2\cdot 3}=1$ &nbsp;&nbsp;&nbsp; $s=-2$: &nbsp; $\dfrac{6}{(-2)(1)}=-3$ &nbsp;&nbsp;&nbsp; $s=-3$: &nbsp; $\dfrac{6}{(-3)(-1)}=2$

$$g(t)=1-3e^{-2t}+2e^{-3t}$$

**Adım 4 — Birleştir.** $Y=G-e^{-2s}G$ olduğundan $y(t)=g(t)-g(t-2)u_{2}(t)$; ==$t>2$'de sabit $1$'ler birbirini götürüyor:==

$$\boxed{\;y(t)=\begin{cases}1-3e^{-2t}+2e^{-3t}, & 0<t<2\\[4pt] -3e^{-2t}+2e^{-3t}+3e^{-2(t-2)}-2e^{-3(t-2)}, & t>2\end{cases}\;}$$

**Doğrulama 1 — çözümü denkleme geri koy** ($0<t<2$):

$$g'=6e^{-2t}-6e^{-3t},\qquad g''=-12e^{-2t}+18e^{-3t}$$

$$g''+5g'+6g=\underbrace{(-12+30-18)}_{0}e^{-2t}+\underbrace{(18-30+12)}_{0}e^{-3t}+6\cdot 1=6\;\checkmark$$

**Doğrulama 2 — başlangıç koşulları.** $g(0)=1-3+2=0$ &#10003; &nbsp;ve&nbsp; $g'(0)=6-6=0$ &#10003;

==Aynı iki eşitlik $t=2$'deki sürekliliği de veriyor== — ötelenen fonksiyon $g$'nin ta kendisi.

**Doğrulama 3 — son değer THEoREM'i.** Zorlama kesildikten sonra çözüm sıfıra gitmeli:

$$\lim_{s\to 0}sY(s)=\lim_{s\to 0}\frac{6\left(1-e^{-2s}\right)}{(s+2)(s+3)}=\frac{6\cdot 0}{6}=0\;\checkmark$$

==Pay $s\to 0$ iken sıfırlanıyor; pencere biçimindeki zorlamanın imzası budur.==
[/CEVAP]

[SORU] **6.** &nbsp; $y''+6y'+8y=h(t)$, &nbsp; $h(t)=\begin{cases}3, & 0<t<2\pi\\ 0, & t>2\pi\end{cases}$, &nbsp; $y(0)=1,\;y'(0)=-1$
[CEVAP]
**Adım 1 — Dönüştür.** Bu kez başlangıç koşulları sıfır değil:

$$\mathcal{L}\{y''\}=s^{2}Y-s+1,\qquad \mathcal{L}\{6y'\}=6sY-6$$

$$\left(s^{2}+6s+8\right)Y-s-5=\frac{3\left(1-e^{-2\pi s}\right)}{s}$$

$$Y(s)=\underbrace{\frac{s+5}{(s+2)(s+4)}}_{\text{başlangıç koşulları}}+\underbrace{\frac{3\left(1-e^{-2\pi s}\right)}{s(s+2)(s+4)}}_{\text{zorlama}}$$

**Adım 2 — Homojen parça.**

$$\frac{s+5}{(s+2)(s+4)}:\quad s=-2\Rightarrow\frac{3}{2},\qquad s=-4\Rightarrow\frac{1}{-2}=-\frac{1}{2}$$

$$\frac{3}{2}e^{-2t}-\frac{1}{2}e^{-4t}$$

**Adım 3 — Zorlama parçası.** $G(s)=\dfrac{3}{s(s+2)(s+4)}$:

$s=0$: &nbsp; $\dfrac{3}{8}$ &nbsp;&nbsp;&nbsp; $s=-2$: &nbsp; $\dfrac{3}{(-2)(2)}=-\dfrac{3}{4}$ &nbsp;&nbsp;&nbsp; $s=-4$: &nbsp; $\dfrac{3}{(-4)(-2)}=\dfrac{3}{8}$

$$g(t)=\frac{3}{8}-\frac{3}{4}e^{-2t}+\frac{3}{8}e^{-4t}$$

**Adım 4 — İlk aralıkta topla.**

$$\frac{3}{2}-\frac{3}{4}=\frac{3}{4},\qquad -\frac{1}{2}+\frac{3}{8}=-\frac{1}{8}$$

$$y(t)=\frac{3}{8}+\frac{3}{4}e^{-2t}-\frac{1}{8}e^{-4t}\qquad (0<t<2\pi)$$

**Adım 5 — İkinci aralık.** $g(t-2\pi)$ çıkarılır; ==sabit $\tfrac38$'ler götürür:==

$$\boxed{\;y(t)=\begin{cases}\dfrac{3}{8}+\dfrac{3}{4}e^{-2t}-\dfrac{1}{8}e^{-4t}, & 0<t<2\pi\\[10pt] \dfrac{3}{4}e^{-2t}-\dfrac{1}{8}e^{-4t}+\dfrac{3}{4}e^{-2(t-2\pi)}-\dfrac{3}{8}e^{-4(t-2\pi)}, & t>2\pi\end{cases}\;}$$

**Doğrulama 1 — çözümü denkleme geri koy** ($0<t<2\pi$):

$$y'=-\frac{3}{2}e^{-2t}+\frac{1}{2}e^{-4t},\qquad y''=3e^{-2t}-2e^{-4t}$$

$$y''+6y'+8y=\underbrace{(3-9+6)}_{0}e^{-2t}+\underbrace{(-2+3-1)}_{0}e^{-4t}+8\cdot\frac{3}{8}=3\;\checkmark$$

**Doğrulama 2 — başlangıç koşulları.** $y(0)=\dfrac{3+6-1}{8}=1$ &#10003; &nbsp;ve&nbsp; $y'(0)=-\dfrac32+\dfrac12=-1$ &#10003;

**Doğrulama 3 — süreklilik.** $g(0)=\dfrac{3}{8}-\dfrac{3}{4}+\dfrac{3}{8}=0$ &#10003;; &nbsp;$g'(t)=\dfrac32 e^{-2t}-\dfrac32 e^{-4t}$ olduğundan $g'(0)=0$ &#10003;

[KUTU]
**$2\pi$ burada özel bir sayı değil.** Trigonometrik zorlamalarda $2\pi$ görünce "tam periyot, sadeleşir" refleksi doğrudur; ==burada çözüm tamamen üstel olduğu için hiçbir sadeleşme olmaz.==

Nitekim $e^{-2(t-2\pi)}=e^{4\pi}e^{-2t}$ yazılabilir ve ikinci aralık şu biçime de sokulabilir:

$$y=\left[\frac{3}{4}+\frac{3}{4}e^{4\pi}\right]e^{-2t}-\left[\frac{1}{8}+\frac{3}{8}e^{8\pi}\right]e^{-4t}$$

**Ama bu biçim tercih edilmez:** $e^{8\pi}\approx 10^{10}$ gibi devasa bir katsayı yazıp onu $e^{-4t}$ ile çarpmak, ==hem elle hesapta hem bilgisayarda sayısal hataya davetiye çıkarır.== Cevabı $t-2\pi$ cinsinden bırakmak doğru alışkanlıktır.
[/KUTU]
[/CEVAP]

[SORU] **8.** &nbsp; $y''+y=h(t)$, &nbsp; $h(t)=\begin{cases}t, & 0<t<\pi\\ \pi, & t>\pi\end{cases}$, &nbsp; $y(0)=2,\;y'(0)=3$
[CEVAP]
Zorlama sabit değil, ==doyuma giden bir rampa (saturating ramp)==: önce doğrusal büyüyor, sonra $\pi$ değerinde sabitleniyor.

**Adım 1 — Rampayı basamakla ifade et.** Doğrusal büyümeyi $t=\pi$'de durdurmak için, o andan itibaren ters eğimli bir rampa eklenir:

$$h(t)=t-(t-\pi)\,u_{\pi}(t)$$

==İkinci terim zaten $t-\pi$ cinsinden yazılmış durumda==, ötelemek için ek iş gerekmiyor:

$$\mathcal{L}\{h\}=\frac{1}{s^{2}}-\frac{e^{-\pi s}}{s^{2}}=\frac{1-e^{-\pi s}}{s^{2}}$$

**Adım 2 — Dönüştür.**

$$\left(s^{2}+1\right)Y-2s-3=\frac{1-e^{-\pi s}}{s^{2}}$$

$$Y(s)=\frac{2s+3}{s^{2}+1}+\frac{1-e^{-\pi s}}{s^{2}\left(s^{2}+1\right)}$$

**Adım 3 — Ötelenmemiş parça.** Bu ayrışma ezberlenmeye değer:

$$\frac{1}{s^{2}\left(s^{2}+1\right)}=\frac{1}{s^{2}}-\frac{1}{s^{2}+1}\quad\Longrightarrow\quad g(t)=t-\sin t$$

**Kontrol:** ortak paydada $\dfrac{\left(s^{2}+1\right)-s^{2}}{s^{2}\left(s^{2}+1\right)}=\dfrac{1}{s^{2}\left(s^{2}+1\right)}$ &#10003;

**Adım 4 — Birleştir.**

$$y(t)=2\cos t+3\sin t+\left(t-\sin t\right)-\Big[(t-\pi)-\sin(t-\pi)\Big]u_{\pi}(t)$$

Burada ==$\sin(t-\pi)=-\sin t$== olduğundan köşeli parantez $t>\pi$ için $(t-\pi)+\sin t$'ye dönüşür. Sadeleştirince:

$$\boxed{\;y(t)=\begin{cases}t+2\cos t+2\sin t, & 0<t<\pi\\[4pt] \pi+2\cos t+\sin t, & t>\pi\end{cases}\;}$$

==Sonuç şaşırtıcı derecede sade== — $\pi$ ötelemesi sinüsü işaret değiştirdiği için terimler toplanıp tek bir $\sin t$ bıraktı.

**Doğrulama 1 — çözümü denkleme geri koy.**

$0<t<\pi$: &nbsp; $y''=-2\cos t-2\sin t$, &nbsp; $y''+y=t$ &#10003; (trigonometrik terimler götürüyor, geriye $t$ kalıyor)

$t>\pi$: &nbsp; $y''=-2\cos t-\sin t$, &nbsp; $y''+y=\pi$ &#10003;

**Doğrulama 2 — başlangıç koşulları.** $y(0)=0+2+0=2$ &#10003;; &nbsp;$y'=1-2\sin t+2\cos t$ &nbsp;$\Rightarrow$&nbsp; $y'(0)=1+2=3$ &#10003;

**Doğrulama 3 — $t=\pi$'de süreklilik.** ==İki ifade birbirinden bağımsız yazıldığı için bu gerçek bir sınav:==

$$y(\pi^{-})=\pi-2,\qquad y(\pi^{+})=\pi-2\;\checkmark$$

$$y'(\pi^{-})=1-0-2=-1,\qquad y'(\pi^{+})=-2\sin\pi+\cos\pi=-1\;\checkmark$$

[KUTU]
**Doyan rampa kalıbı.** Bir zorlama $t=a$'da doğrusal artmayı bırakıp sabitleniyorsa:

$$h(t)=\underbrace{mt}_{\text{rampa}}-\underbrace{m(t-a)u_{a}(t)}_{\text{eğimi iptal eden ters rampa}}$$

==İkinci terim eğimi sıfırlar, ama biriken değeri korur.== Aynı fikirle üçgen darbe, trapez zorlama ve kademeli artışların hepsi yazılabilir. Dönüşümü de her zaman $\dfrac{m\left(1-e^{-as}\right)}{s^{2}}$ biçimindedir.
[/KUTU]
[/CEVAP]

[SORU] **10.** &nbsp; $y''+6y'+25y=25\left[u_{2}(t)-u_{4}(t)\right]$, &nbsp; $y(0)=3,\;y'(0)=-9$
[CEVAP]
Zorlama ==zaten basamak cinsinden verilmiş==; ilk adımı atlıyoruz.

**Adım 1 — Dönüştür.**

$$\mathcal{L}\{\text{sağ taraf}\}=\frac{25\left(e^{-2s}-e^{-4s}\right)}{s}$$

$$\mathcal{L}\{y''\}=s^{2}Y-3s+9,\qquad \mathcal{L}\{6y'\}=6sY-18$$

$$\left(s^{2}+6s+25\right)Y-3s-9=\frac{25\left(e^{-2s}-e^{-4s}\right)}{s}$$

**Adım 2 — Paydayı tamkareye tamamla.** $\Delta=36-100<0$:

$$s^{2}+6s+25=(s+3)^{2}+16$$

$$Y(s)=\frac{3s+9}{(s+3)^{2}+16}+\frac{25\left(e^{-2s}-e^{-4s}\right)}{s\left[(s+3)^{2}+16\right]}$$

**Adım 3 — Homojen parça.** ==Pay tam olarak $3(s+3)$ çıkıyor==, saf kosinüs:

$$\frac{3(s+3)}{(s+3)^{2}+16}\quad\Longrightarrow\quad 3e^{-3t}\cos 4t$$

**Adım 4 — Zorlama parçası.** $G(s)=\dfrac{25}{s\left(s^{2}+6s+25\right)}=\dfrac{A}{s}+\dfrac{Bs+C}{s^{2}+6s+25}$

$s=0$: &nbsp; $A=\dfrac{25}{25}=1$. Paydaları eşitleyip $25=\left(s^{2}+6s+25\right)+s(Bs+C)$ yazalım:

$s^{2}$ katsayısı: &nbsp; $0=1+B\Rightarrow B=-1$ &nbsp;&nbsp;&nbsp; $s^{1}$ katsayısı: &nbsp; $0=6+C\Rightarrow C=-6$

$$G(s)=\frac{1}{s}-\frac{s+6}{(s+3)^{2}+16}=\frac{1}{s}-\frac{s+3}{(s+3)^{2}+16}-\frac{3}{4}\cdot\frac{4}{(s+3)^{2}+16}$$

$$g(t)=1-e^{-3t}\left[\cos 4t+\frac{3}{4}\sin 4t\right]$$

**Adım 5 — İki öteleme, üç aralık.** $y=3e^{-3t}\cos 4t+g(t-2)u_{2}(t)-g(t-4)u_{4}(t)$; kısaca $G_{a}(t)=e^{-3(t-a)}\left[\cos 4(t-a)+\tfrac34\sin 4(t-a)\right]$ yazalım:

$$\boxed{\;y(t)=\begin{cases}3e^{-3t}\cos 4t, & 0<t<2\\[4pt] 3e^{-3t}\cos 4t+1-G_{2}(t), & 2<t<4\\[4pt] 3e^{-3t}\cos 4t-G_{2}(t)+G_{4}(t), & t>4\end{cases}\;}$$

==Üçüncü aralıkta sabit $1$'ler götürüyor== — zorlama kapandığı için sistemin oturacağı sabit değer de ortadan kalkıyor.

**Doğrulama 1 — çözümü denkleme geri koy** ($0<t<2$, sağ taraf sıfır). Karakteristik kökler

$$s=\frac{-6\pm\sqrt{-64}}{2}=-3\pm 4i$$

olduğundan $e^{-3t}\cos 4t$ zaten ==homojen denklemin çözümüdür==; $3$ ile çarpımı da öyle &#10003;

**Doğrulama 2 — başlangıç koşulları.** $y(0)=3$ &#10003;

$$y'=3e^{-3t}\left[-3\cos 4t-4\sin 4t\right]\quad\Longrightarrow\quad y'(0)=-9\;\checkmark$$

**Doğrulama 3 — her iki ötelemede süreklilik.** $g(0)=1-\left[1+0\right]=0$ &#10003;. Türev için:

$$g'(t)=3e^{-3t}\left[\cos 4t+\frac{3}{4}\sin 4t\right]-e^{-3t}\left[-4\sin 4t+3\cos 4t\right]=\frac{25}{4}e^{-3t}\sin 4t$$

$g'(0)=0$ &#10003; — ==hem $t=2$ hem $t=4$'te $y$ ve $y'$ sürekli.==

**Doğrulama 4 — son değer THEoREM'i.**

$$\lim_{s\to 0}sY(s)=\underbrace{\frac{0\cdot 9}{25}}_{\text{homojen}}+\underbrace{\frac{25\left(1-1\right)}{25}}_{\text{zorlama}}=0\;\checkmark$$

Zorlama sonlu süreli bir darbe olduğu için ==çözüm eninde sonunda sıfıra sönüyor.==

[KUTU]
**$g'(t)=\tfrac{25}{4}e^{-3t}\sin 4t$ sonucu rastlantı değil.** $G(s)$'nin türev karşılığı $sG(s)-g(0)=sG(s)$ idi:

$$sG(s)=\frac{25}{s^{2}+6s+25}=\frac{25}{4}\cdot\frac{4}{(s+3)^{2}+16}$$

Bunun ters dönüşümü doğrudan $\dfrac{25}{4}e^{-3t}\sin 4t$. ==Yani türevi elle almak yerine dönüşüm düzleminde $s$ ile çarpmak yeterliydi== — türev THEoREM'inin pratik kullanımı budur.
[/KUTU]
[/CEVAP]

---

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Sıraya alındı.==

**11.** &nbsp; $y'-3y=h(t)$, &nbsp; $h(t)=\begin{cases}10\sin t, & 0<t<2\pi\\ 0, & t>2\pi\end{cases}$, &nbsp; $y(0)=0$

**12.** &nbsp; $y''-y'=h(t)$, &nbsp; $h(t)=\begin{cases}4-2t, & 0\le t\le 2\\ 0, & t>2\end{cases}$, &nbsp; $y(0)=1,\;y'(0)=-2$

[KUTU]
**İpuçları.**

**11** → $h(t)=10\sin t\left[1-u_{2\pi}(t)\right]$. Buradaki kolaylık şu: ==$\sin t$'nin periyodu $2\pi$ olduğundan $\sin t=\sin(t-2\pi)$==, yani ötelenmiş terimi $t-2\pi$ cinsinden yazmak için açı toplama formülü gerekmez. Dönüşüm doğrudan $\dfrac{10\left(1-e^{-2\pi s}\right)}{s^{2}+1}$ olur.

**12** → Zorlama azalan bir rampa. $4-2t=-2(t-2)$ olduğuna dikkat edin; böylece

$$h(t)=(4-2t)+2\,u_{2}(t)\,(t-2)$$

yazılır ve ikinci terim zaten $t-2$ cinsindedir. Payda $s^{2}-s=s(s-1)$ çarpanlanıyor, ==kısmi kesirlerde $\dfrac{1}{s^{2}}$ terimi de çıkacağı için üç bilinmeyenli sistem kurun.==

**Doğrulama.** İkisinde de çözümü ==her aralıkta ayrı ayrı== denkleme koyun ve $g(0)=g'(0)=0$ kontrolünü yapın.
[/KUTU]

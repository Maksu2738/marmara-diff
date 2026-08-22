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

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**2.** &nbsp; $3y'-5y=h(t)$, &nbsp; $h(t)=\begin{cases}0, & 0<t<6\\ 10, & t>6\end{cases}$, &nbsp; $y(0)=4$

**4.** &nbsp; $y''+5y'+6y=h(t)$, &nbsp; $h(t)=\begin{cases}6, & 0<t<2\\ 0, & t>2\end{cases}$, &nbsp; $y(0)=0,\;y'(0)=0$

**8.** &nbsp; $y''+y=h(t)$, &nbsp; $h(t)=\begin{cases}t, & 0<t<\pi\\ \pi, & t>\pi\end{cases}$, &nbsp; $y(0)=2,\;y'(0)=3$

**10.** &nbsp; $y''+6y'+25y=25\left[u_{2}(t)-u_{4}(t)\right]$, &nbsp; $y(0)=3,\;y'(0)=-9$

**12.** &nbsp; $y''-y'=h(t)$, &nbsp; $h(t)=\begin{cases}4-2t, & 0\le t\le 2\\ 0, & t>2\end{cases}$, &nbsp; $y(0)=1,\;y'(0)=-2$

[KUTU]
**İpuçları.**

**2** ve **4** → soru 1 ve 3 ile aynı yapıda. 2'de zorlama sonradan **başlıyor**, yani $\mathcal{L}\{h\}=\frac{10e^{-6s}}{s}$; $(1-e^{-as})$ değil yalnız $e^{-as}$ çarpanı çıkar.

**8** → zorlama sabit değil, rampa. $h(t)=t-u_{\pi}(t)(t-\pi)$ yazın (4.4 egzersiz 13'teki doyum kalıbı).

**10** → zorlama zaten $u_{a}$ cinsinden verilmiş, dönüştürmeye gerek yok. Payda $s^{2}+6s+25=(s+3)^{2}+16$ tamkareye gider.

**12** → $h(t)=4-2t-u_{2}(t)\left[4-2t\right]$ ifadesini $t-2$ cinsinden yazın: $4-2t=-2(t-2)$, yani $h(t)=(4-2t)+2u_{2}(t)(t-2)$.

**Doğrulama.** Cevap anahtarı olmasa da her çözümü sınayabilirsiniz: bulduğunuz $y$'yi ==her iki aralıkta ayrı ayrı== denkleme koyun, ayrıca $t=a$ noktasında $y$ ve $y'$'nin sürekli olduğunu kontrol edin. Süreksiz zorlamada çözümün kendisi ve türevi süreklidir; sıçrayan yalnızca ikinci türevdir.
[/KUTU]

---
id: ornek-seri-bdp
menu: 5.3 Örnek — Başlangıç Değer Problemi
tip: ornek
baslik: 5.3 &nbsp;Çözümlü Örnek — Seri Yöntemiyle Başlangıç Değer Problemi
---

[SORU] **Örnek 5.5.** &nbsp; Aşağıdaki başlangıç değer problemini kuvvet serisi yöntemiyle çözünüz:
$$(x^{2}-1)y''+3xy'+xy=0,\qquad y(0)=4,\qquad y'(0)=6$$
[CEVAP]
**Adım 1 — Hangi nokta etrafında seri arayacağımıza karar ver.**

Normalleştirilmiş biçime geçersek $y''+\dfrac{3x}{x^{2}-1}y'+\dfrac{x}{x^{2}-1}y=0$ olur; paydalar $x=\pm 1$'de sıfırlanır. Yani ==$x=\pm 1$ dışındaki bütün noktalar adi noktadır.==

Başlangıç koşulları $x=0$'da verildiği için $x_{0}=0$ seçeriz ve $x$ kuvvetlerinde çözüm ararız:

$$y=\sum_{n=0}^{\infty}c_{n}x^{n},\qquad y'=\sum_{n=1}^{\infty}nc_{n}x^{n-1},\qquad y''=\sum_{n=2}^{\infty}n(n-1)c_{n}x^{n-2}$$

[KUTU]
**$x_{0}$ neden başlangıç noktası seçilir?** Koşullar $x=0$'da verildiği için, $y(0)$ ve $y'(0)$ doğrudan $c_{0}$ ve $c_{1}$'i belirler. Başka bir $x_{0}$ seçilseydi koşulları uygulamak için serinin o noktadaki değerini hesaplamak gerekirdi — gereksiz zorluk.
[/KUTU]

**Adım 2 — Denkleme yerleştir.**

$$\sum_{n=2}^{\infty}n(n-1)c_{n}x^{n}-\sum_{n=2}^{\infty}n(n-1)c_{n}x^{n-2}+3\sum_{n=1}^{\infty}nc_{n}x^{n}+\sum_{n=0}^{\infty}c_{n}x^{n+1}=0$$

**Adım 3 — İkinci ve dördüncü toplamda indeks kaydır.**

İkincide $n\to n+2$, dördüncüde $n\to n-1$:

$$\sum_{n=2}^{\infty}n(n-1)c_{n}x^{n}-\sum_{n=0}^{\infty}(n+2)(n+1)c_{n+2}x^{n}+3\sum_{n=1}^{\infty}nc_{n}x^{n}+\sum_{n=1}^{\infty}c_{n-1}x^{n}=0$$

**Adım 4 — Ortak aralık $n\ge 2$; dışarıdakileri aç ve topla.**

$$-2c_{2}+\left(c_{0}+3c_{1}-6c_{3}\right)x+\sum_{n=2}^{\infty}\Big[-(n+2)(n+1)c_{n+2}+n(n+2)c_{n}+c_{n-1}\Big]x^{n}=0$$

Toplamın içindeki $c_{n}$ katsayısı şöyle sadeleşti:

$$n(n-1)+3n=n^{2}-n+3n=n^{2}+2n=n(n+2)$$

**Adım 5 — Katsayıları sıfıra eşitle.**

$$-2c_{2}=0,\qquad c_{0}+3c_{1}-6c_{3}=0$$

$$-(n+2)(n+1)c_{n+2}+n(n+2)c_{n}+c_{n-1}=0,\quad n\ge 2$$

Buradan

$$c_{2}=0,\qquad c_{3}=\frac{c_{0}}{6}+\frac{c_{1}}{2}$$

ve özyineleme formülü:

$$\boxed{\,c_{n+2}=\frac{n(n+2)c_{n}+c_{n-1}}{(n+1)(n+2)},\quad n\ge 2\,}$$

**Adım 6 — Katsayıları sırayla hesapla.**

$n=2$ için ($c_{2}=0$ olduğunu kullanarak):

$$c_{4}=\frac{2\cdot 4\cdot c_{2}+c_{1}}{3\cdot 4}=\frac{8c_{2}+c_{1}}{12}=\frac{1}{12}c_{1}$$

$n=3$ için:

$$c_{5}=\frac{3\cdot 5\cdot c_{3}+c_{2}}{4\cdot 5}=\frac{15c_{3}}{20}=\frac{3}{4}c_{3}=\frac{3}{4}\left(\frac{c_{0}}{6}+\frac{c_{1}}{2}\right)=\frac{c_{0}}{8}+\frac{3c_{1}}{8}$$

**Adım 7 — Genel çözümü yaz.**

$$y=c_{0}+c_{1}x+\left(\frac{c_{0}}{6}+\frac{c_{1}}{2}\right)x^{3}+\frac{c_{1}}{12}x^{4}+\left(\frac{c_{0}}{8}+\frac{3c_{1}}{8}\right)x^{5}+\dots$$

$c_{0}$ ve $c_{1}$ parantezine ayırırsak:

$$y=c_{0}\left(1+\frac{1}{6}x^{3}+\frac{1}{8}x^{5}+\dots\right)+c_{1}\left(x+\frac{1}{2}x^{3}+\frac{1}{12}x^{4}+\frac{3}{8}x^{5}+\dots\right)$$

**Adım 8 — Başlangıç koşullarını uygula.**

$y(0)=4$ koşulunu yazarsak, $x=0$'da birinci parantez $1$, ikincisi $0$ verir:

$$c_{0}=4$$

Türevi alalım:

$$y'=c_{0}\left(\frac{1}{2}x^{2}+\frac{5}{8}x^{4}+\dots\right)+c_{1}\left(1+\frac{3}{2}x^{2}+\frac{1}{3}x^{3}+\frac{15}{8}x^{4}+\dots\right)$$

$y'(0)=6$ koşulunu yazarsak, $x=0$'da birinci parantez $0$, ikincisi $1$ verir:

$$c_{1}=6$$

**Adım 9 — Sonuç.**

$$y=4\left(1+\frac{1}{6}x^{3}+\frac{1}{8}x^{5}+\dots\right)+6\left(x+\frac{1}{2}x^{3}+\frac{1}{12}x^{4}+\frac{3}{8}x^{5}+\dots\right)$$

Terimleri birleştirirsek:

$$\boxed{\;y=4+6x+\frac{11}{3}x^{3}+\frac{1}{2}x^{4}+\frac{11}{4}x^{5}+\dots\;}$$

**Ara işlem kontrolü.** $x^{3}$ katsayısı $\dfrac{4}{6}+\dfrac{6}{2}=\dfrac{2}{3}+3=\dfrac{11}{3}$; $x^{4}$ katsayısı $\dfrac{6}{12}=\dfrac{1}{2}$; $x^{5}$ katsayısı $\dfrac{4}{8}+\dfrac{18}{8}=\dfrac{22}{8}=\dfrac{11}{4}$. ==$x^{2}$ terimi yoktur, çünkü $c_{2}=0$ çıkmıştı.==

[SORU] **Örnek 5.6.** &nbsp; Aynı denklemde başlangıç koşulları $x=0$ yerine $x=2$'de verilseydi ne değişirdi: $(x^{2}-1)y''+3xy'+xy=0$, $y(2)=4$, $y'(2)=6$?
[CEVAP]
Başlangıç değerleri $x=2$'de verildiği için ==$x-2$ kuvvetlerinde== çözüm aranır:

$$y=\sum_{n=0}^{\infty}c_{n}(x-2)^{n}$$

$x_{0}=2$ noktası adi noktadır (tekil noktalar yalnızca $x=\pm 1$), dolayısıyla THEoREM 5.1 bu biçimde lineer bağımsız iki çözümün varlığını garantiler.

**Yöntem aynıdır, tek fark değişken kaymasıdır.** Uygulamada iki yol vardır:

1. Serileri doğrudan $x-2$ kuvvetlerinde yazıp denklemdeki $x$'li katsayıları da $x=(x-2)+2$ yazarak $x-2$ cinsine çevirmek.
2. $t=x-2$ dönüşümü yapıp denklemi $t$ cinsinden yeniden yazmak, $t=0$ etrafında çözmek ve sonunda $t=x-2$ geri koymak.

İkinci yol hesabı sadeleştirir, çünkü problem tanıdık "sıfır etrafında seri" biçimine döner.

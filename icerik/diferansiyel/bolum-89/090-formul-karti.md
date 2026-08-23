---
id: formul-karti
menu: ★ Formül Kartı
tip: konu
rozet: Kart
baslik: ★ &nbsp;Formül Kartı — Vize Sonrası Tek Sayfada
---

Sınavdan önceki gece bakılacak sayfa. Türetme yok, ==yalnız kullanılacak formüller==. Her başlığın yanında ilgili bölüme bağlantı var.

[KUTU]
**Bölüm 2'nin karşılığı zaten vardı** (<a href="#ozet-birinci-mertebe">★ Özet: Beş Denklem Tipi</a>). Bu kart onun vize sonrası devamıdır: Cauchy-Euler, Laplace, seri yöntemleri ve özel denklemler.
[/KUTU]

---

### Cauchy-Euler &nbsp;<span style="font-weight:400;font-size:0.85rem;">(<a href="#bolum-4-5">3.4</a>)</span>

**Tanıma:** her terim $x^{k}y^{(k)}$ biçiminde — $x$'in üssü = türev mertebesi.

$x=e^{s}$, &nbsp;$s=\ln x$ &nbsp;dönüşümüyle sabit katsayılıya iner. Hocanın hazır formülleri:

$$y'=\frac{y^{!}}{x},\qquad y''=\frac{1}{x^{2}}\left[y^{!!}-y^{!}\right],\qquad y'''=\frac{1}{x^{3}}\left[y^{!!!}-3y^{!!}+2y^{!}\right]$$

Genel kalıp &nbsp;($D=\tfrac{d}{ds}$): &nbsp; $x^{n}y^{(n)}=D(D-1)(D-2)\cdots\big(D-(n-1)\big)y$

==Başlangıç koşulları $x$ cinsindendir==: önce $x$'e dön, sonra koşulları uygula.

---

### Laplace — temel dönüşümler &nbsp;<span style="font-weight:400;font-size:0.85rem;">(<a href="#laplace-tanim">4.1</a>)</span>

<div class="tablo-sar">
<table>
<tr><th>$f(t)$</th><th>$\mathcal{L}\{f\}$</th><th>$f(t)$</th><th>$\mathcal{L}\{f\}$</th></tr>
<tr><td>$1$</td><td>$\dfrac{1}{s}$</td><td>$\sin bt$</td><td>$\dfrac{b}{s^{2}+b^{2}}$</td></tr>
<tr><td>$t^{n}$</td><td>$\dfrac{n!}{s^{n+1}}$</td><td>$\cos bt$</td><td>$\dfrac{s}{s^{2}+b^{2}}$</td></tr>
<tr><td>$e^{at}$</td><td>$\dfrac{1}{s-a}$</td><td>$\sinh bt$</td><td>$\dfrac{b}{s^{2}-b^{2}}$</td></tr>
<tr><td>$t^{n}e^{at}$</td><td>$\dfrac{n!}{(s-a)^{n+1}}$</td><td>$\cosh bt$</td><td>$\dfrac{s}{s^{2}-b^{2}}$</td></tr>
<tr><td>$e^{at}\sin bt$</td><td>$\dfrac{b}{(s-a)^{2}+b^{2}}$</td><td>$e^{at}\cos bt$</td><td>$\dfrac{s-a}{(s-a)^{2}+b^{2}}$</td></tr>
<tr><td>$u_{a}(t)$</td><td>$\dfrac{e^{-as}}{s}$</td><td>$\delta(t-a)$</td><td>$e^{-as}$</td></tr>
</table>
</div>

**En sık unutulan:** $\dfrac{1}{s^{2}+9}$ karşılığı $\sin 3t$ **değil**, $\tfrac{1}{3}\sin 3t$'dir. Payı tabloya uydurun.

---

### Laplace — THEoREM'ler &nbsp;<span style="font-weight:400;font-size:0.85rem;">(<a href="#laplace-yuksek-turev">4.1</a>)</span>

$$\mathcal{L}\{f'\}=s\mathcal{L}\{f\}-f(0)$$
$$\mathcal{L}\{f''\}=s^{2}\mathcal{L}\{f\}-s\,f(0)-f'(0)$$
$$\mathcal{L}\{f^{(n)}\}=s^{n}\mathcal{L}\{f\}-s^{n-1}f(0)-s^{n-2}f'(0)-\cdots-f^{(n-1)}(0)$$

**Birinci öteleme** &nbsp;($e^{at}$ ile çarp): &nbsp; $\mathcal{L}\{e^{at}f(t)\}=F(s-a)$

**$t^{n}$ ile çarp:** &nbsp; $\mathcal{L}\{t^{n}f(t)\}=(-1)^{n}F^{(n)}(s)$

**İkinci öteleme** &nbsp;<span style="font-size:0.85rem;">(<a href="#laplace-ikinci-oteleme">4.4</a>)</span>: &nbsp; $\mathcal{L}\{u_{a}(t)g(t-a)\}=e^{-as}G(s)$ &nbsp;ve tersi&nbsp; $\mathcal{L}^{-1}\{e^{-as}G(s)\}=g(t-a)u_{a}(t)$

**Konvolüsyon** &nbsp;<span style="font-size:0.85rem;">(<a href="#laplace-konvolusyon">4.2</a>)</span>: &nbsp; $\mathcal{L}^{-1}\{FG\}=\displaystyle\int_{0}^{t}f(\tau)g(t-\tau)\,d\tau$

---

### Laplace ile BDP &nbsp;<span style="font-weight:400;font-size:0.85rem;">(<a href="#laplace-dd-cozumu">4.3</a>)</span>

**Üç adım:** dönüşümü al → $Y(s)$'yi yalnız bırak → ters dönüşümü al.

İkinci mertebe için hocanın hazır kalıbı — $a_{2}y''+a_{1}y'+a_{0}y=b(t)$, $y(0)=c_{0}$, $y'(0)=c_{1}$:

$$\boxed{\;Y(s)=\frac{F(s)+\Big[a_{2}\left(s\,c_{0}+c_{1}\right)+a_{1}c_{0}\Big]}{a_{2}s^{2}+a_{1}s+a_{0}}\;}$$

==Payda her zaman karakteristik polinomdur.== Tutmuyorsa dönüşüm adımında hata var.

**Ters dönüşüm refleksleri:**

- Payda çarpanlanıyor → kısmi kesirler, örtme yöntemi
- Payda $s^{2}+bs+c$ çarpanlanmıyor → **tamkareye tamamla**, sonra payı da aynı cinsten yaz: $s+\beta=(s+\tfrac{b}{2})+(\beta-\tfrac{b}{2})$
- Payda tekrarlı kare / iki çarpan → konvolüsyon
- $e^{-as}$ çarpanı var → ikinci öteleme, cevap parçalı çıkar

**Ötelemeden sonra $g(t-a)$ neye dönüşür?** Belirleyici olan $b\cdot a$ çarpımı:

<div class="tablo-sar">
<table>
<tr><th>$b\cdot a$</th><th>Sonuç</th></tr>
<tr><td>$2k\pi$</td><td>hiçbir şey değişmez</td></tr>
<tr><td>$(2k+1)\pi$</td><td>$\sin$ ve $\cos$ işaret çevirir</td></tr>
<tr><td>çeyrek periyodun tek katı</td><td>$\sin$ ile $\cos$ yer değiştirir</td></tr>
<tr><td>başka</td><td>açı toplama formülü yazılmalı</td></tr>
</table>
</div>

Üstel çarpanda öteleme **asla** sadeleşmez: $e^{-c(t-a)}$ olarak kalır.

---

### Kuvvet serisi &nbsp;<span style="font-weight:400;font-size:0.85rem;">(<a href="#seri-temel">5.1-5.3</a>)</span>

**Akış:** $x_{0}$ adi nokta mı? → $y=\sum c_{n}x^{n}$ koy → indisleri hizala → katsayıları eşitle → indirgeme bağıntısı → ilk terimler.

$$y=\sum_{n=0}^{\infty}c_{n}x^{n},\qquad y'=\sum_{n=1}^{\infty}n c_{n}x^{n-1},\qquad y''=\sum_{n=0}^{\infty}(n+1)(n+2)c_{n+2}x^{n}$$

**İndis kaydırma:** &nbsp; $\displaystyle\sum_{n=0}^{\infty}c_{n}x^{n+k}=\sum_{n=k}^{\infty}c_{n-k}x^{n}$

**Adım aralığına bakın:** bağıntı $c_{n+2}\leftrightarrow c_{n}$ ise çözüm **çift/tek** diye ikiye ayrılır; $c_{n+2}\leftrightarrow c_{n-1}$ ise (Airy) üsleri $3k$ ve $3k+1$ olan iki aile çıkar.

---

### Frobenius &nbsp;<span style="font-weight:400;font-size:0.85rem;">(<a href="#frobenius-tekil-nokta">5.6-5.7</a>)</span>

**Sınıflandırma.** $y''+P_{1}y'+P_{2}y=0$ biçimine getir:

- $x_{0}$'da $P_{1}$ ve $P_{2}$ analitik → **adi nokta**
- $(x-x_{0})P_{1}$ ve $(x-x_{0})^{2}P_{2}$ analitik → **düzgün tekil nokta**
- değilse → düzensiz tekil nokta

**Yöntem.** $y=(x-x_{0})^{r}\displaystyle\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n}$, &nbsp;$c_{0}\neq 0$

En düşük kuvvetin katsayısından **belirtici denklem (indicial equation)** çıkar; kökleri $r_{1}\ge r_{2}$.

<div class="tablo-sar">
<table>
<tr><th>$r_{1}-r_{2}$</th><th>İkinci çözüm</th></tr>
<tr><td>tam sayı değil</td><td>$r_{2}$ ile aynı yöntem — logaritma yok</td></tr>
<tr><td>pozitif tam sayı</td><td>logaritma <em>çıkabilir</em> ($C=0$ olabilir)</td></tr>
<tr><td>$0$ (eşit kökler)</td><td>logaritma <strong>kesin</strong> vardır</td></tr>
</table>
</div>

---

### Özel denklemler &nbsp;<span style="font-weight:400;font-size:0.85rem;">(<a href="#ozel-dd">6</a>)</span>

<div class="tablo-sar">
<table>
<tr><th>Ad</th><th>Denklem</th><th>Anahtar</th></tr>
<tr><td><a href="#ozel-dd-airy">Airy</a></td><td>$y''-xy=0$</td><td>$c_{n+2}=\dfrac{c_{n-1}}{(n+1)(n+2)}$, &nbsp;$c_{2}=0$</td></tr>
<tr><td><a href="#ozel-dd-hermite">Hermite</a></td><td>$y''-2xy'+\lambda y=0$</td><td>$a_{n+2}=\dfrac{2n-\lambda}{(n+1)(n+2)}a_{n}$</td></tr>
<tr><td><a href="#ozel-dd-bessel">Bessel</a></td><td>$x^{2}y''+xy'+\left(x^{2}-p^{2}\right)y=0$</td><td>indis: $r=\pm p$</td></tr>
<tr><td>Legendre</td><td>$\left(1-x^{2}\right)y''-2xy'+\ell(\ell+1)y=0$</td><td>—</td></tr>
</table>
</div>

**Hermite'te kesilme:** $\lambda=2n$ ise seri $x^{n}$'de biter ve polinom olur. $H_{0}=1$, $H_{1}=2x$, $H_{2}=4x^{2}-2$, $H_{3}=8x^{3}-12x$.

**Airy'nin geldiği yer:** $y''+Q(x)y=0$ denkleminde $Q(x_{0})=0$ olan **dönüm noktası** civarında, $z=-\alpha^{1/3}(x-x_{0})$ ile $\dfrac{d^{2}y}{dz^{2}}-zy=0$ çıkar. $z<0$ salınım, $z>0$ üstel.

---

### Sabit katsayılı — hatırlatma &nbsp;<span style="font-weight:400;font-size:0.85rem;">(<a href="#bolum-4-2">3.2-3.3</a>)</span>

Yardımcı denklem $am^{2}+bm+c=0$:

<div class="tablo-sar">
<table>
<tr><th>Kökler</th><th>Çözüm</th></tr>
<tr><td>farklı reel $m_{1},m_{2}$</td><td>$c_{1}e^{m_{1}x}+c_{2}e^{m_{2}x}$</td></tr>
<tr><td>$k$ katlı $m$</td><td>$\left(c_{1}+c_{2}x+\cdots+c_{k}x^{k-1}\right)e^{mx}$</td></tr>
<tr><td>$a\pm bi$</td><td>$e^{ax}\left(c_{1}\cos bx+c_{2}\sin bx\right)$</td></tr>
</table>
</div>

**Belirsiz katsayılar:** UC kümesi $y_{c}$'yle çakışıyorsa küme ==$x$ ile çarpılır==; çakışma bitene kadar tekrarlanır.

<p style="margin-bottom:0;">Ayrıntılı çalışma önceliği için <a href="#final-analiz">★ Final Analizi</a>'ne bakın.</p>

---

[CLAUDE] Sınavın ilk üç dakikası: boş kağıda ne dökmelisiniz
Bu kartın tamamını ezberlemeye çalışmayın. ==Kağıdı alır almaz, soruları okumadan önce== şu altı satırı boş bir köşeye yazın. Hepsi kısa, hepsi türetmeyle geri gelmez ve hepsi birden fazla soruda lazım olur:

1. $\;\mathcal{L}\{y''\}=s^{2}Y-sy_{0}-y_{0}'\;$ &nbsp;— ==işaretler ve sıra==
2. $\;\dfrac{1}{(s-a)(s-b)}\to\dfrac{e^{at}-e^{bt}}{a-b}$
3. $\;(s+k)^{2}+b^{2}\;\Rightarrow\;e^{-kt}\left[\cos bt,\ \sin bt\right]$ &nbsp;— tamkare kalıbı
4. $\;\mathcal{L}\left\{f(t-a)u_{a}\right\}=e^{-as}F(s)$ &nbsp;ve&nbsp; $\mathcal{L}\left\{\delta(t-a)\right\}=e^{-as}$
5. Cauchy-Euler: $\;x^{2}y''\to m(m-1)$, $\;xy'\to m$, $\;y\to 1$
6. Frobenius başlangıç denklemi: $\;r(r-1)+b_{0}r+c_{0}=0$

**Neden işe yarıyor:** sınav stresinde ilk kaybedilen şey ==işaretler ve indislerdir==, formüllerin fikri değil. Bunları önden yazarsanız, ilerleyen sorularda kendi el yazınızdan bakarsınız ve her seferinde yeniden hatırlamaya çalışmazsınız.

**Ezberlemeyin, türetin.** Yukarıdakiler dışında kalan her şeyin ==üç satırlık bir türetmesi var== ve o türetmeler bu sitede ilgili bölümlerde duruyor: türev THEoREM'i kısmi integrasyondan, sinüs/kosinüs dönüşümleri $\mathcal{L}\{e^{ibt}\}$'den, $t^{n}$ kuralı $s$'ye göre türevden.
[/CLAUDE]

---
id: tekrar-donusum-bulma
menu: 4.6 Bölüm Tekrarı — Dönüşüm Bulma
tip: sorular
baslik: 4.6 &nbsp;Bölüm Tekrarı — Dönüşüm Bulma (1-12)
---

Bölüm tekrarının ilk bölümü, $\mathcal{L}\{f(t)\}$ **bulma** yönündeki bütün araçları tek tek yokluyor: tanımdan integral, doğrusallık, türev THEoREM'leri, öteleme ve birim basamak gösterimi.

[KUTU]
**9-12 numaralı sorulara dikkat.** Bunlarda 1, 2 ve benzeri fonksiyonlar ==bilerek tekrar ediliyor==: aynı sonucu bir kez tanımdan integralle, bir kez de 9.4A'daki birim basamak gösterimiyle bulmanız isteniyor. İki yolun aynı cevabı vermesi, basamak gösteriminin doğru kurulduğunun en iyi kontrolüdür.
[/KUTU]

---

[SORU] **1.** &nbsp; Laplace dönüşümünün tanımını kullanarak $\mathcal{L}\{f(t)\}$'yi bulunuz: $f(t)=6$ &nbsp;($0<t<2$), &nbsp;$f(t)=3$ &nbsp;($2<t<4$), &nbsp;$f(t)=0$ &nbsp;($t>4$).
[CEVAP]
Tanım gereği integral, fonksiyonun tanımlı olduğu parçalara bölünür. $t>4$ parçası sıfır olduğundan katkı vermez:

$$\mathcal{L}\{f\}=\int_{0}^{2}6e^{-st}\,dt+\int_{2}^{4}3e^{-st}\,dt$$

$$=6\left[\frac{-e^{-st}}{s}\right]_{0}^{2}+3\left[\frac{-e^{-st}}{s}\right]_{2}^{4}=\frac{6}{s}\left(1-e^{-2s}\right)+\frac{3}{s}\left(e^{-2s}-e^{-4s}\right)$$

$e^{-2s}$ terimlerini toplayalım: $-6+3=-3$.

$$=\frac{1}{s}\left(6-3e^{-2s}-3e^{-4s}\right)=\boxed{\;\frac{3}{s}\left(2-e^{-2s}-e^{-4s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **2.** &nbsp; Tanımı kullanarak $\mathcal{L}\{f(t)\}$'yi bulunuz: $f(t)=2-t$ &nbsp;($0<t<2$), &nbsp;$f(t)=0$ &nbsp;($t>2$).
[CEVAP]
$$\mathcal{L}\{f\}=\int_{0}^{2}(2-t)e^{-st}\,dt=2\int_{0}^{2}e^{-st}\,dt-\int_{0}^{2}te^{-st}\,dt$$

**Birinci integral:**

$$2\int_{0}^{2}e^{-st}\,dt=\frac{2}{s}\left(1-e^{-2s}\right)$$

**İkinci integral** (kısmi integrasyon, $u=t$, $dv=e^{-st}dt$):

$$\int_{0}^{2}te^{-st}\,dt=\left[\frac{-t}{s}e^{-st}\right]_{0}^{2}+\frac{1}{s}\int_{0}^{2}e^{-st}\,dt=-\frac{2}{s}e^{-2s}+\frac{1}{s^{2}}\left(1-e^{-2s}\right)$$

**Çıkaralım:**

$$\mathcal{L}\{f\}=\frac{2}{s}-\frac{2}{s}e^{-2s}+\frac{2}{s}e^{-2s}-\frac{1}{s^{2}}+\frac{1}{s^{2}}e^{-2s}$$

==$\tfrac{2}{s}e^{-2s}$ terimleri götürüyor==:

$$\boxed{\;\mathcal{L}\{f\}=\frac{2}{s}+\frac{1}{s^{2}}\left(e^{-2s}-1\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **3.** &nbsp; THEoREM 9.2 ve Tablo 9.1'i kullanarak $\mathcal{L}\{\cos at\cos bt\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Çarpımı toplama çevir.** Doğrudan dönüştürülebilen bir çarpım kuralı yoktur; ==çarpımı önce toplama indirgemek gerekir==:

$$\cos A\cos B=\frac{1}{2}\Big[\cos(A-B)+\cos(A+B)\Big]$$

$$\cos at\cos bt=\frac{1}{2}\Big[\cos(a-b)t+\cos(a+b)t\Big]$$

**Adım 2 — Doğrusallık (THEoREM 9.2) ve Tablo 9.1.**

$$\mathcal{L}\{\cos at\cos bt\}=\frac{1}{2}\left[\frac{s}{s^{2}+(a-b)^{2}}+\frac{s}{s^{2}+(a+b)^{2}}\right]$$

**Adım 3 — Tek kesirde topla.**

$$=\frac{s}{2}\cdot\frac{\left[s^{2}+(a+b)^{2}\right]+\left[s^{2}+(a-b)^{2}\right]}{\left[s^{2}+(a-b)^{2}\right]\left[s^{2}+(a+b)^{2}\right]}$$

$(a+b)^{2}+(a-b)^{2}=2a^{2}+2b^{2}$ olduğundan pay $2s^{2}+2a^{2}+2b^{2}$ olur ve $2$'ler sadeleşir:

$$\boxed{\;\mathcal{L}\{\cos at\cos bt\}=\frac{s\left(s^{2}+a^{2}+b^{2}\right)}{\left[s^{2}+(a-b)^{2}\right]\left[s^{2}+(a+b)^{2}\right]}\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **4.** &nbsp; THEoREM 9.4'ü kullanarak $\mathcal{L}\{t^{3}\}$'ü $\mathcal{L}\{t\}$ cinsinden ifade ediniz.
[CEVAP]
$f(t)=t^{3}$ alalım ve THEoREM 9.4'ü $n=2$ ile kullanalım.

**Adım 1 — Gerekli değerler.**

$$f'(t)=3t^{2},\qquad f''(t)=6t,\qquad f(0)=0,\qquad f'(0)=0$$

**Adım 2 — $(9.18)$'e yerleştir.**

$$\mathcal{L}\{f''\}=s^{2}\mathcal{L}\{f\}-s\,f(0)-f'(0)=s^{2}\mathcal{L}\{t^{3}\}$$

Sol taraf $\mathcal{L}\{6t\}=6\mathcal{L}\{t\}$ olduğundan:

$$6\,\mathcal{L}\{t\}=s^{2}\,\mathcal{L}\{t^{3}\}$$

$$\boxed{\;\mathcal{L}\{t^{3}\}=\frac{6\,\mathcal{L}\{t\}}{s^{2}}\;}$$

==Her iki başlangıç değerinin sıfır olması== bu soruyu tek satıra indirdi. Kontrol: $\mathcal{L}\{t\}=\tfrac{1}{s^{2}}$ konursa $\mathcal{L}\{t^{3}\}=\tfrac{6}{s^{4}}$ çıkar — Tablo 9.1'deki $\mathcal{L}\{t^{n}\}=\tfrac{n!}{s^{n+1}}$ ile birebir aynı. &#10003;

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **5.** &nbsp; $(9.11)$, $(9.18)$ ve Tablo 9.1'i kullanarak $\mathcal{L}\{f(t)\}$'yi bulunuz: $f''+2f'+3f=e^{4t}$, &nbsp;$f(0)=5$, &nbsp;$f'(0)=6$.
[CEVAP]
$F=\mathcal{L}\{f\}$ diyelim.

**Adım 1 — Türevlerin dönüşümleri.**

$$\mathcal{L}\{f''\}=s^{2}F-5s-6,\qquad \mathcal{L}\{f'\}=sF-5$$

**Adım 2 — Denklemin dönüşümü.**

$$\left(s^{2}F-5s-6\right)+2\left(sF-5\right)+3F=\frac{1}{s-4}$$

**Adım 3 — Topla.** $F$ çarpanları $s^{2}+2s+3$; sabitler $-5s-6-10=-5s-16$:

$$\left(s^{2}+2s+3\right)F=\frac{1}{s-4}+5s+16=\frac{1+(5s+16)(s-4)}{s-4}$$

$(5s+16)(s-4)=5s^{2}-4s-64$, buna $1$ eklenir:

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{5s^{2}-4s-63}{(s-4)\left(s^{2}+2s+3\right)}\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **6.** &nbsp; $(9.11)$, $(9.18)$ ve Tablo 9.1'i kullanarak $\mathcal{L}\{f(t)\}$'yi bulunuz: $3f''-5f'=\sin 2t$, &nbsp;$f(0)=-4$, &nbsp;$f'(0)=6$.
[CEVAP]
**Adım 1 — Türevlerin dönüşümleri.** $f(0)=-4$ olduğuna, yani ==işaretin eksi olduğuna== dikkat:

$$\mathcal{L}\{f''\}=s^{2}F-s(-4)-6=s^{2}F+4s-6$$
$$\mathcal{L}\{f'\}=sF-(-4)=sF+4$$

**Adım 2 — Denklemin dönüşümü.**

$$3\left(s^{2}F+4s-6\right)-5\left(sF+4\right)=\frac{2}{s^{2}+4}$$

$$3s^{2}F+12s-18-5sF-20=\frac{2}{s^{2}+4}$$

**Adım 3 — Topla.** $F$ çarpanları $3s^{2}-5s=s(3s-5)$; sabitler $12s-38$:

$$s(3s-5)\,F=\frac{2}{s^{2}+4}-12s+38=\frac{2+(38-12s)\left(s^{2}+4\right)}{s^{2}+4}$$

$(38-12s)(s^{2}+4)=-12s^{3}+38s^{2}-48s+152$, buna $2$ eklenir:

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{-12s^{3}+38s^{2}-48s+154}{s\left(s^{2}+4\right)(3s-5)}\;}$$

[KUTU]
**&#9888; Cevap anahtarıyla uyuşmuyor — sabit terim.** Kitabın cevap anahtarı payda sabit terimi **152** veriyor:

$$\frac{-12s^{3}+38s^{2}-48s+152}{s\left(s^{2}+4\right)(3s-5)}$$

Fark tam olarak $2$'dir ve bu $2$, ==$\mathcal{L}\{\sin 2t\}=\dfrac{2}{s^{2}+4}$ kesrinin payından== gelir. Payı ortak paydaya taşırken $\dfrac{2}{s^{2}+4}$ terimi de $s^{2}+4$ ile çarpılmaz — payında $2$ olarak kalır:

$$\frac{2}{s^{2}+4}+\frac{(38-12s)\left(s^{2}+4\right)}{s^{2}+4}=\frac{2+(38-12s)\left(s^{2}+4\right)}{s^{2}+4}$$

$(38-12s)(s^{2}+4)$ çarpımının sabit terimi $38\cdot 4=152$; üzerine bu $2$ eklenince $154$ olur. Anahtardaki değer, sağ taraftaki $\sin 2t$ katkısının unutulduğunu düşündürüyor.

**Payda ve diğer üç terim anahtarla birebir aynı.** Yine de kitabı bir kontrol edin; sınavda anahtardaki biçim beklenebilir.
[/KUTU]
[/CEVAP]

[SORU] **7.** &nbsp; THEoREM 9.5 ve Tablo 9.1'i kullanarak $\mathcal{L}\{e^{3t}\,t\sin 2t\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Önce $e^{3t}$'yi bir kenara bırak, $\mathcal{L}\{t\sin 2t\}$'yi bul.**

$\mathcal{L}\{t\,f(t)\}=-F'(s)$ kuralıyla, $F(s)=\dfrac{2}{s^{2}+4}$:

$$\mathcal{L}\{t\sin 2t\}=-\frac{d}{ds}\left(\frac{2}{s^{2}+4}\right)=-2\cdot\frac{-2s}{\left(s^{2}+4\right)^{2}}=\frac{4s}{\left(s^{2}+4\right)^{2}}$$

**Adım 2 — Birinci öteleme THEoREM'ini uygula.** $e^{3t}$ ile çarpmak $s\to s-3$ ötelemesi demektir:

$$\mathcal{L}\{e^{3t}\,t\sin 2t\}=\frac{4(s-3)}{\left[(s-3)^{2}+4\right]^{2}}$$

**Adım 3 — Paydayı aç.** $(s-3)^{2}+4=s^{2}-6s+9+4=s^{2}-6s+13$:

$$\boxed{\;\mathcal{L}\{e^{3t}\,t\sin 2t\}=\frac{4(s-3)}{\left(s^{2}-6s+13\right)^{2}}\;}$$

==Sıralama önemli:== önce $t$ ile çarpma (türev), sonra $e^{3t}$ ile çarpma (öteleme). Ters sırada da aynı sonuç çıkar ama hesap uzar.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **8.** &nbsp; THEoREM 9.6'yı kullanarak $\mathcal{L}\{t^{3}\cos 3t\}$ değerini bulunuz.
[CEVAP]
$\mathcal{L}\{t^{n}f(t)\}=(-1)^{n}F^{(n)}(s)$ kuralında $n=3$, yani $-F'''(s)$ gerekiyor. $F(s)=\dfrac{s}{s^{2}+9}$; kısaltma olarak $u=s^{2}+9$.

**Birinci türev.**

$$F'=\frac{u-s(2s)}{u^{2}}=\frac{9-s^{2}}{u^{2}}$$

**İkinci türev.**

$$F''=\frac{(-2s)u^{2}-\left(9-s^{2}\right)(2u)(2s)}{u^{4}}=\frac{-2su-4s\left(9-s^{2}\right)}{u^{3}}$$

$-2s(s^{2}+9)-36s+4s^{3}=-2s^{3}-18s-36s+4s^{3}=2s^{3}-54s$:

$$F''=\frac{2s^{3}-54s}{u^{3}}$$

**Üçüncü türev.**

$$F'''=\frac{\left(6s^{2}-54\right)u^{3}-\left(2s^{3}-54s\right)\left(3u^{2}\right)(2s)}{u^{6}}=\frac{\left(6s^{2}-54\right)u-6s\left(2s^{3}-54s\right)}{u^{4}}$$

$\left(6s^{2}-54\right)\left(s^{2}+9\right)=6s^{4}-486$ &nbsp;($54s^{2}$ terimleri götürüyor), ikinci parça $-12s^{4}+324s^{2}$:

$$F'''=\frac{-6s^{4}+324s^{2}-486}{\left(s^{2}+9\right)^{4}}$$

**Sonuç.** $\mathcal{L}\{t^{3}\cos 3t\}=-F'''$:

$$\boxed{\;\mathcal{L}\{t^{3}\cos 3t\}=\frac{6\left(s^{4}-54s^{2}+81\right)}{\left(s^{2}+9\right)^{4}}\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

---

### 9-12: aynı fonksiyonlar, bu kez birim basamakla

Aşağıdaki dört soruda 9.4A'daki **birim basamak (unit step)** gösterimi kullanılacak. Kurulum kuralı hep aynıdır: ==her sıçrama noktasında, "yeni değer eksi eski değer" kadarlık bir basamak eklenir.==

[SORU] **9.** &nbsp; $f(t)=6$ &nbsp;($0<t<2$), &nbsp;$3$ &nbsp;($2<t<4$), &nbsp;$0$ &nbsp;($t>4$). &nbsp; 9.4A sonuçlarıyla $\mathcal{L}\{f(t)\}$'yi bulunuz.
[CEVAP]
**Adım 1 — Sıçramaları tablola.**

| Nokta | Eski → Yeni | Sıçrama |
|---|---|---|
| $t=0$ | $0\to 6$ | $+6$ |
| $t=2$ | $6\to 3$ | $-3$ |
| $t=4$ | $3\to 0$ | $-3$ |

**Adım 2 — Basamak gösterimi.**

$$f(t)=6\,u_{0}(t)-3\,u_{2}(t)-3\,u_{4}(t)$$

**Adım 3 — Dönüştür.** $\mathcal{L}\{u_{a}(t)\}=\dfrac{e^{-as}}{s}$:

$$\mathcal{L}\{f\}=\frac{6}{s}-\frac{3e^{-2s}}{s}-\frac{3e^{-4s}}{s}=\boxed{\;\frac{3}{s}\left(2-e^{-2s}-e^{-4s}\right)\;}$$

==1. sorunun cevabının aynısı.== Orada üç integral aldık, burada bir tablo kurup tablodan okuduk.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **10.** &nbsp; $f(t)=2-t$ &nbsp;($0<t<2$), &nbsp;$0$ &nbsp;($t>2$). &nbsp; 9.4A sonuçlarıyla $\mathcal{L}\{f(t)\}$'yi bulunuz.
[CEVAP]
**Adım 1 — Kapatma biçiminde yaz.** Fonksiyon $t=2$'de kapanıyor:

$$f(t)=(2-t)-(2-t)\,u_{2}(t)$$

**Adım 2 — İkinci terimi $(t-2)$ cinsinden yaz.** İkinci öteleme THEoREM'i, çarpanın ==$t-a$ cinsinden== olmasını ister. Burada $a=2$ ve

$$2-t=-(t-2)$$

$$f(t)=(2-t)+(t-2)\,u_{2}(t)$$

**Adım 3 — Dönüştür.**

$$\mathcal{L}\{2-t\}=\frac{2}{s}-\frac{1}{s^{2}},\qquad \mathcal{L}\{(t-2)u_{2}(t)\}=e^{-2s}\,\mathcal{L}\{t\}=\frac{e^{-2s}}{s^{2}}$$

$$\boxed{\;\mathcal{L}\{f\}=\frac{2}{s}+\frac{1}{s^{2}}\left(e^{-2s}-1\right)\;}$$

2. sorunun cevabının aynısı. &#10003;

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **11.** &nbsp; $f(t)=-1$ &nbsp;($0<t<3$), &nbsp;$2t-7$ &nbsp;($3<t<5$), &nbsp;$3$ &nbsp;($t>5$). &nbsp; $\mathcal{L}\{f(t)\}$'yi bulunuz.
[CEVAP]
**Adım 1 — Fark yöntemiyle kur.** Her düğümde "yeni ifade eksi eski ifade" eklenir:

$$f(t)=-1+\Big[(2t-7)-(-1)\Big]u_{3}(t)+\Big[3-(2t-7)\Big]u_{5}(t)$$

$$=-1+(2t-6)\,u_{3}(t)+(10-2t)\,u_{5}(t)$$

**Adım 2 — Çarpanları $t-a$ cinsine sok.** ==Bu adım atlanırsa öteleme THEoREM'i uygulanamaz.==

$$2t-6=2(t-3),\qquad 10-2t=-2(t-5)$$

$$f(t)=-1+2(t-3)\,u_{3}(t)-2(t-5)\,u_{5}(t)$$

**Adım 3 — Dönüştür.**

$$\mathcal{L}\{f\}=-\frac{1}{s}+2\cdot\frac{e^{-3s}}{s^{2}}-2\cdot\frac{e^{-5s}}{s^{2}}$$

$$\boxed{\;\mathcal{L}\{f\}=-\frac{1}{s}+\frac{2}{s^{2}}\left(e^{-3s}-e^{-5s}\right)\;}$$

**Doğrulama (süreklilik).** $t=3$'te eski ifade $-1$, yeni ifade $2(3)-7=-1$ — ==fonksiyon burada sürekli==, sıçrama yok; nitekim eklenen terim $2(t-3)$ de $t=3$'te sıfır. $t=5$'te de $2(5)-7=3$, yine sürekli. &#10003;

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **12.** &nbsp; $f(t)=0$ &nbsp;($0<t<\pi$), &nbsp;$-\sin t$ &nbsp;($t>\pi$). &nbsp; $\mathcal{L}\{f(t)\}$'yi bulunuz.
[CEVAP]
**Adım 1 — Basamak gösterimi.**

$$f(t)=-\sin t\cdot u_{\pi}(t)$$

**Adım 2 — Çarpanı $t-\pi$ cinsine sok.** Doğrudan $-\sin t$ yazamayız; öteleme THEoREM'i $g(t-\pi)$ biçimini ister. Trigonometrik özdeşlik işi çözer:

$$\sin(t-\pi)=\sin t\cos\pi-\cos t\sin\pi=-\sin t$$

Yani ==$-\sin t$ zaten $\sin(t-\pi)$'dir==:

$$f(t)=\sin(t-\pi)\,u_{\pi}(t)$$

**Adım 3 — Dönüştür.**

$$\mathcal{L}\{f\}=e^{-\pi s}\,\mathcal{L}\{\sin t\}=\boxed{\;\frac{e^{-\pi s}}{s^{2}+1}\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[KUTU]
**12. sorudaki hamle neden bu kadar temiz çıktı?** Çünkü $\sin$ fonksiyonunun periyodu $2\pi$ ve $\pi$ kadar öteleme sadece işaret çeviriyor. Kesme noktası $\pi$ yerine örneğin $\tfrac{\pi}{2}$ olsaydı $\sin t=\cos\left(t-\tfrac{\pi}{2}\right)$ yazmak gerekirdi — ==fonksiyonun kendisi değişirdi==. Sınavda kesme noktasının hangi özdeşliğe denk geldiğine bakın.
[/KUTU]

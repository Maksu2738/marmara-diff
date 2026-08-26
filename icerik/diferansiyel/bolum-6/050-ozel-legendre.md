---
id: ozel-dd-legendre
menu: 6.4 Legendre Denklemi
tip: konu
baslik: 6.4 &nbsp;Legendre Denklemi ve Legendre Polinomları
---

[KUTU]
**★ Hocanın ders notundan.** Bu bölüm doğrudan ders notunun "(D) LEGENDRE DE and LEGENDRE POLYNOMIALS" kısmını izler.

Notun kenarında bu bölümü kapsayan bir parantez ve içinde şu uyarı var:

<div style="text-align:center; font-weight:700; letter-spacing:.05em;">SINAVDA SORMAZ BUNU!</div>

Yani hoca ==bu konuyu sınavda sormayacağını== derste belirtmiş. Konu yine de kapsam içinde anlatıldığı ve Hermite ile aynı mantığı taşıdığı için burada duruyor; ==öncelik sıranızı buna göre kurun.==
[/KUTU]

**Legendre denklemi (Legendre equation)**:

$$\boxed{\;\left(1-x^{2}\right)y''-2xy'+\ell\left(\ell+1\right)y=0\;} \tag{6.140}$$

İkinci mertebeden bir denklemdir ve $\ell=0,1,2,\dots$ değerlerini alır. Parametrenin $\ell(\ell+1)$ biçiminde yazılması bir zorunluluk değil, ==kolaylıktır==: aşağıda göreceğimiz gibi seri tam bu yazımla temiz biçimde kesilir.

$(6.140)$'ı standart biçime sokarsak:

$$y''-\frac{2x}{1-x^{2}}y'+\frac{\ell(\ell+1)}{1-x^{2}}y=0$$

Katsayılar $x=\pm 1$'de patlar; dolayısıyla $x=0$ **adi noktadır** ve etrafındaki kuvvet serisi çözümü ==en az $|x|<1$ aralığında== yakınsar. Bu yüzden $x=\cos\theta$ ile açı değişkenine geçen fiziksel problemlerde aralık doğal olarak $[-1,1]$ olur.

---

### Seri çözüm

Ders notunun dediği gibi çözümler $y=\displaystyle\sum_{n}c_{n}x^{n}$ ile aranır.

[SORU] **Örnek 6.7.** &nbsp; $\left(1-x^{2}\right)y''-2xy'+\ell(\ell+1)y=0$ denkleminin $x_{0}=0$ etrafındaki seri çözümünün katsayı bağıntısını bulunuz.
[CEVAP]
**Adım 1 — Seriyi yerleştir.**

$$y=\sum_{n=0}^{\infty}c_{n}x^{n},\qquad y''=\sum_{n=0}^{\infty}(n+1)(n+2)\,c_{n+2}x^{n}$$

Diğer terimler doğrudan $x^{n}$ kuvvetlerinde çıkar:

$$-x^{2}y''=-\sum_{n=0}^{\infty}n(n-1)\,c_{n}x^{n},\qquad -2xy'=-\sum_{n=0}^{\infty}2n\,c_{n}x^{n}$$

**Adım 2 — Katsayıları eşitle.**

$$\sum_{n=0}^{\infty}\Big[(n+1)(n+2)c_{n+2}-n(n-1)c_{n}-2n\,c_{n}+\ell(\ell+1)c_{n}\Big]x^{n}=0$$

Köşeli parantezdeki $c_{n}$ çarpanını toplayalım:

$$-n(n-1)-2n+\ell(\ell+1)=-\left(n^{2}+n\right)+\ell^{2}+\ell=-\big[n(n+1)-\ell(\ell+1)\big]$$

$n(n+1)-\ell(\ell+1)$ ifadesi ==temiz biçimde çarpanlarına ayrılır:==

$$n(n+1)-\ell(\ell+1)=(n-\ell)(n+\ell+1)$$

**Adım 3 — Bağıntı.**

$$\boxed{\;c_{n+2}=\frac{(n-\ell)(n+\ell+1)}{(n+1)(n+2)}\,c_{n}\;} \tag{6.141}$$

Bağıntı ==ikişer adım atlıyor==: çift indisliler $c_{0}$'a, tek indisliler $c_{1}$'e bağlıdır. Yani çözüm yine bir **çift** ve bir **tek** parçaya ayrılır — tıpkı Hermite'te olduğu gibi.
[/CEVAP]

---

### Serinin polinoma kesilmesi

$(6.141)$'in payında $(n-\ell)$ çarpanı var. ==$n=\ell$ olduğu anda pay sıfırlanır== ve

$$c_{\ell+2}=0\;\Longrightarrow\;c_{\ell+4}=c_{\ell+6}=\dots=0$$

Zincir orada biter; geriye **derecesi tam $\ell$ olan bir polinom** kalır.

- $\ell$ **çift** ise $c_{0}$ zinciri (çift kuvvetler) kesilir
- $\ell$ **tek** ise $c_{1}$ zinciri (tek kuvvetler) kesilir

Diğer zincir sonsuz seri olarak kalır ve $x\to\pm 1$'de ıraksar; fiziksel problemlerde o parçanın katsayısı sıfır seçilir.

Kesilen parçalar, uygun sabitle çarpıldığında **Legendre polinomlarını (Legendre polynomials)** verir; $P_{\ell}(x)$ ile gösterilir.

[KUTU]
**Hermite ile birebir aynı hikâye.** İki denklemi yan yana koyun:

<div class="tablo-sar">
<table>
<tr><th></th><th>Hermite</th><th>Legendre</th></tr>
<tr><td>Denklem</td><td>$y''-2xy'+\lambda y=0$</td><td>$\left(1-x^{2}\right)y''-2xy'+\ell(\ell+1)y=0$</td></tr>
<tr><td>Bağıntının payı</td><td>$2n-\lambda$</td><td>$(n-\ell)(n+\ell+1)$</td></tr>
<tr><td>Kesilme koşulu</td><td>$\lambda=2n$</td><td>$n=\ell$, yani $\ell$ tam sayı</td></tr>
<tr><td>Sonuç</td><td>$H_{n}(x)$</td><td>$P_{\ell}(x)$</td></tr>
<tr><td>Kapalı formül</td><td>Rodrigues</td><td>Rodrigues</td></tr>
</table>
</div>

==Yöntem aynı, yalnız denklem değişiyor.== 6.2'yi anladıysanız burada yeni öğrenilecek bir teknik yok.
[/KUTU]

---

### Legendre polinomları

İlk birkaçı ders notunda verildiği gibidir:

$$P_{0}(x)=1,\qquad P_{1}(x)=x,\qquad P_{2}(x)=\frac{1}{2}\left(3x^{2}-1\right),\qquad P_{3}(x)=\frac{1}{2}\left(5x^{3}-3x\right)$$

Normalleştirme seçimi şudur: ==her $\ell$ için $P_{\ell}(1)=1$.== Dördünde de $x=1$ koyup kontrol edebilirsiniz.

**$(6.141)$ ile bağlantı ($\ell=2$).** Çift zincir: $c_{2}=\dfrac{(0-2)(0+3)}{1\cdot 2}c_{0}=-3c_{0}$ ve $c_{4}=\dfrac{(2-2)(\cdots)}{3\cdot 4}c_{2}=0$. Yani polinom $c_{0}\left(1-3x^{2}\right)$. $x=1$'de $-2c_{0}=1$ olsun diye $c_{0}=-\tfrac12$ alınır:

$$P_{2}=-\frac{1}{2}\left(1-3x^{2}\right)=\frac{1}{2}\left(3x^{2}-1\right)\;\checkmark$$

#### Rodrigues formülü

$P_{\ell}$'ler Legendre denkleminin çözümleridir ve hepsi tek bir kapalı formülden üretilebilir — **Rodrigues formülü**:

$$\boxed{\;P_{\ell}(x)=\frac{1}{2^{\ell}\,\ell!}\,\frac{d^{\ell}}{dx^{\ell}}\left(x^{2}-1\right)^{\ell}\;} \tag{6.142}$$

[SORU] **Örnek 6.8.** &nbsp; Rodrigues formülünden $P_{0}$, $P_{1}$ ve $P_{2}$'yi bulunuz.
[CEVAP]
**$\ell=0$:** Türev yok, $2^{0}\cdot 0!=1$.

$$P_{0}=\frac{1}{1}\left(x^{2}-1\right)^{0}=1$$

**$\ell=1$:** $2^{1}\cdot 1!=2$.

$$P_{1}=\frac{1}{2}\frac{d}{dx}\left(x^{2}-1\right)=\frac{1}{2}(2x)=x$$

**$\ell=2$:** $2^{2}\cdot 2!=8$ ve $\left(x^{2}-1\right)^{2}=x^{4}-2x^{2}+1$.

$$\frac{d^{2}}{dx^{2}}\left(x^{4}-2x^{2}+1\right)=\frac{d}{dx}\left(4x^{3}-4x\right)=12x^{2}-4$$

$$P_{2}=\frac{12x^{2}-4}{8}=\frac{3x^{2}-1}{2}$$

Üçü de yukarıdaki listeyle uyuşuyor. &#10003;
[/CEVAP]

**Hızlı doğrulama ($\ell=2$).** $P_{2}=\tfrac12\left(3x^{2}-1\right)$ için $P_{2}'=3x$, $P_{2}''=3$. $(6.140)$'a koyalım:

$$\left(1-x^{2}\right)(3)-2x(3x)+2\cdot 3\cdot\frac{3x^{2}-1}{2}=3-3x^{2}-6x^{2}+9x^{2}-3=0\;\checkmark$$

($\ell=2$ için $\ell(\ell+1)=6$.)

---

### Bir uygulama

Legendre polinomlarını ilk kez **Adrien-Marie Legendre** 1782'de ortaya attı; çıkış noktası gök mekaniğiydi.

<div style="text-align:center; margin:1.2em 0;">
<svg viewBox="0 0 320 140" width="100%" style="max-width:340px; height:auto;" role="img" aria-label="Güneş, Dünya ve Ay konum vektörleri">
  <line x1="30" y1="110" x2="230" y2="110" stroke="currentColor" stroke-width="1.6"/>
  <line x1="30" y1="110" x2="150" y2="35" stroke="currentColor" stroke-width="1.6"/>
  <line x1="150" y1="35" x2="230" y2="110" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/>
  <circle cx="30" cy="110" r="6" fill="currentColor"/>
  <circle cx="230" cy="110" r="4" fill="currentColor"/>
  <circle cx="150" cy="35" r="4" fill="currentColor"/>
  <text x="18" y="130" font-size="11" fill="currentColor">GÜNEŞ</text>
  <text x="212" y="130" font-size="11" fill="currentColor">AY</text>
  <text x="132" y="26" font-size="11" fill="currentColor">DÜNYA</text>
  <text x="78" y="62" font-size="12" fill="currentColor">r&#8407;</text>
  <text x="120" y="126" font-size="12" fill="currentColor">r&#8407;&#8242;</text>
  <text x="196" y="68" font-size="12" fill="currentColor">r&#8407;&#8722;r&#8407;&#8242;</text>
  <text x="46" y="102" font-size="11" fill="currentColor">&#952;</text>
  <path d="M 48 110 A 18 18 0 0 0 42 99" fill="none" stroke="currentColor" stroke-width="1.2"/>
</svg>
</div>

İki konum vektörü arasındaki uzaklığın tersi, ==aradaki açının kosinüsünün Legendre polinomları cinsinden== seriye açılır:

$$\boxed{\;\frac{1}{\left|\vec{r}-\vec{r}\,'\right|}=\sum_{\ell=0}^{\infty}\frac{r'^{\,\ell}}{r^{\,\ell+1}}\,P_{\ell}\!\left(\cos\theta\right)\;} \tag{6.143}$$

Burada $r=\left|\vec{r}\right|$, $r'=\left|\vec{r}\,'\right|$, $\theta$ ise iki vektör arasındaki açıdır ve açılım $r'<r$ iken geçerlidir.

Bu açılım, $1/r$ biçimindeki her etkileşim (kütleçekim, Coulomb) için ==uzak cismin etkisini terim terim ayırmayı== sağlar: $\ell=0$ terimi toplam kütle/yükün etkisi, $\ell=1$ dipol, $\ell=2$ kuadrupol... Legendre polinomlarının fizikteki merkezî yeri buradan gelir.

---

[CLAUDE] Legendre için pratik notlar
**1. Sınavda sorulmayacak.** Ders notundaki uyarı açık. Aşağıdakiler yine de "ne olur ne olmaz" seviyesinde kısa bilgiler.

**2. $P_{\ell}$ üretmenin en hızlı yolu bağıntıdır, Rodrigues değil.** $\ell$ büyüdükçe $\left(x^{2}-1\right)^{\ell}$'in $\ell$. türevini almak zahmetlidir. Üç terimli **Bonnet bağıntısı** çok daha hızlıdır:

$$(\ell+1)P_{\ell+1}(x)=(2\ell+1)\,x\,P_{\ell}(x)-\ell\,P_{\ell-1}(x)$$

$P_{0}=1$, $P_{1}=x$ ile başlayıp yürütün. Örneğin $\ell=1$:

$$2P_{2}=3x\cdot x-1\cdot 1\;\Longrightarrow\;P_{2}=\frac{3x^{2}-1}{2}\;\checkmark$$

Devamı: $P_{4}=\dfrac{35x^{4}-30x^{2}+3}{8}$, &nbsp; $P_{5}=\dfrac{63x^{5}-70x^{3}+15x}{8}$.

**3. İki saniyelik kontroller.**

- $P_{\ell}(1)=1$ her zaman — bulduğunuz polinomda $x=1$ koyun.
- $P_{\ell}(-x)=(-1)^{\ell}P_{\ell}(x)$: $\ell$ çiftse polinom yalnız çift kuvvetler, tekse yalnız tek kuvvetler içerir. ==Karışık dereceli bir sonuç çıktıysa hata vardır.==
- Derecesi tam $\ell$ olmalı.

**4. Diklik.** $\displaystyle\int_{-1}^{1}P_{m}(x)P_{n}(x)\,dx=0$ ($m\neq n$), $=\dfrac{2}{2n+1}$ ($m=n$). Fourier-Legendre açılımlarının dayanağı budur; Bessel'deki diklik bağıntısının Legendre karşılığıdır.
[/CLAUDE]

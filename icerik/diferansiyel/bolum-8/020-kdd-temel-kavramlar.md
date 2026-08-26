---
id: kdd-temel
menu: 8.1 Temel Kavramlar
tip: konu
baslik: 8.1 &nbsp;Kısmi Diferansiyel Denklem — Temel Kavramlar
---

### Tanım

> Bilinmeyen fonksiyonu ==birden çok değişkene bağlı== olan ve içinde bu fonksiyonun **kısmi türevleri** geçen denkleme **kısmi diferansiyel denklem (KDD)** denir.

Gösterim kısaltması yaygındır:

$$u_{x}=\frac{\partial u}{\partial x},\qquad u_{t}=\frac{\partial u}{\partial t},\qquad u_{xx}=\frac{\partial^{2}u}{\partial x^{2}},\qquad u_{xt}=\frac{\partial^{2}u}{\partial x\,\partial t}$$

Birkaç örnek:

| Denklem | Adı |
|---|---|
| $u_{t}=k\,u_{xx}$ | **Isı denklemi** (heat / diffusion equation) |
| $u_{tt}=c^{2}u_{xx}$ | **Dalga denklemi** (wave equation) |
| $u_{xx}+u_{yy}=0$ | **Laplace denklemi** |
| $u_{xx}+u_{yy}=f(x,y)$ | **Poisson denklemi** |
| $i\hbar\,u_{t}=-\dfrac{\hbar^{2}}{2m}u_{xx}+V u$ | **Schrödinger denklemi** |

---

### Mertebe ve lineerlik

**Mertebe:** denklemde geçen en yüksek kısmi türevin mertebesidir. Yukarıdakilerin hepsi ==ikinci mertebedendir.==

**Lineerlik:** 7.8'deki ölçütün aynısı. Bilinmeyen $u$ ve türevleri ==yalnız birinci kuvvetten ve birbirleriyle çarpılmadan== geçiyorsa denklem lineerdir.

- $u_{t}=k\,u_{xx}$ &nbsp;→&nbsp; lineer
- $u_{t}+u\,u_{x}=0$ &nbsp;→&nbsp; **lineer değil** ($u$ ile $u_x$ çarpılmış — Burgers denklemi)
- $u_{xx}+u_{yy}=u^{2}$ &nbsp;→&nbsp; **lineer değil**

**Homojenlik:** $u$ içermeyen bir terim varsa denklem homojen değildir. $u_{xx}+u_{yy}=0$ homojen, $u_{xx}+u_{yy}=f(x,y)$ değil.

[KUTU]
**Süperpozisyon burada da geçerli.** Denklem lineer ve homojense, $u_{1}$ ve $u_{2}$ çözümse $c_{1}u_{1}+c_{2}u_{2}$ de çözümdür (7.8).

Bu bölümün püf noktası, bunun ==sonsuz toplamlara== genişletilmesidir:

$$u=\sum_{n=1}^{\infty}c_{n}u_{n}$$

Değişkenlerine ayırma yöntemi tek tek $u_{n}$ çözümleri üretir; başlangıç koşulunu sağlatmak için ==hepsini birden== toplarız. 8.3'teki Fourier serilerine ihtiyaç duymamızın sebebi budur.
[/KUTU]

---

### ADD ile en büyük fark: keyfi sabit değil, keyfi fonksiyon

Bir ADD'nin genel çözümünde ==keyfi sabitler== vardır: $y=c_{1}e^{x}+c_{2}e^{-2x}$. Mertebe kaçsa o kadar sabit.

KDD'de durum farklıdır.

[SORU] **Örnek 8.1.** &nbsp; $u_{x}=0$ denkleminin genel çözümünü bulunuz. Burada $u=u(x,y)$'dir.
[CEVAP]
$u_{x}=0$, "$x$'e göre türev sıfır" demektir — yani $u$, ==$x$'e bağlı değildir.==

Adi durumda bunun sonucu "$u$ sabittir" olurdu. Ama burada $y$ diye ikinci bir değişken var ve $x$'e göre türev alırken $y$ ==sabit tutulur.== Dolayısıyla $u$, $y$'nin herhangi bir fonksiyonu olabilir:

$$\boxed{\;u(x,y)=g(y)\;}$$

$g$ **keyfi bir fonksiyondur** — $g(y)=y^{2}$, $g(y)=\sin y$, $g(y)=17$, hepsi çözümdür.

**Doğrulama:** $\dfrac{\partial}{\partial x}g(y)=0$ &#10003; ($g$'nin içinde $x$ yok.)
[/CEVAP]

[SORU] **Örnek 8.2.** &nbsp; $u_{xy}=0$ denkleminin genel çözümünü bulunuz.
[CEVAP]
Denklemi $\dfrac{\partial}{\partial y}\left(u_{x}\right)=0$ diye okuyalım. Örnek 8.1'in mantığıyla $u_{x}$, $y$'ye bağlı değildir:

$$u_{x}=F(x)$$

Şimdi $x$'e göre integre edelim; bu sefer ==integral sabiti $y$'nin fonksiyonu olur:==

$$u(x,y)=\int F(x)\,dx+g(y)$$

$\int F(x)dx$ da $x$'in bir fonksiyonudur, ona $f(x)$ diyelim:

$$\boxed{\;u(x,y)=f(x)+g(y)\;}$$

İki **keyfi fonksiyon** çıktı — ikinci mertebeden bir ADD'de iki keyfi *sabit* çıkmasının karşılığı.
[/CEVAP]

[KUTU]
**Bunun pratik sonucu:** KDD'lerde "genel çözümü bul, sonra koşulları uygula" stratejisi ==işe yaramaz.== Keyfi fonksiyonları belirlemek, keyfi sabitleri belirlemekten kat kat zordur.

Bu yüzden KDD'lerde yol farklıdır: ==sınır ve başlangıç koşulları en baştan devreye sokulur== ve çözüm doğrudan onların üzerine inşa edilir. 8.4'teki değişkenlerine ayırma yöntemi tam olarak böyle çalışır.
[/KUTU]

---

### Yan koşullar

Bir KDD problemi denklemden ibaret değildir; yanında ==koşullar== gelir.

**Sınır koşulu (boundary condition):** uzayın kenarında ne olduğunu söyler.

- $u(0,t)=0$ — çubuğun ucu buz gibi tutuluyor (**Dirichlet** koşulu)
- $u_{x}(0,t)=0$ — uçtan ısı akmıyor, yalıtılmış (**Neumann** koşulu)

**Başlangıç koşulu (initial condition):** $t=0$ anındaki durumu söyler.

- $u(x,0)=f(x)$ — başlangıçtaki sıcaklık dağılımı
- $u_{t}(x,0)=g(x)$ — başlangıçtaki hız (dalga denkleminde gerekir)

[KUTU]
**Kaç koşul gerekir?** Kabaca: ==bir değişkende kaçıncı mertebeden türev varsa, o değişkende o kadar koşul.==

| Denklem | $t$'de mertebe | Gereken başlangıç koşulu |
|---|---|---|
| Isı: $u_{t}=k u_{xx}$ | 1 | $u(x,0)$ — bir tane |
| Dalga: $u_{tt}=c^{2}u_{xx}$ | 2 | $u(x,0)$ **ve** $u_{t}(x,0)$ — iki tane |
| Laplace: $u_{xx}+u_{yy}=0$ | — | zaman yok; ==dört kenarda sınır koşulu== |

Isı denkleminde başlangıç hızı sormak anlamsızdır; dalga denkleminde sormamak ise problemi eksik bırakır.
[/KUTU]

---

[CLAUDE] Üç denklemi fiziksel olarak ayırt etme
Formülleri karıştırıyorsanız ==ne anlattıklarına== bakın:

**Isı denklemi $u_{t}=k\,u_{xx}$** — "sıcaklığın değişim hızı, eğriliğiyle orantılıdır." Bir nokta komşularından soğuksa ($u_{xx}>0$, çukur) ısınır. Sonuç: ==her şey düzleşir, farklar silinir.== Zamanda geri gidilemez.

**Dalga denklemi $u_{tt}=c^{2}u_{xx}$** — "ivme, eğrilikle orantılıdır." Gergin bir tel çukurdayken yukarı çekilir, ama ==atalet yüzünden dengeyi aşar== ve salınım başlar. Sonuç: enerji sönmez, zamanda geri gidilebilir.

**Laplace denklemi $u_{xx}+u_{yy}=0$** — "eğrilikler birbirini götürür." Zaman yoktur; bu, ==ısı denkleminin sonsuz zaman sonraki hâlidir== ($u_t=0$ olduğunda $u_{xx}=0$). Denge durumunu tarif eder.

**Tek satırlık ayırt etme:** $t$'ye göre **birinci** türev → ısı (sönüm). $t$'ye göre **ikinci** türev → dalga (salınım). $t$ **yok** → Laplace (denge).
[/CLAUDE]

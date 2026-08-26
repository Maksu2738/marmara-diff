---
id: kdd-laplace
menu: 8.7 Laplace Denklemi
tip: konu
baslik: 8.7 &nbsp;Laplace Denklemi — Eliptik Denklemin Temsilcisi
---

$$\boxed{\;u_{xx}+u_{yy}=0\;} \tag{8.17}$$

Bu denklemin ==zaman değişkeni yoktur.== Bir **denge durumunu** tarif eder: ısı denkleminde $t\to\infty$ giderken $u_{t}\to 0$ olur ve geriye tam olarak $(8.17)$ kalır.

Çözümlerine **harmonik fonksiyonlar** denir. Denklem elektrostatik potansiyel, kararlı sıcaklık dağılımı, sıkıştırılamaz akış ve kütleçekim potansiyeli problemlerinde ortaya çıkar.

**Yan koşullar:** zaman olmadığı için başlangıç koşulu da yoktur. Bunun yerine ==bölgenin bütün kenarında== sınır koşulu verilir.

---

### Dikdörtgen bölgede çözüm

$0<x<a$, $0<y<b$ dikdörtgeni. Üç kenar sıfır, bir kenarda verilen fonksiyon:

$$u(0,y)=0,\qquad u(a,y)=0,\qquad u(x,0)=0,\qquad u(x,b)=f(x)$$

**Adım 1–3 — Ayır.** $u=X(x)Y(y)$:

$$X''Y+XY''=0\;\Longrightarrow\;\frac{X''}{X}=-\frac{Y''}{Y}=-\lambda$$

**Adım 4 — İki ADD.**

$$X''+\lambda X=0,\qquad Y''-\lambda Y=0$$

[KUTU]
**İşaretlere dikkat — burada bir seçim var.** $X$ denkleminde $+\lambda$, $Y$ denkleminde $-\lambda$ çıktı. Hangi değişkene $+\lambda$ vereceğimizi ==sınır koşulları belirler:==

$x$ yönünde **iki tarafta da sıfır** koşulu var ($u(0,y)=u(a,y)=0$). Bu, $(8.7)$'nin özdeğer problemidir ve ==salınımlı çözüm gerektirir== — yani $X$'in sinüs olması gerekir. Bu yüzden $+\lambda$ ona verilir.

$y$ yönünde ise bir uçta sıfır, öbür uçta $f$ var; orada salınım değil ==üstel/hiperbolik davranış== gerekir.

$+\lambda$'yı yanlış değişkene verirseniz sinüsler $y$'de çıkar ve sınır koşulları sağlanamaz. ==Önce hangi yönde iki homojen koşul var, ona bakın.==
[/KUTU]

**$X$ denklemi.** $X(0)=X(a)=0$ ile birlikte, yine $(8.8)$:

$$\lambda_{n}=\left(\frac{n\pi}{a}\right)^{2},\qquad X_{n}(x)=\sin\frac{n\pi x}{a}$$

**$Y$ denklemi.** $Y''-\lambda_{n}Y=0$, kökler $\pm\dfrac{n\pi}{a}$ — ==reel ve farklı==, yani üstel çözüm:

$$Y_{n}(y)=c_{1}e^{\frac{n\pi y}{a}}+c_{2}e^{-\frac{n\pi y}{a}}$$

$Y(0)=0$ koşulunu uygulamak için hiperbolik biçim daha kullanışlıdır:

$$Y_{n}(y)=c_{1}\cosh\frac{n\pi y}{a}+c_{2}\sinh\frac{n\pi y}{a}$$

$Y(0)=0\;\Rightarrow\;c_{1}\cosh 0=c_{1}=0$ &nbsp;(çünkü $\cosh 0=1$, $\sinh 0=0$). Geriye:

$$Y_{n}(y)=\sinh\frac{n\pi y}{a}$$

**Adım 5 — Süperpozisyon.**

$$u(x,y)=\sum_{n=1}^{\infty}c_{n}\sin\frac{n\pi x}{a}\sinh\frac{n\pi y}{a} \tag{8.18}$$

**Katsayılar.** Son sınır koşulu $u(x,b)=f(x)$:

$$\sum_{n=1}^{\infty}\underbrace{c_{n}\sinh\frac{n\pi b}{a}}_{\text{Fourier katsayısı}}\sin\frac{n\pi x}{a}=f(x)$$

Köşeli kısım, $f$'nin sinüs katsayısıdır:

$$c_{n}\sinh\frac{n\pi b}{a}=\frac{2}{a}\int_{0}^{a}f(x)\sin\frac{n\pi x}{a}\,dx$$

$$\boxed{\;c_{n}=\frac{2}{a\,\sinh\dfrac{n\pi b}{a}}\int_{0}^{a}f(x)\sin\frac{n\pi x}{a}\,dx\;} \tag{8.19}$$

---

[SORU] **Örnek 8.10.** &nbsp; $a=b=\pi$ olan bir kare levhanın üç kenarı $0$ derecede, üst kenarı $u(x,\pi)=T_{0}$ sıcaklığında tutuluyor. Kararlı sıcaklık dağılımını bulunuz.
[CEVAP]
**Adım 1 — Çözüm biçimi.** $(8.18)$'de $a=\pi$:

$$u(x,y)=\sum_{n=1}^{\infty}c_{n}\sin\left(nx\right)\sinh\left(ny\right)$$

**Adım 2 — Katsayılar.** $f(x)=T_{0}$ sabit; sinüs açılımını Örnek 8.6'da bulmuştuk ($L=\pi$ ile):

$$\frac{2}{\pi}\int_{0}^{\pi}T_{0}\sin\left(nx\right)dx=\frac{2T_{0}}{n\pi}\Big(1-(-1)^{n}\Big)=\begin{cases}\dfrac{4T_{0}}{n\pi},& n\text{ tek}\\[2mm] 0,& n\text{ çift}\end{cases}$$

$(8.19)$'a göre bunu $\sinh\left(n\pi\right)$'ye böleriz:

$$c_{n}=\frac{4T_{0}}{n\pi\sinh\left(n\pi\right)}\quad (n\text{ tek}),\qquad c_{n}=0\quad (n\text{ çift})$$

**Adım 3 — Çözüm.**

$$\boxed{\;u(x,y)=\frac{4T_{0}}{\pi}\sum_{n\text{ tek}}\frac{\sin\left(nx\right)\sinh\left(ny\right)}{n\,\sinh\left(n\pi\right)}\;}$$

**Kontroller.**

- $x=0$ ve $x=\pi$'de $\sin\left(nx\right)=0$ &#10003;
- $y=0$'da $\sinh 0=0$ &#10003;
- $y=\pi$'de $\dfrac{\sinh\left(n\pi\right)}{\sinh\left(n\pi\right)}=1$, geriye $T_{0}$'ın sinüs açılımı kalır &#10003;
[/CEVAP]

---

### Harmonik fonksiyonların iki özelliği

[KUTU]
**1. Ortalama değer özelliği.** Bir harmonik fonksiyonun herhangi bir noktadaki değeri, o noktayı merkez alan ==her çemberin üzerindeki ortalamasına eşittir.==

**2. Maksimum ilkesi.** Bir harmonik fonksiyon, maksimum ve minimum değerlerini ==daima bölgenin sınırında== alır; iç bölgede tepe ya da çukur oluşturamaz.

**Fiziksel okunuşu:** ısı kaynağı olmayan bir levhada, en sıcak nokta ==kenarda olmak zorundadır.== İçeride bir yerin çevresinden sıcak olması, oraya dışarıdan ısı verilmesini gerektirir — ki $(8.17)$ bunu yasaklar (kaynak terimi olsaydı denklem Poisson olurdu).

**Pratik faydası — sonuç kontrolü:** bulduğunuz $u$, sınır değerlerinin ==dışına çıkıyorsa hata vardır.== Örnek 8.10'da bütün sınır değerleri $0$ ile $T_{0}$ arasındaydı; çözümün her yerde bu aralıkta kalması gerekir.
[/KUTU]

**Birden çok kenarda koşul varsa?** Dört kenarda da sıfırdan farklı değer verilmişse problem ==dörde bölünür:== her seferinde bir kenar canlı, diğer üçü sıfır. Dört çözüm ayrı ayrı bulunup ==toplanır== (süperpozisyon, 7.8). Her biri yukarıdaki hesabın aynısıdır, yalnız roller değişir.

---

[CLAUDE] Üç denklem tek tabloda — bölümün özeti
Üçü de ==aynı özfonksiyonları== kullanır; fark yalnızca ikinci ADD'dedir:

| | Isı | Dalga | Laplace |
|---|---|---|---|
| Denklem | $u_{t}=k\,u_{xx}$ | $u_{tt}=c^{2}u_{xx}$ | $u_{xx}+u_{yy}=0$ |
| Sınıf | Parabolik | Hiperbolik | Eliptik |
| $X$ denklemi | $X''+\lambda X=0$ | $X''+\lambda X=0$ | $X''+\lambda X=0$ |
| İkinci ADD | $T'+k\lambda T=0$ | $T''+c^{2}\lambda T=0$ | $Y''-\lambda Y=0$ |
| Kökler | tek, reel negatif | ==sanal== | ==reel, zıt işaretli== |
| İkinci çözüm | $e^{-k\lambda_{n}t}$ | $\cos,\sin$ | $\cosh,\sinh$ |
| Davranış | Söner | Salınır | Üstel büyür/azalır |

**Ezberlenecek tek şey:** $X''+\lambda X=0$ ile $X(0)=X(L)=0$ probleminin cevabı $(8.8)$. Üç denklemde de aynısı çıkıyor.

**İkinci ADD'nin türünü mertebeden okuyun:**

- $t$'ye göre **birinci** türev → birinci mertebeden ADD → ==üstel== → sönüm
- $t$'ye göre **ikinci** türev, işaret $\lambda$ ile **aynı** → sanal kök → ==trigonometrik== → salınım
- İkinci türev, işaret $\lambda$ ile **zıt** → reel kök → ==hiperbolik== → büyüme

**$\sinh$ mi $\cosh$ mu?** Sınır koşulunun sıfır olduğu yere bakın: $Y(0)=0$ ise $\sinh$ (çünkü $\sinh 0=0$), $Y'(0)=0$ ise $\cosh$. Koşul $y=b$'de sıfırsa argümanı kaydırın: $\sinh\dfrac{n\pi(b-y)}{a}$.
[/CLAUDE]

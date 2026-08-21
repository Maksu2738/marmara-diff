---
id: ornek-adi-tekil-nokta
menu: 5.1 Örnekler — Adi ve Tekil Noktalar
tip: ornek
baslik: 5.1 &nbsp;Çözümlü Örnekler — Adi ve Tekil Noktaların Belirlenmesi
---

[SORU] **Örnek 5.1.** &nbsp; Aşağıdaki diferansiyel denklemin adi ve tekil noktalarını belirleyiniz: $\displaystyle y''+xy'+(x^{2}+2)y=0$
[CEVAP]
**Adım 1 — Denklemi normalleştirilmiş biçimde yaz.**

Denklem zaten $y''+P_{1}(x)y'+P_{2}(x)y=0$ biçimindedir, çünkü $y''$ teriminin katsayısı $1$'dir. Buradan doğrudan okuruz:

$$P_{1}(x)=x,\qquad P_{2}(x)=x^{2}+2$$

**Adım 2 — Analitikliği sına.**

$P_{1}$ ve $P_{2}$ fonksiyonlarının ikisi de polinom fonksiyondur. Polinom fonksiyonlar her yerde analitik olduğundan, ikisi de her noktada analitiktir.

**Adım 3 — Sonuç.**

Adi nokta tanımı, $P_{1}$ ve $P_{2}$'nin ikisinin de o noktada analitik olmasını ister. Bu koşul her nokta için sağlandığından:

$$\boxed{\text{Bu denklemin bütün noktaları adi noktadır; tekil noktası yoktur.}}$$

[SORU] **Örnek 5.2.** &nbsp; Aşağıdaki denklemin adi ve tekil noktalarını belirleyiniz: $\displaystyle (x-1)y''+xy'+\frac{1}{x}y=0$
[CEVAP]
**Adım 1 — Önce normalleştirilmiş biçime geç.**

Bu denklem $(5.3)$ biçiminde ==değildir==; $y''$ teriminin katsayısı $1$ olmadığı için doğrudan katsayı okuyamayız. Tüm denklemi $(x-1)$'e bölelim:

$$y''+\frac{x}{x-1}\,y'+\frac{1}{x(x-1)}\,y=0$$

Böylece

$$P_{1}(x)=\frac{x}{x-1},\qquad P_{2}(x)=\frac{1}{x(x-1)}$$

**Adım 2 — Her iki fonksiyonun analitik olmadığı noktaları bul.**

Bunlar rasyonel fonksiyonlardır; paydalarının sıfır olduğu noktalar dışında analitiktirler.

- $P_{1}$ fonksiyonu $x=1$ dışında analitiktir (payda $x-1$).
- $P_{2}$ fonksiyonu $x=0$ ve $x=1$ dışında analitiktir (payda $x(x-1)$).

**Adım 3 — Tekil noktaları topla.**

Bir noktanın tekil olması için $P_{1}$ ve $P_{2}$'den ==en az birinin== orada analitik olmaması yeterlidir:

$$\boxed{x=0 \text{ ve } x=1 \text{ tekil noktadır; diğer bütün noktalar adi noktadır.}}$$

**Sık yapılan hataya dikkat.** $x=0$ noktasında $P_{1}(x)=\dfrac{x}{x-1}$ fonksiyonu gayet analitiktir — $P_{1}(0)=0$ sorunsuzdur. Buna rağmen $x=0$ bir tekil noktadır, çünkü $P_{2}$ orada analitik değildir. Adi nokta olabilmek için ==iki fonksiyonun birden== analitik olması gerekir; birinin yeterliliği yanıltıcıdır.

[SORU] **Örnek 5.3.** &nbsp; Örnek 5.1'deki $\displaystyle y''+xy'+(x^{2}+2)y=0$ denkleminin kuvvet serisi çözümleri hakkında ne söylenebilir?
[CEVAP]
Örnek 5.1'de bu denklemin bütün noktalarının adi nokta olduğunu görmüştük.

THEoREM 5.1'in hipotezi, seçilen $x_{0}$ noktasının bir adi nokta olmasıdır. Burada ==her nokta== adi nokta olduğundan hipotez, $x_{0}$ hangi nokta seçilirse seçilsin sağlanır.

THEoREM'in sonucuna göre denklemin, herhangi bir $x_{0}$ noktası etrafında

$$\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n}$$

biçiminde, lineer bağımsız iki kuvvet serisi çözümü vardır ve bu seriler $x_{0}$ etrafındaki bir $|x-x_{0}|<R$ aralığında yakınsar.

$$\boxed{\text{Genel çözüm, bu iki lineer bağımsız serinin lineer birleşimi olarak yazılabilir.}}$$

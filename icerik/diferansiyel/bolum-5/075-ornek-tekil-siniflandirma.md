---
id: ornek-tekil-siniflandirma
menu: 5.6 Örnekler — Tekil Nokta Sınıflandırması
tip: ornek
baslik: 5.6 &nbsp;Çözümlü Örnekler — Düzgün ve Düzgün Olmayan Tekil Noktalar
---

[SORU*] **Örnek 5.7.** &nbsp; $\displaystyle 2x^{2}y''-xy'+(x-5)y=0$ denkleminin tekil noktalarını bulunuz ve türlerini belirleyiniz.
[CEVAP]
**Adım 1 — Normalleştirilmiş biçime geç.**

Tüm denklemi $y''$ katsayısı olan $2x^{2}$'ye bölelim:

$$y''-\frac{1}{2x}y'+\frac{x-5}{2x^{2}}y=0$$

$$P_{1}(x)=-\frac{1}{2x},\qquad P_{2}(x)=\frac{x-5}{2x^{2}}$$

**Adım 2 — Tekil noktayı bul.**

Her iki fonksiyon da $x=0$'da analitik değildir (paydalar sıfırlanır). Dolayısıyla ==$x=0$ bir tekil noktadır==. Başka tekil nokta yoktur.

**Adım 3 — Türünü belirle: $(5.50)$ çarpımlarını kur.**

$x_{0}=0$ olduğundan çarpanlar $x$ ve $x^{2}$'dir:

$$xP_{1}(x)=x\cdot\left(-\frac{1}{2x}\right)=-\frac{1}{2}$$

$$x^{2}P_{2}(x)=x^{2}\cdot\frac{x-5}{2x^{2}}=\frac{x-5}{2}$$

**Adım 4 — Analitikliği sına.**

Birinci çarpım sabit fonksiyondur, ikincisi birinci dereceden polinomdur. ==İkisi de her yerde analitiktir==, özel olarak $x=0$'da da analitiktir.

$$\boxed{x=0\ \text{düzgün tekil noktadır (regular singular point).}}$$

**Sonuç.** THEoREM 5.2 gereği bu denklemin

$$|x|^{r}\sum_{n=0}^{\infty}c_{n}x^{n}$$

biçiminde, $0<|x|<R$ delinmiş aralığında geçerli, aşikâr olmayan en az bir çözümü vardır.

[SORU*] **Örnek 5.8.** &nbsp; $\displaystyle x^{2}(x-2)^{2}y''+2(x-2)y'+(x+1)y=0$ denkleminin tekil noktalarını bulunuz ve **her birini ayrı ayrı** sınıflandırınız.
[CEVAP]
**Adım 1 — Normalleştir.**

$y''$ katsayısı $x^{2}(x-2)^{2}$; buna bölelim:

$$y''+\frac{2(x-2)}{x^{2}(x-2)^{2}}y'+\frac{x+1}{x^{2}(x-2)^{2}}y=0$$

Birinci katsayıda $(x-2)$ sadeleşir:

$$P_{1}(x)=\frac{2}{x^{2}(x-2)},\qquad P_{2}(x)=\frac{x+1}{x^{2}(x-2)^{2}}$$

**Adım 2 — Tekil noktalar.**

Paydalar $x=0$ ve $x=2$'de sıfırlanır. ==İki tekil nokta var ve türleri farklı çıkacak — her birini ayrı incelemek gerekir.==

---

**Adım 3 — $x=0$ noktası.**

Çarpanlar $x$ ve $x^{2}$:

$$xP_{1}(x)=x\cdot\frac{2}{x^{2}(x-2)}=\frac{2}{x(x-2)}$$

$$x^{2}P_{2}(x)=x^{2}\cdot\frac{x+1}{x^{2}(x-2)^{2}}=\frac{x+1}{(x-2)^{2}}$$

İkinci çarpım $x=0$'da analitiktir (payda $(0-2)^{2}=4\neq 0$). **Ama birinci çarpım $x=0$'da hâlâ analitik değildir** — paydada bir $x$ kalmıştır, $x$ ile çarpmak tekilliği yok etmeye yetmemiştir.

Tanım ==her iki çarpımın da== analitik olmasını ister:

$$\boxed{x=0\ \text{düzgün OLMAYAN tekil noktadır (irregular singular point).}}$$

---

**Adım 4 — $x=2$ noktası.**

Şimdi $x_{0}=2$, dolayısıyla çarpanlar $(x-2)$ ve $(x-2)^{2}$:

$$(x-2)P_{1}(x)=(x-2)\cdot\frac{2}{x^{2}(x-2)}=\frac{2}{x^{2}}$$

$$(x-2)^{2}P_{2}(x)=(x-2)^{2}\cdot\frac{x+1}{x^{2}(x-2)^{2}}=\frac{x+1}{x^{2}}$$

Her iki çarpımın da paydası $x^{2}$'dir ve $x=2$'de $4\neq 0$ olduğundan ==ikisi de $x=2$'de analitiktir==.

$$\boxed{x=2\ \text{düzgün tekil noktadır (regular singular point).}}$$

---

**Sonuç ve yorum.** Aynı denklemin iki tekil noktası farklı türdendir:

- $x=2$'de THEoREM 5.2 uygulanır; denklemin $|x-2|^{r}\displaystyle\sum_{n=0}^{\infty}c_{n}(x-2)^{n}$ biçiminde en az bir çözümü olduğunu biliriz.
- $x=0$'da hiçbir garanti yoktur; bu biçimde bir çözüm bulunabilir de bulunmayabilir de.

[KUTU]
**Sınavda dikkat edilecek nokta:** Çarpanların kuvveti sabit değildir, **incelenen noktaya göre** yazılır. $x=0$ için $x$ ve $x^{2}$, $x=2$ için $(x-2)$ ve $(x-2)^{2}$ kullanılır. Yanlış çarpanla yapılan sınama yanlış sınıflandırma verir.
[/KUTU]

[SORU] **Örnek 5.9.** &nbsp; Yukarıdaki iki örnekten hangi çözüm biçimlerinin varlığı garanti edilir?
[CEVAP]
**Örnek 5.7'nin denklemi** $2x^{2}y''-xy'+(x-5)y=0$ için $x=0$ düzgün tekil noktaydı. THEoREM 5.2'ye göre denklemin

$$y=|x|^{r}\sum_{n=0}^{\infty}c_{n}x^{n}$$

biçiminde, $0<|x|<R$ aralığında geçerli, aşikâr olmayan **en az bir** çözümü vardır. $r$ sabiti hesapla belirlenir.

**Örnek 5.8'in denklemi** $x^{2}(x-2)^{2}y''+2(x-2)y'+(x+1)y=0$ için $x=2$ düzgün tekil noktaydı. Aynı THEoREM'e göre

$$y=|x-2|^{r}\sum_{n=0}^{\infty}c_{n}(x-2)^{n}$$

biçiminde en az bir çözüm vardır, $0<|x-2|<R$ aralığında geçerlidir.

==Her iki durumda da "en az bir" denmesine dikkat edin.== Adi noktadaki gibi iki lineer bağımsız çözüm garantisi yoktur; ikinci çözümün nasıl bulunacağı ayrı bir konudur ve $r$ değerlerinin birbirine göre durumuna bağlıdır.

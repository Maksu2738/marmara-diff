---
id: seri-temel
menu: 5.1 Adi Nokta Etrafında Kuvvet Serisi Çözümleri
tip: konu
baslik: 5.1 &nbsp;Adi Nokta Etrafında Kuvvet Serisi Çözümleri
---

Sabit katsayılı yüksek mertebeden lineer diferansiyel denklemlerin çözümlerini, bilinen elemanter fonksiyonların sonlu lineer birleşimleri olarak yazabiliyorduk. Ancak genel durumda yüksek mertebeden lineer denklemlerin çözümleri bu kadar basit bir biçimde ifade edilemez. Bu tür denklemler için başka bir ifade aracına ihtiyaç duyarız; bu araç **sonsuz seri (infinite series)** gösterimidir.

İkinci mertebeden homojen lineer diferansiyel denklemi ele alalım:

$$a_{0}(x)\,y''+a_{1}(x)\,y'+a_{2}(x)\,y=0 \tag{5.1}$$

Bu denklemin elemanter fonksiyonlarla ifade edilebilen bir çözümü olmadığını, ancak sonsuz seri biçiminde bir çözümü olduğunu varsayalım. Aradığımız çözüm şu biçimdedir:

$$c_{0}+c_{1}(x-x_{0})+c_{2}(x-x_{0})^{2}+\dots=\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n} \tag{5.2}$$

Burada $c_{0},c_{1},c_{2},\dots$ sabitlerdir. $(5.2)$ biçimindeki bir ifadeye $x-x_{0}$ kuvvetlerinde **kuvvet serisi (power series)** denir.

[KUTU]
**Dikkat edilmesi gereken nokta:** Katsayıları belirlemeye girişmeden önce, böyle bir çözümün gerçekten var olup olmadığını bilmemiz gerekir. Var olmayan bir çözümü aramak anlamsız olurdu. Bu yüzden önce varlık koşulunu veren tanımları ve THEoREM'i kuracağız.
[/KUTU]

Varlık sorusunu yanıtlamak için $(5.1)$ denklemini eşdeğer **normalleştirilmiş biçimde (normalized form)** yazalım:

$$y''+P_{1}(x)\,y'+P_{2}(x)\,y=0 \tag{5.3}$$

burada

$$P_{1}(x)=\frac{a_{1}(x)}{a_{0}(x)},\qquad P_{2}(x)=\frac{a_{2}(x)}{a_{0}(x)}$$

---

### Analitik fonksiyon

[KUTU]
**TANIM.** Bir $f$ fonksiyonunun $x_{0}$ noktası etrafındaki Taylor serisi

$$\sum_{n=0}^{\infty}\frac{f^{(n)}(x_{0})}{n!}(x-x_{0})^{n}$$

mevcutsa ve $x_{0}$'ı içeren bir açık aralıktaki tüm $x$ değerleri için $f(x)$'e yakınsıyorsa, $f$ fonksiyonu $x_{0}$'da **analitiktir (analytic)** denir.
[/KUTU]

Bu tanımın pratik sonuçları şunlardır:

- Bütün **polinom fonksiyonlar (polynomial functions)** her yerde analitiktir.
- $e^{x}$, $\sin x$ ve $\cos x$ fonksiyonları da her yerde analitiktir.
- Bir **rasyonel fonksiyon (rational function)**, paydasının sıfır olduğu noktalar dışında analitiktir.

Örneğin $\dfrac{1}{x^{2}-3x+2}$ ile tanımlanan rasyonel fonksiyon, $x=1$ ve $x=2$ dışında her yerde analitiktir.

---

### Adi nokta ve tekil nokta

[KUTU]
**TANIM.** $(5.1)$ denklemine eşdeğer olan normalleştirilmiş $(5.3)$ denklemindeki $P_{1}$ ve $P_{2}$ fonksiyonlarının **ikisi de** $x_{0}$'da analitikse, $x_{0}$ noktasına $(5.1)$ denkleminin bir **adi noktası (ordinary point)** denir.

Bu fonksiyonlardan biri (veya ikisi birden) $x_{0}$'da analitik değilse, $x_{0}$ noktasına $(5.1)$ denkleminin bir **tekil noktası (singular point)** denir.
[/KUTU]

==Bir noktanın adi nokta olması için $P_{1}$ ve $P_{2}$'nin ikisinin de o noktada analitik olması gerekir.== Yalnızca birinin analitik olması yetmez — bu ayrım aşağıdaki örneklerde belirleyici olacaktır.

---

### Varlık THEoREM'i

[KUTU]
**THEoREM 5.1**

**Hipotez.** $x_{0}$ noktası, $(5.1)$ diferansiyel denkleminin bir adi noktasıdır.

**Sonuç.** $(5.1)$ diferansiyel denkleminin,

$$\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n} \tag{5.2}$$

biçiminde, aşikâr olmayan (nontrivial) ve **lineer bağımsız (linearly independent)** iki kuvvet serisi çözümü vardır; bu kuvvet serileri $x_{0}$ etrafındaki bir $|x-x_{0}|<R$ aralığında ($R>0$) yakınsar.
[/KUTU]

Bu THEoREM, $(5.1)$ denkleminin kuvvet serisi çözümlerinin varlığı için bir **yeter koşul (sufficient condition)** verir. THEoREM'in söylediği şudur: $x_{0}$ noktası $(5.1)$'in bir adi noktasıysa, denklemin $x-x_{0}$ kuvvetlerinde iki kuvvet serisi çözümü vardır ve bu iki çözüm lineer bağımsızdır.

Dolayısıyla $x_{0}$ bir adi noktaysa, $(5.1)$'in **genel çözümünü (general solution)** bu iki lineer bağımsız kuvvet serisinin lineer birleşimi olarak elde edebiliriz. THEoREM'in ispatı burada verilmemiştir.

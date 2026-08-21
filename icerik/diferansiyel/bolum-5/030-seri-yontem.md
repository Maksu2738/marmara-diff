---
id: seri-yontem
menu: 5.2 Çözüm Yöntemi
tip: konu
baslik: 5.2 &nbsp;Kuvvet Serisi Çözümünün Bulunması
---

THEoREM 5.1 bize çözümün *var olduğunu* söyledi. Peki bu çözümü nasıl buluruz? Yani $(5.2)$ ifadesindeki $c_{0},c_{1},c_{2},\dots$ katsayılarını, ifade gerçekten $(5.1)$ denklemini sağlayacak biçimde nasıl belirleriz?

$x_{0}$ noktasının bir adi nokta olduğunu varsayalım; böylece $x-x_{0}$ kuvvetlerinde çözümler gerçekten mevcuttur. Böyle bir çözümü şöyle gösterelim:

$$y=c_{0}+c_{1}(x-x_{0})+c_{2}(x-x_{0})^{2}+\dots=\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n} \tag{5.6}$$

---

### Adım 1 — Terim terime türev al

$(5.6)$'daki seri, $x_{0}$ etrafındaki $|x-x_{0}|<R$ aralığında yakınsadığı için bu aralıkta **terim terime (term by term)** iki kez türetilebilir:

$$y'=c_{1}+2c_{2}(x-x_{0})+3c_{3}(x-x_{0})^{2}+\dots=\sum_{n=1}^{\infty}n\,c_{n}(x-x_{0})^{n-1} \tag{5.7}$$

$$y''=2c_{2}+6c_{3}(x-x_{0})+12c_{4}(x-x_{0})^{2}+\dots=\sum_{n=2}^{\infty}n(n-1)c_{n}(x-x_{0})^{n-2} \tag{5.8}$$

[KUTU]
**Alt sınırlara dikkat.** Türev alındıkça toplamın alt sınırı yükselir: $y$ için $n=0$, $y'$ için $n=1$, $y''$ için $n=2$. Sebebi basittir — türev alınınca sabit terim ve birinci dereceden terim sırasıyla yok olur, o terimlerin toplama katkısı sıfırdır.
[/KUTU]

### Adım 2 — Denkleme yerleştir

$(5.6)$, $(5.7)$ ve $(5.8)$ serilerini $y$ ve türevleri yerine $(5.1)$ diferansiyel denkleminde yazarız. Elde edilen ifadeyi sadeleştirerek şu biçime getiririz:

$$K_{0}+K_{1}(x-x_{0})+K_{2}(x-x_{0})^{2}+\dots=0 \tag{5.9}$$

Burada $K_{i}\;(i=0,1,2,\dots)$ katsayıları, çözümdeki $c_{n}$ katsayılarının fonksiyonlarıdır.

### Adım 3 — Her kuvvetin katsayısını sıfıra eşitle

$(5.9)$ eşitliğinin yakınsaklık aralığındaki **tüm** $x$ değerleri için geçerli olması isteniyorsa, tek yol şudur:

$$K_{0}=K_{1}=K_{2}=\dots=0$$

Başka bir deyişle, $(5.9)$'un sol tarafındaki $x-x_{0}$'ın ==her kuvvetinin katsayısını== sıfıra eşitlemeliyiz. Bu, $c_{n}$ katsayılarının sağlaması gereken bir koşullar kümesi verir. $c_{n}$'ler bu koşulları sağlayacak biçimde seçilirse, ortaya çıkan seri aranan çözümdür.

---

### İndeks kaydırma — yöntemin can alıcı adımı

Adım 2'de yerleştirme yapıldığında toplamlarda $x$'in üsleri birbirini tutmaz: kimi toplamda $x^{n-2}$, kiminde $x^{n}$, kiminde $x^{n+2}$ çıkar. $(5.9)$ biçimine geçebilmek için ==hepsini aynı üsse== getirmek gerekir. Bunun yolu **indeks kaydırmadır (index shifting)**.

**Kural:** Toplamın içindeki her $n$ yerine $n+k$ yazarsan, toplamın alt sınırı da aynı denklemi sağlayacak biçimde kayar.

Örneğin

$$\sum_{n=2}^{\infty}n(n-1)c_{n}x^{n-2}$$

toplamında üssü $n$ yapmak istiyoruz. Her $n$ yerine $n+2$ yazarız; üs $(n+2)-2=n$ olur:

$$\sum_{n+2=2}^{\infty}(n+2)(n+1)c_{n+2}x^{n}$$

Alt sınırdaki $n+2=2$ koşulu $n=0$ demektir, dolayısıyla toplam şuna eşittir:

$$\sum_{n=0}^{\infty}(n+2)(n+1)c_{n+2}x^{n}$$

[KUTU]
**İkna olmadıysanız:** iki toplamın da ilk birkaç terimini açıkça yazın. $2c_{2}+6c_{3}x+12c_{4}x^{2}+\dots$ — ikisi de aynı seriyi verir. İndeks kaydırma serinin kendisini değiştirmez, sadece aynı seriyi farklı bir sayaçla yazar.
[/KUTU]

Benzer biçimde

$$\sum_{n=0}^{\infty}c_{n}x^{n+2}$$

toplamında $n$ yerine $n-2$ yazarız; üs $(n-2)+2=n$ olur ve alt sınır $n-2=0$, yani $n=2$ olur:

$$\sum_{n=2}^{\infty}c_{n-2}x^{n}$$

---

### Ortak aralığa indirgeme

İndeks kaydırmadan sonra $x$'in üssü her toplamda $n$ olur, ama **alt sınırlar hâlâ farklıdır** — kimi $n=0$'dan, kimi $n=1$'den, kimi $n=2$'den başlar. Bunları tek bir toplam altında birleştirebilmek için ortak aralık seçilir (yukarıdaki durumda $n=2$'den $\infty$'a) ve bu aralığın dışında kalan terimler ==tek tek açıkça yazılır==.

Örneğin $\displaystyle\sum_{n=0}^{\infty}(n+2)(n+1)c_{n+2}x^{n}$ toplamında $n=0$ ve $n=1$ terimlerini ayırırsak:

$$2c_{2}+6c_{3}x+\sum_{n=2}^{\infty}(n+2)(n+1)c_{n+2}x^{n}$$

Bütün toplamlar bu şekilde ortak aralığa indirgendikten sonra $x$'in aynı kuvvetleri bir araya toplanır ve $(5.9)$ biçimi elde edilir.

---

### Özyineleme formülü

Katsayıları sıfıra eşitlemek iki tür koşul üretir:

1. **Düşük dereceli terimlerden gelen tekil koşullar** — bunlar $c_{2}$'yi $c_{0}$ cinsinden, $c_{3}$'ü $c_{1}$ cinsinden verir.
2. **Genel toplamdan gelen ve her $n$ için geçerli olan koşul** — buna **özyineleme formülü (recurrence formula)** denir.

Özyineleme formülü, her $c_{n+2}$ katsayısını kendinden önceki katsayılar cinsinden verir. Böylece **çift indisli katsayıların hepsi $c_{0}$ cinsinden, tek indisli katsayıların hepsi $c_{1}$ cinsinden** ifade edilir.

$c_{0}$ ve $c_{1}$ keyfi kalır — ve zaten olması gereken budur: ikinci mertebeden bir denklemin genel çözümünde iki keyfi sabit bulunur. Sonuçta çözüm

$$y=c_{0}\big(\text{bir seri}\big)+c_{1}\big(\text{başka bir seri}\big)$$

biçiminde toplanır; parantez içindeki iki seri, THEoREM 5.1'in varlığını garantilediği ==lineer bağımsız iki çözümdür==.

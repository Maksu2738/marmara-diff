---
id: operator-sabit-sayisi
menu: 7.4 Kaç Bağımsız Sabit Olmalı
tip: konu
baslik: 7.4 &nbsp;Genel Çözümdeki Bağımsız Sabitlerin Sayısı
---

7.3'te $x$ ve $y$'yi ayrı ayrı çözmüştük:

$$x=c_{1}u_{1}+\dots+c_{N}u_{N}+U_{1},\qquad y=k_{1}u_{1}+\dots+k_{N}u_{N}+U_{2}$$

Dikkat edilecek nokta: her iki çözümde de ==aynı $u_{1},\dots,u_{N}$ fonksiyonları== görünür, çünkü ikisi de aynı $L_{5}$ operatörünün homojen denkleminden gelir. Yalnızca sabitler farklıdır.

Ortada $2N$ tane keyfi sabit var. Ama burada bir tuzak vardır.

[KUTU]
**Bu $2N$ sabit bağımsız DEĞİLDİR.** $(7.14)$ ve $(7.16)$ ile verilen fonksiyon çiftleri, sabitlerin ==her seçimi için== $(7.11)$ sistemini sağlamaz. Yani $x$ ve $y$ ayrı ayrı kendi denklemlerini sağlar, ama ikisi birlikte orijinal sistemin **her iki denklemini birden** sağlamayabilir.
[/KUTU]

---

### Kaç tanesi bağımsız?

Kural şudur: lineer sistemin genel çözümündeki bağımsız sabit sayısı,

$$L_{1}L_{4}-L_{2}L_{3}=\begin{vmatrix} L_{1} & L_{2} \\ L_{3} & L_{4} \end{vmatrix}$$

determinantından elde edilen operatörün **mertebesine** eşittir (determinant sıfır olmamak koşuluyla).

Bu operatörün mertebesi $N$ ise, ==$2N$ sabitin yalnızca $N$ tanesi bağımsız olabilir.== Kalan $N$ tanesi seçilen bağımsız olanlara bağlıdır.

[KUTU]
**Neden determinant?** $(7.11)$ sistemini, katsayıları operatör olan iki bilinmeyenli bir denklem sistemi gibi düşünün:

$$\begin{pmatrix} L_{1} & L_{2} \\ L_{3} & L_{4} \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix}=\begin{pmatrix} f_{1} \\ f_{2} \end{pmatrix}$$

Lineer cebirde katsayı matrisinin determinantı çözümün varlığını ve tekliğini belirler. Burada da aynı rolü oynar — tek fark, çıkan şeyin bir sayı değil ==bir operatör== olması. O operatörün mertebesi, sistemin "serbestlik derecesini" verir.
[/KUTU]

---

### Bağıntılar nasıl bulunur

Hangi sabitlerin bağımsız seçilebileceğini ve kalanların onlara nasıl bağlandığını bulmak için tek yol vardır:

==Bulunan $x$ ve $y$ ifadelerini orijinal sisteme geri koymak.==

Yerine koyunca, $e^{rt}$ gibi lineer bağımsız fonksiyonların katsayıları ayrı ayrı sıfıra eşitlenir; bu, sabitler arasındaki bağıntıları verir. Sonra bağımsız olarak seçilenler bırakılıp diğerleri onlar cinsinden yazılır.

Bu adım tamamlandığında elde edilen çift, gereken sayıda ($N$ tane) keyfi sabit içerir ve ==gerçekten genel çözümdür.==

**Bu adım atlanırsa** elinizde $2N$ sabitli, sistemi sağlamayan bir ifade kalır. Operatör yönteminde en sık yapılan hata budur; bir sonraki bölümdeki örnekte tam olarak nasıl işlediğini göreceğiz.

---

[CLAUDE] Sabit sayısını determinant söyler
Operatör yöntemiyle çözerken en sık yapılan hata, ==her denklemden gelen sabitleri ayrı ayrı saymaktır.== Doğru sayı tektir:

$$\text{bağımsız sabit sayısı}=\deg\left|\begin{matrix}L_{1} & L_{2}\\ L_{3} & L_{4}\end{matrix}\right|$$

yani operatör katsayı matrisinin ==determinantının $D$ cinsinden derecesi.==

**Nasıl kullanılır:** yok etme sonucu $x(t)$ için 3 sabit, $y(t)$ için 3 sabit bulduysanız ama determinantın derecesi 3'se, ==toplam 3 bağımsız sabit vardır.== Fazlalıkları elemek için bulduğunuz ifadeleri **orijinal sistemin bir denklemine** geri koyun; sabitler arasındaki bağıntılar oradan çıkar.

**Kontrol:** bu adımı atlarsanız çözümünüz sistemi sağlamaz. ==Geri koyma adımı isteğe bağlı değil, yöntemin parçasıdır.==
[/CLAUDE]

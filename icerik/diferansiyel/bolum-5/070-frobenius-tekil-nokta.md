---
id: frobenius-tekil-nokta
menu: 5.6 Düzgün Tekil Noktalar ve Frobenius
tip: konu
baslik: 5.6 &nbsp;Tekil Noktalar Etrafında Çözümler — Frobenius Yönteminin Temeli
---

Şimdiye kadar $x_{0}$'ın **adi nokta** olduğu durumu inceledik. Peki $x_{0}$ bir **tekil noktaysa** ne olur?

O durumda THEoREM 5.1 uygulanamaz ve

$$y=\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n}$$

biçiminde bir çözümün varlığı garanti edilmez. ==Gerçekten de tekil noktalı bir denklemin genelde bu biçimde bir çözümü yoktur.== Başka türden bir çözüm aramamız gerekir.

Belirli koşullar altında şu biçimde bir çözüm varsaymakta haklıyızdır:

$$y=|x-x_{0}|^{r}\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n} \tag{5.49}$$

Burada $r$ belirli bir (reel ya da karmaşık) sabittir. Böyle bir çözüm, bir kuvvet serisinin $|x-x_{0}|$'ın bir kuvvetiyle çarpımıdır. Bu yaklaşıma **Frobenius yöntemi (method of Frobenius)** denir.

[KUTU]
**Neden ekstra bir $|x-x_{0}|^{r}$ çarpanı?** Tekil noktada çözüm sonsuza gidebilir ya da türevi tanımsız olabilir; sıradan bir kuvvet serisi böyle davranışları üretemez, çünkü $x_{0}$'da her zaman sonlu ve düzgündür. $r$ negatif ya da kesirli seçilebildiği için bu çarpan, seriye tekil noktadaki gerekli davranışı kazandırır.
[/KUTU]

Ancak bu biçimin işe yarayacağı koşulları söyleyebilmek için önce tekil noktaları sınıflandırmamız gerekir.

---

### Düzgün ve düzgün olmayan tekil nokta

Denklemi yine normalleştirilmiş biçimde yazalım:

$$y''+P_{1}(x)y'+P_{2}(x)y=0,\qquad P_{1}=\frac{a_{1}}{a_{0}},\quad P_{2}=\frac{a_{2}}{a_{0}}$$

[KUTU]
**TANIM.** $P_{1}$ ve $P_{2}$'den en az biri $x_{0}$'da analitik olmasın, yani $x_{0}$ bir tekil nokta olsun. Şu iki çarpımı kuralım:

$$(x-x_{0})P_{1}(x)\qquad\text{ve}\qquad (x-x_{0})^{2}P_{2}(x) \tag{5.50}$$

Bu iki fonksiyonun **ikisi de** $x_{0}$'da analitikse, $x_{0}$'a denklemin bir **düzgün tekil noktası (regular singular point)** denir.

Bu çarpımlardan biri (veya ikisi) $x_{0}$'da analitik değilse, $x_{0}$'a bir **düzgün olmayan tekil nokta (irregular singular point)** denir.
[/KUTU]

Sınıflandırmanın mantığı şudur: $(x-x_{0})$ ve $(x-x_{0})^{2}$ çarpanları, $P_{1}$ ve $P_{2}$'nin tekil noktadaki patlamasını "sönümlemeye" çalışır. Patlama ==yeterince zayıfsa== çarpım analitik hâle gelir ve tekillik düzgündür; ==çok şiddetliyse== çarpım bile kurtaramaz ve tekillik düzgün değildir.

Çarpanların dereceleri keyfi seçilmemiştir: $P_{1}$ için birinci, $P_{2}$ için ikinci kuvvet alınır. Bu, denklemin $y'$ ve $y$ terimlerinin ölçekleme davranışından gelir.

---

### Frobenius çözümünün varlığı

[KUTU]
**THEoREM 5.2**

**Hipotez.** $x_{0}$ noktası, $(5.1)$ diferansiyel denkleminin bir **düzgün tekil noktasıdır**.

**Sonuç.** $(5.1)$ denkleminin

$$|x-x_{0}|^{r}\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n} \tag{5.49}$$

biçiminde, aşikâr olmayan **en az bir** çözümü vardır. Buradaki $r$, belirlenebilen kesin bir (reel ya da karmaşık) sabittir ve bu çözüm $x_{0}$ etrafındaki bir **delinmiş aralıkta (deleted interval)** $0<|x-x_{0}|<R$ ($R>0$) geçerlidir.
[/KUTU]

İki farkı THEoREM 5.1 ile karşılaştırarak görmek gerekir:

| | THEoREM 5.1 (adi nokta) | THEoREM 5.2 (düzgün tekil nokta) |
|---|---|---|
| Kaç çözüm garanti edilir | **İki** lineer bağımsız çözüm | **En az bir** çözüm |
| Çözümün biçimi | $\sum c_{n}(x-x_{0})^{n}$ | $\vert x-x_{0}\vert^{r}\sum c_{n}(x-x_{0})^{n}$ |
| Geçerlilik aralığı | $\vert x-x_{0}\vert<R$ ($x_{0}$ dahil) | $0<\vert x-x_{0}\vert<R$ (==$x_{0}$ hariç==) |

==İki fark da önemlidir.== Tekil noktada yalnızca bir çözüm garanti edilir — ikincisini bulmak ayrı bir iştir. Ayrıca aralık deliktir: çözüm $x_{0}$'ın kendisinde tanımlı olmayabilir, ki bu $r<0$ olduğunda gerçekten böyledir.

**Düzgün olmayan tekil noktalar için bu THEoREM hiçbir şey söylemez.** O durumda $(5.49)$ biçiminde bir çözüm bulunabilir de bulunamayabilir de.

---

[CLAUDE] "Düzgün tekil" testi: iki çarpım, iki limit
Tekil bir noktanın düzgün (regular) olup olmadığı iki çarpıma bakılarak anlaşılır:

$$\left(x-x_{0}\right)P(x)\qquad\text{ve}\qquad \left(x-x_{0}\right)^{2}Q(x)$$

==İkisi de $x_{0}$'da analitikse (yani limitleri sonluysa) tekil nokta düzgündür== ve Frobenius uygulanabilir. Değilse düzensizdir, bu derste yöntem yok.

**Ezber cümlesi:** ==$P$'ye bir çarpan, $Q$'ya iki çarpan.== Sırayı karıştırmayın.

**Pratik kısayol.** $x_{0}=0$ ve denklem $x^{2}y''+x\,b(x)y'+c(x)y=0$ biçimine sokulabiliyorsa ($b,c$ analitik), nokta ==zaten düzgündür,== ayrıca test etmeye gerek yok. Cauchy-Euler denklemi bu kalıbın en basit hâlidir — nitekim Frobenius'un başlangıç denklemi (indicial equation) tam olarak Cauchy-Euler'in karakteristik denklemidir.

**Bağlantı:** Bölüm 3'teki Cauchy-Euler'i hatırlayın. Frobenius'taki $x^{r}$ çarpanı oradaki $x^{m}$ denemesinin ta kendisidir; ==seri kısmı yalnızca bir düzeltme terimidir.==
[/CLAUDE]

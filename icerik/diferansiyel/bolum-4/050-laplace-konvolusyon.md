---
id: laplace-konvolusyon
menu: 4.2 Konvolüsyon
tip: konu
baslik: 4.2 &nbsp;Konvolüsyon ve Konvolüsyon THEoREM'i
---

Tablo kullanırken işe yarayan ikinci önemli araç **konvolüsyon (convolution)** kavramıdır. Kısmi kesirlerin yetmediği durumlarda devreye girer.

[KUTU]
**TANIM.** $f$ ve $g$, her sonlu kapalı $0\le t\le b$ aralığında parçalı sürekli ve üstel mertebeden iki fonksiyon olsun. $f*g$ ile gösterilen ve

$$f(t)*g(t)=\int_{0}^{t}f(\tau)\,g(t-\tau)\,d\tau \tag{9.30}$$

ile tanımlanan fonksiyona, $f$ ile $g$'nin **konvolüsyonu** denir.
[/KUTU]

İntegralin yapısına dikkat edin: ==integral değişkeni $\tau$, üst sınır ise $t$'dir.== İki fonksiyonun argümanları $\tau$ ve $t-\tau$ olduğundan toplamları hep $t$'ye eşittir.

---

### Konvolüsyon değişmelidir

$(9.30)$'da $u=t-\tau$ değişken değişimi yapalım. O zaman $\tau=t-u$, $d\tau=-du$ olur; $\tau=0$ iken $u=t$, $\tau=t$ iken $u=0$:

$$f(t)*g(t)=\int_{0}^{t}f(\tau)g(t-\tau)\,d\tau=-\int_{t}^{0}f(t-u)g(u)\,du=\int_{0}^{t}g(u)f(t-u)\,du$$

Sağdaki ifade $g(t)*f(t)$ tanımının ta kendisidir:

$$\boxed{\;f*g=g*f\;} \tag{9.31}$$

==Bu pratikte doğrudan işe yarar:== iki integralden hangisi kolaysa onu hesaplarsınız.

---

### Konvolüsyon THEoREM'i

[KUTU]
**THEoREM 9.8**

**Hipotez.** $f$ ve $g$, her sonlu kapalı $0\le t\le b$ aralığında parçalı sürekli ve $e^{at}$ mertebesinden olsun.

**Sonuç.**

$$\mathcal{L}\{f*g\}=\mathcal{L}\{f\}\,\mathcal{L}\{g\} \tag{9.32}$$
[/KUTU]

==Bu THEoREM'in söylediği şey çarpıcıdır:== $s$ uzayındaki **çarpma**, $t$ uzayındaki **konvolüsyona** karşılık gelir. Sıradan çarpımın karşılığı değildir — yani $\mathcal{L}\{f\cdot g\}\neq\mathcal{L}\{f\}\mathcal{L}\{g\}$.

**İspatın fikri.** Tanımdan

$$\mathcal{L}\{f*g\}=\int_{0}^{\infty}e^{-st}\left[\int_{0}^{t}f(\tau)g(t-\tau)\,d\tau\right]dt$$

Bu ardışık integral, $\tau=0$ ve $t=\tau$ doğrularıyla sınırlı $45^{\circ}$'lik kama bölgesi $R_{1}$ üzerinde bir **iki katlı integraldir**. Şu değişken değişimini yapalım:

$$u=t-\tau,\qquad v=\tau \tag{9.36}$$

Bu dönüşümün **Jacobiyeni 1'dir** ve $R_{1}$ kama bölgesini $u>0$, $v>0$ çeyrek düzlemine taşır. İntegral şuna dönüşür:

$$\iint_{R_{2}}e^{-s(u+v)}f(v)g(u)\,du\,dv$$

$e^{-s(u+v)}=e^{-sv}e^{-su}$ olduğundan ve bölge çeyrek düzlem olduğundan integral **ayrışır**:

$$\int_{0}^{\infty}e^{-sv}f(v)\,dv\cdot\int_{0}^{\infty}e^{-su}g(u)\,du=\mathcal{L}\{f\}\,\mathcal{L}\{g\}$$

İntegraller $s>a$ için mutlak yakınsak olduğundan yapılan işlemler meşrudur. $\blacksquare$

[KUTU]
**İspatın can alıcı adımı değişken değişimidir.** Orijinal bölge bir kamadır ($0\le\tau\le t$), yani iki değişken birbirine bağlıdır ve integral ayrışamaz. $(9.36)$ dönüşümü bölgeyi çeyrek düzleme çevirir; orada $u$ ile $v$ ==bağımsız hâle gelir== ve integral iki ayrı integralin çarpımına ayrılır. Konvolüsyonun tanımındaki tuhaf $g(t-\tau)$ ifadesinin sebebi tam olarak budur — o biçim, dönüşümden sonra ayrışmayı mümkün kılar.
[/KUTU]

---

### Ters dönüşümde kullanımı

$\mathcal{L}\{f\}=F$ ve $\mathcal{L}\{g\}=G$ yazarsak $(9.32)$ şu hâle gelir:

$$\mathcal{L}\{f(t)*g(t)\}=F(s)G(s)$$

Ters yönde okursak — ==asıl kullanacağımız biçim budur:==

$$\mathcal{L}^{-1}\{F(s)G(s)\}=f(t)*g(t)=\int_{0}^{t}f(\tau)g(t-\tau)\,d\tau \tag{9.40}$$

$(9.31)$ sayesinde şu da geçerlidir:

$$\mathcal{L}^{-1}\{F(s)G(s)\}=g(t)*f(t)=\int_{0}^{t}g(\tau)f(t-\tau)\,d\tau \tag{9.41}$$

**Yani:** elinizdeki $F(s)$ ifadesini, ters dönüşümlerini bildiğiniz iki parçanın **çarpımı** olarak yazabiliyorsanız, cevabı bir integralle bulabilirsiniz.

---

[SORU] **Örnek 9.24.** &nbsp; Konvolüsyon ve Tablo 9.1'i kullanarak $\displaystyle\mathcal{L}^{-1}\left\{\frac{1}{s\left(s^{2}+1\right)}\right\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Çarpanlara ayır.**

$$\frac{1}{s\left(s^{2}+1\right)}=F(s)\,G(s),\qquad F(s)=\frac{1}{s},\quad G(s)=\frac{1}{s^{2}+1}$$

**Adım 2 — Her parçanın ters dönüşümünü tablodan oku.**

1 numara: $f(t)=\mathcal{L}^{-1}\left\{\frac{1}{s}\right\}=1$

3 numara ($b=1$): $g(t)=\mathcal{L}^{-1}\left\{\frac{1}{s^{2}+1}\right\}=\sin t$

**Adım 3 — İki integralden kolayını seç.**

$(9.40)$ ile:

$$\mathcal{L}^{-1}\left\{\frac{1}{s\left(s^{2}+1\right)}\right\}=\int_{0}^{t}1\cdot\sin(t-\tau)\,d\tau$$

$(9.41)$ ile:

$$=\int_{0}^{t}\sin\tau\cdot 1\,d\tau$$

==İkincisi belirgin biçimde kolay==, onu hesaplayalım:

$$\int_{0}^{t}\sin\tau\,d\tau=\Big[-\cos\tau\Big]_{0}^{t}=-\cos t+1$$

$$\boxed{\;\mathcal{L}^{-1}\left\{\frac{1}{s\left(s^{2}+1\right)}\right\}=1-\cos t\;}$$

**Not.** Bu sonuç kısmi kesirlerle de bulunabilirdi: $\frac{1}{s(s^{2}+1)}=\frac{1}{s}-\frac{s}{s^{2}+1}$, ters dönüşümü $1-\cos t$. ==İki yol da aynı cevabı verir.==

[KUTU]
**Peki konvolüsyon ne zaman vazgeçilmez olur?** Kısmi kesirlerin uygulanamadığı durumlarda. Örneğin

$$\mathcal{L}^{-1}\left\{\frac{1}{\left(s^{2}+b^{2}\right)^{2}}\right\}$$

ifadesinde payda tekrarlı **indirgenemez** kuadratiktir; kısmi kesir açılımı yeni bir şey vermez, çünkü ifade zaten en sade hâlindedir. Ama $\frac{1}{s^{2}+b^{2}}$'nin kendisiyle çarpımı olarak görülüp konvolüsyonla hesaplanabilir ve Tablo 9.1'in 13 numaralı girdisi olan

$$\frac{\sin bt-bt\cos bt}{2b^{3}}$$

sonucuna ulaşılır. ==Tablodaki o tuhaf görünen girdinin kaynağı budur.==
[/KUTU]

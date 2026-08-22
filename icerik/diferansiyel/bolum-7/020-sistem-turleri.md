---
id: operator-sistem-turleri
menu: 7.1 Lineer Sistem Türleri
tip: konu
baslik: 7.1 &nbsp;Lineer Sistem Türleri ve Normal Biçim
---

### Genel lineer sistem

İki bilinmeyenli ($x$ ve $y$) iki birinci mertebeden denklemden oluşan **genel lineer sistem** şu biçimdedir:

$$a_{1}(t)x'+a_{2}(t)y'+a_{3}(t)x+a_{4}(t)y=F_{1}(t)$$

$$b_{1}(t)x'+b_{2}(t)y'+b_{3}(t)x+b_{4}(t)y=F_{2}(t) \tag{7.1}$$

Üsler bağımsız değişken $t$'ye göre türevi gösterir. Biz **sabit katsayılı** sistemlerle ilgileneceğiz. Örnek:

$$2x'+3y'-2x+y=t^{2},\qquad x'-2y'+3x+4y=e^{t}$$

[KUTU]
**TANIM.** $(7.1)$ sisteminin bir **çözümü**, öyle bir sıralı gerçel fonksiyon çifti $(f,g)$'dir ki $x=f(t)$, $y=g(t)$ yazıldığında sistemin ==her iki denklemi de== bir $a\le t\le b$ aralığında **eşzamanlı olarak** sağlanır.
[/KUTU]

Üç bilinmeyenli ($x,y,z$) durumda genel biçim benzer şekilde uzar:

$$a_{1}(t)x'+a_{2}(t)y'+a_{3}(t)z'+a_{4}(t)x+a_{5}(t)y+a_{6}(t)z=F_{1}(t)$$

$$b_{1}(t)x'+b_{2}(t)y'+b_{3}(t)z'+b_{4}(t)x+b_{5}(t)y+b_{6}(t)z=F_{2}(t) \tag{7.2}$$

$$c_{1}(t)x'+c_{2}(t)y'+c_{3}(t)z'+c_{4}(t)x+c_{5}(t)y+c_{6}(t)z=F_{3}(t)$$

---

### Normal biçim

Genel biçimin özel bir hâli vardır ve teoride asıl kullanılan odur:

$$x'=a_{11}(t)x+a_{12}(t)y+F_{1}(t)$$

$$y'=a_{21}(t)x+a_{22}(t)y+F_{2}(t) \tag{7.4}$$

Buna iki bilinmeyenli durumda **normal biçim (normal form)** denir.

==Ayırt edici özelliği türevlerin nasıl göründüğüdür:== her denklemde tek bir türev vardır ve o türev denklemin sol tarafında yalnız bırakılmıştır. Genel biçimde ise $x'$ ve $y'$ aynı denklemde karışık durabilir.

**Değişken katsayılı örnek:**

$$x'=t^{2}x+(t+1)y+t^{3},\qquad y'=te^{t}x+t^{3}y-e^{t}$$

**Sabit katsayılı örnek:**

$$x'=5x+7y+t^{2},\qquad y'=2x-3y+2t$$

Üç bilinmeyenli normal biçim de aynı mantıkla yazılır: her denklemin solunda tek bir türev, sağında bilinmeyenlerin lineer birleşimi.

---

### $n$. mertebeden tek denklem ile sistem arasındaki köprü

Bu bölümün en önemli yapısal gözlemi budur. Tek bilinmeyenli $n$. mertebeden bir lineer denklem alalım:

$$x^{(n)}+a_{1}(t)x^{(n-1)}+\dots+a_{n-1}(t)x'+a_{n}(t)x=F(t) \tag{7.6}$$

Şu yeni bilinmeyenleri tanımlayalım — ==her biri bir öncekinin türevi olacak biçimde:==

$$x_{1}=x,\quad x_{2}=x',\quad x_{3}=x'',\quad\dots,\quad x_{n}=x^{(n-1)} \tag{7.7}$$

Bu tanımlardan doğrudan şunlar çıkar:

$$x'=x_{1}',\quad x''=x_{2}',\quad\dots,\quad x^{(n)}=x_{n}' \tag{7.8}$$

$(7.7)$ ve $(7.8)$'i birlikte kullanırsak, tek bir $n$. mertebeden denklem şu **birinci mertebeden $n$ denkleme** dönüşür:

$$x_{1}'=x_{2}$$
$$x_{2}'=x_{3}$$
$$\vdots$$
$$x_{n-1}'=x_{n}$$
$$x_{n}'=-a_{n}(t)x_{1}-a_{n-1}(t)x_{2}-\dots-a_{1}(t)x_{n}+F(t) \tag{7.9}$$

[KUTU]
**Bu dönüşüm neden önemli?**

İlk $n-1$ denklem yalnızca tanımların kendisidir — bilgi taşımazlar, sadece "her yeni değişken bir öncekinin türevidir" der. ==Bütün bilgi son denklemdedir==; orijinal denklem oraya taşınmıştır.

Sonuç: **tek bir $n$. mertebeden denklem ile $n$ bilinmeyenli normal lineer sistem aslında aynı nesnedir.** Bu yüzden sistemler için geliştirilen her yöntem, tek yüksek mertebeli denklemlere de uygulanabilir; tersi de doğrudur. Sayısal çözüm yazılımlarının hepsi yüksek mertebeli denklemleri önce bu biçime çevirir.
[/KUTU]

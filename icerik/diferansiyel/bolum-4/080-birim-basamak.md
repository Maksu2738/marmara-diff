---
id: laplace-birim-basamak
menu: 4.4 Birim Basamak Fonksiyonu
tip: konu
baslik: 4.4 &nbsp;Süreksiz Zorlama ve Birim Basamak Fonksiyonu
defterde: yok
---

Şimdiye kadar zorlama terimi $b(t)$ hep sürekliydi. Gerçek problemlerde ise ==zorlama aniden devreye girer ya da kesilir==: bir anahtarın açılması, bir yükün bırakılması, bir darbenin uygulanması.

Bu bölümde, denklemdeki homojen olmayan terimin **bir veya daha fazla sonlu süreksizliği** olduğu başlangıç değer problemlerini çözeceğiz. Bunun için önce böyle fonksiyonların Laplace dönüşümünü bulmamız gerekiyor.

[KUTU]
**TANIM.** Her $a\ge 0$ gerçel sayısı için **birim basamak fonksiyonu (unit step function)** $u_{a}$, negatif olmayan $t$ için şöyle tanımlanır:

$$u_{a}(t)=\begin{cases}0, & t<a\\ 1, & t>a\end{cases} \tag{9.73}$$
[/KUTU]

Özel olarak $a=0$ alınırsa biçimsel olarak

$$u_{0}(t)=\begin{cases}0, & t<0\\ 1, & t>0\end{cases}$$

olur; ama $u_{a}$ yalnızca negatif olmayan $t$ için tanımlandığından bu şuna iner:

$$u_{0}(t)=1\qquad (t>0) \tag{9.74}$$

==Yani $u_{0}$, sabit $1$ fonksiyonudur.==

---

### Birim basamağın dönüşümü

$u_{a}$ fonksiyonu THEoREM 9.1'in hipotezlerini sağlar (parçalı sürekli ve sınırlı, dolayısıyla üstel mertebeden), o hâlde dönüşümü vardır. Doğrudan tanımdan hesaplayalım — ==integral $t=a$'da ikiye bölünür:==

$$\mathcal{L}\{u_{a}(t)\}=\int_{0}^{a}e^{-st}\cdot 0\,dt+\int_{a}^{\infty}e^{-st}\cdot 1\,dt=\lim_{R\to\infty}\left[\frac{-e^{-st}}{s}\right]_{a}^{R}$$

$$=\lim_{R\to\infty}\frac{-e^{-sR}+e^{-as}}{s}$$

$s>0$ için $e^{-sR}\to 0$:

$$\boxed{\;\mathcal{L}\{u_{a}(t)\}=\frac{e^{-as}}{s}\qquad (s>0)\;} \tag{9.75}$$

[KUTU]
**$e^{-as}$ çarpanı bu bölümün imzasıdır.** Bundan sonra bir dönüşümde $e^{-as}$ görürseniz, arkasında ==$t=a$ anında olan bir şey== vardır: bir açılma, bir kapanma, bir gecikme. $a=0$ konursa $\frac{1}{s}$ çıkar, yani $\mathcal{L}\{1\}$ — tutarlı.
[/KUTU]

---

### Basamak fonksiyonlarını birim basamaklarla yazmak

Pek çok basamak fonksiyonu, $u_{a}$'ların uygun **lineer birleşimi** olarak yazılabilir. Sonra lineerlik özelliği (THEoREM 9.2) ve $(9.75)$ ile dönüşümü kolayca bulunur.

[SORU] **Örnek 9.30.** &nbsp; Aşağıdaki basamak fonksiyonunun Laplace dönüşümünü bulunuz:
$$f(t)=\begin{cases}0, & 0<t<2\\ 3, & 2<t<5\\ 0, & t>5\end{cases}$$
[CEVAP]
**Adım 1 — Fonksiyonu iki parçanın farkı olarak gör.**

Değerleri şöyle yeniden yazalım:

$$f(t)=\begin{cases}0-0, & 0<t<2\\ 3-0, & 2<t<5\\ 3-3, & t>5\end{cases}$$

Bu düzenleme şunu gösteriyor: $f$, değerleri

$$\begin{cases}0, & 0<t<2\\ 3, & t>2\end{cases}$$

olan fonksiyondan, değerleri

$$\begin{cases}0, & 0<t<5\\ 3, & t>5\end{cases}$$

olan fonksiyonun çıkarılmasıyla elde edilir.

**Adım 2 — Birim basamaklar cinsinden yaz.**

Birincisi $3u_{2}(t)$, ikincisi $3u_{5}(t)$:

$$f(t)=3u_{2}(t)-3u_{5}(t)$$

**Adım 3 — Lineerlik ve $(9.75)$.**

$$\mathcal{L}\{f(t)\}=3\cdot\frac{e^{-2s}}{s}-3\cdot\frac{e^{-5s}}{s}$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{3}{s}\left(e^{-2s}-e^{-5s}\right)\;}$$

[KUTU]
**Genel kural — "aç ve kapat".** Bir dikdörtgen darbe, iki basamağın farkıdır:

$$\underbrace{c\,u_{a}(t)}_{t=a\text{'da aç}}-\underbrace{c\,u_{b}(t)}_{t=b\text{'de kapat}}\;=\;\begin{cases}0, & t<a\\ c, & a<t<b\\ 0, & t>b\end{cases}$$

Bu kalıp bir kez oturunca, kaç basamaklı olursa olsun her merdiven fonksiyonu ==aynı yöntemle== yazılır: her sıçramada bir $u$ terimi ekleyin, katsayısı o noktadaki **sıçrama miktarı** olsun.

Örneğin $t=2$'de $0\to 3$, $t=5$'te $3\to 0$ sıçramaları var; katsayılar sırasıyla $+3$ ve $-3$. Formül doğrudan buradan okunur.
[/KUTU]

---

[CLAUDE] Parçalı fonksiyonu mekanik olarak yazmanın yolu
Deneme yanılmayla uğraşmayın. ==Her parçalı fonksiyon şu "sıçrama farkı" kuralıyla tek seferde yazılır:==

$$f(t)=f_{1}(t)+\Big[f_{2}(t)-f_{1}(t)\Big]u_{a_{1}}(t)+\Big[f_{3}(t)-f_{2}(t)\Big]u_{a_{2}}(t)+\cdots$$

Yani **her kırılma noktasında, yeni parçadan eskisini çıkarıp $u_{a}$ ile çarpın.**

**İki sık kalıp:**

- **Pencere** (bir aralıkta açık, sonra kapalı): $\;f\left[u_{a}-u_{b}\right]$ — "$a$'da aç, $b$'de kapat".
- **Doyan rampa** (artıp sabitlenen): $\;mt-m(t-a)u_{a}(t)$ — ikinci terim eğimi sıfırlar, biriken değeri korur.

**Kontrol:** yazdığınız ifadeye her aralıktan bir $t$ değeri koyun. ==Pencere biçiminde $\mathcal{L}\{f\}$'nin payı $\left(1-e^{-as}\right)$ çarpanı taşır; sonradan başlayan zorlamada ise yalnız $e^{-as}$ çıkar.== Hangisinin çıktığı, doğru yazıp yazmadığınızın işaretidir.
[/CLAUDE]

---
id: operator-alternatif
menu: 7.5 Alternatif Yöntem
tip: konu
baslik: 7.5 &nbsp;Sabit Bağıntılarından Kaçınan Alternatif Yöntem
---

Örnek 7.3'te en zahmetli kısım, dört sabit arasındaki bağıntıları bulmaktı. ==Bu adımdan tamamen kaçınmanın bir yolu var.==

### Fikir

$x$'i bulmaya kadar her şey aynıdır: $L_{5}x=g_{1}$ çözülür ve

$$x=c_{1}u_{1}+\dots+c_{N}u_{N}+U_{1}$$

elde edilir. Bundan sonrası farklıdır.

Sistemden $y$'nin **türevlerini içeren bütün terimleri** eleyecek bir bağıntı $R$ elde etmeye çalışırız. $R$, bilinmeyen $y$'yi içerir ama ==$y'$, $y''$ gibi hiçbir türevini içermez==. $R$ içinde $x$ ve türevleri bulunabilir — ama $x$ zaten bilinmektedir, türevleri de doğrudan alınabilir.

$x$ ve türevlerini $R$'ye koyunca geriye ==tek bilinmeyenli, tek bir cebirsel denklem== kalır. Onu çözerek $y$ doğrudan bulunur.

[KUTU]
**Kazanç:** $L_{5}y=g_{2}$ denklemini çözmeye gerek kalmaz, $k_{i}$ sabitleri hiç ortaya çıkmaz, dolayısıyla ==sabitler arasında bağıntı kurmaya da gerek kalmaz.== $x$'ten gelen $N$ sabit zaten doğru sayıdadır.

**Sınırı:** Bu yol, $L_{1},L_{2},L_{3},L_{4}$ operatörlerinin ==hepsi birinci mertebedense== her zaman kolayca uygulanır. Daha yüksek mertebeli operatör varsa $y$'nin bütün türevlerini elemek genelde zordur.
[/KUTU]

---

### Birinci mertebeli durum için açık formül

Operatörler şu biçimde olsun:

$$L_{1}\equiv a_{0}D+a_{1},\quad L_{2}\equiv b_{0}D+b_{1},\quad L_{3}\equiv \alpha_{0}D+\alpha_{1},\quad L_{4}\equiv \beta_{0}D+\beta_{1}$$

Birinci denklemi $\beta_{0}$ ile, ikinciyi $b_{0}$ ile çarpıp çıkarırsak $y$'nin türevli terimleri gider ve şu bağıntı kalır:

$$\Big[\left(a_{0}\beta_{0}-b_{0}\alpha_{0}\right)D+\left(a_{1}\beta_{0}-b_{0}\alpha_{1}\right)\Big]x+\left(b_{1}\beta_{0}-b_{0}\beta_{1}\right)y=\beta_{0}f_{1}(t)-b_{0}f_{2}(t)$$

Bu ifade $y$'yi içerir ama ==$y$'nin hiçbir türevini içermez.== Buradan $y$ çekilir:

$$\boxed{\;y=\frac{\left(b_{0}\alpha_{0}-a_{0}\beta_{0}\right)Dx+\left(b_{0}\alpha_{1}-a_{1}\beta_{0}\right)x+\beta_{0}f_{1}(t)-b_{0}f_{2}(t)}{b_{1}\beta_{0}-b_{0}\beta_{1}}\;} \tag{7.25}$$

Bu, $b_{1}\beta_{0}-b_{0}\beta_{1}\neq 0$ varsayımıyla geçerlidir.

$x$ bilindiğine göre $Dx$ de basit türevle bulunur; ikisini $(7.25)$'e koyunca $y$ doğrudan çıkar.

[KUTU]
**Formülü ezberlemeye gerek yok.** Uygulamada yapılan şey basittir: iki denklemi, $y'$ terimleri birbirini götürecek biçimde çarpıp toplayın (ya da çıkarın). Aşağıdaki örnekte bu, iki denklemi ==doğrudan toplamak== kadar kolay çıkıyor.
[/KUTU]

---

[SORU] **Örnek 7.4.** &nbsp; Örnek 7.3'teki sistemi alternatif yöntemle çözünüz:
$$2x'-2y'-3x=t,\qquad 2x'+2y'+3x+8y=2$$
[CEVAP]
**Adım 1 — Operatör gösterimi.**

$$(2D-3)x-2Dy=t$$
$$(2D+3)x+(2D+8)y=2$$

**Adım 2 — $y$'nin türevlerini ele.**

Bu sistemde işimiz kolay: iki denklemi ==doğrudan toplayalım==. $-2Dy$ ile $2Dy$ birbirini götürür:

$$\Big[(2D-3)+(2D+3)\Big]x+\Big[-2D+(2D+8)\Big]y=t+2$$

$$4Dx+8y=t+2$$

==Bu bağıntı $y$'yi içeriyor ama $y'$ içermiyor.== Aradığımız $R$ bağıntısı budur. $y$'yi çekelim:

$$y=\frac{t+2-4Dx}{8} \tag{7.26}$$

**Adım 3 — $x$ ve $Dx$'i yerine koy.**

Örnek 7.3'ten $x=c_{1}e^{t}+c_{2}e^{-3t}-\dfrac{1}{3}t-\dfrac{11}{36}$ biliniyor. Türevi:

$$Dx=c_{1}e^{t}-3c_{2}e^{-3t}-\frac{1}{3}$$

$(7.26)$'ya koyalım:

$$y=\frac{1}{8}\left[t+2-4\left(c_{1}e^{t}-3c_{2}e^{-3t}-\frac{1}{3}\right)\right]$$

$$=\frac{1}{8}\left[t+2-4c_{1}e^{t}+12c_{2}e^{-3t}+\frac{4}{3}\right]$$

Terim terim bölelim — sabit kısım $\dfrac{1}{8}\left(2+\dfrac{4}{3}\right)=\dfrac{1}{8}\cdot\dfrac{10}{3}=\dfrac{5}{12}$:

$$\boxed{\;y=-\frac{1}{2}c_{1}e^{t}+\frac{3}{2}c_{2}e^{-3t}+\frac{1}{8}t+\frac{5}{12}\;}$$

**Genel çözüm:**

$$x=c_{1}e^{t}+c_{2}e^{-3t}-\frac{1}{3}t-\frac{11}{36},\qquad y=-\frac{1}{2}c_{1}e^{t}+\frac{3}{2}c_{2}e^{-3t}+\frac{1}{8}t+\frac{5}{12}$$

$c_{1}$ ve $c_{2}$ keyfi sabitlerdir.

[KUTU]
**İki yöntemin karşılaştırması.** Sonuç Örnek 7.3'tekiyle ==birebir aynı==. Ama bu yolda:

- $L_{5}y=g_{2}$ denklemi hiç çözülmedi
- $k_{1},k_{2}$ sabitleri hiç ortaya çıkmadı
- $(7.23)$ gibi bağıntılar kurulmadı
- Sabit sayısı baştan doğru çıktı ($c_{1}$ ve $c_{2}$)

Birinci mertebeli operatörlerden oluşan sistemlerde ==her zaman bu yolu tercih edin.==
[/KUTU]

---

[CLAUDE] Alternatif yöntem ne zaman kazandırır
Determinant/Cramer yaklaşımı, yok etmeyle aynı sonuca ==daha düzenli bir yoldan== varır:

$$\left|\begin{matrix}L_{1} & L_{2}\\ L_{3} & L_{4}\end{matrix}\right|x=\left|\begin{matrix}f_{1} & L_{2}\\ f_{2} & L_{4}\end{matrix}\right|,\qquad \left|\begin{matrix}L_{1} & L_{2}\\ L_{3} & L_{4}\end{matrix}\right|y=\left|\begin{matrix}L_{1} & f_{1}\\ L_{3} & f_{2}\end{matrix}\right|$$

**Avantajı:** sol taraf ==her iki bilinmeyen için de aynı== operatördür, yani karakteristik denklemi bir kez kurarsınız. Hangi denklemi neyle çarpacağınızı düşünmezsiniz.

**Dikkat edilecek nokta:** sağ taraftaki determinantlar açılırken $L$'ler ==operatör olduğu için sıra korunmalıdır.== $L_{2}f_{2}$ demek "$f_{2}$'ye $L_{2}$ operatörünü uygula" demektir, çarpım değil.

**Ve yine aynı kural:** bu yöntem de $x$ ile $y$'yi ayrı ayrı verdiği için ==sabitler fazla çıkar.== Determinantın derecesi kadar bağımsız sabit vardır; kalanları elemek için sonucu orijinal sisteme geri koymak zorunludur. (Bkz. 7.4.)
[/CLAUDE]

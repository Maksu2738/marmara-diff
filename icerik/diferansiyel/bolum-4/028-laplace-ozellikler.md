---
id: laplace-ozellikler
menu: 4.1 Temel Özellikler
tip: konu
baslik: 4.1 &nbsp;Laplace Dönüşümünün Temel Özellikleri
---

### Lineerlik

[KUTU]
**THEoREM 9.2 — LİNEERLİK ÖZELLİĞİ (the linear property)**

$f_{1}$ ve $f_{2}$, Laplace dönüşümleri var olan fonksiyonlar, $c_{1}$ ve $c_{2}$ sabitler olsun. O zaman:

$$\mathcal{L}\{c_{1}f_{1}(t)+c_{2}f_{2}(t)\}=c_{1}\mathcal{L}\{f_{1}(t)\}+c_{2}\mathcal{L}\{f_{2}(t)\} \tag{9.9}$$
[/KUTU]

**İspat.** Doğrudan tanım $(9.1)$'den çıkar — integral lineer bir işlemdir. $\blacksquare$

Bu özellik, dönüşümü doğrudan hesaplamak yerine ==bilinen dönüşümleri birleştirerek== yeni dönüşümler elde etmemizi sağlar. Aşağıdaki örnek tipik kullanımıdır.

[SORU] **Örnek 9.11.** &nbsp; THEoREM 9.2'yi kullanarak $\mathcal{L}\{\sin^{2}at\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Trigonometrik özdeşlikle lineer birleşime çevir.**

$$\sin^{2}at=\frac{1-\cos 2at}{2}$$

$$\mathcal{L}\{\sin^{2}at\}=\mathcal{L}\left\{\frac{1}{2}-\frac{1}{2}\cos 2at\right\}$$

==İşin püf noktası bu adımdır:== $\sin^{2}$ doğrudan tablodan okunamaz, ama özdeşlikle tablodaki iki fonksiyonun lineer birleşimine dönüşür.

**Adım 2 — Lineerliği uygula.**

$$=\frac{1}{2}\mathcal{L}\{1\}-\frac{1}{2}\mathcal{L}\{\cos 2at\}$$

**Adım 3 — Tablodan oku.**

$(9.2)$'den $\mathcal{L}\{1\}=\dfrac{1}{s}$, $(9.6)$'dan ($b=2a$ ile) $\mathcal{L}\{\cos 2at\}=\dfrac{s}{s^{2}+4a^{2}}$:

$$\mathcal{L}\{\sin^{2}at\}=\frac{1}{2}\cdot\frac{1}{s}-\frac{1}{2}\cdot\frac{s}{s^{2}+4a^{2}}$$

**Adım 4 — Sadeleştir.**

$$=\frac{1}{2}\cdot\frac{\left(s^{2}+4a^{2}\right)-s^{2}}{s\left(s^{2}+4a^{2}\right)}=\frac{1}{2}\cdot\frac{4a^{2}}{s\left(s^{2}+4a^{2}\right)}$$

$$\boxed{\;\mathcal{L}\{\sin^{2}at\}=\frac{2a^{2}}{s\left(s^{2}+4a^{2}\right)}\;} \tag{9.10}$$

---

### Türevin dönüşümü — yöntemin kalbi

Laplace dönüşümünü diferansiyel denklem çözmekte kullanışlı kılan asıl özellik budur.

[KUTU]
**THEoREM 9.3**

**Hipotez**

1. $f$, $t\ge 0$ için **sürekli** ve $e^{\alpha t}$ mertebesinden olsun;
2. $f'$ (türevi), her sonlu kapalı $0\le t\le b$ aralığında **parçalı sürekli** olsun.

**Sonuç.** $\mathcal{L}\{f'\}$, $s>\alpha$ için vardır ve

$$\mathcal{L}\{f'(t)\}=s\,\mathcal{L}\{f(t)\}-f(0) \tag{9.11}$$
[/KUTU]

==Bu formül, türev almayı "$s$ ile çarpma" işlemine çevirir.== Diferansiyel denklemin cebirsel denkleme dönüşmesinin sebebi tam olarak budur.

$-f(0)$ terimi de kritiktir: **başlangıç koşulu denkleme kendiliğinden girer.** Klasik yöntemlerde önce genel çözüm bulunup sonra başlangıç koşulu uygulanırken, Laplace yönteminde koşul ==daha ilk adımda== hesaba katılır.

[KUTU]
**Hipotezlerdeki asimetriye dikkat.** $f$'nin **sürekli**, $f'$'nün ise yalnızca **parçalı sürekli** olması isteniyor. Yani fonksiyonun kendisi kırılamaz ama türevi sıçrayabilir — köşeli grafikler (mesela üçgen dalga) bu sınıfa girer. Bu esneklik, süreksiz zorlamalı problemlerde işe yarayacak.
[/KUTU]

**İspatın fikri.** Tanımdan

$$\mathcal{L}\{f'(t)\}=\lim_{R\to\infty}\int_{0}^{R}e^{-st}f'(t)\,dt$$

Kapalı $0\le t\le R$ aralığında $f'$ en fazla sonlu sayıda süreksizliğe sahiptir; bunlara $t_{1},t_{2},\dots,t_{n}$ diyelim:

$$0\le t_{1}<t_{2}<\dots<t_{n}\le R$$

İntegral bu noktalarda parçalara ayrılır, her parçada kısmi integrasyon uygulanır ve sınır terimleri toplanır. Süreklilik sayesinde ara noktalardaki katkılar birbirini götürür; geriye $t=0$ ve $t=R$ uçlarından gelenler kalır. $s>\alpha$ olduğunda $R$ ucundaki terim sıfıra gider ve $(9.11)$ elde edilir. $\blacksquare$

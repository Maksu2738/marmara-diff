---
id: laplace-varlik
menu: 4.1 Dönüşüm Ne Zaman Vardır
tip: konu
baslik: 4.1 &nbsp;Varlık Koşulları — Parçalı Süreklilik ve Üstel Mertebe
defterde: yok
---

Örneklerin hepsinde $(9.1)$ integralinin belirli bir $s$ aralığında var olduğunu **doğrudan hesaplayarak** gördük. Peki hesap yapmadan, hangi fonksiyonlar için bunun ==her zaman== doğru olduğunu söyleyebiliriz?

Bunun için iki kavram gerekiyor.

---

### Parçalı süreklilik

[KUTU]
**TANIM.** Bir $f$ fonksiyonu, sonlu bir $a\le t\le b$ aralığında **parçalı sürekli (piecewise continuous / sectionally continuous)** denir; eğer bu aralık sonlu sayıda alt aralığa bölünebiliyorsa ve

1. $f$, bu alt aralıkların her birinin **içinde sürekliyse**,
2. $f(t)$, her alt aralığın uç noktalarına içeriden yaklaşırken **sonlu limitlere** yaklaşıyorsa.
[/KUTU]

$t_{0}$ böyle bir uç nokta olsun. $f(t)$'nin $t_{0}$'a **soldan** yaklaşırken (küçük $t$ değerlerinden) yaklaştığı sonlu limite **sol limit** denir:

$$\lim_{t\to t_{0}^{-}}f(t)\qquad\text{ya da}\qquad f(t_{0}-)$$

Benzer şekilde **sağ limit** $f(t_{0}+)$ tanımlanır.

==Bu noktada $f(t_{0}-)$ ve $f(t_{0}+)$ ikisi de sonludur, ama genelde eşit değildir.== Fark, fonksiyonun oradaki sıçramasıdır.

**İki basit sonuç:**

- $f$ sürekliyse zaten parçalı süreklidir.
- $f$ parçalı sürekliyse **integrallenebilir**. Laplace dönüşümü bir integral olduğuna göre bu bize gereken şeydir.

[SORU] **Örnek 9.6.** &nbsp; Aşağıdaki fonksiyonun parçalı sürekli olduğunu gösterip $t=2$'deki tek yönlü limitlerini bulunuz.
$$f(t)=\begin{cases}-1, & 0<t<2\\ 1, & t>2\end{cases}$$
[CEVAP]
Her pozitif $b$ sayısı için $f$, sonlu $0\le t\le b$ aralığında parçalı süreklidir: aralık $t=2$'de ikiye bölünür, her parçanın içinde $f$ sabittir (dolayısıyla sürekli) ve uç noktalarda sonlu limitlere yaklaşır.

$$f(2-)=\lim_{t\to 2^{-}}f(t)=-1$$

$$f(2+)=\lim_{t\to 2^{+}}f(t)=+1$$

==İki limit de sonlu ama eşit değil==; $t=2$'de birim büyüklüğünde bir sıçrama vardır. Tanım bunu yasaklamaz, yalnızca limitlerin sonlu olmasını ister.

---

### Üstel mertebe

[KUTU]
**TANIM.** Bir $f$ fonksiyonuna, öyle bir $\alpha$ sabiti ve $t_{0}>0$, $M>0$ pozitif sabitleri varsa ki

$$|f(t)|\le M e^{\alpha t} \tag{9.7}$$

eşitsizliği $f(t)$'nin tanımlı olduğu bütün $t>t_{0}$ değerleri için sağlanıyorsa, **üstel mertebeden (of exponential order)** denir. Belirli bir $\alpha$ için sağlanıyorsa, $f$ ==$e^{\alpha t}$ mertebesindendir== denir.
[/KUTU]

$(9.7)$'yi yeniden yazarsak anlamı netleşir:

$$e^{-\alpha t}|f(t)|\le M \tag{9.8}$$

Yani: **$f$ üstel mertebedendir ⟺ öyle bir $\alpha$ vardır ki $e^{-\alpha t}|f(t)|$ çarpımı yeterince büyük $t$ için sınırlıdır.**

Sezgisel karşılığı şudur: $f(t)$ değerleri $t\to\infty$ iken sonsuza gidebilir, ama ==bir üstel fonksiyonun katından daha hızlı büyüyemez.==

**Not:** $f$, $e^{\alpha t}$ mertebesindense, $\beta>\alpha$ olan her $\beta$ için $e^{\beta t}$ mertebesinden de sayılır. Yani $\alpha$ tek değildir, bir alt sınır gibidir.

[SORU] **Örnek 9.8.** &nbsp; $f(t)=e^{at}\sin bt$ üstel mertebeden midir?
[CEVAP]
$|\sin bt|\le 1$ olduğundan

$$|f(t)|=e^{at}|\sin bt|\le e^{at}$$

Yani $M\ge 1$ ve $\alpha=a$ seçimiyle $(9.7)$ sağlanır. ==Evet, $e^{at}$ mertebesindendir.==

[SORU] **Örnek 9.9.** &nbsp; $f(t)=t^{n}$ ($n>0$) üstel mertebeden midir?
[CEVAP]
Herhangi bir $\alpha>0$ için

$$\lim_{t\to\infty}e^{-\alpha t}t^{n}=0$$

çünkü ==üstel azalma her polinom büyümesini yener.== Limit sıfır olduğuna göre, öyle $M>0$ ve $t_{0}>0$ vardır ki $t>t_{0}$ için $e^{-\alpha t}t^{n}\le M$ olur. Bu da $(9.8)$'in ta kendisidir:

$$|f(t)|\le Me^{\alpha t},\qquad t>t_{0}$$

$$\boxed{\;t^{n}\text{ üstel mertebedendir; }\alpha\text{ herhangi bir pozitif sayı olabilir.}\;}$$

[SORU] **Örnek 9.10.** &nbsp; $f(t)=e^{t^{2}}$ üstel mertebeden midir?
[CEVAP]
$$e^{-\alpha t}|f(t)|=e^{t^{2}-\alpha t}$$

Üsteki $t^{2}-\alpha t$ ifadesi, ==$\alpha$ ne seçilirse seçilsin== $t\to\infty$ iken $+\infty$'a gider (kare terimi doğrusal terimi bastırır). Dolayısıyla çarpım sınırsızdır.

$$\boxed{\;e^{t^{2}}\text{ üstel mertebeden DEĞİLDİR.}\;}$$

==Bu, koşulun boş bir koşul olmadığını gösteren örnektir==: gerçekten dışarıda kalan fonksiyonlar vardır.

---

### Varlık THEoREM'i

[KUTU]
**THEoREM 9.1**

**Hipotez.** $f$ gerçel fonksiyonu şu iki özelliği sağlasın:

1. Her sonlu kapalı $0\le t\le b$ ($b>0$) aralığında **parçalı sürekli**;
2. **Üstel mertebeden**, yani öyle $\alpha$, $M>0$, $t_{0}>0$ vardır ki $|f(t)|\le Me^{\alpha t}$ ($t>t_{0}$).

**Sonuç.** $f$'nin Laplace dönüşümü

$$\int_{0}^{\infty}e^{-st}f(t)\,dt$$

==$s>\alpha$ için vardır.==
[/KUTU]

**İspatın fikri.** İntegrali ikiye bölelim:

$$\int_{0}^{\infty}e^{-st}f(t)\,dt=\int_{0}^{t_{0}}e^{-st}f(t)\,dt+\int_{t_{0}}^{\infty}e^{-st}f(t)\,dt$$

- **Birinci integral** sonlu aralıktadır; Hipotez 1 (parçalı süreklilik integrallenebilirlik verir) sayesinde vardır.
- **İkinci integral** için Hipotez 2'yi kullanalım:

$$e^{-st}|f(t)|\le e^{-st}Me^{\alpha t}=Me^{-(s-\alpha)t}$$

$s>\alpha$ ise sağdaki ifade ==azalan bir üsteldir== ve $\int_{t_{0}}^{\infty}Me^{-(s-\alpha)t}dt$ yakınsar. Karşılaştırma testi gereği $\int_{t_{0}}^{\infty}e^{-st}|f(t)|dt$ de vardır; mutlak değerli integral varsa integralin kendisi de vardır.

İki parça da var olduğuna göre Laplace dönüşümü $s>\alpha$ için vardır. $\blacksquare$

[KUTU]
**Koşullar yeterlidir, gerekli değildir.** THEoREM 9.1 "bu iki koşul sağlanıyorsa dönüşüm vardır" der; tersini söylemez. Bu koşulları sağlamayan bazı fonksiyonların da Laplace dönüşümü olabilir. Ama pratikte karşılaşılan hemen her fonksiyon bu sınıfa girer.

==Ayrıca $\alpha$'nın rolüne dikkat edin:== dönüşümün geçerli olduğu aralığın alt sınırını o belirler. Örnek 9.3'te $\mathcal{L}\{e^{at}\}$ için çıkan $s>a$ koşulu tam olarak budur.
[/KUTU]

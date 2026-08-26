---
id: operator-ozfonksiyon
menu: 7.14 ★ Özdeğerler ve Özfonksiyonlar
tip: konu
baslik: 7.14 &nbsp;★ Diferansiyel Operatörler, Özdeğerler ve Özfonksiyonlar
---

7.7'de $\hat{L}=\hat{D}^{2}+2\hat{D}+1$ operatörünün $e^{x}$'i ==yalnızca ölçeklediğini== görmüştük: $\hat{L}e^{x}=4e^{x}$. Bu davranışın bir adı var.

> Bir **"eigen" (öz) değer problemi**:
> $$\boxed{\;\hat{L}y=\lambda y\;}$$
> Burada $\hat{L}$ **operatör**, $\lambda$ **özdeğer (eigenvalue)**, $y$ ise **özfonksiyondur (eigenfunction)**.

Sıradan bir fonksiyona operatör uygulandığında ==bambaşka bir fonksiyon== çıkar. Özfonksiyon, operatörün altında ==biçimini koruyan== özel fonksiyondur; operatör onu yalnızca bir sayıyla çarpar.

---

[SORU*] **Örnek 7.14.** &nbsp; $\hat{D}$ operatörünün özdeğerlerini ve özfonksiyonlarını bulunuz.
[CEVAP]
Özdeğer denklemini yazalım:

$$\hat{D}y=\lambda y\;\Longrightarrow\;\frac{dy}{dx}=\lambda y$$

$y=e^{mx}$ deneyelim:

$$\frac{dy}{dx}=m\,e^{mx}\stackrel{!}{=}\lambda\,e^{mx}$$

$e^{mx}$ hiçbir yerde sıfır olmadığından sadeleşir:

$$\boxed{\;\lambda=m,\qquad y=e^{mx}\;}$$

**Okunuşu:** $\hat{D}$'nin özfonksiyonları ==bütün üstel fonksiyonlardır==; her $e^{mx}$'in özdeğeri kendi üssü $m$'dir. Örneğin $\hat{D}e^{3x}=3e^{3x}$ — özdeğer $3$.

$m$ üzerinde hiçbir kısıtlama yok; ==özdeğerler sürekli bir küme oluşturur.==
[/CEVAP]

[SORU*] **Örnek 7.15.** &nbsp; $\hat{L}=\hat{D}^{2}$ ve $y=\sin nx$ için özdeğeri bulunuz.
[CEVAP]
İki kez türev alalım:

$$\hat{D}^{2}y=\frac{d^{2}}{dx^{2}}\sin\left(nx\right)=\frac{d}{dx}\Big[n\cos\left(nx\right)\Big]=-n^{2}\sin\left(nx\right)$$

Bunu $\lambda y=\lambda\sin\left(nx\right)$ ile karşılaştırırsak:

$$\boxed{\;\lambda=-n^{2}\;}$$

**Sonuç:**

- $\lambda=-n^{2}$ değerleri $\hat{D}^{2}$'nin **özdeğerleridir**
- $y=\sin\left(nx\right)$ fonksiyonları $\hat{D}^{2}$'nin **özfonksiyonlarıdır**

Aynı hesap $\cos\left(nx\right)$ için de birebir yürür ve yine $\lambda=-n^{2}$ verir; ==bu özdeğer iki katlıdır.==
[/CEVAP]

[KUTU]
**Özdeğerin işareti neyi söyler?** $\hat{D}^{2}$ altında:

- $\lambda=-n^{2}<0$ &nbsp;→&nbsp; özfonksiyon $\sin nx$, $\cos nx$ — ==salınım==
- $\lambda=+k^{2}>0$ &nbsp;→&nbsp; özfonksiyon $e^{kx}$, $e^{-kx}$ — ==üstel büyüme/sönüm==
- $\lambda=0$ &nbsp;→&nbsp; özfonksiyon $1$, $x$ — ==doğrusal==

$\left(\hat{D}^{2}+\omega^{2}\right)y=0$ denklemini $\hat{D}^{2}y=-\omega^{2}y$ diye okursanız, 7.9'daki $A\cos\omega x+B\sin\omega x$ çözümü ==özdeğer diliyle yeniden söylenmiş olur.== İki bölüm aynı şeyi anlatıyor.
[/KUTU]

---

### Baştaki denkleme dönüş

7.6'da Schrödinger denklemini görmüştük:

$$\hat{H}\psi=E\psi$$

Bu tam olarak bir özdeğer denklemidir: $\hat{H}$ operatör, $E$ özdeğer (==enerji==), $\psi$ özfonksiyon (==dalga fonksiyonu==). Sınır koşulları özdeğerleri kesikli bir kümeye zorladığında ==enerji kuantumlanır==.

Bölüm 6'daki Hermite ve Legendre denklemlerindeki $\lambda=2n$ ve $\ell(\ell+1)$ koşulları da aynı olayın başka yüzleridir: ==seri ancak belirli özdeğerlerde polinoma kesiliyordu.==

---

[KUTU]
**Ders notu burada bitiyor.** Taranmış sayfaların sonunda

<div style="text-align:center; font-weight:700; letter-spacing:.05em;">CHAPTER 8: PARTIAL DIFFERENTIAL EQUATIONS</div>

başlığı atılmış, ancak ==altında hiç içerik yok.== Kısmi diferansiyel denklemler konusu, elimizdeki notlarda başlıktan ibarettir. O bölümün sayfaları geldiğinde buraya eklenecektir.
[/KUTU]

---

[CLAUDE] Özdeğer problemi neden bu kadar merkezî?
**Fikir tek cümlede:** karmaşık bir operatörü anlamanın yolu, onu ==basitleştiren fonksiyonları== bulmaktır. Özfonksiyonlar üzerinde operatör bir sayıya iner; geri kalan her fonksiyon o özfonksiyonların birleşimi olarak yazılabilir.

**Nerelerde bununla karşılaştınız — hepsi aynı fikir:**

| Konu | Özdeğer denklemi | Özfonksiyonlar |
|---|---|---|
| Sabit katsayılı DD (Böl. 3) | $\hat{D}y=my$ | $e^{mx}$ |
| Fourier serisi | $\hat{D}^{2}y=-n^{2}y$ | $\sin nx$, $\cos nx$ |
| Hermite (6.2) | $\hat{L}y=\lambda y$, $\lambda=2n$ | $H_{n}(x)$ |
| Legendre (6.4) | $\hat{L}y=\ell(\ell+1)y$ | $P_{\ell}(x)$ |
| Bessel (6.3) | sınır koşullu $\hat{L}y=\lambda y$ | $J_{p}\!\left(\alpha_{k}x\right)$ |
| Kuantum mekaniği | $\hat{H}\psi=E\psi$ | dalga fonksiyonları |

**Karakteristik denklem aslında bir özdeğer denklemidir.** $y=e^{mx}$ denemesi, "$\hat{D}$'nin özfonksiyonunu ara" demenin kısaltmasıdır. Bölüm 3'te ezberden yaptığınız hamlenin adı buymuş.

**Sınav için:** $\hat{L}y=\lambda y$ verilip özdeğer istenirse yol daima aynıdır — ==verilen $y$'yi operatöre sokun, çıkan sonucu $\lambda y$ biçimine getirin, $\lambda$'yı okuyun.== Örnek 7.15'te olduğu gibi, çoğu zaman iki türev ve bir karşılaştırmadan ibarettir.
[/CLAUDE]

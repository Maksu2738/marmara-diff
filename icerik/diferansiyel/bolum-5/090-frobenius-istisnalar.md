---
id: frobenius-istisnalar
menu: 5.8 Frobenius — İkinci Çözüm ve İstisnai Durumlar
tip: konu
baslik: 5.8 &nbsp;İkinci Lineer Bağımsız Çözüm — THEoREM 5.3
---

Örnek 5.10'da şanslıydık: belirtici denklemin iki kökü de $(5.49)$ biçiminde birer çözüm verdi ve bunlar lineer bağımsız çıktı. Ama 5.7'de belirttiğimiz gibi ==bu her zaman böyle olmaz==. İki soru sormamız gerekiyor:

1. Düzgün tekil nokta $x_{0}$ etrafında, $(5.49)$ biçiminde **iki** lineer bağımsız çözümün varlığı hangi koşulda garanti edilir?
2. Bu iki çözüm yoksa, temel çözümden lineer bağımsız olan çözümün biçimi nedir?

Yanıtı veren THEoREM şudur.

---

[KUTU]
**THEoREM 5.3**

**Hipotez.** $x_{0}$ noktası $(5.1)$ denkleminin düzgün tekil noktası olsun. $r_{1}$ ve $r_{2}$, $x_{0}$'a karşılık gelen belirtici denklemin kökleri olsun ($\operatorname{Re}(r_{1})\ge\operatorname{Re}(r_{2})$).

**Sonuç 1.** $r_{1}-r_{2}\neq N$ olsun ($N$ negatif olmayan bir tam sayı; yani fark $0,1,2,3,\dots$ değil). O zaman denklemin $(5.49)$ biçiminde, aşikâr olmayan, lineer bağımsız **iki** çözümü vardır:

$$y_{1}(x)=|x-x_{0}|^{r_{1}}\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n},\qquad c_{0}\neq 0$$

$$y_{2}(x)=|x-x_{0}|^{r_{2}}\sum_{n=0}^{\infty}c_{n}^{*}(x-x_{0})^{n},\qquad c_{0}^{*}\neq 0$$

**Sonuç 2.** $r_{1}-r_{2}=N$ olsun ($N$ **pozitif** tam sayı). O zaman lineer bağımsız iki çözüm şöyledir:

$$y_{1}(x)=|x-x_{0}|^{r_{1}}\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n},\qquad c_{0}\neq 0$$

$$y_{2}(x)=|x-x_{0}|^{r_{2}}\sum_{n=0}^{\infty}c_{n}^{*}(x-x_{0})^{n}+C\,y_{1}(x)\ln|x-x_{0}|$$

Burada $c_{0}^{*}\neq 0$ ve $C$ bir sabittir; ==sıfır olabilir de olmayabilir de==.

**Sonuç 3.** $r_{1}-r_{2}=0$ olsun (kökler eşit). O zaman:

$$y_{1}(x)=|x-x_{0}|^{r_{1}}\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n},\qquad c_{0}\neq 0$$

$$y_{2}(x)=|x-x_{0}|^{r_{1}+1}\sum_{n=0}^{\infty}c_{n}^{*}(x-x_{0})^{n}+y_{1}(x)\ln|x-x_{0}|$$

Üç sonuçtaki çözümler de $x_{0}$ etrafındaki bir delinmiş aralıkta $0<|x-x_{0}|<R$ geçerlidir.
[/KUTU]

---

### Üç durumun karşılaştırması

$0<x-x_{0}<R$ aralığında çalışıyorsak $|x-x_{0}|$ sadece $x-x_{0}$'dır. Bu aralıkta THEoREM'in söyledikleri şöyle özetlenir:

| Durum | $y_{2}$'nin biçimi | Logaritma var mı? |
|---|---|---|
| $r_{1}-r_{2}$ tam sayı **değil** | $(x-x_{0})^{r_{2}}\sum c_{n}^{*}(x-x_{0})^{n}$ | Hayır |
| $r_{1}-r_{2}$ **pozitif tam sayı** | yukarıdaki $+\;C\,y_{1}\ln(x-x_{0})$ | ==Belki== ($C=0$ olabilir) |
| $r_{1}-r_{2}=0$ | $(x-x_{0})^{r_{1}+1}\sum c_{n}^{*}(x-x_{0})^{n}+y_{1}\ln(x-x_{0})$ | ==Evet, kesin== |

**Her durumda ortak olan:** Büyük kök $r_{1}$'e karşılık gelen

$$y_{1}(x)=(x-x_{0})^{r_{1}}\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n}$$

çözümü ==her zaman vardır==. Sorun hep ikinci çözümdedir. Bu yüzden Frobenius yönteminde ==önce daima büyük kökle başlanır==; o dal hiçbir zaman boşa çıkmaz.

---

### Karmaşık kökler özel bir durumdur

$r_{1}$ ve $r_{2}$ **eşlenik karmaşık (conjugate complex)** ise, farkları

$$r_{1}-r_{2}=\text{saf sanal bir sayı}$$

olur. Saf sanal bir sayı asla negatif olmayan bir tam sayı olamaz — sıfır bile olamaz, çünkü kökler farklıdır. Dolayısıyla ==karmaşık köklerde her zaman Sonuç 1 geçerlidir== ve $r_{2}$'ye karşılık gelen ikinci çözüm sorunsuz bulunur.

[KUTU]
**Sınavda karar ağacı:**

1. Belirtici denklemi çöz, $r_{1}$ ve $r_{2}$'yi bul ($\operatorname{Re}(r_{1})\ge\operatorname{Re}(r_{2})$).
2. Farkı hesapla: $r_{1}-r_{2}$.
3. Fark **tam sayı değilse** (kesirli ya da karmaşık) → iki dalı da normal Frobenius ile çöz, bitti.
4. Fark **pozitif tam sayıysa** → büyük kökten $y_{1}$'i bul. Küçük kökü denerken tutarsızlık çıkarsa logaritmalı biçime geç.
5. Fark **sıfırsa** → küçük kök diye bir şey yok; ikinci çözüm kesinlikle logaritmalıdır.
[/KUTU]

**Örnek 5.10'a geri bakış.** Orada $r_{1}=\frac{5}{2}$, $r_{2}=-1$ ve $r_{1}-r_{2}=\frac{7}{2}$ idi. $\frac{7}{2}$ bir tam sayı olmadığından Sonuç 1 geçerliydi — bu yüzden iki dal da sorunsuz, logaritmasız çözüm verdi. ==Kökleri bulur bulmaz farkı kontrol etmek, hangi zorlukla karşılaşacağınızı baştan söyler.==

### $C$ sabiti neden "olabilir de olmayabilir de"?

Sonuç 2'deki $C$ sabiti hesap yapılmadan bilinemez. Pratikte şöyle ortaya çıkar: küçük kök $r_{2}$ ile özyineleme formülünü kurduğunuzda, $n=N$ adımında $c_{N}$'nin katsayısı sıfır olur.

- O adımdaki denklem $0\cdot c_{N}=0$ biçimine düşerse, $c_{N}$ keyfi kalır ve logaritmasız bir ikinci çözüm bulunur — yani $C=0$'dır.
- Denklem $0\cdot c_{N}=(\text{sıfırdan farklı bir şey})$ biçimine düşerse **çelişki** doğar; bu, logaritmalı terime ihtiyaç olduğunu gösterir ve $C\neq 0$'dır.

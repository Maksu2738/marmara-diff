---
id: operator-yoketme
menu: 7.12 ★ Yok Edici (Annihilator) Operatörler
tip: konu
baslik: 7.12 &nbsp;★ Yok Edici Operatörler ve Homojen Olmayan Denklemlere Uygulanışı
---

> **Yok edici (annihilator):** $\hat{A}f=0$ yapan operatördür.

Yani bir fonksiyonu ==sıfırlayan== operatör. Üç temel aile ders notunda sırayla kuruluyor.

---

### 1. Sabitleri $\hat{D}$ yok eder

$f=c$ ve $\hat{A}=\dfrac{d}{dx}$ alalım:

$$\hat{A}f=\frac{d}{dx}c=0$$

$$\boxed{\;\hat{D}\;\text{sabitleri yok eder}\;}$$

### 2. Kuvvetleri $\hat{D}^{\,n+1}$ yok eder

$f=x^{2}$ ise üç kez türev almak yeter:

$$\hat{D}^{3}x^{2}=0$$

Genel olarak:

$$\boxed{\;\hat{D}^{\,n+1}\;\text{ifadesi}\;x^{n}\;\text{'i yok eder}\;}$$

($x^{n}$'nin $n$. türevi sabit, $(n+1)$. türevi sıfırdır.)

### 3. Üstelleri $\left(\hat{D}-a\right)$ yok eder

$$\hat{D}e^{ax}=\frac{d}{dx}e^{ax}=a\,e^{ax}\;\Longrightarrow\;\hat{D}e^{ax}=a\,e^{ax}$$

Sağ tarafı sola atalım:

$$\left(\hat{D}-a\right)e^{ax}=0$$

$$\boxed{\;\left(\hat{D}-\lambda\right)\;\text{ifadesi}\;e^{\lambda x}\;\text{'i yok eder}\;}$$

---

### Peki bu ne işe yarar?

Ders notunun sorduğu soru: ==yok ediciler neden önemli?== Cevap, homojen olmayan denklemi ==homojene çevirmektir.==

[SORU*] **Örnek 7.12.** &nbsp; $\left(\hat{D}^{2}-3\hat{D}+2\right)y=e^{4x}$ denklemini **yok edici** kullanarak çözünüz.
[CEVAP]
**Adım 1 — Sağ tarafı kim yok eder?**

$e^{4x}$ ifadesini $\left(\hat{D}-4\right)$ yok eder.

**Adım 2 — Denklemin iki tarafına da uygula.**

$$\left(\hat{D}-4\right)\left(\hat{D}^{2}-3\hat{D}+2\right)y=\left(\hat{D}-4\right)e^{4x}=0$$

==Sağ taraf sıfırlandı.== Elimizde artık homojen bir denklem var — ve onu çözmeyi biliyoruz.

**Adım 3 — Çarpanlara ayır.**

$$\left(\hat{D}-4\right)\left(\hat{D}-2\right)\left(\hat{D}-1\right)y=0$$

$$m_{1}=4,\qquad m_{2}=2,\qquad m_{3}=1$$

**Adım 4 — Çözümün biçimi.**

$$y=c_{1}e^{x}+c_{2}e^{2x}+c_{3}e^{4x}$$
[/CEVAP]

---

### Dikkat: son sabit keyfi değildir

[KUTU]
**Ders notunda $c_{3}e^{4x}$ teriminin yanında bir soru işareti var** — ve haklı olarak.

Denklem **ikinci** mertebedendir; genel çözümde ==yalnızca iki keyfi sabit== bulunabilir. Üçüncü terim, yok ediciyi uygularken denklemin mertebesini yapay olarak yükselttiğimiz için ortaya çıktı.

Yok edici yöntemi bize çözümün ==**biçimini**== verir, katsayısını değil. $c_{3}$'ü bulmak için $c_{3}e^{4x}$'i **asıl denkleme** geri koymak gerekir:

$$\left(\hat{D}^{2}-3\hat{D}+2\right)c_{3}e^{4x}=\left(16-12+2\right)c_{3}e^{4x}=6c_{3}e^{4x}\stackrel{!}{=}e^{4x}$$

$$6c_{3}=1\;\Longrightarrow\;c_{3}=\frac{1}{6}$$

**Doğru sonuç:**

$$\boxed{\;y=c_{1}e^{x}+c_{2}e^{2x}+\frac{1}{6}e^{4x}\;}$$

==7.11'de belirsiz katsayılarla bulduğumuzun aynısı.== $c_{1}$ ve $c_{2}$ keyfi kalır; $c_{3}$ ise belirlidir.
[/KUTU]

---

### Yok edici tablosu

| $f(x)$ | Yok edici |
|---|---|
| $c$ (sabit) | $\hat{D}$ |
| $x^{n}$ | $\hat{D}^{\,n+1}$ |
| $e^{ax}$ | $\hat{D}-a$ |
| $x^{n}e^{ax}$ | $\left(\hat{D}-a\right)^{n+1}$ |
| $\cos\beta x$, $\sin\beta x$ | $\hat{D}^{2}+\beta^{2}$ |
| $e^{ax}\cos\beta x$, $e^{ax}\sin\beta x$ | $\left(\hat{D}-a\right)^{2}+\beta^{2}$ |

Sağ taraf birden çok parçadan oluşuyorsa yok ediciler ==çarpılır==: $f=x+e^{3x}$ için $\hat{D}^{2}\left(\hat{D}-3\right)$.

---

[CLAUDE] Yok edici mi, belirsiz katsayılar mı?
İkisi ==aynı yöntemin iki yüzüdür.== Belirsiz katsayılardaki "deneme fonksiyonu tablosu" (7.11), aslında yok edicinin kökleri hesaplanarak elde edilir — tablo ezberlemek yerine yok ediciyi bulmak, tabloyu ==kendiniz türetmenizi== sağlar.

**Yok edicinin asıl üstünlüğü: rezonans durumu kendiliğinden çözülür.**

$\left(\hat{D}-2\right)y=e^{2x}$ örneğine bakın. Belirsiz katsayılarla $Ae^{2x}$ denerseniz $0=e^{2x}$ çıkar, çuvallar; "$x$ ile çarp" kuralını hatırlamanız gerekir. Yok ediciyle:

$$\left(\hat{D}-2\right)\left(\hat{D}-2\right)y=0\;\Longrightarrow\;\left(\hat{D}-2\right)^{2}y=0$$

Katlı kök ==zaten kendiliğinden çıkar== ve $y=e^{2x}\left(c_{0}+c_{1}x\right)$ verir. $x$ çarpanını hatırlamak zorunda kalmazsınız.

**Yöntemin adımları:**

1. $f(x)$'i yok eden $\hat{A}$'yı bul
2. $\hat{A}\hat{L}y=0$ yaz, çarpanlara ayır, kökleri oku
3. $\hat{L}$'den gelen köklerin sabitleri **keyfi** ($y_{c}$), $\hat{A}$'dan gelenler **belirli** ($y_{p}$)
4. $\hat{A}$'dan gelen katsayıları ==asıl denkleme koyarak== bul

**Adım 4'ü atlamayın** — ders notundaki soru işaretinin sebebi tam olarak budur.
[/CLAUDE]

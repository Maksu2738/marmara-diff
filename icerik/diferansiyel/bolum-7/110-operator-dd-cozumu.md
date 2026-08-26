---
id: operator-dd-cozumu
menu: 7.9 ★ Operatörle Diferansiyel Denklem Çözme
tip: konu
baslik: 7.9 &nbsp;★ Diferansiyel Denklemin Operatör Çarpanlarıyla Çözülmesi
---

Yöntem tek cümleyle: ==denklemi operatör biçiminde yaz, operatörü çarpanlarına ayır, kökleri oku.== Çözüm daima $e^{mx}$ kalıbındadır.

---

### Farklı reel kökler

[SORU] **Örnek 7.7.** &nbsp; $y''-y'-6y=0$ denklemini diferansiyel operatörle çözünüz.
[CEVAP]
**Operatör biçimi:**

$$\left(\hat{D}^{2}-\hat{D}-6\right)y=0$$

**Çarpanlara ayır:**

$$\left(\hat{D}-3\right)\left(\hat{D}+2\right)y=0$$

Operatör çarpanları ==cebirsel bir polinom gibi== davrandığından (7.2 ve 7.10), kökleri doğrudan okuyabiliriz:

$$(m-3)(m+2)=0\;\Longrightarrow\;m_{1}=3,\qquad m_{2}=-2$$

**Çözüm:**

$$\boxed{\;y=c_{1}e^{3x}+c_{2}e^{-2x}\;}$$
[/CEVAP]

[SORU] **Örnek 7.8.** &nbsp; $y'''-4y''+y'+6y=0$ denklemini çözünüz.
[CEVAP]
**Operatör biçimi:**

$$\left(\hat{D}^{3}-4\hat{D}^{2}+\hat{D}+6\right)y=0$$

**Çarpanlara ayır:**

$$\left(\hat{D}-2\right)\left(\hat{D}-3\right)\left(\hat{D}+1\right)y=0$$

**Sağlama.** Çarpımı açalım: $\left(\hat{D}-2\right)\left(\hat{D}-3\right)=\hat{D}^{2}-5\hat{D}+6$; bunu $\left(\hat{D}+1\right)$ ile çarparsak

$$\hat{D}^{3}-5\hat{D}^{2}+6\hat{D}+\hat{D}^{2}-5\hat{D}+6=\hat{D}^{3}-4\hat{D}^{2}+\hat{D}+6\;\checkmark$$

**Kökler:** $m_{1}=2$, $m_{2}=3$, $m_{3}=-1$.

**Çözüm:**

$$\boxed{\;y=c_{1}e^{2x}+c_{2}e^{3x}+c_{3}e^{-x}\;}$$
[/CEVAP]

---

### Katlı kök

Çarpan tekrar ediyorsa yalnız bir üstel yetmez.

$$y''-4y'+4y=0\;\Longrightarrow\;\left(\hat{D}^{2}-4\hat{D}+4\right)y=0\;\Longrightarrow\;\left(\hat{D}-2\right)^{2}y=0$$

$$m_{1,2}=2\quad\text{(çift kök)}$$

Bölüm 3'ten bildiğimiz gibi çözümler $e^{2x}$ **ve** $xe^{2x}$'tir:

$$y=c_{1}e^{2x}+c_{2}xe^{2x}=e^{2x}\left(c_{1}+c_{2}x\right)$$

Genel kural:

$$\boxed{\;\left(\hat{D}-r\right)^{k}y=0\;\Longrightarrow\;y=e^{rx}\left(c_{0}+c_{1}x+c_{2}x^{2}+\dots+c_{k-1}x^{k-1}\right)\;}$$

[KUTU]
**Ders notundaki örnek kutusu:**

$$\left(\hat{D}-4\right)^{3}y=0\;\Longrightarrow\;y=e^{4x}\left(c_{0}+c_{1}x+c_{2}x^{2}\right)$$

Kuvvet 3 olduğu için polinom derecesi ==2=='dir: $k$ katlı kök, $x$'in $0$'dan $k-1$'e kadar kuvvetlerini getirir.
[/KUTU]

---

### Karmaşık kök

$$\left(\hat{D}^{2}+4\right)y=0\;\Longrightarrow\;m=\pm 2i$$

$$y=c_{1}e^{2ix}+c_{2}e^{-2ix}$$

Euler bağıntılarıyla reel biçime geçilir:

$$\cos x=\frac{e^{ix}+e^{-ix}}{2},\qquad \sin x=\frac{e^{ix}-e^{-ix}}{2i}$$

$$y=A\cos 2x+B\sin 2x$$

Genel olarak:

$$\boxed{\;\left(\hat{D}^{2}+\omega^{2}\right)y=0\;\Longrightarrow\;y=A\cos\omega x+B\sin\omega x\;}$$

==Bu, bütün titreşim problemlerinin ana kalıbıdır.==

---

[SORU*] **Örnek 7.9.** &nbsp; Bir yaya bağlı kütlenin hareketini operatör yöntemiyle bulunuz.
[CEVAP]
**Kurulum.** Newton'un ikinci yasası ve Hooke yasası:

$$F=ma\;\Longrightarrow\;-kx=m\ddot{x}\;\Longrightarrow\;\ddot{x}+\frac{k}{m}x=0$$

**Operatör biçimi:**

$$\left(\hat{D}^{2}+\frac{k}{m}\right)x=0$$

Bu tam olarak yukarıdaki $\left(\hat{D}^{2}+\omega^{2}\right)x=0$ kalıbıdır; $\omega^{2}=\dfrac{k}{m}$.

**Çözüm:**

$$\boxed{\;x(t)=A\cos\left(\omega t\right)+B\sin\left(\omega t\right),\qquad \omega^{2}=\frac{k}{m}\;}$$

$\omega$ sistemin **doğal açısal frekansıdır**; $A$ ve $B$ başlangıç konumu ile hızından belirlenir.
[/CEVAP]

[KUTU]
**Bu örnek 2.4'teki mekanik uygulamasıyla aynı denklemdir.** Orada denklem kurulup çözülmüştü; burada ==aynı sonuca operatör kalıbından tek satırda== varılıyor. Aradaki fark yalnızca yoldur, sonuç değil.
[/KUTU]

---

[CLAUDE] Kök tipine göre üç kalıp — tek tabloda
Operatörü çarpanlarına ayırdıktan sonra bakacağınız tek şey ==kökün tipidir:==

| Çarpan | Kök | Katkısı |
|---|---|---|
| $\left(\hat{D}-r\right)$ | reel, tek | $c\,e^{rx}$ |
| $\left(\hat{D}-r\right)^{k}$ | reel, $k$ katlı | $e^{rx}\left(c_{0}+c_{1}x+\dots+c_{k-1}x^{k-1}\right)$ |
| $\left(\hat{D}^{2}+\omega^{2}\right)$ | $\pm i\omega$ | $A\cos\omega x+B\sin\omega x$ |
| $\left(\hat{D}-\alpha\right)^{2}+\beta^{2}$ | $\alpha\pm i\beta$ | $e^{\alpha x}\left(A\cos\beta x+B\sin\beta x\right)$ |

**Sabit sayısı kontrolü:** mertebe $n$ ise genel çözümde tam $n$ tane keyfi sabit olmalı. Katlı kökü tek terimle yazıp sabit eksik bırakmak ==en sık yapılan hatadır.==

**Çarpanlara ayıramıyorsanız** köklerden birini deneme yanılmayla ($\pm 1,\pm 2,\pm 3$, sabit terimin bölenleri) bulup sentetik bölme yapın. Örnek 7.8'de sabit terim $6$ idi; $m=2$ denenip tuttuğunda gerisi ikinci dereceye iner.
[/CLAUDE]

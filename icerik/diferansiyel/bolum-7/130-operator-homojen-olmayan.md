---
id: operator-homojen-olmayan
menu: 7.11 ★ Homojen Olmayan Denklemler
tip: konu
baslik: 7.11 &nbsp;★ Homojen Olmayan Denklemler — $\hat{L}y=f(x)$
---

Şimdiye kadar hep $\hat{L}y=0$ ile uğraştık. Sağ taraf sıfır değilse denklem **homojen olmayandır (non-homogeneous)**:

$$\boxed{\;\hat{L}y=f(x)\;}$$

Çözüm iki parçadan oluşur:

$$y=\underbrace{y_{c}}_{\text{tümleyen}}+\underbrace{y_{p}}_{\text{özel}}$$

- $y_{c}$ (**tümleyen fonksiyon**): $\hat{L}y=0$'ın genel çözümü — keyfi sabitleri o taşır
- $y_{p}$ (**özel çözüm**): $\hat{L}y_{p}=f(x)$'i sağlayan **herhangi** bir fonksiyon

==Toplamları gerçekten çözümdür==, çünkü lineerlik (7.8) sayesinde $\hat{L}\left(y_{c}+y_{p}\right)=\hat{L}y_{c}+\hat{L}y_{p}=0+f=f$.

---

[SORU*] **Örnek 7.11.** &nbsp; $\left(\hat{D}^{2}-3\hat{D}+2\right)y=e^{4x}$ denklemini çözünüz.
[CEVAP]
Burada $\hat{L}=\hat{D}^{2}-3\hat{D}+2$.

**Adım 1 — Tümleyen fonksiyon.** Sağ tarafı sıfır yapıp çözelim:

$$\left(\hat{D}-2\right)\left(\hat{D}-1\right)y=0\;\Longrightarrow\;m_{1}=2,\;m_{2}=1$$

$$y_{c}=c_{1}e^{2x}+c_{2}e^{x}$$

**Adım 2 — Özel çözüm için deneme.** Sağ taraf $e^{4x}$ olduğuna göre aynı biçimde bir aday alalım:

$$y_{p}=A\,e^{4x}$$

**Adım 3 — Yerine koy.** $\hat{D}e^{4x}=4e^{4x}$, $\hat{D}^{2}e^{4x}=16e^{4x}$:

$$\hat{L}y_{p}=\left(\hat{D}^{2}-3\hat{D}+2\right)Ae^{4x}=\left(16A-12A+2A\right)e^{4x}=6A\,e^{4x}$$

Bu $e^{4x}$'e eşit olmalı:

$$6A=1\;\Longrightarrow\;A=\frac{1}{6}$$

$$y_{p}=\frac{1}{6}e^{4x}$$

**Adım 4 — Topla.**

$$\boxed{\;y=c_{1}e^{2x}+c_{2}e^{x}+\frac{1}{6}e^{4x}\;}$$

**Sağlama.** $y_{p}=\tfrac16 e^{4x}$ için $y_{p}''=\tfrac{16}{6}e^{4x}$, $y_{p}'=\tfrac{4}{6}e^{4x}$:

$$\frac{16}{6}-3\cdot\frac{4}{6}+2\cdot\frac{1}{6}=\frac{16-12+2}{6}=\frac{6}{6}=1\;\checkmark$$
[/CEVAP]

[KUTU]
**$\hat{L}(a)$ kestirmesiyle tek satır.** 7.7'deki kuralı hatırlayın: $\hat{L}\!\left(\hat{D}\right)e^{ax}=\hat{L}(a)e^{ax}$. Burada $a=4$:

$$\hat{L}(4)=16-12+2=6\;\Longrightarrow\;A=\frac{1}{\hat{L}(4)}=\frac{1}{6}$$

Genel olarak $\hat{L}y=e^{ax}$ için, ==$\hat{L}(a)\neq 0$ olduğu sürece==

$$y_{p}=\frac{e^{ax}}{\hat{L}(a)}$$

**$\hat{L}(a)=0$ ise ne olur?** O zaman $e^{ax}$ zaten $y_{c}$'nin içindedir (**rezonans**) ve $Ae^{ax}$ denemesi çöker — sol taraf sıfır çıkar. Çare: $y_{p}=Axe^{ax}$ denemek; $a$ katlı kökse $Ax^{k}e^{ax}$.

Örnek 7.11'de $\hat{L}$'nin kökleri $1$ ve $2$ idi, $a=4$ bunlardan farklı — o yüzden sorun çıkmadı.
[/KUTU]

---

[CLAUDE] $y_p$ için deneme tablosu
Belirsiz katsayılar yönteminde denemeyi ==sağ tarafın biçimi== belirler:

| $f(x)$ | Deneme $y_{p}$ |
|---|---|
| $e^{ax}$ | $A\,e^{ax}$ |
| $\sin\beta x$ veya $\cos\beta x$ | $A\cos\beta x+B\sin\beta x$ &nbsp;(==ikisi birden==) |
| $x^{n}$ | $A_{n}x^{n}+\dots+A_{1}x+A_{0}$ &nbsp;(==bütün alt dereceler==) |
| $e^{ax}\sin\beta x$ | $e^{ax}\left(A\cos\beta x+B\sin\beta x\right)$ |
| $x^{n}e^{ax}$ | $e^{ax}\left(A_{n}x^{n}+\dots+A_{0}\right)$ |

**Değişmez kural:** deneme fonksiyonu ile $y_{c}$'nin ==ortak terimi varsa== denemeyi $x$ ile çarpın; hâlâ ortak terim varsa bir $x$ daha.

**İki hata:**

1. $f(x)=\sin 2x$ görüp yalnız $A\sin 2x$ denemek. Türev $\cos$ üretir; ==ikisi birlikte olmalı.==
2. $f(x)=x^{2}$ görüp yalnız $Ax^{2}$ denemek. ==$Ax^{2}+Bx+C$ yazın.==

**Nerede kullanılamaz:** $f(x)=\tan x$, $\ln x$, $1/x$ gibi türev alındıkça biçimi kapanmayan fonksiyonlarda. Orada 3.5'teki **parametrelerin değişimi** yöntemine geçilir.
[/CLAUDE]

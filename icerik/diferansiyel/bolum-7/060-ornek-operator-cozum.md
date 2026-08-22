---
id: ornek-operator-cozum
menu: 7.4 Örnek — Operatör Yöntemiyle Sistem Çözümü
tip: ornek
baslik: 7.4 &nbsp;Çözümlü Örnek — Operatör Yöntemi ve Sabitlerin Elenmesi
---

[SORU] **Örnek 7.3.** &nbsp; Aşağıdaki sistemi operatör yöntemiyle çözünüz:
$$2x'-2y'-3x=t,\qquad 2x'+2y'+3x+8y=2$$
[CEVAP]
**Adım 1 — Operatör gösterimine geç.**

Her denklemde $x$'li ve $y$'li terimleri gruplayalım:

$$(2D-3)x-2Dy=t$$
$$(2D+3)x+(2D+8)y=2$$

Yani $L_{1}\equiv 2D-3$, $L_{2}\equiv -2D$, $L_{3}\equiv 2D+3$, $L_{4}\equiv 2D+8$.

**Adım 2 — $y$'yi ele.**

Birinci denkleme $(2D+8)$, ikinciye $2D$ uygulayalım:

$$(2D+8)(2D-3)x-(2D+8)(2D)y=(2D+8)t$$
$$2D(2D+3)x+2D(2D+8)y=(2D)2$$

Bu ikisini **toplayalım**. $(2D+8)$ ile $2D$ yer değiştirdiğinden ($7.2$'deki özellik) $y$'li terimler birbirini götürür:

$$\Big[(2D+8)(2D-3)+2D(2D+3)\Big]x=(2D+8)t+(2D)2$$

**Sol tarafı açalım** — operatörler polinom gibi çarpılır:

$$(2D+8)(2D-3)=4D^{2}-6D+16D-24=4D^{2}+10D-24$$
$$2D(2D+3)=4D^{2}+6D$$
$$\text{Toplam}=8D^{2}+16D-24$$

**Sağ tarafı hesaplayalım:** $(2D+8)t=2\cdot 1+8t=2+8t$ ve $(2D)2=0$ (sabitin türevi sıfır).

$$\left(8D^{2}+16D-24\right)x=2+8t$$

$8$'e bölelim:

$$\left(D^{2}+2D-3\right)x=t+\frac{1}{4}$$

**Adım 3 — Bu denklemi çöz.**

Karakteristik denklem $r^{2}+2r-3=(r+3)(r-1)=0$, kökler $r=1$ ve $r=-3$:

$$x_{h}=c_{1}e^{t}+c_{2}e^{-3t}$$

Özel çözüm için $x_{p}=At+B$ deneyelim ($x_{p}'=A$, $x_{p}''=0$):

$$0+2A-3(At+B)=-3At+(2A-3B)=t+\frac{1}{4}$$

Katsayıları eşleyelim:

$$-3A=1\;\Longrightarrow\;A=-\frac{1}{3}$$

$$2A-3B=\frac{1}{4}\;\Longrightarrow\;-\frac{2}{3}-3B=\frac{1}{4}\;\Longrightarrow\;3B=-\frac{1}{4}-\frac{2}{3}=-\frac{11}{12}\;\Longrightarrow\;B=-\frac{11}{36}$$

$$\boxed{\;x=c_{1}e^{t}+c_{2}e^{-3t}-\frac{1}{3}t-\frac{11}{36}\;} \tag{7.20}$$

**Adım 4 — $x$'i ele, $y$'yi bul.**

Benzer biçimde $x$ elenirse $y$ için aynı $L_{5}$ operatörüyle bir denklem çıkar ve

$$y=k_{1}e^{t}+k_{2}e^{-3t}+\dots \tag{7.22}$$

biçiminde bir çözüm elde edilir. ==Buradaki $k_{1},k_{2}$ sabitleri $c_{1},c_{2}$'den bağımsız değildir.==

**Adım 5 — Sabitler arasındaki bağıntıyı bul.**

$(7.20)$ ve $(7.22)$'yi orijinal sistemin **birinci** denklemine koyalım:

$$\left[2c_{1}e^{t}-6c_{2}e^{-3t}-\frac{5}{3}\right]-\left[2k_{1}e^{t}-6k_{2}e^{-3t}+\frac{1}{4}\right]-\left[3c_{1}e^{t}+3c_{2}e^{-3t}-t-\frac{11}{12}\right]=t$$

Sabit ve $t$'li terimler birbirini götürür, geriye üstel terimler kalır:

$$\left(-c_{1}-2k_{1}\right)e^{t}+\left(-9c_{2}+6k_{2}\right)e^{-3t}=0$$

$e^{t}$ ve $e^{-3t}$ ==lineer bağımsız olduğundan== her iki katsayı ayrı ayrı sıfır olmalıdır:

$$-c_{1}-2k_{1}=0,\qquad -9c_{2}+6k_{2}=0 \tag{7.23}$$

İkinci denkleme koymak da bunlara **denk** bağıntılar verir; yeni bilgi çıkmaz.

**Adım 6 — Bağımsız sabitleri seç.**

Dört sabitten ikisi bağımsız seçilir. $c_{1}$ ve $c_{2}$'yi seçersek:

$$k_{1}=-\frac{1}{2}c_{1},\qquad k_{2}=\frac{3}{2}c_{2}$$

**Genel çözüm:**

$$\boxed{\;x=c_{1}e^{t}+c_{2}e^{-3t}-\frac{1}{3}t-\frac{11}{36},\qquad y=-\frac{1}{2}c_{1}e^{t}+\frac{3}{2}c_{2}e^{-3t}+\frac{1}{8}t+\frac{5}{12}\;}$$

[KUTU]
**Kaç sabit olmalıydı?** $L_{5}=8D^{2}+16D-24$ ikinci mertebeden, yani $N=2$. 7.4'teki kural gereği genel çözümde ==tam olarak 2 bağımsız sabit== bulunmalı. Sonuçta $c_{1}$ ve $c_{2}$ kaldı — kural tuttu.

Eğer Adım 5-6 atlanıp dört sabit de bırakılsaydı, elde edilen çift sistemi sağlamazdı.
[/KUTU]

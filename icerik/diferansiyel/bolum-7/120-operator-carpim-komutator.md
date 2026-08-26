---
id: operator-komutator
menu: 7.10 ★ Operatör Çarpımları ve Komütatör
tip: konu
baslik: 7.10 &nbsp;★ Operatör Çarpımları, Değişme Özelliği ve Komütatör
---

İki operatörü arka arkaya uygulamak ne demektir, ve sıra önemli midir?

### Sabit katsayılı çarpanlar yer değiştirir

Ders notundaki örnek:

$$\hat{L}_{1}=\hat{D}+1,\qquad \hat{L}_{2}=\hat{D}-2$$

$$\hat{L}_{1}\hat{L}_{2}=\left(\hat{D}+1\right)\left(\hat{D}-2\right)=\hat{D}^{2}-\hat{D}-2$$

Genel durumu yazalım. $\hat{L}_{1}=\hat{D}-a$ ve $\hat{L}_{2}=\hat{D}-b$ olsun:

$$\hat{L}_{1}\hat{L}_{2}=\hat{D}^{2}-(a+b)\hat{D}+ab=\left(\hat{D}-b\right)\left(\hat{D}-a\right)=\hat{L}_{2}\hat{L}_{1}$$

Ortadaki ifade $a$ ile $b$ arasında ==simetriktir==; ikisinin yerini değiştirmek hiçbir şeyi değiştirmez. Dolayısıyla:

$$\boxed{\;\hat{L}_{1}\hat{L}_{2}=\hat{L}_{2}\hat{L}_{1}\qquad\text{veya}\qquad \hat{L}_{1}\hat{L}_{2}-\hat{L}_{2}\hat{L}_{1}=0\;}$$

Notun kenarındaki vurgu: ==$\hat{L}_{1}$ ile $\hat{L}_{2}$ **komüt eder** (yer değiştirir)!==

Bu, 7.9'da çarpanları istediğimiz sırada okuyabilmemizin gerekçesidir.

---

### Uyarı: bu genel bir kural değildir

[KUTU]
**DİKKAT.** Genel olarak iki operatör ==yer değiştirmez==:

$$\hat{L}_{1}\hat{L}_{2}\neq\hat{L}_{2}\hat{L}_{1}\;\Longrightarrow\;\left[\hat{L}_{1},\hat{L}_{2}\right]\neq 0$$

$$\boxed{\;\left[\hat{A},\hat{B}\right]=\hat{A}\hat{B}-\hat{B}\hat{A}\;}$$

ifadesine **komütatör (commutator)** denir.
[/KUTU]

**THEoREM.** İki operatör yer değiştiriyorsa, komütatörleri sıfırdır:

$$\hat{A}\hat{B}=\hat{B}\hat{A}\;\Longleftrightarrow\;\left[\hat{A},\hat{B}\right]=0$$

---

[SORU*] **Örnek 7.10.** &nbsp; $\hat{L}=\hat{D}$ ve $\hat{X}=x$ (yani "$x$ ile çarp" operatörü) olsun. $\left[\hat{L},\hat{X}\right]$ komütatörünü bulunuz.
[CEVAP]
$$\hat{L}=\hat{D}=\frac{d}{dx},\qquad \hat{X}=x$$

Komütatörü ==bir $y$ fonksiyonuna uygulayarak== hesaplamak gerekir; yoksa ne türev alacağımız belirsiz kalır:

$$\left[\hat{L},\hat{X}\right]y=\left(\hat{L}\hat{X}-\hat{X}\hat{L}\right)y=\left(\frac{d}{dx}\,x-x\,\frac{d}{dx}\right)y$$

**Birinci terim** — çarpım kuralı:

$$\frac{d}{dx}\left(xy\right)=y+x\frac{dy}{dx}$$

**İkinci terim:**

$$x\frac{dy}{dx}$$

**Fark:**

$$\left[\hat{L},\hat{X}\right]y=y+x\frac{dy}{dx}-x\frac{dy}{dx}=y$$

Komütatör, $y$'yi olduğu gibi geri verdi — yani ==birim operatördür:==

$$\left[\hat{L},\hat{X}\right]y=y\;\Longrightarrow\;\boxed{\;\left[\frac{d}{dx},\,x\right]=1\;}$$
[/CEVAP]

[KUTU]
**Sıfır değil, bir.** Komütatör sıfır çıkmadığına göre $\hat{D}$ ile $\hat{X}$ ==yer değiştirmez.== Bu tesadüf değil: 7.2'de "sabit katsayılı operatörler yer değiştirir, değişken katsayılılar genelde değişmez" demiştik. $\hat{X}=x$ tam olarak değişken katsayılı bir operatördür.

Bu bağıntı fizikte **kanonik komütasyon bağıntısı** adıyla geçer; konum ve momentum operatörleri arasındaki $\left[\hat{x},\hat{p}\right]=i\hbar$ ilişkisi ve dolayısıyla ==belirsizlik ilkesi== doğrudan buradan çıkar.
[/KUTU]

---

[CLAUDE] Komütatör hesaplarken düşülen tuzak
**Komütatörü asla "çıplak" hesaplamayın.** $\left(\dfrac{d}{dx}x-x\dfrac{d}{dx}\right)$ ifadesine bakıp "$x$'ler sadeleşir, sıfır" demek ==en klasik hatadır.== Sonuç sıfır değil, $1$.

Doğru refleks: ==daima sonuna bir $y$ koyun==, çarpım kuralını uygulayın, en sonda $y$'yi atın.

**Kontrol listesi:**

1. $\left[\hat{A},\hat{B}\right]y$ yaz
2. İki terimi ayrı ayrı, $y$ üzerinde aç
3. Çıkan sonucu $(\;\cdot\;)y$ biçimine sok
4. Parantez içindeki nesne komütatördür

**Faydalı özdeşlikler:**

$$\left[\hat{A},\hat{B}\right]=-\left[\hat{B},\hat{A}\right],\qquad \left[\hat{A},\hat{A}\right]=0,\qquad \left[\hat{A},c\right]=0\;\;(c\text{ sabit})$$

Ve genellemesi (aynı yöntemle çıkar): $\left[\hat{D},x^{n}\right]=n\,x^{n-1}$.
[/CLAUDE]

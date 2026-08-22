---
id: tekrar-ters-donusum
menu: 4.6 Bölüm Tekrarı — Ters Dönüşüm
tip: sorular
baslik: 4.6 &nbsp;Bölüm Tekrar Soruları — Ters Dönüşüm
---

Bu set bölümün bütün ters dönüşüm tekniklerini bir arada sınıyor: tablo okuma, tamkare, pay ötelemesi, kısmi kesirler ve tekrarlı kuadratik çarpanlar.

[SORU] **13.** &nbsp; $F(s)=\dfrac{4}{s+3}+\dfrac{5s+6}{s^{2}+3}$
[CEVAP]
Birinci terim doğrudan 2 numaralı girdi: $\;4e^{-3t}$

İkinci terimi ikiye bölelim. Payda $s^{2}+3$, yani $b=\sqrt{3}$:

$$\frac{5s}{s^{2}+3}\;\to\;5\cos\sqrt{3}\,t$$

$$\frac{6}{s^{2}+3}=\frac{6}{\sqrt{3}}\cdot\frac{\sqrt{3}}{s^{2}+3}\;\to\;\frac{6}{\sqrt{3}}\sin\sqrt{3}\,t=2\sqrt{3}\sin\sqrt{3}\,t$$

$$\boxed{\;4e^{-3t}+5\cos\sqrt{3}\,t+2\sqrt{3}\sin\sqrt{3}\,t\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **14.** &nbsp; $F(s)=\dfrac{2s+3}{s^{3}}+\dfrac{1}{(2s+3)^{2}}$
[CEVAP]
**Birinci terim** — payı terim terim bölelim:

$$\frac{2s+3}{s^{3}}=\frac{2}{s^{2}}+\frac{3}{s^{3}}$$

7 numara ($\frac{n!}{s^{n+1}}\to t^{n}$): $\;\frac{2}{s^{2}}\to 2t$, &nbsp; $\frac{3}{s^{3}}=\frac{3}{2}\cdot\frac{2}{s^{3}}\to\frac{3}{2}t^{2}$

**İkinci terim** — baştaki katsayıyı temizleyelim:

$$(2s+3)^{2}=4\left(s+\tfrac{3}{2}\right)^{2}\;\Longrightarrow\;\frac{1}{(2s+3)^{2}}=\frac{1}{4}\cdot\frac{1}{\left(s+\frac{3}{2}\right)^{2}}$$

8 numara ($n=1$, $a=-\frac32$): $\;\frac{1}{\left(s+\frac32\right)^{2}}\to te^{-3t/2}$

$$\boxed{\;2t+\frac{3t^{2}}{2}+\frac{t}{4}e^{-3t/2}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **15.** &nbsp; $F(s)=\dfrac{s+3}{s^{2}+4s+6}$
[CEVAP]
Tamkare: $s^{2}+4s+6=(s+2)^{2}+2$, yani $b=\sqrt{2}$.

Payı öteleyelim: $s+3=(s+2)+1$

$$F(s)=\frac{s+2}{(s+2)^{2}+2}+\frac{1}{(s+2)^{2}+2}$$

İkinci terimde payı $\sqrt{2}$ yapalım:

$$\frac{1}{(s+2)^{2}+\left(\sqrt{2}\right)^{2}}=\frac{1}{\sqrt{2}}\cdot\frac{\sqrt{2}}{(s+2)^{2}+\left(\sqrt{2}\right)^{2}}$$

12 ve 11 numara ($a=2$, $b=\sqrt{2}$), ve $\frac{1}{\sqrt{2}}=\frac{\sqrt{2}}{2}$:

$$\boxed{\;e^{-2t}\left[\cos\sqrt{2}\,t+\frac{\sqrt{2}}{2}\sin\sqrt{2}\,t\right]\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **16.** &nbsp; $F(s)=\dfrac{2s+3}{s^{2}+4s+4}$
[CEVAP]
$s^{2}+4s+4=(s+2)^{2}$ — tekrarlı doğrusal çarpan.

Payı öteleyelim: $2s+3=2(s+2)-1$

$$F(s)=\frac{2}{s+2}-\frac{1}{(s+2)^{2}}$$

$$\boxed{\;2e^{-2t}-te^{-2t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **17.** &nbsp; $F(s)=\dfrac{7s+11}{s^{2}+4s+3}$
[CEVAP]
Payda çarpanlarına ayrılır: $s^{2}+4s+3=(s+1)(s+3)$ — ==diskriminant pozitif, kısmi kesire gidiyoruz.==

$$7s+11=A(s+3)+B(s+1)$$

$s=-1$: $4=2A\Rightarrow A=2$. &nbsp;&nbsp; $s=-3$: $-10=-2B\Rightarrow B=5$.

$$\boxed{\;2e^{-t}+5e^{-3t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **18.** &nbsp; $F(s)=\dfrac{2s+4}{s^{2}+4s+1}$
[CEVAP]
Tamkare: $s^{2}+4s+1=(s+2)^{2}-3$

==İşarete dikkat: eksi çıktı==, yani trigonometrik değil **hiperbolik** girdi kullanılacak.

Pay tam olarak $2(s+2)$'dir:

$$F(s)=\frac{2(s+2)}{(s+2)^{2}-\left(\sqrt{3}\right)^{2}}$$

6 numara ($\frac{s}{s^{2}-b^{2}}\to\cosh bt$) ve öteleme özelliğiyle:

$$2e^{-2t}\cosh\sqrt{3}\,t$$

$\cosh u=\frac{e^{u}+e^{-u}}{2}$ olduğundan:

$$\boxed{\;e^{-2t}\left(e^{\sqrt{3}\,t}+e^{-\sqrt{3}\,t}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **19.** &nbsp; $F(s)=\dfrac{5s^{2}-25s+27}{s^{3}-6s^{2}+9s}$
[CEVAP]
Paydayı çarpanlarına ayıralım:

$$s^{3}-6s^{2}+9s=s\left(s^{2}-6s+9\right)=s(s-3)^{2}$$

Doğrusal çarpan + tekrarlı doğrusal çarpan:

$$\frac{A}{s}+\frac{B}{s-3}+\frac{C}{(s-3)^{2}}$$

$$5s^{2}-25s+27=A(s-3)^{2}+Bs(s-3)+Cs$$

$s=0$: $27=9A\Rightarrow A=3$

$s=3$: $45-75+27=-3=3C\Rightarrow C=-1$

$s^{2}$ katsayısı: $5=A+B\Rightarrow B=2$

$$\boxed{\;3+2e^{3t}-te^{3t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **20.** &nbsp; $F(s)=\dfrac{3s^{2}+2s+9}{\left(s^{2}+9\right)^{2}}$
[CEVAP]
Payda **tekrarlı indirgenemez kuadratiktir**; kısmi kesir yeni bir şey vermez. Bunun yerine ==payı, paydanın çarpanını içerecek biçimde bölelim:==

$$3s^{2}+2s+9=3\left(s^{2}+9\right)+2s+9-27=3\left(s^{2}+9\right)+2s-18$$

$$F(s)=\frac{3}{s^{2}+9}+\frac{2s}{\left(s^{2}+9\right)^{2}}-\frac{18}{\left(s^{2}+9\right)^{2}}$$

**Birinci terim.** $b=3$ için $\frac{3}{s^{2}+9}$ tam olarak 3 numaralı girdidir: $\;\sin 3t$

**İkinci terim.** 9 numara: $\frac{2bs}{\left(s^{2}+b^{2}\right)^{2}}\to t\sin bt$. $b=3$ için pay $6s$ olmalı:

$$\frac{2s}{\left(s^{2}+9\right)^{2}}=\frac{1}{3}\cdot\frac{6s}{\left(s^{2}+9\right)^{2}}\;\to\;\frac{1}{3}\,t\sin 3t$$

**Üçüncü terim.** 13 numara: $\frac{1}{\left(s^{2}+b^{2}\right)^{2}}\to\frac{\sin bt-bt\cos bt}{2b^{3}}$. $b=3$ için $2b^{3}=54$:

$$-\frac{18}{\left(s^{2}+9\right)^{2}}\;\to\;-18\cdot\frac{\sin 3t-3t\cos 3t}{54}=-\frac{1}{3}\sin 3t+t\cos 3t$$

**Topla:**

$$\sin 3t+\frac{1}{3}t\sin 3t-\frac{1}{3}\sin 3t+t\cos 3t$$

$$\boxed{\;\frac{2}{3}\sin 3t+\frac{1}{3}t\sin 3t+t\cos 3t\;}$$

[KUTU]
**Kitabın cevabıyla UYUŞMUYOR — dikkat.**

Cevap anahtarında şu yazıyor:

$$\frac{t}{3}\sin 3t-t\cos 3t+\frac{4}{3}\sin 3t$$

İki terim farklı: $\sin 3t$ katsayısı ($\frac23$ yerine $\frac43$) ve $t\cos 3t$ işareti ($+$ yerine $-$).

**Hangisi doğru?** Kontrol için her iki cevabın Laplace dönüşümünü geri aldım.

*Yukarıdaki çözüm için:*

$$\mathcal{L}\left\{\frac{2}{3}\sin 3t+\frac{1}{3}t\sin 3t+t\cos 3t\right\}=\frac{2}{s^{2}+9}+\frac{2s}{\left(s^{2}+9\right)^{2}}+\frac{s^{2}-9}{\left(s^{2}+9\right)^{2}}$$

$$=\frac{2\left(s^{2}+9\right)+2s+s^{2}-9}{\left(s^{2}+9\right)^{2}}=\frac{3s^{2}+2s+9}{\left(s^{2}+9\right)^{2}}\;\checkmark$$

==Sorudaki $F(s)$'nin ta kendisi.==

*Anahtardaki cevap için:*

$$\frac{2s}{\left(s^{2}+9\right)^{2}}-\frac{s^{2}-9}{\left(s^{2}+9\right)^{2}}+\frac{4}{s^{2}+9}=\frac{2s-s^{2}+9+4\left(s^{2}+9\right)}{\left(s^{2}+9\right)^{2}}=\frac{3s^{2}+2s+45}{\left(s^{2}+9\right)^{2}}$$

Payda $9$ yerine $45$ çıkıyor — ==soruyla uyuşmuyor.==

**Sonuç:** Yukarıdaki çözüm doğru görünüyor. Anahtardaki fark ya tarama hatası ya kitap dizgi hatası olabilir; ==kitaptan teyit etmeniz iyi olur.== Yöntem her hâlükârda aynıdır.
[/KUTU]

**Kullanılan girdiler:** 3, 9 ve 13 numara. ==Tekrarlı kuadratik paydalarda bu üçlü hep birlikte çalışır;== payı $As^{2}+Bs+C$ biçimindeyse önce $A(s^{2}+b^{2})$ ayrılır, kalan $Bs$ ve sabit terimler 9 ve 13 numaralara gider.

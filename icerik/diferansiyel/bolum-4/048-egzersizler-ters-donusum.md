---
id: egzersizler-ters-donusum
menu: 4.2 Egzersizler — Ters Dönüşüm
tip: sorular
baslik: 4.2 &nbsp;Egzersizler — Ters Dönüşüm
---

Tablo 9.1'i kullanarak $\mathcal{L}^{-1}\{F(s)\}$ değerlerini bulunuz.

[SORU] **1.** &nbsp; $F(s)=\dfrac{2}{s}+\dfrac{3}{s-5}$
[CEVAP]
Lineerlikle terim terim okunur. 1 numara: $\frac{1}{s}\to 1$. 2 numara ($a=5$): $\frac{1}{s-5}\to e^{5t}$.

$$\boxed{\;2+3e^{5t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **3.** &nbsp; $F(s)=\dfrac{2}{s^{2}+9}$
[CEVAP]
3 numaralı girdi $\dfrac{b}{s^{2}+b^{2}}\to\sin bt$ biçiminde; burada $b=3$ olmalı ama pay $2$. Eksik çarpanı dışarı alalım:

$$\frac{2}{s^{2}+9}=\frac{2}{3}\cdot\frac{3}{s^{2}+3^{2}}$$

$$\boxed{\;\frac{2\sin 3t}{3}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **5.** &nbsp; $F(s)=\dfrac{5}{(s-2)^{4}}$
[CEVAP]
8 numara: $\dfrac{n!}{(s-a)^{n+1}}\to t^{n}e^{at}$. Burada $n+1=4$, yani $n=3$ ve $3!=6$:

$$\frac{5}{(s-2)^{4}}=\frac{5}{6}\cdot\frac{6}{(s-2)^{4}}$$

$$\boxed{\;\frac{5t^{3}e^{2t}}{6}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **7.** &nbsp; $F(s)=\dfrac{s+2}{s^{2}+4s+7}$
[CEVAP]
Paydayı tamkareye tamamlayalım: $s^{2}+4s+7=(s+2)^{2}+3$.

$$\frac{s+2}{(s+2)^{2}+\left(\sqrt{3}\right)^{2}}$$

12 numara ($\frac{s+a}{(s+a)^{2}+b^{2}}\to e^{-at}\cos bt$) ile $a=2$, $b=\sqrt{3}$:

$$\boxed{\;e^{-2t}\cos\sqrt{3}\,t\;}$$

==Pay zaten $s+2$ olduğu için öteleme gerekmedi.==

*Kitabın cevabıyla uyuşuyor.*

[SORU] **9.** &nbsp; $F(s)=\dfrac{3s}{s^{2}-4}$
[CEVAP]
Payda $s^{2}-4=s^{2}-2^{2}$, yani ==işaret eksi== — hiperbolik girdi kullanılır. 6 numara: $\dfrac{s}{s^{2}-b^{2}}\to\cosh bt$, $b=2$:

$$\boxed{\;3\cosh 2t\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **11.** &nbsp; $F(s)=\dfrac{s-2}{s^{2}+5s+6}$
[CEVAP]
Payda çarpanlarına ayrılır: $s^{2}+5s+6=(s+2)(s+3)$.

$$\frac{s-2}{(s+2)(s+3)}=\frac{A}{s+2}+\frac{B}{s+3}\;\Longrightarrow\;s-2=A(s+3)+B(s+2)$$

$s=-2$: $-4=A$. &nbsp;&nbsp; $s=-3$: $-5=-B\Rightarrow B=5$.

$$\boxed{\;-4e^{-2t}+5e^{-3t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **13.** &nbsp; $F(s)=\dfrac{5s}{s^{2}+4s+4}$
[CEVAP]
$s^{2}+4s+4=(s+2)^{2}$ — tekrarlı doğrusal çarpan. Payı öteleyelim: $s=(s+2)-2$.

$$\frac{5\big[(s+2)-2\big]}{(s+2)^{2}}=\frac{5}{s+2}-\frac{10}{(s+2)^{2}}$$

2 numara ve 8 numara ($n=1$, $a=-2$):

$$5e^{-2t}-10te^{-2t}$$

$$\boxed{\;5e^{-2t}(1-2t)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **15.** &nbsp; $F(s)=\dfrac{5}{(s+2)^{5}}$
[CEVAP]
$n+1=5\Rightarrow n=4$, $4!=24$:

$$\frac{5}{(s+2)^{5}}=\frac{5}{24}\cdot\frac{24}{(s+2)^{5}}$$

$$\boxed{\;\frac{5}{24}t^{4}e^{-2t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **17.** &nbsp; $F(s)=\dfrac{7}{(2s+1)^{3}}$
[CEVAP]
==Önce baştaki $2$ katsayısı temizlenmeli==, çünkü tabloda $(s-a)$ biçimi var, $(2s+1)$ değil:

$$(2s+1)^{3}=\left[2\left(s+\tfrac{1}{2}\right)\right]^{3}=8\left(s+\tfrac{1}{2}\right)^{3}$$

$$F(s)=\frac{7}{8\left(s+\frac{1}{2}\right)^{3}}$$

$n+1=3\Rightarrow n=2$, $2!=2$:

$$=\frac{7}{8}\cdot\frac{1}{2}\cdot\frac{2}{\left(s+\frac{1}{2}\right)^{3}}=\frac{7}{16}\cdot\frac{2}{\left(s+\frac{1}{2}\right)^{3}}$$

$$\boxed{\;\frac{7}{16}t^{2}e^{-t/2}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **19.** &nbsp; $F(s)=\dfrac{s+3}{\left(s^{2}+4\right)^{2}}$
[CEVAP]
İkiye bölelim; ==her parça ayrı bir tablo girdisine gider:==

$$\frac{s+3}{\left(s^{2}+4\right)^{2}}=\frac{s}{\left(s^{2}+4\right)^{2}}+3\cdot\frac{1}{\left(s^{2}+4\right)^{2}}$$

**14 numara** ($b=2$): $\;\dfrac{s}{\left(s^{2}+b^{2}\right)^{2}}\to\dfrac{t\sin bt}{2b}=\dfrac{t\sin 2t}{4}$

**13 numara** ($b=2$): $\;\dfrac{1}{\left(s^{2}+b^{2}\right)^{2}}\to\dfrac{\sin bt-bt\cos bt}{2b^{3}}=\dfrac{\sin 2t-2t\cos 2t}{16}$

$$\frac{t\sin 2t}{4}+\frac{3\left(\sin 2t-2t\cos 2t\right)}{16}=\frac{4t\sin 2t+3\sin 2t-6t\cos 2t}{16}$$

$$\boxed{\;\frac{4t\sin 2t+3\sin 2t-6t\cos 2t}{16}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **21.** &nbsp; $F(s)=\dfrac{2s+12}{s^{2}+6s+13}$
[CEVAP]
Tamkare: $s^{2}+6s+13=(s+3)^{2}+4$. Payı da $s+3$ cinsinden yazalım:

$$2s+12=2(s+3)+6$$

$$F(s)=\frac{2(s+3)}{(s+3)^{2}+2^{2}}+\frac{6}{(s+3)^{2}+2^{2}}=\frac{2(s+3)}{(s+3)^{2}+2^{2}}+3\cdot\frac{2}{(s+3)^{2}+2^{2}}$$

12 ve 11 numara ($a=3$, $b=2$):

$$\boxed{\;e^{-3t}\left(2\cos 2t+3\sin 2t\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **23.** &nbsp; $F(s)=\dfrac{10s+23}{s^{2}+7s+12}$
[CEVAP]
$s^{2}+7s+12=(s+3)(s+4)$.

$$10s+23=A(s+4)+B(s+3)$$

$s=-3$: $-7=A$. &nbsp;&nbsp; $s=-4$: $-17=-B\Rightarrow B=17$.

$$\boxed{\;-7e^{-3t}+17e^{-4t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **25.** &nbsp; $F(s)=\dfrac{1}{s^{3}+4s^{2}+3s}$
[CEVAP]
Önce $s$ parantezine alalım: $s^{3}+4s^{2}+3s=s\left(s^{2}+4s+3\right)=s(s+1)(s+3)$.

$$1=A(s+1)(s+3)+Bs(s+3)+Cs(s+1)$$

$s=0$: $1=3A\Rightarrow A=\frac{1}{3}$

$s=-1$: $1=B(-1)(2)=-2B\Rightarrow B=-\frac{1}{2}$

$s=-3$: $1=C(-3)(-2)=6C\Rightarrow C=\frac{1}{6}$

$$\boxed{\;\frac{1}{3}-\frac{e^{-t}}{2}+\frac{e^{-3t}}{6}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **27.** &nbsp; $F(s)=\dfrac{7s^{2}+8s+8}{s^{3}+4s}$
[CEVAP]
$s^{3}+4s=s\left(s^{2}+4\right)$ — doğrusal çarpan ve indirgenemez kuadratik:

$$\frac{7s^{2}+8s+8}{s\left(s^{2}+4\right)}=\frac{A}{s}+\frac{Bs+C}{s^{2}+4}$$

$$7s^{2}+8s+8=A\left(s^{2}+4\right)+(Bs+C)s$$

$s=0$: $8=4A\Rightarrow A=2$

$s^{2}$ katsayısı: $7=A+B\Rightarrow B=5$

$s^{1}$ katsayısı: $8=C$

$$F(s)=\frac{2}{s}+\frac{5s}{s^{2}+4}+\frac{8}{s^{2}+4}=\frac{2}{s}+\frac{5s}{s^{2}+4}+4\cdot\frac{2}{s^{2}+4}$$

$$\boxed{\;2+5\cos 2t+4\sin 2t\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **29.** &nbsp; $F(s)=\dfrac{s^{3}+16s}{\left(s^{2}+4\right)^{2}}$
[CEVAP]
Payı, paydanın çarpanını içerecek biçimde bölelim — ==kısmi kesire hiç girmeden:==

$$s^{3}+16s=s\left(s^{2}+16\right)=s\left[\left(s^{2}+4\right)+12\right]=s\left(s^{2}+4\right)+12s$$

$$F(s)=\frac{s\left(s^{2}+4\right)}{\left(s^{2}+4\right)^{2}}+\frac{12s}{\left(s^{2}+4\right)^{2}}=\frac{s}{s^{2}+4}+12\cdot\frac{s}{\left(s^{2}+4\right)^{2}}$$

4 numara ($b=2$) ve 14 numara ($b=2$, $\frac{t\sin 2t}{4}$):

$$\cos 2t+12\cdot\frac{t\sin 2t}{4}$$

$$\boxed{\;\cos 2t+3t\sin 2t\;}$$

*Kitabın cevabıyla uyuşuyor.*

---

### Çalışma soruları

Aşağıdakilerin cevapları kitabın cevap anahtarında verilmemiştir (anahtar yalnızca tek numaralı soruları içeriyor). ==Çözümleri size bırakıldı;== yöntemler yukarıdaki örneklerle aynıdır.

**2.** &nbsp; $F(s)=\dfrac{4}{s+2}+\dfrac{7}{s}$ &nbsp;&nbsp;&nbsp; **4.** &nbsp; $F(s)=\dfrac{2s}{s^{2}+9}$

**6.** &nbsp; $F(s)=\dfrac{5s+6}{s^{3}}$ &nbsp;&nbsp;&nbsp; **8.** &nbsp; $F(s)=\dfrac{s+10}{s^{2}+8s+20}$

**10.** &nbsp; $F(s)=\dfrac{2s+3}{s^{2}-4}$ &nbsp;&nbsp;&nbsp; **12.** &nbsp; $F(s)=\dfrac{2s+6}{8s^{2}-2s-3}$

**14.** &nbsp; $F(s)=\dfrac{s+1}{s^{3}+2s}$

[KUTU]
**İpuçları.** 6'da payı $s^{3}$'e terim terim bölün ve 7 numaralı girdiyi kullanın. 8'de tamkare + pay ötelemesi gerekir (7 ve 21 gibi). 12'de önce baştaki katsayıyı temizleyin (17 gibi), sonra paydayı çarpanlarına ayırın. 14'te payda $s\left(s^{2}+2\right)$ olur, 27 ile aynı yapıdadır.
[/KUTU]

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

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu yedi sorunun cevabı kitabın anahtarında yok** (anahtar yalnız tek numaralı soruları içeriyor). Çözümler bize aittir; her biri ==ikinci bir bağımsız yolla doğrulanmıştır==. En sık kullandığımız kontrol **başlangıç değer THEoREM'i**:

$$\lim_{s\to\infty}s\,F(s)=f(0^{+}),\qquad \lim_{s\to\infty}s\big[s\,F(s)-f(0)\big]=f'(0)$$

Ters dönüşümde bu, ==tek satırda yapılabilen ve hataların çoğunu yakalayan== bir sınamadır.
[/KUTU]

[SORU] **2.** &nbsp; $F(s)=\dfrac{4}{s+2}+\dfrac{7}{s}$
[CEVAP]
İki terim de doğrudan tablodan okunur:

$$\frac{4}{s+2}\;\to\;4e^{-2t},\qquad \frac{7}{s}\;\to\;7$$

$$\boxed{\;f(t)=4e^{-2t}+7\;}$$

**Doğrulama (başlangıç değer THEoREM'i).** $f(0)=4+7=11$ olmalı:

$$sF=\frac{4s}{s+2}+7\;\xrightarrow{\;s\to\infty\;}\;4+7=11\;\checkmark$$

**Son değer kontrolü.** $t\to\infty$ iken $4e^{-2t}\to 0$, yani $f(\infty)=7$. Son değer THEoREM'i ile:

$$\lim_{s\to 0}sF(s)=\lim_{s\to 0}\left[\frac{4s}{s+2}+7\right]=7\;\checkmark$$
[/CEVAP]

[SORU] **4.** &nbsp; $F(s)=\dfrac{2s}{s^{2}+9}$
[CEVAP]
Payda $s^{2}+3^{2}$; payda $s$ olduğu için ==kosinüs girdisi==:

$$\boxed{\;f(t)=2\cos 3t\;}$$

**Doğrulama.** $f(0)=2$ olmalı:

$$sF=\frac{2s^{2}}{s^{2}+9}\;\xrightarrow{\;s\to\infty\;}\;2\;\checkmark$$

[KUTU]
**3. soruyla karşılaştırın.** Orada $F=\dfrac{2}{s^{2}+9}$ idi ve cevap $\tfrac{2}{3}\sin 3t$ çıkmıştı — ==payı $3$'e tamamlamak gerekiyordu==. Burada pay $s$ olduğu için kosinüse gidiyor ve hiçbir düzeltme gerekmiyor.

**Ayırt etme kuralı:** payda $s$ varsa kosinüs, sabit varsa sinüs; sinüste payı $b$'ye tamamlamayı unutmayın.
[/KUTU]
[/CEVAP]

[SORU] **6.** &nbsp; $F(s)=\dfrac{5s+6}{s^{3}}$
[CEVAP]
**Adım 1 — Payı terim terim böl.**

$$F(s)=\frac{5s}{s^{3}}+\frac{6}{s^{3}}=\frac{5}{s^{2}}+\frac{6}{s^{3}}$$

**Adım 2 — Tablodan oku.** $\mathcal{L}^{-1}\left\{\dfrac{1}{s^{2}}\right\}=t$ ve $\mathcal{L}^{-1}\left\{\dfrac{1}{s^{3}}\right\}=\dfrac{t^{2}}{2}$:

$$f(t)=5t+6\cdot\frac{t^{2}}{2}$$

$$\boxed{\;f(t)=5t+3t^{2}\;}$$

**Doğrulama (ileri dönüşüm).**

$$\mathcal{L}\{5t+3t^{2}\}=\frac{5}{s^{2}}+3\cdot\frac{2}{s^{3}}=\frac{5}{s^{2}}+\frac{6}{s^{3}}=\frac{5s+6}{s^{3}}\;\checkmark$$

==$\dfrac{6}{s^{3}}$'ün karşılığı $6t^{2}$ değil $3t^{2}$'dir== — $\mathcal{L}\{t^{2}\}=\dfrac{2}{s^{3}}$ olduğu için ikiye bölünür. En sık yapılan hata burada.
[/CEVAP]

[SORU] **8.** &nbsp; $F(s)=\dfrac{s+10}{s^{2}+8s+20}$
[CEVAP]
**Adım 1 — Payda çarpanlanıyor mu?** $\Delta=64-80=-16<0$, hayır. ==Tamkareye tamamla:==

$$s^{2}+8s+20=\left(s^{2}+8s+16\right)+4=(s+4)^{2}+2^{2}$$

**Adım 2 — Payı da $s+4$ cinsinden yaz.** Bu adım atlanırsa tablo kullanılamaz:

$$s+10=(s+4)+6$$

$$F(s)=\frac{s+4}{(s+4)^{2}+4}+\frac{6}{(s+4)^{2}+4}=\frac{s+4}{(s+4)^{2}+4}+3\cdot\frac{2}{(s+4)^{2}+4}$$

==İkinci terimde payı $2$'ye tamamladık== (sinüs girdisi $b=2$ ister).

**Adım 3 — Tablodan oku.**

$$\boxed{\;f(t)=e^{-4t}\left(\cos 2t+3\sin 2t\right)\;}$$

**Doğrulama (başlangıç değer THEoREM'i, iki kez).**

**(a)** $f(0)=1$:

$$sF=\frac{s^{2}+10s}{s^{2}+8s+20}\;\xrightarrow{\;s\to\infty\;}\;1\;\checkmark$$

**(b)** $f'(0)$: türevden $f'=-4e^{-4t}(\cos 2t+3\sin 2t)+e^{-4t}(-2\sin 2t+6\cos 2t)$, yani $f'(0)=-4+6=2$.

$$sF-1=\frac{\left(s^{2}+10s\right)-\left(s^{2}+8s+20\right)}{s^{2}+8s+20}=\frac{2s-20}{s^{2}+8s+20}$$

$$s(sF-1)=\frac{2s^{2}-20s}{s^{2}+8s+20}\;\xrightarrow{\;s\to\infty\;}\;2\;\checkmark$$
[/CEVAP]

[SORU] **10.** &nbsp; $F(s)=\dfrac{2s+3}{s^{2}-4}$
[CEVAP]
**Adım 1 — Payda çarpanlanıyor.** ==Eksi işaretine dikkat:== $s^{2}-4=(s-2)(s+2)$, bu **hiperbolik** aileden.

$$\frac{2s+3}{(s-2)(s+2)}=\frac{A}{s-2}+\frac{B}{s+2}$$

$s=2$: &nbsp; $A=\dfrac{4+3}{4}=\dfrac{7}{4}$ &nbsp;&nbsp;&nbsp; $s=-2$: &nbsp; $B=\dfrac{-4+3}{-4}=\dfrac{1}{4}$

$$\boxed{\;f(t)=\frac{7}{4}e^{2t}+\frac{1}{4}e^{-2t}\;}$$

**Doğrulama (hiperbolik biçime çevirerek).** Aynı cevabı $\cosh$ ve $\sinh$ cinsinden de yazabiliriz. $F$'yi baştan şöyle bölelim:

$$\frac{2s+3}{s^{2}-4}=2\cdot\frac{s}{s^{2}-4}+\frac{3}{2}\cdot\frac{2}{s^{2}-4}\;\to\;2\cosh 2t+\frac{3}{2}\sinh 2t$$

Bu ifadeyi açalım:

$$2\cdot\frac{e^{2t}+e^{-2t}}{2}+\frac{3}{2}\cdot\frac{e^{2t}-e^{-2t}}{2}=e^{2t}\left(1+\frac{3}{4}\right)+e^{-2t}\left(1-\frac{3}{4}\right)=\frac{7}{4}e^{2t}+\frac{1}{4}e^{-2t}$$

Birebir aynı. &#10003; ==İki bağımsız yol, iki farklı görünüm, tek cevap.==

[KUTU]
**Hangi biçimi yazmalı?** İkisi de doğrudur. Payda $s^{2}-b^{2}$ ise hiperbolik biçim daha derli toplu; ama başlangıç değer problemi çözüyorsanız üstel biçim kısmi kesirlerle doğal gelir. ==Sınavda hangisi çıktıysa onu bırakın==, çevirmeye çalışıp hata yapmayın.
[/KUTU]
[/CEVAP]

[SORU] **12.** &nbsp; $F(s)=\dfrac{2s+6}{8s^{2}-2s-3}$
[CEVAP]
**Adım 1 — Paydayı çarpanlara ayır.** Baş katsayı $1$ değil; doğrudan çarpanlayalım:

$$8s^{2}-2s-3=(4s-3)(2s+1)$$

**Kontrol:** $(4s-3)(2s+1)=8s^{2}+4s-6s-3=8s^{2}-2s-3$ &#10003;

**Adım 2 — Kısmi kesirler.**

$$\frac{2s+6}{(4s-3)(2s+1)}=\frac{A}{4s-3}+\frac{B}{2s+1}\;\Longrightarrow\;2s+6=A(2s+1)+B(4s-3)$$

$s=\tfrac{3}{4}$: &nbsp; $\tfrac{3}{2}+6=\tfrac{15}{2}=A\cdot\tfrac{5}{2}\;\Rightarrow\;A=3$

$s=-\tfrac{1}{2}$: &nbsp; $-1+6=5=B(-5)\;\Rightarrow\;B=-1$

**Adım 3 — Baş katsayıları temizle.** ==Tabloda girdiler $\dfrac{1}{s-a}$ biçimindedir==, $\dfrac{1}{4s-3}$ biçiminde değil. Paydadan katsayıyı çekelim:

$$\frac{3}{4s-3}=\frac{3}{4\left(s-\tfrac{3}{4}\right)}=\frac{3/4}{s-\tfrac{3}{4}},\qquad \frac{-1}{2s+1}=\frac{-1}{2\left(s+\tfrac{1}{2}\right)}=\frac{-1/2}{s+\tfrac{1}{2}}$$

$$\boxed{\;f(t)=\frac{3}{4}e^{3t/4}-\frac{1}{2}e^{-t/2}\;}$$

**Doğrulama (başlangıç değer THEoREM'i).** $f(0)=\tfrac{3}{4}-\tfrac{1}{2}=\tfrac{1}{4}$ olmalı:

$$sF=\frac{2s^{2}+6s}{8s^{2}-2s-3}\;\xrightarrow{\;s\to\infty\;}\;\frac{2}{8}=\frac{1}{4}\;\checkmark$$

==Baş katsayıların oranı doğrudan $f(0)$'ı veriyor== — bu tür sorularda en hızlı kontrol budur.
[/CEVAP]

[SORU] **14.** &nbsp; $F(s)=\dfrac{s+1}{s^{3}+2s}$
[CEVAP]
**Adım 1 — Paydayı çarpanlara ayır.**

$$s^{3}+2s=s\left(s^{2}+2\right)$$

$s^{2}+2$ indirgenemez, ==dolayısıyla payı $Bs+C$ biçiminde almalıyız:==

$$\frac{s+1}{s\left(s^{2}+2\right)}=\frac{A}{s}+\frac{Bs+C}{s^{2}+2}$$

**Adım 2 — Katsayıları bul.**

$$s+1=A\left(s^{2}+2\right)+(Bs+C)s$$

$s=0$: &nbsp; $1=2A\;\Rightarrow\;A=\tfrac{1}{2}$

$s^{2}$ katsayısı: &nbsp; $A+B=0\;\Rightarrow\;B=-\tfrac{1}{2}$

$s^{1}$ katsayısı: &nbsp; $C=1$

$$F(s)=\frac{1/2}{s}-\frac{1}{2}\cdot\frac{s}{s^{2}+2}+\frac{1}{s^{2}+2}$$

**Adım 3 — Tablodan oku.** Burada $b=\sqrt{2}$; ==sinüs terimindeki payı $\sqrt{2}$'ye tamamlamak gerekiyor:==

$$\frac{1}{s^{2}+2}=\frac{1}{\sqrt{2}}\cdot\frac{\sqrt{2}}{s^{2}+2}\;\to\;\frac{1}{\sqrt{2}}\sin\sqrt{2}\,t$$

$$\boxed{\;f(t)=\frac{1}{2}-\frac{1}{2}\cos\sqrt{2}\,t+\frac{1}{\sqrt{2}}\sin\sqrt{2}\,t\;}$$

**Doğrulama (başlangıç değer THEoREM'i, iki kez).**

**(a)** $f(0)=\tfrac{1}{2}-\tfrac{1}{2}+0=0$:

$$sF=\frac{s^{2}+s}{s^{3}+2s}\;\xrightarrow{\;s\to\infty\;}\;0\;\checkmark$$

**(b)** $f'=\dfrac{\sqrt{2}}{2}\sin\sqrt{2}\,t+\cos\sqrt{2}\,t$, yani $f'(0)=1$:

$$s\big[sF-0\big]=\frac{s^{3}+s^{2}}{s^{3}+2s}\;\xrightarrow{\;s\to\infty\;}\;1\;\checkmark$$

[KUTU]
**Tam sayı olmayan frekans şaşırtmasın.** Payda $s^{2}+2$ olduğunda $b=\sqrt{2}$'dir; $\cos\sqrt{2}\,t$ ve $\sin\sqrt{2}\,t$ tamamen normaldir. ==Sinüs teriminde payı $\sqrt{2}$'ye tamamlamayı unutmak== bu tip sorularda en sık yapılan hatadır.
[/KUTU]
[/CEVAP]

[KUTU]
**Setin tamamı bitti.** 30 sorunun hepsi çözülü: tek numaralılar kitabın cevap anahtarıyla, çift numaralılar ise ==başlangıç/son değer THEoREM'i, ileri dönüşüm ya da ikinci bir cebirsel yolla== doğrulanmıştır.

**Bu setten çıkan üç refleks:**

1. Payda çarpanlanıyor mu? → evet ise kısmi kesirler, hayır ise **tamkare**.
2. Tamkare yaptıysanız ==payı da aynı cinsten yazın== ($s+10=(s+4)+6$ gibi).
3. Sinüs girdisinde payı $b$'ye tamamlayın — $b$ ister $2$ olsun, ister $\sqrt{2}$.
[/KUTU]

---
id: ornek-cauchy-euler-bdp
menu: 3.4 Örnek — Cauchy-Euler BDP
tip: ornek
baslik: 3.4 &nbsp;Çözümlü Örnek — Cauchy-Euler Başlangıç Değer Problemi
---

Örnek 4.44'te $x^{3}y'''-4x^{2}y''+8xy'-8y=4\ln x$ denkleminin **genel çözümünü** bulduk. Şimdi aynı denkleme üç başlangıç koşulu ekleyip ==keyfi sabitleri belirleyelim==. Üçüncü mertebeden bir denklem olduğu için üç koşul gerekiyor.

[SORU*] **Örnek 4.44a.** &nbsp; Aşağıdaki başlangıç değer problemini çözünüz:
$$x^{3}y'''-4x^{2}y''+8xy'-8y=4\ln x,\qquad y(1)=1,\quad y'(1)=0,\quad y''(1)=-1$$
[CEVAP]
**Adım 1 — Genel çözümü hatırla.**

Örnek 4.44'te $x=e^{t}$ dönüşümüyle denklem $\dfrac{d^{3}y}{dt^{3}}-7\dfrac{d^{2}y}{dt^{2}}+14\dfrac{dy}{dt}-8y=4t$ hâline gelmiş, oradan

$$y=c_{1}x+c_{2}x^{2}+c_{3}x^{4}-\frac{1}{2}\ln x-\frac{7}{8} \tag{$\ast$}$$

bulunmuştu. Başlangıç koşulları $x=1$'de veriliyor; ==bu iyi haber==, çünkü $\ln 1=0$ ve $x$'in bütün kuvvetleri $1$ olur.

**Adım 2 — Türevleri al.**

$$y'=c_{1}+2c_{2}x+4c_{3}x^{3}-\frac{1}{2x}$$

$$y''=2c_{2}+12c_{3}x^{2}+\frac{1}{2x^{2}}$$

[KUTU]
**Burada iki işaret hatası çok sık yapılır.**

1. $-\dfrac{7}{8}$ **sabittir**; türev alınca kaybolur. $y'$ ve $y''$ ifadelerinde ona yer yoktur.
2. $-\dfrac{1}{2}\ln x$ teriminin türevi $-\dfrac{1}{2x}$, ikinci türevi ise ==$+\dfrac{1}{2x^{2}}$==. Bir kez daha türev alırken işaret döner.
[/KUTU]

**Adım 3 — Koşulları yerleştir ($x=1$).**

$$y(1)=c_{1}+c_{2}+c_{3}-0-\frac{7}{8}=1\;\Longrightarrow\;c_{1}+c_{2}+c_{3}=\frac{15}{8} \tag{I}$$

$$y'(1)=c_{1}+2c_{2}+4c_{3}-\frac{1}{2}=0\;\Longrightarrow\;c_{1}+2c_{2}+4c_{3}=\frac{1}{2} \tag{II}$$

$$y''(1)=2c_{2}+12c_{3}+\frac{1}{2}=-1\;\Longrightarrow\;2c_{2}+12c_{3}=-\frac{3}{2} \tag{III}$$

**Adım 4 — Sistemi çöz.**

$(\mathrm{II})-(\mathrm{I})$:

$$c_{2}+3c_{3}=\frac{1}{2}-\frac{15}{8}=-\frac{11}{8}$$

$(\mathrm{III})$'ü ikiye bölelim:

$$c_{2}+6c_{3}=-\frac{3}{4}=-\frac{6}{8}$$

İkisini çıkaralım:

$$3c_{3}=-\frac{6}{8}+\frac{11}{8}=\frac{5}{8}\;\Longrightarrow\;\boxed{c_{3}=\frac{5}{24}}$$

$$c_{2}=-\frac{11}{8}-3\cdot\frac{5}{24}=-\frac{11}{8}-\frac{5}{8}=-2$$

$$c_{1}=\frac{15}{8}-c_{2}-c_{3}=\frac{15}{8}+2-\frac{5}{24}=\frac{45+48-5}{24}=\frac{88}{24}=\frac{11}{3}$$

**Adım 5 — Çözüm.**

$$\boxed{\;y=\frac{11}{3}x-2x^{2}+\frac{5}{24}x^{4}-\frac{1}{2}\ln x-\frac{7}{8}\;}$$

**Doğrulama.**

$$y(1)=\frac{11}{3}-2+\frac{5}{24}-0-\frac{7}{8}=\frac{88-48+5-21}{24}=\frac{24}{24}=1\;\checkmark$$

$$y'(1)=\frac{11}{3}+2(-2)+4\cdot\frac{5}{24}-\frac{1}{2}=\frac{22}{6}-4+\frac{5}{6}-\frac{3}{6}=\frac{24}{6}-4=0\;\checkmark$$

$$y''(1)=2(-2)+12\cdot\frac{5}{24}+\frac{1}{2}=-4+\frac{5}{2}+\frac{1}{2}=-1\;\checkmark$$
[/CEVAP]

[KUTU]
**Neden koşullar $x=1$'de veriliyor?** Cauchy-Euler denkleminde en yüksek dereceli katsayı $a_{0}x^{n}$, $x=0$'da sıfırdır; dolayısıyla temel varlık THEoREM'inin geçerli olduğu aralık $x=0$'ı ==içeremez==. Koşullar $x>0$ tarafında verilmelidir ve $x=1$ hem bu şartı sağlar hem de $\ln 1=0$ sayesinde aritmetiği en sade hâle getirir.

Koşullar $x=-1$'de verilseydi $x=-e^{t}$ dönüşümüyle $x<0$ aralığında çalışılırdı; genel çözümde $\ln x$ yerine $\ln|x|$ yazılır.
[/KUTU]

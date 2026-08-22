---
id: tekrar-sistemler
menu: 4.6 Bölüm Tekrarı — Sistemler
tip: sorular
baslik: 4.6 &nbsp;Bölüm Tekrar Soruları — Lineer Sistemler (35-36)
---

Bölüm tekrarının son iki sorusu 4.5'teki **lineer sistem (linear system)** çözümünü sınıyor. Yöntem aynıdır: her iki denklemin dönüşümü alınır, $X(s)$ ve $Y(s)$ için iki bilinmeyenli cebirsel sistem kurulur, biri elenir.

[KUTU]
**İkinci bilinmeyeni elemeyle aramayın.** $X(s)$ bulunduktan sonra $Y(s)$'yi de kısmi kesirlerle çözmek gereksiz uzundur. ==Orijinal denklemlerden en sadesine geri koymak== çok daha kısadır: 35'te birinci denklem doğrudan $y=x'-4x$ verir, 36'da ikinci denklemden $x$ çekilir.
[/KUTU]

---

[SORU] **35.** &nbsp; $x'-4x-y=0$, &nbsp; $y'-2x-3y=6e^{3t}$, &nbsp; $x(0)=4,\;y(0)=-5$
[CEVAP]
**Adım 1 — Dönüşümleri al.**

$$sX-4-4X-Y=0\;\Longrightarrow\;(s-4)X-Y=4 \tag{I}$$

$$sY+5-2X-3Y=\frac{6}{s-3}\;\Longrightarrow\;-2X+(s-3)Y=\frac{6}{s-3}-5 \tag{II}$$

**Adım 2 — $Y$'yi ele.** $(\mathrm{I})$'den $Y=(s-4)X-4$; $(\mathrm{II})$'ye koyalım:

$$-2X+(s-3)\Big[(s-4)X-4\Big]=\frac{6}{s-3}-5$$

$$\Big[(s-3)(s-4)-2\Big]X=\frac{6}{s-3}-5+4(s-3)$$

Soldaki çarpan ==beklenenden düşük dereceli değil, ama güzel çarpanlanıyor==:

$$(s-3)(s-4)-2=s^{2}-7s+12-2=s^{2}-7s+10=(s-2)(s-5)$$

Sağ taraf: $\dfrac{6}{s-3}+4s-17$. Ortak paydaya alalım:

$$X=\frac{6+(4s-17)(s-3)}{(s-3)(s-2)(s-5)}=\frac{4s^{2}-29s+57}{(s-2)(s-3)(s-5)}$$

**Adım 3 — Kısmi kesirler.** Üç ayrı reel kök, üç terim:

$$\frac{4s^{2}-29s+57}{(s-2)(s-3)(s-5)}=\frac{A}{s-2}+\frac{B}{s-3}+\frac{C}{s-5}$$

$s=2$: &nbsp; $\dfrac{16-58+57}{(2-3)(2-5)}=\dfrac{15}{3}=5\;\Rightarrow\;A=5$

$s=3$: &nbsp; $\dfrac{36-87+57}{(3-2)(3-5)}=\dfrac{6}{-2}=-3\;\Rightarrow\;B=-3$

$s=5$: &nbsp; $\dfrac{100-145+57}{(5-2)(5-3)}=\dfrac{12}{6}=2\;\Rightarrow\;C=2$

$$x=5e^{2t}-3e^{3t}+2e^{5t}$$

**Adım 4 — $y$'yi geri yerleştirmeyle bul.** Birinci orijinal denklem $y=x'-4x$ veriyor:

$$x'=10e^{2t}-9e^{3t}+10e^{5t},\qquad 4x=20e^{2t}-12e^{3t}+8e^{5t}$$

$$y=x'-4x=(10-20)e^{2t}+(-9+12)e^{3t}+(10-8)e^{5t}$$

$$\boxed{\;x=5e^{2t}-3e^{3t}+2e^{5t},\qquad y=-10e^{2t}+3e^{3t}+2e^{5t}\;}$$

**Doğrulama.** &nbsp; $x(0)=5-3+2=4\;\checkmark$, &nbsp; $y(0)=-10+3+2=-5\;\checkmark$

İkinci denklemi terim türüne göre sınayalım. $y'=-20e^{2t}+9e^{3t}+10e^{5t}$ ile $y'-2x-3y$:

$$e^{2t}:\;-20-10+30=0,\qquad e^{3t}:\;9+6-9=6,\qquad e^{5t}:\;10-4-6=0$$

$$\Longrightarrow\;6e^{3t}\;\checkmark$$

[KUTU]
**&#9888; Cevap anahtarında dizgi/tarama hatası var.** Anahtar $y$ için şunu veriyor:

$$y=-10e^{2t}+2e^{3t}+3e^{3t}$$

==Aynı üs iki kez yazılmış.== Öyle bırakılırsa ifade $-10e^{2t}+5e^{3t}$ diye sadeleşirdi. Bu hâli $y(0)=-5$ koşulunu tesadüfen sağlar, ama **denklemi sağlamaz**: $x$ içinde $2e^{5t}$ terimi varken $y$'de hiç $e^{5t}$ bulunmaması, $y=x'-4x$ bağıntısıyla çelişir.

İkinci terimdeki üs $e^{5t}$ olmalıdır; o zaman anahtar $-10e^{2t}+2e^{5t}+3e^{3t}$ olur ki bu ==bizim bulduğumuzun terim sırası değişmiş hâlidir.== $x$ için verilen cevap da bizimkiyle birebir aynı.

Dolayısıyla sonuç uyuşuyor; anahtardaki $e^{3t}$ tekrarı bir yazım/tarama hatasıdır.
[/KUTU]
[/CEVAP]

[SORU] **36.** &nbsp; $x'-2x-4y=4$, &nbsp; $y'+2x+2y=t$, &nbsp; $x(0)=3,\;y(0)=1$
[CEVAP]
**Adım 1 — Dönüşümleri al.**

$$sX-3-2X-4Y=\frac{4}{s}\;\Longrightarrow\;(s-2)X-4Y=\frac{4}{s}+3 \tag{I}$$

$$sY-1+2X+2Y=\frac{1}{s^{2}}\;\Longrightarrow\;2X+(s+2)Y=\frac{1}{s^{2}}+1 \tag{II}$$

**Adım 2 — $X$'i ele.** $(\mathrm{I})\times 2$ ile $(\mathrm{II})\times(s-2)$ alıp çıkaralım — ==her ikisinde de $2(s-2)X$ terimi oluşur ve götürür:==

$$2(s-2)X-8Y=\frac{8}{s}+6$$
$$2(s-2)X+(s-2)(s+2)Y=(s-2)\left(\frac{1}{s^{2}}+1\right)$$

Çıkarma:

$$\Big[-8-\left(s^{2}-4\right)\Big]Y=\frac{8}{s}+6-(s-2)\left(\frac{1}{s^{2}}+1\right)$$

Sol taraf $-\left(s^{2}+4\right)$. Sağ tarafı açalım:

$$\frac{8}{s}+6-\frac{1}{s}+\frac{2}{s^{2}}-s+2=\frac{7}{s}+\frac{2}{s^{2}}+8-s$$

$$Y=\frac{s-8-\dfrac{7}{s}-\dfrac{2}{s^{2}}}{s^{2}+4}$$

Pay ve paydayı $s^{2}$ ile çarpalım:

$$Y=\frac{s^{3}-8s^{2}-7s-2}{s^{2}\left(s^{2}+4\right)}$$

**Adım 3 — Kısmi kesirler.** Tekrarlı $s$ çarpanı ve indirgenemez kuadratik:

$$\frac{s^{3}-8s^{2}-7s-2}{s^{2}\left(s^{2}+4\right)}=\frac{A}{s}+\frac{B}{s^{2}}+\frac{Cs+D}{s^{2}+4}$$

$$s^{3}-8s^{2}-7s-2=As\left(s^{2}+4\right)+B\left(s^{2}+4\right)+(Cs+D)s^{2}$$

Katsayıları eşleyelim:

$$s^{3}:\;A+C=1,\qquad s^{2}:\;B+D=-8,\qquad s^{1}:\;4A=-7,\qquad s^{0}:\;4B=-2$$

$$A=-\frac{7}{4}\;\Rightarrow\;C=\frac{11}{4},\qquad B=-\frac{1}{2}\;\Rightarrow\;D=-\frac{15}{2}$$

$$Y=-\frac{7/4}{s}-\frac{1/2}{s^{2}}+\frac{\frac{11}{4}s-\frac{15}{2}}{s^{2}+4}$$

Son terimi tabloya sokarken ==sinüs kısmını $2$'ye bölmeyi unutmayın==: $\dfrac{-15/2}{s^{2}+4}=-\dfrac{15}{4}\cdot\dfrac{2}{s^{2}+4}$.

$$y=-\frac{7}{4}-\frac{t}{2}+\frac{11}{4}\cos 2t-\frac{15}{4}\sin 2t$$

**Adım 4 — $x$'i geri yerleştirmeyle bul.** İkinci orijinal denklemden $x=\dfrac{t-y'-2y}{2}$:

$$y'=-\frac{1}{2}-\frac{11}{2}\sin 2t-\frac{15}{2}\cos 2t$$

$$t-y'-2y=2t+4+\left(\frac{15}{2}-\frac{11}{2}\right)\cos 2t+\left(\frac{11}{2}+\frac{15}{2}\right)\sin 2t=2t+4+2\cos 2t+13\sin 2t$$

$$\boxed{\;x=2+t+\cos 2t+\frac{13}{2}\sin 2t,\qquad y=-\frac{7}{4}-\frac{t}{2}+\frac{11}{4}\cos 2t-\frac{15}{4}\sin 2t\;}$$

**Doğrulama.** &nbsp; $x(0)=2+1=3\;\checkmark$, &nbsp; $y(0)=-\tfrac{7}{4}+\tfrac{11}{4}=1\;\checkmark$

Birinci denklemi ($x'-2x-4y$) terim türüne göre sınayalım. $x'=1-2\sin 2t+13\cos 2t$:

$$\text{sabit}:\;1-4+7=4,\qquad t:\;-2+2=0$$
$$\cos 2t:\;13-2-11=0,\qquad \sin 2t:\;-2-13+15=0$$

$$\Longrightarrow\;4\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[KUTU]
**İki sorunun karşılaştırması.** İkisi de aynı yöntemi kullanıyor ama farklı zorluk barındırıyor:

- **35'te** zorlama $6e^{3t}$ ve paydadaki çarpanlar $(s-2)(s-3)(s-5)$ — üçü de basit reel kök, kısmi kesirler ==örtme yöntemiyle== (kök değerini koyarak) anında çıkıyor.
- **36'da** payda $s^{2}(s^{2}+4)$ — hem tekrarlı çarpan hem indirgenemez kuadratik var; örtme yöntemi yetmiyor, ==katsayı eşleme== gerekiyor. Ayrıca zorlamalar polinom olduğu için çözüm polinom + trigonometrik karışımı çıkıyor.

Her ikisinde de son adımda ikinci bilinmeyen **geri yerleştirmeyle** bulundu; ikinci bir kısmi kesir açılımı hiç yapılmadı.
[/KUTU]

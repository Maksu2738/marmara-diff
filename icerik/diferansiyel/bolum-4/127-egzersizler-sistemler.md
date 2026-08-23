---
id: egzersizler-sistemler
menu: 4.5 Egzersizler — Sistemler
tip: sorular
baslik: 4.5 &nbsp;Egzersizler — Lineer Sistemlerin Laplace ile Çözümü
---

Aşağıdaki lineer sistemleri verilen başlangıç koşullarıyla Laplace dönüşümü kullanarak çözünüz.

[SORU] **1.** &nbsp; $x'+y=3e^{2t}$, &nbsp; $y'+x=0$, &nbsp; $x(0)=2,\;y(0)=0$
[CEVAP]
**Adım 1 — Dönüşümleri al.**

$$sX-2+Y=\frac{3}{s-2}$$
$$sY+X=0$$

**Adım 2 — İkinci denklemden $X$'i çek, birinciye koy.**

İkinci denklem çok sade: $\;X=-sY$

$$s(-sY)-2+Y=\frac{3}{s-2}\;\Longrightarrow\;\left(1-s^{2}\right)Y=\frac{3}{s-2}+2=\frac{2s-1}{s-2}$$

$$Y=\frac{2s-1}{(s-2)\left(1-s^{2}\right)}=\frac{-(2s-1)}{(s-2)(s-1)(s+1)}$$

**Adım 3 — Kısmi kesirler.**

$$-(2s-1)=A(s-1)(s+1)+B(s-2)(s+1)+C(s-2)(s-1)$$

$s=2$: $-3=3A\Rightarrow A=-1$

$s=1$: $-1=-2B\Rightarrow B=\tfrac{1}{2}$

$s=-1$: $3=6C\Rightarrow C=\tfrac{1}{2}$

$$y=-e^{2t}+\frac{1}{2}e^{t}+\frac{1}{2}e^{-t}$$

**Adım 4 — $x$'i geri yerleştirmeyle bul.**

İkinci orijinal denklemden $x=-y'$:

$$y'=-2e^{2t}+\frac{1}{2}e^{t}-\frac{1}{2}e^{-t}$$

$$\boxed{\;x=-\frac{e^{t}}{2}+\frac{e^{-t}}{2}+2e^{2t},\qquad y=\frac{e^{t}}{2}+\frac{e^{-t}}{2}-e^{2t}\;}$$

**Doğrulama.** $x(0)=-\tfrac12+\tfrac12+2=2\;\checkmark$, &nbsp; $y(0)=\tfrac12+\tfrac12-1=0\;\checkmark$

$$x'+y=\left(-\tfrac{e^{t}}{2}-\tfrac{e^{-t}}{2}+4e^{2t}\right)+\left(\tfrac{e^{t}}{2}+\tfrac{e^{-t}}{2}-e^{2t}\right)=3e^{2t}\;\checkmark$$

$$y'+x=\left(\tfrac{e^{t}}{2}-\tfrac{e^{-t}}{2}-2e^{2t}\right)+\left(-\tfrac{e^{t}}{2}+\tfrac{e^{-t}}{2}+2e^{2t}\right)=0\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[KUTU]
**Adım 4'teki kısayolu benimseyin.** $Y$ bulunduktan sonra $X$'i de elemeyle aramak yerine ==orijinal denklemlerden en sadesine geri koymak== çok daha kısadır. Burada ikinci denklem doğrudan $x=-y'$ verdi.
[/KUTU]

[SORU] **3.** &nbsp; $x'-5x+2y=3e^{4t}$, &nbsp; $y'-4x+y=0$, &nbsp; $x(0)=3,\;y(0)=0$
[CEVAP]
$$(s-5)X+2Y=\frac{3}{s-4}+3,\qquad -4X+(s+1)Y=0$$

İkinci denklemden $Y=\dfrac{4X}{s+1}$; birinciye koyup $X$ çekilir, ardından kısmi kesirlerle geri çevrilir.

$$\boxed{\;x=-2e^{t}+5e^{4t},\qquad y=-4e^{t}+4e^{4t}\;}$$

**Doğrulama.** $x(0)=-2+5=3\;\checkmark$, &nbsp; $y(0)=-4+4=0\;\checkmark$

Birinci denklem, katsayı katsayı:

$$e^{t}:\;-2+10-8=0,\qquad e^{4t}:\;20-25+8=3\;\checkmark$$

İkinci denklem:

$$e^{t}:\;-4+8-4=0,\qquad e^{4t}:\;16-20+4=0\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **5.** &nbsp; $x'-4x+2y=2t$, &nbsp; $y'-8x+4y=1$, &nbsp; $x(0)=3,\;y(0)=5$
[CEVAP]
$$(s-4)X+2Y=\frac{2}{s^{2}}+3,\qquad -8X+(s+4)Y=\frac{1}{s}+5$$

==Bu sistemde ilginç bir şey var:== ikinci denklemin katsayıları birincinin iki katına yakın ($-8=2\cdot(-4)$, $4=2\cdot 2$). Bu, elemede paydanın beklenenden düşük dereceli çıkmasına ve çözümün **polinom** olmasına yol açar.

$$\boxed{\;x=3+2t+\frac{4}{3}t^{3},\qquad y=5+5t-2t^{2}+\frac{8}{3}t^{3}\;}$$

**Doğrulama.** $x(0)=3\;\checkmark$, &nbsp; $y(0)=5\;\checkmark$

$x'=2+4t^{2}$ ile birinci denklem:

$$\text{sabit}:\;2-12+10=0,\quad t:\;-8+10=2,\quad t^{2}:\;4-4=0,\quad t^{3}:\;-\tfrac{16}{3}+\tfrac{16}{3}=0$$

$$\Longrightarrow\;2t\;\checkmark$$

$y'=5-4t+8t^{2}$ ile ikinci denklem:

$$\text{sabit}:\;5-24+20=1,\quad t:\;-4-16+20=0,\quad t^{2}:\;8-8=0,\quad t^{3}:\;-\tfrac{32}{3}+\tfrac{32}{3}=0$$

$$\Longrightarrow\;1\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **7.** &nbsp; $2x'+y'-x-y=e^{-t}$, &nbsp; $x'+y'+2x+y=e^{t}$, &nbsp; $x(0)=2,\;y(0)=1$
[CEVAP]
==Bu sistemde her iki denklemde de hem $x'$ hem $y'$ var==, yani normal biçimde değil. Laplace bundan etkilenmez; dönüşüm alındığında yine iki bilinmeyenli cebirsel sistem çıkar.

$$\boxed{\;x=8\sin t+2\cos t,\qquad y=-13\sin t+\cos t+\frac{e^{t}}{2}-\frac{e^{-t}}{2}\;}$$

**Doğrulama.** $x(0)=2\;\checkmark$, &nbsp; $y(0)=1+\tfrac12-\tfrac12=1\;\checkmark$

$x'=8\cos t-2\sin t$, &nbsp; $y'=-13\cos t-\sin t+\tfrac{e^{t}}{2}+\tfrac{e^{-t}}{2}$

**Birinci denklem** ($2x'+y'-x-y$):

$$\cos t:\;16-13-2-1=0,\qquad \sin t:\;-4-1-8+13=0$$
$$e^{t}:\;\tfrac12-\tfrac12=0,\qquad e^{-t}:\;\tfrac12+\tfrac12=1\;\Longrightarrow\;e^{-t}\;\checkmark$$

**İkinci denklem** ($x'+y'+2x+y$):

$$\cos t:\;8-13+4+1=0,\qquad \sin t:\;-2-1+16-13=0$$
$$e^{t}:\;\tfrac12+\tfrac12=1,\qquad e^{-t}:\;\tfrac12-\tfrac12=0\;\Longrightarrow\;e^{t}\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **9.** &nbsp; $2x'+4y'+x-y=3e^{t}$, &nbsp; $x'+y'+2x+2y=e^{t}$, &nbsp; $x(0)=1,\;y(0)=0$
[CEVAP]
$$\boxed{\;x=e^{-2t}-te^{t},\qquad y=\frac{1}{3}e^{t}-\frac{1}{3}e^{-2t}+te^{t}\;}$$

**Doğrulama.** $x(0)=1\;\checkmark$, &nbsp; $y(0)=\tfrac13-\tfrac13=0\;\checkmark$

$$x'=-2e^{-2t}-e^{t}-te^{t},\qquad y'=\frac{4}{3}e^{t}+\frac{2}{3}e^{-2t}+te^{t}$$

**Birinci denklem** ($2x'+4y'+x-y$):

$$e^{-2t}:\;-4+\tfrac83+1+\tfrac13=0,\qquad e^{t}:\;-2+\tfrac{16}{3}-\tfrac13=3,\qquad te^{t}:\;-2+4-1-1=0$$

$$\Longrightarrow\;3e^{t}\;\checkmark$$

**İkinci denklem** ($x'+y'+2x+2y$):

$$e^{-2t}:\;-2+\tfrac23+2-\tfrac23=0,\qquad e^{t}:\;-1+\tfrac43+\tfrac23=1,\qquad te^{t}:\;-1+1-2+2=0$$

$$\Longrightarrow\;e^{t}\;\checkmark$$

[KUTU]
**$te^{t}$ yine belirdi.** Sebebi 30. tekrar sorusundakiyle aynı: zorlamadaki $e^{t}$, elemeden çıkan paydanın $(s-1)$ çarpanıyla çakışıyor ve $(s-1)^{2}$ oluşuyor. ==Sistemlerde de rezonans aynı biçimde görünür.==

Dikkat çeken şey, $te^{t}$'nin $x$ ve $y$'de **ters işaretlerle** çıkması: $x$'te $-te^{t}$, $y$'de $+te^{t}$. Toplandıklarında götürüyorlar; nitekim ikinci denklemdeki $2x+2y$ terimi bu yüzden $te^{t}$ katkısı vermiyor.
[/KUTU]

*Kitabın cevabıyla uyuşuyor.*

---

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**2.** &nbsp; $x'-2y=0$, &nbsp; $y'+x-3y=2$, &nbsp; $x(0)=3,\;y(0)=0$

**4.** &nbsp; $x'-2x-3y=0$, &nbsp; $y'+x+2y=t$, &nbsp; $x(0)=-1,\;y(0)=0$

**6.** &nbsp; $x'+x+y=5e^{2t}$, &nbsp; $y'-5x-y=-3e^{2t}$, &nbsp; $x(0)=3,\;y(0)=2$

**8.** &nbsp; $2x'+y'+x+5y=4t$, &nbsp; $x'+y'+2x+2y=2$, &nbsp; $x(0)=3,\;y(0)=-4$

**10.** &nbsp; $x''-3x'+y'+2x-y=0$, &nbsp; $x'+y'-2x+y=0$, &nbsp; $x(0)=0,\;y(0)=-1,\;x'(0)=0$

[KUTU]
**İpuçları.** 2 ve 4 → soru 1 ve 3 gibi; bir denklemden bir bilinmeyeni çekip ötekine koyun.

6 ve 8 → soru 7 ve 9 gibi, her iki denklemde de türevler karışık. Dönüşüm alıp $X$ ve $Y$ için iki bilinmeyenli sistem kurun.

**10 farklı:** içinde $x''$ var, dolayısıyla ==üç başlangıç koşulu verilmiş==. $\mathcal{L}\{x''\}=s^{2}X-s\,x(0)-x'(0)$ kullanın. Geri kalanı aynıdır.

**Doğrulama.** Cevap anahtarı olmasa da her çözüm sınanabilir: bulduğunuz $x$ ve $y$'yi ==her iki denkleme birden== koyun ve başlangıç koşullarını kontrol edin. Yukarıdaki çözümlerde tam olarak bu yapıldı — katsayıları terim türüne göre grupladığınızda hata anında görünür.
[/KUTU]

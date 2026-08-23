---
id: egzersizler-sistemler
menu: 4.5 Egzersizler — Sistemler
tip: sorular
baslik: 4.5 &nbsp;Egzersizler — Lineer Sistemlerin Laplace ile Çözümü
defterde: yok
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

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu soruların cevabı kitabın anahtarında yok.** Çözümler bize aittir; her biri ==ikinci bir bağımsız yolla doğrulanmıştır==.

Sistemlerde kullandığımız doğrulama şu: bulunan $x(t)$ ve $y(t)$ ==her iki denkleme birden== konur. Bir denklem çözüm sırasında zaten kullanıldığı için tek başına kanıt değildir; ==ikinci denklem bağımsız bir sınavdır.== Terimleri türüne göre ($e^{at}$, $\sin$, $\cos$, $t$, sabit) gruplayıp katsayı toplamlarına bakmak hatayı anında görünür kılar.
[/KUTU]

[SORU] **2.** &nbsp; $x'-2y=0$, &nbsp; $y'+x-3y=2$, &nbsp; $x(0)=3,\;y(0)=0$
[CEVAP]
**Adım 1 — İki denklemi de dönüştür.**

$$sX-3-2Y=0\;\Longrightarrow\;sX-2Y=3$$

$$sY+X-3Y=\frac{2}{s}\;\Longrightarrow\;X+(s-3)Y=\frac{2}{s}$$

**Adım 2 — Yok et.** Birinciden $X=\dfrac{3+2Y}{s}$; ikinciye koyup $s$ ile çarpalım:

$$3+2Y+s(s-3)Y=2\;\Longrightarrow\;Y\left[s^{2}-3s+2\right]=-1$$

$$Y(s)=\frac{-1}{(s-1)(s-2)}$$

**Adım 3 — $y$'yi bul.** Ezberlenmeye değer kalıptan ($a=2$, $b=1$):

$$\mathcal{L}^{-1}\left\{\frac{1}{(s-1)(s-2)}\right\}=\frac{e^{2t}-e^{t}}{2-1}=e^{2t}-e^{t}$$

$$y(t)=e^{t}-e^{2t}$$

**Adım 4 — $x$'i bul.**

$$X(s)=\frac{3}{s}+\frac{2Y}{s}=\frac{3}{s}-\frac{2}{s(s-1)(s-2)}$$

Kapatma yöntemiyle: &nbsp; $s=0\Rightarrow\tfrac{1}{2}$, &nbsp; $s=1\Rightarrow-1$, &nbsp; $s=2\Rightarrow\tfrac{1}{2}$

$$\frac{1}{s(s-1)(s-2)}\;\longrightarrow\;\frac{1}{2}-e^{t}+\frac{1}{2}e^{2t}$$

$$x(t)=3-2\left[\frac{1}{2}-e^{t}+\frac{1}{2}e^{2t}\right]=2+2e^{t}-e^{2t}$$

$$\boxed{\;x(t)=2+2e^{t}-e^{2t},\qquad y(t)=e^{t}-e^{2t}\;}$$

**Doğrulama 1 — birinci denklem.** $x'=2e^{t}-2e^{2t}$ ve $2y=2e^{t}-2e^{2t}$:

$$x'-2y=0\;\checkmark$$

**Doğrulama 2 — ikinci denklem (bağımsız sınav).** $y'=e^{t}-2e^{2t}$:

$$y'+x-3y=\underbrace{(1+2-3)}_{0}e^{t}+\underbrace{(-2-1+3)}_{0}e^{2t}+2=2\;\checkmark$$

**Doğrulama 3 — başlangıç koşulları.** $x(0)=2+2-1=3$ &#10003;, &nbsp;$y(0)=1-1=0$ &#10003;
[/CEVAP]

[SORU] **4.** &nbsp; $x'-2x-3y=0$, &nbsp; $y'+x+2y=t$, &nbsp; $x(0)=-1,\;y(0)=0$
[CEVAP]
**Adım 1 — Dönüştür ve düzenle.**

$$(s-2)X-3Y=-1,\qquad X+(s+2)Y=\frac{1}{s^{2}}$$

**Adım 2 — Determinant.** Bu, sistemin karakteristik polinomudur:

$$\Delta=(s-2)(s+2)-(-3)(1)=s^{2}-4+3=s^{2}-1$$

**Adım 3 — Cramer ile $X$.**

$$X=\frac{1}{\Delta}\begin{vmatrix}-1 & -3\\[2pt] \dfrac{1}{s^{2}} & s+2\end{vmatrix}=\frac{-(s+2)+\dfrac{3}{s^{2}}}{s^{2}-1}=\frac{-s^{3}-2s^{2}+3}{s^{2}\left(s^{2}-1\right)}$$

Payı çarpanlarına ayıralım; $s=1$ kök olduğundan $(s-1)$ bölüyor:

$$-\left(s^{3}+2s^{2}-3\right)=-(s-1)\left(s^{2}+3s+3\right)$$

==$(s-1)$ sadeleşiyor:==

$$X=\frac{-\left(s^{2}+3s+3\right)}{s^{2}(s+1)}=-\left[\frac{3}{s^{2}}+\frac{1}{s+1}\right]\;\Longrightarrow\;x(t)=-3t-e^{-t}$$

(Kısmi kesirlerde $\tfrac{1}{s}$ katsayısı sıfır çıkar; ==$x$'te sabit terim yok.==)

**Adım 4 — Cramer ile $Y$.**

$$Y=\frac{1}{\Delta}\begin{vmatrix}s-2 & -1\\[2pt] 1 & \dfrac{1}{s^{2}}\end{vmatrix}=\frac{\dfrac{s-2}{s^{2}}+1}{s^{2}-1}=\frac{s^{2}+s-2}{s^{2}\left(s^{2}-1\right)}$$

$s^{2}+s-2=(s+2)(s-1)$, yine $(s-1)$ sadeleşiyor:

$$Y=\frac{s+2}{s^{2}(s+1)}=-\frac{1}{s}+\frac{2}{s^{2}}+\frac{1}{s+1}\;\Longrightarrow\;y(t)=2t-1+e^{-t}$$

$$\boxed{\;x(t)=-3t-e^{-t},\qquad y(t)=2t-1+e^{-t}\;}$$

**Doğrulama 1 — birinci denklem.** $x'=-3+e^{-t}$:

$$x'-2x-3y=\underbrace{(-3+3)}_{0}+\underbrace{(6-6)}_{0}t+\underbrace{(1+2-3)}_{0}e^{-t}=0\;\checkmark$$

**Doğrulama 2 — ikinci denklem (bağımsız sınav).** $y'=2-e^{-t}$:

$$y'+x+2y=\underbrace{(2-2)}_{0}+\underbrace{(-3+4)}_{1}t+\underbrace{(-1-1+2)}_{0}e^{-t}=t\;\checkmark$$

**Doğrulama 3 — başlangıç koşulları.** $x(0)=-1$ &#10003;, &nbsp;$y(0)=-1+1=0$ &#10003;

[KUTU]
**$(s-1)$'in iki kez sadeleşmesi tesadüf değil.** Determinant $s^{2}-1=(s-1)(s+1)$ idi, ama çözümde $e^{t}$ hiç görünmüyor. Sebep: başlangıç koşulları ve zorlama, ==$s=1$ kutbunu tam olarak iptal edecek biçimde denk geldi.==

**Pratik sonuç:** determinantın kökleri çözümde ==hangi biçimlerin görünebileceğini== söyler, hangilerinin mutlaka görüneceğini değil. Katsayısı sıfır çıkabilir. Cevabınızda determinant kökünün karşılığı yoksa hemen "hata yaptım" diye düşünmeyin — sadeleşmeyi kontrol edin.
[/KUTU]
[/CEVAP]

[SORU] **6.** &nbsp; $x'+x+y=5e^{2t}$, &nbsp; $y'-5x-y=-3e^{2t}$, &nbsp; $x(0)=3,\;y(0)=2$
[CEVAP]
**Adım 1 — Dönüştür.** Sağ tarafları ve başlangıç koşullarını tek kesirde toplayalım:

$$(s+1)X+Y=\frac{5}{s-2}+3=\frac{3s-1}{s-2}\;\equiv P$$

$$-5X+(s-1)Y=\frac{-3}{s-2}+2=\frac{2s-7}{s-2}\;\equiv Q$$

**Adım 2 — Determinant.**

$$\Delta=(s+1)(s-1)-(1)(-5)=s^{2}-1+5=s^{2}+4$$

==Kökler $\pm 2i$== — yani çözümde $\cos 2t$ ve $\sin 2t$ bekliyoruz, üstel değil. Zorlamadan gelen $e^{2t}$ ise ayrıca duracak.

**Adım 3 — $X$.**

$$X=\frac{P(s-1)-Q}{s^{2}+4}=\frac{(3s-1)(s-1)-(2s-7)}{(s-2)\left(s^{2}+4\right)}=\frac{3s^{2}-6s+8}{(s-2)\left(s^{2}+4\right)}$$

Kısmi kesirler: &nbsp; $s=2$: &nbsp; $A=\dfrac{12-12+8}{8}=1$

$$3s^{2}-6s+8=\left(s^{2}+4\right)+(Bs+C)(s-2)$$

$s^{2}$: &nbsp; $3=1+B\Rightarrow B=2$ &nbsp;&nbsp;&nbsp; $s^{0}$: &nbsp; $8=4-2C\Rightarrow C=-2$

**Kontrol** ($s^{1}$): &nbsp; $-6=-2B+C=-4-2=-6$ &#10003;

$$X=\frac{1}{s-2}+\frac{2s}{s^{2}+4}-\frac{1}{2}\cdot\frac{2}{s^{2}+4}\;\Longrightarrow\;x(t)=e^{2t}+2\cos 2t-\sin 2t$$

**Adım 4 — $Y$.**

$$Y=\frac{(s+1)Q+5P}{s^{2}+4}=\frac{(s+1)(2s-7)+5(3s-1)}{(s-2)\left(s^{2}+4\right)}=\frac{2s^{2}+10s-12}{(s-2)\left(s^{2}+4\right)}$$

$s=2$: &nbsp; $A=\dfrac{8+20-12}{8}=2$. &nbsp;$2s^{2}+10s-12=2\left(s^{2}+4\right)+(Bs+C)(s-2)$:

$s^{2}$: &nbsp; $2=2+B\Rightarrow B=0$ &nbsp;&nbsp;&nbsp; $s^{0}$: &nbsp; $-12=8-2C\Rightarrow C=10$

$$Y=\frac{2}{s-2}+5\cdot\frac{2}{s^{2}+4}\;\Longrightarrow\;y(t)=2e^{2t}+5\sin 2t$$

$$\boxed{\;x(t)=e^{2t}+2\cos 2t-\sin 2t,\qquad y(t)=2e^{2t}+5\sin 2t\;}$$

**Doğrulama 1 — birinci denklem.** $x'=2e^{2t}-4\sin 2t-2\cos 2t$:

<div class="tablo-sar">
<table>
<tr><th>Terim</th><th>$x'$</th><th>$x$</th><th>$y$</th><th>Toplam</th></tr>
<tr><td>$e^{2t}$</td><td>$2$</td><td>$1$</td><td>$2$</td><td>$\mathbf{5}$</td></tr>
<tr><td>$\cos 2t$</td><td>$-2$</td><td>$2$</td><td>$0$</td><td>$0$</td></tr>
<tr><td>$\sin 2t$</td><td>$-4$</td><td>$-1$</td><td>$5$</td><td>$0$</td></tr>
</table>
</div>

$$x'+x+y=5e^{2t}\;\checkmark$$

**Doğrulama 2 — ikinci denklem (bağımsız sınav).** $y'=4e^{2t}+10\cos 2t$:

<div class="tablo-sar">
<table>
<tr><th>Terim</th><th>$y'$</th><th>$-5x$</th><th>$-y$</th><th>Toplam</th></tr>
<tr><td>$e^{2t}$</td><td>$4$</td><td>$-5$</td><td>$-2$</td><td>$\mathbf{-3}$</td></tr>
<tr><td>$\cos 2t$</td><td>$10$</td><td>$-10$</td><td>$0$</td><td>$0$</td></tr>
<tr><td>$\sin 2t$</td><td>$0$</td><td>$5$</td><td>$-5$</td><td>$0$</td></tr>
</table>
</div>

$$y'-5x-y=-3e^{2t}\;\checkmark$$

**Doğrulama 3 — başlangıç koşulları.** $x(0)=1+2=3$ &#10003;, &nbsp;$y(0)=2$ &#10003;

[KUTU]
**Katsayı tablosu kurun.** Sistem çözümlerinde doğrulama, terimleri türüne göre sütunlara ayırıp ==her satırın toplamına bakmaktan== ibarettir. Yukarıdaki iki tablo bunu gösteriyor: zorlamanın olduğu satır zorlamanın katsayısını, diğer bütün satırlar sıfır vermeli.

Bu yöntem elle hesapta ==hatanın yerini de söyler:== hangi satır tutmuyorsa hata o terimin katsayısındadır, bütün çözümü baştan yapmanız gerekmez.
[/KUTU]
[/CEVAP]

[SORU] **8.** &nbsp; $2x'+y'+x+5y=4t$, &nbsp; $x'+y'+2x+2y=2$, &nbsp; $x(0)=3,\;y(0)=-4$
[CEVAP]
**Adım 1 — Dönüştür.** Her iki denklemde de hem $x'$ hem $y'$ var; başlangıç koşulları ikisinden birden gelir.

$$2(sX-3)+(sY+4)+X+5Y=\frac{4}{s^{2}}\;\Longrightarrow\;(2s+1)X+(s+5)Y=\frac{4}{s^{2}}+2\;\equiv P$$

$$(sX-3)+(sY+4)+2X+2Y=\frac{2}{s}\;\Longrightarrow\;(s+2)X+(s+2)Y=\frac{2}{s}-1\;\equiv Q$$

**Adım 2 — Determinant.** ==İkinci denklemde $X$ ve $Y$ katsayıları aynı olduğu için $(s+2)$ ortak çarpan olarak çıkıyor:==

$$\Delta=(2s+1)(s+2)-(s+5)(s+2)=(s+2)\Big[(2s+1)-(s+5)\Big]=(s+2)(s-4)$$

Kökler $s=-2$ ve $s=4$; çözümde $e^{-2t}$ ve $e^{4t}$ bekliyoruz. Zorlamadan da $\tfrac{1}{s^{2}}$ üzerinden polinom gelecek.

**Adım 3 — $X$.** $P=\dfrac{2s^{2}+4}{s^{2}}$, &nbsp;$Q=\dfrac{2-s}{s}$ yazıp Cramer uygulayalım:

$$X=\frac{P(s+2)-Q(s+5)}{(s+2)(s-4)}=\frac{\left(2s^{2}+4\right)(s+2)-s(2-s)(s+5)}{s^{2}(s+2)(s-4)}$$

Payı açalım: &nbsp;$\left(2s^{2}+4\right)(s+2)=2s^{3}+4s^{2}+4s+8$ &nbsp;ve&nbsp; $s(2-s)(s+5)=-s^{3}-3s^{2}+10s$

$$X=\frac{3s^{3}+7s^{2}-6s+8}{s^{2}(s+2)(s-4)}$$

**Adım 4 — Kısmi kesirler.** Kapatma yöntemiyle:

$s=0$ (için $\tfrac{1}{s^{2}}$ katsayısı): &nbsp; $\dfrac{8}{(2)(-4)}=-1$

$s=-2$: &nbsp; $\dfrac{-24+28+12+8}{4\cdot(-6)}=\dfrac{24}{-24}=-1$ &nbsp;&nbsp;&nbsp; $s=4$: &nbsp; $\dfrac{192+112-24+8}{16\cdot 6}=\dfrac{288}{96}=3$

$\tfrac{1}{s}$ katsayısı için $s^{3}$ terimlerini karşılaştıralım: $3=A+(-1)+3\Rightarrow A=1$.

$$X=\frac{1}{s}-\frac{1}{s^{2}}-\frac{1}{s+2}+\frac{3}{s-4}\;\Longrightarrow\;x(t)=1-t-e^{-2t}+3e^{4t}$$

**Adım 5 — $Y$.** Aynı yolla:

$$Y=\frac{(2s+1)Q-(s+2)P}{(s+2)(s-4)}=\frac{-4s^{3}-s^{2}-2s-8}{s^{2}(s+2)(s-4)}$$

$s=0$: $\dfrac{-8}{-8}=1$; &nbsp;$s=-2$: $\dfrac{24}{-24}=-1$; &nbsp;$s=4$: $\dfrac{-288}{96}=-3$; &nbsp;$s^{3}$'ten $-4=A-1-3\Rightarrow A=0$

$$Y=\frac{1}{s^{2}}-\frac{1}{s+2}-\frac{3}{s-4}\;\Longrightarrow\;y(t)=t-e^{-2t}-3e^{4t}$$

$$\boxed{\;x(t)=1-t-e^{-2t}+3e^{4t},\qquad y(t)=t-e^{-2t}-3e^{4t}\;}$$

**Doğrulama 1 — birinci denklem.** $x'=-1+2e^{-2t}+12e^{4t}$, &nbsp;$y'=1+2e^{-2t}-12e^{4t}$:

<div class="tablo-sar">
<table>
<tr><th>Terim</th><th>$2x'$</th><th>$y'$</th><th>$x$</th><th>$5y$</th><th>Toplam</th></tr>
<tr><td>sabit</td><td>$-2$</td><td>$1$</td><td>$1$</td><td>$0$</td><td>$0$</td></tr>
<tr><td>$t$</td><td>$0$</td><td>$0$</td><td>$-1$</td><td>$5$</td><td>$\mathbf{4}$</td></tr>
<tr><td>$e^{-2t}$</td><td>$4$</td><td>$2$</td><td>$-1$</td><td>$-5$</td><td>$0$</td></tr>
<tr><td>$e^{4t}$</td><td>$24$</td><td>$-12$</td><td>$3$</td><td>$-15$</td><td>$0$</td></tr>
</table>
</div>

$$2x'+y'+x+5y=4t\;\checkmark$$

**Doğrulama 2 — ikinci denklem (bağımsız sınav).**

<div class="tablo-sar">
<table>
<tr><th>Terim</th><th>$x'$</th><th>$y'$</th><th>$2x$</th><th>$2y$</th><th>Toplam</th></tr>
<tr><td>sabit</td><td>$-1$</td><td>$1$</td><td>$2$</td><td>$0$</td><td>$\mathbf{2}$</td></tr>
<tr><td>$t$</td><td>$0$</td><td>$0$</td><td>$-2$</td><td>$2$</td><td>$0$</td></tr>
<tr><td>$e^{-2t}$</td><td>$2$</td><td>$2$</td><td>$-2$</td><td>$-2$</td><td>$0$</td></tr>
<tr><td>$e^{4t}$</td><td>$12$</td><td>$-12$</td><td>$6$</td><td>$-6$</td><td>$0$</td></tr>
</table>
</div>

$$x'+y'+2x+2y=2\;\checkmark$$

**Doğrulama 3 — başlangıç koşulları.** $x(0)=1-0-1+3=3$ &#10003;, &nbsp;$y(0)=0-1-3=-4$ &#10003;

[KUTU]
**$x$ ile $y$ neredeyse aynı.** İkisinin üstel kısmı ($-e^{-2t}$ ve $\mp 3e^{4t}$) neredeyse örtüşüyor; fark yalnız polinom kısmında ve $e^{4t}$'nin işaretinde.

Sebebi 2. denklemde: $(s+2)X+(s+2)Y$ yazılabildiği için o denklem aslında ==yalnız $x+y$ toplamını kısıtlıyor.== Nitekim

$$x+y=\left(1-t-e^{-2t}+3e^{4t}\right)+\left(t-e^{-2t}-3e^{4t}\right)=1-2e^{-2t}$$

içinde $e^{4t}$ ve $t$ hiç yok. ==İki denklemli bir sistemde böyle bir yapı görürseniz, önce toplamı (ya da farkı) çözmek işi kısaltır.==
[/KUTU]
[/CEVAP]

[SORU] **10.** &nbsp; $x''-3x'+y'+2x-y=0$, &nbsp; $x'+y'-2x+y=0$, &nbsp; $x(0)=0,\;y(0)=-1,\;x'(0)=0$
[CEVAP]
**Adım 1 — İkinci mertebeden türevi dönüştür.** $x(0)=x'(0)=0$ olduğu için sadeleşiyor:

$$\mathcal{L}\left\{x''\right\}=s^{2}X-s\,x(0)-x'(0)=s^{2}X,\qquad \mathcal{L}\left\{x'\right\}=sX,\qquad \mathcal{L}\left\{y'\right\}=sY+1$$

**Adım 2 — İki denklemi kur.**

$$s^{2}X-3sX+(sY+1)+2X-Y=0\;\Longrightarrow\;\left(s^{2}-3s+2\right)X+(s-1)Y=-1$$

$$sX+(sY+1)-2X+Y=0\;\Longrightarrow\;(s-2)X+(s+1)Y=-1$$

$s^{2}-3s+2=(s-1)(s-2)$ olduğuna dikkat edin.

**Adım 3 — Determinant.** ==$(s-1)(s-2)$ ortak çarpan olarak çıkıyor:==

$$\Delta=(s-1)(s-2)(s+1)-(s-1)(s-2)=(s-1)(s-2)\Big[(s+1)-1\Big]=s(s-1)(s-2)$$

**Derecesi üç** — üç bağımsız biçim bekliyoruz: sabit ($s$ kökünden), $e^{t}$, $e^{2t}$.

**Adım 4 — $X$.**

$$X=\frac{1}{\Delta}\begin{vmatrix}-1 & s-1\\ -1 & s+1\end{vmatrix}=\frac{-(s+1)+(s-1)}{s(s-1)(s-2)}=\frac{-2}{s(s-1)(s-2)}$$

Kapatma yöntemiyle: &nbsp;$s=0\Rightarrow\tfrac{1}{2}$, &nbsp;$s=1\Rightarrow-1$, &nbsp;$s=2\Rightarrow\tfrac{1}{2}$

$$x(t)=-2\left[\frac{1}{2}-e^{t}+\frac{1}{2}e^{2t}\right]=-1+2e^{t}-e^{2t}$$

**Adım 5 — $Y$.**

$$Y=\frac{1}{\Delta}\begin{vmatrix}(s-1)(s-2) & -1\\ s-2 & -1\end{vmatrix}=\frac{-(s-1)(s-2)+(s-2)}{s(s-1)(s-2)}$$

Payda $(s-2)$ ortak çarpan; köşeli parantez $-(s-1)+1=2-s=-(s-2)$ olur:

$$Y=\frac{-(s-2)^{2}}{s(s-1)(s-2)}=\frac{-(s-2)}{s(s-1)}=-\frac{2}{s}+\frac{1}{s-1}$$

$$y(t)=e^{t}-2$$

$$\boxed{\;x(t)=-1+2e^{t}-e^{2t},\qquad y(t)=e^{t}-2\;}$$

**Doğrulama 1 — birinci denklem.** $x'=2e^{t}-2e^{2t}$, &nbsp;$x''=2e^{t}-4e^{2t}$, &nbsp;$y'=e^{t}$:

<div class="tablo-sar">
<table>
<tr><th>Terim</th><th>$x''$</th><th>$-3x'$</th><th>$y'$</th><th>$2x$</th><th>$-y$</th><th>Toplam</th></tr>
<tr><td>sabit</td><td>$0$</td><td>$0$</td><td>$0$</td><td>$-2$</td><td>$2$</td><td>$0$</td></tr>
<tr><td>$e^{t}$</td><td>$2$</td><td>$-6$</td><td>$1$</td><td>$4$</td><td>$-1$</td><td>$0$</td></tr>
<tr><td>$e^{2t}$</td><td>$-4$</td><td>$6$</td><td>$0$</td><td>$-2$</td><td>$0$</td><td>$0$</td></tr>
</table>
</div>

**Doğrulama 2 — ikinci denklem (bağımsız sınav).**

<div class="tablo-sar">
<table>
<tr><th>Terim</th><th>$x'$</th><th>$y'$</th><th>$-2x$</th><th>$y$</th><th>Toplam</th></tr>
<tr><td>sabit</td><td>$0$</td><td>$0$</td><td>$2$</td><td>$-2$</td><td>$0$</td></tr>
<tr><td>$e^{t}$</td><td>$2$</td><td>$1$</td><td>$-4$</td><td>$1$</td><td>$0$</td></tr>
<tr><td>$e^{2t}$</td><td>$-2$</td><td>$0$</td><td>$2$</td><td>$0$</td><td>$0$</td></tr>
</table>
</div>

**Doğrulama 3 — üç başlangıç koşulu.** $x(0)=-1+2-1=0$ &#10003;, &nbsp;$y(0)=1-2=-1$ &#10003;, &nbsp;$x'(0)=2-2=0$ &#10003;

[KUTU]
**Determinantın derecesi neden üç, ama $y$'de yalnız iki biçim var?**

$\Delta=s(s-1)(s-2)$ derecesi üç, yani sistemde ==toplam üç bağımsız sabit== vardır — nitekim üç başlangıç koşulu verilmişti, sayılar tutuyor.

$x$'te üç biçim de görünüyor ($-1$, $e^{t}$, $e^{2t}$). $y$'de ise $e^{2t}$ yok, çünkü $Y$'nin payında $(s-2)$ ==sadeleşti.== Bu bir hata değil: determinantın kökleri hangi biçimlerin ==görünebileceğini== söyler, her bileşende görüneceğini değil.

**Genel kural:** bir bileşende eksik görünen biçim, ==öteki bileşende mutlaka vardır.== $x$ ile $y$ birlikte üç biçimin hepsini taşıyor.
[/KUTU]
[/CEVAP]

[KUTU]
**Setin tamamı bitti** — ve bununla birlikte ==Bölüm 4'teki bütün egzersiz setleri tamamlandı.== 10 sorunun 10'u çözülü: tek numaralılar kitabın cevap anahtarıyla, çift numaralılar ==her iki denkleme birden geri koyma ve başlangıç koşulları== ile doğrulanmıştır.

**Sistemlerde beş adımlık şablon:**

1. **Her denklemi ayrı ayrı dönüştür**, başlangıç koşulları anında girsin.
2. **$X$ ve $Y$ katsayılarını düzenle**, sağ tarafları tek kesirde topla.
3. **Determinantı hesapla** — bu sistemin karakteristik polinomudur; ==kökleri çözümdeki biçimleri, derecesi bağımsız sabit sayısını verir.==
4. **Cramer ile $X$ ve $Y$'yi bul**, sadeleşmeleri kaçırma.
5. **Katsayı tablosu kurup her iki denklemi de sına.**

Son adımı atlamayın: ==çözerken kullandığınız denklem tek başına kanıt değildir.==
[/KUTU]

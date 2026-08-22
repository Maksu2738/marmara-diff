---
id: tekrar-bdp
menu: 4.6 Bölüm Tekrarı — Başlangıç Değer Problemleri
tip: sorular
baslik: 4.6 &nbsp;Bölüm Tekrar Soruları — Başlangıç Değer Problemleri
---

Laplace dönüşümüyle çözünüz.

[SORU] **25.** &nbsp; $y''-6y'-7y=0,\qquad y(0)=7,\;\; y'(0)=9$
[CEVAP]
$$s^{2}Y-7s-9-6(sY-7)-7Y=0\;\Longrightarrow\;\left(s^{2}-6s-7\right)Y=7s-33$$

$s^{2}-6s-7=(s-7)(s+1)$:

$$7s-33=A(s+1)+B(s-7)$$

$s=7$: $16=8A\Rightarrow A=2$. &nbsp;&nbsp; $s=-1$: $-40=-8B\Rightarrow B=5$.

$$\boxed{\;y=2e^{7t}+5e^{-t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **26.** &nbsp; $y''-4y=16\cos 2t,\qquad y(0)=0,\;\; y'(0)=0$
[CEVAP]
Başlangıç koşulları sıfır olduğundan sol taraf sade:

$$\left(s^{2}-4\right)Y=\frac{16s}{s^{2}+4}\;\Longrightarrow\;Y=\frac{16s}{\left(s^{2}-4\right)\left(s^{2}+4\right)}$$

==Paydayı $s^{2}$ cinsinden kısmi kesire ayırmak en kısa yol:==

$$\frac{1}{\left(s^{2}-4\right)\left(s^{2}+4\right)}=\frac{1}{8}\left[\frac{1}{s^{2}-4}-\frac{1}{s^{2}+4}\right]$$

$$Y=16s\cdot\frac{1}{8}\left[\frac{1}{s^{2}-4}-\frac{1}{s^{2}+4}\right]=\frac{2s}{s^{2}-4}-\frac{2s}{s^{2}+4}$$

6 numara (hiperbolik) ve 4 numara:

$$y=2\cosh 2t-2\cos 2t$$

$\cosh 2t=\dfrac{e^{2t}+e^{-2t}}{2}$ yazarsak:

$$\boxed{\;y=e^{2t}+e^{-2t}-2\cos 2t\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **27.** &nbsp; $y''-y'-2y=20\sin 2t,\qquad y(0)=0,\;\; y'(0)=-2$
[CEVAP]
$y(0)=0$ ama $y'(0)=-2$ olduğundan $\mathcal{L}\{y''\}=s^{2}Y+2$:

$$s^{2}Y+2-sY-2Y=\frac{40}{s^{2}+4}$$

$$(s-2)(s+1)Y=\frac{-2\left(s^{2}+4\right)+40}{s^{2}+4}=\frac{-2s^{2}+32}{s^{2}+4}$$

$$Y=\frac{-2\left(s^{2}-16\right)}{(s-2)(s+1)\left(s^{2}+4\right)}$$

Kısmi kesirlere ayrılıp Tablo 9.1'in 2, 4 ve 3 numaralı girdileriyle geri çevrilir:

$$\boxed{\;y=e^{2t}-2e^{-t}+\cos 2t-3\sin 2t\;}$$

**Doğrulama.** $y(0)=1-2+1=0\;\checkmark$; &nbsp; $y'=2e^{2t}+2e^{-t}-2\sin 2t-6\cos 2t\Rightarrow y'(0)=2+2-6=-2\;\checkmark$

Denklemde katsayı katsayı: $e^{2t}$: $4-2-2=0$; &nbsp; $e^{-t}$: $-2-2+4=0$; &nbsp; $\cos 2t$: $-4+6-2=0$; &nbsp; $\sin 2t$: $12+2+6=20\;\checkmark$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **28.** &nbsp; $y''+4y=6\sin 4t-3\cos 4t,\qquad y(0)=1,\;\; y'(0)=-2$
[CEVAP]
$$s^{2}Y-s+2+4Y=\frac{24}{s^{2}+16}-\frac{3s}{s^{2}+16}$$

$$\left(s^{2}+4\right)Y=s-2+\frac{24-3s}{s^{2}+16}$$

==Zorlama frekansı ($4$) ile doğal frekans ($2$) farklı olduğundan rezonans yok==; çözüm iki ayrı frekansta salınım içerir.

$$\boxed{\;y=\frac{3}{4}\cos 2t+\frac{1}{4}\cos 4t-\frac{1}{2}\sin 4t\;}$$

**Doğrulama.** $y(0)=\frac34+\frac14=1\;\checkmark$; &nbsp; $y'=-\frac32\sin 2t-\sin 4t-2\cos 4t\Rightarrow y'(0)=-2\;\checkmark$

$y''=-3\cos 2t-4\cos 4t+8\sin 4t$ olduğundan

$$y''+4y=(-3+3)\cos 2t+(-4+1)\cos 4t+(8-2)\sin 4t=-3\cos 4t+6\sin 4t\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **29.** &nbsp; $y''+6y'+13y=5e^{-2t},\qquad y(0)=3,\;\; y'(0)=2$
[CEVAP]
$$\left(s^{2}+6s+13\right)Y-3s-2-18=\frac{5}{s+2}$$

$s^{2}+6s+13=(s+3)^{2}+4$ — ==tamkare, cevapta $e^{-3t}\cos 2t$ ve $e^{-3t}\sin 2t$ bekleriz.==

$$\boxed{\;y=e^{-3t}\left(2\cos 2t+5\sin 2t\right)+e^{-2t}\;}$$

**Doğrulama.** $y(0)=2+1=3\;\checkmark$

$$y'=-3e^{-3t}(2\cos 2t+5\sin 2t)+e^{-3t}(-4\sin 2t+10\cos 2t)-2e^{-2t}$$

$$y'(0)=-6+10-2=2\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **30.** &nbsp; $y''+y'-2y=6e^{t}+8,\qquad y(0)=-3,\;\; y'(0)=0$
[CEVAP]
$s^{2}+s-2=(s-1)(s+2)$. ==Zorlamadaki $6e^{t}$, paydadaki $(s-1)$ ile çakışıyor== — bu yüzden çözümde $te^{t}$ terimi çıkacak.

$$\boxed{\;y=e^{-2t}+2te^{t}-4\;}$$

**Doğrulama.** $y(0)=1+0-4=-3\;\checkmark$; &nbsp; $y'=-2e^{-2t}+2e^{t}+2te^{t}\Rightarrow y'(0)=-2+2=0\;\checkmark$

$y''=4e^{-2t}+4e^{t}+2te^{t}$ ile:

$$e^{-2t}:\;4-2-2=0;\qquad e^{t}:\;4+2=6;\qquad te^{t}:\;2+2-4=0;\qquad \text{sabit}:\;+8$$

$$y''+y'-2y=6e^{t}+8\;\checkmark$$

[KUTU]
**$te^{t}$ nereden geldi?** Zorlamanın dönüşümü $\frac{6}{s-1}$, sol taraftaki operatörün paydası ise $(s-1)(s+2)$. İkisi çarpılınca $(s-1)^{2}$ oluşuyor ve tekrarlı çarpan $te^{t}$ üretiyor. ==Klasik yöntemdeki "rezonans durumu"nun Laplace'taki karşılığı budur.==
[/KUTU]

*Kitabın cevabıyla uyuşuyor.*

[SORU] **31.** &nbsp; $2y''+y'=5\cos t,\qquad y(0)=3,\;\; y'(0)=0$
[CEVAP]
==Dikkat: $y$ terimi yok==, dolayısıyla payda $2s^{2}+s=s(2s+1)$ olur ve bir kökü sıfırdır. Bu, çözümde bir **sabit** terim doğurur.

$$\boxed{\;y=3+2e^{-t/2}+\sin t-2\cos t\;}$$

**Doğrulama.** $y(0)=3+2-2=3\;\checkmark$; &nbsp; $y'=-e^{-t/2}+\cos t+2\sin t\Rightarrow y'(0)=-1+1=0\;\checkmark$

$y''=\frac12 e^{-t/2}-\sin t+2\cos t$ ile:

$$2y''+y'=e^{-t/2}-2\sin t+4\cos t-e^{-t/2}+\cos t+2\sin t=5\cos t\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **32.** &nbsp; $y'-3y=h(t)$, &nbsp; $h(t)=\begin{cases}0, & 0<t<5\\ 2, & t>5\end{cases}$, &nbsp; $y(0)=4$
[CEVAP]
Zorlama **sonradan başlıyor**, yani $h(t)=2u_{5}(t)$ ve $\mathcal{L}\{h\}=\dfrac{2e^{-5s}}{s}$.

$$(s-3)Y=4+\frac{2e^{-5s}}{s}\;\Longrightarrow\;Y=\frac{4}{s-3}+e^{-5s}\underbrace{\frac{2}{s(s-3)}}_{F(s)}$$

$$2=A(s-3)+Bs;\qquad s=0:\;A=-\tfrac{2}{3},\qquad s=3:\;B=\tfrac{2}{3}$$

$$f(t)=-\frac{2}{3}+\frac{2}{3}e^{3t}$$

$$y=4e^{3t}+u_{5}(t)\,f(t-5)$$

$$\boxed{\;y=\begin{cases}4e^{3t}, & 0<t<5\\ 4e^{3t}-\dfrac{2}{3}+\dfrac{2}{3}e^{3t-15}, & t>5\end{cases}\;}$$

==$e^{3(t-5)}=e^{3t-15}$ olduğuna dikkat;== öteleme üstel içinde de yapılmalıdır.

*Kitabın cevabıyla uyuşuyor.*

[SORU] **33.** &nbsp; $y''+2y'+5y=h(t)$, &nbsp; $h(t)=\begin{cases}0, & 0<t<2\pi\\ 10, & t>2\pi\end{cases}$, &nbsp; $y(0)=0,\;y'(0)=4$
[CEVAP]
$$\left(s^{2}+2s+5\right)Y-4=\frac{10e^{-2\pi s}}{s}$$

$s^{2}+2s+5=(s+1)^{2}+4$:

$$Y=\underbrace{\frac{4}{(s+1)^{2}+4}}_{\to\,2e^{-t}\sin 2t}+e^{-2\pi s}\cdot\frac{10}{s\left[(s+1)^{2}+4\right]}$$

$$\boxed{\;y=\begin{cases}2e^{-t}\sin 2t, & 0<t<2\pi\\ 2+\left(2-e^{2\pi}\right)e^{-t}\sin 2t-2e^{2\pi-t}\cos 2t, & t>2\pi\end{cases}\;}$$

**Süreklilik kontrolü** ($t=2\pi$'de iki ifade eşit olmalı):

Üstteki: $2e^{-2\pi}\sin 4\pi=0$

Alttaki: $2+\left(2-e^{2\pi}\right)e^{-2\pi}\underbrace{\sin 4\pi}_{0}-2\underbrace{e^{0}}_{1}\underbrace{\cos 4\pi}_{1}=2-2=0\;\checkmark$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **34.** &nbsp; $y''+5y'+6y=h(t)$, &nbsp; $h(t)=\begin{cases}12, & 0<t<2\\ 0, & t>2\end{cases}$, &nbsp; $y(0)=1,\;y'(0)=2$
[CEVAP]
$s^{2}+5s+6=(s+2)(s+3)$, &nbsp; $\mathcal{L}\{h\}=\dfrac{12\left(1-e^{-2s}\right)}{s}$

$$\boxed{\;y=\begin{cases}-e^{-2t}+2, & 0<t<2\\ \left(6e^{4}-1\right)e^{-2t}-4e^{6-3t}, & t>2\end{cases}\;}$$

**Doğrulama (ilk aralık).** $y(0)=-1+2=1\;\checkmark$; &nbsp; $y'=2e^{-2t}\Rightarrow y'(0)=2\;\checkmark$

$y''=-4e^{-2t}$ ile: $\;-4e^{-2t}+10e^{-2t}-6e^{-2t}+12=12\;\checkmark$

**Süreklilik kontrolü** ($t=2$):

Üstteki: $-e^{-4}+2$

Alttaki: $\left(6e^{4}-1\right)e^{-4}-4e^{6-6}=6-e^{-4}-4=2-e^{-4}\;\checkmark$

[KUTU]
**İlk aralıkta neden yalnızca $e^{-2t}$ var?** Karakteristik kökler $-2$ ve $-3$ olduğuna göre genel çözümde ikisi de beklenirdi. ==Başlangıç koşulları $e^{-3t}$ teriminin katsayısını sıfır yaptı.== İkinci aralıkta zorlama kesilince $e^{-3t}$ terimi ($e^{6-3t}$ biçiminde) ortaya çıkıyor — kesilme anı sistemi yeni bir duruma sokuyor.
[/KUTU]

*Kitabın cevabıyla uyuşuyor.*

---

[KUTU]
**Süreksiz zorlamalı sorularda değişmeyen denetim.** 32, 33 ve 34'te cevabın doğruluğunu ==süreklilikten== sınadık: $t=a$ noktasında iki ifadenin değeri eşit olmalı. Bu kontrol cevap anahtarından bağımsızdır ve neredeyse her hatayı yakalar; öteleme atlanmışsa ya da katsayı yanlışsa iki taraf tutmaz.

Daha da güçlü bir denetim için $y'$'nin de sürekli olduğunu kontrol edin — basamak zorlamada hem $y$ hem $y'$ süreklidir, yalnızca $y''$ sıçrar.
[/KUTU]

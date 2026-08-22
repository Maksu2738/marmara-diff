---
id: egzersizler-dd-cozumu
menu: 4.3 Egzersizler — Denklem Çözümü
tip: sorular
baslik: 4.3 &nbsp;Egzersizler — Laplace ile Başlangıç Değer Problemleri
---

Aşağıdaki başlangıç değer problemlerini Laplace dönüşümüyle çözünüz.

[SORU] **1.** &nbsp; $y'-y=e^{3t},\qquad y(0)=2$
[CEVAP]
$$sY-2-Y=\frac{1}{s-3}\;\Longrightarrow\;(s-1)Y=\frac{2(s-3)+1}{s-3}=\frac{2s-5}{s-3}$$

$$Y=\frac{2s-5}{(s-1)(s-3)},\qquad 2s-5=A(s-3)+B(s-1)$$

$s=1$: $-3=-2A\Rightarrow A=\frac{3}{2}$. &nbsp;&nbsp; $s=3$: $1=2B\Rightarrow B=\frac{1}{2}$.

$$\boxed{\;y=\frac{3e^{t}+e^{3t}}{2}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **3.** &nbsp; $y'+4y=6e^{-t},\qquad y(0)=5$
[CEVAP]
$$sY-5+4Y=\frac{6}{s+1}\;\Longrightarrow\;(s+4)Y=\frac{5(s+1)+6}{s+1}=\frac{5s+11}{s+1}$$

$$5s+11=A(s+1)+B(s+4)$$

$s=-4$: $-9=-3A\Rightarrow A=3$. &nbsp;&nbsp; $s=-1$: $6=3B\Rightarrow B=2$.

$$\boxed{\;y=2e^{-t}+3e^{-4t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **5.** &nbsp; $y''-5y'+6y=0,\qquad y(0)=1,\quad y'(0)=2$
[CEVAP]
$$s^{2}Y-s-2-5(sY-1)+6Y=0\;\Longrightarrow\;\left(s^{2}-5s+6\right)Y=s-3$$

$$Y=\frac{s-3}{(s-2)(s-3)}=\frac{1}{s-2}$$

==Pay ve payda sadeleşti==; kısmi kesire hiç gerek kalmadı.

$$\boxed{\;y=e^{2t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **7.** &nbsp; $y''-6y'+9y=0,\qquad y(0)=2,\quad y'(0)=9$
[CEVAP]
$$s^{2}Y-2s-9-6(sY-2)+9Y=0\;\Longrightarrow\;\left(s^{2}-6s+9\right)Y=2s-3$$

$$Y=\frac{2s-3}{(s-3)^{2}}$$

Payı öteleyelim: $2s-3=2(s-3)+3$.

$$Y=\frac{2}{s-3}+\frac{3}{(s-3)^{2}}$$

$$\boxed{\;y=(3t+2)e^{3t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **9.** &nbsp; $y''+4y=8,\qquad y(0)=0,\quad y'(0)=6$
[CEVAP]
$$s^{2}Y-6+4Y=\frac{8}{s}\;\Longrightarrow\;\left(s^{2}+4\right)Y=\frac{6s+8}{s}$$

$$Y=\frac{6s+8}{s\left(s^{2}+4\right)}=\frac{A}{s}+\frac{Bs+C}{s^{2}+4}$$

$s=0$: $8=4A\Rightarrow A=2$. &nbsp; $s^{2}$: $0=A+B\Rightarrow B=-2$. &nbsp; $s^{1}$: $6=C$.

$$Y=\frac{2}{s}-\frac{2s}{s^{2}+4}+3\cdot\frac{2}{s^{2}+4}$$

$$\boxed{\;y=2-2\cos 2t+3\sin 2t\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **11.** &nbsp; $y''+6y'+8y=16,\qquad y(0)=0,\quad y'(0)=10$
[CEVAP]
$$s^{2}Y-10+6sY+8Y=\frac{16}{s}\;\Longrightarrow\;(s+2)(s+4)Y=\frac{10s+16}{s}$$

$$Y=\frac{10s+16}{s(s+2)(s+4)}$$

$$10s+16=A(s+2)(s+4)+Bs(s+4)+Cs(s+2)$$

$s=0$: $16=8A\Rightarrow A=2$. &nbsp; $s=-2$: $-4=-4B\Rightarrow B=1$. &nbsp; $s=-4$: $-24=8C\Rightarrow C=-3$.

$$\boxed{\;y=e^{-2t}-3e^{-4t}+2\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **13.** &nbsp; $y^{\mathrm{iv}}-y=0,\qquad y(0)=0,\;\; y'(0)=1,\;\; y''(0)=1,\;\; y'''(0)=0$
[CEVAP]
Dördüncü türevin dönüşümü:

$$\mathcal{L}\{y^{\mathrm{iv}}\}=s^{4}Y-s^{3}y(0)-s^{2}y'(0)-s\,y''(0)-y'''(0)=s^{4}Y-s^{2}-s$$

$$\left(s^{4}-1\right)Y=s^{2}+s=s(s+1)$$

$s^{4}-1=(s-1)(s+1)\left(s^{2}+1\right)$ olduğundan ==$(s+1)$ sadeleşir:==

$$Y=\frac{s(s+1)}{(s-1)(s+1)\left(s^{2}+1\right)}=\frac{s}{(s-1)\left(s^{2}+1\right)}$$

$$s=A\left(s^{2}+1\right)+(Bs+C)(s-1)$$

$s=1$: $1=2A\Rightarrow A=\frac{1}{2}$. &nbsp; $s^{2}$: $0=A+B\Rightarrow B=-\frac{1}{2}$. &nbsp; $s^{0}$: $0=A-C\Rightarrow C=\frac{1}{2}$.

$$Y=\frac{1}{2}\cdot\frac{1}{s-1}-\frac{1}{2}\cdot\frac{s}{s^{2}+1}+\frac{1}{2}\cdot\frac{1}{s^{2}+1}$$

$$\boxed{\;y=\frac{1}{2}\left(e^{t}-\cos t+\sin t\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **15.** &nbsp; $y''-y'-2y=18e^{-t}\sin 3t,\qquad y(0)=0,\quad y'(0)=3$
[CEVAP]
Sağ taraf için öteleme özelliği (11 numara, $a=1$, $b=3$):

$$\mathcal{L}\left\{18e^{-t}\sin 3t\right\}=\frac{18\cdot 3}{(s+1)^{2}+9}=\frac{54}{(s+1)^{2}+9}$$

$$\left(s^{2}-s-2\right)Y-3=\frac{54}{(s+1)^{2}+9}$$

$s^{2}-s-2=(s-2)(s+1)$ olduğundan

$$Y=\frac{3}{(s-2)(s+1)}+\frac{54}{(s-2)(s+1)\left[(s+1)^{2}+9\right]}$$

Kısmi kesirlere ayrılıp Tablo 9.1'in 2, 11 ve 12 numaralı girdileriyle geri çevrilir:

$$\boxed{\;y=2e^{2t}-3e^{-t}-e^{-t}\sin 3t+e^{-t}\cos 3t\;}$$

**Doğrulama.** $y(0)=2-3-0+1=0\;\checkmark$

$$y'=4e^{2t}+3e^{-t}-2e^{-t}\sin 3t-4e^{-t}\cos 3t\;\Longrightarrow\;y'(0)=4+3-0-4=3\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **17.** &nbsp; $y''+7y'+10y=4te^{-3t},\qquad y(0)=0,\quad y'(0)=-1$
[CEVAP]
Sağ taraf için 8 numara ($n=1$, $a=-3$): $\;\mathcal{L}\left\{4te^{-3t}\right\}=\dfrac{4}{(s+3)^{2}}$

$$\left(s^{2}+7s+10\right)Y+1=\frac{4}{(s+3)^{2}}$$

$s^{2}+7s+10=(s+2)(s+5)$:

$$Y=\frac{-1}{(s+2)(s+5)}+\frac{4}{(s+2)(s+5)(s+3)^{2}}$$

$$\boxed{\;y=e^{-2t}-e^{-3t}-2te^{-3t}\;}$$

**Doğrulama.** $y(0)=1-1-0=0\;\checkmark$

$$y'=-2e^{-2t}+e^{-3t}+6te^{-3t}\;\Longrightarrow\;y'(0)=-2+1+0=-1\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **19.** &nbsp; $y''+3y'+2y=10\cos t,\qquad y(0)=0,\quad y'(0)=7$
[CEVAP]
$$\left(s^{2}+3s+2\right)Y-7=\frac{10s}{s^{2}+1}$$

$s^{2}+3s+2=(s+1)(s+2)$:

$$Y=\frac{7}{(s+1)(s+2)}+\frac{10s}{(s+1)(s+2)\left(s^{2}+1\right)}$$

$$\boxed{\;y=2e^{-t}-3e^{-2t}+\cos t+3\sin t\;}$$

**Doğrulama.** $y(0)=2-3+1+0=0\;\checkmark$

$$y'=-2e^{-t}+6e^{-2t}-\sin t+3\cos t\;\Longrightarrow\;y'(0)=-2+6-0+3=7\;\checkmark$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **21.** &nbsp; $y'''-5y''+7y'-3y=20\sin t,\qquad y(0)=0,\;\; y'(0)=0,\;\; y''(0)=-2$
[CEVAP]
[KUTU]
**Tarama notu.** Kaynak metinde ilk terim $y''$ olarak okundu; ==üç başlangıç koşulu verildiğine göre denklem üçüncü mertebeden olmalıdır==, yani $y'''$. Aşağıdaki çözüm bu düzeltmeyle yapılmıştır ve kitabın cevabıyla tutmaktadır.
[/KUTU]

Karakteristik polinom: $r^{3}-5r^{2}+7r-3$. $r=1$ kök ($1-5+7-3=0$), bölme yaparsak

$$r^{3}-5r^{2}+7r-3=(r-1)^{2}(r-3)$$

$$\left(s^{3}-5s^{2}+7s-3\right)Y+2=\frac{20}{s^{2}+1}$$

($y(0)=y'(0)=0$ olduğundan yalnızca $y''(0)=-2$ terimi kaldı.)

$$Y=\frac{-2}{(s-1)^{2}(s-3)}+\frac{20}{(s-1)^{2}(s-3)\left(s^{2}+1\right)}$$

$$\boxed{\;y=(3-4t)e^{t}+\sin t-3\cos t\;}$$

**Doğrulama — özel çözüm kısmı.** $y_{p}=\sin t-3\cos t$ için

$$y_{p}'=\cos t+3\sin t,\quad y_{p}''=-\sin t+3\cos t,\quad y_{p}'''=-\cos t-3\sin t$$

$$y_{p}'''-5y_{p}''+7y_{p}'-3y_{p}$$

$\cos t$ katsayıları: $-1-15+7+9=0$ &nbsp;&nbsp; $\sin t$ katsayıları: $-3+5+21-3=20$

$$=20\sin t\;\checkmark$$

**Başlangıç koşulları.** $y(0)=3-3=0\;\checkmark$; $\;y'=-e^{t}-4te^{t}+\cos t+3\sin t\Rightarrow y'(0)=-1+1=0\;\checkmark$; $\;y''=-5e^{t}-4te^{t}-\sin t+3\cos t\Rightarrow y''(0)=-5+3=-2\;\checkmark$

*Kitabın cevabıyla uyuşuyor.*

---

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**2.** &nbsp; $y'+y=2\sin t,\quad y(0)=-1$

**4.** &nbsp; $y'+2y=16t^{2},\quad y(0)=7$

**6.** &nbsp; $y''+y'-12y=0,\quad y(0)=4,\; y'(0)=-1$

**8.** &nbsp; $y''+2y'+5y=0,\quad y(0)=2,\; y'(0)=4$

**10.** &nbsp; $y''+9y=36e^{-3t},\quad y(0)=2,\; y'(0)=3$

**12.** &nbsp; $2y''+y'=5e^{2t}$

[KUTU]
**Kendi çözümünüzü nasıl denetlersiniz?** Cevap anahtarı olmasa da her çözüm **kendi içinde sınanabilir**: bulduğunuz $y$'yi denklemde yerine koyun ve başlangıç koşullarını kontrol edin. Yukarıdaki 15, 17, 19 ve 21'de tam olarak bunu yaptık. ==Bu denetim, cevap anahtarından bağımsız ve en az onun kadar güvenilirdir.==

**İpuçları.** 6 ve 8 homojendir, 5 ve 7 ile aynı yapıda. 8'de payda $s^{2}+2s+5=(s+1)^{2}+4$ tamkareye gider, cevapta $e^{-t}\sin 2t$ ve $e^{-t}\cos 2t$ beklenir. 4'te $\mathcal{L}\{16t^{2}\}=\frac{32}{s^{3}}$ olur (7 numaralı girdi, $n!=2$). 10'da sağ taraf $\frac{36}{s+3}$, payda $s^{2}+9$ ile birleşince 9 ve 19 gibi karışık yapı çıkar.
[/KUTU]

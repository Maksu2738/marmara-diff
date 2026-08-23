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

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu altı sorunun cevabı kitabın anahtarında yok.** Çözümler bize aittir. Doğrulama yolu her seferinde aynı ve ==cevap anahtarından bağımsız olarak en az onun kadar güvenilir==: bulunan $y$ hem **denkleme geri konuyor** hem de **başlangıç koşulları** sınanıyor. Bir çözüm bu iki testi geçiyorsa doğrudur.
[/KUTU]

[SORU] **2.** &nbsp; $y'+y=2\sin t$, &nbsp; $y(0)=-1$
[CEVAP]
**Adım 1 — Dönüşümü al.** $y(0)=-1$ olduğuna dikkat; $-y(0)=+1$ olur:

$$\left(sY+1\right)+Y=\frac{2}{s^{2}+1}$$

**Adım 2 — $Y$'yi yalnız bırak.**

$$(s+1)Y=\frac{2}{s^{2}+1}-1=\frac{2-\left(s^{2}+1\right)}{s^{2}+1}=\frac{1-s^{2}}{s^{2}+1}$$

**Adım 3 — Sadeleştir.** ==Kısmi kesirlere hiç gerek yok:== pay çarpanlanıyor ve $(s+1)$ götürüyor.

$$Y=\frac{1-s^{2}}{(s+1)\left(s^{2}+1\right)}=\frac{-(s-1)(s+1)}{(s+1)\left(s^{2}+1\right)}=\frac{1-s}{s^{2}+1}$$

$$Y=\frac{1}{s^{2}+1}-\frac{s}{s^{2}+1}$$

$$\boxed{\;y=\sin t-\cos t\;}$$

**Doğrulama.** $y(0)=0-1=-1\;\checkmark$

$y'=\cos t+\sin t$ olduğundan

$$y'+y=(\cos t+\sin t)+(\sin t-\cos t)=2\sin t\;\checkmark$$

[KUTU]
**Payın çarpanlanması tesadüf mü?** Değil. Zorlama $2\sin t$'nin frekansı, homojen çözümün sönüm hızıyla ==öyle denk gelmiş ki== geçici terim ($e^{-t}$) hiç doğmamış. Başlangıç koşulu $y(0)=-1$ tam olarak bunu sağlayan değer; başka bir değer verilseydi cevapta $ce^{-t}$ terimi de olurdu.

Sınavda böyle bir sadeleşme görürseniz ==şüphelenmeyin, devam edin== — soru bilerek öyle kurulmuş olabilir.
[/KUTU]
[/CEVAP]

[SORU] **4.** &nbsp; $y'+2y=16t^{2}$, &nbsp; $y(0)=7$
[CEVAP]
**Adım 1 — Dönüşümü al.** $\mathcal{L}\{16t^{2}\}=16\cdot\dfrac{2!}{s^{3}}=\dfrac{32}{s^{3}}$:

$$(sY-7)+2Y=\frac{32}{s^{3}}\;\Longrightarrow\;(s+2)Y=\frac{32}{s^{3}}+7$$

$$Y=\frac{32}{s^{3}(s+2)}+\frac{7}{s+2}$$

**Adım 2 — Tekrarlı çarpan için dört terimli açılım.**

$$\frac{32}{s^{3}(s+2)}=\frac{A}{s}+\frac{B}{s^{2}}+\frac{C}{s^{3}}+\frac{D}{s+2}$$

$$32=As^{2}(s+2)+Bs(s+2)+C(s+2)+Ds^{3}$$

$s=0$: &nbsp; $32=2C\Rightarrow C=16$

$s=-2$: &nbsp; $32=-8D\Rightarrow D=-4$

$s^{3}$ katsayısı: &nbsp; $A+D=0\Rightarrow A=4$

$s^{2}$ katsayısı: &nbsp; $2A+B=0\Rightarrow B=-8$

**Ara kontrol.** $s^{1}$ katsayısı $2B+C=-16+16=0$ olmalı (solda $s$'li terim yok) &#10003;

**Adım 3 — Topla ve geri oku.** $\dfrac{-4}{s+2}$ ile $\dfrac{7}{s+2}$ birleşince $\dfrac{3}{s+2}$:

$$Y=\frac{4}{s}-\frac{8}{s^{2}}+\frac{16}{s^{3}}+\frac{3}{s+2}$$

$\dfrac{16}{s^{3}}\to 8t^{2}$ (payı ikiye bölmeyi unutmayın):

$$\boxed{\;y=8t^{2}-8t+4+3e^{-2t}\;}$$

**Doğrulama.** $y(0)=4+3=7\;\checkmark$

$y'=16t-8-6e^{-2t}$:

$$y'+2y=\left(16t-8-6e^{-2t}\right)+\left(16t^{2}-16t+8+6e^{-2t}\right)=16t^{2}\;\checkmark$$

==Bütün ara terimler götürdü, geriye tam olarak zorlama kaldı.==
[/CEVAP]

[SORU] **6.** &nbsp; $y''+y'-12y=0$, &nbsp; $y(0)=4$, &nbsp; $y'(0)=-1$
[CEVAP]
**Adım 1 — Dönüşümü al.**

$$\left(s^{2}Y-4s+1\right)+\left(sY-4\right)-12Y=0$$

**Adım 2 — Topla.** $Y$ çarpanları $s^{2}+s-12$; sabitler $-4s+1-4=-4s-3$:

$$\left(s^{2}+s-12\right)Y=4s+3$$

**Adım 3 — Kısmi kesirler.** $s^{2}+s-12=(s+4)(s-3)$:

$$\frac{4s+3}{(s+4)(s-3)}=\frac{A}{s+4}+\frac{B}{s-3}$$

$s=-4$: &nbsp; $A=\dfrac{-16+3}{-7}=\dfrac{13}{7}$ &nbsp;&nbsp;&nbsp; $s=3$: &nbsp; $B=\dfrac{12+3}{7}=\dfrac{15}{7}$

$$\boxed{\;y=\frac{13}{7}e^{-4t}+\frac{15}{7}e^{3t}\;}$$

**Doğrulama.**

$y(0)=\dfrac{13+15}{7}=\dfrac{28}{7}=4\;\checkmark$

$y'=-\dfrac{52}{7}e^{-4t}+\dfrac{45}{7}e^{3t}$, &nbsp; $y'(0)=\dfrac{-52+45}{7}=-1\;\checkmark$

Denklemi ==terim türüne göre== sınayalım:

$$e^{-4t}:\;16-4-12=0,\qquad e^{3t}:\;9+3-12=0$$

İkisi de sıfır, denklem sağlanıyor. &#10003; ==Homojen denklemde bu kontrol, üslerin karakteristik kök olduğunu doğrular.==
[/CEVAP]

[SORU] **8.** &nbsp; $y''+2y'+5y=0$, &nbsp; $y(0)=2$, &nbsp; $y'(0)=4$
[CEVAP]
**Adım 1 — Dönüşümü al.**

$$\left(s^{2}Y-2s-4\right)+2\left(sY-2\right)+5Y=0$$

$$\left(s^{2}+2s+5\right)Y=2s+4+4=2s+8$$

**Adım 2 — Tamkareye tamamla, payı da aynı cinse sok.**

$$s^{2}+2s+5=(s+1)^{2}+4,\qquad 2s+8=2(s+1)+6$$

$$Y=\frac{2(s+1)}{(s+1)^{2}+4}+3\cdot\frac{2}{(s+1)^{2}+4}$$

==Sinüs teriminde payı $2$'ye tamamladık== ($b=2$).

$$\boxed{\;y=e^{-t}\left(2\cos 2t+3\sin 2t\right)\;}$$

**Doğrulama (denkleme koyarak).** $u=2\cos 2t+3\sin 2t$ diyelim. Bu $u$ için $u''=-4u$ olduğuna dikkat edin (açısal frekans $2$).

$$y=e^{-t}u,\qquad y'=e^{-t}\left(u'-u\right),\qquad y''=e^{-t}\left(u''-2u'+u\right)=e^{-t}\left(-3u-2u'\right)$$

$$y''+2y'+5y=e^{-t}\Big[\left(-3u-2u'\right)+2\left(u'-u\right)+5u\Big]=e^{-t}\big[0\big]=0\;\checkmark$$

$u'$ terimleri götürdü, $u$ katsayıları $-3-2+5=0$. ==$u$'nun ne olduğunu hiç açmadan doğruladık.==

**Başlangıç koşulları.** $y(0)=2\;\checkmark$; &nbsp; $y'(0)=-u(0)+u'(0)=-2+6=4\;\checkmark$
[/CEVAP]

[SORU] **10.** &nbsp; $y''+9y=36e^{-3t}$, &nbsp; $y(0)=2$, &nbsp; $y'(0)=3$
[CEVAP]
**Adım 1 — Dönüşümü al.**

$$\left(s^{2}Y-2s-3\right)+9Y=\frac{36}{s+3}$$

$$Y=\underbrace{\frac{36}{(s+3)\left(s^{2}+9\right)}}_{\text{zorlamadan}}+\underbrace{\frac{2s+3}{s^{2}+9}}_{\text{başlangıç koşullarından}}$$

**Adım 2 — Birinci parçayı aç.**

$$\frac{36}{(s+3)\left(s^{2}+9\right)}=\frac{A}{s+3}+\frac{Bs+C}{s^{2}+9}$$

$$36=A\left(s^{2}+9\right)+(Bs+C)(s+3)$$

$s=-3$: &nbsp; $36=18A\Rightarrow A=2$

$s^{2}$ katsayısı: &nbsp; $A+B=0\Rightarrow B=-2$

Sabit terim: &nbsp; $9A+3C=36\Rightarrow 18+3C=36\Rightarrow C=6$

$$\frac{36}{(s+3)\left(s^{2}+9\right)}=\frac{2}{s+3}+\frac{-2s+6}{s^{2}+9}$$

**Adım 3 — İki parçayı topla.** ==Burada güzel bir şey oluyor:==

$$\frac{-2s+6}{s^{2}+9}+\frac{2s+3}{s^{2}+9}=\frac{9}{s^{2}+9}$$

$s$'li terimler tamamen götürdü.

$$Y=\frac{2}{s+3}+\frac{9}{s^{2}+9}=\frac{2}{s+3}+3\cdot\frac{3}{s^{2}+9}$$

$$\boxed{\;y=2e^{-3t}+3\sin 3t\;}$$

**Doğrulama.** $y(0)=2+0=2\;\checkmark$

$y'=-6e^{-3t}+9\cos 3t$, &nbsp; $y'(0)=-6+9=3\;\checkmark$

$y''=18e^{-3t}-27\sin 3t$:

$$y''+9y=\left(18e^{-3t}-27\sin 3t\right)+\left(18e^{-3t}+27\sin 3t\right)=36e^{-3t}\;\checkmark$$

[KUTU]
**Kosinüsün kaybolması ne anlama geliyor?** Genel çözümde hem $\cos 3t$ hem $\sin 3t$ beklenirdi. Kosinüs teriminin sıfırlanması, ==başlangıç koşullarının tam olarak onu iptal edecek biçimde seçilmiş olmasından== kaynaklanıyor.

Nitekim $y(0)=2$ koşulu, zorlamanın getirdiği $2e^{-3t}$ teriminin başlangıç değerine birebir eşit; geriye salınım için serbest genlik olarak yalnız sinüs kalıyor.
[/KUTU]
[/CEVAP]

[SORU] **12.** &nbsp; $2y''+y'=5e^{2t}$
[CEVAP]
[KUTU]
**Bu soruda başlangıç koşulu verilmemiş.** Diğerlerinin hepsinde $y(0)$ ve gerekiyorsa $y'(0)$ vardı; burada yok. Dolayısıyla istenen ==genel çözümdür==. Laplace yöntemi bunu da yapabilir: başlangıç değerlerini $y(0)=c_{0}$, $y'(0)=c_{1}$ diye **harf olarak** taşıyıp sonunda keyfi sabitlere dönüştürürüz.
[/KUTU]

**Adım 1 — Dönüşümü harflerle al.**

$$2\left(s^{2}Y-s\,c_{0}-c_{1}\right)+\left(sY-c_{0}\right)=\frac{5}{s-2}$$

$$\left(2s^{2}+s\right)Y=\frac{5}{s-2}+2c_{0}s+\left(2c_{1}+c_{0}\right)$$

Payda $2s^{2}+s=s(2s+1)$.

**Adım 2 — Zorlamadan gelen parça.**

$$\frac{5}{s(2s+1)(s-2)}=\frac{5}{2s\left(s+\tfrac{1}{2}\right)(s-2)}$$

Örtme yöntemiyle:

$s=0$: &nbsp; $\dfrac{1}{\left(\tfrac{1}{2}\right)(-2)}=-1$ &nbsp;&nbsp; $s=-\tfrac{1}{2}$: &nbsp; $\dfrac{1}{\left(-\tfrac{1}{2}\right)\left(-\tfrac{5}{2}\right)}=\dfrac{4}{5}$ &nbsp;&nbsp; $s=2$: &nbsp; $\dfrac{1}{2\cdot\tfrac{5}{2}}=\dfrac{1}{5}$

$$\frac{5}{2}\left[-\frac{1}{s}+\frac{4/5}{s+\tfrac{1}{2}}+\frac{1/5}{s-2}\right]=-\frac{5}{2s}+\frac{2}{s+\tfrac{1}{2}}+\frac{1}{2(s-2)}$$

$$\to\;-\frac{5}{2}+2e^{-t/2}+\frac{1}{2}e^{2t}$$

**Adım 3 — Başlangıç koşullarından gelen parça.**

$$\frac{2c_{0}s+\left(2c_{1}+c_{0}\right)}{s(2s+1)}=\frac{P}{s}+\frac{Q}{s+\tfrac{1}{2}}$$

$s=0$: &nbsp; $P=2c_{1}+c_{0}$ &nbsp;&nbsp;&nbsp; $s=-\tfrac{1}{2}$: &nbsp; $Q=-2c_{1}$

$$\to\;\left(2c_{1}+c_{0}\right)-2c_{1}e^{-t/2}$$

**Adım 4 — Topla ve keyfi sabitlere geç.** Sabit terimler ve $e^{-t/2}$ katsayıları ==$c_{0}$, $c_{1}$ keyfi olduğu için keyfidir==; onlara $A$ ve $B$ diyelim:

$$\boxed{\;y=A+B\,e^{-t/2}+\frac{1}{2}e^{2t}\;}$$

**Doğrulama (denkleme koyarak).**

$$y'=-\frac{B}{2}e^{-t/2}+e^{2t},\qquad y''=\frac{B}{4}e^{-t/2}+2e^{2t}$$

$$2y''+y'=\left(\frac{B}{2}e^{-t/2}+4e^{2t}\right)+\left(-\frac{B}{2}e^{-t/2}+e^{2t}\right)=5e^{2t}\;\checkmark$$

$B$'li terimler götürdü ve $A$ hiç görünmedi — ==her iki keyfi sabit de homojen çözüme ait olduğu için beklenen davranış bu.==

**İkinci doğrulama (klasik yöntemle).** Yardımcı denklem $2m^{2}+m=m(2m+1)=0$, kökler $m=0$ ve $m=-\tfrac{1}{2}$:

$$y_{c}=A+Be^{-t/2}$$

Özel integral $y_{p}=ke^{2t}$: &nbsp; $2(4k)+2k=10k=5\Rightarrow k=\tfrac{1}{2}$

$$y=A+Be^{-t/2}+\tfrac{1}{2}e^{2t}$$

Laplace ile bulduğumuzun aynısı. &#10003;
[/CEVAP]

[KUTU]
**Setin tamamı bitti.** 12 sorunun 12'si çözülü: tek numaralılar kitabın cevap anahtarıyla, çift numaralılar ==denkleme geri koyma + başlangıç koşulu kontrolü== ile doğrulanmıştır.

**İki gözlem:**

**Sadeleşmeler rastlantı değil.** 2. soruda $(s+1)$ çarpanı, 10. soruda kosinüs terimi tamamen götürdü. Her ikisinde de sebep aynı: başlangıç koşulları, zorlamanın getirdiği terimi tam olarak dengeleyecek biçimde seçilmiş. Kitap soruları çoğu zaman böyle "temiz" cevap verecek şekilde kurgulanır.

**Başlangıç koşulu yoksa panik yok.** 12. soruda olduğu gibi koşullar verilmemişse, Laplace yöntemi yine çalışır: $c_{0}$ ve $c_{1}$'i harf olarak taşıyın, sonunda keyfi sabite dönüşürler. Sonuç klasik yöntemin verdiği genel çözümle aynıdır.
[/KUTU]

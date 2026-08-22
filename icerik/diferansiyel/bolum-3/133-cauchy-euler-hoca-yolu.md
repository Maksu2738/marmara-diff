---
id: cauchy-euler-hoca-yolu
menu: 3.4 ★ Hocanın Yolu — Kısayol Gösterimi
tip: konu
baslik: 3.4 &nbsp;★ Hocanın Ders Notundaki Yol — Cauchy-Euler İçin Kısayol Gösterimi
---

[KUTU]
**Bu bölüm kitapta yok.** Yukarıdaki Örnek 4.43 ve 4.44 kitabın çözümüdür. Hoca ders notunda ==aynı problemleri farklı bir gösterimle== çözüyor: her seferinde zincir kuralını yeniden kurmak yerine, üç dönüşüm formülünü hazır tutup doğrudan yerine koyuyor.

İki yol da aynı sonuca varır. Ama sınavda hocanın gösterimi beklenebileceği için ikisi de burada.
[/KUTU]

### Hocanın gösterimi

$x=e^{s}$ dönüşümünde iki farklı değişkene göre türev dolaşıyor: $x$'e göre ve $s$'e göre. Kitap bunları $\dfrac{dy}{dx}$ ve $\dfrac{dy}{dt}$ diye uzun uzun yazıyor. Hoca ise ==kendi kısaltmasını uyduruyor== (ders notunda kelimesi kelimesine "uydurma" diye işaretlenmiş):

<div class="tablo-sar">
<table>
<tr><th>Yazım</th><th>Anlamı</th></tr>
<tr><td>$y'$</td><td>$\dfrac{dy}{dx}$ &nbsp; — asıl değişkene göre</td></tr>
<tr><td>$y^{!}$</td><td>$\dfrac{dy}{ds}$ &nbsp; — yeni değişkene göre</td></tr>
<tr><td>$y^{!!}$</td><td>$\dfrac{d^{2}y}{ds^{2}}$</td></tr>
<tr><td>$y^{!!!}$</td><td>$\dfrac{d^{3}y}{ds^{3}}$</td></tr>
</table>
</div>

[KUTU]
**Neden ayrı bir işaret gerekiyor?** Çünkü dönüşüm sırasında $y''$ ile $\dfrac{d^{2}y}{ds^{2}}$ ==aynı şey değildir==, ama ikisi de "y'nin ikinci türevi" diye okunur. Hocanın $!$ işareti bu karışıklığı tek hamlede kesiyor: üssünde $!$ olan her şey $s$'e göredir.

Gösterim standart değildir, hoca da bunu belirtiyor. Sınav kâğıdında kullanacaksanız ==ne anlama geldiğini bir kez yazın==.
[/KUTU]

### Ezberlenecek üç formül

Kitabın her problemde yeniden türettiği zincir kuralı sonuçları, hocada baştan hazır duruyor:

$$\boxed{\;y'=\frac{y^{!}}{x}\;}$$

$$\boxed{\;y''=\frac{1}{x^{2}}\left[y^{!!}-y^{!}\right]\;}$$

$$\boxed{\;y'''=\frac{1}{x^{3}}\left[y^{!!!}-3y^{!!}+2y^{!}\right]\;}$$

**Nereden geliyor?** Üçü de tek bir kalıbın açılımıdır. $D=\dfrac{d}{ds}$ dersek:

$$x^{n}\,y^{(n)}=D(D-1)(D-2)\cdots\big(D-(n-1)\big)\,y$$

- $n=1$: &nbsp; $x\,y'=D\,y$
- $n=2$: &nbsp; $x^{2}y''=D(D-1)y=D^{2}y-Dy$
- $n=3$: &nbsp; $x^{3}y'''=D(D-1)(D-2)y=D^{3}y-3D^{2}y+2Dy$

==Bu, 3.4'ün başındaki $r(r-1)(r-2)\cdots$ kuralının ta kendisidir==; hoca onu $r$ cinsinden bırakmak yerine doğrudan kullanıma hazır üç satıra çevirmiş.

---

### Aynı problemler, hocanın yoluyla

[SORU*] **Örnek 4.43 (hocanın yolu).** &nbsp; $x^{2}y''-2xy'+2y=x^{3}$ denklemini çözünüz.
[CEVAP]
**Adım 1 — Formülleri doğrudan yerine koy.** Türetme yok, sadece yerleştirme:

$$x^{2}\cdot\frac{1}{x^{2}}\left[y^{!!}-y^{!}\right]-2x\cdot\frac{y^{!}}{x}+2y=x^{3}$$

$x$'ler ==anında sadeleşiyor== — kalıbın bütün amacı bu:

$$\left[y^{!!}-y^{!}\right]-2y^{!}+2y=e^{3s}$$

$$y^{!!}-3y^{!}+2y=e^{3s}$$

Sabit katsayılı denklem hazır.

**Adım 2 — Yardımcı denklem.**

$$m^{2}-3m+2=(m-1)(m-2)=0\;\Longrightarrow\;m=1,\;2$$

$$y_{c}=c_{1}e^{s}+c_{2}e^{2s}$$

**Adım 3 — Özel integral.** $e^{3s}$, $y_{c}$'de yok; $y_{p}=Ae^{3s}$:

$$9A-3(3A)+2A=1\;\Longrightarrow\;2A=1\;\Longrightarrow\;A=\tfrac{1}{2}$$

**Adım 4 — $x$'e dön.** $e^{s}=x$:

$$y=c_{1}e^{s}+c_{2}e^{2s}+\tfrac{1}{2}e^{3s}\;\Longrightarrow\;\boxed{\;y=c_{1}x+c_{2}x^{2}+\tfrac{1}{2}x^{3}\;}$$

==Örnek 4.43'ün kitap çözümüyle birebir aynı sonuç.== Fark yalnız 1. adımda: kitap orada üç satırlık zincir kuralı türetmesi yapıyordu.
[/CEVAP]

[SORU*] **Örnek 4.44 (hocanın yolu).** &nbsp; $x^{3}y'''-4x^{2}y''+8xy'-8y=4\ln x$ denklemini çözünüz.
[CEVAP]
**Adım 1 — Üç formülü birden yerine koy.**

$$x^{3}\cdot\frac{1}{x^{3}}\left[y^{!!!}-3y^{!!}+2y^{!}\right]-4x^{2}\cdot\frac{1}{x^{2}}\left[y^{!!}-y^{!}\right]+8x\cdot\frac{y^{!}}{x}-8y=4s$$

Bütün $x$'ler sadeleşir ($\ln x=s$):

$$\left[y^{!!!}-3y^{!!}+2y^{!}\right]-4\left[y^{!!}-y^{!}\right]+8y^{!}-8y=4s$$

**Adım 2 — Benzer terimleri topla.**

$$y^{!!}:\;-3-4=-7,\qquad y^{!}:\;2+4+8=14$$

$$y^{!!!}-7y^{!!}+14y^{!}-8y=4s$$

**Adım 3 — Yardımcı denklem.**

$$m^{3}-7m^{2}+14m-8=(m-1)(m-2)(m-4)=0\;\Longrightarrow\;m=1,\;2,\;4$$

$$y_{c}=c_{1}e^{s}+c_{2}e^{2s}+c_{3}e^{4s}$$

**Adım 4 — Özel integral.** Sağ taraf $4s$ birinci dereceden polinom; $y_{p}=As+B$ alalım. O zaman $y_{p}^{!}=A$, $y_{p}^{!!}=y_{p}^{!!!}=0$:

$$0-0+14A-8(As+B)=4s$$

$$-8As+(14A-8B)=4s\;\Longrightarrow\;A=-\tfrac{1}{2},\quad B=-\tfrac{7}{8}$$

**Adım 5 — $x$'e dön.**

$$\boxed{\;y=c_{1}x+c_{2}x^{2}+c_{3}x^{4}-\tfrac{1}{2}\ln x-\tfrac{7}{8}\;}$$

Örnek 4.44'ün kitap çözümüyle aynı. &#10003;
[/CEVAP]

[KUTU]
**Hangi yolu kullanmalı?**

**Hocanın yolu** ikinci ve üçüncü mertebede belirgin biçimde hızlıdır — üç formülü bilmek yeter, hiç türev almadan denklemi sabit katsayılıya çevirirsiniz. Sınavda zaman kazandırır.

**Kitabın yolu** ise formülü unuttuğunuzda ==sizi kurtarır==: $x=e^{s}$ koyup zincir kuralını uygulamak her zaman çalışır, dördüncü mertebeye de aynı şekilde uzar.

En sağlamı: formülleri ezberleyin ama **nereden geldiğini** de bilin. $D(D-1)(D-2)\cdots$ kalıbını hatırlarsanız üç formülü de yerinde yeniden üretebilirsiniz.
[/KUTU]

[KUTU]
**Başlangıç koşulu varsa dikkat.** Bir sonraki bölümdeki Örnek 4.44a'da olduğu gibi problem başlangıç değerli ise, koşullar **$x$ cinsinden** verilir ($y(1)=1$ gibi). Yani $s$'e dönüp çözdükten sonra ==önce $x$'e geri dönün==, koşulları ondan sonra uygulayın. Koşulları $s$ uzayında uygulamaya çalışmak sık yapılan bir hatadır.
[/KUTU]

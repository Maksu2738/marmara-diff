---
id: ozel-dd-bessel-ders-notu
menu: 6.3 ★ Ders Notu — Jₚ ve Neumann Nₚ
tip: konu
baslik: 6.3 &nbsp;★ Hocanın Ders Notundaki Yol — Jₚ'nin Türetimi ve Neumann Fonksiyonları
---

[KUTU]
**Bu sayfa ders notunun "(C) BESSEL DE and Bessel Polynomials" kısmıdır.** Hoca $p$. mertebeden Bessel denklemini derste ==baştan sona Frobenius ile türetmiş==; ulaştığı sonuç 6.3'teki $(6.119)$ ile birebir aynıdır.

Aşağıda hocanın izlediği kısa yol ve kitapta geçmeyen ==Neumann gösterimi== var.
[/KUTU]

### Denklem ve kurulum

$$x^{2}y''+xy'+\left(x^{2}-p^{2}\right)y=0 \tag{6.144}$$

Hoca buna doğrudan **$p$. mertebeden Bessel denklemi** diyor ve Frobenius'u tek satırda kuruyor:

$$y=x^{r}\sum_{n=0}^{\infty}c_{n}x^{n}$$

Yerine koyup düzenleyince üç parçalı ifade çıkar:

$$\left(r^{2}-p^{2}\right)c_{0}x^{r}+\Big[(r+1)^{2}-p^{2}\Big]c_{1}x^{r+1}+\sum_{n=2}^{\infty}\Big\{\Big[(n+r)^{2}-p^{2}\Big]c_{n}+c_{n-2}\Big\}x^{n+r}=0$$

**Belirtici denklem:** $r^{2}-p^{2}=0\;\Longrightarrow\;r=+p,\,-p$.

**Büyük kök $r=+p$ alınır**; o zaman $c_{1}=0$ ve

$$\Big[(n+p)^{2}-p^{2}\Big]c_{n}+c_{n-2}=0$$

Köşeli parantez açılır: $n^{2}+2np+p^{2}-p^{2}=n(n+2p)$, yani

$$\boxed{\;c_{n}=-\frac{c_{n-2}}{n\,(n+2p)}\;} \tag{6.145}$$

---

### Katsayıların toplanması

$c_{1}=0$ olduğundan tek indisliler tümüyle sıfırdır. Çift olanları yürütelim:

$$c_{2}=-\frac{c_{0}}{2\,(2+2p)},\qquad c_{4}=\frac{c_{0}}{8\,(2+2p)(4+2p)},\qquad\dots$$

$n\to 2n$ yazarak genel terimi topluyoruz:

$$c_{2n}=\frac{(-1)^{n}c_{0}}{\underbrace{\big[2\cdot 4\cdot 6\cdots 2n\big]}_{2^{n}n!}\;\underbrace{\big[(2+2p)(4+2p)\cdots(2n+2p)\big]}_{2^{n}(1+p)(2+p)\cdots(n+p)}}$$

Her iki köşeli parantezden birer $2^{n}$ çekilir. Hoca sağ paranteze ==faktöriyel numarasını== uyguluyor:

[KUTU]
**Kenardaki hesap.**

$$\frac{(n+p)!}{p!}=(1+p)(2+p)\cdots(n+p)$$

Sağlaması küçük $n$ ile bir bakışta yapılır:

$$\frac{(1+p)!}{p!}=\frac{(1+p)\,p!}{p!}=1+p,\qquad \frac{(2+p)!}{p!}=(2+p)(1+p)$$

==$p$ tam sayı olmadığında bu ifadeler gama fonksiyonuyla tanımlanır== — bkz. 6.3'teki $\Gamma(N)$ bölümü.
[/KUTU]

Böylece:

$$c_{2n}=\frac{(-1)^{n}c_{0}}{2^{2n}\,n!\,\big[(n+p)!/p!\big]}$$

ve çözüm:

$$y_{1}(x)=c_{0}\,2^{p}\,p!\sum_{n=0}^{\infty}\frac{(-1)^{n}}{n!\,(n+p)!}\left(\frac{x}{2}\right)^{2n+p} \tag{6.146}$$

$c_{0}$ keyfi olduğundan hoca onu ==öndeki çarpanı silecek şekilde== seçiyor:

$$c_{0}=\frac{1}{2^{p}\,p!}$$

Geriye kalan, **birinci tür $p$. mertebeden Bessel fonksiyonudur (Bessel function of the first kind of order $p$)**:

$$\boxed{\;J_{p}(x)=\sum_{n=0}^{\infty}\frac{(-1)^{n}}{n!\,(n+p)!}\left(\frac{x}{2}\right)^{2n+p}\;} \tag{6.147}$$

---

### Neumann fonksiyonları $N_{p}$

Ders notunda ikinci çözüm şu adla geçiyor:

> Bessel denkleminin öteki çözümüne **Neumann fonksiyonları (Neumann functions)** denir, $N_{p}(x)$.

Dolayısıyla $(6.144)$'ün genel çözümü hocanın gösterimiyle:

$$\boxed{\;y=A\,J_{p}(x)+B\,N_{p}(x)\;} \tag{6.148}$$

[KUTU]
**$N_{p}$ ile $Y_{p}$ aynı fonksiyondur.** Aynı fonksiyonun iki adı vardır ve kaynağa göre değişir:

<div class="tablo-sar">
<table>
<tr><th>Gösterim</th><th>Adı</th><th>Nerede</th></tr>
<tr><td>$J_{p}(x)$</td><td>Birinci tür Bessel fonksiyonu</td><td>Her yerde aynı</td></tr>
<tr><td>$N_{p}(x)$</td><td>Neumann fonksiyonu</td><td>==Ders notu==, fizik kitapları</td></tr>
<tr><td>$Y_{p}(x)$</td><td>İkinci tür Bessel fonksiyonu (Weber biçimi)</td><td>Kitap, 6.3</td></tr>
</table>
</div>

$N_{p}\equiv Y_{p}$. Sınavda hangisiyle karşılaşırsanız karşılaşın ==aynı şeyden söz ediliyor==; açık serisi ve logaritmalı yapısı 6.3'te duruyor.
[/KUTU]

---

[CLAUDE] Hocanın yolu ile kitabın yolu arasındaki tek fark
İki türetim ==birebir aynı adımları== izliyor; fark yalnızca kozmetik:

<div class="tablo-sar">
<table>
<tr><th></th><th>Ders notu</th><th>Kitap (6.3)</th></tr>
<tr><td>Çözüm biçimi</td><td>$y=x^{r}\sum c_{n}x^{n}$</td><td>$y=\sum c_{n}x^{n+r}$</td></tr>
<tr><td>Genel katsayı</td><td>$(n+p)!/p!$ ile</td><td>$(1+p)\cdots(n+p)$ açık çarpımla</td></tr>
<tr><td>$c_{0}$ seçimi</td><td>$1/\left(2^{p}p!\right)$ — hemen normalize edilir</td><td>Serbest bırakılır, sonra normalize edilir</td></tr>
<tr><td>İkinci çözüm</td><td>$N_{p}$ diye ==adı verilip geçilir==</td><td>$J_{-p}$ ve $Y_{p}$ ayrıntılı incelenir</td></tr>
</table>
</div>

**Sınav açısından okunuşu:** hoca $J_{p}$'nin türetimini tahtada yapmış, ikinci çözümü ise yalnızca adlandırmış. ==Türetim sorulabilir, $Y_{p}$'nin açık serisi büyük ihtimalle sorulmaz.== Ezberlenecek tek şey $(6.147)$ ve belirtici denklemin $r=\pm p$ verdiğidir.
[/CLAUDE]

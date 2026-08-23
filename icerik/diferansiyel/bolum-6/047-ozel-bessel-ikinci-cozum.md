---
id: ozel-dd-bessel-ikinci
menu: 6.3 İkinci Bağımsız Çözüm — J₋ₚ ve Yₚ
tip: konu
baslik: 6.3 &nbsp;Bessel Denkleminin İkinci Bağımsız Çözümü
defterde: yok
---

$p\ge 0$ için Bessel denkleminin bir çözümünü $J_{p}$ olarak bulduk. Peki **lineer bağımsız ikinci çözüm** nedir?

$p=0$ için bunu zaten bulmuştuk: $Y_{0}$. Şimdi $p>0$ durumunu ele alalım. $2p$ pozitif tam sayı değilse, THEoREM 5.3 küçük kök $r_{2}=-p$'ye karşılık gelen bağımsız bir çözümün varlığını garanti ediyordu. Küçük kökle çalışalım.

---

### Küçük kök $r_{2}=-p$

$r=-p$ koyduğumuzda iki koşul şu hâle gelir:

$$(-2p+1)c_{1}=0 \tag{6.127}$$

$$n(n-2p)c_{n}+c_{n-2}=0,\quad n\ge 2\;\Longrightarrow\;c_{n}=-\frac{c_{n-2}}{n(n-2p)},\quad n\neq 2p \tag{6.129}$$

==Payda $n=2p$ olduğunda sıfırlanır.== Bu yüzden $2p$'nin tam sayı olup olmadığına göre üç ayrı durum doğar.

[KUTU]
**Durum 1 — $2p$ pozitif tam sayı değil.**

$$y_{2}(x)=c_{0}x^{-p}\left(1+\sum_{n=1}^{\infty}\alpha_{2n}x^{2n}\right) \tag{6.130}$$

$c_{0}$ keyfi, $\alpha_{2n}$ belirli sabitlerdir. Bu çözüm ==$J_{p}$'den lineer bağımsızdır.==

**Durum 2 — $2p$ tek pozitif tam sayı.**

$$y_{2}(x)=c_{0}x^{-p}\left(1+\sum_{n=1}^{\infty}\beta_{2n}x^{2n}\right)+c_{2p}\,x^{p}\left(1+\sum_{n=1}^{\infty}\gamma_{2n}x^{2n}\right) \tag{6.131}$$

$c_{0}$ ve $c_{2p}$ keyfidir. $c_{2p}=0$ alınırsa geriye kalan kısım ==yine $J_{p}$'den bağımsızdır.==

**Durum 3 — $2p$ çift pozitif tam sayı** (yani $p$ tam sayı).

$$y_{2}(x)=c_{2p}\,x^{p}\left(1+\sum_{n=1}^{\infty}\delta_{2n}x^{2n}\right) \tag{6.132}$$

Bu ifade ==$J_{p}(x)$'in yalnızca bir sabit katıdır==; yeni bir çözüm vermez.
[/KUTU]

**Sonuç:** $2p$ çift pozitif tam sayı **değilse** — yani $p$ pozitif tam sayı değilse — küçük köke karşılık gelen bağımsız bir çözüm vardır:

$$y_{2}(x)=\sum_{n=0}^{\infty}c_{2n}x^{2n-p} \tag{6.133}$$

---

### $J_{-p}$ — kısayol

Katsayıları hesaplamak için baştan uğraşmaya gerek yok. Şunu fark edelim:

==Küçük köke ait $(6.129)$ özyinelemesi, büyük köke ait $(6.117)$ özyinelemesinde $p$ yerine $-p$ yazılarak elde edilir.==

$$c_{n}=-\frac{c_{n-2}}{n(n+2p)}\quad\xrightarrow{\;p\to -p\;}\quad c_{n}=-\frac{c_{n-2}}{n(n-2p)}$$

Dolayısıyla $(6.133)$ biçimindeki çözüm de, $J_{p}$ tanımında $p$ yerine $-p$ yazılarak bulunur:

$$\boxed{\;J_{-p}(x)=\sum_{n=0}^{\infty}\frac{(-1)^{n}}{n!\,(n-p)!}\left(\frac{x}{2}\right)^{2n-p}\;} \tag{6.134}$$

Burada $(n-p)!$ ifadesi $\Gamma(n-p+1)$ ile tanımlanır — ==gama fonksiyonunun negatif değerlere genişletilmesinin işe yaradığı yer tam olarak burasıdır.==

**Genel çözüm ($p>0$ tam sayı değilse):**

$$y=C_{1}J_{p}(x)+C_{2}J_{-p}(x)$$

---

### $p$ tam sayıysa: $Y_{p}$

$p$ pozitif tam sayıysa Durum 3 geçerlidir ve $J_{-p}$, $J_{p}$'den bağımsız değildir. O zaman bağımsız çözüm logaritmalı biçimde olmak zorundadır:

$$y_{p}(x)=x^{-p}\sum_{n=0}^{\infty}c_{n}^{*}x^{n}+C\,J_{p}(x)\ln x,\qquad C\neq 0$$

Bu çözüm mertebe indirgemeyle bulunabilir. Ancak sıfırıncı mertebede olduğu gibi, ikinci çözüm olarak doğrudan $y_{p}$ değil, belirli bir **özel lineer birleşim** seçilir. Bu birleşim $Y_{p}$ ile gösterilir ve **$p$. mertebeden ikinci tür Bessel fonksiyonu (Weber biçimi)** adını alır:

$$Y_{p}(x)=\frac{2}{\pi}\left\{\left(\ln\frac{x}{2}+\gamma\right)J_{p}(x)-\frac{1}{2}\sum_{n=0}^{p-1}\frac{(p-n-1)!}{n!}\left(\frac{x}{2}\right)^{2n-p}\right.$$

$$\left.+\frac{1}{2}\sum_{n=0}^{\infty}(-1)^{n+1}\left(\sum_{k=1}^{n}\frac{1}{k}+\sum_{k=1}^{n+p}\frac{1}{k}\right)\left[\frac{1}{n!\,(n+p)!}\left(\frac{x}{2}\right)^{2n+p}\right]\right\} \tag{6.135}$$

Burada $\gamma$ Euler sabitidir.

**Genel çözüm ($p$ pozitif tam sayıysa):**

$$y=C_{1}J_{p}(x)+C_{2}Y_{p}(x)$$

[KUTU]
**$(6.135)$'in yapısını tanımak.** Korkutucu görünse de üç parçadan oluşur ve her parçanın nereden geldiği bellidir:

1. $\left(\ln\frac{x}{2}+\gamma\right)J_{p}(x)$ — logaritmalı terim, $Y_{0}$'dakiyle aynı yapıda.
2. Sonlu toplam $\sum_{n=0}^{p-1}$ — $x^{-p}$ ile başlayan, ==$x\to 0^{+}$ iken ıraksayan== kısım. $p=0$ için bu toplam boştur ve terim yok olur; nitekim $(6.110)$'daki $Y_{0}$'da böyle bir terim yoktur.
3. Sonsuz toplam — içindeki iki harmonik toplam $\sum\frac1k$, $Y_{0}$'da tek harmonik toplam olarak görünüyordu; $p=0$ için ikisi çakışıp o biçime iner.

Yani $(6.135)$, $Y_{0}$'ın doğrudan genelleştirmesidir. ==$p=0$ koyup $(6.110)$'u geri elde etmek, formülü doğru hatırladığınızın en hızlı kontrolüdür.==
[/KUTU]

---

### Özet tablo

| $p$ | İkinci bağımsız çözüm | Logaritma |
|---|---|---|
| $p=0$ | $Y_{0}$ | Var |
| $p>0$, tam sayı değil | $J_{-p}$ | Yok |
| $p$ pozitif tam sayı | $Y_{p}$ | Var |

$J_{-p}$'nin işe yaradığı tek durum ortadaki satırdır; $p$ tam sayı olduğunda $J_{-p}$ yeni bilgi vermez ve logaritmalı $Y_{p}$'ye başvurulur.

---

[CLAUDE] $Y_p$'nin tanımı neden o kadar tuhaf görünüyor
$$Y_{p}(x)=\frac{J_{p}(x)\cos p\pi-J_{-p}(x)}{\sin p\pi}$$

İlk bakışta keyfî duruyor. Mantığı şu: ==$p$ tam sayı değilken bu ifade zaten $J_{p}$ ile $J_{-p}$'nin bir lineer birleşimidir==, dolayısıyla geçerli bir çözümdür. Ama seçilen katsayılar öyle ayarlanmıştır ki $p\to$ tam sayı limitinde ==pay ve payda birlikte sıfırlanır== ve L'Hôpital ile sonlu, $J_{p}$'den bağımsız bir çözüm elde edilir.

**Yani $Y_{p}$, "tam sayı durumu için özel olarak imal edilmiş" bir çözüm değildir;** her $p$ için tanımlıdır ve tam sayı $p$'de ==limit alınarak boşluğu doldurur.==

**Sınavda bilinmesi yeten üç şey:**

1. $Y_{p}$ içinde **logaritma** vardır (eşit/tam sayı farklı kökler durumunun beklenen sonucu).
2. $x\to 0^{+}$ iken $Y_{p}\to-\infty$. Dolayısıyla ==problem $x=0$'ı kapsıyorsa ve çözümün sınırlı kalması isteniyorsa $c_{2}=0$ alınır.==
3. Genel çözüm her zaman $c_{1}J_{p}+c_{2}Y_{p}$ yazılabilir — $p$ tam sayı olsun olmasın.

Üçüncü madde pratik kolaylık sağlar: ==$p$'yi kontrol etmeden bu biçimi yazarsanız hiçbir zaman yanılmazsınız.==
[/CLAUDE]

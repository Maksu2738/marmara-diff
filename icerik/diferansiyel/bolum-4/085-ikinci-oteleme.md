---
id: laplace-ikinci-oteleme
menu: 4.4 İkinci Öteleme THEoREM'i
tip: konu
baslik: 4.4 &nbsp;Ötelenmiş Fonksiyonlar ve İkinci Öteleme THEoREM'i
---

Birim basamağın ikinci kullanışlı özelliği, bir fonksiyonu **pozitif yönde öteleme** ile ilgilidir.

$t>0$ için tanımlı bir $f$ fonksiyonu düşünelim. Bu fonksiyonu $a$ birim **sağa** kaydıralım ve $t<a$ için yeni fonksiyona $0$ değerini atayalım. Ortaya çıkan fonksiyon şudur:

$$\begin{cases}0, & 0<t<a\\ f(t-a), & t>a\end{cases} \tag{9.76}$$

Birim basamağın tanımı gereği bu fonksiyon tam olarak $u_{a}(t)f(t-a)$ çarpımıdır:

$$u_{a}(t)f(t-a)=\begin{cases}0, & 0<t<a\\ f(t-a), & t>a\end{cases} \tag{9.77}$$

[KUTU]
**İki ayrı iş yapan tek çarpım.** $u_{a}(t)$ çarpanı ==makas gibi davranır==: $t<a$ bölgesini keser, sıfırlar. $f(t-a)$ ise ==fonksiyonu geciktirir==: $f$'nin $t=0$'daki davranışı artık $t=a$'da başlar.

Bir sistemde "$a$ saniye sonra devreye giren aynı etki" tam olarak budur.
[/KUTU]

---

[KUTU]
**THEoREM 9.9 — İKİNCİ ÖTELEME THEoREM'i**

**Hipotez.** $f$, THEoREM 9.1'in hipotezlerini sağlayan ve Laplace dönüşümü $F$ olan bir fonksiyon olsun.

**Sonuç.**

$$\mathcal{L}\{u_{a}(t)f(t-a)\}=e^{-as}\,\mathcal{L}\{f(t)\}=e^{-as}F(s) \tag{9.79}$$
[/KUTU]

**İspat.** Tanımdan başlayalım ve integrali $t=a$'da bölelim:

$$\mathcal{L}\{u_{a}(t)f(t-a)\}=\int_{0}^{a}e^{-st}\cdot 0\,dt+\int_{a}^{\infty}e^{-st}f(t-a)\,dt=\int_{a}^{\infty}e^{-st}f(t-a)\,dt$$

$t-a=\tau$ değişken değişimi yapalım. O zaman $t=\tau+a$, $dt=d\tau$; $t=a$ iken $\tau=0$, $t\to\infty$ iken $\tau\to\infty$:

$$=\int_{0}^{\infty}e^{-s(\tau+a)}f(\tau)\,d\tau$$

Üstel çarpanı ayıralım — ==$e^{-as}$ integral değişkenine bağlı olmadığı için dışarı çıkar:==

$$=e^{-as}\int_{0}^{\infty}e^{-s\tau}f(\tau)\,d\tau=e^{-as}\,\mathcal{L}\{f(t)\}\qquad\blacksquare$$

---

### İki öteleme THEoREM'ini karıştırmayın

Laplace'ta "öteleme" adını taşıyan iki ayrı THEoREM var ve ==sık karıştırılırlar:==

<div class="tablo-sar">
<table>
<tr><th></th><th>THEoREM 9.5 (birinci öteleme)</th><th>THEoREM 9.9 (ikinci öteleme)</th></tr>
<tr><td>Kural</td><td>$\mathcal{L}\{e^{at}f(t)\}=F(s-a)$</td><td>$\mathcal{L}\{u_{a}(t)f(t-a)\}=e^{-as}F(s)$</td></tr>
<tr><td>$t$ uzayında</td><td>üstelle çarpma</td><td>zamanda gecikme</td></tr>
<tr><td>$s$ uzayında</td><td>$s$ ekseninde kaydırma</td><td>$e^{-as}$ ile çarpma</td></tr>
<tr><td>İzi</td><td>paydada $(s-a)$ ya da tamkare</td><td>payda $e^{-as}$ çarpanı</td></tr>
</table>
</div>

**Hatırlama yolu:** Hangi uzayda kaydırma olduğuna bakın. ==$s$ kaydıysa birinci, $t$ kaydıysa ikinci.==

---

### Ters yönde kullanım

Pratikte asıl ihtiyacımız olan biçim tersidir:

$$\mathcal{L}^{-1}\left\{e^{-as}F(s)\right\}=u_{a}(t)\,f(t-a)$$

Yani bir ters dönüşümde $e^{-as}$ çarpanı görürseniz:

1. $e^{-as}$'yi ayırın, geriye kalan $F(s)$'nin ters dönüşümü $f(t)$'yi bulun.
2. $f$ içindeki her $t$ yerine ==$t-a$ yazın.==
3. Sonucu $u_{a}(t)$ ile çarpın.

[KUTU]
**En sık yapılan hata: 2. adımı atlamak.** $\mathcal{L}^{-1}\left\{e^{-3s}\cdot\frac{1}{s^{2}}\right\}$ ifadesinin cevabı $u_{3}(t)\cdot t$ **değil**, $u_{3}(t)\cdot(t-3)$'tür. Çarpan yalnızca kesmez, aynı zamanda ==geciktirir==; gecikme fonksiyonun argümanına yansımalıdır.

Kontrol yolu: $t=a$ noktasında ne olduğuna bakın. Doğru cevapta $t=3$'te fonksiyon $0$'dan başlar ($f(0)=0$); yanlışında birdenbire $3$ değerine sıçrar.
[/KUTU]

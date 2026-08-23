---
id: egzersizler-basamak
menu: 4.4 Egzersizler — Basamak Fonksiyonları
tip: sorular
baslik: 4.4 &nbsp;Egzersizler — Basamak ve Ötelenmiş Fonksiyonların Dönüşümü
defterde: yok
---

Aşağıdaki fonksiyonların $\mathcal{L}\{f(t)\}$ dönüşümlerini bulunuz.

[KUTU]
**Bu setin çözüm anahtarı: "sıçrama kuralı".** 4.4'te kurduğumuz kalıp bütün basamak sorularını tek hamlede çözer:

> Her sıçrama noktası için bir $u_{a}$ terimi yaz; katsayısı ==o noktadaki sıçrama miktarı== olsun (yeni değer eksi eski değer).

Sonra $\mathcal{L}\{u_{a}\}=\dfrac{e^{-as}}{s}$ ile doğrudan yazılır.
[/KUTU]

[SORU] **1.** &nbsp; $f(t)=\begin{cases}0, & 0<t<6\\ 5, & t>6\end{cases}$
[CEVAP]
Tek sıçrama: $t=6$'da $0\to 5$, yani $+5$.

$$f(t)=5u_{6}(t)\;\Longrightarrow\;\boxed{\;\mathcal{L}\{f(t)\}=\frac{5e^{-6s}}{s}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **3.** &nbsp; $f(t)=\begin{cases}4, & 0<t<6\\ 0, & t>6\end{cases}$
[CEVAP]
Sıçramalar: $t=0$'da $0\to 4$ ($+4$), $t=6$'da $4\to 0$ ($-4$).

$$f(t)=4u_{0}(t)-4u_{6}(t)$$

$u_{0}$'ın dönüşümü $\frac{1}{s}$ ($a=0$):

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{4}{s}\left(1-e^{-6s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **5.** &nbsp; $f(t)=\begin{cases}0, & 0<t<5\\ 2, & 5<t<7\\ 0, & t>7\end{cases}$
[CEVAP]
Dikdörtgen darbe — $t=5$'te aç ($+2$), $t=7$'de kapat ($-2$):

$$f(t)=2u_{5}(t)-2u_{7}(t)$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{2}{s}\left(e^{-5s}-e^{-7s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **7.** &nbsp; $f(t)=\begin{cases}1, & 0<t<2\\ 2, & 2<t<4\\ 3, & 4<t<6\\ 0, & t>6\end{cases}$
[CEVAP]
==Dört sıçrama var, dördünü de ayrı ayrı yazalım:==

| Nokta | Eski → Yeni | Sıçrama |
|---|---|---|
| $t=0$ | $0\to 1$ | $+1$ |
| $t=2$ | $1\to 2$ | $+1$ |
| $t=4$ | $2\to 3$ | $+1$ |
| $t=6$ | $3\to 0$ | $-3$ |

$$f(t)=u_{0}(t)+u_{2}(t)+u_{4}(t)-3u_{6}(t)$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{1+e^{-2s}+e^{-4s}-3e^{-6s}}{s}\;}$$

*Kitabın cevabıyla uyuşuyor.*

**Kontrol:** Katsayılar toplamı $1+1+1-3=0$ olmalı, çünkü fonksiyon $t\to\infty$ iken sıfıra dönüyor. ==Bu toplam sıfır çıkmıyorsa bir sıçramayı kaçırmışsınızdır.==

[SORU] **9.** &nbsp; $f(t)=\begin{cases}2, & 0<t<3\\ 0, & 3<t<6\\ 2, & t>6\end{cases}$
[CEVAP]
Sıçramalar: $t=0$'da $+2$, $t=3$'te $-2$, $t=6$'da $+2$.

$$f(t)=2u_{0}(t)-2u_{3}(t)+2u_{6}(t)$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{2\left(1-e^{-3s}+e^{-6s}\right)}{s}\;}$$

*Kitabın cevabıyla uyuşuyor.*

**Not:** Katsayılar toplamı $2-2+2=2\neq 0$; doğrusu bu, çünkü fonksiyon $t\to\infty$ iken $2$'ye gidiyor.

[SORU] **11.** &nbsp; $f(t)=\begin{cases}0, & 0<t<2\\ t, & t>2\end{cases}$
[CEVAP]
==Burada sabit değil, $t$'ye bağlı bir ifade var==; sıçrama kuralı yetmez, THEoREM 9.9 gerekir.

$t$'yi $t-2$ cinsinden yazalım: $\;t=(t-2)+2$

$$f(t)=u_{2}(t)\,g(t-2),\qquad g(t)=t+2$$

$$G(s)=\mathcal{L}\{t+2\}=\frac{1}{s^{2}}+\frac{2}{s}$$

$$\boxed{\;\mathcal{L}\{f(t)\}=e^{-2s}\left(\frac{1}{s^{2}}+\frac{2}{s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **13.** &nbsp; $f(t)=\begin{cases}t, & 0<t<3\\ 3, & t>3\end{cases}$
[CEVAP]
Bu fonksiyon $t=3$'e kadar doğrusal artıyor, sonra sabitleniyor. ==Farkı düşünelim:== eğer hiç sabitlenmeseydi $t$ olarak devam edecekti; sabitlenmesi, $t=3$'ten sonra fazlalığın çıkarılması demektir.

$t>3$ için fazlalık $t-3$'tür:

$$f(t)=t-u_{3}(t)\,(t-3)$$

**Kontrol:** $t<3$ için $u_{3}=0$, geriye $t$ kalır $\checkmark$. &nbsp; $t>3$ için $t-(t-3)=3$ $\checkmark$

İkinci terim tam olarak $(9.78)$ biçimindedir ($g(t)=t$, $a=3$):

$$\mathcal{L}\{f(t)\}=\frac{1}{s^{2}}-e^{-3s}\cdot\frac{1}{s^{2}}$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{1}{s^{2}}\left(1-e^{-3s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[KUTU]
**11 ile 13 arasındaki fark önemlidir.** 11'de fonksiyon $t=2$'den **sonra başlıyor**, o yüzden ifadeyi tümüyle $t-2$ cinsine çevirdik. 13'te ise fonksiyon baştan var ve $t=3$'te **davranış değiştiriyor**; bu yüzden "olsaydı" ifadesinden fazlalığı çıkardık.

==Sorulacak soru şu: fonksiyon $a$ noktasında mı başlıyor, yoksa orada mı değişiyor?==
[/KUTU]

---

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu yedi sorunun cevabı kitabın anahtarında yok.** Çözümler bize aittir; her biri ==ikinci bir bağımsız yolla doğrulanmıştır==.

Bu sette iki doğrulama yolu kullanıldı:

1. **Tanımdan integral** — basamak gösterimiyle bulunan sonucu, aralık aralık integral alarak yeniden üretmek.
2. **Son değer THEoREM'i** — $\displaystyle\lim_{s\to 0}s\,F(s)=f(\infty)$. Parçalı sabit fonksiyonlarda $f(\infty)$ gözle okunur, dolayısıyla bu tek satırlık kontrol ==bütün katsayıların toplamını birden sınar==.
[/KUTU]

[SORU] **2.** &nbsp; $f(t)=\begin{cases}0, & 0<t<10\\ -3, & t>10\end{cases}$
[CEVAP]
**Adım 1 — Sıçramaları oku.** Tek sıçrama var: $t=10$'da $0\to-3$, yani $-3$.

$$f(t)=-3\,u_{10}(t)$$

**Adım 2 — Dönüştür.**

$$\boxed{\;\mathcal{L}\{f\}=-\frac{3e^{-10s}}{s}\;}$$

**Doğrulama (tanımdan integral).**

$$\int_{10}^{\infty}(-3)e^{-st}\,dt=-3\left[\frac{-e^{-st}}{s}\right]_{10}^{\infty}=-\frac{3e^{-10s}}{s}\;\checkmark$$

**Son değer kontrolü.** $f(\infty)=-3$ olmalı:

$$\lim_{s\to 0}s\,F(s)=\lim_{s\to 0}\left(-3e^{-10s}\right)=-3\;\checkmark$$
[/CEVAP]

[SORU] **4.** &nbsp; $f(t)=\begin{cases}2, & 0<t<5\\ 0, & t>5\end{cases}$
[CEVAP]
**Adım 1 — Sıçramalar.** $t=0$'da $+2$, &nbsp;$t=5$'te $2\to 0$ yani $-2$.

$$f(t)=2u_{0}(t)-2u_{5}(t)$$

**Adım 2 — Dönüştür.**

$$\boxed{\;\mathcal{L}\{f\}=\frac{2}{s}\left(1-e^{-5s}\right)\;}$$

**Doğrulama (tanımdan integral).**

$$\int_{0}^{5}2e^{-st}\,dt=2\left[\frac{-e^{-st}}{s}\right]_{0}^{5}=\frac{2}{s}\left(1-e^{-5s}\right)\;\checkmark$$

**Son değer kontrolü.** $f(\infty)=0$:

$$\lim_{s\to 0}s\,F(s)=\lim_{s\to 0}2\left(1-e^{-5s}\right)=2(1-1)=0\;\checkmark$$

==Kapalı bir darbede parantez içi $s\to 0$ iken hep sıfıra gider==; bu, katsayıların doğru işaretlendiğinin göstergesidir.
[/CEVAP]

[SORU] **6.** &nbsp; $f(t)=\begin{cases}0, & 0<t<3\\ -6, & 3<t<9\\ 0, & t>9\end{cases}$
[CEVAP]
**Adım 1 — Sıçramalar.** $t=3$'te $0\to-6$ &nbsp;($-6$), &nbsp;$t=9$'da $-6\to 0$ &nbsp;($+6$).

$$f(t)=-6\,u_{3}(t)+6\,u_{9}(t)$$

**Adım 2 — Dönüştür.**

$$\boxed{\;\mathcal{L}\{f\}=-\frac{6}{s}\left(e^{-3s}-e^{-9s}\right)\;}$$

**Doğrulama (tanımdan integral).**

$$\int_{3}^{9}(-6)e^{-st}\,dt=-6\left[\frac{-e^{-st}}{s}\right]_{3}^{9}=-\frac{6}{s}\left(e^{-3s}-e^{-9s}\right)\;\checkmark$$

**Son değer kontrolü.** $f(\infty)=0$: &nbsp; $\displaystyle\lim_{s\to 0}\left[-6\left(e^{-3s}-e^{-9s}\right)\right]=-6(1-1)=0\;\checkmark$

[KUTU]
**Pencere çarpanı.** $\left(e^{-3s}-e^{-9s}\right)$ biçimi, fonksiyonun ==yalnız $3<t<9$ penceresinde açık olduğunu== söyler. Genel kalıp: $[a,b]$ aralığında $c$ değerini alan bir darbe için

$$\mathcal{L}\{f\}=\frac{c}{s}\left(e^{-as}-e^{-bs}\right)$$

Burada $c=-6$, $a=3$, $b=9$.
[/KUTU]
[/CEVAP]

[SORU] **8.** &nbsp; $f(t)=\begin{cases}9, & 0<t<5\\ 6, & 5<t<10\\ 3, & 10<t<15\\ 0, & t>15\end{cases}$
[CEVAP]
**Adım 1 — Sıçrama tablosu.** Dört düğüm var; her birinde "yeni değer eksi eski değer":

| Nokta | Eski → Yeni | Sıçrama |
|---|---|---|
| $t=0$ | $0\to 9$ | $+9$ |
| $t=5$ | $9\to 6$ | $-3$ |
| $t=10$ | $6\to 3$ | $-3$ |
| $t=15$ | $3\to 0$ | $-3$ |

==Merdiven düzgün indiği için üç sıçrama da aynı: $-3$.==

**Adım 2 — Basamak gösterimi.**

$$f(t)=9u_{0}(t)-3u_{5}(t)-3u_{10}(t)-3u_{15}(t)$$

**Adım 3 — Dönüştür.**

$$\boxed{\;\mathcal{L}\{f\}=\frac{3}{s}\left(3-e^{-5s}-e^{-10s}-e^{-15s}\right)\;}$$

**Doğrulama (tanımdan integral).** Üç aralık:

$$\frac{9}{s}\left(1-e^{-5s}\right)+\frac{6}{s}\left(e^{-5s}-e^{-10s}\right)+\frac{3}{s}\left(e^{-10s}-e^{-15s}\right)$$

Terimleri toplayalım: &nbsp;$e^{-5s}$: $-9+6=-3$, &nbsp;$e^{-10s}$: $-6+3=-3$, &nbsp;$e^{-15s}$: $-3$

$$=\frac{1}{s}\left(9-3e^{-5s}-3e^{-10s}-3e^{-15s}\right)\;\checkmark$$

**Son değer kontrolü.** $f(\infty)=0$: &nbsp; $\displaystyle\lim_{s\to 0}3\left(3-1-1-1\right)=0\;\checkmark$

==Katsayılar toplamı sıfır çıkıyor — merdivenin sıfıra indiğinin cebirsel karşılığı.==
[/CEVAP]

[SORU] **10.** &nbsp; $f(t)=\begin{cases}4, & 0<t<5\\ 0, & 5<t<10\\ 3, & t>10\end{cases}$
[CEVAP]
**Adım 1 — Sıçramalar.** Bu kez fonksiyon ==önce iniyor sonra çıkıyor==:

$t=0$: $+4$, &nbsp;$t=5$: $4\to 0$ &nbsp;($-4$), &nbsp;$t=10$: $0\to 3$ &nbsp;($+3$)

$$f(t)=4u_{0}(t)-4u_{5}(t)+3u_{10}(t)$$

**Adım 2 — Dönüştür.**

$$\boxed{\;\mathcal{L}\{f\}=\frac{1}{s}\left(4-4e^{-5s}+3e^{-10s}\right)\;}$$

**Doğrulama (tanımdan integral).** Ortadaki aralık sıfır olduğu için iki integral yeter:

$$\int_{0}^{5}4e^{-st}\,dt+\int_{10}^{\infty}3e^{-st}\,dt=\frac{4}{s}\left(1-e^{-5s}\right)+\frac{3}{s}e^{-10s}\;\checkmark$$

**Son değer kontrolü.** $f(\infty)=3$:

$$\lim_{s\to 0}s\,F(s)=4-4+3=3\;\checkmark$$

==Bu sette son değerin sıfırdan farklı çıktığı tek soru== — fonksiyon sonsuzda $3$'te kalıyor, katsayı toplamı da $3$.
[/CEVAP]

[SORU] **12.** &nbsp; $f(t)=\begin{cases}0, & 0<t<4\\ 3t, & t>4\end{cases}$
[CEVAP]
**Adım 1 — Basamakla yaz.**

$$f(t)=3t\,u_{4}(t)$$

**Adım 2 — Çarpanı $t-4$ cinsine sok.** ==Bu adım şart:== öteleme THEoREM'i $g(t-a)$ biçimi ister, $3t$ biçimi değil.

$$3t=3(t-4)+12$$

$$f(t)=\Big[3(t-4)+12\Big]u_{4}(t)$$

**Adım 3 — Dönüştür.** $\mathcal{L}\{(t-4)u_{4}\}=\dfrac{e^{-4s}}{s^{2}}$ ve $\mathcal{L}\{u_{4}\}=\dfrac{e^{-4s}}{s}$:

$$\boxed{\;\mathcal{L}\{f\}=e^{-4s}\left(\frac{3}{s^{2}}+\frac{12}{s}\right)\;}$$

**Doğrulama (tanımdan integral).**

$$\int_{4}^{\infty}3te^{-st}\,dt=3\left\{\left[-\frac{t}{s}e^{-st}\right]_{4}^{\infty}+\frac{1}{s}\int_{4}^{\infty}e^{-st}\,dt\right\}$$

Üst uçta üstel kazanır, sıfır; alt uçta $+\dfrac{4}{s}e^{-4s}$:

$$=3\left\{\frac{4e^{-4s}}{s}+\frac{e^{-4s}}{s^{2}}\right\}=\frac{12e^{-4s}}{s}+\frac{3e^{-4s}}{s^{2}}\;\checkmark$$

[KUTU]
**Sabit terim nereden geldi?** $3t$ yerine doğrudan $\dfrac{3e^{-4s}}{s^{2}}$ yazmak ==yanlış olurdu==; o, $t=4$'te sıfırdan başlayan bir rampanın dönüşümüdür. Oysa bizim fonksiyonumuz $t=4$'te $12$ değerinden başlıyor. Ayrıştırma bunu görünür kılıyor: $12$ sıçraması ($\tfrac{12}{s}$) artı rampa ($\tfrac{3}{s^{2}}$).
[/KUTU]
[/CEVAP]

[SORU] **14.** &nbsp; $f(t)=\begin{cases}2t, & 0<t<5\\ 10, & t>5\end{cases}$
[CEVAP]
**Adım 1 — Fark yöntemiyle kur.** $t=5$'te rampa durup sabitleniyor:

$$f(t)=2t+u_{5}(t)\big[10-2t\big]$$

**Adım 2 — Çarpanı $t-5$ cinsine sok.**

$$10-2t=-2(t-5)$$

$$f(t)=2t-2(t-5)\,u_{5}(t)$$

**Adım 3 — Dönüştür.**

$$\boxed{\;\mathcal{L}\{f\}=\frac{2}{s^{2}}\left(1-e^{-5s}\right)\;}$$

**Doğrulama (türev THEoREM'i ile).** $f$ parçalı doğrusal olduğu için türevi parçalı sabittir: $(0,5)$'te $2$, $t>5$'te $0$. Yani

$$f'(t)=2-2u_{5}(t)\;\Longrightarrow\;\mathcal{L}\{f'\}=\frac{2}{s}\left(1-e^{-5s}\right)$$

$f(0)=0$ olduğundan $\mathcal{L}\{f'\}=s\,\mathcal{L}\{f\}$:

$$\mathcal{L}\{f\}=\frac{1}{s}\cdot\frac{2}{s}\left(1-e^{-5s}\right)=\frac{2}{s^{2}}\left(1-e^{-5s}\right)\;\checkmark$$

**Süreklilik kontrolü.** $t=5$'te rampa $2(5)=10$ değerine ulaşıyor, sabit parça da $10$ — ==fonksiyon sürekli, sıçrama yok==. Nitekim gösterimde $u_{5}$ terimi $(t-5)$ ile çarpılı, $t=5$'te sıfır.
[/CEVAP]

[KUTU]
**Setin tamamı bitti.** 14 sorunun 14'ü çözülü: tek numaralılar kitabın cevap anahtarıyla, çift numaralılar ==tanımdan integral, son değer THEoREM'i ya da türev THEoREM'i== ile doğrulanmıştır.

**Son değer THEoREM'i bu tip sorularda neden bu kadar kullanışlı?**

$$\lim_{s\to 0}s\,F(s)=f(\infty)$$

Parçalı sabit bir fonksiyonda $f(\infty)$ gözle okunur. $s\to 0$ iken bütün $e^{-as}$ çarpanları $1$'e gittiği için sol taraf ==katsayıların toplamına== iner. Yani tek satırda bütün katsayıları birden sınamış olursunuz:

- 4, 6, 8'de toplam $0$ çıktı — fonksiyon sonsuzda sıfıra iniyor &#10003;
- 2'de $-3$, 10'da $3$ çıktı — fonksiyonun son değeri &#10003;

Bir işaret hatası yaptıysanız bu toplam tutmaz. ==Sınavda 10 saniyelik kontrol.==
[/KUTU]

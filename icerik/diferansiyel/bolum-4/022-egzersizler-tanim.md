---
id: egzersizler-laplace-tanim
menu: 4.1 Egzersizler — Tanımdan Dönüşüm
tip: sorular
baslik: 4.1 &nbsp;Egzersizler — Tanımdan Laplace Dönüşümü
---

Bu setin tamamında **tablo kullanmak yasak**: dönüşüm doğrudan tanımdan, yani integralle bulunacak.

$$\mathcal{L}\{f(t)\}=\int_{0}^{\infty}e^{-st}f(t)\,dt$$

[KUTU]
**Parçalı fonksiyonlarda integrali bölün.** Soruların çoğunda $f$ parçalı tanımlı. O zaman integral de ==parça sayısı kadar bölünür==; sıfır olan parçalar hiç yazılmayabilir.

$t\to\infty$ sınırında $e^{-st}$ sıfıra gider ($s>0$); üstel azalma her polinomu yendiği için $t^{n}e^{-st}\to 0$ de geçerlidir. Bu, sonsuz sınırlı integrallerde köşeli parantezin üst ucunu ==her seferinde sıfır== yapar.
[/KUTU]

[SORU] **1.** &nbsp; Tanımı kullanarak $f(t)=t^{2}$ için $\mathcal{L}\{f(t)\}$'yi bulunuz.
[CEVAP]
Kısmi integrasyon, $u=t^{2}$, $dv=e^{-st}dt$:

$$\mathcal{L}\{t^{2}\}=\int_{0}^{\infty}t^{2}e^{-st}\,dt=\left[-\frac{t^{2}}{s}e^{-st}\right]_{0}^{\infty}+\frac{2}{s}\int_{0}^{\infty}te^{-st}\,dt$$

Köşeli parantez iki uçta da sıfırdır ($t=0$'da $t^{2}=0$; $t\to\infty$'da üstel kazanır). Kalan integral $\mathcal{L}\{t\}=\dfrac{1}{s^{2}}$:

$$=\frac{2}{s}\cdot\frac{1}{s^{2}}=\boxed{\;\frac{2}{s^{3}}\;}$$

Tablodaki $\mathcal{L}\{t^{n}\}=\dfrac{n!}{s^{n+1}}$ ile uyumlu: $n=2$ için $\dfrac{2!}{s^{3}}$. &#10003;

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **3.** &nbsp; $f(t)=5$ &nbsp;($0<t<2$), &nbsp;$f(t)=0$ &nbsp;($t>2$)
[CEVAP]
İkinci parça sıfır olduğundan integrale hiç katkı vermez:

$$\mathcal{L}\{f\}=\int_{0}^{2}5e^{-st}\,dt=5\left[\frac{-e^{-st}}{s}\right]_{0}^{2}=\boxed{\;\frac{5}{s}\left(1-e^{-2s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **5.** &nbsp; $f(t)=t$ &nbsp;($0<t<2$), &nbsp;$f(t)=3$ &nbsp;($t>2$)
[CEVAP]
**İki parça, iki integral.**

$$\mathcal{L}\{f\}=\int_{0}^{2}te^{-st}\,dt+\int_{2}^{\infty}3e^{-st}\,dt$$

**Birinci integral** (kısmi integrasyon, $u=t$):

$$\int_{0}^{2}te^{-st}\,dt=\left[-\frac{t}{s}e^{-st}\right]_{0}^{2}+\frac{1}{s}\int_{0}^{2}e^{-st}\,dt=-\frac{2}{s}e^{-2s}+\frac{1}{s^{2}}\left(1-e^{-2s}\right)$$

==Burada üst sınır $2$ olduğu için köşeli parantez sıfır olmuyor==; sonlu aralıkta çalışıyoruz.

**İkinci integral:**

$$\int_{2}^{\infty}3e^{-st}\,dt=3\left[\frac{-e^{-st}}{s}\right]_{2}^{\infty}=\frac{3}{s}e^{-2s}$$

**Topla.** $e^{-2s}/s$ terimleri: $-\dfrac{2}{s}+\dfrac{3}{s}=+\dfrac{1}{s}$

$$\boxed{\;\mathcal{L}\{f\}=\frac{1}{s^{2}}+\frac{e^{-2s}}{s}-\frac{e^{-2s}}{s^{2}}\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **7.** &nbsp; $f(t)=t$ &nbsp;($0\le t<1$), &nbsp;$f(t)=2-t$ &nbsp;($1\le t<2$), &nbsp;$f(t)=0$ &nbsp;($t\ge 2$)
[CEVAP]
Bu bir **üçgen darbedir (triangular pulse)**: $0$'dan $1$'e çıkar, sonra $0$'a iner ve orada kalır.

$$\mathcal{L}\{f\}=\int_{0}^{1}te^{-st}\,dt+\int_{1}^{2}(2-t)e^{-st}\,dt$$

**Birinci integral:**

$$\left[-\frac{t}{s}e^{-st}\right]_{0}^{1}+\frac{1}{s}\int_{0}^{1}e^{-st}\,dt=-\frac{e^{-s}}{s}+\frac{1}{s^{2}}\left(1-e^{-s}\right)$$

**İkinci integral** ($u=2-t$, $du=-dt$):

$$\left[-\frac{(2-t)e^{-st}}{s}\right]_{1}^{2}-\frac{1}{s}\int_{1}^{2}e^{-st}\,dt$$

Üst uçta $2-t=0$, alt uçta $2-t=1$; köşeli parantez $0-\left(-\dfrac{e^{-s}}{s}\right)=\dfrac{e^{-s}}{s}$:

$$=\frac{e^{-s}}{s}-\frac{e^{-s}-e^{-2s}}{s^{2}}$$

**Topla.** $\dfrac{e^{-s}}{s}$ terimleri ==birbirini götürüyor==:

$$\mathcal{L}\{f\}=\frac{1}{s^{2}}-\frac{e^{-s}}{s^{2}}-\frac{e^{-s}}{s^{2}}+\frac{e^{-2s}}{s^{2}}$$

$$\boxed{\;\mathcal{L}\{f\}=\frac{1}{s^{2}}\left(1-2e^{-s}+e^{-2s}\right)\;}$$

[KUTU]
**Cevabın biçimine bakın:** $1-2e^{-s}+e^{-2s}=\left(1-e^{-s}\right)^{2}$, yani

$$\mathcal{L}\{f\}=\left(\frac{1-e^{-s}}{s}\right)^{2}$$

Tam kare çıkması tesadüf değil: üçgen darbe, ==kare darbenin kendisiyle konvolüsyonudur==. $\dfrac{1-e^{-s}}{s}$ ifadesi $[0,1]$ aralığındaki birim kare darbenin dönüşümüdür ve konvolüsyon THEoREM'i çarpımı verir. (Konvolüsyon 4.2'de.)
[/KUTU]

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

---

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu dört sorunun cevabı kitabın anahtarında yok.** Aşağıdaki çözümler bize aittir; her biri ==ikinci bir yoldan bağımsız olarak doğrulanmıştır== (birim basamak gösterimi ya da türev THEoREM'i ile). Yine de kitabın cevabıyla karşılaştırma imkânınız olursa iyi olur.
[/KUTU]

[SORU] **2.** &nbsp; Tanımı kullanarak $f(t)=\sinh t$ için $\mathcal{L}\{f(t)\}$'yi bulunuz.
[CEVAP]
**Adım 1 — Üstel biçime aç.** $\sinh$ tabloda doğrudan yok; tanımını yazalım:

$$\sinh t=\frac{e^{t}-e^{-t}}{2}$$

**Adım 2 — İntegrali kur.**

$$\mathcal{L}\{\sinh t\}=\int_{0}^{\infty}e^{-st}\cdot\frac{e^{t}-e^{-t}}{2}\,dt=\frac{1}{2}\int_{0}^{\infty}\left(e^{-(s-1)t}-e^{-(s+1)t}\right)dt$$

**Adım 3 — İki üstel integral.**

$$=\frac{1}{2}\left[\frac{1}{s-1}-\frac{1}{s+1}\right]=\frac{1}{2}\cdot\frac{(s+1)-(s-1)}{(s-1)(s+1)}=\frac{1}{2}\cdot\frac{2}{s^{2}-1}$$

$$\boxed{\;\mathcal{L}\{\sinh t\}=\frac{1}{s^{2}-1}\qquad (s>1)\;}$$

[KUTU]
**Yakınsaklık koşuluna dikkat.** Birinci integralin yakınsaması için $s-1>0$, yani ==$s>1$== gerekir. Bu setteki tek soru burada koşulun $s>0$'dan farklı çıktığı sorudur; $e^{t}$ terimi $e^{-st}$'yi yenmemelidir.

Genel olarak $\mathcal{L}\{\sinh bt\}=\dfrac{b}{s^{2}-b^{2}}$ ve $\mathcal{L}\{\cosh bt\}=\dfrac{s}{s^{2}-b^{2}}$, her ikisi de $s>|b|$ için.
[/KUTU]

**Doğrulama.** $\sinh t$ ile $\sin t$ arasındaki bağ: $\mathcal{L}\{\sin bt\}=\dfrac{b}{s^{2}+b^{2}}$ formülünde $b\to ib$ konursa payda $s^{2}-b^{2}$ olur — beklenen sonuç. &#10003;
[/CEVAP]

[SORU] **4.** &nbsp; $f(t)=4$ &nbsp;($0<t<3$), &nbsp;$f(t)=2$ &nbsp;($t>3$)
[CEVAP]
**Adım 1 — İki parça, iki integral.** ==Bu kez ikinci parça sıfır değil==, sonsuza kadar süren integrali de hesaplamak gerekir.

$$\mathcal{L}\{f\}=\int_{0}^{3}4e^{-st}\,dt+\int_{3}^{\infty}2e^{-st}\,dt$$

**Adım 2 — Hesapla.**

$$\int_{0}^{3}4e^{-st}\,dt=\frac{4}{s}\left(1-e^{-3s}\right),\qquad \int_{3}^{\infty}2e^{-st}\,dt=\frac{2}{s}e^{-3s}$$

**Adım 3 — Topla.** $e^{-3s}$ katsayıları: $-4+2=-2$

$$\mathcal{L}\{f\}=\frac{4}{s}-\frac{2e^{-3s}}{s}$$

$$\boxed{\;\mathcal{L}\{f\}=\frac{2}{s}\left(2-e^{-3s}\right)\;}$$

**Doğrulama (birim basamakla).** Sıçramalar: $t=0$'da $0\to 4$ &nbsp;($+4$), &nbsp;$t=3$'te $4\to 2$ &nbsp;($-2$). Yani $f(t)=4u_{0}(t)-2u_{3}(t)$:

$$\mathcal{L}\{f\}=\frac{4}{s}-\frac{2e^{-3s}}{s}\;\checkmark$$
[/CEVAP]

[SORU] **6.** &nbsp; $f(t)=0$ &nbsp;($0<t<1$), &nbsp;$t$ &nbsp;($1<t<2$), &nbsp;$1$ &nbsp;($t>2$)
[CEVAP]
**Adım 1 — Sıfır parçayı at, kalan ikisini yaz.**

$$\mathcal{L}\{f\}=\int_{1}^{2}te^{-st}\,dt+\int_{2}^{\infty}e^{-st}\,dt$$

**Adım 2 — Birinci integral** (kısmi integrasyon, $u=t$):

$$\int_{1}^{2}te^{-st}\,dt=\left[-\frac{t}{s}e^{-st}\right]_{1}^{2}+\frac{1}{s}\int_{1}^{2}e^{-st}\,dt$$

$$=-\frac{2e^{-2s}}{s}+\frac{e^{-s}}{s}+\frac{e^{-s}-e^{-2s}}{s^{2}}$$

**Adım 3 — İkinci integral.**

$$\int_{2}^{\infty}e^{-st}\,dt=\frac{e^{-2s}}{s}$$

**Adım 4 — Topla.** $\dfrac{e^{-2s}}{s}$ katsayıları: $-2+1=-1$

$$\mathcal{L}\{f\}=\frac{e^{-s}-e^{-2s}}{s}+\frac{e^{-s}-e^{-2s}}{s^{2}}$$

$$\boxed{\;\mathcal{L}\{f\}=\left(e^{-s}-e^{-2s}\right)\left(\frac{1}{s}+\frac{1}{s^{2}}\right)\;}$$

[KUTU]
**Çarpanlara ayrılması tesadüf değil.** $\left(e^{-s}-e^{-2s}\right)$ çarpanı, fonksiyonun ==$1<t<2$ penceresinde açık== olduğunu söyler; $\left(\tfrac{1}{s}+\tfrac{1}{s^{2}}\right)$ ise o pencerede ne olduğunu ($1+t$ biçimli bir davranış). Pencere çarpanı her zaman $e^{-as}-e^{-bs}$ biçiminde çıkar.
[/KUTU]

**Doğrulama (birim basamakla).**

$$f(t)=t\,u_{1}(t)-t\,u_{2}(t)+u_{2}(t)$$

$t-1$ ve $t-2$ cinsine sokalım: $t\,u_{1}=(t-1)u_{1}+u_{1}$ &nbsp;ve&nbsp; $t\,u_{2}=(t-2)u_{2}+2u_{2}$

$$\mathcal{L}\{f\}=\left(\frac{e^{-s}}{s^{2}}+\frac{e^{-s}}{s}\right)-\left(\frac{e^{-2s}}{s^{2}}+\frac{2e^{-2s}}{s}\right)+\frac{e^{-2s}}{s}$$

$e^{-2s}/s$ katsayıları: $-2+1=-1$. Sonuç yukarıdakiyle aynı. &#10003;
[/CEVAP]

[SORU] **8.** &nbsp; $f(t)=2t$ &nbsp;($0\le t<1$), &nbsp;$2$ &nbsp;($1\le t<3$), &nbsp;$8-2t$ &nbsp;($t\ge 3$)
[CEVAP]
Bu bir **yamuk darbedir (trapezoidal pulse)**: $0$'dan $2$'ye çıkar, iki birim sabit kalır, sonra iner.

**Adım 1 — Fark yöntemiyle basamak gösterimi.** Her düğümde "yeni ifade eksi eski ifade":

$$f(t)=2t+u_{1}(t)\big[2-2t\big]+u_{3}(t)\big[(8-2t)-2\big]=2t+u_{1}(t)(2-2t)+u_{3}(t)(6-2t)$$

**Adım 2 — Çarpanları $t-a$ cinsine sok.** ==Bu adım olmadan öteleme THEoREM'i uygulanamaz:==

$$2-2t=-2(t-1),\qquad 6-2t=-2(t-3)$$

$$f(t)=2t-2(t-1)u_{1}(t)-2(t-3)u_{3}(t)$$

**Adım 3 — Dönüştür.**

$$\mathcal{L}\{f\}=\frac{2}{s^{2}}-\frac{2e^{-s}}{s^{2}}-\frac{2e^{-3s}}{s^{2}}$$

$$\boxed{\;\mathcal{L}\{f\}=\frac{2}{s^{2}}\left(1-e^{-s}-e^{-3s}\right)\;}$$

**Doğrulama (türev THEoREM'i ile).** $f'$ parçalı sabittir: $(0,1)$'de $2$, $(1,3)$'te $0$, $t>3$'te $-2$. Sıçramalar $t=1$'de $-2$, $t=3$'te $-2$:

$$f'(t)=2-2u_{1}(t)-2u_{3}(t)\;\Longrightarrow\;\mathcal{L}\{f'\}=\frac{2}{s}-\frac{2e^{-s}}{s}-\frac{2e^{-3s}}{s}$$

$f(0)=0$ olduğundan $\mathcal{L}\{f'\}=s\,\mathcal{L}\{f\}$, yani

$$\mathcal{L}\{f\}=\frac{1}{s}\left[\frac{2}{s}-\frac{2e^{-s}}{s}-\frac{2e^{-3s}}{s}\right]=\frac{2}{s^{2}}\left(1-e^{-s}-e^{-3s}\right)\;\checkmark$$

==İki bağımsız yol aynı sonucu verdi.==
[/CEVAP]

[KUTU]
**Bu dört sorunun ortak dersi.** Tanımdan integral almak her zaman çalışır ama parçalı fonksiyonlarda uzundur. **Birim basamak gösterimi** (4.4) aynı işi tabloyla yapar ve ==çapraz kontrol için idealdir==: bir yolla çöz, öbürüyle doğrula.

8. sorudaki **türev hilesi** üçüncü bir yoldur ve parçalı **doğrusal** fonksiyonlarda en hızlısıdır: türev parçalı sabit olur, onun dönüşümü de tek satırdır.
[/KUTU]

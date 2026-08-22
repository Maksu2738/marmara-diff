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

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**2.** &nbsp; $f(t)=\sinh t$

**4.** &nbsp; $f(t)=4$ &nbsp;($0<t<3$), &nbsp;$2$ &nbsp;($t>3$)

**6.** &nbsp; $f(t)=0$ &nbsp;($0<t<1$), &nbsp;$t$ &nbsp;($1<t<2$), &nbsp;$1$ &nbsp;($t>2$)

**8.** &nbsp; $f(t)=2t$ &nbsp;($0\le t<1$), &nbsp;$2$ &nbsp;($1\le t<3$), &nbsp;$8-2t$ &nbsp;($t\ge 3$)

[KUTU]
**İpuçları.** **2** tek gerçek "fonksiyon" sorusu: $\sinh t=\dfrac{e^{t}-e^{-t}}{2}$ yazıp iki üstel integral alın, $s>1$ koşulunu unutmayın.

**4** → 3 gibi ama ikinci parça sıfır değil, $\int_{3}^{\infty}$ da hesaplanacak.

**6** ve **8** → 5 ve 7 gibi, sadece parça sayısı fazla. **8**'in cevabı da tam kare çıkar; 7'deki gibi bir yamuk/üçgen darbedir.

**Doğrulama.** Cevap anahtarı olmasa da her sonuç sınanabilir: $s\to\infty$ iken $\mathcal{L}\{f\}\to 0$ olmalıdır (her Laplace dönüşümü için geçerli). Ayrıca ==başlangıç değer THEoREM'i== $\lim_{s\to\infty}s\,\mathcal{L}\{f\}=f(0^{+})$ hızlı bir kontrol verir: 5. soruda $s\cdot\left(\tfrac{1}{s^{2}}+\cdots\right)\to 0=f(0^{+})$ &#10003;
[/KUTU]

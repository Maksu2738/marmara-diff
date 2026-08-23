---
id: laplace-periyodik
menu: 4.4 Periyodik Fonksiyonlar
tip: konu
baslik: 4.4 &nbsp;Periyodik Fonksiyonların Laplace Dönüşümü
---

Bir $f$ fonksiyonu, tanımlı olduğu her $t$ için

$$f(t+P)=f(t)\qquad (P>0)$$

sağlıyorsa **$P$ periyotlu periyodik (periodic of period $P$)** denir. Örneğin $\sin bt$ ve $\cos bt$ fonksiyonları $\frac{2\pi}{b}$ periyotludur.

Periyodik fonksiyonların dönüşümünü hesaplamak için sonsuz integrali baştan sona almaya gerek yoktur — ==tek bir periyot yeter.==

[KUTU]
**THEoREM 9.10**

**Hipotez.** $f$, THEoREM 9.1'in hipotezlerini sağlayan $P$ periyotlu bir fonksiyon olsun.

**Sonuç.**

$$\mathcal{L}\{f(t)\}=\frac{\displaystyle\int_{0}^{P}e^{-st}f(t)\,dt}{1-e^{-Ps}} \tag{9.80}$$
[/KUTU]

---

### İspat — geometrik seri

Tanımdan başlayalım ve integrali periyotlara bölelim:

$$\mathcal{L}\{f(t)\}=\int_{0}^{\infty}e^{-st}f(t)\,dt=\int_{0}^{P}+\int_{P}^{2P}+\int_{2P}^{3P}+\dots+\int_{nP}^{(n+1)P}+\dots$$

Her integralde $t=u+nP$ değişken değişimi yapalım. Periyodiklik gereği $f(u+nP)=f(u)$, ayrıca $e^{-st}=e^{-s(u+nP)}=e^{-nPs}e^{-su}$:

$$\int_{nP}^{(n+1)P}e^{-st}f(t)\,dt=e^{-nPs}\int_{0}^{P}e^{-su}f(u)\,du$$

==Bütün integraller aynı çıktı;== yalnızca önlerindeki üstel çarpan değişiyor. Toplam:

$$\left[1+e^{-Ps}+e^{-2Ps}+\dots+e^{-nPs}+\dots\right]\int_{0}^{P}e^{-su}f(u)\,du$$

Köşeli parantezdeki seri, ilk terimi $1$ ve ortak oranı $r=e^{-Ps}$ olan bir **geometrik seridir**. $s>0$ için $r<1$ olduğundan seri yakınsar:

$$1+r+r^{2}+\dots=\frac{1}{1-r}=\frac{1}{1-e^{-Ps}}$$

Buradan $(9.80)$ elde edilir. $\blacksquare$

[KUTU]
**İspatın fikri tek cümlede:** Periyodiklik sayesinde ==sonsuz sayıda integral birbirinin aynısı çıkıyor==, aralarındaki tek fark bir üstel çarpan. Bu da toplamı geometrik seriye indirgiyor ve kapalı biçimde toplanabiliyor.

$\frac{1}{1-e^{-Ps}}$ paydası, "bu desen sonsuza kadar tekrarlıyor" bilgisinin cebirsel karşılığıdır.
[/KUTU]

---

[SORU] **Örnek 9.33.** &nbsp; $0\le t<4$ üzerinde
$$f(t)=\begin{cases}1, & 0\le t<2\\ -1, & 2\le t<4\end{cases}$$
ve diğer pozitif $t$ için $f(t+4)=f(t)$ ile tanımlanan **kare dalganın** Laplace dönüşümünü bulunuz.
[CEVAP]
**Adım 1 — Periyodu belirle.**

$f(t+4)=f(t)$ verildiğine göre $P=4$.

**Adım 2 — Tek periyot üzerinde integre et.**

$$\mathcal{L}\{f(t)\}=\frac{1}{1-e^{-4s}}\left[\int_{0}^{2}e^{-st}(1)\,dt+\int_{2}^{4}e^{-st}(-1)\,dt\right]$$

$$=\frac{1}{1-e^{-4s}}\left[\left(\frac{-e^{-st}}{s}\right)\Bigg|_{0}^{2}+\left(\frac{e^{-st}}{s}\right)\Bigg|_{2}^{4}\right]$$

Sınırları yerleştirelim:

$$=\frac{1}{1-e^{-4s}}\cdot\frac{1}{s}\left[\left(-e^{-2s}+1\right)+\left(e^{-4s}-e^{-2s}\right)\right]$$

$$=\frac{1-2e^{-2s}+e^{-4s}}{s\left(1-e^{-4s}\right)}$$

**Adım 3 — Sadeleştir.**

==Pay tamkare, payda iki kare farkı:==

$$1-2e^{-2s}+e^{-4s}=\left(1-e^{-2s}\right)^{2}$$

$$1-e^{-4s}=\left(1-e^{-2s}\right)\left(1+e^{-2s}\right)$$

Ortak çarpan sadeleşir:

$$\frac{\left(1-e^{-2s}\right)^{2}}{s\left(1-e^{-2s}\right)\left(1+e^{-2s}\right)}$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{1-e^{-2s}}{s\left(1+e^{-2s}\right)}\;}$$

[KUTU]
**Sadeleşmeyi kaçırmayın.** $e^{-2s}$ ifadesine geçici olarak $x$ derseniz pay $1-2x+x^{2}=(1-x)^{2}$, payda $s(1-x^{2})=s(1-x)(1+x)$ olur; sadeleşme anında görünür. ==Üstel ifadeleri tek bir değişken gibi düşünmek, bu bölümdeki hesapları belirgin biçimde kolaylaştırır.==

Sonuçtaki payda $1+e^{-2s}$ (artı işaretli) olması, dalganın ==yarım periyotta işaret değiştirdiğinin== izidir; sabit bir kare dalgada payda $1-e^{-Ps}$ kalırdı.
[/KUTU]

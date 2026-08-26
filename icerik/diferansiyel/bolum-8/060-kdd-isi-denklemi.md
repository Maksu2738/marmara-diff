---
id: kdd-isi
menu: 8.5 Isı Denklemi
tip: konu
baslik: 8.5 &nbsp;Isı Denklemi — Parabolik Denklemin Temsilcisi
---

Uzunluğu $L$ olan, yanal yüzeyi yalıtılmış ince bir çubuk düşünün. $u(x,t)$, $x$ noktasının $t$ anındaki sıcaklığı olsun.

$$\boxed{\;u_{t}=k\,u_{xx},\qquad 0<x<L,\quad t>0\;} \tag{8.10}$$

$k>0$ sabitine **ısı yayılım katsayısı (thermal diffusivity)** denir; malzemenin ısıyı ne hızla ilettiğini söyler.

**Yan koşullar** (uçları buzda tutulan çubuk):

$$u(0,t)=0,\qquad u(L,t)=0\qquad\text{(sınır)}$$
$$u(x,0)=f(x)\qquad\text{(başlangıç)}$$

---

### Çözüm

Örnek 8.7'de yöntemi yürütmüş ve şuraya varmıştık:

$$u(x,t)=\sum_{n=1}^{\infty}b_{n}\sin\frac{n\pi x}{L}\;e^{-k\left(\frac{n\pi}{L}\right)^{2}t} \tag{8.11}$$

Geriye tek iş kaldı: $b_{n}$'leri belirlemek. $t=0$ koyalım — üstel terim $1$ olur:

$$u(x,0)=\sum_{n=1}^{\infty}b_{n}\sin\frac{n\pi x}{L}=f(x)$$

==Bu tam olarak $f$'nin sinüs serisi açılımıdır== $(8.5)$:

$$\boxed{\;b_{n}=\frac{2}{L}\int_{0}^{L}f(x)\sin\frac{n\pi x}{L}\,dx\;} \tag{8.12}$$

$(8.11)$ ve $(8.12)$ birlikte problemin tam çözümüdür.

---

[SORU*] **Örnek 8.8.** &nbsp; Uzunluğu $L$ olan bir çubuk baştan sona $T_{0}$ sıcaklığındadır. $t=0$ anında iki ucu birden $0$ dereceye getirilip orada tutuluyor. $u(x,t)$'yi bulunuz.
[CEVAP]
**Problem.**

$$u_{t}=k\,u_{xx},\qquad u(0,t)=u(L,t)=0,\qquad u(x,0)=T_{0}$$

**Adım 1 — Çözümün biçimi.** $(8.11)$ hazır:

$$u(x,t)=\sum_{n=1}^{\infty}b_{n}\sin\frac{n\pi x}{L}\;e^{-k\left(\frac{n\pi}{L}\right)^{2}t}$$

**Adım 2 — Katsayılar.** $f(x)=T_{0}$ sabit; bu açılımı Örnek 8.6'da yapmıştık:

$$b_{n}=\frac{2T_{0}}{n\pi}\Big(1-(-1)^{n}\Big)=\begin{cases}\dfrac{4T_{0}}{n\pi},& n\text{ tek}\\[2mm] 0,& n\text{ çift}\end{cases}$$

**Adım 3 — Yerine koy.** Yalnız tek $n$'ler kaldığından $n=2m-1$ yazalım:

$$\boxed{\;u(x,t)=\frac{4T_{0}}{\pi}\sum_{m=1}^{\infty}\frac{1}{2m-1}\sin\frac{(2m-1)\pi x}{L}\;e^{-k\left(\frac{(2m-1)\pi}{L}\right)^{2}t}\;}$$

**Açık ilk terimler:**

$$u=\frac{4T_{0}}{\pi}\left[\sin\frac{\pi x}{L}e^{-k\frac{\pi^{2}}{L^{2}}t}+\frac{1}{3}\sin\frac{3\pi x}{L}e^{-9k\frac{\pi^{2}}{L^{2}}t}+\frac{1}{5}\sin\frac{5\pi x}{L}e^{-25k\frac{\pi^{2}}{L^{2}}t}+\cdots\right]$$

**Kontroller.**

- $x=0$ ve $x=L$'de bütün sinüsler sıfır &nbsp;→&nbsp; $u=0$ &#10003;
- $t\to\infty$ iken bütün üsteller sıfıra gider &nbsp;→&nbsp; $u\to 0$ &#10003; (çubuk tamamen soğur)
- $t=0$'da seri, Örnek 8.6'daki $T_{0}$ açılımıdır &#10003;
[/CEVAP]

---

### Çözümün okunuşu

[KUTU]
**Üsteldeki $n^{2}$ her şeyi anlatır.**

$$e^{-k\left(\frac{n\pi}{L}\right)^{2}t}$$

Sönüm hızı ==$n$ ile değil, $n^{2}$ ile== artar. $n=3$ terimi, $n=1$ teriminden **dokuz kat** hızlı söner.

**Sonucu:** başlangıçtaki keskin ayrıntılar (yüksek $n$, kısa dalga boyu) ==çok çabuk silinir==; geriye en yumuşak bileşen olan $n=1$ kalır. Kısa bir süre sonra sıcaklık dağılımı, başlangıçta ne olursa olsun, tek bir sinüs kamburuna benzer:

$$u(x,t)\approx b_{1}\sin\frac{\pi x}{L}e^{-k\frac{\pi^{2}}{L^{2}}t}\qquad (t \text{ büyükken})$$

8.1'de "ısı denklemi her şeyi düzleştirir" derken kastedilen budur — ==ve geriye çözülememesinin sebebi de bu.== Silinen ayrıntıyı geri getirecek bilgi kalmıyor.
[/KUTU]

**Karakteristik zaman.** İlk terimin sönmesi için gereken süre

$$\tau=\frac{L^{2}}{k\pi^{2}}$$

mertebesindedir. ==$L^{2}$ ile arttığına dikkat:== çubuğun boyu iki katına çıkarsa soğuma süresi dört katına çıkar.

---

### Yalıtılmış uçlar

Sınır koşulu $u_{x}(0,t)=u_{x}(L,t)=0$ ise özfonksiyonlar $(8.9)$'a göre kosinüs olur:

$$u(x,t)=\frac{a_{0}}{2}+\sum_{n=1}^{\infty}a_{n}\cos\frac{n\pi x}{L}\;e^{-k\left(\frac{n\pi}{L}\right)^{2}t},\qquad a_{n}=\frac{2}{L}\int_{0}^{L}f(x)\cos\frac{n\pi x}{L}\,dx$$

[KUTU]
**Fark nerede ortaya çıkıyor?** $n=0$ terimi ==sönmez== ($e^{0}=1$). Yani $t\to\infty$ iken

$$u\to\frac{a_{0}}{2}=\frac{1}{L}\int_{0}^{L}f(x)\,dx$$

Çubuk sıfıra değil, ==başlangıçtaki ortalama sıcaklığa== gider. Fiziksel olarak doğru: uçlar yalıtılmışsa ısı dışarı kaçamaz, yalnız içeride ==eşitlenir.== Uçlar buzdayken ise ısı dışarı akar ve her şey sıfıra iner.
[/KUTU]

---

[CLAUDE] Isı denklemi sorusunu çözerken izlenecek sıra
Sınavda bu problem neredeyse hep aynı kalıptadır. ==Ezberlenecek şey formül değil, sıra:==

1. **Sınır koşuluna bak** → sinüs mü kosinüs mü? ($u=0$ ise sinüs, $u_{x}=0$ ise kosinüs)
2. **Çözüm kalıbını yaz** → $(8.11)$; türetmeyi tekrar yapmana gerek yok (istenmiyorsa)
3. **Başlangıç koşulunu Fourier'e sok** → tek integral, $(8.12)$
4. **Kontrol et** → $t=0$ ve $t\to\infty$

**Zaman kazandıran özel durum:** $f(x)$ zaten sinüslerden oluşuyorsa ==integral almayın.== Örneğin

$$f(x)=3\sin\frac{\pi x}{L}-\sin\frac{4\pi x}{L}$$

verilmişse katsayılar doğrudan okunur: $b_{1}=3$, $b_{4}=-1$, gerisi sıfır. Çözüm tek satır:

$$u=3\sin\frac{\pi x}{L}e^{-k\frac{\pi^{2}}{L^{2}}t}-\sin\frac{4\pi x}{L}e^{-16k\frac{\pi^{2}}{L^{2}}t}$$

Sınavda integral alarak vakit harcamadan önce ==$f$'ye bir bakın.==

**Boyut kontrolü:** üsteldeki $k\left(\frac{n\pi}{L}\right)^{2}t$ ifadesi ==boyutsuz olmalı.== $k$'nın birimi m²/s, $\left(\frac{1}{L}\right)^{2}$ 1/m², $t$ saniye — çarpımları boyutsuz &#10003;. Formülü yanlış hatırladıysanız bu kontrol yakalar.
[/CLAUDE]

---
id: ornek-radyoaktif-bernoulli
tip: ornek
baslik: Daha Gerçekçi Bozunma Modeli &mdash; Bernoulli Denklemi
---

<p style="margin-bottom: 1rem;">Bu örnek derste işlendi. Bir önceki örnekteki basit üstel bozunma modeline ikinci dereceden bir düzeltme terimi eklenirse denklem ==Bernoulli== tipine dönüşür; böylece iki konu birleşir.</p>

[SORU] Bozunma sürecine, örneğin ürünlerin birikmesinden kaynaklanan ikinci dereceden bir düzeltme terimi eklendiğinde model $\displaystyle\frac{dx}{dt}=kx-\lambda x^{2}$ hâlini alır ($k,\lambda>0$). Bu denklemi çözünüz.
[CEVAP]
**Adım 1 — Denklemi tanı.**

Terimleri düzenleyelim:

$$\frac{dx}{dt}-kx=-\lambda x^{2}$$

Bu, $x'+P(t)x=Q(t)x^{n}$ biçimindedir:

$$P(t)=-k,\qquad Q(t)=-\lambda,\qquad n=2$$

Yani ==Bernoulli== denklemidir. $n=2\neq 0,1$ olduğu için doğrusal değildir; dönüşüm gerekir.

**Adım 2 — Dönüşümü uygula.**

$$v=x^{1-n}=x^{1-2}=x^{-1}$$

Türevini alalım:

$$\frac{dv}{dt}=-x^{-2}\frac{dx}{dt}\;\Longrightarrow\;\frac{dx}{dt}=-x^{2}\frac{dv}{dt}$$

Denklemde yerine koyalım:

$$-x^{2}\frac{dv}{dt}-kx=-\lambda x^{2}$$

Her iki tarafı $-x^{2}$ ile bölelim:

$$\frac{dv}{dt}+k\,x^{-1}=\lambda\;\Longrightarrow\;\frac{dv}{dt}+kv=\lambda$$

Denklem artık $v$'ye göre ==doğrusaldır==.

**Adım 3 — İntegral çarpanıyla çöz.**

$$\mu(t)=e^{\int k\,dt}=e^{kt}$$

$$\frac{d}{dt}\left(e^{kt}v\right)=\lambda e^{kt}$$

İntegre edersek:

$$e^{kt}v=\frac{\lambda}{k}e^{kt}+c\;\Longrightarrow\;v=\frac{\lambda}{k}+ce^{-kt}$$

**Adım 4 — $x$'e geri dön.**

$v=x^{-1}$ olduğundan:

$$\boxed{\;x(t)=\left[\frac{\lambda}{k}+ce^{-kt}\right]^{-1}\;}$$

**Doğrulama.** $v=\dfrac{\lambda}{k}+ce^{-kt}$ ise $v'=-kce^{-kt}$ olur ve

$$v'+kv=-kce^{-kt}+k\left(\frac{\lambda}{k}+ce^{-kt}\right)=-kce^{-kt}+\lambda+kce^{-kt}=\lambda$$

3. adımdaki denklemle aynı; çözüm doğrudur.

[KUTU]
**Uzun vadeli davranış:** $t\to\infty$ iken $e^{-kt}\to 0$ olur, dolayısıyla

$$x(t)\;\longrightarrow\;\frac{k}{\lambda}$$

Yani miktar sıfıra gitmez, $k/\lambda$ değerinde bir ==denge seviyesine== yerleşir. Basit üstel modelde ($\lambda=0$) miktar sürekli azalırken, düzeltme terimi eklendiğinde sistem bir dengeye oturur.

Bu denklem matematiksel olarak ==lojistik denklemle== aynıdır; nüfus artışında da tıpatıp bu form karşımıza çıkar ve $k/\lambda$ oranı ortamın taşıma kapasitesine karşılık gelir.
[/KUTU]

---
id: vize-3
menu: Soru 3 &mdash; Bernoulli Denklemi
tip: sorular
rozet: Vize 3
baslik: Bernoulli Diferansiyel Denklemi
---

<p style="margin-bottom: 1rem;">İlgili konu: <a href="#bolum-2-3-b">2.3/B Bernoulli Denklemleri</a> &bull; Birebir aynısı: <a href="#odev-4">Ödev 4</a></p>

[SORU] Aşağıdaki Bernoulli diferansiyel denklemini çözünüz: $\displaystyle \frac{dy}{dx}+\frac{2}{x}\,y=x^{2}y^{3}$
[CEVAP]
**Adım 1 — Kalıba otur.**

Bernoulli denkleminin genel biçimi

$$y'+P(x)\,y=Q(x)\,y^{n}$$

Bizim denklemde

$$P(x)=\frac{2}{x},\qquad Q(x)=x^{2},\qquad n=3$$

**Adım 2 — Dönüşümü seç.**

$$v=y^{1-n}=y^{1-3}=y^{-2}$$

Türevini alalım:

$$v'=-2y^{-3}y'\ \Longrightarrow\ y'=-\frac{y^{3}}{2}\,v'$$

**Adım 3 — Denkleme yerleştir.**

$$-\frac{y^{3}}{2}v'+\frac{2}{x}y=x^{2}y^{3}$$

Her iki tarafı $-\dfrac{2}{y^{3}}$ ile çarpalım:

$$v'-\frac{4}{x}\cdot\underbrace{y^{-2}}_{=\,v}=-2x^{2}$$

$$v'-\frac{4}{x}\,v=-2x^{2}$$

Bu artık ==birinci mertebeden doğrusal== bir denklemdir.

**Adım 4 — İntegral çarpanı.**

$P(x)=-\dfrac{4}{x}$ olduğundan

$$\mu=e^{\int P\,dx}=e^{-4\ln x}=e^{\ln x^{-4}}=\frac{1}{x^{4}}$$

Denklemi $\mu$ ile çarpalım:

$$\frac{1}{x^{4}}v'-\frac{4}{x^{5}}v=-\frac{2}{x^{2}}$$

Sol taraf tam bir türevdir:

$$\frac{d}{dx}\left[\frac{v}{x^{4}}\right]=-\frac{2}{x^{2}}$$

**Adım 5 — İntegre et.**

$$\frac{v}{x^{4}}=\int-\frac{2}{x^{2}}\,dx=\frac{2}{x}+C$$

$$v=x^{4}\left(\frac{2}{x}+C\right)=2x^{3}+Cx^{4}$$

**Adım 6 — $y$'ye dön.** $v=y^{-2}$ olduğundan

$$\boxed{\,y^{-2}=x^{4}\left(\frac{2}{x}+C\right)=2x^{3}+Cx^{4}\,}$$

İstenirse açık biçimde:

$$y=\pm\frac{1}{\sqrt{x^{3}(2+Cx)}}$$

---

**Doğrulama.** $v=2x^{3}+Cx^{4}$ için $v'=6x^{2}+4Cx^{3}$. 3. adımdaki doğrusal denklemde yerine koyalım:

$$v'-\frac{4}{x}v=\left(6x^{2}+4Cx^{3}\right)-\frac{4\left(2x^{3}+Cx^{4}\right)}{x}=6x^{2}+4Cx^{3}-8x^{2}-4Cx^{3}=-2x^{2}\quad\checkmark$$

**Kaybedilen çözüm.** 3. adımda $y^{3}$'e bölündüğü için $y\equiv 0$ dışarıda kaldı. $y\equiv 0$ başlangıçtaki denklemi sağlar ve hiçbir $C$ değeriyle elde edilemez; ==tekil çözümdür==.

[KUTU]
**Sınav notu.** Bu soru <a href="#odev-4">Ödev 4</a> ile ==birebir aynıdır==. Vizede ödevden aynen soru çıktığına göre finalde de ödevleri ve kitap alıştırmalarını çalışmak en yüksek getirili strateji.

Kritik ayrıntı: $v'+(1-n)P\,v=(1-n)Q$ formülünde $(1-n)$ çarpanı ==işaret değiştirir==. Burada $1-n=-2$ olduğu için $\frac{2}{x}\to-\frac{4}{x}$ ve $x^{2}\to-2x^{2}$ oldu. En sık hata bu işareti kaçırmaktır.
[/KUTU]

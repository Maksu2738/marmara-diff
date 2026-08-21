---
id: vize-2
menu: Soru 2 &mdash; İntegral Çarpanı
tip: sorular
rozet: Vize 2
baslik: İntegral Çarpanı Bularak Çözme
---

<p style="margin-bottom: 1rem;">İlgili konu: <a href="#bolum-2-1-d">2.1/D İntegral Çarpanları</a> &bull; <a href="#bolum-2-4-a">2.5/A İntegral Çarpanlarını Bulma</a></p>

[SORU] Aşağıdaki diferansiyel denklemi ==önce integral çarpanını bularak== çözünüz: $\displaystyle \left(5xy+4y^{2}+1\right)dx+\left(x^{2}+2xy\right)dy=0$
[CEVAP]
**Adım 1 — Denklem tam mı?**

$$M=5xy+4y^{2}+1,\qquad N=x^{2}+2xy$$

$$\frac{\partial M}{\partial y}=5x+8y,\qquad \frac{\partial N}{\partial x}=2x+2y$$

$5x+8y\neq 2x+2y$ olduğundan denklem ==tam değildir==. Bir integral çarpanı aramamız gerekir.

**Adım 2 — Çarpan yalnız $x$'e mi bağlı?**

Şu ifadeyi hesaplayalım:

$$\frac{1}{N}\left(\frac{\partial M}{\partial y}-\frac{\partial N}{\partial x}\right)$$

Pay:

$$\frac{\partial M}{\partial y}-\frac{\partial N}{\partial x}=(5x+8y)-(2x+2y)=3x+6y=3(x+2y)$$

Payda:

$$N=x^{2}+2xy=x(x+2y)$$

Bölelim; $(x+2y)$ çarpanı sadeleşir:

$$\frac{1}{N}\left(\frac{\partial M}{\partial y}-\frac{\partial N}{\partial x}\right)=\frac{3(x+2y)}{x(x+2y)}=\frac{3}{x}$$

Sonuç ==yalnız $x$'in fonksiyonu== çıktı; demek ki $\mu=\mu(x)$ biçiminde bir integral çarpanı vardır.

[KUTU]
**Karar kuralı.** $\dfrac{1}{N}\left(M_{y}-N_{x}\right)$ sadece $x$'e bağlıysa &rarr; $\mu(x)=\exp\!\left(\displaystyle\int \frac{M_{y}-N_{x}}{N}\,dx\right)$.
Sadece $y$'ye bağlıysa &rarr; $\mu(y)=\exp\!\left(\displaystyle\int \frac{N_{x}-M_{y}}{M}\,dy\right)$ — ==işaretin ters döndüğüne dikkat==.
Sınavda önce birinciyi dene, sadeleşme olmazsa ikincisine geç.
[/KUTU]

**Adım 3 — İntegral çarpanını hesapla.**

$$\mu(x)=\exp\left(\int\frac{3}{x}\,dx\right)=e^{3\ln x}=e^{\ln x^{3}}=x^{3}$$

**Adım 4 — Denklemi $\mu$ ile çarp.**

$$x^{3}\left(5xy+4y^{2}+1\right)dx+x^{3}\left(x^{2}+2xy\right)dy=0$$

$$\underbrace{\left(5x^{4}y+4x^{3}y^{2}+x^{3}\right)}_{M^{*}}dx+\underbrace{\left(x^{5}+2x^{4}y\right)}_{N^{*}}dy=0$$

Tamlığı kontrol edelim:

$$\frac{\partial M^{*}}{\partial y}=5x^{4}+8x^{3}y,\qquad \frac{\partial N^{*}}{\partial x}=5x^{4}+8x^{3}y\quad\checkmark$$

Artık tam.

**Adım 5 — Potansiyel fonksiyonu bul.**

$$F=\int\left(5x^{4}y+4x^{3}y^{2}+x^{3}\right)dx=x^{5}y+x^{4}y^{2}+\frac{x^{4}}{4}+\phi(y)$$

$y$'ye göre türev alıp $N^{*}$ ile eşleştirelim:

$$\frac{\partial F}{\partial y}=x^{5}+2x^{4}y+\phi'(y)\ \overset{!}{=}\ x^{5}+2x^{4}y$$

$$\phi'(y)=0\ \Longrightarrow\ \phi(y)=\text{sabit}$$

**Adım 6 — Genel çözüm.**

$$\boxed{\,x^{5}y+x^{4}y^{2}+\frac{x^{4}}{4}=C\,}$$

---

**Doğrulama.** $F=x^{5}y+x^{4}y^{2}+\frac{x^{4}}{4}$ için

$$F_{x}=5x^{4}y+4x^{3}y^{2}+x^{3}=M^{*}\ \checkmark,\qquad F_{y}=x^{5}+2x^{4}y=N^{*}\ \checkmark$$

[KUTU]
**Sınav notu.** Kritik adım 2. adımdaki sadeleşmedir: $3x+6y$ ile $x^{2}+2xy$ ifadelerinin ==ortak çarpanını görmek== ($x+2y$). Görmezsen ifade $x$'e bağlı görünmez ve yanlış yola sapılır. Böyle sorularda payı ve paydayı her zaman çarpanlara ayırmayı dene.
[/KUTU]

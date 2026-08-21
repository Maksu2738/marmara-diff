---
id: vize-1
menu: Soru 1 &mdash; Tam Denklem
tip: sorular
rozet: Vize 1
baslik: Tam Diferansiyel Denklem ve Başlangıç Koşulu
---

<p style="margin-bottom: 1rem;">İlgili konu: <a href="#bolum-2-1-b">2.1/B Tam Diferansiyel Denklemler</a> &bull; <a href="#bolum-2-1-c">2.1/C Tam Denklemlerin Çözümü</a></p>

[SORU] Aşağıdaki diferansiyel denklemi ele alınız: $\displaystyle (Axy-3)\,dx+\left(x^{2}+4y\right)dy=0,\qquad y(1)=2$ <br>**(a)** $A$'nın hangi değeri için denklem ==tam== olur? <br>**(b)** Bu $A$ değeri için denklemi çözerek ==kapalı (implicit)== çözümü bulunuz.
[CEVAP]
**(a) Tamlık koşulu.**

Denklemi $M(x,y)\,dx+N(x,y)\,dy=0$ biçiminde okuyalım:

$$M=Axy-3,\qquad N=x^{2}+4y$$

Tamlık koşulu $\dfrac{\partial M}{\partial y}=\dfrac{\partial N}{\partial x}$'tir. Kısmi türevleri alalım:

$$\frac{\partial M}{\partial y}=Ax,\qquad \frac{\partial N}{\partial x}=2x$$

Eşitleyelim:

$$Ax=2x\ \Longrightarrow\ \boxed{A=2}$$

**(b) $A=2$ için çözüm.**

Denklem şu hâle gelir:

$$(2xy-3)\,dx+\left(x^{2}+4y\right)dy=0$$

Denklem tam olduğuna göre $\dfrac{\partial F}{\partial x}=M$ ve $\dfrac{\partial F}{\partial y}=N$ olacak biçimde bir $F(x,y)$ potansiyel fonksiyonu vardır.

**Adım 1 —** $M$'yi $x$'e göre integre et ($y$ sabit tutulur):

$$F=\int(2xy-3)\,dx=x^{2}y-3x+\phi(y)$$

Sabit yerine $\phi(y)$ yazdık; çünkü $y$'ye bağlı her şey $x$'e göre türevde kaybolur.

**Adım 2 —** Bulduğumuz $F$'in $y$'ye göre türevini $N$ ile eşleştir:

$$\frac{\partial F}{\partial y}=x^{2}+\phi'(y)\ \overset{!}{=}\ x^{2}+4y$$

$$\phi'(y)=4y\ \Longrightarrow\ \phi(y)=2y^{2}$$

**Adım 3 —** Genel çözüm $F(x,y)=C$:

$$x^{2}y-3x+2y^{2}=C$$

**Adım 4 — Başlangıç koşulunu uygula.** $y(1)=2$, yani $x=1$ iken $y=2$:

$$1^{2}\cdot 2-3\cdot 1+2\cdot 2^{2}=2-3+8=7=C$$

Aranan kapalı çözüm:

$$\boxed{\,x^{2}y-3x+2y^{2}-7=0\,}$$

---

**Doğrulama.** $F=x^{2}y-3x+2y^{2}-7$ için $F_{x}=2xy-3=M$ ✓ ve $F_{y}=x^{2}+4y=N$ ✓. Ayrıca $(x,y)=(1,2)$ noktası denklemi sağlıyor: $2-3+8-7=0$ ✓.

[KUTU]
**Sınav notu.** Bu soru tipi iki adımı birden yokluyor: önce parametreyi tamlık koşulundan bulmak, sonra tam denklemi çözmek. $\phi(y)$'yi unutup düz integral almak en sık yapılan hatadır. Ayrıca cevabın ==kapalı== biçimde istendiğine dikkat et — $y$'yi yalnız bırakmaya çalışmak gerekmiyor (burada zaten ikinci dereceden bir denklem çözmek gerekirdi).
[/KUTU]

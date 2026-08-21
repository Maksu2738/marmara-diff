---
id: vize-5
menu: Soru 5 &mdash; Belirsiz Katsayılar
tip: sorular
rozet: Vize 5
baslik: Belirsiz Katsayılar Yöntemi
---

<p style="margin-bottom: 1rem;">İlgili konu: <a href="#bolum-4-3">3.3 Belirsiz Katsayılar Yöntemi</a> &bull; <a href="#bolum-4-2">3.2 Sabit Katsayılı Homojen Denklem</a></p>

[SORU] Aşağıdaki diferansiyel denklemi ==belirsiz katsayılar yöntemiyle== çözünüz: $\displaystyle y''-3y'-4y=6e^{2x}+8x$
[CEVAP]
**Adım 1 — Tümleyen (homojen) çözümü bul.**

Önce $y''-3y'-4y=0$ denklemini çözelim. $y=e^{mx}$ denersek $y'=me^{mx}$, $y''=m^{2}e^{mx}$ olur:

$$m^{2}e^{mx}-3me^{mx}-4e^{mx}=0$$

$e^{mx}\neq 0$ olduğundan karakteristik denklem:

$$m^{2}-3m-4=0\ \Longrightarrow\ (m-4)(m+1)=0\ \Longrightarrow\ m_{1}=4,\quad m_{2}=-1$$

Kökler farklı ve reel; tümleyen çözüm:

$$y_{c}=c_{1}e^{4x}+c_{2}e^{-x}$$

**Adım 2 — Özel çözüm için deneme fonksiyonunu kur.**

Sağ taraf iki parçadan oluşuyor; her birinin ürettiği fonksiyon kümesine bakalım:

$$6e^{2x}\ \longrightarrow\ S_{1}=\left\{e^{2x}\right\},\qquad 8x\ \longrightarrow\ S_{2}=\left\{x,\,1\right\}$$

[KUTU]
**Çakışma kontrolü.** Deneme kümesindeki hiçbir terim $y_{c}$'de görünmüyor ($e^{4x}$ ve $e^{-x}$ var, $e^{2x}$ yok; polinom terimi de yok). Bu yüzden ==$x$ ile çarpma düzeltmesi gerekmez==. Eğer sağ tarafta örneğin $e^{4x}$ olsaydı, deneme fonksiyonunu $Axe^{4x}$ yapmak zorunda kalırdık.
[/KUTU]

Deneme çözümü:

$$y_{p}=Ae^{2x}+Bx+C$$

$$y_{p}'=2Ae^{2x}+B,\qquad y_{p}''=4Ae^{2x}$$

**Adım 3 — Denkleme yerleştir.**

$$4Ae^{2x}-3\left(2Ae^{2x}+B\right)-4\left(Ae^{2x}+Bx+C\right)=6e^{2x}+8x$$

Benzer terimleri toplayalım:

$$\left(4A-6A-4A\right)e^{2x}-4Bx+\left(-3B-4C\right)=6e^{2x}+8x$$

$$-6Ae^{2x}-4Bx+\left(-3B-4C\right)=6e^{2x}+8x+0$$

**Adım 4 — Katsayıları eşleştir.**

- $e^{2x}$: &nbsp; $-6A=6\ \Rightarrow\ \boxed{A=-1}$
- $x$: &nbsp; $-4B=8\ \Rightarrow\ \boxed{B=-2}$
- sabit: &nbsp; $-3B-4C=0\ \Rightarrow\ -3(-2)-4C=0\ \Rightarrow\ 6=4C\ \Rightarrow\ \boxed{C=\dfrac{3}{2}}$

Özel çözüm:

$$y_{p}=-e^{2x}-2x+\frac{3}{2}$$

**Adım 5 — Genel çözüm.**

$$\boxed{\,y=c_{1}e^{4x}+c_{2}e^{-x}-e^{2x}-2x+\frac{3}{2}\,}$$

---

**Doğrulama.** $y_{p}=-e^{2x}-2x+\frac{3}{2}$ için $y_{p}'=-2e^{2x}-2$ ve $y_{p}''=-4e^{2x}$. Denklemde yerine koyalım:

$$-4e^{2x}-3\left(-2e^{2x}-2\right)-4\left(-e^{2x}-2x+\tfrac{3}{2}\right)$$

$$=-4e^{2x}+6e^{2x}+6+4e^{2x}+8x-6=6e^{2x}+8x\quad\checkmark$$

[KUTU]
**Sınav notu.** Sağ tarafta ==iki farklı tip== toplandığında ($e^{2x}$ ve $8x$) her tip için ayrı deneme terimi yazılır ve hepsi tek bir $y_{p}$'de toplanır. $8x$ için yalnız $Bx$ yazmak yetmez — polinomun ==tam derecesi== alınmalı, yani $Bx+C$. Sabit terimi unutmak, sınavda bu soruda en çok puan kaybettiren hatadır.
[/KUTU]

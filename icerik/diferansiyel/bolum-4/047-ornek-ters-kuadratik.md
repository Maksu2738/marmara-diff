---
id: ornek-ters-kuadratik
menu: 4.2 Örnek — İndirgenemez Kuadratik Çarpan
tip: ornek
baslik: 4.2 &nbsp;Çözümlü Örnek — Paydada İndirgenemez Kuadratik Çarpan
---

Örnek 9.21 ve 9.22'de payda hep **doğrusal çarpanlara** ayrılıyordu. Payda çarpanlarına ayrılamayan ikinci dereceden bir ifade içerdiğinde kısmi kesir kurulumu değişir.

[SORU] **Örnek 9.23.** &nbsp; Tablo 9.1'i kullanarak $\displaystyle\mathcal{L}^{-1}\left\{\frac{5s^{2}-s-2}{(s+2)\left(s^{2}+1\right)}\right\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Doğru kurulumu seç.**

Payda, $s+2$ **doğrusal çarpanı** ile $s^{2}+1$ **indirgenemez kuadratik çarpanından (irreducible quadratic factor)** oluşuyor; ikisi de tekrarlı değil.

==Kuadratik çarpanın üstünde sabit değil, birinci dereceden bir ifade durur:==

$$\frac{5s^{2}-s-2}{(s+2)\left(s^{2}+1\right)}=\frac{A}{s+2}+\frac{Bs+C}{s^{2}+1}$$

[KUTU]
**Neden $Bs+C$?** Kısmi kesirlerde her terimin payı, paydasından **bir derece düşük** olmalıdır. Payda $s+2$ (birinci derece) ise pay sabittir; payda $s^{2}+1$ (ikinci derece) ise pay birinci derecedendir. $\frac{A}{s^{2}+1}$ yazmak yetersiz kalır ve denklem çözümsüz çıkar.
[/KUTU]

**Adım 2 — Ortak paydayla çarp.**

$$5s^{2}-s-2=A\left(s^{2}+1\right)+(Bs+C)(s+2) \tag{9.29}$$

**Adım 3 — Katsayıları bul.**

Kök koyma yöntemi burada **kısmen** işe yarar: yalnızca $s=-2$ gerçel kök verir.

$s=-2$: $\;20+2-2=20=A(5)\;\Longrightarrow\;A=4$

Kalan iki bilinmeyen için katsayı eşlemeye geçelim. $(9.29)$'u açalım:

$$5s^{2}-s-2=(A+B)s^{2}+(2B+C)s+(A+2C)$$

$$A+B=5,\qquad 2B+C=-1,\qquad A+2C=-2$$

$A=4$ olduğundan:

$$B=5-4=1,\qquad C=-1-2B=-3$$

**Kontrol.** Üçüncü denklem: $A+2C=4+2(-3)=-2\;\checkmark$

**Adım 4 — Tablodan oku.**

$$\frac{5s^{2}-s-2}{(s+2)\left(s^{2}+1\right)}=\frac{4}{s+2}+\frac{s-3}{s^{2}+1}$$

İkinci terimi ==tablodaki iki ayrı girdiye bölmek gerekir:==

$$\frac{s-3}{s^{2}+1}=\frac{s}{s^{2}+1}-3\cdot\frac{1}{s^{2}+1}$$

- $\dfrac{4}{s+2}$ → 2 numara, $a=-2$: $\;4e^{-2t}$
- $\dfrac{s}{s^{2}+1}$ → 4 numara, $b=1$: $\;\cos t$
- $\dfrac{1}{s^{2}+1}$ → 3 numara, $b=1$: $\;\sin t$

$$\boxed{\;\mathcal{L}^{-1}\left\{\frac{5s^{2}-s-2}{(s+2)\left(s^{2}+1\right)}\right\}=4e^{-2t}+\cos t-3\sin t\;}$$

[KUTU]
**Kuadratik terimi ikiye bölme alışkanlığı edinin.** $\dfrac{Bs+C}{s^{2}+b^{2}}$ biçimindeki her terim, tabloda tek bir girdiye karşılık gelmez; ==$\cos$ (payda $s$) ve $\sin$ (payda sabit) olmak üzere iki parçaya ayrılır.== Payda tamkare içeriyorsa ($\left(s+a\right)^{2}+b^{2}$) aynı bölme yapılır, sonuçta $e^{-at}\cos bt$ ve $e^{-at}\sin bt$ çıkar.
[/KUTU]

### Kısmi kesir kurulumu — özet

<div class="tablo-sar">
<table>
<tr><th>Paydadaki çarpan</th><th>Yazılacak terim(ler)</th></tr>
<tr><td>$s-a$ (tekrarsız doğrusal)</td><td>$\dfrac{A}{s-a}$</td></tr>
<tr><td>$(s-a)^{k}$ (tekrarlı doğrusal)</td><td>$\dfrac{A_{1}}{s-a}+\dfrac{A_{2}}{(s-a)^{2}}+\dots+\dfrac{A_{k}}{(s-a)^{k}}$</td></tr>
<tr><td>$s^{2}+bs+c$ (indirgenemez)</td><td>$\dfrac{Bs+C}{s^{2}+bs+c}$</td></tr>
<tr><td>$\left(s^{2}+bs+c\right)^{k}$</td><td>Her kuvvet için ayrı bir $\dfrac{B_{i}s+C_{i}}{\left(s^{2}+bs+c\right)^{i}}$</td></tr>
</table>
</div>

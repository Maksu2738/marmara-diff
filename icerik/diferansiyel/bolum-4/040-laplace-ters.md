---
id: laplace-ters
menu: 4.2 Ters Laplace Dönüşümü
tip: konu
baslik: 4.2 &nbsp;Ters Laplace Dönüşümü ve Dönüşüm Tablosu
---

Şimdiye kadarki soru şuydu: *$f$ verildiğinde dönüşümü $\mathcal{L}\{f\}=F$ nedir?* Şimdi **ters problemi** ele alıyoruz:

> *$F$ verildiğinde, dönüşümü $F$ olan $f$ fonksiyonu hangisidir?*

Böyle bir $f$ fonksiyonuna $F$'nin **ters dönüşümü (inverse transform)** denir ve $\mathcal{L}^{-1}\{F\}$ ile gösterilir:

$$\mathcal{L}\{f\}=F\quad\Longleftrightarrow\quad f=\mathcal{L}^{-1}\{F\}$$

Örnek 9.13'te gördüğümüz gibi, Laplace yönteminin ==en zahmetli adımı burasıdır.==

---

### Ters dönüşüm tek midir?

[KUTU]
**THEoREM 9.7**

**Hipotez.** $f$ ve $g$, $t\ge 0$ için **sürekli** iki fonksiyon olsun ve **aynı** Laplace dönüşümü $F$'ye sahip olsunlar.

**Sonuç.** Her $t\ge 0$ için $f(t)=g(t)$.
[/KUTU]

Yani bir $F$ fonksiyonunun **sürekli** bir ters dönüşümü varsa, ==o tektir.==

Ama "sürekli" koşulu vazgeçilmezdir; süreksiz ters dönüşümler pekâlâ vardır.

[SORU] **Örnek 9.19.** &nbsp; $F(s)=\dfrac{1}{s}$ fonksiyonunun ters dönüşümünün tek olmadığını, ancak sürekli olanının tek olduğunu gösteriniz.
[CEVAP]
$(9.2)$'den $\mathcal{L}\{1\}=\dfrac{1}{s}$ olduğunu biliyoruz; yani $f(t)=1$ bir ters dönüşümdür ve süreklidir.

Şimdi şu **süreksiz** fonksiyonu ele alalım:

$$g(t)=\begin{cases}1, & 0<t<3\\ 2, & t=3\\ 1, & t>3\end{cases}$$

Dönüşümünü hesaplayalım — integrali $t=3$'te bölelim:

$$\mathcal{L}\{g(t)\}=\int_{0}^{3}e^{-st}\,dt+\int_{3}^{\infty}e^{-st}\,dt=\left[-\frac{e^{-st}}{s}\right]_{0}^{3}+\lim_{R\to\infty}\left[-\frac{e^{-st}}{s}\right]_{3}^{R}$$

$$=\left(\frac{1}{s}-\frac{e^{-3s}}{s}\right)+\frac{e^{-3s}}{s}=\frac{1}{s}\qquad (s>0)$$

==Aynı dönüşümü verdi.== Demek ki $g$ de $F(s)=\frac{1}{s}$'nin bir ters dönüşümüdür.

**Neden fark etmedi?** Tek bir noktadaki ($t=3$) değer değişikliği integrali etkilemez — bir noktanın "genişliği" sıfırdır.

THEoREM 9.7 gereği **sürekli** ters dönüşüm yalnızca $f(t)=1$'dir. Bu yüzden

$$\mathcal{L}^{-1}\left\{\frac{1}{s}\right\}=1$$

yazarız; buradaki eşitlik ==tek sürekli ters dönüşümü kastetmektedir.==

---

### Ters dönüşüm nasıl bulunur?

Doğrudan belirleme (karmaşık düzlemde integral gerektirir) bu derste ele alınmaz. Bizim yolumuz **dönüşüm tablosu** kullanmaktır.

Tabloyu kullanabilmek için genelde verilen $F(s)$ üzerinde ==bir miktar hazırlık işlemi== yapmak gerekir: tamkareye tamamlama, kısmi kesirlere ayırma, sabit çarpanları düzenleme. Bir sonraki bölüm bu tekniklere ayrılmıştır.

---

### Tablo 9.1 — Laplace Dönüşümleri

<div class="tablo-sar">
<table>
<tr><th>#</th><th>$f(t)=\mathcal{L}^{-1}\{F(s)\}$</th><th>$F(s)=\mathcal{L}\{f(t)\}$</th></tr>
<tr><td>1</td><td>$1$</td><td>$\dfrac{1}{s}$</td></tr>
<tr><td>2</td><td>$e^{at}$</td><td>$\dfrac{1}{s-a}$</td></tr>
<tr><td>3</td><td>$\sin bt$</td><td>$\dfrac{b}{s^{2}+b^{2}}$</td></tr>
<tr><td>4</td><td>$\cos bt$</td><td>$\dfrac{s}{s^{2}+b^{2}}$</td></tr>
<tr><td>5</td><td>$\sinh bt$</td><td>$\dfrac{b}{s^{2}-b^{2}}$</td></tr>
<tr><td>6</td><td>$\cosh bt$</td><td>$\dfrac{s}{s^{2}-b^{2}}$</td></tr>
<tr><td>7</td><td>$t^{n}\;(n=1,2,\dots)$</td><td>$\dfrac{n!}{s^{n+1}}$</td></tr>
<tr><td>8</td><td>$t^{n}e^{at}\;(n=1,2,\dots)$</td><td>$\dfrac{n!}{(s-a)^{n+1}}$</td></tr>
<tr><td>9</td><td>$t\sin bt$</td><td>$\dfrac{2bs}{\left(s^{2}+b^{2}\right)^{2}}$</td></tr>
<tr><td>10</td><td>$t\cos bt$</td><td>$\dfrac{s^{2}-b^{2}}{\left(s^{2}+b^{2}\right)^{2}}$</td></tr>
<tr><td>11</td><td>$e^{-at}\sin bt$</td><td>$\dfrac{b}{(s+a)^{2}+b^{2}}$</td></tr>
<tr><td>12</td><td>$e^{-at}\cos bt$</td><td>$\dfrac{s+a}{(s+a)^{2}+b^{2}}$</td></tr>
<tr><td>13</td><td>$\dfrac{\sin bt-bt\cos bt}{2b^{3}}$</td><td>$\dfrac{1}{\left(s^{2}+b^{2}\right)^{2}}$</td></tr>
<tr><td>14</td><td>$\dfrac{t\sin bt}{2b}$</td><td>$\dfrac{s}{\left(s^{2}+b^{2}\right)^{2}}$</td></tr>
<tr><td>15</td><td>$u_{a}(t)$ (birim basamak)</td><td>$\dfrac{e^{-as}}{s}$</td></tr>
<tr><td>16</td><td>$u_{a}(t)f(t-a)$</td><td>$e^{-as}F(s)$</td></tr>
</table>
</div>

[KUTU]
**Tabloyu okurken dikkat edilecekler:**

- **3-4 ile 5-6 karışır.** Trigonometrik olanların paydası $s^{2}+b^{2}$, hiperbolik olanlarınki $s^{2}-b^{2}$. ==İşaret tek ayrımdır.==
- **11-12'deki $a$ işareti.** Tabloda $e^{-at}$ ve $(s+a)$ birlikte yazılmıştır. Elinizdeki ifadede $(s-3)^{2}$ varsa $a=-3$ demektir ve cevapta $e^{3t}$ çıkar.
- **7 numaradaki $n!$.** $\mathcal{L}\{t^{n}\}=\frac{n!}{s^{n+1}}$; paydaki faktöriyeli unutmak sık yapılan hatadır. $n=1$ için $\frac{1}{s^{2}}$ çıkar, $(9.3)$ ile tutar.
- **15-16 numaralar** birim basamak fonksiyonuyla ilgilidir ve süreksiz zorlamalı problemlerde (4.4) kullanılacaktır.
[/KUTU]

---

[CLAUDE] Ters dönüşüm için karar ağacı ve iki kısayol
**Paydaya bakın, gerisi mekanik:**

1. **Çarpanlanıyor, hepsi farklı** → kısmi kesirler, **kapatma yöntemi** (cover-up): $\dfrac{A}{s-a}$ için $A$, ifadede $(s-a)$'yı kapatıp $s=a$ koyarak bulunur. Sistem kurmaya gerek yok.
2. **Tekrarlı çarpan** $(s-a)^{k}$ → payı $s-a$ cinsine sokun: $3s+1=3(s-a)+\ldots$ biçiminde.
3. **İndirgenemez kuadratik** ($\Delta<0$) → **tamkareye tamamlayın**, payı da aynı cinse sokun.

**Ezberlenmeye değer iki sonuç:**

$$\mathcal{L}^{-1}\left\{\frac{1}{(s-a)(s-b)}\right\}=\frac{e^{at}-e^{bt}}{a-b},\qquad \mathcal{L}^{-1}\left\{\frac{1}{s\left(s^{2}+b^{2}\right)}\right\}=\frac{1-\cos bt}{b^{2}}$$

Birincisi neredeyse her ikinci mertebe probleminde, ikincisi de her "sabit zorlama + salınım" probleminde çıkıyor. ==İkisi de kısmi kesirleri tamamen atlatır.==
[/CLAUDE]

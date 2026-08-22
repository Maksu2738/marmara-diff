---
id: ornek-seri-cozum
menu: 5.2 Örnek — Adım Adım Seri Çözümü
tip: ornek
baslik: 5.2 &nbsp;Çözümlü Örnek — Kuvvet Serisi Çözümünün Bulunması
---

[SORU*] **Örnek 5.4.** &nbsp; $\displaystyle y''+xy'+(x^{2}+2)y=0$ denkleminin $x$ kuvvetlerinde (yani $x_{0}=0$ etrafında) kuvvet serisi çözümünü bulunuz.
[CEVAP]
Örnek 5.1'de bu denklemin bütün noktalarının adi nokta olduğunu görmüştük; özel olarak $x_{0}=0$ da adi noktadır. THEoREM 5.1 gereği aranan türden lineer bağımsız iki çözüm mevcuttur. ==Aşağıdaki yöntem ikisini birden aynı anda verir.==

**Adım 1 — Çözümü seri olarak varsay ve türevlerini yaz.**

$$y=\sum_{n=0}^{\infty}c_{n}x^{n} \tag{5.10}$$

Terim terime türeterek:

$$y'=\sum_{n=1}^{\infty}n\,c_{n}x^{n-1},\qquad y''=\sum_{n=2}^{\infty}n(n-1)c_{n}x^{n-2}$$

**Adım 2 — Denkleme yerleştir.**

$$\sum_{n=2}^{\infty}n(n-1)c_{n}x^{n-2}+x\sum_{n=1}^{\infty}n\,c_{n}x^{n-1}+x^{2}\sum_{n=0}^{\infty}c_{n}x^{n}+2\sum_{n=0}^{\infty}c_{n}x^{n}=0$$

$x$ toplam indisinden bağımsız olduğu için içeri alınabilir:

$$\sum_{n=2}^{\infty}n(n-1)c_{n}x^{n-2}+\sum_{n=1}^{\infty}n\,c_{n}x^{n}+\sum_{n=0}^{\infty}c_{n}x^{n+2}+2\sum_{n=0}^{\infty}c_{n}x^{n}=0 \tag{5.13}$$

**Adım 3 — İndeksleri kaydırarak bütün üsleri $x^{n}$ yap.**

Birinci toplamda $n\to n+2$ (üs $n$ olur, alt sınır $n=0$'a iner):

$$\sum_{n=2}^{\infty}n(n-1)c_{n}x^{n-2}\;=\;\sum_{n=0}^{\infty}(n+2)(n+1)c_{n+2}x^{n}$$

Üçüncü toplamda $n\to n-2$ (üs $n$ olur, alt sınır $n=2$'ye çıkar):

$$\sum_{n=0}^{\infty}c_{n}x^{n+2}\;=\;\sum_{n=2}^{\infty}c_{n-2}x^{n}$$

Denklem şu hâle gelir:

$$\sum_{n=0}^{\infty}(n+2)(n+1)c_{n+2}x^{n}+\sum_{n=1}^{\infty}n\,c_{n}x^{n}+\sum_{n=2}^{\infty}c_{n-2}x^{n}+2\sum_{n=0}^{\infty}c_{n}x^{n}=0 \tag{5.20}$$

**Adım 4 — Ortak aralığa indirge.**

Üsler aynı ama alt sınırlar farklı: sırasıyla $0,\;1,\;2,\;0$. ==Ortak aralık $n=2$'den $\infty$'a.== Dışarıda kalan terimleri tek tek yazalım:

$$\sum_{n=0}^{\infty}(n+2)(n+1)c_{n+2}x^{n}=2c_{2}+6c_{3}x+\sum_{n=2}^{\infty}(n+2)(n+1)c_{n+2}x^{n}$$

$$\sum_{n=1}^{\infty}n\,c_{n}x^{n}=c_{1}x+\sum_{n=2}^{\infty}n\,c_{n}x^{n}$$

$$2\sum_{n=0}^{\infty}c_{n}x^{n}=2c_{0}+2c_{1}x+2\sum_{n=2}^{\infty}c_{n}x^{n}$$

**Adım 5 — Aynı kuvvetleri topla.**

$$(2c_{0}+2c_{2})+(3c_{1}+6c_{3})x+\sum_{n=2}^{\infty}\Big[(n+2)(n+1)c_{n+2}+(n+2)c_{n}+c_{n-2}\Big]x^{n}=0 \tag{5.21}$$

Sabit terimde $2c_{0}+2c_{2}$, $x$ teriminde $c_{1}+2c_{1}+6c_{3}=3c_{1}+6c_{3}$ toplandı. Toplamın içinde $n\,c_{n}+2c_{n}=(n+2)c_{n}$ birleşti.

**Adım 6 — Her kuvvetin katsayısını sıfıra eşitle.**

$$2c_{0}+2c_{2}=0 \tag{5.22}$$
$$3c_{1}+6c_{3}=0 \tag{5.23}$$
$$(n+2)(n+1)c_{n+2}+(n+2)c_{n}+c_{n-2}=0,\quad n\ge 2 \tag{5.24}$$

$(5.22)$ ve $(5.23)$'ten:

$$c_{2}=-c_{0},\qquad c_{3}=-\tfrac{1}{2}c_{1}$$

$(5.24)$ ise **özyineleme formülüdür**; $c_{n+2}$'yi çözersek:

$$\boxed{\,c_{n+2}=-\frac{(n+2)c_{n}+c_{n-2}}{(n+1)(n+2)},\quad n\ge 2\,} \tag{5.27}$$

**Adım 7 — Katsayıları sırayla hesapla.**

$n=2$ için:

$$c_{4}=-\frac{4c_{2}+c_{0}}{12}=-\frac{4(-c_{0})+c_{0}}{12}=-\frac{-3c_{0}}{12}=\frac{1}{4}c_{0}$$

$n=3$ için:

$$c_{5}=-\frac{5c_{3}+c_{1}}{20}=-\frac{5\left(-\tfrac{1}{2}c_{1}\right)+c_{1}}{20}=-\frac{-\tfrac{3}{2}c_{1}}{20}=\frac{3}{40}c_{1}$$

Aynı şekilde devam edilerek ==her çift indisli katsayı $c_{0}$ cinsinden, her tek indisli katsayı $c_{1}$ cinsinden== ifade edilir.

**Adım 8 — Bulunanları varsayılan çözümde yerine koy.**

$$y=c_{0}+c_{1}x-c_{0}x^{2}-\tfrac{1}{2}c_{1}x^{3}+\tfrac{1}{4}c_{0}x^{4}+\tfrac{3}{40}c_{1}x^{5}+\dots$$

$c_{0}$ ve $c_{1}$ parantezine ayırarak:

$$\boxed{\;y=c_{0}\left(1-x^{2}+\frac{1}{4}x^{4}+\dots\right)+c_{1}\left(x-\frac{1}{2}x^{3}+\frac{3}{40}x^{5}+\dots\right)\;} \tag{5.30}$$

**Sonucun yorumu.** Parantez içindeki iki seri, $(5.4)$ denkleminin lineer bağımsız iki çözümünün kuvvet serisi açılımlarıdır; $c_{0}$ ve $c_{1}$ keyfi sabitlerdir. Dolayısıyla $(5.30)$, denklemin $x$ kuvvetlerindeki **genel çözümüdür** ($x^{5}$ terimine kadar).

[KUTU]
**Neden $x^{5}$'e kadar?** Özyineleme formülü sonsuz sayıda katsayı üretir; pratikte istenen doğruluğa göre birkaç terim hesaplanır. Kapalı biçimde bir formül çıkmadığı sürece çözüm, açık seri terimleriyle verilir.
[/KUTU]

---
id: laplace-oteleme
menu: 4.1 Öteleme ve tⁿ ile Çarpma
tip: konu
baslik: 4.1 &nbsp;Öteleme Özelliği ve $t^n$ ile Çarpmanın Etkisi
---

Tablodaki temel dönüşümlerden çok daha fazlasını elde etmemizi sağlayan iki kural var. İkisi de ==yeni integral almadan== yeni dönüşümler üretir.

---

### Öteleme özelliği

[KUTU]
**THEoREM 9.5 — ÖTELEME ÖZELLİĞİ (translation property)**

**Hipotez.** $\mathcal{L}\{f\}=F$ dönüşümü $s>\alpha$ için var olsun.

**Sonuç.** Her $a$ sabiti için

$$\mathcal{L}\{e^{at}f(t)\}=F(s-a) \tag{9.22}$$
[/KUTU]

Kuralın söylediği şudur: **$t$ uzayında $e^{at}$ ile çarpmak, $s$ uzayında dönüşümü $a$ kadar ötelemekle aynıdır.**

$$e^{at}\cdot f(t)\quad\longleftrightarrow\quad F(s)\;\text{grafiğini }a\text{ kadar sağa kaydır}$$

Geçerlilik aralığı da ötelenir: $F$, $s>\alpha$ için geçerliyse $F(s-a)$, $s>\alpha+a$ için geçerlidir.

[SORU] **Örnek 9.17.** &nbsp; $\mathcal{L}\{e^{at}\sin bt\}$ dönüşümünü bulunuz.
[CEVAP]
$f(t)=\sin bt$ alalım. THEoREM 9.5 gereği $\mathcal{L}\{e^{at}\sin bt\}=F(s-a)$, burada

$$F(s)=\mathcal{L}\{\sin bt\}=\frac{b}{s^{2}+b^{2}}\qquad (s>0)$$

$F$'de $s$ yerine $s-a$ yazalım:

$$F(s-a)=\frac{b}{(s-a)^{2}+b^{2}}$$

$$\boxed{\;\mathcal{L}\{e^{at}\sin bt\}=\frac{b}{(s-a)^{2}+b^{2}}\qquad (s>a)\;} \tag{9.24}$$

==İntegral almadık==; yalnızca bilinen bir dönüşümde değişken kaydırdık.

[KUTU]
**Ters yönde okumak daha da önemli.** Bir ters dönüşüm ararken paydada $(s+3)^{2}+4$ gibi bir **tamkare** görürseniz, bu öteleme özelliğinin izidir ve cevapta mutlaka bir $e^{-3t}$ çarpanı olacaktır. Bir sonraki bölümde bunu kullanacağız.
[/KUTU]

---

### $t^n$ ile çarpma

[KUTU]
**THEoREM 9.6**

**Hipotez.** $f$, THEoREM 9.1'in hipotezlerini sağlasın ve Laplace dönüşümü

$$F(s)=\int_{0}^{\infty}e^{-st}f(t)\,dt \tag{9.25}$$

olsun.

**Sonuç.**

$$\mathcal{L}\{t^{n}f(t)\}=(-1)^{n}\frac{d^{n}}{ds^{n}}\big[F(s)\big] \tag{9.26}$$
[/KUTU]

**İspat.** $(9.25)$'in her iki tarafının $s$'ye göre $n$ kez türevi alınır. Bu durumda türev ile integralin yer değiştirmesi meşrudur ve

$$\frac{d^{n}}{ds^{n}}F(s)=\int_{0}^{\infty}(-t)^{n}e^{-st}f(t)\,dt=(-1)^{n}\int_{0}^{\infty}e^{-st}\,t^{n}f(t)\,dt=(-1)^{n}\mathcal{L}\{t^{n}f(t)\}$$

verir. $\blacksquare$

==İşaretin kaynağı görülüyor:== $e^{-st}$'nin $s$'ye göre türevi $-t\,e^{-st}$'dir, yani her türev bir $-t$ çarpanı düşürür. $(-1)^{n}$ bunu düzeltmek içindir.

[KUTU]
**İki kuralın karşılaştırması:**

| $t$ uzayında | $s$ uzayında |
|---|---|
| $e^{at}$ ile çarp | $s\to s-a$ ötele |
| $t^{n}$ ile çarp | $n$ kez türet, $(-1)^{n}$ ile çarp |
| türev al | $s$ ile çarp, başlangıç değerini çıkar |

Üçü de "bir uzaydaki zor işlemi öbür uzayda kolay işleme çevirme" örneğidir.
[/KUTU]

[SORU] **Örnek 9.18.** &nbsp; $\mathcal{L}\{t^{2}\sin bt\}$ dönüşümünü bulunuz.
[CEVAP]
$f(t)=\sin bt$ için $(9.5)$'ten

$$F(s)=\frac{b}{s^{2}+b^{2}}$$

**Birinci türev.** Zincir kuralıyla:

$$\frac{d}{ds}\big[F(s)\big]=b\cdot(-1)\left(s^{2}+b^{2}\right)^{-2}(2s)=-\frac{2bs}{\left(s^{2}+b^{2}\right)^{2}}$$

**İkinci türev.** Çarpım kuralıyla:

$$\frac{d^{2}}{ds^{2}}\big[F(s)\big]=-2b\left(s^{2}+b^{2}\right)^{-2}+(-2bs)(-2)\left(s^{2}+b^{2}\right)^{-3}(2s)$$

$$=\frac{-2b\left(s^{2}+b^{2}\right)+8bs^{2}}{\left(s^{2}+b^{2}\right)^{3}}=\frac{-2bs^{2}-2b^{3}+8bs^{2}}{\left(s^{2}+b^{2}\right)^{3}}$$

$$=\frac{6bs^{2}-2b^{3}}{\left(s^{2}+b^{2}\right)^{3}}$$

**$(9.26)$'yı uygula.** $n=2$ olduğundan $(-1)^{2}=1$:

$$\boxed{\;\mathcal{L}\{t^{2}\sin bt\}=\frac{6bs^{2}-2b^{3}}{\left(s^{2}+b^{2}\right)^{3}}\;}$$

**Kontrol.** $b$ ortak çarpan olarak çıkarılabilir: $\dfrac{2b\left(3s^{2}-b^{2}\right)}{\left(s^{2}+b^{2}\right)^{3}}$. Payda derecesi $6$, pay derecesi $2$ olduğundan $s\to\infty$ iken ifade $s^{-4}$ gibi söner — $t^{2}\sin bt$ gibi çarpımların dönüşümlerinden beklenen davranış budur.

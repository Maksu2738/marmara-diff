---
id: ornek-ters-donusum
menu: 4.2 Örnekler — Ters Dönüşüm Teknikleri
tip: ornek
baslik: 4.2 &nbsp;Çözümlü Örnekler — Tamkare ve Kısmi Kesirler
---

Tablodaki bir girdiye doğrudan uyan $F(s)$ ifadesi nadiren karşınıza çıkar. Genelde önce ==ifadeyi tablonun tanıyacağı biçime sokmak== gerekir. İki temel teknik vardır: **tamkareye tamamlama** ve **kısmi kesirlere ayırma**.

---

[SORU*] **Örnek 9.20.** &nbsp; Tablo 9.1'i kullanarak $\displaystyle\mathcal{L}^{-1}\left\{\frac{1}{s^{2}+6s+13}\right\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Tabloda ne arayacağımızı belirle.**

Önce $F(s)=\dfrac{1}{as^{2}+bs+c}$ biçiminde bir girdi ararız — ==böyle bir girdi yoktur.== Ama 11 numaralı girdi var:

$$F(s)=\frac{b}{(s+a)^{2}+b^{2}}\qquad\longleftrightarrow\qquad e^{-at}\sin bt$$

Demek ki paydayı $(s+a)^{2}+b^{2}$ biçimine sokmalıyız.

**Adım 2 — Tamkareye tamamla.**

$$s^{2}+6s+13=\underbrace{s^{2}+6s+9}_{(s+3)^{2}}+4=(s+3)^{2}+4$$

$6$'nın yarısı $3$, karesi $9$; $13=9+4$ olduğundan geriye $4$ kalır.

$$\frac{1}{s^{2}+6s+13}=\frac{1}{(s+3)^{2}+2^{2}}$$

**Adım 3 — Payı tabloya uydur.**

11 numaralı girdide pay $b$'dir, bizde ise $1$. $b=2$ olduğuna göre payda $2$ olmalı; ==eksik çarpanı dışarıdan telafi ederiz:==

$$\frac{1}{(s+3)^{2}+2^{2}}=\frac{1}{2}\cdot\frac{2}{(s+3)^{2}+2^{2}}$$

**Adım 4 — Tablodan oku.**

$a=3$, $b=2$ ile 11 numara:

$$\boxed{\;\mathcal{L}^{-1}\left\{\frac{1}{s^{2}+6s+13}\right\}=\frac{1}{2}e^{-3t}\sin 2t\;}$$

[KUTU]
**Paydada çarpanlarına ayrılamayan ikinci dereceden bir ifade görürseniz tamkareye tamamlayın.** Diskriminant negatifse ($6^{2}-4\cdot 13=-16<0$) gerçel kök yoktur, kısmi kesir işe yaramaz; cevapta ==sinüs/kosinüs== çıkacaktır. Diskriminant pozitifse çarpanlara ayrılır ve kısmi kesirlere gidilir; cevapta üsteller çıkar.
[/KUTU]

---

[SORU] **Örnek 9.21.** &nbsp; $\displaystyle\mathcal{L}^{-1}\left\{\frac{7s+2}{(s+2)(s-1)(s-2)}\right\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Kısmi kesir kurulumu.**

Payda üç **farklı doğrusal çarpandan** oluştuğu için:

$$\frac{7s+2}{(s+2)(s-1)(s-2)}=\frac{A}{s+2}+\frac{B}{s-1}+\frac{C}{s-2}$$

Ortak paydayla çarpalım:

$$7s+2=A(s-1)(s-2)+B(s+2)(s-2)+C(s+2)(s-1) \tag{9.27}$$

**Adım 2 — Katsayıları bul (kısa yol).**

$(9.27)$ **her** $s$ için geçerli olduğundan, paydaları sıfırlayan değerleri koyarız — ==her seferinde iki terim birden düşer:==

$s=-2$: $-14+2=-12=A(-3)(-4)=12A\;\Longrightarrow\;A=-1$

$s=1$: $7+2=9=B(3)(-1)=-3B\;\Longrightarrow\;B=-3$

$s=2$: $14+2=16=C(4)(1)=4C\;\Longrightarrow\;C=4$

**Uzun yol (kontrol).** $(9.27)$'yi açıp $s$ kuvvetlerine göre toplarsak:

$$7s+2=(A+B+C)s^{2}+(-3A+C)s+(2A-4B-2C)$$

Katsayıları eşleyelim:

$$A+B+C=0,\qquad -3A+C=7,\qquad 2A-4B-2C=2$$

Bulduğumuz değerlerle: $-1-3+4=0\;\checkmark$, $\;3+4=7\;\checkmark$, $\;-2+12-8=2\;\checkmark$

**Adım 3 — Tablodan oku.**

$$\frac{7s+2}{(s+2)(s-1)(s-2)}=\frac{-1}{s+2}+\frac{-3}{s-1}+\frac{4}{s-2}$$

2 numaralı girdi ($\frac{1}{s-a}\leftrightarrow e^{at}$) ile — ==$\frac{1}{s+2}$'nin $a=-2$ demek olduğuna dikkat:==

$$\boxed{\;\mathcal{L}^{-1}\left\{\frac{7s+2}{(s+2)(s-1)(s-2)}\right\}=-e^{-2t}-3e^{t}+4e^{2t}\;}$$

---

[SORU] **Örnek 9.22.** &nbsp; $\displaystyle\mathcal{L}^{-1}\left\{\frac{s^{2}+5s-3}{(s+2)(s-1)^{2}}\right\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Tekrarlı çarpan için kurulum.**

Payda, $s+2$ çarpanını **birinci**, $s-1$ çarpanını **ikinci** kuvvetten içeriyor. ==Tekrarlı çarpan için her kuvvetten bir terim yazılır:==

$$\frac{s^{2}+5s-3}{(s+2)(s-1)^{2}}=\frac{A}{s+2}+\frac{B}{s-1}+\frac{C}{(s-1)^{2}}$$

Ortak paydayla çarpalım:

$$s^{2}+5s-3=A(s-1)^{2}+B(s+2)(s-1)+C(s+2) \tag{9.28}$$

**Adım 2 — Katsayıları bul.**

$s=-2$: $4-10-3=-9=A(9)\;\Longrightarrow\;A=-1$

$s=1$: $1+5-3=3=C(3)\;\Longrightarrow\;C=1$

$B$ için kök yok — ==tekrarlı çarpanda bu normaldir.== Başka bir $s$ değeri seçelim, $s=0$:

$$-3=A(1)+B(2)(-1)+C(2)=-1-2B+2=1-2B\;\Longrightarrow\;B=2$$

**Kontrol (katsayı eşleme).** $(9.28)$ açılırsa:

$$s^{2}+5s-3=(A+B)s^{2}+(-2A+B+C)s+(A-2B+2C)$$

$$A+B=-1+2=1\;\checkmark,\qquad -2A+B+C=2+2+1=5\;\checkmark,\qquad A-2B+2C=-1-4+2=-3\;\checkmark$$

**Adım 3 — Tablodan oku.**

$$\frac{s^{2}+5s-3}{(s+2)(s-1)^{2}}=\frac{-1}{s+2}+\frac{2}{s-1}+\frac{1}{(s-1)^{2}}$$

İlk iki terim 2 numaralı girdiden. Üçüncü terim için 8 numaralı girdi gerekir:

$$\frac{n!}{(s-a)^{n+1}}\;\longleftrightarrow\;t^{n}e^{at}$$

$n=1$, $a=1$ için $\dfrac{1!}{(s-1)^{2}}=\dfrac{1}{(s-1)^{2}}\;\longleftrightarrow\;te^{t}$

$$\boxed{\;\mathcal{L}^{-1}\left\{\frac{s^{2}+5s-3}{(s+2)(s-1)^{2}}\right\}=-e^{-2t}+2e^{t}+te^{t}\;}$$

[KUTU]
**Tekrarlı çarpanın izi çözümde görünür.** $(s-1)^{2}$ paydası, cevapta $te^{t}$ terimini doğurdu. Genel kural: ==$(s-a)^{k}$ paydası, $t^{k-1}e^{at}$'ye kadar olan terimleri üretir.== Bu, sabit katsayılı denklemlerde tekrarlı karakteristik köklerin $t$, $t^{2}$ çarpanları üretmesiyle aynı olgudur — Laplace bunu payda kuvvetleri olarak görür.
[/KUTU]

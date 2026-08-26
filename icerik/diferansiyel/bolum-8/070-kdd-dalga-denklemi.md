---
id: kdd-dalga
menu: 8.6 Dalga Denklemi
tip: konu
baslik: 8.6 &nbsp;Dalga Denklemi — Hiperbolik Denklemin Temsilcisi
---

İki ucundan gerilmiş, uzunluğu $L$ olan bir tel. $u(x,t)$, $x$ noktasının $t$ anındaki ==düşey yer değiştirmesi== olsun.

$$\boxed{\;u_{tt}=c^{2}u_{xx},\qquad 0<x<L,\quad t>0\;} \tag{8.13}$$

$c$ sabiti, dalganın tel boyunca ==yayılma hızıdır==; $c=\sqrt{T/\rho}$ (gerilme / birim uzunluk kütlesi).

**Yan koşullar** (iki ucu bağlı tel):

$$u(0,t)=0,\qquad u(L,t)=0\qquad\text{(sınır)}$$
$$u(x,0)=f(x),\qquad u_{t}(x,0)=g(x)\qquad\text{(başlangıç — iki tane)}$$

==Başlangıç koşulu iki tanedir==, çünkü denklem $t$'ye göre ikinci mertebedendir (8.1): başlangıç **şekli** ve başlangıç **hızı**.

---

### Çözüm

**Adım 1–3.** $u=XT$ koyalım:

$$XT''=c^{2}X''T\;\Longrightarrow\;\frac{T''}{c^{2}T}=\frac{X''}{X}=-\lambda$$

**Adım 4 — İki ADD.**

$$X''+\lambda X=0,\qquad T''+c^{2}\lambda T=0$$

$X$ denklemi, sınır koşullarıyla birlikte yine $(8.7)$'dir. Cevap $(8.8)$'de duruyor:

$$\lambda_{n}=\left(\frac{n\pi}{L}\right)^{2},\qquad X_{n}=\sin\frac{n\pi x}{L}$$

**$T$ denklemi bu sefer ikinci mertebeden.** Isı denkleminde birinci mertebedendi ve üstel sönüm veriyordu; burada:

$$T''+\left(\frac{n\pi c}{L}\right)^{2}T=0$$

Bu, 7.9'daki $\left(\hat{D}^{2}+\omega^{2}\right)T=0$ kalıbıdır — ==sönüm değil salınım:==

$$T_{n}(t)=A_{n}\cos\frac{n\pi c\,t}{L}+B_{n}\sin\frac{n\pi c\,t}{L}$$

**Adım 5 — Süperpozisyon.**

$$\boxed{\;u(x,t)=\sum_{n=1}^{\infty}\left[A_{n}\cos\frac{n\pi c\,t}{L}+B_{n}\sin\frac{n\pi c\,t}{L}\right]\sin\frac{n\pi x}{L}\;} \tag{8.14}$$

---

### Katsayılar

**$A_{n}$ — başlangıç şeklinden.** $t=0$ koyalım ($\cos 0=1$, $\sin 0=0$):

$$u(x,0)=\sum_{n=1}^{\infty}A_{n}\sin\frac{n\pi x}{L}=f(x)$$

$$\boxed{\;A_{n}=\frac{2}{L}\int_{0}^{L}f(x)\sin\frac{n\pi x}{L}\,dx\;} \tag{8.15}$$

**$B_{n}$ — başlangıç hızından.** Önce $(8.14)$'ün $t$'ye göre türevini alalım:

$$u_{t}(x,t)=\sum_{n=1}^{\infty}\frac{n\pi c}{L}\left[-A_{n}\sin\frac{n\pi c\,t}{L}+B_{n}\cos\frac{n\pi c\,t}{L}\right]\sin\frac{n\pi x}{L}$$

$t=0$ koyalım:

$$u_{t}(x,0)=\sum_{n=1}^{\infty}\frac{n\pi c}{L}B_{n}\sin\frac{n\pi x}{L}=g(x)$$

Demek ki $\dfrac{n\pi c}{L}B_{n}$, $g$'nin $n$. Fourier sinüs katsayısıdır:

$$\frac{n\pi c}{L}B_{n}=\frac{2}{L}\int_{0}^{L}g(x)\sin\frac{n\pi x}{L}\,dx$$

$$\boxed{\;B_{n}=\frac{2}{n\pi c}\int_{0}^{L}g(x)\sin\frac{n\pi x}{L}\,dx\;} \tag{8.16}$$

[KUTU]
**$B_{n}$ formülündeki $\dfrac{2}{n\pi c}$ çarpanına dikkat.** $A_{n}$'de $\dfrac{2}{L}$ vardı, burada $L$ sadeleşip yerine $n\pi c$ geldi — çünkü $t$ türevi öne bir $\dfrac{n\pi c}{L}$ çarpanı attı.

==Bu iki formülü karıştırmak en sık yapılan hatadır.== Ezberlemek yerine türetmeyi hatırlayın: $B_{n}$, $g$'nin Fourier katsayısının $\dfrac{n\pi c}{L}$'ye bölünmüş hâlidir.
[/KUTU]

**Özel durum: tel durgun bırakılıyorsa** ($g(x)=0$, en yaygın hâl) bütün $B_{n}=0$ olur ve çözüm sadeleşir:

$$u(x,t)=\sum_{n=1}^{\infty}A_{n}\cos\frac{n\pi c\,t}{L}\sin\frac{n\pi x}{L}$$

---

[SORU*] **Örnek 8.9.** &nbsp; Uzunluğu $L$ olan bir tel, $f(x)=\dfrac{h}{L}x$ biçiminde çekilip ($h$ küçük) $t=0$ anında durgun hâlde serbest bırakılıyor. Hareketi bulunuz.
[CEVAP]
**Problem.**

$$u_{tt}=c^{2}u_{xx},\qquad u(0,t)=u(L,t)=0,\qquad u(x,0)=\frac{h}{L}x,\qquad u_{t}(x,0)=0$$

**Adım 1 — $B_{n}$.** $g(x)=0$ olduğundan $(8.16)$'daki integral sıfır:

$$B_{n}=0\quad\text{her } n \text{ için}$$

**Adım 2 — $A_{n}$.** $(8.15)$:

$$A_{n}=\frac{2}{L}\int_{0}^{L}\frac{h}{L}x\sin\frac{n\pi x}{L}\,dx=\frac{h}{L}\cdot\underbrace{\frac{2}{L}\int_{0}^{L}x\sin\frac{n\pi x}{L}\,dx}_{\text{Örnek 8.5}}$$

Örnek 8.5'te bu integralin sonucunu $\dfrac{2L(-1)^{n+1}}{n\pi}$ olarak bulmuştuk:

$$A_{n}=\frac{h}{L}\cdot\frac{2L(-1)^{n+1}}{n\pi}=\frac{2h\,(-1)^{n+1}}{n\pi}$$

**Adım 3 — Çözüm.**

$$\boxed{\;u(x,t)=\frac{2h}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\sin\frac{n\pi x}{L}\cos\frac{n\pi c\,t}{L}\;}$$

**Kontroller.**

- $x=0$, $x=L$'de sinüsler sıfır &nbsp;→&nbsp; uçlar sabit &#10003;
- $t=0$'da $\cos 0=1$, geriye Örnek 8.5'in serisi kalır, yani $\dfrac{h}{L}x$ &#10003;
- $u_{t}$'de her terim $\sin\dfrac{n\pi ct}{L}$ taşır, $t=0$'da sıfırdır &nbsp;→&nbsp; durgun başlangıç &#10003;
[/CEVAP]

---

### Müzikal okuma

[KUTU]
**Her $n$ bir nota.** $n$. terimin titreşim frekansı:

$$f_{n}=\frac{n\,c}{2L}$$

- $n=1$ → **temel frekans** (fundamental), telin verdiği asıl nota
- $n=2,3,4,\dots$ → **harmonikler**, temel frekansın ==tam katları==

Bir gitar telinin "do" mu "re" mi verdiğini $f_{1}=\dfrac{c}{2L}$ belirler; **hangi harmoniklerin ne kadar güçlü olduğu** ise $A_{n}$ katsayılarıdır — yani ==telin nasıl çekildiği.== Aynı notayı çalan gitar ile keman farklı duyulur çünkü $A_{n}$ dağılımları farklıdır. Buna **tını (timbre)** denir.

**Perdeyi değiştirmenin üç yolu**, formülden doğrudan okunur:

- $L$'yi küçült (parmakla bas) → frekans artar
- $c=\sqrt{T/\rho}$ içinde $T$'yi artır (akort burgusu) → frekans artar
- Daha kalın tel ($\rho$ büyük) → frekans düşer
[/KUTU]

**Isı denklemiyle karşılaştırma.** Aynı özfonksiyonlar, ==bambaşka zaman davranışı:==

| | Isı | Dalga |
|---|---|---|
| $T$ denklemi | $T'+k\lambda T=0$ | $T''+c^{2}\lambda T=0$ |
| Zaman çözümü | $e^{-k\lambda_{n}t}$ | $\cos,\sin$ |
| Yüksek $n$ | ==Çok hızlı söner== ($n^{2}$) | ==Hiç sönmez==, daha hızlı titrer |
| $t\to\infty$ | $u\to 0$ | Salınım sürer |

---

[CLAUDE] d'Alembert çözümü — ikinci bir bakış
Dalga denkleminin ==seriye hiç girmeyen== kapalı bir çözümü de vardır. Sonsuz uzun bir tel için (sınır yok):

$$\boxed{\;u(x,t)=\frac{1}{2}\Big[f(x+ct)+f(x-ct)\Big]+\frac{1}{2c}\int_{x-ct}^{x+ct}g(s)\,ds\;}$$

**Okunuşu:** başlangıç şekli ==ikiye bölünür==; yarısı sola, yarısı sağa $c$ hızıyla kayar. $f(x-ct)$ sağa giden dalga, $f(x+ct)$ sola giden dalga.

Bu, 8.2'deki "hiperbolik denklemler süreksizliği bozmadan taşır" ifadesinin ==somut hâlidir==: $f$'nin şekli hiç değişmez, yalnız yer değiştirir. Isı denkleminde böyle bir formül yoktur, çünkü orada şekil korunmaz.

**Sınırlı telde de kullanılabilir** ama $f$ ve $g$'nin ==tek ve $2L$ periyotlu== genişletilmesi gerekir; uçlardan yansıyan dalgalar böyle temsil edilir. Seri çözümüyle aynı sonucu verir.

**Hangisini kullanmalı:**

- Sınırlı bölge + Fourier katsayısı isteniyor → ==seri çözümü== $(8.14)$
- Sonsuz/yarı-sonsuz tel, ya da "dalga nereye gitti" tipi soru → ==d'Alembert==

Hoca d'Alembert'i işlemeyebilir; ders notu geldiğinde ==kontrol edin.==
[/CLAUDE]

---
id: kdd-formul-karti
menu: 8.8 Formül Kartı
tip: konu
rozet: Özet
baslik: 8.8 &nbsp;Bölüm 8 Formül Kartı
---

[KUTU]
**Tek sayfalık özet.** Aşağıdakiler bölümün tamamının işlem yükünü taşır. Ders notu geldiğinde ==hocanın gösterimiyle karşılaştırıp güncelleyin.==
[/KUTU]

### Sınıflandırma

$$A\,u_{xx}+B\,u_{xy}+C\,u_{yy}+\dots=0,\qquad \Delta=B^{2}-4AC$$

| $\Delta<0$ | $\Delta=0$ | $\Delta>0$ |
|---|---|---|
| Eliptik — Laplace | Parabolik — ısı | Hiperbolik — dalga |

$B=0$ ise: $A$, $C$ aynı işaret → eliptik; zıt → hiperbolik; biri sıfır → parabolik.

---

### Ana özdeğer problemi

$$X''+\lambda X=0$$

| Sınır koşulu | Özdeğerler | Özfonksiyonlar |
|---|---|---|
| $X(0)=X(L)=0$ | $\lambda_{n}=\left(\dfrac{n\pi}{L}\right)^{2}$, &nbsp;$n\ge 1$ | $\sin\dfrac{n\pi x}{L}$ |
| $X'(0)=X'(L)=0$ | $\lambda_{n}=\left(\dfrac{n\pi}{L}\right)^{2}$, &nbsp;$n\ge 0$ | $\cos\dfrac{n\pi x}{L}$ |

$\lambda<0$ ve $\lambda=0$ durumları ==yalnız aşikâr çözüm verir== (Dirichlet koşulunda).

---

### Fourier katsayıları

Tam seri, $(-L,L)$:

$$a_{n}=\frac{1}{L}\int_{-L}^{L}f\cos\frac{n\pi x}{L}dx,\qquad b_{n}=\frac{1}{L}\int_{-L}^{L}f\sin\frac{n\pi x}{L}dx$$

Yarım aralık, $(0,L)$ — ==çarpan $2/L$:==

$$b_{n}=\frac{2}{L}\int_{0}^{L}f\sin\frac{n\pi x}{L}dx,\qquad a_{n}=\frac{2}{L}\int_{0}^{L}f\cos\frac{n\pi x}{L}dx$$

Sık çıkan iki sonuç:

$$f(x)=x\;\Longrightarrow\;b_{n}=\frac{2L(-1)^{n+1}}{n\pi},\qquad f(x)=T_{0}\;\Longrightarrow\;b_{n}=\frac{2T_{0}}{n\pi}\Big(1-(-1)^{n}\Big)$$

---

### Üç denklemin çözümü

**Isı:** $u_{t}=k\,u_{xx}$, &nbsp;$u(0,t)=u(L,t)=0$, &nbsp;$u(x,0)=f(x)$

$$u=\sum_{n=1}^{\infty}b_{n}\sin\frac{n\pi x}{L}e^{-k\left(\frac{n\pi}{L}\right)^{2}t},\qquad b_{n}=\frac{2}{L}\int_{0}^{L}f\sin\frac{n\pi x}{L}dx$$

**Dalga:** $u_{tt}=c^{2}u_{xx}$, &nbsp;$u(x,0)=f(x)$, &nbsp;$u_{t}(x,0)=g(x)$

$$u=\sum_{n=1}^{\infty}\left[A_{n}\cos\frac{n\pi ct}{L}+B_{n}\sin\frac{n\pi ct}{L}\right]\sin\frac{n\pi x}{L}$$

$$A_{n}=\frac{2}{L}\int_{0}^{L}f\sin\frac{n\pi x}{L}dx,\qquad B_{n}=\frac{2}{n\pi c}\int_{0}^{L}g\sin\frac{n\pi x}{L}dx$$

d'Alembert (sınırsız tel): &nbsp;$u=\dfrac{1}{2}\big[f(x+ct)+f(x-ct)\big]+\dfrac{1}{2c}\displaystyle\int_{x-ct}^{x+ct}g\,ds$

**Laplace:** $u_{xx}+u_{yy}=0$ dikdörtgende, &nbsp;$u(x,b)=f(x)$, diğer üç kenar $0$

$$u=\sum_{n=1}^{\infty}c_{n}\sin\frac{n\pi x}{a}\sinh\frac{n\pi y}{a},\qquad c_{n}=\frac{2}{a\sinh\frac{n\pi b}{a}}\int_{0}^{a}f\sin\frac{n\pi x}{a}dx$$

---

### Çözüm sırası (her problemde aynı)

1. $u=XT$ koy, ayır, $-\lambda$'ya eşitle
2. Sınır koşullarını $u$'dan $X$'e aktar
3. $\lambda<0$, $\lambda=0$, $\lambda>0$ üçünü de ele — ==bu adım puanlıdır==
4. İkinci ADD'yi çöz (üstel / trigonometrik / hiperbolik)
5. Süperpozisyon + Fourier ile başlangıç koşulunu sağlat
6. Kontrol: sınırlarda ve $t=0$'da yerine koy

---

### Sık kullanılan değerler

$$\cos n\pi=(-1)^{n},\qquad \sin n\pi=0,\qquad \sinh 0=0,\qquad \cosh 0=1$$

$$1-(-1)^{n}=\begin{cases}2,& n\text{ tek}\\ 0,& n\text{ çift}\end{cases}$$

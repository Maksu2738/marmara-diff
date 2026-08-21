---
id: seri-egzersizler
menu: 5.5 Bölüm Sonu Egzersizleri
tip: sorular
baslik: 5.5 &nbsp;Bölüm Sonu Egzersizleri
---

Aşağıdaki denklemlerin $x$ kuvvetlerinde kuvvet serisi çözümlerini bulunuz.

[SORU] **1.** &nbsp; $\displaystyle y''+xy'+y=0$
[CEVAP]
**Adım 1 — Serileri yerleştir.**

$$\sum_{n=0}^{\infty}(n+2)(n+1)c_{n+2}x^{n}+\sum_{n=1}^{\infty}nc_{n}x^{n}+\sum_{n=0}^{\infty}c_{n}x^{n}=0$$

İkinci toplam $n=0$'da sıfır terim verdiği için alt sınırı $0$'a indirebiliriz; böylece üç toplam da aynı aralıkta olur ve ==ortak aralığa indirgeme adımına gerek kalmaz==.

**Adım 2 — Katsayıyı sıfıra eşitle.**

$$(n+2)(n+1)c_{n+2}+nc_{n}+c_{n}=0\;\Longrightarrow\;(n+2)(n+1)c_{n+2}+(n+1)c_{n}=0$$

Her iki terimde de $(n+1)$ çarpanı var; $n\ge 0$ için $n+1\neq 0$ olduğundan sadeleştirebiliriz:

$$\boxed{\,c_{n+2}=-\frac{c_{n}}{n+2}\,}$$

Bu özyineleme alışılmadık ölçüde sadedir — $c_{n+2}$ yalnızca $c_{n}$'ye bağlıdır, aradaki terime değil. Demek ki çift ve tek indisler ==birbirinden tamamen bağımsız== iki zincir oluşturur.

**Adım 3 — Çift indisli zincir ($c_{0}$'dan).**

$$c_{2}=-\frac{c_{0}}{2},\qquad c_{4}=-\frac{c_{2}}{4}=\frac{c_{0}}{8},\qquad c_{6}=-\frac{c_{4}}{6}=-\frac{c_{0}}{48}$$

Genel terim: paydalar $2,\;2\cdot 4,\;2\cdot 4\cdot 6,\dots$ ilerliyor, yani

$$c_{2k}=\frac{(-1)^{k}c_{0}}{2\cdot 4\cdot 6\cdots 2k}=\frac{(-1)^{k}c_{0}}{2^{k}\,k!}$$

**Adım 4 — Tek indisli zincir ($c_{1}$'den).**

$$c_{3}=-\frac{c_{1}}{3},\qquad c_{5}=-\frac{c_{3}}{5}=\frac{c_{1}}{15},\qquad c_{7}=-\frac{c_{5}}{7}=-\frac{c_{1}}{105}$$

$$c_{2k+1}=\frac{(-1)^{k}c_{1}}{3\cdot 5\cdot 7\cdots(2k+1)}$$

**Adım 5 — Genel çözüm.**

$$y=c_{0}\sum_{k=0}^{\infty}\frac{(-1)^{k}x^{2k}}{2^{k}k!}+c_{1}\sum_{k=0}^{\infty}\frac{(-1)^{k}x^{2k+1}}{3\cdot 5\cdots(2k+1)}$$

**Birinci seri kapalı biçime iniyor.** Terimleri şöyle yazalım:

$$\sum_{k=0}^{\infty}\frac{1}{k!}\left(-\frac{x^{2}}{2}\right)^{k}=e^{-x^{2}/2}$$

çünkü $e^{u}=\sum u^{k}/k!$ açılımında $u=-x^{2}/2$ konmuştur. Dolayısıyla

$$\boxed{\;y=c_{0}\,e^{-x^{2}/2}+c_{1}\left(x-\frac{x^{3}}{3}+\frac{x^{5}}{15}-\frac{x^{7}}{105}+\dots\right)\;}$$

**Doğrulama.** $y_{1}=e^{-x^{2}/2}$ için $y_{1}'=-xe^{-x^{2}/2}$ ve $y_{1}''=\left(x^{2}-1\right)e^{-x^{2}/2}$. Yerine koyalım:

$$y_{1}''+xy_{1}'+y_{1}=\left(x^{2}-1\right)e^{-x^{2}/2}-x^{2}e^{-x^{2}/2}+e^{-x^{2}/2}=0\;\checkmark$$

$P_{1}=x$ ve $P_{2}=1$ polinom olduğundan seriler ==her $x$ için== yakınsar.

[SORU] **15.** &nbsp; $\displaystyle y''-xy'-y=0,\qquad y(0)=1,\qquad y'(0)=0$
[CEVAP]
**Adım 1 — Özyineleme formülünü çıkar.**

$$(n+2)(n+1)c_{n+2}-nc_{n}-c_{n}=0\;\Longrightarrow\;(n+2)(n+1)c_{n+2}=(n+1)c_{n}$$

$(n+1)$ sadeleşir:

$$\boxed{\,c_{n+2}=\frac{c_{n}}{n+2}\,}$$

1. soruyla aynı yapı, tek fark işaret — burada eksi yok.

**Adım 2 — Başlangıç koşullarını hemen uygula.**

Seri $x=0$'da $c_{0}$, türevi $x=0$'da $c_{1}$ verdiğinden:

$$c_{0}=y(0)=1,\qquad c_{1}=y'(0)=0$$

==$c_{1}=0$ olması bütün tek indisli katsayıları sıfırlar==, çünkü tek zincir yalnızca $c_{1}$'den beslenir:

$$c_{3}=\frac{c_{1}}{3}=0,\qquad c_{5}=\frac{c_{3}}{5}=0,\qquad \dots$$

**Adım 3 — Çift indisli katsayılar.**

$$c_{2}=\frac{c_{0}}{2}=\frac{1}{2},\qquad c_{4}=\frac{c_{2}}{4}=\frac{1}{8},\qquad c_{6}=\frac{c_{4}}{6}=\frac{1}{48}$$

$$c_{2k}=\frac{1}{2\cdot 4\cdots 2k}=\frac{1}{2^{k}k!}$$

**Adım 4 — Çözüm.**

$$y=1+\frac{x^{2}}{2}+\frac{x^{4}}{8}+\frac{x^{6}}{48}+\dots=\sum_{k=0}^{\infty}\frac{1}{k!}\left(\frac{x^{2}}{2}\right)^{k}$$

$$\boxed{\;y=e^{x^{2}/2}\;}$$

**Doğrulama.** $y'=xe^{x^{2}/2}$, $y''=\left(1+x^{2}\right)e^{x^{2}/2}$ olduğundan

$$y''-xy'-y=\left(1+x^{2}\right)e^{x^{2}/2}-x^{2}e^{x^{2}/2}-e^{x^{2}/2}=0\;\checkmark$$

Başlangıç koşulları da sağlanıyor: $y(0)=e^{0}=1$ ve $y'(0)=0\cdot e^{0}=0$. $\checkmark$

---

### Çözülmeyi bekleyen egzersizler

Aşağıdakiler kitabın bölüm sonu listesindedir. Yöntem yukarıdaki iki çözümdekiyle aynıdır.

**$x$ kuvvetlerinde kuvvet serisi çözümü bulunuz (1-14):**

3. &nbsp; $y''-y'+2xy=0$ &nbsp;&nbsp; 5. &nbsp; $y''+xy'+\left(2x^{2}+1\right)y=0$ &nbsp;&nbsp; 7. &nbsp; $y''+xy'+(3x+2)y=0$

9. &nbsp; $y''-\left(x^{3}+2\right)y'-6x^{2}y=0$ &nbsp;&nbsp; 10. &nbsp; $y''-\left(x^{2}+x\right)y'+y=0$

11. &nbsp; $\left(x^{2}+1\right)y''+xy'+xy=0$ &nbsp;&nbsp; 12. &nbsp; $(x-1)y''-(3x-2)y'+2xy=0$

13. &nbsp; $\left(x^{3}-1\right)y''+x^{2}y'+xy=0$ &nbsp;&nbsp; 14. &nbsp; $(x+3)y''+(x+2)y'+y=0$

**Başlangıç değer problemlerinin kuvvet serisi çözümünü bulunuz (16-20):**

16. &nbsp; $y''+xy'-2y=0,\quad y(0)=0,\quad y'(0)=1$

17. &nbsp; $y''+x^{2}y'+x^{2}y=0,\quad y(0)=2,\quad y'(0)=4$

18. &nbsp; $\left(x^{2}+1\right)y''+xy'+2xy=0,\quad y(0)=2,\quad y'(0)=3$

19. &nbsp; $\left(2x^{2}-3\right)y''-2xy'+y=0,\quad y(0)=-1,\quad y'(0)=5$

20. &nbsp; $\left(x^{2}-1\right)y''+4xy'+2y=0,\quad y(0)=1,\quad y'(0)=-1$

**$x-1$ kuvvetlerinde çözüm bulunuz (21-23):**

21. &nbsp; $x^{2}y''+xy'+y=0$ &nbsp;&nbsp; 22. &nbsp; $x^{2}y''+3xy'-y=0$

23. &nbsp; $xy''+y'+2y=0,\quad y(1)=2,\quad y'(1)=4$

**24. &nbsp; Legendre denklemi.** &nbsp; $n$ sabit olmak üzere

$$\left(1-x^{2}\right)y''-2xy'+n(n+1)y=0$$

denklemine **Legendre diferansiyel denklemi (Legendre's differential equation)** denir.

- **(a)** $x=0$'ın bu denklemin adi noktası olduğunu gösteriniz ve $x$ kuvvetlerinde lineer bağımsız iki kuvvet serisi çözümü bulunuz.
- **(b)** $n$ negatif olmayan bir tam sayıysa, (a)'da bulunan çözümlerden birinin $n$ dereceli bir **polinom** olduğunu gösteriniz.

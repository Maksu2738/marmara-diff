---
id: vize-4
menu: Soru 4 &mdash; Mertebe Düşürme &amp; Wronskian
tip: sorular
rozet: Vize 4
baslik: Mertebe Düşürme ile İkinci Çözüm ve Wronskian
---

<p style="margin-bottom: 1rem;">İlgili konu: <a href="#bolum-4-1-c">3.1/C Mertebe Düşürme</a> &bull; <a href="#bolum-4-1-a">3.1/A Tanım ve Temel Varlık THEoREM'i</a></p>

[SORU] $y=x$'in $\displaystyle \left(x^{2}-1\right)y''-2xy'+2y=0$ denkleminin bir çözümü olduğu veriliyor. <br>**(a)** ==Mertebe düşürme== yöntemiyle doğrusal bağımsız ikinci çözümü bulunuz ve genel çözümü yazınız. <br>**(b)** Bu iki çözümün doğrusal bağımsız olduğunu ==Wronskian== hesaplayarak doğrulayınız.
[CEVAP]
**(a) Mertebe düşürme.**

$y_{1}=x$ bilindiğine göre ikinci çözümü

$$y_{2}=x\,v(x)$$

biçiminde arıyoruz. Türevleri alalım:

$$y_{2}'=v+xv'$$

$$y_{2}''=v'+v'+xv''=2v'+xv''$$

**Adım 1 — Denkleme yerleştir.**

$$\left(x^{2}-1\right)\left(xv''+2v'\right)-2x\left(xv'+v\right)+2xv=0$$

Açalım:

$$x\left(x^{2}-1\right)v''+2\left(x^{2}-1\right)v'-2x^{2}v'-2xv+2xv=0$$

$v$'li terimler birbirini götürür ($-2xv+2xv=0$) — mertebe düşürmenin çalıştığının işaretidir. $v'$ katsayısını toplayalım:

$$2\left(x^{2}-1\right)-2x^{2}=2x^{2}-2-2x^{2}=-2$$

Geriye kalan:

$$x\left(x^{2}-1\right)v''-2v'=0$$

**Adım 2 — Mertebeyi düşür.** $w=v'$ diyelim; denklem birinci mertebeden olur:

$$x\left(x^{2}-1\right)w'-2w=0\ \Longrightarrow\ \frac{w'}{w}=\frac{2}{x\left(x^{2}-1\right)}$$

**Adım 3 — Sağ tarafı basit kesirlere ayır.**

$$\frac{2}{x\left(x^{2}-1\right)}=-\frac{2}{x}+\frac{2x}{x^{2}-1}$$

<p style="margin-bottom:0.6rem;">(Kontrol: $-\dfrac{2}{x}+\dfrac{2x}{x^{2}-1}=\dfrac{-2\left(x^{2}-1\right)+2x^{2}}{x\left(x^{2}-1\right)}=\dfrac{2}{x\left(x^{2}-1\right)}$ ✓)</p>

**Adım 4 — İntegre et.**

$$\ln w=-2\ln x+\ln\left(x^{2}-1\right)+\ln C=\ln\left(C\,\frac{x^{2}-1}{x^{2}}\right)$$

$$w=C\,\frac{x^{2}-1}{x^{2}}=v'$$

**Adım 5 — Bir kez daha integre et.** $C=1$ seçelim (herhangi bir sabit işimizi görür):

$$\frac{dv}{dx}=\frac{x^{2}-1}{x^{2}}=1-\frac{1}{x^{2}}$$

$$v=x+\frac{1}{x}+c$$

**Adım 6 — İkinci çözüm.**

$$y_{2}=x\,v=x\left(x+\frac{1}{x}+c\right)=x^{2}+1+cx$$

$cx$ terimi zaten $y_{1}=x$'in katıdır; bağımsız yeni çözüm olarak

$$\boxed{\,y_{2}=x^{2}+1\,}$$

alınır. **Genel çözüm:**

$$\boxed{\,y=c_{1}x+c_{2}\left(x^{2}+1\right)\,}$$

**(b) Wronskian.**

$$W\left(y_{1},y_{2}\right)=\begin{vmatrix} y_{1} & y_{2} \\[2pt] y_{1}' & y_{2}'\end{vmatrix}=\begin{vmatrix} x & x^{2}+1 \\[2pt] 1 & 2x\end{vmatrix}$$

$$W=x\cdot 2x-1\cdot\left(x^{2}+1\right)=2x^{2}-x^{2}-1=x^{2}-1$$

$$\boxed{\,W=x^{2}-1\neq 0\quad (x\neq\pm 1)\,}$$

$W\neq 0$ olduğundan $y_{1}=x$ ve $y_{2}=x^{2}+1$ çözümleri ==doğrusal bağımsızdır==.

---

**Doğrulama.** $y_{2}=x^{2}+1$ gerçekten denklemi sağlıyor mu? $y_{2}'=2x$, $y_{2}''=2$:

$$\left(x^{2}-1\right)(2)-2x(2x)+2\left(x^{2}+1\right)=2x^{2}-2-4x^{2}+2x^{2}+2=0\quad\checkmark$$

[KUTU]
**Sınav notu.** Wronskian'ın $x=\pm 1$'de sıfır olması tesadüf değil: denklemi standart biçime getirdiğimizde baş katsayı $x^{2}-1$ paydaya iner, yani $x=\pm 1$ ==tekil noktalardır==. Abel THEoREM'i de aynı sonucu verir: $W=\exp\left(-\int\frac{-2x}{x^{2}-1}dx\right)=x^{2}-1$. Bağımsızlık, tekil noktaları içermeyen bir aralıkta ($-1<x<1$ ya da $x>1$) geçerlidir.
[/KUTU]

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

### Kalan egzersizler — çözümler bize ait

[KUTU]
**Bu soruların cevabı kitabın anahtarında yok.** Çözümler bize aittir; her biri ==ikinci bir bağımsız yolla doğrulanmıştır==.

Kuvvet serilerinde kullandığımız doğrulama şu: bulunan katsayıları ==denkleme geri koyup her $x$ kuvvetinin katsayısını ayrı ayrı sıfıra eşitlemek.== Her katsayı için bağımsız bir denklem çıktığından, indirgeme bağıntısında bir işaret hatası varsa ilk birkaç kuvvette hemen görünür.

**Gösterim.** Her problemde $a_{0}$ ve $a_{1}$ serbest bırakılır; $y_{1}$ çözümü $a_{0}=1,\,a_{1}=0$, $y_{2}$ çözümü $a_{0}=0,\,a_{1}=1$ seçimine karşılık gelir. Genel çözüm $y=a_{0}y_{1}+a_{1}y_{2}$'dir.
[/KUTU]

[SORU] **3.** &nbsp; $y''-y'+2xy=0$
[CEVAP]
**Adım 1 — Nokta adi mi?** Başkatsayı $1$, hiçbir yerde sıfırlanmıyor &nbsp;$\Rightarrow$&nbsp; ==$x=0$ adi nokta==, düz kuvvet serisi çalışır.

**Adım 2 — Serileri $x^{n}$ üssüne hizala.**

$$y''=\sum_{n=0}^{\infty}(n+2)(n+1)a_{n+2}x^{n},\qquad -y'=-\sum_{n=0}^{\infty}(n+1)a_{n+1}x^{n}$$

$$2xy=2\sum_{n=0}^{\infty}a_{n}x^{n+1}=2\sum_{n=1}^{\infty}a_{n-1}x^{n}$$

==Son toplam $n=1$'den başlıyor==, o yüzden $n=0$ terimini ayrı yazacağız.

**Adım 3 — Katsayıları sıfıra eşitle.**

$x^{0}$: &nbsp; $2a_{2}-a_{1}=0\;\Longrightarrow\;a_{2}=\dfrac{a_{1}}{2}$

$x^{n}$, $n\ge 1$: &nbsp; $(n+2)(n+1)a_{n+2}-(n+1)a_{n+1}+2a_{n-1}=0$

$$\boxed{\;a_{n+2}=\frac{(n+1)a_{n+1}-2a_{n-1}}{(n+2)(n+1)},\qquad n\ge 1\;}$$

**Adım 4 — Katsayıları üret.**

| $n$ | $a_{n+2}$ |
|---|---|
| — | $a_{2}=\dfrac{a_{1}}{2}$ |
| $1$ | $a_{3}=\dfrac{a_{1}}{6}-\dfrac{a_{0}}{3}$ |
| $2$ | $a_{4}=-\dfrac{a_{1}}{8}-\dfrac{a_{0}}{12}$ |
| $3$ | $a_{5}=-\dfrac{3a_{1}}{40}-\dfrac{a_{0}}{60}$ |

**Adım 5 — İki bağımsız çözüm.**

$$\boxed{\;y_{1}=1-\frac{x^{3}}{3}-\frac{x^{4}}{12}-\frac{x^{5}}{60}+\cdots\;}$$

$$\boxed{\;y_{2}=x+\frac{x^{2}}{2}+\frac{x^{3}}{6}-\frac{x^{4}}{8}-\frac{3x^{5}}{40}+\cdots\;}$$

==Bu denklemde $a_{2}$, $a_{0}$'a hiç bağlı değil== ($a_{2}=\tfrac{a_{1}}{2}$), bu yüzden $y_{1}$'de $x^{2}$ terimi yok.

**Doğrulama — katsayıları denkleme geri koy.** Her kuvvet için $(n+2)(n+1)a_{n+2}-(n+1)a_{n+1}+2a_{n-1}$ sıfır olmalı:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$y_{1}$ için</th><th>$y_{2}$ için</th></tr>
<tr><td>$x^{0}$</td><td>$0-0=0$ &#10003;</td><td>$2\cdot\tfrac12-1=0$ &#10003;</td></tr>
<tr><td>$x^{1}$</td><td>$-2-0+2=0$ &#10003;</td><td>$1-1+0=0$ &#10003;</td></tr>
<tr><td>$x^{2}$</td><td>$-1+1+0=0$ &#10003;</td><td>$-\tfrac32-\tfrac12+2=0$ &#10003;</td></tr>
<tr><td>$x^{3}$</td><td>$-\tfrac13+\tfrac13+0=0$ &#10003;</td><td>$-\tfrac32+\tfrac12+1=0$ &#10003;</td></tr>
</table>
</div>

==Dört kuvvet, hesapladığımız dört katsayıyı da sınıyor.==
[/CEVAP]

[SORU] **5.** &nbsp; $y''+xy'+\left(2x^{2}+1\right)y=0$
[CEVAP]
**Adım 1 — Hizala.**

$$y''\to(n+2)(n+1)a_{n+2},\qquad xy'\to na_{n},\qquad y\to a_{n},\qquad 2x^{2}y\to 2a_{n-2}$$

**Adım 2 — Topla.** $na_{n}+a_{n}=(n+1)a_{n}$ olduğuna dikkat edin:

$$(n+2)(n+1)a_{n+2}+(n+1)a_{n}+2a_{n-2}=0$$

$$\boxed{\;a_{n+2}=-\frac{(n+1)a_{n}+2a_{n-2}}{(n+2)(n+1)}\;}$$

==$a_{-1}=a_{-2}=0$ kabul edilirse bu tek formül $n=0$ ve $n=1$ için de doğrudur== — ayrı durum yazmaya gerek yok.

**Adım 3 — Katsayılar.**

$$a_{2}=-\frac{a_{0}}{2},\quad a_{3}=-\frac{a_{1}}{3},\quad a_{4}=-\frac{a_{0}}{24},\quad a_{5}=-\frac{a_{1}}{30}$$

**Adım 4 — Çözümler.** ==Bağıntı $a_{n}$ ile $a_{n-2}$'yi bağlıyor, yani çift ve tek indisler hiç karışmıyor:==

$$\boxed{\;y_{1}=1-\frac{x^{2}}{2}-\frac{x^{4}}{24}+\cdots,\qquad y_{2}=x-\frac{x^{3}}{3}-\frac{x^{5}}{30}+\cdots\;}$$

$y_{1}$ çift, $y_{2}$ tek fonksiyon. ==Denklemde yalnız çift kuvvetli katsayılar bulunduğu için bu beklenen bir simetri.==

**Doğrulama.**

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>Hesap</th><th>Sonuç</th></tr>
<tr><td>$y_{1}$, $x^{0}$</td><td>$2a_{2}+a_{0}=-1+1$</td><td>$0$ &#10003;</td></tr>
<tr><td>$y_{1}$, $x^{2}$</td><td>$12a_{4}+3a_{2}+2a_{0}=-\tfrac12-\tfrac32+2$</td><td>$0$ &#10003;</td></tr>
<tr><td>$y_{2}$, $x^{1}$</td><td>$6a_{3}+2a_{1}=-2+2$</td><td>$0$ &#10003;</td></tr>
<tr><td>$y_{2}$, $x^{3}$</td><td>$20a_{5}+4a_{3}+2a_{1}=-\tfrac23-\tfrac43+2$</td><td>$0$ &#10003;</td></tr>
</table>
</div>
[/CEVAP]

[SORU] **7.** &nbsp; $y''+xy'+(3x+2)y=0$
[CEVAP]
**Adım 1 — Hizala.**

$$y''\to(n+2)(n+1)a_{n+2},\quad xy'\to na_{n},\quad 3xy\to 3a_{n-1},\quad 2y\to 2a_{n}$$

**Adım 2 — Topla.** $na_{n}+2a_{n}=(n+2)a_{n}$:

$$\boxed{\;a_{n+2}=-\frac{(n+2)a_{n}+3a_{n-1}}{(n+2)(n+1)}\;}$$

(Yine $a_{-1}=0$ ile $n=0$ dahil her $n$ için geçerli.)

**Adım 3 — Katsayılar.**

$$a_{2}=-a_{0},\quad a_{3}=-\frac{a_{0}+a_{1}}{2},\quad a_{4}=\frac{a_{0}}{3}-\frac{a_{1}}{4},\quad a_{5}=\frac{11a_{0}+5a_{1}}{40}$$

**Adım 4 — Çözümler.** ==Bu kez $a_{n-1}$ terimi var, yani çift ve tek indisler birbirine karışıyor;== ikisi de tam seri:

$$\boxed{\;y_{1}=1-x^{2}-\frac{x^{3}}{2}+\frac{x^{4}}{3}+\frac{11x^{5}}{40}+\cdots\;}$$

$$\boxed{\;y_{2}=x-\frac{x^{3}}{2}-\frac{x^{4}}{4}+\frac{x^{5}}{8}+\cdots\;}$$

**Doğrulama.** Kontrol edilen ifade $(n+2)(n+1)a_{n+2}+(n+2)a_{n}+3a_{n-1}$:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$y_{1}$ için</th><th>$y_{2}$ için</th></tr>
<tr><td>$x^{0}$</td><td>$-2+2=0$ &#10003;</td><td>$0+0=0$ &#10003;</td></tr>
<tr><td>$x^{1}$</td><td>$-3+0+3=0$ &#10003;</td><td>$-3+3+0=0$ &#10003;</td></tr>
<tr><td>$x^{2}$</td><td>$4-4+0=0$ &#10003;</td><td>$-3+0+3=0$ &#10003;</td></tr>
<tr><td>$x^{3}$</td><td>$\tfrac{11}{2}-\tfrac52-3=0$ &#10003;</td><td>$\tfrac52-\tfrac52+0=0$ &#10003;</td></tr>
</table>
</div>

[KUTU]
**5 ile 7'yi karşılaştırın.** İkisi de benzer görünüyor ama ==davranışları taban tabana zıt:==

- **5**'te denklemdeki $x$ kuvvetleri hep çift ($x\cdot y'$ ve $x^{2}y$ terimleri indisi **ikişer** kaydırıyor) → çift ve tek zincirler ayrı kalıyor, çözümler ==çift ve tek fonksiyon.==
- **7**'de $3xy$ terimi indisi **birer** kaydırıyor → zincirler karışıyor, ==simetri yok.==

**Pratik kural:** indirgeme bağıntısında $a_{n-1}$ (tek kaydırma) varsa simetri bozulur; yalnız $a_{n}$ ve $a_{n-2}$ varsa çözümler çift/tek ayrılır. ==Bunu hesaptan önce görebilirsiniz.==
[/KUTU]
[/CEVAP]

[SORU] **9.** &nbsp; $y''-\left(x^{3}+2\right)y'-6x^{2}y=0$
[CEVAP]
**Adım 1 — Terimleri aç ve hizala.**

$$y''\to(n+2)(n+1)a_{n+2},\qquad -2y'\to-2(n+1)a_{n+1}$$

$$-x^{3}y'\to-(n-2)a_{n-2},\qquad -6x^{2}y\to-6a_{n-2}$$

**Adım 2 — Son iki terim birleşiyor.** ==Aynı $a_{n-2}$'yi taşıdıkları için tek terimde toplanır:==

$$-(n-2)a_{n-2}-6a_{n-2}=-(n+4)a_{n-2}$$

$$\boxed{\;a_{n+2}=\frac{2(n+1)a_{n+1}+(n+4)a_{n-2}}{(n+2)(n+1)}\;}$$

**Adım 3 — Katsayılar.**

$$a_{2}=a_{1},\quad a_{3}=\frac{2a_{1}}{3},\quad a_{4}=\frac{a_{0}}{2}+\frac{a_{1}}{3},\quad a_{5}=\frac{a_{0}}{5}+\frac{29a_{1}}{60}$$

**Adım 4 — Çözümler.**

$$\boxed{\;y_{1}=1+\frac{x^{4}}{2}+\frac{x^{5}}{5}+\cdots\;}$$

$$\boxed{\;y_{2}=x+x^{2}+\frac{2x^{3}}{3}+\frac{x^{4}}{3}+\frac{29x^{5}}{60}+\cdots\;}$$

==$y_{1}$'de $x$, $x^{2}$ ve $x^{3}$ terimlerinin hiçbiri yok:== bağıntıda $a_{0}$ ilk kez $n=2$ adımında (yani $a_{4}$'te) devreye giriyor, çünkü $a_{n-2}$ terimi $n\ge 2$'den önce sıfır.

**Doğrulama.** Kontrol edilen ifade $(n+2)(n+1)a_{n+2}-2(n+1)a_{n+1}-(n+4)a_{n-2}$:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$y_{1}$ için</th><th>$y_{2}$ için</th></tr>
<tr><td>$x^{0}$</td><td>$0-0=0$ &#10003;</td><td>$2-2=0$ &#10003;</td></tr>
<tr><td>$x^{1}$</td><td>$0-0=0$ &#10003;</td><td>$4-4=0$ &#10003;</td></tr>
<tr><td>$x^{2}$</td><td>$6-0-6=0$ &#10003;</td><td>$4-4-0=0$ &#10003;</td></tr>
<tr><td>$x^{3}$</td><td>$4-4-0=0$ &#10003;</td><td>$\tfrac{29}{3}-\tfrac83-7=0$ &#10003;</td></tr>
</table>
</div>
[/CEVAP]

[SORU] **10.** &nbsp; $y''-\left(x^{2}+x\right)y'+y=0$
[CEVAP]
**Adım 1 — Hizala.**

$$y''\to(n+2)(n+1)a_{n+2},\quad -x^{2}y'\to-(n-1)a_{n-1},\quad -xy'\to-na_{n},\quad y\to a_{n}$$

**Adım 2 — Şaşırtıcı sadeleşme.** $-na_{n}+a_{n}=-(n-1)a_{n}$; yani ==her iki terimde de aynı $(n-1)$ çarpanı çıkıyor:==

$$(n+2)(n+1)a_{n+2}-(n-1)a_{n-1}-(n-1)a_{n}=0$$

$$\boxed{\;a_{n+2}=\frac{(n-1)\left[a_{n}+a_{n-1}\right]}{(n+2)(n+1)}\;}$$

**Adım 3 — $n=1$'de bağıntı sıfırlanıyor.** $(n-1)=0$ olduğundan ==$a_{3}=0$, hangi başlangıç değerini seçerseniz seçin.== Bu, iki çözümde birden görülecek.

$$a_{2}=-\frac{a_{0}}{2},\quad a_{3}=0,\quad a_{4}=\frac{a_{1}}{12}-\frac{a_{0}}{24},\quad a_{5}=-\frac{a_{0}}{20},\quad a_{6}=\frac{a_{1}}{120}-\frac{a_{0}}{240}$$

**Adım 4 — Çözümler.**

$$\boxed{\;y_{1}=1-\frac{x^{2}}{2}-\frac{x^{4}}{24}-\frac{x^{5}}{20}-\frac{x^{6}}{240}+\cdots\;}$$

$$\boxed{\;y_{2}=x+\frac{x^{4}}{12}+\frac{x^{6}}{120}+\cdots\;}$$

==$y_{2}$ çok seyrek:== $a_{1}$ zincirinde $a_{2}=a_{3}=a_{5}=0$ çıkıyor, ilk katkı ancak $x^{4}$'te geliyor.

**Doğrulama.** Kontrol edilen ifade $(n+2)(n+1)a_{n+2}-(n-1)\left[a_{n}+a_{n-1}\right]$:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$y_{1}$ için</th><th>$y_{2}$ için</th></tr>
<tr><td>$x^{0}$</td><td>$-1+1=0$ &#10003;</td><td>$0-0=0$ &#10003;</td></tr>
<tr><td>$x^{1}$</td><td>$0$ (çarpan sıfır) &#10003;</td><td>$0$ (çarpan sıfır) &#10003;</td></tr>
<tr><td>$x^{2}$</td><td>$-\tfrac12-\left(0-\tfrac12\right)=0$ &#10003;</td><td>$1-(1+0)=0$ &#10003;</td></tr>
<tr><td>$x^{3}$</td><td>$-1-2\left(-\tfrac12+0\right)=0$ &#10003;</td><td>$0-0=0$ &#10003;</td></tr>
</table>
</div>

[KUTU]
**$a_{3}=0$ neden her zaman doğru?** İndirgeme bağıntısının payındaki $(n-1)$ çarpanı $n=1$'de sıfırlanıyor ve $a_{3}$ tam olarak $n=1$ adımından geliyor. ==Başlangıç değerlerinden bağımsız bir yapısal sonuç.==

Böyle çarpanlar seri çözümlerde sık görülür ve ==her zaman bir şey söyler:== Hermite denkleminde $2(n-\alpha)$ çarpanı belli bir $n$'de sıfırlanıp seriyi polinoma çeviriyordu. Buradaki $(n-1)$ ise zinciri kesmiyor, yalnız tek bir terimi düşürüyor — çünkü bağıntı $a_{n+2}$'yi $a_{n}$'e bağlıyor, sıfırlanan terim zincirin devamını durdurmuyor.
[/KUTU]
[/CEVAP]

---

[SORU] **11.** &nbsp; $\left(x^{2}+1\right)y''+xy'+xy=0$
[CEVAP]
**Adım 1 — Nokta adi mi?** Başkatsayı $x^{2}+1$, ==$x=0$'da $1$'e eşit ve sıfırlanmıyor== &nbsp;$\Rightarrow$&nbsp; adi nokta. (Tekil noktalar $x=\pm i$'dir; reel eksende hiç yoktur ama yakınsaklık yarıçapını $R\ge 1$ ile sınırlar.)

**Adım 2 — Başkatsayıyı dağıt ve hizala.**

$$x^{2}y''\to n(n-1)a_{n},\qquad y''\to(n+2)(n+1)a_{n+2},\qquad xy'\to na_{n},\qquad xy\to a_{n-1}$$

==$x^{2}y''$ indisi kaydırmaz==, yalnız katsayıyı $n(n-1)$ yapar; bunu kaçırmak en sık hatadır.

**Adım 3 — Topla.** $n(n-1)a_{n}+na_{n}=n^{2}a_{n}$:

$$\boxed{\;a_{n+2}=-\frac{n^{2}a_{n}+a_{n-1}}{(n+2)(n+1)}\;}$$

**Adım 4 — Katsayılar.** $n=0$'da hem $n^{2}=0$ hem $a_{-1}=0$ olduğundan ==$a_{2}=0$, başlangıç değerlerinden bağımsız olarak.==

$$a_{2}=0,\quad a_{3}=-\frac{a_{0}+a_{1}}{6},\quad a_{4}=-\frac{a_{1}}{12},\quad a_{5}=\frac{3\left(a_{0}+a_{1}\right)}{40},\quad a_{6}=\frac{a_{0}+9a_{1}}{180}$$

**Adım 5 — Çözümler.**

$$\boxed{\;y_{1}=1-\frac{x^{3}}{6}+\frac{3x^{5}}{40}+\frac{x^{6}}{180}+\cdots\;}$$

$$\boxed{\;y_{2}=x-\frac{x^{3}}{6}-\frac{x^{4}}{12}+\frac{3x^{5}}{40}+\frac{x^{6}}{20}+\cdots\;}$$

**Doğrulama.** Kontrol edilen ifade $(n+2)(n+1)a_{n+2}+n^{2}a_{n}+a_{n-1}$:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>$y_{1}$ için</th><th>$y_{2}$ için</th></tr>
<tr><td>$x^{0}$</td><td>$0+0+0=0$ &#10003;</td><td>$0+0+0=0$ &#10003;</td></tr>
<tr><td>$x^{1}$</td><td>$-1+0+1=0$ &#10003;</td><td>$-1+1+0=0$ &#10003;</td></tr>
<tr><td>$x^{2}$</td><td>$0+0+0=0$ &#10003;</td><td>$-1+0+1=0$ &#10003;</td></tr>
<tr><td>$x^{3}$</td><td>$\tfrac32-\tfrac32+0=0$ &#10003;</td><td>$\tfrac32-\tfrac32+0=0$ &#10003;</td></tr>
</table>
</div>
[/CEVAP]

[SORU] **12.** &nbsp; $(x-1)y''-(3x-2)y'+2xy=0$
[CEVAP]
**Adım 1 — Parantezleri aç.** Başkatsayı $x=0$'da $-1$, sıfırlanmıyor &nbsp;$\Rightarrow$&nbsp; adi nokta.

$$xy''-y''-3xy'+2y'+2xy=0$$

**Adım 2 — Hizala.**

$$xy''\to(n+1)na_{n+1},\quad -y''\to-(n+2)(n+1)a_{n+2},\quad -3xy'\to-3na_{n}$$

$$2y'\to 2(n+1)a_{n+1},\qquad 2xy\to 2a_{n-1}$$

**Adım 3 — $a_{n+1}$ terimlerini birleştir.** $(n+1)n+2(n+1)=(n+1)(n+2)$:

$$(n+1)(n+2)\left[a_{n+1}-a_{n+2}\right]=3na_{n}-2a_{n-1}$$

$$\boxed{\;a_{n+2}=a_{n+1}-\frac{3na_{n}-2a_{n-1}}{(n+1)(n+2)}\;}$$

==Bu bağıntı üç katsayıyı birden bağlıyor== — başkatsayının değişken olmasının bedeli budur.

**Adım 4 — Katsayılar.**

$$a_{2}=a_{1},\quad a_{3}=\frac{a_{1}}{2}+\frac{a_{0}}{3},\quad a_{4}=\frac{a_{1}}{6}+\frac{a_{0}}{3},\quad a_{5}=\frac{a_{1}}{24}+\frac{11a_{0}}{60}$$

**Adım 5 — Çözümler.**

$$\boxed{\;y_{1}=1+\frac{x^{3}}{3}+\frac{x^{4}}{3}+\frac{11x^{5}}{60}+\cdots\;}$$

$$\boxed{\;y_{2}=x+x^{2}+\frac{x^{3}}{2}+\frac{x^{4}}{6}+\frac{x^{5}}{24}+\cdots=x\,e^{x}\;}$$

**$y_{2}$ kapalı biçimde yazılabiliyor.** Katsayılara bakın: $1,\,1,\,\tfrac12,\,\tfrac16,\,\tfrac{1}{24}$ — bunlar $\tfrac{1}{0!},\tfrac{1}{1!},\tfrac{1}{2!},\tfrac{1}{3!},\tfrac{1}{4!}$, yani

$$y_{2}=x\left(1+x+\frac{x^{2}}{2!}+\frac{x^{3}}{3!}+\cdots\right)=x\,e^{x}$$

**Doğrulama 1 — kapalı biçimi doğrudan denkleme koy.** ==Seriden tamamen bağımsız bir kontrol:==

$$y=xe^{x},\qquad y'=(1+x)e^{x},\qquad y''=(2+x)e^{x}$$

$$(x-1)(x+2)e^{x}-(3x-2)(1+x)e^{x}+2x\cdot xe^{x}=\Big[\left(x^{2}+x-2\right)-\left(3x^{2}+x-2\right)+2x^{2}\Big]e^{x}=0\;\checkmark$$

**Doğrulama 2 — $y_{1}$ için katsayı kontrolü.** Kontrol edilen ifade $(n+1)(n+2)\left[a_{n+1}-a_{n+2}\right]-3na_{n}+2a_{n-1}$:

<div class="tablo-sar">
<table>
<tr><th>Kuvvet</th><th>Hesap</th><th>Sonuç</th></tr>
<tr><td>$x^{0}$</td><td>$2\left[0-0\right]$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{1}$</td><td>$6\left[0-\tfrac13\right]-0+2$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{2}$</td><td>$12\left[\tfrac13-\tfrac13\right]-0+0$</td><td>$0$ &#10003;</td></tr>
<tr><td>$x^{3}$</td><td>$20\left[\tfrac13-\tfrac{11}{60}\right]-3+0$</td><td>$3-3=0$ &#10003;</td></tr>
</table>
</div>

[KUTU]
**Kapalı biçim yakalamak: ne zaman ve nasıl?** Seri çözümlerde çoğu zaman genel terim çirkindir, ama bazen tanıdık bir açılım çıkar. ==İlk dört-beş katsayıyı hesapladıktan sonra şu üç kalıba bakmaya değer:==

| Katsayılar | Fonksiyon |
|---|---|
| $1,\,1,\,\tfrac12,\,\tfrac16,\,\tfrac{1}{24}$ | $e^{x}$ |
| $1,\,0,\,-\tfrac12,\,0,\,\tfrac{1}{24}$ | $\cos x$ |
| $1,\,1,\,1,\,1,\,1$ | $\dfrac{1}{1-x}$ |

Kapalı biçim bulursanız ==doğrulama bedava gelir:== ifadeyi doğrudan denkleme koyup sınayabilirsiniz, seriye hiç dokunmadan. Yukarıdaki Doğrulama 1 tam olarak budur.

Bulamazsanız sorun değil — soru zaten seri istiyor.
[/KUTU]
[/CEVAP]

[SORU] **13.** &nbsp; $\left(x^{3}-1\right)y''+x^{2}y'+xy=0$
[CEVAP]
**Adım 1 — Adi nokta.** Başkatsayı $x=0$'da $-1$, sıfırlanmıyor.

**Adım 2 — Hizala.** ==Üç terim de indisi bir kaydırıyor, hepsi $a_{n-1}$ üzerinden geliyor:==

$$x^{3}y''\to(n-1)(n-2)a_{n-1},\quad -y''\to-(n+2)(n+1)a_{n+2},\quad x^{2}y'\to(n-1)a_{n-1},\quad xy\to a_{n-1}$$

**Adım 3 — $a_{n-1}$ katsayılarını topla.**

$$(n-1)(n-2)+(n-1)+1=n^{2}-3n+2+n-1+1=n^{2}-2n+2$$

$$\boxed{\;a_{n+2}=\frac{\left(n^{2}-2n+2\right)a_{n-1}}{(n+2)(n+1)}\;}$$

**Adım 4 — İndisler üçer üçer atlıyor.** Bağıntı $a_{n+2}$'yi $a_{n-1}$'e bağlıyor; aradaki fark **üç**. Dolayısıyla ==üç ayrı zincir== oluşur:

<div class="tablo-sar">
<table>
<tr><th>Zincir</th><th>Terimler</th><th>Sonuç</th></tr>
<tr><td>$a_{0}$</td><td>$a_{0},a_{3},a_{6},\ldots$</td><td>birinci çözüm</td></tr>
<tr><td>$a_{1}$</td><td>$a_{1},a_{4},a_{7},\ldots$</td><td>ikinci çözüm</td></tr>
<tr><td>$a_{2}$</td><td>$a_{2},a_{5},a_{8},\ldots$</td><td>==tamamen sıfır==</td></tr>
</table>
</div>

Üçüncü satırın sebebi: $n=0$'da $a_{2}=\dfrac{2a_{-1}}{2}=0$, sonrası zincirleme sıfır.

$$a_{3}=\frac{a_{0}}{6},\quad a_{4}=\frac{a_{1}}{6},\quad a_{6}=\frac{a_{0}}{18},\quad a_{7}=\frac{17a_{1}}{252}$$

**Adım 5 — Çözümler.**

$$\boxed{\;y_{1}=1+\frac{x^{3}}{6}+\frac{x^{6}}{18}+\cdots,\qquad y_{2}=x+\frac{x^{4}}{6}+\frac{17x^{7}}{252}+\cdots\;}$$

**Doğrulama.** Kontrol edilen ifade $\left(n^{2}-2n+2\right)a_{n-1}-(n+2)(n+1)a_{n+2}$:

<div class="tablo-sar">
<table>
<tr><th>$n$</th><th>$y_{1}$ için</th><th>$y_{2}$ için</th></tr>
<tr><td>$1$</td><td>$1-6\cdot\tfrac16=0$ &#10003;</td><td>$0-0=0$ &#10003;</td></tr>
<tr><td>$2$</td><td>$0-0=0$ &#10003;</td><td>$2-12\cdot\tfrac16=0$ &#10003;</td></tr>
<tr><td>$4$</td><td>$10\cdot\tfrac16-30\cdot\tfrac{1}{18}=\tfrac53-\tfrac53=0$ &#10003;</td><td>$0-0=0$ &#10003;</td></tr>
<tr><td>$5$</td><td>$0-0=0$ &#10003;</td><td>$17\cdot\tfrac16-42\cdot\tfrac{17}{252}=\tfrac{17}{6}-\tfrac{17}{6}=0$ &#10003;</td></tr>
</table>
</div>

[KUTU]
**Airy denklemiyle aynı desen.** Bölüm 6.1'deki $y''-xy=0$ denkleminde de indisler üçer üçer atlıyor ve $a_{2}$ zinciri tamamen sıfırlanıyordu.

**Neden aynı:** her iki denklemde de en yüksek $x$ kuvvetiyle $y''$ arasındaki mesafe üç adım. ==Genel kural: $x^{k}$ ile çarpılmış bir terim varsa adım $k+2-k'$ olur== ($k'$ o terimdeki türev mertebesi). Burada $x^{3}y''$ ile $y''$ arasındaki fark $3$.

**Pratik yararı:** adımı önceden bilirseniz hangi katsayıların sıfır olacağını hesaplamadan söylersiniz ve ==boşuna terim hesaplamazsınız.==
[/KUTU]
[/CEVAP]

[SORU] **14.** &nbsp; $(x+3)y''+(x+2)y'+y=0$
[CEVAP]
**Adım 1 — Aç ve hizala.** Başkatsayı $x=0$'da $3$, sıfırlanmıyor.

$$xy''+3y''+xy'+2y'+y=0$$

$$xy''\to(n+1)na_{n+1},\quad 3y''\to 3(n+2)(n+1)a_{n+2},\quad xy'\to na_{n},\quad 2y'\to 2(n+1)a_{n+1},\quad y\to a_{n}$$

**Adım 2 — Grupla.** $(n+1)n+2(n+1)=(n+1)(n+2)$ ve $na_{n}+a_{n}=(n+1)a_{n}$:

$$3(n+2)(n+1)a_{n+2}+(n+1)(n+2)a_{n+1}+(n+1)a_{n}=0$$

**Adım 3 — $(n+1)$ ile sadeleştir.** ==Her terimde ortak çarpan var, bağıntı belirgin biçimde sadeleşiyor:==

$$\boxed{\;a_{n+2}=-\frac{(n+2)a_{n+1}+a_{n}}{3(n+2)}\;}$$

**Adım 4 — Katsayılar.**

$$a_{2}=-\frac{2a_{1}+a_{0}}{6},\qquad a_{3}=-\frac{3a_{2}+a_{1}}{9},\qquad a_{4}=-\frac{4a_{3}+a_{2}}{12},\qquad a_{5}=-\frac{5a_{4}+a_{3}}{15}$$

**Adım 5 — Çözümler.**

$$\boxed{\;y_{1}=1-\frac{x^{2}}{6}+\frac{x^{3}}{18}-\frac{x^{4}}{216}-\frac{7x^{5}}{3240}+\cdots\;}$$

$$\boxed{\;y_{2}=x-\frac{x^{2}}{3}+\frac{x^{4}}{36}-\frac{x^{5}}{108}+\cdots\;}$$

$y_{2}$'de $a_{3}=0$ çıkıyor: $3a_{2}+a_{1}=3\left(-\tfrac13\right)+1=0$.

**Doğrulama.** Kontrol edilen ifade $3(n+2)a_{n+2}+(n+2)a_{n+1}+a_{n}$:

<div class="tablo-sar">
<table>
<tr><th>$n$</th><th>$y_{1}$ için</th><th>$y_{2}$ için</th></tr>
<tr><td>$0$</td><td>$-1+0+1=0$ &#10003;</td><td>$-2+2+0=0$ &#10003;</td></tr>
<tr><td>$1$</td><td>$\tfrac12-\tfrac12+0=0$ &#10003;</td><td>$0-1+1=0$ &#10003;</td></tr>
<tr><td>$2$</td><td>$-\tfrac{1}{18}+\tfrac{4}{18}-\tfrac{3}{18}=0$ &#10003;</td><td>$\tfrac13+0-\tfrac13=0$ &#10003;</td></tr>
<tr><td>$3$</td><td>$-\tfrac{105}{3240}-\tfrac{75}{3240}+\tfrac{180}{3240}=0$ &#10003;</td><td>$-\tfrac{15}{108}+\tfrac{15}{108}+0=0$ &#10003;</td></tr>
</table>
</div>

[KUTU]
**Sadeleşen $(n+1)$ çarpanı bir işarettir.** İndirgeme bağıntısında böyle ortak bir çarpan çıkıyorsa, ==denklemi daha basit bir biçimde yazmanın bir yolu vardır.== Nitekim bu denklem

$$\left[(x+3)y'\right]'+\left[(x+1)y\right]'-y'=0$$

gibi türevi alınmış biçimlere sokulabilir. Sınavda buna girmenize gerek yok, ama sadeleşmeyi görmek ==hesabın doğru gittiğinin işaretidir==: bağıntı beklenenden temiz çıkıyorsa genelde hata yapmamışsınızdır.
[/KUTU]
[/CEVAP]

[SORU] **16.** &nbsp; $y''+xy'-2y=0,\quad y(0)=0,\quad y'(0)=1$
[CEVAP]
**Adım 1 — Başlangıç koşulları katsayıları doğrudan veriyor.**

$$y(0)=a_{0}=0,\qquad y'(0)=a_{1}=1$$

==Bu yüzden iki ayrı çözüm aramaya gerek yok==, tek bir seri çıkacak.

**Adım 2 — İndirgeme bağıntısı.**

$$y''\to(n+2)(n+1)a_{n+2},\qquad xy'\to na_{n},\qquad -2y\to-2a_{n}$$

$$(n+2)(n+1)a_{n+2}+(n-2)a_{n}=0\;\Longrightarrow\;\boxed{\;a_{n+2}=\frac{(2-n)a_{n}}{(n+2)(n+1)}\;}$$

**Adım 3 — Çift zincir tamamen sıfır.** $a_{0}=0$ olduğundan $a_{2}=a_{4}=\cdots=0$. Yalnız tek zincir kalıyor:

$$a_{3}=\frac{1\cdot a_{1}}{6}=\frac{1}{6},\qquad a_{5}=\frac{(-1)a_{3}}{20}=-\frac{1}{120},\qquad a_{7}=\frac{(-3)a_{5}}{42}=\frac{1}{1680}$$

$$\boxed{\;y=x+\frac{x^{3}}{6}-\frac{x^{5}}{120}+\frac{x^{7}}{1680}-\cdots\;}$$

**Doğrulama 1 — başlangıç koşulları.** $y(0)=0$ &#10003; &nbsp;ve&nbsp; $y'(0)=1$ &#10003;

**Doğrulama 2 — katsayılar.** Kontrol edilen ifade $(n+2)(n+1)a_{n+2}+(n-2)a_{n}$:

$n=1$: &nbsp; $6\cdot\tfrac16+(-1)\cdot 1=1-1=0$ &#10003;

$n=3$: &nbsp; $20\cdot\left(-\tfrac{1}{120}\right)+1\cdot\tfrac16=-\tfrac16+\tfrac16=0$ &#10003;

$n=5$: &nbsp; $42\cdot\tfrac{1}{1680}+3\cdot\left(-\tfrac{1}{120}\right)=\tfrac{1}{40}-\tfrac{1}{40}=0$ &#10003;

[KUTU]
**Bu denklemin gizli polinom çözümü var.** Bağıntının payındaki $(2-n)$ çarpanı ==$n=2$'de sıfırlanıyor.== Yani $a_{0}\neq 0$ seçilseydi:

$$a_{2}=a_{0},\qquad a_{4}=\frac{(2-2)a_{2}}{12}=0$$

ve zincir orada biterdi. Çift çözüm sonsuz seri değil, bir **polinom** olurdu:

$$y=1+x^{2}$$

**Doğrudan kontrol:** $y'=2x$, $y''=2$ &nbsp;$\Rightarrow$&nbsp; $2+x(2x)-2\left(1+x^{2}\right)=0$ &#10003;

==Bu, Hermite denklemindeki polinomlaşmanın aynısıdır== (Bölüm 6.2): pay bir yerde sıfırlanıyorsa seri kesilir. Bu problemde $y(0)=0$ verildiği için o çözüm devreye girmiyor, ama ==varlığını bilmek 24. sorudaki Legendre polinomlarına hazırlıktır.==
[/KUTU]
[/CEVAP]

---

### Çözülmeyi bekleyen egzersizler

Yöntem yukarıdaki çözümlerdekiyle aynıdır. ==Sıraya alındı.==

**Başlangıç değer problemlerinin kuvvet serisi çözümünü bulunuz (17-20):**

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

[KUTU]
**İpuçları.**

**17-20** → Başlangıç koşulları doğrudan $a_{0}=y(0)$ ve $a_{1}=y'(0)$ verir. ==İki ayrı çözüm aramaya gerek yok==, tek bir seri çıkar.

**21-23** → $x-1$ kuvvetleri isteniyor, yani $x_{0}=1$. $t=x-1$ koyup denklemi $t$ cinsine çevirmek en temiz yoldur; $x=t+1$ ve türevler değişmez.

**24** → $n(n+1)$ katsayısı, indirgeme bağıntısında $\left[n(n+1)-k(k+1)\right]$ biçiminde bir çarpan doğurur. ==$k=n$ olduğunda sıfırlanır ve seri kesilir== — Hermite'teki polinomlaşmanın aynısı.
[/KUTU]

---

[CLAUDE] Bu setteki soruların hepsi aynı beş adımdan geçer
Kuvvet serisi egzersizleri uzun görünür ama ==her biri aynı iskelettir.== Bir soruya başlamadan önce şu beşi kafanızda sıralayın:

1. **Noktayı sınıflandır** — başkatsayıyı sıfırlayan $x$'ler tekil; $x_{0}$ onlardan biri değilse düz seri.
2. **Yerine koy ve hizala** — bütün toplamları $x^{n}$ üssüne getirin.
3. **Alt sınırları eşitle** — uyuşmayan ilk terimleri toplamın dışına çıkarın.
4. **İndirgeme bağıntısını yaz** — $x^{n}$'in katsayısı sıfır.
5. **İki zinciri ayrı yürüt** — $a_{0}$'dan gelenler bir çözüm, $a_{1}$'den gelenler öteki.

**Zaman kazandıran karar:** soru "ilk dört sıfırdan farklı terimi bulun" diyorsa ==genel terimi aramayın.== İndirgeme bağıntısını bulup dört adım yürütmek yeterlidir; kapalı formül çıkarmak çoğu zaman gereksiz iştir.

**Sonucu sınamanın hızlı yolu.** Bulduğunuz ilk birkaç terimi ==denkleme geri koyup en düşük iki kuvvetin katsayısına bakın;== ikisi de sıfır çıkıyorsa indirgeme bağıntınız neredeyse kesin doğrudur. Bütün seriyi kontrol etmenize gerek yok.
[/CLAUDE]

---
id: frobenius-esit-kokler
menu: 5.10 Eşit Kökler Durumu
tip: konu
baslik: 5.10 &nbsp;Belirtici Denklemin Kökleri Eşit Olduğunda
defterde: yok
---

Örnek 5.11, 5.12 ve 5.13, THEoREM 5.3'ün sonuçlarındaki bütün olasılıkları gösterdi — ==biri hariç:== köklerin eşit olduğu durum, yani $r_{1}-r_{2}=0$.

Bu durumda ne olacağı zaten açıktır: **iki kök de aynı sayı olduğuna göre, ikisi de aynı çözümü verir.** $r$, $r_{1}$ ve $r_{2}$'nin ortak değeri olmak üzere $0<x-x_{0}<R$ için elimizde tek bir çözüm vardır:

$$y_{1}=(x-x_{0})^{r}\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n}$$

İkinci dalı denemenin hiçbir anlamı yoktur; ==aynı hesabı tekrarlamış olursunuz.== Örnek 5.12'deki gibi "küçük kökü deneyelim, belki genel çözümü verir" umudu da burada geçersizdir, çünkü küçük kök diye ayrı bir şey yoktur.

---

### İkinci çözümün biçimi

THEoREM 5.3'ün Sonuç 3'ü, bağımsız ikinci çözümün biçimini veriyor:

$$y_{2}=(x-x_{0})^{r+1}\sum_{n=0}^{\infty}c_{n}^{*}(x-x_{0})^{n}+y_{1}(x)\ln(x-x_{0})$$

[KUTU]
**Bu biçimin iki özelliği dikkat çeker:**

1. **Logaritmalı terim her zaman vardır.** Sonuç 2'deki $C$ sabiti gibi "sıfır olabilir de olmayabilir de" değildir — burada katsayı doğrudan $1$'dir. Eşit köklerde ==logaritmadan kaçış yoktur.==

2. **Üs $r$ değil, $r+1$'dir.** Seri kısmı $y_{1}$'inkinden bir derece yukarıdan başlar. Bu, iki çözümün lineer bağımsız kalmasını sağlayan yapısal ayrımdır.
[/KUTU]

---

### Nasıl bulunur

$y_{1}(x)$ bulunduktan sonra $y_{2}$, **mertebe indirgeme (reduction of order)** ile elde edilir — Örnek 5.13'te ikinci çözümü bulurken izlediğimiz yolun aynısı:

1. $y=y_{1}(x)\,v$ koy.
2. Denkleme yerleştir; $y_{1}$ zaten çözüm olduğu için $v$'li terimler sıfırlanır, geriye $v''$ ve $v'$ içeren birinci mertebeden bir denklem kalır.
3. $w=v'$ ile bu denklemi çöz, sonra integre ederek $v$'yi bul.
4. Integrandın seri açılımındaki ==$x^{-1}$ terimi== logaritmayı doğurur.

Örnek 5.13'te bu adımlar $xv''+(3-x)v'=0$ denklemine, oradan $v=\int x^{-3}e^{x}\,dx$'e ve sonunda $\frac{1}{2}x^{3}e^{-x}\ln x$ terimine götürmüştü. Eşit kökler durumunda da mekanizma birebir aynıdır.

[KUTU]
**Nerede karşınıza çıkacak:** Sıfırıncı mertebeden **Bessel denklemi (Bessel's equation of order zero)** tam olarak bu durumdadır — belirtici denklemin kökleri eşittir ve ikinci çözüm logaritma içerir. Bessel fonksiyonları fizik ve mühendislikte silindirik simetrili problemlerde sürekli karşımıza çıktığı için, bu durum teorik bir merak değil ==pratikte en sık rastlanan hâldir.==
[/KUTU]

---

### Üç durumun tam özeti

| $r_{1}-r_{2}$ | Kaç Frobenius çözümü | İkinci çözüm | Logaritma |
|---|---|---|---|
| Tam sayı değil (kesirli/karmaşık) | 2 | $(x-x_{0})^{r_{2}}\sum c_{n}^{*}(x-x_{0})^{n}$ | Yok |
| Pozitif tam sayı | 1 veya 2 | yukarıdaki $+\,C\,y_{1}\ln(x-x_{0})$ | $C=0$ ise yok, değilse var |
| Sıfır | 1 | $(x-x_{0})^{r+1}\sum c_{n}^{*}(x-x_{0})^{n}+y_{1}\ln(x-x_{0})$ | ==Kesinlikle var== |

Örneklerimiz bu tablonun her satırını kapsıyor: Örnek 5.11 birinci satır ($\frac52$), Örnek 5.12 ikinci satırın $C=0$ hâli, Örnek 5.13 ikinci satırın $C\neq 0$ hâli. Üçüncü satır Bessel denkleminde ele alınacak.

---

[CLAUDE] Eşit kökler tek durumdur ki logaritma kesin çıkar
Kök farkı sıfırsa deneme yapmaya gerek yok: ==ikinci çözüm mutlaka logaritmalıdır ve $C=1$ alınabilir.==

$$y_{2}=y_{1}\ln x+x^{r}\sum_{n=1}^{\infty}b_{n}x^{n}$$

**Neden kesin?** Kök farkı sıfır olduğunda iki çözüm de aynı $x^{r}$ ile başlar. Birbirinden ayrışmalarının başka yolu yoktur, ==logaritma bu ayrışmayı sağlayan tek fonksiyondur.== Diğer iki durumda ($r_{1}-r_{2}$ tam sayı veya değil) $x^{r_{1}}$ ile $x^{r_{2}}$ zaten farklıdır, o yüzden logaritma gerekmeyebiliyor.

**Sınav taktiği.** Bu en uzun hesaplı durumdur. Başlangıç denklemi tam kare çıkıyorsa ($r^{2}-2r+1$ gibi) ==işin uzun süreceğini baştan bilin== ve zaman ayırın. Kısayolu yok; $b_{n}$ katsayıları $y_{1}\ln x$ terimini denkleme koyup türev alarak bulunur.
[/CLAUDE]

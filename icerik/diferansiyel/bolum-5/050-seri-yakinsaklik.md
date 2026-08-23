---
id: seri-yakinsaklik
menu: 5.4 Çözümün Yakınsaklık Aralığı
tip: konu
baslik: 5.4 &nbsp;Seri Çözümün Yakınsaklık Aralığı
defterde: yok
---

Önceki örneklerde kuvvet serisi çözümleri bulduk ama bu serilerin **nerede yakınsadığını (convergence)** tartışmadık. THEoREM 5.1 yalnızca "$x_{0}$ etrafında bir $|x-x_{0}|<R$ aralığında yakınsar" diyor; $R$'nin ne kadar büyük olduğunu söylemiyor. Bu bölüm o boşluğu dolduruyor.

---

### Yakınsaklık yarıçapını veren kural

Denklemi yine normalleştirilmiş biçimde yazalım:

$$y''+P_{1}(x)y'+P_{2}(x)y=0,\qquad P_{1}=\frac{a_{1}}{a_{0}},\quad P_{2}=\frac{a_{2}}{a_{0}}$$

$x_{0}$ bir adi noktaysa, tanım gereği $P_{1}$ ve $P_{2}$ orada analitiktir; yani her ikisinin de $x_{0}$ etrafında yakınsak birer Taylor serisi vardır. Bu serilerin yakınsaklık aralıkları sırasıyla $|x-x_{0}|<R_{1}$ ve $|x-x_{0}|<R_{2}$ olsun.

[KUTU]
**Kural.** Seri çözümün yakınsaklık aralığı $|x-x_{0}|<R$, ==en az== $R_{1}$ ve $R_{2}$'nin **küçüğü** kadardır:

$$R\;\ge\;\min\{R_{1},\,R_{2}\}$$

Yani çözüm serisi, katsayı fonksiyonlarının ikisinin birden yakınsadığı her yerde yakınsar.
[/KUTU]

Pratikte bu şu anlama gelir: ==yakınsaklık yarıçapı, $x_{0}$'dan en yakın tekil noktaya olan uzaklıktan küçük değildir.== Katsayı fonksiyonlarının Taylor serileri ancak bir tekil noktaya çarpınca durur.

---

### Örnek 5.1'in denklemine uygulama

$$y''+xy'+(x^{2}+2)y=0$$

Burada $P_{1}(x)=x$ ve $P_{2}(x)=x^{2}+2$; ikisi de polinomdur. Polinomların Taylor serileri **her $x$ için** yakınsar, yani $R_{1}=R_{2}=\infty$.

Dolayısıyla bulduğumuz seri çözüm

$$y=c_{0}\left(1-x^{2}+\frac{1}{4}x^{4}+\dots\right)+c_{1}\left(x-\frac{1}{2}x^{3}+\frac{3}{40}x^{5}+\dots\right)$$

==bütün $x$ değerleri için yakınsar.== Bu beklenen sonuçtu: denklemin hiç tekil noktası yoktu.

---

### Örnek 5.5'in denklemine uygulama

$$(x^{2}-1)y''+3xy'+xy=0$$

Normalleştirirsek:

$$P_{1}(x)=\frac{3x}{x^{2}-1},\qquad P_{2}(x)=\frac{x}{x^{2}-1}$$

Her ikisinin de paydası $x=\pm 1$'de sıfırlanır. $x_{0}=0$ etrafındaki Taylor serileri, en yakın tekil noktaya kadar yakınsar; $0$'a en yakın tekil noktalar $x=1$ ve $x=-1$, uzaklık $1$'dir. Yani $R_{1}=R_{2}=1$.

Buradan:

$$\boxed{\;y=4+6x+\frac{11}{3}x^{3}+\frac{1}{2}x^{4}+\frac{11}{4}x^{5}+\dots\;\text{serisi en az }|x|<1\text{ için yakınsar.}}$$

[KUTU]
**"En az" ifadesine dikkat.** Kural bir **alt sınır** verir, kesin yarıçapı değil. Gerçek yakınsaklık aralığı daha geniş olabilir; ama garanti edilen en az bu kadardır. Sınav sorularında istenen genellikle bu garanti edilen alt sınırdır.
[/KUTU]

---

### Başlangıç noktası kaydığında: $t=x-x_{0}$ dönüşümü

Başlangıç koşulları $x=0$ yerine başka bir $x_{0}$'da verilirse, $x-x_{0}$ kuvvetlerinde çözüm aranır. En pratik yol **değişken değiştirmektir**.

Örneğin $(x^{2}-1)y''+3xy'+xy=0$, $y(2)=4$, $y'(2)=6$ problemi için $t=x-2$ koyalım. O zaman $x=t+2$ ve

$$x^{2}-1=(t+2)^{2}-1=t^{2}+4t+3,\qquad 3x=3t+6,\qquad x=t+2$$

olduğundan problem şuna dönüşür:

$$\left(t^{2}+4t+3\right)\frac{d^{2}y}{dt^{2}}+(3t+6)\frac{dy}{dt}+(t+2)y=0,\qquad y(0)=4,\;\; y'(0)=6$$

Artık başlangıç koşulları $t=0$'da verilmiştir ve

$$y=\sum_{n=0}^{\infty}c_{n}t^{n}$$

biçiminde, tanıdık "sıfır etrafında seri" problemine indirgenmiştir. Katsayılar Örnek 5.4 ve 5.5'teki gibi bulunur, koşullar uygulanır, sonunda $t$ yerine $x-2$ yazılarak

$$y=\sum_{n=0}^{\infty}c_{n}(x-2)^{n}$$

elde edilir.

**Bu dönüşümün yakınsaklığa etkisi.** Yeni denklemin tekil noktaları $t^{2}+4t+3=(t+1)(t+3)=0$ yani $t=-1$ ve $t=-3$'tür; bunlar $x=1$ ve $x=-1$'e karşılık gelir — ==aynı tekil noktalar, sadece kaydırılmış koordinatta==. $t=0$'a en yakın tekil nokta $t=-1$ olduğundan seri en az $|t|<1$, yani $|x-2|<1$ için yakınsar.

---

[CLAUDE] Yakınsaklık yarıçapını hesaplamadan söyleyebilirsiniz
Oran testiyle uğraşmaya çoğu zaman gerek yok. THEoREM şunu garantiler:

==Seri çözümün yakınsaklık yarıçapı, $x_{0}$'dan **en yakın tekil noktaya** olan uzaklıktan **küçük değildir.**==

**Nasıl kullanılır:** tekil noktaları bulun (başkatsayıyı sıfırlayan $x$'ler), $x_{0}$'a en yakınının uzaklığını ölçün. Cevap odur.

- $\left(x^{2}+9\right)y''+\ldots$, $x_{0}=0$ → tekil noktalar $x=\pm 3i$, uzaklık $3$ → ==$R\ge 3$.==
- $(x-2)y''+\ldots$, $x_{0}=0$ → $R\ge 2$.

**Dikkat: karmaşık kökler de sayılır.** $x^{2}+9$ reel eksende hiç sıfırlanmaz ama yakınsaklığı yine de sınırlar — ==öğrencilerin en sık kaçırdığı nokta budur.== Uzaklık karmaşık düzlemde ölçülür.
[/CLAUDE]

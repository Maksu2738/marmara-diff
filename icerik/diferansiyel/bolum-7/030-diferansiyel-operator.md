---
id: operator-tanim
menu: 7.2 Diferansiyel Operatörler
tip: konu
baslik: 7.2 &nbsp;Sabit Katsayılı Lineer Diferansiyel Operatörler
---

Sabit katsayılı lineer sistemleri çözmek için sembolik bir yöntem kuracağız. Yöntem **diferansiyel operatörlerin (differential operators)** kullanımına dayanır.

$D$ sembolü "$t$'ye göre türev al" işlemini göstersin: $Dx=x'$, $D^{2}x=x''$, genel olarak $D^{k}x=x^{(k)}$.

Bu gösterimle, sabit $a_{0},a_{1},\dots,a_{n}$ katsayılı genel lineer diferansiyel ifade

$$a_{0}x^{(n)}+a_{1}x^{(n-1)}+\dots+a_{n-1}x'+a_{n}x$$

şöyle yazılır:

$$\left(a_{0}D^{n}+a_{1}D^{n-1}+\dots+a_{n-1}D+a_{n}\right)x$$

[KUTU]
**Dikkat — bu bir çarpım değildir.** İfadedeki $D^{n},D^{n-1},\dots,D$ sembolleri $x$ fonksiyonuyla **çarpılacak nicelikler değildir**; bu fonksiyon üzerinde ==yapılacak işlemleri (türev almaları)== gösterirler.

$$a_{0}D^{n}+a_{1}D^{n-1}+\dots+a_{n-1}D+a_{n}$$

ifadesinin kendisine (bir fonksiyona uygulanmadan) **sabit katsayılı lineer diferansiyel operatör** denir.
[/KUTU]

---

### Operatörlerin polinom gibi davranması

$L_{1}$ ve $L_{2}$ iki sabit katsayılı lineer diferansiyel operatör olsun:

$$L_{1}\equiv a_{0}D^{m}+a_{1}D^{m-1}+\dots+a_{m},\qquad L_{2}\equiv b_{0}D^{n}+b_{1}D^{n-1}+\dots+b_{n}$$

Bu operatörlerde $D$ yerine biçimsel olarak $r$ yazarak elde edilen polinomları $L_{1}(r)$ ve $L_{2}(r)$ ile gösterelim, çarpımlarını da $L(r)=L_{1}(r)L_{2}(r)$ diyelim.

O zaman, $f$ fonksiyonu $n+m$ türevlenebiliyorsa şu gösterilebilir:

$$\boxed{\;L_{1}L_{2}f=L_{2}L_{1}f=Lf\;} \tag{7.10}$$

Burada $L$, "çarpım polinomu" $L(r)$'de $r$ yerine yine biçimsel olarak $D$ yazılarak elde edilen operatördür.

$(7.10)$ iki önemli özelliği birden söylüyor:

1. **Sıra önemsizdir (değişme özelliği).** Önce $L_{2}$ uygulayıp sonuca $L_{1}$ uygulamak ile önce $L_{1}$ uygulayıp sonuca $L_{2}$ uygulamak ==aynı sonucu verir.==
2. **Çarpım operatörüyle aynıdır.** Bu ardışık uygulamaların ikisi de, doğrudan "çarpım operatörü" $L$'yi uygulamakla aynıdır.

[KUTU]
**Uyarı: bu özellik sabit katsayılara özeldir.** Katsayılar $t$'ye bağlıysa operatörler genelde ==yer değiştirmez==. Örneğin $D$ ile $t$ (yani "$t$ ile çarp" operatörü) için $D(tf)=f+tf'$ ama $t(Df)=tf'$ — eşit değiller. Bu bölümdeki bütün yöntem sabit katsayı varsayımına dayanır.
[/KUTU]

---

### Çarpanlara ayırma

$L\equiv a_{0}D^{n}+a_{1}D^{n-1}+\dots+a_{n}$ operatörüne karşılık gelen polinom $L(r)$ olsun ve $r_{1},r_{2},\dots,r_{n}$, $L(r)=0$ denkleminin kökleri olsun. O zaman

$$L(r)=a_{0}(r-r_{1})(r-r_{2})\cdots(r-r_{n})$$

Sağ tarafta $r$ yerine biçimsel olarak $D$ yazarsak operatörün çarpanlara ayrılmış biçimini elde ederiz:

$$L=a_{0}(D-r_{1})(D-r_{2})\cdots(D-r_{n})$$

==Yani sabit katsayılı lineer diferansiyel operatörler, cebirsel bir $D$ niceliğinin polinomlarıymış gibi biçimsel olarak çarpılabilir ve çarpanlara ayrılabilir.== Yöntemin bütün gücü bu gözlemden gelir.

---

[SORU] **Örnek 7.1.** &nbsp; $3D^{2}+5D-2$ operatörünü $x=t^{3}$ fonksiyonuna uygulayınız.
[CEVAP]
$x$ iki kez türevlenebilir bir $t$ fonksiyonuysa

$$\left(3D^{2}+5D-2\right)x\quad\text{ifadesi}\quad 3x''+5x'-2x$$

anlamına gelir. $x=t^{3}$ için:

$$\left(3D^{2}+5D-2\right)t^{3}=3\frac{d^{2}}{dt^{2}}\left(t^{3}\right)+5\frac{d}{dt}\left(t^{3}\right)-2t^{3}$$

$$=3(6t)+5\left(3t^{2}\right)-2t^{3}$$

$$\boxed{\;=18t+15t^{2}-2t^{3}\;}$$

==Sabit terim $-2$'nin "türev alma" değil "fonksiyonun kendisiyle çarp" anlamına geldiğine dikkat edin==; $D^{0}=1$ olarak düşünülür.

[SORU] **Örnek 7.2.** &nbsp; $L_{1}\equiv D^{2}+1$, $L_{2}\equiv 3D+2$ ve $f(t)=t^{3}$ için $L_{1}L_{2}f$ ile $L_{2}L_{1}f$'yi hesaplayıp karşılaştırınız.
[CEVAP]
**Önce $L_{2}$, sonra $L_{1}$:**

$$L_{2}f=(3D+2)t^{3}=3\left(3t^{2}\right)+2t^{3}=9t^{2}+2t^{3}$$

$$L_{1}L_{2}f=\left(D^{2}+1\right)\left(9t^{2}+2t^{3}\right)=9\left(D^{2}+1\right)t^{2}+2\left(D^{2}+1\right)t^{3}$$

$$=9\left(2+t^{2}\right)+2\left(6t+t^{3}\right)=18+9t^{2}+12t+2t^{3}$$

$$L_{1}L_{2}f=2t^{3}+9t^{2}+12t+18$$

**Önce $L_{1}$, sonra $L_{2}$:**

$$L_{1}f=\left(D^{2}+1\right)t^{3}=6t+t^{3}$$

$$L_{2}L_{1}f=(3D+2)\left(6t+t^{3}\right)=6(3D+2)t+(3D+2)t^{3}$$

$$=6(3+2t)+\left(9t^{2}+2t^{3}\right)=18+12t+9t^{2}+2t^{3}$$

$$L_{2}L_{1}f=2t^{3}+9t^{2}+12t+18$$

**Sonuç:** İkisi aynı çıktı. $(7.10)$'un öngördüğü gibi

$$\boxed{\;L_{1}L_{2}f=L_{2}L_{1}f\;}$$

**Çarpım operatörüyle kontrol.** $L(r)=\left(r^{2}+1\right)(3r+2)=3r^{3}+2r^{2}+3r+2$, yani $L\equiv 3D^{3}+2D^{2}+3D+2$. Bunu doğrudan $t^{3}$'e uygularsak:

$$3(6)+2(6t)+3\left(3t^{2}\right)+2t^{3}=18+12t+9t^{2}+2t^{3}$$

==Üçü de aynı.== $(7.10)$'un ikinci iddiası da doğrulanmış oldu.

---

[CLAUDE] Operatörler polinom gibi davranır — ama bir şartla
$D=\dfrac{d}{dx}$ yazınca sabit katsayılı ifadeler ==cebirsel polinom gibi== işlenebilir:

$$\left(D^{2}-3D+2\right)y=(D-1)(D-2)y$$

Çarpanlara ayırabilir, sıralarını değiştirebilir, dağıtabilirsiniz.

**Şart:** ==katsayılar sabit olmalı.== Değişken katsayılıda sıra değişmez:

$$D(xy)=xDy+y\qquad\text{ama}\qquad xD(y)=xy'$$

yani $Dx\neq xD$. Cauchy-Euler'i operatörle çözerken bu yüzden $x$ değil, ==$D=x\dfrac{d}{dx}$ operatörü== kullanılır.

**Sistemlerde kazancı.** İki denklemli bir sistemi operatör biçiminde yazıp, ==iki bilinmeyenli denklem sistemi gibi yok etme yöntemiyle== çözebilirsiniz. Katsayılar $D$ polinomları olur, gerisi lise cebiri.
[/CLAUDE]

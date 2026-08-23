---
id: operator-yontem
menu: 7.3 Operatör Yöntemi
tip: konu
baslik: 7.3 &nbsp;Sabit Katsayılı Sistemler için Operatör Yöntemi
---

Şimdi sabit katsayılı lineer sistemleri çözen sembolik yöntemi kuruyoruz. Yöntem ==tamamen biçimsel== olarak anlatılacak; gerekçelendirmesine girilmeyecektir.

Şu biçimdeki sistemi ele alalım:

$$L_{1}x+L_{2}y=f_{1}(t)$$
$$L_{3}x+L_{4}y=f_{2}(t) \tag{7.11}$$

Burada $L_{1},L_{2},L_{3},L_{4}$ sabit katsayılı lineer diferansiyel operatörlerdir:

$$L_{1}\equiv a_{0}D^{m}+\dots+a_{m},\qquad L_{2}\equiv b_{0}D^{n}+\dots+b_{n}$$
$$L_{3}\equiv \alpha_{0}D^{p}+\dots+\alpha_{p},\qquad L_{4}\equiv \beta_{0}D^{q}+\dots+\beta_{q}$$

[KUTU]
**Bir sistemi $(7.11)$ biçimine sokmak.** Örnek:

$$2x'-2y'-3x=t,\qquad 2x'+2y'+3x+8y=2$$

Her denklemde $x$'li ve $y$'li terimleri ayrı gruplayıp $D$ cinsinden yazarız:

$$\underbrace{(2D-3)}_{L_{1}}x+\underbrace{(-2D)}_{L_{2}}y=t,\qquad \underbrace{(2D+3)}_{L_{3}}x+\underbrace{(2D+8)}_{L_{4}}y=2$$

Yani $L_{1}\equiv 2D-3$, $L_{2}\equiv -2D$, $L_{3}\equiv 2D+3$, $L_{4}\equiv 2D+8$.
[/KUTU]

---

### $y$'yi eleme

Genel sisteme dönelim. Birinci denkleme $L_{4}$, ikinci denkleme $L_{2}$ operatörünü uygulayalım:

$$L_{4}L_{1}x+L_{4}L_{2}y=L_{4}f_{1}$$
$$L_{2}L_{3}x+L_{2}L_{4}y=L_{2}f_{2}$$

İkinciyi birinciden çıkaralım. ==Burada 7.2'deki değişme özelliği devreye giriyor:== $L_{4}L_{2}y=L_{2}L_{4}y$ olduğundan $y$'li terimler birbirini götürür:

$$\left(L_{1}L_{4}-L_{2}L_{3}\right)x=L_{4}f_{1}-L_{2}f_{2} \tag{7.12}$$

Sol taraftaki $L_{1}L_{4}-L_{2}L_{3}$ ifadesi kendisi de sabit katsayılı lineer bir diferansiyel operatördür. Bunun ne sıfır ne de sıfırdan farklı bir sabit olduğunu varsayıp $L_{5}$ diyelim. Sağ taraf da bir $g_{1}(t)$ fonksiyonu olsun. O zaman:

$$\boxed{\,L_{5}x=g_{1}\,} \tag{7.13}$$

[KUTU]
**Ne kazandık?** $(7.13)$, ==tek bilinmeyenli== sabit katsayılı lineer bir diferansiyel denklemdir. Diğer bilinmeyen $y$ elenmiştir. Artık bildiğimiz yöntemlerle çözülebilir.

$L_{1}L_{4}-L_{2}L_{3}$ ifadesinin, katsayı matrisinin **determinantına** benzediğine dikkat edin. Lineer cebirdeki eleme ile birebir aynı hamledir; tek fark çarpılan şeylerin sayı değil operatör olmasıdır.
[/KUTU]

$(7.13)$ denklemi $N$. mertebedense genel çözümü şu biçimdedir:

$$x=c_{1}u_{1}+c_{2}u_{2}+\dots+c_{N}u_{N}+U_{1} \tag{7.14}$$

Burada $u_{1},\dots,u_{N}$ homojen denklem $L_{5}x=0$'ın lineer bağımsız çözümleri, $c_{1},\dots,c_{N}$ keyfi sabitler ve $U_{1}$ ise $L_{5}x=g_{1}$'in bir özel çözümüdür.

---

### $x$'i eleme

Aynı sisteme dönüp bu kez birinci denkleme $L_{3}$, ikinci denkleme $L_{1}$ uygulayalım:

$$L_{3}L_{1}x+L_{3}L_{2}y=L_{3}f_{1}$$
$$L_{1}L_{3}x+L_{1}L_{4}y=L_{1}f_{2}$$

Birinciyi ikinciden çıkarırsak, $L_{3}L_{1}x=L_{1}L_{3}x$ olduğundan bu kez ==$x$'li terimler götürür== ve $y$ için benzer bir denklem kalır:

$$\left(L_{1}L_{4}-L_{2}L_{3}\right)y=L_{1}f_{2}-L_{3}f_{1}$$

Yani $L_{5}y=g_{2}$ biçiminde, **soldaki operatörü $x$ denklemiyle aynı olan** bir denklem.

[KUTU]
**Kritik uyarı — sabitler bağımsız değildir.** $x$ ve $y$ ayrı ayrı çözüldüğünde her biri kendi keyfi sabitlerini getirir; toplamda $2N$ sabit görünür. Ama sistemin genel çözümünde ==yalnızca $N$ tanesi bağımsızdır.==

Fazla sabitleri elemek için bulunan $x$ ve $y$ ifadeleri **orijinal sistemin denklemlerinden birine geri konur** ve sabitler arasındaki bağıntılar çıkarılır. Bu adım atlanırsa çözüm yanlış olur — operatör yönteminde en sık yapılan hata budur.
[/KUTU]

---

### Yöntemin özeti

1. Sistemi $L_{1}x+L_{2}y=f_{1}$, $L_{3}x+L_{4}y=f_{2}$ biçimine sok.
2. $L_{5}=L_{1}L_{4}-L_{2}L_{3}$ operatörünü hesapla (determinant benzeri).
3. $L_{5}x=L_{4}f_{1}-L_{2}f_{2}$ denklemini çöz.
4. $L_{5}y=L_{1}f_{2}-L_{3}f_{1}$ denklemini çöz.
5. ==Bulunanları orijinal sisteme geri koyup fazla keyfi sabitleri ele.==

**Yöntemin sınırı.** $L_{5}$ sıfır ya da sıfırdan farklı bir sabit çıkarsa yöntem kullanılamaz. Bu, sistemin ya çözümsüz ya da beklenenden farklı yapıda olduğunun işaretidir.

---

[CLAUDE] Yok etme adımı: cebirle aynı, tek farkla
İki denklemi operatör biçiminde yazdıktan sonra ==tam olarak iki bilinmeyenli denklem sistemi gibi== davranın: bir denklemi bir operatörle çarpın, öbürüyle taraf tarafa çıkarın, bir bilinmeyen gitsin.

**Tek fark ve tek tuzak:** çarparken operatörü ==denklemin her terimine== uygulamalısınız, sağ taraf dahil. $(D-1)$ ile çarpmak, sağ taraftaki $e^{2t}$'yi de türevleyip çıkarmak demektir:

$$(D-1)e^{2t}=2e^{2t}-e^{2t}=e^{2t}$$

Sağ tarafı olduğu gibi bırakmak, ==bu yöntemde en sık görülen hatadır.==

**Sonrası tanıdık.** Yok etme bitince elinizde tek bilinmeyenli, sabit katsayılı, yüksek mertebeden bir denklem kalır — Bölüm 3'te çözmeyi öğrendiğiniz denklemin aynısı. Karakteristik denklem + belirsiz katsayılar ile bitirin.

**Bitirmeden önce:** ikinci bilinmeyeni ==ikinci kez yok etme yaparak değil==, bulduğunuz birinciyi orijinal denklemlerden birine koyarak bulun. İki ayrı yok etme yaparsanız sabitler birbirinden bağımsız çıkar ve fazladan sabitleri elemek zorunda kalırsınız.
[/CLAUDE]

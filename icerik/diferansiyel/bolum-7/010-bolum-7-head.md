---
id: operator
menu: Giriş
tip: chapter-head
baslik: BÖLÜM 7: Lineer Sistemler ve Diferansiyel Operatörler
---

Şimdiye kadar hep **tek bilinmeyenli tek bir denklemle** uğraştık. Bu bölümde iki bilinmeyenli iki denklemden oluşan sistemleri, daha genel olarak $n$ bilinmeyenli $n$ denklemden oluşan **lineer sistemleri (linear systems)** ele alacağız.

### Bölümün akışı

**7.1 Sistem türleri.** Önce hangi biçimlerle karşılaşacağımızı tanıyoruz: genel biçim, **normal biçim (normal form)** ve bunlar arasındaki ilişki. Burada önemli bir bağlantı ortaya çıkıyor: ==tek bir $n$. mertebeden denklem, $n$ tane birinci mertebeden denklemden oluşan bir sisteme dönüştürülebilir.== Bu, iki konuyu birbirine bağlayan köprüdür.

**7.2 Diferansiyel operatörler.** Türev almayı bir çarpan gibi yazmayı sağlayan $D$ gösterimini kuruyoruz. Sabit katsayılı lineer diferansiyel operatörlerin ==tıpkı polinomlar gibi çarpılıp çarpanlara ayrılabildiğini== göreceğiz; bu, yöntemin gücünün kaynağıdır.

**7.3 Operatör yöntemi.** Sabit katsayılı sistemleri çözmek için sembolik bir yöntem: bilinmeyenlerden birini yok edip geriye tek bilinmeyenli, bildiğimiz türden bir denklem bırakıyoruz.

**7.6 ve sonrası — ★ hocanın ders notu.** 7.5'ten sonra bölüm ikinci kez, bu kez ==hocanın kendi anlatımıyla== başlıyor. Ders notunun "Chapter 7: Differential Operators" bölümü operatörü bir *araç* olarak değil ==başlı başına bir konu== olarak ele alıyor: operatör nedir (7.6), fonksiyonlara nasıl etki eder (7.7), lineerlik (7.8), denklem çözme (7.9), komütatör (7.10), homojen olmayan denklemler (7.11), yok ediciler (7.12), birinci mertebeye indirgeme (7.13) ve özfonksiyonlar (7.14).

İki anlatım çelişmiyor; hocanınki daha geneldir ve yukarıdaki $D$ gösterimini kapsar.

[KUTU]
**Yöntemin özü tek cümlede:** Lineer cebirde iki bilinmeyenli denklem sistemini çözerken bir bilinmeyeni yok ederiz. Burada da aynısını yapıyoruz — tek fark, katsayıların sayı değil ==diferansiyel operatör== olması. Operatörler polinom gibi davrandığı için aynı eleme hamlesi işe yarıyor.
[/KUTU]

---

[CLAUDE] Bu bölüm 4.5 ile aynı problemi farklı yoldan çözüyor
Diferansiyel operatörler bölümünün konusu ==lineer sistemlerdir== — yani Bölüm 4.5'te Laplace ile çözdüğünüz problemin aynısı. İki yöntem arasındaki seçim şuna bakar:

- **Başlangıç koşulu verilmişse** → Laplace daha kısa; koşullar baştan girer, keyfi sabit çıkmaz.
- **Genel çözüm isteniyorsa** → operatör yöntemi daha doğal; zaten sabitli sonuç arıyorsunuz.

**Bölümün tek gerçek yeniliği** $D=\dfrac{d}{dx}$ gösterimidir ve o da ==sabit katsayılı ifadeleri polinom gibi çarpanlara ayırabilmenizi== sağlar. Gerisi Bölüm 3'ten tanıdık: yok etme sonucu tek bilinmeyenli sabit katsayılı bir denklem kalır, onu karakteristik denklemle çözersiniz.

**Bölümün tek tuzağı** sabit sayısıdır. İki bilinmeyeni ayrı ayrı çözerseniz fazla sabit çıkar; ==doğru sayıyı operatör determinantının derecesi verir== ve fazlalıkları elemek için sonucu orijinal sisteme geri koymak zorunludur. (Bkz. 7.4.)
[/CLAUDE]

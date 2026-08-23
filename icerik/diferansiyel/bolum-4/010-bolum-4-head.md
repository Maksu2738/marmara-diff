---
id: laplace
menu: Giriş
tip: chapter-head
baslik: BÖLÜM 4: Laplace Dönüşümü
---

**Laplace dönüşümü (Laplace transform)**, başlangıç değer problemlerinin çözümünde özellikle kullanışlı bir araçtır. Bir $f$ fonksiyonunu ($t$ değişkenli) başka bir $F$ fonksiyonuna ($s$ değişkenli) çevirir.

Yöntemin bütün fikri şu tek gözlemde saklıdır:

$$\mathcal{L}\{f'(t)\}=s\,\mathcal{L}\{f(t)\}-f(0)$$

==Türev almak, $s$ ile çarpmaya dönüşüyor.== Bu yüzden bir diferansiyel denklem, dönüşüm alındığında **cebirsel denkleme** iner. Cebirsel denklem çözülür, sonra geri çevrilir.

[KUTU]
**Klasik yöntemlerden temel farkı.** Sabit katsayılı denklemleri karakteristik denklem ve belirsiz katsayılarla da çözebiliyorduk. Oradaki sıra şuydu: **önce genel çözüm, sonra başlangıç koşulları.**

Laplace'ta sıra tersinedir — yukarıdaki formüldeki $-f(0)$ terimi sayesinde ==başlangıç koşulları daha ilk adımda denkleme girer== ve doğrudan özel çözüme varılır. Homojen/özel çözüm ayrımı hiç yapılmaz.

Bu fark, süreksiz zorlama terimlerinde belirleyici bir üstünlüğe dönüşür: klasik yöntemler orada parça parça çözüp bağlantı koşulları yazmak zorunda kalırken, Laplace tek hamlede sonuca gider.
[/KUTU]

### Bölümün akışı

**4.1 — Temeller.** Dönüşümün tanımı, hangi fonksiyonlar için var olduğu (parçalı süreklilik ve üstel mertebe), temel dönüşümler ve türev kuralı. Ayrıca iki üretken özellik: **öteleme** ($e^{at}$ ile çarpma) ve **$t^n$ ile çarpma**. Bu ikisi sayesinde birkaç temel dönüşümden çok daha fazlası elde edilir.

**4.2 — Ters dönüşüm.** Asıl zorluk burada. $Y(s)$ bulunduktan sonra $y(t)$'yi geri çıkarmak gerekir. Araçlar: **dönüşüm tablosu**, **kısmi kesirler**, **tamkareye tamamlama** ve tabloların yetmediği yerde **konvolüsyon**.

**4.3 — Denklem çözümü.** Üç adımlık yöntemin tam uygulaması; birinci, ikinci ve üçüncü mertebeden örnekler.

**4.4 — Süreksiz zorlama.** **Birim basamak fonksiyonu** ile süreksiz terimlerin nasıl ifade edileceği, **ikinci öteleme THEoREM'i** ve periyodik fonksiyonların dönüşümü.

**4.5 — Sistemler.** İki bilinmeyenli lineer sistemlerin Laplace ile çözümü.

[KUTU]
**Çalışırken izlenecek sıra:**

1. Denklemin her iki tarafının dönüşümünü al; türev kuralıyla başlangıç koşulları kendiliğinden girer.
2. Çıkan cebirsel denklemi $\mathcal{L}\{y\}$ için çöz.
3. Sonucu tablonun tanıyacağı biçime sok — kısmi kesir, tamkare, gerekirse konvolüsyon.
4. Ters dönüşümle $y(t)$'yi bul.

İlk iki adım mekaniktir. ==Zaman ve dikkat üçüncü adımda harcanır==; bu bölümün örneklerinin çoğu da orayı çalıştırmak içindir.
[/KUTU]

**Bir uyarı.** Laplace'ta "öteleme" adını taşıyan **iki ayrı** THEoREM vardır ve sürekli karıştırılırlar. Ayrım şudur: ==$s$ kaydıysa birinci (4.1), $t$ kaydıysa ikinci (4.4).== İkisinin karşılaştırmalı tablosu 4.4'tedir.

---

[CLAUDE] Bu bölüm finalin en ağır parçası — nereye yükleneceğinizi bilin
Ders notundaki **13 yıldızlı sorunun tamamı** 4.1-4.3 aralığında. Bölümün geri kalanı kitapta var ama derste işlenmemiş; onlar kırmızı şeritle işaretli.

**Öncelik sırası:**

1. **4.1 - 4.3** — tanım, türev THEoREM'leri, ters dönüşüm, başlangıç değer problemi. ==Zamanınızın çoğu buraya gitsin.==
2. **Ödev 5** — vizede ödevden aynen soru çıkmıştı; bu bölümün ödevi de aynı kalıpta.
3. Kırmızı bölümler (4.4 birim basamak, 4.5 sistemler) — zaman kalırsa.

**Bölümün mantığını bir cümlede tutun:** Laplace, ==diferansiyel denklemi cebirsel denkleme çeviren bir sözlüktür.== Türev $s$ ile çarpmaya, integral $s$'ye bölmeye, öteleme üstel çarpana dönüşür. Sözlüğü ezberlemek yerine bu üç eşleşmeyi kavrayın; tablodaki her satır bunlardan türer.

**Ve tek satırlık evrensel kontrol:** bulduğunuz her $F(s)$, $s\to\infty$ iken ==sıfıra gitmelidir.== Gitmiyorsa hata vardır.
[/CLAUDE]

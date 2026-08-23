---
id: seri
menu: Giriş
tip: chapter-head
baslik: BÖLÜM 5: Kuvvet Serisi Çözümleri
---

Sabit katsayılı lineer diferansiyel denklemlerin çözümlerini, üstel ve trigonometrik fonksiyonlar gibi **elemanter fonksiyonların (elementary functions)** sonlu birleşimleri olarak yazabiliyorduk. Ancak katsayılar değişken olduğunda bu genellikle mümkün değildir — çözüm vardır, ama bilinen fonksiyonlarla ifade edilemez.

Bu bölüm, o çözümlere ulaşmanın bir yolunu kuruyor: çözümü ==sonsuz bir seri olarak varsayıp katsayılarını denklemin kendisinden belirlemek==.

### Bölümün akışı

**5.1 – 5.4: Adi nokta etrafında.** Önce çözümün ne zaman seri biçiminde var olduğunu söyleyen koşulu kuruyoruz (adi nokta, tekil nokta, THEoREM 5.1), sonra katsayıları bulma yöntemini adım adım işliyoruz. Yöntemin can alıcı adımı **indeks kaydırmadır**; öğrencilerin en çok takıldığı yer burasıdır ve 5.2'de ayrıntısıyla ele alınmıştır. 5.4 ise bulunan serinin nerede geçerli olduğunu — yakınsaklık aralığını — belirliyor.

**5.6: Tekil nokta etrafında.** Adi nokta koşulu sağlanmadığında sıradan kuvvet serisi yetmez. Tekil noktaları **düzgün** ve **düzgün olmayan** diye ayırıyoruz; düzgün olanlarda seriyi $|x-x_{0}|^{r}$ çarpanıyla genişleten **Frobenius yöntemi** devreye giriyor.

[KUTU]
**Bölümü çalışırken izlenecek soru sırası:**

1. $x_{0}$ adi nokta mı, tekil nokta mı? — $P_{1}$ ve $P_{2}$'nin analitikliğine bak
2. Tekilse düzgün mü? — $(x-x_{0})P_{1}$ ve $(x-x_{0})^{2}P_{2}$ analitik mi?
3. Buna göre hangi biçimi varsayacağım? — $\sum c_{n}(x-x_{0})^{n}$ mi, $|x-x_{0}|^{r}\sum c_{n}(x-x_{0})^{n}$ mi?
4. Katsayıları özyineleme formülünden çıkar
5. Varsa başlangıç koşullarını uygula
6. Yakınsaklık aralığını belirt

Neredeyse bütün sınav soruları bu altı adımın bir birleşimidir.
[/KUTU]

---

[CLAUDE] Bu bölümü öğrenirseniz Bölüm 6'yı bedava alırsınız
Kuvvet serisi bölümü uzun görünür ama ==tek bir mekaniğin tekrarıdır:== seriyi denkleme koy, katsayıları eşitle, indirgeme bağıntısını çıkar, ilk birkaç terimi yaz.

**Üç katman, her biri bir öncekinin üstüne biniyor:**

| Katman | Eklenen tek şey |
|---|---|
| **5.1-5.3** Adi nokta, düz seri | temel mekanik |
| **5.6-5.7** Frobenius | bir $x^{r}$ çarpanı ve başlangıç denklemi |
| **Bölüm 6** Airy, Hermite, Bessel | yalnızca farklı katsayılar |

==Yani Bölüm 6 yeni bir konu değil, bu bölümün uygulamasıdır.== Buraya yatırdığınız zaman iki bölüm birden kazandırır.

**Sınav ekonomisi.** Bu tip sorularda puanın büyük kısmı ==ilk yarıda== verilir: doğru sınıflandırma, doğru yerine koyma, doğru indirgeme bağıntısı. Seriyi sonuna kadar açmak son birkaç puandır. Zaman daralıyorsa bağıntıyı yazıp birkaç terim üretin, bırakın.

**Derste işlenen sınır:** Frobenius'ta ==yalnız kolay durum== (kök farkı tam sayı değil) işlenmiş. Logaritmalı ve eşit kök durumları kırmızı işaretli — kitapta var, önceliği düşük.
[/CLAUDE]

---
id: frobenius-yontem
menu: 5.7 Frobenius Yöntemi — Adım Adım
tip: konu
baslik: 5.7 &nbsp;Frobenius Yöntemi ve Belirtici Denklem
---

THEoREM 5.2 bize düzgün tekil nokta etrafında en az bir çözümün varlığını verdi. Peki bu çözümdeki $c_{n}$ katsayılarını ve $r$ sayısını nasıl belirleriz?

İzlenecek yol 5.2'dekine benzer ve **Frobenius yöntemi (method of Frobenius)** adıyla bilinir. Aşağıda $0<x-x_{0}<R$ aralığında geçerli çözümler arayacağız; bu aralıkta $|x-x_{0}|$ sadece $x-x_{0}$'a eşittir, mutlak değer işaretiyle uğraşmaya gerek kalmaz.

[KUTU]
**Negatif taraf için:** $-R<x-x_{0}<0$ aralığında geçerli çözüm isteniyorsa, $x-x_{0}$ yerine $-(x-x_{0})>0$ yazıp aynı adımlar izlenir.
[/KUTU]

---

### Adım 1 — Çözümü varsay

$$y=(x-x_{0})^{r}\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n}$$

Bunu tek bir toplam hâlinde yazmak hesabı çok kolaylaştırır:

$$y=\sum_{n=0}^{\infty}c_{n}(x-x_{0})^{n+r},\qquad \boxed{c_{0}\neq 0} \tag{5.53}$$

==$c_{0}\neq 0$ koşulu yöntemin belkemiğidir.== Bu koşul olmasaydı, seriyi $r$'yi değiştirip başa sıfır katsayılar ekleyerek sonsuz farklı biçimde yazabilirdik ve $r$ belirsiz kalırdı. $c_{0}\neq 0$ demek, "$r$ gerçekten ilk terimin üssüdür" demektir.

### Adım 2 — Terim terime türev al

$$y'=\sum_{n=0}^{\infty}(n+r)c_{n}(x-x_{0})^{n+r-1} \tag{5.54}$$

$$y''=\sum_{n=0}^{\infty}(n+r)(n+r-1)c_{n}(x-x_{0})^{n+r-2} \tag{5.55}$$

[KUTU]
**5.2'den önemli bir fark:** Orada türev alınca toplamın alt sınırı yükseliyordu ($n=0\to n=1\to n=2$). Burada ==alt sınır hep $n=0$'da kalır==, çünkü $r$ genelde tam sayı değildir; $(n+r)$ çarpanı $n=0$ için sıfır olmaz. Bu, hesabı 5.2'ye göre daha düzenli kılar.
[/KUTU]

### Adım 3 — Denkleme yerleştir ve düzenle

$(5.53)$, $(5.54)$ ve $(5.55)$'i denkleme koyup sadeleştirerek şu biçime getiririz:

$$K_{0}(x-x_{0})^{r+k}+K_{1}(x-x_{0})^{r+k+1}+K_{2}(x-x_{0})^{r+k+2}+\dots=0 \tag{5.56}$$

Burada $k$ belirli bir tam sayıdır ve $K_{i}$ katsayıları hem $r$'nin hem de $c_{n}$'lerin fonksiyonlarıdır.

### Adım 4 — Bütün katsayıları sıfıra eşitle

$(5.56)$'nın delinmiş aralıktaki her $x$ için geçerli olması isteniyorsa:

$$K_{0}=K_{1}=K_{2}=\dots=0$$

---

### Adım 5 — Belirtici denklem

En düşük kuvvetin katsayısı olan $K_{0}$'ı sıfıra eşitlemek, ==$r$ cinsinden ikinci dereceden bir denklem== verir. Buna denklemin **belirtici denklemi (indicial equation)** denir.

Bu denklemin iki kökü, denklemin **üstelleri (exponents)** diye anılır ve $(5.53)$'teki $r$ sabitinin alabileceği ==yegâne değerlerdir==. Yani bu adımda "bilinmeyen" $r$ belirlenmiş olur.

Kökleri $r_{1}$ ve $r_{2}$ ile gösterelim; sıralama şu kurala göre yapılır:

$$\operatorname{Re}(r_{1})\ \ge\ \operatorname{Re}(r_{2})$$

Burada $\operatorname{Re}(r_{j})$, $r_{j}$'nin **reel kısmıdır (real part)**. $r_{j}$ zaten reelse $\operatorname{Re}(r_{j})$ doğrudan $r_{j}$'nin kendisidir; yani reel ve farklı köklerde $r_{1}$ ==büyük== kök, $r_{2}$ ==küçük== köktür.

### Adım 6 — Kalan koşullar

Geriye kalan $K_{1},K_{2},\dots$ katsayılarını da sıfıra eşitleriz. Bu, içinde $r$ sabiti geçen ve $c_{n}$'lerin sağlaması gereken bir koşullar kümesi verir — yani $r$'ye bağlı bir özyineleme formülü.

### Adım 7 — Büyük kökü yerleştir

Adım 6'daki koşullarda $r$ yerine $r_{1}$ yazıp $c_{n}$'leri bu koşulları sağlayacak biçimde seçeriz. Ortaya çıkan seri, aranan biçimde bir çözümdür.

### Adım 8 — Küçük kökü dene

$r_{2}\neq r_{1}$ ise aynı işlem $r_{2}$ ile tekrarlanabilir ve ikinci bir çözüm elde edilebilir.

[KUTU]
**Buradaki tuzaklar — THEoREM 5.2'nin "en az bir" demesinin sebebi:**

- $r_{1}$ ve $r_{2}$ **reel ve farklıysa**, Adım 8'de bulunan çözüm Adım 7'dekinden ==lineer bağımsız olmayabilir==. (Özellikle $r_{1}-r_{2}$ tam sayı olduğunda.)
- $r_{1}$ ve $r_{2}$ **reel ve eşitse**, Adım 8 Adım 7 ile ==birebir aynı çözümü== verir; yeni bilgi çıkmaz.

Bu "istisnai" durumlarda ikinci lineer bağımsız çözümü bulmak için ayrı yöntemler gerekir.
[/KUTU]

---

### Özet: adi nokta ile karşılaştırma

| | Adi nokta (5.2) | Düzgün tekil nokta (Frobenius) |
|---|---|---|
| Varsayılan biçim | $\sum c_{n}(x-x_{0})^{n}$ | $\sum c_{n}(x-x_{0})^{n+r}$ |
| Ek bilinmeyen | yok | $r$ |
| $r$ nereden gelir | — | belirtici denklem (Adım 5) |
| Türevde alt sınır | yükselir | $n=0$'da kalır |
| Ek koşul | yok | $c_{0}\neq 0$ |
| Garanti edilen çözüm | 2 tane, bağımsız | en az 1 tane |

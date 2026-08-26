---
id: kdd
menu: Giriş
tip: chapter-head
baslik: BÖLÜM 8: Kısmi Diferansiyel Denklemler
---

[KUTU]
**⚠ Bu bölüm ders notundan değil, önden hazırlandı.**

Hocanın notlarında "CHAPTER 8: PARTIAL DIFFERENTIAL EQUATIONS" başlığı atılmış ama ==altı boş==. Ders işlendiğinde notlar buraya girecek.

Bu arada bölümün boş kalmaması için içerik, ==standart müfredat ve hocanın önceki bölümlerdeki üslubu== esas alınarak yazıldı. Kapsam ve sıralama neredeyse kesinlikle örtüşür, ama:

- **Gösterim farkı olabilir** — hoca $u_{xx}$ yerine $\dfrac{\partial^{2}u}{\partial x^{2}}$ yazabilir, ayırma sabitini $-\lambda$ yerine $-k^{2}$ seçebilir.
- **Vurgu farkı olabilir** — d'Alembert çözümüne girmeyebilir, ya da Schrödinger denklemine ayrı zaman ayırabilir.
- **Sınav kapsamı buradan okunamaz.** Ders işlendikten sonra ==kendi notunuzla karşılaştırın.==

Bir sonraki bölümde ne yapıldığı 8.1'in altındaki akış listesinden görülebilir.
[/KUTU]

Şimdiye kadarki bütün denklemlerde bilinmeyen fonksiyon ==tek bir değişkene== bağlıydı: $y(x)$, $x(t)$. Türevler de bu yüzden adi türevlerdi — adı da oradan geliyordu: **adi diferansiyel denklem**.

Gerçek problemlerin çoğunda bilinmeyen ==birden çok değişkene== bağlıdır. Bir telin sıcaklığı hem konuma hem zamana bağlıdır: $u(x,t)$. Bir zarın yer değiştirmesi $u(x,y,t)$'dir. Böyle bir fonksiyonun türevleri **kısmi türevlerdir** ve içlerinde kısmi türev geçen denkleme **kısmi diferansiyel denklem (partial differential equation, PDE)** denir.

### Bölümün akışı

**8.1 Temel kavramlar.** Mertebe, lineerlik, çözüm ne demek — ve ADD ile aradaki en önemli farkın ne olduğu: ==keyfi sabit yerine keyfi fonksiyon.==

**8.2 Sınıflandırma.** İkinci mertebeden lineer PDE'ler üç aileye ayrılır: **eliptik**, **parabolik**, **hiperbolik**. Ayrım tek bir sayıya bakar: $B^{2}-4AC$. Üç ailenin üç temsilcisi bu bölümün geri kalanının konusudur.

**8.3 Fourier serileri.** Değişkenlerine ayırma yöntemi, başlangıç koşulunu ==sinüslerin toplamı olarak yazmayı== gerektirir. Bu altyapı önce kuruluyor.

**8.4 Değişkenlerine ayırma.** Bölümün ana yöntemi: $u(x,t)=X(x)T(t)$ kabulüyle bir PDE'yi ==iki tane adi diferansiyel denkleme== indirgemek. Buradan sonrası tanıdık: Bölüm 3'ün karakteristik denklemleri.

**8.5 – 8.7 Üç klasik denklem.** Isı denklemi (parabolik), dalga denklemi (hiperbolik), Laplace denklemi (eliptik) — her biri baştan sona çözülüyor.

[KUTU]
**Bu bölümün iyi haberi:** yeni bir çözme tekniği öğrenmiyorsunuz. Değişkenlerine ayırma yöntemi PDE'yi ==Bölüm 3'te çözdüğünüz türden ADD'lere== çevirir. $X''+\lambda X=0$ denklemini zaten defalarca çözdünüz.

Yeni olan tek şey **sınır koşullarının** hangi $\lambda$ değerlerine izin verdiğine bakmak — yani 7.14'teki ==özdeğer problemi.== Bölüm 6'daki "seri ancak belirli $\lambda$'larda kesiliyordu" hikâyesinin aynısı burada da karşınıza çıkacak.
[/KUTU]

---

[CLAUDE] Bölüm 8'e girerken elinizde ne olmalı
Bu bölüm önceki bölümlerin ==üstüne kuruluyor==. Zayıf hissettiğiniz yer varsa önce şunlara dönün:

| Bölüm 8'de gereken | Nereden geliyor |
|---|---|
| $X''+\lambda X=0$ çözümü | **3.1–3.2** — sabit katsayılı, karakteristik denklem |
| Kökün işaretine göre üç durum | **7.9** — reel / katlı / karmaşık |
| Özdeğer–özfonksiyon dili | **7.14** — $\hat{L}y=\lambda y$ |
| Süperpozisyon (sonsuz toplam) | **7.8** — lineerlik |
| Belirli integral alma | Kalkülüs — kısmi integrasyon |

**En kritik ikisi:** $X''+\lambda X=0$ denkleminin $\lambda>0$, $\lambda=0$, $\lambda<0$ için ==üç ayrı çözümü== olduğunu ve sınır koşullarının hangisini elediğini bilmek. Bölüm 8'in tamamı bu tek hesaba dayanıyor; 8.4'te adım adım yapılıyor.
[/CLAUDE]

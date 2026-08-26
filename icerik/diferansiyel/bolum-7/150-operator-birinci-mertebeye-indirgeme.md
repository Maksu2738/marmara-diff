---
id: operator-indirgeme
menu: 7.13 ★ Çarpanlara Ayırıp Birinci Mertebeye İnme
tip: konu
baslik: 7.13 &nbsp;★ Operatör Çarpanlarına Ayırma ile Birinci Mertebe Problemlerine İndirgeme
---

7.9'da çarpanlara ayırıp kökleri ==doğrudan okuduk.== Peki o kestirme neden geçerli? Ders notunun bu bölümü, ikinci mertebeden denklemi ==iki tane birinci mertebeden denkleme== çevirerek bunu gösteriyor.

Yöntem, kökleri ezberden okumak yerine ==her adımda gerçekten bir denklem çözer==; bu yüzden hem gerekçelendirmedir hem de kestirmenin işlemediği durumlarda işe yarar.

---

[SORU*] **Örnek 7.13.** &nbsp; $y''+y'-2y=0$ denklemini operatör çarpanlarına ayırarak, birinci mertebeden iki problem hâlinde çözünüz.
[CEVAP]
**Adım 1 — Operatör biçimi ve çarpanlar.**

$$\left(\hat{D}^{2}+\hat{D}-2\right)y=0$$

$$\left(\hat{D}-1\right)\left(\hat{D}+2\right)y=0$$

**Adım 2 — İçteki çarpana bir ad ver.**

$$u\equiv\left(\hat{D}+2\right)y$$

Denklem şu hâle gelir:

$$\left(\hat{D}-1\right)u=0$$

==Bu birinci mertebeden bir denklemdir.==

**Adım 3 — $u$'yu çöz.**

$$u'-u=0\;\Longrightarrow\;u=c\,e^{x}$$

**Adım 4 — Geri yerine koy.**

$$\left(\hat{D}+2\right)y=u=c\,e^{x}\;\Longrightarrow\;y'+2y=c\,e^{x}$$

Bu da birinci mertebeden **lineer** bir denklemdir; 2.3'teki integral çarpanı yöntemiyle çözülür.

**Adım 5 — İntegral çarpanı.**

$$\mu=e^{\int 2\,dx}=e^{2x}$$

Denklemi $\mu$ ile çarpalım:

$$e^{2x}y'+2e^{2x}y=c\,e^{3x}$$

Sol taraf tam türevdir:

$$\frac{d}{dx}\left(e^{2x}y\right)=c\,e^{3x}$$

**Adım 6 — İntegre et.**

$$\int\frac{d}{dx}\left(e^{2x}y\right)dx=\int c\,e^{3x}\,dx\;\Longrightarrow\;e^{2x}y=\frac{c}{3}e^{3x}+c_{1}$$

$$y=\frac{c}{3}e^{x}+c_{1}e^{-2x}$$

$\dfrac{c}{3}$ da keyfi bir sabit olduğundan adını değiştirelim:

$$\boxed{\;y=c_{1}e^{x}+c_{2}e^{-2x}\;}$$

**Kontrol.** Çarpanlar $\left(\hat{D}-1\right)$ ve $\left(\hat{D}+2\right)$ idi; kökler $1$ ve $-2$. 7.9'un kestirmesi de tam bunu verirdi. &#10003;
[/CEVAP]

---

[KUTU]
**Yöntemin okunuşu — neden sıra önemsizdi?**

$\left(\hat{D}-1\right)\left(\hat{D}+2\right)y=0$ ifadesini "içten dışa" çözdük: önce $\left(\hat{D}+2\right)y=u$ dedik, sonra dıştaki çarpandan $u$'yu bulduk.

Çarpanların sırasını değiştirseydik — $v\equiv\left(\hat{D}-1\right)y$ deyip $\left(\hat{D}+2\right)v=0$ ile başlasaydık — $v=ke^{-2x}$ bulur, oradan $y'-y=ke^{-2x}$ çözer ve ==aynı genel çözüme== varırdık.

Sebebi 7.10'da kanıtlandı: sabit katsayılı operatörler ==yer değiştirir.== Bu yüzden hangi çarpanı içeri alacağınız fark etmez.
[/KUTU]

---

[CLAUDE] Bu yöntem ne zaman gerçekten gerekli olur?
Sabit katsayılı homojen denklemlerde bu uzun yol ==gereksizdir==; 7.9'un kestirmesi aynı sonucu üç satırda verir. Yöntem üç yerde vazgeçilmez hâle gelir:

**1. Homojen olmayan denklemlerde.** Sağ taraf sıfır değilse aynı adımlar aynen yürür ve ==$y_{c}$ ile $y_{p}$'yi tek hamlede== verir:

$$\left(\hat{D}-1\right)\left(\hat{D}+2\right)y=f(x)$$

$u=\left(\hat{D}+2\right)y$ dersek $\left(\hat{D}-1\right)u=f(x)$; iki tane birinci mertebeden lineer denklem, iki integral çarpanı, bitti. ==Deneme fonksiyonu tablosuna hiç bakmazsınız== — $f(x)=\tan x$ gibi tablonun kapsamadığı sağ taraflarda bile çalışır.

**2. Değişken katsayılı denklemlerde.** Çarpanlara ayırma yapılabiliyorsa yöntem yine işler; ama ==sıra artık önemlidir== (7.10), çünkü çarpanlar yer değiştirmez. Önce hangisini içeri alacağınızı deneyerek bulmanız gerekir.

**3. Mertebe indirgemenin mantığını görmek için.** Bölüm 3'teki "bir çözüm biliniyorsa ikincisini bul" yöntemi, aslında bu fikrin ==bir çarpanı bilindiğinde== uygulanmış hâlidir.

**Sınav taktiği:** "operatör çarpanlarına ayırarak çözünüz" diye açıkça istenmedikçe 7.9'un kısa yolunu kullanın. İstendiğinde ==$u$ tanımını yazmayı unutmayın==; puanın çoğu o adımdadır.
[/CLAUDE]

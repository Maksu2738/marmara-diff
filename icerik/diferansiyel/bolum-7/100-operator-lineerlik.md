---
id: operator-lineerlik
menu: 7.8 ★ Lineerlik ve Süperpozisyon
tip: konu
baslik: 7.8 &nbsp;★ Operatörlerde Lineerlik ve Çözümlerin Süperpozisyonu
---

Bir diferansiyel operatör

$$\hat{L}=a_{n}\hat{D}^{n}+\dots+a_{1}\hat{D}+a_{0}$$

**ancak ve ancak** şu iki koşulu sağlıyorsa **lineerdir (linear)**:

$$\boxed{\;\hat{L}\left(y_{1}+y_{2}\right)=\hat{L}y_{1}+\hat{L}y_{2}\;}$$

$$\boxed{\;\hat{L}\left(cy\right)=c\,\hat{L}y\;}$$

Birincisi **toplamsallık**, ikincisi **homojenlik** koşuludur.

---

[SORU] **Örnek 7.5.** &nbsp; $\hat{L}=\hat{D}^{2}+3\hat{D}+4$ ile $\hat{L}=\sqrt{\hat{D}}$ operatörlerinden hangisi lineerdir?
[CEVAP]
**$\hat{L}=\hat{D}^{2}+3\hat{D}+4$ &nbsp;→&nbsp; lineerdir.**

Türev almanın kendisi lineer bir işlemdir: $(y_{1}+y_{2})'=y_{1}'+y_{2}'$ ve $(cy)'=cy'$. Sabit katsayılarla toplandığında bu özellik korunur:

$$\hat{L}\left(y_{1}+y_{2}\right)=\left(y_{1}+y_{2}\right)''+3\left(y_{1}+y_{2}\right)'+4\left(y_{1}+y_{2}\right)$$
$$=\underbrace{\left(y_{1}''+3y_{1}'+4y_{1}\right)}_{\hat{L}y_{1}}+\underbrace{\left(y_{2}''+3y_{2}'+4y_{2}\right)}_{\hat{L}y_{2}}\;\checkmark$$

**$\hat{L}=\sqrt{\hat{D}}$ &nbsp;→&nbsp; lineer değildir.**

Karekök işlemi toplamı korumaz: genel olarak $\sqrt{a+b}\neq\sqrt{a}+\sqrt{b}$. Ders notunda bu örnek, ==lineerliğin operatörün "polinom biçiminde" olmasına bağlı olduğunu== göstermek için verilmiştir.
[/CEVAP]

[KUTU]
**Kural olarak okunuşu:** $\hat{D}$'nin ==sabit katsayılı bir polinomu== olan her operatör lineerdir. $\sqrt{\hat{D}}$, $\hat{D}^{2}$'nin karekökü, $e^{\hat{D}}$, $1/\hat{D}$ gibi ifadeler bu kalıba girmez.

Aynı şekilde $y\hat{D}y$ ya da $\left(\hat{D}y\right)^{2}$ gibi ifadeler de lineer değildir — ==bilinmeyen fonksiyonun kendisi katsayı olarak görünüyorsa lineerlik bozulur.==
[/KUTU]

---

### Lineerliğin karşılığı: süperpozisyon

Ders notunun "**A Linear Solution**" başlığı altındaki muhakeme:

$\hat{L}y=0$ denkleminin $\left\{y_{1},y_{2}\right\}$ çözümleri olsun. O zaman

$$\hat{L}y_{1}=0\qquad\text{ve}\qquad \hat{L}y_{2}=0$$

Lineerliği kullanalım:

$$\hat{L}\left(c_{1}y_{1}+c_{2}y_{2}\right)=c_{1}\hat{L}y_{1}+c_{2}\hat{L}y_{2}=c_{1}\cdot 0+c_{2}\cdot 0=0$$

Demek ki

$$\boxed{\;y=c_{1}y_{1}+c_{2}y_{2}\;\text{ de bir çözümdür.}\;}$$

==Homojen lineer denklemlerde çözümlerin her lineer birleşimi yine çözümdür.== Genel çözümü "iki çözüm bulup sabitlerle birleştirerek" yazabilmemizin tek gerekçesi budur.

---

[SORU] **Örnek 7.6.** &nbsp; $\left(\hat{D}^{2}+3\hat{D}+2\right)y=0$ denkleminin $y_{1}=e^{-2x}$ ve $y_{2}=e^{-x}$ çözümlerini doğrulayıp genel çözümü yazınız.
[CEVAP]
**$y_{1}=e^{-2x}$ için.** $\hat{D}\to -2$ kestirmesiyle:

$$\left(\hat{D}^{2}+3\hat{D}+2\right)e^{-2x}=\left(4-6+2\right)e^{-2x}=0\;\checkmark$$

**$y_{2}=e^{-x}$ için.** $\hat{D}\to -1$:

$$\left(\hat{D}^{2}+3\hat{D}+2\right)e^{-x}=\left(1-3+2\right)e^{-x}=0\;\checkmark$$

**Genel çözüm.** İkisi lineer bağımsız olduğundan süperpozisyonla:

$$\boxed{\;y=c_{1}e^{-2x}+c_{2}e^{-x}\;}$$

**Kontrol.** $\hat{D}^{2}+3\hat{D}+2=\left(\hat{D}+1\right)\left(\hat{D}+2\right)$, kökler $-1$ ve $-2$ — bulduğumuz üstellerle uyuşuyor. &#10003;
[/CEVAP]

---

[CLAUDE] Lineerlik testini 10 saniyede yapın
Bir denklemin lineer olup olmadığına bakarken ==sadece $y$ ve türevlerine== bakın, $x$'e değil:

- $y''+x^{2}y'+\sin(x)\,y=e^{x}$ → **lineer** (katsayılar $x$'e bağlı olabilir, sorun değil)
- $y''+y\,y'=0$ → **lineer değil** ($y$ ile $y'$ çarpılmış)
- $y''+\left(y'\right)^{2}=0$ → **lineer değil** (türevin karesi)
- $y''+\sin y=0$ → **lineer değil** (sarkaç denklemi; küçük açıda $\sin y\approx y$ alınıp lineerleştirilir)

**Neden önemli:** süperpozisyon yalnız lineer denklemlerde geçerlidir. Lineer olmayan bir denklemde iki çözümü toplamak ==üçüncü bir çözüm vermez.== Bütün bu bölümdeki yöntemler (çarpanlara ayırma, yok edici, $y_{c}+y_{p}$) lineerlik varsayımı üzerine kuruludur.
[/CLAUDE]

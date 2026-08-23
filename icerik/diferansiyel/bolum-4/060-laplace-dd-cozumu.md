---
id: laplace-dd-cozumu
menu: 4.3 Diferansiyel Denklem Çözümü
tip: konu
baslik: 4.3 &nbsp;Sabit Katsayılı Denklemlerin Laplace ile Çözümü
---

Buraya kadar kurduğumuz araçları bir araya getiriyoruz. Amaç, sabit katsayılı $n$. mertebeden lineer bir denklemden oluşan **başlangıç değer problemini** çözmek:

$$a_{0}y^{(n)}+a_{1}y^{(n-1)}+\dots+a_{n-1}y'+a_{n}y=b(t) \tag{9.43}$$

$$y(0)=c_{0},\quad y'(0)=c_{1},\quad\dots,\quad y^{(n-1)}(0)=c_{n-1} \tag{9.44}$$

[KUTU]
**YÖNTEMİN ÖZETİ**

1. Diferansiyel denklemin **her iki tarafının** Laplace dönüşümünü al. Bu sırada THEoREM 9.4'ü uygula ve $(9.44)$ başlangıç koşullarını kullan. Sonuçları eşitleyerek, bilinmeyeni $Y(s)$ olan **cebirsel denklemi** elde et.

2. Bu cebirsel denklemi çözerek $Y(s)$'yi belirle.

3. $Y(s)$ bulununca, dönüşüm tablosunu kullanarak $y=\mathcal{L}^{-1}\{Y(s)\}$ çözümünü elde et.
[/KUTU]

Üç adımın karakteri birbirinden farklıdır:

- **1. adım mekaniktir.** Türev kuralını uygularsınız, başlangıç koşulları kendiliğinden yerleşir.
- **2. adım cebirdir.** $Y(s)$'yi yalnız bırakırsınız.
- **3. adım gerçek iştir.** Kısmi kesirler, tamkareye tamamlama, gerekirse konvolüsyon.

[KUTU]
**Klasik yöntemlerle farkı.** Sabit katsayılı denklemleri karakteristik denklem + belirsiz katsayılar ile de çözebiliyorduk. Oradaki sıra şuydu: **önce genel çözüm, sonra başlangıç koşulları.** Laplace'ta sıra tersinedir — ==başlangıç koşulları daha ilk adımda denkleme girer== ve doğrudan özel çözüme varılır. Homojen/özel çözüm ayrımı hiç yapılmaz.

Bu, özellikle **süreksiz zorlama terimlerinde** (4.4) belirleyici bir üstünlüğe dönüşecek; klasik yöntemler orada parça parça çözüp bağlantı koşulları yazmak zorunda kalır.
[/KUTU]

---

### ★ Hocanın ders notundaki yol — ikinci mertebe için hazır kalıp

[KUTU]
**Bu kalıp kitapta yok.** Kitap yukarıdaki üç adımı her problemde tek tek uygulatıyor. Hoca ders notunda ==ikinci mertebe için 1. ve 2. adımı bir kez toptan yapıp== sonucu hazır bir formüle bağlıyor. İki yol da aynı $Y(s)$'yi verir.
[/KUTU]

Genel ikinci mertebeden başlangıç değer problemi:

$$a_{2}y''+a_{1}y'+a_{0}y=b(t),\qquad y(0)=c_{0},\quad y'(0)=c_{1}$$

**Dönüşümü al.** $Y=\mathcal{L}\{y\}$ ve $F(s)=\mathcal{L}\{b(t)\}$ olsun:

$$a_{2}\Big[s^{2}Y-s\,c_{0}-c_{1}\Big]+a_{1}\Big[sY-c_{0}\Big]+a_{0}Y=F(s)$$

**$Y$'li terimleri topla, sabitleri sağa at.**

$$\Big[a_{2}s^{2}+a_{1}s+a_{0}\Big]Y-\Big[a_{2}\left(s\,c_{0}+c_{1}\right)+a_{1}c_{0}\Big]=F(s)$$

$$\boxed{\;Y(s)=\frac{F(s)+\Big[a_{2}\left(s\,c_{0}+c_{1}\right)+a_{1}c_{0}\Big]}{a_{2}s^{2}+a_{1}s+a_{0}}\;}$$

Sonra tek iş kalır:

$$y(t)=\mathcal{L}^{-1}\{Y(s)\}$$

[KUTU]
**Kalıbın okunuşu.**

- **Payda** her zaman ==yardımcı denklemin sol tarafıdır==: $a_{2}s^{2}+a_{1}s+a_{0}$. Klasik yöntemdeki $a_{2}m^{2}+a_{1}m+a_{0}$ ile aynı polinom — $m$ yerine $s$ yazılmış hâli. Bu yüzden köklerin karakteri (reel/karmaşık/tekrarlı) çözümün biçimini burada da belirler.
- **Payda iki parça** var: zorlamadan gelen $F(s)$ ve başlangıç koşullarından gelen köşeli parantez. ==Homojen problemde ($b=0$) $F(s)$ düşer==, geriye yalnız başlangıç koşulları kalır.
- Köşeli parantezde $c_{1}$ yalnız $a_{2}$ ile çarpılır, $a_{1}$ ile çarpılmaz. Sebebi: $y'$ teriminin dönüşümünde yalnızca $y(0)$ geçer, $y'(0)$ geçmez.

**Uyarı.** Kalıp yalnızca **ikinci mertebe** içindir. Üçüncü mertebede $a_{3}\left(s^{2}c_{0}+s\,c_{1}+c_{2}\right)$ gibi bir terim daha eklenir; ezberlemek yerine üç adımı uygulamak daha güvenlidir.
[/KUTU]

**Hızlı kontrol.** Aşağıdaki Örnek 9.26 birinci mertebeden olduğu için kalıba girmez ($a_{2}=0$), ama Örnek 9.27'yi ($y''-2y'-8y=0$, $y(0)=3$, $y'(0)=6$) deneyelim: $a_{2}=1$, $a_{1}=-2$, $a_{0}=-8$, $F=0$, $c_{0}=3$, $c_{1}=6$.

$$Y(s)=\frac{0+\Big[1\cdot(3s+6)+(-2)(3)\Big]}{s^{2}-2s-8}=\frac{3s}{s^{2}-2s-8}$$

Örnek 9.27'de adım adım bulunan $Y(s)$ ile aynı. &#10003;

---

[SORU*] **Örnek 9.26.** &nbsp; Aşağıdaki başlangıç değer problemini çözünüz:
$$y'-2y=e^{5t},\qquad y(0)=3$$
[CEVAP]
**Adım 1 — Her iki tarafın dönüşümünü al.**

$$\mathcal{L}\{y'\}-2\mathcal{L}\{y\}=\mathcal{L}\{e^{5t}\}$$

$\mathcal{L}\{y\}$ yerine kısaca $Y(s)$ yazalım. THEoREM 9.4'ü $n=1$ ile (ya da doğrudan THEoREM 9.3) uygulayalım:

$$\mathcal{L}\{y'\}=sY(s)-y(0)$$

$y(0)=3$ başlangıç koşulunu koyalım:

$$\mathcal{L}\{y'\}=sY(s)-3$$

Sağ taraf Tablo 9.1'in 2 numaralı girdisinden $\dfrac{1}{s-5}$. Denklem şu hâle gelir:

$$sY(s)-3-2Y(s)=\frac{1}{s-5}$$

**Adım 2 — Cebirsel denklemi çöz.**

$Y(s)$ parantezine alalım:

$$(s-2)Y(s)=3+\frac{1}{s-5}$$

Sağ tarafı ortak paydada birleştirelim:

$$(s-2)Y(s)=\frac{3(s-5)+1}{s-5}=\frac{3s-15+1}{s-5}=\frac{3s-14}{s-5}$$

$$Y(s)=\frac{3s-14}{(s-2)(s-5)}$$

**Adım 3 — Ters dönüşüm.**

Kısmi kesirlere ayıralım:

$$\frac{3s-14}{(s-2)(s-5)}=\frac{A}{s-2}+\frac{B}{s-5}\;\Longrightarrow\;3s-14=A(s-5)+B(s-2)$$

$s=2$: $\;6-14=-8=A(-3)\;\Longrightarrow\;A=\dfrac{8}{3}$

$s=5$: $\;15-14=1=B(3)\;\Longrightarrow\;B=\dfrac{1}{3}$

$$\mathcal{L}^{-1}\left\{\frac{3s-14}{(s-2)(s-5)}\right\}=\frac{8}{3}\mathcal{L}^{-1}\left\{\frac{1}{s-2}\right\}+\frac{1}{3}\mathcal{L}^{-1}\left\{\frac{1}{s-5}\right\}$$

Tablo 9.1, 2 numara:

$$\mathcal{L}^{-1}\left\{\frac{1}{s-2}\right\}=e^{2t},\qquad \mathcal{L}^{-1}\left\{\frac{1}{s-5}\right\}=e^{5t}$$

$$\boxed{\;y=\frac{8}{3}e^{2t}+\frac{1}{3}e^{5t}\;}$$

**Doğrulama.**

$$y(0)=\frac{8}{3}+\frac{1}{3}=\frac{9}{3}=3\;\checkmark$$

$$y'=\frac{16}{3}e^{2t}+\frac{5}{3}e^{5t}$$

$$y'-2y=\frac{16}{3}e^{2t}+\frac{5}{3}e^{5t}-\frac{16}{3}e^{2t}-\frac{2}{3}e^{5t}=\frac{3}{3}e^{5t}=e^{5t}\;\checkmark$$

[KUTU]
**Adım 2'deki ortak payda hamlesine dikkat.** $3+\frac{1}{s-5}$ ifadesini olduğu gibi bırakıp $Y(s)=\frac{3}{s-2}+\frac{1}{(s-2)(s-5)}$ yazmak da doğrudur ve Örnek 9.13'te öyle yapmıştık. ==İki yol da aynı sonuca varır==; hangisinin daha az işlem gerektirdiği probleme göre değişir. Burada birleştirmek tek bir kısmi kesir açılımıyla bitirmeyi sağladı.
[/KUTU]

---

[CLAUDE] Laplace'ın asıl kazancı ve tek satırlık şablon
Klasik yöntemde önce homojen çözüm, sonra özel çözüm, en sonda başlangıç koşullarıyla sabitler bulunur. ==Laplace'ta başlangıç koşulları en başta devreye girer ve hiç keyfi sabit çıkmaz.== Süreksiz veya darbe biçimli zorlamalarda klasik yöntem zaten çalışmaz; Laplace'ın vazgeçilmez olduğu yer burasıdır.

**Her problem şu şablona oturur:**

$$Y(s)=\frac{\overbrace{\mathcal{L}\{\text{zorlama}\}}^{\text{sağ taraf}}+\overbrace{\text{başlangıç koşulu polinomu}}^{\text{sol taraftan gelen}}}{\underbrace{\text{karakteristik polinom}}_{as^{2}+bs+c}}$$

**Üç kontrol noktası:**

- Payda, elle çözseniz bulacağınız **karakteristik polinomun aynısı** olmalı.
- Zorlama sıfırsa cevap tamamen homojen çözüm olmalı.
- $y(0)$ ve $y'(0)$ sıfırsa payda yalnız zorlama kalmalı.

Bunlardan biri tutmuyorsa dönüştürmede hata vardır — ==cevabı bulmadan önce yakalarsınız.==
[/CLAUDE]

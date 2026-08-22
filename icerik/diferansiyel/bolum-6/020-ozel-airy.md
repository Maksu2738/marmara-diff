---
id: ozel-dd-airy
menu: 6.1 Airy Denklemi
tip: konu
baslik: 6.1 &nbsp;Airy Denklemi ve Airy Fonksiyonları
---

Bölüm 5'te kuvvet serisi yöntemini genel bir araç olarak kurduk. Bu bölümde onu bilim ve mühendislikte tekrar tekrar karşımıza çıkan birkaç **özel diferansiyel denkleme (special differential equation)** uygulayacağız. İlki **Airy denklemi (Airy equation)**:

$$y''-xy=0 \tag{6.1}$$

[KUTU]
**★ Bu bölüm hocanın ders notunu izliyor.** Kitap Airy denklemini yalnızca adıyla anıyor. Aşağıdaki ==dönüm noktası türetimi== ve sondaki ==yay sabiti zamanla azalan kütle-yay uygulaması== hocanın ders notundan alınmıştır; kitapta karşılığı yoktur.
[/KUTU]

Görünüşü aldatıcı biçimde sade: yalnızca tek bir değişken katsayı var, o da $x$'in kendisi. Ama bu tek değişiklik denklemin karakterini kökten değiştirir.

### Nereden çıkıyor: dönüm noktası

Airy denklemi kendiliğinden yazılmış bir denklem değildir; ==genel bir denklemin belirli bir noktanın yakınındaki davranışıdır==. Şu biçimi düşünelim:

$$y''+Q(x)\,y=0$$

$Q(x)>0$ olduğu bölgede çözümler **salınır** (sinüs-kosinüs gibi), $Q(x)<0$ olduğu bölgede ise **üstel** biçimde büyür ya da söner. $Q$'nun işaret değiştirdiği nokta, yani $Q(x_{0})=0$ olan $x_{0}$, **dönüm noktası (turning point)** adını alır: çözümün karakteri tam orada değişir.

$x_{0}$ civarında $Q$'yu Taylor açalım. $Q(x_{0})=0$ olduğu için ilk terim düşer ve geriye **doğrusal** bir yaklaşım kalır:

$$Q(x)\approx Q'(x_{0})\,(x-x_{0})=\alpha\,(x-x_{0})$$

$$y''+\alpha\,(x-x_{0})\,y=0$$

Şimdi $z=-\alpha^{1/3}(x-x_{0})$ dönüşümünü yapalım. Zincir kuralıyla $\dfrac{d^{2}}{dx^{2}}=\alpha^{2/3}\dfrac{d^{2}}{dz^{2}}$ ve $\alpha(x-x_{0})=-\alpha^{2/3}z$ olur:

$$\alpha^{2/3}\frac{d^{2}y}{dz^{2}}-\alpha^{2/3}z\,y=0\;\Longrightarrow\;\boxed{\;\frac{d^{2}y}{dz^{2}}-z\,y=0\;}$$

==Yani her dönüm noktasının yakınında, ölçek doğru ayarlandığında, aynı denklem çıkar.== Airy denkleminin bu kadar çok yerde görünmesinin sebebi budur: kuantum mekaniğinde klasik dönüm noktası, optikte kostik yüzey, dalga yayılımında yansıma sınırı — hepsi aynı yerel denkleme indirgenir.

[KUTU]
**Dikkat — küp kök unutulmamalı.** Dönüşüm $z=-\alpha(x-x_{0})$ **değil**, $z=-\alpha^{1/3}(x-x_{0})$'dır. $\alpha^{1/3}$ yerine $\alpha$ yazılırsa $y_{zz}$ ile $zy$ terimlerinin katsayıları eşitlenmez ve denklem Airy biçimine gelmez. Yukarıdaki hesapta $\alpha^{2/3}$'lerin sadeleşmesi tam olarak bu yüzden çalışıyor.
[/KUTU]

---

### Seri çözüm

$x=0$ Airy denkleminin **adi noktasıdır** ($x$ katsayısı her yerde analitiktir), dolayısıyla Bölüm 5'in standart yöntemi doğrudan uygulanır.

[SORU*] **Örnek 6.1.** &nbsp; $y''-xy=0$ Airy denkleminin $x_{0}=0$ etrafındaki kuvvet serisi çözümünü bulunuz.
[CEVAP]
**Adım 1 — Seriyi yerleştir.**

$$y=\sum_{n=0}^{\infty}c_{n}x^{n},\qquad y''=\sum_{n=0}^{\infty}(n+1)(n+2)\,c_{n+2}\,x^{n}$$

$xy$ terimini de $x^{n}$ kuvvetlerine göre yazalım:

$$xy=\sum_{n=0}^{\infty}c_{n}x^{n+1}=\sum_{n=1}^{\infty}c_{n-1}x^{n}$$

**Adım 2 — Katsayıları eşitle.**

$$\sum_{n=0}^{\infty}\Big[(n+1)(n+2)c_{n+2}-c_{n-1}\Big]x^{n}=0$$

$1,x,x^{2},\dots$ doğrusal bağımsız olduğundan her köşeli parantez ayrı ayrı sıfırdır.

$n=0$ terimi ayrıcalıklıdır ($c_{-1}$ diye bir katsayı yoktur):

$$2c_{2}=0\;\Longrightarrow\;\boxed{c_{2}=0}$$

$n\ge 1$ için **indirgeme bağıntısı (recurrence relation)**:

$$c_{n+2}=\frac{c_{n-1}}{(n+1)(n+2)} \tag{6.2}$$

**Adım 3 — Katsayıları üret.**

Bağıntı indisi ==üçer üçer== atlatıyor. Bu yüzden katsayılar üç aileye ayrılır:

$$c_{3}=\frac{c_{0}}{2\cdot 3}=\frac{c_{0}}{6},\qquad c_{6}=\frac{c_{3}}{5\cdot 6}=\frac{c_{0}}{180},\qquad c_{9}=\frac{c_{6}}{8\cdot 9}=\frac{c_{0}}{12960}$$

$$c_{4}=\frac{c_{1}}{3\cdot 4}=\frac{c_{1}}{12},\qquad c_{7}=\frac{c_{4}}{6\cdot 7}=\frac{c_{1}}{504},\qquad c_{10}=\frac{c_{7}}{9\cdot 10}=\frac{c_{1}}{45360}$$

$$c_{2}=0\;\Longrightarrow\;c_{5}=c_{8}=c_{11}=\dots=0$$

**Adım 4 — Çözümü topla.**

$$\boxed{\;y=c_{0}\left[1+\frac{x^{3}}{6}+\frac{x^{6}}{180}+\frac{x^{9}}{12960}+\cdots\right]+c_{1}\left[x+\frac{x^{4}}{12}+\frac{x^{7}}{504}+\frac{x^{10}}{45360}+\cdots\right]\;}$$

Genel terimleriyle:

$$y_{1}(x)=1+\sum_{k=1}^{\infty}\frac{x^{3k}}{\displaystyle\prod_{j=1}^{k}(3j-1)(3j)},\qquad y_{2}(x)=x+\sum_{k=1}^{\infty}\frac{x^{3k+1}}{\displaystyle\prod_{j=1}^{k}(3j)(3j+1)}$$

**Doğrulama.** $y_{1}$'in ilk terimlerini denkleme koyalım. $y_{1}=1+\tfrac{x^{3}}{6}+\tfrac{x^{6}}{180}+\cdots$ için

$$y_{1}''=x+\frac{x^{4}}{6}+\cdots,\qquad xy_{1}=x+\frac{x^{4}}{6}+\cdots$$

Fark sıfır. &#10003;
[/CEVAP]

[KUTU]
**Üç adımlık indirgemenin anlamı.** Bölüm 5'teki çoğu örnekte bağıntı $c_{n+2}\leftrightarrow c_{n}$ idi ve çözüm **çift/tek** diye ikiye ayrılıyordu. Burada bağıntı $c_{n+2}\leftrightarrow c_{n-1}$, yani ==üç adım atlıyor==; sonuç çift/tek değil, üsleri $3k$ ve $3k+1$ olan iki aile. Üçüncü aile ($3k+2$) $c_{2}=0$ yüzünden tümüyle yok olur.

$c_{2}=0$ sonucu denklemde $x=0$ konarak da doğrudan görülür: $y''(0)=0\cdot y(0)=0$ ve $y''(0)=2c_{2}$.
[/KUTU]

Her iki seri de **her $x$ için yakınsar**: Bölüm 5'in yakınsaklık THEoREM'ine göre yakınsaklık yarıçapı, $x_{0}$'ın en yakın tekil noktaya uzaklığından küçük olamaz; Airy denkleminin sonlu düzlemde hiç tekil noktası yoktur, dolayısıyla yarıçap sonsuzdur.

---

### Airy fonksiyonları

Uygulamada $y_{1}$ ve $y_{2}$ yerine, bunların belirli doğrusal birleşimleri olan **Airy fonksiyonları (Airy functions)** $\mathrm{Ai}(x)$ ve $\mathrm{Bi}(x)$ kullanılır. Bunları özel kılan, işaretin iki yanındaki davranışlarıdır:

- $x<0$ tarafında ikisi de **salınır**; $|x|$ büyüdükçe genlikleri yavaşça azalır, salınım sıklaşır.
- $x>0$ tarafında $\mathrm{Ai}(x)$ **üstel olarak söner**, $\mathrm{Bi}(x)$ ise **üstel olarak büyür**.

Bu asimetri fizikte sınır koşulunu seçmeyi kolaylaştırır: sonsuzda sınırlı kalması gereken bir çözüm için $\mathrm{Ai}$ alınır, $\mathrm{Bi}$ atılır.

---

### Uygulama: yay sabiti zamanla azalan kütle-yay sistemi

Aşağıdaki mekanik problem, Airy denkleminin ==nereden doğal olarak çıktığını== gösteren temiz bir örnektir.

[SORU*] **Örnek 6.2.** &nbsp; Bir kütle-yay sisteminde yayın **sertliği (stiffness)** $k$ zamanla doğrusal olarak azalıyor: $k(t)=k_{0}-\alpha t$ &nbsp; ($k_{0},\alpha>0$). Hareket denklemini yazınız, Airy biçimine indirgeyiniz ve sonucu fiziksel olarak yorumlayınız.
[CEVAP]
**Adım 1 — Hareket denklemi.**

Newton'ın ikinci yasası ve yay kuvveti:

$$F=m\ddot{x},\qquad F=-k\,x\;\Longrightarrow\;m\ddot{x}+k(t)\,x=0$$

$k(t)=k_{0}-\alpha t$ konursa:

$$\ddot{x}+\left(\frac{k_{0}}{m}-\frac{\alpha}{m}\,t\right)x=0 \tag{6.3}$$

==Bu sabit katsayılı bir denklem değildir== — katsayı $t$'ye bağlı. Dolayısıyla $e^{mt}$ denemesi işe yaramaz, yardımcı denklem kurulamaz.

**Adım 2 — Airy biçimine indirge.**

Kısaltma olarak $\beta=\dfrac{\alpha}{m}$ ve $\omega_{0}^{2}=\dfrac{k_{0}}{m}$ alalım; denklem $\ddot{x}+\left(\omega_{0}^{2}-\beta t\right)x=0$ olur. Yeni değişken:

$$z=\left(\frac{m}{\alpha}\right)^{2/3}\left(\frac{\alpha}{m}\,t-\frac{k_{0}}{m}\right)=\beta^{-2/3}\left(\beta t-\omega_{0}^{2}\right)$$

Buradan $\dfrac{dz}{dt}=\beta^{1/3}$, yani

$$\frac{d}{dt}=\beta^{1/3}\frac{d}{dz},\qquad \frac{d^{2}}{dt^{2}}=\beta^{2/3}\frac{d^{2}}{dz^{2}}$$

Katsayı terimi de $\omega_{0}^{2}-\beta t=-\beta^{2/3}z$ olur. Yerine koyalım:

$$\beta^{2/3}\frac{d^{2}x}{dz^{2}}-\beta^{2/3}z\,x=0\;\Longrightarrow\;\boxed{\;\frac{d^{2}x}{dz^{2}}-z\,x=0\;}$$

Tam olarak Airy denklemi. Çözüm $x(z)=A\,\mathrm{Ai}(z)+B\,\mathrm{Bi}(z)$'dir.

**Adım 3 — Fiziksel yorum.**

$z$'nin işaretine dikkat: $z=0$ olması $\beta t=\omega_{0}^{2}$, yani $\alpha t=k_{0}$ demektir. Bu da tam olarak

$$k(t_{0})=0,\qquad t_{0}=\frac{k_{0}}{\alpha}$$

anıdır — ==yayın tümüyle gevşediği an==. Dönüm noktası budur.

- **$t<t_{0}$** ($z<0$, $k>0$): yay hâlâ geri çağırıcı kuvvet üretiyor. Airy fonksiyonları bu tarafta salınımlıdır, kütle titreşir. Ama $k$ küçüldükçe frekans düşer, ==salınımlar giderek yayvanlaşır==. **Kararlı bölge.**
- **$t>t_{0}$** ($z>0$, $k<0$): kuvvet artık geri çağırıcı değil, **iticidir**. Airy fonksiyonlarının bu taraftaki üstel davranışı devreye girer; $\mathrm{Bi}$ bileşeni büyür ve genlik sınırsız artar. **Kararsız bölge.**

Sistem $t_{0}$ anında salınımdan üstel kaçışa geçer. Bu geçişi ==tek bir düzgün fonksiyonla== ifade edebilen şey Airy fonksiyonudur; ne saf sinüs ne saf üstel bunu tek başına yapabilir.
[/CEVAP]

[KUTU]
**Neden bu örnek önemli?** Sabit katsayılı denklemlerde (Bölüm 3) yardımcı denklemin kökleri çözümün karakterini **bir kez ve tümüyle** belirler: ya salınım, ya üstel. Değişken katsayıda ise karakter ==zaman içinde değişebilir==. Airy denklemi bu değişimin en yalın örneğidir; seri yönteminin sabit katsayılı yöntemlere göre asıl üstünlüğü de buradadır.
[/KUTU]

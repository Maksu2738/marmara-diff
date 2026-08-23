---
id: laplace-sistemler
menu: 4.5 Sistemlerin Çözümü
tip: konu
baslik: 4.5 &nbsp;Lineer Sistemlerin Laplace ile Çözümü
---

Laplace yöntemi tek denklemle sınırlı değildir. **Birinci mertebeden lineer sistemlere** doğrudan genişler:

$$a_{1}x'+a_{2}y'+a_{3}x+a_{4}y=\beta_{1}(t)$$
$$b_{1}x'+b_{2}y'+b_{3}x+b_{4}y=\beta_{2}(t) \tag{9.112}$$

Katsayılar sabit, $\beta_{1}$ ve $\beta_{2}$ bilinen fonksiyonlar. Başlangıç koşulları:

$$x(0)=c_{1},\qquad y(0)=c_{2} \tag{9.113}$$

$\mathcal{L}\{x\}=X(s)$ ve $\mathcal{L}\{y\}=Y(s)$ diyelim.

[KUTU]
**YÖNTEMİN ÖZETİ**

1. Sistemin **her iki denkleminin** Laplace dönüşümünü al; THEoREM 9.3'ü ve başlangıç koşullarını uygula. Sonuçta bilinmeyenleri $X(s)$ ve $Y(s)$ olan **iki cebirsel denklem** elde edilir.

2. Bu iki bilinmeyenli cebirsel sistemi çözerek $X(s)$ ve $Y(s)$'yi belirle.

3. Dönüşüm tablosuyla $x=\mathcal{L}^{-1}\{X(s)\}$ ve $y=\mathcal{L}^{-1}\{Y(s)\}$ çözümlerini bul.
[/KUTU]

[KUTU]
**Bölüm 7'deki operatör yöntemiyle karşılaştırma.** İki yöntem de aynı fikre dayanır: bilinmeyenlerden birini eleyip cebirsel bir denkleme inmek. Ama önemli bir fark var.

**Operatör yönteminde** $x$ ve $y$ ayrı ayrı çözülür, sonuçta $2N$ keyfi sabit çıkar ve ==bunların arasındaki bağıntıları bulmak için çözümleri sisteme geri koymak gerekir== (bkz. 7.4).

**Laplace'ta böyle bir adım yoktur.** Başlangıç koşulları daha ilk adımda denkleme girdiği için keyfi sabit hiç ortaya çıkmaz; doğrudan özel çözüme varılır. ==Başlangıç değer problemlerinde Laplace belirgin biçimde daha kısadır.==
[/KUTU]

---

[SORU] **Örnek 9.38.** &nbsp; Aşağıdaki sistemi verilen başlangıç koşullarıyla çözünüz:
$$x'-6x+3y=8e^{t},\qquad y'-2x-y=4e^{t}$$
$$x(0)=-1,\qquad y(0)=0$$
[CEVAP]
**Adım 1 — Her iki denklemin dönüşümünü al.**

$$\mathcal{L}\{x'\}=sX(s)-x(0)=sX(s)+1,\qquad \mathcal{L}\{y'\}=sY(s)-y(0)=sY(s)$$

**Birinci denklem:**

$$sX+1-6X+3Y=\frac{8}{s-1}$$

$$(s-6)X+3Y=\frac{8}{s-1}-1=\frac{8-(s-1)}{s-1}=\frac{-s+9}{s-1}$$

**İkinci denklem:**

$$sY-2X-Y=\frac{4}{s-1}\;\Longrightarrow\;-2X+(s-1)Y=\frac{4}{s-1}$$

==İki bilinmeyenli sıradan bir cebirsel sistem elde ettik.==

**Adım 2 — $Y$'yi ele.**

Birinci denklemi $(s-1)$ ile, ikinciyi $3$ ile çarpalım — ==$Y$ katsayıları eşitlensin:==

$$(s-1)(s-6)X+3(s-1)Y=-s+9$$
$$-6X+3(s-1)Y=\frac{12}{s-1}$$

Çıkaralım:

$$\Big[(s-1)(s-6)+6\Big]X=-s+9-\frac{12}{s-1}$$

Köşeli parantez: $\;s^{2}-7s+6+6=s^{2}-7s+12$

Sağ tarafı ortak paydada birleştirelim:

$$\frac{(-s+9)(s-1)-12}{s-1}=\frac{-s^{2}+10s-9-12}{s-1}=\frac{-s^{2}+10s-21}{s-1}$$

$$X(s)=\frac{-s^{2}+10s-21}{(s-1)\left(s^{2}-7s+12\right)}=\frac{-s^{2}+10s-21}{(s-1)(s-3)(s-4)}$$

**Sadeleşme.** Payı çarpanlarına ayıralım:

$$-s^{2}+10s-21=-\left(s^{2}-10s+21\right)=-(s-3)(s-7)$$

==$(s-3)$ çarpanı pay ve paydada sadeleşiyor:==

$$X(s)=\frac{-(s-3)(s-7)}{(s-1)(s-3)(s-4)}=\frac{-s+7}{(s-1)(s-4)}$$

**Adım 3 — $x$'i bul.**

$$\frac{-s+7}{(s-1)(s-4)}=\frac{A}{s-1}+\frac{B}{s-4},\qquad -s+7=A(s-4)+B(s-1)$$

$s=1$: $6=-3A\Rightarrow A=-2$. &nbsp;&nbsp; $s=4$: $3=3B\Rightarrow B=1$.

$$\boxed{\;x=-2e^{t}+e^{4t}\;}$$

**Adım 4 — $y$'yi bul.**

$X$ bilindiğine göre ikinci denklemden doğrudan çekelim:

$$(s-1)Y=\frac{4}{s-1}+2X=\frac{4}{s-1}+\frac{2(-s+7)}{(s-1)(s-4)}$$

$$=\frac{4(s-4)+2(-s+7)}{(s-1)(s-4)}=\frac{4s-16-2s+14}{(s-1)(s-4)}=\frac{2s-2}{(s-1)(s-4)}$$

Pay $2(s-1)$'dir; ==$(s-1)$ sadeleşiyor:==

$$(s-1)Y=\frac{2(s-1)}{(s-1)(s-4)}=\frac{2}{s-4}\;\Longrightarrow\;Y(s)=\frac{2}{(s-1)(s-4)}$$

$$2=A(s-4)+B(s-1)$$

$s=1$: $2=-3A\Rightarrow A=-\frac{2}{3}$. &nbsp;&nbsp; $s=4$: $2=3B\Rightarrow B=\frac{2}{3}$.

$$\boxed{\;y=-\frac{2}{3}e^{t}+\frac{2}{3}e^{4t}\;}$$

**Doğrulama.**

Başlangıç koşulları: $x(0)=-2+1=-1\;\checkmark$, &nbsp; $y(0)=-\frac23+\frac23=0\;\checkmark$

Birinci denklem ($x'=-2e^{t}+4e^{4t}$):

$$x'-6x+3y:\quad e^{t}\text{ katsayıları}\;-2+12-2=8\;\checkmark,\qquad e^{4t}\text{ katsayıları}\;4-6+2=0\;\checkmark$$

İkinci denklem ($y'=-\frac23 e^{t}+\frac83 e^{4t}$):

$$y'-2x-y:\quad e^{t}:\;-\tfrac23+4+\tfrac23=4\;\checkmark,\qquad e^{4t}:\;\tfrac83-2-\tfrac23=0\;\checkmark$$

[KUTU]
**Adım 4'teki kısayol.** $Y$'yi de $X$ gibi elemeyle bulabilirdik, ama gerek yok: $X$ zaten bilindiğine göre ==orijinal denklemlerden birine koyup $Y$'yi çekmek daha kısadır.== Nitekim bu yolda $(s-1)$ çarpanı kendiliğinden sadeleşti.

Genel kural: sistemlerde **bir** bilinmeyeni elemeyle bulun, ötekini geri yerleştirmeyle. İkisini birden elemek gereksiz iş üretir.
[/KUTU]

---
id: kdd-fourier
menu: 8.3 Fourier Serileri
tip: konu
baslik: 8.3 &nbsp;Fourier Serileri — Değişkenlerine Ayırma İçin Altyapı
---

Değişkenlerine ayırma yöntemi bize sonsuz sayıda çözüm parçası üretecek:

$$u_{n}(x,t)=\sin\frac{n\pi x}{L}\cdot T_{n}(t)$$

Başlangıç koşulunu sağlatmak için bunları toplayacağız. Ama bunun işe yaraması için şu soruya cevap gerekiyor:

> Verilen bir $f(x)$ fonksiyonu, ==sinüslerin toplamı olarak== yazılabilir mi?

Cevap: evet. Bu açılıma **Fourier serisi** denir.

---

### Tam Fourier serisi

$f$, $(-L,L)$ aralığında tanımlı olsun. Fourier serisi:

$$f(x)=\frac{a_{0}}{2}+\sum_{n=1}^{\infty}\left[a_{n}\cos\frac{n\pi x}{L}+b_{n}\sin\frac{n\pi x}{L}\right] \tag{8.3}$$

Katsayılar (**Euler-Fourier formülleri**):

$$a_{n}=\frac{1}{L}\int_{-L}^{L}f(x)\cos\frac{n\pi x}{L}\,dx,\qquad b_{n}=\frac{1}{L}\int_{-L}^{L}f(x)\sin\frac{n\pi x}{L}\,dx \tag{8.4}$$

[KUTU]
**Katsayı formülleri nereden geliyor — diklik.** Şu integraller $m\neq n$ için sıfırdır:

$$\int_{-L}^{L}\sin\frac{m\pi x}{L}\sin\frac{n\pi x}{L}\,dx=\begin{cases}0,& m\neq n\\ L,& m=n\end{cases}$$

$$\int_{-L}^{L}\sin\frac{m\pi x}{L}\cos\frac{n\pi x}{L}\,dx=0\quad\text{(her } m,n)$$

$(8.3)$'ün iki tarafını $\sin\dfrac{m\pi x}{L}$ ile çarpıp integre edin: sağdaki ==sonsuz toplamın tek bir terimi hariç hepsi sıfırlanır== ve geriye $b_{m}L$ kalır. $(8.4)$ buradan çıkar.

Bu, Bölüm 6'daki Legendre ve Bessel diklik bağıntılarının ==aynı fikridir==; orada da katsayılar böyle bulunuyordu.
[/KUTU]

---

### Yarım aralık açılımları

KDD problemlerinde $f$ genellikle $(0,L)$ aralığında verilir — çubuğun ya da telin uzunluğu. O zaman fonksiyonu $(-L,0)$ aralığına ==istediğimiz gibi genişletmekte serbestiz== ve seçimimiz seriyi belirler.

**Tek genişletme → yalnız sinüs serisi.** $f$ tek fonksiyon gibi davranırsa bütün $a_{n}$ sıfırlanır:

$$\boxed{\;f(x)=\sum_{n=1}^{\infty}b_{n}\sin\frac{n\pi x}{L},\qquad b_{n}=\frac{2}{L}\int_{0}^{L}f(x)\sin\frac{n\pi x}{L}\,dx\;} \tag{8.5}$$

**Çift genişletme → yalnız kosinüs serisi.**

$$f(x)=\frac{a_{0}}{2}+\sum_{n=1}^{\infty}a_{n}\cos\frac{n\pi x}{L},\qquad a_{n}=\frac{2}{L}\int_{0}^{L}f(x)\cos\frac{n\pi x}{L}\,dx \tag{8.6}$$

[KUTU]
**Hangisini seçeceğinizi sınır koşulu söyler — kendiniz karar vermezsiniz.**

- Uçlar sabit tutuluyorsa ($u(0,t)=u(L,t)=0$) → özfonksiyonlar $\sin\dfrac{n\pi x}{L}$ → ==sinüs serisi $(8.5)$==
- Uçlar yalıtılmışsa ($u_{x}(0,t)=u_{x}(L,t)=0$) → özfonksiyonlar $\cos\dfrac{n\pi x}{L}$ → ==kosinüs serisi $(8.6)$==

$(8.5)$ ve $(8.6)$'daki **$2/L$ çarpanına dikkat**; tam seri $(8.4)$'te $1/L$ idi. Aralık yarıya indiği için katsayı ikiye katlanır. ==En sık yapılan hata bu çarpanı karıştırmaktır.==
[/KUTU]

---

[SORU*] **Örnek 8.5.** &nbsp; $f(x)=x$ fonksiyonunun $(0,L)$ aralığındaki sinüs serisi açılımını bulunuz.
[CEVAP]
$(8.5)$'i kullanalım:

$$b_{n}=\frac{2}{L}\int_{0}^{L}x\sin\frac{n\pi x}{L}\,dx$$

**Kısmi integrasyon.** $u=x$, $dv=\sin\dfrac{n\pi x}{L}dx$ alalım; o zaman $du=dx$ ve $v=-\dfrac{L}{n\pi}\cos\dfrac{n\pi x}{L}$:

$$\int_{0}^{L}x\sin\frac{n\pi x}{L}\,dx=\left[-\frac{Lx}{n\pi}\cos\frac{n\pi x}{L}\right]_{0}^{L}+\frac{L}{n\pi}\int_{0}^{L}\cos\frac{n\pi x}{L}\,dx$$

**Birinci terim.** Üst sınırda $x=L$ ve $\cos n\pi=(-1)^{n}$; alt sınırda $x=0$ olduğu için terim sıfır:

$$-\frac{L^{2}}{n\pi}(-1)^{n}$$

**İkinci terim.** İntegrali alalım:

$$\frac{L}{n\pi}\left[\frac{L}{n\pi}\sin\frac{n\pi x}{L}\right]_{0}^{L}=\frac{L^{2}}{n^{2}\pi^{2}}\left(\sin n\pi-0\right)=0$$

($\sin n\pi=0$ her tam sayı $n$ için.)

**Birleştir.**

$$b_{n}=\frac{2}{L}\cdot\left(-\frac{L^{2}}{n\pi}(-1)^{n}\right)=\frac{2L\,(-1)^{n+1}}{n\pi}$$

$$\boxed{\;x=\sum_{n=1}^{\infty}\frac{2L\,(-1)^{n+1}}{n\pi}\sin\frac{n\pi x}{L},\qquad 0<x<L\;}$$

**Açık hâli.**

$$x=\frac{2L}{\pi}\left[\sin\frac{\pi x}{L}-\frac{1}{2}\sin\frac{2\pi x}{L}+\frac{1}{3}\sin\frac{3\pi x}{L}-\cdots\right]$$

**Sağlama.** $L=\pi$ ve $x=\dfrac{\pi}{2}$ alalım. Sol taraf $\dfrac{\pi}{2}\approx 1{,}571$. Sağ taraf:

$$2\left[\sin\frac{\pi}{2}-\frac{1}{2}\sin\pi+\frac{1}{3}\sin\frac{3\pi}{2}-\frac{1}{4}\sin 2\pi+\cdots\right]=2\left[1-0-\frac{1}{3}+0+\frac{1}{5}-\cdots\right]$$

Köşeli parantez, bilinen Leibniz serisidir ve $\dfrac{\pi}{4}$'e yakınsar. Sonuç $2\cdot\dfrac{\pi}{4}=\dfrac{\pi}{2}$ &#10003;
[/CEVAP]

---

[SORU] **Örnek 8.6.** &nbsp; $f(x)=T_{0}$ (sabit) fonksiyonunun $(0,L)$ aralığındaki sinüs serisini bulunuz.
[CEVAP]
$$b_{n}=\frac{2}{L}\int_{0}^{L}T_{0}\sin\frac{n\pi x}{L}\,dx=\frac{2T_{0}}{L}\left[-\frac{L}{n\pi}\cos\frac{n\pi x}{L}\right]_{0}^{L}$$

$$=\frac{2T_{0}}{L}\cdot\frac{L}{n\pi}\Big(1-\cos n\pi\Big)=\frac{2T_{0}}{n\pi}\Big(1-(-1)^{n}\Big)$$

Parantez, ==$n$ çiftse $0$, tekse $2$== olur:

$$\boxed{\;b_{n}=\begin{cases}\dfrac{4T_{0}}{n\pi},& n\text{ tek}\\[2mm] 0,& n\text{ çift}\end{cases}\;}$$

$$T_{0}=\frac{4T_{0}}{\pi}\left[\sin\frac{\pi x}{L}+\frac{1}{3}\sin\frac{3\pi x}{L}+\frac{1}{5}\sin\frac{5\pi x}{L}+\cdots\right]$$

Bu açılım 8.5'teki ısı denklemi örneğinde ==doğrudan kullanılacak.==
[/CEVAP]

---

[CLAUDE] Fourier katsayısı hesaplarken hız kazandıran üç şey
**1. Simetriyi önce kontrol edin.** Tam seri isteniyorsa ($-L$ ile $L$ arasında):

- $f$ **tek** ise ($f(-x)=-f(x)$): bütün $a_{n}=0$, ==yalnız sinüs hesaplayın==
- $f$ **çift** ise ($f(-x)=f(x)$): bütün $b_{n}=0$, ==yalnız kosinüs hesaplayın==

$f(x)=x$, $x^{3}$, $\sin x$ tektir; $f(x)=1$, $x^{2}$, $\cos x$, $\lvert x\rvert$ çifttir. Bu, işin yarısını siler.

**2. Bu üç değeri ezberleyin, her hesapta çıkarlar:**

$$\cos n\pi=(-1)^{n},\qquad \sin n\pi=0,\qquad 1-(-1)^{n}=\begin{cases}2,& n\text{ tek}\\ 0,& n\text{ çift}\end{cases}$$

**3. $n$'yi $b_n$ formülünde $0$ yapmayın.** $\sin$ serisinde $n$, $1$'den başlar. Kosinüs serisinde $a_{0}$ ayrı hesaplanır ve formülde $\cos 0=1$ olduğundan

$$\frac{a_{0}}{2}=\frac{1}{L}\int_{0}^{L}f(x)\,dx$$

yani ==fonksiyonun ortalama değeridir.== Fiziksel olarak: çubuğun ortalama sıcaklığı.

**Sonuç kontrolü:** bulduğunuz seride birkaç terim alıp $f$'nin bilinen bir değerinde deneyin — Örnek 8.5'te yaptığımız gibi. Yakınsıyorsa katsayı büyük ihtimalle doğrudur.
[/CLAUDE]

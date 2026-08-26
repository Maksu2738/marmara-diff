---
id: kdd-ayirma
menu: 8.4 Değişkenlerine Ayırma
tip: konu
baslik: 8.4 &nbsp;Değişkenlerine Ayırma Yöntemi
---

Bölümün ana yöntemi. Fikir tek cümlede:

> Çözümü ==her biri tek değişkene bağlı fonksiyonların çarpımı== olarak ara. Böylece KDD, birbirinden bağımsız iki ADD'ye ayrışır.

$$\boxed{\;u(x,t)=X(x)\,T(t)\;}$$

---

### Yöntemin adımları

**Adım 1.** $u=XT$ kabulünü denkleme koy.

**Adım 2.** Denklemi, ==bir tarafta yalnız $x$, öbür tarafta yalnız $t$== kalacak biçimde ayır.

**Adım 3.** İki taraf farklı değişkenlere bağlı ama eşit olduğuna göre, ikisi de ==aynı sabite== eşit olmalıdır. Bu sabite **ayırma sabiti** denir; geleneksel olarak $-\lambda$ yazılır.

**Adım 4.** İki ADD'yi çöz. Sınır koşulları, $\lambda$'nın alabileceği değerleri (**özdeğerler**) belirler.

**Adım 5.** Bulunan çözümleri süperpozisyonla topla; başlangıç koşulunu ==Fourier serisiyle== sağlat.

[KUTU]
**Adım 3 neden geçerli?** $\dfrac{X''}{X}$ yalnız $x$'e, $\dfrac{T'}{kT}$ yalnız $t$'ye bağlı. Bunlar her $x$ ve her $t$ için eşitse, ==$x$'i değiştirdiğinizde sol taraf değişemez== (çünkü sağ taraf $x$'ten habersizdir). Demek ki sol taraf $x$'e bağlı değildir; aynı gerekçeyle sağ taraf $t$'ye bağlı değildir. ==Bir sayıdan başka bir şey olamazlar.==
[/KUTU]

---

### Ayırma sabiti nasıl seçilir?

Adım 4'ün kalbi, defalarca karşınıza çıkacak şu problemdir:

$$X''+\lambda X=0,\qquad X(0)=0,\quad X(L)=0 \tag{8.7}$$

Bu bir **özdeğer problemidir** (7.14): hangi $\lambda$ değerleri için ==sıfırdan farklı== bir çözüm var? Üç durumu tek tek eleyelim.

**Durum 1: $\lambda<0$.** $\lambda=-\mu^{2}$ yazalım ($\mu>0$). Denklem $X''-\mu^{2}X=0$, kökler $\pm\mu$:

$$X=c_{1}e^{\mu x}+c_{2}e^{-\mu x}$$

$X(0)=0\;\Rightarrow\;c_{1}+c_{2}=0\;\Rightarrow\;c_{2}=-c_{1}$, yani $X=c_{1}\left(e^{\mu x}-e^{-\mu x}\right)=2c_{1}\sinh\mu x$.

$X(L)=0\;\Rightarrow\;2c_{1}\sinh\mu L=0$. Ama $\mu L>0$ için $\sinh\mu L\neq 0$, dolayısıyla $c_{1}=0$.

==Yalnız aşikâr çözüm $X\equiv 0$ çıkar. Bu $\lambda$ değerleri işe yaramaz.==

**Durum 2: $\lambda=0$.** Denklem $X''=0$, çözüm $X=c_{1}x+c_{2}$.

$X(0)=0\Rightarrow c_{2}=0$; &nbsp; $X(L)=0\Rightarrow c_{1}L=0\Rightarrow c_{1}=0$.

==Yine yalnız $X\equiv 0$.==

**Durum 3: $\lambda>0$.** $\lambda=\mu^{2}$ yazalım. Denklem $X''+\mu^{2}X=0$, kökler $\pm i\mu$ (7.9):

$$X=c_{1}\cos\mu x+c_{2}\sin\mu x$$

$X(0)=0\;\Rightarrow\;c_{1}=0$, geriye $X=c_{2}\sin\mu x$ kalır.

$X(L)=0\;\Rightarrow\;c_{2}\sin\mu L=0$. ==Şimdi $c_{2}=0$ demek zorunda değiliz==; bunun yerine

$$\sin\mu L=0\;\Longrightarrow\;\mu L=n\pi\;\Longrightarrow\;\mu=\frac{n\pi}{L},\qquad n=1,2,3,\dots$$

[KUTU]
**Sonuç — $(8.7)$'nin özdeğer ve özfonksiyonları:**

$$\boxed{\;\lambda_{n}=\left(\frac{n\pi}{L}\right)^{2},\qquad X_{n}(x)=\sin\frac{n\pi x}{L},\qquad n=1,2,3,\dots\;} \tag{8.8}$$

Bu sonuç **8.5, 8.6 ve 8.7'de aynen kullanılacak.** Bölüm 8'de ezberlenecek tek şey buysa, budur.

$n=0$ alınmaz ($\sin 0=0$, aşikâr çözüm); negatif $n$ de yeni bir şey vermez, yalnız işaret değiştirir.
[/KUTU]

---

### Yalıtılmış uçlar durumu

Sınır koşulu $X'(0)=X'(L)=0$ ise (uçlardan akış yok) aynı eleme yapılır, sonuç değişir:

$$\lambda_{n}=\left(\frac{n\pi}{L}\right)^{2},\qquad X_{n}(x)=\cos\frac{n\pi x}{L},\qquad n=0,1,2,\dots \tag{8.9}$$

Burada ==$n=0$ da geçerlidir== ($X_{0}=1$, sabit çözüm — fiziksel olarak "çubuk baştan sona aynı sıcaklıkta ve öyle kalıyor"). 8.3'teki kosinüs serisinin $a_{0}$ terimi buradan gelir.

---

[SORU*] **Örnek 8.7.** &nbsp; Isı denklemi $u_{t}=k\,u_{xx}$ için değişkenlerine ayırma adımlarını yürütünüz. Sınır koşulları $u(0,t)=u(L,t)=0$.
[CEVAP]
**Adım 1 — Yerine koy.** $u=X(x)T(t)$ için $u_{t}=XT'$ ve $u_{xx}=X''T$:

$$XT'=k\,X''T$$

**Adım 2 — Ayır.** İki tarafı $kXT$'ye bölelim:

$$\frac{T'}{kT}=\frac{X''}{X}$$

Sol taraf yalnız $t$'ye, sağ taraf yalnız $x$'e bağlı.

**Adım 3 — Sabite eşitle.**

$$\frac{T'}{kT}=\frac{X''}{X}=-\lambda$$

**Adım 4 — İki ADD.**

$$X''+\lambda X=0,\qquad T'+k\lambda T=0$$

**Sınır koşullarını $X$'e aktar.** $u(0,t)=X(0)T(t)=0$ her $t$ için geçerli olmalı. $T\equiv 0$ olsaydı çözüm sıfır olurdu, o yüzden:

$$X(0)=0,\qquad X(L)=0$$

Bu tam olarak $(8.7)$'dir; cevabı $(8.8)$'de duruyor:

$$\lambda_{n}=\left(\frac{n\pi}{L}\right)^{2},\qquad X_{n}=\sin\frac{n\pi x}{L}$$

**$T$ denklemi.** Birinci mertebeden, ayrılabilir:

$$T'=-k\lambda_{n}T\;\Longrightarrow\;T_{n}(t)=e^{-k\left(\frac{n\pi}{L}\right)^{2}t}$$

**Adım 5 — Çözüm parçaları ve süperpozisyon.**

$$u_{n}(x,t)=\sin\frac{n\pi x}{L}\;e^{-k\left(\frac{n\pi}{L}\right)^{2}t}$$

$$\boxed{\;u(x,t)=\sum_{n=1}^{\infty}b_{n}\sin\frac{n\pi x}{L}\;e^{-k\left(\frac{n\pi}{L}\right)^{2}t}\;}$$

$b_{n}$ katsayıları başlangıç koşulundan belirlenir — 8.5'te.
[/CEVAP]

---

### Yöntem ne zaman işlemez?

Değişkenlerine ayırma ==her KDD'de çalışmaz.== Gerekenler:

1. Denklem **lineer ve homojen** olmalı (süperpozisyon şart)
2. **Sınır koşulları da homojen** olmalı ($u(0,t)=0$ gibi; $u(0,t)=5$ ise önce dönüştürme gerekir)
3. Bölgenin geometrisi koordinatlara **uymalı** (dikdörtgen, daire, silindir — çarpık bir bölgede ayrışma olmaz)

[KUTU]
**Homojen olmayan sınır koşulu ne yapılır?** $u(0,t)=T_{1}$, $u(L,t)=T_{2}$ gibi bir durumda çözüm ikiye ayrılır:

$$u(x,t)=\underbrace{v(x)}_{\text{kalıcı durum}}+\underbrace{w(x,t)}_{\text{geçici}}$$

$v(x)$, $t\to\infty$ hâlidir ve $v''=0$ ile bulunur — yani ==uçları birleştiren doğru:==

$$v(x)=T_{1}+\frac{T_{2}-T_{1}}{L}x$$

Geriye kalan $w$, ==homojen sınır koşullarını sağlar== ve yukarıdaki yöntemle çözülür. Başlangıç koşulu da $w(x,0)=f(x)-v(x)$ olarak güncellenir.
[/KUTU]

---

[CLAUDE] Yöntemi uygularken düşülen dört tuzak
**1. Ayırma sabitinin işaretini baştan seçmeyin.** "$-\lambda$" yazmak bir tercih değil, ==gelenek==; hangi işaretin işe yaradığını sınır koşulları söyler. Üç durumu da elemeden geçin — sınavda puanın önemli kısmı $\lambda<0$ ve $\lambda=0$ durumlarının ==neden elendiğini yazmaktadır.==

**2. Sınır koşullarını $u$'dan $X$'e aktarmayı unutmayın.** $u(0,t)=0$ ifadesi doğrudan kullanılamaz; $X(0)T(t)=0$ yazıp "$T\equiv 0$ olamaz, o hâlde $X(0)=0$" muhakemesi ==açıkça yapılmalıdır.==

**3. Başlangıç koşulunu erken uygulamayın.** $u(x,0)=f(x)$ koşulu ==tek bir $u_{n}$'ye değil, toplamın tamamına== uygulanır. Adım 5'e kadar bekleyin; erken uygularsanız $f$'nin tam olarak $\sin\frac{n\pi x}{L}$ olmasını beklemek zorunda kalırsınız.

**4. $T$ denkleminde sabit yazmayın.** $T_{n}=c_{n}e^{-k\lambda_{n}t}$ yazıp $X_{n}$'deki $c_2$ ile çarparsanız iki sabiti taşımış olursunuz. ==Bütün sabitleri tek bir $b_{n}$'de toplayın==, Adım 5'te Fourier katsayısı olarak zaten belirlenecek.

**Kontrol refleksi:** bulduğunuz $u(x,t)$'yi denklemde ve sınır koşullarında sınayın. $x=0$ ve $x=L$'de $\sin n\pi=0$ verdiğinden sınır koşulları ==otomatik sağlanmalıdır==; sağlanmıyorsa özfonksiyonu yanlış seçmişsinizdir.
[/CLAUDE]

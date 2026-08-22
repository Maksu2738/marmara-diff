---
id: tekrar-ters-donusum
menu: 4.6 Bölüm Tekrarı — Ters Dönüşüm
tip: sorular
baslik: 4.6 &nbsp;Bölüm Tekrar Soruları — Ters Dönüşüm (13-24)
---

Bu set bölümün bütün ters dönüşüm tekniklerini bir arada sınıyor: tablo okuma, tamkare, pay ötelemesi, kısmi kesirler ve tekrarlı kuadratik çarpanlar. Son dört soruda ($21-24$) ayrıca **üstel çarpan** var; onlar ikinci öteleme THEoREM'ini gerektiriyor ve cevapları parçalı fonksiyon olarak çıkıyor.

[SORU] **13.** &nbsp; $F(s)=\dfrac{4}{s+3}+\dfrac{5s+6}{s^{2}+3}$
[CEVAP]
Birinci terim doğrudan 2 numaralı girdi: $\;4e^{-3t}$

İkinci terimi ikiye bölelim. Payda $s^{2}+3$, yani $b=\sqrt{3}$:

$$\frac{5s}{s^{2}+3}\;\to\;5\cos\sqrt{3}\,t$$

$$\frac{6}{s^{2}+3}=\frac{6}{\sqrt{3}}\cdot\frac{\sqrt{3}}{s^{2}+3}\;\to\;\frac{6}{\sqrt{3}}\sin\sqrt{3}\,t=2\sqrt{3}\sin\sqrt{3}\,t$$

$$\boxed{\;4e^{-3t}+5\cos\sqrt{3}\,t+2\sqrt{3}\sin\sqrt{3}\,t\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **14.** &nbsp; $F(s)=\dfrac{2s+3}{s^{3}}+\dfrac{1}{(2s+3)^{2}}$
[CEVAP]
**Birinci terim** — payı terim terim bölelim:

$$\frac{2s+3}{s^{3}}=\frac{2}{s^{2}}+\frac{3}{s^{3}}$$

7 numara ($\frac{n!}{s^{n+1}}\to t^{n}$): $\;\frac{2}{s^{2}}\to 2t$, &nbsp; $\frac{3}{s^{3}}=\frac{3}{2}\cdot\frac{2}{s^{3}}\to\frac{3}{2}t^{2}$

**İkinci terim** — baştaki katsayıyı temizleyelim:

$$(2s+3)^{2}=4\left(s+\tfrac{3}{2}\right)^{2}\;\Longrightarrow\;\frac{1}{(2s+3)^{2}}=\frac{1}{4}\cdot\frac{1}{\left(s+\frac{3}{2}\right)^{2}}$$

8 numara ($n=1$, $a=-\frac32$): $\;\frac{1}{\left(s+\frac32\right)^{2}}\to te^{-3t/2}$

$$\boxed{\;2t+\frac{3t^{2}}{2}+\frac{t}{4}e^{-3t/2}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **15.** &nbsp; $F(s)=\dfrac{s+3}{s^{2}+4s+6}$
[CEVAP]
Tamkare: $s^{2}+4s+6=(s+2)^{2}+2$, yani $b=\sqrt{2}$.

Payı öteleyelim: $s+3=(s+2)+1$

$$F(s)=\frac{s+2}{(s+2)^{2}+2}+\frac{1}{(s+2)^{2}+2}$$

İkinci terimde payı $\sqrt{2}$ yapalım:

$$\frac{1}{(s+2)^{2}+\left(\sqrt{2}\right)^{2}}=\frac{1}{\sqrt{2}}\cdot\frac{\sqrt{2}}{(s+2)^{2}+\left(\sqrt{2}\right)^{2}}$$

12 ve 11 numara ($a=2$, $b=\sqrt{2}$), ve $\frac{1}{\sqrt{2}}=\frac{\sqrt{2}}{2}$:

$$\boxed{\;e^{-2t}\left[\cos\sqrt{2}\,t+\frac{\sqrt{2}}{2}\sin\sqrt{2}\,t\right]\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **16.** &nbsp; $F(s)=\dfrac{2s+3}{s^{2}+4s+4}$
[CEVAP]
$s^{2}+4s+4=(s+2)^{2}$ — tekrarlı doğrusal çarpan.

Payı öteleyelim: $2s+3=2(s+2)-1$

$$F(s)=\frac{2}{s+2}-\frac{1}{(s+2)^{2}}$$

$$\boxed{\;2e^{-2t}-te^{-2t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **17.** &nbsp; $F(s)=\dfrac{7s+11}{s^{2}+4s+3}$
[CEVAP]
Payda çarpanlarına ayrılır: $s^{2}+4s+3=(s+1)(s+3)$ — ==diskriminant pozitif, kısmi kesire gidiyoruz.==

$$7s+11=A(s+3)+B(s+1)$$

$s=-1$: $4=2A\Rightarrow A=2$. &nbsp;&nbsp; $s=-3$: $-10=-2B\Rightarrow B=5$.

$$\boxed{\;2e^{-t}+5e^{-3t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **18.** &nbsp; $F(s)=\dfrac{2s+4}{s^{2}+4s+1}$
[CEVAP]
Tamkare: $s^{2}+4s+1=(s+2)^{2}-3$

==İşarete dikkat: eksi çıktı==, yani trigonometrik değil **hiperbolik** girdi kullanılacak.

Pay tam olarak $2(s+2)$'dir:

$$F(s)=\frac{2(s+2)}{(s+2)^{2}-\left(\sqrt{3}\right)^{2}}$$

6 numara ($\frac{s}{s^{2}-b^{2}}\to\cosh bt$) ve öteleme özelliğiyle:

$$2e^{-2t}\cosh\sqrt{3}\,t$$

$\cosh u=\frac{e^{u}+e^{-u}}{2}$ olduğundan:

$$\boxed{\;e^{-2t}\left(e^{\sqrt{3}\,t}+e^{-\sqrt{3}\,t}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **19.** &nbsp; $F(s)=\dfrac{5s^{2}-25s+27}{s^{3}-6s^{2}+9s}$
[CEVAP]
Paydayı çarpanlarına ayıralım:

$$s^{3}-6s^{2}+9s=s\left(s^{2}-6s+9\right)=s(s-3)^{2}$$

Doğrusal çarpan + tekrarlı doğrusal çarpan:

$$\frac{A}{s}+\frac{B}{s-3}+\frac{C}{(s-3)^{2}}$$

$$5s^{2}-25s+27=A(s-3)^{2}+Bs(s-3)+Cs$$

$s=0$: $27=9A\Rightarrow A=3$

$s=3$: $45-75+27=-3=3C\Rightarrow C=-1$

$s^{2}$ katsayısı: $5=A+B\Rightarrow B=2$

$$\boxed{\;3+2e^{3t}-te^{3t}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **20.** &nbsp; $F(s)=\dfrac{3s^{2}+2s+9}{\left(s^{2}+9\right)^{2}}$
[CEVAP]
Payda **tekrarlı indirgenemez kuadratiktir**; kısmi kesir yeni bir şey vermez. Bunun yerine ==payı, paydanın çarpanını içerecek biçimde bölelim:==

$$3s^{2}+2s+9=3\left(s^{2}+9\right)+2s+9-27=3\left(s^{2}+9\right)+2s-18$$

$$F(s)=\frac{3}{s^{2}+9}+\frac{2s}{\left(s^{2}+9\right)^{2}}-\frac{18}{\left(s^{2}+9\right)^{2}}$$

**Birinci terim.** $b=3$ için $\frac{3}{s^{2}+9}$ tam olarak 3 numaralı girdidir: $\;\sin 3t$

**İkinci terim.** 9 numara: $\frac{2bs}{\left(s^{2}+b^{2}\right)^{2}}\to t\sin bt$. $b=3$ için pay $6s$ olmalı:

$$\frac{2s}{\left(s^{2}+9\right)^{2}}=\frac{1}{3}\cdot\frac{6s}{\left(s^{2}+9\right)^{2}}\;\to\;\frac{1}{3}\,t\sin 3t$$

**Üçüncü terim.** 13 numara: $\frac{1}{\left(s^{2}+b^{2}\right)^{2}}\to\frac{\sin bt-bt\cos bt}{2b^{3}}$. $b=3$ için $2b^{3}=54$:

$$-\frac{18}{\left(s^{2}+9\right)^{2}}\;\to\;-18\cdot\frac{\sin 3t-3t\cos 3t}{54}=-\frac{1}{3}\sin 3t+t\cos 3t$$

**Topla:**

$$\sin 3t+\frac{1}{3}t\sin 3t-\frac{1}{3}\sin 3t+t\cos 3t$$

$$\boxed{\;\frac{2}{3}\sin 3t+\frac{1}{3}t\sin 3t+t\cos 3t\;}$$

[KUTU]
**Kitabın cevabıyla UYUŞMUYOR — dikkat.**

Cevap anahtarında şu yazıyor:

$$\frac{t}{3}\sin 3t-t\cos 3t+\frac{4}{3}\sin 3t$$

İki terim farklı: $\sin 3t$ katsayısı ($\frac23$ yerine $\frac43$) ve $t\cos 3t$ işareti ($+$ yerine $-$).

**Hangisi doğru?** Kontrol için her iki cevabın Laplace dönüşümünü geri aldım.

*Yukarıdaki çözüm için:*

$$\mathcal{L}\left\{\frac{2}{3}\sin 3t+\frac{1}{3}t\sin 3t+t\cos 3t\right\}=\frac{2}{s^{2}+9}+\frac{2s}{\left(s^{2}+9\right)^{2}}+\frac{s^{2}-9}{\left(s^{2}+9\right)^{2}}$$

$$=\frac{2\left(s^{2}+9\right)+2s+s^{2}-9}{\left(s^{2}+9\right)^{2}}=\frac{3s^{2}+2s+9}{\left(s^{2}+9\right)^{2}}\;\checkmark$$

==Sorudaki $F(s)$'nin ta kendisi.==

*Anahtardaki cevap için:*

$$\frac{2s}{\left(s^{2}+9\right)^{2}}-\frac{s^{2}-9}{\left(s^{2}+9\right)^{2}}+\frac{4}{s^{2}+9}=\frac{2s-s^{2}+9+4\left(s^{2}+9\right)}{\left(s^{2}+9\right)^{2}}=\frac{3s^{2}+2s+45}{\left(s^{2}+9\right)^{2}}$$

Payda $9$ yerine $45$ çıkıyor — ==soruyla uyuşmuyor.==

**Sonuç:** Yukarıdaki çözüm doğru görünüyor. Anahtardaki fark ya tarama hatası ya kitap dizgi hatası olabilir; ==kitaptan teyit etmeniz iyi olur.== Yöntem her hâlükârda aynıdır.
[/KUTU]

**Kullanılan girdiler:** 3, 9 ve 13 numara. ==Tekrarlı kuadratik paydalarda bu üçlü hep birlikte çalışır;== payı $As^{2}+Bs+C$ biçimindeyse önce $A(s^{2}+b^{2})$ ayrılır, kalan $Bs$ ve sabit terimler 9 ve 13 numaralara gider.

---

### 21-24: üstel çarpanlı ters dönüşüm

Bu dört soruda $F(s)$ bir $e^{-as}$ çarpanı taşıyor. Yöntem hep aynı üç adımdır:

1. ==Üstel çarpanı bir kenara koy==, geriye kalan $G(s)$'nin ters dönüşümü $g(t)$'yi bul.
2. İkinci öteleme THEoREM'ini uygula: &nbsp; $\mathcal{L}^{-1}\left\{e^{-as}G(s)\right\}=g(t-a)\,u_{a}(t)$.
3. $g(t-a)$'yı **sadeleştir** ve sonucu parçalı biçimde yaz.

[KUTU]
**3. adım neden ayrı bir adım?** Çünkü $g(t-a)$ ifadesi çoğu zaman sadeleşir. Trigonometrik terimlerde $a$ periyodun katıysa öteleme ==tamamen kaybolur== (21 ve 24 böyle); üstel terimlerde ise $e^{-(t-a)}$ olarak kalır (22 böyle). Sadeleştirmeden bırakmak yanlış değildir ama cevabın gerçek biçimini gizler.
[/KUTU]

[SORU] **21.** &nbsp; $F(s)=\dfrac{4s-5}{s^{2}+4}\,e^{-\pi s}$
[CEVAP]
**Adım 1 — Üstel çarpanı ayır.**

$$G(s)=\frac{4s-5}{s^{2}+4}=4\cdot\frac{s}{s^{2}+4}-\frac{5}{2}\cdot\frac{2}{s^{2}+4}$$

==Payı $2$'ye bölüp $\tfrac{2}{s^{2}+4}$ elde etmek şart==: tabloda $\mathcal{L}\{\sin 2t\}=\dfrac{2}{s^{2}+4}$ yazar, $\dfrac{1}{s^{2}+4}$ yazmaz.

$$g(t)=4\cos 2t-\frac{5}{2}\sin 2t$$

**Adım 2 — Ötele.** $a=\pi$:

$$f(t)=\left[4\cos 2(t-\pi)-\frac{5}{2}\sin 2(t-\pi)\right]u_{\pi}(t)$$

**Adım 3 — Sadeleştir.** $\cos 2(t-\pi)=\cos(2t-2\pi)=\cos 2t$ ve $\sin 2(t-\pi)=\sin(2t-2\pi)=\sin 2t$ — ==öteleme tümüyle kayboluyor==, çünkü $2\pi$ tam bir periyot:

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<\pi\\[4pt] 4\cos 2t-\dfrac{5}{2}\sin 2t, & t>\pi\end{cases}\;}$$

**Doğrulama (ileri dönüşüm).**

$$\mathcal{L}\{f\}=e^{-\pi s}\left[\frac{4s}{s^{2}+4}-\frac{5}{2}\cdot\frac{2}{s^{2}+4}\right]=e^{-\pi s}\cdot\frac{4s-5}{s^{2}+4}\;\checkmark$$

[KUTU]
**&#9888; Cevap anahtarıyla uyuşmuyor — sinüs katsayısı.** Anahtar $\dfrac{8}{5}$ veriyor:

$$4\cos 2t-\frac{8}{5}\sin 2t\qquad(t>\pi)$$

Bizim sonucumuz $\dfrac{5}{2}$. Cevabın geri kalanı ($4\cos 2t$, $t>\pi$ kesme noktası, sıfır parçası) birebir aynı.

**Neden bizimkinden eminiz:** $\dfrac{5}{s^{2}+4}$ ifadesini tabloya sokmanın tek yolu $\dfrac{5}{2}\cdot\dfrac{2}{s^{2}+4}$ yazmaktır; başka bir katsayı çıkmaz. Yukarıdaki ileri dönüşüm doğrulaması da tam olarak sorudaki $F(s)$'yi geri veriyor. $\dfrac{8}{5}$ ile aynı hesap yapılırsa $\dfrac{16}{5}$ paylı bir ifade çıkar, soruyla uyuşmaz.

$\tfrac{5}{2}$ ile $\tfrac{8}{5}$ rakamlarının benzerliği, ==anahtarın taranmasında bir okuma hatası== olabileceğini düşündürüyor. Yine de kitaptan bir teyit edin.
[/KUTU]
[/CEVAP]

[SORU] **22.** &nbsp; $F(s)=\dfrac{2s-2}{s^{2}+4s+3}\,e^{-5s}$
[CEVAP]
**Adım 1 — Paydayı çarpanlara ayır ve kısmi kesirlere geç.**

$$s^{2}+4s+3=(s+1)(s+3)$$

$$\frac{2s-2}{(s+1)(s+3)}=\frac{A}{s+1}+\frac{B}{s+3}\;\Longrightarrow\;2s-2=A(s+3)+B(s+1)$$

$s=-1$: &nbsp; $-4=2A\Rightarrow A=-2$

$s=-3$: &nbsp; $-8=-2B\Rightarrow B=4$

$$g(t)=-2e^{-t}+4e^{-3t}$$

**Adım 2 — Ötele.** $a=5$:

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<5\\[4pt] -2e^{-(t-5)}+4e^{-3(t-5)}, & t>5\end{cases}\;}$$

==Burada öteleme kaybolmuyor==: üstel fonksiyon periyodik olmadığı için $e^{-(t-5)}$ olduğu gibi kalır. 21. soruyla arasındaki fark tam olarak budur.

**Doğrulama ($t=5$).** $f(5^{+})=-2+4=2$. Aynı değeri $G$'den de okuyabiliriz: $g(0)=-2+4=2$ &#10003; — ötelenmiş fonksiyon, $t=a$ anında $g(0)$ değerinden başlar.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **23.** &nbsp; $F(s)=\dfrac{e^{-2s}-2e^{-5s}}{s^{3}}$
[CEVAP]
**Adım 1 — İki ayrı ötelemeye böl.**

$$F(s)=e^{-2s}\cdot\frac{1}{s^{3}}-2\,e^{-5s}\cdot\frac{1}{s^{3}}$$

==İki farklı $a$ değeri var==: $a=2$ ve $a=5$. Her biri kendi basamak fonksiyonunu getirir.

$$\mathcal{L}^{-1}\left\{\frac{1}{s^{3}}\right\}=\frac{t^{2}}{2}$$

**Adım 2 — Ötele.**

$$f(t)=\frac{(t-2)^{2}}{2}\,u_{2}(t)-2\cdot\frac{(t-5)^{2}}{2}\,u_{5}(t)=\frac{(t-2)^{2}}{2}\,u_{2}(t)-(t-5)^{2}\,u_{5}(t)$$

**Adım 3 — Parçalı biçime aç.**

$2<t<5$ aralığında yalnız birinci terim etkin:

$$\frac{(t-2)^{2}}{2}=\frac{t^{2}-4t+4}{2}=\frac{t^{2}}{2}-2t+2$$

$t>5$ aralığında ikisi birden:

$$\left(\frac{t^{2}}{2}-2t+2\right)-\left(t^{2}-10t+25\right)=-\frac{t^{2}}{2}+8t-23$$

$$\boxed{\;f(t)=\begin{cases}0, & 0<t<2\\[4pt] \dfrac{t^{2}}{2}-2t+2, & 2<t<5\\[4pt] -\dfrac{t^{2}}{2}+8t-23, & t>5\end{cases}\;}$$

**Doğrulama (süreklilik).** $t=5$'te birinci ifade $\tfrac{25}{2}-10+2=4{,}5$; ikinci ifade $-\tfrac{25}{2}+40-23=4{,}5$ &#10003; — ==fonksiyon sürekli==, nitekim eklenen $(t-5)^{2}$ terimi $t=5$'te sıfırdır.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **24.** &nbsp; $F(s)=\dfrac{\left[3s^{3}+8s^{2}+18\right]\left[e^{-2\pi s}+1\right]}{s^{4}+9s^{2}}$
[CEVAP]
**Adım 1 — Çarpanı aç.** Köşeli parantez $e^{-2\pi s}+1$ olduğu için ==aynı $G(s)$ hem ötelenmiş hem ötelenmemiş olarak görünecek==:

$$F(s)=G(s)\,e^{-2\pi s}+G(s),\qquad G(s)=\frac{3s^{3}+8s^{2}+18}{s^{2}\left(s^{2}+9\right)}$$

**Adım 2 — $G$'yi kısmi kesirlere ayır.** Payda $s^{2}(s^{2}+9)$; tekrarlı $s$ çarpanı ve indirgenemez kuadratik için:

$$\frac{3s^{3}+8s^{2}+18}{s^{2}\left(s^{2}+9\right)}=\frac{A}{s}+\frac{B}{s^{2}}+\frac{Cs+D}{s^{2}+9}$$

$$3s^{3}+8s^{2}+18=As\left(s^{2}+9\right)+B\left(s^{2}+9\right)+(Cs+D)s^{2}$$

Katsayıları eşleyelim:

$$s^{3}:\;A+C=3,\qquad s^{2}:\;B+D=8,\qquad s^{1}:\;9A=0,\qquad s^{0}:\;9B=18$$

$$A=0\;\Rightarrow\;C=3,\qquad B=2\;\Rightarrow\;D=6$$

$$G(s)=\frac{2}{s^{2}}+\frac{3s+6}{s^{2}+9}=\frac{2}{s^{2}}+3\cdot\frac{s}{s^{2}+9}+2\cdot\frac{3}{s^{2}+9}$$

$$g(t)=2t+3\cos 3t+2\sin 3t$$

**Adım 3 — İki parçayı topla.**

$$f(t)=g(t)+g(t-2\pi)\,u_{2\pi}(t)$$

$t>2\pi$ için $g(t-2\pi)$'yı sadeleştirelim. $\cos 3(t-2\pi)=\cos(3t-6\pi)=\cos 3t$ ve benzer şekilde $\sin 3(t-2\pi)=\sin 3t$ — ==$6\pi$ tam üç periyot==, trigonometrik kısım değişmiyor. Değişen yalnız $2t$ terimi:

$$g(t-2\pi)=2(t-2\pi)+3\cos 3t+2\sin 3t=2t-4\pi+3\cos 3t+2\sin 3t$$

Toplarsak:

$$g(t)+g(t-2\pi)=4t-4\pi+6\cos 3t+4\sin 3t=4(t-\pi)+6\cos 3t+4\sin 3t$$

$$\boxed{\;f(t)=\begin{cases}2t+3\cos 3t+2\sin 3t, & 0<t<2\pi\\[4pt] 4(t-\pi)+6\cos 3t+4\sin 3t, & t>2\pi\end{cases}\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[KUTU]
**Dört sorunun birlikte öğrettiği şey.** Öteleme sonrası $g(t-a)$'ya ne olduğu ==tamamen $g$'nin cinsine bağlıdır:==

- **Trigonometrik** ve $a$ periyodun katı → öteleme kaybolur (21, 24'ün trigonometrik kısmı).
- **Üstel** → öteleme $e^{-(t-a)}$ olarak kalır, asla sadeleşmez (22).
- **Polinom** → açılır, farklı dereceden yeni bir polinom verir (23, 24'ün $2t$ kısmı).

24. soru üçünü aynı anda barındırdığı için en öğreticisidir: $2t$ açıldı, $\cos 3t$ ve $\sin 3t$ olduğu gibi kaldı, sonuç ikisinin karışımı oldu.
[/KUTU]

---


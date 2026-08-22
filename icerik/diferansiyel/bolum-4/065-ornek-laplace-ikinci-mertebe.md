---
id: ornek-laplace-ikinci-mertebe
menu: 4.3 Örnekler — İkinci Mertebeden
tip: ornek
baslik: 4.3 &nbsp;Çözümlü Örnekler — İkinci Mertebeden Başlangıç Değer Problemleri
---

[SORU] **Örnek 9.27.** &nbsp; Aşağıdaki başlangıç değer problemini çözünüz:
$$y''-2y'-8y=0,\qquad y(0)=3,\qquad y'(0)=6$$
[CEVAP]
**Adım 1 — Dönüşümü al.**

$\mathcal{L}\{y\}=Y(s)$ diyelim. THEoREM 9.4 ile:

$$\mathcal{L}\{y''\}=s^{2}Y(s)-s\,y(0)-y'(0)=s^{2}Y(s)-3s-6$$

$$\mathcal{L}\{y'\}=s\,Y(s)-y(0)=s\,Y(s)-3$$

Denkleme yerleştirelim:

$$s^{2}Y(s)-3s-6-2\Big[s\,Y(s)-3\Big]-8Y(s)=0$$

$$s^{2}Y(s)-3s-6-2sY(s)+6-8Y(s)=0$$

==Sabit terimler birbirini götürdü== ($-6+6=0$):

$$\left[s^{2}-2s-8\right]Y(s)-3s=0$$

**Adım 2 — $Y(s)$'yi çöz.**

$$Y(s)=\frac{3s}{s^{2}-2s-8}=\frac{3s}{(s-4)(s+2)}$$

**Adım 3 — Ters dönüşüm.**

$$\frac{3s}{(s-4)(s+2)}=\frac{A}{s-4}+\frac{B}{s+2}\;\Longrightarrow\;3s=A(s+2)+B(s-4)$$

$s=4$: $\;12=6A\;\Longrightarrow\;A=2$

$s=-2$: $\;-6=-6B\;\Longrightarrow\;B=1$

Tablo 9.1, 2 numara:

$$\boxed{\;y=2e^{4t}+e^{-2t}\;}$$

**Doğrulama.**

$$y(0)=2+1=3\;\checkmark$$

$$y'=8e^{4t}-2e^{-2t}\;\Longrightarrow\;y'(0)=8-2=6\;\checkmark$$

$$y''=32e^{4t}+4e^{-2t}$$

$$y''-2y'-8y=\left(32-16-16\right)e^{4t}+\left(4+4-8\right)e^{-2t}=0\;\checkmark$$

[KUTU]
**Homojen denklemde ne oldu?** Sağ taraf sıfır olduğu için $Y(s)$'nin payı yalnızca başlangıç koşullarından geldi. Paydadaki $s^{2}-2s-8$ ise ==karakteristik polinomun ta kendisidir==; kökleri $4$ ve $-2$, klasik yöntemde bulacağımız köklerle aynı. Laplace bu bilgiyi paydanın çarpanları olarak taşır.
[/KUTU]

---

[SORU] **Örnek 9.28.** &nbsp; Aşağıdaki başlangıç değer problemini çözünüz:
$$y''+y=e^{-2t}\sin t,\qquad y(0)=0,\qquad y'(0)=0$$
[CEVAP]
**Adım 1 — Dönüşümü al.**

$$\mathcal{L}\{y''\}+\mathcal{L}\{y\}=\mathcal{L}\{e^{-2t}\sin t\}$$

Her iki başlangıç koşulu da sıfır olduğundan ==türev terimi çok sadeleşiyor:==

$$\mathcal{L}\{y''\}=s^{2}Y(s)-s\cdot 0-0=s^{2}Y(s)$$

Sağ taraf için Tablo 9.1'in 11 numarasını kullanalım ($e^{-at}\sin bt\leftrightarrow\frac{b}{(s+a)^{2}+b^{2}}$, burada $a=2$, $b=1$):

$$\mathcal{L}\{e^{-2t}\sin t\}=\frac{1}{(s+2)^{2}+1}$$

$$\left(s^{2}+1\right)Y(s)=\frac{1}{(s+2)^{2}+1}$$

**Adım 2 — $Y(s)$'yi çöz.**

$$Y(s)=\frac{1}{\left(s^{2}+1\right)\left[(s+2)^{2}+1\right]}$$

Paydayı açalım: $(s+2)^{2}+1=s^{2}+4s+5$.

**Adım 3 — Kısmi kesirlere ayır.**

Payda **iki indirgenemez kuadratik** çarpandan oluşuyor; her birinin üstüne birinci dereceden ifade gelir:

$$\frac{1}{\left(s^{2}+1\right)\left(s^{2}+4s+5\right)}=\frac{As+B}{s^{2}+1}+\frac{Cs+D}{s^{2}+4s+5}$$

Ortak paydayla çarpıp $s$ kuvvetlerine göre düzenlersek dört denklem çıkar:

$$A+C=0,\qquad 4A+B+D=0,\qquad 5A+4B+C=0,\qquad 5B+D=1$$

Çözümü:

$$A=-\frac{1}{8},\qquad B=\frac{1}{8},\qquad C=\frac{1}{8},\qquad D=\frac{3}{8}$$

**Kontrol.** $A+C=-\frac18+\frac18=0\;\checkmark$; $\;4A+B+D=-\frac48+\frac18+\frac38=0\;\checkmark$; $\;5A+4B+C=-\frac58+\frac48+\frac18=0\;\checkmark$; $\;5B+D=\frac58+\frac38=1\;\checkmark$

**Adım 4 — İkinci kesri tabloya uydur.**

$$\frac{1}{8}\cdot\frac{s}{s^{2}+4s+5}+\frac{3}{8}\cdot\frac{1}{s^{2}+4s+5}$$

Paydayı tamkare yazalım: $s^{2}+4s+5=(s+2)^{2}+1$. Ama payda $s$ var, tabloda ise $s+2$ aranıyor — ==payı da ötelemeliyiz:==

$$\frac{s}{(s+2)^{2}+1}=\frac{(s+2)-2}{(s+2)^{2}+1}=\frac{s+2}{(s+2)^{2}+1}-\frac{2}{(s+2)^{2}+1}$$

Yerine koyalım:

$$\frac{1}{8}\left[\frac{s+2}{(s+2)^{2}+1}-\frac{2}{(s+2)^{2}+1}\right]+\frac{3}{8}\cdot\frac{1}{(s+2)^{2}+1}$$

Son iki terimi birleştirelim: $-\dfrac{2}{8}+\dfrac{3}{8}=+\dfrac{1}{8}$

$$=\frac{1}{8}\cdot\frac{s+2}{(s+2)^{2}+1}+\frac{1}{8}\cdot\frac{1}{(s+2)^{2}+1}$$

**Adım 5 — Tablodan oku.**

Dört parçayı sırasıyla 4, 3, 12 ve 11 numaralı girdilerle çevirelim:

$$-\frac{1}{8}\cdot\frac{s}{s^{2}+1}\;\to\;-\frac{1}{8}\cos t$$
$$+\frac{1}{8}\cdot\frac{1}{s^{2}+1}\;\to\;+\frac{1}{8}\sin t$$
$$+\frac{1}{8}\cdot\frac{s+2}{(s+2)^{2}+1}\;\to\;+\frac{1}{8}e^{-2t}\cos t$$
$$+\frac{1}{8}\cdot\frac{1}{(s+2)^{2}+1}\;\to\;+\frac{1}{8}e^{-2t}\sin t$$

$$\boxed{\;y=\frac{1}{8}\Big(-\cos t+\sin t+e^{-2t}\cos t+e^{-2t}\sin t\Big)\;}$$

**Doğrulama (başlangıç koşulu).**

$$y(0)=\frac{1}{8}\left(-1+0+1+0\right)=0\;\checkmark$$

[KUTU]
**Adım 4'teki pay ötelemesi en sık atlanan hamledir.** Payda $(s+2)^{2}+1$ hâline getirildiğinde payın da $s+2$ cinsinden yazılması gerekir. $\frac{s}{(s+2)^{2}+1}$ ifadesi tabloda ==yoktur==; $s=(s+2)-2$ yazarak tablodaki iki girdiye bölünür. Aynı hamle, tamkare içeren her ters dönüşümde tekrarlanır.
[/KUTU]

**Çözümün yapısı.** İlk iki terim ($\cos t$, $\sin t$) homojen denklemin çözümünden, son ikisi ($e^{-2t}\cos t$, $e^{-2t}\sin t$) zorlama teriminden gelir. ==Laplace bu ikisini ayırmadan, tek hamlede birlikte üretti.==

---

Son örnek, zorlama teriminin homojen çözümle **çakıştığı** durumu gösteriyor. Klasik yöntemde bu, UC kümesini $x$ ile çarpmayı gerektiren özel bir haldi; ==Laplace'ta ise hiçbir özel kural gerekmez==, çakışma kendiliğinden paydada bir kare çarpanı olarak belirir.

[SORU*] **Ders Notu Örneği C.** &nbsp; Aşağıdaki başlangıç değer problemini Laplace dönüşümüyle çözünüz:
$$y''+4y'+3y=6e^{-t},\qquad y(0)=1,\qquad y'(0)=0$$
[CEVAP]
**Adım 1 — Dönüşümü al.**

$\mathcal{L}\{y\}=Y(s)$ diyelim. $(9.18)$ ve $(9.11)$ ile:

$$\mathcal{L}\{y''\}=s^{2}Y-s\,y(0)-y'(0)=s^{2}Y-s$$
$$\mathcal{L}\{y'\}=sY-y(0)=sY-1$$

Sağ taraf $(9.4)$'ten: $\mathcal{L}\{6e^{-t}\}=\dfrac{6}{s+1}$.

$$\left(s^{2}Y-s\right)+4\left(sY-1\right)+3Y=\frac{6}{s+1}$$

**Adım 2 — $Y$'yi yalnız bırak.**

$Y$ çarpanları: $s^{2}+4s+3$. Sabit terimler sağa geçer:

$$\left(s^{2}+4s+3\right)Y=\frac{6}{s+1}+(s+4)$$

$s^{2}+4s+3=(s+1)(s+3)$ olduğuna dikkat edelim:

$$Y(s)=\frac{6}{(s+1)^{2}(s+3)}+\frac{s+4}{(s+1)(s+3)}=\frac{6+(s+4)(s+1)}{(s+1)^{2}(s+3)}$$

Payı açalım: $(s+4)(s+1)=s^{2}+5s+4$, buna $6$ eklenir:

$$\boxed{\;Y(s)=\frac{s^{2}+5s+10}{(s+1)^{2}(s+3)}\;}$$

==Paydadaki $(s+1)^{2}$ karesi rezonansın izidir:== zorlamadaki $e^{-t}$, homojen çözümün $e^{-t}$ parçasıyla aynı; ikisi çarpıldığında $(s+1)$ çarpanı iki kez belirdi.

**Adım 3 — Kısmi kesirlere ayır.**

Tekrarlı çarpan için üç terim gerekir:

$$\frac{s^{2}+5s+10}{(s+1)^{2}(s+3)}=\frac{A}{s+1}+\frac{B}{(s+1)^{2}}+\frac{C}{s+3}$$

$(s+1)^{2}(s+3)$ ile çarpalım:

$$s^{2}+5s+10=A(s+1)(s+3)+B(s+3)+C(s+1)^{2}$$

$s=-1$: &nbsp; $1-5+10=2B\;\Longrightarrow\;6=2B\;\Longrightarrow\;B=3$

$s=-3$: &nbsp; $9-15+10=4C\;\Longrightarrow\;4=4C\;\Longrightarrow\;C=1$

$A$ için $s^{2}$ katsayılarını karşılaştıralım: solda $1$, sağda $A+C$:

$$1=A+C=A+1\;\Longrightarrow\;A=0$$

==$A=0$ çıkması dikkate değer:== sade $\dfrac{1}{s+1}$ terimi yok, yalnızca karesi var.

$$Y(s)=\frac{3}{(s+1)^{2}}+\frac{1}{s+3}$$

**Adım 4 — Tablodan geri oku.**

Birinci öteleme THEoREM'i ile $\mathcal{L}\{t\,e^{-at}\}=\dfrac{1}{(s+a)^{2}}$ ve $\mathcal{L}\{e^{-at}\}=\dfrac{1}{s+a}$:

$$\boxed{\;y(t)=3t\,e^{-t}+e^{-3t}\;}$$

**Doğrulama.**

$$y(0)=0+1=1\;\checkmark$$

$$y'=3e^{-t}-3t\,e^{-t}-3e^{-3t}\;\Longrightarrow\;y'(0)=3-0-3=0\;\checkmark$$

$$y''=-3e^{-t}-3e^{-t}+3t\,e^{-t}+9e^{-3t}=-6e^{-t}+3t\,e^{-t}+9e^{-3t}$$

Denkleme koyalım, terim türüne göre gruplayarak:

$$e^{-t}:\;-6+4\cdot 3=6,\qquad t\,e^{-t}:\;3-12+9=0,\qquad e^{-3t}:\;9-12+3=0$$

$$\Longrightarrow\;6e^{-t}\;\checkmark$$
[/CEVAP]

[KUTU]
**$t\,e^{-t}$ nereden geldi?** Klasik yöntemde $6e^{-t}$ için $y_{p}=Ae^{-t}$ denenir, ama $e^{-t}$ zaten homojen çözümde olduğu için bu deneme sıfır verir ve küme $x$ ile çarpılıp $y_{p}=Ate^{-t}$ yapılır (Bölüm 3.3, Adım 3 revizyonu).

Laplace'ta böyle bir "kural hatırlama" adımı yok: çakışma ==paydada $(s+1)^{2}$ olarak kendiliğinden görünür== ve $\dfrac{1}{(s+a)^{2}}\to t\,e^{-at}$ tablosu gerisini halleder. Yöntemin sistematikliği en çok burada belli olur.
[/KUTU]

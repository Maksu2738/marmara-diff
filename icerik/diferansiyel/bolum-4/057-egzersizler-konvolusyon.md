---
id: egzersizler-konvolusyon
menu: 4.2 Egzersizler — Konvolüsyon
tip: sorular
defterde: yok
baslik: 4.2 &nbsp;Egzersizler — Konvolüsyon ile Ters Dönüşüm
---

Bu setin tamamında ters dönüşüm **konvolüsyonla (convolution)** bulunacak. Kalıp her seferinde aynıdır:

$$\mathcal{L}^{-1}\{F(s)G(s)\}=\int_{0}^{t}f(\tau)\,g(t-\tau)\,d\tau$$

**Üç adım:**

1. $H(s)$'yi ==tablodan okunabilen iki çarpana== ayır: $H=F\cdot G$.
2. Her birinin ters dönüşümünü al: $f(t)$ ve $g(t)$.
3. İntegrali kur ve hesapla. $g$'nin argümanı $t-\tau$ olur.

[KUTU]
**Hangi çarpan hangisi olsun?** Konvolüsyon ==değişmelidir==: $f*g=g*f$. Yani ikisini de deneyebilirsiniz, sonuç aynıdır. Ama integralin zorluğu değişir: **sabit ya da $t$'nin kuvveti olan çarpanı $f$ yapın**, üstel/trigonometrik olanı $g$ yapın. O zaman $g(t-\tau)$'daki $t$ integralin dışına çıkarılabilir ve iş kolaylaşır.

Aşağıdaki 1. ve 5. soruda tam olarak bu yapılıyor: $e^{-3(t-\tau)}=e^{-3t}e^{3\tau}$ yazılıp $e^{-3t}$ integral dışına alınıyor.
[/KUTU]

---

[SORU] **1.** &nbsp; Konvolüsyon ve Tablo 9.1'i kullanarak $H(s)=\dfrac{1}{s^{2}+5s+6}$ için $\mathcal{L}^{-1}\{H(s)\}$'yi bulunuz.
[CEVAP]
**Adım 1 — Çarpanlara ayır.**

$$H(s)=\frac{1}{(s+2)(s+3)}=\underbrace{\frac{1}{s+2}}_{F(s)}\cdot\underbrace{\frac{1}{s+3}}_{G(s)}$$

$$f(t)=e^{-2t},\qquad g(t)=e^{-3t}$$

**Adım 2 — İntegrali kur.**

$$h(t)=\int_{0}^{t}e^{-2\tau}\,e^{-3(t-\tau)}\,d\tau$$

**Adım 3 — $t$'ye bağlı kısmı dışarı al.** $e^{-3(t-\tau)}=e^{-3t}e^{3\tau}$ ve $e^{-3t}$ ==integral değişkeni $\tau$'ya bağlı olmadığı için== dışarı çıkar:

$$=e^{-3t}\int_{0}^{t}e^{-2\tau}e^{3\tau}\,d\tau=e^{-3t}\int_{0}^{t}e^{\tau}\,d\tau=e^{-3t}\left[e^{\tau}\right]_{0}^{t}$$

$$=e^{-3t}\left(e^{t}-1\right)$$

$$\boxed{\;h(t)=e^{-2t}-e^{-3t}\;}$$

**Çapraz kontrol (kısmi kesirler).** $\dfrac{1}{(s+2)(s+3)}=\dfrac{1}{s+2}-\dfrac{1}{s+3}$ olduğundan ters dönüşüm doğrudan $e^{-2t}-e^{-3t}$. &#10003; ==Aynı sonuç, daha kısa yoldan.==

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **3.** &nbsp; $H(s)=\dfrac{1}{s\left(s^{2}+9\right)}$
[CEVAP]
**Adım 1 — Çarpanlara ayır.**

$$H(s)=\underbrace{\frac{1}{s}}_{F(s)}\cdot\underbrace{\frac{1}{s^{2}+9}}_{G(s)}$$

$$f(t)=1,\qquad g(t)=\frac{1}{3}\sin 3t$$

==Paydaki $3$'ü tamamlamayı unutmayın==: tabloda $\mathcal{L}\{\sin 3t\}=\dfrac{3}{s^{2}+9}$ yazar, dolayısıyla $\dfrac{1}{s^{2}+9}$ ifadesinin karşılığı $\dfrac{1}{3}\sin 3t$'dir.

**Adım 2 — İntegrali kur.**

$$h(t)=\int_{0}^{t}1\cdot\frac{1}{3}\sin 3(t-\tau)\,d\tau$$

**Adım 3 — Değişken değiştir.** $u=t-\tau$, $du=-d\tau$; sınırlar $\tau:0\to t$ iken $u:t\to 0$ olur ve eksi işareti sınırları geri çevirir:

$$=\frac{1}{3}\int_{0}^{t}\sin 3u\,du=\frac{1}{3}\left[-\frac{\cos 3u}{3}\right]_{0}^{t}=\frac{1}{3}\cdot\frac{1-\cos 3t}{3}$$

$$\boxed{\;h(t)=\frac{1-\cos 3t}{9}\;}$$

**Çapraz kontrol (kısmi kesirler).** $\dfrac{1}{s\left(s^{2}+9\right)}=\dfrac{1/9}{s}-\dfrac{s/9}{s^{2}+9}$ &nbsp;$\to$&nbsp; $\dfrac{1}{9}-\dfrac{1}{9}\cos 3t$. &#10003;

**Başlangıç kontrolü.** $h(0)=\dfrac{1-1}{9}=0$; $H(s)$'nin paydası $s$ ile başladığı için bu beklenen sonuç.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **5.** &nbsp; $H(s)=\dfrac{1}{s^{2}(s+3)}$
[CEVAP]
**Adım 1 — Çarpanlara ayır.**

$$H(s)=\underbrace{\frac{1}{s^{2}}}_{F(s)}\cdot\underbrace{\frac{1}{s+3}}_{G(s)}\;\Longrightarrow\;f(t)=t,\qquad g(t)=e^{-3t}$$

**Adım 2 — İntegrali kur ve $e^{-3t}$'yi dışarı al.**

$$h(t)=\int_{0}^{t}\tau\,e^{-3(t-\tau)}\,d\tau=e^{-3t}\int_{0}^{t}\tau e^{3\tau}\,d\tau$$

**Adım 3 — Kısmi integrasyon.** $u=\tau$, $dv=e^{3\tau}d\tau$, $v=\dfrac{e^{3\tau}}{3}$:

$$\int_{0}^{t}\tau e^{3\tau}\,d\tau=\left[\frac{\tau e^{3\tau}}{3}\right]_{0}^{t}-\frac{1}{3}\int_{0}^{t}e^{3\tau}\,d\tau=\frac{te^{3t}}{3}-\frac{e^{3t}-1}{9}$$

**Adım 4 — $e^{-3t}$ ile çarp.**

$$h(t)=e^{-3t}\left[\frac{te^{3t}}{3}-\frac{e^{3t}}{9}+\frac{1}{9}\right]=\frac{t}{3}-\frac{1}{9}+\frac{e^{-3t}}{9}$$

$$\boxed{\;h(t)=\frac{-1+3t+e^{-3t}}{9}\;}$$

**Çapraz kontrol (kısmi kesirler).** $\dfrac{1}{s^{2}(s+3)}=-\dfrac{1/9}{s}+\dfrac{1/3}{s^{2}}+\dfrac{1/9}{s+3}$ &nbsp;$\to$&nbsp; $-\dfrac{1}{9}+\dfrac{t}{3}+\dfrac{e^{-3t}}{9}$. &#10003;

**Başlangıç kontrolü.** $h(0)=\dfrac{-1+0+1}{9}=0$ &#10003;

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[KUTU]
**Üç soruda da kısmi kesirler daha kısaydı. O zaman konvolüsyon niye?**

Çünkü bu setteki $H(s)$'lerin hepsi ==rasyonel== ve paydaları kolayca çarpanlanıyor. Konvolüsyonun vazgeçilmez olduğu yer başkadır:

- **Payda çarpanlanamıyorsa** ya da tekrarlı indirgenemez kuadratik varsa, örneğin $\dfrac{1}{\left(s^{2}+b^{2}\right)^{2}}$ — kısmi kesirler burada hiçbir şey kazandırmaz, konvolüsyon çözer (4.2'deki çözümlü örnek bu).
- **Çarpanlardan biri bilinmiyorsa.** $Y(s)=G(s)F(s)$ biçiminde bir denklemde $F$ genel bir zorlama ise, cevabı ==$\int_{0}^{t}g(\tau)f(t-\tau)d\tau$ olarak kapalı biçimde== yazabilirsiniz. Kısmi kesirler bunu yapamaz çünkü $F$ somut değildir.

Yani bu set konvolüsyonun **mekaniğini** çalıştırmak için; gücü başka yerde ortaya çıkıyor. Yine de her sonucu kısmi kesirlerle sınamak iyi bir alışkanlık — yukarıda üçünde de yapıldı.
[/KUTU]

---

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu üç sorunun cevabı kitabın anahtarında yok.** Çözümler bize aittir ve her biri ==kısmi kesirlerle bağımsız olarak doğrulanmıştır==.
[/KUTU]

[SORU] **2.** &nbsp; $H(s)=\dfrac{1}{s^{2}+3s-4}$
[CEVAP]
**Adım 1 — Çarpanlara ayır.** $s^{2}+3s-4=(s+4)(s-1)$

$$f(t)=e^{-4t},\qquad g(t)=e^{t}$$

**Adım 2 — İntegrali kur ve $e^{t}$'yi dışarı al.**

$$h(t)=\int_{0}^{t}e^{-4\tau}\,e^{t-\tau}\,d\tau=e^{t}\int_{0}^{t}e^{-5\tau}\,d\tau$$

**Adım 3 — Hesapla.**

$$=e^{t}\left[\frac{-e^{-5\tau}}{5}\right]_{0}^{t}=e^{t}\cdot\frac{1-e^{-5t}}{5}$$

$$\boxed{\;h(t)=\frac{e^{t}-e^{-4t}}{5}\;}$$

**Çapraz kontrol (kısmi kesirler).** $\dfrac{1}{(s+4)(s-1)}=\dfrac{-1/5}{s+4}+\dfrac{1/5}{s-1}$ &nbsp;$\to$&nbsp; $\dfrac{e^{t}-e^{-4t}}{5}$ &#10003;

[KUTU]
**Genel kalıp.** İki farklı üstelin konvolüsyonu her zaman

$$\mathcal{L}^{-1}\left\{\frac{1}{(s-a)(s-b)}\right\}=\frac{e^{at}-e^{bt}}{a-b}\qquad (a\neq b)$$

verir. Burada $a=1$, $b=-4$, $a-b=5$. ==Payda çarpanlandığı anda cevabı yazabilirsiniz.==

$a=b$ olsaydı bu formül tanımsızlaşırdı; o durumda sonuç $t\,e^{at}$ olur — limitini alarak da görülebilir.
[/KUTU]
[/CEVAP]

[SORU] **4.** &nbsp; $H(s)=\dfrac{1}{s\left(s^{2}+4s+13\right)}$
[CEVAP]
**Adım 1 — İkinci çarpanı tamkareye tamamla.**

$$s^{2}+4s+13=(s+2)^{2}+9$$

$$F(s)=\frac{1}{s}\;\to\;f(t)=1,\qquad G(s)=\frac{1}{(s+2)^{2}+9}\;\to\;g(t)=\frac{1}{3}e^{-2t}\sin 3t$$

==Paydaki $3$'ü tamamlamayı unutmayın.==

**Adım 2 — İntegrali kur ve değişken değiştir.** $u=t-\tau$ koyalım:

$$h(t)=\int_{0}^{t}1\cdot\frac{1}{3}e^{-2(t-\tau)}\sin 3(t-\tau)\,d\tau=\frac{1}{3}\int_{0}^{t}e^{-2u}\sin 3u\,du$$

**Adım 3 — Üstel-trigonometrik integral.** Standart sonuç:

$$\int e^{au}\sin bu\,du=\frac{e^{au}\left(a\sin bu-b\cos bu\right)}{a^{2}+b^{2}}$$

$a=-2$, $b=3$, $a^{2}+b^{2}=13$:

$$\int_{0}^{t}e^{-2u}\sin 3u\,du=\left[\frac{e^{-2u}\left(-2\sin 3u-3\cos 3u\right)}{13}\right]_{0}^{t}=\frac{3-e^{-2t}\left(2\sin 3t+3\cos 3t\right)}{13}$$

**Adım 4 — $\tfrac13$ ile çarp.**

$$\boxed{\;h(t)=\frac{1}{39}\Big[3-e^{-2t}\left(3\cos 3t+2\sin 3t\right)\Big]\;}$$

**Çapraz kontrol (kısmi kesirler).**

$$\frac{1}{s\left(s^{2}+4s+13\right)}=\frac{1/13}{s}-\frac{1}{13}\cdot\frac{s+4}{(s+2)^{2}+9}$$

Payı ötelersek $s+4=(s+2)+2$, yani $e^{-2t}\cos 3t+\tfrac{2}{3}e^{-2t}\sin 3t$:

$$h(t)=\frac{1}{13}\left[1-e^{-2t}\cos 3t-\frac{2}{3}e^{-2t}\sin 3t\right]=\frac{1}{39}\Big[3-3e^{-2t}\cos 3t-2e^{-2t}\sin 3t\Big]\;\checkmark$$

**Başlangıç kontrolü.** $h(0)=\dfrac{3-3}{39}=0$ &#10003; — $H(s)$'nin paydası $s$ ile başladığı için beklenen sonuç.
[/CEVAP]

[SORU] **6.** &nbsp; $H(s)=\dfrac{1}{(s+2)\left(s^{2}+1\right)}$
[CEVAP]
**Adım 1 — Çarpanları seç.**

$$f(t)=e^{-2t},\qquad g(t)=\sin t$$

**Adım 2 — Sırayı akıllıca seç.** Konvolüsyon değişmeli olduğu için $f*g=g*f$; ==üstel olanı dışarı çıkarabileceğimiz sırayı seçelim:==

$$h(t)=\int_{0}^{t}\sin\tau\;e^{-2(t-\tau)}\,d\tau=e^{-2t}\int_{0}^{t}e^{2\tau}\sin\tau\,d\tau$$

**Adım 3 — İntegrali al.** $a=2$, $b=1$, $a^{2}+b^{2}=5$:

$$\int_{0}^{t}e^{2\tau}\sin\tau\,d\tau=\left[\frac{e^{2\tau}\left(2\sin\tau-\cos\tau\right)}{5}\right]_{0}^{t}=\frac{e^{2t}\left(2\sin t-\cos t\right)+1}{5}$$

**Adım 4 — $e^{-2t}$ ile çarp.** ==$e^{-2t}\cdot e^{2t}=1$ olduğu için ilk parça sadeleşiyor:==

$$\boxed{\;h(t)=\frac{2\sin t-\cos t+e^{-2t}}{5}\;}$$

**Çapraz kontrol (kısmi kesirler).**

$$\frac{1}{(s+2)\left(s^{2}+1\right)}=\frac{1/5}{s+2}+\frac{-\tfrac{1}{5}s+\tfrac{2}{5}}{s^{2}+1}\;\to\;\frac{1}{5}e^{-2t}-\frac{1}{5}\cos t+\frac{2}{5}\sin t\;\checkmark$$

**Başlangıç kontrolü.** $h(0)=\dfrac{0-1+1}{5}=0$ &#10003;
[/CEVAP]

[KUTU]
**Üç sorunun ortak dersi: sırayı seçmek.** Konvolüsyon değişmelidir ama ==integralin zorluğu sıraya göre değişir==. Kural şu: $t$'ye bağlı kısmı integral dışına çıkarabileceğiniz sırayı seçin.

- **2'de** $e^{t-\tau}=e^{t}e^{-\tau}$ yazıldı, $e^{t}$ dışarı çıktı, geriye tek üstel integral kaldı.
- **6'da** ters sıra seçildi ($\sin$ içeride, üstel dışarıda); böylece $e^{-2t}$ dışarı çıktı ve sonunda $e^{2t}$ ile sadeleşti.
- **4'te** $u=t-\tau$ değişken değişimi aynı işi gördü.

Üçünde de sonuç kısmi kesirlerle doğrulandı. Bu setteki gibi rasyonel $H(s)$'lerde kısmi kesirler genelde daha kısadır; konvolüsyonun asıl gücü paydanın çarpanlanamadığı ya da zorlamanın somut verilmediği durumlardadır.
[/KUTU]

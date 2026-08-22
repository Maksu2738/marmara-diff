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

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**2.** &nbsp; $H(s)=\dfrac{1}{s^{2}+3s-4}$

**4.** &nbsp; $H(s)=\dfrac{1}{s\left(s^{2}+4s+13\right)}$

**6.** &nbsp; $H(s)=\dfrac{1}{(s+2)\left(s^{2}+1\right)}$

[KUTU]
**İpuçları.**

**2** → 1 ile birebir aynı kalıp: $s^{2}+3s-4=(s+4)(s-1)$, iki üstelin konvolüsyonu. Genel sonuç $\dfrac{e^{at}-e^{bt}}{a-b}$ biçimindedir.

**4** → 3 gibi ama ikinci çarpan tamkareye tamamlanmalı: $s^{2}+4s+13=(s+2)^{2}+9$, yani $g(t)=\dfrac{1}{3}e^{-2t}\sin 3t$. İntegral $\int_{0}^{t}e^{-2(t-\tau)}\sin 3(t-\tau)\,d\tau$ olur; üstel-trigonometrik integral iki kez kısmi integrasyon ister.

**6** → $f(t)=e^{-2t}$, $g(t)=\sin t$. Yine üstel çarpı trigonometrik; $\int e^{a\tau}\sin b\tau\,d\tau$ standart integralini kullanın.

**Doğrulama.** Üçünde de kısmi kesirlerle çapraz kontrol yapabilirsiniz. Ayrıca ==$h(0)=0$ olmalıdır==: her üç $H(s)$'de payın derecesi paydanınkinden en az iki eksik, bu da $t=0$'da fonksiyonun sıfır olmasını gerektirir. Hızlı bir ilk kontrol.
[/KUTU]

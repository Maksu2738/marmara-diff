---
id: ters-donusum-oteleme
menu: 4.4 Ötelenmiş Biçimin Ters Dönüşümü
tip: konu
baslik: 4.4 &nbsp;$e^{-as}F(s)$ Biçimindeki İfadelerin Ters Dönüşümü
---

Süreksiz zorlamalı denklemleri çözerken $Y(s)$ ifadesinde kaçınılmaz olarak $e^{-as}$ çarpanları belirir. Bu bölüm o çarpanların nasıl geri çevrileceğini kuruyor.

$(9.75)$'ten doğrudan:

$$\mathcal{L}^{-1}\left\{\frac{e^{-as}}{s}\right\}=u_{a}(t)=\begin{cases}0, & t<a\\ 1, & t>a\end{cases} \tag{9.85}$$

THEoREM 9.9'un ters yönü ise genel kuralı verir. $\mathcal{L}^{-1}\{F(s)\}=f(t)$ ise:

$$\boxed{\;\mathcal{L}^{-1}\left\{e^{-as}F(s)\right\}=u_{a}(t)\,f(t-a)=\begin{cases}0, & 0<t<a\\ f(t-a), & t>a\end{cases}\;} \tag{9.86}$$

[KUTU]
**Üç adımlık uygulama:**

1. $e^{-as}$ çarpanını **ayır**, geriye kalan $F(s)$'nin ters dönüşümü $f(t)$'yi bul.
2. $f$ içindeki her $t$ yerine ==$t-a$ yaz==.
3. Sonucu $u_{a}(t)$ ile çarp.

İkinci adım en sık atlanandır ve atlanınca cevap yanlış olur.
[/KUTU]

---

[SORU] **Örnek 9.34.** &nbsp; $\displaystyle\mathcal{L}^{-1}\left\{\frac{5}{s}-\frac{3e^{-3s}}{s}-\frac{2e^{-7s}}{s}\right\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Terim terim çevir.**

Tablo 9.1, 1 numara:

$$\mathcal{L}^{-1}\left\{\frac{5}{s}\right\}=5$$

$(9.85)$ ile $a=3$ ve $a=7$:

$$\mathcal{L}^{-1}\left\{\frac{e^{-3s}}{s}\right\}=u_{3}(t),\qquad \mathcal{L}^{-1}\left\{\frac{e^{-7s}}{s}\right\}=u_{7}(t)$$

**Adım 2 — Birleştir.**

$$\mathcal{L}^{-1}\left\{\cdots\right\}=5-3u_{3}(t)-2u_{7}(t)$$

**Adım 3 — Parçalı biçimde yaz.**

Her aralıkta hangi basamakların devrede olduğuna bakalım:

$$\boxed{\;=\begin{cases}5, & 0<t<3\\ 5-3=2, & 3<t<7\\ 5-3-2=0, & t>7\end{cases}\;}$$

==Burada $f(t-a)$ ötelemesi gerekmedi==, çünkü çarpanların yanındaki $F(s)$ yalnızca $\frac{1}{s}$ idi ve onun ters dönüşümü sabit $1$; sabitin ötelenmişi yine kendisidir.

[SORU] **Örnek 9.35.** &nbsp; $\displaystyle\mathcal{L}^{-1}\left\{e^{-4s}\left(\frac{2}{s^{2}}+\frac{5}{s}\right)\right\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — $e^{-4s}$'yi ayır, kalanın ters dönüşümünü bul.**

$$F(s)=\frac{2}{s^{2}}+\frac{5}{s}$$

$\mathcal{L}^{-1}\left\{\frac{1}{s^{2}}\right\}=t$ ve $\mathcal{L}^{-1}\left\{\frac{1}{s}\right\}=1$ olduğundan:

$$f(t)=2t+5$$

**Adım 2 — $t$ yerine $t-4$ yaz.**

$$f(t-4)=2(t-4)+5=2t-8+5=2t-3$$

**Adım 3 — $u_{4}(t)$ ile çarp.**

$$\boxed{\;\mathcal{L}^{-1}\left\{e^{-4s}\left(\frac{2}{s^{2}}+\frac{5}{s}\right)\right\}=u_{4}(t)\left[2t-3\right]=\begin{cases}0, & 0<t<4\\ 2t-3, & t>4\end{cases}\;}$$

[KUTU]
**Adım 2'yi atlarsanız ne olur?** Cevap $u_{4}(t)(2t+5)$ çıkardı. Farkı $t=4$ noktasında görün:

- **Doğru cevap:** $2(4)-3=5$ — fonksiyon $5$ değerinden başlar, ki $f(0)=2(0)+5=5$ ile tutarlı.
- **Yanlış cevap:** $2(4)+5=13$ — hiçbir yerden gelmeyen bir sıçrama.

==Kontrol yolu:== $t=a$ koyduğunuzda $f(0)$ değerini almalısınız. Almıyorsanız ötelemeyi atlamışsınızdır.
[/KUTU]

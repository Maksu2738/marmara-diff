---
id: ornek-konvolusyon
menu: 4.2 Örnek — Konvolüsyonun Vazgeçilmez Olduğu Durum
tip: ornek
baslik: 4.2 &nbsp;Çözümlü Örnek — Tablo Girdisinin Konvolüsyonla Türetilmesi
---

Örnek 9.24'te konvolüsyon ile kısmi kesirler aynı sonucu vermişti. Şimdi ==kısmi kesirlerin işe yaramadığı== bir durumu ele alıyoruz.

[SORU] **Örnek 9.25.** &nbsp; Tablo 9.1'in 13 numaralı girdisi şunu söylüyor:
$$\mathcal{L}^{-1}\left\{\frac{1}{\left(s^{2}+b^{2}\right)^{2}}\right\}=\frac{\sin bt-bt\cos bt}{2b^{3}}$$
Bunu konvolüsyon kullanarak doğrulayınız.
[CEVAP]
**Neden kısmi kesir işe yaramaz?** Payda $\left(s^{2}+b^{2}\right)^{2}$, ==tekrarlı ve indirgenemez== bir kuadratiktir. Kısmi kesir açılımı

$$\frac{1}{\left(s^{2}+b^{2}\right)^{2}}=\frac{B_{1}s+C_{1}}{s^{2}+b^{2}}+\frac{B_{2}s+C_{2}}{\left(s^{2}+b^{2}\right)^{2}}$$

biçiminde olurdu; çözünce $B_{1}=C_{1}=B_{2}=0$, $C_{2}=1$ çıkar — yani ==başladığımız yere döneriz.== İfade zaten en sade hâlindedir.

**Adım 1 — Çarpanlara ayır.**

$$\frac{1}{\left(s^{2}+b^{2}\right)^{2}}=F(s)\,G(s),\qquad F(s)=G(s)=\frac{1}{s^{2}+b^{2}}$$

Tablo 9.1'in 3 numaralı girdisinden ($\frac{b}{s^{2}+b^{2}}\leftrightarrow\sin bt$), payda $b$ olmadığı için $\frac{1}{b}$ çarpanı düşer:

$$f(t)=g(t)=\mathcal{L}^{-1}\left\{\frac{1}{s^{2}+b^{2}}\right\}=\frac{\sin bt}{b}$$

**Adım 2 — Konvolüsyon integralini kur.**

$(9.40)$ ile:

$$\mathcal{L}^{-1}\left\{\frac{1}{\left(s^{2}+b^{2}\right)^{2}}\right\}=\int_{0}^{t}\frac{\sin b\tau}{b}\cdot\frac{\sin b(t-\tau)}{b}\,d\tau=\frac{1}{b^{2}}\int_{0}^{t}\sin b\tau\,\sin b(t-\tau)\,d\tau \tag{9.42}$$

**Adım 3 — Çarpımı toplama çevir.**

İkinci sinüsü açıp çarpmak yerine trigonometrik özdeşlik kullanmak çok daha kolaydır. Şu iki formülü ele alalım:

$$\cos(A+B)=\cos A\cos B-\sin A\sin B$$
$$\cos(A-B)=\cos A\cos B+\sin A\sin B$$

Birinciyi ikinciden çıkarırsak:

$$\sin A\sin B=\frac{\cos(A-B)-\cos(A+B)}{2}$$

$A=b\tau$ ve $B=b(t-\tau)$ alalım. O zaman

$$A-B=b\tau-bt+b\tau=b(2\tau-t),\qquad A+B=b\tau+bt-b\tau=bt$$

$$\sin b\tau\,\sin b(t-\tau)=\frac{1}{2}\Big[\cos b(2\tau-t)-\cos bt\Big]$$

[KUTU]
**Bu adımın kritikliği.** $A+B$ toplamında $\tau$ ==tamamen düşüyor==; geriye yalnızca $\cos bt$ kalıyor, bu da integral açısından sabittir. İntegre edilecek tek $\tau$'lu terim $\cos b(2\tau-t)$ olur. Çarpımı doğrudan açsaydınız $\sin\tau\cos\tau$ türü terimlerle uğraşacaktınız.
[/KUTU]

**Adım 4 — İntegre et.**

$$=\frac{1}{2b^{2}}\int_{0}^{t}\Big[\cos b(2\tau-t)-\cos bt\Big]d\tau$$

Birinci terimin ilkeli $\dfrac{\sin b(2\tau-t)}{2b}$ (içteki $2\tau$ yüzünden $2b$ bölen), ikincisininki $-(\cos bt)\,\tau$:

$$=\frac{1}{2b^{2}}\left[\frac{\sin b(2\tau-t)}{2b}-(\cos bt)\,\tau\right]_{0}^{t}$$

**Üst sınır** $\tau=t$: $\;\dfrac{\sin bt}{2b}-t\cos bt$

**Alt sınır** $\tau=0$: $\;\dfrac{\sin(-bt)}{2b}-0=-\dfrac{\sin bt}{2b}$

Farkı alalım — ==$\sin$ tek fonksiyon olduğu için iki terim toplanıyor:==

$$=\frac{1}{2b^{2}}\left[\frac{\sin bt}{2b}-t\cos bt+\frac{\sin bt}{2b}\right]=\frac{1}{2b^{2}}\left[\frac{\sin bt}{b}-t\cos bt\right]$$

**Adım 5 — Sadeleştir.**

Köşeli parantezi $\dfrac{1}{b}$ ortak paydasında yazalım:

$$=\frac{1}{2b^{2}}\cdot\frac{\sin bt-bt\cos bt}{b}$$

$$\boxed{\;\mathcal{L}^{-1}\left\{\frac{1}{\left(s^{2}+b^{2}\right)^{2}}\right\}=\frac{\sin bt-bt\cos bt}{2b^{3}}\;}$$

Tablo 9.1'in 13 numaralı girdisi doğrulanmış oldu.

[KUTU]
**Tablodaki "tuhaf" girdilerin kaynağı budur.** 13 ve 14 numaralı girdiler ilk bakışta akılda kalması zor ifadelerdir. Ama ikisi de $\frac{1}{s^{2}+b^{2}}$'nin kendisiyle konvolüsyonundan gelir; ==$t\cos bt$ teriminin ortaya çıkması, integralde $\tau$'nun doğrusal olarak birikmesinin sonucudur.== Sınavda tablo verilmezse bu türetme ile üretebilirsiniz.
[/KUTU]

---
id: ornek-yay-elastik
tip: ornek
baslik: Elastik Hareket &mdash; Yay Üzerindeki Kütle
---

<p style="margin-bottom: 1rem;">Bu örnek derste işlendi. Yay problemine burada ==birinci mertebeden== bir yaklaşım uygulanır: zaman değil, konum bağımsız değişken alınır ve denklem ayrılabilir hâle gelir. Sonuçta enerjinin korunumu ifadesi elde edilir.</p>

[SORU] Bir yayın ucuna bağlı $m$ kütleli bir cisme, denge konumundan olan $x$ uzaklığıyla orantılı bir geri çağırıcı kuvvet etki etmektedir: $F=-kx$ (Hooke yasası, $k>0$). Cisim $x=d$ noktasından durgun hâlde bırakılıyor. Hızın konuma bağlı ifadesini bulunuz.
[CEVAP]
**Adım 1 — Newton'un ikinci yasasını konuma göre yaz.**

$$F=ma=m\frac{dv}{dt}$$

Burada $v$ zamanın fonksiyonudur, ama biz hızı ==konumun== fonksiyonu olarak istiyoruz. Zincir kuralıyla türevi dönüştürelim:

$$\frac{dv}{dt}=\frac{dv}{dx}\cdot\frac{dx}{dt}=v\,\frac{dv}{dx}$$

Bu, birinci mertebeden uygulamalarda sürekli kullanılan anahtar adımdır: $t$ değişkeni denklemden düşer.

$$v\,\frac{dv}{dx}=\frac{F}{m}\;\Longrightarrow\;v\,dv-\frac{F}{m}\,dx=0$$

**Adım 2 — Kuvveti yerine koy.**

$F=-kx$ olduğundan:

$$v\,dv-\frac{(-kx)}{m}\,dx=0\;\Longrightarrow\;v\,dv+\frac{k}{m}\,x\,dx=0$$

Bu ==ayrılabilir== bir denklemdir; $v$ terimleri solda, $x$ terimleri sağda zaten ayrışmış durumda.

**Adım 3 — İntegre et.**

$$\int v\,dv+\frac{k}{m}\int x\,dx=0$$

$$\frac{v^{2}}{2}+\frac{k}{m}\cdot\frac{x^{2}}{2}+c=0$$

Her iki tarafı $m$ ile çarpalım:

$$\boxed{\;\frac{1}{2}mv^{2}+\frac{1}{2}kx^{2}=C\;}$$

Bu tanıdık bir ifadedir: soldaki ilk terim ==kinetik enerji==, ikinci terim yaydaki ==potansiyel enerji==. Yani diferansiyel denklemi çözerek enerjinin korunumu yasasını türetmiş olduk.

**Adım 4 — Başlangıç koşulunu uygula.**

Cisim $x=d$ noktasında durgun bırakıldığı için $v(d)=0$:

$$\frac{1}{2}m\cdot 0^{2}+\frac{1}{2}kd^{2}=C\;\Longrightarrow\;C=\frac{1}{2}kd^{2}$$

Böylece:

$$\frac{1}{2}mv^{2}+\frac{1}{2}kx^{2}=\frac{1}{2}kd^{2}$$

**Adım 5 — Hızı yalnız bırak.**

$$mv^{2}=k\left(d^{2}-x^{2}\right)\;\Longrightarrow\;\boxed{\;v=\pm\sqrt{\frac{k}{m}}\,\sqrt{d^{2}-x^{2}}\;}$$

[KUTU]
**Yorum:** Hız $x=0$'da (denge konumu) en büyük değerini alır: $v_{\max}=d\sqrt{k/m}$. Uç noktalarda $x=\pm d$ için $v=0$ olur; cisim orada anlık olarak durur ve yön değiştirir. $\pm$ işareti hareketin iki yönünü temsil eder.

Dikkat: bu yöntem hızı ==konuma== bağlı verir. Konumun ==zamana== bağlı ifadesi $x(t)=d\cos\!\left(\sqrt{k/m}\,t\right)$ için ikinci mertebeden denklem çözmek gerekir ki bu ders kapsamı dışındadır.
[/KUTU]

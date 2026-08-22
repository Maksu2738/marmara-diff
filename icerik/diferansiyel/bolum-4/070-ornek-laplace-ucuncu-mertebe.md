---
id: ornek-laplace-ucuncu-mertebe
menu: 4.3 Örnek — Üçüncü Mertebeden
tip: ornek
baslik: 4.3 &nbsp;Çözümlü Örnek — Üçüncü Mertebeden ve Karışık Çarpanlı
---

Bu örnek yöntemin **ölçeklenebilirliğini** gösteriyor: mertebe yükseldiğinde 1. ve 2. adımlar aynı kalır, yalnızca 3. adım ağırlaşır.

[SORU] **Örnek 9.29.** &nbsp; Aşağıdaki başlangıç değer problemini çözünüz:
$$y'''+4y''+5y'+2y=10\cos t,\qquad y(0)=0,\quad y'(0)=0,\quad y''(0)=3$$
[CEVAP]
**Adım 1 — Dönüşümü al.**

$$\mathcal{L}\{y'''\}+4\mathcal{L}\{y''\}+5\mathcal{L}\{y'\}+2\mathcal{L}\{y\}=10\,\mathcal{L}\{\cos t\}$$

THEoREM 9.4'ü $n=3,2,1$ için uygulayalım:

$$\mathcal{L}\{y'''\}=s^{3}Y(s)-s^{2}y(0)-s\,y'(0)-y''(0)$$
$$\mathcal{L}\{y''\}=s^{2}Y(s)-s\,y(0)-y'(0)$$
$$\mathcal{L}\{y'\}=s\,Y(s)-y(0)$$

$y(0)=0$ ve $y'(0)=0$ olduğundan çoğu terim düşer; yalnızca $y''(0)=3$ kalır:

$$\mathcal{L}\{y'''\}=s^{3}Y(s)-3,\qquad \mathcal{L}\{y''\}=s^{2}Y(s),\qquad \mathcal{L}\{y'\}=s\,Y(s)$$

Sağ taraf Tablo 9.1, 4 numara ($b=1$): $\;10\cdot\dfrac{s}{s^{2}+1}$

$$s^{3}Y(s)-3+4s^{2}Y(s)+5sY(s)+2Y(s)=\frac{10s}{s^{2}+1}$$

**Adım 2 — $Y(s)$'yi çöz.**

$$\left(s^{3}+4s^{2}+5s+2\right)Y(s)=3+\frac{10s}{s^{2}+1}=\frac{3\left(s^{2}+1\right)+10s}{s^{2}+1}=\frac{3s^{2}+10s+3}{s^{2}+1}$$

$$Y(s)=\frac{3s^{2}+10s+3}{\left(s^{2}+1\right)\left(s^{3}+4s^{2}+5s+2\right)}$$

**Adım 3 — Paydayı çarpanlarına ayır.**

$s^{3}+4s^{2}+5s+2$ için kök deneyelim: $s=-1$ koyarsak $-1+4-5+2=0$, yani $s+1$ bir çarpandır. Bölme yaparsak $s^{2}+3s+2=(s+1)(s+2)$ çıkar:

$$s^{3}+4s^{2}+5s+2=(s+1)^{2}(s+2)$$

**Kontrol.** $(s+1)^{2}(s+2)=\left(s^{2}+2s+1\right)(s+2)=s^{3}+4s^{2}+5s+2\;\checkmark$

**Adım 4 — Kısmi kesir kurulumu.**

Paydada ==üç farklı türde çarpan== var: tekrarlı doğrusal $(s+1)^{2}$, tekrarsız doğrusal $(s+2)$ ve indirgenemez kuadratik $(s^{2}+1)$. Her biri kendi kuralına göre yazılır:

$$\frac{3s^{2}+10s+3}{\left(s^{2}+1\right)(s+1)^{2}(s+2)}=\frac{A}{s+2}+\frac{B}{s+1}+\frac{C}{(s+1)^{2}}+\frac{Ds+E}{s^{2}+1}$$

Ortak paydayla çarpalım:

$$3s^{2}+10s+3=A(s+1)^{2}\left(s^{2}+1\right)+B(s+2)(s+1)\left(s^{2}+1\right)+C(s+2)\left(s^{2}+1\right)+(Ds+E)(s+2)(s+1)^{2}$$

**Adım 5 — Katsayıları bul.**

Önce kök koyalım — ==iki bilinmeyen bedavaya gelir:==

$s=-1$: $\;3-10+3=-4=C(1)(2)=2C\;\Longrightarrow\;C=-2$

$s=-2$: $\;12-20+3=-5=A(1)(5)=5A\;\Longrightarrow\;A=-1$

Kalan $B$, $D$, $E$ için katsayı eşlemeye geçelim. $s$ kuvvetlerine göre düzenlersek beş denklem çıkar; ihtiyacımız olan üçünü seçelim:

$$s^{4}:\quad A+B+D=0\;\Longrightarrow\;B+D=1$$
$$s^{0}:\quad A+2B+2C+2E=3\;\Longrightarrow\;-1+2B-4+2E=3\;\Longrightarrow\;B+E=4$$
$$s^{3}:\quad 2A+3B+C+4D+E=0\;\Longrightarrow\;3B+4D+E=4$$

İlk ikisinden $D=1-B$ ve $E=4-B$. Üçüncüye koyalım:

$$3B+4(1-B)+(4-B)=4\;\Longrightarrow\;-2B+8=4\;\Longrightarrow\;B=2$$

$$D=-1,\qquad E=2$$

**Kontrol — kullanmadığımız iki denklem:**

$$s^{2}:\;2A+3B+2C+5D+4E=-2+6-4-5+8=3\;\checkmark$$
$$s^{1}:\;2A+3B+C+2D+5E=-2+6-2-2+10=10\;\checkmark$$

**Adım 6 — Ters dönüşüm.**

$$Y(s)=\frac{-1}{s+2}+\frac{2}{s+1}+\frac{-2}{(s+1)^{2}}+\frac{-s+2}{s^{2}+1}$$

Son kesri ikiye bölelim:

$$\frac{-s+2}{s^{2}+1}=-\frac{s}{s^{2}+1}+2\cdot\frac{1}{s^{2}+1}$$

Tablo 9.1 girdileri — sırasıyla 2, 2, 8 ($n=1$, $a=-1$), 4 ve 3:

$$\boxed{\;y=-e^{-2t}+2e^{-t}-2te^{-t}-\cos t+2\sin t\;}$$

**Doğrulama — üç başlangıç koşulu.**

$$y(0)=-1+2-0-1+0=0\;\checkmark$$

$$y'=2e^{-2t}-4e^{-t}+2te^{-t}+\sin t+2\cos t$$

($-2te^{-t}$ teriminin türevi çarpım kuralıyla $-2e^{-t}+2te^{-t}$ verir.)

$$y'(0)=2-4+0+0+2=0\;\checkmark$$

$$y''=-4e^{-2t}+6e^{-t}-2te^{-t}+\cos t-2\sin t$$

$$y''(0)=-4+6-0+1-0=3\;\checkmark$$

[KUTU]
**Mertebe yükseldiğinde ne değişir?**

- **Adım 1-2 aynı kalır**, sadece daha çok başlangıç değeri girer. Burada $y(0)$ ve $y'(0)$ sıfır olduğu için ifade beklenenden sade çıktı; sıfır olmasalardı payda beşinci dereceden bir polinom belirecekti.
- **Adım 3 ağırlaşır.** Payda üçüncü dereceden çıktı, çarpanlarına ayırmak için kök aramak gerekti. Bu, ==klasik yöntemdeki karakteristik denklemi çözmenin karşılığıdır== — iş kaybolmaz, yer değiştirir.
- **Kısmi kesirde bilinmeyen sayısı arttı** (5 tane). Kök koyma yöntemi ikisini bedavaya verdi, kalan üçü için denklem sistemi kuruldu.

**Zaman kazandıran alışkanlık:** Önce kök koyun, sonra katsayı eşleyin. Doğrudan beş denklemli sisteme girmek gereksiz zahmettir.
[/KUTU]

**Çözümün okunması.** $(s+1)^{2}$ tekrarlı çarpanı $te^{-t}$ terimini doğurdu; $s^{2}+1$ kuadratiği $\cos t$ ve $\sin t$ verdi. ==Paydanın çarpanlarına bakarak çözümün biçimi daha ters dönüşüm yapılmadan tahmin edilebilir.==

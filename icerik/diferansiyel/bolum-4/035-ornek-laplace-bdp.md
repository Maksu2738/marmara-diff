---
id: ornek-laplace-bdp
menu: 4.1 Örnek — İlk Başlangıç Değer Problemi
tip: ornek
baslik: 4.1 &nbsp;Çözümlü Örnek — Laplace ile İlk Başlangıç Değer Problemi
---

Buraya kadar dönüşümün tanımını, varlığını ve türev kuralını kurduk. Şimdi ==bütün bunların ne işe yaradığını== bir örnekle görelim. Yöntemin tam ve sistematik anlatımı 4.3'te yapılacak; buradaki amaç fikri göstermektir.

[SORU*] **Örnek 9.13.** &nbsp; Aşağıdaki başlangıç değer problemini Laplace dönüşümüyle çözünüz:
$$y'-3y=4e^{5t},\qquad y(0)=6$$
[CEVAP]
**Adım 1 — Denklemin her iki tarafının dönüşümünü al.**

$$\mathcal{L}\{y'(t)-3y(t)\}=\mathcal{L}\{4e^{5t}\}$$

Sol tarafa THEoREM 9.2'yi (lineerlik) uygulayalım:

$$\mathcal{L}\{y'(t)\}-3\mathcal{L}\{y(t)\}=4\mathcal{L}\{e^{5t}\} \tag{9.14}$$

**Adım 2 — Türev kuralını ve başlangıç koşulunu uygula.**

THEoREM 9.3 gereği $\mathcal{L}\{y'(t)\}=s\mathcal{L}\{y(t)\}-y(0)$. ==Başlangıç koşulu $y(0)=6$ tam burada devreye giriyor:==

$$\mathcal{L}\{y'(t)\}=s\,\mathcal{L}\{y(t)\}-6$$

**Adım 3 — Sağ tarafı tablodan oku.**

Örnek 9.3'ten $\mathcal{L}\{e^{5t}\}=\dfrac{1}{s-5}$, dolayısıyla sağ taraf $\dfrac{4}{s-5}$ olur.

**Adım 4 — Cebirsel denklemi kur.**

$$s\,\mathcal{L}\{y(t)\}-6-3\mathcal{L}\{y(t)\}=\frac{4}{s-5}$$

$$(s-3)\mathcal{L}\{y(t)\}-6=\frac{4}{s-5}$$

[KUTU]
**Dönüşüm tamamlandı.** Başlangıç değer problemi, bilinmeyeni $\mathcal{L}\{y(t)\}$ olan ==sıradan bir cebirsel denkleme== indi. Türev yok, integral yok, başlangıç koşulu da zaten içeride.
[/KUTU]

**Adım 5 — Cebirsel denklemi çöz.**

$$\mathcal{L}\{y(t)\}=\frac{1}{s-3}\left[6+\frac{4}{s-5}\right]=\frac{6}{s-3}+\frac{4}{(s-3)(s-5)}$$

İkinci terimi **kısmi kesirlere** ayıralım:

$$\frac{4}{(s-3)(s-5)}=\frac{A}{s-3}+\frac{B}{s-5}\;\Longrightarrow\;4=A(s-5)+B(s-3)$$

$s=5$ koyarsak $4=2B$, yani $B=2$. $s=3$ koyarsak $4=-2A$, yani $A=-2$.

$$\mathcal{L}\{y(t)\}=\frac{6}{s-3}-\frac{2}{s-3}+\frac{2}{s-5}$$

$$\mathcal{L}\{y(t)\}=\frac{4}{s-3}+\frac{2}{s-5} \tag{9.16}$$

**Adım 6 — Ters dönüşüm: "bunun dönüşümü olan fonksiyon hangisi?"**

Şimdi işlemin ==tersini== yapmalıyız. Dönüşümü $\dfrac{4}{s-3}$ olan ve dönüşümü $\dfrac{2}{s-5}$ olan fonksiyonları arıyoruz.

Örnek 9.3'ten $\mathcal{L}\{e^{at}\}=\dfrac{1}{s-a}$ olduğunu biliyoruz; lineerlikle:

$$\mathcal{L}\{4e^{3t}\}=\frac{4}{s-3},\qquad \mathcal{L}\{2e^{5t}\}=\frac{2}{s-5}$$

Böylece $(9.16)$ şu hâle gelir:

$$\mathcal{L}\{y(t)\}=\mathcal{L}\{4e^{3t}\}+\mathcal{L}\{2e^{5t}\}=\mathcal{L}\{4e^{3t}+2e^{5t}\}$$

$$\boxed{\;y=4e^{3t}+2e^{5t}\;}$$

**Doğrulama.** $y(0)=4+2=6\;\checkmark$

$$y'=12e^{3t}+10e^{5t}$$

$$y'-3y=12e^{3t}+10e^{5t}-12e^{3t}-6e^{5t}=4e^{5t}\;\checkmark$$

---

[KUTU]
**Bu problem başka yollarla da çözülebilirdi.** Birinci mertebeden lineer denklem olduğu için integral çarpanı yöntemi ya da belirsiz katsayılar da işe yarardı. Laplace ile çözmemizin sebebi ==yöntemi göstermekti.==

**Asıl zorluk nerede?** $\mathcal{L}\{y(t)\}$ bulunup sadeleştirildikten **sonra** başlıyor: elimizdeki $s$ fonksiyonundan $y(t)$'yi geri çıkarmak. Bu örnekte kolaydı çünkü kısmi kesirler doğrudan tablodaki biçimlere düştü. Genel durumda bu adım — **ters dönüşüm** — çok daha uğraştırıcıdır ve 4.2'nin konusudur.
[/KUTU]

### Yöntemin üç adımlık iskeleti

1. **Dönüştür.** Denklemin her iki tarafının Laplace dönüşümünü al; türev kuralı sayesinde başlangıç koşulları kendiliğinden girer.
2. **Çöz.** Ortaya çıkan cebirsel denklemi $\mathcal{L}\{y\}$ için çöz, kısmi kesirlerle sadeleştir.
3. **Geri dön.** Ters dönüşümle $y(t)$'yi bul.

==Zorluk üçüncü adımdadır==; ilk ikisi mekaniktir.

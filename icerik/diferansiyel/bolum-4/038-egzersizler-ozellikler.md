---
id: egzersizler-laplace-ozellikler
menu: 4.1 Egzersizler — Temel Özellikler
tip: sorular
baslik: 4.1 &nbsp;Egzersizler — Temel Özellikler ve Türev THEoREM'leri
---

Bu set 4.1'de kurulan bütün araçları tek tek yokluyor. Her soru hangi THEoREM'i kullanacağınızı söylüyor:

<div class="tablo-sar">
<table>
<tr><th>THEoREM</th><th>Ne yapar</th><th>Sorular</th></tr>
<tr><td>9.2</td><td>Doğrusallık — çarpımı özdeşlikle toplama çevir</td><td>1, 3</td></tr>
<tr><td>9.3 / 9.4</td><td>Türevin dönüşümü — $\mathcal{L}\{f'\}=s\mathcal{L}\{f\}-f(0)$ ve yüksek mertebeleri</td><td>3, 5, 7, 9, 11</td></tr>
<tr><td>9.5</td><td>Birinci öteleme — $e^{at}$ ile çarp, $s\to s-a$ ötele</td><td>13</td></tr>
<tr><td>9.6</td><td>$t^{n}$ ile çarp, $n$ kez türet</td><td>15, 17</td></tr>
</table>
</div>

---

[SORU] **1.** &nbsp; THEoREM 9.2'yi kullanarak $\mathcal{L}\{\cos^{2}at\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Özdeşlikle doğrusal birleşime çevir.**

$$\cos^{2}at=\frac{1+\cos 2at}{2}$$

**Adım 2 — Doğrusallık ve tablo.**

$$\mathcal{L}\{\cos^{2}at\}=\frac{1}{2}\cdot\frac{1}{s}+\frac{1}{2}\cdot\frac{s}{s^{2}+4a^{2}}$$

**Adım 3 — Tek kesirde topla.**

$$=\frac{\left(s^{2}+4a^{2}\right)+s^{2}}{2s\left(s^{2}+4a^{2}\right)}=\frac{2s^{2}+4a^{2}}{2s\left(s^{2}+4a^{2}\right)}$$

$$\boxed{\;\mathcal{L}\{\cos^{2}at\}=\frac{s^{2}+2a^{2}}{s\left(s^{2}+4a^{2}\right)}\;}$$

**Çapraz kontrol.** Örnek 9.11'de $\mathcal{L}\{\sin^{2}at\}=\dfrac{2a^{2}}{s\left(s^{2}+4a^{2}\right)}$ bulmuştuk. İkisini toplayalım:

$$\frac{s^{2}+2a^{2}+2a^{2}}{s\left(s^{2}+4a^{2}\right)}=\frac{s^{2}+4a^{2}}{s\left(s^{2}+4a^{2}\right)}=\frac{1}{s}=\mathcal{L}\{1\}$$

$\sin^{2}+\cos^{2}=1$ olduğu için tam da beklenen sonuç. &#10003;

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **3.** &nbsp; THEoREM 9.2 ile $\mathcal{L}\{\sin^{3}at\}$ değerini bulunuz, sonra THEoREM 9.3'ü kullanarak $\mathcal{L}\{\sin^{2}at\cos at\}$ değerini elde ediniz.
[CEVAP]
**Adım 1 — Üçüncü kuvvet özdeşliği.**

$$\sin^{3}\theta=\frac{3\sin\theta-\sin 3\theta}{4}$$

$$\mathcal{L}\{\sin^{3}at\}=\frac{3}{4}\cdot\frac{a}{s^{2}+a^{2}}-\frac{1}{4}\cdot\frac{3a}{s^{2}+9a^{2}}$$

==İkinci terimde açısal frekans $3a$ olduğu için payda $s^{2}+9a^{2}$, pay da $3a$.==

**Adım 2 — Topla.**

$$=\frac{3a}{4}\left[\frac{1}{s^{2}+a^{2}}-\frac{1}{s^{2}+9a^{2}}\right]=\frac{3a}{4}\cdot\frac{\left(s^{2}+9a^{2}\right)-\left(s^{2}+a^{2}\right)}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}$$

Pay $8a^{2}$; $\dfrac{3a}{4}\cdot 8a^{2}=6a^{3}$:

$$\boxed{\;\mathcal{L}\{\sin^{3}at\}=\frac{6a^{3}}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}\;}$$

**Adım 3 — İkinci kısım: türev THEoREM'i.** Zincir kuralıyla

$$\frac{d}{dt}\sin^{3}at=3\sin^{2}at\cdot a\cos at=3a\,\sin^{2}at\cos at$$

Yani aradığımız fonksiyon, dönüşümünü az önce bulduğumuz fonksiyonun türevidir. $f=\sin^{3}at$ için $f(0)=0$:

$$\mathcal{L}\{3a\,\sin^{2}at\cos at\}=s\,\mathcal{L}\{\sin^{3}at\}-0=\frac{6a^{3}s}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}$$

$3a$'ya bölelim:

$$\boxed{\;\mathcal{L}\{\sin^{2}at\cos at\}=\frac{2a^{2}s}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}\;}$$

[KUTU]
**Bu tam olarak Ders Notu Örneği B'nin kalıbı.** Orada $2a\sin at\cos at$'yi $\sin^{2}at$'nin türevi olarak tanımıştık; burada bir derece yukarı çıkıp $3a\sin^{2}at\cos at$'yi $\sin^{3}at$'nin türevi olarak tanıyoruz.

==Genel kural:== $\sin^{n}$ ya da $\cos^{n}$ içeren bir çarpım görürsen, onun bir kuvvetin türevi olup olmadığına bak. Öyleyse doğrudan dönüştürmeye çalışma; kuvvetin dönüşümünü bul, $s$ ile çarp.
[/KUTU]

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **5.** &nbsp; $\mathcal{L}\{t^{2}\}=\dfrac{2}{s^{3}}$ olduğuna göre, THEoREM 9.3'ü kullanarak $\mathcal{L}\{t^{3}\}$ değerini bulunuz.
[CEVAP]
$f(t)=t^{3}$ alalım: $f'(t)=3t^{2}$ ve $f(0)=0$.

$$\mathcal{L}\{f'\}=s\,\mathcal{L}\{f\}-f(0)\;\Longrightarrow\;\mathcal{L}\{3t^{2}\}=s\,\mathcal{L}\{t^{3}\}$$

$$3\cdot\frac{2}{s^{3}}=s\,\mathcal{L}\{t^{3}\}\;\Longrightarrow\;\boxed{\;\mathcal{L}\{t^{3}\}=\frac{6}{s^{4}}\;}$$

==Hiç integral alınmadı.== Aynı basamağı bir kez daha çıkarsanız $\mathcal{L}\{t^{4}\}=\dfrac{24}{s^{5}}$ gelir; böylece $\mathcal{L}\{t^{n}\}=\dfrac{n!}{s^{n+1}}$ formülü tümevarımla üretilebilir.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **7.** &nbsp; $(9.11)$ ve $(9.18)$'i kullanarak $\mathcal{L}\{f(t)\}$'yi bulunuz: $f''+3f'+2f=0$, &nbsp;$f(0)=1$, &nbsp;$f'(0)=2$.
[CEVAP]
$F=\mathcal{L}\{f\}$ olsun.

$$\mathcal{L}\{f''\}=s^{2}F-s-2,\qquad \mathcal{L}\{f'\}=sF-1$$

$$\left(s^{2}F-s-2\right)+3\left(sF-1\right)+2F=0$$

$F$ çarpanları $s^{2}+3s+2$; sabitler $-s-2-3=-s-5$:

$$\left(s^{2}+3s+2\right)F=s+5$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{s+5}{s^{2}+3s+2}\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **9.** &nbsp; $(9.17)$ ve $(9.11)$'i kullanarak $\mathcal{L}\{f(t)\}$'yi bulunuz: $f'''=f'$, &nbsp;$f''(0)=2$, &nbsp;$f'(0)=1$, &nbsp;$f(0)=0$.
[CEVAP]
**Üçüncü türev için $(9.17)$'yi $n=3$ ile yazalım:**

$$\mathcal{L}\{f'''\}=s^{3}F-s^{2}f(0)-s\,f'(0)-f''(0)=s^{3}F-s-2$$

==$f(0)=0$ olduğu için $s^{2}$'li terim düştü.==

**Birinci türev:**

$$\mathcal{L}\{f'\}=sF-f(0)=sF$$

**Denklemi kur:**

$$s^{3}F-s-2=sF\;\Longrightarrow\;\left(s^{3}-s\right)F=s+2$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{s+2}{s^{3}-s}\;}$$

Payda $s^{3}-s=s(s-1)(s+1)$ diye çarpanlanır; ters dönüşüm alınırsa $f$'nin $1$, $e^{t}$ ve $e^{-t}$ karışımı olduğu görülür — nitekim $f'''=f'$ denkleminin karakteristik kökleri $0,\,1,\,-1$'dir.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **11.** &nbsp; $(9.11)$, $(9.18)$ ve Örnek 9.3'ü kullanarak $\mathcal{L}\{f(t)\}$'yi bulunuz: $2f''+3f'+4f=e^{5t}$, &nbsp;$f(0)=-3$, &nbsp;$f'(0)=2$.
[CEVAP]
**Adım 1 — Türevlerin dönüşümleri.** $f(0)=-3$, ==işaretlere dikkat==:

$$\mathcal{L}\{f''\}=s^{2}F-s(-3)-2=s^{2}F+3s-2,\qquad \mathcal{L}\{f'\}=sF+3$$

**Adım 2 — Denklemin dönüşümü.** Sağ taraf Örnek 9.3'ten: $\mathcal{L}\{e^{5t}\}=\dfrac{1}{s-5}$.

$$2\left(s^{2}F+3s-2\right)+3\left(sF+3\right)+4F=\frac{1}{s-5}$$

$$2s^{2}F+6s-4+3sF+9+4F=\frac{1}{s-5}$$

**Adım 3 — Topla.** $F$ çarpanları $2s^{2}+3s+4$; sabitler $6s+5$ sağa geçer:

$$\left(2s^{2}+3s+4\right)F=\frac{1}{s-5}-6s-5=\frac{1+(-6s-5)(s-5)}{s-5}$$

$(-6s-5)(s-5)=-6s^{2}+25s+25$, buna $1$ eklenir:

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{-6s^{2}+25s+26}{(s-5)\left(2s^{2}+3s+4\right)}\;}$$

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **13.** &nbsp; THEoREM 9.5'i kullanarak $\mathcal{L}\{e^{at}t^{2}\}$ değerini bulunuz.
[CEVAP]
Birinci öteleme THEoREM'i: $e^{at}$ ile çarpmak, dönüşümde $s\to s-a$ ötelemesi demektir.

$$\mathcal{L}\{t^{2}\}=\frac{2}{s^{3}}\;\Longrightarrow\;\boxed{\;\mathcal{L}\{e^{at}t^{2}\}=\frac{2}{(s-a)^{3}}\;}$$

==Tek satır.== Tanımdan integral almak (kısmi integrasyon, iki kez) çok daha uzun olurdu.

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **15.** &nbsp; THEoREM 9.6'yı kullanarak $\mathcal{L}\{t^{2}\cos bt\}$ değerini bulunuz.
[CEVAP]
$\mathcal{L}\{t^{n}f(t)\}=(-1)^{n}F^{(n)}(s)$; burada $n=2$, yani $(-1)^{2}F''=F''$ gerekiyor. $F(s)=\dfrac{s}{s^{2}+b^{2}}$, kısaltma $u=s^{2}+b^{2}$.

**Birinci türev:**

$$F'=\frac{u-s(2s)}{u^{2}}=\frac{b^{2}-s^{2}}{u^{2}}$$

**İkinci türev:**

$$F''=\frac{(-2s)u^{2}-\left(b^{2}-s^{2}\right)(2u)(2s)}{u^{4}}=\frac{-2su-4s\left(b^{2}-s^{2}\right)}{u^{3}}$$

Payı açalım: $-2s\left(s^{2}+b^{2}\right)-4sb^{2}+4s^{3}=-2s^{3}-2sb^{2}-4sb^{2}+4s^{3}=2s^{3}-6sb^{2}$

$$\boxed{\;\mathcal{L}\{t^{2}\cos bt\}=\frac{2s\left(s^{2}-3b^{2}\right)}{\left(s^{2}+b^{2}\right)^{3}}\;}$$

**İşaret kontrolü.** $n$ çift olduğu için $(-1)^{n}=+1$; sonuç $F''$'nin kendisidir. $n$ tek olsaydı başa eksi gelirdi (17. soruda öyle).

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

[SORU] **17.** &nbsp; THEoREM 9.6'yı kullanarak $\mathcal{L}\{t^{3}e^{at}\}$ değerini bulunuz.
[CEVAP]
$n=3$, yani $(-1)^{3}F'''=-F'''$. Başlangıç: $F(s)=\dfrac{1}{s-a}$.

$$F'=-\frac{1}{(s-a)^{2}},\qquad F''=\frac{2}{(s-a)^{3}},\qquad F'''=-\frac{6}{(s-a)^{4}}$$

$$\mathcal{L}\{t^{3}e^{at}\}=-F'''=\boxed{\;\frac{6}{(s-a)^{4}}\;}$$

[KUTU]
**Aynı sonuca iki yoldan.** 13. soruda birinci öteleme THEoREM'ini kullanmıştık. Bu soruyu da onunla çözebilirdik: $\mathcal{L}\{t^{3}\}=\dfrac{6}{s^{4}}$ (5. soru), ötelersek $\dfrac{6}{(s-a)^{4}}$ — ==aynı cevap, üç satır daha kısa.==

Soru THEoREM 9.6'yı istediği için türev yolunu izledik, ama sınavda serbestseniz öteleme çok daha hızlıdır. Genel kalıp: $\mathcal{L}\{t^{n}e^{at}\}=\dfrac{n!}{(s-a)^{n+1}}$.
[/KUTU]

*Kitabın cevabıyla uyuşuyor.*
[/CEVAP]

---

### Kalan sorular — çözümler bize ait

[KUTU]
**Bu soruların cevabı kitabın anahtarında yok.** Aşağıdaki çözümler bize aittir; her biri ==ikinci bir bağımsız yoldan doğrulanmıştır==. Doğrulamalar da gösterildi, böylece adımları kendiniz izleyebilirsiniz.
[/KUTU]

[SORU] **2.** &nbsp; THEoREM 9.2'yi kullanarak $\mathcal{L}\{\sin at\sin bt\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Çarpımı toplama çevir.**

$$\sin A\sin B=\frac{1}{2}\Big[\cos(A-B)-\cos(A+B)\Big]$$

$$\sin at\sin bt=\frac{1}{2}\Big[\cos(a-b)t-\cos(a+b)t\Big]$$

==1. soruda kosinüs çarpımında toplama işareti vardı, burada eksi.== Fark bu tek işaretten ibaret.

**Adım 2 — Doğrusallık ve tablo.**

$$\mathcal{L}\{\sin at\sin bt\}=\frac{1}{2}\left[\frac{s}{s^{2}+(a-b)^{2}}-\frac{s}{s^{2}+(a+b)^{2}}\right]$$

**Adım 3 — Tek kesirde topla.**

$$=\frac{s}{2}\cdot\frac{\left[s^{2}+(a+b)^{2}\right]-\left[s^{2}+(a-b)^{2}\right]}{\left[s^{2}+(a-b)^{2}\right]\left[s^{2}+(a+b)^{2}\right]}$$

$(a+b)^{2}-(a-b)^{2}=4ab$ olduğundan pay $4ab$ olur ve $2$'ler sadeleşir:

$$\boxed{\;\mathcal{L}\{\sin at\sin bt\}=\frac{2abs}{\left[s^{2}+(a-b)^{2}\right]\left[s^{2}+(a+b)^{2}\right]}\;}$$

**Doğrulama (tekrar sorusu 3 ile).** Orada $\mathcal{L}\{\cos at\cos bt\}=\dfrac{s\left(s^{2}+a^{2}+b^{2}\right)}{D}$ bulmuştuk; $D$ aynı payda. Trigonometrik özdeşlik

$$\cos at\cos bt-\sin at\sin bt=\cos(a+b)t$$

olduğuna göre iki dönüşümün farkı $\mathcal{L}\{\cos(a+b)t\}$ vermeli:

$$\frac{s\left(s^{2}+a^{2}+b^{2}\right)-2abs}{D}=\frac{s\left(s^{2}+(a-b)^{2}\right)}{D}=\frac{s}{s^{2}+(a+b)^{2}}$$

$\left[s^{2}+(a-b)^{2}\right]$ çarpanı sadeleşti ve tam olarak $\mathcal{L}\{\cos(a+b)t\}$ kaldı. &#10003;
[/CEVAP]

[SORU] **4.** &nbsp; THEoREM 9.2 ile $\mathcal{L}\{\cos^{3}at\}$ değerini bulunuz, sonra THEoREM 9.3'ü kullanarak $\mathcal{L}\{\cos^{2}at\sin at\}$ değerini elde ediniz.
[CEVAP]
**Adım 1 — Üçüncü kuvvet özdeşliği.**

$$\cos^{3}\theta=\frac{3\cos\theta+\cos 3\theta}{4}$$

==3. sorudaki sinüs karşılığında işaret eksiydi ($\sin^{3}\theta=\tfrac{3\sin\theta-\sin 3\theta}{4}$); kosinüste artı.==

$$\mathcal{L}\{\cos^{3}at\}=\frac{3}{4}\cdot\frac{s}{s^{2}+a^{2}}+\frac{1}{4}\cdot\frac{s}{s^{2}+9a^{2}}$$

**Adım 2 — Topla.**

$$=\frac{s}{4}\cdot\frac{3\left(s^{2}+9a^{2}\right)+\left(s^{2}+a^{2}\right)}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}=\frac{s}{4}\cdot\frac{4s^{2}+28a^{2}}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}$$

$$\boxed{\;\mathcal{L}\{\cos^{3}at\}=\frac{s\left(s^{2}+7a^{2}\right)}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}\;}$$

**Adım 3 — İkinci kısım: türev THEoREM'i.**

$$\frac{d}{dt}\cos^{3}at=3\cos^{2}at\cdot(-a\sin at)=-3a\,\cos^{2}at\sin at$$

$f=\cos^{3}at$ için ==$f(0)=1$, sıfır değil==; 3. sorudaki sinüs halinde $f(0)=0$ olduğu için sabit terim düşmüştü, burada düşmüyor:

$$\mathcal{L}\{-3a\cos^{2}at\sin at\}=s\,\mathcal{L}\{\cos^{3}at\}-1$$

$$=\frac{s^{2}\left(s^{2}+7a^{2}\right)-\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}$$

Payı açalım: $s^{4}+7a^{2}s^{2}-\left(s^{4}+10a^{2}s^{2}+9a^{4}\right)=-3a^{2}s^{2}-9a^{4}=-3a^{2}\left(s^{2}+3a^{2}\right)$

**Adım 4 — $-3a$'ya böl.**

$$\boxed{\;\mathcal{L}\{\cos^{2}at\sin at\}=\frac{a\left(s^{2}+3a^{2}\right)}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}\;}$$

**Doğrulama (doğrudan özdeşlikle).** Türev yolunu hiç kullanmadan da bulabiliriz:

$$\cos^{2}at\sin at=\frac{1+\cos 2at}{2}\sin at=\frac{\sin at}{2}+\frac{\cos 2at\sin at}{2}$$

$\cos 2at\sin at=\tfrac{1}{2}\left[\sin 3at-\sin at\right]$ olduğundan

$$=\frac{\sin at}{2}+\frac{\sin 3at-\sin at}{4}=\frac{\sin at}{4}+\frac{\sin 3at}{4}$$

$$\mathcal{L}=\frac{1}{4}\cdot\frac{a}{s^{2}+a^{2}}+\frac{1}{4}\cdot\frac{3a}{s^{2}+9a^{2}}=\frac{a}{4}\cdot\frac{4s^{2}+12a^{2}}{\left(s^{2}+a^{2}\right)\left(s^{2}+9a^{2}\right)}$$

Aynı sonuç. &#10003; ==İki bağımsız yol.==
[/CEVAP]

[SORU] **6.** &nbsp; $\mathcal{L}\{t^{2}\}=\dfrac{2}{s^{3}}$ olduğuna göre, THEoREM 9.4'ü kullanarak $\mathcal{L}\{t^{4}\}$ değerini bulunuz.
[CEVAP]
**Adım 1 — Uygun $f$ ve $n$ seç.** $f(t)=t^{4}$ alıp THEoREM'i $n=2$ ile kullanalım:

$$f'(t)=4t^{3},\qquad f''(t)=12t^{2},\qquad f(0)=0,\qquad f'(0)=0$$

**Adım 2 — $(9.18)$'e yerleştir.** Her iki başlangıç değeri sıfır olduğundan sağ taraf sade:

$$\mathcal{L}\{f''\}=s^{2}\mathcal{L}\{t^{4}\}-s\cdot 0-0=s^{2}\mathcal{L}\{t^{4}\}$$

Sol taraf $\mathcal{L}\{12t^{2}\}=12\cdot\dfrac{2}{s^{3}}=\dfrac{24}{s^{3}}$:

$$\frac{24}{s^{3}}=s^{2}\,\mathcal{L}\{t^{4}\}$$

$$\boxed{\;\mathcal{L}\{t^{4}\}=\frac{24}{s^{5}}\;}$$

**Doğrulama (iki yoldan).**

**(a)** Tablo formülü: $\mathcal{L}\{t^{n}\}=\dfrac{n!}{s^{n+1}}$; &nbsp;$n=4$ için $\dfrac{4!}{s^{5}}=\dfrac{24}{s^{5}}$ &#10003;

**(b)** 5. sorudaki basamağı iki kez tırmanarak: $\mathcal{L}\{t^{3}\}=\dfrac{6}{s^{4}}$ bulunmuştu. $f=t^{4}$, $f'=4t^{3}$, $f(0)=0$ ile birinci türev THEoREM'i:

$$4\cdot\frac{6}{s^{4}}=s\,\mathcal{L}\{t^{4}\}\;\Longrightarrow\;\mathcal{L}\{t^{4}\}=\frac{24}{s^{5}}\;\checkmark$$

==$n=2$ ile bir hamlede ya da $n=1$ ile iki hamlede — aynı yere varıyor.==
[/CEVAP]

[SORU] **8.** &nbsp; $(9.11)$ ve $(9.18)$'i kullanarak $\mathcal{L}\{f(t)\}$'yi bulunuz: $f''+4f'-8f=0$, &nbsp;$f(0)=3$, &nbsp;$f'(0)=-1$.
[CEVAP]
$F=\mathcal{L}\{f\}$ olsun.

**Adım 1 — Türevlerin dönüşümleri.** ==$f'(0)=-1$ olduğuna dikkat; eksi işareti iki kez dönüyor:==

$$\mathcal{L}\{f''\}=s^{2}F-s(3)-(-1)=s^{2}F-3s+1$$
$$\mathcal{L}\{f'\}=sF-3$$

**Adım 2 — Denklemin dönüşümü.**

$$\left(s^{2}F-3s+1\right)+4\left(sF-3\right)-8F=0$$

**Adım 3 — Topla.** $F$ çarpanları $s^{2}+4s-8$; sabitler $-3s+1-12=-3s-11$:

$$\left(s^{2}+4s-8\right)F=3s+11$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{3s+11}{s^{2}+4s-8}\;}$$

**Doğrulama (başlangıç değer THEoREM'i ile).** İki bağımsız kontrol yapalım.

**(a)** $\displaystyle\lim_{s\to\infty}sF(s)=f(0^{+})$ olmalı:

$$sF=\frac{3s^{2}+11s}{s^{2}+4s-8}\;\xrightarrow{\;s\to\infty\;}\;3=f(0)\;\checkmark$$

**(b)** $\displaystyle\lim_{s\to\infty}s\big[sF(s)-f(0)\big]=f'(0)$ olmalı:

$$sF-3=\frac{3s^{2}+11s-3\left(s^{2}+4s-8\right)}{s^{2}+4s-8}=\frac{-s+24}{s^{2}+4s-8}$$

$$s(sF-3)=\frac{-s^{2}+24s}{s^{2}+4s-8}\;\xrightarrow{\;s\to\infty\;}\;-1=f'(0)\;\checkmark$$

Payda da beklendiği gibi ==karakteristik polinomun ta kendisi==: $s^{2}+4s-8$.
[/CEVAP]

[SORU] **10.** &nbsp; $(9.17)$ ve $(9.18)$'i kullanarak $\mathcal{L}\{f(t)\}$'yi bulunuz: $f^{\mathrm{iv}}=f''$, &nbsp;$f'''(0)=1$, &nbsp;$f''(0)=0$, &nbsp;$f'(0)=0$, &nbsp;$f(0)=-1$.
[CEVAP]
**Adım 1 — Dördüncü türevin dönüşümü.** $(9.17)$'yi $n=4$ ile yazalım:

$$\mathcal{L}\{f^{\mathrm{iv}}\}=s^{4}F-s^{3}f(0)-s^{2}f'(0)-s\,f''(0)-f'''(0)$$

$f(0)=-1$ olduğu için ilk terim ==işaret çevirip artıya dönüyor==; ortadaki ikisi sıfır:

$$\mathcal{L}\{f^{\mathrm{iv}}\}=s^{4}F+s^{3}-1$$

**Adım 2 — İkinci türevin dönüşümü.**

$$\mathcal{L}\{f''\}=s^{2}F-s\,f(0)-f'(0)=s^{2}F+s$$

**Adım 3 — Denklemi kur.**

$$s^{4}F+s^{3}-1=s^{2}F+s$$

$$\left(s^{4}-s^{2}\right)F=s+1-s^{3}$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{1+s-s^{3}}{s^{2}\left(s^{2}-1\right)}\;}$$

**Doğrulama — bu soru kendini çözdürüyor.** Adım 2'de bulduğumuz $\mathcal{L}\{f''\}$ ifadesine $F$'yi geri koyalım:

$$\mathcal{L}\{f''\}=s^{2}F+s=\frac{1+s-s^{3}}{s^{2}-1}+s=\frac{\left(1+s-s^{3}\right)+s\left(s^{2}-1\right)}{s^{2}-1}=\frac{1}{s^{2}-1}$$

Bu tablodan tanınıyor: $\mathcal{L}\{\sinh t\}=\dfrac{1}{s^{2}-1}$, yani ==$f''(t)=\sinh t$.==

Buradan $f$'yi iki kez integralleyerek kapalı biçimde bulabiliriz:

$$f'=\cosh t+C_{1},\qquad f'(0)=1+C_{1}=0\;\Rightarrow\;C_{1}=-1$$
$$f=\sinh t-t+C_{2},\qquad f(0)=C_{2}=-1$$

$$f(t)=\sinh t-t-1$$

**Son kontrol.** Bu $f$'nin dönüşümünü doğrudan alalım:

$$\mathcal{L}\{f\}=\frac{1}{s^{2}-1}-\frac{1}{s^{2}}-\frac{1}{s}=\frac{1}{s^{2}\left(s^{2}-1\right)}-\frac{1}{s}=\frac{1-s\left(s^{2}-1\right)}{s^{2}\left(s^{2}-1\right)}=\frac{1+s-s^{3}}{s^{2}\left(s^{2}-1\right)}$$

Başlangıçta bulduğumuzla birebir aynı. &#10003;

Kalan başlangıç koşulları da tutuyor: $f''=\sinh t\Rightarrow f''(0)=0$ &#10003;, &nbsp;$f'''=\cosh t\Rightarrow f'''(0)=1$ &#10003;

[KUTU]
**Bu sorunun öğrettiği.** Soru yalnızca $\mathcal{L}\{f\}$ istiyordu, ama $\mathcal{L}\{f''\}$'nin ==tablodan tanınabilir bir ifadeye sadeleşmesi== bize $f$'nin kendisini de verdi.

Sebebi denklemin biçimi: $f^{\mathrm{iv}}=f''$, yani $g=f''$ dersek $g''=g$ — çözümü $\sinh$ ve $\cosh$ olan en basit denklem. Başlangıç koşulları da tam $\sinh t$'yi seçecek biçimde verilmiş.

**Genel ders:** ara adımda çıkan bir ifade tabloda varsa, ona bakın. Çoğu zaman problemin yapısı hakkında bir şey söyler.
[/KUTU]
[/CEVAP]

---

### Çalışma soruları

Aşağıdakiler henüz çözülmedi; sıraya alındı.

**12.** &nbsp; $3f''-5f'+7f=\sin 2t$, &nbsp;$f(0)=4$, &nbsp;$f'(0)=6$

**14.** &nbsp; THEoREM 9.5 ile $\mathcal{L}\{e^{at}\sin^{2}bt\}$

**16.** &nbsp; THEoREM 9.6 ile $\mathcal{L}\{t^{3}\sin bt\}$

**18.** &nbsp; THEoREM 9.6 ile $\mathcal{L}\{t^{4}e^{at}\}$

[KUTU]
**İpuçları.**

**12** → 8 ve 11 ile aynı kalıp. Sağ tarafta $\mathcal{L}\{\sin 2t\}=\dfrac{2}{s^{2}+4}$ var; ortak paydaya alırken ==bu $2$'yi taşımayı unutmayın== (tekrar sorusu 6'da tam bu atlanmıştı).

**14** → önce Örnek 9.11'den $\mathcal{L}\{\sin^{2}bt\}=\dfrac{2b^{2}}{s\left(s^{2}+4b^{2}\right)}$, sonra $s\to s-a$ ötelemesi.

**16, 18** → 15 ve 17 gibi. **18** için öteleme yolu çok daha kısa: $\mathcal{L}\{t^{4}\}=\tfrac{24}{s^{5}}$ (6. soru), sonra ötele.

**Doğrulama.** 12'de bulduğunuz $F(s)$'nin paydası ==karakteristik polinom== $3s^{2}-5s+7$ olmalı. 14, 16, 18'de $s\to\infty$ iken $F\to 0$ olmalı; ayrıca 18'in cevabı $\dfrac{4!}{(s-a)^{5}}$ genel kalıbına uymalı.
[/KUTU]

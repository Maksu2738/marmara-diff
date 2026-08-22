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

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**2.** &nbsp; THEoREM 9.2 ile $\mathcal{L}\{\sin at\sin bt\}$

**4.** &nbsp; THEoREM 9.2 ile $\mathcal{L}\{\cos^{3}at\}$, sonra THEoREM 9.3 ile $\mathcal{L}\{\cos^{2}at\sin at\}$

**6.** &nbsp; $\mathcal{L}\{t^{2}\}=\dfrac{2}{s^{3}}$ verildiğine göre THEoREM 9.4 ile $\mathcal{L}\{t^{4}\}$

**8.** &nbsp; $f''+4f'-8f=0$, &nbsp;$f(0)=3$, &nbsp;$f'(0)=-1$

**10.** &nbsp; $f^{\mathrm{iv}}=f''$, &nbsp;$f'''(0)=1$, &nbsp;$f''(0)=0$, &nbsp;$f'(0)=0$, &nbsp;$f(0)=-1$

**12.** &nbsp; $3f''-5f'+7f=\sin 2t$, &nbsp;$f(0)=4$, &nbsp;$f'(0)=6$

**14.** &nbsp; THEoREM 9.5 ile $\mathcal{L}\{e^{at}\sin^{2}bt\}$

**16.** &nbsp; THEoREM 9.6 ile $\mathcal{L}\{t^{3}\sin bt\}$

**18.** &nbsp; THEoREM 9.6 ile $\mathcal{L}\{t^{4}e^{at}\}$

[KUTU]
**İpuçları.**

**2** → çarpımı toplama çeviren özdeşlik: $\sin A\sin B=\tfrac{1}{2}\left[\cos(A-B)-\cos(A+B)\right]$. Tekrar sorusu 3'teki $\cos at\cos bt$ ile aynı kalıp, yalnız işaret farklı.

**4** → $\cos^{3}\theta=\dfrac{3\cos\theta+\cos 3\theta}{4}$. İkinci kısımda $\dfrac{d}{dt}\cos^{3}at=-3a\cos^{2}at\sin at$; ==baştaki eksiyi unutmayın.==

**6** → THEoREM 9.4'ü $n=2$ ile $f=t^{4}$'e uygulayın: $f''=12t^{2}$, $f(0)=f'(0)=0$.

**8, 12** → 7 ve 11 ile birebir aynı kalıp, yalnız sayılar farklı.

**10** → 9 gibi ama dördüncü mertebe: $\mathcal{L}\{f^{\mathrm{iv}}\}=s^{4}F-s^{3}f(0)-s^{2}f'(0)-s\,f''(0)-f'''(0)$. Dört başlangıç değeri de yerine konacak, $f(0)=-1$ olduğu için $+s^{3}$ terimi kalır.

**14** → önce Örnek 9.11'den $\mathcal{L}\{\sin^{2}bt\}$, sonra $s\to s-a$.

**16, 18** → 15 ve 17 gibi; **18** için öteleme yolu ($\mathcal{L}\{t^{4}\}=\tfrac{24}{s^{5}}$, sonra ötele) çok daha kısadır.

**Doğrulama.** Türev THEoREM'i soruları ($8$, $10$, $12$) kendi içinde sınanabilir: bulduğunuz $F(s)$'nin ==paydası her zaman karakteristik polinomdur==. 8'de $s^{2}+4s-8$, 10'da $s^{4}-s^{2}$, 12'de $3s^{2}-5s+7$ çıkmalı. Payda tutmuyorsa dönüşüm adımında hata vardır.
[/KUTU]

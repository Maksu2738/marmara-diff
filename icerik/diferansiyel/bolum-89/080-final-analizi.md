---
id: final-analiz
menu: ★ Final Analizi
tip: konu
rozet: Analiz
baslik: ★ &nbsp;Final Analizi — Neye Ne Kadar Çalışmalı
---

Bu bölüm tahmin değil, ==sayım==. Üç kaynağa bakıyor: hocanın vize sonrası derste işlediklerinin **28 sayfalık ders notu**, sitedeki **yıldızlı sorular** (derste bizzat çözüldüğü doğrulananlar) ve **ödevler**. Vize analizinden çıkan dersleri de kullanıyor.

---

### 1. Hoca hangi konuya kaç sayfa ayırdı?

Hocanın vize sonrası derste işledikleri şu dağılımı gösteriyor:

<div class="tablo-sar">
<table>
<tr><th>Konu</th><th>Ders notu</th><th>Pay</th><th>Yorum</th></tr>
<tr><td><a href="#laplace">4. Laplace Dönüşümü</a></td><td>9-17 &nbsp;(<strong>9 sayfa</strong>)</td><td>%32</td><td>Açık ara birinci</td></tr>
<tr><td><a href="#ozel-dd">6. Özel Denklemler</a></td><td>24-28 &nbsp;(5 sayfa)</td><td>%18</td><td>Airy + Hermite; Bessel yarım kalmış</td></tr>
<tr><td><a href="#bolum-4-5">3.4 Cauchy-Euler</a></td><td>5-8 &nbsp;(4 sayfa)</td><td>%14</td><td>Hocanın kendi gösterimiyle</td></tr>
<tr><td><a href="#seri">5. Kuvvet Serisi</a></td><td>18-20 &nbsp;(3 sayfa)</td><td>%11</td><td>Bir tam örnek + bir yarım</td></tr>
<tr><td><a href="#ornek-frobenius">5.6-5.7 Frobenius</a></td><td>21-23 &nbsp;(3 sayfa)</td><td>%11</td><td>Yalnız kolay durum</td></tr>
<tr><td><a href="#bolum-4-3">3.3 Belirsiz Katsayılar</a></td><td>3-4 &nbsp;(2 sayfa)</td><td>%7</td><td>Vizede de çıkmıştı</td></tr>
<tr><td><a href="#bolum-4-2-d">3.2 Karmaşık Kökler</a></td><td>1-2 &nbsp;(2 sayfa)</td><td>%7</td><td>Vize sınırında</td></tr>
</table>
</div>

[KUTU]
**Tek cümlelik özet:** Derste işlenenlerin ==üçte biri Laplace==. Kuvvet serisi ve Frobenius birlikte alındığında %22 ile ikinci sırada; Cauchy-Euler ve özel denklemler onları izliyor.

Sayfa sayısı kaba bir ölçüdür ama tek elimizdeki nesnel veri — ve vize analizinde de bu ölçü işe yaramıştı.
[/KUTU]

---

### 2. Derste bizzat çözülen sorular

Sitede **★ Ders Notu Sorusu** rozetiyle işaretli **27 blok** var. Bunlar hocanın derste tahtada çözdüğü sorular; ==finalde en olası tipler bunlardır.== Dağılımı:

<div class="tablo-sar">
<table>
<tr><th>Tip</th><th>Sayı</th><th>Örnek</th></tr>
<tr><td>Laplace — temel dönüşüm bulma</td><td>6</td><td>$\mathcal{L}\{1\}$, $\mathcal{L}\{t\}$, $\mathcal{L}\{e^{at}\}$, $\mathcal{L}\{\sin^{2}at\}$, $\mathcal{L}\{2a\sin at\cos at\}$</td></tr>
<tr><td>Laplace — başlangıç değer problemi</td><td>4</td><td>$y'-3y=4e^{5t}$; $y''+4y'+3y=6e^{-t}$</td></tr>
<tr><td>Cauchy-Euler</td><td>4</td><td>$x^{2}y''-2xy'+2y=x^{3}$; üçüncü mertebe BDP</td></tr>
<tr><td>Kuvvet serisi / Frobenius</td><td>5</td><td>İndirgeme bağıntısı; tekil nokta sınıflandırması</td></tr>
<tr><td>Özel denklemler</td><td>3</td><td>Airy seri çözümü; Hermite; kütle-yay uygulaması</td></tr>
<tr><td>Karmaşık kök BDP</td><td>2</td><td>$y''-6y'+25y=0$, $y(0)=-3$, $y'(0)=-1$</td></tr>
<tr><td>Ters dönüşüm</td><td>2</td><td>$\mathcal{L}^{-1}\left\{\frac{1}{s^{2}+6s+13}\right\}$ (tamkare)</td></tr>
<tr><td>Laplace — dönüşümü bulma (çözmeden)</td><td>1</td><td>$f''-6f'+5f=0$ için $\mathcal{L}\{f\}$</td></tr>
</table>
</div>

[KUTU]
**Buradan çıkan desen:** Laplace'taki **11 yıldızlı sorunun hepsi 4.1-4.3 aralığında.** Ama bu, 4.4 ve 4.5'in işlenmediği anlamına gelmiyor — ==elimizdeki 28 sayfalık ders notu 4.3'te bitiyor, sonrası bizde yok.== Kullanıcının bildirdiğine göre hoca 9.4 (birim basamak, süreksizlik, delta) ve 9.5 (sistemler) konularını da derste işlemiş.

Yani Laplace'ın **tamamı** ağırlıklı sayılmalı. Elimizdeki notun kapsadığı 4.1-4.3 kısmında hangi soruların çözüldüğünü ==birebir biliyoruz==; 4.4 ve 4.5 için o ayrıntı elimizde yok, o kadar.
[/KUTU]

---

### 3. Vize ne öğretti?

Vize analizindeki en güçlü sinyal şuydu: ==vizede ödevden aynen soru çıktı.== Bu, final için verilen iki ödevi sıradan ödev olmaktan çıkarır:

<div class="tablo-sar">
<table>
<tr><th>Ödev</th><th>Soru</th><th>Karşılığı</th></tr>
<tr><td><a href="#odev-5">Ödev 5</a></td><td>$y''+4y'+5y=10e^{-t}$, $y(0)=1$, $y'(0)=0$ — Laplace ile</td><td><a href="#ornek-laplace-ikinci-mertebe">4.3 İkinci mertebeden örnekler</a></td></tr>
<tr><td><a href="#odev-6">Ödev 6</a></td><td>$\left(1+x^{2}\right)y''+2xy'+\left(x^{2}-2\right)y=0$ — rekürans + ilk beş terim</td><td><a href="#ornek-seri-cozum">5.2 Adım adım seri çözümü</a></td></tr>
</table>
</div>

Bu ikisi, ==derste işlenenlerin ağırlık dağılımıyla da örtüşüyor==: Laplace birinci, kuvvet serisi ikinci sırada. İki bağımsız kaynak aynı yeri gösteriyor.

[KUTU]
**Ödevleri sayı değiştirerek yeniden çözebilecek düzeyde bilin.** Ezberlemek değil — $10e^{-t}$ yerine $6e^{-2t}$ konsa, ya da başlangıç koşulları değişse aynı akışı yürütebilmek. Vizede bu tam olarak işe yaramıştı.
[/KUTU]

---

### 4. Hocanın kendi gösterimi

İki yerde hoca kitaptan ayrılıyor. Sınav kâğıdında ==bu biçimler beklenebilir==:

**Cauchy-Euler ünlem gösterimi** &nbsp;(<a href="#cauchy-euler-hoca-yolu">3.4 ★ Hocanın Yolu</a>)

Hoca $x=e^{s}$ dönüşümünde $s$'e göre türevler için kendi kısaltmasını kullanıyor — ders notunda kendi eliyle "uydurma" diye işaretlemiş:

$$y'=\frac{y^{!}}{x},\qquad y''=\frac{1}{x^{2}}\left[y^{!!}-y^{!}\right],\qquad y'''=\frac{1}{x^{3}}\left[y^{!!!}-3y^{!!}+2y^{!}\right]$$

Kitap her problemde zincir kuralını yeniden kuruyor; hoca bu üç formülü ezberletip doğrudan yerine koyuyor. ==Sınavda hızlı olan bu.==

**Laplace hazır kalıbı** &nbsp;(<a href="#laplace-dd-cozumu">4.3 Diferansiyel Denklem Çözümü</a>)

İkinci mertebe için hoca doğrudan bir formül veriyor:

$$Y(s)=\frac{F(s)+\Big[a_{2}\left(s\,c_{0}+c_{1}\right)+a_{1}c_{0}\Big]}{a_{2}s^{2}+a_{1}s+a_{0}}$$

Kitap bunu vermez, üç adımı tek tek uygulatır.

---

### 5. Düşük öncelikliler

Aşağıdakiler **kitapta var ve sorulabilir**, ama elimizdeki ders notunda geçmiyor. Sitede kırmızı **⚠ DERSTE İŞLENMEDİ** şeridiyle işaretli — toplam **12 bölüm**:

<div class="tablo-sar">
<table>
<tr><th>Konu</th><th>Nerede</th><th>Neden düşük öncelik</th></tr>
<tr><td>Konvolüsyon</td><td><a href="#laplace-konvolusyon">4.2</a></td><td>Derste işlenmedi; ters dönüşümün alternatif yolu</td></tr>
<tr><td>Frobenius istisnaları (logaritmalı, eşit kökler)</td><td><a href="#frobenius-istisnalar">5.8-5.10</a></td><td>Derste yalnız kolay durum yapıldı</td></tr>
<tr><td>Bessel'in devamı ($J_{p}$, gama, $Y_{p}$)</td><td><a href="#ozel-dd-bessel-p">6.3</a></td><td>Derste $c_{2n}$ formülünde kesildi</td></tr>
<tr><td>Yakınsaklık aralığı</td><td><a href="#seri-yakinsaklik">5.4</a></td><td>Derste tartışılmadı</td></tr>
</table>
</div>

[KUTU]
**"Düşük öncelik" ne demek değil.** Bunları ==atlayın== demiyoruz. Kitapta varlar, hoca kitaptan sınav yapabilir. Demek istediğimiz: **önce yıldızlı tipleri bitirin**, zaman kalırsa buraya geçin.

Bir istisna: **Legendre denklemi.** Hoca derste "Airy, Hermite, Bessel ve **Legendre**'yi kısaca göreceğiz" demiş ama elimizdeki 28 sayfalık notta Legendre'ye hiç gelmemiş. ==Sonraki derslerde işlemiş olabilir==; sitede de henüz içerik yok. Ders arkadaşlarınıza sorup teyit etmeniz iyi olur.
[/KUTU]

---

### 6. Çalışma sırası

<div class="tablo-sar">
<table>
<tr><th>Sıra</th><th>Ne</th><th>Neden</th></tr>
<tr><td><strong>1</strong></td><td><a href="#odev-5">Ödev 5</a> ve <a href="#odev-6">Ödev 6</a></td><td>Vizede ödevden aynen soru çıktı. En güçlü sinyal.</td></tr>
<tr><td><strong>2</strong></td><td><a href="#laplace">Laplace</a>: 4.1-4.3 (tanım, türev THEoREM'leri, ters dönüşüm, BDP), sonra 4.4-4.5</td><td>En ağır konu; 11 yıldızlı soru 4.1-4.3'te</td></tr>
<tr><td><strong>3</strong></td><td><a href="#bolum-4-5">3.4 Cauchy-Euler</a> + <a href="#cauchy-euler-hoca-yolu">hocanın yolu</a></td><td>4 yıldızlı soru; hocanın kendi gösterimi var</td></tr>
<tr><td><strong>4</strong></td><td><a href="#ornek-seri-cozum">5.1-5.3 Kuvvet serisi</a></td><td>Ödev 6'nın konusu; indirgeme bağıntısı kurmak</td></tr>
<tr><td><strong>5</strong></td><td><a href="#ornek-frobenius">5.6-5.7 Frobenius</a> — yalnız kolay durum</td><td>Tekil nokta sınıflandırması + indis denklemi</td></tr>
<tr><td><strong>6</strong></td><td><a href="#ozel-dd-airy">6.1 Airy</a>, <a href="#ozel-dd-hermite">6.2 Hermite</a></td><td>Derste işlendi; seri çözüm kalıbı aynı</td></tr>
<tr><td><strong>7</strong></td><td>Kırmızı işaretli bölümler</td><td>Zaman kalırsa</td></tr>
</table>
</div>

[KUTU]
**Verimli bir kısayol.** 4, 5 ve 6. adımların üçü de ==aynı mekaniği== kullanıyor: seriyi denkleme koy, katsayıları eşitle, indirgeme bağıntısını çıkar, ilk birkaç terimi yaz. Kuvvet serisini iyi öğrenirseniz Frobenius yalnızca bir $x^{r}$ çarpanı, Airy ve Hermite ise yalnızca farklı katsayılardır.

Aynı şekilde 2 ve 3. adımlar da bağlantılı: Cauchy-Euler dönüşümden sonra ==sabit katsayılı denkleme== iniyor, o da zaten bildiğiniz konu.
[/KUTU]

---

### Son bir uyarı: anahtardaki üç şüpheli yer

Çalışırken bu üç soruda kitabın cevabı ile bizim çözümümüz ayrılıyor. Her üçünde de kendi çözümümüzü doğruladık ama ==kitaptan teyit etmeniz iyi olur:==

- <a href="#egzersizler-ters-donusum">4.2 egzersiz 20</a> — payda $9$ yerine $45$ çıkıyor
- <a href="#tekrar-donusum-bulma">4.6 tekrar 6</a> — payın sabit terimi bizde $154$, anahtarda $152$
- <a href="#tekrar-ters-donusum">4.6 tekrar 21</a> — sinüs katsayısı bizde $\tfrac{5}{2}$, anahtarda $\tfrac{8}{5}$

<p style="margin-bottom:0;">Bu analiz elimizdeki <strong>28 sayfalık ders notuna</strong> dayanıyor; o not Laplace'ı 4.3'te bırakıyor. Hocanın 9.4 ve 9.5'i de işlediği sonradan öğrenildi, ilgili bölümlerdeki "derste işlenmedi" işareti kaldırıldı. ==O derslerin notu elimize geçerse== hangi soruların çözüldüğü de yıldızlanacak ve ağırlık dağılımı güncellenecektir. Hoca sonradan başka konu işlediyse ya da Bölüm 7 (lineer sistemler) notları eklenirse ==dağılım değişir== ve bu bölüm güncellenecektir.</p>

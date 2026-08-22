---
id: cauchy-euler-tanima
menu: 3.4 Denklemi Tanıma
tip: ornek
baslik: 3.4 &nbsp;Bir Denklemin Cauchy-Euler Olup Olmadığını Anlamak
---

Cauchy-Euler denkleminin çözüm yöntemi kısa; asıl hata, denklemin ==Cauchy-Euler olup olmadığına yanlış karar vermekten== çıkar. Ölçüt tektir:

[KUTU]
**Tanıma ölçütü.** Sol taraftaki her terim $x^{k}y^{(k)}$ biçiminde olmalıdır: ==türevin mertebesi, $x$'in üssüne eşit==. Sağ taraf ($F(x)$) serbesttir, herhangi bir fonksiyon olabilir.
[/KUTU]

Terim terim bakıldığında:

<div class="tablo-sar">
<table>
<tr><th>Terim</th><th>$x$'in üssü</th><th>Türev mertebesi</th><th>Uygun mu?</th></tr>
<tr><td>$x^{2}y''$</td><td>$2$</td><td>$2$</td><td>&#10003;</td></tr>
<tr><td>$xy'$</td><td>$1$</td><td>$1$</td><td>&#10003;</td></tr>
<tr><td>$y$</td><td>$0$</td><td>$0$</td><td>&#10003;</td></tr>
<tr><td>$xy''$</td><td>$1$</td><td>$2$</td><td>&#10007;</td></tr>
<tr><td>$x^{2}y'$</td><td>$2$</td><td>$1$</td><td>&#10007;</td></tr>
</table>
</div>

[SORU*] **Örnek 4.42a.** &nbsp; Aşağıdaki denklemlerin hangileri Cauchy-Euler denklemidir?
<ol style="margin-left:1rem">
<li>$2x^{2}y''+5xy'-2y=0$</li>
<li>$xy'+2y=x^{2}$</li>
<li>$xy''+xy'=0$</li>
<li>$5xy''-y'=4x^{2}$</li>
</ol>
[CEVAP]
**(1)** &nbsp; $2x^{2}y''+5xy'-2y=0$

Terimler: $x^{2}y''$ &#10003;, &nbsp;$xy'$ &#10003;, &nbsp;$y$ &#10003;.

$$\Longrightarrow\;\textbf{Cauchy-Euler.}$$

---

**(2)** &nbsp; $xy'+2y=x^{2}$

Terimler: $xy'$ &#10003;, &nbsp;$y$ &#10003;. Sağ taraftaki $x^{2}$ ölçütü bozmaz — ==$F(x)$ serbesttir.==

$$\Longrightarrow\;\textbf{Cauchy-Euler}\;(\text{birinci mertebeden}).$$

---

**(3)** &nbsp; $xy''+xy'=0$

$xy''$ teriminde $x$'in üssü $1$, türev mertebesi $2$. ==Uyuşmuyor.== İkinci terim ($xy'$) uygun olsa da bir terimin bozması yeter.

$$\Longrightarrow\;\textbf{Cauchy-Euler değil.}$$

Peki $x$ ile çarparsak düzelir mi? $x^{2}y''+x^{2}y'=0$ — bu kez ikinci terim bozulur. **Düzelmiyor.**

---

**(4)** &nbsp; $5xy''-y'=4x^{2}$

İlk bakışta bozuk görünür: $xy''$ uyuşmuyor. ==Ama denklemin tümünü $x$ ile çarpma hakkımız var:==

$$5x^{2}y''-xy'=4x^{3}$$

Şimdi $x^{2}y''$ &#10003; ve $xy'$ &#10003;.

$$\Longrightarrow\;\textbf{Cauchy-Euler.}$$
[/CEVAP]

[KUTU]
**(3) ile (4) arasındaki fark neden önemli?** İkisi de ham hâlde ölçütü bozuyor, ama yalnızca (4) bir çarpanla düzeliyor. Sebep: ==(4)'te terimlerin "üs eksiği" aynı== ($xy''$ bir eksik, $y'$ bir eksik), dolayısıyla tek bir $x$ çarpanı ikisini birden yerine oturtur. (3)'te ise $xy''$ bir eksik, $xy'$ ise tam — ortak bir çarpan ikisini aynı anda düzeltemez.

**Pratik kural:** her terimde (türev mertebesi $-$ $x$'in üssü) farkını hesaplayın. Bütün terimlerde bu fark ==aynı sayıysa== denklem uygun bir $x^{m}$ çarpanıyla Cauchy-Euler'e getirilebilir; farklıysa getirilemez.
[/KUTU]

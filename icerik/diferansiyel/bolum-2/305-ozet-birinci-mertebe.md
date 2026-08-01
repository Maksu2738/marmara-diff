---
id: ozet-birinci-mertebe
menu: ★ Özet: Beş Denklem Tipi
tip: konu
rozet: Özet
baslik: Birinci Mertebeden Denklemlerin Beş Tipi
---

Buraya kadar birinci mertebeden denklemlerin ==beş temel tipini== gördük: tam, ayrılabilir, homojen, doğrusal ve Bernoulli. Bir soruyla karşılaştığında ilk iş **hangi tip olduğunu tanımaktır** — yöntem ondan sonra kendiliğinden gelir.

Aşağıdaki tablo tanıma ölçütünü ve uygulanacak yöntemi bir arada verir.

<div class="tablo-sar">
<table>
<thead>
<tr>
<th>Tip</th>
<th>Nasıl tanınır</th>
<th>Yöntem</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Ayrılabilir</strong></td>
<td>$F(x)G(y)\,dx+f(x)g(y)\,dy=0$ &mdash; $x$'li ve $y$'li çarpanlar ayrışabiliyor</td>
<td>$\dfrac{1}{f(x)G(y)}$ ile böl, iki tarafı ayrı ayrı integre et</td>
</tr>
<tr>
<td><strong>Tam</strong></td>
<td>$M\,dx+N\,dy=0$ ve $\dfrac{\partial M}{\partial y}=\dfrac{\partial N}{\partial x}$</td>
<td>$F=\displaystyle\int M\,dx+g(y)$ kur, $F_y=N$'den $g(y)$'yi bul, $F=c$</td>
</tr>
<tr>
<td><strong>Homojen</strong></td>
<td>$\dfrac{dy}{dx}=f(x,y)$ ve $f$ yalnızca $y/x$ cinsinden yazılabiliyor</td>
<td>$v=\dfrac{y}{x}$ &rarr; ayrılabilir denkleme dönüşür</td>
</tr>
<tr>
<td><strong>Doğrusal</strong></td>
<td>$y'+P(x)y=Q(x)$ &mdash; $y$ ve $y'$ birinci derecede, çarpımları yok</td>
<td>$\mu=e^{\int P\,dx}$ ile çarp, $\left(\mu y\right)'=\mu Q$ olur</td>
</tr>
<tr>
<td><strong>Bernoulli</strong></td>
<td>$y'+P(x)y=Q(x)y^{n}$, &nbsp; $n\neq 0,1$</td>
<td>$v=y^{1-n}$ &rarr; $v$'ye göre doğrusal denkleme dönüşür</td>
</tr>
</tbody>
</table>
</div>

### Tanıma sırası

Pratikte şu sırayla bakmak en hızlısıdır:

1. **Değişkenler ayrışıyor mu?** Ayrışıyorsa en kolay yol budur, başka bir şey deneme.
2. **$y'+P y=Q$ biçiminde mi?** Doğrusalsa integral çarpanı formülü doğrudan sonuç verir.
3. **Sağ tarafta $y^{n}$ var mı?** Varsa Bernoulli'dir; $v=y^{1-n}$ dönüşümü uygula.
4. **$M_y=N_x$ mi?** Eşitse tamdır.
5. **Hiçbiri değilse:** $f$ yalnızca $y/x$ cinsinden yazılabiliyor mu diye bak (homojen), yoksa ==integral çarpanı== aramaya geç.

[KUTU]
**Tipler birbirini dışlamaz.** Bir denklem aynı anda birden fazla sınıfa girebilir; örneğin her ayrılabilir denklem uygun bir integral çarpanıyla tam yapılabilir, doğrusal bir denklem $n=0$ alınmış Bernoulli denklemidir. Böyle durumlarda en az işlem gerektiren yolu seç &mdash; sınavda zaman kazandırır.
[/KUTU]

Bir denklem bu beş kalıptan hiçbirine uymuyorsa, sıradaki adım onu ==tam== hâle getirecek bir integral çarpanı aramaktır. Bir sonraki bölüm tam olarak bunu ele alıyor.

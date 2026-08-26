---
id: kdd-siniflandirma
menu: 8.2 Sınıflandırma
tip: konu
baslik: 8.2 &nbsp;İkinci Mertebeden Lineer KDD'lerin Sınıflandırılması
---

İki değişkenli, ikinci mertebeden lineer bir KDD'nin genel biçimi:

$$A\,u_{xx}+B\,u_{xy}+C\,u_{yy}+D\,u_{x}+E\,u_{y}+F\,u=G \tag{8.1}$$

Denklemin karakterini belirleyen ==yalnızca ilk üç katsayıdır.== Şu niceliğe **diskriminant** denir:

$$\boxed{\;\Delta=B^{2}-4AC\;} \tag{8.2}$$

[KUTU]
**Sınıflandırma:**

| $\Delta=B^{2}-4AC$ | Tür | Temsilcisi |
|---|---|---|
| $\Delta<0$ | **Eliptik** (elliptic) | Laplace: $u_{xx}+u_{yy}=0$ |
| $\Delta=0$ | **Parabolik** (parabolic) | Isı: $u_{t}=k\,u_{xx}$ |
| $\Delta>0$ | **Hiperbolik** (hyperbolic) | Dalga: $u_{tt}=c^{2}u_{xx}$ |
[/KUTU]

Adlar konik kesitlerden gelir: $Ax^{2}+Bxy+Cy^{2}+\dots=0$ denklemi de aynı $B^{2}-4AC$ ölçütüyle elips, parabol ve hiperbole ayrılır. ==Cebirsel yapı birebir aynı olduğu için adlar ödünç alınmıştır==; koniklerle geometrik bir ilgisi yoktur.

---

[SORU] **Örnek 8.3.** &nbsp; Üç klasik denklemi sınıflandırınız.
[CEVAP]
**(a) Laplace denklemi:** $u_{xx}+u_{yy}=0$

$$A=1,\qquad B=0,\qquad C=1$$

$$\Delta=0^{2}-4(1)(1)=-4<0\;\Longrightarrow\;\textbf{eliptik}$$

**(b) Isı denklemi:** $u_{t}=k\,u_{xx}$

Önce $(8.1)$ kalıbına sokalım. İkinci değişken $y$ yerine $t$; her şeyi sola atarsak $k\,u_{xx}-u_{t}=0$:

$$A=k,\qquad B=0,\qquad C=0$$

($u_{tt}$ terimi yok, o yüzden $C=0$; $-u_{t}$ terimi $E$ katsayısıdır ve ==sınıflandırmaya girmez.==)

$$\Delta=0^{2}-4(k)(0)=0\;\Longrightarrow\;\textbf{parabolik}$$

**(c) Dalga denklemi:** $u_{tt}=c^{2}u_{xx}$

$$c^{2}u_{xx}-u_{tt}=0\;\Longrightarrow\;A=c^{2},\qquad B=0,\qquad C=-1$$

$$\Delta=0^{2}-4\left(c^{2}\right)(-1)=4c^{2}>0\;\Longrightarrow\;\textbf{hiperbolik}$$
[/CEVAP]

[SORU] **Örnek 8.4.** &nbsp; $u_{xx}+4u_{xy}+3u_{yy}-u_{x}=0$ denklemini sınıflandırınız.
[CEVAP]
$$A=1,\qquad B=4,\qquad C=3$$

$$\Delta=4^{2}-4(1)(3)=16-12=4>0$$

$$\boxed{\;\textbf{hiperbolik}\;}$$

$-u_{x}$ terimi $D=-1$ katsayısıdır; ==diskriminanta girmez.==
[/CEVAP]

---

### Sınıf neden önemli?

Üç sınıf ==bambaşka davranır==; çözüm yöntemi ve hangi koşulların gerektiği sınıfa göre değişir.

| | Eliptik | Parabolik | Hiperbolik |
|---|---|---|---|
| Fiziksel karşılığı | Denge | Yayılma / sönüm | Salınım |
| Zaman var mı | Yok | Var, ==tek yönlü== | Var, ==çift yönlü== |
| Tipik koşullar | Kapalı bölgenin bütün kenarında | Bir başlangıç + iki sınır | İki başlangıç + iki sınır |
| Süreksizlik | Anında düzleşir | Anında düzleşir | ==Bozulmadan taşınır== |
| Geriye çözülür mü | — | ==Hayır== | Evet |

[KUTU]
**"Geriye çözülmez" ne demek?** Isı denkleminde bugünün sıcaklık dağılımından dünkünü hesaplamak, ==pratikte imkânsızdır==: farklar üstel hızla silindiği için, bugün ölçtüğünüz düzgün dağılıma karşılık dün çok farklı dağılımlar olabilirdi.

Dalga denkleminde ise durum tersidir; hareketi geriye sarabilirsiniz. Bir ses kaydını tersten çalabilmenizin sebebi budur.
[/KUTU]

**Katsayılar sabit olmak zorunda değil.** $A$, $B$, $C$ konuma bağlıysa denklem ==bölgeden bölgeye sınıf değiştirebilir.== Klasik örnek **Tricomi denklemi**:

$$y\,u_{xx}+u_{yy}=0\;\Longrightarrow\;\Delta=-4y$$

$y>0$ bölgesinde eliptik, $y<0$ bölgesinde hiperboliktir. (Ses hızı altı ve üstü akışların modeli.)

---

[CLAUDE] Sınıflandırma sorusu geldiğinde 30 saniye
Sınavda çıkarsa mekanik bir işlemdir; üç şeye dikkat:

**1. Önce her şeyi sol tarafa atın.** $u_{tt}=c^{2}u_{xx}$ ile $c^{2}u_{xx}-u_{tt}=0$ aynı denklem, ama katsayıları doğru okumak için ikincisi gerekir. İşareti kaçırırsanız hiperbolik yerine eliptik bulursunuz.

**2. $B$, $u_{xy}$'nin katsayısıdır — $u_{x}$'in değil.** En sık hata budur. $D$, $E$, $F$, $G$ ==diskriminanta hiç girmez.==

**3. Çapraz terim yoksa ($B=0$) ölçüt basitleşir:** $\Delta=-4AC$, yani ==$A$ ile $C$'nin işaretine== bakmak yeterli:

- $A$, $C$ **aynı** işaretli → eliptik
- İkisi **zıt** işaretli → hiperbolik
- Biri **sıfır** → parabolik

Üç klasik denklemi bu kuralla bir bakışta ayırt edebilirsiniz: $(+,+)$ Laplace, $(+,-)$ dalga, $(+,0)$ ısı.
[/CLAUDE]

---
id: operator-temel-kavramlar
menu: 7.6 ★ Ders Notu — Operatör Nedir?
tip: konu
baslik: 7.6 &nbsp;★ Ders Notu — Operatör Kavramı ve Diferansiyel Operatör
---

[KUTU]
**Buradan sonrası hocanın ders notundaki "CHAPTER 7: Differential Operators" bölümüdür.**

Yukarıdaki 7.1–7.5 kitabın anlatımıdır ve konusu ==lineer sistemlerdir==: operatör orada bir *araç* olarak kullanılır. Hoca ise operatörü ==başlı başına bir konu== olarak işliyor: ne olduğu, nasıl davrandığı, komütatörü, yok edicisi, özfonksiyonları.

İki anlatım çelişmez; hocanınki daha geneldir ve kitabın $D$ gösterimini kapsar. Ders notunda hoca $D$ yerine ==şapkalı== $\hat{D}$ yazıyor; burada da o gösterim korundu.

**Bir uyarı:** elimizdeki taramada bölümün **(E)** başlığı yok — not (D)'den doğrudan (F)'ye geçiyor. Eksik olan kısım bu sayfalarda yer almıyor.
[/KUTU]

### Operatör tanımı

> **Operatör (operator):** bir "$f$" fonksiyonuna etki ettiğinde onu "$g$" fonksiyonuna çeviren matematiksel nesnedir.

Gösterimi şapkayla yapılır:

$$\hat{O}f=g\qquad\text{"}\hat{O}\text{, } f\text{'ye etki eder ve } g\text{'yi üretir."}$$

---

### Operatör türleri

Ders notunda dört tipik örnek sıralanıyor:

| Etki | Adı |
|---|---|
| $\hat{S}f=s\,f$ | **Ölçekleme operatörü** (scaling) — fonksiyonu bir sayıyla büyütür |
| $\hat{A}f=0$ | **Yok edici** (annihilator) — fonksiyonu sıfırlar |
| $\hat{I}f=f$ | **Birim operatör** (notta "elementary") — hiçbir şey yapmaz |
| $\hat{D}f=f'$ | **Diferansiyel operatör** — türev alır |

Bu bölümde ==esas ilgilendiğimiz sonuncusudur.==

[KUTU]
**Operatör bir sayı değildir.** Ders notunun kenarındaki küçük kutu tam olarak bunu vurguluyor:

$$\hat{O}f=2f'\;\;\text{ama}\;\;\hat{O}\neq 2$$
$$\hat{D}e^{x}=e^{x}\;\;\text{ama}\;\;\hat{D}\neq 1$$
$$\hat{O}f=0\;\;\text{ama}\;\;\hat{O}\neq 0$$

Bir operatörün ==belirli bir fonksiyon üzerindeki etkisi== sayıyla çarpmaya benzeyebilir; bu, operatörün o sayı olduğu anlamına gelmez. $\hat{D}$, $e^{x}$'i değiştirmez ama $x^{2}$'yi $2x$ yapar. ==Operatörü tanımlayan, tek bir fonksiyondaki davranışı değil, bütün fonksiyonlardaki davranışıdır.==
[/KUTU]

---

### Diferansiyel operatör

$$\hat{D}=\frac{d}{dx}$$

O zaman

$$\hat{D}y=y',\qquad \hat{D}^{2}y=y'',\qquad\dots\qquad\text{genel olarak}\quad\boxed{\;\hat{D}^{n}y=y^{(n)}\;}$$

Böylece bir diferansiyel denklem ==operatör diliyle== yeniden yazılabilir. Ders notundaki örnek:

$$y''+3y'-4y=0$$

$$\hat{D}^{2}y+3\hat{D}y-4y=0$$

$$\left(\hat{D}^{2}+3\hat{D}-4\right)y=0$$

Parantez içindeki nesneye bir ad verelim:

$$\hat{L}\equiv \hat{D}^{2}+3\hat{D}-4\qquad\Longrightarrow\qquad \hat{L}y=0$$

==Denklemin tamamı tek bir sembole indi.==

---

### Genel biçim

Her lineer adi diferansiyel denklem bu kalıba girer:

$$\left[a_{n}\hat{D}^{n}+a_{n-1}\hat{D}^{n-1}+\dots+a_{1}\hat{D}+a_{0}\right]y=0$$

$$\hat{L}=a_{n}\hat{D}^{n}+a_{n-1}\hat{D}^{n-1}+\dots+a_{1}\hat{D}+a_{0}$$

$$\boxed{\;\hat{L}y=0\;}$$

[KUTU]
**★ Ünlü bir örnek: Schrödinger denklemi.** Ders notu, kuantum mekaniğinin temel denklemini bu çerçeveye oturtuyor. **Hamilton operatörü**:

$$\hat{H}=-\frac{\hbar^{2}}{2m}\frac{d^{2}}{dx^{2}}+V(x)$$

ve denklemin kendisi:

$$\left[-\frac{\hbar^{2}}{2m}\frac{d^{2}}{dx^{2}}+V(x)-E\right]\psi(x)=0$$

Notun kenarındaki vurgu: ==Schrödinger denklemi bir operatör denklemidir.== Burada $\hat{L}=\hat{H}-E$ alırsanız denklem tam olarak $\hat{L}\psi=0$ biçimindedir.

Bu, 7.14'te göreceğimiz **özdeğer problemine** de bir ön hazırlıktır: $\hat{H}\psi=E\psi$.
[/KUTU]

---

[CLAUDE] Neden zahmet edip operatör yazıyoruz?
$y''+3y'-4y=0$ yerine $\left(\hat{D}^{2}+3\hat{D}-4\right)y=0$ yazmak ilk bakışta gereksiz süs gibi görünür. Kazancı üç yerde ortaya çıkar:

1. **Çarpanlara ayırma serbest kalır.** $\hat{D}^{2}+3\hat{D}-4=(\hat{D}+4)(\hat{D}-1)$ yazabildiğiniz anda kökler doğrudan okunur (7.9).
2. **Denklem tek sembole iner.** $\hat{L}y=0$ ile $\hat{L}y=f$ arasındaki fark, ==lineer cebirde $Ax=0$ ile $Ax=b$ arasındaki farkın aynısıdır== (7.11).
3. **Yeni sorular sorulabilir hâle gelir.** "İki operatörün sırası önemli mi?" (7.10), "hangi fonksiyonu sıfırlar?" (7.12), "hangi fonksiyonu yalnız ölçekler?" (7.14) — bunlar $y''+3y'-4y$ yazımıyla sorulamayacak sorulardır.

==Gösterim değişikliği değil, bakış açısı değişikliğidir.==
[/CLAUDE]

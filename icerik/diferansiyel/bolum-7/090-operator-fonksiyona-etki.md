---
id: operator-fonksiyona-etki
menu: 7.7 ★ Operatörlerin Fonksiyonlara Etkisi
tip: konu
baslik: 7.7 &nbsp;★ Diferansiyel Operatörlerin Fonksiyonlar Üzerindeki Etkisi
---

Basit etkilerle başlayalım:

$$\hat{D}\left(x^{2}\right)=2x,\qquad \hat{D}(1)=0,\qquad \hat{D}e^{x}=e^{x},\quad\dots$$

Şimdi bileşik bir operatör alalım. Ders notundaki örnek:

$$\hat{L}=\hat{D}^{2}+2\hat{D}+1=\left(\hat{D}+1\right)^{2}$$

---

[SORU] **Örnek 7.4.** &nbsp; $\hat{L}=\hat{D}^{2}+2\hat{D}+1$ operatörünün $y=e^{x}$ ve $y=e^{-x}$ üzerindeki etkisini bulunuz.
[CEVAP]
**$y=e^{x}$ için.** $\hat{D}e^{x}=e^{x}$ ve $\hat{D}^{2}e^{x}=e^{x}$:

$$\hat{L}y=\left(\hat{D}^{2}+2\hat{D}+1\right)e^{x}=e^{x}+2e^{x}+e^{x}=4e^{x}$$

$$\boxed{\;\hat{L}y=4y\;}$$

Operatör fonksiyonu değiştirmedi, ==yalnızca 4 katına çıkardı.==

**$y=e^{-x}$ için.** $\hat{D}e^{-x}=-e^{-x}$ ve $\hat{D}^{2}e^{-x}=e^{-x}$:

$$\hat{L}y=\left(\hat{D}^{2}+2\hat{D}+1\right)e^{-x}=e^{-x}-2e^{-x}+e^{-x}=0$$

$$\boxed{\;\hat{L}y=0\;}$$

Bu sefer fonksiyon tamamen ==yok edildi.==
[/CEVAP]

Ders notunun kendi cümlesiyle:

> $\hat{L}$, $e^{x}$'i $4e^{x}$ olarak **ölçekler**, ama $e^{-x}$'i **yok eder**, sıfır yapar.

---

### İki davranış, iki konu

Aynı operatör, hangi fonksiyona uygulandığına göre bambaşka davranıyor. Bu iki davranışın her biri ilerideki bir bölümün konusudur:

| Davranış | Yazılışı | Nerede işlenecek |
|---|---|---|
| Ölçekleme | $\hat{L}y=\lambda y$ | **7.14** — özdeğer / özfonksiyon |
| Yok etme | $\hat{L}y=0$ | **7.12** — yok edici operatörler |

[KUTU]
**$\hat{L}y=0$ zaten tanıdık bir şey.** $\left(\hat{D}^{2}+2\hat{D}+1\right)e^{-x}=0$ sonucu, aslında "$e^{-x}$, $y''+2y'+y=0$ denkleminin bir çözümüdür" demenin başka bir yoludur.

Karakteristik denklem $r^{2}+2r+1=(r+1)^{2}=0$, katlı kök $r=-1$. Bölüm 3'ten biliyoruz ki çözümler $e^{-x}$ ve $xe^{-x}$'tir.

==Yani "operatörün yok ettiği fonksiyonlar" ile "homojen denklemin çözümleri" aynı kümedir.== Bu eşitlik, 7.12'deki yok edici yönteminin bütün dayanağıdır.
[/KUTU]

**Sağlama.** $\left(\hat{D}+1\right)^{2}$ gerçekten $xe^{-x}$'i de yok eder mi? Önce içteki çarpan:

$$\left(\hat{D}+1\right)xe^{-x}=\left(e^{-x}-xe^{-x}\right)+xe^{-x}=e^{-x}$$

Sonra dıştaki:

$$\left(\hat{D}+1\right)e^{-x}=-e^{-x}+e^{-x}=0\;\checkmark$$

İki adımda sıfırlandı — katlı kökün anlamı tam olarak budur.

---

[CLAUDE] Operatörü elle uygulamanın pratik yolu
Uzun uzun türev almak yerine ==$e^{ax}$ için kestirmeyi== kullanın:

$$\hat{D}e^{ax}=a\,e^{ax}\;\Longrightarrow\;\hat{L}\!\left(\hat{D}\right)e^{ax}=\hat{L}(a)\,e^{ax}$$

Yani **operatördeki her $\hat{D}$ yerine $a$ yazın, sonucu $e^{ax}$ ile çarpın.** Örnek 7.4 bir satıra iner:

- $\hat{L}(\hat{D})=\hat{D}^{2}+2\hat{D}+1$, &nbsp; $a=1$: &nbsp; $\hat{L}(1)=1+2+1=4\;\Rightarrow\;4e^{x}$ &#10003;
- $a=-1$: &nbsp; $\hat{L}(-1)=1-2+1=0\;\Rightarrow\;0$ &#10003;

**Ne zaman bozulur:** $\hat{L}(a)=0$ olduğunda ($e^{ax}$ zaten homojen çözümse). O durumda $y_{p}$ için $Ae^{ax}$ değil ==$Axe^{ax}$== denemek gerekir — 7.11'deki rezonans durumu.

$\sin$ ve $\cos$ için de aynı mantık $\hat{D}^{2}\to -\omega^{2}$ ile çalışır: $\hat{D}^{2}\sin\omega x=-\omega^{2}\sin\omega x$.
[/CLAUDE]

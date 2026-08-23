---
id: egzersizler-basamak
menu: 4.4 Egzersizler — Basamak Fonksiyonları
tip: sorular
baslik: 4.4 &nbsp;Egzersizler — Basamak ve Ötelenmiş Fonksiyonların Dönüşümü
---

Aşağıdaki fonksiyonların $\mathcal{L}\{f(t)\}$ dönüşümlerini bulunuz.

[KUTU]
**Bu setin çözüm anahtarı: "sıçrama kuralı".** 4.4'te kurduğumuz kalıp bütün basamak sorularını tek hamlede çözer:

> Her sıçrama noktası için bir $u_{a}$ terimi yaz; katsayısı ==o noktadaki sıçrama miktarı== olsun (yeni değer eksi eski değer).

Sonra $\mathcal{L}\{u_{a}\}=\dfrac{e^{-as}}{s}$ ile doğrudan yazılır.
[/KUTU]

[SORU] **1.** &nbsp; $f(t)=\begin{cases}0, & 0<t<6\\ 5, & t>6\end{cases}$
[CEVAP]
Tek sıçrama: $t=6$'da $0\to 5$, yani $+5$.

$$f(t)=5u_{6}(t)\;\Longrightarrow\;\boxed{\;\mathcal{L}\{f(t)\}=\frac{5e^{-6s}}{s}\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **3.** &nbsp; $f(t)=\begin{cases}4, & 0<t<6\\ 0, & t>6\end{cases}$
[CEVAP]
Sıçramalar: $t=0$'da $0\to 4$ ($+4$), $t=6$'da $4\to 0$ ($-4$).

$$f(t)=4u_{0}(t)-4u_{6}(t)$$

$u_{0}$'ın dönüşümü $\frac{1}{s}$ ($a=0$):

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{4}{s}\left(1-e^{-6s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **5.** &nbsp; $f(t)=\begin{cases}0, & 0<t<5\\ 2, & 5<t<7\\ 0, & t>7\end{cases}$
[CEVAP]
Dikdörtgen darbe — $t=5$'te aç ($+2$), $t=7$'de kapat ($-2$):

$$f(t)=2u_{5}(t)-2u_{7}(t)$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{2}{s}\left(e^{-5s}-e^{-7s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **7.** &nbsp; $f(t)=\begin{cases}1, & 0<t<2\\ 2, & 2<t<4\\ 3, & 4<t<6\\ 0, & t>6\end{cases}$
[CEVAP]
==Dört sıçrama var, dördünü de ayrı ayrı yazalım:==

| Nokta | Eski → Yeni | Sıçrama |
|---|---|---|
| $t=0$ | $0\to 1$ | $+1$ |
| $t=2$ | $1\to 2$ | $+1$ |
| $t=4$ | $2\to 3$ | $+1$ |
| $t=6$ | $3\to 0$ | $-3$ |

$$f(t)=u_{0}(t)+u_{2}(t)+u_{4}(t)-3u_{6}(t)$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{1+e^{-2s}+e^{-4s}-3e^{-6s}}{s}\;}$$

*Kitabın cevabıyla uyuşuyor.*

**Kontrol:** Katsayılar toplamı $1+1+1-3=0$ olmalı, çünkü fonksiyon $t\to\infty$ iken sıfıra dönüyor. ==Bu toplam sıfır çıkmıyorsa bir sıçramayı kaçırmışsınızdır.==

[SORU] **9.** &nbsp; $f(t)=\begin{cases}2, & 0<t<3\\ 0, & 3<t<6\\ 2, & t>6\end{cases}$
[CEVAP]
Sıçramalar: $t=0$'da $+2$, $t=3$'te $-2$, $t=6$'da $+2$.

$$f(t)=2u_{0}(t)-2u_{3}(t)+2u_{6}(t)$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{2\left(1-e^{-3s}+e^{-6s}\right)}{s}\;}$$

*Kitabın cevabıyla uyuşuyor.*

**Not:** Katsayılar toplamı $2-2+2=2\neq 0$; doğrusu bu, çünkü fonksiyon $t\to\infty$ iken $2$'ye gidiyor.

[SORU] **11.** &nbsp; $f(t)=\begin{cases}0, & 0<t<2\\ t, & t>2\end{cases}$
[CEVAP]
==Burada sabit değil, $t$'ye bağlı bir ifade var==; sıçrama kuralı yetmez, THEoREM 9.9 gerekir.

$t$'yi $t-2$ cinsinden yazalım: $\;t=(t-2)+2$

$$f(t)=u_{2}(t)\,g(t-2),\qquad g(t)=t+2$$

$$G(s)=\mathcal{L}\{t+2\}=\frac{1}{s^{2}}+\frac{2}{s}$$

$$\boxed{\;\mathcal{L}\{f(t)\}=e^{-2s}\left(\frac{1}{s^{2}}+\frac{2}{s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[SORU] **13.** &nbsp; $f(t)=\begin{cases}t, & 0<t<3\\ 3, & t>3\end{cases}$
[CEVAP]
Bu fonksiyon $t=3$'e kadar doğrusal artıyor, sonra sabitleniyor. ==Farkı düşünelim:== eğer hiç sabitlenmeseydi $t$ olarak devam edecekti; sabitlenmesi, $t=3$'ten sonra fazlalığın çıkarılması demektir.

$t>3$ için fazlalık $t-3$'tür:

$$f(t)=t-u_{3}(t)\,(t-3)$$

**Kontrol:** $t<3$ için $u_{3}=0$, geriye $t$ kalır $\checkmark$. &nbsp; $t>3$ için $t-(t-3)=3$ $\checkmark$

İkinci terim tam olarak $(9.78)$ biçimindedir ($g(t)=t$, $a=3$):

$$\mathcal{L}\{f(t)\}=\frac{1}{s^{2}}-e^{-3s}\cdot\frac{1}{s^{2}}$$

$$\boxed{\;\mathcal{L}\{f(t)\}=\frac{1}{s^{2}}\left(1-e^{-3s}\right)\;}$$

*Kitabın cevabıyla uyuşuyor.*

[KUTU]
**11 ile 13 arasındaki fark önemlidir.** 11'de fonksiyon $t=2$'den **sonra başlıyor**, o yüzden ifadeyi tümüyle $t-2$ cinsine çevirdik. 13'te ise fonksiyon baştan var ve $t=3$'te **davranış değiştiriyor**; bu yüzden "olsaydı" ifadesinden fazlalığı çıkardık.

==Sorulacak soru şu: fonksiyon $a$ noktasında mı başlıyor, yoksa orada mı değişiyor?==
[/KUTU]

---

### Çalışma soruları

Aşağıdakilerin cevapları cevap anahtarında verilmemiştir. ==Çözümleri size bırakıldı.==

**2.** &nbsp; $f(t)=\begin{cases}0, & 0<t<10\\ -3, & t>10\end{cases}$ &nbsp;&nbsp;&nbsp; **4.** &nbsp; $f(t)=\begin{cases}2, & 0<t<5\\ 0, & t>5\end{cases}$

**6.** &nbsp; $f(t)=\begin{cases}0, & 0<t<3\\ -6, & 3<t<9\\ 0, & t>9\end{cases}$

**8.** &nbsp; $f(t)=\begin{cases}9, & 0<t<5\\ 6, & 5<t<10\\ 3, & 10<t<15\\ 0, & t>15\end{cases}$

**10.** &nbsp; $f(t)=\begin{cases}4, & 0<t<5\\ 0, & 5<t<10\\ 3, & t>10\end{cases}$

**12.** &nbsp; $f(t)=\begin{cases}0, & 0<t<4\\ 3t, & t>4\end{cases}$ &nbsp;&nbsp;&nbsp; **14.** &nbsp; $f(t)=\begin{cases}2t, & 0<t<5\\ 10, & t>5\end{cases}$

[KUTU]
**Eşleştirme.** 2 ve 4 → soru 1 ve 3 ile aynı. 6 → soru 5 ile aynı (yalnızca katsayı negatif). 8 ve 10 → soru 7 ve 9 ile aynı, sıçrama tablosunu kurun. 12 → soru 11 ile aynı; $3t=3(t-4)+12$ yazın. 14 → soru 13 ile aynı; $t=5$'ten sonraki fazlalık $2t-10=2(t-5)$'tir.
[/KUTU]

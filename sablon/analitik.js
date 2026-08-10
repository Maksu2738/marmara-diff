/* ---- Ziyaret istatistikleri ------------------------------------------------
   Bu dosya yalnızca ders.txt içinde 'umami_id' doluysa siteye eklenir.

   Site tek sayfa olduğu için Umami varsayılan olarak her ziyareti tek bir
   sayfa görüntülemesi sayar; bu da "hangi konu okunuyor" ve "ne kadar kalındı"
   sorularını cevapsız bırakır. Burada iki şey yapılır:

     1. Okunan bölüm ayrı bir sayfa görüntülemesi olarak gönderilir
        (#bolum-5-1  ->  /bolum-5-1), böylece bölüm bazında rapor çıkar.
     2. Kullanıcı sayfada etkinken dakikada bir "okuma" olayı gönderilir,
        böylece ziyaret süresi tek bir ana takılı kalmaz.

   Umami yüklenmemişse (ayar kapalıysa ya da reklam engelleyici varsa) dosya
   sessizce hiçbir şey yapmaz — sayfanın çalışmasını hiçbir koşulda bozmaz.
   Çerez kullanılmaz, kişi kimliği toplanmaz; veriler anonim ve topludur.
--------------------------------------------------------------------------- */
(function () {
    var GECIKME    = 2000;          // bölüm bu kadar süre ekranda kalırsa sayılır
    var NABIZ_ARA  = 60000;         // okuma nabzı aralığı
    var NABIZ_SINIR = 120;          // en fazla nabız (~2 saat)
    var BOSTA      = 5 * 60000;     // bu süre hareketsizlik = okumuyor

    /* ---- Umami köprüsü ---- */

    function izleyiciHazir(is) {
        var deneme = 0;
        (function bak() {
            if (window.umami && typeof window.umami.track === 'function') return is();
            if (++deneme > 40) return;              // ~10 sn sonra vazgeç
            setTimeout(bak, 250);
        })();
    }

    function gonder(veri, ek) {
        if (!window.umami || typeof window.umami.track !== 'function') return;
        try {
            if (ek === undefined) window.umami.track(veri);
            else window.umami.track(veri, ek);
        } catch (e) {
            /* analitik hiçbir zaman sayfayı bozmasın */
        }
    }

    function sayfaGor(yol, baslik) {
        gonder(function (varsayilan) {
            varsayilan.url = yol;
            if (baslik) varsayilan.title = baslik;
            return varsayilan;
        });
    }

    /* ---- Bölümler ---- */

    function baslikBul(el) {
        var t = el.querySelector('.section-title');
        if (!t) return el.id;
        var kopya = t.cloneNode(true);
        var rozet = kopya.querySelector('.badge');
        if (rozet) rozet.remove();
        return kopya.textContent.replace(/\s+/g, ' ').trim() || el.id;
    }

    function bolumleriTopla() {
        // Sidebar'daki menü yazısı en okunaklı başlıktır; yoksa bölüm başlığı
        var menu = {};
        Array.prototype.forEach.call(document.querySelectorAll('.sidebar-nav a'), function (a) {
            var href = a.getAttribute('href') || '';
            if (href.charAt(0) === '#') menu[href.slice(1)] = a.textContent.replace(/\s+/g, ' ').trim();
        });

        return Array.prototype.map.call(document.querySelectorAll('.section[id]'), function (el) {
            return { el: el, id: el.id, baslik: menu[el.id] || baslikBul(el) };
        });
    }

    /* ---- Kurulum ---- */

    izleyiciHazir(function () {
        var bolumler = bolumleriTopla();
        if (!bolumler.length) return;

        var aktif = null, bekleyen = null, zamanlayici = null;

        function isaretle(kayit) {
            if (!kayit || kayit === aktif || kayit === bekleyen) return;
            bekleyen = kayit;
            clearTimeout(zamanlayici);
            zamanlayici = setTimeout(function () {
                aktif = bekleyen;
                bekleyen = null;
                sayfaGor('/' + aktif.id, aktif.baslik);
            }, GECIKME);
        }

        // Scroll-spy ile aynı sınırlar: sidebar'da vurgulanan bölüm sayılır
        var gozlemci = new IntersectionObserver(function (girisler) {
            girisler.forEach(function (giris) {
                if (!giris.isIntersecting) return;
                for (var i = 0; i < bolumler.length; i++) {
                    if (bolumler[i].el === giris.target) {
                        isaretle(bolumler[i]);
                        return;
                    }
                }
            });
        }, { rootMargin: '-10% 0px -80% 0px' });

        bolumler.forEach(function (k) { gozlemci.observe(k.el); });

        /* ---- Okuma nabzı: ziyaret süresini ölçer ---- */

        var sonHareket = Date.now();
        var sayac = 0;

        ['scroll', 'keydown', 'click', 'mousemove', 'touchstart'].forEach(function (olay) {
            window.addEventListener(olay, function () { sonHareket = Date.now(); }, { passive: true });
        });

        var nabiz = setInterval(function () {
            if (sayac >= NABIZ_SINIR) return clearInterval(nabiz);
            if (document.hidden || Date.now() - sonHareket > BOSTA) return;
            sayac++;
            gonder('okuma', { bolum: aktif ? aktif.id : 'giris' });
        }, NABIZ_ARA);
    });
})();

/* =====================================================================
   ARAMA
   ---------------------------------------------------------------------
   Ayni denklemin uc ayri yazimi var:

       kaynak LaTeX    y^{\prime\prime}-6y^{\prime}+25y=0
       ekranda basili  y''-6y'+25y=0        (unicode tirnak ve eksi)
       kullanicinin    y''-6y'+25y=0

   normalize() ucunu de ayni bicime indirger. Bu fonksiyon arama.py'daki
   Python ikizinin birebir karsiligidir -- biri degisirse oteki de
   degismeli, yoksa indeks ile sorgu tutmaz.
   ===================================================================== */
(function () {
    'use strict';

    var ATILACAK = {
        left: 1, right: 1, displaystyle: 1, quad: 1, qquad: 1, nbsp: 1,
        cdot: 1, times: 1, bigl: 1, bigr: 1, biggl: 1, biggr: 1, boxed: 1,
        underbrace: 1, overbrace: 1, text: 1, mathrm: 1, operatorname: 1,
        begin: 1, end: 1, array: 1, cases: 1, strong: 1, em: 1,
        checkmark: 1, ldots: 1, cdots: 1, dots: 1, hspace: 1, vspace: 1,
        tag: 1, label: 1, mathcal: 1, mathbf: 1, mathbb: 1, mathfrak: 1,
        nolimits: 1, limits: 1
    };

    var KARSILIK = {
        prime: "'", to: '->', Longrightarrow: '=>', Rightarrow: '=>',
        leq: 'le', geq: 'ge', neq: 'ne'
    };

    var SEMBOL = {
        'π': 'pi', 'α': 'alpha', 'β': 'beta', 'λ': 'lambda',
        'θ': 'theta', 'ω': 'omega', 'μ': 'mu', 'τ': 'tau',
        'δ': 'delta', 'Δ': 'delta', 'Σ': 'sum', '∫': 'int',
        '√': 'sqrt', '∞': 'infty', '∂': 'partial',
        '′': "'", '″': "''", '‴': "'''",
        '−': '-', '≤': 'le', '≥': 'ge', '≠': 'ne',
        '→': '->', '⇒': '=>', '·': ''
    };

    var TR = {
        'ı': 'i', 'İ': 'i', 'ş': 's', 'Ş': 's',
        'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u',
        'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c'
    };

    function normalize(metin) {
        var t = String(metin).toLowerCase(), k;

        for (k in SEMBOL) { if (t.indexOf(k) >= 0) t = t.split(k).join(SEMBOL[k]); }
        for (k in TR) { if (t.indexOf(k) >= 0) t = t.split(k).join(TR[k]); }

        t = t.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;|&#\d+;/g, ' ');

        for (var i = 0; i < 3; i++) {
            var y = t.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, '$1/$2');
            if (y === t) { break; }
            t = y;
        }

        t = t.replace(/([_^])\{([^{}]*)\}/g, '$1$2');

        t = t.replace(/\\([a-zA-Z]+)/g, function (tam, ad) {
            if (ATILACAK[ad]) { return ' '; }
            return KARSILIK[ad] !== undefined ? KARSILIK[ad] : ad;
        });

        t = t.split("^'").join("'");
        t = t.replace(/[{}$\\&~*_]/g, ' ');
        return t.replace(/\s+/g, ' ').trim();
    }

    /* ---- arama ---- */

    function ara(sorgu, kayitlar) {
        var q = normalize(sorgu);
        if (q.length < 2) { return []; }
        var qs = q.replace(/\s+/g, '');
        var sonuc = [];

        // Kisa ve tamamen harflerden olusan sorgular ("pi", "us") duz alt
        // dizi aramasinda "kapi", "tipi", "musait" gibi kelimelerin icine
        // takiliyor. Bu durumda kelime siniri sart kosuluyor.
        var kelimeSarti = null;
        if (q.length <= 3 && /^[a-z]+$/.test(q)) {
            kelimeSarti = new RegExp('(^|[^a-z0-9])' + q + '([^a-z0-9]|$)');
        }

        for (var i = 0; i < kayitlar.length; i++) {
            var kayit = kayitlar[i];
            if (kelimeSarti && !kelimeSarti.test(kayit.m)) { continue; }
            var yer = kayit.m.indexOf(q);
            var puan;

            if (yer >= 0) {
                puan = 100 - Math.min(yer, 900) / 10;
            } else {
                // Matematikte bosluk yerlesimi kaynakla kullanicida tutmaz:
                // "sin^2 at" ile "sin^2at" ayni sey sayilmali.
                var yer2 = kayit.m.replace(/\s+/g, '').indexOf(qs);
                if (yer2 < 0) { continue; }
                yer = -1;
                puan = 60 - Math.min(yer2, 900) / 10;
            }

            if (normalize(kayit.t).indexOf(q) >= 0) { puan += 60; }

            sonuc.push({ k: kayit, puan: puan, yer: yer });
        }

        sonuc.sort(function (a, b) { return b.puan - a.puan; });
        return sonuc.slice(0, 40);
    }

    function parcaCikar(metin, yer, q) {
        if (yer < 0) { return ''; }
        var bas = Math.max(0, yer - 40);
        var son = Math.min(metin.length, yer + q.length + 55);
        return (bas > 0 ? '…' : '') + metin.slice(bas, son) +
               (son < metin.length ? '…' : '');
    }

    function kacir(s) {
        return String(s).replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
    }

    /* ---- arayuz ---- */

    function kur() {
        var kutu = document.getElementById('arama-kutu');
        var sonucKutu = document.getElementById('arama-sonuc');
        var temizle = document.getElementById('arama-temizle');
        var palet = document.getElementById('arama-palet');
        var ipucu = document.getElementById('arama-ipucu');
        var liste = document.querySelector('.sidebar-nav');
        if (!kutu || !sonucKutu || !window.ARAMA) { return; }

        var bolumListesi = [].slice.call(liste.children).filter(function (e) {
            return e.id !== 'arama-sonuc';
        });

        function listeyiGoster(goster) {
            bolumListesi.forEach(function (e) { e.hidden = !goster; });
            sonucKutu.hidden = goster;
        }

        function ciz(sorgu) {
            if (!sorgu.trim()) {
                listeyiGoster(true);
                temizle.hidden = true;
                ipucu.textContent = '';
                return;
            }
            temizle.hidden = false;
            var q = normalize(sorgu);
            var bulunan = ara(sorgu, window.ARAMA);

            ipucu.textContent = bulunan.length
                ? bulunan.length + ' sonuç'
                : 'sonuç yok';

            if (!bulunan.length) {
                sonucKutu.innerHTML =
                    '<p class="arama-bos">Sonuç bulunamadı.<br>' +
                    '<small>Matematiği sade yazın: ' +
                    '<code>y&#39;&#39;</code>, <code>dy/dx</code>, ' +
                    '<code>sin^2</code>, <code>L{</code></small></p>';
                listeyiGoster(false);
                return;
            }

            sonucKutu.innerHTML = bulunan.map(function (r) {
                var p = parcaCikar(r.k.m, r.yer, q);
                return '<a href="#' + r.k.i + '" class="arama-sonuc-satir">' +
                       '<span class="arama-bolum">' + kacir(r.k.b) + '</span>' +
                       '<span class="arama-baslik">' + kacir(r.k.t) + '</span>' +
                       (p ? '<span class="arama-parca">' + kacir(p) + '</span>' : '') +
                       '</a>';
            }).join('');
            listeyiGoster(false);
        }

        var zaman;
        kutu.addEventListener('input', function () {
            clearTimeout(zaman);
            var v = kutu.value;
            zaman = setTimeout(function () { ciz(v); }, 120);
        });

        temizle.addEventListener('click', function () {
            kutu.value = '';
            ciz('');
            kutu.focus();
        });

        // Palet: imlecin bulundugu yere metin sokar
        palet.addEventListener('click', function (e) {
            var b = e.target;
            while (b && b !== palet && !b.getAttribute('data-ek')) { b = b.parentNode; }
            if (!b || b === palet) { return; }
            var ek = b.getAttribute('data-ek');
            var bas = kutu.selectionStart;
            var son = kutu.selectionEnd;
            if (bas === null || bas === undefined) { bas = son = kutu.value.length; }
            kutu.value = kutu.value.slice(0, bas) + ek + kutu.value.slice(son);
            var yeni = bas + ek.length;
            kutu.focus();
            try { kutu.setSelectionRange(yeni, yeni); } catch (hata) { /* yoksay */ }
            ciz(kutu.value);
        });

        sonucKutu.addEventListener('click', function (e) {
            var a = e.target;
            while (a && a !== sonucKutu && a.tagName !== 'A') { a = a.parentNode; }
            if (a && a.tagName === 'A' && window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('open');
                document.querySelector('.sidebar-overlay').classList.remove('open');
            }
        });

        // "/" arama kutusuna atlar, Esc temizler
        document.addEventListener('keydown', function (e) {
            var yaziyor = /^(INPUT|TEXTAREA|SELECT)$/.test(
                document.activeElement.tagName);
            if (e.key === '/' && !yaziyor) {
                e.preventDefault();
                kutu.focus();
                kutu.select();
            } else if (e.key === 'Escape' && document.activeElement === kutu) {
                kutu.value = '';
                ciz('');
                kutu.blur();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', kur);
    } else {
        kur();
    }
})();

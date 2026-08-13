/* ==========================================================================
   Ders Notları — etkileşim katmanı

   Apple'ın "Designing Fluid Interfaces" ilkeleri:
     · Her hareket YAY ile sürülür; sabit süreli geçiş yok.
     · Yay her an kesilebilir ve geri çevrilebilir — yeni hareket, ekranda
       o an görünen değerden ve o anki hızdan başlar.
     · Parmak bırakıldığında hız yaya devredilir; varış noktası momentumun
       gittiği yere göre kestirilir.
     · Sınırda sert duruş yok; lastik gibi artan direnç var.
     · prefers-reduced-motion açıksa yay atlanır, değer doğrudan konur.
   ========================================================================== */

/* ================= YAY MOTORU ================= */

var Motion = (function () {
    var anims = Object.create(null);
    var raf = null;
    var last = 0;

    var azHareket = window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;

    function reduced() { return !!(azHareket && azHareket.matches); }

    function schedule() {
        if (raf !== null) return;
        last = 0;
        raf = requestAnimationFrame(tick);
    }

    function tick(now) {
        raf = null;
        if (!last) last = now - 16;
        /* Sekme arka plandayken biriken süre tek karede boşalmasın */
        var dt = Math.min((now - last) / 1000, 1 / 20);
        last = now;

        var yasayan = false;
        for (var key in anims) {
            var a = anims[key];
            step(a, dt, now);
            a.update(a.x, a);
            if (a.bitti) {
                delete anims[key];
                if (a.finish) a.finish();
            } else {
                yasayan = true;
            }
        }
        if (yasayan) schedule();
    }

    /* Apple'ın iki parametresi:
         damping  — 1.0 kritik sönüm (aşma yok), <1 yaylanma
         response — hedefe varış hızı (saniye); "süre" değildir
       Fizik karşılığı: omega = 2pi/response, k = omega^2, c = 2*damping*omega */
    function step(a, dt, now) {
        /* Kare hızı çok düşükse (ör. zayıf cihaz) dt kırpması hareketi
           ağır çekime çevirir. Gerçek zamanda beklenenin çok üstüne
           çıkarsa hedefe otur — hareket asla sürünmesin. */
        if (a.t0 && now - a.t0 > a.response * 3000 + 400) {
            a.x = a.to;
            a.v = 0;
            a.bitti = true;
            return;
        }

        var omega = 2 * Math.PI / a.response;
        var k = omega * omega;
        var c = 2 * a.damping * omega;

        var adim = Math.max(1, Math.ceil(dt * 240));
        var h = dt / adim;
        for (var i = 0; i < adim; i++) {
            var ivme = -k * (a.x - a.to) - c * a.v;
            a.v += ivme * h;
            a.x += a.v * h;
        }

        if (Math.abs(a.x - a.to) < a.eps && Math.abs(a.v) < a.eps * 14) {
            a.x = a.to;
            a.v = 0;
            a.bitti = true;
        }
    }

    return {
        /* Aynı anahtarla tekrar çağrılırsa hareket KESİLMEZ, yeniden
           hedeflenir: konum ve hız korunur, böylece sıçrama olmaz (§3). */
        spring: function (key, o) {
            var a = anims[key];
            if (a) {
                a.to = o.to;
                a.bitti = false;
                a.t0 = performance.now();   /* yeni niyet → yeni süre payı */
                if (o.damping != null) a.damping = o.damping;
                if (o.response != null) a.response = o.response;
                if (o.velocity != null) a.v = o.velocity;
                if (o.eps != null) a.eps = o.eps;
                a.update = o.update;
                a.finish = o.finish;
            } else {
                a = anims[key] = {
                    x: o.from,
                    v: o.velocity || 0,
                    to: o.to,
                    damping: o.damping == null ? 1 : o.damping,
                    response: o.response || 0.35,
                    eps: o.eps == null ? 0.4 : o.eps,
                    update: o.update,
                    finish: o.finish,
                    bitti: false,
                    t0: performance.now()
                };
            }

            if (reduced()) {
                delete anims[key];
                a.x = a.to;
                a.v = 0;
                a.update(a.x, a);
                if (a.finish) a.finish();
                return;
            }
            schedule();
        },

        /* Ekranda o an görünen değer — kesme için gerekli */
        get: function (key) { return anims[key] || null; },

        stop: function (key) {
            var a = anims[key];
            delete anims[key];
            return a;
        },

        /* Momentumun götüreceği yer — kaydırma yavaşlamasının aynısı (§6) */
        project: function (hiz, oran) {
            oran = oran == null ? 0.998 : oran;
            return (hiz / 1000) * oran / (1 - oran);
        },

        /* Sınırın ötesinde artan direnç (§9) */
        rubber: function (asim, boyut, sabit) {
            sabit = sabit == null ? 0.55 : sabit;
            return (asim * boyut * sabit) / (boyut + sabit * Math.abs(asim));
        },

        reduced: reduced
    };
})();

function kis(v, a, b) { return v < a ? a : (v > b ? b : v); }


/* ================= AÇILIR KAPANIR ALANLAR ================= */
/* Yükseklik yay ile sürülür. Açılırken/kapanırken her an yakalanıp geri
   çevrilebilir; yeni hareket o anki yükseklikten başlar. Tıklama momentum
   taşımadığı için kritik sönüm (aşma yok) kullanılır. */

var _acKapaSayac = 0;

function _anahtar(el) {
    if (!el._mk) el._mk = 'ac' + (++_acKapaSayac);
    return el._mk;
}

function _tamYukseklik(el) {
    var onceki = el.style.height;
    el.style.height = 'auto';
    var h = el.scrollHeight;
    el.style.height = onceki;
    return h;
}

function acKapa(el, ac, sinif, ilerleme) {
    var key = _anahtar(el);
    var canli = Motion.get(key);
    var tam = _tamYukseklik(el);
    var bas = canli ? canli.x : el.getBoundingClientRect().height;
    var son = ac ? tam : 0;

    if (sinif) el.classList.toggle(sinif, ac);
    el.style.height = bas + 'px';

    function bildir(h) {
        if (ilerleme) ilerleme(tam > 0 ? kis(h / tam, 0, 1) : (ac ? 1 : 0));
    }

    Motion.spring(key, {
        from: bas,
        to: son,
        damping: 1,          /* tıklama momentum taşımaz → aşma yok (§4) */
        response: 0.34,
        eps: 0.5,
        update: function (v) {
            var h = v < 0 ? 0 : v;
            el.style.height = h + 'px';
            bildir(h);
        },
        finish: function () {
            el.style.height = '';   /* sınıf devralır: auto ya da 0 */
            bildir(ac ? tam : 0);
        }
    });
}


/* ---- Cevap göster / gizle ---- */

/* Yükseklik animasyonu için iç sarmalayıcı (dolgu orada durur ki kutu
   sıfır yüksekliğe gerçekten inebilsin). Eski parçalarda yok — ilk
   açılışta bir kez eklenir. */
function _cevapIci(cevap) {
    var ic = cevap.firstElementChild;
    if (ic && ic.className === 'answer-inner') return ic;
    ic = document.createElement('div');
    ic.className = 'answer-inner';
    while (cevap.firstChild) ic.appendChild(cevap.firstChild);
    cevap.appendChild(ic);
    return ic;
}

function toggleAnswer(btn) {
    var cevap = btn.parentElement.querySelector('.answer');
    if (!cevap) return;
    _cevapIci(cevap);

    var ac = !cevap.classList.contains('visible');
    btn.textContent = ac ? 'Cevabı Gizle' : 'Cevabı Göster';
    btn.setAttribute('aria-expanded', ac ? 'true' : 'false');

    acKapa(cevap, ac, 'visible', function (p) {
        /* İçerik yükseklikle birlikte belirir — tek bir hareket gibi */
        cevap.style.opacity = p < 1 ? p.toFixed(3) : '';
    });
}


/* ---- Sidebar bölüm aç / kapa ---- */

function toggleChapter(btn) {
    var liste = btn.nextElementSibling;
    if (!liste) return;

    var ac = !btn.classList.contains('open');
    btn.classList.toggle('open', ac);
    btn.setAttribute('aria-expanded', ac ? 'true' : 'false');

    acKapa(liste, ac, 'open', function (p) {
        /* Ok, listenin anlık yüksekliğiyle aynı fizikle döner */
        if (p > 0 && p < 1) btn.style.setProperty('--p', p.toFixed(3));
        else btn.style.removeProperty('--p');
    });
}

function _bolumuAc(liste) {
    if (liste.classList.contains('open')) return;
    var btn = liste.previousElementSibling;
    if (btn && btn.classList.contains('chapter-toggle')) toggleChapter(btn);
}


/* ================= MOBİL KENAR ÇUBUĞU (sürüklenebilir çekmece) ================= */

var Sidebar = (function () {
    var el = document.querySelector('.sidebar');
    var perde = document.querySelector('.sidebar-overlay');
    var hamburger = document.querySelector('.hamburger');
    if (!el || !perde) return { toggle: function () {}, close: function () {} };

    var W = 0;
    var acik = false;
    var surukle = null;

    function mobil() { return window.innerWidth <= 768; }
    function genislik() { return el.getBoundingClientRect().width || 280; }

    /* x: -W (kapalı) … 0 (açık) — tek eksen, tek yay */
    function uygula(x) {
        var w = W || genislik();
        el.style.setProperty('--sx', Math.round(x * 100) / 100 + 'px');
        perde.style.setProperty('--ov', kis(1 + x / w, 0, 1).toFixed(3));
    }

    function durumaYaz(a) {
        acik = a;
        el.classList.toggle('open', a);
        perde.classList.toggle('on', a);
        if (hamburger) hamburger.setAttribute('aria-expanded', a ? 'true' : 'false');
        document.body.style.overflow = a && mobil() ? 'hidden' : '';
    }

    function git(a, hiz, baslangic) {
        W = genislik();
        var canli = Motion.get('sidebar');
        var bas = baslangic != null ? baslangic
                : canli ? canli.x
                : (acik ? 0 : -W);
        durumaYaz(a);
        Motion.spring('sidebar', {
            from: bas,
            to: a ? 0 : -W,
            /* Çekmece: hafif yaylanma — hareket momentum taşır (§4 tablosu) */
            damping: 0.85,
            response: 0.3,
            velocity: hiz || 0,
            eps: 0.5,
            update: uygula,
            finish: function () { uygula(a ? 0 : -W); }
        });
    }

    /* ---- Jest ---- */

    function hizHesapla(gecmis) {
        if (gecmis.length < 2) return 0;
        var son = gecmis[gecmis.length - 1];
        var ilk = gecmis[0];
        for (var i = gecmis.length - 2; i >= 0; i--) {
            ilk = gecmis[i];
            if (son.t - ilk.t >= 30) break;
        }
        var dt = (son.t - ilk.t) / 1000;
        return dt > 0 ? (son.x - ilk.x) / dt : 0;
    }

    document.addEventListener('pointerdown', function (e) {
        if (!mobil() || surukle) return;

        if (acik) {
            if (!el.contains(e.target) && e.target !== perde) return;
        } else {
            /* Kapalıyken yalnız sol kenardan parmakla çekilir */
            if (e.pointerType === 'mouse' || e.clientX > 24) return;
        }

        W = genislik();
        surukle = {
            id: e.pointerId,
            x0: e.clientX,
            y0: e.clientY,
            taban: acik ? 0 : -W,
            x: acik ? 0 : -W,
            etkin: false,
            gecmis: [{ x: e.clientX, t: performance.now() }]
        };
    }, { passive: true });

    document.addEventListener('pointermove', function (e) {
        if (!surukle || e.pointerId !== surukle.id) return;

        var dx = e.clientX - surukle.x0;
        var dy = e.clientY - surukle.y0;

        surukle.gecmis.push({ x: e.clientX, t: performance.now() });
        if (surukle.gecmis.length > 6) surukle.gecmis.shift();

        if (!surukle.etkin) {
            /* ~10px histerezis; dikey niyet belirdiyse jesti bırak (§10) */
            if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
            if (Math.abs(dx) <= Math.abs(dy)) { surukle = null; return; }
            surukle.etkin = true;
            surukle.x0 = e.clientX;      /* yakalama noktası korunur (§2) */
            Motion.stop('sidebar');
            dx = 0;
        }

        var x = surukle.taban + dx;
        if (x > 0) x = Motion.rubber(x, W);                       /* açık sınırı */
        else if (x < -W) x = -W - Motion.rubber(-W - x, W);       /* kapalı sınırı */

        surukle.x = x;
        uygula(x);                       /* 1:1 takip — bekleme yok (§1, §2) */
    }, { passive: true });

    function birak() {
        if (!surukle) return;
        var d = surukle;
        surukle = null;
        if (!d.etkin) return;

        var hiz = hizHesapla(d.gecmis);
        /* Bırakılan yerin en yakınına değil, momentumun GİTTİĞİ yere bak (§6) */
        var varis = d.x + Motion.project(hiz);
        git(varis > -W / 2, hiz, d.x);   /* hız yaya devredilir (§5) */
    }

    document.addEventListener('pointerup', birak, { passive: true });
    document.addEventListener('pointercancel', birak, { passive: true });

    /* Perdeye dokunmak kapatır (sürüklemeden sonra tıklama gelmez) */
    perde.addEventListener('click', function () { git(false); });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && acik) git(false);
    });

    window.addEventListener('resize', function () {
        W = genislik();
        if (!mobil() && acik) durumaYaz(false);
        if (mobil()) uygula(acik ? 0 : -W);
    });

    return {
        toggle: function () { git(!acik); },
        close: function () { if (acik) git(false); },
        acik: function () { return acik; }
    };
})();

function toggleSidebar() { Sidebar.toggle(); }


/* ================= ÜST ÇUBUK — kaydırma kenarı ================= */
/* Sayfa başlığı yukarı çıktıkça çubuktaki kompakt başlık belirir ve
   içeriğin üstünde yumuşak bir kenar gölgesi açılır (sert 1px çizgi yok). */

(function () {
    var cubuk = document.querySelector('.topbar');
    var hero = document.querySelector('.hero');
    if (!cubuk) return;

    var bekliyor = false;
    var bas = 8, bit = 52;

    function olc() {
        var h = cubuk.offsetHeight || 54;
        if (hero) {
            bas = Math.max(4, hero.offsetTop + hero.offsetHeight - h - 36);
            bit = bas + 44;
        }
    }

    function guncelle() {
        bekliyor = false;
        var y = window.pageYOffset || document.documentElement.scrollTop;
        var p = kis((y - bas) / (bit - bas), 0, 1);
        cubuk.style.setProperty('--scrolled', p.toFixed(3));
    }

    function kaydi() {
        if (bekliyor) return;
        bekliyor = true;
        requestAnimationFrame(guncelle);
    }

    window.addEventListener('scroll', kaydi, { passive: true });
    window.addEventListener('resize', function () { olc(); kaydi(); });
    window.addEventListener('load', function () { olc(); guncelle(); });
    olc();
    guncelle();
})();


/* ================= SCROLL-SPY ================= */

(function () {
    var linkler = Array.prototype.slice.call(document.querySelectorAll('.sidebar-nav a'));
    var nav = document.querySelector('.sidebar-nav');
    var ciftler = [];

    linkler.forEach(function (link) {
        var href = link.getAttribute('href');
        if (!href || href.charAt(0) !== '#') return;
        var el = document.getElementById(href.slice(1));
        if (el) ciftler.push({ el: el, link: link });
    });

    if (!ciftler.length) return;

    var etkin = null;

    function isaretle(link, kaydir) {
        if (etkin === link) return;
        if (etkin) etkin.classList.remove('active');
        etkin = link;
        link.classList.add('active');

        var liste = link.closest ? link.closest('.chapter-links') : null;
        if (liste) _bolumuAc(liste);

        /* Etkin link görüş alanının dışına düştüyse kenar çubuğunu kaydır —
           kullanıcı kenar çubuğunu elle gezerken araya girme */
        if (kaydir && nav && !Sidebar.acik()) {
            var l = link.getBoundingClientRect();
            var n = nav.getBoundingClientRect();
            if (l.top < n.top + 8 || l.bottom > n.bottom - 8) {
                link.scrollIntoView({ block: 'nearest', behavior: Motion.reduced() ? 'auto' : 'smooth' });
            }
        }
    }

    var cubukYuksekligi = (document.querySelector('.topbar') || {}).offsetHeight || 54;

    var gozlemci = new IntersectionObserver(function (girisler) {
        /* Çubuğun hemen altındaki ince şeride giren en üstteki bölüm etkindir */
        var enIyi = null;
        girisler.forEach(function (g) {
            if (!g.isIntersecting) return;
            if (!enIyi || g.boundingClientRect.top < enIyi.boundingClientRect.top) enIyi = g;
        });
        if (!enIyi) return;
        for (var i = 0; i < ciftler.length; i++) {
            if (ciftler[i].el === enIyi.target) { isaretle(ciftler[i].link, true); break; }
        }
    }, { rootMargin: '-' + (cubukYuksekligi + 12) + 'px 0px -72% 0px' });

    ciftler.forEach(function (c) { gozlemci.observe(c.el); });

    linkler.forEach(function (link) {
        link.addEventListener('click', function (e) {
            Sidebar.close();
            isaretle(link, false);

            var href = link.getAttribute('href');
            var hedef = href && href.charAt(0) === '#'
                ? document.getElementById(href.slice(1)) : null;
            if (!hedef) return;

            e.preventDefault();
            var y = window.pageYOffset || document.documentElement.scrollTop;
            var hedefY = hedef.getBoundingClientRect().top + y - (cubukYuksekligi + 12);

            /* Uzak hedefe yumuşak gitmek takılır — orada anında atla */
            var uzak = Math.abs(hedefY - y) > window.innerHeight * 3;
            window.scrollTo({
                top: hedefY,
                behavior: (uzak || Motion.reduced()) ? 'auto' : 'smooth'
            });

            if (history.replaceState) history.replaceState(null, '', href);
        });
    });
})();


/* ================= GECE MODU ================= */

function toggleDarkMode() {
    /* Ani parlaklık sıçraması yerine kısa bir geçiş (§14) */
    document.body.classList.add('theme-anim');

    var karanlik = document.body.classList.toggle('dark-mode');
    try { localStorage.setItem('theme', karanlik ? 'dark' : 'light'); } catch (e) {}
    temaArayuzu(karanlik);

    setTimeout(function () { document.body.classList.remove('theme-anim'); }, 320);
}

function temaArayuzu(karanlik) {
    var ikon = document.getElementById('theme-icon');
    var yazi = document.getElementById('theme-text');
    if (ikon) ikon.textContent = karanlik ? '☀️' : '🌙';
    if (yazi) yazi.textContent = karanlik ? 'Gündüz Modu' : 'Gece Modu';

    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (meta) meta.setAttribute('content', karanlik ? '#0e0c14' : '#f6f5fb');
}

(function temaBasla() {
    var kayitli = null;
    try { kayitli = localStorage.getItem('theme'); } catch (e) {}
    var sistem = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var karanlik = kayitli === 'dark' || (!kayitli && sistem);

    if (karanlik) document.body.classList.add('dark-mode');
    document.documentElement.classList.remove('pre-dark');
    temaArayuzu(karanlik);
})();

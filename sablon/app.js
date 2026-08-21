/* ---- Cevap göster / gizle ---- */
function toggleAnswer(btn) {
    var answer = btn.parentElement.querySelector('.answer');
    if (!answer) return;
    var isVisible = answer.classList.contains('visible');
    answer.classList.toggle('visible');
    btn.textContent = isVisible ? 'Cevabı Göster' : 'Cevabı Gizle';
}

/* ---- Sidebar bölüm aç / kapa ---- */
function toggleChapter(btn) {
    btn.classList.toggle('open');
    var list = btn.nextElementSibling;
    if (list) list.classList.toggle('open');
}

/* ---- Mobil sidebar ---- */
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.querySelector('.sidebar-overlay').classList.toggle('open');
}

/* ---- Scroll-spy: aktif bölümü sidebar'da vurgula ---- */
(function () {
    var links = Array.prototype.slice.call(document.querySelectorAll('.sidebar-nav a'));
    var pairs = [];

    links.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href && href.charAt(0) === '#') {
            var el = document.querySelector(href);
            if (el) pairs.push({ el: el, link: link });
        }
    });

    if (!pairs.length) return;

    function setActive(link) {
        links.forEach(function (l) { l.classList.remove('active'); });
        link.classList.add('active');

        // Aktif linkin bölümü kapalıysa aç
        var list = link.closest('.chapter-links');
        if (list && !list.classList.contains('open')) {
            list.classList.add('open');
            var toggle = list.previousElementSibling;
            if (toggle) toggle.classList.add('open');
        }
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            pairs.forEach(function (p) {
                if (p.el === entry.target) setActive(p.link);
            });
        });
    }, { rootMargin: '-10% 0px -80% 0px' });

    pairs.forEach(function (p) { observer.observe(p.el); });

    // Linke tıklanınca: bölümü aç, mobilde menüyü kapat
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            setActive(link);
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('open');
                document.querySelector('.sidebar-overlay').classList.remove('open');
            }
        });
    });
})();

/* ---- Gece Modu (Dark Mode) ---- */
function toggleDarkMode() {
    var isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeUI(isDark);
}

function updateThemeUI(isDark) {
    var icon = document.getElementById('theme-icon');
    var text = document.getElementById('theme-text');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    if (text) text.textContent = isDark ? 'Gündüz Modu' : 'Gece Modu';
}

// Sayfa yüklendiğinde temayı hatırla / sistem tercihini uygula
(function initTheme() {
    var savedTheme = localStorage.getItem('theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
    updateThemeUI(isDark);
})();

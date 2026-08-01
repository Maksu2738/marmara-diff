/* =====================================================================
   MATRİS HESAP MAKİNESİ
   ===================================================================== */

/* ---- Sayı ayrıştırma (ondalık veya kesir) ---- */
function parseNum(str) {
    str = (str || '').toString().trim().replace(',', '.');
    if (str === '' || str === '-') return 0;
    if (str.indexOf('/') !== -1) {
        var p = str.split('/');
        var num = parseFloat(p[0]);
        var den = parseFloat(p[1]);
        if (isNaN(num) || isNaN(den) || den === 0) return NaN;
        return num / den;
    }
    var v = parseFloat(str);
    return isNaN(v) ? NaN : v;
}

/* ---- Sayıyı temiz göster ---- */
function fmt(x) {
    if (Math.abs(x) < 1e-10) x = 0;
    var r = Math.round(x * 1e6) / 1e6;
    if (Object.is(r, -0)) r = 0;
    return (r % 1 === 0) ? r.toString() : r.toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
}

/* ---- Giriş ızgarası oluştur ---- */
function buildMatrix(which) {
    var rows = parseInt(document.getElementById(which + '-rows').value, 10);
    var cols = parseInt(document.getElementById(which + '-cols').value, 10);
    var container = document.getElementById(which + '-inputs');
    var old = {};
    container.querySelectorAll('input').forEach(function (inp) {
        old[inp.dataset.pos] = inp.value;
    });
    container.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
    var html = '';
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var pos = i + '_' + j;
            var val = old[pos] !== undefined ? old[pos] : '0';
            html += '<input type="text" data-pos="' + pos + '" value="' + val + '">';
        }
    }
    container.innerHTML = html;
}

/* ---- Izgaradan matris oku ---- */
function readMatrix(which) {
    var rows = parseInt(document.getElementById(which + '-rows').value, 10);
    var cols = parseInt(document.getElementById(which + '-cols').value, 10);
    var container = document.getElementById(which + '-inputs');
    var m = [];
    for (var i = 0; i < rows; i++) { m.push([]); for (var j = 0; j < cols; j++) m[i].push(0); }
    var bad = false;
    container.querySelectorAll('input').forEach(function (inp) {
        var p = inp.dataset.pos.split('_');
        var v = parseNum(inp.value);
        if (isNaN(v)) bad = true;
        m[+p[0]][+p[1]] = v;
    });
    return bad ? null : m;
}

/* ---- Matrisi köşeli parantezli HTML olarak göster ---- */
function matrixHTML(m) {
    var body = '<table>';
    for (var i = 0; i < m.length; i++) {
        body += '<tr>';
        for (var j = 0; j < m[i].length; j++) body += '<td>' + fmt(m[i][j]) + '</td>';
        body += '</tr>';
    }
    body += '</table>';
    return '<span class="matrix-out"><span class="bracket left"></span>' + body + '<span class="bracket right"></span></span>';
}

function showResult(label, html) {
    document.getElementById('calc-result').innerHTML =
        '<div class="result-label">' + label + '</div>' + html;
}
function showError(msg) {
    showResult('Sonuç', '<p class="result-msg">⚠ ' + msg + '</p>');
}

/* ---- Matris işlemleri ---- */
function addSub(A, B, sign) {
    if (A.length !== B.length || A[0].length !== B[0].length) return null;
    return A.map(function (row, i) { return row.map(function (v, j) { return v + sign * B[i][j]; }); });
}
function scalarMul(A, k) {
    return A.map(function (row) { return row.map(function (v) { return v * k; }); });
}
function multiply(A, B) {
    if (A[0].length !== B.length) return null;
    var res = [];
    for (var i = 0; i < A.length; i++) {
        res.push([]);
        for (var j = 0; j < B[0].length; j++) {
            var s = 0;
            for (var k = 0; k < B.length; k++) s += A[i][k] * B[k][j];
            res[i].push(s);
        }
    }
    return res;
}
function transpose(A) {
    var res = [];
    for (var j = 0; j < A[0].length; j++) { res.push([]); for (var i = 0; i < A.length; i++) res[j].push(A[i][j]); }
    return res;
}
function determinant(A) {
    var n = A.length;
    var M = A.map(function (r) { return r.slice(); });
    var det = 1;
    for (var col = 0; col < n; col++) {
        var piv = col;
        for (var r = col + 1; r < n; r++) if (Math.abs(M[r][col]) > Math.abs(M[piv][col])) piv = r;
        if (Math.abs(M[piv][col]) < 1e-12) return 0;
        if (piv !== col) { var t = M[piv]; M[piv] = M[col]; M[col] = t; det = -det; }
        det *= M[col][col];
        for (var r2 = col + 1; r2 < n; r2++) {
            var f = M[r2][col] / M[col][col];
            for (var c = col; c < n; c++) M[r2][c] -= f * M[col][c];
        }
    }
    return det;
}
/* Gauss-Jordan indirgeme; opsiyonel artırılmış sütun sayısı augCols */
function rref(A) {
    var M = A.map(function (r) { return r.slice(); });
    var rows = M.length, cols = M[0].length, lead = 0;
    for (var r = 0; r < rows; r++) {
        if (lead >= cols) break;
        var i = r;
        while (Math.abs(M[i][lead]) < 1e-12) {
            i++;
            if (i === rows) { i = r; lead++; if (lead === cols) return M; }
        }
        var tmp = M[i]; M[i] = M[r]; M[r] = tmp;
        var lv = M[r][lead];
        for (var j = 0; j < cols; j++) M[r][j] /= lv;
        for (var k = 0; k < rows; k++) {
            if (k === r) continue;
            var f = M[k][lead];
            for (var j2 = 0; j2 < cols; j2++) M[k][j2] -= f * M[r][j2];
        }
        lead++;
    }
    return M;
}
function rank(A) {
    var R = rref(A), rk = 0;
    for (var i = 0; i < R.length; i++) {
        var nonzero = R[i].some(function (v) { return Math.abs(v) > 1e-10; });
        if (nonzero) rk++;
    }
    return rk;
}
function inverse(A) {
    var n = A.length;
    if (n !== A[0].length) return null;
    var M = A.map(function (r, i) {
        return r.slice().concat(Array.from({ length: n }, function (_, j) { return i === j ? 1 : 0; }));
    });
    var R = rref(M);
    for (var i = 0; i < n; i++) if (Math.abs(R[i][i] - 1) > 1e-8) return null; // tekil
    return R.map(function (row) { return row.slice(n); });
}

/* ===== ADIM ADIM ÇÖZÜM ===== */
function stepsOn() { return document.getElementById('show-steps').checked; }
function snap(M) { return M.map(function (r) { return r.slice(); }); }
function op(s) { return '<span class="step-op">' + s + '</span>'; }

function renderSteps(steps) {
    var h = '<div class="steps-wrap">';
    for (var i = 0; i < steps.length; i++) {
        var cls = steps[i].final ? 'step-card step-final' : 'step-card';
        var no = steps[i].final ? '<span class="step-no">Sonuç</span>' : '<span class="step-no">Adım ' + (i + 1) + '</span>';
        h += '<div class="' + cls + '"><div class="step-head">' + no + steps[i].desc + '</div>' +
            (steps[i].M ? matrixHTML(steps[i].M) : '') + '</div>';
    }
    return h + '</div>';
}

/* Gauss-Jordan indirgeme — adımları kaydeder. pivotCols: pivot aranacak sütun sayısı. */
function gjSteps(M, pivotCols) {
    M = snap(M);
    var rows = M.length, cols = M[0].length;
    if (pivotCols == null) pivotCols = cols;
    var steps = [], lead = 0;
    for (var r = 0; r < rows; r++) {
        if (lead >= pivotCols) break;
        var i = r;
        while (Math.abs(M[i][lead]) < 1e-12) {
            i++;
            if (i === rows) { i = r; lead++; if (lead === pivotCols) return { M: M, steps: steps }; }
        }
        if (i !== r) {
            var t = M[i]; M[i] = M[r]; M[r] = t;
            steps.push({ desc: op('R' + (r + 1) + ' ↔ R' + (i + 1)) + ' — pivot 0 olmasın diye satırları yer değiştir.', M: snap(M) });
        }
        var lv = M[r][lead];
        if (Math.abs(lv - 1) > 1e-12) {
            for (var j = 0; j < cols; j++) M[r][j] /= lv;
            steps.push({ desc: op('R' + (r + 1) + ' → (1/' + fmt(lv) +')·R' + (r + 1)) + ' — pivotu 1 yap.', M: snap(M) });
        }
        var elim = [];
        for (var k = 0; k < rows; k++) {
            if (k === r) continue;
            var f = M[k][lead];
            if (Math.abs(f) > 1e-12) {
                for (var j2 = 0; j2 < cols; j2++) M[k][j2] -= f * M[r][j2];
                elim.push(op('R' + (k + 1) + ' → R' + (k + 1) + ' − (' + fmt(f) + ')·R' + (r + 1)));
            }
        }
        if (elim.length) steps.push({ desc: elim.join('&nbsp; ') + ' — ' + (lead + 1) + '. sütunu pivot dışında sıfırla.', M: snap(M) });
        lead++;
    }
    return { M: M, steps: steps };
}

/* Determinant — üst üçgene indirgeyerek, adımlarla */
function detSteps(A) {
    var n = A.length, M = snap(A), det = 1, steps = [], swaps = 0;
    for (var col = 0; col < n; col++) {
        var piv = col;
        for (var r = col + 1; r < n; r++) if (Math.abs(M[r][col]) > Math.abs(M[piv][col])) piv = r;
        if (Math.abs(M[piv][col]) < 1e-12) {
            steps.push({ desc: (col + 1) + '. sütunda pivot bulunamadı (tüm altı sıfır) → determinant 0.', M: snap(M) });
            steps.push({ final: true, desc: 'det(A) = <strong>0</strong>' });
            return { det: 0, steps: steps };
        }
        if (piv !== col) {
            var t = M[piv]; M[piv] = M[col]; M[col] = t; det = -det; swaps++;
            steps.push({ desc: op('R' + (col + 1) + ' ↔ R' + (piv + 1)) + ' — satır değişimi işareti çevirir: ×(−1).', M: snap(M) });
        }
        var elim = [];
        for (var r2 = col + 1; r2 < n; r2++) {
            var f = M[r2][col] / M[col][col];
            if (Math.abs(f) > 1e-12) {
                for (var c = col; c < n; c++) M[r2][c] -= f * M[col][c];
                elim.push(op('R' + (r2 + 1) + ' → R' + (r2 + 1) + ' − (' + fmt(f) + ')·R' + (col + 1)));
            }
        }
        if (elim.length) steps.push({ desc: elim.join('&nbsp; ') + ' — ' + (col + 1) + '. sütunun altını sıfırla (determinant değişmez).', M: snap(M) });
    }
    var diag = [];
    for (var d = 0; d < n; d++) { det *= M[d][d]; diag.push(fmt(M[d][d])); }
    steps.push({
        final: true,
        desc: 'Üst üçgen matrisin köşegen çarpımı' + (swaps ? ' × (−1)<sup>' + swaps + '</sup>' : '') +
            ' = ' + diag.join(' × ') + (swaps ? ' × (−1)<sup>' + swaps + '</sup>' : '') +
            ' = <strong>det(A) = ' + fmt(det) + '</strong>'
    });
    return { det: det, steps: steps };
}

/* Matris çarpımı — her eleman için nokta çarpımını gösterir */
function mulSteps(A, B) {
    var res = multiply(A, B);
    var lines = '';
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < B[0].length; j++) {
            var terms = [];
            for (var k = 0; k < B.length; k++) terms.push('(' + fmt(A[i][k]) + '·' + fmt(B[k][j]) + ')');
            lines += '<div style="margin:0.2rem 0;">' + op('c' + (i + 1) + (j + 1)) + ' = ' +
                terms.join(' + ') + ' = <strong>' + fmt(res[i][j]) + '</strong></div>';
        }
    }
    return { res: res, html: '<p class="result-hint">Her eleman, A\'nın satırı ile B\'nin sütununun nokta çarpımıdır (c<sub>ij</sub> = Σ a<sub>ik</sub>·b<sub>kj</sub>):</p>' + lines };
}

/* ---- Ana işlem yürütücü ---- */
function doOp(op) {
    if (op === 'clear') {
        document.querySelectorAll('#a-inputs input, #b-inputs input').forEach(function (i) { i.value = '0'; });
        showResult('Sonuç', '<p class="result-hint">Bir işlem seç; sonuç burada görünecek.</p>');
        return;
    }
    if (op === 'swap') {
        ['rows', 'cols'].forEach(function (d) {
            var a = document.getElementById('a-' + d), b = document.getElementById('b-' + d);
            var t = a.value; a.value = b.value; b.value = t;
        });
        var av = [], bv = [];
        document.querySelectorAll('#a-inputs input').forEach(function (i) { av.push(i.value); });
        document.querySelectorAll('#b-inputs input').forEach(function (i) { bv.push(i.value); });
        buildMatrix('a'); buildMatrix('b');
        document.querySelectorAll('#a-inputs input').forEach(function (i, k) { if (bv[k] !== undefined) i.value = bv[k]; });
        document.querySelectorAll('#b-inputs input').forEach(function (i, k) { if (av[k] !== undefined) i.value = av[k]; });
        showResult('Sonuç', '<p class="result-hint">A ile B yer değiştirdi.</p>');
        return;
    }

    var A = readMatrix('a'), B = readMatrix('b'), k = parseNum(document.getElementById('scalar-k').value);
    if (A === null || B === null) { showError('Geçersiz sayı girişi var. Lütfen kontrol et (ondalık için nokta, kesir için a/b).'); return; }
    var res;

    switch (op) {
        case 'add':
            res = addSub(A, B, 1);
            if (!res) return showError('Toplama için A ve B aynı boyutta olmalı.');
            return showResult('A + B', matrixHTML(res));
        case 'sub':
            res = addSub(A, B, -1);
            if (!res) return showError('Çıkarma için A ve B aynı boyutta olmalı.');
            return showResult('A − B', matrixHTML(res));
        case 'mul':
            res = multiply(A, B);
            if (!res) return showError('A × B için A\'nın sütun sayısı = B\'nin satır sayısı olmalı.');
            if (stepsOn()) { var ms = mulSteps(A, B); return showResult('A × B', matrixHTML(ms.res) + ms.html); }
            return showResult('A × B', matrixHTML(res));
        case 'scalarA':
            if (isNaN(k)) return showError('Skaler k geçersiz.');
            return showResult(fmt(k) + ' · A', matrixHTML(scalarMul(A, k)));
        case 'scalarB':
            if (isNaN(k)) return showError('Skaler k geçersiz.');
            return showResult(fmt(k) + ' · B', matrixHTML(scalarMul(B, k)));
        case 'transA':
            return showResult('Aᵀ (transpoz)', matrixHTML(transpose(A)));
        case 'transB':
            return showResult('Bᵀ (transpoz)', matrixHTML(transpose(B)));
        case 'detA':
            if (A.length !== A[0].length) return showError('Determinant yalnızca kare matris için tanımlıdır.');
            if (stepsOn()) { var ds = detSteps(A); return showResult('det(A) — adım adım', '<span class="scalar-out">' + fmt(ds.det) + '</span>' + renderSteps(ds.steps)); }
            return showResult('det(A)', '<span class="scalar-out">' + fmt(determinant(A)) + '</span>');
        case 'rankA':
            return showResult('rank(A)', '<span class="scalar-out">' + rank(A) + '</span>' +
                '<p class="result-hint" style="margin-top:0.4rem;">Satır indirgenmiş formdaki sıfır olmayan satır sayısı.</p>');
        case 'rrefA':
            if (stepsOn()) { var rs = gjSteps(A); rs.steps.push({ final: true, desc: 'Satır İndirgenmiş Basamak Form (EBİF) elde edildi.', M: rs.M }); return showResult('EBİF (A) — adım adım', renderSteps(rs.steps)); }
            return showResult('EBİF — Satır İndirgenmiş Basamak Form (A)', matrixHTML(rref(A)));
        case 'invA':
            if (A.length !== A[0].length) return showError('Ters yalnızca kare matris için tanımlıdır.');
            var det = determinant(A);
            if (Math.abs(det) < 1e-10) return showError('A tekildir (det = 0), tersi yoktur.');
            if (stepsOn()) {
                var n2 = A.length;
                var augI = A.map(function (row, i) { return row.slice().concat(Array.from({ length: n2 }, function (_, j) { return i === j ? 1 : 0; })); });
                var is = gjSteps(augI, n2);
                var invR = is.M.map(function (row) { return row.slice(n2); });
                is.steps.unshift({ desc: 'Genişletilmiş matris [ A | I ] kurulur; Gauss-Jordan ile sol taraf I yapılır, sağ tarafta A⁻¹ oluşur.', M: snap(augI) });
                is.steps.push({ final: true, desc: 'Sol taraf birim matris → sağ taraf <strong>A⁻¹</strong>:', M: invR });
                return showResult('A⁻¹ — adım adım', renderSteps(is.steps));
            }
            return showResult('A⁻¹ (ters matris)', matrixHTML(inverse(A)) +
                '<p class="result-hint" style="margin-top:0.4rem;">det(A) = ' + fmt(det) + '</p>');
        case 'solve':
            return solveSystem(A, B);
    }
}

/* ---- Ax = b denklem sistemi çözümü ---- */
function solveSystem(A, B) {
    if (B.length !== A.length) return showError('Ax = b için B\'nin satır sayısı A ile aynı olmalı (b, A\'nın satır sayısı kadar).');
    var b = B.map(function (row) { return [row[0]]; }); // ilk sütun = b vektörü
    var n = A.length, vars = A[0].length;
    var aug = A.map(function (row, i) { return row.slice().concat(b[i]); });

    var stepsHTML = '';
    var R;
    if (stepsOn()) {
        var gs = gjSteps(aug, vars);
        R = gs.M;
        gs.steps.unshift({ desc: 'Genişletilmiş matris [ A | b ] kurulur ve Gauss-Jordan yöntemiyle indirgenir.', M: snap(aug) });
        stepsHTML = renderSteps(gs.steps);
    } else {
        R = rref(aug);
    }

    // Tutarsızlık kontrolü: [0 ... 0 | c], c ≠ 0
    for (var i = 0; i < n; i++) {
        var allZero = true;
        for (var j = 0; j < vars; j++) if (Math.abs(R[i][j]) > 1e-10) { allZero = false; break; }
        if (allZero && Math.abs(R[i][vars]) > 1e-10) {
            return showResult('Ax = b', '<p class="result-note">Sistem TUTARSIZ — çözümü yok.</p>' +
                '<p class="result-hint">Genişletilmiş matrisin EBİF\'inde [0 … 0 | c≠0] satırı var.</p>' +
                (stepsHTML || matrixHTML(R)));
        }
    }
    var rk = rank(A);
    if (rk < vars) {
        return showResult('Ax = b', '<p class="result-note">SONSUZ çözüm var (' + (vars - rk) + ' serbest değişken).</p>' +
            '<p class="result-hint">rank(A) = ' + rk + ' &lt; bilinmeyen sayısı = ' + vars + '. Genişletilmiş matrisin EBİF hali:</p>' +
            (stepsHTML || matrixHTML(R)));
    }
    // Tek çözüm: pivot satırlarındaki son sütun
    var x = [];
    for (var v = 0; v < vars; v++) x.push([R[v][vars]]);
    var lbl = [];
    for (var s = 0; s < vars; s++) lbl.push('x<sub>' + (s + 1) + '</sub> = ' + fmt(x[s][0]));
    return showResult('Ax = b — TEK çözüm', matrixHTML(x) +
        '<p class="result-hint" style="margin-top:0.5rem;">' + lbl.join(' &nbsp;•&nbsp; ') + '</p>' + stepsHTML);
}

// Başlangıçta ızgaraları kur
buildMatrix('a');
buildMatrix('b');


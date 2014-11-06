/*1409288602,,JIT Construction: v1391091,en_US*/

/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
try {
    (function (a, b, c, d) {
        var e = a._fbq || (a._fbq = []);
        if (e.push !== Array.prototype.push)return;
        var f = {}, g = [], h = /^\d+$/, i = c.href, j = b.referrer;

        function k(t) {
            var u = [];
            for (var v = 0, w = t.length; v < w; v++)u.push(t[v][0] + '=' + encodeURIComponent(t[v][1]));
            return u.join('&');
        }

        function l(t, u) {
            var v = function () {
                if (t.detachEvent) {
                    t.detachEvent('onload', v);
                } else t.onload = null;
                u();
            };
            if (t.attachEvent) {
                t.attachEvent('onload', v);
            } else t.onload = v;
        }

        function m(t, u) {
            var v = 'fb' + Math.random().toString().replace('.', ''), w = b.createElement('form');
            w.method = 'post';
            w.action = t;
            w.target = v;
            w.acceptCharset = 'utf-8';
            w.style.display = 'none';
            var x = !!(a.attachEvent && !a.addEventListener), y = x ? '<iframe name="' + v + '">' : 'iframe', z = b.createElement(y);
            z.src = 'javascript:false';
            z.id = v;
            z.name = v;
            w.appendChild(z);
            l(z, function () {
                for (var aa = 0, ba = u.length; aa < ba; aa++) {
                    var ca = b.createElement('input');
                    ca.name = u[aa][0];
                    ca.value = u[aa][1];
                    w.appendChild(ca);
                }
                l(z, function () {
                    w.parentNode.removeChild(w);
                });
                w.submit();
            });
            b.body.appendChild(w);
        }

        f.addPixelId = function (t) {
            g.push(t);
        };
        f.track = function (t, u) {
            var v = typeof t;
            if (v !== 'string' && v !== 'number')return false;
            if (h.test(t)) {
                n(null, t, u);
                return true;
            }
            for (var w = 0, x = g.length; w < x; w++)n(g[w], t, u);
            return g.length > 0;
        };
        function n(t, u, v) {
            var w = [];
            w.push(['id', t]);
            w.push(['ev', u]);
            w.push(['dl', i]);
            w.push(['rl', j]);
            w.push(['ts', new Date().valueOf()]);
            if (v && typeof v === 'object')for (var x in v)if (v.hasOwnProperty(x)) {
                var y = v[x], z = (y === null) ? 'null' : typeof y;
                if (z in {number: 1, string: 1, boolean: 1}) {
                    w.push(['cd[' + encodeURIComponent(x) + ']', y]);
                } else if (z === 'object') {
                    y = (typeof JSON === 'undefined') ? String(y) : JSON.stringify(y);
                    w.push(['cd[' + encodeURIComponent(x) + ']', y]);
                }
            }
            var aa = 'https://www.facebook.com/tr/', ba = k(w);
            if (1024 > (aa + '?' + ba).length) {
                var ca = new Image();
                ca.src = aa + '?' + ba;
            } else m(aa, w);
        }

        var o = function (t) {
            if (Object.prototype.toString.call(t) !== '[object Array]')return false;
            var u = t.shift();
            if (!u)return false;
            var v = f[u];
            if (typeof v !== 'function')return false;
            if (a._fbds) {
                var w = a._fbds.pixelId;
                if (h.test(w)) {
                    g.push(w);
                    delete a._fbds.pixelId;
                }
            }
            return v.apply(f, t);
        };
        for (var p = 0, q = e.length; p < q; ++p)o(e[p]);
        e.push = o;
        if (e.disablePushState === true)return;
        if (!d.pushState || !d.replaceState)return;
        var r = function () {
            j = i;
            i = c.href;
            e.push(['track', 'PixelInitialized']);
        }, s = function (t, u, v) {
            var w = t[u];
            t[u] = function () {
                var x = w.apply(this, arguments);
                v.apply(this, arguments);
                return x;
            };
        };
        s(d, 'pushState', r);
        s(d, 'replaceState', r);
        a.addEventListener('popstate', r, false);
    })(window, document, location, history);
} catch (e) {
    new Image().src = "https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"1391091","message":"' + e.message + '"}}');
}
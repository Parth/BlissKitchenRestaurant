window._pa = window._pa || {};
_pa.segments = [{"name": "All visitors", "id": 1016248, "regex": ".*"}, {
    "name": "Existing Parse Customers",
    "id": 1305566,
    "regex": "/apps/?([?#].*)*$"
}];
_pa.conversions = [{
    "name": "Customer Upgrades to Pro",
    "id": "140188",
    "regex": "/plans/success/?([?#].*)*$"
}, {"name": "Customer Sign Up", "id": "140194", "regex": "/apps/onboard/?([?#].*)*$"}];
_pa.conversionEvents = [];
_pa.segmentEvents = [];
_pa.rtbId = '16580';
!function () {
    function e(e, a, n) {
        if (null == n || isNaN(n))var t = _pa.pixelHost + "seg?t=2&add=" + e; else var t = _pa.pixelHost + "seg?t=2&add=" + e + ":" + n;
        _pa.createImageTag("segments", e, t, a)
    }

    function a(e, a) {
        var n = _pa.paRtbHost + "seg/?add=" + e;
        _pa.productId && (n += ":" + encodeURIComponent(_pa.productId)), i ? _pa.createImageTag("paRtbSegments", e, n, a) : d.push({
            id: e,
            name: a
        })
    }

    function n() {
        if (i = !0, 0 !== d.length) {
            for (var e = [], a = [], n = 0; n < d.length; n++) {
                var t = d[n], p = t.id, r = t.name;
                _pa.productId && (p += ":" + encodeURIComponent(_pa.productId)), e.push(p), a.push(r)
            }
            var p = e.join(","), r = a.join(","), o = _pa.paRtbHost + "seg/?add=" + p;
            _pa.createImageTag("paRtbSegments", p, o, r)
        }
    }

    function t(e, a, n) {
        a = a || _pa.orderId, n = n || _pa.revenue;
        var t = e.id, p = e.name, r = "";
        a && "" !== a && (a = a.toString().replace(/@.*/, "@"), r += "&order_id=" + encodeURIComponent(a)), n && "" !== n && (r += "&value=" + encodeURIComponent(n)), r += "&other=" + function () {
            for (var e = "", a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = 0; 16 > n; n++) {
                var t = Math.floor(Math.random() * a.length);
                e += a.charAt(t)
            }
            return e
        }();
        var o = _pa.pixelHost + "px?t=2&id=" + t + r, i = _pa.paRtbHost + "px/?id=" + t + r;
        _pa.rtbId && (i += "&a_id=" + _pa.rtbId), _pa.createImageTag("conversions", t, o, p), _pa.createImageTag("paRtbConversions", t, i, p)
    }

    function p(e) {
        for (var a = e.shift(), n = a.split("."), t = _pa, p = 0; p < n.length; p++)t = t[n[p]];
        var o = t.apply(_pa, e);
        return r(a, e), o
    }

    function r(e, a) {
        var n = _pa.callbacks[e];
        if ("undefined" != typeof n)for (var t = 0; t < n.length; t++)n[t].apply(_pa, a)
    }

    function o() {
        for (var e, a = Array.prototype.slice.call(arguments, 0), n = a.shift(), t = n.split("."), p = _pa, o = 0; o < t.length; o++)p = p[t[o]], e = t[o];
        p.apply(_pa, a), r(e, a)
    }

    _pa.head = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];
    var i = !1, d = [];
    _pa.init = function () {
        _pa.fired = {
            segments: [],
            conversions: []
        }, _pa.url = document.location.href, _pa.pixelHost = ("https:" === document.location.protocol ? "https://secure" : "http://ib") + ".adnxs.com/", _pa.paRtbHost = ("https:" === document.location.protocol ? "https://" : "http://") + "pixel.prfct.co/", _pa.callbacks = {}
    }, _pa.addFired = function (e, a) {
        "undefined" == typeof _pa.fired[e] && (_pa.fired[e] = []), _pa.fired[e].push(a)
    }, _pa.detect = function () {
        for (var e = 0; e < _pa.segments.length; e++) {
            var a = _pa.segments[e];
            _pa.url.match(new RegExp(a.regex, "i")) && o("fireSegment", a)
        }
        for (var e = 0; e < _pa.conversions.length; e++) {
            var n = _pa.conversions[e];
            _pa.url.match(new RegExp(n.regex, "i")) && t(n)
        }
    }, _pa.track = function (e, a) {
        a = "undefined" != typeof a ? a : {};
        var n = _pa.trackSegments(e, a), t = _pa.trackConversions(e, a);
        return n || t
    }, _pa.trackSegments = function (e, a) {
        for (var n = !1, t = 0; t < _pa.segmentEvents.length; t++) {
            var p = _pa.segmentEvents[t];
            p.name === e && (n = !0, o("fireSegment", p, a.segment_value))
        }
        return n
    }, _pa.trackConversions = function (e, a) {
        for (var n = !1, p = 0; p < _pa.conversionEvents.length; p++) {
            var r = _pa.conversionEvents[p];
            r.name === e && (n = !0, t(r, a.orderId, a.revenue))
        }
        return n
    }, _pa.trackProduct = function (e) {
        _pa.productId = e;
        for (var n = _pa.fired.segments, t = {}, p = 0; p < n.length; p++) {
            var r = n[p], o = r.id;
            t[o] = !0
        }
        for (var i in t)a(i, "product refire")
    }, _pa.fireLoadEvents = function () {
        if ("undefined" != typeof _pa.onLoadEvent)if ("function" == typeof _pa.onLoadEvent)_pa.onLoadEvent(); else if ("string" == typeof _pa.onLoadEvent)for (var e = _pa.onLoadEvent.split(","), a = 0; a < e.length; a++) {
            var n = e[a];
            _pa.track(n)
        }
    }, _pa.createImageTag = function (e, a, n, t) {
        var p = document.createElement("img");
        p.src = n, p.width = 1, p.height = 1, p.border = 0, _pa.head.appendChild(p), _pa.addFired(e, {
            id: a,
            name: t,
            tag: p
        })
    }, _pa.start = function () {
        _pa.fireLoadEvents(), _pa.detect(), _pa.initQ(), n()
    }, _pa.fireSegment = function (n, t) {
        e(n.id, n.name, t), a(n.id, n.name)
    }, _pa.initQ = function () {
        if ("undefined" != typeof window._pq)for (var e = 0; e < _pq.length; e++) {
            var a = _pq[e];
            p(a)
        }
        window._pq = {
            push: function (e) {
                return p(e)
            }
        }
    }, _pa.addListener = function (e, a) {
        "undefined" == typeof _pa.callbacks[e] && (_pa.callbacks[e] = []), _pa.callbacks[e].push(a)
    }, _pa.removeListener = function (e, a) {
        for (var n = _pa.callbacks[e], t = n.length; t--;)n[t] === a && n.splice(t, 1)
    }, _pa.init()
}();
_pa.start();

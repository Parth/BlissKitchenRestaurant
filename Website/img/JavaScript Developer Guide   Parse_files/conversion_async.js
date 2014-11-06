(function () {
    var f = this, k = function (a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return "array";
            if (a instanceof Object)return b;
            var d = Object.prototype.toString.call(a);
            if ("[object Window]" == d)return "object";
            if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
            if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call)return "object";
        return b
    };
    var l = function (a) {
        l[" "](a);
        return a
    };
    l[" "] = function () {
    };
    var m = window;
    var n = function (a, b) {
        for (var d in a)Object.prototype.hasOwnProperty.call(a, d) && b.call(null, a[d], d, a)
    };
    var s;
    n:{
        var t = f.navigator;
        if (t) {
            var x = t.userAgent;
            if (x) {
                s = x;
                break n
            }
        }
        s = ""
    }
    ;
    var y = -1 != s.indexOf("Opera") || -1 != s.indexOf("OPR"), A = -1 != s.indexOf("Trident") || -1 != s.indexOf("MSIE"), B = -1 != s.indexOf("Gecko") && -1 == s.toLowerCase().indexOf("webkit") && !(-1 != s.indexOf("Trident") || -1 != s.indexOf("MSIE")), C = -1 != s.toLowerCase().indexOf("webkit");
    (function () {
        var a = "", b;
        if (y && f.opera)return a = f.opera.version, "function" == k(a) ? a() : a;
        B ? b = /rv\:([^\);]+)(\)|;)/ : A ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : C && (b = /WebKit\/(\S+)/);
        b && (a = (a = b.exec(s)) ? a[1] : "");
        return A && (b = (b = f.document) ? b.documentMode : void 0, b > parseFloat(a)) ? String(b) : a
    })();
    var D = function (a) {
        this.b = [];
        this.a = {};
        for (var b = 0, d = arguments.length; b < d; ++b)this.a[arguments[b]] = ""
    };
    D.prototype.c = function (a) {
        return this.a.hasOwnProperty(a) ? this.a[a] : ""
    };
    D.prototype.geil = D.prototype.c;
    var F = function () {
        var a = E, b = [];
        n(a.a, function (a) {
            "" != a && b.push(a)
        });
        return 0 < a.b.length && 0 < b.length ? a.b.join(",") + "," + b.join(",") : a.b.join(",") + b.join(",")
    };
    var E, G = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url".split(" ");

    function H(a) {
        return null != a ? escape(a.toString()) : ""
    }

    function L(a) {
        return null != a ? a.toString().substring(0, 512) : ""
    }

    function M(a, b) {
        var d = H(b);
        if ("" != d) {
            var c = H(a);
            if ("" != c)return "&".concat(c, "=", d)
        }
        return ""
    }

    function N(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function O(a) {
        var b;
        if ((a = a.google_custom_params) && "object" == typeof a && "function" != typeof a.join) {
            var d = [];
            for (b in a)if (Object.prototype.hasOwnProperty.call(a, b)) {
                var c = a[b];
                if (c && "function" == typeof c.join) {
                    for (var e = [], g = 0; g < c.length; ++g) {
                        var h = N(c[g]);
                        null != h && e.push(h)
                    }
                    c = 0 == e.length ? null : e.join(",")
                } else c = N(c);
                (e = N(b)) && null != c && d.push(e + "=" + c)
            }
            b = d.join(";")
        } else b = "";
        return "" == b ? "" : "&".concat("data=", encodeURIComponent(b))
    }

    function P(a) {
        return "number" != typeof a && "string" != typeof a ? "" : H(a.toString())
    }

    function Q(a) {
        if (!a)return "";
        a = a.google_conversion_items;
        if (!a)return "";
        for (var b = [], d = 0, c = a.length; d < c; d++) {
            var e = a[d], g = [];
            e && (g.push(P(e.value)), g.push(P(e.quantity)), g.push(P(e.item_id)), g.push(P(e.adwords_grouping)), g.push(P(e.sku)), b.push("(" + g.join("*") + ")"))
        }
        return 0 < b.length ? "&item=" + b.join("") : ""
    }

    function R(a, b, d) {
        var c = [];
        if (a) {
            var e = a.screen;
            e && (c.push(M("u_h", e.height)), c.push(M("u_w", e.width)), c.push(M("u_ah", e.availHeight)), c.push(M("u_aw", e.availWidth)), c.push(M("u_cd", e.colorDepth)));
            a.history && c.push(M("u_his", a.history.length))
        }
        d && "function" == typeof d.getTimezoneOffset && c.push(M("u_tz", -d.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled && c.push(M("u_java", b.javaEnabled())), b.plugins && c.push(M("u_nplug", b.plugins.length)), b.mimeTypes && c.push(M("u_nmime", b.mimeTypes.length)));
        return c.join("")
    }

    function S(a, b, d) {
        var c = "";
        if (b) {
            var e;
            if (a.top == a)e = 0; else {
                var g = a.location.ancestorOrigins;
                if (g)e = g[g.length - 1] == a.location.origin ? 1 : 2; else {
                    g = a.top;
                    try {
                        var h;
                        if (h = !!g && null != g.location.href)e:{
                            try {
                                l(g.foo);
                                h = !0;
                                break e
                            } catch (p) {
                            }
                            h = !1
                        }
                        e = h
                    } catch (z) {
                        e = !1
                    }
                    e = e ? 1 : 2
                }
            }
            h = "";
            h = d ? d : 1 == e ? a.top.location.href : a.location.href;
            c += M("frm", e);
            c += M("url", L(h));
            c += M("ref", L(b.referrer))
        }
        return c
    }

    function T(a) {
        return "42631044" == (E ? E.c(2) : "") || a && a.location && a.location.protocol && "https:" == a.location.protocol.toString().toLowerCase() ? "https:" : "http:"
    }

    var U = /Android ([01]\.|2\.[01])/i;

    function V() {
        return new Image
    }

    function W(a, b, d) {
        var c = V;
        "function" === typeof a.opt_image_generator && (c = a.opt_image_generator);
        c = c();
        b += M("async", "1");
        c.src = b;
        c.onload = d && "function" === typeof a.onload_callback ? a.onload_callback : function () {
        }
    }

    function X(a) {
        for (var b = window, d = {}, c = function (c) {
            d[c] = a && null != a[c] ? a[c] : b[c]
        }, e = 0; e < G.length; e++)c(G[e]);
        c("onload_callback");
        return d
    };
    window.google_trackConversion = function (a) {
        a = X(a);
        a.google_conversion_format = 3;
        var b;
        var d = window, c = navigator, e = document, g = !1;
        if (a && 3 == a.google_conversion_format) {
            try {
                var h;
                if ("landing" == a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough)h = !1; else {
                    a.google_conversion_date = new Date;
                    a.google_conversion_time = a.google_conversion_date.getTime();
                    a.google_conversion_snippets = "number" == typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ?
                    a.google_conversion_snippets + 1 : 1;
                    "number" != typeof a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time);
                    a.google_conversion_js_version = "7";
                    0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 1);
                    E = new D(1, 2);
                    if ("https:" != T(m) && !U.test(navigator.userAgent) && E) {
                        var p = E, z = ["42631043", "42631044"];
                        if (p.a.hasOwnProperty(2) && "" == p.a[2]) {
                            var q;
                            e:{
                                if (!(1E-4 > Math.random())) {
                                    var u =
                                        Math.random();
                                    if (0 > u) {
                                        try {
                                            var I = new Uint16Array(1);
                                            window.crypto.getRandomValues(I);
                                            u = I[0] / 65536
                                        } catch (Y) {
                                            u = Math.random()
                                        }
                                        q = z[Math.floor(u * z.length)];
                                        break e
                                    }
                                }
                                q = null
                            }
                            q && "" != q && p.a.hasOwnProperty(2) && (p.a[2] = q)
                        }
                    }
                    h = !0
                }
                if (h) {
                    h = "/?";
                    "landing" == a.google_conversion_type && (h = "/extclk?");
                    var J;
                    J = T(d) + "//" + (a.google_remarketing_only ? "googleads.g.doubleclick.net" : a.google_conversion_domain || "www.googleadservices.com") + "/pagead/" + [a.google_remarketing_only ? "viewthroughconversion/" : "conversion/", H(a.google_conversion_id),
                        h, "random=", H(a.google_conversion_time)].join("");
                    var v;
                    r:{
                        var K = a.google_conversion_language;
                        if (null != K) {
                            var r = K.toString();
                            if (2 == r.length) {
                                v = M("hl", r);
                                break r
                            }
                            if (5 == r.length) {
                                v = M("hl", r.substring(0, 2)) + M("gl", r.substring(3, 5));
                                break r
                            }
                        }
                        v = ""
                    }
                    b = [M("cv", a.google_conversion_js_version), M("fst", a.google_conversion_first_time), M("num", a.google_conversion_snippets), M("fmt", a.google_conversion_format), M("value", a.google_conversion_value), M("currency_code", a.google_conversion_currency), M("label", a.google_conversion_label),
                        M("oid", a.google_conversion_order_id), M("bg", a.google_conversion_color), v, M("guid", "ON"), M("disvt", a.google_disable_viewthrough), M("is_call", a.google_is_call), M("eid", F()), Q(a), R(d, c, a.google_conversion_date), O(a), S(d, e, a.google_conversion_page_url), a.google_remarketing_for_search && !a.google_conversion_domain ? "&srr=n" : ""].join("");
                    W(a, J + b, !0);
                    if (a.google_remarketing_for_search && !a.google_conversion_domain) {
                        var w;
                        w = T(d) + "//www.google.com/ads/user-lists/" + [H(a.google_conversion_id), "/?random=", Math.floor(1E9 *
                        Math.random())].join("");
                        w += [M("label", a.google_conversion_label), M("fmt", "3"), S(d, e, a.google_conversion_page_url)].join("");
                        W(a, w, !1)
                    }
                    g = !0
                }
            } catch (Z) {
            }
            b = g
        } else b = !1;
        return b
    };
})();

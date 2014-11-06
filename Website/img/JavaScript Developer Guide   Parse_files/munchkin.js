/*
 * Copyright (c) 2007-2014, Marketo, Inc. All rights reserved.
 * Marketo marketing automation web activity tracking script
 * Version: 147 r437
 */
(function (l) {
    if (!l.MunchkinTracker) {
        var k = l.document, n = k.location, w = encodeURIComponent, x = [], q = function (b, a, c, d) {
                b.attachEvent ? b.attachEvent("on" + a, c) : b.addEventListener(a, c, d || !1);
                x.push([b, a, c, d])
            }, L = function (b, a, c, d) {
                b.detachEvent ? b.detachEvent("on" + a, c) : b.removeEventListener(a, c, d || !1)
            }, e = function (b) {
                return "undefined" !== typeof b && null !== b
            }, y = function (b, a) {
                return b.className.match(RegExp("(\\s|^)" + a + "(\\s|$)"))
            }, M = e(XMLHttpRequest) && e((new XMLHttpRequest).withCredentials), p = function (b) {
                var a = null,
                    c;
                if (e(b))if (0 === b.length)a = ""; else try {
                    a = decodeURIComponent(b)
                } catch (d) {
                    c = b.indexOf("?");
                    if (-1 !== c)try {
                        a = decodeURIComponent(b.substr(0, c)) + b.substr(c)
                    } catch (f) {
                    }
                    e(a) || (a = String(b))
                }
                return a
            }, z = function (b, a) {
                var c = {}, d = e(a) ? a : "=", f = b.split("&"), g = f.length, h, k, l;
                for (h = 0; h < g; h += 1)k = f[h].split(d), e(k) && 1 < k.length && (l = k.shift(), k = k.join(d), c[p(l)] = p(k));
                return c
            }, A = function (b) {
                try {
                    var a = k.createElement("a");
                    a.href = b;
                    return z(a.search.substr(1))
                } catch (c) {
                    return null
                }
            }, B = function (b, a) {
                var c = null, d = [];
                if (e(b))for (c in b)b.hasOwnProperty(c) &&
                "function" !== typeof b[c] && d.push(w(c) + (e(a) ? a : "=") + w(b[c]));
                return d.join("&")
            }, C = function (b, a) {
                var c = null;
                if (e(a) && e(b))for (c in b)b.hasOwnProperty(c) && e(a[c]) && (b[c] = a[c])
            }, G = function (b) {
                var a = k.cookie, c, d, f = {id: null, token: null};
                b = w(b);
                f.store = function (a, c, d, f) {
                    var e = b + "=" + B(this, ":"), h = new Date;
                    0 < a && (h.setTime(h.getTime() + 864E5 * a), e += "; expires=" + h.toGMTString());
                    c && (e += "; path=" + c);
                    d && -1 !== d.indexOf(".") && (e += "; domain=" + d);
                    f && (e += "; secure");
                    k.cookie = e
                };
                if ("" !== a)for (a = a.split(";"), c = 0; c < a.length; c +=
                    1)if (d = a[c].replace(/^\s+|\s+$/g, ""), 0 === d.indexOf(b + "=")) {
                    a = d.substring(b.length + 1);
                    c = z(a);
                    e(c.id) && e(c.token) ? C(f, c) : C(f, z(a, ":"));
                    break
                }
                return f
            }, h = {
                customName: null,
                notifyPrefix: null,
                wsInfo: null,
                altIds: [],
                visitorToken: null,
                cookieLifeDays: 730,
                clickTime: 350,
                cookieAnon: !0,
                mkt_tok: null,
                domainLevel: null,
                replayDetectLimit: 5E3,
                httpsOnly: !1
            }, D = null, m = null, N = navigator.cookieEnabled || k.hasOwnProperty("cookie") && (0 < k.cookie.length || -1 < (k.cookie = "testcookie=test; max-age=10000").indexOf.call(k.cookie, "testcookie=test;")),
            u = !1, v = [], E = null, O = function (b) {
                var a = new XMLHttpRequest;
                a.open("GET", b, !1);
                a.onreadystatechange = function () {
                    a.readyState >= this.OPENED && a.abort()
                };
                try {
                    a.send()
                } catch (c) {
                }
            }, H = function (b, a, c, d) {
                b = b + a + "&" + B(c) + "&" + B(d);
                a = (new Date).getTime();
                M ? O(b) : ((new Image(1, 1)).src = b, E = a + h.clickTime)
            }, P = function () {
                var b;
                return function (a, c) {
                    var d = {x: a.clientX, y: a.clientY, el: c, time: (new Date).getTime()};
                    if (e(b) && d.x === b.x && d.y === b.y && d.el === b.el && d.time < b.time + h.replayDetectLimit)return !0;
                    b = d;
                    return !1
                }
            }(), I = function () {
                var b =
                    k.getElementsByName("_mkt_trk"), a = 0, c = "";
                e(m) && (c = "id:" + m.id + "&token:" + m.token);
                for (a = 0; a < b.length; a += 1)"hidden" === b[a].type && (b[a].value = c)
            }, r = function (b, a, c) {
                var d = null, f;
                f = n.hostname;
                var g = n.protocol, k = "webevents/" + b;
                if (!u)v.push(["post", arguments]); else if (e(m) && (a._mchId = m.id, a._mchTk = m.token, e(h.mkt_tok) && (a.mkt_tok = h.mkt_tok), e(h.wsInfo) && (a._mchWs = h.wsInfo), "clickLink" === b && (a._mchCn = e(h.customName) ? h.customName : ""), a._mchHo = f, a._mchPo = n.port, e(a._mchRu) || (a._mchRu = p(n.pathname)), a._mchPc =
                        g, a._mchVr = "147", e(f) && 0 !== f.length && "file:" !== g))for (d in k += "?_mchNc=" + (new Date).getTime(), H(h.notifyPrefix, k, a, c), h.altIds)h.altIds.hasOwnProperty(d) && (f = h.altIds[d], a._mchId = f, H(h.notifyPrefix.replace(/\w{3}\-\w{3}\-\w{3}\.mktoresp\.com/i, f + ".mktoresp.com"), k, a, c))
            }, J = function (b) {
                var a = b || l.event, c = a.target || a.srcElement, d = {}, f;
                f = a.which;
                var g = a.button;
                f = e(f) && (1 === f || 2 === f) || e(g) && (0 === g || 1 === g || 4 === g) ? !0 : !1;
                if (f && !a._mchDone) {
                    a._mchDone = !0;
                    a = c;
                    f = n.href || n;
                    for (-1 < f.indexOf("#") && (f = f.substring(0,
                        f.indexOf("#"))); "A" !== a.tagName && "AREA" !== a.tagName && e(a.parentNode);)a = a.parentNode;
                    a === k || a === l || "A" !== a.tagName && "AREA" !== a.tagName ? a = null : (c = a.href.replace(/^\s+|\s+$/g, ""), a = e(c) && 0 < c.length && 0 !== c.indexOf("#") && 0 !== c.indexOf(f + "#") && 0 !== c.indexOf("javascript") && 0 !== c.indexOf("mailto") && !y(a, "mchNoDecorate") ? a : null);
                    e(a) && !P(b, a) && (d._mchHr = p(a.href), r("clickLink", d))
                }
            }, t = function (b) {
                if (u) {
                    if (null !== m)return m;
                    var a;
                    a:{
                        a = n.hostname;
                        var c = h.domainLevel, d = a.split("."), f = d.length, g = 2;
                        if (e(c))g =
                            c; else if (2 < d[f - 1].length)g = 2; else if (2 === d[f - 1].length)g = 3; else break a;
                        for (; d.length > g && 2 < d.length;)d.shift();
                        a = d.join(".")
                    }
                    c = G("_mkto_trk");
                    d = !1 !== h.httpsOnly;
                    if (e(c.id) || h.cookieAnon || b) {
                        if (c.id = D, e(c.token) || (e(h.visitorToken) && "VISITOR_MKTTOK_REPLACE" !== h.visitorToken ? c.token = h.visitorToken : c.token = "_mch-" + a + "-" + (new Date).getTime() + "-" + (Math.floor(9E4 * Math.random()) + 1E4)), c.store(h.cookieLifeDays, "/", a, d), d && (c = G("_mkto_trk")), !d || e(c.id))return m = c, I(), c
                    } else return null
                } else v.push(["createTrackingCookie",
                    arguments])
            }, K = function () {
                t(!0)
            }, Q = function (b) {
                var a = b.onclick;
                b.onclick = "function" === typeof a ? function () {
                    K.apply(b, arguments);
                    return a.apply(b, arguments)
                } : K
            }, F = {
                ASSOCIATE_LEAD: "associateLead",
                CLICK_LINK: "clickLink",
                VISIT_WEB_PAGE: "visitWebPage",
                init: function (b, a) {
                    if (N && e(b) && 0 !== b.length) {
                        D = b;
                        var c = "", d, f, g;
                        d = A(l.location.toString());
                        h.notifyPrefix = n.protocol + "//" + D + ".mktoresp.com/";
                        e(a) && C(h, a);
                        e(d) && (e(d.mkt_tok) && (h.mkt_tok = d.mkt_tok), e(d.lpview) && (c = d.lpview));
                        if (!e(h.mkt_tok))if (d = A(k.referrer),
                                e(d.mkt_tok))h.mkt_tok = d.mkt_tok; else if (e(d.enid) && e(d.type))for (g in d)d.hasOwnProperty(g) && "enid" !== g && "type" !== g && (-1 < g.indexOf("mkt_tok") || -1 < d[g].indexOf("mkt_tok")) && (f = A(g + "=" + d[g]), e(f.mkt_tok) && (h.mkt_tok = f.mkt_tok));
                        if (!("preview" === c && /\/lpeditor\/preview$/.test(n.pathname) || u)) {
                            u = !0;
                            c = t(e(h.mkt_tok));
                            d = {};
                            for (f = {}; 0 < v.length;)switch (g = v.shift(), g[0]) {
                                case "createTrackingCookie":
                                    c = t.apply(k, g[1]);
                                    break;
                                case "post":
                                    r.apply(k, g[1])
                            }
                            if (e(c))d._mchCn = e(h.customName) ? h.customName : "", f._mchHa =
                                p(n.hash), f._mchRe = p(k.referrer), f._mchQp = p(n.search.substr(1).replace(/&/g, "__-__")), r("visitWebPage", d, f); else if (!(h.cookieAnon || e(l.Mkto) && e(l.Mkto.formSubmit))) {
                                c = [];
                                g = k.forms;
                                d = g.length;
                                var m, s, q;
                                for (f = 0; f < d; f += 1)if (y(g[f], "lpeRegForm"))for (s = g[f].elements, q = s.length, m = 0; m < q; m += 1)"submit" !== s[m].type || y(s[m], "mchNoDecorate") || c.push(s[m]);
                                for (g = 0; g < c.length; g += 1)Q(c[g])
                            }
                        }
                    }
                },
                munchkinFunction: function (b, a, c) {
                    var d = {}, f = {}, g = null;
                    e(c) && (d._mchKy = c);
                    switch (b) {
                        case "associateLead":
                            for (g in a)a.hasOwnProperty(g) &&
                            (d["_mchAt" + g] = a[g]);
                            t(!0);
                            r("associateLead", d);
                            break;
                        case "clickLink":
                            e(a.href) && (d._mchHr = d._mchLr = p(a.href));
                            r("clickLink", d);
                            break;
                        case "visitWebPage":
                            e(a.url) && (d._mchRu = p(a.url)), e(a.params) && (d._mchQp = p(a.params.replace(/&/g, "__-__"))), e(a.name) && (d._mchCn = a.name), f._mchRe = p(n.href), r("visitWebPage", d, f)
                    }
                },
                createTrackingCookie: function (b) {
                    t(b)
                }
            };
        Date.prototype.getTimeAlias = Date.prototype.getTime;
        q(l, "beforeunload", function () {
            for (var b; 0 < x.length;)b = x.shift(), L.apply(this, b);
            if (e(E)) {
                do b = new Date;
                while (b.getTimeAlias() < E)
            }
        });
        q(k, "click", J, !0);
        (function (b) {
            var a = !1, c = !0, d = k.documentElement, e = function (c) {
                "readystatechange" === c.type && "complete" !== k.readyState || a || (a = !0, b.call(l, c.type || c))
            }, g = null, g = function () {
                try {
                    d.doScroll("left")
                } catch (a) {
                    setTimeout(g, 50);
                    return
                }
                e("poll")
            };
            if ("complete" === k.readyState)b.call(l, "lazy"); else {
                if (k.createEventObject && d.doScroll) {
                    try {
                        c = !l.frameElement
                    } catch (h) {
                    }
                    c && g()
                }
                q(k, "DOMContentLoaded", e);
                q(k, "readystatechange", e);
                q(l, "load", e)
            }
        })(function () {
            I();
            var b = 0;
            if (e(document.links))for (b =
                                           0; b < document.links.length; b += 1)q(document.links[b], "click", J, !0)
        });
        l.MunchkinTracker = l.Munchkin = F;
        l.mktoMunchkin = F.init;
        l.mktoMunchkinFunction = F.munchkinFunction
    }
})(window);

﻿!(function (a, b) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = a.document
              ? b(a, !0)
              : function (a) {
                    if (!a.document) throw new Error("jQuery requires a window with a document");
                    return b(a);
                })
        : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = "length" in a && a.length,
            c = ea.type(a);
        return "function" !== c && !ea.isWindow(a) && (!(1 !== a.nodeType || !b) || "array" === c || 0 === b || ("number" == typeof b && b > 0 && b - 1 in a));
    }
    function d(a, b, c) {
        if (ea.isFunction(b))
            return ea.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return ea.grep(a, function (a) {
                return (a === b) !== c;
            });
        if ("string" == typeof b) {
            if (ma.test(b)) return ea.filter(b, a, c);
            b = ea.filter(b, a);
        }
        return ea.grep(a, function (a) {
            return ea.inArray(a, b) >= 0 !== c;
        });
    }
    function e(a, b) {
        do a = a[b];
        while (a && 1 !== a.nodeType);
        return a;
    }
    function f(a) {
        var b = (ua[a] = {});
        return (
            ea.each(a.match(ta) || [], function (a, c) {
                b[c] = !0;
            }),
            b
        );
    }
    function g() {
        oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h));
    }
    function h() {
        (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready());
    }
    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(za, "-$1").toLowerCase();
            if (((c = a.getAttribute(d)), "string" == typeof c)) {
                try {
                    c = "true" === c || ("false" !== c && ("null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c));
                } catch (e) {}
                ea.data(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    function j(a) {
        var b;
        for (b in a) if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function k(a, b, c, d) {
        if (ea.acceptData(a)) {
            var e,
                f,
                g = ea.expando,
                h = a.nodeType,
                i = h ? ea.cache : a,
                j = h ? a[g] : a[g] && g;
            if ((j && i[j] && (d || i[j].data)) || void 0 !== c || "string" != typeof b)
                return (
                    j || (j = h ? (a[g] = W.pop() || ea.guid++) : g),
                    i[j] || (i[j] = h ? {} : { toJSON: ea.noop }),
                    ("object" == typeof b || "function" == typeof b) && (d ? (i[j] = ea.extend(i[j], b)) : (i[j].data = ea.extend(i[j].data, b))),
                    (f = i[j]),
                    d || (f.data || (f.data = {}), (f = f.data)),
                    void 0 !== c && (f[ea.camelCase(b)] = c),
                    "string" == typeof b ? ((e = f[b]), null == e && (e = f[ea.camelCase(b)])) : (e = f),
                    e
                );
        }
    }
    function l(a, b, c) {
        if (ea.acceptData(a)) {
            var d,
                e,
                f = a.nodeType,
                g = f ? ea.cache : a,
                h = f ? a[ea.expando] : ea.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    ea.isArray(b) ? (b = b.concat(ea.map(b, ea.camelCase))) : b in d ? (b = [b]) : ((b = ea.camelCase(b)), (b = b in d ? [b] : b.split(" "))), (e = b.length);
                    for (; e--; ) delete d[b[e]];
                    if (c ? !j(d) : !ea.isEmptyObject(d)) return;
                }
                (c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : (g[h] = null));
            }
        }
    }
    function m() {
        return !0;
    }
    function n() {
        return !1;
    }
    function o() {
        try {
            return oa.activeElement;
        } catch (a) {}
    }
    function p(a) {
        var b = Ka.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) for (; b.length; ) c.createElement(b.pop());
        return c;
    }
    function q(a, b) {
        var c,
            d,
            e = 0,
            f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
        return void 0 === b || (b && ea.nodeName(a, b)) ? ea.merge([a], f) : f;
    }
    function r(a) {
        Ea.test(a.type) && (a.defaultChecked = a.checked);
    }
    function s(a, b) {
        return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function t(a) {
        return (a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type), a;
    }
    function u(a) {
        var b = Va.exec(a.type);
        return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
    }
    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"));
    }
    function w(a, b) {
        if (1 === b.nodeType && ea.hasData(a)) {
            var c,
                d,
                e,
                f = ea._data(a),
                g = ea._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, (g.events = {});
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = ea.extend({}, g.data));
        }
    }
    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (((c = b.nodeName.toLowerCase()), !ca.noCloneEvent && b[ea.expando])) {
                e = ea._data(b);
                for (d in e.events) ea.removeEvent(b, d, e.handle);
                b.removeAttribute(ea.expando);
            }
            "script" === c && b.text !== a.text
                ? ((t(b).text = a.text), u(b))
                : "object" === c
                ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML))
                : "input" === c && Ea.test(a.type)
                ? ((b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value))
                : "option" === c
                ? (b.defaultSelected = b.selected = a.defaultSelected)
                : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    function y(b, c) {
        var d,
            e = ea(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
        return e.detach(), f;
    }
    function z(a) {
        var b = oa,
            c = _a[a];
        return (
            c ||
                ((c = y(a, b)),
                ("none" !== c && c) ||
                    (($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement)), (b = ($a[0].contentWindow || $a[0].contentDocument).document), b.write(), b.close(), (c = y(a, b)), $a.detach()),
                (_a[a] = c)),
            c
        );
    }
    function A(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
            },
        };
    }
    function B(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--; ) if (((b = mb[e] + c), b in a)) return b;
        return d;
    }
    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            (d = a[g]),
                d.style &&
                    ((f[g] = ea._data(d, "olddisplay")),
                    (c = d.style.display),
                    b
                        ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName))))
                        : ((e = Ca(d)), ((c && "none" !== c) || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
        for (g = 0; h > g; g++) (d = a[g]), d.style && ((b && "none" !== d.style.display && "" !== d.style.display) || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function D(a, b, c) {
        var d = ib.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)),
                d
                    ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e)))
                    : ((g += ea.css(a, "padding" + Ba[f], !0, e)), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
        return g;
    }
    function F(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = ab(a),
            g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (((e = bb(a, b, f)), (0 > e || null == e) && (e = a.style[b]), db.test(e))) return e;
            (d = g && (ca.boxSizingReliable() || e === a.style[b])), (e = parseFloat(e) || 0);
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function G(a, b, c, d, e) {
        return new G.prototype.init(a, b, c, d, e);
    }
    function H() {
        return (
            setTimeout(function () {
                nb = void 0;
            }),
            (nb = ea.now())
        );
    }
    function I(a, b) {
        var c,
            d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) (c = Ba[e]), (d["margin" + c] = d["padding" + c] = a);
        return b && (d.opacity = d.width = a), d;
    }
    function J(a, b, c) {
        for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++) if ((d = e[f].call(c, b, a))) return d;
    }
    function K(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = this,
            m = {},
            n = a.style,
            o = a.nodeType && Ca(a),
            p = ea._data(a, "fxshow");
        c.queue ||
            ((h = ea._queueHooks(a, "fx")),
            null == h.unqueued &&
                ((h.unqueued = 0),
                (i = h.empty.fire),
                (h.empty.fire = function () {
                    h.unqueued || i();
                })),
            h.unqueued++,
            l.always(function () {
                l.always(function () {
                    h.unqueued--, ea.queue(a, "fx").length || h.empty.fire();
                });
            })),
            1 === a.nodeType &&
                ("height" in b || "width" in b) &&
                ((c.overflow = [n.overflow, n.overflowX, n.overflowY]),
                (j = ea.css(a, "display")),
                (k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j),
                "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? (n.zoom = 1) : (n.display = "inline-block"))),
            c.overflow &&
                ((n.overflow = "hidden"),
                ca.shrinkWrapBlocks() ||
                    l.always(function () {
                        (n.overflow = c.overflow[0]), (n.overflowX = c.overflow[1]), (n.overflowY = c.overflow[2]);
                    }));
        for (d in b)
            if (((e = b[d]), pb.exec(e))) {
                if ((delete b[d], (f = f || "toggle" === e), e === (o ? "hide" : "show"))) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0;
                }
                m[d] = (p && p[d]) || ea.style(a, d);
            } else j = void 0;
        if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : (p = ea._data(a, "fxshow", {})),
                f && (p.hidden = !o),
                o
                    ? ea(a).show()
                    : l.done(function () {
                          ea(a).hide();
                      }),
                l.done(function () {
                    var b;
                    ea._removeData(a, "fxshow");
                    for (b in m) ea.style(a, b, m[b]);
                });
            for (d in m) (g = J(o ? p[d] : 0, d, l)), d in p || ((p[d] = g.start), o && ((g.end = g.start), (g.start = "width" === d || "height" === d ? 1 : 0)));
        }
    }
    function L(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (((d = ea.camelCase(c)), (e = b[d]), (f = a[c]), ea.isArray(f) && ((e = f[1]), (f = a[c] = f[0])), c !== d && ((a[d] = f), delete a[c]), (g = ea.cssHooks[d]), g && "expand" in g)) {
                (f = g.expand(f)), delete a[d];
                for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
            } else b[d] = e;
    }
    function M(a, b, c) {
        var d,
            e,
            f = 0,
            g = sb.length,
            h = ea.Deferred().always(function () {
                delete i.elem;
            }),
            i = function () {
                if (e) return !1;
                for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
            },
            j = h.promise({
                elem: a,
                props: ea.extend({}, b),
                opts: ea.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: nb || H(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
                },
            }),
            k = j.props;
        for (L(k, j.opts.specialEasing); g > f; f++) if ((d = sb[f].call(j, a, k, j.opts))) return d;
        return (
            ea.map(k, J, j),
            ea.isFunction(j.opts.start) && j.opts.start.call(a, j),
            ea.fx.timer(ea.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        );
    }
    function N(a) {
        return function (b, c) {
            "string" != typeof b && ((c = b), (b = "*"));
            var d,
                e = 0,
                f = b.toLowerCase().match(ta) || [];
            if (ea.isFunction(c)) for (; (d = f[e++]); ) "+" === d.charAt(0) ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function O(a, b, c, d) {
        function e(h) {
            var i;
            return (
                (f[h] = !0),
                ea.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? (g ? !(i = j) : void 0) : (b.dataTypes.unshift(j), e(j), !1);
                }),
                i
            );
        }
        var f = {},
            g = a === Rb;
        return e(b.dataTypes[0]) || (!f["*"] && e("*"));
    }
    function P(a, b) {
        var c,
            d,
            e = ea.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && ea.extend(!0, a, c), a;
    }
    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break;
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                d || (d = g);
            }
            f = f || d;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function R(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), (i = f), (f = k.shift())))
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (((g = j[i + " " + f] || j["* " + f]), !g))
                        for (e in j)
                            if (((h = e.split(" ")), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
                                g === !0 ? (g = j[e]) : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                            }
                }
        return { state: "success", data: b };
    }
    function S(a, b, c, d) {
        var e;
        if (ea.isArray(b))
            ea.each(b, function (b, e) {
                c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
            });
        else if (c || "object" !== ea.type(b)) d(a, b);
        else for (e in b) S(a + "[" + e + "]", b[e], c, d);
    }
    function T() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    function V(a) {
        return ea.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow);
    }
    var W = [],
        X = W.slice,
        Y = W.concat,
        Z = W.push,
        $ = W.indexOf,
        _ = {},
        aa = _.toString,
        ba = _.hasOwnProperty,
        ca = {},
        da = "1.11.3",
        ea = function (a, b) {
            return new ea.fn.init(a, b);
        },
        fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ga = /^-ms-/,
        ha = /-([\da-z])/gi,
        ia = function (a, b) {
            return b.toUpperCase();
        };
    (ea.fn = ea.prototype = {
        jquery: da,
        constructor: ea,
        selector: "",
        length: 0,
        toArray: function () {
            return X.call(this);
        },
        get: function (a) {
            return null != a ? (0 > a ? this[a + this.length] : this[a]) : X.call(this);
        },
        pushStack: function (a) {
            var b = ea.merge(this.constructor(), a);
            return (b.prevObject = this), (b.context = this.context), b;
        },
        each: function (a, b) {
            return ea.each(this, a, b);
        },
        map: function (a) {
            return this.pushStack(
                ea.map(this, function (b, c) {
                    return a.call(b, c, b);
                })
            );
        },
        slice: function () {
            return this.pushStack(X.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: Z,
        sort: W.sort,
        splice: W.splice,
    }),
        (ea.extend = ea.fn.extend = function () {
            var a,
                b,
                c,
                d,
                e,
                f,
                g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && ((g = this), h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e)
                        (a = g[d]),
                            (c = e[d]),
                            g !== c &&
                                (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c)))
                                    ? (b ? ((b = !1), (f = a && ea.isArray(a) ? a : [])) : (f = a && ea.isPlainObject(a) ? a : {}), (g[d] = ea.extend(j, f, c)))
                                    : void 0 !== c && (g[d] = c));
            return g;
        }),
        ea.extend({
            expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a);
            },
            noop: function () {},
            isFunction: function (a) {
                return "function" === ea.type(a);
            },
            isArray:
                Array.isArray ||
                function (a) {
                    return "array" === ea.type(a);
                },
            isWindow: function (a) {
                return null != a && a == a.window;
            },
            isNumeric: function (a) {
                return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0;
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0;
            },
            isPlainObject: function (a) {
                var b;
                if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
                try {
                    if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1;
                } catch (c) {
                    return !1;
                }
                if (ca.ownLast) for (b in a) return ba.call(a, b);
                for (b in a);
                return void 0 === b || ba.call(a, b);
            },
            type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a;
            },
            globalEval: function (b) {
                b &&
                    ea.trim(b) &&
                    (
                        a.execScript ||
                        function (b) {
                            a.eval.call(a, b);
                        }
                    )(b);
            },
            camelCase: function (a) {
                return a.replace(ga, "ms-").replace(ha, ia);
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
            },
            each: function (a, b, d) {
                var e,
                    f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h) for (; g > f && ((e = b.apply(a[f], d)), e !== !1); f++);
                    else for (f in a) if (((e = b.apply(a[f], d)), e === !1)) break;
                } else if (h) for (; g > f && ((e = b.call(a[f], f, a[f])), e !== !1); f++);
                else for (f in a) if (((e = b.call(a[f], f, a[f])), e === !1)) break;
                return a;
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(fa, "");
            },
            makeArray: function (a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d;
            },
            inArray: function (a, b, c) {
                var d;
                if (b) {
                    if ($) return $.call(b, a, c);
                    for (d = b.length, c = c ? (0 > c ? Math.max(0, d + c) : c) : 0; d > c; c++) if (c in b && b[c] === a) return c;
                }
                return -1;
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; ) a[e++] = b[d++];
                if (c !== c) for (; void 0 !== b[d]; ) a[e++] = b[d++];
                return (a.length = e), a;
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) (d = !b(a[f], f)), d !== h && e.push(a[f]);
                return e;
            },
            map: function (a, b, d) {
                var e,
                    f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h) for (; g > f; f++) (e = b(a[f], f, d)), null != e && i.push(e);
                else for (f in a) (e = b(a[f], f, d)), null != e && i.push(e);
                return Y.apply([], i);
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, e;
                return (
                    "string" == typeof b && ((e = a[b]), (b = a), (a = e)),
                    ea.isFunction(a)
                        ? ((c = X.call(arguments, 2)),
                          (d = function () {
                              return a.apply(b || this, c.concat(X.call(arguments)));
                          }),
                          (d.guid = a.guid = a.guid || ea.guid++),
                          d)
                        : void 0
                );
            },
            now: function () {
                return +new Date();
            },
            support: ca,
        }),
        ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
            _["[object " + b + "]"] = b.toLowerCase();
        });
    var ja = (function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if (((b ? b.ownerDocument || b : O) !== G && F(b), (b = b || G), (c = c || []), (h = b.nodeType), "string" != typeof a || !a || (1 !== h && 9 !== h && 11 !== h))) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if ((g = e[1])) {
                        if (9 === h) {
                            if (((f = b.getElementById(g)), !f || !f.parentNode)) return c;
                            if (f.id === g) return c.push(f), c;
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c;
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c;
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (((n = l = N), (o = b), (p = 1 !== h && a), 1 === h && "object" !== b.nodeName.toLowerCase())) {
                        for (j = z(a), (l = b.getAttribute("id")) ? (n = l.replace(ua, "\\$&")) : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--; ) j[i] = n + m(j[i]);
                        (o = (ta.test(a) && k(b.parentNode)) || b), (p = j.join(","));
                    }
                    if (p)
                        try {
                            return $.apply(c, o.querySelectorAll(p)), c;
                        } catch (q) {
                        } finally {
                            l || b.removeAttribute("id");
                        }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d);
        }
        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], (a[c + " "] = d);
            }
            var b = [];
            return a;
        }
        function d(a) {
            return (a[N] = !0), a;
        }
        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), (b = null);
            }
        }
        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) w.attrHandle[c[d]] = b;
        }
        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function j(a) {
            return d(function (b) {
                return (
                    (b = +b),
                    d(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--; ) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                    })
                );
            });
        }
        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function l() {}
        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first
                ? function (b, c, f) {
                      for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
                  }
                : function (b, c, g) {
                      var h,
                          i,
                          j = [P, f];
                      if (g) {
                          for (; (b = b[d]); ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                      } else
                          for (; (b = b[d]); )
                              if (1 === b.nodeType || e) {
                                  if (((i = b[N] || (b[N] = {})), (h = i[d]) && h[0] === P && h[1] === f)) return (j[2] = h[2]);
                                  if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                              }
                  };
        }
        function o(a) {
            return a.length > 1
                ? function (b, c, d) {
                      for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                      return !0;
                  }
                : a[0];
        }
        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d;
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g;
        }
        function r(a, b, c, e, f, g) {
            return (
                e && !e[N] && (e = r(e)),
                f && !f[N] && (f = r(f, g)),
                d(function (d, g, h, i) {
                    var j,
                        k,
                        l,
                        m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || (!d && b) ? r : q(r, m, a, h, i),
                        t = c ? (f || (d ? a : o || e) ? [] : g) : s;
                    if ((c && c(s, t, h, i), e)) for (j = q(t, n), e(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--; ) (l = t[k]) && j.push((s[k] = l));
                                f(null, (t = []), j, i);
                            }
                            for (k = t.length; k--; ) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l));
                        }
                    } else (t = q(t === g ? t.splice(o, t.length) : t)), f ? f(null, g, t, i) : $.apply(g, t);
                })
            );
        }
        function s(a) {
            for (
                var b,
                    c,
                    d,
                    e = a.length,
                    f = w.relative[a[0].type],
                    g = f || w.relative[" "],
                    h = f ? 1 : 0,
                    i = n(
                        function (a) {
                            return a === b;
                        },
                        g,
                        !0
                    ),
                    j = n(
                        function (a) {
                            return aa(b, a) > -1;
                        },
                        g,
                        !0
                    ),
                    k = [
                        function (a, c, d) {
                            var e = (!f && (d || c !== C)) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                            return (b = null), e;
                        },
                    ];
                e > h;
                h++
            )
                if ((c = w.relative[a[h].type])) k = [n(o(k), c)];
                else {
                    if (((c = w.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s((a = a.slice(d))), e > d && m(a));
                    }
                    k.push(c);
                }
            return o(k);
        }
        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function (d, g, h, i, j) {
                    var k,
                        l,
                        m,
                        n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || (f && w.find.TAG("*", j)),
                        u = (P += null == s ? 1 : Math.random() || 0.1),
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; (m = a[l++]); )
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break;
                                }
                            j && (P = u);
                        }
                        e && ((k = !m && k) && n--, d && p.push(k));
                    }
                    if (((n += o), e && o !== n)) {
                        for (l = 0; (m = c[l++]); ) m(p, r, g, h);
                        if (d) {
                            if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r);
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
                    }
                    return j && ((P = u), (C = s)), p;
                };
            return e ? d(g) : g;
        }
        var u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C,
            D,
            E,
            F,
            G,
            H,
            I,
            J,
            K,
            L,
            M,
            N = "sizzle" + 1 * new Date(),
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function (a, b) {
                return a === b && (E = !0), 0;
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1;
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"),
            ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"),
            ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"),
            oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i"),
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            wa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
            },
            xa = function () {
                F();
            };
        try {
            $.apply((X = _.call(O.childNodes)), O.childNodes), X[O.childNodes.length].nodeType;
        } catch (ya) {
            $ = {
                apply: X.length
                    ? function (a, b) {
                          Z.apply(a, _.call(b));
                      }
                    : function (a, b) {
                          for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                          a.length = c - 1;
                      },
            };
        }
        (v = b.support = {}),
            (y = b.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName;
            }),
            (F = b.setDocument = function (a) {
                var b,
                    c,
                    d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement
                    ? ((G = d),
                      (H = d.documentElement),
                      (c = d.defaultView),
                      c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)),
                      (I = !y(d)),
                      (v.attributes = e(function (a) {
                          return (a.className = "i"), !a.getAttribute("className");
                      })),
                      (v.getElementsByTagName = e(function (a) {
                          return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length;
                      })),
                      (v.getElementsByClassName = ra.test(d.getElementsByClassName)),
                      (v.getById = e(function (a) {
                          return (H.appendChild(a).id = N), !d.getElementsByName || !d.getElementsByName(N).length;
                      })),
                      v.getById
                          ? ((w.find.ID = function (a, b) {
                                if ("undefined" != typeof b.getElementById && I) {
                                    var c = b.getElementById(a);
                                    return c && c.parentNode ? [c] : [];
                                }
                            }),
                            (w.filter.ID = function (a) {
                                var b = a.replace(va, wa);
                                return function (a) {
                                    return a.getAttribute("id") === b;
                                };
                            }))
                          : (delete w.find.ID,
                            (w.filter.ID = function (a) {
                                var b = a.replace(va, wa);
                                return function (a) {
                                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                    return c && c.value === b;
                                };
                            })),
                      (w.find.TAG = v.getElementsByTagName
                          ? function (a, b) {
                                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0;
                            }
                          : function (a, b) {
                                var c,
                                    d = [],
                                    e = 0,
                                    f = b.getElementsByTagName(a);
                                if ("*" === a) {
                                    for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                                    return d;
                                }
                                return f;
                            }),
                      (w.find.CLASS =
                          v.getElementsByClassName &&
                          function (a, b) {
                              return I ? b.getElementsByClassName(a) : void 0;
                          }),
                      (K = []),
                      (J = []),
                      (v.qsa = ra.test(d.querySelectorAll)) &&
                          (e(function (a) {
                              (H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>"),
                                  a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"),
                                  a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"),
                                  a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="),
                                  a.querySelectorAll(":checked").length || J.push(":checked"),
                                  a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]");
                          }),
                          e(function (a) {
                              var b = d.createElement("input");
                              b.setAttribute("type", "hidden"),
                                  a.appendChild(b).setAttribute("name", "D"),
                                  a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="),
                                  a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                                  a.querySelectorAll("*,:x"),
                                  J.push(",.*:");
                          })),
                      (v.matchesSelector = ra.test((L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector))) &&
                          e(function (a) {
                              (v.disconnectedMatch = L.call(a, "div")), L.call(a, "[s!='']:x"), K.push("!=", ga);
                          }),
                      (J = J.length && new RegExp(J.join("|"))),
                      (K = K.length && new RegExp(K.join("|"))),
                      (b = ra.test(H.compareDocumentPosition)),
                      (M =
                          b || ra.test(H.contains)
                              ? function (a, b) {
                                    var c = 9 === a.nodeType ? a.documentElement : a,
                                        d = b && b.parentNode;
                                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                                }
                              : function (a, b) {
                                    if (b) for (; (b = b.parentNode); ) if (b === a) return !0;
                                    return !1;
                                }),
                      (U = b
                          ? function (a, b) {
                                if (a === b) return (E = !0), 0;
                                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                return c
                                    ? c
                                    : ((c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1),
                                      1 & c || (!v.sortDetached && b.compareDocumentPosition(a) === c)
                                          ? a === d || (a.ownerDocument === O && M(O, a))
                                              ? -1
                                              : b === d || (b.ownerDocument === O && M(O, b))
                                              ? 1
                                              : D
                                              ? aa(D, a) - aa(D, b)
                                              : 0
                                          : 4 & c
                                          ? -1
                                          : 1);
                            }
                          : function (a, b) {
                                if (a === b) return (E = !0), 0;
                                var c,
                                    e = 0,
                                    f = a.parentNode,
                                    h = b.parentNode,
                                    i = [a],
                                    j = [b];
                                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                                if (f === h) return g(a, b);
                                for (c = a; (c = c.parentNode); ) i.unshift(c);
                                for (c = b; (c = c.parentNode); ) j.unshift(c);
                                for (; i[e] === j[e]; ) e++;
                                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
                            }),
                      d)
                    : G;
            }),
            (b.matches = function (a, c) {
                return b(a, null, null, c);
            }),
            (b.matchesSelector = function (a, c) {
                if (((a.ownerDocument || a) !== G && F(a), (c = c.replace(la, "='$1']")), !(!v.matchesSelector || !I || (K && K.test(c)) || (J && J.test(c)))))
                    try {
                        var d = L.call(a, c);
                        if (d || v.disconnectedMatch || (a.document && 11 !== a.document.nodeType)) return d;
                    } catch (e) {}
                return b(c, G, null, [a]).length > 0;
            }),
            (b.contains = function (a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b);
            }),
            (b.attr = function (a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
            }),
            (b.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            }),
            (b.uniqueSort = function (a) {
                var b,
                    c = [],
                    d = 0,
                    e = 0;
                if (((E = !v.detectDuplicates), (D = !v.sortStable && a.slice(0)), a.sort(U), E)) {
                    for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
                    for (; d--; ) a.splice(c[d], 1);
                }
                return (D = null), a;
            }),
            (x = b.getText = function (a) {
                var b,
                    c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a);
                    } else if (3 === e || 4 === e) return a.nodeValue;
                } else for (; (b = a[d++]); ) c += x(b);
                return c;
            }),
            (w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (a) {
                        return (a[1] = a[1].replace(va, wa)), (a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa)), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                    },
                    CHILD: function (a) {
                        return (
                            (a[1] = a[1].toLowerCase()),
                            "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), (a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3]))), (a[5] = +(a[7] + a[8] || "odd" === a[3]))) : a[3] && b.error(a[0]),
                            a
                        );
                    },
                    PSEUDO: function (a) {
                        var b,
                            c = !a[6] && a[2];
                        return oa.CHILD.test(a[0])
                            ? null
                            : (a[3] ? (a[2] = a[4] || a[5] || "") : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))), a.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a
                            ? function () {
                                  return !0;
                              }
                            : function (a) {
                                  return a.nodeName && a.nodeName.toLowerCase() === b;
                              };
                    },
                    CLASS: function (a) {
                        var b = R[a + " "];
                        return (
                            b ||
                            ((b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) &&
                                R(a, function (a) {
                                    return b.test(("string" == typeof a.className && a.className) || ("undefined" != typeof a.getAttribute && a.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (a, c, d) {
                        return function (e) {
                            var f = b.attr(e, a);
                            return null == f
                                ? "!=" === c
                                : !c ||
                                      ((f += ""),
                                      "=" === c
                                          ? f === d
                                          : "!=" === c
                                          ? f !== d
                                          : "^=" === c
                                          ? d && 0 === f.indexOf(d)
                                          : "*=" === c
                                          ? d && f.indexOf(d) > -1
                                          : "$=" === c
                                          ? d && f.slice(-d.length) === d
                                          : "~=" === c
                                          ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1
                                          : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"));
                        };
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e
                            ? function (a) {
                                  return !!a.parentNode;
                              }
                            : function (b, c, i) {
                                  var j,
                                      k,
                                      l,
                                      m,
                                      n,
                                      o,
                                      p = f !== g ? "nextSibling" : "previousSibling",
                                      q = b.parentNode,
                                      r = h && b.nodeName.toLowerCase(),
                                      s = !i && !h;
                                  if (q) {
                                      if (f) {
                                          for (; p; ) {
                                              for (l = b; (l = l[p]); ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                              o = p = "only" === a && !o && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                          for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; (l = (++n && l && l[p]) || (m = n = 0) || o.pop()); )
                                              if (1 === l.nodeType && ++m && l === b) {
                                                  k[a] = [P, n, m];
                                                  break;
                                              }
                                      } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                      else for (; (l = (++n && l && l[p]) || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); );
                                      return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (a, c) {
                        var e,
                            f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N]
                            ? f(c)
                            : f.length > 1
                            ? ((e = [a, a, "", c]),
                              w.setFilters.hasOwnProperty(a.toLowerCase())
                                  ? d(function (a, b) {
                                        for (var d, e = f(a, c), g = e.length; g--; ) (d = aa(a, e[g])), (a[d] = !(b[d] = e[g]));
                                    })
                                  : function (a) {
                                        return f(a, 0, e);
                                    })
                            : f;
                    },
                },
                pseudos: {
                    not: d(function (a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N]
                            ? d(function (a, b, c, d) {
                                  for (var f, g = e(a, null, d, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                              })
                            : function (a, d, f) {
                                  return (b[0] = a), e(b, null, f, c), (b[0] = null), !c.pop();
                              };
                    }),
                    has: d(function (a) {
                        return function (c) {
                            return b(a, c).length > 0;
                        };
                    }),
                    contains: d(function (a) {
                        return (
                            (a = a.replace(va, wa)),
                            function (b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1;
                            }
                        );
                    }),
                    lang: d(function (a) {
                        return (
                            na.test(a || "") || b.error("unsupported lang: " + a),
                            (a = a.replace(va, wa).toLowerCase()),
                            function (b) {
                                var c;
                                do if ((c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))) return (c = c.toLowerCase()), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id;
                    },
                    root: function (a) {
                        return a === H;
                    },
                    focus: function (a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                    },
                    enabled: function (a) {
                        return a.disabled === !1;
                    },
                    disabled: function (a) {
                        return a.disabled === !0;
                    },
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b && !!a.checked) || ("option" === b && !!a.selected);
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (a) {
                        return !w.pseudos.empty(a);
                    },
                    header: function (a) {
                        return qa.test(a.nodeName);
                    },
                    input: function (a) {
                        return pa.test(a.nodeName);
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b && "button" === a.type) || "button" === b;
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                    },
                    first: j(function () {
                        return [0];
                    }),
                    last: j(function (a, b) {
                        return [b - 1];
                    }),
                    eq: j(function (a, b, c) {
                        return [0 > c ? c + b : c];
                    }),
                    even: j(function (a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    odd: j(function (a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    lt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                        return a;
                    }),
                    gt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                        return a;
                    }),
                },
            }),
            (w.pseudos.nth = w.pseudos.eq);
        for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[u] = h(u);
        for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
        return (
            (l.prototype = w.filters = w.pseudos),
            (w.setFilters = new l()),
            (z = b.tokenize = function (a, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h; ) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push((f = []))), (d = !1), (e = ka.exec(h)) && ((d = e.shift()), f.push({ value: d, type: e[0].replace(ia, " ") }), (h = h.slice(d.length)));
                    for (g in w.filter) !(e = oa[g].exec(h)) || (j[g] && !(e = j[g](e))) || ((d = e.shift()), f.push({ value: d, type: g, matches: e }), (h = h.slice(d.length)));
                    if (!d) break;
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
            }),
            (A = b.compile = function (a, b) {
                var c,
                    d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--; ) (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
                    (f = T(a, t(e, d))), (f.selector = a);
                }
                return f;
            }),
            (B = b.select = function (a, b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i,
                    j = "function" == typeof a && a,
                    l = !d && z((a = j.selector || a));
                if (((c = c || []), 1 === l.length)) {
                    if (((f = l[0] = l[0].slice(0)), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type])) {
                        if (((b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0]), !b)) return c;
                        j && (b = b.parentNode), (a = a.slice(f.shift().value.length));
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && ((g = f[e]), !w.relative[(h = g.type)]); )
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), (ta.test(f[0].type) && k(b.parentNode)) || b))) {
                            if ((f.splice(e, 1), (a = d.length && m(f)), !a)) return $.apply(c, d), c;
                            break;
                        }
                }
                return (j || A(a, l))(d, b, !I, c, (ta.test(a) && k(b.parentNode)) || b), c;
            }),
            (v.sortStable = N.split("").sort(U).join("") === N),
            (v.detectDuplicates = !!E),
            F(),
            (v.sortDetached = e(function (a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"));
            })),
            e(function (a) {
                return (a.innerHTML = "<a href='#'></a>"), "#" === a.firstChild.getAttribute("href");
            }) ||
                f("type|href|height|width", function (a, b, c) {
                    return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                }),
            (v.attributes &&
                e(function (a) {
                    return (a.innerHTML = "<input/>"), a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
                })) ||
                f("value", function (a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
                }),
            e(function (a) {
                return null == a.getAttribute("disabled");
            }) ||
                f(ba, function (a, b, c) {
                    var d;
                    return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
                }),
            b
        );
    })(a);
    (ea.find = ja), (ea.expr = ja.selectors), (ea.expr[":"] = ea.expr.pseudos), (ea.unique = ja.uniqueSort), (ea.text = ja.getText), (ea.isXMLDoc = ja.isXML), (ea.contains = ja.contains);
    var ka = ea.expr.match.needsContext,
        la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ma = /^.[^:#\[\.,]*$/;
    (ea.filter = function (a, b, c) {
        var d = b[0];
        return (
            c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType
                ? ea.find.matchesSelector(d, a)
                    ? [d]
                    : []
                : ea.find.matches(
                      a,
                      ea.grep(b, function (a) {
                          return 1 === a.nodeType;
                      })
                  )
        );
    }),
        ea.fn.extend({
            find: function (a) {
                var b,
                    c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a)
                    return this.pushStack(
                        ea(a).filter(function () {
                            for (b = 0; e > b; b++) if (ea.contains(d[b], this)) return !0;
                        })
                    );
                for (b = 0; e > b; b++) ea.find(a, d[b], c);
                return (c = this.pushStack(e > 1 ? ea.unique(c) : c)), (c.selector = this.selector ? this.selector + " " + a : a), c;
            },
            filter: function (a) {
                return this.pushStack(d(this, a || [], !1));
            },
            not: function (a) {
                return this.pushStack(d(this, a || [], !0));
            },
            is: function (a) {
                return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length;
            },
        });
    var na,
        oa = a.document,
        pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        qa = (ea.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (((c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a)), !c || (!c[1] && b))) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (((b = b instanceof ea ? b[0] : b), ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b)))
                        for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this;
                }
                if (((d = oa.getElementById(c[2])), d && d.parentNode)) {
                    if (d.id !== c[2]) return na.find(a);
                    (this.length = 1), (this[0] = d);
                }
                return (this.context = oa), (this.selector = a), this;
            }
            return a.nodeType
                ? ((this.context = this[0] = a), (this.length = 1), this)
                : ea.isFunction(a)
                ? "undefined" != typeof na.ready
                    ? na.ready(a)
                    : a(ea)
                : (void 0 !== a.selector && ((this.selector = a.selector), (this.context = a.context)), ea.makeArray(a, this));
        });
    (qa.prototype = ea.fn), (na = ea(oa));
    var ra = /^(?:parents|prev(?:Until|All))/,
        sa = { children: !0, contents: !0, next: !0, prev: !0 };
    ea.extend({
        dir: function (a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c)); ) 1 === e.nodeType && d.push(e), (e = e[b]);
            return d;
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        },
    }),
        ea.fn.extend({
            has: function (a) {
                var b,
                    c = ea(a, this),
                    d = c.length;
                return this.filter(function () {
                    for (b = 0; d > b; b++) if (ea.contains(this, c[b])) return !0;
                });
            },
            closest: function (a, b) {
                for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                            f.push(c);
                            break;
                        }
                return this.pushStack(f.length > 1 ? ea.unique(f) : f);
            },
            index: function (a) {
                return a ? ("string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            },
            add: function (a, b) {
                return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))));
            },
            addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
            },
        }),
        ea.each(
            {
                parent: function (a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null;
                },
                parents: function (a) {
                    return ea.dir(a, "parentNode");
                },
                parentsUntil: function (a, b, c) {
                    return ea.dir(a, "parentNode", c);
                },
                next: function (a) {
                    return e(a, "nextSibling");
                },
                prev: function (a) {
                    return e(a, "previousSibling");
                },
                nextAll: function (a) {
                    return ea.dir(a, "nextSibling");
                },
                prevAll: function (a) {
                    return ea.dir(a, "previousSibling");
                },
                nextUntil: function (a, b, c) {
                    return ea.dir(a, "nextSibling", c);
                },
                prevUntil: function (a, b, c) {
                    return ea.dir(a, "previousSibling", c);
                },
                siblings: function (a) {
                    return ea.sibling((a.parentNode || {}).firstChild, a);
                },
                children: function (a) {
                    return ea.sibling(a.firstChild);
                },
                contents: function (a) {
                    return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes);
                },
            },
            function (a, b) {
                ea.fn[a] = function (c, d) {
                    var e = ea.map(this, b, c);
                    return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e);
                };
            }
        );
    var ta = /\S+/g,
        ua = {};
    (ea.Callbacks = function (a) {
        a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
        var b,
            c,
            d,
            e,
            g,
            h,
            i = [],
            j = !a.once && [],
            k = function (f) {
                for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
                    if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break;
                    }
                (b = !1), i && (j ? j.length && k(j.shift()) : c ? (i = []) : l.disable());
            },
            l = {
                add: function () {
                    if (i) {
                        var d = i.length;
                        !(function f(b) {
                            ea.each(b, function (b, c) {
                                var d = ea.type(c);
                                "function" === d ? (a.unique && l.has(c)) || i.push(c) : c && c.length && "string" !== d && f(c);
                            });
                        })(arguments),
                            b ? (e = i.length) : c && ((h = d), k(c));
                    }
                    return this;
                },
                remove: function () {
                    return (
                        i &&
                            ea.each(arguments, function (a, c) {
                                for (var d; (d = ea.inArray(c, i, d)) > -1; ) i.splice(d, 1), b && (e >= d && e--, g >= d && g--);
                            }),
                        this
                    );
                },
                has: function (a) {
                    return a ? ea.inArray(a, i) > -1 : !(!i || !i.length);
                },
                empty: function () {
                    return (i = []), (e = 0), this;
                },
                disable: function () {
                    return (i = j = c = void 0), this;
                },
                disabled: function () {
                    return !i;
                },
                lock: function () {
                    return (j = void 0), c || l.disable(), this;
                },
                locked: function () {
                    return !j;
                },
                fireWith: function (a, c) {
                    return !i || (d && !j) || ((c = c || []), (c = [a, c.slice ? c.slice() : c]), b ? j.push(c) : k(c)), this;
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!d;
                },
            };
        return l;
    }),
        ea.extend({
            Deferred: function (a) {
                var b = [
                        ["resolve", "done", ea.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ea.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ea.Callbacks("memory")],
                    ],
                    c = "pending",
                    d = {
                        state: function () {
                            return c;
                        },
                        always: function () {
                            return e.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var a = arguments;
                            return ea
                                .Deferred(function (c) {
                                    ea.each(b, function (b, f) {
                                        var g = ea.isFunction(a[b]) && a[b];
                                        e[f[1]](function () {
                                            var a = g && g.apply(this, arguments);
                                            a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                                        });
                                    }),
                                        (a = null);
                                })
                                .promise();
                        },
                        promise: function (a) {
                            return null != a ? ea.extend(a, d) : d;
                        },
                    },
                    e = {};
                return (
                    (d.pipe = d.then),
                    ea.each(b, function (a, f) {
                        var g = f[2],
                            h = f[3];
                        (d[f[1]] = g.add),
                            h &&
                                g.add(
                                    function () {
                                        c = h;
                                    },
                                    b[1 ^ a][2].disable,
                                    b[2][2].lock
                                ),
                            (e[f[0]] = function () {
                                return e[f[0] + "With"](this === e ? d : this, arguments), this;
                            }),
                            (e[f[0] + "With"] = g.fireWith);
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
                );
            },
            when: function (a) {
                var b,
                    c,
                    d,
                    e = 0,
                    f = X.call(arguments),
                    g = f.length,
                    h = 1 !== g || (a && ea.isFunction(a.promise)) ? g : 0,
                    i = 1 === h ? a : ea.Deferred(),
                    j = function (a, c, d) {
                        return function (e) {
                            (c[a] = this), (d[a] = arguments.length > 1 ? X.call(arguments) : e), d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                        };
                    };
                if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise();
            },
        });
    var va;
    (ea.fn.ready = function (a) {
        return ea.ready.promise().done(a), this;
    }),
        ea.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? ea.readyWait++ : ea.ready(!0);
            },
            ready: function (a) {
                if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                    if (!oa.body) return setTimeout(ea.ready);
                    (ea.isReady = !0), (a !== !0 && --ea.readyWait > 0) || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")));
                }
            },
        }),
        (ea.ready.promise = function (b) {
            if (!va)
                if (((va = ea.Deferred()), "complete" === oa.readyState)) setTimeout(ea.ready);
                else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
                else {
                    oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                    var c = !1;
                    try {
                        c = null == a.frameElement && oa.documentElement;
                    } catch (d) {}
                    c &&
                        c.doScroll &&
                        !(function e() {
                            if (!ea.isReady) {
                                try {
                                    c.doScroll("left");
                                } catch (a) {
                                    return setTimeout(e, 50);
                                }
                                g(), ea.ready();
                            }
                        })();
                }
            return va.promise(b);
        });
    var wa,
        xa = "undefined";
    for (wa in ea(ca)) break;
    (ca.ownLast = "0" !== wa),
        (ca.inlineBlockNeedsLayout = !1),
        ea(function () {
            var a, b, c, d;
            (c = oa.getElementsByTagName("body")[0]),
                c &&
                    c.style &&
                    ((b = oa.createElement("div")),
                    (d = oa.createElement("div")),
                    (d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    c.appendChild(d).appendChild(b),
                    typeof b.style.zoom !== xa && ((b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"), (ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth), a && (c.style.zoom = 1)),
                    c.removeChild(d));
        }),
        (function () {
            var a = oa.createElement("div");
            if (null == ca.deleteExpando) {
                ca.deleteExpando = !0;
                try {
                    delete a.test;
                } catch (b) {
                    ca.deleteExpando = !1;
                }
            }
            a = null;
        })(),
        (ea.acceptData = function (a) {
            var b = ea.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return (1 === c || 9 === c) && (!b || (b !== !0 && a.getAttribute("classid") === b));
        });
    var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        za = /([A-Z])/g;
    ea.extend({
        cache: {},
        noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },
        hasData: function (a) {
            return (a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando]), !!a && !j(a);
        },
        data: function (a, b, c) {
            return k(a, b, c);
        },
        removeData: function (a, b) {
            return l(a, b);
        },
        _data: function (a, b, c) {
            return k(a, b, c, !0);
        },
        _removeData: function (a, b) {
            return l(a, b, !0);
        },
    }),
        ea.fn.extend({
            data: function (a, b) {
                var c,
                    d,
                    e,
                    f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && ((e = ea.data(f)), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--; ) g[c] && ((d = g[c].name), 0 === d.indexOf("data-") && ((d = ea.camelCase(d.slice(5))), i(f, d, e[d])));
                        ea._data(f, "parsedAttrs", !0);
                    }
                    return e;
                }
                return "object" == typeof a
                    ? this.each(function () {
                          ea.data(this, a);
                      })
                    : arguments.length > 1
                    ? this.each(function () {
                          ea.data(this, a, b);
                      })
                    : f
                    ? i(f, a, ea.data(f, a))
                    : void 0;
            },
            removeData: function (a) {
                return this.each(function () {
                    ea.removeData(this, a);
                });
            },
        }),
        ea.extend({
            queue: function (a, b, c) {
                var d;
                return a ? ((b = (b || "fx") + "queue"), (d = ea._data(a, b)), c && (!d || ea.isArray(c) ? (d = ea._data(a, b, ea.makeArray(c))) : d.push(c)), d || []) : void 0;
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = ea.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = ea._queueHooks(a, b),
                    g = function () {
                        ea.dequeue(a, b);
                    };
                "inprogress" === e && ((e = c.shift()), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return (
                    ea._data(a, c) ||
                    ea._data(a, c, {
                        empty: ea.Callbacks("once memory").add(function () {
                            ea._removeData(a, b + "queue"), ea._removeData(a, c);
                        }),
                    })
                );
            },
        }),
        ea.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return (
                    "string" != typeof a && ((b = a), (a = "fx"), c--),
                    arguments.length < c
                        ? ea.queue(this[0], a)
                        : void 0 === b
                        ? this
                        : this.each(function () {
                              var c = ea.queue(this, a, b);
                              ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a);
                          })
                );
            },
            dequeue: function (a) {
                return this.each(function () {
                    ea.dequeue(this, a);
                });
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", []);
            },
            promise: function (a, b) {
                var c,
                    d = 1,
                    e = ea.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f]);
                    };
                for ("string" != typeof a && ((b = a), (a = void 0)), a = a || "fx"; g--; ) (c = ea._data(f[g], a + "queueHooks")), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b);
            },
        });
    var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ba = ["Top", "Right", "Bottom", "Left"],
        Ca = function (a, b) {
            return (a = b || a), "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a);
        },
        Da = (ea.access = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === ea.type(c)) {
                e = !0;
                for (h in c) ea.access(a, b, h, c[h], !0, f, g);
            } else if (
                void 0 !== d &&
                ((e = !0),
                ea.isFunction(d) || (g = !0),
                j &&
                    (g
                        ? (b.call(a, d), (b = null))
                        : ((j = b),
                          (b = function (a, b, c) {
                              return j.call(ea(a), c);
                          }))),
                b)
            )
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
        }),
        Ea = /^(?:checkbox|radio)$/i;
    !(function () {
        var a = oa.createElement("input"),
            b = oa.createElement("div"),
            c = oa.createDocumentFragment();
        if (
            ((b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (ca.leadingWhitespace = 3 === b.firstChild.nodeType),
            (ca.tbody = !b.getElementsByTagName("tbody").length),
            (ca.htmlSerialize = !!b.getElementsByTagName("link").length),
            (ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML),
            (a.type = "checkbox"),
            (a.checked = !0),
            c.appendChild(a),
            (ca.appendChecked = a.checked),
            (b.innerHTML = "<textarea>x</textarea>"),
            (ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue),
            c.appendChild(b),
            (b.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
            (ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (ca.noCloneEvent = !0),
            b.attachEvent &&
                (b.attachEvent("onclick", function () {
                    ca.noCloneEvent = !1;
                }),
                b.cloneNode(!0).click()),
            null == ca.deleteExpando)
        ) {
            ca.deleteExpando = !0;
            try {
                delete b.test;
            } catch (d) {
                ca.deleteExpando = !1;
            }
        }
    })(),
        (function () {
            var b,
                c,
                d = oa.createElement("div");
            for (b in { submit: !0, change: !0, focusin: !0 }) (c = "on" + b), (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), (ca[b + "Bubbles"] = d.attributes[c].expando === !1));
            d = null;
        })();
    var Fa = /^(?:input|select|textarea)$/i,
        Ga = /^key/,
        Ha = /^(?:mouse|pointer|contextmenu)|click/,
        Ia = /^(?:focusinfocus|focusoutblur)$/,
        Ja = /^([^.]*)(?:\.(.+)|)$/;
    (ea.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = ea._data(a);
            if (q) {
                for (
                    c.handler && ((i = c), (c = i.handler), (e = i.selector)),
                        c.guid || (c.guid = ea.guid++),
                        (g = q.events) || (g = q.events = {}),
                        (k = q.handle) ||
                            ((k = q.handle = function (a) {
                                return typeof ea === xa || (a && ea.event.triggered === a.type) ? void 0 : ea.event.dispatch.apply(k.elem, arguments);
                            }),
                            (k.elem = a)),
                        b = (b || "").match(ta) || [""],
                        h = b.length;
                    h--;

                )
                    (f = Ja.exec(b[h]) || []),
                        (n = p = f[1]),
                        (o = (f[2] || "").split(".").sort()),
                        n &&
                            ((j = ea.event.special[n] || {}),
                            (n = (e ? j.delegateType : j.onType) || n),
                            (j = ea.event.special[n] || {}),
                            (l = ea.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && ea.expr.match.needsContext.test(e), namespace: o.join(".") }, i)),
                            (m = g[n]) || ((m = g[n] = []), (m.delegateCount = 0), (j.setup && j.setup.call(a, d, o, k) !== !1) || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))),
                            j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                            (ea.event.global[n] = !0));
                a = null;
            }
        },
        remove: function (a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = ea.hasData(a) && ea._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ta) || [""], j = b.length; j--; )
                    if (((h = Ja.exec(b[j]) || []), (n = p = h[1]), (o = (h[2] || "").split(".").sort()), n)) {
                        for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.onType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--; )
                            (g = m[f]),
                                (!e && p !== g.origType) ||
                                    (c && c.guid !== g.guid) ||
                                    (h && !h.test(g.namespace)) ||
                                    (d && d !== g.selector && ("**" !== d || !g.selector)) ||
                                    (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) || ea.removeEvent(a, n, q.handle), delete k[n]);
                    } else for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
                ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"));
            }
        },
        trigger: function (b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m = [d || oa],
                n = ba.call(b, "type") ? b.type : b,
                o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
            if (
                ((h = k = d = d || oa),
                3 !== d.nodeType &&
                    8 !== d.nodeType &&
                    !Ia.test(n + ea.event.triggered) &&
                    (n.indexOf(".") >= 0 && ((o = n.split(".")), (n = o.shift()), o.sort()),
                    (g = n.indexOf(":") < 0 && "on" + n),
                    (b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b)),
                    (b.isTrigger = e ? 2 : 3),
                    (b.namespace = o.join(".")),
                    (b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (b.result = void 0),
                    b.target || (b.target = d),
                    (c = null == c ? [b] : ea.makeArray(c, [b])),
                    (j = ea.event.special[n] || {}),
                    e || !j.trigger || j.trigger.apply(d, c) !== !1))
            ) {
                if (!e && !j.noBubble && !ea.isWindow(d)) {
                    for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), (k = h);
                    k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a);
                }
                for (l = 0; (h = m[l++]) && !b.isPropagationStopped(); )
                    (b.type = l > 1 ? i : j.onType || n),
                        (f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle")),
                        f && f.apply(h, c),
                        (f = g && h[g]),
                        f && f.apply && ea.acceptData(h) && ((b.result = f.apply(h, c)), b.result === !1 && b.preventDefault());
                if (((b.type = n), !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d))) {
                    (k = d[g]), k && (d[g] = null), (ea.event.triggered = n);
                    try {
                        d[n]();
                    } catch (p) {}
                    (ea.event.triggered = void 0), k && (d[g] = k);
                }
                return b.result;
            }
        },
        dispatch: function (a) {
            a = ea.event.fix(a);
            var b,
                c,
                d,
                e,
                f,
                g = [],
                h = X.call(arguments),
                i = (ea._data(this, "events") || {})[a.type] || [],
                j = ea.event.special[a.type] || {};
            if (((h[0] = a), (a.delegateTarget = this), !j.preDispatch || j.preDispatch.call(this, a) !== !1)) {
                for (g = ea.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = e.elem, f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(d.namespace)) &&
                            ((a.handleObj = d), (a.data = d.data), (c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h)), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) (d = b[f]), (c = d.selector + " "), void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({ elem: i, handlers: e });
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        },
        fix: function (a) {
            if (a[ea.expando]) return a;
            var b,
                c,
                d,
                e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--; ) (c = d[b]), (a[c] = f[c]);
            return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), (a.metaKey = !!a.metaKey), g.filter ? g.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            },
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c,
                    d,
                    e,
                    f = b.button,
                    g = b.fromElement;
                return (
                    null == a.pageX &&
                        null != b.clientX &&
                        ((d = a.target.ownerDocument || oa),
                        (e = d.documentElement),
                        (c = d.body),
                        (a.pageX = b.clientX + ((e && e.scrollLeft) || (c && c.scrollLeft) || 0) - ((e && e.clientLeft) || (c && c.clientLeft) || 0)),
                        (a.pageY = b.clientY + ((e && e.scrollTop) || (c && c.scrollTop) || 0) - ((e && e.clientTop) || (c && c.clientTop) || 0))),
                    !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                    a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                    a
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== o() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (a) {}
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === o() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
                },
                _default: function (a) {
                    return ea.nodeName(a.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                },
            },
        },
        simulate: function (a, b, c, d) {
            var e = ea.extend(new ea.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        },
    }),
        (ea.removeEvent = oa.removeEventListener
            ? function (a, b, c) {
                  a.removeEventListener && a.removeEventListener(b, c, !1);
              }
            : function (a, b, c) {
                  var d = "on" + b;
                  a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c));
              }),
        (ea.Event = function (a, b) {
            return this instanceof ea.Event
                ? (a && a.type ? ((this.originalEvent = a), (this.type = a.type), (this.isDefaultPrevented = a.defaultPrevented || (void 0 === a.defaultPrevented && a.returnValue === !1) ? m : n)) : (this.type = a),
                  b && ea.extend(this, b),
                  (this.timeStamp = (a && a.timeStamp) || ea.now()),
                  void (this[ea.expando] = !0))
                : new ea.Event(a, b);
        }),
        (ea.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function () {
                var a = this.originalEvent;
                (this.isDefaultPrevented = m), a && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                (this.isPropagationStopped = m), a && (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = m), a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        ea.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
            ea.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c,
                        d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || (e !== d && !ea.contains(d, e))) && ((a.type = f.origType), (c = f.handler.apply(this, arguments)), (a.type = b)), c;
                },
            };
        }),
        ca.submitBubbles ||
            (ea.event.special.submit = {
                setup: function () {
                    return (
                        !ea.nodeName(this, "form") &&
                        void ea.event.add(this, "click._submit keypress._submit", function (a) {
                            var b = a.target,
                                c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                            c &&
                                !ea._data(c, "submitBubbles") &&
                                (ea.event.add(c, "submit._submit", function (a) {
                                    a._submit_bubble = !0;
                                }),
                                ea._data(c, "submitBubbles", !0));
                        })
                    );
                },
                postDispatch: function (a) {
                    a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0));
                },
                teardown: function () {
                    return !ea.nodeName(this, "form") && void ea.event.remove(this, "._submit");
                },
            }),
        ca.changeBubbles ||
            (ea.event.special.change = {
                setup: function () {
                    return Fa.test(this.nodeName)
                        ? (("checkbox" === this.type || "radio" === this.type) &&
                              (ea.event.add(this, "propertychange._change", function (a) {
                                  "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
                              }),
                              ea.event.add(this, "click._change", function (a) {
                                  this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0);
                              })),
                          !1)
                        : void ea.event.add(this, "beforeactivate._change", function (a) {
                              var b = a.target;
                              Fa.test(b.nodeName) &&
                                  !ea._data(b, "changeBubbles") &&
                                  (ea.event.add(b, "change._change", function (a) {
                                      !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0);
                                  }),
                                  ea._data(b, "changeBubbles", !0));
                          });
                },
                handle: function (a) {
                    var b = a.target;
                    return this !== b || a.isSimulated || a.isTrigger || ("radio" !== b.type && "checkbox" !== b.type) ? a.handleObj.handler.apply(this, arguments) : void 0;
                },
                teardown: function () {
                    return ea.event.remove(this, "._change"), !Fa.test(this.nodeName);
                },
            }),
        ca.focusinBubbles ||
            ea.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
                var c = function (a) {
                    ea.event.simulate(b, a.target, ea.event.fix(a), !0);
                };
                ea.event.special[b] = {
                    setup: function () {
                        var d = this.ownerDocument || this,
                            e = ea._data(d, b);
                        e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1);
                    },
                    teardown: function () {
                        var d = this.ownerDocument || this,
                            e = ea._data(d, b) - 1;
                        e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b));
                    },
                };
            }),
        ea.fn.extend({
            on: function (a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && ((c = c || b), (b = void 0));
                    for (f in a) this.on(f, b, c, a[f], e);
                    return this;
                }
                if ((null == c && null == d ? ((d = b), (c = b = void 0)) : null == d && ("string" == typeof b ? ((d = c), (c = void 0)) : ((d = c), (c = b), (b = void 0))), d === !1)) d = n;
                else if (!d) return this;
                return (
                    1 === e &&
                        ((g = d),
                        (d = function (a) {
                            return ea().off(a), g.apply(this, arguments);
                        }),
                        (d.guid = g.guid || (g.guid = ea.guid++))),
                    this.each(function () {
                        ea.event.add(this, a, d, c, b);
                    })
                );
            },
            one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1);
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return (d = a.handleObj), ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this;
                }
                return (
                    (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
                    c === !1 && (c = n),
                    this.each(function () {
                        ea.event.remove(this, a, c, b);
                    })
                );
            },
            trigger: function (a, b) {
                return this.each(function () {
                    ea.event.trigger(a, b, this);
                });
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                return c ? ea.event.trigger(a, b, c, !0) : void 0;
            },
        });
    var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        La = / jQuery\d+="(?:null|\d+)"/g,
        Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
        Na = /^\s+/,
        Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pa = /<([\w:]+)/,
        Qa = /<tbody/i,
        Ra = /<|&#?\w+;/,
        Sa = /<(?:script|style|link)/i,
        Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ua = /^$|\/(?:java|ecma)script/i,
        Va = /^true\/(.*)/,
        Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Xa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
        },
        Ya = p(oa),
        Za = Ya.appendChild(oa.createElement("div"));
    (Xa.optgroup = Xa.option),
        (Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead),
        (Xa.th = Xa.td),
        ea.extend({
            clone: function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i = ea.contains(a.ownerDocument, a);
                if (
                    (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? (f = a.cloneNode(!0)) : ((Za.innerHTML = a.outerHTML), Za.removeChild((f = Za.firstChild))),
                    !((ca.noCloneEvent && ca.noCloneChecked) || (1 !== a.nodeType && 11 !== a.nodeType) || ea.isXMLDoc(a)))
                )
                    for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
                if (b)
                    if (c) for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
                    else w(a, f);
                return (d = q(f, "script")), d.length > 0 && v(d, !i && q(a, "script")), (d = h = e = null), f;
            },
            buildFragment: function (a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                    if (((f = a[o]), f || 0 === f))
                        if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
                        else if (Ra.test(f)) {
                            for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--; )
                                h = h.lastChild;
                            if ((!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody))
                                for (f = "table" !== i || Qa.test(f) ? ("<table>" !== k[1] || Qa.test(f) ? 0 : h) : h.firstChild, e = f && f.childNodes.length; e--; )
                                    ea.nodeName((j = f.childNodes[e]), "tbody") && !j.childNodes.length && f.removeChild(j);
                            for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild; ) h.removeChild(h.firstChild);
                            h = m.lastChild;
                        } else n.push(b.createTextNode(f));
                for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; (f = n[o++]); )
                    if ((!d || -1 === ea.inArray(f, d)) && ((g = ea.contains(f.ownerDocument, f)), (h = q(m.appendChild(f), "script")), g && v(h), c)) for (e = 0; (f = h[e++]); ) Ua.test(f.type || "") && c.push(f);
                return (h = null), m;
            },
            cleanData: function (a, b) {
                for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                    if ((b || ea.acceptData(c)) && ((e = c[h]), (f = e && i[e]))) {
                        if (f.events) for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : (c[h] = null), W.push(e));
                    }
            },
        }),
        ea.fn.extend({
            text: function (a) {
                return Da(
                    this,
                    function (a) {
                        return void 0 === a ? ea.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || oa).createTextNode(a));
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            append: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a);
                    }
                });
            },
            prepend: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild);
                    }
                });
            },
            before: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this);
                });
            },
            after: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
                });
            },
            remove: function (a, b) {
                for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                    b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
                return this;
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild; ) a.removeChild(a.firstChild);
                    a.options && ea.nodeName(a, "select") && (a.options.length = 0);
                }
                return this;
            },
            clone: function (a, b) {
                return (
                    (a = null != a && a),
                    (b = null == b ? a : b),
                    this.map(function () {
                        return ea.clone(this, a, b);
                    })
                );
            },
            html: function (a) {
                return Da(
                    this,
                    function (a) {
                        var b = this[0] || {},
                            c = 0,
                            d = this.length;
                        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                        if (!("string" != typeof a || Sa.test(a) || (!ca.htmlSerialize && Ma.test(a)) || (!ca.leadingWhitespace && Na.test(a)) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
                            a = a.replace(Oa, "<$1></$2>");
                            try {
                                for (; d > c; c++) (b = this[c] || {}), 1 === b.nodeType && (ea.cleanData(q(b, !1)), (b.innerHTML = a));
                                b = 0;
                            } catch (e) {}
                        }
                        b && this.empty().append(a);
                    },
                    null,
                    a,
                    arguments.length
                );
            },
            replaceWith: function () {
                var a = arguments[0];
                return (
                    this.domManip(arguments, function (b) {
                        (a = this.parentNode), ea.cleanData(q(this)), a && a.replaceChild(b, this);
                    }),
                    a && (a.length || a.nodeType) ? this : this.remove()
                );
            },
            detach: function (a) {
                return this.remove(a, !0);
            },
            domManip: function (a, b) {
                a = Y.apply([], a);
                var c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    n = ea.isFunction(m);
                if (n || (j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)))
                    return this.each(function (c) {
                        var d = k.eq(c);
                        n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
                    });
                if (j && ((h = ea.buildFragment(a, this[0].ownerDocument, !1, this)), (c = h.firstChild), 1 === h.childNodes.length && (h = c), c)) {
                    for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) (d = h), i !== l && ((d = ea.clone(d, !0, !0)), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
                    if (e)
                        for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++)
                            (d = f[i]), Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                    h = c = null;
                }
                return this;
            },
        }),
        ea.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
            ea.fn[a] = function (a) {
                for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) (c = d === g ? this : this.clone(!0)), ea(f[d])[b](c), Z.apply(e, c.get());
                return this.pushStack(e);
            };
        });
    var $a,
        _a = {};
    !(function () {
        var a;
        ca.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return (
                (c = oa.getElementsByTagName("body")[0]),
                c && c.style
                    ? ((b = oa.createElement("div")),
                      (d = oa.createElement("div")),
                      (d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                      c.appendChild(d).appendChild(b),
                      typeof b.style.zoom !== xa &&
                          ((b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                          (b.appendChild(oa.createElement("div")).style.width = "5px"),
                          (a = 3 !== b.offsetWidth)),
                      c.removeChild(d),
                      a)
                    : void 0
            );
        };
    })();
    var ab,
        bb,
        cb = /^margin/,
        db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
        eb = /^(top|right|bottom|left)$/;
    a.getComputedStyle
        ? ((ab = function (b) {
              return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
          }),
          (bb = function (a, b, c) {
              var d,
                  e,
                  f,
                  g,
                  h = a.style;
              return (
                  (c = c || ab(a)),
                  (g = c ? c.getPropertyValue(b) || c[b] : void 0),
                  c &&
                      ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)),
                      db.test(g) && cb.test(b) && ((d = h.width), (e = h.minWidth), (f = h.maxWidth), (h.minWidth = h.maxWidth = h.width = g), (g = c.width), (h.width = d), (h.minWidth = e), (h.maxWidth = f))),
                  void 0 === g ? g : g + ""
              );
          }))
        : oa.documentElement.currentStyle &&
          ((ab = function (a) {
              return a.currentStyle;
          }),
          (bb = function (a, b, c) {
              var d,
                  e,
                  f,
                  g,
                  h = a.style;
              return (
                  (c = c || ab(a)),
                  (g = c ? c[b] : void 0),
                  null == g && h && h[b] && (g = h[b]),
                  db.test(g) && !eb.test(b) && ((d = h.left), (e = a.runtimeStyle), (f = e && e.left), f && (e.left = a.currentStyle.left), (h.left = "fontSize" === b ? "1em" : g), (g = h.pixelLeft + "px"), (h.left = d), f && (e.left = f)),
                  void 0 === g ? g : g + "" || "auto"
              );
          })),
        !(function () {
            function b() {
                var b, c, d, e;
                (c = oa.getElementsByTagName("body")[0]),
                    c &&
                        c.style &&
                        ((b = oa.createElement("div")),
                        (d = oa.createElement("div")),
                        (d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                        c.appendChild(d).appendChild(b),
                        (b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                        (f = g = !1),
                        (i = !0),
                        a.getComputedStyle &&
                            ((f = "1%" !== (a.getComputedStyle(b, null) || {}).top),
                            (g = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width),
                            (e = b.appendChild(oa.createElement("div"))),
                            (e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                            (e.style.marginRight = e.style.width = "0"),
                            (b.style.width = "1px"),
                            (i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)),
                            b.removeChild(e)),
                        (b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                        (e = b.getElementsByTagName("td")),
                        (e[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                        (h = 0 === e[0].offsetHeight),
                        h && ((e[0].style.display = ""), (e[1].style.display = "none"), (h = 0 === e[0].offsetHeight)),
                        c.removeChild(d));
            }
            var c, d, e, f, g, h, i;
            (c = oa.createElement("div")),
                (c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (e = c.getElementsByTagName("a")[0]),
                (d = e && e.style) &&
                    ((d.cssText = "float:left;opacity:.5"),
                    (ca.opacity = "0.5" === d.opacity),
                    (ca.cssFloat = !!d.cssFloat),
                    (c.style.backgroundClip = "content-box"),
                    (c.cloneNode(!0).style.backgroundClip = ""),
                    (ca.clearCloneStyle = "content-box" === c.style.backgroundClip),
                    (ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing),
                    ea.extend(ca, {
                        reliableHiddenOffsets: function () {
                            return null == h && b(), h;
                        },
                        boxSizingReliable: function () {
                            return null == g && b(), g;
                        },
                        pixelPosition: function () {
                            return null == f && b(), f;
                        },
                        reliableMarginRight: function () {
                            return null == i && b(), i;
                        },
                    }));
        })(),
        (ea.swap = function (a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        });
    var fb = /alpha\([^)]*\)/i,
        gb = /opacity\s*=\s*([^)]*)/,
        hb = /^(none|table(?!-c[ea]).+)/,
        ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
        jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
        kb = { position: "absolute", visibility: "hidden", display: "block" },
        lb = { letterSpacing: "0", fontWeight: "400" },
        mb = ["Webkit", "O", "Moz", "ms"];
    ea.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bb(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                },
            },
        },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: ca.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = ea.camelCase(b),
                    i = a.style;
                if (((b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h))), (g = ea.cssHooks[b] || ea.cssHooks[h]), void 0 === c)) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (
                    ((f = typeof c),
                    "string" === f && (e = jb.exec(c)) && ((c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b))), (f = "number")),
                    null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))
                )
                    try {
                        i[b] = c;
                    } catch (j) {}
            }
        },
        css: function (a, b, c, d) {
            var e,
                f,
                g,
                h = ea.camelCase(b);
            return (
                (b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h))),
                (g = ea.cssHooks[b] || ea.cssHooks[h]),
                g && "get" in g && (f = g.get(a, !0, c)),
                void 0 === f && (f = bb(a, b, d)),
                "normal" === f && b in lb && (f = lb[b]),
                "" === c || c ? ((e = parseFloat(f)), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
            );
        },
    }),
        ea.each(["height", "width"], function (a, b) {
            ea.cssHooks[b] = {
                get: function (a, c, d) {
                    return c
                        ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth
                            ? ea.swap(a, kb, function () {
                                  return F(a, b, d);
                              })
                            : F(a, b, d)
                        : void 0;
                },
                set: function (a, c, d) {
                    var e = d && ab(a);
                    return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0);
                },
            };
        }),
        ca.opacity ||
            (ea.cssHooks.opacity = {
                get: function (a, b) {
                    return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
                },
                set: function (a, b) {
                    var c = a.style,
                        d = a.currentStyle,
                        e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                        f = (d && d.filter) || c.filter || "";
                    (c.zoom = 1), ((b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || (d && !d.filter))) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e);
                },
            }),
        (ea.cssHooks.marginRight = A(ca.reliableMarginRight, function (a, b) {
            return b ? ea.swap(a, { display: "inline-block" }, bb, [a, "marginRight"]) : void 0;
        })),
        ea.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
            (ea.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                    return e;
                },
            }),
                cb.test(a) || (ea.cssHooks[a + b].set = D);
        }),
        ea.fn.extend({
            css: function (a, b) {
                return Da(
                    this,
                    function (a, b, c) {
                        var d,
                            e,
                            f = {},
                            g = 0;
                        if (ea.isArray(b)) {
                            for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
                            return f;
                        }
                        return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b);
                    },
                    a,
                    b,
                    arguments.length > 1
                );
            },
            show: function () {
                return C(this, !0);
            },
            hide: function () {
                return C(this);
            },
            toggle: function (a) {
                return "boolean" == typeof a
                    ? a
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                          Ca(this) ? ea(this).show() : ea(this).hide();
                      });
            },
        }),
        (ea.Tween = G),
        (G.prototype = {
            constructor: G,
            init: function (a, b, c, d, e, f) {
                (this.elem = a), (this.prop = c), (this.easing = e || "swing"), (this.options = b), (this.start = this.now = this.cur()), (this.end = d), (this.unit = f || (ea.cssNumber[c] ? "" : "px"));
            },
            cur: function () {
                var a = G.propHooks[this.prop];
                return a && a.get ? a.get(this) : G.propHooks._default.get(this);
            },
            run: function (a) {
                var b,
                    c = G.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)) : (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : G.propHooks._default.set(this),
                    this
                );
            },
        }),
        (G.prototype.init.prototype = G.prototype),
        (G.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return null == a.elem[a.prop] || (a.elem.style && null != a.elem.style[a.prop]) ? ((b = ea.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0) : a.elem[a.prop];
                },
                set: function (a) {
                    ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : (a.elem[a.prop] = a.now);
                },
            },
        }),
        (G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
            },
        }),
        (ea.easing = {
            linear: function (a) {
                return a;
            },
            swing: function (a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
        }),
        (ea.fx = G.prototype.init),
        (ea.fx.step = {});
    var nb,
        ob,
        pb = /^(?:toggle|show|hide)$/,
        qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
        rb = /queueHooks$/,
        sb = [K],
        tb = {
            "*": [
                function (a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = qb.exec(b),
                        f = (e && e[3]) || (ea.cssNumber[a] ? "" : "px"),
                        g = (ea.cssNumber[a] || ("px" !== f && +d)) && qb.exec(ea.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        (f = f || g[3]), (e = e || []), (g = +d || 1);
                        do (h = h || ".5"), (g /= h), ea.style(c.elem, a, g + f);
                        while (h !== (h = c.cur() / d) && 1 !== h && --i);
                    }
                    return e && ((g = c.start = +g || +d || 0), (c.unit = f), (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])), c;
                },
            ],
        };
    (ea.Animation = ea.extend(M, {
        tweener: function (a, b) {
            ea.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
            for (var c, d = 0, e = a.length; e > d; d++) (c = a[d]), (tb[c] = tb[c] || []), tb[c].unshift(b);
        },
        prefilter: function (a, b) {
            b ? sb.unshift(a) : sb.push(a);
        },
    })),
        (ea.speed = function (a, b, c) {
            var d = a && "object" == typeof a ? ea.extend({}, a) : { complete: c || (!c && b) || (ea.isFunction(a) && a), duration: a, easing: (c && b) || (b && !ea.isFunction(b) && b) };
            return (
                (d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default),
                (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function () {
                    ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue);
                }),
                d
            );
        }),
        ea.fn.extend({
            fadeTo: function (a, b, c, d) {
                return this.filter(Ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
            },
            animate: function (a, b, c, d) {
                var e = ea.isEmptyObject(a),
                    f = ea.speed(b, c, d),
                    g = function () {
                        var b = M(this, ea.extend({}, a), f);
                        (e || ea._data(this, "finish")) && b.stop(!0);
                    };
                return (g.finish = g), e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
            },
            stop: function (a, b, c) {
                var d = function (a) {
                    var b = a.stop;
                    delete a.stop, b(c);
                };
                return (
                    "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                    b && a !== !1 && this.queue(a || "fx", []),
                    this.each(function () {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = ea.timers,
                            g = ea._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                        for (e = f.length; e--; ) f[e].elem !== this || (null != a && f[e].queue !== a) || (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                        (b || !c) && ea.dequeue(this, a);
                    })
                );
            },
            finish: function (a) {
                return (
                    a !== !1 && (a = a || "fx"),
                    this.each(function () {
                        var b,
                            c = ea._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = ea.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish;
                    })
                );
            },
        }),
        ea.each(["toggle", "show", "hide"], function (a, b) {
            var c = ea.fn[b];
            ea.fn[b] = function (a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e);
            };
        }),
        ea.each({ slideDown: I("show"), slideUp: I("hide"), slideToggle: I("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
            ea.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d);
            };
        }),
        (ea.timers = []),
        (ea.fx.tick = function () {
            var a,
                b = ea.timers,
                c = 0;
            for (nb = ea.now(); c < b.length; c++) (a = b[c]), a() || b[c] !== a || b.splice(c--, 1);
            b.length || ea.fx.stop(), (nb = void 0);
        }),
        (ea.fx.timer = function (a) {
            ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop();
        }),
        (ea.fx.interval = 13),
        (ea.fx.start = function () {
            ob || (ob = setInterval(ea.fx.tick, ea.fx.interval));
        }),
        (ea.fx.stop = function () {
            clearInterval(ob), (ob = null);
        }),
        (ea.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (ea.fn.delay = function (a, b) {
            return (
                (a = ea.fx ? ea.fx.speeds[a] || a : a),
                (b = b || "fx"),
                this.queue(b, function (b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function () {
                        clearTimeout(d);
                    };
                })
            );
        }),
        (function () {
            var a, b, c, d, e;
            (b = oa.createElement("div")),
                b.setAttribute("className", "t"),
                (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (d = b.getElementsByTagName("a")[0]),
                (c = oa.createElement("select")),
                (e = c.appendChild(oa.createElement("option"))),
                (a = b.getElementsByTagName("input")[0]),
                (d.style.cssText = "top:1px"),
                (ca.getSetAttribute = "t" !== b.className),
                (ca.style = /top/.test(d.getAttribute("style"))),
                (ca.hrefNormalized = "/a" === d.getAttribute("href")),
                (ca.checkOn = !!a.value),
                (ca.optSelected = e.selected),
                (ca.enctype = !!oa.createElement("form").enctype),
                (c.disabled = !0),
                (ca.optDisabled = !e.disabled),
                (a = oa.createElement("input")),
                a.setAttribute("value", ""),
                (ca.input = "" === a.getAttribute("value")),
                (a.value = "t"),
                a.setAttribute("type", "radio"),
                (ca.radioValue = "t" === a.value);
        })();
    var ub = /\r/g;
    ea.fn.extend({
        val: function (a) {
            var b,
                c,
                d,
                e = this[0];
            return arguments.length
                ? ((d = ea.isFunction(a)),
                  this.each(function (c) {
                      var e;
                      1 === this.nodeType &&
                          ((e = d ? a.call(this, c, ea(this).val()) : a),
                          null == e
                              ? (e = "")
                              : "number" == typeof e
                              ? (e += "")
                              : ea.isArray(e) &&
                                (e = ea.map(e, function (a) {
                                    return null == a ? "" : a + "";
                                })),
                          (b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()]),
                          (b && "set" in b && void 0 !== b.set(this, e, "value")) || (this.value = e));
                  }))
                : e
                ? ((b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()]), b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : ((c = e.value), "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c))
                : void 0;
        },
    }),
        ea.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = ea.find.attr(a, "value");
                        return null != b ? b : ea.trim(ea.text(a));
                    },
                },
                select: {
                    get: function (a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (((c = d[i]), !((!c.selected && i !== e) || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || (c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))))) {
                                if (((b = ea(c).val()), f)) return b;
                                g.push(b);
                            }
                        return g;
                    },
                    set: function (a, b) {
                        for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--; )
                            if (((d = e[g]), ea.inArray(ea.valHooks.option.get(d), f) >= 0))
                                try {
                                    d.selected = c = !0;
                                } catch (h) {
                                    d.scrollHeight;
                                }
                            else d.selected = !1;
                        return c || (a.selectedIndex = -1), e;
                    },
                },
            },
        }),
        ea.each(["radio", "checkbox"], function () {
            (ea.valHooks[this] = {
                set: function (a, b) {
                    return ea.isArray(b) ? (a.checked = ea.inArray(ea(a).val(), b) >= 0) : void 0;
                },
            }),
                ca.checkOn ||
                    (ea.valHooks[this].get = function (a) {
                        return null === a.getAttribute("value") ? "on" : a.value;
                    });
        });
    var vb,
        wb,
        xb = ea.expr.attrHandle,
        yb = /^(?:checked|selected)$/i,
        zb = ca.getSetAttribute,
        Ab = ca.input;
    ea.fn.extend({
        attr: function (a, b) {
            return Da(this, ea.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                ea.removeAttr(this, a);
            });
        },
    }),
        ea.extend({
            attr: function (a, b, c) {
                var d,
                    e,
                    f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)
                    return typeof a.getAttribute === xa
                        ? ea.prop(a, b, c)
                        : ((1 === f && ea.isXMLDoc(a)) || ((b = b.toLowerCase()), (d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb))),
                          void 0 === c
                              ? d && "get" in d && null !== (e = d.get(a, b))
                                  ? e
                                  : ((e = ea.find.attr(a, b)), null == e ? void 0 : e)
                              : null !== c
                              ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                                  ? e
                                  : (a.setAttribute(b, c + ""), c)
                              : void ea.removeAttr(a, b));
            },
            removeAttr: function (a, b) {
                var c,
                    d,
                    e = 0,
                    f = b && b.match(ta);
                if (f && 1 === a.nodeType)
                    for (; (c = f[e++]); ) (d = ea.propFix[c] || c), ea.expr.match.bool.test(c) ? ((Ab && zb) || !yb.test(c) ? (a[d] = !1) : (a[ea.camelCase("default-" + c)] = a[d] = !1)) : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d);
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b;
                        }
                    },
                },
            },
        }),
        (wb = {
            set: function (a, b, c) {
                return b === !1 ? ea.removeAttr(a, c) : (Ab && zb) || !yb.test(c) ? a.setAttribute((!zb && ea.propFix[c]) || c, c) : (a[ea.camelCase("default-" + c)] = a[c] = !0), c;
            },
        }),
        ea.each(ea.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = xb[b] || ea.find.attr;
            xb[b] =
                (Ab && zb) || !yb.test(b)
                    ? function (a, b, d) {
                          var e, f;
                          return d || ((f = xb[b]), (xb[b] = e), (e = null != c(a, b, d) ? b.toLowerCase() : null), (xb[b] = f)), e;
                      }
                    : function (a, b, c) {
                          return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null;
                      };
        }),
        (Ab && zb) ||
            (ea.attrHooks.value = {
                set: function (a, b, c) {
                    return ea.nodeName(a, "input") ? void (a.defaultValue = b) : vb && vb.set(a, b, c);
                },
            }),
        zb ||
            ((vb = {
                set: function (a, b, c) {
                    var d = a.getAttributeNode(c);
                    return d || a.setAttributeNode((d = a.ownerDocument.createAttribute(c))), (d.value = b += ""), "value" === c || b === a.getAttribute(c) ? b : void 0;
                },
            }),
            (xb.id = xb.name = xb.coords = function (a, b, c) {
                var d;
                return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
            }),
            (ea.valHooks.button = {
                get: function (a, b) {
                    var c = a.getAttributeNode(b);
                    return c && c.specified ? c.value : void 0;
                },
                set: vb.set,
            }),
            (ea.attrHooks.contenteditable = {
                set: function (a, b, c) {
                    vb.set(a, "" !== b && b, c);
                },
            }),
            ea.each(["width", "height"], function (a, b) {
                ea.attrHooks[b] = {
                    set: function (a, c) {
                        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
                    },
                };
            })),
        ca.style ||
            (ea.attrHooks.style = {
                get: function (a) {
                    return a.style.cssText || void 0;
                },
                set: function (a, b) {
                    return (a.style.cssText = b + "");
                },
            });
    var Bb = /^(?:input|select|textarea|button|object)$/i,
        Cb = /^(?:a|area)$/i;
    ea.fn.extend({
        prop: function (a, b) {
            return Da(this, ea.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return (
                (a = ea.propFix[a] || a),
                this.each(function () {
                    try {
                        (this[a] = void 0), delete this[a];
                    } catch (b) {}
                })
            );
        },
    }),
        ea.extend({
            propFix: { for: "htmlFor", class: "className" },
            prop: function (a, b, c) {
                var d,
                    e,
                    f,
                    g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)
                    return (
                        (f = 1 !== g || !ea.isXMLDoc(a)),
                        f && ((b = ea.propFix[b] || b), (e = ea.propHooks[b])),
                        void 0 !== c ? (e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a[b] = c)) : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = ea.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Bb.test(a.nodeName) || (Cb.test(a.nodeName) && a.href) ? 0 : -1;
                    },
                },
            },
        }),
        ca.hrefNormalized ||
            ea.each(["href", "src"], function (a, b) {
                ea.propHooks[b] = {
                    get: function (a) {
                        return a.getAttribute(b, 4);
                    },
                };
            }),
        ca.optSelected ||
            (ea.propHooks.selected = {
                get: function (a) {
                    var b = a.parentNode;
                    return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
                },
            }),
        ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ea.propFix[this.toLowerCase()] = this;
        }),
        ca.enctype || (ea.propFix.enctype = "encoding");
    var Db = /[\t\r\n\f]/g;
    ea.fn.extend({
        addClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (ea.isFunction(a))
                return this.each(function (b) {
                    ea(this).addClass(a.call(this, b, this.className));
                });
            if (j)
                for (b = (a || "").match(ta) || []; i > h; h++)
                    if (((c = this[h]), (d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")))) {
                        for (f = 0; (e = b[f++]); ) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        (g = ea.trim(d)), c.className !== g && (c.className = g);
                    }
            return this;
        },
        removeClass: function (a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 0,
                i = this.length,
                j = 0 === arguments.length || ("string" == typeof a && a);
            if (ea.isFunction(a))
                return this.each(function (b) {
                    ea(this).removeClass(a.call(this, b, this.className));
                });
            if (j)
                for (b = (a || "").match(ta) || []; i > h; h++)
                    if (((c = this[h]), (d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")))) {
                        for (f = 0; (e = b[f++]); ) for (; d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                        (g = a ? ea.trim(d) : ""), c.className !== g && (c.className = g);
                    }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c
                ? b
                    ? this.addClass(a)
                    : this.removeClass(a)
                : this.each(
                      ea.isFunction(a)
                          ? function (c) {
                                ea(this).toggleClass(a.call(this, c, this.className, b), b);
                            }
                          : function () {
                                if ("string" === c) for (var b, d = 0, e = ea(this), f = a.match(ta) || []; (b = f[d++]); ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                                else (c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), (this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || ""));
                            }
                  );
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
            return !1;
        },
    }),
        ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (
            a,
            b
        ) {
            ea.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
            };
        }),
        ea.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a);
            },
            bind: function (a, b, c) {
                return this.on(a, null, b, c);
            },
            unbind: function (a, b) {
                return this.off(a, null, b);
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d);
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
            },
        });
    var Eb = ea.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (ea.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c,
            d = null,
            e = ea.trim(b + "");
        return e &&
            !ea.trim(
                e.replace(Gb, function (a, b, e, f) {
                    return c && b && (d = 0), 0 === d ? a : ((c = e || b), (d += !f - !e), "");
                })
            )
            ? Function("return " + e)()
            : ea.error("Invalid JSON: " + b);
    }),
        (ea.parseXML = function (b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser ? ((d = new DOMParser()), (c = d.parseFromString(b, "text/xml"))) : ((c = new ActiveXObject("Microsoft.XMLDOM")), (c.async = "false"), c.loadXML(b));
            } catch (e) {
                c = void 0;
            }
            return (c && c.documentElement && !c.getElementsByTagName("parsererror").length) || ea.error("Invalid XML: " + b), c;
        });
    var Hb,
        Ib,
        Jb = /#.*$/,
        Kb = /([?&])_=[^&]*/,
        Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nb = /^(?:GET|HEAD)$/,
        Ob = /^\/\//,
        Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Qb = {},
        Rb = {},
        Sb = "*/".concat("*");
    try {
        Ib = location.href;
    } catch (Tb) {
        (Ib = oa.createElement("a")), (Ib.href = ""), (Ib = Ib.href);
    }
    (Hb = Pb.exec(Ib.toLowerCase()) || []),
        ea.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ib,
                type: "GET",
                isLocal: Mb.test(Hb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Sb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /xml/, html: /html/, json: /json/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": ea.parseJSON, "text xml": ea.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (a, b) {
                return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a);
            },
            ajaxPrefilter: N(Qb),
            ajaxTransport: N(Rb),
            ajax: function (a, b) {
                function c(a, b, c, d) {
                    var e,
                        k,
                        r,
                        s,
                        u,
                        w = b;
                    2 !== t &&
                        ((t = 2),
                        h && clearTimeout(h),
                        (j = void 0),
                        (g = d || ""),
                        (v.readyState = a > 0 ? 4 : 0),
                        (e = (a >= 200 && 300 > a) || 304 === a),
                        c && (s = Q(l, v, c)),
                        (s = R(l, s, v, e)),
                        e
                            ? (l.ifModified && ((u = v.getResponseHeader("Last-Modified")), u && (ea.lastModified[f] = u), (u = v.getResponseHeader("etag")), u && (ea.etag[f] = u)),
                              204 === a || "HEAD" === l.type ? (w = "nocontent") : 304 === a ? (w = "notmodified") : ((w = s.state), (k = s.data), (r = s.error), (e = !r)))
                            : ((r = w), (a || !w) && ((w = "error"), 0 > a && (a = 0))),
                        (v.status = a),
                        (v.statusText = (b || w) + ""),
                        e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                        v.statusCode(q),
                        (q = void 0),
                        i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]),
                        p.fireWith(m, [v, w]),
                        i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")));
                }
                "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l = ea.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
                    o = ea.Deferred(),
                    p = ea.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function (a) {
                            var b;
                            if (2 === t) {
                                if (!k) for (k = {}; (b = Lb.exec(g)); ) k[b[1].toLowerCase()] = b[2];
                                b = k[a.toLowerCase()];
                            }
                            return null == b ? null : b;
                        },
                        getAllResponseHeaders: function () {
                            return 2 === t ? g : null;
                        },
                        setRequestHeader: function (a, b) {
                            var c = a.toLowerCase();
                            return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
                        },
                        overrideMimeType: function (a) {
                            return t || (l.mimeType = a), this;
                        },
                        statusCode: function (a) {
                            var b;
                            if (a)
                                if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this;
                        },
                        abort: function (a) {
                            var b = a || u;
                            return j && j.abort(b), c(0, b), this;
                        },
                    };
                if (
                    ((o.promise(v).complete = p.add),
                    (v.success = v.done),
                    (v.error = v.fail),
                    (l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//")),
                    (l.type = b.method || b.type || l.method || l.type),
                    (l.dataTypes = ea
                        .trim(l.dataType || "*")
                        .toLowerCase()
                        .match(ta) || [""]),
                    null == l.crossDomain &&
                        ((d = Pb.exec(l.url.toLowerCase())), (l.crossDomain = !(!d || (d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))))),
                    l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)),
                    O(Qb, l, b, v),
                    2 === t)
                )
                    return v;
                (i = ea.event && l.global),
                    i && 0 === ea.active++ && ea.event.trigger("ajaxStart"),
                    (l.type = l.type.toUpperCase()),
                    (l.hasContent = !Nb.test(l.type)),
                    (f = l.url),
                    l.hasContent || (l.data && ((f = l.url += (Fb.test(f) ? "&" : "?") + l.data), delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
                    l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])),
                    ((l.data && l.hasContent && l.contentType !== !1) || b.contentType) && v.setRequestHeader("Content-Type", l.contentType),
                    v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (e in { success: 1, error: 1, complete: 1 }) v[e](l[e]);
                if ((j = O(Rb, l, b, v))) {
                    (v.readyState = 1),
                        i && n.trigger("ajaxSend", [v, l]),
                        l.async &&
                            l.timeout > 0 &&
                            (h = setTimeout(function () {
                                v.abort("timeout");
                            }, l.timeout));
                    try {
                        (t = 1), j.send(r, c);
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w);
                    }
                } else c(-1, "No Transport");
                return v;
            },
            getJSON: function (a, b, c) {
                return ea.get(a, b, c, "json");
            },
            getScript: function (a, b) {
                return ea.get(a, void 0, b, "script");
            },
        }),
        ea.each(["get", "post"], function (a, b) {
            ea[b] = function (a, c, d, e) {
                return ea.isFunction(c) && ((e = e || d), (d = c), (c = void 0)), ea.ajax({ url: a, type: b, dataType: e, data: c, success: d });
            };
        }),
        (ea._evalUrl = function (a) {
            return ea.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
        }),
        ea.fn.extend({
            wrapAll: function (a) {
                if (ea.isFunction(a))
                    return this.each(function (b) {
                        ea(this).wrapAll(a.call(this, b));
                    });
                if (this[0]) {
                    var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b
                            .map(function () {
                                for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
                                return a;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (a) {
                return this.each(
                    ea.isFunction(a)
                        ? function (b) {
                              ea(this).wrapInner(a.call(this, b));
                          }
                        : function () {
                              var b = ea(this),
                                  c = b.contents();
                              c.length ? c.wrapAll(a) : b.append(a);
                          }
                );
            },
            wrap: function (a) {
                var b = ea.isFunction(a);
                return this.each(function (c) {
                    ea(this).wrapAll(b ? a.call(this, c) : a);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (ea.expr.filters.hidden = function (a) {
            return (a.offsetWidth <= 0 && a.offsetHeight <= 0) || (!ca.reliableHiddenOffsets() && "none" === ((a.style && a.style.display) || ea.css(a, "display")));
        }),
        (ea.expr.filters.visible = function (a) {
            return !ea.expr.filters.hidden(a);
        });
    var Ub = /%20/g,
        Vb = /\[\]$/,
        Wb = /\r?\n/g,
        Xb = /^(?:submit|button|image|reset|file)$/i,
        Yb = /^(?:input|select|textarea|keygen)/i;
    (ea.param = function (a, b) {
        var c,
            d = [],
            e = function (a, b) {
                (b = ea.isFunction(b) ? b() : null == b ? "" : b), (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
            };
        if ((void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || (a.jquery && !ea.isPlainObject(a))))
            ea.each(a, function () {
                e(this.name, this.value);
            });
        else for (c in a) S(c, a[c], b, e);
        return d.join("&").replace(Ub, "+");
    }),
        ea.fn.extend({
            serialize: function () {
                return ea.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = ea.prop(this, "elements");
                    return a ? ea.makeArray(a) : this;
                })
                    .filter(function () {
                        var a = this.type;
                        return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a));
                    })
                    .map(function (a, b) {
                        var c = ea(this).val();
                        return null == c
                            ? null
                            : ea.isArray(c)
                            ? ea.map(c, function (a) {
                                  return { name: b.name, value: a.replace(Wb, "\r\n") };
                              })
                            : { name: b.name, value: c.replace(Wb, "\r\n") };
                    })
                    .get();
            },
        }),
        (ea.ajaxSettings.xhr =
            void 0 !== a.ActiveXObject
                ? function () {
                      return (!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T()) || U();
                  }
                : T);
    var Zb = 0,
        $b = {},
        _b = ea.ajaxSettings.xhr();
    a.attachEvent &&
        a.attachEvent("onunload", function () {
            for (var a in $b) $b[a](void 0, !0);
        }),
        (ca.cors = !!_b && "withCredentials" in _b),
        (_b = ca.ajax = !!_b),
        _b &&
            ea.ajaxTransport(function (a) {
                if (!a.crossDomain || ca.cors) {
                    var b;
                    return {
                        send: function (c, d) {
                            var e,
                                f = a.xhr(),
                                g = ++Zb;
                            if ((f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                            a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                            for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                            f.send((a.hasContent && a.data) || null),
                                (b = function (c, e) {
                                    var h, i, j;
                                    if (b && (e || 4 === f.readyState))
                                        if ((delete $b[g], (b = void 0), (f.onreadystatechange = ea.noop), e)) 4 !== f.readyState && f.abort();
                                        else {
                                            (j = {}), (h = f.status), "string" == typeof f.responseText && (j.text = f.responseText);
                                            try {
                                                i = f.statusText;
                                            } catch (k) {
                                                i = "";
                                            }
                                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : (h = j.text ? 200 : 404);
                                        }
                                    j && d(h, i, j, f.getAllResponseHeaders());
                                }),
                                a.async ? (4 === f.readyState ? setTimeout(b) : (f.onreadystatechange = $b[g] = b)) : b();
                        },
                        abort: function () {
                            b && b(void 0, !0);
                        },
                    };
                }
            }),
        ea.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /(?:java|ecma)script/ },
            converters: {
                "text script": function (a) {
                    return ea.globalEval(a), a;
                },
            },
        }),
        ea.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && ((a.type = "GET"), (a.global = !1));
        }),
        ea.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b,
                    c = oa.head || ea("head")[0] || oa.documentElement;
                return {
                    send: function (d, e) {
                        (b = oa.createElement("script")),
                            (b.async = !0),
                            a.scriptCharset && (b.charset = a.scriptCharset),
                            (b.src = a.url),
                            (b.onload = b.onreadystatechange = function (a, c) {
                                (c || !b.readyState || /loaded|complete/.test(b.readyState)) && ((b.onload = b.onreadystatechange = null), b.parentNode && b.parentNode.removeChild(b), (b = null), c || e(200, "success"));
                            }),
                            c.insertBefore(b, c.firstChild);
                    },
                    abort: function () {
                        b && b.onload(void 0, !0);
                    },
                };
            }
        });
    var ac = [],
        bc = /(=)\?(?=&|$)|\?\?/;
    ea.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = ac.pop() || ea.expando + "_" + Eb++;
            return (this[a] = !0), a;
        },
    }),
        ea.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e,
                f,
                g,
                h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0]
                ? ((e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback),
                  h ? (b[h] = b[h].replace(bc, "$1" + e)) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                  (b.converters["script json"] = function () {
                      return g || ea.error(e + " was not called"), g[0];
                  }),
                  (b.dataTypes[0] = "json"),
                  (f = a[e]),
                  (a[e] = function () {
                      g = arguments;
                  }),
                  d.always(function () {
                      (a[e] = f), b[e] && ((b.jsonpCallback = c.jsonpCallback), ac.push(e)), g && ea.isFunction(f) && f(g[0]), (g = f = void 0);
                  }),
                  "script")
                : void 0;
        }),
        (ea.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && ((c = b), (b = !1)), (b = b || oa);
            var d = la.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : ((d = ea.buildFragment([a], b, e)), e && e.length && ea(e).remove(), ea.merge([], d.childNodes));
        });
    var cc = ea.fn.load;
    (ea.fn.load = function (a, b, c) {
        if ("string" != typeof a && cc) return cc.apply(this, arguments);
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");
        return (
            h >= 0 && ((d = ea.trim(a.slice(h, a.length))), (a = a.slice(0, h))),
            ea.isFunction(b) ? ((c = b), (b = void 0)) : b && "object" == typeof b && (f = "POST"),
            g.length > 0 &&
                ea
                    .ajax({ url: a, type: f, dataType: "html", data: b })
                    .done(function (a) {
                        (e = arguments), g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a);
                    })
                    .complete(
                        c &&
                            function (a, b) {
                                g.each(c, e || [a.responseText, b, a]);
                            }
                    ),
            this
        );
    }),
        ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            ea.fn[b] = function (a) {
                return this.on(b, a);
            };
        }),
        (ea.expr.filters.animated = function (a) {
            return ea.grep(ea.timers, function (b) {
                return a === b.elem;
            }).length;
        });
    var dc = a.document.documentElement;
    (ea.offset = {
        setOffset: function (a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = ea.css(a, "position"),
                l = ea(a),
                m = {};
            "static" === k && (a.style.position = "relative"),
                (h = l.offset()),
                (f = ea.css(a, "top")),
                (i = ea.css(a, "left")),
                (j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1),
                j ? ((d = l.position()), (g = d.top), (e = d.left)) : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                ea.isFunction(b) && (b = b.call(a, c, h)),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                "using" in b ? b.using.call(a, m) : l.css(m);
        },
    }),
        ea.fn.extend({
            offset: function (a) {
                if (arguments.length)
                    return void 0 === a
                        ? this
                        : this.each(function (b) {
                              ea.offset.setOffset(this, a, b);
                          });
                var b,
                    c,
                    d = { top: 0, left: 0 },
                    e = this[0],
                    f = e && e.ownerDocument;
                return f
                    ? ((b = f.documentElement),
                      ea.contains(b, e)
                          ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()),
                            (c = V(f)),
                            { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) })
                          : d)
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var a,
                        b,
                        c = { top: 0, left: 0 },
                        d = this[0];
                    return (
                        "fixed" === ea.css(d, "position")
                            ? (b = d.getBoundingClientRect())
                            : ((a = this.offsetParent()), (b = this.offset()), ea.nodeName(a[0], "html") || (c = a.offset()), (c.top += ea.css(a[0], "borderTopWidth", !0)), (c.left += ea.css(a[0], "borderLeftWidth", !0))),
                        { top: b.top - c.top - ea.css(d, "marginTop", !0), left: b.left - c.left - ea.css(d, "marginLeft", !0) }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position"); ) a = a.offsetParent;
                    return a || dc;
                });
            },
        }),
        ea.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
            var c = /Y/.test(b);
            ea.fn[a] = function (d) {
                return Da(
                    this,
                    function (a, d, e) {
                        var f = V(a);
                        return void 0 === e ? (f ? (b in f ? f[b] : f.document.documentElement[d]) : a[d]) : void (f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : (a[d] = e));
                    },
                    a,
                    d,
                    arguments.length,
                    null
                );
            };
        }),
        ea.each(["top", "left"], function (a, b) {
            ea.cssHooks[b] = A(ca.pixelPosition, function (a, c) {
                return c ? ((c = bb(a, b)), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0;
            });
        }),
        ea.each({ Height: "height", Width: "width" }, function (a, b) {
            ea.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
                ea.fn[d] = function (d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Da(
                        this,
                        function (b, c, d) {
                            var e;
                            return ea.isWindow(b)
                                ? b.document.documentElement["client" + a]
                                : 9 === b.nodeType
                                ? ((e = b.documentElement), Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a]))
                                : void 0 === d
                                ? ea.css(b, c, g)
                                : ea.style(b, c, d, g);
                        },
                        b,
                        f ? d : void 0,
                        f,
                        null
                    );
                };
            });
        }),
        (ea.fn.size = function () {
            return this.length;
        }),
        (ea.fn.andSelf = ea.fn.addBack),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return ea;
            });
    var ec = a.jQuery,
        fc = a.$;
    return (
        (ea.noConflict = function (b) {
            return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea;
        }),
        typeof b === xa && (a.jQuery = a.$ = ea),
        ea
    );
}),
    (function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
    })(function (a) {
        function b(b, d) {
            var e,
                f,
                g,
                h = b.nodeName.toLowerCase();
            return "area" === h
                ? ((e = b.parentNode), (f = e.name), !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && ((g = a("img[usemap='#" + f + "']")[0]), !!g && c(g)))
                : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b);
        }
        function c(b) {
            return (
                a.expr.filters.visible(b) &&
                !a(b)
                    .parents()
                    .addBack()
                    .filter(function () {
                        return "hidden" === a.css(this, "visibility");
                    }).length
            );
        }
        (a.ui = a.ui || {}),
            a.extend(a.ui, {
                version: "1.11.4",
                keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 },
            }),
            a.fn.extend({
                scrollParent: function (b) {
                    var c = this.css("position"),
                        d = "absolute" === c,
                        e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                        f = this.parents()
                            .filter(function () {
                                var b = a(this);
                                return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"));
                            })
                            .eq(0);
                    return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document);
                },
                uniqueId: (function () {
                    var a = 0;
                    return function () {
                        return this.each(function () {
                            this.id || (this.id = "ui-id-" + ++a);
                        });
                    };
                })(),
                removeUniqueId: function () {
                    return this.each(function () {
                        /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id");
                    });
                },
            }),
            a.extend(a.expr[":"], {
                data: a.expr.createPseudo
                    ? a.expr.createPseudo(function (b) {
                          return function (c) {
                              return !!a.data(c, b);
                          };
                      })
                    : function (b, c, d) {
                          return !!a.data(b, d[3]);
                      },
                focusable: function (c) {
                    return b(c, !isNaN(a.attr(c, "tabindex")));
                },
                tabbable: function (c) {
                    var d = a.attr(c, "tabindex"),
                        e = isNaN(d);
                    return (e || d >= 0) && b(c, !e);
                },
            }),
            a("<a>").outerWidth(1).jquery ||
                a.each(["Width", "Height"], function (b, c) {
                    function d(b, c, d, f) {
                        return (
                            a.each(e, function () {
                                (c -= parseFloat(a.css(b, "padding" + this)) || 0), d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0);
                            }),
                            c
                        );
                    }
                    var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
                        f = c.toLowerCase(),
                        g = { innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight };
                    (a.fn["inner" + c] = function (b) {
                        return void 0 === b
                            ? g["inner" + c].call(this)
                            : this.each(function () {
                                  a(this).css(f, d(this, b) + "px");
                              });
                    }),
                        (a.fn["outer" + c] = function (b, e) {
                            return "number" != typeof b
                                ? g["outer" + c].call(this, b)
                                : this.each(function () {
                                      a(this).css(f, d(this, b, !0, e) + "px");
                                  });
                        });
                }),
            a.fn.addBack ||
                (a.fn.addBack = function (a) {
                    return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
                }),
            a("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
                (a.fn.removeData = (function (b) {
                    return function (c) {
                        return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this);
                    };
                })(a.fn.removeData)),
            (a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
            a.fn.extend({
                focus: (function (b) {
                    return function (c, d) {
                        return "number" == typeof c
                            ? this.each(function () {
                                  var b = this;
                                  setTimeout(function () {
                                      a(b).focus(), d && d.call(b);
                                  }, c);
                              })
                            : b.apply(this, arguments);
                    };
                })(a.fn.focus),
                disableSelection: (function () {
                    var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                    return function () {
                        return this.on(a + ".ui-disableSelection", function (a) {
                            a.preventDefault();
                        });
                    };
                })(),
                enableSelection: function () {
                    return this.unbind(".ui-disableSelection");
                },
                zIndex: function (b) {
                    if (void 0 !== b) return this.css("zIndex", b);
                    if (this.length)
                        for (var c, d, e = a(this[0]); e.length && e[0] !== document; ) {
                            if (((c = e.css("position")), ("absolute" === c || "relative" === c || "fixed" === c) && ((d = parseInt(e.css("zIndex"), 10)), !isNaN(d) && 0 !== d))) return d;
                            e = e.parent();
                        }
                    return 0;
                },
            }),
            (a.ui.plugin = {
                add: function (b, c, d) {
                    var e,
                        f = a.ui[b].prototype;
                    for (e in d) (f.plugins[e] = f.plugins[e] || []), f.plugins[e].push([c, d[e]]);
                },
                call: function (a, b, c, d) {
                    var e,
                        f = a.plugins[b];
                    if (f && (d || (a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))) for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c);
                },
            });
        var d = 0,
            e = Array.prototype.slice;
        (a.cleanData = (function (b) {
            return function (c) {
                var d, e, f;
                for (f = 0; null != (e = c[f]); f++)
                    try {
                        (d = a._data(e, "events")), d && d.remove && a(e).triggerHandler("remove");
                    } catch (g) {}
                b(c);
            };
        })(a.cleanData)),
            (a.widget = function (b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i = {},
                    j = b.split(".")[0];
                return (
                    (b = b.split(".")[1]),
                    (e = j + "-" + b),
                    d || ((d = c), (c = a.Widget)),
                    (a.expr[":"][e.toLowerCase()] = function (b) {
                        return !!a.data(b, e);
                    }),
                    (a[j] = a[j] || {}),
                    (f = a[j][b]),
                    (g = a[j][b] = function (a, b) {
                        return this._createWidget ? void (arguments.length && this._createWidget(a, b)) : new g(a, b);
                    }),
                    a.extend(g, f, { version: d.version, _proto: a.extend({}, d), _childConstructors: [] }),
                    (h = new c()),
                    (h.options = a.widget.extend({}, h.options)),
                    a.each(d, function (b, d) {
                        return a.isFunction(d)
                            ? void (i[b] = (function () {
                                  var a = function () {
                                          return c.prototype[b].apply(this, arguments);
                                      },
                                      e = function (a) {
                                          return c.prototype[b].apply(this, a);
                                      };
                                  return function () {
                                      var b,
                                          c = this._super,
                                          f = this._superApply;
                                      return (this._super = a), (this._superApply = e), (b = d.apply(this, arguments)), (this._super = c), (this._superApply = f), b;
                                  };
                              })())
                            : void (i[b] = d);
                    }),
                    (g.prototype = a.widget.extend(h, { widgetEventPrefix: f ? h.widgetEventPrefix || b : b }, i, { constructor: g, namespace: j, widgetName: b, widgetFullName: e })),
                    f
                        ? (a.each(f._childConstructors, function (b, c) {
                              var d = c.prototype;
                              a.widget(d.namespace + "." + d.widgetName, g, c._proto);
                          }),
                          delete f._childConstructors)
                        : c._childConstructors.push(g),
                    a.widget.bridge(b, g),
                    g
                );
            }),
            (a.widget.extend = function (b) {
                for (var c, d, f = e.call(arguments, 1), g = 0, h = f.length; g < h; g++)
                    for (c in f[g]) (d = f[g][c]), f[g].hasOwnProperty(c) && void 0 !== d && (a.isPlainObject(d) ? (b[c] = a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d)) : (b[c] = d));
                return b;
            }),
            (a.widget.bridge = function (b, c) {
                var d = c.prototype.widgetFullName || b;
                a.fn[b] = function (f) {
                    var g = "string" == typeof f,
                        h = e.call(arguments, 1),
                        i = this;
                    return (
                        g
                            ? this.each(function () {
                                  var c,
                                      e = a.data(this, d);
                                  return "instance" === f
                                      ? ((i = e), !1)
                                      : e
                                      ? a.isFunction(e[f]) && "_" !== f.charAt(0)
                                          ? ((c = e[f].apply(e, h)), c !== e && void 0 !== c ? ((i = c && c.jquery ? i.pushStack(c.get()) : c), !1) : void 0)
                                          : a.error("no such method '" + f + "' for " + b + " widget instance")
                                      : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'");
                              })
                            : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))),
                              this.each(function () {
                                  var b = a.data(this, d);
                                  b ? (b.option(f || {}), b._init && b._init()) : a.data(this, d, new c(f, this));
                              })),
                        i
                    );
                };
            }),
            (a.Widget = function () {}),
            (a.Widget._childConstructors = []),
            (a.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: { disabled: !1, create: null },
                _createWidget: function (b, c) {
                    (c = a(c || this.defaultElement || this)[0]),
                        (this.element = a(c)),
                        (this.uuid = d++),
                        (this.eventNamespace = "." + this.widgetName + this.uuid),
                        (this.onings = a()),
                        (this.hoverable = a()),
                        (this.focusable = a()),
                        c !== this &&
                            (a.data(c, this.widgetFullName, this),
                            this._on(!0, this.element, {
                                remove: function (a) {
                                    a.target === c && this.destroy();
                                },
                            }),
                            (this.document = a(c.style ? c.ownerDocument : c.document || c)),
                            (this.window = a(this.document[0].defaultView || this.document[0].parentWindow))),
                        (this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b)),
                        this._create(),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init();
                },
                _getCreateOptions: a.noop,
                _getCreateEventData: a.noop,
                _create: a.noop,
                _init: a.noop,
                destroy: function () {
                    this._destroy(),
                        this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),
                        this.widget()
                            .unbind(this.eventNamespace)
                            .removeAttr("aria-disabled")
                            .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                        this.onings.unbind(this.eventNamespace),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus");
                },
                _destroy: a.noop,
                widget: function () {
                    return this.element;
                },
                option: function (b, c) {
                    var d,
                        e,
                        f,
                        g = b;
                    if (0 === arguments.length) return a.widget.extend({}, this.options);
                    if ("string" == typeof b)
                        if (((g = {}), (d = b.split(".")), (b = d.shift()), d.length)) {
                            for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) (e[d[f]] = e[d[f]] || {}), (e = e[d[f]]);
                            if (((b = d.pop()), 1 === arguments.length)) return void 0 === e[b] ? null : e[b];
                            e[b] = c;
                        } else {
                            if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                            g[b] = c;
                        }
                    return this._setOptions(g), this;
                },
                _setOptions: function (a) {
                    var b;
                    for (b in a) this._setOption(b, a[b]);
                    return this;
                },
                _setOption: function (a, b) {
                    return (
                        (this.options[a] = b), "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
                    );
                },
                enable: function () {
                    return this._setOptions({ disabled: !1 });
                },
                disable: function () {
                    return this._setOptions({ disabled: !0 });
                },
                _on: function (b, c, d) {
                    var e,
                        f = this;
                    "boolean" != typeof b && ((d = c), (c = b), (b = !1)),
                        d ? ((c = e = a(c)), (this.onings = this.onings.add(c))) : ((d = c), (c = this.element), (e = this.widget())),
                        a.each(d, function (d, g) {
                            function h() {
                                if (b || (f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled"))) return ("string" == typeof g ? f[g] : g).apply(f, arguments);
                            }
                            "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                            var i = d.match(/^([\w:-]*)\s*(.*)$/),
                                j = i[1] + f.eventNamespace,
                                k = i[2];
                            k ? e.delegate(k, j, h) : c.on(j, h);
                        });
                },
                _off: function (b, c) {
                    (c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                        b.unbind(c).undelegate(c),
                        (this.onings = a(this.onings.not(b).get())),
                        (this.focusable = a(this.focusable.not(b).get())),
                        (this.hoverable = a(this.hoverable.not(b).get()));
                },
                _delay: function (a, b) {
                    function c() {
                        return ("string" == typeof a ? d[a] : a).apply(d, arguments);
                    }
                    var d = this;
                    return setTimeout(c, b || 0);
                },
                _hoverable: function (b) {
                    (this.hoverable = this.hoverable.add(b)),
                        this._on(b, {
                            mouseenter: function (b) {
                                a(b.currentTarget).addClass("ui-state-hover");
                            },
                            mouseleave: function (b) {
                                a(b.currentTarget).removeClass("ui-state-hover");
                            },
                        });
                },
                _focusable: function (b) {
                    (this.focusable = this.focusable.add(b)),
                        this._on(b, {
                            focusin: function (b) {
                                a(b.currentTarget).addClass("ui-state-focus");
                            },
                            focusout: function (b) {
                                a(b.currentTarget).removeClass("ui-state-focus");
                            },
                        });
                },
                _trigger: function (b, c, d) {
                    var e,
                        f,
                        g = this.options[b];
                    if (((d = d || {}), (c = a.Event(c)), (c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase()), (c.target = this.element[0]), (f = c.originalEvent))) for (e in f) e in c || (c[e] = f[e]);
                    return this.element.trigger(c, d), !((a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1) || c.isDefaultPrevented());
                },
            }),
            a.each({ show: "fadeIn", hide: "fadeOut" }, function (b, c) {
                a.Widget.prototype["_" + b] = function (d, e, f) {
                    "string" == typeof e && (e = { effect: e });
                    var g,
                        h = e ? (e === !0 || "number" == typeof e ? c : e.effect || c) : b;
                    (e = e || {}),
                        "number" == typeof e && (e = { duration: e }),
                        (g = !a.isEmptyObject(e)),
                        (e.complete = f),
                        e.delay && d.delay(e.delay),
                        g && a.effects && a.effects.effect[h]
                            ? d[b](e)
                            : h !== b && d[h]
                            ? d[h](e.duration, e.easing, f)
                            : d.queue(function (c) {
                                  a(this)[b](), f && f.call(d[0]), c();
                              });
                };
            });
        var f = (a.widget, !1);
        a(document).mouseup(function () {
            f = !1;
        });
        a.widget("ui.mouse", {
            version: "1.11.4",
            options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
            _mouseInit: function () {
                var b = this;
                this.element
                    .on("mousedown." + this.widgetName, function (a) {
                        return b._mouseDown(a);
                    })
                    .on("click." + this.widgetName, function (c) {
                        if (!0 === a.data(c.target, b.widgetName + ".preventClickEvent")) return a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1;
                    }),
                    (this.started = !1);
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            },
            _mouseDown: function (b) {
                if (!f) {
                    (this._mouseMoved = !1), this._mouseStarted && this._mouseUp(b), (this._mouseDownEvent = b);
                    var c = this,
                        d = 1 === b.which,
                        e = !("string" != typeof this.options.cancel || !b.target.nodeName) && a(b.target).closest(this.options.cancel).length;
                    return (
                        !(d && !e && this._mouseCapture(b)) ||
                        ((this.mouseDelayMet = !this.options.delay),
                        this.mouseDelayMet ||
                            (this._mouseDelayTimer = setTimeout(function () {
                                c.mouseDelayMet = !0;
                            }, this.options.delay)),
                        this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = this._mouseStart(b) !== !1), !this._mouseStarted)
                            ? (b.preventDefault(), !0)
                            : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"),
                              (this._mouseMoveDelegate = function (a) {
                                  return c._mouseMove(a);
                              }),
                              (this._mouseUpDelegate = function (a) {
                                  return c._mouseUp(a);
                              }),
                              this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                              b.preventDefault(),
                              (f = !0),
                              !0))
                    );
                }
            },
            _mouseMove: function (b) {
                if (this._mouseMoved) {
                    if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !b.button) return this._mouseUp(b);
                    if (!b.which) return this._mouseUp(b);
                }
                return (
                    (b.which || b.button) && (this._mouseMoved = !0),
                    this._mouseStarted
                        ? (this._mouseDrag(b), b.preventDefault())
                        : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1), this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
                );
            },
            _mouseUp: function (b) {
                return (
                    this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                    this._mouseStarted && ((this._mouseStarted = !1), b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)),
                    (f = !1),
                    !1
                );
            },
            _mouseDistanceMet: function (a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance;
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet;
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0;
            },
        });
        a.widget("ui.draggable", a.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null,
            },
            _create: function () {
                "original" === this.options.helper && this._setPositionRelative(),
                    this.options.addClasses && this.element.addClass("ui-draggable"),
                    this.options.disabled && this.element.addClass("ui-draggable-disabled"),
                    this._setHandleClassName(),
                    this._mouseInit();
            },
            _setOption: function (a, b) {
                this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName());
            },
            _destroy: function () {
                return (this.helper || this.element).is(".ui-draggable-dragging")
                    ? void (this.destroyOnClear = !0)
                    : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy());
            },
            _mouseCapture: function (b) {
                var c = this.options;
                return (
                    this._blurActiveElement(b),
                    !(this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0) && ((this.handle = this._getHandle(b)), !!this.handle && (this._blockFrames(c.iframeFix === !0 ? "iframe" : c.iframeFix), !0))
                );
            },
            _blockFrames: function (b) {
                this.iframeBlocks = this.document.find(b).map(function () {
                    var b = a(this);
                    return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0];
                });
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
            },
            _blurActiveElement: function (b) {
                var c = this.document[0];
                if (this.handleElement.is(b.target))
                    try {
                        c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur();
                    } catch (d) {}
            },
            _mouseStart: function (b) {
                var c = this.options;
                return (
                    (this.helper = this._createHelper(b)),
                    this.helper.addClass("ui-draggable-dragging"),
                    this._cacheHelperProportions(),
                    a.ui.ddmanager && (a.ui.ddmanager.current = this),
                    this._cacheMargins(),
                    (this.cssPosition = this.helper.css("position")),
                    (this.scrollParent = this.helper.scrollParent(!0)),
                    (this.offsetParent = this.helper.offsetParent()),
                    (this.hasFixedAncestor =
                        this.helper.parents().filter(function () {
                            return "fixed" === a(this).css("position");
                        }).length > 0),
                    (this.positionAbs = this.element.offset()),
                    this._refreshOffsets(b),
                    (this.originalPosition = this.position = this._generatePosition(b, !1)),
                    (this.originalPageX = b.pageX),
                    (this.originalPageY = b.pageY),
                    c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
                    this._setContainment(),
                    this._trigger("start", b) === !1
                        ? (this._clear(), !1)
                        : (this._cacheHelperProportions(),
                          a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b),
                          this._normalizeRightBottom(),
                          this._mouseDrag(b, !0),
                          a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b),
                          !0)
                );
            },
            _refreshOffsets: function (a) {
                (this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
                    (this.offset.click = { left: a.pageX - this.offset.left, top: a.pageY - this.offset.top });
            },
            _mouseDrag: function (b, c) {
                if ((this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), (this.position = this._generatePosition(b, !0)), (this.positionAbs = this._convertPositionTo("absolute")), !c)) {
                    var d = this._uiHash();
                    if (this._trigger("drag", b, d) === !1) return this._mouseUp({}), !1;
                    this.position = d.position;
                }
                return (this.helper[0].style.left = this.position.left + "px"), (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1;
            },
            _mouseStop: function (b) {
                var c = this,
                    d = !1;
                return (
                    a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)),
                    this.dropped && ((d = this.dropped), (this.dropped = !1)),
                    ("invalid" === this.options.revert && !d) || ("valid" === this.options.revert && d) || this.options.revert === !0 || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, d))
                        ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                              c._trigger("stop", b) !== !1 && c._clear();
                          })
                        : this._trigger("stop", b) !== !1 && this._clear(),
                    !1
                );
            },
            _mouseUp: function (b) {
                return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), this.handleElement.is(b.target) && this.element.focus(), a.ui.mouse.prototype._mouseUp.call(this, b);
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
            },
            _getHandle: function (b) {
                return !this.options.handle || !!a(b.target).closest(this.element.find(this.options.handle)).length;
            },
            _setHandleClassName: function () {
                (this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element), this.handleElement.addClass("ui-draggable-handle");
            },
            _removeHandleClassName: function () {
                this.handleElement.removeClass("ui-draggable-handle");
            },
            _createHelper: function (b) {
                var c = this.options,
                    d = a.isFunction(c.helper),
                    e = d ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
                return (
                    e.parents("body").length || e.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo),
                    d && e[0] === this.element[0] && this._setPositionRelative(),
                    e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"),
                    e
                );
            },
            _setPositionRelative: function () {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
            },
            _adjustOffsetFromHelper: function (b) {
                "string" == typeof b && (b = b.split(" ")),
                    a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }),
                    "left" in b && (this.offset.click.left = b.left + this.margins.left),
                    "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left),
                    "top" in b && (this.offset.click.top = b.top + this.margins.top),
                    "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top);
            },
            _isRootNode: function (a) {
                return /(html|body)/i.test(a.tagName) || a === this.document[0];
            },
            _getParentOffset: function () {
                var b = this.offsetParent.offset(),
                    c = this.document[0];
                return (
                    "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && ((b.left += this.scrollParent.scrollLeft()), (b.top += this.scrollParent.scrollTop())),
                    this._isRootNode(this.offsetParent[0]) && (b = { top: 0, left: 0 }),
                    { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
                );
            },
            _getRelativeOffset: function () {
                if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
                var a = this.element.position(),
                    b = this._isRootNode(this.scrollParent[0]);
                return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft()) };
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
                };
            },
            _cacheHelperProportions: function () {
                this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
            },
            _setContainment: function () {
                var b,
                    c,
                    d,
                    e = this.options,
                    f = this.document[0];
                return (
                    (this.relativeContainer = null),
                    e.containment
                        ? "window" === e.containment
                            ? void (this.containment = [
                                  a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
                                  a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
                                  a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left,
                                  a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top,
                              ])
                            : "document" === e.containment
                            ? void (this.containment = [0, 0, a(f).width() - this.helperProportions.width - this.margins.left, (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top])
                            : e.containment.constructor === Array
                            ? void (this.containment = e.containment)
                            : ("parent" === e.containment && (e.containment = this.helper[0].parentNode),
                              (c = a(e.containment)),
                              (d = c[0]),
                              void (
                                  d &&
                                  ((b = /(scroll|auto)/.test(c.css("overflow"))),
                                  (this.containment = [
                                      (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0),
                                      (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0),
                                      (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) -
                                          (parseInt(c.css("borderRightWidth"), 10) || 0) -
                                          (parseInt(c.css("paddingRight"), 10) || 0) -
                                          this.helperProportions.width -
                                          this.margins.left -
                                          this.margins.right,
                                      (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) -
                                          (parseInt(c.css("borderBottomWidth"), 10) || 0) -
                                          (parseInt(c.css("paddingBottom"), 10) || 0) -
                                          this.helperProportions.height -
                                          this.margins.top -
                                          this.margins.bottom,
                                  ]),
                                  (this.relativeContainer = c))
                              ))
                        : void (this.containment = null)
                );
            },
            _convertPositionTo: function (a, b) {
                b || (b = this.position);
                var c = "absolute" === a ? 1 : -1,
                    d = this._isRootNode(this.scrollParent[0]);
                return {
                    top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
                    left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c,
                };
            },
            _generatePosition: function (a, b) {
                var c,
                    d,
                    e,
                    f,
                    g = this.options,
                    h = this._isRootNode(this.scrollParent[0]),
                    i = a.pageX,
                    j = a.pageY;
                return (
                    (h && this.offset.scroll) || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }),
                    b &&
                        (this.containment &&
                            (this.relativeContainer
                                ? ((d = this.relativeContainer.offset()), (c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]))
                                : (c = this.containment),
                            a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left),
                            a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top),
                            a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left),
                            a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)),
                        g.grid &&
                            ((e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY),
                            (j = c ? (e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1]) : e),
                            (f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX),
                            (i = c ? (f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0]) : f)),
                        "y" === g.axis && (i = this.originalPageX),
                        "x" === g.axis && (j = this.originalPageY)),
                    {
                        top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                        left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left),
                    }
                );
            },
            _clear: function () {
                this.helper.removeClass("ui-draggable-dragging"),
                    this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                    (this.helper = null),
                    (this.cancelHelperRemoval = !1),
                    this.destroyOnClear && this.destroy();
            },
            _normalizeRightBottom: function () {
                "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")),
                    "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"));
            },
            _trigger: function (b, c, d) {
                return (
                    (d = d || this._uiHash()),
                    a.ui.plugin.call(this, b, [c, d, this], !0),
                    /^(drag|start|stop)/.test(b) && ((this.positionAbs = this._convertPositionTo("absolute")), (d.offset = this.positionAbs)),
                    a.Widget.prototype._trigger.call(this, b, c, d)
                );
            },
            plugins: {},
            _uiHash: function () {
                return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
            },
        }),
            a.ui.plugin.add("draggable", "connectToSortable", {
                start: function (b, c, d) {
                    var e = a.extend({}, c, { item: d.element });
                    (d.sortables = []),
                        a(d.options.connectToSortable).each(function () {
                            var c = a(this).sortable("instance");
                            c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e));
                        });
                },
                stop: function (b, c, d) {
                    var e = a.extend({}, c, { item: d.element });
                    (d.cancelHelperRemoval = !1),
                        a.each(d.sortables, function () {
                            var a = this;
                            a.isOver
                                ? ((a.isOver = 0),
                                  (d.cancelHelperRemoval = !0),
                                  (a.cancelHelperRemoval = !1),
                                  (a._storedCSS = { position: a.placeholder.css("position"), top: a.placeholder.css("top"), left: a.placeholder.css("left") }),
                                  a._mouseStop(b),
                                  (a.options.helper = a.options._helper))
                                : ((a.cancelHelperRemoval = !0), a._trigger("deactivate", b, e));
                        });
                },
                drag: function (b, c, d) {
                    a.each(d.sortables, function () {
                        var e = !1,
                            f = this;
                        (f.positionAbs = d.positionAbs),
                            (f.helperProportions = d.helperProportions),
                            (f.offset.click = d.offset.click),
                            f._intersectsWith(f.containerCache) &&
                                ((e = !0),
                                a.each(d.sortables, function () {
                                    return (
                                        (this.positionAbs = d.positionAbs),
                                        (this.helperProportions = d.helperProportions),
                                        (this.offset.click = d.offset.click),
                                        this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1),
                                        e
                                    );
                                })),
                            e
                                ? (f.isOver ||
                                      ((f.isOver = 1),
                                      (d._parent = c.helper.parent()),
                                      (f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0)),
                                      (f.options._helper = f.options.helper),
                                      (f.options.helper = function () {
                                          return c.helper[0];
                                      }),
                                      (b.target = f.currentItem[0]),
                                      f._mouseCapture(b, !0),
                                      f._mouseStart(b, !0, !0),
                                      (f.offset.click.top = d.offset.click.top),
                                      (f.offset.click.left = d.offset.click.left),
                                      (f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left),
                                      (f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top),
                                      d._trigger("toSortable", b),
                                      (d.dropped = f.element),
                                      a.each(d.sortables, function () {
                                          this.refreshPositions();
                                      }),
                                      (d.currentItem = d.element),
                                      (f.fromOutside = d)),
                                  f.currentItem && (f._mouseDrag(b), (c.position = f.position)))
                                : f.isOver &&
                                  ((f.isOver = 0),
                                  (f.cancelHelperRemoval = !0),
                                  (f.options._revert = f.options.revert),
                                  (f.options.revert = !1),
                                  f._trigger("out", b, f._uiHash(f)),
                                  f._mouseStop(b, !0),
                                  (f.options.revert = f.options._revert),
                                  (f.options.helper = f.options._helper),
                                  f.placeholder && f.placeholder.remove(),
                                  c.helper.appendTo(d._parent),
                                  d._refreshOffsets(b),
                                  (c.position = d._generatePosition(b, !0)),
                                  d._trigger("fromSortable", b),
                                  (d.dropped = !1),
                                  a.each(d.sortables, function () {
                                      this.refreshPositions();
                                  }));
                    });
                },
            }),
            a.ui.plugin.add("draggable", "cursor", {
                start: function (b, c, d) {
                    var e = a("body"),
                        f = d.options;
                    e.css("cursor") && (f._cursor = e.css("cursor")), e.css("cursor", f.cursor);
                },
                stop: function (b, c, d) {
                    var e = d.options;
                    e._cursor && a("body").css("cursor", e._cursor);
                },
            }),
            a.ui.plugin.add("draggable", "opacity", {
                start: function (b, c, d) {
                    var e = a(c.helper),
                        f = d.options;
                    e.css("opacity") && (f._opacity = e.css("opacity")), e.css("opacity", f.opacity);
                },
                stop: function (b, c, d) {
                    var e = d.options;
                    e._opacity && a(c.helper).css("opacity", e._opacity);
                },
            }),
            a.ui.plugin.add("draggable", "scroll", {
                start: function (a, b, c) {
                    c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)),
                        c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset());
                },
                drag: function (b, c, d) {
                    var e = d.options,
                        f = !1,
                        g = d.scrollParentNotHidden[0],
                        h = d.document[0];
                    g !== h && "HTML" !== g.tagName
                        ? ((e.axis && "x" === e.axis) ||
                              (d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity
                                  ? (g.scrollTop = f = g.scrollTop + e.scrollSpeed)
                                  : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)),
                          (e.axis && "y" === e.axis) ||
                              (d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity
                                  ? (g.scrollLeft = f = g.scrollLeft + e.scrollSpeed)
                                  : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed)))
                        : ((e.axis && "x" === e.axis) ||
                              (b.pageY - a(h).scrollTop() < e.scrollSensitivity
                                  ? (f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed))
                                  : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))),
                          (e.axis && "y" === e.axis) ||
                              (b.pageX - a(h).scrollLeft() < e.scrollSensitivity
                                  ? (f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed))
                                  : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))),
                        f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b);
                },
            }),
            a.ui.plugin.add("draggable", "snap", {
                start: function (b, c, d) {
                    var e = d.options;
                    (d.snapElements = []),
                        a(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function () {
                            var b = a(this),
                                c = b.offset();
                            this !== d.element[0] && d.snapElements.push({ item: this, width: b.outerWidth(), height: b.outerHeight(), top: c.top, left: c.left });
                        });
                },
                drag: function (b, c, d) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o = d.options,
                        p = o.snapTolerance,
                        q = c.offset.left,
                        r = q + d.helperProportions.width,
                        s = c.offset.top,
                        t = s + d.helperProportions.height;
                    for (m = d.snapElements.length - 1; m >= 0; m--)
                        (i = d.snapElements[m].left - d.margins.left),
                            (j = i + d.snapElements[m].width),
                            (k = d.snapElements[m].top - d.margins.top),
                            (l = k + d.snapElements[m].height),
                            r < i - p || q > j + p || t < k - p || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item)
                                ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[m].item })), (d.snapElements[m].snapping = !1))
                                : ("inner" !== o.snapMode &&
                                      ((e = Math.abs(k - t) <= p),
                                      (f = Math.abs(l - s) <= p),
                                      (g = Math.abs(i - r) <= p),
                                      (h = Math.abs(j - q) <= p),
                                      e && (c.position.top = d._convertPositionTo("relative", { top: k - d.helperProportions.height, left: 0 }).top),
                                      f && (c.position.top = d._convertPositionTo("relative", { top: l, left: 0 }).top),
                                      g && (c.position.left = d._convertPositionTo("relative", { top: 0, left: i - d.helperProportions.width }).left),
                                      h && (c.position.left = d._convertPositionTo("relative", { top: 0, left: j }).left)),
                                  (n = e || f || g || h),
                                  "outer" !== o.snapMode &&
                                      ((e = Math.abs(k - s) <= p),
                                      (f = Math.abs(l - t) <= p),
                                      (g = Math.abs(i - q) <= p),
                                      (h = Math.abs(j - r) <= p),
                                      e && (c.position.top = d._convertPositionTo("relative", { top: k, left: 0 }).top),
                                      f && (c.position.top = d._convertPositionTo("relative", { top: l - d.helperProportions.height, left: 0 }).top),
                                      g && (c.position.left = d._convertPositionTo("relative", { top: 0, left: i }).left),
                                      h && (c.position.left = d._convertPositionTo("relative", { top: 0, left: j - d.helperProportions.width }).left)),
                                  !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), { snapItem: d.snapElements[m].item })),
                                  (d.snapElements[m].snapping = e || f || g || h || n));
                },
            }),
            a.ui.plugin.add("draggable", "stack", {
                start: function (b, c, d) {
                    var e,
                        f = d.options,
                        g = a.makeArray(a(f.stack)).sort(function (b, c) {
                            return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0);
                        });
                    g.length &&
                        ((e = parseInt(a(g[0]).css("zIndex"), 10) || 0),
                        a(g).each(function (b) {
                            a(this).css("zIndex", e + b);
                        }),
                        this.css("zIndex", e + g.length));
                },
            }),
            a.ui.plugin.add("draggable", "zIndex", {
                start: function (b, c, d) {
                    var e = a(c.helper),
                        f = d.options;
                    e.css("zIndex") && (f._zIndex = e.css("zIndex")), e.css("zIndex", f.zIndex);
                },
                stop: function (b, c, d) {
                    var e = d.options;
                    e._zIndex && a(c.helper).css("zIndex", e._zIndex);
                },
            });
        a.ui.draggable;
        a.widget("ui.droppable", {
            version: "1.11.4",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                enableExtendedEvents: !1,
                onOverSelfEvent: "over",
                onOverRestrictedEvent: "over",
                onOutSelfEvent: "out",
                onOutRestrictedEvent: "out",
                hoverSelfClass: !1,
                hoverRestrictedClass: !1,
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null,
            },
            _create: function () {
                var b,
                    c = this.options,
                    d = c.accept;
                (this.isover = !1),
                    (this.isout = !0),
                    (this.accept = a.isFunction(d)
                        ? d
                        : function (a) {
                              return a.is(d);
                          }),
                    (this.proportions = function () {
                        return arguments.length ? void (b = arguments[0]) : b ? b : (b = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight });
                    }),
                    this._addToManager(c.scope),
                    c.addClasses && this.element.addClass("ui-droppable");
            },
            _addToManager: function (b) {
                (a.ui.ddmanager.droppables[b] = a.ui.ddmanager.droppables[b] || []), a.ui.ddmanager.droppables[b].push(this);
            },
            _splice: function (a) {
                for (var b = 0; b < a.length; b++) a[b] === this && a.splice(b, 1);
            },
            _destroy: function () {
                var b = a.ui.ddmanager.droppables[this.options.scope];
                this._splice(b), this.element.removeClass("ui-droppable ui-droppable-disabled");
            },
            _setOption: function (b, c) {
                if ("accept" === b)
                    this.accept = a.isFunction(c)
                        ? c
                        : function (a) {
                              return a.is(c);
                          };
                else if ("scope" === b) {
                    var d = a.ui.ddmanager.droppables[this.options.scope];
                    this._splice(d), this._addToManager(c);
                }
                this._super(b, c);
            },
            _activate: function (b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c));
            },
            _deactivate: function (b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c));
            },
            _over: function (b) {
                var c = a.ui.ddmanager.current,
                    d = (c.currentItem || c.element)[0] === this.element[0];
                !c ||
                    (d && !this.options.enableExtendedEvents) ||
                    (d && this.options.enableExtendedEvents && (this.options.hoverSelfClass && this.element.addClass(this.options.hoverSelfClass), this._trigger(this.options.onOverSelfEvent, b, this.ui(c))),
                    this.accept.call(this.element[0], c.currentItem || c.element)
                        ? (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
                        : this.options.enableExtendedEvents && (this.options.hoverRestrictedClass && this.element.addClass(this.options.hoverRestrictedClass), this._trigger(this.options.onOverRestrictedEvent, b, this.ui(c))));
            },
            _out: function (b) {
                var c = a.ui.ddmanager.current,
                    d = (c.currentItem || c.element)[0] === this.element[0];
                !c ||
                    (d && !this.options.enableExtendedEvents) ||
                    (d && this.options.enableExtendedEvents && (this.options.hoverSelfClass && this.element.removeClass(this.options.hoverSelfClass), this._trigger(this.options.onOutSelfEvent, b, this.ui(c))),
                    this.accept.call(this.element[0], c.currentItem || c.element)
                        ? (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
                        : this.options.enableExtendedEvents && (this.options.hoverRestrictedClass && this.element.removeClass(this.options.hoverRestrictedClass), this._trigger(this.options.onOutRestrictedEvent, b, this.ui(c))));
            },
            _drop: function (b, c) {
                var d = c || a.ui.ddmanager.current,
                    e = !1;
                return (
                    !(!d || (d.currentItem || d.element)[0] === this.element[0]) &&
                    (this.element
                        .find(":data(ui-droppable)")
                        .not(".ui-draggable-dragging")
                        .each(function () {
                            var c = a(this).droppable("instance");
                            if (
                                c.options.greedy &&
                                !c.options.disabled &&
                                c.options.scope === d.options.scope &&
                                c.accept.call(c.element[0], d.currentItem || d.element) &&
                                a.ui.intersect(d, a.extend(c, { offset: c.element.offset() }), c.options.tolerance, b)
                            )
                                return (e = !0), !1;
                        }),
                    !e &&
                        !!this.accept.call(this.element[0], d.currentItem || d.element) &&
                        (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element))
                );
            },
            ui: function (a) {
                return { draggable: a.currentItem || a.element, helper: a.helper, position: a.position, offset: a.positionAbs };
            },
        }),
            (a.ui.intersect = (function () {
                function a(a, b, c) {
                    return a >= b && a < b + c;
                }
                return function (b, c, d, e) {
                    if (!c.offset) return !1;
                    var f = (b.positionAbs || b.position.absolute).left + b.margins.left,
                        g = (b.positionAbs || b.position.absolute).top + b.margins.top,
                        h = f + b.helperProportions.width,
                        i = g + b.helperProportions.height,
                        j = c.offset.left,
                        k = c.offset.top,
                        l = j + c.proportions().width,
                        m = k + c.proportions().height;
                    switch (d) {
                        case "fit":
                            return j <= f && h <= l && k <= g && i <= m;
                        case "intersect":
                            return j < f + b.helperProportions.width / 2 && h - b.helperProportions.width / 2 < l && k < g + b.helperProportions.height / 2 && i - b.helperProportions.height / 2 < m;
                        case "pointer":
                            return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);
                        case "touch":
                            return ((g >= k && g <= m) || (i >= k && i <= m) || (g < k && i > m)) && ((f >= j && f <= l) || (h >= j && h <= l) || (f < j && h > l));
                        default:
                            return !1;
                    }
                };
            })()),
            (a.ui.ddmanager = {
                current: null,
                droppables: { default: [] },
                prepareOffsets: function (b, c) {
                    var d,
                        e,
                        f = a.ui.ddmanager.droppables[b.options.scope] || [],
                        g = c ? c.type : null,
                        h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
                    a: for (d = 0; d < f.length; d++)
                        if (!(f[d].options.disabled || (b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element)))) {
                            if (!f[d].options.enableExtendedEvents)
                                for (e = 0; e < h.length; e++)
                                    if (h[e] === f[d].element[0]) {
                                        f[d].proportions().height = 0;
                                        continue a;
                                    }
                            (f[d].visible = "none" !== f[d].element.css("display")),
                                f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), (f[d].offset = f[d].element.offset()), f[d].proportions({ width: f[d].element[0].offsetWidth, height: f[d].element[0].offsetHeight }));
                        }
                },
                drop: function (b, c) {
                    var d = !1;
                    return (
                        a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function () {
                            this.options &&
                                (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance, c) && (d = this._drop.call(this, c) || d),
                                !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && ((this.isout = !0), (this.isover = !1), this._deactivate.call(this, c)));
                        }),
                        d
                    );
                },
                dragStart: function (b, c) {
                    b.element.parentsUntil("body").on("scroll.droppable", function () {
                        b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
                    });
                },
                drag: function (b, c) {
                    b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c),
                        a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                            if (!this.options.disabled && !this.greedyChild && this.visible) {
                                var d,
                                    e,
                                    f,
                                    g = a.ui.intersect(b, this, this.options.tolerance, c),
                                    h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                                h &&
                                    (this.options.greedy &&
                                        ((e = this.options.scope),
                                        (f = this.element.parents(":data(ui-droppable)").filter(function () {
                                            return a(this).droppable("instance").options.scope === e;
                                        })),
                                        f.length && ((d = a(f[0]).droppable("instance")), (d.greedyChild = "isover" === h))),
                                    d && "isover" === h && ((d.isover = !1), (d.isout = !0), d._out.call(d, c)),
                                    (this[h] = !0),
                                    (this["isout" === h ? "isover" : "isout"] = !1),
                                    this["isover" === h ? "_over" : "_out"].call(this, c),
                                    d && "isout" === h && ((d.isout = !1), (d.isover = !0), d._over.call(d, c)));
                            }
                        });
                },
                dragStop: function (b, c) {
                    b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c);
                },
            });
        a.ui.droppable,
            a.widget("ui.selectable", a.ui.mouse, {
                version: "1.11.4",
                options: {
                    appendTo: "body",
                    autoRefresh: !0,
                    distance: 0,
                    filter: "*",
                    tolerance: "touch",
                    cssHelper: { offsetTop: 0, offsetLeft: 0, heightIncrement: 0, widthIncrement: 0 },
                    selected: null,
                    selecting: null,
                    start: null,
                    stop: null,
                    unselected: null,
                    unselecting: null,
                },
                _create: function () {
                    var b,
                        c = this;
                    this.element.addClass("ui-selectable"),
                        (this.dragged = !1),
                        (this.refresh = function () {
                            (b = a(c.options.filter, c.element[0])),
                                b.addClass("ui-selectee"),
                                b.each(function () {
                                    var b = a(this),
                                        c = b.offset();
                                    a.data(this, "selectable-item", {
                                        element: this,
                                        $element: b,
                                        left: c.left,
                                        top: c.top,
                                        right: c.left + b.outerWidth(),
                                        bottom: c.top + b.outerHeight(),
                                        startselected: !1,
                                        selected: b.hasClass("ui-selected"),
                                        selecting: b.hasClass("ui-selecting"),
                                        unselecting: b.hasClass("ui-unselecting"),
                                    });
                                });
                        }),
                        (this.repositionCssHelper = function (a, b) {
                            this.dragged && ((this.options.cssHelper.heightIncrement = a), (this.options.cssHelper.widthIncrement = b), this._mouseDrag(this.lastEvent));
                        }),
                        this.refresh(),
                        (this.selectees = b.addClass("ui-selectee")),
                        this._mouseInit(),
                        (this.helper = a("<div class='ui-selectable-helper'></div>"));
                },
                _destroy: function () {
                    this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy();
                },
                _mouseStart: function (b) {
                    var c = this,
                        d = this.options;
                    (this.opos = [b.pageX, b.pageY]),
                        this.options.disabled ||
                            ((this.selectees = a(d.filter, this.element[0])),
                            this._trigger("start", b),
                            (this.options.cssHelper.offsetLeft = a(d.appendTo).offset().left),
                            (this.options.cssHelper.offsetTop = a(d.appendTo).offset().top),
                            a(d.appendTo).append(this.helper),
                            this.helper.css({ left: b.pageX - this.options.cssHelper.offsetLeft, top: b.pageY - this.options.cssHelper.offsetTop, width: 0, height: 0 }),
                            d.autoRefresh && this.refresh(),
                            this.selectees.filter(".ui-selected").each(function () {
                                var d = a.data(this, "selectable-item");
                                (d.startselected = !0),
                                    b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), (d.selected = !1), d.$element.addClass("ui-unselecting"), (d.unselecting = !0), c._trigger("unselecting", b, { unselecting: d.element }));
                            }),
                            a(b.target)
                                .parents()
                                .addBack()
                                .each(function () {
                                    var d,
                                        e = a.data(this, "selectable-item");
                                    if (e)
                                        return (
                                            (d = (!b.metaKey && !b.ctrlKey) || !e.$element.hasClass("ui-selected")),
                                            e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"),
                                            (e.unselecting = !d),
                                            (e.selecting = d),
                                            (e.selected = d),
                                            d ? c._trigger("selecting", b, { selecting: e.element }) : c._trigger("unselecting", b, { unselecting: e.element }),
                                            !1
                                        );
                                }));
                },
                _mouseDrag: function (b) {
                    if (((this.lastEvent = b), (this.dragged = !0), !this.options.disabled)) {
                        var c,
                            d = this,
                            e = this.options,
                            f = this.opos[0],
                            g = this.opos[1],
                            h = b.pageX + this.options.cssHelper.widthIncrement,
                            i = b.pageY + this.options.cssHelper.heightIncrement;
                        return (
                            f > h && ((c = h), (h = f), (f = c)),
                            g > i && ((c = i), (i = g), (g = c)),
                            this.helper.css({ left: f - this.options.cssHelper.offsetLeft, top: g - this.options.cssHelper.offsetTop, width: h - f, height: i - g }),
                            this.selectees.each(function () {
                                var c = a.data(this, "selectable-item"),
                                    j = !1;
                                c &&
                                    c.element !== d.element[0] &&
                                    ("touch" === e.tolerance ? (j = !(c.left > h || c.right < f || c.top > i || c.bottom < g)) : "fit" === e.tolerance && (j = c.left > f && c.right < h && c.top > g && c.bottom < i),
                                    j
                                        ? (c.selected && (c.$element.removeClass("ui-selected"), (c.selected = !1)),
                                          c.unselecting && (c.$element.removeClass("ui-unselecting"), (c.unselecting = !1)),
                                          c.selecting || (c.$element.addClass("ui-selecting"), (c.selecting = !0), d._trigger("selecting", b, { selecting: c.element })))
                                        : (c.selecting &&
                                              ((b.metaKey || b.ctrlKey) && c.startselected
                                                  ? (c.$element.removeClass("ui-selecting"), (c.selecting = !1), c.$element.addClass("ui-selected"), (c.selected = !0))
                                                  : (c.$element.removeClass("ui-selecting"),
                                                    (c.selecting = !1),
                                                    c.startselected && (c.$element.addClass("ui-unselecting"), (c.unselecting = !0)),
                                                    d._trigger("unselecting", b, { unselecting: c.element }))),
                                          c.selected &&
                                              (b.metaKey ||
                                                  b.ctrlKey ||
                                                  c.startselected ||
                                                  (c.$element.removeClass("ui-selected"), (c.selected = !1), c.$element.addClass("ui-unselecting"), (c.unselecting = !0), d._trigger("unselecting", b, { unselecting: c.element })))));
                            }),
                            !1
                        );
                    }
                },
                _mouseStop: function (b) {
                    var c = this;
                    return (
                        (this.dragged = !1),
                        (this.options.cssHelper.heightIncrement = 0),
                        (this.options.cssHelper.widthIncrement = 0),
                        a(".ui-unselecting", this.element[0]).each(function () {
                            var d = a.data(this, "selectable-item");
                            d.$element.removeClass("ui-unselecting"), (d.unselecting = !1), (d.startselected = !1), c._trigger("unselected", b, { unselected: d.element });
                        }),
                        a(".ui-selecting", this.element[0]).each(function () {
                            var d = a.data(this, "selectable-item");
                            d.$element.removeClass("ui-selecting").addClass("ui-selected"), (d.selecting = !1), (d.selected = !0), (d.startselected = !0), c._trigger("selected", b, { selected: d.element });
                        }),
                        this._trigger("stop", b),
                        this.helper.remove(),
                        !1
                    );
                },
            });
    });
var matched, browser;
(jQuery.uaMatch = function (a) {
    a = a.toLowerCase();
    var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || (a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) || [];
    return { browser: b[1] || "", version: b[2] || "0" };
}),
    (matched = jQuery.uaMatch(navigator.userAgent)),
    (browser = {}),
    matched.browser && ((browser[matched.browser] = !0), (browser.version = matched.version)),
    browser.chrome ? (browser.webkit = !0) : browser.webkit && (browser.safari = !0),
    (jQuery.browser = browser),
    (function () {
        !(function (a) {
            var b = this || (0, eval)("this"),
                c = b.document,
                d = b.navigator,
                e = b.jQuery,
                f = b.JSON;
            !(function (a) {
                "function" == typeof define && define.amd ? define(["exports", "require"], a) : a("object" == typeof exports && "object" == typeof module ? module.exports || exports : (b.ko = {}));
            })(function (g, h) {
                function i(a, b) {
                    return (null === a || typeof a in q) && a === b;
                }
                function j(b, c) {
                    var d;
                    return function () {
                        d ||
                            (d = p.a.setTimeout(function () {
                                (d = a), b();
                            }, c));
                    };
                }
                function k(a, b) {
                    var c;
                    return function () {
                        clearTimeout(c), (c = p.a.setTimeout(a, b));
                    };
                }
                function l(a, b) {
                    b && b !== r ? ("beforeChange" === b ? this.Kb(a) : this.Ha(a, b)) : this.Lb(a);
                }
                function m(a, b) {
                    null !== b && b.k && b.k();
                }
                function n(a, b) {
                    var c = this.Hc,
                        d = c[w];
                    d.R || (this.lb && this.Ma[b] ? (c.Pb(b, a, this.Ma[b]), (this.Ma[b] = null), --this.lb) : d.r[b] || c.Pb(b, a, d.s ? { ia: a } : c.uc(a)));
                }
                function o(a, b, c, d) {
                    (p.d[a] = {
                        init: function (a, e, f, g, h) {
                            var i, j;
                            return (
                                p.m(
                                    function () {
                                        var f = p.a.c(e()),
                                            g = !c != !f,
                                            k = !j;
                                        (k || b || g !== i) && (k && p.va.Aa() && (j = p.a.ua(p.f.childNodes(a), !0)), g ? (k || p.f.da(a, p.a.ua(j)), p.eb(d ? d(h, f) : h, a)) : p.f.xa(a), (i = g));
                                    },
                                    null,
                                    { i: a }
                                ),
                                { controlsDescendantBindings: !0 }
                            );
                        },
                    }),
                        (p.h.ta[a] = !1),
                        (p.f.Z[a] = !0);
                }
                var p = "undefined" != typeof g ? g : {};
                (p.b = function (a, b) {
                    for (var c = a.split("."), d = p, e = 0; e < c.length - 1; e++) d = d[c[e]];
                    d[c[c.length - 1]] = b;
                }),
                    (p.G = function (a, b, c) {
                        a[b] = c;
                    }),
                    (p.version = "3.4.0"),
                    p.b("version", p.version),
                    (p.options = { deferUpdates: !1, useOnlyNativeEvents: !1 }),
                    (p.a = (function () {
                        function g(a, b) {
                            for (var c in a) a.hasOwnProperty(c) && b(c, a[c]);
                        }
                        function h(a, b) {
                            if (b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                            return a;
                        }
                        function i(a, b) {
                            return (a.__proto__ = b), a;
                        }
                        function j(a, b, c, d) {
                            var e = a[b].match(r) || [];
                            p.a.q(c.match(r), function (a) {
                                p.a.pa(e, a, d);
                            }),
                                (a[b] = e.join(" "));
                        }
                        var k = { __proto__: [] } instanceof Array,
                            l = "function" == typeof Symbol,
                            m = {},
                            n = {};
                        (m[d && /Firefox\/2/i.test(d.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"]),
                            (m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ")),
                            g(m, function (a, b) {
                                if (b.length) for (var c = 0, d = b.length; c < d; c++) n[b[c]] = a;
                            });
                        var o = { propertychange: !0 },
                            q =
                                c &&
                                (function () {
                                    for (var b = 3, d = c.createElement("div"), e = d.getElementsByTagName("i"); (d.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->"), e[0]; );
                                    return 4 < b ? b : a;
                                })(),
                            r = /\S+/g;
                        return {
                            cc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            q: function (a, b) {
                                for (var c = 0, d = a.length; c < d; c++) b(a[c], c);
                            },
                            o: function (a, b) {
                                if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
                                for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c;
                                return -1;
                            },
                            Sb: function (a, b, c) {
                                for (var d = 0, e = a.length; d < e; d++) if (b.call(c, a[d], d)) return a[d];
                                return null;
                            },
                            La: function (a, b) {
                                var c = p.a.o(a, b);
                                0 < c ? a.splice(c, 1) : 0 === c && a.shift();
                            },
                            Tb: function (a) {
                                a = a || [];
                                for (var b = [], c = 0, d = a.length; c < d; c++) 0 > p.a.o(b, a[c]) && b.push(a[c]);
                                return b;
                            },
                            fb: function (a, b) {
                                a = a || [];
                                for (var c = [], d = 0, e = a.length; d < e; d++) c.push(b(a[d], d));
                                return c;
                            },
                            Ka: function (a, b) {
                                a = a || [];
                                for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]);
                                return c;
                            },
                            ra: function (a, b) {
                                if (b instanceof Array) a.push.apply(a, b);
                                else for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);
                                return a;
                            },
                            pa: function (a, b, c) {
                                var d = p.a.o(p.a.zb(a), b);
                                0 > d ? c && a.push(b) : c || a.splice(d, 1);
                            },
                            ka: k,
                            extend: h,
                            Xa: i,
                            Ya: k ? i : h,
                            D: g,
                            Ca: function (a, b) {
                                if (!a) return a;
                                var c,
                                    d = {};
                                for (c in a) a.hasOwnProperty(c) && (d[c] = b(a[c], c, a));
                                return d;
                            },
                            ob: function (a) {
                                for (; a.firstChild; ) p.removeNode(a.firstChild);
                            },
                            jc: function (a) {
                                a = p.a.V(a);
                                for (var b = ((a[0] && a[0].ownerDocument) || c).createElement("div"), d = 0, e = a.length; d < e; d++) b.appendChild(p.$(a[d]));
                                return b;
                            },
                            ua: function (a, b) {
                                for (var c = 0, d = a.length, e = []; c < d; c++) {
                                    var f = a[c].cloneNode(!0);
                                    e.push(b ? p.$(f) : f);
                                }
                                return e;
                            },
                            da: function (a, b) {
                                if ((p.a.ob(a), b)) for (var c = 0, d = b.length; c < d; c++) a.appendChild(b[c]);
                            },
                            qc: function (a, b) {
                                var c = a.nodeType ? [a] : a;
                                if (0 < c.length) {
                                    for (var d = c[0], e = d.parentNode, f = 0, g = b.length; f < g; f++) e.insertBefore(b[f], d);
                                    for (f = 0, g = c.length; f < g; f++) p.removeNode(c[f]);
                                }
                            },
                            za: function (a, b) {
                                if (a.length) {
                                    for (b = (8 === b.nodeType && b.parentNode) || b; a.length && a[0].parentNode !== b; ) a.splice(0, 1);
                                    for (; 1 < a.length && a[a.length - 1].parentNode !== b; ) a.length--;
                                    if (1 < a.length) {
                                        var c = a[0],
                                            d = a[a.length - 1];
                                        for (a.length = 0; c !== d; ) a.push(c), (c = c.nextSibling);
                                        a.push(d);
                                    }
                                }
                                return a;
                            },
                            sc: function (a, b) {
                                7 > q ? a.setAttribute("selected", b) : (a.selected = b);
                            },
                            $a: function (b) {
                                return null === b || b === a ? "" : b.trim ? b.trim() : b.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                            },
                            nd: function (a, b) {
                                return (a = a || ""), !(b.length > a.length) && a.substring(0, b.length) === b;
                            },
                            Mc: function (a, b) {
                                if (a === b) return !0;
                                if (11 === a.nodeType) return !1;
                                if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);
                                if (b.compareDocumentPosition) return 16 == (16 & b.compareDocumentPosition(a));
                                for (; a && a != b; ) a = a.parentNode;
                                return !!a;
                            },
                            nb: function (a) {
                                return p.a.Mc(a, a.ownerDocument.documentElement);
                            },
                            Qb: function (a) {
                                return !!p.a.Sb(a, p.a.nb);
                            },
                            A: function (a) {
                                return a && a.tagName && a.tagName.toLowerCase();
                            },
                            Wb: function (a) {
                                return p.onError
                                    ? function () {
                                          try {
                                              return a.apply(this, arguments);
                                          } catch (b) {
                                              throw (p.onError && p.onError(b), b);
                                          }
                                      }
                                    : a;
                            },
                            setTimeout: function (a, b) {
                                return setTimeout(p.a.Wb(a), b);
                            },
                            $b: function (a) {
                                setTimeout(function () {
                                    throw (p.onError && p.onError(a), a);
                                }, 0);
                            },
                            p: function (a, b, c) {
                                var d = p.a.Wb(c);
                                if (((c = q && o[b]), p.options.useOnlyNativeEvents || c || !e))
                                    if (c || "function" != typeof a.addEventListener) {
                                        if ("undefined" == typeof a.attachEvent) throw Error("Browser doesn't support addEventListener or attachEvent");
                                        var f = function (b) {
                                                d.call(a, b);
                                            },
                                            g = "on" + b;
                                        a.attachEvent(g, f),
                                            p.a.F.oa(a, function () {
                                                a.detachEvent(g, f);
                                            });
                                    } else a.addEventListener(b, d, !1);
                                else e(a).on(b, d);
                            },
                            Da: function (a, d) {
                                if (!a || !a.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                                var f;
                                if (("input" === p.a.A(a) && a.type && "click" == d.toLowerCase() ? ((f = a.type), (f = "checkbox" == f || "radio" == f)) : (f = !1), p.options.useOnlyNativeEvents || !e || f))
                                    if ("function" == typeof c.createEvent) {
                                        if ("function" != typeof a.dispatchEvent) throw Error("The supplied element doesn't support dispatchEvent");
                                        (f = c.createEvent(n[d] || "HTMLEvents")), f.initEvent(d, !0, !0, b, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, a), a.dispatchEvent(f);
                                    } else if (f && a.click) a.click();
                                    else {
                                        if ("undefined" == typeof a.fireEvent) throw Error("Browser doesn't support triggering events");
                                        a.fireEvent("on" + d);
                                    }
                                else e(a).trigger(d);
                            },
                            c: function (a) {
                                return p.H(a) ? a() : a;
                            },
                            zb: function (a) {
                                return p.H(a) ? a.t() : a;
                            },
                            bb: function (a, b, c) {
                                var d;
                                b &&
                                    ("object" == typeof a.classList
                                        ? ((d = a.classList[c ? "add" : "remove"]),
                                          p.a.q(b.match(r), function (b) {
                                              d.call(a.classList, b);
                                          }))
                                        : "string" == typeof a.className.baseVal
                                        ? j(a.className, "baseVal", b, c)
                                        : j(a, "className", b, c));
                            },
                            Za: function (b, c) {
                                var d = p.a.c(c);
                                (null !== d && d !== a) || (d = "");
                                var e = p.f.firstChild(b);
                                !e || 3 != e.nodeType || p.f.nextSibling(e) ? p.f.da(b, [b.ownerDocument.createTextNode(d)]) : (e.data = d), p.a.Rc(b);
                            },
                            rc: function (a, b) {
                                if (((a.name = b), 7 >= q))
                                    try {
                                        a.mergeAttributes(c.createElement("<input name='" + a.name + "'/>"), !1);
                                    } catch (d) {}
                            },
                            Rc: function (a) {
                                9 <= q && ((a = 1 == a.nodeType ? a : a.parentNode), a.style && (a.style.zoom = a.style.zoom));
                            },
                            Nc: function (a) {
                                if (q) {
                                    var b = a.style.width;
                                    (a.style.width = 0), (a.style.width = b);
                                }
                            },
                            hd: function (a, b) {
                                (a = p.a.c(a)), (b = p.a.c(b));
                                for (var c = [], d = a; d <= b; d++) c.push(d);
                                return c;
                            },
                            V: function (a) {
                                for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);
                                return b;
                            },
                            Yb: function (a) {
                                return l ? Symbol(a) : a;
                            },
                            rd: 6 === q,
                            sd: 7 === q,
                            C: q,
                            ec: function (a, b) {
                                for (
                                    var c = p.a.V(a.getElementsByTagName("input")).concat(p.a.V(a.getElementsByTagName("textarea"))),
                                        d =
                                            "string" == typeof b
                                                ? function (a) {
                                                      return a.name === b;
                                                  }
                                                : function (a) {
                                                      return b.test(a.name);
                                                  },
                                        e = [],
                                        f = c.length - 1;
                                    0 <= f;
                                    f--
                                )
                                    d(c[f]) && e.push(c[f]);
                                return e;
                            },
                            ed: function (a) {
                                return "string" == typeof a && (a = p.a.$a(a)) ? (f && f.parse ? f.parse(a) : new Function("return " + a)()) : null;
                            },
                            Eb: function (a, b, c) {
                                if (!f || !f.stringify)
                                    throw Error(
                                        "Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"
                                    );
                                return f.stringify(p.a.c(a), b, c);
                            },
                            fd: function (a, b, d) {
                                d = d || {};
                                var e = d.params || {},
                                    f = d.includeFields || this.cc,
                                    h = a;
                                if ("object" == typeof a && "form" === p.a.A(a)) for (var h = a.action, i = f.length - 1; 0 <= i; i--) for (var j = p.a.ec(a, f[i]), k = j.length - 1; 0 <= k; k--) e[j[k].name] = j[k].value;
                                b = p.a.c(b);
                                var l = c.createElement("form");
                                (l.style.display = "none"), (l.action = h), (l.method = "post");
                                for (var m in b) (a = c.createElement("input")), (a.type = "hidden"), (a.name = m), (a.value = p.a.Eb(p.a.c(b[m]))), l.appendChild(a);
                                g(e, function (a, b) {
                                    var d = c.createElement("input");
                                    (d.type = "hidden"), (d.name = a), (d.value = b), l.appendChild(d);
                                }),
                                    c.body.appendChild(l),
                                    d.submitter ? d.submitter(l) : l.submit(),
                                    setTimeout(function () {
                                        l.parentNode.removeChild(l);
                                    }, 0);
                            },
                        };
                    })()),
                    p.b("utils", p.a),
                    p.b("utils.arrayForEach", p.a.q),
                    p.b("utils.arrayFirst", p.a.Sb),
                    p.b("utils.arrayFilter", p.a.Ka),
                    p.b("utils.arrayGetDistinctValues", p.a.Tb),
                    p.b("utils.arrayIndexOf", p.a.o),
                    p.b("utils.arrayMap", p.a.fb),
                    p.b("utils.arrayPushAll", p.a.ra),
                    p.b("utils.arrayRemoveItem", p.a.La),
                    p.b("utils.extend", p.a.extend),
                    p.b("utils.fieldsIncludedWithJsonPost", p.a.cc),
                    p.b("utils.getFormFields", p.a.ec),
                    p.b("utils.peekObservable", p.a.zb),
                    p.b("utils.postJson", p.a.fd),
                    p.b("utils.parseJson", p.a.ed),
                    p.b("utils.registerEventHandler", p.a.p),
                    p.b("utils.stringifyJson", p.a.Eb),
                    p.b("utils.range", p.a.hd),
                    p.b("utils.toggleDomNodeCssClass", p.a.bb),
                    p.b("utils.triggerEvent", p.a.Da),
                    p.b("utils.unwrapObservable", p.a.c),
                    p.b("utils.objectForEach", p.a.D),
                    p.b("utils.addOrRemoveItem", p.a.pa),
                    p.b("utils.setTextContent", p.a.Za),
                    p.b("unwrap", p.a.c),
                    Function.prototype.on ||
                        (Function.prototype.on = function (a) {
                            var b = this;
                            if (1 === arguments.length)
                                return function () {
                                    return b.apply(a, arguments);
                                };
                            var c = Array.prototype.slice.call(arguments, 1);
                            return function () {
                                var d = c.slice(0);
                                return d.push.apply(d, arguments), b.apply(a, d);
                            };
                        }),
                    (p.a.e = new (function () {
                        function b(b, f) {
                            var g = b[d];
                            if (!g || "null" === g || !e[g]) {
                                if (!f) return a;
                                (g = b[d] = "ko" + c++), (e[g] = {});
                            }
                            return e[g];
                        }
                        var c = 0,
                            d = "__ko__" + new Date().getTime(),
                            e = {};
                        return {
                            get: function (c, d) {
                                var e = b(c, !1);
                                return e === a ? a : e[d];
                            },
                            set: function (c, d, e) {
                                (e === a && b(c, !1) === a) || (b(c, !0)[d] = e);
                            },
                            clear: function (a) {
                                var b = a[d];
                                return !!b && (delete e[b], (a[d] = null), !0);
                            },
                            I: function () {
                                return c++ + d;
                            },
                        };
                    })()),
                    p.b("utils.domData", p.a.e),
                    p.b("utils.domData.clear", p.a.e.clear),
                    (p.a.F = new (function () {
                        function b(b, c) {
                            var e = p.a.e.get(b, d);
                            return e === a && c && ((e = []), p.a.e.set(b, d, e)), e;
                        }
                        function c(a) {
                            var d = b(a, !1);
                            if (d) for (var d = d.slice(0), e = 0; e < d.length; e++) d[e](a);
                            if ((p.a.e.clear(a), p.a.F.cleanExternalData(a), g[a.nodeType])) for (d = a.firstChild; (a = d); ) (d = a.nextSibling), 8 === a.nodeType && c(a);
                        }
                        var d = p.a.e.I(),
                            f = { 1: !0, 8: !0, 9: !0 },
                            g = { 1: !0, 9: !0 };
                        return {
                            oa: function (a, c) {
                                if ("function" != typeof c) throw Error("Callback must be a function");
                                b(a, !0).push(c);
                            },
                            pc: function (c, e) {
                                var f = b(c, !1);
                                f && (p.a.La(f, e), 0 == f.length && p.a.e.set(c, d, a));
                            },
                            $: function (a) {
                                if (f[a.nodeType] && (c(a), g[a.nodeType])) {
                                    var b = [];
                                    p.a.ra(b, a.getElementsByTagName("*"));
                                    for (var d = 0, e = b.length; d < e; d++) c(b[d]);
                                }
                                return a;
                            },
                            removeNode: function (a) {
                                p.$(a), a.parentNode && a.parentNode.removeChild(a);
                            },
                            cleanExternalData: function (a) {
                                e && "function" == typeof e.cleanData && e.cleanData([a]);
                            },
                        };
                    })()),
                    (p.$ = p.a.F.$),
                    (p.removeNode = p.a.F.removeNode),
                    p.b("cleanNode", p.$),
                    p.b("removeNode", p.removeNode),
                    p.b("utils.domNodeDisposal", p.a.F),
                    p.b("utils.domNodeDisposal.addDisposeCallback", p.a.F.oa),
                    p.b("utils.domNodeDisposal.removeDisposeCallback", p.a.F.pc),
                    (function () {
                        var d = [0, "", ""],
                            f = [1, "<table>", "</table>"],
                            g = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            h = [1, "<select multiple='multiple'>", "</select>"],
                            i = { thead: f, tbody: f, tfoot: f, tr: [2, "<table><tbody>", "</tbody></table>"], td: g, th: g, option: h, optgroup: h },
                            j = 8 >= p.a.C;
                        (p.a.ma = function (a, f) {
                            var g;
                            if (e) {
                                if (e.parseHTML) g = e.parseHTML(a, f) || [];
                                else if ((g = e.clean([a], f)) && g[0]) {
                                    for (var h = g[0]; h.parentNode && 11 !== h.parentNode.nodeType; ) h = h.parentNode;
                                    h.parentNode && h.parentNode.removeChild(h);
                                }
                            } else {
                                (g = f) || (g = c);
                                var k,
                                    h = g.parentWindow || g.defaultView || b,
                                    l = p.a.$a(a).toLowerCase(),
                                    m = g.createElement("div");
                                for (
                                    k = ((l = l.match(/^<([a-z]+)[ >]/)) && i[l[1]]) || d,
                                        l = k[0],
                                        k = "ignored<div>" + k[1] + a + k[2] + "</div>",
                                        "function" == typeof h.innerShiv ? m.appendChild(h.innerShiv(k)) : (j && g.appendChild(m), (m.innerHTML = k), j && m.parentNode.removeChild(m));
                                    l--;

                                )
                                    m = m.lastChild;
                                g = p.a.V(m.lastChild.childNodes);
                            }
                            return g;
                        }),
                            (p.a.Cb = function (b, c) {
                                if ((p.a.ob(b), (c = p.a.c(c)), null !== c && c !== a))
                                    if (("string" != typeof c && (c = c.toString()), e)) e(b).html(c);
                                    else for (var d = p.a.ma(c, b.ownerDocument), f = 0; f < d.length; f++) b.appendChild(d[f]);
                            });
                    })(),
                    p.b("utils.parseHtmlFragment", p.a.ma),
                    p.b("utils.setHtml", p.a.Cb),
                    (p.M = (function () {
                        function b(a, c) {
                            if (a)
                                if (8 == a.nodeType) {
                                    var d = p.M.lc(a.nodeValue);
                                    null != d && c.push({ Lc: a, cd: d });
                                } else if (1 == a.nodeType) for (var d = 0, e = a.childNodes, f = e.length; d < f; d++) b(e[d], c);
                        }
                        var c = {};
                        return {
                            wb: function (a) {
                                if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
                                var b = ((4294967296 * (1 + Math.random())) | 0).toString(16).substring(1) + ((4294967296 * (1 + Math.random())) | 0).toString(16).substring(1);
                                return (c[b] = a), "<!--[ko_memo:" + b + "]-->";
                            },
                            xc: function (b, d) {
                                var e = c[b];
                                if (e === a) throw Error("Couldn't find any memo with ID " + b + ". Perhaps it's already been unmemoized.");
                                try {
                                    return e.apply(null, d || []), !0;
                                } finally {
                                    delete c[b];
                                }
                            },
                            yc: function (a, c) {
                                var d = [];
                                b(a, d);
                                for (var e = 0, f = d.length; e < f; e++) {
                                    var g = d[e].Lc,
                                        h = [g];
                                    c && p.a.ra(h, c), p.M.xc(d[e].cd, h), (g.nodeValue = ""), g.parentNode && g.parentNode.removeChild(g);
                                }
                            },
                            lc: function (a) {
                                return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null;
                            },
                        };
                    })()),
                    p.b("memoization", p.M),
                    p.b("memoization.memoize", p.M.wb),
                    p.b("memoization.unmemoize", p.M.xc),
                    p.b("memoization.parseMemoText", p.M.lc),
                    p.b("memoization.unmemoizeDomNodeAndDescendants", p.M.yc),
                    (p.Y = (function () {
                        function a() {
                            if (f)
                                for (var a, b = f, c = 0; h < f; )
                                    if ((a = e[h++])) {
                                        if (h > b) {
                                            if (5e3 <= ++c) {
                                                (h = f), p.a.$b(Error("'Too much recursion' after processing " + c + " task groups."));
                                                break;
                                            }
                                            b = f;
                                        }
                                        try {
                                            a();
                                        } catch (d) {
                                            p.a.$b(d);
                                        }
                                    }
                        }
                        function d() {
                            a(), (h = f = e.length = 0);
                        }
                        var e = [],
                            f = 0,
                            g = 1,
                            h = 0;
                        return {
                            scheduler: b.MutationObserver
                                ? (function (a) {
                                      var b = c.createElement("div");
                                      return (
                                          new MutationObserver(a).observe(b, { attributes: !0 }),
                                          function () {
                                              b.classList.toggle("foo");
                                          }
                                      );
                                  })(d)
                                : c && "onreadystatechange" in c.createElement("script")
                                ? function (a) {
                                      var b = c.createElement("script");
                                      (b.onreadystatechange = function () {
                                          (b.onreadystatechange = null), c.documentElement.removeChild(b), (b = null), a();
                                      }),
                                          c.documentElement.appendChild(b);
                                  }
                                : function (a) {
                                      setTimeout(a, 0);
                                  },
                            Wa: function (a) {
                                return f || p.Y.scheduler(d), (e[f++] = a), g++;
                            },
                            cancel: function (a) {
                                (a -= g - f), a >= h && a < f && (e[a] = null);
                            },
                            resetForTesting: function () {
                                var a = f - h;
                                return (h = f = e.length = 0), a;
                            },
                            md: a,
                        };
                    })()),
                    p.b("tasks", p.Y),
                    p.b("tasks.schedule", p.Y.Wa),
                    p.b("tasks.runEarly", p.Y.md),
                    (p.ya = {
                        throttle: function (a, b) {
                            a.throttleEvaluation = b;
                            var c = null;
                            return p.B({
                                read: a,
                                write: function (d) {
                                    clearTimeout(c),
                                        (c = p.a.setTimeout(function () {
                                            a(d);
                                        }, b));
                                },
                            });
                        },
                        rateLimit: function (a, b) {
                            var c, d, e;
                            "number" == typeof b ? (c = b) : ((c = b.timeout), (d = b.method)),
                                (a.cb = !1),
                                (e = "notifyWhenChangesStop" == d ? k : j),
                                a.Ta(function (a) {
                                    return e(a, c);
                                });
                        },
                        deferred: function (b, c) {
                            if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                            b.cb ||
                                ((b.cb = !0),
                                b.Ta(function (c) {
                                    var d;
                                    return function () {
                                        p.Y.cancel(d), (d = p.Y.Wa(c)), b.notifySubscribers(a, "dirty");
                                    };
                                }));
                        },
                        notify: function (a, b) {
                            a.equalityComparer = "always" == b ? null : i;
                        },
                    });
                var q = { undefined: 1, boolean: 1, number: 1, string: 1 };
                p.b("extenders", p.ya),
                    (p.vc = function (a, b, c) {
                        (this.ia = a), (this.gb = b), (this.Kc = c), (this.R = !1), p.G(this, "dispose", this.k);
                    }),
                    (p.vc.prototype.k = function () {
                        (this.R = !0), this.Kc();
                    }),
                    (p.J = function () {
                        p.a.Ya(this, s), s.rb(this);
                    });
                var r = "change",
                    s = {
                        rb: function (a) {
                            (a.K = {}), (a.Nb = 1);
                        },
                        X: function (a, b, c) {
                            var d = this;
                            c = c || r;
                            var e = new p.vc(d, b ? a.on(b) : a, function () {
                                p.a.La(d.K[c], e), d.Ia && d.Ia(c);
                            });
                            return d.sa && d.sa(c), d.K[c] || (d.K[c] = []), d.K[c].push(e), e;
                        },
                        notifySubscribers: function (a, b) {
                            if (((b = b || r), b === r && this.zc(), this.Pa(b)))
                                try {
                                    p.l.Ub();
                                    for (var c, d = this.K[b].slice(0), e = 0; (c = d[e]); ++e) c.R || c.gb(a);
                                } finally {
                                    p.l.end();
                                }
                        },
                        Na: function () {
                            return this.Nb;
                        },
                        Uc: function (a) {
                            return this.Na() !== a;
                        },
                        zc: function () {
                            ++this.Nb;
                        },
                        Ta: function (a) {
                            var b,
                                c,
                                d,
                                e = this,
                                f = p.H(e);
                            e.Ha || ((e.Ha = e.notifySubscribers), (e.notifySubscribers = l));
                            var g = a(function () {
                                (e.Mb = !1), f && d === e && (d = e()), (b = !1), e.tb(c, d) && e.Ha((c = d));
                            });
                            (e.Lb = function (a) {
                                (e.Mb = b = !0), (d = a), g();
                            }),
                                (e.Kb = function (a) {
                                    b || ((c = a), e.Ha(a, "beforeChange"));
                                });
                        },
                        Pa: function (a) {
                            return this.K[a] && this.K[a].length;
                        },
                        Sc: function (a) {
                            if (a) return (this.K[a] && this.K[a].length) || 0;
                            var b = 0;
                            return (
                                p.a.D(this.K, function (a, c) {
                                    "dirty" !== a && (b += c.length);
                                }),
                                b
                            );
                        },
                        tb: function (a, b) {
                            return !this.equalityComparer || !this.equalityComparer(a, b);
                        },
                        extend: function (a) {
                            var b = this;
                            return (
                                a &&
                                    p.a.D(a, function (a, c) {
                                        var d = p.ya[a];
                                        "function" == typeof d && (b = d(b, c) || b);
                                    }),
                                b
                            );
                        },
                    };
                p.G(s, "subscribe", s.X),
                    p.G(s, "extend", s.extend),
                    p.G(s, "getSubscriptionsCount", s.Sc),
                    p.a.ka && p.a.Xa(s, Function.prototype),
                    (p.J.fn = s),
                    (p.hc = function (a) {
                        return null != a && "function" == typeof a.X && "function" == typeof a.notifySubscribers;
                    }),
                    p.b("subscribable", p.J),
                    p.b("isSubscribable", p.hc),
                    (p.va = p.l = (function () {
                        function a(a) {
                            d.push(c), (c = a);
                        }
                        function b() {
                            c = d.pop();
                        }
                        var c,
                            d = [],
                            e = 0;
                        return {
                            Ub: a,
                            end: b,
                            oc: function (a) {
                                if (c) {
                                    if (!p.hc(a)) throw Error("Only subscribable things can act as dependencies");
                                    c.gb.call(c.Gc, a, a.Cc || (a.Cc = ++e));
                                }
                            },
                            w: function (c, d, e) {
                                try {
                                    return a(), c.apply(d, e || []);
                                } finally {
                                    b();
                                }
                            },
                            Aa: function () {
                                if (c) return c.m.Aa();
                            },
                            Sa: function () {
                                if (c) return c.Sa;
                            },
                        };
                    })()),
                    p.b("computedContext", p.va),
                    p.b("computedContext.getDependenciesCount", p.va.Aa),
                    p.b("computedContext.isInitial", p.va.Sa),
                    p.b("ignoreDependencies", (p.qd = p.l.w));
                var t = p.a.Yb("_latestValue");
                p.N = function (a) {
                    function b() {
                        return 0 < arguments.length ? (b.tb(b[t], arguments[0]) && (b.ga(), (b[t] = arguments[0]), b.fa()), this) : (p.l.oc(b), b[t]);
                    }
                    return (b[t] = a), p.a.ka || p.a.extend(b, p.J.fn), p.J.fn.rb(b), p.a.Ya(b, u), p.options.deferUpdates && p.ya.deferred(b, !0), b;
                };
                var u = {
                    equalityComparer: i,
                    t: function () {
                        return this[t];
                    },
                    fa: function () {
                        this.notifySubscribers(this[t]);
                    },
                    ga: function () {
                        this.notifySubscribers(this[t], "beforeChange");
                    },
                };
                p.a.ka && p.a.Xa(u, p.J.fn);
                var v = (p.N.gd = "__ko_proto__");
                (u[v] = p.N),
                    (p.Oa = function (b, c) {
                        return null !== b && b !== a && b[v] !== a && (b[v] === c || p.Oa(b[v], c));
                    }),
                    (p.H = function (a) {
                        return p.Oa(a, p.N);
                    }),
                    (p.Ba = function (a) {
                        return !!(("function" == typeof a && a[v] === p.N) || ("function" == typeof a && a[v] === p.B && a.Vc));
                    }),
                    p.b("observable", p.N),
                    p.b("isObservable", p.H),
                    p.b("isWriteableObservable", p.Ba),
                    p.b("isWritableObservable", p.Ba),
                    p.b("observable.fn", u),
                    p.G(u, "peek", u.t),
                    p.G(u, "valueHasMutated", u.fa),
                    p.G(u, "valueWillMutate", u.ga),
                    (p.la = function (a) {
                        if (((a = a || []), "object" != typeof a || !("length" in a))) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                        return (a = p.N(a)), p.a.Ya(a, p.la.fn), a.extend({ trackArrayChanges: !0 });
                    }),
                    (p.la.fn = {
                        remove: function (a) {
                            for (
                                var b = this.t(),
                                    c = [],
                                    d =
                                        "function" != typeof a || p.H(a)
                                            ? function (b) {
                                                  return b === a;
                                              }
                                            : a,
                                    e = 0;
                                e < b.length;
                                e++
                            ) {
                                var f = b[e];
                                d(f) && (0 === c.length && this.ga(), c.push(f), b.splice(e, 1), e--);
                            }
                            return c.length && this.fa(), c;
                        },
                        removeAll: function (b) {
                            if (b === a) {
                                var c = this.t(),
                                    d = c.slice(0);
                                return this.ga(), c.splice(0, c.length), this.fa(), d;
                            }
                            return b
                                ? this.remove(function (a) {
                                      return 0 <= p.a.o(b, a);
                                  })
                                : [];
                        },
                        destroy: function (a) {
                            var b = this.t(),
                                c =
                                    "function" != typeof a || p.H(a)
                                        ? function (b) {
                                              return b === a;
                                          }
                                        : a;
                            this.ga();
                            for (var d = b.length - 1; 0 <= d; d--) c(b[d]) && (b[d]._destroy = !0);
                            this.fa();
                        },
                        destroyAll: function (b) {
                            return b === a
                                ? this.destroy(function () {
                                      return !0;
                                  })
                                : b
                                ? this.destroy(function (a) {
                                      return 0 <= p.a.o(b, a);
                                  })
                                : [];
                        },
                        indexOf: function (a) {
                            var b = this();
                            return p.a.o(b, a);
                        },
                        replace: function (a, b) {
                            var c = this.indexOf(a);
                            0 <= c && (this.ga(), (this.t()[c] = b), this.fa());
                        },
                    }),
                    p.a.ka && p.a.Xa(p.la.fn, p.N.fn),
                    p.a.q("pop push reverse shift sort splice unshift".split(" "), function (a) {
                        p.la.fn[a] = function () {
                            var b = this.t();
                            this.ga(), this.Vb(b, a, arguments);
                            var c = b[a].apply(b, arguments);
                            return this.fa(), c === b ? this : c;
                        };
                    }),
                    p.a.q(["slice"], function (a) {
                        p.la.fn[a] = function () {
                            var b = this();
                            return b[a].apply(b, arguments);
                        };
                    }),
                    p.b("observableArray", p.la),
                    (p.ya.trackArrayChanges = function (a, b) {
                        function c() {
                            if (!e) {
                                e = !0;
                                var b = a.notifySubscribers;
                                a.notifySubscribers = function (a, c) {
                                    return (c && c !== r) || ++g, b.apply(this, arguments);
                                };
                                var c = [].concat(a.t() || []);
                                (f = null),
                                    (d = a.X(function (b) {
                                        if (((b = [].concat(b || [])), a.Pa("arrayChange"))) {
                                            var d;
                                            (!f || 1 < g) && (f = p.a.ib(c, b, a.hb)), (d = f);
                                        }
                                        (c = b), (f = null), (g = 0), d && d.length && a.notifySubscribers(d, "arrayChange");
                                    }));
                            }
                        }
                        if (((a.hb = {}), b && "object" == typeof b && p.a.extend(a.hb, b), (a.hb.sparse = !0), !a.Vb)) {
                            var d,
                                e = !1,
                                f = null,
                                g = 0,
                                h = a.sa,
                                i = a.Ia;
                            (a.sa = function (b) {
                                h && h.call(a, b), "arrayChange" === b && c();
                            }),
                                (a.Ia = function (b) {
                                    i && i.call(a, b), "arrayChange" !== b || a.Pa("arrayChange") || (d.k(), (e = !1));
                                }),
                                (a.Vb = function (a, b, c) {
                                    function d(a, b, c) {
                                        return (h[h.length] = { status: a, value: b, index: c });
                                    }
                                    if (e && !g) {
                                        var h = [],
                                            i = a.length,
                                            j = c.length,
                                            k = 0;
                                        switch (b) {
                                            case "push":
                                                k = i;
                                            case "unshift":
                                                for (b = 0; b < j; b++) d("added", c[b], k + b);
                                                break;
                                            case "pop":
                                                k = i - 1;
                                            case "shift":
                                                i && d("deleted", a[k], k);
                                                break;
                                            case "splice":
                                                b = Math.min(Math.max(0, 0 > c[0] ? i + c[0] : c[0]), i);
                                                for (var i = 1 === j ? i : Math.min(b + (c[1] || 0), i), j = b + j - 2, k = Math.max(i, j), l = [], m = [], n = 2; b < k; ++b, ++n)
                                                    b < i && m.push(d("deleted", a[b], b)), b < j && l.push(d("added", c[n], b));
                                                p.a.dc(m, l);
                                                break;
                                            default:
                                                return;
                                        }
                                        f = h;
                                    }
                                });
                        }
                    });
                var w = p.a.Yb("_state");
                p.m = p.B = function (b, c, d) {
                    function e() {
                        if (0 < arguments.length) {
                            if ("function" != typeof f) throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                            return f.apply(g.pb, arguments), this;
                        }
                        return p.l.oc(e), (g.S || (g.s && e.Qa())) && e.aa(), g.T;
                    }
                    if (("object" == typeof b ? (d = b) : ((d = d || {}), b && (d.read = b)), "function" != typeof d.read)) throw Error("Pass a function that returns the value of the ko.computed");
                    var f = d.write,
                        g = { T: a, S: !0, Ra: !1, Fb: !1, R: !1, Va: !1, s: !1, jd: d.read, pb: c || d.owner, i: d.disposeWhenNodeIsRemoved || d.i || null, wa: d.disposeWhen || d.wa, mb: null, r: {}, L: 0, bc: null };
                    return (
                        (e[w] = g),
                        (e.Vc = "function" == typeof f),
                        p.a.ka || p.a.extend(e, p.J.fn),
                        p.J.fn.rb(e),
                        p.a.Ya(e, x),
                        d.pure ? ((g.Va = !0), (g.s = !0), p.a.extend(e, y)) : d.deferEvaluation && p.a.extend(e, z),
                        p.options.deferUpdates && p.ya.deferred(e, !0),
                        g.i && ((g.Fb = !0), g.i.nodeType || (g.i = null)),
                        g.s || d.deferEvaluation || e.aa(),
                        g.i &&
                            e.ba() &&
                            p.a.F.oa(
                                g.i,
                                (g.mb = function () {
                                    e.k();
                                })
                            ),
                        e
                    );
                };
                var x = {
                        equalityComparer: i,
                        Aa: function () {
                            return this[w].L;
                        },
                        Pb: function (a, b, c) {
                            if (this[w].Va && b === this) throw Error("A 'pure' computed must not be called recursively");
                            (this[w].r[a] = c), (c.Ga = this[w].L++), (c.na = b.Na());
                        },
                        Qa: function () {
                            var a,
                                b,
                                c = this[w].r;
                            for (a in c) if (c.hasOwnProperty(a) && ((b = c[a]), b.ia.Uc(b.na))) return !0;
                        },
                        bd: function () {
                            this.Fa && !this[w].Ra && this.Fa();
                        },
                        ba: function () {
                            return this[w].S || 0 < this[w].L;
                        },
                        ld: function () {
                            this.Mb || this.ac();
                        },
                        uc: function (a) {
                            if (a.cb && !this[w].i) {
                                var b = a.X(this.bd, this, "dirty"),
                                    c = a.X(this.ld, this);
                                return {
                                    ia: a,
                                    k: function () {
                                        b.k(), c.k();
                                    },
                                };
                            }
                            return a.X(this.ac, this);
                        },
                        ac: function () {
                            var a = this,
                                b = a.throttleEvaluation;
                            b && 0 <= b
                                ? (clearTimeout(this[w].bc),
                                  (this[w].bc = p.a.setTimeout(function () {
                                      a.aa(!0);
                                  }, b)))
                                : a.Fa
                                ? a.Fa()
                                : a.aa(!0);
                        },
                        aa: function (a) {
                            var b = this[w],
                                c = b.wa;
                            if (!b.Ra && !b.R) {
                                if ((b.i && !p.a.nb(b.i)) || (c && c())) {
                                    if (!b.Fb) return void this.k();
                                } else b.Fb = !1;
                                b.Ra = !0;
                                try {
                                    this.Qc(a);
                                } finally {
                                    b.Ra = !1;
                                }
                                b.L || this.k();
                            }
                        },
                        Qc: function (b) {
                            var c = this[w],
                                d = c.Va ? a : !c.L,
                                e = { Hc: this, Ma: c.r, lb: c.L };
                            p.l.Ub({ Gc: e, gb: n, m: this, Sa: d }),
                                (c.r = {}),
                                (c.L = 0),
                                (e = this.Pc(c, e)),
                                this.tb(c.T, e) && (c.s || this.notifySubscribers(c.T, "beforeChange"), (c.T = e), c.s ? this.zc() : b && this.notifySubscribers(c.T)),
                                d && this.notifySubscribers(c.T, "awake");
                        },
                        Pc: function (a, b) {
                            try {
                                var c = a.jd;
                                return a.pb ? c.call(a.pb) : c();
                            } finally {
                                p.l.end(), b.lb && !a.s && p.a.D(b.Ma, m), (a.S = !1);
                            }
                        },
                        t: function () {
                            var a = this[w];
                            return ((a.S && !a.L) || (a.s && this.Qa())) && this.aa(), a.T;
                        },
                        Ta: function (a) {
                            p.J.fn.Ta.call(this, a),
                                (this.Fa = function () {
                                    this.Kb(this[w].T), (this[w].S = !0), this.Lb(this);
                                });
                        },
                        k: function () {
                            var a = this[w];
                            !a.s &&
                                a.r &&
                                p.a.D(a.r, function (a, b) {
                                    b.k && b.k();
                                }),
                                a.i && a.mb && p.a.F.pc(a.i, a.mb),
                                (a.r = null),
                                (a.L = 0),
                                (a.R = !0),
                                (a.S = !1),
                                (a.s = !1),
                                (a.i = null);
                        },
                    },
                    y = {
                        sa: function (a) {
                            var b = this,
                                c = b[w];
                            if (!c.R && c.s && "change" == a) {
                                if (((c.s = !1), c.S || b.Qa())) (c.r = null), (c.L = 0), (c.S = !0), b.aa();
                                else {
                                    var d = [];
                                    p.a.D(c.r, function (a, b) {
                                        d[b.Ga] = a;
                                    }),
                                        p.a.q(d, function (a, d) {
                                            var e = c.r[a],
                                                f = b.uc(e.ia);
                                            (f.Ga = d), (f.na = e.na), (c.r[a] = f);
                                        });
                                }
                                c.R || b.notifySubscribers(c.T, "awake");
                            }
                        },
                        Ia: function (b) {
                            var c = this[w];
                            c.R ||
                                "change" != b ||
                                this.Pa("change") ||
                                (p.a.D(c.r, function (a, b) {
                                    b.k && ((c.r[a] = { ia: b.ia, Ga: b.Ga, na: b.na }), b.k());
                                }),
                                (c.s = !0),
                                this.notifySubscribers(a, "asleep"));
                        },
                        Na: function () {
                            var a = this[w];
                            return a.s && (a.S || this.Qa()) && this.aa(), p.J.fn.Na.call(this);
                        },
                    },
                    z = {
                        sa: function (a) {
                            ("change" != a && "beforeChange" != a) || this.t();
                        },
                    };
                p.a.ka && p.a.Xa(x, p.J.fn);
                var A = p.N.gd;
                (p.m[A] = p.N),
                    (x[A] = p.m),
                    (p.Xc = function (a) {
                        return p.Oa(a, p.m);
                    }),
                    (p.Yc = function (a) {
                        return p.Oa(a, p.m) && a[w] && a[w].Va;
                    }),
                    p.b("computed", p.m),
                    p.b("dependentObservable", p.m),
                    p.b("isComputed", p.Xc),
                    p.b("isPureComputed", p.Yc),
                    p.b("computed.fn", x),
                    p.G(x, "peek", x.t),
                    p.G(x, "dispose", x.k),
                    p.G(x, "isActive", x.ba),
                    p.G(x, "getDependenciesCount", x.Aa),
                    (p.nc = function (a, b) {
                        return "function" == typeof a ? p.m(a, b, { pure: !0 }) : ((a = p.a.extend({}, a)), (a.pure = !0), p.m(a, b));
                    }),
                    p.b("pureComputed", p.nc),
                    (function () {
                        function b(e, f, g) {
                            if (((g = g || new d()), (e = f(e)), "object" != typeof e || null === e || e === a || e instanceof RegExp || e instanceof Date || e instanceof String || e instanceof Number || e instanceof Boolean)) return e;
                            var h = e instanceof Array ? [] : {};
                            return (
                                g.save(e, h),
                                c(e, function (c) {
                                    var d = f(e[c]);
                                    switch (typeof d) {
                                        case "boolean":
                                        case "number":
                                        case "string":
                                        case "function":
                                            h[c] = d;
                                            break;
                                        case "object":
                                        case "undefined":
                                            var i = g.get(d);
                                            h[c] = i !== a ? i : b(d, f, g);
                                    }
                                }),
                                h
                            );
                        }
                        function c(a, b) {
                            if (a instanceof Array) {
                                for (var c = 0; c < a.length; c++) b(c);
                                "function" == typeof a.toJSON && b("toJSON");
                            } else for (c in a) b(c);
                        }
                        function d() {
                            (this.keys = []), (this.Ib = []);
                        }
                        (p.wc = function (a) {
                            if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                            return b(a, function (a) {
                                for (var b = 0; p.H(a) && 10 > b; b++) a = a();
                                return a;
                            });
                        }),
                            (p.toJSON = function (a, b, c) {
                                return (a = p.wc(a)), p.a.Eb(a, b, c);
                            }),
                            (d.prototype = {
                                save: function (a, b) {
                                    var c = p.a.o(this.keys, a);
                                    0 <= c ? (this.Ib[c] = b) : (this.keys.push(a), this.Ib.push(b));
                                },
                                get: function (b) {
                                    return (b = p.a.o(this.keys, b)), 0 <= b ? this.Ib[b] : a;
                                },
                            });
                    })(),
                    p.b("toJS", p.wc),
                    p.b("toJSON", p.toJSON),
                    (function () {
                        p.j = {
                            u: function (b) {
                                switch (p.a.A(b)) {
                                    case "option":
                                        return !0 === b.__ko__hasDomDataOptionValue__ ? p.a.e.get(b, p.d.options.xb) : 7 >= p.a.C ? (b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text) : b.value;
                                    case "select":
                                        return 0 <= b.selectedIndex ? p.j.u(b.options[b.selectedIndex]) : a;
                                    default:
                                        return b.value;
                                }
                            },
                            ha: function (b, c, d) {
                                switch (p.a.A(b)) {
                                    case "option":
                                        switch (typeof c) {
                                            case "string":
                                                p.a.e.set(b, p.d.options.xb, a), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, (b.value = c);
                                                break;
                                            default:
                                                p.a.e.set(b, p.d.options.xb, c), (b.__ko__hasDomDataOptionValue__ = !0), (b.value = "number" == typeof c ? c : "");
                                        }
                                        break;
                                    case "select":
                                        ("" !== c && null !== c) || (c = a);
                                        for (var e, f = -1, g = 0, h = b.options.length; g < h; ++g)
                                            if (((e = p.j.u(b.options[g])), e == c || ("" == e && c === a))) {
                                                f = g;
                                                break;
                                            }
                                        (d || 0 <= f || (c === a && 1 < b.size)) && (b.selectedIndex = f);
                                        break;
                                    default:
                                        (null !== c && c !== a) || (c = ""), (b.value = c);
                                }
                            },
                        };
                    })(),
                    p.b("selectExtensions", p.j),
                    p.b("selectExtensions.readValue", p.j.u),
                    p.b("selectExtensions.writeValue", p.j.ha),
                    (p.h = (function () {
                        function a(a) {
                            (a = p.a.$a(a)), 123 === a.charCodeAt(0) && (a = a.slice(1, -1));
                            var b,
                                c = [],
                                g = a.match(d),
                                h = [],
                                i = 0;
                            if (g) {
                                g.push(",");
                                for (var j, k = 0; (j = g[k]); ++k) {
                                    var l = j.charCodeAt(0);
                                    if (44 === l) {
                                        if (0 >= i) {
                                            c.push(b && h.length ? { key: b, value: h.join("") } : { unknown: b || h.join("") }), (b = i = 0), (h = []);
                                            continue;
                                        }
                                    } else if (58 === l) {
                                        if (!i && !b && 1 === h.length) {
                                            b = h.pop();
                                            continue;
                                        }
                                    } else
                                        47 === l && k && 1 < j.length
                                            ? (l = g[k - 1].match(e)) && !f[l[0]] && ((a = a.substr(a.indexOf(j) + 1)), (g = a.match(d)), g.push(","), (k = -1), (j = "/"))
                                            : 40 === l || 123 === l || 91 === l
                                            ? ++i
                                            : 41 === l || 125 === l || 93 === l
                                            ? --i
                                            : b || h.length || (34 !== l && 39 !== l) || (j = j.slice(1, -1));
                                    h.push(j);
                                }
                            }
                            return c;
                        }
                        var b = ["true", "false", "null", "undefined"],
                            c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                            d = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                            e = /[\])"'A-Za-z0-9_$]+$/,
                            f = { in: 1, return: 1, typeof: 1 },
                            g = {};
                        return {
                            ta: [],
                            ea: g,
                            yb: a,
                            Ua: function (d, e) {
                                function f(a, d) {
                                    var e;
                                    if (!k) {
                                        var l = p.getBindingHandler(a);
                                        if (l && l.preprocess && !(d = l.preprocess(d, a, f))) return;
                                        (l = g[a]) && ((e = d), 0 <= p.a.o(b, e) ? (e = !1) : ((l = e.match(c)), (e = null !== l && (l[1] ? "Object(" + l[1] + ")" + l[2] : e))), (l = e)),
                                            l && i.push("'" + a + "':function(_z){" + e + "=_z}");
                                    }
                                    j && (d = "function(){return " + d + " }"), h.push("'" + a + "':" + d);
                                }
                                e = e || {};
                                var h = [],
                                    i = [],
                                    j = e.valueAccessors,
                                    k = e.oningParams,
                                    l = "string" == typeof d ? a(d) : d;
                                return (
                                    p.a.q(l, function (a) {
                                        f(a.key || a.unknown, a.value);
                                    }),
                                    i.length && f("_ko_property_writers", "{" + i.join(",") + " }"),
                                    h.join(",")
                                );
                            },
                            ad: function (a, b) {
                                for (var c = 0; c < a.length; c++) if (a[c].key == b) return !0;
                                return !1;
                            },
                            Ea: function (a, b, c, d, e) {
                                a && p.H(a) ? !p.Ba(a) || (e && a.t() === d) || a(d) : (a = b.get("_ko_property_writers")) && a[c] && a[c](d);
                            },
                        };
                    })()),
                    p.b("expressionRewriting", p.h),
                    p.b("expressionRewriting.oningRewriteValidators", p.h.ta),
                    p.b("expressionRewriting.parseObjectLiteral", p.h.yb),
                    p.b("expressionRewriting.preProcessBindings", p.h.Ua),
                    p.b("expressionRewriting._twoWayBindings", p.h.ea),
                    p.b("jsonExpressionRewriting", p.h),
                    p.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", p.h.Ua),
                    (function () {
                        function a(a) {
                            return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue);
                        }
                        function b(a) {
                            return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue);
                        }
                        function d(c, d) {
                            for (var e = c, f = 1, g = []; (e = e.nextSibling); ) {
                                if (b(e) && (f--, 0 === f)) return g;
                                g.push(e), a(e) && f++;
                            }
                            if (!d) throw Error("Cannot find closing comment tag to match: " + c.nodeValue);
                            return null;
                        }
                        function e(a, b) {
                            var c = d(a, b);
                            return c ? (0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling) : null;
                        }
                        var f = c && "<!--test-->" === c.createComment("test").text,
                            g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                            h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
                            i = { ul: !0, ol: !0 };
                        p.f = {
                            Z: {},
                            childNodes: function (b) {
                                return a(b) ? d(b) : b.childNodes;
                            },
                            xa: function (b) {
                                if (a(b)) {
                                    b = p.f.childNodes(b);
                                    for (var c = 0, d = b.length; c < d; c++) p.removeNode(b[c]);
                                } else p.a.ob(b);
                            },
                            da: function (b, c) {
                                if (a(b)) {
                                    p.f.xa(b);
                                    for (var d = b.nextSibling, e = 0, f = c.length; e < f; e++) d.parentNode.insertBefore(c[e], d);
                                } else p.a.da(b, c);
                            },
                            mc: function (b, c) {
                                a(b) ? b.parentNode.insertBefore(c, b.nextSibling) : b.firstChild ? b.insertBefore(c, b.firstChild) : b.appendChild(c);
                            },
                            gc: function (b, c, d) {
                                d ? (a(b) ? b.parentNode.insertBefore(c, d.nextSibling) : d.nextSibling ? b.insertBefore(c, d.nextSibling) : b.appendChild(c)) : p.f.mc(b, c);
                            },
                            firstChild: function (c) {
                                return a(c) ? (!c.nextSibling || b(c.nextSibling) ? null : c.nextSibling) : c.firstChild;
                            },
                            nextSibling: function (c) {
                                return a(c) && (c = e(c)), c.nextSibling && b(c.nextSibling) ? null : c.nextSibling;
                            },
                            Tc: a,
                            pd: function (a) {
                                return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null;
                            },
                            kc: function (c) {
                                if (i[p.a.A(c)]) {
                                    var d = c.firstChild;
                                    if (d)
                                        do
                                            if (1 === d.nodeType) {
                                                var f;
                                                f = d.firstChild;
                                                var g = null;
                                                if (f)
                                                    do
                                                        if (g) g.push(f);
                                                        else if (a(f)) {
                                                            var h = e(f, !0);
                                                            h ? (f = h) : (g = [f]);
                                                        } else b(f) && (g = [f]);
                                                    while ((f = f.nextSibling));
                                                if ((f = g)) for (g = d.nextSibling, h = 0; h < f.length; h++) g ? c.insertBefore(f[h], g) : c.appendChild(f[h]);
                                            }
                                        while ((d = d.nextSibling));
                                }
                            },
                        };
                    })(),
                    p.b("virtualElements", p.f),
                    p.b("virtualElements.allowedBindings", p.f.Z),
                    p.b("virtualElements.emptyNode", p.f.xa),
                    p.b("virtualElements.insertAfter", p.f.gc),
                    p.b("virtualElements.prepend", p.f.mc),
                    p.b("virtualElements.setDomNodeChildren", p.f.da),
                    (function () {
                        (p.Q = function () {
                            this.Fc = {};
                        }),
                            p.a.extend(p.Q.prototype, {
                                nodeHasBindings: function (a) {
                                    switch (a.nodeType) {
                                        case 1:
                                            return null != a.getAttribute("data-bind") || p.g.getComponentNameForNode(a);
                                        case 8:
                                            return p.f.Tc(a);
                                        default:
                                            return !1;
                                    }
                                },
                                getBindings: function (a, b) {
                                    var c = this.getBindingsString(a, b),
                                        c = c ? this.parseBindingsString(c, b, a) : null;
                                    return p.g.Ob(c, a, b, !1);
                                },
                                getBindingAccessors: function (a, b) {
                                    var c = this.getBindingsString(a, b),
                                        c = c ? this.parseBindingsString(c, b, a, { valueAccessors: !0 }) : null;
                                    return p.g.Ob(c, a, b, !0);
                                },
                                getBindingsString: function (a) {
                                    switch (a.nodeType) {
                                        case 1:
                                            return a.getAttribute("data-bind");
                                        case 8:
                                            return p.f.pd(a);
                                        default:
                                            return null;
                                    }
                                },
                                parseBindingsString: function (a, b, c, d) {
                                    try {
                                        var e,
                                            f = this.Fc,
                                            g = a + ((d && d.valueAccessors) || "");
                                        if (!(e = f[g])) {
                                            var h,
                                                i = "with($context){with($data||{}){return{" + p.h.Ua(a, d) + "}}}";
                                            (h = new Function("$context", "$element", i)), (e = f[g] = h);
                                        }
                                        return e(b, c);
                                    } catch (j) {
                                        throw ((j.message = "Unable to parse bindings.\nBindings value: " + a + "\nMessage: " + j.message), j);
                                    }
                                },
                            }),
                            (p.Q.instance = new p.Q());
                    })(),
                    p.b("bindingProvider", p.Q),
                    (function () {
                        function c(a) {
                            return function () {
                                return a;
                            };
                        }
                        function d(a) {
                            return a();
                        }
                        function f(a) {
                            return p.a.Ca(p.l.w(a), function (b, c) {
                                return function () {
                                    return a()[c];
                                };
                            });
                        }
                        function g(a, b, d) {
                            return "function" == typeof a ? f(a.on(null, b, d)) : p.a.Ca(a, c);
                        }
                        function h(a, b) {
                            return f(this.getBindings.on(this, a, b));
                        }
                        function i(a, b, c) {
                            var d,
                                e = p.f.firstChild(b),
                                f = p.Q.instance,
                                g = f.preprocessNode;
                            if (g) {
                                for (; (d = e); ) (e = p.f.nextSibling(d)), g.call(f, d);
                                e = p.f.firstChild(b);
                            }
                            for (; (d = e); ) (e = p.f.nextSibling(d)), j(a, d, c);
                        }
                        function j(a, b, c) {
                            var d = !0,
                                e = 1 === b.nodeType;
                            e && p.f.kc(b), ((e && c) || p.Q.instance.nodeHasBindings(b)) && (d = l(b, null, a, c).shouldBindDescendants), d && !n[p.a.A(b)] && i(a, b, !e);
                        }
                        function k(a) {
                            var b = [],
                                c = {},
                                d = [];
                            return (
                                p.a.D(a, function e(f) {
                                    if (!c[f]) {
                                        var g = p.getBindingHandler(f);
                                        g &&
                                            (g.after &&
                                                (d.push(f),
                                                p.a.q(g.after, function (b) {
                                                    if (a[b]) {
                                                        if (-1 !== p.a.o(d, b)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + d.join(", "));
                                                        e(b);
                                                    }
                                                }),
                                                d.length--),
                                            b.push({ key: f, fc: g })),
                                            (c[f] = !0);
                                    }
                                }),
                                b
                            );
                        }
                        function l(b, c, e, f) {
                            var g = p.a.e.get(b, o);
                            if (!c) {
                                if (g) throw Error("You cannot apply bindings multiple times to the same element.");
                                p.a.e.set(b, o, !0);
                            }
                            !g && f && p.tc(b, e);
                            var i;
                            if (c && "function" != typeof c) i = c;
                            else {
                                var j = p.Q.instance,
                                    l = j.getBindingAccessors || h,
                                    m = p.B(
                                        function () {
                                            return (i = c ? c(e, b) : l.call(j, b, e)) && e.P && e.P(), i;
                                        },
                                        null,
                                        { i: b }
                                    );
                                (i && m.ba()) || (m = null);
                            }
                            var n;
                            if (i) {
                                var q = m
                                        ? function (a) {
                                              return function () {
                                                  return d(m()[a]);
                                              };
                                          }
                                        : function (a) {
                                              return i[a];
                                          },
                                    r = function () {
                                        return p.a.Ca(m ? m() : i, d);
                                    };
                                (r.get = function (a) {
                                    return i[a] && d(q(a));
                                }),
                                    (r.has = function (a) {
                                        return a in i;
                                    }),
                                    (f = k(i)),
                                    p.a.q(f, function (c) {
                                        var d = c.fc.init,
                                            f = c.fc.update,
                                            g = c.key;
                                        if (8 === b.nodeType && !p.f.Z[g]) throw Error("The binding '" + g + "' cannot be used with virtual elements");
                                        try {
                                            "function" == typeof d &&
                                                p.l.w(function () {
                                                    var c = d(b, q(g), r, e.$data, e);
                                                    if (c && c.controlsDescendantBindings) {
                                                        if (n !== a)
                                                            throw Error(
                                                                "Multiple bindings (" + n + " and " + g + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element."
                                                            );
                                                        n = g;
                                                    }
                                                }),
                                                "function" == typeof f &&
                                                    p.B(
                                                        function () {
                                                            f(b, q(g), r, e.$data, e);
                                                        },
                                                        null,
                                                        { i: b }
                                                    );
                                        } catch (h) {
                                            throw ((h.message = 'Unable to process binding "' + g + ": " + i[g] + '"\nMessage: ' + h.message), h);
                                        }
                                    });
                            }
                            return { shouldBindDescendants: n === a };
                        }
                        function m(a) {
                            return a && a instanceof p.U ? a : new p.U(a);
                        }
                        p.d = {};
                        var n = { script: !0, textarea: !0, template: !0 };
                        (p.getBindingHandler = function (a) {
                            return p.d[a];
                        }),
                            (p.U = function (b, c, d, e) {
                                var f,
                                    g = this,
                                    h = "function" == typeof b && !p.H(b),
                                    i = p.B(
                                        function () {
                                            var a = h ? b() : b,
                                                f = p.a.c(a);
                                            return c ? (c.P && c.P(), p.a.extend(g, c), i && (g.P = i)) : ((g.$parents = []), (g.$root = f), (g.ko = p)), (g.$rawData = a), (g.$data = f), d && (g[d] = f), e && e(g, c, f), g.$data;
                                        },
                                        null,
                                        {
                                            wa: function () {
                                                return f && !p.a.Qb(f);
                                            },
                                            i: !0,
                                        }
                                    );
                                i.ba() &&
                                    ((g.P = i),
                                    (i.equalityComparer = null),
                                    (f = []),
                                    (i.Ac = function (b) {
                                        f.push(b),
                                            p.a.F.oa(b, function (b) {
                                                p.a.La(f, b), f.length || (i.k(), (g.P = i = a));
                                            });
                                    }));
                            }),
                            (p.U.prototype.createChildContext = function (a, b, c) {
                                return new p.U(a, this, b, function (a, b) {
                                    (a.$parentContext = b), (a.$parent = b.$data), (a.$parents = (b.$parents || []).slice(0)), a.$parents.unshift(a.$parent), c && c(a);
                                });
                            }),
                            (p.U.prototype.extend = function (a) {
                                return new p.U(this.P || this.$data, this, null, function (b, c) {
                                    (b.$rawData = c.$rawData), p.a.extend(b, "function" == typeof a ? a() : a);
                                });
                            });
                        var o = p.a.e.I(),
                            q = p.a.e.I();
                        (p.tc = function (a, b) {
                            return 2 != arguments.length ? p.a.e.get(a, q) : (p.a.e.set(a, q, b), void (b.P && b.P.Ac(a)));
                        }),
                            (p.Ja = function (a, b, c) {
                                return 1 === a.nodeType && p.f.kc(a), l(a, b, m(c), !0);
                            }),
                            (p.Dc = function (a, b, c) {
                                return (c = m(c)), p.Ja(a, g(b, c, a), c);
                            }),
                            (p.eb = function (a, b) {
                                (1 !== b.nodeType && 8 !== b.nodeType) || i(m(a), b, !0);
                            }),
                            (p.Rb = function (a, c) {
                                if ((!e && b.jQuery && (e = b.jQuery), c && 1 !== c.nodeType && 8 !== c.nodeType)) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                                (c = c || b.document.body), j(m(a), c, !0);
                            }),
                            (p.kb = function (b) {
                                switch (b.nodeType) {
                                    case 1:
                                    case 8:
                                        var c = p.tc(b);
                                        if (c) return c;
                                        if (b.parentNode) return p.kb(b.parentNode);
                                }
                                return a;
                            }),
                            (p.Jc = function (b) {
                                return (b = p.kb(b)) ? b.$data : a;
                            }),
                            p.b("bindingHandlers", p.d),
                            p.b("applyBindings", p.Rb),
                            p.b("applyBindingsToDescendants", p.eb),
                            p.b("applyBindingAccessorsToNode", p.Ja),
                            p.b("applyBindingsToNode", p.Dc),
                            p.b("contextFor", p.kb),
                            p.b("dataFor", p.Jc);
                    })(),
                    (function (a) {
                        function b(b, d) {
                            var g,
                                h = e.hasOwnProperty(b) ? e[b] : a;
                            h
                                ? h.X(d)
                                : ((h = e[b] = new p.J()),
                                  h.X(d),
                                  c(b, function (a, c) {
                                      var d = !(!c || !c.synchronous);
                                      (f[b] = { definition: a, Zc: d }),
                                          delete e[b],
                                          g || d
                                              ? h.notifySubscribers(a)
                                              : p.Y.Wa(function () {
                                                    h.notifySubscribers(a);
                                                });
                                  }),
                                  (g = !0));
                        }
                        function c(a, b) {
                            d("getConfig", [a], function (c) {
                                c
                                    ? d("loadComponent", [a, c], function (a) {
                                          b(a, c);
                                      })
                                    : b(null, null);
                            });
                        }
                        function d(b, c, e, f) {
                            f || (f = p.g.loaders.slice(0));
                            var g = f.shift();
                            if (g) {
                                var h = g[b];
                                if (h) {
                                    var i = !1;
                                    if (
                                        h.apply(
                                            g,
                                            c.concat(function (a) {
                                                i ? e(null) : null !== a ? e(a) : d(b, c, e, f);
                                            })
                                        ) !== a &&
                                        ((i = !0), !g.suppressLoaderExceptions)
                                    )
                                        throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                                } else d(b, c, e, f);
                            } else e(null);
                        }
                        var e = {},
                            f = {};
                        (p.g = {
                            get: function (c, d) {
                                var e = f.hasOwnProperty(c) ? f[c] : a;
                                e
                                    ? e.Zc
                                        ? p.l.w(function () {
                                              d(e.definition);
                                          })
                                        : p.Y.Wa(function () {
                                              d(e.definition);
                                          })
                                    : b(c, d);
                            },
                            Xb: function (a) {
                                delete f[a];
                            },
                            Jb: d,
                        }),
                            (p.g.loaders = []),
                            p.b("components", p.g),
                            p.b("components.get", p.g.get),
                            p.b("components.clearCachedDefinition", p.g.Xb);
                    })(),
                    (function () {
                        function a(a, b, c, d) {
                            function e() {
                                0 === --h && d(f);
                            }
                            var f = {},
                                h = 2,
                                i = c.template;
                            (c = c.viewModel),
                                i
                                    ? g(b, i, function (b) {
                                          p.g.Jb("loadTemplate", [a, b], function (a) {
                                              (f.template = a), e();
                                          });
                                      })
                                    : e(),
                                c
                                    ? g(b, c, function (b) {
                                          p.g.Jb("loadViewModel", [a, b], function (a) {
                                              (f[k] = a), e();
                                          });
                                      })
                                    : e();
                        }
                        function d(a, b, c) {
                            if ("function" == typeof b)
                                c(function (a) {
                                    return new b(a);
                                });
                            else if ("function" == typeof b[k]) c(b[k]);
                            else if ("instance" in b) {
                                var e = b.instance;
                                c(function () {
                                    return e;
                                });
                            } else "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b);
                        }
                        function e(a) {
                            switch (p.a.A(a)) {
                                case "script":
                                    return p.a.ma(a.text);
                                case "textarea":
                                    return p.a.ma(a.value);
                                case "template":
                                    if (f(a.content)) return p.a.ua(a.content.childNodes);
                            }
                            return p.a.ua(a.childNodes);
                        }
                        function f(a) {
                            return b.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType;
                        }
                        function g(a, c, d) {
                            "string" == typeof c.require ? (h || b.require ? (h || b.require)([c.require], d) : a("Uses require, but no AMD loader is present")) : d(c);
                        }
                        function i(a) {
                            return function (b) {
                                throw Error("Component '" + a + "': " + b);
                            };
                        }
                        var j = {};
                        (p.g.register = function (a, b) {
                            if (!b) throw Error("Invalid configuration for " + a);
                            if (p.g.ub(a)) throw Error("Component " + a + " is already registered");
                            j[a] = b;
                        }),
                            (p.g.ub = function (a) {
                                return j.hasOwnProperty(a);
                            }),
                            (p.g.od = function (a) {
                                delete j[a], p.g.Xb(a);
                            }),
                            (p.g.Zb = {
                                getConfig: function (a, b) {
                                    b(j.hasOwnProperty(a) ? j[a] : null);
                                },
                                loadComponent: function (b, c, d) {
                                    var e = i(b);
                                    g(e, c, function (c) {
                                        a(b, e, c, d);
                                    });
                                },
                                loadTemplate: function (a, d, g) {
                                    if (((a = i(a)), "string" == typeof d)) g(p.a.ma(d));
                                    else if (d instanceof Array) g(d);
                                    else if (f(d)) g(p.a.V(d.childNodes));
                                    else if (d.element)
                                        if (((d = d.element), b.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType)) g(e(d));
                                        else if ("string" == typeof d) {
                                            var h = c.getElementById(d);
                                            h ? g(e(h)) : a("Cannot find element with ID " + d);
                                        } else a("Unknown element type: " + d);
                                    else a("Unknown template value: " + d);
                                },
                                loadViewModel: function (a, b, c) {
                                    d(i(a), b, c);
                                },
                            });
                        var k = "createViewModel";
                        p.b("components.register", p.g.register), p.b("components.isRegistered", p.g.ub), p.b("components.unregister", p.g.od), p.b("components.defaultLoader", p.g.Zb), p.g.loaders.push(p.g.Zb), (p.g.Bc = j);
                    })(),
                    (function () {
                        function a(a, c) {
                            var d = a.getAttribute("params");
                            if (d) {
                                var d = b.parseBindingsString(d, c, a, { valueAccessors: !0, bindingParams: !0 }),
                                    d = p.a.Ca(d, function (b) {
                                        return p.m(b, null, { i: a });
                                    }),
                                    e = p.a.Ca(d, function (b) {
                                        var c = b.t();
                                        return b.ba()
                                            ? p.m({
                                                  read: function () {
                                                      return p.a.c(b());
                                                  },
                                                  write:
                                                      p.Ba(c) &&
                                                      function (a) {
                                                          b()(a);
                                                      },
                                                  i: a,
                                              })
                                            : c;
                                    });
                                return e.hasOwnProperty("$raw") || (e.$raw = d), e;
                            }
                            return { $raw: {} };
                        }
                        (p.g.getComponentNameForNode = function (a) {
                            var b = p.a.A(a);
                            if (p.g.ub(b) && (-1 != b.indexOf("-") || "[object HTMLUnknownElement]" == "" + a || (8 >= p.a.C && a.tagName === b))) return b;
                        }),
                            (p.g.Ob = function (b, c, d, e) {
                                if (1 === c.nodeType) {
                                    var f = p.g.getComponentNameForNode(c);
                                    if (f) {
                                        if (((b = b || {}), b.component)) throw Error('Cannot use the "component" binding on a custom element matching a component');
                                        var g = { name: f, params: a(c, d) };
                                        b.component = e
                                            ? function () {
                                                  return g;
                                              }
                                            : g;
                                    }
                                }
                                return b;
                            });
                        var b = new p.Q();
                        9 > p.a.C &&
                            ((p.g.register = (function (a) {
                                return function (b) {
                                    return c.createElement(b), a.apply(this, arguments);
                                };
                            })(p.g.register)),
                            (c.createDocumentFragment = (function (a) {
                                return function () {
                                    var b,
                                        c = a(),
                                        d = p.g.Bc;
                                    for (b in d) d.hasOwnProperty(b) && c.createElement(b);
                                    return c;
                                };
                            })(c.createDocumentFragment)));
                    })(),
                    (function (a) {
                        function b(a, b, c) {
                            if (((b = b.template), !b)) throw Error("Component '" + a + "' has no template");
                            (a = p.a.ua(b)), p.f.da(c, a);
                        }
                        function c(a, b, c, d) {
                            var e = a.createViewModel;
                            return e ? e.call(a, d, { element: b, templateNodes: c }) : d;
                        }
                        var d = 0;
                        (p.d.component = {
                            init: function (e, f, g, h, i) {
                                function j() {
                                    var a = k && k.dispose;
                                    "function" == typeof a && a.call(k), (l = k = null);
                                }
                                var k,
                                    l,
                                    m = p.a.V(p.f.childNodes(e));
                                return (
                                    p.a.F.oa(e, j),
                                    p.m(
                                        function () {
                                            var g,
                                                h,
                                                n = p.a.c(f());
                                            if (("string" == typeof n ? (g = n) : ((g = p.a.c(n.name)), (h = p.a.c(n.params))), !g)) throw Error("No component name specified");
                                            var o = (l = ++d);
                                            p.g.get(g, function (d) {
                                                if (l === o) {
                                                    if ((j(), !d)) throw Error("Unknown component '" + g + "'");
                                                    b(g, d, e);
                                                    var f = c(d, e, m, h);
                                                    (d = i.createChildContext(f, a, function (a) {
                                                        (a.$component = f), (a.$componentTemplateNodes = m);
                                                    })),
                                                        (k = f),
                                                        p.eb(d, e);
                                                }
                                            });
                                        },
                                        null,
                                        { i: e }
                                    ),
                                    { controlsDescendantBindings: !0 }
                                );
                            },
                        }),
                            (p.f.Z.component = !0);
                    })();
                var B = { class: "className", for: "htmlFor" };
                (p.d.attr = {
                    update: function (b, c) {
                        var d = p.a.c(c()) || {};
                        p.a.D(d, function (c, d) {
                            d = p.a.c(d);
                            var e = !1 === d || null === d || d === a;
                            e && b.removeAttribute(c), 8 >= p.a.C && c in B ? ((c = B[c]), e ? b.removeAttribute(c) : (b[c] = d)) : e || b.setAttribute(c, d.toString()), "name" === c && p.a.rc(b, e ? "" : d.toString());
                        });
                    },
                }),
                    (function () {
                        (p.d.checked = {
                            after: ["value", "attr"],
                            init: function (b, c, d) {
                                function e() {
                                    var a = b.checked,
                                        e = n ? g() : a;
                                    if (!p.va.Sa() && (!i || a)) {
                                        var f = p.l.w(c);
                                        if (k) {
                                            var h = l ? f.t() : f;
                                            m !== e ? (a && (p.a.pa(h, e, !0), p.a.pa(h, m, !1)), (m = e)) : p.a.pa(h, e, a), l && p.Ba(f) && f(h);
                                        } else p.h.Ea(f, d, "checked", e, !0);
                                    }
                                }
                                function f() {
                                    var a = p.a.c(c());
                                    b.checked = k ? 0 <= p.a.o(a, g()) : h ? a : g() === a;
                                }
                                var g = p.nc(function () {
                                        return d.has("checkedValue") ? p.a.c(d.get("checkedValue")) : d.has("value") ? p.a.c(d.get("value")) : b.value;
                                    }),
                                    h = "checkbox" == b.type,
                                    i = "radio" == b.type;
                                if (h || i) {
                                    var j = c(),
                                        k = h && p.a.c(j) instanceof Array,
                                        l = !(k && j.push && j.splice),
                                        m = k ? g() : a,
                                        n = i || k;
                                    i &&
                                        !b.name &&
                                        p.d.uniqueName.init(b, function () {
                                            return !0;
                                        }),
                                        p.m(e, null, { i: b }),
                                        p.a.p(b, "click", e),
                                        p.m(f, null, { i: b }),
                                        (j = a);
                                }
                            },
                        }),
                            (p.h.ea.checked = !0),
                            (p.d.checkedValue = {
                                update: function (a, b) {
                                    a.value = p.a.c(b());
                                },
                            });
                    })(),
                    (p.d.css = {
                        update: function (a, b) {
                            var c = p.a.c(b());
                            null !== c && "object" == typeof c
                                ? p.a.D(c, function (b, c) {
                                      (c = p.a.c(c)), p.a.bb(a, b, c);
                                  })
                                : ((c = p.a.$a(String(c || ""))), p.a.bb(a, a.__ko__cssValue, !1), (a.__ko__cssValue = c), p.a.bb(a, c, !0));
                        },
                    }),
                    (p.d.enable = {
                        update: function (a, b) {
                            var c = p.a.c(b());
                            c && a.disabled ? a.removeAttribute("disabled") : c || a.disabled || (a.disabled = !0);
                        },
                    }),
                    (p.d.disable = {
                        update: function (a, b) {
                            p.d.enable.update(a, function () {
                                return !p.a.c(b());
                            });
                        },
                    }),
                    (p.d.event = {
                        init: function (a, b, c, d, e) {
                            var f = b() || {};
                            p.a.D(f, function (f) {
                                "string" == typeof f &&
                                    p.a.p(a, f, function (a) {
                                        var g,
                                            h = b()[f];
                                        if (h) {
                                            try {
                                                var i = p.a.V(arguments);
                                                (d = e.$data), i.unshift(d), (g = h.apply(d, i));
                                            } finally {
                                                !0 !== g && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
                                            }
                                            !1 === c.get(f + "Bubble") && ((a.cancelBubble = !0), a.stopPropagation && a.stopPropagation());
                                        }
                                    });
                            });
                        },
                    }),
                    (p.d.foreach = {
                        ic: function (a) {
                            return function () {
                                var b = a(),
                                    c = p.a.zb(b);
                                return c && "number" != typeof c.length
                                    ? (p.a.c(b),
                                      {
                                          foreach: c.data,
                                          as: c.as,
                                          includeDestroyed: c.includeDestroyed,
                                          afterAdd: c.afterAdd,
                                          beforeRemove: c.beforeRemove,
                                          afterRender: c.afterRender,
                                          beforeMove: c.beforeMove,
                                          afterMove: c.afterMove,
                                          templateEngine: p.W.sb,
                                      })
                                    : { foreach: b, templateEngine: p.W.sb };
                            };
                        },
                        init: function (a, b) {
                            return p.d.template.init(a, p.d.foreach.ic(b));
                        },
                        update: function (a, b, c, d, e) {
                            return p.d.template.update(a, p.d.foreach.ic(b), c, d, e);
                        },
                    }),
                    (p.h.ta.foreach = !1),
                    (p.f.Z.foreach = !0),
                    (p.d.hasfocus = {
                        init: function (a, b, c) {
                            function d(d) {
                                a.__ko_hasfocusUpdating = !0;
                                var e = a.ownerDocument;
                                if ("activeElement" in e) {
                                    var f;
                                    try {
                                        f = e.activeElement;
                                    } catch (g) {
                                        f = e.body;
                                    }
                                    d = f === a;
                                }
                                (e = b()), p.h.Ea(e, c, "hasfocus", d, !0), (a.__ko_hasfocusLastValue = d), (a.__ko_hasfocusUpdating = !1);
                            }
                            var e = d.on(null, !0),
                                f = d.on(null, !1);
                            p.a.p(a, "focus", e), p.a.p(a, "focusin", e), p.a.p(a, "blur", f), p.a.p(a, "focusout", f);
                        },
                        update: function (a, b) {
                            var c = !!p.a.c(b());
                            a.__ko_hasfocusUpdating || a.__ko_hasfocusLastValue === c || (c ? a.focus() : a.blur(), !c && a.__ko_hasfocusLastValue && a.ownerDocument.body.focus(), p.l.w(p.a.Da, null, [a, c ? "focusin" : "focusout"]));
                        },
                    }),
                    (p.h.ea.hasfocus = !0),
                    (p.d.hasFocus = p.d.hasfocus),
                    (p.h.ea.hasFocus = !0),
                    (p.d.html = {
                        init: function () {
                            return { controlsDescendantBindings: !0 };
                        },
                        update: function (a, b) {
                            p.a.Cb(a, b());
                        },
                    }),
                    o("if"),
                    o("ifnot", !1, !0),
                    o("with", !0, !1, function (a, b) {
                        return a.createChildContext(b);
                    });
                var C = {};
                (p.d.options = {
                    init: function (a) {
                        if ("select" !== p.a.A(a)) throw Error("options binding applies only to SELECT elements");
                        for (; 0 < a.length; ) a.remove(0);
                        return { controlsDescendantBindings: !0 };
                    },
                    update: function (b, c, d) {
                        function e() {
                            return p.a.Ka(b.options, function (a) {
                                return a.selected;
                            });
                        }
                        function f(a, b, c) {
                            var d = typeof b;
                            return "function" == d ? b(a) : "string" == d ? a[b] : c;
                        }
                        function g(a, c) {
                            if (o && k) p.j.ha(b, p.a.c(d.get("value")), !0);
                            else if (n.length) {
                                var e = 0 <= p.a.o(n, p.j.u(c[0]));
                                p.a.sc(c[0], e), o && !e && p.l.w(p.a.Da, null, [b, "change"]);
                            }
                        }
                        var h = b.multiple,
                            i = 0 != b.length && h ? b.scrollTop : null,
                            j = p.a.c(c()),
                            k = d.get("valueAllowUnset") && d.has("value"),
                            l = d.get("optionsIncludeDestroyed");
                        c = {};
                        var m,
                            n = [];
                        k || (h ? (n = p.a.fb(e(), p.j.u)) : 0 <= b.selectedIndex && n.push(p.j.u(b.options[b.selectedIndex]))),
                            j &&
                                ("undefined" == typeof j.length && (j = [j]),
                                (m = p.a.Ka(j, function (b) {
                                    return l || b === a || null === b || !p.a.c(b._destroy);
                                })),
                                d.has("optionsCaption") && ((j = p.a.c(d.get("optionsCaption"))), null !== j && j !== a && m.unshift(C)));
                        var o = !1;
                        (c.beforeRemove = function (a) {
                            b.removeChild(a);
                        }),
                            (j = g),
                            d.has("optionsAfterRender") &&
                                "function" == typeof d.get("optionsAfterRender") &&
                                (j = function (b, c) {
                                    g(0, c), p.l.w(d.get("optionsAfterRender"), null, [c[0], b !== C ? b : a]);
                                }),
                            p.a.Bb(
                                b,
                                m,
                                function (c, e, g) {
                                    return (
                                        g.length && ((n = !k && g[0].selected ? [p.j.u(g[0])] : []), (o = !0)),
                                        (e = b.ownerDocument.createElement("option")),
                                        c === C ? (p.a.Za(e, d.get("optionsCaption")), p.j.ha(e, a)) : ((g = f(c, d.get("optionsValue"), c)), p.j.ha(e, p.a.c(g)), (c = f(c, d.get("optionsText"), g)), p.a.Za(e, c)),
                                        [e]
                                    );
                                },
                                c,
                                j
                            ),
                            p.l.w(function () {
                                k
                                    ? p.j.ha(b, p.a.c(d.get("value")), !0)
                                    : (h ? n.length && e().length < n.length : n.length && 0 <= b.selectedIndex ? p.j.u(b.options[b.selectedIndex]) !== n[0] : n.length || 0 <= b.selectedIndex) && p.a.Da(b, "change");
                            }),
                            p.a.Nc(b),
                            i && 20 < Math.abs(i - b.scrollTop) && (b.scrollTop = i);
                    },
                }),
                    (p.d.options.xb = p.a.e.I()),
                    (p.d.selectedOptions = {
                        after: ["options", "foreach"],
                        init: function (a, b, c) {
                            p.a.p(a, "change", function () {
                                var d = b(),
                                    e = [];
                                p.a.q(a.getElementsByTagName("option"), function (a) {
                                    a.selected && e.push(p.j.u(a));
                                }),
                                    p.h.Ea(d, c, "selectedOptions", e);
                            });
                        },
                        update: function (a, b) {
                            if ("select" != p.a.A(a)) throw Error("values binding applies only to SELECT elements");
                            var c = p.a.c(b()),
                                d = a.scrollTop;
                            c &&
                                "number" == typeof c.length &&
                                p.a.q(a.getElementsByTagName("option"), function (a) {
                                    var b = 0 <= p.a.o(c, p.j.u(a));
                                    a.selected != b && p.a.sc(a, b);
                                }),
                                (a.scrollTop = d);
                        },
                    }),
                    (p.h.ea.selectedOptions = !0),
                    (p.d.style = {
                        update: function (b, c) {
                            var d = p.a.c(c() || {});
                            p.a.D(d, function (c, d) {
                                (d = p.a.c(d)), (null !== d && d !== a && !1 !== d) || (d = ""), (b.style[c] = d);
                            });
                        },
                    }),
                    (p.d.submit = {
                        init: function (a, b, c, d, e) {
                            if ("function" != typeof b()) throw Error("The value for a submit binding must be a function");
                            p.a.p(a, "submit", function (c) {
                                var d,
                                    f = b();
                                try {
                                    d = f.call(e.$data, a);
                                } finally {
                                    !0 !== d && (c.preventDefault ? c.preventDefault() : (c.returnValue = !1));
                                }
                            });
                        },
                    }),
                    (p.d.text = {
                        init: function () {
                            return { controlsDescendantBindings: !0 };
                        },
                        update: function (a, b) {
                            p.a.Za(a, b());
                        },
                    }),
                    (p.f.Z.text = !0),
                    (function () {
                        if (b && b.navigator)
                            var c = function (a) {
                                    if (a) return parseFloat(a[1]);
                                },
                                d = b.opera && b.opera.version && parseInt(b.opera.version()),
                                e = b.navigator.userAgent,
                                f = c(e.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                                g = c(e.match(/Firefox\/([^ ]*)/));
                        if (10 > p.a.C)
                            var h = p.a.e.I(),
                                i = p.a.e.I(),
                                j = function (a) {
                                    var b = this.activeElement;
                                    (b = b && p.a.e.get(b, i)) && b(a);
                                },
                                k = function (a, b) {
                                    var c = a.ownerDocument;
                                    p.a.e.get(c, h) || (p.a.e.set(c, h, !0), p.a.p(c, "selectionchange", j)), p.a.e.set(a, i, b);
                                };
                        (p.d.textInput = {
                            init: function (b, c, e) {
                                function h(a, c) {
                                    p.a.p(b, a, c);
                                }
                                function i() {
                                    var d = p.a.c(c());
                                    (null !== d && d !== a) || (d = ""), n !== a && d === n ? p.a.setTimeout(i, 4) : b.value !== d && ((o = d), (b.value = d));
                                }
                                function j() {
                                    m || ((n = b.value), (m = p.a.setTimeout(l, 4)));
                                }
                                function l() {
                                    clearTimeout(m), (n = m = a);
                                    var d = b.value;
                                    o !== d && ((o = d), p.h.Ea(c(), e, "textInput", d));
                                }
                                var m,
                                    n,
                                    o = b.value,
                                    q = 9 == p.a.C ? j : l;
                                10 > p.a.C
                                    ? (h("propertychange", function (a) {
                                          "value" === a.propertyName && q(a);
                                      }),
                                      8 == p.a.C && (h("keyup", l), h("keydown", l)),
                                      8 <= p.a.C && (k(b, q), h("dragend", j)))
                                    : (h("input", l), 5 > f && "textarea" === p.a.A(b) ? (h("keydown", j), h("paste", j), h("cut", j)) : 11 > d ? h("keydown", j) : 4 > g && (h("DOMAutoComplete", l), h("dragdrop", l), h("drop", l))),
                                    h("change", l),
                                    p.m(i, null, { i: b });
                            },
                        }),
                            (p.h.ea.textInput = !0),
                            (p.d.textinput = {
                                preprocess: function (a, b, c) {
                                    c("textInput", a);
                                },
                            });
                    })(),
                    (p.d.uniqueName = {
                        init: function (a, b) {
                            if (b()) {
                                var c = "ko_unique_" + ++p.d.uniqueName.Ic;
                                p.a.rc(a, c);
                            }
                        },
                    }),
                    (p.d.uniqueName.Ic = 0),
                    (p.d.value = {
                        after: ["options", "foreach"],
                        init: function (a, b, c) {
                            if ("input" != a.tagName.toLowerCase() || ("checkbox" != a.type && "radio" != a.type)) {
                                var d = ["change"],
                                    e = c.get("valueUpdate"),
                                    f = !1,
                                    g = null;
                                e && ("string" == typeof e && (e = [e]), p.a.ra(d, e), (d = p.a.Tb(d)));
                                var h = function () {
                                    (g = null), (f = !1);
                                    var d = b(),
                                        e = p.j.u(a);
                                    p.h.Ea(d, c, "value", e);
                                };
                                !p.a.C ||
                                    "input" != a.tagName.toLowerCase() ||
                                    "text" != a.type ||
                                    "off" == a.autocomplete ||
                                    (a.form && "off" == a.form.autocomplete) ||
                                    -1 != p.a.o(d, "propertychange") ||
                                    (p.a.p(a, "propertychange", function () {
                                        f = !0;
                                    }),
                                    p.a.p(a, "focus", function () {
                                        f = !1;
                                    }),
                                    p.a.p(a, "blur", function () {
                                        f && h();
                                    })),
                                    p.a.q(d, function (b) {
                                        var c = h;
                                        p.a.nd(b, "after") &&
                                            ((c = function () {
                                                (g = p.j.u(a)), p.a.setTimeout(h, 0);
                                            }),
                                            (b = b.substring(5))),
                                            p.a.p(a, b, c);
                                    });
                                var i = function () {
                                    var d = p.a.c(b()),
                                        e = p.j.u(a);
                                    if (null !== g && d === g) p.a.setTimeout(i, 0);
                                    else if (d !== e)
                                        if ("select" === p.a.A(a)) {
                                            var f = c.get("valueAllowUnset"),
                                                e = function () {
                                                    p.j.ha(a, d, f);
                                                };
                                            e(), f || d === p.j.u(a) ? p.a.setTimeout(e, 0) : p.l.w(p.a.Da, null, [a, "change"]);
                                        } else p.j.ha(a, d);
                                };
                                p.m(i, null, { i: a });
                            } else p.Ja(a, { checkedValue: b });
                        },
                        update: function () {},
                    }),
                    (p.h.ea.value = !0),
                    (p.d.visible = {
                        update: function (a, b) {
                            var c = p.a.c(b()),
                                d = "none" != a.style.display;
                            c && !d ? (a.style.display = "") : !c && d && (a.style.display = "none");
                        },
                    }),
                    (function (a) {
                        p.d[a] = {
                            init: function (b, c, d, e, f) {
                                return p.d.event.init.call(
                                    this,
                                    b,
                                    function () {
                                        var b = {};
                                        return (b[a] = c()), b;
                                    },
                                    d,
                                    e,
                                    f
                                );
                            },
                        };
                    })("click"),
                    (p.O = function () {}),
                    (p.O.prototype.renderTemplateSource = function () {
                        throw Error("Override renderTemplateSource");
                    }),
                    (p.O.prototype.createJavaScriptEvaluatorBlock = function () {
                        throw Error("Override createJavaScriptEvaluatorBlock");
                    }),
                    (p.O.prototype.makeTemplateSource = function (a, b) {
                        if ("string" == typeof a) {
                            b = b || c;
                            var d = b.getElementById(a);
                            if (!d) throw Error("Cannot find template with ID " + a);
                            return new p.v.n(d);
                        }
                        if (1 == a.nodeType || 8 == a.nodeType) return new p.v.qa(a);
                        throw Error("Unknown template type: " + a);
                    }),
                    (p.O.prototype.renderTemplate = function (a, b, c, d) {
                        return (a = this.makeTemplateSource(a, d)), this.renderTemplateSource(a, b, c, d);
                    }),
                    (p.O.prototype.isTemplateRewritten = function (a, b) {
                        return !1 === this.allowTemplateRewriting || this.makeTemplateSource(a, b).data("isRewritten");
                    }),
                    (p.O.prototype.rewriteTemplate = function (a, b, c) {
                        (a = this.makeTemplateSource(a, c)), (b = b(a.text())), a.text(b), a.data("isRewritten", !0);
                    }),
                    p.b("templateEngine", p.O),
                    (p.Gb = (function () {
                        function a(a, b, c, d) {
                            a = p.h.yb(a);
                            for (var e = p.h.ta, f = 0; f < a.length; f++) {
                                var g = a[f].key;
                                if (e.hasOwnProperty(g)) {
                                    var h = e[g];
                                    if ("function" == typeof h) {
                                        if ((g = h(a[f].value))) throw Error(g);
                                    } else if (!h) throw Error("This template engine does not support the '" + g + "' binding within its templates");
                                }
                            }
                            return (c = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + p.h.Ua(a, { valueAccessors: !0 }) + " } })()},'" + c.toLowerCase() + "')"), d.createJavaScriptEvaluatorBlock(c) + b;
                        }
                        var b = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                            c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                        return {
                            Oc: function (a, b, c) {
                                b.isTemplateRewritten(a, c) ||
                                    b.rewriteTemplate(
                                        a,
                                        function (a) {
                                            return p.Gb.dd(a, b);
                                        },
                                        c
                                    );
                            },
                            dd: function (d, e) {
                                return d
                                    .replace(b, function (b, c, d, f, g) {
                                        return a(g, c, d, e);
                                    })
                                    .replace(c, function (b, c) {
                                        return a(c, "<!-- ko -->", "#comment", e);
                                    });
                            },
                            Ec: function (a, b) {
                                return p.M.wb(function (c, d) {
                                    var e = c.nextSibling;
                                    e && e.nodeName.toLowerCase() === b && p.Ja(e, a, d);
                                });
                            },
                        };
                    })()),
                    p.b("__tr_ambtns", p.Gb.Ec),
                    (function () {
                        (p.v = {}),
                            (p.v.n = function (a) {
                                if ((this.n = a)) {
                                    var b = p.a.A(a);
                                    this.ab = "script" === b ? 1 : "textarea" === b ? 2 : "template" == b && a.content && 11 === a.content.nodeType ? 3 : 4;
                                }
                            }),
                            (p.v.n.prototype.text = function () {
                                var a = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
                                if (0 == arguments.length) return this.n[a];
                                var b = arguments[0];
                                "innerHTML" === a ? p.a.Cb(this.n, b) : (this.n[a] = b);
                            });
                        var b = p.a.e.I() + "_";
                        p.v.n.prototype.data = function (a) {
                            return 1 === arguments.length ? p.a.e.get(this.n, b + a) : void p.a.e.set(this.n, b + a, arguments[1]);
                        };
                        var c = p.a.e.I();
                        (p.v.n.prototype.nodes = function () {
                            var b = this.n;
                            return 0 == arguments.length ? (p.a.e.get(b, c) || {}).jb || (3 === this.ab ? b.content : 4 === this.ab ? b : a) : void p.a.e.set(b, c, { jb: arguments[0] });
                        }),
                            (p.v.qa = function (a) {
                                this.n = a;
                            }),
                            (p.v.qa.prototype = new p.v.n()),
                            (p.v.qa.prototype.text = function () {
                                if (0 == arguments.length) {
                                    var b = p.a.e.get(this.n, c) || {};
                                    return b.Hb === a && b.jb && (b.Hb = b.jb.innerHTML), b.Hb;
                                }
                                p.a.e.set(this.n, c, { Hb: arguments[0] });
                            }),
                            p.b("templateSources", p.v),
                            p.b("templateSources.domElement", p.v.n),
                            p.b("templateSources.anonymousTemplate", p.v.qa);
                    })(),
                    (function () {
                        function b(a, b, c) {
                            var d;
                            for (b = p.f.nextSibling(b); a && (d = a) !== b; ) (a = p.f.nextSibling(d)), c(d, a);
                        }
                        function c(a, c) {
                            if (a.length) {
                                var d = a[0],
                                    e = a[a.length - 1],
                                    f = d.parentNode,
                                    g = p.Q.instance,
                                    h = g.preprocessNode;
                                if (h) {
                                    if (
                                        (b(d, e, function (a, b) {
                                            var c = a.previousSibling,
                                                f = h.call(g, a);
                                            f && (a === d && (d = f[0] || b), a === e && (e = f[f.length - 1] || c));
                                        }),
                                        (a.length = 0),
                                        !d)
                                    )
                                        return;
                                    d === e ? a.push(d) : (a.push(d, e), p.a.za(a, f));
                                }
                                b(d, e, function (a) {
                                    (1 !== a.nodeType && 8 !== a.nodeType) || p.Rb(c, a);
                                }),
                                    b(d, e, function (a) {
                                        (1 !== a.nodeType && 8 !== a.nodeType) || p.M.yc(a, [c]);
                                    }),
                                    p.a.za(a, f);
                            }
                        }
                        function d(a) {
                            return a.nodeType ? a : 0 < a.length ? a[0] : null;
                        }
                        function e(a, b, e, f, h) {
                            h = h || {};
                            var i = ((a && d(a)) || e || {}).ownerDocument,
                                j = h.templateEngine || g;
                            if ((p.Gb.Oc(e, j, i), (e = j.renderTemplate(e, f, h, i)), "number" != typeof e.length || (0 < e.length && "number" != typeof e[0].nodeType))) throw Error("Template engine must return an array of DOM nodes");
                            switch (((i = !1), b)) {
                                case "replaceChildren":
                                    p.f.da(a, e), (i = !0);
                                    break;
                                case "replaceNode":
                                    p.a.qc(a, e), (i = !0);
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw Error("Unknown renderMode: " + b);
                            }
                            return i && (c(e, f), h.afterRender && p.l.w(h.afterRender, null, [e, f.$data])), e;
                        }
                        function f(a, b, c) {
                            return p.H(a) ? a() : "function" == typeof a ? a(b, c) : a;
                        }
                        var g;
                        (p.Db = function (b) {
                            if (b != a && !(b instanceof p.O)) throw Error("templateEngine must inherit from ko.templateEngine");
                            g = b;
                        }),
                            (p.Ab = function (b, c, h, i, j) {
                                if (((h = h || {}), (h.templateEngine || g) == a)) throw Error("Set a template engine before calling renderTemplate");
                                if (((j = j || "replaceChildren"), i)) {
                                    var k = d(i);
                                    return p.B(
                                        function () {
                                            var a = c && c instanceof p.U ? c : new p.U(p.a.c(c)),
                                                g = f(b, a.$data, a),
                                                a = e(i, j, g, a, h);
                                            "replaceNode" == j && ((i = a), (k = d(i)));
                                        },
                                        null,
                                        {
                                            wa: function () {
                                                return !k || !p.a.nb(k);
                                            },
                                            i: k && "replaceNode" == j ? k.parentNode : k,
                                        }
                                    );
                                }
                                return p.M.wb(function (a) {
                                    p.Ab(b, c, h, a, "replaceNode");
                                });
                            }),
                            (p.kd = function (b, d, g, h, i) {
                                function j(a, b) {
                                    c(b, l), g.afterRender && g.afterRender(b, a), (l = null);
                                }
                                function k(a, c) {
                                    l = i.createChildContext(a, g.as, function (a) {
                                        a.$index = c;
                                    });
                                    var d = f(b, a, l);
                                    return e(null, "ignoreTargetNode", d, l, g);
                                }
                                var l;
                                return p.B(
                                    function () {
                                        var b = p.a.c(d) || [];
                                        "undefined" == typeof b.length && (b = [b]),
                                            (b = p.a.Ka(b, function (b) {
                                                return g.includeDestroyed || b === a || null === b || !p.a.c(b._destroy);
                                            })),
                                            p.l.w(p.a.Bb, null, [h, b, k, g, j]);
                                    },
                                    null,
                                    { i: h }
                                );
                            });
                        var h = p.a.e.I();
                        (p.d.template = {
                            init: function (a, b) {
                                var c = p.a.c(b());
                                if ("string" == typeof c || c.name) p.f.xa(a);
                                else {
                                    if ("nodes" in c) {
                                        if (((c = c.nodes || []), p.H(c))) throw Error('The "nodes" option must be a plain, non-observable array.');
                                    } else c = p.f.childNodes(a);
                                    (c = p.a.jc(c)), new p.v.qa(a).nodes(c);
                                }
                                return { controlsDescendantBindings: !0 };
                            },
                            update: function (b, c, d, e, f) {
                                var g,
                                    i = c();
                                (c = p.a.c(i)),
                                    (d = !0),
                                    (e = null),
                                    "string" == typeof c ? (c = {}) : ((i = c.name), "if" in c && (d = p.a.c(c["if"])), d && "ifnot" in c && (d = !p.a.c(c.ifnot)), (g = p.a.c(c.data))),
                                    "foreach" in c ? (e = p.kd(i || b, (d && c.foreach) || [], c, b, f)) : d ? ((f = "data" in c ? f.createChildContext(g, c.as) : f), (e = p.Ab(i || b, f, c, b))) : p.f.xa(b),
                                    (f = e),
                                    (g = p.a.e.get(b, h)) && "function" == typeof g.k && g.k(),
                                    p.a.e.set(b, h, f && f.ba() ? f : a);
                            },
                        }),
                            (p.h.ta.template = function (a) {
                                return (a = p.h.yb(a)), (1 == a.length && a[0].unknown) || p.h.ad(a, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
                            }),
                            (p.f.Z.template = !0);
                    })(),
                    p.b("setTemplateEngine", p.Db),
                    p.b("renderTemplate", p.Ab),
                    (p.a.dc = function (a, b, c) {
                        if (a.length && b.length) {
                            var d, e, f, g, h;
                            for (d = e = 0; (!c || d < c) && (g = a[e]); ++e) {
                                for (f = 0; (h = b[f]); ++f)
                                    if (g.value === h.value) {
                                        (g.moved = h.index), (h.moved = g.index), b.splice(f, 1), (d = f = 0);
                                        break;
                                    }
                                d += f;
                            }
                        }
                    }),
                    (p.a.ib = (function () {
                        function a(a, b, c, d, e) {
                            var f,
                                g,
                                h,
                                i,
                                j,
                                k = Math.min,
                                l = Math.max,
                                m = [],
                                n = a.length,
                                o = b.length,
                                q = o - n || 1,
                                r = n + o + 1;
                            for (f = 0; f <= n; f++) for (i = h, m.push((h = [])), j = k(o, f + q), g = l(0, f - 1); g <= j; g++) h[g] = g ? (f ? (a[f - 1] === b[g - 1] ? i[g - 1] : k(i[g] || r, h[g - 1] || r) + 1) : g + 1) : f + 1;
                            for (k = [], l = [], q = [], f = n, g = o; f || g; )
                                (o = m[f][g] - 1),
                                    g && o === m[f][g - 1]
                                        ? l.push((k[k.length] = { status: c, value: b[--g], index: g }))
                                        : f && o === m[f - 1][g]
                                        ? q.push((k[k.length] = { status: d, value: a[--f], index: f }))
                                        : (--g, --f, e.sparse || k.push({ status: "retained", value: b[g] }));
                            return p.a.dc(q, l, !e.dontLimitMoves && 10 * n), k.reverse();
                        }
                        return function (b, c, d) {
                            return (d = "boolean" == typeof d ? { dontLimitMoves: d } : d || {}), (b = b || []), (c = c || []), b.length < c.length ? a(b, c, "added", "deleted", d) : a(c, b, "deleted", "added", d);
                        };
                    })()),
                    p.b("utils.compareArrays", p.a.ib),
                    (function () {
                        function b(b, c, d, e, f) {
                            var g = [],
                                h = p.B(
                                    function () {
                                        var a = c(d, f, p.a.za(g, b)) || [];
                                        0 < g.length && (p.a.qc(g, a), e && p.l.w(e, null, [d, a, f])), (g.length = 0), p.a.ra(g, a);
                                    },
                                    null,
                                    {
                                        i: b,
                                        wa: function () {
                                            return !p.a.Qb(g);
                                        },
                                    }
                                );
                            return { ca: g, B: h.ba() ? h : a };
                        }
                        var c = p.a.e.I(),
                            d = p.a.e.I();
                        p.a.Bb = function (e, f, g, h, i) {
                            function j(a, b) {
                                (v = m[b]), s !== b && (y[a] = v), v.qb(s++), p.a.za(v.ca, e), q.push(v), u.push(v);
                            }
                            function k(a, b) {
                                if (a)
                                    for (var c = 0, d = b.length; c < d; c++)
                                        b[c] &&
                                            p.a.q(b[c].ca, function (d) {
                                                a(d, c, b[c].ja);
                                            });
                            }
                            (f = f || []), (h = h || {});
                            var l = p.a.e.get(e, c) === a,
                                m = p.a.e.get(e, c) || [],
                                n = p.a.fb(m, function (a) {
                                    return a.ja;
                                }),
                                o = p.a.ib(n, f, h.dontLimitMoves),
                                q = [],
                                r = 0,
                                s = 0,
                                t = [],
                                u = [];
                            f = [];
                            for (var v, w, x, y = [], n = [], z = 0; (w = o[z]); z++)
                                switch (((x = w.moved), w.status)) {
                                    case "deleted":
                                        x === a && ((v = m[r]), v.B && (v.B.k(), (v.B = a)), p.a.za(v.ca, e).length && (h.beforeRemove && (q.push(v), u.push(v), v.ja === d ? (v = null) : (f[z] = v)), v && t.push.apply(t, v.ca))), r++;
                                        break;
                                    case "retained":
                                        j(z, r++);
                                        break;
                                    case "added":
                                        x !== a ? j(z, x) : ((v = { ja: w.value, qb: p.N(s++) }), q.push(v), u.push(v), l || (n[z] = v));
                                }
                            p.a.e.set(e, c, q), k(h.beforeMove, y), p.a.q(t, h.beforeRemove ? p.$ : p.removeNode);
                            for (var A, z = 0, l = p.f.firstChild(e); (v = u[z]); z++) {
                                for (v.ca || p.a.extend(v, b(e, g, v.ja, i, v.qb)), r = 0; (o = v.ca[r]); l = o.nextSibling, A = o, r++) o !== l && p.f.gc(e, o, A);
                                !v.Wc && i && (i(v.ja, v.ca, v.qb), (v.Wc = !0));
                            }
                            for (k(h.beforeRemove, f), z = 0; z < f.length; ++z) f[z] && (f[z].ja = d);
                            k(h.afterMove, y), k(h.afterAdd, n);
                        };
                    })(),
                    p.b("utils.setDomNodeChildrenFromArrayMapping", p.a.Bb),
                    (p.W = function () {
                        this.allowTemplateRewriting = !1;
                    }),
                    (p.W.prototype = new p.O()),
                    (p.W.prototype.renderTemplateSource = function (a, b, c, d) {
                        return (b = (9 > p.a.C ? 0 : a.nodes) ? a.nodes() : null) ? p.a.V(b.cloneNode(!0).childNodes) : ((a = a.text()), p.a.ma(a, d));
                    }),
                    (p.W.sb = new p.W()),
                    p.Db(p.W.sb),
                    p.b("nativeTemplateEngine", p.W),
                    (function () {
                        (p.vb = function () {
                            var a = (this.$c = (function () {
                                if (!e || !e.tmpl) return 0;
                                try {
                                    if (0 <= e.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
                                } catch (a) {}
                                return 1;
                            })());
                            (this.renderTemplateSource = function (b, d, f, g) {
                                if (((g = g || c), (f = f || {}), 2 > a)) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                                var h = b.data("precompiled");
                                return (
                                    h || ((h = b.text() || ""), (h = e.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}")), b.data("precompiled", h)),
                                    (b = [d.$data]),
                                    (d = e.extend({ koBindingContext: d }, f.templateOptions)),
                                    (d = e.tmpl(h, b, d)),
                                    d.appendTo(g.createElement("div")),
                                    (e.fragments = {}),
                                    d
                                );
                            }),
                                (this.createJavaScriptEvaluatorBlock = function (a) {
                                    return "{{ko_code ((function() { return " + a + " })()) }}";
                                }),
                                (this.addTemplate = function (a, b) {
                                    c.write("<script type='text/html' id='" + a + "'>" + b + "</script>");
                                }),
                                0 < a && ((e.tmpl.tag.ko_code = { open: "__.push($1 || '');" }), (e.tmpl.tag.ko_with = { open: "with($1) {", close: "} " }));
                        }),
                            (p.vb.prototype = new p.O());
                        var a = new p.vb();
                        0 < a.$c && p.Db(a), p.b("jqueryTmplTemplateEngine", p.vb);
                    })();
            });
        })();
    })(),
    !(function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? (module.exports = a) : a(jQuery);
    })(function (a) {
        function b(b) {
            var g = b || window.event,
                h = i.call(arguments, 1),
                j = 0,
                l = 0,
                m = 0,
                n = 0,
                o = 0,
                p = 0;
            if (
                ((b = a.event.fix(g)),
                (b.type = "mousewheel"),
                "detail" in g && (m = -1 * g.detail),
                "wheelDelta" in g && (m = g.wheelDelta),
                "wheelDeltaY" in g && (m = g.wheelDeltaY),
                "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
                "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
                (j = 0 === m ? l : m),
                "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
                "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
                0 !== m || 0 !== l)
            ) {
                if (1 === g.deltaMode) {
                    var q = a.data(this, "mousewheel-line-height");
                    (j *= q), (m *= q), (l *= q);
                } else if (2 === g.deltaMode) {
                    var r = a.data(this, "mousewheel-page-height");
                    (j *= r), (m *= r), (l *= r);
                }
                if (
                    ((n = Math.max(Math.abs(m), Math.abs(l))),
                    (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
                    d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
                    (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
                    (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
                    (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
                    k.settings.normalizeOffset && this.getBoundingClientRect)
                ) {
                    var s = this.getBoundingClientRect();
                    (o = b.clientX - s.left), (p = b.clientY - s.top);
                }
                return (
                    (b.deltaX = l),
                    (b.deltaY = m),
                    (b.deltaFactor = f),
                    (b.offsetX = o),
                    (b.offsetY = p),
                    (b.deltaMode = 0),
                    h.unshift(b, j, l, m),
                    e && clearTimeout(e),
                    (e = setTimeout(c, 200)),
                    (a.event.dispatch || a.event.handle).apply(this, h)
                );
            }
        }
        function c() {
            f = null;
        }
        function d(a, b) {
            return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
        }
        var e,
            f,
            g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
        if (a.event.fixHooks) for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
        var k = (a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
                if (this.addEventListener) for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1);
                else this.onmousewheel = b;
                a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
            },
            teardown: function () {
                if (this.removeEventListener) for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1);
                else this.onmousewheel = null;
                a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
            },
            getLineHeight: function (b) {
                var c = a(b),
                    d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
                return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
            },
            getPageHeight: function (b) {
                return a(b).height();
            },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
        });
        a.fn.extend({
            mousewheel: function (a) {
                return a ? this.on("mousewheel", a) : this.trigger("mousewheel");
            },
            unmousewheel: function (a) {
                return this.unbind("mousewheel", a);
            },
        });
    }),
    (function (a) {
        function b() {
            return "msie" === c[0] && parseInt(c[1]) < 9;
        }
        var c = (function () {
                var a,
                    b = navigator.appName,
                    c = navigator.userAgent,
                    d = c.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                return d && null != (a = c.match(/version\/([\.\d]+)/i)) && (d[2] = a[1]), (d = d ? [d[1], d[2]] : [b, navigator.appVersion, "-?"]);
            })(),
            d = 0;
        a.fn.splitter = function (e) {
            return (
                (e = e || {}),
                this.each(function () {
                    function f(a) {
                        u.removeClass(o.barStateClasses).addClass(a);
                    }
                    function g(b) {
                        1 === b.which &&
                            (u.removeClass(o.barHoverClass),
                            o.outline && ((m = m || u.clone(!1).insertAfter(r)), u.removeClass(o.barDockedClass)),
                            f(o.barActiveClass),
                            q.css({ "user-select": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "pointer-events": "none" }).find("iframe").addClass(o.iframeClass),
                            (r._posSplit = r[0][o.pxSplit] - b[o.eventPos]),
                            a(document)
                                .on("mousemove" + o.eventNamespace, h)
                                .on("mouseup" + o.eventNamespace, i));
                    }
                    function h(a) {
                        var b = r._posSplit + a[o.eventPos],
                            c = Math.max(0, Math.min(b, p._DA - u._DA)),
                            d = Math.max(r._min, p._DA - s._max, Math.min(b, r._max, p._DA - u._DA - s._min));
                        o.outline
                            ? ((o.dockPane === r && b < Math.max(r._min, u._DA)) || (o.dockPane === s && b > Math.min(b, r._max, p._DA - u._DA - s._min))
                                  ? u.addClass(o.barDockedClass).css(o.origin, c)
                                  : u.removeClass(o.barDockedClass).css(o.origin, d),
                              (u._DA = u[0][o.pxSplit]))
                            : j(b),
                            f(b === d ? o.barActiveClass : o.barLimitClass);
                    }
                    function i(b) {
                        f(o.barNormalClass), u.addClass(o.barHoverClass);
                        var c = r._posSplit + b[o.eventPos];
                        o.outline && (m && m.remove(), (m = null), j(c)),
                            q.css({ "user-select": "text", "-webkit-user-select": "text", "-khtml-user-select": "text", "-moz-user-select": "text", "pointer-events": "auto" }).find("iframe").removeClass(o.iframeClass),
                            a(document).unbind("mousemove" + o.eventNamespace + " mouseup" + o.eventNamespace);
                    }
                    function j(a) {
                        (u._DA = u[0][o.pxSplit]),
                            (o.dockPane === r && a < Math.max(r._min, u._DA)) || (o.dockPane === s && a > Math.min(a, r._max, p._DA - u._DA - s._min))
                                ? (u.addClass(o.barDockedClass), (u._DA = u[0][o.pxSplit]), (a = o.dockPane === r ? 0 : p._DA - u._DA), null === u._pos && (u._pos = r[0][o.pxSplit]))
                                : (u.removeClass(o.barDockedClass), (u._DA = u[0][o.pxSplit]), (u._pos = null), (a = Math.max(r._min, p._DA - s._max, Math.min(a, r._max, p._DA - u._DA - s._min)))),
                            u.css(o.origin, a).css(o.fixed, p._DF),
                            r.css(o.origin, 0).css(o.split, a).css(o.fixed, p._DF),
                            s
                                .css(o.origin, a + u._DA)
                                .css(o.split, p._DA - u._DA - a)
                                .css(o.fixed, p._DF),
                            b() || q.triggerHandler("resize");
                    }
                    function k(a) {
                        for (var b = 0, c = 1; c < arguments.length; c++) b += Math.max(parseInt(a.css(arguments[c]), 10) || 0, 0);
                        return b;
                    }
                    function l(a) {
                        (p._DF = p[0][o.pxFixed] - p._PBF),
                            (p._DA = p[0][o.pxSplit] - p._PBA),
                            p._DF <= 0 ||
                                p._DA <= 0 ||
                                (p._oldW === p.width() && p._oldH === p.height()) ||
                                ((p._oldW = p.width()), (p._oldH = p.height()), j(isNaN(a) ? (o.sizeRight || o.sizeBottom ? p._DA - s[0][o.pxSplit] - u._DA : r[0][o.pxSplit]) : a), f(o.barNormalClass));
                    }
                    if (!a(this).attr("data-splitter-initialized")) {
                        var m,
                            n = (e.splitHorizontal ? "h" : e.splitVertical ? "v" : e.type) || "v",
                            o = a.extend(
                                {
                                    splitterClass: "splitter ui-widget ui-widget-content",
                                    paneClass: "splitter-pane",
                                    barClass: "splitter-bar",
                                    barNormalClass: "ui-state-default",
                                    barHoverClass: "ui-state-hover",
                                    barActiveClass: "ui-state-highlight",
                                    barLimitClass: "ui-state-error",
                                    iframeClass: "splitter-iframe-hide",
                                    eventNamespace: ".splitter" + ++d,
                                    pxPerKey: 8,
                                    tabIndex: 0,
                                    accessKey: "",
                                    dockSpeed: 1,
                                    undockSpeed: 1,
                                    dockEase: null,
                                    undockEase: null,
                                },
                                {
                                    v: { keyLeft: 39, keyRight: 37, cursor: "e-resize", barStateClass: "splitter-bar-vertical", barDockedClass: "splitter-bar-vertical-docked" },
                                    h: { keyTop: 40, keyBottom: 38, cursor: "n-resize", barStateClass: "splitter-bar-horizontal", barDockedClass: "splitter-bar-horizontal-docked" },
                                }[n],
                                e,
                                {
                                    v: { type: "v", eventPos: "pageX", origin: "left", split: "width", pxSplit: "offsetWidth", side1: "Left", side2: "Right", fixed: "height", pxFixed: "offsetHeight", side3: "Top", side4: "Bottom" },
                                    h: { type: "h", eventPos: "pageY", origin: "top", split: "height", pxSplit: "offsetHeight", side1: "Top", side2: "Bottom", fixed: "width", pxFixed: "offsetWidth", side3: "Left", side4: "Right" },
                                }[n]
                            );
                        o.barStateClasses = [o.barNormalClass, o.barHoverClass, o.barActiveClass, o.barLimitClass].join(" ");
                        var p = a(this).css({ position: "relative" }).addClass(o.splitterClass).attr("data-splitter-initialized", !0),
                            q = a(">*", p[0]).addClass(o.paneClass).css({ position: "absolute", "z-index": "1", "-moz-outline-style": "none" }),
                            r = a(q[0]),
                            s = a(q[1]);
                        o.dockPane = o.dock && (/right|bottom/.test(o.dock) ? s : r);
                        var t = a("<a />")
                            .attr({ accessKey: o.accessKey, tabIndex: o.tabIndex, title: o.splitbarClass })
                            .on(("opera" === c ? "click" : "focus") + o.eventNamespace, function () {
                                this.focus(), u.addClass(o.barActiveClass);
                            })
                            .on("blur" + o.eventNamespace, function () {
                                u.removeClass(o.barActiveClass);
                            });
                        "" !== o.accessKey &&
                            t.on("keydown" + o.eventNamespace, function (a) {
                                var b = a.which || a.keyCode,
                                    c = b === o["key" + o.side1] ? 1 : b === o["key" + o.side2] ? -1 : 0;
                                c && j(r[0][o.pxSplit] + c * o.pxPerKey);
                            });
                        var u = a("<div />")
                            .insertAfter(r)
                            .addClass(o.barClass)
                            .addClass(o.barStateClass)
                            .append(t)
                            .attr({ unselectable: "on" })
                            .css({ position: "absolute", "user-select": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "z-index": "100" })
                            .on("mousedown" + o.eventNamespace, g)
                            .on("mouseover" + o.eventNamespace, function () {
                                a(this).addClass(o.barHoverClass);
                            })
                            .on("mouseout" + o.eventNamespace, function () {
                                a(this).removeClass(o.barHoverClass);
                            });
                        /^(auto|default|)$/.test(u.css("cursor")) && u.css("cursor", o.cursor),
                            (u._DA = u[0][o.pxSplit]),
                            (p._PBF = k(p, "border" + o.side3 + "Width", "border" + o.side4 + "Width")),
                            (p._PBA = k(p, "border" + o.side1 + "Width", "border" + o.side2 + "Width")),
                            (r._pane = o.side1),
                            (s._pane = o.side2),
                            a.each([r, s], function () {
                                (this._splitter_style = this.style),
                                    (this._min = o["min" + this._pane] || k(this, "min-" + o.split)),
                                    (this._max = o["max" + this._pane] || k(this, "max-" + o.split) || 9999),
                                    (this._init = o["size" + this._pane] === !0 ? parseInt(a.css(this[0], o.split), 10) : o["size" + this._pane]);
                            });
                        var v = r._init;
                        isNaN(s._init) || (v = p[0][o.pxSplit] - p._PBA - s._init - u._DA),
                            isNaN(v) && (v = Math.round((p[0][o.pxSplit] - p._PBA - u._DA) / 2)),
                            o.anchorToWindow && (o.resizeTo = window),
                            o.resizeTo
                                ? ((p._hadjust = k(p, "borderTopWidth", "borderBottomWidth", "marginBottom")),
                                  (p._hmin = Math.max(k(p, "minHeight"), 20)),
                                  a(window)
                                      .on("resize" + o.eventNamespace, function () {
                                          var c = p.offset().top,
                                              d = a(o.resizeTo).height();
                                          p.css("height", Math.max(d - c - p._hadjust, p._hmin) + "px"), b() || p.triggerHandler("resize");
                                        

                                      })
                                      .triggerHandler("resize"))
                                : o.resizeToWidth &&
                                  !b() &&
                                  a(window).on("resize" + o.eventNamespace, function () {
                                      l();
                                  }),
                            o.dock &&
                                (p
                                    .on("toggleDock" + o.eventNamespace, function () {
                                        var a = o.dockPane[0][o.pxSplit];
                                        p.triggerHandler(a ? "dock" : "undock");
                                       
                                    })
                                    .on("dock" + o.eventNamespace, function () {
                                        var a = r[0][o.pxSplit];
                                        if (a) {
                                            u._pos = a;
                                            var b = {};
                                            (b[o.origin] = o.dockPane === r ? 0 : p[0][o.pxSplit] - p._PBA - u[0][o.pxSplit]),
                                                u.animate(b, o.dockSpeed || 1, o.dockEasing, function () {
                                                    u.addClass(o.barDockedClass), j(b[o.origin]);
                                                });
                                        }

                                        
                                    })
                                    .on("undock" + o.eventNamespace, function () {
                                        var a = o.dockPane[0][o.pxSplit];
                                        if (!a) {
                                            var b = {};
                                            (b[o.origin] = u._pos + "px"),
                                                u.removeClass(o.barDockedClass).animate(b, o.undockSpeed || o.dockSpeed || 1, o.undockEasing || o.dockEasing, function () {
                                                    j(u._pos), (u._pos = null);
                                                });
                                        }
                                       
                                    }),
                                o.dockKey &&
                                    a('<a title="' + o.splitbarClass + ' toggle dock"></a>')
                                        .attr({ accessKey: o.dockKey, tabIndex: -1 })
                                        .appendTo(u)
                                        .on("opera" === c ? "click" : "focus", function () {
                                            p.triggerHandler("toggleDock"), this.blur();
                                        }),
                                u.on("dblclick", function () {
                                    p.triggerHandler("toggleDock");
                                })),
                            p
                                .on("destroy" + o.eventNamespace, function () {
                                   
                                    a([window, document]).unbind(o.eventNamespace),
                                        u.unbind().remove(),
                                        q.removeClass(o.paneClass),
                                        p
                                            .removeClass(o.splitterClass)
                                            .add(q)
                                            .unbind(o.eventNamespace)
                                            .attr("style", function () {
                                                return this._splitter_style || "";
                                            }),
                                        (p = u = t = q = r = s = o = e = null);
                                })
                                .on("resize" + o.eventNamespace, function (a, b) {
                                    l(b);
                                   
                                })
                                .triggerHandler("resize", [v]);
                    }
                })
            );
        };
    })(jQuery),
    !(function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery);
    })(function (a) {
        "use strict";
        function b(a) {
            for (var b, c = a.split(/\s+/), d = [], e = 0; (b = c[e]); e++) (b = b.charAt(0).toUpperCase()), d.push(b);
            return d;
        }
        function c(b) {
            return (b.id && a('label[for="' + b.id + '"]').val()) || b.name;
        }
        function d(b, e, f) {
            return (
                f || (f = 0),
                e.each(function () {
                    var e,
                        g,
                        h = a(this),
                        i = this,
                        j = this.nodeName.toLowerCase();
                    switch (("label" === j && h.find("input, textarea, select").length && ((e = h.text()), (h = h.children().first()), (i = h.get(0)), (j = i.nodeName.toLowerCase())), j)) {
                        case "menu":
                            (g = { name: h.attr("label"), items: {} }), (f = d(g.items, h.children(), f));
                            break;
                        case "a":
                        case "button":
                            g = {
                                name: h.text(),
                                disabled: !!h.attr("disabled"),
                                callback: (function () {
                                    return function () {
                                        h.click();
                                    };
                                })(),
                            };
                            break;
                        case "menuitem":
                        case "command":
                            switch (h.attr("type")) {
                                case void 0:
                                case "command":
                                case "menuitem":
                                    g = {
                                        name: h.attr("label"),
                                        disabled: !!h.attr("disabled"),
                                        icon: h.attr("icon"),
                                        callback: (function () {
                                            return function () {
                                                h.click();
                                            };
                                        })(),
                                    };
                                    break;
                                case "checkbox":
                                    g = { type: "checkbox", disabled: !!h.attr("disabled"), name: h.attr("label"), selected: !!h.attr("checked") };
                                    break;
                                case "radio":
                                    g = { type: "radio", disabled: !!h.attr("disabled"), name: h.attr("label"), radio: h.attr("radiogroup"), value: h.attr("id"), selected: !!h.attr("checked") };
                                    break;
                                default:
                                    g = void 0;
                            }
                            break;
                        case "hr":
                            g = "-------";
                            break;
                        case "input":
                            switch (h.attr("type")) {
                                case "text":
                                    g = { type: "text", name: e || c(i), disabled: !!h.attr("disabled"), value: h.val() };
                                    break;
                                case "checkbox":
                                    g = { type: "checkbox", name: e || c(i), disabled: !!h.attr("disabled"), selected: !!h.attr("checked") };
                                    break;
                                case "radio":
                                    g = { type: "radio", name: e || c(i), disabled: !!h.attr("disabled"), radio: !!h.attr("name"), value: h.val(), selected: !!h.attr("checked") };
                                    break;
                                default:
                                    g = void 0;
                            }
                            break;
                        case "select":
                            (g = { type: "select", name: e || c(i), disabled: !!h.attr("disabled"), selected: h.val(), options: {} }),
                                h.children().each(function () {
                                    g.options[this.value] = a(this).text();
                                });
                            break;
                        case "textarea":
                            g = { type: "textarea", name: e || c(i), disabled: !!h.attr("disabled"), value: h.val() };
                            break;
                        case "label":
                            break;
                        default:
                            g = { type: "html", html: h.clone(!0) };
                    }
                    g && (f++, (b["key" + f] = g));
                }),
                f
            );
        }
        (a.support.htmlMenuitem = "HTMLMenuItemElement" in window),
            (a.support.htmlCommand = "HTMLCommandElement" in window),
            (a.support.eventSelectstart = "onselectstart" in document.documentElement),
            (a.ui && a.widget) ||
                (a.cleanData = (function (b) {
                    return function (c) {
                        var d, e, f;
                        for (f = 0; null != (e = c[f]); f++)
                            try {
                                (d = a._data(e, "events")), d && d.remove && a(e).triggerHandler("remove");
                            } catch (g) {}
                        b(c);
                    };
                })(a.cleanData));
        var e = null,
            f = !1,
            g = a(window),
            h = 0,
            i = {},
            j = {},
            k = {},
            l = {
                selector: null,
                appendTo: null,
                trigger: "right",
                autoHide: !1,
                delay: 200,
                reposition: !0,
                classNames: {
                    hover: "context-menu-hover",
                    disabled: "context-menu-disabled",
                    visible: "context-menu-visible",
                    notSelectable: "context-menu-not-selectable",
                    icon: "context-menu-icon",
                    iconEdit: "context-menu-icon-edit",
                    iconCut: "context-menu-icon-cut",
                    iconCopy: "context-menu-icon-copy",
                    iconPaste: "context-menu-icon-paste",
                    iconDelete: "context-menu-icon-delete",
                    iconAdd: "context-menu-icon-add",
                    iconQuit: "context-menu-icon-quit",
                },
                determinePosition: function (b) {
                    if (a.ui && a.ui.position) b.css("display", "block").position({ my: "center top", at: "center bottom", of: this, offset: "0 5", collision: "fit" }).css("display", "none");
                    else {
                        var c = this.offset();
                        (c.top += this.outerHeight()), (c.left += this.outerWidth() / 2 - b.outerWidth() / 2), b.css(c);
                    }
                },
                position: function (a, b, c) {
                    var d;
                    if (!b && !c) return void a.determinePosition.call(this, a.$menu);
                    d = "maintain" === b && "maintain" === c ? a.$menu.position() : { top: c, left: b };
                    var e = g.scrollTop() + g.height(),
                        f = g.scrollLeft() + g.width(),
                        h = a.$menu.outerHeight(),
                        i = a.$menu.outerWidth();
                    d.top + h > e && (d.top -= h), d.top < 0 && (d.top = 0), d.left + i > f && (d.left -= i), d.left < 0 && (d.left = 0), a.$menu.css(d);
                },
                positionSubmenu: function (b) {
                    if (a.ui && a.ui.position) b.css("display", "block").position({ my: "left top", at: "right top", of: this, collision: "flipfit fit" }).css("display", "");
                    else {
                        var c = { top: 0, left: this.outerWidth() };
                        b.css(c);
                    }
                },
                zIndex: 1,
                animation: { duration: 50, show: "slideDown", hide: "slideUp" },
                events: { show: a.noop, hide: a.noop },
                callback: null,
                items: {},
            },
            m = { timer: null, pageX: null, pageY: null },
            n = function (a) {
                for (var b = 0, c = a; (b = Math.max(b, parseInt(c.css("z-index"), 10) || 0)), (c = c.parent()), c && c.length && !("html body".indexOf(c.prop("nodeName").toLowerCase()) > -1); );
                return b;
            },
            o = {
                abortevent: function (a) {
                    a.preventDefault(), a.stopImmediatePropagation();
                },
                contextmenu: function (b) {
                    var c = a(this);
                    if (
                        ("right" === b.data.trigger && (b.preventDefault(), b.stopImmediatePropagation()),
                        !(
                            ("right" !== b.data.trigger && "demand" !== b.data.trigger && b.originalEvent) ||
                            !(void 0 === b.mouseButton || !b.data || ("left" == b.data.trigger && 0 === b.mouseButton) || ("right" == b.data.trigger && 2 === b.mouseButton)) ||
                            c.hasClass("context-menu-active") ||
                            c.hasClass("context-menu-disabled")
                        ))
                    ) {
                        if (((e = c), b.data.build)) {
                            var d = b.data.build(e, b);
                            if (d === !1) return;
                            if (((b.data = a.extend(!0, {}, l, b.data, d || {})), !b.data.items || a.isEmptyObject(b.data.items)))
                                throw (window.console && (console.error || console.log).call(console, "No items specified to show in contextMenu"), new Error("No Items specified"));
                            (b.data.$trigger = e), p.create(b.data);
                        }
                        var f = !1;
                        for (var g in b.data.items)
                            if (b.data.items.hasOwnProperty(g)) {
                                var h;
                                (h = a.isFunction(b.data.items[g].visible) ? b.data.items[g].visible.call(a(b.currentTarget), g, b.data) : "undefined" == typeof g.visible || b.data.items[g].visible === !0), h && (f = !0);
                            }
                        f && p.show.call(c, b.data, b.pageX, b.pageY);
                    }
                },
                click: function (b) {
                    b.preventDefault(), b.stopImmediatePropagation(), a(this).trigger(a.Event("contextmenu", { data: b.data, pageX: b.pageX, pageY: b.pageY }));
                },
                mousedown: function (b) {
                    var c = a(this);
                    e && e.length && !e.is(c) && e.data("contextMenu").$menu.trigger("contextmenu:hide"), 2 === b.button && (e = c.data("contextMenuActive", !0));
                },
                mouseup: function (b) {
                    var c = a(this);
                    c.data("contextMenuActive") &&
                        e &&
                        e.length &&
                        e.is(c) &&
                        !c.hasClass("context-menu-disabled") &&
                        (b.preventDefault(), b.stopImmediatePropagation(), (e = c), c.trigger(a.Event("contextmenu", { data: b.data, pageX: b.pageX, pageY: b.pageY }))),
                        c.removeData("contextMenuActive");
                },
                mouseenter: function (b) {
                    var c = a(this),
                        d = a(b.relatedTarget),
                        f = a(document);
                    d.is(".context-menu-list") ||
                        d.closest(".context-menu-list").length ||
                        (e && e.length) ||
                        ((m.pageX = b.pageX),
                        (m.pageY = b.pageY),
                        (m.data = b.data),
                        f.on("mousemove.contextMenuShow", o.mousemove),
                        (m.timer = setTimeout(function () {
                            (m.timer = null), f.off("mousemove.contextMenuShow"), (e = c), c.trigger(a.Event("contextmenu", { data: m.data, pageX: m.pageX, pageY: m.pageY }));
                        }, b.data.delay)));
                },
                mousemove: function (a) {
                    (m.pageX = a.pageX), (m.pageY = a.pageY);
                },
                mouseleave: function (b) {
                    var c = a(b.relatedTarget);
                    if (!c.is(".context-menu-list") && !c.closest(".context-menu-list").length) {
                        try {
                            clearTimeout(m.timer);
                        } catch (b) {}
                        m.timer = null;
                    }
                },
                layerClick: function (b) {
                    var c,
                        d,
                        e = a(this),
                        f = e.data("contextMenuRoot"),
                        h = b.button,
                        i = b.pageX,
                        j = b.pageY;
                    b.preventDefault(),
                        b.stopImmediatePropagation(),
                        setTimeout(function () {
                            var e,
                                k = ("left" === f.trigger && 0 === h) || ("right" === f.trigger && 2 === h);
                            if ((document.elementFromPoint && f.$layer && (f.$layer.hide(), (c = document.elementFromPoint(i - g.scrollLeft(), j - g.scrollTop())), f.$layer.show()), f.reposition && k))
                                if (document.elementFromPoint) {
                                    if (f.$trigger.is(c) || f.$trigger.has(c).length) return void f.position.call(f.$trigger, f, i, j);
                                } else if (
                                    ((d = f.$trigger.offset()),
                                    (e = a(window)),
                                    (d.top += e.scrollTop()),
                                    d.top <= b.pageY &&
                                        ((d.left += e.scrollLeft()), d.left <= b.pageX && ((d.bottom = d.top + f.$trigger.outerHeight()), d.bottom >= b.pageY && ((d.right = d.left + f.$trigger.outerWidth()), d.right >= b.pageX))))
                                )
                                    return void f.position.call(f.$trigger, f, i, j);
                            c &&
                                k &&
                                f.$trigger.one("contextmenu:hidden", function () {
                                    a(c).contextMenu({ x: i, y: j, button: h });
                                }),
                                f.$menu.trigger("contextmenu:hide");
                        }, 50);
                },
                keyStop: function (a, b) {
                    b.isInput || a.preventDefault(), a.stopPropagation();
                },
                key: function (a) {
                    var b = {};
                    switch ((e && (b = e.data("contextMenu") || {}), a.keyCode)) {
                        case 9:
                        case 38:
                            if ((o.keyStop(a, b), b.isInput)) {
                                if (9 === a.keyCode && a.shiftKey) return a.preventDefault(), b.$selected && b.$selected.find("input, textarea, select").blur(), void b.$menu.trigger("prevcommand");
                                if (38 === a.keyCode && "checkbox" === b.$selected.find("input, textarea, select").prop("type")) return void a.preventDefault();
                            } else if (9 !== a.keyCode || a.shiftKey) return void b.$menu.trigger("prevcommand");
                        case 40:
                            if ((o.keyStop(a, b), !b.isInput)) return void b.$menu.trigger("nextcommand");
                            if (9 === a.keyCode) return a.preventDefault(), b.$selected && b.$selected.find("input, textarea, select").blur(), void b.$menu.trigger("nextcommand");
                            if (40 === a.keyCode && "checkbox" === b.$selected.find("input, textarea, select").prop("type")) return void a.preventDefault();
                            break;
                        case 37:
                            if ((o.keyStop(a, b), b.isInput || !b.$selected || !b.$selected.length)) break;
                            if (!b.$selected.parent().hasClass("context-menu-root")) {
                                var c = b.$selected.parent().parent();
                                return b.$selected.trigger("contextmenu:blur"), void (b.$selected = c);
                            }
                            break;
                        case 39:
                            if ((o.keyStop(a, b), b.isInput || !b.$selected || !b.$selected.length)) break;
                            var d = b.$selected.data("contextMenu") || {};
                            if (d.$menu && b.$selected.hasClass("context-menu-submenu")) return (b.$selected = null), (d.$selected = null), void d.$menu.trigger("nextcommand");
                            break;
                        case 35:
                        case 36:
                            return b.$selected && b.$selected.find("input, textarea, select").length
                                ? void 0
                                : (((b.$selected && b.$selected.parent()) || b.$menu)
                                      .children(":not(." + b.classNames.disabled + ", ." + b.classNames.notSelectable + ")")
                                      [36 === a.keyCode ? "first" : "last"]()
                                      .trigger("contextmenu:focus"),
                                  void a.preventDefault());
                        case 13:
                            if ((o.keyStop(a, b), b.isInput)) {
                                if (b.$selected && !b.$selected.is("textarea, select")) return void a.preventDefault();
                                break;
                            }
                            return void ("undefined" != typeof b.$selected && null !== b.$selected && b.$selected.trigger("mouseup"));
                        case 32:
                        case 33:
                        case 34:
                            return void o.keyStop(a, b);
                        case 27:
                            return o.keyStop(a, b), void b.$menu.trigger("contextmenu:hide");
                        default:
                            var f = String.fromCharCode(a.keyCode).toUpperCase();
                            if (b.accesskeys && b.accesskeys[f]) return void b.accesskeys[f].$node.trigger(b.accesskeys[f].$menu ? "contextmenu:focus" : "mouseup");
                    }
                    a.stopPropagation(), "undefined" != typeof b.$selected && null !== b.$selected && b.$selected.trigger(a);
                },
                prevItem: function (b) {
                    b.stopPropagation();
                    var c = a(this).data("contextMenu") || {},
                        d = a(this).data("contextMenuRoot") || {};
                    if (c.$selected) {
                        var e = c.$selected;
                        (c = c.$selected.parent().data("contextMenu") || {}), (c.$selected = e);
                    }
                    for (var f = c.$menu.children(), g = c.$selected && c.$selected.prev().length ? c.$selected.prev() : f.last(), h = g; g.hasClass(d.classNames.disabled) || g.hasClass(d.classNames.notSelectable); )
                        if (((g = g.prev().length ? g.prev() : f.last()), g.is(h))) return;
                    c.$selected && o.itemMouseleave.call(c.$selected.get(0), b), o.itemMouseenter.call(g.get(0), b);
                    var i = g.find("input, textarea, select");
                    i.length && i.focus();
                },
                nextItem: function (b) {
                    b.stopPropagation();
                    var c = a(this).data("contextMenu") || {},
                        d = a(this).data("contextMenuRoot") || {};
                    if (c.$selected) {
                        var e = c.$selected;
                        (c = c.$selected.parent().data("contextMenu") || {}), (c.$selected = e);
                    }
                    for (var f = c.$menu.children(), g = c.$selected && c.$selected.next().length ? c.$selected.next() : f.first(), h = g; g.hasClass(d.classNames.disabled) || g.hasClass(d.classNames.notSelectable); )
                        if (((g = g.next().length ? g.next() : f.first()), g.is(h))) return;
                    c.$selected && o.itemMouseleave.call(c.$selected.get(0), b), o.itemMouseenter.call(g.get(0), b);
                    var i = g.find("input, textarea, select");
                    i.length && i.focus();
                },
                focusInput: function () {
                    var b = a(this).closest(".context-menu-item"),
                        c = b.data(),
                        d = c.contextMenu,
                        e = c.contextMenuRoot;
                    (e.$selected = d.$selected = b), (e.isInput = d.isInput = !0);
                },
                blurInput: function () {
                    var b = a(this).closest(".context-menu-item"),
                        c = b.data(),
                        d = c.contextMenu,
                        e = c.contextMenuRoot;
                    e.isInput = d.isInput = !1;
                },
                menuMouseenter: function () {
                    var b = a(this).data().contextMenuRoot;
                    b.hovering = !0;
                },
                menuMouseleave: function (b) {
                    var c = a(this).data().contextMenuRoot;
                    c.$layer && c.$layer.is(b.relatedTarget) && (c.hovering = !1);
                },
                itemMouseenter: function (b) {
                    var c = a(this),
                        d = c.data(),
                        e = d.contextMenu,
                        f = d.contextMenuRoot;
                    return (
                        (f.hovering = !0),
                        b && f.$layer && f.$layer.is(b.relatedTarget) && (b.preventDefault(), b.stopImmediatePropagation()),
                        (e.$menu ? e : f).$menu.children(".hover").trigger("contextmenu:blur"),
                        c.hasClass(f.classNames.disabled) || c.hasClass(f.classNames.notSelectable) ? void (e.$selected = null) : void c.trigger("contextmenu:focus")
                    );
                },
                itemMouseleave: function (b) {
                    var c = a(this),
                        d = c.data(),
                        e = d.contextMenu,
                        f = d.contextMenuRoot;
                    return f !== e && f.$layer && f.$layer.is(b.relatedTarget)
                        ? ("undefined" != typeof f.$selected && null !== f.$selected && f.$selected.trigger("contextmenu:blur"), b.preventDefault(), b.stopImmediatePropagation(), void (f.$selected = e.$selected = e.$node))
                        : void c.trigger("contextmenu:blur");
                },
                itemClick: function (b) {
                    var c,
                        d = a(this),
                        e = d.data(),
                        f = e.contextMenu,
                        g = e.contextMenuRoot,
                        h = e.contextMenuKey;
                    if (f.items[h] && !d.is("." + g.classNames.disabled + ", .context-menu-submenu, .context-menu-separator, ." + g.classNames.notSelectable)) {
                        if ((b.preventDefault(), b.stopImmediatePropagation(), a.isFunction(g.callbacks[h]) && Object.prototype.hasOwnProperty.call(g.callbacks, h))) c = g.callbacks[h];
                        else {
                            if (!a.isFunction(g.callback)) return;
                            c = g.callback;
                        }
                        c.call(g.$trigger, h, g) !== !1 ? g.$menu.trigger("contextmenu:hide") : g.$menu.parent().length && p.update.call(g.$trigger, g);
                    }
                },
                inputClick: function (a) {
                    a.stopImmediatePropagation();
                },
                hideMenu: function (b, c) {
                    var d = a(this).data("contextMenuRoot");
                    p.hide.call(d.$trigger, d, c && c.force);
                },
                focusItem: function (b) {
                    b.stopPropagation();
                    var c = a(this),
                        d = c.data(),
                        e = d.contextMenu,
                        f = d.contextMenuRoot;
                    c.addClass([f.classNames.hover, f.classNames.visible].join(" ")).siblings().removeClass(f.classNames.visible).filter(f.classNames.hover).trigger("contextmenu:blur"),
                        (e.$selected = f.$selected = c),
                        e.$node && f.positionSubmenu.call(e.$node, e.$menu);
                },
                blurItem: function (b) {
                    b.stopPropagation();
                    var c = a(this),
                        d = c.data(),
                        e = d.contextMenu,
                        f = d.contextMenuRoot;
                    e.autoHide && c.removeClass(f.classNames.visible), c.removeClass(f.classNames.hover), (e.$selected = null);
                },
            },
            p = {
                show: function (b, c, d) {
                    var f = a(this),
                        g = {};
                    return (
                        a("#context-menu-layer").trigger("mousedown"),
                        (b.$trigger = f),
                        b.events.show.call(f, b) === !1
                            ? void (e = null)
                            : (p.update.call(f, b),
                              b.position.call(f, b, c, d),
                              b.zIndex && (g.zIndex = n(f) + b.zIndex),
                              p.layer.call(b.$menu, b, g.zIndex),
                              b.$menu.find("ul").css("zIndex", g.zIndex + 1),
                              b.$menu.css(g)[b.animation.show](b.animation.duration, function () {
                                  f.trigger("contextmenu:visible");
                              }),
                              f.data("contextMenu", b).addClass("context-menu-active"),
                              a(document).off("keydown.contextMenu").on("keydown.contextMenu", o.key),
                              void (
                                  b.autoHide &&
                                  a(document).on("mousemove.contextMenuAutoHide", function (a) {
                                      var c = f.offset();
                                      (c.right = c.left + f.outerWidth()),
                                          (c.bottom = c.top + f.outerHeight()),
                                          !b.$layer || b.hovering || (a.pageX >= c.left && a.pageX <= c.right && a.pageY >= c.top && a.pageY <= c.bottom) || b.$menu.trigger("contextmenu:hide");
                                  })
                              ))
                    );
                },
                hide: function (b, c) {
                    var d = a(this);
                    if ((b || (b = d.data("contextMenu") || {}), c || !b.events || b.events.hide.call(d, b) !== !1)) {
                        if ((d.removeData("contextMenu").removeClass("context-menu-active"), b.$layer)) {
                            setTimeout(
                                (function (a) {
                                    return function () {
                                        a.remove();
                                    };
                                })(b.$layer),
                                10
                            );
                            try {
                                delete b.$layer;
                            } catch (f) {
                                b.$layer = null;
                            }
                        }
                        (e = null),
                            b.$menu.find("." + b.classNames.hover).trigger("contextmenu:blur"),
                            (b.$selected = null),
                            a(document).off(".contextMenuAutoHide").off("keydown.contextMenu"),
                            b.$menu &&
                                b.$menu[b.animation.hide](b.animation.duration, function () {
                                    b.build &&
                                        (b.$menu.remove(),
                                        a.each(b, function (a) {
                                            switch (a) {
                                                case "ns":
                                                case "selector":
                                                case "build":
                                                case "trigger":
                                                    return !0;
                                                default:
                                                    b[a] = void 0;
                                                    try {
                                                        delete b[a];
                                                    } catch (c) {}
                                                    return !0;
                                            }
                                        })),
                                        setTimeout(function () {
                                            d.trigger("contextmenu:hidden");
                                        }, 10);
                                });
                    }
                },
                create: function (c, d) {
                    function e(b) {
                        var c = a("<span></span>");
                        return (
                            b._accesskey
                                ? (b._beforeAccesskey && c.append(document.createTextNode(b._beforeAccesskey)),
                                  a("<span></span>").addClass("context-menu-accesskey").text(b._accesskey).appendTo(c),
                                  b._afterAccesskey && c.append(document.createTextNode(b._afterAccesskey)))
                                : c.text(b.name),
                            c
                        );
                    }
                    void 0 === d && (d = c),
                        (c.$menu = a('<ul class="context-menu-list"></ul>')
                            .addClass(c.className || "")
                            .data({ contextMenu: c, contextMenuRoot: d })),
                        a.each(["callbacks", "commands", "inputs"], function (a, b) {
                            (c[b] = {}), d[b] || (d[b] = {});
                        }),
                        d.accesskeys || (d.accesskeys = {}),
                        a.each(c.items, function (f, g) {
                            var h = a('<li class="context-menu-item"></li>').addClass(g.className || ""),
                                i = null,
                                j = null;
                            if ((h.on("click", a.noop), "string" == typeof g && (g = { type: "cm_seperator" }), (g.$node = h.data({ contextMenu: c, contextMenuRoot: d, contextMenuKey: f })), "undefined" != typeof g.accesskey))
                                for (var l, m = b(g.accesskey), n = 0; (l = m[n]); n++)
                                    if (!d.accesskeys[l]) {
                                        d.accesskeys[l] = g;
                                        var q = g.name.match(new RegExp("^(.*?)(" + l + ")(.*)$", "i"));
                                        q && ((g._beforeAccesskey = q[1]), (g._accesskey = q[2]), (g._afterAccesskey = q[3]));
                                        break;
                                    }
                            if (g.type && k[g.type])
                                k[g.type].call(h, g, c, d),
                                    a.each([c, d], function (b, c) {
                                        (c.commands[f] = g), a.isFunction(g.callback) && (c.callbacks[f] = g.callback);
                                    });
                            else {
                                switch (
                                    ("cm_seperator" === g.type
                                        ? h.addClass("context-menu-separator " + d.classNames.notSelectable)
                                        : "html" === g.type
                                        ? h.addClass("context-menu-html " + d.classNames.notSelectable)
                                        : g.type
                                        ? ((i = a("<label></label>").appendTo(h)),
                                          e(g).appendTo(i),
                                          h.addClass("context-menu-input"),
                                          (c.hasTypes = !0),
                                          a.each([c, d], function (a, b) {
                                              (b.commands[f] = g), (b.inputs[f] = g);
                                          }))
                                        : g.items && (g.type = "sub"),
                                    g.type)
                                ) {
                                    case "seperator":
                                        break;
                                    case "text":
                                        j = a('<input type="text" value="1" name="" value="">')
                                            .attr("name", "context-menu-input-" + f)
                                            .val(g.value || "")
                                            .appendTo(i);
                                        break;
                                    case "textarea":
                                        (j = a('<textarea name=""></textarea>')
                                            .attr("name", "context-menu-input-" + f)
                                            .val(g.value || "")
                                            .appendTo(i)),
                                            g.height && j.height(g.height);
                                        break;
                                    case "checkbox":
                                        j = a('<input type="checkbox" value="1" name="" value="">')
                                            .attr("name", "context-menu-input-" + f)
                                            .val(g.value || "")
                                            .prop("checked", !!g.selected)
                                            .prependTo(i);
                                        break;
                                    case "radio":
                                        j = a('<input type="radio" value="1" name="" value="">')
                                            .attr("name", "context-menu-input-" + g.radio)
                                            .val(g.value || "")
                                            .prop("checked", !!g.selected)
                                            .prependTo(i);
                                        break;
                                    case "select":
                                        (j = a('<select name="">')
                                            .attr("name", "context-menu-input-" + f)
                                            .appendTo(i)),
                                            g.options &&
                                                (a.each(g.options, function (b, c) {
                                                    a("<option></option>").val(b).text(c).appendTo(j);
                                                }),
                                                j.val(g.selected));
                                        break;
                                    case "sub":
                                        e(g).appendTo(h), (g.appendTo = g.$node), p.create(g, d), h.data("contextMenu", g).addClass("context-menu-submenu"), (g.callback = null);
                                        break;
                                    case "html":
                                        a(g.html).appendTo(h);
                                        break;
                                    default:
                                        a.each([c, d], function (b, c) {
                                            (c.commands[f] = g), a.isFunction(g.callback) && (c.callbacks[f] = g.callback);
                                        }),
                                            e(g).appendTo(h);
                                }
                                g.type && "sub" !== g.type && "html" !== g.type && "cm_seperator" !== g.type && (j.on("focus", o.focusInput).on("blur", o.blurInput), g.events && j.on(g.events, c)),
                                    g.icon && (a.isFunction(g.icon) ? (g._icon = g.icon.call(this, this, h, f, g)) : (g._icon = d.classNames.icon + "-" + g.icon), h.addClass(g._icon));
                            }
                            (g.$input = j), (g.$label = i), h.appendTo(c.$menu), !c.hasTypes && a.support.eventSelectstart && h.on("selectstart.disableTextSelect", o.abortevent);
                        }),
                        c.$node || c.$menu.css("display", "none").addClass("context-menu-root"),
                        c.$menu.appendTo(c.appendTo || document.body);
                },
                resize: function (b, c) {
                    b.css({ position: "absolute", display: "block" }),
                        b.data("width", Math.ceil(b.width())),
                        b.css({ position: "static", minWidth: "0px", maxWidth: "100000px" }),
                        b.find("> li > ul").each(function () {
                            p.resize(a(this), !0);
                        }),
                        c ||
                            b
                                .find("ul")
                                .addBack()
                                .css({ position: "", display: "", minWidth: "", maxWidth: "" })
                                .width(function () {
                                    return a(this).data("width");
                                });
                },
                update: function (b, c) {
                    var d = this;
                    void 0 === c && ((c = b), p.resize(b.$menu)),
                        b.$menu.children().each(function () {
                            var e,
                                f = a(this),
                                g = f.data("contextMenuKey"),
                                h = b.items[g],
                                i = (a.isFunction(h.disabled) && h.disabled.call(d, g, c)) || h.disabled === !0;
                            if (
                                ((e = a.isFunction(h.visible) ? h.visible.call(d, g, c) : "undefined" == typeof h.visible || h.visible === !0),
                                f[e ? "show" : "hide"](),
                                f[i ? "addClass" : "removeClass"](c.classNames.disabled),
                                a.isFunction(h.icon) && (f.removeClass(h._icon), (h._icon = h.icon.call(this, d, f, g, h)), f.addClass(h._icon)),
                                h.type)
                            )
                                switch ((f.find("input, select, textarea").prop("disabled", i), h.type)) {
                                    case "text":
                                    case "textarea":
                                        h.$input.val(h.value || "");
                                        break;
                                    case "checkbox":
                                    case "radio":
                                        h.$input.val(h.value || "").prop("checked", !!h.selected);
                                        break;
                                    case "select":
                                        h.$input.val(h.selected || "");
                                }
                            h.$menu && p.update.call(d, h, c);
                        });
                },
                layer: function (b, c) {
                    var d = (b.$layer = a('<div id="context-menu-layer" style="position:fixed; z-index:' + c + '; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>')
                        .css({ height: g.height(), width: g.width(), display: "block" })
                        .data("contextMenuRoot", b)
                        .insertBefore(this)
                        .on("contextmenu", o.abortevent)
                        .on("mousedown", o.layerClick));
                    return void 0 === document.body.style.maxWidth && d.css({ position: "absolute", height: a(document).height() }), d;
                },
            };
        (a.fn.contextMenu = function (b) {
            var c = this,
                d = b;
            if (this.length > 0)
                if (void 0 === b) this.first().trigger("contextmenu");
                else if (void 0 !== b.x && void 0 !== b.y) this.first().trigger(a.Event("contextmenu", { pageX: b.x, pageY: b.y, mouseButton: b.button }));
                else if ("hide" === b) {
                    var e = this.first().data("contextMenu") ? this.first().data("contextMenu").$menu : null;
                    e && e.trigger("contextmenu:hide");
                } else
                    "destroy" === b
                        ? a.contextMenu("destroy", { context: this })
                        : a.isPlainObject(b)
                        ? ((b.context = this), a.contextMenu("create", b))
                        : b
                        ? this.removeClass("context-menu-disabled")
                        : b || this.addClass("context-menu-disabled");
            else
                a.each(j, function () {
                    this.selector === c.selector && ((d.data = this), a.extend(d.data, { trigger: "demand" }));
                }),
                    o.contextmenu.call(d.target, d);
            return this;
        }),
            (a.contextMenu = function (b, c) {
                "string" != typeof b && ((c = b), (b = "create")), "string" == typeof c ? (c = { selector: c }) : void 0 === c && (c = {});
                var d = a.extend(!0, {}, l, c || {}),
                    e = a(document),
                    g = e,
                    k = !1;
                switch ((d.context && d.context.length ? ((g = a(d.context).first()), (d.context = g.get(0)), (k = d.context !== document)) : (d.context = document), b)) {
                    case "create":
                        if (!d.selector) throw new Error("No selector specified");
                        if (d.selector.match(/.context-menu-(list|item|input)($|\s)/)) throw new Error('Cannot bind to selector "' + d.selector + '" as it contains a reserved className');
                        if (!d.build && (!d.items || a.isEmptyObject(d.items))) throw new Error("No Items specified");
                        switch (
                            (h++,
                            (d.ns = ".contextMenu" + h),
                            k || (i[d.selector] = d.ns),
                            (j[d.ns] = d),
                            d.trigger || (d.trigger = "right"),
                            f ||
                                (e
                                    .on(
                                        {
                                            "contextmenu:hide.contextMenu": o.hideMenu,
                                            "prevcommand.contextMenu": o.prevItem,
                                            "nextcommand.contextMenu": o.nextItem,
                                            "contextmenu.contextMenu": o.abortevent,
                                            "mouseenter.contextMenu": o.menuMouseenter,
                                            "mouseleave.contextMenu": o.menuMouseleave,
                                        },
                                        ".context-menu-list"
                                    )
                                    .on("mouseup.contextMenu", ".context-menu-input", o.inputClick)
                                    .on(
                                        {
                                            "mouseup.contextMenu": o.itemClick,
                                            "contextmenu:focus.contextMenu": o.focusItem,
                                            "contextmenu:blur.contextMenu": o.blurItem,
                                            "contextmenu.contextMenu": o.abortevent,
                                            "mouseenter.contextMenu": o.itemMouseenter,
                                            "mouseleave.contextMenu": o.itemMouseleave,
                                        },
                                        ".context-menu-item"
                                    ),
                                (f = !0)),
                            g.on("contextmenu" + d.ns, d.selector, d, o.contextmenu),
                            k &&
                                g.on("remove" + d.ns, function () {
                                    a(this).contextMenu("destroy");
                                }),
                            d.trigger)
                        ) {
                            case "hover":
                                g.on("mouseenter" + d.ns, d.selector, d, o.mouseenter).on("mouseleave" + d.ns, d.selector, d, o.mouseleave);
                                break;
                            case "left":
                                g.on("click" + d.ns, d.selector, d, o.click);
                        }
                        d.build || p.create(d);
                        break;
                    case "destroy":
                        var m;
                        if (k) {
                            var n = d.context;
                            a.each(j, function (b, c) {
                                if (c.context !== n) return !0;
                                (m = a(".context-menu-list").filter(":visible")), m.length && m.data().contextMenuRoot.$trigger.is(a(c.context).find(c.selector)) && m.trigger("contextmenu:hide", { force: !0 });
                                try {
                                    j[c.ns].$menu && j[c.ns].$menu.remove(), delete j[c.ns];
                                } catch (d) {
                                    j[c.ns] = null;
                                }
                                return a(c.context).off(c.ns), !0;
                            });
                        } else if (d.selector) {
                            if (i[d.selector]) {
                                (m = a(".context-menu-list").filter(":visible")), m.length && m.data().contextMenuRoot.$trigger.is(d.selector) && m.trigger("contextmenu:hide", { force: !0 });
                                try {
                                    j[i[d.selector]].$menu && j[i[d.selector]].$menu.remove(), delete j[i[d.selector]];
                                } catch (q) {
                                    j[i[d.selector]] = null;
                                }
                                e.off(i[d.selector]);
                            }
                        } else
                            e.off(".contextMenu .contextMenuAutoHide"),
                                a.each(j, function (b, c) {
                                    a(c.context).off(c.ns);
                                }),
                                (i = {}),
                                (j = {}),
                                (h = 0),
                                (f = !1),
                                a("#context-menu-layer, .context-menu-list").remove();
                        break;
                    case "html5":
                        ((!a.support.htmlCommand && !a.support.htmlMenuitem) || ("boolean" == typeof c && c)) &&
                            a('menu[type="context"]')
                                .each(function () {
                                    this.id && a.contextMenu({ selector: "[contextmenu=" + this.id + "]", items: a.contextMenu.fromMenu(this) });
                                })
                                .css("display", "none");
                        break;
                    default:
                        throw new Error('Unknown operation "' + b + '"');
                }
                return this;
            }),
            (a.contextMenu.setInputValues = function (b, c) {
                void 0 === c && (c = {}),
                    a.each(b.inputs, function (a, b) {
                        switch (b.type) {
                            case "text":
                            case "textarea":
                                b.value = c[a] || "";
                                break;
                            case "checkbox":
                                b.selected = !!c[a];
                                break;
                            case "radio":
                                b.selected = (c[b.radio] || "") === b.value;
                                break;
                            case "select":
                                b.selected = c[a] || "";
                        }
                    });
            }),
            (a.contextMenu.getInputValues = function (b, c) {
                return (
                    void 0 === c && (c = {}),
                    a.each(b.inputs, function (a, b) {
                        switch (b.type) {
                            case "text":
                            case "textarea":
                            case "select":
                                c[a] = b.$input.val();
                                break;
                            case "checkbox":
                                c[a] = b.$input.prop("checked");
                                break;
                            case "radio":
                                b.$input.prop("checked") && (c[b.radio] = b.value);
                        }
                    }),
                    c
                );
            }),
            (a.contextMenu.fromMenu = function (b) {
                var c = a(b),
                    e = {};
                return d(e, c.children()), e;
            }),
            (a.contextMenu.defaults = l),
            (a.contextMenu.types = k),
            (a.contextMenu.handle = o),
            (a.contextMenu.op = p),
            (a.contextMenu.menus = j);
    }),
    !(function () {
        "use strict";
        function a(a) {
            if (a) {
                var b = function () {
                    a && a.parentNode && a.parentNode.removeChild(a);
                };
                e(a, "show"), f(a, "hide"), a.addEventListener("transitionend", b), setTimeout(b, j);
            }
        }
        function b(a) {
            var b = a.offsetHeight,
                c = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                d = c / 2 - b / 2;
            a.style.top = d + "px";
        }
        function c(a) {
            var b = document.createElement("div");
            return (b.innerHTML = a), b.firstChild;
        }
        function d(a, b) {
            var c = "data-" + b,
                d = document.createElement("div");
            d.appendChild(a);
            var e = d.querySelector("[" + c + "]");
            if (!e) throw new Error('Unable to find: "' + c + '" attribute.');
            return e;
        }
        function e(a, b) {
            var c = a.getAttribute("class"),
                d = c ? c.split(" ") : [],
                e = d.indexOf(b);
            e !== -1 && d.splice(e, 1), (a.className = d.join(" "));
        }
        function f(a, b) {
            var c = a.getAttribute("class"),
                d = c ? c.split(" ") : [];
            d.push(b), (a.className = d.join(" "));
        }
        function g(a) {
            return JSON.parse(JSON.stringify(a));
        }
        function h() {
            var h = {
                    parent: document.body,
                    dialogWidth: "400px",
                    dialogPersistent: !0,
                    dialogContainerClass: "alertify",
                    dialogButtons: {
                        ok: { label: "Ok", autoClose: !0, template: '<button data-alertify-btn="ok" tabindex="1"></button>' },
                        cancel: { label: "Cancel", autoClose: !0, template: '<button data-alertify-btn="cancel" tabindex="2"></button>' },
                        custom: { label: "Custom", autoClose: !1, template: '<button data-alertify-btn tabindex="3"></button>' },
                    },
                    logDelay: 5e3,
                    logMaxItems: 2,
                    logPosition: { v: "bottom", h: "left" },
                    logContainerClass: "alertify-logs",
                    logTemplateMethod: null,
                    templates: {
                        dialogButtonsHolder: "<nav data-alertify-btn-holder></nav>",
                        dialogMessage: "<div data-alertify-msg></div>",
                        dialogInput: '<input data-alertify-input type="text">',
                        logMessage: "<div data-alertify-log-msg></div>",
                    },
                },
                j = function (b) {
                    var e = this;
                    (this.type = b),
                        (this.fixed = !1),
                        (this.template = k.logTemplateMethod),
                        (this.dom = {}),
                        (this.createDomElements = function (a) {
                            (this.dom.wrapper = c(a)),
                                (this.dom.message = d(this.dom.wrapper, "alertify-log-msg")),
                                setTimeout(function () {
                                    e.dom.wrapper.className += " show";
                                }, 10);
                        }),
                        (this.getDomElements = function () {
                            return this.dom;
                        }),
                        (this.setMessage = function (a) {
                            var b = a;
                            this.template && (b = this.template(a)), b instanceof HTMLElement ? ((this.dom.message.innerHTML = ""), this.dom.message.appendChild(b)) : (this.dom.message.innerHTML = b);
                        }),
                        (this.setType = function (a) {
                            f(this.dom.message, a);
                        }),
                        (this.setClickEvent = function (a) {
                            this.dom.wrapper.addEventListener("click", function (b) {
                                a(b, e);
                            });
                        }),
                        (this.injectHtml = function () {
                            var a = i.elements;
                            0 === a.length || "top" === k.logPosition.v ? i.container.appendChild(this.dom.wrapper) : i.container.insertBefore(this.dom.wrapper, a[a.length - 1].dom.wrapper), i.elements.push(this);
                        }),
                        (this.stick = function (a) {
                            this.fixed = a;
                        }),
                        (this.isFixed = function () {
                            return this.fixed;
                        }),
                        (this.remove = function () {
                            a(this.dom.wrapper);
                            var b = i.elements.indexOf(this);
                            b > -1 && i.elements.splice(b, 1);
                        });
                },
                k = {
                    version: "1.0.11",
                    parent: h.parent,
                    dialogWidth: h.dialogWidth,
                    dialogPersistent: h.dialogPersistent,
                    dialogContainerClass: h.dialogContainerClass,
                    dialogButtons: g(h.dialogButtons),
                    promptValue: "",
                    logDelay: h.logDelay,
                    logMaxItems: h.logMaxItems,
                    logPosition: h.logPosition,
                    logContainerClass: h.logContainerClass,
                    logTemplateMethod: h.logTemplateMethod,
                    templates: g(h.templates),
                    build: function (a, b) {
                        var e = {};
                        if (
                            ((e.container = document.createElement("div")),
                            (e.container.className = this.dialogContainerClass + " hide"),
                            (e.wrapper = document.createElement("div")),
                            (e.wrapper.className = "dialog"),
                            (e.dialog = document.createElement("div")),
                            (e.dialog.style.width = this.dialogWidth),
                            (e.content = document.createElement("div")),
                            (e.content.className = "content"),
                            "dialog" === a.type
                                ? (e.content.innerHTML = a.message)
                                : ((e.messageWrapper = c(this.templates.dialogMessage)), (e.message = d(e.messageWrapper, "alertify-msg")), (e.message.innerHTML = a.message), e.content.appendChild(e.messageWrapper)),
                            (e.buttonsWrapper = c(this.templates.dialogButtonsHolder)),
                            (e.buttonsHolder = d(e.buttonsWrapper, "alertify-btn-holder")),
                            "prompt" === a.type)
                        ) {
                            var f = c(this.templates.dialogInput);
                            (e.input = d(f, "alertify-input")), e.content.appendChild(f);
                        }
                        e.container.appendChild(e.wrapper), e.wrapper.appendChild(e.dialog), e.dialog.appendChild(e.content), e.dialog.appendChild(e.buttonsWrapper), (e.buttonsHolder.innerHTML = ""), (e.buttons = []);
                        for (var g = 0; g < b.length; g++) {
                            var h = d(b[g].element, "alertify-btn");
                            (h.innerHTML = b[g].label), e.buttonsHolder.appendChild(b[g].element);
                        }
                        return e;
                    },
                    prepareDialogButton: function (a, b) {
                        var c = {};
                        return !b || "object" != typeof b || b instanceof Array || (c = b), "function" == typeof b && (c.click = b), (c.type = a), c;
                    },
                    createButtonsDefinition: function (a) {
                        for (var b = [], d = 0; d < a.buttons.length; d++) {
                            var e = this.buildButtonObject(a.buttons[d]);
                            ("dialog" === a.type || ("alert" === a.type && "ok" === e.type) || (["confirm", "prompt"].indexOf(a.type) !== -1 && ["ok", "cancel"].indexOf(e.type) !== -1)) && ((e.element = c(e.template)), b.push(e));
                        }
                        return b;
                    },
                    buildButtonObject: function (a) {
                        var b = {},
                            c = a.type || "custom",
                            d = this.dialogButtons,
                            e = ["ok", "cancel", "custom"];
                        if ("undefined" != typeof a.type && e.indexOf(a.type) === -1) throw new Error('Wrong button type: "' + a.type + '". Valid values: "' + e.join('", "') + '"');
                        return (
                            (b.type = c),
                            (b.label = "undefined" != typeof a.label ? a.label : d[c].label),
                            (b.autoClose = "undefined" != typeof a.autoClose ? a.autoClose : d[c].autoClose),
                            (b.template = "undefined" != typeof a.template ? a.template : d[c].template),
                            (b.click = "undefined" != typeof a.click ? a.click : d[c].click),
                            b
                        );
                    },
                    close: function (a, b) {
                        (b = b && !isNaN(+b) ? +b : this.logDelay),
                            b < 0
                                ? a.remove()
                                : b > 0 &&
                                  setTimeout(function () {
                                      a.remove();
                                  }, b);
                    },
                    dialog: function (a, b, c) {
                        return this.setup({ type: b, message: a, buttons: c });
                    },
                    log: function (a, b, c) {
                        for (var d = i.elements, e = [], f = 0, g = d.length; f < g; f++) d[f].isFixed() || e.push(d[f]);
                        var h = e.length - this.logMaxItems;
                        if (h >= 0) for (var j = 0, k = h + 1; j < k; j++) this.close(e[j], -1);
                        this.notify(a, b, c);
                    },
                    setLogContainerClass: function (a) {
                        this.logContainerClass = h.logContainerClass + " " + a;
                    },
                    setLogPosition: function (a) {
                        var b = a.split(" ");
                        if (["top", "bottom"].indexOf(b[0]) === -1 || ["left", "right"].indexOf(b[1]) === -1) throw new Error('Wrong value for "logPosition" parameter.');
                        this.logPosition = { v: b[0], h: b[1] };
                    },
                    setLogFixed: function (a) {
                        if ("boolean" != typeof a) throw new Error('Wrong value for "logFixed" parameter. Should be boolean.');
                        this.logFixed = a;
                    },
                    setupLogContainer: function () {
                        var b = this.logPosition.v + " " + this.logPosition.h,
                            c = this.logContainerClass + " " + b,
                            d = i.container && i.container.parentNode !== this.parent;
                        (i.container && !d) || (d && a(i.container), (i.elements = []), (i.container = document.createElement("div")), (i.container.className = c), this.parent.appendChild(i.container)),
                            i.container.className !== c && (i.container.className = c);
                    },
                    notify: function (a, b, c) {
                        this.setupLogContainer();
                        var d = new j();
                        d.createDomElements(this.templates.logMessage), d.setMessage(a), d.setType(b), "function" == typeof c && d.setClickEvent(c), d.injectHtml(), this.close(d, this.logDelay);
                    },
                    setup: function (c) {
                        function d(a) {
                            "function" != typeof a && (a = function () {});
                            for (var b = 0; b < h.length; b++) {
                                var c = h[b],
                                    d = (function (b) {
                                        return function (c) {
                                            (g = b), b.click && "function" == typeof b.click && b.click(c, j), a({ ui: j, event: c }), b.autoClose === !0 && j.closeDialog();
                                        };
                                    })(c);
                                c.element.addEventListener("click", d);
                            }
                            k &&
                                k.addEventListener("keyup", function (a) {
                                    13 === a.which && f.click();
                                });
                        }
                        for (var f, g, h = this.createButtonsDefinition(c), i = this.build(c, h), j = {}, k = i.input, l = 0; l < h.length; l++) "ok" === h[l].type && (f = h[l].element);
                        k && "string" == typeof this.promptValue && (k.value = this.promptValue),
                            (j.dom = i),
                            (j.closeDialog = function () {
                                a(i.container);
                            }),
                            (j.centerDialog = function () {
                                b(i.wrapper);
                            }),
                            (j.setMessage = function (a) {
                                i.message.innerHTML = a;
                            }),
                            (j.setContent = function (a) {
                                i.content.innerHTML = a;
                            }),
                            (j.getInputValue = function () {
                                if (i.input) return i.input.value;
                            }),
                            (j.getButtonObject = function () {
                                if (g) return { type: g.type, label: g.label, autoClose: g.autoClose, element: g.element };
                            });
                        var m;
                        return (
                            "function" == typeof Promise ? (m = new Promise(d)) : d(),
                            this.dialogPersistent === !1 &&
                                i.container.addEventListener("click", function (b) {
                                    (b.target !== this && b.target !== i.wrapper) || a(i.container);
                                }),
                            (window.onresize = function () {
                                j.centerDialog();
                            }),
                            this.parent.appendChild(i.container),
                            setTimeout(function () {
                                e(i.container, "hide"), j.centerDialog(), k && c.type && "prompt" === c.type ? (k.select(), k.focus()) : f && f.focus();
                            }, 100),
                            m
                        );
                    },
                    setLogDelay: function (a) {
                        return (a = a || 0), (this.logDelay = isNaN(a) ? h.logDelay : parseInt(a, 10)), this;
                    },
                    setLogMaxItems: function (a) {
                        this.logMaxItems = parseInt(a || h.logMaxItems);
                    },
                    setDialogWidth: function (a) {
                        "number" == typeof a && (a += "px"), (this.dialogWidth = "string" == typeof a ? a : h.dialogWidth);
                    },
                    setDialogPersistent: function (a) {
                        this.dialogPersistent = a;
                    },
                    setDialogContainerClass: function (a) {
                        this.dialogContainerClass = h.dialogContainerClass + " " + a;
                    },
                    setTheme: function (a) {
                        if (a) {
                            if ("string" == typeof a)
                                switch (a.toLowerCase()) {
                                    case "bootstrap":
                                        (this.dialogButtons.ok.template = '<button data-alertify-btn="ok" class="btn btn-primary" tabindex="1"></button>'),
                                            (this.dialogButtons.cancel.template = '<button data-alertify-btn="cancel" class="btn btn-danger" tabindex="2"></button>'),
                                            (this.dialogButtons.custom.template = '<button data-alertify-btn="custom" class="btn btn-default" tabindex="3"></button>'),
                                            (this.templates.dialogInput = "<input data-alertify-input class='form-control' type='text'>");
                                        break;
                                    case "purecss":
                                        (this.dialogButtons.ok.template = '<button data-alertify-btn="ok" class="pure-button" tabindex="1"></button>'),
                                            (this.dialogButtons.cancel.template = '<button data-alertify-btn="cancel" class="pure-button" tabindex="2"></button>'),
                                            (this.dialogButtons.custom.template = '<button data-alertify-btn="custom" class="pure-button" tabindex="3"></button>');
                                        break;
                                    case "mdl":
                                    case "material-design-light":
                                        (this.dialogButtons.ok.template = '<button data-alertify-btn="ok" class=" mdl-button mdl-js-button mdl-js-ripple-effect"  tabindex="1"></button>'),
                                            (this.dialogButtons.cancel.template = '<button data-alertify-btn="cancel" class=" mdl-button mdl-js-button mdl-js-ripple-effect" tabindex="2"></button>'),
                                            (this.dialogButtons.custom.template = '<button data-alertify-btn="custom" class=" mdl-button mdl-js-button mdl-js-ripple-effect" tabindex="3"></button>'),
                                            (this.templates.dialogInput = '<div class="mdl-textfield mdl-js-textfield"><input data-alertify-input class="mdl-textfield__input"></div>');
                                        break;
                                    case "angular-material":
                                        (this.dialogButtons.ok.template = '<button data-alertify-btn="ok" class="md-primary md-button" tabindex="1"></button>'),
                                            (this.dialogButtons.cancel.template = '<button data-alertify-btn="cancel" class="md-button" tabindex="2"></button>'),
                                            (this.dialogButtons.custom.template = '<button data-alertify-btn="custom" class="md-button" tabindex="3"></button>'),
                                            (this.templates.dialogInput = '<div layout="column"><md-input-container md-no-float><input data-alertify-input type="text"></md-input-container></div>');
                                        break;
                                    case "default":
                                    default:
                                        (this.dialogButtons = g(h.dialogButtons)), (this.templates = g(h.templates));
                                }
                            if ("object" == typeof a) {
                                var b = Object.keys(this.templates);
                                for (var c in a) {
                                    if (b.indexOf(c) === -1) throw new Error('Wrong template name: "' + c + '". Valid values: "' + b.join('", "') + '"');
                                    this.templates[c] = a[c];
                                }
                            }
                        }
                    },
                    reset: function () {
                        this.setTheme("default"),
                            (this.parent = h.parent),
                            (this.dialogWidth = h.dialogWidth),
                            (this.dialogPersistent = h.dialogPersistent),
                            (this.dialogContainerClass = h.dialogContainerClass),
                            (this.promptValue = ""),
                            (this.logDelay = h.logDelay),
                            (this.logMaxItems = h.logMaxItems),
                            (this.logPosition = h.logPosition),
                            (this.logContainerClass = h.logContainerClass),
                            (this.logTemplateMethod = h.logTemplateMethod);
                    },
                    injectCSS: function () {
                        if (!document.querySelector("#alertifyCSS")) {
                            var a = document.getElementsByTagName("head")[0],
                                b = document.createElement("style");
                            (b.type = "text/css"), (b.id = "alertifyCSS"), a.insertBefore(b, a.firstChild);
                        }
                    },
                    removeCSS: function () {
                        var a = document.querySelector("#alertifyCSS");
                        a && a.parentNode && a.parentNode.removeChild(a);
                    },
                };
            return (
                k.injectCSS(),
                {
                    _$$alertify: k,
                    _$$defaults: h,
                    reset: function () {
                        return k.reset(), this;
                    },
                    parent: function (a) {
                        k.parent = a;
                    },
                    theme: function (a) {
                        return k.setTheme(a), this;
                    },
                    dialog: function (a, b) {
                        return k.dialog(a, "dialog", b) || this;
                    },
                    alert: function (a, b) {
                        var c = [k.prepareDialogButton("ok", b)];
                        return k.dialog(a, "alert", c) || this;
                    },
                    confirm: function (a, b, c) {
                        var d = [k.prepareDialogButton("ok", b), k.prepareDialogButton("cancel", c)];
                        return k.dialog(a, "confirm", d) || this;
                    },
                    prompt: function (a, b, c, d) {
                        var e = [k.prepareDialogButton("ok", c), k.prepareDialogButton("cancel", d)];
                        return (k.promptValue = b || ""), k.dialog(a, "prompt", e) || this;
                    },
                    dialogWidth: function (a) {
                        return k.setDialogWidth(a), this;
                    },
                    dialogPersistent: function (a) {
                        return k.setDialogPersistent(a), this;
                    },
                    dialogContainerClass: function (a) {
                        return k.setDialogContainerClass(a || ""), this;
                    },
                    clearDialogs: function () {
                        for (var a; (a = k.parent.querySelector(":scope > ." + h.dialogContainerClass)); ) k.parent.removeChild(a);
                        return this;
                    },
                    log: function (a, b) {
                        return k.log(a, "default", b), this;
                    },
                    success: function (a, b) {
                        return k.log(a, "success", b), this;
                    },
                    warning: function (a, b) {
                        return k.log(a, "warning", b), this;
                    },
                    error: function (a, b) {
                        return k.log(a, "error", b), this;
                    },
                    logDelay: function (a) {
                        return k.setLogDelay(a), this;
                    },
                    logMaxItems: function (a) {
                        return k.setLogMaxItems(a), this;
                    },
                    logPosition: function (a) {
                        return k.setLogPosition(a || ""), this;
                    },
                    logContainerClass: function (a) {
                        return k.setLogContainerClass(a || ""), this;
                    },
                    logMessageTemplate: function (a) {
                        return (k.logTemplateMethod = a), this;
                    },
                    getLogs: function () {
                        return i.elements;
                    },
                    clearLogs: function () {
                        return (i.container.innerHTML = ""), (i.elements = []), this;
                    },
                    version: k.version,
                }
            );
        }
        var i = { container: null, elements: [] },
            j = 500;
        if ("undefined" != typeof module && module && module.exports) {
            module.exports = function () {
                return new h();
            };
            var k = new h();
            for (var l in k) module.exports[l] = k[l];
        } else
            "function" == typeof define && define.amd
                ? define(function () {
                      return new h();
                  })
                : (window.alertify = new h());
    })(),
    !(function (a) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
        else if ("function" == typeof define && define.amd) define([], a);
        else {
            var b;
            (b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this), (b.Clipboard = a());
        }
    })(function () {
        var a;
        return (function b(a, c, d) {
            function e(g, h) {
                if (!c[g]) {
                    if (!a[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw ((j.code = "MODULE_NOT_FOUND"), j);
                    }
                    var k = (c[g] = { exports: {} });
                    a[g][0].call(
                        k.exports,
                        function (b) {
                            var c = a[g][1][b];
                            return e(c || b);
                        },
                        k,
                        k.exports,
                        b,
                        a,
                        c,
                        d
                    );
                }
                return c[g].exports;
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
            return e;
        })(
            {
                1: [
                    function (a, b, c) {
                        function d(a, b) {
                            for (; a && a.nodeType !== e; ) {
                                if ("function" == typeof a.matches && a.matches(b)) return a;
                                a = a.parentNode;
                            }
                        }
                        var e = 9;
                        if ("undefined" != typeof Element && !Element.prototype.matches) {
                            var f = Element.prototype;
                            f.matches = f.matchesSelector || f.mozMatchesSelector || f.msMatchesSelector || f.oMatchesSelector || f.webkitMatchesSelector;
                        }
                        b.exports = d;
                    },
                    {},
                ],
                2: [
                    function (a, b, c) {
                        function d(a, b, c, d, f) {
                            var g = e.apply(this, arguments);
                            return (
                                a.addEventListener(c, g, f),
                                {
                                    destroy: function () {
                                        a.removeEventListener(c, g, f);
                                    },
                                }
                            );
                        }
                        function e(a, b, c, d) {
                            return function (c) {
                                (c.delegateTarget = f(c.target, b)), c.delegateTarget && d.call(a, c);
                            };
                        }
                        var f = a("./closest");
                        b.exports = d;
                    },
                    { "./closest": 1 },
                ],
                3: [
                    function (a, b, c) {
                        (c.node = function (a) {
                            return void 0 !== a && a instanceof HTMLElement && 1 === a.nodeType;
                        }),
                            (c.nodeList = function (a) {
                                var b = Object.prototype.toString.call(a);
                                return void 0 !== a && ("[object NodeList]" === b || "[object HTMLCollection]" === b) && "length" in a && (0 === a.length || c.node(a[0]));
                            }),
                            (c.string = function (a) {
                                return "string" == typeof a || a instanceof String;
                            }),
                            (c.fn = function (a) {
                                return "[object Function]" === Object.prototype.toString.call(a);
                            });
                    },
                    {},
                ],
                4: [
                    function (a, b, c) {
                        function d(a, b, c) {
                            if (!a && !b && !c) throw new Error("Missing required arguments");
                            if (!h.string(b)) throw new TypeError("Second argument must be a String");
                            if (!h.fn(c)) throw new TypeError("Third argument must be a Function");
                            if (h.node(a)) return e(a, b, c);
                            if (h.nodeList(a)) return f(a, b, c);
                            if (h.string(a)) return g(a, b, c);
                            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                        }
                        function e(a, b, c) {
                            return (
                                a.addEventListener(b, c),
                                {
                                    destroy: function () {
                                        a.removeEventListener(b, c);
                                    },
                                }
                            );
                        }
                        function f(a, b, c) {
                            return (
                                Array.prototype.forEach.call(a, function (a) {
                                    a.addEventListener(b, c);
                                }),
                                {
                                    destroy: function () {
                                        Array.prototype.forEach.call(a, function (a) {
                                            a.removeEventListener(b, c);
                                        });
                                    },
                                }
                            );
                        }
                        function g(a, b, c) {
                            return i(document.body, a, b, c);
                        }
                        var h = a("./is"),
                            i = a("delegate");
                        b.exports = d;
                    },
                    { "./is": 3, delegate: 2 },
                ],
                5: [
                    function (a, b, c) {
                        function d(a) {
                            var b;
                            if ("SELECT" === a.nodeName) a.focus(), (b = a.value);
                            else if ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName) {
                                var c = a.hasAttribute("readonly");
                                c || a.setAttribute("readonly", ""), a.select(), a.setSelectionRange(0, a.value.length), c || a.removeAttribute("readonly"), (b = a.value);
                            } else {
                                a.hasAttribute("contenteditable") && a.focus();
                                var d = window.getSelection(),
                                    e = document.createRange();
                                e.selectNodeContents(a), d.removeAllRanges(), d.addRange(e), (b = d.toString());
                            }
                            return b;
                        }
                        b.exports = d;
                    },
                    {},
                ],
                6: [
                    function (a, b, c) {
                        function d() {}
                        (d.prototype = {
                            on: function (a, b, c) {
                                var d = this.e || (this.e = {});
                                return (d[a] || (d[a] = [])).push({ fn: b, ctx: c }), this;
                            },
                            once: function (a, b, c) {
                                function d() {
                                    e.off(a, d), b.apply(c, arguments);
                                }
                                var e = this;
                                return (d._ = b), this.on(a, d, c);
                            },
                            emit: function (a) {
                                var b = [].slice.call(arguments, 1),
                                    c = ((this.e || (this.e = {}))[a] || []).slice(),
                                    d = 0,
                                    e = c.length;
                                for (d; d < e; d++) c[d].fn.apply(c[d].ctx, b);
                                return this;
                            },
                            off: function (a, b) {
                                var c = this.e || (this.e = {}),
                                    d = c[a],
                                    e = [];
                                if (d && b) for (var f = 0, g = d.length; f < g; f++) d[f].fn !== b && d[f].fn._ !== b && e.push(d[f]);
                                return e.length ? (c[a] = e) : delete c[a], this;
                            },
                        }),
                            (b.exports = d);
                    },
                    {},
                ],
                7: [
                    function (b, c, d) {
                        !(function (e, f) {
                            if ("function" == typeof a && a.amd) a(["module", "select"], f);
                            else if (void 0 !== d) f(c, b("select"));
                            else {
                                var g = { exports: {} };
                                f(g, e.select), (e.clipboardAction = g.exports);
                            }
                        })(this, function (a, b) {
                            "use strict";
                            function c(a) {
                                return a && a.__esModule ? a : { default: a };
                            }
                            function d(a, b) {
                                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                            }
                            var e = c(b),
                                f =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (a) {
                                              return typeof a;
                                          }
                                        : function (a) {
                                              return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                          },
                                g = (function () {
                                    function a(a, b) {
                                        for (var c = 0; c < b.length; c++) {
                                            var d = b[c];
                                            (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
                                        }
                                    }
                                    return function (b, c, d) {
                                        return c && a(b.prototype, c), d && a(b, d), b;
                                    };
                                })(),
                                h = (function () {
                                    function a(b) {
                                        d(this, a), this.resolveOptions(b), this.initSelection();
                                    }
                                    return (
                                        g(a, [
                                            {
                                                key: "resolveOptions",
                                                value: function () {
                                                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                    (this.action = a.action), (this.container = a.container), (this.emitter = a.emitter), (this.target = a.target), (this.text = a.text), (this.trigger = a.trigger), (this.selectedText = "");
                                                },
                                            },
                                            {
                                                key: "initSelection",
                                                value: function () {
                                                    this.text ? this.selectFake() : this.target && this.selectTarget();
                                                },
                                            },
                                            {
                                                key: "selectFake",
                                                value: function () {
                                                    var a = this,
                                                        b = "rtl" == document.documentElement.getAttribute("dir");
                                                    this.removeFake(),
                                                        (this.fakeHandlerCallback = function () {
                                                            return a.removeFake();
                                                        }),
                                                        (this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0),
                                                        (this.fakeElem = document.createElement("textarea")),
                                                        (this.fakeElem.style.fontSize = "12pt"),
                                                        (this.fakeElem.style.border = "0"),
                                                        (this.fakeElem.style.padding = "0"),
                                                        (this.fakeElem.style.margin = "0"),
                                                        (this.fakeElem.style.position = "absolute"),
                                                        (this.fakeElem.style[b ? "right" : "left"] = "-9999px");
                                                    var c = window.pageYOffset || document.documentElement.scrollTop;
                                                    (this.fakeElem.style.top = c + "px"),
                                                        this.fakeElem.setAttribute("readonly", ""),
                                                        (this.fakeElem.value = this.text),
                                                        this.container.appendChild(this.fakeElem),
                                                        (this.selectedText = (0, e["default"])(this.fakeElem)),
                                                        this.copyText();
                                                },
                                            },
                                            {
                                                key: "removeFake",
                                                value: function () {
                                                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), (this.fakeHandler = null), (this.fakeHandlerCallback = null)),
                                                        this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                                                },
                                            },
                                            {
                                                key: "selectTarget",
                                                value: function () {
                                                    (this.selectedText = (0, e["default"])(this.target)), this.copyText();
                                                },
                                            },
                                            {
                                                key: "copyText",
                                                value: function () {
                                                    var a = void 0;
                                                    try {
                                                        a = document.execCommand(this.action);
                                                    } catch (b) {
                                                        a = !1;
                                                    }
                                                    this.handleResult(a);
                                                },
                                            },
                                            {
                                                key: "handleResult",
                                                value: function (a) {
                                                    this.emitter.emit(a ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.on(this) });
                                                },
                                            },
                                            {
                                                key: "clearSelection",
                                                value: function () {
                                                    this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
                                                },
                                            },
                                            {
                                                key: "destroy",
                                                value: function () {
                                                    this.removeFake();
                                                },
                                            },
                                            {
                                                key: "action",
                                                set: function () {
                                                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                                    if (((this._action = a), "copy" !== this._action && "cut" !== this._action)) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                                },
                                                get: function () {
                                                    return this._action;
                                                },
                                            },
                                            {
                                                key: "target",
                                                set: function (a) {
                                                    if (void 0 !== a) {
                                                        if (!a || "object" !== (void 0 === a ? "undefined" : f(a)) || 1 !== a.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                                        if ("copy" === this.action && a.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                                        if ("cut" === this.action && (a.hasAttribute("readonly") || a.hasAttribute("disabled")))
                                                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                                        this._target = a;
                                                    }
                                                },
                                                get: function () {
                                                    return this._target;
                                                },
                                            },
                                        ]),
                                        a
                                    );
                                })();
                            a.exports = h;
                        });
                    },
                    { select: 5 },
                ],
                8: [
                    function (b, c, d) {
                        !(function (e, f) {
                            if ("function" == typeof a && a.amd) a(["module", "./clipboard-action", "tiny-emitter", "good-listener"], f);
                            else if (void 0 !== d) f(c, b("./clipboard-action"), b("tiny-emitter"), b("good-listener"));
                            else {
                                var g = { exports: {} };
                                f(g, e.clipboardAction, e.tinyEmitter, e.goodListener), (e.clipboard = g.exports);
                            }
                        })(this, function (a, b, c, d) {
                            "use strict";
                            function e(a) {
                                return a && a.__esModule ? a : { default: a };
                            }
                            function f(a, b) {
                                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                            }
                            function g(a, b) {
                                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !b || ("object" != typeof b && "function" != typeof b) ? a : b;
                            }
                            function h(a, b) {
                                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
                                (a.prototype = Object.create(b && b.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } })), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
                            }
                            function i(a, b) {
                                var c = "data-clipboard-" + a;
                                if (b.hasAttribute(c)) return b.getAttribute(c);
                            }
                            var j = e(b),
                                k = e(c),
                                l = e(d),
                                m =
                                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                        ? function (a) {
                                              return typeof a;
                                          }
                                        : function (a) {
                                              return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                          },
                                n = (function () {
                                    function a(a, b) {
                                        for (var c = 0; c < b.length; c++) {
                                            var d = b[c];
                                            (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
                                        }
                                    }
                                    return function (b, c, d) {
                                        return c && a(b.prototype, c), d && a(b, d), b;
                                    };
                                })(),
                                o = (function (a) {
                                    function b(a, c) {
                                        f(this, b);
                                        var d = g(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
                                        return d.resolveOptions(c), d.listenClick(a), d;
                                    }
                                    return (
                                        h(b, a),
                                        n(
                                            b,
                                            [
                                                {
                                                    key: "resolveOptions",
                                                    value: function () {
                                                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                        (this.action = "function" == typeof a.action ? a.action : this.defaultAction),
                                                            (this.target = "function" == typeof a.target ? a.target : this.defaultTarget),
                                                            (this.text = "function" == typeof a.text ? a.text : this.defaultText),
                                                            (this.container = "object" === m(a.container) ? a.container : document.body);
                                                    },
                                                },
                                                {
                                                    key: "listenClick",
                                                    value: function (a) {
                                                        var b = this;
                                                        this.listener = (0, l["default"])(a, "click", function (a) {
                                                            return b.onClick(a);
                                                        });
                                                    },
                                                },
                                                {
                                                    key: "onClick",
                                                    value: function (a) {
                                                        var b = a.delegateTarget || a.currentTarget;
                                                        this.clipboardAction && (this.clipboardAction = null),
                                                            (this.clipboardAction = new j["default"]({ action: this.action(b), target: this.target(b), text: this.text(b), container: this.container, trigger: b, emitter: this }));
                                                    },
                                                },
                                                {
                                                    key: "defaultAction",
                                                    value: function (a) {
                                                        return i("action", a);
                                                    },
                                                },
                                                {
                                                    key: "defaultTarget",
                                                    value: function (a) {
                                                        var b = i("target", a);
                                                        if (b) return document.querySelector(b);
                                                    },
                                                },
                                                {
                                                    key: "defaultText",
                                                    value: function (a) {
                                                        return i("text", a);
                                                    },
                                                },
                                                {
                                                    key: "destroy",
                                                    value: function () {
                                                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
                                                    },
                                                },
                                            ],
                                            [
                                                {
                                                    key: "isSupported",
                                                    value: function () {
                                                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                                            b = "string" == typeof a ? [a] : a,
                                                            c = !!document.queryCommandSupported;
                                                        return (
                                                            b.forEach(function (a) {
                                                                c = c && !!document.queryCommandSupported(a);
                                                            }),
                                                            c
                                                        );
                                                    },
                                                },
                                            ]
                                        ),
                                        b
                                    );
                                })(k["default"]);
                            a.exports = o;
                        });
                    },
                    { "./clipboard-action": 7, "good-listener": 4, "tiny-emitter": 6 },
                ],
            },
            {},
            [8]
        )(8);
    }),
    (function (a, b) {
        var c = /[<>&\r\n"']/gm,
            d = { "<": "lt;", ">": "gt;", "&": "amp;", "\r": "#13;", "\n": "#10;", '"': "quot;", "'": "#39;" };
        a.extend({
            fileDownload: function (e, f) {
                function g() {
                    var b = n.cookieValue;
                    "string" == typeof b && (b = b.toLowerCase());
                    var c = n.cookieName.toLowerCase() + "=" + b;
                    if (document.cookie.toLowerCase().indexOf(c) > -1) {
                        s.onSuccess(e);
                        var d = n.cookieName + "=; path=" + n.cookiePath + "; expires=" + new Date(0).toUTCString() + ";";
                        return n.cookieDomain && (d += " domain=" + n.cookieDomain + ";"), (document.cookie = d), void i(!1);
                    }
                    if (u || t)
                        try {
                            var f = u ? u.document : h(t);
                            if (f && null !== f.body && f.body.innerHTML.length) {
                                var j = !0;
                                if (w && w.length) {
                                    var k = a(f.body).contents().first();
                                    try {
                                        k.length && k[0] === w[0] && (j = !1);
                                    } catch (l) {
                                        if (!l || l.number != -2146828218) throw l;
                                        j = !0;
                                    }
                                }
                                if (j)
                                    return void setTimeout(function () {
                                        s.onFail(f.body.innerHTML, e), i(!0);
                                    }, 100);
                            }
                        } catch (m) {
                            return s.onFail("", e, m), void i(!0);
                        }
                    setTimeout(g, n.checkInterval);
                }
                function h(a) {
                    var b = a[0].contentWindow || a[0].contentDocument;
                    return b.document && (b = b.document), b;
                }
                function i(a) {
                    setTimeout(function () {
                        u && (l && u.close(), k && u.focus && (u.focus(), a && u.close()));
                    }, 0);
                }
                function j(a) {
                    return a.replace(c, function (a) {
                        return "&" + d[a];
                    });
                }
                var k,
                    l,
                    m,
                    n = a.extend(
                        {
                            preparingMessageHtml: null,
                            failMessageHtml: null,
                            androidPostUnsupportedMessageHtml: "Unfortunately your Android browser doesn't support this type of file download. Please try again with a different browser.",
                            dialogOptions: { modal: !0 },
                            prepareCallback: function (a) {},
                            successCallback: function (a) {},
                            abortCallback: function (a) {},
                            failCallback: function (a, b, c) {},
                            httpMethod: "GET",
                            data: null,
                            checkInterval: 100,
                            cookieName: "fileDownload",
                            cookieValue: "true",
                            cookiePath: "/",
                            cookieDomain: null,
                            popupWindowTitle: "Initiating file download...",
                            encodeHTMLEntities: !0,
                        },
                        f
                    ),
                    o = new a.Deferred(),
                    p = (navigator.userAgent || navigator.vendor || b.opera).toLowerCase();
                /ip(ad|hone|od)/.test(p)
                    ? (k = !0)
                    : p.indexOf("android") !== -1
                    ? (l = !0)
                    : (m =
                          /avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|playbook|silk|iemobile|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                              p
                          ) ||
                          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(
                              p.substr(0, 4)
                          ));
                var q = n.httpMethod.toUpperCase();
                if (l && "GET" !== q && n.androidPostUnsupportedMessageHtml) return a().dialog ? a("<div>").html(n.androidPostUnsupportedMessageHtml).dialog(n.dialogOptions) : alert(n.androidPostUnsupportedMessageHtml), o.reject();
                var r = null,
                    s = {
                        onPrepare: function (b) {
                            n.preparingMessageHtml ? (r = a("<div>").html(n.preparingMessageHtml).dialog(n.dialogOptions)) : n.prepareCallback && n.prepareCallback(b);
                        },
                        onSuccess: function (a) {
                            r && r.dialog("close"), n.successCallback(a), o.resolve(a);
                        },
                        onAbort: function (a) {
                            r && r.dialog("close"), n.abortCallback(a), o.reject(a);
                        },
                        onFail: function (b, c, d) {
                            r && r.dialog("close"), n.failMessageHtml && a("<div>").html(n.failMessageHtml).dialog(n.dialogOptions), n.failCallback(b, c, d), o.reject(b, c);
                        },
                    };
                s.onPrepare(e), null !== n.data && "string" != typeof n.data && (n.data = a.param(n.data));
                var t, u, v, w;
                if ("GET" === q) {
                    if (null !== n.data) {
                        var x = e.indexOf("?");
                        x !== -1 ? "&" !== e.substring(e.length - 1) && (e += "&") : (e += "?"), (e += n.data);
                    }
                    k || l ? ((u = b.open(e)), (u.document.title = n.popupWindowTitle), b.focus()) : m ? b.location(e) : (t = a("<iframe>").hide().prop("src", e).appendTo("body"));
                } else {
                    var y = "";
                    null !== n.data &&
                        a.each(n.data.replace(/\+/g, " ").split("&"), function () {
                            var a = this.split("="),
                                b = a[0];
                            a.shift();
                            var c = a.join("=");
                            a = [b, c];
                            var d = n.encodeHTMLEntities ? j(decodeURIComponent(a[0])) : decodeURIComponent(a[0]);
                            if (d) {
                                var e = n.encodeHTMLEntities ? j(decodeURIComponent(a[1])) : decodeURIComponent(a[1]);
                                y += '<input type="hidden" name="' + d + '" value="' + e + '" />';
                            }
                        }),
                        m
                            ? ((w = a("<form>").appendTo("body")), w.hide().prop("method", n.httpMethod).prop("action", e).html(y))
                            : (k ? ((u = b.open("about:blank")), (u.document.title = n.popupWindowTitle), (v = u.document), b.focus()) : ((t = a("<iframe style='display: none' src='about:blank'></iframe>").appendTo("body")), (v = h(t))),
                              v.write("<html><head></head><body><form method='" + n.httpMethod + "' action='" + e + "'>" + y + "</form>" + n.popupWindowTitle + "</body></html>"),
                              (w = a(v).find("form"))),
                        w.submit();
                }
                setTimeout(g, n.checkInterval);
                var z = o.promise();
                return (
                    (z.abort = function () {
                        i(), t.attr("src", "").html(""), s.onAbort(e);
                    }),
                    z
                );
            },
        });
    })(jQuery, this || window),
    !(function (a) {
        "use strict";
        var b = function (a, c) {
            var d = /[^\w\-\.:]/.test(a) ? new Function(b.arg + ",tmpl", "var _e=tmpl.encode" + b.helper + ",_s='" + a.replace(b.regexp, b.func) + "';return _s;") : (b.cache[a] = b.cache[a] || b(b.load(a)));
            return c
                ? d(c, b)
                : function (a) {
                      return d(a, b);
                  };
        };
        (b.cache = {}),
            (b.load = function (a) {
                return document.getElementById(a).innerHTML;
            }),
            (b.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g),
            (b.func = function (a, b, c, d, e, f) {
                return b ? { "\n": "\\n", "\r": "\\r", "\t": "\\t", " ": " " }[b] || "\\" + b : c ? ("=" === c ? "'+_e(" + d + ")+'" : "'+(" + d + "==null?'':" + d + ")+'") : e ? "';" : f ? "_s+='" : void 0;
            }),
            (b.encReg = /[<>&"'\x00]/g),
            (b.encMap = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;" }),
            (b.encode = function (a) {
                return (null == a ? "" : "" + a).replace(b.encReg, function (a) {
                    return b.encMap[a] || "";
                });
            }),
            (b.arg = "o"),
            (b.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}"),
            "function" == typeof define && define.amd
                ? define(function () {
                      return b;
                  })
                : "object" == typeof module && module.exports
                ? (module.exports = b)
                : (a.tmpl = b);
    })(this),
    !(function (a, b) {
        "function" == typeof define && define.amd
            ? define([], function () {
                  return (a.toast = b());
              })
            : "object" == typeof exports
            ? (module.exports = b())
            : (a.toast = b());
    })(this, function () {
        function a() {
            var a = document.getElementsByTagName("head")[0],
                c = function (b) {
                    if (a) {
                        if (b.length) {
                            for (var f, g, h = -1; (f = b[++h]); )
                                if ("string" == typeof f) d(f);
                                else if ("function" == typeof f) {
                                    g = f;
                                    break;
                                }
                            e(g, Array.prototype.slice.call(b, h + 1));
                        }
                    } else
                        setTimeout(function () {
                            c(b);
                        }, 50);
                },
                d = function (c) {
                    var d,
                        e,
                        g = /\.(\w+)$/.exec(c),
                        h = /^\[(\w+)\](.+)/.exec(c);
                    if (null !== h) (d = h[1]), (c = h[2]);
                    else {
                        if (null === g) return;
                        d = g[1];
                    }
                    if (!(c in b))
                        switch (((b[c] = !1), d)) {
                            case "js":
                                (e = document.createElement("script")), (e.src = c), (e.async = !1), a.appendChild(e);
                                var i = navigator.appVersion.match(/MSIE (\d)/);
                                null !== i && parseInt(i[1], 10) < 9
                                    ? (e.onreadystatechange = function () {
                                          /ded|co/.test(this.readyState) && ((b[c] = !0), (e.onreadystatechange = null));
                                      })
                                    : (e.onload = function () {
                                          (b[c] = !0), (e.onload = null);
                                      });
                                break;
                            case "css":
                                (e = document.createElement("link")), (e.rel = "styleSheet"), (e.href = c), a.appendChild(e), f(e, c);
                                break;
                            default:
                                return void delete b[c];
                        }
                },
                e = function (a, d) {
                    for (var f in b)
                        if (!b[f])
                            return void setTimeout(function () {
                                e(a, d);
                            }, 50);
                    "function" == typeof a && a(), c(d);
                },
                f = function (a, c) {
                    a.sheet || a.styleSheet
                        ? (b[c] = !0)
                        : setTimeout(function () {
                              f(a, c);
                          }, 50);
                };
            c(arguments);
        }
        var b = {};
        return a;
    }),
    (function (a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof module && "object" == typeof module.exports ? (module.exports = b()) : (a.Cldr = b());
    })(this, function () {
        var a =
                Array.isArray ||
                function (a) {
                    return "[object Array]" === Object.prototype.toString.call(a);
                },
            b = function (b, c) {
                if ((a(b) && (b = b.join("/")), "string" != typeof b)) throw new Error('invalid path "' + b + '"');
                return (
                    (b = b.replace(/^\//, "").replace(/^cldr\//, "")),
                    (b = b.replace(/{[a-zA-Z]+}/g, function (a) {
                        return (a = a.replace(/^{([^}]*)}$/, "$1")), c[a];
                    })),
                    b.split("/")
                );
            },
            c = function (a, b) {
                var c, d;
                if (a.some) return a.some(b);
                for (c = 0, d = a.length; c < d; c++) if (b(a[c], c, a)) return !0;
                return !1;
            },
            d = function (a, b, d, e) {
                var f,
                    g,
                    h = d[0],
                    i = d[1],
                    j = a.localeSep,
                    k = d[2],
                    l = d.slice(3, 4);
                return (
                    (e = e || {}),
                    "und" !== h && "Zzzz" !== i && "ZZ" !== k
                        ? [h, i, k].concat(l)
                        : "undefined" != typeof b.get("supplemental/likelySubtags")
                        ? ((g = c([[h, i, k], [h, k], [h, i], [h], ["und", i]], function (a) {
                              return (f = !/\b(Zzzz|ZZ)\b/.test(a.join(j)) && b.get(["supplemental/likelySubtags", a.join(j)]));
                          })),
                          g ? ((f = f.split(j)), ["und" !== h ? h : f[0], "Zzzz" !== i ? i : f[1], "ZZ" !== k ? k : f[2]].concat(l)) : e.force ? b.get("supplemental/likelySubtags/und").split(j) : void 0)
                        : void 0
                );
            },
            e = function (a, b, e) {
                var f,
                    g,
                    h = e[0],
                    i = e[1],
                    j = e[2],
                    k = e[3];
                return (
                    (g = c(
                        [
                            [[h, "Zzzz", "ZZ"], [h]],
                            [
                                [h, "Zzzz", j],
                                [h, j],
                            ],
                            [
                                [h, i, "ZZ"],
                                [h, i],
                            ],
                        ],
                        function (c) {
                            var g = d(a, b, c[0]);
                            return (f = c[1]), g && g[0] === e[0] && g[1] === e[1] && g[2] === e[2];
                        }
                    )),
                    g ? (k && f.push(k), f) : e
                );
            },
            f = function (a) {
                var b,
                    c,
                    d = [];
                return (
                    (a = a.replace(/_/, "-")),
                    (b = a.split("-u-")),
                    b[1] && ((b[1] = b[1].split("-t-")), (a = b[0] + (b[1][1] ? "-t-" + b[1][1] : "")), (d[4] = b[1][0])),
                    (c = a.split("-t-")[0]),
                    (b = c.match(/^(([a-z]{2,3})(-([A-Z][a-z]{3}))?(-([A-Z]{2}|[0-9]{3}))?)((-([a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*)$|^(root)$/)),
                    null === b ? ["und", "Zzzz", "ZZ"] : ((d[0] = b[10] || b[2] || "und"), (d[1] = b[4] || "Zzzz"), (d[2] = b[6] || "ZZ"), b[7] && b[7].length && (d[3] = b[7].slice(1)), d)
                );
            },
            g = function (a, b) {
                var c, d;
                if (a.forEach) return a.forEach(b);
                for (c = 0, d = a.length; c < d; c++) b(a[c], c, a);
            },
            h = function (a, b, c) {
                var h = a._availableBundleMap,
                    i = a._availableBundleMapQueue;
                return (
                    i.length &&
                        (g(i, function (c) {
                            var g, j, k, l;
                            (l = f(c)), (j = d(a, b, l)), (k = e(a, b, j)), (k = k.join(a.localeSep)), (g = i[k]), (g && g.length < c.length) || (h[k] = c);
                        }),
                        (a._availableBundleMapQueue = [])),
                    h[c] || null
                );
            },
            i = function (a) {
                var b,
                    c = [];
                if (Object.keys) return Object.keys(a);
                for (b in a) c.push(b);
                return c;
            },
            j = function (a, b) {
                var c, d;
                return (
                    (d = a + (b && JSON ? ": " + JSON.stringify(b) : "")),
                    (c = new Error(d)),
                    (c.code = a),
                    g(i(b), function (a) {
                        c[a] = b[a];
                    }),
                    c
                );
            },
            k = function (a, b, c) {
                if (!b) throw j(a, c);
            },
            l = function (a, b) {
                k("E_MISSING_PARAMETER", "undefined" != typeof a, { name: b });
            },
            m = function (a, b, c, d) {
                k("E_INVALID_PAR_TYPE", c, { expected: d, name: b, value: a });
            },
            n = function (b, c) {
                m(b, c, "string" == typeof b || a(b), "String or Array");
            },
            o = function (a) {
                return null !== a && "" + a == "[object Object]";
            },
            p = function (a, b) {
                m(a, b, "undefined" == typeof a || o(a), "Plain Object");
            },
            q = function (a, b) {
                m(a, b, "string" == typeof a, "a string");
            },
            r = function (a, b) {
                var c,
                    d = a,
                    e = b.length;
                for (c = 0; c < e - 1; c++) if (((d = d[b[c]]), !d)) return;
                return d[b[c]];
            },
            s = function (a, b) {
                var c,
                    d = a._availableBundleMapQueue,
                    e = r(b, ["main"]);
                if (e) for (c in e) e.hasOwnProperty(c) && "root" !== c && d.indexOf(c) === -1 && d.push(c);
            },
            t = function (b) {
                return a(b) ? b : [b];
            },
            u = (function () {
                var b = function () {
                    var c = {},
                        d = [].slice.call(arguments, 0);
                    return (
                        g(d, function (d) {
                            var e;
                            for (e in d) e in c && "object" == typeof c[e] && !a(c[e]) ? (c[e] = b(c[e], d[e])) : (c[e] = d[e]);
                        }),
                        c
                    );
                };
                return b;
            })(),
            v = function (a, b, c) {
                var d, e, f;
                for (l(c[0], "json"), d = 0; d < c.length; d++) for (f = t(c[d]), e = 0; e < f.length; e++) p(f[e], "json"), (b = u(b, f[e])), s(a, f[e]);
                return b;
            },
            w = function (a, c, d) {
                var e = b(c, d);
                return r(a._resolved, e);
            },
            x = function (a) {
                this.init(a);
            };
        return (
            (x._alwaysArray = t),
            (x._coreLoad = v),
            (x._createError = j),
            (x._itemGetResolved = w),
            (x._jsonMerge = u),
            (x._pathNormalize = b),
            (x._resourceGet = r),
            (x._validatePresence = l),
            (x._validateType = m),
            (x._validateTypePath = n),
            (x._validateTypePlainObject = p),
            (x._availableBundleMap = {}),
            (x._availableBundleMapQueue = []),
            (x._resolved = {}),
            (x.localeSep = "-"),
            (x.load = function () {
                x._resolved = v(x, x._resolved, arguments);
            }),
            (x.prototype.init = function (a) {
                var b,
                    c,
                    g,
                    i,
                    j,
                    k,
                    m,
                    n,
                    o,
                    p = x.localeSep,
                    r = "";
                l(a, "locale"),
                    q(a, "locale"),
                    (k = f(a)),
                    5 === k.length && ((n = k.pop()), (r = p + "u" + p + n), k[3] || k.pop()),
                    (o = k[3]),
                    (g = d(x, this, k, { force: !0 }) || k),
                    (c = g[0]),
                    (j = g[1]),
                    (m = g[2]),
                    (i = e(x, this, g).join(p)),
                    (this.attributes = b = { bundle: h(x, this, i), minLanguageId: i + r, maxLanguageId: g.join(p) + r, language: c, script: j, territory: m, region: m, variant: o }),
                    n &&
                        ("-" + n).replace(/-[a-z]{3,8}|(-[a-z]{2})-([a-z]{3,8})/g, function (a, c, d) {
                            c ? (b["u" + c] = d) : (b["u" + a] = !0);
                        }),
                    (this.locale = a);
            }),
            (x.prototype.get = function (a) {
                return l(a, "path"), n(a, "path"), w(x, a, this.attributes);
            }),
            (x.prototype.main = function (a) {
                return l(a, "path"), n(a, "path"), k("E_MISSING_BUNDLE", null !== this.attributes.bundle, { locale: this.locale }), (a = t(a)), this.get(["main/{bundle}"].concat(a));
            }),
            x
        );
    }),
    (function (a) {
        "function" == typeof define && define.amd ? define(["../cldr"], a) : "object" == typeof module && "object" == typeof module.exports ? (module.exports = a(require("../cldr"))) : a(Cldr);
    })(function (a) {
        function b(a, b) {
            k(a, b, "string" == typeof a || a instanceof RegExp, "String or RegExp");
        }
        function c(a, c) {
            return function (d, e) {
                return j(d, "event"), b(d, "event"), j(e, "listener"), n(e, "listener"), c[a].apply(c, arguments);
            };
        }
        function d(a) {
            return c("off", a);
        }
        function e(a) {
            return c("on", a);
        }
        function f(a) {
            return c("once", a);
        }
        function g() {
            (l = a.prototype.get),
                (a.prototype.get = function (a) {
                    var b = l.apply(this, arguments);
                    return (a = i(a, this.attributes).join("/")), o.trigger("get", [a, b]), this.ee.trigger("get", [a, b]), b;
                });
        }
        var h,
            i = a._pathNormalize,
            j = a._validatePresence,
            k = a._validateType;
        h = (function () {
            function a() {}
            function b(a, b) {
                for (var c = a.length; c--; ) if (a[c].listener === b) return c;
                return -1;
            }
            function c(a) {
                return function () {
                    return this[a].apply(this, arguments);
                };
            }
            var d = a.prototype,
                e = {};
            return (
                (d.getListeners = function (a) {
                    var b,
                        c,
                        d = this._getEvents();
                    if (a instanceof RegExp) {
                        b = {};
                        for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]);
                    } else b = d[a] || (d[a] = []);
                    return b;
                }),
                (d.flattenListeners = function (a) {
                    var b,
                        c = [];
                    for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
                    return c;
                }),
                (d.getListenersAsObject = function (a) {
                    var b,
                        c = this.getListeners(a);
                    return c instanceof Array && ((b = {}), (b[a] = c)), b || c;
                }),
                (d.addListener = function (a, c) {
                    var d,
                        e = this.getListenersAsObject(a),
                        f = "object" == typeof c;
                    for (d in e) e.hasOwnProperty(d) && b(e[d], c) === -1 && e[d].push(f ? c : { listener: c, once: !1 });
                    return this;
                }),
                (d.on = c("addListener")),
                (d.addOnceListener = function (a, b) {
                    return this.addListener(a, { listener: b, once: !0 });
                }),
                (d.once = c("addOnceListener")),
                (d.defineEvent = function (a) {
                    return this.getListeners(a), this;
                }),
                (d.defineEvents = function (a) {
                    for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
                    return this;
                }),
                (d.removeListener = function (a, c) {
                    var d,
                        e,
                        f = this.getListenersAsObject(a);
                    for (e in f) f.hasOwnProperty(e) && ((d = b(f[e], c)), d !== -1 && f[e].splice(d, 1));
                    return this;
                }),
                (d.off = c("removeListener")),
                (d.addListeners = function (a, b) {
                    return this.manipulateListeners(!1, a, b);
                }),
                (d.removeListeners = function (a, b) {
                    return this.manipulateListeners(!0, a, b);
                }),
                (d.manipulateListeners = function (a, b, c) {
                    var d,
                        e,
                        f = a ? this.removeListener : this.addListener,
                        g = a ? this.removeListeners : this.addListeners;
                    if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--; ) f.call(this, b, c[d]);
                    else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
                    return this;
                }),
                (d.removeEvent = function (a) {
                    var b,
                        c = typeof a,
                        d = this._getEvents();
                    if ("string" === c) delete d[a];
                    else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
                    else delete this._events;
                    return this;
                }),
                (d.removeAllListeners = c("removeEvent")),
                (d.emitEvent = function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        g = this.getListenersAsObject(a);
                    for (e in g)
                        if (g.hasOwnProperty(e))
                            for (d = g[e].length; d--; ) (c = g[e][d]), c.once === !0 && this.removeListener(a, c.listener), (f = c.listener.apply(this, b || [])), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
                    return this;
                }),
                (d.trigger = c("emitEvent")),
                (d.emit = function (a) {
                    var b = Array.prototype.slice.call(arguments, 1);
                    return this.emitEvent(a, b);
                }),
                (d.setOnceReturnValue = function (a) {
                    return (this._onceReturnValue = a), this;
                }),
                (d._getOnceReturnValue = function () {
                    return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
                }),
                (d._getEvents = function () {
                    return this._events || (this._events = {});
                }),
                (a.noConflict = function () {
                    return (e.EventEmitter = originalGlobalValue), a;
                }),
                a
            );
        })();
        var l,
            m,
            n = function (a, b) {
                k(a, b, "undefined" == typeof a || "function" == typeof a, "Function");
            },
            o = new h();
        return (
            (a.off = d(o)),
            (a.on = e(o)),
            (a.once = f(o)),
            (m = a.prototype.init),
            (a.prototype.init = function () {
                var a;
                (this.ee = a = new h()), (this.off = d(a)), (this.on = e(a)), (this.once = f(a)), m.apply(this, arguments);
            }),
            (a._eventInit = g),
            g(),
            a
        );
    }),
    (function (a) {
        "function" == typeof define && define.amd ? define(["../cldr"], a) : "object" == typeof module && "object" == typeof module.exports ? (module.exports = a(require("../cldr"))) : a(Cldr);
    })(function (a) {
        var b = a._alwaysArray,
            c = function (a) {
                var c, d;
                return (
                    (c = function (c) {
                        return function (d) {
                            return (d = b(d)), a.get([c].concat(d));
                        };
                    }),
                    (d = c("supplemental")),
                    (d.weekData = c("supplemental/weekData")),
                    (d.weekData.firstDay = function () {
                        return a.get("supplemental/weekData/firstDay/{territory}") || a.get("supplemental/weekData/firstDay/001");
                    }),
                    (d.weekData.minDays = function () {
                        var b = a.get("supplemental/weekData/minDays/{territory}") || a.get("supplemental/weekData/minDays/001");
                        return parseInt(b, 10);
                    }),
                    (d.timeData = c("supplemental/timeData")),
                    (d.timeData.allowed = function () {
                        return a.get("supplemental/timeData/{territory}/_allowed") || a.get("supplemental/timeData/001/_allowed");
                    }),
                    (d.timeData.preferred = function () {
                        return a.get("supplemental/timeData/{territory}/_preferred") || a.get("supplemental/timeData/001/_preferred");
                    }),
                    d
                );
            },
            d = a.prototype.init;
        return (
            (a.prototype.init = function () {
                d.apply(this, arguments), (this.supplemental = c(this));
            }),
            a
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd ? define(["cldr", "cldr/event"], b) : "object" == typeof exports ? (module.exports = b(require("cldrjs"))) : (a.Globalize = b(a.Cldr));
    })(this, function (a) {
        function b(a) {
            a.once("get", n), a.get("supplemental/likelySubtags");
        }
        function c(a) {
            return this instanceof c ? (p(a, "locale"), s(a, "locale"), (this.cldr = v(a)), void b(this.cldr)) : new c(a);
        }
        var d = function (a) {
                return "string" == typeof a ? a : "number" == typeof a ? "" + a : JSON.stringify(a);
            },
            e = function (a, b) {
                return (a = a.replace(/{[0-9a-zA-Z-_. ]+}/g, function (a) {
                    return (a = a.replace(/^{([^}]*)}$/, "$1")), d(b[a]);
                }));
            },
            f = function () {
                var a = arguments[0],
                    b = [].slice.call(arguments, 1);
                return (
                    b.forEach(function (b) {
                        var c;
                        for (c in b) a[c] = b[c];
                    }),
                    a
                );
            },
            g = function (a, b, c) {
                var d;
                return (b = a + (b ? ": " + e(b, c) : "")), (d = new Error(b)), (d.code = a), f(d, c), d;
            },
            h = function (a) {
                return [].reduce.call(
                    a,
                    function (a, b) {
                        var c = b.charCodeAt(0);
                        return (a = (a << 5) - a + c), 0 | a;
                    },
                    0
                );
            },
            i = function (a, b, c, d) {
                var e;
                return (d = d || JSON.stringify(c)), (e = h(a + b + d)), e > 0 ? "a" + e : "b" + Math.abs(e);
            },
            j = function (a) {
                if (void 0 !== a.name) return a.name;
                var b = /^function\s+([\w\$]+)\s*\(/.exec(a.toString());
                return b && b.length > 0 ? b[1] : void 0;
            },
            k = function (a, b, c, d) {
                var e = JSON.stringify(a),
                    f = j(c),
                    g = b.locale;
                return f
                    ? ((c.runtimeKey = i(f, g, null, e)),
                      (c.generatorString = function () {
                          return 'Globalize("' + g + '").' + f + "(" + e.slice(1, -1) + ")";
                      }),
                      (c.runtimeArgs = d),
                      c)
                    : c;
            },
            l = function (a, b, c, d) {
                if (!c) throw g(a, b, d);
            },
            m = function (a) {
                return Array.isArray(a) ? a : a ? [a] : [];
            },
            n = function (a, b, c) {
                var d;
                (c = c || {}),
                    (d = m(c.skip).some(function (b) {
                        return b.test(a);
                    })),
                    l("E_MISSING_CLDR", "Missing required CLDR content `{path}`.", b || d, { path: a });
            },
            o = function (a) {
                l("E_DEFAULT_LOCALE_NOT_DEFINED", "Default locale has not been defined.", void 0 !== a, {});
            },
            p = function (a, b) {
                l("E_MISSING_PARAMETER", "Missing required parameter `{name}`.", void 0 !== a, { name: b });
            },
            q = function (a, b, c, d) {
                l("E_PAR_OUT_OF_RANGE", "Parameter `{name}` has value `{value}` out of range [{minimum}, {maximum}].", void 0 === a || (a >= c && a <= d), { maximum: d, minimum: c, name: b, value: a });
            },
            r = function (a, b, c, d) {
                l("E_INVALID_PAR_TYPE", "Invalid `{name}` parameter ({value}). {expected} expected.", c, { expected: d, name: b, value: a });
            },
            s = function (b, c) {
                r(b, c, void 0 === b || "string" == typeof b || b instanceof a, "String or Cldr instance");
            },
            t = function (a) {
                return null !== a && "" + a == "[object Object]";
            },
            u = function (a, b) {
                r(a, b, void 0 === a || t(a), "Plain Object");
            },
            v = function (b) {
                return b instanceof a ? b : new a(b);
            },
            w = function (a) {
                return a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
            },
            x = function (a, b, c) {
                var d;
                for ("string" != typeof a && (a = String(a)), d = a.length; d < b; d += 1) a = c ? a + "0" : "0" + a;
                return a;
            };
        return (
            (c.load = function () {
                a.load.apply(a, arguments);
            }),
            (c.locale = function (a) {
                return s(a, "locale"), arguments.length && ((this.cldr = v(a)), b(this.cldr)), this.cldr;
            }),
            (c._alwaysArray = m),
            (c._createError = g),
            (c._formatMessage = e),
            (c._isPlainObject = t),
            (c._objectExtend = f),
            (c._regexpEscape = w),
            (c._runtimeBind = k),
            (c._stringPad = x),
            (c._validate = l),
            (c._validateCldr = n),
            (c._validateDefaultLocale = o),
            (c._validateParameterPresence = p),
            (c._validateParameterRange = q),
            (c._validateParameterTypePlainObject = u),
            (c._validateParameterType = r),
            c
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["cldr", "../globalize", "cldr/event", "cldr/supplemental"], b)
            : "object" == typeof exports
            ? (module.exports = b(require("cldrjs"), require("../globalize")))
            : b(a.Cldr, a.Globalize);
    })(this, function (a, b) {
        function c(a) {
            var b = a[2],
                c = a[3],
                d = a[4],
                e = a[5],
                f = a[6];
            if (isNaN(e * f)) {
                if (!isNaN(e) || !isNaN(f)) throw new Error("Neither or both the minimum and maximum significant digits must be present");
                k(b, "minimumIntegerDigits", 1, 21), k(c, "minimumFractionDigits", 0, 20), k(d, "maximumFractionDigits", c, 20);
            } else k(e, "minimumSignificantDigits", 1, 21), k(f, "maximumSignificantDigits", e, 21);
        }
        var d = b._createError,
            e = b._regexpEscape,
            f = b._runtimeBind,
            g = b._stringPad,
            h = b._validateCldr,
            i = b._validateDefaultLocale,
            j = b._validateParameterPresence,
            k = b._validateParameterRange,
            l = b._validateParameterType,
            m = b._validateParameterTypePlainObject,
            n = function (a) {
                return d("E_UNSUPPORTED", "Unsupported {feature}.", { feature: a });
            },
            o = function (a, b) {
                l(a, b, void 0 === a || "number" == typeof a, "Number");
            },
            p = function (a, b) {
                l(a, b, void 0 === a || "string" == typeof a, "a string");
            },
            q = function (a, b, c) {
                var d,
                    e = b,
                    f = "",
                    g = ",",
                    h = !!c;
                for (a = String(a).split("."), d = a[0].length; d > e; ) (f = a[0].slice(d - e, d) + (f.length ? g : "") + f), (d -= e), h && ((e = c), (h = !1));
                return (a[0] = a[0].slice(0, d) + (f.length ? g : "") + f), a.join(".");
            },
            r = function (a, b, c, d, e, f) {
                return (
                    (a = d ? (f ? e(a, f) : e(a, { exponent: -d })) : e(a)),
                    (a = String(a)),
                    d && /e-/.test(a) && (a = (+a).toFixed(d).replace(/0+$/, "").replace(/\.$/, "")),
                    c && ((a = a.split(".")), (a[1] = g(a[1] || "", c, !0)), (a = a.join("."))),
                    b && ((a = a.split(".")), (a[0] = g(a[0], b)), (a = a.join("."))),
                    a
                );
            },
            s = function (a, b, c) {
                var d;
                return (a = a.toPrecision(b + 2)), (d = Math.ceil(Math.log(Math.abs(a)) / Math.log(10))), (d -= b), c(a, { exponent: d });
            },
            t = function (a, b, c, d) {
                var e, f;
                if ((b > c && (c = b), (e = s(a, b, d)), (f = s(a, c, d)), (a = +e === +f ? e : f), (a = (+a).toString(10)), /e/.test(a))) throw n({ feature: "integers out of (1e21, 1e-7)" });
                return b - a.replace(/^0+|\./g, "").length > 0 && ((a = a.split(".")), (a[1] = g(a[1] || "", b - a[0].replace(/^0+/, "").length, !0)), (a = a.join("."))), a;
            },
            u = function (a) {
                return a[0] + a[a.length - 1] !== "''" ? a : "''" === a ? "" : a.replace(/''/g, "'").slice(1, -1);
            },
            v = function (a, b) {
                var c, d, e, f, g, h, i, j, k, l, m, n, o, p, s, v, w, x;
                return (
                    (k = b[1]),
                    (g = b[2]),
                    (f = b[3]),
                    (d = b[4]),
                    (h = b[5]),
                    (e = b[6]),
                    (s = b[7]),
                    (m = b[8]),
                    (v = b[9]),
                    (p = b[15]),
                    (c = b[16]),
                    (i = b[17]),
                    (x = b[18]),
                    (j = b[19]),
                    isNaN(a)
                        ? i
                        : (a < 0 ? ((n = b[12]), (l = b[13]), (w = b[14])) : ((n = b[11]), (l = b[0]), (w = b[10])),
                          isFinite(a)
                              ? ((o = l),
                                n.indexOf("%") !== -1 ? (a *= 100) : n.indexOf("‰") !== -1 && (a *= 1e3),
                                (a = isNaN(h * e) ? r(a, g, f, d, p, s) : t(a, h, e, p)),
                                (a = a.replace(/^-/, "")),
                                m && (a = q(a, m, v)),
                                (o += a),
                                (o += w),
                                o.replace(/('([^']|'')+'|'')|./g, function (a, b) {
                                    return b
                                        ? u(b)
                                        : ((a = a.replace(/[.,\-+E%\u2030]/, function (a) {
                                              return x[a];
                                          })),
                                          j &&
                                              (a = a.replace(/[0-9]/, function (a) {
                                                  return j[+a];
                                              })),
                                          a);
                                }))
                              : l + c + w)
                );
            },
            w = function (a) {
                return function (b) {
                    return j(b, "value"), o(b, "value"), v(b, a);
                };
            },
            x = function (a) {
                var b = a.attributes["u-nu"];
                return b ? ("traditio" === b && (b = "traditional"), ["native", "traditional", "finance"].indexOf(b) !== -1 ? a.main(["numbers/otherNumberingSystems", b]) : b) : a.main("numbers/defaultNumberingSystem");
            },
            y = function (a) {
                var b,
                    c = x(a);
                if ("latn" !== c) {
                    if (((b = a.supplemental(["numberingSystems", c])), "numeric" !== b._type)) throw n("`" + b._type + "` numbering system");
                    return b._digits;
                }
            },
            z = /^(('([^']|'')*'|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/,
            A = function (a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t;
                if (((a = a.match(z)), !a)) throw new Error("Invalid pattern: " + a);
                if (
                    ((m = a[1]),
                    (l = a[4]),
                    (e = a[5]),
                    (s = a[9]),
                    (q = a[10]),
                    (t = a[11]),
                    s
                        ? s.replace(/(@+)(#*)/, function (a, b, c) {
                              (k = b.length), (h = k + c.length);
                          })
                        : ((d = a[8]),
                          (f = a[7]),
                          d &&
                              (d.replace(/[0-9]+/, function (a) {
                                  i = a;
                              }),
                              i ? ((p = +("0." + i)), (i = i.length)) : (i = 0),
                              (g = d.length - 1)),
                          f.replace(/0+$/, function (a) {
                              j = a.length;
                          })),
                    q)
                )
                    throw n({ feature: "scientific notation (not implemented)" });
                if (l) throw n({ feature: "padding (not implemented)" });
                return (b = e.lastIndexOf(",")) !== -1 && ((c = e.split(".")[0]), (o = c.length - b - 1), (c = e.lastIndexOf(",", b - 1)) !== -1 && (r = b - 1 - c)), [m, l, j, i, g, k, h, p, o, r, t];
            },
            B = function (a, b) {
                return b.main(["numbers/symbols-numberSystem-" + x(b), a]);
            },
            C = { ".": "decimal", ",": "group", "%": "percentSign", "+": "plusSign", "-": "minusSign", E: "exponential", "‰": "perMille" },
            D = function (a) {
                var b,
                    c = {};
                for (b in C) c[b] = B(C[b], a);
                return c;
            },
            E = function (a) {
                return isNaN(a) ? NaN : Math[a < 0 ? "ceil" : "floor"](a);
            },
            F = function (a) {
                return (
                    (a = a || "round"),
                    (a = "truncate" === a ? E : Math[a]),
                    function (b, c) {
                        var d, e;
                        if (((b = +b), isNaN(b))) return NaN;
                        if ("object" == typeof c && c.exponent) {
                            if (((d = +c.exponent), (e = 1), 0 === d)) return a(b);
                            if ("number" != typeof d || d % 1 !== 0) return NaN;
                        } else {
                            if (((e = +c || 1), 1 === e)) return a(b);
                            if (isNaN(e)) return NaN;
                            (e = e.toExponential().split("e")), (d = +e[1]), (e = +e[0]);
                        }
                        return (
                            (b = b.toString().split("e")),
                            (b[0] = +b[0] / e),
                            (b[1] = b[1] ? +b[1] - d : -d),
                            (b = a(+(b[0] + "e" + b[1]))),
                            (b = b.toString().split("e")),
                            (b[0] = +b[0] * e),
                            (b[1] = b[1] ? +b[1] + d : d),
                            +(b[0] + "e" + b[1])
                        );
                    }
                );
            },
            G = function (a, b, c) {
                function d(a, b) {
                    a in c && (k[b] = c[a]);
                }
                var e, f, g, h, i, j, k;
                return (
                    (c = c || {}),
                    (a = a.split(";")),
                    (i = a[0]),
                    (e = a[1] || "-" + i),
                    (g = A(e)),
                    (f = g[0]),
                    (h = g[10]),
                    (j = F(c.round)),
                    (j.generatorString = function () {
                        return "numberRound(" + (c.round ? '"' + c.round + '"' : "") + ")";
                    }),
                    (k = A(i).concat([i, f + i + h, f, h, j, B("infinity", b), B("nan", b), D(b), y(b)])),
                    d("minimumIntegerDigits", 2),
                    d("minimumFractionDigits", 3),
                    d("maximumFractionDigits", 4),
                    d("minimumSignificantDigits", 5),
                    d("maximumSignificantDigits", 6),
                    c.useGrouping === !1 && (k[8] = null),
                    "minimumFractionDigits" in c && !("maximumFractionDigits" in c) ? (k[4] = Math.max(k[3], k[4])) : !("minimumFractionDigits" in c) && "maximumFractionDigits" in c && (k[3] = Math.min(k[3], k[4])),
                    k
                );
            },
            H = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,
            I = /[\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]/g,
            J = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,
            K = function (a) {
                return a.replace(H, "").replace(I, "-").replace(J, " ");
            },
            L = function (a, b) {
                function c(a) {
                    return function (b) {
                        switch (
                            ((b = b
                                .split("")
                                .map(function (a) {
                                    return g[a] || f[a] || a;
                                })
                                .join("")),
                            a)
                        ) {
                            case "infinity":
                                i = 1 / 0;
                                break;
                            case "nan":
                                i = NaN;
                                break;
                            case "number":
                                (b = b.replace(/,/g, "")), (i = +b);
                                break;
                            case "prefix":
                            case "negativePrefix":
                                j = b;
                                break;
                            case "suffix":
                                l = b;
                                break;
                            case "negativeSuffix":
                                (l = b), (h = !0);
                                break;
                            default:
                                throw new Error("Internal error");
                        }
                        return "";
                    };
                }
                function d(a, b) {
                    return b.some(function (b) {
                        var d = a;
                        return (
                            b.every(function (a) {
                                return null !== d.match(m[a]) && ((d = d.replace(m[a], c(a))), !0);
                            }) && !d.length
                        );
                    });
                }
                var e, f, g, h, i, j, k, l, m, n;
                return (
                    (e = [["nan"], ["prefix", "infinity", "suffix"], ["prefix", "number", "suffix"], ["negativePrefix", "infinity", "negativeSuffix"], ["negativePrefix", "number", "negativeSuffix"]]),
                    (g = b[0]),
                    (f = b[1] || {}),
                    (m = b[2]),
                    (a = K(a)),
                    (n = d(a, e)),
                    !n || isNaN(i) ? NaN : ((k = "" + j + l), k.indexOf("%") !== -1 ? (i /= 100) : k.indexOf("‰") !== -1 && (i /= 1e3), h && (i *= -1), i)
                );
            },
            M = function (a) {
                return function (b) {
                    return j(b, "value"), p(b, "value"), L(b, a);
                };
            },
            N = function (a) {
                var b,
                    c = {};
                for (b in C) c[B(C[b], a)] = b;
                return c;
            },
            O = function (a, b) {
                return Object.keys(a)
                    .map(function (c) {
                        return b([c, a[c]]);
                    })
                    .reduce(function (a, b) {
                        return (a[b[0]] = b[1]), a;
                    }, {});
            },
            P = function (a, b, c) {
                var d,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r,
                    s,
                    t,
                    v,
                    w,
                    x,
                    y,
                    z = G(a, b, c);
                return (
                    (t = K(z[0])),
                    (l = z[4]),
                    (n = z[5]),
                    (m = z[6]),
                    (v = z[8]),
                    (w = z[9]),
                    (x = K(z[10])),
                    (p = K(z[13])),
                    (q = K(z[14])),
                    (i = K(z[16])),
                    (o = K(z[17])),
                    (y = O(z[18], function (a) {
                        return [a[0], K(a[1])];
                    })),
                    (r = z[19]),
                    (k = O(N(b), function (a) {
                        return [K(a[0]), a[1]];
                    })),
                    (g = r ? "[" + r + "]" : "\\d"),
                    (h = e(y[","])),
                    (f = e(y["."])),
                    r &&
                        (j = r.split("").reduce(function (a, b, c) {
                            return (a[b] = String(c)), a;
                        }, {})),
                    (d = [t, x, p, q].map(function (a) {
                        return a.replace(/('([^']|'')+'|'')|./g, function (a, b) {
                            return b
                                ? u(b)
                                : (a = a.replace(/[\-+E%\u2030]/, function (a) {
                                      return y[a];
                                  }));
                        });
                    })),
                    (t = d[0]),
                    (x = d[1]),
                    (p = d[2]),
                    (q = d[3]),
                    (s = g + "+"),
                    v && ((d = w ? g + "{1," + w + "}((" + h + g + "{" + w + "})*(" + h + g + "{" + v + "}))" : g + "{1," + v + "}(" + h + g + "{" + v + "})+"), (s = "(" + d + "|" + s + ")")),
                    (isNaN(n * m) && !l) || ((d = f + g + "+"), (s = s + "(" + d + "|" + f + ")?|(" + s + ")?" + d), (s = "(" + s + ")")),
                    [
                        k,
                        j,
                        {
                            infinity: new RegExp("^" + e(i)),
                            nan: new RegExp("^" + e(o)),
                            negativePrefix: new RegExp("^" + e(p)),
                            negativeSuffix: new RegExp("^" + e(q)),
                            number: new RegExp("^" + s),
                            prefix: new RegExp("^" + e(t)),
                            suffix: new RegExp("^" + e(x)),
                        },
                    ]
                );
            },
            Q = function (a, b) {
                if ("decimal" !== a && "percent" !== a) throw new Error("Invalid style");
                return b.main(["numbers", a + "Formats-numberSystem-" + x(b), "standard"]);
            };
        return (
            (b.numberFormatter = b.prototype.numberFormatter = function (a) {
                var b, d, e, g, j;
                return m(a, "options"), (a = a || {}), (d = this.cldr), (b = [a]), i(d), d.on("get", h), (e = a.raw ? a.raw : Q(a.style || "decimal", d)), (g = G(e, d, a)), d.off("get", h), c(g), (j = w(g)), f(b, d, j, [g]), j;
            }),
            (b.numberParser = b.prototype.numberParser = function (a) {
                var b, c, d, e, g;
                return m(a, "options"), (a = a || {}), (c = this.cldr), (b = [a]), i(c), c.on("get", h), (d = a.raw ? a.raw : Q(a.style || "decimal", c)), (e = P(d, c, a)), c.off("get", h), (g = M(e)), f(b, c, g, [e]), g;
            }),
            (b.formatNumber = b.prototype.formatNumber = function (a, b) {
                return j(a, "value"), o(a, "value"), this.numberFormatter(b)(a);
            }),
            (b.parseNumber = b.prototype.parseNumber = function (a, b) {
                return j(a, "value"), p(a, "value"), this.numberParser(b)(a);
            }),
            (b._createErrorUnsupportedFeature = n),
            (b._numberNumberingSystem = x),
            (b._numberNumberingSystemDigitsMap = y),
            (b._numberPattern = Q),
            (b._numberSymbol = B),
            (b._looseMatching = K),
            (b._removeLiteralQuotes = u),
            (b._stringPad = g),
            (b._validateParameterTypeNumber = o),
            (b._validateParameterTypeString = p),
            b
        );
    }),
    (function (a, b) {
        "function" == typeof define && define.amd
            ? define(["cldr", "../globalize", "./number", "cldr/event", "cldr/supplemental"], b)
            : "object" == typeof exports
            ? (module.exports = b(require("cldrjs"), require("../globalize")))
            : b(a.Cldr, a.Globalize);
    })(this, function (a, b) {
        function c(a) {
            return void 0 !== a.skeleton || void 0 !== a.date || void 0 !== a.time || void 0 !== a.datetime || void 0 !== a.raw;
        }
        function d(a, b) {
            u(a, b, {
                skip: [
                    /dates\/calendars\/gregorian\/dateTimeFormats\/availableFormats/,
                    /dates\/calendars\/gregorian\/days\/.*\/short/,
                    /dates\/timeZoneNames\/zone/,
                    /dates\/timeZoneNames\/metazone/,
                    /globalize-iana/,
                    /supplemental\/metaZones/,
                    /supplemental\/timeData\/(?!001)/,
                    /supplemental\/weekData\/(?!001)/,
                ],
            });
        }
        function e(a) {
            f("date", a), f("time", a), f("datetime", a);
        }
        function f(a, b) {
            var c = b[a];
            t("E_INVALID_OPTIONS", 'Invalid `{{type}: "{value}"}`.', void 0 === c || ["short", "medium", "long", "full"].indexOf(c) !== -1, { type: a, value: c });
        }
        function g(a, b) {
            t("E_INVALID_OPTIONS", 'Invalid `{skeleton: "{value}"}` based on provided CLDR.', void 0 === b || ("string" == typeof a && a), { type: "skeleton", value: b });
        }
        function h(a) {
            return function (b, c) {
                /globalize-iana/.test(b) && t("E_MISSING_IANA_TZ", "Missing required IANA timezone content for `{timeZone}`: `{path}`.", c, { path: b.replace(/globalize-iana\//, ""), timeZone: a });
            };
        }
        var i = b._createError,
            j = b._createErrorUnsupportedFeature,
            k = b._formatMessage,
            l = b._isPlainObject,
            m = b._looseMatching,
            n = b._numberNumberingSystemDigitsMap,
            o = b._numberSymbol,
            p = b._regexpEscape,
            q = b._removeLiteralQuotes,
            r = b._runtimeBind,
            s = b._stringPad,
            t = b._validate,
            u = b._validateCldr,
            v = b._validateDefaultLocale,
            w = b._validateParameterPresence,
            x = b._validateParameterType,
            y = b._validateParameterTypePlainObject,
            z = b._validateParameterTypeString,
            A = function (a, b) {
                x(a, b, void 0 === a || a instanceof Date, "Date");
            },
            B = function (a, b) {
                return i("E_INVALID_PAR_VALUE", "Invalid `{name}` value ({value}).", { name: a, value: b });
            },
            C = "GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx".split("").reduce(function (a, b, c) {
                return (a[b] = c), a;
            }, {}),
            D = function (a) {
                var b,
                    c = C;
                a.replace(/[^GyYuUrQqMLlwWEecdDFghHKkmsSAzZOvVXx]/, function (b) {
                    throw i("E_INVALID_OPTIONS", "Invalid field `{invalidField}` of skeleton `{value}`", { invalidField: b, type: "skeleton", value: a });
                }),
                    a.split("").every(function (d) {
                        if (c[d] < b) throw i("E_INVALID_OPTIONS", "Invalid order `{invalidField}` of skeleton `{value}`", { invalidField: d, type: "skeleton", value: a });
                        return (b = c[d]), !0;
                    });
            },
            E = function (a, b) {
                return (
                    (b =
                        b ||
                        function (a, b, c) {
                            return (a[c] = b), a;
                        }),
                    Object.keys(a).reduce(function (c, d) {
                        return b(c, d, a[d]);
                    }, {})
                );
            },
            F = E({ e: "eEc", L: "ML" }, function (a, b, c) {
                return (
                    c.split("").forEach(function (c) {
                        a[c] = b;
                    }),
                    a
                );
            }),
            G = function (a) {
                return F[a] || a;
            },
            H = /([a-z])\1*|'([^']|'')+'|''|./gi,
            I = function (a, b) {
                var c,
                    d = "";
                for (c = 0; c < b; c++) d += a;
                return d;
            },
            J = function (a, b) {
                var c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i = G;
                for (a = a.match(H), b = b.match(H), c = 0; c < b.length; c++) for (e = b[c].charAt(0), f = b[c].length, d = 0; d < a.length; d++) (g = a[d].charAt(0)), (h = a[d].length), i(e) === i(g) && f < h && (b[c] = I(e, h));
                return b.join("");
            },
            K = function (a, b) {
                var c,
                    d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l = G;
                if (a === b) return 0;
                if (((a = a.match(H)), (b = b.match(H)), a.length !== b.length)) return -1;
                for (e = 1, j = 0; j < a.length; j++) {
                    for (c = a[j].charAt(0), h = l(c), i = null, k = 0; k < b.length && ((d = b[k].charAt(0)), (i = l(d)), h !== i); k++) i = null;
                    if (null === i) return -1;
                    (f = a[j].length), (g = b[k].length), (e += Math.abs(f - g)), c !== d && (e += 1), ((f < 3 && g >= 3) || (f >= 3 && g < 3)) && (e += 20);
                }
                return e;
            },
            L = function (a, b) {
                var c,
                    d,
                    e,
                    f,
                    g = "dates/calendars/gregorian/dateTimeFormats/availableFormats",
                    h = J,
                    i = K;
                if (((d = a.main([g, b])), b && !d)) {
                    (c = a.main([g])), (e = []);
                    for (f in c) e.push({ skeleton: f, pattern: c[f], rate: i(b, f) });
                    (e = e
                        .filter(function (a) {
                            return a.rate > -1;
                        })
                        .sort(function (a, b) {
                            return a.rate - b.rate;
                        })),
                        e.length && (d = h(b, e[0].pattern));
                }
                return d;
            },
            M = function (a, b) {
                function c(a, c, d) {
                    return k(b.main(["dates/calendars/gregorian/dateTimeFormats", a]), [d, c]);
                }
                var d,
                    e,
                    f,
                    g,
                    h,
                    i = L;
                switch (!0) {
                    case "skeleton" in a:
                        if (
                            ((f = a.skeleton),
                            (f = f.replace(/j/g, function () {
                                return b.supplemental.timeData.preferred();
                            })),
                            D(f),
                            (e = i(b, f)))
                        )
                            break;
                        (g = f.split(/[^hHKkmsSAzZOvVXx]/).slice(-1)[0]),
                            (d = f.split(/[^GyYuUrQqMLlwWdDFgEec]/)[0]),
                            (d = i(b, d)),
                            (g = i(b, g)),
                            (h = /(MMMM|LLLL).*[Ec]/.test(d) ? "full" : /MMMM|LLLL/.test(d) ? "long" : /MMM|LLL/.test(d) ? "medium" : "short"),
                            (e = d && g ? c(h, d, g) : d || g);
                        break;
                    case "date" in a:
                    case "time" in a:
                        e = b.main(["dates/calendars/gregorian", "date" in a ? "dateFormats" : "timeFormats", a.date || a.time]);
                        break;
                    case "datetime" in a:
                        e = c(a.datetime, b.main(["dates/calendars/gregorian/dateFormats", a.datetime]), b.main(["dates/calendars/gregorian/timeFormats", a.datetime]));
                        break;
                    case "raw" in a:
                        e = a.raw;
                        break;
                    default:
                        throw B({ name: "options", value: a });
                }
                return e;
            },
            N = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
            O = function (a) {
                return N.indexOf(a.supplemental.weekData.firstDay());
            },
            P = function (a, b, c, d) {
                var e, f;
                if (c)
                    return (f = d.main(["dates/timeZoneNames/zone", c, a < 4 ? "short" : "long", b]))
                        ? f
                        : ((e = d.supplemental(["metaZones/metazoneInfo/timezone", c, 0, "usesMetazone/_mzone"])), d.main(["dates/timeZoneNames/metazone", e, a < 4 ? "short" : "long", b]));
            },
            Q = function (a) {
                return a
                    .split(";")
                    .map(function (a) {
                        return a.slice(0, a.indexOf("H") + 1);
                    })
                    .join(";");
            },
            R = function (a, b) {
                return a
                    .split(";")
                    .map(function (a) {
                        var c = a.split(/H+/);
                        return c.splice(1, 0, b), c.join("");
                    })
                    .join(";");
            },
            S = function (a, b) {
                var c = function () {
                    return b;
                };
                return (c.dataCacheKey = a), c;
            },
            T = function (a, b, c) {
                function d(a) {
                    e.numberFormatters[a] = s("", a);
                }
                var e = { numberFormatters: {}, pattern: a, timeSeparator: o("timeSeparator", b) },
                    f = ["abbreviated", "wide", "narrow"];
                return (
                    c && (e.timeZoneData = S("iana/" + c, { offsets: b.get(["globalize-iana/zoneData", c, "offsets"]), untils: b.get(["globalize-iana/zoneData", c, "untils"]), isdsts: b.get(["globalize-iana/zoneData", c, "isdsts"]) })),
                    a.replace(H, function (g) {
                        var h, i, l, m, n, o, p;
                        switch (
                            ((i = g.charAt(0)),
                            (o = g.length),
                            "j" === i && (e.preferredTime = i = b.supplemental.timeData.preferred()),
                            "Z" === i && 4 === o && ((i = "O"), (o = 4)),
                            "z" === i && ((p = P(o, "standard", c, b)), (l = P(o, "daylight", c, b)), p && (e.standardTzName = p), l && (e.daylightTzName = l), (p && l) || ((i = "O"), o < 4 && (o = 1))),
                            "v" === i && ((n = P(o, "generic", c, b)), n || ((i = "V"), (o = 4))),
                            i)
                        ) {
                            case "G":
                                e.eras = b.main(["dates/calendars/gregorian/eras", o <= 3 ? "eraAbbr" : 4 === o ? "eraNames" : "eraNarrow"]);
                                break;
                            case "y":
                                m = !0;
                                break;
                            case "Y":
                                (e.firstDay = O(b)), (e.minDays = b.supplemental.weekData.minDays()), (m = !0);
                                break;
                            case "u":
                            case "U":
                                throw j({ feature: "year pattern `" + i + "`" });
                            case "Q":
                            case "q":
                                o > 2
                                    ? (e.quarters || (e.quarters = {}), e.quarters[i] || (e.quarters[i] = {}), (e.quarters[i][o] = b.main(["dates/calendars/gregorian/quarters", "Q" === i ? "format" : "stand-alone", f[o - 3]])))
                                    : (m = !0);
                                break;
                            case "M":
                            case "L":
                                o > 2 ? (e.months || (e.months = {}), e.months[i] || (e.months[i] = {}), (e.months[i][o] = b.main(["dates/calendars/gregorian/months", "M" === i ? "format" : "stand-alone", f[o - 3]]))) : (m = !0);
                                break;
                            case "w":
                            case "W":
                                (e.firstDay = O(b)), (e.minDays = b.supplemental.weekData.minDays()), (m = !0);
                                break;
                            case "d":
                            case "D":
                            case "F":
                                m = !0;
                                break;
                            case "g":
                                throw j({ feature: "Julian day pattern `g`" });
                            case "e":
                            case "c":
                                if (o <= 2) {
                                    (e.firstDay = O(b)), (m = !0);
                                    break;
                                }
                            case "E":
                                e.days || (e.days = {}),
                                    e.days[i] || (e.days[i] = {}),
                                    6 === o
                                        ? (e.days[i][o] =
                                              b.main(["dates/calendars/gregorian/days", "c" === i ? "stand-alone" : "format", "short"]) || b.main(["dates/calendars/gregorian/days", "c" === i ? "stand-alone" : "format", "abbreviated"]))
                                        : (e.days[i][o] = b.main(["dates/calendars/gregorian/days", "c" === i ? "stand-alone" : "format", f[o < 3 ? 0 : o - 3]]));
                                break;
                            case "a":
                                e.dayPeriods = { am: b.main("dates/calendars/gregorian/dayPeriods/format/wide/am"), pm: b.main("dates/calendars/gregorian/dayPeriods/format/wide/pm") };
                                break;
                            case "h":
                            case "H":
                            case "K":
                            case "k":
                            case "m":
                            case "s":
                            case "S":
                            case "A":
                                m = !0;
                                break;
                            case "v":
                                if (1 !== o && 4 !== o) throw j({ feature: "timezone pattern `" + a + "`" });
                                e.genericTzName = n;
                                break;
                            case "V":
                                if (1 === o) throw j({ feature: "timezone pattern `" + a + "`" });
                                if (c) {
                                    if (2 === o) {
                                        e.timeZoneName = c;
                                        break;
                                    }
                                    var q,
                                        r = b.main(["dates/timeZoneNames/zone", c, "exemplarCity"]);
                                    if ((3 === o && (r || (r = b.main(["dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"])), (q = r)), r && 4 === o && (q = k(b.main("dates/timeZoneNames/regionFormat"), [r])), q)) {
                                        e.timeZoneName = q;
                                        break;
                                    }
                                }
                                "v" === g && (o = 1);
                            case "O":
                                (e.gmtFormat = b.main("dates/timeZoneNames/gmtFormat")),
                                    (e.gmtZeroFormat = b.main("dates/timeZoneNames/gmtZeroFormat")),
                                    (h = b.main("dates/timeZoneNames/hourFormat")),
                                    (e.hourFormat = o < 4 ? [Q(h), R(h, "H")] : R(h, "HH"));
                            case "Z":
                            case "X":
                            case "x":
                                d(1), d(2);
                        }
                        m && d(o);
                    }),
                    e
                );
            },
            U = function (a) {
                return function (b) {
                    return a(b)
                        .map(function (a) {
                            return a.value;
                        })
                        .join("");
                };
            },
            V = function (a, b) {
                var c = { preferredTimeData: a.supplemental.timeData.preferred() };
                return (
                    b && (c.timeZoneData = S("iana/" + b, { offsets: a.get(["globalize-iana/zoneData", b, "offsets"]), untils: a.get(["globalize-iana/zoneData", b, "untils"]), isdsts: a.get(["globalize-iana/zoneData", b, "isdsts"]) })), c
                );
            },
            W = (function () {
                function a(a, b, c) {
                    Object.defineProperty(a, b, { value: c });
                }
                function b(a, b) {
                    for (var c = 0, d = a.getTime(); c < b.length - 1 && d >= b[c]; ) c++;
                    return c;
                }
                function c(a) {
                    var b = this.getTimezoneOffset(),
                        c = a();
                    this.original.setTime(new Date(this.getTime()));
                    var d = this.getTimezoneOffset();
                    return d - b && this.original.setMinutes(this.original.getMinutes() + d - b), c;
                }
                var d = function (b, d) {
                    if ((a(this, "original", new Date(b.getTime())), a(this, "local", new Date(b.getTime())), a(this, "timeZoneData", d), a(this, "setWrap", c), !(d.untils && d.offsets && d.isdsts))) throw new Error("Invalid IANA data");
                    this.setTime(this.local.getTime() - 60 * this.getTimezoneOffset() * 1e3);
                };
                return (
                    (d.prototype.clone = function () {
                        return new d(this.original, this.timeZoneData);
                    }),
                    ["getFullYear", "getMonth", "getDate", "getDay", "getHours", "getMinutes", "getSeconds", "getMilliseconds"].forEach(function (a) {
                        var b = "getUTC" + a.substr(3);
                        d.prototype[a] = function () {
                            return this.local[b]();
                        };
                    }),
                    (d.prototype.valueOf = d.prototype.getTime = function () {
                        return this.local.getTime() + 60 * this.getTimezoneOffset() * 1e3;
                    }),
                    (d.prototype.getTimezoneOffset = function () {
                        var a = b(this.original, this.timeZoneData.untils);
                        return this.timeZoneData.offsets[a];
                    }),
                    ["setFullYear", "setMonth", "setDate", "setHours", "setMinutes", "setSeconds", "setMilliseconds"].forEach(function (a) {
                        var b = "setUTC" + a.substr(3);
                        d.prototype[a] = function (a) {
                            var c = this.local;
                            return this.setWrap(function () {
                                return c[b](a);
                            });
                        };
                    }),
                    (d.prototype.setTime = function (a) {
                        return this.local.setTime(a);
                    }),
                    (d.prototype.isDST = function () {
                        var a = b(this.original, this.timeZoneData.untils);
                        return Boolean(this.timeZoneData.isdsts[a]);
                    }),
                    (d.prototype.inspect = function () {
                        var a = b(this.original, this.timeZoneData.untils),
                            c = this.timeZoneData.abbrs;
                        return this.local.toISOString().replace(/Z$/, "") + " " + ((c && c[a] + " ") || this.getTimezoneOffset() * -1 + " ") + (this.isDST() ? "(daylight savings)" : "");
                    }),
                    (d.prototype.toDate = function () {
                        return new Date(this.getTime());
                    }),
                    ["toISOString", "toJSON", "toUTCString"].forEach(function (a) {
                        d.prototype[a] = function () {
                            return this.toDate()[a]();
                        };
                    }),
                    d
                );
            })(),
            X = function (a) {
                return 1 === new Date(a, 1, 29).getMonth();
            },
            Y = function (a) {
                return new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate();
            },
            Z = function (a, b) {
                switch (((a = a instanceof W ? a.clone() : new Date(a.getTime())), b)) {
                    case "year":
                        a.setMonth(0);
                    case "month":
                        a.setDate(1);
                    case "day":
                        a.setHours(0);
                    case "hour":
                        a.setMinutes(0);
                    case "minute":
                        a.setSeconds(0);
                    case "second":
                        a.setMilliseconds(0);
                }
                return a;
            },
            $ = function (a, b) {
                var c = new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate();
                a.setDate(b < 1 ? 1 : b < c ? b : c);
            },
            _ = function (a, b) {
                var c = a.getDate();
                a.setDate(1), a.setMonth(b), $(a, c);
            },
            aa = function (a, b, c) {
                return a < b || a > c;
            },
            ba = function (a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    k,
                    l,
                    m,
                    n = 0,
                    o = 1,
                    p = 2,
                    q = 3,
                    r = 4,
                    s = 5,
                    t = 6,
                    u = new Date(),
                    v = [],
                    w = ["year", "month", "day", "hour", "minute", "second", "milliseconds"];
                if ((c.timeZoneData && (u = new W(u, c.timeZoneData())), !b.length)) return null;
                if (
                    ((m = b.every(function (a) {
                        var b, m, w, x;
                        if ("literal" === a.type) return !0;
                        switch (((m = a.type.charAt(0)), (x = a.type.length), "j" === m && (m = c.preferredTimeData), m)) {
                            case "G":
                                v.push(n), (h = +a.value);
                                break;
                            case "y":
                                if (((w = a.value), 2 === x)) {
                                    if (aa(w, 0, 99)) return !1;
                                    (b = 100 * Math.floor(u.getFullYear() / 100)), (w += b), w > u.getFullYear() + 20 && (w -= 100);
                                }
                                u.setFullYear(w), v.push(n);
                                break;
                            case "Y":
                                throw j({ feature: "year pattern `" + m + "`" });
                            case "Q":
                            case "q":
                                break;
                            case "M":
                            case "L":
                                if (((w = x <= 2 ? a.value : +a.value), aa(w, 1, 12))) return !1;
                                (g = w), v.push(o);
                                break;
                            case "w":
                            case "W":
                                break;
                            case "d":
                                (e = a.value), v.push(p);
                                break;
                            case "D":
                                (f = a.value), v.push(p);
                                break;
                            case "F":
                                break;
                            case "e":
                            case "c":
                            case "E":
                                break;
                            case "a":
                                d = a.value;
                                break;
                            case "h":
                                if (((w = a.value), aa(w, 1, 12))) return !1;
                                (i = k = !0), u.setHours(12 === w ? 0 : w), v.push(q);
                                break;
                            case "K":
                                if (((w = a.value), aa(w, 0, 11))) return !1;
                                (i = k = !0), u.setHours(w), v.push(q);
                                break;
                            case "k":
                                if (((w = a.value), aa(w, 1, 24))) return !1;
                                (i = !0), u.setHours(24 === w ? 0 : w), v.push(q);
                                break;
                            case "H":
                                if (((w = a.value), aa(w, 0, 23))) return !1;
                                (i = !0), u.setHours(w), v.push(q);
                                break;
                            case "m":
                                if (((w = a.value), aa(w, 0, 59))) return !1;
                                u.setMinutes(w), v.push(r);
                                break;
                            case "s":
                                if (((w = a.value), aa(w, 0, 59))) return !1;
                                u.setSeconds(w), v.push(s);
                                break;
                            case "A":
                                u.setHours(0), u.setMinutes(0), u.setSeconds(0);
                            case "S":
                                (w = Math.round(a.value * Math.pow(10, 3 - x))), u.setMilliseconds(w), v.push(t);
                                break;
                            case "z":
                            case "Z":
                            case "O":
                            case "v":
                            case "V":
                            case "X":
                            case "x":
                                "number" == typeof a.value && (l = a.value);
                        }
                        return !0;
                    })),
                    !m)
                )
                    return null;
                if (i && !(!d ^ k)) return null;
                if ((0 === h && u.setFullYear(u.getFullYear() * -1 + 1), void 0 !== g && _(u, g - 1), void 0 !== e)) {
                    if (aa(e, 1, Y(u))) return null;
                    u.setDate(e);
                } else if (void 0 !== f) {
                    if (aa(f, 1, X(u.getFullYear()) ? 366 : 365)) return null;
                    u.setMonth(0), u.setDate(f);
                }
                return k && "pm" === d && u.setHours(u.getHours() + 12), void 0 !== l && u.setMinutes(u.getMinutes() + l - u.getTimezoneOffset()), (v = Math.max.apply(null, v)), (u = Z(u, w[v])), u instanceof W && (u = u.toDate()), u;
            },
            ca = function (a, b, c) {
                var d,
                    e,
                    f = [],
                    g = ["abbreviated", "wide", "narrow"];
                return (
                    (d = c.digitsRe),
                    (a = m(a)),
                    (e = c.pattern.match(H).every(function (e) {
                        function h(b, c) {
                            var d,
                                e,
                                f = a.match(b);
                            return (
                                (c =
                                    c ||
                                    function (a) {
                                        return +a;
                                    }),
                                !!f &&
                                    ((e = f[1]),
                                    f.length < 6
                                        ? ((d = e ? 1 : 3), (u.value = 60 * c(f[d])))
                                        : f.length < 10
                                        ? ((d = e ? [1, 3] : [5, 7]), (u.value = 60 * c(f[d[0]]) + c(f[d[1]])))
                                        : ((d = e ? [1, 3, 5] : [7, 9, 11]), (u.value = 60 * c(f[d[0]]) + c(f[d[1]]) + c(f[d[2]]) / 60)),
                                    e && (u.value *= -1),
                                    !0)
                            );
                        }
                        function i() {
                            if (1 === r) return (s = !0), (t = d);
                        }
                        function j() {
                            if (1 === r) return (s = !0), (t = new RegExp("^(" + d.source + "){1,2}"));
                        }
                        function k() {
                            if (1 === r || 2 === r) return (s = !0), (t = new RegExp("^(" + d.source + "){1,2}"));
                        }
                        function l() {
                            if (2 === r) return (s = !0), (t = new RegExp("^(" + d.source + "){2}"));
                        }
                        function m(b) {
                            var d = c[b.join("/")];
                            return d
                                ? (d.some(function (b) {
                                      var c = b[1];
                                      if (c.test(a)) return (u.value = b[0]), (t = b[1]), !0;
                                  }),
                                  null)
                                : null;
                        }
                        var n,
                            o,
                            r,
                            s,
                            t,
                            u = {};
                        switch (
                            ((u.type = e),
                            (o = e.charAt(0)),
                            (r = e.length),
                            "Z" === o && (r < 4 ? ((o = "x"), (r = 4)) : r < 5 ? ((o = "O"), (r = 4)) : ((o = "X"), (r = 5))),
                            "z" === o && c.standardOrDaylightTzName && ((u.value = null), (t = c.standardOrDaylightTzName)),
                            "v" === o && (c.genericTzName ? ((u.value = null), (t = c.genericTzName)) : ((o = "V"), (r = 4))),
                            "V" === o && c.timeZoneName && ((u.value = 2 === r ? c.timeZoneName : null), (t = c.timeZoneNameRe)),
                            o)
                        ) {
                            case "G":
                                m(["gregorian/eras", r <= 3 ? "eraAbbr" : 4 === r ? "eraNames" : "eraNarrow"]);
                                break;
                            case "y":
                            case "Y":
                                (s = !0), (t = 1 === r ? new RegExp("^(" + d.source + ")+") : 2 === r ? new RegExp("^(" + d.source + "){1,2}") : new RegExp("^(" + d.source + "){" + r + ",}"));
                                break;
                            case "Q":
                            case "q":
                                i() || l() || m(["gregorian/quarters", "Q" === o ? "format" : "stand-alone", g[r - 3]]);
                                break;
                            case "M":
                            case "L":
                                k() || m(["gregorian/months", "M" === o ? "format" : "stand-alone", g[r - 3]]);
                                break;
                            case "D":
                                r <= 3 && ((s = !0), (t = new RegExp("^(" + d.source + "){" + r + ",3}")));
                                break;
                            case "W":
                            case "F":
                                i();
                                break;
                            case "e":
                            case "c":
                                if (r <= 2) {
                                    i() || l();
                                    break;
                                }
                            case "E":
                                6 === r
                                    ? m(["gregorian/days", ["c" === o ? "stand-alone" : "format"], "short"]) || m(["gregorian/days", ["c" === o ? "stand-alone" : "format"], "abbreviated"])
                                    : m(["gregorian/days", ["c" === o ? "stand-alone" : "format"], g[r < 3 ? 0 : r - 3]]);
                                break;
                            case "a":
                                m(["gregorian/dayPeriods/format/wide"]);
                                break;
                            case "w":
                                j() || l();
                                break;
                            case "d":
                            case "h":
                            case "H":
                            case "K":
                            case "k":
                            case "j":
                            case "m":
                            case "s":
                                k();
                                break;
                            case "S":
                                (s = !0), (t = new RegExp("^(" + d.source + "){" + r + "}"));
                                break;
                            case "A":
                                (s = !0), (t = new RegExp("^(" + d.source + "){" + (r + 5) + "}"));
                                break;
                            case "v":
                            case "V":
                            case "z":
                                if (t && t.test(a)) break;
                                if ("V" === o && 2 === r) break;
                            case "O":
                                if (a === c["timeZoneNames/gmtZeroFormat"]) (u.value = 0), (t = c["timeZoneNames/gmtZeroFormatRe"]);
                                else if (
                                    ((n = c["timeZoneNames/hourFormat"].some(function (a) {
                                        if (h(a, b)) return (t = a), !0;
                                    })),
                                    !n)
                                )
                                    return null;
                                break;
                            case "X":
                                if ("Z" === a) {
                                    (u.value = 0), (t = /^Z/);
                                    break;
                                }
                            case "x":
                                if (
                                    ((n = c.x.some(function (a) {
                                        if (h(a)) return (t = a), !0;
                                    })),
                                    !n)
                                )
                                    return null;
                                break;
                            case "'":
                                (u.type = "literal"), (t = new RegExp("^" + p(q(e))));
                                break;
                            default:
                                (u.type = "literal"), (t = new RegExp("^" + p(e)));
                        }
                        return (
                            !!t &&
                            ((a = a.replace(t, function (a) {
                                return (u.lexeme = a), s && (u.value = b(a)), "";
                            })),
                            !!u.lexeme && (!s || !isNaN(u.value)) && (f.push(u), !0))
                        );
                    })),
                    "" !== a && (e = !1),
                    e ? f : []
                );
            },
            da = function (a, b, c) {
                return function (d) {
                    var e;
                    return w(d, "value"), z(d, "value"), (e = ca(d, a, c)), ba(d, e, b) || null;
                };
            },
            ea = function (a, b) {
                var c,
                    d = {};
                for (c in a) b.test(c) && (d[c] = a[c]);
                return d;
            },
            fa = function (a, b, c) {
                function d(a, b, c, d) {
                    var e;
                    return (
                        c || (c = "\\d"),
                        b || (b = "{0}"),
                        (e = a
                            .replace("+", "\\+")
                            .replace(/HH|mm|ss/g, "((" + c + "){2})")
                            .replace(/H|m/g, "((" + c + "){1,2})")),
                        d && (e = e.replace(/:/g, d)),
                        (e = e
                            .split(";")
                            .map(function (a) {
                                return b.replace("{0}", a);
                            })
                            .join("|")),
                        new RegExp("^" + e)
                    );
                }
                function e(a, b) {
                    var c = /(timeZoneNames\/zone|supplemental\/metaZones|timeZoneNames\/metazone|timeZoneNames\/regionFormat|timeZoneNames\/gmtFormat)/;
                    c.test(a) ||
                        (b &&
                            ((a = a.replace(/^.*\/dates\//, "").replace(/calendars\//, "")),
                            "gregorian/dayPeriods/format/wide" === a && (b = ea(b, /^am|^pm/)),
                            (b = l(b)
                                ? Object.keys(b)
                                      .map(function (a) {
                                          return [a, new RegExp("^" + p(m(b[a])))];
                                      })
                                      .sort(function (a, b) {
                                          return b[1].source.length - a[1].source.length;
                                      })
                                : m(b)),
                            (h[a] = b)));
                }
                function f(a) {
                    return (
                        "(" +
                        a
                            .filter(function (a) {
                                return a;
                            })
                            .reduce(function (a, b) {
                                return a + "|" + b;
                            }) +
                        ")"
                    );
                }
                var g,
                    h = { pattern: m(a) },
                    i = o("timeSeparator", b),
                    q = ["abbreviated", "wide", "narrow"];
                return (
                    (g = n(b)),
                    (g = g ? "[" + g + "]" : "\\d"),
                    (h.digitsRe = new RegExp(g)),
                    b.on("get", e),
                    a.match(H).forEach(function (e) {
                        var l, n, o, r, s, t;
                        if (
                            ((n = e.charAt(0)),
                            (s = e.length),
                            "Z" === n && (s < 5 ? ((n = "O"), (s = 4)) : ((n = "X"), (s = 5))),
                            "z" === n &&
                                ((t = P(s, "standard", c, b)),
                                (o = P(s, "daylight", c, b)),
                                t && (t = p(m(t))),
                                o && (o = p(m(o))),
                                (t || o) && (h.standardOrDaylightTzName = new RegExp("^" + f([t, o]))),
                                (t && o) || ((n = "O"), s < 4 && (s = 1))),
                            "v" === n)
                        ) {
                            if (1 !== s && 4 !== s) throw j({ feature: "timezone pattern `" + a + "`" });
                            var u = P(s, "generic", c, b);
                            u ? ((h.genericTzName = new RegExp("^" + p(m(u)))), (n = "O")) : ((n = "V"), (s = 4));
                        }
                        switch (n) {
                            case "G":
                                b.main(["dates/calendars/gregorian/eras", s <= 3 ? "eraAbbr" : 4 === s ? "eraNames" : "eraNarrow"]);
                                break;
                            case "u":
                            case "U":
                                throw j({ feature: "year pattern `" + n + "`" });
                            case "Q":
                            case "q":
                                s > 2 && b.main(["dates/calendars/gregorian/quarters", "Q" === n ? "format" : "stand-alone", q[s - 3]]);
                                break;
                            case "M":
                            case "L":
                                s > 2 && b.main(["dates/calendars/gregorian/months", "M" === n ? "format" : "stand-alone", q[s - 3]]);
                                break;
                            case "g":
                                throw j({ feature: "Julian day pattern `g`" });
                            case "e":
                            case "c":
                                if (s <= 2) break;
                            case "E":
                                6 === s
                                    ? b.main(["dates/calendars/gregorian/days", ["c" === n ? "stand-alone" : "format"], "short"]) || b.main(["dates/calendars/gregorian/days", ["c" === n ? "stand-alone" : "format"], "abbreviated"])
                                    : b.main(["dates/calendars/gregorian/days", ["c" === n ? "stand-alone" : "format"], q[s < 3 ? 0 : s - 3]]);
                                break;
                            case "a":
                                b.main("dates/calendars/gregorian/dayPeriods/format/wide");
                                break;
                            case "V":
                                if (1 === s) throw j({ feature: "timezone pattern `" + a + "`" });
                                if (c) {
                                    if (2 === s) {
                                        (h.timeZoneName = c), (h.timeZoneNameRe = new RegExp("^" + p(c)));
                                        break;
                                    }
                                    var v,
                                        w = b.main(["dates/timeZoneNames/zone", c, "exemplarCity"]);
                                    3 === s && (w || (w = b.main(["dates/timeZoneNames/zone/Etc/Unknown/exemplarCity"])), (v = w)),
                                        w && 4 === s && (v = k(b.main("dates/timeZoneNames/regionFormat"), [w])),
                                        v && ((v = m(v)), (h.timeZoneName = v), (h.timeZoneNameRe = new RegExp("^" + p(v))));
                                }
                                "v" === e && (s = 1);
                            case "z":
                            case "O":
                                (r = b.main("dates/timeZoneNames/gmtFormat")),
                                    b.main("dates/timeZoneNames/gmtZeroFormat"),
                                    b.main("dates/timeZoneNames/hourFormat"),
                                    (h["timeZoneNames/gmtZeroFormatRe"] = new RegExp("^" + p(h["timeZoneNames/gmtZeroFormat"]))),
                                    (l = h["timeZoneNames/hourFormat"]),
                                    (h["timeZoneNames/hourFormat"] = (s < 4 ? [R(l, "H"), Q(l)] : [R(l, "HH")]).map(function (a) {
                                        return d(a, r, g, i);
                                    }));
                            case "X":
                            case "x":
                                h.x = [["+HHmm;-HHmm", "+HH;-HH"], ["+HHmm;-HHmm"], ["+HH:mm;-HH:mm"], ["+HHmmss;-HHmmss", "+HHmm;-HHmm"], ["+HH:mm:ss;-HH:mm:ss", "+HH:mm;-HH:mm"]][s - 1].map(function (a) {
                                    return d(a);
                                });
                        }
                    }),
                    b.off("get", e),
                    h
                );
            },
            ga = function (a, b) {
                return (a.getDay() - b + 7) % 7;
            },
            ha = function (a, b) {
                var c = 864e5;
                return (b.getTime() - a.getTime()) / c;
            },
            ia = function (a) {
                return Math.floor(ha(Z(a, "year"), a));
            },
            ja = E({ era: "G", year: "yY", quarter: "qQ", month: "ML", week: "wW", day: "dDF", weekday: "ecE", dayperiod: "a", hour: "hHkK", minute: "m", second: "sSA", zone: "zvVOxX" }, function (a, b, c) {
                return (
                    c.split("").forEach(function (c) {
                        a[c] = b;
                    }),
                    a
                );
            }),
            ka = function (a) {
                return a - Z(a, "day");
            },
            la = function (a, b, c, d) {
                var e,
                    f = a.getTimezoneOffset();
                return (
                    (e = Math.abs(f)),
                    (d = d || {
                        1: function (a) {
                            return s(a, 1);
                        },
                        2: function (a) {
                            return s(a, 2);
                        },
                    }),
                    b
                        .split(";")
                        [f > 0 ? 1 : 0].replace(":", c)
                        .replace(/HH?/, function (a) {
                            return d[a.length](Math.floor(e / 60));
                        })
                        .replace(/mm/, function () {
                            return d[2](Math.floor(e % 60));
                        })
                        .replace(/ss/, function () {
                            return d[2](Math.floor((e % 1) * 60));
                        })
                );
            },
            ma = function (a, b, c) {
                var d = [],
                    e = c.timeSeparator;
                return (
                    c.timeZoneData && (a = new W(a, c.timeZoneData())),
                    c.pattern.replace(H, function (f) {
                        var g,
                            h,
                            i,
                            j,
                            k = f.charAt(0),
                            l = f.length;
                        switch (
                            ("j" === k && (k = c.preferredTime),
                            "Z" === k && (l < 4 ? ((k = "x"), (l = 4)) : l < 5 ? ((k = "O"), (l = 4)) : ((k = "X"), (l = 5))),
                            "z" === k && (a.isDST && (j = a.isDST() ? c.daylightTzName : c.standardTzName), j || ((k = "O"), l < 4 && (l = 1))),
                            k)
                        ) {
                            case "G":
                                j = c.eras[a.getFullYear() < 0 ? 0 : 1];
                                break;
                            case "y":
                                (j = a.getFullYear()), 2 === l && ((j = String(j)), (j = +j.substr(j.length - 2)));
                                break;
                            case "Y":
                                (j = new Date(a.getTime())), j.setDate(j.getDate() + 7 - ga(a, c.firstDay) - c.firstDay - c.minDays), (j = j.getFullYear()), 2 === l && ((j = String(j)), (j = +j.substr(j.length - 2)));
                                break;
                            case "Q":
                            case "q":
                                (j = Math.ceil((a.getMonth() + 1) / 3)), l > 2 && (j = c.quarters[k][l][j]);
                                break;
                            case "M":
                            case "L":
                                (j = a.getMonth() + 1), l > 2 && (j = c.months[k][l][j]);
                                break;
                            case "w":
                                (j = ga(Z(a, "year"), c.firstDay)), (j = Math.ceil((ia(a) + j) / 7) - (7 - j >= c.minDays ? 0 : 1));
                                break;
                            case "W":
                                (j = ga(Z(a, "month"), c.firstDay)), (j = Math.ceil((a.getDate() + j) / 7) - (7 - j >= c.minDays ? 0 : 1));
                                break;
                            case "d":
                                j = a.getDate();
                                break;
                            case "D":
                                j = ia(a) + 1;
                                break;
                            case "F":
                                j = Math.floor(a.getDate() / 7) + 1;
                                break;
                            case "e":
                            case "c":
                                if (l <= 2) {
                                    j = ga(a, c.firstDay) + 1;
                                    break;
                                }
                            case "E":
                                (j = N[a.getDay()]), (j = c.days[k][l][j]);
                                break;
                            case "a":
                                j = c.dayPeriods[a.getHours() < 12 ? "am" : "pm"];
                                break;
                            case "h":
                                j = a.getHours() % 12 || 12;
                                break;
                            case "H":
                                j = a.getHours();
                                break;
                            case "K":
                                j = a.getHours() % 12;
                                break;
                            case "k":
                                j = a.getHours() || 24;
                                break;
                            case "m":
                                j = a.getMinutes();
                                break;
                            case "s":
                                j = a.getSeconds();
                                break;
                            case "S":
                                j = Math.round(a.getMilliseconds() * Math.pow(10, l - 3));
                                break;
                            case "A":
                                j = Math.round(ka(a) * Math.pow(10, l - 3));
                                break;
                            case "z":
                                break;
                            case "v":
                                if (c.genericTzName) {
                                    j = c.genericTzName;
                                    break;
                                }
                            case "V":
                                if (c.timeZoneName) {
                                    j = c.timeZoneName;
                                    break;
                                }
                                "v" === f && (l = 1);
                            case "O":
                                0 === a.getTimezoneOffset()
                                    ? (j = c.gmtZeroFormat)
                                    : (l < 4 ? ((g = a.getTimezoneOffset()), (g = c.hourFormat[(g % 60) - (g % 1) === 0 ? 0 : 1])) : (g = c.hourFormat), (j = la(a, g, e, b)), (j = c.gmtFormat.replace(/\{0\}/, j)));
                                break;
                            case "X":
                                if (0 === a.getTimezoneOffset()) {
                                    j = "Z";
                                    break;
                                }
                            case "x":
                                (g = a.getTimezoneOffset()),
                                    1 === l && (g % 60) - (g % 1) !== 0 && (l += 1),
                                    (4 !== l && 5 !== l) || g % 1 !== 0 || (l -= 2),
                                    (j = ["+HH;-HH", "+HHmm;-HHmm", "+HH:mm;-HH:mm", "+HHmmss;-HHmmss", "+HH:mm:ss;-HH:mm:ss"][l - 1]),
                                    (j = la(a, j, ":"));
                                break;
                            case ":":
                                j = e;
                                break;
                            case "'":
                                j = q(f);
                                break;
                            default:
                                j = f;
                        }
                        return (
                            "number" == typeof j && (j = b[l](j)),
                            (h = ja[k]),
                            (i = h ? h : "literal"),
                            "literal" === i && d.length && "literal" === d[d.length - 1].type ? void (d[d.length - 1].value += j) : void d.push({ type: i, value: j })
                        );
                    }),
                    d
                );
            },
            na = function (a, b) {
                return function (c) {
                    return w(c, "value"), A(c, "value"), ma(c, a, b);
                };
            };
        return (
            (b.loadTimeZone = function (b) {
                var c = { "globalize-iana": b };
                w(b, "json"), y(b, "json"), a.load(c);
            }),
            (b.dateFormatter = b.prototype.dateFormatter = function (a) {
                var b, d, e;
                return y(a, "options"), (a = a || {}), c(a) || (a.skeleton = "yMd"), (b = [a]), (d = this.dateToPartsFormatter(a)), (e = U(d)), r(b, this.cldr, e, [d]), e;
            }),
            (b.dateToPartsFormatter = b.prototype.dateToPartsFormatter = function (a) {
                var b, f, i, j, k, l, m, n;
                y(a, "options"),
                    (f = this.cldr),
                    (a = a || {}),
                    c(a) || (a.skeleton = "yMd"),
                    e(a),
                    v(f),
                    (n = a.timeZone),
                    z(n, "options.timeZone"),
                    (b = [a]),
                    f.on("get", d),
                    n && f.on("get", h(n)),
                    (k = M(a, f)),
                    g(k, a.skeleton),
                    (l = T(k, f, n)),
                    f.off("get", d),
                    n && f.off("get", h(n)),
                    (i = l.numberFormatters),
                    delete l.numberFormatters;
                for (j in i) i[j] = this.numberFormatter({ raw: i[j] });
                return (m = na(i, l)), r(b, f, m, [i, l]), m;
            }),
            (b.dateParser = b.prototype.dateParser = function (a) {
                var b, f, i, j, k, l, m, n;
                return (
                    y(a, "options"),
                    (f = this.cldr),
                    (a = a || {}),
                    c(a) || (a.skeleton = "yMd"),
                    e(a),
                    v(f),
                    (m = a.timeZone),
                    z(m, "options.timeZone"),
                    (b = [a]),
                    f.on("get", d),
                    m && f.on("get", h(m)),
                    (k = M(a, f)),
                    g(k, a.skeleton),
                    (n = fa(k, f, m)),
                    (j = V(f, m)),
                    f.off("get", d),
                    m && f.off("get", h(m)),
                    (i = this.numberParser({ raw: "0" })),
                    (l = da(i, j, n)),
                    r(b, f, l, [i, j, n]),
                    l
                );
            }),
            (b.formatDate = b.prototype.formatDate = function (a, b) {
                return w(a, "value"), A(a, "value"), this.dateFormatter(b)(a);
            }),
            (b.formatDateToParts = b.prototype.formatDateToParts = function (a, b) {
                return w(a, "value"), A(a, "value"), this.dateToPartsFormatter(b)(a);
            }),
            (b.parseDate = b.prototype.parseDate = function (a, b) {
                return w(a, "value"), z(a, "value"), this.dateParser(b)(a);
            }),
            b
        );
    }),
    (function (a) {
        "function" == typeof define && define.amd ? define(a) : (window.purl = a());
    })(function () {
        function a(a, b) {
            for (var c = decodeURI(a), d = p[b ? "strict" : "loose"].exec(c), e = { attr: {}, param: {}, seg: {} }, g = 14; g--; ) e.attr[n[g]] = d[g] || "";
            return (
                (e.param.query = f(e.attr.query)),
                (e.param.fragment = f(e.attr.fragment)),
                (e.seg.path = e.attr.path.replace(/^\/+|\/+$/g, "").split("/")),
                (e.seg.fragment = e.attr.fragment.replace(/^\/+|\/+$/g, "").split("/")),
                (e.attr.base = e.attr.host ? (e.attr.protocol ? e.attr.protocol + "://" + e.attr.host : e.attr.host) + (e.attr.port ? ":" + e.attr.port : "") : ""),
                e
            );
        }
        function b(a) {
            var b = a.tagName;
            return "undefined" != typeof b ? m[b.toLowerCase()] : b;
        }
        function c(a, b) {
            if (0 === a[b].length) return (a[b] = {});
            var c = {};
            for (var d in a[b]) c[d] = a[b][d];
            return (a[b] = c), c;
        }
        function d(a, b, e, f) {
            var g = a.shift();
            if (g) {
                var h = (b[e] = b[e] || []);
                "]" == g
                    ? j(h)
                        ? "" !== f && h.push(f)
                        : "object" == typeof h
                        ? (h[k(h).length] = f)
                        : (h = b[e] = [b[e], f])
                    : ~g.indexOf("]")
                    ? ((g = g.substr(0, g.length - 1)), !q.test(g) && j(h) && (h = c(b, e)), d(a, h, g, f))
                    : (!q.test(g) && j(h) && (h = c(b, e)), d(a, h, g, f));
            } else j(b[e]) ? b[e].push(f) : "object" == typeof b[e] ? (b[e] = f) : "undefined" == typeof b[e] ? (b[e] = f) : (b[e] = [b[e], f]);
        }
        function e(a, b, c) {
            if (~b.indexOf("]")) {
                var e = b.split("[");
                d(e, a, "base", c);
            } else {
                if (!q.test(b) && j(a.base)) {
                    var f = {};
                    for (var h in a.base) f[h] = a.base[h];
                    a.base = f;
                }
                "" !== b && g(a.base, b, c);
            }
            return a;
        }
        function f(a) {
            return i(
                String(a).split(/&|;/),
                function (a, b) {
                    try {
                        b = decodeURIComponent(b.replace(/\+/g, " "));
                    } catch (c) {}
                    var d = b.indexOf("="),
                        f = h(b),
                        g = b.substr(0, f || d),
                        i = b.substr(f || d, b.length);
                    return (i = i.substr(i.indexOf("=") + 1, i.length)), "" === g && ((g = b), (i = "")), e(a, g, i);
                },
                { base: {} }
            ).base;
        }
        function g(a, b, c) {
            var d = a[b];
            "undefined" == typeof d ? (a[b] = c) : j(d) ? d.push(c) : (a[b] = [d, c]);
        }
        function h(a) {
            for (var b, c, d = a.length, e = 0; e < d; ++e) if (((c = a[e]), "]" == c && (b = !1), "[" == c && (b = !0), "=" == c && !b)) return e;
        }
        function i(a, b) {
            for (var c = 0, d = a.length >> 0, e = arguments[2]; c < d; ) c in a && (e = b.call(void 0, e, a[c], c, a)), ++c;
            return e;
        }
        function j(a) {
            return "[object Array]" === Object.prototype.toString.call(a);
        }
        function k(a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(c);
            return b;
        }
        function l(b, c) {
            return (
                1 === arguments.length && b === !0 && ((c = !0), (b = void 0)),
                (c = c || !1),
                (b = b || window.location.toString()),
                {
                    data: a(b, c),
                    attr: function (a) {
                        return (a = o[a] || a), "undefined" != typeof a ? this.data.attr[a] : this.data.attr;
                    },
                    param: function (a) {
                        return "undefined" != typeof a ? this.data.param.query[a] : this.data.param.query;
                    },
                    fparam: function (a) {
                        return "undefined" != typeof a ? this.data.param.fragment[a] : this.data.param.fragment;
                    },
                    segment: function (a) {
                        return "undefined" == typeof a ? this.data.seg.path : ((a = a < 0 ? this.data.seg.path.length + a : a - 1), this.data.seg.path[a]);
                    },
                    fsegment: function (a) {
                        return "undefined" == typeof a ? this.data.seg.fragment : ((a = a < 0 ? this.data.seg.fragment.length + a : a - 1), this.data.seg.fragment[a]);
                    },
                }
            );
        }
        var m = { a: "href", img: "src", form: "action", base: "href", script: "src", iframe: "src", link: "href", embed: "src", object: "data" },
            n = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
            o = { anchor: "fragment" },
            p = {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            },
            q = /^[0-9]+$/;
        return (
            (l.jQuery = function (a) {
                null != a &&
                    ((a.fn.url = function (c) {
                        var d = "";
                        return this.length && (d = a(this).attr(b(this[0])) || ""), l(d, c);
                    }),
                    (a.url = l));
            }),
            l.jQuery(window.jQuery),
            l
        );
    });

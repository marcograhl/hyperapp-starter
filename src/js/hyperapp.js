/* eslint-disable */
! function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((e = e || self).hyperapp = {})
}(this, function(e) {
    "use strict";
    var n = {},
        t = [],
        r = t.map,
        o = Array.isArray,
        l = "function" == typeof Promise ? function(e) {
            Promise.resolve().then(e)
        } : setTimeout,
        u = function(e, n) {
            var t = {};
            for (var r in e) t[r] = e[r];
            for (var r in n) t[r] = n[r];
            return t
        },
        i = function(e) {
            return e.reduce(function(e, n) {
                return e.concat(!(!n || !0 === n) && ("function" == typeof n[0] ? [n] : i(n)))
            }, t)
        },
        f = function(e, n) {
            return o(e) && o(n) && e[0] === n[0] && "function" == typeof e[0]
        },
        c = function(e, n) {
            for (var t in u(e, n)) {
                if (e[t] !== n[t] && !f(e[t], n[t])) return !0;
                n[t] = e[t]
            }
        },
        a = function(e) {
            var n = "",
                t = typeof e;
            if ("string" === t || "number" === t) return e;
            if (o(e) && e.length > 0)
                for (var r = 0; r < e.length; r++) "" !== (t = a(e[r])) && (n += (n && " ") + t);
            else
                for (var r in e) e[r] && (n += (n && " ") + r);
            return n
        },
        s = function(e, n, t, r, o, l) {
            if ("key" === n);
            else if ("style" === n)
                for (var i in u(t, r)) {
                    var f = null == r || null == r[i] ? "" : r[i];
                    "-" === i[0] ? e[n].setProperty(i, f) : e[n][i] = f
                } else "o" === n[0] && "n" === n[1] ? ((e.events || (e.events = {}))[n = n.slice(2).toLowerCase()] = r) ? t || e.addEventListener(n, o) : e.removeEventListener(n, o) : "list" !== n && !l && n in e ? e[n] = null == r ? "" : r : null == r || !1 === r || "class" === n && !(r = a(r)) ? e.removeAttribute(n) : e.setAttribute(n, r)
        },
        p = function(e, n) {
            e.removeChild(n.element)
        },
        m = function(e, n, t) {
            for (var r = 3 === e.type ? document.createTextNode(e.name) : (t = t || "svg" === e.name) ? document.createElementNS("http://www.w3.org/2000/svg", e.name) : document.createElement(e.name), o = e.props, l = 0, u = e.children.length; l < u; l++) r.appendChild(m(e.children[l] = d(e.children[l]), n, t));
            for (var i in o) s(r, i, null, o[i], n, t);
            return e.element = r
        },
        v = function(e) {
            return null == e ? null : e.key
        },
        y = function(e, n, t, r, o, l) {
            if (r === t);
            else if (null != t && 3 === t.type && 3 === r.type) t.name !== r.name && (n.nodeValue = r.name);
            else if (null == t || t.name !== r.name) {
                var i = e.insertBefore(m(r = d(r), o, l), n);
                null != t && p(e, t), n = i
            } else {
                var f, c;
                ! function(e, n, t, r, o) {
                    for (var l in u(n, t))("value" === l || "checked" === l ? e[l] : n[l]) !== t[l] && s(e, l, n[l], t[l], r, o)
                }(n, t.props, r.props, o, l = l || "svg" === r.name);
                for (var a, h = t.children, g = 0, k = h.length - 1, w = r.children, b = 0, z = w.length - 1; b <= z && g <= k && (C = v(h[g]), a = v(w[b]), null != C && C === a);) y(n, h[g].element, h[g], w[b] = d(w[b], h[g]), o, l), g++, b++;
                for (; b <= z && g <= k && (C = v(h[k]), a = v(w[z]), null != C && C === a);) y(n, h[k].element, h[k], w[z] = d(w[z], h[k]), o, l), k--, z--;
                if (g > k)
                    for (; b <= z;) n.insertBefore(m(w[b] = d(w[b++]), o, l), (c = h[g]) && c.element);
                else if (b > z)
                    for (; g <= k;) p(n, h[g++]);
                else {
                    for (var L = g, x = {}, A = {}; L <= k; L++) null != (C = h[L].key) && (x[C] = h[L]);
                    for (; b <= z;) C = v(c = h[g]), a = v(w[b] = d(w[b], c)), A[C] || null != a && a === v(h[g + 1]) ? (null == C && p(n, c), g++) : null == a || 1 === t.type ? (null == C && (y(n, c && c.element, c, w[b], o, l), b++), g++) : (C === a ? (y(n, c.element, c, w[b], o, l), A[a] = !0, g++) : null != (f = x[a]) ? (y(n, n.insertBefore(f.element, c && c.element), f, w[b], o, l), A[a] = !0) : y(n, c && c.element, null, w[b], o, l), b++);
                    for (; g <= k;) null == v(c = h[g++]) && p(n, c);
                    for (var C in x) null == A[C] && p(n, x[C])
                }
            }
            return r.element = n
        },
        d = function(e, n) {
            return 2 === e.type ? !n || function(e, n) {
                for (var t in e)
                    if (e[t] !== n[t]) return !0;
                for (var t in n)
                    if (e[t] !== n[t]) return !0
            }(e.lazy, n.lazy) ? e.render() : n : e
        },
        h = function(e, n, t, r, o, l) {
            return {
                name: e,
                props: n,
                children: t,
                element: r,
                type: l,
                key: o
            }
        },
        g = function(e, r) {
            return h(e, n, t, r, null, 3)
        },
        k = function(e) {
            return 3 === e.nodeType ? g(e.nodeValue, e) : w(e)
        },
        w = function(e) {
            return h(e.nodeName.toLowerCase(), n, r.call(e.childNodes, k), e, null, 1)
        };
    e.Lazy = function(e) {
        return {
            type: 2,
            key: e.key,
            lazy: e,
            render: function() {
                var n = e.render(e);
                return n.lazy = e, n
            }
        }
    }, e.h = function(e, t) {
        for (var r, l = [], u = [], i = arguments.length; i-- > 2;) l.push(arguments[i]);
        for (; l.length > 0;)
            if (o(r = l.pop()))
                for (i = r.length; i-- > 0;) l.push(r[i]);
            else !1 === r || !0 === r || null == r || u.push("object" == typeof r ? r : g(r));
        return t = t || n, "function" == typeof e ? e(t, u) : h(e, t, u, null, t.key, 0)
    }, e.app = function(e) {
        var n = e.container,
            t = n && n.children[0],
            r = t && w(t),
            u = e.subscriptions,
            f = e.view,
            a = !1,
            s = {},
            p = [],
            m = function(e) {
                d(e.currentTarget.events[e.type], e)
            },
            v = function(e) {
                s === e || a || l(h, a = !0), s = e
            },
            d = function(e, n) {
                "function" == typeof e ? d(e(s, n)) : o(e) ? "function" == typeof e[0] ? d(e[0](s, e[1], n)) : i(e.slice(1)).map(function(e) {
                    e && e[0](e[1], d)
                }, v(e[0])) : v(e)
            },
            h = function() {
                a = !1, u && (p = function(e, n, t) {
                    for (var r, o, l = 0, u = []; l < e.length || l < n.length; l++) r = e[l], u.push((o = n[l]) ? !r || o[0] !== r[0] || c(o[1], r[1]) ? [o[0], o[1], o[0](o[1], t), r && r[2]()] : r : r && r[2]());
                    return u
                }(p, i(u(s)), d)), f && (t = y(n, t, r, r = f(s), m))
            };
        d(e.init)
    }
});
//# sourceMappingURL=hyperapp.js.map
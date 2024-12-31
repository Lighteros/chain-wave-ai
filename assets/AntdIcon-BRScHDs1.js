import { a$ as n, ev as r, n as t, aw as e } from "./index-DPRREYlk.js";
var o = [],
  i = [];
function a(n, r) {
  if (((r = r || {}), void 0 === n))
    throw new Error(
      "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options])."
    );
  var t,
    e = !0 === r.prepend ? "prepend" : "append",
    a = void 0 !== r.container ? r.container : document.querySelector("head"),
    c = o.indexOf(a);
  return (
    -1 === c && ((c = o.push(a) - 1), (i[c] = {})),
    void 0 !== i[c] && void 0 !== i[c][e]
      ? (t = i[c][e])
      : ((t = i[c][e] =
          (function () {
            var n = document.createElement("style");
            return n.setAttribute("type", "text/css"), n;
          })()),
        "prepend" === e
          ? a.insertBefore(t, a.childNodes[0])
          : a.appendChild(t)),
    65279 === n.charCodeAt(0) && (n = n.substr(1, n.length)),
    t.styleSheet ? (t.styleSheet.cssText += n) : (t.textContent += n),
    t
  );
}
function c(n) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? Object(arguments[r]) : {},
      e = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols &&
      (e = e.concat(
        Object.getOwnPropertySymbols(t).filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })
      )),
      e.forEach(function (r) {
        l(n, r, t[r]);
      });
  }
  return n;
}
function l(n, r, t) {
  return (
    r in n
      ? Object.defineProperty(n, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[r] = t),
    n
  );
}
function u(n) {
  return (
    "object" == typeof n &&
    "string" == typeof n.name &&
    "string" == typeof n.theme &&
    ("object" == typeof n.icon || "function" == typeof n.icon)
  );
}
function s(r, t, e) {
  return n(
    r.tag,
    e ? c({ key: t }, e, r.attrs) : c({ key: t }, r.attrs),
    (r.children || []).map(function (n, e) {
      return s(n, "".concat(t, "-").concat(r.tag, "-").concat(e));
    })
  );
}
function f(n) {
  return r(n)[0];
}
function y(n) {
  return n ? (Array.isArray(n) ? n : [n]) : [];
}
var p = !1,
  d = ["icon", "primaryColor", "secondaryColor"];
function b(n, r) {
  if (null == n) return {};
  var t,
    e,
    o = (function (n, r) {
      if (null == n) return {};
      var t,
        e,
        o = {},
        i = Object.keys(n);
      for (e = 0; e < i.length; e++)
        (t = i[e]), r.indexOf(t) >= 0 || (o[t] = n[t]);
      return o;
    })(n, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    for (e = 0; e < i.length; e++)
      (t = i[e]),
        r.indexOf(t) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(n, t) && (o[t] = n[t]));
  }
  return o;
}
function m(n) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? Object(arguments[r]) : {},
      e = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols &&
      (e = e.concat(
        Object.getOwnPropertySymbols(t).filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })
      )),
      e.forEach(function (r) {
        g(n, r, t[r]);
      });
  }
  return n;
}
function g(n, r, t) {
  return (
    r in n
      ? Object.defineProperty(n, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[r] = t),
    n
  );
}
var v = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: !1 };
var h = function (n, r) {
  var e = m({}, n, r.attrs),
    o = e.icon,
    i = e.primaryColor,
    c = e.secondaryColor,
    l = b(e, d),
    y = v;
  if (
    (i && (y = { primaryColor: i, secondaryColor: c || f(i) }),
    (function () {
      var n =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
      t(function () {
        p ||
          ("undefined" != typeof window &&
            window.document &&
            window.document.documentElement &&
            a(n, { prepend: !0 }),
          (p = !0));
      });
    })(),
    u(o),
    !u(o))
  )
    return null;
  var g = o;
  return (
    g &&
      "function" == typeof g.icon &&
      (g = m({}, g, { icon: g.icon(y.primaryColor, y.secondaryColor) })),
    s(
      g.icon,
      "svg-".concat(g.name),
      m({}, l, {
        "data-icon": g.name,
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true",
      })
    )
  );
};
function O(n, r) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(n) ||
    (function (n, r) {
      var t =
        null == n
          ? null
          : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
            n["@@iterator"];
      if (null == t) return;
      var e,
        o,
        i = [],
        a = !0,
        c = !1;
      try {
        for (
          t = t.call(n);
          !(a = (e = t.next()).done) && (i.push(e.value), !r || i.length !== r);
          a = !0
        );
      } catch (l) {
        (c = !0), (o = l);
      } finally {
        try {
          a || null == t.return || t.return();
        } finally {
          if (c) throw o;
        }
      }
      return i;
    })(n, r) ||
    (function (n, r) {
      if (!n) return;
      if ("string" == typeof n) return w(n, r);
      var t = Object.prototype.toString.call(n).slice(8, -1);
      "Object" === t && n.constructor && (t = n.constructor.name);
      if ("Map" === t || "Set" === t) return Array.from(n);
      if (
        "Arguments" === t ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return w(n, r);
    })(n, r) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function w(n, r) {
  (null == r || r > n.length) && (r = n.length);
  for (var t = 0, e = new Array(r); t < r; t++) e[t] = n[t];
  return e;
}
function C(n) {
  var r = O(y(n), 2),
    t = r[0],
    e = r[1];
  return h.setTwoToneColors({ primaryColor: t, secondaryColor: e });
}
(h.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String,
}),
  (h.inheritAttrs = !1),
  (h.displayName = "IconBase"),
  (h.getTwoToneColors = function () {
    return m({}, v);
  }),
  (h.setTwoToneColors = function (n) {
    var r = n.primaryColor,
      t = n.secondaryColor;
    (v.primaryColor = r), (v.secondaryColor = t || f(r)), (v.calculated = !!t);
  });
var j = [
  "class",
  "icon",
  "spin",
  "rotate",
  "tabindex",
  "twoToneColor",
  "onClick",
];
function S(n, r) {
  return (
    (function (n) {
      if (Array.isArray(n)) return n;
    })(n) ||
    (function (n, r) {
      var t =
        null == n
          ? null
          : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
            n["@@iterator"];
      if (null == t) return;
      var e,
        o,
        i = [],
        a = !0,
        c = !1;
      try {
        for (
          t = t.call(n);
          !(a = (e = t.next()).done) && (i.push(e.value), !r || i.length !== r);
          a = !0
        );
      } catch (l) {
        (c = !0), (o = l);
      } finally {
        try {
          a || null == t.return || t.return();
        } finally {
          if (c) throw o;
        }
      }
      return i;
    })(n, r) ||
    (function (n, r) {
      if (!n) return;
      if ("string" == typeof n) return k(n, r);
      var t = Object.prototype.toString.call(n).slice(8, -1);
      "Object" === t && n.constructor && (t = n.constructor.name);
      if ("Map" === t || "Set" === t) return Array.from(n);
      if (
        "Arguments" === t ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return k(n, r);
    })(n, r) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function k(n, r) {
  (null == r || r > n.length) && (r = n.length);
  for (var t = 0, e = new Array(r); t < r; t++) e[t] = n[t];
  return e;
}
function x(n) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? Object(arguments[r]) : {},
      e = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols &&
      (e = e.concat(
        Object.getOwnPropertySymbols(t).filter(function (n) {
          return Object.getOwnPropertyDescriptor(t, n).enumerable;
        })
      )),
      e.forEach(function (r) {
        A(n, r, t[r]);
      });
  }
  return n;
}
function A(n, r, t) {
  return (
    r in n
      ? Object.defineProperty(n, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (n[r] = t),
    n
  );
}
function T(n, r) {
  if (null == n) return {};
  var t,
    e,
    o = (function (n, r) {
      if (null == n) return {};
      var t,
        e,
        o = {},
        i = Object.keys(n);
      for (e = 0; e < i.length; e++)
        (t = i[e]), r.indexOf(t) >= 0 || (o[t] = n[t]);
      return o;
    })(n, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    for (e = 0; e < i.length; e++)
      (t = i[e]),
        r.indexOf(t) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(n, t) && (o[t] = n[t]));
  }
  return o;
}
C("#1890ff");
var P = function (n, r) {
  var t,
    o = x({}, n, r.attrs),
    i = o.class,
    a = o.icon,
    c = o.spin,
    l = o.rotate,
    u = o.tabindex,
    s = o.twoToneColor,
    f = o.onClick,
    p = T(o, j),
    d =
      (A((t = { anticon: !0 }), "anticon-".concat(a.name), Boolean(a.name)),
      A(t, i, i),
      t),
    b = "" === c || c || "loading" === a.name ? "anticon-spin" : "",
    m = u;
  void 0 === m && f && ((m = -1), (p.tabindex = m));
  var g = l
      ? {
          msTransform: "rotate(".concat(l, "deg)"),
          transform: "rotate(".concat(l, "deg)"),
        }
      : void 0,
    v = S(y(s), 2),
    O = v[0],
    w = v[1];
  return e(
    "span",
    x({ role: "img", "aria-label": a.name }, p, { onClick: f, class: d }),
    [
      e(
        h,
        { class: b, icon: a, primaryColor: O, secondaryColor: w, style: g },
        null
      ),
    ]
  );
};
(P.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: String,
}),
  (P.displayName = "AntdIcon"),
  (P.inheritAttrs = !1),
  (P.getTwoToneColor = function () {
    var n = h.getTwoToneColors();
    return n.calculated ? [n.primaryColor, n.secondaryColor] : n.primaryColor;
  }),
  (P.setTwoToneColor = C);
export { P as I };

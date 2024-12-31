import {
  cH as e,
  bd as t,
  eu as r,
  i8 as n,
  aJ as a,
  cl as i,
  gE as l,
  bT as o,
  bq as s,
  c as u,
  aw as c,
  c7 as d,
  gV as f,
  aS as p,
  cR as v,
  aC as m,
  l as h,
  aT as g,
  aV as y,
  aW as b,
  eP as w,
  i9 as $,
  aX as x,
  as as F,
  r as q,
  aR as O,
  eT as C,
  ia as E,
  bY as k,
  co as S,
  df as A,
  cn as j,
  cp as P,
  eO as M,
  aK as I,
  b2 as V,
  gX as T,
  b1 as D,
  cO as W,
  ib as z,
  dZ as R,
  at as B,
  e3 as H,
  aL as _,
  cd as N,
  aU as L,
  n as X,
  cq as G,
  ct as Y,
  cs as J,
  ci as Z,
  ft as K,
  a as Q,
  a_ as U,
  fs as ee,
  ic as te,
  aQ as re,
  id as ne,
  ie as ae,
  ig as ie,
  f2 as le,
  d$ as oe,
  e2 as se,
  d_ as ue,
  gN as ce,
  e1 as de,
  ce as fe,
  eH as pe,
} from "./index-CcOpQHgp.js";
import { C as ve, A as me } from "./Col-CzWyjHl5.js";
import { t as he, d as ge } from "./debounce-CJY84BK1.js";
var ye = 1 / 0,
  be = 17976931348623157e292;
function we(e) {
  var t = (function (e) {
      return e
        ? (e = he(e)) === ye || e === -ye
          ? (e < 0 ? -1 : 1) * be
          : e == e
          ? e
          : 0
        : 0 === e
        ? e
        : 0;
    })(e),
    r = t % 1;
  return t == t ? (r ? t - r : t) : 0;
}
var $e = Math.max;
var xe,
  Fe =
    ((xe = function (e, r, a) {
      var i = null == e ? 0 : e.length;
      if (!i) return -1;
      var l = null == a ? 0 : we(a);
      return l < 0 && (l = $e(i + l, 0)), n(e, t(r), l);
    }),
    function (n, a, i) {
      var l = Object(n);
      if (!e(n)) {
        var o = t(a);
        (n = r(n)),
          (a = function (e) {
            return o(l[e], e, l);
          });
      }
      var s = xe(n, a, i);
      return s > -1 ? l[o ? n[s] : s] : void 0;
    });
function qe(e) {
  return "object" == typeof e && null != e && 1 === e.nodeType;
}
function Oe(e, t) {
  return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function Ce(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var r = getComputedStyle(e, null);
    return (
      Oe(r.overflowY, t) ||
      Oe(r.overflowX, t) ||
      (function (e) {
        var t = (function (e) {
          if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
          try {
            return e.ownerDocument.defaultView.frameElement;
          } catch (e) {
            return null;
          }
        })(e);
        return (
          !!t &&
          (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
        );
      })(e)
    );
  }
  return !1;
}
function Ee(e, t, r, n, a, i, l, o) {
  return (i < e && l > t) || (i > e && l < t)
    ? 0
    : (i <= e && o <= r) || (l >= t && o >= r)
    ? i - e - n
    : (l > t && o < r) || (i < e && o > r)
    ? l - t + a
    : 0;
}
var ke = function (e, t) {
  var r = window,
    n = t.scrollMode,
    a = t.block,
    i = t.inline,
    l = t.boundary,
    o = t.skipOverflowHiddenElements,
    s =
      "function" == typeof l
        ? l
        : function (e) {
            return e !== l;
          };
  if (!qe(e)) throw new TypeError("Invalid target");
  for (
    var u,
      c,
      d = document.scrollingElement || document.documentElement,
      f = [],
      p = e;
    qe(p) && s(p);

  ) {
    if (
      (p =
        null == (c = (u = p).parentElement)
          ? u.getRootNode().host || null
          : c) === d
    ) {
      f.push(p);
      break;
    }
    (null != p &&
      p === document.body &&
      Ce(p) &&
      !Ce(document.documentElement)) ||
      (null != p && Ce(p, o) && f.push(p));
  }
  for (
    var v = r.visualViewport ? r.visualViewport.width : innerWidth,
      m = r.visualViewport ? r.visualViewport.height : innerHeight,
      h = window.scrollX || pageXOffset,
      g = window.scrollY || pageYOffset,
      y = e.getBoundingClientRect(),
      b = y.height,
      w = y.width,
      $ = y.top,
      x = y.right,
      F = y.bottom,
      q = y.left,
      O = "start" === a || "nearest" === a ? $ : "end" === a ? F : $ + b / 2,
      C = "center" === i ? q + w / 2 : "end" === i ? x : q,
      E = [],
      k = 0;
    k < f.length;
    k++
  ) {
    var S = f[k],
      A = S.getBoundingClientRect(),
      j = A.height,
      P = A.width,
      M = A.top,
      I = A.right,
      V = A.bottom,
      T = A.left;
    if (
      "if-needed" === n &&
      $ >= 0 &&
      q >= 0 &&
      F <= m &&
      x <= v &&
      $ >= M &&
      F <= V &&
      q >= T &&
      x <= I
    )
      return E;
    var D = getComputedStyle(S),
      W = parseInt(D.borderLeftWidth, 10),
      z = parseInt(D.borderTopWidth, 10),
      R = parseInt(D.borderRightWidth, 10),
      B = parseInt(D.borderBottomWidth, 10),
      H = 0,
      _ = 0,
      N = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - W - R : 0,
      L = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - z - B : 0,
      X =
        "offsetWidth" in S ? (0 === S.offsetWidth ? 0 : P / S.offsetWidth) : 0,
      G =
        "offsetHeight" in S
          ? 0 === S.offsetHeight
            ? 0
            : j / S.offsetHeight
          : 0;
    if (d === S)
      (H =
        "start" === a
          ? O
          : "end" === a
          ? O - m
          : "nearest" === a
          ? Ee(g, g + m, m, z, B, g + O, g + O + b, b)
          : O - m / 2),
        (_ =
          "start" === i
            ? C
            : "center" === i
            ? C - v / 2
            : "end" === i
            ? C - v
            : Ee(h, h + v, v, W, R, h + C, h + C + w, w)),
        (H = Math.max(0, H + g)),
        (_ = Math.max(0, _ + h));
    else {
      (H =
        "start" === a
          ? O - M - z
          : "end" === a
          ? O - V + B + L
          : "nearest" === a
          ? Ee(M, V, j, z, B + L, O, O + b, b)
          : O - (M + j / 2) + L / 2),
        (_ =
          "start" === i
            ? C - T - W
            : "center" === i
            ? C - (T + P / 2) + N / 2
            : "end" === i
            ? C - I + R + N
            : Ee(T, I, P, W, R + N, C, C + w, w));
      var Y = S.scrollLeft,
        J = S.scrollTop;
      (O +=
        J - (H = Math.max(0, Math.min(J + H / G, S.scrollHeight - j / G + L)))),
        (C +=
          Y -
          (_ = Math.max(0, Math.min(Y + _ / X, S.scrollWidth - P / X + N))));
    }
    E.push({ el: S, top: H, left: _ });
  }
  return E;
};
function Se(e) {
  return e === Object(e) && 0 !== Object.keys(e).length;
}
function Ae(e, t) {
  var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (Se(t) && "function" == typeof t.behavior)
    return t.behavior(r ? ke(e, t) : []);
  if (r) {
    var n = (function (e) {
      return !1 === e
        ? { block: "end", inline: "nearest" }
        : Se(e)
        ? e
        : { block: "start", inline: "nearest" };
    })(t);
    return (function (e, t) {
      void 0 === t && (t = "auto");
      var r = "scrollBehavior" in document.body.style;
      e.forEach(function (e) {
        var n = e.el,
          a = e.top,
          i = e.left;
        n.scroll && r
          ? n.scroll({ top: a, left: i, behavior: t })
          : ((n.scrollTop = a), (n.scrollLeft = i));
      });
    })(ke(e, n), n.behavior);
  }
}
function je() {
  return (
    (je = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    je.apply(this, arguments)
  );
}
function Pe(e) {
  return (Pe = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
}
function Me(e, t) {
  return (Me = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
}
function Ie(e, t, r) {
  return (Ie = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (Oe) {
      return !1;
    }
  })()
    ? Reflect.construct.bind()
    : function (e, t, r) {
        var n = [null];
        n.push.apply(n, t);
        var a = new (Function.bind.apply(e, n))();
        return r && Me(a, r.prototype), a;
      }).apply(null, arguments);
}
function Ve(e) {
  var t = "function" == typeof Map ? new Map() : void 0;
  return (
    (Ve = function (e) {
      if (
        null === e ||
        ((r = e), -1 === Function.toString.call(r).indexOf("[native code]"))
      )
        return e;
      var r;
      if ("function" != typeof e)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, n);
      }
      function n() {
        return Ie(e, arguments, Pe(this).constructor);
      }
      return (
        (n.prototype = Object.create(e.prototype, {
          constructor: {
            value: n,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Me(n, e)
      );
    }),
    Ve(e)
  );
}
var Te = /%[sdj%]/g,
  De = function () {};
function We(e) {
  if (!e || !e.length) return null;
  var t = {};
  return (
    e.forEach(function (e) {
      var r = e.field;
      (t[r] = t[r] || []), t[r].push(e);
    }),
    t
  );
}
function ze(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  var a = 0,
    i = r.length;
  return "function" == typeof e
    ? e.apply(null, r)
    : "string" == typeof e
    ? e.replace(Te, function (e) {
        if ("%%" === e) return "%";
        if (a >= i) return e;
        switch (e) {
          case "%s":
            return String(r[a++]);
          case "%d":
            return Number(r[a++]);
          case "%j":
            try {
              return JSON.stringify(r[a++]);
            } catch (t) {
              return "[Circular]";
            }
            break;
          default:
            return e;
        }
      })
    : e;
}
function Re(e, t) {
  return (
    null == e ||
    !("array" !== t || !Array.isArray(e) || e.length) ||
    !(
      !(function (e) {
        return (
          "string" === e ||
          "url" === e ||
          "hex" === e ||
          "email" === e ||
          "date" === e ||
          "pattern" === e
        );
      })(t) ||
      "string" != typeof e ||
      e
    )
  );
}
function Be(e, t, r) {
  var n = 0,
    a = e.length;
  !(function i(l) {
    if (l && l.length) r(l);
    else {
      var o = n;
      (n += 1), o < a ? t(e[o], i) : r([]);
    }
  })([]);
}
var He = (function (e) {
  var t, r;
  function n(t, r) {
    var n;
    return (
      ((n = e.call(this, "Async Validation Error") || this).errors = t),
      (n.fields = r),
      n
    );
  }
  return (
    (r = e),
    ((t = n).prototype = Object.create(r.prototype)),
    (t.prototype.constructor = t),
    Me(t, r),
    n
  );
})(Ve(Error));
function _e(e, t, r, n, a) {
  if (t.first) {
    var i = new Promise(function (t, i) {
      var l = (function (e) {
        var t = [];
        return (
          Object.keys(e).forEach(function (r) {
            t.push.apply(t, e[r] || []);
          }),
          t
        );
      })(e);
      Be(l, r, function (e) {
        return n(e), e.length ? i(new He(e, We(e))) : t(a);
      });
    });
    return (
      i.catch(function (e) {
        return e;
      }),
      i
    );
  }
  var l = !0 === t.firstFields ? Object.keys(e) : t.firstFields || [],
    o = Object.keys(e),
    s = o.length,
    u = 0,
    c = [],
    d = new Promise(function (t, i) {
      var d = function (e) {
        if ((c.push.apply(c, e), ++u === s))
          return n(c), c.length ? i(new He(c, We(c))) : t(a);
      };
      o.length || (n(c), t(a)),
        o.forEach(function (t) {
          var n = e[t];
          -1 !== l.indexOf(t)
            ? Be(n, r, d)
            : (function (e, t, r) {
                var n = [],
                  a = 0,
                  i = e.length;
                function l(e) {
                  n.push.apply(n, e || []), ++a === i && r(n);
                }
                e.forEach(function (e) {
                  t(e, l);
                });
              })(n, r, d);
        });
    });
  return (
    d.catch(function (e) {
      return e;
    }),
    d
  );
}
function Ne(e, t) {
  return function (r) {
    var n, a;
    return (
      (n = e.fullFields
        ? (function (e, t) {
            for (var r = e, n = 0; n < t.length; n++) {
              if (null == r) return r;
              r = r[t[n]];
            }
            return r;
          })(t, e.fullFields)
        : t[r.field || e.fullField]),
      (a = r) && void 0 !== a.message
        ? ((r.field = r.field || e.fullField), (r.fieldValue = n), r)
        : {
            message: "function" == typeof r ? r() : r,
            fieldValue: n,
            field: r.field || e.fullField,
          }
    );
  };
}
function Le(e, t) {
  if (t)
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        "object" == typeof n && "object" == typeof e[r]
          ? (e[r] = je({}, e[r], n))
          : (e[r] = n);
      }
  return e;
}
var Xe,
  Ge = function (e, t, r, n, a, i) {
    !e.required ||
      (r.hasOwnProperty(e.field) && !Re(t, i || e.type)) ||
      n.push(ze(a.messages.required, e.fullField));
  },
  Ye =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  Je = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  Ze = {
    integer: function (e) {
      return Ze.number(e) && parseInt(e, 10) === e;
    },
    float: function (e) {
      return Ze.number(e) && !Ze.integer(e);
    },
    array: function (e) {
      return Array.isArray(e);
    },
    regexp: function (e) {
      if (e instanceof RegExp) return !0;
      try {
        return !!new RegExp(e);
      } catch (Oe) {
        return !1;
      }
    },
    date: function (e) {
      return (
        "function" == typeof e.getTime &&
        "function" == typeof e.getMonth &&
        "function" == typeof e.getYear &&
        !isNaN(e.getTime())
      );
    },
    number: function (e) {
      return !isNaN(e) && "number" == typeof e;
    },
    object: function (e) {
      return "object" == typeof e && !Ze.array(e);
    },
    method: function (e) {
      return "function" == typeof e;
    },
    email: function (e) {
      return "string" == typeof e && e.length <= 320 && !!e.match(Ye);
    },
    url: function (e) {
      return (
        "string" == typeof e &&
        e.length <= 2048 &&
        !!e.match(
          (function () {
            if (Xe) return Xe;
            var e = "[a-fA-F\\d:]",
              t = function (t) {
                return t && t.includeBoundaries
                  ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))"
                  : "";
              },
              r =
                "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
              n = "[a-fA-F\\d]{1,4}",
              a = (
                "\n(?:\n(?:" +
                n +
                ":){7}(?:" +
                n +
                "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" +
                n +
                ":){6}(?:" +
                r +
                "|:" +
                n +
                "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" +
                n +
                ":){5}(?::" +
                r +
                "|(?::" +
                n +
                "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" +
                n +
                ":){4}(?:(?::" +
                n +
                "){0,1}:" +
                r +
                "|(?::" +
                n +
                "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" +
                n +
                ":){3}(?:(?::" +
                n +
                "){0,2}:" +
                r +
                "|(?::" +
                n +
                "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" +
                n +
                ":){2}(?:(?::" +
                n +
                "){0,3}:" +
                r +
                "|(?::" +
                n +
                "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" +
                n +
                ":){1}(?:(?::" +
                n +
                "){0,4}:" +
                r +
                "|(?::" +
                n +
                "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" +
                n +
                "){0,5}:" +
                r +
                "|(?::" +
                n +
                "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n"
              )
                .replace(/\s*\/\/.*$/gm, "")
                .replace(/\n/g, "")
                .trim(),
              i = new RegExp("(?:^" + r + "$)|(?:^" + a + "$)"),
              l = new RegExp("^" + r + "$"),
              o = new RegExp("^" + a + "$"),
              s = function (e) {
                return e && e.exact
                  ? i
                  : new RegExp(
                      "(?:" + t(e) + r + t(e) + ")|(?:" + t(e) + a + t(e) + ")",
                      "g"
                    );
              };
            (s.v4 = function (e) {
              return e && e.exact ? l : new RegExp("" + t(e) + r + t(e), "g");
            }),
              (s.v6 = function (e) {
                return e && e.exact ? o : new RegExp("" + t(e) + a + t(e), "g");
              });
            var u = s.v4().source,
              c = s.v6().source;
            return (Xe = new RegExp(
              "(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|" +
                u +
                "|" +
                c +
                '|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',
              "i"
            ));
          })()
        )
      );
    },
    hex: function (e) {
      return "string" == typeof e && !!e.match(Je);
    },
  },
  Ke = "enum",
  Qe = {
    required: Ge,
    whitespace: function (e, t, r, n, a) {
      (/^\s+$/.test(t) || "" === t) &&
        n.push(ze(a.messages.whitespace, e.fullField));
    },
    type: function (e, t, r, n, a) {
      if (e.required && void 0 === t) Ge(e, t, r, n, a);
      else {
        var i = e.type;
        [
          "integer",
          "float",
          "array",
          "regexp",
          "object",
          "method",
          "email",
          "number",
          "date",
          "url",
          "hex",
        ].indexOf(i) > -1
          ? Ze[i](t) || n.push(ze(a.messages.types[i], e.fullField, e.type))
          : i &&
            typeof t !== e.type &&
            n.push(ze(a.messages.types[i], e.fullField, e.type));
      }
    },
    range: function (e, t, r, n, a) {
      var i = "number" == typeof e.len,
        l = "number" == typeof e.min,
        o = "number" == typeof e.max,
        s = t,
        u = null,
        c = "number" == typeof t,
        d = "string" == typeof t,
        f = Array.isArray(t);
      if ((c ? (u = "number") : d ? (u = "string") : f && (u = "array"), !u))
        return !1;
      f && (s = t.length),
        d && (s = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length),
        i
          ? s !== e.len && n.push(ze(a.messages[u].len, e.fullField, e.len))
          : l && !o && s < e.min
          ? n.push(ze(a.messages[u].min, e.fullField, e.min))
          : o && !l && s > e.max
          ? n.push(ze(a.messages[u].max, e.fullField, e.max))
          : l &&
            o &&
            (s < e.min || s > e.max) &&
            n.push(ze(a.messages[u].range, e.fullField, e.min, e.max));
    },
    enum: function (e, t, r, n, a) {
      (e[Ke] = Array.isArray(e[Ke]) ? e[Ke] : []),
        -1 === e[Ke].indexOf(t) &&
          n.push(ze(a.messages[Ke], e.fullField, e[Ke].join(", ")));
    },
    pattern: function (e, t, r, n, a) {
      if (e.pattern)
        if (e.pattern instanceof RegExp)
          (e.pattern.lastIndex = 0),
            e.pattern.test(t) ||
              n.push(
                ze(a.messages.pattern.mismatch, e.fullField, t, e.pattern)
              );
        else if ("string" == typeof e.pattern) {
          new RegExp(e.pattern).test(t) ||
            n.push(ze(a.messages.pattern.mismatch, e.fullField, t, e.pattern));
        }
    },
  },
  Ue = function (e, t, r, n, a) {
    var i = e.type,
      l = [];
    if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
      if (Re(t, i) && !e.required) return r();
      Qe.required(e, t, n, l, a, i), Re(t, i) || Qe.type(e, t, n, l, a);
    }
    r(l);
  },
  et = {
    string: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t, "string") && !e.required) return r();
        Qe.required(e, t, n, i, a, "string"),
          Re(t, "string") ||
            (Qe.type(e, t, n, i, a),
            Qe.range(e, t, n, i, a),
            Qe.pattern(e, t, n, i, a),
            !0 === e.whitespace && Qe.whitespace(e, t, n, i, a));
      }
      r(i);
    },
    method: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t) && !e.required) return r();
        Qe.required(e, t, n, i, a), void 0 !== t && Qe.type(e, t, n, i, a);
      }
      r(i);
    },
    number: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (("" === t && (t = void 0), Re(t) && !e.required)) return r();
        Qe.required(e, t, n, i, a),
          void 0 !== t && (Qe.type(e, t, n, i, a), Qe.range(e, t, n, i, a));
      }
      r(i);
    },
    boolean: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t) && !e.required) return r();
        Qe.required(e, t, n, i, a), void 0 !== t && Qe.type(e, t, n, i, a);
      }
      r(i);
    },
    regexp: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t) && !e.required) return r();
        Qe.required(e, t, n, i, a), Re(t) || Qe.type(e, t, n, i, a);
      }
      r(i);
    },
    integer: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t) && !e.required) return r();
        Qe.required(e, t, n, i, a),
          void 0 !== t && (Qe.type(e, t, n, i, a), Qe.range(e, t, n, i, a));
      }
      r(i);
    },
    float: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t) && !e.required) return r();
        Qe.required(e, t, n, i, a),
          void 0 !== t && (Qe.type(e, t, n, i, a), Qe.range(e, t, n, i, a));
      }
      r(i);
    },
    array: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (null == t && !e.required) return r();
        Qe.required(e, t, n, i, a, "array"),
          null != t && (Qe.type(e, t, n, i, a), Qe.range(e, t, n, i, a));
      }
      r(i);
    },
    object: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t) && !e.required) return r();
        Qe.required(e, t, n, i, a), void 0 !== t && Qe.type(e, t, n, i, a);
      }
      r(i);
    },
    enum: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t) && !e.required) return r();
        Qe.required(e, t, n, i, a), void 0 !== t && Qe.enum(e, t, n, i, a);
      }
      r(i);
    },
    pattern: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t, "string") && !e.required) return r();
        Qe.required(e, t, n, i, a),
          Re(t, "string") || Qe.pattern(e, t, n, i, a);
      }
      r(i);
    },
    date: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t, "date") && !e.required) return r();
        var l;
        if ((Qe.required(e, t, n, i, a), !Re(t, "date")))
          (l = t instanceof Date ? t : new Date(t)),
            Qe.type(e, l, n, i, a),
            l && Qe.range(e, l.getTime(), n, i, a);
      }
      r(i);
    },
    url: Ue,
    hex: Ue,
    email: Ue,
    required: function (e, t, r, n, a) {
      var i = [],
        l = Array.isArray(t) ? "array" : typeof t;
      Qe.required(e, t, n, i, a, l), r(i);
    },
    any: function (e, t, r, n, a) {
      var i = [];
      if (e.required || (!e.required && n.hasOwnProperty(e.field))) {
        if (Re(t) && !e.required) return r();
        Qe.required(e, t, n, i, a);
      }
      r(i);
    },
  };
function tt() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid",
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s",
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters",
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s",
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length",
    },
    pattern: { mismatch: "%s value %s does not match pattern %s" },
    clone: function () {
      var e = JSON.parse(JSON.stringify(this));
      return (e.clone = this.clone), e;
    },
  };
}
var rt = tt(),
  nt = (function () {
    function e(e) {
      (this.rules = null), (this._messages = rt), this.define(e);
    }
    var t = e.prototype;
    return (
      (t.define = function (e) {
        var t = this;
        if (!e) throw new Error("Cannot configure a schema with no rules");
        if ("object" != typeof e || Array.isArray(e))
          throw new Error("Rules must be an object");
        (this.rules = {}),
          Object.keys(e).forEach(function (r) {
            var n = e[r];
            t.rules[r] = Array.isArray(n) ? n : [n];
          });
      }),
      (t.messages = function (e) {
        return e && (this._messages = Le(tt(), e)), this._messages;
      }),
      (t.validate = function (t, r, n) {
        var a = this;
        void 0 === r && (r = {}), void 0 === n && (n = function () {});
        var i = t,
          l = r,
          o = n;
        if (
          ("function" == typeof l && ((o = l), (l = {})),
          !this.rules || 0 === Object.keys(this.rules).length)
        )
          return o && o(null, i), Promise.resolve(i);
        if (l.messages) {
          var s = this.messages();
          s === rt && (s = tt()), Le(s, l.messages), (l.messages = s);
        } else l.messages = this.messages();
        var u = {};
        (l.keys || Object.keys(this.rules)).forEach(function (e) {
          var r = a.rules[e],
            n = i[e];
          r.forEach(function (r) {
            var l = r;
            "function" == typeof l.transform &&
              (i === t && (i = je({}, i)), (n = i[e] = l.transform(n))),
              ((l =
                "function" == typeof l
                  ? { validator: l }
                  : je({}, l)).validator = a.getValidationMethod(l)),
              l.validator &&
                ((l.field = e),
                (l.fullField = l.fullField || e),
                (l.type = a.getType(l)),
                (u[e] = u[e] || []),
                u[e].push({ rule: l, value: n, source: i, field: e }));
          });
        });
        var c = {};
        return _e(
          u,
          l,
          function (t, r) {
            var n,
              a = t.rule,
              o = !(
                ("object" !== a.type && "array" !== a.type) ||
                ("object" != typeof a.fields &&
                  "object" != typeof a.defaultField)
              );
            function s(e, t) {
              return je({}, t, {
                fullField: a.fullField + "." + e,
                fullFields: a.fullFields ? [].concat(a.fullFields, [e]) : [e],
              });
            }
            function u(n) {
              void 0 === n && (n = []);
              var u = Array.isArray(n) ? n : [n];
              !l.suppressWarning &&
                u.length &&
                e.warning("async-validator:", u),
                u.length && void 0 !== a.message && (u = [].concat(a.message));
              var d = u.map(Ne(a, i));
              if (l.first && d.length) return (c[a.field] = 1), r(d);
              if (o) {
                if (a.required && !t.value)
                  return (
                    void 0 !== a.message
                      ? (d = [].concat(a.message).map(Ne(a, i)))
                      : l.error &&
                        (d = [l.error(a, ze(l.messages.required, a.field))]),
                    r(d)
                  );
                var f = {};
                a.defaultField &&
                  Object.keys(t.value).map(function (e) {
                    f[e] = a.defaultField;
                  }),
                  (f = je({}, f, t.rule.fields));
                var p = {};
                Object.keys(f).forEach(function (e) {
                  var t = f[e],
                    r = Array.isArray(t) ? t : [t];
                  p[e] = r.map(s.bind(null, e));
                });
                var v = new e(p);
                v.messages(l.messages),
                  t.rule.options &&
                    ((t.rule.options.messages = l.messages),
                    (t.rule.options.error = l.error)),
                  v.validate(t.value, t.rule.options || l, function (e) {
                    var t = [];
                    d && d.length && t.push.apply(t, d),
                      e && e.length && t.push.apply(t, e),
                      r(t.length ? t : null);
                  });
              } else r(d);
            }
            if (
              ((o = o && (a.required || (!a.required && t.value))),
              (a.field = t.field),
              a.asyncValidator)
            )
              n = a.asyncValidator(a, t.value, u, t.source, l);
            else if (a.validator) {
              try {
                n = a.validator(a, t.value, u, t.source, l);
              } catch (d) {
                console.error,
                  l.suppressValidatorError ||
                    setTimeout(function () {
                      throw d;
                    }, 0),
                  u(d.message);
              }
              !0 === n
                ? u()
                : !1 === n
                ? u(
                    "function" == typeof a.message
                      ? a.message(a.fullField || a.field)
                      : a.message || (a.fullField || a.field) + " fails"
                  )
                : n instanceof Array
                ? u(n)
                : n instanceof Error && u(n.message);
            }
            n &&
              n.then &&
              n.then(
                function () {
                  return u();
                },
                function (e) {
                  return u(e);
                }
              );
          },
          function (e) {
            !(function (e) {
              var t = [],
                r = {};
              function n(e) {
                var r;
                Array.isArray(e) ? (t = (r = t).concat.apply(r, e)) : t.push(e);
              }
              for (var a = 0; a < e.length; a++) n(e[a]);
              t.length ? ((r = We(t)), o(t, r)) : o(null, i);
            })(e);
          },
          i
        );
      }),
      (t.getType = function (e) {
        if (
          (void 0 === e.type &&
            e.pattern instanceof RegExp &&
            (e.type = "pattern"),
          "function" != typeof e.validator &&
            e.type &&
            !et.hasOwnProperty(e.type))
        )
          throw new Error(ze("Unknown rule type %s", e.type));
        return e.type || "string";
      }),
      (t.getValidationMethod = function (e) {
        if ("function" == typeof e.validator) return e.validator;
        var t = Object.keys(e),
          r = t.indexOf("message");
        return (
          -1 !== r && t.splice(r, 1),
          1 === t.length && "required" === t[0]
            ? et.required
            : et[this.getType(e)] || void 0
        );
      }),
      e
    );
  })();
function at(e) {
  return null == e ? [] : Array.isArray(e) ? e : [e];
}
function it(e, t) {
  let r = e;
  for (let n = 0; n < t.length; n += 1) {
    if (null == r) return;
    r = r[t[n]];
  }
  return r;
}
function lt(e, t, r, n) {
  if (!t.length) return r;
  const [i, ...l] = t;
  let o;
  return (
    (o =
      e || "number" != typeof i ? (Array.isArray(e) ? [...e] : a({}, e)) : []),
    n && void 0 === r && 1 === l.length
      ? delete o[i][l[0]]
      : (o[i] = lt(o[i], l, r, n)),
    o
  );
}
function ot(e, t, r) {
  let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return t.length && n && void 0 === r && !it(e, t.slice(0, -1))
    ? e
    : lt(e, t, r, n);
}
function st(e) {
  return at(e);
}
function ut(e) {
  return (
    "object" == typeof e &&
    null !== e &&
    Object.getPrototypeOf(e) === Object.prototype
  );
}
function ct(e, t) {
  const r = Array.isArray(e) ? [...e] : a({}, e);
  return t
    ? (Object.keys(t).forEach((e) => {
        const n = r[e],
          a = t[e],
          i = ut(n) && ut(a);
        r[e] = i ? ct(n, a || {}) : a;
      }),
      r)
    : r;
}
function dt(e) {
  for (
    var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  return r.reduce((e, t) => ct(e, t), e);
}
function ft(e, t) {
  let r = {};
  return (
    t.forEach((t) => {
      const n = (function (e, t) {
        return it(e, t);
      })(e, t);
      r = (function (e, t, r) {
        return ot(
          e,
          t,
          r,
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
        );
      })(r, t, n);
    }),
    r
  );
}
(nt.register = function (e, t) {
  if ("function" != typeof t)
    throw new Error(
      "Cannot register a validator by type, validator is not a function"
    );
  et[e] = t;
}),
  (nt.warning = De),
  (nt.messages = rt),
  (nt.validators = et);
const pt = "'${name}' is not a valid ${type}",
  vt = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: pt,
      method: pt,
      array: pt,
      object: pt,
      number: pt,
      date: pt,
      boolean: pt,
      integer: pt,
      float: pt,
      regexp: pt,
      email: pt,
      url: pt,
      hex: pt,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
  };
var mt = function (e, t, r, n) {
  return new (r || (r = Promise))(function (a, i) {
    function l(e) {
      try {
        s(n.next(e));
      } catch (Oe) {
        i(Oe);
      }
    }
    function o(e) {
      try {
        s(n.throw(e));
      } catch (Oe) {
        i(Oe);
      }
    }
    function s(e) {
      var t;
      e.done
        ? a(e.value)
        : ((t = e.value),
          t instanceof r
            ? t
            : new r(function (e) {
                e(t);
              })).then(l, o);
    }
    s((n = n.apply(e, t || [])).next());
  });
};
const ht = nt;
function gt(e, t, r, n, o) {
  return mt(this, void 0, void 0, function* () {
    const s = a({}, r);
    delete s.ruleIndex, delete s.trigger;
    let u = null;
    s &&
      "array" === s.type &&
      s.defaultField &&
      ((u = s.defaultField), delete s.defaultField);
    const c = new ht({ [e]: [s] }),
      d = dt({}, vt, n.validateMessages);
    c.messages(d);
    let f = [];
    try {
      yield Promise.resolve(c.validate({ [e]: t }, a({}, n)));
    } catch (m) {
      f = m.errors
        ? m.errors.map((e, t) => {
            let { message: r } = e;
            return i(r) ? l(r, { key: `error_${t}` }) : r;
          })
        : [d.default()];
    }
    if (!f.length && u) {
      const r = yield Promise.all(t.map((t, r) => gt(`${e}.${r}`, t, u, n, o)));
      return r.reduce((e, t) => [...e, ...t], []);
    }
    const p = a(a(a({}, r), { name: e, enum: (r.enum || []).join(", ") }), o),
      v = f.map((e) =>
        "string" == typeof e
          ? (function (e, t) {
              return e.replace(/\$\{\w+\}/g, (e) => {
                const r = e.slice(2, -1);
                return t[r];
              });
            })(e, p)
          : e
      );
    return v;
  });
}
function yt(e, t, r, n, i, l) {
  const o = e.join("."),
    s = r
      .map((e, t) => {
        const r = e.validator,
          n = a(a({}, e), { ruleIndex: t });
        return (
          r &&
            (n.validator = (e, t, n) => {
              let a = !1;
              const i = r(e, t, function () {
                for (
                  var e = arguments.length, t = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  t[r] = arguments[r];
                Promise.resolve().then(() => {
                  a || n(...t);
                });
              });
              (a =
                i &&
                "function" == typeof i.then &&
                "function" == typeof i.catch),
                a &&
                  i
                    .then(() => {
                      n();
                    })
                    .catch((e) => {
                      n(e || " ");
                    });
            }),
          n
        );
      })
      .sort((e, t) => {
        let { warningOnly: r, ruleIndex: n } = e,
          { warningOnly: a, ruleIndex: i } = t;
        return !!r == !!a ? n - i : r ? 1 : -1;
      });
  let u;
  if (!0 === i)
    u = new Promise((e, r) =>
      mt(this, void 0, void 0, function* () {
        for (let e = 0; e < s.length; e += 1) {
          const a = s[e],
            i = yield gt(o, t, a, n, l);
          if (i.length) return void r([{ errors: i, rule: a }]);
        }
        e([]);
      })
    );
  else {
    const e = s.map((e) =>
      gt(o, t, e, n, l).then((t) => ({ errors: t, rule: e }))
    );
    u = (
      i
        ? (function (e) {
            return mt(this, void 0, void 0, function* () {
              let t = 0;
              return new Promise((r) => {
                e.forEach((n) => {
                  n.then((n) => {
                    n.errors.length && r([n]),
                      (t += 1),
                      t === e.length && r([]);
                  });
                });
              });
            });
          })(e)
        : (function (e) {
            return mt(this, void 0, void 0, function* () {
              return Promise.all(e).then((e) => [].concat(...e));
            });
          })(e)
    ).then((e) => Promise.reject(e));
  }
  return u.catch((e) => e), u;
}
const bt = Symbol("formContextKey"),
  wt = (e) => {
    o(bt, e);
  },
  $t = () =>
    s(bt, {
      name: u(() => {}),
      labelAlign: u(() => "right"),
      vertical: u(() => !1),
      addField: (e, t) => {},
      removeField: (e) => {},
      model: u(() => {}),
      rules: u(() => {}),
      colon: u(() => {}),
      labelWrap: u(() => {}),
      labelCol: u(() => {}),
      requiredMark: u(() => !1),
      validateTrigger: u(() => {}),
      onValidate: () => {},
      validateMessages: u(() => vt),
    }),
  xt = Symbol("formItemPrefixContextKey");
var Ft = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z",
        },
      },
    ],
  },
  name: "question-circle",
  theme: "outlined",
};
function qt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        Ot(e, t, r[t]);
      });
  }
  return e;
}
function Ot(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Ct = function (e, t) {
  var r = qt({}, e, t.attrs);
  return c(d, qt({}, r, { icon: Ft }), null);
};
(Ct.displayName = "QuestionCircleOutlined"), (Ct.inheritAttrs = !1);
const Et = (e, t) => {
  let { slots: r, emit: n, attrs: i } = t;
  var l, o, s, u, d;
  const {
      prefixCls: y,
      htmlFor: b,
      labelCol: w,
      labelAlign: $,
      colon: x,
      required: F,
      requiredMark: q,
    } = a(a({}, e), i),
    [O] = f("Form"),
    C =
      null !== (l = e.label) && void 0 !== l
        ? l
        : null === (o = r.label) || void 0 === o
        ? void 0
        : o.call(r);
  if (!C) return null;
  const {
      vertical: E,
      labelAlign: k,
      labelCol: S,
      labelWrap: A,
      colon: j,
    } = $t(),
    P = w || (null == S ? void 0 : S.value) || {},
    M = $ || (null == k ? void 0 : k.value),
    I = `${y}-item-label`,
    V = p(I, "left" === M && `${I}-left`, P.class, {
      [`${I}-wrap`]: !!A.value,
    });
  let T = C;
  const D = !0 === x || (!1 !== (null == j ? void 0 : j.value) && !1 !== x);
  if (
    (D &&
      !E.value &&
      "string" == typeof C &&
      "" !== C.trim() &&
      (T = C.replace(/[:|：]\s*$/, "")),
    e.tooltip || r.tooltip)
  ) {
    const t = c("span", { class: `${y}-item-tooltip` }, [
      c(v, { title: e.tooltip }, { default: () => [c(Ct, null, null)] }),
    ]);
    T = c(m, null, [
      T,
      r.tooltip
        ? null === (s = r.tooltip) || void 0 === s
          ? void 0
          : s.call(r, { class: `${y}-item-tooltip` })
        : t,
    ]);
  }
  "optional" !== q ||
    F ||
    (T = c(m, null, [
      T,
      c("span", { class: `${y}-item-optional` }, [
        (null === (u = O.value) || void 0 === u ? void 0 : u.optional) ||
          (null === (d = h.Form) || void 0 === d ? void 0 : d.optional),
      ]),
    ]));
  const W = p({
    [`${y}-item-required`]: F,
    [`${y}-item-required-mark-optional`]: "optional" === q,
    [`${y}-item-no-colon`]: !D,
  });
  return c(ve, g(g({}, P), {}, { class: V }), {
    default: () => [
      c(
        "label",
        {
          for: b,
          class: W,
          title: "string" == typeof C ? C : "",
          onClick: (e) => n("click", e),
        },
        [T]
      ),
    ],
  });
};
(Et.displayName = "FormItemLabel"), (Et.inheritAttrs = !1);
const kt = (e) => {
    const { componentCls: t } = e,
      r = `${t}-show-help`,
      n = `${t}-show-help-item`;
    return {
      [r]: {
        transition: `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,
        "&-appear, &-enter": { opacity: 0, "&-active": { opacity: 1 } },
        "&-leave": { opacity: 1, "&-active": { opacity: 0 } },
        [n]: {
          overflow: "hidden",
          transition: `height ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},\n                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,
          [`&${n}-appear, &${n}-enter`]: {
            transform: "translateY(-5px)",
            opacity: 0,
            "&-active": { transform: "translateY(0)", opacity: 1 },
          },
          [`&${n}-leave-active`]: { transform: "translateY(-5px)" },
        },
      },
    };
  },
  St = (e) => ({
    legend: {
      display: "block",
      width: "100%",
      marginBottom: e.marginLG,
      padding: 0,
      color: e.colorTextDescription,
      fontSize: e.fontSizeLG,
      lineHeight: "inherit",
      border: 0,
      borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
    },
    label: { fontSize: e.fontSize },
    'input[type="search"]': { boxSizing: "border-box" },
    'input[type="radio"], input[type="checkbox"]': { lineHeight: "normal" },
    'input[type="file"]': { display: "block" },
    'input[type="range"]': { display: "block", width: "100%" },
    "select[multiple], select[size]": { height: "auto" },
    "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":
      {
        outline: 0,
        boxShadow: `0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
      },
    output: {
      display: "block",
      paddingTop: 15,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
    },
  }),
  At = (e, t) => {
    const { formItemCls: r } = e;
    return {
      [r]: {
        [`${r}-label > label`]: { height: t },
        [`${r}-control-input`]: { minHeight: t },
      },
    };
  },
  jt = (e) => {
    const { componentCls: t } = e;
    return {
      [e.componentCls]: a(a(a({}, x(e)), St(e)), {
        [`${t}-text`]: {
          display: "inline-block",
          paddingInlineEnd: e.paddingSM,
        },
        "&-small": a({}, At(e, e.controlHeightSM)),
        "&-large": a({}, At(e, e.controlHeightLG)),
      }),
    };
  },
  Pt = (e) => {
    const { formItemCls: t, iconCls: r, componentCls: n, rootPrefixCls: i } = e;
    return {
      [t]: a(a({}, x(e)), {
        marginBottom: e.marginLG,
        verticalAlign: "top",
        "&-with-help": { transition: "none" },
        [`&-hidden,\n        &-hidden.${i}-row`]: { display: "none" },
        "&-has-warning": { [`${t}-split`]: { color: e.colorError } },
        "&-has-error": { [`${t}-split`]: { color: e.colorWarning } },
        [`${t}-label`]: {
          display: "inline-block",
          flexGrow: 0,
          overflow: "hidden",
          whiteSpace: "nowrap",
          textAlign: "end",
          verticalAlign: "middle",
          "&-left": { textAlign: "start" },
          "&-wrap": {
            overflow: "unset",
            lineHeight: `${e.lineHeight} - 0.25em`,
            whiteSpace: "unset",
          },
          "> label": {
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            maxWidth: "100%",
            height: e.controlHeight,
            color: e.colorTextHeading,
            fontSize: e.fontSize,
            [`> ${r}`]: { fontSize: e.fontSize, verticalAlign: "top" },
            [`&${t}-required:not(${t}-required-mark-optional)::before`]: {
              display: "inline-block",
              marginInlineEnd: e.marginXXS,
              color: e.colorError,
              fontSize: e.fontSize,
              fontFamily: "SimSun, sans-serif",
              lineHeight: 1,
              content: '"*"',
              [`${n}-hide-required-mark &`]: { display: "none" },
            },
            [`${t}-optional`]: {
              display: "inline-block",
              marginInlineStart: e.marginXXS,
              color: e.colorTextDescription,
              [`${n}-hide-required-mark &`]: { display: "none" },
            },
            [`${t}-tooltip`]: {
              color: e.colorTextDescription,
              cursor: "help",
              writingMode: "horizontal-tb",
              marginInlineStart: e.marginXXS,
            },
            "&::after": {
              content: '":"',
              position: "relative",
              marginBlock: 0,
              marginInlineStart: e.marginXXS / 2,
              marginInlineEnd: e.marginXS,
            },
            [`&${t}-no-colon::after`]: { content: '" "' },
          },
        },
        [`${t}-control`]: {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          [`&:first-child:not([class^="'${i}-col-'"]):not([class*="' ${i}-col-'"])`]:
            { width: "100%" },
          "&-input": {
            position: "relative",
            display: "flex",
            alignItems: "center",
            minHeight: e.controlHeight,
            "&-content": { flex: "auto", maxWidth: "100%" },
          },
        },
        [t]: {
          "&-explain, &-extra": {
            clear: "both",
            color: e.colorTextDescription,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
          },
          "&-explain-connected": { width: "100%" },
          "&-extra": {
            minHeight: e.controlHeightSM,
            transition: `color ${e.motionDurationMid} ${e.motionEaseOut}`,
          },
          "&-explain": {
            "&-error": { color: e.colorError },
            "&-warning": { color: e.colorWarning },
          },
        },
        [`&-with-help ${t}-explain`]: { height: "auto", opacity: 1 },
        [`${t}-feedback-icon`]: {
          fontSize: e.fontSize,
          textAlign: "center",
          visibility: "visible",
          animationName: $,
          animationDuration: e.motionDurationMid,
          animationTimingFunction: e.motionEaseOutBack,
          pointerEvents: "none",
          "&-success": { color: e.colorSuccess },
          "&-error": { color: e.colorError },
          "&-warning": { color: e.colorWarning },
          "&-validating": { color: e.colorPrimary },
        },
      }),
    };
  },
  Mt = (e) => {
    const { componentCls: t, formItemCls: r, rootPrefixCls: n } = e;
    return {
      [`${t}-horizontal`]: {
        [`${r}-label`]: { flexGrow: 0 },
        [`${r}-control`]: { flex: "1 1 0", minWidth: 0 },
        [`${r}-label.${n}-col-24 + ${r}-control`]: { minWidth: "unset" },
      },
    };
  },
  It = (e) => {
    const { componentCls: t, formItemCls: r } = e;
    return {
      [`${t}-inline`]: {
        display: "flex",
        flexWrap: "wrap",
        [r]: {
          flex: "none",
          flexWrap: "nowrap",
          marginInlineEnd: e.margin,
          marginBottom: 0,
          "&-with-help": { marginBottom: e.marginLG },
          [`> ${r}-label,\n        > ${r}-control`]: {
            display: "inline-block",
            verticalAlign: "top",
          },
          [`> ${r}-label`]: { flex: "none" },
          [`${t}-text`]: { display: "inline-block" },
          [`${r}-has-feedback`]: { display: "inline-block" },
        },
      },
    };
  },
  Vt = (e) => ({
    margin: 0,
    padding: `0 0 ${e.paddingXS}px`,
    whiteSpace: "initial",
    textAlign: "start",
    "> label": { margin: 0, "&::after": { display: "none" } },
  }),
  Tt = (e) => {
    const { componentCls: t, formItemCls: r } = e;
    return {
      [`${r} ${r}-label`]: Vt(e),
      [t]: {
        [r]: {
          flexWrap: "wrap",
          [`${r}-label,\n          ${r}-control`]: {
            flex: "0 0 100%",
            maxWidth: "100%",
          },
        },
      },
    };
  },
  Dt = (e) => {
    const { componentCls: t, formItemCls: r, rootPrefixCls: n } = e;
    return {
      [`${t}-vertical`]: {
        [r]: {
          "&-row": { flexDirection: "column" },
          "&-label > label": { height: "auto" },
          [`${t}-item-control`]: { width: "100%" },
        },
      },
      [`${t}-vertical ${r}-label,\n      .${n}-col-24${r}-label,\n      .${n}-col-xl-24${r}-label`]:
        Vt(e),
      [`@media (max-width: ${e.screenXSMax}px)`]: [
        Tt(e),
        { [t]: { [`.${n}-col-xs-24${r}-label`]: Vt(e) } },
      ],
      [`@media (max-width: ${e.screenSMMax}px)`]: {
        [t]: { [`.${n}-col-sm-24${r}-label`]: Vt(e) },
      },
      [`@media (max-width: ${e.screenMDMax}px)`]: {
        [t]: { [`.${n}-col-md-24${r}-label`]: Vt(e) },
      },
      [`@media (max-width: ${e.screenLGMax}px)`]: {
        [t]: { [`.${n}-col-lg-24${r}-label`]: Vt(e) },
      },
    };
  },
  Wt = y("Form", (e, t) => {
    let { rootPrefixCls: r } = t;
    const n = b(e, { formItemCls: `${e.componentCls}-item`, rootPrefixCls: r });
    return [jt(n), Pt(n), kt(n), Mt(n), It(n), Dt(n), w(n), $];
  }),
  zt = F({
    compatConfig: { MODE: 3 },
    name: "ErrorList",
    inheritAttrs: !1,
    props: [
      "errors",
      "help",
      "onErrorVisibleChanged",
      "helpStatus",
      "warnings",
    ],
    setup(e, t) {
      let { attrs: r } = t;
      const { prefixCls: n, status: a } = s(xt, { prefixCls: u(() => "") }),
        i = u(() => `${n.value}-item-explain`),
        l = u(() => !(!e.errors || !e.errors.length)),
        o = q(a.value),
        [, d] = Wt(n);
      return (
        O([l, a], () => {
          l.value && (o.value = a.value);
        }),
        () => {
          var t, a;
          const l = C(`${n.value}-show-help-item`),
            s = E(`${n.value}-show-help-item`, l);
          return (
            (s.role = "alert"),
            (s.class = [d.value, i.value, r.class, `${n.value}-show-help`]),
            c(
              P,
              g(
                g({}, j(`${n.value}-show-help`)),
                {},
                {
                  onAfterEnter: () => e.onErrorVisibleChanged(!0),
                  onAfterLeave: () => e.onErrorVisibleChanged(!1),
                }
              ),
              {
                default: () => [
                  k(
                    c(A, g(g({}, s), {}, { tag: "div" }), {
                      default: () => [
                        null === (a = e.errors) || void 0 === a
                          ? void 0
                          : a.map((e, t) =>
                              c(
                                "div",
                                {
                                  key: t,
                                  class: o.value ? `${i.value}-${o.value}` : "",
                                },
                                [e]
                              )
                            ),
                      ],
                    }),
                    [
                      [
                        S,
                        !!(null === (t = e.errors) || void 0 === t
                          ? void 0
                          : t.length),
                      ],
                    ]
                  ),
                ],
              }
            )
          );
        }
      );
    },
  }),
  Rt = F({
    compatConfig: { MODE: 3 },
    slots: Object,
    inheritAttrs: !1,
    props: [
      "prefixCls",
      "errors",
      "hasFeedback",
      "onDomErrorVisibleChange",
      "wrapperCol",
      "help",
      "extra",
      "status",
      "marginBottom",
      "onErrorVisibleChanged",
    ],
    setup(e, t) {
      let { slots: r } = t;
      const n = $t(),
        { wrapperCol: i } = n,
        l = a({}, n);
      var s;
      return (
        delete l.labelCol,
        delete l.wrapperCol,
        wt(l),
        (s = { prefixCls: u(() => e.prefixCls), status: u(() => e.status) }),
        o(xt, s),
        () => {
          var t, n, a;
          const {
              prefixCls: l,
              wrapperCol: o,
              marginBottom: s,
              onErrorVisibleChanged: u,
              help: d = null === (t = r.help) || void 0 === t
                ? void 0
                : t.call(r),
              errors: f = M(
                null === (n = r.errors) || void 0 === n ? void 0 : n.call(r)
              ),
              extra: v = null === (a = r.extra) || void 0 === a
                ? void 0
                : a.call(r),
            } = e,
            h = `${l}-item`,
            y = o || (null == i ? void 0 : i.value) || {},
            b = p(`${h}-control`, y.class);
          return c(ve, g(g({}, y), {}, { class: b }), {
            default: () => {
              var e;
              return c(m, null, [
                c("div", { class: `${h}-control-input` }, [
                  c("div", { class: `${h}-control-input-content` }, [
                    null === (e = r.default) || void 0 === e
                      ? void 0
                      : e.call(r),
                  ]),
                ]),
                null !== s || f.length
                  ? c(
                      "div",
                      { style: { display: "flex", flexWrap: "nowrap" } },
                      [
                        c(
                          zt,
                          {
                            errors: f,
                            help: d,
                            class: `${h}-explain-connected`,
                            onErrorVisibleChanged: u,
                          },
                          null
                        ),
                        !!s &&
                          c(
                            "div",
                            { style: { width: 0, height: `${s}px` } },
                            null
                          ),
                      ]
                    )
                  : null,
                v ? c("div", { class: `${h}-extra` }, [v]) : null,
              ]);
            },
          });
        }
      );
    },
  });
N("success", "warning", "error", "validating", "");
const Bt = { success: G, warning: Y, error: J, validating: Z };
function Ht(e, t, r) {
  let n = e;
  const a = t;
  let i = 0;
  try {
    for (let e = a.length; i < e - 1 && (n || r); ++i) {
      const e = a[i];
      if (!(e in n)) {
        if (r) throw Error("please transfer a valid name path to form item!");
        break;
      }
      n = n[e];
    }
    if (r && !n) throw Error("please transfer a valid name path to form item!");
  } catch (l) {}
  return { o: n, k: a[i], v: n ? n[a[i]] : void 0 };
}
let _t = 0;
const Nt = F({
  compatConfig: { MODE: 3 },
  name: "AFormItem",
  inheritAttrs: !1,
  __ANT_NEW_FORM_ITEM: !0,
  props: {
    htmlFor: String,
    prefixCls: String,
    label: L.any,
    help: L.any,
    extra: L.any,
    labelCol: { type: Object },
    wrapperCol: { type: Object },
    hasFeedback: { type: Boolean, default: !1 },
    colon: { type: Boolean, default: void 0 },
    labelAlign: String,
    prop: { type: [String, Number, Array] },
    name: { type: [String, Number, Array] },
    rules: [Array, Object],
    autoLink: { type: Boolean, default: !0 },
    required: { type: Boolean, default: void 0 },
    validateFirst: { type: Boolean, default: void 0 },
    validateStatus: L.oneOf(N("", "success", "warning", "error", "validating")),
    validateTrigger: { type: [String, Array] },
    messageVariables: { type: Object },
    hidden: Boolean,
    noStyle: Boolean,
    tooltip: String,
  },
  slots: Object,
  setup(e, t) {
    let { slots: r, attrs: n, expose: i } = t;
    T(void 0 === e.prop);
    const l = "form-item-" + ++_t,
      { prefixCls: o } = D("form", e),
      [s, d] = Wt(o),
      f = I(),
      v = $t(),
      h = u(() => e.name || e.prop),
      y = I([]),
      b = I(!1),
      w = I(),
      $ = u(() => st(h.value)),
      x = u(() => {
        if ($.value.length) {
          const e = v.name.value,
            t = $.value.join("_");
          return e ? `${e}_${t}` : `form_item_${t}`;
        }
      }),
      F = u(() =>
        (() => {
          const e = v.model.value;
          return e && h.value ? Ht(e, $.value, !0).v : void 0;
        })()
      ),
      q = I(W(F.value)),
      C = u(() => {
        let t =
          void 0 !== e.validateTrigger
            ? e.validateTrigger
            : v.validateTrigger.value;
        return (t = void 0 === t ? "change" : t), at(t);
      }),
      E = u(() => {
        let t = v.rules.value;
        const r = e.rules,
          n =
            void 0 !== e.required
              ? { required: !!e.required, trigger: C.value }
              : [],
          a = Ht(t, $.value);
        t = t ? a.o[a.k] || a.v : [];
        const i = [].concat(r || t || []);
        return Fe(i, (e) => e.required) ? i : i.concat(n);
      }),
      k = u(() => {
        const t = E.value;
        let r = !1;
        return (
          t && t.length && t.every((e) => !e.required || ((r = !0), !1)),
          r || e.required
        );
      }),
      S = I();
    V(() => {
      S.value = e.validateStatus;
    });
    const A = u(() => {
        let t = {};
        return (
          "string" == typeof e.label
            ? (t.label = e.label)
            : e.name && (t.label = String(e.name)),
          e.messageVariables && (t = a(a({}, t), e.messageVariables)),
          t
        );
      }),
      j = (t) => {
        if (0 === $.value.length) return;
        const { validateFirst: r = !1 } = e,
          { triggerName: n } = t || {};
        let i = E.value;
        if (
          (n &&
            (i = i.filter((e) => {
              const { trigger: t } = e;
              if (!t && !C.value.length) return !0;
              return at(t || C.value).includes(n);
            })),
          !i.length)
        )
          return Promise.resolve();
        const l = yt(
          $.value,
          F.value,
          i,
          a({ validateMessages: v.validateMessages.value }, t),
          r,
          A.value
        );
        return (
          (S.value = "validating"),
          (y.value = []),
          l
            .catch((e) => e)
            .then(function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              if ("validating" === S.value) {
                const t = e.filter((e) => e && e.errors.length);
                (S.value = t.length ? "error" : "success"),
                  (y.value = t.map((e) => e.errors)),
                  v.onValidate(
                    h.value,
                    !y.value.length,
                    y.value.length ? K(y.value[0]) : null
                  );
              }
            }),
          l
        );
      },
      P = () => {
        j({ triggerName: "blur" });
      },
      N = () => {
        b.value ? (b.value = !1) : j({ triggerName: "change" });
      },
      L = () => {
        (S.value = e.validateStatus), (b.value = !1), (y.value = []);
      },
      G = () => {
        var t;
        (S.value = e.validateStatus), (b.value = !0), (y.value = []);
        const r = v.model.value || {},
          n = F.value,
          a = Ht(r, $.value, !0);
        Array.isArray(n)
          ? (a.o[a.k] = [].concat(
              null !== (t = q.value) && void 0 !== t ? t : []
            ))
          : (a.o[a.k] = q.value),
          X(() => {
            b.value = !1;
          });
      },
      Y = u(() => (void 0 === e.htmlFor ? x.value : e.htmlFor)),
      J = () => {
        const e = Y.value;
        if (!e || !w.value) return;
        const t = w.value.$el.querySelector(`[id="${e}"]`);
        t && t.focus && t.focus();
      };
    i({ onFieldBlur: P, onFieldChange: N, clearValidate: L, resetField: G }),
      z(
        {
          id: x,
          onFieldBlur: () => {
            e.autoLink && P();
          },
          onFieldChange: () => {
            e.autoLink && N();
          },
          clearValidate: L,
        },
        u(() => !!(e.autoLink && v.model.value && h.value))
      );
    let Z = !1;
    O(
      h,
      (e) => {
        e
          ? Z ||
            ((Z = !0),
            v.addField(l, {
              fieldValue: F,
              fieldId: x,
              fieldName: h,
              resetField: G,
              clearValidate: L,
              namePath: $,
              validateRules: j,
              rules: E,
            }))
          : ((Z = !1), v.removeField(l));
      },
      { immediate: !0 }
    ),
      R(() => {
        v.removeField(l);
      });
    const Q = (function (e) {
        const t = I(e.value.slice());
        let r = null;
        return (
          V(() => {
            clearTimeout(r),
              (r = setTimeout(
                () => {
                  t.value = e.value;
                },
                e.value.length ? 0 : 10
              ));
          }),
          t
        );
      })(y),
      U = u(() =>
        void 0 !== e.validateStatus
          ? e.validateStatus
          : Q.value.length
          ? "error"
          : S.value
      ),
      ee = u(() => ({
        [`${o.value}-item`]: !0,
        [d.value]: !0,
        [`${o.value}-item-has-feedback`]: U.value && e.hasFeedback,
        [`${o.value}-item-has-success`]: "success" === U.value,
        [`${o.value}-item-has-warning`]: "warning" === U.value,
        [`${o.value}-item-has-error`]: "error" === U.value,
        [`${o.value}-item-is-validating`]: "validating" === U.value,
        [`${o.value}-item-hidden`]: e.hidden,
      })),
      te = B({});
    H.useProvide(te),
      V(() => {
        let t;
        if (e.hasFeedback) {
          const e = U.value && Bt[U.value];
          t = e
            ? c(
                "span",
                {
                  class: p(
                    `${o.value}-item-feedback-icon`,
                    `${o.value}-item-feedback-icon-${U.value}`
                  ),
                },
                [c(e, null, null)]
              )
            : null;
        }
        a(te, {
          status: U.value,
          hasFeedback: e.hasFeedback,
          feedbackIcon: t,
          isFormItemInput: !0,
        });
      });
    const re = I(null),
      ne = I(!1);
    _(() => {
      O(
        ne,
        () => {
          ne.value &&
            (() => {
              if (f.value) {
                const e = getComputedStyle(f.value);
                re.value = parseInt(e.marginBottom, 10);
              }
            })();
        },
        { flush: "post", immediate: !0 }
      );
    });
    const ae = (e) => {
      e || (re.value = null);
    };
    return () => {
      var t, a;
      if (e.noStyle)
        return null === (t = r.default) || void 0 === t ? void 0 : t.call(r);
      const i =
          null !== (a = e.help) && void 0 !== a
            ? a
            : r.help
            ? M(r.help())
            : null,
        l = !!((null != i && Array.isArray(i) && i.length) || Q.value.length);
      return (
        (ne.value = l),
        s(
          c(
            "div",
            {
              class: [ee.value, l ? `${o.value}-item-with-help` : "", n.class],
              ref: f,
            },
            [
              c(
                me,
                g(g({}, n), {}, { class: `${o.value}-item-row`, key: "row" }),
                {
                  default: () => {
                    var t, n;
                    return c(m, null, [
                      c(
                        Et,
                        g(
                          g({}, e),
                          {},
                          {
                            htmlFor: Y.value,
                            required: k.value,
                            requiredMark: v.requiredMark.value,
                            prefixCls: o.value,
                            onClick: J,
                            label: e.label,
                          }
                        ),
                        { label: r.label, tooltip: r.tooltip }
                      ),
                      c(
                        Rt,
                        g(
                          g({}, e),
                          {},
                          {
                            errors: null != i ? at(i) : Q.value,
                            marginBottom: re.value,
                            prefixCls: o.value,
                            status: U.value,
                            ref: w,
                            help: i,
                            extra:
                              null !== (t = e.extra) && void 0 !== t
                                ? t
                                : null === (n = r.extra) || void 0 === n
                                ? void 0
                                : n.call(r),
                            onErrorVisibleChanged: ae,
                          }
                        ),
                        { default: r.default }
                      ),
                    ]);
                  },
                }
              ),
              !!re.value &&
                c(
                  "div",
                  {
                    class: `${o.value}-margin-offset`,
                    style: { marginBottom: `-${re.value}px` },
                  },
                  null
                ),
            ]
          )
        )
      );
    };
  },
});
function Lt(e) {
  let t = !1,
    r = e.length;
  const n = [];
  return e.length
    ? new Promise((a, i) => {
        e.forEach((e, l) => {
          e.catch((e) => ((t = !0), e)).then((e) => {
            (r -= 1), (n[l] = e), r > 0 || (t && i(n), a(n));
          });
        });
      })
    : Promise.resolve([]);
}
function Xt(e) {
  let t = !1;
  return e && e.length && e.every((e) => !e.required || ((t = !0), !1)), t;
}
function Gt(e) {
  return null == e ? [] : Array.isArray(e) ? e : [e];
}
function Yt(e, t, r) {
  let n = e;
  const a = (t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split(
    "."
  );
  let i = 0;
  for (let l = a.length; i < l - 1 && (n || r); ++i) {
    const e = a[i];
    if (!(e in n)) {
      if (r) throw new Error("please transfer a valid name path to validate!");
      break;
    }
    n = n[e];
  }
  return { o: n, k: a[i], v: n ? n[a[i]] : null, isValid: n && a[i] in n };
}
function Jt(e) {
  let t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : q({}),
    r = arguments.length > 2 ? arguments[2] : void 0;
  const n = W(Q(e)),
    i = B({}),
    l = I([]),
    o = function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = arguments.length > 1 ? arguments[1] : void 0;
      return t.length
        ? e.filter((e) => {
            const r = Gt(e.trigger || "change");
            return te(r, t).length;
          })
        : e;
    };
  let s = null;
  const u = function (e, t, n) {
      let l =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const o = yt(
        [e],
        t,
        n,
        a({ validateMessages: vt }, l),
        !!l.validateFirst
      );
      return i[e]
        ? ((i[e].validateStatus = "validating"),
          o
            .catch((e) => e)
            .then(function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              var n;
              if ("validating" === i[e].validateStatus) {
                const a = t.filter((e) => e && e.errors.length);
                (i[e].validateStatus = a.length ? "error" : "success"),
                  (i[e].help = a.length ? a.map((e) => e.errors) : null),
                  null === (n = null == r ? void 0 : r.onValidate) ||
                    void 0 === n ||
                    n.call(r, e, !a.length, a.length ? K(i[e].help[0]) : null);
              }
            }),
          o)
        : o.catch((e) => e);
    },
    c = (r, n) => {
      let a = [],
        i = !0;
      r ? (a = Array.isArray(r) ? r : [r]) : ((i = !1), (a = l.value));
      const c = (function (r) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = arguments.length > 2 ? arguments[2] : void 0;
        const i = [],
          l = {};
        for (let s = 0; s < r.length; s++) {
          const c = r[s],
            d = Yt(Q(e), c, a);
          if (!d.isValid) continue;
          l[c] = d.v;
          const f = o(Q(t)[c], Gt(n && n.trigger));
          f.length &&
            i.push(
              u(c, d.v, f, n || {})
                .then(() => ({ name: c, errors: [], warnings: [] }))
                .catch((e) => {
                  const t = [],
                    r = [];
                  return (
                    e.forEach((e) => {
                      let {
                        rule: { warningOnly: n },
                        errors: a,
                      } = e;
                      n ? r.push(...a) : t.push(...a);
                    }),
                    t.length
                      ? Promise.reject({ name: c, errors: t, warnings: r })
                      : { name: c, errors: t, warnings: r }
                  );
                })
            );
        }
        const c = Lt(i);
        s = c;
        const d = c
          .then(() => (s === c ? Promise.resolve(l) : Promise.reject([])))
          .catch((e) => {
            const t = e.filter((e) => e && e.errors.length);
            return t.length
              ? Promise.reject({
                  values: l,
                  errorFields: t,
                  outOfDate: s !== c,
                })
              : Promise.resolve(l);
          });
        return d.catch((e) => e), d;
      })(a, n || {}, i);
      return c.catch((e) => e), c;
    };
  let d = n,
    f = !0;
  const p = (e) => {
      const t = [];
      l.value.forEach((n) => {
        const a = Yt(e, n, !1),
          i = Yt(d, n, !1);
        (!(f && (null == r ? void 0 : r.immediate) && a.isValid) &&
          ee(a.v, i.v)) ||
          t.push(n);
      }),
        c(t, { trigger: "change" }),
        (f = !1),
        (d = W(K(e)));
    },
    v = null == r ? void 0 : r.debounce;
  let m = !0;
  return (
    O(
      t,
      () => {
        (l.value = t ? Object.keys(Q(t)) : []),
          !m && r && r.validateOnRuleChange && c(),
          (m = !1);
      },
      { deep: !0, immediate: !0 }
    ),
    O(
      l,
      () => {
        const e = {};
        l.value.forEach((r) => {
          (e[r] = a({}, i[r], { autoLink: !1, required: Xt(Q(t)[r]) })),
            delete i[r];
        });
        for (const t in i)
          Object.prototype.hasOwnProperty.call(i, t) && delete i[t];
        a(i, e);
      },
      { immediate: !0 }
    ),
    O(e, v && v.wait ? ge(p, v.wait, U(v, ["wait"])) : p, {
      immediate: r && !!r.immediate,
      deep: !0,
    }),
    {
      modelRef: e,
      rulesRef: t,
      initialModel: n,
      validateInfos: i,
      resetFields: (r) => {
        a(Q(e), a(a({}, W(n)), r)),
          X(() => {
            Object.keys(i).forEach((e) => {
              i[e] = { autoLink: !1, required: Xt(Q(t)[e]) };
            });
          });
      },
      validate: c,
      validateField: u,
      mergeValidateInfo: (e) => {
        const t = { autoLink: !1 },
          r = [],
          n = Array.isArray(e) ? e : [e];
        for (let a = 0; a < n.length; a++) {
          const e = n[a];
          "error" === (null == e ? void 0 : e.validateStatus) &&
            ((t.validateStatus = "error"), e.help && r.push(e.help)),
            (t.required = t.required || (null == e ? void 0 : e.required));
        }
        return (t.help = r), t;
      },
      clearValidate: (e) => {
        let t = [];
        (t = e ? (Array.isArray(e) ? e : [e]) : l.value),
          t.forEach((e) => {
            i[e] && a(i[e], { validateStatus: "", help: null });
          });
      },
    }
  );
}
const Zt = F({
  compatConfig: { MODE: 3 },
  name: "AForm",
  inheritAttrs: !1,
  props: re(
    {
      layout: L.oneOf(N("horizontal", "inline", "vertical")),
      labelCol: le(),
      wrapperCol: le(),
      colon: oe(),
      labelAlign: se(),
      labelWrap: oe(),
      prefixCls: String,
      requiredMark: ue([String, Boolean]),
      hideRequiredMark: oe(),
      model: L.object,
      rules: le(),
      validateMessages: le(),
      validateOnRuleChange: oe(),
      scrollToFirstError: ce(),
      onSubmit: de(),
      name: String,
      validateTrigger: ue([String, Array]),
      size: se(),
      disabled: oe(),
      onValuesChange: de(),
      onFieldsChange: de(),
      onFinish: de(),
      onFinishFailed: de(),
      onValidate: de(),
    },
    { layout: "horizontal", hideRequiredMark: !1, colon: !0 }
  ),
  Item: Nt,
  useForm: Jt,
  setup(e, t) {
    let { emit: r, slots: n, expose: i, attrs: l } = t;
    const {
        prefixCls: o,
        direction: s,
        form: d,
        size: f,
        disabled: v,
      } = D("form", e),
      m = u(() => "" === e.requiredMark || e.requiredMark),
      h = u(() => {
        var t;
        return void 0 !== m.value
          ? m.value
          : d &&
            void 0 !==
              (null === (t = d.value) || void 0 === t ? void 0 : t.requiredMark)
          ? d.value.requiredMark
          : !e.hideRequiredMark;
      });
    ne(f), ae(v);
    const y = u(() => {
        var t, r;
        return null !== (t = e.colon) && void 0 !== t
          ? t
          : null === (r = d.value) || void 0 === r
          ? void 0
          : r.colon;
      }),
      { validateMessages: b } = ie(),
      w = u(() => a(a(a({}, vt), b.value), e.validateMessages)),
      [$, x] = Wt(o),
      F = u(() =>
        p(
          o.value,
          {
            [`${o.value}-${e.layout}`]: !0,
            [`${o.value}-hide-required-mark`]: !1 === h.value,
            [`${o.value}-rtl`]: "rtl" === s.value,
            [`${o.value}-${f.value}`]: f.value,
          },
          x.value
        )
      ),
      C = q(),
      E = {},
      k = (e) => {
        const t = !!e,
          r = t ? at(e).map(st) : [];
        return t
          ? Object.values(E).filter(
              (e) =>
                r.findIndex((t) => {
                  return (r = t), (n = e.fieldName.value), ee(at(r), at(n));
                  var r, n;
                }) > -1
            )
          : Object.values(E);
      },
      S = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const r = k(e ? [e] : void 0);
        if (r.length) {
          const e = r[0].fieldId.value,
            n = e ? document.getElementById(e) : null;
          n && Ae(n, a({ scrollMode: "if-needed", block: "nearest" }, t));
        }
      },
      A = function () {
        let t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!0 === t) {
          const t = [];
          return (
            Object.values(E).forEach((e) => {
              let { namePath: r } = e;
              t.push(r.value);
            }),
            ft(e.model, t)
          );
        }
        return ft(e.model, t);
      },
      j = (t, r) => {
        if (!e.model)
          return Promise.reject(
            "Form `model` is required for validateFields to work."
          );
        const n = !!t,
          i = n ? at(t).map(st) : [],
          l = [];
        Object.values(E).forEach((e) => {
          var t;
          if (
            (n || i.push(e.namePath.value),
            !(null === (t = e.rules) || void 0 === t ? void 0 : t.value.length))
          )
            return;
          const o = e.namePath.value;
          if (
            !n ||
            (function (e, t) {
              return (
                e &&
                e.some((e) =>
                  (function (e, t) {
                    return (
                      !(!e || !t || e.length !== t.length) &&
                      e.every((e, r) => t[r] === e)
                    );
                  })(e, t)
                )
              );
            })(i, o)
          ) {
            const t = e.validateRules(a({ validateMessages: w.value }, r));
            l.push(
              t
                .then(() => ({ name: o, errors: [], warnings: [] }))
                .catch((e) => {
                  const t = [],
                    r = [];
                  return (
                    e.forEach((e) => {
                      let {
                        rule: { warningOnly: n },
                        errors: a,
                      } = e;
                      n ? r.push(...a) : t.push(...a);
                    }),
                    t.length
                      ? Promise.reject({ name: o, errors: t, warnings: r })
                      : { name: o, errors: t, warnings: r }
                  );
                })
            );
          }
        });
        const o = Lt(l);
        C.value = o;
        const s = o
          .then(() =>
            C.value === o ? Promise.resolve(A(i)) : Promise.reject([])
          )
          .catch((e) => {
            const t = e.filter((e) => e && e.errors.length);
            return Promise.reject({
              values: A(i),
              errorFields: t,
              outOfDate: C.value !== o,
            });
          });
        return s.catch((e) => e), s;
      },
      P = function () {
        return j(...arguments);
      },
      M = (t) => {
        if (
          (t.preventDefault(), t.stopPropagation(), r("submit", t), e.model)
        ) {
          j()
            .then((e) => {
              r("finish", e);
            })
            .catch((t) => {
              ((t) => {
                const { scrollToFirstError: n } = e;
                if ((r("finishFailed", t), n && t.errorFields.length)) {
                  let e = {};
                  "object" == typeof n && (e = n), S(t.errorFields[0].name, e);
                }
              })(t);
            });
        }
      };
    return (
      i({
        resetFields: (t) => {
          e.model &&
            k(t).forEach((e) => {
              e.resetField();
            });
        },
        clearValidate: (e) => {
          k(e).forEach((e) => {
            e.clearValidate();
          });
        },
        validateFields: j,
        getFieldsValue: A,
        validate: function () {
          return P(...arguments);
        },
        scrollToField: S,
      }),
      wt({
        model: u(() => e.model),
        name: u(() => e.name),
        labelAlign: u(() => e.labelAlign),
        labelCol: u(() => e.labelCol),
        labelWrap: u(() => e.labelWrap),
        wrapperCol: u(() => e.wrapperCol),
        vertical: u(() => "vertical" === e.layout),
        colon: y,
        requiredMark: h,
        validateTrigger: u(() => e.validateTrigger),
        rules: u(() => e.rules),
        addField: (e, t) => {
          E[e] = t;
        },
        removeField: (e) => {
          delete E[e];
        },
        onValidate: (e, t, n) => {
          r("validate", e, t, n);
        },
        validateMessages: w,
      }),
      O(
        () => e.rules,
        () => {
          e.validateOnRuleChange && j();
        }
      ),
      () => {
        var e;
        return $(
          c(
            "form",
            g(g({}, l), {}, { onSubmit: M, class: [F.value, l.class] }),
            [null === (e = n.default) || void 0 === e ? void 0 : e.call(n)]
          )
        );
      }
    );
  },
});
(Zt.useInjectFormItemContext = fe),
  (Zt.ItemRest = pe),
  (Zt.install = function (e) {
    return (
      e.component(Zt.name, Zt),
      e.component(Zt.Item.name, Zt.Item),
      e.component(pe.name, pe),
      e
    );
  });
export { Zt as F, Nt as _, Jt as u };

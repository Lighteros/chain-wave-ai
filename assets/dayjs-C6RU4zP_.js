import {
  cB as e,
  cC as t,
  bz as n,
  ja as a,
  ec as o,
  aJ as l,
  bT as r,
  bq as i,
  aw as u,
  aA as s,
  aT as d,
  aS as c,
  ck as v,
  dx as p,
  j8 as f,
  as as g,
  aK as h,
  r as m,
  aR as b,
  dZ as w,
  n as C,
  c as $,
  aH as k,
  b2 as y,
  cm as x,
  hH as S,
  e8 as D,
  iq as M,
  aL as P,
  jb as Y,
  j9 as R,
  jc as O,
  fl as I,
  a as N,
  b9 as H,
  hA as T,
  aC as E,
  aV as V,
  aW as A,
  gS as W,
  gY as B,
  g$ as F,
  aX as L,
  g_ as j,
  gU as z,
  iu as K,
  it as U,
  iw as q,
  iv as G,
  jd as _,
  e7 as Q,
  hF as X,
  ix as Z,
  cb as J,
  az as ee,
  c7 as te,
  f2 as ne,
  d$ as ae,
  d_ as oe,
  e1 as le,
  e2 as re,
  e0 as ie,
  ce as ue,
  e3 as se,
  b1 as de,
  h4 as ce,
  gV as ve,
  je as pe,
  h5 as fe,
  h3 as ge,
  cs as he,
  ch as me,
} from "./index-DPRREYlk.js";
import { T as be } from "./index-CMko8JXS.js";
import { u as we } from "./index-BPauqaGF.js";
var Ce = { exports: {} };
Ce.exports = function (e, t) {
  t.prototype.weekday = function (e) {
    var t = this.$locale().weekStart || 0,
      n = this.$W,
      a = (n < t ? n + 7 : n) - t;
    return this.$utils().u(e) ? a : this.subtract(a, "day").add(e, "day");
  };
};
const $e = t(Ce.exports);
var ke = { exports: {} };
ke.exports = function (e, t, n) {
  var a = t.prototype,
    o = function (e) {
      return e && (e.indexOf ? e : e.s);
    },
    l = function (e, t, n, a, l) {
      var r = e.name ? e : e.$locale(),
        i = o(r[t]),
        u = o(r[n]),
        s =
          i ||
          u.map(function (e) {
            return e.slice(0, a);
          });
      if (!l) return s;
      var d = r.weekStart;
      return s.map(function (e, t) {
        return s[(t + (d || 0)) % 7];
      });
    },
    r = function () {
      return n.Ls[n.locale()];
    },
    i = function (e, t) {
      return (
        e.formats[t] ||
        (function (e) {
          return e.replace(
            /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
            function (e, t, n) {
              return t || n.slice(1);
            }
          );
        })(e.formats[t.toUpperCase()])
      );
    },
    u = function () {
      var e = this;
      return {
        months: function (t) {
          return t ? t.format("MMMM") : l(e, "months");
        },
        monthsShort: function (t) {
          return t ? t.format("MMM") : l(e, "monthsShort", "months", 3);
        },
        firstDayOfWeek: function () {
          return e.$locale().weekStart || 0;
        },
        weekdays: function (t) {
          return t ? t.format("dddd") : l(e, "weekdays");
        },
        weekdaysMin: function (t) {
          return t ? t.format("dd") : l(e, "weekdaysMin", "weekdays", 2);
        },
        weekdaysShort: function (t) {
          return t ? t.format("ddd") : l(e, "weekdaysShort", "weekdays", 3);
        },
        longDateFormat: function (t) {
          return i(e.$locale(), t);
        },
        meridiem: this.$locale().meridiem,
        ordinal: this.$locale().ordinal,
      };
    };
  (a.localeData = function () {
    return u.bind(this)();
  }),
    (n.localeData = function () {
      var e = r();
      return {
        firstDayOfWeek: function () {
          return e.weekStart || 0;
        },
        weekdays: function () {
          return n.weekdays();
        },
        weekdaysShort: function () {
          return n.weekdaysShort();
        },
        weekdaysMin: function () {
          return n.weekdaysMin();
        },
        months: function () {
          return n.months();
        },
        monthsShort: function () {
          return n.monthsShort();
        },
        longDateFormat: function (t) {
          return i(e, t);
        },
        meridiem: e.meridiem,
        ordinal: e.ordinal,
      };
    }),
    (n.months = function () {
      return l(r(), "months");
    }),
    (n.monthsShort = function () {
      return l(r(), "monthsShort", "months", 3);
    }),
    (n.weekdays = function (e) {
      return l(r(), "weekdays", null, null, e);
    }),
    (n.weekdaysShort = function (e) {
      return l(r(), "weekdaysShort", "weekdays", 3, e);
    }),
    (n.weekdaysMin = function (e) {
      return l(r(), "weekdaysMin", "weekdays", 2, e);
    });
};
const ye = t(ke.exports);
var xe,
  Se,
  De = { exports: {} };
const Me = t(
  (De.exports =
    ((xe = "week"),
    (Se = "year"),
    function (e, t, n) {
      var a = t.prototype;
      (a.week = function (e) {
        if ((void 0 === e && (e = null), null !== e))
          return this.add(7 * (e - this.week()), "day");
        var t = this.$locale().yearStart || 1;
        if (11 === this.month() && this.date() > 25) {
          var a = n(this).startOf(Se).add(1, Se).date(t),
            o = n(this).endOf(xe);
          if (a.isBefore(o)) return 1;
        }
        var l = n(this)
            .startOf(Se)
            .date(t)
            .startOf(xe)
            .subtract(1, "millisecond"),
          r = this.diff(l, xe, !0);
        return r < 0 ? n(this).startOf("week").week() : Math.ceil(r);
      }),
        (a.weeks = function (e) {
          return void 0 === e && (e = null), this.week(e);
        });
    }))
);
var Pe = { exports: {} };
Pe.exports = function (e, t) {
  t.prototype.weekYear = function () {
    var e = this.month(),
      t = this.week(),
      n = this.year();
    return 1 === t && 11 === e ? n + 1 : 0 === e && t >= 52 ? n - 1 : n;
  };
};
const Ye = t(Pe.exports);
var Re = { exports: {} };
Re.exports = (function () {
  var e = "month",
    t = "quarter";
  return function (n, a) {
    var o = a.prototype;
    o.quarter = function (e) {
      return this.$utils().u(e)
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((this.month() % 3) + 3 * (e - 1));
    };
    var l = o.add;
    o.add = function (n, a) {
      return (
        (n = Number(n)),
        this.$utils().p(a) === t ? this.add(3 * n, e) : l.bind(this)(n, a)
      );
    };
    var r = o.startOf;
    o.startOf = function (n, a) {
      var o = this.$utils(),
        l = !!o.u(a) || a;
      if (o.p(n) === t) {
        var i = this.quarter() - 1;
        return l
          ? this.month(3 * i)
              .startOf(e)
              .startOf("day")
          : this.month(3 * i + 2)
              .endOf(e)
              .endOf("day");
      }
      return r.bind(this)(n, a);
    };
  };
})();
const Oe = t(Re.exports);
var Ie = { exports: {} };
Ie.exports = function (e, t) {
  var n = t.prototype,
    a = n.format;
  n.format = function (e) {
    var t = this,
      n = this.$locale();
    if (!this.isValid()) return a.bind(this)(e);
    var o = this.$utils(),
      l = (e || "YYYY-MM-DDTHH:mm:ssZ").replace(
        /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
        function (e) {
          switch (e) {
            case "Q":
              return Math.ceil((t.$M + 1) / 3);
            case "Do":
              return n.ordinal(t.$D);
            case "gggg":
              return t.weekYear();
            case "GGGG":
              return t.isoWeekYear();
            case "wo":
              return n.ordinal(t.week(), "W");
            case "w":
            case "ww":
              return o.s(t.week(), "w" === e ? 1 : 2, "0");
            case "W":
            case "WW":
              return o.s(t.isoWeek(), "W" === e ? 1 : 2, "0");
            case "k":
            case "kk":
              return o.s(
                String(0 === t.$H ? 24 : t.$H),
                "k" === e ? 1 : 2,
                "0"
              );
            case "X":
              return Math.floor(t.$d.getTime() / 1e3);
            case "x":
              return t.$d.getTime();
            case "z":
              return "[" + t.offsetName() + "]";
            case "zzz":
              return "[" + t.offsetName("long") + "]";
            default:
              return e;
          }
        }
      );
    return a.bind(this)(l);
  };
};
const Ne = t(Ie.exports);
var He = { exports: {} };
He.exports = (function () {
  var e = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    },
    t =
      /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
    n = /\d/,
    a = /\d\d/,
    o = /\d\d?/,
    l = /\d*[^-_:/,()\s\d]+/,
    r = {},
    i = function (e) {
      return (e = +e) + (e > 68 ? 1900 : 2e3);
    },
    u = function (e) {
      return function (t) {
        this[e] = +t;
      };
    },
    s = [
      /[+-]\d\d:?(\d\d)?|Z/,
      function (e) {
        (this.zone || (this.zone = {})).offset = (function (e) {
          if (!e) return 0;
          if ("Z" === e) return 0;
          var t = e.match(/([+-]|\d\d)/g),
            n = 60 * t[1] + (+t[2] || 0);
          return 0 === n ? 0 : "+" === t[0] ? -n : n;
        })(e);
      },
    ],
    d = function (e) {
      var t = r[e];
      return t && (t.indexOf ? t : t.s.concat(t.f));
    },
    c = function (e, t) {
      var n,
        a = r.meridiem;
      if (a) {
        for (var o = 1; o <= 24; o += 1)
          if (e.indexOf(a(o, 0, t)) > -1) {
            n = o > 12;
            break;
          }
      } else n = e === (t ? "pm" : "PM");
      return n;
    },
    v = {
      A: [
        l,
        function (e) {
          this.afternoon = c(e, !1);
        },
      ],
      a: [
        l,
        function (e) {
          this.afternoon = c(e, !0);
        },
      ],
      Q: [
        n,
        function (e) {
          this.month = 3 * (e - 1) + 1;
        },
      ],
      S: [
        n,
        function (e) {
          this.milliseconds = 100 * +e;
        },
      ],
      SS: [
        a,
        function (e) {
          this.milliseconds = 10 * +e;
        },
      ],
      SSS: [
        /\d{3}/,
        function (e) {
          this.milliseconds = +e;
        },
      ],
      s: [o, u("seconds")],
      ss: [o, u("seconds")],
      m: [o, u("minutes")],
      mm: [o, u("minutes")],
      H: [o, u("hours")],
      h: [o, u("hours")],
      HH: [o, u("hours")],
      hh: [o, u("hours")],
      D: [o, u("day")],
      DD: [a, u("day")],
      Do: [
        l,
        function (e) {
          var t = r.ordinal,
            n = e.match(/\d+/);
          if (((this.day = n[0]), t))
            for (var a = 1; a <= 31; a += 1)
              t(a).replace(/\[|\]/g, "") === e && (this.day = a);
        },
      ],
      w: [o, u("week")],
      ww: [a, u("week")],
      M: [o, u("month")],
      MM: [a, u("month")],
      MMM: [
        l,
        function (e) {
          var t = d("months"),
            n =
              (
                d("monthsShort") ||
                t.map(function (e) {
                  return e.slice(0, 3);
                })
              ).indexOf(e) + 1;
          if (n < 1) throw new Error();
          this.month = n % 12 || n;
        },
      ],
      MMMM: [
        l,
        function (e) {
          var t = d("months").indexOf(e) + 1;
          if (t < 1) throw new Error();
          this.month = t % 12 || t;
        },
      ],
      Y: [/[+-]?\d+/, u("year")],
      YY: [
        a,
        function (e) {
          this.year = i(e);
        },
      ],
      YYYY: [/\d{4}/, u("year")],
      Z: s,
      ZZ: s,
    };
  function p(n) {
    var a, o;
    (a = n), (o = r && r.formats);
    for (
      var l = (n = a.replace(
          /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
          function (t, n, a) {
            var l = a && a.toUpperCase();
            return (
              n ||
              o[a] ||
              e[a] ||
              o[l].replace(
                /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                function (e, t, n) {
                  return t || n.slice(1);
                }
              )
            );
          }
        )).match(t),
        i = l.length,
        u = 0;
      u < i;
      u += 1
    ) {
      var s = l[u],
        d = v[s],
        c = d && d[0],
        p = d && d[1];
      l[u] = p ? { regex: c, parser: p } : s.replace(/^\[|\]$/g, "");
    }
    return function (e) {
      for (var t = {}, n = 0, a = 0; n < i; n += 1) {
        var o = l[n];
        if ("string" == typeof o) a += o.length;
        else {
          var r = o.regex,
            u = o.parser,
            s = e.slice(a),
            d = r.exec(s)[0];
          u.call(t, d), (e = e.replace(d, ""));
        }
      }
      return (
        (function (e) {
          var t = e.afternoon;
          if (void 0 !== t) {
            var n = e.hours;
            t ? n < 12 && (e.hours += 12) : 12 === n && (e.hours = 0),
              delete e.afternoon;
          }
        })(t),
        t
      );
    };
  }
  return function (e, t, n) {
    (n.p.customParseFormat = !0),
      e && e.parseTwoDigitYear && (i = e.parseTwoDigitYear);
    var a = t.prototype,
      o = a.parse;
    a.parse = function (e) {
      var t = e.date,
        a = e.utc,
        l = e.args;
      this.$u = a;
      var i = l[1];
      if ("string" == typeof i) {
        var u = !0 === l[2],
          s = !0 === l[3],
          d = u || s,
          c = l[2];
        s && (c = l[2]),
          (r = this.$locale()),
          !u && c && (r = n.Ls[c]),
          (this.$d = (function (e, t, n, a) {
            try {
              if (["x", "X"].indexOf(t) > -1)
                return new Date(("X" === t ? 1e3 : 1) * e);
              var o = p(t)(e),
                l = o.year,
                r = o.month,
                i = o.day,
                u = o.hours,
                s = o.minutes,
                d = o.seconds,
                c = o.milliseconds,
                v = o.zone,
                f = o.week,
                g = new Date(),
                h = i || (l || r ? 1 : g.getDate()),
                m = l || g.getFullYear(),
                b = 0;
              (l && !r) || (b = r > 0 ? r - 1 : g.getMonth());
              var w,
                C = u || 0,
                $ = s || 0,
                k = d || 0,
                y = c || 0;
              return v
                ? new Date(Date.UTC(m, b, h, C, $, k, y + 60 * v.offset * 1e3))
                : n
                ? new Date(Date.UTC(m, b, h, C, $, k, y))
                : ((w = new Date(m, b, h, C, $, k, y)),
                  f && (w = a(w).week(f).toDate()),
                  w);
            } catch (e) {
              return new Date("");
            }
          })(t, i, a, n)),
          this.init(),
          c && !0 !== c && (this.$L = this.locale(c).$L),
          d && t != this.format(i) && (this.$d = new Date("")),
          (r = {});
      } else if (i instanceof Array)
        for (var v = i.length, f = 1; f <= v; f += 1) {
          l[1] = i[f - 1];
          var g = n.apply(this, l);
          if (g.isValid()) {
            (this.$d = g.$d), (this.$L = g.$L), this.init();
            break;
          }
          f === v && (this.$d = new Date(""));
        }
      else o.call(this, e);
    };
  };
})();
const Te = t(He.exports);
n.extend(Te),
  n.extend(Ne),
  n.extend($e),
  n.extend(ye),
  n.extend(Me),
  n.extend(Ye),
  n.extend(Oe),
  n.extend((e, t) => {
    const n = t.prototype,
      a = n.format;
    n.format = function (e) {
      const t = (e || "").replace("Wo", "wo");
      return a.bind(this)(t);
    };
  });
const Ee = {
    bn_BD: "bn-bd",
    by_BY: "be",
    en_GB: "en-gb",
    en_US: "en",
    fr_BE: "fr",
    fr_CA: "fr-ca",
    hy_AM: "hy-am",
    kmr_IQ: "ku",
    nl_BE: "nl-be",
    pt_BR: "pt-br",
    zh_CN: "zh-cn",
    zh_HK: "zh-hk",
    zh_TW: "zh-tw",
  },
  Ve = (e) => Ee[e] || e.split("_")[0],
  Ae = () => {
    a(!1, "Not match any format. Please help to fire a issue about this.");
  },
  We = /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|k{1,2}|S/g;
function Be(e, t, n) {
  const a = [...new Set(e.split(n))];
  let o = 0;
  for (let l = 0; l < a.length; l++) {
    const e = a[l];
    if (((o += e.length), o > t)) return e;
    o += n.length;
  }
}
const Fe = (e, t) => {
    if (!e) return null;
    if (n.isDayjs(e)) return e;
    const a = t.matchAll(We);
    let o = n(e, t);
    if (null === a) return o;
    for (const n of a) {
      const t = n[0],
        a = n.index;
      if ("Q" === t) {
        const t = e.slice(a - 1, a),
          n = Be(e, a, t).match(/\d+/)[0];
        o = o.quarter(parseInt(n));
      }
      if ("wo" === t.toLowerCase()) {
        const t = e.slice(a - 1, a),
          n = Be(e, a, t).match(/\d+/)[0];
        o = o.week(parseInt(n));
      }
      "ww" === t.toLowerCase() &&
        (o = o.week(parseInt(e.slice(a, a + t.length)))),
        "w" === t.toLowerCase() &&
          (o = o.week(parseInt(e.slice(a, a + t.length + 1))));
    }
    return o;
  },
  Le = {
    getNow: () => n(),
    getFixedDate: (e) => n(e, ["YYYY-M-DD", "YYYY-MM-DD"]),
    getEndDate: (e) => e.endOf("month"),
    getWeekDay: (e) => {
      const t = e.locale("en");
      return t.weekday() + t.localeData().firstDayOfWeek();
    },
    getYear: (e) => e.year(),
    getMonth: (e) => e.month(),
    getDate: (e) => e.date(),
    getHour: (e) => e.hour(),
    getMinute: (e) => e.minute(),
    getSecond: (e) => e.second(),
    addYear: (e, t) => e.add(t, "year"),
    addMonth: (e, t) => e.add(t, "month"),
    addDate: (e, t) => e.add(t, "day"),
    setYear: (e, t) => e.year(t),
    setMonth: (e, t) => e.month(t),
    setDate: (e, t) => e.date(t),
    setHour: (e, t) => e.hour(t),
    setMinute: (e, t) => e.minute(t),
    setSecond: (e, t) => e.second(t),
    isAfter: (e, t) => e.isAfter(t),
    isValidate: (e) => e.isValid(),
    locale: {
      getWeekFirstDay: (e) => n().locale(Ve(e)).localeData().firstDayOfWeek(),
      getWeekFirstDate: (e, t) => t.locale(Ve(e)).weekday(0),
      getWeek: (e, t) => t.locale(Ve(e)).week(),
      getShortWeekDays: (e) => n().locale(Ve(e)).localeData().weekdaysMin(),
      getShortMonths: (e) => n().locale(Ve(e)).localeData().monthsShort(),
      format: (e, t, n) => t.locale(Ve(e)).format(n),
      parse: (e, t, a) => {
        const o = Ve(e);
        for (let l = 0; l < a.length; l += 1) {
          const e = a[l],
            r = t;
          if (e.includes("wo") || e.includes("Wo")) {
            const e = r.split("-")[0],
              t = r.split("-")[1],
              a = n(e, "YYYY").startOf("year").locale(o);
            for (let n = 0; n <= 52; n += 1) {
              const e = a.add(n, "week");
              if (e.format("Wo") === t) return e;
            }
            return Ae(), null;
          }
          const i = n(r, e, !0).locale(o);
          if (i.isValid()) return i;
        }
        return t || Ae(), null;
      },
    },
    toDate: (e, t) => (Array.isArray(e) ? e.map((e) => Fe(e, t)) : Fe(e, t)),
    toString: (e, t) =>
      Array.isArray(e)
        ? e.map((e) => (n.isDayjs(e) ? e.format(t) : e))
        : n.isDayjs(e)
        ? e.format(t)
        : e,
  };
function je(e) {
  const t = o();
  return l(l({}, e), t);
}
const ze = Symbol("PanelContextProps"),
  Ke = (e) => {
    r(ze, e);
  },
  Ue = () => i(ze, {}),
  qe = { visibility: "hidden" };
function Ge(e, t) {
  let { slots: n } = t;
  var a;
  const o = je(e),
    {
      prefixCls: l,
      prevIcon: r = "‹",
      nextIcon: i = "›",
      superPrevIcon: s = "«",
      superNextIcon: d = "»",
      onSuperPrev: c,
      onSuperNext: v,
      onPrev: p,
      onNext: f,
    } = o,
    { hideNextBtn: g, hidePrevBtn: h } = Ue();
  return u("div", { class: l }, [
    c &&
      u(
        "button",
        {
          type: "button",
          onClick: c,
          tabindex: -1,
          class: `${l}-super-prev-btn`,
          style: h.value ? qe : {},
        },
        [s]
      ),
    p &&
      u(
        "button",
        {
          type: "button",
          onClick: p,
          tabindex: -1,
          class: `${l}-prev-btn`,
          style: h.value ? qe : {},
        },
        [r]
      ),
    u("div", { class: `${l}-view` }, [
      null === (a = n.default) || void 0 === a ? void 0 : a.call(n),
    ]),
    f &&
      u(
        "button",
        {
          type: "button",
          onClick: f,
          tabindex: -1,
          class: `${l}-next-btn`,
          style: g.value ? qe : {},
        },
        [i]
      ),
    v &&
      u(
        "button",
        {
          type: "button",
          onClick: v,
          tabindex: -1,
          class: `${l}-super-next-btn`,
          style: g.value ? qe : {},
        },
        [d]
      ),
  ]);
}
function _e(e) {
  const t = je(e),
    {
      prefixCls: n,
      generateConfig: a,
      viewDate: o,
      onPrevDecades: l,
      onNextDecades: r,
    } = t,
    { hideHeader: i } = Ue();
  if (i) return null;
  const c = `${n}-header`,
    v = a.getYear(o),
    p = Math.floor(v / pt) * pt,
    f = p + pt - 1;
  return u(
    Ge,
    d(d({}, t), {}, { prefixCls: c, onSuperPrev: l, onSuperNext: r }),
    { default: () => [p, s("-"), f] }
  );
}
function Qe(e, t, n, a, o) {
  let l = e.setHour(t, n);
  return (l = e.setMinute(l, a)), (l = e.setSecond(l, o)), l;
}
function Xe(e, t, n) {
  if (!n) return t;
  let a = t;
  return (
    (a = e.setHour(a, e.getHour(n))),
    (a = e.setMinute(a, e.getMinute(n))),
    (a = e.setSecond(a, e.getSecond(n))),
    a
  );
}
function Ze(e, t) {
  const n = e.getYear(t),
    a = e.getMonth(t) + 1,
    o = e.getEndDate(e.getFixedDate(`${n}-${a}-01`));
  return `${n}-${a < 10 ? `0${a}` : `${a}`}-${e.getDate(o)}`;
}
function Je(e) {
  const {
      prefixCls: t,
      disabledDate: n,
      onSelect: a,
      picker: o,
      rowNum: r,
      colNum: i,
      prefixColumn: s,
      rowClassName: d,
      baseDate: v,
      getCellClassName: p,
      getCellText: f,
      getCellNode: g,
      getCellDate: h,
      generateConfig: m,
      titleCell: b,
      headerCells: w,
    } = je(e),
    { onDateMouseenter: C, onDateMouseleave: $, mode: k } = Ue(),
    y = `${t}-cell`,
    x = [];
  for (let S = 0; S < r; S += 1) {
    const e = [];
    let t;
    for (let r = 0; r < i; r += 1) {
      const d = h(v, S * i + r),
        w = Pt({
          cellDate: d,
          mode: k.value,
          disabledDate: n,
          generateConfig: m,
        });
      0 === r && ((t = d), s && e.push(s(t)));
      const x = b && b(d);
      e.push(
        u(
          "td",
          {
            key: r,
            title: x,
            class: c(
              y,
              l(
                {
                  [`${y}-disabled`]: w,
                  [`${y}-start`]:
                    1 === f(d) || ("year" === o && Number(x) % 10 == 0),
                  [`${y}-end`]:
                    x === Ze(m, d) || ("year" === o && Number(x) % 10 == 9),
                },
                p(d)
              )
            ),
            onClick: (e) => {
              e.stopPropagation(), w || a(d);
            },
            onMouseenter: () => {
              !w && C && C(d);
            },
            onMouseleave: () => {
              !w && $ && $(d);
            },
          },
          [g ? g(d) : u("div", { class: `${y}-inner` }, [f(d)])]
        )
      );
    }
    x.push(u("tr", { key: S, class: d && d(t) }, [e]));
  }
  return u("div", { class: `${t}-body` }, [
    u("table", { class: `${t}-content` }, [
      w && u("thead", null, [u("tr", null, [w])]),
      u("tbody", null, [x]),
    ]),
  ]);
}
(Ge.displayName = "Header"),
  (Ge.inheritAttrs = !1),
  (_e.displayName = "DecadeHeader"),
  (_e.inheritAttrs = !1),
  (Je.displayName = "PanelBody"),
  (Je.inheritAttrs = !1);
const et = 3,
  tt = 4;
function nt(e) {
  const t = je(e),
    n = vt - 1,
    { prefixCls: a, viewDate: o, generateConfig: l } = t,
    r = `${a}-cell`,
    i = l.getYear(o),
    s = Math.floor(i / vt) * vt,
    c = Math.floor(i / pt) * pt,
    v = c + pt - 1,
    p = l.setYear(o, c - Math.ceil((et * tt * vt - pt) / 2));
  return u(
    Je,
    d(
      d({}, t),
      {},
      {
        rowNum: tt,
        colNum: et,
        baseDate: p,
        getCellText: (e) => {
          const t = l.getYear(e);
          return `${t}-${t + n}`;
        },
        getCellClassName: (e) => {
          const t = l.getYear(e),
            a = t + n;
          return {
            [`${r}-in-view`]: c <= t && a <= v,
            [`${r}-selected`]: t === s,
          };
        },
        getCellDate: (e, t) => l.addYear(e, t * vt),
      }
    ),
    null
  );
}
(nt.displayName = "DecadeBody"), (nt.inheritAttrs = !1);
const at = new Map();
function ot(e, t, n) {
  if ((at.get(e) && p.cancel(at.get(e)), n <= 0))
    return void at.set(
      e,
      p(() => {
        e.scrollTop = t;
      })
    );
  const a = ((t - e.scrollTop) / n) * 10;
  at.set(
    e,
    p(() => {
      (e.scrollTop += a), e.scrollTop !== t && ot(e, t, n - 10);
    })
  );
}
function lt(e, t) {
  let {
    onLeftRight: n,
    onCtrlLeftRight: a,
    onUpDown: o,
    onPageUpDown: l,
    onEnter: r,
  } = t;
  const { which: i, ctrlKey: u, metaKey: s } = e;
  switch (i) {
    case v.LEFT:
      if (u || s) {
        if (a) return a(-1), !0;
      } else if (n) return n(-1), !0;
      break;
    case v.RIGHT:
      if (u || s) {
        if (a) return a(1), !0;
      } else if (n) return n(1), !0;
      break;
    case v.UP:
      if (o) return o(-1), !0;
      break;
    case v.DOWN:
      if (o) return o(1), !0;
      break;
    case v.PAGE_UP:
      if (l) return l(-1), !0;
      break;
    case v.PAGE_DOWN:
      if (l) return l(1), !0;
      break;
    case v.ENTER:
      if (r) return r(), !0;
  }
  return !1;
}
function rt(e, t, n, a) {
  let o = e;
  if (!o)
    switch (t) {
      case "time":
        o = a ? "hh:mm:ss a" : "HH:mm:ss";
        break;
      case "week":
        o = "gggg-wo";
        break;
      case "month":
        o = "YYYY-MM";
        break;
      case "quarter":
        o = "YYYY-[Q]Q";
        break;
      case "year":
        o = "YYYY";
        break;
      default:
        o = n ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD";
    }
  return o;
}
function it(e, t, n) {
  const a = "time" === e ? 8 : 10,
    o = "function" == typeof t ? t(n.getNow()).length : t.length;
  return Math.max(a, o) + 2;
}
let ut = null;
const st = new Set();
const dt = {
  year: (e) => ("month" === e || "date" === e ? "year" : e),
  month: (e) => ("date" === e ? "month" : e),
  quarter: (e) => ("month" === e || "date" === e ? "quarter" : e),
  week: (e) => ("date" === e ? "week" : e),
  time: null,
  date: null,
};
function ct(e, t) {
  return e.some((e) => e && e.contains(t));
}
const vt = 10,
  pt = 10 * vt;
function ft(e) {
  const t = je(e),
    {
      prefixCls: n,
      onViewDateChange: a,
      generateConfig: o,
      viewDate: l,
      operationRef: r,
      onSelect: i,
      onPanelChange: s,
    } = t,
    c = `${n}-decade-panel`;
  r.value = {
    onKeydown: (e) =>
      lt(e, {
        onLeftRight: (e) => {
          i(o.addYear(l, e * vt), "key");
        },
        onCtrlLeftRight: (e) => {
          i(o.addYear(l, e * pt), "key");
        },
        onUpDown: (e) => {
          i(o.addYear(l, e * vt * et), "key");
        },
        onEnter: () => {
          s("year", l);
        },
      }),
  };
  const v = (e) => {
    const t = o.addYear(l, e * pt);
    a(t), s(null, t);
  };
  return u("div", { class: c }, [
    u(
      _e,
      d(
        d({}, t),
        {},
        {
          prefixCls: n,
          onPrevDecades: () => {
            v(-1);
          },
          onNextDecades: () => {
            v(1);
          },
        }
      ),
      null
    ),
    u(
      nt,
      d(
        d({}, t),
        {},
        {
          prefixCls: n,
          onSelect: (e) => {
            i(e, "mouse"), s("year", e);
          },
        }
      ),
      null
    ),
  ]);
}
(ft.displayName = "DecadePanel"), (ft.inheritAttrs = !1);
const gt = 7;
function ht(e, t) {
  return (!e && !t) || (!(!e || !t) && void 0);
}
function mt(e, t, n) {
  const a = ht(t, n);
  return "boolean" == typeof a ? a : e.getYear(t) === e.getYear(n);
}
function bt(e, t) {
  return Math.floor(e.getMonth(t) / 3) + 1;
}
function wt(e, t, n) {
  const a = ht(t, n);
  return "boolean" == typeof a ? a : mt(e, t, n) && bt(e, t) === bt(e, n);
}
function Ct(e, t, n) {
  const a = ht(t, n);
  return "boolean" == typeof a
    ? a
    : mt(e, t, n) && e.getMonth(t) === e.getMonth(n);
}
function $t(e, t, n) {
  const a = ht(t, n);
  return "boolean" == typeof a
    ? a
    : e.getYear(t) === e.getYear(n) &&
        e.getMonth(t) === e.getMonth(n) &&
        e.getDate(t) === e.getDate(n);
}
function kt(e, t, n, a) {
  const o = ht(n, a);
  return "boolean" == typeof o
    ? o
    : e.locale.getWeek(t, n) === e.locale.getWeek(t, a);
}
function yt(e, t, n) {
  return (
    $t(e, t, n) &&
    (function (e, t, n) {
      const a = ht(t, n);
      return "boolean" == typeof a
        ? a
        : e.getHour(t) === e.getHour(n) &&
            e.getMinute(t) === e.getMinute(n) &&
            e.getSecond(t) === e.getSecond(n);
    })(e, t, n)
  );
}
function xt(e, t, n, a) {
  return (
    !!(t && n && a) &&
    !$t(e, t, a) &&
    !$t(e, n, a) &&
    e.isAfter(a, t) &&
    e.isAfter(n, a)
  );
}
function St(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
  switch (t) {
    case "year":
      return n.addYear(e, 10 * a);
    case "quarter":
    case "month":
      return n.addYear(e, a);
    default:
      return n.addMonth(e, a);
  }
}
function Dt(e, t) {
  let { generateConfig: n, locale: a, format: o } = t;
  return "function" == typeof o ? o(e) : n.locale.format(a.locale, e, o);
}
function Mt(e, t) {
  let { generateConfig: n, locale: a, formatList: o } = t;
  return e && "function" != typeof o[0] ? n.locale.parse(a.locale, e, o) : null;
}
function Pt(e) {
  let { cellDate: t, mode: n, disabledDate: a, generateConfig: o } = e;
  if (!a) return !1;
  const l = (e, n, l) => {
    let r = n;
    for (; r <= l; ) {
      let n;
      switch (e) {
        case "date":
          if (((n = o.setDate(t, r)), !a(n))) return !1;
          break;
        case "month":
          if (
            ((n = o.setMonth(t, r)),
            !Pt({
              cellDate: n,
              mode: "month",
              generateConfig: o,
              disabledDate: a,
            }))
          )
            return !1;
          break;
        case "year":
          if (
            ((n = o.setYear(t, r)),
            !Pt({
              cellDate: n,
              mode: "year",
              generateConfig: o,
              disabledDate: a,
            }))
          )
            return !1;
      }
      r += 1;
    }
    return !0;
  };
  switch (n) {
    case "date":
    case "week":
      return a(t);
    case "month":
      return l("date", 1, o.getDate(o.getEndDate(t)));
    case "quarter": {
      const e = 3 * Math.floor(o.getMonth(t) / 3);
      return l("month", e, e + 2);
    }
    case "year":
      return l("month", 0, 11);
    case "decade": {
      const e = o.getYear(t),
        n = Math.floor(e / vt) * vt;
      return l("year", n, n + vt - 1);
    }
  }
}
function Yt(e) {
  const t = je(e),
    { hideHeader: n } = Ue();
  if (n.value) return null;
  const { prefixCls: a, generateConfig: o, locale: l, value: r, format: i } = t;
  return u(
    Ge,
    { prefixCls: `${a}-header` },
    {
      default: () => [
        r ? Dt(r, { locale: l, format: i, generateConfig: o }) : " ",
      ],
    }
  );
}
(Yt.displayName = "TimeHeader"), (Yt.inheritAttrs = !1);
const Rt = g({
  name: "TimeUnitColumn",
  props: [
    "prefixCls",
    "units",
    "onSelect",
    "value",
    "active",
    "hideDisabledOptions",
  ],
  setup(e) {
    const { open: t } = Ue(),
      n = h(null),
      a = m(new Map()),
      o = m();
    return (
      b(
        () => e.value,
        () => {
          const o = a.value.get(e.value);
          o && !1 !== t.value && ot(n.value, o.offsetTop, 120);
        }
      ),
      w(() => {
        var e;
        null === (e = o.value) || void 0 === e || e.call(o);
      }),
      b(
        t,
        () => {
          var l;
          null === (l = o.value) || void 0 === l || l.call(o),
            C(() => {
              if (t.value) {
                const t = a.value.get(e.value);
                t &&
                  (o.value = (function (e, t) {
                    let n;
                    return (
                      (function a() {
                        f(e)
                          ? t()
                          : (n = p(() => {
                              a();
                            }));
                      })(),
                      () => {
                        p.cancel(n);
                      }
                    );
                  })(t, () => {
                    ot(n.value, t.offsetTop, 0);
                  }));
              }
            });
        },
        { immediate: !0, flush: "post" }
      ),
      () => {
        const {
            prefixCls: t,
            units: o,
            onSelect: l,
            value: r,
            active: i,
            hideDisabledOptions: s,
          } = e,
          d = `${t}-cell`;
        return u(
          "ul",
          {
            class: c(`${t}-column`, { [`${t}-column-active`]: i }),
            ref: n,
            style: { position: "relative" },
          },
          [
            o.map((e) =>
              s && e.disabled
                ? null
                : u(
                    "li",
                    {
                      key: e.value,
                      ref: (t) => {
                        a.value.set(e.value, t);
                      },
                      class: c(d, {
                        [`${d}-disabled`]: e.disabled,
                        [`${d}-selected`]: r === e.value,
                      }),
                      onClick: () => {
                        e.disabled || l(e.value);
                      },
                    },
                    [u("div", { class: `${d}-inner` }, [e.label])]
                  )
            ),
          ]
        );
      }
    );
  },
});
function Ot(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0",
    a = String(e);
  for (; a.length < t; ) a = `${n}${e}`;
  return a;
}
function It(e) {
  return null == e ? [] : Array.isArray(e) ? e : [e];
}
function Nt(e) {
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      (!n.startsWith("data-") &&
        !n.startsWith("aria-") &&
        "role" !== n &&
        "name" !== n) ||
        n.startsWith("data-__") ||
        (t[n] = e[n]);
    }),
    t
  );
}
function Ht(e, t) {
  return e ? e[t] : null;
}
function Tt(e, t, n) {
  const a = [Ht(e, 0), Ht(e, 1)];
  return (a[n] = "function" == typeof t ? t(a[n]) : t), a[0] || a[1] ? a : null;
}
function Et(e, t, n, a) {
  const o = [];
  for (let l = e; l <= t; l += n)
    o.push({ label: Ot(l, 2), value: l, disabled: (a || []).includes(l) });
  return o;
}
const Vt = g({
    compatConfig: { MODE: 3 },
    name: "TimeBody",
    inheritAttrs: !1,
    props: [
      "generateConfig",
      "prefixCls",
      "operationRef",
      "activeColumnIndex",
      "value",
      "showHour",
      "showMinute",
      "showSecond",
      "use12Hours",
      "hourStep",
      "minuteStep",
      "secondStep",
      "disabledHours",
      "disabledMinutes",
      "disabledSeconds",
      "disabledTime",
      "hideDisabledOptions",
      "onSelect",
    ],
    setup(e) {
      const t = $(() => (e.value ? e.generateConfig.getHour(e.value) : -1)),
        n = $(() => !!e.use12Hours && t.value >= 12),
        a = $(() => (e.use12Hours ? t.value % 12 : t.value)),
        o = $(() => (e.value ? e.generateConfig.getMinute(e.value) : -1)),
        r = $(() => (e.value ? e.generateConfig.getSecond(e.value) : -1)),
        i = m(e.generateConfig.getNow()),
        s = m(),
        d = m(),
        c = m();
      k(() => {
        i.value = e.generateConfig.getNow();
      }),
        y(() => {
          if (e.disabledTime) {
            const t = e.disabledTime(i);
            [s.value, d.value, c.value] = [
              t.disabledHours,
              t.disabledMinutes,
              t.disabledSeconds,
            ];
          } else
            [s.value, d.value, c.value] = [
              e.disabledHours,
              e.disabledMinutes,
              e.disabledSeconds,
            ];
        });
      const v = (t, n, a, o) => {
          let l = e.value || e.generateConfig.getNow();
          const r = Math.max(0, n),
            i = Math.max(0, a),
            u = Math.max(0, o);
          return (
            (l = Qe(e.generateConfig, l, e.use12Hours && t ? r + 12 : r, i, u)),
            l
          );
        },
        p = $(() => {
          var t;
          return Et(
            0,
            23,
            null !== (t = e.hourStep) && void 0 !== t ? t : 1,
            s.value && s.value()
          );
        }),
        f = $(() => {
          if (!e.use12Hours) return [!1, !1];
          const t = [!0, !0];
          return (
            p.value.forEach((e) => {
              let { disabled: n, value: a } = e;
              n || (a >= 12 ? (t[1] = !1) : (t[0] = !1));
            }),
            t
          );
        }),
        g = $(() =>
          e.use12Hours
            ? p.value
                .filter(n.value ? (e) => e.value >= 12 : (e) => e.value < 12)
                .map((e) => {
                  const t = e.value % 12,
                    n = 0 === t ? "12" : Ot(t, 2);
                  return l(l({}, e), { label: n, value: t });
                })
            : p.value
        ),
        h = $(() => {
          var n;
          return Et(
            0,
            59,
            null !== (n = e.minuteStep) && void 0 !== n ? n : 1,
            d.value && d.value(t.value)
          );
        }),
        b = $(() => {
          var n;
          return Et(
            0,
            59,
            null !== (n = e.secondStep) && void 0 !== n ? n : 1,
            c.value && c.value(t.value, o.value)
          );
        });
      return () => {
        const {
            prefixCls: t,
            operationRef: l,
            activeColumnIndex: i,
            showHour: s,
            showMinute: d,
            showSecond: c,
            use12Hours: p,
            hideDisabledOptions: m,
            onSelect: w,
          } = e,
          C = [],
          $ = `${t}-content`,
          k = `${t}-time-panel`;
        function y(e, t, n, a, o) {
          !1 !== e &&
            C.push({
              node: x(t, {
                prefixCls: k,
                value: n,
                active: i === C.length,
                onSelect: o,
                units: a,
                hideDisabledOptions: m,
              }),
              onSelect: o,
              value: n,
              units: a,
            });
        }
        (l.value = {
          onUpDown: (e) => {
            const t = C[i];
            if (t) {
              const n = t.units.findIndex((e) => e.value === t.value),
                a = t.units.length;
              for (let o = 1; o < a; o += 1) {
                const l = t.units[(n + e * o + a) % a];
                if (!0 !== l.disabled) {
                  t.onSelect(l.value);
                  break;
                }
              }
            }
          },
        }),
          y(s, u(Rt, { key: "hour" }, null), a.value, g.value, (e) => {
            w(v(n.value, e, o.value, r.value), "mouse");
          }),
          y(d, u(Rt, { key: "minute" }, null), o.value, h.value, (e) => {
            w(v(n.value, a.value, e, r.value), "mouse");
          }),
          y(c, u(Rt, { key: "second" }, null), r.value, b.value, (e) => {
            w(v(n.value, a.value, o.value, e), "mouse");
          });
        let S = -1;
        return (
          "boolean" == typeof n.value && (S = n.value ? 1 : 0),
          y(
            !0 === p,
            u(Rt, { key: "12hours" }, null),
            S,
            [
              { label: "AM", value: 0, disabled: f.value[0] },
              { label: "PM", value: 1, disabled: f.value[1] },
            ],
            (e) => {
              w(v(!!e, a.value, o.value, r.value), "mouse");
            }
          ),
          u("div", { class: $ }, [
            C.map((e) => {
              let { node: t } = e;
              return t;
            }),
          ])
        );
      };
    },
  }),
  At = (e) => e.filter((e) => !1 !== e).length;
function Wt(e) {
  const t = je(e),
    {
      generateConfig: n,
      format: a = "HH:mm:ss",
      prefixCls: o,
      active: l,
      operationRef: r,
      showHour: i,
      showMinute: s,
      showSecond: v,
      use12Hours: p = !1,
      onSelect: f,
      value: g,
    } = t,
    h = `${o}-time-panel`,
    b = m(),
    w = m(-1),
    C = At([i, s, v, p]);
  return (
    (r.value = {
      onKeydown: (e) =>
        lt(e, {
          onLeftRight: (e) => {
            w.value = (w.value + e + C) % C;
          },
          onUpDown: (e) => {
            -1 === w.value ? (w.value = 0) : b.value && b.value.onUpDown(e);
          },
          onEnter: () => {
            f(g || n.getNow(), "key"), (w.value = -1);
          },
        }),
      onBlur: () => {
        w.value = -1;
      },
    }),
    u("div", { class: c(h, { [`${h}-active`]: l }) }, [
      u(Yt, d(d({}, t), {}, { format: a, prefixCls: o }), null),
      u(
        Vt,
        d(
          d({}, t),
          {},
          { prefixCls: o, activeColumnIndex: w.value, operationRef: b }
        ),
        null
      ),
    ])
  );
}
function Bt(e) {
  let {
    cellPrefixCls: t,
    generateConfig: n,
    rangedValue: a,
    hoverRangedValue: o,
    isInView: l,
    isSameCell: r,
    offsetCell: i,
    today: u,
    value: s,
  } = e;
  return function (e) {
    const d = i(e, -1),
      c = i(e, 1),
      v = Ht(a, 0),
      p = Ht(a, 1),
      f = Ht(o, 0),
      g = Ht(o, 1),
      h = xt(n, f, g, e);
    function m(e) {
      return r(v, e);
    }
    function b(e) {
      return r(p, e);
    }
    const w = r(f, e),
      C = r(g, e),
      $ = (h || C) && (!l(d) || b(d)),
      k = (h || w) && (!l(c) || m(c));
    return {
      [`${t}-in-view`]: l(e),
      [`${t}-in-range`]: xt(n, v, p, e),
      [`${t}-range-start`]: m(e),
      [`${t}-range-end`]: b(e),
      [`${t}-range-start-single`]: m(e) && !p,
      [`${t}-range-end-single`]: b(e) && !v,
      [`${t}-range-start-near-hover`]: m(e) && (r(d, f) || xt(n, f, g, d)),
      [`${t}-range-end-near-hover`]: b(e) && (r(c, g) || xt(n, f, g, c)),
      [`${t}-range-hover`]: h,
      [`${t}-range-hover-start`]: w,
      [`${t}-range-hover-end`]: C,
      [`${t}-range-hover-edge-start`]: $,
      [`${t}-range-hover-edge-end`]: k,
      [`${t}-range-hover-edge-start-near-range`]: $ && r(d, p),
      [`${t}-range-hover-edge-end-near-range`]: k && r(c, v),
      [`${t}-today`]: r(u, e),
      [`${t}-selected`]: r(s, e),
    };
  };
}
(Wt.displayName = "TimePanel"), (Wt.inheritAttrs = !1);
const Ft = Symbol("RangeContextProps"),
  Lt = () =>
    i(Ft, {
      rangedValue: m(),
      hoverRangedValue: m(),
      inRange: m(),
      panelPosition: m(),
    }),
  jt = g({
    compatConfig: { MODE: 3 },
    name: "PanelContextProvider",
    inheritAttrs: !1,
    props: { value: { type: Object, default: () => ({}) } },
    setup(e, t) {
      let { slots: n } = t;
      const a = {
        rangedValue: m(e.value.rangedValue),
        hoverRangedValue: m(e.value.hoverRangedValue),
        inRange: m(e.value.inRange),
        panelPosition: m(e.value.panelPosition),
      };
      return (
        ((e) => {
          r(Ft, e);
        })(a),
        b(
          () => e.value,
          () => {
            Object.keys(e.value).forEach((t) => {
              a[t] && (a[t].value = e.value[t]);
            });
          }
        ),
        () => {
          var e;
          return null === (e = n.default) || void 0 === e ? void 0 : e.call(n);
        }
      );
    },
  });
function zt(e) {
  const t = je(e),
    {
      prefixCls: n,
      generateConfig: a,
      prefixColumn: o,
      locale: l,
      rowCount: r,
      viewDate: i,
      value: s,
      dateRender: c,
    } = t,
    { rangedValue: v, hoverRangedValue: p } = Lt(),
    f = (function (e, t, n) {
      const a = t.locale.getWeekFirstDay(e),
        o = t.setDate(n, 1),
        l = t.getWeekDay(o);
      let r = t.addDate(o, a - l);
      return (
        t.getMonth(r) === t.getMonth(n) &&
          t.getDate(r) > 1 &&
          (r = t.addDate(r, -7)),
        r
      );
    })(l.locale, a, i),
    g = `${n}-cell`,
    h = a.locale.getWeekFirstDay(l.locale),
    m = a.getNow(),
    b = [],
    w =
      l.shortWeekDays ||
      (a.locale.getShortWeekDays ? a.locale.getShortWeekDays(l.locale) : []);
  o && b.push(u("th", { key: "empty", "aria-label": "empty cell" }, null));
  for (let d = 0; d < gt; d += 1)
    b.push(u("th", { key: d }, [w[(d + h) % gt]]));
  const C = Bt({
      cellPrefixCls: g,
      today: m,
      value: s,
      generateConfig: a,
      rangedValue: o ? null : v.value,
      hoverRangedValue: o ? null : p.value,
      isSameCell: (e, t) => $t(a, e, t),
      isInView: (e) => Ct(a, e, i),
      offsetCell: (e, t) => a.addDate(e, t),
    }),
    $ = c ? (e) => c({ current: e, today: m }) : void 0;
  return u(
    Je,
    d(
      d({}, t),
      {},
      {
        rowNum: r,
        colNum: gt,
        baseDate: f,
        getCellNode: $,
        getCellText: a.getDate,
        getCellClassName: C,
        getCellDate: a.addDate,
        titleCell: (e) =>
          Dt(e, { locale: l, format: "YYYY-MM-DD", generateConfig: a }),
        headerCells: b,
      }
    ),
    null
  );
}
function Kt(e) {
  const t = je(e),
    {
      prefixCls: n,
      generateConfig: a,
      locale: o,
      viewDate: l,
      onNextMonth: r,
      onPrevMonth: i,
      onNextYear: s,
      onPrevYear: c,
      onYearClick: v,
      onMonthClick: p,
    } = t,
    { hideHeader: f } = Ue();
  if (f.value) return null;
  const g = `${n}-header`,
    h =
      o.shortMonths ||
      (a.locale.getShortMonths ? a.locale.getShortMonths(o.locale) : []),
    m = a.getMonth(l),
    b = u(
      "button",
      {
        type: "button",
        key: "year",
        onClick: v,
        tabindex: -1,
        class: `${n}-year-btn`,
      },
      [Dt(l, { locale: o, format: o.yearFormat, generateConfig: a })]
    ),
    w = u(
      "button",
      {
        type: "button",
        key: "month",
        onClick: p,
        tabindex: -1,
        class: `${n}-month-btn`,
      },
      [
        o.monthFormat
          ? Dt(l, { locale: o, format: o.monthFormat, generateConfig: a })
          : h[m],
      ]
    ),
    C = o.monthBeforeYear ? [w, b] : [b, w];
  return u(
    Ge,
    d(
      d({}, t),
      {},
      { prefixCls: g, onSuperPrev: c, onPrev: i, onNext: r, onSuperNext: s }
    ),
    { default: () => [C] }
  );
}
(zt.displayName = "DateBody"),
  (zt.inheritAttrs = !1),
  (zt.props = [
    "prefixCls",
    "generateConfig",
    "value?",
    "viewDate",
    "locale",
    "rowCount",
    "onSelect",
    "dateRender?",
    "disabledDate?",
    "prefixColumn?",
    "rowClassName?",
  ]),
  (Kt.displayName = "DateHeader"),
  (Kt.inheritAttrs = !1);
const Ut = 6;
function qt(e) {
  const t = je(e),
    {
      prefixCls: n,
      panelName: a = "date",
      keyboardConfig: o,
      active: r,
      operationRef: i,
      generateConfig: s,
      value: v,
      viewDate: p,
      onViewDateChange: f,
      onPanelChange: g,
      onSelect: h,
    } = t,
    m = `${n}-${a}-panel`;
  i.value = {
    onKeydown: (e) =>
      lt(
        e,
        l(
          {
            onLeftRight: (e) => {
              h(s.addDate(v || p, e), "key");
            },
            onCtrlLeftRight: (e) => {
              h(s.addYear(v || p, e), "key");
            },
            onUpDown: (e) => {
              h(s.addDate(v || p, e * gt), "key");
            },
            onPageUpDown: (e) => {
              h(s.addMonth(v || p, e), "key");
            },
          },
          o
        )
      ),
  };
  const b = (e) => {
      const t = s.addYear(p, e);
      f(t), g(null, t);
    },
    w = (e) => {
      const t = s.addMonth(p, e);
      f(t), g(null, t);
    };
  return u("div", { class: c(m, { [`${m}-active`]: r }) }, [
    u(
      Kt,
      d(
        d({}, t),
        {},
        {
          prefixCls: n,
          value: v,
          viewDate: p,
          onPrevYear: () => {
            b(-1);
          },
          onNextYear: () => {
            b(1);
          },
          onPrevMonth: () => {
            w(-1);
          },
          onNextMonth: () => {
            w(1);
          },
          onMonthClick: () => {
            g("month", p);
          },
          onYearClick: () => {
            g("year", p);
          },
        }
      ),
      null
    ),
    u(
      zt,
      d(
        d({}, t),
        {},
        {
          onSelect: (e) => h(e, "mouse"),
          prefixCls: n,
          value: v,
          viewDate: p,
          rowCount: Ut,
        }
      ),
      null
    ),
  ]);
}
(qt.displayName = "DatePanel"), (qt.inheritAttrs = !1);
const Gt = (function () {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t;
})("date", "time");
function _t(e) {
  const t = je(e),
    {
      prefixCls: n,
      operationRef: a,
      generateConfig: o,
      value: r,
      defaultValue: i,
      disabledTime: s,
      showTime: p,
      onSelect: f,
    } = t,
    g = `${n}-datetime-panel`,
    h = m(null),
    b = m({}),
    w = m({}),
    C = "object" == typeof p ? l({}, p) : {};
  const $ = (e) => {
    w.value.onBlur && w.value.onBlur(e), (h.value = null);
  };
  a.value = {
    onKeydown: (e) => {
      if (e.which === v.TAB) {
        const t = (function (e) {
          const t = Gt.indexOf(h.value) + e;
          return Gt[t] || null;
        })(e.shiftKey ? -1 : 1);
        return (h.value = t), t && e.preventDefault(), !0;
      }
      if (h.value) {
        const t = "date" === h.value ? b : w;
        return t.value && t.value.onKeydown && t.value.onKeydown(e), !0;
      }
      return (
        !![v.LEFT, v.RIGHT, v.UP, v.DOWN].includes(e.which) &&
        ((h.value = "date"), !0)
      );
    },
    onBlur: $,
    onClose: $,
  };
  const k = (e, t) => {
      let n = e;
      "date" === t && !r && C.defaultValue
        ? ((n = o.setHour(n, o.getHour(C.defaultValue))),
          (n = o.setMinute(n, o.getMinute(C.defaultValue))),
          (n = o.setSecond(n, o.getSecond(C.defaultValue))))
        : "time" === t &&
          !r &&
          i &&
          ((n = o.setYear(n, o.getYear(i))),
          (n = o.setMonth(n, o.getMonth(i))),
          (n = o.setDate(n, o.getDate(i)))),
        f && f(n, "mouse");
    },
    y = s ? s(r || null) : {};
  return u("div", { class: c(g, { [`${g}-active`]: h.value }) }, [
    u(
      qt,
      d(
        d({}, t),
        {},
        {
          operationRef: b,
          active: "date" === h.value,
          onSelect: (e) => {
            k(
              Xe(o, e, r || "object" != typeof p ? null : p.defaultValue),
              "date"
            );
          },
        }
      ),
      null
    ),
    u(
      Wt,
      d(
        d(d(d({}, t), {}, { format: void 0 }, C), y),
        {},
        {
          disabledTime: null,
          defaultValue: void 0,
          operationRef: w,
          active: "time" === h.value,
          onSelect: (e) => {
            k(e, "time");
          },
        }
      ),
      null
    ),
  ]);
}
function Qt(e) {
  const t = je(e),
    { prefixCls: n, generateConfig: a, locale: o, value: l } = t,
    r = `${n}-cell`,
    i = `${n}-week-panel-row`;
  return u(
    qt,
    d(
      d({}, t),
      {},
      {
        panelName: "week",
        prefixColumn: (e) =>
          u("td", { key: "week", class: c(r, `${r}-week`) }, [
            a.locale.getWeek(o.locale, e),
          ]),
        rowClassName: (e) => c(i, { [`${i}-selected`]: kt(a, o.locale, l, e) }),
        keyboardConfig: { onLeftRight: null },
      }
    ),
    null
  );
}
function Xt(e) {
  const t = je(e),
    {
      prefixCls: n,
      generateConfig: a,
      locale: o,
      viewDate: l,
      onNextYear: r,
      onPrevYear: i,
      onYearClick: s,
    } = t,
    { hideHeader: c } = Ue();
  if (c.value) return null;
  const v = `${n}-header`;
  return u(
    Ge,
    d(d({}, t), {}, { prefixCls: v, onSuperPrev: i, onSuperNext: r }),
    {
      default: () => [
        u("button", { type: "button", onClick: s, class: `${n}-year-btn` }, [
          Dt(l, { locale: o, format: o.yearFormat, generateConfig: a }),
        ]),
      ],
    }
  );
}
(_t.displayName = "DatetimePanel"),
  (_t.inheritAttrs = !1),
  (Qt.displayName = "WeekPanel"),
  (Qt.inheritAttrs = !1),
  (Xt.displayName = "MonthHeader"),
  (Xt.inheritAttrs = !1);
const Zt = 3,
  Jt = 4;
function en(e) {
  const t = je(e),
    {
      prefixCls: n,
      locale: a,
      value: o,
      viewDate: l,
      generateConfig: r,
      monthCellRender: i,
    } = t,
    { rangedValue: s, hoverRangedValue: c } = Lt(),
    v = Bt({
      cellPrefixCls: `${n}-cell`,
      value: o,
      generateConfig: r,
      rangedValue: s.value,
      hoverRangedValue: c.value,
      isSameCell: (e, t) => Ct(r, e, t),
      isInView: () => !0,
      offsetCell: (e, t) => r.addMonth(e, t),
    }),
    p =
      a.shortMonths ||
      (r.locale.getShortMonths ? r.locale.getShortMonths(a.locale) : []),
    f = r.setMonth(l, 0),
    g = i ? (e) => i({ current: e, locale: a }) : void 0;
  return u(
    Je,
    d(
      d({}, t),
      {},
      {
        rowNum: Jt,
        colNum: Zt,
        baseDate: f,
        getCellNode: g,
        getCellText: (e) =>
          a.monthFormat
            ? Dt(e, { locale: a, format: a.monthFormat, generateConfig: r })
            : p[r.getMonth(e)],
        getCellClassName: v,
        getCellDate: r.addMonth,
        titleCell: (e) =>
          Dt(e, { locale: a, format: "YYYY-MM", generateConfig: r }),
      }
    ),
    null
  );
}
function tn(e) {
  const t = je(e),
    {
      prefixCls: n,
      operationRef: a,
      onViewDateChange: o,
      generateConfig: l,
      value: r,
      viewDate: i,
      onPanelChange: s,
      onSelect: c,
    } = t,
    v = `${n}-month-panel`;
  a.value = {
    onKeydown: (e) =>
      lt(e, {
        onLeftRight: (e) => {
          c(l.addMonth(r || i, e), "key");
        },
        onCtrlLeftRight: (e) => {
          c(l.addYear(r || i, e), "key");
        },
        onUpDown: (e) => {
          c(l.addMonth(r || i, e * Zt), "key");
        },
        onEnter: () => {
          s("date", r || i);
        },
      }),
  };
  const p = (e) => {
    const t = l.addYear(i, e);
    o(t), s(null, t);
  };
  return u("div", { class: v }, [
    u(
      Xt,
      d(
        d({}, t),
        {},
        {
          prefixCls: n,
          onPrevYear: () => {
            p(-1);
          },
          onNextYear: () => {
            p(1);
          },
          onYearClick: () => {
            s("year", i);
          },
        }
      ),
      null
    ),
    u(
      en,
      d(
        d({}, t),
        {},
        {
          prefixCls: n,
          onSelect: (e) => {
            c(e, "mouse"), s("date", e);
          },
        }
      ),
      null
    ),
  ]);
}
function nn(e) {
  const t = je(e),
    {
      prefixCls: n,
      generateConfig: a,
      locale: o,
      viewDate: l,
      onNextYear: r,
      onPrevYear: i,
      onYearClick: s,
    } = t,
    { hideHeader: c } = Ue();
  if (c.value) return null;
  const v = `${n}-header`;
  return u(
    Ge,
    d(d({}, t), {}, { prefixCls: v, onSuperPrev: i, onSuperNext: r }),
    {
      default: () => [
        u("button", { type: "button", onClick: s, class: `${n}-year-btn` }, [
          Dt(l, { locale: o, format: o.yearFormat, generateConfig: a }),
        ]),
      ],
    }
  );
}
(en.displayName = "MonthBody"),
  (en.inheritAttrs = !1),
  (tn.displayName = "MonthPanel"),
  (tn.inheritAttrs = !1),
  (nn.displayName = "QuarterHeader"),
  (nn.inheritAttrs = !1);
const an = 4,
  on = 1;
function ln(e) {
  const t = je(e),
    { prefixCls: n, locale: a, value: o, viewDate: l, generateConfig: r } = t,
    { rangedValue: i, hoverRangedValue: s } = Lt(),
    c = Bt({
      cellPrefixCls: `${n}-cell`,
      value: o,
      generateConfig: r,
      rangedValue: i.value,
      hoverRangedValue: s.value,
      isSameCell: (e, t) => wt(r, e, t),
      isInView: () => !0,
      offsetCell: (e, t) => r.addMonth(e, 3 * t),
    }),
    v = r.setDate(r.setMonth(l, 0), 1);
  return u(
    Je,
    d(
      d({}, t),
      {},
      {
        rowNum: on,
        colNum: an,
        baseDate: v,
        getCellText: (e) =>
          Dt(e, {
            locale: a,
            format: a.quarterFormat || "[Q]Q",
            generateConfig: r,
          }),
        getCellClassName: c,
        getCellDate: (e, t) => r.addMonth(e, 3 * t),
        titleCell: (e) =>
          Dt(e, { locale: a, format: "YYYY-[Q]Q", generateConfig: r }),
      }
    ),
    null
  );
}
function rn(e) {
  const t = je(e),
    {
      prefixCls: n,
      operationRef: a,
      onViewDateChange: o,
      generateConfig: l,
      value: r,
      viewDate: i,
      onPanelChange: s,
      onSelect: c,
    } = t,
    v = `${n}-quarter-panel`;
  a.value = {
    onKeydown: (e) =>
      lt(e, {
        onLeftRight: (e) => {
          c(l.addMonth(r || i, 3 * e), "key");
        },
        onCtrlLeftRight: (e) => {
          c(l.addYear(r || i, e), "key");
        },
        onUpDown: (e) => {
          c(l.addYear(r || i, e), "key");
        },
      }),
  };
  const p = (e) => {
    const t = l.addYear(i, e);
    o(t), s(null, t);
  };
  return u("div", { class: v }, [
    u(
      nn,
      d(
        d({}, t),
        {},
        {
          prefixCls: n,
          onPrevYear: () => {
            p(-1);
          },
          onNextYear: () => {
            p(1);
          },
          onYearClick: () => {
            s("year", i);
          },
        }
      ),
      null
    ),
    u(
      ln,
      d(
        d({}, t),
        {},
        {
          prefixCls: n,
          onSelect: (e) => {
            c(e, "mouse");
          },
        }
      ),
      null
    ),
  ]);
}
function un(e) {
  const t = je(e),
    {
      prefixCls: n,
      generateConfig: a,
      viewDate: o,
      onPrevDecade: l,
      onNextDecade: r,
      onDecadeClick: i,
    } = t,
    { hideHeader: c } = Ue();
  if (c.value) return null;
  const v = `${n}-header`,
    p = a.getYear(o),
    f = Math.floor(p / vn) * vn,
    g = f + vn - 1;
  return u(
    Ge,
    d(d({}, t), {}, { prefixCls: v, onSuperPrev: l, onSuperNext: r }),
    {
      default: () => [
        u("button", { type: "button", onClick: i, class: `${n}-decade-btn` }, [
          f,
          s("-"),
          g,
        ]),
      ],
    }
  );
}
(ln.displayName = "QuarterBody"),
  (ln.inheritAttrs = !1),
  (rn.displayName = "QuarterPanel"),
  (rn.inheritAttrs = !1),
  (un.displayName = "YearHeader"),
  (un.inheritAttrs = !1);
const sn = 3,
  dn = 4;
function cn(e) {
  const t = je(e),
    { prefixCls: n, value: a, viewDate: o, locale: l, generateConfig: r } = t,
    { rangedValue: i, hoverRangedValue: s } = Lt(),
    c = `${n}-cell`,
    v = r.getYear(o),
    p = Math.floor(v / vn) * vn,
    f = p + vn - 1,
    g = r.setYear(o, p - Math.ceil((sn * dn - vn) / 2)),
    h = Bt({
      cellPrefixCls: c,
      value: a,
      generateConfig: r,
      rangedValue: i.value,
      hoverRangedValue: s.value,
      isSameCell: (e, t) => mt(r, e, t),
      isInView: (e) => {
        const t = r.getYear(e);
        return p <= t && t <= f;
      },
      offsetCell: (e, t) => r.addYear(e, t),
    });
  return u(
    Je,
    d(
      d({}, t),
      {},
      {
        rowNum: dn,
        colNum: sn,
        baseDate: g,
        getCellText: r.getYear,
        getCellClassName: h,
        getCellDate: r.addYear,
        titleCell: (e) =>
          Dt(e, { locale: l, format: "YYYY", generateConfig: r }),
      }
    ),
    null
  );
}
(cn.displayName = "YearBody"), (cn.inheritAttrs = !1);
const vn = 10;
function pn(e) {
  const t = je(e),
    {
      prefixCls: n,
      operationRef: a,
      onViewDateChange: o,
      generateConfig: l,
      value: r,
      viewDate: i,
      sourceMode: s,
      onSelect: c,
      onPanelChange: v,
    } = t,
    p = `${n}-year-panel`;
  a.value = {
    onKeydown: (e) =>
      lt(e, {
        onLeftRight: (e) => {
          c(l.addYear(r || i, e), "key");
        },
        onCtrlLeftRight: (e) => {
          c(l.addYear(r || i, e * vn), "key");
        },
        onUpDown: (e) => {
          c(l.addYear(r || i, e * sn), "key");
        },
        onEnter: () => {
          v("date" === s ? "date" : "month", r || i);
        },
      }),
  };
  const f = (e) => {
    const t = l.addYear(i, 10 * e);
    o(t), v(null, t);
  };
  return u("div", { class: p }, [
    u(
      un,
      d(
        d({}, t),
        {},
        {
          prefixCls: n,
          onPrevDecade: () => {
            f(-1);
          },
          onNextDecade: () => {
            f(1);
          },
          onDecadeClick: () => {
            v("decade", i);
          },
        }
      ),
      null
    ),
    u(
      cn,
      d(
        d({}, t),
        {},
        {
          prefixCls: n,
          onSelect: (e) => {
            v("date" === s ? "date" : "month", e), c(e, "mouse");
          },
        }
      ),
      null
    ),
  ]);
}
function fn(e, t, n) {
  return n ? u("div", { class: `${e}-footer-extra` }, [n(t)]) : null;
}
function gn(e) {
  let t,
    n,
    {
      prefixCls: a,
      components: o = {},
      needConfirmButton: l,
      onNow: r,
      onOk: i,
      okDisabled: s,
      showNow: d,
      locale: c,
    } = e;
  if (l) {
    const e = o.button || "button";
    r &&
      !1 !== d &&
      (t = u("li", { class: `${a}-now` }, [
        u("a", { class: `${a}-now-btn`, onClick: r }, [c.now]),
      ])),
      (n =
        l &&
        u("li", { class: `${a}-ok` }, [
          u(
            e,
            {
              disabled: s,
              onClick: (e) => {
                e.stopPropagation(), i && i();
              },
            },
            { default: () => [c.ok] }
          ),
        ]));
  }
  return t || n ? u("ul", { class: `${a}-ranges` }, [t, n]) : null;
}
(pn.displayName = "YearPanel"), (pn.inheritAttrs = !1);
const hn = g({
    name: "PickerPanel",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      locale: Object,
      generateConfig: Object,
      value: Object,
      defaultValue: Object,
      pickerValue: Object,
      defaultPickerValue: Object,
      disabledDate: Function,
      mode: String,
      picker: { type: String, default: "date" },
      tabindex: { type: [Number, String], default: 0 },
      showNow: { type: Boolean, default: void 0 },
      showTime: [Boolean, Object],
      showToday: Boolean,
      renderExtraFooter: Function,
      dateRender: Function,
      hideHeader: { type: Boolean, default: void 0 },
      onSelect: Function,
      onChange: Function,
      onPanelChange: Function,
      onMousedown: Function,
      onPickerValueChange: Function,
      onOk: Function,
      components: Object,
      direction: String,
      hourStep: { type: Number, default: 1 },
      minuteStep: { type: Number, default: 1 },
      secondStep: { type: Number, default: 1 },
    },
    setup(e, t) {
      let { attrs: n } = t;
      const a = $(
          () => ("date" === e.picker && !!e.showTime) || "time" === e.picker
        ),
        o = $(() => 24 % e.hourStep == 0),
        r = $(() => 60 % e.minuteStep == 0),
        i = $(() => 60 % e.secondStep == 0),
        s = Ue(),
        {
          operationRef: p,
          onSelect: f,
          hideRanges: g,
          defaultOpenValue: h,
        } = s,
        {
          inRange: w,
          panelPosition: C,
          rangedValue: k,
          hoverRangedValue: y,
        } = Lt(),
        x = m({}),
        [M, P] = S(null, {
          value: D(e, "value"),
          defaultValue: e.defaultValue,
          postState: (t) =>
            !t && (null == h ? void 0 : h.value) && "time" === e.picker
              ? h.value
              : t,
        }),
        [Y, R] = S(null, {
          value: D(e, "pickerValue"),
          defaultValue: e.defaultPickerValue || M.value,
          postState: (t) => {
            const { generateConfig: n, showTime: a, defaultValue: o } = e,
              l = n.getNow();
            return t
              ? !M.value && e.showTime
                ? Xe(
                    n,
                    Array.isArray(t) ? t[0] : t,
                    "object" == typeof a ? a.defaultValue || l : o || l
                  )
                : t
              : l;
          },
        }),
        O = (t) => {
          R(t), e.onPickerValueChange && e.onPickerValueChange(t);
        },
        I = (t) => {
          const n = dt[e.picker];
          return n ? n(t) : t;
        },
        [N, H] = S(() => ("time" === e.picker ? "time" : I("date")), {
          value: D(e, "mode"),
        });
      b(
        () => e.picker,
        () => {
          H(e.picker);
        }
      );
      const T = m(N.value),
        E = (t, n) => {
          const { onPanelChange: a, generateConfig: o } = e,
            l = I(t || N.value);
          var r;
          (r = N.value),
            (T.value = r),
            H(l),
            a && (N.value !== l || yt(o, Y.value, Y.value)) && a(n, l);
        },
        V = function (t, n) {
          let a =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const {
            picker: o,
            generateConfig: l,
            onSelect: r,
            onChange: i,
            disabledDate: u,
          } = e;
          (N.value === o || a) &&
            (P(t),
            r && r(t),
            f && f(t, n),
            !i || yt(l, t, M.value) || (null == u ? void 0 : u(t)) || i(t));
        },
        A = (e) =>
          !(!x.value || !x.value.onKeydown) &&
          ([
            v.LEFT,
            v.RIGHT,
            v.UP,
            v.DOWN,
            v.PAGE_UP,
            v.PAGE_DOWN,
            v.ENTER,
          ].includes(e.which) && e.preventDefault(),
          x.value.onKeydown(e)),
        W = (e) => {
          x.value && x.value.onBlur && x.value.onBlur(e);
        },
        B = () => {
          const {
              generateConfig: t,
              hourStep: n,
              minuteStep: a,
              secondStep: l,
            } = e,
            u = t.getNow(),
            s = (function (e, t, n, a, o, l) {
              const r = Math.floor(e / a) * a;
              if (r < e) return [r, 60 - o, 60 - l];
              const i = Math.floor(t / o) * o;
              return i < t ? [r, i, 60 - l] : [r, i, Math.floor(n / l) * l];
            })(
              t.getHour(u),
              t.getMinute(u),
              t.getSecond(u),
              o.value ? n : 1,
              r.value ? a : 1,
              i.value ? l : 1
            ),
            d = Qe(t, u, s[0], s[1], s[2]);
          V(d, "submit");
        },
        F = $(() => {
          const { prefixCls: t, direction: n } = e;
          return c(`${t}-panel`, {
            [`${t}-panel-has-range`]: k && k.value && k.value[0] && k.value[1],
            [`${t}-panel-has-range-hover`]:
              y && y.value && y.value[0] && y.value[1],
            [`${t}-panel-rtl`]: "rtl" === n,
          });
        });
      return (
        Ke(
          l(l({}, s), {
            mode: N,
            hideHeader: $(() => {
              var t;
              return void 0 !== e.hideHeader
                ? e.hideHeader
                : null === (t = s.hideHeader) || void 0 === t
                ? void 0
                : t.value;
            }),
            hidePrevBtn: $(() => w.value && "right" === C.value),
            hideNextBtn: $(() => w.value && "left" === C.value),
          })
        ),
        b(
          () => e.value,
          () => {
            e.value && R(e.value);
          }
        ),
        () => {
          const {
            prefixCls: t = "ant-picker",
            locale: o,
            generateConfig: r,
            disabledDate: i,
            picker: s = "date",
            tabindex: v = 0,
            showNow: f,
            showTime: h,
            showToday: m,
            renderExtraFooter: b,
            onMousedown: w,
            onOk: $,
            components: k,
          } = e;
          let y;
          p &&
            "right" !== C.value &&
            (p.value = {
              onKeydown: A,
              onClose: () => {
                x.value && x.value.onClose && x.value.onClose();
              },
            });
          const S = l(l(l({}, n), e), {
            operationRef: x,
            prefixCls: t,
            viewDate: Y.value,
            value: M.value,
            onViewDateChange: O,
            sourceMode: T.value,
            onPanelChange: E,
            disabledDate: i,
          });
          switch ((delete S.onChange, delete S.onSelect, N.value)) {
            case "decade":
              y = u(
                ft,
                d(
                  d({}, S),
                  {},
                  {
                    onSelect: (e, t) => {
                      O(e), V(e, t);
                    },
                  }
                ),
                null
              );
              break;
            case "year":
              y = u(
                pn,
                d(
                  d({}, S),
                  {},
                  {
                    onSelect: (e, t) => {
                      O(e), V(e, t);
                    },
                  }
                ),
                null
              );
              break;
            case "month":
              y = u(
                tn,
                d(
                  d({}, S),
                  {},
                  {
                    onSelect: (e, t) => {
                      O(e), V(e, t);
                    },
                  }
                ),
                null
              );
              break;
            case "quarter":
              y = u(
                rn,
                d(
                  d({}, S),
                  {},
                  {
                    onSelect: (e, t) => {
                      O(e), V(e, t);
                    },
                  }
                ),
                null
              );
              break;
            case "week":
              y = u(
                Qt,
                d(
                  d({}, S),
                  {},
                  {
                    onSelect: (e, t) => {
                      O(e), V(e, t);
                    },
                  }
                ),
                null
              );
              break;
            case "time":
              delete S.showTime,
                (y = u(
                  Wt,
                  d(
                    d(d({}, S), "object" == typeof h ? h : null),
                    {},
                    {
                      onSelect: (e, t) => {
                        O(e), V(e, t);
                      },
                    }
                  ),
                  null
                ));
              break;
            default:
              y = u(
                h ? _t : qt,
                d(
                  d({}, S),
                  {},
                  {
                    onSelect: (e, t) => {
                      O(e), V(e, t);
                    },
                  }
                ),
                null
              );
          }
          let D, P, R;
          if (
            ((null == g ? void 0 : g.value) ||
              ((D = fn(t, N.value, b)),
              (P = gn({
                prefixCls: t,
                components: k,
                needConfirmButton: a.value,
                okDisabled: !M.value || (i && i(M.value)),
                locale: o,
                showNow: f,
                onNow: a.value && B,
                onOk: () => {
                  M.value && (V(M.value, "submit", !0), $ && $(M.value));
                },
              }))),
            m && "date" === N.value && "date" === s && !h)
          ) {
            const e = r.getNow(),
              n = `${t}-today-btn`,
              a = i && i(e);
            R = u(
              "a",
              {
                class: c(n, a && `${n}-disabled`),
                "aria-disabled": a,
                onClick: () => {
                  a || V(e, "mouse", !0);
                },
              },
              [o.today]
            );
          }
          return u(
            "div",
            {
              tabindex: v,
              class: c(F.value, n.class),
              style: n.style,
              onKeydown: A,
              onBlur: W,
              onMousedown: w,
            },
            [
              y,
              D || P || R
                ? u("div", { class: `${t}-footer` }, [D, P, R])
                : null,
            ]
          );
        }
      );
    },
  }),
  mn = (e) => u(hn, e),
  bn = {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: { adjustX: 1, adjustY: 1 },
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: { adjustX: 1, adjustY: 1 },
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: { adjustX: 0, adjustY: 1 },
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: { adjustX: 0, adjustY: 1 },
    },
  };
function wn(e, t) {
  let { slots: n } = t;
  const {
      prefixCls: a,
      popupStyle: o,
      visible: l,
      dropdownClassName: r,
      dropdownAlign: i,
      transitionName: s,
      getPopupContainer: d,
      range: v,
      popupPlacement: p,
      direction: f,
    } = je(e),
    g = `${a}-dropdown`;
  return u(
    M,
    {
      showAction: [],
      hideAction: [],
      popupPlacement:
        void 0 !== p ? p : "rtl" === f ? "bottomRight" : "bottomLeft",
      builtinPlacements: bn,
      prefixCls: g,
      popupTransitionName: s,
      popupAlign: i,
      popupVisible: l,
      popupClassName: c(r, { [`${g}-range`]: v, [`${g}-rtl`]: "rtl" === f }),
      popupStyle: o,
      getPopupContainer: d,
    },
    { default: n.default, popup: n.popupElement }
  );
}
const Cn = g({
  name: "PresetPanel",
  props: {
    prefixCls: String,
    presets: { type: Array, default: () => [] },
    onClick: Function,
    onHover: Function,
  },
  setup: (e) => () =>
    e.presets.length
      ? u("div", { class: `${e.prefixCls}-presets` }, [
          u("ul", null, [
            e.presets.map((t, n) => {
              let { label: a, value: o } = t;
              return u(
                "li",
                {
                  key: n,
                  onClick: (t) => {
                    t.stopPropagation(), e.onClick(o);
                  },
                  onMouseenter: () => {
                    var t;
                    null === (t = e.onHover) || void 0 === t || t.call(e, o);
                  },
                  onMouseleave: () => {
                    var t;
                    null === (t = e.onHover) || void 0 === t || t.call(e, null);
                  },
                },
                [a]
              );
            }),
          ]),
        ])
      : null,
});
function $n(e) {
  let {
    open: t,
    value: n,
    isClickOutside: a,
    triggerOpen: o,
    forwardKeydown: l,
    onKeydown: r,
    blurToCancel: i,
    onSubmit: u,
    onCancel: s,
    onFocus: d,
    onBlur: c,
  } = e;
  const f = h(!1),
    g = h(!1),
    m = h(!1),
    C = h(!1),
    k = h(!1),
    y = $(() => ({
      onMousedown: () => {
        (f.value = !0), o(!0);
      },
      onKeydown: (e) => {
        if (
          (r(e, () => {
            k.value = !0;
          }),
          !k.value)
        ) {
          switch (e.which) {
            case v.ENTER:
              return (
                t.value ? !1 !== u() && (f.value = !0) : o(!0),
                void e.preventDefault()
              );
            case v.TAB:
              return void (f.value && t.value && !e.shiftKey
                ? ((f.value = !1), e.preventDefault())
                : !f.value &&
                  t.value &&
                  !l(e) &&
                  e.shiftKey &&
                  ((f.value = !0), e.preventDefault()));
            case v.ESC:
              return (f.value = !0), void s();
          }
          t.value || [v.SHIFT].includes(e.which) ? f.value || l(e) : o(!0);
        }
      },
      onFocus: (e) => {
        (f.value = !0), (g.value = !0), d && d(e);
      },
      onBlur: (e) => {
        !m.value && a(document.activeElement)
          ? (i.value
              ? setTimeout(() => {
                  let { activeElement: e } = document;
                  for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
                  a(e) && s();
                }, 0)
              : t.value && (o(!1), C.value && u()),
            (g.value = !1),
            c && c(e))
          : (m.value = !1);
      },
    }));
  b(t, () => {
    C.value = !1;
  }),
    b(n, () => {
      C.value = !0;
    });
  const x = h();
  return (
    P(() => {
      var e;
      x.value =
        ((e = (e) => {
          const n = (function (e) {
            var t;
            const n = e.target;
            return (
              (e.composed &&
                n.shadowRoot &&
                (null === (t = e.composedPath) || void 0 === t
                  ? void 0
                  : t.call(e)[0])) ||
              n
            );
          })(e);
          if (t.value) {
            const e = a(n);
            e
              ? (g.value && !e) || o(!1)
              : ((m.value = !0),
                p(() => {
                  m.value = !1;
                }));
          }
        }),
        !ut &&
          "undefined" != typeof window &&
          window.addEventListener &&
          ((ut = (e) => {
            [...st].forEach((t) => {
              t(e);
            });
          }),
          window.addEventListener("mousedown", ut)),
        st.add(e),
        () => {
          st.delete(e),
            0 === st.size &&
              (window.removeEventListener("mousedown", ut), (ut = null));
        });
    }),
    w(() => {
      x.value && x.value();
    }),
    [y, { focused: g, typing: f }]
  );
}
function kn(e) {
  let { valueTexts: t, onTextChange: n } = e;
  const a = m("");
  function o() {
    a.value = t.value[0];
  }
  return (
    b(
      () => [...t.value],
      function (e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        e.join("||") !== n.join("||") &&
          t.value.every((e) => e !== a.value) &&
          o();
      },
      { immediate: !0 }
    ),
    [
      a,
      function (e) {
        (a.value = e), n(e);
      },
      o,
    ]
  );
}
function yn(e, t) {
  let { formatList: n, generateConfig: a, locale: o } = t;
  const l = we(
    () => {
      if (!e.value) return [[""], ""];
      let t = "";
      const l = [];
      for (let r = 0; r < n.value.length; r += 1) {
        const i = n.value[r],
          u = Dt(e.value, {
            generateConfig: a.value,
            locale: o.value,
            format: i,
          });
        l.push(u), 0 === r && (t = u);
      }
      return [l, t];
    },
    [e, n],
    (e, t) => t[0] !== e[0] || !Y(t[1], e[1])
  );
  return [$(() => l.value[0]), $(() => l.value[1])];
}
function xn(e, t) {
  let { formatList: n, generateConfig: a, locale: o } = t;
  const l = m(null);
  let r;
  function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    p.cancel(r),
      t
        ? (l.value = e)
        : (r = p(() => {
            l.value = e;
          }));
  }
  const [, u] = yn(l, { formatList: n, generateConfig: a, locale: o });
  function s() {
    i(null, arguments.length > 0 && void 0 !== arguments[0] && arguments[0]);
  }
  return (
    b(e, () => {
      s(!0);
    }),
    w(() => {
      p.cancel(r);
    }),
    [
      u,
      function (e) {
        i(e);
      },
      s,
    ]
  );
}
function Sn(e, t) {
  return $(() => {
    if (null == e ? void 0 : e.value) return e.value;
    if (null == t ? void 0 : t.value) {
      R(!1, "`ranges` is deprecated. Please use `presets` instead.");
      return Object.keys(t.value).map((e) => {
        const n = t.value[e];
        return { label: e, value: "function" == typeof n ? n() : n };
      });
    }
    return [];
  });
}
const Dn = g({
  name: "Picker",
  inheritAttrs: !1,
  props: [
    "prefixCls",
    "id",
    "tabindex",
    "dropdownClassName",
    "dropdownAlign",
    "popupStyle",
    "transitionName",
    "generateConfig",
    "locale",
    "inputReadOnly",
    "allowClear",
    "autofocus",
    "showTime",
    "showNow",
    "showHour",
    "showMinute",
    "showSecond",
    "picker",
    "format",
    "use12Hours",
    "value",
    "defaultValue",
    "open",
    "defaultOpen",
    "defaultOpenValue",
    "suffixIcon",
    "presets",
    "clearIcon",
    "disabled",
    "disabledDate",
    "placeholder",
    "getPopupContainer",
    "panelRender",
    "inputRender",
    "onChange",
    "onOpenChange",
    "onPanelChange",
    "onFocus",
    "onBlur",
    "onMousedown",
    "onMouseup",
    "onMouseenter",
    "onMouseleave",
    "onContextmenu",
    "onClick",
    "onKeydown",
    "onSelect",
    "direction",
    "autocomplete",
    "showToday",
    "renderExtraFooter",
    "dateRender",
    "minuteStep",
    "hourStep",
    "secondStep",
    "hideDisabledOptions",
  ],
  setup(e, t) {
    let { attrs: n, expose: a } = t;
    const o = m(null),
      r = Sn($(() => e.presets)),
      i = $(() => {
        var t;
        return null !== (t = e.picker) && void 0 !== t ? t : "date";
      }),
      s = $(() => ("date" === i.value && !!e.showTime) || "time" === i.value),
      v = $(() => It(rt(e.format, i.value, e.showTime, e.use12Hours))),
      p = m(null),
      f = m(null),
      g = m(null),
      [h, w] = S(null, { value: D(e, "value"), defaultValue: e.defaultValue }),
      C = m(h.value),
      k = (e) => {
        C.value = e;
      },
      y = m(null),
      [x, M] = S(!1, {
        value: D(e, "open"),
        defaultValue: e.defaultOpen,
        postState: (t) => !e.disabled && t,
        onChange: (t) => {
          e.onOpenChange && e.onOpenChange(t),
            !t && y.value && y.value.onClose && y.value.onClose();
        },
      }),
      [P, Y] = yn(C, {
        formatList: v,
        generateConfig: D(e, "generateConfig"),
        locale: D(e, "locale"),
      }),
      [R, O, I] = kn({
        valueTexts: P,
        onTextChange: (t) => {
          const n = Mt(t, {
            locale: e.locale,
            formatList: v.value,
            generateConfig: e.generateConfig,
          });
          !n || (e.disabledDate && e.disabledDate(n)) || k(n);
        },
      }),
      N = (t) => {
        const { onChange: n, generateConfig: a, locale: o } = e;
        k(t),
          w(t),
          n &&
            !yt(a, h.value, t) &&
            n(
              t,
              t
                ? Dt(t, { generateConfig: a, locale: o, format: v.value[0] })
                : ""
            );
      },
      H = (t) => {
        (e.disabled && t) || M(t);
      },
      T = function () {
        e.onMouseup && e.onMouseup(...arguments),
          o.value && (o.value.focus(), H(!0));
      },
      [E, { focused: V, typing: A }] = $n({
        blurToCancel: s,
        open: x,
        value: R,
        triggerOpen: H,
        forwardKeydown: (e) =>
          !!(x.value && y.value && y.value.onKeydown) && y.value.onKeydown(e),
        isClickOutside: (e) => !ct([p.value, f.value, g.value], e),
        onSubmit: () =>
          !(
            !C.value ||
            (e.disabledDate && e.disabledDate(C.value)) ||
            (N(C.value), H(!1), I(), 0)
          ),
        onCancel: () => {
          H(!1), k(h.value), I();
        },
        onKeydown: (t, n) => {
          var a;
          null === (a = e.onKeydown) || void 0 === a || a.call(e, t, n);
        },
        onFocus: (t) => {
          var n;
          null === (n = e.onFocus) || void 0 === n || n.call(e, t);
        },
        onBlur: (t) => {
          var n;
          null === (n = e.onBlur) || void 0 === n || n.call(e, t);
        },
      });
    b([x, P], () => {
      x.value ||
        (k(h.value),
        P.value.length && "" !== P.value[0]
          ? Y.value !== R.value && I()
          : O(""));
    }),
      b(i, () => {
        x.value || I();
      }),
      b(h, () => {
        k(h.value);
      });
    const [W, B, F] = xn(R, {
      formatList: v,
      generateConfig: D(e, "generateConfig"),
      locale: D(e, "locale"),
    });
    return (
      Ke({
        operationRef: y,
        hideHeader: $(() => "time" === i.value),
        onSelect: (e, t) => {
          ("submit" === t || ("key" !== t && !s.value)) && (N(e), H(!1));
        },
        open: x,
        defaultOpenValue: D(e, "defaultOpenValue"),
        onDateMouseenter: B,
        onDateMouseleave: F,
      }),
      a({
        focus: () => {
          o.value && o.value.focus();
        },
        blur: () => {
          o.value && o.value.blur();
        },
      }),
      () => {
        const {
            prefixCls: t = "rc-picker",
            id: a,
            tabindex: i,
            dropdownClassName: s,
            dropdownAlign: m,
            popupStyle: b,
            transitionName: w,
            generateConfig: $,
            locale: y,
            inputReadOnly: S,
            allowClear: D,
            autofocus: M,
            picker: P = "date",
            defaultOpenValue: Y,
            suffixIcon: I,
            clearIcon: B,
            disabled: L,
            placeholder: j,
            getPopupContainer: z,
            panelRender: K,
            onMousedown: U,
            onMouseenter: q,
            onMouseleave: G,
            onContextmenu: _,
            onClick: Q,
            onSelect: X,
            direction: Z,
            autocomplete: J = "off",
          } = e,
          ee = l(l(l({}, e), n), {
            class: c({ [`${t}-panel-focused`]: !A.value }),
            style: void 0,
            pickerValue: void 0,
            onPickerValueChange: void 0,
            onChange: null,
          });
        let te = u("div", { class: `${t}-panel-layout` }, [
          u(
            Cn,
            {
              prefixCls: t,
              presets: r.value,
              onClick: (e) => {
                N(e), H(!1);
              },
            },
            null
          ),
          u(
            mn,
            d(
              d({}, ee),
              {},
              {
                generateConfig: $,
                value: C.value,
                locale: y,
                tabindex: -1,
                onSelect: (e) => {
                  null == X || X(e), k(e);
                },
                direction: Z,
                onPanelChange: (t, n) => {
                  const { onPanelChange: a } = e;
                  F(!0), null == a || a(t, n);
                },
              }
            ),
            null
          ),
        ]);
        K && (te = K(te));
        const ne = u(
          "div",
          {
            class: `${t}-panel-container`,
            ref: p,
            onMousedown: (e) => {
              e.preventDefault();
            },
          },
          [te]
        );
        let ae, oe;
        I && (ae = u("span", { class: `${t}-suffix` }, [I])),
          D &&
            h.value &&
            !L &&
            (oe = u(
              "span",
              {
                onMousedown: (e) => {
                  e.preventDefault(), e.stopPropagation();
                },
                onMouseup: (e) => {
                  e.preventDefault(), e.stopPropagation(), N(null), H(!1);
                },
                class: `${t}-clear`,
                role: "button",
              },
              [B || u("span", { class: `${t}-clear-btn` }, null)]
            ));
        const le = l(
            l(
              l(
                l(
                  {
                    id: a,
                    tabindex: i,
                    disabled: L,
                    readonly: S || "function" == typeof v.value[0] || !A.value,
                    value: W.value || R.value,
                    onInput: (e) => {
                      O(e.target.value);
                    },
                    autofocus: M,
                    placeholder: j,
                    ref: o,
                    title: R.value,
                  },
                  E.value
                ),
                { size: it(P, v.value[0], $) }
              ),
              Nt(e)
            ),
            { autocomplete: J }
          ),
          re = e.inputRender ? e.inputRender(le) : u("input", le, null),
          ie = "rtl" === Z ? "bottomRight" : "bottomLeft";
        return u(
          "div",
          {
            ref: g,
            class: c(t, n.class, {
              [`${t}-disabled`]: L,
              [`${t}-focused`]: V.value,
              [`${t}-rtl`]: "rtl" === Z,
            }),
            style: n.style,
            onMousedown: U,
            onMouseup: T,
            onMouseenter: q,
            onMouseleave: G,
            onContextmenu: _,
            onClick: Q,
          },
          [
            u(
              "div",
              {
                class: c(`${t}-input`, {
                  [`${t}-input-placeholder`]: !!W.value,
                }),
                ref: f,
              },
              [re, ae, oe]
            ),
            u(
              wn,
              {
                visible: x.value,
                popupStyle: b,
                prefixCls: t,
                dropdownClassName: s,
                dropdownAlign: m,
                getPopupContainer: z,
                transitionName: w,
                popupPlacement: ie,
                direction: Z,
              },
              {
                default: () => [
                  u(
                    "div",
                    {
                      style: {
                        pointerEvents: "none",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                      },
                    },
                    null
                  ),
                ],
                popupElement: () => ne,
              }
            ),
          ]
        );
      }
    );
  },
});
function Mn(e, t, n, a) {
  const o = St(e, n, a, 1);
  function l(n) {
    return n(e, t) ? "same" : n(o, t) ? "closing" : "far";
  }
  switch (n) {
    case "year":
      return l((e, t) =>
        (function (e, t, n) {
          const a = ht(t, n);
          return "boolean" == typeof a
            ? a
            : Math.floor(e.getYear(t) / 10) === Math.floor(e.getYear(n) / 10);
        })(a, e, t)
      );
    case "quarter":
    case "month":
      return l((e, t) => mt(a, e, t));
    default:
      return l((e, t) => Ct(a, e, t));
  }
}
function Pn(e) {
  let { values: t, picker: n, defaultDates: a, generateConfig: o } = e;
  const l = m([Ht(a, 0), Ht(a, 1)]),
    r = m(null),
    i = $(() => Ht(t.value, 0)),
    u = $(() => Ht(t.value, 1)),
    s = (e) =>
      l.value[e]
        ? l.value[e]
        : Ht(r.value, e) ||
          (function (e, t, n, a) {
            const o = Ht(e, 0),
              l = Ht(e, 1);
            if (0 === t) return o;
            if (o && l)
              switch (Mn(o, l, n, a)) {
                case "same":
                case "closing":
                  return o;
                default:
                  return St(l, n, a, -1);
              }
            return o;
          })(t.value, e, n.value, o.value) ||
          i.value ||
          u.value ||
          o.value.getNow(),
    d = m(null),
    c = m(null);
  return (
    y(() => {
      (d.value = s(0)), (c.value = s(1));
    }),
    [
      d,
      c,
      function (e, n) {
        if (e) {
          let a = Tt(r.value, e, n);
          l.value = Tt(l.value, null, n) || [null, null];
          const o = (n + 1) % 2;
          Ht(t.value, o) || (a = Tt(a, e, o)), (r.value = a);
        } else (i.value || u.value) && (r.value = null);
      },
    ]
  );
}
function Yn(e) {
  var t;
  const n = "function" == typeof (a = e) ? a() : N(a);
  var a;
  return null !== (t = null == n ? void 0 : n.$el) && void 0 !== t ? t : n;
}
function Rn(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  const n = h(),
    a = () => (n.value = Boolean(e()));
  return (
    a(),
    (function (e) {
      let t =
        !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      H() ? P(e) : t ? e() : C(e);
    })(a, t),
    n
  );
}
var On;
const In = "undefined" != typeof window;
In &&
  (null ===
    (On = null === window || void 0 === window ? void 0 : window.navigator) ||
  void 0 === On
    ? void 0
    : On.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
const Nn = In ? window : void 0;
var Hn = function (e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (n[a] = e[a]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      t.indexOf(a[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
        (n[a[o]] = e[a[o]]);
  }
  return n;
};
function Tn(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  const { window: a = Nn } = n,
    o = Hn(n, ["window"]);
  let l;
  const r = Rn(() => a && "ResizeObserver" in a),
    i = () => {
      l && (l.disconnect(), (l = void 0));
    },
    u = b(
      () => Yn(e),
      (e) => {
        i(),
          r.value && a && e && ((l = new ResizeObserver(t)), l.observe(e, o));
      },
      { immediate: !0, flush: "post" }
    ),
    s = () => {
      i(), u();
    };
  var d;
  return (d = s), O() && I(d), { isSupported: r, stop: s };
}
function En(e) {
  let t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : { width: 0, height: 0 },
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  const { box: a = "content-box" } = n,
    o = h(t.width),
    l = h(t.height);
  return (
    Tn(
      e,
      (e) => {
        let [t] = e;
        const n =
          "border-box" === a
            ? t.borderBoxSize
            : "content-box" === a
            ? t.contentBoxSize
            : t.devicePixelContentBoxSize;
        n
          ? ((o.value = n.reduce((e, t) => {
              let { inlineSize: n } = t;
              return e + n;
            }, 0)),
            (l.value = n.reduce((e, t) => {
              let { blockSize: n } = t;
              return e + n;
            }, 0)))
          : ((o.value = t.contentRect.width), (l.value = t.contentRect.height));
      },
      n
    ),
    b(
      () => Yn(e),
      (e) => {
        (o.value = e ? t.width : 0), (l.value = e ? t.height : 0);
      }
    ),
    { width: o, height: l }
  );
}
function Vn(e, t) {
  return e && e[0] && e[1] && t.isAfter(e[0], e[1]) ? [e[1], e[0]] : e;
}
function An(e, t, n, a) {
  return !!e || !(!a || !a[t]) || !!n[(t + 1) % 2];
}
const Wn = g({
    name: "RangerPicker",
    inheritAttrs: !1,
    props: [
      "prefixCls",
      "id",
      "popupStyle",
      "dropdownClassName",
      "transitionName",
      "dropdownAlign",
      "getPopupContainer",
      "generateConfig",
      "locale",
      "placeholder",
      "autofocus",
      "disabled",
      "format",
      "picker",
      "showTime",
      "showNow",
      "showHour",
      "showMinute",
      "showSecond",
      "use12Hours",
      "separator",
      "value",
      "defaultValue",
      "defaultPickerValue",
      "open",
      "defaultOpen",
      "disabledDate",
      "disabledTime",
      "dateRender",
      "panelRender",
      "ranges",
      "allowEmpty",
      "allowClear",
      "suffixIcon",
      "clearIcon",
      "pickerRef",
      "inputReadOnly",
      "mode",
      "renderExtraFooter",
      "onChange",
      "onOpenChange",
      "onPanelChange",
      "onCalendarChange",
      "onFocus",
      "onBlur",
      "onMousedown",
      "onMouseup",
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onOk",
      "onKeydown",
      "components",
      "order",
      "direction",
      "activePickerIndex",
      "autocomplete",
      "minuteStep",
      "hourStep",
      "secondStep",
      "hideDisabledOptions",
      "disabledMinutes",
      "presets",
      "prevIcon",
      "nextIcon",
      "superPrevIcon",
      "superNextIcon",
    ],
    setup(e, t) {
      let { attrs: n, expose: a } = t;
      const o = $(
          () => ("date" === e.picker && !!e.showTime) || "time" === e.picker
        ),
        r = Sn(
          $(() => e.presets),
          $(() => e.ranges)
        ),
        i = m({}),
        s = m(null),
        v = m(null),
        p = m(null),
        f = m(null),
        g = m(null),
        h = m(null),
        w = m(null),
        C = m(null),
        k = $(() => It(rt(e.format, e.picker, e.showTime, e.use12Hours))),
        [y, x] = S(0, { value: D(e, "activePickerIndex") }),
        M = m(null),
        P = $(() => {
          const { disabled: t } = e;
          return Array.isArray(t) ? t : [t || !1, t || !1];
        }),
        [Y, R] = S(null, {
          value: D(e, "value"),
          defaultValue: e.defaultValue,
          postState: (t) =>
            "time" !== e.picker || e.order ? Vn(t, e.generateConfig) : t,
        }),
        [O, I, N] = Pn({
          values: Y,
          picker: D(e, "picker"),
          defaultDates: e.defaultPickerValue,
          generateConfig: D(e, "generateConfig"),
        }),
        [H, V] = S(Y.value, {
          postState: (t) => {
            let n = t;
            if (P.value[0] && P.value[1]) return n;
            for (let a = 0; a < 2; a += 1)
              !P.value[a] ||
                Ht(n, a) ||
                Ht(e.allowEmpty, a) ||
                (n = Tt(n, e.generateConfig.getNow(), a));
            return n;
          },
        }),
        [A, W] = S([e.picker, e.picker], { value: D(e, "mode") });
      b(
        () => e.picker,
        () => {
          W([e.picker, e.picker]);
        }
      );
      const [B, F] = (function (e, t) {
          let {
            picker: n,
            locale: a,
            selectedValue: o,
            disabledDate: l,
            disabled: r,
            generateConfig: i,
          } = e;
          const u = $(() => Ht(o.value, 0)),
            s = $(() => Ht(o.value, 1));
          function d(e) {
            return i.value.locale.getWeekFirstDate(a.value.locale, e);
          }
          function c(e) {
            return 100 * i.value.getYear(e) + i.value.getMonth(e);
          }
          function v(e) {
            return 10 * i.value.getYear(e) + bt(i.value, e);
          }
          return [
            (e) => {
              var a;
              if (
                l &&
                (null === (a = null == l ? void 0 : l.value) || void 0 === a
                  ? void 0
                  : a.call(l, e))
              )
                return !0;
              if (r[1] && s)
                return !$t(i.value, e, s.value) && i.value.isAfter(e, s.value);
              if (t.value[1] && s.value)
                switch (n.value) {
                  case "quarter":
                    return v(e) > v(s.value);
                  case "month":
                    return c(e) > c(s.value);
                  case "week":
                    return d(e) > d(s.value);
                  default:
                    return (
                      !$t(i.value, e, s.value) && i.value.isAfter(e, s.value)
                    );
                }
              return !1;
            },
            (e) => {
              var a;
              if (
                null === (a = l.value) || void 0 === a ? void 0 : a.call(l, e)
              )
                return !0;
              if (r[0] && u)
                return !$t(i.value, e, s.value) && i.value.isAfter(u.value, e);
              if (t.value[0] && u.value)
                switch (n.value) {
                  case "quarter":
                    return v(e) < v(u.value);
                  case "month":
                    return c(e) < c(u.value);
                  case "week":
                    return d(e) < d(u.value);
                  default:
                    return (
                      !$t(i.value, e, u.value) && i.value.isAfter(u.value, e)
                    );
                }
              return !1;
            },
          ];
        })(
          {
            picker: D(e, "picker"),
            selectedValue: H,
            locale: D(e, "locale"),
            disabled: P,
            disabledDate: D(e, "disabledDate"),
            generateConfig: D(e, "generateConfig"),
          },
          i
        ),
        [L, j] = S(!1, {
          value: D(e, "open"),
          defaultValue: e.defaultOpen,
          postState: (e) => !P.value[y.value] && e,
          onChange: (t) => {
            var n;
            null === (n = e.onOpenChange) || void 0 === n || n.call(e, t),
              !t && M.value && M.value.onClose && M.value.onClose();
          },
        }),
        z = $(() => L.value && 0 === y.value),
        K = $(() => L.value && 1 === y.value),
        U = m(0),
        q = m(0),
        G = m(0),
        { width: _ } = En(s);
      b([L, _], () => {
        !L.value && s.value && (G.value = _.value);
      });
      const { width: Q } = En(v),
        { width: X } = En(C),
        { width: Z } = En(p),
        { width: J } = En(g);
      b(
        [y, L, Q, X, Z, J, () => e.direction],
        () => {
          (q.value = 0),
            y.value
              ? p.value &&
                g.value &&
                ((q.value = Z.value + J.value),
                Q.value &&
                  X.value &&
                  q.value >
                    Q.value -
                      X.value -
                      ("rtl" === e.direction || C.value.offsetLeft > q.value
                        ? 0
                        : C.value.offsetLeft) &&
                  (U.value = q.value))
              : 0 === y.value && (U.value = 0);
        },
        { immediate: !0 }
      );
      const ee = m();
      function te(e, t) {
        if (e)
          clearTimeout(ee.value),
            (i.value[t] = !0),
            x(t),
            j(e),
            L.value || N(null, t);
        else if (y.value === t) {
          j(e);
          const t = i.value;
          ee.value = setTimeout(() => {
            t === i.value && (i.value = {});
          });
        }
      }
      function ne(e) {
        te(!0, e),
          setTimeout(() => {
            const t = [h, w][e];
            t.value && t.value.focus();
          }, 0);
      }
      function ae(t, n) {
        let a = t,
          o = Ht(a, 0),
          l = Ht(a, 1);
        const {
          generateConfig: r,
          locale: u,
          picker: s,
          order: d,
          onCalendarChange: c,
          allowEmpty: v,
          onChange: p,
          showTime: f,
        } = e;
        o &&
          l &&
          r.isAfter(o, l) &&
          (("week" === s && !kt(r, u.locale, o, l)) ||
          ("quarter" === s && !wt(r, o, l)) ||
          ("week" !== s &&
            "quarter" !== s &&
            "time" !== s &&
            !(f ? yt(r, o, l) : $t(r, o, l)))
            ? (0 === n
                ? ((a = [o, null]), (l = null))
                : ((o = null), (a = [null, l])),
              (i.value = { [n]: !0 }))
            : ("time" === s && !1 === d) || (a = Vn(a, r))),
          V(a);
        const g =
            a && a[0]
              ? Dt(a[0], { generateConfig: r, locale: u, format: k.value[0] })
              : "",
          h =
            a && a[1]
              ? Dt(a[1], { generateConfig: r, locale: u, format: k.value[0] })
              : "";
        c && c(a, [g, h], { range: 0 === n ? "start" : "end" });
        const m = An(o, 0, P.value, v),
          b = An(l, 1, P.value, v);
        (null === a || (m && b)) &&
          (R(a),
          !p ||
            (yt(r, Ht(Y.value, 0), o) && yt(r, Ht(Y.value, 1), l)) ||
            p(a, [g, h]));
        let w = null;
        0 !== n || P.value[1] ? 1 !== n || P.value[0] || (w = 0) : (w = 1),
          null === w || w === y.value || (i.value[w] && Ht(a, w)) || !Ht(a, n)
            ? te(!1, n)
            : ne(w);
      }
      const oe = (e) =>
          !!(L && M.value && M.value.onKeydown) && M.value.onKeydown(e),
        le = {
          formatList: k,
          generateConfig: D(e, "generateConfig"),
          locale: D(e, "locale"),
        },
        [re, ie] = yn(
          $(() => Ht(H.value, 0)),
          le
        ),
        [ue, se] = yn(
          $(() => Ht(H.value, 1)),
          le
        ),
        de = (t, n) => {
          const a = Mt(t, {
            locale: e.locale,
            formatList: k.value,
            generateConfig: e.generateConfig,
          });
          a && !(0 === n ? B : F)(a) && (V(Tt(H.value, a, n)), N(a, n));
        },
        [ce, ve, pe] = kn({ valueTexts: re, onTextChange: (e) => de(e, 0) }),
        [fe, ge, he] = kn({ valueTexts: ue, onTextChange: (e) => de(e, 1) }),
        [me, be] = T(null),
        [we, Ce] = T(null),
        [$e, ke, ye] = xn(ce, le),
        [xe, Se, De] = xn(fe, le),
        Me = (t, n) => ({
          forwardKeydown: oe,
          onBlur: (t) => {
            var n;
            null === (n = e.onBlur) || void 0 === n || n.call(e, t);
          },
          isClickOutside: (e) => !ct([v.value, p.value, f.value, s.value], e),
          onFocus: (n) => {
            var a;
            x(t), null === (a = e.onFocus) || void 0 === a || a.call(e, n);
          },
          triggerOpen: (e) => {
            te(e, t);
          },
          onSubmit: () => {
            if (!H.value || (e.disabledDate && e.disabledDate(H.value[t])))
              return !1;
            ae(H.value, t), n();
          },
          onCancel: () => {
            te(!1, t), V(Y.value), n();
          },
        }),
        [Pe, { focused: Ye, typing: Re }] = $n(
          l(l({}, Me(0, pe)), {
            blurToCancel: o,
            open: z,
            value: ce,
            onKeydown: (t, n) => {
              var a;
              null === (a = e.onKeydown) || void 0 === a || a.call(e, t, n);
            },
          })
        ),
        [Oe, { focused: Ie, typing: Ne }] = $n(
          l(l({}, Me(1, he)), {
            blurToCancel: o,
            open: K,
            value: fe,
            onKeydown: (t, n) => {
              var a;
              null === (a = e.onKeydown) || void 0 === a || a.call(e, t, n);
            },
          })
        ),
        He = (t) => {
          var n;
          null === (n = e.onClick) || void 0 === n || n.call(e, t),
            L.value ||
              h.value.contains(t.target) ||
              w.value.contains(t.target) ||
              (P.value[0] ? P.value[1] || ne(1) : ne(0));
        },
        Te = (t) => {
          var n;
          null === (n = e.onMousedown) || void 0 === n || n.call(e, t),
            !L.value ||
              (!Ye.value && !Ie.value) ||
              h.value.contains(t.target) ||
              w.value.contains(t.target) ||
              t.preventDefault();
        },
        Ee = $(() => {
          var t;
          return (null === (t = Y.value) || void 0 === t ? void 0 : t[0])
            ? Dt(Y.value[0], {
                locale: e.locale,
                format: "YYYYMMDDHHmmss",
                generateConfig: e.generateConfig,
              })
            : "";
        }),
        Ve = $(() => {
          var t;
          return (null === (t = Y.value) || void 0 === t ? void 0 : t[1])
            ? Dt(Y.value[1], {
                locale: e.locale,
                format: "YYYYMMDDHHmmss",
                generateConfig: e.generateConfig,
              })
            : "";
        });
      b([L, re, ue], () => {
        L.value ||
          (V(Y.value),
          re.value.length && "" !== re.value[0]
            ? ie.value !== ce.value && pe()
            : ve(""),
          ue.value.length && "" !== ue.value[0]
            ? se.value !== fe.value && he()
            : ge(""));
      }),
        b([Ee, Ve], () => {
          V(Y.value);
        }),
        a({
          focus: () => {
            h.value && h.value.focus();
          },
          blur: () => {
            h.value && h.value.blur(), w.value && w.value.blur();
          },
        });
      const Ae = $(() =>
        L.value &&
        we.value &&
        we.value[0] &&
        we.value[1] &&
        e.generateConfig.isAfter(we.value[1], we.value[0])
          ? we.value
          : null
      );
      function We() {
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          generateConfig: a,
          showTime: o,
          dateRender: r,
          direction: i,
          disabledTime: s,
          prefixCls: v,
          locale: p,
        } = e;
        let f = o;
        if (o && "object" == typeof o && o.defaultValue) {
          const e = o.defaultValue;
          f = l(l({}, o), { defaultValue: Ht(e, y.value) || void 0 });
        }
        let g = null;
        return (
          r &&
            (g = (e) => {
              let { current: t, today: n } = e;
              return r({
                current: t,
                today: n,
                info: { range: y.value ? "end" : "start" },
              });
            }),
          u(
            jt,
            {
              value: {
                inRange: !0,
                panelPosition: t,
                rangedValue: me.value || H.value,
                hoverRangedValue: Ae.value,
              },
            },
            {
              default: () => [
                u(
                  mn,
                  d(
                    d(d({}, e), n),
                    {},
                    {
                      dateRender: g,
                      showTime: f,
                      mode: A.value[y.value],
                      generateConfig: a,
                      style: void 0,
                      direction: i,
                      disabledDate: 0 === y.value ? B : F,
                      disabledTime: (e) =>
                        !!s && s(e, 0 === y.value ? "start" : "end"),
                      class: c({
                        [`${v}-panel-focused`]:
                          0 === y.value ? !Re.value : !Ne.value,
                      }),
                      value: Ht(H.value, y.value),
                      locale: p,
                      tabIndex: -1,
                      onPanelChange: (n, o) => {
                        0 === y.value && ye(!0),
                          1 === y.value && De(!0),
                          ((t, n) => {
                            var a;
                            W(t),
                              null === (a = e.onPanelChange) ||
                                void 0 === a ||
                                a.call(e, n, t);
                          })(Tt(A.value, o, y.value), Tt(H.value, n, y.value));
                        let l = n;
                        "right" === t &&
                          A.value[y.value] === o &&
                          (l = St(l, o, a, -1)),
                          N(l, y.value);
                      },
                      onOk: null,
                      onSelect: void 0,
                      onChange: void 0,
                      defaultValue:
                        0 === y.value ? Ht(H.value, 1) : Ht(H.value, 0),
                    }
                  ),
                  null
                ),
              ],
            }
          )
        );
      }
      return (
        Ke({
          operationRef: M,
          hideHeader: $(() => "time" === e.picker),
          onDateMouseenter: (e) => {
            Ce(Tt(H.value, e, y.value)), 0 === y.value ? ke(e) : Se(e);
          },
          onDateMouseleave: () => {
            Ce(Tt(H.value, null, y.value)), 0 === y.value ? ye() : De();
          },
          hideRanges: $(() => !0),
          onSelect: (e, t) => {
            const n = Tt(H.value, e, y.value);
            "submit" === t || ("key" !== t && !o.value)
              ? (ae(n, y.value), 0 === y.value ? ye() : De())
              : V(n);
          },
          open: L,
        }),
        () => {
          const {
              prefixCls: t = "rc-picker",
              id: a,
              popupStyle: i,
              dropdownClassName: m,
              transitionName: b,
              dropdownAlign: $,
              getPopupContainer: x,
              generateConfig: S,
              locale: D,
              placeholder: M,
              autofocus: R,
              picker: T = "date",
              showTime: V,
              separator: W = "~",
              disabledDate: B,
              panelRender: F,
              allowClear: j,
              suffixIcon: z,
              clearIcon: K,
              inputReadOnly: _,
              renderExtraFooter: Q,
              onMouseenter: X,
              onMouseleave: Z,
              onMouseup: J,
              onOk: ee,
              components: ne,
              direction: oe,
              autocomplete: le = "off",
            } = e,
            re =
              "rtl" === oe
                ? { right: `${q.value}px` }
                : { left: `${q.value}px` },
            ie = u(
              "div",
              {
                class: c(`${t}-range-wrapper`, `${t}-${T}-range-wrapper`),
                style: { minWidth: `${G.value}px` },
              },
              [
                u(
                  "div",
                  { ref: C, class: `${t}-range-arrow`, style: re },
                  null
                ),
                (function () {
                  let e;
                  const n = fn(t, A.value[y.value], Q),
                    a = gn({
                      prefixCls: t,
                      components: ne,
                      needConfirmButton: o.value,
                      okDisabled:
                        !Ht(H.value, y.value) || (B && B(H.value[y.value])),
                      locale: D,
                      onOk: () => {
                        Ht(H.value, y.value) &&
                          (ae(H.value, y.value), ee && ee(H.value));
                      },
                    });
                  if ("time" === T || V) e = We();
                  else {
                    const t = 0 === y.value ? O.value : I.value,
                      n = St(t, T, S),
                      a = A.value[y.value] === T,
                      o = We(!!a && "left", {
                        pickerValue: t,
                        onPickerValueChange: (e) => {
                          N(e, y.value);
                        },
                      }),
                      l = We("right", {
                        pickerValue: n,
                        onPickerValueChange: (e) => {
                          N(St(e, T, S, -1), y.value);
                        },
                      });
                    e = u(E, null, "rtl" === oe ? [l, a && o] : [o, a && l]);
                  }
                  let l = u("div", { class: `${t}-panel-layout` }, [
                    u(
                      Cn,
                      {
                        prefixCls: t,
                        presets: r.value,
                        onClick: (e) => {
                          ae(e, null), te(!1, y.value);
                        },
                        onHover: (e) => {
                          be(e);
                        },
                      },
                      null
                    ),
                    u("div", null, [
                      u("div", { class: `${t}-panels` }, [e]),
                      (n || a) && u("div", { class: `${t}-footer` }, [n, a]),
                    ]),
                  ]);
                  return (
                    F && (l = F(l)),
                    u(
                      "div",
                      {
                        class: `${t}-panel-container`,
                        style: { marginLeft: `${U.value}px` },
                        ref: v,
                        onMousedown: (e) => {
                          e.preventDefault();
                        },
                      },
                      [l]
                    )
                  );
                })(),
              ]
            );
          let ue, se;
          z && (ue = u("span", { class: `${t}-suffix` }, [z])),
            j &&
              ((Ht(Y.value, 0) && !P.value[0]) ||
                (Ht(Y.value, 1) && !P.value[1])) &&
              (se = u(
                "span",
                {
                  onMousedown: (e) => {
                    e.preventDefault(), e.stopPropagation();
                  },
                  onMouseup: (e) => {
                    e.preventDefault(), e.stopPropagation();
                    let t = Y.value;
                    P.value[0] || (t = Tt(t, null, 0)),
                      P.value[1] || (t = Tt(t, null, 1)),
                      ae(t, null),
                      te(!1, y.value);
                  },
                  class: `${t}-clear`,
                },
                [K || u("span", { class: `${t}-clear-btn` }, null)]
              ));
          const de = { size: it(T, k.value[0], S) };
          let pe = 0,
            he = 0;
          p.value &&
            f.value &&
            g.value &&
            (0 === y.value
              ? (he = p.value.offsetWidth)
              : ((pe = q.value), (he = f.value.offsetWidth)));
          const me = "rtl" === oe ? { right: `${pe}px` } : { left: `${pe}px` };
          return u(
            "div",
            d(
              {
                ref: s,
                class: c(t, `${t}-range`, n.class, {
                  [`${t}-disabled`]: P.value[0] && P.value[1],
                  [`${t}-focused`]: 0 === y.value ? Ye.value : Ie.value,
                  [`${t}-rtl`]: "rtl" === oe,
                }),
                style: n.style,
                onClick: He,
                onMouseenter: X,
                onMouseleave: Z,
                onMousedown: Te,
                onMouseup: J,
              },
              Nt(e)
            ),
            [
              u(
                "div",
                {
                  class: c(`${t}-input`, {
                    [`${t}-input-active`]: 0 === y.value,
                    [`${t}-input-placeholder`]: !!$e.value,
                  }),
                  ref: p,
                },
                [
                  u(
                    "input",
                    d(
                      d(
                        d(
                          {
                            id: a,
                            disabled: P.value[0],
                            readonly:
                              _ || "function" == typeof k.value[0] || !Re.value,
                            value: $e.value || ce.value,
                            onInput: (e) => {
                              ve(e.target.value);
                            },
                            autofocus: R,
                            placeholder: Ht(M, 0) || "",
                            ref: h,
                          },
                          Pe.value
                        ),
                        de
                      ),
                      {},
                      { autocomplete: le }
                    ),
                    null
                  ),
                ]
              ),
              u("div", { class: `${t}-range-separator`, ref: g }, [W]),
              u(
                "div",
                {
                  class: c(`${t}-input`, {
                    [`${t}-input-active`]: 1 === y.value,
                    [`${t}-input-placeholder`]: !!xe.value,
                  }),
                  ref: f,
                },
                [
                  u(
                    "input",
                    d(
                      d(
                        d(
                          {
                            disabled: P.value[1],
                            readonly:
                              _ || "function" == typeof k.value[0] || !Ne.value,
                            value: xe.value || fe.value,
                            onInput: (e) => {
                              ge(e.target.value);
                            },
                            placeholder: Ht(M, 1) || "",
                            ref: w,
                          },
                          Oe.value
                        ),
                        de
                      ),
                      {},
                      { autocomplete: le }
                    ),
                    null
                  ),
                ]
              ),
              u(
                "div",
                {
                  class: `${t}-active-bar`,
                  style: l(l({}, me), {
                    width: `${he}px`,
                    position: "absolute",
                  }),
                },
                null
              ),
              ue,
              se,
              u(
                wn,
                {
                  visible: L.value,
                  popupStyle: i,
                  prefixCls: t,
                  dropdownClassName: m,
                  dropdownAlign: $,
                  getPopupContainer: x,
                  transitionName: b,
                  range: !0,
                  direction: oe,
                },
                {
                  default: () => [
                    u(
                      "div",
                      {
                        style: {
                          pointerEvents: "none",
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          left: 0,
                          right: 0,
                        },
                      },
                      null
                    ),
                  ],
                  popupElement: () => ie,
                }
              ),
            ]
          );
        }
      );
    },
  }),
  Bn = (e, t, n, a) => {
    const { lineHeight: o } = e,
      l = Math.floor(n * o) + 2,
      r = Math.max((t - l) / 2, 0);
    return { padding: `${r}px ${a}px ${Math.max(t - l - r, 0)}px` };
  },
  Fn = (e) => {
    const {
      componentCls: t,
      pickerCellCls: n,
      pickerCellInnerCls: a,
      pickerPanelCellHeight: o,
      motionDurationSlow: l,
      borderRadiusSM: r,
      motionDurationMid: i,
      controlItemBgHover: u,
      lineWidth: s,
      lineType: d,
      colorPrimary: c,
      controlItemBgActive: v,
      colorTextLightSolid: p,
      controlHeightSM: f,
      pickerDateHoverRangeBorderColor: g,
      pickerCellBorderGap: h,
      pickerBasicCellHoverWithRangeColor: m,
      pickerPanelCellWidth: b,
      colorTextDisabled: w,
      colorBgContainerDisabled: C,
    } = e;
    return {
      "&::before": {
        position: "absolute",
        top: "50%",
        insetInlineStart: 0,
        insetInlineEnd: 0,
        zIndex: 1,
        height: o,
        transform: "translateY(-50%)",
        transition: `all ${l}`,
        content: '""',
      },
      [a]: {
        position: "relative",
        zIndex: 2,
        display: "inline-block",
        minWidth: o,
        height: o,
        lineHeight: `${o}px`,
        borderRadius: r,
        transition: `background ${i}, border ${i}`,
      },
      [`&:hover:not(${n}-in-view),\n    &:hover:not(${n}-selected):not(${n}-range-start):not(${n}-range-end):not(${n}-range-hover-start):not(${n}-range-hover-end)`]:
        { [a]: { background: u } },
      [`&-in-view${n}-today ${a}`]: {
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 1,
          border: `${s}px ${d} ${c}`,
          borderRadius: r,
          content: '""',
        },
      },
      [`&-in-view${n}-in-range`]: {
        position: "relative",
        "&::before": { background: v },
      },
      [`&-in-view${n}-selected ${a},\n      &-in-view${n}-range-start ${a},\n      &-in-view${n}-range-end ${a}`]:
        { color: p, background: c },
      [`&-in-view${n}-range-start:not(${n}-range-start-single),\n      &-in-view${n}-range-end:not(${n}-range-end-single)`]:
        { "&::before": { background: v } },
      [`&-in-view${n}-range-start::before`]: { insetInlineStart: "50%" },
      [`&-in-view${n}-range-end::before`]: { insetInlineEnd: "50%" },
      [`&-in-view${n}-range-hover-start:not(${n}-in-range):not(${n}-range-start):not(${n}-range-end),\n      &-in-view${n}-range-hover-end:not(${n}-in-range):not(${n}-range-start):not(${n}-range-end),\n      &-in-view${n}-range-hover-start${n}-range-start-single,\n      &-in-view${n}-range-hover-start${n}-range-start${n}-range-end${n}-range-end-near-hover,\n      &-in-view${n}-range-hover-end${n}-range-start${n}-range-end${n}-range-start-near-hover,\n      &-in-view${n}-range-hover-end${n}-range-end-single,\n      &-in-view${n}-range-hover:not(${n}-in-range)`]:
        {
          "&::after": {
            position: "absolute",
            top: "50%",
            zIndex: 0,
            height: f,
            borderTop: `${s}px dashed ${g}`,
            borderBottom: `${s}px dashed ${g}`,
            transform: "translateY(-50%)",
            transition: `all ${l}`,
            content: '""',
          },
        },
      "&-range-hover-start::after,\n      &-range-hover-end::after,\n      &-range-hover::after":
        { insetInlineEnd: 0, insetInlineStart: h },
      [`&-in-view${n}-in-range${n}-range-hover::before,\n      &-in-view${n}-range-start${n}-range-hover::before,\n      &-in-view${n}-range-end${n}-range-hover::before,\n      &-in-view${n}-range-start:not(${n}-range-start-single)${n}-range-hover-start::before,\n      &-in-view${n}-range-end:not(${n}-range-end-single)${n}-range-hover-end::before,\n      ${t}-panel\n      > :not(${t}-date-panel)\n      &-in-view${n}-in-range${n}-range-hover-start::before,\n      ${t}-panel\n      > :not(${t}-date-panel)\n      &-in-view${n}-in-range${n}-range-hover-end::before`]:
        { background: m },
      [`&-in-view${n}-range-start:not(${n}-range-start-single):not(${n}-range-end) ${a}`]:
        {
          borderStartStartRadius: r,
          borderEndStartRadius: r,
          borderStartEndRadius: 0,
          borderEndEndRadius: 0,
        },
      [`&-in-view${n}-range-end:not(${n}-range-end-single):not(${n}-range-start) ${a}`]:
        {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0,
          borderStartEndRadius: r,
          borderEndEndRadius: r,
        },
      [`&-range-hover${n}-range-end::after`]: { insetInlineStart: "50%" },
      [`tr > &-in-view${n}-range-hover:first-child::after,\n      tr > &-in-view${n}-range-hover-end:first-child::after,\n      &-in-view${n}-start${n}-range-hover-edge-start${n}-range-hover-edge-start-near-range::after,\n      &-in-view${n}-range-hover-edge-start:not(${n}-range-hover-edge-start-near-range)::after,\n      &-in-view${n}-range-hover-start::after`]:
        {
          insetInlineStart: (b - o) / 2,
          borderInlineStart: `${s}px dashed ${g}`,
          borderStartStartRadius: s,
          borderEndStartRadius: s,
        },
      [`tr > &-in-view${n}-range-hover:last-child::after,\n      tr > &-in-view${n}-range-hover-start:last-child::after,\n      &-in-view${n}-end${n}-range-hover-edge-end${n}-range-hover-edge-end-near-range::after,\n      &-in-view${n}-range-hover-edge-end:not(${n}-range-hover-edge-end-near-range)::after,\n      &-in-view${n}-range-hover-end::after`]:
        {
          insetInlineEnd: (b - o) / 2,
          borderInlineEnd: `${s}px dashed ${g}`,
          borderStartEndRadius: s,
          borderEndEndRadius: s,
        },
      "&-disabled": {
        color: w,
        pointerEvents: "none",
        [a]: { background: "transparent" },
        "&::before": { background: C },
      },
      [`&-disabled${n}-today ${a}::before`]: { borderColor: w },
    };
  },
  Ln = (e) => {
    const {
        componentCls: t,
        pickerCellInnerCls: n,
        pickerYearMonthCellWidth: a,
        pickerControlIconSize: o,
        pickerPanelCellWidth: r,
        paddingSM: i,
        paddingXS: u,
        paddingXXS: s,
        colorBgContainer: d,
        lineWidth: c,
        lineType: v,
        borderRadiusLG: p,
        colorPrimary: f,
        colorTextHeading: g,
        colorSplit: h,
        pickerControlIconBorderWidth: m,
        colorIcon: b,
        pickerTextHeight: w,
        motionDurationMid: C,
        colorIconHover: $,
        fontWeightStrong: k,
        pickerPanelCellHeight: y,
        pickerCellPaddingVertical: x,
        colorTextDisabled: S,
        colorText: D,
        fontSize: M,
        pickerBasicCellHoverWithRangeColor: P,
        motionDurationSlow: Y,
        pickerPanelWithoutTimeCellHeight: R,
        pickerQuarterPanelContentHeight: O,
        colorLink: I,
        colorLinkActive: N,
        colorLinkHover: H,
        pickerDateHoverRangeBorderColor: T,
        borderRadiusSM: E,
        colorTextLightSolid: V,
        borderRadius: A,
        controlItemBgHover: W,
        pickerTimePanelColumnHeight: B,
        pickerTimePanelColumnWidth: F,
        pickerTimePanelCellHeight: L,
        controlItemBgActive: j,
        marginXXS: z,
      } = e,
      K = 7 * r + 2 * i + 4,
      U = (K - 2 * u) / 3 - a - i;
    return {
      [t]: {
        "&-panel": {
          display: "inline-flex",
          flexDirection: "column",
          textAlign: "center",
          background: d,
          border: `${c}px ${v} ${h}`,
          borderRadius: p,
          outline: "none",
          "&-focused": { borderColor: f },
          "&-rtl": {
            direction: "rtl",
            [`${t}-prev-icon,\n              ${t}-super-prev-icon`]: {
              transform: "rotate(45deg)",
            },
            [`${t}-next-icon,\n              ${t}-super-next-icon`]: {
              transform: "rotate(-135deg)",
            },
          },
        },
        "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel":
          { display: "flex", flexDirection: "column", width: K },
        "&-header": {
          display: "flex",
          padding: `0 ${u}px`,
          color: g,
          borderBottom: `${c}px ${v} ${h}`,
          "> *": { flex: "none" },
          button: {
            padding: 0,
            color: b,
            lineHeight: `${w}px`,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            transition: `color ${C}`,
          },
          "> button": {
            minWidth: "1.6em",
            fontSize: M,
            "&:hover": { color: $ },
          },
          "&-view": {
            flex: "auto",
            fontWeight: k,
            lineHeight: `${w}px`,
            button: {
              color: "inherit",
              fontWeight: "inherit",
              verticalAlign: "top",
              "&:not(:first-child)": { marginInlineStart: u },
              "&:hover": { color: f },
            },
          },
        },
        "&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon":
          {
            position: "relative",
            display: "inline-block",
            width: o,
            height: o,
            "&::before": {
              position: "absolute",
              top: 0,
              insetInlineStart: 0,
              display: "inline-block",
              width: o,
              height: o,
              border: "0 solid currentcolor",
              borderBlockStartWidth: m,
              borderBlockEndWidth: 0,
              borderInlineStartWidth: m,
              borderInlineEndWidth: 0,
              content: '""',
            },
          },
        "&-super-prev-icon,\n        &-super-next-icon": {
          "&::after": {
            position: "absolute",
            top: Math.ceil(o / 2),
            insetInlineStart: Math.ceil(o / 2),
            display: "inline-block",
            width: o,
            height: o,
            border: "0 solid currentcolor",
            borderBlockStartWidth: m,
            borderBlockEndWidth: 0,
            borderInlineStartWidth: m,
            borderInlineEndWidth: 0,
            content: '""',
          },
        },
        "&-prev-icon,\n        &-super-prev-icon": {
          transform: "rotate(-45deg)",
        },
        "&-next-icon,\n        &-super-next-icon": {
          transform: "rotate(135deg)",
        },
        "&-content": {
          width: "100%",
          tableLayout: "fixed",
          borderCollapse: "collapse",
          "th, td": { position: "relative", minWidth: y, fontWeight: "normal" },
          th: { height: y + 2 * x, color: D, verticalAlign: "middle" },
        },
        "&-cell": l(
          {
            padding: `${x}px 0`,
            color: S,
            cursor: "pointer",
            "&-in-view": { color: D },
          },
          Fn(e)
        ),
        [`&-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-start ${n},\n        &-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-end ${n}`]:
          {
            "&::after": {
              position: "absolute",
              top: 0,
              bottom: 0,
              zIndex: -1,
              background: P,
              transition: `all ${Y}`,
              content: '""',
            },
          },
        [`&-date-panel\n        ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-start\n        ${n}::after`]:
          { insetInlineEnd: -(r - y) / 2, insetInlineStart: 0 },
        [`&-date-panel ${t}-cell-in-view${t}-cell-in-range${t}-cell-range-hover-end ${n}::after`]:
          { insetInlineEnd: 0, insetInlineStart: -(r - y) / 2 },
        [`&-range-hover${t}-range-start::after`]: { insetInlineEnd: "50%" },
        "&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel":
          { [`${t}-content`]: { height: 4 * R }, [n]: { padding: `0 ${u}px` } },
        "&-quarter-panel": { [`${t}-content`]: { height: O } },
        [`&-panel ${t}-footer`]: { borderTop: `${c}px ${v} ${h}` },
        "&-footer": {
          width: "min-content",
          minWidth: "100%",
          lineHeight: w - 2 * c + "px",
          textAlign: "center",
          "&-extra": {
            padding: `0 ${i}`,
            lineHeight: w - 2 * c + "px",
            textAlign: "start",
            "&:not(:last-child)": { borderBottom: `${c}px ${v} ${h}` },
          },
        },
        "&-now": { textAlign: "start" },
        "&-today-btn": {
          color: I,
          "&:hover": { color: H },
          "&:active": { color: N },
          [`&${t}-today-btn-disabled`]: { color: S, cursor: "not-allowed" },
        },
        "&-decade-panel": {
          [n]: { padding: `0 ${u / 2}px` },
          [`${t}-cell::before`]: { display: "none" },
        },
        "&-year-panel,\n        &-quarter-panel,\n        &-month-panel": {
          [`${t}-body`]: { padding: `0 ${u}px` },
          [n]: { width: a },
          [`${t}-cell-range-hover-start::after`]: {
            insetInlineStart: U,
            borderInlineStart: `${c}px dashed ${T}`,
            borderStartStartRadius: E,
            borderBottomStartRadius: E,
            borderStartEndRadius: 0,
            borderBottomEndRadius: 0,
            [`${t}-panel-rtl &`]: {
              insetInlineEnd: U,
              borderInlineEnd: `${c}px dashed ${T}`,
              borderStartStartRadius: 0,
              borderBottomStartRadius: 0,
              borderStartEndRadius: E,
              borderBottomEndRadius: E,
            },
          },
          [`${t}-cell-range-hover-end::after`]: {
            insetInlineEnd: U,
            borderInlineEnd: `${c}px dashed ${T}`,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            borderStartEndRadius: A,
            borderEndEndRadius: A,
            [`${t}-panel-rtl &`]: {
              insetInlineStart: U,
              borderInlineStart: `${c}px dashed ${T}`,
              borderStartStartRadius: A,
              borderEndStartRadius: A,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
            },
          },
        },
        "&-week-panel": {
          [`${t}-body`]: { padding: `${u}px ${i}px` },
          [`${t}-cell`]: {
            [`&:hover ${n},\n            &-selected ${n},\n            ${n}`]: {
              background: "transparent !important",
            },
          },
          "&-row": {
            td: {
              transition: `background ${C}`,
              "&:first-child": {
                borderStartStartRadius: E,
                borderEndStartRadius: E,
              },
              "&:last-child": {
                borderStartEndRadius: E,
                borderEndEndRadius: E,
              },
            },
            "&:hover td": { background: W },
            "&-selected td,\n            &-selected:hover td": {
              background: f,
              [`&${t}-cell-week`]: {
                color: new J(V).setAlpha(0.5).toHexString(),
              },
              [`&${t}-cell-today ${n}::before`]: { borderColor: V },
              [n]: { color: V },
            },
          },
        },
        "&-date-panel": {
          [`${t}-body`]: { padding: `${u}px ${i}px` },
          [`${t}-content`]: { width: 7 * r, th: { width: r } },
        },
        "&-datetime-panel": {
          display: "flex",
          [`${t}-time-panel`]: { borderInlineStart: `${c}px ${v} ${h}` },
          [`${t}-date-panel,\n          ${t}-time-panel`]: {
            transition: `opacity ${Y}`,
          },
          "&-active": {
            [`${t}-date-panel,\n            ${t}-time-panel`]: {
              opacity: 0.3,
              "&-active": { opacity: 1 },
            },
          },
        },
        "&-time-panel": {
          width: "auto",
          minWidth: "auto",
          direction: "ltr",
          [`${t}-content`]: { display: "flex", flex: "auto", height: B },
          "&-column": {
            flex: "1 0 auto",
            width: F,
            margin: `${s}px 0`,
            padding: 0,
            overflowY: "hidden",
            textAlign: "start",
            listStyle: "none",
            transition: `background ${C}`,
            overflowX: "hidden",
            "&::after": { display: "block", height: B - L, content: '""' },
            "&:not(:first-child)": { borderInlineStart: `${c}px ${v} ${h}` },
            "&-active": { background: new J(j).setAlpha(0.2).toHexString() },
            "&:hover": { overflowY: "auto" },
            "> li": {
              margin: 0,
              padding: 0,
              [`&${t}-time-panel-cell`]: {
                marginInline: z,
                [`${t}-time-panel-cell-inner`]: {
                  display: "block",
                  width: F - 2 * z,
                  height: L,
                  margin: 0,
                  paddingBlock: 0,
                  paddingInlineEnd: 0,
                  paddingInlineStart: (F - L) / 2,
                  color: D,
                  lineHeight: `${L}px`,
                  borderRadius: E,
                  cursor: "pointer",
                  transition: `background ${C}`,
                  "&:hover": { background: W },
                },
                "&-selected": {
                  [`${t}-time-panel-cell-inner`]: { background: j },
                },
                "&-disabled": {
                  [`${t}-time-panel-cell-inner`]: {
                    color: S,
                    background: "transparent",
                    cursor: "not-allowed",
                  },
                },
              },
            },
          },
        },
        [`&-datetime-panel ${t}-time-panel-column:after`]: {
          height: B - L + 2 * s,
        },
      },
    };
  },
  jn = (e) => {
    const {
      componentCls: t,
      colorBgContainer: n,
      colorError: a,
      colorErrorOutline: o,
      colorWarning: r,
      colorWarningOutline: i,
    } = e;
    return {
      [t]: {
        [`&-status-error${t}`]: {
          "&, &:not([disabled]):hover": { backgroundColor: n, borderColor: a },
          "&-focused, &:focus": l(
            {},
            F(
              A(e, {
                inputBorderActiveColor: a,
                inputBorderHoverColor: a,
                controlOutline: o,
              })
            )
          ),
          [`${t}-active-bar`]: { background: a },
        },
        [`&-status-warning${t}`]: {
          "&, &:not([disabled]):hover": { backgroundColor: n, borderColor: r },
          "&-focused, &:focus": l(
            {},
            F(
              A(e, {
                inputBorderActiveColor: r,
                inputBorderHoverColor: r,
                controlOutline: i,
              })
            )
          ),
          [`${t}-active-bar`]: { background: r },
        },
      },
    };
  },
  zn = (e) => {
    const {
      componentCls: t,
      antCls: n,
      boxShadowPopoverArrow: a,
      controlHeight: o,
      fontSize: r,
      inputPaddingHorizontal: i,
      colorBgContainer: u,
      lineWidth: s,
      lineType: d,
      colorBorder: c,
      borderRadius: v,
      motionDurationMid: p,
      colorBgContainerDisabled: f,
      colorTextDisabled: g,
      colorTextPlaceholder: h,
      controlHeightLG: m,
      fontSizeLG: b,
      controlHeightSM: w,
      inputPaddingHorizontalSM: C,
      paddingXS: $,
      marginXS: k,
      colorTextDescription: y,
      lineWidthBold: x,
      lineHeight: S,
      colorPrimary: D,
      motionDurationSlow: M,
      zIndexPopup: P,
      paddingXXS: Y,
      paddingSM: R,
      pickerTextHeight: O,
      controlItemBgActive: I,
      colorPrimaryBorder: N,
      sizePopupArrow: H,
      borderRadiusXS: T,
      borderRadiusOuter: E,
      colorBgElevated: V,
      borderRadiusLG: A,
      boxShadowSecondary: W,
      borderRadiusSM: B,
      colorSplit: J,
      controlItemBgHover: ee,
      presetsWidth: te,
      presetsMaxWidth: ne,
    } = e;
    return [
      {
        [t]: l(l(l({}, L(e)), Bn(e, o, r, i)), {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          background: u,
          lineHeight: 1,
          border: `${s}px ${d} ${c}`,
          borderRadius: v,
          transition: `border ${p}, box-shadow ${p}`,
          "&:hover, &-focused": l({}, j(e)),
          "&-focused": l({}, F(e)),
          [`&${t}-disabled`]: {
            background: f,
            borderColor: c,
            cursor: "not-allowed",
            [`${t}-suffix`]: { color: g },
          },
          [`&${t}-borderless`]: {
            backgroundColor: "transparent !important",
            borderColor: "transparent !important",
            boxShadow: "none !important",
          },
          [`${t}-input`]: {
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            width: "100%",
            "> input": l(l({}, z(e)), {
              flex: "auto",
              minWidth: 1,
              height: "auto",
              padding: 0,
              background: "transparent",
              border: 0,
              "&:focus": { boxShadow: "none" },
              "&[disabled]": { background: "transparent" },
            }),
            "&:hover": { [`${t}-clear`]: { opacity: 1 } },
            "&-placeholder": { "> input": { color: h } },
          },
          "&-large": l(l({}, Bn(e, m, b, i)), {
            [`${t}-input > input`]: { fontSize: b },
          }),
          "&-small": l({}, Bn(e, w, r, C)),
          [`${t}-suffix`]: {
            display: "flex",
            flex: "none",
            alignSelf: "center",
            marginInlineStart: $ / 2,
            color: g,
            lineHeight: 1,
            pointerEvents: "none",
            "> *": {
              verticalAlign: "top",
              "&:not(:last-child)": { marginInlineEnd: k },
            },
          },
          [`${t}-clear`]: {
            position: "absolute",
            top: "50%",
            insetInlineEnd: 0,
            color: g,
            lineHeight: 1,
            background: u,
            transform: "translateY(-50%)",
            cursor: "pointer",
            opacity: 0,
            transition: `opacity ${p}, color ${p}`,
            "> *": { verticalAlign: "top" },
            "&:hover": { color: y },
          },
          [`${t}-separator`]: {
            position: "relative",
            display: "inline-block",
            width: "1em",
            height: b,
            color: g,
            fontSize: b,
            verticalAlign: "top",
            cursor: "default",
            [`${t}-focused &`]: { color: y },
            [`${t}-range-separator &`]: {
              [`${t}-disabled &`]: { cursor: "not-allowed" },
            },
          },
          "&-range": {
            position: "relative",
            display: "inline-flex",
            [`${t}-clear`]: { insetInlineEnd: i },
            "&:hover": { [`${t}-clear`]: { opacity: 1 } },
            [`${t}-active-bar`]: {
              bottom: -s,
              height: x,
              marginInlineStart: i,
              background: D,
              opacity: 0,
              transition: `all ${M} ease-out`,
              pointerEvents: "none",
            },
            [`&${t}-focused`]: { [`${t}-active-bar`]: { opacity: 1 } },
            [`${t}-range-separator`]: {
              alignItems: "center",
              padding: `0 ${$}px`,
              lineHeight: 1,
            },
            [`&${t}-small`]: {
              [`${t}-clear`]: { insetInlineEnd: C },
              [`${t}-active-bar`]: { marginInlineStart: C },
            },
          },
          "&-dropdown": l(l(l({}, L(e)), Ln(e)), {
            position: "absolute",
            top: -9999,
            left: { _skip_check_: !0, value: -9999 },
            zIndex: P,
            [`&${t}-dropdown-hidden`]: { display: "none" },
            [`&${t}-dropdown-placement-bottomLeft`]: {
              [`${t}-range-arrow`]: {
                top: 0,
                display: "block",
                transform: "translateY(-100%)",
              },
            },
            [`&${t}-dropdown-placement-topLeft`]: {
              [`${t}-range-arrow`]: {
                bottom: 0,
                display: "block",
                transform: "translateY(100%) rotate(180deg)",
              },
            },
            [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topLeft,\n          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topRight,\n          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topLeft,\n          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topRight`]:
              { animationName: K },
            [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,\n          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomRight,\n          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,\n          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]:
              { animationName: U },
            [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topLeft,\n          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topRight`]:
              { animationName: q },
            [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,\n          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]:
              { animationName: G },
            [`${t}-panel > ${t}-time-panel`]: { paddingTop: Y },
            [`${t}-ranges`]: {
              marginBottom: 0,
              padding: `${Y}px ${R}px`,
              overflow: "hidden",
              lineHeight: O - 2 * s - $ / 2 + "px",
              textAlign: "start",
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              "> li": { display: "inline-block" },
              [`${t}-preset > ${n}-tag-blue`]: {
                color: D,
                background: I,
                borderColor: N,
                cursor: "pointer",
              },
              [`${t}-ok`]: { marginInlineStart: "auto" },
            },
            [`${t}-range-wrapper`]: { display: "flex", position: "relative" },
            [`${t}-range-arrow`]: l(
              {
                position: "absolute",
                zIndex: 1,
                display: "none",
                marginInlineStart: 1.5 * i,
                transition: `left ${M} ease-out`,
              },
              _(H, T, E, V, a)
            ),
            [`${t}-panel-container`]: {
              overflow: "hidden",
              verticalAlign: "top",
              background: V,
              borderRadius: A,
              boxShadow: W,
              transition: `margin ${M}`,
              [`${t}-panel-layout`]: {
                display: "flex",
                flexWrap: "nowrap",
                alignItems: "stretch",
              },
              [`${t}-presets`]: {
                display: "flex",
                flexDirection: "column",
                minWidth: te,
                maxWidth: ne,
                ul: {
                  height: 0,
                  flex: "auto",
                  listStyle: "none",
                  overflow: "auto",
                  margin: 0,
                  padding: $,
                  borderInlineEnd: `${s}px ${d} ${J}`,
                  li: l(l({}, Q), {
                    borderRadius: B,
                    paddingInline: $,
                    paddingBlock: (w - Math.round(r * S)) / 2,
                    cursor: "pointer",
                    transition: `all ${M}`,
                    "+ li": { marginTop: k },
                    "&:hover": { background: ee },
                  }),
                },
              },
              [`${t}-panels`]: {
                display: "inline-flex",
                flexWrap: "nowrap",
                direction: "ltr",
                [`${t}-panel`]: { borderWidth: `0 0 ${s}px` },
                "&:last-child": { [`${t}-panel`]: { borderWidth: 0 } },
              },
              [`${t}-panel`]: {
                verticalAlign: "top",
                background: "transparent",
                borderRadius: 0,
                borderWidth: 0,
                [`${t}-content,\n            table`]: { textAlign: "center" },
                "&-focused": { borderColor: c },
              },
            },
          }),
          "&-dropdown-range": {
            padding: (2 * H) / 3 + "px 0",
            "&-hidden": { display: "none" },
          },
          "&-rtl": {
            direction: "rtl",
            [`${t}-separator`]: { transform: "rotate(180deg)" },
            [`${t}-footer`]: { "&-extra": { direction: "rtl" } },
          },
        }),
      },
      X(e, "slide-up"),
      X(e, "slide-down"),
      Z(e, "move-up"),
      Z(e, "move-down"),
    ];
  },
  Kn = V(
    "DatePicker",
    (e) => {
      const t = A(
        W(e),
        ((e) => {
          const {
            componentCls: t,
            controlHeightLG: n,
            controlHeightSM: a,
            colorPrimary: o,
            paddingXXS: l,
          } = e;
          return {
            pickerCellCls: `${t}-cell`,
            pickerCellInnerCls: `${t}-cell-inner`,
            pickerTextHeight: n,
            pickerPanelCellWidth: 1.5 * a,
            pickerPanelCellHeight: a,
            pickerDateHoverRangeBorderColor: new J(o).lighten(20).toHexString(),
            pickerBasicCellHoverWithRangeColor: new J(o)
              .lighten(35)
              .toHexString(),
            pickerPanelWithoutTimeCellHeight: 1.65 * n,
            pickerYearMonthCellWidth: 1.5 * n,
            pickerTimePanelColumnHeight: 224,
            pickerTimePanelColumnWidth: 1.4 * n,
            pickerTimePanelCellHeight: 28,
            pickerQuarterPanelContentHeight: 1.4 * n,
            pickerCellPaddingVertical: l,
            pickerCellBorderGap: 2,
            pickerControlIconSize: 7,
            pickerControlIconBorderWidth: 1.5,
          };
        })(e)
      );
      return [zn(t), jn(t), B(e, { focusElCls: `${e.componentCls}-focused` })];
    },
    (e) => ({
      presetsWidth: 120,
      presetsMaxWidth: 200,
      zIndexPopup: e.zIndexPopupBase + 50,
    })
  );
var Un = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z",
        },
      },
    ],
  },
  name: "calendar",
  theme: "outlined",
};
function qn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (a = a.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      a.forEach(function (t) {
        Gn(e, t, n[t]);
      });
  }
  return e;
}
function Gn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var _n = function (e, t) {
  var n = qn({}, e, t.attrs);
  return u(te, qn({}, n, { icon: Un }), null);
};
(_n.displayName = "CalendarOutlined"), (_n.inheritAttrs = !1);
var Qn = {
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
          d: "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z",
        },
      },
    ],
  },
  name: "clock-circle",
  theme: "outlined",
};
function Xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (a = a.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      a.forEach(function (t) {
        Zn(e, t, n[t]);
      });
  }
  return e;
}
function Zn(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Jn = function (e, t) {
  var n = Xn({}, e, t.attrs);
  return u(te, Xn({}, n, { icon: Qn }), null);
};
function ea(e, t, n) {
  return void 0 !== n
    ? n
    : "year" === t && e.lang.yearPlaceholder
    ? e.lang.yearPlaceholder
    : "quarter" === t && e.lang.quarterPlaceholder
    ? e.lang.quarterPlaceholder
    : "month" === t && e.lang.monthPlaceholder
    ? e.lang.monthPlaceholder
    : "week" === t && e.lang.weekPlaceholder
    ? e.lang.weekPlaceholder
    : "time" === t && e.timePickerLocale.placeholder
    ? e.timePickerLocale.placeholder
    : e.lang.placeholder;
}
function ta(e, t, n) {
  return void 0 !== n
    ? n
    : "year" === t && e.lang.yearPlaceholder
    ? e.lang.rangeYearPlaceholder
    : "month" === t && e.lang.monthPlaceholder
    ? e.lang.rangeMonthPlaceholder
    : "week" === t && e.lang.weekPlaceholder
    ? e.lang.rangeWeekPlaceholder
    : "time" === t && e.timePickerLocale.placeholder
    ? e.timePickerLocale.rangePlaceholder
    : e.lang.rangePlaceholder;
}
function na(e, t) {
  const n = { adjustX: 1, adjustY: 1 };
  switch (t) {
    case "bottomLeft":
      return { points: ["tl", "bl"], offset: [0, 4], overflow: n };
    case "bottomRight":
      return { points: ["tr", "br"], offset: [0, 4], overflow: n };
    case "topLeft":
      return { points: ["bl", "tl"], offset: [0, -4], overflow: n };
    case "topRight":
      return { points: ["br", "tr"], offset: [0, -4], overflow: n };
    default:
      return {
        points: "rtl" === e ? ["tr", "br"] : ["tl", "bl"],
        offset: [0, 4],
        overflow: n,
      };
  }
}
function aa() {
  return {
    id: String,
    dropdownClassName: String,
    popupClassName: String,
    popupStyle: ne(),
    transitionName: String,
    placeholder: String,
    allowClear: ae(),
    autofocus: ae(),
    disabled: ae(),
    tabindex: Number,
    open: ae(),
    defaultOpen: ae(),
    inputReadOnly: ae(),
    format: oe([String, Function, Array]),
    getPopupContainer: le(),
    panelRender: le(),
    onChange: le(),
    "onUpdate:value": le(),
    onOk: le(),
    onOpenChange: le(),
    "onUpdate:open": le(),
    onFocus: le(),
    onBlur: le(),
    onMousedown: le(),
    onMouseup: le(),
    onMouseenter: le(),
    onMouseleave: le(),
    onClick: le(),
    onContextmenu: le(),
    onKeydown: le(),
    role: String,
    name: String,
    autocomplete: String,
    direction: re(),
    showToday: ae(),
    showTime: oe([Boolean, Object]),
    locale: ne(),
    size: re(),
    bordered: ae(),
    dateRender: le(),
    disabledDate: le(),
    mode: re(),
    picker: re(),
    valueFormat: String,
    placement: re(),
    status: re(),
    disabledHours: le(),
    disabledMinutes: le(),
    disabledSeconds: le(),
  };
}
function oa() {
  return {
    defaultPickerValue: oe([Object, String]),
    defaultValue: oe([Object, String]),
    value: oe([Object, String]),
    presets: ie(),
    disabledTime: le(),
    renderExtraFooter: le(),
    showNow: ae(),
    monthCellRender: le(),
    monthCellContentRender: le(),
  };
}
function la() {
  return {
    allowEmpty: ie(),
    dateRender: le(),
    defaultPickerValue: ie(),
    defaultValue: ie(),
    value: ie(),
    presets: ie(),
    disabledTime: le(),
    disabled: oe([Boolean, Array]),
    renderExtraFooter: le(),
    separator: { type: String },
    showTime: oe([Boolean, Object]),
    ranges: ne(),
    placeholder: ie(),
    mode: ie(),
    onChange: le(),
    "onUpdate:value": le(),
    onCalendarChange: le(),
    onPanelChange: le(),
    onOk: le(),
  };
}
(Jn.displayName = "ClockCircleOutlined"), (Jn.inheritAttrs = !1);
var ra = function (e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (n[a] = e[a]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      t.indexOf(a[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
        (n[a[o]] = e[a[o]]);
  }
  return n;
};
var ia = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z",
        },
      },
    ],
  },
  name: "swap-right",
  theme: "outlined",
};
function ua(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (a = a.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      a.forEach(function (t) {
        sa(e, t, n[t]);
      });
  }
  return e;
}
function sa(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var da = function (e, t) {
  var n = ua({}, e, t.attrs);
  return u(te, ua({}, n, { icon: ia }), null);
};
(da.displayName = "SwapRightOutlined"), (da.inheritAttrs = !1);
var ca = function (e, t) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (n[a] = e[a]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
      t.indexOf(a[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[o]) &&
        (n[a[o]] = e[a[o]]);
  }
  return n;
};
const va = {
  button: (e, t) => {
    let { attrs: n, slots: a } = t;
    return u(ee, d(d({ size: "small", type: "primary" }, e), n), a);
  },
  rangeItem: function (e, t) {
    let { slots: n, attrs: a } = t;
    return u(be, d(d({ color: "blue" }, e), a), n);
  },
};
function pa(e) {
  const {
      format: t,
      picker: n,
      showHour: a,
      showMinute: o,
      showSecond: r,
      use12Hours: i,
    } = e,
    u = ((s = t), s ? (Array.isArray(s) ? s : [s]) : [])[0];
  var s;
  const d = l({}, e);
  return (
    u &&
      "string" == typeof u &&
      (u.includes("s") || void 0 !== r || (d.showSecond = !1),
      u.includes("m") || void 0 !== o || (d.showMinute = !1),
      u.includes("H") || u.includes("h") || void 0 !== a || (d.showHour = !1),
      (u.includes("a") || u.includes("A")) &&
        void 0 === i &&
        (d.use12Hours = !0)),
    "time" === n
      ? d
      : ("function" == typeof u && delete d.format, { showTime: d })
  );
}
function fa(e, t) {
  const {
      DatePicker: n,
      WeekPicker: a,
      MonthPicker: o,
      YearPicker: r,
      TimePicker: i,
      QuarterPicker: s,
    } = (function (e, t) {
      function n(n, a) {
        const o = l(l(l({}, aa()), oa()), t);
        return g({
          compatConfig: { MODE: 3 },
          name: a,
          inheritAttrs: !1,
          props: o,
          slots: Object,
          setup(t, a) {
            let { slots: o, expose: r, attrs: i, emit: s } = a;
            const v = t,
              p = ue(),
              f = se.useInject(),
              {
                prefixCls: g,
                direction: h,
                getPopupContainer: b,
                size: w,
                rootPrefixCls: C,
                disabled: k,
              } = de("picker", v),
              { compactSize: y, compactItemClassnames: x } = ce(g, h),
              S = $(() => y.value || w.value),
              [D, M] = Kn(g),
              P = m();
            r({
              focus: () => {
                var e;
                null === (e = P.value) || void 0 === e || e.focus();
              },
              blur: () => {
                var e;
                null === (e = P.value) || void 0 === e || e.blur();
              },
            });
            const Y = (t) => (v.valueFormat ? e.toString(t, v.valueFormat) : t),
              R = (e, t) => {
                const n = Y(e);
                s("update:value", n), s("change", n, t), p.onFieldChange();
              },
              O = (e) => {
                s("update:open", e), s("openChange", e);
              },
              I = (e) => {
                s("focus", e);
              },
              N = (e) => {
                s("blur", e), p.onFieldBlur();
              },
              H = (e, t) => {
                const n = Y(e);
                s("panelChange", n, t);
              },
              T = (e) => {
                const t = Y(e);
                s("ok", t);
              },
              [V] = ve("DatePicker", pe),
              A = $(() =>
                v.value
                  ? v.valueFormat
                    ? e.toDate(v.value, v.valueFormat)
                    : v.value
                  : "" === v.value
                  ? void 0
                  : v.value
              ),
              W = $(() =>
                v.defaultValue
                  ? v.valueFormat
                    ? e.toDate(v.defaultValue, v.valueFormat)
                    : v.defaultValue
                  : "" === v.defaultValue
                  ? void 0
                  : v.defaultValue
              ),
              B = $(() =>
                v.defaultPickerValue
                  ? v.valueFormat
                    ? e.toDate(v.defaultPickerValue, v.valueFormat)
                    : v.defaultPickerValue
                  : "" === v.defaultPickerValue
                  ? void 0
                  : v.defaultPickerValue
              );
            return () => {
              var t, a, r, s, m, w;
              const $ = l(l({}, V.value), v.locale),
                y = l(l({}, v), i),
                {
                  bordered: Y = !0,
                  placeholder: F,
                  suffixIcon: L = null === (t = o.suffixIcon) || void 0 === t
                    ? void 0
                    : t.call(o),
                  showToday: j = !0,
                  transitionName: z,
                  allowClear: K = !0,
                  dateRender: U = o.dateRender,
                  renderExtraFooter: q = o.renderExtraFooter,
                  monthCellRender: G = o.monthCellRender ||
                    v.monthCellContentRender ||
                    o.monthCellContentRender,
                  clearIcon: _ = null === (a = o.clearIcon) || void 0 === a
                    ? void 0
                    : a.call(o),
                  id: Q = p.id.value,
                } = y,
                X = ra(y, [
                  "bordered",
                  "placeholder",
                  "suffixIcon",
                  "showToday",
                  "transitionName",
                  "allowClear",
                  "dateRender",
                  "renderExtraFooter",
                  "monthCellRender",
                  "clearIcon",
                  "id",
                ]),
                Z = "" === y.showTime || y.showTime,
                { format: J } = y;
              let ee = {};
              n && (ee.picker = n);
              const te = n || y.picker || "date";
              ee = l(
                l(
                  l({}, ee),
                  Z
                    ? pa(
                        l(
                          { format: J, picker: te },
                          "object" == typeof Z ? Z : {}
                        )
                      )
                    : {}
                ),
                "time" === te ? pa(l(l({ format: J }, X), { picker: te })) : {}
              );
              const ne = g.value,
                ae = u(E, null, [
                  L || u("time" === n ? Jn : _n, null, null),
                  f.hasFeedback && f.feedbackIcon,
                ]);
              return D(
                u(
                  Dn,
                  d(
                    d(
                      d(
                        {
                          monthCellRender: G,
                          dateRender: U,
                          renderExtraFooter: q,
                          ref: P,
                          placeholder: ea($, te, F),
                          suffixIcon: ae,
                          dropdownAlign: na(h.value, v.placement),
                          clearIcon: _ || u(he, null, null),
                          allowClear: K,
                          transitionName: z || `${C.value}-slide-up`,
                        },
                        X
                      ),
                      ee
                    ),
                    {},
                    {
                      id: Q,
                      picker: te,
                      value: A.value,
                      defaultValue: W.value,
                      defaultPickerValue: B.value,
                      showToday: j,
                      locale: $.lang,
                      class: c(
                        {
                          [`${ne}-${S.value}`]: S.value,
                          [`${ne}-borderless`]: !Y,
                        },
                        fe(ne, ge(f.status, v.status), f.hasFeedback),
                        i.class,
                        M.value,
                        x.value
                      ),
                      disabled: k.value,
                      prefixCls: ne,
                      getPopupContainer: i.getCalendarContainer || b.value,
                      generateConfig: e,
                      prevIcon:
                        (null === (r = o.prevIcon) || void 0 === r
                          ? void 0
                          : r.call(o)) ||
                        u("span", { class: `${ne}-prev-icon` }, null),
                      nextIcon:
                        (null === (s = o.nextIcon) || void 0 === s
                          ? void 0
                          : s.call(o)) ||
                        u("span", { class: `${ne}-next-icon` }, null),
                      superPrevIcon:
                        (null === (m = o.superPrevIcon) || void 0 === m
                          ? void 0
                          : m.call(o)) ||
                        u("span", { class: `${ne}-super-prev-icon` }, null),
                      superNextIcon:
                        (null === (w = o.superNextIcon) || void 0 === w
                          ? void 0
                          : w.call(o)) ||
                        u("span", { class: `${ne}-super-next-icon` }, null),
                      components: va,
                      direction: h.value,
                      dropdownClassName: c(
                        M.value,
                        v.popupClassName,
                        v.dropdownClassName
                      ),
                      onChange: R,
                      onOpenChange: O,
                      onFocus: I,
                      onBlur: N,
                      onPanelChange: H,
                      onOk: T,
                    }
                  ),
                  null
                )
              );
            };
          },
        });
      }
      return {
        DatePicker: n(void 0, "ADatePicker"),
        WeekPicker: n("week", "AWeekPicker"),
        MonthPicker: n("month", "AMonthPicker"),
        YearPicker: n("year", "AYearPicker"),
        TimePicker: n("time", "TimePicker"),
        QuarterPicker: n("quarter", "AQuarterPicker"),
      };
    })(e, t),
    v = (function (e, t) {
      const n = g({
        compatConfig: { MODE: 3 },
        name: "ARangePicker",
        inheritAttrs: !1,
        props: l(l(l({}, aa()), la()), t),
        slots: Object,
        setup(t, n) {
          let { expose: a, slots: o, attrs: r, emit: i } = n;
          const s = t,
            v = ue(),
            p = se.useInject(),
            {
              prefixCls: f,
              direction: g,
              getPopupContainer: h,
              size: b,
              rootPrefixCls: w,
              disabled: C,
            } = de("picker", s),
            { compactSize: k, compactItemClassnames: y } = ce(f, g),
            x = $(() => k.value || b.value),
            [S, D] = Kn(f),
            M = m();
          a({
            focus: () => {
              var e;
              null === (e = M.value) || void 0 === e || e.focus();
            },
            blur: () => {
              var e;
              null === (e = M.value) || void 0 === e || e.blur();
            },
          });
          const P = (t) => (s.valueFormat ? e.toString(t, s.valueFormat) : t),
            Y = (e, t) => {
              const n = P(e);
              i("update:value", n), i("change", n, t), v.onFieldChange();
            },
            R = (e) => {
              i("update:open", e), i("openChange", e);
            },
            O = (e) => {
              i("focus", e);
            },
            I = (e) => {
              i("blur", e), v.onFieldBlur();
            },
            N = (e, t) => {
              const n = P(e);
              i("panelChange", n, t);
            },
            H = (e) => {
              const t = P(e);
              i("ok", t);
            },
            T = (e, t, n) => {
              const a = P(e);
              i("calendarChange", a, t, n);
            },
            [V] = ve("DatePicker", pe),
            A = $(() =>
              s.value && s.valueFormat
                ? e.toDate(s.value, s.valueFormat)
                : s.value
            ),
            W = $(() =>
              s.defaultValue && s.valueFormat
                ? e.toDate(s.defaultValue, s.valueFormat)
                : s.defaultValue
            ),
            B = $(() =>
              s.defaultPickerValue && s.valueFormat
                ? e.toDate(s.defaultPickerValue, s.valueFormat)
                : s.defaultPickerValue
            );
          return () => {
            var t, n, a, i, m, b, $;
            const k = l(l({}, V.value), s.locale),
              P = l(l({}, s), r),
              {
                prefixCls: F,
                bordered: L = !0,
                placeholder: j,
                suffixIcon: z = null === (t = o.suffixIcon) || void 0 === t
                  ? void 0
                  : t.call(o),
                picker: K = "date",
                transitionName: U,
                allowClear: q = !0,
                dateRender: G = o.dateRender,
                renderExtraFooter: _ = o.renderExtraFooter,
                separator: Q = null === (n = o.separator) || void 0 === n
                  ? void 0
                  : n.call(o),
                clearIcon: X = null === (a = o.clearIcon) || void 0 === a
                  ? void 0
                  : a.call(o),
                id: Z = v.id.value,
              } = P,
              J = ca(P, [
                "prefixCls",
                "bordered",
                "placeholder",
                "suffixIcon",
                "picker",
                "transitionName",
                "allowClear",
                "dateRender",
                "renderExtraFooter",
                "separator",
                "clearIcon",
                "id",
              ]);
            delete J["onUpdate:value"], delete J["onUpdate:open"];
            const { format: ee, showTime: te } = P;
            let ne = {};
            ne = l(
              l(l({}, ne), te ? pa(l({ format: ee, picker: K }, te)) : {}),
              "time" === K
                ? pa(
                    l(l({ format: ee }, me(J, ["disabledTime"])), { picker: K })
                  )
                : {}
            );
            const ae = f.value,
              oe = u(E, null, [
                z || u("time" === K ? Jn : _n, null, null),
                p.hasFeedback && p.feedbackIcon,
              ]);
            return S(
              u(
                Wn,
                d(
                  d(
                    d(
                      {
                        dateRender: G,
                        renderExtraFooter: _,
                        separator:
                          Q ||
                          u(
                            "span",
                            { "aria-label": "to", class: `${ae}-separator` },
                            [u(da, null, null)]
                          ),
                        ref: M,
                        dropdownAlign: na(g.value, s.placement),
                        placeholder: ta(k, K, j),
                        suffixIcon: oe,
                        clearIcon: X || u(he, null, null),
                        allowClear: q,
                        transitionName: U || `${w.value}-slide-up`,
                      },
                      J
                    ),
                    ne
                  ),
                  {},
                  {
                    disabled: C.value,
                    id: Z,
                    value: A.value,
                    defaultValue: W.value,
                    defaultPickerValue: B.value,
                    picker: K,
                    class: c(
                      {
                        [`${ae}-${x.value}`]: x.value,
                        [`${ae}-borderless`]: !L,
                      },
                      fe(ae, ge(p.status, s.status), p.hasFeedback),
                      r.class,
                      D.value,
                      y.value
                    ),
                    locale: k.lang,
                    prefixCls: ae,
                    getPopupContainer: r.getCalendarContainer || h.value,
                    generateConfig: e,
                    prevIcon:
                      (null === (i = o.prevIcon) || void 0 === i
                        ? void 0
                        : i.call(o)) ||
                      u("span", { class: `${ae}-prev-icon` }, null),
                    nextIcon:
                      (null === (m = o.nextIcon) || void 0 === m
                        ? void 0
                        : m.call(o)) ||
                      u("span", { class: `${ae}-next-icon` }, null),
                    superPrevIcon:
                      (null === (b = o.superPrevIcon) || void 0 === b
                        ? void 0
                        : b.call(o)) ||
                      u("span", { class: `${ae}-super-prev-icon` }, null),
                    superNextIcon:
                      (null === ($ = o.superNextIcon) || void 0 === $
                        ? void 0
                        : $.call(o)) ||
                      u("span", { class: `${ae}-super-next-icon` }, null),
                    components: va,
                    direction: g.value,
                    dropdownClassName: c(
                      D.value,
                      s.popupClassName,
                      s.dropdownClassName
                    ),
                    onChange: Y,
                    onOpenChange: R,
                    onFocus: O,
                    onBlur: I,
                    onPanelChange: N,
                    onOk: H,
                    onCalendarChange: T,
                  }
                ),
                null
              )
            );
          };
        },
      });
      return n;
    })(e, t);
  return {
    DatePicker: n,
    WeekPicker: a,
    MonthPicker: o,
    YearPicker: r,
    TimePicker: i,
    QuarterPicker: s,
    RangePicker: v,
  };
}
const {
    DatePicker: ga,
    WeekPicker: ha,
    MonthPicker: ma,
    YearPicker: ba,
    TimePicker: wa,
    QuarterPicker: Ca,
    RangePicker: $a,
  } = fa(Le),
  ka = l(ga, {
    WeekPicker: ha,
    MonthPicker: ma,
    YearPicker: ba,
    RangePicker: $a,
    TimePicker: wa,
    QuarterPicker: Ca,
    install: (e) => (
      e.component(ga.name, ga),
      e.component($a.name, $a),
      e.component(ma.name, ma),
      e.component(ha.name, ha),
      e.component(Ca.name, Ca),
      e
    ),
  });
export { ka as D, $a as R, Le as a, aa as c, oa as d, fa as g, la as r };

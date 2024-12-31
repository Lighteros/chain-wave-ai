import {
  e2 as e,
  e1 as t,
  d$ as r,
  gN as o,
  f2 as s,
  d_ as n,
  eC as l,
  gO as i,
  as as a,
  c,
  aJ as u,
  aw as p,
  aT as d,
  aC as g,
  r as v,
  gG as f,
  aQ as h,
  cR as m,
  aV as k,
  aW as b,
  aX as $,
  aZ as y,
  b1 as C,
  cs as S,
  b7 as x,
  cq as w,
  ba as O,
} from "./index-DPRREYlk.js";
import { C as j } from "./CheckOutlined-BvF8M63J.js";
import { u as D } from "./useRefs-DoWExZxn.js";
const I = ["normal", "exception", "active", "success"],
  P = () => ({
    prefixCls: String,
    type: e(),
    percent: Number,
    format: t(),
    status: e(),
    showInfo: r(),
    strokeWidth: Number,
    strokeLinecap: e(),
    strokeColor: o(),
    trailColor: String,
    width: Number,
    success: s(),
    gapDegree: Number,
    gapPosition: e(),
    size: n([String, Number, Array]),
    steps: Number,
    successPercent: Number,
    title: String,
    progressStatus: e(),
  });
function W(e) {
  return !e || e < 0 ? 0 : e > 100 ? 100 : e;
}
function A(e) {
  let { success: t, successPercent: r } = e,
    o = r;
  return (
    t &&
      "progress" in t &&
      (l(
        !1,
        "Progress",
        "`success.progress` is deprecated. Please use `success.percent` instead."
      ),
      (o = t.progress)),
    t && "percent" in t && (o = t.percent),
    o
  );
}
const E = (e, t, r) => {
  var o, s, n, l;
  let i = -1,
    a = -1;
  if ("step" === t) {
    const t = r.steps,
      o = r.strokeWidth;
    "string" == typeof e || void 0 === e
      ? ((i = "small" === e ? 2 : 14), (a = null != o ? o : 8))
      : "number" == typeof e
      ? ([i, a] = [e, e])
      : ([i = 14, a = 8] = e),
      (i *= t);
  } else if ("line" === t) {
    const t = null == r ? void 0 : r.strokeWidth;
    "string" == typeof e || void 0 === e
      ? (a = t || ("small" === e ? 6 : 8))
      : "number" == typeof e
      ? ([i, a] = [e, e])
      : ([i = -1, a = 8] = e);
  } else
    ("circle" !== t && "dashboard" !== t) ||
      ("string" == typeof e || void 0 === e
        ? ([i, a] = "small" === e ? [60, 60] : [120, 120])
        : "number" == typeof e
        ? ([i, a] = [e, e])
        : ((i =
            null !== (s = null !== (o = e[0]) && void 0 !== o ? o : e[1]) &&
            void 0 !== s
              ? s
              : 120),
          (a =
            null !== (l = null !== (n = e[0]) && void 0 !== n ? n : e[1]) &&
            void 0 !== l
              ? l
              : 120)));
  return { width: i, height: a };
};
const z = (e, t) => {
    const {
        from: r = i.blue,
        to: o = i.blue,
        direction: s = "rtl" === t ? "to left" : "to right",
      } = e,
      n = (function (e, t) {
        var r = {};
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            t.indexOf(o) < 0 &&
            (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var s = 0;
          for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
            t.indexOf(o[s]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, o[s]) &&
              (r[o[s]] = e[o[s]]);
        }
        return r;
      })(e, ["from", "to", "direction"]);
    if (0 !== Object.keys(n).length) {
      return {
        backgroundImage: `linear-gradient(${s}, ${((e) => {
          let t = [];
          return (
            Object.keys(e).forEach((r) => {
              const o = parseFloat(r.replace(/%/g, ""));
              isNaN(o) || t.push({ key: o, value: e[r] });
            }),
            (t = t.sort((e, t) => e.key - t.key)),
            t
              .map((e) => {
                let { key: t, value: r } = e;
                return `${r} ${t}%`;
              })
              .join(", ")
          );
        })(n)})`,
      };
    }
    return { backgroundImage: `linear-gradient(${s}, ${r}, ${o})` };
  },
  M = a({
    compatConfig: { MODE: 3 },
    name: "ProgressLine",
    inheritAttrs: !1,
    props: u(u({}, P()), { strokeColor: o(), direction: e() }),
    setup(e, t) {
      let { slots: r, attrs: o } = t;
      const s = c(() => {
          const { strokeColor: t, direction: r } = e;
          return t && "string" != typeof t ? z(t, r) : { backgroundColor: t };
        }),
        n = c(() =>
          "square" === e.strokeLinecap || "butt" === e.strokeLinecap
            ? 0
            : void 0
        ),
        l = c(() =>
          e.trailColor ? { backgroundColor: e.trailColor } : void 0
        ),
        i = c(() => {
          var t;
          return null !== (t = e.size) && void 0 !== t
            ? t
            : [-1, e.strokeWidth || ("small" === e.size ? 6 : 8)];
        }),
        a = c(() => E(i.value, "line", { strokeWidth: e.strokeWidth })),
        v = c(() => {
          const { percent: t } = e;
          return u(
            {
              width: `${W(t)}%`,
              height: `${a.value.height}px`,
              borderRadius: n.value,
            },
            s.value
          );
        }),
        f = c(() => A(e)),
        h = c(() => {
          const { success: t } = e;
          return {
            width: `${W(f.value)}%`,
            height: `${a.value.height}px`,
            borderRadius: n.value,
            backgroundColor: null == t ? void 0 : t.strokeColor,
          };
        }),
        m = {
          width: a.value.width < 0 ? "100%" : a.value.width,
          height: `${a.value.height}px`,
        };
      return () => {
        var t;
        return p(g, null, [
          p(
            "div",
            d(
              d({}, o),
              {},
              { class: [`${e.prefixCls}-outer`, o.class], style: [o.style, m] }
            ),
            [
              p("div", { class: `${e.prefixCls}-inner`, style: l.value }, [
                p("div", { class: `${e.prefixCls}-bg`, style: v.value }, null),
                void 0 !== f.value
                  ? p(
                      "div",
                      { class: `${e.prefixCls}-success-bg`, style: h.value },
                      null
                    )
                  : null,
              ]),
            ]
          ),
          null === (t = r.default) || void 0 === t ? void 0 : t.call(r),
        ]);
      };
    },
  });
var L = function (e, t) {
  var r = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (r[o] = e[o]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var s = 0;
    for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[s]) &&
        (r[o[s]] = e[o[s]]);
  }
  return r;
};
let N = 0;
function R(e) {
  return +e.replace("%", "");
}
function X(e) {
  return Array.isArray(e) ? e : [e];
}
function B(e, t, r, o) {
  let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
  const n = 50 - o / 2;
  let l = 0,
    i = -n,
    a = 0,
    c = -2 * n;
  switch (arguments.length > 5 ? arguments[5] : void 0) {
    case "left":
      (l = -n), (i = 0), (a = 2 * n), (c = 0);
      break;
    case "right":
      (l = n), (i = 0), (a = -2 * n), (c = 0);
      break;
    case "bottom":
      (i = n), (c = 2 * n);
  }
  const u = `M 50,50 m ${l},${i}\n   a ${n},${n} 0 1 1 ${a},${-c}\n   a ${n},${n} 0 1 1 ${-a},${c}`,
    p = 2 * Math.PI * n;
  return {
    pathString: u,
    pathStyle: {
      stroke: r,
      strokeDasharray: `${(t / 100) * (p - s)}px ${p}px`,
      strokeDashoffset: `-${s / 2 + (e / 100) * (p - s)}px`,
      transition:
        "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
    },
  };
}
const T = a({
    compatConfig: { MODE: 3 },
    name: "VCCircle",
    props: h(
      {
        gapDegree: Number,
        gapPosition: { type: String },
        percent: { type: [Array, Number] },
        prefixCls: String,
        strokeColor: { type: [Object, String, Array] },
        strokeLinecap: { type: String },
        strokeWidth: Number,
        trailColor: String,
        trailWidth: Number,
        transition: String,
      },
      {
        percent: 0,
        prefixCls: "vc-progress",
        strokeColor: "#2db7f5",
        strokeLinecap: "round",
        strokeWidth: 1,
        trailColor: "#D9D9D9",
        trailWidth: 1,
      }
    ),
    setup(e) {
      N += 1;
      const t = v(N),
        r = c(() => X(e.percent)),
        o = c(() => X(e.strokeColor)),
        [s, n] = D();
      ((e) => {
        const t = v(null);
        f(() => {
          const r = Date.now();
          let o = !1;
          e.value.forEach((e) => {
            const s = (null == e ? void 0 : e.$el) || e;
            if (!s) return;
            o = !0;
            const n = s.style;
            (n.transitionDuration = ".3s, .3s, .3s, .06s"),
              t.value && r - t.value < 100 && (n.transitionDuration = "0s, 0s");
          }),
            o && (t.value = Date.now());
        });
      })(n);
      const l = () => {
        const {
          prefixCls: n,
          strokeWidth: l,
          strokeLinecap: i,
          gapDegree: a,
          gapPosition: c,
        } = e;
        let u = 0;
        return r.value.map((e, r) => {
          const g = o.value[r] || o.value[o.value.length - 1],
            v =
              "[object Object]" === Object.prototype.toString.call(g)
                ? `url(#${n}-gradient-${t.value})`
                : "",
            { pathString: f, pathStyle: h } = B(u, e, g, l, a, c);
          u += e;
          const m = {
            key: r,
            d: f,
            stroke: v,
            "stroke-linecap": i,
            "stroke-width": l,
            opacity: 0 === e ? 0 : 1,
            "fill-opacity": "0",
            class: `${n}-circle-path`,
            style: h,
          };
          return p("path", d({ ref: s(r) }, m), null);
        });
      };
      return () => {
        const {
            prefixCls: r,
            strokeWidth: s,
            trailWidth: n,
            gapDegree: i,
            gapPosition: a,
            trailColor: c,
            strokeLinecap: u,
            strokeColor: g,
          } = e,
          v = L(e, [
            "prefixCls",
            "strokeWidth",
            "trailWidth",
            "gapDegree",
            "gapPosition",
            "trailColor",
            "strokeLinecap",
            "strokeColor",
          ]),
          { pathString: f, pathStyle: h } = B(0, 100, c, s, i, a);
        delete v.percent;
        const m = o.value.find(
            (e) => "[object Object]" === Object.prototype.toString.call(e)
          ),
          k = {
            d: f,
            stroke: c,
            "stroke-linecap": u,
            "stroke-width": n || s,
            "fill-opacity": "0",
            class: `${r}-circle-trail`,
            style: h,
          };
        return p(
          "svg",
          d({ class: `${r}-circle`, viewBox: "0 0 100 100" }, v),
          [
            m &&
              p("defs", null, [
                p(
                  "linearGradient",
                  {
                    id: `${r}-gradient-${t.value}`,
                    x1: "100%",
                    y1: "0%",
                    x2: "0%",
                    y2: "0%",
                  },
                  [
                    Object.keys(m)
                      .sort((e, t) => R(e) - R(t))
                      .map((e, t) =>
                        p(
                          "stop",
                          { key: t, offset: e, "stop-color": m[e] },
                          null
                        )
                      ),
                  ]
                ),
              ]),
            p("path", k, null),
            l().reverse(),
          ]
        );
      };
    },
  }),
  H = a({
    compatConfig: { MODE: 3 },
    name: "ProgressCircle",
    inheritAttrs: !1,
    props: h(u(u({}, P()), { strokeColor: o() }), { trailColor: null }),
    setup(e, t) {
      let { slots: r, attrs: o } = t;
      const s = c(() => {
          var t;
          return null !== (t = e.width) && void 0 !== t ? t : 120;
        }),
        n = c(() => {
          var t;
          return null !== (t = e.size) && void 0 !== t ? t : [s.value, s.value];
        }),
        l = c(() => E(n.value, "circle")),
        a = c(() =>
          e.gapDegree || 0 === e.gapDegree
            ? e.gapDegree
            : "dashboard" === e.type
            ? 75
            : void 0
        ),
        u = c(() => ({
          width: `${l.value.width}px`,
          height: `${l.value.height}px`,
          fontSize: 0.15 * l.value.width + 6 + "px",
        })),
        v = c(() => {
          var t;
          return null !== (t = e.strokeWidth) && void 0 !== t
            ? t
            : Math.max((3 / l.value.width) * 100, 6);
        }),
        f = c(
          () => e.gapPosition || ("dashboard" === e.type && "bottom") || void 0
        ),
        h = c(() =>
          (function (e) {
            let { percent: t, success: r, successPercent: o } = e;
            const s = W(A({ success: r, successPercent: o }));
            return [s, W(W(t) - s)];
          })(e)
        ),
        k = c(
          () =>
            "[object Object]" === Object.prototype.toString.call(e.strokeColor)
        ),
        b = c(() =>
          (function (e) {
            let { success: t = {}, strokeColor: r } = e;
            const { strokeColor: o } = t;
            return [o || i.green, r || null];
          })({ success: e.success, strokeColor: e.strokeColor })
        ),
        $ = c(() => ({
          [`${e.prefixCls}-inner`]: !0,
          [`${e.prefixCls}-circle-gradient`]: k.value,
        }));
      return () => {
        var t;
        const s = p(
          T,
          {
            percent: h.value,
            strokeWidth: v.value,
            trailWidth: v.value,
            strokeColor: b.value,
            strokeLinecap: e.strokeLinecap,
            trailColor: e.trailColor,
            prefixCls: e.prefixCls,
            gapDegree: a.value,
            gapPosition: f.value,
          },
          null
        );
        return p(
          "div",
          d(
            d({}, o),
            {},
            { class: [$.value, o.class], style: [o.style, u.value] }
          ),
          [
            l.value.width <= 20
              ? p(m, null, {
                  default: () => [p("span", null, [s])],
                  title: r.default,
                })
              : p(g, null, [
                  s,
                  null === (t = r.default) || void 0 === t ? void 0 : t.call(r),
                ]),
          ]
        );
      };
    },
  }),
  F = a({
    compatConfig: { MODE: 3 },
    name: "Steps",
    props: u(u({}, P()), {
      steps: Number,
      strokeColor: n(),
      trailColor: String,
    }),
    setup(e, t) {
      let { slots: r } = t;
      const o = c(() => Math.round(e.steps * ((e.percent || 0) / 100))),
        s = c(() => {
          var t;
          return null !== (t = e.size) && void 0 !== t
            ? t
            : ["small" === e.size ? 2 : 14, e.strokeWidth || 8];
        }),
        n = c(() =>
          E(s.value, "step", {
            steps: e.steps,
            strokeWidth: e.strokeWidth || 8,
          })
        ),
        l = c(() => {
          const { steps: t, strokeColor: r, trailColor: s, prefixCls: l } = e,
            i = [];
          for (let e = 0; e < t; e += 1) {
            const a = Array.isArray(r) ? r[e] : r,
              c = {
                [`${l}-steps-item`]: !0,
                [`${l}-steps-item-active`]: e <= o.value - 1,
              };
            i.push(
              p(
                "div",
                {
                  key: e,
                  class: c,
                  style: {
                    backgroundColor: e <= o.value - 1 ? a : s,
                    width: n.value.width / t + "px",
                    height: `${n.value.height}px`,
                  },
                },
                null
              )
            );
          }
          return i;
        });
      return () => {
        var t;
        return p("div", { class: `${e.prefixCls}-steps-outer` }, [
          l.value,
          null === (t = r.default) || void 0 === t ? void 0 : t.call(r),
        ]);
      };
    },
  }),
  q = new y("antProgressActive", {
    "0%": { transform: "translateX(-100%) scaleX(0)", opacity: 0.1 },
    "20%": { transform: "translateX(-100%) scaleX(0)", opacity: 0.5 },
    to: { transform: "translateX(0) scaleX(1)", opacity: 0 },
  }),
  G = (e) => {
    const { componentCls: t, iconCls: r } = e;
    return {
      [t]: u(u({}, $(e)), {
        display: "inline-block",
        "&-rtl": { direction: "rtl" },
        "&-line": {
          position: "relative",
          width: "100%",
          fontSize: e.fontSize,
          marginInlineEnd: e.marginXS,
          marginBottom: e.marginXS,
        },
        [`${t}-outer`]: { display: "inline-block", width: "100%" },
        [`&${t}-show-info`]: {
          [`${t}-outer`]: {
            marginInlineEnd: `calc(-2em - ${e.marginXS}px)`,
            paddingInlineEnd: `calc(2em + ${e.paddingXS}px)`,
          },
        },
        [`${t}-inner`]: {
          position: "relative",
          display: "inline-block",
          width: "100%",
          overflow: "hidden",
          verticalAlign: "middle",
          backgroundColor: e.progressRemainingColor,
          borderRadius: e.progressLineRadius,
        },
        [`${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: { stroke: e.colorInfo },
        },
        [`${t}-success-bg, ${t}-bg`]: {
          position: "relative",
          backgroundColor: e.colorInfo,
          borderRadius: e.progressLineRadius,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
        },
        [`${t}-success-bg`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          backgroundColor: e.colorSuccess,
        },
        [`${t}-text`]: {
          display: "inline-block",
          width: "2em",
          marginInlineStart: e.marginXS,
          color: e.progressInfoTextColor,
          lineHeight: 1,
          whiteSpace: "nowrap",
          textAlign: "start",
          verticalAlign: "middle",
          wordBreak: "normal",
          [r]: { fontSize: e.fontSize },
        },
        [`&${t}-status-active`]: {
          [`${t}-bg::before`]: {
            position: "absolute",
            inset: 0,
            backgroundColor: e.colorBgContainer,
            borderRadius: e.progressLineRadius,
            opacity: 0,
            animationName: q,
            animationDuration: e.progressActiveMotionDuration,
            animationTimingFunction: e.motionEaseOutQuint,
            animationIterationCount: "infinite",
            content: '""',
          },
        },
        [`&${t}-status-exception`]: {
          [`${t}-bg`]: { backgroundColor: e.colorError },
          [`${t}-text`]: { color: e.colorError },
        },
        [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: { stroke: e.colorError },
        },
        [`&${t}-status-success`]: {
          [`${t}-bg`]: { backgroundColor: e.colorSuccess },
          [`${t}-text`]: { color: e.colorSuccess },
        },
        [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: { stroke: e.colorSuccess },
        },
      }),
    };
  },
  Q = (e) => {
    const { componentCls: t, iconCls: r } = e;
    return {
      [t]: {
        [`${t}-circle-trail`]: { stroke: e.progressRemainingColor },
        [`&${t}-circle ${t}-inner`]: {
          position: "relative",
          lineHeight: 1,
          backgroundColor: "transparent",
        },
        [`&${t}-circle ${t}-text`]: {
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: 0,
          width: "100%",
          margin: 0,
          padding: 0,
          color: e.colorText,
          lineHeight: 1,
          whiteSpace: "normal",
          textAlign: "center",
          transform: "translateY(-50%)",
          [r]: { fontSize: e.fontSize / e.fontSizeSM + "em" },
        },
        [`${t}-circle&-status-exception`]: {
          [`${t}-text`]: { color: e.colorError },
        },
        [`${t}-circle&-status-success`]: {
          [`${t}-text`]: { color: e.colorSuccess },
        },
      },
      [`${t}-inline-circle`]: {
        lineHeight: 1,
        [`${t}-inner`]: { verticalAlign: "bottom" },
      },
    };
  },
  V = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        [`${t}-steps`]: {
          display: "inline-block",
          "&-outer": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
          "&-item": {
            flexShrink: 0,
            minWidth: e.progressStepMinWidth,
            marginInlineEnd: e.progressStepMarginInlineEnd,
            backgroundColor: e.progressRemainingColor,
            transition: `all ${e.motionDurationSlow}`,
            "&-active": { backgroundColor: e.colorInfo },
          },
        },
      },
    };
  },
  _ = (e) => {
    const { componentCls: t, iconCls: r } = e;
    return {
      [t]: {
        [`${t}-small&-line, ${t}-small&-line ${t}-text ${r}`]: {
          fontSize: e.fontSizeSM,
        },
      },
    };
  },
  J = k("Progress", (e) => {
    const t = e.marginXXS / 2,
      r = b(e, {
        progressLineRadius: 100,
        progressInfoTextColor: e.colorText,
        progressDefaultColor: e.colorInfo,
        progressRemainingColor: e.colorFillSecondary,
        progressStepMarginInlineEnd: t,
        progressStepMinWidth: t,
        progressActiveMotionDuration: "2.4s",
      });
    return [G(r), Q(r), V(r), _(r)];
  });
const Y = O(
  a({
    compatConfig: { MODE: 3 },
    name: "AProgress",
    inheritAttrs: !1,
    props: h(P(), {
      type: "line",
      percent: 0,
      showInfo: !0,
      trailColor: null,
      size: "default",
      strokeLinecap: "round",
    }),
    slots: Object,
    setup(e, t) {
      let { slots: r, attrs: o } = t;
      const { prefixCls: s, direction: n } = C("progress", e),
        [l, i] = J(s),
        a = c(() =>
          Array.isArray(e.strokeColor) ? e.strokeColor[0] : e.strokeColor
        ),
        u = c(() => {
          const { percent: t = 0 } = e,
            r = A(e);
          return parseInt(void 0 !== r ? r.toString() : t.toString(), 10);
        }),
        g = c(() => {
          const { status: t } = e;
          return !I.includes(t) && u.value >= 100 ? "success" : t || "normal";
        }),
        v = c(() => {
          const { type: t, showInfo: r, size: o } = e,
            l = s.value;
          return {
            [l]: !0,
            [`${l}-inline-circle`]:
              "circle" === t && E(o, "circle").width <= 20,
            [`${l}-${"dashboard" === t ? "circle" : t}`]: !0,
            [`${l}-status-${g.value}`]: !0,
            [`${l}-show-info`]: r,
            [`${l}-${o}`]: o,
            [`${l}-rtl`]: "rtl" === n.value,
            [i.value]: !0,
          };
        }),
        f = c(() =>
          "string" == typeof e.strokeColor || Array.isArray(e.strokeColor)
            ? e.strokeColor
            : void 0
        );
      return () => {
        const { type: t, steps: i, title: c } = e,
          { class: u } = o,
          h = (function (e, t) {
            var r = {};
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.indexOf(o) < 0 &&
                (r[o] = e[o]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var s = 0;
              for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                t.indexOf(o[s]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, o[s]) &&
                  (r[o[s]] = e[o[s]]);
            }
            return r;
          })(o, ["class"]),
          m = (() => {
            const { showInfo: t, format: o, type: n, percent: l, title: i } = e,
              a = A(e);
            if (!t) return null;
            let c;
            const u = o || (null == r ? void 0 : r.format) || ((e) => `${e}%`),
              d = "line" === n;
            return (
              o ||
              (null == r ? void 0 : r.format) ||
              ("exception" !== g.value && "success" !== g.value)
                ? (c = u(W(l), W(a)))
                : "exception" === g.value
                ? (c = p(d ? S : x, null, null))
                : "success" === g.value && (c = p(d ? w : j, null, null)),
              p(
                "span",
                {
                  class: `${s.value}-text`,
                  title: void 0 === i && "string" == typeof c ? c : void 0,
                },
                [c]
              )
            );
          })();
        let k;
        return (
          "line" === t
            ? (k = i
                ? p(
                    F,
                    d(
                      d({}, e),
                      {},
                      { strokeColor: f.value, prefixCls: s.value, steps: i }
                    ),
                    { default: () => [m] }
                  )
                : p(
                    M,
                    d(
                      d({}, e),
                      {},
                      {
                        strokeColor: a.value,
                        prefixCls: s.value,
                        direction: n.value,
                      }
                    ),
                    { default: () => [m] }
                  ))
            : ("circle" !== t && "dashboard" !== t) ||
              (k = p(
                H,
                d(
                  d({}, e),
                  {},
                  {
                    prefixCls: s.value,
                    strokeColor: a.value,
                    progressStatus: g.value,
                  }
                ),
                { default: () => [m] }
              )),
          l(
            p(
              "div",
              d(
                d({ role: "progressbar" }, h),
                {},
                { class: [v.value, u], title: c }
              ),
              [k]
            )
          )
        );
      };
    },
  })
);
export { Y as _ };

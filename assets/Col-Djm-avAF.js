import {
  bq as e,
  c as t,
  bT as r,
  aV as n,
  aW as s,
  aJ as l,
  as as a,
  b1 as o,
  r as i,
  aL as u,
  dZ as p,
  aS as d,
  aw as f,
  aT as c,
  d_ as $,
} from "./index-DPRREYlk.js";
import { u as m, r as v } from "./responsiveObserve-Bqv5_Yab.js";
import { u as g } from "./useFlexGapSupport-CUSf0znk.js";
const x = Symbol("rowContextKey"),
  b = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        display: "flex",
        flexFlow: "row wrap",
        minWidth: 0,
        "&::before, &::after": { display: "flex" },
        "&-no-wrap": { flexWrap: "nowrap" },
        "&-start": { justifyContent: "flex-start" },
        "&-center": { justifyContent: "center" },
        "&-end": { justifyContent: "flex-end" },
        "&-space-between": { justifyContent: "space-between" },
        "&-space-around ": { justifyContent: "space-around" },
        "&-space-evenly ": { justifyContent: "space-evenly" },
        "&-top": { alignItems: "flex-start" },
        "&-middle": { alignItems: "center" },
        "&-bottom": { alignItems: "flex-end" },
      },
    };
  },
  y = (e) => {
    const { componentCls: t } = e;
    return { [t]: { position: "relative", maxWidth: "100%", minHeight: 1 } };
  },
  j = (e, t) =>
    ((e, t) => {
      const { componentCls: r, gridColumns: n } = e,
        s = {};
      for (let l = n; l >= 0; l--)
        0 === l
          ? ((s[`${r}${t}-${l}`] = { display: "none" }),
            (s[`${r}-push-${l}`] = { insetInlineStart: "auto" }),
            (s[`${r}-pull-${l}`] = { insetInlineEnd: "auto" }),
            (s[`${r}${t}-push-${l}`] = { insetInlineStart: "auto" }),
            (s[`${r}${t}-pull-${l}`] = { insetInlineEnd: "auto" }),
            (s[`${r}${t}-offset-${l}`] = { marginInlineEnd: 0 }),
            (s[`${r}${t}-order-${l}`] = { order: 0 }))
          : ((s[`${r}${t}-${l}`] = {
              display: "block",
              flex: `0 0 ${(l / n) * 100}%`,
              maxWidth: (l / n) * 100 + "%",
            }),
            (s[`${r}${t}-push-${l}`] = {
              insetInlineStart: (l / n) * 100 + "%",
            }),
            (s[`${r}${t}-pull-${l}`] = { insetInlineEnd: (l / n) * 100 + "%" }),
            (s[`${r}${t}-offset-${l}`] = {
              marginInlineStart: (l / n) * 100 + "%",
            }),
            (s[`${r}${t}-order-${l}`] = { order: l }));
      return s;
    })(e, t),
  h = n("Grid", (e) => [b(e)]),
  S = n("Grid", (e) => {
    const t = s(e, { gridColumns: 24 }),
      r = {
        "-sm": t.screenSMMin,
        "-md": t.screenMDMin,
        "-lg": t.screenLGMin,
        "-xl": t.screenXLMin,
        "-xxl": t.screenXXLMin,
      };
    return [
      y(t),
      j(t, ""),
      j(t, "-xs"),
      Object.keys(r)
        .map((e) =>
          ((e, t, r) => ({ [`@media (min-width: ${t}px)`]: l({}, j(e, r)) }))(
            t,
            r[e],
            e
          )
        )
        .reduce((e, t) => l(l({}, e), t), {}),
    ];
  }),
  w = a({
    compatConfig: { MODE: 3 },
    name: "ARow",
    inheritAttrs: !1,
    props: {
      align: $([String, Object]),
      justify: $([String, Object]),
      prefixCls: String,
      gutter: $([Number, Array, Object], 0),
      wrap: { type: Boolean, default: void 0 },
    },
    setup(e, n) {
      let { slots: s, attrs: a } = n;
      const { prefixCls: $, direction: b } = o("row", e),
        [y, j] = h($);
      let S;
      const w = m(),
        C = i({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
        N = i({ xs: !1, sm: !1, md: !1, lg: !1, xl: !1, xxl: !1 }),
        O = (r) =>
          t(() => {
            if ("string" == typeof e[r]) return e[r];
            if ("object" != typeof e[r]) return "";
            for (let t = 0; t < v.length; t++) {
              const n = v[t];
              if (!N.value[n]) continue;
              const s = e[r][n];
              if (void 0 !== s) return s;
            }
            return "";
          }),
        A = O("align"),
        I = O("justify"),
        M = g();
      u(() => {
        S = w.value.subscribe((t) => {
          N.value = t;
          const r = e.gutter || 0;
          ((!Array.isArray(r) && "object" == typeof r) ||
            (Array.isArray(r) &&
              ("object" == typeof r[0] || "object" == typeof r[1]))) &&
            (C.value = t);
        });
      }),
        p(() => {
          w.value.unsubscribe(S);
        });
      const E = t(() => {
        const t = [void 0, void 0],
          { gutter: r = 0 } = e;
        return (
          (Array.isArray(r) ? r : [r, void 0]).forEach((e, r) => {
            if ("object" == typeof e)
              for (let n = 0; n < v.length; n++) {
                const s = v[n];
                if (C.value[s] && void 0 !== e[s]) {
                  t[r] = e[s];
                  break;
                }
              }
            else t[r] = e;
          }),
          t
        );
      });
      var G;
      (G = { gutter: E, supportFlexGap: M, wrap: t(() => e.wrap) }), r(x, G);
      const W = t(() =>
          d(
            $.value,
            {
              [`${$.value}-no-wrap`]: !1 === e.wrap,
              [`${$.value}-${I.value}`]: I.value,
              [`${$.value}-${A.value}`]: A.value,
              [`${$.value}-rtl`]: "rtl" === b.value,
            },
            a.class,
            j.value
          )
        ),
        L = t(() => {
          const e = E.value,
            t = {},
            r = null != e[0] && e[0] > 0 ? e[0] / -2 + "px" : void 0,
            n = null != e[1] && e[1] > 0 ? e[1] / -2 + "px" : void 0;
          return (
            r && ((t.marginLeft = r), (t.marginRight = r)),
            M.value
              ? (t.rowGap = `${e[1]}px`)
              : n && ((t.marginTop = n), (t.marginBottom = n)),
            t
          );
        });
      return () => {
        var e;
        return y(
          f(
            "div",
            c(
              c({}, a),
              {},
              { class: W.value, style: l(l({}, L.value), a.style) }
            ),
            [null === (e = s.default) || void 0 === e ? void 0 : e.call(s)]
          )
        );
      };
    },
  });
const C = ["xs", "sm", "md", "lg", "xl", "xxl"],
  N = a({
    compatConfig: { MODE: 3 },
    name: "ACol",
    inheritAttrs: !1,
    props: {
      span: [String, Number],
      order: [String, Number],
      offset: [String, Number],
      push: [String, Number],
      pull: [String, Number],
      xs: { type: [String, Number, Object], default: void 0 },
      sm: { type: [String, Number, Object], default: void 0 },
      md: { type: [String, Number, Object], default: void 0 },
      lg: { type: [String, Number, Object], default: void 0 },
      xl: { type: [String, Number, Object], default: void 0 },
      xxl: { type: [String, Number, Object], default: void 0 },
      prefixCls: String,
      flex: [String, Number],
    },
    setup(r, n) {
      let { slots: s, attrs: a } = n;
      const {
          gutter: i,
          supportFlexGap: u,
          wrap: p,
        } = e(x, {
          gutter: t(() => {}),
          wrap: t(() => {}),
          supportFlexGap: t(() => {}),
        }),
        { prefixCls: $, direction: m } = o("col", r),
        [v, g] = S($),
        b = t(() => {
          const { span: e, order: t, offset: n, push: s, pull: o } = r,
            i = $.value;
          let u = {};
          return (
            C.forEach((e) => {
              let t = {};
              const n = r[e];
              "number" == typeof n
                ? (t.span = n)
                : "object" == typeof n && (t = n || {}),
                (u = l(l({}, u), {
                  [`${i}-${e}-${t.span}`]: void 0 !== t.span,
                  [`${i}-${e}-order-${t.order}`]: t.order || 0 === t.order,
                  [`${i}-${e}-offset-${t.offset}`]: t.offset || 0 === t.offset,
                  [`${i}-${e}-push-${t.push}`]: t.push || 0 === t.push,
                  [`${i}-${e}-pull-${t.pull}`]: t.pull || 0 === t.pull,
                  [`${i}-rtl`]: "rtl" === m.value,
                }));
            }),
            d(
              i,
              {
                [`${i}-${e}`]: void 0 !== e,
                [`${i}-order-${t}`]: t,
                [`${i}-offset-${n}`]: n,
                [`${i}-push-${s}`]: s,
                [`${i}-pull-${o}`]: o,
              },
              u,
              a.class,
              g.value
            )
          );
        }),
        y = t(() => {
          const { flex: e } = r,
            t = i.value,
            n = {};
          if (t && t[0] > 0) {
            const e = t[0] / 2 + "px";
            (n.paddingLeft = e), (n.paddingRight = e);
          }
          if (t && t[1] > 0 && !u.value) {
            const e = t[1] / 2 + "px";
            (n.paddingTop = e), (n.paddingBottom = e);
          }
          return (
            e &&
              ((n.flex = (function (e) {
                return "number" == typeof e
                  ? `${e} ${e} auto`
                  : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
                  ? `0 0 ${e}`
                  : e;
              })(e)),
              !1 !== p.value || n.minWidth || (n.minWidth = 0)),
            n
          );
        });
      return () => {
        var e;
        return v(
          f(
            "div",
            c(c({}, a), {}, { class: b.value, style: [y.value, a.style] }),
            [null === (e = s.default) || void 0 === e ? void 0 : e.call(s)]
          )
        );
      };
    },
  });
export { w as A, N as C };

import {
  aw as e,
  bq as t,
  r as l,
  aC as n,
  e4 as o,
  e5 as i,
  e6 as a,
  aJ as r,
  aV as s,
  aW as d,
  aX as c,
  e7 as p,
  aU as u,
  as as m,
  b1 as b,
  cg as y,
  dZ as f,
  bT as g,
  e8 as $,
  c as v,
  aT as S,
  c8 as x,
  cm as h,
} from "./index-DPRREYlk.js";
import { u as C, r as w } from "./responsiveObserve-Bqv5_Yab.js";
function B(e) {
  return null != e;
}
const I = (t) => {
    const {
        itemPrefixCls: l,
        component: n,
        span: o,
        labelStyle: i,
        contentStyle: a,
        bordered: r,
        label: s,
        content: d,
        colon: c,
      } = t,
      p = n;
    return r
      ? e(
          p,
          {
            class: [{ [`${l}-item-label`]: B(s), [`${l}-item-content`]: B(d) }],
            colSpan: o,
          },
          {
            default: () => [
              B(s) && e("span", { style: i }, [s]),
              B(d) && e("span", { style: a }, [d]),
            ],
          }
        )
      : e(
          p,
          { class: [`${l}-item`], colSpan: o },
          {
            default: () => [
              e("div", { class: `${l}-item-container` }, [
                (s || 0 === s) &&
                  e(
                    "span",
                    {
                      class: [
                        `${l}-item-label`,
                        { [`${l}-item-no-colon`]: !c },
                      ],
                      style: i,
                    },
                    [s]
                  ),
                (d || 0 === d) &&
                  e("span", { class: `${l}-item-content`, style: a }, [d]),
              ]),
            ],
          }
        );
  },
  L = (s) => {
    const d = (t, l, n) => {
        let { colon: s, prefixCls: d, bordered: c } = l,
          {
            component: p,
            type: u,
            showLabel: m,
            showContent: b,
            labelStyle: y,
            contentStyle: f,
          } = n;
        return t.map((t, l) => {
          var n, g;
          const $ = t.props || {},
            {
              prefixCls: v = d,
              span: S = 1,
              labelStyle: x = $["label-style"],
              contentStyle: h = $["content-style"],
              label: C = null ===
                (g =
                  null === (n = t.children) || void 0 === n
                    ? void 0
                    : n.label) || void 0 === g
                ? void 0
                : g.call(n),
            } = $,
            w = o(t),
            B = i(t),
            L = a(t),
            { key: M } = t;
          return "string" == typeof p
            ? e(
                I,
                {
                  key: `${u}-${String(M) || l}`,
                  class: B,
                  style: L,
                  labelStyle: r(r({}, y), x),
                  contentStyle: r(r({}, f), h),
                  span: S,
                  colon: s,
                  component: p,
                  itemPrefixCls: v,
                  bordered: c,
                  label: m ? C : null,
                  content: b ? w : null,
                },
                null
              )
            : [
                e(
                  I,
                  {
                    key: `label-${String(M) || l}`,
                    class: B,
                    style: r(r(r({}, y), L), x),
                    span: 1,
                    colon: s,
                    component: p[0],
                    itemPrefixCls: v,
                    bordered: c,
                    label: C,
                  },
                  null
                ),
                e(
                  I,
                  {
                    key: `content-${String(M) || l}`,
                    class: B,
                    style: r(r(r({}, f), L), h),
                    span: 2 * S - 1,
                    component: p[1],
                    itemPrefixCls: v,
                    bordered: c,
                    content: w,
                  },
                  null
                ),
              ];
        });
      },
      { prefixCls: c, vertical: p, row: u, index: m, bordered: b } = s,
      { labelStyle: y, contentStyle: f } = t(O, {
        labelStyle: l({}),
        contentStyle: l({}),
      });
    return p
      ? e(n, null, [
          e("tr", { key: `label-${m}`, class: `${c}-row` }, [
            d(u, s, {
              component: "th",
              type: "label",
              showLabel: !0,
              labelStyle: y.value,
              contentStyle: f.value,
            }),
          ]),
          e("tr", { key: `content-${m}`, class: `${c}-row` }, [
            d(u, s, {
              component: "td",
              type: "content",
              showContent: !0,
              labelStyle: y.value,
              contentStyle: f.value,
            }),
          ]),
        ])
      : e("tr", { key: m, class: `${c}-row` }, [
          d(u, s, {
            component: b ? ["th", "td"] : "td",
            type: "item",
            showLabel: !0,
            showContent: !0,
            labelStyle: y.value,
            contentStyle: f.value,
          }),
        ]);
  },
  M = (e) => {
    const {
      componentCls: t,
      descriptionsSmallPadding: l,
      descriptionsDefaultPadding: n,
      descriptionsMiddlePadding: o,
      descriptionsBg: i,
    } = e;
    return {
      [`&${t}-bordered`]: {
        [`${t}-view`]: {
          border: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
          "> table": { tableLayout: "auto", borderCollapse: "collapse" },
        },
        [`${t}-item-label, ${t}-item-content`]: {
          padding: n,
          borderInlineEnd: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
          "&:last-child": { borderInlineEnd: "none" },
        },
        [`${t}-item-label`]: {
          backgroundColor: i,
          "&::after": { display: "none" },
        },
        [`${t}-row`]: {
          borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,
          "&:last-child": { borderBottom: "none" },
        },
        [`&${t}-middle`]: {
          [`${t}-item-label, ${t}-item-content`]: { padding: o },
        },
        [`&${t}-small`]: {
          [`${t}-item-label, ${t}-item-content`]: { padding: l },
        },
      },
    };
  },
  k = (e) => {
    const {
      componentCls: t,
      descriptionsExtraColor: l,
      descriptionItemPaddingBottom: n,
      descriptionsItemLabelColonMarginRight: o,
      descriptionsItemLabelColonMarginLeft: i,
      descriptionsTitleMarginBottom: a,
    } = e;
    return {
      [t]: r(r(r({}, c(e)), M(e)), {
        "&-rtl": { direction: "rtl" },
        [`${t}-header`]: {
          display: "flex",
          alignItems: "center",
          marginBottom: a,
        },
        [`${t}-title`]: r(r({}, p), {
          flex: "auto",
          color: e.colorText,
          fontWeight: e.fontWeightStrong,
          fontSize: e.fontSizeLG,
          lineHeight: e.lineHeightLG,
        }),
        [`${t}-extra`]: {
          marginInlineStart: "auto",
          color: l,
          fontSize: e.fontSize,
        },
        [`${t}-view`]: {
          width: "100%",
          borderRadius: e.borderRadiusLG,
          table: { width: "100%", tableLayout: "fixed" },
        },
        [`${t}-row`]: {
          "> th, > td": { paddingBottom: n },
          "&:last-child": { borderBottom: "none" },
        },
        [`${t}-item-label`]: {
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          textAlign: "start",
          "&::after": {
            content: '":"',
            position: "relative",
            top: -0.5,
            marginInline: `${i}px ${o}px`,
          },
          [`&${t}-item-no-colon::after`]: { content: '""' },
        },
        [`${t}-item-no-label`]: { "&::after": { margin: 0, content: '""' } },
        [`${t}-item-content`]: {
          display: "table-cell",
          flex: 1,
          color: e.colorText,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordBreak: "break-word",
          overflowWrap: "break-word",
        },
        [`${t}-item`]: {
          paddingBottom: 0,
          verticalAlign: "top",
          "&-container": {
            display: "flex",
            [`${t}-item-label`]: {
              display: "inline-flex",
              alignItems: "baseline",
            },
            [`${t}-item-content`]: {
              display: "inline-flex",
              alignItems: "baseline",
            },
          },
        },
        "&-middle": {
          [`${t}-row`]: { "> th, > td": { paddingBottom: e.paddingSM } },
        },
        "&-small": {
          [`${t}-row`]: { "> th, > td": { paddingBottom: e.paddingXS } },
        },
      }),
    };
  },
  z = s("Descriptions", (e) => {
    const t = e.colorFillAlter,
      l = e.fontSizeSM * e.lineHeightSM,
      n = e.colorText,
      o = `${e.paddingXS}px ${e.padding}px`,
      i = `${e.padding}px ${e.paddingLG}px`,
      a = `${e.paddingSM}px ${e.paddingLG}px`,
      r = e.padding,
      s = e.marginXS,
      c = e.marginXXS / 2,
      p = d(e, {
        descriptionsBg: t,
        descriptionsTitleMarginBottom: l,
        descriptionsExtraColor: n,
        descriptionItemPaddingBottom: r,
        descriptionsSmallPadding: o,
        descriptionsDefaultPadding: i,
        descriptionsMiddlePadding: a,
        descriptionsItemLabelColonMarginRight: s,
        descriptionsItemLabelColonMarginLeft: c,
      });
    return [k(p)];
  });
u.any;
const P = m({
    compatConfig: { MODE: 3 },
    name: "ADescriptionsItem",
    props: {
      prefixCls: String,
      label: u.any,
      labelStyle: { type: Object, default: void 0 },
      contentStyle: { type: Object, default: void 0 },
      span: { type: Number, default: 1 },
    },
    setup(e, t) {
      let { slots: l } = t;
      return () => {
        var e;
        return null === (e = l.default) || void 0 === e ? void 0 : e.call(l);
      };
    },
  }),
  T = { xxxl: 3, xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
function j(e, t, l) {
  let n = e;
  return (void 0 === l || l > t) && (n = h(e, { span: t })), n;
}
const O = Symbol("descriptionsContext"),
  D = m({
    compatConfig: { MODE: 3 },
    name: "ADescriptions",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      bordered: { type: Boolean, default: void 0 },
      size: { type: String, default: "default" },
      title: u.any,
      extra: u.any,
      column: { type: [Number, Object], default: () => T },
      layout: String,
      colon: { type: Boolean, default: void 0 },
      labelStyle: { type: Object, default: void 0 },
      contentStyle: { type: Object, default: void 0 },
    },
    slots: Object,
    Item: P,
    setup(t, n) {
      let { slots: o, attrs: i } = n;
      const { prefixCls: a, direction: r } = b("descriptions", t);
      let s;
      const d = l({}),
        [c, p] = z(a),
        u = C();
      y(() => {
        s = u.value.subscribe((e) => {
          "object" == typeof t.column && (d.value = e);
        });
      }),
        f(() => {
          u.value.unsubscribe(s);
        }),
        g(O, {
          labelStyle: $(t, "labelStyle"),
          contentStyle: $(t, "contentStyle"),
        });
      const m = v(() =>
        (function (e, t) {
          if ("number" == typeof e) return e;
          if ("object" == typeof e)
            for (let l = 0; l < w.length; l++) {
              const n = w[l];
              if (t[n] && void 0 !== e[n]) return e[n] || T[n];
            }
          return 3;
        })(t.column, d.value)
      );
      return () => {
        var l, n, s;
        const {
            size: d,
            bordered: u = !1,
            layout: b = "horizontal",
            colon: y = !0,
            title: f = null === (l = o.title) || void 0 === l
              ? void 0
              : l.call(o),
            extra: g = null === (n = o.extra) || void 0 === n
              ? void 0
              : n.call(o),
          } = t,
          $ = (function (e, t) {
            const l = x(e),
              n = [];
            let o = [],
              i = t;
            return (
              l.forEach((e, a) => {
                var r;
                const s =
                    null === (r = e.props) || void 0 === r ? void 0 : r.span,
                  d = s || 1;
                if (a === l.length - 1)
                  return o.push(j(e, i, s)), void n.push(o);
                d < i
                  ? ((i -= d), o.push(e))
                  : (o.push(j(e, i, d)), n.push(o), (i = t), (o = []));
              }),
              n
            );
          })(
            null === (s = o.default) || void 0 === s ? void 0 : s.call(o),
            m.value
          );
        return c(
          e(
            "div",
            S(
              S({}, i),
              {},
              {
                class: [
                  a.value,
                  {
                    [`${a.value}-${d}`]: "default" !== d,
                    [`${a.value}-bordered`]: !!u,
                    [`${a.value}-rtl`]: "rtl" === r.value,
                  },
                  i.class,
                  p.value,
                ],
              }
            ),
            [
              (f || g) &&
                e("div", { class: `${a.value}-header` }, [
                  f && e("div", { class: `${a.value}-title` }, [f]),
                  g && e("div", { class: `${a.value}-extra` }, [g]),
                ]),
              e("div", { class: `${a.value}-view` }, [
                e("table", null, [
                  e("tbody", null, [
                    $.map((t, l) =>
                      e(
                        L,
                        {
                          key: l,
                          index: l,
                          colon: y,
                          prefixCls: a.value,
                          vertical: "vertical" === b,
                          bordered: u,
                          row: t,
                        },
                        null
                      )
                    ),
                  ]),
                ]),
              ]),
            ]
          )
        );
      };
    },
  });
D.install = function (e) {
  return e.component(D.name, D), e.component(D.Item.name, D.Item), e;
};
export { P as D, D as a };

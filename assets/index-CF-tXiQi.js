import {
  aV as e,
  aW as a,
  aJ as t,
  aX as o,
  eA as n,
  e7 as i,
  as as r,
  b1 as d,
  eB as l,
  c8 as s,
  aw as c,
  eC as p,
  eD as g,
  aT as $,
  aU as u,
  bB as b,
  eE as h,
  eF as v,
  cj as m,
  eG as x,
  c as y,
} from "./index-DPRREYlk.js";
import { T as f } from "./index-DTRlG5Qd.js";
import { S } from "./index-B0yuFjoJ.js";
const C = (e) => {
    const {
      antCls: a,
      componentCls: o,
      cardHeadHeight: r,
      cardPaddingBase: d,
      cardHeadTabsMarginBottom: l,
    } = e;
    return t(
      t(
        {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: r,
          marginBottom: -1,
          padding: `0 ${d}px`,
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.fontSizeLG,
          background: "transparent",
          borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,
          borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
        },
        n()
      ),
      {
        "&-wrapper": { width: "100%", display: "flex", alignItems: "center" },
        "&-title": t(t({ display: "inline-block", flex: 1 }, i), {
          [`\n          > ${o}-typography,\n          > ${o}-typography-edit-content\n        `]:
            { insetInlineStart: 0, marginTop: 0, marginBottom: 0 },
        }),
        [`${a}-tabs-top`]: {
          clear: "both",
          marginBottom: l,
          color: e.colorText,
          fontWeight: "normal",
          fontSize: e.fontSize,
          "&-bar": {
            borderBottom: `${e.lineWidth}px ${e.lineType} ${e.colorBorderSecondary}`,
          },
        },
      }
    );
  },
  T = (e) => {
    const {
      cardPaddingBase: a,
      colorBorderSecondary: t,
      cardShadow: o,
      lineWidth: n,
    } = e;
    return {
      width: "33.33%",
      padding: a,
      border: 0,
      borderRadius: 0,
      boxShadow: `\n      ${n}px 0 0 0 ${t},\n      0 ${n}px 0 0 ${t},\n      ${n}px ${n}px 0 0 ${t},\n      ${n}px 0 0 0 ${t} inset,\n      0 ${n}px 0 0 ${t} inset;\n    `,
      transition: `all ${e.motionDurationMid}`,
      "&-hoverable:hover": { position: "relative", zIndex: 1, boxShadow: o },
    };
  },
  B = (e) => {
    const {
      componentCls: a,
      iconCls: o,
      cardActionsLiMargin: i,
      cardActionsIconSize: r,
      colorBorderSecondary: d,
    } = e;
    return t(
      t(
        {
          margin: 0,
          padding: 0,
          listStyle: "none",
          background: e.colorBgContainer,
          borderTop: `${e.lineWidth}px ${e.lineType} ${d}`,
          display: "flex",
          borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px `,
        },
        n()
      ),
      {
        "& > li": {
          margin: i,
          color: e.colorTextDescription,
          textAlign: "center",
          "> span": {
            position: "relative",
            display: "block",
            minWidth: 2 * e.cardActionsIconSize,
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            "&:hover": {
              color: e.colorPrimary,
              transition: `color ${e.motionDurationMid}`,
            },
            [`a:not(${a}-btn), > ${o}`]: {
              display: "inline-block",
              width: "100%",
              color: e.colorTextDescription,
              lineHeight: e.fontSize * e.lineHeight + "px",
              transition: `color ${e.motionDurationMid}`,
              "&:hover": { color: e.colorPrimary },
            },
            [`> ${o}`]: { fontSize: r, lineHeight: r * e.lineHeight + "px" },
          },
          "&:not(:last-child)": {
            borderInlineEnd: `${e.lineWidth}px ${e.lineType} ${d}`,
          },
        },
      }
    );
  },
  z = (e) =>
    t(t({ margin: `-${e.marginXXS}px 0`, display: "flex" }, n()), {
      "&-avatar": { paddingInlineEnd: e.padding },
      "&-detail": {
        overflow: "hidden",
        flex: 1,
        "> div:not(:last-child)": { marginBottom: e.marginXS },
      },
      "&-title": t(
        {
          color: e.colorTextHeading,
          fontWeight: e.fontWeightStrong,
          fontSize: e.fontSizeLG,
        },
        i
      ),
      "&-description": { color: e.colorTextDescription },
    }),
  H = (e) => {
    const { componentCls: a, cardPaddingBase: t, colorFillAlter: o } = e;
    return {
      [`${a}-head`]: {
        padding: `0 ${t}px`,
        background: o,
        "&-title": { fontSize: e.fontSize },
      },
      [`${a}-body`]: { padding: `${e.padding}px ${t}px` },
    };
  },
  w = (e) => {
    const { componentCls: a } = e;
    return { overflow: "hidden", [`${a}-body`]: { userSelect: "none" } };
  },
  A = (e) => {
    const {
      componentCls: a,
      cardShadow: i,
      cardHeadPadding: r,
      colorBorderSecondary: d,
      boxShadow: l,
      cardPaddingBase: s,
    } = e;
    return {
      [a]: t(t({}, o(e)), {
        position: "relative",
        background: e.colorBgContainer,
        borderRadius: e.borderRadiusLG,
        [`&:not(${a}-bordered)`]: { boxShadow: l },
        [`${a}-head`]: C(e),
        [`${a}-extra`]: {
          marginInlineStart: "auto",
          color: "",
          fontWeight: "normal",
          fontSize: e.fontSize,
        },
        [`${a}-body`]: t(
          {
            padding: s,
            borderRadius: ` 0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
          },
          n()
        ),
        [`${a}-grid`]: T(e),
        [`${a}-cover`]: {
          "> *": { display: "block", width: "100%" },
          img: {
            borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
          },
        },
        [`${a}-actions`]: B(e),
        [`${a}-meta`]: z(e),
      }),
      [`${a}-bordered`]: {
        border: `${e.lineWidth}px ${e.lineType} ${d}`,
        [`${a}-cover`]: {
          marginTop: -1,
          marginInlineStart: -1,
          marginInlineEnd: -1,
        },
      },
      [`${a}-hoverable`]: {
        cursor: "pointer",
        transition: `box-shadow ${e.motionDurationMid}, border-color ${e.motionDurationMid}`,
        "&:hover": { borderColor: "transparent", boxShadow: i },
      },
      [`${a}-contain-grid`]: {
        [`${a}-body`]: { display: "flex", flexWrap: "wrap" },
        [`&:not(${a}-loading) ${a}-body`]: {
          marginBlockStart: -e.lineWidth,
          marginInlineStart: -e.lineWidth,
          padding: 0,
        },
      },
      [`${a}-contain-tabs`]: {
        [`> ${a}-head`]: { [`${a}-head-title, ${a}-extra`]: { paddingTop: r } },
      },
      [`${a}-type-inner`]: H(e),
      [`${a}-loading`]: w(e),
      [`${a}-rtl`]: { direction: "rtl" },
    };
  },
  R = (e) => {
    const { componentCls: a, cardPaddingSM: t, cardHeadHeightSM: o } = e;
    return {
      [`${a}-small`]: {
        [`> ${a}-head`]: {
          minHeight: o,
          padding: `0 ${t}px`,
          fontSize: e.fontSize,
          [`> ${a}-head-wrapper`]: {
            [`> ${a}-extra`]: { fontSize: e.fontSize },
          },
        },
        [`> ${a}-body`]: { padding: t },
      },
      [`${a}-small${a}-contain-tabs`]: {
        [`> ${a}-head`]: {
          [`${a}-head-title, ${a}-extra`]: {
            minHeight: o,
            paddingTop: 0,
            display: "flex",
            alignItems: "center",
          },
        },
      },
    };
  },
  G = e("Card", (e) => {
    const t = a(e, {
      cardShadow: e.boxShadowCard,
      cardHeadHeight: e.fontSizeLG * e.lineHeightLG + 2 * e.padding,
      cardHeadHeightSM: e.fontSize * e.lineHeight + 2 * e.paddingXS,
      cardHeadPadding: e.padding,
      cardPaddingBase: e.paddingLG,
      cardHeadTabsMarginBottom: -e.padding - e.lineWidth,
      cardActionsLiMargin: `${e.paddingSM}px 0`,
      cardActionsIconSize: e.fontSize,
      cardPaddingSM: 12,
    });
    return [A(t), R(t)];
  }),
  { TabPane: L } = f,
  M = r({
    compatConfig: { MODE: 3 },
    name: "ACard",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      title: u.any,
      extra: u.any,
      bordered: { type: Boolean, default: !0 },
      bodyStyle: { type: Object, default: void 0 },
      headStyle: { type: Object, default: void 0 },
      loading: { type: Boolean, default: !1 },
      hoverable: { type: Boolean, default: !1 },
      type: { type: String },
      size: { type: String },
      actions: u.any,
      tabList: { type: Array },
      tabBarExtraContent: u.any,
      activeTabKey: String,
      defaultActiveTabKey: String,
      cover: u.any,
      onTabChange: { type: Function },
    },
    slots: Object,
    setup(e, a) {
      let { slots: t, attrs: o } = a;
      const { prefixCls: n, direction: i, size: r } = d("card", e),
        [u, m] = G(n),
        x = (e) =>
          e.map((a, t) =>
            (b(a) && !h(a)) || !b(a)
              ? c(
                  "li",
                  {
                    style: { width: 100 / e.length + "%" },
                    key: `action-${t}`,
                  },
                  [c("span", null, [a])]
                )
              : null
          ),
        y = (a) => {
          var t;
          null === (t = e.onTabChange) || void 0 === t || t.call(e, a);
        },
        C = function () {
          let e;
          return (
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : []
            ).forEach((a) => {
              a && v(a.type) && a.type.__ANT_CARD_GRID && (e = !0);
            }),
            e
          );
        };
      return () => {
        var a, d, b, h, v, T;
        const {
            headStyle: B = {},
            bodyStyle: z = {},
            loading: H,
            bordered: w = !0,
            type: A,
            tabList: R,
            hoverable: G,
            activeTabKey: M,
            defaultActiveTabKey: W,
            tabBarExtraContent: D = l(
              null === (a = t.tabBarExtraContent) || void 0 === a
                ? void 0
                : a.call(t)
            ),
            title: I = l(
              null === (d = t.title) || void 0 === d ? void 0 : d.call(t)
            ),
            extra: P = l(
              null === (b = t.extra) || void 0 === b ? void 0 : b.call(t)
            ),
            actions: k = l(
              null === (h = t.actions) || void 0 === h ? void 0 : h.call(t)
            ),
            cover: E = l(
              null === (v = t.cover) || void 0 === v ? void 0 : v.call(t)
            ),
          } = e,
          j = s(null === (T = t.default) || void 0 === T ? void 0 : T.call(t)),
          _ = n.value,
          O = {
            [`${_}`]: !0,
            [m.value]: !0,
            [`${_}-loading`]: H,
            [`${_}-bordered`]: w,
            [`${_}-hoverable`]: !!G,
            [`${_}-contain-grid`]: C(j),
            [`${_}-contain-tabs`]: R && R.length,
            [`${_}-${r.value}`]: r.value,
            [`${_}-type-${A}`]: !!A,
            [`${_}-rtl`]: "rtl" === i.value,
          },
          K = c(
            S,
            { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 },
            { default: () => [j] }
          ),
          X = void 0 !== M,
          F = {
            size: "large",
            [X ? "activeKey" : "defaultActiveKey"]: X ? M : W,
            onChange: y,
            class: `${_}-head-tabs`,
          };
        let N;
        const J =
          R && R.length
            ? c(f, F, {
                default: () => [
                  R.map((e) => {
                    const { tab: a, slots: o } = e,
                      n = null == o ? void 0 : o.tab;
                    p(
                      !o,
                      "Card",
                      "tabList slots is deprecated, Please use `customTab` instead."
                    );
                    let i = void 0 !== a ? a : t[n] ? t[n](e) : null;
                    return (
                      (i = g(t, "customTab", e, () => [i])),
                      c(L, { tab: i, key: e.key, disabled: e.disabled }, null)
                    );
                  }),
                ],
                rightExtra: D ? () => D : null,
              })
            : null;
        (I || P || J) &&
          (N = c("div", { class: `${_}-head`, style: B }, [
            c("div", { class: `${_}-head-wrapper` }, [
              I && c("div", { class: `${_}-head-title` }, [I]),
              P && c("div", { class: `${_}-extra` }, [P]),
            ]),
            J,
          ]));
        const U = E ? c("div", { class: `${_}-cover` }, [E]) : null,
          V = c("div", { class: `${_}-body`, style: z }, [H ? K : j]),
          q = k && k.length ? c("ul", { class: `${_}-actions` }, [x(k)]) : null;
        return u(
          c(
            "div",
            $($({ ref: "cardContainerRef" }, o), {}, { class: [O, o.class] }),
            [N, U, j && j.length ? V : null, q]
          )
        );
      };
    },
  }),
  W = r({
    compatConfig: { MODE: 3 },
    name: "ACardMeta",
    props: { prefixCls: String, title: x(), description: x(), avatar: x() },
    slots: Object,
    setup(e, a) {
      let { slots: t } = a;
      const { prefixCls: o } = d("card", e);
      return () => {
        const a = { [`${o.value}-meta`]: !0 },
          n = m(t, e, "avatar"),
          i = m(t, e, "title"),
          r = m(t, e, "description"),
          d = n ? c("div", { class: `${o.value}-meta-avatar` }, [n]) : null,
          l = i ? c("div", { class: `${o.value}-meta-title` }, [i]) : null,
          s = r
            ? c("div", { class: `${o.value}-meta-description` }, [r])
            : null,
          p =
            l || s
              ? c("div", { class: `${o.value}-meta-detail` }, [l, s])
              : null;
        return c("div", { class: a }, [d, p]);
      };
    },
  }),
  D = r({
    compatConfig: { MODE: 3 },
    name: "ACardGrid",
    __ANT_CARD_GRID: !0,
    props: { prefixCls: String, hoverable: { type: Boolean, default: !0 } },
    setup(e, a) {
      let { slots: t } = a;
      const { prefixCls: o } = d("card", e),
        n = y(() => ({
          [`${o.value}-grid`]: !0,
          [`${o.value}-grid-hoverable`]: e.hoverable,
        }));
      return () => {
        var e;
        return c("div", { class: n.value }, [
          null === (e = t.default) || void 0 === e ? void 0 : e.call(t),
        ]);
      };
    },
  });
(M.Meta = W),
  (M.Grid = D),
  (M.install = function (e) {
    return (
      e.component(M.name, M), e.component(W.name, W), e.component(D.name, D), e
    );
  });
export { M as C, D as _ };

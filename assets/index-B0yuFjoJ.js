import {
  as as e,
  aw as t,
  aS as n,
  aV as a,
  aW as l,
  aJ as o,
  aZ as i,
  aQ as r,
  b1 as s,
  c,
  aT as u,
  ch as d,
} from "./index-DPRREYlk.js";
const p = e({
    compatConfig: { MODE: 3 },
    name: "SkeletonTitle",
    props: { prefixCls: String, width: { type: [Number, String] } },
    setup: (e) => () => {
      const { prefixCls: n, width: a } = e;
      return t(
        "h3",
        { class: n, style: { width: "number" == typeof a ? `${a}px` : a } },
        null
      );
    },
  }),
  g = e({
    compatConfig: { MODE: 3 },
    name: "SkeletonParagraph",
    props: {
      prefixCls: String,
      width: { type: [Number, String, Array] },
      rows: Number,
    },
    setup: (e) => () => {
      const { prefixCls: n, rows: a } = e,
        l = [...Array(a)].map((n, a) => {
          const l = ((t) => {
            const { width: n, rows: a = 2 } = e;
            return Array.isArray(n) ? n[t] : a - 1 === t ? n : void 0;
          })(a);
          return t(
            "li",
            { key: a, style: { width: "number" == typeof l ? `${l}px` : l } },
            null
          );
        });
      return t("ul", { class: n }, [l]);
    },
  }),
  $ = () => ({
    prefixCls: String,
    size: [String, Number],
    shape: String,
    active: { type: Boolean, default: void 0 },
  }),
  h = (e) => {
    const { prefixCls: a, size: l, shape: o } = e,
      i = n({ [`${a}-lg`]: "large" === l, [`${a}-sm`]: "small" === l }),
      r = n({
        [`${a}-circle`]: "circle" === o,
        [`${a}-square`]: "square" === o,
        [`${a}-round`]: "round" === o,
      }),
      s =
        "number" == typeof l
          ? { width: `${l}px`, height: `${l}px`, lineHeight: `${l}px` }
          : {};
    return t("span", { class: n(a, i, r), style: s }, null);
  };
h.displayName = "SkeletonElement";
const v = new i("ant-skeleton-loading", {
    "0%": { transform: "translateX(-37.5%)" },
    "100%": { transform: "translateX(37.5%)" },
  }),
  m = (e) => ({ height: e, lineHeight: `${e}px` }),
  k = (e) => o({ width: e }, m(e)),
  b = (e) => ({
    position: "relative",
    zIndex: 0,
    overflow: "hidden",
    background: "transparent",
    "&::after": {
      position: "absolute",
      top: 0,
      insetInlineEnd: "-150%",
      bottom: 0,
      insetInlineStart: "-150%",
      background: e.skeletonLoadingBackground,
      animationName: v,
      animationDuration: e.skeletonLoadingMotionDuration,
      animationTimingFunction: "ease",
      animationIterationCount: "infinite",
      content: '""',
    },
  }),
  f = (e) => o({ width: 5 * e, minWidth: 5 * e }, m(e)),
  C = (e) => {
    const {
      skeletonAvatarCls: t,
      color: n,
      controlHeight: a,
      controlHeightLG: l,
      controlHeightSM: i,
    } = e;
    return {
      [`${t}`]: o(
        { display: "inline-block", verticalAlign: "top", background: n },
        k(a)
      ),
      [`${t}${t}-circle`]: { borderRadius: "50%" },
      [`${t}${t}-lg`]: o({}, k(l)),
      [`${t}${t}-sm`]: o({}, k(i)),
    };
  },
  S = (e) => {
    const {
      controlHeight: t,
      borderRadiusSM: n,
      skeletonInputCls: a,
      controlHeightLG: l,
      controlHeightSM: i,
      color: r,
    } = e;
    return {
      [`${a}`]: o(
        {
          display: "inline-block",
          verticalAlign: "top",
          background: r,
          borderRadius: n,
        },
        f(t)
      ),
      [`${a}-lg`]: o({}, f(l)),
      [`${a}-sm`]: o({}, f(i)),
    };
  },
  w = (e) => o({ width: e }, m(e)),
  y = (e) => {
    const {
      skeletonImageCls: t,
      imageSizeBase: n,
      color: a,
      borderRadiusSM: l,
    } = e;
    return {
      [`${t}`]: o(
        o(
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "top",
            background: a,
            borderRadius: l,
          },
          w(2 * n)
        ),
        {
          [`${t}-path`]: { fill: "#bfbfbf" },
          [`${t}-svg`]: o(o({}, w(n)), { maxWidth: 4 * n, maxHeight: 4 * n }),
          [`${t}-svg${t}-svg-circle`]: { borderRadius: "50%" },
        }
      ),
      [`${t}${t}-circle`]: { borderRadius: "50%" },
    };
  },
  x = (e, t, n) => {
    const { skeletonButtonCls: a } = e;
    return {
      [`${n}${a}-circle`]: { width: t, minWidth: t, borderRadius: "50%" },
      [`${n}${a}-round`]: { borderRadius: t },
    };
  },
  B = (e) => o({ width: 2 * e, minWidth: 2 * e }, m(e)),
  M = (e) => {
    const {
      borderRadiusSM: t,
      skeletonButtonCls: n,
      controlHeight: a,
      controlHeightLG: l,
      controlHeightSM: i,
      color: r,
    } = e;
    return o(
      o(
        o(
          o(
            o(
              {
                [`${n}`]: o(
                  {
                    display: "inline-block",
                    verticalAlign: "top",
                    background: r,
                    borderRadius: t,
                    width: 2 * a,
                    minWidth: 2 * a,
                  },
                  B(a)
                ),
              },
              x(e, a, n)
            ),
            { [`${n}-lg`]: o({}, B(l)) }
          ),
          x(e, l, `${n}-lg`)
        ),
        { [`${n}-sm`]: o({}, B(i)) }
      ),
      x(e, i, `${n}-sm`)
    );
  },
  H = (e) => {
    const {
      componentCls: t,
      skeletonAvatarCls: n,
      skeletonTitleCls: a,
      skeletonParagraphCls: l,
      skeletonButtonCls: i,
      skeletonInputCls: r,
      skeletonImageCls: s,
      controlHeight: c,
      controlHeightLG: u,
      controlHeightSM: d,
      color: p,
      padding: g,
      marginSM: $,
      borderRadius: h,
      skeletonTitleHeight: v,
      skeletonBlockRadius: m,
      skeletonParagraphLineHeight: f,
      controlHeightXS: w,
      skeletonParagraphMarginTop: x,
    } = e;
    return {
      [`${t}`]: {
        display: "table",
        width: "100%",
        [`${t}-header`]: {
          display: "table-cell",
          paddingInlineEnd: g,
          verticalAlign: "top",
          [`${n}`]: o(
            { display: "inline-block", verticalAlign: "top", background: p },
            k(c)
          ),
          [`${n}-circle`]: { borderRadius: "50%" },
          [`${n}-lg`]: o({}, k(u)),
          [`${n}-sm`]: o({}, k(d)),
        },
        [`${t}-content`]: {
          display: "table-cell",
          width: "100%",
          verticalAlign: "top",
          [`${a}`]: {
            width: "100%",
            height: v,
            background: p,
            borderRadius: m,
            [`+ ${l}`]: { marginBlockStart: d },
          },
          [`${l}`]: {
            padding: 0,
            "> li": {
              width: "100%",
              height: f,
              listStyle: "none",
              background: p,
              borderRadius: m,
              "+ li": { marginBlockStart: w },
            },
          },
          [`${l}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
            width: "61%",
          },
        },
        [`&-round ${t}-content`]: { [`${a}, ${l} > li`]: { borderRadius: h } },
      },
      [`${t}-with-avatar ${t}-content`]: {
        [`${a}`]: { marginBlockStart: $, [`+ ${l}`]: { marginBlockStart: x } },
      },
      [`${t}${t}-element`]: o(
        o(o(o({ display: "inline-block", width: "auto" }, M(e)), C(e)), S(e)),
        y(e)
      ),
      [`${t}${t}-block`]: {
        width: "100%",
        [`${i}`]: { width: "100%" },
        [`${r}`]: { width: "100%" },
      },
      [`${t}${t}-active`]: {
        [`\n        ${a},\n        ${l} > li,\n        ${n},\n        ${i},\n        ${r},\n        ${s}\n      `]:
          o({}, b(e)),
      },
    };
  },
  A = a(
    "Skeleton",
    (e) => {
      const { componentCls: t } = e,
        n = l(e, {
          skeletonAvatarCls: `${t}-avatar`,
          skeletonTitleCls: `${t}-title`,
          skeletonParagraphCls: `${t}-paragraph`,
          skeletonButtonCls: `${t}-button`,
          skeletonInputCls: `${t}-input`,
          skeletonImageCls: `${t}-image`,
          imageSizeBase: 1.5 * e.controlHeight,
          skeletonTitleHeight: e.controlHeight / 2,
          skeletonBlockRadius: e.borderRadiusSM,
          skeletonParagraphLineHeight: e.controlHeight / 2,
          skeletonParagraphMarginTop: e.marginLG + e.marginXXS,
          borderRadius: 100,
          skeletonLoadingBackground: `linear-gradient(90deg, ${e.color} 25%, ${e.colorGradientEnd} 37%, ${e.color} 63%)`,
          skeletonLoadingMotionDuration: "1.4s",
        });
      return [H(n)];
    },
    (e) => {
      const { colorFillContent: t, colorFill: n } = e;
      return { color: t, colorGradientEnd: n };
    }
  );
function R(e) {
  return e && "object" == typeof e ? e : {};
}
const I = e({
    compatConfig: { MODE: 3 },
    name: "ASkeleton",
    props: r(
      {
        active: { type: Boolean, default: void 0 },
        loading: { type: Boolean, default: void 0 },
        prefixCls: String,
        avatar: { type: [Boolean, Object], default: void 0 },
        title: { type: [Boolean, Object], default: void 0 },
        paragraph: { type: [Boolean, Object], default: void 0 },
        round: { type: Boolean, default: void 0 },
      },
      { avatar: !1, title: !0, paragraph: !0 }
    ),
    setup(e, a) {
      let { slots: l } = a;
      const { prefixCls: i, direction: r } = s("skeleton", e),
        [c, u] = A(i);
      return () => {
        var a;
        const {
            loading: s,
            avatar: d,
            title: $,
            paragraph: v,
            active: m,
            round: k,
          } = e,
          b = i.value;
        if (s || void 0 === e.loading) {
          const e = !!d || "" === d,
            a = !!$ || "" === $,
            l = !!v || "" === v;
          let i, s;
          if (e) {
            const e = o(
              o(
                { prefixCls: `${b}-avatar` },
                (function (e, t) {
                  return e && !t
                    ? { size: "large", shape: "square" }
                    : { size: "large", shape: "circle" };
                })(a, l)
              ),
              R(d)
            );
            i = t("div", { class: `${b}-header` }, [t(h, e, null)]);
          }
          if (a || l) {
            let n, i;
            if (a) {
              const a = o(
                o(
                  { prefixCls: `${b}-title` },
                  (function (e, t) {
                    return !e && t
                      ? { width: "38%" }
                      : e && t
                      ? { width: "50%" }
                      : {};
                  })(e, l)
                ),
                R($)
              );
              n = t(p, a, null);
            }
            if (l) {
              const n = o(
                o(
                  { prefixCls: `${b}-paragraph` },
                  (function (e, t) {
                    const n = {};
                    return (
                      (e && t) || (n.width = "61%"),
                      (n.rows = !e && t ? 3 : 2),
                      n
                    );
                  })(e, a)
                ),
                R(v)
              );
              i = t(g, n, null);
            }
            s = t("div", { class: `${b}-content` }, [n, i]);
          }
          const f = n(b, {
            [`${b}-with-avatar`]: e,
            [`${b}-active`]: m,
            [`${b}-rtl`]: "rtl" === r.value,
            [`${b}-round`]: k,
            [u.value]: !0,
          });
          return c(t("div", { class: f }, [i, s]));
        }
        return null === (a = l.default) || void 0 === a ? void 0 : a.call(l);
      };
    },
  }),
  z = e({
    compatConfig: { MODE: 3 },
    name: "ASkeletonButton",
    props: r(o(o({}, $()), { size: String, block: Boolean }), {
      size: "default",
    }),
    setup(e) {
      const { prefixCls: a } = s("skeleton", e),
        [l, o] = A(a),
        i = c(() =>
          n(
            a.value,
            `${a.value}-element`,
            { [`${a.value}-active`]: e.active, [`${a.value}-block`]: e.block },
            o.value
          )
        );
      return () =>
        l(
          t("div", { class: i.value }, [
            t(h, u(u({}, e), {}, { prefixCls: `${a.value}-button` }), null),
          ])
        );
    },
  }),
  q = e({
    compatConfig: { MODE: 3 },
    name: "ASkeletonInput",
    props: o(o({}, d($(), ["shape"])), { size: String, block: Boolean }),
    setup(e) {
      const { prefixCls: a } = s("skeleton", e),
        [l, o] = A(a),
        i = c(() =>
          n(
            a.value,
            `${a.value}-element`,
            { [`${a.value}-active`]: e.active, [`${a.value}-block`]: e.block },
            o.value
          )
        );
      return () =>
        l(
          t("div", { class: i.value }, [
            t(h, u(u({}, e), {}, { prefixCls: `${a.value}-input` }), null),
          ])
        );
    },
  }),
  E = e({
    compatConfig: { MODE: 3 },
    name: "ASkeletonImage",
    props: d($(), ["size", "shape", "active"]),
    setup(e) {
      const { prefixCls: a } = s("skeleton", e),
        [l, o] = A(a),
        i = c(() => n(a.value, `${a.value}-element`, o.value));
      return () =>
        l(
          t("div", { class: i.value }, [
            t("div", { class: `${a.value}-image` }, [
              t(
                "svg",
                {
                  viewBox: "0 0 1098 1024",
                  xmlns: "http://www.w3.org/2000/svg",
                  class: `${a.value}-image-svg`,
                },
                [
                  t(
                    "path",
                    {
                      d: "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",
                      class: `${a.value}-image-path`,
                    },
                    null
                  ),
                ]
              ),
            ]),
          ])
        );
    },
  }),
  L = e({
    compatConfig: { MODE: 3 },
    name: "ASkeletonAvatar",
    props: r(o(o({}, $()), { shape: String }), {
      size: "default",
      shape: "circle",
    }),
    setup(e) {
      const { prefixCls: a } = s("skeleton", e),
        [l, o] = A(a),
        i = c(() =>
          n(
            a.value,
            `${a.value}-element`,
            { [`${a.value}-active`]: e.active },
            o.value
          )
        );
      return () =>
        l(
          t("div", { class: i.value }, [
            t(h, u(u({}, e), {}, { prefixCls: `${a.value}-avatar` }), null),
          ])
        );
    },
  });
(I.Button = z),
  (I.Avatar = L),
  (I.Input = q),
  (I.Image = E),
  (I.Title = p),
  (I.install = function (e) {
    return (
      e.component(I.name, I),
      e.component(I.Button.name, z),
      e.component(I.Avatar.name, L),
      e.component(I.Input.name, q),
      e.component(I.Image.name, E),
      e.component(I.Title.name, p),
      e
    );
  });
export { I as S, z as a, q as b };

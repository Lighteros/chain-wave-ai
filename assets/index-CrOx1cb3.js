import {
  as as o,
  c as t,
  at as e,
  r as a,
  aR as n,
  aP as r,
  aJ as l,
  aw as i,
  aS as s,
  b1 as u,
  eO as c,
  cm as d,
  aU as p,
  aV as m,
  aW as g,
  ca as b,
  aX as v,
  aZ as f,
  b3 as $,
  aT as h,
  cj as S,
  c8 as y,
  cn as C,
  cp as x,
  bY as w,
  co as O,
} from "./index-CcOpQHgp.js";
import { i as k } from "./isNumeric-DFkNItwV.js";
function z(o) {
  let t,
    { prefixCls: e, value: a, current: n, offset: r = 0 } = o;
  return (
    r && (t = { position: "absolute", top: `${r}00%`, left: 0 }),
    i("p", { style: t, class: s(`${e}-only-unit`, { current: n }) }, [a])
  );
}
function N(o, t, e) {
  let a = o,
    n = 0;
  for (; (a + 10) % 10 !== t; ) (a += e), (n += e);
  return n;
}
const B = o({
  compatConfig: { MODE: 3 },
  name: "SingleNumber",
  props: { prefixCls: String, value: String, count: Number },
  setup(o) {
    const s = t(() => Number(o.value)),
      u = t(() => Math.abs(o.count)),
      c = e({ prevValue: s.value, prevCount: u.value }),
      d = () => {
        (c.prevValue = s.value), (c.prevCount = u.value);
      },
      p = a();
    return (
      n(
        s,
        () => {
          clearTimeout(p.value),
            (p.value = setTimeout(() => {
              d();
            }, 1e3));
        },
        { flush: "post" }
      ),
      r(() => {
        clearTimeout(p.value);
      }),
      () => {
        let t,
          e = {};
        const a = s.value;
        if (c.prevValue === a || Number.isNaN(a) || Number.isNaN(c.prevValue))
          (t = [z(l(l({}, o), { current: !0 }))]), (e = { transition: "none" });
        else {
          t = [];
          const n = a + 10,
            r = [];
          for (let o = a; o <= n; o += 1) r.push(o);
          const i = r.findIndex((o) => o % 10 === c.prevValue);
          t = r.map((t, e) => {
            const a = t % 10;
            return z(
              l(l({}, o), { value: a, offset: e - i, current: e === i })
            );
          });
          const s = c.prevCount < u.value ? 1 : -1;
          e = { transform: `translateY(${-N(c.prevValue, a, s)}00%)` };
        }
        return i(
          "span",
          {
            class: `${o.prefixCls}-only`,
            style: e,
            onTransitionend: () => d(),
          },
          [t]
        );
      }
    );
  },
});
var D = function (o, t) {
  var e = {};
  for (var a in o)
    Object.prototype.hasOwnProperty.call(o, a) &&
      t.indexOf(a) < 0 &&
      (e[a] = o[a]);
  if (null != o && "function" == typeof Object.getOwnPropertySymbols) {
    var n = 0;
    for (a = Object.getOwnPropertySymbols(o); n < a.length; n++)
      t.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(o, a[n]) &&
        (e[a[n]] = o[a[n]]);
  }
  return e;
};
const E = o({
    compatConfig: { MODE: 3 },
    name: "ScrollNumber",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      count: p.any,
      component: String,
      title: p.any,
      show: Boolean,
    },
    setup(o, t) {
      let { attrs: e, slots: a } = t;
      const { prefixCls: n } = u("scroll-number", o);
      return () => {
        var t;
        const r = l(l({}, o), e),
          {
            prefixCls: u,
            count: p,
            title: m,
            show: g,
            component: b = "sup",
            class: v,
            style: f,
          } = r,
          $ = D(r, [
            "prefixCls",
            "count",
            "title",
            "show",
            "component",
            "class",
            "style",
          ]),
          h = l(l({}, $), {
            style: f,
            "data-show": o.show,
            class: s(n.value, v),
            title: m,
          });
        let S = p;
        if (p && Number(p) % 1 == 0) {
          const o = String(p).split("");
          S = o.map((t, e) =>
            i(
              B,
              {
                prefixCls: n.value,
                count: Number(p),
                value: t,
                key: o.length - e,
              },
              null
            )
          );
        }
        f &&
          f.borderColor &&
          (h.style = l(l({}, f), {
            boxShadow: `0 0 0 1px ${f.borderColor} inset`,
          }));
        const y = c(
          null === (t = a.default) || void 0 === t ? void 0 : t.call(a)
        );
        return y && y.length
          ? d(y, { class: s(`${n.value}-custom-component`) }, !1)
          : i(b, h, { default: () => [S] });
      };
    },
  }),
  I = new f("antStatusProcessing", {
    "0%": { transform: "scale(0.8)", opacity: 0.5 },
    "100%": { transform: "scale(2.4)", opacity: 0 },
  }),
  T = new f("antZoomBadgeIn", {
    "0%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
    "100%": { transform: "scale(1) translate(50%, -50%)" },
  }),
  H = new f("antZoomBadgeOut", {
    "0%": { transform: "scale(1) translate(50%, -50%)" },
    "100%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
  }),
  R = new f("antNoWrapperZoomBadgeIn", {
    "0%": { transform: "scale(0)", opacity: 0 },
    "100%": { transform: "scale(1)" },
  }),
  F = new f("antNoWrapperZoomBadgeOut", {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(0)", opacity: 0 },
  }),
  P = new f("antBadgeLoadingCircle", {
    "0%": { transformOrigin: "50%" },
    "100%": {
      transform: "translate(50%, -50%) rotate(360deg)",
      transformOrigin: "50%",
    },
  }),
  W = (o) => {
    const {
        componentCls: t,
        iconCls: e,
        antCls: a,
        badgeFontHeight: n,
        badgeShadowSize: r,
        badgeHeightSm: i,
        motionDurationSlow: s,
        badgeStatusSize: u,
        marginXS: c,
        badgeRibbonOffset: d,
      } = o,
      p = `${a}-scroll-number`,
      m = `${a}-ribbon`,
      g = `${a}-ribbon-wrapper`,
      f = b(o, (o, e) => {
        let { darkColor: a } = e;
        return {
          [`&${t} ${t}-color-${o}`]: {
            background: a,
            [`&:not(${t}-count)`]: { color: a },
          },
        };
      }),
      $ = b(o, (o, t) => {
        let { darkColor: e } = t;
        return { [`&${m}-color-${o}`]: { background: e, color: e } };
      });
    return {
      [t]: l(
        l(
          l(l({}, v(o)), {
            position: "relative",
            display: "inline-block",
            width: "fit-content",
            lineHeight: 1,
            [`${t}-count`]: {
              zIndex: o.badgeZIndex,
              minWidth: o.badgeHeight,
              height: o.badgeHeight,
              color: o.badgeTextColor,
              fontWeight: o.badgeFontWeight,
              fontSize: o.badgeFontSize,
              lineHeight: `${o.badgeHeight}px`,
              whiteSpace: "nowrap",
              textAlign: "center",
              background: o.badgeColor,
              borderRadius: o.badgeHeight / 2,
              boxShadow: `0 0 0 ${r}px ${o.badgeShadowColor}`,
              transition: `background ${o.motionDurationMid}`,
              a: { color: o.badgeTextColor },
              "a:hover": { color: o.badgeTextColor },
              "a:hover &": { background: o.badgeColorHover },
            },
            [`${t}-count-sm`]: {
              minWidth: i,
              height: i,
              fontSize: o.badgeFontSizeSm,
              lineHeight: `${i}px`,
              borderRadius: i / 2,
            },
            [`${t}-multiple-words`]: { padding: `0 ${o.paddingXS}px` },
            [`${t}-dot`]: {
              zIndex: o.badgeZIndex,
              width: o.badgeDotSize,
              minWidth: o.badgeDotSize,
              height: o.badgeDotSize,
              background: o.badgeColor,
              borderRadius: "100%",
              boxShadow: `0 0 0 ${r}px ${o.badgeShadowColor}`,
            },
            [`${t}-dot${p}`]: { transition: `background ${s}` },
            [`${t}-count, ${t}-dot, ${p}-custom-component`]: {
              position: "absolute",
              top: 0,
              insetInlineEnd: 0,
              transform: "translate(50%, -50%)",
              transformOrigin: "100% 0%",
              [`&${e}-spin`]: {
                animationName: P,
                animationDuration: "1s",
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
              },
            },
            [`&${t}-status`]: {
              lineHeight: "inherit",
              verticalAlign: "baseline",
              [`${t}-status-dot`]: {
                position: "relative",
                top: -1,
                display: "inline-block",
                width: u,
                height: u,
                verticalAlign: "middle",
                borderRadius: "50%",
              },
              [`${t}-status-success`]: { backgroundColor: o.colorSuccess },
              [`${t}-status-processing`]: {
                overflow: "visible",
                color: o.colorPrimary,
                backgroundColor: o.colorPrimary,
                "&::after": {
                  position: "absolute",
                  top: 0,
                  insetInlineStart: 0,
                  width: "100%",
                  height: "100%",
                  borderWidth: r,
                  borderStyle: "solid",
                  borderColor: "inherit",
                  borderRadius: "50%",
                  animationName: I,
                  animationDuration: o.badgeProcessingDuration,
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out",
                  content: '""',
                },
              },
              [`${t}-status-default`]: {
                backgroundColor: o.colorTextPlaceholder,
              },
              [`${t}-status-error`]: { backgroundColor: o.colorError },
              [`${t}-status-warning`]: { backgroundColor: o.colorWarning },
              [`${t}-status-text`]: {
                marginInlineStart: c,
                color: o.colorText,
                fontSize: o.fontSize,
              },
            },
          }),
          f
        ),
        {
          [`${t}-zoom-appear, ${t}-zoom-enter`]: {
            animationName: T,
            animationDuration: o.motionDurationSlow,
            animationTimingFunction: o.motionEaseOutBack,
            animationFillMode: "both",
          },
          [`${t}-zoom-leave`]: {
            animationName: H,
            animationDuration: o.motionDurationSlow,
            animationTimingFunction: o.motionEaseOutBack,
            animationFillMode: "both",
          },
          [`&${t}-not-a-wrapper`]: {
            [`${t}-zoom-appear, ${t}-zoom-enter`]: {
              animationName: R,
              animationDuration: o.motionDurationSlow,
              animationTimingFunction: o.motionEaseOutBack,
            },
            [`${t}-zoom-leave`]: {
              animationName: F,
              animationDuration: o.motionDurationSlow,
              animationTimingFunction: o.motionEaseOutBack,
            },
            [`&:not(${t}-status)`]: { verticalAlign: "middle" },
            [`${p}-custom-component, ${t}-count`]: { transform: "none" },
            [`${p}-custom-component, ${p}`]: {
              position: "relative",
              top: "auto",
              display: "block",
              transformOrigin: "50% 50%",
            },
          },
          [`${p}`]: {
            overflow: "hidden",
            [`${p}-only`]: {
              position: "relative",
              display: "inline-block",
              height: o.badgeHeight,
              transition: `all ${o.motionDurationSlow} ${o.motionEaseOutBack}`,
              WebkitTransformStyle: "preserve-3d",
              WebkitBackfaceVisibility: "hidden",
              [`> p${p}-only-unit`]: {
                height: o.badgeHeight,
                margin: 0,
                WebkitTransformStyle: "preserve-3d",
                WebkitBackfaceVisibility: "hidden",
              },
            },
            [`${p}-symbol`]: { verticalAlign: "top" },
          },
          "&-rtl": {
            direction: "rtl",
            [`${t}-count, ${t}-dot, ${p}-custom-component`]: {
              transform: "translate(-50%, -50%)",
            },
          },
        }
      ),
      [`${g}`]: { position: "relative" },
      [`${m}`]: l(
        l(
          l(l({}, v(o)), {
            position: "absolute",
            top: c,
            padding: `0 ${o.paddingXS}px`,
            color: o.colorPrimary,
            lineHeight: `${n}px`,
            whiteSpace: "nowrap",
            backgroundColor: o.colorPrimary,
            borderRadius: o.borderRadiusSM,
            [`${m}-text`]: { color: o.colorTextLightSolid },
            [`${m}-corner`]: {
              position: "absolute",
              top: "100%",
              width: d,
              height: d,
              color: "currentcolor",
              border: d / 2 + "px solid",
              transform: o.badgeRibbonCornerTransform,
              transformOrigin: "top",
              filter: o.badgeRibbonCornerFilter,
            },
          }),
          $
        ),
        {
          [`&${m}-placement-end`]: {
            insetInlineEnd: -d,
            borderEndEndRadius: 0,
            [`${m}-corner`]: {
              insetInlineEnd: 0,
              borderInlineEndColor: "transparent",
              borderBlockEndColor: "transparent",
            },
          },
          [`&${m}-placement-start`]: {
            insetInlineStart: -d,
            borderEndStartRadius: 0,
            [`${m}-corner`]: {
              insetInlineStart: 0,
              borderBlockEndColor: "transparent",
              borderInlineStartColor: "transparent",
            },
          },
          "&-rtl": { direction: "rtl" },
        }
      ),
    };
  },
  j = m("Badge", (o) => {
    const {
        fontSize: t,
        lineHeight: e,
        fontSizeSM: a,
        lineWidth: n,
        marginXS: r,
        colorBorderBg: l,
      } = o,
      i = Math.round(t * e),
      s = n,
      u = i - 2 * s,
      c = o.colorBgContainer,
      d = a,
      p = o.colorError,
      m = o.colorErrorHover,
      b = g(o, {
        badgeFontHeight: i,
        badgeShadowSize: s,
        badgeZIndex: "auto",
        badgeHeight: u,
        badgeTextColor: c,
        badgeFontWeight: "normal",
        badgeFontSize: d,
        badgeColor: p,
        badgeColorHover: m,
        badgeShadowColor: l,
        badgeHeightSm: t,
        badgeDotSize: a / 2,
        badgeFontSizeSm: a,
        badgeStatusSize: a / 2,
        badgeProcessingDuration: "1.2s",
        badgeRibbonOffset: r,
        badgeRibbonCornerTransform: "scaleY(0.75)",
        badgeRibbonCornerFilter: "brightness(75%)",
      });
    return [W(b)];
  });
var A = function (o, t) {
  var e = {};
  for (var a in o)
    Object.prototype.hasOwnProperty.call(o, a) &&
      t.indexOf(a) < 0 &&
      (e[a] = o[a]);
  if (null != o && "function" == typeof Object.getOwnPropertySymbols) {
    var n = 0;
    for (a = Object.getOwnPropertySymbols(o); n < a.length; n++)
      t.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(o, a[n]) &&
        (e[a[n]] = o[a[n]]);
  }
  return e;
};
const M = o({
    compatConfig: { MODE: 3 },
    name: "ABadgeRibbon",
    inheritAttrs: !1,
    props: {
      prefix: String,
      color: { type: String },
      text: p.any,
      placement: { type: String, default: "end" },
    },
    slots: Object,
    setup(o, e) {
      let { attrs: a, slots: n } = e;
      const { prefixCls: r, direction: s } = u("ribbon", o),
        [c, d] = j(r),
        p = t(() => $(o.color, !1)),
        m = t(() => [
          r.value,
          `${r.value}-placement-${o.placement}`,
          {
            [`${r.value}-rtl`]: "rtl" === s.value,
            [`${r.value}-color-${o.color}`]: p.value,
          },
        ]);
      return () => {
        var t, e;
        const { class: s, style: u } = a,
          g = A(a, ["class", "style"]),
          b = {},
          v = {};
        return (
          o.color &&
            !p.value &&
            ((b.background = o.color), (v.color = o.color)),
          c(
            i("div", h({ class: `${r.value}-wrapper ${d.value}` }, g), [
              null === (t = n.default) || void 0 === t ? void 0 : t.call(n),
              i(
                "div",
                { class: [m.value, s, d.value], style: l(l({}, b), u) },
                [
                  i("span", { class: `${r.value}-text` }, [
                    o.text ||
                      (null === (e = n.text) || void 0 === e
                        ? void 0
                        : e.call(n)),
                  ]),
                  i("div", { class: `${r.value}-corner`, style: v }, null),
                ]
              ),
            ])
          )
        );
      };
    },
  }),
  Z = o({
    compatConfig: { MODE: 3 },
    name: "ABadge",
    Ribbon: M,
    inheritAttrs: !1,
    props: {
      count: p.any.def(null),
      showZero: { type: Boolean, default: void 0 },
      overflowCount: { type: Number, default: 99 },
      dot: { type: Boolean, default: void 0 },
      prefixCls: String,
      scrollNumberPrefixCls: String,
      status: { type: String },
      size: { type: String, default: "default" },
      color: String,
      text: p.any,
      offset: Array,
      numberStyle: { type: Object, default: void 0 },
      title: String,
    },
    slots: Object,
    setup(o, e) {
      let { slots: r, attrs: c } = e;
      const { prefixCls: p, direction: m } = u("badge", o),
        [g, b] = j(p),
        v = t(() =>
          o.count > o.overflowCount ? `${o.overflowCount}+` : o.count
        ),
        f = t(() => "0" === v.value || 0 === v.value),
        z = t(() => null === o.count || (f.value && !o.showZero)),
        N = t(
          () =>
            ((null !== o.status && void 0 !== o.status) ||
              (null !== o.color && void 0 !== o.color)) &&
            z.value
        ),
        B = t(() => o.dot && !f.value),
        D = t(() => (B.value ? "" : v.value)),
        I = t(
          () =>
            (null === D.value ||
              void 0 === D.value ||
              "" === D.value ||
              (f.value && !o.showZero)) &&
            !B.value
        ),
        T = a(o.count),
        H = a(D.value),
        R = a(B.value);
      n(
        [() => o.count, D, B],
        () => {
          I.value ||
            ((T.value = o.count), (H.value = D.value), (R.value = B.value));
        },
        { immediate: !0 }
      );
      const F = t(() => $(o.color, !1)),
        P = t(() => ({
          [`${p.value}-status-dot`]: N.value,
          [`${p.value}-status-${o.status}`]: !!o.status,
          [`${p.value}-color-${o.color}`]: F.value,
        })),
        W = t(() =>
          o.color && !F.value ? { background: o.color, color: o.color } : {}
        ),
        A = t(() => ({
          [`${p.value}-dot`]: R.value,
          [`${p.value}-count`]: !R.value,
          [`${p.value}-count-sm`]: "small" === o.size,
          [`${p.value}-multiple-words`]:
            !R.value && H.value && H.value.toString().length > 1,
          [`${p.value}-status-${o.status}`]: !!o.status,
          [`${p.value}-color-${o.color}`]: F.value,
        }));
      return () => {
        var t, e;
        const { offset: a, title: n, color: u } = o,
          v = c.style,
          f = S(r, o, "text"),
          $ = p.value,
          z = T.value;
        let B = y(
          null === (t = r.default) || void 0 === t ? void 0 : t.call(r)
        );
        B = B.length ? B : null;
        const D = !(I.value && !r.count),
          R = (() => {
            if (!a) return l({}, v);
            const o = { marginTop: k(a[1]) ? `${a[1]}px` : a[1] };
            return (
              "rtl" === m.value
                ? (o.left = `${parseInt(a[0], 10)}px`)
                : (o.right = -parseInt(a[0], 10) + "px"),
              l(l({}, o), v)
            );
          })(),
          j =
            null != n
              ? n
              : "string" == typeof z || "number" == typeof z
              ? z
              : void 0,
          M = D || !f ? null : i("span", { class: `${$}-status-text` }, [f]),
          Z =
            "object" == typeof z || (void 0 === z && r.count)
              ? d(
                  null != z
                    ? z
                    : null === (e = r.count) || void 0 === e
                    ? void 0
                    : e.call(r),
                  { style: R },
                  !1
                )
              : null,
          V = s(
            $,
            {
              [`${$}-status`]: N.value,
              [`${$}-not-a-wrapper`]: !B,
              [`${$}-rtl`]: "rtl" === m.value,
            },
            c.class,
            b.value
          );
        if (!B && N.value) {
          const o = R.color;
          return g(
            i("span", h(h({}, c), {}, { class: V, style: R }), [
              i("span", { class: P.value, style: W.value }, null),
              i("span", { style: { color: o }, class: `${$}-status-text` }, [
                f,
              ]),
            ])
          );
        }
        const X = C(B ? `${$}-zoom` : "", { appear: !1 });
        let Y = l(l({}, R), o.numberStyle);
        return (
          u && !F.value && ((Y = Y || {}), (Y.background = u)),
          g(
            i("span", h(h({}, c), {}, { class: V }), [
              B,
              i(x, X, {
                default: () => [
                  w(
                    i(
                      E,
                      {
                        prefixCls: o.scrollNumberPrefixCls,
                        show: D,
                        class: A.value,
                        count: H.value,
                        title: j,
                        style: Y,
                        key: "scrollNumber",
                      },
                      { default: () => [Z] }
                    ),
                    [[O, D]]
                  ),
                ],
              }),
              M,
            ])
          )
        );
      };
    },
  });
Z.install = function (o) {
  return o.component(Z.name, Z), o.component(M.name, M), o;
};
export { Z as B };

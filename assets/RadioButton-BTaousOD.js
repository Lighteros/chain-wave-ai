import {
  bT as o,
  bq as e,
  aV as r,
  aW as t,
  aJ as a,
  aX as i,
  aY as n,
  aZ as l,
  as as d,
  ce as s,
  e3 as c,
  cf as u,
  c as b,
  r as p,
  b1 as h,
  ch as g,
  aS as v,
  aw as C,
  aT as f,
  d$ as S,
  aU as k,
  e1 as $,
  aR as m,
  e2 as y,
  e0 as B,
  n as x,
} from "./index-DPRREYlk.js";
import { V as w } from "./Checkbox-KylR2T3k.js";
const I = Symbol("radioGroupContextKey"),
  D = Symbol("radioOptionTypeContextKey"),
  R = new l("antRadioEffect", {
    "0%": { transform: "scale(1)", opacity: 0.5 },
    "100%": { transform: "scale(1.6)", opacity: 0 },
  }),
  E = (o) => {
    const { componentCls: e, antCls: r } = o,
      t = `${e}-group`;
    return {
      [t]: a(a({}, i(o)), {
        display: "inline-block",
        fontSize: 0,
        [`&${t}-rtl`]: { direction: "rtl" },
        [`${r}-badge ${r}-badge-count`]: { zIndex: 1 },
        [`> ${r}-badge:not(:first-child) > ${r}-button-wrapper`]: {
          borderInlineStart: "none",
        },
      }),
    };
  },
  z = (o) => {
    const {
        componentCls: e,
        radioWrapperMarginRight: r,
        radioCheckedColor: t,
        radioSize: l,
        motionDurationSlow: d,
        motionDurationMid: s,
        motionEaseInOut: c,
        motionEaseInOutCirc: u,
        radioButtonBg: b,
        colorBorder: p,
        lineWidth: h,
        radioDotSize: g,
        colorBgContainerDisabled: v,
        colorTextDisabled: C,
        paddingXS: f,
        radioDotDisabledColor: S,
        lineType: k,
        radioDotDisabledSize: $,
        wireframe: m,
        colorWhite: y,
      } = o,
      B = `${e}-inner`;
    return {
      [`${e}-wrapper`]: a(a({}, i(o)), {
        position: "relative",
        display: "inline-flex",
        alignItems: "baseline",
        marginInlineStart: 0,
        marginInlineEnd: r,
        cursor: "pointer",
        [`&${e}-wrapper-rtl`]: { direction: "rtl" },
        "&-disabled": { cursor: "not-allowed", color: o.colorTextDisabled },
        "&::after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: '"\\a0"',
        },
        [`${e}-checked::after`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: "100%",
          height: "100%",
          border: `${h}px ${k} ${t}`,
          borderRadius: "50%",
          visibility: "hidden",
          animationName: R,
          animationDuration: d,
          animationTimingFunction: c,
          animationFillMode: "both",
          content: '""',
        },
        [e]: a(a({}, i(o)), {
          position: "relative",
          display: "inline-block",
          outline: "none",
          cursor: "pointer",
          alignSelf: "center",
        }),
        [`${e}-wrapper:hover &,\n        &:hover ${B}`]: { borderColor: t },
        [`${e}-input:focus-visible + ${B}`]: a({}, n(o)),
        [`${e}:hover::after, ${e}-wrapper:hover &::after`]: {
          visibility: "visible",
        },
        [`${e}-inner`]: {
          "&::after": {
            boxSizing: "border-box",
            position: "absolute",
            insetBlockStart: "50%",
            insetInlineStart: "50%",
            display: "block",
            width: l,
            height: l,
            marginBlockStart: l / -2,
            marginInlineStart: l / -2,
            backgroundColor: m ? t : y,
            borderBlockStart: 0,
            borderInlineStart: 0,
            borderRadius: l,
            transform: "scale(0)",
            opacity: 0,
            transition: `all ${d} ${u}`,
            content: '""',
          },
          boxSizing: "border-box",
          position: "relative",
          insetBlockStart: 0,
          insetInlineStart: 0,
          display: "block",
          width: l,
          height: l,
          backgroundColor: b,
          borderColor: p,
          borderStyle: "solid",
          borderWidth: h,
          borderRadius: "50%",
          transition: `all ${s}`,
        },
        [`${e}-input`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          insetBlockEnd: 0,
          insetInlineStart: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
        },
        [`${e}-checked`]: {
          [B]: {
            borderColor: t,
            backgroundColor: m ? b : t,
            "&::after": {
              transform: `scale(${g / l})`,
              opacity: 1,
              transition: `all ${d} ${u}`,
            },
          },
        },
        [`${e}-disabled`]: {
          cursor: "not-allowed",
          [B]: {
            backgroundColor: v,
            borderColor: p,
            cursor: "not-allowed",
            "&::after": { backgroundColor: S },
          },
          [`${e}-input`]: { cursor: "not-allowed" },
          [`${e}-disabled + span`]: { color: C, cursor: "not-allowed" },
          [`&${e}-checked`]: {
            [B]: { "&::after": { transform: `scale(${$ / l})` } },
          },
        },
        [`span${e} + *`]: { paddingInlineStart: f, paddingInlineEnd: f },
      }),
    };
  },
  O = (o) => {
    const {
      radioButtonColor: e,
      controlHeight: r,
      componentCls: t,
      lineWidth: i,
      lineType: l,
      colorBorder: d,
      motionDurationSlow: s,
      motionDurationMid: c,
      radioButtonPaddingHorizontal: u,
      fontSize: b,
      radioButtonBg: p,
      fontSizeLG: h,
      controlHeightLG: g,
      controlHeightSM: v,
      paddingXS: C,
      borderRadius: f,
      borderRadiusSM: S,
      borderRadiusLG: k,
      radioCheckedColor: $,
      radioButtonCheckedBg: m,
      radioButtonHoverColor: y,
      radioButtonActiveColor: B,
      radioSolidCheckedColor: x,
      colorTextDisabled: w,
      colorBgContainerDisabled: I,
      radioDisabledButtonCheckedColor: D,
      radioDisabledButtonCheckedBg: R,
    } = o;
    return {
      [`${t}-button-wrapper`]: {
        position: "relative",
        display: "inline-block",
        height: r,
        margin: 0,
        paddingInline: u,
        paddingBlock: 0,
        color: e,
        fontSize: b,
        lineHeight: r - 2 * i + "px",
        background: p,
        border: `${i}px ${l} ${d}`,
        borderBlockStartWidth: i + 0.02,
        borderInlineStartWidth: 0,
        borderInlineEndWidth: i,
        cursor: "pointer",
        transition: [
          `color ${c}`,
          `background ${c}`,
          `border-color ${c}`,
          `box-shadow ${c}`,
        ].join(","),
        a: { color: e },
        [`> ${t}-button`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
        },
        "&:not(:first-child)": {
          "&::before": {
            position: "absolute",
            insetBlockStart: -i,
            insetInlineStart: -i,
            display: "block",
            boxSizing: "content-box",
            width: 1,
            height: "100%",
            paddingBlock: i,
            paddingInline: 0,
            backgroundColor: d,
            transition: `background-color ${s}`,
            content: '""',
          },
        },
        "&:first-child": {
          borderInlineStart: `${i}px ${l} ${d}`,
          borderStartStartRadius: f,
          borderEndStartRadius: f,
        },
        "&:last-child": { borderStartEndRadius: f, borderEndEndRadius: f },
        "&:first-child:last-child": { borderRadius: f },
        [`${t}-group-large &`]: {
          height: g,
          fontSize: h,
          lineHeight: g - 2 * i + "px",
          "&:first-child": {
            borderStartStartRadius: k,
            borderEndStartRadius: k,
          },
          "&:last-child": { borderStartEndRadius: k, borderEndEndRadius: k },
        },
        [`${t}-group-small &`]: {
          height: v,
          paddingInline: C - i,
          paddingBlock: 0,
          lineHeight: v - 2 * i + "px",
          "&:first-child": {
            borderStartStartRadius: S,
            borderEndStartRadius: S,
          },
          "&:last-child": { borderStartEndRadius: S, borderEndEndRadius: S },
        },
        "&:hover": { position: "relative", color: $ },
        "&:has(:focus-visible)": a({}, n(o)),
        [`${t}-inner, input[type='checkbox'], input[type='radio']`]: {
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: "none",
        },
        [`&-checked:not(${t}-button-wrapper-disabled)`]: {
          zIndex: 1,
          color: $,
          background: m,
          borderColor: $,
          "&::before": { backgroundColor: $ },
          "&:first-child": { borderColor: $ },
          "&:hover": {
            color: y,
            borderColor: y,
            "&::before": { backgroundColor: y },
          },
          "&:active": {
            color: B,
            borderColor: B,
            "&::before": { backgroundColor: B },
          },
        },
        [`${t}-group-solid &-checked:not(${t}-button-wrapper-disabled)`]: {
          color: x,
          background: $,
          borderColor: $,
          "&:hover": { color: x, background: y, borderColor: y },
          "&:active": { color: x, background: B, borderColor: B },
        },
        "&-disabled": {
          color: w,
          backgroundColor: I,
          borderColor: d,
          cursor: "not-allowed",
          "&:first-child, &:hover": {
            color: w,
            backgroundColor: I,
            borderColor: d,
          },
        },
        [`&-disabled${t}-button-wrapper-checked`]: {
          color: D,
          backgroundColor: R,
          borderColor: d,
          boxShadow: "none",
        },
      },
    };
  },
  T = r("Radio", (o) => {
    const {
        padding: e,
        lineWidth: r,
        controlItemBgActiveDisabled: a,
        colorTextDisabled: i,
        colorBgContainer: n,
        fontSizeLG: l,
        controlOutline: d,
        colorPrimaryHover: s,
        colorPrimaryActive: c,
        colorText: u,
        colorPrimary: b,
        marginXS: p,
        controlOutlineWidth: h,
        colorTextLightSolid: g,
        wireframe: v,
      } = o,
      C = `0 0 0 ${h}px ${d}`,
      f = l - 8,
      S = t(o, {
        radioFocusShadow: C,
        radioButtonFocusShadow: C,
        radioSize: l,
        radioDotSize: v ? f : l - 2 * (4 + r),
        radioDotDisabledSize: f,
        radioCheckedColor: b,
        radioDotDisabledColor: i,
        radioSolidCheckedColor: g,
        radioButtonBg: n,
        radioButtonCheckedBg: n,
        radioButtonColor: u,
        radioButtonHoverColor: s,
        radioButtonActiveColor: c,
        radioButtonPaddingHorizontal: e - r,
        radioDisabledButtonCheckedBg: a,
        radioDisabledButtonCheckedColor: i,
        radioWrapperMarginRight: p,
      });
    return [E(S), z(S), O(S)];
  });
var W = function (o, e) {
  var r = {};
  for (var t in o)
    Object.prototype.hasOwnProperty.call(o, t) &&
      e.indexOf(t) < 0 &&
      (r[t] = o[t]);
  if (null != o && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (t = Object.getOwnPropertySymbols(o); a < t.length; a++)
      e.indexOf(t[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(o, t[a]) &&
        (r[t[a]] = o[t[a]]);
  }
  return r;
};
const H = () => ({
    prefixCls: String,
    checked: S(),
    disabled: S(),
    isGroup: S(),
    value: k.any,
    name: String,
    id: String,
    autofocus: S(),
    onChange: $(),
    onFocus: $(),
    onBlur: $(),
    onClick: $(),
    "onUpdate:checked": $(),
    "onUpdate:value": $(),
  }),
  A = d({
    compatConfig: { MODE: 3 },
    name: "ARadio",
    inheritAttrs: !1,
    props: H(),
    setup(o, r) {
      let { emit: t, expose: i, slots: n, attrs: l } = r;
      const d = s(),
        S = c.useInject(),
        k = e(D, void 0),
        $ = e(I, void 0),
        m = u(),
        y = b(() => {
          var o;
          return null !== (o = E.value) && void 0 !== o ? o : m.value;
        }),
        B = p(),
        { prefixCls: x, direction: R, disabled: E } = h("radio", o),
        z = b(() =>
          "button" === (null == $ ? void 0 : $.optionType.value) ||
          "button" === k
            ? `${x.value}-button`
            : x.value
        ),
        O = u(),
        [H, A] = T(x);
      i({
        focus: () => {
          B.value.focus();
        },
        blur: () => {
          B.value.blur();
        },
      });
      const M = (o) => {
          const e = o.target.checked;
          t("update:checked", e),
            t("update:value", e),
            t("change", o),
            d.onFieldChange();
        },
        j = (o) => {
          t("change", o), $ && $.onChange && $.onChange(o);
        };
      return () => {
        var e;
        const r = $,
          { prefixCls: t, id: i = d.id.value } = o,
          s = W(o, ["prefixCls", "id"]),
          c = a(
            a(
              { prefixCls: z.value, id: i },
              g(s, ["onUpdate:checked", "onUpdate:value"])
            ),
            { disabled: null !== (e = E.value) && void 0 !== e ? e : O.value }
          );
        r
          ? ((c.name = r.name.value),
            (c.onChange = j),
            (c.checked = o.value === r.value.value),
            (c.disabled = y.value || r.disabled.value))
          : (c.onChange = M);
        const u = v(
          {
            [`${z.value}-wrapper`]: !0,
            [`${z.value}-wrapper-checked`]: c.checked,
            [`${z.value}-wrapper-disabled`]: c.disabled,
            [`${z.value}-wrapper-rtl`]: "rtl" === R.value,
            [`${z.value}-wrapper-in-form-item`]: S.isFormItemInput,
          },
          l.class,
          A.value
        );
        return H(
          C("label", f(f({}, l), {}, { class: u }), [
            C(w, f(f({}, c), {}, { type: "radio", ref: B }), null),
            n.default && C("span", null, [n.default()]),
          ])
        );
      };
    },
  }),
  M = d({
    compatConfig: { MODE: 3 },
    name: "ARadioGroup",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      value: k.any,
      size: y(),
      options: B(),
      disabled: S(),
      name: String,
      buttonStyle: y("outline"),
      id: String,
      optionType: y("default"),
      onChange: $(),
      "onUpdate:value": $(),
    },
    setup(e, r) {
      let { slots: t, emit: a, attrs: i } = r;
      const n = s(),
        { prefixCls: l, direction: d, size: c } = h("radio", e),
        [u, g] = T(l),
        S = p(e.value),
        k = p(!1);
      m(
        () => e.value,
        (o) => {
          (S.value = o), (k.value = !1);
        }
      );
      return (
        ((e) => {
          o(I, e);
        })({
          onChange: (o) => {
            const r = S.value,
              { value: t } = o.target;
            "value" in e || (S.value = t),
              k.value ||
                t === r ||
                ((k.value = !0),
                a("update:value", t),
                a("change", o),
                n.onFieldChange()),
              x(() => {
                k.value = !1;
              });
          },
          value: S,
          disabled: b(() => e.disabled),
          name: b(() => e.name),
          optionType: b(() => e.optionType),
        }),
        () => {
          var o;
          const { options: r, buttonStyle: a, id: s = n.id.value } = e,
            b = `${l.value}-group`,
            p = v(
              b,
              `${b}-${a}`,
              { [`${b}-${c.value}`]: c.value, [`${b}-rtl`]: "rtl" === d.value },
              i.class,
              g.value
            );
          let h = null;
          return (
            (h =
              r && r.length > 0
                ? r.map((o) => {
                    if ("string" == typeof o || "number" == typeof o)
                      return C(
                        A,
                        {
                          key: o,
                          prefixCls: l.value,
                          disabled: e.disabled,
                          value: o,
                          checked: S.value === o,
                        },
                        { default: () => [o] }
                      );
                    const { value: r, disabled: t, label: a } = o;
                    return C(
                      A,
                      {
                        key: `radio-group-value-options-${r}`,
                        prefixCls: l.value,
                        disabled: t || e.disabled,
                        value: r,
                        checked: S.value === r,
                      },
                      { default: () => [a] }
                    );
                  })
                : null === (o = t.default) || void 0 === o
                ? void 0
                : o.call(t)),
            u(C("div", f(f({}, i), {}, { class: p, id: s }), [h]))
          );
        }
      );
    },
  }),
  j = d({
    compatConfig: { MODE: 3 },
    name: "ARadioButton",
    inheritAttrs: !1,
    props: H(),
    setup(e, r) {
      let { slots: t, attrs: a } = r;
      const { prefixCls: i } = h("radio", e);
      return (
        ((e) => {
          o(D, e);
        })("button"),
        () => {
          var o;
          return C(A, f(f(f({}, a), e), {}, { prefixCls: i.value }), {
            default: () => [
              null === (o = t.default) || void 0 === o ? void 0 : o.call(t),
            ],
          });
        }
      );
    },
  });
export { A as R, M as _, j as a };

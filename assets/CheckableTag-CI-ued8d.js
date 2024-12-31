import {
  aV as o,
  aW as r,
  c9 as e,
  ca as a,
  aJ as n,
  aX as t,
  as as l,
  b1 as c,
  c as i,
  aS as s,
  aw as d,
  aT as g,
} from "./index-DPRREYlk.js";
const u = (o, r, a) => {
    const n = e(a);
    return {
      [`${o.componentCls}-${r}`]: {
        color: o[`color${a}`],
        background: o[`color${n}Bg`],
        borderColor: o[`color${n}Border`],
        [`&${o.componentCls}-borderless`]: { borderColor: "transparent" },
      },
    };
  },
  h = (o) =>
    a(o, (r, e) => {
      let {
        textColor: a,
        lightBorderColor: n,
        lightColor: t,
        darkColor: l,
      } = e;
      return {
        [`${o.componentCls}-${r}`]: {
          color: a,
          background: t,
          borderColor: n,
          "&-inverse": {
            color: o.colorTextLightSolid,
            background: l,
            borderColor: l,
          },
          [`&${o.componentCls}-borderless`]: { borderColor: "transparent" },
        },
      };
    }),
  p = (o) => {
    const {
        paddingXXS: r,
        lineWidth: e,
        tagPaddingHorizontal: a,
        componentCls: l,
      } = o,
      c = a - e,
      i = r - e;
    return {
      [l]: n(n({}, t(o)), {
        display: "inline-block",
        height: "auto",
        marginInlineEnd: o.marginXS,
        paddingInline: c,
        fontSize: o.tagFontSize,
        lineHeight: `${o.tagLineHeight}px`,
        whiteSpace: "nowrap",
        background: o.tagDefaultBg,
        border: `${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,
        borderRadius: o.borderRadiusSM,
        opacity: 1,
        transition: `all ${o.motionDurationMid}`,
        textAlign: "start",
        [`&${l}-rtl`]: { direction: "rtl" },
        "&, a, a:hover": { color: o.tagDefaultColor },
        [`${l}-close-icon`]: {
          marginInlineStart: i,
          color: o.colorTextDescription,
          fontSize: o.tagIconSize,
          cursor: "pointer",
          transition: `all ${o.motionDurationMid}`,
          "&:hover": { color: o.colorTextHeading },
        },
        [`&${l}-has-color`]: {
          borderColor: "transparent",
          [`&, a, a:hover, ${o.iconCls}-close, ${o.iconCls}-close:hover`]: {
            color: o.colorTextLightSolid,
          },
        },
        "&-checkable": {
          backgroundColor: "transparent",
          borderColor: "transparent",
          cursor: "pointer",
          [`&:not(${l}-checkable-checked):hover`]: {
            color: o.colorPrimary,
            backgroundColor: o.colorFillSecondary,
          },
          "&:active, &-checked": { color: o.colorTextLightSolid },
          "&-checked": {
            backgroundColor: o.colorPrimary,
            "&:hover": { backgroundColor: o.colorPrimaryHover },
          },
          "&:active": { backgroundColor: o.colorPrimaryActive },
        },
        "&-hidden": { display: "none" },
        [`> ${o.iconCls} + span, > span + ${o.iconCls}`]: {
          marginInlineStart: c,
        },
      }),
      [`${l}-borderless`]: {
        borderColor: "transparent",
        background: o.tagBorderlessBg,
      },
    };
  },
  C = o("Tag", (o) => {
    const { fontSize: e, lineHeight: a, lineWidth: n, fontSizeIcon: t } = o,
      l = Math.round(e * a),
      c = o.fontSizeSM,
      i = l - 2 * n,
      s = o.colorFillAlter,
      d = o.colorText,
      g = r(o, {
        tagFontSize: c,
        tagLineHeight: i,
        tagDefaultBg: s,
        tagDefaultColor: d,
        tagIconSize: t - 2 * n,
        tagPaddingHorizontal: 8,
        tagBorderlessBg: o.colorFillTertiary,
      });
    return [
      p(g),
      h(g),
      u(g, "success", "Success"),
      u(g, "processing", "Info"),
      u(g, "error", "Error"),
      u(g, "warning", "Warning"),
    ];
  }),
  b = l({
    compatConfig: { MODE: 3 },
    name: "ACheckableTag",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      checked: { type: Boolean, default: void 0 },
      onChange: { type: Function },
      onClick: { type: Function },
      "onUpdate:checked": Function,
    },
    setup(o, r) {
      let { slots: e, emit: a, attrs: n } = r;
      const { prefixCls: t } = c("tag", o),
        [l, u] = C(t),
        h = (r) => {
          const { checked: e } = o;
          a("update:checked", !e), a("change", !e), a("click", r);
        },
        p = i(() =>
          s(t.value, u.value, {
            [`${t.value}-checkable`]: !0,
            [`${t.value}-checkable-checked`]: o.checked,
          })
        );
      return () => {
        var o;
        return l(
          d(
            "span",
            g(g({}, n), {}, { class: [p.value, n.class], onClick: h }),
            [null === (o = e.default) || void 0 === o ? void 0 : o.call(e)]
          )
        );
      };
    },
  });
export { b as C, C as u };

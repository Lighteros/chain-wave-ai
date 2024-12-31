import {
  aV as t,
  aW as e,
  aJ as i,
  aX as r,
  ba as n,
  as as a,
  b1 as o,
  c as l,
  c8 as d,
  aw as s,
  aT as h,
} from "./index-DPRREYlk.js";
const g = (t) => {
    const {
      componentCls: e,
      sizePaddingEdgeHorizontal: n,
      colorSplit: a,
      lineWidth: o,
    } = t;
    return {
      [e]: i(i({}, r(t)), {
        borderBlockStart: `${o}px solid ${a}`,
        "&-vertical": {
          position: "relative",
          top: "-0.06em",
          display: "inline-block",
          height: "0.9em",
          margin: `0 ${t.dividerVerticalGutterMargin}px`,
          verticalAlign: "middle",
          borderTop: 0,
          borderInlineStart: `${o}px solid ${a}`,
        },
        "&-horizontal": {
          display: "flex",
          clear: "both",
          width: "100%",
          minWidth: "100%",
          margin: `${t.dividerHorizontalGutterMargin}px 0`,
        },
        [`&-horizontal${e}-with-text`]: {
          display: "flex",
          alignItems: "center",
          margin: `${t.dividerHorizontalWithTextGutterMargin}px 0`,
          color: t.colorTextHeading,
          fontWeight: 500,
          fontSize: t.fontSizeLG,
          whiteSpace: "nowrap",
          textAlign: "center",
          borderBlockStart: `0 ${a}`,
          "&::before, &::after": {
            position: "relative",
            width: "50%",
            borderBlockStart: `${o}px solid transparent`,
            borderBlockStartColor: "inherit",
            borderBlockEnd: 0,
            transform: "translateY(50%)",
            content: "''",
          },
        },
        [`&-horizontal${e}-with-text-left`]: {
          "&::before": { width: "5%" },
          "&::after": { width: "95%" },
        },
        [`&-horizontal${e}-with-text-right`]: {
          "&::before": { width: "95%" },
          "&::after": { width: "5%" },
        },
        [`${e}-inner-text`]: { display: "inline-block", padding: "0 1em" },
        "&-dashed": {
          background: "none",
          borderColor: a,
          borderStyle: "dashed",
          borderWidth: `${o}px 0 0`,
        },
        [`&-horizontal${e}-with-text${e}-dashed`]: {
          "&::before, &::after": { borderStyle: "dashed none none" },
        },
        [`&-vertical${e}-dashed`]: {
          borderInlineStartWidth: o,
          borderInlineEnd: 0,
          borderBlockStart: 0,
          borderBlockEnd: 0,
        },
        [`&-plain${e}-with-text`]: {
          color: t.colorText,
          fontWeight: "normal",
          fontSize: t.fontSize,
        },
        [`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:
          {
            "&::before": { width: 0 },
            "&::after": { width: "100%" },
            [`${e}-inner-text`]: { paddingInlineStart: n },
          },
        [`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:
          {
            "&::before": { width: "100%" },
            "&::after": { width: 0 },
            [`${e}-inner-text`]: { paddingInlineEnd: n },
          },
      }),
    };
  },
  p = t(
    "Divider",
    (t) => {
      const i = e(t, {
        dividerVerticalGutterMargin: t.marginXS,
        dividerHorizontalWithTextGutterMargin: t.margin,
        dividerHorizontalGutterMargin: t.marginLG,
      });
      return [g(i)];
    },
    { sizePaddingEdgeHorizontal: 0 }
  ),
  u = n(
    a({
      name: "ADivider",
      inheritAttrs: !1,
      compatConfig: { MODE: 3 },
      props: {
        prefixCls: String,
        type: { type: String, default: "horizontal" },
        dashed: { type: Boolean, default: !1 },
        orientation: { type: String, default: "center" },
        plain: { type: Boolean, default: !1 },
        orientationMargin: [String, Number],
      },
      setup(t, e) {
        let { slots: r, attrs: n } = e;
        const { prefixCls: a, direction: g } = o("divider", t),
          [u, c] = p(a),
          f = l(() => "left" === t.orientation && null != t.orientationMargin),
          $ = l(() => "right" === t.orientation && null != t.orientationMargin),
          v = l(() => {
            const { type: e, dashed: i, plain: r } = t,
              n = a.value;
            return {
              [n]: !0,
              [c.value]: !!c.value,
              [`${n}-${e}`]: !0,
              [`${n}-dashed`]: !!i,
              [`${n}-plain`]: !!r,
              [`${n}-rtl`]: "rtl" === g.value,
              [`${n}-no-default-orientation-margin-left`]: f.value,
              [`${n}-no-default-orientation-margin-right`]: $.value,
            };
          }),
          x = l(() => {
            const e =
              "number" == typeof t.orientationMargin
                ? `${t.orientationMargin}px`
                : t.orientationMargin;
            return i(
              i({}, f.value && { marginLeft: e }),
              $.value && { marginRight: e }
            );
          }),
          b = l(() =>
            t.orientation.length > 0 ? "-" + t.orientation : t.orientation
          );
        return () => {
          var t;
          const e = d(
            null === (t = r.default) || void 0 === t ? void 0 : t.call(r)
          );
          return u(
            s(
              "div",
              h(
                h({}, n),
                {},
                {
                  class: [
                    v.value,
                    e.length
                      ? `${a.value}-with-text ${a.value}-with-text${b.value}`
                      : "",
                    n.class,
                  ],
                  role: "separator",
                }
              ),
              [
                e.length
                  ? s(
                      "span",
                      { class: `${a.value}-inner-text`, style: x.value },
                      [e]
                    )
                  : null,
              ]
            )
          );
        };
      },
    })
  );
export { u as _ };

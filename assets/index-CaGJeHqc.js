import {
  aV as o,
  aW as r,
  aJ as e,
  aX as i,
  aY as n,
  aZ as t,
} from "./index-CcOpQHgp.js";
const a = new t("antCheckboxEffect", {
    "0%": { transform: "scale(1)", opacity: 0.5 },
    "100%": { transform: "scale(1.6)", opacity: 0 },
  }),
  l = (o) => {
    const { checkboxCls: r } = o,
      t = `${r}-wrapper`;
    return [
      {
        [`${r}-group`]: e(e({}, i(o)), {
          display: "inline-flex",
          flexWrap: "wrap",
          columnGap: o.marginXS,
          [`> ${o.antCls}-row`]: { flex: 1 },
        }),
        [t]: e(e({}, i(o)), {
          display: "inline-flex",
          alignItems: "baseline",
          cursor: "pointer",
          "&:after": {
            display: "inline-block",
            width: 0,
            overflow: "hidden",
            content: "'\\a0'",
          },
          [`& + ${t}`]: { marginInlineStart: 0 },
          [`&${t}-in-form-item`]: {
            'input[type="checkbox"]': { width: 14, height: 14 },
          },
        }),
        [r]: e(e({}, i(o)), {
          position: "relative",
          whiteSpace: "nowrap",
          lineHeight: 1,
          cursor: "pointer",
          alignSelf: "center",
          [`${r}-input`]: {
            position: "absolute",
            inset: 0,
            zIndex: 1,
            cursor: "pointer",
            opacity: 0,
            margin: 0,
            [`&:focus-visible + ${r}-inner`]: e({}, n(o)),
          },
          [`${r}-inner`]: {
            boxSizing: "border-box",
            position: "relative",
            top: 0,
            insetInlineStart: 0,
            display: "block",
            width: o.checkboxSize,
            height: o.checkboxSize,
            direction: "ltr",
            backgroundColor: o.colorBgContainer,
            border: `${o.lineWidth}px ${o.lineType} ${o.colorBorder}`,
            borderRadius: o.borderRadiusSM,
            borderCollapse: "separate",
            transition: `all ${o.motionDurationSlow}`,
            "&:after": {
              boxSizing: "border-box",
              position: "absolute",
              top: "50%",
              insetInlineStart: "21.5%",
              display: "table",
              width: (o.checkboxSize / 14) * 5,
              height: (o.checkboxSize / 14) * 8,
              border: `${o.lineWidthBold}px solid ${o.colorWhite}`,
              borderTop: 0,
              borderInlineStart: 0,
              transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
              opacity: 0,
              content: '""',
              transition: `all ${o.motionDurationFast} ${o.motionEaseInBack}, opacity ${o.motionDurationFast}`,
            },
          },
          "& + span": {
            paddingInlineStart: o.paddingXS,
            paddingInlineEnd: o.paddingXS,
          },
        }),
      },
      {
        [r]: {
          "&-indeterminate": {
            [`${r}-inner`]: {
              "&:after": {
                top: "50%",
                insetInlineStart: "50%",
                width: o.fontSizeLG / 2,
                height: o.fontSizeLG / 2,
                backgroundColor: o.colorPrimary,
                border: 0,
                transform: "translate(-50%, -50%) scale(1)",
                opacity: 1,
                content: '""',
              },
            },
          },
        },
      },
      {
        [`${t}:hover ${r}:after`]: { visibility: "visible" },
        [`\n        ${t}:not(${t}-disabled),\n        ${r}:not(${r}-disabled)\n      `]:
          { [`&:hover ${r}-inner`]: { borderColor: o.colorPrimary } },
        [`${t}:not(${t}-disabled)`]: {
          [`&:hover ${r}-checked:not(${r}-disabled) ${r}-inner`]: {
            backgroundColor: o.colorPrimaryHover,
            borderColor: "transparent",
          },
          [`&:hover ${r}-checked:not(${r}-disabled):after`]: {
            borderColor: o.colorPrimaryHover,
          },
        },
      },
      {
        [`${r}-checked`]: {
          [`${r}-inner`]: {
            backgroundColor: o.colorPrimary,
            borderColor: o.colorPrimary,
            "&:after": {
              opacity: 1,
              transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
              transition: `all ${o.motionDurationMid} ${o.motionEaseOutBack} ${o.motionDurationFast}`,
            },
          },
          "&:after": {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            width: "100%",
            height: "100%",
            borderRadius: o.borderRadiusSM,
            visibility: "hidden",
            border: `${o.lineWidthBold}px solid ${o.colorPrimary}`,
            animationName: a,
            animationDuration: o.motionDurationSlow,
            animationTimingFunction: "ease-in-out",
            animationFillMode: "backwards",
            content: '""',
            transition: `all ${o.motionDurationSlow}`,
          },
        },
        [`\n        ${t}-checked:not(${t}-disabled),\n        ${r}-checked:not(${r}-disabled)\n      `]:
          {
            [`&:hover ${r}-inner`]: {
              backgroundColor: o.colorPrimaryHover,
              borderColor: "transparent",
            },
            [`&:hover ${r}:after`]: { borderColor: o.colorPrimaryHover },
          },
      },
      {
        [`${t}-disabled`]: { cursor: "not-allowed" },
        [`${r}-disabled`]: {
          [`&, ${r}-input`]: { cursor: "not-allowed", pointerEvents: "none" },
          [`${r}-inner`]: {
            background: o.colorBgContainerDisabled,
            borderColor: o.colorBorder,
            "&:after": { borderColor: o.colorTextDisabled },
          },
          "&:after": { display: "none" },
          "& + span": { color: o.colorTextDisabled },
          [`&${r}-indeterminate ${r}-inner::after`]: {
            background: o.colorTextDisabled,
          },
        },
      },
    ];
  };
function d(o, e) {
  const i = r(e, {
    checkboxCls: `.${o}`,
    checkboxSize: e.controlInteractiveSize,
  });
  return [l(i)];
}
const s = o("Checkbox", (o, r) => {
  let { prefixCls: e } = r;
  return [d(e, o)];
});
export { d as g, s as u };

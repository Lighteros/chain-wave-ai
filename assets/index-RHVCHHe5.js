import {
  aV as o,
  aW as n,
  aJ as e,
  aX as i,
  ba as a,
  cd as l,
  as as t,
  b1 as r,
  aK as s,
  c,
  aS as d,
  aw as p,
  b7 as u,
  cl as g,
  cm as v,
  cn as $,
  bY as m,
  co as f,
  aT as h,
  cp as b,
  cq as x,
  cr as y,
  cs as S,
  ct as I,
  cu as w,
  cv as B,
  cw as C,
  cx as H,
  aU as z,
} from "./index-DPRREYlk.js";
const E = (o, n, e, i, a) => ({
    backgroundColor: o,
    border: `${i.lineWidth}px ${i.lineType} ${n}`,
    [`${a}-icon`]: { color: e },
  }),
  L = (o) => {
    const {
      componentCls: n,
      motionDurationSlow: a,
      marginXS: l,
      marginSM: t,
      fontSize: r,
      fontSizeLG: s,
      lineHeight: c,
      borderRadiusLG: d,
      motionEaseInOutCirc: p,
      alertIconSizeLG: u,
      colorText: g,
      paddingContentVerticalSM: v,
      alertPaddingHorizontal: $,
      paddingMD: m,
      paddingContentHorizontalLG: f,
    } = o;
    return {
      [n]: e(e({}, i(o)), {
        position: "relative",
        display: "flex",
        alignItems: "center",
        padding: `${v}px ${$}px`,
        wordWrap: "break-word",
        borderRadius: d,
        [`&${n}-rtl`]: { direction: "rtl" },
        [`${n}-content`]: { flex: 1, minWidth: 0 },
        [`${n}-icon`]: { marginInlineEnd: l, lineHeight: 0 },
        "&-description": { display: "none", fontSize: r, lineHeight: c },
        "&-message": { color: g },
        [`&${n}-motion-leave`]: {
          overflow: "hidden",
          opacity: 1,
          transition: `max-height ${a} ${p}, opacity ${a} ${p},\n        padding-top ${a} ${p}, padding-bottom ${a} ${p},\n        margin-bottom ${a} ${p}`,
        },
        [`&${n}-motion-leave-active`]: {
          maxHeight: 0,
          marginBottom: "0 !important",
          paddingTop: 0,
          paddingBottom: 0,
          opacity: 0,
        },
      }),
      [`${n}-with-description`]: {
        alignItems: "flex-start",
        paddingInline: f,
        paddingBlock: m,
        [`${n}-icon`]: { marginInlineEnd: t, fontSize: u, lineHeight: 0 },
        [`${n}-message`]: {
          display: "block",
          marginBottom: l,
          color: g,
          fontSize: s,
        },
        [`${n}-description`]: { display: "block" },
      },
      [`${n}-banner`]: {
        marginBottom: 0,
        border: "0 !important",
        borderRadius: 0,
      },
    };
  },
  k = (o) => {
    const {
      componentCls: n,
      colorSuccess: i,
      colorSuccessBorder: a,
      colorSuccessBg: l,
      colorWarning: t,
      colorWarningBorder: r,
      colorWarningBg: s,
      colorError: c,
      colorErrorBorder: d,
      colorErrorBg: p,
      colorInfo: u,
      colorInfoBorder: g,
      colorInfoBg: v,
    } = o;
    return {
      [n]: {
        "&-success": E(l, a, i, o, n),
        "&-info": E(v, g, u, o, n),
        "&-warning": E(s, r, t, o, n),
        "&-error": e(e({}, E(p, d, c, o, n)), {
          [`${n}-description > pre`]: { margin: 0, padding: 0 },
        }),
      },
    };
  },
  T = (o) => {
    const {
      componentCls: n,
      iconCls: e,
      motionDurationMid: i,
      marginXS: a,
      fontSizeIcon: l,
      colorIcon: t,
      colorIconHover: r,
    } = o;
    return {
      [n]: {
        "&-action": { marginInlineStart: a },
        [`${n}-close-icon`]: {
          marginInlineStart: a,
          padding: 0,
          overflow: "hidden",
          fontSize: l,
          lineHeight: `${l}px`,
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          [`${e}-close`]: {
            color: t,
            transition: `color ${i}`,
            "&:hover": { color: r },
          },
        },
        "&-close-text": {
          color: t,
          transition: `color ${i}`,
          "&:hover": { color: r },
        },
      },
    };
  },
  W = (o) => [L(o), k(o), T(o)],
  A = o("Alert", (o) => {
    const { fontSizeHeading3: e } = o,
      i = n(o, { alertIconSizeLG: e, alertPaddingHorizontal: 12 });
    return [W(i)];
  }),
  D = { success: x, info: y, error: S, warning: I },
  G = { success: w, info: B, error: C, warning: H },
  M = l("success", "info", "warning", "error"),
  O = a(
    t({
      compatConfig: { MODE: 3 },
      name: "AAlert",
      inheritAttrs: !1,
      props: {
        type: z.oneOf(M),
        closable: { type: Boolean, default: void 0 },
        closeText: z.any,
        message: z.any,
        description: z.any,
        afterClose: Function,
        showIcon: { type: Boolean, default: void 0 },
        prefixCls: String,
        banner: { type: Boolean, default: void 0 },
        icon: z.any,
        closeIcon: z.any,
        onClose: Function,
      },
      setup(o, n) {
        let { slots: e, emit: i, attrs: a, expose: l } = n;
        const { prefixCls: t, direction: x } = r("alert", o),
          [y, S] = A(t),
          I = s(!1),
          w = s(!1),
          B = s(),
          C = (o) => {
            o.preventDefault();
            const n = B.value;
            (n.style.height = `${n.offsetHeight}px`),
              (n.style.height = `${n.offsetHeight}px`),
              (I.value = !0),
              i("close", o);
          },
          H = () => {
            var n;
            (I.value = !1),
              (w.value = !0),
              null === (n = o.afterClose) || void 0 === n || n.call(o);
          },
          z = c(() => {
            const { type: n } = o;
            return void 0 !== n ? n : o.banner ? "warning" : "info";
          });
        l({ animationEnd: H });
        const E = s({});
        return () => {
          var n, i, l, r, s, c, L, k, T, W;
          const {
            banner: A,
            closeIcon: M = null === (n = e.closeIcon) || void 0 === n
              ? void 0
              : n.call(e),
          } = o;
          let { closable: O, showIcon: R } = o;
          const X =
              null !== (i = o.closeText) && void 0 !== i
                ? i
                : null === (l = e.closeText) || void 0 === l
                ? void 0
                : l.call(e),
            F =
              null !== (r = o.description) && void 0 !== r
                ? r
                : null === (s = e.description) || void 0 === s
                ? void 0
                : s.call(e),
            P =
              null !== (c = o.message) && void 0 !== c
                ? c
                : null === (L = e.message) || void 0 === L
                ? void 0
                : L.call(e),
            V =
              null !== (k = o.icon) && void 0 !== k
                ? k
                : null === (T = e.icon) || void 0 === T
                ? void 0
                : T.call(e),
            j = null === (W = e.action) || void 0 === W ? void 0 : W.call(e);
          R = !(!A || void 0 !== R) || R;
          const q = (F ? G : D)[z.value] || null;
          X && (O = !0);
          const J = t.value,
            K = d(J, {
              [`${J}-${z.value}`]: !0,
              [`${J}-closing`]: I.value,
              [`${J}-with-description`]: !!F,
              [`${J}-no-icon`]: !R,
              [`${J}-banner`]: !!A,
              [`${J}-closable`]: O,
              [`${J}-rtl`]: "rtl" === x.value,
              [S.value]: !0,
            }),
            U = O
              ? p(
                  "button",
                  {
                    type: "button",
                    onClick: C,
                    class: `${J}-close-icon`,
                    tabindex: 0,
                  },
                  [
                    X
                      ? p("span", { class: `${J}-close-text` }, [X])
                      : void 0 === M
                      ? p(u, null, null)
                      : M,
                  ]
                )
              : null,
            Y =
              (V &&
                (g(V)
                  ? v(V, { class: `${J}-icon` })
                  : p("span", { class: `${J}-icon` }, [V]))) ||
              p(q, { class: `${J}-icon` }, null),
            _ = $(`${J}-motion`, {
              appear: !1,
              css: !0,
              onAfterLeave: H,
              onBeforeLeave: (o) => {
                o.style.maxHeight = `${o.offsetHeight}px`;
              },
              onLeave: (o) => {
                o.style.maxHeight = "0px";
              },
            });
          return y(
            w.value
              ? null
              : p(b, _, {
                  default: () => [
                    m(
                      p(
                        "div",
                        h(
                          h({ role: "alert" }, a),
                          {},
                          {
                            style: [a.style, E.value],
                            class: [a.class, K],
                            "data-show": !I.value,
                            ref: B,
                          }
                        ),
                        [
                          R ? Y : null,
                          p("div", { class: `${J}-content` }, [
                            P ? p("div", { class: `${J}-message` }, [P]) : null,
                            F
                              ? p("div", { class: `${J}-description` }, [F])
                              : null,
                          ]),
                          j ? p("div", { class: `${J}-action` }, [j]) : null,
                          U,
                        ]
                      ),
                      [[f, !I.value]]
                    ),
                  ],
                })
          );
        };
      },
    })
  );
export { O as _ };

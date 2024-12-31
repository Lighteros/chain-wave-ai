import {
  aJ as e,
  aU as t,
  f2 as o,
  e0 as n,
  e1 as a,
  as as l,
  aK as r,
  aL as i,
  n as s,
  aR as d,
  aP as c,
  aS as p,
  aw as u,
  cp as f,
  bY as v,
  co as m,
  aT as y,
  ch as h,
  ck as b,
  aQ as g,
  r as C,
  f3 as w,
  aV as S,
  aW as k,
  ba as x,
  c as $,
  bq as O,
  b1 as N,
  eC as D,
  bT as I,
  cn as P,
  f4 as M,
  f5 as B,
  cj as j,
  b7 as z,
} from "./index-DPRREYlk.js";
import { i as E } from "./isNumeric-DFkNItwV.js";
const T = () => ({
  prefixCls: String,
  width: t.oneOfType([t.string, t.number]),
  height: t.oneOfType([t.string, t.number]),
  style: { type: Object, default: void 0 },
  class: String,
  rootClassName: String,
  rootStyle: o(),
  placement: { type: String },
  wrapperClassName: String,
  level: { type: [String, Array] },
  levelMove: { type: [Number, Function, Array] },
  duration: String,
  ease: String,
  showMask: { type: Boolean, default: void 0 },
  maskClosable: { type: Boolean, default: void 0 },
  maskStyle: { type: Object, default: void 0 },
  afterVisibleChange: Function,
  keyboard: { type: Boolean, default: void 0 },
  contentWrapperStyle: n(),
  autofocus: { type: Boolean, default: void 0 },
  open: { type: Boolean, default: void 0 },
  motion: a(),
  maskMotion: o(),
});
Object.keys({
  transition: "transitionend",
  WebkitTransition: "webkitTransitionEnd",
  MozTransition: "transitionend",
  OTransition: "oTransitionEnd otransitionend",
}).filter((e) => {
  if ("undefined" == typeof document) return !1;
  const t = document.getElementsByTagName("html")[0];
  return e in (t ? t.style : {});
})[0];
const V = !(
  "undefined" != typeof window &&
  window.document &&
  window.document.createElement
);
var A = function (e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (o[n[a]] = e[n[a]]);
  }
  return o;
};
const F = l({
  compatConfig: { MODE: 3 },
  inheritAttrs: !1,
  props: e(e({}, T()), {
    getContainer: Function,
    getOpenCount: Function,
    scrollLocker: t.any,
    inline: Boolean,
  }),
  emits: ["close", "handleClick", "change"],
  setup(e, t) {
    let { emit: o, slots: n } = t;
    const a = r(),
      l = r(),
      g = r(),
      C = r(),
      w = r();
    let S = [];
    Number(
      (Date.now() + Math.random())
        .toString()
        .replace(".", Math.round(9 * Math.random()).toString())
    ).toString(16),
      i(() => {
        s(() => {
          var t;
          const { open: o, getContainer: n, showMask: a, autofocus: l } = e,
            r = null == n ? void 0 : n();
          N(e),
            o &&
              (r && (r.parentNode, document.body),
              s(() => {
                l && k();
              }),
              a && (null === (t = e.scrollLocker) || void 0 === t || t.lock()));
        });
      }),
      d(
        () => e.level,
        () => {
          N(e);
        },
        { flush: "post" }
      ),
      d(
        () => e.open,
        () => {
          const {
              open: t,
              getContainer: o,
              scrollLocker: n,
              showMask: a,
              autofocus: l,
            } = e,
            r = null == o ? void 0 : o();
          r && (r.parentNode, document.body),
            t
              ? (l && k(), a && (null == n || n.lock()))
              : null == n || n.unLock();
        },
        { flush: "post" }
      ),
      c(() => {
        var t;
        const { open: o } = e;
        o && (document.body.style.touchAction = ""),
          null === (t = e.scrollLocker) || void 0 === t || t.unLock();
      }),
      d(
        () => e.placement,
        (e) => {
          e && (w.value = null);
        }
      );
    const k = () => {
        var e, t;
        null ===
          (t = null === (e = l.value) || void 0 === e ? void 0 : e.focus) ||
          void 0 === t ||
          t.call(e);
      },
      x = (e) => {
        o("close", e);
      },
      $ = (e) => {
        e.keyCode === b.ESC && (e.stopPropagation(), x(e));
      },
      O = () => {
        const { open: t, afterVisibleChange: o } = e;
        o && o(!!t);
      },
      N = (e) => {
        let { level: t, getContainer: o } = e;
        if (V) return;
        const n = null == o ? void 0 : o(),
          a = n ? n.parentNode : null;
        if (((S = []), "all" === t)) {
          (a ? Array.prototype.slice.call(a.children) : []).forEach((e) => {
            "SCRIPT" !== e.nodeName &&
              "STYLE" !== e.nodeName &&
              "LINK" !== e.nodeName &&
              e !== n &&
              S.push(e);
          });
        } else
          t &&
            ((l = t), Array.isArray(l) ? l : [l]).forEach((e) => {
              document.querySelectorAll(e).forEach((e) => {
                S.push(e);
              });
            });
        var l;
      },
      D = (e) => {
        o("handleClick", e);
      },
      I = r(!1);
    return (
      d(l, () => {
        s(() => {
          I.value = !0;
        });
      }),
      () => {
        var t, o;
        const {
            width: r,
            height: i,
            open: s,
            prefixCls: d,
            placement: c,
            level: b,
            levelMove: S,
            ease: k,
            duration: N,
            getContainer: P,
            onChange: M,
            afterVisibleChange: B,
            showMask: j,
            maskClosable: z,
            maskStyle: E,
            keyboard: T,
            getOpenCount: V,
            scrollLocker: F,
            contentWrapperStyle: L,
            style: R,
            class: W,
            rootClassName: H,
            rootStyle: Y,
            maskMotion: X,
            motion: U,
            inline: _,
          } = e,
          G = A(e, [
            "width",
            "height",
            "open",
            "prefixCls",
            "placement",
            "level",
            "levelMove",
            "ease",
            "duration",
            "getContainer",
            "onChange",
            "afterVisibleChange",
            "showMask",
            "maskClosable",
            "maskStyle",
            "keyboard",
            "getOpenCount",
            "scrollLocker",
            "contentWrapperStyle",
            "style",
            "class",
            "rootClassName",
            "rootStyle",
            "maskMotion",
            "motion",
            "inline",
          ]),
          K = s && I.value,
          q = p(d, {
            [`${d}-${c}`]: !0,
            [`${d}-open`]: K,
            [`${d}-inline`]: _,
            "no-mask": !j,
            [H]: !0,
          }),
          J = "function" == typeof U ? U(c) : U;
        return u(
          "div",
          y(
            y({}, h(G, ["autofocus"])),
            {},
            {
              tabindex: -1,
              class: q,
              style: Y,
              ref: l,
              onKeydown: K && T ? $ : void 0,
            }
          ),
          [
            u(f, X, {
              default: () => [
                j &&
                  v(
                    u(
                      "div",
                      {
                        class: `${d}-mask`,
                        onClick: z ? x : void 0,
                        style: E,
                        ref: g,
                      },
                      null
                    ),
                    [[m, K]]
                  ),
              ],
            }),
            u(f, y(y({}, J), {}, { onAfterEnter: O, onAfterLeave: O }), {
              default: () => [
                v(
                  u(
                    "div",
                    { class: `${d}-content-wrapper`, style: [L], ref: a },
                    [
                      u(
                        "div",
                        { class: [`${d}-content`, W], style: R, ref: w },
                        [
                          null === (t = n.default) || void 0 === t
                            ? void 0
                            : t.call(n),
                        ]
                      ),
                      n.handler
                        ? u("div", { onClick: D, ref: C }, [
                            null === (o = n.handler) || void 0 === o
                              ? void 0
                              : o.call(n),
                          ])
                        : null,
                    ]
                  ),
                  [[m, K]]
                ),
              ],
            }),
          ]
        );
      }
    );
  },
});
var L = function (e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (o[n[a]] = e[n[a]]);
  }
  return o;
};
const R = l({
    compatConfig: { MODE: 3 },
    inheritAttrs: !1,
    props: g(
      e(e({}, T()), {
        forceRender: { type: Boolean, default: void 0 },
        getContainer: t.oneOfType([t.string, t.func, t.object, t.looseBool]),
      }),
      {
        prefixCls: "drawer",
        placement: "left",
        getContainer: "body",
        level: "all",
        duration: ".3s",
        ease: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
        afterVisibleChange: () => {},
        showMask: !0,
        maskClosable: !0,
        maskStyle: {},
        wrapperClassName: "",
        keyboard: !0,
        forceRender: !1,
        autofocus: !0,
      }
    ),
    emits: ["handleClick", "close"],
    setup(e, t) {
      let { emit: o, slots: n } = t;
      const a = C(null),
        l = (e) => {
          o("handleClick", e);
        },
        r = (e) => {
          o("close", e);
        };
      return () => {
        const {
            getContainer: t,
            wrapperClassName: o,
            rootClassName: i,
            rootStyle: s,
            forceRender: d,
          } = e,
          c = L(e, [
            "getContainer",
            "wrapperClassName",
            "rootClassName",
            "rootStyle",
            "forceRender",
          ]);
        let p = null;
        if (!t)
          return u(
            F,
            y(
              y({}, c),
              {},
              {
                rootClassName: i,
                rootStyle: s,
                open: e.open,
                onClose: r,
                onHandleClick: l,
                inline: !0,
              }
            ),
            n
          );
        const f = !!n.handler || d;
        return (
          (f || e.open || a.value) &&
            (p = u(
              w,
              {
                autoLock: !0,
                visible: e.open,
                forceRender: f,
                getContainer: t,
                wrapperClassName: o,
              },
              {
                default: (t) => {
                  var { visible: o, afterClose: d } = t,
                    p = L(t, ["visible", "afterClose"]);
                  return u(
                    F,
                    y(
                      y(y({ ref: a }, c), p),
                      {},
                      {
                        rootClassName: i,
                        rootStyle: s,
                        open: void 0 !== o ? o : e.open,
                        afterVisibleChange:
                          void 0 !== d ? d : e.afterVisibleChange,
                        onClose: r,
                        onHandleClick: l,
                      }
                    ),
                    n
                  );
                },
              }
            )),
          p
        );
      };
    },
  }),
  W = (e) => {
    const { componentCls: t, motionDurationSlow: o } = e,
      n = {
        "&-enter, &-appear, &-leave": {
          "&-start": { transition: "none" },
          "&-active": { transition: `all ${o}` },
        },
      };
    return {
      [t]: {
        [`${t}-mask-motion`]: {
          "&-enter, &-appear, &-leave": {
            "&-active": { transition: `all ${o}` },
          },
          "&-enter, &-appear": { opacity: 0, "&-active": { opacity: 1 } },
          "&-leave": { opacity: 1, "&-active": { opacity: 0 } },
        },
        [`${t}-panel-motion`]: {
          "&-left": [
            n,
            {
              "&-enter, &-appear": {
                "&-start": { transform: "translateX(-100%) !important" },
                "&-active": { transform: "translateX(0)" },
              },
              "&-leave": {
                transform: "translateX(0)",
                "&-active": { transform: "translateX(-100%)" },
              },
            },
          ],
          "&-right": [
            n,
            {
              "&-enter, &-appear": {
                "&-start": { transform: "translateX(100%) !important" },
                "&-active": { transform: "translateX(0)" },
              },
              "&-leave": {
                transform: "translateX(0)",
                "&-active": { transform: "translateX(100%)" },
              },
            },
          ],
          "&-top": [
            n,
            {
              "&-enter, &-appear": {
                "&-start": { transform: "translateY(-100%) !important" },
                "&-active": { transform: "translateY(0)" },
              },
              "&-leave": {
                transform: "translateY(0)",
                "&-active": { transform: "translateY(-100%)" },
              },
            },
          ],
          "&-bottom": [
            n,
            {
              "&-enter, &-appear": {
                "&-start": { transform: "translateY(100%) !important" },
                "&-active": { transform: "translateY(0)" },
              },
              "&-leave": {
                transform: "translateY(0)",
                "&-active": { transform: "translateY(100%)" },
              },
            },
          ],
        },
      },
    };
  },
  H = (e) => {
    const {
        componentCls: t,
        zIndexPopup: o,
        colorBgMask: n,
        colorBgElevated: a,
        motionDurationSlow: l,
        motionDurationMid: r,
        padding: i,
        paddingLG: s,
        fontSizeLG: d,
        lineHeightLG: c,
        lineWidth: p,
        lineType: u,
        colorSplit: f,
        marginSM: v,
        colorIcon: m,
        colorIconHover: y,
        colorText: h,
        fontWeightStrong: b,
        drawerFooterPaddingVertical: g,
        drawerFooterPaddingHorizontal: C,
      } = e,
      w = `${t}-content-wrapper`;
    return {
      [t]: {
        position: "fixed",
        inset: 0,
        zIndex: o,
        pointerEvents: "none",
        "&-pure": {
          position: "relative",
          background: a,
          [`&${t}-left`]: { boxShadow: e.boxShadowDrawerLeft },
          [`&${t}-right`]: { boxShadow: e.boxShadowDrawerRight },
          [`&${t}-top`]: { boxShadow: e.boxShadowDrawerUp },
          [`&${t}-bottom`]: { boxShadow: e.boxShadowDrawerDown },
        },
        "&-inline": { position: "absolute" },
        [`${t}-mask`]: {
          position: "absolute",
          inset: 0,
          zIndex: o,
          background: n,
          pointerEvents: "auto",
        },
        [w]: {
          position: "absolute",
          zIndex: o,
          transition: `all ${l}`,
          "&-hidden": { display: "none" },
        },
        [`&-left > ${w}`]: {
          top: 0,
          bottom: 0,
          left: { _skip_check_: !0, value: 0 },
          boxShadow: e.boxShadowDrawerLeft,
        },
        [`&-right > ${w}`]: {
          top: 0,
          right: { _skip_check_: !0, value: 0 },
          bottom: 0,
          boxShadow: e.boxShadowDrawerRight,
        },
        [`&-top > ${w}`]: {
          top: 0,
          insetInline: 0,
          boxShadow: e.boxShadowDrawerUp,
        },
        [`&-bottom > ${w}`]: {
          bottom: 0,
          insetInline: 0,
          boxShadow: e.boxShadowDrawerDown,
        },
        [`${t}-content`]: {
          width: "100%",
          height: "100%",
          overflow: "auto",
          background: a,
          pointerEvents: "auto",
        },
        [`${t}-wrapper-body`]: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        },
        [`${t}-header`]: {
          display: "flex",
          flex: 0,
          alignItems: "center",
          padding: `${i}px ${s}px`,
          fontSize: d,
          lineHeight: c,
          borderBottom: `${p}px ${u} ${f}`,
          "&-title": {
            display: "flex",
            flex: 1,
            alignItems: "center",
            minWidth: 0,
            minHeight: 0,
          },
        },
        [`${t}-extra`]: { flex: "none" },
        [`${t}-close`]: {
          display: "inline-block",
          marginInlineEnd: v,
          color: m,
          fontWeight: b,
          fontSize: d,
          fontStyle: "normal",
          lineHeight: 1,
          textAlign: "center",
          textTransform: "none",
          textDecoration: "none",
          background: "transparent",
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${r}`,
          textRendering: "auto",
          "&:focus, &:hover": { color: y, textDecoration: "none" },
        },
        [`${t}-title`]: {
          flex: 1,
          margin: 0,
          color: h,
          fontWeight: e.fontWeightStrong,
          fontSize: d,
          lineHeight: c,
        },
        [`${t}-body`]: {
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          padding: s,
          overflow: "auto",
        },
        [`${t}-footer`]: {
          flexShrink: 0,
          padding: `${g}px ${C}px`,
          borderTop: `${p}px ${u} ${f}`,
        },
        "&-rtl": { direction: "rtl" },
      },
    };
  },
  Y = S(
    "Drawer",
    (e) => {
      const t = k(e, {
        drawerFooterPaddingVertical: e.paddingXS,
        drawerFooterPaddingHorizontal: e.padding,
      });
      return [H(t), W(t)];
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase })
  );
const X = ["top", "right", "bottom", "left"],
  U = { distance: 180 },
  _ = l({
    compatConfig: { MODE: 3 },
    name: "ADrawer",
    inheritAttrs: !1,
    props: g(
      {
        autofocus: { type: Boolean, default: void 0 },
        closable: { type: Boolean, default: void 0 },
        closeIcon: t.any,
        destroyOnClose: { type: Boolean, default: void 0 },
        forceRender: { type: Boolean, default: void 0 },
        getContainer: {
          type: [String, Function, Boolean, Object],
          default: void 0,
        },
        maskClosable: { type: Boolean, default: void 0 },
        mask: { type: Boolean, default: void 0 },
        maskStyle: o(),
        rootClassName: String,
        rootStyle: o(),
        size: { type: String },
        drawerStyle: o(),
        headerStyle: o(),
        bodyStyle: o(),
        contentWrapperStyle: { type: Object, default: void 0 },
        title: t.any,
        visible: { type: Boolean, default: void 0 },
        open: { type: Boolean, default: void 0 },
        width: t.oneOfType([t.string, t.number]),
        height: t.oneOfType([t.string, t.number]),
        zIndex: Number,
        prefixCls: String,
        push: t.oneOfType([t.looseBool, { type: Object }]),
        placement: t.oneOf(X),
        keyboard: { type: Boolean, default: void 0 },
        extra: t.any,
        footer: t.any,
        footerStyle: o(),
        level: t.any,
        levelMove: { type: [Number, Array, Function] },
        handle: t.any,
        afterVisibleChange: Function,
        onAfterVisibleChange: Function,
        onAfterOpenChange: Function,
        "onUpdate:visible": Function,
        "onUpdate:open": Function,
        onClose: Function,
      },
      {
        closable: !0,
        placement: "right",
        maskClosable: !0,
        mask: !0,
        level: null,
        keyboard: !0,
        push: U,
      }
    ),
    slots: Object,
    setup(t, o) {
      let { emit: n, slots: a, attrs: l } = o;
      const f = r(!1),
        v = r(!1),
        m = r(null),
        b = r(!1),
        g = r(!1),
        C = $(() => {
          var e;
          return null !== (e = t.open) && void 0 !== e ? e : t.visible;
        });
      d(
        C,
        () => {
          C.value ? (b.value = !0) : (g.value = !1);
        },
        { immediate: !0 }
      ),
        d(
          [C, b],
          () => {
            C.value && b.value && (g.value = !0);
          },
          { immediate: !0 }
        );
      const w = O("parentDrawerOpts", null),
        { prefixCls: S, getPopupContainer: k, direction: x } = N("drawer", t),
        [T, V] = Y(S),
        A = $(() =>
          void 0 === t.getContainer && (null == k ? void 0 : k.value)
            ? () => k.value(document.body)
            : t.getContainer
        );
      D(
        !t.afterVisibleChange,
        "Drawer",
        "`afterVisibleChange` prop is deprecated, please use `@afterVisibleChange` event instead"
      );
      I("parentDrawerOpts", {
        setPush: () => {
          f.value = !0;
        },
        setPull: () => {
          (f.value = !1),
            s(() => {
              F();
            });
        },
      }),
        i(() => {
          C.value && w && w.setPush();
        }),
        c(() => {
          w && w.setPull();
        }),
        d(
          g,
          () => {
            w && (g.value ? w.setPush() : w.setPull());
          },
          { flush: "post" }
        );
      const F = () => {
          var e, t;
          null ===
            (t =
              null === (e = m.value) || void 0 === e ? void 0 : e.domFocus) ||
            void 0 === t ||
            t.call(e);
        },
        L = (e) => {
          n("update:visible", !1), n("update:open", !1), n("close", e);
        },
        W = (e) => {
          var o;
          e ||
            (!1 === v.value && (v.value = !0),
            t.destroyOnClose && (b.value = !1)),
            null === (o = t.afterVisibleChange) || void 0 === o || o.call(t, e),
            n("afterVisibleChange", e),
            n("afterOpenChange", e);
        },
        H = $(() => {
          const { push: e, placement: o } = t;
          let n;
          return (
            (n = "boolean" == typeof e ? (e ? U.distance : 0) : e.distance),
            (n = parseFloat(String(n || 0))),
            "left" === o || "right" === o
              ? `translateX(${"left" === o ? n : -n}px)`
              : "top" === o || "bottom" === o
              ? `translateY(${"top" === o ? n : -n}px)`
              : null
          );
        }),
        X = $(() => {
          var e;
          return null !== (e = t.width) && void 0 !== e
            ? e
            : "large" === t.size
            ? 736
            : 378;
        }),
        _ = $(() => {
          var e;
          return null !== (e = t.height) && void 0 !== e
            ? e
            : "large" === t.size
            ? 736
            : 378;
        }),
        G = $(() => {
          const { mask: e, placement: o } = t;
          if (!g.value && !e) return {};
          const n = {};
          return (
            "left" === o || "right" === o
              ? (n.width = E(X.value) ? `${X.value}px` : X.value)
              : (n.height = E(_.value) ? `${_.value}px` : _.value),
            n
          );
        }),
        K = $(() => {
          const { zIndex: o, contentWrapperStyle: n } = t,
            a = G.value;
          return [
            { zIndex: o, transform: f.value ? H.value : void 0 },
            e({}, n),
            a,
          ];
        }),
        q = (e) => {
          const { closable: o, headerStyle: n } = t,
            l = j(a, t, "extra"),
            r = j(a, t, "title");
          return r || o
            ? u(
                "div",
                {
                  class: p(`${e}-header`, {
                    [`${e}-header-close-only`]: o && !r && !l,
                  }),
                  style: n,
                },
                [
                  u("div", { class: `${e}-header-title` }, [
                    J(e),
                    r && u("div", { class: `${e}-title` }, [r]),
                  ]),
                  l && u("div", { class: `${e}-extra` }, [l]),
                ]
              )
            : null;
        },
        J = (e) => {
          var o;
          const { closable: n } = t,
            l = a.closeIcon
              ? null === (o = a.closeIcon) || void 0 === o
                ? void 0
                : o.call(a)
              : t.closeIcon;
          return (
            n &&
            u(
              "button",
              {
                key: "closer",
                onClick: L,
                "aria-label": "Close",
                class: `${e}-close`,
              },
              [void 0 === l ? u(z, null, null) : l]
            )
          );
        },
        Q = (e) => {
          const o = j(a, t, "footer");
          if (!o) return null;
          return u("div", { class: `${e}-footer`, style: t.footerStyle }, [o]);
        },
        Z = $(() =>
          p(
            { "no-mask": !t.mask, [`${S.value}-rtl`]: "rtl" === x.value },
            t.rootClassName,
            V.value
          )
        ),
        ee = $(() => P(M(S.value, "mask-motion"))),
        te = (e) => P(M(S.value, `panel-motion-${e}`));
      return () => {
        const {
            width: o,
            height: n,
            placement: r,
            mask: i,
            forceRender: s,
          } = t,
          d = (function (e, t) {
            var o = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (o[n] = e[n]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var a = 0;
              for (n = Object.getOwnPropertySymbols(e); a < n.length; a++)
                t.indexOf(n[a]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
                  (o[n[a]] = e[n[a]]);
            }
            return o;
          })(t, ["width", "height", "placement", "mask", "forceRender"]),
          c = e(
            e(
              e({}, l),
              h(d, [
                "size",
                "closeIcon",
                "closable",
                "destroyOnClose",
                "drawerStyle",
                "headerStyle",
                "bodyStyle",
                "title",
                "push",
                "onAfterVisibleChange",
                "onClose",
                "onUpdate:visible",
                "onUpdate:open",
                "visible",
              ])
            ),
            {
              forceRender: s,
              onClose: L,
              afterVisibleChange: W,
              handler: !1,
              prefixCls: S.value,
              open: g.value,
              showMask: i,
              placement: r,
              ref: m,
            }
          );
        return T(
          u(B, null, {
            default: () => [
              u(
                R,
                y(
                  y({}, c),
                  {},
                  {
                    maskMotion: ee.value,
                    motion: te,
                    width: X.value,
                    height: _.value,
                    getContainer: A.value,
                    rootClassName: Z.value,
                    rootStyle: t.rootStyle,
                    contentWrapperStyle: K.value,
                  }
                ),
                {
                  handler: t.handle ? () => t.handle : a.handle,
                  default: () =>
                    ((e) => {
                      var o;
                      if (v.value && !t.forceRender && !b.value) return null;
                      const { bodyStyle: n, drawerStyle: l } = t;
                      return u(
                        "div",
                        { class: `${e}-wrapper-body`, style: l },
                        [
                          q(e),
                          u(
                            "div",
                            { key: "body", class: `${e}-body`, style: n },
                            [
                              null === (o = a.default) || void 0 === o
                                ? void 0
                                : o.call(a),
                            ]
                          ),
                          Q(e),
                        ]
                      );
                    })(S.value),
                }
              ),
            ],
          })
        );
      };
    },
  }),
  G = x(_);
export { G as D };

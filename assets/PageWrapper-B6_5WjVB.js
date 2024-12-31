import {
  aK as e,
  b2 as t,
  aV as a,
  aW as r,
  aJ as o,
  aX as n,
  bq as l,
  bT as i,
  as as s,
  b1 as c,
  c as u,
  aR as p,
  n as d,
  aL as g,
  cj as f,
  aw as v,
  gD as m,
  aT as b,
  aU as h,
  c8 as y,
  cm as S,
  eW as $,
  f2 as x,
  b6 as C,
  cW as k,
  cc as w,
  dy as O,
  gE as H,
  bA as P,
  c7 as T,
  ck as z,
  ih as A,
  r as B,
  aS as L,
  eO as E,
  aC as j,
  ii as R,
  cd as I,
  d$ as _,
  e7 as M,
  ba as F,
  ij as D,
  eG as G,
  ik as X,
  hZ as N,
  bZ as W,
  b_ as U,
  bk as V,
  au as K,
  av as q,
  bl as J,
  bn as Q,
  bm as Y,
  cV as Z,
  gM as ee,
  hJ as te,
  eL as ae,
  bb as re,
  bW as oe,
  a as ne,
  il as le,
  im as ie,
  bO as se,
  es as ce,
  dB as ue,
  bR as pe,
  a_ as de,
  by as ge,
  bo as fe,
  dq as ve,
  ax as me,
  bN as be,
  aB as he,
  aA as ye,
  bE as Se,
  aD as $e,
  bM as xe,
  bp as Ce,
  bP as ke,
  bU as we,
  c5 as Oe,
} from "./index-CcOpQHgp.js";
import { p as He } from "./propTypes-BC7VambV.js";
import { D as Pe } from "./DownOutlined-BY2Elyy8.js";
import { u as Te } from "./useBreakpoint-CJwh33xD.js";
import { r as ze } from "./responsiveObserve-B8IuOfYh.js";
import { u as Ae } from "./useFlexGapSupport-CAEU6rXB.js";
const Be = (e) => ({
  color: e.colorLink,
  textDecoration: "none",
  outline: "none",
  cursor: "pointer",
  transition: `color ${e.motionDurationSlow}`,
  "&:focus, &:hover": { color: e.colorLinkHover },
  "&:active": { color: e.colorLinkActive },
});
function Le(a) {
  const r = e();
  return (
    t(
      () => {
        r.value = a();
      },
      { flush: "sync" }
    ),
    r
  );
}
const Ee = (e) => {
    const {
        antCls: t,
        componentCls: a,
        iconCls: r,
        avatarBg: l,
        avatarColor: i,
        containerSize: s,
        containerSizeLG: c,
        containerSizeSM: u,
        textFontSize: p,
        textFontSizeLG: d,
        textFontSizeSM: g,
        borderRadius: f,
        borderRadiusLG: v,
        borderRadiusSM: m,
        lineWidth: b,
        lineType: h,
      } = e,
      y = (e, t, o) => ({
        width: e,
        height: e,
        lineHeight: e - 2 * b + "px",
        borderRadius: "50%",
        [`&${a}-square`]: { borderRadius: o },
        [`${a}-string`]: {
          position: "absolute",
          left: { _skip_check_: !0, value: "50%" },
          transformOrigin: "0 center",
        },
        [`&${a}-icon`]: { fontSize: t, [`> ${r}`]: { margin: 0 } },
      });
    return {
      [a]: o(
        o(
          o(o({}, n(e)), {
            position: "relative",
            display: "inline-block",
            overflow: "hidden",
            color: i,
            whiteSpace: "nowrap",
            textAlign: "center",
            verticalAlign: "middle",
            background: l,
            border: `${b}px ${h} transparent`,
            "&-image": { background: "transparent" },
            [`${t}-image-img`]: { display: "block" },
          }),
          y(s, p, f)
        ),
        {
          "&-lg": o({}, y(c, d, v)),
          "&-sm": o({}, y(u, g, m)),
          "> img": {
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
        }
      ),
    };
  },
  je = (e) => {
    const {
      componentCls: t,
      groupBorderColor: a,
      groupOverlapping: r,
      groupSpace: o,
    } = e;
    return {
      [`${t}-group`]: {
        display: "inline-flex",
        [`${t}`]: { borderColor: a },
        "> *:not(:first-child)": { marginInlineStart: r },
      },
      [`${t}-group-popover`]: { [`${t} + ${t}`]: { marginInlineStart: o } },
    };
  },
  Re = a(
    "Avatar",
    (e) => {
      const { colorTextLightSolid: t, colorTextPlaceholder: a } = e,
        o = r(e, { avatarBg: a, avatarColor: t });
      return [Ee(o), je(o)];
    },
    (e) => {
      const {
        controlHeight: t,
        controlHeightLG: a,
        controlHeightSM: r,
        fontSize: o,
        fontSizeLG: n,
        fontSizeXL: l,
        fontSizeHeading3: i,
        marginXS: s,
        marginXXS: c,
        colorBorderBg: u,
      } = e;
      return {
        containerSize: t,
        containerSizeLG: a,
        containerSizeSM: r,
        textFontSize: Math.round((n + l) / 2),
        textFontSizeLG: i,
        textFontSizeSM: o,
        groupSpace: c,
        groupOverlapping: -s,
        groupBorderColor: u,
      };
    }
  ),
  Ie = Symbol("AvatarContextKey"),
  _e = s({
    compatConfig: { MODE: 3 },
    name: "AAvatar",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      shape: { type: String, default: "circle" },
      size: { type: [Number, String, Object], default: () => "default" },
      src: String,
      srcset: String,
      icon: h.any,
      alt: String,
      gap: Number,
      draggable: { type: Boolean, default: void 0 },
      crossOrigin: String,
      loadError: { type: Function },
    },
    slots: Object,
    setup(t, a) {
      let { slots: r, attrs: n } = a;
      const i = e(!0),
        s = e(!1),
        h = e(1),
        y = e(null),
        S = e(null),
        { prefixCls: $ } = c("avatar", t),
        [x, C] = Re($),
        k = l(Ie, {}),
        w = u(() => ("default" === t.size ? k.size : t.size)),
        O = Te(),
        H = Le(() => {
          if ("object" != typeof t.size) return;
          const e = ze.find((e) => O.value[e]);
          return t.size[e];
        }),
        P = () => {
          if (!y.value || !S.value) return;
          const e = y.value.offsetWidth,
            a = S.value.offsetWidth;
          if (0 !== e && 0 !== a) {
            const { gap: r = 4 } = t;
            2 * r < a && (h.value = a - 2 * r < e ? (a - 2 * r) / e : 1);
          }
        },
        T = () => {
          const { loadError: e } = t;
          !1 !== (null == e ? void 0 : e()) && (i.value = !1);
        };
      return (
        p(
          () => t.src,
          () => {
            d(() => {
              (i.value = !0), (h.value = 1);
            });
          }
        ),
        p(
          () => t.gap,
          () => {
            d(() => {
              P();
            });
          }
        ),
        g(() => {
          d(() => {
            P(), (s.value = !0);
          });
        }),
        () => {
          var e, a;
          const {
              shape: l,
              src: c,
              alt: u,
              srcset: p,
              draggable: d,
              crossOrigin: g,
            } = t,
            O = null !== (e = k.shape) && void 0 !== e ? e : l,
            z = f(r, t, "icon"),
            A = $.value,
            B = {
              [`${n.class}`]: !!n.class,
              [A]: !0,
              [`${A}-lg`]: "large" === w.value,
              [`${A}-sm`]: "small" === w.value,
              [`${A}-${O}`]: !0,
              [`${A}-image`]: c && i.value,
              [`${A}-icon`]: z,
              [C.value]: !0,
            },
            L =
              "number" == typeof w.value
                ? {
                    width: `${w.value}px`,
                    height: `${w.value}px`,
                    lineHeight: `${w.value}px`,
                    fontSize: z ? w.value / 2 + "px" : "18px",
                  }
                : {},
            E = null === (a = r.default) || void 0 === a ? void 0 : a.call(r);
          let j;
          if (c && i.value)
            j = v(
              "img",
              {
                draggable: d,
                src: c,
                srcset: p,
                onError: T,
                alt: u,
                crossorigin: g,
              },
              null
            );
          else if (z) j = z;
          else if (s.value || 1 !== h.value) {
            const e = `scale(${h.value}) translateX(-50%)`,
              t = { msTransform: e, WebkitTransform: e, transform: e },
              a =
                "number" == typeof w.value
                  ? { lineHeight: `${w.value}px` }
                  : {};
            j = v(
              m,
              { onResize: P },
              {
                default: () => [
                  v(
                    "span",
                    { class: `${A}-string`, ref: y, style: o(o({}, a), t) },
                    [E]
                  ),
                ],
              }
            );
          } else
            j = v(
              "span",
              { class: `${A}-string`, ref: y, style: { opacity: 0 } },
              [E]
            );
          return x(
            v(
              "span",
              b(
                b({}, n),
                {},
                {
                  ref: S,
                  class: B,
                  style: [
                    L,
                    ((R = !!z),
                    H.value
                      ? {
                          width: `${H.value}px`,
                          height: `${H.value}px`,
                          lineHeight: `${H.value}px`,
                          fontSize: (R ? H.value / 2 : 18) + "px",
                        }
                      : {}),
                    n.style,
                  ],
                }
              ),
              [j]
            )
          );
          var R;
        }
      );
    },
  }),
  Me = s({
    compatConfig: { MODE: 3 },
    name: "AAvatarGroup",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      maxCount: Number,
      maxStyle: { type: Object, default: void 0 },
      maxPopoverPlacement: { type: String, default: "top" },
      maxPopoverTrigger: String,
      size: { type: [Number, String, Object], default: "default" },
      shape: { type: String, default: "circle" },
    },
    setup(e, a) {
      let { slots: r, attrs: o } = a;
      const { prefixCls: n, direction: l } = c("avatar", e),
        s = u(() => `${n.value}-group`),
        [p, d] = Re(n);
      return (
        t(() => {
          ((e) => {
            i(Ie, e);
          })({ size: e.size, shape: e.shape });
        }),
        () => {
          const {
              maxPopoverPlacement: t = "top",
              maxCount: a,
              maxStyle: n,
              maxPopoverTrigger: i = "hover",
              shape: c,
            } = e,
            u = {
              [s.value]: !0,
              [`${s.value}-rtl`]: "rtl" === l.value,
              [`${o.class}`]: !!o.class,
              [d.value]: !0,
            },
            g = f(r, e),
            m = y(g).map((e, t) => S(e, { key: `avatar-key-${t}` })),
            h = m.length;
          if (a && a < h) {
            const e = m.slice(0, a),
              r = m.slice(a, h);
            return (
              e.push(
                v(
                  $,
                  {
                    key: "avatar-popover-key",
                    content: r,
                    trigger: i,
                    placement: t,
                    overlayClassName: `${s.value}-popover`,
                  },
                  {
                    default: () => [
                      v(
                        _e,
                        { style: n, shape: c },
                        { default: () => ["+" + (h - a)] }
                      ),
                    ],
                  }
                )
              ),
              p(v("div", b(b({}, o), {}, { class: u, style: o.style }), [e]))
            );
          }
          return p(
            v("div", b(b({}, o), {}, { class: u, style: o.style }), [m])
          );
        }
      );
    },
  });
(_e.Group = Me),
  (_e.install = function (e) {
    return e.component(_e.name, _e), e.component(Me.name, Me), e;
  });
var Fe = function (e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (a[r] = e[r]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (a[r[o]] = e[r[o]]);
  }
  return a;
};
const De = s({
    compatConfig: { MODE: 3 },
    name: "ABreadcrumbItem",
    inheritAttrs: !1,
    __ANT_BREADCRUMB_ITEM: !0,
    props: {
      prefixCls: String,
      href: String,
      separator: h.any,
      dropdownProps: x(),
      overlay: h.any,
      onClick: C(),
    },
    slots: Object,
    setup(e, t) {
      let { slots: a, attrs: r, emit: o } = t;
      const { prefixCls: n } = c("breadcrumb", e),
        l = (e) => {
          o("click", e);
        };
      return () => {
        var t;
        const o = null !== (t = f(a, e, "separator")) && void 0 !== t ? t : "/",
          i = f(a, e),
          { class: s, style: c } = r,
          u = Fe(r, ["class", "style"]);
        let p;
        return (
          (p =
            void 0 !== e.href
              ? v("a", b({ class: `${n.value}-link`, onClick: l }, u), [i])
              : v("span", b({ class: `${n.value}-link`, onClick: l }, u), [i])),
          (p = ((t, r) => {
            const o = f(a, e, "overlay");
            return o
              ? v(
                  k,
                  b(
                    b({}, e.dropdownProps),
                    {},
                    { overlay: o, placement: "bottom" }
                  ),
                  {
                    default: () => [
                      v("span", { class: `${r}-overlay-link` }, [
                        t,
                        v(Pe, null, null),
                      ]),
                    ],
                  }
                )
              : t;
          })(p, n.value)),
          null != i
            ? v("li", { class: s, style: c }, [
                p,
                o && v("span", { class: `${n.value}-separator` }, [o]),
              ])
            : null
        );
      };
    },
  }),
  Ge = (e) => {
    const { componentCls: t, iconCls: a } = e;
    return {
      [t]: o(o({}, n(e)), {
        color: e.breadcrumbBaseColor,
        fontSize: e.breadcrumbFontSize,
        [a]: { fontSize: e.breadcrumbIconFontSize },
        ol: {
          display: "flex",
          flexWrap: "wrap",
          margin: 0,
          padding: 0,
          listStyle: "none",
        },
        a: o(
          {
            color: e.breadcrumbLinkColor,
            transition: `color ${e.motionDurationMid}`,
            padding: `0 ${e.paddingXXS}px`,
            borderRadius: e.borderRadiusSM,
            height: e.lineHeight * e.fontSize,
            display: "inline-block",
            marginInline: -e.marginXXS,
            "&:hover": {
              color: e.breadcrumbLinkColorHover,
              backgroundColor: e.colorBgTextHover,
            },
          },
          w(e)
        ),
        "li:last-child": {
          color: e.breadcrumbLastItemColor,
          [`& > ${t}-separator`]: { display: "none" },
        },
        [`${t}-separator`]: {
          marginInline: e.breadcrumbSeparatorMargin,
          color: e.breadcrumbSeparatorColor,
        },
        [`${t}-link`]: {
          [`\n          > ${a} + span,\n          > ${a} + a\n        `]: {
            marginInlineStart: e.marginXXS,
          },
        },
        [`${t}-overlay-link`]: {
          borderRadius: e.borderRadiusSM,
          height: e.lineHeight * e.fontSize,
          display: "inline-block",
          padding: `0 ${e.paddingXXS}px`,
          marginInline: -e.marginXXS,
          [`> ${a}`]: {
            marginInlineStart: e.marginXXS,
            fontSize: e.fontSizeIcon,
          },
          "&:hover": {
            color: e.breadcrumbLinkColorHover,
            backgroundColor: e.colorBgTextHover,
            a: { color: e.breadcrumbLinkColorHover },
          },
          a: { "&:hover": { backgroundColor: "transparent" } },
        },
        [`&${e.componentCls}-rtl`]: { direction: "rtl" },
      }),
    };
  },
  Xe = a("Breadcrumb", (e) => {
    const t = r(e, {
      breadcrumbBaseColor: e.colorTextDescription,
      breadcrumbFontSize: e.fontSize,
      breadcrumbIconFontSize: e.fontSize,
      breadcrumbLinkColor: e.colorTextDescription,
      breadcrumbLinkColorHover: e.colorText,
      breadcrumbLastItemColor: e.colorText,
      breadcrumbSeparatorMargin: e.marginXS,
      breadcrumbSeparatorColor: e.colorTextDescription,
    });
    return [Ge(t)];
  });
function Ne(e) {
  const { route: t, params: a, routes: r, paths: o } = e,
    n = r.indexOf(t) === r.length - 1,
    l = (function (e, t) {
      if (!e.breadcrumbName) return null;
      const a = Object.keys(t).join("|"),
        r = e.breadcrumbName.replace(
          new RegExp(`:(${a})`, "g"),
          (e, a) => t[a] || e
        );
      return r;
    })(t, a);
  return n ? v("span", null, [l]) : v("a", { href: `#/${o.join("/")}` }, [l]);
}
const We = s({
  compatConfig: { MODE: 3 },
  name: "ABreadcrumb",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    routes: { type: Array },
    params: h.any,
    separator: h.any,
    itemRender: { type: Function },
  },
  slots: Object,
  setup(e, t) {
    let { slots: a, attrs: r } = t;
    const { prefixCls: o, direction: n } = c("breadcrumb", e),
      [l, i] = Xe(o),
      s = (e, t) => (
        (e = (e || "").replace(/^\//, "")),
        Object.keys(t).forEach((a) => {
          e = e.replace(`:${a}`, t[a]);
        }),
        e
      ),
      u = (e, t, a) => {
        const r = [...e],
          o = s(t || "", a);
        return o && r.push(o), r;
      };
    return () => {
      var t;
      let c;
      const { routes: p, params: d = {} } = e,
        g = y(f(a, e)),
        m = null !== (t = f(a, e, "separator")) && void 0 !== t ? t : "/",
        h = e.itemRender || a.itemRender || Ne;
      p && p.length > 0
        ? (c = ((e) => {
            let {
              routes: t = [],
              params: a = {},
              separator: r,
              itemRender: o = Ne,
            } = e;
            const n = [];
            return t.map((e) => {
              const l = s(e.path, a);
              l && n.push(l);
              const i = [...n];
              let c = null;
              e.children &&
                e.children.length &&
                (c = v(
                  P,
                  {
                    items: e.children.map((e) => ({
                      key: e.path || e.breadcrumbName,
                      label: o({
                        route: e,
                        params: a,
                        routes: t,
                        paths: u(i, e.path, a),
                      }),
                    })),
                  },
                  null
                ));
              const p = { separator: r };
              return (
                c && (p.overlay = c),
                v(De, b(b({}, p), {}, { key: l || e.breadcrumbName }), {
                  default: () => [
                    o({ route: e, params: a, routes: t, paths: i }),
                  ],
                })
              );
            });
          })({ routes: p, params: d, separator: m, itemRender: h }))
        : g.length &&
          (c = g.map(
            (e, t) => (
              O(
                "object" == typeof e.type &&
                  (e.type.__ANT_BREADCRUMB_ITEM ||
                    e.type.__ANT_BREADCRUMB_SEPARATOR)
              ),
              H(e, { separator: m, key: t })
            )
          ));
      const S = {
        [o.value]: !0,
        [`${o.value}-rtl`]: "rtl" === n.value,
        [`${r.class}`]: !!r.class,
        [i.value]: !0,
      };
      return l(v("nav", b(b({}, r), {}, { class: S }), [v("ol", null, [c])]));
    };
  },
});
var Ue = function (e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (a[r] = e[r]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (a[r[o]] = e[r[o]]);
  }
  return a;
};
const Ve = s({
  compatConfig: { MODE: 3 },
  name: "ABreadcrumbSeparator",
  __ANT_BREADCRUMB_SEPARATOR: !0,
  inheritAttrs: !1,
  props: { prefixCls: String },
  setup(e, t) {
    let { slots: a, attrs: r } = t;
    const { prefixCls: o } = c("breadcrumb", e);
    return () => {
      var e;
      const { separator: t, class: n } = r,
        l = Ue(r, ["separator", "class"]),
        i = y(null === (e = a.default) || void 0 === e ? void 0 : e.call(a));
      return v("span", b({ class: [`${o.value}-separator`, n] }, l), [
        i.length > 0 ? i : "/",
      ]);
    };
  },
});
(We.Item = De),
  (We.Separator = Ve),
  (We.install = function (e) {
    return (
      e.component(We.name, We),
      e.component(De.name, De),
      e.component(Ve.name, Ve),
      e
    );
  });
var Ke = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  },
  name: "arrow-left",
  theme: "outlined",
};
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? Object(arguments[t]) : {},
      r = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols &&
      (r = r.concat(
        Object.getOwnPropertySymbols(a).filter(function (e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable;
        })
      )),
      r.forEach(function (t) {
        Je(e, t, a[t]);
      });
  }
  return e;
}
function Je(e, t, a) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = a),
    e
  );
}
var Qe = function (e, t) {
  var a = qe({}, e, t.attrs);
  return v(T, qe({}, a, { icon: Ke }), null);
};
(Qe.displayName = "ArrowLeftOutlined"), (Qe.inheritAttrs = !1);
var Ye = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z",
        },
      },
    ],
  },
  name: "arrow-right",
  theme: "outlined",
};
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? Object(arguments[t]) : {},
      r = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols &&
      (r = r.concat(
        Object.getOwnPropertySymbols(a).filter(function (e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable;
        })
      )),
      r.forEach(function (t) {
        et(e, t, a[t]);
      });
  }
  return e;
}
function et(e, t, a) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = a),
    e
  );
}
var tt = function (e, t) {
  var a = Ze({}, e, t.attrs);
  return v(T, Ze({}, a, { icon: Ye }), null);
};
(tt.displayName = "ArrowRightOutlined"), (tt.inheritAttrs = !1);
var at = function (e, t) {
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (a[r] = e[r]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (a[r[o]] = e[r[o]]);
  }
  return a;
};
const rt = {
    border: 0,
    background: "transparent",
    padding: 0,
    lineHeight: "inherit",
    display: "inline-block",
  },
  ot = s({
    compatConfig: { MODE: 3 },
    name: "TransButton",
    inheritAttrs: !1,
    props: {
      noStyle: { type: Boolean, default: void 0 },
      onClick: Function,
      disabled: { type: Boolean, default: void 0 },
      autofocus: { type: Boolean, default: void 0 },
    },
    setup(t, a) {
      let { slots: r, emit: n, attrs: l, expose: i } = a;
      const s = e(),
        c = (e) => {
          const { keyCode: t } = e;
          t === z.ENTER && e.preventDefault();
        },
        u = (e) => {
          const { keyCode: t } = e;
          t === z.ENTER && n("click", e);
        },
        p = (e) => {
          n("click", e);
        },
        d = () => {
          s.value && s.value.focus();
        };
      return (
        g(() => {
          t.autofocus && d();
        }),
        i({
          focus: d,
          blur: () => {
            s.value && s.value.blur();
          },
        }),
        () => {
          var e;
          const { noStyle: a, disabled: n } = t,
            i = at(t, ["noStyle", "disabled"]);
          let d = {};
          return (
            a || (d = o({}, rt)),
            n && (d.pointerEvents = "none"),
            v(
              "div",
              b(
                b(b({ role: "button", tabindex: 0, ref: s }, i), l),
                {},
                {
                  onClick: p,
                  onKeydown: c,
                  onKeyup: u,
                  style: o(o({}, d), l.style || {}),
                }
              ),
              [null === (e = r.default) || void 0 === e ? void 0 : e.call(r)]
            )
          );
        }
      );
    },
  }),
  nt = { small: 8, middle: 16, large: 24 };
const lt = s({
  compatConfig: { MODE: 3 },
  name: "ASpace",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    size: { type: [String, Number, Array] },
    direction: h.oneOf(I("horizontal", "vertical")).def("horizontal"),
    align: h.oneOf(I("start", "end", "center", "baseline")),
    wrap: _(),
  },
  slots: Object,
  setup(e, t) {
    let { slots: a, attrs: r } = t;
    const { prefixCls: n, space: l, direction: i } = c("space", e),
      [s, d] = A(n),
      g = Ae(),
      f = u(() => {
        var t, a, r;
        return null !==
          (r =
            null !== (t = e.size) && void 0 !== t
              ? t
              : null === (a = null == l ? void 0 : l.value) || void 0 === a
              ? void 0
              : a.size) && void 0 !== r
          ? r
          : "small";
      }),
      m = B(),
      h = B();
    p(
      f,
      () => {
        [m.value, h.value] = (
          Array.isArray(f.value) ? f.value : [f.value, f.value]
        ).map((e) =>
          (function (e) {
            return "string" == typeof e ? nt[e] : e || 0;
          })(e)
        );
      },
      { immediate: !0 }
    );
    const y = u(() =>
        void 0 === e.align && "horizontal" === e.direction ? "center" : e.align
      ),
      S = u(() =>
        L(n.value, d.value, `${n.value}-${e.direction}`, {
          [`${n.value}-rtl`]: "rtl" === i.value,
          [`${n.value}-align-${y.value}`]: y.value,
        })
      ),
      $ = u(() => ("rtl" === i.value ? "marginLeft" : "marginRight")),
      x = u(() => {
        const t = {};
        return (
          g.value &&
            ((t.columnGap = `${m.value}px`), (t.rowGap = `${h.value}px`)),
          o(
            o({}, t),
            e.wrap && { flexWrap: "wrap", marginBottom: -h.value + "px" }
          )
        );
      });
    return () => {
      var t, l;
      const { wrap: i, direction: c = "horizontal" } = e,
        u = null === (t = a.default) || void 0 === t ? void 0 : t.call(a),
        p = E(u),
        d = p.length;
      if (0 === d) return null;
      const f = null === (l = a.split) || void 0 === l ? void 0 : l.call(a),
        y = `${n.value}-item`,
        C = m.value,
        k = d - 1;
      return v(
        "div",
        b(
          b({}, r),
          {},
          { class: [S.value, r.class], style: [x.value, r.style] }
        ),
        [
          p.map((e, t) => {
            let a = u.indexOf(e);
            -1 === a && (a = `$$space-${t}`);
            let r = {};
            return (
              g.value ||
                ("vertical" === c
                  ? t < k && (r = { marginBottom: C / (f ? 2 : 1) + "px" })
                  : (r = o(
                      o({}, t < k && { [$.value]: C / (f ? 2 : 1) + "px" }),
                      i && { paddingBottom: `${h.value}px` }
                    ))),
              s(
                v(j, { key: a }, [
                  v("div", { class: y, style: r }, [e]),
                  t < k &&
                    f &&
                    v("span", { class: `${y}-split`, style: r }, [f]),
                ])
              )
            );
          }),
        ]
      );
    };
  },
});
(lt.Compact = R),
  (lt.install = function (e) {
    return e.component(lt.name, lt), e.component(R.name, R), e;
  });
const it = (e) => {
    const { componentCls: t, antCls: a } = e;
    return {
      [t]: o(o({}, n(e)), {
        position: "relative",
        padding: `${e.pageHeaderPaddingVertical}px ${e.pageHeaderPadding}px`,
        backgroundColor: e.colorBgContainer,
        [`&${t}-ghost`]: { backgroundColor: e.pageHeaderGhostBg },
        "&.has-footer": { paddingBottom: 0 },
        [`${t}-back`]: {
          marginRight: e.marginMD,
          fontSize: e.fontSizeLG,
          lineHeight: 1,
          "&-button": o(o({}, Be(e)), {
            color: e.pageHeaderBackColor,
            cursor: "pointer",
          }),
        },
        [`${a}-divider-vertical`]: {
          height: "14px",
          margin: `0 ${e.marginSM}`,
          verticalAlign: "middle",
        },
        [`${a}-breadcrumb + &-heading`]: { marginTop: e.marginXS },
        [`${t}-heading`]: {
          display: "flex",
          justifyContent: "space-between",
          "&-left": {
            display: "flex",
            alignItems: "center",
            margin: e.marginXS / 2 + "px 0",
            overflow: "hidden",
          },
          "&-title": o(
            {
              marginRight: e.marginSM,
              marginBottom: 0,
              color: e.colorTextHeading,
              fontWeight: 600,
              fontSize: e.pageHeaderHeadingTitle,
              lineHeight: `${e.controlHeight}px`,
            },
            M
          ),
          [`${a}-avatar`]: { marginRight: e.marginSM },
          "&-sub-title": o(
            {
              marginRight: e.marginSM,
              color: e.colorTextDescription,
              fontSize: e.pageHeaderHeadingSubTitle,
              lineHeight: e.lineHeight,
            },
            M
          ),
          "&-extra": {
            margin: e.marginXS / 2 + "px 0",
            whiteSpace: "nowrap",
            "> *": { marginLeft: e.marginSM, whiteSpace: "unset" },
            "> *:first-child": { marginLeft: 0 },
          },
        },
        [`${t}-content`]: { paddingTop: e.pageHeaderContentPaddingVertical },
        [`${t}-footer`]: {
          marginTop: e.marginMD,
          [`${a}-tabs`]: {
            [`> ${a}-tabs-nav`]: { margin: 0, "&::before": { border: "none" } },
            [`${a}-tabs-tab`]: {
              paddingTop: e.paddingXS,
              paddingBottom: e.paddingXS,
              fontSize: e.pageHeaderTabFontSize,
            },
          },
        },
        [`${t}-compact ${t}-heading`]: { flexWrap: "wrap" },
        [`&${e.componentCls}-rtl`]: { direction: "rtl" },
      }),
    };
  },
  st = a("PageHeader", (e) => {
    const t = r(e, {
      pageHeaderPadding: e.paddingLG,
      pageHeaderPaddingVertical: e.paddingMD,
      pageHeaderPaddingBreadcrumb: e.paddingSM,
      pageHeaderContentPaddingVertical: e.paddingSM,
      pageHeaderBackColor: e.colorTextBase,
      pageHeaderGhostBg: "transparent",
      pageHeaderHeadingTitle: e.fontSizeHeading4,
      pageHeaderHeadingSubTitle: e.fontSize,
      pageHeaderTabFontSize: e.fontSizeLG,
    });
    return [it(t)];
  }),
  ct = F(
    s({
      compatConfig: { MODE: 3 },
      name: "APageHeader",
      inheritAttrs: !1,
      props: {
        backIcon: G(),
        prefixCls: String,
        title: G(),
        subTitle: G(),
        breadcrumb: h.object,
        tags: G(),
        footer: G(),
        extra: G(),
        avatar: x(),
        ghost: { type: Boolean, default: void 0 },
        onBack: Function,
      },
      slots: Object,
      setup(t, a) {
        let { emit: r, slots: o, attrs: n } = a;
        const {
            prefixCls: l,
            direction: i,
            pageHeader: s,
          } = c("page-header", t),
          [p, d] = st(l),
          g = e(!1),
          f = D(),
          h = (e) => {
            let { width: t } = e;
            f.value || (g.value = t < 768);
          },
          S = u(() => {
            var e, a, r;
            return (
              null ===
                (r =
                  null !== (e = t.ghost) && void 0 !== e
                    ? e
                    : null === (a = null == s ? void 0 : s.value) ||
                      void 0 === a
                    ? void 0
                    : a.ghost) ||
              void 0 === r ||
              r
            );
          }),
          $ = () => {
            var e;
            return t.breadcrumb
              ? v(We, t.breadcrumb, null)
              : null === (e = o.breadcrumb) || void 0 === e
              ? void 0
              : e.call(o);
          },
          x = () => {
            var e, a, n, s, c, u, p, d, g;
            const { avatar: f } = t,
              m =
                null !== (e = t.title) && void 0 !== e
                  ? e
                  : null === (a = o.title) || void 0 === a
                  ? void 0
                  : a.call(o),
              b =
                null !== (n = t.subTitle) && void 0 !== n
                  ? n
                  : null === (s = o.subTitle) || void 0 === s
                  ? void 0
                  : s.call(o),
              h =
                null !== (c = t.tags) && void 0 !== c
                  ? c
                  : null === (u = o.tags) || void 0 === u
                  ? void 0
                  : u.call(o),
              y =
                null !== (p = t.extra) && void 0 !== p
                  ? p
                  : null === (d = o.extra) || void 0 === d
                  ? void 0
                  : d.call(o),
              S = `${l.value}-heading`,
              $ = m || b || h || y;
            if (!$) return null;
            const x = (() => {
                var e, a, r;
                return null !==
                  (r =
                    null !== (e = t.backIcon) && void 0 !== e
                      ? e
                      : null === (a = o.backIcon) || void 0 === a
                      ? void 0
                      : a.call(o)) && void 0 !== r
                  ? r
                  : "rtl" === i.value
                  ? v(tt, null, null)
                  : v(Qe, null, null);
              })(),
              C = ((e) =>
                e && t.onBack
                  ? v(
                      N,
                      {
                        componentName: "PageHeader",
                        children: (t) => {
                          let { back: a } = t;
                          return v("div", { class: `${l.value}-back` }, [
                            v(
                              ot,
                              {
                                onClick: (e) => {
                                  r("back", e);
                                },
                                class: `${l.value}-back-button`,
                                "aria-label": a,
                              },
                              { default: () => [e] }
                            ),
                          ]);
                        },
                      },
                      null
                    )
                  : null)(x);
            return v("div", { class: S }, [
              (C || f || $) &&
                v("div", { class: `${S}-left` }, [
                  C,
                  f
                    ? v(_e, f, null)
                    : null === (g = o.avatar) || void 0 === g
                    ? void 0
                    : g.call(o),
                  m &&
                    v(
                      "span",
                      {
                        class: `${S}-title`,
                        title: "string" == typeof m ? m : void 0,
                      },
                      [m]
                    ),
                  b &&
                    v(
                      "span",
                      {
                        class: `${S}-sub-title`,
                        title: "string" == typeof b ? b : void 0,
                      },
                      [b]
                    ),
                  h && v("span", { class: `${S}-tags` }, [h]),
                ]),
              y &&
                v("span", { class: `${S}-extra` }, [
                  v(lt, null, { default: () => [y] }),
                ]),
            ]);
          },
          C = () => {
            var e, a;
            const r =
              null !== (e = t.footer) && void 0 !== e
                ? e
                : E(
                    null === (a = o.footer) || void 0 === a ? void 0 : a.call(o)
                  );
            return X(r) ? null : v("div", { class: `${l.value}-footer` }, [r]);
          },
          k = (e) => v("div", { class: `${l.value}-content` }, [e]);
        return () => {
          var e, a;
          const r =
              (null === (e = t.breadcrumb) || void 0 === e
                ? void 0
                : e.routes) || o.breadcrumb,
            s = t.footer || o.footer,
            c = y(
              null === (a = o.default) || void 0 === a ? void 0 : a.call(o)
            ),
            u = L(
              l.value,
              {
                "has-breadcrumb": r,
                "has-footer": s,
                [`${l.value}-ghost`]: S.value,
                [`${l.value}-rtl`]: "rtl" === i.value,
                [`${l.value}-compact`]: g.value,
              },
              n.class,
              d.value
            );
          return p(
            v(
              m,
              { onResize: h },
              {
                default: () => [
                  v("div", b(b({}, n), {}, { class: u }), [
                    $(),
                    x(),
                    c.length ? k(c) : null,
                    C(),
                  ]),
                ],
              }
            )
          );
        };
      },
    })
  );
const ut = V(
  s({
    name: "PageFooter",
    inheritAttrs: !1,
    setup() {
      const { prefixCls: e } = W("page-footer"),
        { getCalcContentWidth: t } = U();
      return { prefixCls: e, getCalcContentWidth: t };
    },
  }),
  [
    [
      "render",
      function (e, t, a, r, o, n) {
        return (
          K(),
          q(
            "div",
            {
              class: Y(e.prefixCls),
              style: Z({ width: e.getCalcContentWidth }),
            },
            [
              J(
                "div",
                { class: Y(`${e.prefixCls}__left`) },
                [Q(e.$slots, "left", {}, void 0, !0)],
                2
              ),
              Q(e.$slots, "default", {}, void 0, !0),
              J(
                "div",
                { class: Y(`${e.prefixCls}__right`) },
                [Q(e.$slots, "right", {}, void 0, !0)],
                2
              ),
            ],
            6
          )
        );
      },
    ],
    ["__scopeId", "data-v-a7068509"],
  ]
);
function pt(e) {
  let t;
  g(() => {
    e(),
      d(() => {
        t = !0;
      });
  }),
    ee(() => {
      t && e();
    });
}
const dt = Symbol();
function gt(e, t = 150, a) {
  let r = () => {
    e();
  };
  const o = oe(r, t);
  r = o;
  const n = () => {
      a && a.immediate && r(), window.addEventListener("resize", r);
    },
    l = () => {
      window.removeEventListener("resize", r);
    };
  return (
    ae(() => {
      n();
    }),
    re(() => {
      l();
    }),
    [n, l]
  );
}
const ft = B(0),
  vt = B(0);
function mt() {
  return {
    headerHeightRef: ft,
    footerHeightRef: vt,
    setHeaderHeight: function (e) {
      ft.value = e;
    },
    setFooterHeight: function (e) {
      vt.value = e;
    },
  };
}
function bt() {
  const e = B(window.innerHeight),
    t = B(window.innerHeight),
    a = u(() => ne(e) - ne(ft) - ne(vt) || 0);
  gt(
    () => {
      e.value = window.innerHeight;
    },
    100,
    { immediate: !0 }
  ),
    te(
      {
        contentHeight: a,
        setPageHeight: async function (e) {
          t.value = e;
        },
        pageHeight: t,
      },
      dt,
      { native: !0 }
    );
}
const ht = s({
    name: "PageWrapper",
    components: { PageFooter: ut },
    inheritAttrs: !1,
    props: {
      title: He.string,
      dense: { type: Boolean, default: !1 },
      ghost: He.bool,
      content: He.string,
      contentStyle: { type: Object },
      source: He.string,
      contentBackground: He.bool,
      contentFullHeight: He.bool,
      contentClass: He.string,
      fixedHeight: He.bool,
      upwardSpace: He.oneOfType([He.number, He.string]).def(0),
      autoTitle: He.bool,
    },
    setup(e, { slots: t, attrs: a }) {
      const r = B(null),
        o = B(null),
        n = B(null),
        l = B(null),
        { prefixCls: s } = W("page-wrapper"),
        c = B(!1),
        g = pe();
      i(
        "PageWrapperFixedHeight",
        u(() => e.fixedHeight)
      );
      const f = u(() => e.contentFullHeight),
        v = u(() => e.upwardSpace),
        {
          redoHeight: m,
          setCompensation: b,
          contentHeight: h,
        } = (function (e, t, a, r, o = 0, n = B(0)) {
          const l = B(null),
            { footerHeightRef: i } = mt();
          let s = { useLayoutFooter: !0 };
          function c(e, t = "all") {
            function a(e) {
              return Number(e.replace(/\D/g, ""));
            }
            let r = 0;
            const o = "0px";
            if (e) {
              const n = getComputedStyle(e),
                l = a(n?.marginTop ?? o),
                i = a(n?.marginBottom ?? o),
                s = a(n?.paddingTop ?? o),
                c = a(n?.paddingBottom ?? o);
              "all" === t
                ? ((r += l), (r += i), (r += s), (r += c))
                : "top" === t
                ? ((r += l), (r += s))
                : ((r += i), (r += c));
            }
            return r;
          }
          function u(e) {
            return null == e ? null : e instanceof HTMLDivElement ? e : e.$el;
          }
          async function g() {
            if (!e.value) return;
            await d();
            const p = u(ne(t));
            if (!p) return;
            const { bottomIncludeBody: g } = ie(p);
            let f = 0;
            a.forEach((e) => {
              f += u(ne(e))?.offsetHeight ?? 0;
            });
            let v = c(p) ?? 0;
            r.forEach((e) => {
              v += c(u(ne(e)));
            });
            let m = 0;
            function b(e, t) {
              if (e && t) {
                const a = e.parentElement;
                a &&
                  (ce(t)
                    ? a.classList.contains(t)
                      ? (m += c(a, "bottom"))
                      : ((m += c(a, "bottom")), b(a, t))
                    : ue(t) && t > 0 && ((m += c(a, "bottom")), b(a, --t)));
              }
            }
            se(o) ? b(p, ne(o)) : b(p, o);
            let h = g - ne(i) - ne(n) - f - v - m;
            const y = () => {
              s.elements?.forEach((e) => {
                h += u(ne(e))?.offsetHeight ?? 0;
              });
            };
            s.useLayoutFooter && ne(i), y(), (l.value = h);
          }
          return (
            pt(() => {
              d(() => {
                g();
              });
            }),
            gt(
              () => {
                g();
              },
              50,
              { immediate: !0 }
            ),
            le(t, () => {
              g();
            }),
            p(
              () => [i.value],
              () => {
                g();
              },
              { flush: "post", immediate: !0 }
            ),
            {
              redoHeight: function () {
                d(() => {
                  g();
                });
              },
              setCompensation: (e) => {
                s = e;
              },
              contentHeight: l,
            }
          );
        })(f, r, [o, l], [n], v);
      b({ useLayoutFooter: !0, elements: [l] });
      const y = u(() => [s, { [`${s}--dense`]: e.dense }, a.class ?? {}]),
        S = u(() => t?.leftFooter || t?.rightFooter),
        $ = u(() =>
          Object.keys(
            de(t, "default", "leftFooter", "rightFooter", "headerContent")
          )
        ),
        x = u(() => {
          const { contentFullHeight: t, contentStyle: a, fixedHeight: r } = e;
          if (!t) return { ...a };
          const o = `${ne(h)}px`;
          return { ...a, minHeight: o, ...(r ? { height: o } : {}) };
        }),
        C = u(() => {
          const { contentBackground: t, contentClass: a } = e;
          return [`${s}-content`, a, { [`${s}-content-bg`]: t }];
        });
      return (
        p(
          () => [S.value],
          () => {
            m();
          },
          { flush: "post", immediate: !0 }
        ),
        {
          getContentStyle: x,
          wrapperRef: r,
          headerRef: o,
          contentRef: n,
          footerRef: l,
          getClass: y,
          getHeaderSlots: $,
          prefixCls: s,
          getShowFooter: S,
          showModal: () => {
            c.value = !0;
          },
          omit: de,
          getContentClass: C,
          isShow: c,
          handleOk: () => {
            c.value = !1;
          },
          goToPricing: () => {
            g.push({ name: ge.PRICING });
          },
        }
      );
    },
  }),
  yt = { class: "flex items-center gap-1" },
  St = { style: { "justify-content": "center", padding: "10px" } },
  $t = J("h3", null, "How much will I need to pay?", -1),
  xt = J("div", null, "Billing is in 2 parts:", -1),
  Ct = J(
    "div",
    null,
    " 1.Plans: Starter (free), Advanced ($100 per month but free first 30 days), Enterprise (contact us). ",
    -1
  ),
  kt = J(
    "div",
    null,
    "2.Compute hours for GPU Marketplace (if you choose to use the marketplace)",
    -1
  ),
  wt = J("br", null, null, -1),
  Ot = J(
    "div",
    null,
    "For the Advanced plan, you’ll be billed once per month after the first 30 days",
    -1
  );
const Ht = V(ht, [
  [
    "render",
    function (e, t, a, r, o, n) {
      const l = Ce,
        i = ct,
        s = ut,
        c = ke;
      return (
        K(),
        q(
          "div",
          { ref: "wrapperRef", class: Y(e.getClass) },
          [
            e.content ||
            e.$slots.headerContent ||
            e.title ||
            e.getHeaderSlots.length ||
            e.$props.autoTitle
              ? (K(),
                fe(
                  i,
                  Se(
                    { key: 0, ref: "headerRef" },
                    {
                      ...e.omit(e.$attrs, "class"),
                      ...(e.$props.autoTitle ? {} : { title: e.$props.title }),
                    },
                    { ghost: !!e.ghost }
                  ),
                  ve(
                    {
                      default: me(() => [
                        e.content
                          ? (K(), q(j, { key: 0 }, [ye(he(e.content), 1)], 64))
                          : Q(e.$slots, "headerContent", { key: 1 }),
                      ]),
                      backIcon: me(() => [
                        v(l, {
                          icon: "i-ion:arrow-back-circle-outline",
                          size: "28",
                          class: "z10 hover:scale-110 transition-all",
                        }),
                      ]),
                      _: 2,
                    },
                    [
                      "billingList" == e.$props.source
                        ? {
                            name: "extra",
                            fn: me(() => [
                              J(
                                "a",
                                {
                                  key: "3",
                                  style: {
                                    "margin-left": "0px",
                                    "font-size": "16px",
                                    float: "left",
                                    color: "#007bff",
                                    cursor: "pointer",
                                    "text-decoration": "underline",
                                  },
                                  onClick:
                                    t[0] ||
                                    (t[0] = (...t) =>
                                      e.showModal && e.showModal(...t)),
                                },
                                "Billing FAQ"
                              ),
                              J(
                                "a",
                                {
                                  style: {
                                    "font-size": "16px",
                                    color: "#007bff",
                                    cursor: "pointer",
                                    "text-decoration": "underline",
                                  },
                                  target: "_blank",
                                  onClick:
                                    t[1] || (t[1] = (t) => e.goToPricing()),
                                },
                                "Features Pricing Plans"
                              ),
                            ]),
                            key: "0",
                          }
                        : void 0,
                      be(e.getHeaderSlots, (t) => ({
                        name: t,
                        fn: me((a) => [Q(e.$slots, t, we(Oe(a || {})))]),
                      })),
                      e.$props.autoTitle && e.$route
                        ? {
                            name: "title",
                            fn: me(() => [
                              J("span", yt, [
                                v(
                                  l,
                                  {
                                    icon:
                                      e.$route.meta?.icon ||
                                      e.$route.meta?.activeIcon,
                                    size: "24",
                                  },
                                  null,
                                  8,
                                  ["icon"]
                                ),
                                J("span", null, he(e.$route.meta.title), 1),
                              ]),
                            ]),
                            key: "1",
                          }
                        : void 0,
                    ]
                  ),
                  1040,
                  ["ghost"]
                ))
              : $e("", !0),
            J(
              "div",
              {
                ref: "contentRef",
                class: Y(["overflow-hidden", e.getContentClass]),
                style: Z(e.getContentStyle),
              },
              [Q(e.$slots, "default")],
              6
            ),
            e.getShowFooter
              ? (K(),
                fe(
                  s,
                  { key: 1, ref: "footerRef" },
                  {
                    left: me(() => [Q(e.$slots, "leftFooter")]),
                    right: me(() => [Q(e.$slots, "rightFooter")]),
                    _: 3,
                  },
                  512
                ))
              : $e("", !0),
            v(
              c,
              {
                open: e.isShow,
                "onUpdate:open": t[2] || (t[2] = (t) => (e.isShow = t)),
                title: "Billing FAQ",
                style: { padding: "40px", height: "600px", width: "800px" },
                onOk: e.handleOk,
              },
              {
                default: me(() => [
                  J("div", St, [
                    $t,
                    xt,
                    Ct,
                    kt,
                    J(
                      "p",
                      null,
                      he("APP_TITLE" in e ? e.APP_TITLE : ne(xe)) +
                        " provides you a free $20 credit toward your initial balance to pay for compute time on the " +
                        he("APP_TITLE" in e ? e.APP_TITLE : ne(xe)) +
                        " GPU Cloud. After the $20, " +
                        he("APP_TITLE" in e ? e.APP_TITLE : ne(xe)) +
                        " will bill your credit card for ongoing compute time plus enough to maintain ~$50 balance in your account. Keeping a balance helps to minimize your credit card transaction fees. ",
                      1
                    ),
                    J(
                      "h3",
                      null,
                      "Can I try " +
                        he("APP_TITLE" in e ? e.APP_TITLE : ne(xe)) +
                        " without any initial cost to me?",
                      1
                    ),
                    J("p", null, [
                      ye(
                        " Yes,the first $20 of compute time on our " +
                          he("APP_TITLE" in e ? e.APP_TITLE : ne(xe)) +
                          " GPU Cloud is on us.",
                        1
                      ),
                      wt,
                      ye(
                        "If you use on-prem or your own private cloud, it’s free to use Starter, and free first 30 days for Advanced. "
                      ),
                    ]),
                    J(
                      "h3",
                      null,
                      "How often will I be billed for using " +
                        he("APP_TITLE" in e ? e.APP_TITLE : ne(xe)) +
                        "?",
                      1
                    ),
                    J(
                      "div",
                      null,
                      " For the GPU marketplace, your first credit card transaction will occur when you use up your $20 initial free credit. You will be billed according to the compute time your job takes, for the compute price per hour we found on the " +
                        he("APP_TITLE" in e ? e.APP_TITLE : ne(xe)) +
                        " GPU cloud. ",
                      1
                    ),
                    Ot,
                  ]),
                ]),
                _: 1,
              },
              8,
              ["open", "onOk"]
            ),
          ],
          2
        )
      );
    },
  ],
]);
export {
  _e as A,
  We as B,
  ut as F,
  lt as S,
  ot as T,
  Ht as _,
  De as a,
  bt as b,
  gt as c,
  Be as d,
  Le as e,
  pt as o,
  mt as u,
};

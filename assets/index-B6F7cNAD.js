import {
  aV as e,
  aW as t,
  aJ as a,
  as as o,
  aw as r,
  b1 as n,
  r as i,
  bT as l,
  hx as s,
  c as u,
  c7 as d,
  aQ as c,
  bq as g,
  aK as m,
  aR as p,
  hy as f,
  aL as h,
  dZ as b,
  aS as v,
  eU as y,
  aT as x,
  aU as S,
  cd as w,
  dC as C,
  dD as $,
  bQ as k,
  b2 as L,
  au as T,
  bo as P,
  ax as R,
  bl as F,
  a as H,
  d0 as O,
  cX as z,
  bR as B,
  ej as M,
  ft as E,
  bk as j,
  bw as A,
  av as I,
  aC as D,
  bN as N,
  bY as W,
  co as _,
  aD as X,
  hc as Q,
  cp as U,
  f1 as Z,
  hz as K,
  bZ as q,
  bX as V,
  bm as G,
} from "./index-DPRREYlk.js";
import { i as J } from "./isNumeric-DFkNItwV.js";
import { L as Y } from "./LeftOutlined-rFvNtfcP.js";
import { _ as ee, b as te } from "./PageWrapper-BPMfS97v.js";
import { p as ae } from "./propTypes-BC7VambV.js";
import { u as oe } from "./uniqBy-CccCILMw.js";
const re = (e) => {
    const {
      componentCls: t,
      colorBgContainer: a,
      colorBgBody: o,
      colorText: r,
    } = e;
    return {
      [`${t}-sider-light`]: {
        background: a,
        [`${t}-sider-trigger`]: { color: r, background: a },
        [`${t}-sider-zero-width-trigger`]: {
          color: r,
          background: a,
          border: `1px solid ${o}`,
          borderInlineStart: 0,
        },
      },
    };
  },
  ne = (e) => {
    const {
      antCls: t,
      componentCls: o,
      colorText: r,
      colorTextLightSolid: n,
      colorBgHeader: i,
      colorBgBody: l,
      colorBgTrigger: s,
      layoutHeaderHeight: u,
      layoutHeaderPaddingInline: d,
      layoutHeaderColor: c,
      layoutFooterPadding: g,
      layoutTriggerHeight: m,
      layoutZeroTriggerSize: p,
      motionDurationMid: f,
      motionDurationSlow: h,
      fontSize: b,
      borderRadius: v,
    } = e;
    return {
      [o]: a(
        a(
          {
            display: "flex",
            flex: "auto",
            flexDirection: "column",
            color: r,
            minHeight: 0,
            background: l,
            "&, *": { boxSizing: "border-box" },
            [`&${o}-has-sider`]: {
              flexDirection: "row",
              [`> ${o}, > ${o}-content`]: { width: 0 },
            },
            [`${o}-header, &${o}-footer`]: { flex: "0 0 auto" },
            [`${o}-header`]: {
              height: u,
              paddingInline: d,
              color: c,
              lineHeight: `${u}px`,
              background: i,
              [`${t}-menu`]: { lineHeight: "inherit" },
            },
            [`${o}-footer`]: {
              padding: g,
              color: r,
              fontSize: b,
              background: l,
            },
            [`${o}-content`]: { flex: "auto", minHeight: 0 },
            [`${o}-sider`]: {
              position: "relative",
              minWidth: 0,
              background: i,
              transition: `all ${f}, background 0s`,
              "&-children": {
                height: "100%",
                marginTop: -0.1,
                paddingTop: 0.1,
                [`${t}-menu${t}-menu-inline-collapsed`]: { width: "auto" },
              },
              "&-has-trigger": { paddingBottom: m },
              "&-right": { order: 1 },
              "&-trigger": {
                position: "fixed",
                bottom: 0,
                zIndex: 1,
                height: m,
                color: n,
                lineHeight: `${m}px`,
                textAlign: "center",
                background: s,
                cursor: "pointer",
                transition: `all ${f}`,
              },
              "&-zero-width": {
                "> *": { overflow: "hidden" },
                "&-trigger": {
                  position: "absolute",
                  top: u,
                  insetInlineEnd: -p,
                  zIndex: 1,
                  width: p,
                  height: p,
                  color: n,
                  fontSize: e.fontSizeXL,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: i,
                  borderStartStartRadius: 0,
                  borderStartEndRadius: v,
                  borderEndEndRadius: v,
                  borderEndStartRadius: 0,
                  cursor: "pointer",
                  transition: `background ${h} ease`,
                  "&::after": {
                    position: "absolute",
                    inset: 0,
                    background: "transparent",
                    transition: `all ${h}`,
                    content: '""',
                  },
                  "&:hover::after": { background: "rgba(255, 255, 255, 0.2)" },
                  "&-right": {
                    insetInlineStart: -p,
                    borderStartStartRadius: v,
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                    borderEndStartRadius: v,
                  },
                },
              },
            },
          },
          re(e)
        ),
        { "&-rtl": { direction: "rtl" } }
      ),
    };
  },
  ie = e(
    "Layout",
    (e) => {
      const {
          colorText: a,
          controlHeightSM: o,
          controlHeight: r,
          controlHeightLG: n,
          marginXXS: i,
        } = e,
        l = 1.25 * n,
        s = t(e, {
          layoutHeaderHeight: 2 * r,
          layoutHeaderPaddingInline: l,
          layoutHeaderColor: a,
          layoutFooterPadding: `${o}px ${l}px`,
          layoutTriggerHeight: n + 2 * i,
          layoutZeroTriggerSize: n,
        });
      return [ne(s)];
    },
    (e) => {
      const { colorBgLayout: t } = e;
      return {
        colorBgHeader: "#001529",
        colorBgBody: t,
        colorBgTrigger: "#002140",
      };
    }
  ),
  le = () => ({
    prefixCls: String,
    hasSider: { type: Boolean, default: void 0 },
    tagName: String,
  });
function se(e) {
  let { suffixCls: t, tagName: i, name: l } = e;
  return (e) =>
    o({
      compatConfig: { MODE: 3 },
      name: l,
      props: le(),
      setup(o, l) {
        let { slots: s } = l;
        const { prefixCls: u } = n(t, o);
        return () => {
          const t = a(a({}, o), { prefixCls: u.value, tagName: i });
          return r(e, t, s);
        };
      },
    });
}
const ue = o({
    compatConfig: { MODE: 3 },
    props: le(),
    setup(e, t) {
      let { slots: a } = t;
      return () => r(e.tagName, { class: e.prefixCls }, a);
    },
  }),
  de = o({
    compatConfig: { MODE: 3 },
    inheritAttrs: !1,
    props: le(),
    setup(e, t) {
      let { slots: o, attrs: d } = t;
      const { prefixCls: c, direction: g } = n("", e),
        [m, p] = ie(c),
        f = i([]);
      l(s, {
        addSider: (e) => {
          f.value = [...f.value, e];
        },
        removeSider: (e) => {
          f.value = f.value.filter((t) => t !== e);
        },
      });
      const h = u(() => {
        const { prefixCls: t, hasSider: a } = e;
        return {
          [p.value]: !0,
          [`${t}`]: !0,
          [`${t}-has-sider`]: "boolean" == typeof a ? a : f.value.length > 0,
          [`${t}-rtl`]: "rtl" === g.value,
        };
      });
      return () => {
        const { tagName: t } = e;
        return m(r(t, a(a({}, d), { class: [h.value, d.class] }), o));
      };
    },
  }),
  ce = se({ suffixCls: "layout", tagName: "section", name: "ALayout" })(de),
  ge = se({
    suffixCls: "layout-header",
    tagName: "header",
    name: "ALayoutHeader",
  })(ue),
  me = se({
    suffixCls: "layout-footer",
    tagName: "footer",
    name: "ALayoutFooter",
  })(ue),
  pe = se({
    suffixCls: "layout-content",
    tagName: "main",
    name: "ALayoutContent",
  })(ue);
var fe = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z",
        },
      },
    ],
  },
  name: "bars",
  theme: "outlined",
};
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? Object(arguments[t]) : {},
      o = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols &&
      (o = o.concat(
        Object.getOwnPropertySymbols(a).filter(function (e) {
          return Object.getOwnPropertyDescriptor(a, e).enumerable;
        })
      )),
      o.forEach(function (t) {
        be(e, t, a[t]);
      });
  }
  return e;
}
function be(e, t, a) {
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
var ve = function (e, t) {
  var a = he({}, e, t.attrs);
  return r(d, he({}, a, { icon: fe }), null);
};
(ve.displayName = "BarsOutlined"), (ve.inheritAttrs = !1);
const ye = {
    xs: "479.98px",
    sm: "575.98px",
    md: "767.98px",
    lg: "991.98px",
    xl: "1199.98px",
    xxl: "1599.98px",
    xxxl: "1999.98px",
  },
  xe = (() => {
    let e = 0;
    return function () {
      return (
        (e += 1),
        `${
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
        }${e}`
      );
    };
  })(),
  Se = o({
    compatConfig: { MODE: 3 },
    name: "ALayoutSider",
    inheritAttrs: !1,
    props: c(
      {
        prefixCls: String,
        collapsible: { type: Boolean, default: void 0 },
        collapsed: { type: Boolean, default: void 0 },
        defaultCollapsed: { type: Boolean, default: void 0 },
        reverseArrow: { type: Boolean, default: void 0 },
        zeroWidthTriggerStyle: { type: Object, default: void 0 },
        trigger: S.any,
        width: S.oneOfType([S.number, S.string]),
        collapsedWidth: S.oneOfType([S.number, S.string]),
        breakpoint: S.oneOf(w("xs", "sm", "md", "lg", "xl", "xxl", "xxxl")),
        theme: S.oneOf(w("light", "dark")).def("dark"),
        onBreakpoint: Function,
        onCollapse: Function,
      },
      {
        collapsible: !1,
        defaultCollapsed: !1,
        reverseArrow: !1,
        width: 200,
        collapsedWidth: 80,
      }
    ),
    emits: ["breakpoint", "update:collapsed", "collapse"],
    setup(e, t) {
      let { emit: a, attrs: o, slots: i } = t;
      const { prefixCls: u } = n("layout-sider", e),
        d = g(s, void 0),
        c = m(!!(void 0 !== e.collapsed ? e.collapsed : e.defaultCollapsed)),
        S = m(!1);
      p(
        () => e.collapsed,
        () => {
          c.value = !!e.collapsed;
        }
      ),
        l(f, c);
      const w = (t, o) => {
          void 0 === e.collapsed && (c.value = t),
            a("update:collapsed", t),
            a("collapse", t, o);
        },
        C = m((e) => {
          (S.value = e.matches),
            a("breakpoint", e.matches),
            c.value !== e.matches && w(e.matches, "responsive");
        });
      let $;
      function k(e) {
        return C.value(e);
      }
      const L = xe("ant-sider-");
      d && d.addSider(L),
        h(() => {
          p(
            () => e.breakpoint,
            () => {
              try {
                null == $ || $.removeEventListener("change", k);
              } catch (t) {
                null == $ || $.removeListener(k);
              }
              if ("undefined" != typeof window) {
                const { matchMedia: a } = window;
                if (a && e.breakpoint && e.breakpoint in ye) {
                  $ = a(`(max-width: ${ye[e.breakpoint]})`);
                  try {
                    $.addEventListener("change", k);
                  } catch (t) {
                    $.addListener(k);
                  }
                  k($);
                }
              }
            },
            { immediate: !0 }
          );
        }),
        b(() => {
          try {
            null == $ || $.removeEventListener("change", k);
          } catch (e) {
            null == $ || $.removeListener(k);
          }
          d && d.removeSider(L);
        });
      const T = () => {
        w(!c.value, "clickTrigger");
      };
      return () => {
        var t, a;
        const n = u.value,
          {
            collapsedWidth: l,
            width: s,
            reverseArrow: d,
            zeroWidthTriggerStyle: g,
            trigger: m = null === (t = i.trigger) || void 0 === t
              ? void 0
              : t.call(i),
            collapsible: p,
            theme: f,
          } = e,
          h = c.value ? l : s,
          b = J(h) ? `${h}px` : String(h),
          w =
            0 === parseFloat(String(l || 0))
              ? r(
                  "span",
                  {
                    onClick: T,
                    class: v(
                      `${n}-zero-width-trigger`,
                      `${n}-zero-width-trigger-${d ? "right" : "left"}`
                    ),
                    style: g,
                  },
                  [m || r(ve, null, null)]
                )
              : null,
          C = {
            expanded: r(d ? y : Y, null, null),
            collapsed: r(d ? Y : y, null, null),
          },
          $ = c.value ? "collapsed" : "expanded",
          k =
            null !== m
              ? w ||
                r(
                  "div",
                  { class: `${n}-trigger`, onClick: T, style: { width: b } },
                  [m || C[$]]
                )
              : null,
          L = [
            o.style,
            { flex: `0 0 ${b}`, maxWidth: b, minWidth: b, width: b },
          ],
          P = v(
            n,
            `${n}-${f}`,
            {
              [`${n}-collapsed`]: !!c.value,
              [`${n}-has-trigger`]: p && null !== m && !w,
              [`${n}-below`]: !!S.value,
              [`${n}-zero-width`]: 0 === parseFloat(b),
            },
            o.class
          );
        return r("aside", x(x({}, o), {}, { class: P, style: L }), [
          r("div", { class: `${n}-children` }, [
            null === (a = i.default) || void 0 === a ? void 0 : a.call(i),
          ]),
          p || (S.value && w) ? k : null,
        ]);
      };
    },
  }),
  we = ge,
  Ce = Se,
  $e = a(ce, {
    Header: ge,
    Footer: me,
    Content: pe,
    Sider: Se,
    install: (e) => (
      e.component(ce.name, ce),
      e.component(ge.name, ge),
      e.component(me.name, me),
      e.component(Se.name, Se),
      e.component(pe.name, pe),
      e
    ),
  }),
  ke = ["src"],
  Le = o({
    __name: "index",
    props: { frameSrc: ae.string.def("") },
    setup(e) {
      const t = e,
        { getDarkMode: a } = C(),
        o = u(() => a.value === $.DARK),
        r = k(),
        n = i(t.frameSrc);
      L(() => {
        r.meta.frameSrc && (n.value = r.meta.frameSrc);
      });
      const l = i(!0),
        s = i();
      function d() {
        l.value = !1;
      }
      return (e, t) => {
        const a = ee;
        return (
          T(),
          P(
            a,
            {
              loading: H(l),
              "fixed-height": "",
              "content-full-height": "",
              "auto-title": "",
            },
            {
              default: R(() => {
                return [
                  F(
                    "iframe",
                    {
                      ref_key: "frameRef",
                      ref: s,
                      class: "app-content w-full border-none",
                      src:
                        ((e = H(n)),
                        new URL(e).hostname !== new URL(O).hostname
                          ? e
                          : `${e}?docusaurus-data-mode=iframe&${
                              o.value
                                ? "&docusaurus-theme=dark"
                                : "&docusaurus-theme=light"
                            }`),
                      onLoad: d,
                    },
                    null,
                    40,
                    ke
                  ),
                ];
                var e;
              }),
              _: 1,
            },
            8,
            ["loading"]
          )
        );
      };
    },
  });
function Te() {
  const e = z();
  return {
    setMultipleTabSetting: function (t) {
      e.setProjectConfig({ multiTabsSetting: t });
    },
    getShowMultipleTab: u(() => e.getMultiTabsSetting.show),
    getShowQuick: u(() => e.getMultiTabsSetting.showQuick),
    getShowRedo: u(() => e.getMultiTabsSetting.showRedo),
    getShowFold: u(() => e.getMultiTabsSetting.showFold),
  };
}
const Pe = o({
    name: "FrameLayout",
    components: { FramePage: Le },
    setup() {
      const {
          getFramePages: e,
          hasRenderFrame: t,
          showIframe: a,
        } = (function () {
          const e = B(),
            { currentRoute: t } = e,
            { getShowMultipleTab: a } = Te(),
            o = M(),
            r = u(() => i(E(e.getRoutes())) || []),
            n = u(() =>
              o.getTabList.reduce(
                (e, t) => (
                  t.meta && Reflect.has(t.meta, "frameSrc") && e.push(t.name), e
                ),
                []
              )
            );
          function i(e) {
            let t = [];
            for (const a of e) {
              const { meta: { frameSrc: e } = {}, children: o } = a;
              e && t.push(a), o && o.length && t.push(...i(o));
            }
            return (t = oe(t, "name")), t;
          }
          return {
            hasRenderFrame: function (t) {
              return H(a) ? H(n).includes(t) : e.currentRoute.value.name === t;
            },
            getFramePages: r,
            showIframe: function (e) {
              return e.name === H(t).name;
            },
            getAllFramePages: i,
          };
        })(),
        o = u(() => H(e).length > 0);
      return {
        getFramePages: e,
        hasRenderFrame: t,
        showIframe: a,
        showFrame: o,
      };
    },
  }),
  Re = { key: 0 };
const Fe = j(Pe, [
  [
    "render",
    function (e, t, a, o, r, n) {
      const i = A("FramePage");
      return e.showFrame
        ? (T(),
          I("div", Re, [
            (T(!0),
            I(
              D,
              null,
              N(
                e.getFramePages,
                (t) => (
                  T(),
                  I(
                    D,
                    { key: t.path },
                    [
                      t.meta.frameSrc && e.hasRenderFrame(t.name)
                        ? W(
                            (T(),
                            P(
                              i,
                              { key: 0, "frame-src": t.meta.frameSrc },
                              null,
                              8,
                              ["frame-src"]
                            )),
                            [[_, e.showIframe(t)]]
                          )
                        : X("", !0),
                    ],
                    64
                  )
                )
              ),
              128
            )),
          ]))
        : X("", !0);
    },
  ],
]);
const He = j(
  o({
    name: "LayoutContent",
    components: {
      PageLayout: o({
        __name: "index",
        setup(e) {
          const { getShowMultipleTab: t } = Te(),
            a = M(),
            { getOpenKeepAlive: o, getCanEmbedIFramePage: n } = C(),
            { getBasicTransition: i, getEnableTransition: l } = Q(),
            s = u(() => H(o) && H(t)),
            d = u(() => (H(o) ? a.getCachedTabList : []));
          function c(e) {
            return (function ({
              route: e,
              openCache: t,
              cacheTabs: a,
              enableTransition: o,
              def: r,
            }) {
              if (!o) return;
              const n = a.includes(e.name);
              let i = "";
              return (
                t && (i = n && e.meta.loaded ? "" : void 0),
                i || e.meta.transitionName || r
              );
            })({
              route: e,
              openCache: s.value,
              enableTransition: l.value,
              cacheTabs: d.value,
              def: i.value,
            });
          }
          return (e, t) => {
            const a = A("RouterView");
            return (
              T(),
              I(
                D,
                null,
                [
                  r(a, null, {
                    default: R(({ Component: e, route: t }) => [
                      r(
                        U,
                        { name: c(t), mode: "out-in", appear: "" },
                        {
                          default: R(() => [
                            H(s)
                              ? (T(),
                                P(
                                  K,
                                  { key: 0, include: H(d) },
                                  [(T(), P(Z(e), { key: t.fullPath }))],
                                  1032,
                                  ["include"]
                                ))
                              : (T(), P(Z(e), { key: t.fullPath })),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["name"]
                      ),
                    ]),
                    _: 1,
                  }),
                  H(n) ? (T(), P(Fe, { key: 0 })) : X("", !0),
                ],
                64
              )
            );
          };
        },
      }),
    },
    setup() {
      const { prefixCls: e } = q("layout-content"),
        { getOpenPageLoading: t } = Q(),
        { getLayoutContentMode: a, getPageLoading: o } = C();
      return (
        te(),
        {
          prefixCls: e,
          getOpenPageLoading: t,
          getLayoutContentMode: a,
          getPageLoading: o,
        }
      );
    },
  }),
  [
    [
      "render",
      function (e, t, a, o, n, i) {
        const l = A("PageLayout"),
          s = V("loading");
        return W(
          (T(),
          I(
            "div",
            { class: G([e.prefixCls, e.getLayoutContentMode]) },
            [r(l)],
            2
          )),
          [[s, e.getOpenPageLoading && e.getPageLoading]]
        );
      },
    ],
  ]
);
export { He as L, $e as a, Ce as b, we as c, Te as u };

const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/SiderTrigger-bFkcr4MG.js",
      "assets/index-DPRREYlk.js",
      "assets/index-Bu5LTPHX.css",
    ])
) => i.map((i) => d[i]);
import {
  gx as e,
  hk as t,
  dD as n,
  as as l,
  bp as s,
  bZ as i,
  c as a,
  u as o,
  bk as u,
  au as r,
  av as c,
  bo as p,
  bm as d,
  aD as m,
  aA as g,
  aB as h,
  bw as f,
  ax as v,
  aw as y,
  bE as b,
  c6 as C,
  bA as M,
  bU as S,
  aC as x,
  bN as k,
  b_ as I,
  a as $,
  ft as w,
  iW as T,
  fE as _,
  r as N,
  at as O,
  ea as L,
  bR as P,
  hu as K,
  fC as B,
  aR as A,
  iX as z,
  b8 as R,
  hJ as E,
  hI as W,
  b9 as H,
  b2 as F,
  bT as j,
  aL as D,
  n as U,
  iY as V,
  bn as X,
  bl as Z,
  cV as q,
  da as Y,
  cR as J,
  bq as G,
  cg as Q,
  iZ as ee,
  i_ as te,
  bY as ne,
  co as le,
  c5 as se,
  eW as ie,
  bh as ae,
  i$ as oe,
  aF as ue,
  c3 as re,
  ay as ce,
  d1 as pe,
  az as de,
  bW as me,
  be as ge,
  fD as he,
  cW as fe,
  c4 as ve,
  ei as ye,
  dt as be,
  gw as Ce,
  j0 as Me,
  j1 as Se,
  dO as xe,
  dC as ke,
  e8 as Ie,
  eg as $e,
  dX as we,
  _ as Te,
  hj as _e,
  a$ as Ne,
  gz as Oe,
  j2 as Le,
  iU as Pe,
  bM as Ke,
} from "./index-DPRREYlk.js";
import { p as Be } from "./propTypes-BC7VambV.js";
import { u as Ae } from "./useTimeout-BMbf6gdC.js";
import { a as ze, S as Re } from "./index-Cq67sDBe.js";
import "./useChatList-Ch8PximY.js";
import "./useConfigList-BkT8qE0X.js";
/* empty css                                                             */ import { c as Ee } from "./useLockPage-B2Xk9MVr.js";
import { a as We } from "./index-B6F7cNAD.js";
import { D as He } from "./index-B0edVtGn.js";
const Fe = {
    items: { type: Array, default: () => [] },
    collapsedShowTitle: Be.bool,
    inlineIndent: Be.number.def(20),
    mode: { type: String, default: e.INLINE },
    type: { type: String, default: t.MIX },
    theme: { type: String, default: n.DARK },
    inlineCollapsed: Be.bool,
    mixSider: Be.bool,
    isHorizontal: Be.bool,
    accordion: Be.bool.def(!0),
    beforeClickFn: { type: Function },
  },
  je = {
    item: { type: Object, default: {} },
    level: Be.number,
    theme: Be.oneOf(["dark", "light"]),
    showTitle: Be.bool,
    isHorizontal: Be.bool,
  },
  De = {
    item: { type: Object, default: null },
    showTitle: Be.bool.def(!0),
    level: Be.number.def(0),
    isHorizontal: Be.bool.def(!0),
  },
  { t: Ue } = o();
const Ve = u(
    l({
      name: "MenuItemContent",
      components: { Icon: s },
      props: De,
      setup(e) {
        const { prefixCls: t } = i("basic-menu-item-content");
        return {
          prefixCls: t,
          getI18nName: a(() => Ue(e.item?.name)),
          getIcon: a(() => e.item?.icon),
        };
      },
    }),
    [
      [
        "render",
        function (e, t, n, l, i, a) {
          const o = s;
          return (
            r(),
            c(
              "span",
              { class: d(`${e.prefixCls}- flex items-center `) },
              [
                e.getIcon
                  ? (r(),
                    p(
                      o,
                      {
                        key: 0,
                        icon: e.getIcon,
                        size: 18,
                        class: d(`${e.prefixCls}-wrapper__icon mr-2`),
                      },
                      null,
                      8,
                      ["icon", "class"]
                    ))
                  : m("", !0),
                g(" " + h(e.getI18nName), 1),
              ],
              2
            )
          );
        },
      ],
    ]
  ),
  Xe = l({
    name: "BasicMenuItem",
    components: { MenuItemContent: Ve },
    props: je,
    setup: () => ({}),
  });
const Ze = l({
  name: "BasicSubMenuItem",
  isSubMenu: !0,
  components: {
    BasicMenuItem: u(Xe, [
      [
        "render",
        function (e, t, n, l, s, i) {
          const a = f("MenuItemContent"),
            o = C;
          return (
            r(),
            p(
              o,
              { key: e.item.path },
              {
                default: v(() => [
                  y(a, b(e.$props, { item: e.item }), null, 16, ["item"]),
                ]),
                _: 1,
              }
            )
          );
        },
      ],
    ]),
    SubMenu: M.SubMenu,
    MenuItemContent: Ve,
  },
  props: je,
  setup(e) {
    const { prefixCls: t } = i("basic-menu-item");
    return {
      prefixCls: t,
      menuHasChildren: function (e) {
        return (
          !e.meta?.hideChildrenInMenu &&
          Reflect.has(e, "children") &&
          !!e.children &&
          e.children.length > 0
        );
      },
      getShowMenu: a(() => !e.item.meta?.hideMenu),
    };
  },
});
const qe = l({
  name: "BasicMenu",
  components: {
    AMenu: M,
    BasicSubMenuItem: u(Ze, [
      [
        "render",
        function (e, t, n, l, s, i) {
          const a = f("BasicMenuItem"),
            o = f("MenuItemContent"),
            u = f("BasicSubMenuItem", !0),
            g = f("SubMenu");
          return (
            r(),
            c(
              x,
              null,
              [
                !e.menuHasChildren(e.item) && e.getShowMenu
                  ? (r(), p(a, S(b({ key: 0 }, e.$props)), null, 16))
                  : m("", !0),
                e.menuHasChildren(e.item) && e.getShowMenu
                  ? (r(),
                    p(
                      g,
                      {
                        key: `submenu-${e.item.path}`,
                        class: d([e.theme]),
                        "popup-class-name": "app-top-menu-popup",
                      },
                      {
                        title: v(() => [
                          y(o, b(e.$props, { item: e.item }), null, 16, [
                            "item",
                          ]),
                        ]),
                        default: v(() => [
                          (r(!0),
                          c(
                            x,
                            null,
                            k(
                              e.item.children || [],
                              (t) => (
                                r(),
                                p(
                                  u,
                                  b({ key: t.path, ref_for: !0 }, e.$props, {
                                    item: t,
                                  }),
                                  null,
                                  16,
                                  ["item"]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["class"]
                    ))
                  : m("", !0),
              ],
              64
            )
          );
        },
      ],
    ]),
  },
  props: Fe,
  emits: ["menuClick"],
  setup(n, { emit: l }) {
    const s = N(!1),
      o = N(""),
      u = O({
        defaultSelectedKeys: [],
        openKeys: [],
        selectedKeys: [],
        collapsedOpenKeys: [],
      }),
      { prefixCls: r } = i("basic-menu"),
      { items: c, mode: p, accordion: d } = L(n),
      { getCollapsed: m, getTopMenuAlign: g, getSplit: h } = I(),
      { currentRoute: f } = P(),
      {
        handleOpenChange: v,
        setOpenKeys: y,
        getOpenKeys: b,
      } = (function (t, n, l, s) {
        const { getCollapsed: i, getIsMixSidebar: o } = I();
        return {
          setOpenKeys: async function (i) {
            if (l.value === e.HORIZONTAL) return;
            const a = $(o);
            Ae(
              () => {
                const e = w(n.value);
                0 !== e?.length
                  ? $(s)
                    ? (t.openKeys = _(e, i))
                    : (t.openKeys = T([...t.openKeys, ..._(e, i)]))
                  : (t.openKeys = []);
              },
              16,
              !a
            );
          },
          resetKeys: function () {
            (t.selectedKeys = []), (t.openKeys = []);
          },
          getOpenKeys: a(() =>
            !$(o) && $(i) ? t.collapsedOpenKeys : t.openKeys
          ),
          handleOpenChange: function (a) {
            if ($(l) === e.HORIZONTAL || !$(s) || $(o)) t.openKeys = a;
            else {
              const e = [];
              for (const { children: t, path: l } of $(n))
                t && t.length > 0 && e.push(l);
              if ($(i)) t.collapsedOpenKeys = a;
              else {
                const n = a.find((e) => !t.openKeys.includes(e));
                e.includes(n) ? (t.openKeys = n ? [n] : []) : (t.openKeys = a);
              }
            }
          },
        };
      })(u, c, p, d),
      C = a(() => {
        const { type: l, mode: s } = n;
        return (
          (l === t.TOP_MENU && s === e.HORIZONTAL) || (n.isHorizontal && $(h))
        );
      }),
      M = a(() => {
        const e = n.isHorizontal && $(h) ? "start" : $(g);
        return [
          r,
          `justify-${e}`,
          {
            [`${r}__second`]: !n.isHorizontal && $(h),
            [`${r}__sidebar-hor`]: $(C),
          },
        ];
      }),
      S = a(() => {
        const t = {};
        return (
          n.mode === e.INLINE && (t.inlineCollapsed = !n.mixSider && $(m)), t
        );
      });
    async function x(e) {
      if ($(s)) return void (s.value = !1);
      const t = (e || $(f)).meta?.currentActiveMenu || (e || $(f)).path;
      if ((y(t), !$(o)))
        if (n.isHorizontal && $(h)) {
          const e = await z(t);
          u.selectedKeys = [e];
        } else {
          const e = await _(n.items, t);
          u.selectedKeys = e;
        }
    }
    return (
      K((e) => {
        e.name !== B &&
          (x(e),
          (o.value = e.meta?.currentActiveMenu),
          $(o) && ((u.selectedKeys = [$(o)]), y($(o))));
      }),
      !n.mixSider &&
        A(
          () => n.items,
          () => {
            x();
          }
        ),
      {
        handleMenuClick: async function ({ key: e }) {
          const { beforeClickFn: t } = n;
          if (t && R(t)) {
            if (!(await t(e))) return;
          }
          l("menuClick", e), (s.value = !0), (u.selectedKeys = [e]);
        },
        getInlineCollapseOptions: S,
        getMenuClass: M,
        handleOpenChange: v,
        getOpenKeys: b,
        ...L(u),
      }
    );
  },
});
const Ye = u(qe, [
    [
      "render",
      function (e, t, n, l, s, i) {
        const a = f("BasicSubMenuItem"),
          o = M;
        return (
          r(),
          p(
            o,
            b(
              {
                "selected-keys": e.selectedKeys,
                "default-selected-keys": e.defaultSelectedKeys,
                mode: e.mode,
                "open-keys": e.getOpenKeys,
                "inline-indent": e.inlineIndent,
                theme: e.theme,
                class: e.getMenuClass,
                "sub-menu-open-delay": 0.2,
              },
              e.getInlineCollapseOptions,
              { onOpenChange: e.handleOpenChange, onClick: e.handleMenuClick }
            ),
            {
              default: v(() => [
                (r(!0),
                c(
                  x,
                  null,
                  k(
                    e.items,
                    (t) => (
                      r(),
                      p(
                        a,
                        {
                          key: t.path,
                          item: t,
                          theme: e.theme,
                          "is-horizontal": e.isHorizontal,
                        },
                        null,
                        8,
                        ["item", "theme", "is-horizontal"]
                      )
                    )
                  ),
                  128
                )),
              ]),
              _: 1,
            },
            16,
            [
              "selected-keys",
              "default-selected-keys",
              "mode",
              "open-keys",
              "inline-indent",
              "theme",
              "class",
              "onOpenChange",
              "onClick",
            ]
          )
        );
      },
    ],
  ]),
  Je = Symbol();
function Ge() {
  return W(Je);
}
const Qe = u(
  l({
    name: "MenuMain",
    props: {
      theme: Be.oneOf(["light", "dark"]).def("light"),
      activeName: Be.oneOfType([Be.string, Be.number]),
      openNames: { type: Array, default: () => [] },
      accordion: Be.bool.def(!0),
      width: Be.string.def("100%"),
      collapsedWidth: Be.string.def("48px"),
      indentSize: Be.number.def(16),
      collapse: Be.bool.def(!0),
      activeSubMenuNames: { type: Array, default: () => [] },
    },
    emits: ["select", "open-change"],
    setup(e, { emit: t }) {
      const n = V(),
        l = H(),
        s = N(""),
        o = N([]),
        { prefixCls: u } = i("menu"),
        r = N(!1);
      E({ rootMenuEmitter: n, activeName: s }, Je, {
        readonly: !1,
        native: !0,
      });
      const c = a(() => {
        const { theme: t } = e;
        return [
          u,
          `${u}-${t}`,
          `${u}-vertical`,
          { [`${u}-collapse`]: e.collapse },
        ];
      });
      function p() {
        n.emit("on-update-opened", o.value);
      }
      function d() {
        (o.value = []), p();
      }
      return (
        F(() => {
          o.value = e.openNames;
        }),
        F(() => {
          e.activeName && (s.value = e.activeName);
        }),
        A(
          () => e.openNames,
          () => {
            U(() => {
              p();
            });
          }
        ),
        j(`subMenu:${l?.uid}`, {
          addSubMenu: function (e) {
            o.value.includes(e) || (o.value.push(e), p());
          },
          removeSubMenu: function (e) {
            (o.value = o.value.filter((t) => t !== e)), p();
          },
          getOpenNames: () => o.value,
          removeAll: d,
          isRemoveAllPopup: r,
          sliceIndex: function (e) {
            -1 !== e && ((o.value = o.value.slice(0, e + 1)), p());
          },
          level: 0,
          props: e,
        }),
        D(() => {
          (o.value = e.collapse ? [] : [...e.openNames]),
            p(),
            n.on("on-menu-item-select", (n) => {
              (s.value = n),
                U(() => {
                  e.collapse && d();
                }),
                t("select", n);
            }),
            n.on("open-name-change", ({ name: e, opened: t }) => {
              if (t && !o.value.includes(e)) o.value.push(e);
              else if (!t) {
                const t = o.value.findIndex((t) => t === e);
                -1 !== t && o.value.splice(t, 1);
              }
            });
        }),
        { getClass: c, openedNames: o }
      );
    },
  }),
  [
    [
      "render",
      function (e, t, n, l, s, i) {
        return (
          r(), c("ul", { class: d(e.getClass) }, [X(e.$slots, "default")], 2)
        );
      },
    ],
  ]
);
function et(e) {
  const t = a(() => i(["MenuMain", "SubMenu"])),
    n = a(() => i(["MenuMain"])),
    l = a(() => i(["SubMenu"])),
    s = a(() => {
      let t = e?.parent;
      if (!t) return {};
      const l = $(n)?.props.indentSize ?? 20;
      let s = l;
      if ($(n)?.props.collapse) s = l;
      else
        for (; t && "MenuMain" !== t.type.name; )
          "SubMenu" === t.type.name && (s += l), (t = t.parent);
      return { paddingLeft: `${s}px` };
    });
  function i(t) {
    let n = e?.parent;
    if (!n) return null;
    for (; n && !t.includes(n.type.name); ) n = n.parent;
    return n;
  }
  return {
    getParentMenu: t,
    getParentInstance: function (e, t = "SubMenu") {
      let n = e.parent;
      for (; n; ) {
        if (n.type.name !== t) return n;
        n = n.parent;
      }
      return n;
    },
    getParentRootMenu: n,
    getParentList: function () {
      let t = e;
      if (!t) return { uidList: [], list: [] };
      const n = [];
      for (; t && "MenuMain" !== t.type.name; )
        "SubMenu" === t.type.name && n.push(t), (t = t.parent);
      return { uidList: n.map((e) => e.uid), list: n };
    },
    getParentSubMenu: l,
    getItemStyle: s,
  };
}
const tt = u(
  l({
    name: "MenuItem",
    props: {
      name: { type: [String, Number], required: !0 },
      disabled: Be.bool,
    },
    setup(e, { slots: t }) {
      const n = H(),
        l = N(!1),
        {
          getItemStyle: s,
          getParentList: o,
          getParentMenu: u,
          getParentRootMenu: r,
        } = et(n),
        { prefixCls: c } = i("menu"),
        { rootMenuEmitter: p, activeName: d } = Ge(),
        m = a(() => [
          `${c}-item`,
          {
            [`${c}-item-active bg-primary`]: $(l),
            [`${c}-item-selected`]: $(l),
            [`${c}-item-disabled`]: !!e.disabled,
          },
        ]),
        g = a(() => $(r)?.props.collapse),
        h = a(() => "MenuMain" === $(u)?.type.name && $(g) && t.title);
      return (
        A(
          () => d.value,
          (t) => {
            if (t === e.name) {
              const { list: e, uidList: t } = o();
              (l.value = !0),
                e.forEach((e) => {
                  e.proxy && (e.proxy.active = !0);
                }),
                p.emit("on-update-active-name:submenu", t);
            } else l.value = !1;
          },
          { immediate: !0 }
        ),
        {
          active: l,
          getClass: m,
          prefixCls: c,
          getItemStyle: s,
          getCollapse: g,
          handleClickItem: function () {
            const { disabled: t } = e;
            if (t) return;
            if ((p.emit("on-menu-item-select", e.name), $(g))) return;
            const { uidList: l } = o();
            p.emit("on-update-opened", {
              opend: !1,
              parent: n?.parent,
              uidList: l,
            });
          },
          showTooptip: h,
        }
      );
    },
  }),
  [
    [
      "render",
      function (e, t, n, l, s, i) {
        const a = J;
        return (
          r(),
          c(
            "li",
            {
              class: d(e.getClass),
              style: q(e.getCollapse ? {} : e.getItemStyle),
              onClick:
                t[0] ||
                (t[0] = Y(
                  (...t) => e.handleClickItem && e.handleClickItem(...t),
                  ["stop"]
                )),
            },
            [
              e.showTooptip
                ? (r(),
                  p(
                    a,
                    { key: 0, placement: "right" },
                    {
                      title: v(() => [
                        X(e.$slots, "title", { active: e.active }),
                      ]),
                      default: v(() => [
                        Z(
                          "div",
                          { class: d(`${e.prefixCls}-tooltip`) },
                          [X(e.$slots, "default", { active: e.active })],
                          2
                        ),
                      ]),
                      _: 3,
                    }
                  ))
                : (r(),
                  c(
                    x,
                    { key: 1 },
                    [
                      X(e.$slots, "default", { active: e.active }),
                      X(e.$slots, "title", { active: e.active }),
                    ],
                    64
                  )),
            ],
            6
          )
        );
      },
    ],
  ]
);
const nt = u(
  l({
    name: "SubMenu",
    components: { Icon: s, CollapseTransition: ze },
    props: {
      name: { type: [String, Number], required: !0 },
      disabled: Be.bool,
      collapsedShowTitle: Be.bool,
    },
    setup(e) {
      const t = H(),
        n = O({ active: !1, opened: !1 }),
        l = O({ timeout: null, mouseInChild: !1, isChild: !1 }),
        {
          getParentSubMenu: s,
          getItemStyle: o,
          getParentMenu: u,
          getParentList: r,
        } = et(t),
        { prefixCls: c } = i("menu"),
        p = V(),
        { rootMenuEmitter: d } = Ge(),
        {
          addSubMenu: m,
          removeSubMenu: g,
          removeAll: h,
          getOpenNames: f,
          isRemoveAllPopup: v,
          sliceIndex: y,
          level: b,
          props: C,
          handleMouseleave: M,
        } = G(`subMenu:${u.value?.uid}`),
        S = a(() => [
          `${c}-submenu`,
          {
            [`${c}-item-active`]: n.active,
            [`${c}-opened`]: n.opened,
            [`${c}-submenu-disabled`]: e.disabled,
            [`${c}-submenu-has-parent-submenu`]: $(s),
            [`${c}-child-item-active`]: n.active,
          },
        ]),
        x = a(() => C.accordion),
        k = a(() => C.collapse),
        I = a(() => C.theme),
        w = a(() => ({ minWidth: "200px" })),
        T = a(() => {
          const t = e.name;
          return $(k) ? f().includes(t) : n.opened;
        }),
        _ = a(() => {
          const t = C.activeSubMenuNames.includes(e.name);
          return [
            `${c}-submenu-title`,
            {
              [`${c}-submenu-active`]: t,
              [`${c}-submenu-active-border`]: t && 0 === b,
              [`${c}-submenu-collapse`]: $(k) && 0 === b,
            },
          ];
        });
      function N() {
        if (e.disabled) return;
        p.emit("submenu:mouse-enter-child");
        const t = f().findIndex((t) => t === e.name);
        y(t);
        0 === b && 2 === f().length && h(),
          (l.isChild = f().includes(e.name)),
          clearTimeout(l.timeout),
          (l.timeout = setTimeout(() => {
            m(e.name);
          }, 200));
      }
      function P(t = !1) {
        const n = u.value?.props.name;
        n || (v.value = !0),
          f().slice(-1)[0] === e.name && (l.isChild = !1),
          p.emit("submenu:mouse-leave-child"),
          l.timeout &&
            (clearTimeout(l.timeout),
            (l.timeout = setTimeout(() => {
              v.value ? h() : l.mouseInChild || g(e.name);
            }, 200))),
          t && s.value && M?.(!0);
      }
      return (
        Q(() => {
          p.on("submenu:mouse-enter-child", () => {
            (l.mouseInChild = !0), (v.value = !1), clearTimeout(l.timeout);
          }),
            p.on("submenu:mouse-leave-child", () => {
              l.isChild || ((l.mouseInChild = !1), clearTimeout(l.timeout));
            }),
            d.on("on-update-opened", (l) => {
              if (!$(k))
                if (ee(l)) n.opened = l;
                else if (te(l) && C.accordion) {
                  const { opend: e, parent: s, uidList: i } = l;
                  s === t?.parent
                    ? (n.opened = e)
                    : i.includes(t?.uid) || (n.opened = !1);
                } else
                  e.name && Array.isArray(l) && (n.opened = l.includes(e.name));
            }),
            d.on("on-update-active-name:submenu", (e) => {
              t?.uid && (n.active = e.includes(t?.uid));
            });
        }),
        j(`subMenu:${t?.uid}`, {
          addSubMenu: m,
          removeSubMenu: g,
          getOpenNames: f,
          removeAll: h,
          isRemoveAllPopup: v,
          sliceIndex: y,
          level: b + 1,
          handleMouseleave: P,
          props: C,
        }),
        {
          getClass: S,
          prefixCls: c,
          getCollapse: k,
          getItemStyle: o,
          handleClick: function () {
            const { disabled: l } = e;
            if (l || $(k)) return;
            const s = n.opened;
            if ($(x)) {
              const { uidList: e } = r();
              d.emit("on-update-opened", {
                opend: !1,
                parent: t?.parent,
                uidList: e,
              });
            } else d.emit("open-name-change", { name: e.name, opened: !s });
            n.opened = !s;
          },
          handleVisibleChange: function (e) {
            n.opened = e;
          },
          getParentSubMenu: s,
          getOverlayStyle: w,
          getTheme: I,
          getIsOpend: T,
          getEvents: function (e) {
            return $(k) ? { onMouseenter: N, onMouseleave: () => P(e) } : {};
          },
          getSubClass: _,
          ...L(n),
          ...L(l),
        }
      );
    },
  }),
  [
    [
      "render",
      function (e, t, n, l, i, a) {
        const o = s,
          u = f("CollapseTransition"),
          g = ie;
        return (
          r(),
          c(
            "li",
            { class: d(e.getClass) },
            [
              e.getCollapse
                ? (r(),
                  p(
                    g,
                    {
                      key: 1,
                      placement: "right",
                      "overlay-class-name": `${e.prefixCls}-menu-popover`,
                      visible: e.getIsOpend,
                      "overlay-style": e.getOverlayStyle,
                      align: { offset: [0, 0] },
                      onVisibleChange: e.handleVisibleChange,
                    },
                    {
                      content: v(() => [
                        Z(
                          "div",
                          S(se(e.getEvents(!0))),
                          [
                            Z(
                              "ul",
                              {
                                class: d([
                                  e.prefixCls,
                                  `${e.prefixCls}-${e.getTheme}`,
                                  `${e.prefixCls}-popup`,
                                ]),
                              },
                              [X(e.$slots, "default")],
                              2
                            ),
                          ],
                          16
                        ),
                      ]),
                      default: v(() => [
                        Z(
                          "div",
                          b({ class: e.getSubClass }, e.getEvents(!1)),
                          [
                            Z(
                              "div",
                              {
                                class: d([
                                  {
                                    [`${e.prefixCls}-submenu-popup`]:
                                      !e.getParentSubMenu,
                                    [`${e.prefixCls}-submenu-collapsed-show-tit`]:
                                      e.collapsedShowTitle,
                                  },
                                ]),
                              },
                              [X(e.$slots, "title")],
                              2
                            ),
                            e.getParentSubMenu
                              ? (r(),
                                p(
                                  o,
                                  {
                                    key: 0,
                                    icon: "i-ion:chevron-down",
                                    size: 14,
                                    class: d(
                                      `${e.prefixCls}-submenu-title-icon`
                                    ),
                                  },
                                  null,
                                  8,
                                  ["class"]
                                ))
                              : m("", !0),
                          ],
                          16
                        ),
                      ]),
                      _: 3,
                    },
                    8,
                    [
                      "overlay-class-name",
                      "visible",
                      "overlay-style",
                      "onVisibleChange",
                    ]
                  ))
                : (r(),
                  c(
                    x,
                    { key: 0 },
                    [
                      Z(
                        "div",
                        {
                          class: d(`${e.prefixCls}-submenu-title`),
                          style: q(e.getItemStyle),
                          onClick:
                            t[0] ||
                            (t[0] = Y(
                              (...t) => e.handleClick && e.handleClick(...t),
                              ["stop"]
                            )),
                        },
                        [
                          X(e.$slots, "title"),
                          y(
                            o,
                            {
                              icon: "i-ion:chevron-down",
                              size: 14,
                              class: d(`${e.prefixCls}-submenu-title-icon`),
                            },
                            null,
                            8,
                            ["class"]
                          ),
                        ],
                        6
                      ),
                      y(u, null, {
                        default: v(() => [
                          ne(
                            Z(
                              "ul",
                              { class: d(e.prefixCls) },
                              [X(e.$slots, "default")],
                              2
                            ),
                            [[le, e.opened]]
                          ),
                        ]),
                        _: 3,
                      }),
                    ],
                    64
                  )),
            ],
            2
          )
        );
      },
    ],
  ]
);
const lt = u(
    l({
      name: "SimpleMenuTag",
      props: {
        item: { type: Object, default: () => ({}) },
        dot: Be.bool,
        collapseParent: Be.bool,
      },
      setup(e) {
        const { prefixCls: t } = i("simple-menu"),
          n = a(() => {
            const { item: t } = e;
            if (!t) return !1;
            const { tag: n } = t;
            if (!n) return !1;
            const { dot: l, content: s } = n;
            return !(!l && !s);
          }),
          l = a(() => {
            if (!n.value) return "";
            const { item: t, collapseParent: l } = e,
              { tag: s } = t,
              { dot: i, content: a } = s;
            return i || l ? "" : a;
          });
        return {
          getTagClass: a(() => {
            const { item: n, collapseParent: l } = e,
              { tag: s = {} } = n || {},
              { dot: i, type: a = "error" } = s,
              o = `${t}-tag`;
            return [
              o,
              [`${o}--${a}`],
              { [`${o}--collapse`]: l, [`${o}--dot`]: i || e.dot },
            ];
          }),
          getShowTag: n,
          getContent: l,
        };
      },
    }),
    [
      [
        "render",
        function (e, t, n, l, s, i) {
          return e.getShowTag
            ? (r(),
              c(
                "span",
                { key: 0, class: d(e.getTagClass) },
                h(e.getContent),
                3
              ))
            : m("", !0);
        },
      ],
    ]
  ),
  st = l({
    name: "SimpleSubMenu",
    components: { SubMenu: nt, MenuItem: tt, SimpleMenuTag: lt },
    props: {
      item: { type: Object, default: () => ({}) },
      parent: Be.bool,
      collapsedShowTitle: Be.bool,
      collapse: Be.bool,
      theme: Be.oneOf(["dark", "light"]),
    },
    setup(e) {
      const { t: t } = o(),
        n = ae(),
        { createMessage: l } = re(),
        { prefixCls: s } = i("simple-menu"),
        u = N(!1),
        r = N(""),
        c = a(() => !e.item?.meta?.hideMenu),
        p = a(
          () => (t) =>
            t
              ? e.item?.activeIcon || e.item?.icon || ""
              : e.item?.icon || e.item?.activeIcon || ""
        ),
        d = a(() => t(e.item?.name)),
        m = a(() => !e.collapse || !e.parent),
        g = a(() => !!e.collapse && !!e.parent),
        h = a(() => [
          { [`${s}__parent`]: e.parent, [`${s}__children`]: !e.parent },
        ]),
        f = N(null);
      const v = "fedml model device login $user_id_or_api_key -c",
        y = "fedml model device login $user_id_or_api_key -p",
        b = a(() => oe(e.item.path));
      return (
        D(() => {
          r.value = `${window.location.origin}/${n.getFederateModuleName}/collaborator/addFriends?id=${n.getUserInfo.id}`;
        }),
        {
          getIsExternalLink: b,
          copyData: () => {
            document.querySelector("#demoInput").select(),
              document.execCommand("copy"),
              l.success("copy success");
          },
          prefixCls: s,
          menuHasChildren: function (e) {
            return (
              !e.meta?.hideChildrenInMenu &&
              Reflect.has(e, "children") &&
              !!e.children &&
              e.children.length > 0
            );
          },
          addModal: f,
          handleCopyFun: (e) => {
            let t = "";
            t = 1 === e ? v : y;
            const n = document.createElement("input");
            (n.value = t),
              document.body.appendChild(n),
              n.select(),
              document.execCommand("Copy"),
              n.remove(),
              ue.success("copy success");
          },
          addFriendUrl: r,
          textOne: v,
          textTwo: y,
          getShowMenu: c,
          userStore: n,
          getIcon: p,
          getI18nName: d,
          getShowSubTitle: m,
          visiblePopover: u,
          getLevelClass: h,
          getIsCollapseParent: g,
        }
      );
    },
  }),
  it = Z(
    "div",
    null,
    [
      Z("img", {
        src: "/assets/ic-DthcPW8M.png",
        style: { width: "350px", height: "350px" },
      }),
    ],
    -1
  ),
  at = Z(
    "p",
    { style: { "font-size": "14px", "line-height": "20px" } },
    " Invite Collaborators By Links ",
    -1
  ),
  ot = { class: "fedml-menu-item fedml-simple-menu__children" },
  ut = { key: 1, class: "mt-1 collapse-title break-words text-wrap" },
  rt = ["href"],
  ct = { key: 1, class: "mt-2 collapse-title" },
  pt = ["href"];
const dt = u(st, [
  [
    "render",
    function (e, t, n, l, i, a) {
      const o = ce,
        u = pe,
        C = de,
        M = ie,
        S = s,
        I = f("SimpleMenuTag"),
        $ = f("MenuItem"),
        w = f("SimpleSubMenu", !0),
        T = f("SubMenu");
      return (
        r(),
        c(
          x,
          null,
          [
            "Collaborators" === e.item.name
              ? (r(),
                p(
                  M,
                  {
                    key: 0,
                    open: e.visiblePopover,
                    "onUpdate:open":
                      t[1] || (t[1] = (t) => (e.visiblePopover = t)),
                    style: { "margin-top": "5px" },
                    title: "Invite Collaborator",
                    trigger: "click",
                    placement: "rightTop",
                    class: "mlPopover",
                  },
                  {
                    content: v(() => [
                      y(
                        o,
                        {
                          id: "demoInput",
                          value: e.addFriendUrl,
                          style: { position: "absolute", opacity: "0%" },
                        },
                        null,
                        8,
                        ["value"]
                      ),
                      it,
                      Z("div", null, [
                        at,
                        y(
                          u,
                          {
                            value: e.addFriendUrl,
                            "onUpdate:value":
                              t[0] || (t[0] = (t) => (e.addFriendUrl = t)),
                            placeholder: "invite other to collaborate",
                            onSearch: e.copyData,
                          },
                          { enterButton: v(() => [g(" Copy link ")]), _: 1 },
                          8,
                          ["value", "onSearch"]
                        ),
                      ]),
                    ]),
                    default: v(() => [
                      Z("li", ot, [
                        y(
                          C,
                          { block: "", shape: "round" },
                          {
                            default: v(() => [g(" Invite Collaborator ")]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["open"]
                ))
              : m("", !0),
            !e.menuHasChildren(e.item) && e.getShowMenu
              ? (r(),
                p(
                  $,
                  b({ key: 1, name: e.item.path }, e.$props, {
                    class: e.getLevelClass,
                  }),
                  {
                    default: v(({ active: t }) => [
                      e.getIcon(t)
                        ? (r(),
                          p(
                            S,
                            { key: 0, icon: e.getIcon(t), size: 18 },
                            null,
                            8,
                            ["icon"]
                          ))
                        : m("", !0),
                      e.collapsedShowTitle && e.getIsCollapseParent
                        ? (r(), c("div", ut, h(e.getI18nName), 1))
                        : m("", !0),
                    ]),
                    title: v(() => [
                      Z(
                        "span",
                        {
                          class: d([
                            [`${e.prefixCls}-sub-title`],
                            "inline-flex gap1 items-center ml-2",
                          ]),
                        },
                        [
                          Z(
                            "a",
                            {
                              class: "break-words text-wrap spanlikeanchor",
                              href: e.item.path,
                              onClick:
                                t[2] ||
                                (t[2] = (e) => {
                                  e.preventDefault();
                                }),
                            },
                            [
                              g(h(e.getI18nName) + " ", 1),
                              e.getIsExternalLink
                                ? (r(),
                                  p(S, {
                                    key: 0,
                                    color: "gray",
                                    icon: "i-tabler:external-link",
                                  }))
                                : m("", !0),
                            ],
                            8,
                            rt
                          ),
                        ],
                        2
                      ),
                      y(
                        I,
                        {
                          item: e.item,
                          "collapse-parent": e.getIsCollapseParent,
                        },
                        null,
                        8,
                        ["item", "collapse-parent"]
                      ),
                    ]),
                    _: 1,
                  },
                  16,
                  ["name", "class"]
                ))
              : m("", !0),
            e.menuHasChildren(e.item) && e.getShowMenu
              ? (r(),
                p(
                  T,
                  {
                    key: 2,
                    name: e.item.path,
                    class: d([e.getLevelClass, e.theme]),
                    "collapsed-show-title": e.collapsedShowTitle,
                  },
                  {
                    title: v(({ active: n }) => [
                      e.getIcon(n)
                        ? (r(),
                          p(
                            S,
                            { key: 0, icon: e.getIcon(n), size: 18 },
                            null,
                            8,
                            ["icon"]
                          ))
                        : m("", !0),
                      e.collapsedShowTitle && e.getIsCollapseParent
                        ? (r(), c("div", ct, h(e.getI18nName), 1))
                        : m("", !0),
                      ne(
                        Z(
                          "a",
                          {
                            class: d([
                              [`${e.prefixCls}-sub-title`],
                              "inline-flex gap1 items-center ml-2",
                            ]),
                            href: e.item.path,
                            style: { color: "inherit" },
                            onClick:
                              t[3] ||
                              (t[3] = (e) => {
                                e.preventDefault();
                              }),
                          },
                          [
                            g(h(e.getI18nName) + " ", 1),
                            e.getIsExternalLink
                              ? (r(),
                                p(S, {
                                  key: 0,
                                  color: "gray",
                                  icon: "i-tabler:external-link",
                                }))
                              : m("", !0),
                          ],
                          10,
                          pt
                        ),
                        [[le, e.getShowSubTitle]]
                      ),
                      y(
                        I,
                        {
                          item: e.item,
                          "collapse-parent": !!e.collapse && !!e.parent,
                        },
                        null,
                        8,
                        ["item", "collapse-parent"]
                      ),
                    ]),
                    default: v(() => [
                      (r(!0),
                      c(
                        x,
                        null,
                        k(
                          e.item.children || [],
                          (t) => (
                            r(),
                            p(
                              w,
                              b({ key: t.path, ref_for: !0 }, e.$props, {
                                item: t,
                                parent: !1,
                              }),
                              null,
                              16,
                              ["item"]
                            )
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["name", "class", "collapsed-show-title"]
                ))
              : m("", !0),
          ],
          64
        )
      );
    },
  ],
]);
function mt(e, t, n, l, s) {
  return {
    setOpenKeys: me(async function (s) {
      const i = !l.value,
        a = w(t.value);
      Ae(
        () => {
          if (0 === a?.length)
            return (e.activeSubMenuNames = []), void (e.openNames = []);
          const t = _(a, s);
          $(n) ? (e.openNames = t) : (e.openNames = T([...e.openNames, ...t])),
            (e.activeSubMenuNames = e.openNames);
        },
        30,
        i
      );
    }, 50),
    getOpenKeys: a(() => ($(s) ? [] : e.openNames)),
  };
}
const gt = l({
  name: "SimpleMenu",
  components: { MenuMain: Qe, SimpleSubMenu: dt },
  inheritAttrs: !1,
  props: {
    items: { type: Array, default: () => [] },
    collapse: Be.bool,
    mixSider: Be.bool,
    theme: Be.string,
    accordion: Be.bool.def(!0),
    collapsedShowTitle: Be.bool,
    beforeClickFn: { type: Function },
    isSplitMenu: Be.bool,
  },
  emits: ["menuClick"],
  setup(e, { attrs: t, emit: n }) {
    const l = N(""),
      s = N(!1),
      o = O({ activeName: "", openNames: [], activeSubMenuNames: [] }),
      { currentRoute: u } = P(),
      { prefixCls: r } = i("simple-menu"),
      { items: c, accordion: p, mixSider: d, collapse: m } = L(e),
      { setOpenKeys: g, getOpenKeys: h } = mt(o, c, p, d, m),
      f = a(() => ({ ...t, ...e }));
    return (
      A(
        () => e.collapse,
        (e) => {
          e ? (o.openNames = []) : g(u.value.path);
        },
        { immediate: !0 }
      ),
      A(
        () => e.items,
        () => {
          e.isSplitMenu && g(u.value.path);
        },
        { flush: "post" }
      ),
      K((e) => {
        e.name !== B &&
          ((l.value = e.meta?.currentActiveMenu),
          (async function (e) {
            if ($(s)) return void (s.value = !1);
            const t = (e || $(u)).path;
            (o.activeName = t), g(t);
          })(e),
          $(l) && ((o.activeName = $(l)), g($(l))));
      }),
      {
        prefixCls: r,
        getBindValues: f,
        handleSelect: async function (t) {
          if (oe(t)) return void ge(t);
          const { beforeClickFn: l } = e;
          if (l && R(l)) {
            if (!(await l(t))) return;
          }
          n("menuClick", t), (s.value = !0), g(t), (o.activeName = t);
        },
        getOpenKeys: h,
        ...L(o),
      }
    );
  },
});
const ht = u(gt, [
    [
      "render",
      function (e, t, n, l, s, i) {
        const a = f("SimpleSubMenu"),
          o = f("MenuMain");
        return (
          r(),
          p(
            o,
            b(e.getBindValues, {
              "active-name": e.activeName,
              "open-names": e.getOpenKeys,
              class: e.prefixCls,
              "active-sub-menu-names": e.activeSubMenuNames,
              onSelect: e.handleSelect,
            }),
            {
              default: v(() => [
                (r(!0),
                c(
                  x,
                  null,
                  k(
                    e.items,
                    (t) => (
                      r(),
                      p(
                        a,
                        {
                          key: t.path,
                          item: t,
                          parent: !0,
                          "collapsed-show-title": e.collapsedShowTitle,
                          collapse: e.collapse,
                        },
                        null,
                        8,
                        ["item", "collapsed-show-title", "collapse"]
                      )
                    )
                  ),
                  128
                )),
              ]),
              _: 1,
            },
            16,
            [
              "active-name",
              "open-names",
              "class",
              "active-sub-menu-names",
              "onSelect",
            ]
          )
        );
      },
    ],
  ]),
  ft = l({
    name: "SimpleMenuV1",
    components: { MenuMain: Qe, SimpleSubMenu: dt },
    inheritAttrs: !1,
    props: {
      items: { type: Array, default: () => [] },
      collapse: Be.bool,
      mixSider: Be.bool,
      theme: Be.string,
      accordion: Be.bool.def(!1),
      collapsedShowTitle: Be.bool,
      beforeClickFn: { type: Function },
      isSplitMenu: Be.bool,
    },
    emits: ["menuClick"],
    setup(e, { attrs: t, emit: n }) {
      const l = N(""),
        s = N(!1),
        o = O({ activeName: "", openNames: [], activeSubMenuNames: [] }),
        { currentRoute: u } = P(),
        { prefixCls: r } = i("simple-menu-v1"),
        { items: c, accordion: p, mixSider: d, collapse: m } = L(e),
        { setOpenKeys: g, getOpenKeys: h } = mt(o, c, p, d, m),
        f = a(() => ({ ...t, ...e }));
      A(
        () => e.collapse,
        (e) => {
          e ? (o.openNames = []) : g(u.value.path);
        },
        { immediate: !0 }
      ),
        A(
          () => e.items,
          () => {
            e.isSplitMenu && g(u.value.path);
          },
          { flush: "post" }
        );
      const v = N([]),
        y = N(""),
        b = a(() => v.value.find((e) => e.path === y.value));
      return (
        K((e) => {
          e.name !== B &&
            (he().then((e) => {
              v.value = e;
            }),
            z(e.path, !0).then((e) => {
              y.value = e;
            }),
            (l.value = e.meta?.currentActiveMenu),
            (async function (e) {
              if ($(s)) return void (s.value = !1);
              const t = (e || $(u)).path;
              (o.activeName = t), g(t);
            })(e),
            $(l) && ((o.activeName = $(l)), g($(l))));
        }),
        {
          topMenus: v,
          currentParentPath: y,
          getCurrentParentMenu: b,
          prefixCls: r,
          getBindValues: f,
          handleSelect: async function (t) {
            if (oe(t)) return void ge(t);
            const { beforeClickFn: l } = e;
            if (l && R(l)) {
              if (!(await l(t))) return;
            }
            n("menuClick", t), (s.value = !0), g(t), (o.activeName = t);
          },
          getOpenKeys: h,
          ...L(o),
        }
      );
    },
  }),
  vt = { key: 0 },
  yt = { key: 0 },
  bt = { class: "flex justify-start items-center gap-2 px-1" };
const Ct = u(ft, [
  [
    "render",
    function (e, t, n, l, i, a) {
      const o = s,
        u = C,
        S = M,
        I = fe,
        $ = f("SimpleSubMenu"),
        w = f("MenuMain");
      return (
        r(),
        c(
          x,
          null,
          [
            e.isSplitMenu
              ? (r(),
                c("nav", vt, [
                  y(
                    I,
                    { class: "w-full" },
                    {
                      overlay: v(() => [
                        y(S, null, {
                          default: v(() => [
                            (r(!0),
                            c(
                              x,
                              null,
                              k(
                                e.topMenus,
                                (t) => (
                                  r(),
                                  p(
                                    u,
                                    {
                                      key: t.path,
                                      onClick: (n) =>
                                        e.handleSelect(t.redirect || t.path),
                                    },
                                    {
                                      default: v(() => [
                                        Z("span", bt, [
                                          y(
                                            o,
                                            { size: "20", icon: t.meta?.icon },
                                            null,
                                            8,
                                            ["icon"]
                                          ),
                                          g(" " + h(t.meta?.title), 1),
                                        ]),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["onClick"]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 1,
                        }),
                      ]),
                      default: v(() => [
                        Z(
                          "div",
                          {
                            class: d([
                              "flex justify-start items-center px4 py3 cursor-pointer gap-2 text-lg border-b-1 border-b-solid border-b-primary/10",
                              { "justify-center": e.collapse },
                            ]),
                          },
                          [
                            y(
                              o,
                              {
                                size: "20",
                                icon: e.getCurrentParentMenu?.meta?.icon,
                              },
                              null,
                              8,
                              ["icon"]
                            ),
                            e.collapse
                              ? m("", !0)
                              : (r(),
                                c(
                                  "span",
                                  yt,
                                  h(e.getCurrentParentMenu?.meta?.title),
                                  1
                                )),
                            e.collapse
                              ? m("", !0)
                              : (r(),
                                p(o, {
                                  key: 1,
                                  class: "ml-auto",
                                  icon: "i-cil:applications",
                                })),
                          ],
                          2
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]))
              : m("", !0),
            y(
              w,
              b(e.getBindValues, {
                "active-name": e.activeName,
                "open-names": e.getOpenKeys,
                "indent-size": 16,
                class: e.prefixCls,
                "active-sub-menu-names": e.activeSubMenuNames,
                onSelect: e.handleSelect,
              }),
              {
                default: v(() => [
                  (r(!0),
                  c(
                    x,
                    null,
                    k(
                      e.items,
                      (t) => (
                        r(),
                        p(
                          $,
                          {
                            key: t.path,
                            item: t,
                            parent: !0,
                            "collapsed-show-title": e.collapsedShowTitle,
                            collapse: e.collapse,
                          },
                          null,
                          8,
                          ["item", "collapsed-show-title", "collapse"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                _: 1,
              },
              16,
              [
                "active-name",
                "open-names",
                "class",
                "active-sub-menu-names",
                "onSelect",
              ]
            ),
          ],
          64
        )
      );
    },
  ],
]);
const Mt = l({
  name: "LayoutMenu",
  props: {
    theme: Be.oneOf(["light", "dark"]),
    splitType: { type: Number, default: Ce.NONE },
    isHorizontal: Be.bool,
    menuMode: { type: [String], default: "" },
  },
  setup(t) {
    const n = xe(),
      {
        getMenuMode: l,
        getMenuType: s,
        getMenuTheme: o,
        getCollapsed: u,
        getCollapsedShowTitle: r,
        getAccordion: c,
        getIsHorizontal: p,
        getIsSidebarType: d,
        getSplit: m,
      } = I(),
      { getShowLogo: g } = ke(),
      { prefixCls: h } = i("layout-menu"),
      { menusRef: f } = (function (e) {
        const t = N([]),
          { currentRoute: n } = P(),
          { getIsMobile: l } = ve(),
          s = ye(),
          { setMenuSetting: i, getIsHorizontal: o, getSplit: u } = I(),
          r = be(async function (e) {
            if ($(p) || $(l)) return;
            const n = await Me(e);
            if (!n || !n.length) return i({ hidden: !0 }), void (t.value = []);
            i({ hidden: !1 }), (t.value = n);
          }, 50),
          c = a(() => $(e) !== Ce.LEFT && !$(o)),
          p = a(() => !$(u) || $(e) !== Ce.LEFT),
          d = a(() => $(e) === Ce.TOP),
          m = a(() => $(e) === Ce.NONE || !$(u));
        async function g() {
          if ($(m) || $(l)) t.value = await he();
          else if ($(d)) {
            const e = await Se();
            t.value = e;
          }
        }
        return (
          A(
            [() => $(n).path, () => $(e)],
            async ([e]) => {
              if ($(c) || $(l)) return;
              const { meta: t } = $(n),
                s = t.currentActiveMenu;
              let i = await z(e);
              i || (i = await z(s)), i && r(i);
            },
            { immediate: !0 }
          ),
          A(
            [() => s.getLastBuildMenuTime, () => s.getBackMenuList],
            () => {
              g();
            },
            { immediate: !0 }
          ),
          A(
            () => u.value,
            () => {
              $(c) || g();
            }
          ),
          { menusRef: t }
        );
      })(Ie(t, "splitType")),
      { getIsMobile: v } = ve(),
      C = a(() => ($(v) ? e.INLINE : t.menuMode || $(l))),
      M = a(() => t.theme || $(o)),
      S = a(() => $(g) && $(d)),
      k = a(
        () =>
          !$(p) && ($(d) || t.splitType === Ce.LEFT || t.splitType === Ce.NONE)
      ),
      w = a(() => ({ height: `calc(100% - ${$(S) ? `${$e}px` : 0})` })),
      T = a(() => [`${h}-logo`, $(M), { [`${h}--mobile`]: $(v) }]),
      _ = a(() => {
        const e = $(f);
        return {
          menus: e,
          beforeClickFn: L,
          items: e,
          theme: $(M),
          accordion: $(c),
          collapse: $(u),
          collapsedShowTitle: $(r),
          onMenuClick: O,
        };
      });
    function O(e) {
      n(e);
    }
    async function L(e) {
      return !oe(e) || (ge(e), !1);
    }
    function K() {
      const { menus: e, ...n } = $(_);
      return e && e.length
        ? t.isHorizontal
          ? y(
              Ye,
              b(n, {
                isHorizontal: t.isHorizontal,
                type: $(s),
                showLogo: $(S),
                mode: $(C),
                items: e,
              }),
              null
            )
          : y(Ct, b(n, { isSplitMenu: $(m), items: e }), null)
        : null;
    }
    return () =>
      y(x, null, [
        $(S) || $(v)
          ? y(we, { showTitle: !0, class: $(T), theme: $(M) }, null)
          : null,
        $(k) ? y(Re, { style: $(w) }, { default: () => K() }) : K(),
      ]);
  },
});
const St = u(
  l({
    name: "HeaderTrigger",
    props: { theme: Be.oneOf(["light", "dark"]) },
    setup() {
      const { getCollapsed: e, toggleCollapsed: t } = I(),
        { prefixCls: n } = i("layout-header-trigger");
      return { getCollapsed: e, toggleCollapsed: t, prefixCls: n };
    },
  }),
  [
    [
      "render",
      function (e, t, n, l, i, a) {
        const o = s;
        return (
          r(),
          c(
            "span",
            {
              class: d([e.prefixCls, e.theme]),
              onClick:
                t[0] ||
                (t[0] = (...t) => e.toggleCollapsed && e.toggleCollapsed(...t)),
            },
            [
              e.getCollapsed
                ? (r(),
                  p(o, { key: 0, icon: "i-ant-design:MenuUnfoldOutlined" }))
                : (r(),
                  p(o, { key: 1, icon: "i-ant-design:MenuFoldOutlined" })),
            ],
            2
          )
        );
      },
    ],
  ]
);
const xt = u(
  l({
    name: "LayoutTrigger",
    components: {
      SiderTrigger: Ee(() =>
        Te(
          () => import("./SiderTrigger-bFkcr4MG.js"),
          __vite__mapDeps([0, 1, 2])
        )
      ),
      HeaderTrigger: St,
    },
    props: { sider: Be.bool.def(!0), theme: Be.oneOf(["light", "dark"]) },
  }),
  [
    [
      "render",
      function (e, t, n, l, s, i) {
        const a = f("SiderTrigger"),
          o = f("HeaderTrigger");
        return e.sider
          ? (r(), p(a, { key: 0 }))
          : (r(), p(o, { key: 1, theme: e.theme }, null, 8, ["theme"]));
      },
    ],
  ]
);
function kt(e, t, n = !1) {
  const { getMiniWidthNumber: l, getCollapsed: s, setMenuSetting: i } = I();
  function a(e) {
    const t = $(e);
    return t ? (Reflect.has(t, "$el") ? $(e)?.$el : $(e)) : null;
  }
  function o() {
    const o = a(t);
    if (!o) return;
    const u = a(e);
    u &&
      (o.onmousedown = (t) => {
        u.style.transition = "unset";
        const r = t?.clientX;
        return (
          (o.left = o.offsetLeft),
          (function (e, t, n) {
            document.onmousemove = function (s) {
              let i = e.left + (s.clientX - n);
              s = s || window.event;
              const a = $(l);
              return (
                i < 0 && (i = 0),
                i > 800 && (i = 800),
                i < a && (i = a),
                (e.style.left = t.style.width = `${i}px`),
                !1
              );
            };
          })(o, u, r),
          (function (t) {
            const o = a(e);
            document.onmouseup = function () {
              (document.onmousemove = null),
                (document.onmouseup = null),
                (o.style.transition = "width 0.2s");
              const e = Number.parseInt(o.style.width);
              if (n) i({ menuWidth: e });
              else {
                const t = $(l);
                $(s)
                  ? e > t && i({ collapsed: !1, menuWidth: e })
                  : i(e > t + 20 ? { menuWidth: e } : { collapsed: !0 });
              }
              t.releaseCapture?.();
            };
          })(o),
          o.setCapture?.(),
          !1
        );
      });
  }
  return (
    D(() => {
      U(() => {
        me(o, 80)();
      });
    }),
    {}
  );
}
const It = u(
  l({
    name: "DargBar",
    props: { mobile: Boolean },
    setup(e) {
      const { getMiniWidthNumber: t, getCollapsed: n, getCanDrag: l } = I(),
        { prefixCls: s } = i("darg-bar"),
        o = a(() => ($(n) ? { left: `${$(t)}px` } : {})),
        u = a(() => [s, { [`${s}--hide`]: !$(l) || e.mobile }]);
      return { prefixCls: s, getDragBarStyle: o, getClass: u };
    },
  }),
  [
    [
      "render",
      function (e, t, n, l, s, i) {
        return (
          r(),
          c(
            "div",
            {
              class: d([e.getClass, "hover:bg-primary"]),
              style: q(e.getDragBarStyle),
            },
            null,
            6
          )
        );
      },
    ],
    ["__scopeId", "data-v-92fa1ece"],
  ]
);
const $t = u(
    l({
      name: "LayoutSideBar",
      components: {
        Sider: We.Sider,
        LayoutMenu: Mt,
        DragBar: It,
        LayoutTrigger: xt,
      },
      props: { theme: String },
      setup() {
        const t = N(null),
          n = N(null),
          {
            getCollapsed: l,
            getMenuWidth: s,
            getSplit: o,
            getMenuTheme: u,
            getRealWidth: r,
            getMenuHidden: c,
            getMenuFixed: p,
            getIsMixMode: d,
            toggleCollapsed: m,
          } = I(),
          { prefixCls: g } = i("layout-sideBar"),
          { getIsMobile: h } = ve(),
          { getTriggerAttr: f, getShowTrigger: v } = (function (e) {
            const { getTrigger: t, getSplit: n } = I(),
              l = a(() => {
                const l = $(t);
                return l !== _e.NONE && !$(e) && (l === _e.FOOTER || $(n));
              });
            return {
              getTriggerAttr: a(() => ($(l) ? {} : { trigger: null })),
              getShowTrigger: l,
            };
          })(h);
        kt(n, t);
        const { getCollapsedWidth: y, onBreakpointChange: b } = (function () {
            const e = N(!1),
              { getMiniWidthNumber: t } = I();
            return {
              getCollapsedWidth: a(() => ($(e) ? 0 : $(t))),
              onBreakpointChange: function (t) {
                e.value = t;
              },
            };
          })(),
          C = a(() => ($(o) ? e.INLINE : null)),
          M = a(() => ($(o) ? Ce.LEFT : Ce.NONE)),
          S = a(() => !$(o) || !$(c)),
          x = a(() => [
            g,
            { [`${g}--fixed`]: $(p), [`${g}--mix`]: $(d) && !$(h) },
          ]),
          k = a(() => {
            const e = `${$(r)}px`;
            return {
              width: e,
              overflow: "hidden",
              flex: `0 0 ${e}`,
              maxWidth: e,
              minWidth: e,
              transition: "all 0.2s",
            };
          }),
          w = Ne(xt);
        return {
          prefixCls: g,
          sideRef: n,
          dragBarRef: t,
          getIsMobile: h,
          getHiddenDomStyle: k,
          getSiderClass: x,
          getTrigger: w,
          getTriggerAttr: f,
          getCollapsedWidth: y,
          getMenuFixed: p,
          showClassSideBarRef: S,
          getMenuWidth: s,
          getCollapsed: l,
          getMenuTheme: u,
          onBreakpointChange: b,
          getMode: C,
          getSplitType: M,
          getShowTrigger: v,
          toggleCollapsed: m,
        };
      },
    }),
    [
      [
        "render",
        function (e, t, n, l, s, i) {
          const a = f("LayoutTrigger"),
            o = f("LayoutMenu"),
            u = f("DragBar"),
            c = f("Sider");
          return ne(
            (r(),
            p(
              c,
              b(
                {
                  ref: "sideRef",
                  breakpoint: "lg",
                  collapsible: "",
                  class: e.getSiderClass,
                  width: e.getMenuWidth,
                  collapsed: e.getCollapsed,
                  "collapsed-width": e.getCollapsedWidth,
                  theme: e.theme || e.getMenuTheme,
                },
                e.getTriggerAttr,
                { onBreakpoint: e.onBreakpointChange }
              ),
              {
                trigger: v(() => [y(a)]),
                default: v(() => [
                  y(
                    o,
                    {
                      theme: e.getMenuTheme,
                      "menu-mode": e.getMode,
                      "split-type": e.getSplitType,
                    },
                    null,
                    8,
                    ["theme", "menu-mode", "split-type"]
                  ),
                  y(u, { ref: "dragBarRef" }, null, 512),
                ]),
                _: 1,
              },
              16,
              [
                "class",
                "width",
                "collapsed",
                "collapsed-width",
                "theme",
                "onBreakpoint",
              ]
            )),
            [[le, e.showClassSideBarRef]]
          );
        },
      ],
    ]
  ),
  wt = { class: "text" },
  Tt = l({
    __name: "MixSider",
    setup(e) {
      const t = N([]),
        n = N(""),
        l = N([]),
        u = N(!1),
        p = N(null),
        m = N(null),
        g = N(null),
        { prefixCls: f } = i("layout-mix-sider"),
        C = xe(),
        { t: M } = o(),
        {
          getMenuWidth: S,
          getCanDrag: w,
          getCloseMixSidebarOnChange: T,
          getMenuTheme: _,
          getMixSideTrigger: O,
          getRealWidth: L,
          getMixSideFixed: P,
          mixSideHasChildren: B,
          setMenuSetting: R,
          getIsMixSidebar: E,
          getCollapsed: W,
        } = I(),
        H = ye();
      kt(m, p, !0);
      const F = a(() => ($(W) ? Oe : Le)),
        j = a(() => ({ width: $(u) ? `${$(S)}px` : 0, left: `${$(F)}px` }));
      const U = a(() => {
          return (
            (e = $(l).length),
            (t = $(P)),
            (B.value = e > 0),
            !!(t && e > 0) && ((u.value = !0), !0)
          );
          var e, t;
        }),
        V = a(() => {
          const e = $(U) ? $(L) : 0;
          return G(`${$(F) + e}px`);
        }),
        X = a(() => G(`${$(F)}px`)),
        Y = a(() =>
          $(P)
            ? {}
            : {
                onMouseleave: () => {
                  ee(!0), ae();
                },
              }
        ),
        J = a(() => $(w));
      function G(e) {
        return { width: "auto", maxWidth: e, minWidth: 0, flex: `0 0 ${e}` };
      }
      async function Q(e, t = !1) {
        const s = await Me(e);
        if (
          ($(n) === e
            ? (t ? $(u) || (u.value = !0) : $(u) ? ae() : (u.value = !0),
              $(u) || ee())
            : ((u.value = !0), (n.value = e)),
          !s || 0 === s.length)
        )
          return t || C(e), (l.value = []), void ae();
        l.value = s;
      }
      async function ee(e = !1) {
        const s = g.value?.path;
        if (s && ((n.value = await z(s)), $(E))) {
          const s = $(t).find((e) => e.path === $(n)),
            i = s?.path;
          if (i) {
            const t = await Me(i);
            e && ((l.value = t), $(P) && (u.value = t.length > 0)),
              0 === t.length && (l.value = []);
          }
        }
      }
      function te(e) {
        C(e);
      }
      function se() {
        ee(!0), ae();
      }
      function ie() {
        R({ mixSideFixed: !$(U) });
      }
      function ae() {
        $(U) || (u.value = !1);
      }
      return (
        D(async () => {
          t.value = await Se();
        }),
        A(
          [() => H.getLastBuildMenuTime, () => H.getBackMenuList],
          async () => {
            t.value = await Se();
          },
          { immediate: !0 }
        ),
        K((e) => {
          (g.value = e), ee(!0), $(T) && ae();
        }),
        (e, i) => {
          const a = s;
          return (
            r(),
            c(
              x,
              null,
              [
                Z("div", { class: d(`${$(f)}-dom`), style: q($(V)) }, null, 6),
                ne(
                  (r(),
                  c(
                    "div",
                    b(
                      {
                        style: $(X),
                        class: [$(f), $(_), { open: $(u), mini: $(W) }],
                      },
                      $(Y)
                    ),
                    [
                      y(
                        $(we),
                        { "show-title": !1, class: d(`${$(f)}-logo`) },
                        null,
                        8,
                        ["class"]
                      ),
                      y(xt, { class: d(`${$(f)}-trigger`) }, null, 8, [
                        "class",
                      ]),
                      y($(Re), null, {
                        default: v(() => [
                          Z(
                            "ul",
                            { class: d(`${$(f)}-module`) },
                            [
                              (r(!0),
                              c(
                                x,
                                null,
                                k(
                                  $(t),
                                  (e) => (
                                    r(),
                                    c(
                                      "li",
                                      b(
                                        { ref_for: !0 },
                                        (function (e) {
                                          return "hover" === $(O)
                                            ? {
                                                onMouseenter: () =>
                                                  Q(e.path, !0),
                                                onClick: async () => {
                                                  const t = await Me(e.path);
                                                  !e.path ||
                                                    (t && 0 !== t.length) ||
                                                    C(e.path);
                                                },
                                              }
                                            : { onClick: () => Q(e.path) };
                                        })(e),
                                        {
                                          key: e.path,
                                          class: [
                                            `${$(f)}-module__item `,
                                            {
                                              [`${$(f)}-module__item--active`]:
                                                e.path === $(n),
                                            },
                                          ],
                                        }
                                      ),
                                      [
                                        y(
                                          $(lt),
                                          {
                                            item: e,
                                            "collapse-parent": "",
                                            dot: "",
                                          },
                                          null,
                                          8,
                                          ["item"]
                                        ),
                                        y(
                                          a,
                                          {
                                            class: d(`${$(f)}-module__icon`),
                                            size: $(W) ? 16 : 20,
                                            icon:
                                              e.icon || (e.meta && e.meta.icon),
                                          },
                                          null,
                                          8,
                                          ["class", "size", "icon"]
                                        ),
                                        Z(
                                          "p",
                                          { class: d(`${$(f)}-module__name`) },
                                          h($(M)(e.name)),
                                          3
                                        ),
                                      ],
                                      16
                                    )
                                  )
                                ),
                                128
                              )),
                            ],
                            2
                          ),
                        ]),
                        _: 1,
                      }),
                      Z(
                        "div",
                        {
                          ref_key: "sideRef",
                          ref: m,
                          class: d(`${$(f)}-menu-list`),
                          style: q($(j)),
                        },
                        [
                          ne(
                            Z(
                              "div",
                              {
                                class: d([
                                  `${$(f)}-menu-list__title`,
                                  { show: $(u) },
                                ]),
                              },
                              [
                                Z(
                                  "span",
                                  wt,
                                  h("APP_TITLE" in e ? e.APP_TITLE : $(Ke)),
                                  1
                                ),
                                y(
                                  a,
                                  {
                                    size: 16,
                                    icon: $(P)
                                      ? "ri:pushpin-2-fill"
                                      : "ri:pushpin-2-line",
                                    class: "pushpin",
                                    onClick: ie,
                                  },
                                  null,
                                  8,
                                  ["icon"]
                                ),
                              ],
                              2
                            ),
                            [[le, $(u)]]
                          ),
                          y(
                            $(Re),
                            { class: d(`${$(f)}-menu-list__content`) },
                            {
                              default: v(() => [
                                y(
                                  $(ht),
                                  {
                                    items: $(l),
                                    theme: $(_),
                                    "mix-sider": "",
                                    onMenuClick: te,
                                  },
                                  null,
                                  8,
                                  ["items", "theme"]
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["class"]
                          ),
                          ne(
                            Z(
                              "div",
                              {
                                ref_key: "dragBarRef",
                                ref: p,
                                class: d(`${$(f)}-drag-bar !bg-primary`),
                              },
                              null,
                              2
                            ),
                            [[le, $(J) && $(u)]]
                          ),
                        ],
                        6
                      ),
                    ],
                    16
                  )),
                  [[$(Pe), se]]
                ),
              ],
              64
            )
          );
        }
      );
    },
  });
const _t = u(
  l({
    name: "SiderWrapper",
    components: { Sider: $t, Drawer: He, MixSider: Tt },
    props: { theme: String },
    setup() {
      const { prefixCls: e } = i("layout-sider-wrapper"),
        { getIsMobile: t } = ve(),
        {
          setMenuSetting: n,
          getCollapsed: l,
          getMenuWidth: s,
          getIsMixSidebar: a,
        } = I();
      return {
        prefixCls: e,
        getIsMobile: t,
        getCollapsed: l,
        handleClose: function () {
          n({ collapsed: !0 });
        },
        getMenuWidth: s,
        getIsMixSidebar: a,
      };
    },
  }),
  [
    [
      "render",
      function (e, t, n, l, s, i) {
        const a = f("Sider"),
          o = f("Drawer"),
          u = f("MixSider");
        return e.getIsMobile
          ? (r(),
            p(
              o,
              {
                key: 0,
                theme: e.theme,
                placement: "left",
                closable: !1,
                class: d([e.prefixCls, `ant-drawer-theme--${e.theme}`]),
                width: e.getMenuWidth,
                "get-container": null,
                visible: !e.getCollapsed,
                onClose: e.handleClose,
              },
              {
                default: v(() => [
                  y(a, { theme: e.theme }, null, 8, ["theme"]),
                ]),
                _: 1,
              },
              8,
              ["theme", "class", "width", "visible", "onClose"]
            ))
          : e.getIsMixSidebar
          ? (r(), p(u, { key: 1, theme: e.theme }, null, 8, ["theme"]))
          : (r(), p(a, { key: 2, theme: e.theme }, null, 8, ["theme"]));
      },
    ],
  ]
);
export { _t as L };

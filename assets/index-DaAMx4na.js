import {
  aK as e,
  dZ as t,
  dx as a,
  as as o,
  r as n,
  c as i,
  aw as l,
  ck as r,
  aS as s,
  b2 as d,
  aJ as c,
  hA as u,
  aL as v,
  aR as p,
  hB as b,
  hC as h,
  bA as $,
  c6 as f,
  hD as g,
  aU as m,
  e1 as y,
  bT as x,
  bq as k,
  hE as C,
  gD as _,
  aT as S,
  bf as w,
  f2 as T,
  cm as P,
  c7 as B,
  hF as E,
  aV as R,
  aW as L,
  aX as D,
  e7 as I,
  cc as A,
  aQ as O,
  c8 as M,
  ch as H,
  e2 as N,
  d_ as G,
  d$ as z,
  cl as W,
  hG as j,
  e0 as K,
  eC as X,
  b1 as F,
  hH as q,
  b7 as V,
} from "./index-CcOpQHgp.js";
import { u as Y } from "./useRefs-B_3jjMmX.js";
import { i as U } from "./isMobile-VPrdNIIw.js";
function J(o) {
  const n = e([]),
    i = e("function" == typeof o ? o() : o),
    l = (function (o) {
      const n = e(),
        i = e(!1);
      return (
        t(() => {
          (i.value = !0), a.cancel(n.value);
        }),
        function () {
          for (var e = arguments.length, t = new Array(e), l = 0; l < e; l++)
            t[l] = arguments[l];
          i.value ||
            (a.cancel(n.value),
            (n.value = a(() => {
              o(...t);
            })));
        }
      );
    })(() => {
      let e = i.value;
      n.value.forEach((t) => {
        e = t(e);
      }),
        (n.value = []),
        (i.value = e);
    });
  return [
    i,
    function (e) {
      n.value.push(e), l();
    },
  ];
}
const Q = o({
    compatConfig: { MODE: 3 },
    name: "TabNode",
    props: {
      id: { type: String },
      prefixCls: { type: String },
      tab: { type: Object },
      active: { type: Boolean },
      closable: { type: Boolean },
      editable: { type: Object },
      onClick: { type: Function },
      onResize: { type: Function },
      renderWrapper: { type: Function },
      removeAriaLabel: { type: String },
      onFocus: { type: Function },
    },
    emits: ["click", "resize", "remove", "focus"],
    setup(e, t) {
      let { expose: a, attrs: o } = t;
      const d = n();
      function c(t) {
        var a;
        (null === (a = e.tab) || void 0 === a ? void 0 : a.disabled) ||
          e.onClick(t);
      }
      a({ domRef: d });
      const u = i(() => {
        var t;
        return (
          e.editable &&
          !1 !== e.closable &&
          !(null === (t = e.tab) || void 0 === t ? void 0 : t.disabled)
        );
      });
      return () => {
        var t;
        const {
            prefixCls: a,
            id: n,
            active: i,
            tab: { key: v, tab: p, disabled: b, closeIcon: h },
            renderWrapper: $,
            removeAriaLabel: f,
            editable: g,
            onFocus: m,
          } = e,
          y = `${a}-tab`,
          x = l(
            "div",
            {
              key: v,
              ref: d,
              class: s(y, {
                [`${y}-with-remove`]: u.value,
                [`${y}-active`]: i,
                [`${y}-disabled`]: b,
              }),
              style: o.style,
              onClick: c,
            },
            [
              l(
                "div",
                {
                  role: "tab",
                  "aria-selected": i,
                  id: n && `${n}-tab-${v}`,
                  class: `${y}-btn`,
                  "aria-controls": n && `${n}-panel-${v}`,
                  "aria-disabled": b,
                  tabindex: b ? null : 0,
                  onClick: (e) => {
                    e.stopPropagation(), c(e);
                  },
                  onKeydown: (e) => {
                    [r.SPACE, r.ENTER].includes(e.which) &&
                      (e.preventDefault(), c(e));
                  },
                  onFocus: m,
                },
                ["function" == typeof p ? p() : p]
              ),
              u.value &&
                l(
                  "button",
                  {
                    type: "button",
                    "aria-label": f || "remove",
                    tabindex: 0,
                    class: `${y}-remove`,
                    onClick: (t) => {
                      t.stopPropagation(),
                        (function (t) {
                          var a;
                          t.preventDefault(),
                            t.stopPropagation(),
                            e.editable.onEdit("remove", {
                              key:
                                null === (a = e.tab) || void 0 === a
                                  ? void 0
                                  : a.key,
                              event: t,
                            });
                        })(t);
                    },
                  },
                  [
                    (null == h ? void 0 : h()) ||
                      (null === (t = g.removeIcon) || void 0 === t
                        ? void 0
                        : t.call(g)) ||
                      "×",
                  ]
                ),
            ]
          );
        return $ ? $(x) : x;
      };
    },
  }),
  Z = { width: 0, height: 0, left: 0, top: 0 };
const ee = o({
    compatConfig: { MODE: 3 },
    name: "AddButton",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      editable: { type: Object },
      locale: { type: Object, default: void 0 },
    },
    setup(e, t) {
      let { expose: a, attrs: o } = t;
      const i = n();
      return (
        a({ domRef: i }),
        () => {
          const { prefixCls: t, editable: a, locale: n } = e;
          return a && !1 !== a.showAdd
            ? l(
                "button",
                {
                  ref: i,
                  type: "button",
                  class: `${t}-nav-add`,
                  style: o.style,
                  "aria-label":
                    (null == n ? void 0 : n.addAriaLabel) || "Add tab",
                  onClick: (e) => {
                    a.onEdit("add", { event: e });
                  },
                },
                [a.addIcon ? a.addIcon() : "+"]
              )
            : null;
        }
      );
    },
  }),
  te = o({
    compatConfig: { MODE: 3 },
    name: "OperationNode",
    inheritAttrs: !1,
    props: {
      prefixCls: { type: String },
      id: { type: String },
      tabs: { type: Object },
      rtl: { type: Boolean },
      tabBarGutter: { type: Number },
      activeKey: { type: [String, Number] },
      mobile: { type: Boolean },
      moreIcon: m.any,
      moreTransitionName: { type: String },
      editable: { type: Object },
      locale: { type: Object, default: void 0 },
      removeAriaLabel: String,
      onTabClick: { type: Function },
      popupClassName: String,
      getPopupContainer: y(),
    },
    emits: ["tabClick"],
    slots: Object,
    setup(e, t) {
      let { attrs: a, slots: o } = t;
      const [n, d] = u(!1),
        [c, m] = u(null),
        y = (t) => {
          const a = e.tabs.filter((e) => !e.disabled);
          let o = a.findIndex((e) => e.key === c.value) || 0;
          const n = a.length;
          for (let e = 0; e < n; e += 1) {
            o = (o + t + n) % n;
            const e = a[o];
            if (!e.disabled) return void m(e.key);
          }
        },
        x = (t) => {
          const { which: a } = t;
          if (n.value)
            switch (a) {
              case r.UP:
                y(-1), t.preventDefault();
                break;
              case r.DOWN:
                y(1), t.preventDefault();
                break;
              case r.ESC:
                d(!1);
                break;
              case r.SPACE:
              case r.ENTER:
                null !== c.value && e.onTabClick(c.value, t);
            }
          else
            [r.DOWN, r.SPACE, r.ENTER].includes(a) &&
              (d(!0), t.preventDefault());
        },
        k = i(() => `${e.id}-more-popup`),
        C = i(() => (null !== c.value ? `${k.value}-${c.value}` : null));
      return (
        v(() => {
          p(
            c,
            () => {
              const e = document.getElementById(C.value);
              e && e.scrollIntoView && e.scrollIntoView(!1);
            },
            { flush: "post", immediate: !0 }
          );
        }),
        p(n, () => {
          n.value || m(null);
        }),
        b({}),
        () => {
          var t;
          const {
            prefixCls: i,
            id: r,
            tabs: u,
            locale: v,
            mobile: p,
            moreIcon: b = (null === (t = o.moreIcon) || void 0 === t
              ? void 0
              : t.call(o)) || l(h, null, null),
            moreTransitionName: m,
            editable: y,
            tabBarGutter: _,
            rtl: S,
            onTabClick: w,
            popupClassName: T,
          } = e;
          if (!u.length) return null;
          const P = `${i}-dropdown`,
            B = null == v ? void 0 : v.dropdownAriaLabel,
            E = { [S ? "marginRight" : "marginLeft"]: _ };
          u.length || ((E.visibility = "hidden"), (E.order = 1));
          const R = s({ [`${P}-rtl`]: S, [`${T}`]: !0 }),
            L = p
              ? null
              : l(
                  g,
                  {
                    prefixCls: P,
                    trigger: ["hover"],
                    visible: n.value,
                    transitionName: m,
                    onVisibleChange: d,
                    overlayClassName: R,
                    mouseEnterDelay: 0.1,
                    mouseLeaveDelay: 0.1,
                    getPopupContainer: e.getPopupContainer,
                  },
                  {
                    overlay: () =>
                      l(
                        $,
                        {
                          onClick: (e) => {
                            let { key: t, domEvent: a } = e;
                            w(t, a), d(!1);
                          },
                          id: k.value,
                          tabindex: -1,
                          role: "listbox",
                          "aria-activedescendant": C.value,
                          selectedKeys: [c.value],
                          "aria-label": void 0 !== B ? B : "expanded dropdown",
                        },
                        {
                          default: () => [
                            u.map((t) => {
                              var a, o;
                              const n = y && !1 !== t.closable && !t.disabled;
                              return l(
                                f,
                                {
                                  key: t.key,
                                  id: `${k.value}-${t.key}`,
                                  role: "option",
                                  "aria-controls": r && `${r}-panel-${t.key}`,
                                  disabled: t.disabled,
                                },
                                {
                                  default: () => [
                                    l("span", null, [
                                      "function" == typeof t.tab
                                        ? t.tab()
                                        : t.tab,
                                    ]),
                                    n &&
                                      l(
                                        "button",
                                        {
                                          type: "button",
                                          "aria-label":
                                            e.removeAriaLabel || "remove",
                                          tabindex: 0,
                                          class: `${P}-menu-item-remove`,
                                          onClick: (a) => {
                                            var o, n;
                                            a.stopPropagation(),
                                              (o = a),
                                              (n = t.key),
                                              o.preventDefault(),
                                              o.stopPropagation(),
                                              e.editable.onEdit("remove", {
                                                key: n,
                                                event: o,
                                              });
                                          },
                                        },
                                        [
                                          (null === (a = t.closeIcon) ||
                                          void 0 === a
                                            ? void 0
                                            : a.call(t)) ||
                                            (null === (o = y.removeIcon) ||
                                            void 0 === o
                                              ? void 0
                                              : o.call(y)) ||
                                            "×",
                                        ]
                                      ),
                                  ],
                                }
                              );
                            }),
                          ],
                        }
                      ),
                    default: () =>
                      l(
                        "button",
                        {
                          type: "button",
                          class: `${i}-nav-more`,
                          style: E,
                          tabindex: -1,
                          "aria-hidden": "true",
                          "aria-haspopup": "listbox",
                          "aria-controls": k.value,
                          id: `${r}-more`,
                          "aria-expanded": n.value,
                          onKeydown: x,
                        },
                        [b]
                      ),
                  }
                );
          return l(
            "div",
            { class: s(`${i}-nav-operations`, a.class), style: a.style },
            [L, l(ee, { prefixCls: i, locale: v, editable: y }, null)]
          );
        }
      );
    },
  }),
  ae = Symbol("tabsContextKey"),
  oe = () => k(ae, { tabs: n([]), prefixCls: n() }),
  ne = Math.pow(0.995, 20);
function ie(e, t) {
  const a = n(e);
  return [
    a,
    function (e) {
      const o = "function" == typeof e ? e(a.value) : e;
      o !== a.value && t(o, a.value), (a.value = o);
    },
  ];
}
const le = { width: 0, height: 0, left: 0, top: 0, right: 0 },
  re = o({
    compatConfig: { MODE: 3 },
    name: "TabNavList",
    inheritAttrs: !1,
    props: {
      id: { type: String },
      tabPosition: { type: String },
      activeKey: { type: [String, Number] },
      rtl: { type: Boolean },
      animated: T(),
      editable: T(),
      moreIcon: m.any,
      moreTransitionName: { type: String },
      mobile: { type: Boolean },
      tabBarGutter: { type: Number },
      renderTabBar: { type: Function },
      locale: T(),
      popupClassName: String,
      getPopupContainer: y(),
      onTabClick: { type: Function },
      onTabScroll: { type: Function },
    },
    slots: Object,
    emits: ["tabClick", "tabScroll"],
    setup(o, r) {
      let { attrs: b, slots: h } = r;
      const { tabs: $, prefixCls: f } = oe(),
        g = e(),
        m = e(),
        y = e(),
        x = e(),
        [k, T] = Y(),
        P = i(() => "top" === o.tabPosition || "bottom" === o.tabPosition),
        [B, E] = ie(0, (e, t) => {
          P.value &&
            o.onTabScroll &&
            o.onTabScroll({ direction: e > t ? "left" : "right" });
        }),
        [R, L] = ie(0, (e, t) => {
          !P.value &&
            o.onTabScroll &&
            o.onTabScroll({ direction: e > t ? "top" : "bottom" });
        }),
        [D, I] = u(0),
        [A, O] = u(0),
        [M, H] = u(null),
        [N, G] = u(null),
        [z, W] = u(0),
        [j, K] = u(0),
        [X, F] = J(new Map()),
        q = (function (e, t) {
          const a = n(new Map());
          return (
            d(() => {
              var o, n;
              const i = new Map(),
                l = e.value,
                r =
                  t.value.get(
                    null === (o = l[0]) || void 0 === o ? void 0 : o.key
                  ) || Z,
                s = r.left + r.width;
              for (let e = 0; e < l.length; e += 1) {
                const { key: a } = l[e];
                let o = t.value.get(a);
                o ||
                  (o =
                    t.value.get(
                      null === (n = l[e - 1]) || void 0 === n ? void 0 : n.key
                    ) || Z);
                const r = i.get(a) || c({}, o);
                (r.right = s - r.left - r.width), i.set(a, r);
              }
              a.value = new Map(i);
            }),
            a
          );
        })($, X),
        V = i(() => `${f.value}-nav-operations-hidden`),
        U = e(0),
        ae = e(0);
      d(() => {
        P.value
          ? o.rtl
            ? ((U.value = 0), (ae.value = Math.max(0, D.value - M.value)))
            : ((U.value = Math.min(0, M.value - D.value)), (ae.value = 0))
          : ((U.value = Math.min(0, N.value - A.value)), (ae.value = 0));
      });
      const re = (e) => (e < U.value ? U.value : e > ae.value ? ae.value : e),
        se = e(),
        [de, ce] = u(),
        ue = () => {
          ce(Date.now());
        },
        ve = () => {
          clearTimeout(se.value);
        },
        pe = (e, t) => {
          e((e) => re(e + t));
        };
      !(function (e, a) {
        const [o, i] = u(),
          [l, r] = u(0),
          [s, d] = u(0),
          [c, p] = u(),
          b = n(),
          h = n(),
          $ = n({
            onTouchStart: function (e) {
              const { screenX: t, screenY: a } = e.touches[0];
              i({ x: t, y: a }), clearInterval(b.value);
            },
            onTouchMove: function (e) {
              if (!o.value) return;
              e.preventDefault();
              const { screenX: t, screenY: n } = e.touches[0],
                s = t - o.value.x,
                c = n - o.value.y;
              a(s, c), i({ x: t, y: n });
              const u = Date.now();
              d(u - l.value), r(u), p({ x: s, y: c });
            },
            onTouchEnd: function () {
              if (!o.value) return;
              const e = c.value;
              if ((i(null), p(null), e)) {
                const t = e.x / s.value,
                  o = e.y / s.value,
                  n = Math.abs(t),
                  i = Math.abs(o);
                if (Math.max(n, i) < 0.1) return;
                let l = t,
                  r = o;
                b.value = setInterval(() => {
                  Math.abs(l) < 0.01 && Math.abs(r) < 0.01
                    ? clearInterval(b.value)
                    : ((l *= ne), (r *= ne), a(20 * l, 20 * r));
                }, 20);
              }
            },
            onWheel: function (e) {
              const { deltaX: t, deltaY: o } = e;
              let n = 0;
              const i = Math.abs(t),
                l = Math.abs(o);
              i === l
                ? (n = "x" === h.value ? t : o)
                : i > l
                ? ((n = t), (h.value = "x"))
                : ((n = o), (h.value = "y")),
                a(-n, -n) && e.preventDefault();
            },
          });
        function f(e) {
          $.value.onTouchStart(e);
        }
        function g(e) {
          $.value.onTouchMove(e);
        }
        function m(e) {
          $.value.onTouchEnd(e);
        }
        function y(e) {
          $.value.onWheel(e);
        }
        v(() => {
          var t, a;
          document.addEventListener("touchmove", g, { passive: !1 }),
            document.addEventListener("touchend", m, { passive: !1 }),
            null === (t = e.value) ||
              void 0 === t ||
              t.addEventListener("touchstart", f, { passive: !1 }),
            null === (a = e.value) ||
              void 0 === a ||
              a.addEventListener("wheel", y, { passive: !1 });
        }),
          t(() => {
            document.removeEventListener("touchmove", g),
              document.removeEventListener("touchend", m);
          });
      })(g, (e, t) => {
        if (P.value) {
          if (M.value >= D.value) return !1;
          pe(E, e);
        } else {
          if (N.value >= A.value) return !1;
          pe(L, t);
        }
        return ve(), ue(), !0;
      }),
        p(de, () => {
          ve(),
            de.value &&
              (se.value = setTimeout(() => {
                ce(0);
              }, 100));
        });
      const be = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : o.activeKey;
          const t = q.value.get(e) || {
            width: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
          };
          if (P.value) {
            let e = B.value;
            o.rtl
              ? t.right < B.value
                ? (e = t.right)
                : t.right + t.width > B.value + M.value &&
                  (e = t.right + t.width - M.value)
              : t.left < -B.value
              ? (e = -t.left)
              : t.left + t.width > -B.value + M.value &&
                (e = -(t.left + t.width - M.value)),
              L(0),
              E(re(e));
          } else {
            let e = R.value;
            t.top < -R.value
              ? (e = -t.top)
              : t.top + t.height > -R.value + N.value &&
                (e = -(t.top + t.height - N.value)),
              E(0),
              L(re(e));
          }
        },
        he = e(0),
        $e = e(0);
      d(() => {
        let e, t, a, n, i, l;
        const r = q.value;
        ["top", "bottom"].includes(o.tabPosition)
          ? ((e = "width"),
            (n = M.value),
            (i = D.value),
            (l = z.value),
            (t = o.rtl ? "right" : "left"),
            (a = Math.abs(B.value)))
          : ((e = "height"),
            (n = N.value),
            (i = D.value),
            (l = j.value),
            (t = "top"),
            (a = -R.value));
        let s = n;
        i + l > n && i < n && (s = n - l);
        const d = $.value;
        if (!d.length) return ([he.value, $e.value] = [0, 0]);
        const c = d.length;
        let u = c;
        for (let o = 0; o < c; o += 1) {
          const n = r.get(d[o].key) || le;
          if (n[t] + n[e] > a + s) {
            u = o - 1;
            break;
          }
        }
        let v = 0;
        for (let o = c - 1; o >= 0; o -= 1) {
          if ((r.get(d[o].key) || le)[t] < a) {
            v = o + 1;
            break;
          }
        }
        return ([he.value, $e.value] = [v, u]);
      });
      const fe = () => {
        F(() => {
          var e;
          const t = new Map(),
            a =
              null === (e = m.value) || void 0 === e
                ? void 0
                : e.getBoundingClientRect();
          return (
            $.value.forEach((e) => {
              let { key: o } = e;
              const n = T.value.get(o),
                i = (null == n ? void 0 : n.$el) || n;
              if (i) {
                const [e, n, l, r] = ((e, t) => {
                  const {
                      offsetWidth: a,
                      offsetHeight: o,
                      offsetTop: n,
                      offsetLeft: i,
                    } = e,
                    {
                      width: l,
                      height: r,
                      x: s,
                      y: d,
                    } = e.getBoundingClientRect();
                  return Math.abs(l - a) < 1
                    ? [l, r, s - t.x, d - t.y]
                    : [a, o, i, n];
                })(i, a);
                t.set(o, { width: e, height: n, left: l, top: r });
              }
            }),
            t
          );
        });
      };
      p(
        () => $.value.map((e) => e.key).join("%%"),
        () => {
          fe();
        },
        { flush: "post" }
      );
      const ge = () => {
          var e, t, a, o, n;
          const i =
              (null === (e = g.value) || void 0 === e
                ? void 0
                : e.offsetWidth) || 0,
            l =
              (null === (t = g.value) || void 0 === t
                ? void 0
                : t.offsetHeight) || 0,
            r = (null === (a = x.value) || void 0 === a ? void 0 : a.$el) || {},
            s = r.offsetWidth || 0,
            d = r.offsetHeight || 0;
          H(i), G(l), W(s), K(d);
          const c =
              ((null === (o = m.value) || void 0 === o
                ? void 0
                : o.offsetWidth) || 0) - s,
            u =
              ((null === (n = m.value) || void 0 === n
                ? void 0
                : n.offsetHeight) || 0) - d;
          I(c), O(u), fe();
        },
        me = i(() => [
          ...$.value.slice(0, he.value),
          ...$.value.slice($e.value + 1),
        ]),
        [ye, xe] = u(),
        ke = i(() => q.value.get(o.activeKey)),
        Ce = e(),
        _e = () => {
          a.cancel(Ce.value);
        };
      p([ke, P, () => o.rtl], () => {
        const e = {};
        ke.value &&
          (P.value
            ? (o.rtl
                ? (e.right = C(ke.value.right))
                : (e.left = C(ke.value.left)),
              (e.width = C(ke.value.width)))
            : ((e.top = C(ke.value.top)), (e.height = C(ke.value.height)))),
          _e(),
          (Ce.value = a(() => {
            xe(e);
          }));
      }),
        p(
          [() => o.activeKey, ke, q, P],
          () => {
            be();
          },
          { flush: "post" }
        ),
        p(
          [() => o.rtl, () => o.tabBarGutter, () => o.activeKey, () => $.value],
          () => {
            ge();
          },
          { flush: "post" }
        );
      const Se = (e) => {
        let { position: t, prefixCls: a, extra: o } = e;
        if (!o) return null;
        const n = null == o ? void 0 : o({ position: t });
        return n ? l("div", { class: `${a}-extra-content` }, [n]) : null;
      };
      return (
        t(() => {
          ve(), _e();
        }),
        () => {
          const {
              id: e,
              animated: t,
              activeKey: a,
              rtl: n,
              editable: i,
              locale: r,
              tabPosition: d,
              tabBarGutter: u,
              onTabClick: v,
            } = o,
            { class: p, style: C } = b,
            T = f.value,
            E = !!me.value.length,
            L = `${T}-nav-wrap`;
          let I, O, H, G;
          P.value
            ? n
              ? ((O = B.value > 0), (I = B.value + M.value < D.value))
              : ((I = B.value < 0), (O = -B.value + M.value < D.value))
            : ((H = R.value < 0), (G = -R.value + N.value < A.value));
          const z = {};
          "top" === d || "bottom" === d
            ? (z[n ? "marginRight" : "marginLeft"] =
                "number" == typeof u ? `${u}px` : u)
            : (z.marginTop = "number" == typeof u ? `${u}px` : u);
          const W = $.value.map((t, o) => {
            const { key: s } = t;
            return l(
              Q,
              {
                id: e,
                prefixCls: T,
                key: s,
                tab: t,
                style: 0 === o ? void 0 : z,
                closable: t.closable,
                editable: i,
                active: s === a,
                removeAriaLabel: null == r ? void 0 : r.removeAriaLabel,
                ref: k(s),
                onClick: (e) => {
                  v(s, e);
                },
                onFocus: () => {
                  be(s),
                    ue(),
                    g.value &&
                      (n || (g.value.scrollLeft = 0), (g.value.scrollTop = 0));
                },
              },
              h
            );
          });
          return l(
            "div",
            {
              role: "tablist",
              class: s(`${T}-nav`, p),
              style: C,
              onKeydown: () => {
                ue();
              },
            },
            [
              l(
                Se,
                { position: "left", prefixCls: T, extra: h.leftExtra },
                null
              ),
              l(
                _,
                { onResize: ge },
                {
                  default: () => [
                    l(
                      "div",
                      {
                        class: s(L, {
                          [`${L}-ping-left`]: I,
                          [`${L}-ping-right`]: O,
                          [`${L}-ping-top`]: H,
                          [`${L}-ping-bottom`]: G,
                        }),
                        ref: g,
                      },
                      [
                        l(
                          _,
                          { onResize: ge },
                          {
                            default: () => [
                              l(
                                "div",
                                {
                                  ref: m,
                                  class: `${T}-nav-list`,
                                  style: {
                                    transform: `translate(${B.value}px, ${R.value}px)`,
                                    transition: de.value ? "none" : void 0,
                                  },
                                },
                                [
                                  W,
                                  l(
                                    ee,
                                    {
                                      ref: x,
                                      prefixCls: T,
                                      locale: r,
                                      editable: i,
                                      style: c(
                                        c({}, 0 === W.length ? void 0 : z),
                                        { visibility: E ? "hidden" : null }
                                      ),
                                    },
                                    null
                                  ),
                                  l(
                                    "div",
                                    {
                                      class: s(`${T}-ink-bar`, {
                                        [`${T}-ink-bar-animated`]: t.inkBar,
                                      }),
                                      style: ye.value,
                                    },
                                    null
                                  ),
                                ]
                              ),
                            ],
                          }
                        ),
                      ]
                    ),
                  ],
                }
              ),
              l(
                te,
                S(
                  S({}, o),
                  {},
                  {
                    removeAriaLabel: null == r ? void 0 : r.removeAriaLabel,
                    ref: y,
                    prefixCls: T,
                    tabs: me.value,
                    class: !E && V.value,
                  }
                ),
                w(h, ["moreIcon"])
              ),
              l(
                Se,
                { position: "right", prefixCls: T, extra: h.rightExtra },
                null
              ),
              l(
                Se,
                {
                  position: "right",
                  prefixCls: T,
                  extra: h.tabBarExtraContent,
                },
                null
              ),
            ]
          );
        }
      );
    },
  }),
  se = o({
    compatConfig: { MODE: 3 },
    name: "TabPanelList",
    inheritAttrs: !1,
    props: {
      activeKey: { type: [String, Number] },
      id: { type: String },
      rtl: { type: Boolean },
      animated: { type: Object, default: void 0 },
      tabPosition: { type: String },
      destroyInactiveTabPane: { type: Boolean },
    },
    setup(e) {
      const { tabs: t, prefixCls: a } = oe();
      return () => {
        const {
            id: o,
            activeKey: n,
            animated: i,
            tabPosition: r,
            rtl: s,
            destroyInactiveTabPane: d,
          } = e,
          c = i.tabPane,
          u = a.value,
          v = t.value.findIndex((e) => e.key === n);
        return l("div", { class: `${u}-content-holder` }, [
          l(
            "div",
            {
              class: [
                `${u}-content`,
                `${u}-content-${r}`,
                { [`${u}-content-animated`]: c },
              ],
              style:
                v && c
                  ? { [s ? "marginRight" : "marginLeft"]: `-${v}00%` }
                  : null,
            },
            [
              t.value.map((e) =>
                P(e.node, {
                  key: e.key,
                  prefixCls: u,
                  tabKey: e.key,
                  id: o,
                  animated: c,
                  active: e.key === n,
                  destroyInactiveTabPane: d,
                })
              ),
            ]
          ),
        ]);
      };
    },
  });
var de = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z",
        },
      },
    ],
  },
  name: "plus",
  theme: "outlined",
};
function ce(e) {
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
        ue(e, t, a[t]);
      });
  }
  return e;
}
function ue(e, t, a) {
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
  var a = ce({}, e, t.attrs);
  return l(B, ce({}, a, { icon: de }), null);
};
(ve.displayName = "PlusOutlined"), (ve.inheritAttrs = !1);
const pe = (e) => {
    const { componentCls: t, motionDurationSlow: a } = e;
    return [
      {
        [t]: {
          [`${t}-switch`]: {
            "&-appear, &-enter": {
              transition: "none",
              "&-start": { opacity: 0 },
              "&-active": { opacity: 1, transition: `opacity ${a}` },
            },
            "&-leave": {
              position: "absolute",
              transition: "none",
              inset: 0,
              "&-start": { opacity: 1 },
              "&-active": { opacity: 0, transition: `opacity ${a}` },
            },
          },
        },
      },
      [E(e, "slide-up"), E(e, "slide-down")],
    ];
  },
  be = (e) => {
    const {
      componentCls: t,
      tabsCardHorizontalPadding: a,
      tabsCardHeadBackground: o,
      tabsCardGutter: n,
      colorSplit: i,
    } = e;
    return {
      [`${t}-card`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            margin: 0,
            padding: a,
            background: o,
            border: `${e.lineWidth}px ${e.lineType} ${i}`,
            transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
          [`${t}-tab-active`]: {
            color: e.colorPrimary,
            background: e.colorBgContainer,
          },
          [`${t}-ink-bar`]: { visibility: "hidden" },
        },
        [`&${t}-top, &${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginLeft: { _skip_check_: !0, value: `${n}px` },
            },
          },
        },
        [`&${t}-top`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
            },
            [`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer },
          },
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,
            },
            [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
          },
        },
        [`&${t}-left, &${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: { marginTop: `${n}px` },
          },
        },
        [`&${t}-left`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${e.borderRadiusLG}px 0 0 ${e.borderRadiusLG}px`,
              },
            },
            [`${t}-tab-active`]: {
              borderRightColor: { _skip_check_: !0, value: e.colorBgContainer },
            },
          },
        },
        [`&${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px 0`,
              },
            },
            [`${t}-tab-active`]: {
              borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer },
            },
          },
        },
      },
    };
  },
  he = (e) => {
    const {
      componentCls: t,
      tabsHoverColor: a,
      dropdownEdgeChildVerticalPadding: o,
    } = e;
    return {
      [`${t}-dropdown`]: c(c({}, D(e)), {
        position: "absolute",
        top: -9999,
        left: { _skip_check_: !0, value: -9999 },
        zIndex: e.zIndexPopup,
        display: "block",
        "&-hidden": { display: "none" },
        [`${t}-dropdown-menu`]: {
          maxHeight: e.tabsDropdownHeight,
          margin: 0,
          padding: `${o}px 0`,
          overflowX: "hidden",
          overflowY: "auto",
          textAlign: { _skip_check_: !0, value: "left" },
          listStyleType: "none",
          backgroundColor: e.colorBgContainer,
          backgroundClip: "padding-box",
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary,
          "&-item": c(c({}, I), {
            display: "flex",
            alignItems: "center",
            minWidth: e.tabsDropdownWidth,
            margin: 0,
            padding: `${e.paddingXXS}px ${e.paddingSM}px`,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            transition: `all ${e.motionDurationSlow}`,
            "> span": { flex: 1, whiteSpace: "nowrap" },
            "&-remove": {
              flex: "none",
              marginLeft: { _skip_check_: !0, value: e.marginSM },
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              background: "transparent",
              border: 0,
              cursor: "pointer",
              "&:hover": { color: a },
            },
            "&:hover": { background: e.controlItemBgHover },
            "&-disabled": {
              "&, &:hover": {
                color: e.colorTextDisabled,
                background: "transparent",
                cursor: "not-allowed",
              },
            },
          }),
        },
      }),
    };
  },
  $e = (e) => {
    const { componentCls: t, margin: a, colorSplit: o } = e;
    return {
      [`${t}-top, ${t}-bottom`]: {
        flexDirection: "column",
        [`> ${t}-nav, > div > ${t}-nav`]: {
          margin: `0 0 ${a}px 0`,
          "&::before": {
            position: "absolute",
            right: { _skip_check_: !0, value: 0 },
            left: { _skip_check_: !0, value: 0 },
            borderBottom: `${e.lineWidth}px ${e.lineType} ${o}`,
            content: "''",
          },
          [`${t}-ink-bar`]: {
            height: e.lineWidthBold,
            "&-animated": {
              transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},\n            right ${e.motionDurationSlow}`,
            },
          },
          [`${t}-nav-wrap`]: {
            "&::before, &::after": {
              top: 0,
              bottom: 0,
              width: e.controlHeight,
            },
            "&::before": {
              left: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowLeft,
            },
            "&::after": {
              right: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowRight,
            },
            [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 },
          },
        },
      },
      [`${t}-top`]: {
        [`> ${t}-nav,\n        > div > ${t}-nav`]: {
          "&::before": { bottom: 0 },
          [`${t}-ink-bar`]: { bottom: 0 },
        },
      },
      [`${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          marginTop: `${a}px`,
          marginBottom: 0,
          "&::before": { top: 0 },
          [`${t}-ink-bar`]: { top: 0 },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 },
      },
      [`${t}-left, ${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          flexDirection: "column",
          minWidth: 1.25 * e.controlHeight,
          [`${t}-tab`]: {
            padding: `${e.paddingXS}px ${e.paddingLG}px`,
            textAlign: "center",
          },
          [`${t}-tab + ${t}-tab`]: { margin: `${e.margin}px 0 0 0` },
          [`${t}-nav-wrap`]: {
            flexDirection: "column",
            "&::before, &::after": {
              right: { _skip_check_: !0, value: 0 },
              left: { _skip_check_: !0, value: 0 },
              height: e.controlHeight,
            },
            "&::before": { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
            "&::after": { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
            [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
          },
          [`${t}-ink-bar`]: {
            width: e.lineWidthBold,
            "&-animated": {
              transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`,
            },
          },
          [`${t}-nav-list, ${t}-nav-operations`]: {
            flex: "1 0 auto",
            flexDirection: "column",
          },
        },
      },
      [`${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          marginLeft: { _skip_check_: !0, value: `-${e.lineWidth}px` },
          borderLeft: {
            _skip_check_: !0,
            value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingLeft: { _skip_check_: !0, value: e.paddingLG },
          },
        },
      },
      [`${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          order: 0,
          marginRight: { _skip_check_: !0, value: -e.lineWidth },
          borderRight: {
            _skip_check_: !0,
            value: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingRight: { _skip_check_: !0, value: e.paddingLG },
          },
        },
      },
    };
  },
  fe = (e) => {
    const { componentCls: t, padding: a } = e;
    return {
      [t]: {
        "&-small": {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: {
              padding: `${e.paddingXS}px 0`,
              fontSize: e.fontSize,
            },
          },
        },
        "&-large": {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: `${a}px 0`, fontSize: e.fontSizeLG },
          },
        },
      },
      [`${t}-card`]: {
        [`&${t}-small`]: {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: `${1.5 * e.paddingXXS}px ${a}px` },
          },
          [`&${t}-bottom`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `0 0 ${e.borderRadius}px ${e.borderRadius}px`,
            },
          },
          [`&${t}-top`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `${e.borderRadius}px ${e.borderRadius}px 0 0`,
            },
          },
          [`&${t}-right`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${e.borderRadius}px ${e.borderRadius}px 0`,
              },
            },
          },
          [`&${t}-left`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${e.borderRadius}px 0 0 ${e.borderRadius}px`,
              },
            },
          },
        },
        [`&${t}-large`]: {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: {
              padding: `${e.paddingXS}px ${a}px ${1.5 * e.paddingXXS}px`,
            },
          },
        },
      },
    };
  },
  ge = (e) => {
    const {
        componentCls: t,
        tabsActiveColor: a,
        tabsHoverColor: o,
        iconCls: n,
        tabsHorizontalGutter: i,
      } = e,
      l = `${t}-tab`;
    return {
      [l]: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        padding: `${e.paddingSM}px 0`,
        fontSize: `${e.fontSize}px`,
        background: "transparent",
        border: 0,
        outline: "none",
        cursor: "pointer",
        "&-btn, &-remove": c(
          { "&:focus:not(:focus-visible), &:active": { color: a } },
          A(e)
        ),
        "&-btn": { outline: "none", transition: "all 0.3s" },
        "&-remove": {
          flex: "none",
          marginRight: { _skip_check_: !0, value: -e.marginXXS },
          marginLeft: { _skip_check_: !0, value: e.marginXS },
          color: e.colorTextDescription,
          fontSize: e.fontSizeSM,
          background: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "&:hover": { color: e.colorTextHeading },
        },
        "&:hover": { color: o },
        [`&${l}-active ${l}-btn`]: {
          color: e.colorPrimary,
          textShadow: e.tabsActiveTextShadow,
        },
        [`&${l}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed",
        },
        [`&${l}-disabled ${l}-btn, &${l}-disabled ${t}-remove`]: {
          "&:focus, &:active": { color: e.colorTextDisabled },
        },
        [`& ${l}-remove ${n}`]: { margin: 0 },
        [n]: { marginRight: { _skip_check_: !0, value: e.marginSM } },
      },
      [`${l} + ${l}`]: { margin: { _skip_check_: !0, value: `0 0 0 ${i}px` } },
    };
  },
  me = (e) => {
    const {
        componentCls: t,
        tabsHorizontalGutter: a,
        iconCls: o,
        tabsCardGutter: n,
      } = e,
      i = `${t}-rtl`;
    return {
      [i]: {
        direction: "rtl",
        [`${t}-nav`]: {
          [`${t}-tab`]: {
            margin: { _skip_check_: !0, value: `0 0 0 ${a}px` },
            [`${t}-tab:last-of-type`]: {
              marginLeft: { _skip_check_: !0, value: 0 },
            },
            [o]: {
              marginRight: { _skip_check_: !0, value: 0 },
              marginLeft: { _skip_check_: !0, value: `${e.marginSM}px` },
            },
            [`${t}-tab-remove`]: {
              marginRight: { _skip_check_: !0, value: `${e.marginXS}px` },
              marginLeft: { _skip_check_: !0, value: `-${e.marginXXS}px` },
              [o]: { margin: 0 },
            },
          },
        },
        [`&${t}-left`]: {
          [`> ${t}-nav`]: { order: 1 },
          [`> ${t}-content-holder`]: { order: 0 },
        },
        [`&${t}-right`]: {
          [`> ${t}-nav`]: { order: 0 },
          [`> ${t}-content-holder`]: { order: 1 },
        },
        [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginRight: { _skip_check_: !0, value: `${n}px` },
              marginLeft: { _skip_check_: !0, value: 0 },
            },
          },
        },
      },
      [`${t}-dropdown-rtl`]: { direction: "rtl" },
      [`${t}-menu-item`]: {
        [`${t}-dropdown-rtl`]: {
          textAlign: { _skip_check_: !0, value: "right" },
        },
      },
    };
  },
  ye = (e) => {
    const {
      componentCls: t,
      tabsCardHorizontalPadding: a,
      tabsCardHeight: o,
      tabsCardGutter: n,
      tabsHoverColor: i,
      tabsActiveColor: l,
      colorSplit: r,
    } = e;
    return {
      [t]: c(
        c(
          c(c({}, D(e)), {
            display: "flex",
            [`> ${t}-nav, > div > ${t}-nav`]: {
              position: "relative",
              display: "flex",
              flex: "none",
              alignItems: "center",
              [`${t}-nav-wrap`]: {
                position: "relative",
                display: "flex",
                flex: "auto",
                alignSelf: "stretch",
                overflow: "hidden",
                whiteSpace: "nowrap",
                transform: "translate(0)",
                "&::before, &::after": {
                  position: "absolute",
                  zIndex: 1,
                  opacity: 0,
                  transition: `opacity ${e.motionDurationSlow}`,
                  content: "''",
                  pointerEvents: "none",
                },
              },
              [`${t}-nav-list`]: {
                position: "relative",
                display: "flex",
                transition: `opacity ${e.motionDurationSlow}`,
              },
              [`${t}-nav-operations`]: {
                display: "flex",
                alignSelf: "stretch",
              },
              [`${t}-nav-operations-hidden`]: {
                position: "absolute",
                visibility: "hidden",
                pointerEvents: "none",
              },
              [`${t}-nav-more`]: {
                position: "relative",
                padding: a,
                background: "transparent",
                border: 0,
                "&::after": {
                  position: "absolute",
                  right: { _skip_check_: !0, value: 0 },
                  bottom: 0,
                  left: { _skip_check_: !0, value: 0 },
                  height: e.controlHeightLG / 8,
                  transform: "translateY(100%)",
                  content: "''",
                },
              },
              [`${t}-nav-add`]: c(
                {
                  minWidth: `${o}px`,
                  marginLeft: { _skip_check_: !0, value: `${n}px` },
                  padding: `0 ${e.paddingXS}px`,
                  background: "transparent",
                  border: `${e.lineWidth}px ${e.lineType} ${r}`,
                  borderRadius: `${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,
                  outline: "none",
                  cursor: "pointer",
                  color: e.colorText,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                  "&:hover": { color: i },
                  "&:active, &:focus:not(:focus-visible)": { color: l },
                },
                A(e)
              ),
            },
            [`${t}-extra-content`]: { flex: "none" },
            [`${t}-ink-bar`]: {
              position: "absolute",
              background: e.colorPrimary,
              pointerEvents: "none",
            },
          }),
          ge(e)
        ),
        {
          [`${t}-content`]: {
            position: "relative",
            display: "flex",
            width: "100%",
            "&-animated": { transition: "margin 0.3s" },
          },
          [`${t}-content-holder`]: { flex: "auto", minWidth: 0, minHeight: 0 },
          [`${t}-tabpane`]: { outline: "none", flex: "none", width: "100%" },
        }
      ),
      [`${t}-centered`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-nav-wrap`]: {
            [`&:not([class*='${t}-nav-wrap-ping'])`]: {
              justifyContent: "center",
            },
          },
        },
      },
    };
  },
  xe = R(
    "Tabs",
    (e) => {
      const t = e.controlHeightLG,
        a = L(e, {
          tabsHoverColor: e.colorPrimaryHover,
          tabsActiveColor: e.colorPrimaryActive,
          tabsCardHorizontalPadding: `${
            (t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth
          }px ${e.padding}px`,
          tabsCardHeight: t,
          tabsCardGutter: e.marginXXS / 2,
          tabsHorizontalGutter: 32,
          tabsCardHeadBackground: e.colorFillAlter,
          dropdownEdgeChildVerticalPadding: e.paddingXXS,
          tabsActiveTextShadow: "0 0 0.25px currentcolor",
          tabsDropdownHeight: 200,
          tabsDropdownWidth: 120,
        });
      return [fe(a), me(a), $e(a), he(a), be(a), ye(a), pe(a)];
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 })
  );
let ke = 0;
const Ce = () => ({
  prefixCls: { type: String },
  id: { type: String },
  popupClassName: String,
  getPopupContainer: y(),
  activeKey: { type: [String, Number] },
  defaultActiveKey: { type: [String, Number] },
  direction: N(),
  animated: G([Boolean, Object]),
  renderTabBar: y(),
  tabBarGutter: { type: Number },
  tabBarStyle: T(),
  tabPosition: N(),
  destroyInactiveTabPane: z(),
  hideAdd: Boolean,
  type: N(),
  size: N(),
  centered: Boolean,
  onEdit: y(),
  onChange: y(),
  onTabClick: y(),
  onTabScroll: y(),
  "onUpdate:activeKey": y(),
  locale: T(),
  onPrevClick: y(),
  onNextClick: y(),
  tabBarExtraContent: m.any,
});
const _e = o({
    compatConfig: { MODE: 3 },
    name: "InternalTabs",
    inheritAttrs: !1,
    props: c(
      c(
        {},
        O(Ce(), { tabPosition: "top", animated: { inkBar: !0, tabPane: !1 } })
      ),
      { tabs: K() }
    ),
    slots: Object,
    setup(e, t) {
      let { attrs: a, slots: o } = t;
      X(
        !(void 0 !== e.onPrevClick || void 0 !== e.onNextClick),
        "Tabs",
        "`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."
      ),
        X(
          !(void 0 !== e.tabBarExtraContent),
          "Tabs",
          "`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."
        ),
        X(
          !(void 0 !== o.tabBarExtraContent),
          "Tabs",
          "`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead."
        );
      const {
          prefixCls: n,
          direction: r,
          size: p,
          rootPrefixCls: b,
          getPopupContainer: h,
        } = F("tabs", e),
        [$, f] = xe(n),
        g = i(() => "rtl" === r.value),
        m = i(() => {
          const { animated: t, tabPosition: a } = e;
          return !1 === t || ["left", "right"].includes(a)
            ? { inkBar: !1, tabPane: !1 }
            : !0 === t
            ? { inkBar: !0, tabPane: !0 }
            : c({ inkBar: !0, tabPane: !1 }, "object" == typeof t ? t : {});
        }),
        [y, k] = u(!1);
      v(() => {
        k(U());
      });
      const [C, _] = q(
          () => {
            var t;
            return null === (t = e.tabs[0]) || void 0 === t ? void 0 : t.key;
          },
          { value: i(() => e.activeKey), defaultValue: e.defaultActiveKey }
        ),
        [T, P] = u(() => e.tabs.findIndex((e) => e.key === C.value));
      d(() => {
        var t;
        let a = e.tabs.findIndex((e) => e.key === C.value);
        -1 === a &&
          ((a = Math.max(0, Math.min(T.value, e.tabs.length - 1))),
          _(null === (t = e.tabs[a]) || void 0 === t ? void 0 : t.key)),
          P(a);
      });
      const [B, E] = q(null, { value: i(() => e.id) }),
        R = i(() =>
          y.value && !["left", "right"].includes(e.tabPosition)
            ? "top"
            : e.tabPosition
        );
      v(() => {
        e.id || (E(`rc-tabs-${ke}`), (ke += 1));
      });
      const L = (t, a) => {
        var o, n;
        null === (o = e.onTabClick) || void 0 === o || o.call(e, t, a);
        const i = t !== C.value;
        _(t), i && (null === (n = e.onChange) || void 0 === n || n.call(e, t));
      };
      return (
        ((e) => {
          x(ae, e);
        })({ tabs: i(() => e.tabs), prefixCls: n }),
        () => {
          const {
              id: t,
              type: i,
              tabBarGutter: r,
              tabBarStyle: d,
              locale: u,
              destroyInactiveTabPane: v,
              renderTabBar: x = o.renderTabBar,
              onTabScroll: k,
              hideAdd: _,
              centered: T,
            } = e,
            P = {
              id: B.value,
              activeKey: C.value,
              animated: m.value,
              tabPosition: R.value,
              rtl: g.value,
              mobile: y.value,
            };
          let E, D;
          "editable-card" === i &&
            (E = {
              onEdit: (t, a) => {
                let { key: o, event: n } = a;
                var i;
                null === (i = e.onEdit) ||
                  void 0 === i ||
                  i.call(e, "add" === t ? n : o, t);
              },
              removeIcon: () => l(V, null, null),
              addIcon: o.addIcon ? o.addIcon : () => l(ve, null, null),
              showAdd: !0 !== _,
            });
          const I = c(c({}, P), {
            moreTransitionName: `${b.value}-slide-up`,
            editable: E,
            locale: u,
            tabBarGutter: r,
            onTabClick: L,
            onTabScroll: k,
            style: d,
            getPopupContainer: h.value,
            popupClassName: s(e.popupClassName, f.value),
          });
          D = x
            ? x(c(c({}, I), { DefaultTabBar: re }))
            : l(
                re,
                I,
                w(o, [
                  "moreIcon",
                  "leftExtra",
                  "rightExtra",
                  "tabBarExtraContent",
                ])
              );
          const A = n.value;
          return $(
            l(
              "div",
              S(
                S({}, a),
                {},
                {
                  id: t,
                  class: s(
                    A,
                    `${A}-${R.value}`,
                    {
                      [f.value]: !0,
                      [`${A}-${p.value}`]: p.value,
                      [`${A}-card`]: ["card", "editable-card"].includes(i),
                      [`${A}-editable-card`]: "editable-card" === i,
                      [`${A}-centered`]: T,
                      [`${A}-mobile`]: y.value,
                      [`${A}-editable`]: "editable-card" === i,
                      [`${A}-rtl`]: g.value,
                    },
                    a.class
                  ),
                }
              ),
              [
                D,
                l(
                  se,
                  S(
                    S({ destroyInactiveTabPane: v }, P),
                    {},
                    { animated: m.value }
                  ),
                  null
                ),
              ]
            )
          );
        }
      );
    },
  }),
  Se = o({
    compatConfig: { MODE: 3 },
    name: "ATabs",
    inheritAttrs: !1,
    props: O(Ce(), {
      tabPosition: "top",
      animated: { inkBar: !0, tabPane: !1 },
    }),
    slots: Object,
    setup(e, t) {
      let { attrs: a, slots: o, emit: n } = t;
      const i = (e) => {
        n("update:activeKey", e), n("change", e);
      };
      return () => {
        var t;
        const n = M(
          null === (t = o.default) || void 0 === t ? void 0 : t.call(o)
        )
          .map((e) => {
            if (W(e)) {
              const t = c({}, e.props || {});
              for (const [e, c] of Object.entries(t))
                delete t[e], (t[j(e)] = c);
              const a = e.children || {},
                o = void 0 !== e.key ? e.key : void 0,
                {
                  tab: n = a.tab,
                  disabled: i,
                  forceRender: l,
                  closable: r,
                  animated: s,
                  active: d,
                  destroyInactiveTabPane: u,
                } = t;
              return c(c({ key: o }, t), {
                node: e,
                closeIcon: a.closeIcon,
                tab: n,
                disabled: "" === i || i,
                forceRender: "" === l || l,
                closable: "" === r || r,
                animated: "" === s || s,
                active: "" === d || d,
                destroyInactiveTabPane: "" === u || u,
              });
            }
            return null;
          })
          .filter((e) => e);
        return l(
          _e,
          S(
            S(S({}, H(e, ["onUpdate:activeKey"])), a),
            {},
            { onChange: i, tabs: n }
          ),
          o
        );
      };
    },
  }),
  we = o({
    compatConfig: { MODE: 3 },
    name: "ATabPane",
    inheritAttrs: !1,
    __ANT_TAB_PANE: !0,
    props: {
      tab: m.any,
      disabled: { type: Boolean },
      forceRender: { type: Boolean },
      closable: { type: Boolean },
      animated: { type: Boolean },
      active: { type: Boolean },
      destroyInactiveTabPane: { type: Boolean },
      prefixCls: { type: String },
      tabKey: { type: [String, Number] },
      id: { type: String },
    },
    slots: Object,
    setup(e, t) {
      let { attrs: a, slots: o } = t;
      const r = n(e.forceRender);
      p(
        [() => e.active, () => e.destroyInactiveTabPane],
        () => {
          e.active
            ? (r.value = !0)
            : e.destroyInactiveTabPane && (r.value = !1);
        },
        { immediate: !0 }
      );
      const s = i(() =>
        e.active
          ? {}
          : e.animated
          ? { visibility: "hidden", height: 0, overflowY: "hidden" }
          : { display: "none" }
      );
      return () => {
        var t;
        const { prefixCls: n, forceRender: i, id: d, active: c, tabKey: u } = e;
        return l(
          "div",
          {
            id: d && `${d}-panel-${u}`,
            role: "tabpanel",
            tabindex: c ? 0 : -1,
            "aria-labelledby": d && `${d}-tab-${u}`,
            "aria-hidden": !c,
            style: [s.value, a.style],
            class: [`${n}-tabpane`, c && `${n}-tabpane-active`, a.class],
          },
          [
            (c || r.value || i) &&
              (null === (t = o.default) || void 0 === t ? void 0 : t.call(o)),
          ]
        );
      };
    },
  });
(Se.TabPane = we),
  (Se.install = function (e) {
    return e.component(Se.name, Se), e.component(we.name, we), e;
  });
export { Se as T, we as _ };

import {
  as as t,
  aw as e,
  bE as a,
  bw as o,
  h$ as n,
  i0 as s,
  bk as l,
  au as i,
  bo as r,
  ax as d,
  bn as p,
  i1 as c,
  cp as u,
  bZ as f,
  c as y,
  av as g,
  cV as m,
  a as v,
  bp as h,
  bm as w,
  aO as x,
  aC as b,
  aA as _,
  aB as $,
  bl as B,
  aD as S,
  r as T,
  bY as C,
  co as k,
  n as E,
  i2 as L,
  b2 as A,
  at as P,
  aL as I,
  e8 as H,
  ea as M,
  df as O,
} from "./index-DPRREYlk.js";
import { g as R } from "./tsxHelper-DjrCDYtL.js";
import { _ as j, a as z } from "./BasicTitle-CY4FQusD.js";
import { t as N, S as W } from "./Scrollbar-CV0fAAKu.js";
import { u as F } from "./useTimeout-BMbf6gdC.js";
import { S as q } from "./index-B0yuFjoJ.js";
function D(n, s, l = "in-out") {
  return t({
    name: n,
    props: { mode: { type: String, default: l } },
    setup:
      (t, { attrs: l, slots: i }) =>
      () =>
        e(
          o("Transition"),
          a({ name: n, mode: t.mode }, l, {
            onBeforeEnter: s.beforeEnter,
            onEnter: s.enter,
            onLeave: s.leave,
            onAfterLeave: s.afterLeave,
            onLeaveCancelled: s.afterLeave,
          }),
          { default: () => R(i) }
        ),
  });
}
function U(t = "", e = !1) {
  const a = e ? "width" : "height",
    o = `offset${((n = a), n.charAt(0).toUpperCase() + n.slice(1))}`;
  var n;
  return {
    beforeEnter(t) {
      (t._parent = t.parentNode),
        (t._initialStyle = {
          transition: t.style.transition,
          overflow: t.style.overflow,
          [a]: t.style[a],
        });
    },
    enter(e) {
      const a = e._initialStyle;
      e.style.setProperty("transition", "none", "important"),
        (e.style.overflow = "hidden"),
        e.offsetHeight,
        (e.style.transition = a.transition),
        t && e._parent && e._parent.classList.add(t),
        requestAnimationFrame(() => {});
    },
    afterEnter: l,
    enterCancelled: l,
    leave(t) {
      (t._initialStyle = {
        transition: "",
        overflow: t.style.overflow,
        [a]: t.style[a],
      }),
        (t.style.overflow = "hidden"),
        (t.style[a] = `${t[o]}px`),
        t.offsetHeight,
        requestAnimationFrame(() => (t.style[a] = "0"));
    },
    afterLeave: s,
    leaveCancelled: s,
  };
  function s(e) {
    t && e._parent && e._parent.classList.remove(t), l(e);
  }
  function l(t) {
    const e = t._initialStyle[a];
    (t.style.overflow = t._initialStyle.overflow),
      null != e && (t.style[a] = e),
      Reflect.deleteProperty(t, "_initialStyle");
  }
}
const V = l(
  t({
    name: "CollapseTransition",
    setup: () => ({
      on: {
        beforeEnter(t) {
          n(t, "collapse-transition"),
            t.dataset || (t.dataset = {}),
            (t.dataset.oldPaddingTop = t.style.paddingTop),
            (t.dataset.oldPaddingBottom = t.style.paddingBottom),
            (t.style.height = "0"),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0);
        },
        enter(t) {
          (t.dataset.oldOverflow = t.style.overflow),
            0 !== t.scrollHeight
              ? ((t.style.height = `${t.scrollHeight}px`),
                (t.style.paddingTop = t.dataset.oldPaddingTop),
                (t.style.paddingBottom = t.dataset.oldPaddingBottom))
              : ((t.style.height = ""),
                (t.style.paddingTop = t.dataset.oldPaddingTop),
                (t.style.paddingBottom = t.dataset.oldPaddingBottom)),
            (t.style.overflow = "hidden");
        },
        afterEnter(t) {
          s(t, "collapse-transition"),
            (t.style.height = ""),
            (t.style.overflow = t.dataset.oldOverflow);
        },
        beforeLeave(t) {
          t.dataset || (t.dataset = {}),
            (t.dataset.oldPaddingTop = t.style.paddingTop),
            (t.dataset.oldPaddingBottom = t.style.paddingBottom),
            (t.dataset.oldOverflow = t.style.overflow),
            (t.style.height = `${t.scrollHeight}px`),
            (t.style.overflow = "hidden");
        },
        leave(t) {
          0 !== t.scrollHeight &&
            (n(t, "collapse-transition"),
            (t.style.height = 0),
            (t.style.paddingTop = 0),
            (t.style.paddingBottom = 0));
        },
        afterLeave(t) {
          s(t, "collapse-transition"),
            (t.style.height = ""),
            (t.style.overflow = t.dataset.oldOverflow),
            (t.style.paddingTop = t.dataset.oldPaddingTop),
            (t.style.paddingBottom = t.dataset.oldPaddingBottom);
        },
      },
    }),
  }),
  [
    [
      "render",
      function (t, e, o, n, s, l) {
        return (
          i(),
          r(
            u,
            a({ mode: "out-in" }, c(t.on)),
            { default: d(() => [p(t.$slots, "default")]), _: 3 },
            16
          )
        );
      },
    ],
  ]
);
D("expand-x-transition", U("", !0)), D("expand-transition", U(""));
const Y = t({
    __name: "BasicArrow",
    props: {
      expand: { type: Boolean },
      up: { type: Boolean },
      down: { type: Boolean },
      inset: { type: Boolean },
    },
    setup(t) {
      const a = t,
        { prefixCls: o } = f("basic-arrow"),
        n = y(() => {
          const { expand: t, up: e, down: n, inset: s } = a;
          return [o, { [`${o}--active`]: t, up: e, inset: s, down: n }];
        });
      return (t, a) => (
        i(),
        g(
          "span",
          { class: w(v(n)) },
          [
            e(
              v(h),
              { icon: "i-ion:chevron-forward", style: m(t.$attrs.iconStyle) },
              null,
              8,
              ["style"]
            ),
          ],
          2
        )
      );
    },
  }),
  Z = l(Y, [["__scopeId", "data-v-3505c88e"]]),
  G = x(Z),
  J = x(j),
  K = x(z),
  Q = {
    prefixCls: { type: String },
    helpMessage: { type: [Array, String], default: "" },
    title: { type: String },
    show: { type: Boolean },
    canExpan: { type: Boolean },
  };
const X = l(
    t({
      components: { BasicArrow: G, BasicTitle: J },
      inheritAttrs: !1,
      props: Q,
      emits: ["expand"],
    }),
    [
      [
        "render",
        function (t, a, o, n, s, l) {
          const c = j,
            u = Z;
          return (
            i(),
            g(
              "div",
              {
                class: w([`${t.prefixCls}__header px-2 py-5`, t.$attrs.class]),
              },
              [
                e(
                  c,
                  { "help-message": t.helpMessage, normal: "" },
                  {
                    default: d(() => [
                      t.title
                        ? (i(), g(b, { key: 0 }, [_($(t.title), 1)], 64))
                        : p(t.$slots, "title", { key: 1 }),
                    ]),
                    _: 3,
                  },
                  8,
                  ["help-message"]
                ),
                B(
                  "div",
                  { class: w(`${t.prefixCls}__action`) },
                  [
                    p(t.$slots, "action"),
                    t.canExpan
                      ? (i(),
                        r(
                          u,
                          {
                            key: 0,
                            up: "",
                            expand: t.show,
                            onClick: a[0] || (a[0] = (e) => t.$emit("expand")),
                          },
                          null,
                          8,
                          ["expand"]
                        ))
                      : S("", !0),
                  ],
                  2
                ),
              ],
              2
            )
          );
        },
      ],
    ]
  ),
  tt = { class: "p-2" },
  et = t({
    __name: "CollapseContainer",
    props: {
      title: { type: String, default: "" },
      loading: { type: Boolean },
      canExpan: { type: Boolean, default: !0 },
      helpMessage: { type: [Array, String], default: "" },
      triggerWindowResize: { type: Boolean },
      lazyTime: { type: Number, default: 0 },
    },
    setup(t) {
      const o = t,
        n = T(!0),
        { prefixCls: s } = f("collapse-container");
      function l() {
        (n.value = !n.value), o.triggerWindowResize && F(N, 200);
      }
      return (o, c) => {
        const u = q;
        return (
          i(),
          g(
            "div",
            { class: w(v(s)) },
            [
              e(
                X,
                a(o.$props, { "prefix-cls": v(s), show: v(n), onExpand: l }),
                {
                  title: d(() => [p(o.$slots, "title")]),
                  action: d(() => [p(o.$slots, "action")]),
                  _: 3,
                },
                16,
                ["prefix-cls", "show"]
              ),
              B("div", tt, [
                e(
                  v(V),
                  { enable: t.canExpan },
                  {
                    default: d(() => [
                      t.loading
                        ? (i(),
                          r(u, { key: 0, active: t.loading }, null, 8, [
                            "active",
                          ]))
                        : C(
                            (i(),
                            g(
                              "div",
                              { key: 1, class: w(`${v(s)}__body`) },
                              [p(o.$slots, "default")],
                              2
                            )),
                            [[k, v(n)]]
                          ),
                    ]),
                    _: 3,
                  },
                  8,
                  ["enable"]
                ),
              ]),
              o.$slots.footer
                ? (i(),
                  g(
                    "div",
                    { key: 0, class: w(`${v(s)}__footer`) },
                    [p(o.$slots, "footer")],
                    2
                  ))
                : S("", !0),
            ],
            2
          )
        );
      };
    },
  });
const at = l(
  t({
    name: "ScrollContainer",
    components: { Scrollbar: W },
    setup() {
      const t = T(null);
      return {
        scrollbarRef: t,
        scrollTo: function (e, a = 500) {
          const o = v(t);
          o &&
            E(() => {
              const t = v(o.wrap);
              if (!t) return;
              const { start: n } = L({ el: t, to: e, duration: a });
              n();
            });
        },
        scrollBottom: function () {
          const e = v(t);
          e &&
            E(() => {
              const t = v(e.wrap);
              if (!t) return;
              const a = t.scrollHeight,
                { start: o } = L({ el: t, to: a });
              o();
            });
        },
        getScrollWrap: function () {
          const e = v(t);
          return e ? e.wrap : null;
        },
      };
    },
  }),
  [
    [
      "render",
      function (t, e, n, s, l, c) {
        const u = o("Scrollbar");
        return (
          i(),
          r(
            u,
            a({ ref: "scrollbarRef", class: "scroll-container" }, t.$attrs),
            { default: d(() => [p(t.$slots, "default")]), _: 3 },
            16
          )
        );
      },
    ],
  ]
);
const ot = {
    timeout: { type: Number },
    viewport: {
      type: "undefined" != typeof window ? window.HTMLElement : Object,
      default: () => null,
    },
    threshold: { type: String, default: "0px" },
    direction: {
      type: String,
      default: "vertical",
      validator: (t) => ["vertical", "horizontal"].includes(t),
    },
    tag: { type: String, default: "div" },
    maxWaitingTime: { type: Number, default: 80 },
    transitionName: { type: String, default: "lazy-container" },
  },
  nt = t({
    name: "LazyContainer",
    inheritAttrs: !1,
    props: ot,
    emits: ["init"],
    setup(t, { emit: e }) {
      const a = T(),
        o = P({ isInit: !1, loading: !1, intersectionObserverInstance: null });
      function n() {
        (o.loading = !0),
          F(() => {
            o.isInit || ((o.isInit = !0), e("init"));
          }, t.maxWaitingTime || 80);
      }
      return (
        I(() => {
          !(function () {
            const { timeout: e } = t;
            e &&
              F(() => {
                n();
              }, e);
          })(),
            (function () {
              const { timeout: e, direction: o, threshold: s } = t;
              if (e) return;
              let l = "0px";
              switch (o) {
                case "vertical":
                  l = `${s} 0px`;
                  break;
                case "horizontal":
                  l = `0px ${s}`;
              }
              try {
                const { stop: e, observer: o } = (function ({
                  target: t,
                  root: e,
                  onIntersect: a,
                  rootMargin: o = "0px",
                  threshold: n = 0.1,
                }) {
                  let s = () => {};
                  const l = T(null),
                    i = A(() => {
                      s(),
                        (l.value = new IntersectionObserver(a, {
                          root: e ? e.value : null,
                          rootMargin: o,
                          threshold: n,
                        }));
                      const i = t.value;
                      i && l.value.observe(i),
                        (s = () => {
                          l.value &&
                            (l.value.disconnect(),
                            t.value && l.value.unobserve(t.value));
                        });
                    });
                  return {
                    observer: l,
                    stop: () => {
                      s(), i();
                    },
                  };
                })({
                  rootMargin: l,
                  target: H(a.value, "$el"),
                  onIntersect: (t) => {
                    (t[0].isIntersecting || t[0].intersectionRatio) &&
                      (n(), o && e());
                  },
                  root: H(t, "viewport"),
                });
              } catch (i) {
                n();
              }
            })();
        }),
        { elRef: a, ...M(o) }
      );
    },
  }),
  st = { key: "component" },
  lt = { key: "skeleton" };
const it = l(nt, [
    [
      "render",
      function (t, e, o, n, s, l) {
        const c = q;
        return (
          i(),
          r(
            O,
            a(t.$attrs, {
              ref: "elRef",
              class: "h-full w-full",
              name: t.transitionName,
              tag: t.tag,
              mode: "out-in",
            }),
            {
              default: d(() => [
                t.isInit
                  ? (i(),
                    g("div", st, [
                      p(t.$slots, "default", { loading: t.loading }),
                    ]))
                  : (i(),
                    g("div", lt, [
                      t.$slots.skeleton
                        ? p(t.$slots, "skeleton", { key: 0 })
                        : (i(), r(c, { key: 1 })),
                    ])),
              ]),
              _: 3,
            },
            16,
            ["name", "tag"]
          )
        );
      },
    ],
  ]),
  rt = x(et),
  dt = x(at);
x(it);
export { J as B, rt as C, dt as S, Z as _, V as a, K as b, G as c };

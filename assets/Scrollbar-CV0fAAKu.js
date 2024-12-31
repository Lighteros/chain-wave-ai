import {
  e_ as e,
  as as t,
  b9 as s,
  r as a,
  bq as l,
  c as r,
  aP as i,
  e$ as o,
  a$ as n,
  f0 as c,
  bT as u,
  aL as v,
  n as d,
  a as f,
  dZ as _,
  bk as p,
  bw as m,
  au as z,
  av as g,
  bl as h,
  bo as b,
  ax as y,
  bn as w,
  bm as S,
  cV as L,
  f1 as x,
  aC as B,
  aw as T,
  aD as C,
} from "./index-DPRREYlk.js";
const H = "undefined" == typeof window;
function $(e) {
  for (const t of e) {
    const e = t.target.__resizeListeners__ || [];
    e.length &&
      e.forEach((e) => {
        e();
      });
  }
}
function A(t, s) {
  H ||
    (t.__resizeListeners__ ||
      ((t.__resizeListeners__ = []),
      (t.__ro__ = new e($)),
      t.__ro__.observe(t)),
    t.__resizeListeners__.push(s));
}
function E(e, t) {
  e &&
    e.__resizeListeners__ &&
    (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1),
    e.__resizeListeners__.length || e.__ro__.disconnect());
}
function F() {
  const e = document.createEvent("HTMLEvents");
  e.initEvent("resize", !0, !0),
    (e.eventType = "message"),
    window.dispatchEvent(e);
}
const W = {
    table: {
      fetchSetting: {
        pageField: "page",
        sizeField: "pageSize",
        listField: "items",
        totalField: "total",
      },
      pageSizeOptions: ["10", "50", "80", "100"],
      defaultPageSize: 10,
      defaultSize: "middle",
      defaultSortFn: (e) => {
        const { field: t, order: s } = e;
        return t && s ? { field: t, order: s } : {};
      },
      defaultFilterFn: (e) => e,
    },
    scrollbar: { native: !1 },
  },
  k = {
    vertical: {
      offset: "offsetHeight",
      scroll: "scrollTop",
      scrollSize: "scrollHeight",
      size: "height",
      key: "vertical",
      axis: "Y",
      client: "clientY",
      direction: "top",
    },
    horizontal: {
      offset: "offsetWidth",
      scroll: "scrollLeft",
      scrollSize: "scrollWidth",
      size: "width",
      key: "horizontal",
      axis: "X",
      client: "clientX",
      direction: "left",
    },
  };
function M({ move: e, size: t, bar: s }) {
  const a = {},
    l = `translate${s.axis}(${e}%)`;
  return (
    (a[s.size] = t),
    (a.transform = l),
    (a.msTransform = l),
    (a.webkitTransform = l),
    a
  );
}
const R = t({
    name: "Bar",
    props: { vertical: Boolean, size: String, move: Number },
    setup(e) {
      const t = s(),
        u = a(),
        v = l("scroll-bar-wrap", {}),
        d = r(() => k[e.vertical ? "vertical" : "horizontal"]),
        f = a({}),
        _ = a(),
        p = (e) => {
          e.ctrlKey ||
            2 === e.button ||
            (window.getSelection()?.removeAllRanges(),
            z(e),
            (f.value[d.value.axis] =
              e.currentTarget[d.value.offset] -
              (e[d.value.client] -
                e.currentTarget.getBoundingClientRect()[d.value.direction])));
        },
        m = (e) => {
          const s =
            (100 *
              (Math.abs(
                e.target.getBoundingClientRect()[d.value.direction] -
                  e[d.value.client]
              ) -
                u.value[d.value.offset] / 2)) /
            t?.vnode.el?.[d.value.offset];
          v.value[d.value.scroll] = (s * v.value[d.value.scrollSize]) / 100;
        },
        z = (e) => {
          e.stopImmediatePropagation(),
            (_.value = !0),
            c(document, "mousemove", g),
            c(document, "mouseup", h),
            (document.onselectstart = () => !1);
        },
        g = (e) => {
          if (!1 === _.value) return;
          const s = f.value[d.value.axis];
          if (!s) return;
          const a =
            (100 *
              (-1 *
                (t?.vnode.el?.getBoundingClientRect()[d.value.direction] -
                  e[d.value.client]) -
                (u.value[d.value.offset] - s))) /
            t?.vnode.el?.[d.value.offset];
          v.value[d.value.scroll] = (a * v.value[d.value.scrollSize]) / 100;
        };
      function h() {
        (_.value = !1),
          (f.value[d.value.axis] = 0),
          o(document, "mousemove", g),
          (document.onselectstart = null);
      }
      return (
        i(() => {
          o(document, "mouseup", h);
        }),
        () =>
          n(
            "div",
            { class: ["scrollbar__bar", `is-${d.value.key}`], onMousedown: m },
            n("div", {
              ref: u,
              class: "scrollbar__thumb",
              onMousedown: p,
              style: M({ size: e.size, move: e.move, bar: d.value }),
            })
          )
      );
    },
  }),
  { scrollbar: X } = W,
  Y = t({
    name: "Scrollbar",
    components: { Bar: R },
    props: {
      native: { type: Boolean, default: X?.native ?? !1 },
      wrapStyle: { type: [String, Array], default: "" },
      wrapClass: { type: [String, Array], default: "" },
      viewClass: { type: [String, Array], default: "" },
      viewStyle: { type: [String, Array], default: "" },
      noresize: Boolean,
      tag: { type: String, default: "div" },
    },
    setup(e) {
      const t = a("0"),
        s = a("0"),
        l = a(0),
        i = a(0),
        o = a(),
        n = a();
      u("scroll-bar-wrap", o);
      const c = r(() =>
          Array.isArray(e.wrapStyle)
            ? (function (e) {
                const t = {};
                for (let l = 0; l < e.length; l++)
                  e[l] && ((s = t), (a = e[l]), Object.assign(s, a));
                var s, a;
                return t;
              })(e.wrapStyle)
            : e.wrapStyle
        ),
        p = () => {
          if (!f(o)) return;
          const e = (100 * f(o).clientHeight) / f(o).scrollHeight,
            a = (100 * f(o).clientWidth) / f(o).scrollWidth;
          (s.value = e < 100 ? `${e}%` : ""),
            (t.value = a < 100 ? `${a}%` : "");
        };
      return (
        v(() => {
          e.native ||
            (d(p),
            e.noresize ||
              (A(f(n), p), A(f(o), p), addEventListener("resize", p)));
        }),
        _(() => {
          e.native ||
            e.noresize ||
            (E(f(n), p), E(f(o), p), removeEventListener("resize", p));
        }),
        {
          moveX: l,
          moveY: i,
          sizeWidth: t,
          sizeHeight: s,
          style: c,
          wrap: o,
          resize: n,
          update: p,
          handleScroll: () => {
            e.native ||
              ((i.value = (100 * f(o).scrollTop) / f(o).clientHeight),
              (l.value = (100 * f(o).scrollLeft) / f(o).clientWidth));
          },
        }
      );
    },
  }),
  O = { class: "scrollbar" };
const P = p(Y, [
  [
    "render",
    function (e, t, s, a, l, r) {
      const i = m("Bar");
      return (
        z(),
        g("div", O, [
          h(
            "div",
            {
              ref: "wrap",
              class: S([
                "scrollbar__wrap",
                [
                  e.wrapClass,
                  e.native ? "" : "scrollbar__wrap--hidden-default",
                ],
              ]),
              style: L(e.style),
              onScroll:
                t[0] ||
                (t[0] = (...t) => e.handleScroll && e.handleScroll(...t)),
            },
            [
              (z(),
              b(
                x(e.tag),
                {
                  ref: "resize",
                  class: S(["scrollbar__view", [e.viewClass]]),
                  style: L(e.viewStyle),
                },
                {
                  default: y(() => [w(e.$slots, "default", {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ["class", "style"]
              )),
            ],
            38
          ),
          e.native
            ? C("", !0)
            : (z(),
              g(
                B,
                { key: 0 },
                [
                  T(i, { move: e.moveX, size: e.sizeWidth }, null, 8, [
                    "move",
                    "size",
                  ]),
                  T(
                    i,
                    { vertical: "", move: e.moveY, size: e.sizeHeight },
                    null,
                    8,
                    ["move", "size"]
                  ),
                ],
                64
              )),
        ])
      );
    },
  ],
  ["__scopeId", "data-v-b38e2049"],
]);
export { P as S, W as c, F as t };

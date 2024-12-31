import {
  b9 as t,
  at as e,
  cP as a,
  b2 as n,
  c as s,
  fs as u,
  n as o,
  ft as r,
  a as l,
  r as c,
  bb as i,
  as as d,
  u as f,
  b8 as p,
  bk as v,
  au as b,
  bo as C,
  ax as m,
  aA as y,
  aB as g,
  bE as S,
  az as x,
  bZ as w,
  bw as z,
  dq as A,
  bN as B,
  bn as h,
  bU as k,
  c5 as F,
  aw as N,
  ay as T,
  aO as $,
} from "./index-CcOpQHgp.js";
function j(c, i = "value", d = "change", f) {
  const p = t(),
    v = p?.emit,
    b = e({ value: c[i] }),
    C = a(b);
  n(() => {
    b.value = c[i];
  });
  return [
    s({
      get: () => b.value,
      set(t) {
        u(t, C.value) ||
          ((b.value = t),
          o(() => {
            v?.(d, t, ...(r(l(f)) || []));
          }));
      },
    }),
    (t) => {
      b.value = t;
    },
    C,
  ];
}
const I = v(
  d({
    name: "CountButton",
    props: {
      value: { type: [Object, Number, String, Array] },
      count: { type: Number, default: 60 },
      beforeStartFunc: { type: Function, default: null },
    },
    setup(t) {
      const e = c(!1),
        {
          currentCount: a,
          isStart: u,
          start: o,
          reset: r,
        } = (function (t) {
          const e = c(t),
            a = c(!1);
          let n;
          function s() {
            n && window.clearInterval(n);
          }
          function u() {
            (a.value = !1), s(), (n = null);
          }
          function o() {
            l(a) ||
              n ||
              ((a.value = !0),
              (n = setInterval(() => {
                1 === l(e) ? (u(), (e.value = t)) : (e.value -= 1);
              }, 1e3)));
          }
          function r() {
            (e.value = t), u();
          }
          return (
            i(() => {
              r();
            }),
            {
              start: o,
              reset: r,
              restart: function () {
                r(), o();
              },
              clear: s,
              stop: u,
              currentCount: e,
              isStart: a,
            }
          );
        })(t.count),
        { t: d } = f(),
        v = s(() =>
          l(u)
            ? d("component.countdown.sendText", [l(a)])
            : d("component.countdown.normalText")
        );
      return (
        n(() => {
          void 0 === t.value && r();
        }),
        {
          handleStart: async function () {
            const { beforeStartFunc: a } = t;
            if (a && p(a)) {
              e.value = !0;
              try {
                (await a()) && o();
              } finally {
                e.value = !1;
              }
            } else o();
          },
          currentCount: a,
          loading: e,
          getButtonText: v,
          isStart: u,
        }
      );
    },
  }),
  [
    [
      "render",
      function (t, e, a, n, s, u) {
        const o = x;
        return (
          b(),
          C(
            o,
            S(t.$attrs, {
              disabled: t.isStart,
              loading: t.loading,
              onClick: t.handleStart,
            }),
            { default: m(() => [y(g(t.getButtonText), 1)]), _: 1 },
            16,
            ["disabled", "loading", "onClick"]
          )
        );
      },
    ],
  ]
);
const O = $(
  v(
    d({
      name: "CountDownInput",
      components: { CountButton: I },
      inheritAttrs: !1,
      props: {
        value: { type: String },
        size: {
          type: String,
          validator: (t) => ["default", "large", "small"].includes(t),
        },
        count: { type: Number, default: 60 },
        sendCodeApi: { type: Function, default: null },
      },
      setup(t) {
        const { prefixCls: e } = w("countdown-input"),
          [a] = j(t);
        return { prefixCls: e, state: a };
      },
    }),
    [
      [
        "render",
        function (t, e, a, n, s, u) {
          const o = z("CountButton"),
            r = T;
          return (
            b(),
            C(
              r,
              S(t.$attrs, { class: t.prefixCls, size: t.size, value: t.state }),
              A(
                {
                  addonAfter: m(() => [
                    N(
                      o,
                      {
                        size: t.size,
                        count: t.count,
                        value: t.state,
                        "before-start-func": t.sendCodeApi,
                      },
                      null,
                      8,
                      ["size", "count", "value", "before-start-func"]
                    ),
                  ]),
                  _: 2,
                },
                [
                  B(
                    Object.keys(t.$slots).filter((t) => "addonAfter" !== t),
                    (e) => ({
                      name: e,
                      fn: m((a) => [h(t.$slots, e, k(F(a || {})))]),
                    })
                  ),
                ]
              ),
              1040,
              ["class", "size", "value"]
            )
          );
        },
      ],
    ]
  )
);
$(I);
export { O as C, j as u };

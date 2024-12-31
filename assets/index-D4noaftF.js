import {
  as as t,
  r as a,
  dz as e,
  c as n,
  a as s,
  b2 as r,
  aR as o,
  aL as i,
  dA as l,
  dB as u,
  bk as d,
  au as p,
  av as f,
  aB as c,
  cV as y,
  aO as m,
} from "./index-DPRREYlk.js";
const g = m(
  d(
    t({
      name: "CountTo",
      props: {
        startVal: { type: Number, default: 0 },
        endVal: { type: Number, default: 0 },
        duration: { type: Number, default: 1500 },
        autoplay: { type: Boolean, default: !0 },
        decimals: { type: Number, default: 0, validator: (t) => t >= 0 },
        prefix: { type: String, default: "" },
        suffix: { type: String, default: "" },
        separator: { type: String, default: "," },
        decimal: { type: String, default: "." },
        color: { type: String },
        useEasing: { type: Boolean, default: !0 },
        transition: { type: String, default: "linear" },
      },
      emits: ["onStarted", "onFinished"],
      setup(t, { emit: d }) {
        const p = a(t.startVal);
        a(!1);
        let f = e(p);
        const c = n(() =>
          (function (a) {
            if (!a && 0 !== a) return "";
            const {
              decimals: e,
              decimal: n,
              separator: s,
              suffix: r,
              prefix: o,
            } = t;
            a = Number(a).toFixed(e);
            const i = (a += "").split(".");
            let l = i[0];
            const d = i.length > 1 ? n + i[1] : "",
              p = /(\d+)(\d{3})/;
            if (s && !u(s)) for (; p.test(l); ) l = l.replace(p, `$1${s}$2`);
            return o + l + d + r;
          })(s(f))
        );
        function y() {
          m(), (p.value = t.endVal);
        }
        function m() {
          f = e(p, {
            disabled: !t.useEasing,
            duration: t.duration,
            onFinished: () => d("onFinished"),
            onStarted: () => d("onStarted"),
            ...(t.useEasing ? { transition: l[t.transition] } : {}),
          });
        }
        return (
          r(() => {
            p.value = t.startVal;
          }),
          o([() => t.startVal, () => t.endVal], () => {
            t.autoplay && y();
          }),
          i(() => {
            t.autoplay && y();
          }),
          {
            value: c,
            start: y,
            reset: function () {
              (p.value = t.startVal), m();
            },
          }
        );
      },
    }),
    [
      [
        "render",
        function (t, a, e, n, s, r) {
          return (
            p(),
            f(
              "span",
              { style: y(t.color ? { color: t.color } : {}) },
              c(t.value),
              5
            )
          );
        },
      ],
    ]
  )
);
export { g as C };

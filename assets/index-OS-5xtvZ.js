import {
  aw as e,
  c7 as t,
  as as n,
  e1 as r,
  r as a,
  dZ as i,
  aS as l,
  aT as o,
  gX as s,
  aK as u,
  dx as d,
  aJ as c,
  c as p,
  aR as v,
  d$ as f,
  d_ as g,
  e2 as h,
  ck as b,
  aV as m,
  gS as $,
  gY as S,
  aX as y,
  gU as w,
  gZ as N,
  g_ as x,
  g$ as I,
  h0 as E,
  h1 as O,
  h2 as M,
  eQ as A,
  ce as R,
  e3 as C,
  h3 as D,
  b1 as k,
  h4 as z,
  cf as B,
  h5 as T,
  ch as j,
  f5 as P,
  h6 as F,
  cm as _,
  aU as W,
} from "./index-DPRREYlk.js";
import { D as H } from "./DownOutlined-BDMVSGUf.js";
import { i as G } from "./isMobile-VPrdNIIw.js";
var q = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",
        },
      },
    ],
  },
  name: "up",
  theme: "outlined",
};
function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      r.forEach(function (t) {
        L(e, t, n[t]);
      });
  }
  return e;
}
function L(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var U = function (n, r) {
  var a = V({}, n, r.attrs);
  return e(t, V({}, a, { icon: q }), null);
};
function X() {
  return "function" == typeof BigInt;
}
function K(e) {
  let t = e.trim(),
    n = t.startsWith("-");
  n && (t = t.slice(1)),
    (t = t
      .replace(/(\.\d*[^0])0*$/, "$1")
      .replace(/\.0*$/, "")
      .replace(/^0+/, "")),
    t.startsWith(".") && (t = `0${t}`);
  const r = t || "0",
    a = r.split("."),
    i = a[0] || "0",
    l = a[1] || "0";
  "0" === i && "0" === l && (n = !1);
  const o = n ? "-" : "";
  return {
    negative: n,
    negativeStr: o,
    trimStr: r,
    integerStr: i,
    decimalStr: l,
    fullStr: `${o}${r}`,
  };
}
function Z(e) {
  const t = String(e);
  return !Number.isNaN(Number(t)) && t.includes("e");
}
function J(e) {
  const t = String(e);
  if (Z(e)) {
    let e = Number(t.slice(t.indexOf("e-") + 2));
    const n = t.match(/\.(\d+)/);
    return (null == n ? void 0 : n[1]) && (e += n[1].length), e;
  }
  return t.includes(".") && Y(t) ? t.length - t.indexOf(".") - 1 : 0;
}
function Q(e) {
  let t = String(e);
  if (Z(e)) {
    if (e > Number.MAX_SAFE_INTEGER)
      return String(X() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER);
    if (e < Number.MIN_SAFE_INTEGER)
      return String(X() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER);
    t = e.toFixed(J(t));
  }
  return K(t).fullStr;
}
function Y(e) {
  return "number" == typeof e
    ? !Number.isNaN(e)
    : !!e &&
        (/^\s*-?\d+(\.\d+)?\s*$/.test(e) ||
          /^\s*-?\d+\.\s*$/.test(e) ||
          /^\s*-?\.\d+\s*$/.test(e));
}
function ee(e) {
  return (!e && 0 !== e && !Number.isNaN(e)) || !String(e).trim();
}
(U.displayName = "UpOutlined"), (U.inheritAttrs = !1);
class te {
  constructor(e) {
    (this.origin = ""),
      ee(e)
        ? (this.empty = !0)
        : ((this.origin = String(e)), (this.number = Number(e)));
  }
  negate() {
    return new te(-this.toNumber());
  }
  add(e) {
    if (this.isInvalidate()) return new te(e);
    const t = Number(e);
    if (Number.isNaN(t)) return this;
    const n = this.number + t;
    if (n > Number.MAX_SAFE_INTEGER) return new te(Number.MAX_SAFE_INTEGER);
    if (n < Number.MIN_SAFE_INTEGER) return new te(Number.MIN_SAFE_INTEGER);
    const r = Math.max(J(this.number), J(t));
    return new te(n.toFixed(r));
  }
  isEmpty() {
    return this.empty;
  }
  isNaN() {
    return Number.isNaN(this.number);
  }
  isInvalidate() {
    return this.isEmpty() || this.isNaN();
  }
  equals(e) {
    return this.toNumber() === (null == e ? void 0 : e.toNumber());
  }
  lessEquals(e) {
    return this.add(e.negate().toString()).toNumber() <= 0;
  }
  toNumber() {
    return this.number;
  }
  toString() {
    return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
      ? this.isInvalidate()
        ? ""
        : Q(this.number)
      : this.origin;
  }
}
class ne {
  constructor(e) {
    if (((this.origin = ""), ee(e))) return void (this.empty = !0);
    if (((this.origin = String(e)), "-" === e || Number.isNaN(e)))
      return void (this.nan = !0);
    let t = e;
    if (
      (Z(t) && (t = Number(t)), (t = "string" == typeof t ? t : Q(t)), Y(t))
    ) {
      const e = K(t);
      this.negative = e.negative;
      const n = e.trimStr.split(".");
      this.integer = BigInt(n[0]);
      const r = n[1] || "0";
      (this.decimal = BigInt(r)), (this.decimalLen = r.length);
    } else this.nan = !0;
  }
  getMark() {
    return this.negative ? "-" : "";
  }
  getIntegerStr() {
    return this.integer.toString();
  }
  getDecimalStr() {
    return this.decimal.toString().padStart(this.decimalLen, "0");
  }
  alignDecimal(e) {
    const t = `${this.getMark()}${this.getIntegerStr()}${this.getDecimalStr().padEnd(
      e,
      "0"
    )}`;
    return BigInt(t);
  }
  negate() {
    const e = new ne(this.toString());
    return (e.negative = !e.negative), e;
  }
  add(e) {
    if (this.isInvalidate()) return new ne(e);
    const t = new ne(e);
    if (t.isInvalidate()) return this;
    const n = Math.max(this.getDecimalStr().length, t.getDecimalStr().length),
      r = (this.alignDecimal(n) + t.alignDecimal(n)).toString(),
      { negativeStr: a, trimStr: i } = K(r),
      l = `${a}${i.padStart(n + 1, "0")}`;
    return new ne(`${l.slice(0, -n)}.${l.slice(-n)}`);
  }
  isEmpty() {
    return this.empty;
  }
  isNaN() {
    return this.nan;
  }
  isInvalidate() {
    return this.isEmpty() || this.isNaN();
  }
  equals(e) {
    return this.toString() === (null == e ? void 0 : e.toString());
  }
  lessEquals(e) {
    return this.add(e.negate().toString()).toNumber() <= 0;
  }
  toNumber() {
    return this.isNaN() ? NaN : Number(this.toString());
  }
  toString() {
    return !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
      ? this.isInvalidate()
        ? ""
        : K(`${this.getMark()}${this.getIntegerStr()}.${this.getDecimalStr()}`)
            .fullStr
      : this.origin;
  }
}
function re(e) {
  return X() ? new ne(e) : new te(e);
}
function ae(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if ("" === e) return "";
  const { negativeStr: a, integerStr: i, decimalStr: l } = K(e),
    o = `${t}${l}`,
    s = `${a}${i}`;
  if (n >= 0) {
    const i = Number(l[n]);
    if (i >= 5 && !r) {
      return ae(
        re(e)
          .add(`${a}0.${"0".repeat(n)}${10 - i}`)
          .toString(),
        t,
        n,
        r
      );
    }
    return 0 === n ? s : `${s}${t}${l.padEnd(n, "0").slice(0, n)}`;
  }
  return ".0" === o ? s : `${s}${o}`;
}
const ie = n({
  compatConfig: { MODE: 3 },
  name: "StepHandler",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    upDisabled: Boolean,
    downDisabled: Boolean,
    onStep: r(),
  },
  slots: Object,
  setup(t, n) {
    let { slots: r, emit: s } = n;
    const u = a(),
      d = (e, t) => {
        e.preventDefault(),
          s("step", t),
          (u.value = setTimeout(function e() {
            s("step", t), (u.value = setTimeout(e, 200));
          }, 600));
      },
      c = () => {
        clearTimeout(u.value);
      };
    return (
      i(() => {
        c();
      }),
      () => {
        if (G()) return null;
        const { prefixCls: n, upDisabled: a, downDisabled: i } = t,
          s = `${n}-handler`,
          u = l(s, `${s}-up`, { [`${s}-up-disabled`]: a }),
          p = l(s, `${s}-down`, { [`${s}-down-disabled`]: i }),
          v = {
            unselectable: "on",
            role: "button",
            onMouseup: c,
            onMouseleave: c,
          },
          { upNode: f, downNode: g } = r;
        return e("div", { class: `${s}-wrap` }, [
          e(
            "span",
            o(
              o({}, v),
              {},
              {
                onMousedown: (e) => {
                  d(e, !0);
                },
                "aria-label": "Increase Value",
                "aria-disabled": a,
                class: u,
              }
            ),
            [
              (null == f ? void 0 : f()) ||
                e(
                  "span",
                  { unselectable: "on", class: `${n}-handler-up-inner` },
                  null
                ),
            ]
          ),
          e(
            "span",
            o(
              o({}, v),
              {},
              {
                onMousedown: (e) => {
                  d(e, !1);
                },
                "aria-label": "Decrease Value",
                "aria-disabled": i,
                class: p,
              }
            ),
            [
              (null == g ? void 0 : g()) ||
                e(
                  "span",
                  { unselectable: "on", class: `${n}-handler-down-inner` },
                  null
                ),
            ]
          ),
        ]);
      }
    );
  },
});
var le = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  }
  return n;
};
const oe = (e, t) => (e || t.isEmpty() ? t.toString() : t.toNumber()),
  se = (e) => {
    const t = re(e);
    return t.isInvalidate() ? null : t;
  },
  ue = () => ({
    stringMode: f(),
    defaultValue: g([String, Number]),
    value: g([String, Number]),
    prefixCls: h(),
    min: g([String, Number]),
    max: g([String, Number]),
    step: g([String, Number], 1),
    tabindex: Number,
    controls: f(!0),
    readonly: f(),
    disabled: f(),
    autofocus: f(),
    keyboard: f(!0),
    parser: r(),
    formatter: r(),
    precision: Number,
    decimalSeparator: String,
    onInput: r(),
    onChange: r(),
    onPressEnter: r(),
    onStep: r(),
    onBlur: r(),
    onFocus: r(),
  }),
  de = n({
    compatConfig: { MODE: 3 },
    name: "InnerInputNumber",
    inheritAttrs: !1,
    props: c(c({}, ue()), { lazy: Boolean }),
    slots: Object,
    setup(t, n) {
      let { attrs: r, slots: f, emit: g, expose: h } = n;
      const m = u(),
        $ = u(!1),
        S = u(!1),
        y = u(!1),
        w = u(re(t.value));
      const N = (e, n) => {
          if (!n)
            return t.precision >= 0 ? t.precision : Math.max(J(e), J(t.step));
        },
        x = (e) => {
          const n = String(e);
          if (t.parser) return t.parser(n);
          let r = n;
          return (
            t.decimalSeparator && (r = r.replace(t.decimalSeparator, ".")),
            r.replace(/[^\w.-]+/g, "")
          );
        },
        I = u(""),
        E = (e, n) => {
          if (t.formatter)
            return t.formatter(e, { userTyping: n, input: String(I.value) });
          let r = "number" == typeof e ? Q(e) : e;
          if (!n) {
            const e = N(r, n);
            if (Y(r) && (t.decimalSeparator || e >= 0)) {
              r = ae(r, t.decimalSeparator || ".", e);
            }
          }
          return r;
        },
        O = (() => {
          const e = t.value;
          return w.value.isInvalidate() &&
            ["string", "number"].includes(typeof e)
            ? Number.isNaN(e)
              ? ""
              : e
            : E(w.value.toString(), !1);
        })();
      function M(e, t) {
        I.value = E(e.isInvalidate() ? e.toString(!1) : e.toString(!t), t);
      }
      I.value = O;
      const A = p(() => se(t.max)),
        R = p(() => se(t.min)),
        C = p(
          () =>
            !(!A.value || !w.value || w.value.isInvalidate()) &&
            A.value.lessEquals(w.value)
        ),
        D = p(
          () =>
            !(!R.value || !w.value || w.value.isInvalidate()) &&
            w.value.lessEquals(R.value)
        ),
        [k, z] = (function (e, t) {
          const n = a(null);
          return [
            function () {
              try {
                const {
                    selectionStart: t,
                    selectionEnd: r,
                    value: a,
                  } = e.value,
                  i = a.substring(0, t),
                  l = a.substring(r);
                n.value = {
                  start: t,
                  end: r,
                  value: a,
                  beforeTxt: i,
                  afterTxt: l,
                };
              } catch (t) {}
            },
            function () {
              if (e.value && n.value && t.value)
                try {
                  const { value: t } = e.value,
                    { beforeTxt: r, afterTxt: a, start: i } = n.value;
                  let l = t.length;
                  if (t.endsWith(a)) l = t.length - n.value.afterTxt.length;
                  else if (t.startsWith(r)) l = r.length;
                  else {
                    const e = r[i - 1],
                      n = t.indexOf(e, i - 1);
                    -1 !== n && (l = n + 1);
                  }
                  e.value.setSelectionRange(l, l);
                } catch (r) {
                  s(
                    !1,
                    `Something warning of cursor restore. Please fire issue about this: ${r.message}`
                  );
                }
            },
          ];
        })(m, $),
        B = (e) =>
          A.value && !e.lessEquals(A.value)
            ? A.value
            : R.value && !R.value.lessEquals(e)
            ? R.value
            : null,
        T = (e) => !B(e),
        j = (e, n) => {
          var r;
          let a = e,
            i = T(a) || a.isEmpty();
          if (
            (a.isEmpty() || n || ((a = B(a) || a), (i = !0)),
            !t.readonly && !t.disabled && i)
          ) {
            const e = a.toString(),
              i = N(e, n);
            return (
              i >= 0 && (a = re(ae(e, ".", i))),
              a.equals(w.value) ||
                ((l = a),
                void 0 === t.value && (w.value = l),
                null === (r = t.onChange) ||
                  void 0 === r ||
                  r.call(t, a.isEmpty() ? null : oe(t.stringMode, a)),
                void 0 === t.value && M(a, n)),
              a
            );
          }
          var l;
          return w.value;
        },
        P = (() => {
          const e = u(0),
            t = () => {
              d.cancel(e.value);
            };
          return (
            i(() => {
              t();
            }),
            (n) => {
              t(),
                (e.value = d(() => {
                  n();
                }));
            }
          );
        })(),
        F = (e) => {
          var n;
          if ((k(), (I.value = e), !y.value)) {
            const t = re(x(e));
            t.isNaN() || j(t, !0);
          }
          null === (n = t.onInput) || void 0 === n || n.call(t, e),
            P(() => {
              let n = e;
              t.parser || (n = e.replace(/。/g, ".")), n !== e && F(n);
            });
        },
        _ = () => {
          y.value = !0;
        },
        W = () => {
          (y.value = !1), F(m.value.value);
        },
        H = (e) => {
          F(e.target.value);
        },
        G = (e) => {
          var n, r;
          if ((e && C.value) || (!e && D.value)) return;
          S.value = !1;
          let a = re(t.step);
          e || (a = a.negate());
          const i = (w.value || re(0)).add(a.toString()),
            l = j(i, !1);
          null === (n = t.onStep) ||
            void 0 === n ||
            n.call(t, oe(t.stringMode, l), {
              offset: t.step,
              type: e ? "up" : "down",
            }),
            null === (r = m.value) || void 0 === r || r.focus();
        },
        q = (e) => {
          const n = re(x(I.value));
          let r = n;
          (r = n.isNaN() ? w.value : j(n, e)),
            void 0 !== t.value ? M(w.value, !1) : r.isNaN() || M(r, !1);
        },
        V = (e) => {
          var n;
          const { which: r } = e;
          (S.value = !0),
            r === b.ENTER &&
              (y.value || (S.value = !1),
              q(!1),
              null === (n = t.onPressEnter) || void 0 === n || n.call(t, e)),
            !1 !== t.keyboard &&
              !y.value &&
              [b.UP, b.DOWN].includes(r) &&
              (G(b.UP === r), e.preventDefault());
        },
        L = () => {
          S.value = !1;
        },
        U = (e) => {
          q(!1), ($.value = !1), (S.value = !1), g("blur", e);
        };
      return (
        v(
          () => t.precision,
          () => {
            w.value.isInvalidate() || M(w.value, !1);
          },
          { flush: "post" }
        ),
        v(
          () => t.value,
          () => {
            const e = re(t.value);
            w.value = e;
            const n = re(x(I.value));
            (e.equals(n) && S.value && !t.formatter) || M(e, S.value);
          },
          { flush: "post" }
        ),
        v(
          I,
          () => {
            t.formatter && z();
          },
          { flush: "post" }
        ),
        v(
          () => t.disabled,
          (e) => {
            e && ($.value = !1);
          }
        ),
        h({
          focus: () => {
            var e;
            null === (e = m.value) || void 0 === e || e.focus();
          },
          blur: () => {
            var e;
            null === (e = m.value) || void 0 === e || e.blur();
          },
        }),
        () => {
          const n = c(c({}, r), t),
            {
              prefixCls: a = "rc-input-number",
              min: i,
              max: s,
              step: u = 1,
              defaultValue: d,
              value: p,
              disabled: v,
              readonly: h,
              keyboard: b,
              controls: S = !0,
              autofocus: y,
              stringMode: N,
              parser: x,
              formatter: E,
              precision: O,
              decimalSeparator: M,
              onChange: A,
              onInput: R,
              onPressEnter: k,
              onStep: z,
              lazy: B,
              class: j,
              style: P,
            } = n,
            F = le(n, [
              "prefixCls",
              "min",
              "max",
              "step",
              "defaultValue",
              "value",
              "disabled",
              "readonly",
              "keyboard",
              "controls",
              "autofocus",
              "stringMode",
              "parser",
              "formatter",
              "precision",
              "decimalSeparator",
              "onChange",
              "onInput",
              "onPressEnter",
              "onStep",
              "lazy",
              "class",
              "style",
            ]),
            { upHandler: q, downHandler: X } = f,
            K = `${a}-input`,
            Z = {};
          return (
            B ? (Z.onChange = H) : (Z.onInput = H),
            e(
              "div",
              {
                class: l(a, j, {
                  [`${a}-focused`]: $.value,
                  [`${a}-disabled`]: v,
                  [`${a}-readonly`]: h,
                  [`${a}-not-a-number`]: w.value.isNaN(),
                  [`${a}-out-of-range`]: !w.value.isInvalidate() && !T(w.value),
                }),
                style: P,
                onKeydown: V,
                onKeyup: L,
              },
              [
                S &&
                  e(
                    ie,
                    {
                      prefixCls: a,
                      upDisabled: C.value,
                      downDisabled: D.value,
                      onStep: G,
                    },
                    { upNode: q, downNode: X }
                  ),
                e("div", { class: `${K}-wrap` }, [
                  e(
                    "input",
                    o(
                      o(
                        o(
                          {
                            autofocus: y,
                            autocomplete: "off",
                            role: "spinbutton",
                            "aria-valuemin": i,
                            "aria-valuemax": s,
                            "aria-valuenow": w.value.isInvalidate()
                              ? null
                              : w.value.toString(),
                            step: u,
                          },
                          F
                        ),
                        {},
                        {
                          ref: m,
                          class: K,
                          value: I.value,
                          disabled: v,
                          readonly: h,
                          onFocus: (e) => {
                            ($.value = !0), g("focus", e);
                          },
                        },
                        Z
                      ),
                      {},
                      { onBlur: U, onCompositionstart: _, onCompositionend: W }
                    ),
                    null
                  ),
                ]),
              ]
            )
          );
        }
      );
    },
  });
function ce(e) {
  return null != e;
}
const pe = (e) => {
    const {
      componentCls: t,
      lineWidth: n,
      lineType: r,
      colorBorder: a,
      borderRadius: i,
      fontSizeLG: l,
      controlHeightLG: o,
      controlHeightSM: s,
      colorError: u,
      inputPaddingHorizontalSM: d,
      colorTextDescription: p,
      motionDurationMid: v,
      colorPrimary: f,
      controlHeight: g,
      inputPaddingHorizontal: h,
      colorBgContainer: b,
      colorTextDisabled: m,
      borderRadiusSM: $,
      borderRadiusLG: S,
      controlWidth: R,
      handleVisible: C,
    } = e;
    return [
      {
        [t]: c(c(c(c({}, y(e)), w(e)), N(e, t)), {
          display: "inline-block",
          width: R,
          margin: 0,
          padding: 0,
          border: `${n}px ${r} ${a}`,
          borderRadius: i,
          "&-rtl": { direction: "rtl", [`${t}-input`]: { direction: "rtl" } },
          "&-lg": {
            padding: 0,
            fontSize: l,
            borderRadius: S,
            [`input${t}-input`]: { height: o - 2 * n },
          },
          "&-sm": {
            padding: 0,
            borderRadius: $,
            [`input${t}-input`]: { height: s - 2 * n, padding: `0 ${d}px` },
          },
          "&:hover": c({}, x(e)),
          "&-focused": c({}, I(e)),
          "&-disabled": c(c({}, E(e)), {
            [`${t}-input`]: { cursor: "not-allowed" },
          }),
          "&-out-of-range": { input: { color: u } },
          "&-group": c(c(c({}, y(e)), O(e)), {
            "&-wrapper": {
              display: "inline-block",
              textAlign: "start",
              verticalAlign: "top",
              [`${t}-affix-wrapper`]: { width: "100%" },
              "&-lg": { [`${t}-group-addon`]: { borderRadius: S } },
              "&-sm": { [`${t}-group-addon`]: { borderRadius: $ } },
            },
          }),
          [t]: {
            "&-input": c(
              c(
                {
                  width: "100%",
                  height: g - 2 * n,
                  padding: `0 ${h}px`,
                  textAlign: "start",
                  backgroundColor: "transparent",
                  border: 0,
                  borderRadius: i,
                  outline: 0,
                  transition: `all ${v} linear`,
                  appearance: "textfield",
                  color: e.colorText,
                  fontSize: "inherit",
                  verticalAlign: "top",
                },
                M(e.colorTextPlaceholder)
              ),
              {
                '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':
                  { margin: 0, webkitAppearance: "none", appearance: "none" },
              }
            ),
          },
        }),
      },
      {
        [t]: {
          [`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: {
            opacity: 1,
          },
          [`${t}-handler-wrap`]: {
            position: "absolute",
            insetBlockStart: 0,
            insetInlineEnd: 0,
            width: e.handleWidth,
            height: "100%",
            background: b,
            borderStartStartRadius: 0,
            borderStartEndRadius: i,
            borderEndEndRadius: i,
            borderEndStartRadius: 0,
            opacity: !0 === C ? 1 : 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            transition: `opacity ${v} linear ${v}`,
            [`${t}-handler`]: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "auto",
              height: "40%",
              [`\n              ${t}-handler-up-inner,\n              ${t}-handler-down-inner\n            `]:
                { marginInlineEnd: 0, fontSize: e.handleFontSize },
            },
          },
          [`${t}-handler`]: {
            height: "50%",
            overflow: "hidden",
            color: p,
            fontWeight: "bold",
            lineHeight: 0,
            textAlign: "center",
            cursor: "pointer",
            borderInlineStart: `${n}px ${r} ${a}`,
            transition: `all ${v} linear`,
            "&:active": { background: e.colorFillAlter },
            "&:hover": {
              height: "60%",
              [`\n              ${t}-handler-up-inner,\n              ${t}-handler-down-inner\n            `]:
                { color: f },
            },
            "&-up-inner, &-down-inner": c(c({}, A()), {
              color: p,
              transition: `all ${v} linear`,
              userSelect: "none",
            }),
          },
          [`${t}-handler-up`]: { borderStartEndRadius: i },
          [`${t}-handler-down`]: {
            borderBlockStart: `${n}px ${r} ${a}`,
            borderEndEndRadius: i,
          },
          "&-disabled, &-readonly": {
            [`${t}-handler-wrap`]: { display: "none" },
          },
          [`\n          ${t}-handler-up-disabled,\n          ${t}-handler-down-disabled\n        `]:
            { cursor: "not-allowed" },
          [`\n          ${t}-handler-up-disabled:hover &-handler-up-inner,\n          ${t}-handler-down-disabled:hover &-handler-down-inner\n        `]:
            { color: m },
        },
      },
      {
        [`${t}-borderless`]: {
          borderColor: "transparent",
          boxShadow: "none",
          [`${t}-handler-down`]: { borderBlockStartWidth: 0 },
        },
      },
    ];
  },
  ve = (e) => {
    const {
      componentCls: t,
      inputPaddingHorizontal: n,
      inputAffixPadding: r,
      controlWidth: a,
      borderRadiusLG: i,
      borderRadiusSM: l,
    } = e;
    return {
      [`${t}-affix-wrapper`]: c(c(c({}, w(e)), N(e, `${t}-affix-wrapper`)), {
        position: "relative",
        display: "inline-flex",
        width: a,
        padding: 0,
        paddingInlineStart: n,
        "&-lg": { borderRadius: i },
        "&-sm": { borderRadius: l },
        [`&:not(${t}-affix-wrapper-disabled):hover`]: c(c({}, x(e)), {
          zIndex: 1,
        }),
        "&-focused, &:focus": { zIndex: 1 },
        "&-disabled": { [`${t}[disabled]`]: { background: "transparent" } },
        [`> div${t}`]: {
          width: "100%",
          border: "none",
          outline: "none",
          [`&${t}-focused`]: { boxShadow: "none !important" },
        },
        [`input${t}-input`]: { padding: 0 },
        "&::before": { width: 0, visibility: "hidden", content: '"\\a0"' },
        [`${t}-handler-wrap`]: { zIndex: 2 },
        [t]: {
          "&-prefix, &-suffix": {
            display: "flex",
            flex: "none",
            alignItems: "center",
            pointerEvents: "none",
          },
          "&-prefix": { marginInlineEnd: r },
          "&-suffix": {
            position: "absolute",
            insetBlockStart: 0,
            insetInlineEnd: 0,
            zIndex: 1,
            height: "100%",
            marginInlineEnd: n,
            marginInlineStart: r,
          },
        },
      }),
    };
  },
  fe = m(
    "InputNumber",
    (e) => {
      const t = $(e);
      return [pe(t), ve(t), S(t)];
    },
    (e) => ({
      controlWidth: 90,
      handleWidth: e.controlHeightSM - 2 * e.lineWidth,
      handleFontSize: e.fontSize / 2,
      handleVisible: "auto",
    })
  );
var ge = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
        (n[r[a]] = e[r[a]]);
  }
  return n;
};
const he = ue(),
  be = n({
    compatConfig: { MODE: 3 },
    name: "AInputNumber",
    inheritAttrs: !1,
    props: c(c({}, he), {
      size: h(),
      bordered: f(!0),
      placeholder: String,
      name: String,
      id: String,
      type: String,
      addonBefore: W.any,
      addonAfter: W.any,
      prefix: W.any,
      "onUpdate:value": he.onChange,
      valueModifiers: Object,
      status: h(),
    }),
    slots: Object,
    setup(t, n) {
      let { emit: r, expose: a, attrs: i, slots: s } = n;
      var d;
      const f = R(),
        g = C.useInject(),
        h = p(() => D(g.status, t.status)),
        {
          prefixCls: b,
          size: m,
          direction: $,
          disabled: S,
        } = k("input-number", t),
        { compactSize: y, compactItemClassnames: w } = z(b, $),
        N = B(),
        x = p(() => {
          var e;
          return null !== (e = S.value) && void 0 !== e ? e : N.value;
        }),
        [I, E] = fe(b),
        O = p(() => y.value || m.value),
        M = u(null !== (d = t.value) && void 0 !== d ? d : t.defaultValue),
        A = u(!1);
      v(
        () => t.value,
        () => {
          M.value = t.value;
        }
      );
      const W = u(null),
        G = () => {
          var e;
          null === (e = W.value) || void 0 === e || e.focus();
        };
      a({
        focus: G,
        blur: () => {
          var e;
          null === (e = W.value) || void 0 === e || e.blur();
        },
      });
      const q = (e) => {
          void 0 === t.value && (M.value = e),
            r("update:value", e),
            r("change", e),
            f.onFieldChange();
        },
        V = (e) => {
          (A.value = !1), r("blur", e), f.onFieldBlur();
        },
        L = (e) => {
          (A.value = !0), r("focus", e);
        };
      return () => {
        var n, r, a, u;
        const { hasFeedback: d, isFormItemInput: p, feedbackIcon: v } = g,
          m = null !== (n = t.id) && void 0 !== n ? n : f.id.value,
          S = c(c(c({}, i), t), { id: m, disabled: x.value }),
          {
            class: y,
            bordered: N,
            readonly: R,
            style: C,
            addonBefore: D = null === (r = s.addonBefore) || void 0 === r
              ? void 0
              : r.call(s),
            addonAfter: k = null === (a = s.addonAfter) || void 0 === a
              ? void 0
              : a.call(s),
            prefix: z = null === (u = s.prefix) || void 0 === u
              ? void 0
              : u.call(s),
            valueModifiers: B = {},
          } = S,
          X = ge(S, [
            "class",
            "bordered",
            "readonly",
            "style",
            "addonBefore",
            "addonAfter",
            "prefix",
            "valueModifiers",
          ]),
          K = b.value,
          Z = l(
            {
              [`${K}-lg`]: "large" === O.value,
              [`${K}-sm`]: "small" === O.value,
              [`${K}-rtl`]: "rtl" === $.value,
              [`${K}-readonly`]: R,
              [`${K}-borderless`]: !N,
              [`${K}-in-form-item`]: p,
            },
            T(K, h.value),
            y,
            w.value,
            E.value
          );
        let J = e(
          de,
          o(
            o({}, j(X, ["size", "defaultValue"])),
            {},
            {
              ref: W,
              lazy: !!B.lazy,
              value: M.value,
              class: Z,
              prefixCls: K,
              readonly: R,
              onChange: q,
              onBlur: V,
              onFocus: L,
            }
          ),
          {
            upHandler: s.upIcon
              ? () =>
                  e("span", { class: `${K}-handler-up-inner` }, [s.upIcon()])
              : () => e(U, { class: `${K}-handler-up-inner` }, null),
            downHandler: s.downIcon
              ? () =>
                  e("span", { class: `${K}-handler-down-inner` }, [
                    s.downIcon(),
                  ])
              : () => e(H, { class: `${K}-handler-down-inner` }, null),
          }
        );
        const Q = ce(D) || ce(k),
          Y = ce(z);
        if (Y || d) {
          const t = l(
            `${K}-affix-wrapper`,
            T(`${K}-affix-wrapper`, h.value, d),
            {
              [`${K}-affix-wrapper-focused`]: A.value,
              [`${K}-affix-wrapper-disabled`]: x.value,
              [`${K}-affix-wrapper-sm`]: "small" === O.value,
              [`${K}-affix-wrapper-lg`]: "large" === O.value,
              [`${K}-affix-wrapper-rtl`]: "rtl" === $.value,
              [`${K}-affix-wrapper-readonly`]: R,
              [`${K}-affix-wrapper-borderless`]: !N,
              [`${y}`]: !Q && y,
            },
            E.value
          );
          J = e("div", { class: t, style: C, onClick: G }, [
            Y && e("span", { class: `${K}-prefix` }, [z]),
            J,
            d && e("span", { class: `${K}-suffix` }, [v]),
          ]);
        }
        if (Q) {
          const t = `${K}-group`,
            n = `${t}-addon`,
            r = D ? e("div", { class: n }, [D]) : null,
            a = k ? e("div", { class: n }, [k]) : null,
            i = l(
              `${K}-wrapper`,
              t,
              { [`${t}-rtl`]: "rtl" === $.value },
              E.value
            ),
            o = l(
              `${K}-group-wrapper`,
              {
                [`${K}-group-wrapper-sm`]: "small" === O.value,
                [`${K}-group-wrapper-lg`]: "large" === O.value,
                [`${K}-group-wrapper-rtl`]: "rtl" === $.value,
              },
              T(`${b}-group-wrapper`, h.value, d),
              y,
              E.value
            );
          J = e("div", { class: o, style: C }, [
            e("div", { class: i }, [
              r &&
                e(P, null, {
                  default: () => [e(F, null, { default: () => [r] })],
                }),
              J,
              a &&
                e(P, null, {
                  default: () => [e(F, null, { default: () => [a] })],
                }),
            ]),
          ]);
        }
        return I(_(J, { style: C }));
      };
    },
  }),
  me = c(be, { install: (e) => (e.component(be.name, be), e) });
export { me as I };

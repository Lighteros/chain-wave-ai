import {
  as as e,
  aQ as a,
  r as t,
  aR as o,
  aJ as n,
  aS as r,
  aw as c,
  aT as l,
  aU as s,
} from "./index-DPRREYlk.js";
var d = function (e, a) {
  var t = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      a.indexOf(o) < 0 &&
      (t[o] = e[o]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var n = 0;
    for (o = Object.getOwnPropertySymbols(e); n < o.length; n++)
      a.indexOf(o[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[n]) &&
        (t[o[n]] = e[o[n]]);
  }
  return t;
};
const i = e({
  compatConfig: { MODE: 3 },
  name: "Checkbox",
  inheritAttrs: !1,
  props: a(
    {
      prefixCls: String,
      name: String,
      id: String,
      type: String,
      defaultChecked: { type: [Boolean, Number], default: void 0 },
      checked: { type: [Boolean, Number], default: void 0 },
      disabled: Boolean,
      tabindex: { type: [Number, String] },
      readonly: Boolean,
      autofocus: Boolean,
      value: s.any,
      required: Boolean,
    },
    { prefixCls: "rc-checkbox", type: "checkbox", defaultChecked: !1 }
  ),
  emits: ["click", "change"],
  setup(e, a) {
    let { attrs: s, emit: i, expose: u } = a;
    const p = t(void 0 === e.checked ? e.defaultChecked : e.checked),
      f = t();
    o(
      () => e.checked,
      () => {
        p.value = e.checked;
      }
    ),
      u({
        focus() {
          var e;
          null === (e = f.value) || void 0 === e || e.focus();
        },
        blur() {
          var e;
          null === (e = f.value) || void 0 === e || e.blur();
        },
      });
    const v = t(),
      y = (a) => {
        if (e.disabled) return;
        void 0 === e.checked && (p.value = a.target.checked),
          (a.shiftKey = v.value);
        const t = {
          target: n(n({}, e), { checked: a.target.checked }),
          stopPropagation() {
            a.stopPropagation();
          },
          preventDefault() {
            a.preventDefault();
          },
          nativeEvent: a,
        };
        void 0 !== e.checked && (f.value.checked = !!e.checked),
          i("change", t),
          (v.value = !1);
      },
      h = (e) => {
        i("click", e), (v.value = e.shiftKey);
      };
    return () => {
      const {
          prefixCls: a,
          name: t,
          id: o,
          type: i,
          disabled: u,
          readonly: v,
          tabindex: b,
          autofocus: k,
          value: g,
          required: m,
        } = e,
        x = d(e, [
          "prefixCls",
          "name",
          "id",
          "type",
          "disabled",
          "readonly",
          "tabindex",
          "autofocus",
          "value",
          "required",
        ]),
        {
          class: C,
          onFocus: O,
          onBlur: B,
          onKeydown: K,
          onKeypress: S,
          onKeyup: j,
        } = s,
        w = n(n({}, x), s),
        P = Object.keys(w).reduce(
          (e, a) => (
            (a.startsWith("data-") || a.startsWith("aria-") || "role" === a) &&
              (e[a] = w[a]),
            e
          ),
          {}
        ),
        q = r(a, C, { [`${a}-checked`]: p.value, [`${a}-disabled`]: u }),
        $ = n(
          n(
            {
              name: t,
              id: o,
              type: i,
              readonly: v,
              disabled: u,
              tabindex: b,
              class: `${a}-input`,
              checked: !!p.value,
              autofocus: k,
              value: g,
            },
            P
          ),
          {
            onChange: y,
            onClick: h,
            onFocus: O,
            onBlur: B,
            onKeydown: K,
            onKeypress: S,
            onKeyup: j,
            required: m,
          }
        );
      return c("span", { class: q }, [
        c("input", l({ ref: f }, $), null),
        c("span", { class: `${a}-inner` }, null),
      ]);
    };
  },
});
export { i as V };

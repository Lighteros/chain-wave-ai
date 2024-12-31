import {
  aJ as e,
  d$ as a,
  e0 as l,
  e1 as n,
  aU as t,
  e2 as o,
  as as u,
  ce as s,
  e3 as i,
  b1 as r,
  cf as d,
  bq as v,
  c,
  b2 as p,
  dZ as m,
  aL as b,
  dy as f,
  r as h,
  c8 as g,
  aS as x,
  aw as C,
  aT as k,
  aR as y,
  bT as O,
} from "./index-DPRREYlk.js";
import { V as S } from "./Checkbox-KylR2T3k.js";
import { u as w } from "./index-jlJCtu5U.js";
const M = Symbol("CheckboxGroupContext");
var V = function (e, a) {
  var l = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      a.indexOf(n) < 0 &&
      (l[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var t = 0;
    for (n = Object.getOwnPropertySymbols(e); t < n.length; t++)
      a.indexOf(n[t]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[t]) &&
        (l[n[t]] = e[n[t]]);
  }
  return l;
};
const $ = u({
    compatConfig: { MODE: 3 },
    name: "ACheckbox",
    inheritAttrs: !1,
    __ANT_CHECKBOX: !0,
    props: e(
      e(
        {},
        {
          prefixCls: String,
          defaultChecked: a(),
          checked: a(),
          disabled: a(),
          isGroup: a(),
          value: t.any,
          name: String,
          id: String,
          indeterminate: a(),
          type: o("checkbox"),
          autofocus: a(),
          onChange: n(),
          "onUpdate:checked": n(),
          onClick: n(),
          skipGroup: a(!1),
        }
      ),
      { indeterminate: a(!1) }
    ),
    setup(a, l) {
      let { emit: n, attrs: t, slots: o, expose: u } = l;
      const y = s(),
        O = i.useInject(),
        { prefixCls: $, direction: I, disabled: j } = r("checkbox", a),
        G = d(),
        [A, E] = w($),
        U = v(M, void 0),
        B = Symbol("checkboxUniId"),
        F = c(() => (null == U ? void 0 : U.disabled.value) || j.value);
      p(() => {
        !a.skipGroup && U && U.registerValue(B, a.value);
      }),
        m(() => {
          U && U.cancelValue(B);
        }),
        b(() => {
          f(!(void 0 === a.checked && !U && void 0 !== a.value));
        });
      const P = (e) => {
          const a = e.target.checked;
          n("update:checked", a), n("change", e), y.onFieldChange();
        },
        T = h();
      return (
        u({
          focus: () => {
            var e;
            null === (e = T.value) || void 0 === e || e.focus();
          },
          blur: () => {
            var e;
            null === (e = T.value) || void 0 === e || e.blur();
          },
        }),
        () => {
          var l;
          const u = g(
              null === (l = o.default) || void 0 === l ? void 0 : l.call(o)
            ),
            { indeterminate: s, skipGroup: i, id: r = y.id.value } = a,
            d = V(a, ["indeterminate", "skipGroup", "id"]),
            {
              onMouseenter: v,
              onMouseleave: c,
              onInput: p,
              class: m,
              style: b,
            } = t,
            f = V(t, [
              "onMouseenter",
              "onMouseleave",
              "onInput",
              "class",
              "style",
            ]),
            h = e(e(e(e({}, d), { id: r, prefixCls: $.value }), f), {
              disabled: F.value,
            });
          U && !i
            ? ((h.onChange = function () {
                for (
                  var e = arguments.length, l = new Array(e), t = 0;
                  t < e;
                  t++
                )
                  l[t] = arguments[t];
                n("change", ...l), U.toggleOption({ label: u, value: a.value });
              }),
              (h.name = U.name.value),
              (h.checked = U.mergedValue.value.includes(a.value)),
              (h.disabled = F.value || G.value),
              (h.indeterminate = s))
            : (h.onChange = P);
          const w = x(
              {
                [`${$.value}-wrapper`]: !0,
                [`${$.value}-rtl`]: "rtl" === I.value,
                [`${$.value}-wrapper-checked`]: h.checked,
                [`${$.value}-wrapper-disabled`]: h.disabled,
                [`${$.value}-wrapper-in-form-item`]: O.isFormItemInput,
              },
              m,
              E.value
            ),
            M = x({ [`${$.value}-indeterminate`]: s }, E.value);
          return A(
            C(
              "label",
              { class: w, style: b, onMouseenter: v, onMouseleave: c },
              [
                C(
                  S,
                  k(
                    k({ "aria-checked": s ? "mixed" : void 0 }, h),
                    {},
                    { class: M, ref: T }
                  ),
                  null
                ),
                u.length ? C("span", null, [u]) : null,
              ]
            )
          );
        }
      );
    },
  }),
  I = u({
    compatConfig: { MODE: 3 },
    name: "ACheckboxGroup",
    inheritAttrs: !1,
    props: e(
      e(
        {},
        {
          name: String,
          prefixCls: String,
          options: l([]),
          disabled: Boolean,
          id: String,
        }
      ),
      { defaultValue: l(), value: l(), onChange: n(), "onUpdate:value": n() }
    ),
    setup(e, a) {
      let { slots: l, attrs: n, emit: t, expose: o } = a;
      const u = s(),
        { prefixCls: i, direction: d } = r("checkbox", e),
        v = c(() => `${i.value}-group`),
        [p, m] = w(v),
        b = h((void 0 === e.value ? e.defaultValue : e.value) || []);
      y(
        () => e.value,
        () => {
          b.value = e.value || [];
        }
      );
      const f = c(() =>
          e.options.map((e) =>
            "string" == typeof e || "number" == typeof e
              ? { label: e, value: e }
              : e
          )
        ),
        g = h(Symbol()),
        x = h(new Map()),
        S = h(new Map());
      y(g, () => {
        const e = new Map();
        for (const a of x.value.values()) e.set(a, !0);
        S.value = e;
      });
      return (
        O(M, {
          cancelValue: (e) => {
            x.value.delete(e), (g.value = Symbol());
          },
          registerValue: (e, a) => {
            x.value.set(e, a), (g.value = Symbol());
          },
          toggleOption: (a) => {
            const l = b.value.indexOf(a.value),
              n = [...b.value];
            -1 === l ? n.push(a.value) : n.splice(l, 1),
              void 0 === e.value && (b.value = n);
            const o = n
              .filter((e) => S.value.has(e))
              .sort(
                (e, a) =>
                  f.value.findIndex((a) => a.value === e) -
                  f.value.findIndex((e) => e.value === a)
              );
            t("update:value", o), t("change", o), u.onFieldChange();
          },
          mergedValue: b,
          name: c(() => e.name),
          disabled: c(() => e.disabled),
        }),
        o({ mergedValue: b }),
        () => {
          var a;
          const { id: t = u.id.value } = e;
          let o = null;
          return (
            f.value &&
              f.value.length > 0 &&
              (o = f.value.map((a) => {
                var n;
                return C(
                  $,
                  {
                    prefixCls: i.value,
                    key: a.value.toString(),
                    disabled: "disabled" in a ? a.disabled : e.disabled,
                    indeterminate: a.indeterminate,
                    value: a.value,
                    checked: -1 !== b.value.indexOf(a.value),
                    onChange: a.onChange,
                    class: `${v.value}-item`,
                  },
                  {
                    default: () => [
                      void 0 !== l.label
                        ? null === (n = l.label) || void 0 === n
                          ? void 0
                          : n.call(l, a)
                        : a.label,
                    ],
                  }
                );
              })),
            p(
              C(
                "div",
                k(
                  k({}, n),
                  {},
                  {
                    class: [
                      v.value,
                      { [`${v.value}-rtl`]: "rtl" === d.value },
                      n.class,
                      m.value,
                    ],
                    id: t,
                  }
                ),
                [
                  o ||
                    (null === (a = l.default) || void 0 === a
                      ? void 0
                      : a.call(l)),
                ]
              )
            )
          );
        }
      );
    },
  });
($.Group = I),
  ($.install = function (e) {
    return e.component($.name, $), e.component(I.name, I), e;
  });
export { $ as C };

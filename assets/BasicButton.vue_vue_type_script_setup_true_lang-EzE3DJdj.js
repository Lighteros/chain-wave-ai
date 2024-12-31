import {
  as as s,
  c as n,
  a as e,
  au as o,
  bo as t,
  ax as a,
  bp as i,
  aD as c,
  bn as l,
  bU as r,
  c5 as u,
  bE as p,
  az as d,
} from "./index-DPRREYlk.js";
import { u as b } from "./useAttrs-CpoV-7Xq.js";
const y = s({
  name: "BasicButton",
  inheritAttrs: !1,
  __name: "BasicButton",
  props: {
    color: {
      type: String,
      validator: (s) => ["error", "warning", "success", ""].includes(s),
    },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    preIcon: { type: String },
    postIcon: { type: String },
    iconSize: { type: Number, default: 14 },
    onClick: { type: Function, default: null },
  },
  setup(s) {
    const y = s,
      z = b({ excludeDefaultKeys: !1 }),
      f = n(() => {
        const { color: s, disabled: n } = y;
        return [{ [`ant-btn-${s}`]: !!s, "is-disabled": n }];
      }),
      m = n(() => ({ ...e(z), ...y }));
    return (s, n) => {
      const b = d;
      return (
        o(),
        t(
          b,
          p(e(m), { class: e(f), onClick: s.onClick }),
          {
            default: a((n) => [
              s.preIcon
                ? (o(),
                  t(i, { key: 0, icon: s.preIcon, size: s.iconSize }, null, 8, [
                    "icon",
                    "size",
                  ]))
                : c("", !0),
              l(s.$slots, "default", r(u(n || {}))),
              s.postIcon
                ? (o(),
                  t(
                    i,
                    { key: 1, icon: s.postIcon, size: s.iconSize },
                    null,
                    8,
                    ["icon", "size"]
                  ))
                : c("", !0),
            ]),
            _: 3,
          },
          16,
          ["class", "onClick"]
        )
      );
    };
  },
});
export { y as _ };

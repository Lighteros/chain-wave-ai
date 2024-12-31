import { _ as t } from "./BasicButton.vue_vue_type_script_setup_true_lang-EzE3DJdj.js";
import { e } from "./tsxHelper-DjrCDYtL.js";
import { u as s } from "./useAttrs-CpoV-7Xq.js";
import {
  as as o,
  c as a,
  a as n,
  a_ as r,
  a$ as l,
  b0 as c,
  u as i,
} from "./index-DPRREYlk.js";
const p = o({
  name: "PopButton",
  inheritAttrs: !1,
  props: { enable: { type: Boolean, default: !0 } },
  setup(o, { slots: p }) {
    const { t: u } = i(),
      m = s(),
      _ = a(() =>
        Object.assign(
          {
            danger: !0,
            okText: u("common.okText"),
            cancelText: u("common.cancelText"),
            overlayStyle: { zIndex: 9999 },
          },
          { ...o, ...n(m) }
        )
      );
    return () => {
      const s = r(n(_), "icon"),
        a = r(s, "title");
      a.disabled && (a.color = "");
      const i = l(t, a, e(p, ["title"]));
      return o.enable ? l(c, s, { default: () => i, title: p?.title }) : i;
    };
  },
});
export { p as _ };

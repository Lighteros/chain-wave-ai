import {
  as as l,
  b1 as o,
  aK as a,
  b2 as e,
  c as s,
  b3 as n,
  b4 as c,
  aS as i,
  aw as t,
  aC as u,
  aT as r,
  b5 as v,
  aU as d,
  b6 as p,
  b7 as b,
} from "./index-DPRREYlk.js";
import { u as C, C as f } from "./CheckableTag-CI-ued8d.js";
const m = l({
  compatConfig: { MODE: 3 },
  name: "ATag",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    color: { type: String },
    closable: { type: Boolean, default: !1 },
    closeIcon: d.any,
    visible: { type: Boolean, default: void 0 },
    onClose: { type: Function },
    onClick: p(),
    "onUpdate:visible": Function,
    icon: d.any,
    bordered: { type: Boolean, default: !0 },
  },
  slots: Object,
  setup(l, d) {
    let { slots: p, emit: f, attrs: m } = d;
    const { prefixCls: g, direction: k } = o("tag", l),
      [y, $] = C(g),
      h = a(!0);
    e(() => {
      void 0 !== l.visible && (h.value = l.visible);
    });
    const T = (o) => {
        o.stopPropagation(),
          f("update:visible", !1),
          f("close", o),
          o.defaultPrevented || (void 0 === l.visible && (h.value = !1));
      },
      x = s(() => n(l.color) || c(l.color)),
      I = s(() =>
        i(g.value, $.value, {
          [`${g.value}-${l.color}`]: x.value,
          [`${g.value}-has-color`]: l.color && !x.value,
          [`${g.value}-hidden`]: !h.value,
          [`${g.value}-rtl`]: "rtl" === k.value,
          [`${g.value}-borderless`]: !l.bordered,
        })
      ),
      j = (l) => {
        f("click", l);
      };
    return () => {
      var o, a, e;
      const {
          icon: s = null === (o = p.icon) || void 0 === o ? void 0 : o.call(p),
          color: n,
          closeIcon: c = null === (a = p.closeIcon) || void 0 === a
            ? void 0
            : a.call(p),
          closable: i = !1,
        } = l,
        d = { backgroundColor: n && !x.value ? n : void 0 },
        C = s || null,
        f = null === (e = p.default) || void 0 === e ? void 0 : e.call(p),
        k = C ? t(u, null, [C, t("span", null, [f])]) : f,
        $ = void 0 !== l.onClick,
        h = t(
          "span",
          r(
            r({}, m),
            {},
            { onClick: j, class: [I.value, m.class], style: [d, m.style] }
          ),
          [
            k,
            i
              ? c
                ? t("span", { class: `${g.value}-close-icon`, onClick: T }, [c])
                : t(b, { class: `${g.value}-close-icon`, onClick: T }, null)
              : null,
          ]
        );
      return y($ ? t(v, null, { default: () => [h] }) : h);
    };
  },
});
(m.CheckableTag = f),
  (m.install = function (l) {
    return l.component(m.name, m), l.component(f.name, f), l;
  });
export { m as T };

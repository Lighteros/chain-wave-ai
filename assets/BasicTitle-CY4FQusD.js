import {
  as as e,
  cR as a,
  bp as s,
  bZ as t,
  c as l,
  aw as n,
  a as o,
  er as p,
  es as r,
  et as i,
  aC as c,
  eb as f,
  au as u,
  av as d,
  bn as m,
  bo as y,
  bm as x,
  aD as g,
  bk as h,
} from "./index-DPRREYlk.js";
import { g as b } from "./tsxHelper-DjrCDYtL.js";
const S = {
    maxWidth: { type: String, default: "600px" },
    showIndex: { type: Boolean },
    color: { type: String, default: "#ffffff" },
    fontSize: { type: String, default: "14px" },
    placement: { type: String, default: "right" },
    text: { type: [Array, String] },
  },
  v = e({
    name: "BasicHelp",
    components: { Tooltip: a, Icon: s },
    props: S,
    setup(e, { slots: f }) {
      const { prefixCls: u } = t("basic-help"),
        d = l(() => ({ color: e.color, fontSize: e.fontSize })),
        m = l(() => ({ maxWidth: e.maxWidth }));
      function y() {
        const a = e.text;
        return r(a)
          ? n("p", null, [a])
          : i(a)
          ? a.map((a, s) =>
              n("p", { key: a }, [
                n(c, null, [e.showIndex ? `${s + 1}. ` : "", a]),
              ])
            )
          : null;
      }
      return () =>
        n(
          a,
          {
            overlayClassName: `${u}__wrap`,
            title: n("div", { style: o(d) }, [y()]),
            autoAdjustOverflow: !0,
            overlayStyle: o(m),
            placement: e.placement,
            getPopupContainer: () => p(),
          },
          {
            default: () => [
              n("span", { class: u }, [
                b(f) ||
                  n(s, { icon: "i-ant-design:info-circle-outlined" }, null),
              ]),
            ],
          }
        );
    },
  }),
  _ = e({
    __name: "BasicTitle",
    props: {
      helpMessage: { type: [String, Array], default: "" },
      span: { type: Boolean },
      normal: { type: Boolean },
    },
    setup(e) {
      const a = e,
        { prefixCls: s } = t("basic-title"),
        n = f(),
        p = l(() => [
          s,
          { [`${s}-show-span`]: a.span && n.default },
          { [`${s}-normal`]: a.normal },
        ]);
      return (a, t) => (
        u(),
        d(
          "span",
          { class: x(o(p)) },
          [
            m(a.$slots, "default", {}, void 0, !0),
            e.helpMessage
              ? (u(),
                y(
                  v,
                  { key: 0, class: x(`${o(s)}-help`), text: e.helpMessage },
                  null,
                  8,
                  ["class", "text"]
                ))
              : g("", !0),
          ],
          2
        )
      );
    },
  }),
  w = h(_, [["__scopeId", "data-v-f19e63cb"]]);
export { w as _, v as a };

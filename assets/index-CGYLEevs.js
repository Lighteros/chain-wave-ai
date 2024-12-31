import {
  as as e,
  dC as o,
  bR as s,
  bZ as t,
  r as a,
  c as r,
  a as i,
  be as n,
  u as p,
  bk as u,
  bw as l,
  au as d,
  bo as f,
  ax as m,
  bl as c,
  bm as b,
  aD as j,
  cz as y,
  cA as x,
} from "./index-CcOpQHgp.js";
import { u as F } from "./PageWrapper-B6_5WjVB.js";
import { a as g } from "./index-CT9t0i7w.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BY2Elyy8.js";
import "./useBreakpoint-CJwh33xD.js";
import "./responsiveObserve-B8IuOfYh.js";
import "./useFlexGapSupport-CAEU6rXB.js";
import "./isNumeric-DFkNItwV.js";
import "./LeftOutlined-CEGq77h1.js";
import "./uniqBy-Ck5a_KvM.js";
const h = e({
    name: "LayoutFooter",
    components: { LayoutFooter: g.Footer },
    setup() {
      const { t: e } = p(),
        { getShowFooter: u } = o(),
        { currentRoute: l } = s(),
        { prefixCls: d } = t("layout-footer"),
        f = a(null),
        { setFooterHeight: m } = F();
      return {
        getShowLayoutFooter: r(() => {
          if (i(u)) {
            const e = i(f)?.$el;
            m(e?.offsetHeight || 0);
          } else m(0);
          return i(u) && !i(l).meta?.hiddenFooter;
        }),
        prefixCls: d,
        t: e,
        openWindow: n,
        footerRef: f,
      };
    },
  }),
  v = ((e) => (y("data-v-9eabdda7"), (e = e()), x(), e))(() =>
    c("div", null, "Copyright ©2020 Vben Admin", -1)
  );
const w = u(h, [
  [
    "render",
    function (e, o, s, t, a, r) {
      const i = l("LayoutFooter");
      return e.getShowLayoutFooter
        ? (d(),
          f(
            i,
            { key: 0, ref: "footerRef", class: b(e.prefixCls) },
            {
              default: m(() => [
                c("div", { class: b(`${e.prefixCls}__links`) }, null, 2),
                v,
              ]),
              _: 1,
            },
            8,
            ["class"]
          ))
        : j("", !0);
    },
  ],
  ["__scopeId", "data-v-9eabdda7"],
]);
export { w as default };

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
} from "./index-DPRREYlk.js";
import { u as F } from "./PageWrapper-BPMfS97v.js";
import { a as g } from "./index-B6F7cNAD.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./isNumeric-DFkNItwV.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./uniqBy-CccCILMw.js";
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

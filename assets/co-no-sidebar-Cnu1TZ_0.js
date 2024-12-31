const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-BTq7rk_3.js",
      "assets/index-CcOpQHgp.js",
      "assets/index-Bu5LTPHX.css",
      "assets/useLockPage-Bocyvtpl.js",
      "assets/Scrollbar--prEWYIo.js",
      "assets/Scrollbar-Cj6-G02w.css",
      "assets/useLogin-On1iCh_e.js",
      "assets/index-DaAMx4na.js",
      "assets/useRefs-B_3jjMmX.js",
      "assets/isMobile-VPrdNIIw.js",
      "assets/useSortable-BgtScDrY.js",
      "assets/index-CT9t0i7w.js",
      "assets/isNumeric-DFkNItwV.js",
      "assets/LeftOutlined-CEGq77h1.js",
      "assets/PageWrapper-B6_5WjVB.js",
      "assets/propTypes-BC7VambV.js",
      "assets/DownOutlined-BY2Elyy8.js",
      "assets/useBreakpoint-CJwh33xD.js",
      "assets/responsiveObserve-B8IuOfYh.js",
      "assets/useFlexGapSupport-CAEU6rXB.js",
      "assets/PageWrapper-D_OC5O_f.css",
      "assets/uniqBy-Ck5a_KvM.js",
      "assets/index-J95yNdqc.css",
      "assets/useLockPage-CtIggQFR.css",
      "assets/Login-DwQJgX17.js",
      "assets/ForgetPasswordForm.vue_vue_type_script_setup_true_lang-BbBmnn83.js",
      "assets/LoginFormTitle.vue_vue_type_script_setup_true_lang-C6yERWZB.js",
      "assets/index-CwW81LNx.js",
      "assets/index-BKrJBZR8.css",
      "assets/index-DTXPccoC.js",
      "assets/Col-CzWyjHl5.js",
      "assets/debounce-CJY84BK1.js",
      "assets/Login-DBI11pzG.css",
      "assets/index-CrOx1cb3.js",
      "assets/scrollTo-CWXxwEo-.js",
      "assets/index-D04X4Oo2.css",
      "assets/index-CGYLEevs.js",
      "assets/index-D3K-TiHG.css",
    ])
) => i.map((i) => d[i]);
import {
  as as e,
  _ as s,
  bZ as a,
  c4 as o,
  b_ as t,
  c as r,
  a as u,
  bk as i,
  bw as l,
  au as p,
  bo as n,
  ax as d,
  aw as m,
  aD as c,
  bm as j,
  bU as y,
  c5 as f,
} from "./index-CcOpQHgp.js";
import { c as b, u as L, a as _ } from "./useLockPage-Bocyvtpl.js";
import { _ as x, L as S } from "./CoMultipleHeader-vpIiFRm-.js";
import { L as g, a as k } from "./index-CT9t0i7w.js";
import "./Scrollbar--prEWYIo.js";
import "./useLogin-On1iCh_e.js";
import "./index-DaAMx4na.js";
import "./useRefs-B_3jjMmX.js";
import "./isMobile-VPrdNIIw.js";
import "./useSortable-BgtScDrY.js";
import "./PageWrapper-B6_5WjVB.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BY2Elyy8.js";
import "./useBreakpoint-CJwh33xD.js";
import "./responsiveObserve-B8IuOfYh.js";
import "./useFlexGapSupport-CAEU6rXB.js";
import "./isNumeric-DFkNItwV.js";
import "./LeftOutlined-CEGq77h1.js";
import "./uniqBy-Ck5a_KvM.js";
const w = i(
  e({
    components: {
      LayoutFeatures: b(() =>
        s(
          () => import("./index-BTq7rk_3.js"),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
          ])
        )
      ),
      LayoutFooter: b(() =>
        s(
          () => import("./index-CGYLEevs.js"),
          __vite__mapDeps([
            36, 1, 2, 14, 15, 16, 17, 18, 19, 20, 11, 12, 13, 21, 22, 37,
          ])
        )
      ),
      LayoutHeader: x,
      LayoutContent: g,
      LayoutMultipleHeader: S,
    },
    props: { dark: Boolean },
    setup() {
      const { prefixCls: e } = a("default-layout"),
        { getIsMobile: s } = o(),
        { getShowFullHeaderRef: i } = L(),
        { getShowSidebar: l, getIsMixSidebar: p, getShowMenu: n } = t(),
        d = _(),
        m = r(() => {
          const e = ["ant-layout"];
          return (u(p) || u(n)) && e.push("ant-layout-has-sider"), e;
        });
      return {
        getShowFullHeaderRef: i,
        getShowSidebar: l,
        prefixCls: e,
        getIsMobile: s,
        getIsMixSidebar: p,
        layoutClass: m,
        lockEvents: d,
        onScroll(e) {},
      };
    },
  }),
  [
    [
      "render",
      function (e, s, a, o, t, r) {
        const u = l("LayoutFeatures"),
          i = l("LayoutHeader"),
          b = l("LayoutMultipleHeader"),
          L = l("LayoutContent"),
          _ = l("LayoutFooter"),
          x = k;
        return (
          p(),
          n(
            x,
            y(f(e.lockEvents)),
            {
              default: d(() => [
                m(u),
                e.getShowFullHeaderRef
                  ? (p(),
                    n(i, { key: 0, fixed: "", dark: e.$props.dark }, null, 8, [
                      "dark",
                    ]))
                  : c("", !0),
                m(
                  x,
                  { class: j([e.layoutClass]) },
                  {
                    default: d(() => [
                      m(x, null, {
                        default: d(() => [
                          m(
                            b,
                            {
                              "only-content": !e.$route?.meta?.forcePlaceholder,
                              dark: e.$props.dark,
                            },
                            null,
                            8,
                            ["only-content", "dark"]
                          ),
                          m(L),
                          m(_),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
              ]),
              _: 1,
            },
            16
          )
        );
      },
    ],
  ]
);
export { w as default };

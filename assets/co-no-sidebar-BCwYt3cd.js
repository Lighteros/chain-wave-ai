const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-DN266IAN.js",
      "assets/index-DPRREYlk.js",
      "assets/index-Bu5LTPHX.css",
      "assets/useLockPage-B2Xk9MVr.js",
      "assets/Scrollbar-CV0fAAKu.js",
      "assets/Scrollbar-Cj6-G02w.css",
      "assets/useLogin-BZJOiv0S.js",
      "assets/index-DTRlG5Qd.js",
      "assets/useRefs-DoWExZxn.js",
      "assets/isMobile-VPrdNIIw.js",
      "assets/useSortable-B119XHVq.js",
      "assets/index-B6F7cNAD.js",
      "assets/isNumeric-DFkNItwV.js",
      "assets/LeftOutlined-rFvNtfcP.js",
      "assets/PageWrapper-BPMfS97v.js",
      "assets/propTypes-BC7VambV.js",
      "assets/DownOutlined-BDMVSGUf.js",
      "assets/useBreakpoint-vSrZKufz.js",
      "assets/responsiveObserve-Bqv5_Yab.js",
      "assets/useFlexGapSupport-CUSf0znk.js",
      "assets/PageWrapper-D_OC5O_f.css",
      "assets/uniqBy-CccCILMw.js",
      "assets/index-J95yNdqc.css",
      "assets/useLockPage-CtIggQFR.css",
      "assets/Login-fXrhTH4x.js",
      "assets/ForgetPasswordForm.vue_vue_type_script_setup_true_lang-ZLpGHPfl.js",
      "assets/LoginFormTitle.vue_vue_type_script_setup_true_lang-DcBlbWPL.js",
      "assets/index-BaKVEinB.js",
      "assets/index-BKrJBZR8.css",
      "assets/index-5bY6ZDBk.js",
      "assets/Col-Djm-avAF.js",
      "assets/debounce-CUtJ7ZQO.js",
      "assets/Login-DBI11pzG.css",
      "assets/index-D0Hg4p6E.js",
      "assets/scrollTo-Dpgtz1Pq.js",
      "assets/index-D04X4Oo2.css",
      "assets/index-DX_5Y1sn.js",
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
} from "./index-DPRREYlk.js";
import { c as b, u as L, a as _ } from "./useLockPage-B2Xk9MVr.js";
import { _ as x, L as S } from "./CoMultipleHeader-COPmGfaD.js";
import { L as g, a as k } from "./index-B6F7cNAD.js";
import "./Scrollbar-CV0fAAKu.js";
import "./useLogin-BZJOiv0S.js";
import "./index-DTRlG5Qd.js";
import "./useRefs-DoWExZxn.js";
import "./isMobile-VPrdNIIw.js";
import "./useSortable-B119XHVq.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./isNumeric-DFkNItwV.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./uniqBy-CccCILMw.js";
const w = i(
  e({
    components: {
      LayoutFeatures: b(() =>
        s(
          () => import("./index-DN266IAN.js"),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
          ])
        )
      ),
      LayoutFooter: b(() =>
        s(
          () => import("./index-DX_5Y1sn.js"),
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

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
  bZ as s,
  c4 as t,
  b_ as a,
  c as o,
  a as r,
  _ as i,
  bk as p,
  bw as u,
  au as l,
  bo as m,
  ax as n,
  aw as d,
  aD as j,
  bm as y,
  bE as _,
} from "./index-DPRREYlk.js";
import { c, u as f, a as x } from "./useLockPage-B2Xk9MVr.js";
import { _ as L, L as b } from "./CoMultipleHeader-COPmGfaD.js";
import { L as S, a as g } from "./index-B6F7cNAD.js";
import { L as h } from "./index-D00JtRt1.js";
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
import "./useTimeout-BMbf6gdC.js";
import "./index-Cq67sDBe.js";
import "./tsxHelper-DjrCDYtL.js";
import "./BasicTitle-CY4FQusD.js";
import "./index-B0yuFjoJ.js";
import "./useChatList-Ch8PximY.js";
import "./orderBy-B1G-W8_4.js";
import "./_baseOrderBy-B_MN0TyA.js";
import "./_baseEach-BDY_Tvly.js";
import "./useConfigList-BkT8qE0X.js";
/* empty css                                                             */ import "./index-B0edVtGn.js";
const C = p(
  e({
    components: {
      LayoutFeatures: c(() =>
        i(
          () => import("./index-DN266IAN.js"),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
          ])
        )
      ),
      LayoutFooter: c(() =>
        i(
          () => import("./index-DX_5Y1sn.js"),
          __vite__mapDeps([
            36, 1, 2, 14, 15, 16, 17, 18, 19, 20, 11, 12, 13, 21, 22, 37,
          ])
        )
      ),
      LayoutHeader: L,
      LayoutContent: S,
      LayoutSideBar: h,
      LayoutMultipleHeader: b,
    },
    setup() {
      const { prefixCls: e } = s("default-layout"),
        { getIsMobile: i } = t(),
        { getShowFullHeaderRef: p } = f(),
        { getShowSidebar: u, getIsMixSidebar: l, getShowMenu: m } = a(),
        n = x(),
        d = o(() => {
          const e = ["ant-layout"];
          return (r(l) || r(m)) && e.push("ant-layout-has-sider"), e;
        });
      return {
        getShowFullHeaderRef: p,
        getShowSidebar: u,
        prefixCls: e,
        getIsMobile: i,
        getIsMixSidebar: l,
        layoutClass: d,
        lockEvents: n,
      };
    },
  }),
  [
    [
      "render",
      function (e, s, t, a, o, r) {
        const i = u("LayoutFeatures"),
          p = u("LayoutHeader"),
          c = u("LayoutSideBar"),
          f = u("LayoutMultipleHeader"),
          x = u("LayoutContent"),
          L = u("LayoutFooter"),
          b = g;
        return (
          l(),
          m(
            b,
            _({ class: e.prefixCls }, e.lockEvents),
            {
              default: n(() => [
                d(i),
                e.getShowFullHeaderRef
                  ? (l(), m(p, { key: 0, fixed: "" }))
                  : j("", !0),
                d(
                  b,
                  { class: y([[e.layoutClass], "relative h-full"]) },
                  {
                    default: n(() => [
                      e.getShowSidebar || e.getIsMobile
                        ? (l(), m(c, { key: 0 }))
                        : j("", !0),
                      d(
                        b,
                        { class: y(`${e.prefixCls}-main`) },
                        { default: n(() => [d(f), d(x), d(L)]), _: 1 },
                        8,
                        ["class"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["class"]
                ),
              ]),
              _: 1,
            },
            16,
            ["class"]
          )
        );
      },
    ],
  ]
);
export { C as default };

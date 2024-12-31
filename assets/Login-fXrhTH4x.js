const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/LoginForm-cTj5SsP9.js",
      "assets/index-DPRREYlk.js",
      "assets/index-Bu5LTPHX.css",
      "assets/useLogin-BZJOiv0S.js",
      "assets/_commonjs-dynamic-modules-BHR_E30J.js",
      "assets/index-B0yuFjoJ.js",
      "assets/index-DO9NC2BL.js",
      "assets/LeftOutlined-rFvNtfcP.js",
      "assets/index-5bY6ZDBk.js",
      "assets/Col-Djm-avAF.js",
      "assets/responsiveObserve-Bqv5_Yab.js",
      "assets/useFlexGapSupport-CUSf0znk.js",
      "assets/debounce-CUtJ7ZQO.js",
      "assets/index-DNofMLzB.js",
      "assets/index-DGJYrvBD.js",
      "assets/Checkbox-KylR2T3k.js",
      "assets/index-jlJCtu5U.js",
      "assets/index-u_fLo2At.js",
      "assets/index-BoKZCklY.js",
      "assets/LoginForm-CFMEqUBb.css",
      "assets/MobileForm-BTtSyHry.js",
      "assets/index-BaKVEinB.js",
      "assets/index-BKrJBZR8.css",
      "assets/LoginFormTitle.vue_vue_type_script_setup_true_lang-DcBlbWPL.js",
      "assets/QrCodeForm-uGcmI4I_.js",
      "assets/download-D26P9I-0.js",
      "assets/RegisterForm-D_Ri19UB.js",
      "assets/index-D0386R-z.js",
      "assets/propTypes-BC7VambV.js",
      "assets/index-BQoKBCPj.css",
      "assets/index-BPauqaGF.js",
      "assets/List-D10KDyaY.js",
      "assets/isMobile-VPrdNIIw.js",
      "assets/DownOutlined-BDMVSGUf.js",
      "assets/CheckOutlined-BvF8M63J.js",
    ])
) => i.map((i) => d[i]);
import {
  as as s,
  r as e,
  bZ as a,
  bR as t,
  aR as o,
  aL as r,
  au as i,
  av as l,
  bl as n,
  bm as u,
  a as p,
  aw as m,
  dX as _,
  ax as d,
  bO as x,
  bv as v,
  _ as f,
  bk as c,
} from "./index-DPRREYlk.js";
import { _ as g } from "./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-ZLpGHPfl.js";
import { u as j, L as y } from "./useLogin-BZJOiv0S.js";
import { _ as b, T as L } from "./index-DTRlG5Qd.js";
import "./LoginFormTitle.vue_vue_type_script_setup_true_lang-DcBlbWPL.js";
import "./index-BaKVEinB.js";
import "./index-5bY6ZDBk.js";
import "./Col-Djm-avAF.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./debounce-CUtJ7ZQO.js";
import "./useRefs-DoWExZxn.js";
import "./isMobile-VPrdNIIw.js";
const R = { class: "container relative h-full py-2 mx-auto sm:px-10" },
  w = { class: "flex justify-center h-full" },
  E = {
    class:
      "flex md:order-1 w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12",
  },
  h = {
    class: "loginTabs",
    style: { "margin-left": "-28px", "margin-right": "-28px" },
  },
  T = c(
    s({
      __name: "Login",
      props: { sessionTimeout: { type: Boolean } },
      setup(s) {
        function c(s) {
          return v({ loader: s });
        }
        const T = c(() =>
            f(
              () => import("./LoginForm-cTj5SsP9.js"),
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19,
              ])
            )
          ),
          F = c(() =>
            f(
              () => import("./MobileForm-BTtSyHry.js"),
              __vite__mapDeps([20, 21, 1, 2, 22, 23, 3, 8, 9, 10, 11, 12])
            )
          ),
          I = c(() =>
            f(
              () => import("./QrCodeForm-uGcmI4I_.js"),
              __vite__mapDeps([24, 23, 1, 2, 3, 25, 13])
            )
          ),
          S = c(() =>
            f(
              () => import("./RegisterForm-D_Ri19UB.js"),
              __vite__mapDeps([
                26, 1, 2, 27, 28, 29, 3, 30, 31, 32, 33, 34, 14, 15, 16, 8, 9,
                10, 11, 12,
              ])
            )
          ),
          k = e("1"),
          { prefixCls: O } = a("login"),
          { currentRoute: P } = t(),
          A = e(P.value.query.isRegister),
          { setLoginState: C, handleBackLogin: D, getLoginState: V } = j();
        function G(s) {
          "1" === s ? D() : "2" === s && C(y.REGISTER);
        }
        return (
          o(
            () => V.value,
            (s) => {
              0 == s && (k.value = "1");
            }
          ),
          r(() => {
            A.value && C(y.REGISTER);
          }),
          (s, e) => {
            const a = b,
              t = L;
            return (
              i(),
              l(
                "div",
                { class: u([p(O), "relative w-full h-full px-4"]) },
                [
                  n("div", R, [
                    n("div", w, [
                      n("div", E, [
                        n(
                          "div",
                          {
                            class: u([
                              "relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md sm:px-8 xl:p-7 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x",
                              [`${p(O)}-form`],
                            ]),
                          },
                          [
                            m(p(_), {
                              class: "flex justify-start",
                              "always-show-title": "",
                              disabled: "",
                            }),
                            n("div", h, [
                              m(
                                t,
                                {
                                  "active-key": p(k),
                                  "onUpdate:activeKey":
                                    e[0] ||
                                    (e[0] = (s) =>
                                      x(k) ? (k.value = s) : null),
                                  onChange: G,
                                },
                                {
                                  default: d(() => [
                                    m(a, { key: "1", tab: "Sign In" }),
                                    m(a, { key: "2", tab: "Sign Up" }),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["active-key"]
                              ),
                            ]),
                            m(p(T)),
                            m(g),
                            m(p(S)),
                            m(p(F)),
                            m(p(I)),
                          ],
                          2
                        ),
                      ]),
                    ]),
                  ]),
                ],
                2
              )
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-ddb1d5b9"]]
  );
export { T as default };

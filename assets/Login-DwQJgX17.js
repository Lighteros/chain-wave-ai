const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/LoginForm-BRwApil-.js",
      "assets/index-CcOpQHgp.js",
      "assets/index-Bu5LTPHX.css",
      "assets/useLogin-On1iCh_e.js",
      "assets/_commonjs-dynamic-modules-BHR_E30J.js",
      "assets/index-DpIaygWB.js",
      "assets/index-9G-QBl1v.js",
      "assets/LeftOutlined-CEGq77h1.js",
      "assets/index-DTXPccoC.js",
      "assets/Col-CzWyjHl5.js",
      "assets/responsiveObserve-B8IuOfYh.js",
      "assets/useFlexGapSupport-CAEU6rXB.js",
      "assets/debounce-CJY84BK1.js",
      "assets/index-DlZ6wPYJ.js",
      "assets/index-rEoBZfTn.js",
      "assets/Checkbox-BQM9q3Aw.js",
      "assets/index-CaGJeHqc.js",
      "assets/index-D80D17xw.js",
      "assets/index-DdKBjN66.js",
      "assets/LoginForm-CFMEqUBb.css",
      "assets/MobileForm-D_GSPLEn.js",
      "assets/index-CwW81LNx.js",
      "assets/index-BKrJBZR8.css",
      "assets/LoginFormTitle.vue_vue_type_script_setup_true_lang-C6yERWZB.js",
      "assets/QrCodeForm-DdI3rDLf.js",
      "assets/download-C0F47oWV.js",
      "assets/RegisterForm-De03OjaI.js",
      "assets/index-DIvDFkdG.js",
      "assets/propTypes-BC7VambV.js",
      "assets/index-BQoKBCPj.css",
      "assets/index-Cz_JZQCO.js",
      "assets/List-BIqEnSiM.js",
      "assets/isMobile-VPrdNIIw.js",
      "assets/DownOutlined-BY2Elyy8.js",
      "assets/CheckOutlined-DHEabyMk.js",
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
} from "./index-CcOpQHgp.js";
import { _ as g } from "./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-BbBmnn83.js";
import { u as j, L as y } from "./useLogin-On1iCh_e.js";
import { _ as b, T as L } from "./index-DaAMx4na.js";
import "./LoginFormTitle.vue_vue_type_script_setup_true_lang-C6yERWZB.js";
import "./index-CwW81LNx.js";
import "./index-DTXPccoC.js";
import "./Col-CzWyjHl5.js";
import "./responsiveObserve-B8IuOfYh.js";
import "./useFlexGapSupport-CAEU6rXB.js";
import "./debounce-CJY84BK1.js";
import "./useRefs-B_3jjMmX.js";
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
              () => import("./LoginForm-BRwApil-.js"),
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19,
              ])
            )
          ),
          F = c(() =>
            f(
              () => import("./MobileForm-D_GSPLEn.js"),
              __vite__mapDeps([20, 21, 1, 2, 22, 23, 3, 8, 9, 10, 11, 12])
            )
          ),
          I = c(() =>
            f(
              () => import("./QrCodeForm-DdI3rDLf.js"),
              __vite__mapDeps([24, 23, 1, 2, 3, 25, 13])
            )
          ),
          S = c(() =>
            f(
              () => import("./RegisterForm-De03OjaI.js"),
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

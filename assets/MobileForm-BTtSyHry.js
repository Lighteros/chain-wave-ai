import { C as e } from "./index-BaKVEinB.js";
import { _ as a } from "./LoginFormTitle.vue_vue_type_script_setup_true_lang-DcBlbWPL.js";
import {
  as as s,
  r as l,
  at as o,
  c as t,
  a as i,
  au as r,
  av as n,
  aw as m,
  ax as u,
  ay as p,
  az as c,
  aA as d,
  aB as f,
  aC as g,
  aD as _,
  u as x,
} from "./index-DPRREYlk.js";
import { u as b, a as v, L as y, b as j } from "./useLogin-BZJOiv0S.js";
import { F as k } from "./index-5bY6ZDBk.js";
import "./Col-Djm-avAF.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./debounce-CUtJ7ZQO.js";
const C = s({
  __name: "MobileForm",
  setup(s) {
    const C = k.Item,
      { t: L } = x(),
      { handleBackLogin: F, getLoginState: h } = b(),
      { getFormRules: z } = v(),
      B = l(),
      I = l(!1),
      S = o({ mobile: "", sms: "" }),
      { validForm: w } = j(B),
      M = t(() => i(h) === y.MOBILE);
    async function O() {
      await w();
    }
    return (s, l) =>
      i(M)
        ? (r(),
          n(
            g,
            { key: 0 },
            [
              m(a, { class: "enter-x" }),
              m(
                i(k),
                {
                  ref_key: "formRef",
                  ref: B,
                  class: "p-4 enter-x",
                  model: i(S),
                  rules: i(z),
                },
                {
                  default: u(() => [
                    m(
                      i(C),
                      { name: "mobile", class: "enter-x" },
                      {
                        default: u(() => [
                          m(
                            i(p),
                            {
                              value: i(S).mobile,
                              "onUpdate:value":
                                l[0] || (l[0] = (e) => (i(S).mobile = e)),
                              size: "large",
                              placeholder: i(L)("sys.login.mobile"),
                              class: "fix-auto-fill",
                            },
                            null,
                            8,
                            ["value", "placeholder"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    m(
                      i(C),
                      { name: "sms", class: "enter-x" },
                      {
                        default: u(() => [
                          m(
                            i(e),
                            {
                              value: i(S).sms,
                              "onUpdate:value":
                                l[1] || (l[1] = (e) => (i(S).sms = e)),
                              size: "large",
                              class: "fix-auto-fill",
                              placeholder: i(L)("sys.login.smsCode"),
                            },
                            null,
                            8,
                            ["value", "placeholder"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    m(
                      i(C),
                      { class: "enter-x" },
                      {
                        default: u(() => [
                          m(
                            i(c),
                            {
                              type: "primary",
                              size: "large",
                              block: "",
                              loading: i(I),
                              onClick: O,
                            },
                            {
                              default: u(() => [
                                d(f(i(L)("sys.login.loginButton")), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["loading"]
                          ),
                          m(
                            i(c),
                            {
                              size: "large",
                              block: "",
                              class: "mt-4",
                              onClick: i(F),
                            },
                            {
                              default: u(() => [
                                d(f(i(L)("sys.login.backSignIn")), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["onClick"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["model", "rules"]
              ),
            ],
            64
          ))
        : _("", !0);
  },
});
export { C as default };

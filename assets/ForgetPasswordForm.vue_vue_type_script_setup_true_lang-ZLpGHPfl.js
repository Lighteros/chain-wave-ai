import { _ as a } from "./LoginFormTitle.vue_vue_type_script_setup_true_lang-DcBlbWPL.js";
import { C as e } from "./index-BaKVEinB.js";
import {
  as as s,
  r as l,
  at as o,
  c as n,
  a as t,
  au as i,
  av as c,
  aw as r,
  ax as u,
  ay as m,
  az as d,
  aA as f,
  aB as p,
  aC as g,
  aD as _,
  u as v,
  aE as y,
  aF as x,
  aG as h,
} from "./index-DPRREYlk.js";
import { u as k, a as w, L as C } from "./useLogin-BZJOiv0S.js";
import { F as z } from "./index-5bY6ZDBk.js";
const F = s({
  __name: "ForgetPasswordForm",
  setup(s) {
    const F = z.Item,
      { t: S } = v(),
      { handleBackLogin: b, getLoginState: j } = k(),
      { getFormRules: L } = w(),
      R = l(),
      T = l(!1),
      E = o({ account: "", email: "", sms: "" }),
      P = n(() => t(j) === C.RESET_PASSWORD);
    async function U() {
      T.value = !0;
      try {
        (await y({
          account: E.account,
          email: E.email,
          verificationCode: E.sms,
        })) &&
          x.success(
            "The new password has been successfully sent to your email."
          ),
          b();
      } catch (a) {
      } finally {
        T.value = !1;
      }
    }
    async function A() {
      if ("" == E.account || "" == E.email)
        return void x.warn("Please input all information.");
      (await h({ email: E.email, name: E.account })) &&
        x.success("Successfully sent the verification code to your email.");
    }
    return (s, l) =>
      t(P)
        ? (i(),
          c(
            g,
            { key: 0 },
            [
              r(a, { class: "enter-x" }),
              r(
                t(z),
                {
                  ref_key: "formRef",
                  ref: R,
                  class: "p-4 enter-x",
                  model: t(E),
                  rules: t(L),
                },
                {
                  default: u(() => [
                    r(
                      t(F),
                      { name: "account", class: "enter-x" },
                      {
                        default: u(() => [
                          r(
                            t(m),
                            {
                              value: t(E).account,
                              "onUpdate:value":
                                l[0] || (l[0] = (a) => (t(E).account = a)),
                              size: "large",
                              placeholder: t(S)("sys.login.userName"),
                            },
                            null,
                            8,
                            ["value", "placeholder"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    r(
                      t(F),
                      { name: "mobile", class: "enter-x" },
                      {
                        default: u(() => [
                          r(
                            t(m),
                            {
                              value: t(E).email,
                              "onUpdate:value":
                                l[1] || (l[1] = (a) => (t(E).email = a)),
                              size: "large",
                              placeholder: t(S)("sys.login.email"),
                            },
                            null,
                            8,
                            ["value", "placeholder"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    r(
                      t(F),
                      { name: "sms", class: "enter-x" },
                      {
                        default: u(() => [
                          r(
                            t(e),
                            {
                              value: t(E).sms,
                              "onUpdate:value":
                                l[2] || (l[2] = (a) => (t(E).sms = a)),
                              size: "large",
                              placeholder: t(S)("sys.login.verificationCode"),
                              "send-code-api": A,
                            },
                            null,
                            8,
                            ["value", "placeholder"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    r(
                      t(F),
                      { class: "enter-x" },
                      {
                        default: u(() => [
                          r(
                            t(d),
                            {
                              type: "primary",
                              size: "large",
                              block: "",
                              loading: t(T),
                              onClick: U,
                            },
                            {
                              default: u(() => [
                                f(p(t(S)("common.resetText")), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ["loading"]
                          ),
                          r(
                            t(d),
                            {
                              size: "large",
                              block: "",
                              class: "mt-4",
                              onClick: t(b),
                            },
                            {
                              default: u(() => [
                                f(p(t(S)("sys.login.backSignIn")), 1),
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
export { F as _ };

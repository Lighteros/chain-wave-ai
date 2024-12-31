import {
  as as e,
  r as a,
  at as s,
  dj as l,
  c as r,
  a as t,
  bw as o,
  au as i,
  bo as n,
  ax as u,
  aw as c,
  bl as m,
  bM as d,
  bO as p,
  aA as f,
  by as v,
  aD as y,
  u as g,
  aF as P,
  c1 as h,
  ay as x,
  c2 as w,
  dk as b,
  az as N,
  c3 as _,
} from "./index-DPRREYlk.js";
import { S } from "./index-D0386R-z.js";
import { u as j, L as z, b as q } from "./useLogin-BZJOiv0S.js";
import { S as C } from "./index-BPauqaGF.js";
import { C as k } from "./index-DGJYrvBD.js";
import { _ as U, F as T } from "./index-5bY6ZDBk.js";
import "./propTypes-BC7VambV.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./DownOutlined-BDMVSGUf.js";
import "./CheckOutlined-BvF8M63J.js";
import "./Checkbox-KylR2T3k.js";
import "./index-jlJCtu5U.js";
import "./Col-Djm-avAF.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./debounce-CUtJ7ZQO.js";
const E = { class: "input-container", style: { display: "flex" } },
  L = { class: "input-container", style: { display: "flex" } },
  A = { class: "input-container", style: { display: "flex" } },
  R = m("div", null, "Company Size", -1),
  F = { class: "flex-container" },
  I = { class: "checkbox-container" },
  M = { class: "text-container" },
  O = e({
    __name: "RegisterForm",
    setup(e) {
      const { createMessage: O, createErrorModal: D } = _(),
        { t: B } = g(),
        { handleBackLogin: G, getLoginState: V } = j(),
        Y = a(),
        H = a(!1),
        Q = s({
          account: "",
          password: "",
          email: "",
          firstName: "",
          lastName: "",
          confirmPassword: "",
          company: "",
          phoneNumber: "",
          userType: 1,
          sms: "",
          companySize: null,
          title: null,
          requirement: "",
        }),
        W = a([
          { label: "1~10", value: "1~10 Persons" },
          { label: "10~20", value: "10~20 Persons" },
          { label: "20~50", value: "20~50 Persons" },
          { label: "50~100", value: "50~100 Persons" },
          { label: "100~500", value: "100~500 Persons" },
          { label: "500+", value: "500+ Persons" },
        ]),
        X = l("FEDML_TERMS_ACCEPTED", !1),
        Z = a({
          email: [{ required: !0, message: "Please input your Email!" }],
          account: [{ required: !0, message: "Please input your Account!" }],
          password: [
            { required: !0, message: "Please input your Password!" },
            {
              trigger: "change",
              validator: (e, a) =>
                a.length < 10
                  ? Promise.reject("Password length must be greater than 10.")
                  : /[A-Z]/.test(a)
                  ? /[a-z]/.test(a)
                    ? /[\W_]/.test(a)
                      ? Promise.resolve()
                      : Promise.reject(
                          "Password must have at least 1 non-alphanumeric letter."
                        )
                    : Promise.reject(
                        "Password must have at least 1 lowercase letter."
                      )
                  : Promise.reject(
                      "Password must have at least 1 uppercase letter."
                    ),
            },
          ],
          confirmPassword: [
            { required: !0, message: "Please input your ConfirmPassword!" },
            {
              trigger: "change",
              validator: (e, a) =>
                a !== Q.password
                  ? Promise.reject(
                      "The password is different from the one above."
                    )
                  : Promise.resolve(),
            },
          ],
          firstName: [
            { required: !0, message: "Please input your First Name!" },
          ],
          lastName: [{ required: !0, message: "Please input your Last Name!" }],
          requirement: [
            { required: !0, message: "Please input your requirement!" },
          ],
          companySize: [
            { required: !0, message: "Please select your companySize!" },
          ],
          title: [{ required: !0, message: "Please input your title!" }],
          company: [{ required: !0, message: "Please input your company!" }],
        }),
        { validForm: $ } = q(Y),
        J = r(() => t(V) === z.REGISTER);
      async function K() {
        if (!X.value)
          return void P.info("Please read the service and privacy policy");
        if (await $())
          try {
            (H.value = !0),
              (Q.password = await ee(Q.password)),
              (Q.confirmPassword = await ee(Q.confirmPassword));
            const e = await h({ ...Q });
            "SUCCESS" === e.code
              ? (O.success("Registration successful."),
                G(),
                (Q.account = ""),
                (Q.password = ""),
                (Q.email = ""),
                (Q.firstName = ""),
                (Q.lastName = ""),
                (Q.confirmPassword = ""),
                (Q.company = ""),
                (Q.phoneNumber = ""),
                (Q.userType = 1),
                (Q.sms = ""),
                (Q.companySize = null),
                (Q.title = null),
                (Q.requirement = ""))
              : O.warning(e.message);
          } catch (e) {
            D({ title: B("sys.api.apiTimeoutMessage"), content: e });
          } finally {
            (H.value = !1), (Q.password = ""), (Q.confirmPassword = "");
          }
      }
      async function ee(e) {
        const a = new TextEncoder().encode(e),
          s = await crypto.subtle.digest("SHA-256", a);
        return Array.from(new Uint8Array(s))
          .map((e) => e.toString(16).padStart(2, "0"))
          .join("");
      }
      return (e, a) => {
        const s = x,
          l = U,
          r = C,
          g = w,
          P = b,
          h = k,
          _ = o("RouterLink"),
          j = N,
          z = T;
        return t(J)
          ? (i(),
            n(
              z,
              {
                key: 0,
                ref_key: "formRef",
                ref: Y,
                class: "p-4 enter-x",
                model: t(Q),
                rules: t(Z),
              },
              {
                default: u(() => [
                  c(
                    l,
                    { name: "account", class: "enter-x" },
                    {
                      default: u(() => [
                        c(
                          s,
                          {
                            value: t(Q).account,
                            "onUpdate:value":
                              a[0] || (a[0] = (e) => (t(Q).account = e)),
                            class: "fix-auto-fill",
                            size: "large",
                            placeholder: t(B)("sys.login.userName"),
                          },
                          null,
                          8,
                          ["value", "placeholder"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  m("div", E, [
                    c(
                      l,
                      {
                        name: "phoneNumber",
                        class: "enter-x",
                        style: { "margin-right": "10px" },
                      },
                      {
                        default: u(() => [
                          c(
                            s,
                            {
                              value: t(Q).phoneNumber,
                              "onUpdate:value":
                                a[1] || (a[1] = (e) => (t(Q).phoneNumber = e)),
                              size: "large",
                              placeholder: "Mobile (optional)",
                              class: "fix-auto-fill",
                            },
                            null,
                            8,
                            ["value"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      l,
                      { name: "email", class: "enter-x" },
                      {
                        default: u(() => [
                          c(
                            s,
                            {
                              value: t(Q).email,
                              "onUpdate:value":
                                a[2] || (a[2] = (e) => (t(Q).email = e)),
                              class: "fix-auto-fill",
                              size: "large",
                              placeholder: "Email",
                            },
                            null,
                            8,
                            ["value"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  m("div", L, [
                    c(
                      l,
                      {
                        name: "firstName",
                        class: "enter-x",
                        style: { "margin-right": "10px" },
                      },
                      {
                        default: u(() => [
                          c(
                            s,
                            {
                              value: t(Q).firstName,
                              "onUpdate:value":
                                a[3] || (a[3] = (e) => (t(Q).firstName = e)),
                              class: "fix-auto-fill",
                              size: "large",
                              placeholder: "First Name",
                            },
                            null,
                            8,
                            ["value"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      l,
                      { name: "lastName", class: "enter-x" },
                      {
                        default: u(() => [
                          c(
                            s,
                            {
                              value: t(Q).lastName,
                              "onUpdate:value":
                                a[4] || (a[4] = (e) => (t(Q).lastName = e)),
                              class: "fix-auto-fill",
                              size: "large",
                              placeholder: "Last Name",
                            },
                            null,
                            8,
                            ["value"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  m("div", A, [
                    c(
                      l,
                      {
                        name: "company",
                        class: "enter-x",
                        style: { "margin-right": "10px" },
                      },
                      {
                        default: u(() => [
                          c(
                            s,
                            {
                              value: t(Q).company,
                              "onUpdate:value":
                                a[5] || (a[5] = (e) => (t(Q).company = e)),
                              size: "large",
                              placeholder: "Company/University",
                            },
                            null,
                            8,
                            ["value"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    c(
                      l,
                      { name: "title", class: "enter-x" },
                      {
                        default: u(() => [
                          c(
                            s,
                            {
                              value: t(Q).title,
                              "onUpdate:value":
                                a[6] || (a[6] = (e) => (t(Q).title = e)),
                              size: "large",
                              placeholder: "Title",
                            },
                            null,
                            8,
                            ["value"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  c(
                    l,
                    { name: "companySize", class: "enter-x" },
                    {
                      default: u(() => [
                        R,
                        c(
                          r,
                          {
                            value: t(Q).companySize,
                            "onUpdate:value":
                              a[7] || (a[7] = (e) => (t(Q).companySize = e)),
                            class: "fix-auto-fill",
                            size: "large",
                            options: t(W),
                            placeholder: "Company/University Size",
                          },
                          null,
                          8,
                          ["value", "options"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  c(
                    l,
                    { name: "password", class: "enter-x" },
                    {
                      default: u(() => [
                        c(
                          t(S),
                          {
                            value: t(Q).password,
                            "onUpdate:value":
                              a[8] || (a[8] = (e) => (t(Q).password = e)),
                            size: "large",
                            placeholder: t(B)("sys.login.password"),
                          },
                          null,
                          8,
                          ["value", "placeholder"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  c(
                    l,
                    { name: "confirmPassword", class: "enter-x" },
                    {
                      default: u(() => [
                        c(
                          g,
                          {
                            value: t(Q).confirmPassword,
                            "onUpdate:value":
                              a[9] ||
                              (a[9] = (e) => (t(Q).confirmPassword = e)),
                            size: "large",
                            "visibility-toggle": "",
                            placeholder: t(B)("sys.login.confirmPassword"),
                          },
                          null,
                          8,
                          ["value", "placeholder"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  c(
                    l,
                    { name: "requirement", class: "enter-x" },
                    {
                      default: u(() => [
                        c(
                          P,
                          {
                            value: t(Q).requirement,
                            "onUpdate:value":
                              a[10] || (a[10] = (e) => (t(Q).requirement = e)),
                            placeholder: `Tell us about your use case for ${
                              "APP_TITLE" in e ? e.APP_TITLE : t(d)
                            }`,
                            rows: 5,
                          },
                          null,
                          8,
                          ["value", "placeholder"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  c(
                    l,
                    { class: "enter-x" },
                    {
                      default: u(() => [
                        m("div", F, [
                          m("div", I, [
                            c(
                              h,
                              {
                                checked: t(X),
                                "onUpdate:checked":
                                  a[11] ||
                                  (a[11] = (e) =>
                                    p(X) ? (X.value = e) : null),
                                size: "small",
                              },
                              null,
                              8,
                              ["checked"]
                            ),
                          ]),
                          m("div", M, [
                            f(" I have read and agree the "),
                            c(
                              _,
                              {
                                class: "px-1",
                                to: {
                                  name: ("routerNames" in e
                                    ? e.routerNames
                                    : t(v)
                                  ).SERVICE,
                                },
                              },
                              {
                                default: u(() => [f(" Terms of Service ")]),
                                _: 1,
                              },
                              8,
                              ["to"]
                            ),
                            f(" and "),
                            c(
                              _,
                              {
                                class: "px-1",
                                to: {
                                  name: ("routerNames" in e
                                    ? e.routerNames
                                    : t(v)
                                  ).PRIVACYPOLICY,
                                },
                              },
                              {
                                default: u(() => [f(" Privacy Policy ")]),
                                _: 1,
                              },
                              8,
                              ["to"]
                            ),
                          ]),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  c(
                    j,
                    {
                      type: "primary",
                      class: "enter-x",
                      size: "large",
                      block: "",
                      loading: t(H),
                      onClick: K,
                    },
                    { default: u(() => [f(" Sign Up ")]), _: 1 },
                    8,
                    ["loading"]
                  ),
                  c(
                    j,
                    {
                      size: "large",
                      block: "",
                      class: "mt-4 enter-x",
                      onClick: t(G),
                    },
                    { default: u(() => [f(" Back to Sign In ")]), _: 1 },
                    8,
                    ["onClick"]
                  ),
                ]),
                _: 1,
              },
              8,
              ["model", "rules"]
            ))
          : y("", !0);
      };
    },
  });
export { O as default };

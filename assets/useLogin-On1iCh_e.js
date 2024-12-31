import { r as e, c as r, u as s, a as o } from "./index-CcOpQHgp.js";
var a = ((e) => (
  (e[(e.LOGIN = 0)] = "LOGIN"),
  (e[(e.REGISTER = 1)] = "REGISTER"),
  (e[(e.RESET_PASSWORD = 2)] = "RESET_PASSWORD"),
  (e[(e.MOBILE = 3)] = "MOBILE"),
  (e[(e.QR_CODE = 4)] = "QR_CODE"),
  e
))(a || {});
const n = e(0);
function t() {
  function e(e) {
    n.value = e;
  }
  return {
    setLoginState: e,
    getLoginState: r(() => n.value),
    handleBackLogin: function () {
      e(0);
    },
  };
}
function c(e) {
  return {
    validForm: async function () {
      const r = o(e);
      if (!r) return;
      return await r.validate();
    },
  };
}
function i(e) {
  const { t: a } = s(),
    t = r(() => l(a("sys.login.accountPlaceholder"))),
    c = r(() => l(a("sys.login.passwordPlaceholder"))),
    i = r(() => l(a("sys.login.smsPlaceholder"))),
    u = r(() => l(a("sys.login.mobilePlaceholder"))),
    d = async (e, r) =>
      r ? Promise.resolve() : Promise.reject(a("sys.login.policyPlaceholder"));
  return {
    getFormRules: r(() => {
      const r = o(t),
        s = o(c),
        l = { sms: o(i), phoneNumber: o(u) };
      switch (o(n)) {
        case 1:
          return {
            account: r,
            password: s,
            confirmPassword: [
              {
                validator:
                  ((g = e?.password),
                  async (e, r) =>
                    r
                      ? r !== g
                        ? Promise.reject(a("sys.login.diffPwd"))
                        : Promise.resolve()
                      : Promise.reject(a("sys.login.passwordPlaceholder"))),
                trigger: "change",
              },
            ],
            policy: [{ validator: d, trigger: "change" }],
            ...l,
          };
        case 2:
          return { account: r, ...l };
        case 3:
          return l;
        default:
          return { account: r, password: s };
      }
      var g;
    }),
  };
}
function l(e) {
  return [{ required: !0, message: e, trigger: "change" }];
}
export { a as L, i as a, c as b, t as u };

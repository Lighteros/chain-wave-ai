import {
  as as s,
  c as t,
  a as e,
  au as o,
  av as n,
  aB as i,
  u as l,
} from "./index-CcOpQHgp.js";
import { u as a, L as r } from "./useLogin-On1iCh_e.js";
const g = {
    class:
      "mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left",
  },
  m = s({
    __name: "LoginFormTitle",
    setup(s) {
      const { t: m } = l(),
        { getLoginState: x } = a(),
        T = t(
          () =>
            ({
              [r.RESET_PASSWORD]: m("sys.login.forgetFormTitle"),
              [r.LOGIN]: m("sys.login.signInFormTitle"),
              [r.REGISTER]: m("sys.login.signUpFormTitle"),
              [r.MOBILE]: m("sys.login.mobileSignInFormTitle"),
              [r.QR_CODE]: m("sys.login.qrSignInFormTitle"),
            }[e(x)])
        );
      return (s, t) => (o(), n("h2", g, i(e(T)), 1));
    },
  });
export { m as _ };

import {
  cB as e,
  fv as t,
  cC as n,
  as as o,
  bh as s,
  c as a,
  r as i,
  at as r,
  b2 as c,
  au as l,
  bo as u,
  ax as d,
  bl as f,
  aw as p,
  a as h,
  aD as g,
  aA as m,
  eI as y,
  bs as v,
  ay as w,
  az as _,
  bZ as x,
  aL as b,
  fw as k,
  bw as S,
  av as C,
  bY as B,
  co as j,
  bO as z,
  aB as H,
  by as A,
  fx as I,
  aC as L,
  u as R,
  c3 as E,
  bp as F,
  c2 as P,
  fy as U,
} from "./index-DPRREYlk.js";
import { u as $, a as M, L as O, b as T } from "./useLogin-BZJOiv0S.js";
import { c as D } from "./_commonjs-dynamic-modules-BHR_E30J.js";
import { S as N } from "./index-B0yuFjoJ.js";
import { I as q } from "./index-DO9NC2BL.js";
import { _ as Q, F as X } from "./index-5bY6ZDBk.js";
import { _ as V } from "./index-DNofMLzB.js";
import { C as G } from "./index-DGJYrvBD.js";
import { _ as W } from "./index-u_fLo2At.js";
import { _ as Y } from "./index-BoKZCklY.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./Col-Djm-avAF.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./debounce-CUtJ7ZQO.js";
import "./Checkbox-KylR2T3k.js";
import "./index-jlJCtu5U.js";
var K,
  Z,
  J = { exports: {} },
  ee = { exports: {} };
function te() {
  return (
    K ||
      ((K = 1),
      (ee.exports =
        ((n =
          n ||
          (function (n, o) {
            var s;
            if (
              ("undefined" != typeof window &&
                window.crypto &&
                (s = window.crypto),
              "undefined" != typeof self && self.crypto && (s = self.crypto),
              "undefined" != typeof globalThis &&
                globalThis.crypto &&
                (s = globalThis.crypto),
              !s &&
                "undefined" != typeof window &&
                window.msCrypto &&
                (s = window.msCrypto),
              !s && void 0 !== e && e.crypto && (s = e.crypto),
              !s && "function" == typeof D)
            )
              try {
                s = t;
              } catch (y) {}
            var a = function () {
                if (s) {
                  if ("function" == typeof s.getRandomValues)
                    try {
                      return s.getRandomValues(new Uint32Array(1))[0];
                    } catch (y) {}
                  if ("function" == typeof s.randomBytes)
                    try {
                      return s.randomBytes(4).readInt32LE();
                    } catch (y) {}
                }
                throw new Error(
                  "Native crypto module could not be used to get secure random number."
                );
              },
              i =
                Object.create ||
                (function () {
                  function e() {}
                  return function (t) {
                    var n;
                    return (
                      (e.prototype = t), (n = new e()), (e.prototype = null), n
                    );
                  };
                })(),
              r = {},
              c = (r.lib = {}),
              l = (c.Base = {
                extend: function (e) {
                  var t = i(this);
                  return (
                    e && t.mixIn(e),
                    (t.hasOwnProperty("init") && this.init !== t.init) ||
                      (t.init = function () {
                        t.$super.init.apply(this, arguments);
                      }),
                    (t.init.prototype = t),
                    (t.$super = this),
                    t
                  );
                },
                create: function () {
                  var e = this.extend();
                  return e.init.apply(e, arguments), e;
                },
                init: function () {},
                mixIn: function (e) {
                  for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                  e.hasOwnProperty("toString") && (this.toString = e.toString);
                },
                clone: function () {
                  return this.init.prototype.extend(this);
                },
              }),
              u = (c.WordArray = l.extend({
                init: function (e, t) {
                  (e = this.words = e || []),
                    (this.sigBytes = t != o ? t : 4 * e.length);
                },
                toString: function (e) {
                  return (e || f).stringify(this);
                },
                concat: function (e) {
                  var t = this.words,
                    n = e.words,
                    o = this.sigBytes,
                    s = e.sigBytes;
                  if ((this.clamp(), o % 4))
                    for (var a = 0; a < s; a++) {
                      var i = (n[a >>> 2] >>> (24 - (a % 4) * 8)) & 255;
                      t[(o + a) >>> 2] |= i << (24 - ((o + a) % 4) * 8);
                    }
                  else
                    for (var r = 0; r < s; r += 4)
                      t[(o + r) >>> 2] = n[r >>> 2];
                  return (this.sigBytes += s), this;
                },
                clamp: function () {
                  var e = this.words,
                    t = this.sigBytes;
                  (e[t >>> 2] &= 4294967295 << (32 - (t % 4) * 8)),
                    (e.length = n.ceil(t / 4));
                },
                clone: function () {
                  var e = l.clone.call(this);
                  return (e.words = this.words.slice(0)), e;
                },
                random: function (e) {
                  for (var t = [], n = 0; n < e; n += 4) t.push(a());
                  return new u.init(t, e);
                },
              })),
              d = (r.enc = {}),
              f = (d.Hex = {
                stringify: function (e) {
                  for (
                    var t = e.words, n = e.sigBytes, o = [], s = 0;
                    s < n;
                    s++
                  ) {
                    var a = (t[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
                    o.push((a >>> 4).toString(16)),
                      o.push((15 & a).toString(16));
                  }
                  return o.join("");
                },
                parse: function (e) {
                  for (var t = e.length, n = [], o = 0; o < t; o += 2)
                    n[o >>> 3] |=
                      parseInt(e.substr(o, 2), 16) << (24 - (o % 8) * 4);
                  return new u.init(n, t / 2);
                },
              }),
              p = (d.Latin1 = {
                stringify: function (e) {
                  for (
                    var t = e.words, n = e.sigBytes, o = [], s = 0;
                    s < n;
                    s++
                  ) {
                    var a = (t[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
                    o.push(String.fromCharCode(a));
                  }
                  return o.join("");
                },
                parse: function (e) {
                  for (var t = e.length, n = [], o = 0; o < t; o++)
                    n[o >>> 2] |= (255 & e.charCodeAt(o)) << (24 - (o % 4) * 8);
                  return new u.init(n, t);
                },
              }),
              h = (d.Utf8 = {
                stringify: function (e) {
                  try {
                    return decodeURIComponent(escape(p.stringify(e)));
                  } catch (t) {
                    throw new Error("Malformed UTF-8 data");
                  }
                },
                parse: function (e) {
                  return p.parse(unescape(encodeURIComponent(e)));
                },
              }),
              g = (c.BufferedBlockAlgorithm = l.extend({
                reset: function () {
                  (this._data = new u.init()), (this._nDataBytes = 0);
                },
                _append: function (e) {
                  "string" == typeof e && (e = h.parse(e)),
                    this._data.concat(e),
                    (this._nDataBytes += e.sigBytes);
                },
                _process: function (e) {
                  var t,
                    o = this._data,
                    s = o.words,
                    a = o.sigBytes,
                    i = this.blockSize,
                    r = a / (4 * i),
                    c =
                      (r = e
                        ? n.ceil(r)
                        : n.max((0 | r) - this._minBufferSize, 0)) * i,
                    l = n.min(4 * c, a);
                  if (c) {
                    for (var d = 0; d < c; d += i) this._doProcessBlock(s, d);
                    (t = s.splice(0, c)), (o.sigBytes -= l);
                  }
                  return new u.init(t, l);
                },
                clone: function () {
                  var e = l.clone.call(this);
                  return (e._data = this._data.clone()), e;
                },
                _minBufferSize: 0,
              }));
            c.Hasher = g.extend({
              cfg: l.extend(),
              init: function (e) {
                (this.cfg = this.cfg.extend(e)), this.reset();
              },
              reset: function () {
                g.reset.call(this), this._doReset();
              },
              update: function (e) {
                return this._append(e), this._process(), this;
              },
              finalize: function (e) {
                return e && this._append(e), this._doFinalize();
              },
              blockSize: 16,
              _createHelper: function (e) {
                return function (t, n) {
                  return new e.init(n).finalize(t);
                };
              },
              _createHmacHelper: function (e) {
                return function (t, n) {
                  return new m.HMAC.init(e, n).finalize(t);
                };
              },
            });
            var m = (r.algo = {});
            return r;
          })(Math)),
        n))),
    ee.exports
  );
  var n;
}
const ne = n(
    (J.exports =
      ((Z = te()),
      (function (e) {
        var t = Z,
          n = t.lib,
          o = n.WordArray,
          s = n.Hasher,
          a = t.algo,
          i = [],
          r = [];
        !(function () {
          function t(t) {
            for (var n = e.sqrt(t), o = 2; o <= n; o++) if (!(t % o)) return !1;
            return !0;
          }
          function n(e) {
            return (4294967296 * (e - (0 | e))) | 0;
          }
          for (var o = 2, s = 0; s < 64; )
            t(o) &&
              (s < 8 && (i[s] = n(e.pow(o, 0.5))),
              (r[s] = n(e.pow(o, 1 / 3))),
              s++),
              o++;
        })();
        var c = [],
          l = (a.SHA256 = s.extend({
            _doReset: function () {
              this._hash = new o.init(i.slice(0));
            },
            _doProcessBlock: function (e, t) {
              for (
                var n = this._hash.words,
                  o = n[0],
                  s = n[1],
                  a = n[2],
                  i = n[3],
                  l = n[4],
                  u = n[5],
                  d = n[6],
                  f = n[7],
                  p = 0;
                p < 64;
                p++
              ) {
                if (p < 16) c[p] = 0 | e[t + p];
                else {
                  var h = c[p - 15],
                    g =
                      ((h << 25) | (h >>> 7)) ^
                      ((h << 14) | (h >>> 18)) ^
                      (h >>> 3),
                    m = c[p - 2],
                    y =
                      ((m << 15) | (m >>> 17)) ^
                      ((m << 13) | (m >>> 19)) ^
                      (m >>> 10);
                  c[p] = g + c[p - 7] + y + c[p - 16];
                }
                var v = (o & s) ^ (o & a) ^ (s & a),
                  w =
                    ((o << 30) | (o >>> 2)) ^
                    ((o << 19) | (o >>> 13)) ^
                    ((o << 10) | (o >>> 22)),
                  _ =
                    f +
                    (((l << 26) | (l >>> 6)) ^
                      ((l << 21) | (l >>> 11)) ^
                      ((l << 7) | (l >>> 25))) +
                    ((l & u) ^ (~l & d)) +
                    r[p] +
                    c[p];
                (f = d),
                  (d = u),
                  (u = l),
                  (l = (i + _) | 0),
                  (i = a),
                  (a = s),
                  (s = o),
                  (o = (_ + (w + v)) | 0);
              }
              (n[0] = (n[0] + o) | 0),
                (n[1] = (n[1] + s) | 0),
                (n[2] = (n[2] + a) | 0),
                (n[3] = (n[3] + i) | 0),
                (n[4] = (n[4] + l) | 0),
                (n[5] = (n[5] + u) | 0),
                (n[6] = (n[6] + d) | 0),
                (n[7] = (n[7] + f) | 0);
            },
            _doFinalize: function () {
              var t = this._data,
                n = t.words,
                o = 8 * this._nDataBytes,
                s = 8 * t.sigBytes;
              return (
                (n[s >>> 5] |= 128 << (24 - (s % 32))),
                (n[14 + (((s + 64) >>> 9) << 4)] = e.floor(o / 4294967296)),
                (n[15 + (((s + 64) >>> 9) << 4)] = o),
                (t.sigBytes = 4 * n.length),
                this._process(),
                this._hash
              );
            },
            clone: function () {
              var e = s.clone.call(this);
              return (e._hash = this._hash.clone()), e;
            },
          }));
        (t.SHA256 = s._createHelper(l)),
          (t.HmacSHA256 = s._createHmacHelper(l));
      })(Math),
      Z.SHA256))
  ),
  oe = f(
    "p",
    null,
    [
      m(" Please use "),
      f(
        "a",
        {
          href: "https://www.microsoft.com/en-us/security/mobile-authenticator-app",
          target: "_blank",
        },
        "Microsoft Authenticator "
      ),
      m(" to scan the QR Code below: "),
    ],
    -1
  ),
  se = { class: "flex flex-col gap-2 items-center" },
  ae = { class: "flex justify-center gap-2" },
  ie = o({
    __name: "MFA",
    props: { account: {}, token: {}, hideQr: { type: Boolean } },
    emits: ["finish", "cancel"],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        x = s(),
        b = a(() => n.account || x.getUserInfo.account),
        k = i(!1),
        S = i(""),
        C = r({ code: "" }),
        B = r({ code: [{ required: !0, trigger: "change" }] }),
        j = a(() =>
          n.token ? { headers: { Authorization: n.token, token: n.token } } : {}
        );
      async function z() {
        k.value = !0;
        const e = await y("/api/v1/client/user/verifyQrCode").post({
          body: { account: b.value, code: C.code },
          ...j.value,
        });
        "SUCCESS" !== e.code || !0 !== e.data
          ? v.error(
              "The 2FA fails, please check your identification code again."
            )
          : o("finish", e.data);
      }
      return (
        c(() => {
          b.value &&
            !n.hideQr &&
            (async function () {
              k.value = !0;
              const e = await y("/api/v1/client/user/getQrCodeUrl")
                .get({ query: { account: b.value }, ...j.value })
                .then((e) => e.data)
                .catch(() => "");
              (k.value = !1), (S.value = e);
            })();
        }),
        (e, t) => {
          const n = N,
            s = q,
            a = Q,
            i = w,
            r = V,
            c = _,
            y = X;
          return (
            l(),
            u(
              y,
              {
                class:
                  "p-4 my-4 enter-x border-gray-200 border-solid shadow-sm rounded-md",
                layout: "vertical",
                model: h(C),
                rules: h(B),
                onFinish: z,
              },
              {
                default: d(() => [
                  e.hideQr
                    ? g("", !0)
                    : (l(),
                      u(
                        a,
                        { key: 0, label: "Scan the QR Code:" },
                        {
                          default: d(() => [
                            oe,
                            f("div", se, [
                              p(
                                s,
                                { width: 128, "preview-mask": !1, src: h(S) },
                                {
                                  placeholder: d(() => [
                                    p(n, {
                                      avatar: "",
                                      active: "",
                                      class: "w-128px w-128px",
                                    }),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["src"]
                              ),
                            ]),
                          ]),
                          _: 1,
                        }
                      )),
                  p(
                    a,
                    { name: "code", label: "Verify the code from the app:" },
                    {
                      default: d(() => [
                        p(
                          i,
                          {
                            value: h(C).code,
                            "onUpdate:value":
                              t[0] || (t[0] = (e) => (h(C).code = e)),
                            placeholder: "XXXXXX",
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  p(r),
                  p(a, null, {
                    default: d(() => [
                      f("div", ae, [
                        p(
                          c,
                          {
                            type: "primary",
                            size: "large",
                            ghost: "",
                            "html-type": "button",
                            loading: h(k),
                            onClick: t[1] || (t[1] = (e) => o("cancel")),
                          },
                          { default: d(() => [m(" Cancel ")]), _: 1 },
                          8,
                          ["loading"]
                        ),
                        p(
                          c,
                          {
                            type: "primary",
                            size: "large",
                            "html-type": "submit",
                            loading: h(k),
                          },
                          { default: d(() => [m(" Confirm ")]), _: 1 },
                          8,
                          ["loading"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
              8,
              ["model", "rules"]
            )
          );
        }
      );
    },
  }),
  re = f("div", { class: "w-full text-center" }, " Sign In with Github ", -1),
  ce = { id: "buttonDiv", style: { width: "370px", "margin-left": "14px" } },
  le = { class: "text-center text-dark-100 text-lg my-2" },
  ue = { class: "flex-container" },
  de = { class: "text-container" },
  fe = o({
    __name: "LoginForm",
    props: { goHome: { type: Boolean, default: !0 } },
    emits: ["success", "error"],
    setup(e, { emit: t }) {
      const n = e,
        o = t,
        { t: c } = R(),
        y = i(1),
        { notification: v, createErrorModal: D } = E(),
        { prefixCls: N } = x("login"),
        q = s(),
        { setLoginState: V, getLoginState: K } = $(),
        { getFormRules: Z } = M(),
        J = i(),
        ee = i(!1),
        te = i(!1);
      function oe(e) {
        ve(e.credential, 2);
      }
      b(() => {
        const e = window.location.search;
        if (e && "" !== e) {
          const t = e.split("?code=")[1];
          t && "" !== t && ve(t, 3);
        }
        try {
          google.accounts.id.initialize({
            client_id:
              "340242892513-0v2dttr8krdpkbtfok5lp5sk62647h9v.apps.googleusercontent.com",
            context: "signin",
            ux_mode: "popup",
            auto_select: !0,
            callback: oe,
          }),
            google.accounts.id.renderButton(
              document.getElementById("buttonDiv"),
              {
                type: "standard",
                shape: "rectangular",
                theme: "filled_black",
                text: "signin_with",
                size: "large",
                logo_alignment: "left",
                width: 370,
              }
            );
        } catch (t) {}
      });
      const se = r({ account: "", password: "" }),
        ae = i(""),
        { validForm: fe } = T(J),
        pe = a(() => h(K) === O.LOGIN && 1 === y.value),
        he = a(() => h(K) === O.LOGIN && 2 === y.value && ae.value),
        ge = i(null);
      async function me() {
        const e = await fe();
        if (e)
          try {
            ee.value = !0;
            const t = await ne(e.password).toString(),
              s = await q.login({
                goHome: n.goHome,
                password: t,
                name: e.account,
                loginChannel: 1,
                mode: "none",
              });
            o("success"),
              s &&
                v.success({
                  message: c("sys.login.loginSuccessTitle"),
                  description: `${c("sys.login.loginSuccessDesc")}: ${
                    s.account
                  }`,
                  duration: 3,
                });
          } catch (t) {
            "MFA is requried" === t.message
              ? ((y.value = 2),
                (ge.value = t.cause),
                (ae.value = t.cause.account))
              : D({
                  title: "Warning",
                  content: t.message || c("sys.api.networkExceptionMsg"),
                  getContainer: () =>
                    document.body.querySelector(`.${N}`) || document.body,
                });
          } finally {
            ee.value = !1;
          }
      }
      function ye() {
        ge.value &&
          q.afterLoginAction(n.goHome, ge.value).then(() => {
            o("success");
          });
      }
      async function ve(e, t) {
        try {
          ee.value = !0;
          const s = await q.login({
            goHome: n.goHome,
            loginChannel: t,
            token: e,
            mode: "none",
          });
          s &&
            v.success({
              message: c("sys.login.loginSuccessTitle"),
              description: `${c("sys.login.loginSuccessDesc")}: ${s.account}`,
              duration: 3,
            }),
            o("success");
        } catch (s) {
          D({
            title: c("sys.api.errorTip"),
            content: s.message || c("sys.api.networkExceptionMsg"),
            getContainer: () =>
              document.body.querySelector(`.${N}`) || document.body,
          });
        } finally {
          ee.value = !1;
        }
      }
      const { devlopEnv: we } = k();
      function _e() {
        let e = "";
        const t = "https://tensoropera.ai";
        "dev" === we || "test" === we
          ? (e = `https://github.com/login/oauth/authorize?client_id=${U}\n&redirect_uri=${t}`)
          : "prod" === we &&
            (e = `https://github.com/login/oauth/authorize?client_id=${U}`),
          (window.location.href = e);
      }
      return (e, t) => {
        const n = F,
          o = w,
          s = Q,
          a = P,
          i = G,
          r = W,
          v = _,
          x = Y,
          b = S("RouterLink"),
          k = X;
        return (
          l(),
          C(
            L,
            null,
            [
              B(
                f(
                  "div",
                  {
                    class: "githubButton flex items-center",
                    style: { width: "370px", "margin-left": "14px" },
                    onClick: _e,
                  },
                  [
                    p(n, { icon: "i-icon:github", class: "mx-2 !w-8 !h-8" }),
                    re,
                  ],
                  512
                ),
                [[j, h(pe)]]
              ),
              B(f("div", ce, null, 512), [[j, h(pe)]]),
              B(f("div", le, " or ", 512), [[j, h(pe)]]),
              B(
                p(
                  k,
                  {
                    ref_key: "formRef",
                    ref: J,
                    class: "p-4 enter-x",
                    model: h(se),
                    rules: h(Z),
                    onKeypress: I(me, ["enter"]),
                  },
                  {
                    default: d(() => [
                      p(
                        s,
                        { name: "account", class: "enter-x" },
                        {
                          default: d(() => [
                            p(
                              o,
                              {
                                value: h(se).account,
                                "onUpdate:value":
                                  t[0] || (t[0] = (e) => (h(se).account = e)),
                                size: "large",
                                placeholder: h(c)("sys.login.userName"),
                                class: "",
                              },
                              null,
                              8,
                              ["value", "placeholder"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      p(
                        s,
                        { name: "password", class: "enter-x" },
                        {
                          default: d(() => [
                            p(
                              a,
                              {
                                value: h(se).password,
                                "onUpdate:value":
                                  t[1] || (t[1] = (e) => (h(se).password = e)),
                                size: "large",
                                "visibility-toggle": "",
                                placeholder: h(c)("sys.login.password"),
                                class: "",
                              },
                              null,
                              8,
                              ["value", "placeholder"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      p(
                        x,
                        { class: "enter-x" },
                        {
                          default: d(() => [
                            p(
                              r,
                              { span: 12 },
                              {
                                default: d(() => [
                                  p(s, null, {
                                    default: d(() => [
                                      p(
                                        i,
                                        {
                                          checked: h(te),
                                          "onUpdate:checked":
                                            t[2] ||
                                            (t[2] = (e) =>
                                              z(te) ? (te.value = e) : null),
                                          size: "small",
                                        },
                                        {
                                          default: d(() => [
                                            m(
                                              H(h(c)("sys.login.rememberMe")),
                                              1
                                            ),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["checked"]
                                      ),
                                    ]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              }
                            ),
                            p(
                              r,
                              { span: 12 },
                              {
                                default: d(() => [
                                  p(
                                    s,
                                    { class: "text-right" },
                                    {
                                      default: d(() => [
                                        p(
                                          v,
                                          {
                                            type: "link",
                                            size: "small",
                                            onClick:
                                              t[3] ||
                                              (t[3] = (e) =>
                                                h(V)(h(O).RESET_PASSWORD)),
                                          },
                                          {
                                            default: d(() => [
                                              m(
                                                H(
                                                  h(c)(
                                                    "sys.login.forgetPassword"
                                                  )
                                                ),
                                                1
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      p(
                        s,
                        { class: "enter-x" },
                        {
                          default: d(() => [
                            p(
                              v,
                              {
                                type: "primary",
                                size: "large",
                                block: "",
                                loading: h(ee),
                                onClick: me,
                              },
                              {
                                default: d(() => [
                                  m(H(h(c)("sys.login.loginButton")), 1),
                                ]),
                                _: 1,
                              },
                              8,
                              ["loading"]
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                      p(x, { class: "enter-x" }),
                      p(
                        s,
                        { class: "enter-x" },
                        {
                          default: d(() => [
                            f("div", ue, [
                              f("div", de, [
                                m(" By clicking sign in, I agree to the "),
                                p(
                                  b,
                                  {
                                    class: "px-1",
                                    to: {
                                      name: ("routerNames" in e
                                        ? e.routerNames
                                        : h(A)
                                      ).SERVICE,
                                    },
                                  },
                                  {
                                    default: d(() => [m(" Terms of Service ")]),
                                    _: 1,
                                  },
                                  8,
                                  ["to"]
                                ),
                                m(" and "),
                                p(
                                  b,
                                  {
                                    class: "px-1",
                                    to: {
                                      name: ("routerNames" in e
                                        ? e.routerNames
                                        : h(A)
                                      ).PRIVACYPOLICY,
                                    },
                                  },
                                  {
                                    default: d(() => [m(" Privacy Policy ")]),
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
                    ]),
                    _: 1,
                  },
                  8,
                  ["model", "rules"]
                ),
                [[j, h(pe)]]
              ),
              h(he)
                ? (l(),
                  u(
                    ie,
                    {
                      key: 0,
                      account: h(ae),
                      token: h(ge)?.token,
                      "hide-qr": "",
                      onFinish: ye,
                      onCancel:
                        t[4] ||
                        (t[4] = () => {
                          (y.value = 1), (ae.value = "");
                        }),
                    },
                    null,
                    8,
                    ["account", "token"]
                  ))
                : g("", !0),
            ],
            64
          )
        );
      };
    },
  });
export { fe as default };

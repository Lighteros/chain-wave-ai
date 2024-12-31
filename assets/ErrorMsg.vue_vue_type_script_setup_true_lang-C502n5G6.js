import {
  as as e,
  br as a,
  bw as s,
  au as i,
  av as o,
  bl as n,
  aw as t,
  aA as r,
  a as l,
  ax as c,
  bx as d,
  by as u,
  aB as m,
  bp as g,
  az as y,
} from "./index-DPRREYlk.js";
const b = { key: 0, class: "w-full" },
  p = { class: "text-orange-600" },
  v = { key: 0, class: "mb-2" },
  k = n(
    "div",
    { class: "mb-2" },
    " Please click the sign in button below to access the full functionality of the playground. ",
    -1
  ),
  h = { key: 1, class: "mb-2" },
  f = { class: "mb-2" },
  P = { key: 2 },
  w = { class: "mb-2" },
  _ = { key: 1 },
  x = { class: "text-orange-600" },
  A = { key: 0, class: "mb-2" },
  E = n(
    "div",
    { class: "mb-2" },
    " Please click the sign in button below to access the full functionality of the playground. ",
    -1
  ),
  I = { key: 1, class: "mb-2" },
  N = [n("div", { class: "mb-2" }, " Please try again later ", -1)],
  L = { key: 2 },
  T = { class: "text-orange-600" },
  C = { class: "mb-2" },
  M = { class: "mb-2" },
  S = { key: 3 },
  B = { class: "text-orange-600" },
  D = n(
    "div",
    { class: "mb-2" },
    " An unknown error occurred. Please try again later. ",
    -1
  ),
  O = e({
    __name: "ErrorMsg",
    props: { errcode: {}, isPublicPlayground: { type: Boolean }, msg: {} },
    setup(e) {
      const O = e,
        Y = a();
      return (e, a) => {
        const j = g,
          z = y,
          H = s("router-link");
        return 429 == O.errcode
          ? (i(),
            o("div", b, [
              n("h2", p, [
                t(j, { icon: "i-ion:warning" }),
                r("You have been ratelimited "),
              ]),
              l(Y)
                ? O.isPublicPlayground
                  ? (i(),
                    o("div", h, [
                      n("div", f, [
                        r(
                          " To access higher ratelimits using your own API key, go to the "
                        ),
                        t(
                          H,
                          {
                            to: {
                              name: ("routerNames" in e ? e.routerNames : l(u))
                                .LLM_CHATBOT,
                            },
                          },
                          {
                            default: c(() => [r(" dedicated playground ")]),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ),
                      ]),
                    ]))
                  : (i(),
                    o("div", P, [
                      n("div", w, [
                        r(
                          " Please wait a moment before trying again. If this is a public endpoint, consider deploying a private endpoint at "
                        ),
                        t(
                          H,
                          {
                            to: {
                              name: ("routerNames" in e ? e.routerNames : l(u))
                                .DEPLOY_CREATE_ENDPOINTS,
                            },
                          },
                          {
                            default: c(() => [r(" AI Production > Deploy ")]),
                            _: 1,
                          },
                          8,
                          ["to"]
                        ),
                      ]),
                    ]))
                : (i(),
                  o("div", v, [
                    k,
                    t(
                      z,
                      {
                        type: "primary",
                        onClick:
                          a[0] ||
                          (a[0] = (e) => l(d).emit("openLoginModal", !0)),
                      },
                      { default: c(() => [r(" Sign In ")]), _: 1 }
                    ),
                  ])),
            ]))
          : 503 == O.errcode
          ? (i(),
            o("div", _, [
              n("h2", x, [t(j, { icon: "i-ion:warning" }), r("System busy ")]),
              l(Y)
                ? (i(), o("div", I, N))
                : (i(),
                  o("div", A, [
                    E,
                    t(
                      z,
                      {
                        type: "primary",
                        onClick:
                          a[1] ||
                          (a[1] = (e) => l(d).emit("openLoginModal", !0)),
                      },
                      { default: c(() => [r(" Sign In ")]), _: 1 }
                    ),
                  ])),
            ]))
          : 400 == O.errcode && O.msg
          ? (i(),
            o("div", L, [
              n("h2", T, [t(j, { icon: "i-ion:warning" }), r("API Error ")]),
              n("div", C, [n("div", M, m(O.msg.output), 1)]),
            ]))
          : (i(),
            o("div", S, [
              n("h2", B, [t(j, { icon: "i-ion:warning" }), r("Error ")]),
              D,
            ]));
      };
    },
  });
export { O as _ };

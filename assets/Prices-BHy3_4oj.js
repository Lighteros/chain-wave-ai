import {
  as as e,
  br as i,
  c as t,
  a as o,
  au as n,
  bo as s,
  ax as a,
  bl as l,
  av as c,
  aB as p,
  aD as d,
  aw as r,
  aA as u,
  bp as P,
  az as m,
  cR as x,
} from "./index-DPRREYlk.js";
const b = { class: "pl0 mb-0 list-none" },
  g = { key: 0 },
  f = l("span", { class: "font-bold" }, " Input: ", -1),
  k = { class: "text-right" },
  y = { key: 1 },
  h = l("span", { class: "font-bold" }, " Output: ", -1),
  $ = { class: "text-right" },
  w = { key: 2 },
  A = l("span", { class: "font-bold w-70px" }, " Request: ", -1),
  V = { class: "text-right" },
  I = { key: 3 },
  q = l("span", { class: "font-bold w-70px" }, " Formula: ", -1),
  O = { class: "text-right" },
  _ = { key: 4 },
  v = l("span", { class: "font-bold w-70px" }, " Image: ", -1),
  S = { class: "text-right" },
  T = { key: 5 },
  j = l("span", { class: "font-bold w-70px" }, " Input Audio: ", -1),
  F = { class: "text-right" },
  M = { key: 6 },
  R = l("span", { class: "font-bold w-70px" }, " Output Audio: ", -1),
  z = { class: "text-right" },
  B = { key: 7 },
  D = l("span", { class: "font-bold w-70px" }, " Input Video: ", -1),
  N = { class: "text-right" },
  C = { key: 8 },
  E = l("span", { class: "font-bold w-70px" }, " Output Video: ", -1),
  G = { class: "text-right" },
  H = e({
    __name: "Prices",
    props: { endpoint: {} },
    setup(e) {
      const H = e,
        J = i(),
        K = t(
          () =>
            !H.endpoint.modelPrice ||
            Object.values(H.endpoint.modelPrice).every(
              (e) => 0 === e || null == e
            )
        );
      return (e, i) => {
        const t = P,
          L = m,
          Q = x;
        return o(J) && !o(K)
          ? (n(),
            s(
              Q,
              { key: 0, color: "gold" },
              {
                title: a(() => [
                  l("ul", b, [
                    H.endpoint.modelPrice?.inputPrice
                      ? (n(),
                        c("li", g, [
                          f,
                          l(
                            "span",
                            k,
                            " $" +
                              p(H.endpoint.modelPrice?.inputPrice || 0) +
                              " /Million Tokens. ",
                            1
                          ),
                        ]))
                      : d("", !0),
                    H.endpoint.modelPrice?.outputPrice
                      ? (n(),
                        c("li", y, [
                          h,
                          l(
                            "span",
                            $,
                            " $" +
                              p(H.endpoint.modelPrice?.outputPrice || 0) +
                              " /Million Tokens. ",
                            1
                          ),
                        ]))
                      : d("", !0),
                    H.endpoint.modelPrice?.requestPrice
                      ? (n(),
                        c("li", w, [
                          A,
                          l(
                            "span",
                            V,
                            " $" +
                              p(H.endpoint.modelPrice?.requestPrice || 0) +
                              " /Time. ",
                            1
                          ),
                        ]))
                      : d("", !0),
                    H.endpoint.modelPrice?.requestPrice
                      ? (n(),
                        c("li", I, [
                          q,
                          l(
                            "span",
                            O,
                            " $" +
                              p(H.endpoint.modelPrice?.calculateFormula || "-"),
                            1
                          ),
                        ]))
                      : d("", !0),
                    H.endpoint.modelPrice?.imagePrice
                      ? (n(),
                        c("li", _, [
                          v,
                          l(
                            "span",
                            S,
                            " $" +
                              p(H.endpoint.modelPrice?.imagePrice || 0) +
                              " /Image. ",
                            1
                          ),
                        ]))
                      : d("", !0),
                    H.endpoint.modelPrice?.inputAudioPrice
                      ? (n(),
                        c("li", T, [
                          j,
                          l(
                            "span",
                            F,
                            " $" +
                              p(H.endpoint.modelPrice?.inputAudioPrice || 0) +
                              " /Second. ",
                            1
                          ),
                        ]))
                      : d("", !0),
                    H.endpoint.modelPrice?.outputAudioPrice
                      ? (n(),
                        c("li", M, [
                          R,
                          l(
                            "span",
                            z,
                            " $" +
                              p(H.endpoint.modelPrice?.outputAudioPrice || 0) +
                              " /Second. ",
                            1
                          ),
                        ]))
                      : d("", !0),
                    H.endpoint.modelPrice?.inputVideoPrice
                      ? (n(),
                        c("li", B, [
                          D,
                          l(
                            "span",
                            N,
                            " $" +
                              p(H.endpoint.modelPrice?.inputVideoPrice || 0) +
                              " /Video. ",
                            1
                          ),
                        ]))
                      : d("", !0),
                    H.endpoint.modelPrice?.outputVideoPrice
                      ? (n(),
                        c("li", C, [
                          E,
                          l(
                            "span",
                            G,
                            " $" +
                              p(H.endpoint.modelPrice?.outputVideoPrice || 0) +
                              " /Number of Step. ",
                            1
                          ),
                        ]))
                      : d("", !0),
                  ]),
                ]),
                default: a(() => [
                  r(
                    L,
                    { class: "ml-auto text-amber", shape: "round" },
                    {
                      default: a(() => [
                        r(t, {
                          class: "cursor-pointer",
                          color: "gold",
                          icon: "i-ion:md-pricetags",
                        }),
                        u(" Price "),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ))
          : d("", !0);
      };
    },
  });
export { H as default };

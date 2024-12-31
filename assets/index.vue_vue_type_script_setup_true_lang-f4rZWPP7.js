import {
  as as e,
  r as a,
  c as t,
  aL as s,
  bM as n,
  au as i,
  bo as o,
  ax as l,
  a as r,
  av as u,
  aw as p,
  aA as c,
  aB as d,
  bl as y,
  bN as f,
  aC as v,
  bO as m,
  az as g,
  bP as h,
} from "./index-DPRREYlk.js";
const x = { style: { "justify-content": "center", padding: "10px" } },
  k = { key: 0, style: { "text-align": "center" } },
  b = { key: 1, flex: "~ items-center gap-2 justify-center" },
  w = e({
    __name: "index",
    props: { isDisplay: { type: Boolean }, source: {} },
    emits: ["handleOk", "tryNow"],
    setup(e, { emit: w }) {
      const C = e,
        _ = w,
        N = a(!1),
        $ = a(""),
        B = a(""),
        D = t({ get: () => C.isDisplay, set: (e) => _("update:isDisplay", e) }),
        j = t(() => !0),
        O = t(() => [
          "You have received a $20 voucher to explore and try our platform’s products. If you require a larger usage plan or have additional needs, feel free to contact us.",
        ]);
      function U() {
        (N.value = !0), _("handleOk"), (N.value = !1);
      }
      return (
        s(() => {
          switch (C.source) {
            case "billing":
              ($.value = "Consent & Enter your credit card"),
                (B.value = "Billing information and process");
              break;
            case "trainAndDeploy":
              ($.value = "Visit Billing"),
                (B.value = `This task will run on the ${n} GPU Cloud`);
          }
        }),
        (e, a) => {
          const t = g,
            s = h;
          return (
            i(),
            o(
              s,
              {
                open: r(D),
                "onUpdate:open":
                  a[2] || (a[2] = (e) => (m(D) ? (D.value = e) : null)),
                title: r(B),
                style: { padding: "40px", height: "200px", width: "600px" },
                "confirm-loading": r(N),
                onCancel: a[3] || (a[3] = (a) => e.$emit("tryNow")),
              },
              {
                footer: l(() => [
                  r(j)
                    ? (i(),
                      u("div", b, [
                        p(
                          t,
                          {
                            onClick:
                              a[0] ||
                              (a[0] = () => {
                                (D.value = !1),
                                  e.$router.push({ path: "/team/contact" });
                              }),
                          },
                          { default: l(() => [c(" Contact Us ")]), _: 1 }
                        ),
                        p(
                          t,
                          {
                            type: "primary",
                            onClick:
                              a[1] ||
                              (a[1] = () => {
                                (D.value = !1), e.$emit("tryNow");
                              }),
                          },
                          { default: l(() => [c(" Try Now ")]), _: 1 }
                        ),
                      ]))
                    : (i(),
                      u("div", k, [
                        p(
                          t,
                          { type: "primary", onClick: U },
                          { default: l(() => [c(d(r($)), 1)]), _: 1 }
                        ),
                      ])),
                ]),
                default: l(() => [
                  y("div", x, [
                    (i(!0),
                    u(
                      v,
                      null,
                      f(r(O), (e, a) => (i(), u("p", { key: a }, d(e), 1))),
                      128
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["open", "title", "confirm-loading"]
            )
          );
        }
      );
    },
  });
export { w as _ };

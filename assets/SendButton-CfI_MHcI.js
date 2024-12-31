import {
  as as e,
  bq as a,
  br as s,
  bh as o,
  r as t,
  aL as l,
  a as n,
  au as d,
  bo as i,
  ax as b,
  aA as r,
  aB as c,
  av as p,
  bn as k,
  aw as u,
  aC as y,
  cZ as m,
  bx as g,
  di as f,
  by as h,
  az as z,
  bp as B,
} from "./index-DPRREYlk.js";
const x = e({
  __name: "SendButton",
  props: {
    sendText: {},
    abortText: {},
    pendding: { type: Boolean },
    disabled: { type: Boolean },
    block: { type: Boolean, default: !0 },
    isPublicPlayground: { type: Boolean },
  },
  emits: ["send", "abort"],
  setup(e) {
    const x = e,
      I = a("isLoginRequired", !1),
      L = s(),
      T = o(),
      _ = t(!1);
    return (
      l(() => {
        !x.isPublicPlayground &&
          T.getUserInfo.id &&
          I &&
          m("/api/v1/payment/getUserBalance")
            .post({ body: { userId: Number(T.getUserInfo.id) } })
            .then((e) => {
              e.data && !e.data.greaterThanZero && (_.value = !0);
            });
      }),
      (e, a) => {
        const s = z,
          o = B;
        return n(I) && !n(L)
          ? (d(),
            i(
              s,
              {
                key: 0,
                shape: "round",
                block: x.block,
                size: x.block ? "large" : "middle",
                type: "dashed",
                onClick:
                  a[0] ||
                  (a[0] = (e) => {
                    g.emit("openLoginModal");
                  }),
              },
              { default: b(() => [r(" Sign In ")]), _: 1 },
              8,
              ["block", "size"]
            ))
          : n(_)
          ? (d(),
            i(
              s,
              {
                key: 1,
                shape: "round",
                block: x.block,
                size: x.block ? "large" : "middle",
                type: "dashed",
                onClick:
                  a[1] ||
                  (a[1] = (e) => {
                    f.push({ name: h.BILLING }).catch((e) => {});
                  }),
              },
              {
                default: b(() => [
                  r(
                    c(
                      x.block
                        ? "Insufficient Funds, Top Up Now"
                        : "No Balance Left"
                    ),
                    1
                  ),
                ]),
                _: 1,
              },
              8,
              ["block", "size"]
            ))
          : (d(),
            p(
              y,
              { key: 2 },
              [
                x.pendding
                  ? (d(),
                    i(
                      s,
                      {
                        key: 1,
                        block: x.block,
                        shape: "round",
                        size: x.block ? "large" : "middle",
                        type: "primary",
                        class: "sticky bottom-0 pointer-events-auto",
                        onClick: a[3] || (a[3] = (a) => e.$emit("abort")),
                      },
                      {
                        default: b(() => [
                          k(e.$slots, "abort", {}, () => [
                            u(o, { icon: "i-ion:load-b", spin: "" }),
                            r(" " + c(x.abortText || "Abort"), 1),
                          ]),
                        ]),
                        _: 3,
                      },
                      8,
                      ["block", "size"]
                    ))
                  : (d(),
                    i(
                      s,
                      {
                        key: 0,
                        block: x.block,
                        disabled: x.disabled,
                        shape: "round",
                        size: x.block ? "large" : "middle",
                        type: "primary",
                        class: "sticky bottom-0",
                        onClick: a[2] || (a[2] = (a) => e.$emit("send")),
                      },
                      {
                        default: b(() => [
                          k(e.$slots, "send", {}, () => [
                            u(o, { icon: "i-ion:paper-plane" }),
                            r(" " + c(x.sendText || "Send"), 1),
                          ]),
                        ]),
                        _: 3,
                      },
                      8,
                      ["block", "disabled", "size"]
                    )),
              ],
              64
            ));
      }
    );
  },
});
export { x as default };

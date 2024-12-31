import {
  as as a,
  bR as s,
  c as e,
  r as t,
  bw as r,
  au as l,
  av as d,
  bl as o,
  aw as i,
  ax as n,
  aA as c,
  a as u,
  by as p,
  bo as f,
  aC as b,
  bN as _,
  bp as m,
  az as x,
  bm as y,
  aB as g,
  bz as h,
  cz as v,
  cA as C,
  bV as k,
  bk as w,
} from "./index-DPRREYlk.js";
import { u as j } from "./useChatList-Ch8PximY.js";
import { u as A } from "./useConfigList-BkT8qE0X.js";
import { _ as N } from "./index-DNofMLzB.js";
/* empty css                                                             */ const I =
    { class: "flex flex-col gap-1" },
  z = {
    class:
      "flex-1 h-full overflow-y-auto bg-gray-100 dark:bg-gray-700 rounded-md",
    style: {
      "border-bottom": "1px solid rgba(243,244,246,var(--un-bg-opacity))",
    },
  },
  T = { key: 1, class: "m0 p0" },
  B = ((a) => (v("data-v-a9640de0"), (a = a()), C(), a))(() =>
    o("li", { class: "p-2 text-dark-500 font-bold" }, " My Chats ", -1)
  ),
  E = ["data-id", "onClick"],
  R = { class: "flex gap-1 items-center" },
  M = { class: "flex flex-col justify-between gap-1 flex1" },
  D = { class: "flex items-center justify-between w-42" },
  G = { class: "text-gray-500 text-sm text-truncate w-30" },
  L = { class: "date" },
  O = { class: "text-dark-500 truncate-lines" },
  V = w(
    a({
      __name: "Chat",
      setup(a) {
        const { chats: v } = j(),
          C = s(),
          w = e(() => C.currentRoute.value.params.threadId),
          { configs: V } = A();
        const H = e(() => (a) => V.value.find((s) => s.assistant_id === a)),
          S = t();
        return (a, s) => {
          const e = m,
            t = x,
            j = r("router-link"),
            A = N,
            V = k;
          return (
            l(),
            d(
              "div",
              {
                ref_key: "chatBoxRef",
                ref: S,
                class: "h-full p-2 relative flex flex-col justify-between",
              },
              [
                o("div", I, [
                  i(
                    j,
                    {
                      class: "w-full",
                      to: {
                        name: ("routerNames" in a ? a.routerNames : u(p))
                          .AI_AGENT_CREATE_BOT,
                      },
                    },
                    {
                      default: n(() => [
                        i(
                          t,
                          { size: "large", class: "w-full", type: "primary" },
                          {
                            default: n(() => [
                              i(e, { icon: "i-ion:add" }),
                              c(" Create Bot "),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["to"]
                  ),
                ]),
                i(A, { class: "my-4", plain: "" }),
                o("div", z, [
                  u(v) && 0 !== u(v).length
                    ? (l(),
                      d("ul", T, [
                        B,
                        (l(!0),
                        d(
                          b,
                          null,
                          _(
                            u(v),
                            (a) => (
                              l(),
                              d(
                                "li",
                                {
                                  key: a.thread_id,
                                  "data-id": `chat-${a.thread_id}`,
                                  class: y([
                                    "text-dark-100 p-2 cursor-pointer border-gray-200 border-b-1 border-b-solid last-border-none",
                                    [
                                      a.thread_id === u(w)
                                        ? "bg-purple/10 rounded-sm"
                                        : "bg-white",
                                    ],
                                  ]),
                                  onClick: (s) =>
                                    (function (a) {
                                      C.push({
                                        name: p.AI_AGENT_ON_CHAT,
                                        params: {
                                          assistantId: a.assistant_id,
                                          threadId: a.thread_id,
                                        },
                                      });
                                    })(a),
                                },
                                [
                                  o("div", R, [
                                    i(e, {
                                      class: "rounded-full bg-gray-200 p-1",
                                      icon: "i-ph:robot",
                                      size: "16",
                                    }),
                                    o("span", M, [
                                      o("span", D, [
                                        o(
                                          "span",
                                          G,
                                          g(u(H)(a.assistant_id)?.name),
                                          1
                                        ),
                                        o(
                                          "span",
                                          L,
                                          g(u(h)(a.updated_at).format("MM-DD")),
                                          1
                                        ),
                                      ]),
                                      o("span", O, g(a.name), 1),
                                    ]),
                                  ]),
                                ],
                                10,
                                E
                              )
                            )
                          ),
                          128
                        )),
                      ]))
                    : (l(), f(V, { key: 0, description: "No Chat" })),
                ]),
              ],
              512
            )
          );
        };
      },
    }),
    [["__scopeId", "data-v-a9640de0"]]
  );
export { V as C };

import {
  as as a,
  c as e,
  au as s,
  av as t,
  bl as r,
  bm as o,
  bn as n,
  aw as i,
  a as l,
  aC as p,
  bo as m,
  aA as d,
  aD as u,
  aB as c,
  bp as g,
} from "./index-DPRREYlk.js";
import { u as v } from "./useDiffTimer-Bf-HICf0.js";
import { _ as y } from "./JsonPreview.vue_vue_type_script_setup_true_lang-Tt-e9JVs.js";
import { U as f } from "./index-4U7T8gMN.js";
import { _ as x } from "./ErrorMsg.vue_vue_type_script_setup_true_lang-C502n5G6.js";
import { I as b } from "./index-DO9NC2BL.js";
import { _ } from "./index-DNofMLzB.js";
const h = { class: "max-w-3/5 my-6 relative", "rounded-md": "" },
  w = { key: 0, p4: "", bg: "#F4F4F4 dark:#2E2E2E", "rounded-md": "" },
  k = { key: 1, class: "w-full p4 bg-white" },
  j = { class: "text-orange-600" },
  E = r(
    "div",
    { class: "text-green mb-2" },
    [
      r("span", { class: "font-bold" }, "Expected:"),
      d(" Please follow the following data structure. "),
    ],
    -1
  ),
  R = r(
    "div",
    { class: "text-orange-600 mb-2" },
    [
      r("span", { class: "font-bold" }, "Actual:"),
      d(" Your model's output doesn't match the component. "),
    ],
    -1
  ),
  O = { key: 2, "p-4": "", "rounded-md": "", flex: "~ row items-start gap-5" },
  P = { key: 1, relative: "", flex: "~ col center" },
  z = r(
    "div",
    {
      "animate-pulse": "",
      "size-300px": "",
      "rounded-md": "",
      "bg-primary-300": "",
    },
    null,
    -1
  ),
  B = a({
    __name: "MsgTextToImage",
    props: {
      msg: {},
      activated: { type: Boolean },
      hideParams: { type: Boolean },
      icon: {},
    },
    setup(a) {
      const B = a,
        F = e(() => {
          const { b64_json: a, url: e } = B.msg?.output || {};
          return (a ? `data:image/png;base64,${a}` : e) || "";
        }),
        T = e(() => (B.msg?.error ? B.msg.error.status : 0)),
        U = e(() => !F.value),
        Y = v(B.activated);
      return (a, e) => {
        const v = g,
          A = _,
          I = b;
        return (
          s(),
          t(
            "div",
            {
              class: o([
                "flex group break-words",
                [
                  B.activated || "assistant" === a.msg.role
                    ? ""
                    : "flex-row-reverse",
                ],
              ]),
            },
            [
              r("div", h, [
                r(
                  "nav",
                  {
                    class: o([
                      "flex gap-2 items-center break-words transition-duration-300 transform-origin-l absolute opacity-0 transition-opacity transition-transform scale-0 translate-y-0 group-hover:opacity-100 -group-hover:translate-y-12 group-hover:scale-100",
                      [
                        B.activated
                          ? "!opacity-100 !-translate-y-12 !scale-100 transition-duration-500"
                          : "",
                      ],
                    ]),
                  },
                  [n(a.$slots, "extraAction")],
                  2
                ),
                "user" === a.msg.role
                  ? (s(),
                    t("div", w, [
                      i(
                        l(f),
                        {
                          "hide-params": B.hideParams,
                          input: a.msg.input,
                          "content-key": "prompt",
                          label: "Prompt",
                        },
                        null,
                        8,
                        ["hide-params", "input"]
                      ),
                    ]))
                  : (s(),
                    t(
                      p,
                      { key: 1 },
                      [
                        0 != l(T)
                          ? (s(),
                            m(
                              x,
                              { key: 0, errcode: l(T), msg: a.msg },
                              null,
                              8,
                              ["errcode", "msg"]
                            ))
                          : l(U) && !B.activated
                          ? (s(),
                            t("div", k, [
                              r("h2", j, [
                                i(v, { icon: "i-ion:warning" }),
                                d("System prompts: "),
                              ]),
                              E,
                              i(y, {
                                data: {
                                  b64_json:
                                    "YOUR B64 JSON STRING HERE (Optional)",
                                  url: "YOUR URL HERE (Optional)",
                                },
                                class:
                                  "max-h-40 bg-green-100 overflow-auto resize-y",
                              }),
                              i(A),
                              R,
                              i(
                                y,
                                {
                                  data: B.msg.output,
                                  class:
                                    "max-h-40 overflow-auto resize-y bg-orange-100",
                                },
                                null,
                                8,
                                ["data"]
                              ),
                            ]))
                          : (s(),
                            t("div", O, [
                              a.icon
                                ? (s(),
                                  m(
                                    v,
                                    { key: 0, icon: a.icon, size: "32px" },
                                    null,
                                    8,
                                    ["icon"]
                                  ))
                                : u("", !0),
                              B.activated
                                ? (s(),
                                  t("div", P, [
                                    z,
                                    r(
                                      "span",
                                      null,
                                      c(l(Y).toFixed(1)) + "s. ",
                                      1
                                    ),
                                  ]))
                                : u("", !0),
                              i(
                                I,
                                {
                                  src: l(F),
                                  width: "300px",
                                  class: "rounded-md",
                                },
                                null,
                                8,
                                ["src"]
                              ),
                            ])),
                      ],
                      64
                    )),
              ]),
            ],
            2
          )
        );
      };
    },
  });
export { B as _ };

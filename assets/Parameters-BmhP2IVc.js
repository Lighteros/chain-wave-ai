import {
  as as e,
  bC as t,
  bD as n,
  r as a,
  aL as o,
  au as i,
  av as s,
  aB as r,
  aD as l,
  bl as p,
  aC as u,
  bN as m,
  aA as c,
  bo as d,
  ax as h,
  aw as f,
  cO as g,
  bp as w,
  cR as y,
  ay as v,
} from "./index-DPRREYlk.js";
import { a as b } from "./Model-DE5NMxXt.js";
import { E as k } from "./Endpoint-DTdkXGrW.js";
import { C as _ } from "./index-DGJYrvBD.js";
import { I as x } from "./index-OS-5xtvZ.js";
import { _ as T } from "./index-ClHHQL1t.js";
import { _ as E } from "./index-DNofMLzB.js";
import "./create-enum-converter-ClJbjM_p.js";
import "./Checkbox-KylR2T3k.js";
import "./index-jlJCtu5U.js";
import "./DownOutlined-BDMVSGUf.js";
import "./isMobile-VPrdNIIw.js";
const O = [
    new b(
      "max_tokens",
      [1, 2048, 1, 512],
      "The maximum number of tokens that can be generated in the chat completion."
    ),
    new b(
      "temperature",
      [0, 2, 0.1, 0.5],
      "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered."
    ),
    new b(
      "top_p",
      [0.1, 1, 0.1, 0.7],
      "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered."
    ),
  ],
  j = [
    new b(
      "Output Length",
      [1, 4096, 1, 1024],
      "Maximum length of generated tokens"
    ),
    new b(
      "Temperature",
      [0, 1, 0.01, 0.5],
      "Creativity and randomness of the response"
    ),
    new b(
      "Top P",
      [0, 1, 0.01, 1],
      "Dynamically adjusts the number of choices for each predicted token, which helps to maintain diversity and generate more fluent and natural-sounding text"
    ),
    new b(
      "Top K",
      [1, 100, 1, 50],
      "Limits the number of choices for the next predicted word or token, which helps to speed up the generation process and can improve the quality of the generated text"
    ),
    new b(
      "Repetition Penalty",
      [1, 2, 0.01, 1.5],
      "Reduce the likelihood of repeating prompt text or getting stuck in a loop"
    ),
  ],
  A = [
    new b("width", [64, 1024, 64, 512], "Width of the output image in pixels"),
    new b(
      "height",
      [64, 1024, 64, 512],
      "Height of the output image in pixels"
    ),
    new b(
      "guidance_scale",
      [0, 20, 0.5, 0],
      "Scale for classifier-free guidance"
    ),
    new b("steps", [1, 100, 1, 4], "Number of denoising steps"),
  ],
  L = [
    new b(
      "denoising",
      [0, 1, 0.05, 0.75],
      "How much to transform input spectrogram"
    ),
    new b(
      "alpha",
      [0, 1, 0.01, 0.5],
      "Random seed. Leave blank to randomize the seed"
    ),
    new b(
      "num_inference_steps",
      [1, 100, 1, 50],
      "Number of steps to run the diffusion model"
    ),
  ],
  C = [
    new b(
      "top_p",
      [0, 1, 0.1, 1],
      "When decoding text, samples from the top p percentage of most likely tokens; lower to ignore less likely tokens."
    ),
    new b(
      "temperature",
      [0, 20, 0.1, 0.2],
      "Adjusts randomness of outputs, greater than 1 is random and 0 is deterministic."
    ),
    new b(
      "max_tokens",
      [0, 2e3, 1, 1024],
      "Maximum number of tokens to generate. A word is generally 2-3 tokens"
    ),
  ],
  M = [
    new b("num_steps", [1, 100, 1, 30]),
    new b("identitynet_strength_ratio", [0, 1.5, 0.1, 0.8]),
    new b("adapter_strength_ratio", [0, 1.5, 0.1, 0.8]),
    new b("guidance_scale", [0.1, 20, 0.1, 5]),
    new b("seed", [0, 2147483647, 1, 42]),
    new b("enable_LCM", [!0, !1, 1, !1]),
    new b("enhance_face_region", [!0, !1, 1, !0]),
  ],
  I = [
    new b(
      "max_tokens",
      [1, 2048, 1, 512],
      "The maximum number of tokens that can be generated in the chat completion."
    ),
    new b(
      "temperature",
      [0, 2, 0.1, 0.6],
      "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered."
    ),
    new b(
      "top_p",
      [0.1, 1, 0.1, 0.7],
      "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered."
    ),
  ],
  N = [
    new b("motion_bucket_id", [1, 255, 1, 180]),
    new b("noise_aug_strength", [0, 1, 0.01, 0.02]),
    new b("decode_chunk_size", [1, 10, 1, 8]),
    new b("num_frames", [1, 50, 1, 25]),
    new b("seed", [-1, 1048576, 1, -1]),
  ],
  S = { key: 0, class: "bg-white p4 sticky top-0 w-full z3" },
  U = { class: "pl0 z2" },
  P = ["title"],
  R = { key: 0, class: "flex justify-between" },
  D = { class: "flex items-center gap-1" },
  X = { key: 1, class: "flex justify-between" },
  G = { class: "flex items-center gap-1" },
  z = { class: "flex justify-between flex-wrap" },
  H = { class: "flex items-center gap-1 text-truncate" },
  q = e({
    __name: "Parameters",
    props: t(
      { endpoint: {}, header: {}, task: {} },
      { value: {}, valueModifiers: {} }
    ),
    emits: t(["update:function"], ["update:value"]),
    setup(e, { emit: t }) {
      const b = e,
        q = n(e, "value"),
        B = a();
      const J = a();
      return (
        o(() => {
          !(function () {
            B.value &&
              B.value.setValue(
                '[\n  {\n    "name": "take_a_photo",\n    "description": "Captures a photo using the specified camera and resolution settings.",\n    "parameters": {\n      "type": "object",\n      "properties": {\n          "camera": {\n              "description": "Specifies the camera to use. Can be \'front\' or \'back\'. The default is \'back\'",\n              "type": "string"\n          },\n          "resolution": {\n              "description": "Sets the photo resolution. Options include \'720p\', \'1080p\', and \'4K\'. The default is \'1080p\'. Optional to provide.",\n              "type": "string"\n          }\n      },\n      "required": [\n        "camera",\n        "resolution"\n      ]\n    }\n  }\n]'
              ),
              b.endpoint
                ? (b.endpoint.apiType === k.CHAT_COMPLETIONS &&
                    (q.value = g(O)),
                  (b.endpoint.apiType !== k.COMPLETIONS &&
                    b.endpoint.apiType !== k.TEXT2SQL_LLM_OPENAI_COMPLETIONS) ||
                    (q.value = g(O)),
                  b.endpoint.apiType === k.GENERAL && (q.value = g(j)),
                  b.endpoint.apiType === k.TEXT2IMAGE && (q.value = g(A)),
                  b.endpoint.apiType === k.TEXT2AUDIO && (q.value = g(L)),
                  b.endpoint.apiType === k.IMAGE2TEXT && (q.value = g(C)),
                  b.endpoint.apiType === k.IMAGESTYLIZATION && (q.value = g(M)),
                  b.endpoint.apiType === k.TEXT2SQL_LLM_OPENAI_COMPLETIONS &&
                    (q.value = g(I)),
                  b.endpoint.apiType === k.IMAGE2VIDEO && (q.value = g(N)))
                : (q.value = g(O));
            try {
              const e = JSON.parse(b.endpoint?.inputJson);
              q.value?.forEach((t) => {
                t.name in e && (t.value = e[t.name]);
              });
            } catch (e) {}
          })();
        }),
        (e, t) => {
          const n = w,
            a = y,
            o = _,
            g = v,
            b = x,
            k = T,
            O = E;
          return (
            i(),
            s(
              "aside",
              { ref_key: "elRef", ref: J },
              [
                e.header ? (i(), s("h3", S, r(e.header), 1)) : l("", !0),
                p("ul", U, [
                  (i(!0),
                  s(
                    u,
                    null,
                    m(
                      q.value,
                      (e) => (
                        i(),
                        s(
                          "li",
                          {
                            key: e.name,
                            class: "p4 transition-colors",
                            title: e.description,
                          },
                          [
                            "boolean" == typeof e.range[0] &&
                            "boolean" == typeof e.range[1] &&
                            "boolean" == typeof e.value
                              ? (i(),
                                s("div", R, [
                                  p("label", D, [
                                    c(r(e.name) + " ", 1),
                                    e.description
                                      ? (i(),
                                        d(
                                          a,
                                          {
                                            key: 0,
                                            title: e.description,
                                            placement: "right",
                                          },
                                          {
                                            default: h(() => [
                                              f(n, {
                                                icon: "i-ion:information-circle",
                                                class: "cursor-pointer",
                                              }),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["title"]
                                        ))
                                      : l("", !0),
                                  ]),
                                  f(
                                    o,
                                    {
                                      checked: e.value,
                                      "onUpdate:checked": (t) => (e.value = t),
                                    },
                                    null,
                                    8,
                                    ["checked", "onUpdate:checked"]
                                  ),
                                ]))
                              : l("", !0),
                            "string" == typeof e.range[0] &&
                            "string" == typeof e.range[1] &&
                            "string" == typeof e.value
                              ? (i(),
                                s("div", X, [
                                  p("label", G, [
                                    c(r(e.name) + " ", 1),
                                    e.description
                                      ? (i(),
                                        d(
                                          a,
                                          {
                                            key: 0,
                                            title: e.description,
                                            placement: "right",
                                          },
                                          {
                                            default: h(() => [
                                              f(n, {
                                                icon: "i-ion:information-circle",
                                                class: "cursor-pointer",
                                              }),
                                            ]),
                                            _: 2,
                                          },
                                          1032,
                                          ["title"]
                                        ))
                                      : l("", !0),
                                  ]),
                                  f(
                                    g,
                                    {
                                      value: e.value,
                                      "onUpdate:value": (t) => (e.value = t),
                                    },
                                    null,
                                    8,
                                    ["value", "onUpdate:value"]
                                  ),
                                ]))
                              : l("", !0),
                            "number" == typeof e.value &&
                            "number" == typeof e.range[0] &&
                            "number" == typeof e.range[1]
                              ? (i(),
                                s(
                                  u,
                                  { key: 2 },
                                  [
                                    p("div", z, [
                                      p("label", H, [
                                        c(r(e.name) + " ", 1),
                                        e.description
                                          ? (i(),
                                            d(
                                              a,
                                              {
                                                key: 0,
                                                title: e.description,
                                                placement: "right",
                                              },
                                              {
                                                default: h(() => [
                                                  f(n, {
                                                    icon: "i-ion:information-circle",
                                                    class: "cursor-pointer",
                                                  }),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["title"]
                                            ))
                                          : l("", !0),
                                      ]),
                                      f(
                                        b,
                                        {
                                          value: e.value,
                                          "onUpdate:value": (t) =>
                                            (e.value = t),
                                          class: "ml-auto",
                                          step: e.step,
                                          min: e.range[0],
                                          max: e.range[1],
                                          onChange: (t) => {
                                            e.value = Number(
                                              null == t || "" === t
                                                ? e.range[0]
                                                : t
                                            );
                                          },
                                        },
                                        null,
                                        8,
                                        [
                                          "value",
                                          "onUpdate:value",
                                          "step",
                                          "min",
                                          "max",
                                          "onChange",
                                        ]
                                      ),
                                    ]),
                                    p("div", null, [
                                      f(
                                        k,
                                        {
                                          value: e.value,
                                          "onUpdate:value": (t) =>
                                            (e.value = t),
                                          step: e.step,
                                          min: e.range[0],
                                          max: e.range[1],
                                        },
                                        null,
                                        8,
                                        [
                                          "value",
                                          "onUpdate:value",
                                          "step",
                                          "min",
                                          "max",
                                        ]
                                      ),
                                    ]),
                                  ],
                                  64
                                ))
                              : l("", !0),
                            f(O, { class: "my0" }),
                          ],
                          8,
                          P
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              512
            )
          );
        }
      );
    },
  });
export { q as default };

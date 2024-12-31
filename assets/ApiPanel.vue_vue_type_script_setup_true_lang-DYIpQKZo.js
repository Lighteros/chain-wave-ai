const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-B2VTxZxr.js",
      "assets/index-DPRREYlk.js",
      "assets/index-Bu5LTPHX.css",
      "assets/_commonjs-dynamic-modules-BHR_E30J.js",
    ])
) => i.map((i) => d[i]);
import { P as e, O as a, a as t } from "./index-4U7T8gMN.js";
import {
  as as n,
  r as l,
  c as i,
  aR as r,
  b2 as s,
  du as o,
  au as p,
  av as u,
  a as c,
  bo as d,
  ax as y,
  aw as v,
  bm as h,
  da as f,
  aC as m,
  bN as g,
  bO as b,
  aD as k,
  bl as w,
  cV as _,
  bp as S,
  cR as P,
  bW as x,
  _ as j,
  bh as C,
  ds as H,
  aA as A,
} from "./index-DPRREYlk.js";
import { _ as O } from "./index-v1.vue_vue_type_script_setup_true_lang-BWWSKYSP.js";
import { D as E } from "./data-um5MHdei.js";
import { T, _ as J } from "./index-DTRlG5Qd.js";
import { m as U } from "./utils-CWmEVrfF.js";
import { E as K } from "./Endpoint-DTdkXGrW.js";
import { s as L } from "./shell-escape-DIuodS9m.js";
const R = { class: "p-2 pb-2 rounded-md border-1 border-gray w-full" },
  $ = n({
    __name: "CodeCurl",
    props: {
      curl: { type: String, required: !0, default: "" },
      apiKey: { type: String, required: !1, default: "" },
      contentHeight: { type: String },
    },
    setup(e) {
      const a = e,
        t = l("cURL"),
        n = l(["cURL", "Python", "JavaScript"]),
        C = l(""),
        H = l(""),
        A = l({}),
        U = l({}),
        K = i(() => {
          switch (t.value) {
            case "cURL":
            default:
              return E.SHELL;
            case "Python":
              return E.PYTHON;
            case "JavaScript":
              return E.JS;
          }
        });
      function L(e) {
        return e.replace(/\\'/g, "");
      }
      r(
        () => a.curl,
        () => {
          (A.value = {}), (U.value = {});
        }
      );
      const $ = i(
        () =>
          "WebAssembly" in window &&
          "compile" in WebAssembly &&
          "instantiate" in WebAssembly &&
          "compileStreaming" in WebAssembly
      );
      function B(e, a, t) {
        const n = a.name;
        if ("display" == t) {
          if (!A.value[n])
            try {
              const t = a(e);
              A.value[n] = t;
            } catch (l) {
              A.value[n] = e;
            }
          return A.value[n];
        }
        if (!U.value[n])
          try {
            const t = a(e);
            U.value[n] = t;
          } catch (l) {
            U.value[n] = e;
          }
        return U.value[n];
      }
      const I = x(async (e, t) => {
        const n = a.apiKey
            ? t.replace(/Bearer [a-z0-9*]+/, `Bearer ${a.apiKey}`)
            : t,
          { toPython: l, toJavaScript: i } = await j(async () => {
            const { toPython: e, toJavaScript: a } = await import(
              "./index-B2VTxZxr.js"
            );
            return { toPython: e, toJavaScript: a };
          }, __vite__mapDeps([0, 1, 2, 3]));
        switch (e) {
          case "Python":
            (H.value = B(L(t), l, "display")), (C.value = B(L(n), l, "copy"));
            break;
          case "JavaScript":
            (H.value = B(L(t), i, "display")), (C.value = B(L(n), i, "copy"));
            break;
          default:
            (C.value = n), (H.value = t);
        }
      }, 100);
      s(() => {
        if ($.value) I(t.value, a.curl);
        else {
          const e = a.apiKey
            ? a.curl.replace(/Bearer [a-z0-9*]+/, `Bearer ${a.apiKey}`)
            : a.curl;
          (C.value = e), (H.value = a.curl);
        }
      });
      const N = o({ source: C });
      return (a, l) => {
        const i = J,
          r = S,
          s = P,
          o = T;
        return (
          p(),
          u("div", R, [
            c($)
              ? (p(),
                d(
                  o,
                  {
                    key: 0,
                    "active-key": c(t),
                    "onUpdate:activeKey":
                      l[1] || (l[1] = (e) => (b(t) ? (t.value = e) : null)),
                    type: "card",
                    class: "curl-code-tabs",
                  },
                  {
                    rightExtra: y(() => [
                      v(
                        s,
                        {
                          placement: "left",
                          title: "Copied!",
                          open: c(N).copied.value,
                        },
                        {
                          default: y(() => [
                            v(
                              r,
                              {
                                icon: c(N).copied.value
                                  ? "i-ion:checkmark-done"
                                  : "i-ion:copy",
                                class: h([
                                  c(N).copied.value && "!text-green",
                                  "cursor-pointer",
                                ]),
                                onClick:
                                  l[0] ||
                                  (l[0] = f(
                                    (e) => c(N).copy(),
                                    ["prevent", "stop"]
                                  )),
                              },
                              null,
                              8,
                              ["icon", "class"]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["open"]
                      ),
                    ]),
                    default: y(() => [
                      (p(!0),
                      u(
                        m,
                        null,
                        g(
                          c(n),
                          (e) => (
                            p(), d(i, { key: e, tab: e }, null, 8, ["tab"])
                          )
                        ),
                        128
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["active-key"]
                ))
              : k("", !0),
            w(
              "div",
              {
                class: "h-50 w-full overflow-y-auto relative resize-y",
                style: _(e.contentHeight && { height: e.contentHeight }),
              },
              [
                v(
                  O,
                  {
                    value: c(H),
                    "onUpdate:value":
                      l[2] || (l[2] = (e) => (b(H) ? (H.value = e) : null)),
                    mode: c(K),
                    class: "w-full h-full",
                  },
                  null,
                  8,
                  ["value", "mode"]
                ),
              ],
              4
            ),
          ])
        );
      };
    },
  }),
  B = {
    class: "flex-1 w-full rounded-inherit bg-white overflow-auto app-panel",
  },
  I = { key: 0, class: "p4 bg-white sticky flex justify-between items-center" },
  N = n({
    __name: "ApiPanel",
    props: {
      endpoint: {},
      height: {},
      createCurl: { type: Function },
      hideParameters: { type: Boolean },
      noHeader: { type: Boolean },
    },
    setup(n) {
      const r = n,
        s = l("apiPanel"),
        o = l(),
        y = l([]),
        h = C(),
        f = i(() => {
          const e = r.endpoint.inputJson
              ? JSON.parse(r.endpoint.inputJson)
              : {},
            a = Object.fromEntries(y.value.map((e) => [e.name, e.value]));
          return JSON.stringify({ ...e, ...a }, null, 2);
        }),
        g = i(() =>
          r.createCurl
            ? r.createCurl(r.endpoint, {
                mergedParameters: f.value,
                maskCenter: U,
                shellEscape: L,
              })
            : `curl -XPOST \\\n${
                r.endpoint.requestUrl
              } \\\n-H 'Accept: application/json' \\\n-H 'Content-Type: application/json' \\\n-H 'Authorization: Bearer ${U(
                h.getUserInfo.apiKey
              )}' \\\n-d \\\n${L(f.value)}`
        ),
        { isFullscreen: S } = H(o),
        P = i(() =>
          S.value
            ? "100vh"
            : r.height && CSS.supports("height", r.height)
            ? r.height
            : "66vh"
        ),
        x = i(() => r.endpoint.apiType === K.GENERAL || r.hideParameters);
      return (n, l) => (
        p(),
        u(
          "div",
          {
            ref_key: "apiBoxRef",
            ref: o,
            class:
              "resize-y justify-between overflow-hidden relative w-full flex gap2 p1 rounded-md",
            style: _({ height: c(P) }),
          },
          [
            w("aside", B, [
              n.noHeader
                ? k("", !0)
                : (p(),
                  u("h3", I, [
                    A(" API "),
                    v(
                      c(e),
                      { container: c(o), endpoint: r.endpoint },
                      null,
                      8,
                      ["container", "endpoint"]
                    ),
                  ])),
              "md.fedml_cloud_device" !== r.endpoint.resourceType
                ? (p(),
                  d(
                    $,
                    {
                      key: c(g),
                      "content-height": `calc(${c(P)} - ${
                        r.noHeader ? "90px" : "148px"
                      })`,
                      class: "w-full",
                      curl: c(g),
                      "api-key": c(h).getUserInfo.apiKey,
                    },
                    null,
                    8,
                    ["content-height", "curl", "api-key"]
                  ))
                : (p(),
                  u(
                    m,
                    { key: 2 },
                    [
                      r.endpoint.apiType === c(K).CHAT_COMPLETIONS ||
                      r.endpoint.apiType === c(K).COMPLETIONS
                        ? (p(),
                          d(
                            c(a),
                            {
                              key: 0,
                              class: "w-full p4",
                              endpoint: r.endpoint,
                              "api-key": c(h).getUserInfo.apiKey,
                              parameters: c(y),
                            },
                            null,
                            8,
                            ["endpoint", "api-key", "parameters"]
                          ))
                        : (p(),
                          d(
                            $,
                            {
                              key: c(g),
                              "content-height": `calc(${c(P)} - ${
                                r.noHeader ? "90px" : "148px"
                              })`,
                              class: "w-full",
                              curl: c(g),
                              "api-key": c(h).getUserInfo.apiKey,
                            },
                            null,
                            8,
                            ["content-height", "curl", "api-key"]
                          )),
                    ],
                    64
                  )),
            ]),
            c(x)
              ? k("", !0)
              : (p(),
                d(
                  c(t),
                  {
                    key: 0,
                    value: c(y),
                    "onUpdate:value":
                      l[0] || (l[0] = (e) => (b(y) ? (y.value = e) : null)),
                    endpoint: r.endpoint,
                    header: "Advanced Options",
                    class:
                      "w-1/3 bg-white h-full rounded-inherit relative overflow-auto app-panel",
                    task: c(s),
                  },
                  null,
                  8,
                  ["value", "endpoint", "task"]
                )),
          ],
          4
        )
      );
    },
  });
export { N as _ };

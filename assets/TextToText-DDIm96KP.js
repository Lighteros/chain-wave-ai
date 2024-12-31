import {
  as as e,
  r as a,
  dr as l,
  ds as n,
  dt as t,
  bq as s,
  br as o,
  n as u,
  c as i,
  bh as r,
  c4 as c,
  aR as p,
  au as d,
  av as f,
  bl as v,
  aA as g,
  aC as m,
  aB as y,
  aD as h,
  aw as b,
  a as x,
  bN as k,
  bo as w,
  dq as P,
  ax as T,
  bO as C,
  bm as _,
  bY as j,
  co as S,
  cV as E,
  bs as U,
  bp as A,
  az as N,
  c6 as O,
  bA as R,
  cW as D,
  dk as L,
} from "./index-DPRREYlk.js";
import { e as I } from "./gpt-B67tY-GB.js";
import { a as M } from "./index-DVhIhXk9.js";
import { b as z, C as B, S as F, a as J } from "./index-4U7T8gMN.js";
import { u as K, s as V } from "./useStreamEndpoint-CaaR67A8.js";
import { E as $ } from "./Endpoint-DTdkXGrW.js";
import { D as q } from "./index-B0edVtGn.js";
import "./fetch-D5K_4anA.js";
import "./create-enum-converter-ClJbjM_p.js";
import "./isNumeric-DFkNItwV.js";
const H = {
    class:
      "bg-white p4 sticky top-0 w-full flex justify-between items-center z2",
  },
  Y = { class: "text-gray-400" },
  Z = { class: "flex gap-2 items-center" },
  Q = { class: "p4 flex-1" },
  W = {
    key: 0,
    class:
      "flex flex-col gap-2 max-h-50 overflow-auto justify-center items-center h-full",
  },
  G = ["onClick"],
  X = { class: "bg-white p4 flex flex-col gap-4 w-full sticky bottom-0" },
  ee = { class: "flex gap-2 overflow-x-auto w-full" },
  ae = { class: "flex items-center gap-2" },
  le = { class: "absolute bottom-6 right-6" },
  ne = { key: 0, class: "flex" },
  te = e({
    __name: "TextToText",
    props: {
      endpoint: {},
      height: {},
      hideApiType: { type: Boolean },
      readonly: { type: Boolean },
      defaultMessageList: {},
      apiKey: {},
      examples: {},
      isPublicPlayground: { type: Boolean },
    },
    setup(e) {
      const te = e,
        { startStream: se, stopStream: oe } = K(),
        ue = a(!1),
        ie = a(),
        { focused: re } = l(ie),
        ce = a(),
        pe = a(),
        { toggle: de, isFullscreen: fe } = n(ce),
        ve = a(""),
        ge = a([]),
        me = a(),
        ye = a([]);
      function he(e) {
        (ve.value = e), (re.value = !0);
      }
      const be = a(!1),
        xe = a(null),
        ke = t(_e, 1e3),
        we = s("isLoginRequired", !1),
        Pe = o(),
        Te = a("text2text");
      async function Ce() {
        if (we && !Pe.value)
          return U.warn("You need to login first."), void (ye.value = []);
        be.value = !0;
        const e = ye.value.slice(-11),
          a = Object.fromEntries(ge.value.map((e) => [e.name, e.value]));
        (xe.value = { role: "assistant", updateTime: Date.now(), content: "" }),
          se(
            te.endpoint,
            V(e, 2048),
            me,
            a,
            (e) => {
              "string" == typeof e
                ? "closed" === e
                  ? ((be.value = !1),
                    ye.value.push(xe.value),
                    (xe.value = null))
                  : "error" === e
                  ? ((be.value = !1), (xe.value = null))
                  : "ratelimit" === e &&
                    ((be.value = !1),
                    ye.value.push({
                      role: "assistant",
                      content: "",
                      error: { status: 429 },
                    }),
                    (xe.value = null),
                    ke())
                : "[DONE]" !== e.data &&
                  ((be.value = !0),
                  (function (e) {
                    if (!xe.value) return;
                    const a = JSON.parse(e.data);
                    te.endpoint.apiType === $.CHAT_COMPLETIONS
                      ? (xe.value.content +=
                          a.choices[0].delta?.content ||
                          JSON.stringify(a.choices[0].delta?.function_call) ||
                          "")
                      : te.endpoint.apiType === $.COMPLETIONS &&
                        (xe.value.content += a.choices[0]?.text || "");
                    xe.value.updateTime = Date.now();
                  })(e),
                  ke());
            },
            te.apiKey,
            te.isPublicPlayground
          );
      }
      function _e(e = "bottom") {
        u(() => {
          pe.value &&
            pe.value.scrollTo({
              top: "bottom" === e ? pe.value.scrollHeight : 0,
              behavior: "smooth",
            });
        });
      }
      async function je() {
        "Invalid Json Format" !== me.value
          ? ve.value &&
            (ye.value.push({
              role: "user",
              content: ve.value,
              updateTime: Date.now(),
            }),
            u(() => {
              _e(), Ce(), (ve.value = "");
            }))
          : U.error("Invalid Json Format, Please Check The Function Content");
      }
      async function Se() {
        (ye.value = ye.value.slice(0, -1)),
          u(() => {
            _e(), Ce();
          });
      }
      function Ee(e) {
        e.ctrlKey && "Enter" === e.code
          ? (e.preventDefault(), te.readonly || je())
          : "ArrowUp" === e.key &&
            (function (e) {
              ve.value ||
                (e.preventDefault(),
                (ve.value =
                  ye.value.filter((e) => "assistant" !== e.role)?.at(-1)
                    ?.content || ""));
            })(e);
      }
      const Ue = a();
      const Ae = i(() =>
          fe.value
            ? "100vh"
            : te.height && CSS.supports("height", te.height)
            ? te.height
            : "66vh"
        ),
        Ne = r(),
        Oe = i(() => !(!Ne.getUserInfo || !Ne.getToken)),
        { getIsMobile: Re } = c(),
        De = a(!Re.value && !te.isPublicPlayground);
      return (
        p(
          () => te.defaultMessageList,
          () => {
            ye.value = te.defaultMessageList?.slice() || [];
            const e = te.defaultMessageList?.at(-1);
            "user" === e?.role && Ce();
          },
          { immediate: !0 }
        ),
        p(Re, () => {
          De.value = !Re.value && !te.isPublicPlayground;
        }),
        (e, a) => {
          const l = A,
            n = N,
            t = N,
            s = O,
            o = R,
            u = D,
            i = L,
            r = q;
          return (
            d(),
            f(
              "div",
              {
                ref_key: "chatBoxRef",
                ref: ce,
                class: _([
                  "resize-y justify-between overflow-hidden relative w-full flex rounded-md",
                  x(Re) ? "" : "gap2",
                ]),
                style: E({ height: x(Ae) }),
              },
              [
                v(
                  "aside",
                  {
                    ref_key: "chatContentRef",
                    ref: pe,
                    class:
                      "flex-1 flex flex-col justify-between w-full h-full rounded-inherit bg-light dark:bg-gray-800 relative overflow-auto app-panel",
                  },
                  [
                    v("h3", H, [
                      v("span", null, [
                        g("Playground "),
                        e.hideApiType
                          ? h("", !0)
                          : (d(),
                            f(
                              m,
                              { key: 0 },
                              [
                                g(" - "),
                                v("small", Y, y(te.endpoint.modelName), 1),
                              ],
                              64
                            )),
                      ]),
                      v("span", Z, [
                        b(
                          l,
                          {
                            class:
                              "ml-auto cursor-pointer hover:scale-120 origin-center",
                            size: "24px",
                            icon: x(fe)
                              ? "i-tdesign:fullscreen-exit"
                              : "i-tdesign:fullscreen-2",
                            onClick: x(de),
                          },
                          null,
                          8,
                          ["icon", "onClick"]
                        ),
                        b(l, {
                          class:
                            "ml-auto cursor-pointer hover:scale-120 origin-center",
                          size: "24px",
                          icon: "i-fluent:settings-24-regular",
                          onClick: a[0] || (a[0] = (e) => (De.value = !x(De))),
                        }),
                      ]),
                    ]),
                    v("section", Q, [
                      0 === x(ye).length
                        ? (d(),
                          f(
                            m,
                            { key: 0 },
                            [
                              te.examples
                                ? (d(),
                                  f("div", W, [
                                    (d(!0),
                                    f(
                                      m,
                                      null,
                                      k(
                                        te.examples,
                                        (e) => (
                                          d(),
                                          f(
                                            "div",
                                            {
                                              key: e,
                                              class:
                                                "border-1 border-primary/50 border-solid rounded p-2 cursor-pointer hover:bg-primary hover:text-white",
                                              onClick: () => {
                                                he(e), je();
                                              },
                                            },
                                            y(e),
                                            9,
                                            G
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]))
                                : h("", !0),
                            ],
                            64
                          ))
                        : (d(!0),
                          f(
                            m,
                            { key: 1 },
                            k(
                              x(ye),
                              (a, t) => (
                                d(),
                                w(
                                  x(M),
                                  {
                                    key: a.updateTime,
                                    msg: a,
                                    "is-public-playground":
                                      e.isPublicPlayground,
                                  },
                                  P({ _: 2 }, [
                                    t === x(ye).length - 1
                                      ? {
                                          name: "extraAction",
                                          fn: T(() => [
                                            b(
                                              n,
                                              { shape: "round", onClick: Se },
                                              {
                                                default: T(() => [
                                                  b(l, {
                                                    icon: "i-ion:refresh",
                                                  }),
                                                  g(" Regenerate "),
                                                ]),
                                                _: 1,
                                              }
                                            ),
                                          ]),
                                          key: "0",
                                        }
                                      : void 0,
                                  ]),
                                  1032,
                                  ["msg", "is-public-playground"]
                                )
                              )
                            ),
                            128
                          )),
                      x(xe)
                        ? (d(),
                          w(
                            x(M),
                            {
                              key: 2,
                              ref_key: "streamingRef",
                              ref: Ue,
                              activated: "",
                              msg: x(xe),
                              "is-public-playground": e.isPublicPlayground,
                            },
                            null,
                            8,
                            ["msg", "is-public-playground"]
                          ))
                        : h("", !0),
                    ]),
                    v("footer", X, [
                      b(
                        x(z),
                        {
                          modelValue: x(ue),
                          "onUpdate:modelValue":
                            a[1] ||
                            (a[1] = (e) => (C(ue) ? (ue.value = e) : null)),
                          message: x(ve),
                          onConfirm: he,
                        },
                        null,
                        8,
                        ["modelValue", "message"]
                      ),
                      v("nav", ee, [
                        b(
                          x(B),
                          {
                            "message-list": x(ye),
                            "onUpdate:messageList":
                              a[2] ||
                              (a[2] = (e) => (C(ye) ? (ye.value = e) : null)),
                            endpoint: e.endpoint,
                            "is-public-playground": e.isPublicPlayground,
                            "layout-ref": { handleScroll: _e },
                          },
                          null,
                          8,
                          [
                            "message-list",
                            "endpoint",
                            "is-public-playground",
                            "layout-ref",
                          ]
                        ),
                        x(Oe) && !e.isPublicPlayground
                          ? (d(),
                            w(
                              t,
                              { key: 0, disabled: "", shape: "round" },
                              {
                                default: T(() => [
                                  b(l, {
                                    icon: "i-ic:round-generating-tokens",
                                    class: "!text-yellow",
                                  }),
                                  g(" Tokens: " + y(x(I)(x(ve)).length), 1),
                                ]),
                                _: 1,
                              }
                            ))
                          : h("", !0),
                        te.examples && te.examples.length
                          ? (d(),
                            w(
                              u,
                              { key: 1, "get-popup-container": () => x(ce) },
                              {
                                overlay: T(() => [
                                  b(
                                    o,
                                    {
                                      onClick:
                                        a[3] || (a[3] = ({ key: e }) => he(e)),
                                    },
                                    {
                                      default: T(() => [
                                        (d(!0),
                                        f(
                                          m,
                                          null,
                                          k(
                                            te.examples,
                                            (e) => (
                                              d(),
                                              w(
                                                s,
                                                { key: e },
                                                {
                                                  default: T(() => [
                                                    g(y(e), 1),
                                                  ]),
                                                  _: 2,
                                                },
                                                1024
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                default: T(() => [
                                  b(
                                    t,
                                    { shape: "round" },
                                    {
                                      default: T(() => [g(" Examples ")]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["get-popup-container"]
                            ))
                          : h("", !0),
                      ]),
                      v("div", ae, [
                        b(
                          i,
                          {
                            ref_key: "chatTextareaRef",
                            ref: ie,
                            value: x(ve),
                            "onUpdate:value":
                              a[4] ||
                              (a[4] = (e) => (C(ve) ? (ve.value = e) : null)),
                            class: _([
                              "rounded p4 ring-2 w-full max-h-40 pr-46",
                              {
                                "select-none pointer-events-none":
                                  x(be) || e.$props.readonly,
                              },
                            ]),
                            rows: 4,
                            readonly: e.$props.readonly,
                            placeholder:
                              "Ask me anything... Ctrl + Enter to send, : to search prompts.",
                            onInput:
                              a[5] ||
                              (a[5] = (e) =>
                                (function (e) {
                                  if (!e) return;
                                  let a = e;
                                  for (; I(a).length > 2048; )
                                    a = a.substring(0, a.length - 1);
                                  ve.value = a;
                                })(e.target.value)),
                            onKeyup: Ee,
                          },
                          null,
                          8,
                          ["value", "readonly", "class"]
                        ),
                      ]),
                      v("div", le, [
                        e.$props.readonly
                          ? h("", !0)
                          : (d(),
                            w(
                              x(F),
                              {
                                key: 0,
                                "is-public-playground": e.isPublicPlayground,
                                block: !1,
                                disabled: x(be) || !x(ve),
                                pendding: x(be),
                                onSend: a[6] || (a[6] = (e) => je()),
                                onAbort:
                                  a[7] ||
                                  (a[7] = (e) =>
                                    (async function () {
                                      oe(),
                                        xe.value &&
                                          ye.value.push({ ...xe.value }),
                                        (be.value = !1),
                                        (xe.value = null),
                                        _e();
                                    })()),
                              },
                              null,
                              8,
                              ["is-public-playground", "disabled", "pendding"]
                            )),
                      ]),
                    ]),
                  ],
                  512
                ),
                x(Re)
                  ? (d(),
                    f("div", ne, [
                      b(
                        r,
                        {
                          open: x(De),
                          "onUpdate:open":
                            a[10] ||
                            (a[10] = (e) => (C(De) ? (De.value = e) : null)),
                          "get-container": !1,
                          "mask-closable": "",
                          size: "default",
                        },
                        {
                          default: T(() => [
                            b(
                              x(J),
                              {
                                value: x(ge),
                                "onUpdate:value":
                                  a[8] ||
                                  (a[8] = (e) =>
                                    C(ge) ? (ge.value = e) : null),
                                function: x(me),
                                "onUpdate:function":
                                  a[9] ||
                                  (a[9] = (e) =>
                                    C(me) ? (me.value = e) : null),
                                class:
                                  "bg-white h-full rounded-inherit relative overflow-auto app-panel",
                                endpoint: te.endpoint,
                                task: x(Te),
                              },
                              null,
                              8,
                              ["value", "function", "endpoint", "task"]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["open"]
                      ),
                    ]))
                  : j(
                      (d(),
                      w(
                        x(J),
                        {
                          key: 1,
                          value: x(ge),
                          "onUpdate:value":
                            a[11] ||
                            (a[11] = (e) => (C(ge) ? (ge.value = e) : null)),
                          function: x(me),
                          "onUpdate:function":
                            a[12] ||
                            (a[12] = (e) => (C(me) ? (me.value = e) : null)),
                          class:
                            "w-1/3 bg-white h-full rounded-inherit relative overflow-auto app-panel",
                          endpoint: te.endpoint,
                          task: x(Te),
                        },
                        null,
                        8,
                        ["value", "function", "endpoint", "task"]
                      )),
                      [[S, x(De)]]
                    ),
              ],
              6
            )
          );
        }
      );
    },
  });
export { te as default };

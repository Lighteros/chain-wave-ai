import { _ as e } from "./PageWrapper-BPMfS97v.js";
import {
  as as t,
  r as s,
  cg as a,
  au as o,
  bo as n,
  ax as i,
  bl as r,
  a as l,
  av as p,
  aC as d,
  bN as u,
  aw as m,
  aD as g,
  bO as c,
  bp as f,
  aB as h,
} from "./index-DPRREYlk.js";
import { u as v, a as x, _ as j, C as w } from "./co-app-BtIh2uqX.js";
import { A as b } from "./providerSetting-DCkM4vP5.js";
import { M as k } from "./MsgMarkdown-D7hUrRUd.js";
import { u as y } from "./useStreamEndpoint-CaaR67A8.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./index-BPauqaGF.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./logo-with-brand-light-BCpFi14j.js";
import "./index-CF-tXiQi.js";
import "./index-DTRlG5Qd.js";
import "./useRefs-DoWExZxn.js";
import "./index-B0yuFjoJ.js";
import "./Endpoint-DTdkXGrW.js";
import "./create-enum-converter-ClJbjM_p.js";
import "./useSafeMarked-JcrkB-hc.js";
import "./github-dark-dimmed-CPsh559a.js";
import "./gpt-B67tY-GB.js";
import "./fetch-D5K_4anA.js";
const M = {
    flex: "~ col items-center",
    "h-full": "",
    "w-full": "",
    "overflow-hidden": "",
  },
  S = { key: 1, flex: "~ col gap-4", "w-full": "" },
  E = {
    key: 0,
    "p-4": "",
    "rounded-md": "",
    bg: "#F4F4F4",
    "w-fit": "",
    "ml-auto": "",
  },
  O = {
    key: 1,
    "p-4": "",
    "rounded-md": "",
    flex: "~ row items-start gap-2",
    "bg-white": "",
  },
  _ = {
    key: 0,
    "p-4": "",
    "rounded-md": "",
    flex: "~ row items-start gap-5",
    "bg-white": "",
  },
  I = t({
    __name: "llm",
    setup(t) {
      const I = v(),
        { startStream: T, stopStream: C } = y(),
        D = s(),
        F = s("");
      function N() {
        if (!I.getEndpoint) return;
        const e = P();
        (e.content = F.value),
          I.addMessage(e),
          (D.value = P("assistant")),
          (F.value = ""),
          T(
            I.getEndpoint,
            I.getMessages,
            null,
            {},
            (e) => {
              try {
                (D.value.updateTime = Date.now()),
                  "string" != typeof e &&
                    (D.value.content +=
                      JSON.parse(e.data).choices[0].delta.content ?? ""),
                  "closed" === e &&
                    (I.addMessage({ ...D.value }), (D.value = void 0));
              } catch {}
            },
            b["fedml-official"]
          );
      }
      function P(e = "user") {
        return {
          role: e,
          updateTime: Date.now(),
          content: "",
          error: { status: 0 },
        };
      }
      const V = s([
          "🧠 Create a blog post intro explaining the value of AI in content creation.",
          "⌚ Generate a smartwatch description highlighting fitness tracking features.",
          "🚀 Generate a post announcing an AI product launch with trending hashtags.",
        ]),
        A = s();
      return (
        x(A, D),
        a(() => {
          I.init(), I.enter("llm");
        }),
        (t, s) => {
          const a = f,
            v = e;
          return (
            o(),
            n(
              v,
              { dense: "", "content-full-height": "", "fixed-height": "" },
              {
                default: i(() => [
                  r("div", M, [
                    r(
                      "div",
                      {
                        ref_key: "messageRef",
                        ref: A,
                        flex: "~ grow-1 shrink-1 basis-0",
                        "overflow-auto": "",
                        "w-full": "",
                        "py-12": "",
                        px: "136px",
                        "lt-lg:px": "4",
                      },
                      [
                        l(I).getMessages && 0 !== l(I).getMessages.length
                          ? (o(),
                            p("div", S, [
                              (o(!0),
                              p(
                                d,
                                null,
                                u(
                                  l(I).getMessages,
                                  (e) => (
                                    o(),
                                    p(
                                      d,
                                      { key: e.updateTime },
                                      [
                                        "user" === e.role
                                          ? (o(), p("div", E, h(e.content), 1))
                                          : g("", !0),
                                        "assistant" === e.role
                                          ? (o(),
                                            p("div", O, [
                                              m(a, {
                                                icon: "i-co:logo",
                                                size: "32px",
                                              }),
                                              m(
                                                k,
                                                { text: e.content },
                                                null,
                                                8,
                                                ["text"]
                                              ),
                                            ]))
                                          : g("", !0),
                                      ],
                                      64
                                    )
                                  )
                                ),
                                128
                              )),
                              l(D)
                                ? (o(),
                                  p("div", _, [
                                    m(a, {
                                      icon: "i-co:logo",
                                      size: "32px",
                                      class: "animate-heart-beat",
                                    }),
                                    m(k, { text: l(D)?.content }, null, 8, [
                                      "text",
                                    ]),
                                  ]))
                                : g("", !0),
                            ]))
                          : (o(),
                            n(
                              j,
                              {
                                key: 0,
                                "h-full": "",
                                prompts: l(V),
                                description:
                                  "Provides real-time answers to your questions",
                                onSend:
                                  s[0] ||
                                  (s[0] = (e) => {
                                    (F.value = e), N(), (F.value = "");
                                  }),
                              },
                              null,
                              8,
                              ["prompts"]
                            )),
                      ],
                      512
                    ),
                    m(
                      w,
                      {
                        modelValue: l(F),
                        "onUpdate:modelValue":
                          s[1] || (s[1] = (e) => (c(F) ? (F.value = e) : null)),
                        endpoint: l(I).state.llm.activedEndpointId,
                        "onUpdate:endpoint":
                          s[2] ||
                          (s[2] = (e) =>
                            (l(I).state.llm.activedEndpointId = e)),
                        class: "w-full px-136px lt-lg:px-4 mb-4",
                        endpoints: l(I).state.llm.endpoints,
                        "inflight-message": l(D),
                        loading: l(I).getStatus.has("loading-endpoints"),
                        "on-send": () => N(),
                        "on-abort": () => l(C)(),
                      },
                      null,
                      8,
                      [
                        "modelValue",
                        "endpoint",
                        "endpoints",
                        "inflight-message",
                        "loading",
                        "on-send",
                        "on-abort",
                      ]
                    ),
                  ]),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  });
export { I as default };

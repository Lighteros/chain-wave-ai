import { _ as e } from "./PageWrapper-BPMfS97v.js";
import { u as t, a as s, _ as o, C as i } from "./co-app-BtIh2uqX.js";
import { A as a } from "./providerSetting-DCkM4vP5.js";
import { _ as r } from "./MsgTextToImage.vue_vue_type_script_setup_true_lang-CM-FJP0L.js";
import { u as n } from "./usePlayground-CFTtHr_u.js";
import { I as p, a as l } from "./Text2Image-uYxHLatn.js";
import {
  as as m,
  c as d,
  r as g,
  cg as u,
  aR as f,
  au as c,
  bo as j,
  ax as x,
  bl as h,
  a as _,
  av as v,
  aC as w,
  bN as y,
  aD as b,
  aw as k,
} from "./index-DPRREYlk.js";
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
import "./useDiffTimer-Bf-HICf0.js";
import "./JsonPreview.vue_vue_type_script_setup_true_lang-Tt-e9JVs.js";
import "./index-4U7T8gMN.js";
import "./ErrorMsg.vue_vue_type_script_setup_true_lang-C502n5G6.js";
import "./index-DO9NC2BL.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./index-DNofMLzB.js";
import "./TimerBase-CkPrDMCE.js";
const I = {
    flex: "~ col items-center",
    "h-full": "",
    "w-full": "",
    "overflow-hidden": "",
  },
  M = { key: 1, flex: "~ col gap-4", "w-full": "" },
  T = m({
    __name: "t2img",
    setup(m) {
      const T = t(),
        S = d(() => ({
          endpoint: T.getEndpoint,
          defaultMessageList: T.getMessages,
          apiKey: a["fedml-official-to"],
        })),
        {
          formState: A,
          onSend: E,
          onAbort: O,
          messageList: P,
          onStreaming: R,
          currentAssistantMessage: L,
        } = n(S, () => new l(), new p(), {
          rewriteWatcher() {},
          handlerResponse(e, t) {
            (e.role = "assistant"), (e.output = t.data), e.complete();
          },
        }),
        W = g([
          "🤖 A sleek, futuristic robot holding a glowing blue data chip in its metallic hand.",
          "🍣 A colorful stack of fresh sushi rolls arranged on a stylish black plate.",
          "⌨️ A vintage typewriter with a half-typed page, sitting beside scattered books. ",
        ]),
        C = g();
      return (
        s(C, R),
        u(() => {
          T.init(), T.enter("textToImage");
        }),
        f(
          P,
          () => {
            T.setMessages("textToImage", P.value);
          },
          { deep: !0 }
        ),
        (t, s) => {
          const a = e;
          return (
            c(),
            j(
              a,
              { dense: "", "content-full-height": "", "fixed-height": "" },
              {
                default: x(() => [
                  h("div", I, [
                    h(
                      "div",
                      {
                        ref_key: "messageRef",
                        ref: C,
                        flex: "~ grow-1 shrink-1 basis-0",
                        "w-full": "",
                        "overflow-auto": "",
                        "py-12": "",
                        px: "136px",
                        "lt-lg:px": "4",
                      },
                      [
                        _(T).getMessages && 0 !== _(T).getMessages.length
                          ? (c(),
                            v("div", M, [
                              (c(!0),
                              v(
                                w,
                                null,
                                y(
                                  _(T).getMessages,
                                  (e) => (
                                    c(),
                                    j(
                                      r,
                                      {
                                        key: e.created_at,
                                        icon: "i-co:logo",
                                        msg: e,
                                        "hide-params": "",
                                      },
                                      null,
                                      8,
                                      ["msg"]
                                    )
                                  )
                                ),
                                128
                              )),
                              _(L)
                                ? (c(),
                                  j(
                                    r,
                                    {
                                      key: 0,
                                      icon: "i-co:logo",
                                      "hide-params": "",
                                      activated: "",
                                      msg: _(L),
                                    },
                                    null,
                                    8,
                                    ["msg"]
                                  ))
                                : b("", !0),
                            ]))
                          : (c(),
                            j(
                              o,
                              {
                                key: 0,
                                "h-full": "",
                                description:
                                  "Effortlessly turning ideas into stunning visuals",
                                prompts: _(W),
                                onSend:
                                  s[0] ||
                                  (s[0] = (e) => {
                                    (_(A).prompt = e),
                                      _(E)(),
                                      (_(A).prompt = "");
                                  }),
                              },
                              null,
                              8,
                              ["prompts"]
                            )),
                      ],
                      512
                    ),
                    k(
                      i,
                      {
                        modelValue: _(A).prompt,
                        "onUpdate:modelValue":
                          s[1] || (s[1] = (e) => (_(A).prompt = e)),
                        endpoint: _(T).state.textToImage.activedEndpointId,
                        "onUpdate:endpoint":
                          s[2] ||
                          (s[2] = (e) =>
                            (_(T).state.textToImage.activedEndpointId = e)),
                        class: "w-full px-136px lt-lg:px-4 mb-4",
                        endpoints: _(T).state.textToImage.endpoints,
                        "inflight-message": _(L),
                        loading: _(T).getStatus.has("loading-endpoints"),
                        "on-send": () => _(E)(),
                        "on-abort": () => _(O)(),
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
export { T as default };

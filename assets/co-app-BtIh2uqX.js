import {
  as as e,
  bC as t,
  bD as n,
  au as i,
  av as o,
  bl as s,
  bY as l,
  eM as a,
  aw as r,
  ax as u,
  aC as p,
  bN as d,
  bo as m,
  aA as c,
  bp as _,
  az as g,
  aB as y,
  bk as f,
  aD as h,
  eN as T,
  bu as v,
  bS as x,
  at as b,
  r as E,
  c as P,
} from "./index-DPRREYlk.js";
import { S as N, a as M } from "./index-BPauqaGF.js";
import { _ as w } from "./logo-with-brand-light-BCpFi14j.js";
import { C as I } from "./index-CF-tXiQi.js";
import { E as A } from "./Endpoint-DTdkXGrW.js";
const L = { flex: "~ col gap-4" },
  B = {
    relative: "",
    "rounded-20px": "",
    bg: "#F5F5F5",
    "px-5": "",
    "py-2": "",
  },
  V = ["placeholder", "disabled", "rows"],
  D = { flex: "~ rows gap-2 wrap items-center justify-between" },
  O = f(
    e({
      __name: "ChatPrompt",
      props: t(
        {
          onSend: {},
          onAbort: {},
          loading: { type: Boolean },
          endpoints: {},
          inflightMessage: {},
          placeholder: { default: "Ask AI a question or make a request..." },
        },
        {
          modelValue: { required: !0, default: "" },
          modelModifiers: {},
          endpoint: {},
          endpointModifiers: {},
        }
      ),
      emits: ["update:modelValue", "update:endpoint"],
      setup(e) {
        const t = e,
          f = n(e, "modelValue"),
          h = n(e, "endpoint");
        return (e, n) => {
          const T = M,
            v = N,
            x = _,
            b = g;
          return (
            i(),
            o("div", L, [
              s("div", B, [
                l(
                  s(
                    "textarea",
                    {
                      "onUpdate:modelValue":
                        n[0] || (n[0] = (e) => (f.value = e)),
                      placeholder: t.placeholder,
                      "border-none": "",
                      "outline-none": "",
                      "bg-inherit": "",
                      "py-2": "",
                      "w-full": "",
                      "resize-unset": "",
                      spellcheck: "false",
                      disabled: t.inflightMessage || !h.value,
                      rows: Math.min(3, f.value.split("\n").length),
                    },
                    null,
                    8,
                    V
                  ),
                  [[a, f.value]]
                ),
                s("div", D, [
                  r(
                    v,
                    {
                      value: h.value,
                      "onUpdate:value": n[1] || (n[1] = (e) => (h.value = e)),
                      class: "border-none-selector",
                      loading: t.loading,
                      "w-55": "",
                    },
                    {
                      default: u(() => [
                        (i(!0),
                        o(
                          p,
                          null,
                          d(
                            t.endpoints,
                            (e) => (
                              i(),
                              m(
                                T,
                                { key: e.id, value: e.id },
                                {
                                  default: u(() => [c(y(e.endpointName), 1)]),
                                  _: 2,
                                },
                                1032,
                                ["value"]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    },
                    8,
                    ["value", "loading"]
                  ),
                  t.inflightMessage
                    ? (i(),
                      m(
                        b,
                        {
                          key: 1,
                          "rounded-24px": "",
                          "ml-auto": "",
                          onClick: t.onAbort,
                        },
                        { default: u(() => [c(" Stop ")]), _: 1 },
                        8,
                        ["onClick"]
                      ))
                    : (i(),
                      m(
                        b,
                        {
                          key: 0,
                          "rounded-24px": "",
                          "ml-auto": "",
                          disabled: !f.value || !h.value,
                          type: "text",
                          onClick: t.onSend,
                        },
                        {
                          default: u(() => [
                            r(x, { icon: "i-icon:co-send", size: 20 }),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled", "onClick"]
                      )),
                ]),
              ]),
            ])
          );
        };
      },
    }),
    [["__scopeId", "data-v-f689523d"]]
  ),
  q = { flex: "~ 1 col center gap-5" },
  C = { flex: "~ col items-center" },
  F = s(
    "img",
    { "select-none": "", "pointer-events-none": "", "h-12": "", src: w },
    null,
    -1
  ),
  k = ["textContent"],
  S = s("span", { "opacity-45": "" }, " Try generating: ", -1),
  W = { grid: "~ cols-3 gap-4", "lt-lg:grid-cols-1": "", "w-full": "" },
  G = e({
    __name: "ChatQuestions",
    props: { prompts: {}, description: {} },
    emits: ["send"],
    setup(e, { emit: t }) {
      const n = e,
        l = t;
      return (e, t) => {
        const a = I;
        return (
          i(),
          o("div", q, [
            s("div", C, [
              F,
              n.description
                ? (i(),
                  o(
                    "div",
                    {
                      key: 0,
                      "min-h-8": "",
                      "text-xl": "",
                      "mt-30px": "",
                      "mb-50px": "",
                      textContent: y(n.description),
                    },
                    null,
                    8,
                    k
                  ))
                : h("", !0),
              S,
            ]),
            s("div", W, [
              (i(!0),
              o(
                p,
                null,
                d(
                  n.prompts,
                  (e) => (
                    i(),
                    m(
                      a,
                      {
                        key: e,
                        "hover:shadow-md": "",
                        "cursor-pointer": "",
                        onClick: (t) => l("send", e),
                      },
                      { default: u(() => [s("span", null, y(e), 1)]), _: 2 },
                      1032,
                      ["onClick"]
                    )
                  )
                ),
                128
              )),
            ]),
          ])
        );
      };
    },
  });
function H(e, t) {
  const { directions: n } = T(e);
  v(() => {
    e.value &&
      t.value &&
      !n.top &&
      e.value?.scrollTo({ top: e.value?.scrollHeight });
  });
}
const U = x("co-app", () => {
  const e = b({
      llm: { id: "", messages: [], status: new Set() },
      textToImage: { id: "", messages: [], status: new Set() },
      textToVideo: { id: "", messages: [], status: new Set() },
    }),
    t = E("llm"),
    n = P(() => e[t.value].endpoints || []),
    i = P(() => {
      const i = e[t.value].activedEndpointId;
      if (!i) return;
      const o = n.value;
      return o && 0 !== o.length ? o.find((e) => e.id === i) : void 0;
    }),
    o = P(() => e[t.value].status),
    s = P(() => e[t.value].messages);
  async function l(t) {
    if (e[t].status.has("loading-endpoints")) return;
    const n =
      "llm" === t
        ? A.CHAT_COMPLETIONS
        : "textToImage" === t
        ? A.TEXT2IMAGE
        : A.TEXT2VIDEO;
    e[t].status.add("loading-endpoints"),
      (e[t].endpoints = await (async function (e) {
        return e === A.CHAT_COMPLETIONS
          ? [
              {
                id: 1821952561,
                realEndpointId: null,
                endpointName: "Meta-Llama-3-8B-Instruct",
                realEndpointName: null,
                modelId: 1048,
                modelName: "Meta-Llama-3-8B-Instruct",
                modelVersion: "v2-Thu Apr 18 20:58:52 GMT 2024",
                resourceType: "md.fedml_cloud_device",
                status: "DEPLOYED",
                createTime: "2024-09-15 17:53:45",
                updateBy: "meta",
                updateTime: "2024-09-16 09:44:00",
                inputJson:
                  '{"stream":true,"messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Who won the world series in 2020?"},{"role":"assistant","content":"The Los Angeles Dodgers won the World Series in 2020."},{"role":"user","content":"Where was it played?"}],"model":"meta/Meta-Llama-3-8B-Instruct"}',
                outputJson: "[]",
                requestUrl:
                  "https://open.chainopera.ai/inference/api/v1/chat/completions",
                modelConfig:
                  '{"environment_variables":{"HF_HOME":"/home/fedml/fedml_serving/model_and_config","HF_TOKEN":"config/huggingface/DEFAULT_HF_TOKEN","INFERENCE_CONFIG":"config/inference/meta-llama--Meta-Llama-3-8B-Instruct.yaml"},"workspace":"./","computing":{"minimum_num_gpus":1,"maximum_cost_per_hour":"$5","resource_type":"A100-80G"},"request_input_example":{"model":"local_model","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Who won the world series in 2020?"},{"role":"assistant","content":"The Los Angeles Dodgers won the World Series in 2020."},{"role":"user","content":"Where was it played?"}]},"use_gpu":true,"inference_image_name":"fedml/fedml-inference-cuda-12-1-base","bootstrap":"echo \\"Bootstrap start...\\"\\nbash config/bootstrap.sh\\npip3 install -r requirements/requirements-vllm.txt\\necho \\"Bootstrap finished\\"","auto_detect_public_ip":true,"entry_point":"main_openai_vllm.py","data_cache_dir":"~/fedml_serving/model_and_config","deploy_timeout":3600,"endpoint_api_type":"text2text_llm_openai_chat_completions"}',
                suffixModelVersion: null,
                prefixModelVersion: null,
                isLLM: null,
                amount: null,
                apiType: 1,
                paymentType: 2,
                paymentTypeName: "serverless_pay_per_use_token",
                deploymentType: 1,
                deploymentTypeName: "serverless",
                visibility: 1,
                visibilityName: "Public",
                usedByOthers: !0,
                modelPrice: {
                  requestPrice: 0,
                  inputPrice: 0.1,
                  outputPrice: 0.1,
                  imagePrice: 0,
                  inputVideoPrice: 0,
                  outputVideoPrice: 0,
                  inputAudioPrice: 0,
                  outputAudioPrice: 0,
                  inputTextPrice: 0,
                  outputTextPrice: 0,
                },
                gpuType: null,
                gpuResourceType: null,
                gpuNumber: null,
                gpuNumberTotal: 1,
              },
              {
                id: 1821952553,
                realEndpointId: null,
                endpointName: "Meta-Llama-3-70B-Instruct",
                realEndpointName: null,
                modelId: 1047,
                modelName: "Meta-Llama-3-70B-Instruct",
                modelVersion: "v3-Thu Apr 18 20:05:26 GMT 2024",
                resourceType: "md.fedml_cloud_device",
                status: "DEPLOYED",
                createTime: "2024-09-14 09:40:50",
                updateBy: "meta",
                updateTime: "2024-09-16 09:46:00",
                inputJson:
                  '{"stream":true,"messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Who won the world series in 2020?"},{"role":"assistant","content":"The Los Angeles Dodgers won the World Series in 2020."},{"role":"user","content":"Where was it played?"}],"model":"meta/Meta-Llama-3-70B-Instruct"}',
                outputJson: "[]",
                requestUrl:
                  "https://open.chainopera.ai/inference/api/v1/chat/completions",
                modelConfig:
                  '{"workspace":"./","request_input_example":{"model":"local_model","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Who won the world series in 2020?"},{"role":"assistant","content":"The Los Angeles Dodgers won the World Series in 2020."},{"role":"user","content":"Where was it played?"}]},"use_gpu":true,"shm_size":"500GB","bootstrap":"echo \\"Bootstrap start...\\"\\nbash config/bootstrap.sh\\npip3 install -r requirements/requirements-vllm.txt\\necho \\"Bootstrap finished\\"","auto_detect_public_ip":true,"data_cache_dir":"~/fedml_serving/model_and_config","environment_variables":{"HF_HOME":"/home/fedml/fedml_serving/model_and_config","HF_TOKEN":"config/huggingface/DEFAULT_HF_TOKEN","INFERENCE_CONFIG":"config/inference/meta-llama--Meta-Llama-3-70B-Instruct.yaml"},"computing":{"minimum_num_gpus":1,"maximum_cost_per_hour":"$5","resource_type":"A100-80G"},"inference_image_name":"fedml/fedml-inference-cuda-12-1-base","entry_point":"main_openai_vllm.py","deploy_timeout":7200,"endpoint_api_type":"text2text_llm_openai_chat_completions"}',
                suffixModelVersion: null,
                prefixModelVersion: null,
                isLLM: null,
                amount: null,
                apiType: 1,
                paymentType: 2,
                paymentTypeName: "serverless_pay_per_use_token",
                deploymentType: 1,
                deploymentTypeName: "serverless",
                visibility: 1,
                visibilityName: "Public",
                usedByOthers: !0,
                modelPrice: {
                  requestPrice: 0,
                  inputPrice: 0.9,
                  outputPrice: 0.9,
                  imagePrice: 0,
                  inputVideoPrice: 0,
                  outputVideoPrice: 0,
                  inputAudioPrice: 0,
                  outputAudioPrice: 0,
                  inputTextPrice: 0,
                  outputTextPrice: 0,
                },
                gpuType: null,
                gpuResourceType: null,
                gpuNumber: null,
                gpuNumberTotal: 2,
              },
              {
                id: 1821952562,
                realEndpointId: null,
                endpointName: "Fox-1-1_6B-Instruct-v0_1",
                realEndpointName: null,
                modelId: 1228,
                modelName: "Fox-1-1_6B-Instruct-v0_1",
                modelVersion: "v0-Tue Jun 25 08:52:58 GMT 2024",
                resourceType: "md.fedml_cloud_device",
                status: "DEPLOYED",
                createTime: "2024-09-15 17:56:43",
                updateBy: "tensoropera",
                updateTime: "2024-09-16 09:48:00",
                inputJson:
                  '{"stream":true,"messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Who won the world series in 2020?"},{"role":"assistant","content":"The Los Angeles Dodgers won the World Series in 2020."},{"role":"user","content":"Where was it played?"}],"model":"tensoropera/Fox-1-1_6B-Instruct-v0_1"}',
                outputJson: "[]",
                requestUrl:
                  "https://open.chainopera.ai/inference/api/v1/chat/completions",
                modelConfig:
                  '{"environment_variables":{"HF_HOME":"/home/fedml/fedml_model_serving_cache","HF_TOKEN":"config/huggingface/DEFAULT_HF_TOKEN","INFERENCE_CONFIG":"config/inference/tensoropera--Fox-1-1.6B-Instruct-v0.1.yaml"},"workspace":"./","computing":{"minimum_num_gpus":1,"maximum_cost_per_hour":"$5","resource_type":"A100-80G"},"request_input_example":{"model":"local_model","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Who won the world series in 2020?"},{"role":"assistant","content":"The Los Angeles Dodgers won the World Series in 2020."},{"role":"user","content":"Where was it played?"}]},"use_gpu":true,"inference_image_name":"fedml/fedml-inference-cuda-12-1-base","bootstrap":"echo \\"Bootstrap start...\\"\\nbash config/bootstrap.sh \\"transformers>=4.38.1\\" \\"vllm>=0.4.3,<0.5.0\\" -r requirements/requirements-vllm.txt\\necho \\"Bootstrap finished\\"","auto_detect_public_ip":true,"entry_point":"main_openai_vllm.py","data_cache_dir":"~/fedml_model_serving_cache","deploy_timeout":3600,"endpoint_api_type":"text2text_llm_openai_chat_completions"}',
                suffixModelVersion: null,
                prefixModelVersion: null,
                isLLM: null,
                amount: null,
                apiType: 1,
                paymentType: 2,
                paymentTypeName: "serverless_pay_per_use_token",
                deploymentType: 1,
                deploymentTypeName: "serverless",
                visibility: 1,
                visibilityName: "Public",
                usedByOthers: !0,
                modelPrice: {
                  requestPrice: null,
                  inputPrice: null,
                  outputPrice: null,
                  imagePrice: null,
                  inputVideoPrice: 0,
                  outputVideoPrice: 0,
                  inputAudioPrice: 0,
                  outputAudioPrice: 0,
                  inputTextPrice: 0,
                  outputTextPrice: 0,
                },
                gpuType: null,
                gpuResourceType: null,
                gpuNumber: null,
                gpuNumberTotal: 1,
              },
              {
                id: 1821952568,
                realEndpointId: null,
                endpointName: "Mixtral-8x7B-Instruct-v0-1",
                realEndpointName: null,
                modelId: 447,
                modelName: "Mixtral-8x7B-Instruct-v0-1",
                modelVersion: "v6-Sun Sep 15 19:15:31 GMT 2024",
                resourceType: "md.fedml_cloud_device",
                status: "DEPLOYED",
                createTime: "2024-09-15 19:15:48",
                updateBy: "mistralai",
                updateTime: "2024-09-16 09:50:01",
                inputJson:
                  '{"stream":true,"messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Who won the world series in 2020?"},{"role":"assistant","content":"The Los Angeles Dodgers won the World Series in 2020."},{"role":"user","content":"Where was it played?"}],"model":"mistralai/Mixtral-8x7B-Instruct-v0-1"}',
                outputJson: "[]",
                requestUrl:
                  "https://open.chainopera.ai/inference/api/v1/chat/completions",
                modelConfig:
                  '{"environment_variables":{"HF_HOME":"/home/fedml/fedml_serving/model_and_config","HF_TOKEN":"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","HUGGING_FACE_HUB_TOKEN":"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","MODEL_NAME_OR_PATH":"mistralai/Mixtral-8x7B-Instruct-v0.1","MODEL_DTYPE":"auto","MAX_NEW_TOKENS":"0","DO_SAMPLE":"True","TEMPERATURE":"0.7","TOP_K":"50","TOP_P":"0.95","VERBOSE":"True"},"workspace":"./","computing":{"minimum_num_gpus":2,"maximum_cost_per_hour":"$5","resource_type":"A100-80G"},"request_input_example":{"model":"local_model","messages":[{"role":"system","content":"You are a helpful assistant."},{"role":"user","content":"Who won the world series in 2020?"},{"role":"assistant","content":"The Los Angeles Dodgers won the World Series in 2020."},{"role":"user","content":"Where was it played?"}]},"use_gpu":true,"inference_image_name":"fedml/fedml-inference-cuda-12-1-base","bootstrap":"echo \\"Bootstrap start...\\"\\nbash config/bootstrap.sh -r requirements/requirements-vllm.txt\\necho \\"Bootstrap finished\\"","auto_detect_public_ip":true,"entry_point":"main_openai_vllm.py","data_cache_dir":"~/fedml_serving/model_and_config","deploy_timeout":3600,"endpoint_api_type":"text2text_llm_openai_chat_completions"}',
                suffixModelVersion: null,
                prefixModelVersion: null,
                isLLM: null,
                amount: null,
                apiType: 1,
                paymentType: 2,
                paymentTypeName: "serverless_pay_per_use_token",
                deploymentType: 1,
                deploymentTypeName: "serverless",
                visibility: 1,
                visibilityName: "Public",
                usedByOthers: !0,
                modelPrice: {
                  requestPrice: 0,
                  inputPrice: 0.5,
                  outputPrice: 0.5,
                  imagePrice: null,
                  inputVideoPrice: 0,
                  outputVideoPrice: 0,
                  inputAudioPrice: 0,
                  outputAudioPrice: 0,
                  inputTextPrice: 0,
                  outputTextPrice: 0,
                },
                gpuType: null,
                gpuResourceType: null,
                gpuNumber: null,
                gpuNumberTotal: 2,
              },
            ]
          : e === A.TEXT2IMAGE
          ? [
              {
                id: 1821952687,
                realEndpointId: null,
                endpointName: "Dev",
                realEndpointName: null,
                modelId: 1373,
                modelName: "Dev",
                modelVersion: "v3-Thu Sep 26 21:32:01 GMT 2024",
                resourceType: "md.fedml_cloud_device",
                status: "DEPLOYED",
                edgeId: '["134561","134560"]',
                deleted: 0,
                createTime: "2024-09-26 21:32:21",
                updateBy: "Flux",
                updateTime: "2024-12-31 09:44:04",
                token: "fe1d89af6d784189b6877876221f2890",
                replicas: 1,
                onlineReplicas: 1,
                requests: 0,
                replicasStr: null,
                min: 1,
                max: 1,
                endpointMonitoring: null,
                latency: null,
                inputJson:
                  '{"model_name":"dev","guidance_scale":7,"width":512,"model":"Flux/Dev","prompt":"A cat holding a sign that says \'FLUX DEV\'","steps":6,"height":512}',
                outputJson: "[]",
                requestUrl:
                  "https://open.tensoropera.ai/inference/api/v1/text2Image",
                modelConfig:
                  '{"workspace":"./","computing":{"minimum_num_gpus":1,"maximum_cost_per_hour":"$5","resource_type":"A6000"},"request_input_example":{"prompt":"A cat holding a sign that says \'FLUX DEV\'","height":512,"width":512,"steps":6,"guidance_scale":7,"model_name":"dev"},"num_gpus":1,"use_gpu":true,"image_pull_policy":"Always","inference_image_name":"fedml/flux:dev","bootstrap":"echo \\"No Bootstrap required\\"","auto_detect_public_ip":true,"entry_point":"flux_dev.py","endpoint_api_type":"text2image"}',
                qps: null,
                suffixModelVersion: null,
                prefixModelVersion: null,
                inferenceEngine: null,
                isLLM: null,
                logFullUrl: null,
                latestPaymentTime: "2024-12-31 09:44:04",
                gpuIdList: '{"gpu_1839063682806583330": "1"}',
                gpuDeployIdList: '{"134560": "1"}',
                amount: null,
                modelTaskId: 1,
                modelTaskName: null,
                apiType: 3,
                paymentType: 5,
                deploymentType: 1,
                visibility: 1,
                usedByOthers: !0,
                runId: 0x1986ecb2b0021000,
                gpuNumber: null,
                gpuNumberTotal: 1,
                gpuNumberOfReplica: 1,
                autoscaling: !1,
                replicaIds: '["134560_1"]',
                targetQueriesPerReplica: 1,
                aggregationWindowSizeSeconds: 60,
                scaleDownDelaySeconds: 120,
                updating: null,
                serverlessContainer: !1,
                marketplaceType: null,
                deployEnded: !0,
                publicCloudDeployment: !0,
              },
            ]
          : [
              {
                id: 1821952570,
                realEndpointId: null,
                endpointName: "AnimateDiff-Lightning",
                realEndpointName: null,
                modelId: 1356,
                modelName: "AnimateDiff-Lightning",
                modelVersion: "v0-Mon Sep 16 01:28:50 GMT 2024",
                resourceType: "md.fedml_cloud_device",
                status: "DEPLOYED",
                createTime: "2024-09-16 02:17:21",
                updateBy: "ByteDance",
                updateTime: "2024-09-16 09:52:01",
                inputJson:
                  '{"guidance_scale":1,"model":"ByteDance/AnimateDiff-Lightning","prompt":"A girl smiling"}',
                outputJson: "[]",
                requestUrl:
                  "https://open.chainopera.ai/inference/api/v1/text2Video",
                modelConfig:
                  '{"workspace":"./","request_input_example":{"prompt":"A girl smiling","guidance_scale":1},"num_gpus":1,"use_gpu":true,"inference_image_name":"fedml/fedml-inference-cuda-12-1-base","bootstrap":"echo \\"Prerequisites installation script starts\\"\\npip install fedml\\npip install huggingface_hub\\npip install diffusers\\npip install transformers\\npip install accelerate\\npip install opencv-python\\npip install imageio[ffmpeg]\\necho \\"Prerequisites installation install script ends\\"","auto_detect_public_ip":true,"entry_point":"main_adl.py","endpoint_api_type":"text2video"}',
                suffixModelVersion: null,
                prefixModelVersion: null,
                isLLM: null,
                amount: null,
                apiType: 4,
                paymentType: 3,
                paymentTypeName: "serverless_pay_per_use_request",
                deploymentType: 1,
                deploymentTypeName: "serverless",
                visibility: 1,
                visibilityName: "Public",
                usedByOthers: !0,
                modelPrice: {
                  requestPrice: null,
                  inputPrice: null,
                  outputPrice: null,
                  imagePrice: null,
                  inputVideoPrice: 0,
                  outputVideoPrice: 0,
                  inputAudioPrice: 0,
                  outputAudioPrice: 0,
                  inputTextPrice: 0,
                  outputTextPrice: 0,
                },
                gpuType: null,
                gpuResourceType: null,
                gpuNumber: null,
                gpuNumberTotal: 1,
              },
            ];
      })(n)),
      e[t].activedEndpointId ||
        (e[t].activedEndpointId = e[t].endpoints[0]?.id),
      e[t].status.delete("loading-endpoints");
  }
  return {
    state: e,
    currentAppType: t,
    getEndpoint: i,
    getEndpoints: n,
    getStatus: o,
    getMessages: s,
    setMessages: function (t, n) {
      e[t].messages = n;
    },
    reloadEndpoint: l,
    updateMessage: function (t, n) {
      const i = e[t].messages.indexOf(n);
      e[t].messages.splice(i, 1, n);
    },
    addMessage: function (n) {
      e[t.value].messages.push(n);
    },
    setEndpointId: function (n) {
      e[t.value].activedEndpointId = n;
    },
    init: function () {
      l("llm"), l("textToImage"), l("textToVideo");
    },
    enter: function (e) {
      (t.value = e), l(e);
    },
  };
});
export { O as C, G as _, H as a, U as u };

import {
  as as e,
  r as a,
  aL as t,
  bk as l,
  bw as o,
  au as r,
  av as s,
  aw as i,
  ax as n,
  bl as d,
  aC as u,
  bN as m,
  bo as c,
  aA as p,
  aB as _,
  aD as v,
  bV as h,
  cz as g,
  cA as f,
  bD as y,
  bh as b,
  a as I,
  by as L,
  cT as M,
  bR as k,
  at as N,
  ee as j,
  cX as S,
  d0 as T,
  bO as A,
  cZ as w,
  cY as O,
  aF as E,
  bp as U,
  az as C,
  eX as F,
} from "./index-DPRREYlk.js";
import { D as x } from "./data-um5MHdei.js";
import { S as P, _ as D } from "./PageWrapper-BPMfS97v.js";
import { g as B } from "./model-card-D4LTPZKW.js";
import { _ as z } from "./HuggingFaceModelSelector.vue_vue_type_script_setup_true_lang-DwENAAKf.js";
import { a as R, S as V } from "./index-BPauqaGF.js";
import { _ as H, T as q } from "./index-DTRlG5Qd.js";
import { E as G } from "./entrypointEnum-C42SeRoP.js";
import { _ as Y } from "./index.vue_vue_type_script_setup_true_lang-f4rZWPP7.js";
import { _ as J } from "./index-v1.vue_vue_type_script_setup_true_lang-BWWSKYSP.js";
import { _ as K, C as W } from "./index-B6_k9Qtv.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./uniqBy-CccCILMw.js";
import "./index-DUT4vpxn.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./useRefs-DoWExZxn.js";
const X = [
    "meta-llama/Meta-Llama-3-70B",
    "meta-llama/Meta-Llama-3-8B",
    "meta-llama/Llama-2-7b-hf",
    "meta-llama/Llama-2-13b-hf",
    "meta-llama/Llama-2-70b-hf",
    "mistralai/Mistral-7B-v0.1",
    "EleutherAI/pythia-70m",
    "EleutherAI/pythia-160m",
    "EleutherAI/pythia-410m",
    "EleutherAI/pythia-1b",
    "EleutherAI/pythia-1.4b",
    "EleutherAI/pythia-2.8b",
    "EleutherAI/pythia-6.9b",
    "EleutherAI/pythia-12b",
    "databricks/dolly-v2-3b",
    "databricks/dolly-v2-7b",
    "databricks/dolly-v2-12b",
    "tiiuae/falcon-7b",
    "tiiuae/falcon-40b",
  ],
  $ = [
    "FedML/PubMedQA_instruction",
    "FedML/databricks-dolly-15k-niid",
    "databricks/databricks-dolly-15k",
    "medalpaca/medical_meadow_mediqa",
    "bitext/Bitext-customer-support-llm-chatbot-training-dataset",
    "gbharti/wealth-alpaca_lora",
    "lavita/ChatDoctor-HealthCareMagic-100k",
  ],
  Q = e({
    emit: ["setModelName"],
    components: { HuggingFaceModelSelector: z },
    props: { modelInfo: { type: Object, default: () => {} } },
    setup(e, { emit: l }) {
      const o = a([]);
      o.value = X;
      const r = a({
        model_id: Number.NaN,
        model_tag: "openSource",
        model_name: "",
        model_url: "",
        hfurl: "",
      });
      r.value = e.modelInfo;
      const s = a(!1),
        i = a({ current: 1, pageSize: 10, total: 0 }),
        n = a([]),
        d = () => {
          l("setModelInfo", r.value);
        };
      return (
        t(() => {
          (async () => {
            s.value = !0;
            try {
              const e = await B({
                modelName: "",
                isLLM: !0,
                pageNum: i.value.current,
                pageSize: i.value.pageSize,
              });
              i.value.total = e.total;
              const a = [];
              e?.data.forEach((e) => {
                (e.checked = !1), a.push(e);
              }),
                (n.value = JSON.parse(JSON.stringify(a)));
            } catch (e) {
            } finally {
              s.value = !1;
            }
          })();
        }),
        {
          selectModels: o,
          pages: i,
          modelList: n,
          modelForm: r,
          loading: s,
          clickTab: (e) => {
            (r.value.model_tag = e), d();
          },
          clickItem: (e) => {
            (r.value.model_name = e), d();
          },
          emitParent: d,
          selectModelOptions: (e) => {
            const a = e.target.value,
              t = n.value.filter((e) => e.id === a);
            t.length &&
              ((r.value.model_name = t[0].modelName),
              (r.value.model_url = t[0].modelUrl),
              (r.value.model_id = t[0].id)),
              d();
          },
        }
      );
    },
  }),
  Z = ((e) => (g("data-v-6ce77e53"), (e = e()), f(), e))(() =>
    d("div", { class: "title-h1" }, " Select base model ", -1)
  ),
  ee = { class: "tab-wrap" };
const ae = l(Q, [
    [
      "render",
      function (e, a, t, l, g, f) {
        const y = R,
          b = V,
          I = h,
          L = H,
          M = o("HuggingFaceModelSelector"),
          k = q;
        return (
          r(),
          s("div", null, [
            Z,
            i(
              k,
              {
                "active-key": e.modelForm.model_tag,
                type: "card",
                onChange: e.clickTab,
              },
              {
                default: n(() => [
                  i(
                    L,
                    { key: "openSource", tab: "Open Source LLMs" },
                    {
                      default: n(() => [
                        d("div", ee, [
                          i(
                            b,
                            {
                              ref: "select",
                              value: e.modelForm.model_name,
                              "onUpdate:value":
                                a[0] ||
                                (a[0] = (a) => (e.modelForm.model_name = a)),
                              style: { width: "40%", "min-width": "500px" },
                              placeholder: "Select Training data",
                              onChange: e.clickItem,
                            },
                            {
                              default: n(() => [
                                (r(!0),
                                s(
                                  u,
                                  null,
                                  m(
                                    e.selectModels,
                                    (e, a) => (
                                      r(),
                                      c(
                                        y,
                                        { key: `${a}*`, value: e },
                                        {
                                          default: n(() => [p(_(e), 1)]),
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
                            ["value", "onChange"]
                          ),
                          0 === e.selectModels.length
                            ? (r(),
                              c(I, {
                                key: 0,
                                description: "No Options",
                                style: { width: "100%" },
                              }))
                            : v("", !0),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  i(
                    L,
                    { key: "huggingFace", tab: "Hugging Face LLM Model" },
                    {
                      default: n(() => [
                        i(
                          M,
                          {
                            modelValue: e.modelForm.hfurl,
                            "onUpdate:modelValue":
                              a[1] || (a[1] = (a) => (e.modelForm.hfurl = a)),
                            onChange: a[2] || (a[2] = (a) => e.emitParent()),
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["active-key", "onChange"]
            ),
          ])
        );
      },
    ],
    ["__scopeId", "data-v-6ce77e53"],
  ]),
  te = ((e) => (g("data-v-c4e27bbf"), (e = e()), f(), e))(() =>
    d(
      "div",
      { class: "title-wrap" },
      [d("div", { class: "title-h1" }, " LLM Training data ")],
      -1
    )
  ),
  le = l(
    e({
      __name: "selectTrainingDataPanel",
      props: { modelValue: {}, modelModifiers: {} },
      emits: ["update:modelValue"],
      setup(e) {
        const l = a($.map((e) => ({ label: e, value: e }))),
          d = a([]),
          u = y(e, "modelValue"),
          m = a(""),
          c = a(!1),
          _ = b();
        async function v(e = "") {
          (m.value = e), (c.value = !0);
          try {
            const { data: a } = await M("/api/v1/storage/list").get({
              query: {
                datasetName: e,
                author: _.getUserInfo.account,
                pageNum: 1,
                pageSize: 9999,
              },
            });
            d.value = (a?.data ?? []).map((e) => ({
              ...e,
              label: e.datasetName,
              value: e.datasetName,
            }));
          } catch (a) {
          } finally {
            c.value = !1;
          }
        }
        return (
          t(() => {
            v();
          }),
          (e, a) => {
            const t = V,
              _ = o("router-link"),
              h = P;
            return (
              r(),
              s("div", null, [
                te,
                i(h, null, {
                  default: n(() => [
                    i(
                      t,
                      {
                        value: u.value,
                        "onUpdate:value": a[0] || (a[0] = (e) => (u.value = e)),
                        style: { width: "40%", "min-width": "500px" },
                        options: [...I(d), ...I(l)],
                        loading: I(c),
                        "search-value": I(m),
                        "auto-clear-search-value": "",
                        "show-search": "",
                        placeholder: "Select Training data",
                        onSearch: v,
                      },
                      null,
                      8,
                      ["value", "options", "loading", "search-value"]
                    ),
                    i(
                      _,
                      {
                        to: {
                          name: ("routerNames" in e ? e.routerNames : I(L))
                            .DATA_CREATE,
                          query: { isCreate: "true" },
                        },
                      },
                      {
                        default: n(() => [p(" Add more Training data.>> ")]),
                        _: 1,
                      },
                      8,
                      ["to"]
                    ),
                  ]),
                  _: 1,
                }),
              ])
            );
          }
        );
      },
    }),
    [["__scopeId", "data-v-c4e27bbf"]]
  ),
  oe = { class: "mb-4 p-4 app-content" },
  re = { class: "content-wrap" },
  se = ((e) => (g("data-v-f816be93"), (e = e()), f(), e))(() =>
    d("div", { class: "title-h1 pl-4" }, " Build a new run ", -1)
  ),
  ie = { class: "title-desc pl-4" },
  ne = ["href"],
  de = { class: "pl-4" },
  ue = { class: "pl-4" },
  me = l(
    e({
      __name: "index",
      setup(e) {
        const l = k(),
          o = a([]),
          s = N({
            model_id: Number.NaN,
            model_tag: "openSource",
            model_name: "",
            model_url: "",
            hfurl: "",
          }),
          u = a(
            j.stringify({
              training_parameters: {
                num_train_epochs: 1,
                learning_rate: 0.004,
                peft_type: "lora",
                lora_r: 8,
                lora_dropout: 0.1,
                lora_alpha: 32,
                test_dataset_size: 1e3,
                per_device_train_batch_size: 1,
                per_device_eval_batch_size: 1,
                max_steps: -1,
                minimum_num_gpus: 1,
                resource_type: "H100-80G",
                cloud_type: "secure_cloud",
              },
            })
          ),
          m = a(!1),
          v = a(!1),
          h = b(),
          g = S(),
          f = N({ dataset_name: "", dataset_url: "", target_md5: "" }),
          y = a(!1);
        function M(e, a) {
          l.push({
            name: L.TRAIN_PROJECT_RUN,
            query: { projectId: e, runId: a },
          });
        }
        function P() {
          return w("/api/v1/payment/getUserBindCard")
            .post({ body: { userId: Number(h.getUserInfo.id) } })
            .then((e) => {
              e.data && 0 == e.data.bindCardBoolean
                ? (v.value = !1)
                : (v.value = !0);
            });
        }
        function B() {
          (m.value = !1),
            g.setIsUserCloseTheBindPopup(!0),
            l.push({ name: L.BILLING });
        }
        async function z() {
          await O(h.getUserInfo.id), await P(), R();
        }
        async function R() {
          const e = j.parse(u.value),
            a = {
              userId: h.getUserInfo.id,
              apiKey: h.getUserInfo.apiKey,
              model_tag: s.model_tag,
              model_name: s.model_name,
              model_url: s.model_url,
              data_set_obj: f,
              ...e.training_parameters,
            };
          if ("openSource" !== s.model_tag || s.model_name)
            if ("history" !== s.model_tag || s.model_name) {
              if ("huggingFace" === s.model_tag) {
                if (!s.hfurl)
                  return void E.error(
                    "Please enter the HuggingFace Path information!"
                  );
                (a.model_url = ""), (a.model_name = s.hfurl);
              }
              var t;
              if (f.dataset_name)
                if (0 != v.value)
                  (y.value = !0),
                    await ((t = {
                      ...a,
                      feature_entrypoint:
                        G.FEATURE_ENTRYPOINT_STUDIO_LLM_FINE_TUNING,
                    }),
                    F("/api/v1/train/start").post({ body: t, timeout: 1e5 }))
                      .then((e) => {
                        "5" == e.data.code
                          ? (E.info(e.data.message),
                            M(e.data.project_id, e.data.job_id))
                          : "6" == e.data.code || "7" == e.data.code
                          ? (E.info("You need to bind a credit card."),
                            l.push({ name: L.BILLING }))
                          : "0" != e.data.code
                          ? E.error(e.data.message)
                          : "0" == e.data.code &&
                            M(e.data.project_id, e.data.job_id);
                      })
                      .finally(() => {
                        y.value = !1;
                      });
                else m.value = !0;
              else E.error("Please Select The LLM Training data");
            } else E.error("Please Select The Previously Fine-Tuned Model");
          else E.error("Please Select The Open Source LLMs Model");
        }
        return (
          t(() => {
            P();
          }),
          (e, a) => {
            const t = K,
              l = W,
              v = U,
              h = C,
              g = D;
            return (
              r(),
              c(
                g,
                {
                  "content-full-height": "",
                  "fixed-height": "",
                  "auto-title": "",
                },
                {
                  default: n(() => [
                    d("div", oe, [
                      d("div", re, [
                        se,
                        d("div", ie, [
                          p(
                            " Create a private LLM by fine-tuning with your documents. ["
                          ),
                          d(
                            "a",
                            {
                              href: `${
                                "APP_DOC_BASE_URL" in e
                                  ? e.APP_DOC_BASE_URL
                                  : I(T)
                              }train/train-on-cloud/zero-code-serverless-llm-training`,
                              target: "“_blank”",
                            },
                            "Tutorial",
                            8,
                            ne
                          ),
                          p("] "),
                        ]),
                        d("div", de, [
                          i(
                            ae,
                            {
                              "model-info": I(s),
                              onSetModelInfo:
                                a[0] ||
                                (a[0] = (e) => {
                                  s.value = e;
                                }),
                            },
                            null,
                            8,
                            ["model-info"]
                          ),
                        ]),
                        d("div", ue, [
                          i(
                            le,
                            {
                              modelValue: I(f).dataset_name,
                              "onUpdate:modelValue":
                                a[1] || (a[1] = (e) => (I(f).dataset_name = e)),
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                        ]),
                        i(
                          l,
                          {
                            "active-key": I(o),
                            "onUpdate:activeKey":
                              a[3] ||
                              (a[3] = (e) => (A(o) ? (o.value = e) : null)),
                            ghost: "",
                          },
                          {
                            default: n(() => [
                              i(
                                t,
                                {
                                  key: "1",
                                  header: "Advanced Options",
                                  "force-render": "",
                                },
                                {
                                  default: n(() => [
                                    i(
                                      J,
                                      {
                                        value: I(u),
                                        "onUpdate:value":
                                          a[2] ||
                                          (a[2] = (e) =>
                                            A(u) ? (u.value = e) : null),
                                        class:
                                          "!h-100 ring-primary/10 hover:ring-4 rounded-sm shadow-sm",
                                        mode: ("DATA_MODE" in e
                                          ? e.DATA_MODE
                                          : I(x)
                                        ).YAML,
                                        options: { readOnly: !1 },
                                      },
                                      null,
                                      8,
                                      ["value", "mode"]
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["active-key"]
                        ),
                        i(
                          h,
                          {
                            class: "ml-4",
                            type: "primary",
                            loading: I(y),
                            size: "large",
                            onClick: R,
                          },
                          {
                            default: n(() => [
                              p(_(I(y) ? "Launch Running..." : "Launch"), 1),
                              i(v, { icon: "i-solar:rocket-2-bold" }),
                            ]),
                            _: 1,
                          },
                          8,
                          ["loading"]
                        ),
                      ]),
                      i(
                        Y,
                        {
                          "is-display": I(m),
                          "onUpdate:isDisplay":
                            a[4] ||
                            (a[4] = (e) => (A(m) ? (m.value = e) : null)),
                          source: "trainAndDeploy",
                          onHandleOk: B,
                          onTryNow: z,
                        },
                        null,
                        8,
                        ["is-display"]
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
    }),
    [["__scopeId", "data-v-f816be93"]]
  );
export { me as default };

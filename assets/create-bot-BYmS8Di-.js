import {
  dj as e,
  as as a,
  at as t,
  r as s,
  aK as l,
  bD as i,
  bh as o,
  bR as n,
  aL as r,
  bX as p,
  au as u,
  bo as d,
  ax as c,
  bl as m,
  aw as f,
  bY as y,
  a as v,
  av as g,
  bM as b,
  aB as h,
  da as _,
  aA as j,
  cE as x,
  by as k,
  ay as U,
  bp as T,
  dk as S,
  az as w,
  cz as P,
  cA as A,
  aF as C,
  bk as I,
} from "./index-DPRREYlk.js";
import { P as F } from "./index-Dgmkw5o7.js";
import { u as L } from "./useConfigList-BkT8qE0X.js";
import { S as O } from "./S3Slicer-yGYkflXA.js";
import { m as E } from "./zipFile-AXM3yx2R.js";
import { b as z } from "./end-point-DU-Fwl9Z.js";
import { C as K } from "./Chat-96QnqSrk.js";
import { S as D } from "./index-BPauqaGF.js";
import { _ as G } from "./index-Ty6iIrKu.js";
import { U as N } from "./index-Cwp0M7C5.js";
import { _ as M, F as R } from "./index-5bY6ZDBk.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./orderBy-B1G-W8_4.js";
import "./_baseOrderBy-B_MN0TyA.js";
import "./_baseEach-BDY_Tvly.js";
import "./index-BjWU5dL-.js";
import "./jszip.min-C_PVdnoP.js";
import "./_commonjs-dynamic-modules-BHR_E30J.js";
import "./useChatList-Ch8PximY.js";
import "./index-DNofMLzB.js";
/* empty css                                                             */ import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./index-jlJCtu5U.js";
import "./debounce-CUtJ7ZQO.js";
import "./DownloadOutlined-6grUi9hP.js";
import "./index-DloxV9od.js";
import "./useRefs-DoWExZxn.js";
import "./Col-Djm-avAF.js";
e(
  "LOCAL_STORAGE_PREFIX_opengpts_user_id",
  `opengpts_user_id=${crypto.randomUUID()};`
);
const B = [
    {
      title: "Search",
      key: "0",
      children: [
        { title: "DDG Search", key: "DDG Search" },
        { title: "Press Releases (Kay.ai)", key: "Press Releases (Kay.ai)" },
        { title: "Search (Tavily)", key: "Search (Tavily)" },
        { title: "Wikipedia", key: "Wikipedia" },
      ],
    },
    {
      title: "Healthcare",
      key: "1",
      children: [{ title: "PubMed", key: "PubMed" }],
    },
    {
      title: "Finance",
      key: "2",
      children: [
        { title: "SEC Filings (Kay.ai)", key: "SEC Filings (Kay.ai)" },
      ],
    },
    {
      title: "Academia",
      key: "3",
      children: [{ title: "Arxiv", key: "Arxiv" }],
    },
  ],
  q = [
    { label: "GPT 3.5 Turbo", value: "GPT 3.5 Turbo" },
    { label: "GPT 4 OpenAI", value: "GPT 4" },
  ],
  $ = (e) => (P("data-v-fc579447"), (e = e()), A(), e),
  W = { class: "app-content flex relative p2 gap-2 items-start" },
  Y = { class: "app-panel w-80 h-full overflow-auto relative flex-1 p-4" },
  X = { class: "flex items-center gap-1" },
  H = { key: 0, title: "Your own private model." },
  J = ["title"],
  Q = { class: "text-truncate" },
  V = {
    class:
      "border-gray-200 border-1 border-solid p-2 rounded-sm hover:border-primary transition-border-color",
  },
  Z = $(() =>
    m(
      "p",
      { class: "ant-upload-text" },
      " Click or drag file to this area to upload ",
      -1
    )
  ),
  ee = $(() =>
    m(
      "p",
      { class: "ant-upload-hint pl-10 !text-left" },
      [
        j(" Supported file formats: "),
        m("span", { class: "text-primary" }, ".txt"),
        j(", "),
        m("span", { class: "text-primary" }, ".csv"),
        j(", "),
        m("span", { class: "text-primary" }, ".html"),
        j(", "),
        m("span", { class: "text-primary" }, ".docx"),
        j(", "),
        m("span", { class: "text-primary" }, ".pdf"),
        j(". "),
        m("br"),
      ],
      -1
    )
  ),
  ae = I(
    a({
      __name: "create-bot",
      props: {
        meta: { default: () => ({ size: 0, url: "", key: "", type: "" }) },
        metaModifiers: {},
      },
      emits: ["update:meta"],
      setup(e) {
        const a = t({
            name: "",
            model: "",
            modelSoruce: "fedml",
            prompt: "You are a helpful assistant.",
            avatarUrl: "",
            isFileUpload: 0,
            files: [],
            tools: [],
          }),
          P = s(!1),
          A = s(crypto.randomUUID()),
          I = l(null),
          $ = s(0),
          ae = s(0),
          te = i(e, "meta"),
          se = o(),
          le = s(!1),
          ie = s([]),
          oe = s([]),
          ne = t(B);
        const re = n(),
          pe = s([".txt", ".csv", ".docx", ".pdf"]),
          { saveConfig: ue } = L(),
          de = s(!1),
          ce = s({});
        async function me() {
          if ("" == a.name)
            return void C.warning("Please Input The Assistant Name");
          if ("" == a.model) return void C.warning("Please Select The Model");
          de.value = !0;
          const e =
            ((a.tools = a.tools.filter(
              (e) => "0" != e && "1" != e && "2" != e && "3" != e
            )),
            "nexus" != ce.value.from
              ? {
                  name: a.name,
                  config: {
                    configurable: {
                      type: "agent",
                      "type==agent/agent_type": a.model,
                      "type==agent/system_message": a.prompt,
                      "type==agent/endpoint_name": a.model,
                      "type==agent/tools": a.tools,
                      avatarUrl: a.avatarUrl,
                    },
                  },
                  public: !0,
                }
              : {
                  name: a.name,
                  config: {
                    configurable: {
                      type: "agent",
                      "type==agent/agent_type": "User Define",
                      "type==agent/endpoint_name": ce.value.label,
                      "type==agent/user_key": se.getUserInfo.apiKey,
                      "type==agent/user_account": se.getUserInfo.account,
                      "type==agent/system_message": a.prompt,
                      "type==agent/tools": a.tools,
                      "type==agent/from": ce.value.from,
                      "type==agent/base_url": ce.value.baseUrl
                        ? ce.value.baseUrl
                        : "",
                      avatarUrl: a.avatarUrl,
                    },
                  },
                  public: !0,
                });
          0 == oe.value.length ? (a.isFileUpload = 0) : (a.isFileUpload = 1);
          const t = await ue(
            a.name,
            a.isFileUpload,
            e.config,
            a.files.map((e) => e.originFileObj),
            !1,
            A.value
          );
          (de.value = !1),
            re.push({
              name: k.AI_AGENT_CREATE_CHAT,
              params: { assistantId: t },
            });
        }
        function fe(e, t) {
          (ce.value = t),
            ce.value.from && "nexus" == ce.value.from
              ? ((le.value = !0), (a.tools = []))
              : (le.value = !1);
        }
        async function ye(e) {
          const t = oe.value.findIndex((a) => a.file_name == e.name),
            s = oe.value[t];
          await (async function (e, a) {
            return fetch(`/aiagent/assistants/deletefile/${e}/${a}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: se.getToken,
              },
            }).then((e) => {});
          })(A.value, s.file_name),
            -1 !== t && oe.value.splice(t, 1),
            0 == oe.value.length && (a.isFileUpload = 0);
        }
        async function ve(e) {
          await (async function (e) {
            const a = e.file;
            if (!a) return !1;
            const t = new O();
            (t.getKey = be),
              (I.value = t),
              (ae.value = 0),
              ($.value = 0),
              (P.value = !0);
            const s = await E(e);
            return t
              .upload(s, {
                onProgress(a) {
                  (ae.value += 1),
                    e.onProgress(
                      { percent: Math.floor((100 * ae.value) / $.value) },
                      s
                    );
                },
                onStart(e, a) {
                  ($.value = e.length),
                    (te.value = Object.assign(te.value || {}, {
                      size: s.size,
                      type: s.type,
                      key: a,
                    }));
                },
                onSuccess(a) {
                  (ae.value = $.value), (e.e = a);
                },
              })
              .then(async (s) => {
                if (s && s.Key)
                  return t.getObjectSignedUrl(s.Key, 604800).then((t) => {
                    (e.s3_url = t),
                      oe.value.push({ s3_url: t, file_name: a.name }),
                      (te.value = {
                        size: a.size,
                        type: a.type,
                        key: s.Key,
                        url: t,
                      });
                  });
              })
              .catch((e) => {
                (P.value = !1),
                  (te.value = { size: 0, url: "", key: "", type: "" });
              })
              .finally(() => {
                P.value = !1;
              });
          })(e),
            (async function (e, t) {
              const s = [t];
              return (
                (a.isFileUpload = 1),
                fetch("/aiagent/ingest", {
                  method: "POST",
                  body: JSON.stringify({
                    files: s,
                    config: {
                      configurable: {
                        assistant_id: A.value,
                        apikey: se.getUserInfo.apiKey,
                        fileName: e.file.name,
                      },
                    },
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: se.getToken,
                  },
                })
              );
            })(e, e.s3_url).then(() => {
              e.onSuccess(e.e);
            });
        }
        function ge() {
          (a.name = ""),
            (a.model = ""),
            (a.modelSoruce = "fedml"),
            (a.prompt = "You are a helpful assistant."),
            (a.avatarUrl = ""),
            (a.files = []),
            (a.tools = []),
            (a.isFileUpload = 0);
        }
        function be(e) {
          return [se.getUserInfo.id, A.value, e.name].join("/");
        }
        return (
          r(() => {
            !(async function () {
              const e = await z({});
              ie.value = (e || []).map(
                ({ endpointName: e, id: a, updateBy: t, requestUrl: s }) => ({
                  value: a,
                  label: `${t}/${e}`,
                  baseUrl: s,
                  from: "nexus",
                  owner: "self",
                })
              );
            })(),
              (oe.value = []);
          }),
          (e, t) => {
            const s = U,
              l = M,
              i = T,
              o = D,
              n = G,
              r = S,
              A = N,
              C = w,
              I = R,
              L = p("loading");
            return (
              u(),
              d(
                v(F),
                {
                  "content-full-height": "",
                  "auto-title": "",
                  "fixed-height": "",
                  onBack:
                    t[6] ||
                    (t[6] = (a) =>
                      v(x)(void 0, {
                        name: ("routerNames" in e ? e.routerNames : v(k))
                          .AI_AGENT_INDEX,
                      })),
                },
                {
                  default: c(() => [
                    m("div", W, [
                      f(K, {
                        class: "app-panel w-80 overflow-auto h-full relative",
                      }),
                      y(
                        (u(),
                        g("div", Y, [
                          f(
                            I,
                            {
                              "scroll-to-first-error": "",
                              model: v(a),
                              "label-col": { span: 8 },
                              "wrapper-col": { span: 12 },
                            },
                            {
                              default: c(() => [
                                f(
                                  l,
                                  { label: "Name", required: "" },
                                  {
                                    default: c(() => [
                                      f(
                                        s,
                                        {
                                          value: v(a).name,
                                          "onUpdate:value":
                                            t[0] ||
                                            (t[0] = (e) => (v(a).name = e)),
                                          maxlength: 20,
                                        },
                                        null,
                                        8,
                                        ["value"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                f(
                                  l,
                                  {
                                    label: "LLM (Large Language Model)",
                                    required: "",
                                    class: "is-tips",
                                  },
                                  {
                                    default: c(() => [
                                      f(
                                        o,
                                        {
                                          value: v(a).model,
                                          "onUpdate:value":
                                            t[1] ||
                                            (t[1] = (e) => (v(a).model = e)),
                                          options: [...v(q), ...v(ie)],
                                          onChange: fe,
                                        },
                                        {
                                          option: c((a) => [
                                            m("div", X, [
                                              a.owner
                                                ? (u(),
                                                  g("div", H, [
                                                    f(i, {
                                                      icon: "i-tdesign:git-repository-private",
                                                    }),
                                                  ]))
                                                : (u(),
                                                  g(
                                                    "div",
                                                    {
                                                      key: 1,
                                                      title: `Built-in model provided by ${
                                                        "APP_TITLE" in e
                                                          ? e.APP_TITLE
                                                          : v(b)
                                                      }®.`,
                                                    },
                                                    [
                                                      f(i, {
                                                        icon: "i-carbon:network-public",
                                                      }),
                                                    ],
                                                    8,
                                                    J
                                                  )),
                                              m("div", Q, h(a.label), 1),
                                            ]),
                                          ]),
                                          _: 1,
                                        },
                                        8,
                                        ["value", "options"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                f(
                                  l,
                                  { label: "Industry-specific Tool" },
                                  {
                                    default: c(() => [
                                      m("div", V, [
                                        f(
                                          n,
                                          {
                                            "checked-keys": v(a).tools,
                                            "onUpdate:checkedKeys":
                                              t[2] ||
                                              (t[2] = (e) => (v(a).tools = e)),
                                            "tree-data": v(ne),
                                            disabled: v(le),
                                            checkable: "",
                                            "default-expand-all": "",
                                            selectable: !1,
                                          },
                                          null,
                                          8,
                                          [
                                            "checked-keys",
                                            "tree-data",
                                            "disabled",
                                          ]
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                f(
                                  l,
                                  { label: "Prompt", required: "" },
                                  {
                                    default: c(() => [
                                      f(
                                        r,
                                        {
                                          value: v(a).prompt,
                                          "onUpdate:value":
                                            t[3] ||
                                            (t[3] = (e) => (v(a).prompt = e)),
                                          rows: 5,
                                          placeholder:
                                            "Example: You are a helpful assistant.",
                                        },
                                        null,
                                        8,
                                        ["value"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                f(
                                  l,
                                  { label: "Files" },
                                  {
                                    default: c(() => [
                                      m("div", null, [
                                        f(
                                          A,
                                          {
                                            "file-list": v(a).files,
                                            "onUpdate:fileList":
                                              t[4] ||
                                              (t[4] = (e) => (v(a).files = e)),
                                            name: "file",
                                            accept: v(pe).join(","),
                                            multiple: !0,
                                            "custom-request": ve,
                                            onRemove: ye,
                                          },
                                          {
                                            default: c(() => [
                                              f(i, {
                                                size: 48,
                                                icon: "i-ph:upload-simple-duotone",
                                              }),
                                              Z,
                                              ee,
                                            ]),
                                            _: 1,
                                          },
                                          8,
                                          ["file-list", "accept"]
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                f(
                                  l,
                                  { "wrapper-col": { span: 24, offset: 12 } },
                                  {
                                    default: c(() => [
                                      f(
                                        C,
                                        {
                                          class: "mx-2",
                                          type: "primary",
                                          loading: v(P),
                                          onClick:
                                            t[5] ||
                                            (t[5] = _(() => me(), ["prevent"])),
                                        },
                                        {
                                          default: c(() => [j(" Create ")]),
                                          _: 1,
                                        },
                                        8,
                                        ["loading"]
                                      ),
                                      f(
                                        C,
                                        {
                                          class: "mx-2",
                                          loading: v(P),
                                          onClick: ge,
                                        },
                                        {
                                          default: c(() => [j(" Reset ")]),
                                          _: 1,
                                        },
                                        8,
                                        ["loading"]
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["model"]
                          ),
                        ])),
                        [[L, v(de)]]
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
    [["__scopeId", "data-v-fc579447"]]
  );
export { ae as default };

import {
  as as e,
  bC as a,
  bD as t,
  r as s,
  c as l,
  au as i,
  av as o,
  aw as n,
  ax as d,
  bl as r,
  aB as u,
  aD as c,
  a as p,
  aA as v,
  bO as m,
  bz as h,
  bW as f,
  bp as w,
  ay as g,
} from "./index-DPRREYlk.js";
import { u as k } from "./uniqBy-CccCILMw.js";
import { S as y } from "./index-BPauqaGF.js";
import { _ as x } from "./index-DUT4vpxn.js";
var b = Object.defineProperty,
  A = (e, a, t) => (
    ((e, a, t) => {
      a in e
        ? b(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
        : (e[a] = t);
    })(e, "symbol" != typeof a ? a + "" : a, t),
    t
  );
async function T(e, a) {
  var t, s;
  const l = new _(
    e.url,
    e.status,
    null != (t = e.headers.get("X-Request-Id")) ? t : void 0
  );
  if (
    ((l.message = `Api error with status ${l.statusCode}. Request ID: ${l.requestId}, url: ${l.url}`),
    null == (s = e.headers.get("Content-Type"))
      ? void 0
      : s.startsWith("application/json"))
  ) {
    const a = await e.json();
    (l.message = a.error || a.message || l.message), (l.data = a);
  } else l.data = { message: await e.text() };
  throw l;
}
var _ = class extends Error {
  constructor(e, a, t, s) {
    super(s),
      A(this, "statusCode"),
      A(this, "url"),
      A(this, "requestId"),
      A(this, "data"),
      (this.statusCode = a),
      (this.requestId = t),
      (this.url = e);
  }
};
function j(e, a) {
  return Object.assign(
    {},
    ...a.map((a) => {
      if (void 0 !== e[a]) return { [a]: e[a] };
    })
  );
}
new Promise((e) => {});
var q = [
  "pipeline_tag",
  "private",
  "gated",
  "downloads",
  "likes",
  "lastModified",
];
async function* F(e) {
  var a, t, s, l, i, o, n, d, r, u;
  !(function (e) {
    if (
      e &&
      void 0 !== e.accessToken &&
      null !== e.accessToken &&
      !e.accessToken.startsWith("hf_")
    )
      throw new TypeError("Your access token must start with 'hf_'");
  })(null == e ? void 0 : e.credentials);
  let c = null != (a = null == e ? void 0 : e.limit) ? a : Infinity;
  const p = new URLSearchParams([
    ...Object.entries({
      limit: String(Math.min(c, 500)),
      ...((null == (t = null == e ? void 0 : e.search) ? void 0 : t.owner)
        ? { author: e.search.owner }
        : void 0),
      ...((null == (s = null == e ? void 0 : e.search) ? void 0 : s.task)
        ? { pipeline_tag: e.search.task }
        : void 0),
      ...((null == (l = null == e ? void 0 : e.search) ? void 0 : l.query)
        ? { search: e.search.query }
        : void 0),
    }),
    ...(null !=
    (n =
      null ==
      (o = null == (i = null == e ? void 0 : e.search) ? void 0 : i.tags)
        ? void 0
        : o.map((e) => ["filter", e]))
      ? n
      : []),
    ...q.map((e) => ["expand", e]),
    ...(null !=
    (r =
      null == (d = null == e ? void 0 : e.additionalFields)
        ? void 0
        : d.map((e) => ["expand", e]))
      ? r
      : []),
  ]).toString();
  let v = `${
    (null == e ? void 0 : e.hubUrl) || "https://huggingface.co"
  }/api/models?${p}`;
  for (; v; ) {
    const a = await (null != (u = null == e ? void 0 : e.fetch) ? u : fetch)(
      v,
      {
        headers: {
          accept: "application/json",
          ...((null == e ? void 0 : e.credentials)
            ? { Authorization: `Bearer ${e.credentials.accessToken}` }
            : void 0),
        },
      }
    );
    if (!a.ok) throw await T(a);
    const t = await a.json();
    for (const l of t)
      if (
        (yield {
          ...((null == e ? void 0 : e.additionalFields) &&
            j(l, e.additionalFields)),
          id: l._id,
          name: l.id,
          private: l.private,
          task: l.pipeline_tag,
          downloads: l.downloads,
          gated: l.gated,
          likes: l.likes,
          updatedAt: new Date(l.lastModified),
        },
        c--,
        c <= 0)
      )
        return;
    const s = a.headers.get("Link");
    v = s
      ? ((m = s),
        Object.fromEntries(
          [...m.matchAll(/<(https?:[/][/][^>]+)>;\s+rel="([^"]+)"/g)].map(
            ([, e, a]) => [a, e]
          )
        )).next
      : void 0;
  }
  var m;
}
const M = { class: "flex items-center gap-2" },
  S = { class: "ml-auto text-xs flex items-center gap-2 text-gray-500" },
  $ = { key: 0 },
  I = { key: 1 },
  C = { key: 2 },
  O = { key: 3, class: "flex items-center" },
  U = { key: 4, class: "flex items-center" },
  D = { class: "flex items-center" },
  R = e({
    __name: "HuggingFaceModelSelector",
    props: a(
      { limit: {} },
      { modelValue: { default: "", local: !0 }, modelModifiers: {} }
    ),
    emits: a(["change"], ["update:modelValue"]),
    setup(e, { emit: a }) {
      const b = e,
        A = a,
        T = t(e, "modelValue"),
        _ = s("downloads"),
        j = s(!1);
      function q(e) {
        return e < 1e3
          ? e
          : e >= 1e3 && e < 1e6
          ? `${(e / 1e3).toFixed(1)}K`
          : `${(e / 1e6).toFixed(1)}M`;
      }
      function R(e) {
        return h(e).fromNow();
      }
      const z = s([]),
        B = l(() =>
          k(
            z.value.slice().sort((e, a) => a[_.value] - e[_.value]),
            "value"
          )
        );
      async function E(e) {
        (T.value = e), A("change", e);
      }
      const P = f(async (e) => {
        (z.value = []), (j.value = !0);
        const a = F({
          search: { query: e },
          limit: b.limit || 50,
          additionalFields: ["downloadsAllTime", "createdAt"],
        });
        for await (const t of a)
          z.value.push({
            value: t.name,
            likes: t.likes,
            createdAt: t.createdAt,
            updatedAt: t.updatedAt,
            task: t.task,
            downloads: t.downloads,
            downloadsAllTime: t.downloadsAllTime,
          });
        j.value = !1;
      }, 200);
      return (e, a) => {
        const t = w,
          s = g,
          l = x,
          h = y;
        return (
          i(),
          o("div", M, [
            n(
              l,
              {
                value: T.value,
                "onUpdate:value": a[0] || (a[0] = (e) => (T.value = e)),
                class: "!w-120",
                options: p(B),
                onSelect: E,
                onSearch: p(P),
              },
              {
                option: d((e) => [
                  r("div", null, [
                    r("div", null, u(e.value), 1),
                    r("div", S, [
                      e.task ? (i(), o("span", $, u(e.task), 1)) : c("", !0),
                      "createdAt" === p(_)
                        ? (i(),
                          o("span", I, " Created " + u(R(e.createdAt)), 1))
                        : (i(),
                          o("span", C, "Updated " + u(R(e.updatedAt)), 1)),
                      "downloadsAllTime" === p(_)
                        ? (i(),
                          o("span", O, [
                            n(t, { icon: "i-ion:download-outline" }),
                            v(" " + u(q(e.downloadsAllTime)), 1),
                          ]))
                        : c("", !0),
                      "downloads" === p(_)
                        ? (i(),
                          o("span", U, [
                            n(t, { icon: "i-ion:download-outline" }),
                            v(" " + u(q(e.downloads)), 1),
                          ]))
                        : c("", !0),
                      r("span", D, [
                        n(t, { icon: "i-ion:heart-outline" }),
                        v(" " + u(q(e.likes)), 1),
                      ]),
                    ]),
                  ]),
                ]),
                default: d(() => [
                  n(
                    s,
                    { placeholder: "Filter by name" },
                    {
                      prefix: d(() => [
                        n(
                          t,
                          {
                            icon: p(j)
                              ? "i-logos:hugging-face-icon i-ion:load-a"
                              : "i-logos:hugging-face-icon",
                            size: 16,
                            spin: p(j),
                          },
                          null,
                          8,
                          ["icon", "spin"]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              },
              8,
              ["value", "options", "onSearch"]
            ),
            n(
              h,
              {
                value: p(_),
                "onUpdate:value":
                  a[1] || (a[1] = (e) => (m(_) ? (_.value = e) : null)),
                class: "!w-40",
                options: [
                  { value: "downloads", label: "Trending" },
                  { value: "likes", label: "Most likes" },
                  { value: "updatedAt", label: "Rencently updated" },
                  { value: "downloadsAllTime", label: "Most downloads" },
                ],
              },
              {
                suffixIcon: d(() => [
                  n(t, { icon: "i-ion:swap-vertical-outline" }),
                ]),
                _: 1,
              },
              8,
              ["value"]
            ),
          ])
        );
      };
    },
  });
export { R as _ };

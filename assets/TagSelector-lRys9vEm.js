import {
  as as e,
  bC as a,
  bD as t,
  r as l,
  aK as s,
  au as i,
  av as n,
  bY as o,
  co as r,
  a as c,
  bl as u,
  aw as p,
  aA as d,
  aB as g,
  bm as v,
  aD as f,
  bo as y,
  bp as m,
  at as k,
  aL as b,
  ea as h,
  bk as x,
  aC as z,
  bN as T,
  ax as K,
  az as w,
} from "./index-DPRREYlk.js";
import { S } from "./S3Slicer-yGYkflXA.js";
import { c as j } from "./file-CjjWlRhT.js";
import { z as C } from "./zipFile-AXM3yx2R.js";
import { _ as M } from "./index-DloxV9od.js";
import { u as _, b as U } from "./useTagDict-BaLmcAYF.js";
const F = { class: "flex flex-col gap-4 relative" },
  D = ["disabled"],
  B = { class: "text-start" },
  I = { key: 0, class: "p-4 flex gap-2 items-center flex-wrap" },
  L = { class: "ml-auto flex items-center gap-1" },
  N = { key: 1, class: "flex flex-col gap-1 p4" },
  O = { class: "text-truncate" },
  A = { key: 2, class: "flex items-center gap-1 p4" },
  P = e({
    __name: "S3DirectoryUploader",
    props: a(
      {
        disabled: { type: Boolean },
        placeholder: {},
        getKey: { type: Function },
        beforeUpload: { type: Function },
      },
      {
        meta: { default: () => ({ size: 0, url: "", key: "", type: "" }) },
        metaModifiers: {},
        value: {},
        valueModifiers: {},
      }
    ),
    emits: a(["change"], ["update:meta", "update:value"]),
    setup(e, { emit: a }) {
      const k = e,
        b = a,
        h = t(e, "meta"),
        x = t(e, "value"),
        z = l(!1),
        T = l(0),
        K = l(0),
        w = l(),
        _ = s(null);
      const U = l({ currentFile: "", percent: 0 });
      async function P(e) {
        const a = e.target?.files;
        if (!a || 0 === a.length) return !1;
        const t = new S();
        k.getKey && (t.getKey = k.getKey),
          (_.value = t),
          (K.value = 0),
          (T.value = 0),
          (z.value = !0);
        const l = await C(a, (e) => {
          U.value = e;
        });
        return (
          k.beforeUpload && k.beforeUpload(l),
          t
            .upload(l, {
              onProgress(e) {
                K.value += 1;
              },
              onStart(e, a) {
                (T.value = e.length),
                  (h.value = Object.assign(h.value || {}, {
                    size: l.size,
                    type: l.type,
                    key: a,
                  }));
              },
              onSuccess(e) {
                K.value = T.value;
              },
            })
            .then(async (e) => {
              if (e && e.Key) {
                const a = await t.getLastUrl();
                (h.value = { size: l.size, type: l.type, key: e.Key, url: a }),
                  (x.value = a),
                  b("change", h.value);
              }
            })
            .catch(() => {
              (z.value = !1),
                (h.value = { size: 0, url: "", key: "", type: "" });
            })
            .finally(() => {
              z.value = !1;
            })
        );
      }
      function R() {
        _.value?.abort(),
          w.value && (w.value.value = ""),
          (z.value = !1),
          (h.value = { size: 0, url: "", key: "", type: "" }),
          (x.value = ""),
          b("change", h.value);
      }
      return (e, a) => {
        const t = m,
          l = M;
        return (
          i(),
          n("div", F, [
            o(
              u(
                "div",
                {
                  class: v([
                    "p4 border border-dashed cursor-pointer",
                    e.disabled
                      ? "opacity-50 bg-light-500 dark:bg-dark-500 cursor-not-allowed"
                      : "",
                  ]),
                  onClick: a[0] || (a[0] = () => c(w)?.click()),
                },
                [
                  o(
                    u(
                      "input",
                      {
                        ref_key: "uploadRef",
                        ref: w,
                        name: "file",
                        disabled: k.disabled,
                        type: "file",
                        webkitdirectory: "",
                        directory: "",
                        multiple: "",
                        onInput: P,
                      },
                      null,
                      40,
                      D
                    ),
                    [[r, !1]]
                  ),
                  u("span", B, [
                    p(t, { icon: "i-ion:upload" }),
                    d(" " + g(k.placeholder || "Click this area to upload"), 1),
                  ]),
                ],
                2
              ),
              [[r, !c(z) && !h.value.url]]
            ),
            h.value.key
              ? (i(),
                n("div", I, [
                  p(t, { icon: "i-ion:attach" }),
                  u("span", null, g(h.value.key), 1),
                  u("span", L, [
                    d(g(c(j)(h.value.size)) + " ", 1),
                    p(
                      t,
                      {
                        icon: h.value.url ? "i-ion:trash" : "i-ion:pause",
                        class: "!hover:text-red cursor-pointer",
                        onClick: R,
                      },
                      null,
                      8,
                      ["icon"]
                    ),
                  ]),
                ]))
              : f("", !0),
            c(U).currentFile
              ? (i(),
                n("div", N, [
                  u("span", null, [
                    d("On archiving..."),
                    p(t, { icon: "i-ion:load-d", spin: "" }),
                  ]),
                  u("div", O, g(c(U).currentFile), 1),
                  p(l, { percent: Math.floor(c(U).percent) }, null, 8, [
                    "percent",
                  ]),
                ]))
              : f("", !0),
            h.value.key && c(z)
              ? (i(),
                n("div", A, [
                  c(z)
                    ? (i(), y(t, { key: 0, icon: "i-ion:load-d", spin: "" }))
                    : f("", !0),
                  p(l, { percent: Math.floor((100 * c(K)) / c(T)) }, null, 8, [
                    "percent",
                  ]),
                ]))
              : f("", !0),
          ])
        );
      };
    },
  });
const R = x(
  e({
    props: { tagKey: { type: String, default: "" }, isUseModel: Boolean },
    emits: ["addTags"],
    setup(e, { emit: a }) {
      const t = k({ selectedTags: [] }),
        s = l([]),
        i = new Map([]);
      return (
        b(() => {
          _(),
            (async function () {
              const a = e.isUseModel ? U() : _(),
                t = (await a).data;
              for (let l = 0; l < t.length; l++)
                t[l].tagName === e.tagKey && (s.value = t[l].tagInfoList);
            })();
        }),
        {
          prefixTagSelector: "tag-selector",
          categories: s,
          tagMap: i,
          handleTagClick: (e, a) => {
            const { selectedTags: l } = t,
              s = a ? [...l, e] : l.filter((a) => a !== e);
            t.selectedTags = s;
          },
          changeTags: (t) => {
            a("addTags", t, e.tagKey);
          },
          ...h(t),
        }
      );
    },
  }),
  [
    [
      "render",
      function (e, a, t, l, s, o) {
        const r = w;
        return (
          i(),
          n(
            "div",
            { class: v(`${e.prefixTagSelector}-top__team-item`) },
            [
              (i(!0),
              n(
                z,
                null,
                T(
                  e.categories,
                  (a) => (
                    i(),
                    y(
                      r,
                      {
                        key: a,
                        size: "small",
                        class: "m-1",
                        onClick: (t) => e.changeTags(a),
                      },
                      { default: K(() => [d(g(a.tagName), 1)]), _: 2 },
                      1032,
                      ["onClick"]
                    )
                  )
                ),
                128
              )),
            ],
            2
          )
        );
      },
    ],
  ]
);
export { R as T, P as _ };

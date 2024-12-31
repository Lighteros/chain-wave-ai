import { _ as e } from "./PageWrapper-BPMfS97v.js";
import {
  as as a,
  bR as s,
  bh as t,
  r as l,
  at as i,
  cS as r,
  bX as o,
  au as n,
  bo as u,
  ax as d,
  bY as m,
  a as p,
  av as c,
  aw as f,
  bO as g,
  bl as v,
  aC as j,
  bN as y,
  aA as b,
  cE as h,
  cT as x,
  cU as k,
  bs as T,
  ay as N,
  bp as U,
  az as _,
  aB as S,
} from "./index-DPRREYlk.js";
import { _ as z, T as C } from "./TagSelector-lRys9vEm.js";
import { M as I } from "./index-GaNlxuyI.js";
import { _ as q, F as w } from "./index-5bY6ZDBk.js";
import { T as B } from "./index-CMko8JXS.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./S3Slicer-yGYkflXA.js";
import "./index-BjWU5dL-.js";
import "./file-CjjWlRhT.js";
import "./zipFile-AXM3yx2R.js";
import "./jszip.min-C_PVdnoP.js";
import "./_commonjs-dynamic-modules-BHR_E30J.js";
import "./index-DloxV9od.js";
import "./CheckOutlined-BvF8M63J.js";
import "./useRefs-DoWExZxn.js";
import "./useTagDict-BaLmcAYF.js";
import "./index-ByCdxRYP.js";
import "./useTimeout-BMbf6gdC.js";
import "./useAttrs-CpoV-7Xq.js";
import "./tsxHelper-DjrCDYtL.js";
import "./index-Cq67sDBe.js";
import "./BasicTitle-CY4FQusD.js";
import "./Scrollbar-CV0fAAKu.js";
import "./index-B0yuFjoJ.js";
import "./Col-Djm-avAF.js";
import "./debounce-CUtJ7ZQO.js";
import "./CheckableTag-CI-ued8d.js";
const F = { class: "p4 app-content" },
  P = { class: "rounded-sm ring-1 ring-gray-300 p2" },
  D = { class: "flex flex-wrap mb-2" },
  A = { class: "mr-2" },
  O = { class: "flex mb-2" },
  R = v("div", null, "Recommend:", -1),
  L = { class: "flex justify-center py-2 gap-2" },
  E = a({
    __name: "create",
    setup(a) {
      s();
      const E = t(),
        G = l([
          {
            name: "Task",
            inputVisible: !1,
            inputValue: "",
            parentId: 3,
            list: [],
          },
        ]),
        H = l(!1),
        M = l({ size: 0, url: "", key: "", type: "" }),
        V = l({
          author: "",
          createBy: "",
          createTime: "",
          dataLocation: "",
          datasetName: "",
          description: "",
          fileName: "",
          fileSize: "",
          fileType: "",
          fileUrl: "",
          id: "",
          recordNum: "",
          tags: [],
          updateBy: "",
          updateTime: "",
        }),
        $ = l(),
        J = i({
          datasetName: r(),
          fileUrl: [
            { required: !0, message: "File is required", trigger: "change" },
            {
              validator: (e, a) =>
                V.value.datasetName
                  ? Promise.resolve()
                  : Promise.reject("Please set data name first"),
              trigger: "change",
            },
          ],
          tags: [
            { required: !0, message: "Tags is required", trigger: "change" },
          ],
        });
      async function Q() {
        $.value?.validate().then(async () => {
          H.value = !0;
          try {
            const { code: e, message: a } = await x(
              "/api/v1/storage/create"
            ).post({
              body: {
                ...V.value,
                fileUrl: M.value.url,
                fileSize: M.value.size.toString(),
                fileType: M.value.type,
                fileName: M.value.key,
                author: E.getUserInfo.account,
                createBy: E.getUserInfo.account,
                id: void 0,
                updateBy: E.getUserInfo.account,
                tags: [...G.value[0].list],
              },
            });
            e !== k.SUCCESS
              ? T.error(a)
              : (T.success("Create Dataset Successfully"), h());
          } catch (e) {
          } finally {
            H.value = !1;
          }
        });
      }
      function W(e, a) {
        const s = G.value.findIndex((e) => e.name === a),
          t = G.value[s].list.findIndex((a) => a.tagId === e.tagId);
        -1 === t ? G.value[s].list.push(e) : G.value[s].list.splice(t, 1),
          (V.value.tags = [...G.value[0].list]);
      }
      function X(e) {
        return `${new Date().toUTCString()}_${V.value.datasetName}.zip`;
      }
      return (a, s) => {
        const t = N,
          l = q,
          i = B,
          r = w,
          x = U,
          k = _,
          T = e,
          E = o("loading");
        return (
          n(),
          u(
            T,
            { "fixed-height": "", "content-full-height": "", "auto-title": "" },
            {
              default: d(() => [
                m(
                  (n(),
                  c("div", F, [
                    f(
                      r,
                      {
                        ref_key: "formRef",
                        ref: $,
                        size: "large",
                        "label-col": { span: 4, offset: 2 },
                        "wrapper-col": { span: 14 },
                        rules: p(J),
                        model: p(V),
                      },
                      {
                        default: d(() => [
                          f(
                            l,
                            {
                              label: "Name",
                              required: "",
                              name: "datasetName",
                            },
                            {
                              default: d(() => [
                                f(
                                  t,
                                  {
                                    value: p(V).datasetName,
                                    "onUpdate:value":
                                      s[0] ||
                                      (s[0] = (e) => (p(V).datasetName = e)),
                                    size: "large",
                                    placeholder: "Please set data name",
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
                            { label: "File", name: "fileUrl", required: "" },
                            {
                              default: d(() => [
                                f(
                                  z,
                                  {
                                    meta: p(M),
                                    "onUpdate:meta":
                                      s[1] ||
                                      (s[1] = (e) =>
                                        g(M) ? (M.value = e) : null),
                                    value: p(V).fileUrl,
                                    "onUpdate:value":
                                      s[2] ||
                                      (s[2] = (e) => (p(V).fileUrl = e)),
                                    class: "rounded-sm ring-1 ring-gray-300 p2",
                                    "get-key": X,
                                    placeholder: p(V).datasetName
                                      ? "Please select a directory, it will automatically be archived as .zip format."
                                      : "Please set data name first",
                                    disabled: !p(V).datasetName,
                                    onChange:
                                      s[3] ||
                                      (s[3] = (e) =>
                                        p($)?.validateFields(["fileUrl"])),
                                  },
                                  null,
                                  8,
                                  ["meta", "value", "placeholder", "disabled"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          f(
                            l,
                            { label: "Tags", required: "", name: "tags" },
                            {
                              default: d(() => [
                                v("div", P, [
                                  (n(!0),
                                  c(
                                    j,
                                    null,
                                    y(
                                      p(G),
                                      (e, a) => (
                                        n(),
                                        c(
                                          "div",
                                          {
                                            key: a,
                                            class: "not-last-border-b-gray-300",
                                          },
                                          [
                                            v("div", D, [
                                              v("div", A, S(e.name) + ": ", 1),
                                              (n(!0),
                                              c(
                                                j,
                                                null,
                                                y(
                                                  e.list,
                                                  (a, s) => (
                                                    n(),
                                                    u(
                                                      i,
                                                      {
                                                        key: s,
                                                        closable: "",
                                                        class: "mb-1",
                                                        onClose: (s) =>
                                                          (function (e, a) {
                                                            const s =
                                                              a.list.filter(
                                                                (a) =>
                                                                  a.tagName !==
                                                                  e.tagName
                                                              );
                                                            (a.list = s),
                                                              (V.value.tags = [
                                                                ...G.value[0]
                                                                  .list,
                                                              ]);
                                                          })(a, e),
                                                      },
                                                      {
                                                        default: d(() => [
                                                          b(S(a.tagName), 1),
                                                        ]),
                                                        _: 2,
                                                      },
                                                      1032,
                                                      ["onClose"]
                                                    )
                                                  )
                                                ),
                                                128
                                              )),
                                            ]),
                                            v("div", O, [
                                              R,
                                              f(
                                                C,
                                                {
                                                  "tag-key": e.name,
                                                  onAddTags: W,
                                                },
                                                null,
                                                8,
                                                ["tag-key"]
                                              ),
                                            ]),
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                          f(
                            l,
                            { label: "Description" },
                            {
                              default: d(() => [
                                f(
                                  p(I),
                                  {
                                    value: p(V).description,
                                    "onUpdate:value":
                                      s[4] ||
                                      (s[4] = (e) => (p(V).description = e)),
                                    mode: "ir",
                                  },
                                  null,
                                  8,
                                  ["value"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["rules", "model"]
                    ),
                    v("div", L, [
                      f(
                        k,
                        {
                          size: "large",
                          type: "ghost",
                          onClick: s[5] || (s[5] = (e) => p(h)()),
                        },
                        {
                          default: d(() => [
                            f(x, { icon: "i-ion:arrow-back-circle-outline" }),
                            b(" Back "),
                          ]),
                          _: 1,
                        }
                      ),
                      f(
                        k,
                        {
                          size: "large",
                          type: "primary",
                          loading: p(H),
                          onClick: Q,
                        },
                        { default: d(() => [b(" Submit ")]), _: 1 },
                        8,
                        ["loading"]
                      ),
                    ]),
                  ])),
                  [[E, p(H)]]
                ),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
export { E as default };

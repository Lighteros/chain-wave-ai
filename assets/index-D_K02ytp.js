import {
  as as e,
  r as a,
  at as t,
  aL as i,
  bw as o,
  au as s,
  bo as n,
  ax as r,
  bl as l,
  aw as p,
  a as m,
  aA as u,
  aB as d,
  av as c,
  cM as y,
  aD as j,
  bW as g,
  bG as f,
  by as x,
  d1 as h,
} from "./index-DPRREYlk.js";
import { P as k } from "./index-BfMdU48n.js";
import { P as v } from "./index-Dgmkw5o7.js";
import { _ as w } from "./index-Cl2HaiV4.js";
import "./BasicButton.vue_vue_type_script_setup_true_lang-EzE3DJdj.js";
import "./useAttrs-CpoV-7Xq.js";
import "./PopConfirmButton.vue_vue_type_script_lang-BxbUu1Is.js";
import "./tsxHelper-DjrCDYtL.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./index-CacitUCz.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./index-BPauqaGF.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./zh_CN-CAyhejr6.js";
import "./index-Ty6iIrKu.js";
import "./index-jlJCtu5U.js";
import "./debounce-CUtJ7ZQO.js";
import "./index-DGJYrvBD.js";
import "./Checkbox-KylR2T3k.js";
import "./index-yjwfeS3_.js";
import "./RadioButton-BTaousOD.js";
import "./scrollTo-Dpgtz1Pq.js";
const _ = { class: "app-content p4" },
  b = { class: "flex mb-4 gap-2" },
  z = { class: "flex gap-1" },
  C = { key: 1 },
  S = e({
    __name: "index",
    setup(e) {
      const S = a(!1),
        B = t({ pageSize: 10, pageNum: 1, total: 0 }),
        D = t({ name: "" }),
        N = a([
          {
            title: "ID",
            dataIndex: "id",
            key: "id",
            resizable: !0,
            ellipsis: !0,
            width: 150,
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            resizable: !0,
            ellipsis: !0,
            width: 150,
          },
          { title: "Create Time", key: "createTime", width: 150 },
          {
            title: "Action",
            key: "action",
            fixed: "right",
            resizable: !0,
            ellipsis: !0,
            width: 80,
          },
        ]),
        T = g(() => P(1), 1e3),
        A = a([]);
      async function O() {
        (S.value = !0),
          f("/workflow/list")
            .get({
              query: {
                type: 1,
                name: D.name,
                pageNum: B.pageNum,
                pageSize: B.pageSize,
              },
            })
            .then((e) => {
              (B.total = e.totalPage), (A.value = e.data.data);
            })
            .finally(() => {
              S.value = !1;
            });
      }
      function P(e = 1, a = B.pageSize) {
        (B.pageSize = a), (B.pageNum = e), O();
      }
      return (
        i(() => {
          O();
        }),
        (e, a) => {
          const t = h,
            i = o("RouterLink"),
            g = w;
          return (
            s(),
            n(
              m(v),
              {
                "auto-title": "",
                "fixed-height": "",
                "content-full-height": "",
              },
              {
                default: r(() => [
                  l("div", _, [
                    l("nav", b, [
                      l("div", z, [
                        p(
                          t,
                          {
                            value: m(D).name,
                            "onUpdate:value":
                              a[0] || (a[0] = (e) => (m(D).name = e)),
                            class: "w-60 mr-2",
                            placeholder: "Search by name",
                            loading: m(S),
                            onChange: m(T),
                            onSearch: a[1] || (a[1] = (e) => P(1)),
                          },
                          null,
                          8,
                          ["value", "loading", "onChange"]
                        ),
                      ]),
                    ]),
                    p(
                      g,
                      {
                        columns: m(N),
                        "data-source": m(A),
                        loading: m(S),
                        scroll: { y: 600, x: 1080 },
                        pagination: m(B),
                        onResizeColumn:
                          a[2] || (a[2] = (e, a) => (a.width = e)),
                        onChange:
                          a[3] ||
                          (a[3] = ({ pageSize: e, current: a }) => P(a, e)),
                      },
                      {
                        bodyCell: r(({ column: e, record: a }) => {
                          return [
                            "name" === e.key
                              ? (s(),
                                n(
                                  i,
                                  {
                                    key: 0,
                                    to:
                                      ((t = a.id),
                                      {
                                        name: x.DeployWorkFlowDetail,
                                        query: { workflowId: t },
                                      }),
                                  },
                                  { default: r(() => [u(d(a.name), 1)]), _: 2 },
                                  1032,
                                  ["to"]
                                ))
                              : "createTime" === e.key
                              ? (s(), c("span", C, d(m(y)(a.createTime)), 1))
                              : "action" === e.key
                              ? (s(),
                                n(
                                  m(k),
                                  {
                                    key: 2,
                                    size: "small",
                                    type: "primary",
                                    title:
                                      "Are you sure you want to delete this WorkFlow?",
                                    onConfirm: (e) =>
                                      (async function (e) {
                                        (S.value = !0),
                                          f("/workflow")
                                            .delete({ query: { id: e } })
                                            .then((e) => {
                                              O();
                                            })
                                            .finally(() => {
                                              S.value = !1;
                                            });
                                      })(a.id),
                                  },
                                  { default: r(() => [u(" Delete ")]), _: 2 },
                                  1032,
                                  ["onConfirm"]
                                ))
                              : j("", !0),
                          ];
                          var t;
                        }),
                        _: 1,
                      },
                      8,
                      ["columns", "data-source", "loading", "pagination"]
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
export { S as default };

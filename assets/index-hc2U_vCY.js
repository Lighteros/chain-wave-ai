import { _ as e } from "./PopConfirmButton.vue_vue_type_script_lang-BxbUu1Is.js";
import {
  as as t,
  bR as s,
  bh as i,
  r as a,
  c as r,
  by as o,
  aL as l,
  bw as n,
  au as d,
  bo as u,
  ax as p,
  bl as c,
  aw as m,
  a as f,
  aA as _,
  aB as y,
  bG as j,
  cM as x,
  cN as h,
  bs as C,
  bp as b,
  az as v,
} from "./index-DPRREYlk.js";
import { _ as g } from "./BasicTitle-CY4FQusD.js";
import { P as w } from "./index-Dgmkw5o7.js";
import { _ as T } from "./CodeBlock.vue_vue_type_style_index_0_lang-BAHlxJi4.js";
import { A as E } from "./ActionsMenu-DOu7q-vd.js";
import { a as R, _ as N } from "./index-Cl2HaiV4.js";
import "./BasicButton.vue_vue_type_script_setup_true_lang-EzE3DJdj.js";
import "./useAttrs-CpoV-7Xq.js";
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
const S = { class: "p-4 app-content" },
  A = c(
    "div",
    { class: "flex justify-between items-center w-full" },
    [
      c("span", null, [
        c(
          "div",
          null,
          "To submit a run to the cluster, please use the following command line interface: "
        ),
      ]),
    ],
    -1
  ),
  k = { style: { "margin-bottom": "10px", width: "580px" } },
  O = { class: "flex items-center justify-between mb-2" },
  B = t({
    __name: "index",
    setup(t) {
      const B = s(),
        I = i(),
        L = a([]),
        U = a(!1),
        D = r(
          () =>
            "fedml launch job.yaml -c ClusterName -lp open.chainopera.ai -lpp 443 -v local"
        );
      function z(e) {
        return !!e.status && !["IDLE", "RUNNING", "STOPPED"].includes(e.status);
      }
      async function P() {
        U.value = !0;
        try {
          const { data: e } = await j("/cluster/list").get({
            query: { userId: I.getUserInfo.id },
          });
          (L.value = e || []),
            L.value.forEach((e) => {
              (e.updateTime = x(e.updateTime)),
                (e.createTime = x(e.createTime));
            });
        } catch (e) {
        } finally {
          U.value = !1;
        }
      }
      const q = r(() => (e, t) => ({
        name: o.COMPUTE_CLUSTER_DETAIL,
        query: { clusterId: e, tab: t },
      }));
      return (
        l(() => {
          P();
        }),
        (t, s) => {
          const i = g,
            a = b,
            r = v,
            l = n("router-link"),
            x = R,
            I = e,
            M = N;
          return (
            d(),
            u(
              f(w),
              {
                "auto-title": "",
                "fixed-height": "",
                "content-full-height": "",
              },
              {
                default: p(() => [
                  c("section", S, [
                    m(i, { class: "my-4" }, { default: p(() => [A]), _: 1 }),
                    c("div", k, [
                      m(T, { code: f(D), copy: "" }, null, 8, ["code"]),
                    ]),
                    c("nav", O, [
                      m(
                        r,
                        {
                          size: "large",
                          type: "primary",
                          disabled: f(U),
                          onClick: P,
                        },
                        {
                          default: p(() => [
                            m(
                              a,
                              { icon: "i-ion:reload", spin: f(U) },
                              null,
                              8,
                              ["spin"]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["disabled"]
                      ),
                      m(
                        r,
                        {
                          size: "large",
                          type: "primary",
                          onClick:
                            s[0] ||
                            (s[0] = (e) => {
                              B.push({ name: o.COMPUTE_CREATE_CLUSTER });
                            }),
                        },
                        {
                          default: p(() => [
                            m(a, { icon: "i-icon-park-outline:add" }),
                            _(" Create Cluster "),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    m(
                      M,
                      {
                        bordered: "",
                        "data-source": f(L),
                        "row-key": "gpuId",
                        pagination: !1,
                        scroll: { x: 1080, y: 540 },
                        loading: f(U),
                      },
                      {
                        default: p(() => [
                          m(
                            x,
                            {
                              width: "10%",
                              fixed: "left",
                              "data-index": "shortName",
                              title: "Cluster Name",
                            },
                            {
                              default: p(({ text: e, record: t }) => [
                                m(
                                  l,
                                  { to: f(q)(t.id) },
                                  { default: p(() => [_(y(e), 1)]), _: 2 },
                                  1032,
                                  ["to"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          m(x, {
                            width: "18%",
                            "data-index": "descriptiveName",
                            title: "Cluster Descriptive Name",
                          }),
                          m(
                            x,
                            {
                              width: "8%",
                              "data-index": "servers",
                              title: "# of Servers",
                            },
                            {
                              default: p(({ text: e, record: t }) => [
                                m(
                                  l,
                                  { to: f(q)(t.id, "servers") },
                                  { default: p(() => [_(y(e), 1)]), _: 2 },
                                  1032,
                                  ["to"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          m(
                            x,
                            {
                              width: "8%",
                              "data-index": "jobs",
                              title: "# of Runs Submitted",
                            },
                            {
                              default: p(({ text: e, record: t }) => [
                                m(
                                  l,
                                  { to: f(q)(t.id, "runs") },
                                  { default: p(() => [_(y(e), 1)]), _: 2 },
                                  1032,
                                  ["to"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          m(x, {
                            width: "10%",
                            "data-index": "status",
                            title: "Cluster Status",
                          }),
                          m(x, {
                            width: "20%",
                            "data-index": "createTime",
                            title: "Create Time",
                          }),
                          m(x, {
                            width: "20%",
                            "data-index": "updateTime",
                            title: "Update Time",
                          }),
                          m(
                            x,
                            {
                              fixed: "right",
                              width: 160,
                              "data-index": "actions",
                              title: "Actions",
                            },
                            {
                              default: p(({ record: e }) => [
                                m(
                                  f(E),
                                  null,
                                  {
                                    default: p(() => [
                                      m(
                                        I,
                                        {
                                          size: "small",
                                          danger: "",
                                          type: "primary",
                                          title:
                                            "Are you sure you want to delete this cluster?",
                                          onConfirm: (t) =>
                                            (function (e) {
                                              return (
                                                (U.value = !0),
                                                j("/cluster")
                                                  .delete({
                                                    query: { id: e.id },
                                                  })
                                                  .then((e) => {
                                                    if ("SUCCESS" !== e.code) {
                                                      const t =
                                                        "INTERNAL_ERROR" ===
                                                        e.code
                                                          ? h(
                                                              "sys.api.apiRequestFailed"
                                                            )
                                                          : e.message ||
                                                            "Error on deleting cluster";
                                                      C.error(t);
                                                    } else
                                                      C.success(
                                                        "Delete cluster success"
                                                      );
                                                  })
                                                  .finally(() => {
                                                    (U.value = !1), P();
                                                  })
                                              );
                                            })(e),
                                        },
                                        {
                                          default: p(() => [_(" Delete ")]),
                                          _: 2,
                                        },
                                        1032,
                                        ["onConfirm"]
                                      ),
                                      m(
                                        I,
                                        {
                                          size: "small",
                                          danger: "",
                                          type: "primary",
                                          disabled: z(e),
                                          title:
                                            "Are you sure you want to kill this cluster?",
                                          onConfirm: (t) =>
                                            (function (e) {
                                              return (
                                                (U.value = !0),
                                                j("/cluster/downCluster")
                                                  .post({ query: { id: e.id } })
                                                  .then((e) => {
                                                    if ("SUCCESS" !== e.code) {
                                                      const t =
                                                        "INTERNAL_ERROR" ===
                                                        e.code
                                                          ? h(
                                                              "sys.api.apiRequestFailed"
                                                            )
                                                          : e.message ||
                                                            "Error on killing job";
                                                      C.error(t);
                                                    } else
                                                      C.success(
                                                        "Kill cluster success"
                                                      );
                                                  })
                                                  .finally(() => {
                                                    (U.value = !1), P();
                                                  })
                                              );
                                            })(e),
                                        },
                                        {
                                          default: p(() => [_(" Kill ")]),
                                          _: 2,
                                        },
                                        1032,
                                        ["disabled", "onConfirm"]
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["data-source", "loading"]
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
export { B as default };

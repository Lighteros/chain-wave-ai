import {
  as as e,
  bh as t,
  bR as a,
  dg as s,
  c as o,
  at as r,
  r as l,
  aL as n,
  bw as i,
  au as u,
  bo as d,
  ax as p,
  bl as c,
  aw as m,
  aA as y,
  a as f,
  bY as g,
  co as j,
  av as _,
  bN as v,
  aC as b,
  aD as x,
  by as h,
  cF as k,
  bp as w,
  az as P,
  d5 as C,
} from "./index-DPRREYlk.js";
import { _ as U } from "./AppCheetahSlogan-B6MMUymA.js";
import { _ as S } from "./BasicTitle-CY4FQusD.js";
import { P as G } from "./index-Dgmkw5o7.js";
import { G as I, a as L, b as D, c as N } from "./index-btKS0vR9.js";
import { _ as z } from "./MarketPlaceGpu.vue_vue_type_script_setup_true_lang-BouRykeT.js";
import { S as A } from "./index-BPauqaGF.js";
import { C as E, _ as R } from "./index-CF-tXiQi.js";
import { a as T, _ as B } from "./index-Cl2HaiV4.js";
import { _ as O } from "./index-CacitUCz.js";
import "./tsxHelper-DjrCDYtL.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./index-BfMdU48n.js";
import "./BasicButton.vue_vue_type_script_setup_true_lang-EzE3DJdj.js";
import "./useAttrs-CpoV-7Xq.js";
import "./PopConfirmButton.vue_vue_type_script_lang-BxbUu1Is.js";
import "./gpuEnum-qu5ks5HJ.js";
import "./index-D4noaftF.js";
import "./uniqBy-CccCILMw.js";
import "./sortBy-BdU96kgw.js";
import "./_baseOrderBy-B_MN0TyA.js";
import "./_baseEach-BDY_Tvly.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./index-DTRlG5Qd.js";
import "./useRefs-DoWExZxn.js";
import "./index-B0yuFjoJ.js";
import "./index-Ty6iIrKu.js";
import "./index-jlJCtu5U.js";
import "./debounce-CUtJ7ZQO.js";
import "./index-DGJYrvBD.js";
import "./Checkbox-KylR2T3k.js";
import "./index-yjwfeS3_.js";
import "./RadioButton-BTaousOD.js";
import "./scrollTo-Dpgtz1Pq.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./zh_CN-CAyhejr6.js";
const F = { class: "app-content p4" },
  V = { class: "p-4 mb-4" },
  W = { class: "p-4 mb-4" },
  Y = { class: "p-2 flex flex-wrap gap-x-8 gap-y-2" },
  H = { class: "flex items-center gap-1" },
  M = c("span", { class: "w-24 text-end flex-1" }, "Device Status:", -1),
  q = { class: "flex items-center gap-1" },
  X = c("span", { class: "w-28 text-end flex-1" }, "Resources Type:", -1),
  J = { class: "flex justify-between items-center w-full" },
  Q = c("span", null, "Your active GPUs", -1),
  $ = { class: "flex" },
  K = { class: "my-2" },
  Z = {
    class:
      "border-1 border-gray-300 border-solid rounded-sm bg-gray-100 dark:bg-gray-800 p-4",
  },
  ee = c("span", null, "You don’t yet have a GPU setup. To get started:", -1),
  te = c("li", null, "This will set your status = “Available for Earning”", -1),
  ae = { class: "border-1" },
  se = { class: "py-2 flex justify-end" },
  oe = e({
    __name: "index",
    setup(e) {
      const oe = h,
        re = t(),
        le = a(),
        ne = s("HomeLayout", "card"),
        ie = o(() => String(re.getUserInfo.id)),
        ue = r({
          content: [],
          current: 1,
          pageSize: 10,
          totalPages: 0,
          total: 0,
        }),
        de = l([
          { value: null, label: "ALL" },
          { value: "IDLE", label: "IDLE" },
          { value: "OFFLINE", label: "OFFLINE" },
          { value: "RUNNING", label: "RUNNING" },
          { value: "UPGRADING", label: "UPGRADING" },
        ]),
        pe = r({ resourceType: null, status: null });
      async function ce() {
        const e = await k("/gpu-machine/list").get({
          query: {
            pageNum: ue.current,
            pageSize: ue.pageSize,
            userId: ie.value,
            status: pe.status,
            resourceType: pe.resourceType,
          },
        });
        (ue.content = e.data?.content || []),
          (ue.total = e.data?.totalSize || 0);
      }
      async function me() {
        await ce();
      }
      function ye(e, t) {
        (ue.current = e), (ue.pageSize = t), je(ce());
      }
      const fe = l(!1);
      function ge() {
        (ue.current = 1), je(ce());
      }
      function je(e) {
        (fe.value = !0),
          e.finally(() => {
            fe.value = !1;
          });
      }
      return (
        n(() => {
          je(ce());
        }),
        (e, t) => {
          const a = S,
            s = U,
            o = A,
            r = w,
            l = P,
            n = C,
            k = i("RouterLink"),
            re = w,
            ie = R,
            _e = E,
            ve = T,
            be = B,
            xe = O;
          return (
            u(),
            d(
              f(G),
              {
                "auto-title": "",
                "fixed-height": "",
                "content-full-height": "",
              },
              {
                default: p(() => [
                  c("div", F, [
                    c("section", V, [
                      m(a, null, {
                        default: p(() => [y("GPU Marketplace")]),
                        _: 1,
                      }),
                      m(s, { class: "py-2", reverse: "" }),
                    ]),
                    c("section", W, [
                      c("form", Y, [
                        c("div", H, [
                          M,
                          m(
                            o,
                            {
                              value: f(pe).status,
                              "onUpdate:value":
                                t[0] || (t[0] = (e) => (f(pe).status = e)),
                              style: { width: "280px" },
                              placeholder: "Device Status",
                              options: f(de),
                              onChange: me,
                            },
                            null,
                            8,
                            ["value", "options"]
                          ),
                        ]),
                        c("div", q, [
                          X,
                          m(
                            z,
                            {
                              modelValue: f(pe).resourceType,
                              "onUpdate:modelValue":
                                t[1] ||
                                (t[1] = (e) => (f(pe).resourceType = e)),
                              source: "all",
                              style: { width: "280px" },
                              onChange: me,
                            },
                            null,
                            8,
                            ["modelValue"]
                          ),
                        ]),
                      ]),
                      m(a, null, {
                        default: p(() => [
                          c("div", J, [
                            Q,
                            c("div", $, [
                              m(
                                n,
                                { class: "mr-2" },
                                {
                                  default: p(() => [
                                    m(
                                      l,
                                      {
                                        type:
                                          "card" === f(ne)
                                            ? "primary"
                                            : "default",
                                        onClick:
                                          t[2] ||
                                          (t[2] = (e) => (ne.value = "card")),
                                      },
                                      {
                                        default: p(() => [
                                          m(r, { icon: "i-ion:grid" }),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["type"]
                                    ),
                                    m(
                                      l,
                                      {
                                        type:
                                          "list" === f(ne)
                                            ? "primary"
                                            : "default",
                                        onClick:
                                          t[3] ||
                                          (t[3] = (e) => (ne.value = "list")),
                                      },
                                      {
                                        default: p(() => [
                                          m(r, { icon: "i-ion:list" }),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["type"]
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                              m(
                                l,
                                {
                                  class: "ml-2",
                                  onClick: t[4] || (t[4] = (e) => ge()),
                                },
                                {
                                  default: p(() => [
                                    m(
                                      r,
                                      { icon: "i-tabler:reload", spin: f(fe) },
                                      null,
                                      8,
                                      ["spin"]
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                              m(
                                l,
                                {
                                  class: "ml-2",
                                  type: "primary",
                                  "data-test": "add-gpu-btn",
                                  onClick:
                                    t[5] ||
                                    (t[5] = (e) =>
                                      (async function () {
                                        le.push({ name: h.SUPPLIER_GPU_ADD });
                                      })()),
                                },
                                {
                                  default: p(() => [
                                    m(r, { icon: "i-tabler:plus" }),
                                    y(" Add GPU "),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }),
                      c("div", K, [
                        g(
                          c(
                            "div",
                            Z,
                            [
                              ee,
                              c("ol", null, [
                                c("li", null, [
                                  y(" Click "),
                                  m(
                                    k,
                                    { to: { name: f(oe).SUPPLIER_GPU_ADD } },
                                    {
                                      default: p(() => [y(" Add a GPU ")]),
                                      _: 1,
                                    },
                                    8,
                                    ["to"]
                                  ),
                                  y(
                                    ". It will be set to “Pre-earning” status "
                                  ),
                                ]),
                                c("li", null, [
                                  y(" Then goto "),
                                  m(
                                    k,
                                    {
                                      to: e.$router.resolve({
                                        name: f(oe).SUPPLIER_PROFILE_INDEX,
                                      }),
                                    },
                                    {
                                      default: p(() => [y(" Profile Setup ")]),
                                      _: 1,
                                    },
                                    8,
                                    ["to"]
                                  ),
                                  y(
                                    " and setup your company information and a payment process for your earnings. "
                                  ),
                                ]),
                                te,
                                c("li", null, [
                                  y(" Hang back and watch "),
                                  m(
                                    re,
                                    {
                                      icon: "i-ion:reload",
                                      class: "!text-primary",
                                      spin: f(fe),
                                      onClick: ge,
                                    },
                                    null,
                                    8,
                                    ["spin"]
                                  ),
                                  y(" the jobs come in for your GPU "),
                                ]),
                              ]),
                            ],
                            512
                          ),
                          [[j, !f(ue).content || 0 === f(ue).content.length]]
                        ),
                        g(
                          c(
                            "div",
                            ae,
                            [
                              m(
                                _e,
                                { loading: f(fe), bordered: "" },
                                {
                                  default: p(() => [
                                    (u(!0),
                                    _(
                                      b,
                                      null,
                                      v(
                                        f(ue).content,
                                        (e) => (
                                          u(),
                                          d(
                                            ie,
                                            {
                                              key: e.id,
                                              class:
                                                "!lg:w-1/3 !md:w-1/2 !sm:w-full",
                                            },
                                            {
                                              default: p(() => [
                                                m(
                                                  f(I),
                                                  { record: e },
                                                  null,
                                                  8,
                                                  ["record"]
                                                ),
                                                m(
                                                  f(L),
                                                  { record: e },
                                                  null,
                                                  8,
                                                  ["record"]
                                                ),
                                                m(
                                                  f(D),
                                                  { record: e },
                                                  null,
                                                  8,
                                                  ["record"]
                                                ),
                                                m(
                                                  f(N),
                                                  {
                                                    record: e,
                                                    "load-data": () => je(ce()),
                                                  },
                                                  null,
                                                  8,
                                                  ["record", "load-data"]
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]),
                                  _: 1,
                                },
                                8,
                                ["loading"]
                              ),
                            ],
                            512
                          ),
                          [
                            [
                              j,
                              "card" === f(ne) &&
                                f(ue).content &&
                                f(ue).content.length > 0,
                            ],
                          ]
                        ),
                        g(
                          m(
                            be,
                            {
                              bordered: "",
                              loading: f(fe),
                              "data-source": f(ue).content,
                              "row-key": "id",
                              "show-header": !1,
                              pagination: !1,
                            },
                            {
                              bodyCell: p(({ column: e, record: t }) => [
                                "brand" === e.key
                                  ? (u(),
                                    d(f(I), { key: 0, record: t }, null, 8, [
                                      "record",
                                    ]))
                                  : "provider" === e.key
                                  ? (u(),
                                    d(f(L), { key: 1, record: t }, null, 8, [
                                      "record",
                                    ]))
                                  : "avgCost" === e.key
                                  ? (u(),
                                    d(f(D), { key: 2, record: t }, null, 8, [
                                      "record",
                                    ]))
                                  : "actions" === e.key
                                  ? (u(),
                                    d(
                                      f(N),
                                      {
                                        key: 3,
                                        record: t,
                                        "load-data": () => je(ce()),
                                      },
                                      null,
                                      8,
                                      ["record", "load-data"]
                                    ))
                                  : x("", !0),
                              ]),
                              default: p(() => [
                                m(ve, {
                                  key: "brand",
                                  width: "30%",
                                  title: "brand",
                                }),
                                m(ve, {
                                  key: "provider",
                                  width: "20%",
                                  title: "provider",
                                }),
                                m(ve, {
                                  key: "avgCost",
                                  width: "20%",
                                  title: "avg. const",
                                }),
                                m(ve, {
                                  key: "actions",
                                  width: "20%",
                                  title: "Actions",
                                }),
                              ]),
                              _: 1,
                            },
                            8,
                            ["loading", "data-source"]
                          ),
                          [
                            [
                              j,
                              "list" === f(ne) &&
                                f(ue).content &&
                                f(ue).content.length > 0,
                            ],
                          ]
                        ),
                      ]),
                      c("div", se, [
                        m(
                          xe,
                          {
                            current: f(ue).current,
                            "onUpdate:current":
                              t[6] || (t[6] = (e) => (f(ue).current = e)),
                            "page-size": f(ue).pageSize,
                            "onUpdate:pageSize":
                              t[7] || (t[7] = (e) => (f(ue).pageSize = e)),
                            total: f(ue).total,
                            onChange: ye,
                          },
                          null,
                          8,
                          ["current", "page-size", "total"]
                        ),
                      ]),
                    ]),
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
export { oe as default };

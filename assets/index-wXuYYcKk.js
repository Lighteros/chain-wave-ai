import {
  as as e,
  at as l,
  r as a,
  aL as t,
  bw as s,
  au as n,
  bo as r,
  ax as o,
  bl as i,
  aw as u,
  aA as p,
  aB as c,
  a as d,
  bM as m,
  bO as x,
  av as v,
  aD as y,
  n as b,
  by as f,
  bp as g,
  bW as h,
  cF as j,
} from "./index-DPRREYlk.js";
import { _ as T } from "./BasicTitle-CY4FQusD.js";
import { C as P } from "./index-D4noaftF.js";
import { P as w } from "./index-Dgmkw5o7.js";
import { _ as C } from "./MarketPlaceGpu.vue_vue_type_script_setup_true_lang-BouRykeT.js";
import { S as _ } from "./index-BPauqaGF.js";
import { I as S } from "./index-OS-5xtvZ.js";
import { a as U, _ as k } from "./index-Cl2HaiV4.js";
import "./tsxHelper-DjrCDYtL.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./uniqBy-CccCILMw.js";
import "./sortBy-BdU96kgw.js";
import "./_baseOrderBy-B_MN0TyA.js";
import "./_baseEach-BDY_Tvly.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./index-CacitUCz.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./zh_CN-CAyhejr6.js";
import "./index-Ty6iIrKu.js";
import "./index-jlJCtu5U.js";
import "./debounce-CUtJ7ZQO.js";
import "./index-DGJYrvBD.js";
import "./Checkbox-KylR2T3k.js";
import "./index-yjwfeS3_.js";
import "./RadioButton-BTaousOD.js";
import "./scrollTo-Dpgtz1Pq.js";
const E = { class: "p4 app-content mb-2" },
  z = { class: "text-gray-600 dark:text-gray-300" },
  A = { class: "p-4 app-content" },
  I = { class: "flex items-center gap-1" },
  O = i("span", { class: "w-28 text-end flex-1" }, "Resources Type:", -1),
  M = { class: "flex items-center gap-1" },
  G = i("span", { class: "w-28 text-end flex-1" }, "Price Range:", -1),
  N = { class: "flex items-center gap-2" },
  B = i("span", null, "~", -1),
  L = { class: "flex items-center gap-1" },
  R = i("span", { class: "w-28 text-end flex-1" }, "Host Memory:", -1),
  D = { class: "flex items-center gap-1" },
  H = i("span", { class: "w-28 text-end flex-1" }, "GPU Count:", -1),
  F = { class: "flex items-center gap-1" },
  J = i("span", { class: "w-28 text-end flex-1" }, "Storage:", -1),
  q = { class: "flex items-center gap-1" },
  V = i("span", { class: "w-28 text-end flex-1" }, "CPU Cores:", -1),
  W = { class: "flex items-center gap-1" },
  X = i("span", { class: "w-28 text-end flex-1" }, "Job Type:", -1),
  Q = { key: 0, class: "flex gap-2" },
  Y = { class: "flex gap-2" },
  $ = i("b", null, "Device Id: ", -1),
  K = { class: "flex gap-2" },
  Z = i("b", null, "Host Memory: ", -1),
  ee = { class: "flex gap-2" },
  le = i("b", null, "Storage: ", -1),
  ae = { class: "flex gap-2" },
  te = i("b", null, "CPU (#Cores): ", -1),
  se = { class: "flex gap-2" },
  ne = i("b", null, "Total GPU Count: ", -1),
  re = { class: "flex gap-2" },
  oe = i("b", null, "Available GPU Count: ", -1),
  ie = { key: 1 },
  ue = i("b", null, "Provider: ", -1),
  pe = i("b", null, "Resource Type: ", -1),
  ce = i("b", null, "Supported Job Type: ", -1),
  de = { key: 2 },
  me = i("b", null, "Cost: ", -1),
  xe = i("span", null, "/GPU/Hour", -1),
  ve = e({
    __name: "index",
    setup(e) {
      const ve = l({ current: 1, pageSize: 10, total: 0 }),
        ye = h(Te, 1e3);
      const be = a([]),
        fe = a(!1),
        ge = a(""),
        he = l({ resourceType: "", ramSize: "", storage: "" }),
        je = a([
          { value: 0, label: "Train Only" },
          { value: 1, label: "Deploy Only" },
          { value: null, label: "ALL" },
        ]);
      async function Te() {
        await b(), (fe.value = !0), (he.resourceType = ge.value);
        try {
          const l = await ((e = {
            pageSize: ve.pageSize,
            pageNum: ve.current,
            marketplaceType: 1,
            ...he,
          }),
          j("/gpu-machine/list/available")
            .get({ query: e })
            .then((e) => e.data));
          (be.value = l?.content || []), (ve.total = l?.totalSize || 0);
        } catch (l) {
        } finally {
          fe.value = !1;
        }
        var e;
      }
      function Pe(e) {
        switch ((e = e.toString())) {
          case "1":
            return "i-bi:amd";
          case "2":
            return "i-simple-icons:intel";
          case "0":
            return "i-bi:nvidia";
          default:
            return "i-bi:gpu-card";
        }
      }
      function we(e) {
        switch ((e = e.toString())) {
          case "1":
            return "#ED1C24";
          case "2":
            return "#0072C6";
          case "0":
            return "#76B900";
          default:
            return "currentColor";
        }
      }
      async function Ce() {
        (ve.current = 1), await ye();
      }
      t(() => {
        Te();
      });
      const _e = f;
      return (e, l) => {
        const a = s("router-link"),
          t = T,
          b = S,
          f = _,
          h = U,
          j = g,
          ye = k;
        return (
          n(),
          r(
            d(w),
            { "auto-title": "" },
            {
              default: o(() => [
                i("section", E, [
                  u(t, null, {
                    default: o(() => [
                      i("span", z, [
                        p(
                          " The following compute resources are bound to " +
                            c("APP_TITLE" in e ? e.APP_TITLE : d(m)) +
                            " and standing by for your job requests. " +
                            c("APP_TITLE" in e ? e.APP_TITLE : d(m)) +
                            " will automatically select the most cost-effective resources required for your job. GPU suppliers may contribute their GPUs at ",
                          1
                        ),
                        u(
                          a,
                          { to: { name: d(_e).COMPUTE_SHARE_AND_EARN } },
                          { default: o(() => [p("Share & Earn")]), _: 1 },
                          8,
                          ["to"]
                        ),
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                i("section", A, [
                  i(
                    "form",
                    {
                      class: "p-4 flex flex-wrap gap-x-8 gap-y-2",
                      onSubmit: Ce,
                    },
                    [
                      i("div", I, [
                        O,
                        u(
                          C,
                          {
                            modelValue: d(ge),
                            "onUpdate:modelValue":
                              l[0] ||
                              (l[0] = (e) => (x(ge) ? (ge.value = e) : null)),
                            source: "secure",
                            style: { width: "280px" },
                            onChange: Ce,
                          },
                          null,
                          8,
                          ["modelValue"]
                        ),
                      ]),
                      i("div", M, [
                        G,
                        i("div", N, [
                          u(
                            b,
                            {
                              value: d(he).startPrice,
                              "onUpdate:value":
                                l[1] || (l[1] = (e) => (d(he).startPrice = e)),
                              style: { width: "130px" },
                              step: 0.001,
                              min: 0,
                              max: Number(
                                d(he).endPrice || Number.MAX_SAFE_INTEGER
                              ),
                              placeholder: "Minimum price",
                              onInput: Ce,
                            },
                            null,
                            8,
                            ["value", "max"]
                          ),
                          B,
                          u(
                            b,
                            {
                              value: d(he).endPrice,
                              "onUpdate:value":
                                l[2] || (l[2] = (e) => (d(he).endPrice = e)),
                              style: { width: "130px" },
                              step: 0.001,
                              placeholder: "Maximum price",
                              min: d(he).startPrice,
                              max: Number.MAX_SAFE_INTEGER,
                              onInput: Ce,
                            },
                            null,
                            8,
                            ["value", "min", "max"]
                          ),
                        ]),
                      ]),
                      i("div", L, [
                        R,
                        u(
                          b,
                          {
                            value: d(he).ramSize,
                            "onUpdate:value":
                              l[3] || (l[3] = (e) => (d(he).ramSize = e)),
                            style: { width: "280px" },
                            min: 0,
                            placeholder: "Minimum size of host memory",
                            onInput: Ce,
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                      i("div", D, [
                        H,
                        u(
                          b,
                          {
                            value: d(he).gpuCount,
                            "onUpdate:value":
                              l[4] || (l[4] = (e) => (d(he).gpuCount = e)),
                            style: { width: "280px" },
                            min: 0,
                            placeholder: "Minimum number of GPU count",
                            onInput: Ce,
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                      i("div", F, [
                        J,
                        u(
                          b,
                          {
                            value: d(he).storage,
                            "onUpdate:value":
                              l[5] || (l[5] = (e) => (d(he).storage = e)),
                            style: { width: "280px" },
                            min: 0,
                            placeholder: "Minimum size of storage",
                            onInput: Ce,
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                      i("div", q, [
                        V,
                        u(
                          b,
                          {
                            value: d(he).vcpuCount,
                            "onUpdate:value":
                              l[6] || (l[6] = (e) => (d(he).vcpuCount = e)),
                            style: { width: "280px" },
                            min: 0,
                            placeholder: "Minimum count of CPU cores",
                            onInput: Ce,
                          },
                          null,
                          8,
                          ["value"]
                        ),
                      ]),
                      i("div", W, [
                        X,
                        u(
                          f,
                          {
                            value: d(he).supportJobType,
                            "onUpdate:value":
                              l[7] ||
                              (l[7] = (e) => (d(he).supportJobType = e)),
                            style: { width: "280px" },
                            placeholder: "Supported job type",
                            options: d(je),
                            onChange: Ce,
                          },
                          null,
                          8,
                          ["value", "options"]
                        ),
                      ]),
                    ],
                    32
                  ),
                  u(
                    ye,
                    {
                      bordered: "",
                      "data-source": d(be),
                      "row-key": "gpuId",
                      loading: d(fe),
                      "show-header": !1,
                      scroll: { x: 1080, y: 460 },
                      pagination: d(ve),
                      onChange:
                        l[8] ||
                        (l[8] = ({ pageSize: e, current: l }) =>
                          (function (e = 1, l = 10) {
                            (ve.current = e), (ve.pageSize = l), Te();
                          })(l, e)),
                    },
                    {
                      bodyCell: o(({ column: e, record: l }) => [
                        "brandType" === e.key
                          ? (n(),
                            v("div", Q, [
                              u(
                                j,
                                {
                                  icon: Pe(l?.brand),
                                  color: we(l?.brand),
                                  size: 52,
                                },
                                null,
                                8,
                                ["icon", "color"]
                              ),
                              i("ul", null, [
                                i("li", null, c(l.brandType), 1),
                                i("li", null, [
                                  i("div", Y, [
                                    i("span", null, [$, p(c(l.id), 1)]),
                                  ]),
                                ]),
                                i("li", null, [
                                  i("div", K, [
                                    i("span", null, [Z, p(c(l.ramSize), 1)]),
                                  ]),
                                ]),
                                i("li", null, [
                                  i("div", ee, [
                                    i("span", null, [
                                      le,
                                      p(c(l.diskSpaceTotal), 1),
                                    ]),
                                  ]),
                                ]),
                                i("li", null, [
                                  i("div", ae, [
                                    i("span", null, [te, p(c(l.vcpuCount), 1)]),
                                  ]),
                                ]),
                                i("li", null, [
                                  i("div", se, [
                                    i("span", null, [
                                      ne,
                                      p(c(l.totalNumberOfGPUs), 1),
                                    ]),
                                  ]),
                                ]),
                                i("li", null, [
                                  i("div", re, [
                                    i("span", null, [
                                      oe,
                                      p(c(l.availableNumberOfGPUs), 1),
                                    ]),
                                  ]),
                                ]),
                                i("li", null, c(l.location), 1),
                              ]),
                            ]))
                          : "provider" === e.key
                          ? (n(),
                            v("ul", ie, [
                              i("li", null, [ue, p(c(l.provider), 1)]),
                              i("li", null, [pe, p(c(l.resourceType), 1)]),
                              i("li", null, [
                                ce,
                                p(
                                  c(
                                    0 == l.supportJobType
                                      ? "Train Only"
                                      : "Deploy Only"
                                  ),
                                  1
                                ),
                              ]),
                            ]))
                          : "avgCost" === e.key
                          ? (n(),
                            v("ul", de, [
                              i("li", null, [
                                me,
                                u(
                                  d(P),
                                  {
                                    class: "text-primary font-bold text-xl",
                                    decimals: 2,
                                    prefix: "$",
                                    "end-val": l.costPerHour,
                                  },
                                  null,
                                  8,
                                  ["end-val"]
                                ),
                                xe,
                              ]),
                            ]))
                          : y("", !0),
                      ]),
                      default: o(() => [
                        u(h, {
                          key: "brandType",
                          width: "40%",
                          title: "brand",
                        }),
                        u(h, {
                          key: "provider",
                          width: "30%",
                          title: "provider",
                        }),
                        u(h, {
                          key: "avgCost",
                          width: "20%",
                          title: "avg. const",
                        }),
                      ]),
                      _: 1,
                    },
                    8,
                    ["data-source", "loading", "pagination"]
                  ),
                ]),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
export { ve as default };

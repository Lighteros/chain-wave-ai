import { _ as t } from "./BasicTitle-CY4FQusD.js";
import {
  as as e,
  bz as a,
  dK as s,
  dL as n,
  r as o,
  bh as i,
  at as r,
  c as l,
  dM as u,
  aL as d,
  au as m,
  av as p,
  bl as c,
  aw as f,
  ax as y,
  aA as g,
  a as v,
  bO as x,
  bo as h,
  aB as j,
  bp as b,
  dm as Y,
  cM as _,
  dN as T,
  aD as w,
  cF as S,
  az as z,
} from "./index-DPRREYlk.js";
import { P as M } from "./index-Dgmkw5o7.js";
import { G as k, a as C, b as A } from "./index-btKS0vR9.js";
import { C as D } from "./index-D4noaftF.js";
import { P as I } from "./paymentEnum-DfpNrUeK.js";
import { a as H, _ as O } from "./RadioButton-BTaousOD.js";
import { R as B } from "./dayjs-C6RU4zP_.js";
import { _ as P, a as U } from "./index-Cl2HaiV4.js";
import { _ as L } from "./index-CacitUCz.js";
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
import "./create-enum-converter-ClJbjM_p.js";
import "./Checkbox-KylR2T3k.js";
import "./index-CMko8JXS.js";
import "./CheckableTag-CI-ued8d.js";
import "./index-BPauqaGF.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./index-Ty6iIrKu.js";
import "./index-jlJCtu5U.js";
import "./debounce-CUtJ7ZQO.js";
import "./index-DGJYrvBD.js";
import "./index-yjwfeS3_.js";
import "./scrollTo-Dpgtz1Pq.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./zh_CN-CAyhejr6.js";
const N = { class: "py-2" },
  R = { key: 1, class: "px-4" },
  E = e({
    __name: "BillingList",
    setup(t) {
      a.extend(s), a.extend(n);
      const e = o("year"),
        T = i(),
        w = o([a().subtract(1, "year"), a()]);
      function S(t) {
        return t && t >= a().endOf("day");
      }
      const z = r({ loading: !1, data: [] }),
        M = r({
          current: 1,
          pageSize: 10,
          total: 0,
          onChange(t, e) {
            (M.current = t), (M.pageSize = e), A();
          },
        }),
        k = o([
          { dataIndex: "id", title: "Billing ID" },
          {
            dataIndex: "payStatus",
            title: "Pay Status",
            customRender: ({ text: t }) => I.keyToLabel(t),
          },
          { dataIndex: "cost", title: "Earning ($)" },
          {
            dataIndex: "spendTime",
            title: "Spend Time",
            customRender: ({ text: t }) => f("span", null, [Y(t)]),
          },
          {
            dataIndex: "payTime",
            title: "Pay Time",
            customRender: ({ text: t }) => f("span", null, [_(t)]),
          },
        ]);
      const C = l(() => {
        const t = {
          apikey: T.getUserInfo.apiKey,
          pageNum: M.current,
          pageSize: M.pageSize,
          userId: Number(T.getUserInfo.id),
        };
        return (
          "year" === e.value
            ? ((t.startTime = a()
                .startOf("year")
                .format("YYYY-MM-DD HH:mm:ss")),
              (t.endTime = a().endOf("year").format("YYYY-MM-DD HH:mm:ss")))
            : "thisMonth" === e.value
            ? ((t.startTime = a()
                .startOf("month")
                .format("YYYY-MM-DD HH:mm:ss")),
              (t.endTime = a().endOf("month").format("YYYY-MM-DD HH:mm:ss")))
            : "custom" === e.value &&
              w.value?.length &&
              ((t.startTime = w.value
                .at(0)
                ?.startOf("day")
                ?.format("YYYY-MM-DD HH:mm:ss")),
              (t.endTime = w.value
                .at(1)
                ?.endOf("day")
                .format("YYYY-MM-DD HH:mm:ss"))),
          t
        );
      });
      async function A(t = !1) {
        t && (M.current = 1), (z.loading = !0);
        try {
          const { data: t } = await u(
            "/api/v1/payment/querySupplierBillingList"
          ).post({ body: C.value });
          (M.current = t.pageNum),
            (M.pageSize = t.pageSize),
            (M.total = t.total),
            (z.data = t.data);
        } finally {
          z.loading = !1;
        }
      }
      return (
        d(() => {
          A();
        }),
        (t, a) => {
          const s = H,
            n = O,
            o = B,
            i = b,
            r = P;
          return (
            m(),
            p("div", null, [
              c("nav", N, [
                f(
                  n,
                  {
                    value: v(e),
                    "onUpdate:value":
                      a[0] || (a[0] = (t) => (x(e) ? (e.value = t) : null)),
                    onChange:
                      a[1] ||
                      (a[1] = (t) => {
                        A(!0);
                      }),
                  },
                  {
                    default: y(() => [
                      f(
                        s,
                        { value: "thisMonth" },
                        { default: y(() => [g(" This Month ")]), _: 1 }
                      ),
                      f(
                        s,
                        { value: "year" },
                        { default: y(() => [g(" This Year ")]), _: 1 }
                      ),
                      f(
                        s,
                        { value: "custom" },
                        { default: y(() => [g(" Custom ")]), _: 1 }
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["value"]
                ),
                "custom" === v(e)
                  ? (m(),
                    h(
                      o,
                      {
                        key: 0,
                        value: v(w),
                        "onUpdate:value":
                          a[2] || (a[2] = (t) => (x(w) ? (w.value = t) : null)),
                        "disabled-date": S,
                        onChange: a[3] || (a[3] = (t) => A(!0)),
                      },
                      null,
                      8,
                      ["value"]
                    ))
                  : (m(),
                    p("span", R, [
                      g(j(v(C).startTime) + " ", 1),
                      f(i, { icon: "i-ion:arrow-forward" }),
                      g(" " + j(v(C).endTime), 1),
                    ])),
              ]),
              f(
                r,
                {
                  pagination: v(M),
                  "onUpdate:pagination":
                    a[4] || (a[4] = (t) => (x(M) ? (M.value = t) : null)),
                  "data-source": v(z).data,
                  loading: v(z).loading,
                  columns: v(k),
                },
                null,
                8,
                ["pagination", "data-source", "loading", "columns"]
              ),
            ])
          );
        }
      );
    },
  }),
  $ = { class: "app-content p-4" },
  F = { class: "flex justify-between items-center gap4" },
  G = c("span", null, " Revenues Statistics: ", -1),
  q = { class: "lg:w-180 md:w-full" },
  K = { class: "flex justify-start items-center p-2 border-b-1" },
  W = c("span", { class: "w-60" }, "Month-to-date revenue :", -1),
  J = { class: "flex justify-start items-center p-2 border-b-1" },
  Q = c("span", { class: "w-60" }, "Year-to-date revenue:", -1),
  V = { class: "flex justify-start items-center p-2" },
  X = c("span", { class: "w-60" }, "Amount paid to your account:", -1),
  Z = { class: "flex flex-col" },
  tt = { class: "lg:w-180 md:w-full" },
  et = { class: "p2" },
  at = e({
    __name: "index",
    setup(e) {
      const a = i(),
        s = l(() => T("Earnings").value || ""),
        n = r({ amountPaidToYourAccount: 0, monthAmount: 0, yearAmount: 0 }),
        p = o(!1);
      const x = r({ content: [], current: 1, pageSize: 10, total: 0 });
      async function Y() {
        p.value = !0;
        try {
          const t = await S("/gpu-machine/list").get({
            query: {
              pageNum: x.current,
              pageSize: x.pageSize,
              userId: String(a.getUserInfo.id),
            },
          });
          (x.content = t.data?.content || []),
            (x.total = t.data?.totalSize || 0);
        } catch (t) {
        } finally {
          p.value = !1;
        }
      }
      function _() {
        !(async function () {
          p.value = !0;
          try {
            const { data: t } = await u(
              "/api/v1/payment/supplierPaymentStatistics"
            ).post({ body: { userId: Number(a.getUserInfo.id) } });
            (n.amountPaidToYourAccount = t.amountPaidToYourAccount),
              (n.monthAmount = t.monthAmount),
              (n.yearAmount = t.yearAmount);
          } finally {
            p.value = !1;
          }
        })(),
          (async function () {
            p.value = !0;
            try {
              await Y();
            } finally {
              p.value = !1;
            }
          })();
      }
      return (
        d(() => {
          _();
        }),
        (e, a) => {
          const o = b,
            i = z,
            r = t,
            l = U,
            u = P,
            d = L;
          return (
            m(),
            h(
              v(M),
              { title: v(s), "fixed-height": "", "content-full-height": "" },
              {
                default: y(() => [
                  c("section", $, [
                    f(r, null, {
                      default: y(() => [
                        c("span", F, [
                          G,
                          f(
                            i,
                            { size: "small", shape: "circle", onClick: _ },
                            {
                              default: y(() => [
                                f(
                                  o,
                                  { icon: "i-ion:refresh", spin: v(p) },
                                  null,
                                  8,
                                  ["spin"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                      ]),
                      _: 1,
                    }),
                    c("ul", q, [
                      c("li", K, [
                        W,
                        f(
                          v(D),
                          {
                            "end-val": v(n).amountPaidToYourAccount,
                            decimals: 2,
                            prefix: "$",
                            class:
                              "text-2xl font-bold text-right flex-1 text-primary",
                          },
                          null,
                          8,
                          ["end-val"]
                        ),
                      ]),
                      c("li", J, [
                        Q,
                        f(
                          v(D),
                          {
                            "end-val": v(n).yearAmount,
                            decimals: 2,
                            prefix: "$",
                            class:
                              "text-2xl font-bold text-right flex-1 text-primary",
                          },
                          null,
                          8,
                          ["end-val"]
                        ),
                      ]),
                      c("li", V, [
                        X,
                        f(
                          v(D),
                          {
                            "end-val": v(n).monthAmount,
                            decimals: 2,
                            prefix: "$",
                            class:
                              "text-2xl font-bold text-right flex-1 text-primary",
                          },
                          null,
                          8,
                          ["end-val"]
                        ),
                      ]),
                    ]),
                    f(
                      r,
                      { class: "mt-4" },
                      { default: y(() => [g(" Income Billing List: ")]), _: 1 }
                    ),
                    f(E),
                    f(
                      r,
                      { class: "mt-4" },
                      {
                        default: y(() => [
                          c("div", Z, [
                            c(
                              "span",
                              null,
                              "You have " +
                                j(v(x).total) +
                                " " +
                                j(v(x).total > 1 ? "machines" : "machine") +
                                ":",
                              1
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                    c("div", tt, [
                      f(
                        u,
                        {
                          class: "w-full",
                          bordered: "",
                          "data-source": v(x).content,
                          "show-header": !1,
                          pagination: !1,
                        },
                        {
                          bodyCell: y(({ column: t, record: e }) => [
                            "brandType" === t.key
                              ? (m(),
                                h(v(k), { key: 0, record: e }, null, 8, [
                                  "record",
                                ]))
                              : "provider" === t.key
                              ? (m(),
                                h(v(C), { key: 1, record: e }, null, 8, [
                                  "record",
                                ]))
                              : "avgCost" === t.key
                              ? (m(),
                                h(v(A), { key: 2, record: e }, null, 8, [
                                  "record",
                                ]))
                              : w("", !0),
                          ]),
                          default: y(() => [
                            f(l, {
                              key: "brandType",
                              width: "30%",
                              title: "brand",
                            }),
                            f(l, {
                              key: "provider",
                              width: "20%",
                              title: "provider",
                            }),
                            f(l, {
                              key: "avgCost",
                              width: "20%",
                              title: "avg. const",
                            }),
                          ]),
                          _: 1,
                        },
                        8,
                        ["data-source"]
                      ),
                      c("div", et, [
                        f(
                          d,
                          {
                            current: v(x).current,
                            "onUpdate:current":
                              a[0] || (a[0] = (t) => (v(x).current = t)),
                            "page-size": v(x).pageSize,
                            "onUpdate:pageSize":
                              a[1] || (a[1] = (t) => (v(x).pageSize = t)),
                            total: v(x).total,
                            onChange: a[2] || (a[2] = (t) => Y()),
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
              },
              8,
              ["title"]
            )
          );
        }
      );
    },
  });
export { at as default };

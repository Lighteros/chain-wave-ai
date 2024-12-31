import {
  as as e,
  r as t,
  at as a,
  aL as i,
  bw as s,
  au as o,
  bo as l,
  ax as n,
  aw as r,
  bl as d,
  a as u,
  bO as c,
  by as m,
  aA as p,
  aB as f,
  aD as g,
  av as y,
  aC as h,
  cM as _,
  bW as x,
  cT as v,
  aF as b,
  bp as j,
  d1 as C,
  az as w,
  bP as k,
} from "./index-DPRREYlk.js";
import { _ as z } from "./PopConfirmButton.vue_vue_type_script_lang-BxbUu1Is.js";
import { P as S } from "./index-Dgmkw5o7.js";
import { c as N } from "./file-CjjWlRhT.js";
import { a as T } from "./download-D26P9I-0.js";
import { A } from "./ActionsMenu-DOu7q-vd.js";
import { u as D } from "./useTabBounding-D3g5dwOP.js";
import { u as B } from "./useAbort-Dlct5Mff.js";
import { _ as E, a as I } from "./index-Cl2HaiV4.js";
import { _ as L } from "./index-RHVCHHe5.js";
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
const O = e({
    slots: Object,
    setup(e, a) {
      const { loading: i, execute: s } = (function () {
        const e = t(!1);
        return {
          execute: async function (t) {
            if (!e.value)
              return (
                (e.value = !0),
                Promise.resolve(t)
                  .catch((e) => {})
                  .finally(() => {
                    e.value = !1;
                  })
              );
          },
          loading: e,
        };
      })();
      return () => a.slots.default({ exec: s, loading: i.value });
    },
  }),
  P = { class: "app-content p4" },
  R = { class: "flex items-center gap2 p-4" },
  F = { key: 2 },
  U = { class: "flex items-center gap-1" },
  V = { class: "font-bold" },
  q = { class: "p-2 flex flex-col gap-1" },
  M = e({
    __name: "index",
    setup(e) {
      const { tabRef: M, height: W } = D({ tabHeight: 120 }),
        { interruptable: G } = B(),
        H = t([
          {
            title: "Data Name",
            dataIndex: "datasetName",
            key: "datasetName",
            width: 150,
            resizable: !0,
            ellipsis: !0,
          },
          {
            title: "Data Size",
            dataIndex: "fileSize",
            key: "fileSize",
            width: 150,
            resizable: !0,
            ellipsis: !0,
          },
          {
            title: "The Latest Version",
            dataIndex: "version",
            key: "version",
            width: 150,
          },
          {
            title: "Create Time",
            dataIndex: "createTime",
            key: "createTime",
            ellipsis: !0,
            width: 300,
          },
          {
            title: "Actions",
            ellipsis: !0,
            fixed: "right",
            resizable: !0,
            key: "action",
            width: 300,
          },
        ]),
        K = t(""),
        Q = t([]),
        X = a({ total: 0, current: 1, pageSize: 10, showSizeChanger: !0 }),
        Y = a({ name: "", list: [], selected: [], visible: !1 });
      const $ = x(() => {
        (X.current = 1), J();
      }, 300);
      async function J() {
        return G(async (e) => {
          try {
            const { data: t } = await v("/api/v1/storage/list").get({
              query: {
                datasetName: K.value,
                pageNum: X.current,
                pageSize: X.pageSize,
              },
              signal: e,
            });
            t && ((X.total = t.total || 0), (Q.value = t.data || []));
          } catch (t) {}
        });
      }
      async function Z(e) {
        try {
          const { code: t } = await v("/api/v1/storage/delete").post({
            body: { ids: e },
          });
          "SUCCESS" === t && (b.success("Delete successfully"), J());
        } catch (t) {
          b.warn("Delete failed");
        } finally {
          Y.visible = !1;
        }
      }
      return (
        i(async () => {
          J();
        }),
        (e, t) => {
          const a = j,
            i = C,
            x = w,
            D = s("router-link"),
            B = z,
            G = E,
            ee = L,
            te = I,
            ae = k;
          return (
            o(),
            l(
              u(S),
              {
                "auto-title": "",
                "fixed-height": "",
                "content-full-height": "",
              },
              {
                default: n(() => [
                  r(u(O), null, {
                    default: n(({ loading: s, exec: j }) => [
                      d("div", P, [
                        d("nav", R, [
                          r(
                            i,
                            {
                              value: u(K),
                              "onUpdate:value":
                                t[0] ||
                                (t[0] = (e) => (c(K) ? (K.value = e) : null)),
                              class: "w-60",
                              loading: s,
                              placeholder: "Search by name",
                              onInput: (e) => j(u($)()),
                              onSearch: (e) => j(u($)),
                            },
                            {
                              prefix: n(() => [r(a, { icon: "i-ion:search" })]),
                              _: 2,
                            },
                            1032,
                            ["value", "loading", "onInput", "onSearch"]
                          ),
                          r(
                            D,
                            {
                              to: {
                                name: ("routerNames" in e
                                  ? e.routerNames
                                  : u(m)
                                ).DATA_CREATE,
                                query: { isCreate: "true" },
                              },
                              class: "ml-auto",
                            },
                            {
                              default: n(() => [
                                r(
                                  x,
                                  { type: "primary" },
                                  {
                                    default: n(() => [
                                      r(a, { icon: "i-icon-park-outline:add" }),
                                      p(" Create Data "),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["to"]
                          ),
                        ]),
                        d(
                          "section",
                          { ref_key: "tabRef", ref: M, class: "px-4" },
                          [
                            r(
                              G,
                              {
                                columns: u(H),
                                "data-source": u(Q),
                                pagination: u(X),
                                loading: s,
                                scroll: { y: u(W), x: 1080 },
                                onChange:
                                  t[1] ||
                                  (t[1] = (e) =>
                                    (function (e, t = 1) {
                                      (X.current = t), (X.pageSize = e), J();
                                    })(e.pageSize, e.current)),
                                onResizeColumn:
                                  t[2] || (t[2] = (e, t) => (t.width = e)),
                              },
                              {
                                bodyCell: n(({ column: t, record: a }) => [
                                  "datasetName" === t.key
                                    ? (o(),
                                      l(
                                        D,
                                        {
                                          key: 0,
                                          to: {
                                            name: ("routerNames" in e
                                              ? e.routerNames
                                              : u(m)
                                            ).DATA_DETAILS,
                                            params: { name: a.datasetName },
                                          },
                                        },
                                        {
                                          default: n(() => [
                                            p(f(a.datasetName), 1),
                                          ]),
                                          _: 2,
                                        },
                                        1032,
                                        ["to"]
                                      ))
                                    : g("", !0),
                                  "fileSize" === t.key
                                    ? (o(),
                                      y(
                                        h,
                                        { key: 1 },
                                        [p(f(u(N)(a.fileSize)), 1)],
                                        64
                                      ))
                                    : "createTime" === t.key
                                    ? (o(),
                                      y("span", F, f(u(_)(a.createTime)), 1))
                                    : "action" === t.key
                                    ? (o(),
                                      l(
                                        u(A),
                                        { key: 3 },
                                        {
                                          default: n(() => [
                                            r(
                                              D,
                                              {
                                                to: {
                                                  name: ("routerNames" in e
                                                    ? e.routerNames
                                                    : u(m)
                                                  ).DATA_DETAILS,
                                                  params: {
                                                    name: a.datasetName,
                                                  },
                                                },
                                              },
                                              {
                                                default: n(() => [
                                                  r(
                                                    x,
                                                    { size: "small" },
                                                    {
                                                      default: n(() => [
                                                        p(" Detail "),
                                                      ]),
                                                      _: 1,
                                                    }
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["to"]
                                            ),
                                            r(
                                              x,
                                              {
                                                loading: a.loading,
                                                size: "small",
                                                onClick: (e) =>
                                                  (async function (e) {
                                                    const t =
                                                        new AbortController(),
                                                      a = b.loading({
                                                        content: `Fetching data URL for ${e.fileName}`,
                                                        duration: 0,
                                                        onClick() {
                                                          a();
                                                        },
                                                        onClose() {
                                                          t.abort();
                                                        },
                                                      }),
                                                      i = await fetch(
                                                        e.fileUrl,
                                                        { signal: t.signal }
                                                      )
                                                        .then((e) => e.blob())
                                                        .finally(() => {
                                                          a();
                                                        });
                                                    T(i, e.fileName);
                                                  })(a),
                                              },
                                              {
                                                default: n(() => [
                                                  p(" Download "),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["loading", "onClick"]
                                            ),
                                            r(
                                              D,
                                              {
                                                to: {
                                                  name: ("routerNames" in e
                                                    ? e.routerNames
                                                    : u(m)
                                                  ).DATASET_EDIT,
                                                  query: {
                                                    id: a.id,
                                                    version:
                                                      a.latestModelVersion,
                                                  },
                                                },
                                              },
                                              {
                                                default: n(() => [
                                                  r(
                                                    x,
                                                    { size: "small" },
                                                    {
                                                      default: n(() => [
                                                        p(" Edit "),
                                                      ]),
                                                      _: 1,
                                                    }
                                                  ),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["to"]
                                            ),
                                            r(
                                              B,
                                              {
                                                size: "small",
                                                type: "primary",
                                                title:
                                                  "Are you sure you want to delete this data?",
                                                onConfirm: (e) => {
                                                  return (
                                                    (t = a.datasetName),
                                                    void v(
                                                      "/api/v1/storage/version-list"
                                                    )
                                                      .get({
                                                        query: {
                                                          datasetName: t,
                                                        },
                                                      })
                                                      .then((e) => {
                                                        if (
                                                          e.data &&
                                                          e.data.length > 0
                                                        ) {
                                                          if (
                                                            1 == e.data.length
                                                          )
                                                            return Z(
                                                              e.data
                                                                .map((e) =>
                                                                  e.id.toString()
                                                                )
                                                                .filter(Boolean)
                                                            );
                                                          (Y.name = t),
                                                            (Y.list =
                                                              e.data || []),
                                                            (Y.visible = !0);
                                                        } else $();
                                                      })
                                                  );
                                                  var t;
                                                },
                                              },
                                              {
                                                default: n(() => [
                                                  p(" Delete "),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ["onConfirm"]
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : g("", !0),
                                ]),
                                _: 2,
                              },
                              1032,
                              [
                                "columns",
                                "data-source",
                                "pagination",
                                "loading",
                                "scroll",
                              ]
                            ),
                            r(
                              ae,
                              {
                                open: u(Y).visible,
                                "onUpdate:open":
                                  t[5] || (t[5] = (e) => (u(Y).visible = e)),
                                width: "50vw",
                              },
                              {
                                title: n(() => [
                                  d("span", U, [
                                    r(a, {
                                      icon: "i-ph:trash-bold",
                                      class: "text-red-500",
                                    }),
                                    d("span", V, f(u(Y).name), 1),
                                    p("> Select Version "),
                                  ]),
                                ]),
                                footer: n(() => [
                                  r(
                                    x,
                                    {
                                      onClick:
                                        t[3] ||
                                        (t[3] = (e) => (u(Y).visible = !1)),
                                    },
                                    { default: n(() => [p(" Cancel ")]), _: 1 }
                                  ),
                                  r(
                                    x,
                                    {
                                      disabled: !u(Y).selected.length,
                                      loading: s,
                                      type: "primary",
                                      onClick:
                                        t[4] ||
                                        (t[4] = (e) => Z(u(Y).selected)),
                                    },
                                    {
                                      default: n(() => [
                                        p(" Confirm "),
                                        u(Y).selected.length
                                          ? (o(),
                                            y(
                                              h,
                                              { key: 0 },
                                              [
                                                p(
                                                  " (+" +
                                                    f(u(Y).selected.length) +
                                                    ") ",
                                                  1
                                                ),
                                              ],
                                              64
                                            ))
                                          : g("", !0),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["disabled", "loading"]
                                  ),
                                ]),
                                default: n(() => [
                                  d("div", q, [
                                    r(
                                      ee,
                                      { type: "info" },
                                      {
                                        message: n(() => [
                                          p(
                                            " Please select the version you want to delete since there are multiple versions of the data. "
                                          ),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    r(
                                      G,
                                      {
                                        size: "small",
                                        "row-key": "id",
                                        "row-selection": {
                                          selectedRowKeys: u(Y).selected,
                                          onChange: (e) => {
                                            u(Y).selected = e;
                                          },
                                        },
                                        scroll: { y: 300, x: "50%" },
                                        pagination: !1,
                                        "data-source": u(Y).list,
                                      },
                                      {
                                        default: n(() => [
                                          r(te, {
                                            title: "Version",
                                            "data-index": "version",
                                          }),
                                          r(
                                            te,
                                            {
                                              title: "File Size",
                                              "data-index": "fileSize",
                                            },
                                            {
                                              default: n(({ text: e }) => [
                                                p(f(u(N)(e)), 1),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                          r(
                                            te,
                                            {
                                              title: "Created Time",
                                              "data-index": "createTime",
                                            },
                                            {
                                              default: n(({ text: e }) => [
                                                p(f(u(_)(e)), 1),
                                              ]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ["row-selection", "data-source"]
                                    ),
                                  ]),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["open"]
                            ),
                          ],
                          512
                        ),
                      ]),
                    ]),
                    _: 1,
                  }),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  });
export { M as default };

import {
  aN as e,
  as as t,
  r as a,
  bh as s,
  c as i,
  dE as o,
  aL as l,
  au as r,
  bo as n,
  ax as d,
  bl as p,
  aw as u,
  aA as c,
  a as m,
  bE as y,
  dF as f,
  aB as _,
  av as v,
  aC as g,
  aD as k,
  bO as x,
  bp as j,
  az as h,
} from "./index-DPRREYlk.js";
import { _ as I } from "./BasicTitle-CY4FQusD.js";
import { P as b } from "./index-Dgmkw5o7.js";
import { P as w } from "./index-BfMdU48n.js";
import { _ as z } from "./CodeBlock.vue_vue_type_style_index_0_lang-BAHlxJi4.js";
import { m as C } from "./utils-CWmEVrfF.js";
import { _ as S } from "./rename-cell.vue_vue_type_script_setup_true_lang-DIKsg5Zt.js";
import { T as N } from "./index-CMko8JXS.js";
import { _ as T } from "./index-CacitUCz.js";
import { _ as E } from "./index-Cl2HaiV4.js";
import "./tsxHelper-DjrCDYtL.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./BasicButton.vue_vue_type_script_setup_true_lang-EzE3DJdj.js";
import "./useAttrs-CpoV-7Xq.js";
import "./PopConfirmButton.vue_vue_type_script_lang-BxbUu1Is.js";
import "./index-5bY6ZDBk.js";
import "./Col-Djm-avAF.js";
import "./debounce-CUtJ7ZQO.js";
import "./index-RHVCHHe5.js";
import "./CheckableTag-CI-ued8d.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./index-BPauqaGF.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./zh_CN-CAyhejr6.js";
import "./index-Ty6iIrKu.js";
import "./index-jlJCtu5U.js";
import "./index-DGJYrvBD.js";
import "./Checkbox-KylR2T3k.js";
import "./index-yjwfeS3_.js";
import "./RadioButton-BTaousOD.js";
import "./scrollTo-Dpgtz1Pq.js";
const D = "/edges/user",
  A = "/edges/deleteDevice";
const U = { class: "p4 app-content" },
  L = p(
    "p",
    null,
    " 1. Please connect (bind) your server to this platform with CLI: ",
    -1
  ),
  M = { class: "p2" },
  P = { key: 1, style: { display: "flex", "justify-content": "center" } },
  O = { class: "flex justify-end py4" },
  B = t({
    __name: "index",
    setup(t) {
      const B = a([
          {
            title: "Server ID",
            dataIndex: "id",
            key: "id",
            fixed: "left",
            resizable: !0,
            ellipsis: !0,
            width: 80,
          },
          {
            title: "Type",
            dataIndex: "type",
            key: "type",
            fixed: "left",
            resizable: !0,
            ellipsis: !0,
            width: 80,
          },
          {
            title: "Name",
            dataIndex: "deviceid",
            key: "deviceid",
            resizable: !0,
            ellipsis: !0,
            width: 320,
          },
          {
            title: "OS",
            dataIndex: "os_ver",
            key: "os_ver",
            resizable: !0,
            ellipsis: !0,
            width: 120,
          },
          {
            title: "GPU",
            dataIndex: "gpu",
            key: "gpu",
            resizable: !0,
            ellipsis: !0,
            width: 80,
          },
          {
            title: "Host Memory",
            dataIndex: "memory",
            key: "memory",
            resizable: !0,
            ellipsis: !0,
            width: 90,
          },
          {
            title: "Core Type",
            dataIndex: "core_type",
            key: "core_type",
            resizable: !0,
            ellipsis: !0,
            width: 80,
          },
          {
            title: "Ram Memory",
            dataIndex: "ramMemoryTotal",
            key: "ramMemoryTotal",
            resizable: !0,
            ellipsis: !0,
            width: 90,
          },
          {
            title: "Status",
            dataIndex: "state",
            ellipsis: !0,
            resizable: !0,
            key: "state",
            width: 100,
          },
          {
            title: "Action",
            dataIndex: "action",
            fixed: "right",
            ellipsis: !0,
            resizable: !0,
            key: "action",
            width: 100,
          },
        ]),
        G = s(),
        F = a(1),
        K = a(10),
        R = a(0),
        $ = i(() => G.getUserInfo),
        H = a(""),
        Y = a([]),
        Q = a(!1);
      async function W() {
        try {
          Q.value = !0;
          const a = await ((t = {
            id: G.getUserInfo.id,
            apiKey: $.value.apiKey,
            platform_type: 1,
            pageNum: F.value,
            pageSize: K.value,
          }),
          e.get({ url: D, params: t }));
          (Y.value = a.data),
            (F.value = a.pageNum),
            (K.value = a.pageSize),
            (R.value = a.total);
        } catch (a) {
        } finally {
          Q.value = !1;
        }
        var t;
      }
      async function q(t) {
        var a;
        await ((a = { id: t.id }), e.post({ url: A, params: a })), await W();
      }
      function J(e, t) {
        (F.value = e), (K.value = t), W();
      }
      const { height: V } = o(),
        X = i(() => Math.max(V.value - 620, 300)),
        Z = i(() => " -lp open.chainopera.ai -lpp 443 -v local"),
        ee = a(!1);
      return (
        l(async () => {
          const e = G.getUserInfo.id;
          (H.value = e.toString()), W();
        }),
        (e, t) => {
          const a = I,
            s = j,
            i = h,
            o = N,
            l = E,
            D = T;
          return (
            r(),
            n(
              m(b),
              {
                "auto-title": "",
                "content-full-height": "",
                "fixed-height": "",
              },
              {
                default: d(() => [
                  p("div", U, [
                    p("section", null, [
                      u(
                        a,
                        { span: "" },
                        {
                          default: d(() => [c(" Bind your on-prem servers ")]),
                          _: 1,
                        }
                      ),
                      L,
                      p("p", null, [
                        m($).apiKey
                          ? (r(),
                            n(
                              z,
                              {
                                key: 0,
                                class: "mt-0 max-w-200",
                                code: `fedml login ${
                                  m(ee) ? m($).apiKey : m(C)(m($).apiKey)
                                }${m(Z)}`,
                                copy: `fedml login ${m($).apiKey}${m(Z)}`,
                              },
                              {
                                actions: d(() => [
                                  u(
                                    s,
                                    {
                                      icon: m(ee)
                                        ? "solar:eye-bold"
                                        : "solar:eye-closed-bold",
                                      class: "cursor-pointer !text-gray-500",
                                      onClick:
                                        t[0] ||
                                        (t[0] = (e) => (ee.value = !m(ee))),
                                    },
                                    null,
                                    8,
                                    ["icon"]
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["code", "copy"]
                            ))
                          : (r(),
                            n(
                              z,
                              {
                                key: 1,
                                class: "mt-0 max-w-200",
                                code: `fedml login $PASTE_YOUR_FEDML_API_KEY${m(
                                  Z
                                )}`,
                                copy: "",
                              },
                              null,
                              8,
                              ["code"]
                            )),
                      ]),
                    ]),
                    p("p", null, [
                      c(" 2. After binding servers, please click "),
                      u(s, { icon: "i-ion:reload" }),
                      c(' to refresh "My Servers" '),
                    ]),
                    p("nav", M, [
                      u(
                        i,
                        { disabled: m(Q), onClick: W },
                        {
                          default: d(() => [
                            u(s, { icon: e.$route.meta.icon }, null, 8, [
                              "icon",
                            ]),
                            c(" My Servers "),
                            u(
                              s,
                              { icon: "i-ion:reload", spin: m(Q) },
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
                    ]),
                    u(
                      l,
                      {
                        "data-source": m(Y),
                        columns: m(B),
                        pagination: !1,
                        "row-key": "id",
                        size: "middle",
                        class: "mt2",
                        scroll: { y: m(X), x: 1080 },
                        loading: m(Q),
                        onResizeColumn:
                          t[1] ||
                          (t[1] = (e, t) => {
                            t.width = e;
                          }),
                      },
                      {
                        bodyCell: d(({ column: e, record: t }) => [
                          "deviceid" === e.key
                            ? (r(),
                              n(
                                S,
                                y(
                                  { key: 0 },
                                  {
                                    record: t,
                                    field: "name",
                                    api: (e) =>
                                      m(f)("/edges/update")
                                        .post({
                                          body: {
                                            accountId: e.accountid,
                                            deviceId: e.deviceid,
                                            name: e.name,
                                          },
                                        })
                                        .then((e) => {
                                          if ("SUCCESS" !== e.code)
                                            throw new Error(e.message);
                                        }),
                                  },
                                  { onOk: W }
                                ),
                                { default: d(() => [c(_(t.name), 1)]), _: 2 },
                                1040
                              ))
                            : "ramMemoryTotal" === e.key
                            ? (r(),
                              v("div", P, [
                                p(
                                  "span",
                                  null,
                                  _(t.ramMemoryTotal ? t.ramMemoryTotal : "—"),
                                  1
                                ),
                              ]))
                            : "state" === e.key
                            ? (r(),
                              v(
                                g,
                                { key: 2 },
                                [
                                  "UPGRADING" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 0, color: "cyan" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "QUEUED" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 1, color: "orange" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "INITIALIZING" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 2, color: "orange" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "TRAINING" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 3, color: "red" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "STOPPING" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 4, color: "pink" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "FINISHED" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 5, color: "blue" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "OFFLINE" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 6, color: "gray" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "PAUSED" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 7, color: "gray" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "STARTING" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 8, color: "orange" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "RUNNING" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 9, color: "red" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "KILLED" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 10, color: "blue" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : "FAILED" === t.state
                                    ? (r(),
                                      n(
                                        o,
                                        { key: 11, color: "blue" },
                                        {
                                          default: d(() => [c(_(t.state), 1)]),
                                          _: 2,
                                        },
                                        1024
                                      ))
                                    : (r(),
                                      n(
                                        o,
                                        { key: 12, color: "green" },
                                        {
                                          default: d(() => [c(" IDLE ")]),
                                          _: 1,
                                        }
                                      )),
                                ],
                                64
                              ))
                            : "action" === e.key
                            ? (r(),
                              n(
                                m(w),
                                {
                                  key: 3,
                                  title:
                                    "Are you sure you want to delete this server?",
                                  onConfirm: (e) => q(t),
                                },
                                { default: d(() => [c(" Delete ")]), _: 2 },
                                1032,
                                ["onConfirm"]
                              ))
                            : k("", !0),
                        ]),
                        _: 1,
                      },
                      8,
                      ["data-source", "columns", "scroll", "loading"]
                    ),
                    p("div", O, [
                      u(
                        D,
                        {
                          "page-num": m(F),
                          "onUpdate:pageNum":
                            t[2] ||
                            (t[2] = (e) => (x(F) ? (F.value = e) : null)),
                          "page-size": m(K),
                          "onUpdate:pageSize":
                            t[3] ||
                            (t[3] = (e) => (x(K) ? (K.value = e) : null)),
                          "show-size-changer": "",
                          total: m(R),
                          onChange: J,
                          onShowSizeChange: J,
                        },
                        null,
                        8,
                        ["page-num", "page-size", "total"]
                      ),
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
export { B as default };

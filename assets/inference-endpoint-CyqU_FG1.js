import {
  as as e,
  bh as t,
  r as a,
  at as n,
  c_ as o,
  bs as i,
  aL as s,
  bw as l,
  au as d,
  bo as r,
  ax as p,
  bl as u,
  aw as m,
  a as c,
  by as _,
  aA as f,
  aD as y,
  d0 as E,
  bE as v,
  cS as h,
  aB as b,
  bU as g,
  cN as N,
  n as w,
  bW as k,
  d1 as x,
  az as j,
  bp as I,
  cW as C,
  cR as L,
  ay as D,
  bP as O,
} from "./index-DPRREYlk.js";
import { d as S, a as A } from "./end-point-DU-Fwl9Z.js";
import { P } from "./index-BfMdU48n.js";
import { A as T } from "./ActionsMenu-DOu7q-vd.js";
import { P as R } from "./index-Dgmkw5o7.js";
import { E as z } from "./entrypointEnum-C42SeRoP.js";
import { u as U } from "./useHistoryUpdate-CmNRxW5V.js";
import { C as B } from "./index-D4noaftF.js";
import { u as F, _ as M, w as V } from "./index-BJDt42KF.js";
import { _ as q } from "./rename-cell.vue_vue_type_script_setup_true_lang-DIKsg5Zt.js";
import { S as G } from "./index-BPauqaGF.js";
import { _ as Y, F as W } from "./index-5bY6ZDBk.js";
import { _ as H } from "./index-Cl2HaiV4.js";
import { _ as $ } from "./index-RHVCHHe5.js";
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
import "./index-CMko8JXS.js";
import "./CheckableTag-CI-ued8d.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./Col-Djm-avAF.js";
import "./debounce-CUtJ7ZQO.js";
import "./index-CacitUCz.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./zh_CN-CAyhejr6.js";
import "./index-Ty6iIrKu.js";
import "./index-jlJCtu5U.js";
import "./index-DGJYrvBD.js";
import "./Checkbox-KylR2T3k.js";
import "./index-yjwfeS3_.js";
import "./RadioButton-BTaousOD.js";
import "./scrollTo-Dpgtz1Pq.js";
const K = { class: "p4 app-content" },
  J = { class: "flex mb-4 gap-2 flex-wrap" },
  Q = { class: "flex gap-1 items-center" },
  X = u("span", null, "Status:", -1),
  Z = { class: "flex items-center ml-auto gap-2" },
  ee = { class: "flex flex-col items-start bg-white" },
  te = ["href"],
  ae = ["href"],
  ne = ["href"],
  oe = u(
    "p",
    { class: "max-w-80" },
    " Please note that once the endpoint is terminated, the GPU resources used by the endpoint will be released, while the history data of endpoints remains. ",
    -1
  ),
  ie = { class: "p4" },
  se = u("div", { class: "font-bold" }, " Blue/Green upgrading: ", -1),
  le = u(
    "div",
    null,
    " When switching the endpoint’s underlying GPU cluster, our platform still keep the endpoint URL unchanged to avoid code modification on endpoint user side. ",
    -1
  ),
  de = e({
    __name: "inference-endpoint",
    setup(e) {
      const de = t(),
        { stautsOptions: re } = F(),
        pe = a([
          {
            title: "ID",
            dataIndex: "id",
            key: "id",
            resizable: !0,
            ellipsis: !0,
            width: 80,
            fixed: "left",
          },
          {
            title: "Name",
            dataIndex: "endpointName",
            key: "endpointName",
            ellipsis: !0,
            width: 180,
            fixed: "left",
          },
          {
            title: "Model Name",
            dataIndex: "modelName",
            key: "modelName",
            resizable: !0,
            ellipsis: !0,
            width: 150,
          },
          {
            title: "Model Version",
            dataIndex: "modelVersion",
            key: "modelVersion",
            resizable: !0,
            ellipsis: !0,
            width: 150,
          },
          {
            title: "Computing Resource Type",
            dataIndex: "resourceType",
            key: "resourceType",
            resizable: !0,
            ellipsis: !0,
            width: 220,
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
            resizable: !0,
            width: 150,
          },
          {
            title: "Actions",
            dataIndex: "action",
            key: "action",
            resizable: !0,
            ellipsis: !0,
            width: 240,
            fixed: "right",
          },
        ]),
        ue = a(!1),
        me = n({ current: 1, pageSize: 10, total: 0 }),
        ce = n({ endpointName: "", statuses: [] }),
        { updateHistory: _e } = U(),
        fe = a([]),
        ye = a(!1),
        Ee = a(!0);
      async function ve(e = 1, t = me.pageSize) {
        (ye.value = !0),
          (me.current = e),
          (me.pageSize = t),
          await he(),
          (ye.value = !1);
      }
      async function he() {
        (ue.value = !0), await w();
        const e = {
          endpointName: ce.endpointName,
          status: ce.statuses.at(0),
          pageNum: me.current,
          pageSize: me.pageSize,
        };
        try {
          const t = await A(e);
          (me.total = t.total),
            (fe.value = t.data.map((e) => {
              const t = { ...e };
              return (
                "md.edge_device" === t.resourceType
                  ? (t.resourceType = "edge_device")
                  : "md.on_premise_device" === t.resourceType
                  ? (t.resourceType = "on_premise_device")
                  : "md.fedml_cloud_device" === t.resourceType &&
                    (t.resourceType = "fedml_cloud_device"),
                t
              );
            })),
            _e(ce);
        } catch (t) {
        } finally {
          ue.value = !1;
        }
      }
      function be(e, t, a, n) {
        return {
          name: _.DEPLOY_ENDPOINT,
          query: {
            EndpointId: e,
            model_name: t,
            model_id: a,
            model_version: n,
          },
        };
      }
      const ge = n({
        oldEndpoint: null,
        newEndpointId: null,
        newEndpointList: [],
        visible: !1,
        confirmLoading: !1,
        handleOK() {
          (ge.confirmLoading = !0),
            o("/api/v1/endpoint/switch")
              .post({
                body: {
                  oldEndpointId: ge.oldEndpoint.id,
                  newEndpointId: ge.newEndpointId,
                },
              })
              .then(() => {
                i.success("Exchange meta info successfully!"), ve();
              })
              .finally(() => {
                (ge.confirmLoading = !1), (ge.visible = !1);
              });
        },
      });
      const Ne = k(() => ve(1), 200);
      return (
        s(async () => {
          await he();
        }),
        (e, t) => {
          const a = G,
            n = x,
            s = j,
            w = l("router-link"),
            k = I,
            A = C,
            U = L,
            F = H,
            _e = $,
            we = D,
            ke = Y,
            xe = G,
            je = W,
            Ie = O;
          return (
            d(),
            r(
              c(R),
              {
                "auto-title": "",
                "fixed-height": "",
                "content-full-height": "",
              },
              {
                default: p(() => [
                  u("div", K, [
                    u("nav", J, [
                      u("div", Q, [
                        X,
                        m(
                          a,
                          {
                            value: c(ce).statuses,
                            "onUpdate:value":
                              t[0] || (t[0] = (e) => (c(ce).statuses = e)),
                            class: "w-60 mr-2",
                            placeholder: "Search by status",
                            "allow-clear": "",
                            mode: "multiple",
                            "show-search": "",
                            options: c(re),
                            onChange: t[1] || (t[1] = () => ve(1)),
                            onSelect:
                              t[2] || (t[2] = (e) => (c(ce).statuses = [e])),
                            onClear:
                              t[3] ||
                              (t[3] = () => (c(ce).statuses = []) && ve(1)),
                          },
                          {
                            tagRender: p((e) => [
                              m(M, { status: e.value }, null, 8, ["status"]),
                            ]),
                            option: p((e) => [
                              m(M, { status: e.value }, null, 8, ["status"]),
                            ]),
                            _: 1,
                          },
                          8,
                          ["value", "options"]
                        ),
                        m(
                          n,
                          {
                            value: c(ce).endpointName,
                            "onUpdate:value":
                              t[4] || (t[4] = (e) => (c(ce).endpointName = e)),
                            class: "w-60 mr-2",
                            placeholder: "Search by name",
                            loading: c(ue),
                            onChange: c(Ne),
                            onSearch: t[5] || (t[5] = (e) => ve(1)),
                          },
                          null,
                          8,
                          ["value", "loading", "onChange"]
                        ),
                      ]),
                      u("div", Z, [
                        "lavita-ai" === c(de).userInfo?.account
                          ? (d(),
                            r(
                              w,
                              {
                                key: 0,
                                to: {
                                  name: ("routerNames" in e
                                    ? e.routerNames
                                    : c(_)
                                  ).DEPLOY_VOTING_LOGS,
                                },
                              },
                              {
                                default: p(() => [
                                  m(s, null, {
                                    default: p(() => [f(" Vote Logs ")]),
                                    _: 1,
                                  }),
                                ]),
                                _: 1,
                              },
                              8,
                              ["to"]
                            ))
                          : y("", !0),
                        m(
                          w,
                          {
                            to: {
                              name: ("routerNames" in e ? e.routerNames : c(_))
                                .DEPLOY_CREATE_ENDPOINTS,
                              query: {
                                feature_entrypoint:
                                  c(z).FEATURE_ENTRYPOINT_RUN_DEPLOY,
                              },
                            },
                          },
                          {
                            default: p(() => [
                              m(
                                s,
                                { type: "primary" },
                                {
                                  default: p(() => [
                                    m(k, { icon: "i-icon-park-outline:add" }),
                                    f("Create Endpoint "),
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
                        m(A, null, {
                          overlay: p(() => [
                            u("div", ee, [
                              u(
                                "a",
                                {
                                  class: "p2 block w-full hover:bg-primary/10",
                                  href: `${
                                    "APP_DOC_BASE_URL" in e
                                      ? e.APP_DOC_BASE_URL
                                      : c(E)
                                  }deploy/deploy_local`,
                                  target: "_blank",
                                },
                                [
                                  f(" Deploy to Local "),
                                  m(k, { icon: "i-tabler:external-link" }),
                                ],
                                8,
                                te
                              ),
                              u(
                                "a",
                                {
                                  class: "p2 block w-full hover:bg-primary/10",
                                  href: `${
                                    "APP_DOC_BASE_URL" in e
                                      ? e.APP_DOC_BASE_URL
                                      : c(E)
                                  }deploy/deploy_cloud`,
                                  target: "_blank",
                                },
                                [
                                  f(" Deploy to Cloud "),
                                  m(k, { icon: "i-tabler:external-link" }),
                                ],
                                8,
                                ae
                              ),
                              u(
                                "a",
                                {
                                  class: "p2 block w-full hover:bg-primary/10",
                                  href: `${
                                    "APP_DOC_BASE_URL" in e
                                      ? e.APP_DOC_BASE_URL
                                      : c(E)
                                  }deploy/deploy_on_premise`,
                                  target: "_blank",
                                },
                                [
                                  f(" Deploy to On-Premise "),
                                  m(k, { icon: "i-tabler:external-link" }),
                                ],
                                8,
                                ne
                              ),
                            ]),
                          ]),
                          default: p(() => [
                            m(s, null, {
                              default: p(() => [f("Deploy with CLI")]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        }),
                      ]),
                    ]),
                    m(
                      F,
                      {
                        "data-source": c(fe),
                        columns: c(pe),
                        sticky: "",
                        loading: c(ue),
                        scroll: { x: 1140 },
                        "row-key": "id",
                        pagination: c(me),
                        onResizeColumn:
                          t[6] || (t[6] = (e, t) => (t.width = e)),
                        onChange:
                          t[7] || (t[7] = (e) => ve(e.current, e.pageSize)),
                      },
                      {
                        bodyCell: p(({ column: t, record: a }) => [
                          "endpointName" === t.key
                            ? (d(),
                              r(
                                q,
                                v(
                                  { key: 0 },
                                  {
                                    record: a,
                                    field: "endpointName",
                                    rules: {
                                      endpointName: c(h)({
                                        noSpace: !0,
                                        noAt: !0,
                                      }),
                                    },
                                    api: (e) =>
                                      c(o)("/api/v1/endpoint/rename")
                                        .put({
                                          body: {
                                            id: e.id,
                                            newName: e.endpointName,
                                          },
                                        })
                                        .then((e) => {
                                          if ("SUCCESS" !== e?.code)
                                            throw (
                                              (c(i).error(e.message),
                                              new Error("rename error"))
                                            );
                                        }),
                                    disabled: ![
                                      "OFFLIN",
                                      "FAILED",
                                      "TERMINATED",
                                    ].includes(a.status),
                                  },
                                  {
                                    readonly: !c(V).has(
                                      "deploy.endpoint.renaming"
                                    ),
                                    onOk: he,
                                  }
                                ),
                                {
                                  default: p(() => [
                                    m(
                                      U,
                                      { title: a.endpointName },
                                      {
                                        default: p(() => [
                                          m(
                                            w,
                                            {
                                              class: "text-truncate",
                                              to: be(
                                                a.id,
                                                a.modelName,
                                                a.modelId,
                                                a.modelVersion
                                              ),
                                            },
                                            {
                                              default: p(() => [
                                                f(b(a.endpointName), 1),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["to"]
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["title"]
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1040,
                                ["readonly"]
                              ))
                            : y("", !0),
                          "modelName" === t.key
                            ? (d(),
                              r(
                                w,
                                {
                                  key: 1,
                                  to: {
                                    name: ("routerNames" in e
                                      ? e.routerNames
                                      : c(_)
                                    ).MODELS_MODEL_DETAIL,
                                    params: {
                                      id: a.modelId,
                                      version: a.modelVersion,
                                    },
                                  },
                                },
                                {
                                  default: p(() => [f(b(a.modelName), 1)]),
                                  _: 2,
                                },
                                1032,
                                ["to"]
                              ))
                            : "status" === t.key
                            ? (d(),
                              r(M, { key: 2, status: a.status }, null, 8, [
                                "status",
                              ]))
                            : "amount" === t.key
                            ? (d(),
                              r(
                                c(B),
                                {
                                  key: 3,
                                  "use-easing": !1,
                                  "start-val": 0,
                                  separator: ",",
                                  "end-val": a.amount,
                                  decimals: 6,
                                },
                                null,
                                8,
                                ["end-val"]
                              ))
                            : "action" === t.key
                            ? (d(),
                              r(
                                c(T),
                                { key: 4, size: "large" },
                                {
                                  default: p(() => [
                                    m(
                                      w,
                                      {
                                        to: be(
                                          a.id,
                                          a.modelName,
                                          a.modelId,
                                          a.modelVersion
                                        ),
                                      },
                                      {
                                        default: p(() => [
                                          m(
                                            s,
                                            { size: "small" },
                                            {
                                              default: p(() => [f(" Detail ")]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                    m(
                                      w,
                                      {
                                        to: {
                                          name: ("routerNames" in e
                                            ? e.routerNames
                                            : c(_)
                                          ).DEPLOY_EIDT_ENDPOINTS,
                                          query: { endpointId: a.id },
                                        },
                                      },
                                      {
                                        default: p(() => [
                                          m(
                                            s,
                                            {
                                              disabled: [
                                                "FAILED",
                                                "TERMINATED",
                                              ].includes(a.status),
                                              size: "small",
                                            },
                                            {
                                              default: p(() => [f(" Edit ")]),
                                              _: 2,
                                            },
                                            1032,
                                            ["disabled"]
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                    c(Ee)
                                      ? (d(),
                                        r(
                                          s,
                                          {
                                            key: 0,
                                            type: "primary",
                                            size: "small",
                                            onClick: (e) =>
                                              (function (e) {
                                                (ge.oldEndpoint = e),
                                                  (ge.visible = !0),
                                                  o(
                                                    "/api/v1/endpoint/switchList"
                                                  )
                                                    .get({
                                                      query: {
                                                        endpointId: e.id,
                                                      },
                                                    })
                                                    .then((e) => {
                                                      (ge.newEndpointList =
                                                        e.data),
                                                        (ge.newEndpointId =
                                                          null);
                                                    });
                                              })(a),
                                          },
                                          {
                                            default: p(() => [f(" Switch ")]),
                                            _: 2,
                                          },
                                          1032,
                                          ["onClick"]
                                        ))
                                      : y("", !0),
                                    m(
                                      c(P),
                                      {
                                        size: "small",
                                        disabled: [
                                          "OFFLINE",
                                          "FAILED",
                                          "PAUSED",
                                          "TERMINATED",
                                        ].includes(a.status),
                                        onConfirm: (e) => {
                                          return (
                                            (t = a.id),
                                            (ye.value = !0),
                                            o("/api/v1/endpoint/terminate")
                                              .put({ body: { id: t } })
                                              .finally(() => {
                                                (ye.value = !1), he();
                                              })
                                          );
                                          var t;
                                        },
                                      },
                                      {
                                        title: p(() => [oe]),
                                        default: p(() => [f(" Terminate ")]),
                                        _: 2,
                                      },
                                      1032,
                                      ["disabled", "onConfirm"]
                                    ),
                                    m(
                                      c(P),
                                      {
                                        size: "small",
                                        type: "primary",
                                        title:
                                          "Are you sure you want to delete this inference Endpoint?",
                                        onConfirm: (e) => {
                                          return (
                                            (t = a.id),
                                            (ye.value = !0),
                                            S({ id: t })
                                              .then((e) => {
                                                if (e && "SUCCESS" !== e.code) {
                                                  const t =
                                                    "INTERNAL_ERROR" === e.code
                                                      ? N(
                                                          "sys.api.apiRequestFailed"
                                                        )
                                                      : e.message ||
                                                        "Error on deleting endpoint.";
                                                  i.error(t);
                                                } else
                                                  i.success(
                                                    "Endpoint deleted successfully!"
                                                  );
                                              })
                                              .finally(() => {
                                                (ye.value = !1), he();
                                              })
                                          );
                                          var t;
                                        },
                                      },
                                      {
                                        default: p(() => [f(" Delete ")]),
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
                            : y("", !0),
                        ]),
                        _: 1,
                      },
                      8,
                      ["data-source", "columns", "loading", "pagination"]
                    ),
                  ]),
                  c(Ee)
                    ? (d(),
                      r(
                        Ie,
                        {
                          key: 0,
                          open: c(ge).visible,
                          "onUpdate:open":
                            t[10] || (t[10] = (e) => (c(ge).visible = e)),
                          title: "Switch Endpoints",
                          "ok-button-props": {
                            disabled:
                              !c(ge).oldEndpoint?.id || !c(ge).newEndpointId,
                          },
                          "confirm-loading": c(ge).confirmLoading,
                          onOk: c(ge).handleOK,
                        },
                        {
                          default: p(() => [
                            u("div", ie, [
                              m(
                                _e,
                                { type: "info", class: "mb-8" },
                                { message: p(() => [se, le]), _: 1 }
                              ),
                              c(ge).oldEndpoint &&
                              c(ge).oldEndpoint.endpointName
                                ? (d(),
                                  r(
                                    je,
                                    g(
                                      v(
                                        { key: 0 },
                                        {
                                          labelCol: { span: 5 },
                                          wrapperCol: { span: 19 },
                                        }
                                      )
                                    ),
                                    {
                                      default: p(() => [
                                        m(
                                          ke,
                                          { label: "Old Endpoint: " },
                                          {
                                            default: p(() => [
                                              m(
                                                we,
                                                {
                                                  value:
                                                    c(ge).oldEndpoint
                                                      .endpointName,
                                                  "onUpdate:value":
                                                    t[8] ||
                                                    (t[8] = (e) =>
                                                      (c(
                                                        ge
                                                      ).oldEndpoint.endpointName =
                                                        e)),
                                                  disabled: "",
                                                },
                                                null,
                                                8,
                                                ["value"]
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                        m(
                                          ke,
                                          { label: "New Endpoint: " },
                                          {
                                            default: p(() => [
                                              m(
                                                xe,
                                                {
                                                  value: c(ge).newEndpointId,
                                                  "onUpdate:value":
                                                    t[9] ||
                                                    (t[9] = (e) =>
                                                      (c(ge).newEndpointId =
                                                        e)),
                                                  "default-active-first-option":
                                                    "",
                                                  options: c(
                                                    ge
                                                  ).newEndpointList.map(
                                                    ({
                                                      id: e,
                                                      endpointName: t,
                                                    }) => ({
                                                      value: e,
                                                      label: t,
                                                    })
                                                  ),
                                                },
                                                null,
                                                8,
                                                ["value", "options"]
                                              ),
                                            ]),
                                            _: 1,
                                          }
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    16
                                  ))
                                : y("", !0),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["open", "ok-button-props", "confirm-loading", "onOk"]
                      ))
                    : y("", !0),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  });
export { de as default };

import {
  as as e,
  bC as a,
  bD as t,
  r as i,
  aR as s,
  au as o,
  bo as l,
  ax as n,
  bl as r,
  aw as d,
  aA as u,
  a as m,
  bO as p,
  bP as c,
  at as _,
  aL as f,
  bw as E,
  by as y,
  d0 as v,
  aB as h,
  av as b,
  cM as g,
  aD as x,
  dJ as D,
  aF as j,
  bW as k,
  d1 as C,
  bp as N,
  az as M,
} from "./index-DPRREYlk.js";
import { _ as T } from "./PopConfirmButton.vue_vue_type_script_lang-BxbUu1Is.js";
import { A as I } from "./ActionsMenu-DOu7q-vd.js";
import { g as O, d as R } from "./model-card-D4LTPZKW.js";
import { P as w } from "./index-Dgmkw5o7.js";
import { E as V } from "./entrypointEnum-C42SeRoP.js";
import { u as S } from "./useHistoryUpdate-CmNRxW5V.js";
import { C as z } from "./index-DGJYrvBD.js";
import { _ as L } from "./index-Cl2HaiV4.js";
import "./BasicButton.vue_vue_type_script_setup_true_lang-EzE3DJdj.js";
import "./useAttrs-CpoV-7Xq.js";
import "./tsxHelper-DjrCDYtL.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./Checkbox-KylR2T3k.js";
import "./index-jlJCtu5U.js";
import "./index-CacitUCz.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./index-BPauqaGF.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./zh_CN-CAyhejr6.js";
import "./index-Ty6iIrKu.js";
import "./debounce-CUtJ7ZQO.js";
import "./index-yjwfeS3_.js";
import "./RadioButton-BTaousOD.js";
import "./scrollTo-Dpgtz1Pq.js";
const P = { class: "p4" },
  U = e({
    __name: "DialogPublishModelSimple",
    props: { visible: { type: Boolean }, visibleModifiers: {} },
    emits: a(["publish"], ["update:visible"]),
    setup(e, { emit: a }) {
      const _ = a,
        f = t(e, "visible"),
        E = i(!0);
      function y() {
        _("publish", E.value);
      }
      return (
        s(f, () => {
          E.value = !0;
        }),
        (e, a) => {
          const t = z,
            i = c;
          return (
            o(),
            l(
              i,
              {
                open: f.value,
                "onUpdate:open": a[1] || (a[1] = (e) => (f.value = e)),
                title: "Publish your model",
                "destroy-on-close": "",
                onOk: y,
              },
              {
                default: n(() => [
                  r("div", P, [
                    d(
                      t,
                      {
                        checked: m(E),
                        "onUpdate:checked":
                          a[0] || (a[0] = (e) => (p(E) ? (E.value = e) : null)),
                        class: "select-none",
                      },
                      {
                        default: n(() => [
                          u(
                            " By checking this checkbox, your model source code will be open to public "
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["checked"]
                    ),
                  ]),
                ]),
                _: 1,
              },
              8,
              ["open"]
            )
          );
        }
      );
    },
  }),
  W = { class: "p-4 app-content" },
  A = { class: "flex mb-4 gap-2" },
  B = { class: "flex gap-1" },
  Y = { class: "ml-auto flex items-center gap-2" },
  q = ["href"],
  F = { key: 1 },
  H = { key: 2 },
  G = { key: 3 };
var J = (function (e) {
  return (
    (e[(e.NOT_REVIEWED = 1)] = "NOT_REVIEWED"),
    (e[(e.UNDER_REVIEW = 2)] = "UNDER_REVIEW"),
    (e[(e.REVIEW_COMPLETED = 3)] = "REVIEW_COMPLETED"),
    e
  );
})(J || {});
const Q = e({
  __name: "index",
  setup(e) {
    const a = i(!1),
      t = i(!1),
      s = _({ pageSize: 10, pageNum: 1, total: 0 }),
      c = _({ modelName: "" }),
      { updateHistory: z } = S(),
      P = i([
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
          resizable: !0,
          ellipsis: !0,
          width: 60,
          fixed: "left",
        },
        {
          title: "Name",
          dataIndex: "modelName",
          key: "modelName",
          resizable: !0,
          ellipsis: !0,
          width: 150,
          fixed: "left",
        },
        {
          title: "Latest Model Version",
          dataIndex: "latestModelVersion",
          key: "latestModelVersion",
          resizable: !0,
          ellipsis: !0,
          width: 150,
        },
        {
          title: "Created",
          dataIndex: "owner",
          key: "owner",
          resizable: !0,
          ellipsis: !0,
          width: 100,
        },
        {
          title: "Create Time",
          dataIndex: "createTime",
          ellipsis: !0,
          resizable: !0,
          key: "createTime",
          width: 120,
        },
        {
          title: "Update Time",
          dataIndex: "updateTime",
          ellipsis: !0,
          resizable: !0,
          key: "updateTime",
          width: 120,
        },
        { title: "Actions", key: "action", fixed: "right", width: 180 },
      ]),
      Q = i([]);
    async function X() {
      t.value = !0;
      try {
        const e = await O({
          modelName: c.modelName,
          pageNum: s.pageNum,
          pageSize: s.pageSize,
        });
        (s.total = e.total), (Q.value = e.data), z(c);
      } catch (e) {
      } finally {
        t.value = !1;
      }
    }
    function $(e, a) {
      return { name: y.MODELS_MODEL_DETAIL, params: { id: e, version: a } };
    }
    function K(e) {
      return {
        name: y.DEPLOY_CREATE_ENDPOINTS,
        query: {
          model_id: e.id,
          model_version: e.latestModelVersion,
          feature_entrypoint: V.FEATURE_ENTRYPOINT_RUN_DEPLOY,
        },
      };
    }
    function Z(e = 1, a = s.pageSize) {
      (s.pageSize = a), (s.pageNum = e), X();
    }
    const ee = i();
    function ae(e) {
      a.value = !1;
      const { version: i, modelId: s } = ee.value;
      (t.value = !0),
        D("/api/v1/model/publishModel")
          .post({ body: { modelId: s, modelVersion: i, openSource: e } })
          .then((e) => {
            "SUCCESS" === e.code
              ? j.success(
                  "Thanks for your update. Your update is under review now."
                )
              : j.warning(e.message);
          })
          .catch((e) => {
            j.error(e.message);
          })
          .finally(() => {
            (t.value = !1), Z(1);
          });
    }
    function te(e) {
      switch (e) {
        case J.NOT_REVIEWED:
        case J.REVIEW_COMPLETED:
          return "Publish";
        case J.UNDER_REVIEW:
          return "Under Review";
        default:
          return "Publish";
      }
    }
    function ie(e) {
      switch (e) {
        case J.NOT_REVIEWED:
        case J.REVIEW_COMPLETED:
          return !1;
        case J.UNDER_REVIEW:
          return !0;
        default:
          return !1;
      }
    }
    const se = k(() => Z(1), 1e3);
    return (
      f(async () => {
        X();
      }),
      (e, i) => {
        const _ = C,
          f = N,
          D = M,
          j = E("RouterLink"),
          k = M,
          O = T,
          V = L;
        return (
          o(),
          l(
            m(w),
            { "auto-title": "", "fixed-height": "", "content-full-height": "" },
            {
              default: n(() => [
                r("div", W, [
                  r("nav", A, [
                    r("div", B, [
                      d(
                        _,
                        {
                          value: m(c).modelName,
                          "onUpdate:value":
                            i[0] || (i[0] = (e) => (m(c).modelName = e)),
                          class: "w-60 mr-2",
                          placeholder: "Search by name",
                          loading: m(t),
                          onChange: m(se),
                          onSearch: i[1] || (i[1] = (e) => Z(1)),
                        },
                        null,
                        8,
                        ["value", "loading", "onChange"]
                      ),
                    ]),
                    r("div", Y, [
                      d(
                        j,
                        {
                          to: {
                            name: ("routerNames" in e ? e.routerNames : m(y))
                              .MODELS_MODEL,
                            query: { isCreate: "true" },
                          },
                        },
                        {
                          default: n(() => [
                            d(
                              D,
                              { type: "primary" },
                              {
                                default: n(() => [
                                  d(f, { icon: "i-icon-park-outline:add" }),
                                  u("Create Model "),
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
                      r(
                        "a",
                        {
                          href: `${
                            "APP_DOC_BASE_URL" in e ? e.APP_DOC_BASE_URL : m(v)
                          }deploy/create_model`,
                          target: "_blank",
                        },
                        [
                          d(D, null, {
                            default: n(() => [
                              u(" Create Model with CLI "),
                              d(f, { icon: "i-tabler:external-link" }),
                            ]),
                            _: 1,
                          }),
                        ],
                        8,
                        q
                      ),
                    ]),
                  ]),
                  d(
                    V,
                    {
                      columns: m(P),
                      "data-source": m(Q),
                      loading: m(t),
                      scroll: { y: 600, x: 1080 },
                      pagination: m(s),
                      onResizeColumn: i[2] || (i[2] = (e, a) => (a.width = e)),
                      onChange:
                        i[3] ||
                        (i[3] = ({ pageSize: e, current: a }) => Z(a, e)),
                    },
                    {
                      bodyCell: n(({ column: e, record: i }) => [
                        "modelName" === e.key
                          ? (o(),
                            l(
                              j,
                              { key: 0, to: $(i.id, i.latestModelVersion) },
                              {
                                default: n(() => [u(h(i.modelName), 1)]),
                                _: 2,
                              },
                              1032,
                              ["to"]
                            ))
                          : "prefixModelVersion" === e.key
                          ? (o(), b("span", F, h(i.prefixModelVersion), 1))
                          : "createTime" === e.key
                          ? (o(), b("span", H, h(m(g)(i.createTime)), 1))
                          : "updateTime" === e.key
                          ? (o(), b("span", G, h(m(g)(i.updateTime)), 1))
                          : "action" === e.key
                          ? (o(),
                            l(
                              m(I),
                              { key: 4 },
                              {
                                default: n(() => {
                                  return [
                                    d(
                                      j,
                                      { to: $(i.id, i.latestModelVersion) },
                                      {
                                        default: n(() => [
                                          d(
                                            k,
                                            { size: "small" },
                                            {
                                              default: n(() => [u(" Detail ")]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                    d(
                                      j,
                                      {
                                        to:
                                          ((e = i.id),
                                          (s = i.latestModelVersion),
                                          {
                                            name: y.MODELS_MODEL_EDIT,
                                            query: {
                                              isCreate: "false",
                                              model_id: e,
                                              model_version: s,
                                            },
                                          }),
                                      },
                                      {
                                        default: n(() => [
                                          d(
                                            k,
                                            { size: "small" },
                                            {
                                              default: n(() => [u(" Edit ")]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                    d(
                                      j,
                                      { to: K(i) },
                                      {
                                        default: n(() => [
                                          d(
                                            k,
                                            { size: "small", type: "primary" },
                                            {
                                              default: n(() => [u(" Deploy ")]),
                                              _: 1,
                                            }
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["to"]
                                    ),
                                    d(
                                      k,
                                      {
                                        type: "primary",
                                        size: "small",
                                        disabled: ie(i.modelStatus),
                                        onClick: (e) =>
                                          (function (e, t) {
                                            (ee.value = {
                                              modelId: e,
                                              version: t,
                                            }),
                                              (a.value = !0);
                                          })(i.id, i.latestModelVersion),
                                      },
                                      {
                                        default: n(() => [
                                          u(h(te(i.modelStatus)), 1),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["disabled", "onClick"]
                                    ),
                                    d(
                                      O,
                                      {
                                        title:
                                          "Are you sure you want to delete the model?",
                                        class: "px-0",
                                        size: "small",
                                        onConfirm: (e) =>
                                          (async function (e) {
                                            (t.value = !0),
                                              R({ id: e }).finally(() => {
                                                (t.value = !1), X();
                                              });
                                          })(i.id),
                                      },
                                      {
                                        default: n(() => [u(" Delete ")]),
                                        _: 2,
                                      },
                                      1032,
                                      ["onConfirm"]
                                    ),
                                  ];
                                  var e, s;
                                }),
                                _: 2,
                              },
                              1024
                            ))
                          : x("", !0),
                      ]),
                      _: 1,
                    },
                    8,
                    ["columns", "data-source", "loading", "pagination"]
                  ),
                ]),
                d(
                  U,
                  {
                    visible: m(a),
                    "onUpdate:visible":
                      i[4] || (i[4] = (e) => (p(a) ? (a.value = e) : null)),
                    onPublish: ae,
                  },
                  null,
                  8,
                  ["visible"]
                ),
              ]),
              _: 1,
            }
          )
        );
      }
    );
  },
});
export { Q as default };

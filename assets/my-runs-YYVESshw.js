import {
  as as e,
  bz as a,
  d3 as t,
  bR as s,
  r as i,
  at as n,
  dl as l,
  aL as o,
  bw as r,
  au as u,
  bo as d,
  ax as p,
  bl as c,
  aw as m,
  a as y,
  bO as b,
  aA as h,
  aD as f,
  aB as v,
  av as k,
  aC as j,
  bN as g,
  dm as T,
  cM as x,
  by as S,
  bG as _,
  bh as C,
  bs as R,
  d1 as w,
  bp as N,
  az as z,
  cR as E,
  cN as I,
} from "./index-DPRREYlk.js";
import { P as L } from "./index-BfMdU48n.js";
import { C as A } from "./index-D4noaftF.js";
import { P as q } from "./index-Dgmkw5o7.js";
import { E as O } from "./entrypointEnum-C42SeRoP.js";
import { b as D } from "./breadcrumbData-BfaWzqou.js";
import { S as P } from "./index-BPauqaGF.js";
import { _ as B } from "./index-Cl2HaiV4.js";
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
const J = { class: "app-content p4" },
  F = { class: "mb-4 gap2 flex items-center" },
  U = c("b", null, "Status:", -1),
  M = { key: 0 },
  G = { key: 1 },
  W = { key: 2 },
  Q = { key: 3 },
  Y = { key: 4 },
  H = { key: 5 },
  K = { key: 6 },
  V = { key: 7 },
  X = { key: 8 },
  $ = { key: 9 },
  Z = { key: 10 },
  ee = { key: 0 },
  ae = ["title"],
  te = { key: 7, class: "flex gap1" },
  se = e({
    __name: "my-runs",
    setup(e) {
      a.extend(t);
      const { currentRoute: se } = s(),
        ie = i(se.value.query.projectName),
        ne = D(),
        le = i([]),
        oe = S,
        re = n({ current: 1, pageSize: 10, total: 0 }),
        ue = i(""),
        de = i(null),
        pe = i([
          { label: "ALL", value: null },
          { label: "Created", value: 0 },
          { label: "On-Queue", value: 1 },
          { label: "Starting", value: 2 },
          { label: "Started - Active", value: 3 },
          { label: "Stopping", value: 4 },
          { label: "Stopped", value: 5 },
          { label: "Started - Failed", value: 6 },
          { label: "Done", value: 7 },
          { label: "Launched and abandoned", value: 8 },
          { label: "Waiting for Confirmation", value: 9 },
          { label: "Done with errors", value: 10 },
          { label: "Blocked", value: 11 },
          { label: "Pre-queue", value: 12 },
          { label: "Invalid", value: 13 },
          { label: "Cluster-queue", value: 14 },
          { label: "Provisioning", value: 15 },
        ]),
        ce = i([
          {
            title: "ID",
            dataIndex: "id",
            key: "id",
            fixed: "left",
            width: 100,
            resizable: !0,
            ellipsis: !0,
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            fixed: "left",
            width: 150,
            resizable: !0,
            ellipsis: !0,
          },
          {
            title: "Cost",
            dataIndex: "cost",
            ellipsis: !0,
            resizable: !0,
            width: 80,
            key: "cost",
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
            resizable: !0,
            width: 130,
            ellipsis: !0,
          },
          {
            title: "Spend Time",
            dataIndex: "spendTime",
            key: "spendTime",
            resizable: !0,
            align: "right",
            width: 150,
            ellipsis: !0,
          },
          {
            title: "Machine(s)",
            dataIndex: "JobsMachine",
            ellipsis: !0,
            resizable: !0,
            width: 160,
            key: "JobsMachine",
          },
          {
            title: "Create Time",
            dataIndex: "createTime",
            ellipsis: !0,
            resizable: !0,
            width: 250,
            key: "createTime",
          },
          { title: "Action", key: "action", fixed: "right", width: 220 },
        ]),
        me = i(!1);
      function ye(e = 1, a = re.pageSize) {
        (re.current = e), (re.pageSize = a), he();
      }
      async function be() {
        await he();
      }
      async function he() {
        me.value = !0;
        try {
          const e = await _("/job/queryRunList")
            .get({
              query: {
                accountId: Number(C().getUserInfo.id),
                pageSize: re.pageSize,
                pageNum: re.current,
                name: ue.value,
                status: de.value,
              },
            })
            .then((e) => e.data);
          ne.setProjectName(ie.value),
            (re.total = e?.totalSize || 0),
            (le.value = e?.content || []);
        } catch (e) {
        } finally {
          me.value = !1;
        }
      }
      l(() => {
        le.value.forEach((e) => {
          if ("Started - Active" === e.status) {
            const t = a().utc().diff(a.utc(e?.startTime));
            e.spendTime = t;
          }
        });
      }, 1e3);
      const fe = i(!1);
      return (
        o(async () => {
          await he();
        }),
        (e, a) => {
          const t = P,
            s = w,
            i = N,
            n = z,
            l = r("router-link"),
            o = r("RouterLink"),
            S = E,
            C = B;
          return (
            u(),
            d(
              y(q),
              {
                "auto-title": "",
                "fixed-height": "",
                "content-full-height": "",
              },
              {
                default: p(() => [
                  c("div", J, [
                    c("div", F, [
                      U,
                      m(
                        t,
                        {
                          value: y(de),
                          "onUpdate:value":
                            a[0] ||
                            (a[0] = (e) => (b(de) ? (de.value = e) : null)),
                          class: "w-50",
                          placeholder: "ALL",
                          options: y(pe),
                          onChange: be,
                        },
                        null,
                        8,
                        ["value", "options"]
                      ),
                      m(
                        s,
                        {
                          value: y(ue),
                          "onUpdate:value":
                            a[1] ||
                            (a[1] = (e) => (b(ue) ? (ue.value = e) : null)),
                          placeholder: "Search by name",
                          class: "w-50",
                          loading: y(me),
                          onSearch: a[2] || (a[2] = (e) => ye(1)),
                          onInput: a[3] || (a[3] = (e) => ye(1)),
                        },
                        null,
                        8,
                        ["value", "loading"]
                      ),
                      y(fe)
                        ? (u(),
                          d(
                            l,
                            {
                              key: 0,
                              class: "ml-auto",
                              to: {
                                name: y(oe).TRAIN_PROJECT_CREATE_RUN,
                                query: {
                                  isFrom: "jobList",
                                  feature_entrypoint:
                                    y(O).FEATURE_ENTRYPOINT_RUN_TRAIN,
                                },
                              },
                            },
                            {
                              default: p(() => [
                                m(n, null, {
                                  default: p(() => [
                                    m(i, { icon: "i-icon-park-outline:add" }),
                                    h("Create Run"),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            },
                            8,
                            ["to"]
                          ))
                        : f("", !0),
                    ]),
                    m(
                      C,
                      {
                        columns: y(ce),
                        "data-source": y(le),
                        pagination: y(re),
                        loading: y(me),
                        scroll: { x: 798, y: 680 },
                        onResizeColumn:
                          a[4] || (a[4] = (e, a) => (a.width = e)),
                        onChange:
                          a[5] ||
                          (a[5] = ({ pageSize: e, current: a }) => ye(a, e)),
                      },
                      {
                        bodyCell: p(({ column: e, record: a }) => {
                          return [
                            "name" === e.key
                              ? (u(),
                                d(
                                  o,
                                  {
                                    key: 0,
                                    to: {
                                      name: y(oe).TRAIN_PROJECT_RUN,
                                      query: { runName: a.name, runId: a.id },
                                    },
                                  },
                                  { default: p(() => [h(v(a.name), 1)]), _: 2 },
                                  1032,
                                  ["to"]
                                ))
                              : "cost" === e.key
                              ? (u(),
                                d(
                                  y(A),
                                  {
                                    key: 1,
                                    class: "text-primary",
                                    decimals: 2,
                                    prefix: "$",
                                    "use-easing": !1,
                                    "end-val": a.cost,
                                  },
                                  null,
                                  8,
                                  ["end-val"]
                                ))
                              : "status" === e.key
                              ? (u(),
                                d(
                                  S,
                                  { key: 2, placement: "bottomLeft" },
                                  {
                                    title: p(() => [
                                      "Started - Active" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            M,
                                            "This run is currently running"
                                          ))
                                        : "Started - Failed" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            G,
                                            "This run started and then failed"
                                          ))
                                        : "Done" == a.status
                                        ? (u(),
                                          k("span", W, "This run completed"))
                                        : "Done with errors" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            Q,
                                            "This run completed but has errors"
                                          ))
                                        : "Launched and abandoned" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            Y,
                                            "This run was fedml launched, but was never started, so we expired it."
                                          ))
                                        : "Waiting for Confirmation" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            H,
                                            "This run has already been created by the user, but it is still awaiting user confirmation before proceeding."
                                          ))
                                        : "Launched not started" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            K,
                                            "This run was fedml launched but has not yet been Started."
                                          ))
                                        : "On-Queue" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            V,
                                            "This run is on queue and will start as soon as a machine that meets the yaml criteria is available."
                                          ))
                                        : "Blocked" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            X,
                                            "Our community of machines cannot meet the criteria in your yaml"
                                          ))
                                        : "Pre-queue" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            $,
                                            "Machines are not available currently and user hasn't yet selected to go on-queue"
                                          ))
                                        : "Stopped" == a.status
                                        ? (u(),
                                          k(
                                            "span",
                                            Z,
                                            "You manually stopped this run"
                                          ))
                                        : f("", !0),
                                    ]),
                                    default: p(() => [h(" " + v(a.status), 1)]),
                                    _: 2,
                                  },
                                  1024
                                ))
                              : "JobsMachine" === e.key
                              ? (u(),
                                k(
                                  j,
                                  { key: 3 },
                                  [
                                    0 == a.jobGpuNames.length
                                      ? (u(), k("div", ee, " — "))
                                      : f("", !0),
                                    c(
                                      "div",
                                      { title: a.jobGpuNames.toString() },
                                      [
                                        (u(!0),
                                        k(
                                          j,
                                          null,
                                          g(
                                            a.jobGpuNames,
                                            (e) => (
                                              u(), k("div", { key: e }, v(e), 1)
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      8,
                                      ae
                                    ),
                                  ],
                                  64
                                ))
                              : "Jobs" === e.key
                              ? (u(), k(j, { key: 4 }, [h(v(a.Jobs), 1)], 64))
                              : "spendTime" === e.key
                              ? (u(),
                                k(
                                  j,
                                  { key: 5 },
                                  [h(v(y(T)(a.spendTime)), 1)],
                                  64
                                ))
                              : "createTime" === e.key
                              ? (u(),
                                k(
                                  j,
                                  { key: 6 },
                                  [h(v(y(x)(a.createTime)), 1)],
                                  64
                                ))
                              : "action" === e.key
                              ? (u(),
                                k("div", te, [
                                  m(
                                    y(L),
                                    {
                                      title:
                                        "Are you sure you want to delete the Job?",
                                      size: "small",
                                      onConfirm: (e) =>
                                        (async function (e) {
                                          return _("/job")
                                            .delete({ query: { id: e.id } })
                                            .then(({ message: e, code: a }) => {
                                              if ("SUCCESS" !== a && e) {
                                                const t =
                                                  "INTERNAL_ERROR" === a
                                                    ? I(
                                                        "sys.api.apiRequestFailed"
                                                      )
                                                    : e ||
                                                      "Error on deleting job";
                                                R.error(t);
                                              }
                                            })
                                            .catch((e) => {})
                                            .finally(() => {
                                              he();
                                            });
                                        })(a),
                                    },
                                    { default: p(() => [h(" Delete ")]), _: 2 },
                                    1032,
                                    ["onConfirm"]
                                  ),
                                  m(
                                    y(L),
                                    {
                                      title:
                                        "Are you sure you want to stop the Job?",
                                      size: "small",
                                      disabled:
                                        ((t = a.status),
                                        [
                                          "Not launched",
                                          "Pre-queue",
                                          "NOT_STARTED",
                                          "KILLED",
                                          "Done with errors",
                                          "Blocked",
                                          "Created",
                                          "Stopped",
                                          "Started - Failed",
                                          "Launched not started",
                                          "Launched and abandoned",
                                          "Done",
                                        ].includes(t)),
                                      onConfirm: (e) =>
                                        (async function (e) {
                                          return _("/job/stop")
                                            .post({ body: { id: e.id } })
                                            .then(({ message: e, code: a }) => {
                                              if ("SUCCESS" !== a && e) {
                                                const t =
                                                  "INTERNAL_ERROR" === a
                                                    ? I(
                                                        "sys.api.apiRequestFailed"
                                                      )
                                                    : e ||
                                                      "Error on stopping job";
                                                R.error(t);
                                              }
                                            })
                                            .catch((e) => {})
                                            .finally(() => {
                                              he();
                                            });
                                        })(a),
                                    },
                                    { default: p(() => [h(" Stop ")]), _: 2 },
                                    1032,
                                    ["disabled", "onConfirm"]
                                  ),
                                ]))
                              : f("", !0),
                          ];
                          var t;
                        }),
                        _: 1,
                      },
                      8,
                      ["columns", "data-source", "pagination", "loading"]
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
export { se as default };

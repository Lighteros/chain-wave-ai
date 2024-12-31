import {
  as as e,
  br as t,
  bh as a,
  r as i,
  at as o,
  aL as s,
  bw as r,
  au as n,
  bo as l,
  ax as p,
  bl as u,
  aw as d,
  a as m,
  bO as c,
  aA as j,
  by as y,
  aB as _,
  av as f,
  aC as x,
  bx as b,
  bG as g,
  cM as h,
  d1 as v,
  bp as k,
  az as w,
} from "./index-DPRREYlk.js";
import {
  _ as C,
  d as z,
} from "./add.vue_vue_type_script_setup_true_lang-C_59nUWI.js";
import { P as N } from "./index-BfMdU48n.js";
import { P as R } from "./index-Dgmkw5o7.js";
import { _ as S } from "./index-Cl2HaiV4.js";
import "./index-5bY6ZDBk.js";
import "./Col-Djm-avAF.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./debounce-CUtJ7ZQO.js";
import "./BasicButton.vue_vue_type_script_setup_true_lang-EzE3DJdj.js";
import "./useAttrs-CpoV-7Xq.js";
import "./PopConfirmButton.vue_vue_type_script_lang-BxbUu1Is.js";
import "./tsxHelper-DjrCDYtL.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./index-CacitUCz.js";
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
const I = { class: "app-content p4" },
  T = { class: "flex gap2 mb-4 items-center" },
  P = e({
    __name: "projectList",
    setup(e) {
      const P = t(),
        O = a(),
        A = i([]),
        B = i(!1),
        J = o({ current: 1, pageSize: 10, total: 0 }),
        L = i(""),
        M = i([
          {
            title: "Project Name",
            dataIndex: "name",
            fixed: "left",
            key: "name",
            resizable: !0,
            ellipsis: !0,
          },
          {
            title: "Most Recent Run",
            dataIndex: "recentJobName",
            ellipsis: !0,
            resizable: !0,
            key: "recentJobName",
          },
          {
            title: "Recent Run Hardware",
            dataIndex: "recentJobHardware",
            key: "recentJobHardware",
            resizable: !0,
            ellipsis: !0,
          },
          {
            title: "Runs",
            dataIndex: "jobQuantity",
            ellipsis: !0,
            resizable: !0,
            key: "jobQuantity",
          },
          {
            title: "Created",
            dataIndex: "createTime",
            ellipsis: !0,
            resizable: !0,
            key: "createTime",
            width: 260,
          },
          { title: "Action", fixed: "right", width: 120, key: "action" },
        ]),
        q = i();
      function E() {
        if (!P.value) return b.emit("openLoginModal", !0);
        q.value.showModal();
      }
      async function H() {
        B.value = !0;
        try {
          const { data: e } = await g("/projects/list").get({
            query: {
              userId: O.getUserInfo.id,
              pageNum: J.current,
              pageSize: J.pageSize,
              name: L.value,
            },
          });
          (J.total = e?.totalSize || 0),
            (A.value = e?.content || []),
            A.value.forEach((e) => {
              e.createTime = h(e.createTime);
            });
        } catch (e) {
        } finally {
          B.value = !1;
        }
      }
      return (
        s(async () => {
          await H();
        }),
        (e, t) => {
          const a = v,
            i = k,
            o = w,
            s = r("RouterLink"),
            b = S;
          return (
            n(),
            l(
              m(R),
              {
                "auto-title": "",
                "fixed-height": "",
                "content-full-height": "",
              },
              {
                default: p(() => [
                  u("div", I, [
                    u("div", T, [
                      d(
                        a,
                        {
                          value: m(L),
                          "onUpdate:value":
                            t[0] ||
                            (t[0] = (e) => (c(L) ? (L.value = e) : null)),
                          placeholder: "Search by name",
                          class: "w-50",
                          onSearch: H,
                        },
                        null,
                        8,
                        ["value"]
                      ),
                      d(
                        o,
                        {
                          class: "ml-auto",
                          type: m(P) ? "primary" : "dashed",
                          onClick: E,
                        },
                        {
                          default: p(() => [
                            d(i, { icon: "i-icon-park-outline:add" }),
                            j(" Create Project "),
                          ]),
                          _: 1,
                        },
                        8,
                        ["type"]
                      ),
                    ]),
                    d(
                      b,
                      {
                        columns: m(M),
                        "data-source": m(A),
                        pagination: m(J),
                        loading: m(B),
                        "row-key": "id",
                        scroll: { x: 798, y: 680 },
                        onChange:
                          t[1] ||
                          (t[1] = ({ pageSize: e, current: t }) =>
                            (function (e = 1, t = J.pageSize) {
                              (J.current = e), (J.pageSize = t), H();
                            })(t, e)),
                        onResizeColumn:
                          t[2] ||
                          (t[2] = (e, t) => {
                            t.width = e;
                          }),
                      },
                      {
                        bodyCell: p(({ column: t, record: a, text: i }) => [
                          "name" === t.key
                            ? (n(),
                              l(
                                s,
                                {
                                  key: 0,
                                  to: {
                                    name: ("routerNames" in e
                                      ? e.routerNames
                                      : m(y)
                                    ).TRAIN_PROJECT_RUNS,
                                    query: {
                                      projectId: a.id,
                                      projectName: a.name,
                                    },
                                  },
                                },
                                { default: p(() => [j(_(a.name), 1)]), _: 2 },
                                1032,
                                ["to"]
                              ))
                            : "jobQuantity" === t.key
                            ? (n(),
                              l(
                                s,
                                {
                                  key: 1,
                                  to: {
                                    name: ("routerNames" in e
                                      ? e.routerNames
                                      : m(y)
                                    ).TRAIN_PROJECT_RUNS,
                                    query: {
                                      projectId: a.id,
                                      projectName: a.name,
                                    },
                                  },
                                },
                                { default: p(() => [j(_(i), 1)]), _: 2 },
                                1032,
                                ["to"]
                              ))
                            : "action" === t.key
                            ? (n(),
                              l(
                                m(N),
                                {
                                  key: 2,
                                  title:
                                    "Are you sure you want to delete the project?",
                                  style: { padding: "0px" },
                                  size: "small",
                                  onConfirm: (e) =>
                                    (async function (e) {
                                      await z({ id: e }), await H();
                                    })(a.id),
                                },
                                { default: p(() => [j(" Delete ")]), _: 2 },
                                1032,
                                ["onConfirm"]
                              ))
                            : (n(), f(x, { key: 3 }, [j(_(i || "--"), 1)], 64)),
                        ]),
                        _: 1,
                      },
                      8,
                      ["columns", "data-source", "pagination", "loading"]
                    ),
                  ]),
                  d(
                    C,
                    { ref_key: "addModal", ref: q, onCloseMolad: H },
                    null,
                    512
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
export { P as default };

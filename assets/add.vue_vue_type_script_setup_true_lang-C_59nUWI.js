import {
  aN as e,
  bL as a,
  as as n,
  dO as t,
  bh as l,
  r as o,
  at as s,
  au as r,
  bo as i,
  ax as u,
  bl as d,
  aw as c,
  bE as p,
  a as m,
  bO as v,
  dP as g,
  aF as f,
  ay as h,
  dk as x,
  bP as b,
} from "./index-DPRREYlk.js";
import { u as j, _ as y, F as w } from "./index-5bY6ZDBk.js";
let E,
  L,
  _ = !1;
document.addEventListener("mousedown", (e) => {
  const a = e.target;
  a.classList.contains("ant-modal-header") &&
    ((E = a.parentElement?.parentElement?.parentElement),
    E.parentElement?.classList.contains("nodrag")
      ? (E = null)
      : ((_ = !0), (L = { x: e.clientX, y: e.clientY })));
}),
  document.addEventListener("mouseup", () => {
    (_ = !1), (E = null);
  }),
  document.addEventListener("mousemove", (e) => {
    if (_) {
      const a = E,
        n = window.getComputedStyle(a, null);
      (a.style.marginLeft =
        Number.parseFloat(n.marginLeft) + e.clientX - L.x + "px"),
        (a.style.marginTop =
          Number.parseFloat(n.marginTop) + e.clientY - L.y + "px"),
        (L = { x: e.clientX, y: e.clientY });
    }
  });
const P = "/projects",
  U = "/projects";
function C(n) {
  return e.delete(
    { url: U, params: n, headers: { "Content-Type": a.FORM_URLENCODED } },
    { apiUrl: "/cheetah" }
  );
}
const N = { style: { padding: "15px" } },
  F = { class: "form-box" },
  I = d(
    "div",
    {
      style: {
        "text-align": "center",
        "line-height": "24px",
        color: "#556873",
        margin: "10px 0",
      },
    },
    " Use project to manage all runs under a group ",
    -1
  ),
  M = n({
    __name: "add",
    emits: ["closeMolad"],
    setup(a, { expose: n, emit: E }) {
      const L = E;
      n({
        showModal: function (e, a) {
          (C.value = !0), a && (O.value.groupId = a);
          D.value = !!e;
        },
      });
      const _ = t(),
        U = l(),
        C = o(!1),
        M = o(!1),
        O = o({ name: "", groupId: null, value: "" }),
        D = o(!1);
      function T() {
        (M.value = !0),
          (async function () {
            try {
              (await ((a = {
                name: O.value.name,
                userId: U.getUserInfo.id,
                description: O.value.value,
              }),
              e.post({ url: P, params: a }, { apiUrl: "/cheetah" }))) &&
                ((C.value = !1),
                (M.value = !1),
                L("closeMolad"),
                (O.value.name = ""),
                D.value && _({ path: "/projects/projectList" }));
            } catch (n) {
              (M.value = !1), f.warning("The name of the repeated");
            }
            var a;
          })(),
          (M.value = !1);
      }
      const X = s({
          name: [
            { required: !0, message: "Please input name" },
            { max: 255 },
            {
              validator(e, a) {
                const { valid: n, message: t } = g(a);
                return n ? Promise.resolve() : Promise.reject(t);
              },
            },
          ],
        }),
        { validateInfos: Y } = j(O, X, { onValidate: (...e) => {} });
      return (e, a) => {
        const n = h,
          t = y,
          l = x,
          o = w,
          s = b;
        return (
          r(),
          i(
            s,
            {
              open: m(C),
              "onUpdate:open":
                a[2] || (a[2] = (e) => (v(C) ? (C.value = e) : null)),
              title: "Create a New Project",
              "confirm-loading": m(M),
              "wrap-class-name": "nodrag",
              onCancel: a[3] || (a[3] = (a) => e.$emit("closeMolad")),
              onOk: T,
            },
            {
              default: u(() => [
                d("div", N, [
                  d("div", F, [
                    I,
                    c(
                      o,
                      p(
                        { labelCol: { span: 6 }, wrapperCol: { span: 13 } },
                        { model: m(O) }
                      ),
                      {
                        default: u(() => [
                          c(
                            t,
                            p({ label: "Project Name" }, m(Y).name),
                            {
                              default: u(() => [
                                c(
                                  n,
                                  {
                                    id: "project_name",
                                    value: m(O).name,
                                    "onUpdate:value":
                                      a[0] || (a[0] = (e) => (m(O).name = e)),
                                    placeholder: "Project Name",
                                  },
                                  null,
                                  8,
                                  ["value"]
                                ),
                              ]),
                              _: 1,
                            },
                            16
                          ),
                          c(
                            t,
                            { label: "Description" },
                            {
                              default: u(() => [
                                c(
                                  l,
                                  {
                                    id: "description",
                                    value: m(O).value,
                                    "onUpdate:value":
                                      a[1] || (a[1] = (e) => (m(O).value = e)),
                                    placeholder: "Description",
                                  },
                                  null,
                                  8,
                                  ["value"]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      },
                      16,
                      ["model"]
                    ),
                  ]),
                ]),
              ]),
              _: 1,
            },
            8,
            ["open", "confirm-loading"]
          )
        );
      };
    },
  });
export { M as _, C as d };

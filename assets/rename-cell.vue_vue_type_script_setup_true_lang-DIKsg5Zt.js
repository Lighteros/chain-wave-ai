import {
  r as e,
  cO as a,
  n as l,
  as as n,
  au as s,
  av as o,
  a as t,
  bo as i,
  ax as r,
  aw as c,
  aD as u,
  bl as f,
  aA as d,
  aB as p,
  bO as m,
  cP as v,
  bm as y,
  cQ as b,
  bn as k,
  ay as x,
  bP as _,
  bp as g,
  cR as R,
} from "./index-DPRREYlk.js";
import { _ as w, F as h } from "./index-5bY6ZDBk.js";
import { _ as O } from "./index-RHVCHHe5.js";
const P = { class: "flex flex-start items-center gap-1 z-3" },
  j = { class: "flex gap-1 items-center" },
  B = { class: "text-xs" },
  C = n({
    __name: "rename-cell",
    props: {
      record: {},
      field: {},
      api: { type: Function },
      disabled: { type: Boolean },
      tip: {},
      rules: {},
      readonly: { type: Boolean },
    },
    emits: ["ok", "cancel"],
    setup(n, { emit: C }) {
      const N = n,
        $ = C,
        z = e(),
        {
          replica: D,
          loading: F,
          toRename: U,
          confirm: q,
          cancel: A,
        } = (function (n, s) {
          const o = e(),
            t = e(!1);
          return {
            loading: t,
            replica: o,
            toRename: function (e) {
              (o.value = a(e)),
                l(() => {
                  s && (s.value?.focus?.(), s.value?.select?.());
                });
            },
            confirm: async function () {
              if (((t.value = !0), void 0 !== o.value))
                return Promise.resolve(n(o.value)).finally(() => {
                  (t.value = !1), (o.value = void 0);
                });
            },
            cancel: function () {
              o.value = void 0;
            },
          };
        })(N.api, z),
        E = e(),
        Q = e(!0);
      async function G() {
        if (!F.value)
          return E.value
            ?.validate()
            .then(() => q())
            .then(() => $("ok"));
      }
      return (e, a) => {
        const l = O,
          n = x,
          C = w,
          N = h,
          q = _,
          H = g,
          I = R;
        return (
          s(),
          o("span", P, [
            t(D) && t(D).id === e.record.id
              ? (s(),
                i(
                  q,
                  {
                    key: 0,
                    open: t(Q),
                    "onUpdate:open":
                      a[2] || (a[2] = (e) => (m(Q) ? (Q.value = e) : null)),
                    class: "w-50vw z-1000",
                    title: "Rename",
                    "close-icon": !1,
                    closable: !1,
                    "mask-closable": !1,
                    "confirm-loading": t(F),
                    keyboard: !1,
                    "ok-text": "Confirm",
                    onCancel: a[3] || (a[3] = (e) => (A(), void $("cancel"))),
                    onOk: a[4] || (a[4] = (e) => G()),
                  },
                  {
                    default: r(() => [
                      c(
                        N,
                        {
                          ref_key: "formRef",
                          ref: E,
                          class: "p4",
                          model: t(D),
                          rules: e.rules,
                          layout: "vertical",
                        },
                        {
                          default: r(() => [
                            e.tip
                              ? (s(),
                                i(
                                  l,
                                  {
                                    key: 0,
                                    type: "info",
                                    message: e.tip,
                                    class: "mb-4",
                                  },
                                  null,
                                  8,
                                  ["message"]
                                ))
                              : u("", !0),
                            c(
                              C,
                              { name: e.field },
                              {
                                label: r(() => [
                                  f("span", j, [
                                    d(" New Name "),
                                    f(
                                      "span",
                                      B,
                                      "(Original Name: " +
                                        p(e.record[e.field]) +
                                        ")",
                                      1
                                    ),
                                  ]),
                                ]),
                                default: r(() => [
                                  c(
                                    n,
                                    {
                                      ref_key: "inputRef",
                                      ref: z,
                                      value: t(D)[e.field],
                                      "onUpdate:value":
                                        a[0] ||
                                        (a[0] = (a) => (t(D)[e.field] = a)),
                                      class: "w-full",
                                      "auto-focus": "",
                                      autocomplete: "off",
                                      spellcheck: !1,
                                      onPressEnter: a[1] || (a[1] = (e) => G()),
                                    },
                                    null,
                                    8,
                                    ["value"]
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["name"]
                            ),
                          ]),
                          _: 1,
                        },
                        8,
                        ["model", "rules"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["open", "confirm-loading"]
                ))
              : u("", !0),
            ("readonly" in e ? e.readonly : t(v))
              ? u("", !0)
              : (s(),
                i(
                  I,
                  {
                    key: 1,
                    color: t(b),
                    title: `Rename ${e.tip ? `: ${e.tip}` : ""} `,
                  },
                  {
                    default: r(() => [
                      c(
                        H,
                        {
                          icon: "i-fluent:rename-24-filled",
                          class: y([
                            "!text-primary cursor-pointer hover:scale-120 transition-all min-w-4",
                            { "opacity-30 pointer-events-none": e.disabled },
                          ]),
                          onClick:
                            a[5] ||
                            (a[5] = () => {
                              (Q.value = !0), t(U)(e.record);
                            }),
                        },
                        null,
                        8,
                        ["class"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["color", "title"]
                )),
            k(e.$slots, "default"),
          ])
        );
      };
    },
  });
export { C as _ };

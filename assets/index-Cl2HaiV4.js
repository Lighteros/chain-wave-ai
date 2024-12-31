import {
  bT as e,
  bq as t,
  c as l,
  aK as n,
  aL as o,
  hX as r,
  as as a,
  aR as i,
  hY as s,
  j3 as u,
  j4 as d,
  eD as c,
  c8 as p,
  bB as f,
  aw as v,
  aJ as m,
  aS as h,
  aT as x,
  eO as g,
  j5 as y,
  cl as b,
  aP as w,
  b2 as C,
  eC as S,
  b9 as $,
  gF as k,
  gH as R,
  dx as E,
  r as T,
  aA as I,
  gD as O,
  aC as P,
  e8 as B,
  dZ as z,
  at as H,
  gM as K,
  n as A,
  j6 as N,
  hP as j,
  i4 as D,
  ea as W,
  hA as F,
  hE as L,
  j7 as _,
  gG as M,
  io as X,
  j8 as V,
  hH as U,
  bA as G,
  cW as Y,
  c7 as q,
  hG as J,
  cR as Q,
  ck as Z,
  e2 as ee,
  e1 as te,
  d_ as le,
  f2 as ne,
  ay as oe,
  is as re,
  j9 as ae,
  b1 as ie,
  az as se,
  bV as ue,
  e7 as de,
  aX as ce,
  aV as pe,
  cb as fe,
  aW as ve,
  eA as me,
  aQ as he,
  gV as xe,
  l as ge,
  ch as ye,
  fu as be,
  e0 as we,
  d$ as Ce,
} from "./index-DPRREYlk.js";
import { e as Se, d as $e } from "./PageWrapper-BPMfS97v.js";
import { _ as ke } from "./index-CacitUCz.js";
import { D as Re } from "./DownOutlined-BDMVSGUf.js";
import {
  c as Ee,
  u as Te,
  a as Ie,
  b as Oe,
  d as Pe,
  _ as Be,
} from "./index-Ty6iIrKu.js";
import { C as ze } from "./index-DGJYrvBD.js";
import "./index-yjwfeS3_.js";
import { R as He } from "./RadioButton-BTaousOD.js";
import { s as Ke } from "./scrollTo-Dpgtz1Pq.js";
import { u as Ae } from "./useBreakpoint-vSrZKufz.js";
const Ne = Symbol("TableContextProps"),
  je = () => t(Ne, {});
function De(e) {
  return null == e ? [] : Array.isArray(e) ? e : [e];
}
function We(e, t) {
  if (!t && "number" != typeof t) return e;
  const l = De(t);
  let n = e;
  for (let o = 0; o < l.length; o += 1) {
    if (!n) return null;
    n = n[l[o]];
  }
  return n;
}
function Fe(e) {
  const t = [],
    l = {};
  return (
    e.forEach((e) => {
      const { key: n, dataIndex: o } = e || {};
      let r = n || De(o).join("-") || "RC_TABLE_KEY";
      for (; l[r]; ) r = `${r}_next`;
      (l[r] = !0), t.push(r);
    }),
    t
  );
}
function Le() {
  const e = {};
  function t(e, l) {
    l &&
      Object.keys(l).forEach((n) => {
        const o = l[n];
        o && "object" == typeof o
          ? ((e[n] = e[n] || {}), t(e[n], o))
          : (e[n] = o);
      });
  }
  for (var l = arguments.length, n = new Array(l), o = 0; o < l; o++)
    n[o] = arguments[o];
  return (
    n.forEach((l) => {
      t(e, l);
    }),
    e
  );
}
function _e(e) {
  return null != e;
}
const Me = Symbol("SlotsContextProps"),
  Xe = () =>
    t(
      Me,
      l(() => ({}))
    ),
  Ve = Symbol("ContextProps"),
  Ue = "RC_TABLE_INTERNAL_COL_DEFINE",
  Ge = Symbol("HoverContextProps"),
  Ye = n(!1),
  qe = () => Ye;
const Je = a({
  name: "Cell",
  props: [
    "prefixCls",
    "record",
    "index",
    "renderIndex",
    "dataIndex",
    "customRender",
    "component",
    "colSpan",
    "rowSpan",
    "fixLeft",
    "fixRight",
    "firstFixLeft",
    "lastFixLeft",
    "firstFixRight",
    "lastFixRight",
    "appendNode",
    "additionalProps",
    "ellipsis",
    "align",
    "rowType",
    "isSticky",
    "column",
    "cellType",
    "transformCellText",
  ],
  setup(e, o) {
    let { slots: r } = o;
    const a = Xe(),
      {
        onHover: w,
        startRow: C,
        endRow: S,
      } = t(Ge, { startRow: n(-1), endRow: n(-1), onHover() {} }),
      $ = l(() => {
        var t, l, n, o;
        return null !==
          (n =
            null !== (t = e.colSpan) && void 0 !== t
              ? t
              : null === (l = e.additionalProps) || void 0 === l
              ? void 0
              : l.colSpan) && void 0 !== n
          ? n
          : null === (o = e.additionalProps) || void 0 === o
          ? void 0
          : o.colspan;
      }),
      k = l(() => {
        var t, l, n, o;
        return null !==
          (n =
            null !== (t = e.rowSpan) && void 0 !== t
              ? t
              : null === (l = e.additionalProps) || void 0 === l
              ? void 0
              : l.rowSpan) && void 0 !== n
          ? n
          : null === (o = e.additionalProps) || void 0 === o
          ? void 0
          : o.rowspan;
      }),
      R = Se(() => {
        const { index: t } = e;
        return (function (e, t, l, n) {
          return e <= n && e + t - 1 >= l;
        })(t, k.value || 1, C.value, S.value);
      }),
      E = qe(),
      T = (t) => {
        var l;
        const { record: n, additionalProps: o } = e;
        n && w(-1, -1),
          null === (l = null == o ? void 0 : o.onMouseleave) ||
            void 0 === l ||
            l.call(o, t);
      },
      I = (e) => {
        const t = g(e)[0];
        return f(t)
          ? t.type === y
            ? t.children
            : Array.isArray(t.children)
            ? I(t.children)
            : void 0
          : t;
      },
      O = n(null);
    return (
      i([R, () => e.prefixCls, O], () => {
        const t = s(O.value);
        t &&
          (R.value
            ? u(t, `${e.prefixCls}-cell-row-hover`)
            : d(t, `${e.prefixCls}-cell-row-hover`));
      }),
      () => {
        var t, l, n, o, i, s;
        const {
            prefixCls: u,
            record: d,
            index: g,
            renderIndex: y,
            dataIndex: C,
            customRender: S,
            component: R = "td",
            fixLeft: P,
            fixRight: B,
            firstFixLeft: z,
            lastFixLeft: H,
            firstFixRight: K,
            lastFixRight: A,
            appendNode: N = null === (t = r.appendNode) || void 0 === t
              ? void 0
              : t.call(r),
            additionalProps: j = {},
            ellipsis: D,
            align: W,
            rowType: F,
            isSticky: L,
            column: _ = {},
            cellType: M,
          } = e,
          X = `${u}-cell`;
        let V, U;
        const G = null === (l = r.default) || void 0 === l ? void 0 : l.call(r);
        if (_e(G) || "header" === M) U = G;
        else {
          const t = We(d, C);
          if (((U = t), S)) {
            const e = S({
              text: t,
              value: t,
              record: d,
              index: g,
              renderIndex: y,
              column: _.__originColumn__,
            });
            !(Y = e) || "object" != typeof Y || Array.isArray(Y) || f(Y)
              ? (U = e)
              : ((U = e.children), (V = e.props));
          }
          if (
            !(Ue in _) &&
            "body" === M &&
            a.value.bodyCell &&
            !(null === (n = _.slots) || void 0 === n ? void 0 : n.customRender)
          ) {
            const e = c(
              a.value,
              "bodyCell",
              {
                text: t,
                value: t,
                record: d,
                index: g,
                column: _.__originColumn__,
              },
              () => {
                const e = void 0 === U ? t : U;
                return [
                  ("object" == typeof e && b(e)) || "object" != typeof e
                    ? e
                    : null,
                ];
              }
            );
            U = p(e);
          }
          e.transformCellText &&
            (U = e.transformCellText({
              text: U,
              record: d,
              index: g,
              column: _.__originColumn__,
            }));
        }
        var Y;
        "object" != typeof U || Array.isArray(U) || f(U) || (U = null),
          D && (H || K) && (U = v("span", { class: `${X}-content` }, [U])),
          Array.isArray(U) && 1 === U.length && (U = U[0]);
        const q = V || {},
          { colSpan: J, rowSpan: Q, style: Z, class: ee } = q,
          te = (function (e, t) {
            var l = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (l[n] = e[n]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var o = 0;
              for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                t.indexOf(n[o]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                  (l[n[o]] = e[n[o]]);
            }
            return l;
          })(q, ["colSpan", "rowSpan", "style", "class"]),
          le =
            null !== (o = void 0 !== J ? J : $.value) && void 0 !== o ? o : 1,
          ne =
            null !== (i = void 0 !== Q ? Q : k.value) && void 0 !== i ? i : 1;
        if (0 === le || 0 === ne) return null;
        const oe = {},
          re = "number" == typeof P && E.value,
          ae = "number" == typeof B && E.value;
        re && ((oe.position = "sticky"), (oe.left = `${P}px`)),
          ae && ((oe.position = "sticky"), (oe.right = `${B}px`));
        const ie = {};
        let se;
        W && (ie.textAlign = W);
        const ue = !0 === D ? { showTitle: !0 } : D;
        ue &&
          (ue.showTitle || "header" === F) &&
          ("string" == typeof U || "number" == typeof U
            ? (se = U.toString())
            : f(U) && (se = I([U])));
        const de = m(m(m({ title: se }, te), j), {
          colSpan: 1 !== le ? le : null,
          rowSpan: 1 !== ne ? ne : null,
          class: h(
            X,
            {
              [`${X}-fix-left`]: re && E.value,
              [`${X}-fix-left-first`]: z && E.value,
              [`${X}-fix-left-last`]: H && E.value,
              [`${X}-fix-right`]: ae && E.value,
              [`${X}-fix-right-first`]: K && E.value,
              [`${X}-fix-right-last`]: A && E.value,
              [`${X}-ellipsis`]: D,
              [`${X}-with-append`]: N,
              [`${X}-fix-sticky`]: (re || ae) && L && E.value,
            },
            j.class,
            ee
          ),
          onMouseenter: (t) => {
            ((t, l) => {
              var n;
              const { record: o, index: r, additionalProps: a } = e;
              o && w(r, r + l - 1),
                null === (n = null == a ? void 0 : a.onMouseenter) ||
                  void 0 === n ||
                  n.call(a, t);
            })(t, ne);
          },
          onMouseleave: T,
          style: [j.style, ie, oe, Z],
        });
        return v(R, x(x({}, de), {}, { ref: O }), {
          default: () => [
            N,
            U,
            null === (s = r.dragHandle) || void 0 === s ? void 0 : s.call(r),
          ],
        });
      }
    );
  },
});
function Qe(e, t, l, n, o) {
  const r = l[e] || {},
    a = l[t] || {};
  let i, s;
  "left" === r.fixed
    ? (i = n.left[e])
    : "right" === a.fixed && (s = n.right[t]);
  let u = !1,
    d = !1,
    c = !1,
    p = !1;
  const f = l[t + 1],
    v = l[e - 1];
  if ("rtl" === o) {
    if (void 0 !== i) {
      p = !(v && "left" === v.fixed);
    } else if (void 0 !== s) {
      c = !(f && "right" === f.fixed);
    }
  } else if (void 0 !== i) {
    u = !(f && "left" === f.fixed);
  } else if (void 0 !== s) {
    d = !(v && "right" === v.fixed);
  }
  return {
    fixLeft: i,
    fixRight: s,
    lastFixLeft: u,
    firstFixRight: d,
    lastFixRight: c,
    firstFixLeft: p,
    isSticky: n.isSticky,
  };
}
const Ze = { start: "mousedown", move: "mousemove", stop: "mouseup" },
  et = { start: "touchstart", move: "touchmove", stop: "touchend" },
  tt = a({
    compatConfig: { MODE: 3 },
    name: "DragHandle",
    props: {
      prefixCls: String,
      width: { type: Number, required: !0 },
      minWidth: { type: Number, default: 50 },
      maxWidth: { type: Number, default: Infinity },
      column: { type: Object, default: void 0 },
    },
    setup(e) {
      let o = 0,
        r = { remove: () => {} },
        a = { remove: () => {} };
      const i = () => {
        r.remove(), a.remove();
      };
      w(() => {
        i();
      }),
        C(() => {
          S(
            !isNaN(e.width),
            "Table",
            "width must be a number when use resizable"
          );
        });
      const { onResizeColumn: s } = t(Ve, { onResizeColumn: () => {} }),
        u = l(() =>
          "number" != typeof e.minWidth || isNaN(e.minWidth) ? 50 : e.minWidth
        ),
        d = l(() =>
          "number" != typeof e.maxWidth || isNaN(e.maxWidth)
            ? Infinity
            : e.maxWidth
        ),
        c = $();
      let p = 0;
      const f = n(!1);
      let m;
      const h = (t) => {
          let l = 0;
          l = t.touches
            ? t.touches.length
              ? t.touches[0].pageX
              : t.changedTouches[0].pageX
            : t.pageX;
          const n = o - l;
          let r = Math.max(p - n, u.value);
          (r = Math.min(r, d.value)),
            E.cancel(m),
            (m = E(() => {
              s(r, e.column.__originColumn__);
            }));
        },
        g = (e) => {
          h(e);
        },
        y = (e) => {
          (f.value = !1), h(e), i();
        },
        b = (e, t) => {
          (f.value = !0),
            i(),
            (p = c.vnode.el.parentNode.getBoundingClientRect().width),
            (e instanceof MouseEvent && 1 !== e.which) ||
              (e.stopPropagation && e.stopPropagation(),
              (o = e.touches ? e.touches[0].pageX : e.pageX),
              (r = R(document.documentElement, t.move, g)),
              (a = R(document.documentElement, t.stop, y)));
        },
        T = (e) => {
          e.stopPropagation(), e.preventDefault(), b(e, Ze);
        },
        I = (e) => {
          e.stopPropagation(), e.preventDefault();
        };
      return () => {
        const { prefixCls: t } = e,
          l = {
            [k ? "onTouchstartPassive" : "onTouchstart"]: (e) =>
              ((e) => {
                e.stopPropagation(), e.preventDefault(), b(e, et);
              })(e),
          };
        return v(
          "div",
          x(
            x(
              {
                class: `${t}-resize-handle ${f.value ? "dragging" : ""}`,
                onMousedown: T,
              },
              l
            ),
            {},
            { onClick: I }
          ),
          [v("div", { class: `${t}-resize-handle-line` }, null)]
        );
      };
    },
  }),
  lt = a({
    name: "HeaderRow",
    props: [
      "cells",
      "stickyOffsets",
      "flattenColumns",
      "rowComponent",
      "cellComponent",
      "index",
      "customHeaderRow",
    ],
    setup(e) {
      const t = je();
      return () => {
        const { prefixCls: l, direction: n } = t,
          {
            cells: o,
            stickyOffsets: r,
            flattenColumns: a,
            rowComponent: i,
            cellComponent: s,
            customHeaderRow: u,
            index: d,
          } = e;
        let c;
        u &&
          (c = u(
            o.map((e) => e.column),
            d
          ));
        const p = Fe(o.map((e) => e.column));
        return v(i, c, {
          default: () => [
            o.map((e, t) => {
              const { column: o } = e,
                i = Qe(e.colStart, e.colEnd, a, r, n);
              let u;
              o && o.customHeaderCell && (u = e.column.customHeaderCell(o));
              const d = o;
              return v(
                Je,
                x(
                  x(
                    x({}, e),
                    {},
                    {
                      cellType: "header",
                      ellipsis: o.ellipsis,
                      align: o.align,
                      component: s,
                      prefixCls: l,
                      key: p[t],
                    },
                    i
                  ),
                  {},
                  { additionalProps: u, rowType: "header", column: o }
                ),
                {
                  default: () => o.title,
                  dragHandle: () =>
                    d.resizable
                      ? v(
                          tt,
                          {
                            prefixCls: l,
                            width: d.width,
                            minWidth: d.minWidth,
                            maxWidth: d.maxWidth,
                            column: d,
                          },
                          null
                        )
                      : null,
                }
              );
            }),
          ],
        });
      };
    },
  });
const nt = a({
    name: "TableHeader",
    inheritAttrs: !1,
    props: ["columns", "flattenColumns", "stickyOffsets", "customHeaderRow"],
    setup(e) {
      const t = je(),
        n = l(() =>
          (function (e) {
            const t = [];
            !(function e(l, n) {
              let o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
              t[o] = t[o] || [];
              let r = n;
              return l.filter(Boolean).map((l) => {
                const n = {
                  key: l.key,
                  class: h(l.className, l.class),
                  column: l,
                  colStart: r,
                };
                let a = 1;
                const i = l.children;
                return (
                  i &&
                    i.length > 0 &&
                    ((a = e(i, r, o + 1).reduce((e, t) => e + t, 0)),
                    (n.hasSubColumns = !0)),
                  "colSpan" in l && ({ colSpan: a } = l),
                  "rowSpan" in l && (n.rowSpan = l.rowSpan),
                  (n.colSpan = a),
                  (n.colEnd = n.colStart + a - 1),
                  t[o].push(n),
                  (r += a),
                  a
                );
              });
            })(e, 0);
            const l = t.length;
            for (let n = 0; n < l; n += 1)
              t[n].forEach((e) => {
                "rowSpan" in e || e.hasSubColumns || (e.rowSpan = l - n);
              });
            return t;
          })(e.columns)
        );
      return () => {
        const { prefixCls: l, getComponent: o } = t,
          { stickyOffsets: r, flattenColumns: a, customHeaderRow: i } = e,
          s = o(["header", "wrapper"], "thead"),
          u = o(["header", "row"], "tr"),
          d = o(["header", "cell"], "th");
        return v(
          s,
          { class: `${l}-thead` },
          {
            default: () => [
              n.value.map((e, t) =>
                v(
                  lt,
                  {
                    key: t,
                    flattenColumns: a,
                    cells: e,
                    stickyOffsets: r,
                    rowComponent: u,
                    cellComponent: d,
                    customHeaderRow: i,
                    index: t,
                  },
                  null
                )
              ),
            ],
          }
        );
      };
    },
  }),
  ot = Symbol("ExpandedRowProps"),
  rt = a({
    name: "ExpandedRow",
    inheritAttrs: !1,
    props: [
      "prefixCls",
      "component",
      "cellComponent",
      "expanded",
      "colSpan",
      "isEmpty",
    ],
    setup(e, l) {
      let { slots: n, attrs: o } = l;
      const r = je(),
        a = t(ot, {}),
        { fixHeader: i, fixColumn: s, componentWidth: u, horizonScroll: d } = a;
      return () => {
        const {
          prefixCls: t,
          component: l,
          cellComponent: a,
          expanded: c,
          colSpan: p,
          isEmpty: f,
        } = e;
        return v(
          l,
          { class: o.class, style: { display: c ? null : "none" } },
          {
            default: () => [
              v(
                Je,
                { component: a, prefixCls: t, colSpan: p },
                {
                  default: () => {
                    var e;
                    let l =
                      null === (e = n.default) || void 0 === e
                        ? void 0
                        : e.call(n);
                    return (
                      (f ? d.value : s.value) &&
                        (l = v(
                          "div",
                          {
                            style: {
                              width:
                                u.value -
                                (i.value ? r.scrollbarSize : 0) +
                                "px",
                              position: "sticky",
                              left: 0,
                              overflow: "hidden",
                            },
                            class: `${t}-expanded-row-fixed`,
                          },
                          [l]
                        )),
                      l
                    );
                  },
                }
              ),
            ],
          }
        );
      };
    },
  }),
  at = a({
    name: "MeasureCell",
    props: ["columnKey"],
    setup(e, t) {
      let { emit: l } = t;
      const n = T();
      return (
        o(() => {
          n.value && l("columnResize", e.columnKey, n.value.offsetWidth);
        }),
        () =>
          v(
            O,
            {
              onResize: (t) => {
                let { offsetWidth: n } = t;
                l("columnResize", e.columnKey, n);
              },
            },
            {
              default: () => [
                v(
                  "td",
                  { ref: n, style: { padding: 0, border: 0, height: 0 } },
                  [
                    v("div", { style: { height: 0, overflow: "hidden" } }, [
                      I(" "),
                    ]),
                  ]
                ),
              ],
            }
          )
      );
    },
  }),
  it = Symbol("BodyContextProps"),
  st = () => t(it, {}),
  ut = a({
    name: "BodyRow",
    inheritAttrs: !1,
    props: [
      "record",
      "index",
      "renderIndex",
      "recordKey",
      "expandedKeys",
      "rowComponent",
      "cellComponent",
      "customRow",
      "rowExpandable",
      "indent",
      "rowKey",
      "getRowKey",
      "childrenColumnName",
    ],
    setup(e, t) {
      let { attrs: o } = t;
      const r = je(),
        a = st(),
        i = n(!1),
        s = l(() => e.expandedKeys && e.expandedKeys.has(e.recordKey));
      C(() => {
        s.value && (i.value = !0);
      });
      const u = l(
          () =>
            "row" === a.expandableType &&
            (!e.rowExpandable || e.rowExpandable(e.record))
        ),
        d = l(() => "nest" === a.expandableType),
        c = l(
          () =>
            e.childrenColumnName && e.record && e.record[e.childrenColumnName]
        ),
        p = l(() => u.value || d.value),
        f = (e, t) => {
          a.onTriggerExpand(e, t);
        },
        m = l(() => {
          var t;
          return (
            (null === (t = e.customRow) || void 0 === t
              ? void 0
              : t.call(e, e.record, e.index)) || {}
          );
        }),
        g = function (t) {
          var l, n;
          a.expandRowByClick && p.value && f(e.record, t);
          for (
            var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), i = 1;
            i < o;
            i++
          )
            r[i - 1] = arguments[i];
          null ===
            (n = null === (l = m.value) || void 0 === l ? void 0 : l.onClick) ||
            void 0 === n ||
            n.call(l, t, ...r);
        },
        y = l(() => {
          const { record: t, index: l, indent: n } = e,
            { rowClassName: o } = a;
          return "string" == typeof o
            ? o
            : "function" == typeof o
            ? o(t, l, n)
            : "";
        }),
        b = l(() => Fe(a.flattenColumns));
      return () => {
        const { class: t, style: l } = o,
          {
            record: n,
            index: p,
            rowKey: w,
            indent: C = 0,
            rowComponent: S,
            cellComponent: $,
          } = e,
          { prefixCls: k, fixedInfoList: R, transformCellText: E } = r,
          {
            flattenColumns: T,
            expandedRowClassName: I,
            indentSize: O,
            expandIcon: B,
            expandedRowRender: z,
            expandIconColumnIndex: H,
          } = a,
          K = v(
            S,
            x(
              x({}, m.value),
              {},
              {
                "data-row-key": w,
                class: h(
                  t,
                  `${k}-row`,
                  `${k}-row-level-${C}`,
                  y.value,
                  m.value.class
                ),
                style: [l, m.value.style],
                onClick: g,
              }
            ),
            {
              default: () => [
                T.map((t, l) => {
                  const { customRender: o, dataIndex: r, className: a } = t,
                    i = b[l],
                    u = R[l];
                  let m;
                  t.customCell && (m = t.customCell(n, p, t));
                  const h =
                    l === (H || 0) && d.value
                      ? v(P, null, [
                          v(
                            "span",
                            {
                              style: { paddingLeft: O * C + "px" },
                              class: `${k}-row-indent indent-level-${C}`,
                            },
                            null
                          ),
                          B({
                            prefixCls: k,
                            expanded: s.value,
                            expandable: c.value,
                            record: n,
                            onExpand: f,
                          }),
                        ])
                      : null;
                  return v(
                    Je,
                    x(
                      x(
                        {
                          cellType: "body",
                          class: a,
                          ellipsis: t.ellipsis,
                          align: t.align,
                          component: $,
                          prefixCls: k,
                          key: i,
                          record: n,
                          index: p,
                          renderIndex: e.renderIndex,
                          dataIndex: r,
                          customRender: o,
                        },
                        u
                      ),
                      {},
                      {
                        additionalProps: m,
                        column: t,
                        transformCellText: E,
                        appendNode: h,
                      }
                    ),
                    null
                  );
                }),
              ],
            }
          );
        let A;
        if (u.value && (i.value || s.value)) {
          const e = z({
              record: n,
              index: p,
              indent: C + 1,
              expanded: s.value,
            }),
            t = I && I(n, p, C);
          A = v(
            rt,
            {
              expanded: s.value,
              class: h(
                `${k}-expanded-row`,
                `${k}-expanded-row-level-${C + 1}`,
                t
              ),
              prefixCls: k,
              component: S,
              cellComponent: $,
              colSpan: T.length,
              isEmpty: !1,
            },
            { default: () => [e] }
          );
        }
        return v(P, null, [K, A]);
      };
    },
  });
function dt(e, t, l, n, o, r) {
  const a = [];
  a.push({ record: e, indent: t, index: r });
  const i = o(e),
    s = null == n ? void 0 : n.has(i);
  if (e && Array.isArray(e[l]) && s)
    for (let u = 0; u < e[l].length; u += 1) {
      const r = dt(e[l][u], t + 1, l, n, o, u);
      a.push(...r);
    }
  return a;
}
const ct = Symbol("ResizeContextProps"),
  pt = a({
    name: "TableBody",
    props: [
      "data",
      "getRowKey",
      "measureColumnWidth",
      "expandedKeys",
      "customRow",
      "rowExpandable",
      "childrenColumnName",
    ],
    setup(o, r) {
      let { slots: a } = r;
      const i = t(ct, { onColumnResize: () => {} }),
        s = je(),
        u = st(),
        d =
          ((c = B(o, "data")),
          (p = B(o, "childrenColumnName")),
          (f = B(o, "expandedKeys")),
          (m = B(o, "getRowKey")),
          l(() => {
            const e = p.value,
              t = f.value,
              l = c.value;
            if (null == t ? void 0 : t.size) {
              const n = [];
              for (let o = 0; o < (null == l ? void 0 : l.length); o += 1) {
                const r = l[o];
                n.push(...dt(r, 0, e, t, m.value, o));
              }
              return n;
            }
            return null == l
              ? void 0
              : l.map((e, t) => ({ record: e, indent: 0, index: t }));
          }));
      var c, p, f, m;
      const h = n(-1),
        x = n(-1);
      let g;
      return (
        ((t) => {
          e(Ge, t);
        })({
          startRow: h,
          endRow: x,
          onHover: (e, t) => {
            clearTimeout(g),
              (g = setTimeout(() => {
                (h.value = e), (x.value = t);
              }, 100));
          },
        }),
        () => {
          var e;
          const {
              data: t,
              getRowKey: l,
              measureColumnWidth: n,
              expandedKeys: r,
              customRow: c,
              rowExpandable: p,
              childrenColumnName: f,
            } = o,
            { onColumnResize: m } = i,
            { prefixCls: h, getComponent: x } = s,
            { flattenColumns: g } = u,
            y = x(["body", "wrapper"], "tbody"),
            b = x(["body", "row"], "tr"),
            w = x(["body", "cell"], "td");
          let C;
          C = t.length
            ? d.value.map((e, t) => {
                const { record: n, indent: o, index: a } = e,
                  i = l(n, t);
                return v(
                  ut,
                  {
                    key: i,
                    rowKey: i,
                    record: n,
                    recordKey: i,
                    index: t,
                    renderIndex: a,
                    rowComponent: b,
                    cellComponent: w,
                    expandedKeys: r,
                    customRow: c,
                    getRowKey: l,
                    rowExpandable: p,
                    childrenColumnName: f,
                    indent: o,
                  },
                  null
                );
              })
            : v(
                rt,
                {
                  expanded: !0,
                  class: `${h}-placeholder`,
                  prefixCls: h,
                  component: b,
                  cellComponent: w,
                  colSpan: g.length,
                  isEmpty: !0,
                },
                {
                  default: () => [
                    null === (e = a.emptyNode) || void 0 === e
                      ? void 0
                      : e.call(a),
                  ],
                }
              );
          const S = Fe(g);
          return v(
            y,
            { class: `${h}-tbody` },
            {
              default: () => [
                n &&
                  v(
                    "tr",
                    {
                      "aria-hidden": "true",
                      class: `${h}-measure-row`,
                      style: { height: 0, fontSize: 0 },
                    },
                    [
                      S.map((e) =>
                        v(at, { key: e, columnKey: e, onColumnResize: m }, null)
                      ),
                    ]
                  ),
                C,
              ],
            }
          );
        }
      );
    },
  }),
  ft = {};
var vt = function (e, t) {
  var l = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (l[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (l[n[o]] = e[n[o]]);
  }
  return l;
};
function mt(e) {
  return e.reduce((e, t) => {
    const { fixed: l } = t,
      n = !0 === l ? "left" : l,
      o = t.children;
    return o && o.length > 0
      ? [...e, ...mt(o).map((e) => m({ fixed: n }, e))]
      : [...e, m(m({}, t), { fixed: n })];
  }, []);
}
function ht(e, t) {
  let {
    prefixCls: n,
    columns: o,
    expandable: r,
    expandedKeys: a,
    getRowKey: i,
    onTriggerExpand: s,
    expandIcon: u,
    rowExpandable: d,
    expandIconColumnIndex: p,
    direction: f,
    expandRowByClick: h,
    expandColumnWidth: x,
    expandFixed: g,
  } = e;
  const y = Xe(),
    b = l(() => {
      if (r.value) {
        let e = o.value.slice();
        if (!e.includes(ft)) {
          const t = p.value || 0;
          t >= 0 && e.splice(t, 0, ft);
        }
        const t = e.indexOf(ft);
        e = e.filter((e, l) => e !== ft || l === t);
        const l = o.value[t];
        let r;
        r =
          ("left" !== g.value && !g.value) || p.value
            ? ("right" !== g.value && !g.value) || p.value !== o.value.length
              ? l
                ? l.fixed
                : null
              : "right"
            : "left";
        const f = a.value,
          m = d.value,
          b = u.value,
          w = n.value,
          C = h.value,
          S = {
            [Ue]: {
              class: `${n.value}-expand-icon-col`,
              columnType: "EXPAND_COLUMN",
            },
            title: c(y.value, "expandColumnTitle", {}, () => [""]),
            fixed: r,
            class: `${n.value}-row-expand-icon-cell`,
            width: x.value,
            customRender: (e) => {
              let { record: t, index: l } = e;
              const n = i.value(t, l),
                o = f.has(n),
                r = !m || m(t),
                a = b({
                  prefixCls: w,
                  expanded: o,
                  expandable: r,
                  record: t,
                  onExpand: s,
                });
              return C
                ? v("span", { onClick: (e) => e.stopPropagation() }, [a])
                : a;
            },
          };
        return e.map((e) => (e === ft ? S : e));
      }
      return o.value.filter((e) => e !== ft);
    }),
    w = l(() => {
      let e = b.value;
      return (
        t.value && (e = t.value(e)),
        e.length || (e = [{ customRender: () => null }]),
        e
      );
    }),
    C = l(() =>
      "rtl" === f.value
        ? mt(w.value).map((e) => {
            const { fixed: t } = e,
              l = vt(e, ["fixed"]);
            let n = t;
            return (
              "left" === t ? (n = "right") : "right" === t && (n = "left"),
              m({ fixed: n }, l)
            );
          })
        : mt(w.value)
    );
  return [w, C];
}
function xt(e) {
  const t = n(e);
  let l;
  const o = n([]);
  return (
    z(() => {
      E.cancel(l);
    }),
    [
      t,
      function (e) {
        o.value.push(e),
          E.cancel(l),
          (l = E(() => {
            const e = o.value;
            (o.value = []),
              e.forEach((e) => {
                t.value = e(t.value);
              });
          }));
      },
    ]
  );
}
var gt = function (e, t) {
  var l = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (l[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (l[n[o]] = e[n[o]]);
  }
  return l;
};
function yt(e) {
  let { colWidths: t, columns: l, columCount: n } = e;
  const o = [];
  let r = !1;
  for (let a = (n || l.length) - 1; a >= 0; a -= 1) {
    const e = t[a],
      n = l && l[a],
      i = n && n[Ue];
    if (e || i || r) {
      const t = gt(i || {}, ["columnType"]);
      o.unshift(
        v(
          "col",
          x(
            { key: a, style: { width: "number" == typeof e ? `${e}px` : e } },
            t
          ),
          null
        )
      ),
        (r = !0);
    }
  }
  return v("colgroup", null, [o]);
}
function bt(e, t) {
  let { slots: l } = t;
  var n;
  return v("div", null, [
    null === (n = l.default) || void 0 === n ? void 0 : n.call(l),
  ]);
}
bt.displayName = "Panel";
let wt = 0;
const Ct = a({
    name: "TableSummary",
    props: ["fixed"],
    setup(e, t) {
      let { slots: n } = t;
      const o = je(),
        r = "table-summary-uni-key-" + ++wt,
        a = l(() => "" === e.fixed || e.fixed);
      return (
        C(() => {
          o.summaryCollect(r, a.value);
        }),
        z(() => {
          o.summaryCollect(r, !1);
        }),
        () => {
          var e;
          return null === (e = n.default) || void 0 === e ? void 0 : e.call(n);
        }
      );
    },
  }),
  St = a({
    compatConfig: { MODE: 3 },
    name: "ATableSummaryRow",
    setup(e, t) {
      let { slots: l } = t;
      return () => {
        var e;
        return v("tr", null, [
          null === (e = l.default) || void 0 === e ? void 0 : e.call(l),
        ]);
      };
    },
  }),
  $t = Symbol("SummaryContextProps"),
  kt = a({
    name: "ATableSummaryCell",
    props: ["index", "colSpan", "rowSpan", "align"],
    setup(e, l) {
      let { attrs: n, slots: o } = l;
      const r = je(),
        a = t($t, {});
      return () => {
        const { index: t, colSpan: l = 1, rowSpan: i, align: s } = e,
          { prefixCls: u, direction: d } = r,
          { scrollColumnIndex: c, stickyOffsets: p, flattenColumns: f } = a,
          m = t + l - 1 + 1 === c ? l + 1 : l,
          h = Qe(t, t + m - 1, f, p, d);
        return v(
          Je,
          x(
            {
              class: n.class,
              index: t,
              component: "td",
              prefixCls: u,
              record: null,
              dataIndex: null,
              align: s,
              colSpan: m,
              rowSpan: i,
              customRender: () => {
                var e;
                return null === (e = o.default) || void 0 === e
                  ? void 0
                  : e.call(o);
              },
            },
            h
          ),
          null
        );
      };
    },
  }),
  Rt = a({
    name: "TableFooter",
    inheritAttrs: !1,
    props: ["stickyOffsets", "flattenColumns"],
    setup(t, n) {
      let { slots: o } = n;
      const r = je();
      return (
        ((t) => {
          e($t, t);
        })(
          H({
            stickyOffsets: B(t, "stickyOffsets"),
            flattenColumns: B(t, "flattenColumns"),
            scrollColumnIndex: l(() => {
              const e = t.flattenColumns.length - 1,
                l = t.flattenColumns[e];
              return (null == l ? void 0 : l.scrollbar) ? e : null;
            }),
          })
        ),
        () => {
          var e;
          const { prefixCls: t } = r;
          return v("tfoot", { class: `${t}-summary` }, [
            null === (e = o.default) || void 0 === e ? void 0 : e.call(o),
          ]);
        }
      );
    },
  }),
  Et = Ct;
function Tt(e) {
  let { prefixCls: t, record: l, onExpand: n, expanded: o, expandable: r } = e;
  const a = `${t}-row-expand-icon`;
  if (!r) return v("span", { class: [a, `${t}-row-spaced`] }, null);
  return v(
    "span",
    {
      class: { [a]: !0, [`${t}-row-expanded`]: o, [`${t}-row-collapsed`]: !o },
      onClick: (e) => {
        n(l, e), e.stopPropagation();
      },
    },
    null
  );
}
const It = a({
    name: "StickyScrollBar",
    inheritAttrs: !1,
    props: ["offsetScroll", "container", "scrollBodyRef", "scrollBodySizeInfo"],
    emits: ["scroll"],
    setup(e, t) {
      let { emit: l, expose: r } = t;
      const a = je(),
        s = n(0),
        u = n(0),
        d = n(0);
      C(
        () => {
          (s.value = e.scrollBodySizeInfo.scrollWidth || 0),
            (u.value = e.scrollBodySizeInfo.clientWidth || 0),
            (d.value = s.value && u.value * (u.value / s.value));
        },
        { flush: "post" }
      );
      const c = n(),
        [p, f] = xt({ scrollLeft: 0, isHiddenScrollBar: !0 }),
        x = T({ delta: 0, x: 0 }),
        g = n(!1),
        y = () => {
          g.value = !1;
        },
        b = (e) => {
          (x.value = { delta: e.pageX - p.value.scrollLeft, x: 0 }),
            (g.value = !0),
            e.preventDefault();
        },
        w = (e) => {
          const { buttons: t } =
            e || (null === window || void 0 === window ? void 0 : window.event);
          if (!g.value || 0 === t) return void (g.value && (g.value = !1));
          let n = x.value.x + e.pageX - x.value.x - x.value.delta;
          n <= 0 && (n = 0),
            n + d.value >= u.value && (n = u.value - d.value),
            l("scroll", { scrollLeft: (n / u.value) * (s.value + 2) }),
            (x.value.x = e.pageX);
        },
        S = () => {
          if (!e.scrollBodyRef.value) return;
          const t = j(e.scrollBodyRef.value).top,
            l = t + e.scrollBodyRef.value.offsetHeight,
            n =
              e.container === window
                ? document.documentElement.scrollTop + window.innerHeight
                : j(e.container).top + e.container.clientHeight;
          l - N() <= n || t >= n - e.offsetScroll
            ? f((e) => m(m({}, e), { isHiddenScrollBar: !0 }))
            : f((e) => m(m({}, e), { isHiddenScrollBar: !1 }));
        };
      r({
        setScrollLeft: (e) => {
          f((t) => m(m({}, t), { scrollLeft: (e / s.value) * u.value || 0 }));
        },
      });
      let $ = null,
        k = null,
        E = null,
        I = null;
      o(() => {
        ($ = R(document.body, "mouseup", y, !1)),
          (k = R(document.body, "mousemove", w, !1)),
          (E = R(window, "resize", S, !1));
      }),
        K(() => {
          A(() => {
            S();
          });
        }),
        o(() => {
          setTimeout(() => {
            i(
              [d, g],
              () => {
                S();
              },
              { immediate: !0, flush: "post" }
            );
          });
        }),
        i(
          () => e.container,
          () => {
            null == I || I.remove(), (I = R(e.container, "scroll", S, !1));
          },
          { immediate: !0, flush: "post" }
        ),
        z(() => {
          null == $ || $.remove(),
            null == k || k.remove(),
            null == I || I.remove(),
            null == E || E.remove();
        }),
        i(
          () => m({}, p.value),
          (t, l) => {
            t.isHiddenScrollBar ===
              (null == l ? void 0 : l.isHiddenScrollBar) ||
              t.isHiddenScrollBar ||
              f((t) => {
                const l = e.scrollBodyRef.value;
                return l
                  ? m(m({}, t), {
                      scrollLeft:
                        (l.scrollLeft / l.scrollWidth) * l.clientWidth,
                    })
                  : t;
              });
          },
          { immediate: !0 }
        );
      const O = N();
      return () => {
        if (s.value <= u.value || !d.value || p.value.isHiddenScrollBar)
          return null;
        const { prefixCls: t } = a;
        return v(
          "div",
          {
            style: {
              height: `${O}px`,
              width: `${u.value}px`,
              bottom: `${e.offsetScroll}px`,
            },
            class: `${t}-sticky-scroll`,
          },
          [
            v(
              "div",
              {
                onMousedown: b,
                ref: c,
                class: h(`${t}-sticky-scroll-bar`, {
                  [`${t}-sticky-scroll-bar-active`]: g.value,
                }),
                style: {
                  width: `${d.value}px`,
                  transform: `translate3d(${p.value.scrollLeft}px, 0, 0)`,
                },
              },
              null
            ),
          ]
        );
      };
    },
  }),
  Ot = D() ? window : null;
const Pt = a({
  name: "FixedHolder",
  inheritAttrs: !1,
  props: [
    "columns",
    "flattenColumns",
    "stickyOffsets",
    "customHeaderRow",
    "noData",
    "maxContentScroll",
    "colWidths",
    "columCount",
    "direction",
    "fixHeader",
    "stickyTopOffset",
    "stickyBottomOffset",
    "stickyClassName",
  ],
  emits: ["scroll"],
  setup(e, t) {
    let { attrs: n, slots: r, emit: a } = t;
    const i = je(),
      s = l(() => (i.isSticky && !e.fixHeader ? 0 : i.scrollbarSize)),
      u = T(),
      d = (e) => {
        const { currentTarget: t, deltaX: l } = e;
        l &&
          (a("scroll", { currentTarget: t, scrollLeft: t.scrollLeft + l }),
          e.preventDefault());
      },
      c = T();
    o(() => {
      A(() => {
        c.value = R(u.value, "wheel", d);
      });
    }),
      z(() => {
        var e;
        null === (e = c.value) || void 0 === e || e.remove();
      });
    const p = l(() =>
        e.flattenColumns.every(
          (e) => e.width && 0 !== e.width && "0px" !== e.width
        )
      ),
      f = T([]),
      x = T([]);
    C(() => {
      const t = e.flattenColumns[e.flattenColumns.length - 1],
        l = {
          fixed: t ? t.fixed : null,
          scrollbar: !0,
          customHeaderCell: () => ({ class: `${i.prefixCls}-cell-scrollbar` }),
        };
      (f.value = s.value ? [...e.columns, l] : e.columns),
        (x.value = s.value ? [...e.flattenColumns, l] : e.flattenColumns);
    });
    const g = l(() => {
        const { stickyOffsets: t, direction: l } = e,
          { right: n, left: o } = t;
        return m(m({}, t), {
          left: "rtl" === l ? [...o.map((e) => e + s.value), 0] : o,
          right: "rtl" === l ? n : [...n.map((e) => e + s.value), 0],
          isSticky: i.isSticky,
        });
      }),
      y =
        ((b = B(e, "colWidths")),
        (w = B(e, "columCount")),
        l(() => {
          const e = [],
            t = b.value,
            l = w.value;
          for (let n = 0; n < l; n += 1) {
            const l = t[n];
            if (void 0 === l) return null;
            e[n] = l;
          }
          return e;
        }));
    var b, w;
    return () => {
      var t;
      const {
          noData: l,
          columCount: o,
          stickyTopOffset: a,
          stickyBottomOffset: d,
          stickyClassName: c,
          maxContentScroll: b,
        } = e,
        { isSticky: w } = i;
      return v(
        "div",
        {
          style: m(
            { overflow: "hidden" },
            w ? { top: `${a}px`, bottom: `${d}px` } : {}
          ),
          ref: u,
          class: h(n.class, { [c]: !!c }),
        },
        [
          v(
            "table",
            {
              style: {
                tableLayout: "fixed",
                visibility: l || y.value ? null : "hidden",
              },
            },
            [
              (!l || !b || p.value) &&
                v(
                  yt,
                  {
                    colWidths: y.value ? [...y.value, s.value] : [],
                    columCount: o + 1,
                    columns: x.value,
                  },
                  null
                ),
              null === (t = r.default) || void 0 === t
                ? void 0
                : t.call(
                    r,
                    m(m({}, e), {
                      stickyOffsets: g.value,
                      columns: f.value,
                      flattenColumns: x.value,
                    })
                  ),
            ]
          ),
        ]
      );
    };
  },
});
function Bt(e) {
  for (
    var t = arguments.length, l = new Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    l[n - 1] = arguments[n];
  return H(
    (function (e) {
      for (var t = -1, l = null == e ? 0 : e.length, n = {}; ++t < l; ) {
        var o = e[t];
        n[o[0]] = o[1];
      }
      return n;
    })(l.map((t) => [t, B(e, t)]))
  );
}
const zt = [],
  Ht = {},
  Kt = "rc-table-internal-hook",
  At = a({
    name: "VcTable",
    inheritAttrs: !1,
    props: [
      "prefixCls",
      "data",
      "columns",
      "rowKey",
      "tableLayout",
      "scroll",
      "rowClassName",
      "title",
      "footer",
      "id",
      "showHeader",
      "components",
      "customRow",
      "customHeaderRow",
      "direction",
      "expandFixed",
      "expandColumnWidth",
      "expandedRowKeys",
      "defaultExpandedRowKeys",
      "expandedRowRender",
      "expandRowByClick",
      "expandIcon",
      "onExpand",
      "onExpandedRowsChange",
      "onUpdate:expandedRowKeys",
      "defaultExpandAllRows",
      "indentSize",
      "expandIconColumnIndex",
      "expandedRowClassName",
      "childrenColumnName",
      "rowExpandable",
      "sticky",
      "transformColumns",
      "internalHooks",
      "internalRefs",
      "canExpandable",
      "onUpdateInternalRefs",
      "transformCellText",
    ],
    emits: [
      "expand",
      "expandedRowsChange",
      "updateInternalRefs",
      "update:expandedRowKeys",
    ],
    setup(t, a) {
      let { attrs: s, slots: u, emit: d } = a;
      const c = l(() => t.data || zt),
        p = l(() => !!c.value.length),
        f = l(() => Le(t.components, {})),
        g = (e, t) => We(f.value, e) || t,
        y = l(() => {
          const e = t.rowKey;
          return "function" == typeof e ? e : (t) => t && t[e];
        }),
        b = l(() => t.expandIcon || Tt),
        w = l(() => t.childrenColumnName || "children"),
        S = l(() =>
          t.expandedRowRender
            ? "row"
            : !(
                !t.canExpandable &&
                !c.value.some((e) => e && "object" == typeof e && e[w.value])
              ) && "nest"
        ),
        $ = n([]),
        k = C(() => {
          t.defaultExpandedRowKeys && ($.value = t.defaultExpandedRowKeys),
            t.defaultExpandAllRows &&
              ($.value = (function (e, t, l) {
                const n = [];
                return (
                  (function e(o) {
                    (o || []).forEach((o, r) => {
                      n.push(t(o, r)), e(o[l]);
                    });
                  })(e),
                  n
                );
              })(c.value, y.value, w.value));
        });
      k();
      const R = l(() => new Set(t.expandedRowKeys || $.value || [])),
        E = (e) => {
          const t = y.value(e, c.value.indexOf(e));
          let l;
          const n = R.value.has(t);
          n ? (R.value.delete(t), (l = [...R.value])) : (l = [...R.value, t]),
            ($.value = l),
            d("expand", !n, e),
            d("update:expandedRowKeys", l),
            d("expandedRowsChange", l);
        },
        I = T(0),
        [K, N] = ht(
          m(m({}, W(t)), {
            expandable: l(() => !!t.expandedRowRender),
            expandedKeys: R,
            getRowKey: y,
            onTriggerExpand: E,
            expandIcon: b,
          }),
          l(() => (t.internalHooks === Kt ? t.transformColumns : null))
        ),
        j = l(() => ({ columns: K.value, flattenColumns: N.value })),
        D = T(),
        U = T(),
        G = T(),
        Y = T({ scrollWidth: 0, clientWidth: 0 }),
        q = T(),
        [J, Q] = F(!1),
        [Z, ee] = F(!1),
        [te, le] = xt(new Map()),
        ne = l(() => Fe(N.value)),
        oe = l(() => ne.value.map((e) => te.value.get(e))),
        re = l(() => N.value.length),
        ae =
          ((ie = oe),
          (se = re),
          (ue = B(t, "direction")),
          l(() => {
            const e = [],
              t = [];
            let l = 0,
              n = 0;
            const o = ie.value,
              r = se.value,
              a = ue.value;
            for (let i = 0; i < r; i += 1)
              if ("rtl" === a) {
                (t[i] = n), (n += o[i] || 0);
                const a = r - i - 1;
                (e[a] = l), (l += o[a] || 0);
              } else {
                (e[i] = l), (l += o[i] || 0);
                const a = r - i - 1;
                (t[a] = n), (n += o[a] || 0);
              }
            return { left: e, right: t };
          }));
      var ie, se, ue;
      const de = l(() => t.scroll && _e(t.scroll.y)),
        ce = l(() => (t.scroll && _e(t.scroll.x)) || Boolean(t.expandFixed)),
        pe = l(
          () =>
            ce.value &&
            N.value.some((e) => {
              let { fixed: t } = e;
              return t;
            })
        ),
        fe = T(),
        ve = (function (e, t) {
          return l(() => {
            const {
                offsetHeader: l = 0,
                offsetSummary: n = 0,
                offsetScroll: o = 0,
                getContainer: r = () => Ot,
              } = "object" == typeof e.value ? e.value : {},
              a = r() || Ot,
              i = !!e.value;
            return {
              isSticky: i,
              stickyClassName: i ? `${t.value}-sticky-holder` : "",
              offsetHeader: l,
              offsetSummary: n,
              offsetScroll: o,
              container: a,
            };
          });
        })(B(t, "sticky"), B(t, "prefixCls")),
        me = H({}),
        he = l(() => {
          const e = Object.values(me)[0];
          return (de.value || ve.value.isSticky) && e;
        }),
        xe = T({}),
        ge = T({}),
        ye = T({});
      C(() => {
        de.value &&
          (ge.value = { overflowY: "scroll", maxHeight: L(t.scroll.y) }),
          ce.value &&
            ((xe.value = { overflowX: "auto" }),
            de.value || (ge.value = { overflowY: "hidden" }),
            (ye.value = {
              width: !0 === t.scroll.x ? "auto" : L(t.scroll.x),
              minWidth: "100%",
            }));
      });
      const [be, we] = (function () {
        const e = T(null),
          t = T();
        function l() {
          clearTimeout(t.value);
        }
        return (
          z(() => {
            l();
          }),
          [
            function (n) {
              (e.value = n),
                l(),
                (t.value = setTimeout(() => {
                  (e.value = null), (t.value = void 0);
                }, 100));
            },
            function () {
              return e.value;
            },
          ]
        );
      })();
      function Ce(e, t) {
        if (!t) return;
        if ("function" == typeof t) return void t(e);
        const l = t.$el || t;
        l.scrollLeft !== e && (l.scrollLeft = e);
      }
      const Se = (e) => {
          let { currentTarget: l, scrollLeft: n } = e;
          var o;
          const r = "rtl" === t.direction,
            a = "number" == typeof n ? n : l.scrollLeft,
            i = l || Ht;
          if (
            ((we() && we() !== i) ||
              (be(i),
              Ce(a, U.value),
              Ce(a, G.value),
              Ce(a, q.value),
              Ce(
                a,
                null === (o = fe.value) || void 0 === o
                  ? void 0
                  : o.setScrollLeft
              )),
            l)
          ) {
            const { scrollWidth: e, clientWidth: t } = l;
            r ? (Q(-a < e - t), ee(-a > 0)) : (Q(a > 0), ee(a < e - t));
          }
        },
        $e = () => {
          ce.value && G.value
            ? Se({ currentTarget: G.value })
            : (Q(!1), ee(!1));
        };
      let ke;
      const Re = (e) => {
          e !== I.value &&
            ($e(), (I.value = D.value ? D.value.offsetWidth : e));
        },
        Ee = (e) => {
          let { width: t } = e;
          clearTimeout(ke),
            0 !== I.value
              ? (ke = setTimeout(() => {
                  Re(t);
                }, 100))
              : Re(t);
        };
      i(
        [ce, () => t.data, () => t.columns],
        () => {
          ce.value && $e();
        },
        { flush: "post" }
      );
      const [Te, Ie] = F(0);
      o(() => {
        Ye.value = Ye.value || r("position", "sticky");
      }),
        o(() => {
          A(() => {
            var e, t;
            $e(),
              Ie(_(G.value).width),
              (Y.value = {
                scrollWidth:
                  (null === (e = G.value) || void 0 === e
                    ? void 0
                    : e.scrollWidth) || 0,
                clientWidth:
                  (null === (t = G.value) || void 0 === t
                    ? void 0
                    : t.clientWidth) || 0,
              });
          });
        }),
        M(() => {
          A(() => {
            var e, t;
            const l =
                (null === (e = G.value) || void 0 === e
                  ? void 0
                  : e.scrollWidth) || 0,
              n =
                (null === (t = G.value) || void 0 === t
                  ? void 0
                  : t.clientWidth) || 0;
            (Y.value.scrollWidth === l && Y.value.clientWidth === n) ||
              (Y.value = { scrollWidth: l, clientWidth: n });
          });
        }),
        C(
          () => {
            t.internalHooks === Kt &&
              t.internalRefs &&
              t.onUpdateInternalRefs({
                body: G.value ? G.value.$el || G.value : null,
              });
          },
          { flush: "post" }
        );
      const Oe = l(() =>
          t.tableLayout
            ? t.tableLayout
            : pe.value
            ? "max-content" === t.scroll.x
              ? "auto"
              : "fixed"
            : de.value ||
              ve.value.isSticky ||
              N.value.some((e) => {
                let { ellipsis: t } = e;
                return t;
              })
            ? "fixed"
            : "auto"
        ),
        Pe = () => {
          var e;
          return p.value
            ? null
            : (null === (e = u.emptyText) || void 0 === e
                ? void 0
                : e.call(u)) || "No Data";
        };
      ((t) => {
        e(Ne, t);
      })(
        H(
          m(m({}, W(Bt(t, "prefixCls", "direction", "transformCellText"))), {
            getComponent: g,
            scrollbarSize: Te,
            fixedInfoList: l(() =>
              N.value.map((e, l) => Qe(l, l, N.value, ae.value, t.direction))
            ),
            isSticky: l(() => ve.value.isSticky),
            summaryCollect: (e, t) => {
              t ? (me[e] = t) : delete me[e];
            },
          })
        )
      ),
        ((t) => {
          e(it, t);
        })(
          H(
            m(
              m(
                {},
                W(
                  Bt(
                    t,
                    "rowClassName",
                    "expandedRowClassName",
                    "expandRowByClick",
                    "expandedRowRender",
                    "expandIconColumnIndex",
                    "indentSize"
                  )
                )
              ),
              {
                columns: K,
                flattenColumns: N,
                tableLayout: Oe,
                expandIcon: b,
                expandableType: S,
                onTriggerExpand: E,
              }
            )
          )
        ),
        ((t) => {
          e(ct, t);
        })({
          onColumnResize: (e, t) => {
            V(D.value) &&
              le((l) => {
                if (l.get(e) !== t) {
                  const n = new Map(l);
                  return n.set(e, t), n;
                }
                return l;
              });
          },
        }),
        ((t) => {
          e(ot, t);
        })({
          componentWidth: I,
          fixHeader: de,
          fixColumn: pe,
          horizonScroll: ce,
        });
      const Be = () =>
          v(
            pt,
            {
              data: c.value,
              measureColumnWidth: de.value || ce.value || ve.value.isSticky,
              expandedKeys: R.value,
              rowExpandable: t.rowExpandable,
              getRowKey: y.value,
              customRow: t.customRow,
              childrenColumnName: w.value,
            },
            { emptyNode: Pe }
          ),
        ze = () =>
          v(
            yt,
            {
              colWidths: N.value.map((e) => {
                let { width: t } = e;
                return t;
              }),
              columns: N.value,
            },
            null
          );
      return () => {
        var e;
        const {
            prefixCls: l,
            scroll: n,
            tableLayout: o,
            direction: r,
            title: a = u.title,
            footer: i = u.footer,
            id: d,
            showHeader: p,
            customHeaderRow: f,
          } = t,
          {
            isSticky: y,
            offsetHeader: b,
            offsetSummary: w,
            offsetScroll: C,
            stickyClassName: S,
            container: $,
          } = ve.value,
          k = g(["table"], "table"),
          R = g(["body"]),
          E =
            null === (e = u.summary) || void 0 === e
              ? void 0
              : e.call(u, { pageData: c.value });
        let T = () => null;
        const I = {
          colWidths: oe.value,
          columCount: N.value.length,
          stickyOffsets: ae.value,
          customHeaderRow: f,
          fixHeader: de.value,
          scroll: n,
        };
        if (de.value || y) {
          let e = () => null;
          "function" == typeof R
            ? ((e = () =>
                R(c.value, { scrollbarSize: Te.value, ref: G, onScroll: Se })),
              (I.colWidths = N.value.map((e, t) => {
                let { width: l } = e;
                const n = t === K.value.length - 1 ? l - Te.value : l;
                return "number" != typeof n || Number.isNaN(n) ? 0 : n;
              })))
            : (e = () =>
                v(
                  "div",
                  {
                    style: m(m({}, xe.value), ge.value),
                    onScroll: Se,
                    ref: G,
                    class: h(`${l}-body`),
                  },
                  [
                    v(
                      k,
                      { style: m(m({}, ye.value), { tableLayout: Oe.value }) },
                      {
                        default: () => [
                          ze(),
                          Be(),
                          !he.value &&
                            E &&
                            v(
                              Rt,
                              {
                                stickyOffsets: ae.value,
                                flattenColumns: N.value,
                              },
                              { default: () => [E] }
                            ),
                        ],
                      }
                    ),
                  ]
                ));
          const t = m(
            m(
              m(
                {
                  noData: !c.value.length,
                  maxContentScroll: ce.value && "max-content" === n.x,
                },
                I
              ),
              j.value
            ),
            { direction: r, stickyClassName: S, onScroll: Se }
          );
          T = () =>
            v(P, null, [
              !1 !== p &&
                v(
                  Pt,
                  x(
                    x({}, t),
                    {},
                    { stickyTopOffset: b, class: `${l}-header`, ref: U }
                  ),
                  {
                    default: (e) =>
                      v(P, null, [
                        v(nt, e, null),
                        "top" === he.value && v(Rt, e, { default: () => [E] }),
                      ]),
                  }
                ),
              e(),
              he.value &&
                "top" !== he.value &&
                v(
                  Pt,
                  x(
                    x({}, t),
                    {},
                    { stickyBottomOffset: w, class: `${l}-summary`, ref: q }
                  ),
                  { default: (e) => v(Rt, e, { default: () => [E] }) }
                ),
              y &&
                G.value &&
                v(
                  It,
                  {
                    ref: fe,
                    offsetScroll: C,
                    scrollBodyRef: G,
                    onScroll: Se,
                    container: $,
                    scrollBodySizeInfo: Y.value,
                  },
                  null
                ),
            ]);
        } else
          T = () =>
            v(
              "div",
              {
                style: m(m({}, xe.value), ge.value),
                class: h(`${l}-content`),
                onScroll: Se,
                ref: G,
              },
              [
                v(
                  k,
                  { style: m(m({}, ye.value), { tableLayout: Oe.value }) },
                  {
                    default: () => [
                      ze(),
                      !1 !== p && v(nt, x(x({}, I), j.value), null),
                      Be(),
                      E &&
                        v(
                          Rt,
                          { stickyOffsets: ae.value, flattenColumns: N.value },
                          { default: () => [E] }
                        ),
                    ],
                  }
                ),
              ]
            );
        const B = X(s, { aria: !0, data: !0 }),
          z = () =>
            v(
              "div",
              x(
                x({}, B),
                {},
                {
                  class: h(l, {
                    [`${l}-rtl`]: "rtl" === r,
                    [`${l}-ping-left`]: J.value,
                    [`${l}-ping-right`]: Z.value,
                    [`${l}-layout-fixed`]: "fixed" === o,
                    [`${l}-fixed-header`]: de.value,
                    [`${l}-fixed-column`]: pe.value,
                    [`${l}-scroll-horizontal`]: ce.value,
                    [`${l}-has-fix-left`]: N.value[0] && N.value[0].fixed,
                    [`${l}-has-fix-right`]:
                      N.value[re.value - 1] &&
                      "right" === N.value[re.value - 1].fixed,
                    [s.class]: s.class,
                  }),
                  style: s.style,
                  id: d,
                  ref: D,
                }
              ),
              [
                a &&
                  v(
                    bt,
                    { class: `${l}-title` },
                    { default: () => [a(c.value)] }
                  ),
                v("div", { class: `${l}-container` }, [T()]),
                i &&
                  v(
                    bt,
                    { class: `${l}-footer` },
                    { default: () => [i(c.value)] }
                  ),
              ]
            );
        return ce.value ? v(O, { onResize: Ee }, { default: z }) : z();
      };
    },
  });
const Nt = 10;
function jt(e, t, n) {
  const o = l(() => (t.value && "object" == typeof t.value ? t.value : {})),
    r = l(() => o.value.total || 0),
    [a, i] = F(() => ({
      current: "defaultCurrent" in o.value ? o.value.defaultCurrent : 1,
      pageSize: "defaultPageSize" in o.value ? o.value.defaultPageSize : Nt,
    })),
    s = l(() => {
      const t = (function () {
          const e = m({}, arguments.length <= 0 ? void 0 : arguments[0]);
          for (let t = 1; t < arguments.length; t++) {
            const l = t < 0 || arguments.length <= t ? void 0 : arguments[t];
            l &&
              Object.keys(l).forEach((t) => {
                const n = l[t];
                void 0 !== n && (e[t] = n);
              });
          }
          return e;
        })(a.value, o.value, { total: r.value > 0 ? r.value : e.value }),
        l = Math.ceil((r.value || e.value) / t.pageSize);
      return t.current > l && (t.current = l || 1), t;
    }),
    u = (e, l) => {
      !1 !== t.value &&
        i({ current: null != e ? e : 1, pageSize: l || s.value.pageSize });
    },
    d = (e, l) => {
      var r, a;
      t.value &&
        (null === (a = (r = o.value).onChange) ||
          void 0 === a ||
          a.call(r, e, l)),
        u(e, l),
        n(e, l || s.value.pageSize);
    };
  return [
    l(() => (!1 === t.value ? {} : m(m({}, s.value), { onChange: d }))),
    u,
  ];
}
const Dt = {},
  Wt = "SELECT_ALL",
  Ft = "SELECT_INVERT",
  Lt = "SELECT_NONE",
  _t = [];
function Mt(e, t) {
  let l = [];
  return (
    (t || []).forEach((t) => {
      l.push(t),
        t && "object" == typeof t && e in t && (l = [...l, ...Mt(e, t[e])]);
    }),
    l
  );
}
function Xt(e, t) {
  const o = l(() => {
      const t = e.value || {},
        { checkStrictly: l = !0 } = t;
      return m(m({}, t), { checkStrictly: l });
    }),
    [r, a] = U(
      o.value.selectedRowKeys || o.value.defaultSelectedRowKeys || _t,
      { value: l(() => o.value.selectedRowKeys) }
    ),
    i = n(new Map()),
    s = (e) => {
      if (o.value.preserveSelectedRowKeys) {
        const l = new Map();
        e.forEach((e) => {
          let n = t.getRecordByKey(e);
          !n && i.value.has(e) && (n = i.value.get(e)), l.set(e, n);
        }),
          (i.value = l);
      }
    };
  C(() => {
    s(r.value);
  });
  const u = l(() =>
      o.value.checkStrictly
        ? null
        : Ee(t.data.value, {
            externalGetKey: t.getRowKey.value,
            childrenPropName: t.childrenColumnName.value,
          }).keyEntities
    ),
    d = l(() => Mt(t.childrenColumnName.value, t.pageData.value)),
    c = l(() => {
      const e = new Map(),
        l = t.getRowKey.value,
        n = o.value.getCheckboxProps;
      return (
        d.value.forEach((t, o) => {
          const r = l(t, o),
            a = (n ? n(t) : null) || {};
          e.set(r, a);
        }),
        e
      );
    }),
    { maxLevel: p, levelEntities: f } = Te(u),
    h = (e) => {
      var l;
      return !!(null === (l = c.value.get(t.getRowKey.value(e))) || void 0 === l
        ? void 0
        : l.disabled);
    },
    g = l(() => {
      if (o.value.checkStrictly) return [r.value || [], []];
      const { checkedKeys: e, halfCheckedKeys: t } = Ie(
        r.value,
        !0,
        u.value,
        p.value,
        f.value,
        h
      );
      return [e || [], t];
    }),
    y = l(() => g.value[0]),
    b = l(() => g.value[1]),
    w = l(() => {
      const e = "radio" === o.value.type ? y.value.slice(0, 1) : y.value;
      return new Set(e);
    }),
    $ = l(() => ("radio" === o.value.type ? new Set() : new Set(b.value))),
    [k, R] = F(null),
    E = (e) => {
      let l, n;
      s(e);
      const { preserveSelectedRowKeys: r, onChange: u } = o.value,
        { getRecordByKey: d } = t;
      r
        ? ((l = e), (n = e.map((e) => i.value.get(e))))
        : ((l = []),
          (n = []),
          e.forEach((e) => {
            const t = d(e);
            void 0 !== t && (l.push(e), n.push(t));
          })),
        a(l),
        null == u || u(l, n);
    },
    T = (e, l, n, r) => {
      const { onSelect: a } = o.value,
        { getRecordByKey: i } = t || {};
      if (a) {
        const t = n.map((e) => i(e));
        a(i(e), l, t, r);
      }
      E(n);
    },
    I = l(() => {
      const {
          onSelectInvert: e,
          onSelectNone: l,
          selections: n,
          hideSelectAll: r,
        } = o.value,
        { data: a, pageData: i, getRowKey: s, locale: u } = t;
      if (!n || r) return null;
      return (!0 === n ? [Wt, Ft, Lt] : n).map((t) =>
        t === Wt
          ? {
              key: "all",
              text: u.value.selectionAll,
              onSelect() {
                E(
                  a.value
                    .map((e, t) => s.value(e, t))
                    .filter((e) => {
                      const t = c.value.get(e);
                      return (
                        !(null == t ? void 0 : t.disabled) || w.value.has(e)
                      );
                    })
                );
              },
            }
          : t === Ft
          ? {
              key: "invert",
              text: u.value.selectInvert,
              onSelect() {
                const t = new Set(w.value);
                i.value.forEach((e, l) => {
                  const n = s.value(e, l),
                    o = c.value.get(n);
                  (null == o ? void 0 : o.disabled) ||
                    (t.has(n) ? t.delete(n) : t.add(n));
                });
                const l = Array.from(t);
                e &&
                  (S(
                    !1,
                    "Table",
                    "`onSelectInvert` will be removed in future. Please use `onChange` instead."
                  ),
                  e(l)),
                  E(l);
              },
            }
          : t === Lt
          ? {
              key: "none",
              text: u.value.selectNone,
              onSelect() {
                null == l || l(),
                  E(
                    Array.from(w.value).filter((e) => {
                      const t = c.value.get(e);
                      return null == t ? void 0 : t.disabled;
                    })
                  );
              },
            }
          : t
      );
    }),
    O = l(() => d.value.length);
  return [
    (l) => {
      var n;
      const {
          onSelectAll: r,
          onSelectMultiple: a,
          columnWidth: i,
          type: s,
          fixed: g,
          renderCell: b,
          hideSelectAll: C,
          checkStrictly: P,
        } = o.value,
        {
          prefixCls: B,
          getRecordByKey: z,
          getRowKey: H,
          expandType: K,
          getPopupContainer: A,
        } = t;
      if (!e.value) return l.filter((e) => e !== Dt);
      let N = l.slice();
      const j = new Set(w.value),
        D = d.value.map(H.value).filter((e) => !c.value.get(e).disabled),
        W = D.every((e) => j.has(e)),
        F = D.some((e) => j.has(e)),
        L = () => {
          const e = [];
          W
            ? D.forEach((t) => {
                j.delete(t), e.push(t);
              })
            : D.forEach((t) => {
                j.has(t) || (j.add(t), e.push(t));
              });
          const t = Array.from(j);
          null == r ||
            r(
              !W,
              t.map((e) => z(e)),
              e.map((e) => z(e))
            ),
            E(t);
        };
      let _, M;
      if ("radio" !== s) {
        let e;
        if (I.value) {
          const t = v(
            G,
            { getPopupContainer: A.value },
            {
              default: () => [
                I.value.map((e, t) => {
                  const { key: l, text: n, onSelect: o } = e;
                  return v(
                    G.Item,
                    {
                      key: l || t,
                      onClick: () => {
                        null == o || o(D);
                      },
                    },
                    { default: () => [n] }
                  );
                }),
              ],
            }
          );
          e = v("div", { class: `${B.value}-selection-extra` }, [
            v(
              Y,
              { overlay: t, getPopupContainer: A.value },
              { default: () => [v("span", null, [v(Re, null, null)])] }
            ),
          ]);
        }
        const t = d.value
            .map((e, t) => {
              const l = H.value(e, t),
                n = c.value.get(l) || {};
              return m({ checked: j.has(l) }, n);
            })
            .filter((e) => {
              let { disabled: t } = e;
              return t;
            }),
          l = !!t.length && t.length === O.value,
          n =
            l &&
            t.every((e) => {
              let { checked: t } = e;
              return t;
            }),
          o =
            l &&
            t.some((e) => {
              let { checked: t } = e;
              return t;
            });
        _ =
          !C &&
          v("div", { class: `${B.value}-selection` }, [
            v(
              ze,
              {
                checked: l ? n : !!O.value && W,
                indeterminate: l ? !n && o : !W && F,
                onChange: L,
                disabled: 0 === O.value || l,
                "aria-label": e ? "Custom selection" : "Select all",
                skipGroup: !0,
              },
              null
            ),
            e,
          ]);
      }
      M =
        "radio" === s
          ? (e) => {
              let { record: t, index: l } = e;
              const n = H.value(t, l),
                o = j.has(n);
              return {
                node: v(
                  He,
                  x(
                    x({}, c.value.get(n)),
                    {},
                    {
                      checked: o,
                      onClick: (e) => e.stopPropagation(),
                      onChange: (e) => {
                        j.has(n) || T(n, !0, [n], e.nativeEvent);
                      },
                    }
                  ),
                  null
                ),
                checked: o,
              };
            }
          : (e) => {
              let { record: t, index: l } = e;
              var n;
              const o = H.value(t, l),
                r = j.has(o),
                i = $.value.has(o),
                s = c.value.get(o);
              let d;
              return (
                "nest" === K.value
                  ? ((d = i),
                    S(
                      "boolean" !=
                        typeof (null == s ? void 0 : s.indeterminate),
                      "Table",
                      "set `indeterminate` using `rowSelection.getCheckboxProps` is not allowed with tree structured dataSource."
                    ))
                  : (d =
                      null !== (n = null == s ? void 0 : s.indeterminate) &&
                      void 0 !== n
                        ? n
                        : i),
                {
                  node: v(
                    ze,
                    x(
                      x({}, s),
                      {},
                      {
                        indeterminate: d,
                        checked: r,
                        skipGroup: !0,
                        onClick: (e) => e.stopPropagation(),
                        onChange: (e) => {
                          let { nativeEvent: t } = e;
                          const { shiftKey: l } = t;
                          let n = -1,
                            i = -1;
                          if (l && P) {
                            const e = new Set([k.value, o]);
                            D.some((t, l) => {
                              if (e.has(t)) {
                                if (-1 !== n) return (i = l), !0;
                                n = l;
                              }
                              return !1;
                            });
                          }
                          if (-1 !== i && n !== i && P) {
                            const e = D.slice(n, i + 1),
                              t = [];
                            r
                              ? e.forEach((e) => {
                                  j.has(e) && (t.push(e), j.delete(e));
                                })
                              : e.forEach((e) => {
                                  j.has(e) || (t.push(e), j.add(e));
                                });
                            const l = Array.from(j);
                            null == a ||
                              a(
                                !r,
                                l.map((e) => z(e)),
                                t.map((e) => z(e))
                              ),
                              E(l);
                          } else {
                            const e = y.value;
                            if (P) {
                              const l = r ? Oe(e, o) : Pe(e, o);
                              T(o, !r, l, t);
                            } else {
                              const l = Ie(
                                  [...e, o],
                                  !0,
                                  u.value,
                                  p.value,
                                  f.value,
                                  h
                                ),
                                { checkedKeys: n, halfCheckedKeys: a } = l;
                              let i = n;
                              if (r) {
                                const e = new Set(n);
                                e.delete(o),
                                  (i = Ie(
                                    Array.from(e),
                                    { checked: !1, halfCheckedKeys: a },
                                    u.value,
                                    p.value,
                                    f.value,
                                    h
                                  ).checkedKeys);
                              }
                              T(o, !r, i, t);
                            }
                          }
                          R(o);
                        },
                      }
                    ),
                    null
                  ),
                  checked: r,
                }
              );
            };
      if (!N.includes(Dt))
        if (
          0 ===
          N.findIndex((e) => {
            var t;
            return (
              "EXPAND_COLUMN" ===
              (null === (t = e[Ue]) || void 0 === t ? void 0 : t.columnType)
            );
          })
        ) {
          const [e, ...t] = N;
          N = [e, Dt, ...t];
        } else N = [Dt, ...N];
      const X = N.indexOf(Dt);
      N = N.filter((e, t) => e !== Dt || t === X);
      const V = N[X - 1],
        U = N[X + 1];
      let q = g;
      void 0 === q &&
        (void 0 !== (null == U ? void 0 : U.fixed)
          ? (q = U.fixed)
          : void 0 !== (null == V ? void 0 : V.fixed) && (q = V.fixed)),
        q &&
          V &&
          "EXPAND_COLUMN" ===
            (null === (n = V[Ue]) || void 0 === n ? void 0 : n.columnType) &&
          void 0 === V.fixed &&
          (V.fixed = q);
      const J = {
        fixed: q,
        width: i,
        className: `${B.value}-selection-column`,
        title: o.value.columnTitle || _,
        customRender: (e) => {
          let { record: t, index: l } = e;
          const { node: n, checked: o } = M({ record: t, index: l });
          return b ? b(o, t, l, n) : n;
        },
        [Ue]: { class: `${B.value}-selection-col` },
      };
      return N.map((e) => (e === Dt ? J : e));
    },
    w,
  ];
}
var Vt = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z",
        },
      },
    ],
  },
  name: "caret-down",
  theme: "outlined",
};
function Ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(l).filter(function (e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        Gt(e, t, l[t]);
      });
  }
  return e;
}
function Gt(e, t, l) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = l),
    e
  );
}
var Yt = function (e, t) {
  var l = Ut({}, e, t.attrs);
  return v(q, Ut({}, l, { icon: Vt }), null);
};
(Yt.displayName = "CaretDownOutlined"), (Yt.inheritAttrs = !1);
var qt = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z",
        },
      },
    ],
  },
  name: "caret-up",
  theme: "outlined",
};
function Jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(l).filter(function (e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        Qt(e, t, l[t]);
      });
  }
  return e;
}
function Qt(e, t, l) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = l),
    e
  );
}
var Zt = function (e, t) {
  var l = Jt({}, e, t.attrs);
  return v(q, Jt({}, l, { icon: qt }), null);
};
(Zt.displayName = "CaretUpOutlined"), (Zt.inheritAttrs = !1);
var el = function (e, t) {
  var l = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (l[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (l[n[o]] = e[n[o]]);
  }
  return l;
};
function tl(e, t) {
  return "key" in e && void 0 !== e.key && null !== e.key
    ? e.key
    : e.dataIndex
    ? Array.isArray(e.dataIndex)
      ? e.dataIndex.join(".")
      : e.dataIndex
    : t;
}
function ll(e, t) {
  return t ? `${t}-${e}` : `${e}`;
}
function nl(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function ol() {
  const e = p(
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
    ),
    t = [];
  return (
    e.forEach((e) => {
      var l, n, o, r;
      if (!e) return;
      const a = e.key,
        i = (null === (l = e.props) || void 0 === l ? void 0 : l.style) || {},
        s = (null === (n = e.props) || void 0 === n ? void 0 : n.class) || "",
        u = e.props || {};
      for (const [t, v] of Object.entries(u)) u[J(t)] = v;
      const d = e.children || {},
        { default: c } = d,
        p = el(d, ["default"]),
        f = m(m(m({}, p), u), { style: i, class: s });
      if (
        (a && (f.key = a),
        null === (o = e.type) || void 0 === o
          ? void 0
          : o.__ANT_TABLE_COLUMN_GROUP)
      )
        f.children = ol("function" == typeof c ? c() : c);
      else {
        const t =
          null === (r = e.children) || void 0 === r ? void 0 : r.default;
        f.customRender = f.customRender || t;
      }
      t.push(f);
    }),
    t
  );
}
const rl = "ascend",
  al = "descend";
function il(e) {
  return (
    "object" == typeof e.sorter &&
    "number" == typeof e.sorter.multiple &&
    e.sorter.multiple
  );
}
function sl(e) {
  return "function" == typeof e
    ? e
    : !(!e || "object" != typeof e || !e.compare) && e.compare;
}
function ul(e, t, l) {
  let n = [];
  function o(e, t) {
    n.push({
      column: e,
      key: tl(e, t),
      multiplePriority: il(e),
      sortOrder: e.sortOrder,
    });
  }
  return (
    (e || []).forEach((e, r) => {
      const a = ll(r, l);
      e.children
        ? ("sortOrder" in e && o(e, a), (n = [...n, ...ul(e.children, t, a)]))
        : e.sorter &&
          ("sortOrder" in e
            ? o(e, a)
            : t &&
              e.defaultSortOrder &&
              n.push({
                column: e,
                key: tl(e, a),
                multiplePriority: il(e),
                sortOrder: e.defaultSortOrder,
              }));
    }),
    n
  );
}
function dl(e, t, l, n, o, r, a, i) {
  return (t || []).map((t, s) => {
    const u = ll(s, i);
    let d = t;
    if (d.sorter) {
      const i = d.sortDirections || o,
        s = void 0 === d.showSorterTooltip ? a : d.showSorterTooltip,
        c = tl(d, u),
        p = l.find((e) => {
          let { key: t } = e;
          return t === c;
        }),
        f = p ? p.sortOrder : null,
        x = (function (e, t) {
          return t ? e[e.indexOf(t) + 1] : e[0];
        })(i, f),
        g =
          i.includes(rl) &&
          v(
            Zt,
            {
              class: h(`${e}-column-sorter-up`, { active: f === rl }),
              role: "presentation",
            },
            null
          ),
        y =
          i.includes(al) &&
          v(
            Yt,
            {
              role: "presentation",
              class: h(`${e}-column-sorter-down`, { active: f === al }),
            },
            null
          ),
        { cancelSort: b, triggerAsc: w, triggerDesc: C } = r || {};
      let S = b;
      x === al ? (S = C) : x === rl && (S = w);
      const $ = "object" == typeof s ? s : { title: S };
      d = m(m({}, d), {
        className: h(d.className, { [`${e}-column-sort`]: f }),
        title: (l) => {
          const n = v("div", { class: `${e}-column-sorters` }, [
            v("span", { class: `${e}-column-title` }, [nl(t.title, l)]),
            v(
              "span",
              {
                class: h(`${e}-column-sorter`, {
                  [`${e}-column-sorter-full`]: !(!g || !y),
                }),
              },
              [v("span", { class: `${e}-column-sorter-inner` }, [g, y])]
            ),
          ]);
          return s ? v(Q, $, { default: () => [n] }) : n;
        },
        customHeaderCell: (l) => {
          const o = (t.customHeaderCell && t.customHeaderCell(l)) || {},
            r = o.onClick,
            a = o.onKeydown;
          return (
            (o.onClick = (e) => {
              n({ column: t, key: c, sortOrder: x, multiplePriority: il(t) }),
                r && r(e);
            }),
            (o.onKeydown = (e) => {
              e.keyCode === Z.ENTER &&
                (n({
                  column: t,
                  key: c,
                  sortOrder: x,
                  multiplePriority: il(t),
                }),
                null == a || a(e));
            }),
            f && (o["aria-sort"] = "ascend" === f ? "ascending" : "descending"),
            (o.class = h(o.class, `${e}-column-has-sorters`)),
            (o.tabindex = 0),
            o
          );
        },
      });
    }
    return (
      "children" in d &&
        (d = m(m({}, d), { children: dl(e, d.children, l, n, o, r, a, u) })),
      d
    );
  });
}
function cl(e) {
  const { column: t, sortOrder: l } = e;
  return { column: t, order: l, field: t.dataIndex, columnKey: t.key };
}
function pl(e) {
  const t = e
    .filter((e) => {
      let { sortOrder: t } = e;
      return t;
    })
    .map(cl);
  return 0 === t.length && e.length
    ? m(m({}, cl(e[e.length - 1])), { column: void 0 })
    : t.length <= 1
    ? t[0] || {}
    : t;
}
function fl(e, t, l) {
  const n = t.slice().sort((e, t) => t.multiplePriority - e.multiplePriority),
    o = e.slice(),
    r = n.filter((e) => {
      let {
        column: { sorter: t },
        sortOrder: l,
      } = e;
      return sl(t) && l;
    });
  return r.length
    ? o
        .sort((e, t) => {
          for (let l = 0; l < r.length; l += 1) {
            const n = r[l],
              {
                column: { sorter: o },
                sortOrder: a,
              } = n,
              i = sl(o);
            if (i && a) {
              const l = i(e, t, a);
              if (0 !== l) return a === rl ? l : -l;
            }
          }
          return 0;
        })
        .map((e) => {
          const n = e[l];
          return n ? m(m({}, e), { [l]: fl(n, t, l) }) : e;
        })
    : o;
}
function vl(e) {
  let {
    prefixCls: t,
    mergedColumns: n,
    onSorterChange: o,
    sortDirections: r,
    tableLocale: a,
    showSorterTooltip: i,
  } = e;
  const [s, u] = F(ul(n.value, !0)),
    d = l(() => {
      let e = !0;
      const t = ul(n.value, !1);
      if (!t.length) return s.value;
      const l = [];
      function o(t) {
        e ? l.push(t) : l.push(m(m({}, t), { sortOrder: null }));
      }
      let r = null;
      return (
        t.forEach((t) => {
          null === r
            ? (o(t),
              t.sortOrder && (!1 === t.multiplePriority ? (e = !1) : (r = !0)))
            : ((r && !1 !== t.multiplePriority) || (e = !1), o(t));
        }),
        l
      );
    }),
    c = l(() => {
      const e = d.value.map((e) => {
        let { column: t, sortOrder: l } = e;
        return { column: t, order: l };
      });
      return {
        sortColumns: e,
        sortColumn: e[0] && e[0].column,
        sortOrder: e[0] && e[0].order,
      };
    });
  function p(e) {
    let t;
    (t =
      !1 !== e.multiplePriority &&
      d.value.length &&
      !1 !== d.value[0].multiplePriority
        ? [
            ...d.value.filter((t) => {
              let { key: l } = t;
              return l !== e.key;
            }),
            e,
          ]
        : [e]),
      u(t),
      o(pl(t), t);
  }
  const f = l(() => pl(d.value));
  return [
    (e) => dl(t.value, e, d.value, p, r.value, a.value, i.value),
    d,
    c,
    f,
  ];
}
var ml = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z",
        },
      },
    ],
  },
  name: "filter",
  theme: "filled",
};
function hl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(l).filter(function (e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        xl(e, t, l[t]);
      });
  }
  return e;
}
function xl(e, t, l) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = l),
    e
  );
}
var gl = function (e, t) {
  var l = hl({}, e, t.attrs);
  return v(q, hl({}, l, { icon: ml }), null);
};
(gl.displayName = "FilterFilled"), (gl.inheritAttrs = !1);
const yl = (e) => {
    const { keyCode: t } = e;
    t === Z.ENTER && e.stopPropagation();
  },
  bl = (e, t) => {
    let { slots: l } = t;
    var n;
    return v("div", { onClick: (e) => e.stopPropagation(), onKeydown: yl }, [
      null === (n = l.default) || void 0 === n ? void 0 : n.call(l),
    ]);
  },
  wl = a({
    compatConfig: { MODE: 3 },
    name: "FilterSearch",
    inheritAttrs: !1,
    props: {
      value: ee(),
      onChange: te(),
      filterSearch: le([Boolean, Function]),
      tablePrefixCls: ee(),
      locale: ne(),
    },
    setup: (e) => () => {
      const {
        value: t,
        onChange: l,
        filterSearch: n,
        tablePrefixCls: o,
        locale: r,
      } = e;
      return n
        ? v("div", { class: `${o}-filter-dropdown-search` }, [
            v(
              oe,
              {
                placeholder: r.filterSearchPlaceholder,
                onChange: l,
                value: t,
                htmlSize: 1,
                class: `${o}-filter-dropdown-search-input`,
              },
              { prefix: () => v(re, null, null) }
            ),
          ])
        : null;
    },
  });
function Cl(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  const n = new Set();
  return (function e(t, o) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    const a = n.has(t);
    if ((ae(!a, "Warning: There may be circular references"), a)) return !1;
    if (t === o) return !0;
    if (l && r > 1) return !1;
    n.add(t);
    const i = r + 1;
    if (Array.isArray(t)) {
      if (!Array.isArray(o) || t.length !== o.length) return !1;
      for (let l = 0; l < t.length; l++) if (!e(t[l], o[l], i)) return !1;
      return !0;
    }
    if (t && o && "object" == typeof t && "object" == typeof o) {
      const l = Object.keys(t);
      return (
        l.length === Object.keys(o).length && l.every((l) => e(t[l], o[l], i))
      );
    }
    return !1;
  })(e, t);
}
const { SubMenu: Sl, Item: $l } = G;
function kl(e, t) {
  return (
    ("string" == typeof t || "number" == typeof t) &&
    (null == t
      ? void 0
      : t.toString().toLowerCase().includes(e.trim().toLowerCase()))
  );
}
function Rl(e) {
  let {
    filters: t,
    prefixCls: l,
    filteredKeys: n,
    filterMultiple: o,
    searchValue: r,
    filterSearch: a,
  } = e;
  return t.map((e, t) => {
    const i = String(e.value);
    if (e.children)
      return v(
        Sl,
        { key: i || t, title: e.text, popupClassName: `${l}-dropdown-submenu` },
        {
          default: () => [
            Rl({
              filters: e.children,
              prefixCls: l,
              filteredKeys: n,
              filterMultiple: o,
              searchValue: r,
              filterSearch: a,
            }),
          ],
        }
      );
    const s = o ? ze : He,
      u = v(
        $l,
        { key: void 0 !== e.value ? i : t },
        {
          default: () => [
            v(s, { checked: n.includes(i) }, null),
            v("span", null, [e.text]),
          ],
        }
      );
    return r.trim()
      ? "function" == typeof a
        ? a(r, e)
          ? u
          : void 0
        : kl(r, e.text)
        ? u
        : void 0
      : u;
  });
}
const El = a({
  name: "FilterDropdown",
  props: [
    "tablePrefixCls",
    "prefixCls",
    "dropdownPrefixCls",
    "column",
    "filterState",
    "filterMultiple",
    "filterMode",
    "filterSearch",
    "columnKey",
    "triggerFilter",
    "locale",
    "getPopupContainer",
  ],
  setup(e, t) {
    let { slots: o } = t;
    const r = Xe(),
      a = l(() => {
        var t;
        return null !== (t = e.filterMode) && void 0 !== t ? t : "menu";
      }),
      s = l(() => {
        var t;
        return null !== (t = e.filterSearch) && void 0 !== t && t;
      }),
      u = l(
        () => e.column.filterDropdownOpen || e.column.filterDropdownVisible
      ),
      d = l(
        () =>
          e.column.onFilterDropdownOpenChange ||
          e.column.onFilterDropdownVisibleChange
      ),
      c = n(!1),
      p = l(() => {
        var t;
        return !(
          !e.filterState ||
          (!(null === (t = e.filterState.filteredKeys) || void 0 === t
            ? void 0
            : t.length) &&
            !e.filterState.forceFiltered)
        );
      }),
      f = l(() => {
        var t;
        return Ol(null === (t = e.column) || void 0 === t ? void 0 : t.filters);
      }),
      x = l(() => {
        const {
          filterDropdown: t,
          slots: l = {},
          customFilterDropdown: n,
        } = e.column;
        return (
          t ||
          (l.filterDropdown && r.value[l.filterDropdown]) ||
          (n && r.value.customFilterDropdown)
        );
      }),
      g = l(() => {
        const { filterIcon: t, slots: l = {} } = e.column;
        return (
          t ||
          (l.filterIcon && r.value[l.filterIcon]) ||
          r.value.customFilterIcon
        );
      }),
      y = (e) => {
        var t;
        (c.value = e), null === (t = d.value) || void 0 === t || t.call(d, e);
      },
      b = l(() => ("boolean" == typeof u.value ? u.value : c.value)),
      w = l(() => {
        var t;
        return null === (t = e.filterState) || void 0 === t
          ? void 0
          : t.filteredKeys;
      }),
      C = n([]),
      S = (e) => {
        let { selectedKeys: t } = e;
        C.value = t;
      },
      $ = (t, l) => {
        let { node: n, checked: o } = l;
        e.filterMultiple
          ? S({ selectedKeys: t })
          : S({ selectedKeys: o && n.key ? [n.key] : [] });
      };
    i(
      w,
      () => {
        c.value && S({ selectedKeys: w.value || [] });
      },
      { immediate: !0 }
    );
    const k = n([]),
      R = n(),
      E = (e) => {
        R.value = setTimeout(() => {
          k.value = e;
        });
      },
      T = () => {
        clearTimeout(R.value);
      };
    z(() => {
      clearTimeout(R.value);
    });
    const I = n(""),
      O = (e) => {
        const { value: t } = e.target;
        I.value = t;
      };
    i(c, () => {
      c.value || (I.value = "");
    });
    const B = (t) => {
        const { column: l, columnKey: n, filterState: o } = e,
          r = t && t.length ? t : null;
        return null !== r || (o && o.filteredKeys)
          ? Cl(r, null == o ? void 0 : o.filteredKeys, !0)
            ? null
            : void e.triggerFilter({ column: l, key: n, filteredKeys: r })
          : null;
      },
      H = () => {
        y(!1), B(C.value);
      },
      K = function () {
        let { confirm: t, closeDropdown: l } =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { confirm: !1, closeDropdown: !1 };
        t && B([]),
          l && y(!1),
          (I.value = ""),
          e.column.filterResetToDefaultFilteredValue
            ? (C.value = (e.column.defaultFilteredValue || []).map((e) =>
                String(e)
              ))
            : (C.value = []);
      },
      A = function () {
        let { closeDropdown: e } =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : { closeDropdown: !0 };
        e && y(!1), B(C.value);
      },
      N = (e) => {
        e && void 0 !== w.value && (C.value = w.value || []),
          y(e),
          e || x.value || H();
      },
      { direction: j } = ie("", e),
      D = (e) => {
        if (e.target.checked) {
          const e = f.value;
          C.value = e;
        } else C.value = [];
      },
      W = (e) => {
        let { filters: t } = e;
        return (t || []).map((e, t) => {
          const l = String(e.value),
            n = { title: e.text, key: void 0 !== e.value ? l : t };
          return e.children && (n.children = W({ filters: e.children })), n;
        });
      },
      F = (e) => {
        var t;
        return m(m({}, e), {
          text: e.title,
          value: e.key,
          children:
            (null === (t = e.children) || void 0 === t
              ? void 0
              : t.map((e) => F(e))) || [],
        });
      },
      L = l(() => W({ filters: e.column.filters })),
      _ = l(() => {
        return h({
          [`${e.dropdownPrefixCls}-menu-without-submenu`]:
            ((t = e.column.filters || []),
            !t.some((e) => {
              let { children: t } = e;
              return t && t.length > 0;
            })),
        });
        var t;
      }),
      M = () => {
        const t = C.value,
          {
            column: l,
            locale: n,
            tablePrefixCls: o,
            filterMultiple: r,
            dropdownPrefixCls: i,
            getPopupContainer: u,
            prefixCls: d,
          } = e;
        return 0 === (l.filters || []).length
          ? v(
              ue,
              {
                image: ue.PRESENTED_IMAGE_SIMPLE,
                description: n.filterEmptyText,
                imageStyle: { height: 24 },
                style: { margin: 0, padding: "16px 0" },
              },
              null
            )
          : "tree" === a.value
          ? v(P, null, [
              v(
                wl,
                {
                  filterSearch: s.value,
                  value: I.value,
                  onChange: O,
                  tablePrefixCls: o,
                  locale: n,
                },
                null
              ),
              v("div", { class: `${o}-filter-dropdown-tree` }, [
                r
                  ? v(
                      ze,
                      {
                        class: `${o}-filter-dropdown-checkall`,
                        onChange: D,
                        checked: t.length === f.value.length,
                        indeterminate:
                          t.length > 0 && t.length < f.value.length,
                      },
                      { default: () => [n.filterCheckall] }
                    )
                  : null,
                v(
                  Be,
                  {
                    checkable: !0,
                    selectable: !1,
                    blockNode: !0,
                    multiple: r,
                    checkStrictly: !r,
                    class: `${i}-menu`,
                    onCheck: $,
                    checkedKeys: t,
                    selectedKeys: t,
                    showIcon: !1,
                    treeData: L.value,
                    autoExpandParent: !0,
                    defaultExpandAll: !0,
                    filterTreeNode: I.value.trim()
                      ? (e) =>
                          "function" == typeof s.value
                            ? s.value(I.value, F(e))
                            : kl(I.value, e.title)
                      : void 0,
                  },
                  null
                ),
              ]),
            ])
          : v(P, null, [
              v(
                wl,
                {
                  filterSearch: s.value,
                  value: I.value,
                  onChange: O,
                  tablePrefixCls: o,
                  locale: n,
                },
                null
              ),
              v(
                G,
                {
                  multiple: r,
                  prefixCls: `${i}-menu`,
                  class: _.value,
                  onClick: T,
                  onSelect: S,
                  onDeselect: S,
                  selectedKeys: t,
                  getPopupContainer: u,
                  openKeys: k.value,
                  onOpenChange: E,
                },
                {
                  default: () =>
                    Rl({
                      filters: l.filters || [],
                      filterSearch: s.value,
                      prefixCls: d,
                      filteredKeys: C.value,
                      filterMultiple: r,
                      searchValue: I.value,
                    }),
                }
              ),
            ]);
      },
      X = l(() => {
        const t = C.value;
        return e.column.filterResetToDefaultFilteredValue
          ? Cl(
              (e.column.defaultFilteredValue || []).map((e) => String(e)),
              t,
              !0
            )
          : 0 === t.length;
      });
    return () => {
      var t;
      const {
        tablePrefixCls: l,
        prefixCls: n,
        column: r,
        dropdownPrefixCls: a,
        locale: i,
        getPopupContainer: s,
      } = e;
      let u;
      u =
        "function" == typeof x.value
          ? x.value({
              prefixCls: `${a}-custom`,
              setSelectedKeys: (e) => S({ selectedKeys: e }),
              selectedKeys: C.value,
              confirm: A,
              clearFilters: K,
              filters: r.filters,
              visible: b.value,
              column: r.__originColumn__,
              close: () => {
                y(!1);
              },
            })
          : x.value
          ? x.value
          : v(P, null, [
              M(),
              v("div", { class: `${n}-dropdown-btns` }, [
                v(
                  se,
                  {
                    type: "link",
                    size: "small",
                    disabled: X.value,
                    onClick: () => K(),
                  },
                  { default: () => [i.filterReset] }
                ),
                v(
                  se,
                  { type: "primary", size: "small", onClick: H },
                  { default: () => [i.filterConfirm] }
                ),
              ]),
            ]);
      const d = v(bl, { class: `${n}-dropdown` }, { default: () => [u] });
      let c;
      return (
        (c =
          "function" == typeof g.value
            ? g.value({ filtered: p.value, column: r.__originColumn__ })
            : g.value
            ? g.value
            : v(gl, null, null)),
        v("div", { class: `${n}-column` }, [
          v("span", { class: `${l}-column-title` }, [
            null === (t = o.default) || void 0 === t ? void 0 : t.call(o),
          ]),
          v(
            Y,
            {
              overlay: d,
              trigger: ["click"],
              open: b.value,
              onOpenChange: N,
              getPopupContainer: s,
              placement: "rtl" === j.value ? "bottomLeft" : "bottomRight",
            },
            {
              default: () => [
                v(
                  "span",
                  {
                    role: "button",
                    tabindex: -1,
                    class: h(`${n}-trigger`, { active: p.value }),
                    onClick: (e) => {
                      e.stopPropagation();
                    },
                  },
                  [c]
                ),
              ],
            }
          ),
        ])
      );
    };
  },
});
function Tl(e, t, l) {
  let n = [];
  return (
    (e || []).forEach((e, o) => {
      var r, a;
      const i = ll(o, l),
        s =
          e.filterDropdown ||
          (null === (r = null == e ? void 0 : e.slots) || void 0 === r
            ? void 0
            : r.filterDropdown) ||
          e.customFilterDropdown;
      if (e.filters || s || "onFilter" in e)
        if ("filteredValue" in e) {
          let t = e.filteredValue;
          s ||
            (t =
              null !== (a = null == t ? void 0 : t.map(String)) && void 0 !== a
                ? a
                : t),
            n.push({
              column: e,
              key: tl(e, i),
              filteredKeys: t,
              forceFiltered: e.filtered,
            });
        } else
          n.push({
            column: e,
            key: tl(e, i),
            filteredKeys:
              t && e.defaultFilteredValue ? e.defaultFilteredValue : void 0,
            forceFiltered: e.filtered,
          });
      "children" in e && (n = [...n, ...Tl(e.children, t, i)]);
    }),
    n
  );
}
function Il(e, t, l, n, o, r, a, i) {
  return l.map((l, s) => {
    var u;
    const d = ll(s, i),
      { filterMultiple: c = !0, filterMode: p, filterSearch: f } = l;
    let h = l;
    const x =
      l.filterDropdown ||
      (null === (u = null == l ? void 0 : l.slots) || void 0 === u
        ? void 0
        : u.filterDropdown) ||
      l.customFilterDropdown;
    if (h.filters || x) {
      const i = tl(h, d),
        s = n.find((e) => {
          let { key: t } = e;
          return i === t;
        });
      h = m(m({}, h), {
        title: (n) =>
          v(
            El,
            {
              tablePrefixCls: e,
              prefixCls: `${e}-filter`,
              dropdownPrefixCls: t,
              column: h,
              columnKey: i,
              filterState: s,
              filterMultiple: c,
              filterMode: p,
              filterSearch: f,
              triggerFilter: r,
              locale: o,
              getPopupContainer: a,
            },
            { default: () => [nl(l.title, n)] }
          ),
      });
    }
    return (
      "children" in h &&
        (h = m(m({}, h), { children: Il(e, t, h.children, n, o, r, a, d) })),
      h
    );
  });
}
function Ol(e) {
  let t = [];
  return (
    (e || []).forEach((e) => {
      let { value: l, children: n } = e;
      t.push(l), n && (t = [...t, ...Ol(n)]);
    }),
    t
  );
}
function Pl(e) {
  const t = {};
  return (
    e.forEach((e) => {
      let { key: l, filteredKeys: n, column: o } = e;
      var r;
      const a =
          o.filterDropdown ||
          (null === (r = null == o ? void 0 : o.slots) || void 0 === r
            ? void 0
            : r.filterDropdown) ||
          o.customFilterDropdown,
        { filters: i } = o;
      if (a) t[l] = n || null;
      else if (Array.isArray(n)) {
        const e = Ol(i);
        t[l] = e.filter((e) => n.includes(String(e)));
      } else t[l] = null;
    }),
    t
  );
}
function Bl(e, t) {
  return t.reduce((e, t) => {
    const {
      column: { onFilter: l, filters: n },
      filteredKeys: o,
    } = t;
    return l && o && o.length
      ? e.filter((e) =>
          o.some((t) => {
            const o = Ol(n),
              r = o.findIndex((e) => String(e) === String(t)),
              a = -1 !== r ? o[r] : t;
            return l(a, e);
          })
        )
      : e;
  }, e);
}
function zl(e) {
  return e.flatMap((e) =>
    "children" in e ? [e, ...zl(e.children || [])] : [e]
  );
}
function Hl(e) {
  let {
    prefixCls: t,
    dropdownPrefixCls: n,
    mergedColumns: o,
    locale: r,
    onFilterChange: a,
    getPopupContainer: i,
  } = e;
  const s = l(() => zl(o.value)),
    [u, d] = F(Tl(s.value, !0)),
    c = l(() => {
      const e = Tl(s.value, !1);
      if (0 === e.length) return e;
      let t = !0,
        l = !0;
      if (
        (e.forEach((e) => {
          let { filteredKeys: n } = e;
          void 0 !== n ? (t = !1) : (l = !1);
        }),
        t)
      ) {
        const e = (s.value || []).map((e, t) => tl(e, ll(t)));
        return u.value
          .filter((t) => {
            let { key: l } = t;
            return e.includes(l);
          })
          .map((t) => {
            const l = s.value[e.findIndex((e) => e === t.key)];
            return m(m({}, t), {
              column: m(m({}, t.column), l),
              forceFiltered: l.filtered,
            });
          });
      }
      return (
        S(
          l,
          "Table",
          "Columns should all contain `filteredValue` or not contain `filteredValue`."
        ),
        e
      );
    }),
    p = l(() => Pl(c.value)),
    f = (e) => {
      const t = c.value.filter((t) => {
        let { key: l } = t;
        return l !== e.key;
      });
      t.push(e), d(t), a(Pl(t), t);
    };
  return [(e) => Il(t.value, n.value, e, c.value, r.value, f, i.value), c, p];
}
function Kl(e, t) {
  return e.map((e) => {
    const l = m({}, e);
    return (
      (l.title = nl(l.title, t)),
      "children" in l && (l.children = Kl(l.children, t)),
      l
    );
  });
}
function Al(e) {
  return [(t) => Kl(t, e.value)];
}
function Nl(e) {
  return function (t) {
    let {
      prefixCls: l,
      onExpand: n,
      record: o,
      expanded: r,
      expandable: a,
    } = t;
    const i = `${l}-row-expand-icon`;
    return v(
      "button",
      {
        type: "button",
        onClick: (e) => {
          n(o, e), e.stopPropagation();
        },
        class: h(i, {
          [`${i}-spaced`]: !a,
          [`${i}-expanded`]: a && r,
          [`${i}-collapsed`]: a && !r,
        }),
        "aria-label": r ? e.collapse : e.expand,
        "aria-expanded": r,
      },
      null
    );
  };
}
function jl(e, t) {
  const l = t.value;
  return e.map((e) => {
    var n;
    if (e === Dt || e === ft) return e;
    const o = m({}, e),
      { slots: r = {} } = o;
    return (
      (o.__originColumn__ = e),
      S(
        !("slots" in o),
        "Table",
        "`column.slots` is deprecated. Please use `v-slot:headerCell` `v-slot:bodyCell` instead."
      ),
      Object.keys(r).forEach((e) => {
        const t = r[e];
        void 0 === o[e] && l[t] && (o[e] = l[t]);
      }),
      t.value.headerCell &&
        !(null === (n = e.slots) || void 0 === n ? void 0 : n.title) &&
        (o.title = c(
          t.value,
          "headerCell",
          { title: e.title, column: e },
          () => [e.title]
        )),
      "children" in o &&
        Array.isArray(o.children) &&
        (o.children = jl(o.children, t)),
      o
    );
  });
}
function Dl(e) {
  return [(t) => jl(t, e)];
}
const Wl = (e) => {
    const { componentCls: t } = e,
      l = `${e.lineWidth}px ${e.lineType} ${e.tableBorderColor}`,
      n = (l, n, o) => ({
        [`&${t}-${l}`]: {
          [`> ${t}-container`]: {
            [`> ${t}-content, > ${t}-body`]: {
              "> table > tbody > tr > td": {
                [`> ${t}-expanded-row-fixed`]: {
                  margin: `-${n}px -${o + e.lineWidth}px`,
                },
              },
            },
          },
        },
      });
    return {
      [`${t}-wrapper`]: {
        [`${t}${t}-bordered`]: m(
          m(
            m(
              {
                [`> ${t}-title`]: { border: l, borderBottom: 0 },
                [`> ${t}-container`]: {
                  borderInlineStart: l,
                  [`\n            > ${t}-content,\n            > ${t}-header,\n            > ${t}-body,\n            > ${t}-summary\n          `]:
                    {
                      "> table": {
                        "\n                > thead > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ":
                          { borderInlineEnd: l },
                        "> thead": {
                          "> tr:not(:last-child) > th": { borderBottom: l },
                          "> tr > th::before": {
                            backgroundColor: "transparent !important",
                          },
                        },
                        "\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ":
                          {
                            [`> ${t}-cell-fix-right-first::after`]: {
                              borderInlineEnd: l,
                            },
                          },
                        "> tbody > tr > td": {
                          [`> ${t}-expanded-row-fixed`]: {
                            margin: `-${e.tablePaddingVertical}px -${
                              e.tablePaddingHorizontal + e.lineWidth
                            }px`,
                            "&::after": {
                              position: "absolute",
                              top: 0,
                              insetInlineEnd: e.lineWidth,
                              bottom: 0,
                              borderInlineEnd: l,
                              content: '""',
                            },
                          },
                        },
                      },
                    },
                  [`\n            > ${t}-content,\n            > ${t}-header\n          `]:
                    { "> table": { borderTop: l } },
                },
                [`&${t}-scroll-horizontal`]: {
                  [`> ${t}-container > ${t}-body`]: {
                    "> table > tbody": {
                      [`\n                > tr${t}-expanded-row,\n                > tr${t}-placeholder\n              `]:
                        { "> td": { borderInlineEnd: 0 } },
                    },
                  },
                },
              },
              n(
                "middle",
                e.tablePaddingVerticalMiddle,
                e.tablePaddingHorizontalMiddle
              )
            ),
            n(
              "small",
              e.tablePaddingVerticalSmall,
              e.tablePaddingHorizontalSmall
            )
          ),
          { [`> ${t}-footer`]: { border: l, borderTop: 0 } }
        ),
        [`${t}-cell`]: {
          [`${t}-container:first-child`]: { borderTop: 0 },
          "&-scrollbar:not([rowspan])": {
            boxShadow: `0 ${e.lineWidth}px 0 ${e.lineWidth}px ${e.tableHeaderBg}`,
          },
        },
      },
    };
  },
  Fl = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-cell-ellipsis`]: m(m({}, de), {
          wordBreak: "keep-all",
          [`\n          &${t}-cell-fix-left-last,\n          &${t}-cell-fix-right-first\n        `]:
            {
              overflow: "visible",
              [`${t}-cell-content`]: {
                display: "block",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            },
          [`${t}-column-title`]: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordBreak: "keep-all",
          },
        }),
      },
    };
  },
  Ll = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-tbody > tr${t}-placeholder`]: {
          textAlign: "center",
          color: e.colorTextDisabled,
          "&:hover > td": { background: e.colorBgContainer },
        },
      },
    };
  },
  _l = (e) => {
    const {
        componentCls: t,
        antCls: l,
        controlInteractiveSize: n,
        motionDurationSlow: o,
        lineWidth: r,
        paddingXS: a,
        lineType: i,
        tableBorderColor: s,
        tableExpandIconBg: u,
        tableExpandColumnWidth: d,
        borderRadius: c,
        fontSize: p,
        fontSizeSM: f,
        lineHeight: v,
        tablePaddingVertical: h,
        tablePaddingHorizontal: x,
        tableExpandedRowBg: g,
        paddingXXS: y,
      } = e,
      b = n / 2 - r,
      w = 2 * b + 3 * r,
      C = `${r}px ${i} ${s}`,
      S = y - r;
    return {
      [`${t}-wrapper`]: {
        [`${t}-expand-icon-col`]: { width: d },
        [`${t}-row-expand-icon-cell`]: {
          textAlign: "center",
          [`${t}-row-expand-icon`]: {
            display: "inline-flex",
            float: "none",
            verticalAlign: "sub",
          },
        },
        [`${t}-row-indent`]: { height: 1, float: "left" },
        [`${t}-row-expand-icon`]: m(m({}, $e(e)), {
          position: "relative",
          float: "left",
          boxSizing: "border-box",
          width: w,
          height: w,
          padding: 0,
          color: "inherit",
          lineHeight: `${w}px`,
          background: u,
          border: C,
          borderRadius: c,
          transform: `scale(${n / w})`,
          transition: `all ${o}`,
          userSelect: "none",
          "&:focus, &:hover, &:active": { borderColor: "currentcolor" },
          "&::before, &::after": {
            position: "absolute",
            background: "currentcolor",
            transition: `transform ${o} ease-out`,
            content: '""',
          },
          "&::before": {
            top: b,
            insetInlineEnd: S,
            insetInlineStart: S,
            height: r,
          },
          "&::after": {
            top: S,
            bottom: S,
            insetInlineStart: b,
            width: r,
            transform: "rotate(90deg)",
          },
          "&-collapsed::before": { transform: "rotate(-180deg)" },
          "&-collapsed::after": { transform: "rotate(0deg)" },
          "&-spaced": {
            "&::before, &::after": { display: "none", content: "none" },
            background: "transparent",
            border: 0,
            visibility: "hidden",
          },
        }),
        [`${t}-row-indent + ${t}-row-expand-icon`]: {
          marginTop: (p * v - 3 * r) / 2 - Math.ceil((1.4 * f - 3 * r) / 2),
          marginInlineEnd: a,
        },
        [`tr${t}-expanded-row`]: {
          "&, &:hover": { "> td": { background: g } },
          [`${l}-descriptions-view`]: {
            display: "flex",
            table: { flex: "auto", width: "auto" },
          },
        },
        [`${t}-expanded-row-fixed`]: {
          position: "relative",
          margin: `-${h}px -${x}px`,
          padding: `${h}px ${x}px`,
        },
      },
    };
  },
  Ml = (e) => {
    const {
        componentCls: t,
        antCls: l,
        iconCls: n,
        tableFilterDropdownWidth: o,
        tableFilterDropdownSearchWidth: r,
        paddingXXS: a,
        paddingXS: i,
        colorText: s,
        lineWidth: u,
        lineType: d,
        tableBorderColor: c,
        tableHeaderIconColor: p,
        fontSizeSM: f,
        tablePaddingHorizontal: v,
        borderRadius: h,
        motionDurationSlow: x,
        colorTextDescription: g,
        colorPrimary: y,
        tableHeaderFilterActiveBg: b,
        colorTextDisabled: w,
        tableFilterDropdownBg: C,
        tableFilterDropdownHeight: S,
        controlItemBgHover: $,
        controlItemBgActive: k,
        boxShadowSecondary: R,
      } = e,
      E = `${l}-dropdown`,
      T = `${t}-filter-dropdown`,
      I = `${l}-tree`,
      O = `${u}px ${d} ${c}`;
    return [
      {
        [`${t}-wrapper`]: {
          [`${t}-filter-column`]: {
            display: "flex",
            justifyContent: "space-between",
          },
          [`${t}-filter-trigger`]: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginBlock: -a,
            marginInline: `${a}px ${-v / 2}px`,
            padding: `0 ${a}px`,
            color: p,
            fontSize: f,
            borderRadius: h,
            cursor: "pointer",
            transition: `all ${x}`,
            "&:hover": { color: g, background: b },
            "&.active": { color: y },
          },
        },
      },
      {
        [`${l}-dropdown`]: {
          [T]: m(m({}, ce(e)), {
            minWidth: o,
            backgroundColor: C,
            borderRadius: h,
            boxShadow: R,
            [`${E}-menu`]: {
              maxHeight: S,
              overflowX: "hidden",
              border: 0,
              boxShadow: "none",
              "&:empty::after": {
                display: "block",
                padding: `${i}px 0`,
                color: w,
                fontSize: f,
                textAlign: "center",
                content: '"Not Found"',
              },
            },
            [`${T}-tree`]: {
              paddingBlock: `${i}px 0`,
              paddingInline: i,
              [I]: { padding: 0 },
              [`${I}-treenode ${I}-node-content-wrapper:hover`]: {
                backgroundColor: $,
              },
              [`${I}-treenode-checkbox-checked ${I}-node-content-wrapper`]: {
                "&, &:hover": { backgroundColor: k },
              },
            },
            [`${T}-search`]: {
              padding: i,
              borderBottom: O,
              "&-input": { input: { minWidth: r }, [n]: { color: w } },
            },
            [`${T}-checkall`]: {
              width: "100%",
              marginBottom: a,
              marginInlineStart: a,
            },
            [`${T}-btns`]: {
              display: "flex",
              justifyContent: "space-between",
              padding: `${i - u}px ${i}px`,
              overflow: "hidden",
              backgroundColor: "inherit",
              borderTop: O,
            },
          }),
        },
      },
      {
        [`${l}-dropdown ${T}, ${T}-submenu`]: {
          [`${l}-checkbox-wrapper + span`]: { paddingInlineStart: i, color: s },
          "> ul": {
            maxHeight: "calc(100vh - 130px)",
            overflowX: "hidden",
            overflowY: "auto",
          },
        },
      },
    ];
  },
  Xl = (e) => {
    const {
        componentCls: t,
        lineWidth: l,
        colorSplit: n,
        motionDurationSlow: o,
        zIndexTableFixed: r,
        tableBg: a,
        zIndexTableSticky: i,
      } = e,
      s = n;
    return {
      [`${t}-wrapper`]: {
        [`\n        ${t}-cell-fix-left,\n        ${t}-cell-fix-right\n      `]:
          { position: "sticky !important", zIndex: r, background: a },
        [`\n        ${t}-cell-fix-left-first::after,\n        ${t}-cell-fix-left-last::after\n      `]:
          {
            position: "absolute",
            top: 0,
            right: { _skip_check_: !0, value: 0 },
            bottom: -l,
            width: 30,
            transform: "translateX(100%)",
            transition: `box-shadow ${o}`,
            content: '""',
            pointerEvents: "none",
          },
        [`${t}-cell-fix-left-all::after`]: { display: "none" },
        [`\n        ${t}-cell-fix-right-first::after,\n        ${t}-cell-fix-right-last::after\n      `]:
          {
            position: "absolute",
            top: 0,
            bottom: -l,
            left: { _skip_check_: !0, value: 0 },
            width: 30,
            transform: "translateX(-100%)",
            transition: `box-shadow ${o}`,
            content: '""',
            pointerEvents: "none",
          },
        [`${t}-container`]: {
          "&::before, &::after": {
            position: "absolute",
            top: 0,
            bottom: 0,
            zIndex: i + 1,
            width: 30,
            transition: `box-shadow ${o}`,
            content: '""',
            pointerEvents: "none",
          },
          "&::before": { insetInlineStart: 0 },
          "&::after": { insetInlineEnd: 0 },
        },
        [`${t}-ping-left`]: {
          [`&:not(${t}-has-fix-left) ${t}-container`]: {
            position: "relative",
            "&::before": { boxShadow: `inset 10px 0 8px -8px ${s}` },
          },
          [`\n          ${t}-cell-fix-left-first::after,\n          ${t}-cell-fix-left-last::after\n        `]:
            { boxShadow: `inset 10px 0 8px -8px ${s}` },
          [`${t}-cell-fix-left-last::before`]: {
            backgroundColor: "transparent !important",
          },
        },
        [`${t}-ping-right`]: {
          [`&:not(${t}-has-fix-right) ${t}-container`]: {
            position: "relative",
            "&::after": { boxShadow: `inset -10px 0 8px -8px ${s}` },
          },
          [`\n          ${t}-cell-fix-right-first::after,\n          ${t}-cell-fix-right-last::after\n        `]:
            { boxShadow: `inset -10px 0 8px -8px ${s}` },
        },
      },
    };
  },
  Vl = (e) => {
    const { componentCls: t, antCls: l } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-pagination${l}-pagination`]: { margin: `${e.margin}px 0` },
        [`${t}-pagination`]: {
          display: "flex",
          flexWrap: "wrap",
          rowGap: e.paddingXS,
          "> *": { flex: "none" },
          "&-left": { justifyContent: "flex-start" },
          "&-center": { justifyContent: "center" },
          "&-right": { justifyContent: "flex-end" },
        },
      },
    };
  },
  Ul = (e) => {
    const { componentCls: t, tableRadius: l } = e;
    return {
      [`${t}-wrapper`]: {
        [t]: {
          [`${t}-title, ${t}-header`]: { borderRadius: `${l}px ${l}px 0 0` },
          [`${t}-title + ${t}-container`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0,
            table: {
              borderRadius: 0,
              "> thead > tr:first-child": {
                "th:first-child": { borderRadius: 0 },
                "th:last-child": { borderRadius: 0 },
              },
            },
          },
          "&-container": {
            borderStartStartRadius: l,
            borderStartEndRadius: l,
            "table > thead > tr:first-child": {
              "> *:first-child": { borderStartStartRadius: l },
              "> *:last-child": { borderStartEndRadius: l },
            },
          },
          "&-footer": { borderRadius: `0 0 ${l}px ${l}px` },
        },
      },
    };
  },
  Gl = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-wrapper-rtl`]: {
        direction: "rtl",
        table: { direction: "rtl" },
        [`${t}-pagination-left`]: { justifyContent: "flex-end" },
        [`${t}-pagination-right`]: { justifyContent: "flex-start" },
        [`${t}-row-expand-icon`]: {
          "&::after": { transform: "rotate(-90deg)" },
          "&-collapsed::before": { transform: "rotate(180deg)" },
          "&-collapsed::after": { transform: "rotate(0deg)" },
        },
      },
    };
  },
  Yl = (e) => {
    const {
      componentCls: t,
      antCls: l,
      iconCls: n,
      fontSizeIcon: o,
      paddingXS: r,
      tableHeaderIconColor: a,
      tableHeaderIconColorHover: i,
    } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-selection-col`]: { width: e.tableSelectionColumnWidth },
        [`${t}-bordered ${t}-selection-col`]: {
          width: e.tableSelectionColumnWidth + 2 * r,
        },
        [`\n        table tr th${t}-selection-column,\n        table tr td${t}-selection-column\n      `]:
          {
            paddingInlineEnd: e.paddingXS,
            paddingInlineStart: e.paddingXS,
            textAlign: "center",
            [`${l}-radio-wrapper`]: { marginInlineEnd: 0 },
          },
        [`table tr th${t}-selection-column${t}-cell-fix-left`]: {
          zIndex: e.zIndexTableFixed + 1,
        },
        [`table tr th${t}-selection-column::after`]: {
          backgroundColor: "transparent !important",
        },
        [`${t}-selection`]: {
          position: "relative",
          display: "inline-flex",
          flexDirection: "column",
        },
        [`${t}-selection-extra`]: {
          position: "absolute",
          top: 0,
          zIndex: 1,
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          marginInlineStart: "100%",
          paddingInlineStart: e.tablePaddingHorizontal / 4 + "px",
          [n]: {
            color: a,
            fontSize: o,
            verticalAlign: "baseline",
            "&:hover": { color: i },
          },
        },
      },
    };
  },
  ql = (e) => {
    const { componentCls: t } = e,
      l = (l, n, o, r) => ({
        [`${t}${t}-${l}`]: {
          fontSize: r,
          [`\n        ${t}-title,\n        ${t}-footer,\n        ${t}-thead > tr > th,\n        ${t}-tbody > tr > td,\n        tfoot > tr > th,\n        tfoot > tr > td\n      `]:
            { padding: `${n}px ${o}px` },
          [`${t}-filter-trigger`]: { marginInlineEnd: `-${o / 2}px` },
          [`${t}-expanded-row-fixed`]: { margin: `-${n}px -${o}px` },
          [`${t}-tbody`]: {
            [`${t}-wrapper:only-child ${t}`]: {
              marginBlock: `-${n}px`,
              marginInline: `${e.tableExpandColumnWidth - o}px -${o}px`,
            },
          },
          [`${t}-selection-column`]: { paddingInlineStart: o / 4 + "px" },
        },
      });
    return {
      [`${t}-wrapper`]: m(
        m(
          {},
          l(
            "middle",
            e.tablePaddingVerticalMiddle,
            e.tablePaddingHorizontalMiddle,
            e.tableFontSizeMiddle
          )
        ),
        l(
          "small",
          e.tablePaddingVerticalSmall,
          e.tablePaddingHorizontalSmall,
          e.tableFontSizeSmall
        )
      ),
    };
  },
  Jl = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-wrapper ${t}-resize-handle`]: {
        position: "absolute",
        top: 0,
        height: "100% !important",
        bottom: 0,
        left: " auto !important",
        right: " -8px",
        cursor: "col-resize",
        touchAction: "none",
        userSelect: "auto",
        width: "16px",
        zIndex: 1,
        "&-line": {
          display: "block",
          width: "1px",
          marginLeft: "7px",
          height: "100% !important",
          backgroundColor: e.colorPrimary,
          opacity: 0,
        },
        "&:hover &-line": { opacity: 1 },
      },
      [`${t}-wrapper  ${t}-resize-handle.dragging`]: {
        overflow: "hidden",
        [`${t}-resize-handle-line`]: { opacity: 1 },
        "&:before": {
          position: "absolute",
          top: 0,
          bottom: 0,
          content: '" "',
          width: "200vw",
          transform: "translateX(-50%)",
          opacity: 0,
        },
      },
    };
  },
  Ql = (e) => {
    const {
      componentCls: t,
      marginXXS: l,
      fontSizeIcon: n,
      tableHeaderIconColor: o,
      tableHeaderIconColorHover: r,
    } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-thead th${t}-column-has-sorters`]: {
          outline: "none",
          cursor: "pointer",
          transition: `all ${e.motionDurationSlow}`,
          "&:hover": {
            background: e.tableHeaderSortHoverBg,
            "&::before": { backgroundColor: "transparent !important" },
          },
          "&:focus-visible": { color: e.colorPrimary },
          [`\n          &${t}-cell-fix-left:hover,\n          &${t}-cell-fix-right:hover\n        `]:
            { background: e.tableFixedHeaderSortActiveBg },
        },
        [`${t}-thead th${t}-column-sort`]: {
          background: e.tableHeaderSortBg,
          "&::before": { backgroundColor: "transparent !important" },
        },
        [`td${t}-column-sort`]: { background: e.tableBodySortBg },
        [`${t}-column-title`]: { position: "relative", zIndex: 1, flex: 1 },
        [`${t}-column-sorters`]: {
          display: "flex",
          flex: "auto",
          alignItems: "center",
          justifyContent: "space-between",
          "&::after": {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            content: '""',
          },
        },
        [`${t}-column-sorter`]: {
          marginInlineStart: l,
          color: o,
          fontSize: 0,
          transition: `color ${e.motionDurationSlow}`,
          "&-inner": {
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
          },
          "&-up, &-down": {
            fontSize: n,
            "&.active": { color: e.colorPrimary },
          },
          [`${t}-column-sorter-up + ${t}-column-sorter-down`]: {
            marginTop: "-0.3em",
          },
        },
        [`${t}-column-sorters:hover ${t}-column-sorter`]: { color: r },
      },
    };
  },
  Zl = (e) => {
    const {
        componentCls: t,
        opacityLoading: l,
        tableScrollThumbBg: n,
        tableScrollThumbBgHover: o,
        tableScrollThumbSize: r,
        tableScrollBg: a,
        zIndexTableSticky: i,
      } = e,
      s = `${e.lineWidth}px ${e.lineType} ${e.tableBorderColor}`;
    return {
      [`${t}-wrapper`]: {
        [`${t}-sticky`]: {
          "&-holder": {
            position: "sticky",
            zIndex: i,
            background: e.colorBgContainer,
          },
          "&-scroll": {
            position: "sticky",
            bottom: 0,
            height: `${r}px !important`,
            zIndex: i,
            display: "flex",
            alignItems: "center",
            background: a,
            borderTop: s,
            opacity: l,
            "&:hover": { transformOrigin: "center bottom" },
            "&-bar": {
              height: r,
              backgroundColor: n,
              borderRadius: 100,
              transition: `all ${e.motionDurationSlow}, transform none`,
              position: "absolute",
              bottom: 0,
              "&:hover, &-active": { backgroundColor: o },
            },
          },
        },
      },
    };
  },
  en = (e) => {
    const { componentCls: t, lineWidth: l, tableBorderColor: n } = e,
      o = `${l}px ${e.lineType} ${n}`;
    return {
      [`${t}-wrapper`]: {
        [`${t}-summary`]: {
          position: "relative",
          zIndex: e.zIndexTableFixed,
          background: e.tableBg,
          "> tr": { "> th, > td": { borderBottom: o } },
        },
        [`div${t}-summary`]: { boxShadow: `0 -${l}px 0 ${n}` },
      },
    };
  },
  tn = (e) => {
    const {
        componentCls: t,
        fontWeightStrong: l,
        tablePaddingVertical: n,
        tablePaddingHorizontal: o,
        lineWidth: r,
        lineType: a,
        tableBorderColor: i,
        tableFontSize: s,
        tableBg: u,
        tableRadius: d,
        tableHeaderTextColor: c,
        motionDurationMid: p,
        tableHeaderBg: f,
        tableHeaderCellSplitColor: v,
        tableRowHoverBg: h,
        tableSelectedRowBg: x,
        tableSelectedRowHoverBg: g,
        tableFooterTextColor: y,
        tableFooterBg: b,
        paddingContentVerticalLG: w,
      } = e,
      C = `${r}px ${a} ${i}`;
    return {
      [`${t}-wrapper`]: m(m({ clear: "both", maxWidth: "100%" }, me()), {
        [t]: m(m({}, ce(e)), {
          fontSize: s,
          background: u,
          borderRadius: `${d}px ${d}px 0 0`,
        }),
        table: {
          width: "100%",
          textAlign: "start",
          borderRadius: `${d}px ${d}px 0 0`,
          borderCollapse: "separate",
          borderSpacing: 0,
        },
        [`\n          ${t}-thead > tr > th,\n          ${t}-tbody > tr > td,\n          tfoot > tr > th,\n          tfoot > tr > td\n        `]:
          {
            position: "relative",
            padding: `${w}px ${o}px`,
            overflowWrap: "break-word",
          },
        [`${t}-title`]: { padding: `${n}px ${o}px` },
        [`${t}-thead`]: {
          "\n          > tr > th,\n          > tr > td\n        ": {
            position: "relative",
            color: c,
            fontWeight: l,
            textAlign: "start",
            background: f,
            borderBottom: C,
            transition: `background ${p} ease`,
            "&[colspan]:not([colspan='1'])": { textAlign: "center" },
            [`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]:
              {
                position: "absolute",
                top: "50%",
                insetInlineEnd: 0,
                width: 1,
                height: "1.6em",
                backgroundColor: v,
                transform: "translateY(-50%)",
                transition: `background-color ${p}`,
                content: '""',
              },
          },
          "> tr:not(:last-child) > th[colspan]": { borderBottom: 0 },
        },
        [`${t}:not(${t}-bordered)`]: {
          [`${t}-tbody`]: {
            "> tr": {
              "> td": { borderTop: C, borderBottom: "transparent" },
              "&:last-child > td": { borderBottom: C },
              [`&:first-child > td,\n              &${t}-measure-row + tr > td`]:
                { borderTop: "none", borderTopColor: "transparent" },
            },
          },
        },
        [`${t}${t}-bordered`]: {
          [`${t}-tbody`]: { "> tr": { "> td": { borderBottom: C } } },
        },
        [`${t}-tbody`]: {
          "> tr": {
            "> td": {
              transition: `background ${p}, border-color ${p}`,
              [`\n              > ${t}-wrapper:only-child,\n              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child\n            `]:
                {
                  [t]: {
                    marginBlock: `-${n}px`,
                    marginInline: `${e.tableExpandColumnWidth - o}px -${o}px`,
                    [`${t}-tbody > tr:last-child > td`]: {
                      borderBottom: 0,
                      "&:first-child, &:last-child": { borderRadius: 0 },
                    },
                  },
                },
            },
            [`\n            &${t}-row:hover > td,\n            > td${t}-cell-row-hover\n          `]:
              { background: h },
            [`&${t}-row-selected`]: {
              "> td": { background: x },
              "&:hover > td": { background: g },
            },
          },
        },
        [`${t}-footer`]: { padding: `${n}px ${o}px`, color: y, background: b },
      }),
    };
  },
  ln = pe("Table", (e) => {
    const {
        controlItemBgActive: t,
        controlItemBgActiveHover: l,
        colorTextPlaceholder: n,
        colorTextHeading: o,
        colorSplit: r,
        colorBorderSecondary: a,
        fontSize: i,
        padding: s,
        paddingXS: u,
        paddingSM: d,
        controlHeight: c,
        colorFillAlter: p,
        colorIcon: f,
        colorIconHover: v,
        opacityLoading: m,
        colorBgContainer: h,
        borderRadiusLG: x,
        colorFillContent: g,
        colorFillSecondary: y,
        controlInteractiveSize: b,
      } = e,
      w = new fe(f),
      C = new fe(v),
      S = t,
      $ = new fe(y).onBackground(h).toHexString(),
      k = new fe(g).onBackground(h).toHexString(),
      R = new fe(p).onBackground(h).toHexString(),
      E = ve(e, {
        tableFontSize: i,
        tableBg: h,
        tableRadius: x,
        tablePaddingVertical: s,
        tablePaddingHorizontal: s,
        tablePaddingVerticalMiddle: d,
        tablePaddingHorizontalMiddle: u,
        tablePaddingVerticalSmall: u,
        tablePaddingHorizontalSmall: u,
        tableBorderColor: a,
        tableHeaderTextColor: o,
        tableHeaderBg: R,
        tableFooterTextColor: o,
        tableFooterBg: R,
        tableHeaderCellSplitColor: a,
        tableHeaderSortBg: $,
        tableHeaderSortHoverBg: k,
        tableHeaderIconColor: w
          .clone()
          .setAlpha(w.getAlpha() * m)
          .toRgbString(),
        tableHeaderIconColorHover: C.clone()
          .setAlpha(C.getAlpha() * m)
          .toRgbString(),
        tableBodySortBg: R,
        tableFixedHeaderSortActiveBg: $,
        tableHeaderFilterActiveBg: g,
        tableFilterDropdownBg: h,
        tableRowHoverBg: R,
        tableSelectedRowBg: S,
        tableSelectedRowHoverBg: l,
        zIndexTableFixed: 2,
        zIndexTableSticky: 3,
        tableFontSizeMiddle: i,
        tableFontSizeSmall: i,
        tableSelectionColumnWidth: c,
        tableExpandIconBg: h,
        tableExpandColumnWidth: b + 2 * e.padding,
        tableExpandedRowBg: p,
        tableFilterDropdownWidth: 120,
        tableFilterDropdownHeight: 264,
        tableFilterDropdownSearchWidth: 140,
        tableScrollThumbSize: 8,
        tableScrollThumbBg: n,
        tableScrollThumbBgHover: o,
        tableScrollBg: r,
      });
    return [
      tn(E),
      Vl(E),
      en(E),
      Ql(E),
      Ml(E),
      Wl(E),
      Ul(E),
      _l(E),
      en(E),
      Ll(E),
      Yl(E),
      Xl(E),
      Zl(E),
      Fl(E),
      ql(E),
      Jl(E),
      Gl(E),
    ];
  }),
  nn = [],
  on = () => ({
    prefixCls: ee(),
    columns: we(),
    rowKey: le([String, Function]),
    tableLayout: ee(),
    rowClassName: le([String, Function]),
    title: te(),
    footer: te(),
    id: ee(),
    showHeader: Ce(),
    components: ne(),
    customRow: te(),
    customHeaderRow: te(),
    direction: ee(),
    expandFixed: le([Boolean, String]),
    expandColumnWidth: Number,
    expandedRowKeys: we(),
    defaultExpandedRowKeys: we(),
    expandedRowRender: te(),
    expandRowByClick: Ce(),
    expandIcon: te(),
    onExpand: te(),
    onExpandedRowsChange: te(),
    "onUpdate:expandedRowKeys": te(),
    defaultExpandAllRows: Ce(),
    indentSize: Number,
    expandIconColumnIndex: Number,
    showExpandColumn: Ce(),
    expandedRowClassName: te(),
    childrenColumnName: ee(),
    rowExpandable: te(),
    sticky: le([Boolean, Object]),
    dropdownPrefixCls: String,
    dataSource: we(),
    pagination: le([Boolean, Object]),
    loading: le([Boolean, Object]),
    size: ee(),
    bordered: Ce(),
    locale: ne(),
    onChange: te(),
    onResizeColumn: te(),
    rowSelection: ne(),
    getPopupContainer: te(),
    scroll: ne(),
    sortDirections: we(),
    showSorterTooltip: le([Boolean, Object], !0),
    transformCellText: te(),
  }),
  rn = a({
    name: "InternalTable",
    inheritAttrs: !1,
    props: he(m(m({}, on()), { contextSlots: ne() }), { rowKey: "key" }),
    setup(t, o) {
      let { attrs: r, slots: a, expose: s, emit: u } = o;
      S(
        !("function" == typeof t.rowKey && t.rowKey.length > 1),
        "Table",
        "`index` parameter of `rowKey` function is deprecated. There is no guarantee that it will work as expected."
      ),
        ((t) => {
          e(Me, t);
        })(l(() => t.contextSlots)),
        ((t) => {
          e(Ve, t);
        })({
          onResizeColumn: (e, t) => {
            u("resizeColumn", e, t);
          },
        });
      const d = Ae(),
        c = l(() => {
          const e = new Set(Object.keys(d.value).filter((e) => d.value[e]));
          return t.columns.filter(
            (t) => !t.responsive || t.responsive.some((t) => e.has(t))
          );
        }),
        {
          size: p,
          renderEmpty: f,
          direction: g,
          prefixCls: y,
          configProvider: b,
        } = ie("table", t),
        [w, $] = ln(y),
        k = l(() => {
          var e;
          return (
            t.transformCellText ||
            (null === (e = b.transformCellText) || void 0 === e
              ? void 0
              : e.value)
          );
        }),
        [R] = xe("Table", ge.Table, B(t, "locale")),
        E = l(() => t.dataSource || nn),
        I = l(() => b.getPrefixCls("dropdown", t.dropdownPrefixCls)),
        O = l(() => t.childrenColumnName || "children"),
        P = l(() =>
          E.value.some((e) => (null == e ? void 0 : e[O.value]))
            ? "nest"
            : t.expandedRowRender
            ? "row"
            : null
        ),
        z = H({ body: null }),
        K = (e) => {
          m(z, e);
        },
        N = l(() =>
          "function" == typeof t.rowKey
            ? t.rowKey
            : (e) => (null == e ? void 0 : e[t.rowKey])
        ),
        [j] = (function (e, t, l) {
          const o = n({});
          return (
            i(
              [e, t, l],
              () => {
                const n = new Map(),
                  r = l.value,
                  a = t.value;
                !(function e(t) {
                  t.forEach((t, l) => {
                    const o = r(t, l);
                    n.set(o, t),
                      t && "object" == typeof t && a in t && e(t[a] || []);
                  });
                })(e.value),
                  (o.value = { kvMap: n });
              },
              { deep: !0, immediate: !0 }
            ),
            [
              function (e) {
                return o.value.kvMap.get(e);
              },
            ]
          );
        })(E, O, N),
        D = {},
        W = function (e, l) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const { pagination: o, scroll: r, onChange: a } = t,
            i = m(m({}, D), e);
          n &&
            (D.resetPagination(),
            i.pagination.current && (i.pagination.current = 1),
            o && o.onChange && o.onChange(1, i.pagination.pageSize)),
            r &&
              !1 !== r.scrollToFirstRowOnChange &&
              z.body &&
              Ke(0, { getContainer: () => z.body }),
            null == a ||
              a(i.pagination, i.filters, i.sorter, {
                currentDataSource: Bl(
                  fl(E.value, i.sorterStates, O.value),
                  i.filterStates
                ),
                action: l,
              });
        },
        [F, L, _, M] = vl({
          prefixCls: y,
          mergedColumns: c,
          onSorterChange: (e, t) => {
            W({ sorter: e, sorterStates: t }, "sort", !1);
          },
          sortDirections: l(() => t.sortDirections || ["ascend", "descend"]),
          tableLocale: R,
          showSorterTooltip: B(t, "showSorterTooltip"),
        }),
        X = l(() => fl(E.value, L.value, O.value)),
        [V, U, G] = Hl({
          prefixCls: y,
          locale: R,
          dropdownPrefixCls: I,
          mergedColumns: c,
          onFilterChange: (e, t) => {
            W({ filters: e, filterStates: t }, "filter", !0);
          },
          getPopupContainer: B(t, "getPopupContainer"),
        }),
        Y = l(() => Bl(X.value, U.value)),
        [q] = Dl(B(t, "contextSlots")),
        J = l(() => {
          const e = {},
            t = G.value;
          return (
            Object.keys(t).forEach((l) => {
              null !== t[l] && (e[l] = t[l]);
            }),
            m(m({}, _.value), { filters: e })
          );
        }),
        [Q] = Al(J),
        [Z, ee] = jt(
          l(() => Y.value.length),
          B(t, "pagination"),
          (e, t) => {
            W(
              {
                pagination: m(m({}, D.pagination), { current: e, pageSize: t }),
              },
              "paginate"
            );
          }
        );
      C(() => {
        (D.sorter = M.value),
          (D.sorterStates = L.value),
          (D.filters = G.value),
          (D.filterStates = U.value),
          (D.pagination =
            !1 === t.pagination
              ? {}
              : (function (e, t) {
                  const l = { current: e.current, pageSize: e.pageSize },
                    n = t && "object" == typeof t ? t : {};
                  return (
                    Object.keys(n).forEach((t) => {
                      const n = e[t];
                      "function" != typeof n && (l[t] = n);
                    }),
                    l
                  );
                })(Z.value, t.pagination)),
          (D.resetPagination = ee);
      });
      const te = l(() => {
        if (!1 === t.pagination || !Z.value.pageSize) return Y.value;
        const { current: e = 1, total: l, pageSize: n = Nt } = Z.value;
        return (
          S(e > 0, "Table", "`current` should be positive number."),
          Y.value.length < l
            ? Y.value.length > n
              ? Y.value.slice((e - 1) * n, e * n)
              : Y.value
            : Y.value.slice((e - 1) * n, e * n)
        );
      });
      C(
        () => {
          A(() => {
            const { total: e, pageSize: t = Nt } = Z.value;
            Y.value.length < e &&
              Y.value.length > t &&
              S(
                !1,
                "Table",
                "`dataSource` length is less than `pagination.total` but large than `pagination.pageSize`. Please make sure your config correct data with async mode."
              );
          });
        },
        { flush: "post" }
      );
      const le = l(() =>
          !1 === t.showExpandColumn
            ? -1
            : "nest" === P.value && void 0 === t.expandIconColumnIndex
            ? t.rowSelection
              ? 1
              : 0
            : t.expandIconColumnIndex > 0 && t.rowSelection
            ? t.expandIconColumnIndex - 1
            : t.expandIconColumnIndex
        ),
        ne = T();
      i(
        () => t.rowSelection,
        () => {
          ne.value = t.rowSelection ? m({}, t.rowSelection) : t.rowSelection;
        },
        { deep: !0, immediate: !0 }
      );
      const [oe, re] = Xt(ne, {
          prefixCls: y,
          data: Y,
          pageData: te,
          getRowKey: N,
          getRecordByKey: j,
          expandType: P,
          childrenColumnName: O,
          locale: R,
          getPopupContainer: l(() => t.getPopupContainer),
        }),
        ae = (e, l, n) => {
          let o;
          const { rowClassName: r } = t;
          return (
            (o = h("function" == typeof r ? r(e, l, n) : r)),
            h({ [`${y.value}-row-selected`]: re.value.has(N.value(e, l)) }, o)
          );
        };
      s({ selectedKeySet: re });
      const se = l(() => ("number" == typeof t.indentSize ? t.indentSize : 15)),
        ue = (e) => Q(oe(V(F(q(e)))));
      return () => {
        var e;
        const {
          expandIcon: l = a.expandIcon || Nl(R.value),
          pagination: n,
          loading: o,
          bordered: i,
        } = t;
        let s, u, d;
        if (
          !1 !== n &&
          (null === (e = Z.value) || void 0 === e ? void 0 : e.total)
        ) {
          let e;
          e = Z.value.size
            ? Z.value.size
            : "small" === p.value || "middle" === p.value
            ? "small"
            : void 0;
          const t = (t) =>
              v(
                ke,
                x(
                  x({}, Z.value),
                  {},
                  {
                    class: [
                      `${y.value}-pagination ${y.value}-pagination-${t}`,
                      Z.value.class,
                    ],
                    size: e,
                  }
                ),
                null
              ),
            l = "rtl" === g.value ? "left" : "right",
            { position: n } = Z.value;
          if (null !== n && Array.isArray(n)) {
            const e = n.find((e) => e.includes("top")),
              o = n.find((e) => e.includes("bottom")),
              r = n.every((e) => "none" == `${e}`);
            e || o || r || (u = t(l)),
              e && (s = t(e.toLowerCase().replace("top", ""))),
              o && (u = t(o.toLowerCase().replace("bottom", "")));
          } else u = t(l);
        }
        "boolean" == typeof o
          ? (d = { spinning: o })
          : "object" == typeof o && (d = m({ spinning: !0 }, o));
        const b = h(
            `${y.value}-wrapper`,
            { [`${y.value}-wrapper-rtl`]: "rtl" === g.value },
            r.class,
            $.value
          ),
          C = ye(t, ["columns"]);
        return w(
          v("div", { class: b, style: r.style }, [
            v(be, x({ spinning: !1 }, d), {
              default: () => [
                s,
                v(
                  At,
                  x(
                    x(x({}, r), C),
                    {},
                    {
                      expandedRowKeys: t.expandedRowKeys,
                      defaultExpandedRowKeys: t.defaultExpandedRowKeys,
                      expandIconColumnIndex: le.value,
                      indentSize: se.value,
                      expandIcon: l,
                      columns: c.value,
                      direction: g.value,
                      prefixCls: y.value,
                      class: h({
                        [`${y.value}-middle`]: "middle" === p.value,
                        [`${y.value}-small`]: "small" === p.value,
                        [`${y.value}-bordered`]: i,
                        [`${y.value}-empty`]: 0 === E.value.length,
                      }),
                      data: te.value,
                      rowKey: N.value,
                      rowClassName: ae,
                      internalHooks: Kt,
                      internalRefs: z,
                      onUpdateInternalRefs: K,
                      transformColumns: ue,
                      transformCellText: k.value,
                    }
                  ),
                  m(m({}, a), {
                    emptyText: () => {
                      var e, l;
                      return (
                        (null === (e = a.emptyText) || void 0 === e
                          ? void 0
                          : e.call(a)) ||
                        (null === (l = t.locale) || void 0 === l
                          ? void 0
                          : l.emptyText) ||
                        f("Table")
                      );
                    },
                  })
                ),
                u,
              ],
            }),
          ])
        );
      };
    },
  }),
  an = a({
    name: "ATable",
    inheritAttrs: !1,
    props: he(on(), { rowKey: "key" }),
    slots: Object,
    setup(e, t) {
      let { attrs: l, slots: n, expose: o } = t;
      const r = T();
      return (
        o({ table: r }),
        () => {
          var t;
          const o =
            e.columns ||
            ol(null === (t = n.default) || void 0 === t ? void 0 : t.call(n));
          return v(
            rn,
            x(
              x(x({ ref: r }, l), e),
              {},
              {
                columns: o || [],
                expandedRowRender: n.expandedRowRender || e.expandedRowRender,
                contextSlots: m({}, n),
              }
            ),
            n
          );
        }
      );
    },
  }),
  sn = a({ name: "ATableColumn", slots: Object, render: () => null }),
  un = a({
    name: "ATableColumnGroup",
    slots: Object,
    __ANT_TABLE_COLUMN_GROUP: !0,
    render: () => null,
  }),
  dn = St,
  cn = kt,
  pn = m(Et, { Cell: cn, Row: dn, name: "ATableSummary" }),
  fn = m(an, {
    SELECTION_ALL: Wt,
    SELECTION_INVERT: Ft,
    SELECTION_NONE: Lt,
    SELECTION_COLUMN: Dt,
    EXPAND_COLUMN: ft,
    Column: sn,
    ColumnGroup: un,
    Summary: pn,
    install: (e) => (
      e.component(pn.name, pn),
      e.component(cn.name, cn),
      e.component(dn.name, dn),
      e.component(an.name, an),
      e.component(sn.name, sn),
      e.component(un.name, un),
      e
    ),
  });
export { fn as _, sn as a };

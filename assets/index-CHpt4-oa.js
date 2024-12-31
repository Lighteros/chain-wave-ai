import {
  as as e,
  bT as t,
  c as n,
  bq as o,
  aK as a,
  aw as l,
  aU as r,
  gX as i,
  aJ as d,
  b9 as c,
  at as s,
  aL as u,
  gG as v,
  io as p,
  aT as y,
  aS as f,
  eO as h,
  hG as g,
  ch as b,
  r as k,
  b2 as K,
  eT as m,
  aR as x,
  dZ as w,
  bY as O,
  co as S,
  cp as C,
  n as N,
  aC as E,
  aQ as $,
  aP as P,
  ft as D,
  ck as j,
  c7 as A,
  ci as T,
  cl as I,
  gE as L,
  aV as B,
  eP as F,
  aW as M,
  aX as H,
  aY as R,
  aZ as z,
  b1 as G,
  d_ as V,
  d$ as _,
  e0 as W,
  e1 as U,
  f2 as X,
  eC as q,
} from "./index-CcOpQHgp.js";
import { L as Y } from "./List-BIqEnSiM.js";
import { e as Q } from "./PageWrapper-B6_5WjVB.js";
import { g as Z } from "./index-CaGJeHqc.js";
import { d as J } from "./debounce-CJY84BK1.js";
const ee = Symbol("TreeContextKey"),
  te = e({
    compatConfig: { MODE: 3 },
    name: "TreeContext",
    props: { value: { type: Object } },
    setup(e, o) {
      let { slots: a } = o;
      return (
        t(
          ee,
          n(() => e.value)
        ),
        () => {
          var e;
          return null === (e = a.default) || void 0 === e ? void 0 : e.call(a);
        }
      );
    },
  }),
  ne = () =>
    o(
      ee,
      n(() => ({}))
    ),
  oe = Symbol("KeysStateKey"),
  ae = () =>
    o(oe, {
      expandedKeys: a([]),
      selectedKeys: a([]),
      loadedKeys: a([]),
      loadingKeys: a([]),
      checkedKeys: a([]),
      halfCheckedKeys: a([]),
      expandedKeysSet: n(() => new Set()),
      selectedKeysSet: n(() => new Set()),
      loadedKeysSet: n(() => new Set()),
      loadingKeysSet: n(() => new Set()),
      checkedKeysSet: n(() => new Set()),
      halfCheckedKeysSet: n(() => new Set()),
      flattenNodes: a([]),
    }),
  le = (e) => {
    let { prefixCls: t, level: n, isStart: o, isEnd: a } = e;
    const r = `${t}-indent-unit`,
      i = [];
    for (let d = 0; d < n; d += 1)
      i.push(
        l(
          "span",
          {
            key: d,
            class: { [r]: !0, [`${r}-start`]: o[d], [`${r}-end`]: a[d] },
          },
          null
        )
      );
    return l("span", { "aria-hidden": "true", class: `${t}-indent` }, [i]);
  },
  re = {
    eventKey: [String, Number],
    prefixCls: String,
    title: r.any,
    data: { type: Object, default: void 0 },
    parent: { type: Object, default: void 0 },
    isStart: { type: Array },
    isEnd: { type: Array },
    active: { type: Boolean, default: void 0 },
    onMousemove: { type: Function },
    isLeaf: { type: Boolean, default: void 0 },
    checkable: { type: Boolean, default: void 0 },
    selectable: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    disableCheckbox: { type: Boolean, default: void 0 },
    icon: r.any,
    switcherIcon: r.any,
    domRef: { type: Function },
  },
  ie = {
    prefixCls: { type: String },
    motion: { type: Object },
    focusable: { type: Boolean },
    activeItem: { type: Object },
    focused: { type: Boolean },
    tabindex: { type: Number },
    checkable: { type: Boolean },
    selectable: { type: Boolean },
    disabled: { type: Boolean },
    height: { type: Number },
    itemHeight: { type: Number },
    virtual: { type: Boolean },
    onScroll: { type: Function },
    onKeydown: { type: Function },
    onFocus: { type: Function },
    onBlur: { type: Function },
    onActiveChange: { type: Function },
    onContextmenu: { type: Function },
    onListChangeStart: { type: Function },
    onListChangeEnd: { type: Function },
  },
  de = () => ({
    prefixCls: String,
    focusable: { type: Boolean, default: void 0 },
    activeKey: [Number, String],
    tabindex: Number,
    children: r.any,
    treeData: { type: Array },
    fieldNames: { type: Object },
    showLine: { type: [Boolean, Object], default: void 0 },
    showIcon: { type: Boolean, default: void 0 },
    icon: r.any,
    selectable: { type: Boolean, default: void 0 },
    expandAction: [String, Boolean],
    disabled: { type: Boolean, default: void 0 },
    multiple: { type: Boolean, default: void 0 },
    checkable: { type: Boolean, default: void 0 },
    checkStrictly: { type: Boolean, default: void 0 },
    draggable: { type: [Function, Boolean] },
    defaultExpandParent: { type: Boolean, default: void 0 },
    autoExpandParent: { type: Boolean, default: void 0 },
    defaultExpandAll: { type: Boolean, default: void 0 },
    defaultExpandedKeys: { type: Array },
    expandedKeys: { type: Array },
    defaultCheckedKeys: { type: Array },
    checkedKeys: { type: [Object, Array] },
    defaultSelectedKeys: { type: Array },
    selectedKeys: { type: Array },
    allowDrop: { type: Function },
    dropIndicatorRender: { type: Function },
    onFocus: { type: Function },
    onBlur: { type: Function },
    onKeydown: { type: Function },
    onContextmenu: { type: Function },
    onClick: { type: Function },
    onDblclick: { type: Function },
    onScroll: { type: Function },
    onExpand: { type: Function },
    onCheck: { type: Function },
    onSelect: { type: Function },
    onLoad: { type: Function },
    loadData: { type: Function },
    loadedKeys: { type: Array },
    onMouseenter: { type: Function },
    onMouseleave: { type: Function },
    onRightClick: { type: Function },
    onDragstart: { type: Function },
    onDragenter: { type: Function },
    onDragover: { type: Function },
    onDragleave: { type: Function },
    onDragend: { type: Function },
    onDrop: { type: Function },
    onActiveChange: { type: Function },
    filterTreeNode: { type: Function },
    motion: r.any,
    switcherIcon: r.any,
    height: Number,
    itemHeight: Number,
    virtual: { type: Boolean, default: void 0 },
    direction: { type: String },
    rootClassName: String,
    rootStyle: Object,
  });
var ce = function (e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
        (n[o[a]] = e[o[a]]);
  }
  return n;
};
const se = "open",
  ue = "close",
  ve = e({
    compatConfig: { MODE: 3 },
    name: "ATreeNode",
    inheritAttrs: !1,
    props: re,
    isTreeNode: 1,
    setup(e, t) {
      let { attrs: o, slots: r, expose: h } = t;
      i(
        !("slots" in e.data),
        `treeData slots is deprecated, please use ${Object.keys(
          e.data.slots || {}
        ).map((e) => "`v-slot:" + e + "` ")}instead`
      );
      const g = a(!1),
        b = ne(),
        {
          expandedKeysSet: k,
          selectedKeysSet: K,
          loadedKeysSet: m,
          loadingKeysSet: x,
          checkedKeysSet: w,
          halfCheckedKeysSet: O,
        } = ae(),
        { dragOverNodeKey: S, dropPosition: C, keyEntities: N } = b.value,
        E = n(() =>
          Ne(e.eventKey, {
            expandedKeysSet: k.value,
            selectedKeysSet: K.value,
            loadedKeysSet: m.value,
            loadingKeysSet: x.value,
            checkedKeysSet: w.value,
            halfCheckedKeysSet: O.value,
            dragOverNodeKey: S,
            dropPosition: C,
            keyEntities: N,
          })
        ),
        $ = Q(() => E.value.expanded),
        P = Q(() => E.value.selected),
        D = Q(() => E.value.checked),
        j = Q(() => E.value.loaded),
        A = Q(() => E.value.loading),
        T = Q(() => E.value.halfChecked),
        I = Q(() => E.value.dragOver),
        L = Q(() => E.value.dragOverGapTop),
        B = Q(() => E.value.dragOverGapBottom),
        F = Q(() => E.value.pos),
        M = a(),
        H = n(() => {
          const { eventKey: t } = e,
            { keyEntities: n } = b.value,
            { children: o } = n[t] || {};
          return !!(o || []).length;
        }),
        R = n(() => {
          const { isLeaf: t } = e,
            { loadData: n } = b.value,
            o = H.value;
          return !1 !== t && (t || (!n && !o) || (n && j.value && !o));
        }),
        z = n(() => (R.value ? null : $.value ? se : ue)),
        G = n(() => {
          const { disabled: t } = e,
            { disabled: n } = b.value;
          return !(!n && !t);
        }),
        V = n(() => {
          const { checkable: t } = e,
            { checkable: n } = b.value;
          return !(!n || !1 === t) && n;
        }),
        _ = n(() => {
          const { selectable: t } = e,
            { selectable: n } = b.value;
          return "boolean" == typeof t ? t : n;
        }),
        W = n(() => {
          const {
            data: t,
            active: n,
            checkable: o,
            disableCheckbox: a,
            disabled: l,
            selectable: r,
          } = e;
          return d(
            d(
              {
                active: n,
                checkable: o,
                disableCheckbox: a,
                disabled: l,
                selectable: r,
              },
              t
            ),
            {
              dataRef: t,
              data: t,
              isLeaf: R.value,
              checked: D.value,
              expanded: $.value,
              loading: A.value,
              selected: P.value,
              halfChecked: T.value,
            }
          );
        }),
        U = c(),
        X = n(() => {
          const { eventKey: t } = e,
            { keyEntities: n } = b.value,
            { parent: o } = n[t] || {};
          return d(d({}, Ee(d({}, e, E.value))), { parent: o });
        }),
        q = s({
          eventData: X,
          eventKey: n(() => e.eventKey),
          selectHandle: M,
          pos: F,
          key: U.vnode.key,
        });
      h(q);
      const Y = (e) => {
          const { onNodeDoubleClick: t } = b.value;
          t(e, X.value);
        },
        Z = (t) => {
          if (G.value) return;
          const { disableCheckbox: n } = e,
            { onNodeCheck: o } = b.value;
          if (!V.value || n) return;
          t.preventDefault();
          const a = !D.value;
          o(t, X.value, a);
        },
        J = (e) => {
          const { onNodeClick: t } = b.value;
          t(e, X.value),
            _.value
              ? ((e) => {
                  if (G.value) return;
                  const { onNodeSelect: t } = b.value;
                  e.preventDefault(), t(e, X.value);
                })(e)
              : Z(e);
        },
        ee = (e) => {
          const { onNodeMouseEnter: t } = b.value;
          t(e, X.value);
        },
        te = (e) => {
          const { onNodeMouseLeave: t } = b.value;
          t(e, X.value);
        },
        oe = (e) => {
          const { onNodeContextMenu: t } = b.value;
          t(e, X.value);
        },
        re = (e) => {
          const { onNodeDragStart: t } = b.value;
          e.stopPropagation(), (g.value = !0), t(e, q);
          try {
            e.dataTransfer.setData("text/plain", "");
          } catch (n) {}
        },
        ie = (e) => {
          const { onNodeDragEnter: t } = b.value;
          e.preventDefault(), e.stopPropagation(), t(e, q);
        },
        de = (e) => {
          const { onNodeDragOver: t } = b.value;
          e.preventDefault(), e.stopPropagation(), t(e, q);
        },
        ve = (e) => {
          const { onNodeDragLeave: t } = b.value;
          e.stopPropagation(), t(e, q);
        },
        pe = (e) => {
          const { onNodeDragEnd: t } = b.value;
          e.stopPropagation(), (g.value = !1), t(e, q);
        },
        ye = (e) => {
          const { onNodeDrop: t } = b.value;
          e.preventDefault(), e.stopPropagation(), (g.value = !1), t(e, q);
        },
        fe = (e) => {
          const { onNodeExpand: t } = b.value;
          A.value || t(e, X.value);
        },
        he = () => {
          const { draggable: e, prefixCls: t } = b.value;
          return e && (null == e ? void 0 : e.icon)
            ? l("span", { class: `${t}-draggable-icon` }, [e.icon])
            : null;
        },
        ge = () => {
          const { loadData: e, onNodeLoad: t } = b.value;
          A.value ||
            (e && $.value && !R.value && (H.value || j.value || t(X.value)));
        };
      u(() => {
        ge();
      }),
        v(() => {
          ge();
        });
      const be = () => {
          const { prefixCls: t } = b.value,
            n = (() => {
              var t, n, o;
              const {
                  switcherIcon: a = r.switcherIcon ||
                    (null === (t = b.value.slots) || void 0 === t
                      ? void 0
                      : t[
                          null ===
                            (o =
                              null === (n = e.data) || void 0 === n
                                ? void 0
                                : n.slots) || void 0 === o
                            ? void 0
                            : o.switcherIcon
                        ]),
                } = e,
                { switcherIcon: l } = b.value,
                i = a || l;
              return "function" == typeof i ? i(W.value) : i;
            })();
          if (R.value)
            return !1 !== n
              ? l("span", { class: f(`${t}-switcher`, `${t}-switcher-noop`) }, [
                  n,
                ])
              : null;
          const o = f(`${t}-switcher`, `${t}-switcher_${$.value ? se : ue}`);
          return !1 !== n ? l("span", { onClick: fe, class: o }, [n]) : null;
        },
        ke = () => {
          var t, n;
          const { disableCheckbox: o } = e,
            { prefixCls: a } = b.value,
            r = G.value;
          return V.value
            ? l(
                "span",
                {
                  class: f(
                    `${a}-checkbox`,
                    D.value && `${a}-checkbox-checked`,
                    !D.value && T.value && `${a}-checkbox-indeterminate`,
                    (r || o) && `${a}-checkbox-disabled`
                  ),
                  onClick: Z,
                },
                [
                  null === (n = (t = b.value).customCheckable) || void 0 === n
                    ? void 0
                    : n.call(t),
                ]
              )
            : null;
        },
        Ke = () => {
          const { prefixCls: e } = b.value;
          return l(
            "span",
            {
              class: f(
                `${e}-iconEle`,
                `${e}-icon__${z.value || "docu"}`,
                A.value && `${e}-icon_loading`
              ),
            },
            null
          );
        },
        me = () => {
          const { disabled: t, eventKey: n } = e,
            {
              draggable: o,
              dropLevelOffset: a,
              dropPosition: l,
              prefixCls: r,
              indent: i,
              dropIndicatorRender: d,
              dragOverNodeKey: c,
              direction: s,
            } = b.value;
          return !t && !1 !== o && c === n
            ? d({
                dropPosition: l,
                dropLevelOffset: a,
                indent: i,
                prefixCls: r,
                direction: s,
              })
            : null;
        },
        xe = () => {
          var t, n, o, a, i, d;
          const { icon: c = r.icon, data: s } = e,
            u =
              r.title ||
              (null === (t = b.value.slots) || void 0 === t
                ? void 0
                : t[
                    null ===
                      (o =
                        null === (n = e.data) || void 0 === n
                          ? void 0
                          : n.slots) || void 0 === o
                      ? void 0
                      : o.title
                  ]) ||
              (null === (a = b.value.slots) || void 0 === a
                ? void 0
                : a.title) ||
              e.title,
            { prefixCls: v, showIcon: p, icon: y, loadData: h } = b.value,
            k = G.value,
            K = `${v}-node-content-wrapper`;
          let m, x;
          if (p) {
            const e =
              c ||
              (null === (i = b.value.slots) || void 0 === i
                ? void 0
                : i[
                    null === (d = null == s ? void 0 : s.slots) || void 0 === d
                      ? void 0
                      : d.icon
                  ]) ||
              y;
            m = e
              ? l(
                  "span",
                  { class: f(`${v}-iconEle`, `${v}-icon__customize`) },
                  ["function" == typeof e ? e(W.value) : e]
                )
              : Ke();
          } else h && A.value && (m = Ke());
          (x = "function" == typeof u ? u(W.value) : u),
            (x = void 0 === x ? "---" : x);
          const w = l("span", { class: `${v}-title` }, [x]);
          return l(
            "span",
            {
              ref: M,
              title: "string" == typeof u ? u : "",
              class: f(
                `${K}`,
                `${K}-${z.value || "normal"}`,
                !k && (P.value || g.value) && `${v}-node-selected`
              ),
              onMouseenter: ee,
              onMouseleave: te,
              onContextmenu: oe,
              onClick: J,
              onDblclick: Y,
            },
            [m, w, me()]
          );
        };
      return () => {
        const t = d(d({}, e), o),
          {
            eventKey: n,
            isLeaf: a,
            isStart: r,
            isEnd: i,
            domRef: c,
            active: s,
            data: u,
            onMousemove: v,
            selectable: h,
          } = t,
          g = ce(t, [
            "eventKey",
            "isLeaf",
            "isStart",
            "isEnd",
            "domRef",
            "active",
            "data",
            "onMousemove",
            "selectable",
          ]),
          {
            prefixCls: k,
            filterTreeNode: K,
            keyEntities: m,
            dropContainerKey: x,
            dropTargetKey: w,
            draggingNodeKey: O,
          } = b.value,
          S = G.value,
          C = p(g, { aria: !0, data: !0 }),
          { level: N } = m[n] || {},
          E = i[i.length - 1],
          j = (() => {
            const { data: t } = e,
              { draggable: n } = b.value;
            return !(!n || (n.nodeDraggable && !n.nodeDraggable(t)));
          })(),
          F = !S && j,
          M = O === n,
          H = void 0 !== h ? { "aria-selected": !!h } : void 0;
        return l(
          "div",
          y(
            y(
              {
                ref: c,
                class: f(o.class, `${k}-treenode`, {
                  [`${k}-treenode-disabled`]: S,
                  [`${k}-treenode-switcher-${$.value ? "open" : "close"}`]: !a,
                  [`${k}-treenode-checkbox-checked`]: D.value,
                  [`${k}-treenode-checkbox-indeterminate`]: T.value,
                  [`${k}-treenode-selected`]: P.value,
                  [`${k}-treenode-loading`]: A.value,
                  [`${k}-treenode-active`]: s,
                  [`${k}-treenode-leaf-last`]: E,
                  [`${k}-treenode-draggable`]: F,
                  dragging: M,
                  "drop-target": w === n,
                  "drop-container": x === n,
                  "drag-over": !S && I.value,
                  "drag-over-gap-top": !S && L.value,
                  "drag-over-gap-bottom": !S && B.value,
                  "filter-node": K && K(X.value),
                }),
                style: o.style,
                draggable: F,
                "aria-grabbed": M,
                onDragstart: F ? re : void 0,
                onDragenter: j ? ie : void 0,
                onDragover: j ? de : void 0,
                onDragleave: j ? ve : void 0,
                onDrop: j ? ye : void 0,
                onDragend: j ? pe : void 0,
                onMousemove: v,
              },
              H
            ),
            C
          ),
          [
            l(le, { prefixCls: k, level: N, isStart: r, isEnd: i }, null),
            he(),
            be(),
            ke(),
            xe(),
          ]
        );
      };
    },
  });
function pe(e, t) {
  if (!e) return [];
  const n = e.slice(),
    o = n.indexOf(t);
  return o >= 0 && n.splice(o, 1), n;
}
function ye(e, t) {
  const n = (e || []).slice();
  return -1 === n.indexOf(t) && n.push(t), n;
}
function fe(e) {
  return e.split("-");
}
function he(e, t) {
  return `${e}-${t}`;
}
function ge(e) {
  if (e.parent) {
    const t = fe(e.pos);
    return Number(t[t.length - 1]) === e.parent.children.length - 1;
  }
  return !1;
}
function be(e, t, n, o, a, l, r, i, d, c) {
  var s;
  const { clientX: u, clientY: v } = e,
    { top: p, height: y } = e.target.getBoundingClientRect(),
    f =
      (("rtl" === c ? -1 : 1) * (((null == a ? void 0 : a.x) || 0) - u) - 12) /
      o;
  let h = i[n.eventKey];
  if (v < p + y / 2) {
    const e = r.findIndex((e) => e.key === h.key),
      t = r[e <= 0 ? 0 : e - 1].key;
    h = i[t];
  }
  const g = h.key,
    b = h,
    k = h.key;
  let K = 0,
    m = 0;
  if (!d.has(g))
    for (let S = 0; S < f && ge(h); S += 1) (h = h.parent), (m += 1);
  const x = t.eventData,
    w = h.node;
  let O = !0;
  return (
    (function (e) {
      const t = fe(e.pos);
      return 0 === Number(t[t.length - 1]);
    })(h) &&
    0 === h.level &&
    v < p + y / 2 &&
    l({ dragNode: x, dropNode: w, dropPosition: -1 }) &&
    h.key === n.eventKey
      ? (K = -1)
      : (b.children || []).length && d.has(k)
      ? l({ dragNode: x, dropNode: w, dropPosition: 0 })
        ? (K = 0)
        : (O = !1)
      : 0 === m
      ? f > -1.5
        ? l({ dragNode: x, dropNode: w, dropPosition: 1 })
          ? (K = 1)
          : (O = !1)
        : l({ dragNode: x, dropNode: w, dropPosition: 0 })
        ? (K = 0)
        : l({ dragNode: x, dropNode: w, dropPosition: 1 })
        ? (K = 1)
        : (O = !1)
      : l({ dragNode: x, dropNode: w, dropPosition: 1 })
      ? (K = 1)
      : (O = !1),
    {
      dropPosition: K,
      dropLevelOffset: m,
      dropTargetKey: h.key,
      dropTargetPos: h.pos,
      dragOverNodeKey: k,
      dropContainerKey:
        0 === K
          ? null
          : (null === (s = h.parent) || void 0 === s ? void 0 : s.key) || null,
      dropAllowed: O,
    }
  );
}
function ke(e, t) {
  if (!e) return;
  const { multiple: n } = t;
  return n ? e.slice() : e.length ? [e[0]] : e;
}
function Ke(e) {
  if (!e) return null;
  let t;
  if (Array.isArray(e)) t = { checkedKeys: e, halfCheckedKeys: void 0 };
  else {
    if ("object" != typeof e) return null;
    t = {
      checkedKeys: e.checked || void 0,
      halfCheckedKeys: e.halfChecked || void 0,
    };
  }
  return t;
}
function me(e, t) {
  const n = new Set();
  function o(e) {
    if (n.has(e)) return;
    const a = t[e];
    if (!a) return;
    n.add(e);
    const { parent: l, node: r } = a;
    r.disabled || (l && o(l.key));
  }
  return (
    (e || []).forEach((e) => {
      o(e);
    }),
    [...n]
  );
}
var xe = function (e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
        (n[o[a]] = e[o[a]]);
  }
  return n;
};
function we(e, t) {
  return null != e ? e : t;
}
function Oe(e) {
  const { title: t, _title: n, key: o, children: a } = e || {},
    l = t || "title";
  return {
    title: l,
    _title: n || [l],
    key: o || "key",
    children: a || "children",
  };
}
function Se(e) {
  return (function e() {
    return h(
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
    ).map((t) => {
      var n, o, a, l;
      if (
        !(function (e) {
          return e && e.type && e.type.isTreeNode;
        })(t)
      )
        return null;
      const r = t.children || {},
        i = t.key,
        c = {};
      for (const [e, d] of Object.entries(t.props)) c[g(e)] = d;
      const {
          isLeaf: s,
          checkable: u,
          selectable: v,
          disabled: p,
          disableCheckbox: y,
        } = c,
        f = {
          isLeaf: s || "" === s || void 0,
          checkable: u || "" === u || void 0,
          selectable: v || "" === v || void 0,
          disabled: p || "" === p || void 0,
          disableCheckbox: y || "" === y || void 0,
        },
        h = d(d({}, c), f),
        {
          title: b = null === (n = r.title) || void 0 === n
            ? void 0
            : n.call(r, h),
          icon: k = null === (o = r.icon) || void 0 === o
            ? void 0
            : o.call(r, h),
          switcherIcon: K = null === (a = r.switcherIcon) || void 0 === a
            ? void 0
            : a.call(r, h),
        } = c,
        m = xe(c, ["title", "icon", "switcherIcon"]),
        x = null === (l = r.default) || void 0 === l ? void 0 : l.call(r),
        w = d(
          d(d({}, m), {
            title: b,
            icon: k,
            switcherIcon: K,
            key: i,
            isLeaf: s,
          }),
          f
        ),
        O = e(x);
      return O.length && (w.children = O), w;
    });
  })(e);
}
function Ce(e) {
  let {
    initWrapper: t,
    processEntity: n,
    onProcessFinished: o,
    externalGetKey: a,
    childrenPropName: l,
    fieldNames: r,
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const i = a || (arguments.length > 2 ? arguments[2] : void 0),
    d = {},
    c = {};
  let s = { posEntities: d, keyEntities: c };
  return (
    t && (s = t(s) || s),
    (function (e, t, n) {
      let o = {};
      (o = "object" == typeof n ? n : { externalGetKey: n }), (o = o || {});
      const { childrenPropName: a, externalGetKey: l, fieldNames: r } = o,
        { key: i, children: d } = Oe(r),
        c = a || d;
      let s;
      l
        ? "string" == typeof l
          ? (s = (e) => e[l])
          : "function" == typeof l && (s = (e) => l(e))
        : (s = (e, t) => we(e[i], t)),
        (function n(o, a, l, r) {
          const i = o ? o[c] : e,
            d = o ? he(l.pos, a) : "0",
            u = o ? [...r, o] : [];
          if (o) {
            const e = s(o, d),
              n = {
                node: o,
                index: a,
                pos: d,
                key: e,
                parentPos: l.node ? l.pos : null,
                level: l.level + 1,
                nodes: u,
              };
            t(n);
          }
          i &&
            i.forEach((e, t) => {
              n(e, t, { node: o, pos: d, level: l ? l.level + 1 : -1 }, u);
            });
        })(null);
    })(
      e,
      (e) => {
        const {
            node: t,
            index: o,
            pos: a,
            key: l,
            parentPos: r,
            level: i,
            nodes: u,
          } = e,
          v = { node: t, nodes: u, index: o, key: l, pos: a, level: i },
          p = we(l, a);
        (d[a] = v),
          (c[p] = v),
          (v.parent = d[r]),
          v.parent &&
            ((v.parent.children = v.parent.children || []),
            v.parent.children.push(v)),
          n && n(v, s);
      },
      { externalGetKey: i, childrenPropName: l, fieldNames: r }
    ),
    o && o(s),
    s
  );
}
function Ne(e, t) {
  let {
    expandedKeysSet: n,
    selectedKeysSet: o,
    loadedKeysSet: a,
    loadingKeysSet: l,
    checkedKeysSet: r,
    halfCheckedKeysSet: i,
    dragOverNodeKey: d,
    dropPosition: c,
    keyEntities: s,
  } = t;
  const u = s[e];
  return {
    eventKey: e,
    expanded: n.has(e),
    selected: o.has(e),
    loaded: a.has(e),
    loading: l.has(e),
    checked: r.has(e),
    halfChecked: i.has(e),
    pos: String(u ? u.pos : ""),
    parent: u.parent,
    dragOver: d === e && 0 === c,
    dragOverGapTop: d === e && -1 === c,
    dragOverGapBottom: d === e && 1 === c,
  };
}
function Ee(e) {
  const {
      data: t,
      expanded: n,
      selected: o,
      checked: a,
      loaded: l,
      loading: r,
      halfChecked: i,
      dragOver: c,
      dragOverGapTop: s,
      dragOverGapBottom: u,
      pos: v,
      active: p,
      eventKey: y,
    } = e,
    f = d(d({ dataRef: t }, t), {
      expanded: n,
      selected: o,
      checked: a,
      loaded: l,
      loading: r,
      halfChecked: i,
      dragOver: c,
      dragOverGapTop: s,
      dragOverGapBottom: u,
      pos: v,
      active: p,
      eventKey: y,
      key: y,
    });
  return "props" in f || Object.defineProperty(f, "props", { get: () => e }), f;
}
function $e(e, t) {
  const n = new Set();
  return (
    e.forEach((e) => {
      t.has(e) || n.add(e);
    }),
    n
  );
}
function Pe(e) {
  const { disabled: t, disableCheckbox: n, checkable: o } = e || {};
  return !(!t && !n) || !1 === o;
}
function De(e, t, n, o, a, l) {
  let r;
  r = l || Pe;
  const i = new Set(e.filter((e) => !!n[e]));
  let d;
  return (
    (d =
      !0 === t
        ? (function (e, t, n, o) {
            const a = new Set(e),
              l = new Set();
            for (let i = 0; i <= n; i += 1)
              (t.get(i) || new Set()).forEach((e) => {
                const { key: t, node: n, children: l = [] } = e;
                a.has(t) &&
                  !o(n) &&
                  l
                    .filter((e) => !o(e.node))
                    .forEach((e) => {
                      a.add(e.key);
                    });
              });
            const r = new Set();
            for (let i = n; i >= 0; i -= 1)
              (t.get(i) || new Set()).forEach((e) => {
                const { parent: t, node: n } = e;
                if (o(n) || !e.parent || r.has(e.parent.key)) return;
                if (o(e.parent.node)) return void r.add(t.key);
                let i = !0,
                  d = !1;
                (t.children || [])
                  .filter((e) => !o(e.node))
                  .forEach((e) => {
                    let { key: t } = e;
                    const n = a.has(t);
                    i && !n && (i = !1), d || (!n && !l.has(t)) || (d = !0);
                  }),
                  i && a.add(t.key),
                  d && l.add(t.key),
                  r.add(t.key);
              });
            return {
              checkedKeys: Array.from(a),
              halfCheckedKeys: Array.from($e(l, a)),
            };
          })(i, a, o, r)
        : (function (e, t, n, o, a) {
            const l = new Set(e);
            let r = new Set(t);
            for (let d = 0; d <= o; d += 1)
              (n.get(d) || new Set()).forEach((e) => {
                const { key: t, node: n, children: o = [] } = e;
                l.has(t) ||
                  r.has(t) ||
                  a(n) ||
                  o
                    .filter((e) => !a(e.node))
                    .forEach((e) => {
                      l.delete(e.key);
                    });
              });
            r = new Set();
            const i = new Set();
            for (let d = o; d >= 0; d -= 1)
              (n.get(d) || new Set()).forEach((e) => {
                const { parent: t, node: n } = e;
                if (a(n) || !e.parent || i.has(e.parent.key)) return;
                if (a(e.parent.node)) return void i.add(t.key);
                let o = !0,
                  d = !1;
                (t.children || [])
                  .filter((e) => !a(e.node))
                  .forEach((e) => {
                    let { key: t } = e;
                    const n = l.has(t);
                    o && !n && (o = !1), d || (!n && !r.has(t)) || (d = !0);
                  }),
                  o || l.delete(t.key),
                  d && r.add(t.key),
                  i.add(t.key);
              });
            return {
              checkedKeys: Array.from(l),
              halfCheckedKeys: Array.from($e(r, l)),
            };
          })(i, t.halfCheckedKeys, a, o, r)),
    d
  );
}
function je(e) {
  const t = k(0),
    n = a();
  return (
    K(() => {
      const o = new Map();
      let a = 0;
      const l = e.value || {};
      for (const e in l)
        if (Object.prototype.hasOwnProperty.call(l, e)) {
          const t = l[e],
            { level: n } = t;
          let r = o.get(n);
          r || ((r = new Set()), o.set(n, r)), r.add(t), (a = Math.max(a, n));
        }
      (t.value = a), (n.value = o);
    }),
    { maxLevel: t, levelEntities: n }
  );
}
var Ae = function (e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
        (n[o[a]] = e[o[a]]);
  }
  return n;
};
const Te = e({
  compatConfig: { MODE: 3 },
  name: "MotionTreeNode",
  inheritAttrs: !1,
  props: d(d({}, re), {
    active: Boolean,
    motion: Object,
    motionNodes: { type: Array },
    onMotionStart: Function,
    onMotionEnd: Function,
    motionType: String,
  }),
  setup(e, t) {
    let { attrs: o, slots: r } = t;
    const i = a(!0),
      d = ne(),
      c = a(!1),
      s = n(() => (e.motion ? e.motion : m())),
      v = (t, n) => {
        var o, a, l, r;
        "appear" === n
          ? null ===
              (a =
                null === (o = s.value) || void 0 === o
                  ? void 0
                  : o.onAfterEnter) ||
            void 0 === a ||
            a.call(o, t)
          : "leave" === n &&
            (null ===
              (r =
                null === (l = s.value) || void 0 === l
                  ? void 0
                  : l.onAfterLeave) ||
              void 0 === r ||
              r.call(l, t)),
          c.value || e.onMotionEnd(),
          (c.value = !0);
      };
    return (
      x(
        () => e.motionNodes,
        () => {
          e.motionNodes &&
            "hide" === e.motionType &&
            i.value &&
            N(() => {
              i.value = !1;
            });
        },
        { immediate: !0, flush: "post" }
      ),
      u(() => {
        e.motionNodes && e.onMotionStart();
      }),
      w(() => {
        e.motionNodes && v();
      }),
      () => {
        const {
            motion: t,
            motionNodes: n,
            motionType: a,
            active: c,
            eventKey: u,
          } = e,
          p = Ae(e, [
            "motion",
            "motionNodes",
            "motionType",
            "active",
            "eventKey",
          ]);
        return n
          ? l(
              C,
              y(
                y({}, s.value),
                {},
                {
                  appear: "show" === a,
                  onAfterAppear: (e) => v(e, "appear"),
                  onAfterLeave: (e) => v(e, "leave"),
                }
              ),
              {
                default: () => [
                  O(
                    l(
                      "div",
                      { class: `${d.value.prefixCls}-treenode-motion` },
                      [
                        n.map((e) => {
                          const t = Ae(e.data, []),
                            { title: n, key: o, isStart: a, isEnd: i } = e;
                          return (
                            delete t.children,
                            l(
                              ve,
                              y(
                                y({}, t),
                                {},
                                {
                                  title: n,
                                  active: c,
                                  data: e.data,
                                  key: o,
                                  eventKey: o,
                                  isStart: a,
                                  isEnd: i,
                                }
                              ),
                              r
                            )
                          );
                        }),
                      ]
                    ),
                    [[S, i.value]]
                  ),
                ],
              }
            )
          : l(
              ve,
              y(
                y({ class: o.class, style: o.style }, p),
                {},
                { active: c, eventKey: u }
              ),
              r
            );
      }
    );
  },
});
function Ie(e, t, n) {
  const o = e.findIndex((e) => e.key === n),
    a = e[o + 1],
    l = t.findIndex((e) => e.key === n);
  if (a) {
    const e = t.findIndex((e) => e.key === a.key);
    return t.slice(l + 1, e);
  }
  return t.slice(l + 1);
}
var Le = function (e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
        (n[o[a]] = e[o[a]]);
  }
  return n;
};
const Be = {
    width: 0,
    height: 0,
    display: "flex",
    overflow: "hidden",
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  Fe = () => {},
  Me = `RC_TREE_MOTION_${Math.random()}`,
  He = { key: Me },
  Re = { key: Me, level: 0, index: 0, pos: "0", node: He, nodes: [He] },
  ze = {
    parent: null,
    children: [],
    pos: Re.pos,
    data: He,
    title: null,
    key: Me,
    isStart: [],
    isEnd: [],
  };
function Ge(e, t, n, o) {
  return !1 !== t && n ? e.slice(0, Math.ceil(n / o) + 1) : e;
}
function Ve(e) {
  const { key: t, pos: n } = e;
  return we(t, n);
}
function _e(e) {
  let t = String(e.key),
    n = e;
  for (; n.parent; ) (n = n.parent), (t = `${n.key} > ${t}`);
  return t;
}
const We = e({
  compatConfig: { MODE: 3 },
  name: "NodeList",
  inheritAttrs: !1,
  props: ie,
  setup(e, t) {
    let { expose: o, attrs: r } = t;
    const i = k(),
      c = k(),
      { expandedKeys: s, flattenNodes: u } = ae();
    o({
      scrollTo: (e) => {
        i.value.scrollTo(e);
      },
      getIndentWidth: () => c.value.offsetWidth,
    });
    const v = a(u.value),
      p = a([]),
      f = k(null);
    function h() {
      (v.value = u.value),
        (p.value = []),
        (f.value = null),
        e.onListChangeEnd();
    }
    const g = ne();
    x([() => s.value.slice(), u], (t, n) => {
      let [o, a] = t,
        [l, r] = n;
      const i = (function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const n = e.length,
          o = t.length;
        if (1 !== Math.abs(n - o)) return { add: !1, key: null };
        function a(e, t) {
          const n = new Map();
          e.forEach((e) => {
            n.set(e, !0);
          });
          const o = t.filter((e) => !n.has(e));
          return 1 === o.length ? o[0] : null;
        }
        return n < o ? { add: !0, key: a(e, t) } : { add: !1, key: a(t, e) };
      })(l, o);
      if (null !== i.key) {
        const { virtual: t, height: n, itemHeight: o } = e;
        if (i.add) {
          const e = r.findIndex((e) => {
              let { key: t } = e;
              return t === i.key;
            }),
            l = Ge(Ie(r, a, i.key), t, n, o),
            d = r.slice();
          d.splice(e + 1, 0, ze),
            (v.value = d),
            (p.value = l),
            (f.value = "show");
        } else {
          const e = a.findIndex((e) => {
              let { key: t } = e;
              return t === i.key;
            }),
            l = Ge(Ie(a, r, i.key), t, n, o),
            d = a.slice();
          d.splice(e + 1, 0, ze),
            (v.value = d),
            (p.value = l),
            (f.value = "hide");
        }
      } else r !== a && (v.value = a);
    }),
      x(
        () => g.value.dragging,
        (e) => {
          e || h();
        }
      );
    const K = n(() => (void 0 === e.motion ? v.value : u.value)),
      m = () => {
        e.onActiveChange(null);
      };
    return () => {
      const t = d(d({}, e), r),
        {
          prefixCls: n,
          selectable: o,
          checkable: a,
          disabled: s,
          motion: u,
          height: v,
          itemHeight: g,
          virtual: k,
          focusable: x,
          activeItem: w,
          focused: O,
          tabindex: S,
          onKeydown: C,
          onFocus: N,
          onBlur: $,
          onListChangeStart: P,
          onListChangeEnd: D,
        } = t,
        j = Le(t, [
          "prefixCls",
          "selectable",
          "checkable",
          "disabled",
          "motion",
          "height",
          "itemHeight",
          "virtual",
          "focusable",
          "activeItem",
          "focused",
          "tabindex",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onListChangeStart",
          "onListChangeEnd",
        ]);
      return l(E, null, [
        O && w && l("span", { style: Be, "aria-live": "assertive" }, [_e(w)]),
        l("div", null, [
          l(
            "input",
            {
              style: Be,
              disabled: !1 === x || s,
              tabindex: !1 !== x ? S : null,
              onKeydown: C,
              onFocus: N,
              onBlur: $,
              value: "",
              onChange: Fe,
              "aria-label": "for screen reader",
            },
            null
          ),
        ]),
        l(
          "div",
          {
            class: `${n}-treenode`,
            "aria-hidden": !0,
            style: {
              position: "absolute",
              pointerEvents: "none",
              visibility: "hidden",
              height: 0,
              overflow: "hidden",
            },
          },
          [
            l("div", { class: `${n}-indent` }, [
              l("div", { ref: c, class: `${n}-indent-unit` }, null),
            ]),
          ]
        ),
        l(
          Y,
          y(
            y({}, b(j, ["onActiveChange"])),
            {},
            {
              data: K.value,
              itemKey: Ve,
              height: v,
              fullHeight: !1,
              virtual: k,
              itemHeight: g,
              prefixCls: `${n}-list`,
              ref: i,
              onVisibleChange: (e, t) => {
                const n = new Set(e);
                t.filter((e) => !n.has(e)).some((e) => Ve(e) === Me) && h();
              },
            }
          ),
          {
            default: (e) => {
              const { pos: t } = e,
                n = Le(e.data, []),
                { title: o, key: a, isStart: r, isEnd: i } = e,
                d = we(a, t);
              return (
                delete n.key,
                delete n.children,
                l(
                  Te,
                  y(
                    y({}, n),
                    {},
                    {
                      eventKey: d,
                      title: o,
                      active: !!w && a === w.key,
                      data: e.data,
                      isStart: r,
                      isEnd: i,
                      motion: u,
                      motionNodes: a === Me ? p.value : null,
                      motionType: f.value,
                      onMotionStart: P,
                      onMotionEnd: h,
                      onMousemove: m,
                    }
                  ),
                  null
                )
              );
            },
          }
        ),
      ]);
    };
  },
});
const Ue = e({
  compatConfig: { MODE: 3 },
  name: "Tree",
  inheritAttrs: !1,
  props: $(de(), {
    prefixCls: "vc-tree",
    showLine: !1,
    showIcon: !0,
    selectable: !0,
    multiple: !1,
    checkable: !1,
    disabled: !1,
    checkStrictly: !1,
    draggable: !1,
    expandAction: !1,
    defaultExpandParent: !0,
    autoExpandParent: !1,
    defaultExpandAll: !1,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: function (e) {
      let { dropPosition: t, dropLevelOffset: n, indent: o } = e;
      const a = {
        pointerEvents: "none",
        position: "absolute",
        right: 0,
        backgroundColor: "red",
        height: "2px",
      };
      switch (t) {
        case -1:
          (a.top = 0), (a.left = -n * o + "px");
          break;
        case 1:
          (a.bottom = 0), (a.left = -n * o + "px");
          break;
        case 0:
          (a.bottom = 0), (a.left = `${o}`);
      }
      return l("div", { style: a }, null);
    },
    allowDrop: () => !0,
  }),
  setup(e, o) {
    let { attrs: r, slots: i, expose: c } = o;
    const u = a(!1);
    let v = {};
    const h = a(),
      g = a([]),
      k = a([]),
      m = a([]),
      w = a([]),
      O = a([]),
      S = a([]),
      C = {},
      E = s({
        draggingNodeKey: null,
        dragChildrenKeys: [],
        dropTargetKey: null,
        dropPosition: null,
        dropContainerKey: null,
        dropLevelOffset: null,
        dropTargetPos: null,
        dropAllowed: !0,
        dragOverNodeKey: null,
      }),
      $ = a([]);
    x(
      [() => e.treeData, () => e.children],
      () => {
        $.value =
          void 0 !== e.treeData ? e.treeData.slice() : Se(D(e.children));
      },
      { immediate: !0, deep: !0 }
    );
    const A = a({}),
      T = a(!1),
      I = a(null),
      L = a(!1),
      B = n(() => Oe(e.fieldNames)),
      F = a();
    let M = null,
      H = null,
      R = null;
    const z = n(() => ({
        expandedKeysSet: G.value,
        selectedKeysSet: V.value,
        loadedKeysSet: _.value,
        loadingKeysSet: W.value,
        checkedKeysSet: U.value,
        halfCheckedKeysSet: X.value,
        dragOverNodeKey: E.dragOverNodeKey,
        dropPosition: E.dropPosition,
        keyEntities: A.value,
      })),
      G = n(() => new Set(S.value)),
      V = n(() => new Set(g.value)),
      _ = n(() => new Set(w.value)),
      W = n(() => new Set(O.value)),
      U = n(() => new Set(k.value)),
      X = n(() => new Set(m.value));
    K(() => {
      if ($.value) {
        const e = Ce($.value, { fieldNames: B.value });
        A.value = d({ [Me]: Re }, e.keyEntities);
      }
    });
    let q = !1;
    x(
      [() => e.expandedKeys, () => e.autoExpandParent, A],
      (t, n) => {
        let [o, a] = t,
          [l, r] = n,
          i = S.value;
        if (void 0 !== e.expandedKeys || (q && a !== r))
          i =
            e.autoExpandParent || (!q && e.defaultExpandParent)
              ? me(e.expandedKeys, A.value)
              : e.expandedKeys;
        else if (!q && e.defaultExpandAll) {
          const e = d({}, A.value);
          delete e[Me], (i = Object.keys(e).map((t) => e[t].key));
        } else
          !q &&
            e.defaultExpandedKeys &&
            (i =
              e.autoExpandParent || e.defaultExpandParent
                ? me(e.defaultExpandedKeys, A.value)
                : e.defaultExpandedKeys);
        i && (S.value = i), (q = !0);
      },
      { immediate: !0 }
    );
    const Y = a([]);
    K(() => {
      Y.value = (function (e, t, n) {
        const { _title: o, key: a, children: l } = Oe(n),
          r = new Set(!0 === t ? [] : t),
          i = [];
        return (
          (function e(n) {
            let c =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            return n.map((s, u) => {
              const v = he(c ? c.pos : "0", u),
                p = we(s[a], v);
              let y;
              for (let e = 0; e < o.length; e += 1) {
                const t = o[e];
                if (void 0 !== s[t]) {
                  y = s[t];
                  break;
                }
              }
              const f = d(d({}, b(s, [...o, a, l])), {
                title: y,
                key: p,
                parent: c,
                pos: v,
                children: null,
                data: s,
                isStart: [...(c ? c.isStart : []), 0 === u],
                isEnd: [...(c ? c.isEnd : []), u === n.length - 1],
              });
              return (
                i.push(f),
                !0 === t || r.has(p)
                  ? (f.children = e(s[l] || [], f))
                  : (f.children = []),
                f
              );
            });
          })(e),
          i
        );
      })($.value, S.value, B.value);
    }),
      K(() => {
        e.selectable &&
          (void 0 !== e.selectedKeys
            ? (g.value = ke(e.selectedKeys, e))
            : !q &&
              e.defaultSelectedKeys &&
              (g.value = ke(e.defaultSelectedKeys, e)));
      });
    const { maxLevel: Q, levelEntities: Z } = je(A);
    K(() => {
      if (e.checkable) {
        let t;
        if (
          (void 0 !== e.checkedKeys
            ? (t = Ke(e.checkedKeys) || {})
            : !q && e.defaultCheckedKeys
            ? (t = Ke(e.defaultCheckedKeys) || {})
            : $.value &&
              (t = Ke(e.checkedKeys) || {
                checkedKeys: k.value,
                halfCheckedKeys: m.value,
              }),
          t)
        ) {
          let { checkedKeys: n = [], halfCheckedKeys: o = [] } = t;
          if (!e.checkStrictly) {
            const e = De(n, !0, A.value, Q.value, Z.value);
            ({ checkedKeys: n, halfCheckedKeys: o } = e);
          }
          (k.value = n), (m.value = o);
        }
      }
    }),
      K(() => {
        e.loadedKeys && (w.value = e.loadedKeys);
      });
    const J = () => {
        d(E, {
          dragOverNodeKey: null,
          dropPosition: null,
          dropLevelOffset: null,
          dropTargetKey: null,
          dropContainerKey: null,
          dropTargetPos: null,
          dropAllowed: !1,
        });
      },
      ee = (e) => {
        F.value.scrollTo(e);
      };
    x(
      () => e.activeKey,
      () => {
        void 0 !== e.activeKey && (I.value = e.activeKey);
      },
      { immediate: !0 }
    ),
      x(
        I,
        (e) => {
          N(() => {
            null !== e && ee({ key: e });
          });
        },
        { immediate: !0, flush: "post" }
      );
    const ne = (t) => {
        void 0 === e.expandedKeys && (S.value = t);
      },
      ae = () => {
        null !== E.draggingNodeKey &&
          d(E, {
            draggingNodeKey: null,
            dropPosition: null,
            dropContainerKey: null,
            dropTargetKey: null,
            dropLevelOffset: null,
            dropAllowed: !0,
            dragOverNodeKey: null,
          }),
          (M = null),
          (R = null);
      },
      le = (t, n) => {
        const { onDragend: o } = e;
        (E.dragOverNodeKey = null),
          ae(),
          null == o || o({ event: t, node: n.eventData }),
          (H = null);
      },
      re = (e) => {
        le(e, null), window.removeEventListener("dragend", re);
      },
      ie = (t, n) => {
        const { onDragstart: o } = e,
          { eventKey: a, eventData: l } = n;
        (H = n), (M = { x: t.clientX, y: t.clientY });
        const r = pe(S.value, a);
        (E.draggingNodeKey = a),
          (E.dragChildrenKeys = (function (e, t) {
            const n = [];
            return (
              (function e() {
                (arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : []
                ).forEach((t) => {
                  let { key: o, children: a } = t;
                  n.push(o), e(a);
                });
              })(t[e].children),
              n
            );
          })(a, A.value)),
          (h.value = F.value.getIndentWidth()),
          ne(r),
          window.addEventListener("dragend", re),
          o && o({ event: t, node: l });
      },
      de = (t, n) => {
        const { onDragenter: o, onExpand: a, allowDrop: l, direction: r } = e,
          { pos: i, eventKey: c } = n;
        if ((R !== c && (R = c), !H)) return void J();
        const {
          dropPosition: s,
          dropLevelOffset: u,
          dropTargetKey: p,
          dropContainerKey: y,
          dropTargetPos: f,
          dropAllowed: g,
          dragOverNodeKey: b,
        } = be(t, H, n, h.value, M, l, Y.value, A.value, G.value, r);
        -1 === E.dragChildrenKeys.indexOf(p) && g
          ? (v || (v = {}),
            Object.keys(v).forEach((e) => {
              clearTimeout(v[e]);
            }),
            H.eventKey !== n.eventKey &&
              (v[i] = window.setTimeout(() => {
                if (null === E.draggingNodeKey) return;
                let e = S.value.slice();
                const o = A.value[n.eventKey];
                o && (o.children || []).length && (e = ye(S.value, n.eventKey)),
                  ne(e),
                  a &&
                    a(e, { node: n.eventData, expanded: !0, nativeEvent: t });
              }, 800)),
            H.eventKey !== p || 0 !== u
              ? (d(E, {
                  dragOverNodeKey: b,
                  dropPosition: s,
                  dropLevelOffset: u,
                  dropTargetKey: p,
                  dropContainerKey: y,
                  dropTargetPos: f,
                  dropAllowed: g,
                }),
                o && o({ event: t, node: n.eventData, expandedKeys: S.value }))
              : J())
          : J();
      },
      ce = (t, n) => {
        const { onDragover: o, allowDrop: a, direction: l } = e;
        if (!H) return;
        const {
          dropPosition: r,
          dropLevelOffset: i,
          dropTargetKey: c,
          dropContainerKey: s,
          dropAllowed: u,
          dropTargetPos: v,
          dragOverNodeKey: p,
        } = be(t, H, n, h.value, M, a, Y.value, A.value, G.value, l);
        -1 === E.dragChildrenKeys.indexOf(c) &&
          u &&
          (H.eventKey === c && 0 === i
            ? (null === E.dropPosition &&
                null === E.dropLevelOffset &&
                null === E.dropTargetKey &&
                null === E.dropContainerKey &&
                null === E.dropTargetPos &&
                !1 === E.dropAllowed &&
                null === E.dragOverNodeKey) ||
              J()
            : (r === E.dropPosition &&
                i === E.dropLevelOffset &&
                c === E.dropTargetKey &&
                s === E.dropContainerKey &&
                v === E.dropTargetPos &&
                u === E.dropAllowed &&
                p === E.dragOverNodeKey) ||
              d(E, {
                dropPosition: r,
                dropLevelOffset: i,
                dropTargetKey: c,
                dropContainerKey: s,
                dropTargetPos: v,
                dropAllowed: u,
                dragOverNodeKey: p,
              }),
          o && o({ event: t, node: n.eventData }));
      },
      se = (t, n) => {
        R !== n.eventKey ||
          t.currentTarget.contains(t.relatedTarget) ||
          (J(), (R = null));
        const { onDragleave: o } = e;
        o && o({ event: t, node: n.eventData });
      },
      ue = function (t, n) {
        let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        var a;
        const {
          dragChildrenKeys: l,
          dropPosition: r,
          dropTargetKey: i,
          dropTargetPos: c,
          dropAllowed: s,
        } = E;
        if (!s) return;
        const { onDrop: u } = e;
        if (((E.dragOverNodeKey = null), ae(), null === i)) return;
        const v = d(d({}, Ne(i, D(z.value))), {
          active:
            (null === (a = _e.value) || void 0 === a ? void 0 : a.key) === i,
          data: A.value[i].node,
        });
        l.indexOf(i);
        const p = fe(c),
          y = {
            event: t,
            node: Ee(v),
            dragNode: H ? H.eventData : null,
            dragNodesKeys: [H.eventKey].concat(l),
            dropToGap: 0 !== r,
            dropPosition: r + Number(p[p.length - 1]),
          };
        o || null == u || u(y), (H = null);
      },
      ve = (e, t) => {
        const { expanded: n, key: o } = t,
          a = Y.value.filter((e) => e.key === o)[0],
          l = Ee(d(d({}, Ne(o, z.value)), { data: a.data }));
        ne(n ? pe(S.value, o) : ye(S.value, o)), He(e, l);
      },
      ge = (t, n) => {
        const { onClick: o, expandAction: a } = e;
        "click" === a && ve(t, n), o && o(t, n);
      },
      xe = (t, n) => {
        const { onDblclick: o, expandAction: a } = e;
        ("doubleclick" !== a && "dblclick" !== a) || ve(t, n), o && o(t, n);
      },
      $e = (t, n) => {
        let o = g.value;
        const { onSelect: a, multiple: l } = e,
          { selected: r } = n,
          i = n[B.value.key],
          d = !r;
        o = d ? (l ? ye(o, i) : [i]) : pe(o, i);
        const c = A.value,
          s = o
            .map((e) => {
              const t = c[e];
              return t ? t.node : null;
            })
            .filter((e) => e);
        void 0 === e.selectedKeys && (g.value = o),
          a &&
            a(o, {
              event: "select",
              selected: d,
              node: n,
              selectedNodes: s,
              nativeEvent: t,
            });
      },
      Pe = (t, n, o) => {
        const { checkStrictly: a, onCheck: l } = e,
          r = n[B.value.key];
        let i;
        const d = { event: "check", node: n, checked: o, nativeEvent: t },
          c = A.value;
        if (a) {
          const t = o ? ye(k.value, r) : pe(k.value, r);
          (i = { checked: t, halfChecked: pe(m.value, r) }),
            (d.checkedNodes = t
              .map((e) => c[e])
              .filter((e) => e)
              .map((e) => e.node)),
            void 0 === e.checkedKeys && (k.value = t);
        } else {
          let { checkedKeys: t, halfCheckedKeys: n } = De(
            [...k.value, r],
            !0,
            c,
            Q.value,
            Z.value
          );
          if (!o) {
            const e = new Set(t);
            e.delete(r),
              ({ checkedKeys: t, halfCheckedKeys: n } = De(
                Array.from(e),
                { checked: !1, halfCheckedKeys: n },
                c,
                Q.value,
                Z.value
              ));
          }
          (i = t),
            (d.checkedNodes = []),
            (d.checkedNodesPositions = []),
            (d.halfCheckedKeys = n),
            t.forEach((e) => {
              const t = c[e];
              if (!t) return;
              const { node: n, pos: o } = t;
              d.checkedNodes.push(n),
                d.checkedNodesPositions.push({ node: n, pos: o });
            }),
            void 0 === e.checkedKeys && ((k.value = t), (m.value = n));
        }
        l && l(i, d);
      },
      Ae = (t) => {
        const n = t[B.value.key],
          o = new Promise((o, a) => {
            const { loadData: l, onLoad: r } = e;
            if (!l || _.value.has(n) || W.value.has(n)) return null;
            l(t)
              .then(() => {
                const a = ye(w.value, n),
                  l = pe(O.value, n);
                r && r(a, { event: "load", node: t }),
                  void 0 === e.loadedKeys && (w.value = a),
                  (O.value = l),
                  o();
              })
              .catch((t) => {
                const l = pe(O.value, n);
                if (((O.value = l), (C[n] = (C[n] || 0) + 1), C[n] >= 10)) {
                  const t = ye(w.value, n);
                  void 0 === e.loadedKeys && (w.value = t), o();
                }
                a(t);
              }),
              (O.value = ye(O.value, n));
          });
        return o.catch(() => {}), o;
      },
      Te = (t, n) => {
        const { onMouseenter: o } = e;
        o && o({ event: t, node: n });
      },
      Ie = (t, n) => {
        const { onMouseleave: o } = e;
        o && o({ event: t, node: n });
      },
      Le = (t, n) => {
        const { onRightClick: o } = e;
        o && (t.preventDefault(), o({ event: t, node: n }));
      },
      Be = (t) => {
        const { onFocus: n } = e;
        (T.value = !0), n && n(t);
      },
      Fe = (t) => {
        const { onBlur: n } = e;
        (T.value = !1), Ve(null), n && n(t);
      },
      He = (t, n) => {
        let o = S.value;
        const { onExpand: a, loadData: l } = e,
          { expanded: r } = n,
          i = n[B.value.key];
        if (L.value) return;
        o.indexOf(i);
        const d = !r;
        if (
          ((o = d ? ye(o, i) : pe(o, i)),
          ne(o),
          a && a(o, { node: n, expanded: d, nativeEvent: t }),
          d && l)
        ) {
          const e = Ae(n);
          e &&
            e
              .then(() => {})
              .catch((e) => {
                const t = pe(S.value, i);
                ne(t), Promise.reject(e);
              });
        }
      },
      ze = () => {
        L.value = !0;
      },
      Ge = () => {
        setTimeout(() => {
          L.value = !1;
        });
      },
      Ve = (t) => {
        const { onActiveChange: n } = e;
        I.value !== t &&
          (void 0 !== e.activeKey && (I.value = t),
          null !== t && ee({ key: t }),
          n && n(t));
      },
      _e = n(() =>
        null === I.value
          ? null
          : Y.value.find((e) => {
              let { key: t } = e;
              return t === I.value;
            }) || null
      ),
      Ue = (e) => {
        let t = Y.value.findIndex((e) => {
          let { key: t } = e;
          return t === I.value;
        });
        -1 === t && e < 0 && (t = Y.value.length),
          (t = (t + e + Y.value.length) % Y.value.length);
        const n = Y.value[t];
        if (n) {
          const { key: e } = n;
          Ve(e);
        } else Ve(null);
      },
      Xe = n(() =>
        Ee(d(d({}, Ne(I.value, z.value)), { data: _e.value.data, active: !0 }))
      ),
      qe = (t) => {
        const { onKeydown: n, checkable: o, selectable: a } = e;
        switch (t.which) {
          case j.UP:
            Ue(-1), t.preventDefault();
            break;
          case j.DOWN:
            Ue(1), t.preventDefault();
        }
        const l = _e.value;
        if (l && l.data) {
          const e = !1 === l.data.isLeaf || !!(l.data.children || []).length,
            n = Xe.value;
          switch (t.which) {
            case j.LEFT:
              e && G.value.has(I.value)
                ? He({}, n)
                : l.parent && Ve(l.parent.key),
                t.preventDefault();
              break;
            case j.RIGHT:
              e && !G.value.has(I.value)
                ? He({}, n)
                : l.children && l.children.length && Ve(l.children[0].key),
                t.preventDefault();
              break;
            case j.ENTER:
            case j.SPACE:
              !o || n.disabled || !1 === n.checkable || n.disableCheckbox
                ? o || !a || n.disabled || !1 === n.selectable || $e({}, n)
                : Pe({}, n, !U.value.has(I.value));
          }
        }
        n && n(t);
      };
    return (
      c({
        onNodeExpand: He,
        scrollTo: ee,
        onKeydown: qe,
        selectedKeys: n(() => g.value),
        checkedKeys: n(() => k.value),
        halfCheckedKeys: n(() => m.value),
        loadedKeys: n(() => w.value),
        loadingKeys: n(() => O.value),
        expandedKeys: n(() => S.value),
      }),
      P(() => {
        window.removeEventListener("dragend", re), (u.value = !0);
      }),
      t(oe, {
        expandedKeys: S,
        selectedKeys: g,
        loadedKeys: w,
        loadingKeys: O,
        checkedKeys: k,
        halfCheckedKeys: m,
        expandedKeysSet: G,
        selectedKeysSet: V,
        loadedKeysSet: _,
        loadingKeysSet: W,
        checkedKeysSet: U,
        halfCheckedKeysSet: X,
        flattenNodes: Y,
      }),
      () => {
        const {
            draggingNodeKey: t,
            dropLevelOffset: n,
            dropContainerKey: o,
            dropTargetKey: a,
            dropPosition: c,
            dragOverNodeKey: s,
          } = E,
          {
            prefixCls: u,
            showLine: v,
            focusable: g,
            tabindex: b = 0,
            selectable: k,
            showIcon: K,
            icon: m = i.icon,
            switcherIcon: x,
            draggable: w,
            checkable: O,
            checkStrictly: S,
            disabled: C,
            motion: N,
            loadData: $,
            filterTreeNode: P,
            height: D,
            itemHeight: j,
            virtual: L,
            dropIndicatorRender: B,
            onContextmenu: M,
            onScroll: H,
            direction: R,
            rootClassName: z,
            rootStyle: G,
          } = e,
          { class: V, style: _ } = r,
          W = p(d(d({}, e), r), { aria: !0, data: !0 });
        let U;
        return (
          (U =
            !!w &&
            ("object" == typeof w
              ? w
              : "function" == typeof w
              ? { nodeDraggable: w }
              : {})),
          l(
            te,
            {
              value: {
                prefixCls: u,
                selectable: k,
                showIcon: K,
                icon: m,
                switcherIcon: x,
                draggable: U,
                draggingNodeKey: t,
                checkable: O,
                customCheckable: i.checkable,
                checkStrictly: S,
                disabled: C,
                keyEntities: A.value,
                dropLevelOffset: n,
                dropContainerKey: o,
                dropTargetKey: a,
                dropPosition: c,
                dragOverNodeKey: s,
                dragging: null !== t,
                indent: h.value,
                direction: R,
                dropIndicatorRender: B,
                loadData: $,
                filterTreeNode: P,
                onNodeClick: ge,
                onNodeDoubleClick: xe,
                onNodeExpand: He,
                onNodeSelect: $e,
                onNodeCheck: Pe,
                onNodeLoad: Ae,
                onNodeMouseEnter: Te,
                onNodeMouseLeave: Ie,
                onNodeContextMenu: Le,
                onNodeDragStart: ie,
                onNodeDragEnter: de,
                onNodeDragOver: ce,
                onNodeDragLeave: se,
                onNodeDragEnd: le,
                onNodeDrop: ue,
                slots: i,
              },
            },
            {
              default: () => [
                l(
                  "div",
                  {
                    role: "tree",
                    class: f(u, V, z, {
                      [`${u}-show-line`]: v,
                      [`${u}-focused`]: T.value,
                      [`${u}-active-focused`]: null !== I.value,
                    }),
                    style: G,
                  },
                  [
                    l(
                      We,
                      y(
                        {
                          ref: F,
                          prefixCls: u,
                          style: _,
                          disabled: C,
                          selectable: k,
                          checkable: !!O,
                          motion: N,
                          height: D,
                          itemHeight: j,
                          virtual: L,
                          focusable: g,
                          focused: T.value,
                          tabindex: b,
                          activeItem: _e.value,
                          onFocus: Be,
                          onBlur: Fe,
                          onKeydown: qe,
                          onActiveChange: Ve,
                          onListChangeStart: ze,
                          onListChangeEnd: Ge,
                          onContextmenu: M,
                          onScroll: H,
                        },
                        W
                      ),
                      null
                    ),
                  ]
                ),
              ],
            }
          )
        );
      }
    );
  },
});
var Xe = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z",
        },
      },
    ],
  },
  name: "file",
  theme: "outlined",
};
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      o.forEach(function (t) {
        Ye(e, t, n[t]);
      });
  }
  return e;
}
function Ye(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Qe = function (e, t) {
  var n = qe({}, e, t.attrs);
  return l(A, qe({}, n, { icon: Xe }), null);
};
(Qe.displayName = "FileOutlined"), (Qe.inheritAttrs = !1);
var Ze = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
        },
      },
    ],
  },
  name: "minus-square",
  theme: "outlined",
};
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      o.forEach(function (t) {
        et(e, t, n[t]);
      });
  }
  return e;
}
function et(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var tt = function (e, t) {
  var n = Je({}, e, t.attrs);
  return l(A, Je({}, n, { icon: Ze }), null);
};
(tt.displayName = "MinusSquareOutlined"), (tt.inheritAttrs = !1);
var nt = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",
        },
      },
    ],
  },
  name: "plus-square",
  theme: "outlined",
};
function ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      o.forEach(function (t) {
        at(e, t, n[t]);
      });
  }
  return e;
}
function at(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var lt = function (e, t) {
  var n = ot({}, e, t.attrs);
  return l(A, ot({}, n, { icon: nt }), null);
};
(lt.displayName = "PlusSquareOutlined"), (lt.inheritAttrs = !1);
var rt = {
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
  theme: "filled",
};
function it(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      o.forEach(function (t) {
        dt(e, t, n[t]);
      });
  }
  return e;
}
function dt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var ct = function (e, t) {
  var n = it({}, e, t.attrs);
  return l(A, it({}, n, { icon: rt }), null);
};
function st(e, t, n, o, a) {
  const { isLeaf: r, expanded: i, loading: c } = n;
  let s,
    u = t;
  if (c) return l(T, { class: `${e}-switcher-loading-icon` }, null);
  a && "object" == typeof a && (s = a.showLeafIcon);
  let v = null;
  const p = `${e}-switcher-icon`;
  return r
    ? a
      ? s && o
        ? o(n)
        : ((v =
            "object" != typeof a || s
              ? l(Qe, { class: `${e}-switcher-line-icon` }, null)
              : l("span", { class: `${e}-switcher-leaf-line` }, null)),
          v)
      : null
    : ((v = l(ct, { class: p }, null)),
      a && (v = l(i ? tt : lt, { class: `${e}-switcher-line-icon` }, null)),
      "function" == typeof t
        ? (u = t(d(d({}, n), { defaultIcon: v, switcherCls: p })))
        : I(u) && (u = L(u, { class: p })),
      u || v);
}
(ct.displayName = "CaretDownFilled"), (ct.inheritAttrs = !1);
function ut(e) {
  const {
      dropPosition: t,
      dropLevelOffset: n,
      prefixCls: o,
      indent: a,
      direction: r = "ltr",
    } = e,
    i = "ltr" === r ? "left" : "right",
    d = "ltr" === r ? "right" : "left",
    c = { [i]: -n * a + 4 + "px", [d]: 0 };
  switch (t) {
    case -1:
      c.top = "-3px";
      break;
    case 1:
      c.bottom = "-3px";
      break;
    default:
      (c.bottom = "-3px"), (c[i] = `${a + 4}px`);
  }
  return l("div", { style: c, class: `${o}-drop-indicator` }, null);
}
const vt = new z("ant-tree-node-fx-do-not-use", {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  }),
  pt = (e, t) => ({
    [`.${e}-switcher-icon`]: {
      display: "inline-block",
      fontSize: 10,
      verticalAlign: "baseline",
      svg: { transition: `transform ${t.motionDurationSlow}` },
    },
  }),
  yt = (e, t) => ({
    [`.${e}-drop-indicator`]: {
      position: "absolute",
      zIndex: 1,
      height: 2,
      backgroundColor: t.colorPrimary,
      borderRadius: 1,
      pointerEvents: "none",
      "&:after": {
        position: "absolute",
        top: -3,
        insetInlineStart: -6,
        width: 8,
        height: 8,
        backgroundColor: "transparent",
        border: `${t.lineWidthBold}px solid ${t.colorPrimary}`,
        borderRadius: "50%",
        content: '""',
      },
    },
  }),
  ft = (e, t) => {
    const {
        treeCls: n,
        treeNodeCls: o,
        treeNodePadding: a,
        treeTitleHeight: l,
      } = t,
      r = (l - t.fontSizeLG) / 2,
      i = t.paddingXS;
    return {
      [n]: d(d({}, H(t)), {
        background: t.colorBgContainer,
        borderRadius: t.borderRadius,
        transition: `background-color ${t.motionDurationSlow}`,
        [`&${n}-rtl`]: {
          [`${n}-switcher`]: {
            "&_close": {
              [`${n}-switcher-icon`]: { svg: { transform: "rotate(90deg)" } },
            },
          },
        },
        [`&-focused:not(:hover):not(${n}-active-focused)`]: d({}, R(t)),
        [`${n}-list-holder-inner`]: { alignItems: "flex-start" },
        [`&${n}-block-node`]: {
          [`${n}-list-holder-inner`]: {
            alignItems: "stretch",
            [`${n}-node-content-wrapper`]: { flex: "auto" },
            [`${o}.dragging`]: {
              position: "relative",
              "&:after": {
                position: "absolute",
                top: 0,
                insetInlineEnd: 0,
                bottom: a,
                insetInlineStart: 0,
                border: `1px solid ${t.colorPrimary}`,
                opacity: 0,
                animationName: vt,
                animationDuration: t.motionDurationSlow,
                animationPlayState: "running",
                animationFillMode: "forwards",
                content: '""',
                pointerEvents: "none",
              },
            },
          },
        },
        [`${o}`]: {
          display: "flex",
          alignItems: "flex-start",
          padding: `0 0 ${a}px 0`,
          outline: "none",
          "&-rtl": { direction: "rtl" },
          "&-disabled": {
            [`${n}-node-content-wrapper`]: {
              color: t.colorTextDisabled,
              cursor: "not-allowed",
              "&:hover": { background: "transparent" },
            },
          },
          [`&-active ${n}-node-content-wrapper`]: d({}, R(t)),
          [`&:not(${o}-disabled).filter-node ${n}-title`]: {
            color: "inherit",
            fontWeight: 500,
          },
          "&-draggable": {
            [`${n}-draggable-icon`]: {
              width: l,
              lineHeight: `${l}px`,
              textAlign: "center",
              visibility: "visible",
              opacity: 0.2,
              transition: `opacity ${t.motionDurationSlow}`,
              [`${o}:hover &`]: { opacity: 0.45 },
            },
            [`&${o}-disabled`]: {
              [`${n}-draggable-icon`]: { visibility: "hidden" },
            },
          },
        },
        [`${n}-indent`]: {
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          userSelect: "none",
          "&-unit": { display: "inline-block", width: l },
        },
        [`${n}-draggable-icon`]: { visibility: "hidden" },
        [`${n}-switcher`]: d(d({}, pt(e, t)), {
          position: "relative",
          flex: "none",
          alignSelf: "stretch",
          width: l,
          margin: 0,
          lineHeight: `${l}px`,
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
          "&-noop": { cursor: "default" },
          "&_close": {
            [`${n}-switcher-icon`]: { svg: { transform: "rotate(-90deg)" } },
          },
          "&-loading-icon": { color: t.colorPrimary },
          "&-leaf-line": {
            position: "relative",
            zIndex: 1,
            display: "inline-block",
            width: "100%",
            height: "100%",
            "&:before": {
              position: "absolute",
              top: 0,
              insetInlineEnd: l / 2,
              bottom: -a,
              marginInlineStart: -1,
              borderInlineEnd: `1px solid ${t.colorBorder}`,
              content: '""',
            },
            "&:after": {
              position: "absolute",
              width: (l / 2) * 0.8,
              height: l / 2,
              borderBottom: `1px solid ${t.colorBorder}`,
              content: '""',
            },
          },
        }),
        [`${n}-checkbox`]: {
          top: "initial",
          marginInlineEnd: i,
          marginBlockStart: r,
        },
        [`${n}-node-content-wrapper, ${n}-checkbox + span`]: {
          position: "relative",
          zIndex: "auto",
          minHeight: l,
          margin: 0,
          padding: `0 ${t.paddingXS / 2}px`,
          color: "inherit",
          lineHeight: `${l}px`,
          background: "transparent",
          borderRadius: t.borderRadius,
          cursor: "pointer",
          transition: `all ${t.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
          "&:hover": { backgroundColor: t.controlItemBgHover },
          [`&${n}-node-selected`]: { backgroundColor: t.controlItemBgActive },
          [`${n}-iconEle`]: {
            display: "inline-block",
            width: l,
            height: l,
            lineHeight: `${l}px`,
            textAlign: "center",
            verticalAlign: "top",
            "&:empty": { display: "none" },
          },
        },
        [`${n}-unselectable ${n}-node-content-wrapper:hover`]: {
          backgroundColor: "transparent",
        },
        [`${n}-node-content-wrapper`]: d(
          { lineHeight: `${l}px`, userSelect: "none" },
          yt(e, t)
        ),
        [`${o}.drop-container`]: {
          "> [draggable]": { boxShadow: `0 0 0 2px ${t.colorPrimary}` },
        },
        "&-show-line": {
          [`${n}-indent`]: {
            "&-unit": {
              position: "relative",
              height: "100%",
              "&:before": {
                position: "absolute",
                top: 0,
                insetInlineEnd: l / 2,
                bottom: -a,
                borderInlineEnd: `1px solid ${t.colorBorder}`,
                content: '""',
              },
              "&-end": { "&:before": { display: "none" } },
            },
          },
          [`${n}-switcher`]: {
            background: "transparent",
            "&-line-icon": { verticalAlign: "-0.15em" },
          },
        },
        [`${o}-leaf-last`]: {
          [`${n}-switcher`]: {
            "&-leaf-line": {
              "&:before": {
                top: "auto !important",
                bottom: "auto !important",
                height: l / 2 + "px !important",
              },
            },
          },
        },
      }),
    };
  },
  ht = (e) => {
    const { treeCls: t, treeNodeCls: n, treeNodePadding: o } = e;
    return {
      [`${t}${t}-directory`]: {
        [n]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: o,
            insetInlineStart: 0,
            transition: `background-color ${e.motionDurationMid}`,
            content: '""',
            pointerEvents: "none",
          },
          "&:hover": { "&:before": { background: e.controlItemBgHover } },
          "> *": { zIndex: 1 },
          [`${t}-switcher`]: { transition: `color ${e.motionDurationMid}` },
          [`${t}-node-content-wrapper`]: {
            borderRadius: 0,
            userSelect: "none",
            "&:hover": { background: "transparent" },
            [`&${t}-node-selected`]: {
              color: e.colorTextLightSolid,
              background: "transparent",
            },
          },
          "&-selected": {
            "\n            &:hover::before,\n            &::before\n          ":
              { background: e.colorPrimary },
            [`${t}-switcher`]: { color: e.colorTextLightSolid },
            [`${t}-node-content-wrapper`]: {
              color: e.colorTextLightSolid,
              background: "transparent",
            },
          },
        },
      },
    };
  },
  gt = (e, t) => {
    const n = `.${e}`,
      o = `${n}-treenode`,
      a = t.paddingXS / 2,
      l = t.controlHeightSM,
      r = M(t, {
        treeCls: n,
        treeNodeCls: o,
        treeNodePadding: a,
        treeTitleHeight: l,
      });
    return [ft(e, r), ht(r)];
  },
  bt = B("Tree", (e, t) => {
    let { prefixCls: n } = t;
    return [{ [e.componentCls]: Z(`${n}-checkbox`, e) }, gt(n, e), F(e)];
  }),
  kt = () => {
    const e = de();
    return d(d({}, e), {
      showLine: V([Boolean, Object]),
      multiple: _(),
      autoExpandParent: _(),
      checkStrictly: _(),
      checkable: _(),
      disabled: _(),
      defaultExpandAll: _(),
      defaultExpandParent: _(),
      defaultExpandedKeys: W(),
      expandedKeys: W(),
      checkedKeys: V([Array, Object]),
      defaultCheckedKeys: W(),
      selectedKeys: W(),
      defaultSelectedKeys: W(),
      selectable: _(),
      loadedKeys: W(),
      draggable: _(),
      showIcon: _(),
      icon: U(),
      switcherIcon: r.any,
      prefixCls: String,
      replaceFields: X(),
      blockNode: _(),
      openAnimation: r.any,
      onDoubleclick: e.onDblclick,
      "onUpdate:selectedKeys": U(),
      "onUpdate:checkedKeys": U(),
      "onUpdate:expandedKeys": U(),
    });
  },
  Kt = e({
    compatConfig: { MODE: 3 },
    name: "ATree",
    inheritAttrs: !1,
    props: $(kt(), {
      checkable: !1,
      selectable: !0,
      showIcon: !1,
      blockNode: !1,
    }),
    slots: Object,
    setup(e, t) {
      let { attrs: o, expose: a, emit: r, slots: c } = t;
      i(!(void 0 === e.treeData && c.default));
      const { prefixCls: s, direction: u, virtual: v } = G("tree", e),
        [p, g] = bt(s),
        m = k();
      a({
        treeRef: m,
        onNodeExpand: function () {
          var e;
          null === (e = m.value) ||
            void 0 === e ||
            e.onNodeExpand(...arguments);
        },
        scrollTo: (e) => {
          var t;
          null === (t = m.value) || void 0 === t || t.scrollTo(e);
        },
        selectedKeys: n(() => {
          var e;
          return null === (e = m.value) || void 0 === e
            ? void 0
            : e.selectedKeys;
        }),
        checkedKeys: n(() => {
          var e;
          return null === (e = m.value) || void 0 === e
            ? void 0
            : e.checkedKeys;
        }),
        halfCheckedKeys: n(() => {
          var e;
          return null === (e = m.value) || void 0 === e
            ? void 0
            : e.halfCheckedKeys;
        }),
        loadedKeys: n(() => {
          var e;
          return null === (e = m.value) || void 0 === e ? void 0 : e.loadedKeys;
        }),
        loadingKeys: n(() => {
          var e;
          return null === (e = m.value) || void 0 === e
            ? void 0
            : e.loadingKeys;
        }),
        expandedKeys: n(() => {
          var e;
          return null === (e = m.value) || void 0 === e
            ? void 0
            : e.expandedKeys;
        }),
      }),
        K(() => {
          q(
            void 0 === e.replaceFields,
            "Tree",
            "`replaceFields` is deprecated, please use fieldNames instead"
          );
        });
      const x = (e, t) => {
          r("update:checkedKeys", e), r("check", e, t);
        },
        w = (e, t) => {
          r("update:expandedKeys", e), r("expand", e, t);
        },
        O = (e, t) => {
          r("update:selectedKeys", e), r("select", e, t);
        };
      return () => {
        const {
            showIcon: t,
            showLine: n,
            switcherIcon: a = c.switcherIcon,
            icon: r = c.icon,
            blockNode: i,
            checkable: k,
            selectable: K,
            fieldNames: S = e.replaceFields,
            motion: C = e.openAnimation,
            itemHeight: N = 28,
            onDoubleclick: E,
            onDblclick: $,
          } = e,
          P = d(
            d(
              d({}, o),
              b(e, [
                "onUpdate:checkedKeys",
                "onUpdate:expandedKeys",
                "onUpdate:selectedKeys",
                "onDoubleclick",
              ])
            ),
            {
              showLine: Boolean(n),
              dropIndicatorRender: ut,
              fieldNames: S,
              icon: r,
              itemHeight: N,
            }
          ),
          D = c.default ? h(c.default()) : void 0;
        return p(
          l(
            Ue,
            y(
              y({}, P),
              {},
              {
                virtual: v.value,
                motion: C,
                ref: m,
                prefixCls: s.value,
                class: f(
                  {
                    [`${s.value}-icon-hide`]: !t,
                    [`${s.value}-block-node`]: i,
                    [`${s.value}-unselectable`]: !K,
                    [`${s.value}-rtl`]: "rtl" === u.value,
                  },
                  o.class,
                  g.value
                ),
                direction: u.value,
                checkable: k,
                selectable: K,
                switcherIcon: (e) => st(s.value, a, e, c.leafIcon, n),
                onCheck: x,
                onExpand: w,
                onSelect: O,
                onDblclick: $ || E,
                children: D,
              }
            ),
            d(d({}, c), {
              checkable: () =>
                l("span", { class: `${s.value}-checkbox-inner` }, null),
            })
          )
        );
      };
    },
  });
var mt = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z",
        },
      },
    ],
  },
  name: "folder-open",
  theme: "outlined",
};
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      o.forEach(function (t) {
        wt(e, t, n[t]);
      });
  }
  return e;
}
function wt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ot = function (e, t) {
  var n = xt({}, e, t.attrs);
  return l(A, xt({}, n, { icon: mt }), null);
};
(Ot.displayName = "FolderOpenOutlined"), (Ot.inheritAttrs = !1);
var St = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z",
        },
      },
    ],
  },
  name: "folder",
  theme: "outlined",
};
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      o = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (o = o.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      o.forEach(function (t) {
        Nt(e, t, n[t]);
      });
  }
  return e;
}
function Nt(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Et,
  $t = function (e, t) {
    var n = Ct({}, e, t.attrs);
    return l(A, Ct({}, n, { icon: St }), null);
  };
function Pt(e, t, n) {
  e.forEach(function (e) {
    const o = e[t.key],
      a = e[t.children];
    !1 !== n(o, e) && Pt(a || [], t, n);
  });
}
function Dt(e) {
  let {
    treeData: t,
    expandedKeys: n,
    startKey: o,
    endKey: a,
    fieldNames: l = { title: "title", key: "key", children: "children" },
  } = e;
  const r = [];
  let i = Et.None;
  if (o && o === a) return [o];
  if (!o || !a) return [];
  return (
    Pt(t, l, (e) => {
      if (i === Et.End) return !1;
      if (
        (function (e) {
          return e === o || e === a;
        })(e)
      ) {
        if ((r.push(e), i === Et.None)) i = Et.Start;
        else if (i === Et.Start) return (i = Et.End), !1;
      } else i === Et.Start && r.push(e);
      return n.includes(e);
    }),
    r
  );
}
function jt(e, t, n) {
  const o = [...t],
    a = [];
  return (
    Pt(e, n, (e, t) => {
      const n = o.indexOf(e);
      return -1 !== n && (a.push(t), o.splice(n, 1)), !!o.length;
    }),
    a
  );
}
($t.displayName = "FolderOutlined"),
  ($t.inheritAttrs = !1),
  (function (e) {
    (e[(e.None = 0)] = "None"),
      (e[(e.Start = 1)] = "Start"),
      (e[(e.End = 2)] = "End");
  })(Et || (Et = {}));
var At = function (e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var a = 0;
    for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
      t.indexOf(o[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[a]) &&
        (n[o[a]] = e[o[a]]);
  }
  return n;
};
function Tt(e) {
  const { isLeaf: t, expanded: n } = e;
  return l(t ? Qe : n ? Ot : $t, null, null);
}
const It = e({
    compatConfig: { MODE: 3 },
    name: "ADirectoryTree",
    inheritAttrs: !1,
    props: $(d(d({}, kt()), { expandAction: V([Boolean, String]) }), {
      showIcon: !0,
      expandAction: "click",
    }),
    slots: Object,
    setup(e, t) {
      let { attrs: o, slots: a, emit: r, expose: i } = t;
      var c;
      const s = k(
        e.treeData ||
          Se(h(null === (c = a.default) || void 0 === c ? void 0 : c.call(a)))
      );
      x(
        () => e.treeData,
        () => {
          s.value = e.treeData;
        }
      ),
        v(() => {
          N(() => {
            var t;
            void 0 === e.treeData &&
              a.default &&
              (s.value = Se(
                h(null === (t = a.default) || void 0 === t ? void 0 : t.call(a))
              ));
          });
        });
      const u = k(),
        p = k(),
        g = n(() => Oe(e.fieldNames)),
        b = k();
      i({
        scrollTo: (e) => {
          var t;
          null === (t = b.value) || void 0 === t || t.scrollTo(e);
        },
        selectedKeys: n(() => {
          var e;
          return null === (e = b.value) || void 0 === e
            ? void 0
            : e.selectedKeys;
        }),
        checkedKeys: n(() => {
          var e;
          return null === (e = b.value) || void 0 === e
            ? void 0
            : e.checkedKeys;
        }),
        halfCheckedKeys: n(() => {
          var e;
          return null === (e = b.value) || void 0 === e
            ? void 0
            : e.halfCheckedKeys;
        }),
        loadedKeys: n(() => {
          var e;
          return null === (e = b.value) || void 0 === e ? void 0 : e.loadedKeys;
        }),
        loadingKeys: n(() => {
          var e;
          return null === (e = b.value) || void 0 === e
            ? void 0
            : e.loadingKeys;
        }),
        expandedKeys: n(() => {
          var e;
          return null === (e = b.value) || void 0 === e
            ? void 0
            : e.expandedKeys;
        }),
      });
      const K = k(e.selectedKeys || e.defaultSelectedKeys || []),
        m = k(
          (() => {
            const { keyEntities: t } = Ce(s.value, { fieldNames: g.value });
            let n;
            return (
              (n = e.defaultExpandAll
                ? Object.keys(t)
                : e.defaultExpandParent
                ? me(e.expandedKeys || e.defaultExpandedKeys || [], t)
                : e.expandedKeys || e.defaultExpandedKeys),
              n
            );
          })()
        );
      x(
        () => e.selectedKeys,
        () => {
          void 0 !== e.selectedKeys && (K.value = e.selectedKeys);
        },
        { immediate: !0 }
      ),
        x(
          () => e.expandedKeys,
          () => {
            void 0 !== e.expandedKeys && (m.value = e.expandedKeys);
          },
          { immediate: !0 }
        );
      const w = J(
          (e, t) => {
            const { isLeaf: n } = t;
            n ||
              e.shiftKey ||
              e.metaKey ||
              e.ctrlKey ||
              b.value.onNodeExpand(e, t);
          },
          200,
          { leading: !0 }
        ),
        O = (t, n) => {
          void 0 === e.expandedKeys && (m.value = t),
            r("update:expandedKeys", t),
            r("expand", t, n);
        },
        S = (t, n) => {
          const { expandAction: o } = e;
          "click" === o && w(t, n), r("click", t, n);
        },
        C = (t, n) => {
          const { expandAction: o } = e;
          ("dblclick" !== o && "doubleclick" !== o) || w(t, n),
            r("doubleclick", t, n),
            r("dblclick", t, n);
        },
        E = (t, n) => {
          const { multiple: o } = e,
            { node: a, nativeEvent: l } = n,
            i = a[g.value.key],
            c = d(d({}, n), { selected: !0 }),
            v =
              (null == l ? void 0 : l.ctrlKey) ||
              (null == l ? void 0 : l.metaKey),
            y = null == l ? void 0 : l.shiftKey;
          let f;
          o && v
            ? ((f = t),
              (u.value = i),
              (p.value = f),
              (c.selectedNodes = jt(s.value, f, g.value)))
            : o && y
            ? ((f = Array.from(
                new Set([
                  ...(p.value || []),
                  ...Dt({
                    treeData: s.value,
                    expandedKeys: m.value,
                    startKey: i,
                    endKey: u.value,
                    fieldNames: g.value,
                  }),
                ])
              )),
              (c.selectedNodes = jt(s.value, f, g.value)))
            : ((f = [i]),
              (u.value = i),
              (p.value = f),
              (c.selectedNodes = jt(s.value, f, g.value))),
            r("update:selectedKeys", f),
            r("select", f, c),
            void 0 === e.selectedKeys && (K.value = f);
        },
        $ = (e, t) => {
          r("update:checkedKeys", e), r("check", e, t);
        },
        { prefixCls: P, direction: D } = G("tree", e);
      return () => {
        const t = f(
            `${P.value}-directory`,
            { [`${P.value}-directory-rtl`]: "rtl" === D.value },
            o.class
          ),
          { icon: n = a.icon, blockNode: r = !0 } = e,
          i = At(e, ["icon", "blockNode"]);
        return l(
          Kt,
          y(
            y(y({}, o), {}, { icon: n || Tt, ref: b, blockNode: r }, i),
            {},
            {
              prefixCls: P.value,
              class: t,
              expandedKeys: m.value,
              selectedKeys: K.value,
              onSelect: E,
              onClick: S,
              onDblclick: C,
              onExpand: O,
              onCheck: $,
            }
          ),
          a
        );
      };
    },
  }),
  Lt = ve,
  Bt = d(Kt, {
    DirectoryTree: It,
    TreeNode: Lt,
    install: (e) => (
      e.component(Kt.name, Kt),
      e.component(Lt.name, Lt),
      e.component(It.name, It),
      e
    ),
  });
export {
  Ue as T,
  Bt as _,
  De as a,
  pe as b,
  Ce as c,
  ye as d,
  gt as g,
  st as r,
  je as u,
};

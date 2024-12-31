import {
  aJ as e,
  as as o,
  aU as n,
  c as t,
  r as l,
  aw as a,
  aT as i,
  aS as r,
  iq as u,
  bB as s,
  gE as c,
  bq as d,
  gP as p,
  cm as v,
  bT as m,
  aK as f,
  b2 as h,
  aL as g,
  aR as b,
  io as y,
  aA as S,
  ir as w,
  aC as x,
  ck as C,
  dZ as $,
  bO as I,
  at as O,
  aQ as F,
  ea as E,
  cl as P,
  ft as T,
  n as D,
  ch as M,
  c8 as k,
  i4 as R,
  e8 as A,
  hH as N,
  hA as V,
  cs as B,
  ci as z,
  b7 as H,
  is as L,
  aX as W,
  it as j,
  iu as K,
  iv as _,
  iw as X,
  e7 as G,
  hF as U,
  ix as Y,
  aW as Q,
  eQ as q,
  aV as J,
  gY as Z,
  d_ as ee,
  e2 as oe,
  d$ as ne,
  e1 as te,
  ce as le,
  e3 as ae,
  h3 as ie,
  b1 as re,
  h4 as ue,
  cf as se,
  f4 as ce,
  iy as de,
  h5 as pe,
  iz as ve,
} from "./index-DPRREYlk.js";
import { c as me, L as fe } from "./List-D10KDyaY.js";
import { i as he } from "./isMobile-VPrdNIIw.js";
import { D as ge } from "./DownOutlined-BDMVSGUf.js";
import { C as be } from "./CheckOutlined-BvF8M63J.js";
function ye(e, o) {
  const { key: n } = e;
  let t;
  return (
    "value" in e && ({ value: t } = e),
    null != n ? n : void 0 !== t ? t : `rc-index-key-${o}`
  );
}
function Se(e, o) {
  const { label: n, value: t, options: l } = e || {};
  return {
    label: n || (o ? "children" : "label"),
    value: t || "value",
    options: l || "options",
  };
}
function we(o) {
  const n = e({}, o);
  return "props" in n || Object.defineProperty(n, "props", { get: () => n }), n;
}
var xe = function (e, o) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) &&
      o.indexOf(t) < 0 &&
      (n[t] = e[t]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var l = 0;
    for (t = Object.getOwnPropertySymbols(e); l < t.length; l++)
      o.indexOf(t[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
        (n[t[l]] = e[t[l]]);
  }
  return n;
};
const Ce = o({
    name: "SelectTrigger",
    inheritAttrs: !1,
    props: {
      dropdownAlign: Object,
      visible: { type: Boolean, default: void 0 },
      disabled: { type: Boolean, default: void 0 },
      dropdownClassName: String,
      dropdownStyle: n.object,
      placement: String,
      empty: { type: Boolean, default: void 0 },
      prefixCls: String,
      popupClassName: String,
      animation: String,
      transitionName: String,
      getPopupContainer: Function,
      dropdownRender: Function,
      containerWidth: Number,
      dropdownMatchSelectWidth: n.oneOfType([Number, Boolean]).def(!0),
      popupElement: n.any,
      direction: String,
      getTriggerDOMNode: Function,
      onPopupVisibleChange: Function,
      onPopupMouseEnter: Function,
      onPopupFocusin: Function,
      onPopupFocusout: Function,
    },
    setup(o, n) {
      let { slots: s, attrs: c, expose: d } = n;
      const p = t(() => {
          const { dropdownMatchSelectWidth: e } = o;
          return ((e) => {
            const o = !0 === e ? 0 : 1;
            return {
              bottomLeft: {
                points: ["tl", "bl"],
                offset: [0, 4],
                overflow: { adjustX: o, adjustY: 1 },
              },
              bottomRight: {
                points: ["tr", "br"],
                offset: [0, 4],
                overflow: { adjustX: o, adjustY: 1 },
              },
              topLeft: {
                points: ["bl", "tl"],
                offset: [0, -4],
                overflow: { adjustX: o, adjustY: 1 },
              },
              topRight: {
                points: ["br", "tr"],
                offset: [0, -4],
                overflow: { adjustX: o, adjustY: 1 },
              },
            };
          })(e);
        }),
        v = l();
      return (
        d({ getPopupElement: () => v.value }),
        () => {
          const n = e(e({}, o), c),
            { empty: t = !1 } = n,
            l = xe(n, ["empty"]),
            {
              visible: d,
              dropdownAlign: m,
              prefixCls: f,
              popupElement: h,
              dropdownClassName: g,
              dropdownStyle: b,
              direction: y = "ltr",
              placement: S,
              dropdownMatchSelectWidth: w,
              containerWidth: x,
              dropdownRender: C,
              animation: $,
              transitionName: I,
              getPopupContainer: O,
              getTriggerDOMNode: F,
              onPopupVisibleChange: E,
              onPopupMouseEnter: P,
              onPopupFocusin: T,
              onPopupFocusout: D,
            } = l,
            M = `${f}-dropdown`;
          let k = h;
          C && (k = C({ menuNode: h, props: o }));
          const R = $ ? `${M}-${$}` : I,
            A = e({ minWidth: `${x}px` }, b);
          return (
            "number" == typeof w
              ? (A.width = `${w}px`)
              : w && (A.width = `${x}px`),
            a(
              u,
              i(
                i({}, o),
                {},
                {
                  showAction: E ? ["click"] : [],
                  hideAction: E ? ["click"] : [],
                  popupPlacement:
                    S || ("rtl" === y ? "bottomRight" : "bottomLeft"),
                  builtinPlacements: p.value,
                  prefixCls: M,
                  popupTransitionName: R,
                  popupAlign: m,
                  popupVisible: d,
                  getPopupContainer: O,
                  popupClassName: r(g, { [`${M}-empty`]: t }),
                  popupStyle: A,
                  getTriggerDOMNode: F,
                  onPopupVisibleChange: E,
                }
              ),
              {
                default: s.default,
                popup: () =>
                  a(
                    "div",
                    { ref: v, onMouseenter: P, onFocusin: T, onFocusout: D },
                    [k]
                  ),
              }
            )
          );
        }
      );
    },
  }),
  $e = (e, o) => {
    let { slots: n } = o;
    var t;
    const {
      class: l,
      customizeIcon: i,
      customizeIconProps: r,
      onMousedown: u,
      onClick: d,
    } = e;
    let p;
    return (
      (p = "function" == typeof i ? i(r) : s(i) ? c(i) : i),
      a(
        "span",
        {
          class: l,
          onMousedown: (e) => {
            e.preventDefault(), u && u(e);
          },
          style: { userSelect: "none", WebkitUserSelect: "none" },
          unselectable: "on",
          onClick: d,
          "aria-hidden": !0,
        },
        [
          void 0 !== p
            ? p
            : a("span", { class: l.split(/\s+/).map((e) => `${e}-icon`) }, [
                null === (t = n.default) || void 0 === t ? void 0 : t.call(n),
              ]),
        ]
      )
    );
  };
($e.inheritAttrs = !1),
  ($e.displayName = "TransBtn"),
  ($e.props = {
    class: String,
    customizeIcon: n.any,
    customizeIconProps: n.any,
    onMousedown: Function,
    onClick: Function,
  });
const Ie = o({
    compatConfig: { MODE: 3 },
    name: "SelectInput",
    inheritAttrs: !1,
    props: {
      inputRef: n.any,
      prefixCls: String,
      id: String,
      inputElement: n.VueNode,
      disabled: { type: Boolean, default: void 0 },
      autofocus: { type: Boolean, default: void 0 },
      autocomplete: String,
      editable: { type: Boolean, default: void 0 },
      activeDescendantId: String,
      value: String,
      open: { type: Boolean, default: void 0 },
      tabindex: n.oneOfType([n.number, n.string]),
      attrs: n.object,
      onKeydown: { type: Function },
      onMousedown: { type: Function },
      onChange: { type: Function },
      onPaste: { type: Function },
      onCompositionstart: { type: Function },
      onCompositionend: { type: Function },
      onFocus: { type: Function },
      onBlur: { type: Function },
    },
    setup(o) {
      let n = null;
      const t = d("VCSelectContainerEvent");
      return () => {
        var l;
        const {
          prefixCls: i,
          id: u,
          inputElement: s,
          disabled: c,
          tabindex: d,
          autofocus: m,
          autocomplete: f,
          editable: h,
          activeDescendantId: g,
          value: b,
          onKeydown: y,
          onMousedown: S,
          onChange: w,
          onPaste: x,
          onCompositionstart: C,
          onCompositionend: $,
          onFocus: I,
          onBlur: O,
          open: F,
          inputRef: E,
          attrs: P,
        } = o;
        let T = s || a(p, null, null);
        const D = T.props || {},
          {
            onKeydown: M,
            onInput: k,
            onFocus: R,
            onBlur: A,
            onMousedown: N,
            onCompositionstart: V,
            onCompositionend: B,
            style: z,
          } = D;
        return (
          (T = v(
            T,
            e(
              e(
                e(
                  e(e({ type: "search" }, D), {
                    id: u,
                    ref: E,
                    disabled: c,
                    tabindex: d,
                    lazy: !1,
                    autocomplete: f || "off",
                    autofocus: m,
                    class: r(
                      `${i}-selection-search-input`,
                      null === (l = null == T ? void 0 : T.props) ||
                        void 0 === l
                        ? void 0
                        : l.class
                    ),
                    role: "combobox",
                    "aria-expanded": F,
                    "aria-haspopup": "listbox",
                    "aria-owns": `${u}_list`,
                    "aria-autocomplete": "list",
                    "aria-controls": `${u}_list`,
                    "aria-activedescendant": g,
                  }),
                  P
                ),
                {
                  value: h ? b : "",
                  readonly: !h,
                  unselectable: h ? null : "on",
                  style: e(e({}, z), { opacity: h ? null : 0 }),
                  onKeydown: (e) => {
                    y(e), M && M(e);
                  },
                  onMousedown: (e) => {
                    S(e), N && N(e);
                  },
                  onInput: (e) => {
                    w(e), k && k(e);
                  },
                  onCompositionstart(e) {
                    C(e), V && V(e);
                  },
                  onCompositionend(e) {
                    $(e), B && B(e);
                  },
                  onPaste: x,
                  onFocus: function () {
                    clearTimeout(n),
                      R && R(arguments.length <= 0 ? void 0 : arguments[0]),
                      I && I(arguments.length <= 0 ? void 0 : arguments[0]),
                      null == t ||
                        t.focus(arguments.length <= 0 ? void 0 : arguments[0]);
                  },
                  onBlur: function () {
                    for (
                      var e = arguments.length, o = new Array(e), l = 0;
                      l < e;
                      l++
                    )
                      o[l] = arguments[l];
                    n = setTimeout(() => {
                      A && A(o[0]), O && O(o[0]), null == t || t.blur(o[0]);
                    }, 100);
                  },
                }
              ),
              "textarea" === T.type ? {} : { type: "search" }
            ),
            !0,
            !0
          )),
          T
        );
      };
    },
  }),
  Oe = Symbol("TreeSelectLegacyContextPropsKey");
function Fe(e) {
  return m(Oe, e);
}
function Ee() {
  return d(Oe, {});
}
const Pe = {
    id: String,
    prefixCls: String,
    values: n.array,
    open: { type: Boolean, default: void 0 },
    searchValue: String,
    inputRef: n.any,
    placeholder: n.any,
    disabled: { type: Boolean, default: void 0 },
    mode: String,
    showSearch: { type: Boolean, default: void 0 },
    autofocus: { type: Boolean, default: void 0 },
    autocomplete: String,
    activeDescendantId: String,
    tabindex: n.oneOfType([n.number, n.string]),
    compositionStatus: Boolean,
    removeIcon: n.any,
    choiceTransitionName: String,
    maxTagCount: n.oneOfType([n.number, n.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: n.any.def(() => (e) => `+ ${e.length} ...`),
    tagRender: Function,
    onToggleOpen: { type: Function },
    onRemove: Function,
    onInputChange: Function,
    onInputPaste: Function,
    onInputKeyDown: Function,
    onInputMouseDown: Function,
    onInputCompositionStart: Function,
    onInputCompositionEnd: Function,
  },
  Te = (e) => {
    e.preventDefault(), e.stopPropagation();
  },
  De = o({
    name: "MultipleSelectSelector",
    inheritAttrs: !1,
    props: Pe,
    setup(e) {
      const o = f(),
        n = f(0),
        i = f(!1),
        u = Ee(),
        s = t(() => `${e.prefixCls}-selection`),
        c = t(() => (e.open || "tags" === e.mode ? e.searchValue : "")),
        d = t(() => "tags" === e.mode || (e.showSearch && (e.open || i.value))),
        p = l("");
      function v(o, n, t, l, i) {
        return a(
          "span",
          {
            class: r(`${s.value}-item`, { [`${s.value}-item-disabled`]: t }),
            title:
              "string" == typeof o || "number" == typeof o
                ? o.toString()
                : void 0,
          },
          [
            a("span", { class: `${s.value}-item-content` }, [n]),
            l &&
              a(
                $e,
                {
                  class: `${s.value}-item-remove`,
                  onMousedown: Te,
                  onClick: i,
                  customizeIcon: e.removeIcon,
                },
                { default: () => [S("×")] }
              ),
          ]
        );
      }
      function m(o) {
        const { disabled: n, label: t, value: l, option: i } = o,
          r = !e.disabled && !n;
        let s = t;
        if (
          "number" == typeof e.maxTagTextLength &&
          ("string" == typeof t || "number" == typeof t)
        ) {
          const o = String(s);
          o.length > e.maxTagTextLength &&
            (s = `${o.slice(0, e.maxTagTextLength)}...`);
        }
        const c = (n) => {
          var t;
          n && n.stopPropagation(),
            null === (t = e.onRemove) || void 0 === t || t.call(e, o);
        };
        return "function" == typeof e.tagRender
          ? (function (o, n, t, l, i, r) {
              var s;
              let c = r;
              return (
                u.keyEntities &&
                  (c =
                    (null === (s = u.keyEntities[o]) || void 0 === s
                      ? void 0
                      : s.node) || {}),
                a(
                  "span",
                  {
                    key: o,
                    onMousedown: (o) => {
                      Te(o), e.onToggleOpen(!open);
                    },
                  },
                  [
                    e.tagRender({
                      label: n,
                      value: o,
                      disabled: t,
                      closable: l,
                      onClose: i,
                      option: c,
                    }),
                  ]
                )
              );
            })(l, s, n, r, c, i)
          : v(t, s, n, r, c);
      }
      function C(o) {
        const { maxTagPlaceholder: n = (e) => `+ ${e.length} ...` } = e,
          t = "function" == typeof n ? n(o) : n;
        return v(t, t, !1);
      }
      h(() => {
        p.value = c.value;
      }),
        g(() => {
          b(
            p,
            () => {
              n.value = o.value.scrollWidth;
            },
            { flush: "post", immediate: !0 }
          );
        });
      const $ = (o) => {
        const n = o.target.composing;
        (p.value = o.target.value), n || e.onInputChange(o);
      };
      return () => {
        const {
            id: t,
            prefixCls: l,
            values: r,
            open: u,
            inputRef: v,
            placeholder: f,
            disabled: h,
            autofocus: g,
            autocomplete: b,
            activeDescendantId: I,
            tabindex: O,
            compositionStatus: F,
            onInputPaste: E,
            onInputKeyDown: P,
            onInputMouseDown: T,
            onInputCompositionStart: D,
            onInputCompositionEnd: M,
          } = e,
          k = a(
            "div",
            {
              class: `${s.value}-search`,
              style: { width: n.value + "px" },
              key: "input",
            },
            [
              a(
                Ie,
                {
                  inputRef: v,
                  open: u,
                  prefixCls: l,
                  id: t,
                  inputElement: null,
                  disabled: h,
                  autofocus: g,
                  autocomplete: b,
                  editable: d.value,
                  activeDescendantId: I,
                  value: p.value,
                  onKeydown: P,
                  onMousedown: T,
                  onChange: $,
                  onPaste: E,
                  onCompositionstart: D,
                  onCompositionend: M,
                  tabindex: O,
                  attrs: y(e, !0),
                  onFocus: () => (i.value = !0),
                  onBlur: () => (i.value = !1),
                },
                null
              ),
              a(
                "span",
                {
                  ref: o,
                  class: `${s.value}-search-mirror`,
                  "aria-hidden": !0,
                },
                [p.value, S(" ")]
              ),
            ]
          ),
          R = a(
            w,
            {
              prefixCls: `${s.value}-overflow`,
              data: r,
              renderItem: m,
              renderRest: C,
              suffix: k,
              itemKey: "key",
              maxCount: e.maxTagCount,
              key: "overflow",
            },
            null
          );
        return a(x, null, [
          R,
          !r.length &&
            !c.value &&
            !F &&
            a("span", { class: `${s.value}-placeholder` }, [f]),
        ]);
      };
    },
  }),
  Me = {
    inputElement: n.any,
    id: String,
    prefixCls: String,
    values: n.array,
    open: { type: Boolean, default: void 0 },
    searchValue: String,
    inputRef: n.any,
    placeholder: n.any,
    compositionStatus: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: void 0 },
    mode: String,
    showSearch: { type: Boolean, default: void 0 },
    autofocus: { type: Boolean, default: void 0 },
    autocomplete: String,
    activeDescendantId: String,
    tabindex: n.oneOfType([n.number, n.string]),
    activeValue: String,
    backfill: { type: Boolean, default: void 0 },
    optionLabelRender: Function,
    onInputChange: Function,
    onInputPaste: Function,
    onInputKeyDown: Function,
    onInputMouseDown: Function,
    onInputCompositionStart: Function,
    onInputCompositionEnd: Function,
  },
  ke = o({
    name: "SingleSelector",
    setup(e) {
      const o = f(!1),
        n = t(() => "combobox" === e.mode),
        l = t(() => n.value || e.showSearch),
        i = t(() => {
          let t = e.searchValue || "";
          return n.value && e.activeValue && !o.value && (t = e.activeValue), t;
        }),
        r = Ee();
      b(
        [n, () => e.activeValue],
        () => {
          n.value && (o.value = !1);
        },
        { immediate: !0 }
      );
      const u = t(
          () =>
            !("combobox" !== e.mode && !e.open && !e.showSearch) &&
            (!!i.value || e.compositionStatus)
        ),
        s = t(() => {
          const o = e.values[0];
          return !o ||
            ("string" != typeof o.label && "number" != typeof o.label)
            ? void 0
            : o.label.toString();
        }),
        c = () => {
          if (e.values[0]) return null;
          const o = u.value ? { visibility: "hidden" } : void 0;
          return a(
            "span",
            { class: `${e.prefixCls}-selection-placeholder`, style: o },
            [e.placeholder]
          );
        },
        d = (n) => {
          n.target.composing || ((o.value = !0), e.onInputChange(n));
        };
      return () => {
        var o, t, p, v;
        const {
            inputElement: m,
            prefixCls: f,
            id: h,
            values: g,
            inputRef: b,
            disabled: S,
            autofocus: w,
            autocomplete: C,
            activeDescendantId: $,
            open: I,
            tabindex: O,
            optionLabelRender: F,
            onInputKeyDown: E,
            onInputMouseDown: P,
            onInputPaste: T,
            onInputCompositionStart: D,
            onInputCompositionEnd: M,
          } = e,
          k = g[0];
        let R = null;
        if (k && r.customSlots) {
          const e = null !== (o = k.key) && void 0 !== o ? o : k.value,
            n =
              (null === (t = r.keyEntities[e]) || void 0 === t
                ? void 0
                : t.node) || {};
          (R =
            r.customSlots[
              null === (p = n.slots) || void 0 === p ? void 0 : p.title
            ] ||
            r.customSlots.title ||
            k.label),
            "function" == typeof R && (R = R(n));
        } else R = F && k ? F(k.option) : null == k ? void 0 : k.label;
        return a(x, null, [
          a("span", { class: `${f}-selection-search` }, [
            a(
              Ie,
              {
                inputRef: b,
                prefixCls: f,
                id: h,
                open: I,
                inputElement: m,
                disabled: S,
                autofocus: w,
                autocomplete: C,
                editable: l.value,
                activeDescendantId: $,
                value: i.value,
                onKeydown: E,
                onMousedown: P,
                onChange: d,
                onPaste: T,
                onCompositionstart: D,
                onCompositionend: M,
                tabindex: O,
                attrs: y(e, !0),
              },
              null
            ),
          ]),
          !n.value &&
            k &&
            !u.value &&
            a("span", { class: `${f}-selection-item`, title: s.value }, [
              a(
                x,
                { key: null !== (v = k.key) && void 0 !== v ? v : k.value },
                [R]
              ),
            ]),
          c(),
        ]);
      };
    },
  });
function Re() {
  let e,
    o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 250,
    n = null;
  return (
    $(() => {
      clearTimeout(e);
    }),
    [
      () => n,
      function (t) {
        (t || null === n) && (n = t),
          clearTimeout(e),
          (e = setTimeout(() => {
            n = null;
          }, o));
      },
    ]
  );
}
(ke.props = Me), (ke.inheritAttrs = !1);
const Ae = o({
  name: "Selector",
  inheritAttrs: !1,
  props: {
    id: String,
    prefixCls: String,
    showSearch: { type: Boolean, default: void 0 },
    open: { type: Boolean, default: void 0 },
    values: n.array,
    multiple: { type: Boolean, default: void 0 },
    mode: String,
    searchValue: String,
    activeValue: String,
    inputElement: n.any,
    autofocus: { type: Boolean, default: void 0 },
    activeDescendantId: String,
    tabindex: n.oneOfType([n.number, n.string]),
    disabled: { type: Boolean, default: void 0 },
    placeholder: n.any,
    removeIcon: n.any,
    maxTagCount: n.oneOfType([n.number, n.string]),
    maxTagTextLength: Number,
    maxTagPlaceholder: n.any,
    tagRender: Function,
    optionLabelRender: Function,
    tokenWithEnter: { type: Boolean, default: void 0 },
    choiceTransitionName: String,
    onToggleOpen: { type: Function },
    onSearch: Function,
    onSearchSubmit: Function,
    onRemove: Function,
    onInputKeyDown: { type: Function },
    domRef: Function,
  },
  setup(e, o) {
    let { expose: n } = o;
    const t = me(),
      r = l(!1),
      [u, s] = Re(0),
      c = (o) => {
        const { which: n } = o;
        var t;
        (n !== C.UP && n !== C.DOWN) || o.preventDefault(),
          e.onInputKeyDown && e.onInputKeyDown(o),
          n !== C.ENTER ||
            "tags" !== e.mode ||
            r.value ||
            e.open ||
            e.onSearchSubmit(o.target.value),
          (t = n),
          [
            C.ESC,
            C.SHIFT,
            C.BACKSPACE,
            C.TAB,
            C.WIN_KEY,
            C.ALT,
            C.META,
            C.WIN_KEY_RIGHT,
            C.CTRL,
            C.SEMICOLON,
            C.EQUALS,
            C.CAPS_LOCK,
            C.CONTEXT_MENU,
            C.F1,
            C.F2,
            C.F3,
            C.F4,
            C.F5,
            C.F6,
            C.F7,
            C.F8,
            C.F9,
            C.F10,
            C.F11,
            C.F12,
          ].includes(t) || e.onToggleOpen(!0);
      },
      d = () => {
        s(!0);
      };
    let p = null;
    const v = (o) => {
        !1 !== e.onSearch(o, !0, r.value) && e.onToggleOpen(!0);
      },
      m = () => {
        r.value = !0;
      },
      f = (o) => {
        (r.value = !1), "combobox" !== e.mode && v(o.target.value);
      },
      h = (o) => {
        let {
          target: { value: n },
        } = o;
        if (e.tokenWithEnter && p && /[\r\n]/.test(p)) {
          const e = p
            .replace(/[\r\n]+$/, "")
            .replace(/\r\n/g, " ")
            .replace(/[\r\n]/g, " ");
          n = n.replace(e, p);
        }
        (p = null), v(n);
      },
      g = (e) => {
        const { clipboardData: o } = e,
          n = o.getData("text");
        p = n;
      },
      b = (e) => {
        let { target: o } = e;
        if (o !== t.current) {
          void 0 !== document.body.style.msTouchAction
            ? setTimeout(() => {
                t.current.focus();
              })
            : t.current.focus();
        }
      },
      y = (o) => {
        const n = u();
        o.target === t.current || n || o.preventDefault(),
          (("combobox" === e.mode || (e.showSearch && n)) && e.open) ||
            (e.open && e.onSearch("", !0, !1), e.onToggleOpen());
      };
    return (
      n({
        focus: () => {
          t.current.focus();
        },
        blur: () => {
          t.current.blur();
        },
      }),
      () => {
        const { prefixCls: o, domRef: n, mode: l } = e,
          u = {
            inputRef: t,
            onInputKeyDown: c,
            onInputMouseDown: d,
            onInputChange: h,
            onInputPaste: g,
            compositionStatus: r.value,
            onInputCompositionStart: m,
            onInputCompositionEnd: f,
          },
          s = a(
            "multiple" === l || "tags" === l ? De : ke,
            i(i({}, e), u),
            null
          );
        return a(
          "div",
          { ref: n, class: `${o}-selector`, onClick: b, onMousedown: y },
          [s]
        );
      }
    );
  },
});
const Ne = Symbol("BaseSelectContextKey");
function Ve() {
  return d(Ne, {});
}
function Be(e) {
  if (!I(e)) return O(e);
  const o = new Proxy(
    {},
    {
      get: (o, n, t) => Reflect.get(e.value, n, t),
      set: (o, n, t) => ((e.value[n] = t), !0),
      deleteProperty: (o, n) => Reflect.deleteProperty(e.value, n),
      has: (o, n) => Reflect.has(e.value, n),
      ownKeys: () => Object.keys(e.value),
      getOwnPropertyDescriptor: () => ({ enumerable: !0, configurable: !0 }),
    }
  );
  return O(o);
}
var ze = function (e, o) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) &&
      o.indexOf(t) < 0 &&
      (n[t] = e[t]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var l = 0;
    for (t = Object.getOwnPropertySymbols(e); l < t.length; l++)
      o.indexOf(t[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
        (n[t[l]] = e[t[l]]);
  }
  return n;
};
const He = [
    "value",
    "onChange",
    "removeIcon",
    "placeholder",
    "autofocus",
    "maxTagCount",
    "maxTagTextLength",
    "maxTagPlaceholder",
    "choiceTransitionName",
    "onInputKeyDown",
    "onPopupScroll",
    "tabindex",
    "OptionList",
    "notFoundContent",
  ],
  Le = () => ({
    showSearch: { type: Boolean, default: void 0 },
    tagRender: { type: Function },
    optionLabelRender: { type: Function },
    direction: { type: String },
    tabindex: Number,
    autofocus: Boolean,
    notFoundContent: n.any,
    placeholder: n.any,
    onClear: Function,
    choiceTransitionName: String,
    mode: String,
    disabled: { type: Boolean, default: void 0 },
    loading: { type: Boolean, default: void 0 },
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: void 0 },
    onDropdownVisibleChange: { type: Function },
    getInputElement: { type: Function },
    getRawInputElement: { type: Function },
    maxTagTextLength: Number,
    maxTagCount: { type: [String, Number] },
    maxTagPlaceholder: n.any,
    tokenSeparators: { type: Array },
    allowClear: { type: Boolean, default: void 0 },
    showArrow: { type: Boolean, default: void 0 },
    inputIcon: n.any,
    clearIcon: n.any,
    removeIcon: n.any,
    animation: String,
    transitionName: String,
    dropdownStyle: { type: Object },
    dropdownClassName: String,
    dropdownMatchSelectWidth: { type: [Boolean, Number], default: void 0 },
    dropdownRender: { type: Function },
    dropdownAlign: Object,
    placement: { type: String },
    getPopupContainer: { type: Function },
    showAction: { type: Array },
    onBlur: { type: Function },
    onFocus: { type: Function },
    onKeyup: Function,
    onKeydown: Function,
    onMousedown: Function,
    onPopupScroll: Function,
    onInputKeyDown: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
  });
function We(e) {
  return "tags" === e || "multiple" === e;
}
const je = o({
  compatConfig: { MODE: 3 },
  name: "BaseSelect",
  inheritAttrs: !1,
  props: F(
    e(
      e(
        {},
        {
          prefixCls: String,
          id: String,
          omitDomProps: Array,
          displayValues: Array,
          onDisplayValuesChange: Function,
          activeValue: String,
          activeDescendantId: String,
          onActiveValueChange: Function,
          searchValue: String,
          onSearch: Function,
          onSearchSplit: Function,
          maxLength: Number,
          OptionList: n.any,
          emptyOptions: Boolean,
        }
      ),
      Le()
    ),
    { showAction: [], notFoundContent: "Not Found" }
  ),
  setup(o, n) {
    let { attrs: u, expose: s, slots: c } = n;
    const d = t(() => We(o.mode)),
      p = t(() =>
        void 0 !== o.showSearch
          ? o.showSearch
          : d.value || "combobox" === o.mode
      ),
      y = f(!1);
    g(() => {
      y.value = he();
    });
    const w = Ee(),
      x = f(null),
      I = me(),
      O = f(null),
      F = f(null),
      T = f(null),
      D = l(!1),
      [M, k, R] = (function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
        const o = f(!1);
        let n;
        const t = () => {
          clearTimeout(n);
        };
        return (
          g(() => {
            t();
          }),
          [
            o,
            (l, a) => {
              t(),
                (n = setTimeout(() => {
                  (o.value = l), a && a();
                }, e));
            },
            t,
          ]
        );
      })();
    s({
      focus: () => {
        var e;
        null === (e = F.value) || void 0 === e || e.focus();
      },
      blur: () => {
        var e;
        null === (e = F.value) || void 0 === e || e.blur();
      },
      scrollTo: (e) => {
        var o;
        return null === (o = T.value) || void 0 === o ? void 0 : o.scrollTo(e);
      },
    });
    const A = t(() => {
        var e;
        if ("combobox" !== o.mode) return o.searchValue;
        const n =
          null === (e = o.displayValues[0]) || void 0 === e ? void 0 : e.value;
        return "string" == typeof n || "number" == typeof n ? String(n) : "";
      }),
      N = void 0 !== o.open ? o.open : o.defaultOpen,
      V = f(N),
      B = f(N),
      z = (e) => {
        (V.value = void 0 !== o.open ? o.open : e), (B.value = V.value);
      };
    b(
      () => o.open,
      () => {
        z(o.open);
      }
    );
    const H = t(() => !o.notFoundContent && o.emptyOptions);
    h(() => {
      (B.value = V.value),
        (o.disabled || (H.value && B.value && "combobox" === o.mode)) &&
          (B.value = !1);
    });
    const L = t(() => !H.value && B.value),
      W = (e) => {
        const n = void 0 !== e ? e : !B.value;
        B.value === n ||
          o.disabled ||
          (z(n), o.onDropdownVisibleChange && o.onDropdownVisibleChange(n));
      },
      j = t(() =>
        (o.tokenSeparators || []).some((e) => ["\n", "\r\n"].includes(e))
      ),
      K = (e, n, t) => {
        var l, a;
        let i = !0,
          r = e;
        null === (l = o.onActiveValueChange) || void 0 === l || l.call(o, null);
        const u = t
          ? null
          : (function (e, o) {
              if (!o || !o.length) return null;
              let n = !1;
              const t = (function e(o, t) {
                let [l, ...a] = t;
                if (!l) return [o];
                const i = o.split(l);
                return (
                  (n = n || i.length > 1),
                  i.reduce((o, n) => [...o, ...e(n, a)], []).filter((e) => e)
                );
              })(e, o);
              return n ? t : null;
            })(e, o.tokenSeparators);
        return (
          "combobox" !== o.mode &&
            u &&
            ((r = ""),
            null === (a = o.onSearchSplit) || void 0 === a || a.call(o, u),
            W(!1),
            (i = !1)),
          o.onSearch &&
            A.value !== r &&
            o.onSearch(r, { source: n ? "typing" : "effect" }),
          i
        );
      },
      _ = (e) => {
        var n;
        e &&
          e.trim() &&
          (null === (n = o.onSearch) ||
            void 0 === n ||
            n.call(o, e, { source: "submit" }));
      };
    b(
      B,
      () => {
        B.value || d.value || "combobox" === o.mode || K("", !1, !1);
      },
      { immediate: !0, flush: "post" }
    ),
      b(
        () => o.disabled,
        () => {
          V.value && o.disabled && z(!1), o.disabled && !D.value && k(!1);
        },
        { immediate: !0 }
      );
    const [X, G] = Re(),
      U = function (e) {
        var n;
        const t = X(),
          { which: l } = e;
        if (
          (l === C.ENTER &&
            ("combobox" !== o.mode && e.preventDefault(), B.value || W(!0)),
          G(!!A.value),
          l === C.BACKSPACE &&
            !t &&
            d.value &&
            !A.value &&
            o.displayValues.length)
        ) {
          const e = [...o.displayValues];
          let n = null;
          for (let o = e.length - 1; o >= 0; o -= 1) {
            const t = e[o];
            if (!t.disabled) {
              e.splice(o, 1), (n = t);
              break;
            }
          }
          n && o.onDisplayValuesChange(e, { type: "remove", values: [n] });
        }
        for (
          var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), r = 1;
          r < a;
          r++
        )
          i[r - 1] = arguments[r];
        B.value && T.value && T.value.onKeydown(e, ...i),
          null === (n = o.onKeydown) || void 0 === n || n.call(o, e, ...i);
      },
      Y = function (e) {
        for (
          var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1;
          l < n;
          l++
        )
          t[l - 1] = arguments[l];
        B.value && T.value && T.value.onKeyup(e, ...t),
          o.onKeyup && o.onKeyup(e, ...t);
      },
      Q = (e) => {
        const n = o.displayValues.filter((o) => o !== e);
        o.onDisplayValuesChange(n, { type: "remove", values: [e] });
      },
      q = f(!1),
      J = l(!1),
      Z = () => {
        J.value = !0;
      },
      ee = () => {
        J.value = !1;
      };
    m("VCSelectContainerEvent", {
      focus: function () {
        k(!0),
          o.disabled ||
            (o.onFocus && !q.value && o.onFocus(...arguments),
            o.showAction && o.showAction.includes("focus") && W(!0)),
          (q.value = !0);
      },
      blur: function () {
        if (J.value) return;
        if (
          ((D.value = !0),
          k(!1, () => {
            (q.value = !1), (D.value = !1), W(!1);
          }),
          o.disabled)
        )
          return;
        const e = A.value;
        e &&
          ("tags" === o.mode
            ? o.onSearch(e, { source: "submit" })
            : "multiple" === o.mode && o.onSearch("", { source: "blur" })),
          o.onBlur && o.onBlur(...arguments);
      },
    });
    const oe = [];
    g(() => {
      oe.forEach((e) => clearTimeout(e)), oe.splice(0, oe.length);
    }),
      $(() => {
        oe.forEach((e) => clearTimeout(e)), oe.splice(0, oe.length);
      });
    const ne = function (e) {
        var n, t;
        const { target: l } = e,
          a =
            null === (n = O.value) || void 0 === n
              ? void 0
              : n.getPopupElement();
        if (a && a.contains(l)) {
          const e = setTimeout(() => {
            var o;
            const n = oe.indexOf(e);
            -1 !== n && oe.splice(n, 1),
              R(),
              y.value ||
                a.contains(document.activeElement) ||
                null === (o = F.value) ||
                void 0 === o ||
                o.focus();
          });
          oe.push(e);
        }
        for (
          var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), u = 1;
          u < i;
          u++
        )
          r[u - 1] = arguments[u];
        null === (t = o.onMousedown) || void 0 === t || t.call(o, e, ...r);
      },
      te = f(null),
      le = () => {};
    return (
      g(() => {
        b(
          L,
          () => {
            var e;
            if (L.value) {
              const o = Math.ceil(
                null === (e = x.value) || void 0 === e ? void 0 : e.offsetWidth
              );
              te.value === o || Number.isNaN(o) || (te.value = o);
            }
          },
          { immediate: !0, flush: "post" }
        );
      }),
      (function (e, o, n) {
        function t(t) {
          var l, a, i;
          let r = t.target;
          r.shadowRoot && t.composed && (r = t.composedPath()[0] || r);
          const u = [
            null === (l = e[0]) || void 0 === l ? void 0 : l.value,
            null ===
              (i = null === (a = e[1]) || void 0 === a ? void 0 : a.value) ||
            void 0 === i
              ? void 0
              : i.getPopupElement(),
          ];
          o.value && u.every((e) => e && !e.contains(r) && e !== r) && n(!1);
        }
        g(() => {
          window.addEventListener("mousedown", t);
        }),
          $(() => {
            window.removeEventListener("mousedown", t);
          });
      })([x, O], L, W),
      (function (e) {
        m(Ne, e);
      })(
        Be(
          e(e({}, E(o)), {
            open: B,
            triggerOpen: L,
            showSearch: p,
            multiple: d,
            toggleOpen: W,
          })
        )
      ),
      () => {
        const n = e(e({}, o), u),
          {
            prefixCls: t,
            id: l,
            open: s,
            defaultOpen: m,
            mode: f,
            showSearch: h,
            searchValue: g,
            onSearch: b,
            allowClear: y,
            clearIcon: C,
            showArrow: $,
            inputIcon: E,
            disabled: D,
            loading: k,
            getInputElement: R,
            getPopupContainer: N,
            placement: V,
            animation: z,
            transitionName: H,
            dropdownStyle: X,
            dropdownClassName: G,
            dropdownMatchSelectWidth: q,
            dropdownRender: J,
            dropdownAlign: oe,
            showAction: ae,
            direction: ie,
            tokenSeparators: re,
            tagRender: ue,
            optionLabelRender: se,
            onPopupScroll: ce,
            onDropdownVisibleChange: de,
            onFocus: pe,
            onBlur: ve,
            onKeyup: me,
            onKeydown: fe,
            onMousedown: he,
            onClear: ge,
            omitDomProps: be,
            getRawInputElement: ye,
            displayValues: Se,
            onDisplayValuesChange: we,
            emptyOptions: xe,
            activeDescendantId: Ie,
            activeValue: Oe,
            OptionList: Fe,
          } = n,
          Ee = ze(n, [
            "prefixCls",
            "id",
            "open",
            "defaultOpen",
            "mode",
            "showSearch",
            "searchValue",
            "onSearch",
            "allowClear",
            "clearIcon",
            "showArrow",
            "inputIcon",
            "disabled",
            "loading",
            "getInputElement",
            "getPopupContainer",
            "placement",
            "animation",
            "transitionName",
            "dropdownStyle",
            "dropdownClassName",
            "dropdownMatchSelectWidth",
            "dropdownRender",
            "dropdownAlign",
            "showAction",
            "direction",
            "tokenSeparators",
            "tagRender",
            "optionLabelRender",
            "onPopupScroll",
            "onDropdownVisibleChange",
            "onFocus",
            "onBlur",
            "onKeyup",
            "onKeydown",
            "onMousedown",
            "onClear",
            "omitDomProps",
            "getRawInputElement",
            "displayValues",
            "onDisplayValuesChange",
            "emptyOptions",
            "activeDescendantId",
            "activeValue",
            "OptionList",
          ]),
          Pe = ("combobox" === f && R && R()) || null,
          Te = "function" == typeof ye && ye(),
          De = e({}, Ee);
        let Me;
        Te &&
          (Me = (e) => {
            W(e);
          }),
          He.forEach((e) => {
            delete De[e];
          }),
          null == be ||
            be.forEach((e) => {
              delete De[e];
            });
        const ke = void 0 !== $ ? $ : k || (!d.value && "combobox" !== f);
        let Re, Ne;
        ke &&
          (Re = a(
            $e,
            {
              class: r(`${t}-arrow`, { [`${t}-arrow-loading`]: k }),
              customizeIcon: E,
              customizeIconProps: {
                loading: k,
                searchValue: A.value,
                open: B.value,
                focused: M.value,
                showSearch: p.value,
              },
            },
            null
          ));
        const Ve = () => {
          null == ge || ge(),
            we([], { type: "clear", values: Se }),
            K("", !1, !1);
        };
        !D &&
          y &&
          (Se.length || A.value) &&
          (Ne = a(
            $e,
            { class: `${t}-clear`, onMousedown: Ve, customizeIcon: C },
            { default: () => [S("×")] }
          ));
        const Be = a(
            Fe,
            { ref: T },
            e(e({}, w.customSlots), { option: c.option })
          ),
          Le = r(t, u.class, {
            [`${t}-focused`]: M.value,
            [`${t}-multiple`]: d.value,
            [`${t}-single`]: !d.value,
            [`${t}-allow-clear`]: y,
            [`${t}-show-arrow`]: ke,
            [`${t}-disabled`]: D,
            [`${t}-loading`]: k,
            [`${t}-open`]: B.value,
            [`${t}-customize-input`]: Pe,
            [`${t}-show-search`]: p.value,
          }),
          We = a(
            Ce,
            {
              ref: O,
              disabled: D,
              prefixCls: t,
              visible: L.value,
              popupElement: Be,
              containerWidth: te.value,
              animation: z,
              transitionName: H,
              dropdownStyle: X,
              dropdownClassName: G,
              direction: ie,
              dropdownMatchSelectWidth: q,
              dropdownRender: J,
              dropdownAlign: oe,
              placement: V,
              getPopupContainer: N,
              empty: xe,
              getTriggerDOMNode: () => I.current,
              onPopupVisibleChange: Me,
              onPopupMouseEnter: le,
              onPopupFocusin: Z,
              onPopupFocusout: ee,
            },
            {
              default: () =>
                Te
                  ? P(Te) && v(Te, { ref: I }, !1, !0)
                  : a(
                      Ae,
                      i(
                        i({}, o),
                        {},
                        {
                          domRef: I,
                          prefixCls: t,
                          inputElement: Pe,
                          ref: F,
                          id: l,
                          showSearch: p.value,
                          mode: f,
                          activeDescendantId: Ie,
                          tagRender: ue,
                          optionLabelRender: se,
                          values: Se,
                          open: B.value,
                          onToggleOpen: W,
                          activeValue: Oe,
                          searchValue: A.value,
                          onSearch: K,
                          onSearchSubmit: _,
                          onRemove: Q,
                          tokenWithEnter: j.value,
                        }
                      ),
                      null
                    ),
            }
          );
        let je;
        return (
          (je = Te
            ? We
            : a(
                "div",
                i(
                  i({}, De),
                  {},
                  {
                    class: Le,
                    ref: x,
                    onMousedown: ne,
                    onKeydown: U,
                    onKeyup: Y,
                  }
                ),
                [
                  M.value &&
                    !B.value &&
                    a(
                      "span",
                      {
                        style: {
                          width: 0,
                          height: 0,
                          position: "absolute",
                          overflow: "hidden",
                          opacity: 0,
                        },
                        "aria-live": "polite",
                      },
                      [
                        `${Se.map((e) => {
                          let { label: o, value: n } = e;
                          return ["number", "string"].includes(typeof o)
                            ? o
                            : n;
                        }).join(", ")}`,
                      ]
                    ),
                  We,
                  Re,
                  Ne,
                ]
              )),
          je
        );
      }
    );
  },
});
function Ke(e, o, n) {
  const t = l(e());
  return (
    b(o, (o, l) => {
      n ? n(o, l) && (t.value = e()) : (t.value = e());
    }),
    t
  );
}
const _e = Symbol("SelectContextKey");
var Xe = function (e, o) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) &&
      o.indexOf(t) < 0 &&
      (n[t] = e[t]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var l = 0;
    for (t = Object.getOwnPropertySymbols(e); l < t.length; l++)
      o.indexOf(t[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
        (n[t[l]] = e[t[l]]);
  }
  return n;
};
function Ge(e) {
  return "string" == typeof e || "number" == typeof e;
}
const Ue = o({
  compatConfig: { MODE: 3 },
  name: "OptionList",
  inheritAttrs: !1,
  setup(e, o) {
    let { expose: n, slots: l } = o;
    const u = Ve(),
      s = d(_e, {}),
      c = t(() => `${u.prefixCls}-item`),
      p = Ke(
        () => s.flattenOptions,
        [() => u.open, () => s.flattenOptions],
        (e) => e[0]
      ),
      v = me(),
      m = (e) => {
        e.preventDefault();
      },
      f = (e) => {
        v.current &&
          v.current.scrollTo("number" == typeof e ? { index: e } : e);
      },
      h = function (e) {
        let o =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const n = p.value.length;
        for (let t = 0; t < n; t += 1) {
          const l = (e + t * o + n) % n,
            { group: a, data: i } = p.value[l];
          if (!a && !i.disabled) return l;
        }
        return -1;
      },
      g = O({ activeIndex: h(0) }),
      S = function (e) {
        let o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        g.activeIndex = e;
        const n = { source: o ? "keyboard" : "mouse" },
          t = p.value[e];
        t ? s.onActiveValue(t.value, e, n) : s.onActiveValue(null, -1, n);
      };
    b(
      [() => p.value.length, () => u.searchValue],
      () => {
        S(!1 !== s.defaultActiveFirstOption ? h(0) : -1);
      },
      { immediate: !0 }
    );
    const w = (e) => s.rawValues.has(e) && "combobox" !== u.mode;
    b(
      [() => u.open, () => u.searchValue],
      () => {
        if (!u.multiple && u.open && 1 === s.rawValues.size) {
          const e = Array.from(s.rawValues)[0],
            o = T(p.value).findIndex((o) => {
              let { data: n } = o;
              return n[s.fieldNames.value] === e;
            });
          -1 !== o &&
            (S(o),
            D(() => {
              f(o);
            }));
        }
        u.open &&
          D(() => {
            var e;
            null === (e = v.current) || void 0 === e || e.scrollTo(void 0);
          });
      },
      { immediate: !0, flush: "post" }
    );
    const $ = (e) => {
        void 0 !== e && s.onSelect(e, { selected: !s.rawValues.has(e) }),
          u.multiple || u.toggleOpen(!1);
      },
      I = (e) => ("function" == typeof e.label ? e.label() : e.label);
    function F(e) {
      const o = p.value[e];
      if (!o) return null;
      const n = o.data || {},
        { value: t } = n,
        { group: l } = o,
        r = y(n, !0),
        s = I(o);
      return o
        ? a(
            "div",
            i(
              i({ "aria-label": "string" != typeof s || l ? null : s }, r),
              {},
              {
                key: e,
                role: l ? "presentation" : "option",
                id: `${u.id}_list_${e}`,
                "aria-selected": w(t),
              }
            ),
            [t]
          )
        : null;
    }
    return (
      n({
        onKeydown: (e) => {
          const { which: o, ctrlKey: n } = e;
          switch (o) {
            case C.N:
            case C.P:
            case C.UP:
            case C.DOWN: {
              let e = 0;
              if (
                (o === C.UP
                  ? (e = -1)
                  : o === C.DOWN
                  ? (e = 1)
                  : /(mac\sos|macintosh)/i.test(navigator.appVersion) &&
                    n &&
                    (o === C.N ? (e = 1) : o === C.P && (e = -1)),
                0 !== e)
              ) {
                const o = h(g.activeIndex + e, e);
                f(o), S(o, !0);
              }
              break;
            }
            case C.ENTER: {
              const o = p.value[g.activeIndex];
              o && !o.data.disabled ? $(o.value) : $(void 0),
                u.open && e.preventDefault();
              break;
            }
            case C.ESC:
              u.toggleOpen(!1), u.open && e.stopPropagation();
          }
        },
        onKeyup: () => {},
        scrollTo: (e) => {
          f(e);
        },
      }),
      () => {
        const { id: e, notFoundContent: o, onPopupScroll: n } = u,
          {
            menuItemSelectedIcon: t,
            fieldNames: d,
            virtual: f,
            listHeight: h,
            listItemHeight: b,
          } = s,
          y = l.option,
          { activeIndex: C } = g,
          O = Object.keys(d).map((e) => d[e]);
        return 0 === p.value.length
          ? a(
              "div",
              {
                role: "listbox",
                id: `${e}_list`,
                class: `${c.value}-empty`,
                onMousedown: m,
              },
              [o]
            )
          : a(x, null, [
              a(
                "div",
                {
                  role: "listbox",
                  id: `${e}_list`,
                  style: { height: 0, width: 0, overflow: "hidden" },
                },
                [F(C - 1), F(C), F(C + 1)]
              ),
              a(
                fe,
                {
                  itemKey: "key",
                  ref: v,
                  data: p.value,
                  height: h,
                  itemHeight: b,
                  fullHeight: !1,
                  onMousedown: m,
                  onScroll: n,
                  virtual: f,
                },
                {
                  default: (e, o) => {
                    var n;
                    const { group: l, groupOption: u, data: s, value: d } = e,
                      { key: p } = s,
                      v = "function" == typeof e.label ? e.label() : e.label;
                    if (l) {
                      const e =
                        null !== (n = s.title) && void 0 !== n ? n : Ge(v) && v;
                      return a(
                        "div",
                        { class: r(c.value, `${c.value}-group`), title: e },
                        [y ? y(s) : void 0 !== v ? v : p]
                      );
                    }
                    const {
                        disabled: m,
                        title: f,
                        children: h,
                        style: g,
                        class: b,
                        className: x,
                      } = s,
                      F = Xe(s, [
                        "disabled",
                        "title",
                        "children",
                        "style",
                        "class",
                        "className",
                      ]),
                      E = M(F, O),
                      T = w(d),
                      D = `${c.value}-option`,
                      k = r(c.value, D, b, x, {
                        [`${D}-grouped`]: u,
                        [`${D}-active`]: C === o && !m,
                        [`${D}-disabled`]: m,
                        [`${D}-selected`]: T,
                      }),
                      R = I(e),
                      A = !t || "function" == typeof t || T,
                      N = "number" == typeof R ? R : R || d;
                    let V = Ge(N) ? N.toString() : void 0;
                    return (
                      void 0 !== f && (V = f),
                      a(
                        "div",
                        i(
                          i({}, E),
                          {},
                          {
                            "aria-selected": T,
                            class: k,
                            title: V,
                            onMousemove: (e) => {
                              F.onMousemove && F.onMousemove(e),
                                C === o || m || S(o);
                            },
                            onClick: (e) => {
                              m || $(d), F.onClick && F.onClick(e);
                            },
                            style: g,
                          }
                        ),
                        [
                          a("div", { class: `${D}-content` }, [y ? y(s) : N]),
                          P(t) || T,
                          A &&
                            a(
                              $e,
                              {
                                class: `${c.value}-option-state`,
                                customizeIcon: t,
                                customizeIconProps: { isSelected: T },
                              },
                              { default: () => [T ? "✓" : null] }
                            ),
                        ]
                      )
                    );
                  },
                }
              ),
            ]);
      }
    );
  },
});
var Ye = function (e, o) {
  var n = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) &&
      o.indexOf(t) < 0 &&
      (n[t] = e[t]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var l = 0;
    for (t = Object.getOwnPropertySymbols(e); l < t.length; l++)
      o.indexOf(t[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, t[l]) &&
        (n[t[l]] = e[t[l]]);
  }
  return n;
};
function Qe(o) {
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  const t = k(o)
    .map((o, t) => {
      var l;
      if (!P(o) || !o.type) return null;
      const {
        type: { isSelectOptGroup: a },
        key: i,
        children: r,
        props: u,
      } = o;
      if (n || !a)
        return (function (o) {
          const n = o,
            { key: t, children: l } = n,
            a = n.props,
            { value: i, disabled: r } = a,
            u = Ye(a, ["value", "disabled"]),
            s = null == l ? void 0 : l.default;
          return e(
            {
              key: t,
              value: void 0 !== i ? i : t,
              children: s,
              disabled: r || "" === r,
            },
            u
          );
        })(o);
      const s = r && r.default ? r.default() : void 0,
        c =
          (null == u ? void 0 : u.label) ||
          (null === (l = r.label) || void 0 === l ? void 0 : l.call(r)) ||
          i;
      return e(
        e({ key: `__RC_SELECT_GRP__${null === i ? t : String(i)}__` }, u),
        { label: c, options: Qe(s || []) }
      );
    })
    .filter((e) => e);
  return t;
}
let qe = 0;
const Je = R();
function Ze() {
  let e =
    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l("");
  const o = `rc_select_${(function () {
    let e;
    return Je ? ((e = qe), (qe += 1)) : (e = "TEST_OR_SSR"), e;
  })()}`;
  return e.value || o;
}
function eo(e) {
  return Array.isArray(e) ? e : void 0 !== e ? [e] : [];
}
function oo(e, o) {
  return eo(e).join("").toUpperCase().includes(o);
}
const no = ["inputValue"];
function to() {
  return e(e({}, Le()), {
    prefixCls: String,
    id: String,
    backfill: { type: Boolean, default: void 0 },
    fieldNames: Object,
    inputValue: String,
    searchValue: String,
    onSearch: Function,
    autoClearSearchValue: { type: Boolean, default: void 0 },
    onSelect: Function,
    onDeselect: Function,
    filterOption: { type: [Boolean, Function], default: void 0 },
    filterSort: Function,
    optionFilterProp: String,
    optionLabelProp: String,
    options: Array,
    defaultActiveFirstOption: { type: Boolean, default: void 0 },
    virtual: { type: Boolean, default: void 0 },
    listHeight: Number,
    listItemHeight: Number,
    menuItemSelectedIcon: n.any,
    mode: String,
    labelInValue: { type: Boolean, default: void 0 },
    value: n.any,
    defaultValue: n.any,
    onChange: Function,
    children: Array,
  });
}
const lo = o({
    compatConfig: { MODE: 3 },
    name: "VcSelect",
    inheritAttrs: !1,
    props: F(to(), {
      prefixCls: "vc-select",
      autoClearSearchValue: !0,
      listHeight: 200,
      listItemHeight: 20,
      dropdownMatchSelectWidth: !0,
    }),
    setup(o, n) {
      let { expose: r, attrs: u, slots: s } = n;
      const c = Ze(A(o, "id")),
        d = t(() => We(o.mode)),
        p = t(() => !(o.options || !o.children)),
        v = t(
          () =>
            (void 0 !== o.filterOption || "combobox" !== o.mode) &&
            o.filterOption
        ),
        g = t(() => Se(o.fieldNames, p.value)),
        [y, S] = N("", {
          value: t(() =>
            void 0 !== o.searchValue ? o.searchValue : o.inputValue
          ),
          postState: (e) => e || "",
        }),
        w = (function (e, o, n) {
          const t = f(),
            l = f(),
            a = f(),
            i = f([]);
          return (
            b(
              [e, o],
              () => {
                e.value
                  ? (i.value = T(e.value).slice())
                  : (i.value = Qe(o.value));
              },
              { immediate: !0, deep: !0 }
            ),
            h(() => {
              const e = i.value,
                o = new Map(),
                r = new Map(),
                u = n.value;
              !(function e(n) {
                let t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                for (let l = 0; l < n.length; l += 1) {
                  const a = n[l];
                  !a[u.options] || t
                    ? (o.set(a[u.value], a), r.set(a[u.label], a))
                    : e(a[u.options], !0);
                }
              })(e),
                (t.value = e),
                (l.value = o),
                (a.value = r);
            }),
            { options: t, valueOptions: l, labelOptions: a }
          );
        })(A(o, "options"), A(o, "children"), g),
        { valueOptions: x, labelOptions: C, options: $ } = w,
        I = (e) =>
          eo(e).map((e) => {
            var n, t;
            let l, a, i, r;
            var u;
            (u = e) && "object" == typeof u
              ? ((i = e.key),
                (a = e.label),
                (l = null !== (n = e.value) && void 0 !== n ? n : i))
              : (l = e);
            const s = x.value.get(l);
            return (
              s &&
                (void 0 === a &&
                  (a =
                    null == s ? void 0 : s[o.optionLabelProp || g.value.label]),
                void 0 === i &&
                  (i =
                    null !== (t = null == s ? void 0 : s.key) && void 0 !== t
                      ? t
                      : l),
                (r = null == s ? void 0 : s.disabled)),
              { label: a, value: l, key: i, disabled: r, option: s }
            );
          }),
        [O, F] = N(o.defaultValue, { value: A(o, "value") }),
        E = t(() => {
          var e;
          const n = I(O.value);
          return "combobox" !== o.mode ||
            (null === (e = n[0]) || void 0 === e ? void 0 : e.value)
            ? n
            : [];
        }),
        [P, D] = ((o, n) => {
          const l = f({ values: new Map(), options: new Map() });
          return [
            t(() => {
              const { values: t, options: a } = l.value,
                i = o.value.map((o) => {
                  var n;
                  return void 0 === o.label
                    ? e(e({}, o), {
                        label:
                          null === (n = t.get(o.value)) || void 0 === n
                            ? void 0
                            : n.label,
                      })
                    : o;
                }),
                r = new Map(),
                u = new Map();
              return (
                i.forEach((e) => {
                  r.set(e.value, e),
                    u.set(e.value, n.value.get(e.value) || a.get(e.value));
                }),
                (l.value.values = r),
                (l.value.options = u),
                i
              );
            }),
            (e) => n.value.get(e) || l.value.options.get(e),
          ];
        })(E, x),
        k = t(() => {
          if (!o.mode && 1 === P.value.length) {
            const e = P.value[0];
            if (null === e.value && (null === e.label || void 0 === e.label))
              return [];
          }
          return P.value.map((o) => {
            var n;
            return e(e({}, o), {
              label:
                null !==
                  (n = "function" == typeof o.label ? o.label() : o.label) &&
                void 0 !== n
                  ? n
                  : o.value,
            });
          });
        }),
        R = t(() => new Set(P.value.map((e) => e.value)));
      h(
        () => {
          var e;
          if ("combobox" === o.mode) {
            const o =
              null === (e = P.value[0]) || void 0 === e ? void 0 : e.value;
            null != o && S(String(o));
          }
        },
        { flush: "post" }
      );
      const B = (e, o) => {
          const n = null != o ? o : e;
          return { [g.value.value]: e, [g.value.label]: n };
        },
        z = f();
      h(() => {
        if ("tags" !== o.mode) return void (z.value = $.value);
        const e = $.value.slice();
        [...P.value]
          .sort((e, o) => (e.value < o.value ? -1 : 1))
          .forEach((o) => {
            const n = o.value;
            ((e) => x.value.has(e))(n) || e.push(B(n, o.label));
          }),
          (z.value = e);
      });
      const H =
        ((L = z),
        (W = g),
        (j = y),
        (K = v),
        (_ = A(o, "optionFilterProp")),
        t(() => {
          const o = j.value,
            n = null == _ ? void 0 : _.value,
            t = null == K ? void 0 : K.value;
          if (!o || !1 === t) return L.value;
          const { options: l, label: a, value: i } = W.value,
            r = [],
            u = "function" == typeof t,
            s = o.toUpperCase(),
            c = u
              ? t
              : (e, o) =>
                  n
                    ? oo(o[n], s)
                    : o[l]
                    ? oo(o["children" !== a ? a : "label"], s)
                    : oo(o[i], s),
            d = u ? (e) => we(e) : (e) => e;
          return (
            L.value.forEach((n) => {
              if (n[l])
                if (c(o, d(n))) r.push(n);
                else {
                  const t = n[l].filter((e) => c(o, d(e)));
                  t.length && r.push(e(e({}, n), { [l]: t }));
                }
              else c(o, d(n)) && r.push(n);
            }),
            r
          );
        }));
      var L, W, j, K, _;
      const X = t(() =>
          "tags" !== o.mode ||
          !y.value ||
          H.value.some((e) => e[o.optionFilterProp || "value"] === y.value)
            ? H.value
            : [B(y.value), ...H.value]
        ),
        G = t(() =>
          o.filterSort
            ? [...X.value].sort((e, n) => o.filterSort(e, n))
            : X.value
        ),
        U = t(() =>
          (function (e) {
            let { fieldNames: o, childrenAsData: n } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const t = [],
              { label: l, value: a, options: i } = Se(o, !1);
            return (
              (function e(o, r) {
                o.forEach((o) => {
                  const u = o[l];
                  if (r || !(i in o)) {
                    const e = o[a];
                    t.push({
                      key: ye(o, t.length),
                      groupOption: r,
                      data: o,
                      label: u,
                      value: e,
                    });
                  } else {
                    let l = u;
                    void 0 === l && n && (l = o.label),
                      t.push({
                        key: ye(o, t.length),
                        group: !0,
                        data: o,
                        label: l,
                      }),
                      e(o[i], !0);
                  }
                });
              })(e, !1),
              t
            );
          })(G.value, { fieldNames: g.value, childrenAsData: p.value })
        ),
        Y = (n) => {
          const t = I(n);
          if (
            (F(t),
            o.onChange &&
              (t.length !== P.value.length ||
                t.some((e, o) => {
                  var n;
                  return (
                    (null === (n = P.value[o]) || void 0 === n
                      ? void 0
                      : n.value) !== (null == e ? void 0 : e.value)
                  );
                })))
          ) {
            const n = o.labelInValue
                ? t.map((o) =>
                    e(e({}, o), {
                      originLabel: o.label,
                      label: "function" == typeof o.label ? o.label() : o.label,
                    })
                  )
                : t.map((e) => e.value),
              l = t.map((e) => we(D(e.value)));
            o.onChange(d.value ? n : n[0], d.value ? l : l[0]);
          }
        },
        [Q, q] = V(null),
        [J, Z] = V(0),
        ee = t(() =>
          void 0 !== o.defaultActiveFirstOption
            ? o.defaultActiveFirstOption
            : "combobox" !== o.mode
        ),
        oe = (e, n) => {
          const t = () => {
            var n;
            const t = D(e),
              l = null == t ? void 0 : t[g.value.label];
            return [
              o.labelInValue
                ? {
                    label: "function" == typeof l ? l() : l,
                    originLabel: l,
                    value: e,
                    key:
                      null !== (n = null == t ? void 0 : t.key) && void 0 !== n
                        ? n
                        : e,
                  }
                : e,
              we(t),
            ];
          };
          if (n && o.onSelect) {
            const [e, n] = t();
            o.onSelect(e, n);
          } else if (!n && o.onDeselect) {
            const [e, n] = t();
            o.onDeselect(e, n);
          }
        },
        ne = (e, o) => {
          Y(e),
            ("remove" !== o.type && "clear" !== o.type) ||
              o.values.forEach((e) => {
                oe(e.value, !1);
              });
        },
        te = (e, n) => {
          var t;
          if ((S(e), q(null), "submit" !== n.source))
            "blur" !== n.source &&
              ("combobox" === o.mode && Y(e),
              null === (t = o.onSearch) || void 0 === t || t.call(o, e));
          else {
            const o = (e || "").trim();
            if (o) {
              const e = Array.from(new Set([...R.value, o]));
              Y(e), oe(o, !0), S("");
            }
          }
        },
        le = (e) => {
          let n = e;
          "tags" !== o.mode &&
            (n = e
              .map((e) => {
                const o = C.value.get(e);
                return null == o ? void 0 : o.value;
              })
              .filter((e) => void 0 !== e));
          const t = Array.from(new Set([...R.value, ...n]));
          Y(t),
            t.forEach((e) => {
              oe(e, !0);
            });
        },
        ae = t(() => !1 !== o.virtual && !1 !== o.dropdownMatchSelectWidth);
      !(function (e) {
        m(_e, e);
      })(
        Be(
          e(e({}, w), {
            flattenOptions: U,
            onActiveValue: function (e, n) {
              let { source: t = "keyboard" } =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
              Z(n),
                o.backfill &&
                  "combobox" === o.mode &&
                  null !== e &&
                  "keyboard" === t &&
                  q(String(e));
            },
            defaultActiveFirstOption: ee,
            onSelect: (e, n) => {
              let t;
              const l = !d.value || n.selected;
              (t = l
                ? d.value
                  ? [...P.value, e]
                  : [e]
                : P.value.filter((o) => o.value !== e)),
                Y(t),
                oe(e, l),
                "combobox" === o.mode
                  ? q("")
                  : (d.value && !o.autoClearSearchValue) || (S(""), q(""));
            },
            menuItemSelectedIcon: A(o, "menuItemSelectedIcon"),
            rawValues: R,
            fieldNames: g,
            virtual: ae,
            listHeight: A(o, "listHeight"),
            listItemHeight: A(o, "listItemHeight"),
            childrenAsData: p,
          })
        )
      );
      const ie = l();
      r({
        focus() {
          var e;
          null === (e = ie.value) || void 0 === e || e.focus();
        },
        blur() {
          var e;
          null === (e = ie.value) || void 0 === e || e.blur();
        },
        scrollTo(e) {
          var o;
          null === (o = ie.value) || void 0 === o || o.scrollTo(e);
        },
      });
      const re = t(() =>
        M(o, [
          "id",
          "mode",
          "prefixCls",
          "backfill",
          "fieldNames",
          "inputValue",
          "searchValue",
          "onSearch",
          "autoClearSearchValue",
          "onSelect",
          "onDeselect",
          "dropdownMatchSelectWidth",
          "filterOption",
          "filterSort",
          "optionFilterProp",
          "optionLabelProp",
          "options",
          "children",
          "defaultActiveFirstOption",
          "menuItemSelectedIcon",
          "virtual",
          "listHeight",
          "listItemHeight",
          "value",
          "defaultValue",
          "labelInValue",
          "onChange",
        ])
      );
      return () =>
        a(
          je,
          i(
            i(i({}, re.value), u),
            {},
            {
              id: c,
              prefixCls: o.prefixCls,
              ref: ie,
              omitDomProps: no,
              mode: o.mode,
              displayValues: k.value,
              onDisplayValuesChange: ne,
              searchValue: y.value,
              onSearch: te,
              onSearchSplit: le,
              dropdownMatchSelectWidth: o.dropdownMatchSelectWidth,
              OptionList: Ue,
              emptyOptions: !U.value.length,
              activeValue: Q.value,
              activeDescendantId: `${c}_list_${J.value}`,
            }
          ),
          s
        );
    },
  }),
  ao = () => null;
(ao.isSelectOption = !0), (ao.displayName = "ASelectOption");
const io = () => null;
function ro(e) {
  let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const {
      loading: n,
      multiple: t,
      prefixCls: l,
      hasFeedback: i,
      feedbackIcon: r,
      showArrow: u,
    } = e,
    s = e.suffixIcon || (o.suffixIcon && o.suffixIcon()),
    c = e.clearIcon || (o.clearIcon && o.clearIcon()),
    d =
      e.menuItemSelectedIcon ||
      (o.menuItemSelectedIcon && o.menuItemSelectedIcon()),
    p = e.removeIcon || (o.removeIcon && o.removeIcon()),
    v = null != c ? c : a(B, null, null),
    m = (e) => a(x, null, [!1 !== u && e, i && r]);
  let f = null;
  if (void 0 !== s) f = m(s);
  else if (n) f = m(a(z, { spin: !0 }, null));
  else {
    const e = `${l}-suffix`;
    f = (o) => {
      let { open: n, showSearch: t } = o;
      return m(a(n && t ? L : ge, { class: e }, null));
    };
  }
  let h = null;
  h = void 0 !== d ? d : t ? a(be, null, null) : null;
  let g = null;
  return (
    (g = void 0 !== p ? p : a(H, null, null)),
    { clearIcon: v, suffixIcon: f, itemIcon: h, removeIcon: g }
  );
}
(io.isSelectOptGroup = !0), (io.displayName = "ASelectOptGroup");
const uo = (e) => {
    const { controlPaddingHorizontal: o } = e;
    return {
      position: "relative",
      display: "block",
      minHeight: e.controlHeight,
      padding: `${(e.controlHeight - e.fontSize * e.lineHeight) / 2}px ${o}px`,
      color: e.colorText,
      fontWeight: "normal",
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      boxSizing: "border-box",
    };
  },
  so = (o) => {
    const { antCls: n, componentCls: t } = o,
      l = `${t}-item`;
    return [
      {
        [`${t}-dropdown`]: e(e({}, W(o)), {
          position: "absolute",
          top: -9999,
          zIndex: o.zIndexPopup,
          boxSizing: "border-box",
          padding: o.paddingXXS,
          overflow: "hidden",
          fontSize: o.fontSize,
          fontVariant: "initial",
          backgroundColor: o.colorBgElevated,
          borderRadius: o.borderRadiusLG,
          outline: "none",
          boxShadow: o.boxShadowSecondary,
          [`\n            &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,\n            &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomLeft\n          `]:
            { animationName: j },
          [`\n            &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topLeft,\n            &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topLeft\n          `]:
            { animationName: K },
          [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomLeft`]:
            { animationName: _ },
          [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topLeft`]:
            { animationName: X },
          "&-hidden": { display: "none" },
          "&-empty": { color: o.colorTextDisabled },
          [`${l}-empty`]: e(e({}, uo(o)), { color: o.colorTextDisabled }),
          [`${l}`]: e(e({}, uo(o)), {
            cursor: "pointer",
            transition: `background ${o.motionDurationSlow} ease`,
            borderRadius: o.borderRadiusSM,
            "&-group": {
              color: o.colorTextDescription,
              fontSize: o.fontSizeSM,
              cursor: "default",
            },
            "&-option": {
              display: "flex",
              "&-content": e({ flex: "auto" }, G),
              "&-state": { flex: "none" },
              [`&-active:not(${l}-option-disabled)`]: {
                backgroundColor: o.controlItemBgHover,
              },
              [`&-selected:not(${l}-option-disabled)`]: {
                color: o.colorText,
                fontWeight: o.fontWeightStrong,
                backgroundColor: o.controlItemBgActive,
                [`${l}-option-state`]: { color: o.colorPrimary },
              },
              "&-disabled": {
                [`&${l}-option-selected`]: {
                  backgroundColor: o.colorBgContainerDisabled,
                },
                color: o.colorTextDisabled,
                cursor: "not-allowed",
              },
              "&-grouped": {
                paddingInlineStart: 2 * o.controlPaddingHorizontal,
              },
            },
          }),
          "&-rtl": { direction: "rtl" },
        }),
      },
      U(o, "slide-up"),
      U(o, "slide-down"),
      Y(o, "move-up"),
      Y(o, "move-down"),
    ];
  },
  co = 2;
function po(e) {
  let { controlHeightSM: o, controlHeight: n, lineWidth: t } = e;
  const l = (n - o) / 2 - t;
  return [l, Math.ceil(l / 2)];
}
function vo(o, n) {
  const { componentCls: t, iconCls: l } = o,
    a = `${t}-selection-overflow`,
    i = o.controlHeightSM,
    [r] = po(o),
    u = n ? `${t}-${n}` : "";
  return {
    [`${t}-multiple${u}`]: {
      fontSize: o.fontSize,
      [a]: {
        position: "relative",
        display: "flex",
        flex: "auto",
        flexWrap: "wrap",
        maxWidth: "100%",
        "&-item": {
          flex: "none",
          alignSelf: "center",
          maxWidth: "100%",
          display: "inline-flex",
        },
      },
      [`${t}-selector`]: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: `${r - co}px ${2 * co}px`,
        borderRadius: o.borderRadius,
        [`${t}-show-search&`]: { cursor: "text" },
        [`${t}-disabled&`]: {
          background: o.colorBgContainerDisabled,
          cursor: "not-allowed",
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${co}px 0`,
          lineHeight: `${i}px`,
          content: '"\\a0"',
        },
      },
      [`\n        &${t}-show-arrow ${t}-selector,\n        &${t}-allow-clear ${t}-selector\n      `]:
        { paddingInlineEnd: o.fontSizeIcon + o.controlPaddingHorizontal },
      [`${t}-selection-item`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        height: i,
        marginTop: co,
        marginBottom: co,
        lineHeight: i - 2 * o.lineWidth + "px",
        background: o.colorFillSecondary,
        border: `${o.lineWidth}px solid ${o.colorSplit}`,
        borderRadius: o.borderRadiusSM,
        cursor: "default",
        transition: `font-size ${o.motionDurationSlow}, line-height ${o.motionDurationSlow}, height ${o.motionDurationSlow}`,
        userSelect: "none",
        marginInlineEnd: 2 * co,
        paddingInlineStart: o.paddingXS,
        paddingInlineEnd: o.paddingXS / 2,
        [`${t}-disabled&`]: {
          color: o.colorTextDisabled,
          borderColor: o.colorBorder,
          cursor: "not-allowed",
        },
        "&-content": {
          display: "inline-block",
          marginInlineEnd: o.paddingXS / 2,
          overflow: "hidden",
          whiteSpace: "pre",
          textOverflow: "ellipsis",
        },
        "&-remove": e(e({}, q()), {
          display: "inline-block",
          color: o.colorIcon,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${l}`]: { verticalAlign: "-0.2em" },
          "&:hover": { color: o.colorIconHover },
        }),
      },
      [`${a}-item + ${a}-item`]: {
        [`${t}-selection-search`]: { marginInlineStart: 0 },
      },
      [`${t}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: o.inputPaddingHorizontalBase - r,
        "\n          &-input,\n          &-mirror\n        ": {
          height: i,
          fontFamily: o.fontFamily,
          lineHeight: `${i}px`,
          transition: `all ${o.motionDurationSlow}`,
        },
        "&-input": { width: "100%", minWidth: 4.1 },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          visibility: "hidden",
        },
      },
      [`${t}-selection-placeholder `]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: o.inputPaddingHorizontalBase,
        insetInlineEnd: o.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${o.motionDurationSlow}`,
      },
    },
  };
}
function mo(e) {
  const { componentCls: o } = e,
    n = Q(e, {
      controlHeight: e.controlHeightSM,
      controlHeightSM: e.controlHeightXS,
      borderRadius: e.borderRadiusSM,
      borderRadiusSM: e.borderRadiusXS,
    }),
    [, t] = po(e);
  return [
    vo(e),
    vo(n, "sm"),
    {
      [`${o}-multiple${o}-sm`]: {
        [`${o}-selection-placeholder`]: {
          insetInlineStart: e.controlPaddingHorizontalSM - e.lineWidth,
          insetInlineEnd: "auto",
        },
        [`${o}-selection-search`]: { marginInlineStart: t },
      },
    },
    vo(
      Q(e, {
        fontSize: e.fontSizeLG,
        controlHeight: e.controlHeightLG,
        controlHeightSM: e.controlHeight,
        borderRadius: e.borderRadiusLG,
        borderRadiusSM: e.borderRadius,
      }),
      "lg"
    ),
  ];
}
function fo(o, n) {
  const { componentCls: t, inputPaddingHorizontalBase: l, borderRadius: a } = o,
    i = o.controlHeight - 2 * o.lineWidth,
    r = Math.ceil(1.25 * o.fontSize),
    u = n ? `${t}-${n}` : "";
  return {
    [`${t}-single${u}`]: {
      fontSize: o.fontSize,
      [`${t}-selector`]: e(e({}, W(o)), {
        display: "flex",
        borderRadius: a,
        [`${t}-selection-search`]: {
          position: "absolute",
          top: 0,
          insetInlineStart: l,
          insetInlineEnd: l,
          bottom: 0,
          "&-input": { width: "100%" },
        },
        [`\n          ${t}-selection-item,\n          ${t}-selection-placeholder\n        `]:
          {
            padding: 0,
            lineHeight: `${i}px`,
            transition: `all ${o.motionDurationSlow}`,
            "@supports (-moz-appearance: meterbar)": { lineHeight: `${i}px` },
          },
        [`${t}-selection-item`]: { position: "relative", userSelect: "none" },
        [`${t}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none",
        },
        [[
          "&:after",
          `${t}-selection-item:after`,
          `${t}-selection-placeholder:after`,
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"',
        },
      }),
      [`\n        &${t}-show-arrow ${t}-selection-item,\n        &${t}-show-arrow ${t}-selection-placeholder\n      `]:
        { paddingInlineEnd: r },
      [`&${t}-open ${t}-selection-item`]: { color: o.colorTextPlaceholder },
      [`&:not(${t}-customize-input)`]: {
        [`${t}-selector`]: {
          width: "100%",
          height: o.controlHeight,
          padding: `0 ${l}px`,
          [`${t}-selection-search-input`]: { height: i },
          "&:after": { lineHeight: `${i}px` },
        },
      },
      [`&${t}-customize-input`]: {
        [`${t}-selector`]: {
          "&:after": { display: "none" },
          [`${t}-selection-search`]: { position: "static", width: "100%" },
          [`${t}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${l}px`,
            "&:after": { display: "none" },
          },
        },
      },
    },
  };
}
function ho(e) {
  const { componentCls: o } = e,
    n = e.controlPaddingHorizontalSM - e.lineWidth;
  return [
    fo(e),
    fo(
      Q(e, {
        controlHeight: e.controlHeightSM,
        borderRadius: e.borderRadiusSM,
      }),
      "sm"
    ),
    {
      [`${o}-single${o}-sm`]: {
        [`&:not(${o}-customize-input)`]: {
          [`${o}-selection-search`]: { insetInlineStart: n, insetInlineEnd: n },
          [`${o}-selector`]: { padding: `0 ${n}px` },
          [`&${o}-show-arrow ${o}-selection-search`]: {
            insetInlineEnd: n + 1.5 * e.fontSize,
          },
          [`\n            &${o}-show-arrow ${o}-selection-item,\n            &${o}-show-arrow ${o}-selection-placeholder\n          `]:
            { paddingInlineEnd: 1.5 * e.fontSize },
        },
      },
    },
    fo(
      Q(e, {
        controlHeight: e.controlHeightLG,
        fontSize: e.fontSizeLG,
        borderRadius: e.borderRadiusLG,
      }),
      "lg"
    ),
  ];
}
const go = (e) => {
    const { componentCls: o } = e;
    return {
      position: "relative",
      backgroundColor: e.colorBgContainer,
      border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      input: { cursor: "pointer" },
      [`${o}-show-search&`]: {
        cursor: "text",
        input: { cursor: "auto", color: "inherit" },
      },
      [`${o}-disabled&`]: {
        color: e.colorTextDisabled,
        background: e.colorBgContainerDisabled,
        cursor: "not-allowed",
        [`${o}-multiple&`]: { background: e.colorBgContainerDisabled },
        input: { cursor: "not-allowed" },
      },
    };
  },
  bo = function (o, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const {
        componentCls: l,
        borderHoverColor: a,
        outlineColor: i,
        antCls: r,
      } = n,
      u = t ? { [`${l}-selector`]: { borderColor: a } } : {};
    return {
      [o]: {
        [`&:not(${l}-disabled):not(${l}-customize-input):not(${r}-pagination-size-changer)`]:
          e(e({}, u), {
            [`${l}-focused& ${l}-selector`]: {
              borderColor: a,
              boxShadow: `0 0 0 ${n.controlOutlineWidth}px ${i}`,
              borderInlineEndWidth: `${n.controlLineWidth}px !important`,
              outline: 0,
            },
            [`&:hover ${l}-selector`]: {
              borderColor: a,
              borderInlineEndWidth: `${n.controlLineWidth}px !important`,
            },
          }),
      },
    };
  },
  yo = (e) => {
    const { componentCls: o } = e;
    return {
      [`${o}-selection-search-input`]: {
        margin: 0,
        padding: 0,
        background: "transparent",
        border: "none",
        outline: "none",
        appearance: "none",
        "&::-webkit-search-cancel-button": {
          display: "none",
          "-webkit-appearance": "none",
        },
      },
    };
  },
  So = (o) => {
    const { componentCls: n, inputPaddingHorizontalBase: t, iconCls: l } = o;
    return {
      [n]: e(e({}, W(o)), {
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        [`&:not(${n}-customize-input) ${n}-selector`]: e(e({}, go(o)), yo(o)),
        [`${n}-selection-item`]: e({ flex: 1, fontWeight: "normal" }, G),
        [`${n}-selection-placeholder`]: e(e({}, G), {
          flex: 1,
          color: o.colorTextPlaceholder,
          pointerEvents: "none",
        }),
        [`${n}-arrow`]: e(e({}, q()), {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: t,
          height: o.fontSizeIcon,
          marginTop: -o.fontSizeIcon / 2,
          color: o.colorTextQuaternary,
          fontSize: o.fontSizeIcon,
          lineHeight: 1,
          textAlign: "center",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          [l]: {
            verticalAlign: "top",
            transition: `transform ${o.motionDurationSlow}`,
            "> svg": { verticalAlign: "top" },
            [`&:not(${n}-suffix)`]: { pointerEvents: "auto" },
          },
          [`${n}-disabled &`]: { cursor: "not-allowed" },
          "> *:not(:last-child)": { marginInlineEnd: 8 },
        }),
        [`${n}-clear`]: {
          position: "absolute",
          top: "50%",
          insetInlineStart: "auto",
          insetInlineEnd: t,
          zIndex: 1,
          display: "inline-block",
          width: o.fontSizeIcon,
          height: o.fontSizeIcon,
          marginTop: -o.fontSizeIcon / 2,
          color: o.colorTextQuaternary,
          fontSize: o.fontSizeIcon,
          fontStyle: "normal",
          lineHeight: 1,
          textAlign: "center",
          textTransform: "none",
          background: o.colorBgContainer,
          cursor: "pointer",
          opacity: 0,
          transition: `color ${o.motionDurationMid} ease, opacity ${o.motionDurationSlow} ease`,
          textRendering: "auto",
          "&:before": { display: "block" },
          "&:hover": { color: o.colorTextTertiary },
        },
        "&:hover": { [`${n}-clear`]: { opacity: 1 } },
      }),
      [`${n}-has-feedback`]: {
        [`${n}-clear`]: { insetInlineEnd: t + o.fontSize + o.paddingXXS },
      },
    };
  },
  wo = (e) => {
    const { componentCls: o } = e;
    return [
      {
        [o]: {
          [`&-borderless ${o}-selector`]: {
            backgroundColor: "transparent !important",
            borderColor: "transparent !important",
            boxShadow: "none !important",
          },
          [`&${o}-in-form-item`]: { width: "100%" },
        },
      },
      So(e),
      ho(e),
      mo(e),
      so(e),
      { [`${o}-rtl`]: { direction: "rtl" } },
      bo(
        o,
        Q(e, {
          borderHoverColor: e.colorPrimaryHover,
          outlineColor: e.controlOutline,
        })
      ),
      bo(
        `${o}-status-error`,
        Q(e, {
          borderHoverColor: e.colorErrorHover,
          outlineColor: e.colorErrorOutline,
        }),
        !0
      ),
      bo(
        `${o}-status-warning`,
        Q(e, {
          borderHoverColor: e.colorWarningHover,
          outlineColor: e.colorWarningOutline,
        }),
        !0
      ),
      Z(e, { borderElCls: `${o}-selector`, focusElCls: `${o}-focused` }),
    ];
  },
  xo = J(
    "Select",
    (e, o) => {
      let { rootPrefixCls: n } = o;
      const t = Q(e, {
        rootPrefixCls: n,
        inputPaddingHorizontalBase: e.paddingSM - 1,
      });
      return [wo(t)];
    },
    (e) => ({ zIndexPopup: e.zIndexPopupBase + 50 })
  ),
  Co = () =>
    e(
      e(
        {},
        M(to(), [
          "inputIcon",
          "mode",
          "getInputElement",
          "getRawInputElement",
          "backfill",
        ])
      ),
      {
        value: ee([Array, Object, String, Number]),
        defaultValue: ee([Array, Object, String, Number]),
        notFoundContent: n.any,
        suffixIcon: n.any,
        itemIcon: n.any,
        size: oe(),
        mode: oe(),
        bordered: ne(!0),
        transitionName: String,
        choiceTransitionName: oe(""),
        popupClassName: String,
        dropdownClassName: String,
        placement: oe(),
        status: oe(),
        "onUpdate:value": te(),
      }
    ),
  $o = "SECRET_COMBOBOX_MODE_DO_NOT_USE",
  Io = o({
    compatConfig: { MODE: 3 },
    name: "ASelect",
    Option: ao,
    OptGroup: io,
    inheritAttrs: !1,
    props: F(Co(), { listHeight: 256, listItemHeight: 24 }),
    SECRET_COMBOBOX_MODE_DO_NOT_USE: $o,
    slots: Object,
    setup(o, n) {
      let { attrs: u, emit: s, slots: c, expose: d } = n;
      const p = l(),
        v = le(),
        m = ae.useInject(),
        f = t(() => ie(m.status, o.status)),
        h = t(() => {
          const { mode: e } = o;
          if ("combobox" !== e) return e === $o ? "combobox" : e;
        }),
        {
          prefixCls: g,
          direction: b,
          configProvider: y,
          renderEmpty: S,
          size: w,
          getPrefixCls: x,
          getPopupContainer: C,
          disabled: $,
          select: I,
        } = re("select", o),
        { compactSize: O, compactItemClassnames: F } = ue(g, b),
        E = t(() => O.value || w.value),
        P = se(),
        T = t(() => {
          var e;
          return null !== (e = $.value) && void 0 !== e ? e : P.value;
        }),
        [D, k] = xo(g),
        R = t(() => x()),
        A = t(() =>
          void 0 !== o.placement
            ? o.placement
            : "rtl" === b.value
            ? "bottomRight"
            : "bottomLeft"
        ),
        N = t(() => ce(R.value, de(A.value), o.transitionName)),
        V = t(() =>
          r(
            {
              [`${g.value}-lg`]: "large" === E.value,
              [`${g.value}-sm`]: "small" === E.value,
              [`${g.value}-rtl`]: "rtl" === b.value,
              [`${g.value}-borderless`]: !o.bordered,
              [`${g.value}-in-form-item`]: m.isFormItemInput,
            },
            pe(g.value, f.value, m.hasFeedback),
            F.value,
            k.value
          )
        ),
        B = function () {
          for (var e = arguments.length, o = new Array(e), n = 0; n < e; n++)
            o[n] = arguments[n];
          s("update:value", o[0]), s("change", ...o), v.onFieldChange();
        },
        z = (e) => {
          s("blur", e), v.onFieldBlur();
        };
      d({
        blur: () => {
          var e;
          null === (e = p.value) || void 0 === e || e.blur();
        },
        focus: () => {
          var e;
          null === (e = p.value) || void 0 === e || e.focus();
        },
        scrollTo: (e) => {
          var o;
          null === (o = p.value) || void 0 === o || o.scrollTo(e);
        },
      });
      const H = t(() => "multiple" === h.value || "tags" === h.value),
        L = t(() =>
          void 0 !== o.showArrow
            ? o.showArrow
            : o.loading || !(H.value || "combobox" === h.value)
        );
      return () => {
        var n, t, l, s;
        const {
            notFoundContent: d,
            listHeight: f = 256,
            listItemHeight: y = 24,
            popupClassName: w,
            dropdownClassName: x,
            virtual: $,
            dropdownMatchSelectWidth: O,
            id: F = v.id.value,
            placeholder: E = null === (n = c.placeholder) || void 0 === n
              ? void 0
              : n.call(c),
            showArrow: P,
          } = o,
          { hasFeedback: R, feedbackIcon: A } = m;
        let W;
        W =
          void 0 !== d
            ? d
            : c.notFoundContent
            ? c.notFoundContent()
            : "combobox" === h.value
            ? null
            : (null == S ? void 0 : S("Select")) ||
              a(ve, { componentName: "Select" }, null);
        const {
            suffixIcon: j,
            itemIcon: K,
            removeIcon: _,
            clearIcon: X,
          } = ro(
            e(e({}, o), {
              multiple: H.value,
              prefixCls: g.value,
              hasFeedback: R,
              feedbackIcon: A,
              showArrow: L.value,
            }),
            c
          ),
          G = M(o, [
            "prefixCls",
            "suffixIcon",
            "itemIcon",
            "removeIcon",
            "clearIcon",
            "size",
            "bordered",
            "status",
          ]),
          U = r(
            w || x,
            { [`${g.value}-dropdown-${b.value}`]: "rtl" === b.value },
            k.value
          );
        return D(
          a(
            lo,
            i(
              i(i({ ref: p, virtual: $, dropdownMatchSelectWidth: O }, G), u),
              {},
              {
                showSearch:
                  null !== (t = o.showSearch) && void 0 !== t
                    ? t
                    : null === (l = null == I ? void 0 : I.value) ||
                      void 0 === l
                    ? void 0
                    : l.showSearch,
                placeholder: E,
                listHeight: f,
                listItemHeight: y,
                mode: h.value,
                prefixCls: g.value,
                direction: b.value,
                inputIcon: j,
                menuItemSelectedIcon: K,
                removeIcon: _,
                clearIcon: X,
                notFoundContent: W,
                class: [V.value, u.class],
                getPopupContainer: null == C ? void 0 : C.value,
                dropdownClassName: U,
                onChange: B,
                onBlur: z,
                id: F,
                dropdownRender: G.dropdownRender || c.dropdownRender,
                transitionName: N.value,
                children:
                  null === (s = c.default) || void 0 === s ? void 0 : s.call(c),
                tagRender: o.tagRender || c.tagRender,
                optionLabelRender: c.optionLabel,
                maxTagPlaceholder: o.maxTagPlaceholder || c.maxTagPlaceholder,
                showArrow: R || P,
                disabled: T.value,
              }
            ),
            { option: c.option }
          )
        );
      };
    },
  });
Io.install = function (e) {
  return (
    e.component(Io.name, Io),
    e.component(Io.Option.displayName, Io.Option),
    e.component(Io.OptGroup.displayName, Io.OptGroup),
    e
  );
};
const Oo = Io.Option,
  Fo = Io.OptGroup;
export {
  je as B,
  Io as S,
  Oo as a,
  Fo as b,
  Ve as c,
  Ze as d,
  Le as e,
  xo as f,
  ro as g,
  Ee as h,
  Fe as i,
  Co as s,
  Be as t,
  Ke as u,
};

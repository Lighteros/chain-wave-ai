import {
  aw as e,
  c7 as t,
  as as n,
  aJ as i,
  aU as o,
  aS as r,
  r as a,
  c as l,
  gP as s,
  gI as p,
  eR as c,
  gJ as u,
  gQ as d,
  cl as g,
  cm as h,
  gR as m,
  aA as b,
  aT as v,
  aV as $,
  aW as C,
  gS as f,
  aX as x,
  gT as y,
  aY as S,
  gU as k,
  cc as I,
  b1 as P,
  gV as z,
  e8 as O,
  gW as w,
  d$ as j,
  e0 as B,
  e1 as T,
  d_ as M,
  e2 as N,
  eU as E,
  ba as D,
} from "./index-DPRREYlk.js";
import { L as A } from "./LeftOutlined-rFvNtfcP.js";
import { s as H, S as _ } from "./index-BPauqaGF.js";
import { u as R } from "./useBreakpoint-vSrZKufz.js";
import { P as K } from "./zh_CN-CAyhejr6.js";
var L = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z",
        },
      },
    ],
  },
  name: "double-left",
  theme: "outlined",
};
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      i.forEach(function (t) {
        J(e, t, n[t]);
      });
  }
  return e;
}
function J(e, t, n) {
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
var V = function (n, i) {
  var o = F({}, n, i.attrs);
  return e(t, F({}, o, { icon: L }), null);
};
(V.displayName = "DoubleLeftOutlined"), (V.inheritAttrs = !1);
var W = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z",
        },
      },
    ],
  },
  name: "double-right",
  theme: "outlined",
};
function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (i = i.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      i.forEach(function (t) {
        G(e, t, n[t]);
      });
  }
  return e;
}
function G(e, t, n) {
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
var q = function (n, i) {
  var o = X({}, n, i.attrs);
  return e(t, X({}, o, { icon: W }), null);
};
(q.displayName = "DoubleRightOutlined"), (q.inheritAttrs = !1);
const Q = n({
    name: "MiniSelect",
    compatConfig: { MODE: 3 },
    inheritAttrs: !1,
    props: H(),
    Option: _.Option,
    setup(t, n) {
      let { attrs: o, slots: r } = n;
      return () => {
        const n = i(i(i({}, t), { size: "small" }), o);
        return e(_, n, r);
      };
    },
  }),
  U = n({
    name: "MiddleSelect",
    inheritAttrs: !1,
    props: H(),
    Option: _.Option,
    setup(t, n) {
      let { attrs: o, slots: r } = n;
      return () => {
        const n = i(i(i({}, t), { size: "middle" }), o);
        return e(_, n, r);
      };
    },
  }),
  Y = n({
    compatConfig: { MODE: 3 },
    name: "Pager",
    inheritAttrs: !1,
    props: {
      rootPrefixCls: String,
      page: Number,
      active: { type: Boolean, default: void 0 },
      last: { type: Boolean, default: void 0 },
      locale: o.object,
      showTitle: { type: Boolean, default: void 0 },
      itemRender: { type: Function, default: () => {} },
      onClick: { type: Function },
      onKeypress: { type: Function },
    },
    eimt: ["click", "keypress"],
    setup(t, n) {
      let { emit: i, attrs: o } = n;
      const a = () => {
          i("click", t.page);
        },
        l = (e) => {
          i("keypress", e, a, t.page);
        };
      return () => {
        const { showTitle: n, page: i, itemRender: s } = t,
          { class: p, style: c } = o,
          u = `${t.rootPrefixCls}-item`,
          d = r(
            u,
            `${u}-${t.page}`,
            { [`${u}-active`]: t.active, [`${u}-disabled`]: !t.page },
            p
          );
        return e(
          "li",
          {
            onClick: a,
            onKeypress: l,
            title: n ? String(i) : null,
            tabindex: "0",
            class: d,
            style: c,
          },
          [
            s({
              page: i,
              type: "page",
              originalElement: e("a", { rel: "nofollow" }, [i]),
            }),
          ]
        );
      };
    },
  }),
  Z = 13,
  ee = 38,
  te = 40,
  ne = n({
    compatConfig: { MODE: 3 },
    props: {
      disabled: { type: Boolean, default: void 0 },
      changeSize: Function,
      quickGo: Function,
      selectComponentClass: o.any,
      current: Number,
      pageSizeOptions: o.array.def(["10", "20", "50", "100"]),
      pageSize: Number,
      buildOptionText: Function,
      locale: o.object,
      rootPrefixCls: String,
      selectPrefixCls: String,
      goButton: o.any,
    },
    setup(t) {
      const n = a(""),
        i = l(() => (!n.value || isNaN(n.value) ? void 0 : Number(n.value))),
        o = (e) => `${e.value} ${t.locale.items_per_page}`,
        r = (e) => {
          const { value: t } = e.target;
          n.value !== t && (n.value = t);
        },
        p = (e) => {
          const { goButton: o, quickGo: r, rootPrefixCls: a } = t;
          o ||
            "" === n.value ||
            ((e.relatedTarget &&
              (e.relatedTarget.className.indexOf(`${a}-item-link`) >= 0 ||
                e.relatedTarget.className.indexOf(`${a}-item`) >= 0)) ||
              r(i.value),
            (n.value = ""));
        },
        c = (e) => {
          "" !== n.value &&
            ((e.keyCode !== Z && "click" !== e.type) ||
              (t.quickGo(i.value), (n.value = "")));
        },
        u = l(() => {
          const { pageSize: e, pageSizeOptions: n } = t;
          return n.some((t) => t.toString() === e.toString())
            ? n
            : n
                .concat([e.toString()])
                .sort(
                  (e, t) =>
                    (isNaN(Number(e)) ? 0 : Number(e)) -
                    (isNaN(Number(t)) ? 0 : Number(t))
                );
        });
      return () => {
        const {
            rootPrefixCls: i,
            locale: a,
            changeSize: l,
            quickGo: d,
            goButton: g,
            selectComponentClass: h,
            selectPrefixCls: m,
            pageSize: b,
            disabled: v,
          } = t,
          $ = `${i}-options`;
        let C = null,
          f = null,
          x = null;
        if (!l && !d) return null;
        if (l && h) {
          const n = t.buildOptionText || o,
            i = u.value.map((t, i) =>
              e(
                h.Option,
                { key: i, value: t },
                { default: () => [n({ value: t })] }
              )
            );
          C = e(
            h,
            {
              disabled: v,
              prefixCls: m,
              showSearch: !1,
              class: `${$}-size-changer`,
              optionLabelProp: "children",
              value: (b || u.value[0]).toString(),
              onChange: (e) => l(Number(e)),
              getPopupContainer: (e) => e.parentNode,
            },
            { default: () => [i] }
          );
        }
        return (
          d &&
            (g &&
              (x =
                "boolean" == typeof g
                  ? e(
                      "button",
                      {
                        type: "button",
                        onClick: c,
                        onKeyup: c,
                        disabled: v,
                        class: `${$}-quick-jumper-button`,
                      },
                      [a.jump_to_confirm]
                    )
                  : e("span", { onClick: c, onKeyup: c }, [g])),
            (f = e("div", { class: `${$}-quick-jumper` }, [
              a.jump_to,
              e(
                s,
                {
                  disabled: v,
                  type: "text",
                  value: n.value,
                  onInput: r,
                  onChange: r,
                  onKeyup: c,
                  onBlur: p,
                },
                null
              ),
              a.page,
              x,
            ]))),
          e("li", { class: `${$}` }, [C, f])
        );
      };
    },
  });
var ie = function (e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
        (n[i[o]] = e[i[o]]);
  }
  return n;
};
function oe(e, t, n) {
  const i = void 0 === e ? t.statePageSize : e;
  return Math.floor((n.total - 1) / i) + 1;
}
const re = n({
    compatConfig: { MODE: 3 },
    name: "Pagination",
    mixins: [p],
    inheritAttrs: !1,
    props: {
      disabled: { type: Boolean, default: void 0 },
      prefixCls: o.string.def("rc-pagination"),
      selectPrefixCls: o.string.def("rc-select"),
      current: Number,
      defaultCurrent: o.number.def(1),
      total: o.number.def(0),
      pageSize: Number,
      defaultPageSize: o.number.def(10),
      hideOnSinglePage: { type: Boolean, default: !1 },
      showSizeChanger: { type: Boolean, default: void 0 },
      showLessItems: { type: Boolean, default: !1 },
      selectComponentClass: o.any,
      showPrevNextJumpers: { type: Boolean, default: !0 },
      showQuickJumper: o.oneOfType([o.looseBool, o.object]).def(!1),
      showTitle: { type: Boolean, default: !0 },
      pageSizeOptions: o.arrayOf(o.oneOfType([o.number, o.string])),
      buildOptionText: Function,
      showTotal: Function,
      simple: { type: Boolean, default: void 0 },
      locale: o.object.def(K),
      itemRender: o.func.def(function (e) {
        let { originalElement: t } = e;
        return t;
      }),
      prevIcon: o.any,
      nextIcon: o.any,
      jumpPrevIcon: o.any,
      jumpNextIcon: o.any,
      totalBoundaryShowSizeChanger: o.number.def(50),
    },
    data() {
      const e = this.$props;
      let t = c([this.current, this.defaultCurrent]);
      const n = c([this.pageSize, this.defaultPageSize]);
      return (
        (t = Math.min(t, oe(n, void 0, e))),
        { stateCurrent: t, stateCurrentInputValue: t, statePageSize: n }
      );
    },
    watch: {
      current(e) {
        this.setState({ stateCurrent: e, stateCurrentInputValue: e });
      },
      pageSize(e) {
        const t = {};
        let n = this.stateCurrent;
        const i = oe(e, this.$data, this.$props);
        (n = n > i ? i : n),
          u(this, "current") ||
            ((t.stateCurrent = n), (t.stateCurrentInputValue = n)),
          (t.statePageSize = e),
          this.setState(t);
      },
      stateCurrent(e, t) {
        this.$nextTick(() => {
          if (this.$refs.paginationNode) {
            const e = this.$refs.paginationNode.querySelector(
              `.${this.prefixCls}-item-${t}`
            );
            e && document.activeElement === e && e.blur();
          }
        });
      },
      total() {
        const e = {},
          t = oe(this.pageSize, this.$data, this.$props);
        if (u(this, "current")) {
          const n = Math.min(this.current, t);
          (e.stateCurrent = n), (e.stateCurrentInputValue = n);
        } else {
          let n = this.stateCurrent;
          (n = 0 === n && t > 0 ? 1 : Math.min(this.stateCurrent, t)),
            (e.stateCurrent = n);
        }
        this.setState(e);
      },
    },
    methods: {
      getJumpPrevPage() {
        return Math.max(1, this.stateCurrent - (this.showLessItems ? 3 : 5));
      },
      getJumpNextPage() {
        return Math.min(
          oe(void 0, this.$data, this.$props),
          this.stateCurrent + (this.showLessItems ? 3 : 5)
        );
      },
      getItemIcon(t, n) {
        const { prefixCls: i } = this.$props;
        return (
          d(this, t, this.$props) ||
          e(
            "button",
            { type: "button", "aria-label": n, class: `${i}-item-link` },
            null
          )
        );
      },
      getValidValue(e) {
        const t = e.target.value,
          n = oe(void 0, this.$data, this.$props),
          { stateCurrentInputValue: i } = this.$data;
        let o;
        return (
          (o = "" === t ? t : isNaN(Number(t)) ? i : t >= n ? n : Number(t)), o
        );
      },
      isValid(e) {
        return (
          "number" == typeof (t = e) &&
          isFinite(t) &&
          Math.floor(t) === t &&
          e !== this.stateCurrent
        );
        var t;
      },
      shouldDisplayQuickJumper() {
        const { showQuickJumper: e, pageSize: t, total: n } = this.$props;
        return !(n <= t) && e;
      },
      handleKeyDown(e) {
        (e.keyCode !== ee && e.keyCode !== te) || e.preventDefault();
      },
      handleKeyUp(e) {
        const t = this.getValidValue(e);
        t !== this.stateCurrentInputValue &&
          this.setState({ stateCurrentInputValue: t }),
          e.keyCode === Z
            ? this.handleChange(t)
            : e.keyCode === ee
            ? this.handleChange(t - 1)
            : e.keyCode === te && this.handleChange(t + 1);
      },
      changePageSize(e) {
        let t = this.stateCurrent;
        const n = t,
          i = oe(e, this.$data, this.$props);
        (t = t > i ? i : t),
          0 === i && (t = this.stateCurrent),
          "number" == typeof e &&
            (u(this, "pageSize") || this.setState({ statePageSize: e }),
            u(this, "current") ||
              this.setState({ stateCurrent: t, stateCurrentInputValue: t })),
          this.__emit("update:pageSize", e),
          t !== n && this.__emit("update:current", t),
          this.__emit("showSizeChange", t, e),
          this.__emit("change", t, e);
      },
      handleChange(e) {
        const { disabled: t } = this.$props;
        let n = e;
        if (this.isValid(n) && !t) {
          const e = oe(void 0, this.$data, this.$props);
          return (
            n > e ? (n = e) : n < 1 && (n = 1),
            u(this, "current") ||
              this.setState({ stateCurrent: n, stateCurrentInputValue: n }),
            this.__emit("update:current", n),
            this.__emit("change", n, this.statePageSize),
            n
          );
        }
        return this.stateCurrent;
      },
      prev() {
        this.hasPrev() && this.handleChange(this.stateCurrent - 1);
      },
      next() {
        this.hasNext() && this.handleChange(this.stateCurrent + 1);
      },
      jumpPrev() {
        this.handleChange(this.getJumpPrevPage());
      },
      jumpNext() {
        this.handleChange(this.getJumpNextPage());
      },
      hasPrev() {
        return this.stateCurrent > 1;
      },
      hasNext() {
        return this.stateCurrent < oe(void 0, this.$data, this.$props);
      },
      getShowSizeChanger() {
        const {
          showSizeChanger: e,
          total: t,
          totalBoundaryShowSizeChanger: n,
        } = this.$props;
        return void 0 !== e ? e : t > n;
      },
      runIfEnter(e, t) {
        if ("Enter" === e.key || 13 === e.charCode) {
          e.preventDefault();
          for (
            var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2;
            o < n;
            o++
          )
            i[o - 2] = arguments[o];
          t(...i);
        }
      },
      runIfEnterPrev(e) {
        this.runIfEnter(e, this.prev);
      },
      runIfEnterNext(e) {
        this.runIfEnter(e, this.next);
      },
      runIfEnterJumpPrev(e) {
        this.runIfEnter(e, this.jumpPrev);
      },
      runIfEnterJumpNext(e) {
        this.runIfEnter(e, this.jumpNext);
      },
      handleGoTO(e) {
        (e.keyCode !== Z && "click" !== e.type) ||
          this.handleChange(this.stateCurrentInputValue);
      },
      renderPrev(e) {
        const { itemRender: t } = this.$props,
          n = t({
            page: e,
            type: "prev",
            originalElement: this.getItemIcon("prevIcon", "prev page"),
          }),
          i = !this.hasPrev();
        return g(n) ? h(n, i ? { disabled: i } : {}) : n;
      },
      renderNext(e) {
        const { itemRender: t } = this.$props,
          n = t({
            page: e,
            type: "next",
            originalElement: this.getItemIcon("nextIcon", "next page"),
          }),
          i = !this.hasNext();
        return g(n) ? h(n, i ? { disabled: i } : {}) : n;
      },
    },
    render() {
      const {
          prefixCls: t,
          disabled: n,
          hideOnSinglePage: i,
          total: o,
          locale: a,
          showQuickJumper: l,
          showLessItems: p,
          showTitle: c,
          showTotal: u,
          simple: d,
          itemRender: g,
          showPrevNextJumpers: h,
          jumpPrevIcon: $,
          jumpNextIcon: C,
          selectComponentClass: f,
          selectPrefixCls: x,
          pageSizeOptions: y,
        } = this.$props,
        { stateCurrent: S, statePageSize: k } = this,
        I = m(this.$attrs).extraAttrs,
        { class: P } = I,
        z = ie(I, ["class"]);
      if (!0 === i && this.total <= k) return null;
      const O = oe(void 0, this.$data, this.$props),
        w = [];
      let j = null,
        B = null,
        T = null,
        M = null,
        N = null;
      const E = l && l.goButton,
        D = p ? 1 : 2,
        A = S - 1 > 0 ? S - 1 : 0,
        H = S + 1 < O ? S + 1 : O,
        _ = this.hasPrev(),
        R = this.hasNext();
      if (d)
        return (
          E &&
            ((N =
              "boolean" == typeof E
                ? e(
                    "button",
                    {
                      type: "button",
                      onClick: this.handleGoTO,
                      onKeyup: this.handleGoTO,
                    },
                    [a.jump_to_confirm]
                  )
                : e(
                    "span",
                    { onClick: this.handleGoTO, onKeyup: this.handleGoTO },
                    [E]
                  )),
            (N = e(
              "li",
              {
                title: c ? `${a.jump_to}${S}/${O}` : null,
                class: `${t}-simple-pager`,
              },
              [N]
            ))),
          e(
            "ul",
            v({ class: r(`${t} ${t}-simple`, { [`${t}-disabled`]: n }, P) }, z),
            [
              e(
                "li",
                {
                  title: c ? a.prev_page : null,
                  onClick: this.prev,
                  tabindex: _ ? 0 : null,
                  onKeypress: this.runIfEnterPrev,
                  class: r(`${t}-prev`, { [`${t}-disabled`]: !_ }),
                  "aria-disabled": !_,
                },
                [this.renderPrev(A)]
              ),
              e(
                "li",
                { title: c ? `${S}/${O}` : null, class: `${t}-simple-pager` },
                [
                  e(
                    s,
                    {
                      type: "text",
                      value: this.stateCurrentInputValue,
                      disabled: n,
                      onKeydown: this.handleKeyDown,
                      onKeyup: this.handleKeyUp,
                      onInput: this.handleKeyUp,
                      onChange: this.handleKeyUp,
                      size: "3",
                    },
                    null
                  ),
                  e("span", { class: `${t}-slash` }, [b("／")]),
                  O,
                ]
              ),
              e(
                "li",
                {
                  title: c ? a.next_page : null,
                  onClick: this.next,
                  tabindex: R ? 0 : null,
                  onKeypress: this.runIfEnterNext,
                  class: r(`${t}-next`, { [`${t}-disabled`]: !R }),
                  "aria-disabled": !R,
                },
                [this.renderNext(H)]
              ),
              N,
            ]
          )
        );
      if (O <= 3 + 2 * D) {
        const n = {
          locale: a,
          rootPrefixCls: t,
          showTitle: c,
          itemRender: g,
          onClick: this.handleChange,
          onKeypress: this.runIfEnter,
        };
        O ||
          w.push(
            e(
              Y,
              v(
                v({}, n),
                {},
                { key: "noPager", page: 1, class: `${t}-item-disabled` }
              ),
              null
            )
          );
        for (let t = 1; t <= O; t += 1) {
          const i = S === t;
          w.push(e(Y, v(v({}, n), {}, { key: t, page: t, active: i }), null));
        }
      } else {
        const n = p ? a.prev_3 : a.prev_5,
          i = p ? a.next_3 : a.next_5;
        h &&
          ((j = e(
            "li",
            {
              title: this.showTitle ? n : null,
              key: "prev",
              onClick: this.jumpPrev,
              tabindex: "0",
              onKeypress: this.runIfEnterJumpPrev,
              class: r(`${t}-jump-prev`, {
                [`${t}-jump-prev-custom-icon`]: !!$,
              }),
            },
            [
              g({
                page: this.getJumpPrevPage(),
                type: "jump-prev",
                originalElement: this.getItemIcon("jumpPrevIcon", "prev page"),
              }),
            ]
          )),
          (B = e(
            "li",
            {
              title: this.showTitle ? i : null,
              key: "next",
              tabindex: "0",
              onClick: this.jumpNext,
              onKeypress: this.runIfEnterJumpNext,
              class: r(`${t}-jump-next`, {
                [`${t}-jump-next-custom-icon`]: !!C,
              }),
            },
            [
              g({
                page: this.getJumpNextPage(),
                type: "jump-next",
                originalElement: this.getItemIcon("jumpNextIcon", "next page"),
              }),
            ]
          ))),
          (M = e(
            Y,
            {
              locale: a,
              last: !0,
              rootPrefixCls: t,
              onClick: this.handleChange,
              onKeypress: this.runIfEnter,
              key: O,
              page: O,
              active: !1,
              showTitle: c,
              itemRender: g,
            },
            null
          )),
          (T = e(
            Y,
            {
              locale: a,
              rootPrefixCls: t,
              onClick: this.handleChange,
              onKeypress: this.runIfEnter,
              key: 1,
              page: 1,
              active: !1,
              showTitle: c,
              itemRender: g,
            },
            null
          ));
        let o = Math.max(1, S - D),
          l = Math.min(S + D, O);
        S - 1 <= D && (l = 1 + 2 * D), O - S <= D && (o = O - 2 * D);
        for (let r = o; r <= l; r += 1) {
          const n = S === r;
          w.push(
            e(
              Y,
              {
                locale: a,
                rootPrefixCls: t,
                onClick: this.handleChange,
                onKeypress: this.runIfEnter,
                key: r,
                page: r,
                active: n,
                showTitle: c,
                itemRender: g,
              },
              null
            )
          );
        }
        S - 1 >= 2 * D &&
          3 !== S &&
          ((w[0] = e(
            Y,
            {
              locale: a,
              rootPrefixCls: t,
              onClick: this.handleChange,
              onKeypress: this.runIfEnter,
              key: o,
              page: o,
              class: `${t}-item-after-jump-prev`,
              active: !1,
              showTitle: this.showTitle,
              itemRender: g,
            },
            null
          )),
          w.unshift(j)),
          O - S >= 2 * D &&
            S !== O - 2 &&
            ((w[w.length - 1] = e(
              Y,
              {
                locale: a,
                rootPrefixCls: t,
                onClick: this.handleChange,
                onKeypress: this.runIfEnter,
                key: l,
                page: l,
                class: `${t}-item-before-jump-next`,
                active: !1,
                showTitle: this.showTitle,
                itemRender: g,
              },
              null
            )),
            w.push(B)),
          1 !== o && w.unshift(T),
          l !== O && w.push(M);
      }
      let K = null;
      u &&
        (K = e("li", { class: `${t}-total-text` }, [
          u(o, [0 === o ? 0 : (S - 1) * k + 1, S * k > o ? o : S * k]),
        ]));
      const L = !_ || !O,
        F = !R || !O,
        J = this.buildOptionText || this.$slots.buildOptionText;
      return e(
        "ul",
        v(
          v({ unselectable: "on", ref: "paginationNode" }, z),
          {},
          { class: r({ [`${t}`]: !0, [`${t}-disabled`]: n }, P) }
        ),
        [
          K,
          e(
            "li",
            {
              title: c ? a.prev_page : null,
              onClick: this.prev,
              tabindex: L ? null : 0,
              onKeypress: this.runIfEnterPrev,
              class: r(`${t}-prev`, { [`${t}-disabled`]: L }),
              "aria-disabled": L,
            },
            [this.renderPrev(A)]
          ),
          w,
          e(
            "li",
            {
              title: c ? a.next_page : null,
              onClick: this.next,
              tabindex: F ? null : 0,
              onKeypress: this.runIfEnterNext,
              class: r(`${t}-next`, { [`${t}-disabled`]: F }),
              "aria-disabled": F,
            },
            [this.renderNext(H)]
          ),
          e(
            ne,
            {
              disabled: n,
              locale: a,
              rootPrefixCls: t,
              selectComponentClass: f,
              selectPrefixCls: x,
              changeSize: this.getShowSizeChanger()
                ? this.changePageSize
                : null,
              current: S,
              pageSize: k,
              pageSizeOptions: y,
              buildOptionText: J || null,
              quickGo: this.shouldDisplayQuickJumper()
                ? this.handleChange
                : null,
              goButton: E,
            },
            null
          ),
        ]
      );
    },
  }),
  ae = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-disabled`]: {
        "&, &:hover": {
          cursor: "not-allowed",
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: "not-allowed",
          },
        },
        "&:focus-visible": {
          cursor: "not-allowed",
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: "not-allowed",
          },
        },
      },
      [`&${t}-disabled`]: {
        cursor: "not-allowed",
        [`&${t}-mini`]: {
          [`\n          &:hover ${t}-item:not(${t}-item-active),\n          &:active ${t}-item:not(${t}-item-active),\n          &:hover ${t}-item-link,\n          &:active ${t}-item-link\n        `]:
            { backgroundColor: "transparent" },
        },
        [`${t}-item`]: {
          cursor: "not-allowed",
          "&:hover, &:active": { backgroundColor: "transparent" },
          a: {
            color: e.colorTextDisabled,
            backgroundColor: "transparent",
            border: "none",
            cursor: "not-allowed",
          },
          "&-active": {
            borderColor: e.colorBorder,
            backgroundColor: e.paginationItemDisabledBgActive,
            "&:hover, &:active": {
              backgroundColor: e.paginationItemDisabledBgActive,
            },
            a: { color: e.paginationItemDisabledColorActive },
          },
        },
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: "not-allowed",
          "&:hover, &:active": { backgroundColor: "transparent" },
          [`${t}-simple&`]: {
            backgroundColor: "transparent",
            "&:hover, &:active": { backgroundColor: "transparent" },
          },
        },
        [`${t}-simple-pager`]: { color: e.colorTextDisabled },
        [`${t}-jump-prev, ${t}-jump-next`]: {
          [`${t}-item-link-icon`]: { opacity: 0 },
          [`${t}-item-ellipsis`]: { opacity: 1 },
        },
      },
      [`&${t}-simple`]: {
        [`${t}-prev, ${t}-next`]: {
          [`&${t}-disabled ${t}-item-link`]: {
            "&:hover, &:active": { backgroundColor: "transparent" },
          },
        },
      },
    };
  },
  le = (e) => {
    const { componentCls: t } = e;
    return {
      [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`,
      },
      [`&${t}-mini ${t}-item`]: {
        minWidth: e.paginationItemSizeSM,
        height: e.paginationItemSizeSM,
        margin: 0,
        lineHeight: e.paginationItemSizeSM - 2 + "px",
      },
      [`&${t}-mini ${t}-item:not(${t}-item-active)`]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        "&:hover": { backgroundColor: e.colorBgTextHover },
        "&:active": { backgroundColor: e.colorBgTextActive },
      },
      [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
        minWidth: e.paginationItemSizeSM,
        height: e.paginationItemSizeSM,
        margin: 0,
        lineHeight: `${e.paginationItemSizeSM}px`,
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover ${t}-item-link`]: {
          backgroundColor: "transparent",
        },
      },
      [`\n    &${t}-mini ${t}-prev ${t}-item-link,\n    &${t}-mini ${t}-next ${t}-item-link\n    `]:
        {
          backgroundColor: "transparent",
          borderColor: "transparent",
          "&::after": {
            height: e.paginationItemSizeSM,
            lineHeight: `${e.paginationItemSizeSM}px`,
          },
        },
      [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
        height: e.paginationItemSizeSM,
        marginInlineEnd: 0,
        lineHeight: `${e.paginationItemSizeSM}px`,
      },
      [`&${t}-mini ${t}-options`]: {
        marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
        "&-size-changer": { top: e.paginationMiniOptionsSizeChangerTop },
        "&-quick-jumper": {
          height: e.paginationItemSizeSM,
          lineHeight: `${e.paginationItemSizeSM}px`,
          input: i(i({}, y(e)), {
            width: e.paginationMiniQuickJumperInputWidth,
            height: e.controlHeightSM,
          }),
        },
      },
    };
  },
  se = (e) => {
    const { componentCls: t } = e;
    return {
      [`\n    &${t}-simple ${t}-prev,\n    &${t}-simple ${t}-next\n    `]: {
        height: e.paginationItemSizeSM,
        lineHeight: `${e.paginationItemSizeSM}px`,
        verticalAlign: "top",
        [`${t}-item-link`]: {
          height: e.paginationItemSizeSM,
          backgroundColor: "transparent",
          border: 0,
          "&:hover": { backgroundColor: e.colorBgTextHover },
          "&:active": { backgroundColor: e.colorBgTextActive },
          "&::after": {
            height: e.paginationItemSizeSM,
            lineHeight: `${e.paginationItemSizeSM}px`,
          },
        },
      },
      [`&${t}-simple ${t}-simple-pager`]: {
        display: "inline-block",
        height: e.paginationItemSizeSM,
        marginInlineEnd: e.marginXS,
        input: {
          boxSizing: "border-box",
          height: "100%",
          marginInlineEnd: e.marginXS,
          padding: `0 ${e.paginationItemPaddingInline}px`,
          textAlign: "center",
          backgroundColor: e.paginationItemInputBg,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          outline: "none",
          transition: `border-color ${e.motionDurationMid}`,
          color: "inherit",
          "&:hover": { borderColor: e.colorPrimary },
          "&:focus": {
            borderColor: e.colorPrimaryHover,
            boxShadow: `${e.inputOutlineOffset}px 0 ${e.controlOutlineWidth}px ${e.controlOutline}`,
          },
          "&[disabled]": {
            color: e.colorTextDisabled,
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            cursor: "not-allowed",
          },
        },
      },
    };
  },
  pe = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-jump-prev, ${t}-jump-next`]: {
        outline: 0,
        [`${t}-item-container`]: {
          position: "relative",
          [`${t}-item-link-icon`]: {
            color: e.colorPrimary,
            fontSize: e.fontSizeSM,
            opacity: 0,
            transition: `all ${e.motionDurationMid}`,
            "&-svg": {
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              margin: "auto",
            },
          },
          [`${t}-item-ellipsis`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            display: "block",
            margin: "auto",
            color: e.colorTextDisabled,
            fontFamily: "Arial, Helvetica, sans-serif",
            letterSpacing: e.paginationEllipsisLetterSpacing,
            textAlign: "center",
            textIndent: e.paginationEllipsisTextIndent,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`,
          },
        },
        "&:hover": {
          [`${t}-item-link-icon`]: { opacity: 1 },
          [`${t}-item-ellipsis`]: { opacity: 0 },
        },
        "&:focus-visible": i(
          {
            [`${t}-item-link-icon`]: { opacity: 1 },
            [`${t}-item-ellipsis`]: { opacity: 0 },
          },
          S(e)
        ),
      },
      [`\n    ${t}-prev,\n    ${t}-jump-prev,\n    ${t}-jump-next\n    `]: {
        marginInlineEnd: e.marginXS,
      },
      [`\n    ${t}-prev,\n    ${t}-next,\n    ${t}-jump-prev,\n    ${t}-jump-next\n    `]:
        {
          display: "inline-block",
          minWidth: e.paginationItemSize,
          height: e.paginationItemSize,
          color: e.colorText,
          fontFamily: e.paginationFontFamily,
          lineHeight: `${e.paginationItemSize}px`,
          textAlign: "center",
          verticalAlign: "middle",
          listStyle: "none",
          borderRadius: e.borderRadius,
          cursor: "pointer",
          transition: `all ${e.motionDurationMid}`,
        },
      [`${t}-prev, ${t}-next`]: {
        fontFamily: "Arial, Helvetica, sans-serif",
        outline: 0,
        button: { color: e.colorText, cursor: "pointer", userSelect: "none" },
        [`${t}-item-link`]: {
          display: "block",
          width: "100%",
          height: "100%",
          padding: 0,
          fontSize: e.fontSizeSM,
          textAlign: "center",
          backgroundColor: "transparent",
          border: `${e.lineWidth}px ${e.lineType} transparent`,
          borderRadius: e.borderRadius,
          outline: "none",
          transition: `all ${e.motionDurationMid}`,
        },
        [`&:focus-visible ${t}-item-link`]: i({}, S(e)),
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover`]: {
          [`${t}-item-link`]: { backgroundColor: "transparent" },
        },
      },
      [`${t}-slash`]: {
        marginInlineEnd: e.paginationSlashMarginInlineEnd,
        marginInlineStart: e.paginationSlashMarginInlineStart,
      },
      [`${t}-options`]: {
        display: "inline-block",
        marginInlineStart: e.margin,
        verticalAlign: "middle",
        "&-size-changer.-select": { display: "inline-block", width: "auto" },
        "&-quick-jumper": {
          display: "inline-block",
          height: e.controlHeight,
          marginInlineStart: e.marginXS,
          lineHeight: `${e.controlHeight}px`,
          verticalAlign: "top",
          input: i(i({}, k(e)), {
            width: 1.25 * e.controlHeightLG,
            height: e.controlHeight,
            boxSizing: "border-box",
            margin: 0,
            marginInlineStart: e.marginXS,
            marginInlineEnd: e.marginXS,
          }),
        },
      },
    };
  },
  ce = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-item`]: i(
        i(
          {
            display: "inline-block",
            minWidth: e.paginationItemSize,
            height: e.paginationItemSize,
            marginInlineEnd: e.marginXS,
            fontFamily: e.paginationFontFamily,
            lineHeight: e.paginationItemSize - 2 + "px",
            textAlign: "center",
            verticalAlign: "middle",
            listStyle: "none",
            backgroundColor: "transparent",
            border: `${e.lineWidth}px ${e.lineType} transparent`,
            borderRadius: e.borderRadius,
            outline: 0,
            cursor: "pointer",
            userSelect: "none",
            a: {
              display: "block",
              padding: `0 ${e.paginationItemPaddingInline}px`,
              color: e.colorText,
              transition: "none",
              "&:hover": { textDecoration: "none" },
            },
            [`&:not(${t}-item-active)`]: {
              "&:hover": {
                transition: `all ${e.motionDurationMid}`,
                backgroundColor: e.colorBgTextHover,
              },
              "&:active": { backgroundColor: e.colorBgTextActive },
            },
          },
          I(e)
        ),
        {
          "&-active": {
            fontWeight: e.paginationFontWeightActive,
            backgroundColor: e.paginationItemBgActive,
            borderColor: e.colorPrimary,
            a: { color: e.colorPrimary },
            "&:hover": { borderColor: e.colorPrimaryHover },
            "&:hover a": { color: e.colorPrimaryHover },
          },
        }
      ),
    };
  },
  ue = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: i(
        i(
          i(
            i(
              i(
                i(
                  i(i({}, x(e)), {
                    "ul, ol": { margin: 0, padding: 0, listStyle: "none" },
                    "&::after": {
                      display: "block",
                      clear: "both",
                      height: 0,
                      overflow: "hidden",
                      visibility: "hidden",
                      content: '""',
                    },
                    [`${t}-total-text`]: {
                      display: "inline-block",
                      height: e.paginationItemSize,
                      marginInlineEnd: e.marginXS,
                      lineHeight: e.paginationItemSize - 2 + "px",
                      verticalAlign: "middle",
                    },
                  }),
                  ce(e)
                ),
                pe(e)
              ),
              se(e)
            ),
            le(e)
          ),
          ae(e)
        ),
        {
          [`@media only screen and (max-width: ${e.screenLG}px)`]: {
            [`${t}-item`]: {
              "&-after-jump-prev, &-before-jump-next": { display: "none" },
            },
          },
          [`@media only screen and (max-width: ${e.screenSM}px)`]: {
            [`${t}-options`]: { display: "none" },
          },
        }
      ),
      [`&${e.componentCls}-rtl`]: { direction: "rtl" },
    };
  },
  de = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}${t}-disabled`]: {
        "&, &:hover": { [`${t}-item-link`]: { borderColor: e.colorBorder } },
        "&:focus-visible": {
          [`${t}-item-link`]: { borderColor: e.colorBorder },
        },
        [`${t}-item, ${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          [`&:hover:not(${t}-item-active)`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            a: { color: e.colorTextDisabled },
          },
          [`&${t}-item-active`]: {
            backgroundColor: e.paginationItemDisabledBgActive,
          },
        },
        [`${t}-prev, ${t}-next`]: {
          "&:hover button": {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            color: e.colorTextDisabled,
          },
          [`${t}-item-link`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
          },
        },
      },
      [t]: {
        [`${t}-prev, ${t}-next`]: {
          "&:hover button": {
            borderColor: e.colorPrimaryHover,
            backgroundColor: e.paginationItemBg,
          },
          [`${t}-item-link`]: {
            backgroundColor: e.paginationItemLinkBg,
            borderColor: e.colorBorder,
          },
          [`&:hover ${t}-item-link`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.paginationItemBg,
            color: e.colorPrimary,
          },
          [`&${t}-disabled`]: {
            [`${t}-item-link`]: {
              borderColor: e.colorBorder,
              color: e.colorTextDisabled,
            },
          },
        },
        [`${t}-item`]: {
          backgroundColor: e.paginationItemBg,
          border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
          [`&:hover:not(${t}-item-active)`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.paginationItemBg,
            a: { color: e.colorPrimary },
          },
          "&-active": { borderColor: e.colorPrimary },
        },
      },
    };
  },
  ge = $("Pagination", (e) => {
    const t = C(
      e,
      {
        paginationItemSize: e.controlHeight,
        paginationFontFamily: e.fontFamily,
        paginationItemBg: e.colorBgContainer,
        paginationItemBgActive: e.colorBgContainer,
        paginationFontWeightActive: e.fontWeightStrong,
        paginationItemSizeSM: e.controlHeightSM,
        paginationItemInputBg: e.colorBgContainer,
        paginationMiniOptionsSizeChangerTop: 0,
        paginationItemDisabledBgActive: e.controlItemBgActiveDisabled,
        paginationItemDisabledColorActive: e.colorTextDisabled,
        paginationItemLinkBg: e.colorBgContainer,
        inputOutlineOffset: "0 0",
        paginationMiniOptionsMarginInlineStart: e.marginXXS / 2,
        paginationMiniQuickJumperInputWidth: 1.1 * e.controlHeightLG,
        paginationItemPaddingInline: 1.5 * e.marginXXS,
        paginationEllipsisLetterSpacing: e.marginXXS / 2,
        paginationSlashMarginInlineStart: e.marginXXS,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: "0.13em",
      },
      f(e)
    );
    return [ue(t), e.wireframe && de(t)];
  });
var he = function (e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      t.indexOf(i[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[o]) &&
        (n[i[o]] = e[i[o]]);
  }
  return n;
};
const me = n({
    compatConfig: { MODE: 3 },
    name: "APagination",
    inheritAttrs: !1,
    props: {
      total: Number,
      defaultCurrent: Number,
      disabled: j(),
      current: Number,
      defaultPageSize: Number,
      pageSize: Number,
      hideOnSinglePage: j(),
      showSizeChanger: j(),
      pageSizeOptions: B(),
      buildOptionText: T(),
      showQuickJumper: M([Boolean, Object]),
      showTotal: T(),
      size: N(),
      simple: j(),
      locale: Object,
      prefixCls: String,
      selectPrefixCls: String,
      totalBoundaryShowSizeChanger: Number,
      selectComponentClass: String,
      itemRender: T(),
      role: String,
      responsive: Boolean,
      showLessItems: j(),
      onChange: T(),
      onShowSizeChange: T(),
      "onUpdate:current": T(),
      "onUpdate:pageSize": T(),
    },
    setup(t, n) {
      let { slots: o, attrs: a } = n;
      const {
          prefixCls: s,
          configProvider: p,
          direction: c,
          size: u,
        } = P("pagination", t),
        [d, g] = ge(s),
        h = l(() => p.getPrefixCls("select", t.selectPrefixCls)),
        m = R(),
        [v] = z("Pagination", w, O(t, "locale"));
      return () => {
        var n;
        const {
            itemRender: l = o.itemRender,
            buildOptionText: p = o.buildOptionText,
            selectComponentClass: $,
            responsive: C,
          } = t,
          f = he(t, [
            "itemRender",
            "buildOptionText",
            "selectComponentClass",
            "responsive",
          ]),
          x =
            "small" === u.value ||
            !(
              !(null === (n = m.value) || void 0 === n ? void 0 : n.xs) ||
              u.value ||
              !C
            ),
          y = i(
            i(
              i(
                i(
                  i({}, f),
                  ((t) => {
                    const n = e("span", { class: `${t}-item-ellipsis` }, [
                      b("•••"),
                    ]);
                    return {
                      prevIcon: e(
                        "button",
                        {
                          class: `${t}-item-link`,
                          type: "button",
                          tabindex: -1,
                        },
                        [
                          "rtl" === c.value
                            ? e(E, null, null)
                            : e(A, null, null),
                        ]
                      ),
                      nextIcon: e(
                        "button",
                        {
                          class: `${t}-item-link`,
                          type: "button",
                          tabindex: -1,
                        },
                        [
                          "rtl" === c.value
                            ? e(A, null, null)
                            : e(E, null, null),
                        ]
                      ),
                      jumpPrevIcon: e(
                        "a",
                        { rel: "nofollow", class: `${t}-item-link` },
                        [
                          e("div", { class: `${t}-item-container` }, [
                            "rtl" === c.value
                              ? e(q, { class: `${t}-item-link-icon` }, null)
                              : e(V, { class: `${t}-item-link-icon` }, null),
                            n,
                          ]),
                        ]
                      ),
                      jumpNextIcon: e(
                        "a",
                        { rel: "nofollow", class: `${t}-item-link` },
                        [
                          e("div", { class: `${t}-item-container` }, [
                            "rtl" === c.value
                              ? e(V, { class: `${t}-item-link-icon` }, null)
                              : e(q, { class: `${t}-item-link-icon` }, null),
                            n,
                          ]),
                        ]
                      ),
                    };
                  })(s.value)
                ),
                {
                  prefixCls: s.value,
                  selectPrefixCls: h.value,
                  selectComponentClass: $ || (x ? Q : U),
                  locale: v.value,
                  buildOptionText: p,
                }
              ),
              a
            ),
            {
              class: r(
                {
                  [`${s.value}-mini`]: x,
                  [`${s.value}-rtl`]: "rtl" === c.value,
                },
                a.class,
                g.value
              ),
              itemRender: l,
            }
          );
        return d(e(re, y, null));
      };
    },
  }),
  be = D(me);
export { be as _ };

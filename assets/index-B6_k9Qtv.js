import {
  d_ as e,
  d$ as o,
  e1 as a,
  aU as n,
  e2 as t,
  aV as l,
  aW as r,
  eP as i,
  aJ as s,
  aX as d,
  eQ as c,
  as as p,
  aQ as u,
  r as $,
  eR as v,
  aR as b,
  b1 as m,
  c as x,
  aS as g,
  aw as h,
  aT as f,
  eS as C,
  c8 as y,
  eE as A,
  eT as I,
  cm as P,
  eU as S,
  cl as k,
  aK as w,
  b2 as B,
  eC as K,
  bY as R,
  cp as H,
  co as T,
} from "./index-DPRREYlk.js";
const E = () => ({
    openAnimation: n.object,
    prefixCls: String,
    header: n.any,
    headerClass: String,
    showArrow: o(),
    isActive: o(),
    destroyInactivePanel: o(),
    disabled: o(),
    accordion: o(),
    forceRender: o(),
    expandIcon: a(),
    extra: n.any,
    panelKey: e(),
    collapsible: t(),
    role: String,
    onItemClick: a(),
  }),
  M = (e) => {
    const {
        componentCls: o,
        collapseContentBg: a,
        padding: n,
        collapseContentPaddingHorizontal: t,
        collapseHeaderBg: l,
        collapseHeaderPadding: r,
        collapsePanelBorderRadius: i,
        lineWidth: p,
        lineType: u,
        colorBorder: $,
        colorText: v,
        colorTextHeading: b,
        colorTextDisabled: m,
        fontSize: x,
        lineHeight: g,
        marginSM: h,
        paddingSM: f,
        motionDurationSlow: C,
        fontSizeIcon: y,
      } = e,
      A = `${p}px ${u} ${$}`;
    return {
      [o]: s(s({}, d(e)), {
        backgroundColor: l,
        border: A,
        borderBottom: 0,
        borderRadius: `${i}px`,
        "&-rtl": { direction: "rtl" },
        [`& > ${o}-item`]: {
          borderBottom: A,
          "&:last-child": {
            [`\n            &,\n            & > ${o}-header`]: {
              borderRadius: `0 0 ${i}px ${i}px`,
            },
          },
          [`> ${o}-header`]: {
            position: "relative",
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "flex-start",
            padding: r,
            color: b,
            lineHeight: g,
            cursor: "pointer",
            transition: `all ${C}, visibility 0s`,
            [`> ${o}-header-text`]: { flex: "auto" },
            "&:focus": { outline: "none" },
            [`${o}-expand-icon`]: {
              height: x * g,
              display: "flex",
              alignItems: "center",
              paddingInlineEnd: h,
            },
            [`${o}-arrow`]: s(s({}, c()), {
              fontSize: y,
              svg: { transition: `transform ${C}` },
            }),
            [`${o}-header-text`]: { marginInlineEnd: "auto" },
          },
          [`${o}-header-collapsible-only`]: {
            cursor: "default",
            [`${o}-header-text`]: { flex: "none", cursor: "pointer" },
            [`${o}-expand-icon`]: { cursor: "pointer" },
          },
          [`${o}-icon-collapsible-only`]: {
            cursor: "default",
            [`${o}-expand-icon`]: { cursor: "pointer" },
          },
          [`&${o}-no-arrow`]: { [`> ${o}-header`]: { paddingInlineStart: f } },
        },
        [`${o}-content`]: {
          color: v,
          backgroundColor: a,
          borderTop: A,
          [`& > ${o}-content-box`]: { padding: `${n}px ${t}px` },
          "&-hidden": { display: "none" },
        },
        [`${o}-item:last-child`]: {
          [`> ${o}-content`]: { borderRadius: `0 0 ${i}px ${i}px` },
        },
        [`& ${o}-item-disabled > ${o}-header`]: {
          "\n          &,\n          & > .arrow\n        ": {
            color: m,
            cursor: "not-allowed",
          },
        },
        [`&${o}-icon-position-end`]: {
          [`& > ${o}-item`]: {
            [`> ${o}-header`]: {
              [`${o}-expand-icon`]: {
                order: 1,
                paddingInlineEnd: 0,
                paddingInlineStart: h,
              },
            },
          },
        },
      }),
    };
  },
  O = (e) => {
    const { componentCls: o } = e,
      a = `> ${o}-item > ${o}-header ${o}-arrow svg`;
    return { [`${o}-rtl`]: { [a]: { transform: "rotate(180deg)" } } };
  },
  j = (e) => {
    const {
      componentCls: o,
      collapseHeaderBg: a,
      paddingXXS: n,
      colorBorder: t,
    } = e;
    return {
      [`${o}-borderless`]: {
        backgroundColor: a,
        border: 0,
        [`> ${o}-item`]: { borderBottom: `1px solid ${t}` },
        [`\n        > ${o}-item:last-child,\n        > ${o}-item:last-child ${o}-header\n      `]:
          { borderRadius: 0 },
        [`> ${o}-item:last-child`]: { borderBottom: 0 },
        [`> ${o}-item > ${o}-content`]: {
          backgroundColor: "transparent",
          borderTop: 0,
        },
        [`> ${o}-item > ${o}-content > ${o}-content-box`]: { paddingTop: n },
      },
    };
  },
  z = (e) => {
    const { componentCls: o, paddingSM: a } = e;
    return {
      [`${o}-ghost`]: {
        backgroundColor: "transparent",
        border: 0,
        [`> ${o}-item`]: {
          borderBottom: 0,
          [`> ${o}-content`]: {
            backgroundColor: "transparent",
            border: 0,
            [`> ${o}-content-box`]: { paddingBlock: a },
          },
        },
      },
    };
  },
  D = l("Collapse", (e) => {
    const o = r(e, {
      collapseContentBg: e.colorBgContainer,
      collapseHeaderBg: e.colorFillAlter,
      collapseHeaderPadding: `${e.paddingSM}px ${e.padding}px`,
      collapsePanelBorderRadius: e.borderRadiusLG,
      collapseContentPaddingHorizontal: 16,
    });
    return [M(o), j(o), z(o), O(o), i(o)];
  });
function U(e) {
  let o = e;
  if (!Array.isArray(o)) {
    const e = typeof o;
    o = "number" === e || "string" === e ? [o] : [];
  }
  return o.map((e) => String(e));
}
const W = p({
    compatConfig: { MODE: 3 },
    name: "ACollapse",
    inheritAttrs: !1,
    props: u(
      {
        prefixCls: String,
        activeKey: e([Array, Number, String]),
        defaultActiveKey: e([Array, Number, String]),
        accordion: o(),
        destroyInactivePanel: o(),
        bordered: o(),
        expandIcon: a(),
        openAnimation: n.object,
        expandIconPosition: t(),
        collapsible: t(),
        ghost: o(),
        onChange: a(),
        "onUpdate:activeKey": a(),
      },
      {
        accordion: !1,
        destroyInactivePanel: !1,
        bordered: !0,
        expandIconPosition: "start",
      }
    ),
    slots: Object,
    setup(e, o) {
      let { attrs: a, slots: n, emit: t } = o;
      const l = $(U(v([e.activeKey, e.defaultActiveKey])));
      b(
        () => e.activeKey,
        () => {
          l.value = U(e.activeKey);
        },
        { deep: !0 }
      );
      const { prefixCls: r, direction: i, rootPrefixCls: s } = m("collapse", e),
        [d, c] = D(r),
        p = x(() => {
          const { expandIconPosition: o } = e;
          return void 0 !== o ? o : "rtl" === i.value ? "end" : "start";
        }),
        u = (o) => {
          const { expandIcon: a = n.expandIcon } = e,
            t = a ? a(o) : h(S, { rotate: o.isActive ? 90 : void 0 }, null);
          return h(
            "div",
            {
              class: [`${r.value}-expand-icon`, c.value],
              onClick: () =>
                ["header", "icon"].includes(e.collapsible) && w(o.panelKey),
            },
            [
              k(Array.isArray(a) ? t[0] : t)
                ? P(t, { class: `${r.value}-arrow` }, !1)
                : t,
            ]
          );
        },
        w = (o) => {
          let a = l.value;
          if (e.accordion) a = a[0] === o ? [] : [o];
          else {
            a = [...a];
            const e = a.indexOf(o);
            e > -1 ? a.splice(e, 1) : a.push(o);
          }
          ((o) => {
            void 0 === e.activeKey && (l.value = o);
            const a = e.accordion ? o[0] : o;
            t("update:activeKey", a), t("change", a);
          })(a);
        },
        B = (o, a) => {
          var n, t, i;
          if (A(o)) return;
          const d = l.value,
            {
              accordion: c,
              destroyInactivePanel: p,
              collapsible: $,
              openAnimation: v,
            } = e,
            b = v || I(`${s.value}-motion-collapse`),
            m = String(null !== (n = o.key) && void 0 !== n ? n : a),
            {
              header: x = null ===
                (i =
                  null === (t = o.children) || void 0 === t
                    ? void 0
                    : t.header) || void 0 === i
                ? void 0
                : i.call(t),
              headerClass: g,
              collapsible: h,
              disabled: f,
            } = o.props || {};
          let C = !1;
          C = c ? d[0] === m : d.indexOf(m) > -1;
          let y = null != h ? h : $;
          (f || "" === f) && (y = "disabled");
          const S = {
            key: m,
            panelKey: m,
            header: x,
            headerClass: g,
            isActive: C,
            prefixCls: r.value,
            destroyInactivePanel: p,
            openAnimation: b,
            accordion: c,
            onItemClick: "disabled" === y ? null : w,
            expandIcon: u,
            collapsible: y,
          };
          return P(o, S);
        };
      return () => {
        const { accordion: o, bordered: t, ghost: l } = e,
          s = g(
            r.value,
            {
              [`${r.value}-borderless`]: !t,
              [`${r.value}-icon-position-${p.value}`]: !0,
              [`${r.value}-rtl`]: "rtl" === i.value,
              [`${r.value}-ghost`]: !!l,
              [a.class]: !!a.class,
            },
            c.value
          );
        return d(
          h(
            "div",
            f(
              f({ class: s }, C(a)),
              {},
              { style: a.style, role: o ? "tablist" : null }
            ),
            [
              y(
                null === (u = n.default) || void 0 === u ? void 0 : u.call(n)
              ).map(B),
            ]
          )
        );
        var u;
      };
    },
  }),
  X = p({
    compatConfig: { MODE: 3 },
    name: "PanelContent",
    props: E(),
    setup(e, o) {
      let { slots: a } = o;
      const n = w(!1);
      return (
        B(() => {
          (e.isActive || e.forceRender) && (n.value = !0);
        }),
        () => {
          var o;
          if (!n.value) return null;
          const { prefixCls: t, isActive: l, role: r } = e;
          return h(
            "div",
            {
              class: g(`${t}-content`, {
                [`${t}-content-active`]: l,
                [`${t}-content-inactive`]: !l,
              }),
              role: r,
            },
            [
              h("div", { class: `${t}-content-box` }, [
                null === (o = a.default) || void 0 === o ? void 0 : o.call(a),
              ]),
            ]
          );
        }
      );
    },
  }),
  N = p({
    compatConfig: { MODE: 3 },
    name: "ACollapsePanel",
    inheritAttrs: !1,
    props: u(E(), {
      showArrow: !0,
      isActive: !1,
      onItemClick() {},
      headerClass: "",
      forceRender: !1,
    }),
    slots: Object,
    setup(e, o) {
      let { slots: a, emit: n, attrs: t } = o;
      K(
        void 0 === e.disabled,
        "Collapse.Panel",
        '`disabled` is deprecated. Please use `collapsible="disabled"` instead.'
      );
      const { prefixCls: l } = m("collapse", e),
        r = () => {
          n("itemClick", e.panelKey);
        },
        i = (e) => {
          ("Enter" !== e.key && 13 !== e.keyCode && 13 !== e.which) || r();
        };
      return () => {
        var o, n;
        const {
            header: d = null === (o = a.header) || void 0 === o
              ? void 0
              : o.call(a),
            headerClass: c,
            isActive: p,
            showArrow: u,
            destroyInactivePanel: $,
            accordion: v,
            forceRender: b,
            openAnimation: m,
            expandIcon: x = a.expandIcon,
            extra: C = null === (n = a.extra) || void 0 === n
              ? void 0
              : n.call(a),
            collapsible: y,
          } = e,
          A = "disabled" === y,
          I = l.value,
          P = g(`${I}-header`, {
            [c]: c,
            [`${I}-header-collapsible-only`]: "header" === y,
            [`${I}-icon-collapsible-only`]: "icon" === y,
          }),
          S = g({
            [`${I}-item`]: !0,
            [`${I}-item-active`]: p,
            [`${I}-item-disabled`]: A,
            [`${I}-no-arrow`]: !u,
            [`${t.class}`]: !!t.class,
          });
        let k = h("i", { class: "arrow" }, null);
        u && "function" == typeof x && (k = x(e));
        const w = R(
            h(
              X,
              {
                prefixCls: I,
                isActive: p,
                forceRender: b,
                role: v ? "tabpanel" : null,
              },
              { default: a.default }
            ),
            [[T, p]]
          ),
          B = s({ appear: !1, css: !1 }, m);
        return h("div", f(f({}, t), {}, { class: S }), [
          h(
            "div",
            {
              class: P,
              onClick: () => !["header", "icon"].includes(y) && r(),
              role: v ? "tab" : "button",
              tabindex: A ? -1 : 0,
              "aria-expanded": p,
              onKeypress: i,
            },
            [
              u && k,
              h(
                "span",
                {
                  onClick: () => "header" === y && r(),
                  class: `${I}-header-text`,
                },
                [d]
              ),
              C && h("div", { class: `${I}-extra` }, [C]),
            ]
          ),
          h(H, B, { default: () => [!$ || p ? w : null] }),
        ]);
      };
    },
  });
(W.Panel = N),
  (W.install = function (e) {
    return e.component(W.name, W), e.component(N.name, N), e;
  });
export { W as C, N as _ };

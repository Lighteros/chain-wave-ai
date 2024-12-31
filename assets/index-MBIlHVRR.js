import {
  u as e,
  b2 as t,
  a as l,
  as as o,
  ea as n,
  aw as a,
  bP as s,
  bB as i,
  hI as r,
  hJ as c,
  r as u,
  dG as d,
  c as p,
  aR as f,
  aL as g,
  aP as m,
  n as h,
  bk as b,
  bw as y,
  bX as v,
  au as C,
  bo as k,
  ax as H,
  bY as M,
  av as B,
  cV as S,
  bn as F,
  bZ as P,
  aC as w,
  aD as x,
  bm as O,
  bp as T,
  cR as $,
  aA as j,
  aB as N,
  bE as R,
  az as W,
  b9 as _,
  e8 as A,
  a_ as E,
  b8 as L,
  h9 as V,
  dq as I,
  bN as D,
  bU as q,
  c5 as z,
  at as X,
  ft as Y,
  fs as G,
  ha as J,
  hb as U,
  bb as Z,
  aO as K,
} from "./index-CcOpQHgp.js";
import { u as Q } from "./useTimeout-BxOoe6hK.js";
import { u as ee } from "./useAttrs-BQyZELEb.js";
import { e as te } from "./tsxHelper-Dj8xZHnP.js";
import { c as le } from "./PageWrapper-B6_5WjVB.js";
import { S as oe, B as ne } from "./index-sT102FR7.js";
import { _ as ae } from "./BasicTitle-CQkljK8F.js";
const { t: se } = e(),
  ie = {
    visible: { type: Boolean },
    scrollTop: { type: Boolean, default: !0 },
    height: { type: Number },
    minHeight: { type: Number },
    draggable: { type: Boolean, default: !0 },
    centered: { type: Boolean },
    cancelText: { type: String, default: se("common.cancelText") },
    okText: { type: String, default: se("common.okText") },
    closeFunc: Function,
  },
  re = Object.assign({}, ie, {
    defaultFullscreen: { type: Boolean },
    canFullscreen: { type: Boolean, default: !0 },
    wrapperFooterOffset: { type: Number, default: 0 },
    helpMessage: [String, Array],
    useWrapper: { type: Boolean, default: !0 },
    loading: { type: Boolean },
    loadingTip: { type: String },
    showCancelBtn: { type: Boolean, default: !0 },
    showOkBtn: { type: Boolean, default: !0 },
    wrapperProps: Object,
    afterClose: Function,
    bodyStyle: Object,
    closable: { type: Boolean, default: !0 },
    closeIcon: Object,
    confirmLoading: { type: Boolean },
    destroyOnClose: { type: Boolean },
    footer: Object,
    getContainer: Function,
    mask: { type: Boolean, default: !0 },
    maskClosable: { type: Boolean, default: !0 },
    keyboard: { type: Boolean, default: !0 },
    maskStyle: Object,
    okType: { type: String, default: "primary" },
    okButtonProps: Object,
    cancelButtonProps: Object,
    title: { type: String },
    visible: { type: Boolean },
    width: [String, Number],
    wrapClassName: { type: String },
    zIndex: { type: Number },
  });
function ce(e) {
  const o = (e, t) => getComputedStyle(e)[t],
    n = (t) => {
      if (!t) return;
      t.setAttribute("data-drag", l(e.draggable));
      const n = t.querySelector(".ant-modal-header"),
        a = t.querySelector(".ant-modal");
      n &&
        a &&
        l(e.draggable) &&
        ((n.style.cursor = "move"),
        (n.onmousedown = (e) => {
          if (!e) return;
          const t = e.clientX,
            l = e.clientY,
            n = document.body.clientWidth,
            s = document.documentElement.clientHeight,
            i = a.offsetWidth,
            r = a.offsetHeight,
            c = a.offsetLeft,
            u = n - a.offsetLeft - i,
            d = a.offsetTop,
            p = s - a.offsetTop - r,
            f = o(a, "left"),
            g = o(a, "top");
          let m = +f,
            h = +g;
          f.includes("%")
            ? ((m = +document.body.clientWidth * (+f.replace(/%/g, "") / 100)),
              (h = +document.body.clientHeight * (+g.replace(/%/g, "") / 100)))
            : ((m = +f.replace(/px/g, "")), (h = +g.replace(/px/g, ""))),
            (document.onmousemove = function (e) {
              let o = e.clientX - t,
                n = e.clientY - l;
              -o > c ? (o = -c) : o > u && (o = u),
                -n > d ? (n = -d) : n > p && (n = p),
                (a.style.cssText += `;left:${o + m}px;top:${n + h}px;`);
            }),
            (document.onmouseup = () => {
              (document.onmousemove = null), (document.onmouseup = null);
            });
        }));
    };
  t(() => {
    l(e.visible) &&
      l(e.draggable) &&
      Q(() => {
        (() => {
          const t = document.querySelectorAll(".ant-modal-wrap");
          for (const a of Array.from(t)) {
            if (!a) continue;
            const t = o(a, "display"),
              s = a.getAttribute("data-drag");
            "none" !== t && (null === s || l(e.destroyOnClose)) && n(a);
          }
        })();
      }, 30);
  });
}
const ue = o({
    name: "Modal",
    inheritAttrs: !1,
    props: re,
    emits: ["cancel"],
    setup(e, { slots: t }) {
      const { visible: o, draggable: r, destroyOnClose: c } = n(e),
        u = ee();
      return (
        ce({ visible: o, destroyOnClose: c, draggable: r }),
        () => {
          let o;
          const n = { ...l(u), ...e };
          return a(
            s,
            n,
            "function" == typeof (r = o = te(t)) ||
              ("[object Object]" === Object.prototype.toString.call(r) && !i(r))
              ? o
              : { default: () => [o] }
          );
          var r;
        }
      );
    },
  }),
  de = Symbol();
function pe() {
  return r(de);
}
const fe = o({
    name: "ModalWrapper",
    components: { ScrollContainer: oe },
    inheritAttrs: !1,
    props: {
      loading: { type: Boolean },
      useWrapper: { type: Boolean, default: !0 },
      modalHeaderHeight: { type: Number, default: 57 },
      modalFooterHeight: { type: Number, default: 74 },
      minHeight: { type: Number, default: 200 },
      height: { type: Number },
      footerOffset: { type: Number, default: 0 },
      visible: { type: Boolean },
      fullScreen: { type: Boolean },
      loadingTip: { type: String },
    },
    emits: ["height-change", "ext-height"],
    setup(e, { emit: o }) {
      const n = u(null),
        a = u(null),
        s = u(0),
        i = u(0);
      let r = 0;
      le(y.bind(null, !1)),
        d(
          a,
          () => {
            y();
          },
          { attributes: !0, subtree: !0 }
        ),
        c({ redoModalHeight: y }, de);
      const b = p(() => ({
        minHeight: `${e.minHeight}px`,
        [e.fullScreen ? "height" : "maxHeight"]: `${l(s)}px`,
      }));
      async function y() {
        if (!e.visible) return;
        const t = l(n);
        if (!t) return;
        const i = t.$el.parentElement;
        if (i) {
          (i.style.padding = "0"), await h();
          try {
            const t = i.parentElement && i.parentElement.parentElement;
            if (!t) return;
            const n = getComputedStyle(t).top,
              c = Number.parseInt(n);
            let u =
              window.innerHeight -
              2 * c +
              (e.footerOffset || 0) -
              e.modalFooterHeight -
              e.modalHeaderHeight;
            c < 40 && (u -= 26), await h();
            const d = l(a);
            if (!d) return;
            await h(),
              (r = d.scrollHeight),
              e.fullScreen
                ? (s.value =
                    window.innerHeight -
                    e.modalFooterHeight -
                    e.modalHeaderHeight -
                    28)
                : (s.value = e.height ? e.height : r > u ? u : r),
              o("height-change", l(s));
          } catch (U) {}
        }
      }
      return (
        t(() => {
          e.useWrapper && y();
        }),
        f(
          () => e.fullScreen,
          (e) => {
            y(), e ? (i.value = s.value) : (s.value = i.value);
          }
        ),
        g(() => {
          const { modalHeaderHeight: t, modalFooterHeight: l } = e;
          o("ext-height", t + l);
        }),
        m(() => {}),
        {
          wrapperRef: n,
          spinRef: a,
          spinStyle: b,
          scrollTop: async function () {
            h(() => {
              const e = l(n);
              e && e?.scrollTo?.(0);
            });
          },
          setModalHeight: y,
        }
      );
    },
  }),
  ge = ["loading-tip"];
const me = b(fe, [
    [
      "render",
      function (e, t, l, o, n, a) {
        const s = y("ScrollContainer"),
          i = v("loading");
        return (
          C(),
          k(
            s,
            { ref: "wrapperRef" },
            {
              default: H(() => [
                M(
                  (C(),
                  B(
                    "div",
                    {
                      ref: "spinRef",
                      style: S(e.spinStyle),
                      "loading-tip": e.loadingTip,
                    },
                    [F(e.$slots, "default")],
                    12,
                    ge
                  )),
                  [[i, e.loading]]
                ),
              ]),
              _: 3,
            },
            512
          )
        );
      },
    ],
  ]),
  he = o({
    name: "ModalClose",
    props: {
      canFullscreen: { type: Boolean, default: !0 },
      fullScreen: { type: Boolean },
    },
    emits: ["cancel", "fullscreen"],
    setup(t, { emit: l }) {
      const { prefixCls: o } = P("basic-modal-close"),
        { t: n } = e();
      return {
        t: n,
        getClass: p(() => [
          o,
          `${o}--custom`,
          { [`${o}--can-full`]: t.canFullscreen },
        ]),
        prefixCls: o,
        handleCancel: function (e) {
          l("cancel", e);
        },
        handleFullScreen: function (e) {
          e?.stopPropagation(), e?.preventDefault(), l("fullscreen");
        },
      };
    },
  });
const be = b(he, [
  [
    "render",
    function (e, t, l, o, n, s) {
      const i = T,
        r = $;
      return (
        C(),
        B(
          "div",
          { class: O(e.getClass) },
          [
            e.canFullscreen
              ? (C(),
                B(
                  w,
                  { key: 0 },
                  [
                    e.fullScreen
                      ? (C(),
                        k(
                          r,
                          {
                            key: 0,
                            title: e.t("component.modal.restore"),
                            placement: "bottom",
                          },
                          {
                            default: H(() => [
                              a(
                                i,
                                {
                                  icon: "i-ant-design:fullscreen-exit-outlined",
                                  role: "full",
                                  onClick: e.handleFullScreen,
                                },
                                null,
                                8,
                                ["onClick"]
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["title"]
                        ))
                      : (C(),
                        k(
                          r,
                          {
                            key: 1,
                            title: e.t("component.modal.maximize"),
                            placement: "bottom",
                          },
                          {
                            default: H(() => [
                              a(
                                i,
                                {
                                  icon: "i-ant-design:fullscreen-outlined",
                                  role: "close",
                                  onClick: e.handleFullScreen,
                                },
                                null,
                                8,
                                ["onClick"]
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ["title"]
                        )),
                  ],
                  64
                ))
              : x("", !0),
            a(
              r,
              { title: e.t("component.modal.close"), placement: "bottom" },
              {
                default: H(() => [
                  a(
                    i,
                    {
                      icon: "i-ant-design:close-outlined",
                      onClick: e.handleCancel,
                    },
                    null,
                    8,
                    ["onClick"]
                  ),
                ]),
                _: 1,
              },
              8,
              ["title"]
            ),
          ],
          2
        )
      );
    },
  ],
]);
const ye = b(
    o({
      name: "BasicModalFooter",
      props: re,
      emits: ["ok", "cancel"],
      setup: (e, { emit: t }) => ({
        handleOk: function (e) {
          t("ok", e);
        },
        handleCancel: function (e) {
          t("cancel", e);
        },
      }),
    }),
    [
      [
        "render",
        function (e, t, l, o, n, a) {
          const s = W;
          return (
            C(),
            B("div", null, [
              F(e.$slots, "insertFooter"),
              e.showCancelBtn
                ? (C(),
                  k(
                    s,
                    R({ key: 0 }, e.cancelButtonProps, {
                      onClick: e.handleCancel,
                    }),
                    { default: H(() => [j(N(e.cancelText), 1)]), _: 1 },
                    16,
                    ["onClick"]
                  ))
                : x("", !0),
              F(e.$slots, "centerFooter"),
              e.showOkBtn
                ? (C(),
                  k(
                    s,
                    R(
                      { key: 1, type: e.okType, loading: e.confirmLoading },
                      e.okButtonProps,
                      { onClick: e.handleOk }
                    ),
                    { default: H(() => [j(N(e.okText), 1)]), _: 1 },
                    16,
                    ["type", "loading", "onClick"]
                  ))
                : x("", !0),
              F(e.$slots, "appendFooter"),
            ])
          );
        },
      ],
    ]
  ),
  ve = o({
    name: "BasicModalHeader",
    components: { BasicTitle: ne },
    props: { helpMessage: { type: [String, Array] }, title: { type: String } },
    emits: ["dblclick"],
  });
const Ce = o({
  name: "BasicModal",
  components: {
    Modal: ue,
    ModalWrapper: me,
    ModalClose: be,
    ModalFooter: ye,
    ModalHeader: b(ve, [
      [
        "render",
        function (e, t, l, o, n, a) {
          const s = ae;
          return (
            C(),
            k(
              s,
              { "help-message": e.helpMessage },
              { default: H(() => [j(N(e.title), 1)]), _: 1 },
              8,
              ["help-message"]
            )
          );
        },
      ],
    ]),
  },
  inheritAttrs: !1,
  props: re,
  emits: [
    "visible-change",
    "height-change",
    "cancel",
    "ok",
    "register",
    "update:visible",
  ],
  setup(e, { emit: o, attrs: n }) {
    const a = u(!1),
      s = u(null),
      i = u(null),
      { prefixCls: r } = P("basic-modal"),
      c = u(0),
      d = {
        setModalProps: function (e) {
          (s.value = V(l(s) || {}, e)),
            Reflect.has(e, "visible") && (a.value = !!e.visible);
          Reflect.has(e, "defaultFullscreen") &&
            (v.value = !!e.defaultFullscreen);
        },
        emitVisible: void 0,
        redoModalHeight: () => {
          h(() => {
            l(i) && l(i).setModalHeight();
          });
        },
      },
      g = _();
    g && o("register", d, g.uid);
    const m = p(() => ({ ...e, ...l(s) })),
      {
        handleFullScreen: b,
        getWrapClassName: y,
        fullScreenRef: v,
      } = (function (e) {
        const t = u(!1);
        return {
          getWrapClassName: p(() => {
            const o = l(e.wrapClassName) || "";
            return l(t) ? `fullscreen-modal ${o} ` : l(o);
          }),
          handleFullScreen: function (e) {
            e && e.stopPropagation(), (t.value = !l(t));
          },
          fullScreenRef: t,
        };
      })({
        modalWrapperRef: i,
        extHeightRef: c,
        wrapClassName: A(m.value, "wrapClassName"),
      }),
      C = p(() => ({
        ...{
          ...l(m),
          visible: l(a),
          okButtonProps: void 0,
          cancelButtonProps: void 0,
          title: void 0,
        },
        wrapClassName: l(y),
      })),
      k = p(() => {
        const e = { ...n, ...l(m), visible: l(a), wrapClassName: l(y) };
        return l(v) ? E(e, ["height", "title"]) : E(e, "title");
      }),
      H = p(() => {
        if (!l(v)) return l(C).height;
      });
    return (
      t(() => {
        (a.value = !!e.visible), (v.value = !!e.defaultFullscreen);
      }),
      f(
        () => l(a),
        (t) => {
          o("visible-change", t),
            o("update:visible", t),
            g && d.emitVisible?.(t, g.uid),
            h(() => {
              e.scrollTop && t && l(i) && l(i).scrollTop();
            });
        },
        { immediate: !1 }
      ),
      {
        handleCancel: async function (t) {
          if (
            (t?.stopPropagation(),
            !t.target?.classList?.contains(`${r}-close--custom`))
          )
            if (e.closeFunc && L(e.closeFunc)) {
              const t = await e.closeFunc();
              a.value = !t;
            } else (a.value = !1), o("cancel", t);
        },
        getBindValue: k,
        getProps: C,
        handleFullScreen: b,
        fullScreenRef: v,
        getMergeProps: m,
        handleOk: function (e) {
          o("ok", e);
        },
        visibleRef: a,
        omit: E,
        modalWrapperRef: i,
        handleExtHeight: function (e) {
          c.value = e;
        },
        handleHeightChange: function (e) {
          o("height-change", e);
        },
        handleTitleDbClick: function (t) {
          e.canFullscreen && (t.stopPropagation(), b(t));
        },
        getWrapperHeight: H,
      }
    );
  },
});
const ke = b(Ce, [
    [
      "render",
      function (e, t, l, o, n, s) {
        const i = y("ModalClose"),
          r = y("ModalHeader"),
          c = y("ModalFooter"),
          u = y("ModalWrapper"),
          d = y("Modal");
        return (
          C(),
          k(
            d,
            R(e.getBindValue, { onCancel: e.handleCancel }),
            I(
              {
                default: H(() => [
                  a(
                    u,
                    R(
                      {
                        ref: "modalWrapperRef",
                        "use-wrapper": e.getProps.useWrapper,
                        "footer-offset": e.wrapperFooterOffset,
                        "full-screen": e.fullScreenRef,
                        loading: e.getProps.loading,
                        "loading-tip": e.getProps.loadingTip,
                        "min-height": e.getProps.minHeight,
                        height: e.getWrapperHeight,
                        visible: e.visibleRef,
                        "modal-footer-height":
                          void 0 === e.footer || e.footer ? void 0 : 0,
                      },
                      e.omit(
                        e.getProps.wrapperProps,
                        "visible",
                        "height",
                        "modalFooterHeight"
                      ),
                      {
                        onExtHeight: e.handleExtHeight,
                        onHeightChange: e.handleHeightChange,
                      }
                    ),
                    { default: H(() => [F(e.$slots, "default")]), _: 3 },
                    16,
                    [
                      "use-wrapper",
                      "footer-offset",
                      "full-screen",
                      "loading",
                      "loading-tip",
                      "min-height",
                      "height",
                      "visible",
                      "modal-footer-height",
                      "onExtHeight",
                      "onHeightChange",
                    ]
                  ),
                ]),
                _: 2,
              },
              [
                e.$slots.closeIcon
                  ? void 0
                  : {
                      name: "closeIcon",
                      fn: H(() => [
                        a(
                          i,
                          {
                            "can-fullscreen": e.getProps.canFullscreen,
                            "full-screen": e.fullScreenRef,
                            onCancel: e.handleCancel,
                            onFullscreen: e.handleFullScreen,
                          },
                          null,
                          8,
                          [
                            "can-fullscreen",
                            "full-screen",
                            "onCancel",
                            "onFullscreen",
                          ]
                        ),
                      ]),
                      key: "0",
                    },
                e.$slots.title
                  ? void 0
                  : {
                      name: "title",
                      fn: H(() => [
                        a(
                          r,
                          {
                            "help-message": e.getProps.helpMessage,
                            title: e.getMergeProps.title,
                            onDblclick: e.handleTitleDbClick,
                          },
                          null,
                          8,
                          ["help-message", "title", "onDblclick"]
                        ),
                      ]),
                      key: "1",
                    },
                e.$slots.footer
                  ? void 0
                  : {
                      name: "footer",
                      fn: H(() => [
                        a(
                          c,
                          R(e.getBindValue, {
                            onOk: e.handleOk,
                            onCancel: e.handleCancel,
                          }),
                          I({ _: 2 }, [
                            D(Object.keys(e.$slots), (t) => ({
                              name: t,
                              fn: H((l) => [F(e.$slots, t, q(z(l || {})))]),
                            })),
                          ]),
                          1040,
                          ["onOk", "onCancel"]
                        ),
                      ]),
                      key: "2",
                    },
                D(Object.keys(e.omit(e.$slots, "default")), (t) => ({
                  name: t,
                  fn: H((l) => [F(e.$slots, t, q(z(l || {})))]),
                })),
              ]
            ),
            1040,
            ["onCancel"]
          )
        );
      },
    ],
  ]),
  He = X({}),
  Me = X({});
function Be() {
  const e = u(null),
    t = u(!1),
    o = u("");
  const n = () => {
      const t = l(e);
      return t || U("useModal instance is undefined!"), t;
    },
    a = {
      setModalProps: (e) => {
        n()?.setModalProps(e);
      },
      getVisible: p(() => Me[~~l(o)]),
      redoModalHeight: () => {
        n()?.redoModalHeight?.();
      },
      openModal: (e = !0, t, a = !0) => {
        if ((n()?.setModalProps({ visible: e }), !t)) return;
        const s = l(o);
        if (a) return (He[s] = null), void (He[s] = Y(t));
        G(Y(He[s]), Y(t)) || (He[s] = Y(t));
      },
      closeModal: () => {
        n()?.setModalProps({ visible: !1 });
      },
    };
  return [
    function (n, a) {
      if (!_())
        throw new Error(
          "useModal() can only be used inside setup() or functional components!"
        );
      (o.value = a),
        m(() => {
          (e.value = null), (t.value = !1), (He[l(o)] = null);
        }),
        (l(t) && J() && n === l(e)) ||
          ((e.value = n),
          (t.value = !0),
          (n.emitVisible = (e, t) => {
            Me[t] = e;
          }));
    },
    a,
  ];
}
function Se(e) {
  const o = u(null),
    n = _(),
    a = u(""),
    s = () => {
      const e = l(o);
      return e || U("useModalInner instance is undefined!"), e;
    };
  return (
    t(() => {
      He[l(a)];
    }),
    [
      (e, t) => {
        Z(() => {
          o.value = null;
        }),
          (a.value = t),
          (o.value = e),
          n?.emit("register", e, t);
      },
      {
        changeLoading: (e = !0) => {
          s()?.setModalProps({ loading: e });
        },
        getVisible: p(() => Me[~~l(a)]),
        changeOkLoading: (e = !0) => {
          s()?.setModalProps({ confirmLoading: e });
        },
        closeModal: () => {
          s()?.setModalProps({ visible: !1 });
        },
        setModalProps: (e) => {
          s()?.setModalProps(e);
        },
        redoModalHeight: () => {
          const e = s()?.redoModalHeight;
          e && e();
        },
      },
    ]
  );
}
const Fe = K(ke);
export { Fe as B, pe as a, Se as b, Be as u };

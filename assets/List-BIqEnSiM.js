import {
  aJ as e,
  aw as t,
  gD as o,
  aS as n,
  c8 as l,
  gE as s,
  as as i,
  at as r,
  dx as a,
  gF as u,
  r as c,
  aR as h,
  aP as v,
  aL as d,
  dZ as p,
  aU as f,
  c as g,
  aK as m,
  ft as b,
  n as M,
  gG as y,
  b2 as S,
  aT as H,
} from "./index-CcOpQHgp.js";
function E() {
  const e = (t) => {
    e.current = t;
  };
  return e;
}
const R = (l, s) => {
  let { height: i, offset: r, prefixCls: a, onInnerResize: u } = l,
    { slots: c } = s;
  var h;
  let v = {},
    d = { display: "flex", flexDirection: "column" };
  return (
    void 0 !== r &&
      ((v = { height: `${i}px`, position: "relative", overflow: "hidden" }),
      (d = e(e({}, d), {
        transform: `translateY(${r}px)`,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
      }))),
    t("div", { style: v }, [
      t(
        o,
        {
          onResize: (e) => {
            let { offsetHeight: t } = e;
            t && u && u();
          },
        },
        {
          default: () => [
            t("div", { style: d, class: n({ [`${a}-holder-inner`]: a }) }, [
              null === (h = c.default) || void 0 === h ? void 0 : h.call(c),
            ]),
          ],
        }
      ),
    ])
  );
};
(R.displayName = "Filter"),
  (R.inheritAttrs = !1),
  (R.props = {
    prefixCls: String,
    height: Number,
    offset: Number,
    onInnerResize: Function,
  });
const T = (e, t) => {
  let { setRef: o } = e,
    { slots: n } = t;
  var i;
  const r = l(null === (i = n.default) || void 0 === i ? void 0 : i.call(n));
  return r && r.length ? s(r[0], { ref: o }) : r;
};
T.props = { setRef: { type: Function, default: () => {} } };
function w(e) {
  return "touches" in e ? e.touches[0].pageY : e.pageY;
}
const x = i({
  compatConfig: { MODE: 3 },
  name: "ScrollBar",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    scrollTop: Number,
    scrollHeight: Number,
    height: Number,
    count: Number,
    onScroll: { type: Function },
    onStartMove: { type: Function },
    onStopMove: { type: Function },
  },
  setup: () => ({
    moveRaf: null,
    scrollbarRef: E(),
    thumbRef: E(),
    visibleTimeout: null,
    state: r({ dragging: !1, pageY: null, startTop: null, visible: !1 }),
  }),
  watch: {
    scrollTop: {
      handler() {
        this.delayHidden();
      },
      flush: "post",
    },
  },
  mounted() {
    var e, t;
    null === (e = this.scrollbarRef.current) ||
      void 0 === e ||
      e.addEventListener(
        "touchstart",
        this.onScrollbarTouchStart,
        !!u && { passive: !1 }
      ),
      null === (t = this.thumbRef.current) ||
        void 0 === t ||
        t.addEventListener(
          "touchstart",
          this.onMouseDown,
          !!u && { passive: !1 }
        );
  },
  beforeUnmount() {
    this.removeEvents(), clearTimeout(this.visibleTimeout);
  },
  methods: {
    delayHidden() {
      clearTimeout(this.visibleTimeout),
        (this.state.visible = !0),
        (this.visibleTimeout = setTimeout(() => {
          this.state.visible = !1;
        }, 2e3));
    },
    onScrollbarTouchStart(e) {
      e.preventDefault();
    },
    onContainerMouseDown(e) {
      e.stopPropagation(), e.preventDefault();
    },
    patchEvents() {
      window.addEventListener("mousemove", this.onMouseMove),
        window.addEventListener("mouseup", this.onMouseUp),
        this.thumbRef.current.addEventListener(
          "touchmove",
          this.onMouseMove,
          !!u && { passive: !1 }
        ),
        this.thumbRef.current.addEventListener("touchend", this.onMouseUp);
    },
    removeEvents() {
      window.removeEventListener("mousemove", this.onMouseMove),
        window.removeEventListener("mouseup", this.onMouseUp),
        this.scrollbarRef.current.removeEventListener(
          "touchstart",
          this.onScrollbarTouchStart,
          !!u && { passive: !1 }
        ),
        this.thumbRef.current &&
          (this.thumbRef.current.removeEventListener(
            "touchstart",
            this.onMouseDown,
            !!u && { passive: !1 }
          ),
          this.thumbRef.current.removeEventListener(
            "touchmove",
            this.onMouseMove,
            !!u && { passive: !1 }
          ),
          this.thumbRef.current.removeEventListener(
            "touchend",
            this.onMouseUp
          )),
        a.cancel(this.moveRaf);
    },
    onMouseDown(t) {
      const { onStartMove: o } = this.$props;
      e(this.state, { dragging: !0, pageY: w(t), startTop: this.getTop() }),
        o(),
        this.patchEvents(),
        t.stopPropagation(),
        t.preventDefault();
    },
    onMouseMove(e) {
      const { dragging: t, pageY: o, startTop: n } = this.state,
        { onScroll: l } = this.$props;
      if ((a.cancel(this.moveRaf), t)) {
        const t = n + (w(e) - o),
          s = this.getEnableScrollRange(),
          i = this.getEnableHeightRange(),
          r = i ? t / i : 0,
          u = Math.ceil(r * s);
        this.moveRaf = a(() => {
          l(u);
        });
      }
    },
    onMouseUp() {
      const { onStopMove: e } = this.$props;
      (this.state.dragging = !1), e(), this.removeEvents();
    },
    getSpinHeight() {
      const { height: e, scrollHeight: t } = this.$props;
      let o = (e / t) * 100;
      return (o = Math.max(o, 20)), (o = Math.min(o, e / 2)), Math.floor(o);
    },
    getEnableScrollRange() {
      const { scrollHeight: e, height: t } = this.$props;
      return e - t || 0;
    },
    getEnableHeightRange() {
      const { height: e } = this.$props;
      return e - this.getSpinHeight() || 0;
    },
    getTop() {
      const { scrollTop: e } = this.$props,
        t = this.getEnableScrollRange(),
        o = this.getEnableHeightRange();
      if (0 === e || 0 === t) return 0;
      return (e / t) * o;
    },
    showScroll() {
      const { height: e, scrollHeight: t } = this.$props;
      return t > e;
    },
  },
  render() {
    const { dragging: e, visible: o } = this.state,
      { prefixCls: l } = this.$props,
      s = this.getSpinHeight() + "px",
      i = this.getTop() + "px",
      r = this.showScroll(),
      a = r && o;
    return t(
      "div",
      {
        ref: this.scrollbarRef,
        class: n(`${l}-scrollbar`, { [`${l}-scrollbar-show`]: r }),
        style: {
          width: "8px",
          top: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: a ? void 0 : "none",
        },
        onMousedown: this.onContainerMouseDown,
        onMousemove: this.delayHidden,
      },
      [
        t(
          "div",
          {
            ref: this.thumbRef,
            class: n(`${l}-scrollbar-thumb`, {
              [`${l}-scrollbar-thumb-moving`]: e,
            }),
            style: {
              width: "100%",
              height: s,
              top: i,
              left: 0,
              position: "absolute",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "99px",
              cursor: "pointer",
              userSelect: "none",
            },
            onMousedown: this.onMouseDown,
          },
          null
        ),
      ]
    );
  },
});
const L = "object" == typeof navigator && /Firefox/i.test(navigator.userAgent),
  D = (e, t) => {
    let o = !1,
      n = null;
    return function (l) {
      let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      const i = (l < 0 && e.value) || (l > 0 && t.value);
      return (
        s && i
          ? (clearTimeout(n), (o = !1))
          : (i && !o) ||
            (clearTimeout(n),
            (o = !0),
            (n = setTimeout(() => {
              o = !1;
            }, 50))),
        !o && i
      );
    };
  };
const $ = 14 / 15;
var C = function (e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var l = 0;
    for (n = Object.getOwnPropertySymbols(e); l < n.length; l++)
      t.indexOf(n[l]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[l]) &&
        (o[n[l]] = e[n[l]]);
  }
  return o;
};
const F = [],
  O = { overflowY: "auto", overflowAnchor: "none" };
const I = i({
  compatConfig: { MODE: 3 },
  name: "List",
  inheritAttrs: !1,
  props: {
    prefixCls: String,
    data: f.array,
    height: Number,
    itemHeight: Number,
    fullHeight: { type: Boolean, default: void 0 },
    itemKey: { type: [String, Number, Function], required: !0 },
    component: { type: [String, Object] },
    virtual: { type: Boolean, default: void 0 },
    children: Function,
    onScroll: Function,
    onMousedown: Function,
    onMouseenter: Function,
    onVisibleChange: Function,
  },
  setup(t, o) {
    let { expose: n } = o;
    const l = g(() => {
        const { height: e, itemHeight: o, virtual: n } = t;
        return !(!1 === n || !e || !o);
      }),
      s = g(() => {
        const { height: e, itemHeight: o, data: n } = t;
        return l.value && n && o * n.length > e;
      }),
      i = r({ scrollTop: 0, scrollMoving: !1 }),
      f = g(() => t.data || F),
      H = m([]);
    h(
      f,
      () => {
        H.value = b(f.value).slice();
      },
      { immediate: !0 }
    );
    const E = m((e) => {});
    h(
      () => t.itemKey,
      (e) => {
        E.value =
          "function" == typeof e ? e : (t) => (null == t ? void 0 : t[e]);
      },
      { immediate: !0 }
    );
    const R = m(),
      T = m(),
      w = m(),
      x = (e) => E.value(e),
      C = { getKey: x };
    function I(e) {
      let t;
      t = "function" == typeof e ? e(i.scrollTop) : e;
      const o = (function (e) {
        let t = e;
        Number.isNaN(K.value) || (t = Math.min(t, K.value));
        return (t = Math.max(t, 0)), t;
      })(t);
      R.value && (R.value.scrollTop = o), (i.scrollTop = o);
    }
    const [N, Y, B, P] = (function (e, t) {
        const o = new Map(),
          n = new Map(),
          l = c(Symbol("update"));
        let s;
        function i() {
          a.cancel(s);
        }
        function r() {
          i(),
            (s = a(() => {
              o.forEach((e, t) => {
                if (e && e.offsetParent) {
                  const { offsetHeight: o } = e;
                  n.get(t) !== o &&
                    ((l.value = Symbol("update")), n.set(t, e.offsetHeight));
                }
              });
            }));
        }
        return (
          h(e, () => {
            l.value = Symbol("update");
          }),
          v(() => {
            i();
          }),
          [
            function (e, n) {
              const l = t(e);
              o.get(l), n ? (o.set(l, n.$el || n), r()) : o.delete(l);
            },
            r,
            n,
            l,
          ]
        );
      })(H, x),
      j = r({ scrollHeight: void 0, start: 0, end: 0, offset: void 0 }),
      k = m(0);
    d(() => {
      M(() => {
        var e;
        k.value =
          (null === (e = T.value) || void 0 === e ? void 0 : e.offsetHeight) ||
          0;
      });
    }),
      y(() => {
        M(() => {
          var e;
          k.value =
            (null === (e = T.value) || void 0 === e
              ? void 0
              : e.offsetHeight) || 0;
        });
      }),
      h(
        [l, H],
        () => {
          l.value ||
            e(j, {
              scrollHeight: void 0,
              start: 0,
              end: H.value.length - 1,
              offset: void 0,
            });
        },
        { immediate: !0 }
      ),
      h(
        [l, H, k, s],
        () => {
          l.value &&
            !s.value &&
            e(j, {
              scrollHeight: k.value,
              start: 0,
              end: H.value.length - 1,
              offset: void 0,
            }),
            R.value && (i.scrollTop = R.value.scrollTop);
        },
        { immediate: !0 }
      ),
      h(
        [s, l, () => i.scrollTop, H, P, () => t.height, k],
        () => {
          if (!l.value || !s.value) return;
          let o,
            n,
            r,
            a = 0;
          const u = H.value.length,
            c = H.value,
            h = i.scrollTop,
            { itemHeight: v, height: d } = t,
            p = h + d;
          for (let e = 0; e < u; e += 1) {
            const t = c[e],
              l = x(t);
            let s = B.get(l);
            void 0 === s && (s = v);
            const i = a + s;
            void 0 === o && i >= h && ((o = e), (n = a)),
              void 0 === r && i > p && (r = e),
              (a = i);
          }
          void 0 === o && ((o = 0), (n = 0), (r = Math.ceil(d / v))),
            void 0 === r && (r = u - 1),
            (r = Math.min(r + 1, u)),
            e(j, { scrollHeight: a, start: o, end: r, offset: n });
        },
        { immediate: !0 }
      );
    const K = g(() => j.scrollHeight - t.height);
    const U = g(() => i.scrollTop <= 0),
      z = g(() => i.scrollTop >= K.value),
      A = D(U, z);
    const [V, q] = (function (e, t, o, n) {
      let l = 0,
        s = null,
        i = null,
        r = !1;
      const u = D(t, o);
      return [
        function (t) {
          if (!e.value) return;
          a.cancel(s);
          const { deltaY: o } = t;
          (l += o),
            (i = o),
            u(o) ||
              (L || t.preventDefault(),
              (s = a(() => {
                n(l * (r ? 10 : 1)), (l = 0);
              })));
        },
        function (t) {
          e.value && (r = t.detail === i);
        },
      ];
    })(l, U, z, (e) => {
      I((t) => t + e);
    });
    function G(e) {
      l.value && e.preventDefault();
    }
    !(function (e, t, o) {
      let n = !1,
        l = 0,
        s = null,
        i = null;
      const r = () => {
          s &&
            (s.removeEventListener("touchmove", a),
            s.removeEventListener("touchend", u));
        },
        a = (e) => {
          if (n) {
            const t = Math.ceil(e.touches[0].pageY);
            let n = l - t;
            (l = t),
              o(n) && e.preventDefault(),
              clearInterval(i),
              (i = setInterval(() => {
                (n *= $), (!o(n, !0) || Math.abs(n) <= 0.1) && clearInterval(i);
              }, 16));
          }
        },
        u = () => {
          (n = !1), r();
        },
        c = (e) => {
          r(),
            1 !== e.touches.length ||
              n ||
              ((n = !0),
              (l = Math.ceil(e.touches[0].pageY)),
              (s = e.target),
              s.addEventListener("touchmove", a, { passive: !1 }),
              s.addEventListener("touchend", u));
        },
        v = () => {};
      d(() => {
        document.addEventListener("touchmove", v, { passive: !1 }),
          h(
            e,
            (e) => {
              t.value.removeEventListener("touchstart", c),
                r(),
                clearInterval(i),
                e && t.value.addEventListener("touchstart", c, { passive: !1 });
            },
            { immediate: !0 }
          );
      }),
        p(() => {
          document.removeEventListener("touchmove", v);
        });
    })(l, R, (e, t) => !A(e, t) && (V({ preventDefault() {}, deltaY: e }), !0));
    const J = () => {
      R.value &&
        (R.value.removeEventListener("wheel", V, !!u && { passive: !1 }),
        R.value.removeEventListener("DOMMouseScroll", q),
        R.value.removeEventListener("MozMousePixelScroll", G));
    };
    S(() => {
      M(() => {
        R.value &&
          (J(),
          R.value.addEventListener("wheel", V, !!u && { passive: !1 }),
          R.value.addEventListener("DOMMouseScroll", q),
          R.value.addEventListener("MozMousePixelScroll", G));
      });
    }),
      p(() => {
        J();
      });
    const Z = (function (e, t, o, n, l, s, i, r) {
      let u;
      return (c) => {
        if (null == c) return void r();
        a.cancel(u);
        const h = t.value,
          v = n.itemHeight;
        if ("number" == typeof c) i(c);
        else if (c && "object" == typeof c) {
          let t;
          const { align: n } = c;
          "index" in c
            ? ({ index: t } = c)
            : (t = h.findIndex((e) => l(e) === c.key));
          const { offset: r = 0 } = c,
            d = (c, p) => {
              if (c < 0 || !e.value) return;
              const f = e.value.clientHeight;
              let g = !1,
                m = p;
              if (f) {
                const s = p || n;
                let a = 0,
                  u = 0,
                  c = 0;
                const d = Math.min(h.length, t);
                for (let e = 0; e <= d; e += 1) {
                  const n = l(h[e]);
                  u = a;
                  const s = o.get(n);
                  (c = u + (void 0 === s ? v : s)),
                    (a = c),
                    e === t && void 0 === s && (g = !0);
                }
                const b = e.value.scrollTop;
                let M = null;
                switch (s) {
                  case "top":
                    M = u - r;
                    break;
                  case "bottom":
                    M = c - f + r;
                    break;
                  default:
                    u < b ? (m = "top") : c > b + f && (m = "bottom");
                }
                null !== M && M !== b && i(M);
              }
              u = a(() => {
                g && s(), d(c - 1, m);
              }, 2);
            };
          d(5);
        }
      };
    })(R, H, B, t, x, Y, I, () => {
      var e;
      null === (e = w.value) || void 0 === e || e.delayHidden();
    });
    n({ scrollTo: Z });
    const Q = g(() => {
      let o = null;
      return (
        t.height &&
          ((o = e(
            { [t.fullHeight ? "height" : "maxHeight"]: t.height + "px" },
            O
          )),
          l.value &&
            ((o.overflowY = "hidden"),
            i.scrollMoving && (o.pointerEvents = "none"))),
        o
      );
    });
    h(
      [() => j.start, () => j.end, H],
      () => {
        if (t.onVisibleChange) {
          const e = H.value.slice(j.start, j.end + 1);
          t.onVisibleChange(e, H.value);
        }
      },
      { flush: "post" }
    );
    return {
      state: i,
      mergedData: H,
      componentStyle: Q,
      onFallbackScroll: function (e) {
        var o;
        const { scrollTop: n } = e.currentTarget;
        n !== i.scrollTop && I(n),
          null === (o = t.onScroll) || void 0 === o || o.call(t, e);
      },
      onScrollBar: function (e) {
        I(e);
      },
      componentRef: R,
      useVirtual: l,
      calRes: j,
      collectHeight: Y,
      setInstance: N,
      sharedConfig: C,
      scrollBarRef: w,
      fillerInnerRef: T,
      delayHideScrollBar: () => {
        var e;
        null === (e = w.value) || void 0 === e || e.delayHidden();
      },
    };
  },
  render() {
    const o = e(e({}, this.$props), this.$attrs),
      {
        prefixCls: l = "rc-virtual-list",
        height: s,
        itemHeight: i,
        fullHeight: r,
        data: a,
        itemKey: u,
        virtual: c,
        component: h = "div",
        onScroll: v,
        children: d = this.$slots.default,
        style: p,
        class: f,
      } = o,
      g = C(o, [
        "prefixCls",
        "height",
        "itemHeight",
        "fullHeight",
        "data",
        "itemKey",
        "virtual",
        "component",
        "onScroll",
        "children",
        "style",
        "class",
      ]),
      m = n(l, f),
      { scrollTop: b } = this.state,
      { scrollHeight: M, offset: y, start: S, end: E } = this.calRes,
      {
        componentStyle: w,
        onFallbackScroll: L,
        onScrollBar: D,
        useVirtual: $,
        collectHeight: F,
        sharedConfig: O,
        setInstance: I,
        mergedData: N,
        delayHideScrollBar: Y,
      } = this;
    return t(
      "div",
      H({ style: e(e({}, p), { position: "relative" }), class: m }, g),
      [
        t(
          h,
          {
            class: `${l}-holder`,
            style: w,
            ref: "componentRef",
            onScroll: L,
            onMouseenter: Y,
          },
          {
            default: () => [
              t(
                R,
                {
                  prefixCls: l,
                  height: M,
                  offset: y,
                  onInnerResize: F,
                  ref: "fillerInnerRef",
                },
                {
                  default: () =>
                    (function (e, o, n, l, s, i) {
                      let { getKey: r } = i;
                      return e.slice(o, n + 1).map((e, n) => {
                        const i = s(e, o + n, {}),
                          a = r(e);
                        return t(
                          T,
                          { key: a, setRef: (t) => l(e, t) },
                          { default: () => [i] }
                        );
                      });
                    })(N, S, E, I, d, O),
                }
              ),
            ],
          }
        ),
        $ &&
          t(
            x,
            {
              ref: "scrollBarRef",
              prefixCls: l,
              scrollTop: b,
              height: s,
              scrollHeight: M,
              count: N.length,
              onScroll: D,
              onStartMove: () => {
                this.state.scrollMoving = !0;
              },
              onStopMove: () => {
                this.state.scrollMoving = !1;
              },
            },
            null
          ),
      ]
    );
  },
});
export { I as L, E as c };

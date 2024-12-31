import {
  hK as e,
  hL as t,
  r,
  at as a,
  aJ as n,
  aL as o,
  dx as l,
  hM as i,
  bT as s,
  bq as u,
  aK as c,
  c as v,
  as as p,
  hH as g,
  aR as f,
  b2 as d,
  aw as m,
  aT as w,
  aC as h,
  hN as b,
  aS as y,
  gH as C,
  aP as O,
  gE as x,
  hO as S,
  hP as M,
  ck as j,
  aU as P,
  c7 as k,
  aV as I,
  cb as N,
  aW as A,
  hQ as z,
  hR as $,
  hS as D,
  e7 as E,
  aX as L,
  b7 as T,
  eU as Y,
  b1 as R,
  f4 as B,
  gN as H,
  l as X,
  hT as G,
} from "./index-CcOpQHgp.js";
import { L as V } from "./LeftOutlined-CEGq77h1.js";
function U(e, t, r, a) {
  const n = t + r,
    o = (r - a) / 2;
  if (r > a) {
    if (t > 0) return { [e]: o };
    if (t < 0 && n < a) return { [e]: -o };
  } else if (t < 0 || n > a) return { [e]: t < 0 ? o : -o };
  return {};
}
var W = function (e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (r[a] = e[a]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var n = 0;
    for (a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (r[a[n]] = e[a[n]]);
  }
  return r;
};
const Z = Symbol("previewGroupContext"),
  Q = (e) => {
    s(Z, e);
  },
  F = () =>
    u(Z, {
      isPreviewGroup: c(!1),
      previewUrls: v(() => new Map()),
      setPreviewUrls: () => {},
      current: r(null),
      setCurrent: () => {},
      setShowPreview: () => {},
      setMousePosition: () => {},
      registerImage: null,
      rootClassName: "",
    }),
  J = p({
    compatConfig: { MODE: 3 },
    name: "PreviewGroup",
    inheritAttrs: !1,
    props: {
      previewPrefixCls: String,
      preview: { type: [Boolean, Object], default: !0 },
      icons: { type: Object, default: () => ({}) },
    },
    setup(e, t) {
      let { slots: n } = t;
      const o = v(() => {
          const t = {
            visible: void 0,
            onVisibleChange: () => {},
            getContainer: void 0,
            current: 0,
          };
          return "object" == typeof e.preview ? te(e.preview, t) : t;
        }),
        l = a(new Map()),
        i = r(),
        s = v(() => o.value.visible),
        u = v(() => o.value.getContainer),
        [p, b] = g(!!s.value, {
          value: s,
          onChange: (e, t) => {
            var r, a;
            null === (a = (r = o.value).onVisibleChange) ||
              void 0 === a ||
              a.call(r, e, t);
          },
        }),
        y = r(null),
        C = v(() => void 0 !== s.value),
        O = v(() => Array.from(l.keys())),
        x = v(() => O.value[o.value.current]),
        S = v(
          () =>
            new Map(
              Array.from(l)
                .filter((e) => {
                  let [, { canPreview: t }] = e;
                  return !!t;
                })
                .map((e) => {
                  let [t, { url: r }] = e;
                  return [t, r];
                })
            )
        ),
        M = (e) => {
          i.value = e;
        },
        j = (e) => {
          y.value = e;
        },
        P = (e) => {
          null == e || e.stopPropagation(), b(!1), j(null);
        };
      return (
        f(
          x,
          (e) => {
            M(e);
          },
          { immediate: !0, flush: "post" }
        ),
        d(
          () => {
            p.value && C.value && M(x.value);
          },
          { flush: "post" }
        ),
        Q({
          isPreviewGroup: c(!0),
          previewUrls: S,
          setPreviewUrls: function (e, t) {
            let r =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            l.set(e, { url: t, canPreview: r });
          },
          current: i,
          setCurrent: M,
          setShowPreview: b,
          setMousePosition: j,
          registerImage: function (e, t) {
            let r =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            return (
              l.set(e, { url: t, canPreview: r }),
              () => {
                l.delete(e);
              }
            );
          },
        }),
        () => {
          const t = W(o.value, []);
          return m(h, null, [
            n.default && n.default(),
            m(
              K,
              w(
                w({}, t),
                {},
                {
                  "ria-hidden": !p.value,
                  visible: p.value,
                  prefixCls: e.previewPrefixCls,
                  onClose: P,
                  mousePosition: y.value,
                  src: S.value.get(i.value),
                  icons: e.icons,
                  getContainer: u.value,
                }
              ),
              null
            ),
          ]);
        }
      );
    },
  }),
  _ = { x: 0, y: 0 },
  K = p({
    compatConfig: { MODE: 3 },
    name: "Preview",
    inheritAttrs: !1,
    props: n(n({}, b()), {
      src: String,
      alt: String,
      rootClassName: String,
      icons: { type: Object, default: () => ({}) },
    }),
    emits: ["close", "afterClose"],
    setup(e, t) {
      let { emit: s, attrs: u } = t;
      const {
          rotateLeft: p,
          rotateRight: g,
          zoomIn: d,
          zoomOut: h,
          close: b,
          left: P,
          right: k,
          flipX: I,
          flipY: N,
        } = a(e.icons),
        A = c(1),
        z = c(0),
        $ = a({ x: 1, y: 1 }),
        [D, E] = (function (e) {
          const t = r(null),
            i = a(n({}, e)),
            s = r([]);
          return (
            o(() => {
              t.value && l.cancel(t.value);
            }),
            [
              i,
              (e) => {
                null === t.value &&
                  ((s.value = []),
                  (t.value = l(() => {
                    let e;
                    s.value.forEach((t) => {
                      e = n(n({}, e), t);
                    }),
                      n(i, e),
                      (t.value = null);
                  }))),
                  s.value.push(e);
              },
            ]
          );
        })(_),
        L = () => s("close"),
        T = c(),
        Y = a({ originX: 0, originY: 0, deltaX: 0, deltaY: 0 }),
        R = c(!1),
        B = F(),
        { previewUrls: H, current: X, isPreviewGroup: G, setCurrent: V } = B,
        W = v(() => H.value.size),
        Z = v(() => Array.from(H.value.keys())),
        Q = v(() => Z.value.indexOf(X.value)),
        J = v(() => (G.value ? H.value.get(X.value) : e.src)),
        K = v(() => G.value && W.value > 1),
        q = c({ wheelDirection: 0 }),
        ee = () => {
          (A.value = 1),
            (z.value = 0),
            ($.x = 1),
            ($.y = 1),
            E(_),
            s("afterClose");
        },
        te = (e) => {
          e ? (A.value += 0.5) : A.value++, E(_);
        },
        re = (e) => {
          A.value > 1 && (e ? (A.value -= 0.5) : A.value--), E(_);
        },
        ae = (e) => {
          e.preventDefault(),
            e.stopPropagation(),
            Q.value > 0 && V(Z.value[Q.value - 1]);
        },
        ne = (e) => {
          e.preventDefault(),
            e.stopPropagation(),
            Q.value < W.value - 1 && V(Z.value[Q.value + 1]);
        },
        oe = y({ [`${e.prefixCls}-moving`]: R.value }),
        le = `${e.prefixCls}-operations-operation`,
        ie = `${e.prefixCls}-operations-icon`,
        se = [
          { icon: b, onClick: L, type: "close" },
          { icon: d, onClick: () => te(), type: "zoomIn" },
          {
            icon: h,
            onClick: () => re(),
            type: "zoomOut",
            disabled: v(() => 1 === A.value),
          },
          {
            icon: g,
            onClick: () => {
              z.value += 90;
            },
            type: "rotateRight",
          },
          {
            icon: p,
            onClick: () => {
              z.value -= 90;
            },
            type: "rotateLeft",
          },
          {
            icon: I,
            onClick: () => {
              $.x = -$.x;
            },
            type: "flipX",
          },
          {
            icon: N,
            onClick: () => {
              $.y = -$.y;
            },
            type: "flipY",
          },
        ],
        ue = () => {
          if (e.visible && R.value) {
            const e = T.value.offsetWidth * A.value,
              t = T.value.offsetHeight * A.value,
              { left: r, top: a } = M(T.value),
              o = z.value % 180 != 0;
            R.value = !1;
            const l = (function (e, t, r, a) {
              const { width: o, height: l } = i();
              let s = null;
              return (
                e <= o && t <= l
                  ? (s = { x: 0, y: 0 })
                  : (e > o || t > l) &&
                    (s = n(n({}, U("x", r, e, o)), U("y", a, t, l))),
                s
              );
            })(o ? t : e, o ? e : t, r, a);
            l && E(n({}, l));
          }
        },
        ce = (e) => {
          0 === e.button &&
            (e.preventDefault(),
            e.stopPropagation(),
            (Y.deltaX = e.pageX - D.x),
            (Y.deltaY = e.pageY - D.y),
            (Y.originX = D.x),
            (Y.originY = D.y),
            (R.value = !0));
        },
        ve = (t) => {
          e.visible &&
            R.value &&
            E({ x: t.pageX - Y.deltaX, y: t.pageY - Y.deltaY });
        },
        pe = (t) => {
          if (!e.visible) return;
          t.preventDefault();
          const r = t.deltaY;
          q.value = { wheelDirection: r };
        },
        ge = (t) => {
          e.visible &&
            K.value &&
            (t.preventDefault(),
            t.keyCode === j.LEFT
              ? Q.value > 0 && V(Z.value[Q.value - 1])
              : t.keyCode === j.RIGHT &&
                Q.value < W.value - 1 &&
                V(Z.value[Q.value + 1]));
        },
        fe = () => {
          e.visible &&
            (1 !== A.value && (A.value = 1),
            (D.x === _.x && D.y === _.y) || E(_));
        };
      let de = () => {};
      return (
        o(() => {
          f(
            [() => e.visible, R],
            () => {
              let e, t;
              de();
              const r = C(window, "mouseup", ue, !1),
                a = C(window, "mousemove", ve, !1),
                n = C(window, "wheel", pe, { passive: !1 }),
                o = C(window, "keydown", ge, !1);
              try {
                window.top !== window.self &&
                  ((e = C(window.top, "mouseup", ue, !1)),
                  (t = C(window.top, "mousemove", ve, !1)));
              } catch (l) {}
              de = () => {
                r.remove(),
                  a.remove(),
                  n.remove(),
                  o.remove(),
                  e && e.remove(),
                  t && t.remove();
              };
            },
            { flush: "post", immediate: !0 }
          ),
            f([q], () => {
              const { wheelDirection: e } = q.value;
              e > 0 ? re(!0) : e < 0 && te(!0);
            });
        }),
        O(() => {
          de();
        }),
        () => {
          const { visible: t, prefixCls: r, rootClassName: a } = e;
          return m(
            S,
            w(
              w({}, u),
              {},
              {
                transitionName: e.transitionName,
                maskTransitionName: e.maskTransitionName,
                closable: !1,
                keyboard: !0,
                prefixCls: r,
                onClose: L,
                afterClose: ee,
                visible: t,
                wrapClassName: oe,
                rootClassName: a,
                getContainer: e.getContainer,
              }
            ),
            {
              default: () => [
                m("div", { class: [`${e.prefixCls}-operations-wrapper`, a] }, [
                  m("ul", { class: `${e.prefixCls}-operations` }, [
                    se.map((t) => {
                      let { icon: r, onClick: a, type: n, disabled: o } = t;
                      return m(
                        "li",
                        {
                          class: y(le, {
                            [`${e.prefixCls}-operations-operation-disabled`]:
                              o && (null == o ? void 0 : o.value),
                          }),
                          onClick: a,
                          key: n,
                        },
                        [x(r, { class: ie })]
                      );
                    }),
                  ]),
                ]),
                m(
                  "div",
                  {
                    class: `${e.prefixCls}-img-wrapper`,
                    style: { transform: `translate3d(${D.x}px, ${D.y}px, 0)` },
                  },
                  [
                    m(
                      "img",
                      {
                        onMousedown: ce,
                        onDblclick: fe,
                        ref: T,
                        class: `${e.prefixCls}-img`,
                        src: J.value,
                        alt: e.alt,
                        style: {
                          transform: `scale3d(${$.x * A.value}, ${
                            $.y * A.value
                          }, 1) rotate(${z.value}deg)`,
                        },
                      },
                      null
                    ),
                  ]
                ),
                K.value &&
                  m(
                    "div",
                    {
                      class: y(`${e.prefixCls}-switch-left`, {
                        [`${e.prefixCls}-switch-left-disabled`]: Q.value <= 0,
                      }),
                      onClick: ae,
                    },
                    [P]
                  ),
                K.value &&
                  m(
                    "div",
                    {
                      class: y(`${e.prefixCls}-switch-right`, {
                        [`${e.prefixCls}-switch-right-disabled`]:
                          Q.value >= W.value - 1,
                      }),
                      onClick: ne,
                    },
                    [k]
                  ),
              ],
            }
          );
        }
      );
    },
  });
var q = function (e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (r[a] = e[a]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var n = 0;
    for (a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (r[a[n]] = e[a[n]]);
  }
  return r;
};
const ee = () => ({
    src: String,
    wrapperClassName: String,
    wrapperStyle: { type: Object, default: void 0 },
    rootClassName: String,
    prefixCls: String,
    previewPrefixCls: String,
    previewMask: { type: [Boolean, Function], default: void 0 },
    placeholder: P.any,
    fallback: String,
    preview: { type: [Boolean, Object], default: !0 },
    onClick: { type: Function },
    onError: { type: Function },
  }),
  te = (e, t) => {
    const r = n({}, e);
    return (
      Object.keys(t).forEach((a) => {
        void 0 === e[a] && (r[a] = t[a]);
      }),
      r
    );
  };
let re = 0;
const ae = p({
  compatConfig: { MODE: 3 },
  name: "VcImage",
  inheritAttrs: !1,
  props: ee(),
  emits: ["click", "error"],
  setup(a, l) {
    let { attrs: i, slots: s, emit: u } = l;
    const c = v(() => a.prefixCls),
      p = v(() => `${c.value}-preview`),
      d = v(() => {
        const e = {
          visible: void 0,
          onVisibleChange: () => {},
          getContainer: void 0,
        };
        return "object" == typeof a.preview ? te(a.preview, e) : e;
      }),
      b = v(() => {
        var e;
        return null !== (e = d.value.src) && void 0 !== e ? e : a.src;
      }),
      C = v(() => (a.placeholder && !0 !== a.placeholder) || s.placeholder),
      x = v(() => d.value.visible),
      S = v(() => d.value.getContainer),
      j = v(() => void 0 !== x.value),
      [P, k] = g(!!x.value, {
        value: x,
        onChange: (e, t) => {
          var r, a;
          null === (a = (r = d.value).onVisibleChange) ||
            void 0 === a ||
            a.call(r, e, t);
        },
      }),
      I = r(C.value ? "loading" : "normal");
    f(
      () => a.src,
      () => {
        I.value = C.value ? "loading" : "normal";
      }
    );
    const N = r(null),
      A = v(() => "error" === I.value),
      z = F(),
      {
        isPreviewGroup: $,
        setCurrent: D,
        setShowPreview: E,
        setMousePosition: L,
        registerImage: T,
      } = z,
      Y = r(re++),
      R = v(() => a.preview && !A.value),
      B = () => {
        I.value = "normal";
      },
      H = (e) => {
        (I.value = "error"), u("error", e);
      },
      X = (e) => {
        if (!j.value) {
          const { left: t, top: r } = M(e.target);
          $.value
            ? (D(Y.value), L({ x: t, y: r }))
            : (N.value = { x: t, y: r });
        }
        $.value ? E(!0) : k(!0), u("click", e);
      },
      G = () => {
        k(!1), j.value || (N.value = null);
      },
      V = r(null);
    f(
      () => V,
      () => {
        "loading" === I.value &&
          V.value.complete &&
          (V.value.naturalWidth || V.value.naturalHeight) &&
          B();
      }
    );
    let U = () => {};
    o(() => {
      f(
        [b, R],
        () => {
          if ((U(), !$.value)) return () => {};
          (U = T(Y.value, b.value, R.value)), R.value || U();
        },
        { flush: "post", immediate: !0 }
      );
    }),
      O(() => {
        U();
      });
    const W = (r) => {
      return "number" == typeof (a = r) || (e(a) && "[object Number]" == t(a))
        ? r + "px"
        : r;
      var a;
    };
    return () => {
      const {
          prefixCls: e,
          wrapperClassName: t,
          fallback: r,
          src: o,
          placeholder: l,
          wrapperStyle: c,
          rootClassName: v,
        } = a,
        {
          width: g,
          height: f,
          crossorigin: C,
          decoding: O,
          alt: x,
          sizes: M,
          srcset: j,
          usemap: k,
          class: z,
          style: D,
        } = i,
        E = d.value,
        { icons: L, maskClassName: T } = E,
        Y = q(E, ["icons", "maskClassName"]),
        U = y(e, t, v, { [`${e}-error`]: A.value }),
        Z = A.value && r ? r : b.value,
        Q = {
          crossorigin: C,
          decoding: O,
          alt: x,
          sizes: M,
          srcset: j,
          usemap: k,
          width: g,
          height: f,
          class: y(`${e}-img`, { [`${e}-img-placeholder`]: !0 === l }, z),
          style: n({ height: W(f) }, D),
        };
      return m(h, null, [
        m(
          "div",
          {
            class: U,
            onClick: R.value
              ? X
              : (e) => {
                  u("click", e);
                },
            style: n({ width: W(g), height: W(f) }, c),
          },
          [
            m(
              "img",
              w(
                w(
                  w({}, Q),
                  A.value && r ? { src: r } : { onLoad: B, onError: H, src: o }
                ),
                {},
                { ref: V }
              ),
              null
            ),
            "loading" === I.value &&
              m("div", { "aria-hidden": "true", class: `${e}-placeholder` }, [
                l || (s.placeholder && s.placeholder()),
              ]),
            s.previewMask &&
              R.value &&
              m("div", { class: [`${e}-mask`, T] }, [s.previewMask()]),
          ]
        ),
        !$.value &&
          R.value &&
          m(
            K,
            w(
              w({}, Y),
              {},
              {
                "aria-hidden": !P.value,
                visible: P.value,
                prefixCls: p.value,
                onClose: G,
                mousePosition: N.value,
                src: Z,
                alt: x,
                getContainer: S.value,
                icons: L,
                rootClassName: v,
              }
            ),
            null
          ),
      ]);
    };
  },
});
ae.PreviewGroup = J;
const ne = ae;
var oe = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      { tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] },
      {
        tag: "path",
        attrs: {
          d: "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z",
        },
      },
    ],
  },
  name: "rotate-left",
  theme: "outlined",
};
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? Object(arguments[t]) : {},
      a = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols &&
      (a = a.concat(
        Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        })
      )),
      a.forEach(function (t) {
        ie(e, t, r[t]);
      });
  }
  return e;
}
function ie(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var se = function (e, t) {
  var r = le({}, e, t.attrs);
  return m(k, le({}, r, { icon: oe }), null);
};
(se.displayName = "RotateLeftOutlined"), (se.inheritAttrs = !1);
var ue = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      { tag: "defs", attrs: {}, children: [{ tag: "style", attrs: {} }] },
      {
        tag: "path",
        attrs: {
          d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z",
        },
      },
    ],
  },
  name: "rotate-right",
  theme: "outlined",
};
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? Object(arguments[t]) : {},
      a = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols &&
      (a = a.concat(
        Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        })
      )),
      a.forEach(function (t) {
        ve(e, t, r[t]);
      });
  }
  return e;
}
function ve(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var pe = function (e, t) {
  var r = ce({}, e, t.attrs);
  return m(k, ce({}, r, { icon: ue }), null);
};
(pe.displayName = "RotateRightOutlined"), (pe.inheritAttrs = !1);
var ge = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z",
        },
      },
    ],
  },
  name: "zoom-in",
  theme: "outlined",
};
function fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? Object(arguments[t]) : {},
      a = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols &&
      (a = a.concat(
        Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        })
      )),
      a.forEach(function (t) {
        de(e, t, r[t]);
      });
  }
  return e;
}
function de(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var me = function (e, t) {
  var r = fe({}, e, t.attrs);
  return m(k, fe({}, r, { icon: ge }), null);
};
(me.displayName = "ZoomInOutlined"), (me.inheritAttrs = !1);
var we = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z",
        },
      },
    ],
  },
  name: "zoom-out",
  theme: "outlined",
};
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? Object(arguments[t]) : {},
      a = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols &&
      (a = a.concat(
        Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        })
      )),
      a.forEach(function (t) {
        be(e, t, r[t]);
      });
  }
  return e;
}
function be(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var ye = function (e, t) {
  var r = he({}, e, t.attrs);
  return m(k, he({}, r, { icon: we }), null);
};
(ye.displayName = "ZoomOutOutlined"), (ye.inheritAttrs = !1);
var Ce = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",
        },
      },
    ],
  },
  name: "swap",
  theme: "outlined",
};
function Oe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? Object(arguments[t]) : {},
      a = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols &&
      (a = a.concat(
        Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        })
      )),
      a.forEach(function (t) {
        xe(e, t, r[t]);
      });
  }
  return e;
}
function xe(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var Se = function (e, t) {
  var r = Oe({}, e, t.attrs);
  return m(k, Oe({}, r, { icon: Ce }), null);
};
(Se.displayName = "SwapOutlined"), (Se.inheritAttrs = !1);
const Me = (e) => ({ position: e || "absolute", inset: 0 }),
  je = (e) => {
    const {
      iconCls: t,
      motionDurationSlow: r,
      paddingXXS: a,
      marginXXS: o,
      prefixCls: l,
    } = e;
    return {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      background: new N("#000").setAlpha(0.5).toRgbString(),
      cursor: "pointer",
      opacity: 0,
      transition: `opacity ${r}`,
      [`.${l}-mask-info`]: n(n({}, E), {
        padding: `0 ${a}px`,
        [t]: { marginInlineEnd: o, svg: { verticalAlign: "baseline" } },
      }),
    };
  },
  Pe = (e) => {
    const {
        previewCls: t,
        modalMaskBg: r,
        paddingSM: a,
        previewOperationColorDisabled: o,
        motionDurationSlow: l,
      } = e,
      i = new N(r).setAlpha(0.1),
      s = i.clone().setAlpha(0.2);
    return {
      [`${t}-operations`]: n(n({}, L(e)), {
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        color: e.previewOperationColor,
        listStyle: "none",
        background: i.toRgbString(),
        pointerEvents: "auto",
        "&-operation": {
          marginInlineStart: a,
          padding: a,
          cursor: "pointer",
          transition: `all ${l}`,
          userSelect: "none",
          "&:hover": { background: s.toRgbString() },
          "&-disabled": { color: o, pointerEvents: "none" },
          "&:last-of-type": { marginInlineStart: 0 },
        },
        "&-progress": {
          position: "absolute",
          left: { _skip_check_: !0, value: "50%" },
          transform: "translateX(-50%)",
        },
        "&-icon": { fontSize: e.previewOperationSize },
      }),
    };
  },
  ke = (e) => {
    const {
        modalMaskBg: t,
        iconCls: r,
        previewOperationColorDisabled: a,
        previewCls: n,
        zIndexPopup: o,
        motionDurationSlow: l,
      } = e,
      i = new N(t).setAlpha(0.1),
      s = i.clone().setAlpha(0.2);
    return {
      [`${n}-switch-left, ${n}-switch-right`]: {
        position: "fixed",
        insetBlockStart: "50%",
        zIndex: o + 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: e.imagePreviewSwitchSize,
        height: e.imagePreviewSwitchSize,
        marginTop: -e.imagePreviewSwitchSize / 2,
        color: e.previewOperationColor,
        background: i.toRgbString(),
        borderRadius: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        transition: `all ${l}`,
        pointerEvents: "auto",
        userSelect: "none",
        "&:hover": { background: s.toRgbString() },
        "&-disabled": {
          "&, &:hover": {
            color: a,
            background: "transparent",
            cursor: "not-allowed",
            [`> ${r}`]: { cursor: "not-allowed" },
          },
        },
        [`> ${r}`]: { fontSize: e.previewOperationSize },
      },
      [`${n}-switch-left`]: { insetInlineStart: e.marginSM },
      [`${n}-switch-right`]: { insetInlineEnd: e.marginSM },
    };
  },
  Ie = (e) => {
    const {
      motionEaseOut: t,
      previewCls: r,
      motionDurationSlow: a,
      componentCls: o,
    } = e;
    return [
      {
        [`${o}-preview-root`]: {
          [r]: { height: "100%", textAlign: "center", pointerEvents: "none" },
          [`${r}-body`]: n(n({}, Me()), { overflow: "hidden" }),
          [`${r}-img`]: {
            maxWidth: "100%",
            maxHeight: "100%",
            verticalAlign: "middle",
            transform: "scale3d(1, 1, 1)",
            cursor: "grab",
            transition: `transform ${a} ${t} 0s`,
            userSelect: "none",
            pointerEvents: "auto",
            "&-wrapper": n(n({}, Me()), {
              transition: `transform ${a} ${t} 0s`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&::before": {
                display: "inline-block",
                width: 1,
                height: "50%",
                marginInlineEnd: -1,
                content: '""',
              },
            }),
          },
          [`${r}-moving`]: {
            [`${r}-preview-img`]: {
              cursor: "grabbing",
              "&-wrapper": { transitionDuration: "0s" },
            },
          },
        },
      },
      { [`${o}-preview-root`]: { [`${r}-wrap`]: { zIndex: e.zIndexPopup } } },
      {
        [`${o}-preview-operations-wrapper`]: {
          position: "fixed",
          insetBlockStart: 0,
          insetInlineEnd: 0,
          zIndex: e.zIndexPopup + 1,
          width: "100%",
        },
        "&": [Pe(e), ke(e)],
      },
    ];
  },
  Ne = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        position: "relative",
        display: "inline-block",
        [`${t}-img`]: {
          width: "100%",
          height: "auto",
          verticalAlign: "middle",
        },
        [`${t}-img-placeholder`]: {
          backgroundColor: e.colorBgContainerDisabled,
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "30%",
        },
        [`${t}-mask`]: n({}, je(e)),
        [`${t}-mask:hover`]: { opacity: 1 },
        [`${t}-placeholder`]: n({}, Me()),
      },
    };
  },
  Ae = (e) => {
    const { previewCls: t } = e;
    return { [`${t}-root`]: $(e, "zoom"), "&": D(e, !0) };
  },
  ze = I(
    "Image",
    (e) => {
      const t = `${e.componentCls}-preview`,
        r = A(e, {
          previewCls: t,
          modalMaskBg: new N("#000").setAlpha(0.45).toRgbString(),
          imagePreviewSwitchSize: e.controlHeightLG,
        });
      return [Ne(r), Ie(r), z(A(r, { componentCls: t })), Ae(r)];
    },
    (e) => ({
      zIndexPopup: e.zIndexPopupBase + 80,
      previewOperationColor: new N(e.colorTextLightSolid).toRgbString(),
      previewOperationColorDisabled: new N(e.colorTextLightSolid)
        .setAlpha(0.25)
        .toRgbString(),
      previewOperationSize: 1.5 * e.fontSizeIcon,
    })
  ),
  $e = {
    rotateLeft: m(se, null, null),
    rotateRight: m(pe, null, null),
    zoomIn: m(me, null, null),
    zoomOut: m(ye, null, null),
    close: m(T, null, null),
    left: m(V, null, null),
    right: m(Y, null, null),
    flipX: m(Se, null, null),
    flipY: m(Se, { rotate: 90 }, null),
  },
  De = p({
    compatConfig: { MODE: 3 },
    name: "AImagePreviewGroup",
    inheritAttrs: !1,
    props: { previewPrefixCls: String, preview: H() },
    setup(e, t) {
      let { attrs: r, slots: a } = t;
      const { prefixCls: o, rootPrefixCls: l } = R("image", e),
        i = v(() => `${o.value}-preview`),
        [s, u] = ze(o),
        c = v(() => {
          const { preview: t } = e;
          if (!1 === t) return t;
          const r = "object" == typeof t ? t : {};
          return n(n({}, r), {
            rootClassName: u.value,
            transitionName: B(l.value, "zoom", r.transitionName),
            maskTransitionName: B(l.value, "fade", r.maskTransitionName),
          });
        });
      return () =>
        s(
          m(
            J,
            w(
              w({}, n(n({}, r), e)),
              {},
              { preview: c.value, icons: $e, previewPrefixCls: i.value }
            ),
            a
          )
        );
    },
  }),
  Ee = p({
    name: "AImage",
    inheritAttrs: !1,
    props: ee(),
    setup(e, t) {
      let { slots: r, attrs: a } = t;
      const {
          prefixCls: o,
          rootPrefixCls: l,
          configProvider: i,
        } = R("image", e),
        [s, u] = ze(o),
        c = v(() => {
          const { preview: t } = e;
          if (!1 === t) return t;
          const r = "object" == typeof t ? t : {};
          return n(n({ icons: $e }, r), {
            transitionName: B(l.value, "zoom", r.transitionName),
            maskTransitionName: B(l.value, "fade", r.maskTransitionName),
          });
        });
      return () => {
        var t, l;
        const v =
            (null ===
              (l =
                null === (t = i.locale) || void 0 === t ? void 0 : t.value) ||
            void 0 === l
              ? void 0
              : l.Image) || X.Image,
          p = () =>
            m("div", { class: `${o.value}-mask-info` }, [
              m(G, null, null),
              null == v ? void 0 : v.preview,
            ]),
          { previewMask: g = r.previewMask || p } = e;
        return s(
          m(
            ne,
            w(
              w({}, n(n(n({}, a), e), { prefixCls: o.value })),
              {},
              { preview: c.value, rootClassName: y(e.rootClassName, u.value) }
            ),
            n(n({}, r), { previewMask: "function" == typeof g ? g : null })
          )
        );
      };
    },
  });
(Ee.PreviewGroup = De),
  (Ee.install = function (e) {
    return (
      e.component(Ee.name, Ee),
      e.component(Ee.PreviewGroup.name, Ee.PreviewGroup),
      e
    );
  });
export { Ee as I };

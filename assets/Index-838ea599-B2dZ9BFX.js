import {
  fG as e,
  fH as n,
  fI as t,
  fJ as o,
  fK as r,
  fL as a,
  fM as i,
  fN as c,
  fO as l,
  fP as s,
  fQ as d,
  fR as u,
  fS as p,
  fT as v,
  fU as f,
  S as m,
  i as g,
  s as h,
  b,
  v as w,
  z as x,
  w as y,
  d as $,
  C as k,
  D as C,
  t as z,
  f as T,
  h as A,
  j as M,
  k as L,
  m as j,
  o as q,
  p as I,
  q as H,
  a0 as P,
  y as _,
  B as V,
  M as S,
  fV as D,
  a3 as B,
  e as E,
  Y as N,
  $ as F,
  fW as Z,
  fX as W,
  fY as G,
  fZ as O,
  ab as U,
  a5 as R,
  f_ as X,
  W as J,
  f$ as K,
  E as Y,
  T as Q,
  x as ee,
  g0 as ne,
  a6 as te,
  I as oe,
  g1 as re,
  g2 as ae,
  K as ie,
  X as ce,
  g3 as le,
  g4 as se,
  g5 as de,
  g6 as ue,
  g7 as pe,
  g8 as ve,
  N as fe,
  g9 as me,
  ga as ge,
  O as he,
  gb as be,
  gc as we,
  J as xe,
  R as ye,
  L as $e,
  ac as ke,
  gd as Ce,
  ge as ze,
  gf as Te,
  gg as Ae,
  gh as Me,
  gi as Le,
  an as je,
  gj as qe,
  gk as Ie,
  gl as He,
  gm as Pe,
  A as _e,
  gn as Ve,
  go as Se,
  gp as De,
  gq as Be,
  gr as Ee,
  gs as Ne,
  gt as Fe,
  gu as Ze,
} from "./index-CcOpQHgp.js";
var We = (function (n) {
    function t(e, t) {
      return n.call(this) || this;
    }
    return (
      e(t, n),
      (t.prototype.schedule = function (e, n) {
        return this;
      }),
      t
    );
  })(n),
  Ge = {
    setInterval: function (e, n) {
      for (var r = [], a = 2; a < arguments.length; a++)
        r[a - 2] = arguments[a];
      return setInterval.apply(void 0, t([e, n], o(r)));
    },
    clearInterval: function (e) {
      var n = Ge.delegate;
      return ((null == n ? void 0 : n.clearInterval) || clearInterval)(e);
    },
    delegate: void 0,
  },
  Oe = (function (n) {
    function t(e, t) {
      var o = n.call(this, e, t) || this;
      return (o.scheduler = e), (o.work = t), (o.pending = !1), o;
    }
    return (
      e(t, n),
      (t.prototype.schedule = function (e, n) {
        var t;
        if ((void 0 === n && (n = 0), this.closed)) return this;
        this.state = e;
        var o = this.id,
          r = this.scheduler;
        return (
          null != o && (this.id = this.recycleAsyncId(r, o, n)),
          (this.pending = !0),
          (this.delay = n),
          (this.id =
            null !== (t = this.id) && void 0 !== t
              ? t
              : this.requestAsyncId(r, this.id, n)),
          this
        );
      }),
      (t.prototype.requestAsyncId = function (e, n, t) {
        return (
          void 0 === t && (t = 0), Ge.setInterval(e.flush.bind(e, this), t)
        );
      }),
      (t.prototype.recycleAsyncId = function (e, n, t) {
        if (
          (void 0 === t && (t = 0),
          null != t && this.delay === t && !1 === this.pending)
        )
          return n;
        null != n && Ge.clearInterval(n);
      }),
      (t.prototype.execute = function (e, n) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var t = this._execute(e, n);
        if (t) return t;
        !1 === this.pending &&
          null != this.id &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (t.prototype._execute = function (e, n) {
        var t,
          o = !1;
        try {
          this.work(e);
        } catch (r) {
          (o = !0), (t = r || new Error("Scheduled action threw falsy error"));
        }
        if (o) return this.unsubscribe(), t;
      }),
      (t.prototype.unsubscribe = function () {
        if (!this.closed) {
          var e = this.id,
            t = this.scheduler,
            o = t.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            r(o, this),
            null != e && (this.id = this.recycleAsyncId(t, e, null)),
            (this.delay = null),
            n.prototype.unsubscribe.call(this);
        }
      }),
      t
    );
  })(We),
  Ue = (function () {
    function e(n, t) {
      void 0 === t && (t = e.now),
        (this.schedulerActionCtor = n),
        (this.now = t);
    }
    return (
      (e.prototype.schedule = function (e, n, t) {
        return (
          void 0 === n && (n = 0),
          new this.schedulerActionCtor(this, e).schedule(t, n)
        );
      }),
      (e.now = a.now),
      e
    );
  })(),
  Re = new ((function (n) {
    function t(e, t) {
      void 0 === t && (t = Ue.now);
      var o = n.call(this, e, t) || this;
      return (o.actions = []), (o._active = !1), o;
    }
    return (
      e(t, n),
      (t.prototype.flush = function (e) {
        var n = this.actions;
        if (this._active) n.push(e);
        else {
          var t;
          this._active = !0;
          do {
            if ((t = e.execute(e.state, e.delay))) break;
          } while ((e = n.shift()));
          if (((this._active = !1), t)) {
            for (; (e = n.shift()); ) e.unsubscribe();
            throw t;
          }
        }
      }),
      t
    );
  })(Ue))(Oe);
var Xe =
    '<svg width="100%" height="24" viewBox="0 5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10H7Z" fill="currentColor"/></svg>',
  Je =
    '\n  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor"/>\n  </svg>\n';
function Ke(e) {
  b(
    e,
    "svelte-1uqued6",
    "select.svelte-1uqued6{border:none;background-image:none;background-color:transparent;-webkit-appearance:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;appearance:none;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));transition:width 250ms ease-in-out;background-repeat:no-repeat, repeat;background-position:right 0px top 0px, 0 0;scrollbar-width:none;-ms-overflow-style:none;padding:0 14px 0 0;white-space:nowrap;text-overflow:ellipsis}select.minimized_ac.svelte-1uqued6{min-width:80px;max-width:80px}select.maximized_ac.svelte-1uqued6{width:auto !important}select.svelte-1uqued6:focus{outline:none}span.switching-placeholder.svelte-1uqued6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));min-width:80px;max-width:80px;padding:0 8px 0 4px}"
  );
}
function Ye(e, n, t) {
  const o = e.slice();
  return (o[15] = n[t]), o;
}
function Qe(e) {
  let n;
  function t(e, n) {
    return e[7] ? nn : en;
  }
  let o = t(e),
    r = o(e);
  return {
    c() {
      r.c(), (n = E());
    },
    m(e, t) {
      r.m(e, t), $(e, n, t);
    },
    p(e, a) {
      o === (o = t(e)) && r
        ? r.p(e, a)
        : (r.d(1), (r = o(e)), r && (r.c(), r.m(n.parentNode, n)));
    },
    d(e) {
      r.d(e), e && L(n);
    },
  };
}
function en(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l = !Pe(e[6].chains[0], e[2]),
    s = [],
    d = new Map(),
    u = l && tn(e),
    p = e[2];
  const v = (e) => e[15].id;
  for (let f = 0; f < p.length; f += 1) {
    let n = Ye(e, p, f),
      t = v(n);
    d.set(t, (s[f] = on(t, n)));
  }
  return {
    c() {
      (n = w("select")), u && u.c(), (t = E());
      for (let e = 0; e < s.length; e += 1) s[e].c();
      y(
        n,
        "class",
        (o =
          _e(`flex justify-center items-center pointer ${e[4]}`) +
          " svelte-1uqued6")
      ),
        y(
          n,
          "style",
          (a = `\n        color: var(${
            e[1]
          },\n        var(--account-center-network-selector-color, var(--gray-500)));\n        background-image: url('data:image/svg+xml;utf8,${
            e[0]
          }'); ${e[3] ? "font-weight: 600;" : ""}`)
        );
    },
    m(o, r) {
      $(o, n, r), u && u.m(n, null), k(n, t);
      for (let e = 0; e < s.length; e += 1) s[e] && s[e].m(n, null);
      Ve(n, e[6].chains[0].id),
        e[13](n),
        i || ((c = C(n, "change", e[10])), (i = !0));
    },
    p(e, i) {
      68 & i && (l = !Pe(e[6].chains[0], e[2])),
        l
          ? u
            ? u.p(e, i)
            : ((u = tn(e)), u.c(), u.m(n, t))
          : u && (u.d(1), (u = null)),
        4 & i &&
          ((p = e[2]), (s = ee(s, i, v, 1, e, p, d, n, Se, on, null, Ye))),
        16 & i &&
          o !==
            (o =
              _e(`flex justify-center items-center pointer ${e[4]}`) +
              " svelte-1uqued6") &&
          y(n, "class", o),
        64 & i && r !== (r = e[6].chains[0].id) && Ve(n, e[6].chains[0].id),
        11 & i &&
          a !==
            (a = `\n        color: var(${
              e[1]
            },\n        var(--account-center-network-selector-color, var(--gray-500)));\n        background-image: url('data:image/svg+xml;utf8,${
              e[0]
            }'); ${e[3] ? "font-weight: 600;" : ""}`) &&
          y(n, "style", a);
    },
    d(t) {
      t && L(n), u && u.d();
      for (let e = 0; e < s.length; e += 1) s[e].d();
      e[13](null), (i = !1), c();
    },
  };
}
function nn(e) {
  let n, t, o, r;
  return {
    c() {
      (n = w("span")),
        (t = R("switching...")),
        y(
          n,
          "class",
          (o = _e(`switching-placeholder ${e[4]}`) + " svelte-1uqued6")
        ),
        y(
          n,
          "style",
          (r = `\n        color: var(${e[1]},\n        var(--account-center-network-selector-color, var(--gray-500)));\n      `)
        );
    },
    m(e, o) {
      $(e, n, o), k(n, t);
    },
    p(e, t) {
      16 & t &&
        o !== (o = _e(`switching-placeholder ${e[4]}`) + " svelte-1uqued6") &&
        y(n, "class", o),
        2 & t &&
          r !==
            (r = `\n        color: var(${e[1]},\n        var(--account-center-network-selector-color, var(--gray-500)));\n      `) &&
          y(n, "style", r);
    },
    d(e) {
      e && L(n);
    },
  };
}
function tn(e) {
  let n,
    t,
    o,
    r = (De[e[6].chains[0].id] || "unrecognized") + "";
  return {
    c() {
      (n = w("option")),
        (t = R(r)),
        (n.__value = o = e[6].chains[0].id),
        (n.value = n.__value);
    },
    m(e, o) {
      $(e, n, o), k(n, t);
    },
    p(e, a) {
      64 & a &&
        r !== (r = (De[e[6].chains[0].id] || "unrecognized") + "") &&
        te(t, r),
        64 & a &&
          o !== (o = e[6].chains[0].id) &&
          ((n.__value = o), (n.value = n.__value));
    },
    d(e) {
      e && L(n);
    },
  };
}
function on(e, n) {
  let t,
    o,
    r,
    a = (n[15].label || De[n[15].id] || n[15].id) + "";
  return {
    key: e,
    first: null,
    c() {
      (t = w("option")),
        (o = R(a)),
        (t.__value = r = n[15].id),
        (t.value = t.__value),
        (this.first = t);
    },
    m(e, n) {
      $(e, t, n), k(t, o);
    },
    p(e, i) {
      (n = e),
        4 & i &&
          a !== (a = (n[15].label || De[n[15].id] || n[15].id) + "") &&
          te(o, a),
        4 & i &&
          r !== (r = n[15].id) &&
          ((t.__value = r), (t.value = t.__value));
    },
    d(e) {
      e && L(t);
    },
  };
}
function rn(e) {
  let n,
    t = e[6] && Qe(e);
  return {
    c() {
      t && t.c(), (n = E());
    },
    m(e, o) {
      t && t.m(e, o), $(e, n, o);
    },
    p(e, [o]) {
      e[6]
        ? t
          ? t.p(e, o)
          : ((t = Qe(e)), t.c(), t.m(n.parentNode, n))
        : t && (t.d(1), (t = null));
    },
    i: B,
    o: B,
    d(e) {
      t && t.d(e), e && L(n);
    },
  };
}
function an(e, n, t) {
  let o, r, a, m;
  H(e, N, (e) => t(12, (a = e)));
  let { selectIcon: g = Xe } = n,
    { colorVar: h } = n,
    { chains: b } = n,
    { bold: w = !1 } = n,
    { parentCSSId: x = "" } = n;
  const y = new Ce(!1);
  let $;
  H(e, y, (e) => t(7, (m = e)));
  const k = (function () {
    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
    var t = i(e),
      o = c(e, Infinity),
      r = e;
    return r.length ? (1 === r.length ? s(r[0]) : d(o)(u(r, t))) : l;
  })(
    N,
    y.pipe(
      ((T = 1),
      f(function (e, n) {
        return T <= n;
      }))
    )
  ).pipe(
    ((C = 50),
    void 0 === z && (z = Re),
    p(function (e, n) {
      var t = null,
        o = null,
        r = null,
        a = function () {
          if (t) {
            t.unsubscribe(), (t = null);
            var e = o;
            (o = null), n.next(e);
          }
        };
      function i() {
        var e = r + C,
          o = z.now();
        if (o < e) return (t = this.schedule(void 0, e - o)), void n.add(t);
        a();
      }
      e.subscribe(
        v(
          n,
          function (e) {
            (o = e), (r = z.now()), t || ((t = z.schedule(i, C)), n.add(t));
          },
          function () {
            a(), n.complete();
          },
          void 0,
          function () {
            o = t = null;
          }
        )
      );
    })),
    ze(
      (e, n) =>
        "boolean" != typeof e &&
        "boolean" != typeof n &&
        e[0] &&
        n[0] &&
        e[0].chains[0].id === n[0].chains[0].id
    )
  );
  var C, z, T;
  return (
    H(e, k, (e) => t(11, (r = e))),
    (e.$$set = (e) => {
      "selectIcon" in e && t(0, (g = e.selectIcon)),
        "colorVar" in e && t(1, (h = e.colorVar)),
        "chains" in e && t(2, (b = e.chains)),
        "bold" in e && t(3, (w = e.bold)),
        "parentCSSId" in e && t(4, (x = e.parentCSSId));
    }),
    (e.$$.update = () => {
      4096 & e.$$.dirty && t(6, ([o] = a), o),
        2048 & e.$$.dirty &&
          r &&
          (function () {
            if (!$) return;
            let e = document.createElement("option");
            e.textContent = $.selectedOptions[0].textContent;
            let n = document.createElement("select");
            (n.style.visibility = "hidden"),
              (n.style.position = "fixed"),
              n.appendChild(e),
              $.after(n),
              t(5, ($.style.width = n.clientWidth - 22 + "px"), $),
              n.remove();
          })();
    }),
    [
      g,
      h,
      b,
      w,
      x,
      $,
      o,
      m,
      y,
      k,
      async function () {
        const e = $.selectedOptions[0].value;
        e !== o.chains[0].id &&
          (y.next(!0),
          await Me({ chainId: e, chainNamespace: "evm", wallet: o.label }),
          y.next(!1));
      },
      r,
      a,
      function (e) {
        le[e ? "unshift" : "push"](() => {
          ($ = e), t(5, $), t(2, b), t(6, o), t(12, a);
        });
      },
    ]
  );
}
class cn extends m {
  constructor(e) {
    super(),
      g(
        this,
        e,
        an,
        rn,
        h,
        { selectIcon: 0, colorVar: 1, chains: 2, bold: 3, parentCSSId: 4 },
        Ke
      );
  }
}
var ln =
  '\n  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="currentColor"/>\n  </svg>\n';
function sn(e) {
  b(
    e,
    "svelte-hb2n95",
    ".container.svelte-hb2n95.svelte-hb2n95{display:flex;align-items:center;gap:0.5rem;cursor:pointer;position:relative;z-index:0;width:100%;padding:0.25rem;margin-bottom:0.25rem;border-radius:12px;transition:background-color 150ms ease-in-out}.container.svelte-hb2n95.svelte-hb2n95::before{content:'';display:block;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;background:var(--action-color);border-radius:12px;z-index:-1;opacity:0}.container.svelte-hb2n95.svelte-hb2n95:hover::before{opacity:0.2}.container.svelte-hb2n95:hover .balance.svelte-hb2n95,.container.svelte-hb2n95:hover .elipsis-container.svelte-hb2n95{opacity:1}.container.svelte-hb2n95:hover .balance.svelte-hb2n95{color:var(--account-center-maximized-balance-color, inherit)}.container.primary.svelte-hb2n95.svelte-hb2n95:hover{background-color:var(\n      --account-center-maximized-account-section-background-hover\n    )}.account-details.svelte-hb2n95.svelte-hb2n95{flex:1 1;display:flex;gap:inherit;overflow:hidden}.address-domain.svelte-hb2n95.svelte-hb2n95{flex:1 0 auto;max-width:70%;white-space:nowrap;font-weight:600;color:var(--account-center-maximized-address-color, inherit);overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.address-domain.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.balance.svelte-hb2n95.svelte-hb2n95{flex:1 1 auto;max-width:70%;white-space:nowrap;text-align:end;opacity:0.4;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.balance.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.elipsis-container.svelte-hb2n95.svelte-hb2n95{flex:0;padding:0.25rem;border-radius:24px;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;background-color:transparent;opacity:0.4}.elipsis-container.svelte-hb2n95.svelte-hb2n95:hover{color:var(--text-color)}.elipsis-container.active.svelte-hb2n95.svelte-hb2n95{color:var(--text-color)}.elipsis.svelte-hb2n95.svelte-hb2n95{width:24px}.menu.svelte-hb2n95.svelte-hb2n95{background:var(--onboard-white, var(--white));border:1px solid var(--onboard-gray-100, var(--gray-100));border-radius:8px;list-style-type:none;right:0.25rem;top:2.25rem;margin:0;padding:0;border:none;overflow:hidden;z-index:1}.menu.svelte-hb2n95 li.svelte-hb2n95{color:var(--onboard-primary-500, var(--primary-500));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));padding:12px 16px;background:var(--onboard-white, var(--white));transition:background-color 150ms ease-in-out;cursor:pointer}.menu.svelte-hb2n95 li.svelte-hb2n95:hover{background:var(--onboard-primary-200, var(--primary-200))}"
  );
}
function dn(e, n, t) {
  const o = e.slice();
  return (
    (o[14] = n[t].address),
    (o[15] = n[t].ens),
    (o[16] = n[t].uns),
    (o[17] = n[t].balance),
    (o[19] = t),
    o
  );
}
function un(e) {
  let n, t, o;
  return (
    (t = new ue({ props: { size: 14 } })),
    {
      c() {
        (n = w("div")),
          _(t.$$.fragment),
          X(n, "right", "-5px"),
          X(n, "bottom", "-5px"),
          y(n, "class", "drop-shadow absolute");
      },
      m(e, r) {
        $(e, n, r), V(t, n, null), (o = !0);
      },
      i(e) {
        o || (z(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        A(t.$$.fragment, e), (o = !1);
      },
      d(e) {
        e && L(n), S(t);
      },
    }
  );
}
function pn(e) {
  let n,
    t,
    o,
    r = hn(e[17]) + "";
  return {
    c() {
      (n = w("div")), (t = R(r)), y(n, "class", "balance svelte-hb2n95");
    },
    m(e, o) {
      $(e, n, o), k(n, t);
    },
    p(e, n) {
      1 & n && r !== (r = hn(e[17]) + "") && te(t, r);
    },
    i(e) {
      e &&
        (o ||
          oe(() => {
            (o = xe(n, ye, {})), o.start();
          }));
    },
    o: B,
    d(e) {
      e && L(n);
    },
  };
}
function vn(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l,
    s,
    d,
    u,
    p,
    v,
    f =
      e[4]("accountCenter.addAccount", {
        default: e[2].accountCenter.addAccount,
      }) + "",
    m =
      e[4]("accountCenter.disconnectWallet", {
        default: e[2].accountCenter.disconnectWallet,
      }) + "",
    g = e[2].accountCenter.copyAddress + "",
    h = !(e[1] && 0 === e[19]) && fn(e);
  function b() {
    return e[13](e[15], e[16], e[14]);
  }
  return {
    c() {
      (n = w("ul")),
        (t = w("li")),
        (o = R(f)),
        (r = x()),
        h && h.c(),
        (a = x()),
        (i = w("li")),
        (c = R(m)),
        (l = x()),
        (s = w("li")),
        (d = R(g)),
        y(t, "class", "svelte-hb2n95"),
        y(i, "class", "svelte-hb2n95"),
        y(s, "class", "svelte-hb2n95"),
        y(n, "class", "menu absolute svelte-hb2n95");
    },
    m(u, f) {
      $(u, n, f),
        k(n, t),
        k(t, o),
        k(n, r),
        h && h.m(n, null),
        k(n, a),
        k(n, i),
        k(i, c),
        k(n, l),
        k(n, s),
        k(s, d),
        p ||
          ((v = [
            C(t, "click", Y(e[10])),
            C(i, "click", Y(e[12])),
            C(s, "click", Y(b)),
          ]),
          (p = !0));
    },
    p(t, r) {
      (e = t),
        20 & r &&
          f !==
            (f =
              e[4]("accountCenter.addAccount", {
                default: e[2].accountCenter.addAccount,
              }) + "") &&
          te(o, f),
        e[1] && 0 === e[19]
          ? h && (h.d(1), (h = null))
          : h
          ? h.p(e, r)
          : ((h = fn(e)), h.c(), h.m(n, a)),
        20 & r &&
          m !==
            (m =
              e[4]("accountCenter.disconnectWallet", {
                default: e[2].accountCenter.disconnectWallet,
              }) + "") &&
          te(c, m),
        4 & r && g !== (g = e[2].accountCenter.copyAddress + "") && te(d, g);
    },
    i(e) {
      e &&
        (u ||
          oe(() => {
            (u = xe(n, ye, {})), u.start();
          }));
    },
    o: B,
    d(e) {
      e && L(n), h && h.d(), (p = !1), ce(v);
    },
  };
}
function fn(e) {
  let n,
    t,
    o,
    r,
    a =
      e[4]("accountCenter.setPrimaryAccount", {
        default: e[2].accountCenter.setPrimaryAccount,
      }) + "";
  function i() {
    return e[11](e[14]);
  }
  return {
    c() {
      (n = w("li")), (t = R(a)), y(n, "class", "svelte-hb2n95");
    },
    m(e, a) {
      $(e, n, a), k(n, t), o || ((r = C(n, "click", Y(i))), (o = !0));
    },
    p(n, o) {
      (e = n),
        20 & o &&
          a !==
            (a =
              e[4]("accountCenter.setPrimaryAccount", {
                default: e[2].accountCenter.setPrimaryAccount,
              }) + "") &&
          te(t, a);
    },
    d(e) {
      e && L(n), (o = !1), r();
    },
  };
}
function mn(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l,
    s,
    d,
    u,
    p,
    v,
    f,
    m,
    g,
    h,
    b,
    j = (e[15] ? we(e[15].name) : e[16] ? we(e[16].name) : ke(e[14])) + "";
  r = new O({
    props: {
      size: 32,
      padding: 4,
      background: "custom",
      color: "#EFF1FC",
      customBackgroundColor:
        e[1] && 0 === e[19]
          ? "rgba(24, 206, 102, 0.2)"
          : "rgba(235, 235, 237, 0.1)",
      border: e[1] && 0 === e[19] ? "green" : "gray",
      radius: 8,
      icon: e[0].icon,
    },
  });
  let q = e[1] && 0 === e[19] && un(),
    I = e[17] && pn(e);
  function H() {
    return e[8](e[14]);
  }
  function P() {
    return e[9](e[14]);
  }
  let D = e[3] === e[14] && vn(e);
  return {
    c() {
      (n = w("div")),
        (t = w("div")),
        (o = w("div")),
        _(r.$$.fragment),
        (a = x()),
        q && q.c(),
        (i = x()),
        (c = w("div")),
        (l = w("div")),
        (s = R(j)),
        (d = x()),
        I && I.c(),
        (u = x()),
        (p = w("div")),
        (v = w("div")),
        (f = x()),
        D && D.c(),
        (m = x()),
        y(o, "class", "flex items-center relative"),
        y(l, "class", "address-domain svelte-hb2n95"),
        y(c, "class", "account-details svelte-hb2n95"),
        y(
          v,
          "class",
          "elipsis pointer flex items-center justify-center relative svelte-hb2n95"
        ),
        y(p, "class", "elipsis-container svelte-hb2n95"),
        J(p, "active", e[3] === e[14]),
        y(t, "class", "container svelte-hb2n95"),
        J(t, "primary", e[1] && 0 === e[19]),
        y(n, "class", "relative");
    },
    m(e, w) {
      $(e, n, w),
        k(n, t),
        k(t, o),
        V(r, o, null),
        k(o, a),
        q && q.m(o, null),
        k(t, i),
        k(t, c),
        k(c, l),
        k(l, s),
        k(c, d),
        I && I.m(c, null),
        k(t, u),
        k(t, p),
        k(p, v),
        (v.innerHTML = ln),
        k(n, f),
        D && D.m(n, null),
        k(n, m),
        (g = !0),
        h || ((b = [C(v, "click", Y(H)), C(t, "click", P)]), (h = !0));
    },
    p(a, i) {
      e = a;
      const l = {};
      2 & i &&
        (l.customBackgroundColor =
          e[1] && 0 === e[19]
            ? "rgba(24, 206, 102, 0.2)"
            : "rgba(235, 235, 237, 0.1)"),
        2 & i && (l.border = e[1] && 0 === e[19] ? "green" : "gray"),
        1 & i && (l.icon = e[0].icon),
        r.$set(l),
        e[1] && 0 === e[19]
          ? q
            ? 2 & i && z(q, 1)
            : ((q = un()), q.c(), z(q, 1), q.m(o, null))
          : q &&
            (T(),
            A(q, 1, 1, () => {
              q = null;
            }),
            M()),
        (!g || 1 & i) &&
          j !==
            (j =
              (e[15] ? we(e[15].name) : e[16] ? we(e[16].name) : ke(e[14])) +
              "") &&
          te(s, j),
        e[17]
          ? I
            ? (I.p(e, i), 1 & i && z(I, 1))
            : ((I = pn(e)), I.c(), z(I, 1), I.m(c, null))
          : I && (I.d(1), (I = null)),
        (!g || 9 & i) && J(p, "active", e[3] === e[14]),
        (!g || 2 & i) && J(t, "primary", e[1] && 0 === e[19]),
        e[3] === e[14]
          ? D
            ? (D.p(e, i), 9 & i && z(D, 1))
            : ((D = vn(e)), D.c(), z(D, 1), D.m(n, m))
          : D && (D.d(1), (D = null));
    },
    i(e) {
      g || (z(r.$$.fragment, e), z(q), z(I), z(D), (g = !0));
    },
    o(e) {
      A(r.$$.fragment, e), A(q), (g = !1);
    },
    d(e) {
      e && L(n), S(r), q && q.d(), I && I.d(), D && D.d(), (h = !1), ce(b);
    },
  };
}
function gn(e) {
  let n,
    t,
    o = e[0].accounts,
    r = [];
  for (let i = 0; i < o.length; i += 1) r[i] = mn(dn(e, o, i));
  const a = (e) =>
    A(r[e], 1, 1, () => {
      r[e] = null;
    });
  return {
    c() {
      for (let e = 0; e < r.length; e += 1) r[e].c();
      n = E();
    },
    m(e, o) {
      for (let n = 0; n < r.length; n += 1) r[n] && r[n].m(e, o);
      $(e, n, o), (t = !0);
    },
    p(e, [t]) {
      if (127 & t) {
        let i;
        for (o = e[0].accounts, i = 0; i < o.length; i += 1) {
          const a = dn(e, o, i);
          r[i]
            ? (r[i].p(a, t), z(r[i], 1))
            : ((r[i] = mn(a)), r[i].c(), z(r[i], 1), r[i].m(n.parentNode, n));
        }
        for (T(), i = o.length; i < r.length; i += 1) a(i);
        M();
      }
    },
    i(e) {
      if (!t) {
        for (let e = 0; e < o.length; e += 1) z(r[e]);
        t = !0;
      }
    },
    o(e) {
      r = r.filter(Boolean);
      for (let n = 0; n < r.length; n += 1) A(r[n]);
      t = !1;
    },
    d(e) {
      Te(r, e), e && L(n);
    },
  };
}
function hn(e) {
  const [n] = Object.keys(e);
  return `${e[n].length > 7 ? e[n].slice(0, 7) : e[n]} ${n}`;
}
function bn(e, n, t) {
  let o;
  H(e, F, (e) => t(4, (o = e)));
  let { wallet: r } = n,
    { primary: a } = n;
  function i() {
    t(3, (c = ""));
  }
  let c = "";
  async function l(e) {
    try {
      await Le(e.provider);
    } catch (n) {
      const { code: t } = n;
      (t !== je.UNSUPPORTED_METHOD && t !== je.DOES_NOT_EXIST) ||
        qe.next({ inProgress: !1, actionRequired: e.label });
    }
  }
  function s() {
    t(2, (G.accountCenter.copyAddress = "Copied Successfully"), G),
      setTimeout(i, 500),
      setTimeout(() => {
        t(2, (G.accountCenter.copyAddress = "Copy Wallet address"), G);
      }, 700);
  }
  return (
    (e.$$set = (e) => {
      "wallet" in e && t(0, (r = e.wallet)),
        "primary" in e && t(1, (a = e.primary));
    }),
    [
      r,
      a,
      G,
      c,
      o,
      l,
      s,
      i,
      (e) => t(3, (c = c === e ? "" : e)),
      (e) => Ie(r, e),
      () => {
        t(3, (c = "")), l(r);
      },
      (e) => {
        t(3, (c = "")), Ie(r, e);
      },
      () => {
        t(3, (c = "")), ve({ label: r.label });
      },
      (e, n, t) => {
        He(e ? e.name : n ? n.name : t).then(() => {
          s();
        });
      },
    ]
  );
}
class wn extends m {
  constructor(e) {
    super(), g(this, e, bn, gn, h, { wallet: 0, primary: 1, hideMenu: 7 }, sn);
  }
  get hideMenu() {
    return this.$$.ctx[7];
  }
}
var xn =
    '\n  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>\n  </svg>\n',
  yn =
    '\n  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>\n  </svg>\n',
  $n =
    '<svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="grey"/></svg>',
  kn =
    '<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.99998 17.3125C5.05553 16.8264 3.45831 15.6979 2.20831 13.9271C0.958313 12.1562 0.333313 10.2153 0.333313 8.10417V3.14583L6.99998 0.645833L13.6666 3.14583V8.10417C13.6666 10.2153 13.0416 12.1562 11.7916 13.9271C10.5416 15.6979 8.94442 16.8264 6.99998 17.3125ZM5.12498 12.3333H8.87498C9.05553 12.3333 9.20484 12.2743 9.3229 12.1562C9.44095 12.0382 9.49998 11.8889 9.49998 11.7083V8.79167C9.49998 8.61111 9.44095 8.46181 9.3229 8.34375C9.20484 8.22569 9.05553 8.16667 8.87498 8.16667H8.66665V7.33333C8.66665 6.875 8.50345 6.48264 8.17706 6.15625C7.85067 5.82986 7.45831 5.66667 6.99998 5.66667C6.54165 5.66667 6.14928 5.82986 5.8229 6.15625C5.49651 6.48264 5.33331 6.875 5.33331 7.33333V8.16667H5.12498C4.94442 8.16667 4.79512 8.22569 4.67706 8.34375C4.55901 8.46181 4.49998 8.61111 4.49998 8.79167V11.7083C4.49998 11.8889 4.55901 12.0382 4.67706 12.1562C4.79512 12.2743 4.94442 12.3333 5.12498 12.3333ZM5.95831 8.16667V7.33333C5.95831 7.05556 6.06248 6.82292 6.27081 6.63542C6.47915 6.44792 6.7222 6.35417 6.99998 6.35417C7.27776 6.35417 7.52081 6.44792 7.72915 6.63542C7.93748 6.82292 8.04165 7.05556 8.04165 7.33333V8.16667H5.95831Z" fill="#929BED"/>\n</svg>\n';
function Cn(e) {
  b(
    e,
    "svelte-1ubxcdp",
    ".content.svelte-1ubxcdp{padding:1rem;width:300px;font-family:var(--onboard-font-family-normal, var(--font-family-normal));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:24px}.icon-container.svelte-1ubxcdp{width:3rem;height:3rem;background:var(--onboard-warning-100, var(--warning-100));border-radius:24px;padding:12px;color:var(--onboard-warning-500, var(--warning-500))}h4.svelte-1ubxcdp{margin:1.5rem 0 0.5rem 0;font-weight:600}p.svelte-1ubxcdp{margin:0;font-weight:400}button.svelte-1ubxcdp{margin-top:1.5rem;width:50%;font-weight:600}.right.svelte-1ubxcdp{margin-left:0.5rem;width:60%}"
  );
}
function zn(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l,
    s,
    d,
    u,
    p,
    v,
    f,
    m,
    g,
    h,
    b =
      e[2]("modals.confirmDisconnectAll.heading", {
        default: G.modals.confirmDisconnectAll.heading,
      }) + "",
    z = e[2]("modals.confirmDisconnectAll.description") + "",
    T =
      e[2]("modals.confirmDisconnectAll.cancel", {
        default: G.modals.confirmDisconnectAll.cancel,
      }) + "",
    A =
      e[2]("modals.confirmDisconnectAll.confirm", {
        default: G.modals.confirmDisconnectAll.confirm,
      }) + "";
  return {
    c() {
      (n = w("div")),
        (t = w("div")),
        (o = x()),
        (r = w("h4")),
        (a = R(b)),
        (i = x()),
        (c = w("p")),
        (l = R(z)),
        (s = x()),
        (d = w("div")),
        (u = w("button")),
        (p = R(T)),
        (v = x()),
        (f = w("button")),
        (m = R(A)),
        y(
          t,
          "class",
          "icon-container flex justify-center items-center svelte-1ubxcdp"
        ),
        y(r, "class", "svelte-1ubxcdp"),
        y(c, "class", "svelte-1ubxcdp"),
        y(u, "class", "button-neutral-solid-b rounded svelte-1ubxcdp"),
        y(f, "class", "right button-neutral-solid rounded svelte-1ubxcdp"),
        y(d, "class", "flex justify-between items-center w-100"),
        y(n, "class", "content svelte-1ubxcdp");
    },
    m(b, w) {
      $(b, n, w),
        k(n, t),
        (t.innerHTML = Je),
        k(n, o),
        k(n, r),
        k(r, a),
        k(n, i),
        k(n, c),
        k(c, l),
        k(n, s),
        k(n, d),
        k(d, u),
        k(u, p),
        k(d, v),
        k(d, f),
        k(f, m),
        g ||
          ((h = [
            C(u, "click", function () {
              Q(e[1]) && e[1].apply(this, arguments);
            }),
            C(f, "click", function () {
              Q(e[0]) && e[0].apply(this, arguments);
            }),
          ]),
          (g = !0));
    },
    p(n, t) {
      (e = n),
        4 & t &&
          b !==
            (b =
              e[2]("modals.confirmDisconnectAll.heading", {
                default: G.modals.confirmDisconnectAll.heading,
              }) + "") &&
          te(a, b),
        4 & t &&
          z !== (z = e[2]("modals.confirmDisconnectAll.description") + "") &&
          te(l, z),
        4 & t &&
          T !==
            (T =
              e[2]("modals.confirmDisconnectAll.cancel", {
                default: G.modals.confirmDisconnectAll.cancel,
              }) + "") &&
          te(p, T),
        4 & t &&
          A !==
            (A =
              e[2]("modals.confirmDisconnectAll.confirm", {
                default: G.modals.confirmDisconnectAll.confirm,
              }) + "") &&
          te(m, A);
    },
    d(e) {
      e && L(n), (g = !1), ce(h);
    },
  };
}
function Tn(e) {
  let n, t;
  return (
    (n = new Ae({
      props: { close: e[1], $$slots: { default: [zn] }, $$scope: { ctx: e } },
    })),
    {
      c() {
        _(n.$$.fragment);
      },
      m(e, o) {
        V(n, e, o), (t = !0);
      },
      p(e, [t]) {
        const o = {};
        2 & t && (o.close = e[1]),
          15 & t && (o.$$scope = { dirty: t, ctx: e }),
          n.$set(o);
      },
      i(e) {
        t || (z(n.$$.fragment, e), (t = !0));
      },
      o(e) {
        A(n.$$.fragment, e), (t = !1);
      },
      d(e) {
        S(n, e);
      },
    }
  );
}
function An(e, n, t) {
  let o;
  H(e, F, (e) => t(2, (o = e)));
  let { onConfirm: r } = n,
    { onClose: a } = n;
  return (
    (e.$$set = (e) => {
      "onConfirm" in e && t(0, (r = e.onConfirm)),
        "onClose" in e && t(1, (a = e.onClose));
    }),
    [r, a, o]
  );
}
class Mn extends m {
  constructor(e) {
    super(), g(this, e, An, Tn, h, { onConfirm: 0, onClose: 1 }, Cn);
  }
}
function Ln(e) {
  b(
    e,
    "svelte-ruodf3",
    ".content.svelte-ruodf3{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--action-color:var(--w3o-action-color, var(--primary-500));font-size:1rem;line-height:1.5rem;display:flex;flex-flow:column;gap:1.5rem;padding:1rem;max-width:320px;background:var(--background-color);color:var(--text-color)}.icon-container.svelte-ruodf3{position:relative;overflow:hidden;width:3rem;height:3rem;border-radius:24px;padding:0.75rem;background:none}.icon-container.svelte-ruodf3::before{content:'';position:absolute;height:100%;width:100%;opacity:0.2;background:var(--action-color)}.text-container.svelte-ruodf3{display:flex;flex-flow:column;gap:0.5rem;padding:0 0.5rem}.actions-container.svelte-ruodf3{display:flex;flex-flow:row nowrap;gap:1rem}.heading.svelte-ruodf3{font-weight:600}button.svelte-ruodf3{font-weight:600}button.primary.svelte-ruodf3{background:var(--action-color)}"
  );
}
function jn(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l,
    s,
    d,
    u,
    p,
    v,
    f,
    m,
    g,
    h,
    b,
    z,
    T,
    A,
    M =
      e[3]("modals.confirmTransactionProtection.heading", {
        default: G.modals.confirmTransactionProtection.heading,
      }) + "",
    j = e[3]("modals.confirmTransactionProtection.description") + "",
    q =
      e[3]("modals.confirmTransactionProtection.link", {
        default: G.modals.confirmTransactionProtection.link,
      }) + "",
    I =
      e[3]("modals.confirmTransactionProtection.dismiss", {
        default: G.modals.confirmTransactionProtection.dismiss,
      }) + "",
    H =
      e[3]("modals.confirmTransactionProtection.enable", {
        default: G.modals.confirmTransactionProtection.enable,
      }) + "";
  return {
    c() {
      (n = w("div")),
        (t = w("div")),
        (o = x()),
        (r = w("div")),
        (a = w("div")),
        (i = R(M)),
        (c = x()),
        (l = w("div")),
        (s = R(j)),
        (d = x()),
        (u = w("a")),
        (p = R(q)),
        (v = x()),
        (f = w("div")),
        (m = w("button")),
        (g = R(I)),
        (h = x()),
        (b = w("button")),
        (z = R(H)),
        y(
          t,
          "class",
          "icon-container flex justify-center items-center svelte-ruodf3"
        ),
        y(a, "class", "heading svelte-ruodf3"),
        y(u, "href", e[2]),
        y(u, "target", "_blank"),
        y(u, "rel", "noreferrer noopener"),
        y(u, "class", "no-link"),
        y(r, "class", "text-container svelte-ruodf3"),
        y(m, "class", "button-neutral-solid-b svelte-ruodf3"),
        y(b, "class", "button-neutral-solid rounded primary svelte-ruodf3"),
        y(f, "class", "actions-container svelte-ruodf3"),
        y(n, "class", "content svelte-ruodf3");
    },
    m(w, x) {
      $(w, n, x),
        k(n, t),
        (t.innerHTML = kn),
        k(n, o),
        k(n, r),
        k(r, a),
        k(a, i),
        k(r, c),
        k(r, l),
        k(l, s),
        k(r, d),
        k(r, u),
        k(u, p),
        k(n, v),
        k(n, f),
        k(f, m),
        k(m, g),
        k(f, h),
        k(f, b),
        k(b, z),
        T ||
          ((A = [
            C(m, "click", function () {
              Q(e[1]) && e[1].apply(this, arguments);
            }),
            C(b, "click", function () {
              Q(e[0]) && e[0].apply(this, arguments);
            }),
          ]),
          (T = !0));
    },
    p(n, t) {
      (e = n),
        8 & t &&
          M !==
            (M =
              e[3]("modals.confirmTransactionProtection.heading", {
                default: G.modals.confirmTransactionProtection.heading,
              }) + "") &&
          te(i, M),
        8 & t &&
          j !==
            (j =
              e[3]("modals.confirmTransactionProtection.description") + "") &&
          te(s, j),
        8 & t &&
          q !==
            (q =
              e[3]("modals.confirmTransactionProtection.link", {
                default: G.modals.confirmTransactionProtection.link,
              }) + "") &&
          te(p, q),
        4 & t && y(u, "href", e[2]),
        8 & t &&
          I !==
            (I =
              e[3]("modals.confirmTransactionProtection.dismiss", {
                default: G.modals.confirmTransactionProtection.dismiss,
              }) + "") &&
          te(g, I),
        8 & t &&
          H !==
            (H =
              e[3]("modals.confirmTransactionProtection.enable", {
                default: G.modals.confirmTransactionProtection.enable,
              }) + "") &&
          te(z, H);
    },
    d(e) {
      e && L(n), (T = !1), ce(A);
    },
  };
}
function qn(e) {
  let n, t;
  return (
    (n = new Ae({
      props: { close: e[1], $$slots: { default: [jn] }, $$scope: { ctx: e } },
    })),
    {
      c() {
        _(n.$$.fragment);
      },
      m(e, o) {
        V(n, e, o), (t = !0);
      },
      p(e, [t]) {
        const o = {};
        2 & t && (o.close = e[1]),
          31 & t && (o.$$scope = { dirty: t, ctx: e }),
          n.$set(o);
      },
      i(e) {
        t || (z(n.$$.fragment, e), (t = !0));
      },
      o(e) {
        A(n.$$.fragment, e), (t = !1);
      },
      d(e) {
        S(n, e);
      },
    }
  );
}
function In(e, n, t) {
  let o;
  H(e, F, (e) => t(3, (o = e)));
  let { onEnable: r } = n,
    { onDismiss: a } = n,
    { infoLink: i } = n;
  return (
    (e.$$set = (e) => {
      "onEnable" in e && t(0, (r = e.onEnable)),
        "onDismiss" in e && t(1, (a = e.onDismiss)),
        "infoLink" in e && t(2, (i = e.infoLink));
    }),
    [r, a, i, o]
  );
}
class Hn extends m {
  constructor(e) {
    super(),
      g(this, e, In, qn, h, { onEnable: 0, onDismiss: 1, infoLink: 2 }, Ln);
  }
}
function Pn(e) {
  b(
    e,
    "svelte-b848yl",
    ".secondary-token-container.svelte-b848yl.svelte-b848yl{width:100%}table.svelte-b848yl.svelte-b848yl{width:100%}tr.svelte-b848yl.svelte-b848yl{padding:0.25rem 1rem;line-height:1rem;border-bottom:1px solid var(--border-color);display:flex;flex-direction:row;align-items:flex-start;gap:1rem}thead.svelte-b848yl .secondary-token-table-header.svelte-b848yl{text-align:inherit;font-size:var(--onboard-font-size-7, var(--font-size-7))}.token-icon.svelte-b848yl.svelte-b848yl{width:30%;font-weight:700;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}.icon-name-container.svelte-b848yl.svelte-b848yl{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:0.5rem}.icon.svelte-b848yl.svelte-b848yl{width:1rem;height:1rem}img.svelte-b848yl.svelte-b848yl{height:100%;width:100%}.token-balance.svelte-b848yl.svelte-b848yl{width:70%;font-weight:200;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}"
  );
}
function _n(e, n, t) {
  const o = e.slice();
  return (o[1] = n[t]), o;
}
function Vn(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l,
    s,
    d = e[1].name.toUpperCase() + "",
    u =
      (e[1].balance.length > 7 ? e[1].balance.slice(0, 7) : e[1].balance) + "";
  function p(e, n) {
    return e[1].icon ? Dn : Sn;
  }
  let v = p(e),
    f = v(e);
  return {
    c() {
      (n = w("tr")),
        (t = w("td")),
        (o = w("div")),
        f.c(),
        (r = x()),
        (a = R(d)),
        (i = x()),
        (c = w("td")),
        (l = R(u)),
        (s = x()),
        y(o, "class", "icon-name-container svelte-b848yl"),
        y(t, "class", "token-icon svelte-b848yl"),
        y(c, "class", "token-balance svelte-b848yl"),
        y(n, "class", "token-row svelte-b848yl");
    },
    m(e, d) {
      $(e, n, d),
        k(n, t),
        k(t, o),
        f.m(o, null),
        k(o, r),
        k(o, a),
        k(n, i),
        k(n, c),
        k(c, l),
        k(n, s);
    },
    p(e, n) {
      v === (v = p(e)) && f
        ? f.p(e, n)
        : (f.d(1), (f = v(e)), f && (f.c(), f.m(o, r))),
        1 & n && d !== (d = e[1].name.toUpperCase() + "") && te(a, d),
        1 & n &&
          u !==
            (u =
              (e[1].balance.length > 7
                ? e[1].balance.slice(0, 7)
                : e[1].balance) + "") &&
          te(l, u);
    },
    d(e) {
      e && L(n), f.d();
    },
  };
}
function Sn(e) {
  let n;
  return {
    c() {
      (n = w("div")), y(n, "class", "icon svelte-b848yl");
    },
    m(e, t) {
      $(e, n, t);
    },
    p: B,
    d(e) {
      e && L(n);
    },
  };
}
function Dn(e) {
  let n,
    t,
    o = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Zn,
      then: En,
      catch: Bn,
      value: 4,
    };
  return (
    Be((t = e[1].icon), o),
    {
      c() {
        (n = E()), o.block.c();
      },
      m(e, t) {
        $(e, n, t),
          o.block.m(e, (o.anchor = t)),
          (o.mount = () => n.parentNode),
          (o.anchor = n);
      },
      p(n, r) {
        (e = n),
          (o.ctx = e),
          (1 & r && t !== (t = e[1].icon) && Be(t, o)) || Ee(o, e, r);
      },
      d(e) {
        e && L(n), o.block.d(e), (o.token = null), (o = null);
      },
    }
  );
}
function Bn(e) {
  return { c: B, m: B, p: B, i: B, o: B, d: B };
}
function En(e) {
  let n, t, o;
  function r(e, n) {
    return 1 & n && (t = null), null == t && (t = !!Ne(e[4])), t ? Fn : Nn;
  }
  let a = r(e, -1),
    i = a(e);
  return {
    c() {
      (n = w("div")), i.c(), y(n, "class", "icon svelte-b848yl");
    },
    m(e, t) {
      $(e, n, t), i.m(n, null);
    },
    p(e, t) {
      a === (a = r(e, t)) && i
        ? i.p(e, t)
        : (i.d(1), (i = a(e)), i && (i.c(), i.m(n, null)));
    },
    i(e) {
      e &&
        (o ||
          oe(() => {
            (o = xe(n, ye, {})), o.start();
          }));
    },
    o: B,
    d(e) {
      e && L(n), i.d();
    },
  };
}
function Nn(e) {
  let n, t;
  return {
    c() {
      (n = w("img")),
        Fe(n.src, (t = e[4])) || y(n, "src", t),
        y(n, "alt", "logo"),
        y(n, "class", "svelte-b848yl");
    },
    m(e, t) {
      $(e, n, t);
    },
    p(e, o) {
      1 & o && !Fe(n.src, (t = e[4])) && y(n, "src", t);
    },
    d(e) {
      e && L(n);
    },
  };
}
function Fn(e) {
  let n,
    t,
    o = e[4] + "";
  return {
    c() {
      (n = new Ze(!1)), (t = E()), (n.a = t);
    },
    m(e, r) {
      n.m(o, e, r), $(e, t, r);
    },
    p(e, t) {
      1 & t && o !== (o = e[4] + "") && n.p(o);
    },
    d(e) {
      e && L(t), e && n.d();
    },
  };
}
function Zn(e) {
  return { c: B, m: B, p: B, i: B, o: B, d: B };
}
function Wn(e) {
  let n,
    t = e[1] && e[1].name && e[1].balance && Vn(e);
  return {
    c() {
      t && t.c(), (n = E());
    },
    m(e, o) {
      t && t.m(e, o), $(e, n, o);
    },
    p(e, o) {
      e[1] && e[1].name && e[1].balance
        ? t
          ? t.p(e, o)
          : ((t = Vn(e)), t.c(), t.m(n.parentNode, n))
        : t && (t.d(1), (t = null));
    },
    d(e) {
      t && t.d(e), e && L(n);
    },
  };
}
function Gn(e) {
  let n,
    t,
    o,
    r,
    a,
    i = e[0],
    c = [];
  for (let l = 0; l < i.length; l += 1) c[l] = Wn(_n(e, i, l));
  return {
    c() {
      (n = w("div")),
        (t = w("table")),
        (o = w("thead")),
        (o.innerHTML =
          '<tr class="svelte-b848yl"><th colspan="3" class="secondary-token-table-header svelte-b848yl">Token Balances:</th></tr>'),
        (r = x()),
        (a = w("tbody"));
      for (let e = 0; e < c.length; e += 1) c[e].c();
      y(o, "class", "svelte-b848yl"),
        y(t, "class", "balance-change-table table-radius svelte-b848yl"),
        y(n, "class", "secondary-token-container svelte-b848yl");
    },
    m(e, i) {
      $(e, n, i), k(n, t), k(t, o), k(t, r), k(t, a);
      for (let n = 0; n < c.length; n += 1) c[n] && c[n].m(a, null);
    },
    p(e, [n]) {
      if (1 & n) {
        let t;
        for (i = e[0], t = 0; t < i.length; t += 1) {
          const o = _n(e, i, t);
          c[t] ? c[t].p(o, n) : ((c[t] = Wn(o)), c[t].c(), c[t].m(a, null));
        }
        for (; t < c.length; t += 1) c[t].d(1);
        c.length = i.length;
      }
    },
    i: B,
    o: B,
    d(e) {
      e && L(n), Te(c, e);
    },
  };
}
function On(e, n, t) {
  let { secondaryTokens: o } = n;
  return (
    (e.$$set = (e) => {
      "secondaryTokens" in e && t(0, (o = e.secondaryTokens));
    }),
    [o]
  );
}
class Un extends m {
  constructor(e) {
    super(), g(this, e, On, Gn, h, { secondaryTokens: 0 }, Pn);
  }
}
function Rn(e) {
  b(
    e,
    "svelte-177u10y",
    ".outer-container.svelte-177u10y{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--border-color:var(--w3o-border-color, var(--gray-500));--action-color:var(--w3o-action-color, var(--primary-500));--border-radius:var(--w3o-border-radius, 1rem);--account-center-network-selector-color:var(--text-color, white);width:100%;overflow:hidden;pointer-events:auto;border:1px solid transparent;background:var(\n      --account-center-maximized-upper-background,\n      var(--background-color)\n    );border-color:var(--border-color);border-radius:var(--account-center-border-radius, var(--border-radius))}.wallets-section.svelte-177u10y{width:100%;color:var(--text-color, var(--gray-100));background:var(--background-color, var(--gray-700))}.p5.svelte-177u10y{padding:var(--onboard-spacing-5, var(--spacing-5))}.wallets.svelte-177u10y{width:100%;margin-bottom:0.5rem}.actions.svelte-177u10y{color:var(\n      --account-center-maximized-upper-action-color,\n      var(--action-color)\n    );padding-left:2px}.action-container.svelte-177u10y{padding:0.25rem 12px 0.25rem 0.5rem;border-radius:0.5rem;transition:background-color 150ms ease-in-out}.action-container.svelte-177u10y:hover{background-color:var(\n      --account-center-maximized-upper-action-background-hover,\n      rgba(146, 155, 237, 0.2)\n    )}.plus-icon.svelte-177u10y{width:20px}.arrow-forward.svelte-177u10y{width:20px}.mt.svelte-177u10y{margin-top:0.25rem}.action-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));margin-left:0.5rem}.background-blue.svelte-177u10y{background:var(\n      --account-center-maximized-network-section-background,\n      var(--onboard-primary-100, var(--primary-100))\n    )}.background-gray.svelte-177u10y{background:var(--onboard-gray-100, var(--gray-100))}.background-yellow.svelte-177u10y{background:var(--onboard-warning-100, var(--warning-100))}.network-container.svelte-177u10y{background:var(--background-color);border-top:1px solid var(--border-color);width:100%;display:flex;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-radius:var(\n      --account-center-border-radius,\n      var(--onboard-border-radius-3, var(--border-radius-3))\n    );color:var(\n      --account-center-maximized-network-text-color,\n      var(--account-center-maximized-network-section, inherit)\n    )}.network-section.svelte-177u10y{flex-direction:row;align-items:flex-start;padding:0px;gap:16px}.network-selector-container.svelte-177u10y{width:100%}.protect.svelte-177u10y{flex-direction:row;padding:0.25rem 0.375rem 0;gap:0.375rem;width:100%}.shield.svelte-177u10y{width:20px;height:20px;display:flex;justify-content:center}.protect-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(\n      --account-center-maximized-upper-action-color,\n      var(--action-color)\n    );line-height:1.75rem;display:flex;align-items:center}.network-selector-container.svelte-177u10y{margin-left:1rem;width:100%}.network-selector-label.svelte-177u10y{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3))}.app-info-container.svelte-177u10y{color:var(--text-color, var(--gray-700));background:var(\n      --account-center-maximized-info-section-background-color,\n      var(\n        --account-center-maximized-info-section,\n        var(--background-color, #fff)\n      )\n    );border-top:1px solid var(--border-color);border-radius:var(--account-center-border-radius, inherit);display:flex;flex-direction:column;align-items:flex-start;padding:0px}.app-info-header.svelte-177u10y{width:100%;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-bottom:1px solid var(--border-color)}.app-icon-name.svelte-177u10y{display:flex;align-items:center;flex-direction:row;gap:0.75rem}.app-name.svelte-177u10y{font-size:1rem;font-weight:600;line-height:1rem;margin-bottom:0.25rem;color:var(--account-center-maximized-app-name-color, inherit)}.app-description.svelte-177u10y{margin:0;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);display:flex;flex-direction:row;align-items:flex-start;padding:0px 0.25rem;gap:1rem}.app-info.svelte-177u10y{width:100%;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);border-bottom:1px solid var(--border-color);display:flex;flex-direction:column;align-items:flex-start;padding:0.5rem 1rem;gap:0.25rem}.app-info-heading.svelte-177u10y{font-weight:700;color:var(--account-center-maximized-app-info-color, inherit)}.w100.svelte-177u10y{width:100%}a.svelte-177u10y{font-weight:700}.powered-by-container.svelte-177u10y{color:var(--text-color);padding:0.75rem}"
  );
}
function Xn(e, n, t) {
  const o = e.slice();
  return (o[29] = n[t]), (o[31] = t), o;
}
function Jn(e) {
  let n, t;
  return (
    (n = new Mn({ props: { onClose: e[22], onConfirm: e[13] } })),
    {
      c() {
        _(n.$$.fragment);
      },
      m(e, o) {
        V(n, e, o), (t = !0);
      },
      p(e, t) {
        const o = {};
        4 & t[0] && (o.onClose = e[22]), n.$set(o);
      },
      i(e) {
        t || (z(n.$$.fragment, e), (t = !0));
      },
      o(e) {
        A(n.$$.fragment, e), (t = !1);
      },
      d(e) {
        S(n, e);
      },
    }
  );
}
function Kn(e) {
  let n, t;
  return (
    (n = new Hn({
      props: {
        onDismiss: e[23],
        onEnable: e[24],
        infoLink: e[9].transactionProtectionInfoLink || W,
      },
    })),
    {
      c() {
        _(n.$$.fragment);
      },
      m(e, o) {
        V(n, e, o), (t = !0);
      },
      p(e, t) {
        const o = {};
        16 & t[0] && (o.onDismiss = e[23]),
          512 & t[0] && (o.infoLink = e[9].transactionProtectionInfoLink || W),
          n.$set(o);
      },
      i(e) {
        t || (z(n.$$.fragment, e), (t = !0));
      },
      o(e) {
        A(n.$$.fragment, e), (t = !1);
      },
      d(e) {
        S(n, e);
      },
    }
  );
}
function Yn(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l,
    s,
    d,
    u,
    p,
    v,
    f,
    m,
    g,
    h,
    b,
    j,
    q,
    I,
    H,
    P,
    D,
    B,
    E,
    N,
    F,
    Z,
    W,
    le = [],
    se = new Map(),
    de =
      e[10]("accountCenter.currentNetwork", {
        default: G.accountCenter.currentNetwork,
      }) + "",
    ue = e[1];
  const pe = (e) => e[29].label;
  for (let w = 0; w < ue.length; w += 1) {
    let n = Xn(e, ue, w),
      t = pe(n);
    se.set(t, (le[w] = Qn(t, n)));
  }
  let ve =
    "desktop" === e[17].type &&
    (function (e) {
      let n,
        t,
        o,
        r,
        a,
        i,
        c,
        l,
        s,
        d,
        u,
        p,
        v,
        f =
          e[10]("accountCenter.connectAnotherWallet", {
            default: G.accountCenter.connectAnotherWallet,
          }) + "",
        m =
          e[10]("accountCenter.disconnectAllWallets", {
            default: G.accountCenter.disconnectAllWallets,
          }) + "";
      return {
        c() {
          (n = w("div")),
            (t = w("div")),
            (o = x()),
            (r = w("span")),
            (a = R(f)),
            (i = x()),
            (c = w("div")),
            (l = w("div")),
            (s = x()),
            (d = w("span")),
            (u = R(m)),
            y(
              t,
              "class",
              "plus-icon flex items-center justify-center svelte-177u10y"
            ),
            y(r, "class", "action-text svelte-177u10y"),
            y(
              n,
              "class",
              "action-container flex items-center pointer svelte-177u10y"
            ),
            y(
              l,
              "class",
              "arrow-forward flex items-center justify-center svelte-177u10y"
            ),
            y(d, "class", "action-text svelte-177u10y"),
            y(
              c,
              "class",
              "action-container flex items-center mt pointer svelte-177u10y"
            );
        },
        m(f, m) {
          $(f, n, m),
            k(n, t),
            (t.innerHTML = xn),
            k(n, o),
            k(n, r),
            k(r, a),
            $(f, i, m),
            $(f, c, m),
            k(c, l),
            (l.innerHTML = yn),
            k(c, s),
            k(c, d),
            k(d, u),
            p || ((v = [C(n, "click", e[26]), C(c, "click", e[27])]), (p = !0));
        },
        p(e, n) {
          1024 & n[0] &&
            f !==
              (f =
                e[10]("accountCenter.connectAnotherWallet", {
                  default: G.accountCenter.connectAnotherWallet,
                }) + "") &&
            te(a, f),
            1024 & n[0] &&
              m !==
                (m =
                  e[10]("accountCenter.disconnectAllWallets", {
                    default: G.accountCenter.disconnectAllWallets,
                  }) + "") &&
              te(u, m);
        },
        d(e) {
          e && L(n), e && L(i), e && L(c), (p = !1), ce(v);
        },
      };
    })(e);
  u = new O({
    props: {
      size: 32,
      padding: 4,
      background: "custom",
      color: e[5] ? (e[5].icon ? void 0 : "#EFF1FC") : "#FFAF00",
      customBackgroundColor: e[5]
        ? e[5].color || (e[7] && e[7].color) || U.color
        : "#FFE7B3",
      border: "transparent",
      radius: 8,
      icon: e[5] ? e[5].icon || (e[7] && e[7].icon) || U.icon : Je,
    },
  });
  let fe = e[5] && et();
  j = new cn({
    props: {
      chains: e[14],
      colorVar: "--account-center-maximized-network-selector-color",
      bold: !0,
      selectIcon: $n,
      parentCSSId: "maximized_ac",
    },
  });
  let me =
      !e[9].hideTransactionProtectionBtn &&
      (e[6] || (e[5] && e[5].protectedRpcUrl)) &&
      nt(e),
    ge = e[11] && tt(e),
    he = e[8] && e[8].length && it(e);
  return {
    c() {
      (n = w("div")), (t = w("div")), (o = w("div")), (r = w("div"));
      for (let e = 0; e < le.length; e += 1) le[e].c();
      (a = x()),
        (i = w("div")),
        ve && ve.c(),
        (c = x()),
        (l = w("div")),
        (s = w("div")),
        (d = w("div")),
        _(u.$$.fragment),
        (p = x()),
        fe && fe.c(),
        (v = x()),
        (f = w("div")),
        (m = w("div")),
        (g = R(de)),
        (h = x()),
        (b = w("div")),
        _(j.$$.fragment),
        (q = x()),
        me && me.c(),
        (I = x()),
        (H = w("div")),
        ge && ge.c(),
        (P = x()),
        he && he.c(),
        (D = x()),
        (B = w("div")),
        (E = w("a")),
        y(r, "class", "wallets svelte-177u10y"),
        y(i, "class", "actions flex flex-column items-start svelte-177u10y"),
        y(o, "class", "p5 svelte-177u10y"),
        y(d, "class", "relative flex"),
        y(m, "class", "network-selector-label svelte-177u10y"),
        y(b, "class", "flex items-center"),
        X(b, "width", "100%"),
        y(f, "class", "network-selector-container svelte-177u10y"),
        y(s, "class", "network-section flex items-center svelte-177u10y"),
        y(l, "class", "network-container svelte-177u10y"),
        J(l, "background-blue", (e[5] && e[5].icon) || e[7]),
        J(l, "background-yellow", !e[5]),
        J(l, "background-gray", e[5] && !e[7]),
        y(E, "href", "https://blocknative.com"),
        y(E, "target", "_blank"),
        y(E, "rel", "noopener noreferrer"),
        y(
          E,
          "class",
          "flex justify-center items-center powered-by-container svelte-177u10y"
        ),
        y(B, "class", "w100 svelte-177u10y"),
        y(H, "class", "app-info-container svelte-177u10y"),
        y(t, "class", "wallets-section svelte-177u10y"),
        y(n, "class", "outer-container svelte-177u10y");
    },
    m(w, x) {
      $(w, n, x), k(n, t), k(t, o), k(o, r);
      for (let e = 0; e < le.length; e += 1) le[e] && le[e].m(r, null);
      k(o, a),
        k(o, i),
        ve && ve.m(i, null),
        k(t, c),
        k(t, l),
        k(l, s),
        k(s, d),
        V(u, d, null),
        k(d, p),
        fe && fe.m(d, null),
        k(s, v),
        k(s, f),
        k(f, m),
        k(m, g),
        k(f, h),
        k(f, b),
        V(j, b, null),
        k(l, q),
        me && me.m(l, null),
        k(t, I),
        k(t, H),
        ge && ge.m(H, null),
        k(H, P),
        he && he.m(H, null),
        k(H, D),
        k(H, B),
        k(B, E),
        (E.innerHTML = K),
        (F = !0),
        Z ||
          ((W = [
            C(b, "click", e[21]),
            C(
              n,
              "click",
              Y(function () {
                Q(e[3]) && e[3].apply(this, arguments);
              })
            ),
          ]),
          (Z = !0));
    },
    p(n, t) {
      (e = n),
        10 & t[0] &&
          ((ue = e[1]),
          T(),
          (le = ee(le, t, pe, 1, e, ue, se, r, ne, Qn, null, Xn)),
          M()),
        "desktop" === e[17].type && ve.p(e, t);
      const o = {};
      32 & t[0] &&
        (o.color = e[5] ? (e[5].icon ? void 0 : "#EFF1FC") : "#FFAF00"),
        160 & t[0] &&
          (o.customBackgroundColor = e[5]
            ? e[5].color || (e[7] && e[7].color) || U.color
            : "#FFE7B3"),
        160 & t[0] &&
          (o.icon = e[5] ? e[5].icon || (e[7] && e[7].icon) || U.icon : Je),
        u.$set(o),
        e[5]
          ? fe
            ? 32 & t[0] && z(fe, 1)
            : ((fe = et()), fe.c(), z(fe, 1), fe.m(d, null))
          : fe &&
            (T(),
            A(fe, 1, 1, () => {
              fe = null;
            }),
            M()),
        (!F || 1024 & t[0]) &&
          de !==
            (de =
              e[10]("accountCenter.currentNetwork", {
                default: G.accountCenter.currentNetwork,
              }) + "") &&
          te(g, de),
        !e[9].hideTransactionProtectionBtn &&
        (e[6] || (e[5] && e[5].protectedRpcUrl))
          ? me
            ? me.p(e, t)
            : ((me = nt(e)), me.c(), me.m(l, null))
          : me && (me.d(1), (me = null)),
        (!F || 160 & t[0]) &&
          J(l, "background-blue", (e[5] && e[5].icon) || e[7]),
        (!F || 32 & t[0]) && J(l, "background-yellow", !e[5]),
        (!F || 160 & t[0]) && J(l, "background-gray", e[5] && !e[7]),
        e[11]
          ? ge
            ? (ge.p(e, t), 2048 & t[0] && z(ge, 1))
            : ((ge = tt(e)), ge.c(), z(ge, 1), ge.m(H, P))
          : ge &&
            (T(),
            A(ge, 1, 1, () => {
              ge = null;
            }),
            M()),
        e[8] && e[8].length
          ? he
            ? (he.p(e, t), 256 & t[0] && z(he, 1))
            : ((he = it(e)), he.c(), z(he, 1), he.m(H, D))
          : he &&
            (T(),
            A(he, 1, 1, () => {
              he = null;
            }),
            M());
    },
    i(t) {
      if (!F) {
        for (let e = 0; e < ue.length; e += 1) z(le[e]);
        z(u.$$.fragment, t),
          z(fe),
          z(j.$$.fragment, t),
          z(ge),
          z(he),
          t &&
            oe(() => {
              F &&
                (N ||
                  (N = re(
                    n,
                    ie,
                    {
                      duration: 600,
                      y: e[16].includes("bottom") ? 56 : -76,
                      easing: ae,
                      opacity: 0,
                    },
                    !0
                  )),
                N.run(1));
            }),
          (F = !0);
      }
    },
    o(t) {
      for (let e = 0; e < le.length; e += 1) A(le[e]);
      A(u.$$.fragment, t),
        A(fe),
        A(j.$$.fragment, t),
        A(ge),
        A(he),
        t &&
          (N ||
            (N = re(
              n,
              ie,
              {
                duration: 600,
                y: e[16].includes("bottom") ? 56 : -76,
                easing: ae,
                opacity: 0,
              },
              !1
            )),
          N.run(0)),
        (F = !1);
    },
    d(e) {
      e && L(n);
      for (let n = 0; n < le.length; n += 1) le[n].d();
      ve && ve.d(),
        S(u),
        fe && fe.d(),
        S(j),
        me && me.d(),
        ge && ge.d(),
        he && he.d(),
        e && N && N.end(),
        (Z = !1),
        ce(W);
    },
  };
}
function Qn(e, n) {
  let t, o, r, a;
  function i(e) {
    n[25](e);
  }
  let c = { wallet: n[29], primary: 0 === n[31] };
  return (
    void 0 !== n[3] && (c.hideMenu = n[3]),
    (o = new wn({ props: c })),
    le.push(() => se(o, "hideMenu", i)),
    {
      key: e,
      first: null,
      c() {
        (t = E()), _(o.$$.fragment), (this.first = t);
      },
      m(e, n) {
        $(e, t, n), V(o, e, n), (a = !0);
      },
      p(e, t) {
        n = e;
        const a = {};
        2 & t[0] && (a.wallet = n[29]),
          2 & t[0] && (a.primary = 0 === n[31]),
          !r && 8 & t[0] && ((r = !0), (a.hideMenu = n[3]), de(() => (r = !1))),
          o.$set(a);
      },
      i(e) {
        a || (z(o.$$.fragment, e), (a = !0));
      },
      o(e) {
        A(o.$$.fragment, e), (a = !1);
      },
      d(e) {
        e && L(t), S(o, e);
      },
    }
  );
}
function et(e) {
  let n, t, o;
  return (
    (t = new ue({ props: { size: 14 } })),
    {
      c() {
        (n = w("div")),
          _(t.$$.fragment),
          X(n, "right", "-5px"),
          X(n, "bottom", "-5px"),
          y(n, "class", "drop-shadow absolute");
      },
      m(e, r) {
        $(e, n, r), V(t, n, null), (o = !0);
      },
      i(e) {
        o || (z(t.$$.fragment, e), (o = !0));
      },
      o(e) {
        A(t.$$.fragment, e), (o = !1);
      },
      d(e) {
        e && L(n), S(t);
      },
    }
  );
}
function nt(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l =
      e[10]("accountCenter.enableTransactionProtection", {
        default: G.accountCenter.enableTransactionProtection,
      }) + "";
  return {
    c() {
      (n = w("div")),
        (t = w("div")),
        (o = x()),
        (r = w("span")),
        (a = R(l)),
        y(t, "class", "shield svelte-177u10y"),
        y(r, "class", "protect-text svelte-177u10y"),
        y(
          n,
          "class",
          "protect action-container flex items-center pointer svelte-177u10y"
        );
    },
    m(l, s) {
      $(l, n, s),
        k(n, t),
        (t.innerHTML = kn),
        k(n, o),
        k(n, r),
        k(r, a),
        i || ((c = C(n, "click", e[28])), (i = !0));
    },
    p(e, n) {
      1024 & n[0] &&
        l !==
          (l =
            e[10]("accountCenter.enableTransactionProtection", {
              default: G.accountCenter.enableTransactionProtection,
            }) + "") &&
        te(a, l);
    },
    d(e) {
      e && L(n), (i = !1), c();
    },
  };
}
function tt(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l,
    s,
    d,
    u,
    p,
    v = ((e[11] && e[11].name) || "App Name") + "",
    f =
      ((e[11] && e[11].description) ||
        "This app has not added a description.") + "";
  o = new O({
    props: {
      size: 32,
      padding: 4,
      background: "white",
      border: "black",
      radius: 8,
      icon: (e[11] && e[11].icon) || pe,
    },
  });
  let m = (e[11].gettingStartedGuide || e[11].explore) && ot(e);
  return {
    c() {
      (n = w("div")),
        (t = w("div")),
        _(o.$$.fragment),
        (r = x()),
        (a = w("div")),
        (i = R(v)),
        (c = x()),
        (l = w("div")),
        (s = R(f)),
        (d = x()),
        m && m.c(),
        (u = E()),
        y(a, "class", "app-name svelte-177u10y"),
        y(t, "class", "relative flex app-icon-name svelte-177u10y"),
        y(l, "class", "app-description svelte-177u10y"),
        y(n, "class", "flex items-start app-info-header svelte-177u10y");
    },
    m(e, v) {
      $(e, n, v),
        k(n, t),
        V(o, t, null),
        k(t, r),
        k(t, a),
        k(a, i),
        k(n, c),
        k(n, l),
        k(l, s),
        $(e, d, v),
        m && m.m(e, v),
        $(e, u, v),
        (p = !0);
    },
    p(e, n) {
      const t = {};
      2048 & n[0] && (t.icon = (e[11] && e[11].icon) || pe),
        o.$set(t),
        (!p || 2048 & n[0]) &&
          v !== (v = ((e[11] && e[11].name) || "App Name") + "") &&
          te(i, v),
        (!p || 2048 & n[0]) &&
          f !==
            (f =
              ((e[11] && e[11].description) ||
                "This app has not added a description.") + "") &&
          te(s, f),
        e[11].gettingStartedGuide || e[11].explore
          ? m
            ? m.p(e, n)
            : ((m = ot(e)), m.c(), m.m(u.parentNode, u))
          : m && (m.d(1), (m = null));
    },
    i(e) {
      p || (z(o.$$.fragment, e), (p = !0));
    },
    o(e) {
      A(o.$$.fragment, e), (p = !1);
    },
    d(e) {
      e && L(n), S(o), e && L(d), m && m.d(e), e && L(u);
    },
  };
}
function ot(e) {
  let n,
    t,
    o,
    r,
    a,
    i =
      e[10]("accountCenter.appInfo", { default: G.accountCenter.appInfo }) + "",
    c = e[11].gettingStartedGuide && rt(e),
    l = e[11].explore && at(e);
  return {
    c() {
      (n = w("div")),
        (t = w("div")),
        (o = R(i)),
        (r = x()),
        c && c.c(),
        (a = x()),
        l && l.c(),
        y(t, "class", "app-info-heading svelte-177u10y"),
        y(n, "class", "app-info svelte-177u10y");
    },
    m(e, i) {
      $(e, n, i),
        k(n, t),
        k(t, o),
        k(n, r),
        c && c.m(n, null),
        k(n, a),
        l && l.m(n, null);
    },
    p(e, t) {
      1024 & t[0] &&
        i !==
          (i =
            e[10]("accountCenter.appInfo", {
              default: G.accountCenter.appInfo,
            }) + "") &&
        te(o, i),
        e[11].gettingStartedGuide
          ? c
            ? c.p(e, t)
            : ((c = rt(e)), c.c(), c.m(n, a))
          : c && (c.d(1), (c = null)),
        e[11].explore
          ? l
            ? l.p(e, t)
            : ((l = at(e)), l.c(), l.m(n, null))
          : l && (l.d(1), (l = null));
    },
    d(e) {
      e && L(n), c && c.d(), l && l.d();
    },
  };
}
function rt(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l =
      e[10]("accountCenter.learnMore", { default: G.accountCenter.learnMore }) +
      "",
    s =
      e[10]("accountCenter.gettingStartedGuide", {
        default: G.accountCenter.gettingStartedGuide,
      }) + "";
  return {
    c() {
      (n = w("div")),
        (t = w("div")),
        (o = R(l)),
        (r = x()),
        (a = w("a")),
        (i = R(s)),
        y(a, "href", (c = e[11].gettingStartedGuide)),
        y(a, "target", "_blank"),
        y(a, "rel", "noreferrer noopener"),
        y(a, "class", "svelte-177u10y"),
        y(n, "class", "flex justify-between items-center w100 svelte-177u10y");
    },
    m(e, c) {
      $(e, n, c), k(n, t), k(t, o), k(n, r), k(n, a), k(a, i);
    },
    p(e, n) {
      1024 & n[0] &&
        l !==
          (l =
            e[10]("accountCenter.learnMore", {
              default: G.accountCenter.learnMore,
            }) + "") &&
        te(o, l),
        1024 & n[0] &&
          s !==
            (s =
              e[10]("accountCenter.gettingStartedGuide", {
                default: G.accountCenter.gettingStartedGuide,
              }) + "") &&
          te(i, s),
        2048 & n[0] && c !== (c = e[11].gettingStartedGuide) && y(a, "href", c);
    },
    d(e) {
      e && L(n);
    },
  };
}
function at(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l =
      e[10]("accountCenter.smartContracts", {
        default: G.accountCenter.smartContracts,
      }) + "",
    s =
      e[10]("accountCenter.explore", { default: G.accountCenter.explore }) + "";
  return {
    c() {
      (n = w("div")),
        (t = w("div")),
        (o = R(l)),
        (r = x()),
        (a = w("a")),
        (i = R(s)),
        y(a, "href", (c = e[11].explore)),
        y(a, "target", "_blank"),
        y(a, "rel", "noreferrer noopener"),
        y(a, "class", "svelte-177u10y"),
        y(n, "class", "flex justify-between items-center w100 svelte-177u10y");
    },
    m(e, c) {
      $(e, n, c), k(n, t), k(t, o), k(n, r), k(n, a), k(a, i);
    },
    p(e, n) {
      1024 & n[0] &&
        l !==
          (l =
            e[10]("accountCenter.smartContracts", {
              default: G.accountCenter.smartContracts,
            }) + "") &&
        te(o, l),
        1024 & n[0] &&
          s !==
            (s =
              e[10]("accountCenter.explore", {
                default: G.accountCenter.explore,
              }) + "") &&
          te(i, s),
        2048 & n[0] && c !== (c = e[11].explore) && y(a, "href", c);
    },
    d(e) {
      e && L(n);
    },
  };
}
function it(e) {
  let n, t;
  return (
    (n = new Un({ props: { secondaryTokens: e[8] } })),
    {
      c() {
        _(n.$$.fragment);
      },
      m(e, o) {
        V(n, e, o), (t = !0);
      },
      p(e, t) {
        const o = {};
        256 & t[0] && (o.secondaryTokens = e[8]), n.$set(o);
      },
      i(e) {
        t || (z(n.$$.fragment, e), (t = !0));
      },
      o(e) {
        A(n.$$.fragment, e), (t = !1);
      },
      d(e) {
        S(n, e);
      },
    }
  );
}
function ct(e) {
  let n,
    t,
    o,
    r,
    a = e[2] && Jn(e),
    i = e[4] && Kn(e),
    c = e[0] && Yn(e);
  return {
    c() {
      a && a.c(), (n = x()), i && i.c(), (t = x()), c && c.c(), (o = E());
    },
    m(e, l) {
      a && a.m(e, l),
        $(e, n, l),
        i && i.m(e, l),
        $(e, t, l),
        c && c.m(e, l),
        $(e, o, l),
        (r = !0);
    },
    p(e, r) {
      e[2]
        ? a
          ? (a.p(e, r), 4 & r[0] && z(a, 1))
          : ((a = Jn(e)), a.c(), z(a, 1), a.m(n.parentNode, n))
        : a &&
          (T(),
          A(a, 1, 1, () => {
            a = null;
          }),
          M()),
        e[4]
          ? i
            ? (i.p(e, r), 16 & r[0] && z(i, 1))
            : ((i = Kn(e)), i.c(), z(i, 1), i.m(t.parentNode, t))
          : i &&
            (T(),
            A(i, 1, 1, () => {
              i = null;
            }),
            M()),
        e[0]
          ? c
            ? (c.p(e, r), 1 & r[0] && z(c, 1))
            : ((c = Yn(e)), c.c(), z(c, 1), c.m(o.parentNode, o))
          : c &&
            (T(),
            A(c, 1, 1, () => {
              c = null;
            }),
            M());
    },
    i(e) {
      r || (z(a), z(i), z(c), (r = !0));
    },
    o(e) {
      A(a), A(i), A(c), (r = !1);
    },
    d(e) {
      a && a.d(e), e && L(n), i && i.d(e), e && L(t), c && c.d(e), e && L(o);
    },
  };
}
function lt(e, n, t) {
  let o, r, a, i, c, l, s, d, u, p;
  H(e, N, (e) => t(1, (s = e))), H(e, F, (e) => t(10, (u = e)));
  let { expanded: v } = n;
  const f = j.select("accountCenter").pipe(q(j.get().accountCenter), I(1));
  H(e, f, (e) => t(9, (d = e)));
  const { chains: m } = j.get();
  let g,
    h = !1,
    b = !1;
  const w = j.select("appMetadata").pipe(q(j.get().appMetadata), I(1));
  H(e, w, (e) => t(11, (p = e)));
  const { position: x } = j.get().accountCenter,
    { device: y } = fe,
    $ = async () => {
      if (i)
        try {
          await me(o.provider, i, i.protectedRpcUrl || ge), t(4, (b = !1));
        } catch (e) {
          const { code: n } = e;
        }
    };
  return (
    (e.$$set = (e) => {
      "expanded" in e && t(0, (v = e.expanded));
    }),
    (e.$$.update = () => {
      2 & e.$$.dirty[0] && t(19, ([o] = s), o),
        524288 & e.$$.dirty[0] && t(20, ([r] = o ? o.chains : []), r),
        524288 & e.$$.dirty[0] &&
          t(8, (a = o && o.accounts.length && o.accounts[0].secondaryTokens)),
        1048576 & e.$$.dirty[0] &&
          t(
            5,
            (i = m.find(
              ({ id: e, namespace: n }) =>
                !!r && e === r.id && n === r.namespace
            ))
          ),
        1048576 & e.$$.dirty[0] && t(7, (c = Z(r && r.id))),
        1048576 & e.$$.dirty[0] && t(6, (l = r && "0x1" === r.id));
    }),
    [
      v,
      s,
      h,
      g,
      b,
      i,
      l,
      c,
      a,
      d,
      u,
      p,
      f,
      function () {
        s.forEach(({ label: e }) => ve({ label: e }));
      },
      m,
      w,
      x,
      y,
      $,
      o,
      r,
      function (n) {
        he.call(this, e, n);
      },
      () => t(2, (h = !1)),
      () => t(4, (b = !1)),
      () => $(),
      function (e) {
        (g = e), t(3, g);
      },
      () => be(),
      () => t(2, (h = !0)),
      () => t(4, (b = !0)),
    ]
  );
}
class st extends m {
  constructor(e) {
    super(), g(this, e, lt, ct, h, { expanded: 0 }, Rn, [-1, -1]);
  }
}
function dt(e) {
  b(
    e,
    "svelte-1xsvwqj",
    ".ac-trigger.svelte-1xsvwqj{--background-color:var(\n      --account-center-minimized-background,\n      var(--w3o-background-color, white)\n    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(\n      --account-center-border,\n      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))\n    );--border-radius:var(\n      --account-center-border-radius,\n      var(--w3o-border-radius, 1rem)\n    );cursor:pointer;pointer-events:auto;width:100%;padding:0.5rem;border:1px solid;background:var(--background-color);color:var(--text-color);border-color:var(--border-color);border-radius:var(--border-radius);box-shadow:var(\n      --account-center-box-shadow,\n      var(--onboard-shadow-3, var(--shadow-3))\n    );z-index:var(--account-center-z-index, 1)}.inner-row.svelte-1xsvwqj{display:flex;flex-flow:row nowrap;align-items:center;gap:0.5rem;padding:0 0.25rem}.wallet-info.svelte-1xsvwqj{display:flex;flex:1;flex-flow:column;height:2.5rem;overflow:hidden}.address.svelte-1xsvwqj{font-weight:600;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--account-center-minimized-address-color, inherit)}.balance.svelte-1xsvwqj{font-weight:400;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:0.6;color:var(--account-center-minimized-balance-color, inherit)}.chain-icon-container.svelte-1xsvwqj{margin-right:4px}.container.svelte-1xsvwqj{border:1px solid transparent;border-radius:16px;padding:1px;transition:border-color 250ms ease-in-out, backround 250ms ease-in-out;max-width:128px;cursor:default}.drop-shadow.svelte-1xsvwqj{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}"
  );
}
function ut(e) {
  let n,
    t,
    o,
    r,
    a,
    i = (e[5].length > 7 ? e[5].slice(0, 7) : e[5]) + "";
  return {
    c() {
      (n = w("div")),
        (t = R(i)),
        (o = x()),
        (r = R(e[2])),
        y(n, "class", "balance svelte-1xsvwqj");
    },
    m(e, a) {
      $(e, n, a), k(n, t), k(n, o), k(n, r);
    },
    p(e, n) {
      32 & n &&
        i !== (i = (e[5].length > 7 ? e[5].slice(0, 7) : e[5]) + "") &&
        te(t, i),
        4 & n && te(r, e[2]);
    },
    i(e) {
      e &&
        (a ||
          oe(() => {
            (a = xe(n, ye, {})), a.start();
          }));
    },
    o: B,
    d(e) {
      e && L(n);
    },
  };
}
function pt(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l,
    s,
    d,
    u,
    p,
    v,
    f,
    m,
    g,
    h,
    b,
    T,
    M,
    j,
    q,
    I,
    H,
    P,
    D,
    B,
    E,
    N,
    F,
    Z = (e[8] ? we(e[8]) : e[7] ? we(e[7]) : e[6]) + "";
  (a = new O({
    props: {
      size: 32,
      padding: 4,
      background: "white",
      border: "darkGreen",
      radius: 8,
      icon: (e[9] && e[9].icon) || pe,
    },
  })),
    (l = new O({
      props: {
        size: 32,
        padding: 4,
        background: "green",
        border: "darkGreen",
        radius: 8,
        icon: e[1] ? e[1].icon : "",
      },
    })),
    (u = new ue({ props: { size: 14 } }));
  let W = e[5] && ut(e);
  return (
    (q = new O({
      props: {
        size: 22,
        padding: 4,
        background: "custom",
        color: e[4]
          ? e[4].icon
            ? void 0
            : "var(--onboard-primary-100, var(--primary-100))"
          : "var(\n                    --account-center-chain-warning,\n                    var(--onboard-warning-500, var(--warning-500))\n                  )",
        customBackgroundColor: e[4]
          ? e[4].color || (e[3] && e[3].color) || U.color
          : "var(--onboard-warning-200, var(--warning-200))",
        border: "transparent",
        radius: 25,
        icon: e[4] ? e[4].icon || (e[3] && e[3].icon) || U.icon : Je,
      },
    })),
    (H = new cn({
      props: {
        chains: e[11],
        colorVar: "--account-center-minimized-network-selector-color",
        selectIcon: Xe,
        parentCSSId: "minimized_ac",
      },
    })),
    {
      c() {
        (n = w("div")),
          (t = w("div")),
          (o = w("div")),
          (r = w("div")),
          _(a.$$.fragment),
          (i = x()),
          (c = w("div")),
          _(l.$$.fragment),
          (s = x()),
          (d = w("div")),
          _(u.$$.fragment),
          (p = x()),
          (v = w("div")),
          (f = w("div")),
          (m = R(Z)),
          (g = x()),
          W && W.c(),
          (h = x()),
          (b = w("div")),
          (T = w("div")),
          (M = w("div")),
          (j = w("div")),
          _(q.$$.fragment),
          (I = x()),
          _(H.$$.fragment),
          y(r, "class", "drop-shadow svelte-1xsvwqj"),
          X(c, "margin-left", "-0.5rem"),
          y(c, "class", "drop-shadow svelte-1xsvwqj"),
          X(d, "right", "-4px"),
          X(d, "bottom", "-4px"),
          y(d, "class", "drop-shadow absolute svelte-1xsvwqj"),
          y(o, "class", "flex relative"),
          y(f, "class", "address svelte-1xsvwqj"),
          y(v, "class", "wallet-info svelte-1xsvwqj"),
          y(j, "class", "chain-icon-container svelte-1xsvwqj"),
          y(M, "class", "flex items-center"),
          y(T, "class", "container shadow-1 flex items-center svelte-1xsvwqj"),
          y(
            T,
            "style",
            (P = `border-color: var(${
              e[4]
                ? "--onboard-primary-200, var(--primary-200)"
                : "--onboard-warning-500, var(--warning-500)"
            }); background-color: var(${
              e[4]
                ? "--account-center-minimized-chain-select-background, var(--primary-100)"
                : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"
            })`)
          ),
          y(b, "class", "network"),
          y(t, "class", "inner-row svelte-1xsvwqj"),
          y(n, "class", "ac-trigger svelte-1xsvwqj");
      },
      m(w, x) {
        $(w, n, x),
          k(n, t),
          k(t, o),
          k(o, r),
          V(a, r, null),
          k(o, i),
          k(o, c),
          V(l, c, null),
          k(o, s),
          k(o, d),
          V(u, d, null),
          k(t, p),
          k(t, v),
          k(v, f),
          k(f, m),
          k(v, g),
          W && W.m(v, null),
          k(t, h),
          k(t, b),
          k(b, T),
          k(T, M),
          k(M, j),
          V(q, j, null),
          k(M, I),
          V(H, M, null),
          (E = !0),
          N ||
            ((F = [
              C(T, "click", Y(e[15])),
              C(
                n,
                "click",
                Y(function () {
                  Q(e[0]) && e[0].apply(this, arguments);
                })
              ),
            ]),
            (N = !0));
      },
      p(n, [t]) {
        e = n;
        const o = {};
        512 & t && (o.icon = (e[9] && e[9].icon) || pe), a.$set(o);
        const r = {};
        2 & t && (r.icon = e[1] ? e[1].icon : ""),
          l.$set(r),
          (!E || 448 & t) &&
            Z !== (Z = (e[8] ? we(e[8]) : e[7] ? we(e[7]) : e[6]) + "") &&
            te(m, Z),
          e[5]
            ? W
              ? (W.p(e, t), 32 & t && z(W, 1))
              : ((W = ut(e)), W.c(), z(W, 1), W.m(v, null))
            : W && (W.d(1), (W = null));
        const i = {};
        16 & t &&
          (i.color = e[4]
            ? e[4].icon
              ? void 0
              : "var(--onboard-primary-100, var(--primary-100))"
            : "var(\n                    --account-center-chain-warning,\n                    var(--onboard-warning-500, var(--warning-500))\n                  )"),
          24 & t &&
            (i.customBackgroundColor = e[4]
              ? e[4].color || (e[3] && e[3].color) || U.color
              : "var(--onboard-warning-200, var(--warning-200))"),
          24 & t &&
            (i.icon = e[4] ? e[4].icon || (e[3] && e[3].icon) || U.icon : Je),
          q.$set(i),
          (!E ||
            (16 & t &&
              P !==
                (P = `border-color: var(${
                  e[4]
                    ? "--onboard-primary-200, var(--primary-200)"
                    : "--onboard-warning-500, var(--warning-500)"
                }); background-color: var(${
                  e[4]
                    ? "--account-center-minimized-chain-select-background, var(--primary-100)"
                    : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"
                })`))) &&
            y(T, "style", P);
      },
      i(e) {
        E ||
          (z(a.$$.fragment, e),
          z(l.$$.fragment, e),
          z(u.$$.fragment, e),
          z(W),
          z(q.$$.fragment, e),
          z(H.$$.fragment, e),
          e &&
            oe(() => {
              E &&
                (B && B.end(1), (D = xe(n, ye, { duration: 250 })), D.start());
            }),
          (E = !0));
      },
      o(e) {
        A(a.$$.fragment, e),
          A(l.$$.fragment, e),
          A(u.$$.fragment, e),
          A(q.$$.fragment, e),
          A(H.$$.fragment, e),
          D && D.invalidate(),
          (B = $e(n, ye, { duration: 100 })),
          (E = !1);
      },
      d(e) {
        e && L(n),
          S(a),
          S(l),
          S(u),
          W && W.d(),
          S(q),
          S(H),
          e && B && B.end(),
          (N = !1),
          ce(F);
      },
    }
  );
}
function vt(e, n, t) {
  let o, r, a, i, c, l, s, d, u, p, v, f;
  H(e, N, (e) => t(14, (v = e)));
  let { toggle: m } = n;
  const g = j.select("appMetadata").pipe(q(j.get().appMetadata), I(1));
  H(e, g, (e) => t(9, (f = e)));
  const h = j.get().chains;
  return (
    (e.$$set = (e) => {
      "toggle" in e && t(0, (m = e.toggle));
    }),
    (e.$$.update = () => {
      16384 & e.$$.dirty && t(1, ([o] = v), o),
        2 & e.$$.dirty && t(13, ([r] = o ? o.accounts : []), r),
        8192 & e.$$.dirty && t(8, (a = r && r.ens && we(r.ens.name))),
        8192 & e.$$.dirty && t(7, (i = r && r.uns && we(r.uns.name))),
        8192 & e.$$.dirty && t(6, (c = r ? ke(r.address) : "")),
        8192 & e.$$.dirty &&
          t(2, ([l] = r && r.balance ? Object.keys(r.balance) : []), l),
        8196 & e.$$.dirty && t(5, (s = r && r.balance ? r.balance[l] : null)),
        2 & e.$$.dirty && t(12, (d = o && o.chains[0])),
        4096 & e.$$.dirty &&
          t(
            4,
            (u = h.find(
              ({ id: e, namespace: n }) =>
                !!d && e === d.id && n === d.namespace
            ))
          ),
        4096 & e.$$.dirty && t(3, (p = Z(d && d.id)));
    }),
    [
      m,
      o,
      l,
      p,
      u,
      s,
      c,
      i,
      a,
      f,
      g,
      h,
      d,
      r,
      v,
      function (n) {
        he.call(this, e, n);
      },
    ]
  );
}
class ft extends m {
  constructor(e) {
    super(), g(this, e, vt, pt, h, { toggle: 0 }, dt);
  }
}
function mt(e) {
  b(
    e,
    "svelte-1o9vinu",
    ".ac-trigger.svelte-1o9vinu{--background-color:var(\n      --account-center-minimized-background,\n      var(--w3o-background-color, white)\n    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(\n      --account-center-border,\n      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))\n    );--border-radius:var(\n      --account-center-border-radius,\n      var(--w3o-border-radius, 1rem)\n    );position:relative;cursor:pointer;pointer-events:auto;min-width:80px;background:var(--background-color);color:var(--text-color);border:1px solid var(--border-color);border-radius:var(--border-radius);box-shadow:var(\n      --account-center-box-shadow,\n      var(--onboard-shadow-3, var(--shadow-3))\n    );z-index:var(--account-center-z-index, 1)}.wallet-square-wrapper.svelte-1o9vinu{position:relative;margin-left:-8px}.check-icon-wrapper.svelte-1o9vinu{position:absolute;right:-4px;bottom:-4px}.inner-row.svelte-1o9vinu{display:flex;flex-flow:row nowrap;width:80px;padding:0.75rem}.drop-shadow.svelte-1o9vinu{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}"
  );
}
function gt(e) {
  let n, t, o, r, a, i, c, l, s, d, u, p, v, f, m;
  return (
    (r = new O({
      props: {
        size: 32,
        padding: 4,
        background: "white",
        border: "darkGreen",
        radius: 8,
        icon: (e[3] && e[3].icon) || pe,
      },
    })),
    (l = new O({
      props: {
        size: 32,
        padding: 4,
        background: "green",
        border: "darkGreen",
        radius: 8,
        icon: e[1] ? e[1].icon : "",
      },
    })),
    (u = new ue({ props: { size: 14 } })),
    {
      c() {
        (n = w("div")),
          (t = w("div")),
          (o = w("div")),
          _(r.$$.fragment),
          (a = x()),
          (i = w("div")),
          (c = w("div")),
          _(l.$$.fragment),
          (s = x()),
          (d = w("div")),
          _(u.$$.fragment),
          y(o, "class", "drop-shadow svelte-1o9vinu"),
          y(c, "class", "drop-shadow svelte-1o9vinu"),
          y(d, "class", "check-icon-wrapper drop-shadow svelte-1o9vinu"),
          y(i, "class", "wallet-square-wrapper svelte-1o9vinu"),
          y(t, "class", "inner-row svelte-1o9vinu"),
          y(n, "class", "ac-trigger svelte-1o9vinu"),
          y(
            n,
            "style",
            (p = e[2].position.includes("Left")
              ? "align-self: flex-start"
              : null)
          );
      },
      m(p, g) {
        $(p, n, g),
          k(n, t),
          k(t, o),
          V(r, o, null),
          k(t, a),
          k(t, i),
          k(i, c),
          V(l, c, null),
          k(i, s),
          k(i, d),
          V(u, d, null),
          (v = !0),
          f ||
            ((m = C(
              n,
              "click",
              Y(function () {
                Q(e[0]) && e[0].apply(this, arguments);
              })
            )),
            (f = !0));
      },
      p(t, [o]) {
        e = t;
        const a = {};
        8 & o && (a.icon = (e[3] && e[3].icon) || pe), r.$set(a);
        const i = {};
        2 & o && (i.icon = e[1] ? e[1].icon : ""),
          l.$set(i),
          (!v ||
            (4 & o &&
              p !==
                (p = e[2].position.includes("Left")
                  ? "align-self: flex-start"
                  : null))) &&
            y(n, "style", p);
      },
      i(e) {
        v ||
          (z(r.$$.fragment, e),
          z(l.$$.fragment, e),
          z(u.$$.fragment, e),
          (v = !0));
      },
      o(e) {
        A(r.$$.fragment, e), A(l.$$.fragment, e), A(u.$$.fragment, e), (v = !1);
      },
      d(e) {
        e && L(n), S(r), S(l), S(u), (f = !1), m();
      },
    }
  );
}
function ht(e, n, t) {
  let o, r, a, i;
  H(e, N, (e) => t(6, (r = e)));
  let { toggle: c } = n;
  const l = j.select("appMetadata").pipe(q(j.get().appMetadata), I(1));
  H(e, l, (e) => t(3, (i = e)));
  const s = j.select("accountCenter").pipe(q(j.get().accountCenter), I(1));
  return (
    H(e, s, (e) => t(2, (a = e))),
    (e.$$set = (e) => {
      "toggle" in e && t(0, (c = e.toggle));
    }),
    (e.$$.update = () => {
      64 & e.$$.dirty && t(1, ([o] = r), o);
    }),
    [c, o, a, i, l, s, r]
  );
}
class bt extends m {
  constructor(e) {
    super(), g(this, e, ht, gt, h, { toggle: 0 }, mt);
  }
}
function wt(e) {
  b(
    e,
    "svelte-1nua59o",
    ".ac-container.svelte-1nua59o{display:flex;flex-flow:column;align-items:flex-end;gap:0.5rem}"
  );
}
function xt(e) {
  let n, t;
  return (
    (n = new st({ props: { expanded: e[0] } })),
    {
      c() {
        _(n.$$.fragment);
      },
      m(e, o) {
        V(n, e, o), (t = !0);
      },
      p(e, t) {
        const o = {};
        1 & t && (o.expanded = e[0]), n.$set(o);
      },
      i(e) {
        t || (z(n.$$.fragment, e), (t = !0));
      },
      o(e) {
        A(n.$$.fragment, e), (t = !1);
      },
      d(e) {
        S(n, e);
      },
    }
  );
}
function yt(e) {
  let n, t;
  return (
    (n = new ft({ props: { toggle: e[4] } })),
    {
      c() {
        _(n.$$.fragment);
      },
      m(e, o) {
        V(n, e, o), (t = !0);
      },
      p: B,
      i(e) {
        t || (z(n.$$.fragment, e), (t = !0));
      },
      o(e) {
        A(n.$$.fragment, e), (t = !1);
      },
      d(e) {
        S(n, e);
      },
    }
  );
}
function $t(e) {
  let n, t;
  return (
    (n = new bt({ props: { toggle: e[4] } })),
    {
      c() {
        _(n.$$.fragment);
      },
      m(e, o) {
        V(n, e, o), (t = !0);
      },
      p: B,
      i(e) {
        t || (z(n.$$.fragment, e), (t = !0));
      },
      o(e) {
        A(n.$$.fragment, e), (t = !1);
      },
      d(e) {
        S(n, e);
      },
    }
  );
}
function kt(e) {
  let n, t;
  return (
    (n = new st({ props: { expanded: e[0] } })),
    {
      c() {
        _(n.$$.fragment);
      },
      m(e, o) {
        V(n, e, o), (t = !0);
      },
      p(e, t) {
        const o = {};
        1 & t && (o.expanded = e[0]), n.$set(o);
      },
      i(e) {
        t || (z(n.$$.fragment, e), (t = !0));
      },
      o(e) {
        A(n.$$.fragment, e), (t = !1);
      },
      d(e) {
        S(n, e);
      },
    }
  );
}
function Ct(e) {
  let n,
    t,
    o,
    r,
    a,
    i,
    c,
    l,
    s = e[1].position.includes("bottom"),
    d = e[1].position.includes("top"),
    u = s && xt(e);
  const p = [$t, yt],
    v = [];
  function f(e, n) {
    return e[1].minimal ? 0 : 1;
  }
  (o = f(e)), (r = v[o] = p[o](e));
  let m = d && kt(e);
  return {
    c() {
      (n = w("div")),
        u && u.c(),
        (t = x()),
        r.c(),
        (a = x()),
        m && m.c(),
        y(n, "class", "ac-container svelte-1nua59o");
    },
    m(r, s) {
      $(r, n, s),
        u && u.m(n, null),
        k(n, t),
        v[o].m(n, null),
        k(n, a),
        m && m.m(n, null),
        (i = !0),
        c || ((l = C(window, "click", e[3])), (c = !0));
    },
    p(e, [i]) {
      2 & i && (s = e[1].position.includes("bottom")),
        s
          ? u
            ? (u.p(e, i), 2 & i && z(u, 1))
            : ((u = xt(e)), u.c(), z(u, 1), u.m(n, t))
          : u &&
            (T(),
            A(u, 1, 1, () => {
              u = null;
            }),
            M());
      let c = o;
      (o = f(e)),
        o === c
          ? v[o].p(e, i)
          : (T(),
            A(v[c], 1, 1, () => {
              v[c] = null;
            }),
            M(),
            (r = v[o]),
            r ? r.p(e, i) : ((r = v[o] = p[o](e)), r.c()),
            z(r, 1),
            r.m(n, a)),
        2 & i && (d = e[1].position.includes("top")),
        d
          ? m
            ? (m.p(e, i), 2 & i && z(m, 1))
            : ((m = kt(e)), m.c(), z(m, 1), m.m(n, null))
          : m &&
            (T(),
            A(m, 1, 1, () => {
              m = null;
            }),
            M());
    },
    i(e) {
      i || (z(u), z(r), z(m), (i = !0));
    },
    o(e) {
      A(u), A(r), A(m), (i = !1);
    },
    d(e) {
      e && L(n), u && u.d(), v[o].d(), m && m.d(), (c = !1), l();
    },
  };
}
function zt(e, n, t) {
  let o,
    r = !1;
  const a = j.select("accountCenter").pipe(q(j.get().accountCenter), I(1));
  function i() {
    o.expanded && (D({ expanded: !1 }), t(0, (r = !1)));
  }
  return (
    H(e, a, (e) => t(1, (o = e))),
    P(i),
    [
      r,
      o,
      a,
      i,
      function () {
        D({ expanded: !o.expanded }), t(0, (r = !r));
      },
    ]
  );
}
class Tt extends m {
  constructor(e) {
    super(), g(this, e, zt, Ct, h, {}, wt);
  }
}
export { Tt as default };

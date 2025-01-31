import {
  S as t,
  i as n,
  s as e,
  b as o,
  e as i,
  d as r,
  t as a,
  f as s,
  h as l,
  j as c,
  k as d,
  m as f,
  o as v,
  p,
  q as u,
  v as y,
  w as m,
  x as h,
  y as b,
  z as g,
  A as x,
  B as k,
  C as w,
  D as $,
  E as z,
  F as C,
  G as j,
  H as L,
  I as P,
  J as T,
  K as M,
  L as R,
  M as S,
  N as F,
  O as I,
  P as D,
  Q as E,
  R as N,
  T as O,
  U as V,
  V as H,
  W as G,
  X as q,
  Y as B,
  $ as K,
  Z,
  a0 as _,
  a1 as A,
  a2 as J,
  a3 as Q,
  a4 as U,
  a5 as W,
  a6 as X,
  a7 as Y,
  a8 as tt,
  a9 as nt,
  aa as et,
  ab as ot,
  ac as it,
  ad as rt,
} from "./index-CcOpQHgp.js";
function at(t, { from: n, to: e }, o = {}) {
  const i = getComputedStyle(t),
    r = "none" === i.transform ? "" : i.transform,
    [a, s] = i.transformOrigin.split(" ").map(parseFloat),
    l = n.left + (n.width * a) / e.width - (e.left + a),
    c = n.top + (n.height * s) / e.height - (e.top + s),
    {
      delay: d = 0,
      duration: f = (t) => 120 * Math.sqrt(t),
      easing: v = E,
    } = o;
  return {
    delay: d,
    duration: O(f) ? f(Math.sqrt(l * l + c * c)) : f,
    easing: v,
    css: (t, o) => {
      const i = o * l,
        a = o * c,
        s = t + (o * n.width) / e.width,
        d = t + (o * n.height) / e.height;
      return `transform: ${r} translate(${i}px, ${a}px) scale(${s}, ${d});`;
    },
  };
}
function st(t) {
  o(
    t,
    "svelte-13cuwwo",
    "div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}"
  );
}
function lt(t) {
  let n, e;
  return {
    c() {
      (n = y("div")),
        m(n, "class", "border svelte-13cuwwo"),
        m(
          n,
          "style",
          (e = `\n    width: ${t[2] - 2 * t[3]}px; \n    height: ${
            t[2] - 2 * t[3]
          }px; \n    border-color: var(${t[1]}); \n    padding: ${
            t[3]
          }px; \n    background-color: ${
            t[4]
          };\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  `)
        );
    },
    m(e, o) {
      r(e, n, o), (n.innerHTML = t[0]);
    },
    p(t, [o]) {
      1 & o && (n.innerHTML = t[0]),
        30 & o &&
          e !==
            (e = `\n    width: ${t[2] - 2 * t[3]}px; \n    height: ${
              t[2] - 2 * t[3]
            }px; \n    border-color: var(${t[1]}); \n    padding: ${
              t[3]
            }px; \n    background-color: ${
              t[4]
            };\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  `) &&
          m(n, "style", e);
    },
    i: Q,
    o: Q,
    d(t) {
      t && d(n);
    },
  };
}
function ct(t, n, e) {
  let { icon: o } = n,
    { borderColorVar: i } = n,
    { size: r } = n,
    { padding: a = 0 } = n,
    { background: s = "transparent" } = n;
  return (
    (t.$$set = (t) => {
      "icon" in t && e(0, (o = t.icon)),
        "borderColorVar" in t && e(1, (i = t.borderColorVar)),
        "size" in t && e(2, (r = t.size)),
        "padding" in t && e(3, (a = t.padding)),
        "background" in t && e(4, (s = t.background));
    }),
    [o, i, r, a, s]
  );
}
class dt extends t {
  constructor(t) {
    super(),
      n(
        this,
        t,
        ct,
        lt,
        e,
        { icon: 0, borderColorVar: 1, size: 2, padding: 3, background: 4 },
        st
      );
  }
}
function ft(t) {
  o(
    t,
    "svelte-jvic9v",
    "div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}"
  );
}
function vt(t) {
  let n,
    e,
    o,
    i,
    f,
    v,
    p,
    u,
    h = et[t[1].type].eventIcon + "",
    b =
      !t[1].id.includes("customNotification") && !t[1].id.includes("preflight"),
    k = "pending" === t[1].type && pt(),
    $ = b && ut(t);
  return {
    c() {
      (n = y("div")),
        k && k.c(),
        (e = g()),
        (o = y("div")),
        (i = y("div")),
        (p = g()),
        $ && $.c(),
        m(
          i,
          "class",
          (f =
            x(
              "notification-icon flex items-center justify-center " +
                ("pending" === t[1].type ? "pending-icon" : "")
            ) + " svelte-jvic9v")
        ),
        m(
          o,
          "class",
          "flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"
        ),
        m(
          o,
          "style",
          (v = `background:${et[t[1].type].backgroundColor}; color: ${
            et[t[1].type].iconColor || ""
          }; ${
            "pending" === t[1].type
              ? "height: 28px; width: 28px; margin: 2px;"
              : `border: 2px solid ${et[t[1].type].borderColor}`
          }; `)
        ),
        m(n, "class", "relative");
    },
    m(t, a) {
      r(t, n, a),
        k && k.m(n, null),
        w(n, e),
        w(n, o),
        w(o, i),
        (i.innerHTML = h),
        w(n, p),
        $ && $.m(n, null),
        (u = !0);
    },
    p(t, r) {
      "pending" === t[1].type
        ? k || ((k = pt()), k.c(), k.m(n, e))
        : k && (k.d(1), (k = null)),
        (!u || 2 & r) &&
          h !== (h = et[t[1].type].eventIcon + "") &&
          (i.innerHTML = h),
        (!u ||
          (2 & r &&
            f !==
              (f =
                x(
                  "notification-icon flex items-center justify-center " +
                    ("pending" === t[1].type ? "pending-icon" : "")
                ) + " svelte-jvic9v"))) &&
          m(i, "class", f),
        (!u ||
          (2 & r &&
            v !==
              (v = `background:${et[t[1].type].backgroundColor}; color: ${
                et[t[1].type].iconColor || ""
              }; ${
                "pending" === t[1].type
                  ? "height: 28px; width: 28px; margin: 2px;"
                  : `border: 2px solid ${et[t[1].type].borderColor}`
              }; `))) &&
          m(o, "style", v),
        2 & r &&
          (b =
            !t[1].id.includes("customNotification") &&
            !t[1].id.includes("preflight")),
        b
          ? $
            ? ($.p(t, r), 2 & r && a($, 1))
            : (($ = ut(t)), $.c(), a($, 1), $.m(n, null))
          : $ &&
            (s(),
            l($, 1, 1, () => {
              $ = null;
            }),
            c());
    },
    i(t) {
      u || (a($), (u = !0));
    },
    o(t) {
      l($), (u = !1);
    },
    d(t) {
      t && d(n), k && k.d(), $ && $.d();
    },
  };
}
function pt(t) {
  let n;
  return {
    c() {
      (n = y("div")), m(n, "class", "border-action absolute svelte-jvic9v");
    },
    m(t, e) {
      r(t, n, e);
    },
    d(t) {
      t && d(n);
    },
  };
}
function ut(t) {
  let n, e, o;
  return (
    (e = new dt({
      props: {
        icon: t[0].icon,
        size: 16,
        background: t[0].color,
        borderColorVar:
          "--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",
        padding: 3,
      },
    })),
    {
      c() {
        (n = y("div")),
          b(e.$$.fragment),
          m(n, "class", "absolute chain-icon-container svelte-jvic9v");
      },
      m(t, i) {
        r(t, n, i), k(e, n, null), (o = !0);
      },
      p(t, n) {
        const o = {};
        1 & n && (o.icon = t[0].icon),
          1 & n && (o.background = t[0].color),
          e.$set(o);
      },
      i(t) {
        o || (a(e.$$.fragment, t), (o = !0));
      },
      o(t) {
        l(e.$$.fragment, t), (o = !1);
      },
      d(t) {
        t && d(n), S(e);
      },
    }
  );
}
function yt(t) {
  let n,
    e,
    o = t[1].type && vt(t);
  return {
    c() {
      o && o.c(), (n = i());
    },
    m(t, i) {
      o && o.m(t, i), r(t, n, i), (e = !0);
    },
    p(t, [e]) {
      t[1].type
        ? o
          ? (o.p(t, e), 2 & e && a(o, 1))
          : ((o = vt(t)), o.c(), a(o, 1), o.m(n.parentNode, n))
        : o &&
          (s(),
          l(o, 1, 1, () => {
            o = null;
          }),
          c());
    },
    i(t) {
      e || (a(o), (e = !0));
    },
    o(t) {
      l(o), (e = !1);
    },
    d(t) {
      o && o.d(t), t && d(n);
    },
  };
}
function mt(t, n, e) {
  let { chainStyles: o = ot } = n,
    { notification: i } = n;
  return (
    (t.$$set = (t) => {
      "chainStyles" in t && e(0, (o = t.chainStyles)),
        "notification" in t && e(1, (i = t.notification));
    }),
    [o, i]
  );
}
class ht extends t {
  constructor(t) {
    super(), n(this, t, mt, yt, e, { chainStyles: 0, notification: 1 }, ft);
  }
}
function bt(t) {
  o(
    t,
    "svelte-pm7idu",
    "div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(\n      --notify-onboard-timer-color,\n      var(--onboard-gray-300, var(--gray-300))\n    );margin-left:4px}"
  );
}
function gt(t) {
  let n,
    e,
    o,
    i,
    a = t[2](t[1] - t[0]) + "";
  return {
    c() {
      (n = W("-\n    ")),
        (e = y("span")),
        (o = W(a)),
        (i = W("\n    ago")),
        m(e, "class", "svelte-pm7idu");
    },
    m(t, a) {
      r(t, n, a), r(t, e, a), w(e, o), r(t, i, a);
    },
    p(t, n) {
      3 & n && a !== (a = t[2](t[1] - t[0]) + "") && X(o, a);
    },
    d(t) {
      t && d(n), t && d(e), t && d(i);
    },
  };
}
function xt(t) {
  let n,
    e = t[0] && gt(t);
  return {
    c() {
      (n = y("div")), e && e.c(), m(n, "class", "time svelte-pm7idu");
    },
    m(t, o) {
      r(t, n, o), e && e.m(n, null);
    },
    p(t, [o]) {
      t[0]
        ? e
          ? e.p(t, o)
          : ((e = gt(t)), e.c(), e.m(n, null))
        : e && (e.d(1), (e = null));
    },
    i: Q,
    o: Q,
    d(t) {
      t && d(n), e && e.d();
    },
  };
}
function kt(t, n, e) {
  let o, i;
  u(t, K, (t) => e(3, (o = t))), u(t, rt, (t) => e(4, (i = t)));
  let { startTime: r } = n;
  let a = Date.now();
  const s = setInterval(() => {
    e(1, (a = Date.now()));
  }, 1e3);
  return (
    _(() => {
      clearInterval(s);
    }),
    (t.$$set = (t) => {
      "startTime" in t && e(0, (r = t.startTime));
    }),
    [
      r,
      a,
      function (t) {
        const n = Math.floor(t / 1e3),
          e = n < 0 ? 0 : n;
        return e >= 60
          ? `${Math.floor(e / 60).toLocaleString(i)} ${o(
              "notify.time.minutes"
            )}`
          : `${e.toLocaleString(i)} ${o("notify.time.seconds")}`;
      },
    ]
  );
}
class wt extends t {
  constructor(t) {
    super(), n(this, t, kt, xt, e, { startTime: 0 }, bt);
  }
}
function $t(t) {
  o(
    t,
    "svelte-1otz6tt",
    "div.notify-transaction-data.svelte-1otz6tt{font-size:var(\n      --notify-onboard-transaction-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(\n      --notify-onboard-hash-time-font-size,\n      var(--onboard-font-size-7, var(--font-size-7))\n    );line-height:var(\n      --notify-onboard-hash-time-font-line-height,\n      var(--onboard-font-line-height-4, var(--font-line-height-4))\n    )}.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-address-hash-color,\n      var(--onboard-primary-200, var(--primary-200))\n    )}a.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-anchor-color,\n      var(--onboard-primary-400, var(--primary-400))\n    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(\n      --notify-onboard-font-size-5,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}"
  );
}
function zt(t) {
  let n, e, o, i;
  function s(t, n) {
    return t[0].link ? jt : Ct;
  }
  let c = s(t),
    f = c(t);
  return (
    (o = new wt({ props: { startTime: t[0].startTime } })),
    {
      c() {
        (n = y("span")),
          f.c(),
          (e = g()),
          b(o.$$.fragment),
          m(n, "class", "hash-time svelte-1otz6tt");
      },
      m(t, a) {
        r(t, n, a), f.m(n, null), w(n, e), k(o, n, null), (i = !0);
      },
      p(t, i) {
        c === (c = s(t)) && f
          ? f.p(t, i)
          : (f.d(1), (f = c(t)), f && (f.c(), f.m(n, e)));
        const r = {};
        1 & i && (r.startTime = t[0].startTime), o.$set(r);
      },
      i(t) {
        i || (a(o.$$.fragment, t), (i = !0));
      },
      o(t) {
        l(o.$$.fragment, t), (i = !1);
      },
      d(t) {
        t && d(n), f.d(), S(o);
      },
    }
  );
}
function Ct(t) {
  let n,
    e,
    o = it(t[0].id) + "";
  return {
    c() {
      (n = y("div")), (e = W(o)), m(n, "class", "address-hash svelte-1otz6tt");
    },
    m(t, o) {
      r(t, n, o), w(n, e);
    },
    p(t, n) {
      1 & n && o !== (o = it(t[0].id) + "") && X(e, o);
    },
    d(t) {
      t && d(n);
    },
  };
}
function jt(t) {
  let n,
    e,
    o,
    i = it(t[0].id) + "";
  return {
    c() {
      (n = y("a")),
        (e = W(i)),
        m(n, "class", "address-hash svelte-1otz6tt"),
        m(n, "href", (o = t[0].link)),
        m(n, "target", "_blank"),
        m(n, "rel", "noreferrer noopener");
    },
    m(t, o) {
      r(t, n, o), w(n, e);
    },
    p(t, r) {
      1 & r && i !== (i = it(t[0].id) + "") && X(e, i),
        1 & r && o !== (o = t[0].link) && m(n, "href", o);
    },
    d(t) {
      t && d(n);
    },
  };
}
function Lt(t) {
  let n,
    e,
    o,
    i,
    f,
    v = t[0].message + "",
    p =
      t[0].id &&
      !t[0].id.includes("customNotification") &&
      !t[0].id.includes("preflight"),
    u = p && zt(t);
  return {
    c() {
      (n = y("div")),
        (e = y("span")),
        (o = W(v)),
        (i = g()),
        u && u.c(),
        m(e, "class", "transaction-status svelte-1otz6tt"),
        m(
          n,
          "class",
          "flex flex-column notify-transaction-data svelte-1otz6tt"
        );
    },
    m(t, a) {
      r(t, n, a), w(n, e), w(e, o), w(n, i), u && u.m(n, null), (f = !0);
    },
    p(t, [e]) {
      (!f || 1 & e) && v !== (v = t[0].message + "") && X(o, v),
        1 & e &&
          (p =
            t[0].id &&
            !t[0].id.includes("customNotification") &&
            !t[0].id.includes("preflight")),
        p
          ? u
            ? (u.p(t, e), 1 & e && a(u, 1))
            : ((u = zt(t)), u.c(), a(u, 1), u.m(n, null))
          : u &&
            (s(),
            l(u, 1, 1, () => {
              u = null;
            }),
            c());
    },
    i(t) {
      f || (a(u), (f = !0));
    },
    o(t) {
      l(u), (f = !1);
    },
    d(t) {
      t && d(n), u && u.d();
    },
  };
}
function Pt(t, n, e) {
  let { notification: o } = n;
  return (
    (t.$$set = (t) => {
      "notification" in t && e(0, (o = t.notification));
    }),
    [o]
  );
}
class Tt extends t {
  constructor(t) {
    super(), n(this, t, Pt, Lt, e, { notification: 0 }, $t);
  }
}
const Mt = ["txPool"],
  Rt = ["main", "matic-main"],
  St = ["Ledger", "Trezor", "Keystone", "KeepKey", "D'CENT"],
  Ft = (t) => Mt.includes(t),
  It = (t) => Rt.includes(t),
  Dt = (t) => t && St.includes(t.label);
async function Et({ type: t, wallet: n, transaction: e }) {
  const {
      from: o,
      input: i,
      value: r,
      to: a,
      nonce: s,
      gas: l,
      network: c,
    } = e,
    d = H[c],
    { gasPriceProbability: v } = f.get().notify.replacement,
    { gas: p } = F;
  if (!p) return;
  const [u] = await p.get({ chains: [H[c]], endpoint: "blockPrices" }),
    { maxFeePerGas: y, maxPriorityFeePerGas: m } =
      u.blockPrices[0].estimatedPrices.find(
        ({ confidence: n }) =>
          n ===
          ("speedup" === t
            ? null == v
              ? void 0
              : v.speedup
            : null == v
            ? void 0
            : v.cancel)
      ) || {};
  if (!y || !m) return;
  const h = Y(y),
    b = Y(m),
    g = "0x" === i ? {} : { data: i };
  return n.provider.request({
    method: "eth_sendTransaction",
    params: [
      Object.assign(
        {
          type: "0x2",
          from: o,
          to: "cancel" === t ? o : a,
          chainId: parseInt(d),
          value: tt(BigInt(r)),
          nonce: nt(s),
          gasLimit: nt(l),
          maxFeePerGas: h,
          maxPriorityFeePerGas: b,
        },
        g
      ),
    ],
  });
}
function Nt(t) {
  o(
    t,
    "svelte-ftkynd",
    ".bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(\n      --notify-onboard-border-radius,\n      var(--onboard-border-radius-4, var(--border-radius-4))\n    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(\n      --notify-onboard-transaction-status-color,\n      var(--onboard-primary-100, var(--primary-100))\n    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(\n      --notify-onboard-dropdown-background,\n      var(--onboard-gray-700, var(--gray-700))\n    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(\n      --notify-onboard-dropdown-border-radius,\n      var(--onboard-border-radius-5, var(--border-radius-5))\n    );background-color:transparent;font-size:var(\n      --notify-onboard-dropdown-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );color:var(\n      --notify-onboard-dropdown-text-color,\n      var(--onboard-primary-400, var(--primary-400))\n    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(\n      --notify-onboard-dropdown-btn-hover-background,\n      rgba(146, 155, 237, 0.2)\n    )}"
  );
}
function Ot(t) {
  let n, e, o, i, a, s;
  return {
    c() {
      (n = y("div")),
        (e = y("button")),
        (e.textContent = "Cancel"),
        (o = g()),
        (i = y("button")),
        (i.textContent = "Speed-up"),
        m(e, "class", "dropdown-button svelte-ftkynd"),
        m(i, "class", "dropdown-button svelte-ftkynd"),
        m(
          n,
          "class",
          "dropdown-buttons flex items-center justify-end svelte-ftkynd"
        );
    },
    m(l, c) {
      r(l, n, c),
        w(n, e),
        w(n, o),
        w(n, i),
        a || ((s = [$(e, "click", t[10]), $(i, "click", t[11])]), (a = !0));
    },
    p: Q,
    d(t) {
      t && d(n), (a = !1), q(s);
    },
  };
}
function Vt(t) {
  let n, e, o, i, s, c, f, v, p, u, h, x, C, j;
  (o = new ht({
    props: { notification: t[0], chainStyles: V[H[t[0].network]] },
  })),
    (s = new Tt({ props: { notification: t[0] } }));
  let L = "txPool" === t[0].eventCode && Ot(t);
  return {
    c() {
      (n = y("div")),
        (e = y("div")),
        b(o.$$.fragment),
        (i = g()),
        b(s.$$.fragment),
        (c = g()),
        (f = y("div")),
        (v = y("div")),
        (p = g()),
        (u = y("div")),
        L && L.c(),
        m(v, "class", "flex items-center close-icon svelte-ftkynd"),
        m(
          f,
          "class",
          "notify-close-btn notify-close-btn-" +
            t[4].type +
            " pointer flex svelte-ftkynd"
        ),
        m(e, "class", "flex bn-notify-notification-inner svelte-ftkynd"),
        m(u, "class", "dropdown svelte-ftkynd"),
        G(
          u,
          "dropdown-visible",
          t[2] && t[5] && Ft(t[0].eventCode) && It(t[0].network) && Dt(t[7])
        ),
        m(
          n,
          "class",
          (h =
            "bn-notify-notification bn-notify-notification-" +
            t[0].type +
            "} svelte-ftkynd")
        ),
        G(n, "bn-notify-clickable", t[0].onClick);
    },
    m(a, l) {
      r(a, n, l),
        w(n, e),
        k(o, e, null),
        w(e, i),
        k(s, e, null),
        w(e, c),
        w(e, f),
        w(f, v),
        (v.innerHTML =
          '\n<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n'),
        w(n, p),
        w(n, u),
        L && L.m(u, null),
        (x = !0),
        C ||
          ((j = [
            $(f, "click", z(t[9])),
            $(n, "mouseenter", t[12]),
            $(n, "mouseleave", t[13]),
            $(n, "click", t[8]),
          ]),
          (C = !0));
    },
    p(t, [e]) {
      const i = {};
      1 & e && (i.notification = t[0]),
        1 & e && (i.chainStyles = V[H[t[0].network]]),
        o.$set(i);
      const r = {};
      1 & e && (r.notification = t[0]),
        s.$set(r),
        "txPool" === t[0].eventCode
          ? L
            ? L.p(t, e)
            : ((L = Ot(t)), L.c(), L.m(u, null))
          : L && (L.d(1), (L = null)),
        (!x || 165 & e) &&
          G(
            u,
            "dropdown-visible",
            t[2] && t[5] && Ft(t[0].eventCode) && It(t[0].network) && Dt(t[7])
          ),
        (!x ||
          (1 & e &&
            h !==
              (h =
                "bn-notify-notification bn-notify-notification-" +
                t[0].type +
                "} svelte-ftkynd"))) &&
          m(n, "class", h),
        (!x || 1 & e) && G(n, "bn-notify-clickable", t[0].onClick);
    },
    i(t) {
      x || (a(o.$$.fragment, t), a(s.$$.fragment, t), (x = !0));
    },
    o(t) {
      l(o.$$.fragment, t), l(s.$$.fragment, t), (x = !1);
    },
    d(t) {
      t && d(n), S(o), S(s), L && L.d(), (C = !1), q(j);
    },
  };
}
function Ht(t, n, e) {
  let o, i;
  u(t, B, (t) => e(15, (o = t))), u(t, K, (t) => e(3, (i = t)));
  const { device: r, gas: a } = F;
  let s,
    { notification: l } = n,
    { updateParentOnRemove: c } = n,
    d = !1;
  const f = Z.getValue().find(({ hash: t }) => t === l.id),
    v =
      f &&
      o.find(
        ({ accounts: t }) =>
          !!t.find(({ address: t }) => t.toLowerCase() === f.from.toLowerCase())
      );
  _(() => {
    clearTimeout(s);
  });
  return (
    (t.$$set = (t) => {
      "notification" in t && e(0, (l = t.notification)),
        "updateParentOnRemove" in t && e(1, (c = t.updateParentOnRemove));
    }),
    (t.$$.update = () => {
      1 & t.$$.dirty &&
        l.autoDismiss &&
        (s = setTimeout(() => {
          A(l.id), J(l.id);
        }, l.autoDismiss));
    }),
    [
      l,
      c,
      d,
      i,
      r,
      a,
      f,
      v,
      function (t) {
        (null == l ? void 0 : l.onClick) && l.onClick(t);
      },
      () => {
        A(l.id), J(l.id), c();
      },
      async () => {
        try {
          await Et({ type: "cancel", wallet: v, transaction: f });
        } catch (t) {
          const n = `${f.hash.slice(0, 9)}:txReplaceError${f.hash.slice(-5)}`;
          U({
            id: n,
            type: "hint",
            eventCode: "txError",
            message: i("notify.transaction.txReplaceError"),
            key: n,
            autoDismiss: 4e3,
          });
        }
      },
      async () => {
        try {
          await Et({ type: "speedup", wallet: v, transaction: f });
        } catch (t) {
          const n = `${f.hash.slice(0, 9)}:txReplaceError${f.hash.slice(-5)}`;
          U({
            id: n,
            type: "hint",
            eventCode: "txError",
            message: i("notify.transaction.txReplaceError"),
            key: n,
            autoDismiss: 4e3,
          });
        }
      },
      () => e(2, (d = !0)),
      () => e(2, (d = !1)),
    ]
  );
}
class Gt extends t {
  constructor(t) {
    super(),
      n(this, t, Ht, Vt, e, { notification: 0, updateParentOnRemove: 1 }, Nt);
  }
}
function qt(t) {
  o(
    t,
    "svelte-1h8mmo3",
    "ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(\n      --notify-onboard-font-size,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(\n      --notify-onboard-font-family,\n      var(--onboard-font-family-normal, inherit)\n    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}"
  );
}
function Bt(t, n, e) {
  const o = t.slice();
  return (o[12] = n[e]), o;
}
function Kt(t) {
  let n,
    e,
    o,
    i,
    f = [],
    v = new Map(),
    p = t[2];
  const u = (t) => t[12].key;
  for (let r = 0; r < p.length; r += 1) {
    let n = Bt(t, p, r),
      e = u(n);
    v.set(e, (f[r] = Zt(e, n)));
  }
  return {
    c() {
      n = y("ul");
      for (let t = 0; t < f.length; t += 1) f[t].c();
      m(n, "class", (e = "bn-notify-" + t[0] + " " + t[5] + " svelte-1h8mmo3")),
        m(
          n,
          "style",
          (o = `${
            t[0].includes("top") ? "justify-content:flex-start;" : ""
          }; max-height: calc(100vh - ${
            t[6].expanded
              ? "412px"
              : t[1] && "mobile" !== t[7].type
              ? "82px"
              : t[1] || "mobile" !== t[7].type
              ? "24px"
              : "108px"
          })`)
        );
    },
    m(t, e) {
      r(t, n, e);
      for (let o = 0; o < f.length; o += 1) f[o] && f[o].m(n, null);
      i = !0;
    },
    p(t, r) {
      if (517 & r) {
        (p = t[2]), s();
        for (let t = 0; t < f.length; t += 1) f[t].r();
        f = h(f, r, u, 1, t, p, v, n, D, Zt, null, Bt);
        for (let t = 0; t < f.length; t += 1) f[t].a();
        c();
      }
      (!i ||
        (33 & r &&
          e !== (e = "bn-notify-" + t[0] + " " + t[5] + " svelte-1h8mmo3"))) &&
        m(n, "class", e),
        (!i ||
          (67 & r &&
            o !==
              (o = `${
                t[0].includes("top") ? "justify-content:flex-start;" : ""
              }; max-height: calc(100vh - ${
                t[6].expanded
                  ? "412px"
                  : t[1] && "mobile" !== t[7].type
                  ? "82px"
                  : t[1] || "mobile" !== t[7].type
                  ? "24px"
                  : "108px"
              })`))) &&
          m(n, "style", o);
    },
    i(t) {
      if (!i) {
        for (let t = 0; t < p.length; t += 1) a(f[t]);
        i = !0;
      }
    },
    o(t) {
      for (let n = 0; n < f.length; n += 1) l(f[n]);
      i = !1;
    },
    d(t) {
      t && d(n);
      for (let n = 0; n < f.length; n += 1) f[n].d();
    },
  };
}
function Zt(t, n) {
  let e,
    o,
    i,
    s,
    c,
    f,
    v,
    p,
    u,
    h,
    F = Q;
  return (
    (o = new Gt({
      props: { notification: n[12], updateParentOnRemove: n[9] },
    })),
    {
      key: t,
      first: null,
      c() {
        (e = y("li")),
          b(o.$$.fragment),
          (i = g()),
          m(
            e,
            "class",
            (s =
              x(
                `bn-notify-li-${n[0]} ${
                  n[0].includes("top")
                    ? "notification-list-top"
                    : "notification-list-bottom"
                }`
              ) + " svelte-1h8mmo3")
          ),
          (this.first = e);
      },
      m(t, a) {
        r(t, e, a),
          k(o, e, null),
          w(e, i),
          (p = !0),
          u || ((h = $(e, "click", z(n[10]))), (u = !0));
      },
      p(t, i) {
        n = t;
        const r = {};
        4 & i && (r.notification = n[12]),
          o.$set(r),
          (!p ||
            (1 & i &&
              s !==
                (s =
                  x(
                    `bn-notify-li-${n[0]} ${
                      n[0].includes("top")
                        ? "notification-list-top"
                        : "notification-list-bottom"
                    }`
                  ) + " svelte-1h8mmo3"))) &&
            m(e, "class", s);
      },
      r() {
        v = e.getBoundingClientRect();
      },
      f() {
        C(e), F(), j(e, v);
      },
      a() {
        F(), (F = L(e, v, at, { duration: 500 }));
      },
      i(t) {
        p ||
          (a(o.$$.fragment, t),
          t &&
            P(() => {
              p &&
                (f && f.end(1),
                (c = T(e, M, {
                  duration: 1200,
                  delay: 300,
                  x: n[3],
                  y: n[4],
                  easing: At,
                })),
                c.start());
            }),
          (p = !0));
      },
      o(t) {
        l(o.$$.fragment, t),
          c && c.invalidate(),
          (f = R(e, N, { duration: 300, easing: E })),
          (p = !1);
      },
      d(t) {
        t && d(e), S(o), t && f && f.end(), (u = !1), h();
      },
    }
  );
}
function _t(t) {
  let n,
    e,
    o = t[2].length && Kt(t);
  return {
    c() {
      o && o.c(), (n = i());
    },
    m(t, i) {
      o && o.m(t, i), r(t, n, i), (e = !0);
    },
    p(t, [e]) {
      t[2].length
        ? o
          ? (o.p(t, e), 4 & e && a(o, 1))
          : ((o = Kt(t)), o.c(), a(o, 1), o.m(n.parentNode, n))
        : o &&
          (s(),
          l(o, 1, 1, () => {
            o = null;
          }),
          c());
    },
    i(t) {
      e || (a(o), (e = !0));
    },
    o(t) {
      l(o), (e = !1);
    },
    d(t) {
      o && o.d(t), t && d(n);
    },
  };
}
function At(t) {
  return Math.sin((-13 * (t + 1) * Math.PI) / 2) * Math.pow(2, -35 * t) + 1;
}
function Jt(t, n, e) {
  let o;
  const { device: i } = F,
    r = f.select("accountCenter").pipe(v(f.get().accountCenter), p(1));
  u(t, r, (t) => e(6, (o = t)));
  let a,
    s,
    { position: l } = n,
    { sharedContainer: c } = n,
    { notifications: d } = n;
  (a = 0), (s = 0);
  let y = "y-scroll";
  const m = (function () {
    let t = null;
    return (n, e) => {
      clearTimeout(t), (t = setTimeout(n, e));
    };
  })();
  return (
    (t.$$set = (t) => {
      "position" in t && e(0, (l = t.position)),
        "sharedContainer" in t && e(1, (c = t.sharedContainer)),
        "notifications" in t && e(2, (d = t.notifications));
    }),
    (t.$$.update = () => {
      1 & t.$$.dirty && (l.includes("top") ? e(4, (s = -50)) : e(4, (s = 50)));
    }),
    [
      l,
      c,
      d,
      0,
      s,
      y,
      o,
      i,
      r,
      () => {
        "y-visible" !== y && e(5, (y = "y-visible")),
          m(function () {
            e(5, (y = "y-scroll"));
          }, 1e3);
      },
      function (n) {
        I.call(this, t, n);
      },
    ]
  );
}
class Qt extends t {
  constructor(t) {
    super(),
      n(
        this,
        t,
        Jt,
        _t,
        e,
        { position: 0, sharedContainer: 1, notifications: 2 },
        qt
      );
  }
}
export { Qt as default };

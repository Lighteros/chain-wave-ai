function e(e) {
  let t,
    n,
    o,
    r = !1;
  return function (a) {
    void 0 === t
      ? ((t = a), (n = 0), (o = -1))
      : (t = (function (e, t) {
          const n = new Uint8Array(e.length + t.length);
          return n.set(e), n.set(t, e.length), n;
        })(t, a));
    const i = t.length;
    let c = 0;
    for (; n < i; ) {
      r && (10 === t[n] && (c = ++n), (r = !1));
      let a = -1;
      for (; n < i && -1 === a; ++n)
        switch (t[n]) {
          case 58:
            -1 === o && (o = n - c);
            break;
          case 13:
            r = !0;
          case 10:
            a = n;
        }
      if (-1 === a) break;
      e(t.subarray(c, a), o), (c = n), (o = -1);
    }
    c === i ? (t = void 0) : 0 !== c && ((t = t.subarray(c)), (n -= c));
  };
}
var t = function (e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) &&
      t.indexOf(o) < 0 &&
      (n[o] = e[o]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
        (n[o[r]] = e[o[r]]);
  }
  return n;
};
const n = "text/event-stream",
  o = "last-event-id";
function r(r, i) {
  var {
      signal: c,
      headers: s,
      onopen: l,
      onmessage: d,
      onclose: u,
      onerror: f,
      openWhenHidden: b,
      fetch: y,
    } = i,
    v = t(i, [
      "signal",
      "headers",
      "onopen",
      "onmessage",
      "onclose",
      "onerror",
      "openWhenHidden",
      "fetch",
    ]);
  return new Promise((t, i) => {
    const h = Object.assign({}, s);
    let w;
    function g() {
      w.abort(), document.hidden || E();
    }
    h.accept || (h.accept = n),
      b || document.addEventListener("visibilitychange", g);
    let p = 1e3,
      m = 0;
    function O() {
      document.removeEventListener("visibilitychange", g),
        window.clearTimeout(m),
        w.abort();
    }
    null == c ||
      c.addEventListener("abort", () => {
        O(), t();
      });
    const j = null != y ? y : window.fetch,
      x = null != l ? l : a;
    async function E() {
      var n;
      w = new AbortController();
      try {
        const n = await j(
          r,
          Object.assign(Object.assign({}, v), { headers: h, signal: w.signal })
        );
        await x(n),
          await (async function (e, t) {
            const n = e.getReader();
            let o;
            for (; !(o = await n.read()).done; ) t(o.value);
          })(
            n.body,
            e(
              (function (e, t, n) {
                let o = { data: "", event: "", id: "", retry: void 0 };
                const r = new TextDecoder();
                return function (a, i) {
                  if (0 === a.length)
                    null == n || n(o),
                      (o = { data: "", event: "", id: "", retry: void 0 });
                  else if (i > 0) {
                    const n = r.decode(a.subarray(0, i)),
                      c = i + (32 === a[i + 1] ? 2 : 1),
                      s = r.decode(a.subarray(c));
                    switch (n) {
                      case "data":
                        o.data = o.data ? o.data + "\n" + s : s;
                        break;
                      case "event":
                        o.event = s;
                        break;
                      case "id":
                        e((o.id = s));
                        break;
                      case "retry":
                        const n = parseInt(s, 10);
                        isNaN(n) || t((o.retry = n));
                    }
                  }
                };
              })(
                (e) => {
                  e ? (h[o] = e) : delete h[o];
                },
                (e) => {
                  p = e;
                },
                d
              )
            )
          ),
          null == u || u(),
          O(),
          t();
      } catch (a) {
        if (!w.signal.aborted)
          try {
            const e =
              null !== (n = null == f ? void 0 : f(a)) && void 0 !== n ? n : p;
            window.clearTimeout(m), (m = window.setTimeout(E, e));
          } catch (c) {
            O(), i(c);
          }
      }
    }
    E();
  });
}
function a(e) {
  const t = e.headers.get("content-type");
  if (!(null == t ? void 0 : t.startsWith(n)))
    throw new Error(`Expected content-type to be ${n}, Actual: ${t}`);
}
export { r as f };

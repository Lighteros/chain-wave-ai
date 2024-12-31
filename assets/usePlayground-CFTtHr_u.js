import {
  bh as e,
  r as t,
  at as n,
  aK as a,
  bq as r,
  br as s,
  aR as u,
  bs as l,
  bt as o,
  n as i,
  a as c,
} from "./index-DPRREYlk.js";
function v(v, p, f, d) {
  const h = e(),
    m = t(!1),
    S = t([]),
    g = t(),
    y = t([]),
    b = n(f),
    j = t(null),
    w = a(),
    A = r("isLoginRequired", !1),
    P = s();
  function O() {
    return c(p());
  }
  async function J() {
    if (A && !P.value)
      return l.warn("You need to login first."), void (S.value = []);
    const e = o(v).endpoint;
    if (!e) return;
    const t = S.value?.at(-1);
    if (!t) return;
    (j.value = O()),
      (j.value.role = "assistant"),
      (m.value = !0),
      (w.value = new AbortController());
    const n = O();
    n.role = "assistant";
    const a = Object.fromEntries(y.value.map((e) => [e.name, e.value])),
      r = JSON.parse(e.inputJson || "{}");
    t.input = { ...r, ...(t.input || {}), ...b, ...a };
    const s = o(v).apiKey || h.getUserInfo?.apiKey;
    return fetch(e.requestUrl || "", {
      method: "POST",
      body: JSON.stringify(t.input),
      signal: w.value.signal,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(s ? { Authorization: `Bearer ${s}` } : {}),
      },
    })
      .then(async (e) => {
        if (e.ok) return e.json();
        if (429 === e.status)
          return (
            (n.error = { status: 429 }),
            S.value.push(n),
            Promise.reject("Ratelimit exceeded")
          );
        if (
          500 == e.status &&
          e.headers.get("content-type")?.includes("application/json")
        ) {
          const t = await e.json();
          if (t.code && "SYSTEM_BUSY" == t.code)
            return (
              (n.error = { status: 503 }),
              S.value.push(n),
              Promise.reject("System busy")
            );
        }
        return Promise.reject("Unknown error");
      })
      .then(async (e) =>
        "SUCCESS" !== e.code
          ? ((n.error = { status: 400 }),
            (n.output = e.message),
            S.value.push(n),
            Promise.reject("API error"))
          : ((n.output = e), Promise.resolve(e))
      )
      .then((e) => d?.handlerResponse(n, e))
      .then(() => {
        S.value.push(n);
      })
      .finally(() => {
        m.value = !1;
      });
  }
  return (
    u(
      () => [o(v).defaultMessageList, o(v).endpoint],
      () => {
        if (d?.rewriteWatcher) return void d.rewriteWatcher();
        if (!o(v).endpoint) return;
        if (o(v).defaultMessageList)
          S.value = o(v).defaultMessageList?.slice() || [];
        else
          try {
            const e = o(v).endpoint;
            if (!e) return;
            const t = JSON.parse(e.inputJson);
            Object.assign(b, t);
            const n = O();
            (n.input = { ...t, ...b }), (S.value = [n]);
          } catch (t) {}
        if (m.value) return;
        const e = S.value?.at(-1);
        "user" === e?.role &&
          J().finally(() => {
            (j.value = null), g.value?.handleScroll();
          });
      },
      { immediate: !0 }
    ),
    {
      messageList: S,
      layoutRef: g,
      parameters: y,
      formState: b,
      onStreaming: m,
      currentAssistantMessage: j,
      regenerate: function () {
        (S.value = S.value.slice(0, -1)),
          i(() => {
            g.value?.handleScroll(),
              J().finally(() => {
                (j.value = null), g.value?.handleScroll();
              });
          });
      },
      invokeEndpointApi: J,
      onSend: function () {
        if (A && !P.value)
          return l.warn("You need to login first."), void (S.value = []);
        const e = O();
        (e.role = "user"),
          (e.input = { ...b }),
          S.value.push(e),
          J().finally(() => {
            (j.value = null), g.value?.handleScroll();
          });
      },
      onAbort: function () {
        w.value &&
          m.value &&
          ((m.value = !1),
          (j.value = null),
          w.value.abort("aborted"),
          (w.value = null));
      },
    }
  );
}
export { v as u };

import { E as e } from "./Endpoint-DTdkXGrW.js";
import { e as t } from "./gpt-B67tY-GB.js";
import { bh as n, r as o, bf as r } from "./index-DPRREYlk.js";
import { f as s } from "./fetch-D5K_4anA.js";
class a extends Error {}
function i(e, n = 4080) {
  const o = () => t(e.map((e) => e.content).join("\n\n")).length;
  let r = o();
  for (; e.length > 1 && r > n; )
    "assistant" === e.at(0)?.role && e.shift(), o() > n && e.shift(), (r = o());
  return e;
}
function c() {
  const t = n(),
    i = o(),
    c = (e) => (i.value = e);
  return {
    startStream: async (n, o, i, p, l, f, m) => {
      const u = new AbortController();
      c(u);
      const d = Object.assign(
        (function (t, n) {
          const o = JSON.parse(t.inputJson);
          return (
            t.apiType === e.CHAT_COMPLETIONS
              ? (o.messages = [...n.map((e) => r(e, ["content", "role"]))])
              : t.apiType === e.COMPLETIONS &&
                (o.prompt = n?.at(-1)?.content || ""),
            o
          );
        })(n, o),
        p || {}
      );
      d.functions = i?.value;
      const h = f || t.getUserInfo?.apiKey;
      await s(n.requestUrl, {
        signal: u.signal,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(!h || m ? {} : { Authorization: `Bearer ${h}` }),
        },
        body: JSON.stringify(d),
        openWhenHidden: !0,
        onopen: async (e) =>
          e.ok
            ? Promise.resolve()
            : 429 == e.status
            ? Promise.reject(new a("Ratelimit exceeded"))
            : Promise.reject(new Error("Server error")),
        onmessage(e) {
          l && "function" == typeof l && l(e);
        },
        onclose() {
          l && "function" == typeof l && l("closed"), c(null);
        },
        onerror(e) {
          throw (
            (l &&
              "function" == typeof l &&
              l(e instanceof a ? "ratelimit" : "error"),
            c(null),
            e)
          );
        },
      });
    },
    stopStream: () => {
      i.value?.abort(), c(null);
    },
  };
}
export { i as s, c as u };

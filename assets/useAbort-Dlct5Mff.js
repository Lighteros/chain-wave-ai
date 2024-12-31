import { aK as e, c as r, aL as a, aP as n } from "./index-DPRREYlk.js";
function o() {
  const o = e();
  function t(e) {
    return (
      !!o.value && (o.value.abort(e), (o.value = new AbortController()), !0)
    );
  }
  const l = r(() => o.value.signal);
  return (
    a(() => {
      o.value = new AbortController();
    }),
    n(() => {
      t();
    }),
    {
      abort: t,
      signal: l,
      interruptable: function (e) {
        return (
          t(),
          Promise.resolve(e(l.value, l.value)).catch((e) => {
            if (!e || !e.name || "CanceledError" !== e.name) throw e;
          })
        );
      },
    }
  );
}
export { o as u };

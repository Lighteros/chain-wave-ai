import { be as e, bf as t, bg as n } from "./index-DPRREYlk.js";
function o(e, t, n, o) {
  const r = new Blob([e], { type: "application/octet-stream" }),
    i = window.URL.createObjectURL(r),
    a = document.createElement("a");
  (a.style.display = "none"),
    (a.href = i),
    a.setAttribute("download", t),
    void 0 === a.download && a.setAttribute("target", "_blank"),
    document.body.appendChild(a),
    a.click(),
    document.body.removeChild(a),
    window.URL.revokeObjectURL(i);
}
function r({ url: t, target: n = "_blank", fileName: o, directly: r = !1 }) {
  const i = window.navigator.userAgent.toLowerCase().includes("chrome"),
    a = window.navigator.userAgent.toLowerCase().includes("safari");
  if (/(iP)/.test(window.navigator.userAgent)) return !1;
  if (i || a) {
    const e = document.createElement("a");
    if (
      ((e.href = t),
      r || (e.target = n),
      e.download ||
        (e.download = o || t.substring(t.lastIndexOf("/") + 1, t.length)),
      r)
    )
      return e.click(), !0;
    if (document.createEvent) {
      const t = document.createEvent("MouseEvents");
      return t.initEvent("click", !0, !0), e.dispatchEvent(t), !0;
    }
  }
  return t.includes("?") || (t += "?download"), e(t, { target: n }), !0;
}
function i(e, r, i) {
  if (Number(r.pageSize) < 1 || Number(r.pageSize) > 3e4)
    return void i.onError?.(
      new Error("Page size must be between 1 and 30,000")
    );
  const a = JSON.stringify(
    t(r, [
      "workflowId",
      "runId",
      "edgeId",
      "timeZone",
      "type",
      "keyword",
      "startTime",
      "endTime",
      "logLevel",
      "pageSize",
      "pageNum",
      "runIdList",
    ])
  );
  return (
    i.onStart?.(),
    fetch(e, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: i.token },
      body: a,
    })
      .then((e) => {
        if (!e.ok)
          return void i.onError?.(new Error(`HTTP error! status: ${e.status}`));
        const t = e.headers.get("content-disposition"),
          r = t && t.split(";")[1].trim().split("=")[1].replace(/"/g, "");
        return (
          i.onSuccess?.(),
          e.blob().then((e) => {
            const t = n();
            return o(e, r || i?.fileNameFn?.(t) || `${t}.log`);
          })
        );
      })
      .catch((e) => {
        i.onError?.(e);
      })
  );
}
export { o as a, i as b, r as d };

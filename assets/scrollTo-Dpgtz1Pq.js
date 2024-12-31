import { dx as n } from "./index-DPRREYlk.js";
function o(n) {
  return null != n && n === n.window;
}
function t(n, t) {
  var e, l;
  if ("undefined" == typeof window) return 0;
  const c = "scrollTop";
  let i = 0;
  return (
    o(n)
      ? (i = n.scrollY)
      : n instanceof Document
      ? (i = n.documentElement[c])
      : (n instanceof HTMLElement || n) && (i = n[c]),
    n &&
      !o(n) &&
      "number" != typeof i &&
      (i =
        null ===
          (l = (null !== (e = n.ownerDocument) && void 0 !== e ? e : n)
            .documentElement) || void 0 === l
          ? void 0
          : l[c]),
    i
  );
}
function e(e) {
  let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  const { getContainer: c = () => window, callback: i, duration: r = 450 } = l,
    u = c(),
    s = t(u),
    d = Date.now(),
    f = () => {
      const t = Date.now() - d,
        l = (function (n, o, t, e) {
          const l = t - o;
          return (n /= e / 2) < 1
            ? (l / 2) * n * n * n + o
            : (l / 2) * ((n -= 2) * n * n + 2) + o;
        })(t > r ? r : t, s, e, r);
      o(u)
        ? u.scrollTo(window.scrollX, l)
        : u instanceof Document
        ? (u.documentElement.scrollTop = l)
        : (u.scrollTop = l),
        t < r ? n(f) : "function" == typeof i && i();
    };
  n(f);
}
export { t as g, e as s };

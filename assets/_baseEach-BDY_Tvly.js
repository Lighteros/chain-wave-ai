import { eu as r, cH as n } from "./index-DPRREYlk.js";
var t = function (r, n, t) {
  for (var e = -1, u = Object(r), a = t(r), f = a.length; f--; ) {
    var i = a[++e];
    if (!1 === n(u[i], i, u)) break;
  }
  return r;
};
var e,
  u =
    ((e = function (n, e) {
      return n && t(n, e, r);
    }),
    function (r, t) {
      if (null == r) return r;
      if (!n(r)) return e(r, t);
      for (
        var u = r.length, a = -1, f = Object(r);
        ++a < u && !1 !== t(f[a], a, f);

      );
      return r;
    });
export { u as b };

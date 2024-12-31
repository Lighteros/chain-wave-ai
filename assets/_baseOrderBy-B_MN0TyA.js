import {
  cH as r,
  ep as n,
  ew as t,
  bi as e,
  ex as i,
  ey as u,
  ez as a,
  bd as o,
} from "./index-DPRREYlk.js";
import { b as f } from "./_baseEach-BDY_Tvly.js";
function c(r, t) {
  if (r !== t) {
    var e = void 0 !== r,
      i = null === r,
      u = r == r,
      a = n(r),
      o = void 0 !== t,
      f = null === t,
      c = t == t,
      s = n(t);
    if (
      (!f && !s && !a && r > t) ||
      (a && o && c && !f && !s) ||
      (i && o && c) ||
      (!e && c) ||
      !u
    )
      return 1;
    if (
      (!i && !a && !s && r < t) ||
      (s && e && u && !i && !a) ||
      (f && e && u) ||
      (!o && u) ||
      !c
    )
      return -1;
  }
  return 0;
}
function s(n, s, l) {
  s = s.length
    ? t(s, function (r) {
        return e(r)
          ? function (n) {
              return i(n, 1 === r.length ? r[0] : r);
            }
          : r;
      })
    : [u];
  var v = -1;
  s = t(s, a(o));
  var d = (function (n, t) {
    var e = -1,
      i = r(n) ? Array(n.length) : [];
    return (
      f(n, function (r, n, u) {
        i[++e] = t(r, n, u);
      }),
      i
    );
  })(n, function (r, n, e) {
    return {
      criteria: t(s, function (n) {
        return n(r);
      }),
      index: ++v,
      value: r,
    };
  });
  return (function (r, n) {
    var t = r.length;
    for (r.sort(n); t--; ) r[t] = r[t].value;
    return r;
  })(d, function (r, n) {
    return (function (r, n, t) {
      for (
        var e = -1, i = r.criteria, u = n.criteria, a = i.length, o = t.length;
        ++e < a;

      ) {
        var f = c(i[e], u[e]);
        if (f) return e >= o ? f : f * ("desc" == t[e] ? -1 : 1);
      }
      return r.index - n.index;
    })(r, n, l);
  });
}
export { s as b };

import {
  cG as r,
  cH as n,
  cI as s,
  cJ as t,
  cK as a,
  cL as e,
} from "./index-DPRREYlk.js";
import { b as i } from "./_baseOrderBy-B_MN0TyA.js";
function c(a, e, i) {
  if (!r(i)) return !1;
  var c = typeof e;
  return (
    !!("number" == c ? n(i) && s(e, i.length) : "string" == c && e in i) &&
    t(i[e], a)
  );
}
var o = a(function (r, n) {
  if (null == r) return [];
  var s = n.length;
  return (
    s > 1 && c(r, n[0], n[1])
      ? (n = [])
      : s > 2 && c(n[0], n[1], n[2]) && (n = [n[0]]),
    i(r, e(n), [])
  );
});
export { o as s };

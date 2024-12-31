import { b9 as e, aK as s, at as t, b2 as a } from "./index-CcOpQHgp.js";
const c = ["class", "style"],
  n = /^on[A-Z]/;
function r(r = {}) {
  const u = e();
  if (!u) return {};
  const {
      excludeListeners: o = !1,
      excludeKeys: l = [],
      excludeDefaultKeys: d = !0,
    } = r,
    i = s({}),
    x = l.concat(d ? c : []);
  return (
    (u.attrs = t(u.attrs)),
    a(() => {
      const e = ((s = u.attrs), Object.keys(s).map((e) => [e, s[e]])).reduce(
        (e, [s, t]) => (x.includes(s) || (o && n.test(s)) || (e[s] = t), e),
        {}
      );
      var s;
      i.value = e;
    }),
    i
  );
}
export { r as u };

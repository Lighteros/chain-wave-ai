import { b8 as n } from "./index-DPRREYlk.js";
function e(e, t = "default", r) {
  if (!e || !Reflect.has(e, t)) return null;
  if (!n(e[t])) return null;
  const u = e[t];
  return u ? u(r) : null;
}
function t(n, t = []) {
  const r = Object.keys(n),
    u = {};
  return (
    r.map((r) => {
      if (t.includes(r)) return null;
      u[r] = () => e(n, r);
    }),
    u
  );
}
export { t as e, e as g };

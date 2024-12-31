import { aN as e, bL as r } from "./index-DPRREYlk.js";
const a = "/api/v1/model/list",
  l = "/api/v1/model/create",
  o = "/api/v1/model/queryModelDetail",
  t = "/api/v1/model/queryModelVersionList",
  i = "/api/v1/model/convertFileTree",
  s = "/api/v1/model/update",
  n = "/api/v1/model";
function p(r) {
  return e.post(
    { url: s, params: r },
    { isTransformResponse: !0, apiUrl: "/fedmlModelServer" }
  );
}
function d(r) {
  return e.get({ url: t, params: r }, { apiUrl: "/fedmlModelServer" });
}
function m(r) {
  return e.get({ url: o, params: r }, { apiUrl: "/fedmlModelServer" });
}
function u(r) {
  return e.get(
    { url: a, params: r, timeout: 2e4 },
    { apiUrl: "/fedmlModelServer" }
  );
}
function f(r) {
  return e.post(
    { url: l, params: r },
    { isTransformResponse: !0, apiUrl: "/fedmlModelServer" }
  );
}
function v(r) {
  return e.get(
    { url: i, params: r, timeout: 2e4 },
    { apiUrl: "/fedmlModelServer" }
  );
}
function c(a) {
  return e.delete(
    { url: n, params: a, headers: { "Content-Type": r.FORM_URLENCODED } },
    { apiUrl: "/fedmlModelServer" }
  );
}
export { d as a, f as b, v as c, c as d, u as g, m as q, p as u };

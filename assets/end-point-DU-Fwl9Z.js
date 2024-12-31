import { bj as n } from "./index-DPRREYlk.js";
const e = n("/fedmlModelServer"),
  r = "/api/v1/endpoint/delete",
  t = "/api/v1/endpoint/list",
  a = "/api/v1/endpoint/queryEndpointDetail",
  i = "/api/v1/endpoint/queryEndpointDetail",
  o = "/api/v1/endpoint/availableLlm",
  p = "/api/v1/resource/on-premise/list";
function s(n) {
  return e.get({ url: o, params: n });
}
function u(n) {
  return e.post({ url: r, params: n }, { isTransformResponse: !0 });
}
function l(n) {
  return e.get({ url: a, params: n });
}
function d() {
  return e.get({ url: p });
}
function m(n) {
  return e.get({ url: t, params: n });
}
function c(n) {
  return e.get({ url: i, params: { id: n } });
}
export { m as a, s as b, d as c, u as d, l as g, c as q };

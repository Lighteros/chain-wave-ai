import { b8 as t, aR as e, r as n, bb as o } from "./index-CcOpQHgp.js";
function r(r, a, s = !1) {
  if (!t(r)) throw new Error("handle is not Function!");
  const {
    readyRef: i,
    stop: u,
    start: f,
  } = (function (t) {
    const e = n(!1);
    let r;
    function a() {
      (e.value = !1), r && window.clearTimeout(r);
    }
    function s() {
      a(),
        (r = setTimeout(() => {
          e.value = !0;
        }, t));
    }
    return s(), o(a), { readyRef: e, stop: a, start: s };
  })(a);
  return (
    s
      ? r()
      : e(
          i,
          (t) => {
            t && r();
          },
          { immediate: !1 }
        ),
    { readyRef: i, stop: u, start: f }
  );
}
export { r as u };

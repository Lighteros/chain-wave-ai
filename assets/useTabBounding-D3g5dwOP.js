import { r as t, bK as e, c as n } from "./index-DPRREYlk.js";
function i(i) {
  const o = t(),
    a = e(o),
    r = n(() => {
      const { tabHeight: t = 40, gap: e = 16 } = i || {};
      return window.innerHeight - a.top.value - (4 * e + t);
    }),
    h = n(() => ({ height: `${r.value}px`, overflowX: "hidden" }));
  return { tabRef: o, bounding: a, height: r, tabContentHeight: h };
}
export { i as u };

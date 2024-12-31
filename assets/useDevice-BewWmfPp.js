import {
  as as s,
  bA as n,
  bp as a,
  b9 as e,
  c as t,
  bk as o,
  bw as r,
  au as l,
  bo as i,
  ax as c,
  bl as m,
  bm as p,
  av as u,
  aD as d,
  aB as b,
  dQ as x,
  dV as I,
} from "./index-DPRREYlk.js";
import { p as y } from "./propTypes-BC7VambV.js";
const f = s({
    name: "DropdownMenuItem",
    components: { MenuItem: n.Item, Icon: a },
    props: {
      iconClass: y.any,
      itemIndex: y.string,
      text: y.string,
      icon: y.string,
    },
    setup(s) {
      const n = e();
      return { itemKey: t(() => s.itemIndex || n?.vnode?.props?.key) };
    },
  }),
  k = { class: "flex items-center" };
const M = o(f, [
  [
    "render",
    function (s, n, e, t, o, x) {
      const I = a,
        y = r("MenuItem");
      return (
        l(),
        i(
          y,
          { key: s.itemIndex },
          {
            default: c(() => [
              m("span", k, [
                s.icon
                  ? (l(),
                    i(
                      I,
                      { key: 0, icon: s.icon, class: p(["mr-1", s.iconClass]) },
                      null,
                      8,
                      ["icon", "class"]
                    ))
                  : s.iconClass
                  ? (l(),
                    u(
                      "div",
                      { key: 1, class: p(["mr-1", s.iconClass]) },
                      null,
                      2
                    ))
                  : d("", !0),
                m("span", null, b(s.text), 1),
              ]),
            ]),
            _: 1,
          }
        )
      );
    },
  ],
]);
function g() {
  const s = x(I),
    n = s.smallerOrEqual("lg");
  return { isMobile: s.smallerOrEqual("sm"), isSmallDesktop: n };
}
export { M, g as u };

import {
  as as e,
  bC as o,
  bD as a,
  au as l,
  av as t,
  bo as s,
  ax as i,
  aw as n,
  aD as r,
  a as u,
  aC as d,
  bp as c,
  az as p,
  cR as m,
} from "./index-DPRREYlk.js";
import { P as f } from "./index-4U7T8gMN.js";
const y = e({
  __name: "CommonTools",
  props: o(
    { layoutRef: {}, endpoint: {}, isPublicPlayground: { type: Boolean } },
    { messageList: { required: !0 }, messageListModifiers: {} }
  ),
  emits: ["update:messageList"],
  setup(e) {
    const o = a(e, "messageList");
    return (e, a) => {
      const y = c,
        g = p,
        h = m;
      return (
        l(),
        t(
          d,
          null,
          [
            o.value.length > 0
              ? (l(),
                s(
                  h,
                  {
                    key: 0,
                    title: "Scroll to bottom",
                    "destroy-tooltip-on-hide": "",
                  },
                  {
                    default: i(() => [
                      n(
                        g,
                        {
                          shape: "circle",
                          onClick:
                            a[0] ||
                            (a[0] = (o) => e.layoutRef?.handleScroll("bottom")),
                        },
                        {
                          default: i(() => [
                            n(y, {
                              icon: "i-solar:map-arrow-down-line-duotone",
                            }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ))
              : r("", !0),
            o.value.length > 0
              ? (l(),
                s(
                  h,
                  {
                    key: 1,
                    title: "Scroll to top",
                    "destroy-tooltip-on-hide": "",
                  },
                  {
                    default: i(() => [
                      n(
                        g,
                        {
                          shape: "circle",
                          onClick:
                            a[1] ||
                            (a[1] = (o) => e.layoutRef?.handleScroll("top")),
                        },
                        {
                          default: i(() => [
                            n(y, { icon: "i-solar:map-arrow-up-line-duotone" }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ))
              : r("", !0),
            o.value.length > 0
              ? (l(),
                s(
                  h,
                  {
                    key: 2,
                    title: "Clear all messages",
                    "destroy-tooltip-on-hide": "",
                  },
                  {
                    default: i(() => [
                      n(
                        g,
                        {
                          title: "Are you sure to clear all messages?",
                          shape: "circle",
                          onClick: a[2] || (a[2] = (e) => (o.value = [])),
                        },
                        {
                          default: i(() => [
                            n(y, { icon: "i-icon-park-solid:clear-format" }),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    _: 1,
                  }
                ))
              : r("", !0),
            e.isPublicPlayground
              ? r("", !0)
              : (l(),
                s(u(f), { key: 3, endpoint: e.endpoint }, null, 8, [
                  "endpoint",
                ])),
          ],
          64
        )
      );
    };
  },
});
export { y as default };

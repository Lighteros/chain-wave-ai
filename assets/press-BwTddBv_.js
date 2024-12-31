import {
  as as s,
  aL as t,
  au as e,
  av as i,
  bl as a,
  aC as r,
  bN as p,
  a as o,
  bY as l,
  co as n,
  aw as m,
  bo as d,
  ax as c,
  aB as u,
  d8 as g,
} from "./index-DPRREYlk.js";
import { u as j, _ as x } from "./official-Cx2kpvWv.js";
import { _ as b } from "./FooterBar.vue_vue_type_script_setup_true_lang-BinsM33Q.js";
import { _ } from "./index-CacitUCz.js";
import "./tres-CddIvILV.js";
import "./official-website-Cnxq3Yc9.js";
import "./providerSetting-DCkM4vP5.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./index-BPauqaGF.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./DownOutlined-BDMVSGUf.js";
import "./CheckOutlined-BvF8M63J.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./zh_CN-CAyhejr6.js";
const f = { "min-h-screen": "", "bg-codark": "" },
  v = { class: "pt-16", "max-w-1920px": "", "mx-auto": "" },
  h = { bg: "codark", class: "pt-20 pb-15" },
  k = a(
    "h2",
    {
      "px-16": "",
      "py-15": "",
      "text-3xl": "",
      "mb-0": "",
      "lt-md": "px-4 py-8",
    },
    " Press ",
    -1
  ),
  y = {
    class: "grid grid-cols-1 gap-15 px-16",
    "lt-lg": "grid-cols-1 gap-6",
    "lt-md": "grid-cols-1 px-4",
  },
  w = { class: "space-y-4" },
  L = { "text-base": "", "text-gray": "", "line-clamp-4": "" },
  O = { "px-16": "", flex: "~ justify-end" },
  P = s({
    __name: "press",
    setup(s) {
      const P = j();
      return (
        t(() => {
          P.init();
        }),
        (s, t) => {
          const j = _;
          return (
            e(),
            i("div", f, [
              a("section", v, [
                a("div", h, [
                  k,
                  a("div", y, [
                    (e(!0),
                    i(
                      r,
                      null,
                      p(
                        o(P).getPressList,
                        (s) => (
                          e(),
                          d(
                            x,
                            {
                              key: s.id,
                              row: "",
                              title: s.title,
                              post: s.pictureUrl,
                              description: o(g)(s.releaseTime),
                              link: s.link,
                            },
                            {
                              title: c(() => [
                                a("div", w, [
                                  a("div", null, u(s.title), 1),
                                  a("p", L, u(s.description), 1),
                                ]),
                              ]),
                              _: 2,
                            },
                            1032,
                            ["title", "post", "description", "link"]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  l(
                    a(
                      "div",
                      O,
                      [
                        m(
                          j,
                          {
                            "bg-white": "",
                            "p-2": "",
                            current: o(P).state.press.pageNum,
                            "page-size": o(P).state.press.pageSize,
                            total: o(P).state.press.total,
                            "show-less-items": "",
                            onChange:
                              t[0] || (t[0] = (s) => o(P).loadPressList(s)),
                          },
                          null,
                          8,
                          ["current", "page-size", "total"]
                        ),
                      ],
                      512
                    ),
                    [[n, o(P).state.press.totalPage > 1]]
                  ),
                ]),
                m(b),
              ]),
            ])
          );
        }
      );
    },
  });
export { P as default };

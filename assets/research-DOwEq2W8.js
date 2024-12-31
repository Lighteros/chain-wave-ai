import {
  as as e,
  aL as t,
  bX as a,
  au as s,
  av as i,
  bl as r,
  bm as p,
  a as l,
  aC as o,
  bN as n,
  bY as c,
  co as m,
  aw as g,
  aB as x,
  bo as d,
  ax as u,
} from "./index-CcOpQHgp.js";
import { u as h, _ as b } from "./official-Dym56vH2.js";
import { _ as y } from "./FooterBar.vue_vue_type_script_setup_true_lang-Bzpx2qQp.js";
import { _ as f } from "./index-Cj4_p5wp.js";
import "./tres-A3eZwWFz.js";
import "./official-website-Cnxq3Yc9.js";
import "./providerSetting-DCkM4vP5.js";
import "./LeftOutlined-CEGq77h1.js";
import "./index-Cz_JZQCO.js";
import "./List-BIqEnSiM.js";
import "./isMobile-VPrdNIIw.js";
import "./DownOutlined-BY2Elyy8.js";
import "./CheckOutlined-DHEabyMk.js";
import "./useBreakpoint-CJwh33xD.js";
import "./responsiveObserve-B8IuOfYh.js";
import "./zh_CN-CAyhejr6.js";
const j = [
    [1, "Vision paper for High Scientific Impacts"],
    [2, "System for Machine Learning"],
    [3, "Machine Learning Algorithms"],
    [4, "Security/privacy for Machine Learning"],
    [5, "AI Applications"],
    [6, "Blockchain"],
  ].map((e) => ({ label: e[1], value: e[0] })),
  v = { "min-h-screen": "", "bg-codark": "" },
  k = { class: "pt-16", "max-w-1920px": "", "mx-auto": "" },
  w = {
    bg: "codark",
    flex: "~ col gap-15",
    "pb-8": "",
    "lt-md": "gap-4",
    "max-w-1920px": "",
    "mx-auto": "",
  },
  _ = r(
    "h2",
    {
      "px-16": "",
      "pt-15": "",
      "text-title-lg": "",
      "mb-0": "",
      "lt-md": "px-4 py-8",
    },
    " Research ",
    -1
  ),
  L = {
    flex: "~ items-center gap-4 wrap",
    "lt-lg": "px-10",
    "lt-md": "px-4",
    "px-16": "",
    "text-base": "",
  },
  C = ["onClick"],
  O = {
    class: "grid grid-cols-1 gap-15 px-16",
    "lt-xl": "grid-cols-1 gap-10 px-10",
    "lt-md": "grid-cols-1 px-4",
  },
  R = { class: "space-y-4" },
  S = { "text-base": "", "text-gray": "", "line-clamp-4": "" },
  z = { "px-16": "", "lt-md": "px-4", flex: "~ justify-end" },
  A = e({
    __name: "research",
    setup(e) {
      const A = h();
      return (
        t(() => {
          A.init();
        }),
        (e, t) => {
          const h = f,
            B = a("auto-animate");
          return (
            s(),
            i("div", v, [
              r("section", k, [
                r("div", w, [
                  _,
                  r("div", L, [
                    r(
                      "span",
                      {
                        key: "none",
                        class: p([
                          "cursor-pointer px-4 py-2 bg-white",
                          l(A).state.research.type
                            ? "text-app"
                            : "bg-primary text-white",
                        ]),
                        ring: "1 primary",
                        "lt-md": "text-sm p2",
                        onClick:
                          t[0] || (t[0] = (e) => l(A).changeResearchType()),
                      },
                      " ALL ",
                      2
                    ),
                    (s(!0),
                    i(
                      o,
                      null,
                      n(
                        l(j),
                        (e) => (
                          s(),
                          i(
                            "span",
                            {
                              key: e.value,
                              class: p([
                                e.value === l(A).state.research.type
                                  ? "bg-primary text-white"
                                  : "text-app",
                                "cursor-pointer px-4 py-2 bg-white",
                              ]),
                              ring: "1 primary",
                              "lt-md": "text-sm p2",
                              onClick: (t) => l(A).changeResearchType(e.value),
                            },
                            x(e.label),
                            11,
                            C
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  c(
                    (s(),
                    i("div", O, [
                      (s(!0),
                      i(
                        o,
                        null,
                        n(
                          l(A).getResearchList,
                          (e) => (
                            s(),
                            d(
                              b,
                              {
                                key: e.id,
                                post: e.pictureUrl,
                                title: e.title,
                                row: "",
                                description: l(j).find(
                                  (t) => t.value === e.type
                                )?.label,
                                link: e.link,
                              },
                              {
                                title: u(() => [
                                  r("div", R, [
                                    r("div", null, x(e.title), 1),
                                    r("p", S, x(e.description), 1),
                                  ]),
                                ]),
                                _: 2,
                              },
                              1032,
                              ["post", "title", "description", "link"]
                            )
                          )
                        ),
                        128
                      )),
                    ])),
                    [[B]]
                  ),
                  c(
                    r(
                      "div",
                      z,
                      [
                        g(
                          h,
                          {
                            "p-2": "",
                            "bg-white": "",
                            current: l(A).state.research.pageNum,
                            "page-size": l(A).state.research.pageSize,
                            total: l(A).state.research.total,
                            "show-less-items": "",
                            onChange:
                              t[1] || (t[1] = (e) => l(A).loadResearchList(e)),
                          },
                          null,
                          8,
                          ["current", "page-size", "total"]
                        ),
                      ],
                      512
                    ),
                    [[m, l(A).state.research.totalPage > 1]]
                  ),
                ]),
                g(y),
              ]),
            ])
          );
        }
      );
    },
  });
export { A as default };

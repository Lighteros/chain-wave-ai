import { u as t, _ as s } from "./official-Cx2kpvWv.js";
import { _ as i } from "./FooterBar.vue_vue_type_script_setup_true_lang-BinsM33Q.js";
import {
  as as e,
  c as a,
  aL as o,
  au as r,
  av as l,
  bl as p,
  aD as n,
  aC as c,
  bN as d,
  a as m,
  aw as u,
  bo as g,
} from "./index-DPRREYlk.js";
import "./tres-CddIvILV.js";
import "./official-website-Cnxq3Yc9.js";
import "./providerSetting-DCkM4vP5.js";
const v = { "min-h-screen": "", "bg-codark": "" },
  x = { class: "pt-16", "max-w-1920px": "", "mx-auto": "" },
  _ = { bg: "codark", class: "px-16 pb-15", "lt-md": "px-4" },
  b = p(
    "h2",
    {
      "py-15": "",
      "text-36px": "",
      "mb-0": "",
      "text-3xl": "",
      "lt-md": "py-8",
    },
    " Events ",
    -1
  ),
  f = {
    class: "grid grid-cols-3 gap-15 mt-15",
    "lt-lg": "grid-cols-2 gap-6",
    "lt-md": "grid-cols-1 px-4",
  },
  j = e({
    __name: "event",
    setup(e) {
      const j = t();
      return (
        a(() => {
          const [t, ...s] = j.getEventList || [];
          return { top: t, rest: s };
        }),
        o(() => {
          j.init();
        }),
        (t, e) => (
          r(),
          l("div", v, [
            p("section", x, [
              p("div", _, [
                b,
                n("", !0),
                p("div", f, [
                  (r(!0),
                  l(
                    c,
                    null,
                    d(
                      m(j).getEventList,
                      (t) => (
                        r(),
                        g(
                          s,
                          {
                            key: t.id,
                            title: t.title,
                            post: t.pictureUrl,
                            description: t.description,
                            link: t.link,
                            location: t.location,
                            "date-time": t.dateTime,
                            type: "event",
                          },
                          null,
                          8,
                          [
                            "title",
                            "post",
                            "description",
                            "link",
                            "location",
                            "date-time",
                          ]
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              u(i),
            ]),
          ])
        )
      );
    },
  });
export { j as default };

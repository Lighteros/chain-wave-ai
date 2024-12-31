import {
  bk as s,
  au as e,
  av as a,
  bl as t,
  aw as l,
  ax as i,
  a as r,
  b$ as o,
  aB as n,
  bM as c,
  cz as d,
  cA as y,
} from "./index-DPRREYlk.js";
import { _ as p } from "./BasicTitle-CY4FQusD.js";
const m = {},
  P = (s) => (d("data-v-46e7bf6a"), (s = s()), y(), s),
  u = { class: "acs-root flex flex-wrap justify-between items-center" },
  v = { class: "acs-box" },
  _ = P(() =>
    t(
      "span",
      { class: "text-primary" },
      " A developer who needs GPUs to run their job(s) ",
      -1
    )
  ),
  x = P(() => t("div", { class: "acs-arrow acs-arrow--start" }, null, -1)),
  b = { class: "acs-img flex items-center text-lg text-primary gap-4" },
  f = ["src"],
  g = { class: "text-2xl" },
  h = P(() => t("div", { class: "acs-arrow acs-arrow--end" }, null, -1)),
  L = { class: "acs-box" },
  w = P(() =>
    t(
      "ul",
      { class: "text-primary", style: { "list-style-type": "none" } },
      [
        t(
          "li",
          { style: { "list-style-type": "disc" } },
          " Cloud GPU Provider "
        ),
        t(
          "li",
          { style: { "list-style-type": "disc" } },
          " Edge GPU Provider "
        ),
        t(
          "li",
          { style: { "list-style-type": "disc" } },
          " Individual GPU Provider "
        ),
      ],
      -1
    )
  );
const T = s(m, [
  [
    "render",
    function (s, d) {
      const y = p;
      return (
        e(),
        a("div", u, [
          t("div", v, [
            l(
              y,
              {
                "help-message":
                  "Developers only pay for the compute time, thereby saving deployment cost, and driving interest in your machines.",
              },
              { default: i(() => [_]), _: 1 }
            ),
          ]),
          x,
          t("div", b, [
            t(
              "img",
              {
                src: "APP_LOGO_PUBLIC_URL" in s ? s.APP_LOGO_PUBLIC_URL : r(o),
                class: "w-12 h-12",
              },
              null,
              8,
              f
            ),
            t("caption", g, n("APP_TITLE" in s ? s.APP_TITLE : r(c)), 1),
          ]),
          h,
          t("div", L, [
            l(
              y,
              {
                "help-message": `Launch empowers you to earn money or tokens by lending your GPUs to the developer community in ${
                  "APP_TITLE" in s ? s.APP_TITLE : r(c)
                }.`,
              },
              { default: i(() => [w]), _: 1 },
              8,
              ["help-message"]
            ),
          ]),
        ])
      );
    },
  ],
  ["__scopeId", "data-v-46e7bf6a"],
]);
export { T as _ };

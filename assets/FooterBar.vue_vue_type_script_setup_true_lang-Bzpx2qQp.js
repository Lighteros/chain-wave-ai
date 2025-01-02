import {
  as as e,
  bR as l,
  r as i,
  at as a,
  bw as t,
  au as o,
  av as n,
  bl as r,
  aC as c,
  bN as s,
  a as p,
  d6 as b,
  bo as k,
  ax as x,
  aw as u,
  aB as d,
  aA as m,
  bp as y,
} from "./index-CcOpQHgp.js";
import { C as v } from "./providerSetting-DCkM4vP5.js";
const f = "/resource/img/chainopera/logo-with-brand.png",
  g = { "bg-black": "", "px-140px": "", "lt-lg": "px-4" },
  A = {
    grid: "",
    "grid-cols-7": "",
    "text-white": "",
    "py-113px": "",
    "lt-lg": "py-8",
  },
  h = {
    "grid-col-span-3": "",
    flex: "~ flex-col gap-20 wrap",
    "lt-md": "grid-col-span-7 gap-8 flex-row items-end",
    relative: "",
  },
  w = r(
    "img",
    {
      class: "max-w-2/3",
      "object-contain": "",
      "object-top": "",
      src: f,
      alt: "logo",
    },
    null,
    -1
  ),
  _ = { flex: "~ gap-8", "mt-4": "", text: "#D0D0D0" },
  C = ["href"],
  j = {
    "grid-col-span-4": "",
    relative: "",
    "text-22px": "",
    "lt-md": "grid-col-span-7 text-lg relative",
  },
  P = ["src"],
  z = {
    flex: "~ justify-evenly",
    "mt-6": "",
    "lt-md": "justify-between flex-wrap gap-xl",
    "z-2": "",
    relative: "",
  },
  D = { "font-500": "", "text-3xl": "", "mb-8": "", "lt-md": "text-xl mb-4" },
  R = {
    "ml-0": "",
    "pl-0": "",
    "space-y-4": "",
    "lt-md": "space-y-2",
    text: "#A2A2A2",
  },
  T = ["onClick"],
  E = ["href"],
  B = {
    relative: "",
    "z-4": "",
    "m-0": "",
    "px-0": "",
    "py-4": "",
    flex: "~ justify-between",
    text: "#A2A2A2",
    "text-22px": "",
    "lt-md": "text-lg",
  },
  L = ["href"],
  S = e({
    __name: "FooterBar",
    setup(e) {
      const { push: f } = l(),
        S = "/resource/img/chainopera/home/global.png",
        U = i([
          { icon: "i-icon:co-x", link: v.X },
          { icon: "i-icon:co-telegram", link: v.TelegramMain },
        ]),
        F = i([
          {
            label: "Product",
            children: [
              { label: "App Ecosystem", link: "/app/llm" },
              { label: "Dexscreener", link: "https://dexscreener.com/ethereum/0x0123456789" },
              { label: "Dextools", link: "https://www.dextools.io/app/en/ether/pool-explorer/0x00000000000000000000000000000000000000" },
            ],
          },
          {
            label: "Contacts",
            children: [
              { label: "Document", link: "https://docs.chainwaveai.com" },
              {
                label: "Telegram",
                key: "Telegram",
                icon: "i-icon:co_press",
                link: "http://t.me/ChainWave_AI",
              },
              {
                label: "Twitter",
                key: "Twitter",
                icon: "i-icon:co_event",
                link: "http://x.com/ChainWave_AI",
              },
            ],
          },
        ]),
        M = a([
        ]);
      return (e, l) => {
        const i = y,
          a = t("RouterLink");
        return (
          o(),
          n("footer", g, [
            r("div", A, [
              r("div", h, [
                w,
                r("div", _, [
                  (o(!0),
                  n(
                    c,
                    null,
                    s(
                      p(U),
                      (e) => (
                        o(),
                        n(
                          c,
                          { key: e.icon },
                          [
                            p(b)(e.link)
                              ? (o(),
                                n(
                                  "a",
                                  {
                                    key: 1,
                                    href: e.link,
                                    class: "text-#A2A2A2",
                                  },
                                  [
                                    u(
                                      i,
                                      {
                                        icon: e.icon,
                                        size: 34,
                                        "cursor-pointer": "",
                                        hover: "!text-primary",
                                      },
                                      null,
                                      8,
                                      ["icon"]
                                    ),
                                  ],
                                  8,
                                  C
                                ))
                              : (o(),
                                k(
                                  a,
                                  { key: 0, to: e.link, class: "text-#A2A2A2" },
                                  {
                                    default: x(() => [
                                      u(
                                        i,
                                        {
                                          icon: e.icon,
                                          size: 34,
                                          "cursor-pointer": "",
                                          hover: "!text-primary",
                                        },
                                        null,
                                        8,
                                        ["icon"]
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  ["to"]
                                )),
                          ],
                          64
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
              r("div", j, [
                r(
                  "img",
                  {
                    src: S,
                    "object-cover": "",
                    absolute: "",
                    "left-0": "",
                    "top-0": "",
                    "lt-lg": "w-full h-full",
                    "z-1": "",
                  },
                  null,
                  8,
                  P
                ),
                r("div", z, [
                  (o(!0),
                  n(
                    c,
                    null,
                    s(
                      p(F),
                      (e) => (
                        o(),
                        n("div", { key: e.label }, [
                          r("div", D, d(e.label), 1),
                          r("ul", R, [
                            (o(!0),
                            n(
                              c,
                              null,
                              s(
                                e.children,
                                (e) => (
                                  o(),
                                  n(
                                    "li",
                                    {
                                      key: e.label,
                                      hover:
                                        "scale-101 text-primary cursor-pointer transition-colors",
                                      onClick: (l) => {
                                        return (
                                          (i = e.link),
                                          void (b(i)
                                            ? window.open(i, "_blank")
                                            : f(i))
                                        );
                                        var i;
                                      },
                                    },
                                    [
                                      p(b)(e.link)
                                        ? (o(),
                                          n(
                                            "a",
                                            {
                                              key: 1,
                                              href: e.link,
                                              class: "text-#A2A2A2",
                                            },
                                            d(e.label),
                                            9,
                                            E
                                          ))
                                        : (o(),
                                          k(
                                            a,
                                            {
                                              key: 0,
                                              to: e.link,
                                              class: "text-#A2A2A2",
                                            },
                                            {
                                              default: x(() => [
                                                m(d(e.label), 1),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["to"]
                                          )),
                                    ],
                                    8,
                                    T
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
            r("ul", B, [
              (o(!0),
              n(
                c,
                null,
                s(
                  p(M),
                  (e) => (
                    o(),
                    n(
                      "li",
                      {
                        key: e.label,
                        hover:
                          "scale-101 text-primary cursor-pointer transition-colors",
                      },
                      [
                        p(b)(e.link)
                          ? (o(),
                            n(
                              "a",
                              { key: 1, href: e.link, class: "text-#A2A2A2" },
                              d(e.label),
                              9,
                              L
                            ))
                          : (o(),
                            k(
                              a,
                              { key: 0, to: e.link, class: "text-#A2A2A2" },
                              { default: x(() => [m(d(e.label), 1)]), _: 2 },
                              1032,
                              ["to"]
                            )),
                      ]
                    )
                  )
                ),
                128
              )),
            ]),
          ])
        );
      };
    },
  });
export { S as _, f as a };

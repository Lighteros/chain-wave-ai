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
  a as k,
  d6 as p,
  bo as b,
  ax as d,
  aw as u,
  aB as x,
  aA as m,
  bp as y,
} from "./index-DPRREYlk.js";
import { C as g } from "./providerSetting-DCkM4vP5.js";
const v = "/resource/img/chainopera/logo-with-brand.png",
  f = { "bg-black": "", "px-140px": "", "lt-lg": "px-4" },
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
  _ = r(
    "img",
    {
      class: "max-w-2/3",
      "object-contain": "",
      "object-top": "",
      src: v,
      alt: "logo",
    },
    null,
    -1
  ),
  w = { flex: "~ gap-8", "mt-4": "", text: "#D0D0D0" },
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
  B = { "font-500": "", "text-3xl": "", "mb-8": "", "lt-md": "text-xl mb-4" },
  D = {
    "ml-0": "",
    "pl-0": "",
    "space-y-4": "",
    "lt-md": "space-y-2",
    text: "#A2A2A2",
  },
  M = ["onClick"],
  R = ["href", "target"],
  T = {
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
  E = ["href"],
  L = e({
    __name: "FooterBar",
    setup(e) {
      const { push: v } = l(),
        L = "/resource/img/chainopera/home/global.png",
        S = i([
          { icon: "i-icon:co-x", link: g.X },
          { icon: "i-icon:co-telegram", link: g.TelegramMain },
        ]),
        U = i([
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
              { label: "Document", link: "https://docs.chainwaveai.cc" },
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
        F = a([
        ]);
      return (e, l) => {
        const i = y,
          a = t("RouterLink");
        return (
          o(),
          n("footer", f, [
            r("div", A, [
              r("div", h, [
                _,
                r("div", w, [
                  (o(!0),
                  n(
                    c,
                    null,
                    s(
                      k(S),
                      (e) => (
                        o(),
                        n(
                          c,
                          { key: e.icon },
                          [
                            k(p)(e.link)
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
                                b(
                                  a,
                                  { key: 0, to: e.link, class: "text-#A2A2A2" },
                                  {
                                    default: d(() => [
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
                    src: L,
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
                      k(U),
                      (e) => (
                        o(),
                        n("div", { key: e.label }, [
                          r("div", B, x(e.label), 1),
                          r("ul", D, [
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
                                          void (p(i)
                                            ? window.open(i, "_blank")
                                            : v(i))
                                        );
                                        var i;
                                      },
                                    },
                                    [
                                      k(p)(e.link)
                                        ? (o(),
                                          n(
                                            "a",
                                            {
                                              key: 1,
                                              href: e.link,
                                              target:
                                                "Blog" === e.label
                                                  ? "_blank"
                                                  : "_self",
                                              class: "text-#A2A2A2",
                                            },
                                            x(e.label),
                                            9,
                                            R
                                          ))
                                        : (o(),
                                          b(
                                            a,
                                            {
                                              key: 0,
                                              to: e.link,
                                              class: "text-#A2A2A2",
                                            },
                                            {
                                              default: d(() => [
                                                m(x(e.label), 1),
                                              ]),
                                              _: 2,
                                            },
                                            1032,
                                            ["to"]
                                          )),
                                    ],
                                    8,
                                    M
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
            r("ul", T, [
              (o(!0),
              n(
                c,
                null,
                s(
                  k(F),
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
                        k(p)(e.link)
                          ? (o(),
                            n(
                              "a",
                              { key: 1, href: e.link, class: "text-#A2A2A2" },
                              x(e.label),
                              9,
                              E
                            ))
                          : (o(),
                            b(
                              a,
                              { key: 0, to: e.link, class: "text-#A2A2A2" },
                              { default: d(() => [m(x(e.label), 1)]), _: 2 },
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
export { L as _, v as a };

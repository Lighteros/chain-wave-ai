import { u as e, M as i } from "./useDevice-BewWmfPp.js";
import { h as o } from "./header-CCyWHX47.js";
import { u as t } from "./index-ByCdxRYP.js";
import {
  as as a,
  r as l,
  ef as n,
  au as s,
  av as r,
  bl as c,
  aB as p,
  cV as d,
  a as m,
  eg as k,
  bm as u,
  aC as b,
  bN as x,
  bo as y,
  aD as f,
  bp as g,
  bR as h,
  aw as v,
  ax as w,
  bO as I,
  d6 as _,
  bh as C,
  c as j,
  aL as A,
  u as D,
  d0 as O,
  by as P,
  cR as z,
  dS as B,
  bA as S,
} from "./index-DPRREYlk.js";
import { C as L } from "./providerSetting-DCkM4vP5.js";
import { _ as M } from "./index-Ty6iIrKu.js";
import { D as R } from "./index-B0edVtGn.js";
import { A as T } from "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./useTimeout-BMbf6gdC.js";
import "./useAttrs-CpoV-7Xq.js";
import "./tsxHelper-DjrCDYtL.js";
import "./index-Cq67sDBe.js";
import "./BasicTitle-CY4FQusD.js";
import "./Scrollbar-CV0fAAKu.js";
import "./index-B0yuFjoJ.js";
import "./List-D10KDyaY.js";
import "./index-jlJCtu5U.js";
import "./debounce-CUtJ7ZQO.js";
import "./isNumeric-DFkNItwV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
const $ = { "px-4": "", class: "group", "cursor-pointer": "", relative: "" },
  G = { "text-lg": "" },
  N = ["onClick"],
  U = ["onClick"],
  E = a({
    __name: "CoDropMenuItem",
    props: { item: {}, dark: { type: Boolean } },
    emits: ["click"],
    setup(e) {
      const i = e,
        o = l(),
        t = n(o);
      return (e, a) => {
        const l = g;
        return (
          s(),
          r("div", $, [
            c(
              "span",
              {
                ref_key: "triggerRef",
                ref: o,
                style: d({ height: `${m(k)}px`, lineHeight: `${m(k)}px` }),
                class: u([
                  "menu-item text-20px opacity-70",
                  i.dark ? "text-white" : "text-black",
                ]),
                "group-hover": "opacity-100 scale-101",
                onClick: a[0] || (a[0] = (i) => e.$emit("click", e.item)),
              },
              p(e.item.label),
              7
            ),
            e.item.subItems && e.item.subItems.length > 0
              ? (s(),
                r(
                  "div",
                  {
                    key: 0,
                    class: u([
                      "hidden backdrop-blur-5px opacity-0 transition-opacity fixed",
                      i.dark ? "bg-codark" : "bg-white",
                    ]),
                    "group-hover": "z-1000  opacity-100 block",
                    "border-t": "1px solid primary",
                    fixed: "",
                    "w-full": "",
                    "p-10": "",
                    "left-0": "",
                    style: d({
                      paddingLeft: `${m(t).elementPositionX.value}px`,
                      top: `${m(k)}px`,
                    }),
                  },
                  [
                    e.item.subItems &&
                    e.item.subItems.some((e) => e.subItems?.length)
                      ? (s(),
                        r(
                          "div",
                          {
                            key: 0,
                            class: u([
                              "flex gap-8",
                              i.dark ? "text-white" : "text-black",
                            ]),
                            "text-lg": "",
                          },
                          [
                            (s(!0),
                            r(
                              b,
                              null,
                              x(
                                e.item.subItems,
                                (o) => (
                                  s(),
                                  r("div", { key: o.label }, [
                                    c("span", G, p(o.label), 1),
                                    o.subItems
                                      ? (s(!0),
                                        r(
                                          b,
                                          { key: 0 },
                                          x(
                                            o.subItems,
                                            (o) => (
                                              s(),
                                              r(
                                                "div",
                                                {
                                                  key: o.label,
                                                  flex: "~ items-center gap-4",
                                                  class:
                                                    "p-2 rounded-md hover-text-primary",
                                                  onClick: (i) =>
                                                    e.$emit("click", o),
                                                },
                                                [
                                                  o.icon
                                                    ? (s(),
                                                      y(
                                                        l,
                                                        {
                                                          key: 0,
                                                          icon: o.icon,
                                                          size: 33,
                                                          color: i.dark
                                                            ? "#fff"
                                                            : "#000",
                                                        },
                                                        null,
                                                        8,
                                                        ["icon", "color"]
                                                      ))
                                                    : f("", !0),
                                                  c(
                                                    "span",
                                                    null,
                                                    p(o.label),
                                                    1
                                                  ),
                                                ],
                                                8,
                                                N
                                              )
                                            )
                                          ),
                                          128
                                        ))
                                      : f("", !0),
                                  ])
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ))
                      : (s(),
                        r(
                          "div",
                          {
                            key: 1,
                            class: u([
                              "flex flex-col",
                              i.dark ? "text-white" : "text-black",
                            ]),
                            "text-lg": "",
                          },
                          [
                            (s(!0),
                            r(
                              b,
                              null,
                              x(
                                e.item.subItems,
                                (o) => (
                                  s(),
                                  r(
                                    "div",
                                    {
                                      key: o.label,
                                      "w-50": "",
                                      flex: "~ items-center gap-4",
                                      class:
                                        "p-2 rounded-md hover-text-primary",
                                      onClick: (i) => e.$emit("click", o),
                                    },
                                    [
                                      o.icon
                                        ? (s(),
                                          y(
                                            l,
                                            {
                                              key: 0,
                                              size: 33,
                                              color: i.dark ? "#fff" : "#000",
                                              icon: o.icon,
                                            },
                                            null,
                                            8,
                                            ["color", "icon"]
                                          ))
                                        : f("", !0),
                                      c("span", null, p(o.label), 1),
                                    ],
                                    8,
                                    U
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        )),
                  ],
                  6
                ))
              : f("", !0),
          ])
        );
      };
    },
  }),
  V = { key: 0, flex: "~ center text-xl" },
  F = { flex: "~ gap-4 center", "mx-16": "" },
  H = { flex: "~ cols gap-4 center", "mb-8": "" },
  W = { class: "flex flex-col py-2" },
  X = ["onClick"],
  Q = { text: "base" },
  Y = a({
    __name: "CoDropMenu",
    props: { dark: { type: Boolean } },
    setup(i) {
      const o = i,
        { push: t } = h(),
        { isSmallDesktop: a } = e(),
        n = l([
          {
            label: "Products",
            key: "Products",
            subItems: [
              {
                label: "Platform",
                key: "Platform",
                subItems: [
                  {
                    label: "Decentralized AI Platform",
                    key: "Decentralized AI Platform",
                    icon: "i-icon:co_ai_platform",
                    link: "/prod/model",
                  },
                ],
              },
              {
                label: "Apps",
                key: "Apps",
                subItems: [
                  {
                    label: "Chat with AI",
                    key: "Chat with AI",
                    icon: "i-icon:co_chat",
                    link: "/app/llm",
                  },
                  {
                    label: "Generate Image",
                    key: "Generate Image",
                    icon: "i-icon:co_img",
                    link: "/app/gen-img",
                  },
                  {
                    label: "Generate Video",
                    key: "Generate Video",
                    icon: "i-icon:co_gen_video",
                    link: "/app/gen-video",
                  },
                ],
              },
            ],
          },
          { label: "Research", key: "Research", link: "/research" },
          { label: "Blog", key: "Blog", link: L.Medium },
          {
            label: "About",
            key: "About",
            subItems: [
              {
                label: "Press",
                key: "Press",
                icon: "i-icon:co_press",
                link: "/about/press",
              },
              {
                label: "Events",
                key: "Events",
                icon: "i-icon:co_event",
                link: "/about/events",
              },
              {
                label: "Careers",
                key: "Careers",
                icon: "i-icon:co-career",
                link: L.Career,
              },
              {
                label: "Team",
                key: "Team",
                icon: "i-icon:co_aboutus",
                link: "/about/team",
              },
              {
                label: "Contact Us",
                key: "Contact Us",
                icon: "i-icon:co_contact",
                link: "/about/contact",
              },
              {
                label: "Media kit",
                key: "Media kit",
                icon: "i-icon:co_media_kit",
                link: "/about/media-kit",
              },
            ],
          },
        ]),
        d = l([
          { icon: "i-icon:co-x", link: L.X },
          { icon: "i-icon:co-discord", link: L.Discord },
          { icon: "i-icon:co-linkin", link: L.Linkedin },
          { icon: "i-icon:co-telegram", link: L.TelegramMain },
        ]),
        k = l(!1);
      function C(e = "") {
        _(e) ? window.open(e, "_blank") : t(e), (k.value = !1);
      }
      return (e, i) => {
        const t = g,
          l = M,
          h = R;
        return m(a)
          ? (s(),
            r(
              b,
              { key: 1 },
              [
                v(t, {
                  size: "24",
                  icon: "i-ant-design:menu-outlined",
                  class: "!text-primary",
                  "cursor-pointer": "",
                  onClick: i[0] || (i[0] = (e) => (k.value = !m(k))),
                }),
                v(
                  h,
                  {
                    open: m(k),
                    "onUpdate:open":
                      i[1] || (i[1] = (e) => (I(k) ? (k.value = e) : null)),
                    width: "max(90vw,300px)",
                    class: u([
                      "border-l-1 border-l-dashed border-primary shadow-2xl",
                      [o.dark ? "bg-codark" : ""],
                    ]),
                  },
                  {
                    closeIcon: w(() => [
                      v(
                        t,
                        {
                          icon: "i-ant-design:close-outlined",
                          color: o.dark ? "#fff" : "#000",
                          size: "32",
                          class:
                            "!hover:text-primary !hover-rotate-180deg transition-all",
                        },
                        null,
                        8,
                        ["color"]
                      ),
                    ]),
                    default: w(() => [
                      c("div", H, [
                        (s(!0),
                        r(
                          b,
                          null,
                          x(
                            m(d),
                            (e) => (
                              s(),
                              y(
                                t,
                                {
                                  key: e.icon,
                                  icon: e.icon,
                                  size: 32,
                                  "cursor-pointer": "",
                                  hover: "!text-primary",
                                  onClick: (i) => C(e.link),
                                },
                                null,
                                8,
                                ["icon", "onClick"]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      v(
                        l,
                        {
                          "tree-data": m(n),
                          "auto-expand-parent": "",
                          "default-expand-all": "",
                          class: u([o.dark ? "bg-codark" : ""]),
                          "field-names": {
                            children: "subItems",
                            title: "label",
                            key: "label",
                          },
                        },
                        {
                          title: w(({ label: e, key: i, icon: a, link: l }) => [
                            c("div", W, [
                              (s(),
                              r(
                                "div",
                                {
                                  key: i,
                                  flex: "~ items-center gap-4",
                                  class: "px-2 rounded-md",
                                  onClick: (e) => C(l),
                                },
                                [
                                  a
                                    ? (s(),
                                      y(
                                        t,
                                        {
                                          key: 0,
                                          size: "33px",
                                          color: o.dark ? "#fff" : "#000",
                                          icon: a,
                                        },
                                        null,
                                        8,
                                        ["color", "icon"]
                                      ))
                                    : f("", !0),
                                  c("span", Q, p(e), 1),
                                ],
                                8,
                                X
                              )),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["tree-data", "class"]
                      ),
                    ]),
                    _: 1,
                  },
                  8,
                  ["open", "class"]
                ),
              ],
              64
            ))
          : (s(),
            r("div", V, [
              (s(!0),
              r(
                b,
                null,
                x(
                  m(n),
                  (e) => (
                    s(),
                    y(
                      E,
                      {
                        key: e.label,
                        dark: o.dark,
                        item: e,
                        onClick: (e) => C(e.link),
                      },
                      null,
                      8,
                      ["dark", "item", "onClick"]
                    )
                  )
                ),
                128
              )),
              c("div", F, [
                (s(!0),
                r(
                  b,
                  null,
                  x(
                    m(d),
                    (e) => (
                      s(),
                      y(
                        t,
                        {
                          key: e.icon,
                          icon: e.icon,
                          color: o.dark ? "#fff" : "#000",
                          hover: "!text-primary",
                          "cursor-pointer": "",
                          onClick: (i) => C(e.link),
                        },
                        null,
                        8,
                        ["icon", "color", "onClick"]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]));
      };
    },
  }),
  Z = { class: "flex gap-8 items-center", "lt-md": "gap-2" },
  q = { key: 1, class: "flex items-center gap-1" },
  J = ["title"],
  K = a({
    __name: "co-index",
    props: { dark: { type: Boolean }, theme: {} },
    setup(a) {
      const n = a,
        { isSmallDesktop: d } = e(),
        { t: k } = D(),
        b = C();
      l("");
      const { replace: x, push: g } = h(),
        I = j(() => b.getToken && b.getUserInfo);
      const _ = j(() => {
          const {
            realName: e = "",
            avatar: i,
            desc: t,
            account: a,
            id: l,
          } = b.getUserInfo || {};
          return { realName: e, avatar: i || o, desc: t, account: a, id: l };
        }),
        [L, { openModal: M }] = t();
      function R(e) {
        switch (e.key) {
          case "billing":
            g({ name: P.BILLING });
            break;
          case "logout":
            b.confirmLoginOut(!1);
            break;
          case "version":
            g({ name: P.VERSION_INFO });
            break;
          case "Documentation":
          case "Doc":
            window.open(O);
            break;
          case "lock":
            M(!0);
            break;
          case "profile":
            x({ name: P.SYS_PROFILE });
            break;
          case "Discord":
            window.open("https://discord.com/invite/9xkW8ae6RV");
            break;
          case "aboutus":
            g({ name: P.CO_HOME_ABOUTUS });
            break;
          case "career":
            g({ path: "/careers" });
            break;
          case "linkedin":
            window.open("https://www.linkedin.com/company/tensoropera/");
            break;
          case "twitter":
            window.open("https://twitter.com/TensorOpera");
        }
      }
      return (
        A(async () => {}),
        (e, o) => {
          const t = T,
            a = z,
            l = B,
            b = S;
          return (
            s(),
            r("div", Z, [
              v(Y, { dark: n.dark }, null, 8, ["dark"]),
              m(I) && !e.$route.meta.hideLogin
                ? (s(),
                  y(
                    b,
                    {
                      key: 0,
                      mode: "horizontal",
                      class: u(`my-menu--${n.theme}`),
                      "disabled-overflow": "",
                      onClick: o[0] || (o[0] = (e) => R(e)),
                    },
                    {
                      default: w(() => [
                        v(
                          l,
                          { key: "Account", "px-0": "" },
                          {
                            title: w(() => [
                              m(d)
                                ? (s(),
                                  y(
                                    a,
                                    { key: 0, title: m(_).account },
                                    {
                                      default: w(() => [
                                        v(
                                          t,
                                          { src: m(_).avatar, size: 32 },
                                          null,
                                          8,
                                          ["src"]
                                        ),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["title"]
                                  ))
                                : (s(),
                                  r("span", q, [
                                    v(
                                      t,
                                      { src: m(_).avatar, size: 32 },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                    c(
                                      "div",
                                      {
                                        class: "w-20 text-truncate",
                                        title: m(_).account,
                                      },
                                      p(m(_).account),
                                      9,
                                      J
                                    ),
                                  ])),
                            ]),
                            default: w(() => [
                              m(d)
                                ? (s(),
                                  y(
                                    i,
                                    { key: 0, text: m(_).account },
                                    null,
                                    8,
                                    ["text"]
                                  ))
                                : f("", !0),
                              v(i, {
                                "item-index": "profile",
                                text: "Profile",
                                icon: "i-ion:ios-contact",
                              }),
                              v(i, {
                                "item-index": "billing",
                                text: "Billing",
                                icon: "i-ph:coin",
                              }),
                              v(
                                i,
                                {
                                  "item-index": "logout",
                                  text: m(k)(
                                    "layout.header.dropdownItemLoginOut"
                                  ),
                                  icon: "i-ion:power-outline",
                                },
                                null,
                                8,
                                ["text"]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["class"]
                  ))
                : f("", !0),
            ])
          );
        }
      );
    },
  });
export { K as default };

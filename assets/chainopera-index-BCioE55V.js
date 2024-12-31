import {
  ew as e,
  eu as t,
  iF as i,
  bi as a,
  bk as n,
  bX as l,
  bY as s,
  au as o,
  av as r,
  bl as c,
  a as p,
  aA as d,
  cV as g,
  cz as f,
  cA as x,
  as as y,
  r as u,
  at as m,
  aC as b,
  bN as h,
  aw as v,
  aB as w,
  bp as A,
  bw as I,
  ax as k,
  aD as M,
  bo as C,
  c4 as P,
  bK as z,
  iG as O,
  aL as _,
  n as L,
  by as j,
  d8 as G,
  iH as T,
} from "./index-CcOpQHgp.js";
import { _ as E, u as S } from "./official-Dym56vH2.js";
import { _ as F } from "./FooterBar.vue_vue_type_script_setup_true_lang-Bzpx2qQp.js";
import { I as D } from "./index-9G-QBl1v.js";
import "./tres-A3eZwWFz.js";
import "./official-website-Cnxq3Yc9.js";
import "./providerSetting-DCkM4vP5.js";
import "./LeftOutlined-CEGq77h1.js";
function R(i) {
  return null == i
    ? []
    : (function (t, i) {
        return e(i, function (e) {
          return t[e];
        });
      })(i, t(i));
}
var U = Math.floor,
  B = Math.random;
function N(e, t) {
  var i,
    a,
    n = -1,
    l = e.length,
    s = l - 1;
  for (t = void 0 === t ? l : t; ++n < t; ) {
    var o = ((a = s), (i = n) + U(B() * (a - i + 1))),
      r = e[o];
    (e[o] = e[n]), (e[n] = r);
  }
  return (e.length = t), e;
}
function K(e) {
  return N(i(e));
}
function q(e) {
  return N(R(e));
}
function H(e) {
  return (a(e) ? K : q)(e);
}
const W = "/assets/coin-DMaGRSCL.png",
  $ = (e) => (f("data-v-814fa091"), (e = e()), x(), e),
  V = { flex: "~ row items-center" },
  J = {
    class: "px-16 py-20 lg:py-44 z-3 relative",
    flex: "~ col items-start gap-4 basis-2/3",
    "lt-md": "px-4 py-8 space-y-4 basis-full items-center",
  },
  Y = { "font-dohyeon": "", class: "text-title-lg", "lt-md": "text-center" },
  X = ["src"],
  Q = $(() => c("br", null, null, -1)),
  Z = ["src"],
  ee = $(() =>
    c(
      "div",
      { class: "text-xl font-400 mb-60px", "lt-md": "max-w-full" },
      " Complete quests, earn points, and become early members of ChainOpera AI ",
      -1
    )
  ),
  te = $(() =>
    c(
      "div",
      {
        "text-2xl": "",
        "rounded-full": "",
        flex: "",
        "items-center": "",
        relative: "",
        "overflow-hidden": "",
        "shadow-sm": "",
        "shadow-primary": "",
        "bg-black": "",
      },
      [
        c(
          "div",
          { relative: "", "px-12": "", "text-primary": "", "lt-md": "px-4" },
          " Season One "
        ),
        c("a", { href: "/quest", targt: "_blank" }, [
          c(
            "button",
            {
              "bg-primary": "",
              "text-dark": "",
              "border-none": "",
              "rounded-full": "",
              "cursor-pointer": "",
              "px-32px": "",
              "py-2": "",
              "lt-md": "px-4",
              hover: "bg-primary-600 animate-none",
            },
            " Start Now "
          ),
        ]),
      ],
      -1
    )
  ),
  ie = { class: "px-8 z-3", flex: "~ center", "lt-md": "hidden" },
  ae = ["src"],
  ne = n(
    {
      __name: "Airdrop",
      setup: (e) => (e, t) => {
        const i = l("motion");
        return s(
          (o(),
          r(
            "section",
            {
              initial: { opacity: 0, x: -100 },
              "visible-once": {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  stiffness: 50,
                  damping: 15,
                  duration: 800,
                },
              },
              "mx-auto": "",
              relative: "",
              "text-white": "",
              style: g({
                background: `url(${p("/assets/bg-blur-coins-UzovG62y.svg")})`,
                backgroundSize: "cover",
              }),
              class: "lg:min-h-[843px]",
            },
            [
              c("div", V, [
                c("div", J, [
                  c("div", Y, [
                    c(
                      "img",
                      {
                        class: "w-8 coin-animation hidden",
                        "lt-md": "inline-block",
                        src: p(W),
                      },
                      null,
                      8,
                      X
                    ),
                    d(" ChainOpera Point System is Now Live! "),
                    Q,
                    d(" Season One: Earning the Badge "),
                    c(
                      "img",
                      {
                        class: "w-8 coin-animation hidden",
                        "lt-md": "inline-block",
                        src: p(W),
                      },
                      null,
                      8,
                      Z
                    ),
                  ]),
                  ee,
                  te,
                ]),
                c("div", ie, [
                  c(
                    "img",
                    { class: "size-36 lg:size-72 coin-animation", src: p(W) },
                    null,
                    8,
                    ae
                  ),
                ]),
              ]),
            ],
            4
          )),
          [[i]]
        );
      },
    },
    [["__scopeId", "data-v-814fa091"]]
  ),
  le = {
    initial: { opacity: 0, x: -100 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "px-8 py-24 transition-all",
    "mx-auto": "",
    "text-white": "",
    "lt-md": "w-full p0",
  },
  se = { "lt-md": "w-full py-8 px-4 flex-1" },
  oe = c(
    "h2",
    { class: "text-title-lg font-500 mb-10", "lt-md": "mb-8" },
    " Backed by ",
    -1
  ),
  re = {
    class: "pl0 ml0 text-2xl w-full",
    grid: "~ cols-3 gap-8",
    "lt-xl": "cols-2 gap-2 text-base",
    "lt-md": "cols-1 gap-2 text-base",
  },
  ce = ["visible-once"],
  pe = ["visible-once"],
  de = ["visible-once"],
  ge = ["visible-once"],
  fe = {
    "px-10": "",
    "py-15": "",
    "text-white": "",
    "text-2xl": "",
    bg: "#171717",
    basis: "full",
    flex: "~ gap-4 items-center wrap",
    "mt-8": "",
    "lt-xl": "mt-2 text-base",
    "lt-md": "px-4 py-5",
  },
  xe = { "bg-primary": "", "size-13": "", flex: "~ center", "rounded-1": "" },
  ye = { "font-bold": "", "break-words": "", "text-2xl": "" },
  ue = y({
    __name: "BackedByV1",
    setup(e) {
      const t = u([
          {
            title: "Enterprise-level Generative AI Platform",
            text: "Enterprise-level generative AI Platform for system scalability, model peroformance,and security/privacy(ChainOpera AI Platform)",
            img: "i-icon:co-backedby-1",
          },
          {
            title: "Leading Open Source Library",
            text: "Leading open source library in large-scale distributed training, model serving, and federated learning (FedML)",
            img: "i-icon:co-backedby-2",
          },
          {
            title: "Edge-cloud Collaborative AI ",
            text: "Innovative and unique edge-cloud collaborative AI models and systems towards on-device personal AI (Fox LLM)",
            img: "i-icon:co-backedby-3",
          },
          {
            title: "Internet Veterans",
            text: "Internet veterans for serving billion-level end users based on cloud computing and mobile internet",
            img: "i-icon:co-backedby-4",
          },
          {
            title: "Established Researchers",
            text: "Established researchers in blockchain, machine learning, and large-scale distributed systems (80000+ citations)",
            img: "i-icon:co-backedby-5",
          },
          {
            title: "Ecosystem Partnership",
            text: "Ecosystem partnership with GPU providers, model developers, AI platforms, and AI applications",
            img: "i-icon:co-backedby-6",
          },
        ]),
        i = m({
          title: "Top-tier Investors, Angels, and Advisors",
          img: "i-icon:co-backedby-0",
        });
      return (e, a) => {
        const n = A,
          g = l("motion");
        return s(
          (o(),
          r("section", le, [
            c("div", se, [
              oe,
              c("ul", re, [
                (o(!0),
                r(
                  b,
                  null,
                  h(p(t), (e, t) =>
                    s(
                      (o(),
                      r(
                        "li",
                        {
                          key: t,
                          initial: { opacity: 0, y: 20 },
                          "visible-once": {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 10 * t, duration: 800 },
                          },
                          "px-10": "",
                          "py-15": "",
                          "text-white": "",
                          bg: "#171717",
                          "lt-md": "px-4 py-5",
                          flex: "~ col items-start gap-4",
                        },
                        [
                          s(
                            (o(),
                            r(
                              "div",
                              {
                                "bg-primary": "",
                                "size-13": "",
                                flex: "~ center",
                                "rounded-1": "",
                                initial: { scale: 0 },
                                "visible-once": {
                                  scale: 1,
                                  transition: {
                                    delay: 200 * t + 200,
                                    duration: 500,
                                  },
                                },
                              },
                              [
                                v(n, { icon: e.img, size: 24 }, null, 8, [
                                  "icon",
                                ]),
                              ],
                              8,
                              pe
                            )),
                            [[g]]
                          ),
                          s(
                            (o(),
                            r(
                              "div",
                              {
                                "font-bold": "",
                                "break-words": "",
                                "text-2xl": "",
                                initial: { opacity: 0, x: -20 },
                                "visible-once": {
                                  opacity: 1,
                                  x: 0,
                                  transition: {
                                    delay: 200 * t + 400,
                                    duration: 500,
                                  },
                                },
                              },
                              [d(w(e.title), 1)],
                              8,
                              de
                            )),
                            [[g]]
                          ),
                          s(
                            (o(),
                            r(
                              "span",
                              {
                                "break-words": "",
                                "text-base": "",
                                initial: { opacity: 0 },
                                "visible-once": {
                                  opacity: 1,
                                  transition: {
                                    delay: 200 * t + 600,
                                    duration: 500,
                                  },
                                },
                              },
                              [d(w(e.text), 1)],
                              8,
                              ge
                            )),
                            [[g]]
                          ),
                        ],
                        8,
                        ce
                      )),
                      [[g]]
                    )
                  ),
                  128
                )),
              ]),
              c("div", fe, [
                c("div", xe, [
                  v(n, { icon: p(i).img, size: 24 }, null, 8, ["icon"]),
                ]),
                c("div", ye, w(p(i).title), 1),
              ]),
            ]),
          ])),
          [[g]]
        );
      };
    },
  }),
  me = {
    key: 0,
    initial: { opacity: 0, y: 60 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "px-8 py-16 bg-codark text-white",
    "mx-auto": "",
    "lt-md": "px-4 py-8",
  },
  be = {
    initial: { opacity: 0, x: -50 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 600,
        delay: 200,
      },
    },
    class: "text-title-lg font-500 mb-10 px-16",
    "lt-md": "text-2xl mb-8 px-4",
    flex: "~ items-center justify-between",
  },
  he = {
    class: "grid grid-cols-3 gap-15",
    "lt-md": "grid-cols-1 gap-5 px-4",
    p: "x-16 y-8",
    bg: "#171717",
  },
  ve = y({
    __name: "EventList",
    props: { list: {} },
    setup: (e) => (e, t) => {
      const i = I("router-link"),
        a = l("motion");
      return e.list.length > 0
        ? s(
            (o(),
            r("section", me, [
              s(
                (o(),
                r("h2", be, [
                  d(" Events "),
                  v(
                    i,
                    {
                      to: "/about/events",
                      "text-24px": "",
                      class: "transition-all hover:translate-x-2",
                    },
                    { default: k(() => [d(" More→ ")]), _: 1 }
                  ),
                ])),
                [[a]]
              ),
              c("div", he, [
                (o(!0),
                r(
                  b,
                  null,
                  h(e.list.slice(0, 3), (e, t) =>
                    s(
                      (o(),
                      C(
                        E,
                        {
                          key: e.id,
                          initial: { opacity: 0, y: 40 },
                          "visible-once": {
                            opacity: 1,
                            y: 0,
                            transition: {
                              type: "spring",
                              stiffness: 50,
                              damping: 15,
                              duration: 600,
                              delay: 300 + 100 * t,
                            },
                          },
                          title: e.title,
                          post: e.pictureUrl,
                          location: e.location,
                          "date-time": e.dateTime,
                          type: "event",
                          link: e.link,
                        },
                        null,
                        8,
                        [
                          "visible-once",
                          "title",
                          "post",
                          "location",
                          "date-time",
                          "link",
                        ]
                      )),
                      [[a]]
                    )
                  ),
                  128
                )),
              ]),
            ])),
            [[a]]
          )
        : M("", !0);
    },
  }),
  we = {
    initial: { opacity: 0, scale: 0.8, y: 100 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 40,
        damping: 12,
        duration: 1500,
      },
    },
    relative: "",
    class: "text-light overflow-hidden transform-gpu",
    bg: "#010202",
  },
  Ae = { flex: "~ row", "lt-md": "pt-8 flex-col-reverse" },
  Ie = {
    class: "mx-10 relative",
    initial: { opacity: 0, x: -50 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 35,
        damping: 10,
        duration: 1200,
      },
    },
  },
  ke = {
    class: "text-title-lg font-500 my-2 text-center lg:text-left lg:pl-10",
    initial: { opacity: 0, y: -20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 45, damping: 8, duration: 1e3 },
    },
  },
  Me = { class: "md:w-[75%] xl:w-[80%] 2xl:w-[85%] mx-auto" },
  Ce = {
    key: 1,
    class: "w-full transition-transform duration-500 ease-out",
    src: "/resource/img/chainopera/home/app-data-flow.jpg",
    alt: "data-flow",
    initial: { opacity: 0, scale: 0.8 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 30,
        damping: 10,
        duration: 1500,
      },
    },
  },
  Pe = y({
    __name: "DataFlow",
    setup(e) {
      u();
      const { getIsMobile: t } = P();
      return (e, i) => {
        const a = D,
          n = l("motion");
        return s(
          (o(),
          r("section", we, [
            c("div", Ae, [
              s(
                (o(),
                r("div", Ie, [
                  s((o(), r("div", ke, [d(" What's ChainOpera AI? ")])), [[n]]),
                  c("div", Me, [
                    p(t)
                      ? s(
                          (o(),
                          C(
                            a,
                            {
                              key: 0,
                              class:
                                "w-full transition-transform duration-500 ease-out",
                              src: "/resource/img/chainopera/home/app-data-flow.jpg",
                              alt: "data-flow",
                              initial: { opacity: 0, scale: 0.8 },
                              "visible-once": {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                  type: "spring",
                                  stiffness: 30,
                                  damping: 10,
                                  duration: 1500,
                                },
                              },
                            },
                            null,
                            512
                          )),
                          [[n]]
                        )
                      : s((o(), r("img", Ce, null, 512)), [[n]]),
                  ]),
                ])),
                [[n]]
              ),
            ]),
          ])),
          [[n]]
        );
      };
    },
  }),
  ze = "/resource/img/chainopera/home/co-logo-data.svg",
  Oe = "/resource/img/chainopera/home/co-logo-gpu.svg",
  _e = "/resource/img/chainopera/home/co-logo-model.svg",
  Le = "/resource/img/chainopera/home/co-logo-arrow.svg",
  je = "/resource/img/chainopera/home/co-logo-app-developer.svg",
  Ge = "/resource/img/chainopera/home/co-logo-app-user.svg",
  Te = {
    initial: { opacity: 0, y: 60 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    relative: "",
    class: "text-light overflow-hidden",
    bg: "#010202",
    style: {
      backgroundImage: "url(/resource/img/chainopera/home/texture.svg)",
      backgroundSize: "100% auto",
    },
  },
  Ee = {
    class: "z-3 relative",
    "bg-codark": "",
    "lt-md": "px-4 py-8 space-y-4",
  },
  Se = {
    flex: "~ row justify-around gap-6",
    "lt-lg": "flex-col-reverse gap-8",
    "py-8": "",
  },
  Fe = c(
    "div",
    { flex: "~ row gap-6 basis-1/5 justify-between" },
    [
      c(
        "div",
        { flex: "~ col gap-6", "pl-20": "", "lt-lg": "pl-0 flex-1 gap-2" },
        [
          c(
            "div",
            {
              "text-2xl": "",
              "text-primary": "",
              "text-center": "",
              "h-12": "",
            },
            " AI Resources "
          ),
          c(
            "div",
            {
              flex: "~ col justify-between 1 gap-4",
              "lt-lg": "flex-row justify-center gap-4 items-center",
            },
            [
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: ze }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "", "lt-lg": "h-8" },
                  " Data Contributer & Annotators "
                ),
              ]),
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: Oe }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "", "lt-lg": "h-8" },
                  " GPU Providers "
                ),
              ]),
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: _e }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "", "lt-lg": "h-8" },
                  " Model Developers "
                ),
              ]),
            ]
          ),
        ]
      ),
    ],
    -1
  ),
  De = c(
    "div",
    { flex: "~ col justify-around", "lt-lg": "flex-row" },
    [
      c("figure", { flex: "~ col center gap-2", "lt-lg": "-rotate-90deg" }, [
        c(
          "figcaption",
          { "max-w-30": "", "text-center": "", text: "#AAACAC" },
          " Money Out "
        ),
        c("img", { src: Le }),
      ]),
      c("figure", { flex: "~ col center gap-2", "lt-lg": "rotate-90deg" }, [
        c(
          "figcaption",
          { "max-w-30": "", "text-center": "", text: "#AAACAC" },
          " Resource In "
        ),
        c("img", { src: Le, "rotate-180deg": "", "lt-lg": "rotate-0" }),
      ]),
    ],
    -1
  ),
  Re = { class: "flex-1 my-8 flex-col flex justify-center items-center" },
  Ue = {
    initial: { opacity: 0, scale: 0.8 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 600,
      },
    },
    flex: "~ center col wrap gap-4",
  },
  Be = c(
    "div",
    { class: "text-title-lg font-500 text-center", "lt-md": "w-full text-3xl" },
    " Create a Collaborative AI Economy for Everyone to Participate & Get Rewarded ",
    -1
  ),
  Ne = c(
    "button",
    {
      class:
        "hover:bg-primary-600 transition-all shadow-md ring-1 ring-primary-400 px-6 py-2 bg-primary text-dark cursor-pointer border-none rounded-full text-2xl backdrop-blur-sm",
      "lt-md": "py-2 px-16 w-full",
    },
    " Join Ecosystem ",
    -1
  ),
  Ke = c(
    "div",
    { flex: "~ col justify-around", "lt-lg": "flex-row" },
    [
      c("figure", { flex: "~ col center gap-2", "lt-lg": "-rotate-90deg" }, [
        c(
          "figcaption",
          { "max-w-30": "", "text-center": "", text: "#AAACAC" },
          " Money In "
        ),
        c("img", { src: Le }),
      ]),
      c("figure", { flex: "~ col center gap-2", "lt-lg": "rotate-90deg" }, [
        c(
          "figcaption",
          { "max-w-30": "", "text-center": "", text: "#AAACAC" },
          " Resource Out "
        ),
        c("img", { src: Le, "rotate-180deg": "", "lt-lg": "rotate-0" }),
      ]),
    ],
    -1
  ),
  qe = c(
    "div",
    { flex: "~ row gap-6 basis-1/5 justify-between" },
    [
      c(
        "div",
        {
          flex: "~ col gap-6",
          "pr-20": "",
          "lt-lg": "pr-0 flex-col-reverse flex-1 gap-2",
        },
        [
          c(
            "div",
            {
              "text-2xl": "",
              "text-primary": "",
              "text-center": "",
              "h-12": "",
            },
            " Creators/Developers & Users "
          ),
          c(
            "div",
            {
              flex: "~ col justify-between gap-38",
              "lt-lg": "flex-row justify-center gap-4 items-center",
            },
            [
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: je }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "" },
                  " AI Agent and App Creators/Developers "
                ),
              ]),
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: Ge }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "" },
                  " AI Agent and App Users "
                ),
              ]),
            ]
          ),
        ]
      ),
    ],
    -1
  ),
  He = y({
    __name: "Collaborative",
    setup(e) {
      const t = u(),
        i = z(t);
      return (e, a) => {
        const n = l("motion");
        return s(
          (o(),
          r("section", Te, [
            c(
              "div",
              {
                ref_key: "containerRef",
                ref: t,
                relative: "",
                "backdrop-blur-8px": "",
                "z-2": "",
                "py-16": "",
                "bg-codark": "",
                style: g({
                  perspective: `${p(i).bottom.value + p(i).bottom.value / 2}px`,
                }),
              },
              [
                c("div", Ee, [
                  c("div", Se, [
                    Fe,
                    De,
                    c("div", Re, [
                      s(
                        (o(),
                        r("div", Ue, [
                          Be,
                          v(
                            p(O),
                            { to: "/about/contact" },
                            { default: k(() => [Ne]), _: 1 }
                          ),
                        ])),
                        [[n]]
                      ),
                    ]),
                    Ke,
                    qe,
                  ]),
                ]),
              ],
              4
            ),
          ])),
          [[n]]
        );
      };
    },
  }),
  We = y({
    __name: "CoCoV1",
    setup(e) {
      const t = u();
      function i(e, t, i) {
        return e + (t - e) * i;
      }
      return (
        _(async () => {
          await L();
          const e = t.value;
          if (!e) return;
          const a = e.getContext("2d"),
            n = "#39E9B4";
          let l = (e.width = e.clientWidth),
            s = (e.height = e?.clientHeight);
          const o = l / 2,
            r = s / 2;
          let c = 0.25 * Math.min(o, r),
            p = 0.618 * c,
            d = [],
            g = 0;
          let f = null;
          function x(e, t, i) {
            const a = 0.618 * i;
            d = H(
              [
                [
                  { x: e - i - p / 2, y: t + i + p / 2, angle: 0 },
                  { x: e - i - p / 2, y: t + i + p / 2, angle: 180 },
                  { x: e + i + p / 2, y: t - i - p / 2, angle: 0 },
                  { x: e + i + p / 2, y: t - i - p / 2, angle: 180 },
                  { x: e + i + p / 2, y: t, angle: 0 },
                  { x: e - i - p / 2, y: t, angle: 180 },
                  { x: e + i + p / 2, y: t + 2 * i + p, angle: 180 },
                  { x: e - i - p / 2, y: t - 2 * i - p, angle: 0 },
                ],
                [
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                ],
                [
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                  {
                    x: e + (2 * i + a) * Math.sin(0),
                    y: t - (2 * i + a) * Math.cos(0),
                    angle: 0,
                  },
                  {
                    x: e + (2 * i + a) * Math.sin(Math.PI / 2),
                    y: t - (2 * i + a) * Math.cos(Math.PI / 2),
                    angle: 90,
                  },
                  {
                    x: e + (2 * i + a) * Math.sin(Math.PI),
                    y: t - (2 * i + a) * Math.cos(Math.PI),
                    angle: 180,
                  },
                  {
                    x: e + (2 * i + a) * Math.sin((3 * Math.PI) / 2),
                    y: t - (2 * i + a) * Math.cos((3 * Math.PI) / 2),
                    angle: 270,
                  },
                ],
                [
                  { x: e, y: t - i - a, angle: 180 },
                  { x: e, y: t + i + a, angle: 0 },
                  { x: e + i + a, y: t, angle: -90 },
                  { x: e - i - a, y: t, angle: 90 },
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                ],
                [
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                  { x: e, y: t, angle: 0 },
                  { x: e, y: t, angle: 180 },
                  {
                    x: e + 2 * (i + a) * Math.sin(Math.PI / 6),
                    y: t - 2 * (i + a) * Math.cos(Math.PI / 6),
                    angle: 0,
                  },
                  {
                    x: e + 2 * (i + a) * Math.sin((4 * Math.PI) / 6),
                    y: t - 2 * (i + a) * Math.cos((4 * Math.PI) / 6),
                    angle: 90,
                  },
                  {
                    x: e + 2 * (i + a) * Math.sin((7 * Math.PI) / 6),
                    y: t - 2 * (i + a) * Math.cos((7 * Math.PI) / 6),
                    angle: 180,
                  },
                  {
                    x: e + 2 * (i + a) * Math.sin((10 * Math.PI) / 6),
                    y: t - 2 * (i + a) * Math.cos((10 * Math.PI) / 6),
                    angle: 270,
                  },
                ],
                [
                  {
                    x: e,
                    y: t - (i + p / 2) / Math.sin(Math.PI / 4),
                    angle: 0,
                  },
                  {
                    x: e,
                    y: t - (i + p / 2) / Math.sin(Math.PI / 4),
                    angle: 180,
                  },
                  {
                    x: e,
                    y: t + (i + p / 2) / Math.sin(Math.PI / 4),
                    angle: 0,
                  },
                  {
                    x: e,
                    y: t + (i + p / 2) / Math.sin(Math.PI / 4),
                    angle: 180,
                  },
                  {
                    x: e - (i + p / 2) / Math.sin(Math.PI / 4),
                    y: t,
                    angle: 0,
                  },
                  {
                    x: e - (i + p / 2) / Math.sin(Math.PI / 4),
                    y: t,
                    angle: 180,
                  },
                  {
                    x: e + (i + p / 2) / Math.sin(Math.PI / 4),
                    y: t,
                    angle: 0,
                  },
                  {
                    x: e + (i + p / 2) / Math.sin(Math.PI / 4),
                    y: t,
                    angle: 180,
                  },
                ],
                [
                  { x: e, y: t - (i + p / 2), angle: 0 },
                  { x: e, y: t + (i + p / 2), angle: 180 },
                  { x: e, y: t + (i + p), angle: 0 },
                  { x: e, y: t - (i + p), angle: 180 },
                  { x: e - i / Math.sin(Math.PI / 4) - p / 2, y: t, angle: 90 },
                  { x: e - i / Math.sin(Math.PI / 4) - p / 2, y: t, angle: 90 },
                  {
                    x: e + i / Math.sin(Math.PI / 4) + p / 2,
                    y: t,
                    angle: -90,
                  },
                  {
                    x: e + i / Math.sin(Math.PI / 4) + p / 2,
                    y: t,
                    angle: -90,
                  },
                ],
              ].map((e) => H(e))
            );
          }
          window.addEventListener("resize", () => {
            (l = e.width = e.clientWidth), (s = e.height = e?.clientHeight);
            const t = l / 2,
              i = s / 2;
            (c = 0.15 * Math.min(t, i)), (p = 0.618 * c), x(t, i, c);
          }),
            e.addEventListener("click", () => {
              x(o, r, c);
            }),
            x(o, r, c),
            requestAnimationFrame(function e(t) {
              if (!a) return;
              f || (f = t);
              const o = t - f,
                r = Math.min(o / 1e3, 1),
                x = d[g],
                y = d[(g + 1) % d.length];
              a.clearRect(0, 0, l, s),
                x.forEach((e, t) => {
                  const l = y[t],
                    s = i(e.x, l.x, r),
                    o = i(e.y, l.y, r),
                    d = i(e.angle, l.angle, r);
                  !(function (e, t, i, l) {
                    a &&
                      (a.beginPath(),
                      a.arc(
                        e,
                        t,
                        i,
                        (l * Math.PI) / 180,
                        ((l + 180) * Math.PI) / 180
                      ),
                      (a.globalAlpha = 0.88),
                      (a.lineWidth = p),
                      (a.strokeStyle = n),
                      a.stroke());
                  })(s, o, c, d);
                }),
                r < 1
                  ? requestAnimationFrame(e)
                  : ((g = (g + 1) % d.length),
                    (f = null),
                    setTimeout(() => requestAnimationFrame(e), 1e3));
            });
        }),
        (e, i) => (
          o(),
          r(
            "canvas",
            { ref_key: "canvasRef", ref: t, "cursor-pointer": "" },
            null,
            512
          )
        )
      );
    },
  }),
  $e = {
    initial: { opacity: 0, y: 100 },
    "visible-once": { opacity: 1, y: 0, scale: 1 },
    variants: { custom: { scale: 1 } },
    duration: 600,
    relative: "",
    class: "text-light overflow-hidden",
    bg: "#010202",
    style: {
      backgroundImage: "url(/resource/img/chainopera/home/texture.svg)",
      backgroundSize: "100% auto",
    },
  },
  Ve = { flex: "~ row", "lt-md": "pt-8 flex-col-reverse" },
  Je = {
    class: "relative z1 w-1/2",
    "pl-20": "",
    "pt-200px": "",
    flex: "~ col justify-start items-start",
    "lt-md": "pl-4 pr-4 w-full pb-0 items-center pt-0",
  },
  Ye = {
    initial: { opacity: 0, x: -100 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    font: "dohyeon",
    "text-62px": "",
    "mb-62px": "",
    "lt-md": "text-5xl",
  },
  Xe = {
    initial: { opacity: 0, x: -100 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 800,
        delay: 200,
      },
    },
    class: "text-2xl mb-6",
    "lt-md": "text-center text-base",
  },
  Qe = {
    initial: { opacity: 0, x: -100 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 800,
        delay: 400,
      },
    },
    class: "text-2xl mb-32",
    "lt-md": "text-center text-xs",
  },
  Ze = {
    initial: { opacity: 0, x: -100 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 800,
        delay: 600,
      },
    },
    z1: "",
    relative: "",
    class: "flex flex-wrap gap-6 justify-start",
    "text-2xl": "",
    "mb-24": "",
    "lt-md": "w-full text-xl justify-center mb-16 gap-6",
  },
  et = c(
    "button",
    {
      "px-6": "",
      "py-2": "",
      "bg-primary": "",
      "text-dark": "",
      "hover:bg-primary-400": "",
      "ring-primary-600": "",
      "ring-1": "",
      "border-none": "",
      "rounded-full": "",
      "cursor-pointer": "",
      "lt-md": "py-2 px-8 w-full",
    },
    " Platform ",
    -1
  ),
  tt = c(
    "button",
    {
      "px-6": "",
      "py-2": "",
      "bg-primary": "",
      "text-dark": "",
      "hover:bg-primary-400": "",
      "ring-primary-600": "",
      "ring-1": "",
      "border-none": "",
      "rounded-full": "",
      "cursor-pointer": "",
      "lt-md": "py-2 px-8 w-full",
    },
    " App Ecosystem ",
    -1
  ),
  it = {
    href: "/quest",
    targt: "_blank",
    initial: { opacity: 0, x: -50 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 800,
        delay: 400,
      },
    },
  },
  at = [
    c(
      "button",
      {
        "px-6": "",
        "py-2": "",
        "text-app": "",
        "transition-all": "",
        class: "bg-#F3FFCE",
        hover: "bg-[linear-gradient(to_right,#fff5d280,#e9c648e6)]",
        "cursor-pointer": "",
        "border-none": "",
        "rounded-full": "",
        "backdrop-blur-sm": "",
        "lt-md": "py-2 px-16 w-full",
      },
      " Earn the Badge ",
      -1
    ),
  ],
  nt = { class: "w-1/2 pt-0", flex: "~ center", "lt-md": "w-full" },
  lt = {
    class: "z-3 relative",
    "bg-codark": "",
    "lt-md": "px-4 py-8 space-y-4",
  },
  st = {
    initial: { opacity: 0, y: 60 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    flex: "~ row justify-around gap-6",
    "lt-lg": "flex-col-reverse gap-8",
    "py-8": "",
  },
  ot = c(
    "div",
    { flex: "~ row gap-6 basis-1/5 justify-between" },
    [
      c(
        "div",
        { flex: "~ col gap-6", "pl-20": "", "lt-lg": "pl-0 flex-1 gap-2" },
        [
          c(
            "div",
            {
              "text-2xl": "",
              "text-primary": "",
              "text-center": "",
              "h-12": "",
            },
            " AI Resources "
          ),
          c(
            "div",
            {
              flex: "~ col justify-between 1 gap-4",
              "lt-lg": "flex-row justify-center gap-4 items-center",
            },
            [
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: ze }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "", "lt-lg": "h-8" },
                  " Data Contributer & Annotators "
                ),
              ]),
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: Oe }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "", "lt-lg": "h-8" },
                  " GPU Providers "
                ),
              ]),
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: _e }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "", "lt-lg": "h-8" },
                  " Model Developers "
                ),
              ]),
            ]
          ),
        ]
      ),
    ],
    -1
  ),
  rt = c(
    "div",
    { flex: "~ col justify-around", "lt-lg": "flex-row" },
    [
      c("figure", { flex: "~ col center gap-2", "lt-lg": "-rotate-90deg" }, [
        c(
          "figcaption",
          { "max-w-30": "", "text-center": "", text: "#AAACAC" },
          " Money Out "
        ),
        c("img", { src: Le }),
      ]),
      c("figure", { flex: "~ col center gap-2", "lt-lg": "rotate-90deg" }, [
        c(
          "figcaption",
          { "max-w-30": "", "text-center": "", text: "#AAACAC" },
          " Resource In "
        ),
        c("img", { src: Le, "rotate-180deg": "", "lt-lg": "rotate-0" }),
      ]),
    ],
    -1
  ),
  ct = c(
    "div",
    { flex: "~ col justify-around", "lt-lg": "flex-row" },
    [
      c("figure", { flex: "~ col center gap-2", "lt-lg": "-rotate-90deg" }, [
        c(
          "figcaption",
          { "max-w-30": "", "text-center": "", text: "#AAACAC" },
          " Money In "
        ),
        c("img", { src: Le }),
      ]),
      c("figure", { flex: "~ col center gap-2", "lt-lg": "rotate-90deg" }, [
        c(
          "figcaption",
          { "max-w-30": "", "text-center": "", text: "#AAACAC" },
          " Resource Out "
        ),
        c("img", { src: Le, "rotate-180deg": "", "lt-lg": "rotate-0" }),
      ]),
    ],
    -1
  ),
  pt = c(
    "div",
    { flex: "~ row gap-6 basis-1/5 justify-between" },
    [
      c(
        "div",
        {
          flex: "~ col gap-6",
          "pr-20": "",
          "lt-lg": "pr-0 flex-col-reverse flex-1 gap-2",
        },
        [
          c(
            "div",
            {
              "text-2xl": "",
              "text-primary": "",
              "text-center": "",
              "h-12": "",
            },
            " Creators/Developers & Users "
          ),
          c(
            "div",
            {
              flex: "~ col justify-between gap-38",
              "lt-lg": "flex-row justify-center gap-4 items-center",
            },
            [
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: je }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "" },
                  " AI Agent and App Creators/Developers "
                ),
              ]),
              c("figure", { flex: "~ col center gap-4" }, [
                c("img", { class: "size-16 lt-lg-size-12", src: Ge }),
                c(
                  "figcaption",
                  { "max-w-30": "", "text-center": "" },
                  " AI Agent and App Users "
                ),
              ]),
            ]
          ),
        ]
      ),
    ],
    -1
  ),
  dt = y({
    __name: "HeroSection",
    setup(e) {
      const t =
          "The Blockchain and Protocol for Co-owning and Co-creating Decentralized AI Apps and Agents for Humanity",
        i = "Backed by Federated AI OS and Platform",
        a = u(),
        n = z(a);
      function f() {
        return v("div", { flex: "~ center col wrap gap-4" }, [
          v(
            "div",
            {
              class: "text-title-lg font-500 text-center",
              "lt-md": "w-full text-3xl",
            },
            [
              d(
                "Create a Collaborative AI Economy for Everyone to Participate & Get Rewarded"
              ),
            ]
          ),
          v(
            O,
            { to: "/about/contact" },
            {
              default: () => [
                v(
                  "button",
                  {
                    class:
                      "hover:bg-primary-600 transition-all shadow-md ring-1 ring-primary-400 px-6 py-2 bg-primary text-dark cursor-pointer border-none rounded-full text-2xl backdrop-blur-sm",
                    "lt-md": "py-2 px-16 w-full",
                  },
                  [d("Join Ecosystem")]
                ),
              ],
            }
          ),
        ]);
      }
      return (e, x) => {
        const y = l("motion");
        return s(
          (o(),
          r("section", $e, [
            c("div", Ve, [
              c("div", Je, [
                s((o(), r("div", Ye, [d(" ChainOpera AI ")])), [[y]]),
                s((o(), r("span", Xe, [d(w(t), 1)])), [[y]]),
                s((o(), r("span", Qe, [d(w(i), 1)])), [[y]]),
                s(
                  (o(),
                  r("div", Ze, [
                    s(
                      (o(),
                      C(
                        p(O),
                        {
                          to: {
                            name: ("routerNames" in e ? e.routerNames : p(j))
                              .MODEL_MKT_HOME,
                          },
                          hover: "z-2",
                          initial: { opacity: 0, x: -50 },
                          "visible-once": {
                            opacity: 1,
                            x: 0,
                            transition: {
                              type: "spring",
                              stiffness: 50,
                              damping: 15,
                              duration: 800,
                              delay: 0,
                            },
                          },
                        },
                        { default: k(() => [et]), _: 1 },
                        8,
                        ["to"]
                      )),
                      [[y]]
                    ),
                    s(
                      (o(),
                      C(
                        p(O),
                        {
                          to: {
                            name: ("routerNames" in e ? e.routerNames : p(j))
                              .CO_APP_ROOT,
                          },
                          "lt-md": "translate-x-0",
                          initial: { opacity: 0, x: 50 },
                          "visible-once": {
                            opacity: 1,
                            x: 0,
                            transition: {
                              type: "spring",
                              stiffness: 50,
                              damping: 15,
                              duration: 800,
                              delay: 200,
                            },
                          },
                        },
                        { default: k(() => [tt]), _: 1 },
                        8,
                        ["to"]
                      )),
                      [[y]]
                    ),
                    s((o(), r("a", it, at)), [[y]]),
                  ])),
                  [[y]]
                ),
              ]),
              c("div", nt, [
                v(We, { class: "w-40vw h-40vw", "lt-md": "w-60vw h-60vw" }),
              ]),
            ]),
            c(
              "div",
              {
                ref_key: "containerRef",
                ref: a,
                class: "!hidden",
                relative: "",
                "backdrop-blur-8px": "",
                "z-2": "",
                "py-16": "",
                "bg-codark": "",
                style: g({
                  perspective: `${p(n).bottom.value + p(n).bottom.value / 2}px`,
                }),
              },
              [
                c("div", lt, [
                  s(
                    (o(),
                    r("div", st, [
                      ot,
                      rt,
                      v(f, { class: "flex-1 my-8" }),
                      ct,
                      pt,
                    ])),
                    [[y]]
                  ),
                ]),
              ],
              4
            ),
          ])),
          [[y]]
        );
      };
    },
  }),
  gt = {
    key: 0,
    initial: { opacity: 0, y: 60 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "px-8 py-16 bg-codark text-white",
    "mx-auto": "",
    "lt-md": "px-4 py-8",
  },
  ft = {
    initial: { opacity: 0, x: -50 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 600,
        delay: 200,
      },
    },
    class: "text-title-lg font-500 mb-10 px-16",
    "lt-md": "text-2xl mb-8 px-4",
    flex: "~ items-center justify-between",
  },
  xt = {
    class: "grid grid-cols-3 gap-15",
    "lt-md": "grid-cols-1 gap-5 px-4",
    p: "x-16 y-8",
    bg: "#171717",
  },
  yt = y({
    __name: "PressList",
    props: { list: {} },
    setup: (e) => (e, t) => {
      const i = I("router-link"),
        a = l("motion");
      return e.list.length > 0
        ? s(
            (o(),
            r("section", gt, [
              s(
                (o(),
                r("h2", ft, [
                  d(" Press "),
                  v(
                    i,
                    {
                      to: "/about/press",
                      "text-24px": "",
                      class: "transition-all hover:translate-x-2",
                    },
                    { default: k(() => [d(" More→ ")]), _: 1 }
                  ),
                ])),
                [[a]]
              ),
              c("div", xt, [
                (o(!0),
                r(
                  b,
                  null,
                  h(e.list.slice(0, 3), (e, t) =>
                    s(
                      (o(),
                      C(
                        E,
                        {
                          key: e.id,
                          initial: { opacity: 0, y: 40 },
                          "visible-once": {
                            opacity: 1,
                            y: 0,
                            transition: {
                              type: "spring",
                              stiffness: 50,
                              damping: 15,
                              duration: 600,
                              delay: 300 + 100 * t,
                            },
                          },
                          title: e.title,
                          post: e.pictureUrl,
                          description: p(G)(e.releaseTime),
                          link: e.link,
                        },
                        null,
                        8,
                        ["visible-once", "title", "post", "description", "link"]
                      )),
                      [[a]]
                    )
                  ),
                  128
                )),
              ]),
            ])),
            [[a]]
          )
        : M("", !0);
    },
  }),
  ut = {},
  mt = { relative: "", "overflow-hidden": "", "bg-codark": "" },
  bt = {
    "px-16": "",
    "py-16": "",
    "z-3": "",
    relative: "",
    "lt-md": "px-4 py-8 space-y-4",
  },
  ht = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-title-lg mb-8 font-500 text-center lg:text-left lg:pl-10",
  },
  vt = { class: "min-h-screen lg:p-8" },
  wt = { class: "max-w-7xl mx-auto relative" },
  At = c(
    "div",
    {
      class:
        "absolute left-1/4 top-0 bottom-0 w-0.5 bg-emerald-500/50 hidden lg:block",
    },
    null,
    -1
  ),
  It = {
    initial: { opacity: 0, x: -60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class:
      "flex items-start gap-20 lg:gap-16 mb-32 relative flex-col lg:flex-row",
  },
  kt = {
    initial: { opacity: 0, scale: 0.8 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "w-1/4",
  },
  Mt = [
    c(
      "div",
      {
        class:
          "w-[436px] h-[186px] backdrop-blur-sm relative -left-[40%] scale-[0.8]",
      },
      [
        c("img", {
          src: "/resource/img/chainopera/home/why/Group-5112.png",
          alt: "AI Keyboard",
          class: "w-full h-full",
        }),
      ],
      -1
    ),
  ],
  Ct = {
    initial: { opacity: 0, scale: 0 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 400,
      },
    },
    class:
      "absolute left-[24.8%] -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-black hidden lg:block",
  },
  Pt = {
    initial: { opacity: 0, x: 60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "flex-1 w-full lg:w-auto",
  },
  zt = c(
    "h2",
    { class: "text-white font-bold mb-2 flex flex-col mb-4 text-[40px]" },
    [c("span", null, "AI Agent/App Ecosystem")],
    -1
  ),
  Ot = c(
    "p",
    { class: "mb-12 leading-5" },
    " ChainOpera team is developing a few flagship AI agents and applications to showcase how community-driven AI resources can drive AI content innovation and promote private data sovereignty within the protocol. The community can co-own and co-create diverse autonomous and socialized AI agents. ",
    -1
  ),
  _t = c(
    "h2",
    { class: "text-white font-bold mb-2 flex flex-col mb-4 text-2xl" },
    [c("span", null, "ChainOpera AI Mobile App: Your AI Terminal")],
    -1
  ),
  Lt = c(
    "p",
    { class: "mb-4 leading-5 !font-normal" },
    ' The ChainOpera AI Mobile App features an AI Terminal with a "Type to Earn" system that benefits humanity by allowing users to share their private data and receive rewards for LLM and GenAI model training. ',
    -1
  ),
  jt = {
    initial: { opacity: 0, x: -20 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "w-[146px] h-[58px] absolute lg:-left-[26%] -top-20 lg:top-auto",
  },
  Gt = [
    c(
      "img",
      {
        src: "/resource/img/chainopera/home/why/Group-5113.png",
        alt: "ChainOpera AI Terminal",
        class: "w-full h-full",
      },
      null,
      -1
    ),
  ],
  Tt = c(
    "p",
    { class: "mb-2 leading-5 !font-normal" },
    [
      d(" The "),
      c("b", null, "AI Terminal"),
      d(
        " also functions as a powerful AI agent that simplifies trading of AI coins on the ChainOpera platform and other meme coins. "
      ),
    ],
    -1
  ),
  Et = c(
    "p",
    { class: "mb-2 leading-5 !font-normal" },
    [
      d(" The "),
      c("b", null, "AI Terminal"),
      d(
        " is your personal companion that represents you and completes various tasks in your life and work. Eventually, the AI Terminal will evolve into your personal AI operating system. "
      ),
    ],
    -1
  ),
  St = {
    initial: { opacity: 0, y: 40 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "lg:w-[893px] mt-10",
  },
  Ft = {
    initial: { opacity: 0, x: -60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "flex items-start gap-16 mb-32 relative flex-col lg:flex-row",
  },
  Dt = {
    initial: { opacity: 0, scale: 0.8 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "lg:w-1/4 flex lg:justify-end lg:mr-10",
  },
  Rt = [
    c(
      "div",
      { class: "w-[146px] h-[58px] ]" },
      [
        c("img", {
          src: "/resource/img/chainopera/home/why/Group-5114.png",
          alt: "ChainOpera AI Terminal",
          class: "w-full h-full",
        }),
      ],
      -1
    ),
  ],
  Ut = {
    initial: { opacity: 0, scale: 0 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 400,
      },
    },
    class:
      "absolute left-[24.8%] -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-black hidden lg:block",
  },
  Bt = {
    initial: { opacity: 0, x: 60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "flex-1 w-full lg:w-auto",
  },
  Nt = c(
    "h2",
    { class: "text-white text-3xl font-bold mb-2 flex flex-col mb-4" },
    [c("span", null, 'ChainOpera AI Agent "LinkedIn"')],
    -1
  ),
  Kt = c(
    "p",
    { class: "mb-4 leading-5" },
    [
      d(" Going beyond a Hub for diverse AI Agents and Apps. "),
      c("br"),
      d(
        " It’s the virtual world where AI agents live, chat, socialize, and work for Human. "
      ),
    ],
    -1
  ),
  qt = {
    initial: { opacity: 0, y: 40 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "lg:w-[893px] mt-10",
  },
  Ht = {
    initial: { opacity: 0, x: -60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "flex items-start gap-16 relative flex-col lg:flex-row",
  },
  Wt = T(
    '<div class="w-full lg:w-1/4"><div class="rounded-lg p-6 backdrop-blur-sm relative scale-[0.8] lg:-left-10"><img src="/resource/img/chainopera/home/trapezoid-gr.png" alt="AI Agent" class="w-[436px] h-[186px] mb-4 absolute top-0 -left-11 lg:-left-40"><div class="relative z-10 flex flex-col relative left-1/4 lg:-left-1/6"><div class="w-[151px] h-[65px] mt-4"><img src="/resource/img/chainopera/home/why-os.png" alt="AI Agent" class="w-full h-full"></div><h3 class="text-white text-3xl mt-4"><span class="relative -left-1/6"> Federated AI OS </span></h3></div></div></div>',
    1
  ),
  $t = {
    initial: { opacity: 0, scale: 0 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 400,
      },
    },
    class:
      "absolute left-[24.8%] -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-black hidden lg:block",
  },
  Vt = {
    initial: { opacity: 0, x: 60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "flex-1 mx-auto w-full lg:w-auto",
  },
  Jt = c(
    "h2",
    { class: "text-white text-3xl font-bold mb-4" },
    " Federated AI OS ",
    -1
  ),
  Yt = c(
    "p",
    { class: "text-white mb-12" },
    " Federated AI OS is the world's first platform for creating, deploying, and managing AI agents while enabling AI coin issuance for everyone. It seamlessly integrates Launchpad, CoAI SDK, AI Agent Framework, and AI Agent Template Marketplace to streamline the AI coin creation process. ",
    -1
  ),
  Xt = c(
    "h2",
    { class: "text-white font-bold mb-2 flex flex-col mb-4 text-2xl" },
    [c("span", null, "CoAI SDK and AI Agent Template Marketplace")],
    -1
  ),
  Qt = c(
    "p",
    { class: "mb-12 leading-5 !font-normal" },
    " The CoAI SDK combines AI and cryptocurrency capabilities. Developers can create various AI agents using CoAI and earn rewards by submitting them to the AI Agent Template Marketplace. CoAI is compatible with mainstream AI agent frameworks as well as our custom-built ChainOpera AI Agent Framework. ",
    -1
  ),
  Zt = {
    initial: { opacity: 0, y: 40 },
    "visible-once": { opacity: 1, y: 0, transition: { duration: 800 } },
    class: "lg:w-[890px] mb-12",
  },
  ei = c(
    "h2",
    { class: "text-white font-bold mb-2 flex flex-col mb-4 text-2xl" },
    [c("span", null, "Launchpad")],
    -1
  ),
  ti = c(
    "p",
    { class: "mb-12 leading-5 !font-normal" },
    " The Launchpad and AI Agent Template Marketplace enable anyone to create AI tokens effortlessly. ",
    -1
  ),
  ii = {
    initial: { opacity: 0, y: 40 },
    "visible-once": { opacity: 1, y: 0, transition: { duration: 800 } },
    class: "lg:w-[890px] mb-12",
  },
  ai = c(
    "h2",
    { class: "text-white font-bold mb-2 flex flex-col mb-4 text-2xl" },
    [c("span", null, "The DeAI Phone")],
    -1
  ),
  ni = c(
    "p",
    { class: "mb-12 leading-5 !font-normal" },
    ' DeAI Phone will integrate our products as default applications, evolving into an "appless" AI OS for agents. It features core system and blockchain capabilities for managing DID accounts, token wallets, $CoAI tokens, custom tokenomics, and token rewards for contributing private data (including chats, images, and more). ',
    -1
  ),
  li = {
    initial: { opacity: 0, y: 40 },
    "visible-once": { opacity: 1, y: 0, transition: { duration: 800 } },
    class: "lg:w-[890px] mb-12",
  },
  si = {
    initial: { opacity: 0, x: -60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "flex items-start gap-16 mb-32 relative flex-col lg:flex-row",
  },
  oi = {
    initial: { opacity: 0, scale: 0.8 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "w-1/4",
  },
  ri = [
    c(
      "div",
      {
        class:
          "w-[436px] h-[186px] backdrop-blur-sm relative -left-[40%] scale-[0.8]",
      },
      [
        c("img", {
          src: "/resource/img/chainopera/home/why/Group-5120.png",
          alt: "AI Keyboard",
          class: "w-full h-full",
        }),
      ],
      -1
    ),
  ],
  ci = {
    initial: { opacity: 0, scale: 0 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 400,
      },
    },
    class:
      "absolute left-[24.8%] -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-black hidden lg:block",
  },
  pi = {
    initial: { opacity: 0, x: 60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "flex-1 w-full lg:w-auto",
  },
  di = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white text-3xl font-bold mb-2 flex flex-col mb-4",
  },
  gi = [c("span", null, "Federated AI Platform", -1)],
  fi = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-4",
  },
  xi = [
    c(
      "span",
      null,
      "The federated AI platform, the world's first decentralized machine learning platform, enables all AI resource contributors—including data, model, and GPU providers—to participate in serving AI agents and apps while earning rewards. This platform builds on years of experience with TensoOpera.ai and FedML.ai.",
      -1
    ),
  ],
  yi = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-4",
  },
  ui = [
    c(
      "span",
      null,
      "Years of technological advancement in enterprise AI services through TensorOpera, FedML, ScaleLLM, and edge-cloud hybrid model serving have made it unique in the web3 industry. It stands as the only model service provider capable of delivering stable, cost-effective, scalable, and fast model-serving APIs using decentralized resources.",
      -1
    ),
  ],
  mi = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-4",
  },
  bi = [
    c(
      "span",
      null,
      "The platform leverages extensive expertise in decentralized computing, including decentralized training, federated learning, and decentralized model serving of LLMs on L1 blockchain.",
      -1
    ),
  ],
  hi = {
    initial: { opacity: 0, y: 40 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "lg:w-[893px] mt-10",
  },
  vi = { class: "flex justify-center items-center" },
  wi = c(
    "button",
    {
      class:
        "hover:bg-primary-600 transition-all shadow-md ring-1 ring-primary-400 px-6 py-2 bg-primary text-dark cursor-pointer border-none rounded-full text-2xl backdrop-blur-sm",
      "lt-md": "py-2 px-16 w-full",
    },
    " Join AI Platform ",
    -1
  ),
  Ai = {
    initial: { opacity: 0, y: 40 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "lg:w-[893px] my-12",
  },
  Ii = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white text-2xl font-bold mb-2 flex flex-col mb-4",
  },
  ki = [c("span", null, "FedML Open Source Library", -1)],
  Mi = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-12",
  },
  Ci = [
    c(
      "span",
      null,
      "The unified and scalable ML library for large-scale distributed training, model serving, and federated learning. FEDML Launch, a decentralized GPU scheduler, further enables running any AI jobs on geo-distributed GPU clusters in the globe.",
      -1
    ),
  ],
  Pi = {
    initial: { opacity: 0, y: 40 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "lg:w-[504px] lg:h-[600px] mb-12 mx-auto",
  },
  zi = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white text-2xl font-bold mb-2 flex flex-col mb-4",
  },
  Oi = [c("span", null, "Global CPU/GPU cluster", -1)],
  _i = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-12",
  },
  Li = [
    c(
      "span",
      null,
      'Our decentralized GPU cluster is contributed by community members through "share and earn".',
      -1
    ),
  ],
  ji = {
    initial: { opacity: 0, y: 40 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "lg:w-[893px]",
  },
  Gi = {
    initial: { opacity: 0, x: -60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "flex items-start gap-16 mb-32 relative flex-col lg:flex-row",
  },
  Ti = {
    initial: { opacity: 0, scale: 0.8 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "w-1/4",
  },
  Ei = [
    c(
      "div",
      {
        class:
          "w-[400px] h-[345px] backdrop-blur-sm relative -left-[40%] scale-[0.8]",
      },
      [
        c("img", {
          src: "/resource/img/chainopera/home/why/Group-5098.png",
          alt: "AI Keyboard",
          class: "w-full h-full",
        }),
      ],
      -1
    ),
  ],
  Si = {
    initial: { opacity: 0, scale: 0 },
    "visible-once": {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 400,
      },
    },
    class:
      "absolute left-[24.8%] -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-black hidden lg:block",
  },
  Fi = {
    initial: { opacity: 0, x: 60 },
    "visible-once": {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "flex-1 w-full lg:w-auto",
  },
  Di = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white text-3xl font-bold mb-2 flex flex-col mb-10",
  },
  Ri = [
    c("span", null, "ChainOpera AI Chain = Proof-of-Intelligence + AI OS", -1),
  ],
  Ui = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-4 text-2xl font-bold mt-10",
  },
  Bi = [c("span", null, "Phase 1: TestNet", -1)],
  Ni = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-10 gap-3",
  },
  Ki = [
    c("span", null, "• Local L1 Network", -1),
    c("span", null, "• Smart Contract for CoAI Protocol", -1),
  ],
  qi = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-4 text-2xl font-bold mt-10",
  },
  Hi = [c("span", null, "Phase 2: MainNet", -1)],
  Wi = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-10 gap-3",
  },
  $i = [
    c(
      "span",
      null,
      "• L1: Solana, Base, Ethereum, or Other highly scalable, depending on our performance and security test",
      -1
    ),
  ],
  Vi = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-4 text-2xl font-bold mt-10",
  },
  Ji = [c("span", null, "Phase 3: ChainOpera AI Chain (Our Own L1)", -1)],
  Yi = {
    initial: { opacity: 0, y: 20 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 600 },
    },
    class: "text-white flex flex-col mb-10 gap-3",
  },
  Xi = [
    c(
      "span",
      null,
      "• Replace Smart Contract with ChainOpera's consensus algorithm (proof of Intelligence)",
      -1
    ),
    c(
      "span",
      null,
      "• Optimize for AI Inference efficiency, scalability, and security",
      -1
    ),
    c("span", null, "• Merge Federated AI OS into L1", -1),
  ],
  Qi = {
    initial: { opacity: 0, y: 40 },
    "visible-once": {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15, duration: 800 },
    },
    class: "lg:w-[893px] mt-10",
  };
const Zi = n(ut, [
    [
      "render",
      function (e, t) {
        const i = D,
          a = I("RouterLink"),
          n = l("motion");
        return (
          o(),
          r("section", mt, [
            c("div", bt, [
              s((o(), r("h2", ht, [d(" Why ChainOpera AI? ")])), [[n]]),
              c("div", vt, [
                c("div", wt, [
                  At,
                  s(
                    (o(),
                    r("div", It, [
                      s((o(), r("div", kt, Mt)), [[n]]),
                      s(c("div", Ct, null, 512), [[n]]),
                      s(
                        (o(),
                        r("div", Pt, [
                          zt,
                          Ot,
                          _t,
                          Lt,
                          s((o(), r("div", jt, Gt)), [[n]]),
                          Tt,
                          Et,
                          s(
                            (o(),
                            r("div", St, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/terminal.png",
                                alt: "ChainOpera AI Terminal",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                        ])),
                        [[n]]
                      ),
                    ])),
                    [[n]]
                  ),
                  s(
                    (o(),
                    r("div", Ft, [
                      s((o(), r("div", Dt, Rt)), [[n]]),
                      s(c("div", Ut, null, 512), [[n]]),
                      s(
                        (o(),
                        r("div", Bt, [
                          Nt,
                          Kt,
                          s(
                            (o(),
                            r("div", qt, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/Group-5115.png",
                                alt: "ChainOpera AI Galaxy",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                        ])),
                        [[n]]
                      ),
                    ])),
                    [[n]]
                  ),
                  s(
                    (o(),
                    r("div", Ht, [
                      Wt,
                      s(c("div", $t, null, 512), [[n]]),
                      s(
                        (o(),
                        r("div", Vt, [
                          Jt,
                          Yt,
                          Xt,
                          Qt,
                          s(
                            (o(),
                            r("div", Zt, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/Group-5099.png",
                                alt: "AI Agent",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                          ei,
                          ti,
                          s(
                            (o(),
                            r("div", ii, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/Group-5117.png",
                                alt: "AI Agent",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                          ai,
                          ni,
                          s(
                            (o(),
                            r("div", li, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/Group-5116.png",
                                alt: "AI Agent",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                        ])),
                        [[n]]
                      ),
                    ])),
                    [[n]]
                  ),
                  s(
                    (o(),
                    r("div", si, [
                      s((o(), r("div", oi, ri)), [[n]]),
                      s(c("div", ci, null, 512), [[n]]),
                      s(
                        (o(),
                        r("div", pi, [
                          s((o(), r("h2", di, gi)), [[n]]),
                          s((o(), r("p", fi, xi)), [[n]]),
                          s((o(), r("p", yi, ui)), [[n]]),
                          s((o(), r("p", mi, bi)), [[n]]),
                          s(
                            (o(),
                            r("div", hi, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/Group-5119.png",
                                alt: "ChainOpera AI Galaxy",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                          c("div", vi, [
                            v(
                              a,
                              { to: "/prod/model" },
                              { default: k(() => [wi]), _: 1 }
                            ),
                          ]),
                          s(
                            (o(),
                            r("div", Ai, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/Group-5118.png",
                                alt: "ChainOpera AI Galaxy",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                          s((o(), r("h2", Ii, ki)), [[n]]),
                          s((o(), r("p", Mi, Ci)), [[n]]),
                          s(
                            (o(),
                            r("div", Pi, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/Group-5122.png",
                                alt: "ChainOpera AI Galaxy",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                          s((o(), r("h2", zi, Oi)), [[n]]),
                          s((o(), r("p", _i, Li)), [[n]]),
                          s(
                            (o(),
                            r("div", ji, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/Group-5125.png",
                                alt: "ChainOpera AI Galaxy",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                        ])),
                        [[n]]
                      ),
                    ])),
                    [[n]]
                  ),
                  s(
                    (o(),
                    r("div", Gi, [
                      s((o(), r("div", Ti, Ei)), [[n]]),
                      s(c("div", Si, null, 512), [[n]]),
                      s(
                        (o(),
                        r("div", Fi, [
                          s((o(), r("h2", Di, Ri)), [[n]]),
                          s((o(), r("h3", Ui, Bi)), [[n]]),
                          s((o(), r("p", Ni, Ki)), [[n]]),
                          s((o(), r("h3", qi, Hi)), [[n]]),
                          s((o(), r("p", Wi, $i)), [[n]]),
                          s((o(), r("h3", Vi, Ji)), [[n]]),
                          s((o(), r("p", Yi, Xi)), [[n]]),
                          s(
                            (o(),
                            r("div", Qi, [
                              v(i, {
                                src: "/resource/img/chainopera/home/why/Group-5105.png",
                                alt: "ChainOpera AI Galaxy",
                                class: "w-full h-full",
                              }),
                            ])),
                            [[n]]
                          ),
                        ])),
                        [[n]]
                      ),
                    ])),
                    [[n]]
                  ),
                ]),
              ]),
            ]),
          ])
        );
      },
    ],
  ]),
  ea = {
    class: "h-screen",
    "overflow-x-hidden": "",
    relative: "",
    "bg-codark": "",
  },
  ta = { "max-w-1920px": "", "mx-auto": "" },
  ia = {
    style: {
      backgroundImage: "url(/resource/img/chainopera/home/texture.svg)",
      backgroundSize: "100% auto",
    },
  },
  aa = y({
    __name: "chainopera-index",
    setup(e) {
      const t = S();
      return (
        _(() => {
          t.init();
        }),
        (e, i) => (
          o(),
          r("div", ea, [
            c("div", ta, [
              v(dt),
              v(Pe),
              v(Zi),
              v(He),
              c("div", ia, [v(ne), v(ue)]),
              v(yt, { list: p(t).getPressList }, null, 8, ["list"]),
              v(ve, { list: p(t).getEventList }, null, 8, ["list"]),
              v(F),
            ]),
          ])
        )
      );
    },
  });
export { aa as default };

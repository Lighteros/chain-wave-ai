import {
  as as e,
  bQ as t,
  at as a,
  by as i,
  bw as s,
  au as n,
  bo as l,
  ax as o,
  aw as r,
  a as p,
  av as d,
  aC as c,
  bN as u,
  bl as m,
  aA as b,
  aB as g,
  bp as f,
  c6 as h,
  bA as y,
} from "./index-DPRREYlk.js";
import { _ as x } from "./logo-with-brand-light-BCpFi14j.js";
import { L as _, b as k, a as j } from "./index-B6F7cNAD.js";
import "./isNumeric-DFkNItwV.js";
import "./LeftOutlined-rFvNtfcP.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./uniqBy-CccCILMw.js";
const w = m(
    "img",
    { "select-none": "", "pointer-events-none": "", class: "w-4/5", src: x },
    null,
    -1
  ),
  A = { class: "flex items-center gap-2" },
  O = {
    absolute: "",
    "bottom-30px": "",
    "w-full": "",
    flex: "~ col gap-5",
    "px-4": "",
    text: "#0000004D center",
  },
  v = m(
    "div",
    null,
    " Want to join the AI App Ecosystem running on ChainWave AI platform? ",
    -1
  ),
  C = m(
    "button",
    {
      "px-8": "",
      "py-4": "",
      "bg-primary": "",
      "text-white": "",
      class:
        "hover:bg-primary-600 transition-all shadow-md ring-1 ring-primary-400",
      "cursor-pointer": "",
      "border-none": "",
      "rounded-full": "",
      "text-base": "",
      "backdrop-blur-sm": "",
      "lt-md": "py-2 px-16 w-full",
    },
    " Join Community",
    -1
  ),
  I = m(
    "span",
    { "mt-10px": "" },
    " Running on the Decentralized AI Platform ",
    -1
  ),
  P = { class: "hidden lt-md:inline-block py-2" },
  T = { class: "flex items-center gap-2" },
  z = e({
    __name: "co-chat-index",
    setup(e) {
      const x = t(),
        z = a([
          {
            key: i.CO_APP_LLM,
            title: "Chat with AI",
            label: "Chat with AI",
            icon: "i-ant-design:message-outlined",
          },
          {
            key: i.CO_APP_TEXT_TO_IMAGE,
            title: "Image generation",
            label: "Image generation",
            icon: "i-ant-design:picture-outlined",
          },
          {
            key: i.CO_APP_TEXT_TO_VIDEO,
            title: "Video generation",
            label: "Video generation",
            icon: "i-ant-design:video-camera-outlined",
          },
        ]);
      return (e, t) => {
        const a = s("RouterLink"),
          i = f,
          E = h,
          L = y,
          D = k,
          B = j;
        return (
          n(),
          l(
            B,
            { "h-full": "", "max-w-1920px": "", "mx-auto": "" },
            {
              default: o(() => [
                r(
                  D,
                  {
                    width: "281",
                    theme: "light",
                    class: "!bg-light-500 lt-md:hidden",
                    relative: "",
                  },
                  {
                    default: o(() => [
                      r(
                        a,
                        { class: "flex justify-center", "my-8": "", to: "/" },
                        { default: o(() => [w]), _: 1 }
                      ),
                      r(
                        L,
                        {
                          class: "bg-inherit !border-none",
                          "selected-keys": [p(x).name],
                          mode: "inline",
                          onClick:
                            t[0] ||
                            (t[0] = ({ key: t }) =>
                              e.$router.push({ name: t })),
                        },
                        {
                          default: o(() => [
                            (n(!0),
                            d(
                              c,
                              null,
                              u(
                                p(z),
                                (e) => (
                                  n(),
                                  l(
                                    E,
                                    { key: e.key, title: e.title },
                                    {
                                      default: o(() => [
                                        m("span", A, [
                                          r(
                                            i,
                                            { icon: e.icon, size: 20 },
                                            null,
                                            8,
                                            ["icon"]
                                          ),
                                          b(" " + g(e.title), 1),
                                        ]),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["title"]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 1,
                        },
                        8,
                        ["selected-keys"]
                      ),
                      m("div", O, [
                        v,
                        r(
                          a,
                          { to: "http://t.me/ChainWave_AI" },
                          { default: o(() => [C]), _: 1 }
                        ),
                        I,
                      ]),
                    ]),
                    _: 1,
                  }
                ),
                r(
                  B,
                  { theme: "light" },
                  {
                    default: o(() => [
                      m("div", P, [
                        r(
                          L,
                          {
                            class:
                              "bg-inherit !border-none w-full flex flex-center",
                            "selected-keys": [p(x).name],
                            mode: "horizontal",
                            onClick:
                              t[1] ||
                              (t[1] = ({ key: t }) =>
                                e.$router.push({ name: t })),
                          },
                          {
                            default: o(() => [
                              r(
                                E,
                                { disabled: "" },
                                {
                                  default: o(() => [
                                    r(
                                      a,
                                      {
                                        class: "flex items-center gap-2",
                                        to: "/",
                                      },
                                      {
                                        default: o(() => [
                                          r(i, { icon: "i-co:logo", size: 42 }),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]),
                                  _: 1,
                                }
                              ),
                              (n(!0),
                              d(
                                c,
                                null,
                                u(
                                  p(z),
                                  (e) => (
                                    n(),
                                    l(
                                      E,
                                      { key: e.key, title: e.title },
                                      {
                                        default: o(() => [
                                          m("span", T, [
                                            r(
                                              i,
                                              { icon: e.icon, size: 20 },
                                              null,
                                              8,
                                              ["icon"]
                                            ),
                                            b(" " + g(e.title), 1),
                                          ]),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["title"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                            _: 1,
                          },
                          8,
                          ["selected-keys"]
                        ),
                      ]),
                      r(_, { class: "bg-white" }),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
export { z as default };

import {
  aw as e,
  as as t,
  r as n,
  aL as a,
  bX as r,
  au as o,
  av as s,
  aB as i,
  aD as u,
  bo as p,
  ax as l,
  bY as c,
  bl as d,
  a as y,
  aA as m,
  co as f,
  az as b,
} from "./index-DPRREYlk.js";
import { E as O } from "./Endpoint-DTdkXGrW.js";
import { _ as h } from "./JsonPreview.vue_vue_type_script_setup_true_lang-Tt-e9JVs.js";
import v from "./AudioPlayer-TPbK2jt9.js";
import { D as E } from "./DownloadOutlined-6grUi9hP.js";
import { I as j } from "./AntdIcon-BRScHDs1.js";
import { I } from "./index-DO9NC2BL.js";
import { _, C as D } from "./index-B6_k9Qtv.js";
import "./create-enum-converter-ClJbjM_p.js";
import "./LeftOutlined-rFvNtfcP.js";
function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? Object(arguments[t]) : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols &&
      (a = a.concat(
        Object.getOwnPropertySymbols(n).filter(function (e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable;
        })
      )),
      a.forEach(function (t) {
        A(e, t, n[t]);
      });
  }
  return e;
}
function A(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var w = function (t, n) {
  var a = k({}, t, n.attrs);
  return e(j, k({}, a, { icon: E }), null);
};
(w.displayName = "DownloadOutlined"), (w.inheritAttrs = !1);
var g = ((e) => (
  (e[(e.IMAGE = 0)] = "IMAGE"),
  (e[(e.AUDIO = 1)] = "AUDIO"),
  (e[(e.VIDEO = 2)] = "VIDEO"),
  (e[(e.OTHER = -1)] = "OTHER"),
  e
))(g || {});
const T = { 0: 10485760, 1: 52428800, 2: 104857600 };
const P = { class: "w-full" },
  R = { key: 0 },
  G = ["src"],
  M = { key: 3 },
  U = d("br", null, null, -1),
  V = ["src"],
  W = { key: 7 },
  x = t({
    __name: "UserParameters",
    props: {
      label: {},
      contentKey: {},
      input: {},
      open: { type: Boolean },
      header: {},
      endpoint: {},
      isoutput: { type: Boolean },
      hideParams: { type: Boolean },
    },
    setup(t) {
      const E = t,
        j = n(!0),
        k = n(!1);
      function A() {
        return E.endpoint
          ? (E.isoutput && O[E.endpoint.apiType].endsWith("IMAGE")) ||
            (!E.isoutput && O[E.endpoint.apiType].startsWith("IMAGE"))
            ? g.IMAGE
            : (E.isoutput && O[E.endpoint.apiType].endsWith("VIDEO")) ||
              (!E.isoutput && O[E.endpoint.apiType].startsWith("VIDEO"))
            ? g.VIDEO
            : (E.isoutput && O[E.endpoint.apiType].endsWith("AUDIO")) ||
              (!E.isoutput && O[E.endpoint.apiType].startsWith("AUDIO"))
            ? g.AUDIO
            : g.OTHER
          : g.OTHER;
      }
      function x() {
        k.value = !0;
      }
      function H() {
        window.open(E.input.url, "_blank", "noopener noreferrer");
      }
      return (
        a(async () => {
          const e = A();
          E.input &&
            E.input.url &&
            e !== g.OTHER &&
            (k.value = await (async function (e, t) {
              try {
                const n = await fetch(e, {
                  method: "GET",
                  headers: { range: "bytes=0-0" },
                });
                if (n.ok && n.headers.has("Content-Range")) {
                  const e = n.headers.get("Content-Range")?.split("/")[1];
                  return Number(e) < T[t];
                }
                return !1;
              } catch (n) {
                return !1;
              }
            })(E.input.url, e)),
            (j.value = !1);
        }),
        (t, n) => {
          const a = I,
            O = b,
            E = _,
            T = D,
            C = r("loading");
          return (
            o(),
            s("div", P, [
              t.contentKey && t.input
                ? (o(), s("div", R, i(t.input[t.contentKey]), 1))
                : u("", !0),
              t.hideParams
                ? u("", !0)
                : (o(),
                  p(
                    T,
                    {
                      key: 1,
                      size: "small",
                      bordered: !1,
                      class: "text-sm",
                      "default-active-key": t.$props.open ? "parameters" : "",
                    },
                    {
                      default: l(() => [
                        c(
                          (o(),
                          p(
                            E,
                            {
                              key: "parameters",
                              header: t.$props.header || "More parameters",
                            },
                            {
                              default: l(() => [
                                c(
                                  d(
                                    "div",
                                    null,
                                    [
                                      A() === y(g).IMAGE &&
                                      t.input.b64_json &&
                                      "" !== t.input.b64_json
                                        ? (o(),
                                          p(
                                            a,
                                            {
                                              key: 0,
                                              src: `data:image/png;base64, ${t.input.b64_json}`,
                                            },
                                            null,
                                            8,
                                            ["src"]
                                          ))
                                        : A() === y(g).VIDEO &&
                                          t.input.b64_json &&
                                          "" !== t.input.b64_json
                                        ? (o(),
                                          s(
                                            "video",
                                            {
                                              key: 1,
                                              src: `data:video/mp4;base64, ${t.input.b64_json}`,
                                              controls: "",
                                              playsinline: "",
                                            },
                                            null,
                                            8,
                                            G
                                          ))
                                        : y(k) ||
                                          (A() != y(g).OTHER && t.input.url)
                                        ? y(k)
                                          ? A() === y(g).IMAGE
                                            ? (o(),
                                              p(
                                                a,
                                                {
                                                  key: 4,
                                                  src: t.input.url,
                                                  placeholder: !0,
                                                },
                                                null,
                                                8,
                                                ["src"]
                                              ))
                                            : A() === y(g).VIDEO
                                            ? (o(),
                                              s(
                                                "video",
                                                {
                                                  key: 5,
                                                  src: t.input.url,
                                                  controls: "",
                                                  playsinline: "",
                                                },
                                                null,
                                                8,
                                                V
                                              ))
                                            : A() === y(g).AUDIO
                                            ? (o(),
                                              p(
                                                v,
                                                {
                                                  key: 6,
                                                  music_url: t.input.url,
                                                },
                                                null,
                                                8,
                                                ["music_url"]
                                              ))
                                            : (o(),
                                              s(
                                                "div",
                                                W,
                                                " Uh oh, an error occurred! "
                                              ))
                                          : (o(),
                                            s("div", M, [
                                              m(
                                                " We detected a pretty big file! "
                                              ),
                                              U,
                                              e(
                                                O,
                                                {
                                                  class: "mt-2 mr-2 mb-2",
                                                  type: "primary",
                                                  onClick: H,
                                                },
                                                {
                                                  icon: l(() => [e(y(w))]),
                                                  default: l(() => [
                                                    m(" Download "),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                              e(
                                                O,
                                                { type: "default", onClick: x },
                                                {
                                                  default: l(() => [
                                                    m(" Load Anyway "),
                                                  ]),
                                                  _: 1,
                                                }
                                              ),
                                            ]))
                                        : (o(),
                                          p(
                                            h,
                                            { key: 2, data: t.input || {} },
                                            null,
                                            8,
                                            ["data"]
                                          )),
                                    ],
                                    512
                                  ),
                                  [[f, !y(j)]]
                                ),
                              ]),
                              _: 1,
                            },
                            8,
                            ["header"]
                          )),
                          [[C, y(j)]]
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["default-active-key"]
                  )),
            ])
          );
        }
      );
    },
  });
export { x as default };

import {
  as as e,
  bC as a,
  bD as s,
  at as t,
  r as o,
  c as i,
  b2 as r,
  _ as n,
  bY as l,
  co as c,
  au as u,
  bo as m,
  ax as p,
  av as d,
  aC as f,
  bN as g,
  a as h,
  bl as b,
  aB as v,
  aw as y,
  df as k,
  bp as _,
} from "./index-DPRREYlk.js";
import { M as x } from "./MsgMarkdown-D7hUrRUd.js";
import "./useSafeMarked-JcrkB-hc.js";
import "./github-dark-dimmed-CPsh559a.js";
const w = ["onClick"],
  z = { class: "font-700" },
  j = {
    key: "switcher",
    class:
      "sticky select-none flex items-center px2 py1 bg-white w-full bottom-0 z10",
  },
  C = { class: "ml-auto text-sm font-100 text-gray-400" },
  V = e({
    __name: "Prompts",
    props: a(
      { message: {} },
      { modelValue: { type: Boolean }, modelModifiers: {} }
    ),
    emits: a(["confirm"], ["update:modelValue"]),
    setup(e, { emit: a }) {
      const V = e,
        E = a,
        M = s(e, "modelValue"),
        P = t({ zh: !1, en: !0 });
      function D(e) {
        (P[e] = !P[e]), P.zh || P.en || (P[e] = !0);
      }
      const O = o(!1),
        R = o([]),
        A = i(() => {
          const e = Object.entries(P)
              .filter(([e, a]) => !!a)
              .map(([e]) => e),
            a = R.value.filter((a) => e.includes(a.lang));
          if (V.message.startsWith(":")) {
            const e = (e) =>
              e.search(new RegExp(V.message.substring(1), "i")) > -1;
            return a.filter((a) => e(a.act) || e(a.prompt));
          }
          return a;
        });
      return (
        r(() => {
          V.message && V.message.startsWith(":") && (M.value = !0),
            !0 === M.value &&
              (async function () {
                O.value = !0;
                const [e, a] = await Promise.all([
                  (
                    await n(async () => {
                      const { default: e } = await import(
                        "./prompt-en-xCiiaOBN.js"
                      );
                      return { default: e };
                    }, [])
                  ).default.map((e) => ({ ...e, lang: "en" })),
                  (
                    await n(async () => {
                      const { default: e } = await import(
                        "./prompt-zh-DFPHRVgJ.js"
                      );
                      return { default: e };
                    }, [])
                  ).default.map((e) => ({ ...e, lang: "zh" })),
                ]);
                (O.value = !1), (R.value = [...a, ...e]);
              })();
        }),
        (e, a) => {
          const s = _;
          return l(
            (u(),
            m(
              k,
              {
                class:
                  "rounded-md mb0 pl0 max-h-80 h-40 resize-y overflow-auto relative divide-solid divide-gray-100 border border-solid border-gray-300",
                tag: "ul",
                name: "fade-bottom",
              },
              {
                default: p(() => [
                  (u(!0),
                  d(
                    f,
                    null,
                    g(
                      h(A),
                      (e) => (
                        u(),
                        d(
                          "li",
                          {
                            key: e.prompt,
                            class: "hover:bg-gray-100 cursor-pointer p4",
                            onClick: (a) =>
                              (function (e) {
                                (M.value = !1), E("confirm", e);
                              })(e.prompt),
                          },
                          [
                            b("div", z, v(e.act), 1),
                            y(x, { text: e.prompt }, null, 8, ["text"]),
                          ],
                          8,
                          w
                        )
                      )
                    ),
                    128
                  )),
                  b("li", j, [
                    y(
                      s,
                      {
                        icon: h(P).en
                          ? "i-icon-park-solid:english"
                          : "i-icon-park-outline:english",
                        size: 20,
                        class: "cursor-pointer text-primary",
                        onClick: a[0] || (a[0] = (e) => D("en")),
                      },
                      null,
                      8,
                      ["icon"]
                    ),
                    y(
                      s,
                      {
                        icon: h(P).zh
                          ? "i-icon-park-solid:chinese"
                          : "i-icon-park-outline:chinese",
                        size: 20,
                        class: "cursor-pointer text-primary",
                        onClick: a[1] || (a[1] = (e) => D("zh")),
                      },
                      null,
                      8,
                      ["icon"]
                    ),
                    b("span", C, v(h(A).length) + "/" + v(h(R).length), 1),
                  ]),
                ]),
                _: 1,
              },
              512
            )),
            [[c, M.value]]
          );
        }
      );
    },
  });
export { V as default };

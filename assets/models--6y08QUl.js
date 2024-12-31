import { S as a, _ as e } from "./PageWrapper-BPMfS97v.js";
import {
  as as l,
  r as s,
  c as t,
  d9 as o,
  at as r,
  db as i,
  aR as n,
  aL as u,
  aP as d,
  au as c,
  bo as p,
  ax as m,
  bl as g,
  aw as v,
  a as f,
  bO as y,
  av as b,
  aC as h,
  aA as j,
  bN as _,
  dc as k,
  dd as x,
  aD as S,
  df as w,
  bY as N,
  co as I,
  bW as C,
  de as T,
  bJ as z,
  d1 as A,
  bp as E,
  aB as P,
} from "./index-DPRREYlk.js";
import { C as D } from "./index-Cq67sDBe.js";
import { a as L } from "./useTagDict-BaLmcAYF.js";
import { _ as O } from "./ModelCardV1.vue_vue_type_script_setup_true_lang-DVM0FBfw.js";
import { S as R } from "./Scrollbar-CV0fAAKu.js";
import { S as F } from "./index-B0yuFjoJ.js";
import { C as B } from "./CheckableTag-CI-ued8d.js";
import "./index-CMko8JXS.js";
import { _ as M } from "./index-BoKZCklY.js";
import { _ as Y } from "./index-u_fLo2At.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./tsxHelper-DjrCDYtL.js";
import "./BasicTitle-CY4FQusD.js";
import "./useTimeout-BMbf6gdC.js";
import "./useSafeMarked-JcrkB-hc.js";
import "./github-dark-dimmed-CPsh559a.js";
import "./index-DNofMLzB.js";
import "./Col-Djm-avAF.js";
const q = { class: "relative h-full overflow-x-hidden overflow-y-auto" },
  H = { class: "w-6/10 flex items-center gap-1" },
  J = { class: "m4" },
  U = l({
    __name: "models",
    setup(l) {
      const U = s([]),
        V = s({}),
        W = s([]),
        G = t(() => o.DEPLOY),
        K = t(() => G.value === o.TRAIN || G.value === o.FEDERATE),
        $ = r({ pageNum: 0, pageSize: 16, total: 0, totalPage: 1 }),
        Q = s(),
        X = s(""),
        Z = s(!1),
        aa = s(!1),
        ea = s(),
        la = i(ea);
      let sa;
      function ta(a) {
        (Q.value = Q.value === a ? null : a),
          ($.pageNum = 1),
          (W.value = []),
          ia();
      }
      async function oa() {
        ($.pageNum = 1), (W.value = []), await ia();
      }
      const ra = C(oa, 1e3);
      async function ia() {
        Z.value = !0;
        const { data: a } = await (async function () {
          const { signal: a } =
              (sa && (sa.abort(), (sa = void 0)),
              (sa = new AbortController()),
              sa),
            e = Object.values(V.value)
              .map((a) => a.tagId)
              .filter((a) => !T(a))
              .toString();
          return await z("/api/v1/application/queryAppStoreList").get({
            query: {
              jobSubType: Q.value,
              applicationName: X.value || "",
              pageSize: $.pageSize,
              pageNum: $.pageNum,
              tagArr: e,
              jobType: G.value,
            },
            signal: a,
          });
        })();
        (W.value = W.value.concat(a.data)),
          ($.total = a.total),
          ($.totalPage = a.totalPage),
          (Z.value = !1);
      }
      return (
        n(
          la,
          (a) => {
            const e = !Z.value && $.totalPage > $.pageNum;
            a && e && (($.pageNum += 1), ia());
          },
          { immediate: !0 }
        ),
        u(async () => {
          !(async function () {
            (aa.value = !0),
              (U.value = (await L()).data || []),
              (U.value = U.value.filter((a) => a.tagInfoList.length > 0)),
              (aa.value = !1);
          })();
        }),
        d(() => {
          sa && (sa.abort(), (sa = void 0));
        }),
        (l, s) => {
          const t = A,
            r = M,
            i = F,
            n = E,
            u = a,
            d = Y,
            C = e;
          return (
            c(),
            p(
              C,
              {
                dense: "",
                "fixed-height": "",
                "content-full-height": "",
                class: "relative",
              },
              {
                default: m(() => [
                  g("div", q, [
                    v(
                      r,
                      {
                        class:
                          "h-30 bg-primary flex justify-center items-center sticky top-0 z-99",
                      },
                      {
                        default: m(() => [
                          g("div", H, [
                            v(
                              t,
                              {
                                value: f(X),
                                "onUpdate:value":
                                  s[0] ||
                                  (s[0] = (a) => (y(X) ? (X.value = a) : null)),
                                placeholder:
                                  f(G) !== f(o).DEPLOY
                                    ? "Search jobs"
                                    : "Search models",
                                class: "",
                                size: "large",
                                loading: f(Z),
                                onInput: f(ra),
                                onSearch: oa,
                              },
                              null,
                              8,
                              ["value", "placeholder", "loading", "onInput"]
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                    g("div", J, [
                      v(
                        r,
                        { gutter: 16, class: "my-4" },
                        {
                          default: m(() => [
                            v(
                              d,
                              { lg: 6, md: 24 },
                              {
                                default: m(() => [
                                  v(
                                    f(R),
                                    {
                                      class:
                                        "bg-white rounded-md ring ring-primary/10 pb-4 z-1 overflow-y-auto !sticky top-[calc(120px+18px)] !lg:h-[calc(100vh-120px-80px-64px)] md:h-auto md-mb-4",
                                    },
                                    {
                                      default: m(() => [
                                        f(aa)
                                          ? (c(),
                                            b(
                                              h,
                                              { key: 0 },
                                              [
                                                v(i, {
                                                  avatar: "",
                                                  class: "p-2",
                                                }),
                                                v(i, {
                                                  avatar: "",
                                                  class: "p-2",
                                                }),
                                              ],
                                              64
                                            ))
                                          : (c(),
                                            b(
                                              h,
                                              { key: 1 },
                                              [
                                                f(K)
                                                  ? (c(),
                                                    p(
                                                      f(D),
                                                      {
                                                        key: 0,
                                                        dense: "",
                                                        "can-expan": !1,
                                                        class: "rounded-md",
                                                      },
                                                      {
                                                        title: m(() => [
                                                          v(n, {
                                                            icon: "i-tabler:keyframe-align-vertical",
                                                          }),
                                                          j("Job Sub Type "),
                                                        ]),
                                                        default: m(() => [
                                                          f(G) === f(o).TRAIN
                                                            ? (c(),
                                                              p(
                                                                u,
                                                                {
                                                                  key: 0,
                                                                  size: [0, 8],
                                                                  wrap: "",
                                                                },
                                                                {
                                                                  default: m(
                                                                    () => [
                                                                      (c(!0),
                                                                      b(
                                                                        h,
                                                                        null,
                                                                        _(
                                                                          f(k),
                                                                          (
                                                                            a
                                                                          ) => (
                                                                            c(),
                                                                            p(
                                                                              f(
                                                                                B
                                                                              ),
                                                                              {
                                                                                key: a.value,
                                                                                class:
                                                                                  "border-solid border-gray-300! select-none",
                                                                                checked:
                                                                                  f(
                                                                                    Q
                                                                                  ) ===
                                                                                  a.value,
                                                                                onChange:
                                                                                  () =>
                                                                                    ta(
                                                                                      a.value
                                                                                    ),
                                                                              },
                                                                              {
                                                                                default:
                                                                                  m(
                                                                                    () => [
                                                                                      j(
                                                                                        P(
                                                                                          a.name
                                                                                        ),
                                                                                        1
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                _: 2,
                                                                              },
                                                                              1032,
                                                                              [
                                                                                "checked",
                                                                                "onChange",
                                                                              ]
                                                                            )
                                                                          )
                                                                        ),
                                                                        128
                                                                      )),
                                                                    ]
                                                                  ),
                                                                  _: 1,
                                                                }
                                                              ))
                                                            : f(G) ===
                                                              f(o).FEDERATE
                                                            ? (c(),
                                                              p(
                                                                u,
                                                                {
                                                                  key: 1,
                                                                  size: [0, 8],
                                                                  wrap: "",
                                                                },
                                                                {
                                                                  default: m(
                                                                    () => [
                                                                      (c(!0),
                                                                      b(
                                                                        h,
                                                                        null,
                                                                        _(
                                                                          f(x),
                                                                          (
                                                                            a
                                                                          ) => (
                                                                            c(),
                                                                            p(
                                                                              f(
                                                                                B
                                                                              ),
                                                                              {
                                                                                key: a.value,
                                                                                class:
                                                                                  "border-solid border-gray-300! select-none",
                                                                                checked:
                                                                                  f(
                                                                                    Q
                                                                                  ) ===
                                                                                  a.value,
                                                                                onChange:
                                                                                  () =>
                                                                                    ta(
                                                                                      a.value
                                                                                    ),
                                                                              },
                                                                              {
                                                                                default:
                                                                                  m(
                                                                                    () => [
                                                                                      j(
                                                                                        P(
                                                                                          a.name
                                                                                        ),
                                                                                        1
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                _: 2,
                                                                              },
                                                                              1032,
                                                                              [
                                                                                "checked",
                                                                                "onChange",
                                                                              ]
                                                                            )
                                                                          )
                                                                        ),
                                                                        128
                                                                      )),
                                                                    ]
                                                                  ),
                                                                  _: 1,
                                                                }
                                                              ))
                                                            : S("", !0),
                                                        ]),
                                                        _: 1,
                                                      }
                                                    ))
                                                  : S("", !0),
                                                (c(!0),
                                                b(
                                                  h,
                                                  null,
                                                  _(
                                                    f(U),
                                                    (a) => (
                                                      c(),
                                                      p(
                                                        f(D),
                                                        {
                                                          key: a.tagId,
                                                          "can-expan": "",
                                                          dense: "",
                                                          class: "rounded-md",
                                                        },
                                                        {
                                                          title: m(() => [
                                                            j(P(a.tagName), 1),
                                                          ]),
                                                          default: m(() => [
                                                            v(
                                                              u,
                                                              {
                                                                size: [0, 8],
                                                                wrap: "",
                                                              },
                                                              {
                                                                default: m(
                                                                  () => [
                                                                    (c(!0),
                                                                    b(
                                                                      h,
                                                                      null,
                                                                      _(
                                                                        a.tagInfoList,
                                                                        (e) => (
                                                                          c(),
                                                                          p(
                                                                            f(
                                                                              B
                                                                            ),
                                                                            {
                                                                              key: e.tagName,
                                                                              class:
                                                                                "border-solid border-gray-300! select-none",
                                                                              checked:
                                                                                f(
                                                                                  V
                                                                                )[
                                                                                  a
                                                                                    .tagId
                                                                                ]
                                                                                  ?.tagId ===
                                                                                e.tagId,
                                                                              onChange:
                                                                                (
                                                                                  l
                                                                                ) =>
                                                                                  (async function (
                                                                                    a,
                                                                                    e,
                                                                                    l
                                                                                  ) {
                                                                                    e
                                                                                      ? (V.value[
                                                                                          l
                                                                                        ] =
                                                                                          a)
                                                                                      : V
                                                                                          .value[
                                                                                          l
                                                                                        ] &&
                                                                                        delete V
                                                                                          .value[
                                                                                          l
                                                                                        ],
                                                                                      ($.pageNum = 1),
                                                                                      (W.value =
                                                                                        []),
                                                                                      ia();
                                                                                  })(
                                                                                    e,
                                                                                    l,
                                                                                    a.tagId
                                                                                  ),
                                                                            },
                                                                            {
                                                                              default:
                                                                                m(
                                                                                  () => [
                                                                                    j(
                                                                                      P(
                                                                                        e.tagName
                                                                                      ),
                                                                                      1
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              _: 2,
                                                                            },
                                                                            1032,
                                                                            [
                                                                              "checked",
                                                                              "onChange",
                                                                            ]
                                                                          )
                                                                        )
                                                                      ),
                                                                      128
                                                                    )),
                                                                  ]
                                                                ),
                                                                _: 2,
                                                              },
                                                              1024
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1024
                                                      )
                                                    )
                                                  ),
                                                  128
                                                )),
                                              ],
                                              64
                                            )),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                            v(
                              d,
                              { lg: 18, md: 24 },
                              {
                                default: m(() => [
                                  v(
                                    w,
                                    {
                                      name: "zoom-fade",
                                      mode: "out-in",
                                      tag: "div",
                                      class:
                                        "grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4",
                                    },
                                    {
                                      default: m(() => [
                                        (c(!0),
                                        b(
                                          h,
                                          null,
                                          _(
                                            f(W),
                                            (a) => (
                                              c(),
                                              p(
                                                O,
                                                {
                                                  key: a.id,
                                                  "is-from": f(G),
                                                  item: a,
                                                },
                                                null,
                                                8,
                                                ["is-from", "item"]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                        (c(!0),
                                        b(
                                          h,
                                          null,
                                          _(f($).pageSize, (a) =>
                                            N(
                                              (c(),
                                              p(
                                                O,
                                                {
                                                  key: `placeholder${a}`,
                                                  "is-from": f(G),
                                                  loading: "",
                                                },
                                                null,
                                                8,
                                                ["is-from"]
                                              )),
                                              [[I, f(Z)]]
                                            )
                                          ),
                                          128
                                        )),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                  N(
                                    g(
                                      "div",
                                      {
                                        ref_key: "visibilityRef",
                                        ref: ea,
                                        class: "w-full h-10",
                                      },
                                      null,
                                      512
                                    ),
                                    [[I, !f(Z)]]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  });
export { U as default };

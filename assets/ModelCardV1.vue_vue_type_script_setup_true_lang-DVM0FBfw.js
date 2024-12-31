import {
  as as e,
  bQ as t,
  c as s,
  d9 as a,
  by as i,
  bw as r,
  au as o,
  bo as l,
  ax as n,
  bl as p,
  bm as c,
  a as m,
  aw as d,
  av as u,
  aC as x,
  aA as f,
  aB as y,
  aD as v,
  bN as g,
  da as w,
  bz as h,
  bp as $,
} from "./index-DPRREYlk.js";
import { u as b } from "./useSafeMarked-JcrkB-hc.js";
import { S as k } from "./Scrollbar-CV0fAAKu.js";
import { S as _ } from "./index-B0yuFjoJ.js";
import { _ as N } from "./index-DNofMLzB.js";
const B = {
    class:
      "group rounded-inherit ring-1 ring-black/5 shadow-sm transition-all hover:shadow-xl hover:scale-102",
  },
  D = { class: "relative flex justify-center" },
  M = ["src"],
  j = { class: "px-2" },
  E = { class: "text-center" },
  O = ["title"],
  T = { class: "text-sm" },
  F = {
    key: 0,
    class:
      "h-32 overflow-hidden font-400 text-sm p2 bg-gray/10 relative w-full",
  },
  S = ["innerHTML"],
  L = ["title"],
  q = { key: 0, class: "flex items-center text-xs text-gray-500" },
  A = {
    key: 2,
    class: "flex justify-between flex-wrap text-xs text-gray-500 gap-2 pb-2",
  },
  C = { class: "flex items-center gap-2 text-xs" },
  Y = ["title"],
  I = ["title"],
  R = ["title"],
  U = { key: 0, class: "flex items-center" },
  H = ["title"],
  J = e({
    __name: "ModelCardV1",
    props: {
      item: {},
      isFrom: {},
      showDescription: { type: Boolean },
      loading: { type: Boolean },
      hideOwner: { type: Boolean },
      hideFooter: { type: Boolean },
    },
    setup(e) {
      const J = e,
        K = b(),
        P = t(),
        V = s(() => P.path.split("/").at(-1)),
        z = s(() => {
          if (J.isFrom === a.DEPLOY)
            return {
              name: i.MODEL_MKT_BY_ID,
              params: {
                owner: J.item?.owner || "-",
                applicationName: J.item?.applicationName || "-",
              },
            };
          let e = i.JOB_ECOSYSTEM_JOB;
          const t = V.value;
          return (
            (e +=
              "deploy" === t
                ? "_DEPLOY"
                : "train" === t
                ? "_TRAIN"
                : "_FEDERATE"),
            { name: e, query: {}, params: { id: J.item?.id || "-" } }
          );
        });
      function Q(e) {
        const t = Number(e);
        return Number.isNaN(t) || void 0 === t
          ? 0
          : t < 1e3
          ? t
          : t >= 1e3 && t < 1e6
          ? `${(t / 1e3).toFixed(1)}K`
          : `${(t / 1e6).toFixed(1)}M`;
      }
      return (e, t) => {
        const s = N,
          a = _,
          i = $,
          b = r("router-link");
        return (
          o(),
          l(
            b,
            {
              to: m(z),
              class: c([
                "inline-block rounded-md bg-white",
                { "cursor-not-allowed pointer-events-none": e.loading },
              ]),
              onClick: t[0] || (t[0] = w(() => {}, ["prevent"])),
            },
            {
              default: n(() => {
                return [
                  p("section", B, [
                    p("nav", D, [
                      p(
                        "img",
                        {
                          class: c([
                            "h-32 w-32 object-cover transition-all",
                            e.loading ? "blur-md" : "",
                          ]),
                          src:
                            e.$props.item?.pictureUrl ||
                            m("/assets/drugDiscovery-BM2wf3va.png"),
                        },
                        null,
                        10,
                        M
                      ),
                    ]),
                    d(s, { class: "my-0" }),
                    p("div", j, [
                      p("div", E, [
                        e.$props.loading
                          ? (o(), l(a, { key: 0, active: "", paragraph: !1 }))
                          : (o(),
                            u(
                              "div",
                              {
                                key: 1,
                                class: "text-truncate text-lg w-full",
                                title: `${e.$props.item?.owner} / ${e.$props.item?.applicationName}`,
                              },
                              [
                                e.$props.hideOwner
                                  ? (o(),
                                    u(
                                      x,
                                      { key: 0 },
                                      [f(y(e.$props.item?.applicationName), 1)],
                                      64
                                    ))
                                  : (o(),
                                    u(
                                      x,
                                      { key: 1 },
                                      [
                                        p(
                                          "span",
                                          T,
                                          y(e.$props.item?.owner),
                                          1
                                        ),
                                        p(
                                          "span",
                                          null,
                                          " / " +
                                            y(e.$props.item?.applicationName),
                                          1
                                        ),
                                      ],
                                      64
                                    )),
                              ],
                              8,
                              O
                            )),
                      ]),
                      e.$props.showDescription
                        ? (o(),
                          u("div", F, [
                            e.$props.loading
                              ? (o(),
                                l(a, {
                                  key: 0,
                                  active: "",
                                  paragraph: { rows: 2 },
                                }))
                              : e.$props.item?.description
                              ? (o(),
                                l(
                                  m(k),
                                  { key: 1 },
                                  {
                                    default: n(() => [
                                      p(
                                        "div",
                                        {
                                          class:
                                            "pointer-events-none text-dark-700",
                                          innerHTML: m(K)(
                                            e.$props.item?.description
                                          ),
                                        },
                                        null,
                                        8,
                                        S
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ))
                              : v("", !0),
                          ]))
                        : v("", !0),
                      d(s, { class: "my-2" }),
                      e.$props.loading
                        ? v("", !0)
                        : (o(),
                          u(
                            "div",
                            {
                              key: 1,
                              class:
                                "text-truncate overflow-hidden w-full cursor-help h6",
                              title:
                                J.item && J.item?.tags
                                  ? J.item?.tags.toString()
                                  : "",
                            },
                            [
                              (J?.item?.tags || []).length > 0
                                ? (o(),
                                  u("div", q, [
                                    d(i, { icon: "i-ph:tag" }),
                                    (o(!0),
                                    u(
                                      x,
                                      null,
                                      g(
                                        J.item?.tags,
                                        (e) => (
                                          o(),
                                          u(
                                            "span",
                                            { key: e, class: "mr-1" },
                                            y(e),
                                            1
                                          )
                                        )
                                      ),
                                      128
                                    )),
                                  ]))
                                : v("", !0),
                            ],
                            8,
                            L
                          )),
                      e.$props.hideFooter
                        ? v("", !0)
                        : (o(),
                          u("footer", A, [
                            p("div", C, [
                              p(
                                "span",
                                {
                                  class: "flex items-center",
                                  title: `Requests: ${J.item?.requests}`,
                                },
                                [
                                  d(i, {
                                    icon: "i-ant-design:api-filled",
                                    class: "mr-1",
                                  }),
                                  f(" " + y(Q(J.item?.requests)), 1),
                                ],
                                8,
                                Y
                              ),
                              p(
                                "span",
                                {
                                  class: "flex items-center",
                                  title: `Views: ${J.item?.views}`,
                                },
                                [
                                  d(i, {
                                    icon: "i-clarity:eye-show-solid",
                                    class: "mr-1",
                                  }),
                                  f(" " + y(Q(J.item?.views)), 1),
                                ],
                                8,
                                I
                              ),
                              p(
                                "span",
                                {
                                  class: "flex items-center",
                                  title: `Likes: ${J.item?.favorites}`,
                                },
                                [
                                  d(i, {
                                    icon: "i-clarity:heart-solid",
                                    class: "mr-1",
                                  }),
                                  f(" " + y(Q(J.item?.favorites)), 1),
                                ],
                                8,
                                R
                              ),
                              J.item?.playground
                                ? (o(),
                                  u("span", U, [
                                    d(i, { icon: "i-clarity:play-solid" }),
                                  ]))
                                : v("", !0),
                            ]),
                            p(
                              "div",
                              {
                                class:
                                  "text-xs flex items-center cursor-help hover:font-700",
                                title: `Updated at: ${J.item?.updateTime}`,
                              },
                              [
                                d(i, {
                                  icon: "i-clarity:clock-line",
                                  class: "mr-1",
                                }),
                                f(
                                  y(
                                    ((t = J.item?.updateTime),
                                    t ? h(t).fromNow() : "--")
                                  ),
                                  1
                                ),
                              ],
                              8,
                              H
                            ),
                          ])),
                    ]),
                  ]),
                ];
                var t;
              }),
              _: 1,
            },
            8,
            ["to", "class"]
          )
        );
      };
    },
  });
export { J as _ };

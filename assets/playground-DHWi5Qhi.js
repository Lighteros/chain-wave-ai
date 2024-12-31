import { _ as t } from "./PageWrapper-BPMfS97v.js";
import {
  bS as e,
  at as n,
  c as a,
  c_ as i,
  as as s,
  b2 as p,
  aL as o,
  au as r,
  bo as d,
  ax as l,
  bl as u,
  aw as m,
  a as c,
  bF as v,
  av as _,
  bN as g,
  aC as f,
  aD as y,
  aA as j,
  aB as E,
} from "./index-DPRREYlk.js";
import { _ as h } from "./AnyToAny.vue_vue_type_script_setup_true_lang-DRYckYAL.js";
import { _ as x } from "./ApiPanel.vue_vue_type_script_setup_true_lang-DYIpQKZo.js";
import { E as b, e as T } from "./Endpoint-DTdkXGrW.js";
import { S as I, a as w } from "./index-BPauqaGF.js";
import { _ as A, T as C } from "./index-DTRlG5Qd.js";
import { _ as P } from "./index-DNofMLzB.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./index-CHnsextf.js";
import "./index-4U7T8gMN.js";
import "./index-v1.vue_vue_type_script_setup_true_lang-BWWSKYSP.js";
import "./data-um5MHdei.js";
import "./utils-CWmEVrfF.js";
import "./shell-escape-DIuodS9m.js";
import "./create-enum-converter-ClJbjM_p.js";
import "./List-D10KDyaY.js";
import "./isMobile-VPrdNIIw.js";
import "./CheckOutlined-BvF8M63J.js";
import "./useRefs-DoWExZxn.js";
const S = e("ai-playground", () => {
    const t = n({
        initialized: !1,
        endpoints: new Map(),
        endpointId: void 0,
        apiType: b.CHAT_COMPLETIONS,
      }),
      e = a(() => {
        const e = [];
        return (
          t.endpoints.forEach((t) => {
            t.forEach((t) => {
              e.push(t);
            });
          }),
          e
        );
      }),
      s = a(() => t.endpoints.get(t.apiType) || []),
      p = a(() =>
        t.endpointId
          ? 0 === e.value.length
            ? null
            : e.value.find((e) => String(e.id) === String(t.endpointId))
          : null
      );
    return {
      init: async function () {
        t.initialized ||
          ((t.initialized = !0),
          await Promise.all(
            T.options.map((e) => {
              const n = e.value;
              return (async function (t) {
                try {
                  return (
                    (
                      await i("/api/v1/endpoint/queryPublicEndpoint").get({
                        query: { apiType: t },
                      })
                    ).data || []
                  );
                } catch (e) {
                  return [];
                }
              })(n).then((e) => {
                t.endpoints.set(n, e);
              });
            })
          ));
      },
      state: t,
      getCurrentEndpoints: s,
      options: T.options,
      getEndpoint: p,
      getEndpoints: e,
    };
  }),
  k = { class: "p4 app-content" },
  O = { class: "flex flex-wrap gap-4 items-center" },
  N = { class: "flex-center gap-1" },
  z = u("label", null, "API Type: ", -1),
  L = { class: "flex-center gap-1" },
  M = u("label", null, " Available Endpoints: ", -1),
  R = s({
    __name: "playground",
    setup(e) {
      const n = S();
      return (
        p(() => {
          n.getCurrentEndpoints.every((t) => t.id !== n.state.endpointId) &&
            (n.state.endpointId = n.getCurrentEndpoints.at(0)?.id ?? void 0);
        }),
        o(() => {
          n.init();
        }),
        (e, a) => {
          const i = I,
            s = w,
            p = P,
            o = A,
            b = C,
            T = t;
          return (
            r(),
            d(
              T,
              {
                "auto-title": "",
                "content-full-height": "",
                "fixed-height": "",
              },
              {
                default: l(() => [
                  u("div", k, [
                    u("nav", O, [
                      u("div", N, [
                        z,
                        m(
                          i,
                          {
                            value: c(n).state.apiType,
                            "onUpdate:value":
                              a[0] || (a[0] = (t) => (c(n).state.apiType = t)),
                            class: "w-100",
                            options: c(n).options,
                            "show-search": "",
                            "filter-option": (t, e) =>
                              c(v)(t, e?.label) ||
                              c(v)(t, e?.value?.toString()),
                          },
                          null,
                          8,
                          ["value", "options", "filter-option"]
                        ),
                      ]),
                      u("div", L, [
                        M,
                        m(
                          i,
                          {
                            value: c(n).state.endpointId,
                            "onUpdate:value":
                              a[1] ||
                              (a[1] = (t) => (c(n).state.endpointId = t)),
                            class: "w-100",
                          },
                          {
                            default: l(() => [
                              (r(!0),
                              _(
                                f,
                                null,
                                g(
                                  c(n).getCurrentEndpoints,
                                  (t) => (
                                    r(),
                                    d(
                                      s,
                                      { key: t.id, value: t.id },
                                      {
                                        default: l(() => [
                                          j(E(t.endpointName), 1),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["value"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                            _: 1,
                          },
                          8,
                          ["value"]
                        ),
                      ]),
                    ]),
                    m(p),
                    m(
                      b,
                      { type: "card" },
                      {
                        default: l(() => [
                          m(
                            o,
                            { key: "playground", tab: "Playground" },
                            {
                              default: l(() => [
                                c(n).getEndpoint
                                  ? (r(),
                                    d(
                                      h,
                                      {
                                        key: c(n).getEndpoint.id,
                                        endpoint: c(n).getEndpoint,
                                      },
                                      null,
                                      8,
                                      ["endpoint"]
                                    ))
                                  : y("", !0),
                              ]),
                              _: 1,
                            }
                          ),
                          m(
                            o,
                            { key: "api", tab: "API" },
                            {
                              default: l(() => [
                                c(n).getEndpoint
                                  ? (r(),
                                    d(
                                      x,
                                      {
                                        key: c(n).getEndpoint.id,
                                        "no-header": "",
                                        endpoint: c(n).getEndpoint,
                                      },
                                      null,
                                      8,
                                      ["endpoint"]
                                    ))
                                  : y("", !0),
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
                _: 1,
              }
            )
          );
        }
      );
    },
  });
export { R as default };

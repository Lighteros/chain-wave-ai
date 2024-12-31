const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/IntlTel-DEEM4qgJ.js",
      "assets/index-DPRREYlk.js",
      "assets/index-Bu5LTPHX.css",
      "assets/IntlTel-DuWOLuNm.css",
    ])
) => i.map((i) => d[i]);
import {
  as as e,
  at as a,
  c as s,
  bh as t,
  aL as o,
  bX as l,
  bY as n,
  a as u,
  au as i,
  bo as r,
  ax as p,
  av as m,
  bl as d,
  aw as c,
  bE as f,
  aA as v,
  aB as b,
  aD as y,
  bv as P,
  aF as _,
  di as g,
  by as h,
  ay as j,
  az as w,
  _ as N,
} from "./index-DPRREYlk.js";
import { u as x, _ as I, F as q } from "./index-5bY6ZDBk.js";
import { P as L } from "./index-Dgmkw5o7.js";
import { u as U } from "./request-profile-info-rqNzgmh0.js";
import "./Col-Djm-avAF.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
import "./debounce-CUtJ7ZQO.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
const C = { key: 0, class: "p-4 app-content" },
  O = { class: "h-65vh overflow-y-auto p-4 my-2" },
  D = { class: "flex justify-center sticky bottom-0 p-4 w-full left-0" },
  E = e({
    __name: "setup",
    setup(e) {
      const E = P({
          loader: () =>
            N(
              () => import("./IntlTel-DEEM4qgJ.js"),
              __vite__mapDeps([0, 1, 2, 3])
            ),
        }),
        {
          queryProfile: S,
          createProfile: k,
          updateProfile: A,
          defineProfile: F,
        } = U(),
        G = a(F()),
        R = a({
          name: [{ required: !1, message: "Please set name" }],
          companyName: [{ required: !1, message: "Please set company name" }],
          phoneNumber: [{ required: !1, message: "Please set phone number" }],
          location: [{ required: !1, message: "Please set location" }],
          gpuDescription: [
            { required: !1, message: "Please set GPU description" },
          ],
          uptimeGuarantee: [
            { required: !1, message: "Please set GPU uptime guarantee" },
          ],
        }),
        { validateInfos: V } = x(G, R, {
          immediate: !0,
          validateOnRuleChange: !0,
        }),
        B = s(
          () => (e) => Object.values(V).every((a) => a.validateStatus === e)
        ),
        T = s(() => (G.id ? "Update" : "Create")),
        Y = t();
      async function Q() {
        const e = { ...G, userId: String(Y.getUserInfo.id) };
        G.id
          ? (await A.mutateAsync(e),
            _.success("You've updated a supplier successfully"))
          : (await k.mutateAsync(e),
            _.success("You've created a supplier successfully")),
          g.push({ name: h.SUPPLIER_PROFILE_INDEX });
      }
      return (
        o(() => {
          S.refetch().then(() => {
            Object.assign(G, S.data.value);
          });
        }),
        (e, a) => {
          const s = j,
            t = I,
            o = q,
            P = w,
            _ = l("loading");
          return n(
            (i(),
            r(
              u(L),
              { "auto-title": "" },
              {
                default: p(() => [
                  u(G)
                    ? (i(),
                      m("div", C, [
                        d("section", O, [
                          c(
                            o,
                            {
                              "label-col": { span: 5 },
                              "wrapper-col": { span: 14 },
                            },
                            {
                              default: p(() => [
                                c(
                                  t,
                                  f({ label: "Name" }, u(V).name),
                                  {
                                    default: p(() => [
                                      c(
                                        s,
                                        {
                                          value: u(G).name,
                                          "onUpdate:value":
                                            a[0] ||
                                            (a[0] = (e) => (u(G).name = e)),
                                        },
                                        null,
                                        8,
                                        ["value"]
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  16
                                ),
                                c(
                                  t,
                                  f(
                                    { label: "Company Name" },
                                    u(V).companyName
                                  ),
                                  {
                                    default: p(() => [
                                      c(
                                        s,
                                        {
                                          value: u(G).companyName,
                                          "onUpdate:value":
                                            a[1] ||
                                            (a[1] = (e) =>
                                              (u(G).companyName = e)),
                                        },
                                        null,
                                        8,
                                        ["value"]
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  16
                                ),
                                c(
                                  t,
                                  f(
                                    { label: "Phone number" },
                                    u(V).phoneNumber
                                  ),
                                  {
                                    default: p(() => [
                                      c(
                                        u(E),
                                        {
                                          modelValue: u(G).phoneNumber,
                                          "onUpdate:modelValue":
                                            a[2] ||
                                            (a[2] = (e) =>
                                              (u(G).phoneNumber = e)),
                                          "dropdown-options": {
                                            showDialCodeInSelection: !0,
                                            showSearchBox: !0,
                                          },
                                        },
                                        null,
                                        8,
                                        ["modelValue"]
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  16
                                ),
                                c(
                                  t,
                                  f(
                                    { label: "Company HQ Location" },
                                    u(V).location
                                  ),
                                  {
                                    default: p(() => [
                                      c(
                                        s,
                                        {
                                          value: u(G).location,
                                          "onUpdate:value":
                                            a[3] ||
                                            (a[3] = (e) => (u(G).location = e)),
                                          placeholder: "city/state/country",
                                        },
                                        null,
                                        8,
                                        ["value"]
                                      ),
                                    ]),
                                    _: 1,
                                  },
                                  16
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        d("div", D, [
                          c(
                            P,
                            {
                              class: "mx-2",
                              disabled: !u(B)("success"),
                              onClick: Q,
                            },
                            { default: p(() => [v(b(u(T)), 1)]), _: 1 },
                            8,
                            ["disabled"]
                          ),
                        ]),
                      ]))
                    : y("", !0),
                ]),
                _: 1,
              }
            )),
            [
              [
                _,
                u(A).isLoading.value ||
                  u(k).isLoading.value ||
                  u(S).isLoading.value,
              ],
            ]
          );
        }
      );
    },
  });
export { E as default };

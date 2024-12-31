import {
  as as e,
  bC as a,
  bD as t,
  r as l,
  aL as u,
  au as i,
  bo as p,
  bE as r,
  a as o,
  bF as s,
  bG as n,
} from "./index-DPRREYlk.js";
import { u as b } from "./uniqBy-CccCILMw.js";
import { s as c } from "./sortBy-BdU96kgw.js";
import { S as v } from "./index-BPauqaGF.js";
const y = e({
  inheritAttrs: !1,
  __name: "MarketPlaceGpu",
  props: a(
    {
      nullishLabel: { default: "ALL", type: String },
      source: { default: "secure", type: String },
    },
    { modelValue: { required: !0 }, modelModifiers: {} }
  ),
  emits: ["update:modelValue"],
  setup(e) {
    const a = e,
      y = t(e, "modelValue"),
      g = l(null),
      m = l([]);
    return (
      u(() => {
        !(async function () {
          if ("all" != a.source) {
            g.value = "secure" == a.source ? 1 : 2;
            const e =
                (
                  await n("/gpu-machine/getGpuType").get({
                    query: { marketplaceType: g.value },
                  })
                ).data || [],
              t = b(
                c(e, (e) => e.gpuTypeAbbreviation),
                "gpuTypeAbbreviation"
              )
                .filter((e) => !!e.gpuTypeAbbreviation)
                .map((e) => ({
                  label: e.gpuTypeAbbreviation,
                  value: e.gpuTypeAbbreviation,
                }));
            m.value = [
              { label: `- ${a.nullishLabel || "ALL"} -`, value: "" },
            ].concat(t);
          } else {
            const e =
                (
                  await n("/gpu-machine/getGpuType").get({
                    query: { marketplaceType: 1 },
                  })
                ).data || [],
              t =
                (
                  await n("/gpu-machine/getGpuType").get({
                    query: { marketplaceType: 2 },
                  })
                ).data || [],
              l = e.concat(t),
              u = b(
                c(l, (e) => e.gpuTypeAbbreviation),
                "gpuTypeAbbreviation"
              )
                .filter((e) => !!e.gpuTypeAbbreviation)
                .map((e) => ({
                  label: e.gpuTypeAbbreviation,
                  value: e.gpuTypeAbbreviation,
                }));
            m.value = [
              { label: `- ${a.nullishLabel || "ALL"} -`, value: "" },
            ].concat(u);
          }
        })();
      }),
      (e, a) => {
        const t = v;
        return (
          i(),
          p(
            t,
            r(
              {
                value: y.value,
                "onUpdate:value": a[0] || (a[0] = (e) => (y.value = e)),
                options: o(m),
                placeholder: "Please Select GPU Resources",
              },
              e.$attrs,
              {
                "show-search": "",
                "filter-option": (e, a) =>
                  o(s)(e, a?.label) || o(s)(e, a?.value?.toString()),
              }
            ),
            null,
            16,
            ["value", "options", "filter-option"]
          )
        );
      }
    );
  },
});
export { y as _ };

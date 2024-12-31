import {
  at as a,
  c as e,
  as as t,
  au as l,
  bo as o,
  ax as s,
  bl as r,
  aB as n,
  a as u,
  aw as i,
  aD as c,
  bp as p,
  cR as d,
} from "./index-DPRREYlk.js";
import { T as b } from "./index-CMko8JXS.js";
const g = {
  0: { label: "INITIALIZING", value: "INITIALIZING", tagColor: "blue" },
  1: { label: "DEPLOYING", value: "DEPLOYING", tagColor: "blue" },
  2: { label: "FAILED", value: "FAILED", tagColor: "gray" },
  3: { label: "OFFLINE", value: "OFFLINE", tagColor: "gray" },
  4: { label: "DEPLOYED", value: "DEPLOYED", tagColor: "green" },
  5: { label: "ABORTING", value: "ABORTING", tagColor: "cyan" },
  6: {
    label: "DEPLOYED",
    value: "ABORTED",
    tagColor: "orange",
    tip: "Update failed, please check the log for details",
  },
  7: {
    label: "TERMINATED",
    value: "TERMINATED",
    tagColor: "red",
    tip: "The endpoint's log is kept but its GPU instances have been cleaned up",
  },
};
function E() {
  const t = a(
      Object.values(g).map((a) => ({
        label: a.label,
        value: a.value,
        tagColor: a.tagColor,
        tip: a.tip,
      }))
    ),
    l = e(
      () => (a) => t.find((e) => e.value === a) || { label: "-", value: "-" }
    );
  return { stautsOptions: t, matchStatusOption: l };
}
const v = t({
    __name: "status-tag",
    props: { status: {} },
    setup(a) {
      const t = a,
        { matchStatusOption: g } = E(),
        v = e(() => g.value(t.status));
      return (a, e) => {
        const t = p,
          g = d,
          E = b;
        return (
          l(),
          o(
            E,
            { color: u(v)?.tagColor },
            {
              default: s(() => [
                r("span", null, n(u(v)?.label), 1),
                u(v)?.tip
                  ? (l(),
                    o(
                      g,
                      { key: 0, title: u(v)?.tip },
                      {
                        default: s(() => [i(t, { icon: "i-ion:warning" })]),
                        _: 1,
                      },
                      8,
                      ["title"]
                    ))
                  : c("", !0),
              ]),
              _: 1,
            },
            8,
            ["color"]
          )
        );
      };
    },
  }),
  I = [
    "deploy.endpoint.versionTab",
    "deploy.endpoint.renaming",
    "deploy.product.rewrite",
  ],
  O = Object.assign({
    "./v1.0.0.ts": {
      name: "v1.0.0",
      description: "v1.0.0版本",
      createTime: "2024-07-01",
      updateTime: "2024-07-01",
      features: { excludes: ["deploy.product.rewrite"] },
    },
  }),
  T = new Set(I);
Object.values(O)
  .sort((a, e) => (a.createTime > e.createTime ? 1 : -1))
  .forEach((a) => {
    const { features: e } = a,
      t = e.includes,
      l = e.excludes;
    "*" === t
      ? I.forEach((a) => T.add(a))
      : t?.forEach((a) => {
          T.add(a);
        }),
      l?.forEach((a) => {
        T.delete(a);
      });
  });
export { v as _, E as u, T as w };

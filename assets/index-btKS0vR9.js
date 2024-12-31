import { P as e } from "./index-BfMdU48n.js";
import {
  as as n,
  aw as l,
  bp as t,
  aA as u,
  bR as a,
  az as i,
  cF as r,
  by as s,
  bP as o,
} from "./index-DPRREYlk.js";
import { B as c, S as d } from "./gpuEnum-qu5ks5HJ.js";
import { C as p } from "./index-D4noaftF.js";
function f(e) {
  switch (e) {
    case c.AMD:
      return "i-bi:amd";
    case c.Intel:
      return "simple-icons:intel";
    case c.Nvidia:
      return "i-bi:nvidia";
    default:
      return "i-bi:gpu-card";
  }
}
function m(e) {
  switch (e) {
    case c.AMD:
      return "AMD";
    case c.Intel:
      return "Intel";
    case c.Nvidia:
      return "Nvidia";
    default:
      return "Other";
  }
}
function b(e) {
  switch (e) {
    case c.AMD:
      return "#ED1C24";
    case c.Intel:
      return "#0072C6";
    case c.Nvidia:
      return "#76B900";
    default:
      return "currentColor";
  }
}
const y = n({
    props: { record: Object },
    setup: (e) => () => {
      const n = e.record;
      return n
        ? l("div", { class: "flex gap-2" }, [
            l(t, { icon: f(n.brand), color: b(n.brand), size: 64 }, null),
            l("ul", { class: "list-none" }, [
              l("li", null, [l("b", null, [u("Device Id: ")]), n.id]),
              l("li", null, [
                l("div", { class: "flex gap-2" }, [
                  l("span", null, [
                    l("b", null, [u("VRAM: ")]),
                    ((a = n.ramSize),
                    String(a).replace(/(\d+\.\d+|\d{2,})GB?/, (e, n) => n)),
                    l("b", null, [u(" GB")]),
                  ]),
                ]),
              ]),
              l("li", null, [l("b", null, [u("Name: ")]), n.name]),
              n.gpuCountUsed
                ? l("li", null, [
                    l("b", null, [u("GPU count")]),
                    " ",
                    l("small", null, [u("(used / total)")]),
                    l("b", null, [u(": ")]),
                    n.gpuCountUsed,
                    " ",
                    u("/"),
                    n.gpuCount,
                    " ",
                    u("x"),
                  ])
                : l("li", null, [
                    l("b", null, [u("GPU count: ")]),
                    n.gpuCount,
                    " ",
                    u("x"),
                  ]),
              l("li", null, [
                l("b", null, [u("vCPU count: ")]),
                n.vcpuCount,
                " ",
                u("x"),
              ]),
              l("li", null, [
                l("b", null, [u("Disk space size: ")]),
                n.diskSpaceTotal,
                l("b", null, [u(" GB")]),
              ]),
            ]),
          ])
        : null;
      var a;
    },
  }),
  h = n({
    props: { record: Object },
    setup: (e) => () => {
      const n = e.record;
      return n
        ? l("ul", { class: "list-none" }, [
            l("li", null, [l("b", null, [u("Provider: ")]), n.provider]),
            l("li", null, [l("b", null, [u("GPU Vendor: ")]), m(n.brand)]),
            n.resourceType
              ? l("li", null, [
                  l("b", null, [u("Resource Type: ")]),
                  n.resourceType,
                ])
              : null,
          ])
        : null;
    },
  }),
  v = n({
    props: { record: Object },
    setup: (e) => () => {
      const n = e.record;
      return n
        ? l("ul", { class: "list-none" }, [
            l("li", null, [
              l("b", null, [u("Price: ")]),
              l("span", { class: "flex items-center gap-1" }, [
                l(
                  p,
                  {
                    decimals: 2,
                    prefix: "$",
                    duration: 1e3,
                    class: "text-primary font-bold text-xl",
                    "end-val": n.costPerHour || 0,
                  },
                  null
                ),
                l("span", null, [u("/GPU/Hour")]),
              ]),
            ]),
            n.onlineStatus
              ? l("li", null, [
                  l("b", null, [u("Status: ")]),
                  (() => {
                    switch (n.onlineStatus) {
                      case "OFFLINE":
                        return l("span", { class: ["text-red"] }, [
                          l(
                            t,
                            { icon: "i-fluent:cloud-offline-24-regular" },
                            null
                          ),
                          n.onlineStatus,
                        ]);
                      case "IDLE":
                        return l("span", { class: ["text-green"] }, [
                          l(t, { icon: "i-fluent:cloud-20-filled" }, null),
                          n.onlineStatus,
                        ]);
                      case "RUNNING":
                        return l("span", { class: ["text-amber"] }, [
                          l(
                            t,
                            {
                              icon: "i-fluent:arrow-rotate-counterclockwise-20-filled",
                              spin: !0,
                            },
                            null
                          ),
                          n.onlineStatus,
                        ]);
                      case "UPGRADING":
                        return l("span", { class: ["text-orange"] }, [
                          l(t, { icon: "i-fluent:road-cone-16-filled" }, null),
                          n.onlineStatus,
                        ]);
                      default:
                        return "--";
                    }
                  })(),
                ])
              : null,
          ])
        : null;
    },
  }),
  x = n({
    props: {
      record: Object,
      row: Boolean,
      loadData: { type: Function, required: !0 },
    },
    setup(n) {
      const c = a();
      return () => {
        const { row: a, loadData: p } = n,
          f = n.record;
        if (!f) return null;
        function m() {
          o.destroyAll(),
            o.confirm({
              title: "There are jobs currently running on your machine.",
              content: () =>
                l("section", null, [
                  l("div", null, [
                    u(
                      "You may not pause or remove your machine at this time. "
                    ),
                  ]),
                  l("div", null, [
                    u(
                      "Would you like us to email you when your machine is freed up? "
                    ),
                  ]),
                ]),
              okText: () => "Yes",
              cancelText: () => "Continue",
              onOk() {
                r("/gpu-machine/email").post({ query: { machineId: f.id } });
              },
            });
        }
        return l(
          "div",
          { class: ["flex gap-1", a ? "flex-row justify-around" : "flex-col"] },
          [
            l(
              i,
              {
                onClick: async function () {
                  c.push({ name: s.SUPPLIER_GPU_EDIT, params: { id: f.id } });
                },
              },
              {
                default: () => [l(t, { icon: "i-bi:pencil" }, null), u("Edit")],
              }
            ),
            f.status === d.active
              ? l(
                  e,
                  {
                    type: "default",
                    "max-width": "200px",
                    onConfirm: async function () {
                      return r("/gpu-machine/status")
                        .put({ query: { machineId: f.id, status: d.inactive } })
                        .then((e) => ("SUCCESS" === e.code ? p() : m()));
                    },
                  },
                  {
                    title: () =>
                      l("span", null, [
                        u("Are you sure you need to pause this device?"),
                      ]),
                    default: () =>
                      l("span", null, [
                        l(t, { icon: "i-bi:pause" }, null),
                        u("Pause"),
                      ]),
                  }
                )
              : l(
                  e,
                  {
                    type: "default",
                    "max-width": "200px",
                    onConfirm: async function () {
                      await r("/gpu-machine/status").put({
                        query: { machineId: f.id, status: d.active },
                      }),
                        await p();
                    },
                  },
                  {
                    title: () =>
                      l("span", null, [
                        u("Are you sure you need to active this device?"),
                      ]),
                    default: () =>
                      l("span", null, [
                        l(t, { icon: "i-bi:play" }, null),
                        u("Active"),
                      ]),
                  }
                ),
            l(
              e,
              {
                type: "primary",
                title: "Are you sure you want to remove this GPU?",
                onConfirm: async function () {
                  return r("/gpu-machine")
                    .delete({ query: { machineId: f.id } })
                    .then((e) => ("SUCCESS" === e.code ? p() : m()));
                },
              },
              {
                default: () => [
                  l(t, { icon: "i-bi:trash" }, null),
                  u("Remove"),
                ],
              }
            ),
          ]
        );
      };
    },
  });
export { y as G, h as a, v as b, x as c };

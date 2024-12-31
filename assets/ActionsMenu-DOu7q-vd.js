import {
  as as e,
  aw as t,
  bA as a,
  az as o,
  bp as s,
  bB as l,
} from "./index-DPRREYlk.js";
const n = e({
  name: "ActionsMenu",
  props: { size: { type: String } },
  setup: (e, n) => () =>
    t(
      a,
      {
        mode: "horizontal",
        selectable: !1,
        class: "leading-none",
        triggerSubMenuAction: "click",
      },
      {
        default: () =>
          n.slots.default?.().map((e) => {
            return t(
              a.Item,
              { class: "!p-1" },
              "function" == typeof (o = e) ||
                ("[object Object]" === Object.prototype.toString.call(o) &&
                  !l(o))
                ? e
                : { default: () => [e] }
            );
            var o;
          }),
        overflowedIndicator: () =>
          t(
            o,
            {
              title: "More Actions",
              size: "small",
              class: "relative top-1 -left-3",
            },
            {
              default: () => [
                t(s, { icon: "i-ant-design:more-outlined" }, null),
              ],
            }
          ),
      }
    ),
});
export { n as A };

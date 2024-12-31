import { n as a, _ as t, a as n } from "./index-CcOpQHgp.js";
function e(e, r) {
  return {
    initSortable: function () {
      a(async () => {
        if (!e) return;
        (
          await t(async () => {
            const { default: a } = await import("./sortable.esm-n8BFHZjC.js");
            return { default: a };
          }, [])
        ).default.create(n(e), {
          animation: 500,
          delay: 400,
          delayOnTouchOnly: !0,
          ...r,
        });
      });
    },
  };
}
export { e as u };

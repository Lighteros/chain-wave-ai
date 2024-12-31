import { u as s } from "./responsiveObserve-B8IuOfYh.js";
import { aK as e, aL as a, aP as r } from "./index-CcOpQHgp.js";
function u() {
  const u = e({});
  let n = null;
  const o = s();
  return (
    a(() => {
      n = o.value.subscribe((s) => {
        u.value = s;
      });
    }),
    r(() => {
      o.value.unsubscribe(n);
    }),
    u
  );
}
export { u };

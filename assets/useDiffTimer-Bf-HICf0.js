import { r as a, aL as e, bu as t } from "./index-DPRREYlk.js";
function n(n) {
  const o = a(Date.now()),
    r = a(0);
  return (
    e(() => {
      n &&
        t(
          () => {
            r.value = (Date.now() - o.value) / 1e3;
          },
          { immediate: n }
        );
    }),
    r
  );
}
export { n as u };

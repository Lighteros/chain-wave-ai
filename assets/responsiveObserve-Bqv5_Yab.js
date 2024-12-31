import { aI as e, c as s, aJ as t } from "./index-DPRREYlk.js";
const i = ["xxxl", "xxl", "xl", "lg", "md", "sm", "xs"];
function r() {
  const [, i] = e();
  return s(() => {
    const e = ((e) => ({
        xs: `(max-width: ${e.screenXSMax}px)`,
        sm: `(min-width: ${e.screenSM}px)`,
        md: `(min-width: ${e.screenMD}px)`,
        lg: `(min-width: ${e.screenLG}px)`,
        xl: `(min-width: ${e.screenXL}px)`,
        xxl: `(min-width: ${e.screenXXL}px)`,
        xxxl: `{min-width: ${e.screenXXXL}px}`,
      }))(i.value),
      s = new Map();
    let r = -1,
      n = {};
    return {
      matchHandlers: {},
      dispatch: (e) => ((n = e), s.forEach((e) => e(n)), s.size >= 1),
      subscribe(e) {
        return s.size || this.register(), (r += 1), s.set(r, e), e(n), r;
      },
      unsubscribe(e) {
        s.delete(e), s.size || this.unregister();
      },
      unregister() {
        Object.keys(e).forEach((s) => {
          const t = e[s],
            i = this.matchHandlers[t];
          null == i || i.mql.removeListener(null == i ? void 0 : i.listener);
        }),
          s.clear();
      },
      register() {
        Object.keys(e).forEach((s) => {
          const i = e[s],
            r = (e) => {
              let { matches: i } = e;
              this.dispatch(t(t({}, n), { [s]: i }));
            },
            c = window.matchMedia(i);
          c.addListener(r),
            (this.matchHandlers[i] = { mql: c, listener: r }),
            r(c);
        });
      },
      responsiveMap: e,
    };
  });
}
export { i as r, r as u };

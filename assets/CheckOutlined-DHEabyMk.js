import { aw as e, c7 as t } from "./index-CcOpQHgp.js";
var r = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
        },
      },
    ],
  },
  name: "check",
  theme: "outlined",
};
function n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(r).filter(function (e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        c(e, t, r[t]);
      });
  }
  return e;
}
function c(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var a = function (c, a) {
  var o = n({}, c, a.attrs);
  return e(t, n({}, o, { icon: r }), null);
};
(a.displayName = "CheckOutlined"), (a.inheritAttrs = !1);
export { a as C };

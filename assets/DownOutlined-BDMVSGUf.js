import { aw as e, c7 as t } from "./index-DPRREYlk.js";
var r = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z",
        },
      },
    ],
  },
  name: "down",
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
        o(e, t, r[t]);
      });
  }
  return e;
}
function o(e, t, r) {
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
var a = function (o, a) {
  var c = n({}, o, a.attrs);
  return e(t, n({}, c, { icon: r }), null);
};
(a.displayName = "DownOutlined"), (a.inheritAttrs = !1);
export { a as D };

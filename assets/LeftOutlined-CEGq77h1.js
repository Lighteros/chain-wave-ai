import { aw as e, c7 as t } from "./index-CcOpQHgp.js";
var r = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z",
        },
      },
    ],
  },
  name: "left",
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
        a(e, t, r[t]);
      });
  }
  return e;
}
function a(e, t, r) {
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
var c = function (a, c) {
  var o = n({}, a, c.attrs);
  return e(t, n({}, o, { icon: r }), null);
};
(c.displayName = "LeftOutlined"), (c.inheritAttrs = !1);
export { c as L };
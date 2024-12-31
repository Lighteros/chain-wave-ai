import {
  bd as e,
  bi as t,
  aw as o,
  c7 as n,
  as as r,
  r as i,
  aL as l,
  dZ as a,
  aT as s,
  io as c,
  aQ as u,
  d_ as d,
  e2 as p,
  e0 as f,
  d$ as v,
  f2 as m,
  e1 as g,
  aJ as h,
  aK as b,
  aR as y,
  b1 as w,
  c as $,
  cn as O,
  hT as S,
  cp as x,
  bY as I,
  co as C,
  cR as P,
  b2 as j,
  ip as D,
  eT as R,
  ia as F,
  df as k,
  eO as T,
  ci as A,
  cl as E,
  az as U,
  eA as L,
  e7 as z,
  aZ as M,
  cb as H,
  aV as B,
  aW as _,
  eP as X,
  aX as N,
  ce as V,
  cf as q,
  hH as W,
  e8 as G,
  eC as J,
  gV as K,
  l as Q,
  aS as Z,
  c8 as Y,
} from "./index-DPRREYlk.js";
import { b as ee } from "./_baseEach-BDY_Tvly.js";
import { D as te } from "./DownloadOutlined-6grUi9hP.js";
import { _ as oe } from "./index-DloxV9od.js";
import "./index-5bY6ZDBk.js";
function ne(e, t, o, n) {
  for (var r = -1, i = null == e ? 0 : e.length; ++r < i; ) {
    var l = e[r];
    t(n, l, o(l), e);
  }
  return n;
}
function re(e, t, o, n) {
  return (
    ee(e, function (e, r, i) {
      t(n, e, o(e), i);
    }),
    n
  );
}
var ie,
  le,
  ae =
    ((ie = function (e, t, o) {
      e[o ? 0 : 1].push(t);
    }),
    (le = function () {
      return [[], []];
    }),
    function (o, n) {
      var r = t(o) ? ne : re,
        i = le ? le() : {};
      return r(o, ie, e(n), i);
    }),
  se = {
    icon: {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z",
          },
        },
      ],
    },
    name: "delete",
    theme: "outlined",
  };
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(o);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        ue(e, t, o[t]);
      });
  }
  return e;
}
function ue(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var de = function (e, t) {
  var r = ce({}, e, t.attrs);
  return o(n, ce({}, r, { icon: se }), null);
};
function pe(e) {
  const t = e.responseText || e.response;
  if (!t) return t;
  try {
    return JSON.parse(t);
  } catch (o) {
    return t;
  }
}
function fe(e) {
  const t = new XMLHttpRequest();
  e.onProgress &&
    t.upload &&
    (t.upload.onprogress = function (t) {
      t.total > 0 && (t.percent = (t.loaded / t.total) * 100), e.onProgress(t);
    });
  const o = new FormData();
  e.data &&
    Object.keys(e.data).forEach((t) => {
      const n = e.data[t];
      Array.isArray(n)
        ? n.forEach((e) => {
            o.append(`${t}[]`, e);
          })
        : o.append(t, n);
    }),
    e.file instanceof Blob
      ? o.append(e.filename, e.file, e.file.name)
      : o.append(e.filename, e.file),
    (t.onerror = function (t) {
      e.onError(t);
    }),
    (t.onload = function () {
      return t.status < 200 || t.status >= 300
        ? e.onError(
            (function (e, t) {
              const o = `cannot ${e.method} ${e.action} ${t.status}'`,
                n = new Error(o);
              return (
                (n.status = t.status),
                (n.method = e.method),
                (n.url = e.action),
                n
              );
            })(e, t),
            pe(t)
          )
        : e.onSuccess(pe(t), t);
    }),
    t.open(e.method, e.action, !0),
    e.withCredentials && "withCredentials" in t && (t.withCredentials = !0);
  const n = e.headers || {};
  return (
    null !== n["X-Requested-With"] &&
      t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    Object.keys(n).forEach((e) => {
      null !== n[e] && t.setRequestHeader(e, n[e]);
    }),
    t.send(o),
    {
      abort() {
        t.abort();
      },
    }
  );
}
(de.displayName = "DeleteOutlined"), (de.inheritAttrs = !1);
const ve = +new Date();
let me = 0;
function ge() {
  return `vc-upload-${ve}-${++me}`;
}
const he = (e, t) => {
  if (e && t) {
    const o = Array.isArray(t) ? t : t.split(","),
      n = e.name || "",
      r = e.type || "",
      i = r.replace(/\/.*$/, "");
    return o.some((e) => {
      const t = e.trim();
      if (/^\*(\/\*)?$/.test(e)) return !0;
      if ("." === t.charAt(0)) {
        const e = n.toLowerCase(),
          o = t.toLowerCase();
        let r = [o];
        return (
          (".jpg" !== o && ".jpeg" !== o) || (r = [".jpg", ".jpeg"]),
          r.some((t) => e.endsWith(t))
        );
      }
      return /\/\*$/.test(t)
        ? i === t.replace(/\/.*$/, "")
        : r === t || !!/^\w+$/.test(t);
    });
  }
  return !0;
};
const be = (e, t, o) => {
    const n = (e, r) => {
      (e.path = r || ""),
        e.isFile
          ? e.file((n) => {
              o(n) &&
                (e.fullPath &&
                  !n.webkitRelativePath &&
                  (Object.defineProperties(n, {
                    webkitRelativePath: { writable: !0 },
                  }),
                  (n.webkitRelativePath = e.fullPath.replace(/^\//, "")),
                  Object.defineProperties(n, {
                    webkitRelativePath: { writable: !1 },
                  })),
                t([n]));
            })
          : e.isDirectory &&
            (function (e, t) {
              const o = e.createReader();
              let n = [];
              !(function e() {
                o.readEntries((o) => {
                  const r = Array.prototype.slice.apply(o);
                  (n = n.concat(r)), r.length ? e() : t(n);
                });
              })();
            })(e, (t) => {
              t.forEach((t) => {
                n(t, `${r}${e.name}/`);
              });
            });
    };
    e.forEach((e) => {
      n(e.webkitGetAsEntry());
    });
  },
  ye = () => ({
    capture: [Boolean, String],
    multipart: { type: Boolean, default: void 0 },
    name: String,
    disabled: { type: Boolean, default: void 0 },
    componentTag: String,
    action: [String, Function],
    method: String,
    directory: { type: Boolean, default: void 0 },
    data: [Object, Function],
    headers: Object,
    accept: String,
    multiple: { type: Boolean, default: void 0 },
    onBatchStart: Function,
    onReject: Function,
    onStart: Function,
    onError: Function,
    onSuccess: Function,
    onProgress: Function,
    beforeUpload: Function,
    customRequest: Function,
    withCredentials: { type: Boolean, default: void 0 },
    openFileDialogOnClick: { type: Boolean, default: void 0 },
    prefixCls: String,
    id: String,
    onMouseenter: Function,
    onMouseleave: Function,
    onClick: Function,
  });
var we = function (e, t, o, n) {
    return new (o || (o = Promise))(function (r, i) {
      function l(e) {
        try {
          s(n.next(e));
        } catch (t) {
          i(t);
        }
      }
      function a(e) {
        try {
          s(n.throw(e));
        } catch (t) {
          i(t);
        }
      }
      function s(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof o
              ? t
              : new o(function (e) {
                  e(t);
                })).then(l, a);
      }
      s((n = n.apply(e, t || [])).next());
    });
  },
  $e = function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (o[n[r]] = e[n[r]]);
    }
    return o;
  };
const Oe = r({
  compatConfig: { MODE: 3 },
  name: "AjaxUploader",
  inheritAttrs: !1,
  props: ye(),
  setup(e, t) {
    let { slots: n, attrs: r, expose: u } = t;
    const d = i(ge()),
      p = {},
      f = i();
    let v = !1;
    const m = (t, o) =>
        we(this, void 0, void 0, function* () {
          const { beforeUpload: n } = e;
          let r = t;
          if (n) {
            try {
              r = yield n(t, o);
            } catch (p) {
              r = !1;
            }
            if (!1 === r)
              return { origin: t, parsedFile: null, action: null, data: null };
          }
          const { action: i } = e;
          let l;
          l = "function" == typeof i ? yield i(t) : i;
          const { data: a } = e;
          let s;
          s = "function" == typeof a ? yield a(t) : a;
          const c =
            ("object" != typeof r && "string" != typeof r) || !r ? t : r;
          let u;
          u = c instanceof File ? c : new File([c], t.name, { type: t.type });
          const d = u;
          return (
            (d.uid = t.uid), { origin: t, data: s, parsedFile: d, action: l }
          );
        }),
      g = (e) => {
        if (e) {
          const t = e.uid ? e.uid : e;
          p[t] && p[t].abort && p[t].abort(), delete p[t];
        } else
          Object.keys(p).forEach((e) => {
            p[e] && p[e].abort && p[e].abort(), delete p[e];
          });
      };
    l(() => {
      v = !0;
    }),
      a(() => {
        (v = !1), g();
      });
    const h = (t) => {
        const o = [...t],
          n = o.map((e) => ((e.uid = ge()), m(e, o)));
        Promise.all(n).then((t) => {
          const { onBatchStart: o } = e;
          null == o ||
            o(
              t.map((e) => {
                let { origin: t, parsedFile: o } = e;
                return { file: t, parsedFile: o };
              })
            ),
            t
              .filter((e) => null !== e.parsedFile)
              .forEach((t) => {
                ((t) => {
                  let { data: o, origin: n, action: r, parsedFile: i } = t;
                  if (!v) return;
                  const {
                      onStart: l,
                      customRequest: a,
                      name: s,
                      headers: c,
                      withCredentials: u,
                      method: d,
                    } = e,
                    { uid: f } = n,
                    m = a || fe,
                    g = {
                      action: r,
                      filename: s,
                      data: o,
                      file: i,
                      headers: c,
                      withCredentials: u,
                      method: d || "post",
                      onProgress: (t) => {
                        const { onProgress: o } = e;
                        null == o || o(t, i);
                      },
                      onSuccess: (t, o) => {
                        const { onSuccess: n } = e;
                        null == n || n(t, i, o), delete p[f];
                      },
                      onError: (t, o) => {
                        const { onError: n } = e;
                        null == n || n(t, o, i), delete p[f];
                      },
                    };
                  l(n), (p[f] = m(g));
                })(t);
              });
        });
      },
      b = (t) => {
        const { accept: o, directory: n } = e,
          { files: r } = t.target,
          i = [...r].filter((e) => !n || he(e, o));
        h(i), (d.value = ge());
      },
      y = (t) => {
        const o = f.value;
        if (!o) return;
        const { onClick: n } = e;
        o.click(), n && n(t);
      },
      w = (e) => {
        "Enter" === e.key && y(e);
      },
      $ = (t) => {
        const { multiple: o } = e;
        if ((t.preventDefault(), "dragover" !== t.type))
          if (e.directory)
            be(Array.prototype.slice.call(t.dataTransfer.items), h, (t) =>
              he(t, e.accept)
            );
          else {
            const n = ae(
              Array.prototype.slice.call(t.dataTransfer.files),
              (t) => he(t, e.accept)
            );
            let r = n[0];
            const i = n[1];
            !1 === o && (r = r.slice(0, 1)),
              h(r),
              i.length && e.onReject && e.onReject(i);
          }
      };
    return (
      u({ abort: g }),
      () => {
        var t;
        const {
            componentTag: i,
            prefixCls: l,
            disabled: a,
            id: u,
            multiple: p,
            accept: v,
            capture: m,
            directory: g,
            openFileDialogOnClick: h,
            onMouseenter: O,
            onMouseleave: S,
          } = e,
          x = $e(e, [
            "componentTag",
            "prefixCls",
            "disabled",
            "id",
            "multiple",
            "accept",
            "capture",
            "directory",
            "openFileDialogOnClick",
            "onMouseenter",
            "onMouseleave",
          ]),
          I = { [l]: !0, [`${l}-disabled`]: a, [r.class]: !!r.class },
          C = g
            ? { directory: "directory", webkitdirectory: "webkitdirectory" }
            : {};
        return o(
          i,
          s(
            s(
              {},
              a
                ? {}
                : {
                    onClick: h ? y : () => {},
                    onKeydown: h ? w : () => {},
                    onMouseenter: O,
                    onMouseleave: S,
                    onDrop: $,
                    onDragover: $,
                    tabindex: "0",
                  }
            ),
            {},
            { class: I, role: "button", style: r.style }
          ),
          {
            default: () => [
              o(
                "input",
                s(
                  s(
                    s({}, c(x, { aria: !0, data: !0 })),
                    {},
                    {
                      id: u,
                      type: "file",
                      ref: f,
                      onClick: (e) => e.stopPropagation(),
                      onCancel: (e) => e.stopPropagation(),
                      key: d.value,
                      style: { display: "none" },
                      accept: v,
                    },
                    C
                  ),
                  {},
                  { multiple: p, onChange: b },
                  null != m ? { capture: m } : {}
                ),
                null
              ),
              null === (t = n.default) || void 0 === t ? void 0 : t.call(n),
            ],
          }
        );
      }
    );
  },
});
function Se() {}
const xe = r({
  compatConfig: { MODE: 3 },
  name: "Upload",
  inheritAttrs: !1,
  props: u(ye(), {
    componentTag: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: !1,
    onStart: Se,
    onError: Se,
    onSuccess: Se,
    multiple: !1,
    beforeUpload: null,
    customRequest: null,
    withCredentials: !1,
    openFileDialogOnClick: !0,
  }),
  setup(e, t) {
    let { slots: n, attrs: r, expose: l } = t;
    const a = i();
    return (
      l({
        abort: (e) => {
          var t;
          null === (t = a.value) || void 0 === t || t.abort(e);
        },
      }),
      () => o(Oe, s(s(s({}, e), r), {}, { ref: a }), n)
    );
  },
});
var Ie = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "64 64 896 896", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z",
        },
      },
    ],
  },
  name: "paper-clip",
  theme: "outlined",
};
function Ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(o);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        Pe(e, t, o[t]);
      });
  }
  return e;
}
function Pe(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var je = function (e, t) {
  var r = Ce({}, e, t.attrs);
  return o(n, Ce({}, r, { icon: Ie }), null);
};
(je.displayName = "PaperClipOutlined"), (je.inheritAttrs = !1);
var De = {
  icon: function (e, t) {
    return {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",
            fill: e,
          },
        },
        {
          tag: "path",
          attrs: {
            d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",
            fill: t,
          },
        },
        {
          tag: "path",
          attrs: {
            d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",
            fill: t,
          },
        },
        {
          tag: "path",
          attrs: { d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z", fill: t },
        },
        {
          tag: "path",
          attrs: {
            d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",
            fill: e,
          },
        },
      ],
    };
  },
  name: "picture",
  theme: "twotone",
};
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(o);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        Fe(e, t, o[t]);
      });
  }
  return e;
}
function Fe(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var ke = function (e, t) {
  var r = Re({}, e, t.attrs);
  return o(n, Re({}, r, { icon: De }), null);
};
(ke.displayName = "PictureTwoTone"), (ke.inheritAttrs = !1);
var Te = {
  icon: function (e, t) {
    return {
      tag: "svg",
      attrs: { viewBox: "64 64 896 896", focusable: "false" },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",
            fill: t,
          },
        },
        {
          tag: "path",
          attrs: {
            d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",
            fill: e,
          },
        },
      ],
    };
  },
  name: "file",
  theme: "twotone",
};
function Ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(o);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        Ee(e, t, o[t]);
      });
  }
  return e;
}
function Ee(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var Ue = function (e, t) {
  var r = Ae({}, e, t.attrs);
  return o(n, Ae({}, r, { icon: Te }), null);
};
function Le() {
  return {
    capture: d([Boolean, String]),
    type: p(),
    name: String,
    defaultFileList: f(),
    fileList: f(),
    action: d([String, Function]),
    directory: v(),
    data: d([Object, Function]),
    method: p(),
    headers: m(),
    showUploadList: d([Boolean, Object]),
    multiple: v(),
    accept: String,
    beforeUpload: g(),
    onChange: g(),
    "onUpdate:fileList": g(),
    onDrop: g(),
    listType: p(),
    onPreview: g(),
    onDownload: g(),
    onReject: g(),
    onRemove: g(),
    remove: g(),
    supportServerRender: v(),
    disabled: v(),
    prefixCls: String,
    customRequest: g(),
    withCredentials: v(),
    openFileDialogOnClick: v(),
    locale: m(),
    id: String,
    previewFile: g(),
    transformFile: g(),
    iconRender: g(),
    isImageUrl: g(),
    progress: m(),
    itemRender: g(),
    maxCount: Number,
    height: d([Number, String]),
    removeIcon: g(),
    downloadIcon: g(),
    previewIcon: g(),
  };
}
function ze(e) {
  return h(h({}, e), {
    lastModified: e.lastModified,
    lastModifiedDate: e.lastModifiedDate,
    name: e.name,
    size: e.size,
    type: e.type,
    uid: e.uid,
    percent: 0,
    originFileObj: e,
  });
}
function Me(e, t) {
  const o = [...t],
    n = o.findIndex((t) => {
      let { uid: o } = t;
      return o === e.uid;
    });
  return -1 === n ? o.push(e) : (o[n] = e), o;
}
function He(e, t) {
  const o = void 0 !== e.uid ? "uid" : "name";
  return t.filter((t) => t[o] === e[o])[0];
}
(Ue.displayName = "FileTwoTone"), (Ue.inheritAttrs = !1);
const Be = (e) => 0 === e.indexOf("image/"),
  _e = 200;
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? Object(arguments[t]) : {},
      n = Object.keys(o);
    "function" == typeof Object.getOwnPropertySymbols &&
      (n = n.concat(
        Object.getOwnPropertySymbols(o).filter(function (e) {
          return Object.getOwnPropertyDescriptor(o, e).enumerable;
        })
      )),
      n.forEach(function (t) {
        Ne(e, t, o[t]);
      });
  }
  return e;
}
function Ne(e, t, o) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = o),
    e
  );
}
var Ve = function (e, t) {
  var r = Xe({}, e, t.attrs);
  return o(n, Xe({}, r, { icon: te }), null);
};
(Ve.displayName = "DownloadOutlined"), (Ve.inheritAttrs = !1);
const qe = r({
    compatConfig: { MODE: 3 },
    name: "ListItem",
    inheritAttrs: !1,
    props: {
      prefixCls: String,
      locale: m(void 0),
      file: m(),
      items: f(),
      listType: p(),
      isImgUrl: g(),
      showRemoveIcon: v(),
      showDownloadIcon: v(),
      showPreviewIcon: v(),
      removeIcon: g(),
      downloadIcon: g(),
      previewIcon: g(),
      iconRender: g(),
      actionIconRender: g(),
      itemRender: g(),
      onPreview: g(),
      onClose: g(),
      onDownload: g(),
      progress: m(),
    },
    setup(e, t) {
      let { slots: n, attrs: r } = t;
      var i;
      const c = b(!1),
        u = b();
      l(() => {
        u.value = setTimeout(() => {
          c.value = !0;
        }, 300);
      }),
        a(() => {
          clearTimeout(u.value);
        });
      const d = b(null === (i = e.file) || void 0 === i ? void 0 : i.status);
      y(
        () => {
          var t;
          return null === (t = e.file) || void 0 === t ? void 0 : t.status;
        },
        (e) => {
          "removed" !== e && (d.value = e);
        }
      );
      const { rootPrefixCls: p } = w("upload", e),
        f = $(() => O(`${p.value}-fade`));
      return () => {
        var t, i;
        const {
            prefixCls: l,
            locale: a,
            listType: u,
            file: p,
            items: v,
            progress: m,
            iconRender: g = n.iconRender,
            actionIconRender: h = n.actionIconRender,
            itemRender: b = n.itemRender,
            isImgUrl: y,
            showPreviewIcon: w,
            showRemoveIcon: $,
            showDownloadIcon: O,
            previewIcon: j = n.previewIcon,
            removeIcon: D = n.removeIcon,
            downloadIcon: R = n.downloadIcon,
            onPreview: F,
            onDownload: k,
            onClose: T,
          } = e,
          { class: A, style: E } = r,
          U = g({ file: p });
        let L = o("div", { class: `${l}-text-icon` }, [U]);
        if ("picture" === u || "picture-card" === u)
          if ("uploading" === d.value || (!p.thumbUrl && !p.url)) {
            const e = {
              [`${l}-list-item-thumbnail`]: !0,
              [`${l}-list-item-file`]: "uploading" !== d.value,
            };
            L = o("div", { class: e }, [U]);
          } else {
            const e = (null == y ? void 0 : y(p))
                ? o(
                    "img",
                    {
                      src: p.thumbUrl || p.url,
                      alt: p.name,
                      class: `${l}-list-item-image`,
                      crossorigin: p.crossOrigin,
                    },
                    null
                  )
                : U,
              t = {
                [`${l}-list-item-thumbnail`]: !0,
                [`${l}-list-item-file`]: y && !y(p),
              };
            L = o(
              "a",
              {
                class: t,
                onClick: (e) => F(p, e),
                href: p.url || p.thumbUrl,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              [e]
            );
          }
        const z = { [`${l}-list-item`]: !0, [`${l}-list-item-${d.value}`]: !0 },
          M =
            "string" == typeof p.linkProps
              ? JSON.parse(p.linkProps)
              : p.linkProps,
          H = $
            ? h({
                customIcon: D ? D({ file: p }) : o(de, null, null),
                callback: () => T(p),
                prefixCls: l,
                title: a.removeFile,
              })
            : null,
          B =
            O && "done" === d.value
              ? h({
                  customIcon: R ? R({ file: p }) : o(Ve, null, null),
                  callback: () => k(p),
                  prefixCls: l,
                  title: a.downloadFile,
                })
              : null,
          _ =
            "picture-card" !== u &&
            o(
              "span",
              {
                key: "download-delete",
                class: [`${l}-list-item-actions`, { picture: "picture" === u }],
              },
              [B, H]
            ),
          X = `${l}-list-item-name`,
          N = p.url
            ? [
                o(
                  "a",
                  s(
                    s(
                      {
                        key: "view",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: X,
                        title: p.name,
                      },
                      M
                    ),
                    {},
                    { href: p.url, onClick: (e) => F(p, e) }
                  ),
                  [p.name]
                ),
                _,
              ]
            : [
                o(
                  "span",
                  {
                    key: "view",
                    class: X,
                    onClick: (e) => F(p, e),
                    title: p.name,
                  },
                  [p.name]
                ),
                _,
              ],
          V = w
            ? o(
                "a",
                {
                  href: p.url || p.thumbUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style:
                    p.url || p.thumbUrl
                      ? void 0
                      : { pointerEvents: "none", opacity: 0.5 },
                  onClick: (e) => F(p, e),
                  title: a.previewFile,
                },
                [j ? j({ file: p }) : o(S, null, null)]
              )
            : null,
          q =
            "picture-card" === u &&
            "uploading" !== d.value &&
            o("span", { class: `${l}-list-item-actions` }, [
              V,
              "done" === d.value && B,
              H,
            ]),
          W = o("div", { class: z }, [
            L,
            N,
            q,
            c.value &&
              o(x, f.value, {
                default: () => [
                  I(
                    o("div", { class: `${l}-list-item-progress` }, [
                      "percent" in p
                        ? o(
                            oe,
                            s(
                              s({}, m),
                              {},
                              { type: "line", percent: p.percent }
                            ),
                            null
                          )
                        : null,
                    ]),
                    [[C, "uploading" === d.value]]
                  ),
                ],
              }),
          ]),
          G = { [`${l}-list-item-container`]: !0, [`${A}`]: !!A },
          J =
            p.response && "string" == typeof p.response
              ? p.response
              : (null === (t = p.error) || void 0 === t
                  ? void 0
                  : t.statusText) ||
                (null === (i = p.error) || void 0 === i ? void 0 : i.message) ||
                a.uploadError,
          K =
            "error" === d.value
              ? o(
                  P,
                  { title: J, getPopupContainer: (e) => e.parentNode },
                  { default: () => [W] }
                )
              : W;
        return o("div", { class: G, style: E }, [
          b
            ? b({
                originNode: K,
                file: p,
                fileList: v,
                actions: {
                  download: k.bind(null, p),
                  preview: F.bind(null, p),
                  remove: T.bind(null, p),
                },
              })
            : K,
        ]);
      };
    },
  }),
  We = (e, t) => {
    let { slots: o } = t;
    var n;
    return T(null === (n = o.default) || void 0 === n ? void 0 : n.call(o))[0];
  },
  Ge = r({
    compatConfig: { MODE: 3 },
    name: "AUploadList",
    props: u(
      {
        listType: p(),
        onPreview: g(),
        onDownload: g(),
        onRemove: g(),
        items: f(),
        progress: m(),
        prefixCls: p(),
        showRemoveIcon: v(),
        showDownloadIcon: v(),
        showPreviewIcon: v(),
        removeIcon: g(),
        downloadIcon: g(),
        previewIcon: g(),
        locale: m(void 0),
        previewFile: g(),
        iconRender: g(),
        isImageUrl: g(),
        appendAction: g(),
        appendActionVisible: v(),
        itemRender: g(),
      },
      {
        listType: "text",
        progress: { strokeWidth: 2, showInfo: !1 },
        showRemoveIcon: !0,
        showDownloadIcon: !1,
        showPreviewIcon: !0,
        previewFile: function (e) {
          return new Promise((t) => {
            if (!e.type || !Be(e.type)) return void t("");
            const o = document.createElement("canvas");
            (o.width = _e),
              (o.height = _e),
              (o.style.cssText =
                "position: fixed; left: 0; top: 0; width: 200px; height: 200px; z-index: 9999; display: none;"),
              document.body.appendChild(o);
            const n = o.getContext("2d"),
              r = new Image();
            if (
              ((r.onload = () => {
                const { width: e, height: i } = r;
                let l = _e,
                  a = _e,
                  s = 0,
                  c = 0;
                e > i
                  ? ((a = i * (_e / e)), (c = -(a - l) / 2))
                  : ((l = e * (_e / i)), (s = -(l - a) / 2)),
                  n.drawImage(r, s, c, l, a);
                const u = o.toDataURL();
                document.body.removeChild(o), t(u);
              }),
              (r.crossOrigin = "anonymous"),
              e.type.startsWith("image/svg+xml"))
            ) {
              const t = new FileReader();
              t.addEventListener("load", () => {
                t.result && (r.src = t.result);
              }),
                t.readAsDataURL(e);
            } else r.src = window.URL.createObjectURL(e);
          });
        },
        isImageUrl: (e) => {
          if (e.type && !e.thumbUrl) return Be(e.type);
          const t = e.thumbUrl || e.url || "",
            o = (function () {
              const e = (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : ""
                ).split("/"),
                t = e[e.length - 1].split(/#|\?/)[0];
              return (/\.[^./\\]*$/.exec(t) || [""])[0];
            })(t);
          return (
            !(
              !/^data:image\//.test(t) &&
              !/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(o)
            ) ||
            (!/^data:/.test(t) && !o)
          );
        },
        items: [],
        appendActionVisible: !0,
      }
    ),
    setup(e, t) {
      let { slots: n, expose: r } = t;
      const i = b(!1);
      l(() => {
        i.value;
      });
      const a = b([]);
      y(
        () => e.items,
        function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          a.value = e.slice();
        },
        { immediate: !0, deep: !0 }
      ),
        j(() => {
          if ("picture" !== e.listType && "picture-card" !== e.listType) return;
          let t = !1;
          (e.items || []).forEach((o, n) => {
            "undefined" != typeof document &&
              "undefined" != typeof window &&
              window.FileReader &&
              window.File &&
              (o.originFileObj instanceof File ||
                o.originFileObj instanceof Blob) &&
              void 0 === o.thumbUrl &&
              ((o.thumbUrl = ""),
              e.previewFile &&
                e.previewFile(o.originFileObj).then((e) => {
                  const r = e || "";
                  r !== o.thumbUrl && ((a.value[n].thumbUrl = r), (t = !0));
                }));
          }),
            t && D(a);
        });
      const c = (t, o) => {
          if (e.onPreview)
            return null == o || o.preventDefault(), e.onPreview(t);
        },
        u = (t) => {
          "function" == typeof e.onDownload
            ? e.onDownload(t)
            : t.url && window.open(t.url);
        },
        d = (t) => {
          var o;
          null === (o = e.onRemove) || void 0 === o || o.call(e, t);
        },
        p = (t) => {
          let { file: r } = t;
          const i = e.iconRender || n.iconRender;
          if (i) return i({ file: r, listType: e.listType });
          const l = "uploading" === r.status,
            a =
              e.isImageUrl && e.isImageUrl(r)
                ? o(ke, null, null)
                : o(Ue, null, null);
          let s = o(l ? A : je, null, null);
          return (
            "picture" === e.listType
              ? (s = l ? o(A, null, null) : a)
              : "picture-card" === e.listType &&
                (s = l ? e.locale.uploading : a),
            s
          );
        },
        f = (e) => {
          const { customIcon: t, callback: n, prefixCls: r, title: i } = e,
            l = {
              type: "text",
              size: "small",
              title: i,
              onClick: () => {
                n();
              },
              class: `${r}-list-item-action`,
            };
          return E(t)
            ? o(U, l, { icon: () => t })
            : o(U, l, { default: () => [o("span", null, [t])] });
        };
      r({ handlePreview: c, handleDownload: u });
      const { prefixCls: v, rootPrefixCls: m } = w("upload", e),
        g = $(() => ({
          [`${v.value}-list`]: !0,
          [`${v.value}-list-${e.listType}`]: !0,
        })),
        O = $(() => {
          const t = h({}, R(`${m.value}-motion-collapse`));
          delete t.onAfterAppear, delete t.onAfterEnter, delete t.onAfterLeave;
          const o = h(
            h(
              {},
              F(
                `${v.value}-${
                  "picture-card" === e.listType ? "animate-inline" : "animate"
                }`
              )
            ),
            { class: g.value, appear: i.value }
          );
          return "picture-card" !== e.listType ? h(h({}, t), o) : o;
        });
      return () => {
        const {
            listType: t,
            locale: r,
            isImageUrl: i,
            showPreviewIcon: l,
            showRemoveIcon: m,
            showDownloadIcon: g,
            removeIcon: b,
            previewIcon: y,
            downloadIcon: w,
            progress: $,
            appendAction: S,
            itemRender: x,
            appendActionVisible: P,
          } = e,
          j = null == S ? void 0 : S(),
          D = a.value;
        return o(k, s(s({}, O.value), {}, { tag: "div" }), {
          default: () => [
            D.map((e) => {
              const { uid: a } = e;
              return o(
                qe,
                {
                  key: a,
                  locale: r,
                  prefixCls: v.value,
                  file: e,
                  items: D,
                  progress: $,
                  listType: t,
                  isImgUrl: i,
                  showPreviewIcon: l,
                  showRemoveIcon: m,
                  showDownloadIcon: g,
                  onPreview: c,
                  onDownload: u,
                  onClose: d,
                  removeIcon: b,
                  previewIcon: y,
                  downloadIcon: w,
                  itemRender: x,
                },
                h(h({}, n), { iconRender: p, actionIconRender: f })
              );
            }),
            S
              ? I(
                  o(
                    We,
                    { key: "__ant_upload_appendAction" },
                    { default: () => j }
                  ),
                  [[C, !!P]]
                )
              : null,
          ],
        });
      };
    },
  }),
  Je = (e) => {
    const { componentCls: t, iconCls: o } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-drag`]: {
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          background: e.colorFillAlter,
          border: `${e.lineWidth}px dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: "pointer",
          transition: `border-color ${e.motionDurationSlow}`,
          [t]: { padding: `${e.padding}px 0` },
          [`${t}-btn`]: {
            display: "table",
            width: "100%",
            height: "100%",
            outline: "none",
          },
          [`${t}-drag-container`]: {
            display: "table-cell",
            verticalAlign: "middle",
          },
          [`&:not(${t}-disabled):hover`]: { borderColor: e.colorPrimaryHover },
          [`p${t}-drag-icon`]: {
            marginBottom: e.margin,
            [o]: { color: e.colorPrimary, fontSize: e.uploadThumbnailSize },
          },
          [`p${t}-text`]: {
            margin: `0 0 ${e.marginXXS}px`,
            color: e.colorTextHeading,
            fontSize: e.fontSizeLG,
          },
          [`p${t}-hint`]: {
            color: e.colorTextDescription,
            fontSize: e.fontSize,
          },
          [`&${t}-disabled`]: {
            cursor: "not-allowed",
            [`p${t}-drag-icon ${o},\n            p${t}-text,\n            p${t}-hint\n          `]:
              { color: e.colorTextDisabled },
          },
        },
      },
    };
  },
  Ke = (e) => {
    const {
        componentCls: t,
        antCls: o,
        iconCls: n,
        fontSize: r,
        lineHeight: i,
      } = e,
      l = `${t}-list-item`,
      a = `${l}-actions`,
      s = `${l}-action`,
      c = Math.round(r * i);
    return {
      [`${t}-wrapper`]: {
        [`${t}-list`]: h(h({}, L()), {
          lineHeight: e.lineHeight,
          [l]: {
            position: "relative",
            height: e.lineHeight * r,
            marginTop: e.marginXS,
            fontSize: r,
            display: "flex",
            alignItems: "center",
            transition: `background-color ${e.motionDurationSlow}`,
            "&:hover": { backgroundColor: e.controlItemBgHover },
            [`${l}-name`]: h(h({}, z), {
              padding: `0 ${e.paddingXS}px`,
              lineHeight: i,
              flex: "auto",
              transition: `all ${e.motionDurationSlow}`,
            }),
            [a]: {
              [s]: { opacity: 0 },
              [`${s}${o}-btn-sm`]: {
                height: c,
                border: 0,
                lineHeight: 1,
                "> span": { transform: "scale(1)" },
              },
              [`\n              ${s}:focus,\n              &.picture ${s}\n            `]:
                { opacity: 1 },
              [n]: {
                color: e.colorTextDescription,
                transition: `all ${e.motionDurationSlow}`,
              },
              [`&:hover ${n}`]: { color: e.colorText },
            },
            [`${t}-icon ${n}`]: { color: e.colorTextDescription, fontSize: r },
            [`${l}-progress`]: {
              position: "absolute",
              bottom: -e.uploadProgressOffset,
              width: "100%",
              paddingInlineStart: r + e.paddingXS,
              fontSize: r,
              lineHeight: 0,
              pointerEvents: "none",
              "> div": { margin: 0 },
            },
          },
          [`${l}:hover ${s}`]: { opacity: 1, color: e.colorText },
          [`${l}-error`]: {
            color: e.colorError,
            [`${l}-name, ${t}-icon ${n}`]: { color: e.colorError },
            [a]: {
              [`${n}, ${n}:hover`]: { color: e.colorError },
              [s]: { opacity: 1 },
            },
          },
          [`${t}-list-item-container`]: {
            transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
            "&::before": {
              display: "table",
              width: 0,
              height: 0,
              content: '""',
            },
          },
        }),
      },
    };
  },
  Qe = new M("uploadAnimateInlineIn", {
    from: { width: 0, height: 0, margin: 0, padding: 0, opacity: 0 },
  }),
  Ze = new M("uploadAnimateInlineOut", {
    to: { width: 0, height: 0, margin: 0, padding: 0, opacity: 0 },
  }),
  Ye = (e) => {
    const { componentCls: t } = e,
      o = `${t}-animate-inline`;
    return [
      {
        [`${t}-wrapper`]: {
          [`${o}-appear, ${o}-enter, ${o}-leave`]: {
            animationDuration: e.motionDurationSlow,
            animationTimingFunction: e.motionEaseInOutCirc,
            animationFillMode: "forwards",
          },
          [`${o}-appear, ${o}-enter`]: { animationName: Qe },
          [`${o}-leave`]: { animationName: Ze },
        },
      },
      Qe,
      Ze,
    ];
  },
  et = (e) => {
    const {
        componentCls: t,
        iconCls: o,
        uploadThumbnailSize: n,
        uploadProgressOffset: r,
      } = e,
      i = `${t}-list`,
      l = `${i}-item`;
    return {
      [`${t}-wrapper`]: {
        [`${i}${i}-picture, ${i}${i}-picture-card`]: {
          [l]: {
            position: "relative",
            height: n + 2 * e.lineWidth + 2 * e.paddingXS,
            padding: e.paddingXS,
            border: `${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadiusLG,
            "&:hover": { background: "transparent" },
            [`${l}-thumbnail`]: h(h({}, z), {
              width: n,
              height: n,
              lineHeight: `${n + e.paddingSM}px`,
              textAlign: "center",
              flex: "none",
              [o]: { fontSize: e.fontSizeHeading2, color: e.colorPrimary },
              img: {
                display: "block",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              },
            }),
            [`${l}-progress`]: {
              bottom: r,
              width: `calc(100% - ${2 * e.paddingSM}px)`,
              marginTop: 0,
              paddingInlineStart: n + e.paddingXS,
            },
          },
          [`${l}-error`]: {
            borderColor: e.colorError,
            [`${l}-thumbnail ${o}`]: {
              "svg path[fill='#e6f7ff']": { fill: e.colorErrorBg },
              "svg path[fill='#1890ff']": { fill: e.colorError },
            },
          },
          [`${l}-uploading`]: {
            borderStyle: "dashed",
            [`${l}-name`]: { marginBottom: r },
          },
        },
      },
    };
  },
  tt = (e) => {
    const {
        componentCls: t,
        iconCls: o,
        fontSizeLG: n,
        colorTextLightSolid: r,
      } = e,
      i = `${t}-list`,
      l = `${i}-item`,
      a = e.uploadPicCardSize;
    return {
      [`${t}-wrapper${t}-picture-card-wrapper`]: h(h({}, L()), {
        display: "inline-block",
        width: "100%",
        [`${t}${t}-select`]: {
          width: a,
          height: a,
          marginInlineEnd: e.marginXS,
          marginBottom: e.marginXS,
          textAlign: "center",
          verticalAlign: "top",
          backgroundColor: e.colorFillAlter,
          border: `${e.lineWidth}px dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: "pointer",
          transition: `border-color ${e.motionDurationSlow}`,
          [`> ${t}`]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
          },
          [`&:not(${t}-disabled):hover`]: { borderColor: e.colorPrimary },
        },
        [`${i}${i}-picture-card`]: {
          [`${i}-item-container`]: {
            display: "inline-block",
            width: a,
            height: a,
            marginBlock: `0 ${e.marginXS}px`,
            marginInline: `0 ${e.marginXS}px`,
            verticalAlign: "top",
          },
          "&::after": { display: "none" },
          [l]: {
            height: "100%",
            margin: 0,
            "&::before": {
              position: "absolute",
              zIndex: 1,
              width: `calc(100% - ${2 * e.paddingXS}px)`,
              height: `calc(100% - ${2 * e.paddingXS}px)`,
              backgroundColor: e.colorBgMask,
              opacity: 0,
              transition: `all ${e.motionDurationSlow}`,
              content: '" "',
            },
          },
          [`${l}:hover`]: { [`&::before, ${l}-actions`]: { opacity: 1 } },
          [`${l}-actions`]: {
            position: "absolute",
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            whiteSpace: "nowrap",
            textAlign: "center",
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            [`${o}-eye, ${o}-download, ${o}-delete`]: {
              zIndex: 10,
              width: n,
              margin: `0 ${e.marginXXS}px`,
              fontSize: n,
              cursor: "pointer",
              transition: `all ${e.motionDurationSlow}`,
            },
          },
          [`${l}-actions, ${l}-actions:hover`]: {
            [`${o}-eye, ${o}-download, ${o}-delete`]: {
              color: new H(r).setAlpha(0.65).toRgbString(),
              "&:hover": { color: r },
            },
          },
          [`${l}-thumbnail, ${l}-thumbnail img`]: {
            position: "static",
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          },
          [`${l}-name`]: { display: "none", textAlign: "center" },
          [`${l}-file + ${l}-name`]: {
            position: "absolute",
            bottom: e.margin,
            display: "block",
            width: `calc(100% - ${2 * e.paddingXS}px)`,
          },
          [`${l}-uploading`]: {
            [`&${l}`]: { backgroundColor: e.colorFillAlter },
            [`&::before, ${o}-eye, ${o}-download, ${o}-delete`]: {
              display: "none",
            },
          },
          [`${l}-progress`]: {
            bottom: e.marginXL,
            width: `calc(100% - ${2 * e.paddingXS}px)`,
            paddingInlineStart: 0,
          },
        },
      }),
    };
  },
  ot = (e) => {
    const { componentCls: t } = e;
    return { [`${t}-rtl`]: { direction: "rtl" } };
  },
  nt = (e) => {
    const { componentCls: t, colorTextDisabled: o } = e;
    return {
      [`${t}-wrapper`]: h(h({}, N(e)), {
        [t]: { outline: 0, "input[type='file']": { cursor: "pointer" } },
        [`${t}-select`]: { display: "inline-block" },
        [`${t}-disabled`]: { color: o, cursor: "not-allowed" },
      }),
    };
  },
  rt = B("Upload", (e) => {
    const {
        fontSizeHeading3: t,
        fontSize: o,
        lineHeight: n,
        lineWidth: r,
        controlHeightLG: i,
      } = e,
      l = Math.round(o * n),
      a = _(e, {
        uploadThumbnailSize: 2 * t,
        uploadProgressOffset: l / 2 + r,
        uploadPicCardSize: 2.55 * i,
      });
    return [nt(a), Je(a), et(a), tt(a), Ke(a), Ye(a), ot(a), X(a)];
  });
var it = function (e, t, o, n) {
    return new (o || (o = Promise))(function (r, i) {
      function l(e) {
        try {
          s(n.next(e));
        } catch (t) {
          i(t);
        }
      }
      function a(e) {
        try {
          s(n.throw(e));
        } catch (t) {
          i(t);
        }
      }
      function s(e) {
        var t;
        e.done
          ? r(e.value)
          : ((t = e.value),
            t instanceof o
              ? t
              : new o(function (e) {
                  e(t);
                })).then(l, a);
      }
      s((n = n.apply(e, t || [])).next());
    });
  },
  lt = function (e, t) {
    var o = {};
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) &&
        t.indexOf(n) < 0 &&
        (o[n] = e[n]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
        t.indexOf(n[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
          (o[n[r]] = e[n[r]]);
    }
    return o;
  };
const at = `__LIST_IGNORE_${Date.now()}__`,
  st = r({
    compatConfig: { MODE: 3 },
    name: "AUpload",
    inheritAttrs: !1,
    props: u(Le(), {
      type: "select",
      multiple: !1,
      action: "",
      data: {},
      accept: "",
      showUploadList: !0,
      listType: "text",
      supportServerRender: !0,
    }),
    setup(e, t) {
      let { slots: n, attrs: r, expose: a } = t;
      const c = V(),
        { prefixCls: u, direction: d, disabled: p } = w("upload", e),
        [f, v] = rt(u),
        m = q(),
        g = $(() => {
          var e;
          return null !== (e = p.value) && void 0 !== e ? e : m.value;
        }),
        [b, y] = W(e.defaultFileList || [], {
          value: G(e, "fileList"),
          postState: (e) => {
            const t = Date.now();
            return (null != e ? e : []).map(
              (e, o) => (
                e.uid || Object.isFrozen(e) || (e.uid = `__AUTO__${t}_${o}__`),
                e
              )
            );
          },
        }),
        O = i("drop"),
        S = i(null);
      l(() => {
        J(
          void 0 !== e.fileList || void 0 === r.value,
          "Upload",
          "`value` is not a valid prop, do you mean `fileList`?"
        ),
          J(
            void 0 === e.transformFile,
            "Upload",
            "`transformFile` is deprecated. Please use `beforeUpload` directly."
          ),
          J(
            void 0 === e.remove,
            "Upload",
            "`remove` props is deprecated. Please use `remove` event."
          );
      });
      const x = (t, o, n) => {
          var r, i;
          let l = [...o];
          1 === e.maxCount
            ? (l = l.slice(-1))
            : e.maxCount && (l = l.slice(0, e.maxCount)),
            y(l);
          const a = { file: t, fileList: l };
          n && (a.event = n),
            null === (r = e["onUpdate:fileList"]) ||
              void 0 === r ||
              r.call(e, a.fileList),
            null === (i = e.onChange) || void 0 === i || i.call(e, a),
            c.onFieldChange();
        },
        I = (t, o) =>
          it(this, void 0, void 0, function* () {
            const { beforeUpload: n, transformFile: r } = e;
            let i = t;
            if (n) {
              const e = yield n(t, o);
              if (!1 === e) return !1;
              if ((delete t[at], e === at))
                return (
                  Object.defineProperty(t, at, { value: !0, configurable: !0 }),
                  !1
                );
              "object" == typeof e && e && (i = e);
            }
            return r && (i = yield r(i)), i;
          }),
        C = (e) => {
          const t = e.filter((e) => !e.file[at]);
          if (!t.length) return;
          const o = t.map((e) => ze(e.file));
          let n = [...b.value];
          o.forEach((e) => {
            n = Me(e, n);
          }),
            o.forEach((e, o) => {
              let r = e;
              if (t[o].parsedFile) e.status = "uploading";
              else {
                const { originFileObj: t } = e;
                let o;
                try {
                  o = new File([t], t.name, { type: t.type });
                } catch (i) {
                  (o = new Blob([t], { type: t.type })),
                    (o.name = t.name),
                    (o.lastModifiedDate = new Date()),
                    (o.lastModified = new Date().getTime());
                }
                (o.uid = e.uid), (r = o);
              }
              x(r, n);
            });
        },
        P = (e, t, o) => {
          try {
            "string" == typeof e && (e = JSON.parse(e));
          } catch (i) {}
          if (!He(t, b.value)) return;
          const n = ze(t);
          (n.status = "done"), (n.percent = 100), (n.response = e), (n.xhr = o);
          const r = Me(n, b.value);
          x(n, r);
        },
        j = (e, t) => {
          if (!He(t, b.value)) return;
          const o = ze(t);
          (o.status = "uploading"), (o.percent = e.percent);
          const n = Me(o, b.value);
          x(o, n, e);
        },
        D = (e, t, o) => {
          if (!He(o, b.value)) return;
          const n = ze(o);
          (n.error = e), (n.response = t), (n.status = "error");
          const r = Me(n, b.value);
          x(n, r);
        },
        R = (t) => {
          let o;
          const n = e.onRemove || e.remove;
          Promise.resolve("function" == typeof n ? n(t) : n).then((e) => {
            var n, r;
            if (!1 === e) return;
            const i = (function (e, t) {
              const o = void 0 !== e.uid ? "uid" : "name",
                n = t.filter((t) => t[o] !== e[o]);
              return n.length === t.length ? null : n;
            })(t, b.value);
            i &&
              ((o = h(h({}, t), { status: "removed" })),
              null === (n = b.value) ||
                void 0 === n ||
                n.forEach((e) => {
                  const t = void 0 !== o.uid ? "uid" : "name";
                  e[t] !== o[t] || Object.isFrozen(e) || (e.status = "removed");
                }),
              null === (r = S.value) || void 0 === r || r.abort(o),
              x(o, i));
          });
        },
        F = (t) => {
          var o;
          (O.value = t.type),
            "drop" === t.type &&
              (null === (o = e.onDrop) || void 0 === o || o.call(e, t));
        };
      a({
        onBatchStart: C,
        onSuccess: P,
        onProgress: j,
        onError: D,
        fileList: b,
        upload: S,
      });
      const [k] = K(
          "Upload",
          Q.Upload,
          $(() => e.locale)
        ),
        T = (t, r) => {
          const {
              removeIcon: i,
              previewIcon: l,
              downloadIcon: a,
              previewFile: s,
              onPreview: c,
              onDownload: d,
              isImageUrl: p,
              progress: f,
              itemRender: v,
              iconRender: m,
              showUploadList: y,
            } = e,
            {
              showDownloadIcon: w,
              showPreviewIcon: $,
              showRemoveIcon: O,
            } = "boolean" == typeof y ? {} : y;
          return y
            ? o(
                Ge,
                {
                  prefixCls: u.value,
                  listType: e.listType,
                  items: b.value,
                  previewFile: s,
                  onPreview: c,
                  onDownload: d,
                  onRemove: R,
                  showRemoveIcon: !g.value && O,
                  showPreviewIcon: $,
                  showDownloadIcon: w,
                  removeIcon: i,
                  previewIcon: l,
                  downloadIcon: a,
                  iconRender: m,
                  locale: k.value,
                  isImageUrl: p,
                  progress: f,
                  itemRender: v,
                  appendActionVisible: r,
                  appendAction: t,
                },
                h({}, n)
              )
            : null == t
            ? void 0
            : t();
        };
      return () => {
        var t, i, l;
        const { listType: a, type: p } = e,
          { class: m, style: y } = r,
          w = lt(r, ["class", "style"]),
          $ = h(
            h(
              h(
                { onBatchStart: C, onError: D, onProgress: j, onSuccess: P },
                w
              ),
              e
            ),
            {
              id: null !== (t = e.id) && void 0 !== t ? t : c.id.value,
              prefixCls: u.value,
              beforeUpload: I,
              onChange: void 0,
              disabled: g.value,
            }
          );
        delete $.remove, (n.default && !g.value) || delete $.id;
        const x = { [`${u.value}-rtl`]: "rtl" === d.value };
        if ("drag" === p) {
          const e = Z(
            u.value,
            {
              [`${u.value}-drag`]: !0,
              [`${u.value}-drag-uploading`]: b.value.some(
                (e) => "uploading" === e.status
              ),
              [`${u.value}-drag-hover`]: "dragover" === O.value,
              [`${u.value}-disabled`]: g.value,
              [`${u.value}-rtl`]: "rtl" === d.value,
            },
            r.class,
            v.value
          );
          return f(
            o(
              "span",
              s(
                s({}, r),
                {},
                { class: Z(`${u.value}-wrapper`, x, m, v.value) }
              ),
              [
                o(
                  "div",
                  {
                    class: e,
                    onDrop: F,
                    onDragover: F,
                    onDragleave: F,
                    style: r.style,
                  },
                  [
                    o(
                      xe,
                      s(s({}, $), {}, { ref: S, class: `${u.value}-btn` }),
                      s(
                        {
                          default: () => [
                            o("div", { class: `${u.value}-drag-container` }, [
                              null === (i = n.default) || void 0 === i
                                ? void 0
                                : i.call(n),
                            ]),
                          ],
                        },
                        n
                      )
                    ),
                  ]
                ),
                T(),
              ]
            )
          );
        }
        const R = Z(u.value, {
            [`${u.value}-select`]: !0,
            [`${u.value}-select-${a}`]: !0,
            [`${u.value}-disabled`]: g.value,
            [`${u.value}-rtl`]: "rtl" === d.value,
          }),
          k = Y(null === (l = n.default) || void 0 === l ? void 0 : l.call(n)),
          A = (e) =>
            o("div", { class: R, style: e }, [
              o(xe, s(s({}, $), {}, { ref: S }), n),
            ]);
        return f(
          "picture-card" === a
            ? o(
                "span",
                s(
                  s({}, r),
                  {},
                  {
                    class: Z(
                      `${u.value}-wrapper`,
                      `${u.value}-picture-card-wrapper`,
                      x,
                      r.class,
                      v.value
                    ),
                  }
                ),
                [T(A, !(!k || !k.length))]
              )
            : o(
                "span",
                s(
                  s({}, r),
                  {},
                  { class: Z(`${u.value}-wrapper`, x, r.class, v.value) }
                ),
                [A(k && k.length ? void 0 : { display: "none" }), T()]
              )
        );
      };
    },
  });
var ct = function (e, t) {
  var o = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (o[n] = e[n]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
      t.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
        (o[n[r]] = e[n[r]]);
  }
  return o;
};
const ut = r({
    compatConfig: { MODE: 3 },
    name: "AUploadDragger",
    inheritAttrs: !1,
    props: Le(),
    setup(e, t) {
      let { slots: n, attrs: r } = t;
      return () => {
        const { height: t } = e,
          i = ct(e, ["height"]),
          { style: l } = r,
          a = ct(r, ["style"]),
          s = h(h(h({}, i), a), {
            type: "drag",
            style: h(h({}, l), { height: "number" == typeof t ? `${t}px` : t }),
          });
        return o(st, s, n);
      };
    },
  }),
  dt = ut,
  pt = h(st, {
    Dragger: ut,
    LIST_IGNORE: at,
    install: (e) => (e.component(st.name, st), e.component(ut.name, ut), e),
  });
export { dt as U, pt as _ };

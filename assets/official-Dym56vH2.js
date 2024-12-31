import {
  as as t,
  c as e,
  au as n,
  av as r,
  bl as i,
  a as o,
  bm as a,
  bn as s,
  aA as l,
  aB as c,
  aD as u,
  aw as f,
  bp as p,
  aK as d,
  ea as h,
  aR as g,
  r as m,
  b2 as y,
  bo as v,
  eb as w,
  ec as x,
  bO as b,
  ed as _,
  aP as M,
  bS as T,
  at as S,
} from "./index-CcOpQHgp.js";
import {
  C as E,
  V as I,
  S as C,
  U as A,
  B as U,
  T as P,
  E as B,
  R as L,
  P as D,
  p as z,
  a as R,
  I as k,
  b as j,
  M as F,
  c as N,
  d as O,
  e as V,
  f as H,
  L as W,
  g as G,
  D as Y,
  h as X,
  q as K,
  i as q,
  j as Z,
  k as J,
  l as $,
  m as Q,
  F as tt,
  n as et,
  A as nt,
  o as rt,
  r as it,
  O as ot,
  s as at,
  W as st,
  H as lt,
  N as ct,
  t as ut,
  u as ft,
  v as pt,
  w as dt,
  x as ht,
  y as gt,
  z as mt,
  G as yt,
  J as vt,
  K as wt,
  Q as xt,
  X as bt,
  Y as _t,
  Z as Mt,
  _ as Tt,
  $ as St,
  a0 as Et,
  a1 as It,
  a2 as Ct,
  a3 as At,
  a4 as Ut,
} from "./tres-A3eZwWFz.js";
import { g as Pt, a as Bt, b as Lt } from "./official-website-Cnxq3Yc9.js";
const Dt = ["src", "alt", "lt-md"],
  zt = ["title"],
  Rt = ["title"],
  kt = { key: 1, flex: "~ col gap-4", "text-base": "", "mt-auto": "" },
  jt = { flex: "~ items-center gap-2" },
  Ft = { flex: "~ center", p2: "", "rounded-full": "", bg: "codark" },
  Nt = { flex: "~ items-center gap-2" },
  Ot = { flex: "~ center", p2: "", "rounded-full": "", bg: "codark" },
  Vt = { text: "#999" },
  Ht = {
    key: 2,
    "text-primary": "",
    flex: "",
    "items-center": "",
    "justify-between": "",
    "mt-auto": "",
  },
  Wt = t({
    __name: "ArticleCard",
    props: {
      post: {},
      title: {},
      description: {},
      showMore: { type: Boolean },
      link: {},
      row: { type: Boolean },
      type: {},
      dateTime: {},
      location: {},
    },
    setup(t) {
      const d = t,
        h = e(() => d.post || "/assets/DefaultImg-D3xH723F.png");
      function g() {
        window.open(d.link, "_blank");
      }
      return (t, e) => {
        const m = p;
        return (
          n(),
          r(
            "div",
            {
              "text-xl": "",
              bg: "#0C1D18",
              "text-white": "",
              "cursor-pointer": "",
              class: a([
                "group",
                d.row
                  ? "grid grid-cols-4 p-4 lt-md:grid-cols-7"
                  : "flex flex-col",
              ]),
              hover: "shadow-sm scale-102 transition-all",
              onClick: g,
            },
            [
              i(
                "div",
                {
                  class: a(
                    d.row
                      ? "col-span-1 lt-md:col-span-3"
                      : "w-full " +
                          ("event" === d.type ? "" : "h-300px lt-md:h-150px")
                  ),
                },
                [
                  i(
                    "img",
                    {
                      src: o(h),
                      alt: d.title,
                      class: a([
                        "object-cover",
                        "event" === d.type ? "w-full" : "h-300px w-full",
                      ]),
                      "lt-md": "event" === d.type ? "" : "h-140px",
                      "group-hover": "scale-95 transition-all",
                    },
                    null,
                    10,
                    Dt
                  ),
                ],
                2
              ),
              i(
                "div",
                {
                  flex: "~ col gap-20px",
                  class: a(
                    d.row
                      ? "py-0 px-6 col-start-2 col-end-5 lt-md:col-span-4"
                      : "py-40px px-30px"
                  ),
                },
                [
                  i(
                    "div",
                    {
                      "line-clamp-10": "",
                      "text-xl": "",
                      class: a([
                        "event" === t.type ? "min-h-80px" : "lt-md:text-lg",
                      ]),
                      title: d.title,
                    },
                    [s(t.$slots, "title", {}, () => [l(c(d.title), 1)])],
                    10,
                    zt
                  ),
                  d.description
                    ? (n(),
                      r(
                        "div",
                        {
                          key: 0,
                          "line-clamp-3": "",
                          text: "#999999 base",
                          "mt-auto": "",
                          "lt-md": "text-base",
                          title: d.description,
                        },
                        c(d.description),
                        9,
                        Rt
                      ))
                    : u("", !0),
                  "event" === d.type
                    ? (n(),
                      r("div", kt, [
                        i("div", jt, [
                          i("div", Ft, [
                            f(m, { icon: "i-icon:co-calendar", size: 14 }),
                          ]),
                          i("span", null, c(d.dateTime), 1),
                        ]),
                        i("div", Nt, [
                          i("div", Ot, [
                            f(m, { icon: "i-icon:co-poi", size: 14 }),
                          ]),
                          i("span", Vt, c(d.location), 1),
                        ]),
                      ]))
                    : u("", !0),
                  d.showMore
                    ? (n(),
                      r("div", Ht, [
                        l(" More "),
                        f(m, {
                          icon: "i-mdi:arrow-right",
                          size: 24,
                          class:
                            "group-hover:translate-x-2 group-hover:scale-125 transition-all",
                        }),
                      ]))
                    : u("", !0),
                ],
                2
              ),
            ],
            2
          )
        );
      };
    },
  }),
  Gt = parseInt(q.replace(/\D+/g, ""));
var Yt = Object.defineProperty;
async function Xt(t) {
  const e = await t.arrayBuffer(),
    n = btoa(String.fromCharCode(...new Uint8Array(e)));
  return `data:${t.type || ""};base64,${n}`;
}
let Kt, qt, Zt, Jt;
function $t(t, e = 1 / 0, n = null) {
  qt || (qt = new X(2, 2, 1, 1)),
    Zt ||
      (Zt = new C({
        uniforms: { blitTexture: new wt(t) },
        vertexShader:
          "\n        varying vec2 vUv;\n        void main(){\n            vUv = uv;\n            gl_Position = vec4(position.xy * 1.0,0.,.999999);\n        }\n      ",
        fragmentShader:
          "\n          uniform sampler2D blitTexture; \n          varying vec2 vUv;\n\n          void main(){ \n              gl_FragColor = vec4(vUv.xy, 0, 1);\n              \n              #ifdef IS_SRGB\n              gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );\n              #else\n              gl_FragColor = texture2D( blitTexture, vUv);\n              #endif\n          }\n      ",
      })),
    (Zt.uniforms.blitTexture.value = t),
    (Zt.defines.IS_SRGB =
      "colorSpace" in t ? "srgb" === t.colorSpace : 3001 === t.encoding),
    (Zt.needsUpdate = !0),
    Jt || ((Jt = new $(qt, Zt)), (Jt.frustrumCulled = !1));
  const r = new at(),
    i = new yt();
  i.add(Jt),
    n || (n = Kt = new xt({ antialias: !1 })),
    n.setSize(Math.min(t.image.width, e), Math.min(t.image.height, e)),
    n.clear(),
    n.render(i, r);
  const o = new pt(n.domElement);
  return (
    (o.minFilter = t.minFilter),
    (o.magFilter = t.magFilter),
    (o.wrapS = t.wrapS),
    (o.wrapT = t.wrapT),
    (o.name = t.name),
    Kt && (Kt.dispose(), (Kt = null)),
    o
  );
}
const Qt = {
  POSITION: [
    "byte",
    "byte normalized",
    "unsigned byte",
    "unsigned byte normalized",
    "short",
    "short normalized",
    "unsigned short",
    "unsigned short normalized",
  ],
  NORMAL: ["byte normalized", "short normalized"],
  TANGENT: ["byte normalized", "short normalized"],
  TEXCOORD: [
    "byte",
    "byte normalized",
    "unsigned byte",
    "short",
    "short normalized",
    "unsigned short",
  ],
};
class te {
  constructor() {
    (this.pluginCallbacks = []),
      this.register(function (t) {
        return new ze(t);
      }),
      this.register(function (t) {
        return new Re(t);
      }),
      this.register(function (t) {
        return new Fe(t);
      }),
      this.register(function (t) {
        return new Ne(t);
      }),
      this.register(function (t) {
        return new Oe(t);
      }),
      this.register(function (t) {
        return new Ve(t);
      }),
      this.register(function (t) {
        return new ke(t);
      }),
      this.register(function (t) {
        return new je(t);
      }),
      this.register(function (t) {
        return new He(t);
      }),
      this.register(function (t) {
        return new We(t);
      }),
      this.register(function (t) {
        return new Ge(t);
      });
  }
  register(t) {
    return (
      -1 === this.pluginCallbacks.indexOf(t) && this.pluginCallbacks.push(t),
      this
    );
  }
  unregister(t) {
    return (
      -1 !== this.pluginCallbacks.indexOf(t) &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1),
      this
    );
  }
  parse(t, e, n, r) {
    const i = new De(),
      o = [];
    for (let a = 0, s = this.pluginCallbacks.length; a < s; a++)
      o.push(this.pluginCallbacks[a](i));
    i.setPlugins(o), i.write(t, e, r).catch(n);
  }
  parseAsync(t, e) {
    const n = this;
    return new Promise(function (r, i) {
      n.parse(t, r, i, e);
    });
  }
}
var ee;
(ee = {
  insertKeyframe: function (t, e) {
    const n = t.getValueSize(),
      r = new t.TimeBufferType(t.times.length + 1),
      i = new t.ValueBufferType(t.values.length + n),
      o = t.createInterpolant(new t.ValueBufferType(n));
    let a;
    if (0 === t.times.length) {
      r[0] = e;
      for (let t = 0; t < n; t++) i[t] = 0;
      a = 0;
    } else if (e < t.times[0]) {
      if (Math.abs(t.times[0] - e) < 0.001) return 0;
      (r[0] = e),
        r.set(t.times, 1),
        i.set(o.evaluate(e), 0),
        i.set(t.values, n),
        (a = 0);
    } else if (e > t.times[t.times.length - 1]) {
      if (Math.abs(t.times[t.times.length - 1] - e) < 0.001)
        return t.times.length - 1;
      (r[r.length - 1] = e),
        r.set(t.times, 0),
        i.set(t.values, 0),
        i.set(o.evaluate(e), t.values.length),
        (a = r.length - 1);
    } else
      for (let s = 0; s < t.times.length; s++) {
        if (Math.abs(t.times[s] - e) < 0.001) return s;
        if (t.times[s] < e && t.times[s + 1] > e) {
          r.set(t.times.slice(0, s + 1), 0),
            (r[s + 1] = e),
            r.set(t.times.slice(s + 1), s + 2),
            i.set(t.values.slice(0, (s + 1) * n), 0),
            i.set(o.evaluate(e), (s + 1) * n),
            i.set(t.values.slice((s + 1) * n), (s + 2) * n),
            (a = s + 1);
          break;
        }
      }
    return (t.times = r), (t.values = i), a;
  },
  mergeMorphTargetTracks: function (t, e) {
    const n = [],
      r = {},
      i = t.tracks;
    for (let o = 0; o < i.length; ++o) {
      let t = i[o];
      const a = Z.parseTrackName(t.name),
        s = Z.findNode(e, a.nodeName);
      if (
        "morphTargetInfluences" !== a.propertyName ||
        void 0 === a.propertyIndex
      ) {
        n.push(t);
        continue;
      }
      if (
        t.createInterpolant !== t.InterpolantFactoryMethodDiscrete &&
        t.createInterpolant !== t.InterpolantFactoryMethodLinear
      ) {
        if (t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
          throw new Error(
            "THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation."
          );
        (t = t.clone()), t.setInterpolation(J);
      }
      const l = s.morphTargetInfluences.length,
        c = s.morphTargetDictionary[a.propertyIndex];
      if (void 0 === c)
        throw new Error(
          "THREE.GLTFExporter: Morph target name not found: " + a.propertyIndex
        );
      let u;
      if (void 0 === r[s.uuid]) {
        u = t.clone();
        const e = new u.ValueBufferType(l * u.times.length);
        for (let t = 0; t < u.times.length; t++) e[t * l + c] = u.values[t];
        (u.name = (a.nodeName || "") + ".morphTargetInfluences"),
          (u.values = e),
          (r[s.uuid] = u),
          n.push(u);
        continue;
      }
      const f = t.createInterpolant(new t.ValueBufferType(1));
      u = r[s.uuid];
      for (let e = 0; e < u.times.length; e++)
        u.values[e * l + c] = f.evaluate(u.times[e]);
      for (let e = 0; e < t.times.length; e++) {
        const n = this.insertKeyframe(u, t.times[e]);
        u.values[n * l + c] = t.values[e];
      }
    }
    return (t.tracks = n), t;
  },
}),
  ((t, e, n) => {
    e in t
      ? Yt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  })(te, "Utils" + "", ee);
const ne = 0,
  re = 1,
  ie = 2,
  oe = 3,
  ae = 4,
  se = 5120,
  le = 5121,
  ce = 5122,
  ue = 5123,
  fe = 5124,
  pe = 5125,
  de = 5126,
  he = 34962,
  ge = 34963,
  me = 9728,
  ye = 9729,
  ve = 9984,
  we = 9985,
  xe = 9986,
  be = 9987,
  _e = 33071,
  Me = 33648,
  Te = 10497,
  Se = "KHR_mesh_quantization",
  Ee = {};
(Ee[bt] = me),
  (Ee[_t] = ve),
  (Ee[Mt] = xe),
  (Ee[Tt] = ye),
  (Ee[St] = we),
  (Ee[Et] = be),
  (Ee[It] = _e),
  (Ee[Ct] = Te),
  (Ee[At] = Me);
const Ie = {
    scale: "scale",
    position: "translation",
    quaternion: "rotation",
    morphTargetInfluences: "weights",
  },
  Ce = new E();
function Ae(t, e) {
  return (
    t.length === e.length &&
    t.every(function (t, n) {
      return t === e[n];
    })
  );
}
function Ue(t) {
  return 4 * Math.ceil(t / 4);
}
function Pe(t, e = 0) {
  const n = Ue(t.byteLength);
  if (n !== t.byteLength) {
    const r = new Uint8Array(n);
    if ((r.set(new Uint8Array(t)), 0 !== e))
      for (let i = t.byteLength; i < n; i++) r[i] = e;
    return r.buffer;
  }
  return t;
}
function Be() {
  return typeof document > "u" && typeof OffscreenCanvas < "u"
    ? new OffscreenCanvas(1, 1)
    : document.createElement("canvas");
}
function Le(t, e) {
  if (void 0 !== t.toBlob) return new Promise((n) => t.toBlob(n, e));
  let n;
  return (
    "image/jpeg" === e ? (n = 0.92) : "image/webp" === e && (n = 0.8),
    t.convertToBlob({ type: e, quality: n })
  );
}
class De {
  constructor() {
    (this.plugins = []),
      (this.options = {}),
      (this.pending = []),
      (this.buffers = []),
      (this.byteOffset = 0),
      (this.buffers = []),
      (this.nodeMap = new Map()),
      (this.skins = []),
      (this.extensionsUsed = {}),
      (this.extensionsRequired = {}),
      (this.uids = new Map()),
      (this.uid = 0),
      (this.json = {
        asset: { version: "2.0", generator: "THREE.GLTFExporter" },
      }),
      (this.cache = {
        meshes: new Map(),
        attributes: new Map(),
        attributesNormalized: new Map(),
        materials: new Map(),
        textures: new Map(),
        images: new Map(),
      });
  }
  setPlugins(t) {
    this.plugins = t;
  }
  async write(t, e, n = {}) {
    (this.options = Object.assign(
      {
        binary: !1,
        trs: !1,
        onlyVisible: !0,
        maxTextureSize: 1 / 0,
        animations: [],
        includeCustomExtensions: !1,
      },
      n
    )),
      this.options.animations.length > 0 && (this.options.trs = !0),
      this.processInput(t),
      await Promise.all(this.pending);
    const r = this,
      i = r.buffers,
      o = r.json;
    n = r.options;
    const a = r.extensionsUsed,
      s = r.extensionsRequired,
      l = new Blob(i, { type: "application/octet-stream" }),
      c = Object.keys(a),
      u = Object.keys(s);
    c.length > 0 && (o.extensionsUsed = c),
      u.length > 0 && (o.extensionsRequired = u),
      o.buffers && o.buffers.length > 0 && (o.buffers[0].byteLength = l.size),
      !0 === n.binary
        ? l.arrayBuffer().then((t) => {
            const n = Pe(t),
              r = new DataView(new ArrayBuffer(8));
            r.setUint32(0, n.byteLength, !0), r.setUint32(4, 5130562, !0);
            const i = Pe(
                (function (t) {
                  return new TextEncoder().encode(t).buffer;
                })(JSON.stringify(o)),
                32
              ),
              a = new DataView(new ArrayBuffer(8));
            a.setUint32(0, i.byteLength, !0), a.setUint32(4, 1313821514, !0);
            const s = new ArrayBuffer(12),
              l = new DataView(s);
            l.setUint32(0, 1179937895, !0), l.setUint32(4, 2, !0);
            const c =
              12 + a.byteLength + i.byteLength + r.byteLength + n.byteLength;
            l.setUint32(8, c, !0),
              new Blob([s, a, i, r, n], { type: "application/octet-stream" })
                .arrayBuffer()
                .then(e);
          })
        : o.buffers && o.buffers.length > 0
        ? Xt(l).then((t) => {
            (o.buffers[0].uri = t), e(o);
          })
        : e(o);
  }
  serializeUserData(t, e) {
    if (0 === Object.keys(t.userData).length) return;
    const n = this.options,
      r = this.extensionsUsed;
    try {
      const i = JSON.parse(JSON.stringify(t.userData));
      if (n.includeCustomExtensions && i.gltfExtensions) {
        void 0 === e.extensions && (e.extensions = {});
        for (const t in i.gltfExtensions)
          (e.extensions[t] = i.gltfExtensions[t]), (r[t] = !0);
        delete i.gltfExtensions;
      }
      Object.keys(i).length > 0 && (e.extras = i);
    } catch (i) {}
  }
  getUID(t, e = !1) {
    if (!1 === this.uids.has(t)) {
      const e = new Map();
      e.set(!0, this.uid++), e.set(!1, this.uid++), this.uids.set(t, e);
    }
    return this.uids.get(t).get(e);
  }
  isNormalizedNormalAttribute(t) {
    if (this.cache.attributesNormalized.has(t)) return !1;
    const e = new I();
    for (let n = 0, r = t.count; n < r; n++)
      if (Math.abs(e.fromBufferAttribute(t, n).length() - 1) > 5e-4) return !1;
    return !0;
  }
  createNormalizedNormalAttribute(t) {
    const e = this.cache;
    if (e.attributesNormalized.has(t)) return e.attributesNormalized.get(t);
    const n = t.clone(),
      r = new I();
    for (let i = 0, o = n.count; i < o; i++)
      r.fromBufferAttribute(n, i),
        0 === r.x && 0 === r.y && 0 === r.z ? r.setX(1) : r.normalize(),
        n.setXYZ(i, r.x, r.y, r.z);
    return e.attributesNormalized.set(t, n), n;
  }
  applyTextureTransform(t, e) {
    let n = !1;
    const r = {};
    (0 !== e.offset.x || 0 !== e.offset.y) &&
      ((r.offset = e.offset.toArray()), (n = !0)),
      0 !== e.rotation && ((r.rotation = e.rotation), (n = !0)),
      (1 !== e.repeat.x || 1 !== e.repeat.y) &&
        ((r.scale = e.repeat.toArray()), (n = !0)),
      n &&
        ((t.extensions = t.extensions || {}),
        (t.extensions.KHR_texture_transform = r),
        (this.extensionsUsed.KHR_texture_transform = !0));
  }
  buildMetalRoughTexture(t, e) {
    if (t === e) return t;
    function n(t) {
      return ("colorSpace" in t ? "srgb" === t.colorSpace : 3001 === t.encoding)
        ? function (t) {
            return t < 0.04045
              ? 0.0773993808 * t
              : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
          }
        : function (t) {
            return t;
          };
    }
    t instanceof ft && (t = $t(t)), e instanceof ft && (e = $t(e));
    const r = t ? t.image : null,
      i = e ? e.image : null,
      o = Math.max(r ? r.width : 0, i ? i.width : 0),
      a = Math.max(r ? r.height : 0, i ? i.height : 0),
      s = Be();
    (s.width = o), (s.height = a);
    const l = s.getContext("2d");
    (l.fillStyle = "#00ffff"), l.fillRect(0, 0, o, a);
    const c = l.getImageData(0, 0, o, a);
    if (r) {
      l.drawImage(r, 0, 0, o, a);
      const e = n(t),
        i = l.getImageData(0, 0, o, a).data;
      for (let t = 2; t < i.length; t += 4) c.data[t] = 256 * e(i[t] / 256);
    }
    if (i) {
      l.drawImage(i, 0, 0, o, a);
      const t = n(e),
        r = l.getImageData(0, 0, o, a).data;
      for (let e = 1; e < r.length; e += 4) c.data[e] = 256 * t(r[e] / 256);
    }
    l.putImageData(c, 0, 0);
    const u = (t || e).clone();
    return (
      (u.source = new pt(s).source),
      "colorSpace" in u ? (u.colorSpace = "") : (u.encoding = 3e3),
      (u.channel = (t || e).channel),
      t && e && (t.channel, e.channel),
      u
    );
  }
  processBuffer(t) {
    const e = this.json,
      n = this.buffers;
    return e.buffers || (e.buffers = [{ byteLength: 0 }]), n.push(t), 0;
  }
  processBufferView(t, e, n, r, i) {
    const o = this.json;
    let a;
    switch ((o.bufferViews || (o.bufferViews = []), e)) {
      case se:
      case le:
        a = 1;
        break;
      case ce:
      case ue:
        a = 2;
        break;
      default:
        a = 4;
    }
    const s = Ue(r * t.itemSize * a),
      l = new DataView(new ArrayBuffer(s));
    let c = 0;
    for (let f = n; f < n + r; f++)
      for (let n = 0; n < t.itemSize; n++) {
        let r;
        t.itemSize > 4
          ? (r = t.array[f * t.itemSize + n])
          : (0 === n
              ? (r = t.getX(f))
              : 1 === n
              ? (r = t.getY(f))
              : 2 === n
              ? (r = t.getZ(f))
              : 3 === n && (r = t.getW(f)),
            !0 === t.normalized && (r = dt.normalize(r, t.array))),
          e === de
            ? l.setFloat32(c, r, !0)
            : e === fe
            ? l.setInt32(c, r, !0)
            : e === pe
            ? l.setUint32(c, r, !0)
            : e === ce
            ? l.setInt16(c, r, !0)
            : e === ue
            ? l.setUint16(c, r, !0)
            : e === se
            ? l.setInt8(c, r)
            : e === le && l.setUint8(c, r),
          (c += a);
      }
    const u = {
      buffer: this.processBuffer(l.buffer),
      byteOffset: this.byteOffset,
      byteLength: s,
    };
    return (
      void 0 !== i && (u.target = i),
      i === he && (u.byteStride = t.itemSize * a),
      (this.byteOffset += s),
      o.bufferViews.push(u),
      { id: o.bufferViews.length - 1, byteLength: 0 }
    );
  }
  processBufferViewImage(t) {
    const e = this,
      n = e.json;
    return (
      n.bufferViews || (n.bufferViews = []),
      t.arrayBuffer().then((t) => {
        const r = Pe(t),
          i = {
            buffer: e.processBuffer(r),
            byteOffset: e.byteOffset,
            byteLength: r.byteLength,
          };
        return (e.byteOffset += r.byteLength), n.bufferViews.push(i) - 1;
      })
    );
  }
  processAccessor(t, e, n, r) {
    const i = this.json;
    let o;
    if (t.array.constructor === Float32Array) o = de;
    else if (t.array.constructor === Int32Array) o = fe;
    else if (t.array.constructor === Uint32Array) o = pe;
    else if (t.array.constructor === Int16Array) o = ce;
    else if (t.array.constructor === Uint16Array) o = ue;
    else if (t.array.constructor === Int8Array) o = se;
    else {
      if (t.array.constructor !== Uint8Array)
        throw new Error(
          "THREE.GLTFExporter: Unsupported bufferAttribute component type: " +
            t.array.constructor.name
        );
      o = le;
    }
    if ((void 0 === n && (n = 0), void 0 === r && (r = t.count), 0 === r))
      return null;
    const a = (function (t, e, n) {
      const r = {
        min: new Array(t.itemSize).fill(Number.POSITIVE_INFINITY),
        max: new Array(t.itemSize).fill(Number.NEGATIVE_INFINITY),
      };
      for (let i = e; i < e + n; i++)
        for (let e = 0; e < t.itemSize; e++) {
          let n;
          t.itemSize > 4
            ? (n = t.array[i * t.itemSize + e])
            : (0 === e
                ? (n = t.getX(i))
                : 1 === e
                ? (n = t.getY(i))
                : 2 === e
                ? (n = t.getZ(i))
                : 3 === e && (n = t.getW(i)),
              !0 === t.normalized && (n = dt.normalize(n, t.array))),
            (r.min[e] = Math.min(r.min[e], n)),
            (r.max[e] = Math.max(r.max[e], n));
        }
      return r;
    })(t, n, r);
    let s;
    void 0 !== e && (s = t === e.index ? ge : he);
    const l = this.processBufferView(t, o, n, r, s),
      c = {
        bufferView: l.id,
        byteOffset: l.byteOffset,
        componentType: o,
        count: r,
        max: a.max,
        min: a.min,
        type: {
          1: "SCALAR",
          2: "VEC2",
          3: "VEC3",
          4: "VEC4",
          9: "MAT3",
          16: "MAT4",
        }[t.itemSize],
      };
    return (
      !0 === t.normalized && (c.normalized = !0),
      i.accessors || (i.accessors = []),
      i.accessors.push(c) - 1
    );
  }
  processImage(t, e, n, r = "image/png") {
    if (null !== t) {
      const e = this,
        i = e.cache,
        o = e.json,
        a = e.options,
        s = e.pending;
      i.images.has(t) || i.images.set(t, {});
      const l = i.images.get(t),
        c = r + ":flipY/" + n.toString();
      if (void 0 !== l[c]) return l[c];
      o.images || (o.images = []);
      const u = { mimeType: r },
        f = Be();
      (f.width = Math.min(t.width, a.maxTextureSize)),
        (f.height = Math.min(t.height, a.maxTextureSize));
      const p = f.getContext("2d");
      if (
        (!0 === n && (p.translate(0, f.height), p.scale(1, -1)),
        void 0 !== t.data)
      ) {
        t.width > a.maxTextureSize || (t.height, a.maxTextureSize);
        const e = new Uint8ClampedArray(t.height * t.width * 4);
        for (let n = 0; n < e.length; n += 4)
          (e[n + 0] = t.data[n + 0]),
            (e[n + 1] = t.data[n + 1]),
            (e[n + 2] = t.data[n + 2]),
            (e[n + 3] = t.data[n + 3]);
        p.putImageData(new ImageData(e, t.width, t.height), 0, 0);
      } else p.drawImage(t, 0, 0, f.width, f.height);
      !0 === a.binary
        ? s.push(
            Le(f, r)
              .then((t) => e.processBufferViewImage(t))
              .then((t) => {
                u.bufferView = t;
              })
          )
        : void 0 !== f.toDataURL
        ? (u.uri = f.toDataURL(r))
        : s.push(
            Le(f, r)
              .then(Xt)
              .then((t) => {
                u.uri = t;
              })
          );
      const d = o.images.push(u) - 1;
      return (l[c] = d), d;
    }
    throw new Error(
      "THREE.GLTFExporter: No valid image data found. Unable to process texture."
    );
  }
  processSampler(t) {
    const e = this.json;
    e.samplers || (e.samplers = []);
    const n = {
      magFilter: Ee[t.magFilter],
      minFilter: Ee[t.minFilter],
      wrapS: Ee[t.wrapS],
      wrapT: Ee[t.wrapT],
    };
    return e.samplers.push(n) - 1;
  }
  processTexture(t) {
    const e = this.options,
      n = this.cache,
      r = this.json;
    if (n.textures.has(t)) return n.textures.get(t);
    r.textures || (r.textures = []),
      t instanceof ft && (t = $t(t, e.maxTextureSize));
    let i = t.userData.mimeType;
    "image/webp" === i && (i = "image/png");
    const o = {
      sampler: this.processSampler(t),
      source: this.processImage(t.image, t.format, t.flipY, i),
    };
    t.name && (o.name = t.name),
      this._invokeAll(function (e) {
        e.writeTexture && e.writeTexture(t, o);
      });
    const a = r.textures.push(o) - 1;
    return n.textures.set(t, a), a;
  }
  processMaterial(t) {
    const e = this.cache,
      n = this.json;
    if (e.materials.has(t)) return e.materials.get(t);
    if (t.isShaderMaterial) return null;
    n.materials || (n.materials = []);
    const r = { pbrMetallicRoughness: {} };
    !0 !== t.isMeshStandardMaterial && t.isMeshBasicMaterial;
    const i = t.color.toArray().concat([t.opacity]);
    if (
      (Ae(i, [1, 1, 1, 1]) || (r.pbrMetallicRoughness.baseColorFactor = i),
      t.isMeshStandardMaterial
        ? ((r.pbrMetallicRoughness.metallicFactor = t.metalness),
          (r.pbrMetallicRoughness.roughnessFactor = t.roughness))
        : ((r.pbrMetallicRoughness.metallicFactor = 0.5),
          (r.pbrMetallicRoughness.roughnessFactor = 0.5)),
      t.metalnessMap || t.roughnessMap)
    ) {
      const e = this.buildMetalRoughTexture(t.metalnessMap, t.roughnessMap),
        n = { index: this.processTexture(e), channel: e.channel };
      this.applyTextureTransform(n, e),
        (r.pbrMetallicRoughness.metallicRoughnessTexture = n);
    }
    if (t.map) {
      const e = { index: this.processTexture(t.map), texCoord: t.map.channel };
      this.applyTextureTransform(e, t.map),
        (r.pbrMetallicRoughness.baseColorTexture = e);
    }
    if (t.emissive) {
      const e = t.emissive;
      if (
        (Math.max(e.r, e.g, e.b) > 0 &&
          (r.emissiveFactor = t.emissive.toArray()),
        t.emissiveMap)
      ) {
        const e = {
          index: this.processTexture(t.emissiveMap),
          texCoord: t.emissiveMap.channel,
        };
        this.applyTextureTransform(e, t.emissiveMap), (r.emissiveTexture = e);
      }
    }
    if (t.normalMap) {
      const e = {
        index: this.processTexture(t.normalMap),
        texCoord: t.normalMap.channel,
      };
      t.normalScale && 1 !== t.normalScale.x && (e.scale = t.normalScale.x),
        this.applyTextureTransform(e, t.normalMap),
        (r.normalTexture = e);
    }
    if (t.aoMap) {
      const e = {
        index: this.processTexture(t.aoMap),
        texCoord: t.aoMap.channel,
      };
      1 !== t.aoMapIntensity && (e.strength = t.aoMapIntensity),
        this.applyTextureTransform(e, t.aoMap),
        (r.occlusionTexture = e);
    }
    t.transparent
      ? (r.alphaMode = "BLEND")
      : t.alphaTest > 0 &&
        ((r.alphaMode = "MASK"), (r.alphaCutoff = t.alphaTest)),
      t.side === Y && (r.doubleSided = !0),
      "" !== t.name && (r.name = t.name),
      this.serializeUserData(t, r),
      this._invokeAll(function (e) {
        e.writeMaterial && e.writeMaterial(t, r);
      });
    const o = n.materials.push(r) - 1;
    return e.materials.set(t, o), o;
  }
  processMesh(t) {
    const e = this.cache,
      n = this.json,
      r = [t.geometry.uuid];
    if (Array.isArray(t.material))
      for (let v = 0, w = t.material.length; v < w; v++)
        r.push(t.material[v].uuid);
    else r.push(t.material.uuid);
    const i = r.join(":");
    if (e.meshes.has(i)) return e.meshes.get(i);
    const o = t.geometry;
    let a;
    a = t.isLineSegments
      ? re
      : t.isLineLoop
      ? ie
      : t.isLine
      ? oe
      : t.isPoints
      ? ne
      : t.material.wireframe
      ? re
      : ae;
    const s = {},
      l = {},
      c = [],
      u = [],
      f = {
        ...(Gt >= 152
          ? {
              uv: "TEXCOORD_0",
              uv1: "TEXCOORD_1",
              uv2: "TEXCOORD_2",
              uv3: "TEXCOORD_3",
            }
          : { uv: "TEXCOORD_0", uv2: "TEXCOORD_1" }),
        color: "COLOR_0",
        skinWeight: "WEIGHTS_0",
        skinIndex: "JOINTS_0",
      },
      p = o.getAttribute("normal");
    void 0 !== p &&
      !this.isNormalizedNormalAttribute(p) &&
      o.setAttribute("normal", this.createNormalizedNormalAttribute(p));
    let d = null;
    for (let v in o.attributes) {
      if ("morph" === v.slice(0, 5)) continue;
      const t = o.attributes[v];
      if (
        ((v = f[v] || v.toUpperCase()),
        /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(
          v
        ) || (v = "_" + v),
        e.attributes.has(this.getUID(t)))
      ) {
        l[v] = e.attributes.get(this.getUID(t));
        continue;
      }
      d = null;
      const n = t.array;
      "JOINTS_0" === v &&
        !(n instanceof Uint16Array) &&
        !(n instanceof Uint8Array) &&
        (d = new gt(new Uint16Array(n), t.itemSize, t.normalized));
      const r = this.processAccessor(d || t, o);
      null !== r &&
        (v.startsWith("_") || this.detectMeshQuantization(v, t),
        (l[v] = r),
        e.attributes.set(this.getUID(t), r));
    }
    if (
      (void 0 !== p && o.setAttribute("normal", p), 0 === Object.keys(l).length)
    )
      return null;
    if (
      void 0 !== t.morphTargetInfluences &&
      t.morphTargetInfluences.length > 0
    ) {
      const n = [],
        r = [],
        i = {};
      if (void 0 !== t.morphTargetDictionary)
        for (const e in t.morphTargetDictionary)
          i[t.morphTargetDictionary[e]] = e;
      for (let a = 0; a < t.morphTargetInfluences.length; ++a) {
        const s = {};
        let l = !1;
        for (const t in o.morphAttributes) {
          if ("position" !== t && "normal" !== t) {
            l || (l = !0);
            continue;
          }
          const n = o.morphAttributes[t][a],
            r = t.toUpperCase(),
            i = o.attributes[t];
          if (e.attributes.has(this.getUID(n, !0))) {
            s[r] = e.attributes.get(this.getUID(n, !0));
            continue;
          }
          const c = n.clone();
          if (!o.morphTargetsRelative)
            for (let t = 0, e = n.count; t < e; t++)
              for (let r = 0; r < n.itemSize; r++)
                0 === r && c.setX(t, n.getX(t) - i.getX(t)),
                  1 === r && c.setY(t, n.getY(t) - i.getY(t)),
                  2 === r && c.setZ(t, n.getZ(t) - i.getZ(t)),
                  3 === r && c.setW(t, n.getW(t) - i.getW(t));
          (s[r] = this.processAccessor(c, o)),
            e.attributes.set(this.getUID(i, !0), s[r]);
        }
        u.push(s),
          n.push(t.morphTargetInfluences[a]),
          void 0 !== t.morphTargetDictionary && r.push(i[a]);
      }
      (s.weights = n),
        r.length > 0 && ((s.extras = {}), (s.extras.targetNames = r));
    }
    const h = Array.isArray(t.material);
    if (h && 0 === o.groups.length) return null;
    const g = h ? t.material : [t.material],
      m = h ? o.groups : [{ materialIndex: 0, start: void 0, count: void 0 }];
    for (let v = 0, w = m.length; v < w; v++) {
      const t = { mode: a, attributes: l };
      if (
        (this.serializeUserData(o, t),
        u.length > 0 && (t.targets = u),
        null !== o.index)
      ) {
        let n = this.getUID(o.index);
        (void 0 !== m[v].start || void 0 !== m[v].count) &&
          (n += ":" + m[v].start + ":" + m[v].count),
          e.attributes.has(n)
            ? (t.indices = e.attributes.get(n))
            : ((t.indices = this.processAccessor(
                o.index,
                o,
                m[v].start,
                m[v].count
              )),
              e.attributes.set(n, t.indices)),
          null === t.indices && delete t.indices;
      }
      const n = this.processMaterial(g[m[v].materialIndex]);
      null !== n && (t.material = n), c.push(t);
    }
    (s.primitives = c),
      n.meshes || (n.meshes = []),
      this._invokeAll(function (e) {
        e.writeMesh && e.writeMesh(t, s);
      });
    const y = n.meshes.push(s) - 1;
    return e.meshes.set(i, y), y;
  }
  detectMeshQuantization(t, e) {
    if (this.extensionsUsed[Se]) return;
    let n;
    switch (e.array.constructor) {
      case Int8Array:
        n = "byte";
        break;
      case Uint8Array:
        n = "unsigned byte";
        break;
      case Int16Array:
        n = "short";
        break;
      case Uint16Array:
        n = "unsigned short";
        break;
      default:
        return;
    }
    e.normalized && (n += " normalized");
    const r = t.split("_", 1)[0];
    Qt[r] &&
      Qt[r].includes(n) &&
      ((this.extensionsUsed[Se] = !0), (this.extensionsRequired[Se] = !0));
  }
  processCamera(t) {
    const e = this.json;
    e.cameras || (e.cameras = []);
    const n = t.isOrthographicCamera,
      r = { type: n ? "orthographic" : "perspective" };
    return (
      n
        ? (r.orthographic = {
            xmag: 2 * t.right,
            ymag: 2 * t.top,
            zfar: t.far <= 0 ? 0.001 : t.far,
            znear: t.near < 0 ? 0 : t.near,
          })
        : (r.perspective = {
            aspectRatio: t.aspect,
            yfov: dt.degToRad(t.fov),
            zfar: t.far <= 0 ? 0.001 : t.far,
            znear: t.near < 0 ? 0 : t.near,
          }),
      "" !== t.name && (r.name = t.type),
      e.cameras.push(r) - 1
    );
  }
  processAnimation(t, e) {
    const n = this.json,
      r = this.nodeMap;
    n.animations || (n.animations = []);
    const i = (t = te.Utils.mergeMorphTargetTracks(t.clone(), e)).tracks,
      o = [],
      a = [];
    for (let s = 0; s < i.length; ++s) {
      const t = i[s],
        n = Z.parseTrackName(t.name);
      let l = Z.findNode(e, n.nodeName);
      const c = Ie[n.propertyName];
      if (
        ("bones" === n.objectName &&
          (l =
            !0 === l.isSkinnedMesh
              ? l.skeleton.getBoneByName(n.objectIndex)
              : void 0),
        !l || !c)
      )
        return null;
      const u = 1;
      let f,
        p = t.values.length / t.times.length;
      c === Ie.morphTargetInfluences && (p /= l.morphTargetInfluences.length),
        !0 === t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline
          ? ((f = "CUBICSPLINE"), (p /= 3))
          : (f = t.getInterpolation() === mt ? "STEP" : "LINEAR"),
        a.push({
          input: this.processAccessor(new gt(t.times, u)),
          output: this.processAccessor(new gt(t.values, p)),
          interpolation: f,
        }),
        o.push({ sampler: a.length - 1, target: { node: r.get(l), path: c } });
    }
    return (
      n.animations.push({
        name: t.name || "clip_" + n.animations.length,
        samplers: a,
        channels: o,
      }),
      n.animations.length - 1
    );
  }
  processSkin(t) {
    const e = this.json,
      n = this.nodeMap,
      r = e.nodes[n.get(t)],
      i = t.skeleton;
    if (void 0 === i) return null;
    const o = t.skeleton.bones[0];
    if (void 0 === o) return null;
    const a = [],
      s = new Float32Array(16 * i.bones.length),
      l = new F();
    for (let c = 0; c < i.bones.length; ++c)
      a.push(n.get(i.bones[c])),
        l.copy(i.boneInverses[c]),
        l.multiply(t.bindMatrix).toArray(s, 16 * c);
    return (
      void 0 === e.skins && (e.skins = []),
      e.skins.push({
        inverseBindMatrices: this.processAccessor(new gt(s, 16)),
        joints: a,
        skeleton: n.get(o),
      }),
      (r.skin = e.skins.length - 1)
    );
  }
  processNode(t) {
    const e = this.json,
      n = this.options,
      r = this.nodeMap;
    e.nodes || (e.nodes = []);
    const i = {};
    if (n.trs) {
      const e = t.quaternion.toArray(),
        n = t.position.toArray(),
        r = t.scale.toArray();
      Ae(e, [0, 0, 0, 1]) || (i.rotation = e),
        Ae(n, [0, 0, 0]) || (i.translation = n),
        Ae(r, [1, 1, 1]) || (i.scale = r);
    } else
      t.matrixAutoUpdate && t.updateMatrix(),
        !1 ===
          (function (t) {
            return Ae(
              t.elements,
              [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            );
          })(t.matrix) && (i.matrix = t.matrix.elements);
    if (
      ("" !== t.name && (i.name = String(t.name)),
      this.serializeUserData(t, i),
      t.isMesh || t.isLine || t.isPoints)
    ) {
      const e = this.processMesh(t);
      null !== e && (i.mesh = e);
    } else t.isCamera && (i.camera = this.processCamera(t));
    if ((t.isSkinnedMesh && this.skins.push(t), t.children.length > 0)) {
      const e = [];
      for (let r = 0, i = t.children.length; r < i; r++) {
        const i = t.children[r];
        if (i.visible || !1 === n.onlyVisible) {
          const t = this.processNode(i);
          null !== t && e.push(t);
        }
      }
      e.length > 0 && (i.children = e);
    }
    this._invokeAll(function (e) {
      e.writeNode && e.writeNode(t, i);
    });
    const o = e.nodes.push(i) - 1;
    return r.set(t, o), o;
  }
  processScene(t) {
    const e = this.json,
      n = this.options;
    e.scenes || ((e.scenes = []), (e.scene = 0));
    const r = {};
    "" !== t.name && (r.name = t.name), e.scenes.push(r);
    const i = [];
    for (let o = 0, a = t.children.length; o < a; o++) {
      const e = t.children[o];
      if (e.visible || !1 === n.onlyVisible) {
        const t = this.processNode(e);
        null !== t && i.push(t);
      }
    }
    i.length > 0 && (r.nodes = i), this.serializeUserData(t, r);
  }
  processObjects(t) {
    const e = new yt();
    e.name = "AuxScene";
    for (let n = 0; n < t.length; n++) e.children.push(t[n]);
    this.processScene(e);
  }
  processInput(t) {
    const e = this.options;
    (t = t instanceof Array ? t : [t]),
      this._invokeAll(function (e) {
        e.beforeParse && e.beforeParse(t);
      });
    const n = [];
    for (let r = 0; r < t.length; r++)
      t[r] instanceof yt ? this.processScene(t[r]) : n.push(t[r]);
    n.length > 0 && this.processObjects(n);
    for (let r = 0; r < this.skins.length; ++r) this.processSkin(this.skins[r]);
    for (let r = 0; r < e.animations.length; ++r)
      this.processAnimation(e.animations[r], t[0]);
    this._invokeAll(function (e) {
      e.afterParse && e.afterParse(t);
    });
  }
  _invokeAll(t) {
    for (let e = 0, n = this.plugins.length; e < n; e++) t(this.plugins[e]);
  }
}
class ze {
  constructor(t) {
    (this.writer = t), (this.name = "KHR_lights_punctual");
  }
  writeNode(t, e) {
    if (!t.isLight) return;
    if (!t.isDirectionalLight && !t.isPointLight && !t.isSpotLight) return;
    const n = this.writer,
      r = n.json,
      i = n.extensionsUsed,
      o = {};
    t.name && (o.name = t.name),
      (o.color = t.color.toArray()),
      (o.intensity = t.intensity),
      t.isDirectionalLight
        ? (o.type = "directional")
        : t.isPointLight
        ? ((o.type = "point"), t.distance > 0 && (o.range = t.distance))
        : t.isSpotLight &&
          ((o.type = "spot"),
          t.distance > 0 && (o.range = t.distance),
          (o.spot = {}),
          (o.spot.innerConeAngle = (t.penumbra - 1) * t.angle * -1),
          (o.spot.outerConeAngle = t.angle)),
      void 0 !== t.decay && t.decay,
      t.target &&
        (t.target.parent !== t ||
          0 !== t.target.position.x ||
          0 !== t.target.position.y ||
          t.target.position.z),
      i[this.name] ||
        ((r.extensions = r.extensions || {}),
        (r.extensions[this.name] = { lights: [] }),
        (i[this.name] = !0));
    const a = r.extensions[this.name].lights;
    a.push(o),
      (e.extensions = e.extensions || {}),
      (e.extensions[this.name] = { light: a.length - 1 });
  }
}
let Re = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_unlit");
    }
    writeMaterial(t, e) {
      if (!t.isMeshBasicMaterial) return;
      const n = this.writer.extensionsUsed;
      (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = {}),
        (n[this.name] = !0),
        (e.pbrMetallicRoughness.metallicFactor = 0),
        (e.pbrMetallicRoughness.roughnessFactor = 0.9);
    }
  },
  ke = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_clearcoat");
    }
    writeMaterial(t, e) {
      if (!t.isMeshPhysicalMaterial || 0 === t.clearcoat) return;
      const n = this.writer,
        r = n.extensionsUsed,
        i = {};
      if (((i.clearcoatFactor = t.clearcoat), t.clearcoatMap)) {
        const e = {
          index: n.processTexture(t.clearcoatMap),
          texCoord: t.clearcoatMap.channel,
        };
        n.applyTextureTransform(e, t.clearcoatMap), (i.clearcoatTexture = e);
      }
      if (
        ((i.clearcoatRoughnessFactor = t.clearcoatRoughness),
        t.clearcoatRoughnessMap)
      ) {
        const e = {
          index: n.processTexture(t.clearcoatRoughnessMap),
          texCoord: t.clearcoatRoughnessMap.channel,
        };
        n.applyTextureTransform(e, t.clearcoatRoughnessMap),
          (i.clearcoatRoughnessTexture = e);
      }
      if (t.clearcoatNormalMap) {
        const e = {
          index: n.processTexture(t.clearcoatNormalMap),
          texCoord: t.clearcoatNormalMap.channel,
        };
        n.applyTextureTransform(e, t.clearcoatNormalMap),
          (i.clearcoatNormalTexture = e);
      }
      (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = i),
        (r[this.name] = !0);
    }
  },
  je = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_iridescence");
    }
    writeMaterial(t, e) {
      if (!t.isMeshPhysicalMaterial || 0 === t.iridescence) return;
      const n = this.writer,
        r = n.extensionsUsed,
        i = {};
      if (((i.iridescenceFactor = t.iridescence), t.iridescenceMap)) {
        const e = {
          index: n.processTexture(t.iridescenceMap),
          texCoord: t.iridescenceMap.channel,
        };
        n.applyTextureTransform(e, t.iridescenceMap),
          (i.iridescenceTexture = e);
      }
      if (
        ((i.iridescenceIor = t.iridescenceIOR),
        (i.iridescenceThicknessMinimum = t.iridescenceThicknessRange[0]),
        (i.iridescenceThicknessMaximum = t.iridescenceThicknessRange[1]),
        t.iridescenceThicknessMap)
      ) {
        const e = {
          index: n.processTexture(t.iridescenceThicknessMap),
          texCoord: t.iridescenceThicknessMap.channel,
        };
        n.applyTextureTransform(e, t.iridescenceThicknessMap),
          (i.iridescenceThicknessTexture = e);
      }
      (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = i),
        (r[this.name] = !0);
    }
  },
  Fe = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_transmission");
    }
    writeMaterial(t, e) {
      if (!t.isMeshPhysicalMaterial || 0 === t.transmission) return;
      const n = this.writer,
        r = n.extensionsUsed,
        i = {};
      if (((i.transmissionFactor = t.transmission), t.transmissionMap)) {
        const e = {
          index: n.processTexture(t.transmissionMap),
          texCoord: t.transmissionMap.channel,
        };
        n.applyTextureTransform(e, t.transmissionMap),
          (i.transmissionTexture = e);
      }
      (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = i),
        (r[this.name] = !0);
    }
  },
  Ne = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_volume");
    }
    writeMaterial(t, e) {
      if (!t.isMeshPhysicalMaterial || 0 === t.transmission) return;
      const n = this.writer,
        r = n.extensionsUsed,
        i = {};
      if (((i.thicknessFactor = t.thickness), t.thicknessMap)) {
        const e = {
          index: n.processTexture(t.thicknessMap),
          texCoord: t.thicknessMap.channel,
        };
        n.applyTextureTransform(e, t.thicknessMap), (i.thicknessTexture = e);
      }
      (i.attenuationDistance = t.attenuationDistance),
        (i.attenuationColor = t.attenuationColor.toArray()),
        (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = i),
        (r[this.name] = !0);
    }
  },
  Oe = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_ior");
    }
    writeMaterial(t, e) {
      if (!t.isMeshPhysicalMaterial || 1.5 === t.ior) return;
      const n = this.writer.extensionsUsed,
        r = {};
      (r.ior = t.ior),
        (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = r),
        (n[this.name] = !0);
    }
  },
  Ve = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_specular");
    }
    writeMaterial(t, e) {
      if (
        !t.isMeshPhysicalMaterial ||
        (1 === t.specularIntensity &&
          t.specularColor.equals(Ce) &&
          !t.specularIntensityMap &&
          !t.specularColorTexture)
      )
        return;
      const n = this.writer,
        r = n.extensionsUsed,
        i = {};
      if (t.specularIntensityMap) {
        const e = {
          index: n.processTexture(t.specularIntensityMap),
          texCoord: t.specularIntensityMap.channel,
        };
        n.applyTextureTransform(e, t.specularIntensityMap),
          (i.specularTexture = e);
      }
      if (t.specularColorMap) {
        const e = {
          index: n.processTexture(t.specularColorMap),
          texCoord: t.specularColorMap.channel,
        };
        n.applyTextureTransform(e, t.specularColorMap),
          (i.specularColorTexture = e);
      }
      (i.specularFactor = t.specularIntensity),
        (i.specularColorFactor = t.specularColor.toArray()),
        (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = i),
        (r[this.name] = !0);
    }
  },
  He = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_sheen");
    }
    writeMaterial(t, e) {
      if (!t.isMeshPhysicalMaterial || 0 == t.sheen) return;
      const n = this.writer,
        r = n.extensionsUsed,
        i = {};
      if (t.sheenRoughnessMap) {
        const e = {
          index: n.processTexture(t.sheenRoughnessMap),
          texCoord: t.sheenRoughnessMap.channel,
        };
        n.applyTextureTransform(e, t.sheenRoughnessMap),
          (i.sheenRoughnessTexture = e);
      }
      if (t.sheenColorMap) {
        const e = {
          index: n.processTexture(t.sheenColorMap),
          texCoord: t.sheenColorMap.channel,
        };
        n.applyTextureTransform(e, t.sheenColorMap), (i.sheenColorTexture = e);
      }
      (i.sheenRoughnessFactor = t.sheenRoughness),
        (i.sheenColorFactor = t.sheenColor.toArray()),
        (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = i),
        (r[this.name] = !0);
    }
  },
  We = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_anisotropy");
    }
    writeMaterial(t, e) {
      if (!t.isMeshPhysicalMaterial || 0 == t.anisotropy) return;
      const n = this.writer,
        r = n.extensionsUsed,
        i = {};
      if (t.anisotropyMap) {
        const e = { index: n.processTexture(t.anisotropyMap) };
        n.applyTextureTransform(e, t.anisotropyMap), (i.anisotropyTexture = e);
      }
      (i.anisotropyStrength = t.anisotropy),
        (i.anisotropyRotation = t.anisotropyRotation),
        (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = i),
        (r[this.name] = !0);
    }
  },
  Ge = class {
    constructor(t) {
      (this.writer = t), (this.name = "KHR_materials_emissive_strength");
    }
    writeMaterial(t, e) {
      if (!t.isMeshStandardMaterial || 1 === t.emissiveIntensity) return;
      const n = this.writer.extensionsUsed,
        r = {};
      (r.emissiveStrength = t.emissiveIntensity),
        (e.extensions = e.extensions || {}),
        (e.extensions[this.name] = r),
        (n[this.name] = !0);
    }
  };
var Ye = Uint8Array,
  Xe = Uint16Array,
  Ke = Uint32Array,
  qe = new Ye([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  Ze = new Ye([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  Je = function (t, e) {
    for (var n = new Xe(31), r = 0; r < 31; ++r) n[r] = e += 1 << t[r - 1];
    var i = new Ke(n[30]);
    for (r = 1; r < 30; ++r)
      for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r;
    return [n, i];
  },
  $e = Je(qe, 2),
  Qe = $e[0],
  tn = $e[1];
(Qe[28] = 258), (tn[258] = 28), Je(Ze, 0);
for (var en = new Xe(32768), nn = 0; nn < 32768; ++nn) {
  var rn = ((43690 & nn) >>> 1) | ((21845 & nn) << 1);
  (rn =
    ((61680 & (rn = ((52428 & rn) >>> 2) | ((13107 & rn) << 2))) >>> 4) |
    ((3855 & rn) << 4)),
    (en[nn] = (((65280 & rn) >>> 8) | ((255 & rn) << 8)) >>> 1);
}
var on = new Ye(288);
for (nn = 0; nn < 144; ++nn) on[nn] = 8;
for (nn = 144; nn < 256; ++nn) on[nn] = 9;
for (nn = 256; nn < 280; ++nn) on[nn] = 7;
for (nn = 280; nn < 288; ++nn) on[nn] = 8;
var an = new Ye(32);
for (nn = 0; nn < 32; ++nn) an[nn] = 5;
var sn = new Ye(0),
  ln = typeof TextDecoder < "u" && new TextDecoder();
try {
  ln.decode(sn, { stream: !0 }), 1;
} catch {}
var cn = Object.defineProperty;
const un = class extends $ {
  constructor(t, e = {}) {
    super(t),
      (this.isReflector = !0),
      (this.type = "Reflector"),
      (this.camera = new at());
    const n = this,
      r = void 0 !== e.color ? new E(e.color) : new E(8355711),
      i = e.textureWidth || 512,
      o = e.textureHeight || 512,
      a = e.clipBias || 0,
      s = e.shader || un.ReflectorShader,
      l = void 0 !== e.multisample ? e.multisample : 4,
      c = new D(),
      u = new I(),
      f = new I(),
      p = new I(),
      d = new F(),
      h = new I(0, 0, -1),
      g = new H(),
      m = new I(),
      y = new I(),
      v = new H(),
      w = new F(),
      x = this.camera,
      b = new st(i, o, { samples: l, type: lt }),
      _ = new C({
        uniforms: A.clone(s.uniforms),
        fragmentShader: s.fragmentShader,
        vertexShader: s.vertexShader,
      });
    (_.uniforms.tDiffuse.value = b.texture),
      (_.uniforms.color.value = r),
      (_.uniforms.textureMatrix.value = w),
      (this.material = _),
      (this.onBeforeRender = function (t, e, r) {
        if (
          (f.setFromMatrixPosition(n.matrixWorld),
          p.setFromMatrixPosition(r.matrixWorld),
          d.extractRotation(n.matrixWorld),
          u.set(0, 0, 1),
          u.applyMatrix4(d),
          m.subVectors(f, p),
          m.dot(u) > 0)
        )
          return;
        m.reflect(u).negate(),
          m.add(f),
          d.extractRotation(r.matrixWorld),
          h.set(0, 0, -1),
          h.applyMatrix4(d),
          h.add(p),
          y.subVectors(f, h),
          y.reflect(u).negate(),
          y.add(f),
          x.position.copy(m),
          x.up.set(0, 1, 0),
          x.up.applyMatrix4(d),
          x.up.reflect(u),
          x.lookAt(y),
          (x.far = r.far),
          x.updateMatrixWorld(),
          x.projectionMatrix.copy(r.projectionMatrix),
          w.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
          w.multiply(x.projectionMatrix),
          w.multiply(x.matrixWorldInverse),
          w.multiply(n.matrixWorld),
          c.setFromNormalAndCoplanarPoint(u, f),
          c.applyMatrix4(x.matrixWorldInverse),
          g.set(c.normal.x, c.normal.y, c.normal.z, c.constant);
        const i = x.projectionMatrix;
        (v.x = (Math.sign(g.x) + i.elements[8]) / i.elements[0]),
          (v.y = (Math.sign(g.y) + i.elements[9]) / i.elements[5]),
          (v.z = -1),
          (v.w = (1 + i.elements[10]) / i.elements[14]),
          g.multiplyScalar(2 / g.dot(v)),
          (i.elements[2] = g.x),
          (i.elements[6] = g.y),
          (i.elements[10] = g.z + 1 - a),
          (i.elements[14] = g.w),
          (n.visible = !1);
        const o = t.getRenderTarget(),
          s = t.xr.enabled,
          l = t.shadowMap.autoUpdate,
          _ = t.toneMapping;
        let M = !1;
        (M =
          "outputColorSpace" in t
            ? "srgb" === t.outputColorSpace
            : 3001 === t.outputEncoding),
          (t.xr.enabled = !1),
          (t.shadowMap.autoUpdate = !1),
          "outputColorSpace" in t
            ? (t.outputColorSpace = "srgb-linear")
            : (t.outputEncoding = 3e3),
          (t.toneMapping = ct),
          t.setRenderTarget(b),
          t.state.buffers.depth.setMask(!0),
          !1 === t.autoClear && t.clear(),
          t.render(e, x),
          (t.xr.enabled = s),
          (t.shadowMap.autoUpdate = l),
          (t.toneMapping = _),
          "outputColorSpace" in t
            ? (t.outputColorSpace = M ? "srgb" : "srgb-linear")
            : (t.outputEncoding = M ? 3001 : 3e3),
          t.setRenderTarget(o);
        const T = r.viewport;
        void 0 !== T && t.state.viewport(T), (n.visible = !0);
      }),
      (this.getRenderTarget = function () {
        return b;
      }),
      (this.dispose = function () {
        b.dispose(), n.material.dispose();
      });
  }
};
let fn = un;
((t, e, n) => {
  ((t, e, n) => {
    e in t
      ? cn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (t[e] = n);
  })(t, e + "", n);
})(fn, "ReflectorShader", {
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
  },
  vertexShader:
    "\n\t\tuniform mat4 textureMatrix;\n\t\tvarying vec4 vUv;\n\n\t\t#include <common>\n\t\t#include <logdepthbuf_pars_vertex>\n\n\t\tvoid main() {\n\n\t\t\tvUv = textureMatrix * vec4( position, 1.0 );\n\n\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n\t\t\t#include <logdepthbuf_vertex>\n\n\t\t}",
  fragmentShader: `\n\t\tuniform vec3 color;\n\t\tuniform sampler2D tDiffuse;\n\t\tvarying vec4 vUv;\n\n\t\t#include <logdepthbuf_pars_fragment>\n\n\t\tfloat blendOverlay( float base, float blend ) {\n\n\t\t\treturn( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );\n\n\t\t}\n\n\t\tvec3 blendOverlay( vec3 base, vec3 blend ) {\n\n\t\t\treturn vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\t#include <logdepthbuf_fragment>\n\n\t\t\tvec4 base = texture2DProj( tDiffuse, vUv );\n\t\t\tgl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );\n\n\t\t\t#include <tonemapping_fragment>\n\t\t\t#include <${
    Gt >= 154 ? "colorspace_fragment" : "encodings_fragment"
  }>\n\n\t\t}`,
});
var pn = Object.defineProperty,
  dn = (t, e, n) => (
    ((t, e, n) => {
      e in t
        ? pn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n);
    })(t, "symbol" != typeof e ? e + "" : e, n),
    n
  );
const hn = {
    uniforms: {
      turbidity: { value: 2 },
      rayleigh: { value: 1 },
      mieCoefficient: { value: 0.005 },
      mieDirectionalG: { value: 0.8 },
      sunPosition: { value: new I() },
      up: { value: new I(0, 1, 0) },
    },
    vertexShader:
      "\n      uniform vec3 sunPosition;\n      uniform float rayleigh;\n      uniform float turbidity;\n      uniform float mieCoefficient;\n      uniform vec3 up;\n\n      varying vec3 vWorldPosition;\n      varying vec3 vSunDirection;\n      varying float vSunfade;\n      varying vec3 vBetaR;\n      varying vec3 vBetaM;\n      varying float vSunE;\n\n      // constants for atmospheric scattering\n      const float e = 2.71828182845904523536028747135266249775724709369995957;\n      const float pi = 3.141592653589793238462643383279502884197169;\n\n      // wavelength of used primaries, according to preetham\n      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );\n      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:\n      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))\n      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );\n\n      // mie stuff\n      // K coefficient for the primaries\n      const float v = 4.0;\n      const vec3 K = vec3( 0.686, 0.678, 0.666 );\n      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K\n      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );\n\n      // earth shadow hack\n      // cutoffAngle = pi / 1.95;\n      const float cutoffAngle = 1.6110731556870734;\n      const float steepness = 1.5;\n      const float EE = 1000.0;\n\n      float sunIntensity( float zenithAngleCos ) {\n        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );\n        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );\n      }\n\n      vec3 totalMie( float T ) {\n        float c = ( 0.2 * T ) * 10E-18;\n        return 0.434 * c * MieConst;\n      }\n\n      void main() {\n\n        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n        vWorldPosition = worldPosition.xyz;\n\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        gl_Position.z = gl_Position.w; // set z to camera.far\n\n        vSunDirection = normalize( sunPosition );\n\n        vSunE = sunIntensity( dot( vSunDirection, up ) );\n\n        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );\n\n        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );\n\n      // extinction (absorbtion + out scattering)\n      // rayleigh coefficients\n        vBetaR = totalRayleigh * rayleighCoefficient;\n\n      // mie coefficients\n        vBetaM = totalMie( turbidity ) * mieCoefficient;\n\n      }\n    ",
    fragmentShader: `\n      varying vec3 vWorldPosition;\n      varying vec3 vSunDirection;\n      varying float vSunfade;\n      varying vec3 vBetaR;\n      varying vec3 vBetaM;\n      varying float vSunE;\n\n      uniform float mieDirectionalG;\n      uniform vec3 up;\n\n      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );\n\n      // constants for atmospheric scattering\n      const float pi = 3.141592653589793238462643383279502884197169;\n\n      const float n = 1.0003; // refractive index of air\n      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)\n\n      // optical length at zenith for molecules\n      const float rayleighZenithLength = 8.4E3;\n      const float mieZenithLength = 1.25E3;\n      // 66 arc seconds -> degrees, and the cosine of that\n      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;\n\n      // 3.0 / ( 16.0 * pi )\n      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;\n      // 1.0 / ( 4.0 * pi )\n      const float ONE_OVER_FOURPI = 0.07957747154594767;\n\n      float rayleighPhase( float cosTheta ) {\n        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );\n      }\n\n      float hgPhase( float cosTheta, float g ) {\n        float g2 = pow( g, 2.0 );\n        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );\n        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );\n      }\n\n      void main() {\n\n        vec3 direction = normalize( vWorldPosition - cameraPos );\n\n      // optical length\n      // cutoff angle at 90 to avoid singularity in next formula.\n        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );\n        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );\n        float sR = rayleighZenithLength * inverse;\n        float sM = mieZenithLength * inverse;\n\n      // combined extinction factor\n        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );\n\n      // in scattering\n        float cosTheta = dot( direction, vSunDirection );\n\n        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );\n        vec3 betaRTheta = vBetaR * rPhase;\n\n        float mPhase = hgPhase( cosTheta, mieDirectionalG );\n        vec3 betaMTheta = vBetaM * mPhase;\n\n        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );\n        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );\n\n      // nightsky\n        float theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]\n        float phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]\n        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );\n        vec3 L0 = vec3( 0.1 ) * Fex;\n\n      // composition + solar disc\n        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );\n        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;\n\n        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );\n\n        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );\n\n        gl_FragColor = vec4( retColor, 1.0 );\n\n      #include <tonemapping_fragment>\n      #include <${
      Gt >= 154 ? "colorspace_fragment" : "encodings_fragment"
    }>\n\n      }\n    `,
  },
  gn = new C({
    name: "SkyShader",
    fragmentShader: hn.fragmentShader,
    vertexShader: hn.vertexShader,
    uniforms: A.clone(hn.uniforms),
    side: U,
    depthWrite: !1,
  });
class mn extends $ {
  constructor() {
    super(new ut(1, 1, 1), gn);
  }
}
dn(mn, "SkyShader", hn),
  dn(mn, "material", gn),
  new P(),
  new I(),
  new B(0, 0, 0, "YXZ"),
  new I(),
  new L(),
  new D(),
  new I(),
  new B(),
  new I();
var yn = Object.defineProperty,
  vn = (t, e, n) => (
    ((t, e, n) => {
      e in t
        ? yn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n);
    })(t, "symbol" != typeof e ? e + "" : e, n),
    n
  );
class wn {
  constructor(t) {
    vn(this, "data"), (this.data = t);
  }
  generateShapes(t, e = 100, n) {
    const r = [],
      i = { letterSpacing: 0, lineHeight: 1, ...n },
      o = (function (t, e, n, r) {
        const i = Array.from(t),
          o = e / n.resolution,
          a =
            (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) *
            o,
          s = [];
        let l = 0,
          c = 0;
        for (let u = 0; u < i.length; u++) {
          const t = i[u];
          if ("\n" === t) (l = 0), (c -= a * r.lineHeight);
          else {
            const e = xn(t, o, l, c, n);
            e && ((l += e.offsetX + r.letterSpacing), s.push(e.path));
          }
        }
        return s;
      })(t, e, this.data, i);
    for (let a = 0, s = o.length; a < s; a++)
      Array.prototype.push.apply(r, o[a].toShapes(!1));
    return r;
  }
}
function xn(t, e, n, r, i) {
  const o = i.glyphs[t] || i.glyphs["?"];
  if (!o) return;
  const a = new vt();
  let s, l, c, u, f, p, d, h;
  if (o.o) {
    const t = o._cachedOutline || (o._cachedOutline = o.o.split(" "));
    for (let i = 0, o = t.length; i < o; )
      switch (t[i++]) {
        case "m":
          (s = parseInt(t[i++]) * e + n),
            (l = parseInt(t[i++]) * e + r),
            a.moveTo(s, l);
          break;
        case "l":
          (s = parseInt(t[i++]) * e + n),
            (l = parseInt(t[i++]) * e + r),
            a.lineTo(s, l);
          break;
        case "q":
          (c = parseInt(t[i++]) * e + n),
            (u = parseInt(t[i++]) * e + r),
            (f = parseInt(t[i++]) * e + n),
            (p = parseInt(t[i++]) * e + r),
            a.quadraticCurveTo(f, p, c, u);
          break;
        case "b":
          (c = parseInt(t[i++]) * e + n),
            (u = parseInt(t[i++]) * e + r),
            (f = parseInt(t[i++]) * e + n),
            (p = parseInt(t[i++]) * e + r),
            (d = parseInt(t[i++]) * e + n),
            (h = parseInt(t[i++]) * e + r),
            a.bezierCurveTo(f, p, d, h, c, u);
      }
  }
  return { offsetX: o.ha * e, path: a };
}
vn(wn, "isFont"), vn(wn, "type");
fn.ReflectorShader,
  typeof WorkerGlobalScope < "u" && (globalThis, WorkerGlobalScope);
class bn extends $ {
  constructor() {
    super(bn.Geometry, new Q({ opacity: 0, transparent: !0 })),
      (this.isLensflare = !0),
      (this.type = "Lensflare"),
      (this.frustumCulled = !1),
      (this.renderOrder = 1 / 0);
    const t = new I(),
      e = new I(),
      n = new tt(16, 16),
      r = new tt(16, 16);
    let i = it;
    const o = bn.Geometry,
      a = new et({
        uniforms: { scale: { value: null }, screenPosition: { value: null } },
        vertexShader:
          "\n\n\t\t\t\tprecision highp float;\n\n\t\t\t\tuniform vec3 screenPosition;\n\t\t\t\tuniform vec2 scale;\n\n\t\t\t\tattribute vec3 position;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tgl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );\n\n\t\t\t\t}",
        fragmentShader:
          "\n\n\t\t\t\tprecision highp float;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tgl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );\n\n\t\t\t\t}",
        depthTest: !0,
        depthWrite: !1,
        transparent: !1,
      }),
      s = new et({
        uniforms: {
          map: { value: n },
          scale: { value: null },
          screenPosition: { value: null },
        },
        vertexShader:
          "\n\n\t\t\t\tprecision highp float;\n\n\t\t\t\tuniform vec3 screenPosition;\n\t\t\t\tuniform vec2 scale;\n\n\t\t\t\tattribute vec3 position;\n\t\t\t\tattribute vec2 uv;\n\n\t\t\t\tvarying vec2 vUV;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvUV = uv;\n\n\t\t\t\t\tgl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );\n\n\t\t\t\t}",
        fragmentShader:
          "\n\n\t\t\t\tprecision highp float;\n\n\t\t\t\tuniform sampler2D map;\n\n\t\t\t\tvarying vec2 vUV;\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tgl_FragColor = texture2D( map, vUV );\n\n\t\t\t\t}",
        depthTest: !1,
        depthWrite: !1,
        transparent: !1,
      }),
      l = new $(o, a),
      c = [],
      u = _n.Shader,
      f = new et({
        name: u.name,
        uniforms: {
          map: { value: null },
          occlusionMap: { value: r },
          color: { value: new E(16777215) },
          scale: { value: new O() },
          screenPosition: { value: new I() },
        },
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        blending: nt,
        transparent: !0,
        depthWrite: !1,
      }),
      p = new $(o, f);
    this.addElement = function (t) {
      c.push(t);
    };
    const d = new O(),
      h = new O(),
      g = new rt(),
      m = new H();
    (this.onBeforeRender = function (u, y, v) {
      u.getCurrentViewport(m);
      const w = u.getRenderTarget(),
        x = null !== w ? w.texture.type : it;
      i !== x && (n.dispose(), r.dispose(), (n.type = r.type = x), (i = x));
      const b = m.w / m.z,
        _ = m.z / 2,
        M = m.w / 2;
      let T = 16 / m.w;
      if (
        (d.set(T * b, T),
        g.min.set(m.x, m.y),
        g.max.set(m.x + (m.z - 16), m.y + (m.w - 16)),
        e.setFromMatrixPosition(this.matrixWorld),
        e.applyMatrix4(v.matrixWorldInverse),
        !(e.z > 0) &&
          (t.copy(e).applyMatrix4(v.projectionMatrix),
          (h.x = m.x + t.x * _ + _ - 8),
          (h.y = m.y + t.y * M + M - 8),
          g.containsPoint(h)))
      ) {
        u.copyFramebufferToTexture(n, h);
        let e = a.uniforms;
        (e.scale.value = d),
          (e.screenPosition.value = t),
          u.renderBufferDirect(v, null, o, a, l, null),
          u.copyFramebufferToTexture(r, h),
          (e = s.uniforms),
          (e.scale.value = d),
          (e.screenPosition.value = t),
          u.renderBufferDirect(v, null, o, s, l, null);
        const i = 2 * -t.x,
          g = 2 * -t.y;
        for (let n = 0, r = c.length; n < r; n++) {
          const e = c[n],
            r = f.uniforms;
          r.color.value.copy(e.color),
            (r.map.value = e.texture),
            (r.screenPosition.value.x = t.x + i * e.distance),
            (r.screenPosition.value.y = t.y + g * e.distance),
            (T = e.size / m.w);
          const a = m.w / m.z;
          r.scale.value.set(T * a, T),
            (f.uniformsNeedUpdate = !0),
            u.renderBufferDirect(v, null, o, f, p, null);
        }
      }
    }),
      (this.dispose = function () {
        a.dispose(), s.dispose(), f.dispose(), n.dispose(), r.dispose();
        for (let t = 0, e = c.length; t < e; t++) c[t].texture.dispose();
      });
  }
}
class _n {
  constructor(t, e = 1, n = 0, r = new E(16777215)) {
    (this.texture = t), (this.size = e), (this.distance = n), (this.color = r);
  }
}
var Mn;
(_n.Shader = {
  name: "LensflareElementShader",
  uniforms: {
    map: { value: null },
    occlusionMap: { value: null },
    color: { value: null },
    scale: { value: null },
    screenPosition: { value: null },
  },
  vertexShader:
    "\n\n\t\tprecision highp float;\n\n\t\tuniform vec3 screenPosition;\n\t\tuniform vec2 scale;\n\n\t\tuniform sampler2D occlusionMap;\n\n\t\tattribute vec3 position;\n\t\tattribute vec2 uv;\n\n\t\tvarying vec2 vUV;\n\t\tvarying float vVisibility;\n\n\t\tvoid main() {\n\n\t\t\tvUV = uv;\n\n\t\t\tvec2 pos = position.xy;\n\n\t\t\tvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\n\t\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\n\t\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\n\t\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\n\t\t\tvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\n\t\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\n\t\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\n\t\t\tvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\n\t\t\tvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\n\n\t\t\tvVisibility =        visibility.r / 9.0;\n\t\t\tvVisibility *= 1.0 - visibility.g / 9.0;\n\t\t\tvVisibility *=       visibility.b / 9.0;\n\n\t\t\tgl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n\n\t\t}",
  fragmentShader:
    "\n\n\t\tprecision highp float;\n\n\t\tuniform sampler2D map;\n\t\tuniform vec3 color;\n\n\t\tvarying vec2 vUV;\n\t\tvarying float vVisibility;\n\n\t\tvoid main() {\n\n\t\t\tvec4 texture = texture2D( map, vUV );\n\t\t\ttexture.a *= vVisibility;\n\t\t\tgl_FragColor = texture;\n\t\t\tgl_FragColor.rgb *= color;\n\n\t\t}",
}),
  (bn.Geometry = (function () {
    const t = new R(),
      e = new Float32Array([
        -1, -1, 0, 0, 0, 1, -1, 0, 1, 0, 1, 1, 0, 1, 1, -1, 1, 0, 0, 1,
      ]),
      n = new k(e, 5);
    return (
      t.setIndex([0, 1, 2, 0, 2, 3]),
      t.setAttribute("position", new j(n, 3, 0, !1)),
      t.setAttribute("uv", new j(n, 2, 3, !1)),
      t
    );
  })()),
  new F(),
  /Mac/.test(
    null === (Mn = null == globalThis ? void 0 : globalThis.navigator) ||
      void 0 === Mn
      ? void 0
      : Mn.platform
  );
typeof globalThis < "u"
  ? globalThis
  : typeof window < "u"
  ? window
  : typeof global < "u"
  ? global
  : typeof self < "u" && self;
function Tn(t) {
  throw new Error(
    'Could not dynamically require "' +
      t +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
!(function t(e, n, r) {
  function i(a, s) {
    if (!n[a]) {
      if (!e[a]) {
        if (!s && Tn) return Tn(a);
        if (o) return o(a, !0);
        throw new Error("Cannot find module '" + a + "'");
      }
      (s = n[a] = { exports: {} }),
        e[a][0].call(
          s.exports,
          function (t) {
            return i(e[a][1][t] || t);
          },
          s,
          s.exports,
          t,
          e,
          n,
          r
        );
    }
    return n[a].exports;
  }
  for (var o = Tn, a = 0; a < r.length; a++) i(r[a]);
  return i;
})(
  {
    1: [
      function (t, e, n) {
        (function (r, i, o, a, s, l, c, u, f) {
          var p = t("crypto");
          function d(t, e) {
            var n;
            return (
              void 0 ===
                (n =
                  "passthrough" !== (e = m(t, e)).algorithm
                    ? p.createHash(e.algorithm)
                    : new w()).write &&
                ((n.write = n.update), (n.end = n.update)),
              v(e, n).dispatch(t),
              n.update || n.end(""),
              n.digest
                ? n.digest("buffer" === e.encoding ? void 0 : e.encoding)
                : ((t = n.read()),
                  "buffer" !== e.encoding ? t.toString(e.encoding) : t)
            );
          }
          ((n = e.exports = d).sha1 = function (t) {
            return d(t);
          }),
            (n.keys = function (t) {
              return d(t, {
                excludeValues: !0,
                algorithm: "sha1",
                encoding: "hex",
              });
            }),
            (n.MD5 = function (t) {
              return d(t, { algorithm: "md5", encoding: "hex" });
            }),
            (n.keysMD5 = function (t) {
              return d(t, {
                algorithm: "md5",
                encoding: "hex",
                excludeValues: !0,
              });
            });
          var h = p.getHashes ? p.getHashes().slice() : ["sha1", "md5"],
            g = (h.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
          function m(t, e) {
            var n = {};
            if (
              ((n.algorithm = (e = e || {}).algorithm || "sha1"),
              (n.encoding = e.encoding || "hex"),
              (n.excludeValues = !!e.excludeValues),
              (n.algorithm = n.algorithm.toLowerCase()),
              (n.encoding = n.encoding.toLowerCase()),
              (n.ignoreUnknown = !0 === e.ignoreUnknown),
              (n.respectType = !1 !== e.respectType),
              (n.respectFunctionNames = !1 !== e.respectFunctionNames),
              (n.respectFunctionProperties =
                !1 !== e.respectFunctionProperties),
              (n.unorderedArrays = !0 === e.unorderedArrays),
              (n.unorderedSets = !1 !== e.unorderedSets),
              (n.unorderedObjects = !1 !== e.unorderedObjects),
              (n.replacer = e.replacer || void 0),
              (n.excludeKeys = e.excludeKeys || void 0),
              void 0 === t)
            )
              throw new Error("Object argument required.");
            for (var r = 0; r < h.length; ++r)
              h[r].toLowerCase() === n.algorithm.toLowerCase() &&
                (n.algorithm = h[r]);
            if (-1 === h.indexOf(n.algorithm))
              throw new Error(
                'Algorithm "' +
                  n.algorithm +
                  '"  not supported. supported values: ' +
                  h.join(", ")
              );
            if (-1 === g.indexOf(n.encoding) && "passthrough" !== n.algorithm)
              throw new Error(
                'Encoding "' +
                  n.encoding +
                  '"  not supported. supported values: ' +
                  g.join(", ")
              );
            return n;
          }
          function y(t) {
            if ("function" == typeof t)
              return (
                null !=
                /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(
                  Function.prototype.toString.call(t)
                )
              );
          }
          function v(t, e, n) {
            function r(t) {
              return e.update ? e.update(t, "utf8") : e.write(t, "utf8");
            }
            return (
              (n = n || []),
              {
                dispatch: function (e) {
                  return this[
                    "_" +
                      (null === (e = t.replacer ? t.replacer(e) : e)
                        ? "null"
                        : typeof e)
                  ](e);
                },
                _object: function (e) {
                  var i,
                    a = Object.prototype.toString.call(e),
                    s = /\[object (.*)\]/i.exec(a);
                  if (
                    ((s = (s = s ? s[1] : "unknown:[" + a + "]").toLowerCase()),
                    0 <= (a = n.indexOf(e)))
                  )
                    return this.dispatch("[CIRCULAR:" + a + "]");
                  if ((n.push(e), void 0 !== o && o.isBuffer && o.isBuffer(e)))
                    return r("buffer:"), r(e);
                  if (
                    "object" === s ||
                    "function" === s ||
                    "asyncfunction" === s
                  )
                    return (
                      (a = Object.keys(e)),
                      t.unorderedObjects && (a = a.sort()),
                      !1 === t.respectType ||
                        y(e) ||
                        a.splice(0, 0, "prototype", "__proto__", "constructor"),
                      t.excludeKeys &&
                        (a = a.filter(function (e) {
                          return !t.excludeKeys(e);
                        })),
                      r("object:" + a.length + ":"),
                      (i = this),
                      a.forEach(function (n) {
                        i.dispatch(n),
                          r(":"),
                          t.excludeValues || i.dispatch(e[n]),
                          r(",");
                      })
                    );
                  if (!this["_" + s]) {
                    if (t.ignoreUnknown) return r("[" + s + "]");
                    throw new Error('Unknown object type "' + s + '"');
                  }
                  this["_" + s](e);
                },
                _array: function (e, i) {
                  i = void 0 !== i ? i : !1 !== t.unorderedArrays;
                  var o = this;
                  if ((r("array:" + e.length + ":"), !i || e.length <= 1))
                    return e.forEach(function (t) {
                      return o.dispatch(t);
                    });
                  var a = [];
                  return (
                    (i = e.map(function (e) {
                      var r = new w(),
                        i = n.slice();
                      return (
                        v(t, r, i).dispatch(e),
                        (a = a.concat(i.slice(n.length))),
                        r.read().toString()
                      );
                    })),
                    (n = n.concat(a)),
                    i.sort(),
                    this._array(i, !1)
                  );
                },
                _date: function (t) {
                  return r("date:" + t.toJSON());
                },
                _symbol: function (t) {
                  return r("symbol:" + t.toString());
                },
                _error: function (t) {
                  return r("error:" + t.toString());
                },
                _boolean: function (t) {
                  return r("bool:" + t.toString());
                },
                _string: function (t) {
                  r("string:" + t.length + ":"), r(t.toString());
                },
                _function: function (e) {
                  r("fn:"),
                    y(e)
                      ? this.dispatch("[native]")
                      : this.dispatch(e.toString()),
                    !1 !== t.respectFunctionNames &&
                      this.dispatch("function-name:" + String(e.name)),
                    t.respectFunctionProperties && this._object(e);
                },
                _number: function (t) {
                  return r("number:" + t.toString());
                },
                _xml: function (t) {
                  return r("xml:" + t.toString());
                },
                _null: function () {
                  return r("Null");
                },
                _undefined: function () {
                  return r("Undefined");
                },
                _regexp: function (t) {
                  return r("regex:" + t.toString());
                },
                _uint8array: function (t) {
                  return (
                    r("uint8array:"),
                    this.dispatch(Array.prototype.slice.call(t))
                  );
                },
                _uint8clampedarray: function (t) {
                  return (
                    r("uint8clampedarray:"),
                    this.dispatch(Array.prototype.slice.call(t))
                  );
                },
                _int8array: function (t) {
                  return (
                    r("int8array:"),
                    this.dispatch(Array.prototype.slice.call(t))
                  );
                },
                _uint16array: function (t) {
                  return (
                    r("uint16array:"),
                    this.dispatch(Array.prototype.slice.call(t))
                  );
                },
                _int16array: function (t) {
                  return (
                    r("int16array:"),
                    this.dispatch(Array.prototype.slice.call(t))
                  );
                },
                _uint32array: function (t) {
                  return (
                    r("uint32array:"),
                    this.dispatch(Array.prototype.slice.call(t))
                  );
                },
                _int32array: function (t) {
                  return (
                    r("int32array:"),
                    this.dispatch(Array.prototype.slice.call(t))
                  );
                },
                _float32array: function (t) {
                  return (
                    r("float32array:"),
                    this.dispatch(Array.prototype.slice.call(t))
                  );
                },
                _float64array: function (t) {
                  return (
                    r("float64array:"),
                    this.dispatch(Array.prototype.slice.call(t))
                  );
                },
                _arraybuffer: function (t) {
                  return r("arraybuffer:"), this.dispatch(new Uint8Array(t));
                },
                _url: function (t) {
                  return r("url:" + t.toString());
                },
                _map: function (e) {
                  return (
                    r("map:"),
                    (e = Array.from(e)),
                    this._array(e, !1 !== t.unorderedSets)
                  );
                },
                _set: function (e) {
                  return (
                    r("set:"),
                    (e = Array.from(e)),
                    this._array(e, !1 !== t.unorderedSets)
                  );
                },
                _file: function (t) {
                  return (
                    r("file:"),
                    this.dispatch([t.name, t.size, t.type, t.lastModfied])
                  );
                },
                _blob: function () {
                  if (t.ignoreUnknown) return r("[blob]");
                  throw Error(
                    'Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n'
                  );
                },
                _domwindow: function () {
                  return r("domwindow");
                },
                _bigint: function (t) {
                  return r("bigint:" + t.toString());
                },
                _process: function () {
                  return r("process");
                },
                _timer: function () {
                  return r("timer");
                },
                _pipe: function () {
                  return r("pipe");
                },
                _tcp: function () {
                  return r("tcp");
                },
                _udp: function () {
                  return r("udp");
                },
                _tty: function () {
                  return r("tty");
                },
                _statwatcher: function () {
                  return r("statwatcher");
                },
                _securecontext: function () {
                  return r("securecontext");
                },
                _connection: function () {
                  return r("connection");
                },
                _zlib: function () {
                  return r("zlib");
                },
                _context: function () {
                  return r("context");
                },
                _nodescript: function () {
                  return r("nodescript");
                },
                _httpparser: function () {
                  return r("httpparser");
                },
                _dataview: function () {
                  return r("dataview");
                },
                _signal: function () {
                  return r("signal");
                },
                _fsevent: function () {
                  return r("fsevent");
                },
                _tlswrap: function () {
                  return r("tlswrap");
                },
              }
            );
          }
          function w() {
            return {
              buf: "",
              write: function (t) {
                this.buf += t;
              },
              end: function (t) {
                this.buf += t;
              },
              read: function () {
                return this.buf;
              },
            };
          }
          n.writeToStream = function (t, e, n) {
            return (
              void 0 === n && ((n = e), (e = {})),
              v((e = m(t, e)), n).dispatch(t)
            );
          };
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/fake_9a5aa49d.js",
          "/"
        ));
      },
      { buffer: 3, crypto: 5, lYpoI2: 11 },
    ],
    2: [
      function (t, e, n) {
        (function (t, e, r, i, o, a, s, l, c) {
          !(function (t) {
            var e = typeof Uint8Array < "u" ? Uint8Array : Array,
              n = 43,
              r = 47,
              i = 48,
              o = 97,
              a = 65,
              s = 45,
              l = 95;
            function c(t) {
              return (t = t.charCodeAt(0)) === n || t === s
                ? 62
                : t === r || t === l
                ? 63
                : t < i
                ? -1
                : t < i + 10
                ? t - i + 26 + 26
                : t < a + 26
                ? t - a
                : t < o + 26
                ? t - o + 26
                : void 0;
            }
            (t.toByteArray = function (t) {
              var n, r;
              if (0 < t.length % 4)
                throw new Error(
                  "Invalid string. Length must be a multiple of 4"
                );
              var i = t.length,
                o =
                  ((i =
                    "=" === t.charAt(i - 2)
                      ? 2
                      : "=" === t.charAt(i - 1)
                      ? 1
                      : 0),
                  new e((3 * t.length) / 4 - i)),
                a = 0 < i ? t.length - 4 : t.length,
                s = 0;
              function l(t) {
                o[s++] = t;
              }
              for (n = 0; n < a; n += 4, 0)
                l(
                  (16711680 &
                    (r =
                      (c(t.charAt(n)) << 18) |
                      (c(t.charAt(n + 1)) << 12) |
                      (c(t.charAt(n + 2)) << 6) |
                      c(t.charAt(n + 3)))) >>
                    16
                ),
                  l((65280 & r) >> 8),
                  l(255 & r);
              return (
                2 == i
                  ? l(
                      255 &
                        (r = (c(t.charAt(n)) << 2) | (c(t.charAt(n + 1)) >> 4))
                    )
                  : 1 == i &&
                    (l(
                      ((r =
                        (c(t.charAt(n)) << 10) |
                        (c(t.charAt(n + 1)) << 4) |
                        (c(t.charAt(n + 2)) >> 2)) >>
                        8) &
                        255
                    ),
                    l(255 & r)),
                o
              );
            }),
              (t.fromByteArray = function (t) {
                var e,
                  n,
                  r,
                  i,
                  o = t.length % 3,
                  a = "";
                function s(t) {
                  return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                    t
                  );
                }
                for (e = 0, r = t.length - o; e < r; e += 3)
                  a +=
                    s(
                      ((i = n = (t[e] << 16) + (t[e + 1] << 8) + t[e + 2]) >>
                        18) &
                        63
                    ) +
                    s((i >> 12) & 63) +
                    s((i >> 6) & 63) +
                    s(63 & i);
                switch (o) {
                  case 1:
                    a =
                      (a += s((n = t[t.length - 1]) >> 2)) +
                      s((n << 4) & 63) +
                      "==";
                    break;
                  case 2:
                    a =
                      (a =
                        (a += s(
                          (n = (t[t.length - 2] << 8) + t[t.length - 1]) >> 10
                        )) + s((n >> 4) & 63)) +
                      s((n << 2) & 63) +
                      "=";
                }
                return a;
              });
          })(void 0 === n ? (this.base64js = {}) : n);
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js",
          "/node_modules/gulp-browserify/node_modules/base64-js/lib"
        ));
      },
      { buffer: 3, lYpoI2: 11 },
    ],
    3: [
      function (t, e, n) {
        (function (e, r, i, o, a, s, l, c, u) {
          var f = t("base64-js"),
            p = t("ieee754");
          function i(t, e, n) {
            if (!(this instanceof i)) return new i(t, e, n);
            var r,
              o,
              a,
              s,
              l = typeof t;
            if ("base64" === e && "string" == l)
              for (
                t = (s = t).trim ? s.trim() : s.replace(/^\s+|\s+$/g, "");
                t.length % 4 != 0;

              )
                t += "=";
            if ("number" == l) r = U(t);
            else if ("string" == l) r = i.byteLength(t, e);
            else {
              if ("object" != l)
                throw new Error(
                  "First argument needs to be a number, array or string."
                );
              r = U(t.length);
            }
            if (
              (i._useTypedArrays
                ? (o = i._augment(new Uint8Array(r)))
                : (((o = this).length = r), (o._isBuffer = !0)),
              i._useTypedArrays && "number" == typeof t.byteLength)
            )
              o._set(t);
            else if (
              P((s = t)) ||
              i.isBuffer(s) ||
              (s && "object" == typeof s && "number" == typeof s.length)
            )
              for (a = 0; a < r; a++)
                i.isBuffer(t) ? (o[a] = t.readUInt8(a)) : (o[a] = t[a]);
            else if ("string" == l) o.write(t, 0, e);
            else if ("number" == l && !i._useTypedArrays && !n)
              for (a = 0; a < r; a++) o[a] = 0;
            return o;
          }
          function d(t, e, n, r) {
            return (i._charsWritten = z(
              (function (t) {
                for (var e = [], n = 0; n < t.length; n++)
                  e.push(255 & t.charCodeAt(n));
                return e;
              })(e),
              t,
              n,
              r
            ));
          }
          function h(t, e, n, r) {
            return (i._charsWritten = z(
              (function (t) {
                for (var e, n, r = [], i = 0; i < t.length; i++)
                  (e = (n = t.charCodeAt(i)) >> 8),
                    (n %= 256),
                    r.push(n),
                    r.push(e);
                return r;
              })(e),
              t,
              n,
              r
            ));
          }
          function g(t, e, n) {
            var r = "";
            n = Math.min(t.length, n);
            for (var i = e; i < n; i++) r += String.fromCharCode(t[i]);
            return r;
          }
          function m(t, e, n, r) {
            var i;
            if (
              (r ||
                (N("boolean" == typeof n, "missing or invalid endian"),
                N(null != e, "missing offset"),
                N(e + 1 < t.length, "Trying to read beyond buffer length")),
              !((r = t.length) <= e))
            )
              return (
                n
                  ? ((i = t[e]), e + 1 < r && (i |= t[e + 1] << 8))
                  : ((i = t[e] << 8), e + 1 < r && (i |= t[e + 1])),
                i
              );
          }
          function y(t, e, n, r) {
            var i;
            if (
              (r ||
                (N("boolean" == typeof n, "missing or invalid endian"),
                N(null != e, "missing offset"),
                N(e + 3 < t.length, "Trying to read beyond buffer length")),
              !((r = t.length) <= e))
            )
              return (
                n
                  ? (e + 2 < r && (i = t[e + 2] << 16),
                    e + 1 < r && (i |= t[e + 1] << 8),
                    (i |= t[e]),
                    e + 3 < r && (i += (t[e + 3] << 24) >>> 0))
                  : (e + 1 < r && (i = t[e + 1] << 16),
                    e + 2 < r && (i |= t[e + 2] << 8),
                    e + 3 < r && (i |= t[e + 3]),
                    (i += (t[e] << 24) >>> 0)),
                i
              );
          }
          function v(t, e, n, r) {
            if (
              (r ||
                (N("boolean" == typeof n, "missing or invalid endian"),
                N(null != e, "missing offset"),
                N(e + 1 < t.length, "Trying to read beyond buffer length")),
              !(t.length <= e))
            )
              return 32768 & (r = m(t, e, n, !0)) ? -1 * (65535 - r + 1) : r;
          }
          function w(t, e, n, r) {
            if (
              (r ||
                (N("boolean" == typeof n, "missing or invalid endian"),
                N(null != e, "missing offset"),
                N(e + 3 < t.length, "Trying to read beyond buffer length")),
              !(t.length <= e))
            )
              return 2147483648 & (r = y(t, e, n, !0))
                ? -1 * (4294967295 - r + 1)
                : r;
          }
          function x(t, e, n, r) {
            return (
              r ||
                (N("boolean" == typeof n, "missing or invalid endian"),
                N(e + 3 < t.length, "Trying to read beyond buffer length")),
              p.read(t, e, n, 23, 4)
            );
          }
          function b(t, e, n, r) {
            return (
              r ||
                (N("boolean" == typeof n, "missing or invalid endian"),
                N(e + 7 < t.length, "Trying to read beyond buffer length")),
              p.read(t, e, n, 52, 8)
            );
          }
          function _(t, e, n, r, i) {
            if (
              (i ||
                (N(null != e, "missing value"),
                N("boolean" == typeof r, "missing or invalid endian"),
                N(null != n, "missing offset"),
                N(n + 1 < t.length, "trying to write beyond buffer length"),
                k(e, 65535)),
              !((i = t.length) <= n))
            )
              for (var o = 0, a = Math.min(i - n, 2); o < a; o++)
                t[n + o] =
                  (e & (255 << (8 * (r ? o : 1 - o)))) >>>
                  (8 * (r ? o : 1 - o));
          }
          function M(t, e, n, r, i) {
            if (
              (i ||
                (N(null != e, "missing value"),
                N("boolean" == typeof r, "missing or invalid endian"),
                N(null != n, "missing offset"),
                N(n + 3 < t.length, "trying to write beyond buffer length"),
                k(e, 4294967295)),
              !((i = t.length) <= n))
            )
              for (var o = 0, a = Math.min(i - n, 4); o < a; o++)
                t[n + o] = (e >>> (8 * (r ? o : 3 - o))) & 255;
          }
          function T(t, e, n, r, i) {
            i ||
              (N(null != e, "missing value"),
              N("boolean" == typeof r, "missing or invalid endian"),
              N(null != n, "missing offset"),
              N(n + 1 < t.length, "Trying to write beyond buffer length"),
              j(e, 32767, -32768)),
              t.length <= n || _(t, 0 <= e ? e : 65535 + e + 1, n, r, i);
          }
          function S(t, e, n, r, i) {
            i ||
              (N(null != e, "missing value"),
              N("boolean" == typeof r, "missing or invalid endian"),
              N(null != n, "missing offset"),
              N(n + 3 < t.length, "Trying to write beyond buffer length"),
              j(e, 2147483647, -2147483648)),
              t.length <= n || M(t, 0 <= e ? e : 4294967295 + e + 1, n, r, i);
          }
          function E(t, e, n, r, i) {
            i ||
              (N(null != e, "missing value"),
              N("boolean" == typeof r, "missing or invalid endian"),
              N(null != n, "missing offset"),
              N(n + 3 < t.length, "Trying to write beyond buffer length"),
              F(e, 34028234663852886e22, -34028234663852886e22)),
              t.length <= n || p.write(t, e, n, r, 23, 4);
          }
          function I(t, e, n, r, i) {
            i ||
              (N(null != e, "missing value"),
              N("boolean" == typeof r, "missing or invalid endian"),
              N(null != n, "missing offset"),
              N(n + 7 < t.length, "Trying to write beyond buffer length"),
              F(e, 17976931348623157e292, -17976931348623157e292)),
              t.length <= n || p.write(t, e, n, r, 52, 8);
          }
          (n.Buffer = i),
            (n.SlowBuffer = i),
            (n.INSPECT_MAX_BYTES = 50),
            (i.poolSize = 8192),
            (i._useTypedArrays = (function () {
              try {
                var t = new ArrayBuffer(0),
                  e = new Uint8Array(t);
                return (
                  (e.foo = function () {
                    return 42;
                  }),
                  42 === e.foo() && "function" == typeof e.subarray
                );
              } catch {
                return !1;
              }
            })()),
            (i.isEncoding = function (t) {
              switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "raw":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;
                default:
                  return !1;
              }
            }),
            (i.isBuffer = function (t) {
              return !(null == t || !t._isBuffer);
            }),
            (i.byteLength = function (t, e) {
              var n;
              switch (((t += ""), e || "utf8")) {
                case "hex":
                  n = t.length / 2;
                  break;
                case "utf8":
                case "utf-8":
                  n = L(t).length;
                  break;
                case "ascii":
                case "binary":
                case "raw":
                  n = t.length;
                  break;
                case "base64":
                  n = D(t).length;
                  break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  n = 2 * t.length;
                  break;
                default:
                  throw new Error("Unknown encoding");
              }
              return n;
            }),
            (i.concat = function (t, e) {
              if (
                (N(
                  P(t),
                  "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."
                ),
                0 === t.length)
              )
                return new i(0);
              if (1 === t.length) return t[0];
              if ("number" != typeof e)
                for (o = e = 0; o < t.length; o++) e += t[o].length;
              for (var n = new i(e), r = 0, o = 0; o < t.length; o++) {
                var a = t[o];
                a.copy(n, r), (r += a.length);
              }
              return n;
            }),
            (i.prototype.write = function (t, e, n, r) {
              isFinite(e)
                ? isFinite(n) || ((r = n), (n = void 0))
                : ((c = r), (r = e), (e = n), (n = c)),
                (e = Number(e) || 0);
              var o,
                a,
                s,
                l,
                c = this.length - e;
              switch (
                ((!n || c < (n = Number(n))) && (n = c),
                (r = String(r || "utf8").toLowerCase()))
              ) {
                case "hex":
                  o = (function (t, e, n, r) {
                    n = Number(n) || 0;
                    var o = t.length - n;
                    (!r || o < (r = Number(r))) && (r = o),
                      N((o = e.length) % 2 == 0, "Invalid hex string"),
                      o / 2 < r && (r = o / 2);
                    for (var a = 0; a < r; a++) {
                      var s = parseInt(e.substr(2 * a, 2), 16);
                      N(!isNaN(s), "Invalid hex string"), (t[n + a] = s);
                    }
                    return (i._charsWritten = 2 * a), a;
                  })(this, t, e, n);
                  break;
                case "utf8":
                case "utf-8":
                  (a = this),
                    (s = e),
                    (l = n),
                    (o = i._charsWritten = z(L(t), a, s, l));
                  break;
                case "ascii":
                case "binary":
                  o = d(this, t, e, n);
                  break;
                case "base64":
                  (a = this),
                    (s = e),
                    (l = n),
                    (o = i._charsWritten = z(D(t), a, s, l));
                  break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  o = h(this, t, e, n);
                  break;
                default:
                  throw new Error("Unknown encoding");
              }
              return o;
            }),
            (i.prototype.toString = function (t, e, n) {
              var r,
                i,
                o,
                a,
                s = this;
              if (
                ((t = String(t || "utf8").toLowerCase()),
                (e = Number(e) || 0),
                (n = void 0 !== n ? Number(n) : s.length) === e)
              )
                return "";
              switch (t) {
                case "hex":
                  r = (function (t, e, n) {
                    var r = t.length;
                    (!e || e < 0) && (e = 0), (!n || n < 0 || r < n) && (n = r);
                    for (var i = "", o = e; o < n; o++) i += B(t[o]);
                    return i;
                  })(s, e, n);
                  break;
                case "utf8":
                case "utf-8":
                  r = (function (t, e, n) {
                    var r = "",
                      i = "";
                    n = Math.min(t.length, n);
                    for (var o = e; o < n; o++)
                      t[o] <= 127
                        ? ((r += R(i) + String.fromCharCode(t[o])), (i = ""))
                        : (i += "%" + t[o].toString(16));
                    return r + R(i);
                  })(s, e, n);
                  break;
                case "ascii":
                case "binary":
                  r = g(s, e, n);
                  break;
                case "base64":
                  (i = s),
                    (a = n),
                    (r =
                      0 === (o = e) && a === i.length
                        ? f.fromByteArray(i)
                        : f.fromByteArray(i.slice(o, a)));
                  break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  r = (function (t, e, n) {
                    for (
                      var r = t.slice(e, n), i = "", o = 0;
                      o < r.length;
                      o += 2
                    )
                      i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                    return i;
                  })(s, e, n);
                  break;
                default:
                  throw new Error("Unknown encoding");
              }
              return r;
            }),
            (i.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0),
              };
            }),
            (i.prototype.copy = function (t, e, n, r) {
              if (
                ((e = e || 0),
                (r = r || 0 === r ? r : this.length) !== (n = n || 0) &&
                  0 !== t.length &&
                  0 !== this.length)
              ) {
                N(n <= r, "sourceEnd < sourceStart"),
                  N(0 <= e && e < t.length, "targetStart out of bounds"),
                  N(0 <= n && n < this.length, "sourceStart out of bounds"),
                  N(0 <= r && r <= this.length, "sourceEnd out of bounds"),
                  r > this.length && (r = this.length);
                var o = (r = t.length - e < r - n ? t.length - e + n : r) - n;
                if (o < 100 || !i._useTypedArrays)
                  for (var a = 0; a < o; a++) t[a + e] = this[a + n];
                else t._set(this.subarray(n, n + o), e);
              }
            }),
            (i.prototype.slice = function (t, e) {
              var n = this.length;
              if (((t = A(t, n, 0)), (e = A(e, n, n)), i._useTypedArrays))
                return i._augment(this.subarray(t, e));
              for (var r = e - t, o = new i(r, void 0, !0), a = 0; a < r; a++)
                o[a] = this[a + t];
              return o;
            }),
            (i.prototype.get = function (t) {
              return this.readUInt8(t);
            }),
            (i.prototype.set = function (t, e) {
              return this.writeUInt8(t, e);
            }),
            (i.prototype.readUInt8 = function (t, e) {
              if (
                (e ||
                  (N(null != t, "missing offset"),
                  N(t < this.length, "Trying to read beyond buffer length")),
                !(t >= this.length))
              )
                return this[t];
            }),
            (i.prototype.readUInt16LE = function (t, e) {
              return m(this, t, !0, e);
            }),
            (i.prototype.readUInt16BE = function (t, e) {
              return m(this, t, !1, e);
            }),
            (i.prototype.readUInt32LE = function (t, e) {
              return y(this, t, !0, e);
            }),
            (i.prototype.readUInt32BE = function (t, e) {
              return y(this, t, !1, e);
            }),
            (i.prototype.readInt8 = function (t, e) {
              if (
                (e ||
                  (N(null != t, "missing offset"),
                  N(t < this.length, "Trying to read beyond buffer length")),
                !(t >= this.length))
              )
                return 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
            }),
            (i.prototype.readInt16LE = function (t, e) {
              return v(this, t, !0, e);
            }),
            (i.prototype.readInt16BE = function (t, e) {
              return v(this, t, !1, e);
            }),
            (i.prototype.readInt32LE = function (t, e) {
              return w(this, t, !0, e);
            }),
            (i.prototype.readInt32BE = function (t, e) {
              return w(this, t, !1, e);
            }),
            (i.prototype.readFloatLE = function (t, e) {
              return x(this, t, !0, e);
            }),
            (i.prototype.readFloatBE = function (t, e) {
              return x(this, t, !1, e);
            }),
            (i.prototype.readDoubleLE = function (t, e) {
              return b(this, t, !0, e);
            }),
            (i.prototype.readDoubleBE = function (t, e) {
              return b(this, t, !1, e);
            }),
            (i.prototype.writeUInt8 = function (t, e, n) {
              n ||
                (N(null != t, "missing value"),
                N(null != e, "missing offset"),
                N(e < this.length, "trying to write beyond buffer length"),
                k(t, 255)),
                e >= this.length || (this[e] = t);
            }),
            (i.prototype.writeUInt16LE = function (t, e, n) {
              _(this, t, e, !0, n);
            }),
            (i.prototype.writeUInt16BE = function (t, e, n) {
              _(this, t, e, !1, n);
            }),
            (i.prototype.writeUInt32LE = function (t, e, n) {
              M(this, t, e, !0, n);
            }),
            (i.prototype.writeUInt32BE = function (t, e, n) {
              M(this, t, e, !1, n);
            }),
            (i.prototype.writeInt8 = function (t, e, n) {
              n ||
                (N(null != t, "missing value"),
                N(null != e, "missing offset"),
                N(e < this.length, "Trying to write beyond buffer length"),
                j(t, 127, -128)),
                e >= this.length ||
                  (0 <= t
                    ? this.writeUInt8(t, e, n)
                    : this.writeUInt8(255 + t + 1, e, n));
            }),
            (i.prototype.writeInt16LE = function (t, e, n) {
              T(this, t, e, !0, n);
            }),
            (i.prototype.writeInt16BE = function (t, e, n) {
              T(this, t, e, !1, n);
            }),
            (i.prototype.writeInt32LE = function (t, e, n) {
              S(this, t, e, !0, n);
            }),
            (i.prototype.writeInt32BE = function (t, e, n) {
              S(this, t, e, !1, n);
            }),
            (i.prototype.writeFloatLE = function (t, e, n) {
              E(this, t, e, !0, n);
            }),
            (i.prototype.writeFloatBE = function (t, e, n) {
              E(this, t, e, !1, n);
            }),
            (i.prototype.writeDoubleLE = function (t, e, n) {
              I(this, t, e, !0, n);
            }),
            (i.prototype.writeDoubleBE = function (t, e, n) {
              I(this, t, e, !1, n);
            }),
            (i.prototype.fill = function (t, e, n) {
              if (
                ((e = e || 0),
                (n = n || this.length),
                N(
                  "number" ==
                    typeof (t =
                      "string" == typeof (t = t || 0) ? t.charCodeAt(0) : t) &&
                    !isNaN(t),
                  "value is not a number"
                ),
                N(e <= n, "end < start"),
                n !== e && 0 !== this.length)
              ) {
                N(0 <= e && e < this.length, "start out of bounds"),
                  N(0 <= n && n <= this.length, "end out of bounds");
                for (var r = e; r < n; r++) this[r] = t;
              }
            }),
            (i.prototype.inspect = function () {
              for (var t = [], e = this.length, r = 0; r < e; r++)
                if (((t[r] = B(this[r])), r === n.INSPECT_MAX_BYTES)) {
                  t[r + 1] = "...";
                  break;
                }
              return "<Buffer " + t.join(" ") + ">";
            }),
            (i.prototype.toArrayBuffer = function () {
              if (typeof Uint8Array > "u")
                throw new Error(
                  "Buffer.toArrayBuffer not supported in this browser"
                );
              if (i._useTypedArrays) return new i(this).buffer;
              for (
                var t = new Uint8Array(this.length), e = 0, n = t.length;
                e < n;
                e += 1
              )
                t[e] = this[e];
              return t.buffer;
            });
          var C = i.prototype;
          function A(t, e, n) {
            return "number" != typeof t
              ? n
              : e <= (t = ~~t)
              ? e
              : 0 <= t || 0 <= (t += e)
              ? t
              : 0;
          }
          function U(t) {
            return (t = ~~Math.ceil(+t)) < 0 ? 0 : t;
          }
          function P(t) {
            return (
              Array.isArray ||
              function (t) {
                return "[object Array]" === Object.prototype.toString.call(t);
              }
            )(t);
          }
          function B(t) {
            return t < 16 ? "0" + t.toString(16) : t.toString(16);
          }
          function L(t) {
            for (var e = [], n = 0; n < t.length; n++) {
              var r = t.charCodeAt(n);
              if (r <= 127) e.push(t.charCodeAt(n));
              else
                for (
                  var i = n,
                    o =
                      (55296 <= r && r <= 57343 && n++,
                      encodeURIComponent(t.slice(i, n + 1))
                        .substr(1)
                        .split("%")),
                    a = 0;
                  a < o.length;
                  a++
                )
                  e.push(parseInt(o[a], 16));
            }
            return e;
          }
          function D(t) {
            return f.toByteArray(t);
          }
          function z(t, e, n, r) {
            for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); i++)
              e[i + n] = t[i];
            return i;
          }
          function R(t) {
            try {
              return decodeURIComponent(t);
            } catch {
              return "�";
            }
          }
          function k(t, e) {
            N("number" == typeof t, "cannot write a non-number as a number"),
              N(
                0 <= t,
                "specified a negative value for writing an unsigned value"
              ),
              N(t <= e, "value is larger than maximum value for type"),
              N(Math.floor(t) === t, "value has a fractional component");
          }
          function j(t, e, n) {
            N("number" == typeof t, "cannot write a non-number as a number"),
              N(t <= e, "value larger than maximum allowed value"),
              N(n <= t, "value smaller than minimum allowed value"),
              N(Math.floor(t) === t, "value has a fractional component");
          }
          function F(t, e, n) {
            N("number" == typeof t, "cannot write a non-number as a number"),
              N(t <= e, "value larger than maximum allowed value"),
              N(n <= t, "value smaller than minimum allowed value");
          }
          function N(t, e) {
            if (!t) throw new Error(e || "Failed assertion");
          }
          i._augment = function (t) {
            return (
              (t._isBuffer = !0),
              (t._get = t.get),
              (t._set = t.set),
              (t.get = C.get),
              (t.set = C.set),
              (t.write = C.write),
              (t.toString = C.toString),
              (t.toLocaleString = C.toString),
              (t.toJSON = C.toJSON),
              (t.copy = C.copy),
              (t.slice = C.slice),
              (t.readUInt8 = C.readUInt8),
              (t.readUInt16LE = C.readUInt16LE),
              (t.readUInt16BE = C.readUInt16BE),
              (t.readUInt32LE = C.readUInt32LE),
              (t.readUInt32BE = C.readUInt32BE),
              (t.readInt8 = C.readInt8),
              (t.readInt16LE = C.readInt16LE),
              (t.readInt16BE = C.readInt16BE),
              (t.readInt32LE = C.readInt32LE),
              (t.readInt32BE = C.readInt32BE),
              (t.readFloatLE = C.readFloatLE),
              (t.readFloatBE = C.readFloatBE),
              (t.readDoubleLE = C.readDoubleLE),
              (t.readDoubleBE = C.readDoubleBE),
              (t.writeUInt8 = C.writeUInt8),
              (t.writeUInt16LE = C.writeUInt16LE),
              (t.writeUInt16BE = C.writeUInt16BE),
              (t.writeUInt32LE = C.writeUInt32LE),
              (t.writeUInt32BE = C.writeUInt32BE),
              (t.writeInt8 = C.writeInt8),
              (t.writeInt16LE = C.writeInt16LE),
              (t.writeInt16BE = C.writeInt16BE),
              (t.writeInt32LE = C.writeInt32LE),
              (t.writeInt32BE = C.writeInt32BE),
              (t.writeFloatLE = C.writeFloatLE),
              (t.writeFloatBE = C.writeFloatBE),
              (t.writeDoubleLE = C.writeDoubleLE),
              (t.writeDoubleBE = C.writeDoubleBE),
              (t.fill = C.fill),
              (t.inspect = C.inspect),
              (t.toArrayBuffer = C.toArrayBuffer),
              t
            );
          };
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/buffer/index.js",
          "/node_modules/gulp-browserify/node_modules/buffer"
        ));
      },
      { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 },
    ],
    4: [
      function (t, e, n) {
        (function (n, r, i, o, a, s, l, c, u) {
          i = t("buffer").Buffer;
          var f = 4,
            p = new i(f);
          p.fill(0),
            (e.exports = {
              hash: function (t, e, n, r) {
                for (
                  var o = e(
                      (function (t, e) {
                        t.length % f != 0 &&
                          ((n = t.length + (f - (t.length % f))),
                          (t = i.concat([t, p], n)));
                        for (
                          var n,
                            r = [],
                            o = e ? t.readInt32BE : t.readInt32LE,
                            a = 0;
                          a < t.length;
                          a += f
                        )
                          r.push(o.call(t, a));
                        return r;
                      })((t = i.isBuffer(t) ? t : new i(t)), r),
                      8 * t.length
                    ),
                    a = ((e = r), new i(n)),
                    s = e ? a.writeInt32BE : a.writeInt32LE,
                    l = 0;
                  l < o.length;
                  l++
                )
                  s.call(a, o[l], 4 * l, !0);
                return a;
              },
            });
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js",
          "/node_modules/gulp-browserify/node_modules/crypto-browserify"
        ));
      },
      { buffer: 3, lYpoI2: 11 },
    ],
    5: [
      function (t, e, n) {
        (function (e, r, i, o, a, s, l, c, u) {
          i = t("buffer").Buffer;
          var f = t("./sha"),
            p = t("./sha256"),
            d = t("./rng"),
            h = { sha1: f, sha256: p, md5: t("./md5") },
            g = 64,
            m = new i(g);
          function y(t, e) {
            var n = h[(t = t || "sha1")],
              r = [];
            return (
              n || v("algorithm:", t, "is not yet supported"),
              {
                update: function (t) {
                  return (
                    i.isBuffer(t) || (t = new i(t)), r.push(t), t.length, this
                  );
                },
                digest: function (t) {
                  var o = i.concat(r);
                  return (
                    (o = e
                      ? (function (t, e, n) {
                          i.isBuffer(e) || (e = new i(e)),
                            i.isBuffer(n) || (n = new i(n)),
                            e.length > g
                              ? (e = t(e))
                              : e.length < g && (e = i.concat([e, m], g));
                          for (
                            var r = new i(g), o = new i(g), a = 0;
                            a < g;
                            a++
                          )
                            (r[a] = 54 ^ e[a]), (o[a] = 92 ^ e[a]);
                          return (n = t(i.concat([r, n]))), t(i.concat([o, n]));
                        })(n, e, o)
                      : n(o)),
                    (r = null),
                    t ? o.toString(t) : o
                  );
                },
              }
            );
          }
          function v() {
            var t = [].slice.call(arguments).join(" ");
            throw new Error(
              [
                t,
                "we accept pull requests",
                "http://github.com/dominictarr/crypto-browserify",
              ].join("\n")
            );
          }
          m.fill(0),
            (n.createHash = function (t) {
              return y(t);
            }),
            (n.createHmac = y),
            (n.randomBytes = function (t, e) {
              if (!e || !e.call) return new i(d(t));
              try {
                e.call(this, void 0, new i(d(t)));
              } catch (n) {
                e(n);
              }
            });
          var w,
            x = [
              "createCredentials",
              "createCipher",
              "createCipheriv",
              "createDecipher",
              "createDecipheriv",
              "createSign",
              "createVerify",
              "createDiffieHellman",
              "pbkdf2",
            ],
            b = function (t) {
              n[t] = function () {
                v("sorry,", t, "is not implemented yet");
              };
            };
          for (w in x) b(x[w]);
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js",
          "/node_modules/gulp-browserify/node_modules/crypto-browserify"
        ));
      },
      {
        "./md5": 6,
        "./rng": 7,
        "./sha": 8,
        "./sha256": 9,
        buffer: 3,
        lYpoI2: 11,
      },
    ],
    6: [
      function (t, e, n) {
        (function (n, r, i, o, a, s, l, c, u) {
          var f = t("./helpers");
          function p(t, e) {
            (t[e >> 5] |= 128 << e % 32), (t[14 + (((e + 64) >>> 9) << 4)] = e);
            for (
              var n = 1732584193,
                r = -271733879,
                i = -1732584194,
                o = 271733878,
                a = 0;
              a < t.length;
              a += 16
            ) {
              var s = n,
                l = r,
                c = i,
                u = o;
              (n = h(n, r, i, o, t[a + 0], 7, -680876936)),
                (o = h(o, n, r, i, t[a + 1], 12, -389564586)),
                (i = h(i, o, n, r, t[a + 2], 17, 606105819)),
                (r = h(r, i, o, n, t[a + 3], 22, -1044525330)),
                (n = h(n, r, i, o, t[a + 4], 7, -176418897)),
                (o = h(o, n, r, i, t[a + 5], 12, 1200080426)),
                (i = h(i, o, n, r, t[a + 6], 17, -1473231341)),
                (r = h(r, i, o, n, t[a + 7], 22, -45705983)),
                (n = h(n, r, i, o, t[a + 8], 7, 1770035416)),
                (o = h(o, n, r, i, t[a + 9], 12, -1958414417)),
                (i = h(i, o, n, r, t[a + 10], 17, -42063)),
                (r = h(r, i, o, n, t[a + 11], 22, -1990404162)),
                (n = h(n, r, i, o, t[a + 12], 7, 1804603682)),
                (o = h(o, n, r, i, t[a + 13], 12, -40341101)),
                (i = h(i, o, n, r, t[a + 14], 17, -1502002290)),
                (n = g(
                  n,
                  (r = h(r, i, o, n, t[a + 15], 22, 1236535329)),
                  i,
                  o,
                  t[a + 1],
                  5,
                  -165796510
                )),
                (o = g(o, n, r, i, t[a + 6], 9, -1069501632)),
                (i = g(i, o, n, r, t[a + 11], 14, 643717713)),
                (r = g(r, i, o, n, t[a + 0], 20, -373897302)),
                (n = g(n, r, i, o, t[a + 5], 5, -701558691)),
                (o = g(o, n, r, i, t[a + 10], 9, 38016083)),
                (i = g(i, o, n, r, t[a + 15], 14, -660478335)),
                (r = g(r, i, o, n, t[a + 4], 20, -405537848)),
                (n = g(n, r, i, o, t[a + 9], 5, 568446438)),
                (o = g(o, n, r, i, t[a + 14], 9, -1019803690)),
                (i = g(i, o, n, r, t[a + 3], 14, -187363961)),
                (r = g(r, i, o, n, t[a + 8], 20, 1163531501)),
                (n = g(n, r, i, o, t[a + 13], 5, -1444681467)),
                (o = g(o, n, r, i, t[a + 2], 9, -51403784)),
                (i = g(i, o, n, r, t[a + 7], 14, 1735328473)),
                (n = m(
                  n,
                  (r = g(r, i, o, n, t[a + 12], 20, -1926607734)),
                  i,
                  o,
                  t[a + 5],
                  4,
                  -378558
                )),
                (o = m(o, n, r, i, t[a + 8], 11, -2022574463)),
                (i = m(i, o, n, r, t[a + 11], 16, 1839030562)),
                (r = m(r, i, o, n, t[a + 14], 23, -35309556)),
                (n = m(n, r, i, o, t[a + 1], 4, -1530992060)),
                (o = m(o, n, r, i, t[a + 4], 11, 1272893353)),
                (i = m(i, o, n, r, t[a + 7], 16, -155497632)),
                (r = m(r, i, o, n, t[a + 10], 23, -1094730640)),
                (n = m(n, r, i, o, t[a + 13], 4, 681279174)),
                (o = m(o, n, r, i, t[a + 0], 11, -358537222)),
                (i = m(i, o, n, r, t[a + 3], 16, -722521979)),
                (r = m(r, i, o, n, t[a + 6], 23, 76029189)),
                (n = m(n, r, i, o, t[a + 9], 4, -640364487)),
                (o = m(o, n, r, i, t[a + 12], 11, -421815835)),
                (i = m(i, o, n, r, t[a + 15], 16, 530742520)),
                (n = y(
                  n,
                  (r = m(r, i, o, n, t[a + 2], 23, -995338651)),
                  i,
                  o,
                  t[a + 0],
                  6,
                  -198630844
                )),
                (o = y(o, n, r, i, t[a + 7], 10, 1126891415)),
                (i = y(i, o, n, r, t[a + 14], 15, -1416354905)),
                (r = y(r, i, o, n, t[a + 5], 21, -57434055)),
                (n = y(n, r, i, o, t[a + 12], 6, 1700485571)),
                (o = y(o, n, r, i, t[a + 3], 10, -1894986606)),
                (i = y(i, o, n, r, t[a + 10], 15, -1051523)),
                (r = y(r, i, o, n, t[a + 1], 21, -2054922799)),
                (n = y(n, r, i, o, t[a + 8], 6, 1873313359)),
                (o = y(o, n, r, i, t[a + 15], 10, -30611744)),
                (i = y(i, o, n, r, t[a + 6], 15, -1560198380)),
                (r = y(r, i, o, n, t[a + 13], 21, 1309151649)),
                (n = y(n, r, i, o, t[a + 4], 6, -145523070)),
                (o = y(o, n, r, i, t[a + 11], 10, -1120210379)),
                (i = y(i, o, n, r, t[a + 2], 15, 718787259)),
                (r = y(r, i, o, n, t[a + 9], 21, -343485551)),
                (n = v(n, s)),
                (r = v(r, l)),
                (i = v(i, c)),
                (o = v(o, u));
            }
            return Array(n, r, i, o);
          }
          function d(t, e, n, r, i, o) {
            return v(((e = v(v(e, t), v(r, o))) << i) | (e >>> (32 - i)), n);
          }
          function h(t, e, n, r, i, o, a) {
            return d((e & n) | (~e & r), t, e, i, o, a);
          }
          function g(t, e, n, r, i, o, a) {
            return d((e & r) | (n & ~r), t, e, i, o, a);
          }
          function m(t, e, n, r, i, o, a) {
            return d(e ^ n ^ r, t, e, i, o, a);
          }
          function y(t, e, n, r, i, o, a) {
            return d(n ^ (e | ~r), t, e, i, o, a);
          }
          function v(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
          }
          e.exports = function (t) {
            return f.hash(t, p, 16);
          };
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js",
          "/node_modules/gulp-browserify/node_modules/crypto-browserify"
        ));
      },
      { "./helpers": 4, buffer: 3, lYpoI2: 11 },
    ],
    7: [
      function (t, e, n) {
        (function (t, n, r, i, o, a, s, l, c) {
          e.exports = function (t) {
            for (var e, n = new Array(t), r = 0; r < t; r++)
              !(3 & r) && (e = 4294967296 * Math.random()),
                (n[r] = (e >>> ((3 & r) << 3)) & 255);
            return n;
          };
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js",
          "/node_modules/gulp-browserify/node_modules/crypto-browserify"
        ));
      },
      { buffer: 3, lYpoI2: 11 },
    ],
    8: [
      function (t, e, n) {
        (function (n, r, i, o, a, s, l, c, u) {
          var f = t("./helpers");
          function p(t, e) {
            (t[e >> 5] |= 128 << (24 - (e % 32))),
              (t[15 + (((e + 64) >> 9) << 4)] = e);
            for (
              var n,
                r,
                i,
                o = Array(80),
                a = 1732584193,
                s = -271733879,
                l = -1732584194,
                c = 271733878,
                u = -1009589776,
                f = 0;
              f < t.length;
              f += 16
            ) {
              for (var p = a, g = s, m = l, y = c, v = u, w = 0; w < 80; w++) {
                o[w] =
                  w < 16
                    ? t[f + w]
                    : h(o[w - 3] ^ o[w - 8] ^ o[w - 14] ^ o[w - 16], 1);
                var x = d(
                  d(
                    h(a, 5),
                    ((x = s),
                    (r = l),
                    (i = c),
                    (n = w) < 20
                      ? (x & r) | (~x & i)
                      : !(n < 40) && n < 60
                      ? (x & r) | (x & i) | (r & i)
                      : x ^ r ^ i)
                  ),
                  d(
                    d(u, o[w]),
                    (n = w) < 20
                      ? 1518500249
                      : n < 40
                      ? 1859775393
                      : n < 60
                      ? -1894007588
                      : -899497514
                  )
                );
                (u = c), (c = l), (l = h(s, 30)), (s = a), (a = x);
              }
              (a = d(a, p)),
                (s = d(s, g)),
                (l = d(l, m)),
                (c = d(c, y)),
                (u = d(u, v));
            }
            return Array(a, s, l, c, u);
          }
          function d(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
          }
          function h(t, e) {
            return (t << e) | (t >>> (32 - e));
          }
          e.exports = function (t) {
            return f.hash(t, p, 20, !0);
          };
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js",
          "/node_modules/gulp-browserify/node_modules/crypto-browserify"
        ));
      },
      { "./helpers": 4, buffer: 3, lYpoI2: 11 },
    ],
    9: [
      function (t, e, n) {
        (function (n, r, i, o, a, s, l, c, u) {
          function f(t, e) {
            var n = (65535 & t) + (65535 & e);
            return (((t >> 16) + (e >> 16) + (n >> 16)) << 16) | (65535 & n);
          }
          function p(t, e) {
            var n,
              r = new Array(
                1116352408,
                1899447441,
                3049323471,
                3921009573,
                961987163,
                1508970993,
                2453635748,
                2870763221,
                3624381080,
                310598401,
                607225278,
                1426881987,
                1925078388,
                2162078206,
                2614888103,
                3248222580,
                3835390401,
                4022224774,
                264347078,
                604807628,
                770255983,
                1249150122,
                1555081692,
                1996064986,
                2554220882,
                2821834349,
                2952996808,
                3210313671,
                3336571891,
                3584528711,
                113926993,
                338241895,
                666307205,
                773529912,
                1294757372,
                1396182291,
                1695183700,
                1986661051,
                2177026350,
                2456956037,
                2730485921,
                2820302411,
                3259730800,
                3345764771,
                3516065817,
                3600352804,
                4094571909,
                275423344,
                430227734,
                506948616,
                659060556,
                883997877,
                958139571,
                1322822218,
                1537002063,
                1747873779,
                1955562222,
                2024104815,
                2227730452,
                2361852424,
                2428436474,
                2756734187,
                3204031479,
                3329325298
              ),
              i = new Array(
                1779033703,
                3144134277,
                1013904242,
                2773480762,
                1359893119,
                2600822924,
                528734635,
                1541459225
              ),
              o = new Array(64);
            (t[e >> 5] |= 128 << (24 - (e % 32))),
              (t[15 + (((e + 64) >> 9) << 4)] = e);
            for (var a, s, l = 0; l < t.length; l += 16) {
              for (
                var c = i[0],
                  u = i[1],
                  p = i[2],
                  d = i[3],
                  m = i[4],
                  y = i[5],
                  v = i[6],
                  w = i[7],
                  x = 0;
                x < 64;
                x++
              )
                (o[x] =
                  x < 16
                    ? t[x + l]
                    : f(
                        f(
                          f(
                            ((s = o[x - 2]), h(s, 17) ^ h(s, 19) ^ g(s, 10)),
                            o[x - 7]
                          ),
                          ((s = o[x - 15]), h(s, 7) ^ h(s, 18) ^ g(s, 3))
                        ),
                        o[x - 16]
                      )),
                  (n = f(
                    f(
                      f(
                        f(w, h((s = m), 6) ^ h(s, 11) ^ h(s, 25)),
                        (m & y) ^ (~m & v)
                      ),
                      r[x]
                    ),
                    o[x]
                  )),
                  (a = f(
                    h((a = c), 2) ^ h(a, 13) ^ h(a, 22),
                    (c & u) ^ (c & p) ^ (u & p)
                  )),
                  (w = v),
                  (v = y),
                  (y = m),
                  (m = f(d, n)),
                  (d = p),
                  (p = u),
                  (u = c),
                  (c = f(n, a));
              (i[0] = f(c, i[0])),
                (i[1] = f(u, i[1])),
                (i[2] = f(p, i[2])),
                (i[3] = f(d, i[3])),
                (i[4] = f(m, i[4])),
                (i[5] = f(y, i[5])),
                (i[6] = f(v, i[6])),
                (i[7] = f(w, i[7]));
            }
            return i;
          }
          var d = t("./helpers"),
            h = function (t, e) {
              return (t >>> e) | (t << (32 - e));
            },
            g = function (t, e) {
              return t >>> e;
            };
          e.exports = function (t) {
            return d.hash(t, p, 32, !0);
          };
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js",
          "/node_modules/gulp-browserify/node_modules/crypto-browserify"
        ));
      },
      { "./helpers": 4, buffer: 3, lYpoI2: 11 },
    ],
    10: [
      function (t, e, n) {
        (function (t, e, r, i, o, a, s, l, c) {
          (n.read = function (t, e, n, r, i) {
            var o,
              a,
              s = 8 * i - r - 1,
              l = (1 << s) - 1,
              c = l >> 1,
              u = -7,
              f = n ? i - 1 : 0,
              p = n ? -1 : 1;
            for (
              i = t[e + f], f += p, o = i & ((1 << -u) - 1), i >>= -u, u += s;
              0 < u;
              o = 256 * o + t[e + f], f += p, u -= 8
            );
            for (
              a = o & ((1 << -u) - 1), o >>= -u, u += r;
              0 < u;
              a = 256 * a + t[e + f], f += p, u -= 8
            );
            if (0 === o) o = 1 - c;
            else {
              if (o === l) return a ? NaN : (1 / 0) * (i ? -1 : 1);
              (a += Math.pow(2, r)), (o -= c);
            }
            return (i ? -1 : 1) * a * Math.pow(2, o - r);
          }),
            (n.write = function (t, e, n, r, i, o) {
              var a,
                s,
                l = 8 * o - i - 1,
                c = (1 << l) - 1,
                u = c >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = r ? 0 : o - 1,
                d = r ? 1 : -1;
              for (
                o = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
                  e = Math.abs(e),
                  isNaN(e) || e === 1 / 0
                    ? ((s = isNaN(e) ? 1 : 0), (a = c))
                    : ((a = Math.floor(Math.log(e) / Math.LN2)),
                      e * (r = Math.pow(2, -a)) < 1 && (a--, (r *= 2)),
                      2 <=
                        (e += 1 <= a + u ? f / r : f * Math.pow(2, 1 - u)) *
                          r && (a++, (r /= 2)),
                      c <= a + u
                        ? ((s = 0), (a = c))
                        : 1 <= a + u
                        ? ((s = (e * r - 1) * Math.pow(2, i)), (a += u))
                        : ((s = e * Math.pow(2, u - 1) * Math.pow(2, i)),
                          (a = 0)));
                8 <= i;
                t[n + p] = 255 & s, p += d, s /= 256, i -= 8
              );
              for (
                a = (a << i) | s, l += i;
                0 < l;
                t[n + p] = 255 & a, p += d, a /= 256, l -= 8
              );
              t[n + p - d] |= 128 * o;
            });
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/ieee754/index.js",
          "/node_modules/gulp-browserify/node_modules/ieee754"
        ));
      },
      { buffer: 3, lYpoI2: 11 },
    ],
    11: [
      function (t, e, n) {
        (function (t, n, r, i, o, a, s, l, c) {
          var u, f, p;
          function d() {}
          ((t = e.exports = {}).nextTick =
            ((f = typeof window < "u" && window.setImmediate),
            (p =
              typeof window < "u" &&
              window.postMessage &&
              window.addEventListener),
            f
              ? function (t) {
                  return window.setImmediate(t);
                }
              : p
              ? ((u = []),
                window.addEventListener(
                  "message",
                  function (t) {
                    var e = t.source;
                    (e !== window && null !== e) ||
                      "process-tick" !== t.data ||
                      (t.stopPropagation(), 0 < u.length && u.shift()());
                  },
                  !0
                ),
                function (t) {
                  u.push(t), window.postMessage("process-tick", "*");
                })
              : function (t) {
                  setTimeout(t, 0);
                })),
            (t.title = "browser"),
            (t.browser = !0),
            (t.env = {}),
            (t.argv = []),
            (t.on = d),
            (t.addListener = d),
            (t.once = d),
            (t.off = d),
            (t.removeListener = d),
            (t.removeAllListeners = d),
            (t.emit = d),
            (t.binding = function (t) {
              throw new Error("process.binding is not supported");
            }),
            (t.cwd = function () {
              return "/";
            }),
            (t.chdir = function (t) {
              throw new Error("process.chdir is not supported");
            });
        }.call(
          this,
          t("lYpoI2"),
          typeof self < "u" ? self : typeof window < "u" ? window : {},
          t("buffer").Buffer,
          arguments[3],
          arguments[4],
          arguments[5],
          arguments[6],
          "/node_modules/gulp-browserify/node_modules/process/browser.js",
          "/node_modules/gulp-browserify/node_modules/process"
        ));
      },
      { buffer: 3, lYpoI2: 11 },
    ],
  },
  {},
  [1]
)(1);
var Sn = [
  "abs",
  "acos",
  "all",
  "any",
  "asin",
  "atan",
  "ceil",
  "clamp",
  "cos",
  "cross",
  "dFdx",
  "dFdy",
  "degrees",
  "distance",
  "dot",
  "equal",
  "exp",
  "exp2",
  "faceforward",
  "floor",
  "fract",
  "gl_BackColor",
  "gl_BackLightModelProduct",
  "gl_BackLightProduct",
  "gl_BackMaterial",
  "gl_BackSecondaryColor",
  "gl_ClipPlane",
  "gl_ClipVertex",
  "gl_Color",
  "gl_DepthRange",
  "gl_DepthRangeParameters",
  "gl_EyePlaneQ",
  "gl_EyePlaneR",
  "gl_EyePlaneS",
  "gl_EyePlaneT",
  "gl_Fog",
  "gl_FogCoord",
  "gl_FogFragCoord",
  "gl_FogParameters",
  "gl_FragColor",
  "gl_FragCoord",
  "gl_FragData",
  "gl_FragDepth",
  "gl_FragDepthEXT",
  "gl_FrontColor",
  "gl_FrontFacing",
  "gl_FrontLightModelProduct",
  "gl_FrontLightProduct",
  "gl_FrontMaterial",
  "gl_FrontSecondaryColor",
  "gl_LightModel",
  "gl_LightModelParameters",
  "gl_LightModelProducts",
  "gl_LightProducts",
  "gl_LightSource",
  "gl_LightSourceParameters",
  "gl_MaterialParameters",
  "gl_MaxClipPlanes",
  "gl_MaxCombinedTextureImageUnits",
  "gl_MaxDrawBuffers",
  "gl_MaxFragmentUniformComponents",
  "gl_MaxLights",
  "gl_MaxTextureCoords",
  "gl_MaxTextureImageUnits",
  "gl_MaxTextureUnits",
  "gl_MaxVaryingFloats",
  "gl_MaxVertexAttribs",
  "gl_MaxVertexTextureImageUnits",
  "gl_MaxVertexUniformComponents",
  "gl_ModelViewMatrix",
  "gl_ModelViewMatrixInverse",
  "gl_ModelViewMatrixInverseTranspose",
  "gl_ModelViewMatrixTranspose",
  "gl_ModelViewProjectionMatrix",
  "gl_ModelViewProjectionMatrixInverse",
  "gl_ModelViewProjectionMatrixInverseTranspose",
  "gl_ModelViewProjectionMatrixTranspose",
  "gl_MultiTexCoord0",
  "gl_MultiTexCoord1",
  "gl_MultiTexCoord2",
  "gl_MultiTexCoord3",
  "gl_MultiTexCoord4",
  "gl_MultiTexCoord5",
  "gl_MultiTexCoord6",
  "gl_MultiTexCoord7",
  "gl_Normal",
  "gl_NormalMatrix",
  "gl_NormalScale",
  "gl_ObjectPlaneQ",
  "gl_ObjectPlaneR",
  "gl_ObjectPlaneS",
  "gl_ObjectPlaneT",
  "gl_Point",
  "gl_PointCoord",
  "gl_PointParameters",
  "gl_PointSize",
  "gl_Position",
  "gl_ProjectionMatrix",
  "gl_ProjectionMatrixInverse",
  "gl_ProjectionMatrixInverseTranspose",
  "gl_ProjectionMatrixTranspose",
  "gl_SecondaryColor",
  "gl_TexCoord",
  "gl_TextureEnvColor",
  "gl_TextureMatrix",
  "gl_TextureMatrixInverse",
  "gl_TextureMatrixInverseTranspose",
  "gl_TextureMatrixTranspose",
  "gl_Vertex",
  "greaterThan",
  "greaterThanEqual",
  "inversesqrt",
  "length",
  "lessThan",
  "lessThanEqual",
  "log",
  "log2",
  "matrixCompMult",
  "max",
  "min",
  "mix",
  "mod",
  "normalize",
  "not",
  "notEqual",
  "pow",
  "radians",
  "reflect",
  "refract",
  "sign",
  "sin",
  "smoothstep",
  "sqrt",
  "step",
  "tan",
  "texture2D",
  "texture2DLod",
  "texture2DProj",
  "texture2DProjLod",
  "textureCube",
  "textureCubeLod",
  "texture2DLodEXT",
  "texture2DProjLodEXT",
  "textureCubeLodEXT",
  "texture2DGradEXT",
  "texture2DProjGradEXT",
  "textureCubeGradEXT",
];
function En(t) {
  var e = (function (t, e) {
    if ("object" != typeof t || null === t) return t;
    var n = t[Symbol.toPrimitive];
    if (void 0 !== n) {
      var r = n.call(t, e || "default");
      if ("object" != typeof r) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e ? String : Number)(t);
  })(t, "string");
  return "symbol" == typeof e ? e : String(e);
}
function In(t, e, n) {
  return (
    (e = En(e)) in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
(Sn = Sn.slice().filter(function (t) {
  return !/^(gl\_|texture)/.test(t);
})),
  Sn.concat([
    "gl_VertexID",
    "gl_InstanceID",
    "gl_Position",
    "gl_PointSize",
    "gl_FragCoord",
    "gl_FrontFacing",
    "gl_FragDepth",
    "gl_PointCoord",
    "gl_MaxVertexAttribs",
    "gl_MaxVertexUniformVectors",
    "gl_MaxVertexOutputVectors",
    "gl_MaxFragmentInputVectors",
    "gl_MaxVertexTextureImageUnits",
    "gl_MaxCombinedTextureImageUnits",
    "gl_MaxTextureImageUnits",
    "gl_MaxFragmentUniformVectors",
    "gl_MaxDrawBuffers",
    "gl_MinProgramTexelOffset",
    "gl_MaxProgramTexelOffset",
    "gl_DepthRangeParameters",
    "gl_DepthRange",
    "trunc",
    "round",
    "roundEven",
    "isnan",
    "isinf",
    "floatBitsToInt",
    "floatBitsToUint",
    "intBitsToFloat",
    "uintBitsToFloat",
    "packSnorm2x16",
    "unpackSnorm2x16",
    "packUnorm2x16",
    "unpackUnorm2x16",
    "packHalf2x16",
    "unpackHalf2x16",
    "outerProduct",
    "transpose",
    "determinant",
    "inverse",
    "texture",
    "textureSize",
    "textureProj",
    "textureLod",
    "textureOffset",
    "texelFetch",
    "texelFetchOffset",
    "textureProjOffset",
    "textureLodOffset",
    "textureProjLod",
    "textureProjLodOffset",
    "textureGrad",
    "textureGradOffset",
    "textureProjGrad",
    "textureProjGradOffset",
  ]);
var Cn,
  An,
  Un,
  Pn = "csm_Position",
  Bn = "csm_PositionRaw",
  Ln = "csm_PointSize",
  Dn = "csm_FragColor",
  zn = "csm_DiffuseColor",
  Rn = "csm_Normal",
  kn = "csm_Roughness",
  jn = "csm_Metalness",
  Fn = "csm_Emissive",
  Nn = "csm_AO",
  On = "csm_Bump",
  Vn = "csm_DepthAlpha";
In((Cn = {}), "".concat(Rn), {
  "#include <beginnormal_vertex>": "\n    vec3 objectNormal = ".concat(
    Rn,
    ";\n    #ifdef USE_TANGENT\n\t    vec3 objectTangent = vec3( tangent.xyz );\n    #endif\n    "
  ),
}),
  In(Cn, "".concat(Pn), {
    "#include <begin_vertex>": "\n    vec3 transformed = ".concat(Pn, ";\n  "),
  }),
  In(Cn, "".concat(Bn), {
    "#include <begin_vertex>":
      "\n    vec4 csm_internal_positionUnprojected = ".concat(
        Bn,
        ";\n    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;\n    #ifdef USE_INSTANCING\n      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;\n    #endif\n    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;\n    vec3 transformed = csm_internal_positionUnprojected.xyz;\n  "
      ),
  }),
  In(Cn, "".concat(Ln), {
    "gl_PointSize = size;": "\n    gl_PointSize = ".concat(Ln, ";\n    "),
  }),
  In(Cn, "".concat(zn), {
    "#include <color_fragment>":
      "\n    #include <color_fragment>\n    diffuseColor = ".concat(
        zn,
        ";\n  "
      ),
  }),
  In(Cn, "".concat(Dn), {
    "#include <dithering_fragment>":
      "\n    #include <dithering_fragment>\n    gl_FragColor  = ".concat(
        Dn,
        ";\n  "
      ),
  }),
  In(Cn, "".concat(Fn), {
    "vec3 totalEmissiveRadiance = emissive;":
      "\n    vec3 totalEmissiveRadiance = ".concat(Fn, ";\n    "),
  }),
  In(Cn, "".concat(kn), {
    "#include <roughnessmap_fragment>":
      "\n    #include <roughnessmap_fragment>\n    roughnessFactor = ".concat(
        kn,
        ";\n    "
      ),
  }),
  In(Cn, "".concat(jn), {
    "#include <metalnessmap_fragment>":
      "\n    #include <metalnessmap_fragment>\n    metalnessFactor = ".concat(
        jn,
        ";\n    "
      ),
  }),
  In(Cn, "".concat(Nn), {
    "#include <aomap_fragment>":
      "\n    #include <aomap_fragment>\n    reflectedLight.indirectDiffuse *= 1. - ".concat(
        Nn,
        ";\n    "
      ),
  }),
  In(Cn, "".concat(On), {
    "#include <normal_fragment_maps>":
      "\n    #include <normal_fragment_maps>\n\n    vec3 csm_internal_orthogonal = "
        .concat(On, " - (dot(")
        .concat(
          On,
          ", normal) * normal);\n    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;\n    normal = normalize(normal - csm_internal_projectedbump);\n    "
        ),
  }),
  In(Cn, "".concat(Vn), {
    "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );":
      "\n      gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity * ".concat(
        Vn,
        " );\n    "
      ),
    "gl_FragColor = packDepthToRGBA( fragCoordZ );":
      "\n      gl_FragColor = packDepthToRGBA( fragCoordZ );\n      gl_FragColor.a *= ".concat(
        Vn,
        ";\n    "
      ),
  }),
  In((An = {}), "".concat(Pn), {
    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":
      "\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( ".concat(
        Pn,
        ", 1.0 );\n  "
      ),
  }),
  In(An, "".concat(Bn), {
    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":
      "\n    gl_Position = ".concat(Pn, ";\n  "),
  }),
  In(An, "".concat(zn), {
    "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":
      "\n    gl_FragColor = ".concat(zn, ";\n  "),
  }),
  In(An, "".concat(Dn), {
    "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );":
      "\n    gl_FragColor = ".concat(Dn, ";\n  "),
  }),
  In((Un = {}), "".concat(Pn), "*"),
  In(Un, "".concat(Bn), "*"),
  In(Un, "".concat(Rn), "*"),
  In(Un, "".concat(Ln), ["PointsMaterial"]),
  In(Un, "".concat(zn), "*"),
  In(Un, "".concat(Dn), "*"),
  In(Un, "".concat(Fn), ["MeshStandardMaterial", "MeshPhysicalMaterial"]),
  In(Un, "".concat(kn), ["MeshStandardMaterial", "MeshPhysicalMaterial"]),
  In(Un, "".concat(jn), ["MeshStandardMaterial", "MeshPhysicalMaterial"]),
  In(Un, "".concat(Nn), [
    "MeshStandardMaterial",
    "MeshPhysicalMaterial",
    "MeshBasicMaterial",
    "MeshLambertMaterial",
    "MeshPhongMaterial",
    "MeshToonMaterial",
  ]),
  In(Un, "".concat(On), [
    "MeshLambertMaterial",
    "MeshMatcapMaterial",
    "MeshNormalMaterial",
    "MeshPhongMaterial",
    "MeshPhysicalMaterial",
    "MeshStandardMaterial",
    "MeshToonMaterial",
    "ShadowMaterial",
  ]),
  In(Un, "".concat(Vn), "*"),
  new N(),
  new I(),
  (V.line = {
    worldUnits: { value: 1 },
    linewidth: { value: 1 },
    resolution: { value: new O(1, 1) },
    dashOffset: { value: 0 },
    dashScale: { value: 1 },
    dashSize: { value: 1 },
    gapSize: { value: 1 },
  }),
  (Ut.line = {
    uniforms: A.merge([V.common, V.fog, V.line]),
    vertexShader:
      "\n\t\t#include <common>\n\t\t#include <color_pars_vertex>\n\t\t#include <fog_pars_vertex>\n\t\t#include <logdepthbuf_pars_vertex>\n\t\t#include <clipping_planes_pars_vertex>\n\n\t\tuniform float linewidth;\n\t\tuniform vec2 resolution;\n\n\t\tattribute vec3 instanceStart;\n\t\tattribute vec3 instanceEnd;\n\n\t\tattribute vec3 instanceColorStart;\n\t\tattribute vec3 instanceColorEnd;\n\n\t\t#ifdef WORLD_UNITS\n\n\t\t\tvarying vec4 worldPos;\n\t\t\tvarying vec3 worldStart;\n\t\t\tvarying vec3 worldEnd;\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tvarying vec2 vUv;\n\n\t\t\t#endif\n\n\t\t#else\n\n\t\t\tvarying vec2 vUv;\n\n\t\t#endif\n\n\t\t#ifdef USE_DASH\n\n\t\t\tuniform float dashScale;\n\t\t\tattribute float instanceDistanceStart;\n\t\t\tattribute float instanceDistanceEnd;\n\t\t\tvarying float vLineDistance;\n\n\t\t#endif\n\n\t\tvoid trimSegment( const in vec4 start, inout vec4 end ) {\n\n\t\t\t// trim end segment so it terminates between the camera plane and the near plane\n\n\t\t\t// conservative estimate of the near plane\n\t\t\tfloat a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column\n\t\t\tfloat b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column\n\t\t\tfloat nearEstimate = - 0.5 * b / a;\n\n\t\t\tfloat alpha = ( nearEstimate - start.z ) / ( end.z - start.z );\n\n\t\t\tend.xyz = mix( start.xyz, end.xyz, alpha );\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\t#ifdef USE_COLOR\n\n\t\t\t\tvColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;\n\n\t\t\t#endif\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tvLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;\n\t\t\t\tvUv = uv;\n\n\t\t\t#endif\n\n\t\t\tfloat aspect = resolution.x / resolution.y;\n\n\t\t\t// camera space\n\t\t\tvec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );\n\t\t\tvec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );\n\n\t\t\t#ifdef WORLD_UNITS\n\n\t\t\t\tworldStart = start.xyz;\n\t\t\t\tworldEnd = end.xyz;\n\n\t\t\t#else\n\n\t\t\t\tvUv = uv;\n\n\t\t\t#endif\n\n\t\t\t// special case for perspective projection, and segments that terminate either in, or behind, the camera plane\n\t\t\t// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space\n\t\t\t// but we need to perform ndc-space calculations in the shader, so we must address this issue directly\n\t\t\t// perhaps there is a more elegant solution -- WestLangley\n\n\t\t\tbool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column\n\n\t\t\tif ( perspective ) {\n\n\t\t\t\tif ( start.z < 0.0 && end.z >= 0.0 ) {\n\n\t\t\t\t\ttrimSegment( start, end );\n\n\t\t\t\t} else if ( end.z < 0.0 && start.z >= 0.0 ) {\n\n\t\t\t\t\ttrimSegment( end, start );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\t// clip space\n\t\t\tvec4 clipStart = projectionMatrix * start;\n\t\t\tvec4 clipEnd = projectionMatrix * end;\n\n\t\t\t// ndc space\n\t\t\tvec3 ndcStart = clipStart.xyz / clipStart.w;\n\t\t\tvec3 ndcEnd = clipEnd.xyz / clipEnd.w;\n\n\t\t\t// direction\n\t\t\tvec2 dir = ndcEnd.xy - ndcStart.xy;\n\n\t\t\t// account for clip-space aspect ratio\n\t\t\tdir.x *= aspect;\n\t\t\tdir = normalize( dir );\n\n\t\t\t#ifdef WORLD_UNITS\n\n\t\t\t\tvec3 worldDir = normalize( end.xyz - start.xyz );\n\t\t\t\tvec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );\n\t\t\t\tvec3 worldUp = normalize( cross( worldDir, tmpFwd ) );\n\t\t\t\tvec3 worldFwd = cross( worldDir, worldUp );\n\t\t\t\tworldPos = position.y < 0.5 ? start: end;\n\n\t\t\t\t// height offset\n\t\t\t\tfloat hw = linewidth * 0.5;\n\t\t\t\tworldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;\n\n\t\t\t\t// don't extend the line if we're rendering dashes because we\n\t\t\t\t// won't be rendering the endcaps\n\t\t\t\t#ifndef USE_DASH\n\n\t\t\t\t\t// cap extension\n\t\t\t\t\tworldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;\n\n\t\t\t\t\t// add width to the box\n\t\t\t\t\tworldPos.xyz += worldFwd * hw;\n\n\t\t\t\t\t// endcaps\n\t\t\t\t\tif ( position.y > 1.0 || position.y < 0.0 ) {\n\n\t\t\t\t\t\tworldPos.xyz -= worldFwd * 2.0 * hw;\n\n\t\t\t\t\t}\n\n\t\t\t\t#endif\n\n\t\t\t\t// project the worldpos\n\t\t\t\tvec4 clip = projectionMatrix * worldPos;\n\n\t\t\t\t// shift the depth of the projected points so the line\n\t\t\t\t// segments overlap neatly\n\t\t\t\tvec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;\n\t\t\t\tclip.z = clipPose.z * clip.w;\n\n\t\t\t#else\n\n\t\t\t\tvec2 offset = vec2( dir.y, - dir.x );\n\t\t\t\t// undo aspect ratio adjustment\n\t\t\t\tdir.x /= aspect;\n\t\t\t\toffset.x /= aspect;\n\n\t\t\t\t// sign flip\n\t\t\t\tif ( position.x < 0.0 ) offset *= - 1.0;\n\n\t\t\t\t// endcaps\n\t\t\t\tif ( position.y < 0.0 ) {\n\n\t\t\t\t\toffset += - dir;\n\n\t\t\t\t} else if ( position.y > 1.0 ) {\n\n\t\t\t\t\toffset += dir;\n\n\t\t\t\t}\n\n\t\t\t\t// adjust for linewidth\n\t\t\t\toffset *= linewidth;\n\n\t\t\t\t// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...\n\t\t\t\toffset /= resolution.y;\n\n\t\t\t\t// select end\n\t\t\t\tvec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;\n\n\t\t\t\t// back to clip space\n\t\t\t\toffset *= clip.w;\n\n\t\t\t\tclip.xy += offset;\n\n\t\t\t#endif\n\n\t\t\tgl_Position = clip;\n\n\t\t\tvec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation\n\n\t\t\t#include <logdepthbuf_vertex>\n\t\t\t#include <clipping_planes_vertex>\n\t\t\t#include <fog_vertex>\n\n\t\t}\n\t\t",
    fragmentShader:
      "\n\t\tuniform vec3 diffuse;\n\t\tuniform float opacity;\n\t\tuniform float linewidth;\n\n\t\t#ifdef USE_DASH\n\n\t\t\tuniform float dashOffset;\n\t\t\tuniform float dashSize;\n\t\t\tuniform float gapSize;\n\n\t\t#endif\n\n\t\tvarying float vLineDistance;\n\n\t\t#ifdef WORLD_UNITS\n\n\t\t\tvarying vec4 worldPos;\n\t\t\tvarying vec3 worldStart;\n\t\t\tvarying vec3 worldEnd;\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tvarying vec2 vUv;\n\n\t\t\t#endif\n\n\t\t#else\n\n\t\t\tvarying vec2 vUv;\n\n\t\t#endif\n\n\t\t#include <common>\n\t\t#include <color_pars_fragment>\n\t\t#include <fog_pars_fragment>\n\t\t#include <logdepthbuf_pars_fragment>\n\t\t#include <clipping_planes_pars_fragment>\n\n\t\tvec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {\n\n\t\t\tfloat mua;\n\t\t\tfloat mub;\n\n\t\t\tvec3 p13 = p1 - p3;\n\t\t\tvec3 p43 = p4 - p3;\n\n\t\t\tvec3 p21 = p2 - p1;\n\n\t\t\tfloat d1343 = dot( p13, p43 );\n\t\t\tfloat d4321 = dot( p43, p21 );\n\t\t\tfloat d1321 = dot( p13, p21 );\n\t\t\tfloat d4343 = dot( p43, p43 );\n\t\t\tfloat d2121 = dot( p21, p21 );\n\n\t\t\tfloat denom = d2121 * d4343 - d4321 * d4321;\n\n\t\t\tfloat numer = d1343 * d4321 - d1321 * d4343;\n\n\t\t\tmua = numer / denom;\n\t\t\tmua = clamp( mua, 0.0, 1.0 );\n\t\t\tmub = ( d1343 + d4321 * ( mua ) ) / d4343;\n\t\t\tmub = clamp( mub, 0.0, 1.0 );\n\n\t\t\treturn vec2( mua, mub );\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\t#include <clipping_planes_fragment>\n\n\t\t\t#ifdef USE_DASH\n\n\t\t\t\tif ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps\n\n\t\t\t\tif ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX\n\n\t\t\t#endif\n\n\t\t\tfloat alpha = opacity;\n\n\t\t\t#ifdef WORLD_UNITS\n\n\t\t\t\t// Find the closest points on the view ray and the line segment\n\t\t\t\tvec3 rayEnd = normalize( worldPos.xyz ) * 1e5;\n\t\t\t\tvec3 lineDir = worldEnd - worldStart;\n\t\t\t\tvec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );\n\n\t\t\t\tvec3 p1 = worldStart + lineDir * params.x;\n\t\t\t\tvec3 p2 = rayEnd * params.y;\n\t\t\t\tvec3 delta = p1 - p2;\n\t\t\t\tfloat len = length( delta );\n\t\t\t\tfloat norm = len / linewidth;\n\n\t\t\t\t#ifndef USE_DASH\n\n\t\t\t\t\t#ifdef USE_ALPHA_TO_COVERAGE\n\n\t\t\t\t\t\tfloat dnorm = fwidth( norm );\n\t\t\t\t\t\talpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );\n\n\t\t\t\t\t#else\n\n\t\t\t\t\t\tif ( norm > 0.5 ) {\n\n\t\t\t\t\t\t\tdiscard;\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t#endif\n\n\t\t\t\t#endif\n\n\t\t\t#else\n\n\t\t\t\t#ifdef USE_ALPHA_TO_COVERAGE\n\n\t\t\t\t\t// artifacts appear on some hardware if a derivative is taken within a conditional\n\t\t\t\t\tfloat a = vUv.x;\n\t\t\t\t\tfloat b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n\t\t\t\t\tfloat len2 = a * a + b * b;\n\t\t\t\t\tfloat dlen = fwidth( len2 );\n\n\t\t\t\t\tif ( abs( vUv.y ) > 1.0 ) {\n\n\t\t\t\t\t\talpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );\n\n\t\t\t\t\t}\n\n\t\t\t\t#else\n\n\t\t\t\t\tif ( abs( vUv.y ) > 1.0 ) {\n\n\t\t\t\t\t\tfloat a = vUv.x;\n\t\t\t\t\t\tfloat b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n\t\t\t\t\t\tfloat len2 = a * a + b * b;\n\n\t\t\t\t\t\tif ( len2 > 1.0 ) discard;\n\n\t\t\t\t\t}\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvec4 diffuseColor = vec4( diffuse, alpha );\n\n\t\t\t#include <logdepthbuf_fragment>\n\t\t\t#include <color_fragment>\n\n\t\t\tgl_FragColor = vec4( diffuseColor.rgb, alpha );\n\n\t\t\t#include <tonemapping_fragment>\n\t\t\t#include <colorspace_fragment>\n\t\t\t#include <fog_fragment>\n\t\t\t#include <premultiplied_alpha_fragment>\n\n\t\t}\n\t\t",
  }),
  new H(),
  new I(),
  new I(),
  new H(),
  new H(),
  new H(),
  new I(),
  new F(),
  new W(),
  new I(),
  new N(),
  new G(),
  new H();
Boolean, new E(16777215);
!(function () {
  var t = function () {
    function e(t) {
      return i.appendChild(t.dom), t;
    }
    function n(t) {
      for (var e = 0; e < i.children.length; e++)
        i.children[e].style.display = e === t ? "block" : "none";
      r = t;
    }
    var r = 0,
      i = document.createElement("div");
    (i.style.cssText =
      "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
      i.addEventListener(
        "click",
        function (t) {
          t.preventDefault(), n(++r % i.children.length);
        },
        !1
      );
    var o = (performance || Date).now(),
      a = o,
      s = 0,
      l = e(new t.Panel("FPS", "#0ff", "#002")),
      c = e(new t.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory)
      var u = e(new t.Panel("MB", "#f08", "#201"));
    return (
      n(0),
      {
        REVISION: 16,
        dom: i,
        addPanel: e,
        showPanel: n,
        begin: function () {
          o = (performance || Date).now();
        },
        end: function () {
          s++;
          var t = (performance || Date).now();
          if (
            (c.update(t - o, 200),
            t > a + 1e3 &&
              (l.update((1e3 * s) / (t - a), 100), (a = t), (s = 0), u))
          ) {
            var e = performance.memory;
            u.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576);
          }
          return t;
        },
        update: function () {
          o = this.end();
        },
        domElement: i,
        setMode: n,
      }
    );
  };
  t.Panel = function (t, e, n) {
    var r = 1 / 0,
      i = 0,
      o = Math.round,
      a = o(window.devicePixelRatio || 1),
      s = 80 * a,
      l = 48 * a,
      c = 3 * a,
      u = 2 * a,
      f = 3 * a,
      p = 15 * a,
      d = 74 * a,
      h = 30 * a,
      g = document.createElement("canvas");
    (g.width = s), (g.height = l), (g.style.cssText = "width:80px;height:48px");
    var m = g.getContext("2d");
    return (
      (m.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif"),
      (m.textBaseline = "top"),
      (m.fillStyle = n),
      m.fillRect(0, 0, s, l),
      (m.fillStyle = e),
      m.fillText(t, c, u),
      m.fillRect(f, p, d, h),
      (m.fillStyle = n),
      (m.globalAlpha = 0.9),
      m.fillRect(f, p, d, h),
      {
        dom: g,
        update: function (l, y) {
          (r = Math.min(r, l)),
            (i = Math.max(i, l)),
            (m.fillStyle = n),
            (m.globalAlpha = 1),
            m.fillRect(0, 0, s, p),
            (m.fillStyle = e),
            m.fillText(o(l) + " " + t + " (" + o(r) + "-" + o(i) + ")", c, u),
            m.drawImage(g, f + a, p, d - a, h, f, p, d - a, h),
            m.fillRect(f + d - a, p, a, h),
            (m.fillStyle = n),
            (m.globalAlpha = 0.9),
            m.fillRect(f + d - a, p, a, o((1 - l / y) * h));
        },
      }
    );
  };
})();
new I(0, 0, 0), new I(0, 0, 0), new I(0, 0, 0);
function Hn(t, e) {
  const n = {};
  for (const r of e)
    Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
  return n;
}
new X(), Boolean, Boolean, Boolean, Boolean, Boolean;
const Wn = T("official", () => {
  const t = S({
    press: {
      list: [],
      loading: !1,
      pageNum: 1,
      pageSize: 9,
      total: 0,
      totalPage: 0,
    },
    event: {
      list: [],
      loading: !1,
      pageNum: 1,
      pageSize: 100,
      total: 0,
      totalPage: 0,
    },
    research: {
      list: [],
      loading: !1,
      type: void 0,
      pageNum: 1,
      pageSize: 9,
      total: 0,
      totalPage: 0,
    },
  });
  function n() {
    return (
      (t.press.loading = !0),
      Pt(Hn(t.press, ["pageNum", "pageSize"]))
        .then((e) => {
          (t.press.list = e.result.data),
            (t.press.total = e.result.total),
            (t.press.totalPage = e.result.totalPage);
        })
        .finally(() => {
          t.press.loading = !1;
        })
    );
  }
  function r() {
    if (((t.press.pageNum = 1), !t.press.loading)) return n();
  }
  function i() {
    return (
      (t.event.loading = !0),
      Bt(Hn(t.event, ["pageNum", "pageSize"]))
        .then((e) => {
          (t.event.list = e.result.data),
            (t.event.total = e.result.total),
            (t.event.totalPage = e.result.totalPage);
        })
        .finally(() => {
          t.event.loading = !1;
        })
    );
  }
  function o() {
    if (((t.event.pageNum = 1), !t.event.loading)) return i();
  }
  function a() {
    return (
      (t.research.loading = !0),
      Lt(Hn(t.research, ["pageNum", "pageSize"]), t.research.type)
        .then((e) => {
          (t.research.list = e.result.data),
            (t.research.total = e.result.total),
            (t.research.totalPage = e.result.totalPage);
        })
        .finally(() => {
          t.research.loading = !1;
        })
    );
  }
  function s() {
    if (((t.research.pageNum = 1), !t.research.loading)) return a();
  }
  const l = e(() => t.press.list || []),
    c = e(() => t.event.list || []),
    u = e(() => t.research.list || []);
  return {
    state: t,
    getPressList: l,
    getEventList: c,
    getResearchList: u,
    init: function () {
      return Promise.all([r(), o(), s()]);
    },
    changeResearchType: function (e) {
      if (!t.research.loading) return (t.research.type = e), s();
    },
    loadResearchList: function (e) {
      if (!t.research.loading) return (t.research.pageNum = e), a();
    },
    loadEventList: function (e) {
      if (!t.event.loading) return (t.event.pageNum = e), i();
    },
    loadPressList: function (e) {
      if (!t.press.loading) return (t.press.pageNum = e), n();
    },
  };
});
export { Wt as _, Wn as u };

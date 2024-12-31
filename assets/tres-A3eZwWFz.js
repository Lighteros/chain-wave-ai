import {
  bu as t,
  r as e,
  at as n,
  d7 as i,
  bq as r,
} from "./index-CcOpQHgp.js";
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const a = "170",
  s = 1,
  o = 2,
  l = 3,
  c = 0,
  h = 1,
  u = 2,
  d = 2,
  p = 100,
  f = 101,
  m = 102,
  g = 200,
  _ = 201,
  v = 202,
  x = 203,
  y = 204,
  M = 205,
  S = 206,
  E = 207,
  T = 208,
  b = 209,
  A = 210,
  w = 211,
  R = 212,
  C = 213,
  P = 214,
  L = 0,
  U = 1,
  D = 2,
  I = 3,
  N = 4,
  O = 5,
  F = 6,
  B = 7,
  z = 0,
  V = 1,
  H = 2,
  k = 0,
  G = 1,
  W = 2,
  X = 3,
  j = 4,
  q = 5,
  Y = 6,
  Z = 7,
  J = 301,
  K = 302,
  $ = 306,
  Q = 1e3,
  tt = 1001,
  et = 1002,
  nt = 1003,
  it = 1004,
  rt = 1005,
  at = 1006,
  st = 1007,
  ot = 1008,
  lt = 1009,
  ct = 1010,
  ht = 1011,
  ut = 1012,
  dt = 1013,
  pt = 1014,
  ft = 1015,
  mt = 1016,
  gt = 1017,
  _t = 1018,
  vt = 1020,
  xt = 35902,
  yt = 1021,
  Mt = 1022,
  St = 1023,
  Et = 1024,
  Tt = 1025,
  bt = 1026,
  At = 1027,
  wt = 1028,
  Rt = 1029,
  Ct = 1030,
  Pt = 1031,
  Lt = 1033,
  Ut = 33776,
  Dt = 33777,
  It = 33778,
  Nt = 33779,
  Ot = 35840,
  Ft = 35841,
  Bt = 35842,
  zt = 35843,
  Vt = 36196,
  Ht = 37492,
  kt = 37496,
  Gt = 37808,
  Wt = 37809,
  Xt = 37810,
  jt = 37811,
  qt = 37812,
  Yt = 37813,
  Zt = 37814,
  Jt = 37815,
  Kt = 37816,
  $t = 37817,
  Qt = 37818,
  te = 37819,
  ee = 37820,
  ne = 37821,
  ie = 36492,
  re = 36494,
  ae = 36495,
  se = 36283,
  oe = 36284,
  le = 36285,
  ce = 36286,
  he = 2300,
  ue = 2301,
  de = "",
  pe = "srgb",
  fe = "srgb-linear",
  me = "linear",
  ge = "srgb",
  _e = 7680,
  ve = 512,
  xe = 513,
  ye = 514,
  Me = 515,
  Se = 516,
  Ee = 517,
  Te = 518,
  be = 519,
  Ae = 35044,
  we = "300 es",
  Re = 2e3,
  Ce = 2001;
class Pe {
  addEventListener(t, e) {
    void 0 === this._listeners && (this._listeners = {});
    const n = this._listeners;
    void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (void 0 === this._listeners) return !1;
    const n = this._listeners;
    return void 0 !== n[t] && -1 !== n[t].indexOf(e);
  }
  removeEventListener(t, e) {
    if (void 0 === this._listeners) return;
    const n = this._listeners[t];
    if (void 0 !== n) {
      const t = n.indexOf(e);
      -1 !== t && n.splice(t, 1);
    }
  }
  dispatchEvent(t) {
    if (void 0 === this._listeners) return;
    const e = this._listeners[t.type];
    if (void 0 !== e) {
      t.target = this;
      const n = e.slice(0);
      for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
      t.target = null;
    }
  }
}
const Le = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let Ue = 1234567;
const De = Math.PI / 180,
  Ie = 180 / Math.PI;
function Ne() {
  const t = (4294967295 * Math.random()) | 0,
    e = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0,
    i = (4294967295 * Math.random()) | 0;
  return (
    Le[255 & t] +
    Le[(t >> 8) & 255] +
    Le[(t >> 16) & 255] +
    Le[(t >> 24) & 255] +
    "-" +
    Le[255 & e] +
    Le[(e >> 8) & 255] +
    "-" +
    Le[((e >> 16) & 15) | 64] +
    Le[(e >> 24) & 255] +
    "-" +
    Le[(63 & n) | 128] +
    Le[(n >> 8) & 255] +
    "-" +
    Le[(n >> 16) & 255] +
    Le[(n >> 24) & 255] +
    Le[255 & i] +
    Le[(i >> 8) & 255] +
    Le[(i >> 16) & 255] +
    Le[(i >> 24) & 255]
  ).toLowerCase();
}
function Oe(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Fe(t, e) {
  return ((t % e) + e) % e;
}
function Be(t, e, n) {
  return (1 - n) * t + n * e;
}
function ze(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return t / 4294967295;
    case Uint16Array:
      return t / 65535;
    case Uint8Array:
      return t / 255;
    case Int32Array:
      return Math.max(t / 2147483647, -1);
    case Int16Array:
      return Math.max(t / 32767, -1);
    case Int8Array:
      return Math.max(t / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ve(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return Math.round(4294967295 * t);
    case Uint16Array:
      return Math.round(65535 * t);
    case Uint8Array:
      return Math.round(255 * t);
    case Int32Array:
      return Math.round(2147483647 * t);
    case Int16Array:
      return Math.round(32767 * t);
    case Int8Array:
      return Math.round(127 * t);
    default:
      throw new Error("Invalid component type.");
  }
}
const He = {
  DEG2RAD: De,
  RAD2DEG: Ie,
  generateUUID: Ne,
  clamp: Oe,
  euclideanModulo: Fe,
  mapLinear: function (t, e, n, i, r) {
    return i + ((t - e) * (r - i)) / (n - e);
  },
  inverseLerp: function (t, e, n) {
    return t !== e ? (n - t) / (e - t) : 0;
  },
  lerp: Be,
  damp: function (t, e, n, i) {
    return Be(t, e, 1 - Math.exp(-n * i));
  },
  pingpong: function (t, e = 1) {
    return e - Math.abs(Fe(t, 2 * e) - e);
  },
  smoothstep: function (t, e, n) {
    return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t);
  },
  smootherstep: function (t, e, n) {
    return t <= e
      ? 0
      : t >= n
      ? 1
      : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10);
  },
  randInt: function (t, e) {
    return t + Math.floor(Math.random() * (e - t + 1));
  },
  randFloat: function (t, e) {
    return t + Math.random() * (e - t);
  },
  randFloatSpread: function (t) {
    return t * (0.5 - Math.random());
  },
  seededRandom: function (t) {
    void 0 !== t && (Ue = t);
    let e = (Ue += 1831565813);
    return (
      (e = Math.imul(e ^ (e >>> 15), 1 | e)),
      (e ^= e + Math.imul(e ^ (e >>> 7), 61 | e)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  },
  degToRad: function (t) {
    return t * De;
  },
  radToDeg: function (t) {
    return t * Ie;
  },
  isPowerOfTwo: function (t) {
    return !(t & (t - 1)) && 0 !== t;
  },
  ceilPowerOfTwo: function (t) {
    return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
  },
  floorPowerOfTwo: function (t) {
    return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
  },
  setQuaternionFromProperEuler: function (t, e, n, i, r) {
    const a = Math.cos,
      s = Math.sin,
      o = a(n / 2),
      l = s(n / 2),
      c = a((e + i) / 2),
      h = s((e + i) / 2),
      u = a((e - i) / 2),
      d = s((e - i) / 2),
      p = a((i - e) / 2),
      f = s((i - e) / 2);
    switch (r) {
      case "XYX":
        t.set(o * h, l * u, l * d, o * c);
        break;
      case "YZY":
        t.set(l * d, o * h, l * u, o * c);
        break;
      case "ZXZ":
        t.set(l * u, l * d, o * h, o * c);
        break;
      case "XZX":
        t.set(o * h, l * f, l * p, o * c);
        break;
      case "YXY":
        t.set(l * p, o * h, l * f, o * c);
        break;
      case "ZYZ":
        t.set(l * f, l * p, o * h, o * c);
    }
  },
  normalize: Ve,
  denormalize: ze,
};
class ke {
  constructor(t = 0, e = 0) {
    (ke.prototype.isVector2 = !0), (this.x = t), (this.y = e);
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return (this.x = t), (this.y = e), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), this;
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), this;
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), this;
  }
  addVectors(t, e) {
    return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), this;
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), this;
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), this;
  }
  subVectors(t, e) {
    return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), this;
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), this;
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = t.elements;
    return (
      (this.x = i[0] * e + i[3] * n + i[6]),
      (this.y = i[1] * e + i[4] * n + i[7]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this;
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n), (this.y = t.y + (e.y - t.y) * n), this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), t;
  }
  fromBufferAttribute(t, e) {
    return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      r = this.x - t.x,
      a = this.y - t.y;
    return (this.x = r * n - a * i + t.x), (this.y = r * i + a * n + t.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ge {
  constructor(t, e, n, i, r, a, s, o, l) {
    (Ge.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      void 0 !== t && this.set(t, e, n, i, r, a, s, o, l);
  }
  set(t, e, n, i, r, a, s, o, l) {
    const c = this.elements;
    return (
      (c[0] = t),
      (c[1] = i),
      (c[2] = s),
      (c[3] = e),
      (c[4] = r),
      (c[5] = o),
      (c[6] = n),
      (c[7] = a),
      (c[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrix3Column(this, 0),
      e.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return (
      this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      r = this.elements,
      a = n[0],
      s = n[3],
      o = n[6],
      l = n[1],
      c = n[4],
      h = n[7],
      u = n[2],
      d = n[5],
      p = n[8],
      f = i[0],
      m = i[3],
      g = i[6],
      _ = i[1],
      v = i[4],
      x = i[7],
      y = i[2],
      M = i[5],
      S = i[8];
    return (
      (r[0] = a * f + s * _ + o * y),
      (r[3] = a * m + s * v + o * M),
      (r[6] = a * g + s * x + o * S),
      (r[1] = l * f + c * _ + h * y),
      (r[4] = l * m + c * v + h * M),
      (r[7] = l * g + c * x + h * S),
      (r[2] = u * f + d * _ + p * y),
      (r[5] = u * m + d * v + p * M),
      (r[8] = u * g + d * x + p * S),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[3] *= t),
      (e[6] *= t),
      (e[1] *= t),
      (e[4] *= t),
      (e[7] *= t),
      (e[2] *= t),
      (e[5] *= t),
      (e[8] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      a = t[4],
      s = t[5],
      o = t[6],
      l = t[7],
      c = t[8];
    return (
      e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      a = t[4],
      s = t[5],
      o = t[6],
      l = t[7],
      c = t[8],
      h = c * a - s * l,
      u = s * o - c * r,
      d = l * r - a * o,
      p = e * h + n * u + i * d;
    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const f = 1 / p;
    return (
      (t[0] = h * f),
      (t[1] = (i * l - c * n) * f),
      (t[2] = (s * n - i * a) * f),
      (t[3] = u * f),
      (t[4] = (c * e - i * o) * f),
      (t[5] = (i * r - s * e) * f),
      (t[6] = d * f),
      (t[7] = (n * o - l * e) * f),
      (t[8] = (a * e - n * r) * f),
      this
    );
  }
  transpose() {
    let t;
    const e = this.elements;
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    );
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return (
      (t[0] = e[0]),
      (t[1] = e[3]),
      (t[2] = e[6]),
      (t[3] = e[1]),
      (t[4] = e[4]),
      (t[5] = e[7]),
      (t[6] = e[2]),
      (t[7] = e[5]),
      (t[8] = e[8]),
      this
    );
  }
  setUvTransform(t, e, n, i, r, a, s) {
    const o = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * o,
        n * l,
        -n * (o * a + l * s) + a + t,
        -i * l,
        i * o,
        -i * (-l * a + o * s) + s + e,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(t, e) {
    return this.premultiply(We.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(We.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(We.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return (
      t.isVector2
        ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
        : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
      this
    );
  }
  makeRotation(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let i = 0; i < 9; i++) if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      t
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const We = new Ge();
function Xe(t) {
  for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
  return !1;
}
function je(t) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", t);
}
function qe() {
  const t = je("canvas");
  return (t.style.display = "block"), t;
}
const Ye = {};
function Ze(t) {
  t in Ye || (Ye[t] = !0);
}
const Je = {
  enabled: !0,
  workingColorSpace: fe,
  spaces: {},
  convert: function (t, e, n) {
    return !1 !== this.enabled && e !== n && e && n
      ? (this.spaces[e].transfer === ge &&
          ((t.r = Ke(t.r)), (t.g = Ke(t.g)), (t.b = Ke(t.b))),
        this.spaces[e].primaries !== this.spaces[n].primaries &&
          (t.applyMatrix3(this.spaces[e].toXYZ),
          t.applyMatrix3(this.spaces[n].fromXYZ)),
        this.spaces[n].transfer === ge &&
          ((t.r = $e(t.r)), (t.g = $e(t.g)), (t.b = $e(t.b))),
        t)
      : t;
  },
  fromWorkingColorSpace: function (t, e) {
    return this.convert(t, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function (t, e) {
    return this.convert(t, e, this.workingColorSpace);
  },
  getPrimaries: function (t) {
    return this.spaces[t].primaries;
  },
  getTransfer: function (t) {
    return t === de ? me : this.spaces[t].transfer;
  },
  getLuminanceCoefficients: function (t, e = this.workingColorSpace) {
    return t.fromArray(this.spaces[e].luminanceCoefficients);
  },
  define: function (t) {
    Object.assign(this.spaces, t);
  },
  _getMatrix: function (t, e, n) {
    return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ);
  },
  _getDrawingBufferColorSpace: function (t) {
    return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function (t = this.workingColorSpace) {
    return this.spaces[t].workingColorSpaceConfig.unpackColorSpace;
  },
};
function Ke(t) {
  return t < 0.04045
    ? 0.0773993808 * t
    : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
}
function $e(t) {
  return t < 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.41666) - 0.055;
}
const Qe = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
  tn = [0.2126, 0.7152, 0.0722],
  en = [0.3127, 0.329],
  nn = new Ge().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322
  ),
  rn = new Ge().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715
  );
let an;
Je.define({
  [fe]: {
    primaries: Qe,
    whitePoint: en,
    transfer: me,
    toXYZ: nn,
    fromXYZ: rn,
    luminanceCoefficients: tn,
    workingColorSpaceConfig: { unpackColorSpace: pe },
    outputColorSpaceConfig: { drawingBufferColorSpace: pe },
  },
  [pe]: {
    primaries: Qe,
    whitePoint: en,
    transfer: ge,
    toXYZ: nn,
    fromXYZ: rn,
    luminanceCoefficients: tn,
    outputColorSpaceConfig: { drawingBufferColorSpace: pe },
  },
});
class sn {
  static getDataURL(t) {
    if (/^data:/i.test(t.src)) return t.src;
    if ("undefined" == typeof HTMLCanvasElement) return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      void 0 === an && (an = je("canvas")),
        (an.width = t.width),
        (an.height = t.height);
      const n = an.getContext("2d");
      t instanceof ImageData
        ? n.putImageData(t, 0, 0)
        : n.drawImage(t, 0, 0, t.width, t.height),
        (e = an);
    }
    return e.width > 2048 || e.height > 2048
      ? e.toDataURL("image/jpeg", 0.6)
      : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (
      ("undefined" != typeof HTMLImageElement &&
        t instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        t instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
    ) {
      const e = je("canvas");
      (e.width = t.width), (e.height = t.height);
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height),
        r = i.data;
      for (let t = 0; t < r.length; t++) r[t] = 255 * Ke(r[t] / 255);
      return n.putImageData(i, 0, 0), e;
    }
    if (t.data) {
      const e = t.data.slice(0);
      for (let t = 0; t < e.length; t++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray
          ? (e[t] = Math.floor(255 * Ke(e[t] / 255)))
          : (e[t] = Ke(e[t]));
      return { data: e, width: t.width, height: t.height };
    }
    return t;
  }
}
let on = 0;
class ln {
  constructor(t = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: on++ }),
      (this.uuid = Ne()),
      (this.data = t),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t;
    if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (null !== i) {
      let t;
      if (Array.isArray(i)) {
        t = [];
        for (let e = 0, n = i.length; e < n; e++)
          i[e].isDataTexture ? t.push(cn(i[e].image)) : t.push(cn(i[e]));
      } else t = cn(i);
      n.url = t;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function cn(t) {
  return ("undefined" != typeof HTMLImageElement &&
    t instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      t instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)
    ? sn.getDataURL(t)
    : t.data
    ? {
        data: Array.from(t.data),
        width: t.width,
        height: t.height,
        type: t.data.constructor.name,
      }
    : {};
}
let hn = 0;
class un extends Pe {
  constructor(
    t = un.DEFAULT_IMAGE,
    e = un.DEFAULT_MAPPING,
    n = 1001,
    i = 1001,
    r = 1006,
    a = 1008,
    s = St,
    o = lt,
    l = un.DEFAULT_ANISOTROPY,
    c = ""
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: hn++ }),
      (this.uuid = Ne()),
      (this.name = ""),
      (this.source = new ln(t)),
      (this.mipmaps = []),
      (this.mapping = e),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = o),
      (this.offset = new ke(0, 0)),
      (this.repeat = new ke(1, 1)),
      (this.center = new ke(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ge()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = c),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.source = t.source),
      (this.mipmaps = t.mipmaps.slice(0)),
      (this.mapping = t.mapping),
      (this.channel = t.channel),
      (this.wrapS = t.wrapS),
      (this.wrapT = t.wrapT),
      (this.magFilter = t.magFilter),
      (this.minFilter = t.minFilter),
      (this.anisotropy = t.anisotropy),
      (this.format = t.format),
      (this.internalFormat = t.internalFormat),
      (this.type = t.type),
      this.offset.copy(t.offset),
      this.repeat.copy(t.repeat),
      this.center.copy(t.center),
      (this.rotation = t.rotation),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this.matrix.copy(t.matrix),
      (this.generateMipmaps = t.generateMipmaps),
      (this.premultiplyAlpha = t.premultiplyAlpha),
      (this.flipY = t.flipY),
      (this.unpackAlignment = t.unpackAlignment),
      (this.colorSpace = t.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t;
    if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      e || (t.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (300 !== this.mapping) return t;
    if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
      switch (this.wrapS) {
        case Q:
          t.x = t.x - Math.floor(t.x);
          break;
        case tt:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case et:
          1 === Math.abs(Math.floor(t.x) % 2)
            ? (t.x = Math.ceil(t.x) - t.x)
            : (t.x = t.x - Math.floor(t.x));
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case Q:
          t.y = t.y - Math.floor(t.y);
          break;
        case tt:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case et:
          1 === Math.abs(Math.floor(t.y) % 2)
            ? (t.y = Math.ceil(t.y) - t.y)
            : (t.y = t.y - Math.floor(t.y));
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    !0 === t && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(t) {
    !0 === t && this.pmremVersion++;
  }
}
(un.DEFAULT_IMAGE = null),
  (un.DEFAULT_MAPPING = 300),
  (un.DEFAULT_ANISOTROPY = 1);
class dn {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    (dn.prototype.isVector4 = !0),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return (this.x = t), (this.y = e), (this.z = n), (this.w = i), this;
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), (this.w = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setW(t) {
    return (this.w = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.z = t.z),
      (this.w = void 0 !== t.w ? t.w : 1),
      this
    );
  }
  add(t) {
    return (
      (this.x += t.x), (this.y += t.y), (this.z += t.z), (this.w += t.w), this
    );
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), (this.w += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      (this.w = t.w + e.w),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      (this.w += t.w * e),
      this
    );
  }
  sub(t) {
    return (
      (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), (this.w -= t.w), this
    );
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      (this.w = t.w - e.w),
      this
    );
  }
  multiply(t) {
    return (
      (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), (this.w *= t.w), this
    );
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this;
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = t.elements;
    return (
      (this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divide(t) {
    return (
      (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), (this.w /= t.w), this
    );
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return (
      e < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, r;
    const a = 0.01,
      s = 0.1,
      o = t.elements,
      l = o[0],
      c = o[4],
      h = o[8],
      u = o[1],
      d = o[5],
      p = o[9],
      f = o[2],
      m = o[6],
      g = o[10];
    if (Math.abs(c - u) < a && Math.abs(h - f) < a && Math.abs(p - m) < a) {
      if (
        Math.abs(c + u) < s &&
        Math.abs(h + f) < s &&
        Math.abs(p + m) < s &&
        Math.abs(l + d + g - 3) < s
      )
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const t = (l + 1) / 2,
        o = (d + 1) / 2,
        _ = (g + 1) / 2,
        v = (c + u) / 4,
        x = (h + f) / 4,
        y = (p + m) / 4;
      return (
        t > o && t > _
          ? t < a
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(t)), (i = v / n), (r = x / n))
          : o > _
          ? o < a
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(o)), (n = v / i), (r = y / i))
          : _ < a
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(_)), (n = x / r), (i = y / r)),
        this.set(n, i, r, e),
        this
      );
    }
    let _ = Math.sqrt(
      (m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)
    );
    return (
      Math.abs(_) < 0.001 && (_ = 1),
      (this.x = (m - p) / _),
      (this.y = (h - f) / _),
      (this.z = (u - c) / _),
      (this.w = Math.acos((l + d + g - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (
      (this.x = e[12]),
      (this.y = e[13]),
      (this.z = e[14]),
      (this.w = e[15]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      (this.w = Math.min(this.w, t.w)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      (this.w = Math.max(this.w, t.w)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      (this.w = Math.max(t.w, Math.min(e.w, this.w))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      (this.w = Math.max(t, Math.min(e, this.w))),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      (this.w += (t.w - this.w) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      (this.w = t.w + (e.w - t.w) * n),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return (
      (this.x = t[e]),
      (this.y = t[e + 1]),
      (this.z = t[e + 2]),
      (this.w = t[e + 3]),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this.x),
      (t[e + 1] = this.y),
      (t[e + 2] = this.z),
      (t[e + 3] = this.w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      (this.w = t.getW(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class pn extends Pe {
  constructor(t = 1, e = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = t),
      (this.height = e),
      (this.depth = 1),
      (this.scissor = new dn(0, 0, t, e)),
      (this.scissorTest = !1),
      (this.viewport = new dn(0, 0, t, e));
    const i = { width: t, height: e, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: at,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n
    );
    const r = new un(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    );
    (r.flipY = !1),
      (r.generateMipmaps = n.generateMipmaps),
      (r.internalFormat = n.internalFormat),
      (this.textures = []);
    const a = n.count;
    for (let s = 0; s < a; s++)
      (this.textures[s] = r.clone()),
        (this.textures[s].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      (this.width = t), (this.height = e), (this.depth = n);
      for (let i = 0, r = this.textures.length; i < r; i++)
        (this.textures[i].image.width = t),
          (this.textures[i].image.height = e),
          (this.textures[i].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.scissor.copy(t.scissor),
      (this.scissorTest = t.scissorTest),
      this.viewport.copy(t.viewport),
      (this.textures.length = 0);
    for (let n = 0, i = t.textures.length; n < i; n++)
      (this.textures[n] = t.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0);
    const e = Object.assign({}, t.texture.image);
    return (
      (this.texture.source = new ln(e)),
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      (this.resolveDepthBuffer = t.resolveDepthBuffer),
      (this.resolveStencilBuffer = t.resolveStencilBuffer),
      null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()),
      (this.samples = t.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class fn extends pn {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), (this.isWebGLRenderTarget = !0);
  }
}
class mn extends un {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: t, width: e, height: n, depth: i }),
      (this.magFilter = nt),
      (this.minFilter = nt),
      (this.wrapR = tt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class gn extends un {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: t, width: e, height: n, depth: i }),
      (this.magFilter = nt),
      (this.minFilter = nt),
      (this.wrapR = tt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class _n {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(t, e, n, i, r, a, s) {
    let o = n[i + 0],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3];
    const u = r[a + 0],
      d = r[a + 1],
      p = r[a + 2],
      f = r[a + 3];
    if (0 === s)
      return (
        (t[e + 0] = o), (t[e + 1] = l), (t[e + 2] = c), void (t[e + 3] = h)
      );
    if (1 === s)
      return (
        (t[e + 0] = u), (t[e + 1] = d), (t[e + 2] = p), void (t[e + 3] = f)
      );
    if (h !== f || o !== u || l !== d || c !== p) {
      let t = 1 - s;
      const e = o * u + l * d + c * p + h * f,
        n = e >= 0 ? 1 : -1,
        i = 1 - e * e;
      if (i > Number.EPSILON) {
        const r = Math.sqrt(i),
          a = Math.atan2(r, e * n);
        (t = Math.sin(t * a) / r), (s = Math.sin(s * a) / r);
      }
      const r = s * n;
      if (
        ((o = o * t + u * r),
        (l = l * t + d * r),
        (c = c * t + p * r),
        (h = h * t + f * r),
        t === 1 - s)
      ) {
        const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
        (o *= t), (l *= t), (c *= t), (h *= t);
      }
    }
    (t[e] = o), (t[e + 1] = l), (t[e + 2] = c), (t[e + 3] = h);
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, a) {
    const s = n[i],
      o = n[i + 1],
      l = n[i + 2],
      c = n[i + 3],
      h = r[a],
      u = r[a + 1],
      d = r[a + 2],
      p = r[a + 3];
    return (
      (t[e] = s * p + c * h + o * d - l * u),
      (t[e + 1] = o * p + c * u + l * h - s * d),
      (t[e + 2] = l * p + c * d + s * u - o * h),
      (t[e + 3] = c * p - s * h - o * u - l * d),
      t
    );
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    (this._w = t), this._onChangeCallback();
  }
  set(t, e, n, i) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return (
      (this._x = t.x),
      (this._y = t.y),
      (this._z = t.z),
      (this._w = t.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(t, e = !0) {
    const n = t._x,
      i = t._y,
      r = t._z,
      a = t._order,
      s = Math.cos,
      o = Math.sin,
      l = s(n / 2),
      c = s(i / 2),
      h = s(r / 2),
      u = o(n / 2),
      d = o(i / 2),
      p = o(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "YXZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "ZXY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "ZYX":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "YZX":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "XZY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h + u * d * p);
    }
    return !0 === e && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2,
      i = Math.sin(n);
    return (
      (this._x = t.x * i),
      (this._y = t.y * i),
      (this._z = t.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t) {
    const e = t.elements,
      n = e[0],
      i = e[4],
      r = e[8],
      a = e[1],
      s = e[5],
      o = e[9],
      l = e[2],
      c = e[6],
      h = e[10],
      u = n + s + h;
    if (u > 0) {
      const t = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / t),
        (this._x = (c - o) * t),
        (this._y = (r - l) * t),
        (this._z = (a - i) * t);
    } else if (n > s && n > h) {
      const t = 2 * Math.sqrt(1 + n - s - h);
      (this._w = (c - o) / t),
        (this._x = 0.25 * t),
        (this._y = (i + a) / t),
        (this._z = (r + l) / t);
    } else if (s > h) {
      const t = 2 * Math.sqrt(1 + s - n - h);
      (this._w = (r - l) / t),
        (this._x = (i + a) / t),
        (this._y = 0.25 * t),
        (this._z = (o + c) / t);
    } else {
      const t = 2 * Math.sqrt(1 + h - n - s);
      (this._w = (a - i) / t),
        (this._x = (r + l) / t),
        (this._y = (o + c) / t),
        (this._z = 0.25 * t);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(t.x) > Math.abs(t.z)
            ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
        : ((this._x = t.y * e.z - t.z * e.y),
          (this._y = t.z * e.x - t.x * e.z),
          (this._z = t.x * e.y - t.y * e.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Oe(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (0 === n) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let t = this.length();
    return (
      0 === t
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((t = 1 / t),
          (this._x = this._x * t),
          (this._y = this._y * t),
          (this._z = this._z * t),
          (this._w = this._w * t)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x,
      i = t._y,
      r = t._z,
      a = t._w,
      s = e._x,
      o = e._y,
      l = e._z,
      c = e._w;
    return (
      (this._x = n * c + a * s + i * l - r * o),
      (this._y = i * c + a * o + r * s - n * l),
      (this._z = r * c + a * l + n * o - i * s),
      (this._w = a * c - n * s - i * o - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(t, e) {
    if (0 === e) return this;
    if (1 === e) return this.copy(t);
    const n = this._x,
      i = this._y,
      r = this._z,
      a = this._w;
    let s = a * t._w + n * t._x + i * t._y + r * t._z;
    if (
      (s < 0
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (s = -s))
        : this.copy(t),
      s >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
    const o = 1 - s * s;
    if (o <= Number.EPSILON) {
      const t = 1 - e;
      return (
        (this._w = t * a + e * this._w),
        (this._x = t * n + e * this._x),
        (this._y = t * i + e * this._y),
        (this._z = t * r + e * this._z),
        this.normalize(),
        this
      );
    }
    const l = Math.sqrt(o),
      c = Math.atan2(l, s),
      h = Math.sin((1 - e) * c) / l,
      u = Math.sin(e * c) / l;
    return (
      (this._w = a * h + this._w * u),
      (this._x = n * h + this._x * u),
      (this._y = i * h + this._y * u),
      (this._z = r * h + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(),
      e = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      i * Math.sin(t),
      i * Math.cos(t),
      r * Math.sin(e),
      r * Math.cos(e)
    );
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._w === this._w
    );
  }
  fromArray(t, e = 0) {
    return (
      (this._x = t[e]),
      (this._y = t[e + 1]),
      (this._z = t[e + 2]),
      (this._w = t[e + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this._x = t.getX(e)),
      (this._y = t.getY(e)),
      (this._z = t.getZ(e)),
      (this._w = t.getW(e)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class vn {
  constructor(t = 0, e = 0, n = 0) {
    (vn.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = n);
  }
  set(t, e, n) {
    return (
      void 0 === n && (n = this.z),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      this
    );
  }
  setScalar(t) {
    return (this.x = t), (this.y = t), (this.z = t), this;
  }
  setX(t) {
    return (this.x = t), this;
  }
  setY(t) {
    return (this.y = t), this;
  }
  setZ(t) {
    return (this.z = t), this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return (this.x = t.x), (this.y = t.y), (this.z = t.z), this;
  }
  add(t) {
    return (this.x += t.x), (this.y += t.y), (this.z += t.z), this;
  }
  addScalar(t) {
    return (this.x += t), (this.y += t), (this.z += t), this;
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x), (this.y = t.y + e.y), (this.z = t.z + e.z), this
    );
  }
  addScaledVector(t, e) {
    return (this.x += t.x * e), (this.y += t.y * e), (this.z += t.z * e), this;
  }
  sub(t) {
    return (this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this;
  }
  subScalar(t) {
    return (this.x -= t), (this.y -= t), (this.z -= t), this;
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x), (this.y = t.y - e.y), (this.z = t.z - e.z), this
    );
  }
  multiply(t) {
    return (this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this;
  }
  multiplyScalar(t) {
    return (this.x *= t), (this.y *= t), (this.z *= t), this;
  }
  multiplyVectors(t, e) {
    return (
      (this.x = t.x * e.x), (this.y = t.y * e.y), (this.z = t.z * e.z), this
    );
  }
  applyEuler(t) {
    return this.applyQuaternion(yn.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(yn.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[3] * n + r[6] * i),
      (this.y = r[1] * e + r[4] * n + r[7] * i),
      (this.z = r[2] * e + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements,
      a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.x,
      a = t.y,
      s = t.z,
      o = t.w,
      l = 2 * (a * i - s * n),
      c = 2 * (s * e - r * i),
      h = 2 * (r * n - a * e);
    return (
      (this.x = e + o * l + a * h - s * c),
      (this.y = n + o * c + s * l - r * h),
      (this.z = i + o * h + r * c - a * l),
      this
    );
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
      t.projectionMatrix
    );
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
      t.matrixWorld
    );
  }
  transformDirection(t) {
    const e = this.x,
      n = this.y,
      i = this.z,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[4] * n + r[8] * i),
      (this.y = r[1] * e + r[5] * n + r[9] * i),
      (this.z = r[2] * e + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(t) {
    return (this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(t, Math.min(e, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      this
    );
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x,
      i = t.y,
      r = t.z,
      a = e.x,
      s = e.y,
      o = e.z;
    return (
      (this.x = i * o - r * s),
      (this.y = r * a - n * o),
      (this.z = n * s - i * a),
      this
    );
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (0 === e) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return xn.copy(this).projectOnVector(t), this.sub(xn);
  }
  reflect(t) {
    return this.sub(xn.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (0 === e) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Oe(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y,
      i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return (
      Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    );
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(e) * t),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return (
      (this.x = t * Math.sin(e)), (this.y = n), (this.z = t * Math.cos(e)), this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(),
      n = this.setFromMatrixColumn(t, 1).length(),
      i = this.setFromMatrixColumn(t, 2).length();
    return (this.x = e), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, 4 * e);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, 3 * e);
  }
  setFromEuler(t) {
    return (this.x = t._x), (this.y = t._y), (this.z = t._z), this;
  }
  setFromColor(t) {
    return (this.x = t.r), (this.y = t.g), (this.z = t.b), this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return (this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t;
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)), (this.y = t.getY(e)), (this.z = t.getZ(e)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2,
      e = 2 * Math.random() - 1,
      n = Math.sqrt(1 - e * e);
    return (
      (this.x = n * Math.cos(t)), (this.y = e), (this.z = n * Math.sin(t)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const xn = new vn(),
  yn = new _n();
class Mn {
  constructor(
    t = new vn(Infinity, Infinity, Infinity),
    e = new vn(-Infinity, -Infinity, -Infinity)
  ) {
    (this.isBox3 = !0), (this.min = t), (this.max = e);
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(En.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(En.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = En.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = Infinity),
      (this.max.x = this.max.y = this.max.z = -Infinity),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (void 0 !== n) {
      const i = n.getAttribute("position");
      if (!0 === e && void 0 !== i && !0 !== t.isInstancedMesh)
        for (let e = 0, n = i.count; e < n; e++)
          !0 === t.isMesh
            ? t.getVertexPosition(e, En)
            : En.fromBufferAttribute(i, e),
            En.applyMatrix4(t.matrixWorld),
            this.expandByPoint(En);
      else
        void 0 !== t.boundingBox
          ? (null === t.boundingBox && t.computeBoundingBox(),
            Tn.copy(t.boundingBox))
          : (null === n.boundingBox && n.computeBoundingBox(),
            Tn.copy(n.boundingBox)),
          Tn.applyMatrix4(t.matrixWorld),
          this.union(Tn);
    }
    const i = t.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], e);
    return this;
  }
  containsPoint(t) {
    return (
      t.x >= this.min.x &&
      t.x <= this.max.x &&
      t.y >= this.min.y &&
      t.y <= this.max.y &&
      t.z >= this.min.z &&
      t.z <= this.max.z
    );
  }
  containsBox(t) {
    return (
      this.min.x <= t.min.x &&
      t.max.x <= this.max.x &&
      this.min.y <= t.min.y &&
      t.max.y <= this.max.y &&
      this.min.z <= t.min.z &&
      t.max.z <= this.max.z
    );
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return (
      t.max.x >= this.min.x &&
      t.min.x <= this.max.x &&
      t.max.y >= this.min.y &&
      t.min.y <= this.max.y &&
      t.max.z >= this.min.z &&
      t.min.z <= this.max.z
    );
  }
  intersectsSphere(t) {
    return (
      this.clampPoint(t.center, En),
      En.distanceToSquared(t.center) <= t.radius * t.radius
    );
  }
  intersectsPlane(t) {
    let e, n;
    return (
      t.normal.x > 0
        ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
        : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
      t.normal.y > 0
        ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
        : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
      t.normal.z > 0
        ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
        : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
      e <= -t.constant && n >= -t.constant
    );
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return !1;
    this.getCenter(Ln),
      Un.subVectors(this.max, Ln),
      bn.subVectors(t.a, Ln),
      An.subVectors(t.b, Ln),
      wn.subVectors(t.c, Ln),
      Rn.subVectors(An, bn),
      Cn.subVectors(wn, An),
      Pn.subVectors(bn, wn);
    let e = [
      0,
      -Rn.z,
      Rn.y,
      0,
      -Cn.z,
      Cn.y,
      0,
      -Pn.z,
      Pn.y,
      Rn.z,
      0,
      -Rn.x,
      Cn.z,
      0,
      -Cn.x,
      Pn.z,
      0,
      -Pn.x,
      -Rn.y,
      Rn.x,
      0,
      -Cn.y,
      Cn.x,
      0,
      -Pn.y,
      Pn.x,
      0,
    ];
    return (
      !!Nn(e, bn, An, wn, Un) &&
      ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      !!Nn(e, bn, An, wn, Un) &&
        (Dn.crossVectors(Rn, Cn),
        (e = [Dn.x, Dn.y, Dn.z]),
        Nn(e, bn, An, wn, Un)))
    );
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, En).distanceTo(t);
  }
  getBoundingSphere(t) {
    return (
      this.isEmpty()
        ? t.makeEmpty()
        : (this.getCenter(t.center),
          (t.radius = 0.5 * this.getSize(En).length())),
      t
    );
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return (
      this.isEmpty() ||
        (Sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        Sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        Sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        Sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        Sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        Sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        Sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        Sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(Sn)),
      this
    );
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Sn = [
    new vn(),
    new vn(),
    new vn(),
    new vn(),
    new vn(),
    new vn(),
    new vn(),
    new vn(),
  ],
  En = new vn(),
  Tn = new Mn(),
  bn = new vn(),
  An = new vn(),
  wn = new vn(),
  Rn = new vn(),
  Cn = new vn(),
  Pn = new vn(),
  Ln = new vn(),
  Un = new vn(),
  Dn = new vn(),
  In = new vn();
function Nn(t, e, n, i, r) {
  for (let a = 0, s = t.length - 3; a <= s; a += 3) {
    In.fromArray(t, a);
    const s =
        r.x * Math.abs(In.x) + r.y * Math.abs(In.y) + r.z * Math.abs(In.z),
      o = e.dot(In),
      l = n.dot(In),
      c = i.dot(In);
    if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
  }
  return !0;
}
const On = new Mn(),
  Fn = new vn(),
  Bn = new vn();
class zn {
  constructor(t = new vn(), e = -1) {
    (this.isSphere = !0), (this.center = t), (this.radius = e);
  }
  set(t, e) {
    return this.center.copy(t), (this.radius = e), this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    void 0 !== e ? n.copy(e) : On.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let r = 0, a = t.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(t[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(t) {
    return this.center.copy(t.center), (this.radius = t.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return (
      e.copy(t),
      n > this.radius * this.radius &&
        (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
      e
    );
  }
  getBoundingBox(t) {
    return this.isEmpty()
      ? (t.makeEmpty(), t)
      : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return (
      this.center.applyMatrix4(t),
      (this.radius = this.radius * t.getMaxScaleOnAxis()),
      this
    );
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), (this.radius = 0), this;
    Fn.subVectors(t, this.center);
    const e = Fn.lengthSq();
    if (e > this.radius * this.radius) {
      const t = Math.sqrt(e),
        n = 0.5 * (t - this.radius);
      this.center.addScaledVector(Fn, n / t), (this.radius += n);
    }
    return this;
  }
  union(t) {
    return t.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(t), this)
      : (!0 === this.center.equals(t.center)
          ? (this.radius = Math.max(this.radius, t.radius))
          : (Bn.subVectors(t.center, this.center).setLength(t.radius),
            this.expandByPoint(Fn.copy(t.center).add(Bn)),
            this.expandByPoint(Fn.copy(t.center).sub(Bn))),
        this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Vn = new vn(),
  Hn = new vn(),
  kn = new vn(),
  Gn = new vn(),
  Wn = new vn(),
  Xn = new vn(),
  jn = new vn();
class qn {
  constructor(t = new vn(), e = new vn(0, 0, -1)) {
    (this.origin = t), (this.direction = e);
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, Vn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0
      ? e.copy(this.origin)
      : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = Vn.subVectors(t, this.origin).dot(this.direction);
    return e < 0
      ? this.origin.distanceToSquared(t)
      : (Vn.copy(this.origin).addScaledVector(this.direction, e),
        Vn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    Hn.copy(t).add(e).multiplyScalar(0.5),
      kn.copy(e).sub(t).normalize(),
      Gn.copy(this.origin).sub(Hn);
    const r = 0.5 * t.distanceTo(e),
      a = -this.direction.dot(kn),
      s = Gn.dot(this.direction),
      o = -Gn.dot(kn),
      l = Gn.lengthSq(),
      c = Math.abs(1 - a * a);
    let h, u, d, p;
    if (c > 0)
      if (((h = a * o - s), (u = a * s - o), (p = r * c), h >= 0))
        if (u >= -p)
          if (u <= p) {
            const t = 1 / c;
            (h *= t),
              (u *= t),
              (d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l);
          } else
            (u = r),
              (h = Math.max(0, -(a * u + s))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          (u = -r),
            (h = Math.max(0, -(a * u + s))),
            (d = -h * h + u * (u + 2 * o) + l);
      else
        u <= -p
          ? ((h = Math.max(0, -(-a * r + s))),
            (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
            (d = -h * h + u * (u + 2 * o) + l))
          : u <= p
          ? ((h = 0),
            (u = Math.min(Math.max(-r, -o), r)),
            (d = u * (u + 2 * o) + l))
          : ((h = Math.max(0, -(a * r + s))),
            (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
            (d = -h * h + u * (u + 2 * o) + l));
    else
      (u = a > 0 ? -r : r),
        (h = Math.max(0, -(a * u + s))),
        (d = -h * h + u * (u + 2 * o) + l);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, h),
      i && i.copy(Hn).addScaledVector(kn, u),
      d
    );
  }
  intersectSphere(t, e) {
    Vn.subVectors(t.center, this.origin);
    const n = Vn.dot(this.direction),
      i = Vn.dot(Vn) - n * n,
      r = t.radius * t.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      s = n - a,
      o = n + a;
    return o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return null === n ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    if (0 === e) return !0;
    return t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, r, a, s, o;
    const l = 1 / this.direction.x,
      c = 1 / this.direction.y,
      h = 1 / this.direction.z,
      u = this.origin;
    return (
      l >= 0
        ? ((n = (t.min.x - u.x) * l), (i = (t.max.x - u.x) * l))
        : ((n = (t.max.x - u.x) * l), (i = (t.min.x - u.x) * l)),
      c >= 0
        ? ((r = (t.min.y - u.y) * c), (a = (t.max.y - u.y) * c))
        : ((r = (t.max.y - u.y) * c), (a = (t.min.y - u.y) * c)),
      n > a || r > i
        ? null
        : ((r > n || isNaN(n)) && (n = r),
          (a < i || isNaN(i)) && (i = a),
          h >= 0
            ? ((s = (t.min.z - u.z) * h), (o = (t.max.z - u.z) * h))
            : ((s = (t.max.z - u.z) * h), (o = (t.min.z - u.z) * h)),
          n > o || s > i
            ? null
            : ((s > n || n != n) && (n = s),
              (o < i || i != i) && (i = o),
              i < 0 ? null : this.at(n >= 0 ? n : i, e)))
    );
  }
  intersectsBox(t) {
    return null !== this.intersectBox(t, Vn);
  }
  intersectTriangle(t, e, n, i, r) {
    Wn.subVectors(e, t), Xn.subVectors(n, t), jn.crossVectors(Wn, Xn);
    let a,
      s = this.direction.dot(jn);
    if (s > 0) {
      if (i) return null;
      a = 1;
    } else {
      if (!(s < 0)) return null;
      (a = -1), (s = -s);
    }
    Gn.subVectors(this.origin, t);
    const o = a * this.direction.dot(Xn.crossVectors(Gn, Xn));
    if (o < 0) return null;
    const l = a * this.direction.dot(Wn.cross(Gn));
    if (l < 0) return null;
    if (o + l > s) return null;
    const c = -a * Gn.dot(jn);
    return c < 0 ? null : this.at(c / s, r);
  }
  applyMatrix4(t) {
    return (
      this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
    );
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Yn {
  constructor(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
    (Yn.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      void 0 !== t && this.set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m);
  }
  set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
    const g = this.elements;
    return (
      (g[0] = t),
      (g[4] = e),
      (g[8] = n),
      (g[12] = i),
      (g[1] = r),
      (g[5] = a),
      (g[9] = s),
      (g[13] = o),
      (g[2] = l),
      (g[6] = c),
      (g[10] = h),
      (g[14] = u),
      (g[3] = d),
      (g[7] = p),
      (g[11] = f),
      (g[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Yn().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      (e[9] = n[9]),
      (e[10] = n[10]),
      (e[11] = n[11]),
      (e[12] = n[12]),
      (e[13] = n[13]),
      (e[14] = n[14]),
      (e[15] = n[15]),
      this
    );
  }
  copyPosition(t) {
    const e = this.elements,
      n = t.elements;
    return (e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return (
      this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrixColumn(this, 0),
      e.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(t, e, n) {
    return (
      this.set(
        t.x,
        e.x,
        n.x,
        0,
        t.y,
        e.y,
        n.y,
        0,
        t.z,
        e.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(t) {
    const e = this.elements,
      n = t.elements,
      i = 1 / Zn.setFromMatrixColumn(t, 0).length(),
      r = 1 / Zn.setFromMatrixColumn(t, 1).length(),
      a = 1 / Zn.setFromMatrixColumn(t, 2).length();
    return (
      (e[0] = n[0] * i),
      (e[1] = n[1] * i),
      (e[2] = n[2] * i),
      (e[3] = 0),
      (e[4] = n[4] * r),
      (e[5] = n[5] * r),
      (e[6] = n[6] * r),
      (e[7] = 0),
      (e[8] = n[8] * a),
      (e[9] = n[9] * a),
      (e[10] = n[10] * a),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromEuler(t) {
    const e = this.elements,
      n = t.x,
      i = t.y,
      r = t.z,
      a = Math.cos(n),
      s = Math.sin(n),
      o = Math.cos(i),
      l = Math.sin(i),
      c = Math.cos(r),
      h = Math.sin(r);
    if ("XYZ" === t.order) {
      const t = a * c,
        n = a * h,
        i = s * c,
        r = s * h;
      (e[0] = o * c),
        (e[4] = -o * h),
        (e[8] = l),
        (e[1] = n + i * l),
        (e[5] = t - r * l),
        (e[9] = -s * o),
        (e[2] = r - t * l),
        (e[6] = i + n * l),
        (e[10] = a * o);
    } else if ("YXZ" === t.order) {
      const t = o * c,
        n = o * h,
        i = l * c,
        r = l * h;
      (e[0] = t + r * s),
        (e[4] = i * s - n),
        (e[8] = a * l),
        (e[1] = a * h),
        (e[5] = a * c),
        (e[9] = -s),
        (e[2] = n * s - i),
        (e[6] = r + t * s),
        (e[10] = a * o);
    } else if ("ZXY" === t.order) {
      const t = o * c,
        n = o * h,
        i = l * c,
        r = l * h;
      (e[0] = t - r * s),
        (e[4] = -a * h),
        (e[8] = i + n * s),
        (e[1] = n + i * s),
        (e[5] = a * c),
        (e[9] = r - t * s),
        (e[2] = -a * l),
        (e[6] = s),
        (e[10] = a * o);
    } else if ("ZYX" === t.order) {
      const t = a * c,
        n = a * h,
        i = s * c,
        r = s * h;
      (e[0] = o * c),
        (e[4] = i * l - n),
        (e[8] = t * l + r),
        (e[1] = o * h),
        (e[5] = r * l + t),
        (e[9] = n * l - i),
        (e[2] = -l),
        (e[6] = s * o),
        (e[10] = a * o);
    } else if ("YZX" === t.order) {
      const t = a * o,
        n = a * l,
        i = s * o,
        r = s * l;
      (e[0] = o * c),
        (e[4] = r - t * h),
        (e[8] = i * h + n),
        (e[1] = h),
        (e[5] = a * c),
        (e[9] = -s * c),
        (e[2] = -l * c),
        (e[6] = n * h + i),
        (e[10] = t - r * h);
    } else if ("XZY" === t.order) {
      const t = a * o,
        n = a * l,
        i = s * o,
        r = s * l;
      (e[0] = o * c),
        (e[4] = -h),
        (e[8] = l * c),
        (e[1] = t * h + r),
        (e[5] = a * c),
        (e[9] = n * h - i),
        (e[2] = i * h - n),
        (e[6] = s * c),
        (e[10] = r * h + t);
    }
    return (
      (e[3] = 0),
      (e[7] = 0),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Kn, t, $n);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return (
      ei.subVectors(t, e),
      0 === ei.lengthSq() && (ei.z = 1),
      ei.normalize(),
      Qn.crossVectors(n, ei),
      0 === Qn.lengthSq() &&
        (1 === Math.abs(n.z) ? (ei.x += 1e-4) : (ei.z += 1e-4),
        ei.normalize(),
        Qn.crossVectors(n, ei)),
      Qn.normalize(),
      ti.crossVectors(ei, Qn),
      (i[0] = Qn.x),
      (i[4] = ti.x),
      (i[8] = ei.x),
      (i[1] = Qn.y),
      (i[5] = ti.y),
      (i[9] = ei.y),
      (i[2] = Qn.z),
      (i[6] = ti.z),
      (i[10] = ei.z),
      this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      i = e.elements,
      r = this.elements,
      a = n[0],
      s = n[4],
      o = n[8],
      l = n[12],
      c = n[1],
      h = n[5],
      u = n[9],
      d = n[13],
      p = n[2],
      f = n[6],
      m = n[10],
      g = n[14],
      _ = n[3],
      v = n[7],
      x = n[11],
      y = n[15],
      M = i[0],
      S = i[4],
      E = i[8],
      T = i[12],
      b = i[1],
      A = i[5],
      w = i[9],
      R = i[13],
      C = i[2],
      P = i[6],
      L = i[10],
      U = i[14],
      D = i[3],
      I = i[7],
      N = i[11],
      O = i[15];
    return (
      (r[0] = a * M + s * b + o * C + l * D),
      (r[4] = a * S + s * A + o * P + l * I),
      (r[8] = a * E + s * w + o * L + l * N),
      (r[12] = a * T + s * R + o * U + l * O),
      (r[1] = c * M + h * b + u * C + d * D),
      (r[5] = c * S + h * A + u * P + d * I),
      (r[9] = c * E + h * w + u * L + d * N),
      (r[13] = c * T + h * R + u * U + d * O),
      (r[2] = p * M + f * b + m * C + g * D),
      (r[6] = p * S + f * A + m * P + g * I),
      (r[10] = p * E + f * w + m * L + g * N),
      (r[14] = p * T + f * R + m * U + g * O),
      (r[3] = _ * M + v * b + x * C + y * D),
      (r[7] = _ * S + v * A + x * P + y * I),
      (r[11] = _ * E + v * w + x * L + y * N),
      (r[15] = _ * T + v * R + x * U + y * O),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[4] *= t),
      (e[8] *= t),
      (e[12] *= t),
      (e[1] *= t),
      (e[5] *= t),
      (e[9] *= t),
      (e[13] *= t),
      (e[2] *= t),
      (e[6] *= t),
      (e[10] *= t),
      (e[14] *= t),
      (e[3] *= t),
      (e[7] *= t),
      (e[11] *= t),
      (e[15] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[4],
      i = t[8],
      r = t[12],
      a = t[1],
      s = t[5],
      o = t[9],
      l = t[13],
      c = t[2],
      h = t[6],
      u = t[10],
      d = t[14];
    return (
      t[3] *
        (+r * o * h -
          i * l * h -
          r * s * u +
          n * l * u +
          i * s * d -
          n * o * d) +
      t[7] *
        (+e * o * d -
          e * l * u +
          r * a * u -
          i * a * d +
          i * l * c -
          r * o * c) +
      t[11] *
        (+e * l * h -
          e * s * d -
          r * a * h +
          n * a * d +
          r * s * c -
          n * l * c) +
      t[15] *
        (-i * s * c - e * o * h + e * s * u + i * a * h - n * a * u + n * o * c)
    );
  }
  transpose() {
    const t = this.elements;
    let e;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return (
      t.isVector3
        ? ((i[12] = t.x), (i[13] = t.y), (i[14] = t.z))
        : ((i[12] = t), (i[13] = e), (i[14] = n)),
      this
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      i = t[2],
      r = t[3],
      a = t[4],
      s = t[5],
      o = t[6],
      l = t[7],
      c = t[8],
      h = t[9],
      u = t[10],
      d = t[11],
      p = t[12],
      f = t[13],
      m = t[14],
      g = t[15],
      _ = h * m * l - f * u * l + f * o * d - s * m * d - h * o * g + s * u * g,
      v = p * u * l - c * m * l - p * o * d + a * m * d + c * o * g - a * u * g,
      x = c * f * l - p * h * l + p * s * d - a * f * d - c * s * g + a * h * g,
      y = p * h * o - c * f * o - p * s * u + a * f * u + c * s * m - a * h * m,
      M = e * _ + n * v + i * x + r * y;
    if (0 === M)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const S = 1 / M;
    return (
      (t[0] = _ * S),
      (t[1] =
        (f * u * r -
          h * m * r -
          f * i * d +
          n * m * d +
          h * i * g -
          n * u * g) *
        S),
      (t[2] =
        (s * m * r -
          f * o * r +
          f * i * l -
          n * m * l -
          s * i * g +
          n * o * g) *
        S),
      (t[3] =
        (h * o * r -
          s * u * r -
          h * i * l +
          n * u * l +
          s * i * d -
          n * o * d) *
        S),
      (t[4] = v * S),
      (t[5] =
        (c * m * r -
          p * u * r +
          p * i * d -
          e * m * d -
          c * i * g +
          e * u * g) *
        S),
      (t[6] =
        (p * o * r -
          a * m * r -
          p * i * l +
          e * m * l +
          a * i * g -
          e * o * g) *
        S),
      (t[7] =
        (a * u * r -
          c * o * r +
          c * i * l -
          e * u * l -
          a * i * d +
          e * o * d) *
        S),
      (t[8] = x * S),
      (t[9] =
        (p * h * r -
          c * f * r -
          p * n * d +
          e * f * d +
          c * n * g -
          e * h * g) *
        S),
      (t[10] =
        (a * f * r -
          p * s * r +
          p * n * l -
          e * f * l -
          a * n * g +
          e * s * g) *
        S),
      (t[11] =
        (c * s * r -
          a * h * r -
          c * n * l +
          e * h * l +
          a * n * d -
          e * s * d) *
        S),
      (t[12] = y * S),
      (t[13] =
        (c * f * i -
          p * h * i +
          p * n * u -
          e * f * u -
          c * n * m +
          e * h * m) *
        S),
      (t[14] =
        (p * s * i -
          a * f * i -
          p * n * o +
          e * f * o +
          a * n * m -
          e * s * m) *
        S),
      (t[15] =
        (a * h * i -
          c * s * i +
          c * n * o -
          e * h * o -
          a * n * u +
          e * s * u) *
        S),
      this
    );
  }
  scale(t) {
    const e = this.elements,
      n = t.x,
      i = t.y,
      r = t.z;
    return (
      (e[0] *= n),
      (e[4] *= i),
      (e[8] *= r),
      (e[1] *= n),
      (e[5] *= i),
      (e[9] *= r),
      (e[2] *= n),
      (e[6] *= i),
      (e[10] *= r),
      (e[3] *= n),
      (e[7] *= i),
      (e[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const t = this.elements,
      e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
      n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
      i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return (
      t.isVector3
        ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e),
      i = Math.sin(e),
      r = 1 - n,
      a = t.x,
      s = t.y,
      o = t.z,
      l = r * a,
      c = r * s;
    return (
      this.set(
        l * a + n,
        l * s - i * o,
        l * o + i * s,
        0,
        l * s + i * o,
        c * s + n,
        c * o - i * a,
        0,
        l * o - i * s,
        c * o + i * a,
        r * o * o + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, i, r, a) {
    return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const i = this.elements,
      r = e._x,
      a = e._y,
      s = e._z,
      o = e._w,
      l = r + r,
      c = a + a,
      h = s + s,
      u = r * l,
      d = r * c,
      p = r * h,
      f = a * c,
      m = a * h,
      g = s * h,
      _ = o * l,
      v = o * c,
      x = o * h,
      y = n.x,
      M = n.y,
      S = n.z;
    return (
      (i[0] = (1 - (f + g)) * y),
      (i[1] = (d + x) * y),
      (i[2] = (p - v) * y),
      (i[3] = 0),
      (i[4] = (d - x) * M),
      (i[5] = (1 - (u + g)) * M),
      (i[6] = (m + _) * M),
      (i[7] = 0),
      (i[8] = (p + v) * S),
      (i[9] = (m - _) * S),
      (i[10] = (1 - (u + f)) * S),
      (i[11] = 0),
      (i[12] = t.x),
      (i[13] = t.y),
      (i[14] = t.z),
      (i[15] = 1),
      this
    );
  }
  decompose(t, e, n) {
    const i = this.elements;
    let r = Zn.set(i[0], i[1], i[2]).length();
    const a = Zn.set(i[4], i[5], i[6]).length(),
      s = Zn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (t.x = i[12]),
      (t.y = i[13]),
      (t.z = i[14]),
      Jn.copy(this);
    const o = 1 / r,
      l = 1 / a,
      c = 1 / s;
    return (
      (Jn.elements[0] *= o),
      (Jn.elements[1] *= o),
      (Jn.elements[2] *= o),
      (Jn.elements[4] *= l),
      (Jn.elements[5] *= l),
      (Jn.elements[6] *= l),
      (Jn.elements[8] *= c),
      (Jn.elements[9] *= c),
      (Jn.elements[10] *= c),
      e.setFromRotationMatrix(Jn),
      (n.x = r),
      (n.y = a),
      (n.z = s),
      this
    );
  }
  makePerspective(t, e, n, i, r, a, s = 2e3) {
    const o = this.elements,
      l = (2 * r) / (e - t),
      c = (2 * r) / (n - i),
      h = (e + t) / (e - t),
      u = (n + i) / (n - i);
    let d, p;
    if (s === Re) (d = -(a + r) / (a - r)), (p = (-2 * a * r) / (a - r));
    else {
      if (s !== Ce)
        throw new Error(
          "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s
        );
      (d = -a / (a - r)), (p = (-a * r) / (a - r));
    }
    return (
      (o[0] = l),
      (o[4] = 0),
      (o[8] = h),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = c),
      (o[9] = u),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = d),
      (o[14] = p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(t, e, n, i, r, a, s = 2e3) {
    const o = this.elements,
      l = 1 / (e - t),
      c = 1 / (n - i),
      h = 1 / (a - r),
      u = (e + t) * l,
      d = (n + i) * c;
    let p, f;
    if (s === Re) (p = (a + r) * h), (f = -2 * h);
    else {
      if (s !== Ce)
        throw new Error(
          "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s
        );
      (p = r * h), (f = -1 * h);
    }
    return (
      (o[0] = 2 * l),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -u),
      (o[1] = 0),
      (o[5] = 2 * c),
      (o[9] = 0),
      (o[13] = -d),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = f),
      (o[14] = -p),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let i = 0; i < 16; i++) if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      (t[e + 9] = n[9]),
      (t[e + 10] = n[10]),
      (t[e + 11] = n[11]),
      (t[e + 12] = n[12]),
      (t[e + 13] = n[13]),
      (t[e + 14] = n[14]),
      (t[e + 15] = n[15]),
      t
    );
  }
}
const Zn = new vn(),
  Jn = new Yn(),
  Kn = new vn(0, 0, 0),
  $n = new vn(1, 1, 1),
  Qn = new vn(),
  ti = new vn(),
  ei = new vn(),
  ni = new Yn(),
  ii = new _n();
class ri {
  constructor(t = 0, e = 0, n = 0, i = ri.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(t) {
    (this._x = t), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    (this._y = t), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    (this._z = t), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    (this._order = t), this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return (
      (this._x = t._x),
      (this._y = t._y),
      (this._z = t._z),
      (this._order = t._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const i = t.elements,
      r = i[0],
      a = i[4],
      s = i[8],
      o = i[1],
      l = i[5],
      c = i[9],
      h = i[2],
      u = i[6],
      d = i[10];
    switch (e) {
      case "XYZ":
        (this._y = Math.asin(Oe(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-c, d)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Oe(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._y = Math.atan2(s, d)), (this._z = Math.atan2(o, l)))
            : ((this._y = Math.atan2(-h, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Oe(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-h, d)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(o, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Oe(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(u, d)), (this._z = Math.atan2(o, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(Oe(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
            : ((this._x = 0), (this._y = Math.atan2(s, d)));
        break;
      case "XZY":
        (this._z = Math.asin(-Oe(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(s, r)))
            : ((this._x = Math.atan2(-c, d)), (this._y = 0));
    }
    return (this._order = e), !0 === n && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return (
      ni.makeRotationFromQuaternion(t), this.setFromRotationMatrix(ni, e, n)
    );
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return ii.setFromEuler(this), this.setFromQuaternion(ii, t);
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._order === this._order
    );
  }
  fromArray(t) {
    return (
      (this._x = t[0]),
      (this._y = t[1]),
      (this._z = t[2]),
      void 0 !== t[3] && (this._order = t[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._order),
      t
    );
  }
  _onChange(t) {
    return (this._onChangeCallback = t), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ri.DEFAULT_ORDER = "XYZ";
class ai {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t;
  }
  disable(t) {
    this.mask &= ~(1 << t);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return !!(this.mask & t.mask);
  }
  isEnabled(t) {
    return !!(this.mask & (1 << t));
  }
}
let si = 0;
const oi = new vn(),
  li = new _n(),
  ci = new Yn(),
  hi = new vn(),
  ui = new vn(),
  di = new vn(),
  pi = new _n(),
  fi = new vn(1, 0, 0),
  mi = new vn(0, 1, 0),
  gi = new vn(0, 0, 1),
  _i = { type: "added" },
  vi = { type: "removed" },
  xi = { type: "childadded", child: null },
  yi = { type: "childremoved", child: null };
class Mi extends Pe {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: si++ }),
      (this.uuid = Ne()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Mi.DEFAULT_UP.clone());
    const t = new vn(),
      e = new ri(),
      n = new _n(),
      i = new vn(1, 1, 1);
    e._onChange(function () {
      n.setFromEuler(e, !1);
    }),
      n._onChange(function () {
        e.setFromQuaternion(n, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: t },
        rotation: { configurable: !0, enumerable: !0, value: e },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Yn() },
        normalMatrix: { value: new Ge() },
      }),
      (this.matrix = new Yn()),
      (this.matrixWorld = new Yn()),
      (this.matrixAutoUpdate = Mi.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new ai()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(t),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return li.setFromAxisAngle(t, e), this.quaternion.multiply(li), this;
  }
  rotateOnWorldAxis(t, e) {
    return li.setFromAxisAngle(t, e), this.quaternion.premultiply(li), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(fi, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(mi, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(gi, t);
  }
  translateOnAxis(t, e) {
    return (
      oi.copy(t).applyQuaternion(this.quaternion),
      this.position.add(oi.multiplyScalar(e)),
      this
    );
  }
  translateX(t) {
    return this.translateOnAxis(fi, t);
  }
  translateY(t) {
    return this.translateOnAxis(mi, t);
  }
  translateZ(t) {
    return this.translateOnAxis(gi, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.applyMatrix4(ci.copy(this.matrixWorld).invert())
    );
  }
  lookAt(t, e, n) {
    t.isVector3 ? hi.copy(t) : hi.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      ui.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? ci.lookAt(ui, hi, this.up)
        : ci.lookAt(hi, ui, this.up),
      this.quaternion.setFromRotationMatrix(ci),
      i &&
        (ci.extractRotation(i.matrixWorld),
        li.setFromRotationMatrix(ci),
        this.quaternion.premultiply(li.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return (
      t === this ||
        (t &&
          t.isObject3D &&
          (t.removeFromParent(),
          (t.parent = this),
          this.children.push(t),
          t.dispatchEvent(_i),
          (xi.child = t),
          this.dispatchEvent(xi),
          (xi.child = null))),
      this
    );
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
      return this;
    }
    const e = this.children.indexOf(t);
    return (
      -1 !== e &&
        ((t.parent = null),
        this.children.splice(e, 1),
        t.dispatchEvent(vi),
        (yi.child = t),
        this.dispatchEvent(yi),
        (yi.child = null)),
      this
    );
  }
  removeFromParent() {
    const t = this.parent;
    return null !== t && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      ci.copy(this.matrixWorld).invert(),
      null !== t.parent &&
        (t.parent.updateWorldMatrix(!0, !1), ci.multiply(t.parent.matrixWorld)),
      t.applyMatrix4(ci),
      t.removeFromParent(),
      (t.parent = this),
      this.children.push(t),
      t.updateWorldMatrix(!1, !0),
      t.dispatchEvent(_i),
      (xi.child = t),
      this.dispatchEvent(xi),
      (xi.child = null),
      this
    );
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const i = this.children[n].getObjectByProperty(t, e);
      if (void 0 !== i) return i;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return (
      this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ui, t, di), t
    );
  }
  getWorldScale(t) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ui, pi, t), t
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {}
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (!1 === this.visible) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    null !== e && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (!0 === this.matrixWorldAutoUpdate &&
          (null === this.parent
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0));
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++) {
      e[n].updateMatrixWorld(t);
    }
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (
      (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      !0 === this.matrixWorldAutoUpdate &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            )),
      !0 === e)
    ) {
      const t = this.children;
      for (let e = 0, n = t.length; e < n; e++) {
        t[e].updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t,
      n = {};
    e &&
      ((t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    function r(e, n) {
      return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid;
    }
    if (
      ((i.uuid = this.uuid),
      (i.type = this.type),
      "" !== this.name && (i.name = this.name),
      !0 === this.castShadow && (i.castShadow = !0),
      !0 === this.receiveShadow && (i.receiveShadow = !0),
      !1 === this.visible && (i.visible = !1),
      !1 === this.frustumCulled && (i.frustumCulled = !1),
      0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.visibility = this._visibility),
        (i.active = this._active),
        (i.bounds = this._bounds.map((t) => ({
          boxInitialized: t.boxInitialized,
          boxMin: t.box.min.toArray(),
          boxMax: t.box.max.toArray(),
          sphereInitialized: t.sphereInitialized,
          sphereRadius: t.sphere.radius,
          sphereCenter: t.sphere.center.toArray(),
        }))),
        (i.maxInstanceCount = this._maxInstanceCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.geometryCount = this._geometryCount),
        (i.matricesTexture = this._matricesTexture.toJSON(t)),
        null !== this._colorsTexture &&
          (i.colorsTexture = this._colorsTexture.toJSON(t)),
        null !== this.boundingSphere &&
          (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius,
          }),
        null !== this.boundingBox &&
          (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray(),
          })),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(t).uuid)),
        this.environment &&
          this.environment.isTexture &&
          !0 !== this.environment.isRenderTargetTexture &&
          (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(t.geometries, this.geometry);
      const e = this.geometry.parameters;
      if (void 0 !== e && void 0 !== e.shapes) {
        const n = e.shapes;
        if (Array.isArray(n))
          for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            r(t.shapes, i);
          }
        else r(t.shapes, n);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (r(t.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    )
      if (Array.isArray(this.material)) {
        const e = [];
        for (let n = 0, i = this.material.length; n < i; n++)
          e.push(r(t.materials, this.material[n]));
        i.material = e;
      } else i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let e = 0; e < this.children.length; e++)
        i.children.push(this.children[e].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let e = 0; e < this.animations.length; e++) {
        const n = this.animations[e];
        i.animations.push(r(t.animations, n));
      }
    }
    if (e) {
      const e = a(t.geometries),
        i = a(t.materials),
        r = a(t.textures),
        s = a(t.images),
        o = a(t.shapes),
        l = a(t.skeletons),
        c = a(t.animations),
        h = a(t.nodes);
      e.length > 0 && (n.geometries = e),
        i.length > 0 && (n.materials = i),
        r.length > 0 && (n.textures = r),
        s.length > 0 && (n.images = s),
        o.length > 0 && (n.shapes = o),
        l.length > 0 && (n.skeletons = l),
        c.length > 0 && (n.animations = c),
        h.length > 0 && (n.nodes = h);
    }
    return (n.object = i), n;
    function a(t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        delete i.metadata, e.push(i);
      }
      return e;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (
      ((this.name = t.name),
      this.up.copy(t.up),
      this.position.copy(t.position),
      (this.rotation.order = t.rotation.order),
      this.quaternion.copy(t.quaternion),
      this.scale.copy(t.scale),
      this.matrix.copy(t.matrix),
      this.matrixWorld.copy(t.matrixWorld),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
      (this.layers.mask = t.layers.mask),
      (this.visible = t.visible),
      (this.castShadow = t.castShadow),
      (this.receiveShadow = t.receiveShadow),
      (this.frustumCulled = t.frustumCulled),
      (this.renderOrder = t.renderOrder),
      (this.animations = t.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      !0 === e)
    )
      for (let n = 0; n < t.children.length; n++) {
        const e = t.children[n];
        this.add(e.clone());
      }
    return this;
  }
}
(Mi.DEFAULT_UP = new vn(0, 1, 0)),
  (Mi.DEFAULT_MATRIX_AUTO_UPDATE = !0),
  (Mi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0);
const Si = new vn(),
  Ei = new vn(),
  Ti = new vn(),
  bi = new vn(),
  Ai = new vn(),
  wi = new vn(),
  Ri = new vn(),
  Ci = new vn(),
  Pi = new vn(),
  Li = new vn(),
  Ui = new dn(),
  Di = new dn(),
  Ii = new dn();
class Ni {
  constructor(t = new vn(), e = new vn(), n = new vn()) {
    (this.a = t), (this.b = e), (this.c = n);
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), Si.subVectors(t, e), i.cross(Si);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, i, r) {
    Si.subVectors(i, e), Ei.subVectors(n, e), Ti.subVectors(t, e);
    const a = Si.dot(Si),
      s = Si.dot(Ei),
      o = Si.dot(Ti),
      l = Ei.dot(Ei),
      c = Ei.dot(Ti),
      h = a * l - s * s;
    if (0 === h) return r.set(0, 0, 0), null;
    const u = 1 / h,
      d = (l * o - s * c) * u,
      p = (a * c - s * o) * u;
    return r.set(1 - d - p, p, d);
  }
  static containsPoint(t, e, n, i) {
    return (
      null !== this.getBarycoord(t, e, n, i, bi) &&
      bi.x >= 0 &&
      bi.y >= 0 &&
      bi.x + bi.y <= 1
    );
  }
  static getInterpolation(t, e, n, i, r, a, s, o) {
    return null === this.getBarycoord(t, e, n, i, bi)
      ? ((o.x = 0),
        (o.y = 0),
        "z" in o && (o.z = 0),
        "w" in o && (o.w = 0),
        null)
      : (o.setScalar(0),
        o.addScaledVector(r, bi.x),
        o.addScaledVector(a, bi.y),
        o.addScaledVector(s, bi.z),
        o);
  }
  static getInterpolatedAttribute(t, e, n, i, r, a) {
    return (
      Ui.setScalar(0),
      Di.setScalar(0),
      Ii.setScalar(0),
      Ui.fromBufferAttribute(t, e),
      Di.fromBufferAttribute(t, n),
      Ii.fromBufferAttribute(t, i),
      a.setScalar(0),
      a.addScaledVector(Ui, r.x),
      a.addScaledVector(Di, r.y),
      a.addScaledVector(Ii, r.z),
      a
    );
  }
  static isFrontFacing(t, e, n, i) {
    return Si.subVectors(n, e), Ei.subVectors(t, e), Si.cross(Ei).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return (
      this.a.fromBufferAttribute(t, e),
      this.b.fromBufferAttribute(t, n),
      this.c.fromBufferAttribute(t, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return (
      Si.subVectors(this.c, this.b),
      Ei.subVectors(this.a, this.b),
      0.5 * Si.cross(Ei).length()
    );
  }
  getMidpoint(t) {
    return t
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Ni.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Ni.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, r) {
    return Ni.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
  }
  containsPoint(t) {
    return Ni.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Ni.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, s;
    Ai.subVectors(i, n), wi.subVectors(r, n), Ci.subVectors(t, n);
    const o = Ai.dot(Ci),
      l = wi.dot(Ci);
    if (o <= 0 && l <= 0) return e.copy(n);
    Pi.subVectors(t, i);
    const c = Ai.dot(Pi),
      h = wi.dot(Pi);
    if (c >= 0 && h <= c) return e.copy(i);
    const u = o * h - c * l;
    if (u <= 0 && o >= 0 && c <= 0)
      return (a = o / (o - c)), e.copy(n).addScaledVector(Ai, a);
    Li.subVectors(t, r);
    const d = Ai.dot(Li),
      p = wi.dot(Li);
    if (p >= 0 && d <= p) return e.copy(r);
    const f = d * l - o * p;
    if (f <= 0 && l >= 0 && p <= 0)
      return (s = l / (l - p)), e.copy(n).addScaledVector(wi, s);
    const m = c * p - d * h;
    if (m <= 0 && h - c >= 0 && d - p >= 0)
      return (
        Ri.subVectors(r, i),
        (s = (h - c) / (h - c + (d - p))),
        e.copy(i).addScaledVector(Ri, s)
      );
    const g = 1 / (m + f + u);
    return (
      (a = f * g),
      (s = u * g),
      e.copy(n).addScaledVector(Ai, a).addScaledVector(wi, s)
    );
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Oi = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Fi = { h: 0, s: 0, l: 0 },
  Bi = { h: 0, s: 0, l: 0 };
function zi(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? t + 6 * (e - t) * n
      : n < 0.5
      ? e
      : n < 2 / 3
      ? t + 6 * (e - t) * (2 / 3 - n)
      : t
  );
}
class Vi {
  constructor(t, e, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(t, e, n)
    );
  }
  set(t, e, n) {
    if (void 0 === e && void 0 === n) {
      const e = t;
      e && e.isColor
        ? this.copy(e)
        : "number" == typeof e
        ? this.setHex(e)
        : "string" == typeof e && this.setStyle(e);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return (this.r = t), (this.g = t), (this.b = t), this;
  }
  setHex(t, e = pe) {
    return (
      (t = Math.floor(t)),
      (this.r = ((t >> 16) & 255) / 255),
      (this.g = ((t >> 8) & 255) / 255),
      (this.b = (255 & t) / 255),
      Je.toWorkingColorSpace(this, e),
      this
    );
  }
  setRGB(t, e, n, i = Je.workingColorSpace) {
    return (
      (this.r = t),
      (this.g = e),
      (this.b = n),
      Je.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(t, e, n, i = Je.workingColorSpace) {
    if (((t = Fe(t, 1)), (e = Oe(e, 0, 1)), (n = Oe(n, 0, 1)), 0 === e))
      this.r = this.g = this.b = n;
    else {
      const i = n <= 0.5 ? n * (1 + e) : n + e - n * e,
        r = 2 * n - i;
      (this.r = zi(r, i, t + 1 / 3)),
        (this.g = zi(r, i, t)),
        (this.b = zi(r, i, t - 1 / 3));
    }
    return Je.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = pe) {
    function n(t) {
      void 0 !== t && parseFloat(t);
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(t))) {
      let t;
      const r = i[1],
        a = i[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (
            (t =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(t[4]),
              this.setRGB(
                Math.min(255, parseInt(t[1], 10)) / 255,
                Math.min(255, parseInt(t[2], 10)) / 255,
                Math.min(255, parseInt(t[3], 10)) / 255,
                e
              )
            );
          if (
            (t =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(t[4]),
              this.setRGB(
                Math.min(100, parseInt(t[1], 10)) / 100,
                Math.min(100, parseInt(t[2], 10)) / 100,
                Math.min(100, parseInt(t[3], 10)) / 100,
                e
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (t =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              n(t[4]),
              this.setHSL(
                parseFloat(t[1]) / 360,
                parseFloat(t[2]) / 100,
                parseFloat(t[3]) / 100,
                e
              )
            );
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(t))) {
      const t = i[1],
        n = t.length;
      if (3 === n)
        return this.setRGB(
          parseInt(t.charAt(0), 16) / 15,
          parseInt(t.charAt(1), 16) / 15,
          parseInt(t.charAt(2), 16) / 15,
          e
        );
      if (6 === n) return this.setHex(parseInt(t, 16), e);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = pe) {
    const n = Oi[t.toLowerCase()];
    return void 0 !== n && this.setHex(n, e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return (this.r = t.r), (this.g = t.g), (this.b = t.b), this;
  }
  copySRGBToLinear(t) {
    return (this.r = Ke(t.r)), (this.g = Ke(t.g)), (this.b = Ke(t.b)), this;
  }
  copyLinearToSRGB(t) {
    return (this.r = $e(t.r)), (this.g = $e(t.g)), (this.b = $e(t.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = pe) {
    return (
      Je.fromWorkingColorSpace(Hi.copy(this), t),
      65536 * Math.round(Oe(255 * Hi.r, 0, 255)) +
        256 * Math.round(Oe(255 * Hi.g, 0, 255)) +
        Math.round(Oe(255 * Hi.b, 0, 255))
    );
  }
  getHexString(t = pe) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Je.workingColorSpace) {
    Je.fromWorkingColorSpace(Hi.copy(this), e);
    const n = Hi.r,
      i = Hi.g,
      r = Hi.b,
      a = Math.max(n, i, r),
      s = Math.min(n, i, r);
    let o, l;
    const c = (s + a) / 2;
    if (s === a) (o = 0), (l = 0);
    else {
      const t = a - s;
      switch (((l = c <= 0.5 ? t / (a + s) : t / (2 - a - s)), a)) {
        case n:
          o = (i - r) / t + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / t + 2;
          break;
        case r:
          o = (n - i) / t + 4;
      }
      o /= 6;
    }
    return (t.h = o), (t.s = l), (t.l = c), t;
  }
  getRGB(t, e = Je.workingColorSpace) {
    return (
      Je.fromWorkingColorSpace(Hi.copy(this), e),
      (t.r = Hi.r),
      (t.g = Hi.g),
      (t.b = Hi.b),
      t
    );
  }
  getStyle(t = pe) {
    Je.fromWorkingColorSpace(Hi.copy(this), t);
    const e = Hi.r,
      n = Hi.g,
      i = Hi.b;
    return t !== pe
      ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(
          255 * i
        )})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(Fi), this.setHSL(Fi.h + t, Fi.s + e, Fi.l + n);
  }
  add(t) {
    return (this.r += t.r), (this.g += t.g), (this.b += t.b), this;
  }
  addColors(t, e) {
    return (
      (this.r = t.r + e.r), (this.g = t.g + e.g), (this.b = t.b + e.b), this
    );
  }
  addScalar(t) {
    return (this.r += t), (this.g += t), (this.b += t), this;
  }
  sub(t) {
    return (
      (this.r = Math.max(0, this.r - t.r)),
      (this.g = Math.max(0, this.g - t.g)),
      (this.b = Math.max(0, this.b - t.b)),
      this
    );
  }
  multiply(t) {
    return (this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this;
  }
  multiplyScalar(t) {
    return (this.r *= t), (this.g *= t), (this.b *= t), this;
  }
  lerp(t, e) {
    return (
      (this.r += (t.r - this.r) * e),
      (this.g += (t.g - this.g) * e),
      (this.b += (t.b - this.b) * e),
      this
    );
  }
  lerpColors(t, e, n) {
    return (
      (this.r = t.r + (e.r - t.r) * n),
      (this.g = t.g + (e.g - t.g) * n),
      (this.b = t.b + (e.b - t.b) * n),
      this
    );
  }
  lerpHSL(t, e) {
    this.getHSL(Fi), t.getHSL(Bi);
    const n = Be(Fi.h, Bi.h, e),
      i = Be(Fi.s, Bi.s, e),
      r = Be(Fi.l, Bi.l, e);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(t) {
    return (this.r = t.x), (this.g = t.y), (this.b = t.z), this;
  }
  applyMatrix3(t) {
    const e = this.r,
      n = this.g,
      i = this.b,
      r = t.elements;
    return (
      (this.r = r[0] * e + r[3] * n + r[6] * i),
      (this.g = r[1] * e + r[4] * n + r[7] * i),
      (this.b = r[2] * e + r[5] * n + r[8] * i),
      this
    );
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return (this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this;
  }
  toArray(t = [], e = 0) {
    return (t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t;
  }
  fromBufferAttribute(t, e) {
    return (
      (this.r = t.getX(e)), (this.g = t.getY(e)), (this.b = t.getZ(e)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Hi = new Vi();
Vi.NAMES = Oi;
let ki = 0;
class Gi extends Pe {
  static get type() {
    return "Material";
  }
  get type() {
    return this.constructor.type;
  }
  set type(t) {}
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: ki++ }),
      (this.uuid = Ne()),
      (this.name = ""),
      (this.blending = 1),
      (this.side = c),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = p),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Vi(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = _e),
      (this.stencilZFail = _e),
      (this.stencilZPass = _e),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (void 0 !== t)
      for (const e in t) {
        const n = t[e];
        if (void 0 === n) continue;
        const i = this[e];
        void 0 !== i &&
          (i && i.isColor
            ? i.set(n)
            : i && i.isVector3 && n && n.isVector3
            ? i.copy(n)
            : (this[e] = n));
      }
  }
  toJSON(t) {
    const e = void 0 === t || "string" == typeof t;
    e && (t = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function i(t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        delete i.metadata, e.push(i);
      }
      return e;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      void 0 !== this.roughness && (n.roughness = this.roughness),
      void 0 !== this.metalness && (n.metalness = this.metalness),
      void 0 !== this.sheen && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      void 0 !== this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (n.shininess = this.shininess),
      void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      void 0 !== this.dispersion && (n.dispersion = this.dispersion),
      void 0 !== this.iridescence && (n.iridescence = this.iridescence),
      void 0 !== this.iridescenceIOR &&
        (n.iridescenceIOR = this.iridescenceIOR),
      void 0 !== this.iridescenceThicknessRange &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(t).uuid),
      void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy),
      void 0 !== this.anisotropyRotation &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(t).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(t).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(t).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(t).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(t).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(t).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(t).uuid),
        void 0 !== this.combine && (n.combine = this.combine)),
      void 0 !== this.envMapRotation &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      void 0 !== this.envMapIntensity &&
        (n.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(t).uuid),
      void 0 !== this.transmission && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
      void 0 !== this.thickness && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
      void 0 !== this.attenuationDistance &&
        Infinity !== this.attenuationDistance &&
        (n.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (n.size = this.size),
      null !== this.shadowSide && (n.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (n.sizeAttenuation = this.sizeAttenuation),
      1 !== this.blending && (n.blending = this.blending),
      this.side !== c && (n.side = this.side),
      !0 === this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      !0 === this.transparent && (n.transparent = !0),
      204 !== this.blendSrc && (n.blendSrc = this.blendSrc),
      205 !== this.blendDst && (n.blendDst = this.blendDst),
      this.blendEquation !== p && (n.blendEquation = this.blendEquation),
      null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha),
      null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha),
      null !== this.blendEquationAlpha &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha),
      3 !== this.depthFunc && (n.depthFunc = this.depthFunc),
      !1 === this.depthTest && (n.depthTest = this.depthTest),
      !1 === this.depthWrite && (n.depthWrite = this.depthWrite),
      !1 === this.colorWrite && (n.colorWrite = this.colorWrite),
      255 !== this.stencilWriteMask &&
        (n.stencilWriteMask = this.stencilWriteMask),
      519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc),
      0 !== this.stencilRef && (n.stencilRef = this.stencilRef),
      255 !== this.stencilFuncMask &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== _e && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== _e && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== _e && (n.stencilZPass = this.stencilZPass),
      !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite),
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (n.rotation = this.rotation),
      !0 === this.polygonOffset && (n.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (n.linewidth = this.linewidth),
      void 0 !== this.dashSize && (n.dashSize = this.dashSize),
      void 0 !== this.gapSize && (n.gapSize = this.gapSize),
      void 0 !== this.scale && (n.scale = this.scale),
      !0 === this.dithering && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      !0 === this.alphaHash && (n.alphaHash = !0),
      !0 === this.alphaToCoverage && (n.alphaToCoverage = !0),
      !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0),
      !0 === this.forceSinglePass && (n.forceSinglePass = !0),
      !0 === this.wireframe && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (n.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (n.flatShading = !0),
      !1 === this.visible && (n.visible = !1),
      !1 === this.toneMapped && (n.toneMapped = !1),
      !1 === this.fog && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      e)
    ) {
      const e = i(t.textures),
        r = i(t.images);
      e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.name = t.name),
      (this.blending = t.blending),
      (this.side = t.side),
      (this.vertexColors = t.vertexColors),
      (this.opacity = t.opacity),
      (this.transparent = t.transparent),
      (this.blendSrc = t.blendSrc),
      (this.blendDst = t.blendDst),
      (this.blendEquation = t.blendEquation),
      (this.blendSrcAlpha = t.blendSrcAlpha),
      (this.blendDstAlpha = t.blendDstAlpha),
      (this.blendEquationAlpha = t.blendEquationAlpha),
      this.blendColor.copy(t.blendColor),
      (this.blendAlpha = t.blendAlpha),
      (this.depthFunc = t.depthFunc),
      (this.depthTest = t.depthTest),
      (this.depthWrite = t.depthWrite),
      (this.stencilWriteMask = t.stencilWriteMask),
      (this.stencilFunc = t.stencilFunc),
      (this.stencilRef = t.stencilRef),
      (this.stencilFuncMask = t.stencilFuncMask),
      (this.stencilFail = t.stencilFail),
      (this.stencilZFail = t.stencilZFail),
      (this.stencilZPass = t.stencilZPass),
      (this.stencilWrite = t.stencilWrite);
    const e = t.clippingPlanes;
    let n = null;
    if (null !== e) {
      const t = e.length;
      n = new Array(t);
      for (let i = 0; i !== t; ++i) n[i] = e[i].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = t.clipIntersection),
      (this.clipShadows = t.clipShadows),
      (this.shadowSide = t.shadowSide),
      (this.colorWrite = t.colorWrite),
      (this.precision = t.precision),
      (this.polygonOffset = t.polygonOffset),
      (this.polygonOffsetFactor = t.polygonOffsetFactor),
      (this.polygonOffsetUnits = t.polygonOffsetUnits),
      (this.dithering = t.dithering),
      (this.alphaTest = t.alphaTest),
      (this.alphaHash = t.alphaHash),
      (this.alphaToCoverage = t.alphaToCoverage),
      (this.premultipliedAlpha = t.premultipliedAlpha),
      (this.forceSinglePass = t.forceSinglePass),
      (this.visible = t.visible),
      (this.toneMapped = t.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  onBuild() {}
}
class Wi extends Gi {
  static get type() {
    return "MeshBasicMaterial";
  }
  constructor(t) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.color = new Vi(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new ri()),
      (this.combine = z),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    );
  }
}
const Xi = new vn(),
  ji = new ke();
class qi {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = t),
      (this.itemSize = e),
      (this.count = void 0 !== t ? t.length / e : 0),
      (this.normalized = n),
      (this.usage = Ae),
      (this.updateRanges = []),
      (this.gpuType = ft),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  setUsage(t) {
    return (this.usage = t), this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.array = new t.array.constructor(t.array)),
      (this.itemSize = t.itemSize),
      (this.count = t.count),
      (this.normalized = t.normalized),
      (this.usage = t.usage),
      (this.gpuType = t.gpuType),
      this
    );
  }
  copyAt(t, e, n) {
    (t *= this.itemSize), (n *= e.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (2 === this.itemSize)
      for (let e = 0, n = this.count; e < n; e++)
        ji.fromBufferAttribute(this, e),
          ji.applyMatrix3(t),
          this.setXY(e, ji.x, ji.y);
    else if (3 === this.itemSize)
      for (let e = 0, n = this.count; e < n; e++)
        Xi.fromBufferAttribute(this, e),
          Xi.applyMatrix3(t),
          this.setXYZ(e, Xi.x, Xi.y, Xi.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Xi.fromBufferAttribute(this, e),
        Xi.applyMatrix4(t),
        this.setXYZ(e, Xi.x, Xi.y, Xi.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Xi.fromBufferAttribute(this, e),
        Xi.applyNormalMatrix(t),
        this.setXYZ(e, Xi.x, Xi.y, Xi.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Xi.fromBufferAttribute(this, e),
        Xi.transformDirection(t),
        this.setXYZ(e, Xi.x, Xi.y, Xi.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = ze(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return (
      this.normalized && (n = Ve(n, this.array)),
      (this.array[t * this.itemSize + e] = n),
      this
    );
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setX(t, e) {
    return (
      this.normalized && (e = Ve(e, this.array)),
      (this.array[t * this.itemSize] = e),
      this
    );
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setY(t, e) {
    return (
      this.normalized && (e = Ve(e, this.array)),
      (this.array[t * this.itemSize + 1] = e),
      this
    );
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setZ(t, e) {
    return (
      this.normalized && (e = Ve(e, this.array)),
      (this.array[t * this.itemSize + 2] = e),
      this
    );
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setW(t, e) {
    return (
      this.normalized && (e = Ve(e, this.array)),
      (this.array[t * this.itemSize + 3] = e),
      this
    );
  }
  setXY(t, e, n) {
    return (
      (t *= this.itemSize),
      this.normalized && ((e = Ve(e, this.array)), (n = Ve(n, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      this
    );
  }
  setXYZ(t, e, n, i) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Ve(e, this.array)),
        (n = Ve(n, this.array)),
        (i = Ve(i, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      this
    );
  }
  setXYZW(t, e, n, i, r) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Ve(e, this.array)),
        (n = Ve(n, this.array)),
        (i = Ve(i, this.array)),
        (r = Ve(r, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = i),
      (this.array[t + 3] = r),
      this
    );
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      "" !== this.name && (t.name = this.name),
      this.usage !== Ae && (t.usage = this.usage),
      t
    );
  }
}
class Yi extends qi {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Zi extends qi {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Ji extends qi {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Ki = 0;
const $i = new Yn(),
  Qi = new Mi(),
  tr = new vn(),
  er = new Mn(),
  nr = new Mn(),
  ir = new vn();
class rr extends Pe {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Ki++ }),
      (this.uuid = Ne()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: Infinity }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return (
      Array.isArray(t)
        ? (this.index = new (Xe(t) ? Zi : Yi)(t, 1))
        : (this.index = t),
      this
    );
  }
  setIndirect(t) {
    return (this.indirect = t), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return (this.attributes[t] = e), this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return void 0 !== this.attributes[t];
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    (this.drawRange.start = t), (this.drawRange.count = e);
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    void 0 !== e && (e.applyMatrix4(t), (e.needsUpdate = !0));
    const n = this.attributes.normal;
    if (void 0 !== n) {
      const e = new Ge().getNormalMatrix(t);
      n.applyNormalMatrix(e), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      void 0 !== i && (i.transformDirection(t), (i.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(t) {
    return $i.makeRotationFromQuaternion(t), this.applyMatrix4($i), this;
  }
  rotateX(t) {
    return $i.makeRotationX(t), this.applyMatrix4($i), this;
  }
  rotateY(t) {
    return $i.makeRotationY(t), this.applyMatrix4($i), this;
  }
  rotateZ(t) {
    return $i.makeRotationZ(t), this.applyMatrix4($i), this;
  }
  translate(t, e, n) {
    return $i.makeTranslation(t, e, n), this.applyMatrix4($i), this;
  }
  scale(t, e, n) {
    return $i.makeScale(t, e, n), this.applyMatrix4($i), this;
  }
  lookAt(t) {
    return Qi.lookAt(t), Qi.updateMatrix(), this.applyMatrix4(Qi.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(tr).negate(),
      this.translate(tr.x, tr.y, tr.z),
      this
    );
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (void 0 === e) {
      const e = [];
      for (let n = 0, i = t.length; n < i; n++) {
        const i = t[n];
        e.push(i.x, i.y, i.z || 0);
      }
      this.setAttribute("position", new Ji(e, 3));
    } else {
      for (let n = 0, i = e.count; n < i; n++) {
        const i = t[n];
        e.setXYZ(n, i.x, i.y, i.z || 0);
      }
      t.length, e.count, (e.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new Mn());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute)
      this.boundingBox.set(
        new vn(-Infinity, -Infinity, -Infinity),
        new vn(Infinity, Infinity, Infinity)
      );
    else {
      if (void 0 !== t) {
        if ((this.boundingBox.setFromBufferAttribute(t), e))
          for (let t = 0, n = e.length; t < n; t++) {
            const n = e[t];
            er.setFromBufferAttribute(n),
              this.morphTargetsRelative
                ? (ir.addVectors(this.boundingBox.min, er.min),
                  this.boundingBox.expandByPoint(ir),
                  ir.addVectors(this.boundingBox.max, er.max),
                  this.boundingBox.expandByPoint(ir))
                : (this.boundingBox.expandByPoint(er.min),
                  this.boundingBox.expandByPoint(er.max));
          }
      } else this.boundingBox.makeEmpty();
      isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z);
    }
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new zn());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) this.boundingSphere.set(new vn(), Infinity);
    else if (t) {
      const n = this.boundingSphere.center;
      if ((er.setFromBufferAttribute(t), e))
        for (let t = 0, r = e.length; t < r; t++) {
          const n = e[t];
          nr.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (ir.addVectors(er.min, nr.min),
                er.expandByPoint(ir),
                ir.addVectors(er.max, nr.max),
                er.expandByPoint(ir))
              : (er.expandByPoint(nr.min), er.expandByPoint(nr.max));
        }
      er.getCenter(n);
      let i = 0;
      for (let e = 0, r = t.count; e < r; e++)
        ir.fromBufferAttribute(t, e),
          (i = Math.max(i, n.distanceToSquared(ir)));
      if (e)
        for (let r = 0, a = e.length; r < a; r++) {
          const a = e[r],
            s = this.morphTargetsRelative;
          for (let e = 0, r = a.count; e < r; e++)
            ir.fromBufferAttribute(a, e),
              s && (tr.fromBufferAttribute(t, e), ir.add(tr)),
              (i = Math.max(i, n.distanceToSquared(ir)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius);
    }
  }
  computeTangents() {
    const t = this.index,
      e = this.attributes;
    if (
      null === t ||
      void 0 === e.position ||
      void 0 === e.normal ||
      void 0 === e.uv
    )
      return;
    const n = e.position,
      i = e.normal,
      r = e.uv;
    !1 === this.hasAttribute("tangent") &&
      this.setAttribute("tangent", new qi(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      s = [],
      o = [];
    for (let E = 0; E < n.count; E++) (s[E] = new vn()), (o[E] = new vn());
    const l = new vn(),
      c = new vn(),
      h = new vn(),
      u = new ke(),
      d = new ke(),
      p = new ke(),
      f = new vn(),
      m = new vn();
    function g(t, e, i) {
      l.fromBufferAttribute(n, t),
        c.fromBufferAttribute(n, e),
        h.fromBufferAttribute(n, i),
        u.fromBufferAttribute(r, t),
        d.fromBufferAttribute(r, e),
        p.fromBufferAttribute(r, i),
        c.sub(l),
        h.sub(l),
        d.sub(u),
        p.sub(u);
      const a = 1 / (d.x * p.y - p.x * d.y);
      isFinite(a) &&
        (f
          .copy(c)
          .multiplyScalar(p.y)
          .addScaledVector(h, -d.y)
          .multiplyScalar(a),
        m
          .copy(h)
          .multiplyScalar(d.x)
          .addScaledVector(c, -p.x)
          .multiplyScalar(a),
        s[t].add(f),
        s[e].add(f),
        s[i].add(f),
        o[t].add(m),
        o[e].add(m),
        o[i].add(m));
    }
    let _ = this.groups;
    0 === _.length && (_ = [{ start: 0, count: t.count }]);
    for (let E = 0, T = _.length; E < T; ++E) {
      const e = _[E],
        n = e.start;
      for (let i = n, r = n + e.count; i < r; i += 3)
        g(t.getX(i + 0), t.getX(i + 1), t.getX(i + 2));
    }
    const v = new vn(),
      x = new vn(),
      y = new vn(),
      M = new vn();
    function S(t) {
      y.fromBufferAttribute(i, t), M.copy(y);
      const e = s[t];
      v.copy(e),
        v.sub(y.multiplyScalar(y.dot(e))).normalize(),
        x.crossVectors(M, e);
      const n = x.dot(o[t]) < 0 ? -1 : 1;
      a.setXYZW(t, v.x, v.y, v.z, n);
    }
    for (let E = 0, T = _.length; E < T; ++E) {
      const e = _[E],
        n = e.start;
      for (let i = n, r = n + e.count; i < r; i += 3)
        S(t.getX(i + 0)), S(t.getX(i + 1)), S(t.getX(i + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute("position");
    if (void 0 !== e) {
      let n = this.getAttribute("normal");
      if (void 0 === n)
        (n = new qi(new Float32Array(3 * e.count), 3)),
          this.setAttribute("normal", n);
      else for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
      const i = new vn(),
        r = new vn(),
        a = new vn(),
        s = new vn(),
        o = new vn(),
        l = new vn(),
        c = new vn(),
        h = new vn();
      if (t)
        for (let u = 0, d = t.count; u < d; u += 3) {
          const d = t.getX(u + 0),
            p = t.getX(u + 1),
            f = t.getX(u + 2);
          i.fromBufferAttribute(e, d),
            r.fromBufferAttribute(e, p),
            a.fromBufferAttribute(e, f),
            c.subVectors(a, r),
            h.subVectors(i, r),
            c.cross(h),
            s.fromBufferAttribute(n, d),
            o.fromBufferAttribute(n, p),
            l.fromBufferAttribute(n, f),
            s.add(c),
            o.add(c),
            l.add(c),
            n.setXYZ(d, s.x, s.y, s.z),
            n.setXYZ(p, o.x, o.y, o.z),
            n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let t = 0, u = e.count; t < u; t += 3)
          i.fromBufferAttribute(e, t + 0),
            r.fromBufferAttribute(e, t + 1),
            a.fromBufferAttribute(e, t + 2),
            c.subVectors(a, r),
            h.subVectors(i, r),
            c.cross(h),
            n.setXYZ(t + 0, c.x, c.y, c.z),
            n.setXYZ(t + 1, c.x, c.y, c.z),
            n.setXYZ(t + 2, c.x, c.y, c.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      ir.fromBufferAttribute(t, e),
        ir.normalize(),
        t.setXYZ(e, ir.x, ir.y, ir.z);
  }
  toNonIndexed() {
    function t(t, e) {
      const n = t.array,
        i = t.itemSize,
        r = t.normalized,
        a = new n.constructor(e.length * i);
      let s = 0,
        o = 0;
      for (let l = 0, c = e.length; l < c; l++) {
        s = t.isInterleavedBufferAttribute
          ? e[l] * t.data.stride + t.offset
          : e[l] * i;
        for (let t = 0; t < i; t++) a[o++] = n[s++];
      }
      return new qi(a, i, r);
    }
    if (null === this.index) return this;
    const e = new rr(),
      n = this.index.array,
      i = this.attributes;
    for (const s in i) {
      const r = t(i[s], n);
      e.setAttribute(s, r);
    }
    const r = this.morphAttributes;
    for (const s in r) {
      const i = [],
        a = r[s];
      for (let e = 0, r = a.length; e < r; e++) {
        const r = t(a[e], n);
        i.push(r);
      }
      e.morphAttributes[s] = i;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let s = 0, o = a.length; s < o; s++) {
      const t = a[s];
      e.addGroup(t.start, t.count, t.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((t.uuid = this.uuid),
      (t.type = this.type),
      "" !== this.name && (t.name = this.name),
      Object.keys(this.userData).length > 0 && (t.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      const e = this.parameters;
      for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    null !== e &&
      (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array),
      });
    const n = this.attributes;
    for (const o in n) {
      const e = n[o];
      t.data.attributes[o] = e.toJSON(t.data);
    }
    const i = {};
    let r = !1;
    for (const o in this.morphAttributes) {
      const e = this.morphAttributes[o],
        n = [];
      for (let i = 0, r = e.length; i < r; i++) {
        const r = e[i];
        n.push(r.toJSON(t.data));
      }
      n.length > 0 && ((i[o] = n), (r = !0));
    }
    r &&
      ((t.data.morphAttributes = i),
      (t.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const s = this.boundingSphere;
    return (
      null !== s &&
        (t.data.boundingSphere = {
          center: s.center.toArray(),
          radius: s.radius,
        }),
      t
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const e = {};
    this.name = t.name;
    const n = t.index;
    null !== n && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const l in i) {
      const t = i[l];
      this.setAttribute(l, t.clone(e));
    }
    const r = t.morphAttributes;
    for (const l in r) {
      const t = [],
        n = r[l];
      for (let i = 0, r = n.length; i < r; i++) t.push(n[i].clone(e));
      this.morphAttributes[l] = t;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, c = a.length; l < c; l++) {
      const t = a[l];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    const s = t.boundingBox;
    null !== s && (this.boundingBox = s.clone());
    const o = t.boundingSphere;
    return (
      null !== o && (this.boundingSphere = o.clone()),
      (this.drawRange.start = t.drawRange.start),
      (this.drawRange.count = t.drawRange.count),
      (this.userData = t.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const ar = new Yn(),
  sr = new qn(),
  or = new zn(),
  lr = new vn(),
  cr = new vn(),
  hr = new vn(),
  ur = new vn(),
  dr = new vn(),
  pr = new vn(),
  fr = new vn(),
  mr = new vn();
class gr extends Mi {
  constructor(t = new rr(), e = new Wi()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      void 0 !== t.morphTargetInfluences &&
        (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
      void 0 !== t.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          t.morphTargetDictionary
        )),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      e = Object.keys(t);
    if (e.length > 0) {
      const n = t[e[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let t = 0, e = n.length; t < e; t++) {
          const e = n[t].name || String(t);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[e] = t);
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const s = this.morphTargetInfluences;
    if (r && s) {
      pr.set(0, 0, 0);
      for (let n = 0, i = r.length; n < i; n++) {
        const i = s[n],
          o = r[n];
        0 !== i &&
          (dr.fromBufferAttribute(o, t),
          a ? pr.addScaledVector(dr, i) : pr.addScaledVector(dr.sub(e), i));
      }
      e.add(pr);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (void 0 !== i) {
      if (
        (null === n.boundingSphere && n.computeBoundingSphere(),
        or.copy(n.boundingSphere),
        or.applyMatrix4(r),
        sr.copy(t.ray).recast(t.near),
        !1 === or.containsPoint(sr.origin))
      ) {
        if (null === sr.intersectSphere(or, lr)) return;
        if (sr.origin.distanceToSquared(lr) > (t.far - t.near) ** 2) return;
      }
      ar.copy(r).invert(),
        sr.copy(t.ray).applyMatrix4(ar),
        (null !== n.boundingBox && !1 === sr.intersectsBox(n.boundingBox)) ||
          this._computeIntersections(t, e, sr);
    }
  }
  _computeIntersections(t, e, n) {
    let i;
    const r = this.geometry,
      a = this.material,
      s = r.index,
      o = r.attributes.position,
      l = r.attributes.uv,
      c = r.attributes.uv1,
      h = r.attributes.normal,
      u = r.groups,
      d = r.drawRange;
    if (null !== s)
      if (Array.isArray(a))
        for (let p = 0, f = u.length; p < f; p++) {
          const r = u[p],
            o = a[r.materialIndex];
          for (
            let a = Math.max(r.start, d.start),
              u = Math.min(
                s.count,
                Math.min(r.start + r.count, d.start + d.count)
              );
            a < u;
            a += 3
          ) {
            (i = _r(
              this,
              o,
              t,
              n,
              l,
              c,
              h,
              s.getX(a),
              s.getX(a + 1),
              s.getX(a + 2)
            )),
              i &&
                ((i.faceIndex = Math.floor(a / 3)),
                (i.face.materialIndex = r.materialIndex),
                e.push(i));
          }
        }
      else {
        for (
          let r = Math.max(0, d.start),
            o = Math.min(s.count, d.start + d.count);
          r < o;
          r += 3
        ) {
          (i = _r(
            this,
            a,
            t,
            n,
            l,
            c,
            h,
            s.getX(r),
            s.getX(r + 1),
            s.getX(r + 2)
          )),
            i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
        }
      }
    else if (void 0 !== o)
      if (Array.isArray(a))
        for (let p = 0, f = u.length; p < f; p++) {
          const r = u[p],
            s = a[r.materialIndex];
          for (
            let a = Math.max(r.start, d.start),
              u = Math.min(
                o.count,
                Math.min(r.start + r.count, d.start + d.count)
              );
            a < u;
            a += 3
          ) {
            (i = _r(this, s, t, n, l, c, h, a, a + 1, a + 2)),
              i &&
                ((i.faceIndex = Math.floor(a / 3)),
                (i.face.materialIndex = r.materialIndex),
                e.push(i));
          }
        }
      else {
        for (
          let r = Math.max(0, d.start),
            s = Math.min(o.count, d.start + d.count);
          r < s;
          r += 3
        ) {
          (i = _r(this, a, t, n, l, c, h, r, r + 1, r + 2)),
            i && ((i.faceIndex = Math.floor(r / 3)), e.push(i));
        }
      }
  }
}
function _r(t, e, n, i, r, a, s, o, l, u) {
  t.getVertexPosition(o, cr),
    t.getVertexPosition(l, hr),
    t.getVertexPosition(u, ur);
  const d = (function (t, e, n, i, r, a, s, o) {
    let l;
    if (
      ((l =
        e.side === h
          ? i.intersectTriangle(s, a, r, !0, o)
          : i.intersectTriangle(r, a, s, e.side === c, o)),
      null === l)
    )
      return null;
    mr.copy(o), mr.applyMatrix4(t.matrixWorld);
    const u = n.ray.origin.distanceTo(mr);
    return u < n.near || u > n.far
      ? null
      : { distance: u, point: mr.clone(), object: t };
  })(t, e, n, i, cr, hr, ur, fr);
  if (d) {
    const t = new vn();
    Ni.getBarycoord(fr, cr, hr, ur, t),
      r && (d.uv = Ni.getInterpolatedAttribute(r, o, l, u, t, new ke())),
      a && (d.uv1 = Ni.getInterpolatedAttribute(a, o, l, u, t, new ke())),
      s &&
        ((d.normal = Ni.getInterpolatedAttribute(s, o, l, u, t, new vn())),
        d.normal.dot(i.direction) > 0 && d.normal.multiplyScalar(-1));
    const e = { a: o, b: l, c: u, normal: new vn(), materialIndex: 0 };
    Ni.getNormal(cr, hr, ur, e.normal), (d.face = e), (d.barycoord = t);
  }
  return d;
}
class vr extends rr {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    const s = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
    const o = [],
      l = [],
      c = [],
      h = [];
    let u = 0,
      d = 0;
    function p(t, e, n, i, r, a, p, f, m, g, _) {
      const v = a / m,
        x = p / g,
        y = a / 2,
        M = p / 2,
        S = f / 2,
        E = m + 1,
        T = g + 1;
      let b = 0,
        A = 0;
      const w = new vn();
      for (let s = 0; s < T; s++) {
        const a = s * x - M;
        for (let o = 0; o < E; o++) {
          const u = o * v - y;
          (w[t] = u * i),
            (w[e] = a * r),
            (w[n] = S),
            l.push(w.x, w.y, w.z),
            (w[t] = 0),
            (w[e] = 0),
            (w[n] = f > 0 ? 1 : -1),
            c.push(w.x, w.y, w.z),
            h.push(o / m),
            h.push(1 - s / g),
            (b += 1);
        }
      }
      for (let s = 0; s < g; s++)
        for (let t = 0; t < m; t++) {
          const e = u + t + E * s,
            n = u + t + E * (s + 1),
            i = u + (t + 1) + E * (s + 1),
            r = u + (t + 1) + E * s;
          o.push(e, n, r), o.push(n, i, r), (A += 6);
        }
      s.addGroup(d, A, _), (d += A), (u += b);
    }
    p("z", "y", "x", -1, -1, n, e, t, a, r, 0),
      p("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
      p("x", "z", "y", 1, 1, t, n, e, i, a, 2),
      p("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
      p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
      p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
      this.setIndex(o),
      this.setAttribute("position", new Ji(l, 3)),
      this.setAttribute("normal", new Ji(c, 3)),
      this.setAttribute("uv", new Ji(h, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new vr(
      t.width,
      t.height,
      t.depth,
      t.widthSegments,
      t.heightSegments,
      t.depthSegments
    );
  }
}
function xr(t) {
  const e = {};
  for (const n in t) {
    e[n] = {};
    for (const i in t[n]) {
      const r = t[n][i];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (e[n][i] = null)
          : (e[n][i] = r.clone())
        : Array.isArray(r)
        ? (e[n][i] = r.slice())
        : (e[n][i] = r);
    }
  }
  return e;
}
function yr(t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = xr(t[n]);
    for (const t in i) e[t] = i[t];
  }
  return e;
}
function Mr(t) {
  const e = t.getRenderTarget();
  return null === e
    ? t.outputColorSpace
    : !0 === e.isXRRenderTarget
    ? e.texture.colorSpace
    : Je.workingColorSpace;
}
const Sr = { clone: xr, merge: yr };
class Er extends Gi {
  static get type() {
    return "ShaderMaterial";
  }
  constructor(t) {
    super(),
      (this.isShaderMaterial = !0),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader =
        "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
      (this.fragmentShader =
        "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      void 0 !== t && this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.fragmentShader = t.fragmentShader),
      (this.vertexShader = t.vertexShader),
      (this.uniforms = xr(t.uniforms)),
      (this.uniformsGroups = (function (t) {
        const e = [];
        for (let n = 0; n < t.length; n++) e.push(t[n].clone());
        return e;
      })(t.uniformsGroups)),
      (this.defines = Object.assign({}, t.defines)),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.fog = t.fog),
      (this.lights = t.lights),
      (this.clipping = t.clipping),
      (this.extensions = Object.assign({}, t.extensions)),
      (this.glslVersion = t.glslVersion),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    (e.glslVersion = this.glslVersion), (e.uniforms = {});
    for (const i in this.uniforms) {
      const n = this.uniforms[i].value;
      n && n.isTexture
        ? (e.uniforms[i] = { type: "t", value: n.toJSON(t).uuid })
        : n && n.isColor
        ? (e.uniforms[i] = { type: "c", value: n.getHex() })
        : n && n.isVector2
        ? (e.uniforms[i] = { type: "v2", value: n.toArray() })
        : n && n.isVector3
        ? (e.uniforms[i] = { type: "v3", value: n.toArray() })
        : n && n.isVector4
        ? (e.uniforms[i] = { type: "v4", value: n.toArray() })
        : n && n.isMatrix3
        ? (e.uniforms[i] = { type: "m3", value: n.toArray() })
        : n && n.isMatrix4
        ? (e.uniforms[i] = { type: "m4", value: n.toArray() })
        : (e.uniforms[i] = { value: n });
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines),
      (e.vertexShader = this.vertexShader),
      (e.fragmentShader = this.fragmentShader),
      (e.lights = this.lights),
      (e.clipping = this.clipping);
    const n = {};
    for (const i in this.extensions) !0 === this.extensions[i] && (n[i] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Tr extends Mi {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Yn()),
      (this.projectionMatrix = new Yn()),
      (this.projectionMatrixInverse = new Yn()),
      (this.coordinateSystem = Re);
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.matrixWorldInverse.copy(t.matrixWorldInverse),
      this.projectionMatrix.copy(t.projectionMatrix),
      this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
      (this.coordinateSystem = t.coordinateSystem),
      this
    );
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const br = new vn(),
  Ar = new ke(),
  wr = new ke();
class Rr extends Tr {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = t),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = e),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.fov = t.fov),
      (this.zoom = t.zoom),
      (this.near = t.near),
      (this.far = t.far),
      (this.focus = t.focus),
      (this.aspect = t.aspect),
      (this.view = null === t.view ? null : Object.assign({}, t.view)),
      (this.filmGauge = t.filmGauge),
      (this.filmOffset = t.filmOffset),
      this
    );
  }
  setFocalLength(t) {
    const e = (0.5 * this.getFilmHeight()) / t;
    (this.fov = 2 * Ie * Math.atan(e)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(0.5 * De * this.fov);
    return (0.5 * this.getFilmHeight()) / t;
  }
  getEffectiveFOV() {
    return 2 * Ie * Math.atan(Math.tan(0.5 * De * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    br.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      e.set(br.x, br.y).multiplyScalar(-t / br.z),
      br.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(br.x, br.y).multiplyScalar(-t / br.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, Ar, wr), e.subVectors(wr, Ar);
  }
  setViewOffset(t, e, n, i, r, a) {
    (this.aspect = t / e),
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = (t * Math.tan(0.5 * De * this.fov)) / this.zoom,
      n = 2 * e,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (null !== this.view && this.view.enabled) {
      const t = a.fullWidth,
        s = a.fullHeight;
      (r += (a.offsetX * i) / t),
        (e -= (a.offsetY * n) / s),
        (i *= a.width / t),
        (n *= a.height / s);
    }
    const s = this.filmOffset;
    0 !== s && (r += (t * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + i,
        e,
        e - n,
        t,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.fov = this.fov),
      (e.object.zoom = this.zoom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      (e.object.focus = this.focus),
      (e.object.aspect = this.aspect),
      null !== this.view && (e.object.view = Object.assign({}, this.view)),
      (e.object.filmGauge = this.filmGauge),
      (e.object.filmOffset = this.filmOffset),
      e
    );
  }
}
const Cr = -90;
class Pr extends Mi {
  constructor(t, e, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const i = new Rr(Cr, 1, t, e);
    (i.layers = this.layers), this.add(i);
    const r = new Rr(Cr, 1, t, e);
    (r.layers = this.layers), this.add(r);
    const a = new Rr(Cr, 1, t, e);
    (a.layers = this.layers), this.add(a);
    const s = new Rr(Cr, 1, t, e);
    (s.layers = this.layers), this.add(s);
    const o = new Rr(Cr, 1, t, e);
    (o.layers = this.layers), this.add(o);
    const l = new Rr(Cr, 1, t, e);
    (l.layers = this.layers), this.add(l);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem,
      e = this.children.concat(),
      [n, i, r, a, s, o] = e;
    for (const l of e) this.remove(l);
    if (t === Re)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        s.up.set(0, 1, 0),
        s.lookAt(0, 0, 1),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, -1);
    else {
      if (t !== Ce)
        throw new Error(
          "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
            t
        );
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        s.up.set(0, -1, 0),
        s.lookAt(0, 0, 1),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, -1);
    }
    for (const l of e) this.add(l), l.updateMatrixWorld();
  }
  update(t, e) {
    null === this.parent && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem &&
      ((this.coordinateSystem = t.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, a, s, o, l, c] = this.children,
      h = t.getRenderTarget(),
      u = t.getActiveCubeFace(),
      d = t.getActiveMipmapLevel(),
      p = t.xr.enabled;
    t.xr.enabled = !1;
    const f = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      t.setRenderTarget(n, 0, i),
      t.render(e, r),
      t.setRenderTarget(n, 1, i),
      t.render(e, a),
      t.setRenderTarget(n, 2, i),
      t.render(e, s),
      t.setRenderTarget(n, 3, i),
      t.render(e, o),
      t.setRenderTarget(n, 4, i),
      t.render(e, l),
      (n.texture.generateMipmaps = f),
      t.setRenderTarget(n, 5, i),
      t.render(e, c),
      t.setRenderTarget(h, u, d),
      (t.xr.enabled = p),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Lr extends un {
  constructor(t, e, n, i, r, a, s, o, l, c) {
    super(
      (t = void 0 !== t ? t : []),
      (e = void 0 !== e ? e : J),
      n,
      i,
      r,
      a,
      s,
      o,
      l,
      c
    ),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Ur extends fn {
  constructor(t = 1, e = {}) {
    super(t, t, e), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: t, height: t, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Lr(
      i,
      e.mapping,
      e.wrapS,
      e.wrapT,
      e.magFilter,
      e.minFilter,
      e.format,
      e.type,
      e.anisotropy,
      e.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        void 0 !== e.generateMipmaps && e.generateMipmaps),
      (this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : at);
  }
  fromEquirectangularTexture(t, e) {
    (this.texture.type = e.type),
      (this.texture.colorSpace = e.colorSpace),
      (this.texture.generateMipmaps = e.generateMipmaps),
      (this.texture.minFilter = e.minFilter),
      (this.texture.magFilter = e.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader:
          "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
        fragmentShader:
          "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
      },
      i = new vr(5, 5, 5),
      r = new Er({
        name: "CubemapFromEquirect",
        uniforms: xr(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: h,
        blending: 0,
      });
    r.uniforms.tEquirect.value = e;
    const a = new gr(i, r),
      s = e.minFilter;
    e.minFilter === ot && (e.minFilter = at);
    return (
      new Pr(1, 10, this).update(t, a),
      (e.minFilter = s),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(t, e, n, i) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n, i);
    t.setRenderTarget(r);
  }
}
const Dr = new vn(),
  Ir = new vn(),
  Nr = new Ge();
class Or {
  constructor(t = new vn(1, 0, 0), e = 0) {
    (this.isPlane = !0), (this.normal = t), (this.constant = e);
  }
  set(t, e) {
    return this.normal.copy(t), (this.constant = e), this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), (this.constant = -e.dot(this.normal)), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = Dr.subVectors(n, e).cross(Ir.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), (this.constant = t.constant), this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), (this.constant *= t), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(Dr),
      i = this.normal.dot(n);
    if (0 === i)
      return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start),
      n = this.distanceToPoint(t.end);
    return (e < 0 && n > 0) || (n < 0 && e > 0);
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || Nr.getNormalMatrix(t),
      i = this.coplanarPoint(Dr).applyMatrix4(t),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(t) {
    return (this.constant -= t.dot(this.normal)), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Fr = new zn(),
  Br = new vn();
class zr {
  constructor(
    t = new Or(),
    e = new Or(),
    n = new Or(),
    i = new Or(),
    r = new Or(),
    a = new Or()
  ) {
    this.planes = [t, e, n, i, r, a];
  }
  set(t, e, n, i, r, a) {
    const s = this.planes;
    return (
      s[0].copy(t),
      s[1].copy(e),
      s[2].copy(n),
      s[3].copy(i),
      s[4].copy(r),
      s[5].copy(a),
      this
    );
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = 2e3) {
    const n = this.planes,
      i = t.elements,
      r = i[0],
      a = i[1],
      s = i[2],
      o = i[3],
      l = i[4],
      c = i[5],
      h = i[6],
      u = i[7],
      d = i[8],
      p = i[9],
      f = i[10],
      m = i[11],
      g = i[12],
      _ = i[13],
      v = i[14],
      x = i[15];
    if (
      (n[0].setComponents(o - r, u - l, m - d, x - g).normalize(),
      n[1].setComponents(o + r, u + l, m + d, x + g).normalize(),
      n[2].setComponents(o + a, u + c, m + p, x + _).normalize(),
      n[3].setComponents(o - a, u - c, m - p, x - _).normalize(),
      n[4].setComponents(o - s, u - h, m - f, x - v).normalize(),
      e === Re)
    )
      n[5].setComponents(o + s, u + h, m + f, x + v).normalize();
    else {
      if (e !== Ce)
        throw new Error(
          "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
            e
        );
      n[5].setComponents(s, h, f, v).normalize();
    }
    return this;
  }
  intersectsObject(t) {
    if (void 0 !== t.boundingSphere)
      null === t.boundingSphere && t.computeBoundingSphere(),
        Fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      null === e.boundingSphere && e.computeBoundingSphere(),
        Fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Fr);
  }
  intersectsSprite(t) {
    return (
      Fr.center.set(0, 0, 0),
      (Fr.radius = 0.7071067811865476),
      Fr.applyMatrix4(t.matrixWorld),
      this.intersectsSphere(Fr)
    );
  }
  intersectsSphere(t) {
    const e = this.planes,
      n = t.center,
      i = -t.radius;
    for (let r = 0; r < 6; r++) {
      if (e[r].distanceToPoint(n) < i) return !1;
    }
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (
        ((Br.x = i.normal.x > 0 ? t.max.x : t.min.x),
        (Br.y = i.normal.y > 0 ? t.max.y : t.min.y),
        (Br.z = i.normal.z > 0 ? t.max.z : t.min.z),
        i.distanceToPoint(Br) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Vr() {
  let t = null,
    e = !1,
    n = null,
    i = null;
  function r(e, a) {
    n(e, a), (i = t.requestAnimationFrame(r));
  }
  return {
    start: function () {
      !0 !== e && null !== n && ((i = t.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      t.cancelAnimationFrame(i), (e = !1);
    },
    setAnimationLoop: function (t) {
      n = t;
    },
    setContext: function (e) {
      t = e;
    },
  };
}
function Hr(t) {
  const e = new WeakMap();
  return {
    get: function (t) {
      return t.isInterleavedBufferAttribute && (t = t.data), e.get(t);
    },
    remove: function (n) {
      n.isInterleavedBufferAttribute && (n = n.data);
      const i = e.get(n);
      i && (t.deleteBuffer(i.buffer), e.delete(n));
    },
    update: function (n, i) {
      if (
        (n.isInterleavedBufferAttribute && (n = n.data), n.isGLBufferAttribute)
      ) {
        const t = e.get(n);
        return void (
          (!t || t.version < n.version) &&
          e.set(n, {
            buffer: n.buffer,
            type: n.type,
            bytesPerElement: n.elementSize,
            version: n.version,
          })
        );
      }
      const r = e.get(n);
      if (void 0 === r)
        e.set(
          n,
          (function (e, n) {
            const i = e.array,
              r = e.usage,
              a = i.byteLength,
              s = t.createBuffer();
            let o;
            if (
              (t.bindBuffer(n, s),
              t.bufferData(n, i, r),
              e.onUploadCallback(),
              i instanceof Float32Array)
            )
              o = t.FLOAT;
            else if (i instanceof Uint16Array)
              o = e.isFloat16BufferAttribute ? t.HALF_FLOAT : t.UNSIGNED_SHORT;
            else if (i instanceof Int16Array) o = t.SHORT;
            else if (i instanceof Uint32Array) o = t.UNSIGNED_INT;
            else if (i instanceof Int32Array) o = t.INT;
            else if (i instanceof Int8Array) o = t.BYTE;
            else if (i instanceof Uint8Array) o = t.UNSIGNED_BYTE;
            else {
              if (!(i instanceof Uint8ClampedArray))
                throw new Error(
                  "THREE.WebGLAttributes: Unsupported buffer data format: " + i
                );
              o = t.UNSIGNED_BYTE;
            }
            return {
              buffer: s,
              type: o,
              bytesPerElement: i.BYTES_PER_ELEMENT,
              version: e.version,
              size: a,
            };
          })(n, i)
        );
      else if (r.version < n.version) {
        if (r.size !== n.array.byteLength)
          throw new Error(
            "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
          );
        !(function (e, n, i) {
          const r = n.array,
            a = n.updateRanges;
          if ((t.bindBuffer(i, e), 0 === a.length)) t.bufferSubData(i, 0, r);
          else {
            a.sort((t, e) => t.start - e.start);
            let e = 0;
            for (let t = 1; t < a.length; t++) {
              const n = a[e],
                i = a[t];
              i.start <= n.start + n.count + 1
                ? (n.count = Math.max(n.count, i.start + i.count - n.start))
                : (++e, (a[e] = i));
            }
            a.length = e + 1;
            for (let n = 0, s = a.length; n < s; n++) {
              const e = a[n];
              t.bufferSubData(
                i,
                e.start * r.BYTES_PER_ELEMENT,
                r,
                e.start,
                e.count
              );
            }
            n.clearUpdateRanges();
          }
          n.onUploadCallback();
        })(r.buffer, n, i),
          (r.version = n.version);
      }
    },
  };
}
class kr extends rr {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: i,
      });
    const r = t / 2,
      a = e / 2,
      s = Math.floor(n),
      o = Math.floor(i),
      l = s + 1,
      c = o + 1,
      h = t / s,
      u = e / o,
      d = [],
      p = [],
      f = [],
      m = [];
    for (let g = 0; g < c; g++) {
      const t = g * u - a;
      for (let e = 0; e < l; e++) {
        const n = e * h - r;
        p.push(n, -t, 0), f.push(0, 0, 1), m.push(e / s), m.push(1 - g / o);
      }
    }
    for (let g = 0; g < o; g++)
      for (let t = 0; t < s; t++) {
        const e = t + l * g,
          n = t + l * (g + 1),
          i = t + 1 + l * (g + 1),
          r = t + 1 + l * g;
        d.push(e, n, r), d.push(n, i, r);
      }
    this.setIndex(d),
      this.setAttribute("position", new Ji(p, 3)),
      this.setAttribute("normal", new Ji(f, 3)),
      this.setAttribute("uv", new Ji(m, 2));
  }
  copy(t) {
    return (
      super.copy(t), (this.parameters = Object.assign({}, t.parameters)), this
    );
  }
  static fromJSON(t) {
    return new kr(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
const Gr = {
    alphahash_fragment:
      "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
    alphahash_pars_fragment:
      "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",
    alphamap_fragment:
      "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
    alphamap_pars_fragment:
      "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment:
      "#ifdef USE_ALPHATEST\n\t#ifdef ALPHA_TO_COVERAGE\n\tdiffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\tif ( diffuseColor.a < alphaTest ) discard;\n\t#endif\n#endif",
    alphatest_pars_fragment:
      "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
    aomap_fragment:
      "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_CLEARCOAT ) \n\t\tclearcoatSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_SHEEN ) \n\t\tsheenSpecularIndirect *= ambientOcclusion;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
    aomap_pars_fragment:
      "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    batching_pars_vertex:
      "#ifdef USE_BATCHING\n\t#if ! defined( GL_ANGLE_multi_draw )\n\t#define gl_DrawID _gl_DrawID\n\tuniform int _gl_DrawID;\n\t#endif\n\tuniform highp sampler2D batchingTexture;\n\tuniform highp usampler2D batchingIdTexture;\n\tmat4 getBatchingMatrix( const in float i ) {\n\t\tint size = textureSize( batchingTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\tfloat getIndirectIndex( const in int i ) {\n\t\tint size = textureSize( batchingIdTexture, 0 ).x;\n\t\tint x = i % size;\n\t\tint y = i / size;\n\t\treturn float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n\t}\n#endif\n#ifdef USE_BATCHING_COLOR\n\tuniform sampler2D batchingColorTexture;\n\tvec3 getBatchingColor( const in float i ) {\n\t\tint size = textureSize( batchingColorTexture, 0 ).x;\n\t\tint j = int( i );\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\treturn texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\t}\n#endif",
    batching_vertex:
      "#ifdef USE_BATCHING\n\tmat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
    begin_vertex:
      "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",
    beginnormal_vertex:
      "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs:
      "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
    iridescence_fragment:
      "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
    bumpmap_pars_fragment:
      "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n\t\tvec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#ifdef ALPHA_TO_COVERAGE\n\t\tfloat distanceToPlane, distanceGradient;\n\t\tfloat clipOpacity = 1.0;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\tclipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\tif ( clipOpacity == 0.0 ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tfloat unionClipOpacity = 1.0;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tdistanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n\t\t\t\tdistanceGradient = fwidth( distanceToPlane ) / 2.0;\n\t\t\t\tunionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tclipOpacity *= 1.0 - unionClipOpacity;\n\t\t#endif\n\t\tdiffuseColor.a *= clipOpacity;\n\t\tif ( diffuseColor.a == 0.0 ) discard;\n\t#else\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\t\tbool clipped = true;\n\t\t\t#pragma unroll_loop_start\n\t\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\t\tplane = clippingPlanes[ i ];\n\t\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t\t}\n\t\t\t#pragma unroll_loop_end\n\t\t\tif ( clipped ) discard;\n\t\t#endif\n\t#endif\n#endif",
    clipping_planes_pars_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment:
      "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment:
      "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex:
      "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex:
      "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n\tvec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n\tvColor.xyz *= batchingColor.xyz;\n#endif",
    common:
      "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
    cube_uv_reflection_fragment:
      "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex:
      "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n\tmat3 bm = mat3( batchingMatrix );\n\ttransformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n\ttransformedNormal = bm * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = bm * transformedTangent;\n\t#endif\n#endif\n#ifdef USE_INSTANCING\n\tmat3 im = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n\ttransformedNormal = im * transformedNormal;\n\t#ifdef USE_TANGENT\n\t\ttransformedTangent = im * transformedTangent;\n\t#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\ttransformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment:
      "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n\t\temissiveColor = sRGBTransferEOTF( emissiveColor );\n\t#endif\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment:
      "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    colorspace_pars_fragment:
      "vec4 LinearTransferOETF( in vec4 value ) {\n\treturn value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
    envmap_fragment:
      "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment:
      "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform mat3 envMapRotation;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment:
      "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex:
      "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment:
      "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
    envmap_vertex:
      "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
    fog_fragment:
      "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment:
      "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment:
      "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
    lightmap_pars_fragment:
      "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_fragment:
      "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
    lights_lambert_pars_fragment:
      "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
    lights_pars_begin:
      "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n\tuniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif ( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometryPosition;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment:
      "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment:
      "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
    lights_phong_fragment:
      "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment:
      "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
    lights_physical_fragment:
      "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n\tmaterial.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tif( material.anisotropy == 0.0 ) {\n\t\tanisotropyV = vec2( 1.0, 0.0 );\n\t} else {\n\t\tanisotropyV /= material.anisotropy;\n\t\tmaterial.anisotropy = saturate( material.anisotropy );\n\t}\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
    lights_physical_pars_fragment:
      "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\tfloat dispersion;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometryNormal;\n\t\tvec3 viewDir = geometryViewDir;\n\t\tvec3 position = geometryPosition;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin:
      "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n\tgeometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometryViewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometryPosition, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometryPosition, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#if defined( USE_LIGHT_PROBES )\n\t\tirradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps:
      "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometryNormal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
    lights_fragment_end:
      "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
    logdepthbuf_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n\tgl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment:
      "#if defined( USE_LOGDEPTHBUF )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex:
      "#ifdef USE_LOGDEPTHBUF\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_vertex:
      "#ifdef USE_LOGDEPTHBUF\n\tvFragDepth = 1.0 + gl_Position.w;\n\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
    map_fragment:
      "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment:
      "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment:
      "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment:
      "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment:
      "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphinstance_vertex:
      "#ifdef USE_INSTANCING_MORPH\n\tfloat morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\tfloat morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tmorphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\t}\n#endif",
    morphcolor_vertex:
      "#if defined( USE_MORPHCOLORS )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
    morphnormal_vertex:
      "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
    morphtarget_pars_vertex:
      "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_INSTANCING_MORPH\n\t\tuniform float morphTargetBaseInfluence;\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t#endif\n\tuniform sampler2DArray morphTargetsTexture;\n\tuniform ivec2 morphTargetsTextureSize;\n\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t}\n#endif",
    morphtarget_vertex:
      "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t}\n#endif",
    normal_fragment_begin:
      "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
    normal_fragment_maps:
      "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normal_pars_fragment:
      "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_pars_vertex:
      "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_vertex:
      "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
    normalmap_pars_fragment:
      "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
    clearcoat_normal_fragment_begin:
      "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
    clearcoat_normal_fragment_maps:
      "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
    clearcoat_pars_fragment:
      "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
    iridescence_pars_fragment:
      "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
    opaque_fragment:
      "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
    packing:
      "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec4( 0., 0., 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec4( 1., 1., 1., 1. );\n\tfloat vuf;\n\tfloat af = modf( v * PackFactors.a, vuf );\n\tfloat bf = modf( vuf * ShiftRight8, vuf );\n\tfloat gf = modf( vuf * ShiftRight8, vuf );\n\treturn vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec3( 0., 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec3( 1., 1., 1. );\n\tfloat vuf;\n\tfloat bf = modf( v * PackFactors.b, vuf );\n\tfloat gf = modf( vuf * ShiftRight8, vuf );\n\treturn vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n\tif( v <= 0.0 )\n\t\treturn vec2( 0., 0. );\n\tif( v >= 1.0 )\n\t\treturn vec2( 1., 1. );\n\tfloat vuf;\n\tfloat gf = modf( v * 256., vuf );\n\treturn vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n\treturn dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n\treturn v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
    premultiplied_alpha_fragment:
      "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex:
      "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n\tmvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment:
      "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment:
      "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment:
      "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment:
      "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tfloat shadow = 1.0;\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\t\n\t\tfloat lightToPositionLength = length( lightToPosition );\n\t\tif ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n\t\t\tfloat dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\t\tdp += shadowBias;\n\t\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\t\tshadow = (\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t\t) * ( 1.0 / 9.0 );\n\t\t\t#else\n\t\t\t\tshadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t\t#endif\n\t\t}\n\t\treturn mix( 1.0, shadow, shadowIntensity );\n\t}\n#endif",
    shadowmap_pars_vertex:
      "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowIntensity;\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex:
      "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
    shadowmask_pars_fragment:
      "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex:
      "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex:
      "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tint size = textureSize( boneTexture, 0 ).x;\n\t\tint j = int( i ) * 4;\n\t\tint x = j % size;\n\t\tint y = j / size;\n\t\tvec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n\t\tvec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n\t\tvec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n\t\tvec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n#endif",
    skinning_vertex:
      "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex:
      "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment:
      "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment:
      "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment:
      "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment:
      "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n\tvec3( 1.6605, - 0.1246, - 0.0182 ),\n\tvec3( - 0.5876, 1.1329, - 0.1006 ),\n\tvec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n\tvec3( 0.6274, 0.0691, 0.0164 ),\n\tvec3( 0.3293, 0.9195, 0.0880 ),\n\tvec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\tvec3 x2 = x * x;\n\tvec3 x4 = x2 * x2;\n\treturn + 15.5 * x4 * x2\n\t\t- 40.14 * x4 * x\n\t\t+ 31.96 * x4\n\t\t- 6.868 * x2 * x\n\t\t+ 0.4298 * x2\n\t\t+ 0.1191 * x\n\t\t- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n\tconst mat3 AgXInsetMatrix = mat3(\n\t\tvec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n\t\tvec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n\t\tvec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n\t);\n\tconst mat3 AgXOutsetMatrix = mat3(\n\t\tvec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n\t\tvec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n\t\tvec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n\t);\n\tconst float AgxMinEv = - 12.47393;\tconst float AgxMaxEv = 4.026069;\n\tcolor *= toneMappingExposure;\n\tcolor = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\tcolor = AgXInsetMatrix * color;\n\tcolor = max( color, 1e-10 );\tcolor = log2( color );\n\tcolor = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\tcolor = clamp( color, 0.0, 1.0 );\n\tcolor = agxDefaultContrastApprox( color );\n\tcolor = AgXOutsetMatrix * color;\n\tcolor = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\tcolor = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\tcolor = clamp( color, 0.0, 1.0 );\n\treturn color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n\tconst float StartCompression = 0.8 - 0.04;\n\tconst float Desaturation = 0.15;\n\tcolor *= toneMappingExposure;\n\tfloat x = min( color.r, min( color.g, color.b ) );\n\tfloat offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\tcolor -= offset;\n\tfloat peak = max( color.r, max( color.g, color.b ) );\n\tif ( peak < StartCompression ) return color;\n\tfloat d = 1. - StartCompression;\n\tfloat newPeak = 1. - d * d / ( peak + d - StartCompression );\n\tcolor *= newPeak / peak;\n\tfloat g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n\treturn mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment:
      "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
    transmission_pars_fragment:
      "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec4 transmittedLight;\n\t\tvec3 transmittance;\n\t\t#ifdef USE_DISPERSION\n\t\t\tfloat halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n\t\t\tvec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n\t\t\tfor ( int i = 0; i < 3; i ++ ) {\n\t\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n\t\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\n\t\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\t\trefractionCoords += 1.0;\n\t\t\t\trefractionCoords /= 2.0;\n\t\t\n\t\t\t\tvec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n\t\t\t\ttransmittedLight[ i ] = transmissionSample[ i ];\n\t\t\t\ttransmittedLight.a += transmissionSample.a;\n\t\t\t\ttransmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n\t\t\t}\n\t\t\ttransmittedLight.a /= 3.0;\n\t\t\n\t\t#else\n\t\t\n\t\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\t\trefractionCoords += 1.0;\n\t\t\trefractionCoords /= 2.0;\n\t\t\ttransmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\t\ttransmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\t\n\t\t#endif\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
    uv_pars_fragment:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
    uv_pars_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
    uv_vertex:
      "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
    worldpos_vertex:
      "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_BATCHING\n\t\tworldPosition = batchingMatrix * worldPosition;\n\t#endif\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_vert:
      "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    background_frag:
      "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\ttexColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    backgroundCube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    backgroundCube_frag:
      "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    cube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    cube_frag:
      "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    depth_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    depth_frag:
      "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#elif DEPTH_PACKING == 3202\n\t\tgl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n\t#elif DEPTH_PACKING == 3203\n\t\tgl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n\t#endif\n}",
    distanceRGBA_vert:
      "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <skinbase_vertex>\n\t#include <morphinstance_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    distanceRGBA_frag:
      "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <clipping_planes_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    equirect_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    equirect_frag:
      "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
    linedashed_vert:
      "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    linedashed_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert:
      "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag:
      "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert:
      "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshmatcap_frag:
      "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshnormal_vert:
      "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    meshnormal_frag:
      "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
    meshphong_vert:
      "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag:
      "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert:
      "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
    meshphysical_frag:
      "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n\tuniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert:
      "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshtoon_frag:
      "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    points_vert:
      "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    points_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    shadow_vert:
      "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <batching_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphinstance_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag:
      "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert:
      "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix[ 3 ];\n\tvec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
  },
  Wr = {
    common: {
      diffuse: { value: new Vi(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ge() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ge() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ge() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ge() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ge() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ge() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ge() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ge() },
      normalScale: { value: new ke(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ge() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ge() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ge() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ge() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Vi(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Vi(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ge() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ge() },
    },
    sprite: {
      diffuse: { value: new Vi(16777215) },
      opacity: { value: 1 },
      center: { value: new ke(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ge() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ge() },
      alphaTest: { value: 0 },
    },
  },
  Xr = {
    basic: {
      uniforms: yr([
        Wr.common,
        Wr.specularmap,
        Wr.envmap,
        Wr.aomap,
        Wr.lightmap,
        Wr.fog,
      ]),
      vertexShader: Gr.meshbasic_vert,
      fragmentShader: Gr.meshbasic_frag,
    },
    lambert: {
      uniforms: yr([
        Wr.common,
        Wr.specularmap,
        Wr.envmap,
        Wr.aomap,
        Wr.lightmap,
        Wr.emissivemap,
        Wr.bumpmap,
        Wr.normalmap,
        Wr.displacementmap,
        Wr.fog,
        Wr.lights,
        { emissive: { value: new Vi(0) } },
      ]),
      vertexShader: Gr.meshlambert_vert,
      fragmentShader: Gr.meshlambert_frag,
    },
    phong: {
      uniforms: yr([
        Wr.common,
        Wr.specularmap,
        Wr.envmap,
        Wr.aomap,
        Wr.lightmap,
        Wr.emissivemap,
        Wr.bumpmap,
        Wr.normalmap,
        Wr.displacementmap,
        Wr.fog,
        Wr.lights,
        {
          emissive: { value: new Vi(0) },
          specular: { value: new Vi(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Gr.meshphong_vert,
      fragmentShader: Gr.meshphong_frag,
    },
    standard: {
      uniforms: yr([
        Wr.common,
        Wr.envmap,
        Wr.aomap,
        Wr.lightmap,
        Wr.emissivemap,
        Wr.bumpmap,
        Wr.normalmap,
        Wr.displacementmap,
        Wr.roughnessmap,
        Wr.metalnessmap,
        Wr.fog,
        Wr.lights,
        {
          emissive: { value: new Vi(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Gr.meshphysical_vert,
      fragmentShader: Gr.meshphysical_frag,
    },
    toon: {
      uniforms: yr([
        Wr.common,
        Wr.aomap,
        Wr.lightmap,
        Wr.emissivemap,
        Wr.bumpmap,
        Wr.normalmap,
        Wr.displacementmap,
        Wr.gradientmap,
        Wr.fog,
        Wr.lights,
        { emissive: { value: new Vi(0) } },
      ]),
      vertexShader: Gr.meshtoon_vert,
      fragmentShader: Gr.meshtoon_frag,
    },
    matcap: {
      uniforms: yr([
        Wr.common,
        Wr.bumpmap,
        Wr.normalmap,
        Wr.displacementmap,
        Wr.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Gr.meshmatcap_vert,
      fragmentShader: Gr.meshmatcap_frag,
    },
    points: {
      uniforms: yr([Wr.points, Wr.fog]),
      vertexShader: Gr.points_vert,
      fragmentShader: Gr.points_frag,
    },
    dashed: {
      uniforms: yr([
        Wr.common,
        Wr.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Gr.linedashed_vert,
      fragmentShader: Gr.linedashed_frag,
    },
    depth: {
      uniforms: yr([Wr.common, Wr.displacementmap]),
      vertexShader: Gr.depth_vert,
      fragmentShader: Gr.depth_frag,
    },
    normal: {
      uniforms: yr([
        Wr.common,
        Wr.bumpmap,
        Wr.normalmap,
        Wr.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Gr.meshnormal_vert,
      fragmentShader: Gr.meshnormal_frag,
    },
    sprite: {
      uniforms: yr([Wr.sprite, Wr.fog]),
      vertexShader: Gr.sprite_vert,
      fragmentShader: Gr.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ge() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Gr.background_vert,
      fragmentShader: Gr.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ge() },
      },
      vertexShader: Gr.backgroundCube_vert,
      fragmentShader: Gr.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Gr.cube_vert,
      fragmentShader: Gr.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Gr.equirect_vert,
      fragmentShader: Gr.equirect_frag,
    },
    distanceRGBA: {
      uniforms: yr([
        Wr.common,
        Wr.displacementmap,
        {
          referencePosition: { value: new vn() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Gr.distanceRGBA_vert,
      fragmentShader: Gr.distanceRGBA_frag,
    },
    shadow: {
      uniforms: yr([
        Wr.lights,
        Wr.fog,
        { color: { value: new Vi(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Gr.shadow_vert,
      fragmentShader: Gr.shadow_frag,
    },
  };
Xr.physical = {
  uniforms: yr([
    Xr.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ge() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ge() },
      clearcoatNormalScale: { value: new ke(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ge() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ge() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ge() },
      sheen: { value: 0 },
      sheenColor: { value: new Vi(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ge() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ge() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ge() },
      transmissionSamplerSize: { value: new ke() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ge() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Vi(0) },
      specularColor: { value: new Vi(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ge() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ge() },
      anisotropyVector: { value: new ke() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ge() },
    },
  ]),
  vertexShader: Gr.meshphysical_vert,
  fragmentShader: Gr.meshphysical_frag,
};
const jr = { r: 0, b: 0, g: 0 },
  qr = new ri(),
  Yr = new Yn();
function Zr(t, e, n, i, r, a, s) {
  const o = new Vi(0);
  let l,
    u,
    d = !0 === a ? 0 : 1,
    p = null,
    f = 0,
    m = null;
  function g(t) {
    let i = !0 === t.isScene ? t.background : null;
    if (i && i.isTexture) {
      i = (t.backgroundBlurriness > 0 ? n : e).get(i);
    }
    return i;
  }
  function _(e, n) {
    e.getRGB(jr, Mr(t)), i.buffers.color.setClear(jr.r, jr.g, jr.b, n, s);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (t, e = 1) {
      o.set(t), (d = e), _(o, d);
    },
    getClearAlpha: function () {
      return d;
    },
    setClearAlpha: function (t) {
      (d = t), _(o, d);
    },
    render: function (e) {
      let n = !1;
      const r = g(e);
      null === r ? _(o, d) : r && r.isColor && (_(r, 1), (n = !0));
      const a = t.xr.getEnvironmentBlendMode();
      "additive" === a
        ? i.buffers.color.setClear(0, 0, 0, 1, s)
        : "alpha-blend" === a && i.buffers.color.setClear(0, 0, 0, 0, s),
        (t.autoClear || n) &&
          (i.buffers.depth.setTest(!0),
          i.buffers.depth.setMask(!0),
          i.buffers.color.setMask(!0),
          t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil));
    },
    addToRenderList: function (e, n) {
      const i = g(n);
      i && (i.isCubeTexture || i.mapping === $)
        ? (void 0 === u &&
            ((u = new gr(
              new vr(1, 1, 1),
              new Er({
                name: "BackgroundCubeMaterial",
                uniforms: xr(Xr.backgroundCube.uniforms),
                vertexShader: Xr.backgroundCube.vertexShader,
                fragmentShader: Xr.backgroundCube.fragmentShader,
                side: h,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            u.geometry.deleteAttribute("uv"),
            (u.onBeforeRender = function (t, e, n) {
              this.matrixWorld.copyPosition(n.matrixWorld);
            }),
            Object.defineProperty(u.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(u)),
          qr.copy(n.backgroundRotation),
          (qr.x *= -1),
          (qr.y *= -1),
          (qr.z *= -1),
          i.isCubeTexture &&
            !1 === i.isRenderTargetTexture &&
            ((qr.y *= -1), (qr.z *= -1)),
          (u.material.uniforms.envMap.value = i),
          (u.material.uniforms.flipEnvMap.value =
            i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            n.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          u.material.uniforms.backgroundRotation.value.setFromMatrix4(
            Yr.makeRotationFromEuler(qr)
          ),
          (u.material.toneMapped = Je.getTransfer(i.colorSpace) !== ge),
          (p === i && f === i.version && m === t.toneMapping) ||
            ((u.material.needsUpdate = !0),
            (p = i),
            (f = i.version),
            (m = t.toneMapping)),
          u.layers.enableAll(),
          e.unshift(u, u.geometry, u.material, 0, 0, null))
        : i &&
          i.isTexture &&
          (void 0 === l &&
            ((l = new gr(
              new kr(2, 2),
              new Er({
                name: "BackgroundMaterial",
                uniforms: xr(Xr.background.uniforms),
                vertexShader: Xr.background.vertexShader,
                fragmentShader: Xr.background.fragmentShader,
                side: c,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            l.geometry.deleteAttribute("normal"),
            Object.defineProperty(l.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(l)),
          (l.material.uniforms.t2D.value = i),
          (l.material.uniforms.backgroundIntensity.value =
            n.backgroundIntensity),
          (l.material.toneMapped = Je.getTransfer(i.colorSpace) !== ge),
          !0 === i.matrixAutoUpdate && i.updateMatrix(),
          l.material.uniforms.uvTransform.value.copy(i.matrix),
          (p === i && f === i.version && m === t.toneMapping) ||
            ((l.material.needsUpdate = !0),
            (p = i),
            (f = i.version),
            (m = t.toneMapping)),
          l.layers.enableAll(),
          e.unshift(l, l.geometry, l.material, 0, 0, null));
    },
  };
}
function Jr(t, e) {
  const n = t.getParameter(t.MAX_VERTEX_ATTRIBS),
    i = {},
    r = c(null);
  let a = r,
    s = !1;
  function o(e) {
    return t.bindVertexArray(e);
  }
  function l(e) {
    return t.deleteVertexArray(e);
  }
  function c(t) {
    const e = [],
      i = [],
      r = [];
    for (let a = 0; a < n; a++) (e[a] = 0), (i[a] = 0), (r[a] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: e,
      enabledAttributes: i,
      attributeDivisors: r,
      object: t,
      attributes: {},
      index: null,
    };
  }
  function h() {
    const t = a.newAttributes;
    for (let e = 0, n = t.length; e < n; e++) t[e] = 0;
  }
  function u(t) {
    d(t, 0);
  }
  function d(e, n) {
    const i = a.newAttributes,
      r = a.enabledAttributes,
      s = a.attributeDivisors;
    (i[e] = 1),
      0 === r[e] && (t.enableVertexAttribArray(e), (r[e] = 1)),
      s[e] !== n && (t.vertexAttribDivisor(e, n), (s[e] = n));
  }
  function p() {
    const e = a.newAttributes,
      n = a.enabledAttributes;
    for (let i = 0, r = n.length; i < r; i++)
      n[i] !== e[i] && (t.disableVertexAttribArray(i), (n[i] = 0));
  }
  function f(e, n, i, r, a, s, o) {
    !0 === o
      ? t.vertexAttribIPointer(e, n, i, a, s)
      : t.vertexAttribPointer(e, n, i, r, a, s);
  }
  function m() {
    g(), (s = !0), a !== r && ((a = r), o(a.object));
  }
  function g() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: function (n, r, l, m, g) {
      let _ = !1;
      const v = (function (e, n, r) {
        const a = !0 === r.wireframe;
        let s = i[e.id];
        void 0 === s && ((s = {}), (i[e.id] = s));
        let o = s[n.id];
        void 0 === o && ((o = {}), (s[n.id] = o));
        let l = o[a];
        void 0 === l && ((l = c(t.createVertexArray())), (o[a] = l));
        return l;
      })(m, l, r);
      a !== v && ((a = v), o(a.object)),
        (_ = (function (t, e, n, i) {
          const r = a.attributes,
            s = e.attributes;
          let o = 0;
          const l = n.getAttributes();
          for (const a in l) {
            if (l[a].location >= 0) {
              const e = r[a];
              let n = s[a];
              if (
                (void 0 === n &&
                  ("instanceMatrix" === a &&
                    t.instanceMatrix &&
                    (n = t.instanceMatrix),
                  "instanceColor" === a &&
                    t.instanceColor &&
                    (n = t.instanceColor)),
                void 0 === e)
              )
                return !0;
              if (e.attribute !== n) return !0;
              if (n && e.data !== n.data) return !0;
              o++;
            }
          }
          return a.attributesNum !== o || a.index !== i;
        })(n, m, l, g)),
        _ &&
          (function (t, e, n, i) {
            const r = {},
              s = e.attributes;
            let o = 0;
            const l = n.getAttributes();
            for (const a in l) {
              if (l[a].location >= 0) {
                let e = s[a];
                void 0 === e &&
                  ("instanceMatrix" === a &&
                    t.instanceMatrix &&
                    (e = t.instanceMatrix),
                  "instanceColor" === a &&
                    t.instanceColor &&
                    (e = t.instanceColor));
                const n = {};
                (n.attribute = e),
                  e && e.data && (n.data = e.data),
                  (r[a] = n),
                  o++;
              }
            }
            (a.attributes = r), (a.attributesNum = o), (a.index = i);
          })(n, m, l, g),
        null !== g && e.update(g, t.ELEMENT_ARRAY_BUFFER),
        (_ || s) &&
          ((s = !1),
          (function (n, i, r, a) {
            h();
            const s = a.attributes,
              o = r.getAttributes(),
              l = i.defaultAttributeValues;
            for (const c in o) {
              const i = o[c];
              if (i.location >= 0) {
                let r = s[c];
                if (
                  (void 0 === r &&
                    ("instanceMatrix" === c &&
                      n.instanceMatrix &&
                      (r = n.instanceMatrix),
                    "instanceColor" === c &&
                      n.instanceColor &&
                      (r = n.instanceColor)),
                  void 0 !== r)
                ) {
                  const s = r.normalized,
                    o = r.itemSize,
                    l = e.get(r);
                  if (void 0 === l) continue;
                  const c = l.buffer,
                    h = l.type,
                    p = l.bytesPerElement,
                    m = h === t.INT || h === t.UNSIGNED_INT || r.gpuType === dt;
                  if (r.isInterleavedBufferAttribute) {
                    const e = r.data,
                      l = e.stride,
                      g = r.offset;
                    if (e.isInstancedInterleavedBuffer) {
                      for (let t = 0; t < i.locationSize; t++)
                        d(i.location + t, e.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = e.meshPerAttribute * e.count);
                    } else
                      for (let t = 0; t < i.locationSize; t++)
                        u(i.location + t);
                    t.bindBuffer(t.ARRAY_BUFFER, c);
                    for (let t = 0; t < i.locationSize; t++)
                      f(
                        i.location + t,
                        o / i.locationSize,
                        h,
                        s,
                        l * p,
                        (g + (o / i.locationSize) * t) * p,
                        m
                      );
                  } else {
                    if (r.isInstancedBufferAttribute) {
                      for (let t = 0; t < i.locationSize; t++)
                        d(i.location + t, r.meshPerAttribute);
                      !0 !== n.isInstancedMesh &&
                        void 0 === a._maxInstanceCount &&
                        (a._maxInstanceCount = r.meshPerAttribute * r.count);
                    } else
                      for (let t = 0; t < i.locationSize; t++)
                        u(i.location + t);
                    t.bindBuffer(t.ARRAY_BUFFER, c);
                    for (let t = 0; t < i.locationSize; t++)
                      f(
                        i.location + t,
                        o / i.locationSize,
                        h,
                        s,
                        o * p,
                        (o / i.locationSize) * t * p,
                        m
                      );
                  }
                } else if (void 0 !== l) {
                  const e = l[c];
                  if (void 0 !== e)
                    switch (e.length) {
                      case 2:
                        t.vertexAttrib2fv(i.location, e);
                        break;
                      case 3:
                        t.vertexAttrib3fv(i.location, e);
                        break;
                      case 4:
                        t.vertexAttrib4fv(i.location, e);
                        break;
                      default:
                        t.vertexAttrib1fv(i.location, e);
                    }
                }
              }
            }
            p();
          })(n, r, l, m),
          null !== g && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, e.get(g).buffer));
    },
    reset: m,
    resetDefaultState: g,
    dispose: function () {
      m();
      for (const t in i) {
        const e = i[t];
        for (const t in e) {
          const n = e[t];
          for (const t in n) l(n[t].object), delete n[t];
          delete e[t];
        }
        delete i[t];
      }
    },
    releaseStatesOfGeometry: function (t) {
      if (void 0 === i[t.id]) return;
      const e = i[t.id];
      for (const n in e) {
        const t = e[n];
        for (const e in t) l(t[e].object), delete t[e];
        delete e[n];
      }
      delete i[t.id];
    },
    releaseStatesOfProgram: function (t) {
      for (const e in i) {
        const n = i[e];
        if (void 0 === n[t.id]) continue;
        const r = n[t.id];
        for (const t in r) l(r[t].object), delete r[t];
        delete n[t.id];
      }
    },
    initAttributes: h,
    enableAttribute: u,
    disableUnusedAttributes: p,
  };
}
function Kr(t, e, n) {
  let i;
  function r(e, r, a) {
    0 !== a && (t.drawArraysInstanced(i, e, r, a), n.update(r, i, a));
  }
  (this.setMode = function (t) {
    i = t;
  }),
    (this.render = function (e, r) {
      t.drawArrays(i, e, r), n.update(r, i, 1);
    }),
    (this.renderInstances = r),
    (this.renderMultiDraw = function (t, r, a) {
      if (0 === a) return;
      e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, t, 0, r, 0, a);
      let s = 0;
      for (let e = 0; e < a; e++) s += r[e];
      n.update(s, i, 1);
    }),
    (this.renderMultiDrawInstances = function (t, a, s, o) {
      if (0 === s) return;
      const l = e.get("WEBGL_multi_draw");
      if (null === l) for (let e = 0; e < t.length; e++) r(t[e], a[e], o[e]);
      else {
        l.multiDrawArraysInstancedWEBGL(i, t, 0, a, 0, o, 0, s);
        let e = 0;
        for (let t = 0; t < s; t++) e += a[t] * o[t];
        n.update(e, i, 1);
      }
    });
}
function $r(t, e, n, i) {
  let r;
  function a(e) {
    if ("highp" === e) {
      if (
        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision >
          0 &&
        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      e = "mediump";
    }
    return "mediump" === e &&
      t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision >
        0 &&
      t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let s = void 0 !== n.precision ? n.precision : "highp";
  const o = a(s);
  o !== s && (s = o);
  const l = !0 === n.logarithmicDepthBuffer,
    c = !0 === n.reverseDepthBuffer && e.has("EXT_clip_control"),
    h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
    u = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: function () {
      if (void 0 !== r) return r;
      if (!0 === e.has("EXT_texture_filter_anisotropic")) {
        const n = e.get("EXT_texture_filter_anisotropic");
        r = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r = 0;
      return r;
    },
    getMaxPrecision: a,
    textureFormatReadable: function (e) {
      return (
        e === St ||
        i.convert(e) === t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT)
      );
    },
    textureTypeReadable: function (n) {
      const r =
        n === mt &&
        (e.has("EXT_color_buffer_half_float") ||
          e.has("EXT_color_buffer_float"));
      return !(
        n !== lt &&
        i.convert(n) !== t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE) &&
        n !== ft &&
        !r
      );
    },
    precision: s,
    logarithmicDepthBuffer: l,
    reverseDepthBuffer: c,
    maxTextures: h,
    maxVertexTextures: u,
    maxTextureSize: t.getParameter(t.MAX_TEXTURE_SIZE),
    maxCubemapSize: t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
    maxAttributes: t.getParameter(t.MAX_VERTEX_ATTRIBS),
    maxVertexUniforms: t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
    maxVaryings: t.getParameter(t.MAX_VARYING_VECTORS),
    maxFragmentUniforms: t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
    vertexTextures: u > 0,
    maxSamples: t.getParameter(t.MAX_SAMPLES),
  };
}
function Qr(t) {
  const e = this;
  let n = null,
    i = 0,
    r = !1,
    a = !1;
  const s = new Or(),
    o = new Ge(),
    l = { value: null, needsUpdate: !1 };
  function c(t, n, i, r) {
    const a = null !== t ? t.length : 0;
    let c = null;
    if (0 !== a) {
      if (((c = l.value), !0 !== r || null === c)) {
        const e = i + 4 * a,
          r = n.matrixWorldInverse;
        o.getNormalMatrix(r),
          (null === c || c.length < e) && (c = new Float32Array(e));
        for (let n = 0, l = i; n !== a; ++n, l += 4)
          s.copy(t[n]).applyMatrix4(r, o),
            s.normal.toArray(c, l),
            (c[l + 3] = s.constant);
      }
      (l.value = c), (l.needsUpdate = !0);
    }
    return (e.numPlanes = a), (e.numIntersection = 0), c;
  }
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (t, e) {
      const n = 0 !== t.length || e || 0 !== i || r;
      return (r = e), (i = t.length), n;
    }),
    (this.beginShadows = function () {
      (a = !0), c(null);
    }),
    (this.endShadows = function () {
      a = !1;
    }),
    (this.setGlobalState = function (t, e) {
      n = c(t, e, 0);
    }),
    (this.setState = function (s, o, h) {
      const u = s.clippingPlanes,
        d = s.clipIntersection,
        p = s.clipShadows,
        f = t.get(s);
      if (!r || null === u || 0 === u.length || (a && !p))
        a
          ? c(null)
          : (function () {
              l.value !== n && ((l.value = n), (l.needsUpdate = i > 0));
              (e.numPlanes = i), (e.numIntersection = 0);
            })();
      else {
        const t = a ? 0 : i,
          e = 4 * t;
        let r = f.clippingState || null;
        (l.value = r), (r = c(u, o, e, h));
        for (let i = 0; i !== e; ++i) r[i] = n[i];
        (f.clippingState = r),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += t);
      }
    });
}
function ta(t) {
  let e = new WeakMap();
  function n(t, e) {
    return 303 === e ? (t.mapping = J) : 304 === e && (t.mapping = K), t;
  }
  function i(t) {
    const n = t.target;
    n.removeEventListener("dispose", i);
    const r = e.get(n);
    void 0 !== r && (e.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        const a = r.mapping;
        if (303 === a || 304 === a) {
          if (e.has(r)) {
            return n(e.get(r).texture, r.mapping);
          }
          {
            const a = r.image;
            if (a && a.height > 0) {
              const s = new Ur(a.height);
              return (
                s.fromEquirectangularTexture(t, r),
                e.set(r, s),
                r.addEventListener("dispose", i),
                n(s.texture, r.mapping)
              );
            }
            return null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
class ea extends Tr {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = t),
      (this.right = e),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.left = t.left),
      (this.right = t.right),
      (this.top = t.top),
      (this.bottom = t.bottom),
      (this.near = t.near),
      (this.far = t.far),
      (this.zoom = t.zoom),
      (this.view = null === t.view ? null : Object.assign({}, t.view)),
      this
    );
  }
  setViewOffset(t, e, n, i, r, a) {
    null === this.view &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom),
      e = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - t,
      a = n + t,
      s = i + e,
      o = i - e;
    if (null !== this.view && this.view.enabled) {
      const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
        e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += t * this.view.offsetX),
        (a = r + t * this.view.width),
        (s -= e * this.view.offsetY),
        (o = s - e * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      r,
      a,
      s,
      o,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.zoom = this.zoom),
      (e.object.left = this.left),
      (e.object.right = this.right),
      (e.object.top = this.top),
      (e.object.bottom = this.bottom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      null !== this.view && (e.object.view = Object.assign({}, this.view)),
      e
    );
  }
}
const na = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  ia = 20,
  ra = new ea(),
  aa = new Vi();
let sa = null,
  oa = 0,
  la = 0,
  ca = !1;
const ha = (1 + Math.sqrt(5)) / 2,
  ua = 1 / ha,
  da = [
    new vn(-ha, ua, 0),
    new vn(ha, ua, 0),
    new vn(-ua, 0, ha),
    new vn(ua, 0, ha),
    new vn(0, ha, -ua),
    new vn(0, ha, ua),
    new vn(-1, 1, -1),
    new vn(1, 1, -1),
    new vn(-1, 1, 1),
    new vn(1, 1, 1),
  ];
class pa {
  constructor(t) {
    (this._renderer = t),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, i = 100) {
    (sa = this._renderer.getRenderTarget()),
      (oa = this._renderer.getActiveCubeFace()),
      (la = this._renderer.getActiveMipmapLevel()),
      (ca = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(t, n, i, r),
      e > 0 && this._blur(r, 0, 0, e),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    null === this._cubemapMaterial &&
      ((this._cubemapMaterial = _a()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial &&
      ((this._equirectMaterial = ga()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
      null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    (this._lodMax = Math.floor(Math.log2(t))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(),
      null !== this._pingPongRenderTarget &&
        this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(sa, oa, la),
      (this._renderer.xr.enabled = ca),
      (t.scissorTest = !1),
      ma(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === J || t.mapping === K
      ? this._setSize(
          0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width
        )
      : this._setSize(t.image.width / 4),
      (sa = this._renderer.getRenderTarget()),
      (oa = this._renderer.getActiveCubeFace()),
      (la = this._renderer.getActiveMipmapLevel()),
      (ca = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = e || this._allocateTargets();
    return (
      this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112),
      e = 4 * this._cubeSize,
      n = {
        magFilter: at,
        minFilter: at,
        generateMipmaps: !1,
        type: mt,
        format: St,
        colorSpace: fe,
        depthBuffer: !1,
      },
      i = fa(t, e, n);
    if (
      null === this._pingPongRenderTarget ||
      this._pingPongRenderTarget.width !== t ||
      this._pingPongRenderTarget.height !== e
    ) {
      null !== this._pingPongRenderTarget && this._dispose(),
        (this._pingPongRenderTarget = fa(t, e, n));
      const { _lodMax: i } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = (function (t) {
        const e = [],
          n = [],
          i = [];
        let r = t;
        const a = t - 4 + 1 + na.length;
        for (let s = 0; s < a; s++) {
          const a = Math.pow(2, r);
          n.push(a);
          let o = 1 / a;
          s > t - 4 ? (o = na[s - t + 4 - 1]) : 0 === s && (o = 0), i.push(o);
          const l = 1 / (a - 2),
            c = -l,
            h = 1 + l,
            u = [c, c, h, c, h, h, c, c, h, h, c, h],
            d = 6,
            p = 6,
            f = 3,
            m = 2,
            g = 1,
            _ = new Float32Array(f * p * d),
            v = new Float32Array(m * p * d),
            x = new Float32Array(g * p * d);
          for (let t = 0; t < d; t++) {
            const e = ((t % 3) * 2) / 3 - 1,
              n = t > 2 ? 0 : -1,
              i = [
                e,
                n,
                0,
                e + 2 / 3,
                n,
                0,
                e + 2 / 3,
                n + 1,
                0,
                e,
                n,
                0,
                e + 2 / 3,
                n + 1,
                0,
                e,
                n + 1,
                0,
              ];
            _.set(i, f * p * t), v.set(u, m * p * t);
            const r = [t, t, t, t, t, t];
            x.set(r, g * p * t);
          }
          const y = new rr();
          y.setAttribute("position", new qi(_, f)),
            y.setAttribute("uv", new qi(v, m)),
            y.setAttribute("faceIndex", new qi(x, g)),
            e.push(y),
            r > 4 && r--;
        }
        return { lodPlanes: e, sizeLods: n, sigmas: i };
      })(i)),
        (this._blurMaterial = (function (t, e, n) {
          const i = new Float32Array(ia),
            r = new vn(0, 1, 0),
            a = new Er({
              name: "SphericalGaussianBlur",
              defines: {
                n: ia,
                CUBEUV_TEXEL_WIDTH: 1 / e,
                CUBEUV_TEXEL_HEIGHT: 1 / n,
                CUBEUV_MAX_MIP: `${t}.0`,
              },
              uniforms: {
                envMap: { value: null },
                samples: { value: 1 },
                weights: { value: i },
                latitudinal: { value: !1 },
                dTheta: { value: 0 },
                mipInt: { value: 0 },
                poleAxis: { value: r },
              },
              vertexShader: va(),
              fragmentShader:
                "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
              blending: 0,
              depthTest: !1,
              depthWrite: !1,
            });
          return a;
        })(i, t, e));
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new gr(this._lodPlanes[0], t);
    this._renderer.compile(e, ra);
  }
  _sceneToCubeUV(t, e, n, i) {
    const r = new Rr(90, 1, e, n),
      a = [1, -1, 1, 1, 1, 1],
      s = [1, 1, 1, -1, -1, -1],
      o = this._renderer,
      l = o.autoClear,
      c = o.toneMapping;
    o.getClearColor(aa), (o.toneMapping = k), (o.autoClear = !1);
    const u = new Wi({
        name: "PMREM.Background",
        side: h,
        depthWrite: !1,
        depthTest: !1,
      }),
      d = new gr(new vr(), u);
    let p = !1;
    const f = t.background;
    f
      ? f.isColor && (u.color.copy(f), (t.background = null), (p = !0))
      : (u.color.copy(aa), (p = !0));
    for (let h = 0; h < 6; h++) {
      const e = h % 3;
      0 === e
        ? (r.up.set(0, a[h], 0), r.lookAt(s[h], 0, 0))
        : 1 === e
        ? (r.up.set(0, 0, a[h]), r.lookAt(0, s[h], 0))
        : (r.up.set(0, a[h], 0), r.lookAt(0, 0, s[h]));
      const n = this._cubeSize;
      ma(i, e * n, h > 2 ? n : 0, n, n),
        o.setRenderTarget(i),
        p && o.render(d, r),
        o.render(t, r);
    }
    d.geometry.dispose(),
      d.material.dispose(),
      (o.toneMapping = c),
      (o.autoClear = l),
      (t.background = f);
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer,
      i = t.mapping === J || t.mapping === K;
    i
      ? (null === this._cubemapMaterial && (this._cubemapMaterial = _a()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          !1 === t.isRenderTargetTexture ? -1 : 1))
      : null === this._equirectMaterial && (this._equirectMaterial = ga());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new gr(this._lodPlanes[0], r);
    r.uniforms.envMap.value = t;
    const s = this._cubeSize;
    ma(e, 0, 0, 3 * s, 2 * s), n.setRenderTarget(e), n.render(a, ra);
  }
  _applyPMREM(t) {
    const e = this._renderer,
      n = e.autoClear;
    e.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const e = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1]
        ),
        n = da[(i - r - 1) % da.length];
      this._blur(t, r - 1, r, e, n);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, i, "latitudinal", r),
      this._halfBlur(a, t, n, n, i, "longitudinal", r);
  }
  _halfBlur(t, e, n, i, r, a, s) {
    const o = this._renderer,
      l = this._blurMaterial,
      c = new gr(this._lodPlanes[i], l),
      h = l.uniforms,
      u = this._sizeLods[n] - 1,
      d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
      p = r / d,
      f = isFinite(r) ? 1 + Math.floor(3 * p) : ia,
      m = [];
    let g = 0;
    for (let x = 0; x < ia; ++x) {
      const t = x / p,
        e = Math.exp((-t * t) / 2);
      m.push(e), 0 === x ? (g += e) : x < f && (g += 2 * e);
    }
    for (let x = 0; x < m.length; x++) m[x] = m[x] / g;
    (h.envMap.value = t.texture),
      (h.samples.value = f),
      (h.weights.value = m),
      (h.latitudinal.value = "latitudinal" === a),
      s && (h.poleAxis.value = s);
    const { _lodMax: _ } = this;
    (h.dTheta.value = d), (h.mipInt.value = _ - n);
    const v = this._sizeLods[i];
    ma(
      e,
      3 * v * (i > _ - 4 ? i - _ + 4 : 0),
      4 * (this._cubeSize - v),
      3 * v,
      2 * v
    ),
      o.setRenderTarget(e),
      o.render(c, ra);
  }
}
function fa(t, e, n) {
  const i = new fn(t, e, n);
  return (
    (i.texture.mapping = $),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function ma(t, e, n, i, r) {
  t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
}
function ga() {
  return new Er({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: va(),
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function _a() {
  return new Er({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: va(),
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function va() {
  return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
}
function xa(t) {
  let e = new WeakMap(),
    n = null;
  function i(t) {
    const n = t.target;
    n.removeEventListener("dispose", i);
    const r = e.get(n);
    void 0 !== r && (e.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        const a = r.mapping,
          s = 303 === a || 304 === a,
          o = a === J || a === K;
        if (s || o) {
          let a = e.get(r);
          const l = void 0 !== a ? a.texture.pmremVersion : 0;
          if (r.isRenderTargetTexture && r.pmremVersion !== l)
            return (
              null === n && (n = new pa(t)),
              (a = s ? n.fromEquirectangular(r, a) : n.fromCubemap(r, a)),
              (a.texture.pmremVersion = r.pmremVersion),
              e.set(r, a),
              a.texture
            );
          if (void 0 !== a) return a.texture;
          {
            const l = r.image;
            return (s && l && l.height > 0) ||
              (o &&
                l &&
                (function (t) {
                  let e = 0;
                  const n = 6;
                  for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
                  return e === n;
                })(l))
              ? (null === n && (n = new pa(t)),
                (a = s ? n.fromEquirectangular(r) : n.fromCubemap(r)),
                (a.texture.pmremVersion = r.pmremVersion),
                e.set(r, a),
                r.addEventListener("dispose", i),
                a.texture)
              : null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      (e = new WeakMap()), null !== n && (n.dispose(), (n = null));
    },
  };
}
function ya(t) {
  const e = {};
  function n(n) {
    if (void 0 !== e[n]) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          t.getExtension("WEBGL_depth_texture") ||
          t.getExtension("MOZ_WEBGL_depth_texture") ||
          t.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          t.getExtension("EXT_texture_filter_anisotropic") ||
          t.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          t.getExtension("WEBGL_compressed_texture_s3tc") ||
          t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          t.getExtension("WEBGL_compressed_texture_pvrtc") ||
          t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = t.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (t) {
      return null !== n(t);
    },
    init: function () {
      n("EXT_color_buffer_float"),
        n("WEBGL_clip_cull_distance"),
        n("OES_texture_float_linear"),
        n("EXT_color_buffer_half_float"),
        n("WEBGL_multisampled_render_to_texture"),
        n("WEBGL_render_shared_exponent");
    },
    get: function (t) {
      const e = n(t);
      return (
        null === e &&
          Ze("THREE.WebGLRenderer: " + t + " extension not supported."),
        e
      );
    },
  };
}
function Ma(t, e, n, i) {
  const r = {},
    a = new WeakMap();
  function s(t) {
    const o = t.target;
    null !== o.index && e.remove(o.index);
    for (const n in o.attributes) e.remove(o.attributes[n]);
    for (const n in o.morphAttributes) {
      const t = o.morphAttributes[n];
      for (let n = 0, i = t.length; n < i; n++) e.remove(t[n]);
    }
    o.removeEventListener("dispose", s), delete r[o.id];
    const l = a.get(o);
    l && (e.remove(l), a.delete(o)),
      i.releaseStatesOfGeometry(o),
      !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
      n.memory.geometries--;
  }
  function o(t) {
    const n = [],
      i = t.index,
      r = t.attributes.position;
    let s = 0;
    if (null !== i) {
      const t = i.array;
      s = i.version;
      for (let e = 0, i = t.length; e < i; e += 3) {
        const i = t[e + 0],
          r = t[e + 1],
          a = t[e + 2];
        n.push(i, r, r, a, a, i);
      }
    } else {
      if (void 0 === r) return;
      {
        const t = r.array;
        s = r.version;
        for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
          const t = e + 0,
            i = e + 1,
            r = e + 2;
          n.push(t, i, i, r, r, t);
        }
      }
    }
    const o = new (Xe(n) ? Zi : Yi)(n, 1);
    o.version = s;
    const l = a.get(t);
    l && e.remove(l), a.set(t, o);
  }
  return {
    get: function (t, e) {
      return (
        !0 === r[e.id] ||
          (e.addEventListener("dispose", s),
          (r[e.id] = !0),
          n.memory.geometries++),
        e
      );
    },
    update: function (n) {
      const i = n.attributes;
      for (const a in i) e.update(i[a], t.ARRAY_BUFFER);
      const r = n.morphAttributes;
      for (const a in r) {
        const n = r[a];
        for (let i = 0, r = n.length; i < r; i++)
          e.update(n[i], t.ARRAY_BUFFER);
      }
    },
    getWireframeAttribute: function (t) {
      const e = a.get(t);
      if (e) {
        const n = t.index;
        null !== n && e.version < n.version && o(t);
      } else o(t);
      return a.get(t);
    },
  };
}
function Sa(t, e, n) {
  let i, r, a;
  function s(e, s, o) {
    0 !== o && (t.drawElementsInstanced(i, s, r, e * a, o), n.update(s, i, o));
  }
  (this.setMode = function (t) {
    i = t;
  }),
    (this.setIndex = function (t) {
      (r = t.type), (a = t.bytesPerElement);
    }),
    (this.render = function (e, s) {
      t.drawElements(i, s, r, e * a), n.update(s, i, 1);
    }),
    (this.renderInstances = s),
    (this.renderMultiDraw = function (t, a, s) {
      if (0 === s) return;
      e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, a, 0, r, t, 0, s);
      let o = 0;
      for (let e = 0; e < s; e++) o += a[e];
      n.update(o, i, 1);
    }),
    (this.renderMultiDrawInstances = function (t, o, l, c) {
      if (0 === l) return;
      const h = e.get("WEBGL_multi_draw");
      if (null === h)
        for (let e = 0; e < t.length; e++) s(t[e] / a, o[e], c[e]);
      else {
        h.multiDrawElementsInstancedWEBGL(i, o, 0, r, t, 0, c, 0, l);
        let e = 0;
        for (let t = 0; t < l; t++) e += o[t] * c[t];
        n.update(e, i, 1);
      }
    });
}
function Ea(t) {
  const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return {
    memory: { geometries: 0, textures: 0 },
    render: e,
    programs: null,
    autoReset: !0,
    reset: function () {
      (e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0);
    },
    update: function (n, i, r) {
      switch ((e.calls++, i)) {
        case t.TRIANGLES:
          e.triangles += r * (n / 3);
          break;
        case t.LINES:
          e.lines += r * (n / 2);
          break;
        case t.LINE_STRIP:
          e.lines += r * (n - 1);
          break;
        case t.LINE_LOOP:
          e.lines += r * n;
          break;
        case t.POINTS:
          e.points += r * n;
      }
    },
  };
}
function Ta(t, e, n) {
  const i = new WeakMap(),
    r = new dn();
  return {
    update: function (a, s, o) {
      const l = a.morphTargetInfluences,
        c =
          s.morphAttributes.position ||
          s.morphAttributes.normal ||
          s.morphAttributes.color,
        h = void 0 !== c ? c.length : 0;
      let u = i.get(s);
      if (void 0 === u || u.count !== h) {
        void 0 !== u && u.texture.dispose();
        const d = void 0 !== s.morphAttributes.position,
          p = void 0 !== s.morphAttributes.normal,
          f = void 0 !== s.morphAttributes.color,
          m = s.morphAttributes.position || [],
          g = s.morphAttributes.normal || [],
          _ = s.morphAttributes.color || [];
        let v = 0;
        !0 === d && (v = 1), !0 === p && (v = 2), !0 === f && (v = 3);
        let x = s.attributes.position.count * v,
          y = 1;
        x > e.maxTextureSize &&
          ((y = Math.ceil(x / e.maxTextureSize)), (x = e.maxTextureSize));
        const M = new Float32Array(x * y * 4 * h),
          S = new mn(M, x, y, h);
        (S.type = ft), (S.needsUpdate = !0);
        const E = 4 * v;
        for (let b = 0; b < h; b++) {
          const A = m[b],
            w = g[b],
            R = _[b],
            C = x * y * 4 * b;
          for (let P = 0; P < A.count; P++) {
            const L = P * E;
            !0 === d &&
              (r.fromBufferAttribute(A, P),
              (M[C + L + 0] = r.x),
              (M[C + L + 1] = r.y),
              (M[C + L + 2] = r.z),
              (M[C + L + 3] = 0)),
              !0 === p &&
                (r.fromBufferAttribute(w, P),
                (M[C + L + 4] = r.x),
                (M[C + L + 5] = r.y),
                (M[C + L + 6] = r.z),
                (M[C + L + 7] = 0)),
              !0 === f &&
                (r.fromBufferAttribute(R, P),
                (M[C + L + 8] = r.x),
                (M[C + L + 9] = r.y),
                (M[C + L + 10] = r.z),
                (M[C + L + 11] = 4 === R.itemSize ? r.w : 1));
          }
        }
        function T() {
          S.dispose(), i.delete(s), s.removeEventListener("dispose", T);
        }
        (u = { count: h, texture: S, size: new ke(x, y) }),
          i.set(s, u),
          s.addEventListener("dispose", T);
      }
      if (!0 === a.isInstancedMesh && null !== a.morphTexture)
        o.getUniforms().setValue(t, "morphTexture", a.morphTexture, n);
      else {
        let U = 0;
        for (let I = 0; I < l.length; I++) U += l[I];
        const D = s.morphTargetsRelative ? 1 : 1 - U;
        o.getUniforms().setValue(t, "morphTargetBaseInfluence", D),
          o.getUniforms().setValue(t, "morphTargetInfluences", l);
      }
      o.getUniforms().setValue(t, "morphTargetsTexture", u.texture, n),
        o.getUniforms().setValue(t, "morphTargetsTextureSize", u.size);
    },
  };
}
function ba(t, e, n, i) {
  let r = new WeakMap();
  function a(t) {
    const e = t.target;
    e.removeEventListener("dispose", a),
      n.remove(e.instanceMatrix),
      null !== e.instanceColor && n.remove(e.instanceColor);
  }
  return {
    update: function (s) {
      const o = i.render.frame,
        l = s.geometry,
        c = e.get(s, l);
      if (
        (r.get(c) !== o && (e.update(c), r.set(c, o)),
        s.isInstancedMesh &&
          (!1 === s.hasEventListener("dispose", a) &&
            s.addEventListener("dispose", a),
          r.get(s) !== o &&
            (n.update(s.instanceMatrix, t.ARRAY_BUFFER),
            null !== s.instanceColor &&
              n.update(s.instanceColor, t.ARRAY_BUFFER),
            r.set(s, o))),
        s.isSkinnedMesh)
      ) {
        const t = s.skeleton;
        r.get(t) !== o && (t.update(), r.set(t, o));
      }
      return c;
    },
    dispose: function () {
      r = new WeakMap();
    },
  };
}
class Aa extends un {
  constructor(t, e, n, i, r, a, s, o, l, c = 1026) {
    if (c !== bt && c !== At)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === n && c === bt && (n = pt),
      void 0 === n && c === At && (n = vt),
      super(null, i, r, a, s, o, c, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: t, height: e }),
      (this.magFilter = void 0 !== s ? s : nt),
      (this.minFilter = void 0 !== o ? o : nt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(t) {
    return super.copy(t), (this.compareFunction = t.compareFunction), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      null !== this.compareFunction &&
        (e.compareFunction = this.compareFunction),
      e
    );
  }
}
const wa = new un(),
  Ra = new Aa(1, 1),
  Ca = new mn(),
  Pa = new gn(),
  La = new Lr(),
  Ua = [],
  Da = [],
  Ia = new Float32Array(16),
  Na = new Float32Array(9),
  Oa = new Float32Array(4);
function Fa(t, e, n) {
  const i = t[0];
  if (i <= 0 || i > 0) return t;
  const r = e * n;
  let a = Ua[r];
  if ((void 0 === a && ((a = new Float32Array(r)), (Ua[r] = a)), 0 !== e)) {
    i.toArray(a, 0);
    for (let i = 1, r = 0; i !== e; ++i) (r += n), t[i].toArray(a, r);
  }
  return a;
}
function Ba(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function za(t, e) {
  for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
}
function Va(t, e) {
  let n = Da[e];
  void 0 === n && ((n = new Int32Array(e)), (Da[e] = n));
  for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
  return n;
}
function Ha(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
}
function ka(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y) ||
      (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (Ba(n, e)) return;
    t.uniform2fv(this.addr, e), za(n, e);
  }
}
function Ga(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
      (t.uniform3f(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else if (void 0 !== e.r)
    (n[0] === e.r && n[1] === e.g && n[2] === e.b) ||
      (t.uniform3f(this.addr, e.r, e.g, e.b),
      (n[0] = e.r),
      (n[1] = e.g),
      (n[2] = e.b));
  else {
    if (Ba(n, e)) return;
    t.uniform3fv(this.addr, e), za(n, e);
  }
}
function Wa(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
      (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (Ba(n, e)) return;
    t.uniform4fv(this.addr, e), za(n, e);
  }
}
function Xa(t, e) {
  const n = this.cache,
    i = e.elements;
  if (void 0 === i) {
    if (Ba(n, e)) return;
    t.uniformMatrix2fv(this.addr, !1, e), za(n, e);
  } else {
    if (Ba(n, i)) return;
    Oa.set(i), t.uniformMatrix2fv(this.addr, !1, Oa), za(n, i);
  }
}
function ja(t, e) {
  const n = this.cache,
    i = e.elements;
  if (void 0 === i) {
    if (Ba(n, e)) return;
    t.uniformMatrix3fv(this.addr, !1, e), za(n, e);
  } else {
    if (Ba(n, i)) return;
    Na.set(i), t.uniformMatrix3fv(this.addr, !1, Na), za(n, i);
  }
}
function qa(t, e) {
  const n = this.cache,
    i = e.elements;
  if (void 0 === i) {
    if (Ba(n, e)) return;
    t.uniformMatrix4fv(this.addr, !1, e), za(n, e);
  } else {
    if (Ba(n, i)) return;
    Ia.set(i), t.uniformMatrix4fv(this.addr, !1, Ia), za(n, i);
  }
}
function Ya(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
}
function Za(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y) ||
      (t.uniform2i(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (Ba(n, e)) return;
    t.uniform2iv(this.addr, e), za(n, e);
  }
}
function Ja(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
      (t.uniform3i(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else {
    if (Ba(n, e)) return;
    t.uniform3iv(this.addr, e), za(n, e);
  }
}
function Ka(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
      (t.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (Ba(n, e)) return;
    t.uniform4iv(this.addr, e), za(n, e);
  }
}
function $a(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
}
function Qa(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y) ||
      (t.uniform2ui(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (Ba(n, e)) return;
    t.uniform2uiv(this.addr, e), za(n, e);
  }
}
function ts(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z) ||
      (t.uniform3ui(this.addr, e.x, e.y, e.z),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z));
  else {
    if (Ba(n, e)) return;
    t.uniform3uiv(this.addr, e), za(n, e);
  }
}
function es(t, e) {
  const n = this.cache;
  if (void 0 !== e.x)
    (n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w) ||
      (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (Ba(n, e)) return;
    t.uniform4uiv(this.addr, e), za(n, e);
  }
}
function ns(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  let a;
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    this.type === t.SAMPLER_2D_SHADOW
      ? ((Ra.compareFunction = Me), (a = Ra))
      : (a = wa),
    n.setTexture2D(e || a, r);
}
function is(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture3D(e || Pa, r);
}
function rs(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    n.setTextureCube(e || La, r);
}
function as(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture2DArray(e || Ca, r);
}
function ss(t, e) {
  t.uniform1fv(this.addr, e);
}
function os(t, e) {
  const n = Fa(e, this.size, 2);
  t.uniform2fv(this.addr, n);
}
function ls(t, e) {
  const n = Fa(e, this.size, 3);
  t.uniform3fv(this.addr, n);
}
function cs(t, e) {
  const n = Fa(e, this.size, 4);
  t.uniform4fv(this.addr, n);
}
function hs(t, e) {
  const n = Fa(e, this.size, 4);
  t.uniformMatrix2fv(this.addr, !1, n);
}
function us(t, e) {
  const n = Fa(e, this.size, 9);
  t.uniformMatrix3fv(this.addr, !1, n);
}
function ds(t, e) {
  const n = Fa(e, this.size, 16);
  t.uniformMatrix4fv(this.addr, !1, n);
}
function ps(t, e) {
  t.uniform1iv(this.addr, e);
}
function fs(t, e) {
  t.uniform2iv(this.addr, e);
}
function ms(t, e) {
  t.uniform3iv(this.addr, e);
}
function gs(t, e) {
  t.uniform4iv(this.addr, e);
}
function _s(t, e) {
  t.uniform1uiv(this.addr, e);
}
function vs(t, e) {
  t.uniform2uiv(this.addr, e);
}
function xs(t, e) {
  t.uniform3uiv(this.addr, e);
}
function ys(t, e) {
  t.uniform4uiv(this.addr, e);
}
function Ms(t, e, n) {
  const i = this.cache,
    r = e.length,
    a = Va(n, r);
  Ba(i, a) || (t.uniform1iv(this.addr, a), za(i, a));
  for (let s = 0; s !== r; ++s) n.setTexture2D(e[s] || wa, a[s]);
}
function Ss(t, e, n) {
  const i = this.cache,
    r = e.length,
    a = Va(n, r);
  Ba(i, a) || (t.uniform1iv(this.addr, a), za(i, a));
  for (let s = 0; s !== r; ++s) n.setTexture3D(e[s] || Pa, a[s]);
}
function Es(t, e, n) {
  const i = this.cache,
    r = e.length,
    a = Va(n, r);
  Ba(i, a) || (t.uniform1iv(this.addr, a), za(i, a));
  for (let s = 0; s !== r; ++s) n.setTextureCube(e[s] || La, a[s]);
}
function Ts(t, e, n) {
  const i = this.cache,
    r = e.length,
    a = Va(n, r);
  Ba(i, a) || (t.uniform1iv(this.addr, a), za(i, a));
  for (let s = 0; s !== r; ++s) n.setTexture2DArray(e[s] || Ca, a[s]);
}
class bs {
  constructor(t, e, n) {
    (this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.setValue = (function (t) {
        switch (t) {
          case 5126:
            return Ha;
          case 35664:
            return ka;
          case 35665:
            return Ga;
          case 35666:
            return Wa;
          case 35674:
            return Xa;
          case 35675:
            return ja;
          case 35676:
            return qa;
          case 5124:
          case 35670:
            return Ya;
          case 35667:
          case 35671:
            return Za;
          case 35668:
          case 35672:
            return Ja;
          case 35669:
          case 35673:
            return Ka;
          case 5125:
            return $a;
          case 36294:
            return Qa;
          case 36295:
            return ts;
          case 36296:
            return es;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return ns;
          case 35679:
          case 36299:
          case 36307:
            return is;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return rs;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return as;
        }
      })(e.type));
  }
}
class As {
  constructor(t, e, n) {
    (this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.size = e.size),
      (this.setValue = (function (t) {
        switch (t) {
          case 5126:
            return ss;
          case 35664:
            return os;
          case 35665:
            return ls;
          case 35666:
            return cs;
          case 35674:
            return hs;
          case 35675:
            return us;
          case 35676:
            return ds;
          case 5124:
          case 35670:
            return ps;
          case 35667:
          case 35671:
            return fs;
          case 35668:
          case 35672:
            return ms;
          case 35669:
          case 35673:
            return gs;
          case 5125:
            return _s;
          case 36294:
            return vs;
          case 36295:
            return xs;
          case 36296:
            return ys;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Ms;
          case 35679:
          case 36299:
          case 36307:
            return Ss;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Es;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Ts;
        }
      })(e.type));
  }
}
class ws {
  constructor(t) {
    (this.id = t), (this.seq = []), (this.map = {});
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const a = i[r];
      a.setValue(t, e[a.id], n);
    }
  }
}
const Rs = /(\w+)(\])?(\[|\.)?/g;
function Cs(t, e) {
  t.seq.push(e), (t.map[e.id] = e);
}
function Ps(t, e, n) {
  const i = t.name,
    r = i.length;
  for (Rs.lastIndex = 0; ; ) {
    const a = Rs.exec(i),
      s = Rs.lastIndex;
    let o = a[1];
    const l = "]" === a[2],
      c = a[3];
    if ((l && (o |= 0), void 0 === c || ("[" === c && s + 2 === r))) {
      Cs(n, void 0 === c ? new bs(o, t, e) : new As(o, t, e));
      break;
    }
    {
      let t = n.map[o];
      void 0 === t && ((t = new ws(o)), Cs(n, t)), (n = t);
    }
  }
}
class Ls {
  constructor(t, e) {
    (this.seq = []), (this.map = {});
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const n = t.getActiveUniform(e, i);
      Ps(n, t.getUniformLocation(e, n.name), this);
    }
  }
  setValue(t, e, n, i) {
    const r = this.map[e];
    void 0 !== r && r.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    void 0 !== i && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      const a = e[r],
        s = n[a.id];
      !1 !== s.needsUpdate && a.setValue(t, s.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
      const r = t[i];
      r.id in e && n.push(r);
    }
    return n;
  }
}
function Us(t, e, n) {
  const i = t.createShader(e);
  return t.shaderSource(i, n), t.compileShader(i), i;
}
const Ds = 37297;
let Is = 0;
const Ns = new Ge();
function Os(t, e, n) {
  const i = t.getShaderParameter(e, t.COMPILE_STATUS),
    r = t.getShaderInfoLog(e).trim();
  if (i && "" === r) return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const i = parseInt(a[1]);
    return (
      n.toUpperCase() +
      "\n\n" +
      r +
      "\n\n" +
      (function (t, e) {
        const n = t.split("\n"),
          i = [],
          r = Math.max(e - 6, 0),
          a = Math.min(e + 6, n.length);
        for (let s = r; s < a; s++) {
          const t = s + 1;
          i.push(`${t === e ? ">" : " "} ${t}: ${n[s]}`);
        }
        return i.join("\n");
      })(t.getShaderSource(e), i)
    );
  }
  return r;
}
function Fs(t, e) {
  const n = (function (t) {
    Je._getMatrix(Ns, Je.workingColorSpace, t);
    const e = `mat3( ${Ns.elements.map((t) => t.toFixed(4))} )`;
    switch (Je.getTransfer(t)) {
      case me:
        return [e, "LinearTransferOETF"];
      case ge:
        return [e, "sRGBTransferOETF"];
      default:
        return [e, "LinearTransferOETF"];
    }
  })(e);
  return [
    `vec4 ${t}( vec4 value ) {`,
    `\treturn ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
    "}",
  ].join("\n");
}
function Bs(t, e) {
  let n;
  switch (e) {
    case G:
      n = "Linear";
      break;
    case W:
      n = "Reinhard";
      break;
    case X:
      n = "Cineon";
      break;
    case j:
      n = "ACESFilmic";
      break;
    case Y:
      n = "AgX";
      break;
    case Z:
      n = "Neutral";
      break;
    case q:
      n = "Custom";
      break;
    default:
      n = "Linear";
  }
  return (
    "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  );
}
const zs = new vn();
function Vs() {
  Je.getLuminanceCoefficients(zs);
  return [
    "float luminance( const in vec3 rgb ) {",
    `\tconst vec3 weights = vec3( ${zs.x.toFixed(4)}, ${zs.y.toFixed(
      4
    )}, ${zs.z.toFixed(4)} );`,
    "\treturn dot( weights, rgb );",
    "}",
  ].join("\n");
}
function Hs(t) {
  return "" !== t;
}
function ks(t, e) {
  const n =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return t
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Gs(t, e) {
  return t
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Ws = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Xs(t) {
  return t.replace(Ws, qs);
}
const js = new Map();
function qs(t, e) {
  let n = Gr[e];
  if (void 0 === n) {
    const t = js.get(e);
    if (void 0 === t) throw new Error("Can not resolve #include <" + e + ">");
    n = Gr[t];
  }
  return Xs(n);
}
const Ys =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Zs(t) {
  return t.replace(Ys, Js);
}
function Js(t, e, n, i) {
  let r = "";
  for (let a = parseInt(e); a < parseInt(n); a++)
    r += i
      .replace(/\[\s*i\s*\]/g, "[ " + a + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, a);
  return r;
}
function Ks(t) {
  let e = `precision ${t.precision} float;\n\tprecision ${t.precision} int;\n\tprecision ${t.precision} sampler2D;\n\tprecision ${t.precision} samplerCube;\n\tprecision ${t.precision} sampler3D;\n\tprecision ${t.precision} sampler2DArray;\n\tprecision ${t.precision} sampler2DShadow;\n\tprecision ${t.precision} samplerCubeShadow;\n\tprecision ${t.precision} sampler2DArrayShadow;\n\tprecision ${t.precision} isampler2D;\n\tprecision ${t.precision} isampler3D;\n\tprecision ${t.precision} isamplerCube;\n\tprecision ${t.precision} isampler2DArray;\n\tprecision ${t.precision} usampler2D;\n\tprecision ${t.precision} usampler3D;\n\tprecision ${t.precision} usamplerCube;\n\tprecision ${t.precision} usampler2DArray;\n\t`;
  return (
    "highp" === t.precision
      ? (e += "\n#define HIGH_PRECISION")
      : "mediump" === t.precision
      ? (e += "\n#define MEDIUM_PRECISION")
      : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"),
    e
  );
}
function $s(t, e, n, i) {
  const r = t.getContext(),
    a = n.defines;
  let c = n.vertexShader,
    h = n.fragmentShader;
  const u = (function (t) {
      let e = "SHADOWMAP_TYPE_BASIC";
      return (
        t.shadowMapType === s
          ? (e = "SHADOWMAP_TYPE_PCF")
          : t.shadowMapType === o
          ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
          : t.shadowMapType === l && (e = "SHADOWMAP_TYPE_VSM"),
        e
      );
    })(n),
    d = (function (t) {
      let e = "ENVMAP_TYPE_CUBE";
      if (t.envMap)
        switch (t.envMapMode) {
          case J:
          case K:
            e = "ENVMAP_TYPE_CUBE";
            break;
          case $:
            e = "ENVMAP_TYPE_CUBE_UV";
        }
      return e;
    })(n),
    p = (function (t) {
      let e = "ENVMAP_MODE_REFLECTION";
      t.envMap && t.envMapMode === K && (e = "ENVMAP_MODE_REFRACTION");
      return e;
    })(n),
    f = (function (t) {
      let e = "ENVMAP_BLENDING_NONE";
      if (t.envMap)
        switch (t.combine) {
          case z:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case V:
            e = "ENVMAP_BLENDING_MIX";
            break;
          case H:
            e = "ENVMAP_BLENDING_ADD";
        }
      return e;
    })(n),
    m = (function (t) {
      const e = t.envMapCubeUVHeight;
      if (null === e) return null;
      const n = Math.log2(e) - 2,
        i = 1 / e;
      return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
        texelHeight: i,
        maxMip: n,
      };
    })(n),
    g = (function (t) {
      return [
        t.extensionClipCullDistance
          ? "#extension GL_ANGLE_clip_cull_distance : require"
          : "",
        t.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
      ]
        .filter(Hs)
        .join("\n");
    })(n),
    _ = (function (t) {
      const e = [];
      for (const n in t) {
        const i = t[n];
        !1 !== i && e.push("#define " + n + " " + i);
      }
      return e.join("\n");
    })(a),
    v = r.createProgram();
  let x,
    y,
    M = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
  n.isRawShaderMaterial
    ? ((x = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        _,
      ]
        .filter(Hs)
        .join("\n")),
      x.length > 0 && (x += "\n"),
      (y = [
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        _,
      ]
        .filter(Hs)
        .join("\n")),
      y.length > 0 && (y += "\n"))
    : ((x = [
        Ks(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        _,
        n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        n.batching ? "#define USE_BATCHING" : "",
        n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        n.instancing ? "#define USE_INSTANCING" : "",
        n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.map ? "#define USE_MAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + p : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.mapUv ? "#define MAP_UV " + n.mapUv : "",
        n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
        n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
        n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
        n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
        n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
        n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
        n.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv
          : "",
        n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
        n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
        n.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv
          : "",
        n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
        n.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv
          : "",
        n.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv
          : "",
        n.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv
          : "",
        n.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv
          : "",
        n.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv
          : "",
        n.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv
          : "",
        n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
        n.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv
          : "",
        n.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv
          : "",
        n.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv
          : "",
        n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors ? "#define USE_COLOR" : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.skinning ? "#define USE_SKINNING" : "",
        n.morphTargets ? "#define USE_MORPHTARGETS" : "",
        n.morphNormals && !1 === n.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        n.morphColors ? "#define USE_MORPHCOLORS" : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
          : "",
        n.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
          : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + u : "",
        n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "\tattribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "\tattribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "\tuniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "\tattribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "\tattribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "\tattribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "\tattribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "\tattribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "\tattribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "\tattribute vec4 skinIndex;",
        "\tattribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(Hs)
        .join("\n")),
      (y = [
        Ks(n),
        "#define SHADER_TYPE " + n.shaderType,
        "#define SHADER_NAME " + n.shaderName,
        _,
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        n.map ? "#define USE_MAP" : "",
        n.matcap ? "#define USE_MATCAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + d : "",
        n.envMap ? "#define " + p : "",
        n.envMap ? "#define " + f : "",
        m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "",
        m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "",
        m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.anisotropy ? "#define USE_ANISOTROPY" : "",
        n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        n.clearcoat ? "#define USE_CLEARCOAT" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.dispersion ? "#define USE_DISPERSION" : "",
        n.iridescence ? "#define USE_IRIDESCENCE" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaTest ? "#define USE_ALPHATEST" : "",
        n.alphaHash ? "#define USE_ALPHAHASH" : "",
        n.sheen ? "#define USE_SHEEN" : "",
        n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
        n.vertexColors || n.instancingColor || n.batchingColor
          ? "#define USE_COLOR"
          : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUv1s ? "#define USE_UV1" : "",
        n.vertexUv2s ? "#define USE_UV2" : "",
        n.vertexUv3s ? "#define USE_UV3" : "",
        n.pointsUvs ? "#define USE_POINTS_UV" : "",
        n.gradientMap ? "#define USE_GRADIENTMAP" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + u : "",
        n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        n.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        n.toneMapping !== k ? "#define TONE_MAPPING" : "",
        n.toneMapping !== k ? Gr.tonemapping_pars_fragment : "",
        n.toneMapping !== k ? Bs("toneMapping", n.toneMapping) : "",
        n.dithering ? "#define DITHERING" : "",
        n.opaque ? "#define OPAQUE" : "",
        Gr.colorspace_pars_fragment,
        Fs("linearToOutputTexel", n.outputColorSpace),
        Vs(),
        n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
        "\n",
      ]
        .filter(Hs)
        .join("\n"))),
    (c = Xs(c)),
    (c = ks(c, n)),
    (c = Gs(c, n)),
    (h = Xs(h)),
    (h = ks(h, n)),
    (h = Gs(h, n)),
    (c = Zs(c)),
    (h = Zs(h)),
    !0 !== n.isRawShaderMaterial &&
      ((M = "#version 300 es\n"),
      (x =
        [
          g,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join("\n") +
        "\n" +
        x),
      (y =
        [
          "#define varying in",
          n.glslVersion === we
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          n.glslVersion === we ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        y));
  const S = M + x + c,
    E = M + y + h,
    T = Us(r, r.VERTEX_SHADER, S),
    b = Us(r, r.FRAGMENT_SHADER, E);
  function A(e) {
    if (t.debug.checkShaderErrors) {
      const n = r.getProgramInfoLog(v).trim(),
        i = r.getShaderInfoLog(T).trim(),
        a = r.getShaderInfoLog(b).trim();
      let s = !0,
        o = !0;
      if (!1 === r.getProgramParameter(v, r.LINK_STATUS))
        if (((s = !1), "function" == typeof t.debug.onShaderError))
          t.debug.onShaderError(r, v, T, b);
        else {
          Os(r, T, "vertex"), Os(r, b, "fragment");
        }
      else "" !== n || ("" !== i && "" !== a) || (o = !1);
      o &&
        (e.diagnostics = {
          runnable: s,
          programLog: n,
          vertexShader: { log: i, prefix: x },
          fragmentShader: { log: a, prefix: y },
        });
    }
    r.deleteShader(T),
      r.deleteShader(b),
      (w = new Ls(r, v)),
      (R = (function (t, e) {
        const n = {},
          i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
        for (let r = 0; r < i; r++) {
          const i = t.getActiveAttrib(e, r),
            a = i.name;
          let s = 1;
          i.type === t.FLOAT_MAT2 && (s = 2),
            i.type === t.FLOAT_MAT3 && (s = 3),
            i.type === t.FLOAT_MAT4 && (s = 4),
            (n[a] = {
              type: i.type,
              location: t.getAttribLocation(e, a),
              locationSize: s,
            });
        }
        return n;
      })(r, v));
  }
  let w, R;
  r.attachShader(v, T),
    r.attachShader(v, b),
    void 0 !== n.index0AttributeName
      ? r.bindAttribLocation(v, 0, n.index0AttributeName)
      : !0 === n.morphTargets && r.bindAttribLocation(v, 0, "position"),
    r.linkProgram(v),
    (this.getUniforms = function () {
      return void 0 === w && A(this), w;
    }),
    (this.getAttributes = function () {
      return void 0 === R && A(this), R;
    });
  let C = !1 === n.rendererExtensionParallelShaderCompile;
  return (
    (this.isReady = function () {
      return !1 === C && (C = r.getProgramParameter(v, Ds)), C;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        r.deleteProgram(v),
        (this.program = void 0);
    }),
    (this.type = n.shaderType),
    (this.name = n.shaderName),
    (this.id = Is++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = v),
    (this.vertexShader = T),
    (this.fragmentShader = b),
    this
  );
}
let Qs = 0;
class to {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(t) {
    const e = t.vertexShader,
      n = t.fragmentShader,
      i = this._getShaderStage(e),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(t);
    return (
      !1 === a.has(i) && (a.add(i), i.usedTimes++),
      !1 === a.has(r) && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, 0 === n.usedTimes && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return void 0 === n && ((n = new Set()), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return void 0 === n && ((n = new eo(t)), e.set(t, n)), n;
  }
}
class eo {
  constructor(t) {
    (this.id = Qs++), (this.code = t), (this.usedTimes = 0);
  }
}
function no(t, e, n, i, r, a, s) {
  const o = new ai(),
    l = new to(),
    c = new Set(),
    u = [],
    d = r.logarithmicDepthBuffer,
    p = r.vertexTextures;
  let f = r.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function g(t) {
    return c.add(t), 0 === t ? "uv" : `uv${t}`;
  }
  return {
    getParameters: function (a, o, u, _, v) {
      const x = _.fog,
        y = v.geometry,
        M = a.isMeshStandardMaterial ? _.environment : null,
        S = (a.isMeshStandardMaterial ? n : e).get(a.envMap || M),
        E = S && S.mapping === $ ? S.image.height : null,
        T = m[a.type];
      null !== a.precision &&
        ((f = r.getMaxPrecision(a.precision)), a.precision);
      const b =
          y.morphAttributes.position ||
          y.morphAttributes.normal ||
          y.morphAttributes.color,
        A = void 0 !== b ? b.length : 0;
      let w,
        R,
        C,
        P,
        L = 0;
      if (
        (void 0 !== y.morphAttributes.position && (L = 1),
        void 0 !== y.morphAttributes.normal && (L = 2),
        void 0 !== y.morphAttributes.color && (L = 3),
        T)
      ) {
        const t = Xr[T];
        (w = t.vertexShader), (R = t.fragmentShader);
      } else
        (w = a.vertexShader),
          (R = a.fragmentShader),
          l.update(a),
          (C = l.getVertexShaderID(a)),
          (P = l.getFragmentShaderID(a));
      const U = t.getRenderTarget(),
        D = t.state.buffers.depth.getReversed(),
        I = !0 === v.isInstancedMesh,
        N = !0 === v.isBatchedMesh,
        O = !!a.map,
        F = !!a.matcap,
        B = !!S,
        z = !!a.aoMap,
        V = !!a.lightMap,
        H = !!a.bumpMap,
        G = !!a.normalMap,
        W = !!a.displacementMap,
        X = !!a.emissiveMap,
        j = !!a.metalnessMap,
        q = !!a.roughnessMap,
        Y = a.anisotropy > 0,
        Z = a.clearcoat > 0,
        J = a.dispersion > 0,
        K = a.iridescence > 0,
        Q = a.sheen > 0,
        tt = a.transmission > 0,
        et = Y && !!a.anisotropyMap,
        nt = Z && !!a.clearcoatMap,
        it = Z && !!a.clearcoatNormalMap,
        rt = Z && !!a.clearcoatRoughnessMap,
        at = K && !!a.iridescenceMap,
        st = K && !!a.iridescenceThicknessMap,
        ot = Q && !!a.sheenColorMap,
        lt = Q && !!a.sheenRoughnessMap,
        ct = !!a.specularMap,
        ht = !!a.specularColorMap,
        ut = !!a.specularIntensityMap,
        dt = tt && !!a.transmissionMap,
        pt = tt && !!a.thicknessMap,
        ft = !!a.gradientMap,
        mt = !!a.alphaMap,
        gt = a.alphaTest > 0,
        _t = !!a.alphaHash,
        vt = !!a.extensions;
      let xt = k;
      a.toneMapped &&
        ((null !== U && !0 !== U.isXRRenderTarget) || (xt = t.toneMapping));
      const yt = {
        shaderID: T,
        shaderType: a.type,
        shaderName: a.name,
        vertexShader: w,
        fragmentShader: R,
        defines: a.defines,
        customVertexShaderID: C,
        customFragmentShaderID: P,
        isRawShaderMaterial: !0 === a.isRawShaderMaterial,
        glslVersion: a.glslVersion,
        precision: f,
        batching: N,
        batchingColor: N && null !== v._colorsTexture,
        instancing: I,
        instancingColor: I && null !== v.instanceColor,
        instancingMorph: I && null !== v.morphTexture,
        supportsVertexTextures: p,
        outputColorSpace:
          null === U
            ? t.outputColorSpace
            : !0 === U.isXRRenderTarget
            ? U.texture.colorSpace
            : fe,
        alphaToCoverage: !!a.alphaToCoverage,
        map: O,
        matcap: F,
        envMap: B,
        envMapMode: B && S.mapping,
        envMapCubeUVHeight: E,
        aoMap: z,
        lightMap: V,
        bumpMap: H,
        normalMap: G,
        displacementMap: p && W,
        emissiveMap: X,
        normalMapObjectSpace: G && 1 === a.normalMapType,
        normalMapTangentSpace: G && 0 === a.normalMapType,
        metalnessMap: j,
        roughnessMap: q,
        anisotropy: Y,
        anisotropyMap: et,
        clearcoat: Z,
        clearcoatMap: nt,
        clearcoatNormalMap: it,
        clearcoatRoughnessMap: rt,
        dispersion: J,
        iridescence: K,
        iridescenceMap: at,
        iridescenceThicknessMap: st,
        sheen: Q,
        sheenColorMap: ot,
        sheenRoughnessMap: lt,
        specularMap: ct,
        specularColorMap: ht,
        specularIntensityMap: ut,
        transmission: tt,
        transmissionMap: dt,
        thicknessMap: pt,
        gradientMap: ft,
        opaque:
          !1 === a.transparent && 1 === a.blending && !1 === a.alphaToCoverage,
        alphaMap: mt,
        alphaTest: gt,
        alphaHash: _t,
        combine: a.combine,
        mapUv: O && g(a.map.channel),
        aoMapUv: z && g(a.aoMap.channel),
        lightMapUv: V && g(a.lightMap.channel),
        bumpMapUv: H && g(a.bumpMap.channel),
        normalMapUv: G && g(a.normalMap.channel),
        displacementMapUv: W && g(a.displacementMap.channel),
        emissiveMapUv: X && g(a.emissiveMap.channel),
        metalnessMapUv: j && g(a.metalnessMap.channel),
        roughnessMapUv: q && g(a.roughnessMap.channel),
        anisotropyMapUv: et && g(a.anisotropyMap.channel),
        clearcoatMapUv: nt && g(a.clearcoatMap.channel),
        clearcoatNormalMapUv: it && g(a.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: rt && g(a.clearcoatRoughnessMap.channel),
        iridescenceMapUv: at && g(a.iridescenceMap.channel),
        iridescenceThicknessMapUv: st && g(a.iridescenceThicknessMap.channel),
        sheenColorMapUv: ot && g(a.sheenColorMap.channel),
        sheenRoughnessMapUv: lt && g(a.sheenRoughnessMap.channel),
        specularMapUv: ct && g(a.specularMap.channel),
        specularColorMapUv: ht && g(a.specularColorMap.channel),
        specularIntensityMapUv: ut && g(a.specularIntensityMap.channel),
        transmissionMapUv: dt && g(a.transmissionMap.channel),
        thicknessMapUv: pt && g(a.thicknessMap.channel),
        alphaMapUv: mt && g(a.alphaMap.channel),
        vertexTangents: !!y.attributes.tangent && (G || Y),
        vertexColors: a.vertexColors,
        vertexAlphas:
          !0 === a.vertexColors &&
          !!y.attributes.color &&
          4 === y.attributes.color.itemSize,
        pointsUvs: !0 === v.isPoints && !!y.attributes.uv && (O || mt),
        fog: !!x,
        useFog: !0 === a.fog,
        fogExp2: !!x && x.isFogExp2,
        flatShading: !0 === a.flatShading,
        sizeAttenuation: !0 === a.sizeAttenuation,
        logarithmicDepthBuffer: d,
        reverseDepthBuffer: D,
        skinning: !0 === v.isSkinnedMesh,
        morphTargets: void 0 !== y.morphAttributes.position,
        morphNormals: void 0 !== y.morphAttributes.normal,
        morphColors: void 0 !== y.morphAttributes.color,
        morphTargetsCount: A,
        morphTextureStride: L,
        numDirLights: o.directional.length,
        numPointLights: o.point.length,
        numSpotLights: o.spot.length,
        numSpotLightMaps: o.spotLightMap.length,
        numRectAreaLights: o.rectArea.length,
        numHemiLights: o.hemi.length,
        numDirLightShadows: o.directionalShadowMap.length,
        numPointLightShadows: o.pointShadowMap.length,
        numSpotLightShadows: o.spotShadowMap.length,
        numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
        numLightProbes: o.numLightProbes,
        numClippingPlanes: s.numPlanes,
        numClipIntersection: s.numIntersection,
        dithering: a.dithering,
        shadowMapEnabled: t.shadowMap.enabled && u.length > 0,
        shadowMapType: t.shadowMap.type,
        toneMapping: xt,
        decodeVideoTexture:
          O &&
          !0 === a.map.isVideoTexture &&
          Je.getTransfer(a.map.colorSpace) === ge,
        decodeVideoTextureEmissive:
          X &&
          !0 === a.emissiveMap.isVideoTexture &&
          Je.getTransfer(a.emissiveMap.colorSpace) === ge,
        premultipliedAlpha: a.premultipliedAlpha,
        doubleSided: 2 === a.side,
        flipSided: a.side === h,
        useDepthPacking: a.depthPacking >= 0,
        depthPacking: a.depthPacking || 0,
        index0AttributeName: a.index0AttributeName,
        extensionClipCullDistance:
          vt &&
          !0 === a.extensions.clipCullDistance &&
          i.has("WEBGL_clip_cull_distance"),
        extensionMultiDraw:
          ((vt && !0 === a.extensions.multiDraw) || N) &&
          i.has("WEBGL_multi_draw"),
        rendererExtensionParallelShaderCompile: i.has(
          "KHR_parallel_shader_compile"
        ),
        customProgramCacheKey: a.customProgramCacheKey(),
      };
      return (
        (yt.vertexUv1s = c.has(1)),
        (yt.vertexUv2s = c.has(2)),
        (yt.vertexUv3s = c.has(3)),
        c.clear(),
        yt
      );
    },
    getProgramCacheKey: function (e) {
      const n = [];
      if (
        (e.shaderID
          ? n.push(e.shaderID)
          : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)),
        void 0 !== e.defines)
      )
        for (const t in e.defines) n.push(t), n.push(e.defines[t]);
      return (
        !1 === e.isRawShaderMaterial &&
          (!(function (t, e) {
            t.push(e.precision),
              t.push(e.outputColorSpace),
              t.push(e.envMapMode),
              t.push(e.envMapCubeUVHeight),
              t.push(e.mapUv),
              t.push(e.alphaMapUv),
              t.push(e.lightMapUv),
              t.push(e.aoMapUv),
              t.push(e.bumpMapUv),
              t.push(e.normalMapUv),
              t.push(e.displacementMapUv),
              t.push(e.emissiveMapUv),
              t.push(e.metalnessMapUv),
              t.push(e.roughnessMapUv),
              t.push(e.anisotropyMapUv),
              t.push(e.clearcoatMapUv),
              t.push(e.clearcoatNormalMapUv),
              t.push(e.clearcoatRoughnessMapUv),
              t.push(e.iridescenceMapUv),
              t.push(e.iridescenceThicknessMapUv),
              t.push(e.sheenColorMapUv),
              t.push(e.sheenRoughnessMapUv),
              t.push(e.specularMapUv),
              t.push(e.specularColorMapUv),
              t.push(e.specularIntensityMapUv),
              t.push(e.transmissionMapUv),
              t.push(e.thicknessMapUv),
              t.push(e.combine),
              t.push(e.fogExp2),
              t.push(e.sizeAttenuation),
              t.push(e.morphTargetsCount),
              t.push(e.morphAttributeCount),
              t.push(e.numDirLights),
              t.push(e.numPointLights),
              t.push(e.numSpotLights),
              t.push(e.numSpotLightMaps),
              t.push(e.numHemiLights),
              t.push(e.numRectAreaLights),
              t.push(e.numDirLightShadows),
              t.push(e.numPointLightShadows),
              t.push(e.numSpotLightShadows),
              t.push(e.numSpotLightShadowsWithMaps),
              t.push(e.numLightProbes),
              t.push(e.shadowMapType),
              t.push(e.toneMapping),
              t.push(e.numClippingPlanes),
              t.push(e.numClipIntersection),
              t.push(e.depthPacking);
          })(n, e),
          (function (t, e) {
            o.disableAll(), e.supportsVertexTextures && o.enable(0);
            e.instancing && o.enable(1);
            e.instancingColor && o.enable(2);
            e.instancingMorph && o.enable(3);
            e.matcap && o.enable(4);
            e.envMap && o.enable(5);
            e.normalMapObjectSpace && o.enable(6);
            e.normalMapTangentSpace && o.enable(7);
            e.clearcoat && o.enable(8);
            e.iridescence && o.enable(9);
            e.alphaTest && o.enable(10);
            e.vertexColors && o.enable(11);
            e.vertexAlphas && o.enable(12);
            e.vertexUv1s && o.enable(13);
            e.vertexUv2s && o.enable(14);
            e.vertexUv3s && o.enable(15);
            e.vertexTangents && o.enable(16);
            e.anisotropy && o.enable(17);
            e.alphaHash && o.enable(18);
            e.batching && o.enable(19);
            e.dispersion && o.enable(20);
            e.batchingColor && o.enable(21);
            t.push(o.mask), o.disableAll(), e.fog && o.enable(0);
            e.useFog && o.enable(1);
            e.flatShading && o.enable(2);
            e.logarithmicDepthBuffer && o.enable(3);
            e.reverseDepthBuffer && o.enable(4);
            e.skinning && o.enable(5);
            e.morphTargets && o.enable(6);
            e.morphNormals && o.enable(7);
            e.morphColors && o.enable(8);
            e.premultipliedAlpha && o.enable(9);
            e.shadowMapEnabled && o.enable(10);
            e.doubleSided && o.enable(11);
            e.flipSided && o.enable(12);
            e.useDepthPacking && o.enable(13);
            e.dithering && o.enable(14);
            e.transmission && o.enable(15);
            e.sheen && o.enable(16);
            e.opaque && o.enable(17);
            e.pointsUvs && o.enable(18);
            e.decodeVideoTexture && o.enable(19);
            e.decodeVideoTextureEmissive && o.enable(20);
            e.alphaToCoverage && o.enable(21);
            t.push(o.mask);
          })(n, e),
          n.push(t.outputColorSpace)),
        n.push(e.customProgramCacheKey),
        n.join()
      );
    },
    getUniforms: function (t) {
      const e = m[t.type];
      let n;
      if (e) {
        const t = Xr[e];
        n = Sr.clone(t.uniforms);
      } else n = t.uniforms;
      return n;
    },
    acquireProgram: function (e, n) {
      let i;
      for (let t = 0, r = u.length; t < r; t++) {
        const e = u[t];
        if (e.cacheKey === n) {
          (i = e), ++i.usedTimes;
          break;
        }
      }
      return void 0 === i && ((i = new $s(t, n, e, a)), u.push(i)), i;
    },
    releaseProgram: function (t) {
      if (0 == --t.usedTimes) {
        const e = u.indexOf(t);
        (u[e] = u[u.length - 1]), u.pop(), t.destroy();
      }
    },
    releaseShaderCache: function (t) {
      l.remove(t);
    },
    programs: u,
    dispose: function () {
      l.dispose();
    },
  };
}
function io() {
  let t = new WeakMap();
  return {
    has: function (e) {
      return t.has(e);
    },
    get: function (e) {
      let n = t.get(e);
      return void 0 === n && ((n = {}), t.set(e, n)), n;
    },
    remove: function (e) {
      t.delete(e);
    },
    update: function (e, n, i) {
      t.get(e)[n] = i;
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
function ro(t, e) {
  return t.groupOrder !== e.groupOrder
    ? t.groupOrder - e.groupOrder
    : t.renderOrder !== e.renderOrder
    ? t.renderOrder - e.renderOrder
    : t.material.id !== e.material.id
    ? t.material.id - e.material.id
    : t.z !== e.z
    ? t.z - e.z
    : t.id - e.id;
}
function ao(t, e) {
  return t.groupOrder !== e.groupOrder
    ? t.groupOrder - e.groupOrder
    : t.renderOrder !== e.renderOrder
    ? t.renderOrder - e.renderOrder
    : t.z !== e.z
    ? e.z - t.z
    : t.id - e.id;
}
function so() {
  const t = [];
  let e = 0;
  const n = [],
    i = [],
    r = [];
  function a(n, i, r, a, s, o) {
    let l = t[e];
    return (
      void 0 === l
        ? ((l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: a,
            renderOrder: n.renderOrder,
            z: s,
            group: o,
          }),
          (t[e] = l))
        : ((l.id = n.id),
          (l.object = n),
          (l.geometry = i),
          (l.material = r),
          (l.groupOrder = a),
          (l.renderOrder = n.renderOrder),
          (l.z = s),
          (l.group = o)),
      e++,
      l
    );
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: function () {
      (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
    },
    push: function (t, e, s, o, l, c) {
      const h = a(t, e, s, o, l, c);
      s.transmission > 0
        ? i.push(h)
        : !0 === s.transparent
        ? r.push(h)
        : n.push(h);
    },
    unshift: function (t, e, s, o, l, c) {
      const h = a(t, e, s, o, l, c);
      s.transmission > 0
        ? i.unshift(h)
        : !0 === s.transparent
        ? r.unshift(h)
        : n.unshift(h);
    },
    finish: function () {
      for (let n = e, i = t.length; n < i; n++) {
        const e = t[n];
        if (null === e.id) break;
        (e.id = null),
          (e.object = null),
          (e.geometry = null),
          (e.material = null),
          (e.group = null);
      }
    },
    sort: function (t, e) {
      n.length > 1 && n.sort(t || ro),
        i.length > 1 && i.sort(e || ao),
        r.length > 1 && r.sort(e || ao);
    },
  };
}
function oo() {
  let t = new WeakMap();
  return {
    get: function (e, n) {
      const i = t.get(e);
      let r;
      return (
        void 0 === i
          ? ((r = new so()), t.set(e, [r]))
          : n >= i.length
          ? ((r = new so()), i.push(r))
          : (r = i[n]),
        r
      );
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
function lo() {
  const t = {};
  return {
    get: function (e) {
      if (void 0 !== t[e.id]) return t[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = { direction: new vn(), color: new Vi() };
          break;
        case "SpotLight":
          n = {
            position: new vn(),
            direction: new vn(),
            color: new Vi(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          n = { position: new vn(), color: new Vi(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n = {
            direction: new vn(),
            skyColor: new Vi(),
            groundColor: new Vi(),
          };
          break;
        case "RectAreaLight":
          n = {
            color: new Vi(),
            position: new vn(),
            halfWidth: new vn(),
            halfHeight: new vn(),
          };
      }
      return (t[e.id] = n), n;
    },
  };
}
let co = 0;
function ho(t, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (t.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (t.map ? 1 : 0)
  );
}
function uo(t) {
  const e = new lo(),
    n = (function () {
      const t = {};
      return {
        get: function (e) {
          if (void 0 !== t[e.id]) return t[e.id];
          let n;
          switch (e.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new ke(),
              };
              break;
            case "PointLight":
              n = {
                shadowIntensity: 1,
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new ke(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3,
              };
          }
          return (t[e.id] = n), n;
        },
      };
    })(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let o = 0; o < 9; o++) i.probe.push(new vn());
  const r = new vn(),
    a = new Yn(),
    s = new Yn();
  return {
    setup: function (r) {
      let a = 0,
        s = 0,
        o = 0;
      for (let t = 0; t < 9; t++) i.probe[t].set(0, 0, 0);
      let l = 0,
        c = 0,
        h = 0,
        u = 0,
        d = 0,
        p = 0,
        f = 0,
        m = 0,
        g = 0,
        _ = 0,
        v = 0;
      r.sort(ho);
      for (let t = 0, y = r.length; t < y; t++) {
        const x = r[t],
          y = x.color,
          M = x.intensity,
          S = x.distance,
          E = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
        if (x.isAmbientLight) (a += y.r * M), (s += y.g * M), (o += y.b * M);
        else if (x.isLightProbe) {
          for (let t = 0; t < 9; t++)
            i.probe[t].addScaledVector(x.sh.coefficients[t], M);
          v++;
        } else if (x.isDirectionalLight) {
          const t = e.get(x);
          if (
            (t.color.copy(x.color).multiplyScalar(x.intensity), x.castShadow)
          ) {
            const t = x.shadow,
              e = n.get(x);
            (e.shadowIntensity = t.intensity),
              (e.shadowBias = t.bias),
              (e.shadowNormalBias = t.normalBias),
              (e.shadowRadius = t.radius),
              (e.shadowMapSize = t.mapSize),
              (i.directionalShadow[l] = e),
              (i.directionalShadowMap[l] = E),
              (i.directionalShadowMatrix[l] = x.shadow.matrix),
              p++;
          }
          (i.directional[l] = t), l++;
        } else if (x.isSpotLight) {
          const t = e.get(x);
          t.position.setFromMatrixPosition(x.matrixWorld),
            t.color.copy(y).multiplyScalar(M),
            (t.distance = S),
            (t.coneCos = Math.cos(x.angle)),
            (t.penumbraCos = Math.cos(x.angle * (1 - x.penumbra))),
            (t.decay = x.decay),
            (i.spot[h] = t);
          const r = x.shadow;
          if (
            (x.map &&
              ((i.spotLightMap[g] = x.map),
              g++,
              r.updateMatrices(x),
              x.castShadow && _++),
            (i.spotLightMatrix[h] = r.matrix),
            x.castShadow)
          ) {
            const t = n.get(x);
            (t.shadowIntensity = r.intensity),
              (t.shadowBias = r.bias),
              (t.shadowNormalBias = r.normalBias),
              (t.shadowRadius = r.radius),
              (t.shadowMapSize = r.mapSize),
              (i.spotShadow[h] = t),
              (i.spotShadowMap[h] = E),
              m++;
          }
          h++;
        } else if (x.isRectAreaLight) {
          const t = e.get(x);
          t.color.copy(y).multiplyScalar(M),
            t.halfWidth.set(0.5 * x.width, 0, 0),
            t.halfHeight.set(0, 0.5 * x.height, 0),
            (i.rectArea[u] = t),
            u++;
        } else if (x.isPointLight) {
          const t = e.get(x);
          if (
            (t.color.copy(x.color).multiplyScalar(x.intensity),
            (t.distance = x.distance),
            (t.decay = x.decay),
            x.castShadow)
          ) {
            const t = x.shadow,
              e = n.get(x);
            (e.shadowIntensity = t.intensity),
              (e.shadowBias = t.bias),
              (e.shadowNormalBias = t.normalBias),
              (e.shadowRadius = t.radius),
              (e.shadowMapSize = t.mapSize),
              (e.shadowCameraNear = t.camera.near),
              (e.shadowCameraFar = t.camera.far),
              (i.pointShadow[c] = e),
              (i.pointShadowMap[c] = E),
              (i.pointShadowMatrix[c] = x.shadow.matrix),
              f++;
          }
          (i.point[c] = t), c++;
        } else if (x.isHemisphereLight) {
          const t = e.get(x);
          t.skyColor.copy(x.color).multiplyScalar(M),
            t.groundColor.copy(x.groundColor).multiplyScalar(M),
            (i.hemi[d] = t),
            d++;
        }
      }
      u > 0 &&
        (!0 === t.has("OES_texture_float_linear")
          ? ((i.rectAreaLTC1 = Wr.LTC_FLOAT_1),
            (i.rectAreaLTC2 = Wr.LTC_FLOAT_2))
          : ((i.rectAreaLTC1 = Wr.LTC_HALF_1),
            (i.rectAreaLTC2 = Wr.LTC_HALF_2))),
        (i.ambient[0] = a),
        (i.ambient[1] = s),
        (i.ambient[2] = o);
      const x = i.hash;
      (x.directionalLength === l &&
        x.pointLength === c &&
        x.spotLength === h &&
        x.rectAreaLength === u &&
        x.hemiLength === d &&
        x.numDirectionalShadows === p &&
        x.numPointShadows === f &&
        x.numSpotShadows === m &&
        x.numSpotMaps === g &&
        x.numLightProbes === v) ||
        ((i.directional.length = l),
        (i.spot.length = h),
        (i.rectArea.length = u),
        (i.point.length = c),
        (i.hemi.length = d),
        (i.directionalShadow.length = p),
        (i.directionalShadowMap.length = p),
        (i.pointShadow.length = f),
        (i.pointShadowMap.length = f),
        (i.spotShadow.length = m),
        (i.spotShadowMap.length = m),
        (i.directionalShadowMatrix.length = p),
        (i.pointShadowMatrix.length = f),
        (i.spotLightMatrix.length = m + g - _),
        (i.spotLightMap.length = g),
        (i.numSpotLightShadowsWithMaps = _),
        (i.numLightProbes = v),
        (x.directionalLength = l),
        (x.pointLength = c),
        (x.spotLength = h),
        (x.rectAreaLength = u),
        (x.hemiLength = d),
        (x.numDirectionalShadows = p),
        (x.numPointShadows = f),
        (x.numSpotShadows = m),
        (x.numSpotMaps = g),
        (x.numLightProbes = v),
        (i.version = co++));
    },
    setupView: function (t, e) {
      let n = 0,
        o = 0,
        l = 0,
        c = 0,
        h = 0;
      const u = e.matrixWorldInverse;
      for (let d = 0, p = t.length; d < p; d++) {
        const e = t[d];
        if (e.isDirectionalLight) {
          const t = i.directional[n];
          t.direction.setFromMatrixPosition(e.matrixWorld),
            r.setFromMatrixPosition(e.target.matrixWorld),
            t.direction.sub(r),
            t.direction.transformDirection(u),
            n++;
        } else if (e.isSpotLight) {
          const t = i.spot[l];
          t.position.setFromMatrixPosition(e.matrixWorld),
            t.position.applyMatrix4(u),
            t.direction.setFromMatrixPosition(e.matrixWorld),
            r.setFromMatrixPosition(e.target.matrixWorld),
            t.direction.sub(r),
            t.direction.transformDirection(u),
            l++;
        } else if (e.isRectAreaLight) {
          const t = i.rectArea[c];
          t.position.setFromMatrixPosition(e.matrixWorld),
            t.position.applyMatrix4(u),
            s.identity(),
            a.copy(e.matrixWorld),
            a.premultiply(u),
            s.extractRotation(a),
            t.halfWidth.set(0.5 * e.width, 0, 0),
            t.halfHeight.set(0, 0.5 * e.height, 0),
            t.halfWidth.applyMatrix4(s),
            t.halfHeight.applyMatrix4(s),
            c++;
        } else if (e.isPointLight) {
          const t = i.point[o];
          t.position.setFromMatrixPosition(e.matrixWorld),
            t.position.applyMatrix4(u),
            o++;
        } else if (e.isHemisphereLight) {
          const t = i.hemi[h];
          t.direction.setFromMatrixPosition(e.matrixWorld),
            t.direction.transformDirection(u),
            h++;
        }
      }
    },
    state: i,
  };
}
function po(t) {
  const e = new uo(t),
    n = [],
    i = [];
  const r = {
    lightsArray: n,
    shadowsArray: i,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: function (t) {
      (r.camera = t), (n.length = 0), (i.length = 0);
    },
    state: r,
    setupLights: function () {
      e.setup(n);
    },
    setupLightsView: function (t) {
      e.setupView(n, t);
    },
    pushLight: function (t) {
      n.push(t);
    },
    pushShadow: function (t) {
      i.push(t);
    },
  };
}
function fo(t) {
  let e = new WeakMap();
  return {
    get: function (n, i = 0) {
      const r = e.get(n);
      let a;
      return (
        void 0 === r
          ? ((a = new po(t)), e.set(n, [a]))
          : i >= r.length
          ? ((a = new po(t)), r.push(a))
          : (a = r[i]),
        a
      );
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
class mo extends Gi {
  static get type() {
    return "MeshDepthMaterial";
  }
  constructor(t) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.depthPacking = t.depthPacking),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      this
    );
  }
}
class go extends Gi {
  static get type() {
    return "MeshDistanceMaterial";
  }
  constructor(t) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      this
    );
  }
}
function _o(t, e, n) {
  let i = new zr();
  const r = new ke(),
    a = new ke(),
    o = new dn(),
    d = new mo({ depthPacking: 3201 }),
    p = new go(),
    f = {},
    m = n.maxTextureSize,
    g = { [c]: h, [h]: c, [u]: 2 },
    _ = new Er({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new ke() },
        radius: { value: 4 },
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader:
        "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
    }),
    v = _.clone();
  v.defines.HORIZONTAL_PASS = 1;
  const x = new rr();
  x.setAttribute(
    "position",
    new qi(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const y = new gr(x, _),
    M = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = s);
  let S = this.type;
  function E(n, i) {
    const a = e.update(y);
    _.defines.VSM_SAMPLES !== n.blurSamples &&
      ((_.defines.VSM_SAMPLES = n.blurSamples),
      (v.defines.VSM_SAMPLES = n.blurSamples),
      (_.needsUpdate = !0),
      (v.needsUpdate = !0)),
      null === n.mapPass && (n.mapPass = new fn(r.x, r.y)),
      (_.uniforms.shadow_pass.value = n.map.texture),
      (_.uniforms.resolution.value = n.mapSize),
      (_.uniforms.radius.value = n.radius),
      t.setRenderTarget(n.mapPass),
      t.clear(),
      t.renderBufferDirect(i, null, a, _, y, null),
      (v.uniforms.shadow_pass.value = n.mapPass.texture),
      (v.uniforms.resolution.value = n.mapSize),
      (v.uniforms.radius.value = n.radius),
      t.setRenderTarget(n.map),
      t.clear(),
      t.renderBufferDirect(i, null, a, v, y, null);
  }
  function T(e, n, i, r) {
    let a = null;
    const s =
      !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
    if (void 0 !== s) a = s;
    else if (
      ((a = !0 === i.isPointLight ? p : d),
      (t.localClippingEnabled &&
        !0 === n.clipShadows &&
        Array.isArray(n.clippingPlanes) &&
        0 !== n.clippingPlanes.length) ||
        (n.displacementMap && 0 !== n.displacementScale) ||
        (n.alphaMap && n.alphaTest > 0) ||
        (n.map && n.alphaTest > 0))
    ) {
      const t = a.uuid,
        e = n.uuid;
      let i = f[t];
      void 0 === i && ((i = {}), (f[t] = i));
      let r = i[e];
      void 0 === r &&
        ((r = a.clone()), (i[e] = r), n.addEventListener("dispose", A)),
        (a = r);
    }
    if (
      ((a.visible = n.visible),
      (a.wireframe = n.wireframe),
      (a.side =
        r === l
          ? null !== n.shadowSide
            ? n.shadowSide
            : n.side
          : null !== n.shadowSide
          ? n.shadowSide
          : g[n.side]),
      (a.alphaMap = n.alphaMap),
      (a.alphaTest = n.alphaTest),
      (a.map = n.map),
      (a.clipShadows = n.clipShadows),
      (a.clippingPlanes = n.clippingPlanes),
      (a.clipIntersection = n.clipIntersection),
      (a.displacementMap = n.displacementMap),
      (a.displacementScale = n.displacementScale),
      (a.displacementBias = n.displacementBias),
      (a.wireframeLinewidth = n.wireframeLinewidth),
      (a.linewidth = n.linewidth),
      !0 === i.isPointLight && !0 === a.isMeshDistanceMaterial)
    ) {
      t.properties.get(a).light = i;
    }
    return a;
  }
  function b(n, r, a, s, o) {
    if (!1 === n.visible) return;
    if (
      n.layers.test(r.layers) &&
      (n.isMesh || n.isLine || n.isPoints) &&
      (n.castShadow || (n.receiveShadow && o === l)) &&
      (!n.frustumCulled || i.intersectsObject(n))
    ) {
      n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
      const i = e.update(n),
        l = n.material;
      if (Array.isArray(l)) {
        const e = i.groups;
        for (let c = 0, h = e.length; c < h; c++) {
          const h = e[c],
            u = l[h.materialIndex];
          if (u && u.visible) {
            const e = T(n, u, s, o);
            n.onBeforeShadow(t, n, r, a, i, e, h),
              t.renderBufferDirect(a, null, i, e, n, h),
              n.onAfterShadow(t, n, r, a, i, e, h);
          }
        }
      } else if (l.visible) {
        const e = T(n, l, s, o);
        n.onBeforeShadow(t, n, r, a, i, e, null),
          t.renderBufferDirect(a, null, i, e, n, null),
          n.onAfterShadow(t, n, r, a, i, e, null);
      }
    }
    const c = n.children;
    for (let t = 0, e = c.length; t < e; t++) b(c[t], r, a, s, o);
  }
  function A(t) {
    t.target.removeEventListener("dispose", A);
    for (const e in f) {
      const n = f[e],
        i = t.target.uuid;
      if (i in n) {
        n[i].dispose(), delete n[i];
      }
    }
  }
  this.render = function (e, n, s) {
    if (!1 === M.enabled) return;
    if (!1 === M.autoUpdate && !1 === M.needsUpdate) return;
    if (0 === e.length) return;
    const c = t.getRenderTarget(),
      h = t.getActiveCubeFace(),
      u = t.getActiveMipmapLevel(),
      d = t.state;
    d.setBlending(0),
      d.buffers.color.setClear(1, 1, 1, 1),
      d.buffers.depth.setTest(!0),
      d.setScissorTest(!1);
    const p = S !== l && this.type === l,
      f = S === l && this.type !== l;
    for (let g = 0, _ = e.length; g < _; g++) {
      const c = e[g],
        h = c.shadow;
      if (void 0 === h) continue;
      if (!1 === h.autoUpdate && !1 === h.needsUpdate) continue;
      r.copy(h.mapSize);
      const u = h.getFrameExtents();
      if (
        (r.multiply(u),
        a.copy(h.mapSize),
        (r.x > m || r.y > m) &&
          (r.x > m &&
            ((a.x = Math.floor(m / u.x)),
            (r.x = a.x * u.x),
            (h.mapSize.x = a.x)),
          r.y > m &&
            ((a.y = Math.floor(m / u.y)),
            (r.y = a.y * u.y),
            (h.mapSize.y = a.y))),
        null === h.map || !0 === p || !0 === f)
      ) {
        const t = this.type !== l ? { minFilter: nt, magFilter: nt } : {};
        null !== h.map && h.map.dispose(),
          (h.map = new fn(r.x, r.y, t)),
          (h.map.texture.name = c.name + ".shadowMap"),
          h.camera.updateProjectionMatrix();
      }
      t.setRenderTarget(h.map), t.clear();
      const _ = h.getViewportCount();
      for (let t = 0; t < _; t++) {
        const e = h.getViewport(t);
        o.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w),
          d.viewport(o),
          h.updateMatrices(c, t),
          (i = h.getFrustum()),
          b(n, s, h.camera, c, this.type);
      }
      !0 !== h.isPointLightShadow && this.type === l && E(h, s),
        (h.needsUpdate = !1);
    }
    (S = this.type), (M.needsUpdate = !1), t.setRenderTarget(c, h, u);
  };
}
const vo = { [L]: 1, [D]: 6, [N]: 7, [I]: 5, [U]: 0, [F]: 2, [B]: 4, [O]: 3 };
function xo(t, e) {
  const n = new (function () {
      let e = !1;
      const n = new dn();
      let i = null;
      const r = new dn(0, 0, 0, 0);
      return {
        setMask: function (n) {
          i === n || e || (t.colorMask(n, n, n, n), (i = n));
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e, i, a, s, o) {
          !0 === o && ((e *= s), (i *= s), (a *= s)),
            n.set(e, i, a, s),
            !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n));
        },
        reset: function () {
          (e = !1), (i = null), r.set(-1, 0, 0, 0);
        },
      };
    })(),
    i = new (function () {
      let n = !1,
        i = !1,
        r = null,
        a = null,
        s = null;
      return {
        setReversed: function (t) {
          if (i !== t) {
            const t = e.get("EXT_clip_control");
            i
              ? t.clipControlEXT(t.LOWER_LEFT_EXT, t.ZERO_TO_ONE_EXT)
              : t.clipControlEXT(t.LOWER_LEFT_EXT, t.NEGATIVE_ONE_TO_ONE_EXT);
            const n = s;
            (s = null), this.setClear(n);
          }
          i = t;
        },
        getReversed: function () {
          return i;
        },
        setTest: function (e) {
          e ? at(t.DEPTH_TEST) : st(t.DEPTH_TEST);
        },
        setMask: function (e) {
          r === e || n || (t.depthMask(e), (r = e));
        },
        setFunc: function (e) {
          if ((i && (e = vo[e]), a !== e)) {
            switch (e) {
              case 0:
                t.depthFunc(t.NEVER);
                break;
              case 1:
                t.depthFunc(t.ALWAYS);
                break;
              case 2:
                t.depthFunc(t.LESS);
                break;
              case 3:
              default:
                t.depthFunc(t.LEQUAL);
                break;
              case 4:
                t.depthFunc(t.EQUAL);
                break;
              case 5:
                t.depthFunc(t.GEQUAL);
                break;
              case 6:
                t.depthFunc(t.GREATER);
                break;
              case 7:
                t.depthFunc(t.NOTEQUAL);
            }
            a = e;
          }
        },
        setLocked: function (t) {
          n = t;
        },
        setClear: function (e) {
          s !== e && (i && (e = 1 - e), t.clearDepth(e), (s = e));
        },
        reset: function () {
          (n = !1), (r = null), (a = null), (s = null), (i = !1);
        },
      };
    })(),
    r = new (function () {
      let e = !1,
        n = null,
        i = null,
        r = null,
        a = null,
        s = null,
        o = null,
        l = null,
        c = null;
      return {
        setTest: function (n) {
          e || (n ? at(t.STENCIL_TEST) : st(t.STENCIL_TEST));
        },
        setMask: function (i) {
          n === i || e || (t.stencilMask(i), (n = i));
        },
        setFunc: function (e, n, s) {
          (i === e && r === n && a === s) ||
            (t.stencilFunc(e, n, s), (i = e), (r = n), (a = s));
        },
        setOp: function (e, n, i) {
          (s === e && o === n && l === i) ||
            (t.stencilOp(e, n, i), (s = e), (o = n), (l = i));
        },
        setLocked: function (t) {
          e = t;
        },
        setClear: function (e) {
          c !== e && (t.clearStencil(e), (c = e));
        },
        reset: function () {
          (e = !1),
            (n = null),
            (i = null),
            (r = null),
            (a = null),
            (s = null),
            (o = null),
            (l = null),
            (c = null);
        },
      };
    })(),
    a = new WeakMap(),
    s = new WeakMap();
  let o = {},
    l = {},
    c = new WeakMap(),
    u = [],
    d = null,
    L = !1,
    U = null,
    D = null,
    I = null,
    N = null,
    O = null,
    F = null,
    B = null,
    z = new Vi(0, 0, 0),
    V = 0,
    H = !1,
    k = null,
    G = null,
    W = null,
    X = null,
    j = null;
  const q = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let Y = !1,
    Z = 0;
  const J = t.getParameter(t.VERSION);
  -1 !== J.indexOf("WebGL")
    ? ((Z = parseFloat(/^WebGL (\d)/.exec(J)[1])), (Y = Z >= 1))
    : -1 !== J.indexOf("OpenGL ES") &&
      ((Z = parseFloat(/^OpenGL ES (\d)/.exec(J)[1])), (Y = Z >= 2));
  let K = null,
    $ = {};
  const Q = t.getParameter(t.SCISSOR_BOX),
    tt = t.getParameter(t.VIEWPORT),
    et = new dn().fromArray(Q),
    nt = new dn().fromArray(tt);
  function it(e, n, i, r) {
    const a = new Uint8Array(4),
      s = t.createTexture();
    t.bindTexture(e, s),
      t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
      t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
    for (let o = 0; o < i; o++)
      e === t.TEXTURE_3D || e === t.TEXTURE_2D_ARRAY
        ? t.texImage3D(n, 0, t.RGBA, 1, 1, r, 0, t.RGBA, t.UNSIGNED_BYTE, a)
        : t.texImage2D(n + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, a);
    return s;
  }
  const rt = {};
  function at(e) {
    !0 !== o[e] && (t.enable(e), (o[e] = !0));
  }
  function st(e) {
    !1 !== o[e] && (t.disable(e), (o[e] = !1));
  }
  (rt[t.TEXTURE_2D] = it(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
    (rt[t.TEXTURE_CUBE_MAP] = it(
      t.TEXTURE_CUBE_MAP,
      t.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (rt[t.TEXTURE_2D_ARRAY] = it(t.TEXTURE_2D_ARRAY, t.TEXTURE_2D_ARRAY, 1, 1)),
    (rt[t.TEXTURE_3D] = it(t.TEXTURE_3D, t.TEXTURE_3D, 1, 1)),
    n.setClear(0, 0, 0, 1),
    i.setClear(1),
    r.setClear(0),
    at(t.DEPTH_TEST),
    i.setFunc(3),
    ht(!1),
    ut(1),
    at(t.CULL_FACE),
    ct(0);
  const ot = {
    [p]: t.FUNC_ADD,
    [f]: t.FUNC_SUBTRACT,
    [m]: t.FUNC_REVERSE_SUBTRACT,
  };
  (ot[103] = t.MIN), (ot[104] = t.MAX);
  const lt = {
    [g]: t.ZERO,
    [_]: t.ONE,
    [v]: t.SRC_COLOR,
    [y]: t.SRC_ALPHA,
    [A]: t.SRC_ALPHA_SATURATE,
    [T]: t.DST_COLOR,
    [S]: t.DST_ALPHA,
    [x]: t.ONE_MINUS_SRC_COLOR,
    [M]: t.ONE_MINUS_SRC_ALPHA,
    [b]: t.ONE_MINUS_DST_COLOR,
    [E]: t.ONE_MINUS_DST_ALPHA,
    [w]: t.CONSTANT_COLOR,
    [R]: t.ONE_MINUS_CONSTANT_COLOR,
    [C]: t.CONSTANT_ALPHA,
    [P]: t.ONE_MINUS_CONSTANT_ALPHA,
  };
  function ct(e, n, i, r, a, s, o, l, c, h) {
    if (0 !== e) {
      if ((!1 === L && (at(t.BLEND), (L = !0)), 5 === e))
        (a = a || n),
          (s = s || i),
          (o = o || r),
          (n === D && a === O) ||
            (t.blendEquationSeparate(ot[n], ot[a]), (D = n), (O = a)),
          (i === I && r === N && s === F && o === B) ||
            (t.blendFuncSeparate(lt[i], lt[r], lt[s], lt[o]),
            (I = i),
            (N = r),
            (F = s),
            (B = o)),
          (!1 !== l.equals(z) && c === V) ||
            (t.blendColor(l.r, l.g, l.b, c), z.copy(l), (V = c)),
          (U = e),
          (H = !1);
      else if (e !== U || h !== H) {
        if (
          ((D === p && O === p) ||
            (t.blendEquation(t.FUNC_ADD), (D = p), (O = p)),
          h)
        )
          switch (e) {
            case 1:
              t.blendFuncSeparate(
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA,
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              t.blendFunc(t.ONE, t.ONE);
              break;
            case 3:
              t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
              break;
            case 4:
              t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
          }
        else
          switch (e) {
            case 1:
              t.blendFuncSeparate(
                t.SRC_ALPHA,
                t.ONE_MINUS_SRC_ALPHA,
                t.ONE,
                t.ONE_MINUS_SRC_ALPHA
              );
              break;
            case 2:
              t.blendFunc(t.SRC_ALPHA, t.ONE);
              break;
            case 3:
              t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
              break;
            case 4:
              t.blendFunc(t.ZERO, t.SRC_COLOR);
          }
        (I = null),
          (N = null),
          (F = null),
          (B = null),
          z.set(0, 0, 0),
          (V = 0),
          (U = e),
          (H = h);
      }
    } else !0 === L && (st(t.BLEND), (L = !1));
  }
  function ht(e) {
    k !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), (k = e));
  }
  function ut(e) {
    0 !== e
      ? (at(t.CULL_FACE),
        e !== G &&
          (1 === e
            ? t.cullFace(t.BACK)
            : 2 === e
            ? t.cullFace(t.FRONT)
            : t.cullFace(t.FRONT_AND_BACK)))
      : st(t.CULL_FACE),
      (G = e);
  }
  function dt(e, n, i) {
    e
      ? (at(t.POLYGON_OFFSET_FILL),
        (X === n && j === i) || (t.polygonOffset(n, i), (X = n), (j = i)))
      : st(t.POLYGON_OFFSET_FILL);
  }
  return {
    buffers: { color: n, depth: i, stencil: r },
    enable: at,
    disable: st,
    bindFramebuffer: function (e, n) {
      return (
        l[e] !== n &&
        (t.bindFramebuffer(e, n),
        (l[e] = n),
        e === t.DRAW_FRAMEBUFFER && (l[t.FRAMEBUFFER] = n),
        e === t.FRAMEBUFFER && (l[t.DRAW_FRAMEBUFFER] = n),
        !0)
      );
    },
    drawBuffers: function (e, n) {
      let i = u,
        r = !1;
      if (e) {
        (i = c.get(n)), void 0 === i && ((i = []), c.set(n, i));
        const a = e.textures;
        if (i.length !== a.length || i[0] !== t.COLOR_ATTACHMENT0) {
          for (let e = 0, n = a.length; e < n; e++)
            i[e] = t.COLOR_ATTACHMENT0 + e;
          (i.length = a.length), (r = !0);
        }
      } else i[0] !== t.BACK && ((i[0] = t.BACK), (r = !0));
      r && t.drawBuffers(i);
    },
    useProgram: function (e) {
      return d !== e && (t.useProgram(e), (d = e), !0);
    },
    setBlending: ct,
    setMaterial: function (e, a) {
      2 === e.side ? st(t.CULL_FACE) : at(t.CULL_FACE);
      let s = e.side === h;
      a && (s = !s),
        ht(s),
        1 === e.blending && !1 === e.transparent
          ? ct(0)
          : ct(
              e.blending,
              e.blendEquation,
              e.blendSrc,
              e.blendDst,
              e.blendEquationAlpha,
              e.blendSrcAlpha,
              e.blendDstAlpha,
              e.blendColor,
              e.blendAlpha,
              e.premultipliedAlpha
            ),
        i.setFunc(e.depthFunc),
        i.setTest(e.depthTest),
        i.setMask(e.depthWrite),
        n.setMask(e.colorWrite);
      const o = e.stencilWrite;
      r.setTest(o),
        o &&
          (r.setMask(e.stencilWriteMask),
          r.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
          r.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
        dt(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
        !0 === e.alphaToCoverage
          ? at(t.SAMPLE_ALPHA_TO_COVERAGE)
          : st(t.SAMPLE_ALPHA_TO_COVERAGE);
    },
    setFlipSided: ht,
    setCullFace: ut,
    setLineWidth: function (e) {
      e !== W && (Y && t.lineWidth(e), (W = e));
    },
    setPolygonOffset: dt,
    setScissorTest: function (e) {
      e ? at(t.SCISSOR_TEST) : st(t.SCISSOR_TEST);
    },
    activeTexture: function (e) {
      void 0 === e && (e = t.TEXTURE0 + q - 1),
        K !== e && (t.activeTexture(e), (K = e));
    },
    bindTexture: function (e, n, i) {
      void 0 === i && (i = null === K ? t.TEXTURE0 + q - 1 : K);
      let r = $[i];
      void 0 === r && ((r = { type: void 0, texture: void 0 }), ($[i] = r)),
        (r.type === e && r.texture === n) ||
          (K !== i && (t.activeTexture(i), (K = i)),
          t.bindTexture(e, n || rt[e]),
          (r.type = e),
          (r.texture = n));
    },
    unbindTexture: function () {
      const e = $[K];
      void 0 !== e &&
        void 0 !== e.type &&
        (t.bindTexture(e.type, null), (e.type = void 0), (e.texture = void 0));
    },
    compressedTexImage2D: function () {
      try {
        t.compressedTexImage2D.apply(t, arguments);
      } catch (e) {}
    },
    compressedTexImage3D: function () {
      try {
        t.compressedTexImage3D.apply(t, arguments);
      } catch (e) {}
    },
    texImage2D: function () {
      try {
        t.texImage2D.apply(t, arguments);
      } catch (e) {}
    },
    texImage3D: function () {
      try {
        t.texImage3D.apply(t, arguments);
      } catch (e) {}
    },
    updateUBOMapping: function (e, n) {
      let i = s.get(n);
      void 0 === i && ((i = new WeakMap()), s.set(n, i));
      let r = i.get(e);
      void 0 === r && ((r = t.getUniformBlockIndex(n, e.name)), i.set(e, r));
    },
    uniformBlockBinding: function (e, n) {
      const i = s.get(n).get(e);
      a.get(n) !== i &&
        (t.uniformBlockBinding(n, i, e.__bindingPointIndex), a.set(n, i));
    },
    texStorage2D: function () {
      try {
        t.texStorage2D.apply(t, arguments);
      } catch (e) {}
    },
    texStorage3D: function () {
      try {
        t.texStorage3D.apply(t, arguments);
      } catch (e) {}
    },
    texSubImage2D: function () {
      try {
        t.texSubImage2D.apply(t, arguments);
      } catch (e) {}
    },
    texSubImage3D: function () {
      try {
        t.texSubImage3D.apply(t, arguments);
      } catch (e) {}
    },
    compressedTexSubImage2D: function () {
      try {
        t.compressedTexSubImage2D.apply(t, arguments);
      } catch (e) {}
    },
    compressedTexSubImage3D: function () {
      try {
        t.compressedTexSubImage3D.apply(t, arguments);
      } catch (e) {}
    },
    scissor: function (e) {
      !1 === et.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), et.copy(e));
    },
    viewport: function (e) {
      !1 === nt.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), nt.copy(e));
    },
    reset: function () {
      t.disable(t.BLEND),
        t.disable(t.CULL_FACE),
        t.disable(t.DEPTH_TEST),
        t.disable(t.POLYGON_OFFSET_FILL),
        t.disable(t.SCISSOR_TEST),
        t.disable(t.STENCIL_TEST),
        t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
        t.blendEquation(t.FUNC_ADD),
        t.blendFunc(t.ONE, t.ZERO),
        t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
        t.blendColor(0, 0, 0, 0),
        t.colorMask(!0, !0, !0, !0),
        t.clearColor(0, 0, 0, 0),
        t.depthMask(!0),
        t.depthFunc(t.LESS),
        i.setReversed(!1),
        t.clearDepth(1),
        t.stencilMask(4294967295),
        t.stencilFunc(t.ALWAYS, 0, 4294967295),
        t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
        t.clearStencil(0),
        t.cullFace(t.BACK),
        t.frontFace(t.CCW),
        t.polygonOffset(0, 0),
        t.activeTexture(t.TEXTURE0),
        t.bindFramebuffer(t.FRAMEBUFFER, null),
        t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
        t.bindFramebuffer(t.READ_FRAMEBUFFER, null),
        t.useProgram(null),
        t.lineWidth(1),
        t.scissor(0, 0, t.canvas.width, t.canvas.height),
        t.viewport(0, 0, t.canvas.width, t.canvas.height),
        (o = {}),
        (K = null),
        ($ = {}),
        (l = {}),
        (c = new WeakMap()),
        (u = []),
        (d = null),
        (L = !1),
        (U = null),
        (D = null),
        (I = null),
        (N = null),
        (O = null),
        (F = null),
        (B = null),
        (z = new Vi(0, 0, 0)),
        (V = 0),
        (H = !1),
        (k = null),
        (G = null),
        (W = null),
        (X = null),
        (j = null),
        et.set(0, 0, t.canvas.width, t.canvas.height),
        nt.set(0, 0, t.canvas.width, t.canvas.height),
        n.reset(),
        i.reset(),
        r.reset();
    },
  };
}
function yo(t, e, n, i) {
  const r = (function (t) {
    switch (t) {
      case lt:
      case ct:
        return { byteLength: 1, components: 1 };
      case ut:
      case ht:
      case mt:
        return { byteLength: 2, components: 1 };
      case gt:
      case _t:
        return { byteLength: 2, components: 4 };
      case pt:
      case dt:
      case ft:
        return { byteLength: 4, components: 1 };
      case xt:
        return { byteLength: 4, components: 3 };
    }
    throw new Error(`Unknown texture type ${t}.`);
  })(i);
  switch (n) {
    case yt:
    case Et:
      return t * e;
    case Tt:
      return t * e * 2;
    case wt:
    case Rt:
      return ((t * e) / r.components) * r.byteLength;
    case Ct:
    case Pt:
      return ((t * e * 2) / r.components) * r.byteLength;
    case Mt:
      return ((t * e * 3) / r.components) * r.byteLength;
    case St:
    case Lt:
      return ((t * e * 4) / r.components) * r.byteLength;
    case Ut:
    case Dt:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case It:
    case Nt:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ft:
    case zt:
      return (Math.max(t, 16) * Math.max(e, 8)) / 4;
    case Ot:
    case Bt:
      return (Math.max(t, 8) * Math.max(e, 8)) / 2;
    case Vt:
    case Ht:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case kt:
    case Gt:
      return Math.floor((t + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Wt:
      return Math.floor((t + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case Xt:
      return Math.floor((t + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case jt:
      return Math.floor((t + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case qt:
      return Math.floor((t + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Yt:
      return Math.floor((t + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Zt:
      return Math.floor((t + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Jt:
      return Math.floor((t + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Kt:
      return Math.floor((t + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case $t:
      return Math.floor((t + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Qt:
      return Math.floor((t + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case te:
      return Math.floor((t + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case ee:
      return Math.floor((t + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case ne:
      return Math.floor((t + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case ie:
    case re:
    case ae:
      return Math.ceil(t / 4) * Math.ceil(e / 4) * 16;
    case se:
    case oe:
      return Math.ceil(t / 4) * Math.ceil(e / 4) * 8;
    case le:
    case ce:
      return Math.ceil(t / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${n} format.`);
}
function Mo(t, e, n, i, r, a, s) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      "undefined" != typeof navigator &&
      /OculusBrowser/g.test(navigator.userAgent),
    c = new ke(),
    h = new WeakMap();
  let u;
  const d = new WeakMap();
  let p = !1;
  try {
    p =
      "undefined" != typeof OffscreenCanvas &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (k) {}
  function f(t, e) {
    return p ? new OffscreenCanvas(t, e) : je("canvas");
  }
  function m(t, e, n) {
    let i = 1;
    const r = H(t);
    if (
      ((r.width > n || r.height > n) && (i = n / Math.max(r.width, r.height)),
      i < 1)
    ) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          t instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          t instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap) ||
        ("undefined" != typeof VideoFrame && t instanceof VideoFrame)
      ) {
        const n = Math.floor(i * r.width),
          a = Math.floor(i * r.height);
        void 0 === u && (u = f(n, a));
        const s = e ? f(n, a) : u;
        (s.width = n), (s.height = a);
        return s.getContext("2d").drawImage(t, 0, 0, n, a), s;
      }
      return t;
    }
    return t;
  }
  function g(t) {
    return t.generateMipmaps;
  }
  function _(e) {
    t.generateMipmap(e);
  }
  function v(e) {
    return e.isWebGLCubeRenderTarget
      ? t.TEXTURE_CUBE_MAP
      : e.isWebGL3DRenderTarget
      ? t.TEXTURE_3D
      : e.isWebGLArrayRenderTarget || e.isCompressedArrayTexture
      ? t.TEXTURE_2D_ARRAY
      : t.TEXTURE_2D;
  }
  function x(n, i, r, a, s = !1) {
    if (null !== n && void 0 !== t[n]) return t[n];
    let o = i;
    if (
      (i === t.RED &&
        (r === t.FLOAT && (o = t.R32F),
        r === t.HALF_FLOAT && (o = t.R16F),
        r === t.UNSIGNED_BYTE && (o = t.R8)),
      i === t.RED_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.R8UI),
        r === t.UNSIGNED_SHORT && (o = t.R16UI),
        r === t.UNSIGNED_INT && (o = t.R32UI),
        r === t.BYTE && (o = t.R8I),
        r === t.SHORT && (o = t.R16I),
        r === t.INT && (o = t.R32I)),
      i === t.RG &&
        (r === t.FLOAT && (o = t.RG32F),
        r === t.HALF_FLOAT && (o = t.RG16F),
        r === t.UNSIGNED_BYTE && (o = t.RG8)),
      i === t.RG_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.RG8UI),
        r === t.UNSIGNED_SHORT && (o = t.RG16UI),
        r === t.UNSIGNED_INT && (o = t.RG32UI),
        r === t.BYTE && (o = t.RG8I),
        r === t.SHORT && (o = t.RG16I),
        r === t.INT && (o = t.RG32I)),
      i === t.RGB_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.RGB8UI),
        r === t.UNSIGNED_SHORT && (o = t.RGB16UI),
        r === t.UNSIGNED_INT && (o = t.RGB32UI),
        r === t.BYTE && (o = t.RGB8I),
        r === t.SHORT && (o = t.RGB16I),
        r === t.INT && (o = t.RGB32I)),
      i === t.RGBA_INTEGER &&
        (r === t.UNSIGNED_BYTE && (o = t.RGBA8UI),
        r === t.UNSIGNED_SHORT && (o = t.RGBA16UI),
        r === t.UNSIGNED_INT && (o = t.RGBA32UI),
        r === t.BYTE && (o = t.RGBA8I),
        r === t.SHORT && (o = t.RGBA16I),
        r === t.INT && (o = t.RGBA32I)),
      i === t.RGB && r === t.UNSIGNED_INT_5_9_9_9_REV && (o = t.RGB9_E5),
      i === t.RGBA)
    ) {
      const e = s ? me : Je.getTransfer(a);
      r === t.FLOAT && (o = t.RGBA32F),
        r === t.HALF_FLOAT && (o = t.RGBA16F),
        r === t.UNSIGNED_BYTE && (o = e === ge ? t.SRGB8_ALPHA8 : t.RGBA8),
        r === t.UNSIGNED_SHORT_4_4_4_4 && (o = t.RGBA4),
        r === t.UNSIGNED_SHORT_5_5_5_1 && (o = t.RGB5_A1);
    }
    return (
      (o !== t.R16F &&
        o !== t.R32F &&
        o !== t.RG16F &&
        o !== t.RG32F &&
        o !== t.RGBA16F &&
        o !== t.RGBA32F) ||
        e.get("EXT_color_buffer_float"),
      o
    );
  }
  function y(e, n) {
    let i;
    return (
      e
        ? null === n || n === pt || n === vt
          ? (i = t.DEPTH24_STENCIL8)
          : n === ft
          ? (i = t.DEPTH32F_STENCIL8)
          : n === ut && (i = t.DEPTH24_STENCIL8)
        : null === n || n === pt || n === vt
        ? (i = t.DEPTH_COMPONENT24)
        : n === ft
        ? (i = t.DEPTH_COMPONENT32F)
        : n === ut && (i = t.DEPTH_COMPONENT16),
      i
    );
  }
  function M(t, e) {
    return !0 === g(t) ||
      (t.isFramebufferTexture && t.minFilter !== nt && t.minFilter !== at)
      ? Math.log2(Math.max(e.width, e.height)) + 1
      : void 0 !== t.mipmaps && t.mipmaps.length > 0
      ? t.mipmaps.length
      : t.isCompressedTexture && Array.isArray(t.image)
      ? e.mipmaps.length
      : 1;
  }
  function S(t) {
    const e = t.target;
    e.removeEventListener("dispose", S),
      (function (t) {
        const e = i.get(t);
        if (void 0 === e.__webglInit) return;
        const n = t.source,
          r = d.get(n);
        if (r) {
          const i = r[e.__cacheKey];
          i.usedTimes--,
            0 === i.usedTimes && T(t),
            0 === Object.keys(r).length && d.delete(n);
        }
        i.remove(t);
      })(e),
      e.isVideoTexture && h.delete(e);
  }
  function E(e) {
    const n = e.target;
    n.removeEventListener("dispose", E),
      (function (e) {
        const n = i.get(e);
        e.depthTexture && (e.depthTexture.dispose(), i.remove(e.depthTexture));
        if (e.isWebGLCubeRenderTarget)
          for (let i = 0; i < 6; i++) {
            if (Array.isArray(n.__webglFramebuffer[i]))
              for (let e = 0; e < n.__webglFramebuffer[i].length; e++)
                t.deleteFramebuffer(n.__webglFramebuffer[i][e]);
            else t.deleteFramebuffer(n.__webglFramebuffer[i]);
            n.__webglDepthbuffer &&
              t.deleteRenderbuffer(n.__webglDepthbuffer[i]);
          }
        else {
          if (Array.isArray(n.__webglFramebuffer))
            for (let e = 0; e < n.__webglFramebuffer.length; e++)
              t.deleteFramebuffer(n.__webglFramebuffer[e]);
          else t.deleteFramebuffer(n.__webglFramebuffer);
          if (
            (n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer),
            n.__webglMultisampledFramebuffer &&
              t.deleteFramebuffer(n.__webglMultisampledFramebuffer),
            n.__webglColorRenderbuffer)
          )
            for (let e = 0; e < n.__webglColorRenderbuffer.length; e++)
              n.__webglColorRenderbuffer[e] &&
                t.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);
          n.__webglDepthRenderbuffer &&
            t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
        }
        const r = e.textures;
        for (let a = 0, o = r.length; a < o; a++) {
          const e = i.get(r[a]);
          e.__webglTexture &&
            (t.deleteTexture(e.__webglTexture), s.memory.textures--),
            i.remove(r[a]);
        }
        i.remove(e);
      })(n);
  }
  function T(e) {
    const n = i.get(e);
    t.deleteTexture(n.__webglTexture);
    const r = e.source;
    delete d.get(r)[n.__cacheKey], s.memory.textures--;
  }
  let b = 0;
  function A(e, r) {
    const a = i.get(e);
    if (
      (e.isVideoTexture &&
        (function (t) {
          const e = s.render.frame;
          h.get(t) !== e && (h.set(t, e), t.update());
        })(e),
      !1 === e.isRenderTargetTexture &&
        e.version > 0 &&
        a.__version !== e.version)
    ) {
      const t = e.image;
      if (null === t);
      else if (!1 !== t.complete) return void U(a, e, r);
    }
    n.bindTexture(t.TEXTURE_2D, a.__webglTexture, t.TEXTURE0 + r);
  }
  const w = { [Q]: t.REPEAT, [tt]: t.CLAMP_TO_EDGE, [et]: t.MIRRORED_REPEAT },
    R = {
      [nt]: t.NEAREST,
      [it]: t.NEAREST_MIPMAP_NEAREST,
      [rt]: t.NEAREST_MIPMAP_LINEAR,
      [at]: t.LINEAR,
      [st]: t.LINEAR_MIPMAP_NEAREST,
      [ot]: t.LINEAR_MIPMAP_LINEAR,
    },
    C = {
      [ve]: t.NEVER,
      [be]: t.ALWAYS,
      [xe]: t.LESS,
      [Me]: t.LEQUAL,
      [ye]: t.EQUAL,
      [Te]: t.GEQUAL,
      [Se]: t.GREATER,
      [Ee]: t.NOTEQUAL,
    };
  function P(n, a) {
    if (
      (a.type === ft &&
        !1 === e.has("OES_texture_float_linear") &&
        (a.magFilter === at ||
          a.magFilter === st ||
          a.magFilter === rt ||
          a.magFilter === ot ||
          a.minFilter === at ||
          a.minFilter === st ||
          a.minFilter === rt ||
          a.minFilter),
      t.texParameteri(n, t.TEXTURE_WRAP_S, w[a.wrapS]),
      t.texParameteri(n, t.TEXTURE_WRAP_T, w[a.wrapT]),
      (n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY) ||
        t.texParameteri(n, t.TEXTURE_WRAP_R, w[a.wrapR]),
      t.texParameteri(n, t.TEXTURE_MAG_FILTER, R[a.magFilter]),
      t.texParameteri(n, t.TEXTURE_MIN_FILTER, R[a.minFilter]),
      a.compareFunction &&
        (t.texParameteri(n, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE),
        t.texParameteri(n, t.TEXTURE_COMPARE_FUNC, C[a.compareFunction])),
      !0 === e.has("EXT_texture_filter_anisotropic"))
    ) {
      if (a.magFilter === nt) return;
      if (a.minFilter !== rt && a.minFilter !== ot) return;
      if (a.type === ft && !1 === e.has("OES_texture_float_linear")) return;
      if (a.anisotropy > 1 || i.get(a).__currentAnisotropy) {
        const s = e.get("EXT_texture_filter_anisotropic");
        t.texParameterf(
          n,
          s.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(a.anisotropy, r.getMaxAnisotropy())
        ),
          (i.get(a).__currentAnisotropy = a.anisotropy);
      }
    }
  }
  function L(e, n) {
    let i = !1;
    void 0 === e.__webglInit &&
      ((e.__webglInit = !0), n.addEventListener("dispose", S));
    const r = n.source;
    let a = d.get(r);
    void 0 === a && ((a = {}), d.set(r, a));
    const o = (function (t) {
      const e = [];
      return (
        e.push(t.wrapS),
        e.push(t.wrapT),
        e.push(t.wrapR || 0),
        e.push(t.magFilter),
        e.push(t.minFilter),
        e.push(t.anisotropy),
        e.push(t.internalFormat),
        e.push(t.format),
        e.push(t.type),
        e.push(t.generateMipmaps),
        e.push(t.premultiplyAlpha),
        e.push(t.flipY),
        e.push(t.unpackAlignment),
        e.push(t.colorSpace),
        e.join()
      );
    })(n);
    if (o !== e.__cacheKey) {
      void 0 === a[o] &&
        ((a[o] = { texture: t.createTexture(), usedTimes: 0 }),
        s.memory.textures++,
        (i = !0)),
        a[o].usedTimes++;
      const r = a[e.__cacheKey];
      void 0 !== r && (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && T(n)),
        (e.__cacheKey = o),
        (e.__webglTexture = a[o].texture);
    }
    return i;
  }
  function U(e, s, o) {
    let l = t.TEXTURE_2D;
    (s.isDataArrayTexture || s.isCompressedArrayTexture) &&
      (l = t.TEXTURE_2D_ARRAY),
      s.isData3DTexture && (l = t.TEXTURE_3D);
    const c = L(e, s),
      h = s.source;
    n.bindTexture(l, e.__webglTexture, t.TEXTURE0 + o);
    const u = i.get(h);
    if (h.version !== u.__version || !0 === c) {
      n.activeTexture(t.TEXTURE0 + o);
      const e = Je.getPrimaries(Je.workingColorSpace),
        i = s.colorSpace === de ? null : Je.getPrimaries(s.colorSpace),
        d = s.colorSpace === de || e === i ? t.NONE : t.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, s.flipY),
        t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha),
        t.pixelStorei(t.UNPACK_ALIGNMENT, s.unpackAlignment),
        t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
      let p = m(s.image, !1, r.maxTextureSize);
      p = V(s, p);
      const f = a.convert(s.format, s.colorSpace),
        v = a.convert(s.type);
      let S,
        E = x(s.internalFormat, f, v, s.colorSpace, s.isVideoTexture);
      P(l, s);
      const T = s.mipmaps,
        b = !0 !== s.isVideoTexture,
        A = void 0 === u.__version || !0 === c,
        w = h.dataReady,
        R = M(s, p);
      if (s.isDepthTexture)
        (E = y(s.format === At, s.type)),
          A &&
            (b
              ? n.texStorage2D(t.TEXTURE_2D, 1, E, p.width, p.height)
              : n.texImage2D(
                  t.TEXTURE_2D,
                  0,
                  E,
                  p.width,
                  p.height,
                  0,
                  f,
                  v,
                  null
                ));
      else if (s.isDataTexture)
        if (T.length > 0) {
          b && A && n.texStorage2D(t.TEXTURE_2D, R, E, T[0].width, T[0].height);
          for (let e = 0, i = T.length; e < i; e++)
            (S = T[e]),
              b
                ? w &&
                  n.texSubImage2D(
                    t.TEXTURE_2D,
                    e,
                    0,
                    0,
                    S.width,
                    S.height,
                    f,
                    v,
                    S.data
                  )
                : n.texImage2D(
                    t.TEXTURE_2D,
                    e,
                    E,
                    S.width,
                    S.height,
                    0,
                    f,
                    v,
                    S.data
                  );
          s.generateMipmaps = !1;
        } else
          b
            ? (A && n.texStorage2D(t.TEXTURE_2D, R, E, p.width, p.height),
              w &&
                n.texSubImage2D(
                  t.TEXTURE_2D,
                  0,
                  0,
                  0,
                  p.width,
                  p.height,
                  f,
                  v,
                  p.data
                ))
            : n.texImage2D(
                t.TEXTURE_2D,
                0,
                E,
                p.width,
                p.height,
                0,
                f,
                v,
                p.data
              );
      else if (s.isCompressedTexture)
        if (s.isCompressedArrayTexture) {
          b &&
            A &&
            n.texStorage3D(
              t.TEXTURE_2D_ARRAY,
              R,
              E,
              T[0].width,
              T[0].height,
              p.depth
            );
          for (let e = 0, i = T.length; e < i; e++)
            if (((S = T[e]), s.format !== St)) {
              if (null !== f)
                if (b) {
                  if (w)
                    if (s.layerUpdates.size > 0) {
                      const i = yo(S.width, S.height, s.format, s.type);
                      for (const r of s.layerUpdates) {
                        const a = S.data.subarray(
                          (r * i) / S.data.BYTES_PER_ELEMENT,
                          ((r + 1) * i) / S.data.BYTES_PER_ELEMENT
                        );
                        n.compressedTexSubImage3D(
                          t.TEXTURE_2D_ARRAY,
                          e,
                          0,
                          0,
                          r,
                          S.width,
                          S.height,
                          1,
                          f,
                          a
                        );
                      }
                      s.clearLayerUpdates();
                    } else
                      n.compressedTexSubImage3D(
                        t.TEXTURE_2D_ARRAY,
                        e,
                        0,
                        0,
                        0,
                        S.width,
                        S.height,
                        p.depth,
                        f,
                        S.data
                      );
                } else
                  n.compressedTexImage3D(
                    t.TEXTURE_2D_ARRAY,
                    e,
                    E,
                    S.width,
                    S.height,
                    p.depth,
                    0,
                    S.data,
                    0,
                    0
                  );
            } else
              b
                ? w &&
                  n.texSubImage3D(
                    t.TEXTURE_2D_ARRAY,
                    e,
                    0,
                    0,
                    0,
                    S.width,
                    S.height,
                    p.depth,
                    f,
                    v,
                    S.data
                  )
                : n.texImage3D(
                    t.TEXTURE_2D_ARRAY,
                    e,
                    E,
                    S.width,
                    S.height,
                    p.depth,
                    0,
                    f,
                    v,
                    S.data
                  );
        } else {
          b && A && n.texStorage2D(t.TEXTURE_2D, R, E, T[0].width, T[0].height);
          for (let e = 0, i = T.length; e < i; e++)
            (S = T[e]),
              s.format !== St
                ? null !== f &&
                  (b
                    ? w &&
                      n.compressedTexSubImage2D(
                        t.TEXTURE_2D,
                        e,
                        0,
                        0,
                        S.width,
                        S.height,
                        f,
                        S.data
                      )
                    : n.compressedTexImage2D(
                        t.TEXTURE_2D,
                        e,
                        E,
                        S.width,
                        S.height,
                        0,
                        S.data
                      ))
                : b
                ? w &&
                  n.texSubImage2D(
                    t.TEXTURE_2D,
                    e,
                    0,
                    0,
                    S.width,
                    S.height,
                    f,
                    v,
                    S.data
                  )
                : n.texImage2D(
                    t.TEXTURE_2D,
                    e,
                    E,
                    S.width,
                    S.height,
                    0,
                    f,
                    v,
                    S.data
                  );
        }
      else if (s.isDataArrayTexture)
        if (b) {
          if (
            (A &&
              n.texStorage3D(
                t.TEXTURE_2D_ARRAY,
                R,
                E,
                p.width,
                p.height,
                p.depth
              ),
            w)
          )
            if (s.layerUpdates.size > 0) {
              const e = yo(p.width, p.height, s.format, s.type);
              for (const i of s.layerUpdates) {
                const r = p.data.subarray(
                  (i * e) / p.data.BYTES_PER_ELEMENT,
                  ((i + 1) * e) / p.data.BYTES_PER_ELEMENT
                );
                n.texSubImage3D(
                  t.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  i,
                  p.width,
                  p.height,
                  1,
                  f,
                  v,
                  r
                );
              }
              s.clearLayerUpdates();
            } else
              n.texSubImage3D(
                t.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                p.width,
                p.height,
                p.depth,
                f,
                v,
                p.data
              );
        } else
          n.texImage3D(
            t.TEXTURE_2D_ARRAY,
            0,
            E,
            p.width,
            p.height,
            p.depth,
            0,
            f,
            v,
            p.data
          );
      else if (s.isData3DTexture)
        b
          ? (A &&
              n.texStorage3D(t.TEXTURE_3D, R, E, p.width, p.height, p.depth),
            w &&
              n.texSubImage3D(
                t.TEXTURE_3D,
                0,
                0,
                0,
                0,
                p.width,
                p.height,
                p.depth,
                f,
                v,
                p.data
              ))
          : n.texImage3D(
              t.TEXTURE_3D,
              0,
              E,
              p.width,
              p.height,
              p.depth,
              0,
              f,
              v,
              p.data
            );
      else if (s.isFramebufferTexture) {
        if (A)
          if (b) n.texStorage2D(t.TEXTURE_2D, R, E, p.width, p.height);
          else {
            let e = p.width,
              i = p.height;
            for (let r = 0; r < R; r++)
              n.texImage2D(t.TEXTURE_2D, r, E, e, i, 0, f, v, null),
                (e >>= 1),
                (i >>= 1);
          }
      } else if (T.length > 0) {
        if (b && A) {
          const e = H(T[0]);
          n.texStorage2D(t.TEXTURE_2D, R, E, e.width, e.height);
        }
        for (let e = 0, i = T.length; e < i; e++)
          (S = T[e]),
            b
              ? w && n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, f, v, S)
              : n.texImage2D(t.TEXTURE_2D, e, E, f, v, S);
        s.generateMipmaps = !1;
      } else if (b) {
        if (A) {
          const e = H(p);
          n.texStorage2D(t.TEXTURE_2D, R, E, e.width, e.height);
        }
        w && n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, f, v, p);
      } else n.texImage2D(t.TEXTURE_2D, 0, E, f, v, p);
      g(s) && _(l), (u.__version = h.version), s.onUpdate && s.onUpdate(s);
    }
    e.__version = s.version;
  }
  function D(e, r, s, l, c, h) {
    const u = a.convert(s.format, s.colorSpace),
      d = a.convert(s.type),
      p = x(s.internalFormat, u, d, s.colorSpace),
      f = i.get(r),
      m = i.get(s);
    if (((m.__renderTarget = r), !f.__hasExternalTextures)) {
      const e = Math.max(1, r.width >> h),
        i = Math.max(1, r.height >> h);
      c === t.TEXTURE_3D || c === t.TEXTURE_2D_ARRAY
        ? n.texImage3D(c, h, p, e, i, r.depth, 0, u, d, null)
        : n.texImage2D(c, h, p, e, i, 0, u, d, null);
    }
    n.bindFramebuffer(t.FRAMEBUFFER, e),
      z(r)
        ? o.framebufferTexture2DMultisampleEXT(
            t.FRAMEBUFFER,
            l,
            c,
            m.__webglTexture,
            0,
            B(r)
          )
        : (c === t.TEXTURE_2D ||
            (c >= t.TEXTURE_CUBE_MAP_POSITIVE_X &&
              c <= t.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          t.framebufferTexture2D(t.FRAMEBUFFER, l, c, m.__webglTexture, h),
      n.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  function I(e, n, i) {
    if ((t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer)) {
      const r = n.depthTexture,
        a = r && r.isDepthTexture ? r.type : null,
        s = y(n.stencilBuffer, a),
        l = n.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT,
        c = B(n);
      z(n)
        ? o.renderbufferStorageMultisampleEXT(
            t.RENDERBUFFER,
            c,
            s,
            n.width,
            n.height
          )
        : i
        ? t.renderbufferStorageMultisample(
            t.RENDERBUFFER,
            c,
            s,
            n.width,
            n.height
          )
        : t.renderbufferStorage(t.RENDERBUFFER, s, n.width, n.height),
        t.framebufferRenderbuffer(t.FRAMEBUFFER, l, t.RENDERBUFFER, e);
    } else {
      const e = n.textures;
      for (let r = 0; r < e.length; r++) {
        const s = e[r],
          l = a.convert(s.format, s.colorSpace),
          c = a.convert(s.type),
          h = x(s.internalFormat, l, c, s.colorSpace),
          u = B(n);
        i && !1 === z(n)
          ? t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              u,
              h,
              n.width,
              n.height
            )
          : z(n)
          ? o.renderbufferStorageMultisampleEXT(
              t.RENDERBUFFER,
              u,
              h,
              n.width,
              n.height
            )
          : t.renderbufferStorage(t.RENDERBUFFER, h, n.width, n.height);
      }
    }
    t.bindRenderbuffer(t.RENDERBUFFER, null);
  }
  function N(e) {
    const r = i.get(e),
      a = !0 === e.isWebGLCubeRenderTarget;
    if (r.__boundDepthTexture !== e.depthTexture) {
      const t = e.depthTexture;
      if ((r.__depthDisposeCallback && r.__depthDisposeCallback(), t)) {
        const e = () => {
          delete r.__boundDepthTexture,
            delete r.__depthDisposeCallback,
            t.removeEventListener("dispose", e);
        };
        t.addEventListener("dispose", e), (r.__depthDisposeCallback = e);
      }
      r.__boundDepthTexture = t;
    }
    if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
      if (a)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      !(function (e, r) {
        if (r && r.isWebGLCubeRenderTarget)
          throw new Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (n.bindFramebuffer(t.FRAMEBUFFER, e),
          !r.depthTexture || !r.depthTexture.isDepthTexture)
        )
          throw new Error(
            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
          );
        const a = i.get(r.depthTexture);
        (a.__renderTarget = r),
          (a.__webglTexture &&
            r.depthTexture.image.width === r.width &&
            r.depthTexture.image.height === r.height) ||
            ((r.depthTexture.image.width = r.width),
            (r.depthTexture.image.height = r.height),
            (r.depthTexture.needsUpdate = !0)),
          A(r.depthTexture, 0);
        const s = a.__webglTexture,
          l = B(r);
        if (r.depthTexture.format === bt)
          z(r)
            ? o.framebufferTexture2DMultisampleEXT(
                t.FRAMEBUFFER,
                t.DEPTH_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0,
                l
              )
            : t.framebufferTexture2D(
                t.FRAMEBUFFER,
                t.DEPTH_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0
              );
        else {
          if (r.depthTexture.format !== At)
            throw new Error("Unknown depthTexture format");
          z(r)
            ? o.framebufferTexture2DMultisampleEXT(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0,
                l
              )
            : t.framebufferTexture2D(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.TEXTURE_2D,
                s,
                0
              );
        }
      })(r.__webglFramebuffer, e);
    } else if (a) {
      r.__webglDepthbuffer = [];
      for (let i = 0; i < 6; i++)
        if (
          (n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]),
          void 0 === r.__webglDepthbuffer[i])
        )
          (r.__webglDepthbuffer[i] = t.createRenderbuffer()),
            I(r.__webglDepthbuffer[i], e, !1);
        else {
          const n = e.stencilBuffer
              ? t.DEPTH_STENCIL_ATTACHMENT
              : t.DEPTH_ATTACHMENT,
            a = r.__webglDepthbuffer[i];
          t.bindRenderbuffer(t.RENDERBUFFER, a),
            t.framebufferRenderbuffer(t.FRAMEBUFFER, n, t.RENDERBUFFER, a);
        }
    } else if (
      (n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer),
      void 0 === r.__webglDepthbuffer)
    )
      (r.__webglDepthbuffer = t.createRenderbuffer()),
        I(r.__webglDepthbuffer, e, !1);
    else {
      const n = e.stencilBuffer
          ? t.DEPTH_STENCIL_ATTACHMENT
          : t.DEPTH_ATTACHMENT,
        i = r.__webglDepthbuffer;
      t.bindRenderbuffer(t.RENDERBUFFER, i),
        t.framebufferRenderbuffer(t.FRAMEBUFFER, n, t.RENDERBUFFER, i);
    }
    n.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  const O = [],
    F = [];
  function B(t) {
    return Math.min(r.maxSamples, t.samples);
  }
  function z(t) {
    const n = i.get(t);
    return (
      t.samples > 0 &&
      !0 === e.has("WEBGL_multisampled_render_to_texture") &&
      !1 !== n.__useRenderToTexture
    );
  }
  function V(t, e) {
    const n = t.colorSpace;
    t.format, t.type;
    return (
      !0 === t.isCompressedTexture ||
        !0 === t.isVideoTexture ||
        (n !== fe && n !== de && Je.getTransfer(n)),
      e
    );
  }
  function H(t) {
    return (
      "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement
        ? ((c.width = t.naturalWidth || t.width),
          (c.height = t.naturalHeight || t.height))
        : "undefined" != typeof VideoFrame && t instanceof VideoFrame
        ? ((c.width = t.displayWidth), (c.height = t.displayHeight))
        : ((c.width = t.width), (c.height = t.height)),
      c
    );
  }
  (this.allocateTextureUnit = function () {
    const t = b;
    return r.maxTextures, (b += 1), t;
  }),
    (this.resetTextureUnits = function () {
      b = 0;
    }),
    (this.setTexture2D = A),
    (this.setTexture2DArray = function (e, r) {
      const a = i.get(e);
      e.version > 0 && a.__version !== e.version
        ? U(a, e, r)
        : n.bindTexture(t.TEXTURE_2D_ARRAY, a.__webglTexture, t.TEXTURE0 + r);
    }),
    (this.setTexture3D = function (e, r) {
      const a = i.get(e);
      e.version > 0 && a.__version !== e.version
        ? U(a, e, r)
        : n.bindTexture(t.TEXTURE_3D, a.__webglTexture, t.TEXTURE0 + r);
    }),
    (this.setTextureCube = function (e, s) {
      const o = i.get(e);
      e.version > 0 && o.__version !== e.version
        ? (function (e, s, o) {
            if (6 !== s.image.length) return;
            const l = L(e, s),
              c = s.source;
            n.bindTexture(t.TEXTURE_CUBE_MAP, e.__webglTexture, t.TEXTURE0 + o);
            const h = i.get(c);
            if (c.version !== h.__version || !0 === l) {
              n.activeTexture(t.TEXTURE0 + o);
              const e = Je.getPrimaries(Je.workingColorSpace),
                i = s.colorSpace === de ? null : Je.getPrimaries(s.colorSpace),
                u =
                  s.colorSpace === de || e === i
                    ? t.NONE
                    : t.BROWSER_DEFAULT_WEBGL;
              t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, s.flipY),
                t.pixelStorei(
                  t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                  s.premultiplyAlpha
                ),
                t.pixelStorei(t.UNPACK_ALIGNMENT, s.unpackAlignment),
                t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, u);
              const d = s.isCompressedTexture || s.image[0].isCompressedTexture,
                p = s.image[0] && s.image[0].isDataTexture,
                f = [];
              for (let t = 0; t < 6; t++)
                (f[t] =
                  d || p
                    ? p
                      ? s.image[t].image
                      : s.image[t]
                    : m(s.image[t], !0, r.maxCubemapSize)),
                  (f[t] = V(s, f[t]));
              const v = f[0],
                y = a.convert(s.format, s.colorSpace),
                S = a.convert(s.type),
                E = x(s.internalFormat, y, S, s.colorSpace),
                T = !0 !== s.isVideoTexture,
                b = void 0 === h.__version || !0 === l,
                A = c.dataReady;
              let w,
                R = M(s, v);
              if ((P(t.TEXTURE_CUBE_MAP, s), d)) {
                T &&
                  b &&
                  n.texStorage2D(t.TEXTURE_CUBE_MAP, R, E, v.width, v.height);
                for (let e = 0; e < 6; e++) {
                  w = f[e].mipmaps;
                  for (let i = 0; i < w.length; i++) {
                    const r = w[i];
                    s.format !== St
                      ? null !== y &&
                        (T
                          ? A &&
                            n.compressedTexSubImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i,
                              0,
                              0,
                              r.width,
                              r.height,
                              y,
                              r.data
                            )
                          : n.compressedTexImage2D(
                              t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                              i,
                              E,
                              r.width,
                              r.height,
                              0,
                              r.data
                            ))
                      : T
                      ? A &&
                        n.texSubImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          i,
                          0,
                          0,
                          r.width,
                          r.height,
                          y,
                          S,
                          r.data
                        )
                      : n.texImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          i,
                          E,
                          r.width,
                          r.height,
                          0,
                          y,
                          S,
                          r.data
                        );
                  }
                }
              } else {
                if (((w = s.mipmaps), T && b)) {
                  w.length > 0 && R++;
                  const e = H(f[0]);
                  n.texStorage2D(t.TEXTURE_CUBE_MAP, R, E, e.width, e.height);
                }
                for (let e = 0; e < 6; e++)
                  if (p) {
                    T
                      ? A &&
                        n.texSubImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          0,
                          0,
                          f[e].width,
                          f[e].height,
                          y,
                          S,
                          f[e].data
                        )
                      : n.texImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          E,
                          f[e].width,
                          f[e].height,
                          0,
                          y,
                          S,
                          f[e].data
                        );
                    for (let i = 0; i < w.length; i++) {
                      const r = w[i].image[e].image;
                      T
                        ? A &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            0,
                            0,
                            r.width,
                            r.height,
                            y,
                            S,
                            r.data
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            E,
                            r.width,
                            r.height,
                            0,
                            y,
                            S,
                            r.data
                          );
                    }
                  } else {
                    T
                      ? A &&
                        n.texSubImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          0,
                          0,
                          y,
                          S,
                          f[e]
                        )
                      : n.texImage2D(
                          t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                          0,
                          E,
                          y,
                          S,
                          f[e]
                        );
                    for (let i = 0; i < w.length; i++) {
                      const r = w[i];
                      T
                        ? A &&
                          n.texSubImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            0,
                            0,
                            y,
                            S,
                            r.image[e]
                          )
                        : n.texImage2D(
                            t.TEXTURE_CUBE_MAP_POSITIVE_X + e,
                            i + 1,
                            E,
                            y,
                            S,
                            r.image[e]
                          );
                    }
                  }
              }
              g(s) && _(t.TEXTURE_CUBE_MAP),
                (h.__version = c.version),
                s.onUpdate && s.onUpdate(s);
            }
            e.__version = s.version;
          })(o, e, s)
        : n.bindTexture(t.TEXTURE_CUBE_MAP, o.__webglTexture, t.TEXTURE0 + s);
    }),
    (this.rebindTextures = function (e, n, r) {
      const a = i.get(e);
      void 0 !== n &&
        D(
          a.__webglFramebuffer,
          e,
          e.texture,
          t.COLOR_ATTACHMENT0,
          t.TEXTURE_2D,
          0
        ),
        void 0 !== r && N(e);
    }),
    (this.setupRenderTarget = function (e) {
      const r = e.texture,
        o = i.get(e),
        l = i.get(r);
      e.addEventListener("dispose", E);
      const c = e.textures,
        h = !0 === e.isWebGLCubeRenderTarget,
        u = c.length > 1;
      if (
        (u ||
          (void 0 === l.__webglTexture &&
            (l.__webglTexture = t.createTexture()),
          (l.__version = r.version),
          s.memory.textures++),
        h)
      ) {
        o.__webglFramebuffer = [];
        for (let e = 0; e < 6; e++)
          if (r.mipmaps && r.mipmaps.length > 0) {
            o.__webglFramebuffer[e] = [];
            for (let n = 0; n < r.mipmaps.length; n++)
              o.__webglFramebuffer[e][n] = t.createFramebuffer();
          } else o.__webglFramebuffer[e] = t.createFramebuffer();
      } else {
        if (r.mipmaps && r.mipmaps.length > 0) {
          o.__webglFramebuffer = [];
          for (let e = 0; e < r.mipmaps.length; e++)
            o.__webglFramebuffer[e] = t.createFramebuffer();
        } else o.__webglFramebuffer = t.createFramebuffer();
        if (u)
          for (let e = 0, n = c.length; e < n; e++) {
            const n = i.get(c[e]);
            void 0 === n.__webglTexture &&
              ((n.__webglTexture = t.createTexture()), s.memory.textures++);
          }
        if (e.samples > 0 && !1 === z(e)) {
          (o.__webglMultisampledFramebuffer = t.createFramebuffer()),
            (o.__webglColorRenderbuffer = []),
            n.bindFramebuffer(t.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
          for (let n = 0; n < c.length; n++) {
            const i = c[n];
            (o.__webglColorRenderbuffer[n] = t.createRenderbuffer()),
              t.bindRenderbuffer(t.RENDERBUFFER, o.__webglColorRenderbuffer[n]);
            const r = a.convert(i.format, i.colorSpace),
              s = a.convert(i.type),
              l = x(
                i.internalFormat,
                r,
                s,
                i.colorSpace,
                !0 === e.isXRRenderTarget
              ),
              h = B(e);
            t.renderbufferStorageMultisample(
              t.RENDERBUFFER,
              h,
              l,
              e.width,
              e.height
            ),
              t.framebufferRenderbuffer(
                t.FRAMEBUFFER,
                t.COLOR_ATTACHMENT0 + n,
                t.RENDERBUFFER,
                o.__webglColorRenderbuffer[n]
              );
          }
          t.bindRenderbuffer(t.RENDERBUFFER, null),
            e.depthBuffer &&
              ((o.__webglDepthRenderbuffer = t.createRenderbuffer()),
              I(o.__webglDepthRenderbuffer, e, !0)),
            n.bindFramebuffer(t.FRAMEBUFFER, null);
        }
      }
      if (h) {
        n.bindTexture(t.TEXTURE_CUBE_MAP, l.__webglTexture),
          P(t.TEXTURE_CUBE_MAP, r);
        for (let n = 0; n < 6; n++)
          if (r.mipmaps && r.mipmaps.length > 0)
            for (let i = 0; i < r.mipmaps.length; i++)
              D(
                o.__webglFramebuffer[n][i],
                e,
                r,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                i
              );
          else
            D(
              o.__webglFramebuffer[n],
              e,
              r,
              t.COLOR_ATTACHMENT0,
              t.TEXTURE_CUBE_MAP_POSITIVE_X + n,
              0
            );
        g(r) && _(t.TEXTURE_CUBE_MAP), n.unbindTexture();
      } else if (u) {
        for (let r = 0, a = c.length; r < a; r++) {
          const a = c[r],
            s = i.get(a);
          n.bindTexture(t.TEXTURE_2D, s.__webglTexture),
            P(t.TEXTURE_2D, a),
            D(
              o.__webglFramebuffer,
              e,
              a,
              t.COLOR_ATTACHMENT0 + r,
              t.TEXTURE_2D,
              0
            ),
            g(a) && _(t.TEXTURE_2D);
        }
        n.unbindTexture();
      } else {
        let i = t.TEXTURE_2D;
        if (
          ((e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) &&
            (i = e.isWebGL3DRenderTarget ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY),
          n.bindTexture(i, l.__webglTexture),
          P(i, r),
          r.mipmaps && r.mipmaps.length > 0)
        )
          for (let n = 0; n < r.mipmaps.length; n++)
            D(o.__webglFramebuffer[n], e, r, t.COLOR_ATTACHMENT0, i, n);
        else D(o.__webglFramebuffer, e, r, t.COLOR_ATTACHMENT0, i, 0);
        g(r) && _(i), n.unbindTexture();
      }
      e.depthBuffer && N(e);
    }),
    (this.updateRenderTargetMipmap = function (t) {
      const e = t.textures;
      for (let r = 0, a = e.length; r < a; r++) {
        const a = e[r];
        if (g(a)) {
          const e = v(t),
            r = i.get(a).__webglTexture;
          n.bindTexture(e, r), _(e), n.unbindTexture();
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function (e) {
      if (e.samples > 0)
        if (!1 === z(e)) {
          const r = e.textures,
            a = e.width,
            s = e.height;
          let o = t.COLOR_BUFFER_BIT;
          const c = e.stencilBuffer
              ? t.DEPTH_STENCIL_ATTACHMENT
              : t.DEPTH_ATTACHMENT,
            h = i.get(e),
            u = r.length > 1;
          if (u)
            for (let e = 0; e < r.length; e++)
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  null
                ),
                n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  null,
                  0
                );
          n.bindFramebuffer(
            t.READ_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          ),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
          for (let n = 0; n < r.length; n++) {
            if (
              (e.resolveDepthBuffer &&
                (e.depthBuffer && (o |= t.DEPTH_BUFFER_BIT),
                e.stencilBuffer &&
                  e.resolveStencilBuffer &&
                  (o |= t.STENCIL_BUFFER_BIT)),
              u)
            ) {
              t.framebufferRenderbuffer(
                t.READ_FRAMEBUFFER,
                t.COLOR_ATTACHMENT0,
                t.RENDERBUFFER,
                h.__webglColorRenderbuffer[n]
              );
              const e = i.get(r[n]).__webglTexture;
              t.framebufferTexture2D(
                t.DRAW_FRAMEBUFFER,
                t.COLOR_ATTACHMENT0,
                t.TEXTURE_2D,
                e,
                0
              );
            }
            t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, t.NEAREST),
              !0 === l &&
                ((O.length = 0),
                (F.length = 0),
                O.push(t.COLOR_ATTACHMENT0 + n),
                e.depthBuffer &&
                  !1 === e.resolveDepthBuffer &&
                  (O.push(c),
                  F.push(c),
                  t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, F)),
                t.invalidateFramebuffer(t.READ_FRAMEBUFFER, O));
          }
          if (
            (n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
            n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
            u)
          )
            for (let e = 0; e < r.length; e++) {
              n.bindFramebuffer(
                t.FRAMEBUFFER,
                h.__webglMultisampledFramebuffer
              ),
                t.framebufferRenderbuffer(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.RENDERBUFFER,
                  h.__webglColorRenderbuffer[e]
                );
              const a = i.get(r[e]).__webglTexture;
              n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer),
                t.framebufferTexture2D(
                  t.DRAW_FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + e,
                  t.TEXTURE_2D,
                  a,
                  0
                );
            }
          n.bindFramebuffer(
            t.DRAW_FRAMEBUFFER,
            h.__webglMultisampledFramebuffer
          );
        } else if (e.depthBuffer && !1 === e.resolveDepthBuffer && l) {
          const n = e.stencilBuffer
            ? t.DEPTH_STENCIL_ATTACHMENT
            : t.DEPTH_ATTACHMENT;
          t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [n]);
        }
    }),
    (this.setupDepthRenderbuffer = N),
    (this.setupFrameBufferTexture = D),
    (this.useMultisampledRTT = z);
}
function So(t, e) {
  return {
    convert: function (n, i = "") {
      let r;
      const a = Je.getTransfer(i);
      if (n === lt) return t.UNSIGNED_BYTE;
      if (n === gt) return t.UNSIGNED_SHORT_4_4_4_4;
      if (n === _t) return t.UNSIGNED_SHORT_5_5_5_1;
      if (n === xt) return t.UNSIGNED_INT_5_9_9_9_REV;
      if (n === ct) return t.BYTE;
      if (n === ht) return t.SHORT;
      if (n === ut) return t.UNSIGNED_SHORT;
      if (n === dt) return t.INT;
      if (n === pt) return t.UNSIGNED_INT;
      if (n === ft) return t.FLOAT;
      if (n === mt) return t.HALF_FLOAT;
      if (n === yt) return t.ALPHA;
      if (n === Mt) return t.RGB;
      if (n === St) return t.RGBA;
      if (n === Et) return t.LUMINANCE;
      if (n === Tt) return t.LUMINANCE_ALPHA;
      if (n === bt) return t.DEPTH_COMPONENT;
      if (n === At) return t.DEPTH_STENCIL;
      if (n === wt) return t.RED;
      if (n === Rt) return t.RED_INTEGER;
      if (n === Ct) return t.RG;
      if (n === Pt) return t.RG_INTEGER;
      if (n === Lt) return t.RGBA_INTEGER;
      if (n === Ut || n === Dt || n === It || n === Nt)
        if (a === ge) {
          if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), null === r))
            return null;
          if (n === Ut) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Dt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === It) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Nt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (((r = e.get("WEBGL_compressed_texture_s3tc")), null === r))
            return null;
          if (n === Ut) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (n === Dt) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (n === It) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (n === Nt) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      if (n === Ot || n === Ft || n === Bt || n === zt) {
        if (((r = e.get("WEBGL_compressed_texture_pvrtc")), null === r))
          return null;
        if (n === Ot) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ft) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Bt) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === zt) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n === Vt || n === Ht || n === kt) {
        if (((r = e.get("WEBGL_compressed_texture_etc")), null === r))
          return null;
        if (n === Vt || n === Ht)
          return a === ge ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === kt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (
        n === Gt ||
        n === Wt ||
        n === Xt ||
        n === jt ||
        n === qt ||
        n === Yt ||
        n === Zt ||
        n === Jt ||
        n === Kt ||
        n === $t ||
        n === Qt ||
        n === te ||
        n === ee ||
        n === ne
      ) {
        if (((r = e.get("WEBGL_compressed_texture_astc")), null === r))
          return null;
        if (n === Gt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === Wt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Xt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === jt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === qt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === Yt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Zt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === Jt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Kt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === $t)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Qt)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === te)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === ee)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === ne)
          return a === ge
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n === ie || n === re || n === ae) {
        if (((r = e.get("EXT_texture_compression_bptc")), null === r))
          return null;
        if (n === ie)
          return a === ge
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === re) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === ae) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (n === se || n === oe || n === le || n === ce) {
        if (((r = e.get("EXT_texture_compression_rgtc")), null === r))
          return null;
        if (n === ie) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === oe) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === le) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === ce) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n === vt ? t.UNSIGNED_INT_24_8 : void 0 !== t[n] ? t[n] : null;
    },
  };
}
class Eo extends Rr {
  constructor(t = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = t);
  }
}
class To extends Mi {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const bo = { type: "move" };
class Ao {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new To()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new To()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new vn()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new vn())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new To()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new vn()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new vn())),
      this._grip
    );
  }
  dispatchEvent(t) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(t),
      null !== this._grip && this._grip.dispatchEvent(t),
      null !== this._hand && this._hand.dispatchEvent(t),
      this
    );
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return (
      this.dispatchEvent({ type: "disconnected", data: t }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(t, e, n) {
    let i = null,
      r = null,
      a = null;
    const s = this._targetRay,
      o = this._grip,
      l = this._hand;
    if (t && "visible-blurred" !== e.session.visibilityState) {
      if (l && t.hand) {
        a = !0;
        for (const a of t.hand.values()) {
          const t = e.getJointPose(a, n),
            i = this._getHandJoint(l, a);
          null !== t &&
            (i.matrix.fromArray(t.transform.matrix),
            i.matrix.decompose(i.position, i.rotation, i.scale),
            (i.matrixWorldNeedsUpdate = !0),
            (i.jointRadius = t.radius)),
            (i.visible = null !== t);
        }
        const i = l.joints["index-finger-tip"],
          r = l.joints["thumb-tip"],
          s = i.position.distanceTo(r.position),
          o = 0.02,
          c = 0.005;
        l.inputState.pinching && s > o + c
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: t.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            s <= o - c &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: t.handedness,
              target: this,
            }));
      } else
        null !== o &&
          t.gripSpace &&
          ((r = e.getPose(t.gripSpace, n)),
          null !== r &&
            (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            (o.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((o.hasLinearVelocity = !0),
                o.linearVelocity.copy(r.linearVelocity))
              : (o.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((o.hasAngularVelocity = !0),
                o.angularVelocity.copy(r.angularVelocity))
              : (o.hasAngularVelocity = !1)));
      null !== s &&
        ((i = e.getPose(t.targetRaySpace, n)),
        null === i && null !== r && (i = r),
        null !== i &&
          (s.matrix.fromArray(i.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          (s.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(i.linearVelocity))
            : (s.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(i.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(bo)));
    }
    return (
      null !== s && (s.visible = null !== i),
      null !== o && (o.visible = null !== r),
      null !== l && (l.visible = null !== a),
      this
    );
  }
  _getHandJoint(t, e) {
    if (void 0 === t.joints[e.jointName]) {
      const n = new To();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (t.joints[e.jointName] = n),
        t.add(n);
    }
    return t.joints[e.jointName];
  }
}
class wo {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(t, e, n) {
    if (null === this.texture) {
      const i = new un();
      (t.properties.get(i).__webglTexture = e.texture),
        (e.depthNear == n.depthNear && e.depthFar == n.depthFar) ||
          ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = i);
    }
  }
  getMesh(t) {
    if (null !== this.texture && null === this.mesh) {
      const e = t.cameras[0].viewport,
        n = new Er({
          vertexShader:
            "\nvoid main() {\n\n\tgl_Position = vec4( position, 1.0 );\n\n}",
          fragmentShader:
            "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n\tvec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n\tif ( coord.x >= 1.0 ) {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n\t} else {\n\n\t\tgl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n\t}\n\n}",
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: e.z },
            depthHeight: { value: e.w },
          },
        });
      this.mesh = new gr(new kr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Ro extends Pe {
  constructor(t, e) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      s = "local-floor",
      o = 1,
      l = null,
      c = null,
      h = null,
      u = null,
      d = null,
      p = null;
    const f = new wo(),
      m = e.getContextAttributes();
    let g = null,
      _ = null;
    const v = [],
      x = [],
      y = new ke();
    let M = null;
    const S = new Rr();
    S.viewport = new dn();
    const E = new Rr();
    E.viewport = new dn();
    const T = [S, E],
      b = new Eo();
    let A = null,
      w = null;
    function R(t) {
      const e = x.indexOf(t.inputSource);
      if (-1 === e) return;
      const n = v[e];
      void 0 !== n &&
        (n.update(t.inputSource, t.frame, l || a),
        n.dispatchEvent({ type: t.type, data: t.inputSource }));
    }
    function C() {
      i.removeEventListener("select", R),
        i.removeEventListener("selectstart", R),
        i.removeEventListener("selectend", R),
        i.removeEventListener("squeeze", R),
        i.removeEventListener("squeezestart", R),
        i.removeEventListener("squeezeend", R),
        i.removeEventListener("end", C),
        i.removeEventListener("inputsourceschange", P);
      for (let t = 0; t < v.length; t++) {
        const e = x[t];
        null !== e && ((x[t] = null), v[t].disconnect(e));
      }
      (A = null),
        (w = null),
        f.reset(),
        t.setRenderTarget(g),
        (d = null),
        (u = null),
        (h = null),
        (i = null),
        (_ = null),
        N.stop(),
        (n.isPresenting = !1),
        t.setPixelRatio(M),
        t.setSize(y.width, y.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    function P(t) {
      for (let e = 0; e < t.removed.length; e++) {
        const n = t.removed[e],
          i = x.indexOf(n);
        i >= 0 && ((x[i] = null), v[i].disconnect(n));
      }
      for (let e = 0; e < t.added.length; e++) {
        const n = t.added[e];
        let i = x.indexOf(n);
        if (-1 === i) {
          for (let t = 0; t < v.length; t++) {
            if (t >= x.length) {
              x.push(n), (i = t);
              break;
            }
            if (null === x[t]) {
              (x[t] = n), (i = t);
              break;
            }
          }
          if (-1 === i) break;
        }
        const r = v[i];
        r && r.connect(n);
      }
    }
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (t) {
        let e = v[t];
        return (
          void 0 === e && ((e = new Ao()), (v[t] = e)), e.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (t) {
        let e = v[t];
        return void 0 === e && ((e = new Ao()), (v[t] = e)), e.getGripSpace();
      }),
      (this.getHand = function (t) {
        let e = v[t];
        return void 0 === e && ((e = new Ao()), (v[t] = e)), e.getHandSpace();
      }),
      (this.setFramebufferScaleFactor = function (t) {
        (r = t), n.isPresenting;
      }),
      (this.setReferenceSpaceType = function (t) {
        (s = t), n.isPresenting;
      }),
      (this.getReferenceSpace = function () {
        return l || a;
      }),
      (this.setReferenceSpace = function (t) {
        l = t;
      }),
      (this.getBaseLayer = function () {
        return null !== u ? u : d;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return p;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (c) {
        if (((i = c), null !== i)) {
          if (
            ((g = t.getRenderTarget()),
            i.addEventListener("select", R),
            i.addEventListener("selectstart", R),
            i.addEventListener("selectend", R),
            i.addEventListener("squeeze", R),
            i.addEventListener("squeezestart", R),
            i.addEventListener("squeezeend", R),
            i.addEventListener("end", C),
            i.addEventListener("inputsourceschange", P),
            !0 !== m.xrCompatible && (await e.makeXRCompatible()),
            (M = t.getPixelRatio()),
            t.getSize(y),
            void 0 === i.renderState.layers)
          ) {
            const n = {
              antialias: m.antialias,
              alpha: !0,
              depth: m.depth,
              stencil: m.stencil,
              framebufferScaleFactor: r,
            };
            (d = new XRWebGLLayer(i, e, n)),
              i.updateRenderState({ baseLayer: d }),
              t.setPixelRatio(1),
              t.setSize(d.framebufferWidth, d.framebufferHeight, !1),
              (_ = new fn(d.framebufferWidth, d.framebufferHeight, {
                format: St,
                type: lt,
                colorSpace: t.outputColorSpace,
                stencilBuffer: m.stencil,
              }));
          } else {
            let n = null,
              a = null,
              s = null;
            m.depth &&
              ((s = m.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
              (n = m.stencil ? At : bt),
              (a = m.stencil ? vt : pt));
            const o = { colorFormat: e.RGBA8, depthFormat: s, scaleFactor: r };
            (h = new XRWebGLBinding(i, e)),
              (u = h.createProjectionLayer(o)),
              i.updateRenderState({ layers: [u] }),
              t.setPixelRatio(1),
              t.setSize(u.textureWidth, u.textureHeight, !1),
              (_ = new fn(u.textureWidth, u.textureHeight, {
                format: St,
                type: lt,
                depthTexture: new Aa(
                  u.textureWidth,
                  u.textureHeight,
                  a,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  n
                ),
                stencilBuffer: m.stencil,
                colorSpace: t.outputColorSpace,
                samples: m.antialias ? 4 : 0,
                resolveDepthBuffer: !1 === u.ignoreDepthValues,
              }));
          }
          (_.isXRRenderTarget = !0),
            this.setFoveation(o),
            (l = null),
            (a = await i.requestReferenceSpace(s)),
            N.setContext(i),
            N.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (null !== i) return i.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return f.getDepthTexture();
      });
    const L = new vn(),
      U = new vn();
    function D(t, e) {
      null === e
        ? t.matrixWorld.copy(t.matrix)
        : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix),
        t.matrixWorldInverse.copy(t.matrixWorld).invert();
    }
    (this.updateCamera = function (t) {
      if (null === i) return;
      let e = t.near,
        n = t.far;
      null !== f.texture &&
        (f.depthNear > 0 && (e = f.depthNear),
        f.depthFar > 0 && (n = f.depthFar)),
        (b.near = E.near = S.near = e),
        (b.far = E.far = S.far = n),
        (A === b.near && w === b.far) ||
          (i.updateRenderState({ depthNear: b.near, depthFar: b.far }),
          (A = b.near),
          (w = b.far)),
        (S.layers.mask = 2 | t.layers.mask),
        (E.layers.mask = 4 | t.layers.mask),
        (b.layers.mask = S.layers.mask | E.layers.mask);
      const r = t.parent,
        a = b.cameras;
      D(b, r);
      for (let i = 0; i < a.length; i++) D(a[i], r);
      2 === a.length
        ? (function (t, e, n) {
            L.setFromMatrixPosition(e.matrixWorld),
              U.setFromMatrixPosition(n.matrixWorld);
            const i = L.distanceTo(U),
              r = e.projectionMatrix.elements,
              a = n.projectionMatrix.elements,
              s = r[14] / (r[10] - 1),
              o = r[14] / (r[10] + 1),
              l = (r[9] + 1) / r[5],
              c = (r[9] - 1) / r[5],
              h = (r[8] - 1) / r[0],
              u = (a[8] + 1) / a[0],
              d = s * h,
              p = s * u,
              f = i / (-h + u),
              m = f * -h;
            if (
              (e.matrixWorld.decompose(t.position, t.quaternion, t.scale),
              t.translateX(m),
              t.translateZ(f),
              t.matrixWorld.compose(t.position, t.quaternion, t.scale),
              t.matrixWorldInverse.copy(t.matrixWorld).invert(),
              -1 === r[10])
            )
              t.projectionMatrix.copy(e.projectionMatrix),
                t.projectionMatrixInverse.copy(e.projectionMatrixInverse);
            else {
              const e = s + f,
                n = o + f,
                r = d - m,
                a = p + (i - m),
                h = ((l * o) / n) * e,
                u = ((c * o) / n) * e;
              t.projectionMatrix.makePerspective(r, a, h, u, e, n),
                t.projectionMatrixInverse.copy(t.projectionMatrix).invert();
            }
          })(b, S, E)
        : b.projectionMatrix.copy(S.projectionMatrix),
        (function (t, e, n) {
          null === n
            ? t.matrix.copy(e.matrixWorld)
            : (t.matrix.copy(n.matrixWorld),
              t.matrix.invert(),
              t.matrix.multiply(e.matrixWorld));
          t.matrix.decompose(t.position, t.quaternion, t.scale),
            t.updateMatrixWorld(!0),
            t.projectionMatrix.copy(e.projectionMatrix),
            t.projectionMatrixInverse.copy(e.projectionMatrixInverse),
            t.isPerspectiveCamera &&
              ((t.fov = 2 * Ie * Math.atan(1 / t.projectionMatrix.elements[5])),
              (t.zoom = 1));
        })(t, b, r);
    }),
      (this.getCamera = function () {
        return b;
      }),
      (this.getFoveation = function () {
        if (null !== u || null !== d) return o;
      }),
      (this.setFoveation = function (t) {
        (o = t),
          null !== u && (u.fixedFoveation = t),
          null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t);
      }),
      (this.hasDepthSensing = function () {
        return null !== f.texture;
      }),
      (this.getDepthSensingMesh = function () {
        return f.getMesh(b);
      });
    let I = null;
    const N = new Vr();
    N.setAnimationLoop(function (e, r) {
      if (((c = r.getViewerPose(l || a)), (p = r), null !== c)) {
        const e = c.views;
        null !== d &&
          (t.setRenderTargetFramebuffer(_, d.framebuffer),
          t.setRenderTarget(_));
        let n = !1;
        e.length !== b.cameras.length && ((b.cameras.length = 0), (n = !0));
        for (let i = 0; i < e.length; i++) {
          const r = e[i];
          let a = null;
          if (null !== d) a = d.getViewport(r);
          else {
            const e = h.getViewSubImage(u, r);
            (a = e.viewport),
              0 === i &&
                (t.setRenderTargetTextures(
                  _,
                  e.colorTexture,
                  u.ignoreDepthValues ? void 0 : e.depthStencilTexture
                ),
                t.setRenderTarget(_));
          }
          let s = T[i];
          void 0 === s &&
            ((s = new Rr()),
            s.layers.enable(i),
            (s.viewport = new dn()),
            (T[i] = s)),
            s.matrix.fromArray(r.transform.matrix),
            s.matrix.decompose(s.position, s.quaternion, s.scale),
            s.projectionMatrix.fromArray(r.projectionMatrix),
            s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),
            s.viewport.set(a.x, a.y, a.width, a.height),
            0 === i &&
              (b.matrix.copy(s.matrix),
              b.matrix.decompose(b.position, b.quaternion, b.scale)),
            !0 === n && b.cameras.push(s);
        }
        const r = i.enabledFeatures;
        if (r && r.includes("depth-sensing")) {
          const n = h.getDepthInformation(e[0]);
          n && n.isValid && n.texture && f.init(t, n, i.renderState);
        }
      }
      for (let t = 0; t < v.length; t++) {
        const e = x[t],
          n = v[t];
        null !== e && void 0 !== n && n.update(e, r, l || a);
      }
      I && I(e, r),
        r.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: r }),
        (p = null);
    }),
      (this.setAnimationLoop = function (t) {
        I = t;
      }),
      (this.dispose = function () {});
  }
}
const Co = new ri(),
  Po = new Yn();
function Lo(t, e) {
  function n(t, e) {
    !0 === t.matrixAutoUpdate && t.updateMatrix(), e.value.copy(t.matrix);
  }
  function i(t, i) {
    (t.opacity.value = i.opacity),
      i.color && t.diffuse.value.copy(i.color),
      i.emissive &&
        t.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
      i.map && ((t.map.value = i.map), n(i.map, t.mapTransform)),
      i.alphaMap &&
        ((t.alphaMap.value = i.alphaMap), n(i.alphaMap, t.alphaMapTransform)),
      i.bumpMap &&
        ((t.bumpMap.value = i.bumpMap),
        n(i.bumpMap, t.bumpMapTransform),
        (t.bumpScale.value = i.bumpScale),
        i.side === h && (t.bumpScale.value *= -1)),
      i.normalMap &&
        ((t.normalMap.value = i.normalMap),
        n(i.normalMap, t.normalMapTransform),
        t.normalScale.value.copy(i.normalScale),
        i.side === h && t.normalScale.value.negate()),
      i.displacementMap &&
        ((t.displacementMap.value = i.displacementMap),
        n(i.displacementMap, t.displacementMapTransform),
        (t.displacementScale.value = i.displacementScale),
        (t.displacementBias.value = i.displacementBias)),
      i.emissiveMap &&
        ((t.emissiveMap.value = i.emissiveMap),
        n(i.emissiveMap, t.emissiveMapTransform)),
      i.specularMap &&
        ((t.specularMap.value = i.specularMap),
        n(i.specularMap, t.specularMapTransform)),
      i.alphaTest > 0 && (t.alphaTest.value = i.alphaTest);
    const r = e.get(i),
      a = r.envMap,
      s = r.envMapRotation;
    a &&
      ((t.envMap.value = a),
      Co.copy(s),
      (Co.x *= -1),
      (Co.y *= -1),
      (Co.z *= -1),
      a.isCubeTexture &&
        !1 === a.isRenderTargetTexture &&
        ((Co.y *= -1), (Co.z *= -1)),
      t.envMapRotation.value.setFromMatrix4(Po.makeRotationFromEuler(Co)),
      (t.flipEnvMap.value =
        a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1),
      (t.reflectivity.value = i.reflectivity),
      (t.ior.value = i.ior),
      (t.refractionRatio.value = i.refractionRatio)),
      i.lightMap &&
        ((t.lightMap.value = i.lightMap),
        (t.lightMapIntensity.value = i.lightMapIntensity),
        n(i.lightMap, t.lightMapTransform)),
      i.aoMap &&
        ((t.aoMap.value = i.aoMap),
        (t.aoMapIntensity.value = i.aoMapIntensity),
        n(i.aoMap, t.aoMapTransform));
  }
  return {
    refreshFogUniforms: function (e, n) {
      n.color.getRGB(e.fogColor.value, Mr(t)),
        n.isFog
          ? ((e.fogNear.value = n.near), (e.fogFar.value = n.far))
          : n.isFogExp2 && (e.fogDensity.value = n.density);
    },
    refreshMaterialUniforms: function (t, r, a, s, o) {
      r.isMeshBasicMaterial || r.isMeshLambertMaterial
        ? i(t, r)
        : r.isMeshToonMaterial
        ? (i(t, r),
          (function (t, e) {
            e.gradientMap && (t.gradientMap.value = e.gradientMap);
          })(t, r))
        : r.isMeshPhongMaterial
        ? (i(t, r),
          (function (t, e) {
            t.specular.value.copy(e.specular),
              (t.shininess.value = Math.max(e.shininess, 1e-4));
          })(t, r))
        : r.isMeshStandardMaterial
        ? (i(t, r),
          (function (t, e) {
            (t.metalness.value = e.metalness),
              e.metalnessMap &&
                ((t.metalnessMap.value = e.metalnessMap),
                n(e.metalnessMap, t.metalnessMapTransform));
            (t.roughness.value = e.roughness),
              e.roughnessMap &&
                ((t.roughnessMap.value = e.roughnessMap),
                n(e.roughnessMap, t.roughnessMapTransform));
            e.envMap && (t.envMapIntensity.value = e.envMapIntensity);
          })(t, r),
          r.isMeshPhysicalMaterial &&
            (function (t, e, i) {
              (t.ior.value = e.ior),
                e.sheen > 0 &&
                  (t.sheenColor.value
                    .copy(e.sheenColor)
                    .multiplyScalar(e.sheen),
                  (t.sheenRoughness.value = e.sheenRoughness),
                  e.sheenColorMap &&
                    ((t.sheenColorMap.value = e.sheenColorMap),
                    n(e.sheenColorMap, t.sheenColorMapTransform)),
                  e.sheenRoughnessMap &&
                    ((t.sheenRoughnessMap.value = e.sheenRoughnessMap),
                    n(e.sheenRoughnessMap, t.sheenRoughnessMapTransform)));
              e.clearcoat > 0 &&
                ((t.clearcoat.value = e.clearcoat),
                (t.clearcoatRoughness.value = e.clearcoatRoughness),
                e.clearcoatMap &&
                  ((t.clearcoatMap.value = e.clearcoatMap),
                  n(e.clearcoatMap, t.clearcoatMapTransform)),
                e.clearcoatRoughnessMap &&
                  ((t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap),
                  n(e.clearcoatRoughnessMap, t.clearcoatRoughnessMapTransform)),
                e.clearcoatNormalMap &&
                  ((t.clearcoatNormalMap.value = e.clearcoatNormalMap),
                  n(e.clearcoatNormalMap, t.clearcoatNormalMapTransform),
                  t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),
                  e.side === h && t.clearcoatNormalScale.value.negate()));
              e.dispersion > 0 && (t.dispersion.value = e.dispersion);
              e.iridescence > 0 &&
                ((t.iridescence.value = e.iridescence),
                (t.iridescenceIOR.value = e.iridescenceIOR),
                (t.iridescenceThicknessMinimum.value =
                  e.iridescenceThicknessRange[0]),
                (t.iridescenceThicknessMaximum.value =
                  e.iridescenceThicknessRange[1]),
                e.iridescenceMap &&
                  ((t.iridescenceMap.value = e.iridescenceMap),
                  n(e.iridescenceMap, t.iridescenceMapTransform)),
                e.iridescenceThicknessMap &&
                  ((t.iridescenceThicknessMap.value =
                    e.iridescenceThicknessMap),
                  n(
                    e.iridescenceThicknessMap,
                    t.iridescenceThicknessMapTransform
                  )));
              e.transmission > 0 &&
                ((t.transmission.value = e.transmission),
                (t.transmissionSamplerMap.value = i.texture),
                t.transmissionSamplerSize.value.set(i.width, i.height),
                e.transmissionMap &&
                  ((t.transmissionMap.value = e.transmissionMap),
                  n(e.transmissionMap, t.transmissionMapTransform)),
                (t.thickness.value = e.thickness),
                e.thicknessMap &&
                  ((t.thicknessMap.value = e.thicknessMap),
                  n(e.thicknessMap, t.thicknessMapTransform)),
                (t.attenuationDistance.value = e.attenuationDistance),
                t.attenuationColor.value.copy(e.attenuationColor));
              e.anisotropy > 0 &&
                (t.anisotropyVector.value.set(
                  e.anisotropy * Math.cos(e.anisotropyRotation),
                  e.anisotropy * Math.sin(e.anisotropyRotation)
                ),
                e.anisotropyMap &&
                  ((t.anisotropyMap.value = e.anisotropyMap),
                  n(e.anisotropyMap, t.anisotropyMapTransform)));
              (t.specularIntensity.value = e.specularIntensity),
                t.specularColor.value.copy(e.specularColor),
                e.specularColorMap &&
                  ((t.specularColorMap.value = e.specularColorMap),
                  n(e.specularColorMap, t.specularColorMapTransform));
              e.specularIntensityMap &&
                ((t.specularIntensityMap.value = e.specularIntensityMap),
                n(e.specularIntensityMap, t.specularIntensityMapTransform));
            })(t, r, o))
        : r.isMeshMatcapMaterial
        ? (i(t, r),
          (function (t, e) {
            e.matcap && (t.matcap.value = e.matcap);
          })(t, r))
        : r.isMeshDepthMaterial
        ? i(t, r)
        : r.isMeshDistanceMaterial
        ? (i(t, r),
          (function (t, n) {
            const i = e.get(n).light;
            t.referencePosition.value.setFromMatrixPosition(i.matrixWorld),
              (t.nearDistance.value = i.shadow.camera.near),
              (t.farDistance.value = i.shadow.camera.far);
          })(t, r))
        : r.isMeshNormalMaterial
        ? i(t, r)
        : r.isLineBasicMaterial
        ? ((function (t, e) {
            t.diffuse.value.copy(e.color),
              (t.opacity.value = e.opacity),
              e.map && ((t.map.value = e.map), n(e.map, t.mapTransform));
          })(t, r),
          r.isLineDashedMaterial &&
            (function (t, e) {
              (t.dashSize.value = e.dashSize),
                (t.totalSize.value = e.dashSize + e.gapSize),
                (t.scale.value = e.scale);
            })(t, r))
        : r.isPointsMaterial
        ? (function (t, e, i, r) {
            t.diffuse.value.copy(e.color),
              (t.opacity.value = e.opacity),
              (t.size.value = e.size * i),
              (t.scale.value = 0.5 * r),
              e.map && ((t.map.value = e.map), n(e.map, t.uvTransform));
            e.alphaMap &&
              ((t.alphaMap.value = e.alphaMap),
              n(e.alphaMap, t.alphaMapTransform));
            e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
          })(t, r, a, s)
        : r.isSpriteMaterial
        ? (function (t, e) {
            t.diffuse.value.copy(e.color),
              (t.opacity.value = e.opacity),
              (t.rotation.value = e.rotation),
              e.map && ((t.map.value = e.map), n(e.map, t.mapTransform));
            e.alphaMap &&
              ((t.alphaMap.value = e.alphaMap),
              n(e.alphaMap, t.alphaMapTransform));
            e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest);
          })(t, r)
        : r.isShadowMaterial
        ? (t.color.value.copy(r.color), (t.opacity.value = r.opacity))
        : r.isShaderMaterial && (r.uniformsNeedUpdate = !1);
    },
  };
}
function Uo(t, e, n, i) {
  let r = {},
    a = {},
    s = [];
  const o = t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(t, e, n, i) {
    const r = t.value,
      a = e + "_" + n;
    if (void 0 === i[a])
      return (
        (i[a] = "number" == typeof r || "boolean" == typeof r ? r : r.clone()),
        !0
      );
    {
      const t = i[a];
      if ("number" == typeof r || "boolean" == typeof r) {
        if (t !== r) return (i[a] = r), !0;
      } else if (!1 === t.equals(r)) return t.copy(r), !0;
    }
    return !1;
  }
  function c(t) {
    const e = { boundary: 0, storage: 0 };
    return (
      "number" == typeof t || "boolean" == typeof t
        ? ((e.boundary = 4), (e.storage = 4))
        : t.isVector2
        ? ((e.boundary = 8), (e.storage = 8))
        : t.isVector3 || t.isColor
        ? ((e.boundary = 16), (e.storage = 12))
        : t.isVector4
        ? ((e.boundary = 16), (e.storage = 16))
        : t.isMatrix3
        ? ((e.boundary = 48), (e.storage = 48))
        : t.isMatrix4
        ? ((e.boundary = 64), (e.storage = 64))
        : t.isTexture,
      e
    );
  }
  function h(e) {
    const n = e.target;
    n.removeEventListener("dispose", h);
    const i = s.indexOf(n.__bindingPointIndex);
    s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id];
  }
  return {
    bind: function (t, e) {
      const n = e.program;
      i.uniformBlockBinding(t, n);
    },
    update: function (n, u) {
      let d = r[n.id];
      void 0 === d &&
        (!(function (t) {
          const e = t.uniforms;
          let n = 0;
          const i = 16;
          for (let a = 0, s = e.length; a < s; a++) {
            const t = Array.isArray(e[a]) ? e[a] : [e[a]];
            for (let e = 0, r = t.length; e < r; e++) {
              const r = t[e],
                a = Array.isArray(r.value) ? r.value : [r.value];
              for (let t = 0, e = a.length; t < e; t++) {
                const e = c(a[t]),
                  s = n % i,
                  o = s % e.boundary,
                  l = s + o;
                (n += o),
                  0 !== l && i - l < e.storage && (n += i - l),
                  (r.__data = new Float32Array(
                    e.storage / Float32Array.BYTES_PER_ELEMENT
                  )),
                  (r.__offset = n),
                  (n += e.storage);
              }
            }
          }
          const r = n % i;
          r > 0 && (n += i - r);
          (t.__size = n), (t.__cache = {});
        })(n),
        (d = (function (e) {
          const n = (function () {
            for (let t = 0; t < o; t++)
              if (-1 === s.indexOf(t)) return s.push(t), t;
            return 0;
          })();
          e.__bindingPointIndex = n;
          const i = t.createBuffer(),
            r = e.__size,
            a = e.usage;
          return (
            t.bindBuffer(t.UNIFORM_BUFFER, i),
            t.bufferData(t.UNIFORM_BUFFER, r, a),
            t.bindBuffer(t.UNIFORM_BUFFER, null),
            t.bindBufferBase(t.UNIFORM_BUFFER, n, i),
            i
          );
        })(n)),
        (r[n.id] = d),
        n.addEventListener("dispose", h));
      const p = u.program;
      i.updateUBOMapping(n, p);
      const f = e.render.frame;
      a[n.id] !== f &&
        (!(function (e) {
          const n = r[e.id],
            i = e.uniforms,
            a = e.__cache;
          t.bindBuffer(t.UNIFORM_BUFFER, n);
          for (let r = 0, s = i.length; r < s; r++) {
            const e = Array.isArray(i[r]) ? i[r] : [i[r]];
            for (let n = 0, i = e.length; n < i; n++) {
              const i = e[n];
              if (!0 === l(i, r, n, a)) {
                const e = i.__offset,
                  n = Array.isArray(i.value) ? i.value : [i.value];
                let r = 0;
                for (let a = 0; a < n.length; a++) {
                  const s = n[a],
                    o = c(s);
                  "number" == typeof s || "boolean" == typeof s
                    ? ((i.__data[0] = s),
                      t.bufferSubData(t.UNIFORM_BUFFER, e + r, i.__data))
                    : s.isMatrix3
                    ? ((i.__data[0] = s.elements[0]),
                      (i.__data[1] = s.elements[1]),
                      (i.__data[2] = s.elements[2]),
                      (i.__data[3] = 0),
                      (i.__data[4] = s.elements[3]),
                      (i.__data[5] = s.elements[4]),
                      (i.__data[6] = s.elements[5]),
                      (i.__data[7] = 0),
                      (i.__data[8] = s.elements[6]),
                      (i.__data[9] = s.elements[7]),
                      (i.__data[10] = s.elements[8]),
                      (i.__data[11] = 0))
                    : (s.toArray(i.__data, r),
                      (r += o.storage / Float32Array.BYTES_PER_ELEMENT));
                }
                t.bufferSubData(t.UNIFORM_BUFFER, e, i.__data);
              }
            }
          }
          t.bindBuffer(t.UNIFORM_BUFFER, null);
        })(n),
        (a[n.id] = f));
    },
    dispose: function () {
      for (const e in r) t.deleteBuffer(r[e]);
      (s = []), (r = {}), (a = {});
    },
  };
}
class Do {
  constructor(t = {}) {
    const {
      canvas: e = qe(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: s = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: u = !1,
      powerPreference: d = "default",
      failIfMajorPerformanceCaveat: p = !1,
      reverseDepthBuffer: f = !1,
    } = t;
    let m;
    if (((this.isWebGLRenderer = !0), null !== n)) {
      if (
        "undefined" != typeof WebGLRenderingContext &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      m = n.getContextAttributes().alpha;
    } else m = s;
    const g = new Uint32Array(4),
      _ = new Int32Array(4);
    let v = null,
      x = null;
    const y = [],
      M = [];
    (this.domElement = e),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = pe),
      (this.toneMapping = k),
      (this.toneMappingExposure = 1);
    const S = this;
    let E = !1,
      T = 0,
      b = 0,
      A = null,
      w = -1,
      R = null;
    const C = new dn(),
      P = new dn();
    let L = null;
    const U = new Vi(0);
    let D = 0,
      I = e.width,
      N = e.height,
      O = 1,
      F = null,
      B = null;
    const z = new dn(0, 0, I, N),
      V = new dn(0, 0, I, N);
    let H = !1;
    const G = new zr();
    let W = !1,
      X = !1;
    const j = new Yn(),
      q = new Yn(),
      Y = new vn(),
      Z = new dn(),
      J = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let K = !1;
    function $() {
      return null === A ? O : 1;
    }
    let Q,
      tt,
      et,
      nt,
      it,
      rt,
      at,
      st,
      ct,
      ht,
      dt,
      ft,
      xt,
      yt,
      Mt,
      St,
      Et,
      Tt,
      bt,
      At,
      wt,
      Ct,
      Ut,
      Dt,
      It = n;
    function Nt(t, n) {
      return e.getContext(t, n);
    }
    try {
      const t = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: u,
        powerPreference: d,
        failIfMajorPerformanceCaveat: p,
      };
      if (
        ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${a}`),
        e.addEventListener("webglcontextlost", Bt, !1),
        e.addEventListener("webglcontextrestored", zt, !1),
        e.addEventListener("webglcontextcreationerror", Vt, !1),
        null === It)
      ) {
        const e = "webgl2";
        if (((It = Nt(e, t)), null === It))
          throw Nt(e)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (ee) {
      throw ee;
    }
    function Ot() {
      (Q = new ya(It)),
        Q.init(),
        (Ct = new So(It, Q)),
        (tt = new $r(It, Q, t, Ct)),
        (et = new xo(It, Q)),
        tt.reverseDepthBuffer && f && et.buffers.depth.setReversed(!0),
        (nt = new Ea(It)),
        (it = new io()),
        (rt = new Mo(It, Q, et, it, tt, Ct, nt)),
        (at = new ta(S)),
        (st = new xa(S)),
        (ct = new Hr(It)),
        (Ut = new Jr(It, ct)),
        (ht = new Ma(It, ct, nt, Ut)),
        (dt = new ba(It, ht, ct, nt)),
        (bt = new Ta(It, tt, rt)),
        (St = new Qr(it)),
        (ft = new no(S, at, st, Q, tt, Ut, St)),
        (xt = new Lo(S, it)),
        (yt = new oo()),
        (Mt = new fo(Q)),
        (Tt = new Zr(S, at, st, et, dt, m, l)),
        (Et = new _o(S, dt, tt)),
        (Dt = new Uo(It, nt, tt, et)),
        (At = new Kr(It, Q, nt)),
        (wt = new Sa(It, Q, nt)),
        (nt.programs = ft.programs),
        (S.capabilities = tt),
        (S.extensions = Q),
        (S.properties = it),
        (S.renderLists = yt),
        (S.shadowMap = Et),
        (S.state = et),
        (S.info = nt);
    }
    Ot();
    const Ft = new Ro(S, It);
    function Bt(t) {
      t.preventDefault(), (E = !0);
    }
    function zt() {
      E = !1;
      const t = nt.autoReset,
        e = Et.enabled,
        n = Et.autoUpdate,
        i = Et.needsUpdate,
        r = Et.type;
      Ot(),
        (nt.autoReset = t),
        (Et.enabled = e),
        (Et.autoUpdate = n),
        (Et.needsUpdate = i),
        (Et.type = r);
    }
    function Vt(t) {}
    function Ht(t) {
      const e = t.target;
      e.removeEventListener("dispose", Ht),
        (function (t) {
          (function (t) {
            const e = it.get(t).programs;
            void 0 !== e &&
              (e.forEach(function (t) {
                ft.releaseProgram(t);
              }),
              t.isShaderMaterial && ft.releaseShaderCache(t));
          })(t),
            it.remove(t);
        })(e);
    }
    function kt(t, e, n) {
      !0 === t.transparent && 2 === t.side && !1 === t.forceSinglePass
        ? ((t.side = h),
          (t.needsUpdate = !0),
          $t(t, e, n),
          (t.side = c),
          (t.needsUpdate = !0),
          $t(t, e, n),
          (t.side = 2))
        : $t(t, e, n);
    }
    (this.xr = Ft),
      (this.getContext = function () {
        return It;
      }),
      (this.getContextAttributes = function () {
        return It.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const t = Q.get("WEBGL_lose_context");
        t && t.loseContext();
      }),
      (this.forceContextRestore = function () {
        const t = Q.get("WEBGL_lose_context");
        t && t.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return O;
      }),
      (this.setPixelRatio = function (t) {
        void 0 !== t && ((O = t), this.setSize(I, N, !1));
      }),
      (this.getSize = function (t) {
        return t.set(I, N);
      }),
      (this.setSize = function (t, n, i = !0) {
        Ft.isPresenting ||
          ((I = t),
          (N = n),
          (e.width = Math.floor(t * O)),
          (e.height = Math.floor(n * O)),
          !0 === i && ((e.style.width = t + "px"), (e.style.height = n + "px")),
          this.setViewport(0, 0, t, n));
      }),
      (this.getDrawingBufferSize = function (t) {
        return t.set(I * O, N * O).floor();
      }),
      (this.setDrawingBufferSize = function (t, n, i) {
        (I = t),
          (N = n),
          (O = i),
          (e.width = Math.floor(t * i)),
          (e.height = Math.floor(n * i)),
          this.setViewport(0, 0, t, n);
      }),
      (this.getCurrentViewport = function (t) {
        return t.copy(C);
      }),
      (this.getViewport = function (t) {
        return t.copy(z);
      }),
      (this.setViewport = function (t, e, n, i) {
        t.isVector4 ? z.set(t.x, t.y, t.z, t.w) : z.set(t, e, n, i),
          et.viewport(C.copy(z).multiplyScalar(O).round());
      }),
      (this.getScissor = function (t) {
        return t.copy(V);
      }),
      (this.setScissor = function (t, e, n, i) {
        t.isVector4 ? V.set(t.x, t.y, t.z, t.w) : V.set(t, e, n, i),
          et.scissor(P.copy(V).multiplyScalar(O).round());
      }),
      (this.getScissorTest = function () {
        return H;
      }),
      (this.setScissorTest = function (t) {
        et.setScissorTest((H = t));
      }),
      (this.setOpaqueSort = function (t) {
        F = t;
      }),
      (this.setTransparentSort = function (t) {
        B = t;
      }),
      (this.getClearColor = function (t) {
        return t.copy(Tt.getClearColor());
      }),
      (this.setClearColor = function () {
        Tt.setClearColor.apply(Tt, arguments);
      }),
      (this.getClearAlpha = function () {
        return Tt.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        Tt.setClearAlpha.apply(Tt, arguments);
      }),
      (this.clear = function (t = !0, e = !0, n = !0) {
        let i = 0;
        if (t) {
          let t = !1;
          if (null !== A) {
            const e = A.texture.format;
            t = e === Lt || e === Pt || e === Rt;
          }
          if (t) {
            const t = A.texture.type,
              e =
                t === lt ||
                t === pt ||
                t === ut ||
                t === vt ||
                t === gt ||
                t === _t,
              n = Tt.getClearColor(),
              i = Tt.getClearAlpha(),
              r = n.r,
              a = n.g,
              s = n.b;
            e
              ? ((g[0] = r),
                (g[1] = a),
                (g[2] = s),
                (g[3] = i),
                It.clearBufferuiv(It.COLOR, 0, g))
              : ((_[0] = r),
                (_[1] = a),
                (_[2] = s),
                (_[3] = i),
                It.clearBufferiv(It.COLOR, 0, _));
          } else i |= It.COLOR_BUFFER_BIT;
        }
        e && (i |= It.DEPTH_BUFFER_BIT),
          n &&
            ((i |= It.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          It.clear(i);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        e.removeEventListener("webglcontextlost", Bt, !1),
          e.removeEventListener("webglcontextrestored", zt, !1),
          e.removeEventListener("webglcontextcreationerror", Vt, !1),
          yt.dispose(),
          Mt.dispose(),
          it.dispose(),
          at.dispose(),
          st.dispose(),
          dt.dispose(),
          Ut.dispose(),
          Dt.dispose(),
          ft.dispose(),
          Ft.dispose(),
          Ft.removeEventListener("sessionstart", Wt),
          Ft.removeEventListener("sessionend", Xt),
          jt.stop();
      }),
      (this.renderBufferDirect = function (t, e, n, i, r, a) {
        null === e && (e = J);
        const s = r.isMesh && r.matrixWorld.determinant() < 0,
          o = (function (t, e, n, i, r) {
            !0 !== e.isScene && (e = J);
            rt.resetTextureUnits();
            const a = e.fog,
              s = i.isMeshStandardMaterial ? e.environment : null,
              o =
                null === A
                  ? S.outputColorSpace
                  : !0 === A.isXRRenderTarget
                  ? A.texture.colorSpace
                  : fe,
              l = (i.isMeshStandardMaterial ? st : at).get(i.envMap || s),
              c =
                !0 === i.vertexColors &&
                !!n.attributes.color &&
                4 === n.attributes.color.itemSize,
              h = !!n.attributes.tangent && (!!i.normalMap || i.anisotropy > 0),
              u = !!n.morphAttributes.position,
              d = !!n.morphAttributes.normal,
              p = !!n.morphAttributes.color;
            let f = k;
            i.toneMapped &&
              ((null !== A && !0 !== A.isXRRenderTarget) ||
                (f = S.toneMapping));
            const m =
                n.morphAttributes.position ||
                n.morphAttributes.normal ||
                n.morphAttributes.color,
              g = void 0 !== m ? m.length : 0,
              _ = it.get(i),
              v = x.state.lights;
            if (!0 === W && (!0 === X || t !== R)) {
              const e = t === R && i.id === w;
              St.setState(i, t, e);
            }
            let y = !1;
            i.version === _.__version
              ? (_.needsLights && _.lightsStateVersion !== v.state.version) ||
                _.outputColorSpace !== o ||
                (r.isBatchedMesh && !1 === _.batching)
                ? (y = !0)
                : r.isBatchedMesh || !0 !== _.batching
                ? (r.isBatchedMesh &&
                    !0 === _.batchingColor &&
                    null === r.colorTexture) ||
                  (r.isBatchedMesh &&
                    !1 === _.batchingColor &&
                    null !== r.colorTexture) ||
                  (r.isInstancedMesh && !1 === _.instancing)
                  ? (y = !0)
                  : r.isInstancedMesh || !0 !== _.instancing
                  ? r.isSkinnedMesh && !1 === _.skinning
                    ? (y = !0)
                    : r.isSkinnedMesh || !0 !== _.skinning
                    ? (r.isInstancedMesh &&
                        !0 === _.instancingColor &&
                        null === r.instanceColor) ||
                      (r.isInstancedMesh &&
                        !1 === _.instancingColor &&
                        null !== r.instanceColor) ||
                      (r.isInstancedMesh &&
                        !0 === _.instancingMorph &&
                        null === r.morphTexture) ||
                      (r.isInstancedMesh &&
                        !1 === _.instancingMorph &&
                        null !== r.morphTexture) ||
                      _.envMap !== l ||
                      (!0 === i.fog && _.fog !== a)
                      ? (y = !0)
                      : void 0 === _.numClippingPlanes ||
                        (_.numClippingPlanes === St.numPlanes &&
                          _.numIntersection === St.numIntersection)
                      ? (_.vertexAlphas !== c ||
                          _.vertexTangents !== h ||
                          _.morphTargets !== u ||
                          _.morphNormals !== d ||
                          _.morphColors !== p ||
                          _.toneMapping !== f ||
                          _.morphTargetsCount !== g) &&
                        (y = !0)
                      : (y = !0)
                    : (y = !0)
                  : (y = !0)
                : (y = !0)
              : ((y = !0), (_.__version = i.version));
            let M = _.currentProgram;
            !0 === y && (M = $t(i, e, r));
            let E = !1,
              T = !1,
              b = !1;
            const C = M.getUniforms(),
              P = _.uniforms;
            et.useProgram(M.program) && ((E = !0), (T = !0), (b = !0));
            i.id !== w && ((w = i.id), (T = !0));
            if (E || R !== t) {
              et.buffers.depth.getReversed()
                ? (j.copy(t.projectionMatrix),
                  (function (t) {
                    const e = t.elements;
                    (e[2] = 0.5 * e[2] + 0.5 * e[3]),
                      (e[6] = 0.5 * e[6] + 0.5 * e[7]),
                      (e[10] = 0.5 * e[10] + 0.5 * e[11]),
                      (e[14] = 0.5 * e[14] + 0.5 * e[15]);
                  })(j),
                  (function (t) {
                    const e = t.elements;
                    -1 === e[11]
                      ? ((e[10] = -e[10] - 1), (e[14] = -e[14]))
                      : ((e[10] = -e[10]), (e[14] = 1 - e[14]));
                  })(j),
                  C.setValue(It, "projectionMatrix", j))
                : C.setValue(It, "projectionMatrix", t.projectionMatrix),
                C.setValue(It, "viewMatrix", t.matrixWorldInverse);
              const e = C.map.cameraPosition;
              void 0 !== e &&
                e.setValue(It, Y.setFromMatrixPosition(t.matrixWorld)),
                tt.logarithmicDepthBuffer &&
                  C.setValue(
                    It,
                    "logDepthBufFC",
                    2 / (Math.log(t.far + 1) / Math.LN2)
                  ),
                (i.isMeshPhongMaterial ||
                  i.isMeshToonMaterial ||
                  i.isMeshLambertMaterial ||
                  i.isMeshBasicMaterial ||
                  i.isMeshStandardMaterial ||
                  i.isShaderMaterial) &&
                  C.setValue(
                    It,
                    "isOrthographic",
                    !0 === t.isOrthographicCamera
                  ),
                R !== t && ((R = t), (T = !0), (b = !0));
            }
            if (r.isSkinnedMesh) {
              C.setOptional(It, r, "bindMatrix"),
                C.setOptional(It, r, "bindMatrixInverse");
              const t = r.skeleton;
              t &&
                (null === t.boneTexture && t.computeBoneTexture(),
                C.setValue(It, "boneTexture", t.boneTexture, rt));
            }
            r.isBatchedMesh &&
              (C.setOptional(It, r, "batchingTexture"),
              C.setValue(It, "batchingTexture", r._matricesTexture, rt),
              C.setOptional(It, r, "batchingIdTexture"),
              C.setValue(It, "batchingIdTexture", r._indirectTexture, rt),
              C.setOptional(It, r, "batchingColorTexture"),
              null !== r._colorsTexture &&
                C.setValue(It, "batchingColorTexture", r._colorsTexture, rt));
            const L = n.morphAttributes;
            (void 0 === L.position &&
              void 0 === L.normal &&
              void 0 === L.color) ||
              bt.update(r, n, M);
            (T || _.receiveShadow !== r.receiveShadow) &&
              ((_.receiveShadow = r.receiveShadow),
              C.setValue(It, "receiveShadow", r.receiveShadow));
            i.isMeshGouraudMaterial &&
              null !== i.envMap &&
              ((P.envMap.value = l),
              (P.flipEnvMap.value =
                l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1));
            i.isMeshStandardMaterial &&
              null === i.envMap &&
              null !== e.environment &&
              (P.envMapIntensity.value = e.environmentIntensity);
            T &&
              (C.setValue(It, "toneMappingExposure", S.toneMappingExposure),
              _.needsLights &&
                ((D = b),
                ((U = P).ambientLightColor.needsUpdate = D),
                (U.lightProbe.needsUpdate = D),
                (U.directionalLights.needsUpdate = D),
                (U.directionalLightShadows.needsUpdate = D),
                (U.pointLights.needsUpdate = D),
                (U.pointLightShadows.needsUpdate = D),
                (U.spotLights.needsUpdate = D),
                (U.spotLightShadows.needsUpdate = D),
                (U.rectAreaLights.needsUpdate = D),
                (U.hemisphereLights.needsUpdate = D)),
              a && !0 === i.fog && xt.refreshFogUniforms(P, a),
              xt.refreshMaterialUniforms(
                P,
                i,
                O,
                N,
                x.state.transmissionRenderTarget[t.id]
              ),
              Ls.upload(It, Qt(_), P, rt));
            var U, D;
            i.isShaderMaterial &&
              !0 === i.uniformsNeedUpdate &&
              (Ls.upload(It, Qt(_), P, rt), (i.uniformsNeedUpdate = !1));
            i.isSpriteMaterial && C.setValue(It, "center", r.center);
            if (
              (C.setValue(It, "modelViewMatrix", r.modelViewMatrix),
              C.setValue(It, "normalMatrix", r.normalMatrix),
              C.setValue(It, "modelMatrix", r.matrixWorld),
              i.isShaderMaterial || i.isRawShaderMaterial)
            ) {
              const t = i.uniformsGroups;
              for (let e = 0, n = t.length; e < n; e++) {
                const n = t[e];
                Dt.update(n, M), Dt.bind(n, M);
              }
            }
            return M;
          })(t, e, n, i, r);
        et.setMaterial(i, s);
        let l = n.index,
          c = 1;
        if (!0 === i.wireframe) {
          if (((l = ht.getWireframeAttribute(n)), void 0 === l)) return;
          c = 2;
        }
        const h = n.drawRange,
          u = n.attributes.position;
        let d = h.start * c,
          p = (h.start + h.count) * c;
        null !== a &&
          ((d = Math.max(d, a.start * c)),
          (p = Math.min(p, (a.start + a.count) * c))),
          null !== l
            ? ((d = Math.max(d, 0)), (p = Math.min(p, l.count)))
            : null != u && ((d = Math.max(d, 0)), (p = Math.min(p, u.count)));
        const f = p - d;
        if (f < 0 || Infinity === f) return;
        let m;
        Ut.setup(r, i, o, n, l);
        let g = At;
        if (
          (null !== l && ((m = ct.get(l)), (g = wt), g.setIndex(m)), r.isMesh)
        )
          !0 === i.wireframe
            ? (et.setLineWidth(i.wireframeLinewidth * $()), g.setMode(It.LINES))
            : g.setMode(It.TRIANGLES);
        else if (r.isLine) {
          let t = i.linewidth;
          void 0 === t && (t = 1),
            et.setLineWidth(t * $()),
            r.isLineSegments
              ? g.setMode(It.LINES)
              : r.isLineLoop
              ? g.setMode(It.LINE_LOOP)
              : g.setMode(It.LINE_STRIP);
        } else
          r.isPoints
            ? g.setMode(It.POINTS)
            : r.isSprite && g.setMode(It.TRIANGLES);
        if (r.isBatchedMesh)
          if (null !== r._multiDrawInstances)
            g.renderMultiDrawInstances(
              r._multiDrawStarts,
              r._multiDrawCounts,
              r._multiDrawCount,
              r._multiDrawInstances
            );
          else if (Q.get("WEBGL_multi_draw"))
            g.renderMultiDraw(
              r._multiDrawStarts,
              r._multiDrawCounts,
              r._multiDrawCount
            );
          else {
            const t = r._multiDrawStarts,
              e = r._multiDrawCounts,
              n = r._multiDrawCount,
              a = l ? ct.get(l).bytesPerElement : 1,
              s = it.get(i).currentProgram.getUniforms();
            for (let i = 0; i < n; i++)
              s.setValue(It, "_gl_DrawID", i), g.render(t[i] / a, e[i]);
          }
        else if (r.isInstancedMesh) g.renderInstances(d, f, r.count);
        else if (n.isInstancedBufferGeometry) {
          const t =
              void 0 !== n._maxInstanceCount ? n._maxInstanceCount : Infinity,
            e = Math.min(n.instanceCount, t);
          g.renderInstances(d, f, e);
        } else g.render(d, f);
      }),
      (this.compile = function (t, e, n = null) {
        null === n && (n = t),
          (x = Mt.get(n)),
          x.init(e),
          M.push(x),
          n.traverseVisible(function (t) {
            t.isLight &&
              t.layers.test(e.layers) &&
              (x.pushLight(t), t.castShadow && x.pushShadow(t));
          }),
          t !== n &&
            t.traverseVisible(function (t) {
              t.isLight &&
                t.layers.test(e.layers) &&
                (x.pushLight(t), t.castShadow && x.pushShadow(t));
            }),
          x.setupLights();
        const i = new Set();
        return (
          t.traverse(function (t) {
            if (!(t.isMesh || t.isPoints || t.isLine || t.isSprite)) return;
            const e = t.material;
            if (e)
              if (Array.isArray(e))
                for (let r = 0; r < e.length; r++) {
                  const a = e[r];
                  kt(a, n, t), i.add(a);
                }
              else kt(e, n, t), i.add(e);
          }),
          M.pop(),
          (x = null),
          i
        );
      }),
      (this.compileAsync = function (t, e, n = null) {
        const i = this.compile(t, e, n);
        return new Promise((e) => {
          function n() {
            i.forEach(function (t) {
              it.get(t).currentProgram.isReady() && i.delete(t);
            }),
              0 !== i.size ? setTimeout(n, 10) : e(t);
          }
          null !== Q.get("KHR_parallel_shader_compile")
            ? n()
            : setTimeout(n, 10);
        });
      });
    let Gt = null;
    function Wt() {
      jt.stop();
    }
    function Xt() {
      jt.start();
    }
    const jt = new Vr();
    function qt(t, e, n, i) {
      if (!1 === t.visible) return;
      if (t.layers.test(e.layers))
        if (t.isGroup) n = t.renderOrder;
        else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
        else if (t.isLight) x.pushLight(t), t.castShadow && x.pushShadow(t);
        else if (t.isSprite) {
          if (!t.frustumCulled || G.intersectsSprite(t)) {
            i && Z.setFromMatrixPosition(t.matrixWorld).applyMatrix4(q);
            const e = dt.update(t),
              r = t.material;
            r.visible && v.push(t, e, r, n, Z.z, null);
          }
        } else if (
          (t.isMesh || t.isLine || t.isPoints) &&
          (!t.frustumCulled || G.intersectsObject(t))
        ) {
          const e = dt.update(t),
            r = t.material;
          if (
            (i &&
              (void 0 !== t.boundingSphere
                ? (null === t.boundingSphere && t.computeBoundingSphere(),
                  Z.copy(t.boundingSphere.center))
                : (null === e.boundingSphere && e.computeBoundingSphere(),
                  Z.copy(e.boundingSphere.center)),
              Z.applyMatrix4(t.matrixWorld).applyMatrix4(q)),
            Array.isArray(r))
          ) {
            const i = e.groups;
            for (let a = 0, s = i.length; a < s; a++) {
              const s = i[a],
                o = r[s.materialIndex];
              o && o.visible && v.push(t, e, o, n, Z.z, s);
            }
          } else r.visible && v.push(t, e, r, n, Z.z, null);
        }
      const r = t.children;
      for (let a = 0, s = r.length; a < s; a++) qt(r[a], e, n, i);
    }
    function Yt(t, e, n, i) {
      const r = t.opaque,
        a = t.transmissive,
        s = t.transparent;
      x.setupLightsView(n),
        !0 === W && St.setGlobalState(S.clippingPlanes, n),
        i && et.viewport(C.copy(i)),
        r.length > 0 && Jt(r, e, n),
        a.length > 0 && Jt(a, e, n),
        s.length > 0 && Jt(s, e, n),
        et.buffers.depth.setTest(!0),
        et.buffers.depth.setMask(!0),
        et.buffers.color.setMask(!0),
        et.setPolygonOffset(!1);
    }
    function Zt(t, e, n, i) {
      if (null !== (!0 === n.isScene ? n.overrideMaterial : null)) return;
      void 0 === x.state.transmissionRenderTarget[i.id] &&
        (x.state.transmissionRenderTarget[i.id] = new fn(1, 1, {
          generateMipmaps: !0,
          type:
            Q.has("EXT_color_buffer_half_float") ||
            Q.has("EXT_color_buffer_float")
              ? mt
              : lt,
          minFilter: ot,
          samples: 4,
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Je.workingColorSpace,
        }));
      const a = x.state.transmissionRenderTarget[i.id],
        s = i.viewport || C;
      a.setSize(s.z, s.w);
      const o = S.getRenderTarget();
      S.setRenderTarget(a),
        S.getClearColor(U),
        (D = S.getClearAlpha()),
        D < 1 && S.setClearColor(16777215, 0.5),
        S.clear(),
        K && Tt.render(n);
      const l = S.toneMapping;
      S.toneMapping = k;
      const c = i.viewport;
      if (
        (void 0 !== i.viewport && (i.viewport = void 0),
        x.setupLightsView(i),
        !0 === W && St.setGlobalState(S.clippingPlanes, i),
        Jt(t, n, i),
        rt.updateMultisampleRenderTarget(a),
        rt.updateRenderTargetMipmap(a),
        !1 === Q.has("WEBGL_multisampled_render_to_texture"))
      ) {
        let t = !1;
        for (let r = 0, a = e.length; r < a; r++) {
          const a = e[r],
            s = a.object,
            o = a.geometry,
            l = a.material,
            c = a.group;
          if (2 === l.side && s.layers.test(i.layers)) {
            const e = l.side;
            (l.side = h),
              (l.needsUpdate = !0),
              Kt(s, n, i, o, l, c),
              (l.side = e),
              (l.needsUpdate = !0),
              (t = !0);
          }
        }
        !0 === t &&
          (rt.updateMultisampleRenderTarget(a), rt.updateRenderTargetMipmap(a));
      }
      S.setRenderTarget(o),
        S.setClearColor(U, D),
        void 0 !== c && (i.viewport = c),
        (S.toneMapping = l);
    }
    function Jt(t, e, n) {
      const i = !0 === e.isScene ? e.overrideMaterial : null;
      for (let r = 0, a = t.length; r < a; r++) {
        const a = t[r],
          s = a.object,
          o = a.geometry,
          l = null === i ? a.material : i,
          c = a.group;
        s.layers.test(n.layers) && Kt(s, e, n, o, l, c);
      }
    }
    function Kt(t, e, n, i, r, a) {
      t.onBeforeRender(S, e, n, i, r, a),
        t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld),
        t.normalMatrix.getNormalMatrix(t.modelViewMatrix),
        r.onBeforeRender(S, e, n, i, t, a),
        !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass
          ? ((r.side = h),
            (r.needsUpdate = !0),
            S.renderBufferDirect(n, e, i, r, t, a),
            (r.side = c),
            (r.needsUpdate = !0),
            S.renderBufferDirect(n, e, i, r, t, a),
            (r.side = 2))
          : S.renderBufferDirect(n, e, i, r, t, a),
        t.onAfterRender(S, e, n, i, r, a);
    }
    function $t(t, e, n) {
      !0 !== e.isScene && (e = J);
      const i = it.get(t),
        r = x.state.lights,
        a = x.state.shadowsArray,
        s = r.state.version,
        o = ft.getParameters(t, r.state, a, e, n),
        l = ft.getProgramCacheKey(o);
      let c = i.programs;
      (i.environment = t.isMeshStandardMaterial ? e.environment : null),
        (i.fog = e.fog),
        (i.envMap = (t.isMeshStandardMaterial ? st : at).get(
          t.envMap || i.environment
        )),
        (i.envMapRotation =
          null !== i.environment && null === t.envMap
            ? e.environmentRotation
            : t.envMapRotation),
        void 0 === c &&
          (t.addEventListener("dispose", Ht),
          (c = new Map()),
          (i.programs = c));
      let h = c.get(l);
      if (void 0 !== h) {
        if (i.currentProgram === h && i.lightsStateVersion === s)
          return te(t, o), h;
      } else
        (o.uniforms = ft.getUniforms(t)),
          t.onBeforeCompile(o, S),
          (h = ft.acquireProgram(o, l)),
          c.set(l, h),
          (i.uniforms = o.uniforms);
      const u = i.uniforms;
      return (
        ((t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping) ||
          (u.clippingPlanes = St.uniform),
        te(t, o),
        (i.needsLights = (function (t) {
          return (
            t.isMeshLambertMaterial ||
            t.isMeshToonMaterial ||
            t.isMeshPhongMaterial ||
            t.isMeshStandardMaterial ||
            t.isShadowMaterial ||
            (t.isShaderMaterial && !0 === t.lights)
          );
        })(t)),
        (i.lightsStateVersion = s),
        i.needsLights &&
          ((u.ambientLightColor.value = r.state.ambient),
          (u.lightProbe.value = r.state.probe),
          (u.directionalLights.value = r.state.directional),
          (u.directionalLightShadows.value = r.state.directionalShadow),
          (u.spotLights.value = r.state.spot),
          (u.spotLightShadows.value = r.state.spotShadow),
          (u.rectAreaLights.value = r.state.rectArea),
          (u.ltc_1.value = r.state.rectAreaLTC1),
          (u.ltc_2.value = r.state.rectAreaLTC2),
          (u.pointLights.value = r.state.point),
          (u.pointLightShadows.value = r.state.pointShadow),
          (u.hemisphereLights.value = r.state.hemi),
          (u.directionalShadowMap.value = r.state.directionalShadowMap),
          (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
          (u.spotShadowMap.value = r.state.spotShadowMap),
          (u.spotLightMatrix.value = r.state.spotLightMatrix),
          (u.spotLightMap.value = r.state.spotLightMap),
          (u.pointShadowMap.value = r.state.pointShadowMap),
          (u.pointShadowMatrix.value = r.state.pointShadowMatrix)),
        (i.currentProgram = h),
        (i.uniformsList = null),
        h
      );
    }
    function Qt(t) {
      if (null === t.uniformsList) {
        const e = t.currentProgram.getUniforms();
        t.uniformsList = Ls.seqWithValue(e.seq, t.uniforms);
      }
      return t.uniformsList;
    }
    function te(t, e) {
      const n = it.get(t);
      (n.outputColorSpace = e.outputColorSpace),
        (n.batching = e.batching),
        (n.batchingColor = e.batchingColor),
        (n.instancing = e.instancing),
        (n.instancingColor = e.instancingColor),
        (n.instancingMorph = e.instancingMorph),
        (n.skinning = e.skinning),
        (n.morphTargets = e.morphTargets),
        (n.morphNormals = e.morphNormals),
        (n.morphColors = e.morphColors),
        (n.morphTargetsCount = e.morphTargetsCount),
        (n.numClippingPlanes = e.numClippingPlanes),
        (n.numIntersection = e.numClipIntersection),
        (n.vertexAlphas = e.vertexAlphas),
        (n.vertexTangents = e.vertexTangents),
        (n.toneMapping = e.toneMapping);
    }
    jt.setAnimationLoop(function (t) {
      Gt && Gt(t);
    }),
      "undefined" != typeof self && jt.setContext(self),
      (this.setAnimationLoop = function (t) {
        (Gt = t), Ft.setAnimationLoop(t), null === t ? jt.stop() : jt.start();
      }),
      Ft.addEventListener("sessionstart", Wt),
      Ft.addEventListener("sessionend", Xt),
      (this.render = function (t, e) {
        if (void 0 !== e && !0 !== e.isCamera) return;
        if (!0 === E) return;
        if (
          (!0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(),
          null === e.parent &&
            !0 === e.matrixWorldAutoUpdate &&
            e.updateMatrixWorld(),
          !0 === Ft.enabled &&
            !0 === Ft.isPresenting &&
            (!0 === Ft.cameraAutoUpdate && Ft.updateCamera(e),
            (e = Ft.getCamera())),
          !0 === t.isScene && t.onBeforeRender(S, t, e, A),
          (x = Mt.get(t, M.length)),
          x.init(e),
          M.push(x),
          q.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
          G.setFromProjectionMatrix(q),
          (X = this.localClippingEnabled),
          (W = St.init(this.clippingPlanes, X)),
          (v = yt.get(t, y.length)),
          v.init(),
          y.push(v),
          !0 === Ft.enabled && !0 === Ft.isPresenting)
        ) {
          const t = S.xr.getDepthSensingMesh();
          null !== t && qt(t, e, -Infinity, S.sortObjects);
        }
        qt(t, e, 0, S.sortObjects),
          v.finish(),
          !0 === S.sortObjects && v.sort(F, B),
          (K =
            !1 === Ft.enabled ||
            !1 === Ft.isPresenting ||
            !1 === Ft.hasDepthSensing()),
          K && Tt.addToRenderList(v, t),
          this.info.render.frame++,
          !0 === W && St.beginShadows();
        const n = x.state.shadowsArray;
        Et.render(n, t, e),
          !0 === W && St.endShadows(),
          !0 === this.info.autoReset && this.info.reset();
        const i = v.opaque,
          r = v.transmissive;
        if ((x.setupLights(), e.isArrayCamera)) {
          const n = e.cameras;
          if (r.length > 0)
            for (let e = 0, a = n.length; e < a; e++) {
              Zt(i, r, t, n[e]);
            }
          K && Tt.render(t);
          for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e];
            Yt(v, t, i, i.viewport);
          }
        } else r.length > 0 && Zt(i, r, t, e), K && Tt.render(t), Yt(v, t, e);
        null !== A &&
          (rt.updateMultisampleRenderTarget(A), rt.updateRenderTargetMipmap(A)),
          !0 === t.isScene && t.onAfterRender(S, t, e),
          Ut.resetDefaultState(),
          (w = -1),
          (R = null),
          M.pop(),
          M.length > 0
            ? ((x = M[M.length - 1]),
              !0 === W && St.setGlobalState(S.clippingPlanes, x.state.camera))
            : (x = null),
          y.pop(),
          (v = y.length > 0 ? y[y.length - 1] : null);
      }),
      (this.getActiveCubeFace = function () {
        return T;
      }),
      (this.getActiveMipmapLevel = function () {
        return b;
      }),
      (this.getRenderTarget = function () {
        return A;
      }),
      (this.setRenderTargetTextures = function (t, e, n) {
        (it.get(t.texture).__webglTexture = e),
          (it.get(t.depthTexture).__webglTexture = n);
        const i = it.get(t);
        (i.__hasExternalTextures = !0),
          (i.__autoAllocateDepthBuffer = void 0 === n),
          i.__autoAllocateDepthBuffer ||
            (!0 === Q.has("WEBGL_multisampled_render_to_texture") &&
              (i.__useRenderToTexture = !1));
      }),
      (this.setRenderTargetFramebuffer = function (t, e) {
        const n = it.get(t);
        (n.__webglFramebuffer = e), (n.__useDefaultFramebuffer = void 0 === e);
      }),
      (this.setRenderTarget = function (t, e = 0, n = 0) {
        (A = t), (T = e), (b = n);
        let i = !0,
          r = null,
          a = !1,
          s = !1;
        if (t) {
          const o = it.get(t);
          if (void 0 !== o.__useDefaultFramebuffer)
            et.bindFramebuffer(It.FRAMEBUFFER, null), (i = !1);
          else if (void 0 === o.__webglFramebuffer) rt.setupRenderTarget(t);
          else if (o.__hasExternalTextures)
            rt.rebindTextures(
              t,
              it.get(t.texture).__webglTexture,
              it.get(t.depthTexture).__webglTexture
            );
          else if (t.depthBuffer) {
            const e = t.depthTexture;
            if (o.__boundDepthTexture !== e) {
              if (
                null !== e &&
                it.has(e) &&
                (t.width !== e.image.width || t.height !== e.image.height)
              )
                throw new Error(
                  "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."
                );
              rt.setupDepthRenderbuffer(t);
            }
          }
          const l = t.texture;
          (l.isData3DTexture ||
            l.isDataArrayTexture ||
            l.isCompressedArrayTexture) &&
            (s = !0);
          const c = it.get(t).__webglFramebuffer;
          t.isWebGLCubeRenderTarget
            ? ((r = Array.isArray(c[e]) ? c[e][n] : c[e]), (a = !0))
            : (r =
                t.samples > 0 && !1 === rt.useMultisampledRTT(t)
                  ? it.get(t).__webglMultisampledFramebuffer
                  : Array.isArray(c)
                  ? c[n]
                  : c),
            C.copy(t.viewport),
            P.copy(t.scissor),
            (L = t.scissorTest);
        } else
          C.copy(z).multiplyScalar(O).floor(),
            P.copy(V).multiplyScalar(O).floor(),
            (L = H);
        if (
          (et.bindFramebuffer(It.FRAMEBUFFER, r) && i && et.drawBuffers(t, r),
          et.viewport(C),
          et.scissor(P),
          et.setScissorTest(L),
          a)
        ) {
          const i = it.get(t.texture);
          It.framebufferTexture2D(
            It.FRAMEBUFFER,
            It.COLOR_ATTACHMENT0,
            It.TEXTURE_CUBE_MAP_POSITIVE_X + e,
            i.__webglTexture,
            n
          );
        } else if (s) {
          const i = it.get(t.texture),
            r = e || 0;
          It.framebufferTextureLayer(
            It.FRAMEBUFFER,
            It.COLOR_ATTACHMENT0,
            i.__webglTexture,
            n || 0,
            r
          );
        }
        w = -1;
      }),
      (this.readRenderTargetPixels = function (t, e, n, i, r, a, s) {
        if (!t || !t.isWebGLRenderTarget) return;
        let o = it.get(t).__webglFramebuffer;
        if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
          et.bindFramebuffer(It.FRAMEBUFFER, o);
          try {
            const s = t.texture,
              o = s.format,
              l = s.type;
            if (!tt.textureFormatReadable(o)) return;
            if (!tt.textureTypeReadable(l)) return;
            e >= 0 &&
              e <= t.width - i &&
              n >= 0 &&
              n <= t.height - r &&
              It.readPixels(e, n, i, r, Ct.convert(o), Ct.convert(l), a);
          } finally {
            const t = null !== A ? it.get(A).__webglFramebuffer : null;
            et.bindFramebuffer(It.FRAMEBUFFER, t);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (t, e, n, i, r, a, s) {
        if (!t || !t.isWebGLRenderTarget)
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
        let o = it.get(t).__webglFramebuffer;
        if ((t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
          const s = t.texture,
            l = s.format,
            c = s.type;
          if (!tt.textureFormatReadable(l))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."
            );
          if (!tt.textureTypeReadable(c))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."
            );
          if (e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r) {
            et.bindFramebuffer(It.FRAMEBUFFER, o);
            const t = It.createBuffer();
            It.bindBuffer(It.PIXEL_PACK_BUFFER, t),
              It.bufferData(It.PIXEL_PACK_BUFFER, a.byteLength, It.STREAM_READ),
              It.readPixels(e, n, i, r, Ct.convert(l), Ct.convert(c), 0);
            const s = null !== A ? it.get(A).__webglFramebuffer : null;
            et.bindFramebuffer(It.FRAMEBUFFER, s);
            const h = It.fenceSync(It.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              It.flush(),
              await (function (t, e, n) {
                return new Promise(function (i, r) {
                  setTimeout(function a() {
                    switch (t.clientWaitSync(e, t.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                      case t.WAIT_FAILED:
                        r();
                        break;
                      case t.TIMEOUT_EXPIRED:
                        setTimeout(a, n);
                        break;
                      default:
                        i();
                    }
                  }, n);
                });
              })(It, h, 4),
              It.bindBuffer(It.PIXEL_PACK_BUFFER, t),
              It.getBufferSubData(It.PIXEL_PACK_BUFFER, 0, a),
              It.deleteBuffer(t),
              It.deleteSync(h),
              a
            );
          }
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range."
          );
        }
      }),
      (this.copyFramebufferToTexture = function (t, e = null, n = 0) {
        !0 !== t.isTexture &&
          (Ze(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed."
          ),
          (e = arguments[0] || null),
          (t = arguments[1]));
        const i = Math.pow(2, -n),
          r = Math.floor(t.image.width * i),
          a = Math.floor(t.image.height * i),
          s = null !== e ? e.x : 0,
          o = null !== e ? e.y : 0;
        rt.setTexture2D(t, 0),
          It.copyTexSubImage2D(It.TEXTURE_2D, n, 0, 0, s, o, r, a),
          et.unbindTexture();
      }),
      (this.copyTextureToTexture = function (t, e, n = null, i = null, r = 0) {
        let a, s, o, l, c, h, u, d, p;
        !0 !== t.isTexture &&
          (Ze(
            "WebGLRenderer: copyTextureToTexture function signature has changed."
          ),
          (i = arguments[0] || null),
          (t = arguments[1]),
          (e = arguments[2]),
          (r = arguments[3] || 0),
          (n = null));
        const f = t.isCompressedTexture ? t.mipmaps[r] : t.image;
        null !== n
          ? ((a = n.max.x - n.min.x),
            (s = n.max.y - n.min.y),
            (o = n.isBox3 ? n.max.z - n.min.z : 1),
            (l = n.min.x),
            (c = n.min.y),
            (h = n.isBox3 ? n.min.z : 0))
          : ((a = f.width),
            (s = f.height),
            (o = f.depth || 1),
            (l = 0),
            (c = 0),
            (h = 0)),
          null !== i
            ? ((u = i.x), (d = i.y), (p = i.z))
            : ((u = 0), (d = 0), (p = 0));
        const m = Ct.convert(e.format),
          g = Ct.convert(e.type);
        let _;
        e.isData3DTexture
          ? (rt.setTexture3D(e, 0), (_ = It.TEXTURE_3D))
          : e.isDataArrayTexture || e.isCompressedArrayTexture
          ? (rt.setTexture2DArray(e, 0), (_ = It.TEXTURE_2D_ARRAY))
          : (rt.setTexture2D(e, 0), (_ = It.TEXTURE_2D)),
          It.pixelStorei(It.UNPACK_FLIP_Y_WEBGL, e.flipY),
          It.pixelStorei(It.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha),
          It.pixelStorei(It.UNPACK_ALIGNMENT, e.unpackAlignment);
        const v = It.getParameter(It.UNPACK_ROW_LENGTH),
          x = It.getParameter(It.UNPACK_IMAGE_HEIGHT),
          y = It.getParameter(It.UNPACK_SKIP_PIXELS),
          M = It.getParameter(It.UNPACK_SKIP_ROWS),
          S = It.getParameter(It.UNPACK_SKIP_IMAGES);
        It.pixelStorei(It.UNPACK_ROW_LENGTH, f.width),
          It.pixelStorei(It.UNPACK_IMAGE_HEIGHT, f.height),
          It.pixelStorei(It.UNPACK_SKIP_PIXELS, l),
          It.pixelStorei(It.UNPACK_SKIP_ROWS, c),
          It.pixelStorei(It.UNPACK_SKIP_IMAGES, h);
        const E = t.isDataArrayTexture || t.isData3DTexture,
          T = e.isDataArrayTexture || e.isData3DTexture;
        if (t.isRenderTargetTexture || t.isDepthTexture) {
          const n = it.get(t),
            i = it.get(e),
            f = it.get(n.__renderTarget),
            m = it.get(i.__renderTarget);
          et.bindFramebuffer(It.READ_FRAMEBUFFER, f.__webglFramebuffer),
            et.bindFramebuffer(It.DRAW_FRAMEBUFFER, m.__webglFramebuffer);
          for (let g = 0; g < o; g++)
            E &&
              It.framebufferTextureLayer(
                It.READ_FRAMEBUFFER,
                It.COLOR_ATTACHMENT0,
                it.get(t).__webglTexture,
                r,
                h + g
              ),
              t.isDepthTexture
                ? (T &&
                    It.framebufferTextureLayer(
                      It.DRAW_FRAMEBUFFER,
                      It.COLOR_ATTACHMENT0,
                      it.get(e).__webglTexture,
                      r,
                      p + g
                    ),
                  It.blitFramebuffer(
                    l,
                    c,
                    a,
                    s,
                    u,
                    d,
                    a,
                    s,
                    It.DEPTH_BUFFER_BIT,
                    It.NEAREST
                  ))
                : T
                ? It.copyTexSubImage3D(_, r, u, d, p + g, l, c, a, s)
                : It.copyTexSubImage2D(_, r, u, d, p + g, l, c, a, s);
          et.bindFramebuffer(It.READ_FRAMEBUFFER, null),
            et.bindFramebuffer(It.DRAW_FRAMEBUFFER, null);
        } else
          T
            ? t.isDataTexture || t.isData3DTexture
              ? It.texSubImage3D(_, r, u, d, p, a, s, o, m, g, f.data)
              : e.isCompressedArrayTexture
              ? It.compressedTexSubImage3D(_, r, u, d, p, a, s, o, m, f.data)
              : It.texSubImage3D(_, r, u, d, p, a, s, o, m, g, f)
            : t.isDataTexture
            ? It.texSubImage2D(It.TEXTURE_2D, r, u, d, a, s, m, g, f.data)
            : t.isCompressedTexture
            ? It.compressedTexSubImage2D(
                It.TEXTURE_2D,
                r,
                u,
                d,
                f.width,
                f.height,
                m,
                f.data
              )
            : It.texSubImage2D(It.TEXTURE_2D, r, u, d, a, s, m, g, f);
        It.pixelStorei(It.UNPACK_ROW_LENGTH, v),
          It.pixelStorei(It.UNPACK_IMAGE_HEIGHT, x),
          It.pixelStorei(It.UNPACK_SKIP_PIXELS, y),
          It.pixelStorei(It.UNPACK_SKIP_ROWS, M),
          It.pixelStorei(It.UNPACK_SKIP_IMAGES, S),
          0 === r && e.generateMipmaps && It.generateMipmap(_),
          et.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (
        t,
        e,
        n = null,
        i = null,
        r = 0
      ) {
        return (
          !0 !== t.isTexture &&
            (Ze(
              "WebGLRenderer: copyTextureToTexture3D function signature has changed."
            ),
            (n = arguments[0] || null),
            (i = arguments[1] || null),
            (t = arguments[2]),
            (e = arguments[3]),
            (r = arguments[4] || 0)),
          Ze(
            'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'
          ),
          this.copyTextureToTexture(t, e, n, i, r)
        );
      }),
      (this.initRenderTarget = function (t) {
        void 0 === it.get(t).__webglFramebuffer && rt.setupRenderTarget(t);
      }),
      (this.initTexture = function (t) {
        t.isCubeTexture
          ? rt.setTextureCube(t, 0)
          : t.isData3DTexture
          ? rt.setTexture3D(t, 0)
          : t.isDataArrayTexture || t.isCompressedArrayTexture
          ? rt.setTexture2DArray(t, 0)
          : rt.setTexture2D(t, 0),
          et.unbindTexture();
      }),
      (this.resetState = function () {
        (T = 0), (b = 0), (A = null), et.reset(), Ut.reset();
      }),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return Re;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    (e.drawingBufferColorspace = Je._getDrawingBufferColorSpace(t)),
      (e.unpackColorSpace = Je._getUnpackColorSpace());
  }
}
class Io extends Mi {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new ri()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new ri()),
      (this.overrideMaterial = null),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      null !== t.background && (this.background = t.background.clone()),
      null !== t.environment && (this.environment = t.environment.clone()),
      null !== t.fog && (this.fog = t.fog.clone()),
      (this.backgroundBlurriness = t.backgroundBlurriness),
      (this.backgroundIntensity = t.backgroundIntensity),
      this.backgroundRotation.copy(t.backgroundRotation),
      (this.environmentIntensity = t.environmentIntensity),
      this.environmentRotation.copy(t.environmentRotation),
      null !== t.overrideMaterial &&
        (this.overrideMaterial = t.overrideMaterial.clone()),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      null !== this.fog && (e.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (e.object.backgroundBlurriness = this.backgroundBlurriness),
      1 !== this.backgroundIntensity &&
        (e.object.backgroundIntensity = this.backgroundIntensity),
      (e.object.backgroundRotation = this.backgroundRotation.toArray()),
      1 !== this.environmentIntensity &&
        (e.object.environmentIntensity = this.environmentIntensity),
      (e.object.environmentRotation = this.environmentRotation.toArray()),
      e
    );
  }
}
class No {
  constructor(t, e) {
    (this.isInterleavedBuffer = !0),
      (this.array = t),
      (this.stride = e),
      (this.count = void 0 !== t ? t.length / e : 0),
      (this.usage = Ae),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = Ne());
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    !0 === t && this.version++;
  }
  setUsage(t) {
    return (this.usage = t), this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.array = new t.array.constructor(t.array)),
      (this.count = t.count),
      (this.stride = t.stride),
      (this.usage = t.usage),
      this
    );
  }
  copyAt(t, e, n) {
    (t *= this.stride), (n *= e.stride);
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Ne()),
      void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
        (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(
        t.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return (this.onUploadCallback = t), this;
  }
  toJSON(t) {
    return (
      void 0 === t.arrayBuffers && (t.arrayBuffers = {}),
      void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = Ne()),
      void 0 === t.arrayBuffers[this.array.buffer._uuid] &&
        (t.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const Oo = new vn();
class Fo {
  constructor(t, e, n, i = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = t),
      (this.itemSize = e),
      (this.offset = n),
      (this.normalized = i);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      Oo.fromBufferAttribute(this, e),
        Oo.applyMatrix4(t),
        this.setXYZ(e, Oo.x, Oo.y, Oo.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Oo.fromBufferAttribute(this, e),
        Oo.applyNormalMatrix(t),
        this.setXYZ(e, Oo.x, Oo.y, Oo.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      Oo.fromBufferAttribute(this, e),
        Oo.transformDirection(t),
        this.setXYZ(e, Oo.x, Oo.y, Oo.z);
    return this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = ze(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return (
      this.normalized && (n = Ve(n, this.array)),
      (this.data.array[t * this.data.stride + this.offset + e] = n),
      this
    );
  }
  setX(t, e) {
    return (
      this.normalized && (e = Ve(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset] = e),
      this
    );
  }
  setY(t, e) {
    return (
      this.normalized && (e = Ve(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 1] = e),
      this
    );
  }
  setZ(t, e) {
    return (
      this.normalized && (e = Ve(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 2] = e),
      this
    );
  }
  setW(t, e) {
    return (
      this.normalized && (e = Ve(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 3] = e),
      this
    );
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = ze(e, this.array)), e;
  }
  setXY(t, e, n) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized && ((e = Ve(e, this.array)), (n = Ve(n, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      this
    );
  }
  setXYZ(t, e, n, i) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized &&
        ((e = Ve(e, this.array)),
        (n = Ve(n, this.array)),
        (i = Ve(i, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = i),
      this
    );
  }
  setXYZW(t, e, n, i, r) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized &&
        ((e = Ve(e, this.array)),
        (n = Ve(n, this.array)),
        (i = Ve(i, this.array)),
        (r = Ve(r, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = i),
      (this.data.array[t + 3] = r),
      this
    );
  }
  clone(t) {
    if (void 0 === t) {
      const t = [];
      for (let e = 0; e < this.count; e++) {
        const n = e * this.data.stride + this.offset;
        for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
      }
      return new qi(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    }
    return (
      void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
      void 0 === t.interleavedBuffers[this.data.uuid] &&
        (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
      new Fo(
        t.interleavedBuffers[this.data.uuid],
        this.itemSize,
        this.offset,
        this.normalized
      )
    );
  }
  toJSON(t) {
    if (void 0 === t) {
      const t = [];
      for (let e = 0; e < this.count; e++) {
        const n = e * this.data.stride + this.offset;
        for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    }
    return (
      void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}),
      void 0 === t.interleavedBuffers[this.data.uuid] &&
        (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
      {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized,
      }
    );
  }
}
class Bo extends Gi {
  static get type() {
    return "LineBasicMaterial";
  }
  constructor(t) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.color = new Vi(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.linewidth = t.linewidth),
      (this.linecap = t.linecap),
      (this.linejoin = t.linejoin),
      (this.fog = t.fog),
      this
    );
  }
}
const zo = new vn(),
  Vo = new vn(),
  Ho = new Yn(),
  ko = new qn(),
  Go = new zn(),
  Wo = new vn(),
  Xo = new vn();
class jo extends Mi {
  constructor(t = new rr(), e = new Bo()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  computeLineDistances() {
    const t = this.geometry;
    if (null === t.index) {
      const e = t.attributes.position,
        n = [0];
      for (let t = 1, i = e.count; t < i; t++)
        zo.fromBufferAttribute(e, t - 1),
          Vo.fromBufferAttribute(e, t),
          (n[t] = n[t - 1]),
          (n[t] += zo.distanceTo(Vo));
      t.setAttribute("lineDistance", new Ji(n, 1));
    }
    return this;
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = t.params.Line.threshold,
      a = n.drawRange;
    if (
      (null === n.boundingSphere && n.computeBoundingSphere(),
      Go.copy(n.boundingSphere),
      Go.applyMatrix4(i),
      (Go.radius += r),
      !1 === t.ray.intersectsSphere(Go))
    )
      return;
    Ho.copy(i).invert(), ko.copy(t.ray).applyMatrix4(Ho);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      o = s * s,
      l = this.isLineSegments ? 2 : 1,
      c = n.index,
      h = n.attributes.position;
    if (null !== c) {
      const n = Math.max(0, a.start),
        i = Math.min(c.count, a.start + a.count);
      for (let r = n, a = i - 1; r < a; r += l) {
        const n = c.getX(r),
          i = c.getX(r + 1),
          a = qo(this, t, ko, o, n, i);
        a && e.push(a);
      }
      if (this.isLineLoop) {
        const r = c.getX(i - 1),
          a = c.getX(n),
          s = qo(this, t, ko, o, r, a);
        s && e.push(s);
      }
    } else {
      const n = Math.max(0, a.start),
        i = Math.min(h.count, a.start + a.count);
      for (let r = n, a = i - 1; r < a; r += l) {
        const n = qo(this, t, ko, o, r, r + 1);
        n && e.push(n);
      }
      if (this.isLineLoop) {
        const r = qo(this, t, ko, o, i - 1, n);
        r && e.push(r);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      e = Object.keys(t);
    if (e.length > 0) {
      const n = t[e[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let t = 0, e = n.length; t < e; t++) {
          const e = n[t].name || String(t);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[e] = t);
        }
      }
    }
  }
}
function qo(t, e, n, i, r, a) {
  const s = t.geometry.attributes.position;
  zo.fromBufferAttribute(s, r), Vo.fromBufferAttribute(s, a);
  if (n.distanceSqToSegment(zo, Vo, Wo, Xo) > i) return;
  Wo.applyMatrix4(t.matrixWorld);
  const o = e.ray.origin.distanceTo(Wo);
  return o < e.near || o > e.far
    ? void 0
    : {
        distance: o,
        point: Xo.clone().applyMatrix4(t.matrixWorld),
        index: r,
        face: null,
        faceIndex: null,
        barycoord: null,
        object: t,
      };
}
const Yo = new vn(),
  Zo = new vn();
class Jo extends jo {
  constructor(t, e) {
    super(t, e), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const t = this.geometry;
    if (null === t.index) {
      const e = t.attributes.position,
        n = [];
      for (let t = 0, i = e.count; t < i; t += 2)
        Yo.fromBufferAttribute(e, t),
          Zo.fromBufferAttribute(e, t + 1),
          (n[t] = 0 === t ? 0 : n[t - 1]),
          (n[t + 1] = n[t] + Yo.distanceTo(Zo));
      t.setAttribute("lineDistance", new Ji(n, 1));
    }
    return this;
  }
}
class Ko extends Gi {
  static get type() {
    return "PointsMaterial";
  }
  constructor(t) {
    super(),
      (this.isPointsMaterial = !0),
      (this.color = new Vi(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.size = t.size),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    );
  }
}
const $o = new Yn(),
  Qo = new qn(),
  tl = new zn(),
  el = new vn();
class nl extends Mi {
  constructor(t = new rr(), e = new Ko()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = t),
      (this.material = e),
      this.updateMorphTargets();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  raycast(t, e) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = t.params.Points.threshold,
      a = n.drawRange;
    if (
      (null === n.boundingSphere && n.computeBoundingSphere(),
      tl.copy(n.boundingSphere),
      tl.applyMatrix4(i),
      (tl.radius += r),
      !1 === t.ray.intersectsSphere(tl))
    )
      return;
    $o.copy(i).invert(), Qo.copy(t.ray).applyMatrix4($o);
    const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      o = s * s,
      l = n.index,
      c = n.attributes.position;
    if (null !== l) {
      for (
        let n = Math.max(0, a.start), r = Math.min(l.count, a.start + a.count);
        n < r;
        n++
      ) {
        const r = l.getX(n);
        el.fromBufferAttribute(c, r), il(el, r, o, i, t, e, this);
      }
    } else {
      for (
        let n = Math.max(0, a.start), r = Math.min(c.count, a.start + a.count);
        n < r;
        n++
      )
        el.fromBufferAttribute(c, n), il(el, n, o, i, t, e, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      e = Object.keys(t);
    if (e.length > 0) {
      const n = t[e[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let t = 0, e = n.length; t < e; t++) {
          const e = n[t].name || String(t);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[e] = t);
        }
      }
    }
  }
}
function il(t, e, n, i, r, a, s) {
  const o = Qo.distanceSqToPoint(t);
  if (o < n) {
    const n = new vn();
    Qo.closestPointToPoint(t, n), n.applyMatrix4(i);
    const l = r.ray.origin.distanceTo(n);
    if (l < r.near || l > r.far) return;
    a.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: n,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s,
    });
  }
}
class rl extends un {
  constructor(t, e) {
    super({ width: t, height: e }),
      (this.isFramebufferTexture = !0),
      (this.magFilter = nt),
      (this.minFilter = nt),
      (this.generateMipmaps = !1),
      (this.needsUpdate = !0);
  }
}
class al extends un {
  constructor(t, e, n, i, r, a, s, o, l, c, h, u) {
    super(null, a, s, o, l, c, i, r, h, u),
      (this.isCompressedTexture = !0),
      (this.image = { width: e, height: n }),
      (this.mipmaps = t),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class sl {
  constructor() {
    (this.type = "Curve"), (this.arcLengthDivisions = 200);
  }
  getPoint() {
    return null;
  }
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return e;
  }
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
    return e;
  }
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  getLengths(t = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === t + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n,
      i = this.getPoint(0),
      r = 0;
    e.push(0);
    for (let a = 1; a <= t; a++)
      (n = this.getPoint(a / t)), (r += n.distanceTo(i)), e.push(r), (i = n);
    return (this.cacheArcLengths = e), e;
  }
  updateArcLengths() {
    (this.needsUpdate = !0), this.getLengths();
  }
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let a;
    a = e || t * n[r - 1];
    let s,
      o = 0,
      l = r - 1;
    for (; o <= l; )
      if (((i = Math.floor(o + (l - o) / 2)), (s = n[i] - a), s < 0)) o = i + 1;
      else {
        if (!(s > 0)) {
          l = i;
          break;
        }
        l = i - 1;
      }
    if (((i = l), n[i] === a)) return i / (r - 1);
    const c = n[i];
    return (i + (a - c) / (n[i + 1] - c)) / (r - 1);
  }
  getTangent(t, e) {
    const n = 1e-4;
    let i = t - n,
      r = t + n;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const a = this.getPoint(i),
      s = this.getPoint(r),
      o = e || (a.isVector2 ? new ke() : new vn());
    return o.copy(s).sub(a).normalize(), o;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new vn(),
      i = [],
      r = [],
      a = [],
      s = new vn(),
      o = new Yn();
    for (let d = 0; d <= t; d++) {
      const e = d / t;
      i[d] = this.getTangentAt(e, new vn());
    }
    (r[0] = new vn()), (a[0] = new vn());
    let l = Number.MAX_VALUE;
    const c = Math.abs(i[0].x),
      h = Math.abs(i[0].y),
      u = Math.abs(i[0].z);
    c <= l && ((l = c), n.set(1, 0, 0)),
      h <= l && ((l = h), n.set(0, 1, 0)),
      u <= l && n.set(0, 0, 1),
      s.crossVectors(i[0], n).normalize(),
      r[0].crossVectors(i[0], s),
      a[0].crossVectors(i[0], r[0]);
    for (let d = 1; d <= t; d++) {
      if (
        ((r[d] = r[d - 1].clone()),
        (a[d] = a[d - 1].clone()),
        s.crossVectors(i[d - 1], i[d]),
        s.length() > Number.EPSILON)
      ) {
        s.normalize();
        const t = Math.acos(Oe(i[d - 1].dot(i[d]), -1, 1));
        r[d].applyMatrix4(o.makeRotationAxis(s, t));
      }
      a[d].crossVectors(i[d], r[d]);
    }
    if (!0 === e) {
      let e = Math.acos(Oe(r[0].dot(r[t]), -1, 1));
      (e /= t), i[0].dot(s.crossVectors(r[0], r[t])) > 0 && (e = -e);
      for (let n = 1; n <= t; n++)
        r[n].applyMatrix4(o.makeRotationAxis(i[n], e * n)),
          a[n].crossVectors(i[n], r[n]);
    }
    return { tangents: i, normals: r, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (this.arcLengthDivisions = t.arcLengthDivisions), this;
  }
  toJSON() {
    const t = {
      metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (t.arcLengthDivisions = this.arcLengthDivisions), (t.type = this.type), t
    );
  }
  fromJSON(t) {
    return (this.arcLengthDivisions = t.arcLengthDivisions), this;
  }
}
class ol extends sl {
  constructor(
    t = 0,
    e = 0,
    n = 1,
    i = 1,
    r = 0,
    a = 2 * Math.PI,
    s = !1,
    o = 0
  ) {
    super(),
      (this.isEllipseCurve = !0),
      (this.type = "EllipseCurve"),
      (this.aX = t),
      (this.aY = e),
      (this.xRadius = n),
      (this.yRadius = i),
      (this.aStartAngle = r),
      (this.aEndAngle = a),
      (this.aClockwise = s),
      (this.aRotation = o);
  }
  getPoint(t, e = new ke()) {
    const n = e,
      i = 2 * Math.PI;
    let r = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += i;
    for (; r > i; ) r -= i;
    r < Number.EPSILON && (r = a ? 0 : i),
      !0 !== this.aClockwise || a || (r === i ? (r = -i) : (r -= i));
    const s = this.aStartAngle + t * r;
    let o = this.aX + this.xRadius * Math.cos(s),
      l = this.aY + this.yRadius * Math.sin(s);
    if (0 !== this.aRotation) {
      const t = Math.cos(this.aRotation),
        e = Math.sin(this.aRotation),
        n = o - this.aX,
        i = l - this.aY;
      (o = n * t - i * e + this.aX), (l = n * e + i * t + this.aY);
    }
    return n.set(o, l);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.aX = this.aX),
      (t.aY = this.aY),
      (t.xRadius = this.xRadius),
      (t.yRadius = this.yRadius),
      (t.aStartAngle = this.aStartAngle),
      (t.aEndAngle = this.aEndAngle),
      (t.aClockwise = this.aClockwise),
      (t.aRotation = this.aRotation),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    );
  }
}
function ll() {
  let t = 0,
    e = 0,
    n = 0,
    i = 0;
  function r(r, a, s, o) {
    (t = r),
      (e = s),
      (n = -3 * r + 3 * a - 2 * s - o),
      (i = 2 * r - 2 * a + s + o);
  }
  return {
    initCatmullRom: function (t, e, n, i, a) {
      r(e, n, a * (n - t), a * (i - e));
    },
    initNonuniformCatmullRom: function (t, e, n, i, a, s, o) {
      let l = (e - t) / a - (n - t) / (a + s) + (n - e) / s,
        c = (n - e) / s - (i - e) / (s + o) + (i - n) / o;
      (l *= s), (c *= s), r(e, n, l, c);
    },
    calc: function (r) {
      const a = r * r;
      return t + e * r + n * a + i * (a * r);
    },
  };
}
const cl = new vn(),
  hl = new ll(),
  ul = new ll(),
  dl = new ll();
function pl(t, e, n, i, r) {
  const a = 0.5 * (i - e),
    s = 0.5 * (r - n),
    o = t * t;
  return (
    (2 * n - 2 * i + a + s) * (t * o) +
    (-3 * n + 3 * i - 2 * a - s) * o +
    a * t +
    n
  );
}
function fl(t, e, n, i) {
  return (
    (function (t, e) {
      const n = 1 - t;
      return n * n * e;
    })(t, e) +
    (function (t, e) {
      return 2 * (1 - t) * t * e;
    })(t, n) +
    (function (t, e) {
      return t * t * e;
    })(t, i)
  );
}
function ml(t, e, n, i, r) {
  return (
    (function (t, e) {
      const n = 1 - t;
      return n * n * n * e;
    })(t, e) +
    (function (t, e) {
      const n = 1 - t;
      return 3 * n * n * t * e;
    })(t, n) +
    (function (t, e) {
      return 3 * (1 - t) * t * t * e;
    })(t, i) +
    (function (t, e) {
      return t * t * t * e;
    })(t, r)
  );
}
class gl extends sl {
  constructor(t = new ke(), e = new ke(), n = new ke(), i = new ke()) {
    super(),
      (this.isCubicBezierCurve = !0),
      (this.type = "CubicBezierCurve"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = i);
  }
  getPoint(t, e = new ke()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      a = this.v2,
      s = this.v3;
    return n.set(ml(t, i.x, r.x, a.x, s.x), ml(t, i.y, r.y, a.y, s.y)), n;
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    );
  }
}
class _l extends sl {
  constructor(t = new ke(), e = new ke()) {
    super(),
      (this.isLineCurve = !0),
      (this.type = "LineCurve"),
      (this.v1 = t),
      (this.v2 = e);
  }
  getPoint(t, e = new ke()) {
    const n = e;
    return (
      1 === t
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    );
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new ke()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
  }
  fromJSON(t) {
    return (
      super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
    );
  }
}
class vl extends sl {
  constructor(t = new ke(), e = new ke(), n = new ke()) {
    super(),
      (this.isQuadraticBezierCurve = !0),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n);
  }
  getPoint(t, e = new ke()) {
    const n = e,
      i = this.v0,
      r = this.v1,
      a = this.v2;
    return n.set(fl(t, i.x, r.x, a.x), fl(t, i.y, r.y, a.y)), n;
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
}
class xl extends sl {
  constructor(t = []) {
    super(),
      (this.isSplineCurve = !0),
      (this.type = "SplineCurve"),
      (this.points = t);
  }
  getPoint(t, e = new ke()) {
    const n = e,
      i = this.points,
      r = (i.length - 1) * t,
      a = Math.floor(r),
      s = r - a,
      o = i[0 === a ? a : a - 1],
      l = i[a],
      c = i[a > i.length - 2 ? i.length - 1 : a + 1],
      h = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(pl(s, o.x, l.x, c.x, h.x), pl(s, o.y, l.y, c.y, h.y)), n;
  }
  copy(t) {
    super.copy(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const n = t.points[e];
      this.points.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const n = this.points[e];
      t.points.push(n.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), (this.points = []);
    for (let e = 0, n = t.points.length; e < n; e++) {
      const n = t.points[e];
      this.points.push(new ke().fromArray(n));
    }
    return this;
  }
}
var yl = Object.freeze({
  __proto__: null,
  ArcCurve: class extends ol {
    constructor(t, e, n, i, r, a) {
      super(t, e, n, n, i, r, a),
        (this.isArcCurve = !0),
        (this.type = "ArcCurve");
    }
  },
  CatmullRomCurve3: class extends sl {
    constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
      super(),
        (this.isCatmullRomCurve3 = !0),
        (this.type = "CatmullRomCurve3"),
        (this.points = t),
        (this.closed = e),
        (this.curveType = n),
        (this.tension = i);
    }
    getPoint(t, e = new vn()) {
      const n = e,
        i = this.points,
        r = i.length,
        a = (r - (this.closed ? 0 : 1)) * t;
      let s,
        o,
        l = Math.floor(a),
        c = a - l;
      this.closed
        ? (l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r)
        : 0 === c && l === r - 1 && ((l = r - 2), (c = 1)),
        this.closed || l > 0
          ? (s = i[(l - 1) % r])
          : (cl.subVectors(i[0], i[1]).add(i[0]), (s = cl));
      const h = i[l % r],
        u = i[(l + 1) % r];
      if (
        (this.closed || l + 2 < r
          ? (o = i[(l + 2) % r])
          : (cl.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), (o = cl)),
        "centripetal" === this.curveType || "chordal" === this.curveType)
      ) {
        const t = "chordal" === this.curveType ? 0.5 : 0.25;
        let e = Math.pow(s.distanceToSquared(h), t),
          n = Math.pow(h.distanceToSquared(u), t),
          i = Math.pow(u.distanceToSquared(o), t);
        n < 1e-4 && (n = 1),
          e < 1e-4 && (e = n),
          i < 1e-4 && (i = n),
          hl.initNonuniformCatmullRom(s.x, h.x, u.x, o.x, e, n, i),
          ul.initNonuniformCatmullRom(s.y, h.y, u.y, o.y, e, n, i),
          dl.initNonuniformCatmullRom(s.z, h.z, u.z, o.z, e, n, i);
      } else
        "catmullrom" === this.curveType &&
          (hl.initCatmullRom(s.x, h.x, u.x, o.x, this.tension),
          ul.initCatmullRom(s.y, h.y, u.y, o.y, this.tension),
          dl.initCatmullRom(s.z, h.z, u.z, o.z, this.tension));
      return n.set(hl.calc(c), ul.calc(c), dl.calc(c)), n;
    }
    copy(t) {
      super.copy(t), (this.points = []);
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push(n.clone());
      }
      return (
        (this.closed = t.closed),
        (this.curveType = t.curveType),
        (this.tension = t.tension),
        this
      );
    }
    toJSON() {
      const t = super.toJSON();
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n = this.points[e];
        t.points.push(n.toArray());
      }
      return (
        (t.closed = this.closed),
        (t.curveType = this.curveType),
        (t.tension = this.tension),
        t
      );
    }
    fromJSON(t) {
      super.fromJSON(t), (this.points = []);
      for (let e = 0, n = t.points.length; e < n; e++) {
        const n = t.points[e];
        this.points.push(new vn().fromArray(n));
      }
      return (
        (this.closed = t.closed),
        (this.curveType = t.curveType),
        (this.tension = t.tension),
        this
      );
    }
  },
  CubicBezierCurve: gl,
  CubicBezierCurve3: class extends sl {
    constructor(t = new vn(), e = new vn(), n = new vn(), i = new vn()) {
      super(),
        (this.isCubicBezierCurve3 = !0),
        (this.type = "CubicBezierCurve3"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n),
        (this.v3 = i);
    }
    getPoint(t, e = new vn()) {
      const n = e,
        i = this.v0,
        r = this.v1,
        a = this.v2,
        s = this.v3;
      return (
        n.set(
          ml(t, i.x, r.x, a.x, s.x),
          ml(t, i.y, r.y, a.y, s.y),
          ml(t, i.z, r.z, a.z, s.z)
        ),
        n
      );
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
      );
    }
    toJSON() {
      const t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        (t.v3 = this.v3.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
      );
    }
  },
  EllipseCurve: ol,
  LineCurve: _l,
  LineCurve3: class extends sl {
    constructor(t = new vn(), e = new vn()) {
      super(),
        (this.isLineCurve3 = !0),
        (this.type = "LineCurve3"),
        (this.v1 = t),
        (this.v2 = e);
    }
    getPoint(t, e = new vn()) {
      const n = e;
      return (
        1 === t
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
        n
      );
    }
    getPointAt(t, e) {
      return this.getPoint(t, e);
    }
    getTangent(t, e = new vn()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t, e) {
      return this.getTangent(t, e);
    }
    copy(t) {
      return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
    }
    toJSON() {
      const t = super.toJSON();
      return (t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t;
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  },
  QuadraticBezierCurve: vl,
  QuadraticBezierCurve3: class extends sl {
    constructor(t = new vn(), e = new vn(), n = new vn()) {
      super(),
        (this.isQuadraticBezierCurve3 = !0),
        (this.type = "QuadraticBezierCurve3"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n);
    }
    getPoint(t, e = new vn()) {
      const n = e,
        i = this.v0,
        r = this.v1,
        a = this.v2;
      return (
        n.set(fl(t, i.x, r.x, a.x), fl(t, i.y, r.y, a.y), fl(t, i.z, r.z, a.z)),
        n
      );
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
      );
    }
    toJSON() {
      const t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  },
  SplineCurve: xl,
});
class Ml extends sl {
  constructor() {
    super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1);
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0),
      e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = !0 === t.isVector2 ? "LineCurve" : "LineCurve3";
      this.curves.push(new yl[n](e, t));
    }
    return this;
  }
  getPoint(t, e) {
    const n = t * this.getLength(),
      i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const t = i[r] - n,
          a = this.curves[r],
          s = a.getLength(),
          o = 0 === s ? 0 : 1 - t / s;
        return a.getPointAt(o, e);
      }
      r++;
    }
    return null;
  }
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  updateArcLengths() {
    (this.needsUpdate = !0), (this.cacheLengths = null), this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      (e += this.curves[n].getLength()), t.push(e);
    return (this.cacheLengths = t), t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const a = r[i],
        s = a.isEllipseCurve
          ? 2 * t
          : a.isLineCurve || a.isLineCurve3
          ? 1
          : a.isSplineCurve
          ? t * a.points.length
          : t,
        o = a.getPoints(s);
      for (let t = 0; t < o.length; t++) {
        const i = o[t];
        (n && n.equals(i)) || (e.push(i), (n = i));
      }
    }
    return (
      this.autoClose &&
        e.length > 1 &&
        !e[e.length - 1].equals(e[0]) &&
        e.push(e[0]),
      e
    );
  }
  copy(t) {
    super.copy(t), (this.curves = []);
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const n = t.curves[e];
      this.curves.push(n.clone());
    }
    return (this.autoClose = t.autoClose), this;
  }
  toJSON() {
    const t = super.toJSON();
    (t.autoClose = this.autoClose), (t.curves = []);
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const n = this.curves[e];
      t.curves.push(n.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []);
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const n = t.curves[e];
      this.curves.push(new yl[n.type]().fromJSON(n));
    }
    return this;
  }
}
class Sl extends Ml {
  constructor(t) {
    super(),
      (this.type = "Path"),
      (this.currentPoint = new ke()),
      t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new _l(this.currentPoint.clone(), new ke(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    const r = new vl(this.currentPoint.clone(), new ke(t, e), new ke(n, i));
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(t, e, n, i, r, a) {
    const s = new gl(
      this.currentPoint.clone(),
      new ke(t, e),
      new ke(n, i),
      new ke(r, a)
    );
    return this.curves.push(s), this.currentPoint.set(r, a), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t),
      n = new xl(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, i, r, a) {
    const s = this.currentPoint.x,
      o = this.currentPoint.y;
    return this.absarc(t + s, e + o, n, i, r, a), this;
  }
  absarc(t, e, n, i, r, a) {
    return this.absellipse(t, e, n, n, i, r, a), this;
  }
  ellipse(t, e, n, i, r, a, s, o) {
    const l = this.currentPoint.x,
      c = this.currentPoint.y;
    return this.absellipse(t + l, e + c, n, i, r, a, s, o), this;
  }
  absellipse(t, e, n, i, r, a, s, o) {
    const l = new ol(t, e, n, i, r, a, s, o);
    if (this.curves.length > 0) {
      const t = l.getPoint(0);
      t.equals(this.currentPoint) || this.lineTo(t.x, t.y);
    }
    this.curves.push(l);
    const c = l.getPoint(1);
    return this.currentPoint.copy(c), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return (t.currentPoint = this.currentPoint.toArray()), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class El extends Sl {
  constructor(t) {
    super(t), (this.uuid = Ne()), (this.type = "Shape"), (this.holes = []);
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  extractPoints(t) {
    return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
  }
  copy(t) {
    super.copy(t), (this.holes = []);
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const n = t.holes[e];
      this.holes.push(n.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    (t.uuid = this.uuid), (t.holes = []);
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const n = this.holes[e];
      t.holes.push(n.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []);
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const n = t.holes[e];
      this.holes.push(new Sl().fromJSON(n));
    }
    return this;
  }
}
const Tl = function (t, e, n = 2) {
  const i = e && e.length,
    r = i ? e[0] * n : t.length;
  let a = bl(t, 0, r, n, !0);
  const s = [];
  if (!a || a.next === a.prev) return s;
  let o, l, c, h, u, d, p;
  if (
    (i &&
      (a = (function (t, e, n, i) {
        const r = [];
        let a, s, o, l, c;
        for (a = 0, s = e.length; a < s; a++)
          (o = e[a] * i),
            (l = a < s - 1 ? e[a + 1] * i : t.length),
            (c = bl(t, o, l, i, !1)),
            c === c.next && (c.steiner = !0),
            r.push(Ol(c));
        for (r.sort(Ul), a = 0; a < r.length; a++) n = Dl(r[a], n);
        return n;
      })(t, e, a, n)),
    t.length > 80 * n)
  ) {
    (o = c = t[0]), (l = h = t[1]);
    for (let e = n; e < r; e += n)
      (u = t[e]),
        (d = t[e + 1]),
        u < o && (o = u),
        d < l && (l = d),
        u > c && (c = u),
        d > h && (h = d);
    (p = Math.max(c - o, h - l)), (p = 0 !== p ? 32767 / p : 0);
  }
  return wl(a, s, n, o, l, p, 0), s;
};
function bl(t, e, n, i, r) {
  let a, s;
  if (
    r ===
    (function (t, e, n, i) {
      let r = 0;
      for (let a = e, s = n - i; a < n; a += i)
        (r += (t[s] - t[a]) * (t[a + 1] + t[s + 1])), (s = a);
      return r;
    })(t, e, n, i) >
      0
  )
    for (a = e; a < n; a += i) s = jl(a, t[a], t[a + 1], s);
  else for (a = n - i; a >= e; a -= i) s = jl(a, t[a], t[a + 1], s);
  return s && Vl(s, s.next) && (ql(s), (s = s.next)), s;
}
function Al(t, e) {
  if (!t) return t;
  e || (e = t);
  let n,
    i = t;
  do {
    if (
      ((n = !1), i.steiner || (!Vl(i, i.next) && 0 !== zl(i.prev, i, i.next)))
    )
      i = i.next;
    else {
      if ((ql(i), (i = e = i.prev), i === i.next)) break;
      n = !0;
    }
  } while (n || i !== e);
  return e;
}
function wl(t, e, n, i, r, a, s) {
  if (!t) return;
  !s &&
    a &&
    (function (t, e, n, i) {
      let r = t;
      do {
        0 === r.z && (r.z = Nl(r.x, r.y, e, n, i)),
          (r.prevZ = r.prev),
          (r.nextZ = r.next),
          (r = r.next);
      } while (r !== t);
      (r.prevZ.nextZ = null),
        (r.prevZ = null),
        (function (t) {
          let e,
            n,
            i,
            r,
            a,
            s,
            o,
            l,
            c = 1;
          do {
            for (n = t, t = null, a = null, s = 0; n; ) {
              for (
                s++, i = n, o = 0, e = 0;
                e < c && (o++, (i = i.nextZ), i);
                e++
              );
              for (l = c; o > 0 || (l > 0 && i); )
                0 !== o && (0 === l || !i || n.z <= i.z)
                  ? ((r = n), (n = n.nextZ), o--)
                  : ((r = i), (i = i.nextZ), l--),
                  a ? (a.nextZ = r) : (t = r),
                  (r.prevZ = a),
                  (a = r);
              n = i;
            }
            (a.nextZ = null), (c *= 2);
          } while (s > 1);
        })(r);
    })(t, i, r, a);
  let o,
    l,
    c = t;
  for (; t.prev !== t.next; )
    if (((o = t.prev), (l = t.next), a ? Cl(t, i, r, a) : Rl(t)))
      e.push((o.i / n) | 0),
        e.push((t.i / n) | 0),
        e.push((l.i / n) | 0),
        ql(t),
        (t = l.next),
        (c = l.next);
    else if ((t = l) === c) {
      s
        ? 1 === s
          ? wl((t = Pl(Al(t), e, n)), e, n, i, r, a, 2)
          : 2 === s && Ll(t, e, n, i, r, a)
        : wl(Al(t), e, n, i, r, a, 1);
      break;
    }
}
function Rl(t) {
  const e = t.prev,
    n = t,
    i = t.next;
  if (zl(e, n, i) >= 0) return !1;
  const r = e.x,
    a = n.x,
    s = i.x,
    o = e.y,
    l = n.y,
    c = i.y,
    h = r < a ? (r < s ? r : s) : a < s ? a : s,
    u = o < l ? (o < c ? o : c) : l < c ? l : c,
    d = r > a ? (r > s ? r : s) : a > s ? a : s,
    p = o > l ? (o > c ? o : c) : l > c ? l : c;
  let f = i.next;
  for (; f !== e; ) {
    if (
      f.x >= h &&
      f.x <= d &&
      f.y >= u &&
      f.y <= p &&
      Fl(r, o, a, l, s, c, f.x, f.y) &&
      zl(f.prev, f, f.next) >= 0
    )
      return !1;
    f = f.next;
  }
  return !0;
}
function Cl(t, e, n, i) {
  const r = t.prev,
    a = t,
    s = t.next;
  if (zl(r, a, s) >= 0) return !1;
  const o = r.x,
    l = a.x,
    c = s.x,
    h = r.y,
    u = a.y,
    d = s.y,
    p = o < l ? (o < c ? o : c) : l < c ? l : c,
    f = h < u ? (h < d ? h : d) : u < d ? u : d,
    m = o > l ? (o > c ? o : c) : l > c ? l : c,
    g = h > u ? (h > d ? h : d) : u > d ? u : d,
    _ = Nl(p, f, e, n, i),
    v = Nl(m, g, e, n, i);
  let x = t.prevZ,
    y = t.nextZ;
  for (; x && x.z >= _ && y && y.z <= v; ) {
    if (
      x.x >= p &&
      x.x <= m &&
      x.y >= f &&
      x.y <= g &&
      x !== r &&
      x !== s &&
      Fl(o, h, l, u, c, d, x.x, x.y) &&
      zl(x.prev, x, x.next) >= 0
    )
      return !1;
    if (
      ((x = x.prevZ),
      y.x >= p &&
        y.x <= m &&
        y.y >= f &&
        y.y <= g &&
        y !== r &&
        y !== s &&
        Fl(o, h, l, u, c, d, y.x, y.y) &&
        zl(y.prev, y, y.next) >= 0)
    )
      return !1;
    y = y.nextZ;
  }
  for (; x && x.z >= _; ) {
    if (
      x.x >= p &&
      x.x <= m &&
      x.y >= f &&
      x.y <= g &&
      x !== r &&
      x !== s &&
      Fl(o, h, l, u, c, d, x.x, x.y) &&
      zl(x.prev, x, x.next) >= 0
    )
      return !1;
    x = x.prevZ;
  }
  for (; y && y.z <= v; ) {
    if (
      y.x >= p &&
      y.x <= m &&
      y.y >= f &&
      y.y <= g &&
      y !== r &&
      y !== s &&
      Fl(o, h, l, u, c, d, y.x, y.y) &&
      zl(y.prev, y, y.next) >= 0
    )
      return !1;
    y = y.nextZ;
  }
  return !0;
}
function Pl(t, e, n) {
  let i = t;
  do {
    const r = i.prev,
      a = i.next.next;
    !Vl(r, a) &&
      Hl(r, i, i.next, a) &&
      Wl(r, a) &&
      Wl(a, r) &&
      (e.push((r.i / n) | 0),
      e.push((i.i / n) | 0),
      e.push((a.i / n) | 0),
      ql(i),
      ql(i.next),
      (i = t = a)),
      (i = i.next);
  } while (i !== t);
  return Al(i);
}
function Ll(t, e, n, i, r, a) {
  let s = t;
  do {
    let t = s.next.next;
    for (; t !== s.prev; ) {
      if (s.i !== t.i && Bl(s, t)) {
        let o = Xl(s, t);
        return (
          (s = Al(s, s.next)),
          (o = Al(o, o.next)),
          wl(s, e, n, i, r, a, 0),
          void wl(o, e, n, i, r, a, 0)
        );
      }
      t = t.next;
    }
    s = s.next;
  } while (s !== t);
}
function Ul(t, e) {
  return t.x - e.x;
}
function Dl(t, e) {
  const n = (function (t, e) {
    let n,
      i = e,
      r = -Infinity;
    const a = t.x,
      s = t.y;
    do {
      if (s <= i.y && s >= i.next.y && i.next.y !== i.y) {
        const t = i.x + ((s - i.y) * (i.next.x - i.x)) / (i.next.y - i.y);
        if (
          t <= a &&
          t > r &&
          ((r = t), (n = i.x < i.next.x ? i : i.next), t === a)
        )
          return n;
      }
      i = i.next;
    } while (i !== e);
    if (!n) return null;
    const o = n,
      l = n.x,
      c = n.y;
    let h,
      u = Infinity;
    i = n;
    do {
      a >= i.x &&
        i.x >= l &&
        a !== i.x &&
        Fl(s < c ? a : r, s, l, c, s < c ? r : a, s, i.x, i.y) &&
        ((h = Math.abs(s - i.y) / (a - i.x)),
        Wl(i, t) &&
          (h < u || (h === u && (i.x > n.x || (i.x === n.x && Il(n, i))))) &&
          ((n = i), (u = h))),
        (i = i.next);
    } while (i !== o);
    return n;
  })(t, e);
  if (!n) return e;
  const i = Xl(n, t);
  return Al(i, i.next), Al(n, n.next);
}
function Il(t, e) {
  return zl(t.prev, t, e.prev) < 0 && zl(e.next, t, t.next) < 0;
}
function Nl(t, e, n, i, r) {
  return (
    (t =
      1431655765 &
      ((t =
        858993459 &
        ((t =
          252645135 &
          ((t = 16711935 & ((t = ((t - n) * r) | 0) | (t << 8))) | (t << 4))) |
          (t << 2))) |
        (t << 1))) |
    ((e =
      1431655765 &
      ((e =
        858993459 &
        ((e =
          252645135 &
          ((e = 16711935 & ((e = ((e - i) * r) | 0) | (e << 8))) | (e << 4))) |
          (e << 2))) |
        (e << 1))) <<
      1)
  );
}
function Ol(t) {
  let e = t,
    n = t;
  do {
    (e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
  } while (e !== t);
  return n;
}
function Fl(t, e, n, i, r, a, s, o) {
  return (
    (r - s) * (e - o) >= (t - s) * (a - o) &&
    (t - s) * (i - o) >= (n - s) * (e - o) &&
    (n - s) * (a - o) >= (r - s) * (i - o)
  );
}
function Bl(t, e) {
  return (
    t.next.i !== e.i &&
    t.prev.i !== e.i &&
    !(function (t, e) {
      let n = t;
      do {
        if (
          n.i !== t.i &&
          n.next.i !== t.i &&
          n.i !== e.i &&
          n.next.i !== e.i &&
          Hl(n, n.next, t, e)
        )
          return !0;
        n = n.next;
      } while (n !== t);
      return !1;
    })(t, e) &&
    ((Wl(t, e) &&
      Wl(e, t) &&
      (function (t, e) {
        let n = t,
          i = !1;
        const r = (t.x + e.x) / 2,
          a = (t.y + e.y) / 2;
        do {
          n.y > a != n.next.y > a &&
            n.next.y !== n.y &&
            r < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
            (i = !i),
            (n = n.next);
        } while (n !== t);
        return i;
      })(t, e) &&
      (zl(t.prev, t, e.prev) || zl(t, e.prev, e))) ||
      (Vl(t, e) && zl(t.prev, t, t.next) > 0 && zl(e.prev, e, e.next) > 0))
  );
}
function zl(t, e, n) {
  return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
}
function Vl(t, e) {
  return t.x === e.x && t.y === e.y;
}
function Hl(t, e, n, i) {
  const r = Gl(zl(t, e, n)),
    a = Gl(zl(t, e, i)),
    s = Gl(zl(n, i, t)),
    o = Gl(zl(n, i, e));
  return (
    (r !== a && s !== o) ||
    !(0 !== r || !kl(t, n, e)) ||
    !(0 !== a || !kl(t, i, e)) ||
    !(0 !== s || !kl(n, t, i)) ||
    !(0 !== o || !kl(n, e, i))
  );
}
function kl(t, e, n) {
  return (
    e.x <= Math.max(t.x, n.x) &&
    e.x >= Math.min(t.x, n.x) &&
    e.y <= Math.max(t.y, n.y) &&
    e.y >= Math.min(t.y, n.y)
  );
}
function Gl(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
}
function Wl(t, e) {
  return zl(t.prev, t, t.next) < 0
    ? zl(t, e, t.next) >= 0 && zl(t, t.prev, e) >= 0
    : zl(t, e, t.prev) < 0 || zl(t, t.next, e) < 0;
}
function Xl(t, e) {
  const n = new Yl(t.i, t.x, t.y),
    i = new Yl(e.i, e.x, e.y),
    r = t.next,
    a = e.prev;
  return (
    (t.next = e),
    (e.prev = t),
    (n.next = r),
    (r.prev = n),
    (i.next = n),
    (n.prev = i),
    (a.next = i),
    (i.prev = a),
    i
  );
}
function jl(t, e, n, i) {
  const r = new Yl(t, e, n);
  return (
    i
      ? ((r.next = i.next), (r.prev = i), (i.next.prev = r), (i.next = r))
      : ((r.prev = r), (r.next = r)),
    r
  );
}
function ql(t) {
  (t.next.prev = t.prev),
    (t.prev.next = t.next),
    t.prevZ && (t.prevZ.nextZ = t.nextZ),
    t.nextZ && (t.nextZ.prevZ = t.prevZ);
}
function Yl(t, e, n) {
  (this.i = t),
    (this.x = e),
    (this.y = n),
    (this.prev = null),
    (this.next = null),
    (this.z = 0),
    (this.prevZ = null),
    (this.nextZ = null),
    (this.steiner = !1);
}
class Zl {
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let i = e - 1, r = 0; r < e; i = r++)
      n += t[i].x * t[r].y - t[r].x * t[i].y;
    return 0.5 * n;
  }
  static isClockWise(t) {
    return Zl.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [],
      i = [],
      r = [];
    Jl(t), Kl(n, t);
    let a = t.length;
    e.forEach(Jl);
    for (let o = 0; o < e.length; o++)
      i.push(a), (a += e[o].length), Kl(n, e[o]);
    const s = Tl(n, i);
    for (let o = 0; o < s.length; o += 3) r.push(s.slice(o, o + 3));
    return r;
  }
}
function Jl(t) {
  const e = t.length;
  e > 2 && t[e - 1].equals(t[0]) && t.pop();
}
function Kl(t, e) {
  for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y);
}
class $l extends Er {
  static get type() {
    return "RawShaderMaterial";
  }
  constructor(t) {
    super(t), (this.isRawShaderMaterial = !0);
  }
}
class Ql extends Gi {
  static get type() {
    return "MeshPhongMaterial";
  }
  constructor(t) {
    super(),
      (this.isMeshPhongMaterial = !0),
      (this.color = new Vi(16777215)),
      (this.specular = new Vi(1118481)),
      (this.shininess = 30),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Vi(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new ke(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new ri()),
      (this.combine = z),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t);
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      this.specular.copy(t.specular),
      (this.shininess = t.shininess),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
const tc = {
  enabled: !1,
  files: {},
  add: function (t, e) {
    !1 !== this.enabled && (this.files[t] = e);
  },
  get: function (t) {
    if (!1 !== this.enabled) return this.files[t];
  },
  remove: function (t) {
    delete this.files[t];
  },
  clear: function () {
    this.files = {};
  },
};
class ec {
  constructor(t, e, n) {
    const i = this;
    let r,
      a = !1,
      s = 0,
      o = 0;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = t),
      (this.onProgress = e),
      (this.onError = n),
      (this.itemStart = function (t) {
        o++, !1 === a && void 0 !== i.onStart && i.onStart(t, s, o), (a = !0);
      }),
      (this.itemEnd = function (t) {
        s++,
          void 0 !== i.onProgress && i.onProgress(t, s, o),
          s === o && ((a = !1), void 0 !== i.onLoad && i.onLoad());
      }),
      (this.itemError = function (t) {
        void 0 !== i.onError && i.onError(t);
      }),
      (this.resolveURL = function (t) {
        return r ? r(t) : t;
      }),
      (this.setURLModifier = function (t) {
        return (r = t), this;
      }),
      (this.addHandler = function (t, e) {
        return l.push(t, e), this;
      }),
      (this.removeHandler = function (t) {
        const e = l.indexOf(t);
        return -1 !== e && l.splice(e, 2), this;
      }),
      (this.getHandler = function (t) {
        for (let e = 0, n = l.length; e < n; e += 2) {
          const n = l[e],
            i = l[e + 1];
          if ((n.global && (n.lastIndex = 0), n.test(t))) return i;
        }
        return null;
      });
  }
}
const nc = new ec();
class ic {
  constructor(t) {
    (this.manager = void 0 !== t ? t : nc),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(t, e) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(t, i, e, r);
    });
  }
  parse() {}
  setCrossOrigin(t) {
    return (this.crossOrigin = t), this;
  }
  setWithCredentials(t) {
    return (this.withCredentials = t), this;
  }
  setPath(t) {
    return (this.path = t), this;
  }
  setResourcePath(t) {
    return (this.resourcePath = t), this;
  }
  setRequestHeader(t) {
    return (this.requestHeader = t), this;
  }
}
ic.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const rc = {};
class ac extends Error {
  constructor(t, e) {
    super(t), (this.response = e);
  }
}
class sc extends ic {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    void 0 === t && (t = ""),
      void 0 !== this.path && (t = this.path + t),
      (t = this.manager.resolveURL(t));
    const r = tc.get(t);
    if (void 0 !== r)
      return (
        this.manager.itemStart(t),
        setTimeout(() => {
          e && e(r), this.manager.itemEnd(t);
        }, 0),
        r
      );
    if (void 0 !== rc[t])
      return void rc[t].push({ onLoad: e, onProgress: n, onError: i });
    (rc[t] = []), rc[t].push({ onLoad: e, onProgress: n, onError: i });
    const a = new Request(t, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      s = this.mimeType,
      o = this.responseType;
    fetch(a)
      .then((e) => {
        if (200 === e.status || 0 === e.status) {
          if (
            (e.status,
            "undefined" == typeof ReadableStream ||
              void 0 === e.body ||
              void 0 === e.body.getReader)
          )
            return e;
          const n = rc[t],
            i = e.body.getReader(),
            r = e.headers.get("X-File-Size") || e.headers.get("Content-Length"),
            a = r ? parseInt(r) : 0,
            s = 0 !== a;
          let o = 0;
          const l = new ReadableStream({
            start(t) {
              !(function e() {
                i.read().then(
                  ({ done: i, value: r }) => {
                    if (i) t.close();
                    else {
                      o += r.byteLength;
                      const i = new ProgressEvent("progress", {
                        lengthComputable: s,
                        loaded: o,
                        total: a,
                      });
                      for (let t = 0, e = n.length; t < e; t++) {
                        const e = n[t];
                        e.onProgress && e.onProgress(i);
                      }
                      t.enqueue(r), e();
                    }
                  },
                  (e) => {
                    t.error(e);
                  }
                );
              })();
            },
          });
          return new Response(l);
        }
        throw new ac(
          `fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`,
          e
        );
      })
      .then((t) => {
        switch (o) {
          case "arraybuffer":
            return t.arrayBuffer();
          case "blob":
            return t.blob();
          case "document":
            return t.text().then((t) => new DOMParser().parseFromString(t, s));
          case "json":
            return t.json();
          default:
            if (void 0 === s) return t.text();
            {
              const e = /charset="?([^;"\s]*)"?/i.exec(s),
                n = e && e[1] ? e[1].toLowerCase() : void 0,
                i = new TextDecoder(n);
              return t.arrayBuffer().then((t) => i.decode(t));
            }
        }
      })
      .then((e) => {
        tc.add(t, e);
        const n = rc[t];
        delete rc[t];
        for (let t = 0, i = n.length; t < i; t++) {
          const i = n[t];
          i.onLoad && i.onLoad(e);
        }
      })
      .catch((e) => {
        const n = rc[t];
        if (void 0 === n) throw (this.manager.itemError(t), e);
        delete rc[t];
        for (let t = 0, i = n.length; t < i; t++) {
          const i = n[t];
          i.onError && i.onError(e);
        }
        this.manager.itemError(t);
      })
      .finally(() => {
        this.manager.itemEnd(t);
      }),
      this.manager.itemStart(t);
  }
  setResponseType(t) {
    return (this.responseType = t), this;
  }
  setMimeType(t) {
    return (this.mimeType = t), this;
  }
}
function oc() {
  return performance.now();
}
const lc = "\\[\\]\\.:\\/",
  cc = new RegExp("[" + lc + "]", "g"),
  hc = "[^" + lc + "]",
  uc = "[^" + lc.replace("\\.", "") + "]",
  dc = new RegExp(
    "^" +
      /((?:WC+[\/:])*)/.source.replace("WC", hc) +
      /(WCOD+)?/.source.replace("WCOD", uc) +
      /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", hc) +
      /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", hc) +
      "$"
  ),
  pc = ["material", "materials", "bones", "map"];
class fc {
  constructor(t, e, n) {
    (this.path = e),
      (this.parsedPath = n || fc.parseTrackName(e)),
      (this.node = fc.findNode(t, this.parsedPath.nodeName)),
      (this.rootNode = t),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup
      ? new fc.Composite(t, e, n)
      : new fc(t, e, n);
  }
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(cc, "");
  }
  static parseTrackName(t) {
    const e = dc.exec(t);
    if (null === e)
      throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    const n = {
        nodeName: e[2],
        objectName: e[3],
        objectIndex: e[4],
        propertyName: e[5],
        propertyIndex: e[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (void 0 !== i && -1 !== i) {
      const t = n.nodeName.substring(i + 1);
      -1 !== pc.indexOf(t) &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = t));
    }
    if (null === n.propertyName || 0 === n.propertyName.length)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + t
      );
    return n;
  }
  static findNode(t, e) {
    if (
      void 0 === e ||
      "" === e ||
      "." === e ||
      -1 === e ||
      e === t.name ||
      e === t.uuid
    )
      return t;
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(e);
      if (void 0 !== n) return n;
    }
    if (t.children) {
      const n = function (t) {
          for (let i = 0; i < t.length; i++) {
            const r = t[i];
            if (r.name === e || r.uuid === e) return r;
            const a = n(r.children);
            if (a) return a;
          }
          return null;
        },
        i = n(t.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    (this.targetObject[this.propertyName] = t[e]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    (this.targetObject[this.propertyName] = t[e]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    (this.resolvedProperty[this.propertyIndex] = t[e]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    (this.resolvedProperty[this.propertyIndex] = t[e]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  bind() {
    let t = this.node;
    const e = this.parsedPath,
      n = e.objectName,
      i = e.propertyName;
    let r = e.propertyIndex;
    if (
      (t || ((t = fc.findNode(this.rootNode, e.nodeName)), (this.node = t)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !t)
    )
      return;
    if (n) {
      let i = e.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material) return;
          if (!t.material.materials) return;
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) return;
          t = t.skeleton.bones;
          for (let e = 0; e < t.length; e++)
            if (t[e].name === i) {
              i = e;
              break;
            }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) return;
          if (!t.material.map) return;
          t = t.material.map;
          break;
        default:
          if (void 0 === t[n]) return;
          t = t[n];
      }
      if (void 0 !== i) {
        if (void 0 === t[i]) return;
        t = t[i];
      }
    }
    const a = t[i];
    if (void 0 === a) {
      e.nodeName;
      return;
    }
    let s = this.Versioning.None;
    (this.targetObject = t),
      void 0 !== t.needsUpdate
        ? (s = this.Versioning.NeedsUpdate)
        : void 0 !== t.matrixWorldNeedsUpdate &&
          (s = this.Versioning.MatrixWorldNeedsUpdate);
    let o = this.BindingType.Direct;
    if (void 0 !== r) {
      if ("morphTargetInfluences" === i) {
        if (!t.geometry) return;
        if (!t.geometry.morphAttributes) return;
        void 0 !== t.morphTargetDictionary[r] &&
          (r = t.morphTargetDictionary[r]);
      }
      (o = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r);
    } else
      void 0 !== a.fromArray && void 0 !== a.toArray
        ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[o]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[o][s]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
(fc.Composite = class {
  constructor(t, e, n) {
    const i = n || fc.parseTrackName(e);
    (this._targetGroup = t), (this._bindings = t.subscribe_(e, i));
  }
  getValue(t, e) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    void 0 !== i && i.getValue(t, e);
  }
  setValue(t, e) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(t, e);
  }
  bind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].bind();
  }
  unbind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].unbind();
  }
}),
  (fc.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (fc.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (fc.prototype.GetterByBindingType = [
    fc.prototype._getValue_direct,
    fc.prototype._getValue_array,
    fc.prototype._getValue_arrayElement,
    fc.prototype._getValue_toArray,
  ]),
  (fc.prototype.SetterByBindingTypeAndVersioning = [
    [
      fc.prototype._setValue_direct,
      fc.prototype._setValue_direct_setNeedsUpdate,
      fc.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      fc.prototype._setValue_array,
      fc.prototype._setValue_array_setNeedsUpdate,
      fc.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      fc.prototype._setValue_arrayElement,
      fc.prototype._setValue_arrayElement_setNeedsUpdate,
      fc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      fc.prototype._setValue_fromArray,
      fc.prototype._setValue_fromArray_setNeedsUpdate,
      fc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]);
class mc {
  constructor(t) {
    this.value = t;
  }
  clone() {
    return new mc(
      void 0 === this.value.clone ? this.value : this.value.clone()
    );
  }
}
const gc = new ke();
class _c {
  constructor(
    t = new ke(Infinity, Infinity),
    e = new ke(-Infinity, -Infinity)
  ) {
    (this.isBox2 = !0), (this.min = t), (this.max = e);
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = gc.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = Infinity),
      (this.max.x = this.max.y = -Infinity),
      this
    );
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  containsPoint(t) {
    return (
      t.x >= this.min.x &&
      t.x <= this.max.x &&
      t.y >= this.min.y &&
      t.y <= this.max.y
    );
  }
  containsBox(t) {
    return (
      this.min.x <= t.min.x &&
      t.max.x <= this.max.x &&
      this.min.y <= t.min.y &&
      t.max.y <= this.max.y
    );
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(t) {
    return (
      t.max.x >= this.min.x &&
      t.min.x <= this.max.x &&
      t.max.y >= this.min.y &&
      t.min.y <= this.max.y
    );
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, gc).distanceTo(t);
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const vc = new vn(),
  xc = new vn();
class yc {
  constructor(t = new vn(), e = new vn()) {
    (this.start = t), (this.end = e);
  }
  set(t, e) {
    return this.start.copy(t), this.end.copy(e), this;
  }
  copy(t) {
    return this.start.copy(t.start), this.end.copy(t.end), this;
  }
  getCenter(t) {
    return t.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(t) {
    return t.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(t, e) {
    return this.delta(e).multiplyScalar(t).add(this.start);
  }
  closestPointToPointParameter(t, e) {
    vc.subVectors(t, this.start), xc.subVectors(this.end, this.start);
    const n = xc.dot(xc);
    let i = xc.dot(vc) / n;
    return e && (i = Oe(i, 0, 1)), i;
  }
  closestPointToPoint(t, e, n) {
    const i = this.closestPointToPointParameter(t, e);
    return this.delta(n).multiplyScalar(i).add(this.start);
  }
  applyMatrix4(t) {
    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
  }
  equals(t) {
    return t.start.equals(this.start) && t.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Mc {
  constructor() {
    (this.type = "ShapePath"),
      (this.color = new Vi()),
      (this.subPaths = []),
      (this.currentPath = null);
  }
  moveTo(t, e) {
    return (
      (this.currentPath = new Sl()),
      this.subPaths.push(this.currentPath),
      this.currentPath.moveTo(t, e),
      this
    );
  }
  lineTo(t, e) {
    return this.currentPath.lineTo(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    return this.currentPath.quadraticCurveTo(t, e, n, i), this;
  }
  bezierCurveTo(t, e, n, i, r, a) {
    return this.currentPath.bezierCurveTo(t, e, n, i, r, a), this;
  }
  splineThru(t) {
    return this.currentPath.splineThru(t), this;
  }
  toShapes(t) {
    function e(t, e) {
      const n = e.length;
      let i = !1;
      for (let r = n - 1, a = 0; a < n; r = a++) {
        let n = e[r],
          s = e[a],
          o = s.x - n.x,
          l = s.y - n.y;
        if (Math.abs(l) > Number.EPSILON) {
          if (
            (l < 0 && ((n = e[a]), (o = -o), (s = e[r]), (l = -l)),
            t.y < n.y || t.y > s.y)
          )
            continue;
          if (t.y === n.y) {
            if (t.x === n.x) return !0;
          } else {
            const e = l * (t.x - n.x) - o * (t.y - n.y);
            if (0 === e) return !0;
            if (e < 0) continue;
            i = !i;
          }
        } else {
          if (t.y !== n.y) continue;
          if ((s.x <= t.x && t.x <= n.x) || (n.x <= t.x && t.x <= s.x))
            return !0;
        }
      }
      return i;
    }
    const n = Zl.isClockWise,
      i = this.subPaths;
    if (0 === i.length) return [];
    let r, a, s;
    const o = [];
    if (1 === i.length)
      return (a = i[0]), (s = new El()), (s.curves = a.curves), o.push(s), o;
    let l = !n(i[0].getPoints());
    l = t ? !l : l;
    const c = [],
      h = [];
    let u,
      d,
      p = [],
      f = 0;
    (h[f] = void 0), (p[f] = []);
    for (let m = 0, g = i.length; m < g; m++)
      (a = i[m]),
        (u = a.getPoints()),
        (r = n(u)),
        (r = t ? !r : r),
        r
          ? (!l && h[f] && f++,
            (h[f] = { s: new El(), p: u }),
            (h[f].s.curves = a.curves),
            l && f++,
            (p[f] = []))
          : p[f].push({ h: a, p: u[0] });
    if (!h[0])
      return (function (t) {
        const e = [];
        for (let n = 0, i = t.length; n < i; n++) {
          const i = t[n],
            r = new El();
          (r.curves = i.curves), e.push(r);
        }
        return e;
      })(i);
    if (h.length > 1) {
      let t = !1,
        n = 0;
      for (let e = 0, i = h.length; e < i; e++) c[e] = [];
      for (let i = 0, r = h.length; i < r; i++) {
        const r = p[i];
        for (let a = 0; a < r.length; a++) {
          const s = r[a];
          let o = !0;
          for (let r = 0; r < h.length; r++)
            e(s.p, h[r].p) &&
              (i !== r && n++, o ? ((o = !1), c[r].push(s)) : (t = !0));
          o && c[i].push(s);
        }
      }
      n > 0 && !1 === t && (p = c);
    }
    for (let m = 0, g = h.length; m < g; m++) {
      (s = h[m].s), o.push(s), (d = p[m]);
      for (let t = 0, e = d.length; t < e; t++) s.holes.push(d[t].h);
    }
    return o;
  }
}
"undefined" != typeof __THREE_DEVTOOLS__ &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: a } })
  ),
  "undefined" != typeof window && (window.__THREE__ || (window.__THREE__ = a));
const Sc = i(),
  Ec = i(),
  Tc = i(),
  bc = new (class {
    constructor(t = !0) {
      (this.autoStart = t),
        (this.startTime = 0),
        (this.oldTime = 0),
        (this.elapsedTime = 0),
        (this.running = !1);
    }
    start() {
      (this.startTime = oc()),
        (this.oldTime = this.startTime),
        (this.elapsedTime = 0),
        (this.running = !0);
    }
    stop() {
      this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
    }
    getElapsedTime() {
      return this.getDelta(), this.elapsedTime;
    }
    getDelta() {
      let t = 0;
      if (this.autoStart && !this.running) return this.start(), 0;
      if (this.running) {
        const e = oc();
        (t = (e - this.oldTime) / 1e3),
          (this.oldTime = e),
          (this.elapsedTime += t);
      }
      return t;
    }
  })();
let Ac = 0,
  wc = 0;
t(
  () => {
    Sc.trigger({ delta: Ac, elapsed: wc, clock: bc }),
      Ec.trigger({ delta: Ac, elapsed: wc, clock: bc }),
      Tc.trigger({ delta: Ac, elapsed: wc, clock: bc });
  },
  { immediate: !1 }
),
  Tc.on(() => {
    (Ac = bc.getDelta()), (wc = bc.getElapsedTime());
  });
const Rc = "[TresJS ▲ ■ ●] ";
async function Cc(t, e, n, i, r) {
  const { logError: a } = {
      logError: function (...t) {
        "string" == typeof t[0] ? (t[0] = Rc + t[0]) : t.unshift(Rc);
      },
      logWarning: function (...t) {
        "string" == typeof t[0] ? (t[0] = Rc + t[0]) : t.unshift(Rc);
      },
      logMessage: function (t, e) {},
    },
    s = new t();
  return await new Promise((t, n) => {
    s.load(
      e,
      (e) => {
        const n = e;
        n.scene &&
          Object.assign(
            n,
            (function (t) {
              const e = { nodes: {}, materials: {} };
              return (
                t &&
                  t.traverse((t) => {
                    t.name && (e.nodes[t.name] = t),
                      t.material &&
                        !e.materials[t.material.name] &&
                        (e.materials[t.material.name] = t.material);
                  }),
                e
              );
            })(n.scene)
          ),
          t(n);
      },
      i,
      (t) => {
        a("[useLoader] - Failed to load resource", t), n(t);
      }
    );
  });
}
function Pc() {
  const t = r("useTres");
  if (!t)
    throw new Error(
      "useTresContext must be used together with useTresContextProvider"
    );
  return t;
}
function Lc() {
  const {
    camera: t,
    scene: e,
    renderer: n,
    loop: i,
    raycaster: r,
    controls: a,
    invalidate: s,
    advance: o,
  } = Pc();
  return (
    i.setContext({
      camera: t,
      scene: e,
      renderer: n,
      raycaster: r,
      controls: a,
      invalidate: s,
      advance: o,
    }),
    {
      pause: i.pause,
      resume: i.resume,
      pauseRender: i.pauseRender,
      resumeRender: i.resumeRender,
      isActive: i.isActive,
      onBeforeRender: function (t, e = 0) {
        return i.register(t, "before", e);
      },
      render: function (t) {
        return i.register(t, "render");
      },
      onAfterRender: function (t, e = 0) {
        return i.register(t, "after", e);
      },
    }
  );
}
e({}), n({ sceneGraph: null });
export {
  st as $,
  d as A,
  h as B,
  Vi as C,
  u as D,
  ri as E,
  rl as F,
  Io as G,
  mt as H,
  No as I,
  Mc as J,
  mc as K,
  yc as L,
  Yn as M,
  k as N,
  ea as O,
  Or as P,
  Do as Q,
  qn as R,
  Er as S,
  Ni as T,
  Sr as U,
  vn as V,
  fn as W,
  nt as X,
  it as Y,
  rt as Z,
  at as _,
  rr as a,
  ot as a0,
  tt as a1,
  Q as a2,
  et as a3,
  Xr as a4,
  ic as a5,
  sc as a6,
  To as a7,
  Ji as a8,
  Bo as a9,
  Gi as aa,
  Ko as ab,
  Ql as ac,
  Jo as ad,
  nl as ae,
  Cc as af,
  Fo as b,
  Mn as c,
  ke as d,
  Wr as e,
  dn as f,
  zn as g,
  kr as h,
  a as i,
  fc as j,
  ue as k,
  gr as l,
  Wi as m,
  $l as n,
  _c as o,
  Pc as p,
  Lc as q,
  lt as r,
  Rr as s,
  vr as t,
  al as u,
  un as v,
  He as w,
  St as x,
  qi as y,
  he as z,
};

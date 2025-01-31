import { _ as t } from "./LoginFormTitle.vue_vue_type_script_setup_true_lang-DcBlbWPL.js";
import {
  cO as e,
  es as n,
  as as r,
  r as o,
  aL as i,
  aR as s,
  a,
  bk as u,
  au as c,
  av as l,
  bo as f,
  f1 as h,
  aO as d,
  c as g,
  aw as p,
  bl as m,
  ax as w,
  aA as y,
  aB as E,
  az as v,
  aC as C,
  aD as A,
  u as B,
} from "./index-DPRREYlk.js";
import { d as I } from "./download-D26P9I-0.js";
import { u as T, L as M } from "./useLogin-BZJOiv0S.js";
import { _ as b } from "./index-DNofMLzB.js";
var P = {},
  N = {};
let R;
const L = [
  0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
  733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
  2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
];
(N.getSymbolSize = function (t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return 4 * t + 17;
}),
  (N.getSymbolTotalCodewords = function (t) {
    return L[t];
  }),
  (N.getBCHDigit = function (t) {
    let e = 0;
    for (; 0 !== t; ) e++, (t >>>= 1);
    return e;
  }),
  (N.setToSJISFunction = function (t) {
    if ("function" != typeof t)
      throw new Error('"toSJISFunc" is not a valid function.');
    R = t;
  }),
  (N.isKanjiModeEnabled = function () {
    return void 0 !== R;
  }),
  (N.toSJIS = function (t) {
    return R(t);
  });
var x,
  S = {};
function U() {
  (this.buffer = []), (this.length = 0);
}
((x = S).L = { bit: 1 }),
  (x.M = { bit: 0 }),
  (x.Q = { bit: 3 }),
  (x.H = { bit: 2 }),
  (x.isValid = function (t) {
    return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
  }),
  (x.from = function (t, e) {
    if (x.isValid(t)) return t;
    try {
      return (function (t) {
        if ("string" != typeof t) throw new Error("Param is not a string");
        switch (t.toLowerCase()) {
          case "l":
          case "low":
            return x.L;
          case "m":
          case "medium":
            return x.M;
          case "q":
          case "quartile":
            return x.Q;
          case "h":
          case "high":
            return x.H;
          default:
            throw new Error("Unknown EC Level: " + t);
        }
      })(t);
    } catch (n) {
      return e;
    }
  }),
  (U.prototype = {
    get: function (t) {
      const e = Math.floor(t / 8);
      return 1 == ((this.buffer[e] >>> (7 - (t % 8))) & 1);
    },
    put: function (t, e) {
      for (let n = 0; n < e; n++) this.putBit(1 == ((t >>> (e - n - 1)) & 1));
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (t) {
      const e = Math.floor(this.length / 8);
      this.buffer.length <= e && this.buffer.push(0),
        t && (this.buffer[e] |= 128 >>> this.length % 8),
        this.length++;
    },
  });
var k = U;
function _(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  (this.size = t),
    (this.data = new Uint8Array(t * t)),
    (this.reservedBit = new Uint8Array(t * t));
}
(_.prototype.set = function (t, e, n, r) {
  const o = t * this.size + e;
  (this.data[o] = n), r && (this.reservedBit[o] = !0);
}),
  (_.prototype.get = function (t, e) {
    return this.data[t * this.size + e];
  }),
  (_.prototype.xor = function (t, e, n) {
    this.data[t * this.size + e] ^= n;
  }),
  (_.prototype.isReserved = function (t, e) {
    return this.reservedBit[t * this.size + e];
  });
var z = _,
  D = {};
!(function (t) {
  const e = N.getSymbolSize;
  (t.getRowColCoords = function (t) {
    if (1 === t) return [];
    const n = Math.floor(t / 7) + 2,
      r = e(t),
      o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * n - 2)),
      i = [r - 7];
    for (let e = 1; e < n - 1; e++) i[e] = i[e - 1] - o;
    return i.push(6), i.reverse();
  }),
    (t.getPositions = function (e) {
      const n = [],
        r = t.getRowColCoords(e),
        o = r.length;
      for (let t = 0; t < o; t++)
        for (let e = 0; e < o; e++)
          (0 === t && 0 === e) ||
            (0 === t && e === o - 1) ||
            (t === o - 1 && 0 === e) ||
            n.push([r[t], r[e]]);
      return n;
    });
})(D);
var F = {};
const H = N.getSymbolSize;
F.getPositions = function (t) {
  const e = H(t);
  return [
    [0, 0],
    [e - 7, 0],
    [0, e - 7],
  ];
};
var J = {};
!(function (t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  };
  const e = 3,
    n = 3,
    r = 40,
    o = 10;
  function i(e, n, r) {
    switch (e) {
      case t.Patterns.PATTERN000:
        return (n + r) % 2 == 0;
      case t.Patterns.PATTERN001:
        return n % 2 == 0;
      case t.Patterns.PATTERN010:
        return r % 3 == 0;
      case t.Patterns.PATTERN011:
        return (n + r) % 3 == 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
      case t.Patterns.PATTERN101:
        return ((n * r) % 2) + ((n * r) % 3) == 0;
      case t.Patterns.PATTERN110:
        return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
      case t.Patterns.PATTERN111:
        return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + e);
    }
  }
  (t.isValid = function (t) {
    return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
  }),
    (t.from = function (e) {
      return t.isValid(e) ? parseInt(e, 10) : void 0;
    }),
    (t.getPenaltyN1 = function (t) {
      const n = t.size;
      let r = 0,
        o = 0,
        i = 0,
        s = null,
        a = null;
      for (let u = 0; u < n; u++) {
        (o = i = 0), (s = a = null);
        for (let c = 0; c < n; c++) {
          let n = t.get(u, c);
          n === s ? o++ : (o >= 5 && (r += e + (o - 5)), (s = n), (o = 1)),
            (n = t.get(c, u)),
            n === a ? i++ : (i >= 5 && (r += e + (i - 5)), (a = n), (i = 1));
        }
        o >= 5 && (r += e + (o - 5)), i >= 5 && (r += e + (i - 5));
      }
      return r;
    }),
    (t.getPenaltyN2 = function (t) {
      const e = t.size;
      let r = 0;
      for (let n = 0; n < e - 1; n++)
        for (let o = 0; o < e - 1; o++) {
          const e =
            t.get(n, o) +
            t.get(n, o + 1) +
            t.get(n + 1, o) +
            t.get(n + 1, o + 1);
          (4 !== e && 0 !== e) || r++;
        }
      return r * n;
    }),
    (t.getPenaltyN3 = function (t) {
      const e = t.size;
      let n = 0,
        o = 0,
        i = 0;
      for (let r = 0; r < e; r++) {
        o = i = 0;
        for (let s = 0; s < e; s++)
          (o = ((o << 1) & 2047) | t.get(r, s)),
            s >= 10 && (1488 === o || 93 === o) && n++,
            (i = ((i << 1) & 2047) | t.get(s, r)),
            s >= 10 && (1488 === i || 93 === i) && n++;
      }
      return n * r;
    }),
    (t.getPenaltyN4 = function (t) {
      let e = 0;
      const n = t.data.length;
      for (let r = 0; r < n; r++) e += t.data[r];
      return Math.abs(Math.ceil((100 * e) / n / 5) - 10) * o;
    }),
    (t.applyMask = function (t, e) {
      const n = e.size;
      for (let r = 0; r < n; r++)
        for (let o = 0; o < n; o++)
          e.isReserved(o, r) || e.xor(o, r, i(t, o, r));
    }),
    (t.getBestMask = function (e, n) {
      const r = Object.keys(t.Patterns).length;
      let o = 0,
        i = Infinity;
      for (let s = 0; s < r; s++) {
        n(s), t.applyMask(s, e);
        const r =
          t.getPenaltyN1(e) +
          t.getPenaltyN2(e) +
          t.getPenaltyN3(e) +
          t.getPenaltyN4(e);
        t.applyMask(s, e), r < i && ((i = r), (o = s));
      }
      return o;
    });
})(J);
var K = {};
const Y = S,
  j = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
    4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
    9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13,
    18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18,
    25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13,
    26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54,
    18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59,
    70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
  ],
  O = [
    7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
    88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192,
    72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352,
    120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448,
    532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442,
    644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312,
    588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
    1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510,
    924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064,
    1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
    2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
  ];
(K.getBlocksCount = function (t, e) {
  switch (e) {
    case Y.L:
      return j[4 * (t - 1) + 0];
    case Y.M:
      return j[4 * (t - 1) + 1];
    case Y.Q:
      return j[4 * (t - 1) + 2];
    case Y.H:
      return j[4 * (t - 1) + 3];
    default:
      return;
  }
}),
  (K.getTotalCodewordsCount = function (t, e) {
    switch (e) {
      case Y.L:
        return O[4 * (t - 1) + 0];
      case Y.M:
        return O[4 * (t - 1) + 1];
      case Y.Q:
        return O[4 * (t - 1) + 2];
      case Y.H:
        return O[4 * (t - 1) + 3];
      default:
        return;
    }
  });
var Q = {},
  V = {};
const q = new Uint8Array(512),
  $ = new Uint8Array(256);
!(function () {
  let t = 1;
  for (let e = 0; e < 255; e++)
    (q[e] = t), ($[t] = e), (t <<= 1), 256 & t && (t ^= 285);
  for (let e = 255; e < 512; e++) q[e] = q[e - 255];
})(),
  (V.log = function (t) {
    if (t < 1) throw new Error("log(" + t + ")");
    return $[t];
  }),
  (V.exp = function (t) {
    return q[t];
  }),
  (V.mul = function (t, e) {
    return 0 === t || 0 === e ? 0 : q[$[t] + $[e]];
  }),
  (function (t) {
    const e = V;
    (t.mul = function (t, n) {
      const r = new Uint8Array(t.length + n.length - 1);
      for (let o = 0; o < t.length; o++)
        for (let i = 0; i < n.length; i++) r[o + i] ^= e.mul(t[o], n[i]);
      return r;
    }),
      (t.mod = function (t, n) {
        let r = new Uint8Array(t);
        for (; r.length - n.length >= 0; ) {
          const t = r[0];
          for (let i = 0; i < n.length; i++) r[i] ^= e.mul(n[i], t);
          let o = 0;
          for (; o < r.length && 0 === r[o]; ) o++;
          r = r.slice(o);
        }
        return r;
      }),
      (t.generateECPolynomial = function (n) {
        let r = new Uint8Array([1]);
        for (let o = 0; o < n; o++) r = t.mul(r, new Uint8Array([1, e.exp(o)]));
        return r;
      });
  })(Q);
const Z = Q;
function X(t) {
  (this.genPoly = void 0),
    (this.degree = t),
    this.degree && this.initialize(this.degree);
}
(X.prototype.initialize = function (t) {
  (this.degree = t), (this.genPoly = Z.generateECPolynomial(this.degree));
}),
  (X.prototype.encode = function (t) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const e = new Uint8Array(t.length + this.degree);
    e.set(t);
    const n = Z.mod(e, this.genPoly),
      r = this.degree - n.length;
    if (r > 0) {
      const t = new Uint8Array(this.degree);
      return t.set(n, r), t;
    }
    return n;
  });
var W = X,
  G = {},
  tt = {},
  et = {
    isValid: function (t) {
      return !isNaN(t) && t >= 1 && t <= 40;
    },
  },
  nt = {};
const rt = "[0-9]+";
let ot =
  "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
ot = ot.replace(/u/g, "\\u");
const it = "(?:(?![A-Z0-9 $%*+\\-./:]|" + ot + ")(?:.|[\r\n]))+";
(nt.KANJI = new RegExp(ot, "g")),
  (nt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
  (nt.BYTE = new RegExp(it, "g")),
  (nt.NUMERIC = new RegExp(rt, "g")),
  (nt.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
const st = new RegExp("^" + ot + "$"),
  at = new RegExp("^" + rt + "$"),
  ut = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
(nt.testKanji = function (t) {
  return st.test(t);
}),
  (nt.testNumeric = function (t) {
    return at.test(t);
  }),
  (nt.testAlphanumeric = function (t) {
    return ut.test(t);
  }),
  (function (t) {
    const e = et,
      n = nt;
    (t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
      (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
      (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
      (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
      (t.MIXED = { bit: -1 }),
      (t.getCharCountIndicator = function (t, n) {
        if (!t.ccBits) throw new Error("Invalid mode: " + t);
        if (!e.isValid(n)) throw new Error("Invalid version: " + n);
        return n >= 1 && n < 10
          ? t.ccBits[0]
          : n < 27
          ? t.ccBits[1]
          : t.ccBits[2];
      }),
      (t.getBestModeForData = function (e) {
        return n.testNumeric(e)
          ? t.NUMERIC
          : n.testAlphanumeric(e)
          ? t.ALPHANUMERIC
          : n.testKanji(e)
          ? t.KANJI
          : t.BYTE;
      }),
      (t.toString = function (t) {
        if (t && t.id) return t.id;
        throw new Error("Invalid mode");
      }),
      (t.isValid = function (t) {
        return t && t.bit && t.ccBits;
      }),
      (t.from = function (e, n) {
        if (t.isValid(e)) return e;
        try {
          return (function (e) {
            if ("string" != typeof e) throw new Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "numeric":
                return t.NUMERIC;
              case "alphanumeric":
                return t.ALPHANUMERIC;
              case "kanji":
                return t.KANJI;
              case "byte":
                return t.BYTE;
              default:
                throw new Error("Unknown mode: " + e);
            }
          })(e);
        } catch (r) {
          return n;
        }
      });
  })(tt),
  (function (t) {
    const e = N,
      n = K,
      r = S,
      o = tt,
      i = et,
      s = e.getBCHDigit(7973);
    function a(t, e) {
      return o.getCharCountIndicator(t, e) + 4;
    }
    function u(t, e) {
      let n = 0;
      return (
        t.forEach(function (t) {
          const r = a(t.mode, e);
          n += r + t.getBitsLength();
        }),
        n
      );
    }
    (t.from = function (t, e) {
      return i.isValid(t) ? parseInt(t, 10) : e;
    }),
      (t.getCapacity = function (t, r, s) {
        if (!i.isValid(t)) throw new Error("Invalid QR Code version");
        void 0 === s && (s = o.BYTE);
        const u =
          8 * (e.getSymbolTotalCodewords(t) - n.getTotalCodewordsCount(t, r));
        if (s === o.MIXED) return u;
        const c = u - a(s, t);
        switch (s) {
          case o.NUMERIC:
            return Math.floor((c / 10) * 3);
          case o.ALPHANUMERIC:
            return Math.floor((c / 11) * 2);
          case o.KANJI:
            return Math.floor(c / 13);
          case o.BYTE:
          default:
            return Math.floor(c / 8);
        }
      }),
      (t.getBestVersionForData = function (e, n) {
        let i;
        const s = r.from(n, r.M);
        if (Array.isArray(e)) {
          if (e.length > 1)
            return (function (e, n) {
              for (let r = 1; r <= 40; r++)
                if (u(e, r) <= t.getCapacity(r, n, o.MIXED)) return r;
            })(e, s);
          if (0 === e.length) return 1;
          i = e[0];
        } else i = e;
        return (function (e, n, r) {
          for (let o = 1; o <= 40; o++)
            if (n <= t.getCapacity(o, r, e)) return o;
        })(i.mode, i.getLength(), s);
      }),
      (t.getEncodedBits = function (t) {
        if (!i.isValid(t) || t < 7) throw new Error("Invalid QR Code version");
        let n = t << 12;
        for (; e.getBCHDigit(n) - s >= 0; ) n ^= 7973 << (e.getBCHDigit(n) - s);
        return (t << 12) | n;
      });
  })(G);
var ct = {};
const lt = N,
  ft = lt.getBCHDigit(1335);
ct.getEncodedBits = function (t, e) {
  const n = (t.bit << 3) | e;
  let r = n << 10;
  for (; lt.getBCHDigit(r) - ft >= 0; ) r ^= 1335 << (lt.getBCHDigit(r) - ft);
  return 21522 ^ ((n << 10) | r);
};
var ht = {};
const dt = tt;
function gt(t) {
  (this.mode = dt.NUMERIC), (this.data = t.toString());
}
(gt.getBitsLength = function (t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
}),
  (gt.prototype.getLength = function () {
    return this.data.length;
  }),
  (gt.prototype.getBitsLength = function () {
    return gt.getBitsLength(this.data.length);
  }),
  (gt.prototype.write = function (t) {
    let e, n, r;
    for (e = 0; e + 3 <= this.data.length; e += 3)
      (n = this.data.substr(e, 3)), (r = parseInt(n, 10)), t.put(r, 10);
    const o = this.data.length - e;
    o > 0 &&
      ((n = this.data.substr(e)), (r = parseInt(n, 10)), t.put(r, 3 * o + 1));
  });
var pt = gt;
const mt = tt,
  wt = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
  ];
function yt(t) {
  (this.mode = mt.ALPHANUMERIC), (this.data = t);
}
(yt.getBitsLength = function (t) {
  return 11 * Math.floor(t / 2) + (t % 2) * 6;
}),
  (yt.prototype.getLength = function () {
    return this.data.length;
  }),
  (yt.prototype.getBitsLength = function () {
    return yt.getBitsLength(this.data.length);
  }),
  (yt.prototype.write = function (t) {
    let e;
    for (e = 0; e + 2 <= this.data.length; e += 2) {
      let n = 45 * wt.indexOf(this.data[e]);
      (n += wt.indexOf(this.data[e + 1])), t.put(n, 11);
    }
    this.data.length % 2 && t.put(wt.indexOf(this.data[e]), 6);
  });
var Et = yt;
const vt = tt;
function Ct(t) {
  (this.mode = vt.BYTE),
    (this.data =
      "string" == typeof t ? new TextEncoder().encode(t) : new Uint8Array(t));
}
(Ct.getBitsLength = function (t) {
  return 8 * t;
}),
  (Ct.prototype.getLength = function () {
    return this.data.length;
  }),
  (Ct.prototype.getBitsLength = function () {
    return Ct.getBitsLength(this.data.length);
  }),
  (Ct.prototype.write = function (t) {
    for (let e = 0, n = this.data.length; e < n; e++) t.put(this.data[e], 8);
  });
var At = Ct;
const Bt = tt,
  It = N;
function Tt(t) {
  (this.mode = Bt.KANJI), (this.data = t);
}
(Tt.getBitsLength = function (t) {
  return 13 * t;
}),
  (Tt.prototype.getLength = function () {
    return this.data.length;
  }),
  (Tt.prototype.getBitsLength = function () {
    return Tt.getBitsLength(this.data.length);
  }),
  (Tt.prototype.write = function (t) {
    let e;
    for (e = 0; e < this.data.length; e++) {
      let n = It.toSJIS(this.data[e]);
      if (n >= 33088 && n <= 40956) n -= 33088;
      else {
        if (!(n >= 57408 && n <= 60351))
          throw new Error(
            "Invalid SJIS character: " +
              this.data[e] +
              "\nMake sure your charset is UTF-8"
          );
        n -= 49472;
      }
      (n = 192 * ((n >>> 8) & 255) + (255 & n)), t.put(n, 13);
    }
  });
var Mt = Tt,
  bt = { exports: {} };
!(function (t) {
  var e = {
    single_source_shortest_paths: function (t, n, r) {
      var o = {},
        i = {};
      i[n] = 0;
      var s,
        a,
        u,
        c,
        l,
        f,
        h,
        d = e.PriorityQueue.make();
      for (d.push(n, 0); !d.empty(); )
        for (u in ((a = (s = d.pop()).value), (c = s.cost), (l = t[a] || {})))
          l.hasOwnProperty(u) &&
            ((f = c + l[u]),
            (h = i[u]),
            (void 0 === i[u] || h > f) &&
              ((i[u] = f), d.push(u, f), (o[u] = a)));
      if (void 0 !== r && void 0 === i[r]) {
        var g = ["Could not find a path from ", n, " to ", r, "."].join("");
        throw new Error(g);
      }
      return o;
    },
    extract_shortest_path_from_predecessor_list: function (t, e) {
      for (var n = [], r = e; r; ) n.push(r), t[r], (r = t[r]);
      return n.reverse(), n;
    },
    find_path: function (t, n, r) {
      var o = e.single_source_shortest_paths(t, n, r);
      return e.extract_shortest_path_from_predecessor_list(o, r);
    },
    PriorityQueue: {
      make: function (t) {
        var n,
          r = e.PriorityQueue,
          o = {};
        for (n in ((t = t || {}), r)) r.hasOwnProperty(n) && (o[n] = r[n]);
        return (o.queue = []), (o.sorter = t.sorter || r.default_sorter), o;
      },
      default_sorter: function (t, e) {
        return t.cost - e.cost;
      },
      push: function (t, e) {
        var n = { value: t, cost: e };
        this.queue.push(n), this.queue.sort(this.sorter);
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return 0 === this.queue.length;
      },
    },
  };
  t.exports = e;
})(bt);
var Pt = bt.exports;
!(function (t) {
  const e = tt,
    n = pt,
    r = Et,
    o = At,
    i = Mt,
    s = nt,
    a = N,
    u = Pt;
  function c(t) {
    return unescape(encodeURIComponent(t)).length;
  }
  function l(t, e, n) {
    const r = [];
    let o;
    for (; null !== (o = t.exec(n)); )
      r.push({ data: o[0], index: o.index, mode: e, length: o[0].length });
    return r;
  }
  function f(t) {
    const n = l(s.NUMERIC, e.NUMERIC, t),
      r = l(s.ALPHANUMERIC, e.ALPHANUMERIC, t);
    let o, i;
    a.isKanjiModeEnabled()
      ? ((o = l(s.BYTE, e.BYTE, t)), (i = l(s.KANJI, e.KANJI, t)))
      : ((o = l(s.BYTE_KANJI, e.BYTE, t)), (i = []));
    return n
      .concat(r, o, i)
      .sort(function (t, e) {
        return t.index - e.index;
      })
      .map(function (t) {
        return { data: t.data, mode: t.mode, length: t.length };
      });
  }
  function h(t, s) {
    switch (s) {
      case e.NUMERIC:
        return n.getBitsLength(t);
      case e.ALPHANUMERIC:
        return r.getBitsLength(t);
      case e.KANJI:
        return i.getBitsLength(t);
      case e.BYTE:
        return o.getBitsLength(t);
    }
  }
  function d(t, s) {
    let u;
    const c = e.getBestModeForData(t);
    if (((u = e.from(s, c)), u !== e.BYTE && u.bit < c.bit))
      throw new Error(
        '"' +
          t +
          '" cannot be encoded with mode ' +
          e.toString(u) +
          ".\n Suggested mode is: " +
          e.toString(c)
      );
    switch ((u !== e.KANJI || a.isKanjiModeEnabled() || (u = e.BYTE), u)) {
      case e.NUMERIC:
        return new n(t);
      case e.ALPHANUMERIC:
        return new r(t);
      case e.KANJI:
        return new i(t);
      case e.BYTE:
        return new o(t);
    }
  }
  (t.fromArray = function (t) {
    return t.reduce(function (t, e) {
      return (
        "string" == typeof e
          ? t.push(d(e, null))
          : e.data && t.push(d(e.data, e.mode)),
        t
      );
    }, []);
  }),
    (t.fromString = function (n, r) {
      const o = (function (t) {
          const n = [];
          for (let r = 0; r < t.length; r++) {
            const o = t[r];
            switch (o.mode) {
              case e.NUMERIC:
                n.push([
                  o,
                  { data: o.data, mode: e.ALPHANUMERIC, length: o.length },
                  { data: o.data, mode: e.BYTE, length: o.length },
                ]);
                break;
              case e.ALPHANUMERIC:
                n.push([o, { data: o.data, mode: e.BYTE, length: o.length }]);
                break;
              case e.KANJI:
                n.push([o, { data: o.data, mode: e.BYTE, length: c(o.data) }]);
                break;
              case e.BYTE:
                n.push([{ data: o.data, mode: e.BYTE, length: c(o.data) }]);
            }
          }
          return n;
        })(f(n, a.isKanjiModeEnabled())),
        i = (function (t, n) {
          const r = {},
            o = { start: {} };
          let i = ["start"];
          for (let s = 0; s < t.length; s++) {
            const a = t[s],
              u = [];
            for (let t = 0; t < a.length; t++) {
              const c = a[t],
                l = "" + s + t;
              u.push(l), (r[l] = { node: c, lastCount: 0 }), (o[l] = {});
              for (let t = 0; t < i.length; t++) {
                const s = i[t];
                r[s] && r[s].node.mode === c.mode
                  ? ((o[s][l] =
                      h(r[s].lastCount + c.length, c.mode) -
                      h(r[s].lastCount, c.mode)),
                    (r[s].lastCount += c.length))
                  : (r[s] && (r[s].lastCount = c.length),
                    (o[s][l] =
                      h(c.length, c.mode) +
                      4 +
                      e.getCharCountIndicator(c.mode, n)));
              }
            }
            i = u;
          }
          for (let e = 0; e < i.length; e++) o[i[e]].end = 0;
          return { map: o, table: r };
        })(o, r),
        s = u.find_path(i.map, "start", "end"),
        l = [];
      for (let t = 1; t < s.length - 1; t++) l.push(i.table[s[t]].node);
      return t.fromArray(
        (function (t) {
          return t.reduce(function (t, e) {
            const n = t.length - 1 >= 0 ? t[t.length - 1] : null;
            return n && n.mode === e.mode
              ? ((t[t.length - 1].data += e.data), t)
              : (t.push(e), t);
          }, []);
        })(l)
      );
    }),
    (t.rawSplit = function (e) {
      return t.fromArray(f(e, a.isKanjiModeEnabled()));
    });
})(ht);
const Nt = N,
  Rt = S,
  Lt = k,
  xt = z,
  St = D,
  Ut = F,
  kt = J,
  _t = K,
  zt = W,
  Dt = G,
  Ft = ct,
  Ht = tt,
  Jt = ht;
function Kt(t, e, n) {
  const r = t.size,
    o = Ft.getEncodedBits(e, n);
  let i, s;
  for (i = 0; i < 15; i++)
    (s = 1 == ((o >> i) & 1)),
      i < 6
        ? t.set(i, 8, s, !0)
        : i < 8
        ? t.set(i + 1, 8, s, !0)
        : t.set(r - 15 + i, 8, s, !0),
      i < 8
        ? t.set(8, r - i - 1, s, !0)
        : i < 9
        ? t.set(8, 15 - i - 1 + 1, s, !0)
        : t.set(8, 15 - i - 1, s, !0);
  t.set(r - 8, 8, 1, !0);
}
function Yt(t, e, n) {
  const r = new Lt();
  n.forEach(function (e) {
    r.put(e.mode.bit, 4),
      r.put(e.getLength(), Ht.getCharCountIndicator(e.mode, t)),
      e.write(r);
  });
  const o =
    8 * (Nt.getSymbolTotalCodewords(t) - _t.getTotalCodewordsCount(t, e));
  for (
    r.getLengthInBits() + 4 <= o && r.put(0, 4);
    r.getLengthInBits() % 8 != 0;

  )
    r.putBit(0);
  const i = (o - r.getLengthInBits()) / 8;
  for (let s = 0; s < i; s++) r.put(s % 2 ? 17 : 236, 8);
  return (function (t, e, n) {
    const r = Nt.getSymbolTotalCodewords(e),
      o = _t.getTotalCodewordsCount(e, n),
      i = r - o,
      s = _t.getBlocksCount(e, n),
      a = r % s,
      u = s - a,
      c = Math.floor(r / s),
      l = Math.floor(i / s),
      f = l + 1,
      h = c - l,
      d = new zt(h);
    let g = 0;
    const p = new Array(s),
      m = new Array(s);
    let w = 0;
    const y = new Uint8Array(t.buffer);
    for (let B = 0; B < s; B++) {
      const t = B < u ? l : f;
      (p[B] = y.slice(g, g + t)),
        (m[B] = d.encode(p[B])),
        (g += t),
        (w = Math.max(w, t));
    }
    const E = new Uint8Array(r);
    let v,
      C,
      A = 0;
    for (v = 0; v < w; v++)
      for (C = 0; C < s; C++) v < p[C].length && (E[A++] = p[C][v]);
    for (v = 0; v < h; v++) for (C = 0; C < s; C++) E[A++] = m[C][v];
    return E;
  })(r, t, e);
}
function jt(t, e, n, r) {
  let o;
  if (Array.isArray(t)) o = Jt.fromArray(t);
  else {
    if ("string" != typeof t) throw new Error("Invalid data");
    {
      let r = e;
      if (!r) {
        const e = Jt.rawSplit(t);
        r = Dt.getBestVersionForData(e, n);
      }
      o = Jt.fromString(t, r || 40);
    }
  }
  const i = Dt.getBestVersionForData(o, n);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (e) {
    if (e < i)
      throw new Error(
        "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
          i +
          ".\n"
      );
  } else e = i;
  const s = Yt(e, n, o),
    a = Nt.getSymbolSize(e),
    u = new xt(a);
  return (
    (function (t, e) {
      const n = t.size,
        r = Ut.getPositions(e);
      for (let o = 0; o < r.length; o++) {
        const e = r[o][0],
          i = r[o][1];
        for (let r = -1; r <= 7; r++)
          if (!(e + r <= -1 || n <= e + r))
            for (let o = -1; o <= 7; o++)
              i + o <= -1 ||
                n <= i + o ||
                ((r >= 0 && r <= 6 && (0 === o || 6 === o)) ||
                (o >= 0 && o <= 6 && (0 === r || 6 === r)) ||
                (r >= 2 && r <= 4 && o >= 2 && o <= 4)
                  ? t.set(e + r, i + o, !0, !0)
                  : t.set(e + r, i + o, !1, !0));
      }
    })(u, e),
    (function (t) {
      const e = t.size;
      for (let n = 8; n < e - 8; n++) {
        const e = n % 2 == 0;
        t.set(n, 6, e, !0), t.set(6, n, e, !0);
      }
    })(u),
    (function (t, e) {
      const n = St.getPositions(e);
      for (let r = 0; r < n.length; r++) {
        const e = n[r][0],
          o = n[r][1];
        for (let n = -2; n <= 2; n++)
          for (let r = -2; r <= 2; r++)
            -2 === n || 2 === n || -2 === r || 2 === r || (0 === n && 0 === r)
              ? t.set(e + n, o + r, !0, !0)
              : t.set(e + n, o + r, !1, !0);
      }
    })(u, e),
    Kt(u, n, 0),
    e >= 7 &&
      (function (t, e) {
        const n = t.size,
          r = Dt.getEncodedBits(e);
        let o, i, s;
        for (let a = 0; a < 18; a++)
          (o = Math.floor(a / 3)),
            (i = (a % 3) + n - 8 - 3),
            (s = 1 == ((r >> a) & 1)),
            t.set(o, i, s, !0),
            t.set(i, o, s, !0);
      })(u, e),
    (function (t, e) {
      const n = t.size;
      let r = -1,
        o = n - 1,
        i = 7,
        s = 0;
      for (let a = n - 1; a > 0; a -= 2)
        for (6 === a && a--; ; ) {
          for (let n = 0; n < 2; n++)
            if (!t.isReserved(o, a - n)) {
              let r = !1;
              s < e.length && (r = 1 == ((e[s] >>> i) & 1)),
                t.set(o, a - n, r),
                i--,
                -1 === i && (s++, (i = 7));
            }
          if (((o += r), o < 0 || n <= o)) {
            (o -= r), (r = -r);
            break;
          }
        }
    })(u, s),
    isNaN(r) && (r = kt.getBestMask(u, Kt.bind(null, u, n))),
    kt.applyMask(r, u),
    Kt(u, n, r),
    {
      modules: u,
      version: e,
      errorCorrectionLevel: n,
      maskPattern: r,
      segments: o,
    }
  );
}
P.create = function (t, e) {
  if (void 0 === t || "" === t) throw new Error("No input text");
  let n,
    r,
    o = Rt.M;
  return (
    void 0 !== e &&
      ((o = Rt.from(e.errorCorrectionLevel, Rt.M)),
      (n = Dt.from(e.version)),
      (r = kt.from(e.maskPattern)),
      e.toSJISFunc && Nt.setToSJISFunction(e.toSJISFunc)),
    jt(t, n, o, r)
  );
};
var Ot = {},
  Qt = {};
!(function (t) {
  function e(t) {
    if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
      throw new Error("Color should be defined as hex string");
    let e = t.slice().replace("#", "").split("");
    if (e.length < 3 || 5 === e.length || e.length > 8)
      throw new Error("Invalid hex color: " + t);
    (3 !== e.length && 4 !== e.length) ||
      (e = Array.prototype.concat.apply(
        [],
        e.map(function (t) {
          return [t, t];
        })
      )),
      6 === e.length && e.push("F", "F");
    const n = parseInt(e.join(""), 16);
    return {
      r: (n >> 24) & 255,
      g: (n >> 16) & 255,
      b: (n >> 8) & 255,
      a: 255 & n,
      hex: "#" + e.slice(0, 6).join(""),
    };
  }
  (t.getOptions = function (t) {
    t || (t = {}), t.color || (t.color = {});
    const n =
        void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
      r = t.width && t.width >= 21 ? t.width : void 0,
      o = t.scale || 4;
    return {
      width: r,
      scale: r ? 4 : o,
      margin: n,
      color: {
        dark: e(t.color.dark || "#000000ff"),
        light: e(t.color.light || "#ffffffff"),
      },
      type: t.type,
      rendererOpts: t.rendererOpts || {},
    };
  }),
    (t.getScale = function (t, e) {
      return e.width && e.width >= t + 2 * e.margin
        ? e.width / (t + 2 * e.margin)
        : e.scale;
    }),
    (t.getImageWidth = function (e, n) {
      const r = t.getScale(e, n);
      return Math.floor((e + 2 * n.margin) * r);
    }),
    (t.qrToImageData = function (e, n, r) {
      const o = n.modules.size,
        i = n.modules.data,
        s = t.getScale(o, r),
        a = Math.floor((o + 2 * r.margin) * s),
        u = r.margin * s,
        c = [r.color.light, r.color.dark];
      for (let t = 0; t < a; t++)
        for (let n = 0; n < a; n++) {
          let l = 4 * (t * a + n),
            f = r.color.light;
          if (t >= u && n >= u && t < a - u && n < a - u) {
            f =
              c[
                i[Math.floor((t - u) / s) * o + Math.floor((n - u) / s)] ? 1 : 0
              ];
          }
          (e[l++] = f.r), (e[l++] = f.g), (e[l++] = f.b), (e[l] = f.a);
        }
    });
})(Qt),
  (function (t) {
    const e = Qt;
    (t.render = function (t, n, r) {
      let o = r,
        i = n;
      void 0 !== o || (n && n.getContext) || ((o = n), (n = void 0)),
        n ||
          (i = (function () {
            try {
              return document.createElement("canvas");
            } catch (t) {
              throw new Error("You need to specify a canvas element");
            }
          })()),
        (o = e.getOptions(o));
      const s = e.getImageWidth(t.modules.size, o),
        a = i.getContext("2d"),
        u = a.createImageData(s, s);
      return (
        e.qrToImageData(u.data, t, o),
        (function (t, e, n) {
          t.clearRect(0, 0, e.width, e.height),
            e.style || (e.style = {}),
            (e.height = n),
            (e.width = n),
            (e.style.height = n + "px"),
            (e.style.width = n + "px");
        })(a, i, s),
        a.putImageData(u, 0, 0),
        i
      );
    }),
      (t.renderToDataURL = function (e, n, r) {
        let o = r;
        void 0 !== o || (n && n.getContext) || ((o = n), (n = void 0)),
          o || (o = {});
        const i = t.render(e, n, o),
          s = o.type || "image/png",
          a = o.rendererOpts || {};
        return i.toDataURL(s, a.quality);
      });
  })(Ot);
var Vt = {};
const qt = Qt;
function $t(t, e) {
  const n = t.a / 255,
    r = e + '="' + t.hex + '"';
  return n < 1 ? r + " " + e + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function Zt(t, e, n) {
  let r = t + e;
  return void 0 !== n && (r += " " + n), r;
}
Vt.render = function (t, e, n) {
  const r = qt.getOptions(e),
    o = t.modules.size,
    i = t.modules.data,
    s = o + 2 * r.margin,
    a = r.color.light.a
      ? "<path " +
        $t(r.color.light, "fill") +
        ' d="M0 0h' +
        s +
        "v" +
        s +
        'H0z"/>'
      : "",
    u =
      "<path " +
      $t(r.color.dark, "stroke") +
      ' d="' +
      (function (t, e, n) {
        let r = "",
          o = 0,
          i = !1,
          s = 0;
        for (let a = 0; a < t.length; a++) {
          const u = Math.floor(a % e),
            c = Math.floor(a / e);
          u || i || (i = !0),
            t[a]
              ? (s++,
                (a > 0 && u > 0 && t[a - 1]) ||
                  ((r += i ? Zt("M", u + n, 0.5 + c + n) : Zt("m", o, 0)),
                  (o = 0),
                  (i = !1)),
                (u + 1 < e && t[a + 1]) || ((r += Zt("h", s)), (s = 0)))
              : o++;
        }
        return r;
      })(i, o, r.margin) +
      '"/>',
    c = 'viewBox="0 0 ' + s + " " + s + '"',
    l =
      '<svg xmlns="http://www.w3.org/2000/svg" ' +
      (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") +
      c +
      ' shape-rendering="crispEdges">' +
      a +
      u +
      "</svg>\n";
  return "function" == typeof n && n(null, l), l;
};
const Xt = function () {
    return (
      "function" == typeof Promise &&
      Promise.prototype &&
      Promise.prototype.then
    );
  },
  Wt = P,
  Gt = Ot,
  te = Vt;
function ee(t, e, n, r, o) {
  const i = [].slice.call(arguments, 1),
    s = i.length,
    a = "function" == typeof i[s - 1];
  if (!a && !Xt()) throw new Error("Callback required as last argument");
  if (!a) {
    if (s < 1) throw new Error("Too few arguments provided");
    return (
      1 === s
        ? ((n = e), (e = r = void 0))
        : 2 !== s || e.getContext || ((r = n), (n = e), (e = void 0)),
      new Promise(function (o, i) {
        try {
          const i = Wt.create(n, r);
          o(t(i, e, r));
        } catch (s) {
          i(s);
        }
      })
    );
  }
  if (s < 2) throw new Error("Too few arguments provided");
  2 === s
    ? ((o = n), (n = e), (e = r = void 0))
    : 3 === s &&
      (e.getContext && void 0 === o
        ? ((o = r), (r = void 0))
        : ((o = r), (r = n), (n = e), (e = void 0)));
  try {
    const i = Wt.create(n, r);
    o(null, t(i, e, r));
  } catch (u) {
    o(u);
  }
}
Wt.create;
var ne = ee.bind(null, Gt.render),
  re = ee.bind(null, Gt.renderToDataURL);
function oe({ canvas: t, content: n, width: r = 0, options: o = {} }) {
  const i = e(o);
  return (
    (i.errorCorrectionLevel =
      i.errorCorrectionLevel ||
      (function (t) {
        return t.length > 36 ? "M" : t.length > 16 ? "Q" : "H";
      })(n)),
    (function (t, e) {
      const n = document.createElement("canvas");
      return ne(n, t, e).then(() => n.width);
    })(n, i).then(
      (e) => ((i.scale = 0 === r ? void 0 : (r / e) * 4), ne(t, n, i))
    )
  );
}
function ie({ canvas: t, logo: e }) {
  if (!e)
    return new Promise((e) => {
      e(t.toDataURL());
    });
  const r = t.width,
    {
      logoSize: o = 0.15,
      bgColor: i = "#ffffff",
      borderSize: s = 0.05,
      crossOrigin: a,
      borderRadius: u = 8,
      logoRadius: c = 0,
    } = e,
    l = n(e) ? e : e.src,
    f = r * o,
    h = (r * (1 - o)) / 2,
    d = r * (o + s),
    g = (r * (1 - o - s)) / 2,
    p = t.getContext("2d");
  if (!p) return;
  se(p)(g, g, d, d, u), (p.fillStyle = i), p.fill();
  const m = new Image();
  (a || c) && m.setAttribute("crossOrigin", a || "anonymous"), (m.src = l);
  return new Promise((e) => {
    m.onload = () => {
      var n;
      c
        ? ((t) => {
            const e = document.createElement("canvas");
            (e.width = h + f), (e.height = h + f);
            const n = e.getContext("2d");
            if (!n || !p) return;
            if ((n.drawImage(t, h, h, f, f), se(p)(h, h, f, f, c), !p)) return;
            const r = p.createPattern(e, "no-repeat");
            r && ((p.fillStyle = r), p.fill());
          })(m)
        : ((n = m), p.drawImage(n, h, h, f, f)),
        e(t.toDataURL());
    };
  });
}
function se(t) {
  return (e, n, r, o, i) => {
    const s = Math.min(r, o);
    return (
      i > s / 2 && (i = s / 2),
      t.beginPath(),
      t.moveTo(e + i, n),
      t.arcTo(e + r, n, e + r, n + o, i),
      t.arcTo(e + r, n + o, e, n + o, i),
      t.arcTo(e, n + o, e, n, i),
      t.arcTo(e, n, e + r, n, i),
      t.closePath(),
      t
    );
  };
}
ee.bind(null, function (t, e, n) {
  return te.render(t, n);
});
const ae = d(
    u(
      r({
        name: "QrCode",
        props: {
          value: { type: [String, Array], default: null },
          options: { type: Object, default: null },
          width: { type: Number, default: 200 },
          logo: { type: [String, Object], default: "" },
          tag: {
            type: String,
            default: "canvas",
            validator: (t) => ["canvas", "img"].includes(t),
          },
        },
        emits: { done: (t) => !!t, error: (t) => !!t },
        setup(t, { emit: e }) {
          const n = o(null);
          async function r() {
            try {
              const {
                  tag: r,
                  value: o,
                  options: i = {},
                  width: s,
                  logo: u,
                } = t,
                c = String(o),
                l = a(n);
              if (!l) return;
              if ("canvas" === r) {
                const t = await (function (t) {
                  return oe(t)
                    .then(() => t)
                    .then(ie);
                })({
                  canvas: l,
                  width: s,
                  logo: u,
                  content: c,
                  options: i || {},
                });
                return void e("done", { url: t, ctx: l.getContext("2d") });
              }
              if ("img" === r) {
                const t = await re(c, {
                  errorCorrectionLevel: "H",
                  width: s,
                  ...i,
                });
                (a(n).src = t), e("done", { url: t });
              }
            } catch (r) {
              e("error", r);
            }
          }
          return (
            i(r),
            s(
              t,
              () => {
                r();
              },
              { deep: !0 }
            ),
            {
              wrapRef: n,
              download: function (t) {
                let e = "";
                const r = a(n);
                r instanceof HTMLCanvasElement
                  ? (e = r.toDataURL())
                  : r instanceof HTMLImageElement && (e = r.src),
                  e && I({ url: e, fileName: t });
              },
            }
          );
        },
      }),
      [
        [
          "render",
          function (t, e, n, r, o, i) {
            return (
              c(),
              l("div", null, [
                (c(), f(h(t.tag), { ref: "wrapRef" }, null, 512)),
              ])
            );
          },
        ],
      ]
    )
  ),
  ue = { class: "enter-x min-w-64 min-h-64" },
  ce = r({
    __name: "QrCodeForm",
    setup(e) {
      const { t: n } = B(),
        { handleBackLogin: r, getLoginState: o } = T(),
        i = g(() => a(o) === M.QR_CODE);
      return (e, o) =>
        a(i)
          ? (c(),
            l(
              C,
              { key: 0 },
              [
                p(t, { class: "enter-x" }),
                m("div", ue, [
                  p(a(ae), {
                    value: "https://vvbin.cn/next/login",
                    class: "enter-x flex justify-center xl:justify-start",
                    width: 280,
                  }),
                  p(
                    a(b),
                    { class: "enter-x" },
                    {
                      default: w(() => [y(E(a(n)("sys.login.scanSign")), 1)]),
                      _: 1,
                    }
                  ),
                  p(
                    a(v),
                    {
                      size: "large",
                      block: "",
                      class: "mt-4 enter-x",
                      onClick: a(r),
                    },
                    {
                      default: w(() => [y(E(a(n)("sys.login.backSignIn")), 1)]),
                      _: 1,
                    },
                    8,
                    ["onClick"]
                  ),
                ]),
              ],
              64
            ))
          : A("", !0);
    },
  });
export { ce as default };

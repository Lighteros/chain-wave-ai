import {
  as as e,
  r as t,
  bZ as s,
  c as n,
  a,
  b2 as r,
  aR as o,
  bk as i,
  au as c,
  av as l,
  bo as h,
  dq as u,
  bN as d,
  ax as g,
  bn as p,
  bU as f,
  c5 as m,
  bE as b,
  aD as y,
  bl as k,
  bm as w,
  c2 as M,
  aO as x,
} from "./index-DPRREYlk.js";
import { p as j } from "./propTypes-BC7VambV.js";
const T = (e, t) => e.push.apply(e, t),
  I = (e, t) =>
    e
      .split("")
      .map((e) => t[e] || e)
      .join(""),
  v = (e) => e.sort((e, t) => e.i - t.i || e.j - t.j),
  S = (e) => {
    const t = {};
    let s = 1;
    return (
      e.forEach((e) => {
        (t[e] = s), (s += 1);
      }),
      t
    );
  };
const E = {
    4: [
      [1, 2],
      [2, 3],
    ],
    5: [
      [1, 3],
      [2, 3],
    ],
    6: [
      [1, 2],
      [2, 4],
      [4, 5],
    ],
    7: [
      [1, 3],
      [2, 3],
      [4, 5],
      [4, 6],
    ],
    8: [
      [2, 4],
      [4, 6],
    ],
  },
  C = /^[A-Z\xbf-\xdf][^A-Z\xbf-\xdf]+$/,
  D = /^[^A-Z\xbf-\xdf]+[A-Z\xbf-\xdf]$/,
  A = /^[A-Z\xbf-\xdf]+$/,
  O = /^[^a-z\xdf-\xff]+$/,
  P = /^[a-z\xdf-\xff]+$/,
  q = /^[^A-Z\xbf-\xdf]+$/,
  N = /[a-z\xdf-\xff]/,
  L = /[A-Z\xbf-\xdf]/,
  $ = /[^A-Za-z\xbf-\xdf]/gi,
  R = /^\d+$/,
  Y = new Date().getFullYear(),
  G = { recentYear: /19\d\d|200\d|201\d|202\d/g };
class F {
  match({ password: e }) {
    const t = [
        ...this.getMatchesWithoutSeparator(e),
        ...this.getMatchesWithSeparator(e),
      ],
      s = this.filterNoise(t);
    return v(s);
  }
  getMatchesWithSeparator(e) {
    const t = [],
      s = /^(\d{1,4})([\s/\\_.-])(\d{1,2})\2(\d{1,4})$/;
    for (let n = 0; n <= Math.abs(e.length - 6); n += 1)
      for (let a = n + 5; a <= n + 9 && !(a >= e.length); a += 1) {
        const r = e.slice(n, +a + 1 || 9e9),
          o = s.exec(r);
        if (null != o) {
          const e = this.mapIntegersToDayMonthYear([
            parseInt(o[1], 10),
            parseInt(o[3], 10),
            parseInt(o[4], 10),
          ]);
          null != e &&
            t.push({
              pattern: "date",
              token: r,
              i: n,
              j: a,
              separator: o[2],
              year: e.year,
              month: e.month,
              day: e.day,
            });
        }
      }
    return t;
  }
  getMatchesWithoutSeparator(e) {
    const t = [],
      s = /^\d{4,8}$/,
      n = (e) => Math.abs(e.year - Y);
    for (let a = 0; a <= Math.abs(e.length - 4); a += 1)
      for (let r = a + 3; r <= a + 7 && !(r >= e.length); r += 1) {
        const o = e.slice(a, +r + 1 || 9e9);
        if (s.exec(o)) {
          const e = [],
            s = o.length;
          if (
            (E[s].forEach(([t, s]) => {
              const n = this.mapIntegersToDayMonthYear([
                parseInt(o.slice(0, t), 10),
                parseInt(o.slice(t, s), 10),
                parseInt(o.slice(s), 10),
              ]);
              null != n && e.push(n);
            }),
            e.length > 0)
          ) {
            let s = e[0],
              i = n(e[0]);
            e.slice(1).forEach((e) => {
              const t = n(e);
              t < i && ((s = e), (i = t));
            }),
              t.push({
                pattern: "date",
                token: o,
                i: a,
                j: r,
                separator: "",
                year: s.year,
                month: s.month,
                day: s.day,
              });
          }
        }
      }
    return t;
  }
  filterNoise(e) {
    return e.filter((t) => {
      let s = !1;
      const n = e.length;
      for (let a = 0; a < n; a += 1) {
        const n = e[a];
        if (t !== n && n.i <= t.i && n.j >= t.j) {
          s = !0;
          break;
        }
      }
      return !s;
    });
  }
  mapIntegersToDayMonthYear(e) {
    if (e[1] > 31 || e[1] <= 0) return null;
    let t = 0,
      s = 0,
      n = 0;
    for (let a = 0, r = e.length; a < r; a += 1) {
      const r = e[a];
      if ((r > 99 && r < 1e3) || r > 2050) return null;
      r > 31 && (s += 1), r > 12 && (t += 1), r <= 0 && (n += 1);
    }
    return s >= 2 || 3 === t || n >= 2 ? null : this.getDayMonth(e);
  }
  getDayMonth(e) {
    const t = [
        [e[2], e.slice(0, 2)],
        [e[0], e.slice(1, 3)],
      ],
      s = t.length;
    for (let n = 0; n < s; n += 1) {
      const [e, s] = t[n];
      if (1e3 <= e && e <= 2050) {
        const t = this.mapIntegersToDayMonth(s);
        return null != t ? { year: e, month: t.month, day: t.day } : null;
      }
    }
    for (let n = 0; n < s; n += 1) {
      const [e, s] = t[n],
        a = this.mapIntegersToDayMonth(s);
      if (null != a)
        return { year: this.twoToFourDigitYear(e), month: a.month, day: a.day };
    }
    return null;
  }
  mapIntegersToDayMonth(e) {
    const t = [e, e.slice().reverse()];
    for (let s = 0; s < t.length; s += 1) {
      const e = t[s],
        n = e[0],
        a = e[1];
      if (n >= 1 && n <= 31 && a >= 1 && a <= 12) return { day: n, month: a };
    }
    return null;
  }
  twoToFourDigitYear(e) {
    return e > 99 ? e : e > 50 ? e + 1900 : e + 2e3;
  }
}
var W = {
    a: ["4", "@"],
    b: ["8"],
    c: ["(", "{", "[", "<"],
    e: ["3"],
    g: ["6", "9"],
    i: ["1", "!", "|"],
    l: ["1", "|", "7"],
    o: ["0"],
    s: ["$", "5"],
    t: ["+", "7"],
    x: ["%"],
    z: ["2"],
  },
  z = {
    warnings: {
      straightRow: "straightRow",
      keyPattern: "keyPattern",
      simpleRepeat: "simpleRepeat",
      extendedRepeat: "extendedRepeat",
      sequences: "sequences",
      recentYears: "recentYears",
      dates: "dates",
      topTen: "topTen",
      topHundred: "topHundred",
      common: "common",
      similarToCommon: "similarToCommon",
      wordByItself: "wordByItself",
      namesByThemselves: "namesByThemselves",
      commonNames: "commonNames",
      userInputs: "userInputs",
    },
    suggestions: {
      l33t: "l33t",
      reverseWords: "reverseWords",
      allUppercase: "allUppercase",
      capitalization: "capitalization",
      dates: "dates",
      recentYears: "recentYears",
      associatedYears: "associatedYears",
      sequences: "sequences",
      repeated: "repeated",
      longerKeyboardPattern: "longerKeyboardPattern",
      anotherWord: "anotherWord",
      useWords: "useWords",
      noNeed: "noNeed",
    },
    timeEstimation: {
      ltSecond: "ltSecond",
      second: "second",
      seconds: "seconds",
      minute: "minute",
      minutes: "minutes",
      hour: "hour",
      hours: "hours",
      day: "day",
      days: "days",
      month: "month",
      months: "months",
      year: "year",
      years: "years",
      centuries: "centuries",
    },
  };
var B = new (class {
  constructor() {
    (this.matchers = {}),
      (this.l33tTable = W),
      (this.dictionary = { userInputs: [] }),
      (this.rankedDictionaries = {}),
      (this.translations = z),
      (this.graphs = {}),
      (this.availableGraphs = []),
      this.setRankedDictionaries();
  }
  setOptions(e = {}) {
    e.l33tTable && (this.l33tTable = e.l33tTable),
      e.dictionary &&
        ((this.dictionary = e.dictionary), this.setRankedDictionaries()),
      e.translations && this.setTranslations(e.translations),
      e.graphs && (this.graphs = e.graphs);
  }
  setTranslations(e) {
    if (!this.checkCustomTranslations(e))
      throw new Error("Invalid translations object fallback to keys");
    this.translations = e;
  }
  checkCustomTranslations(e) {
    let t = !0;
    return (
      Object.keys(z).forEach((s) => {
        if (s in e) {
          const n = s;
          Object.keys(z[n]).forEach((s) => {
            s in e[n] || (t = !1);
          });
        } else t = !1;
      }),
      t
    );
  }
  setRankedDictionaries() {
    const e = {};
    Object.keys(this.dictionary).forEach((t) => {
      e[t] = this.getRankedDictionary(t);
    }),
      (this.rankedDictionaries = e);
  }
  getRankedDictionary(e) {
    const t = this.dictionary[e];
    if ("userInputs" === e) {
      const e = [];
      return (
        t.forEach((t) => {
          const s = typeof t;
          ("string" !== s && "number" !== s && "boolean" !== s) ||
            e.push(t.toString().toLowerCase());
        }),
        S(e)
      );
    }
    return S(t);
  }
  extendUserInputsDictionary(e) {
    this.dictionary.userInputs
      ? (this.dictionary.userInputs = [...this.dictionary.userInputs, ...e])
      : (this.dictionary.userInputs = e),
      (this.rankedDictionaries.userInputs =
        this.getRankedDictionary("userInputs"));
  }
  addMatcher(e, t) {
    this.matchers[e] || (this.matchers[e] = t);
  }
})();
let H = class {
  constructor(e) {
    this.defaultMatch = e;
  }
  match({ password: e }) {
    const t = e.split("").reverse().join("");
    return this.defaultMatch({ password: t }).map((t) => ({
      ...t,
      token: t.token.split("").reverse().join(""),
      reversed: !0,
      i: e.length - 1 - t.j,
      j: e.length - 1 - t.i,
    }));
  }
};
class V {
  constructor(e) {
    this.defaultMatch = e;
  }
  match({ password: e }) {
    const t = [],
      s = this.enumerateL33tSubs(this.relevantL33tSubtable(e, B.l33tTable));
    for (let a = 0; a < s.length; a += 1) {
      const r = s[a];
      if (((n = r), 0 === Object.keys(n).length)) break;
      const o = I(e, r);
      this.defaultMatch({ password: o }).forEach((s) => {
        const n = e.slice(s.i, +s.j + 1 || 9e9);
        if (n.toLowerCase() !== s.matchedWord) {
          const e = {};
          Object.keys(r).forEach((t) => {
            const s = r[t];
            -1 !== n.indexOf(t) && (e[t] = s);
          });
          const a = Object.keys(e)
            .map((t) => `${t} -> ${e[t]}`)
            .join(", ");
          t.push({ ...s, l33t: !0, token: n, sub: e, subDisplay: a });
        }
      });
    }
    var n;
    return t.filter((e) => e.token.length > 1);
  }
  relevantL33tSubtable(e, t) {
    const s = {},
      n = {};
    return (
      e.split("").forEach((e) => {
        s[e] = !0;
      }),
      Object.keys(t).forEach((e) => {
        const a = t[e].filter((e) => e in s);
        a.length > 0 && (n[e] = a);
      }),
      n
    );
  }
  enumerateL33tSubs(e) {
    const t = Object.keys(e);
    return this.getSubs(t, [[]], e).map((e) => {
      const t = {};
      return (
        e.forEach(([e, s]) => {
          t[e] = s;
        }),
        t
      );
    });
  }
  getSubs(e, t, s) {
    if (!e.length) return t;
    const n = e[0],
      a = e.slice(1),
      r = [];
    s[n].forEach((e) => {
      t.forEach((t) => {
        let s = -1;
        for (let n = 0; n < t.length; n += 1)
          if (t[n][0] === e) {
            s = n;
            break;
          }
        if (-1 === s) {
          const s = t.concat([[e, n]]);
          r.push(s);
        } else {
          const a = t.slice(0);
          a.splice(s, 1), a.push([e, n]), r.push(t), r.push(a);
        }
      });
    });
    const o = this.dedup(r);
    return a.length ? this.getSubs(a, o, s) : o;
  }
  dedup(e) {
    const t = [],
      s = {};
    return (
      e.forEach((e) => {
        const n = e.map((e, t) => [e, t]);
        n.sort();
        const a = n.map(([e, t]) => `${e},${t}`).join("-");
        a in s || ((s[a] = !0), t.push(e));
      }),
      t
    );
  }
}
class Z {
  constructor() {
    (this.l33t = new V(this.defaultMatch)),
      (this.reverse = new H(this.defaultMatch));
  }
  match({ password: e }) {
    const t = [
      ...this.defaultMatch({ password: e }),
      ...this.reverse.match({ password: e }),
      ...this.l33t.match({ password: e }),
    ];
    return v(t);
  }
  defaultMatch({ password: e }) {
    const t = [],
      s = e.length,
      n = e.toLowerCase();
    return (
      Object.keys(B.rankedDictionaries).forEach((a) => {
        const r = B.rankedDictionaries[a];
        for (let o = 0; o < s; o += 1)
          for (let i = o; i < s; i += 1)
            if (n.slice(o, +i + 1 || 9e9) in r) {
              const s = n.slice(o, +i + 1 || 9e9),
                c = r[s];
              t.push({
                pattern: "dictionary",
                i: o,
                j: i,
                token: e.slice(o, +i + 1 || 9e9),
                matchedWord: s,
                rank: c,
                dictionaryName: a,
                reversed: !1,
                l33t: !1,
              });
            }
      }),
      t
    );
  }
}
class _ {
  match({ password: e, regexes: t = G }) {
    const s = [];
    return (
      Object.keys(t).forEach((n) => {
        const a = t[n];
        a.lastIndex = 0;
        const r = a.exec(e);
        if (r) {
          const e = r[0];
          s.push({
            pattern: "regex",
            token: e,
            i: r.index,
            j: r.index + r[0].length - 1,
            regexName: n,
            regexMatch: r,
          });
        }
      }),
      v(s)
    );
  }
}
var U = {
  nCk(e, t) {
    let s = e;
    if (t > s) return 0;
    if (0 === t) return 1;
    let n = 1;
    for (let a = 1; a <= t; a += 1) (n *= s), (n /= a), (s -= 1);
    return n;
  },
  log10: (e) => Math.log(e) / Math.log(10),
  log2: (e) => Math.log(e) / Math.log(2),
  factorial(e) {
    let t = 1;
    for (let s = 2; s <= e; s += 1) t *= s;
    return t;
  },
};
var X = (e) => {
  const t = e.replace($, "");
  if (t.match(q) || t.toLowerCase() === t) return 1;
  const s = [C, D, O],
    n = s.length;
  for (let a = 0; a < n; a += 1) {
    const e = s[a];
    if (t.match(e)) return 2;
  }
  return ((e) => {
    const t = e.split(""),
      s = t.filter((e) => e.match(N)).length,
      n = t.filter((e) => e.match(L)).length;
    let a = 0;
    const r = Math.min(s, n);
    for (let o = 1; o <= r; o += 1) a += U.nCk(s + n, o);
    return a;
  })(t);
};
const K = ({ token: e, graph: t, turns: s }) => {
  const n = Object.keys(B.graphs[t]).length,
    a = ((e) => {
      let t = 0;
      return (
        Object.keys(e).forEach((s) => {
          const n = e[s];
          t += n.filter((e) => !!e).length;
        }),
        (t /= Object.entries(e).length),
        t
      );
    })(B.graphs[t]);
  let r = 0;
  const o = e.length;
  for (let i = 2; i <= o; i += 1) {
    const e = Math.min(s, i - 1);
    for (let t = 1; t <= e; t += 1) r += U.nCk(i - 1, t - 1) * n * a ** t;
  }
  return r;
};
const J = {
  bruteforce: ({ token: e }) => {
    let t,
      s = 10 ** e.length;
    return (
      s === Number.POSITIVE_INFINITY && (s = Number.MAX_VALUE),
      (t = 1 === e.length ? 11 : 51),
      Math.max(s, t)
    );
  },
  date: ({ year: e, separator: t }) => {
    let s = 365 * Math.max(Math.abs(e - Y), 20);
    return t && (s *= 4), s;
  },
  dictionary: ({ rank: e, reversed: t, l33t: s, sub: n, token: a }) => {
    const r = e,
      o = X(a),
      i = (({ l33t: e, sub: t, token: s }) => {
        if (!e) return 1;
        let n = 1;
        const a = t;
        return (
          Object.keys(a).forEach((e) => {
            const { subbedCount: t, unsubbedCount: r } = (({
              subs: e,
              subbed: t,
              token: s,
            }) => {
              const n = e[t],
                a = s.toLowerCase().split("");
              return {
                subbedCount: a.filter((e) => e === t).length,
                unsubbedCount: a.filter((e) => e === n).length,
              };
            })({ subs: a, subbed: e, token: s });
            if (0 === t || 0 === r) n *= 2;
            else {
              const e = Math.min(r, t);
              let s = 0;
              for (let n = 1; n <= e; n += 1) s += U.nCk(r + t, n);
              n *= s;
            }
          }),
          n
        );
      })({ l33t: s, sub: n, token: a });
    return {
      baseGuesses: r,
      uppercaseVariations: o,
      l33tVariations: i,
      calculation: r * o * i * (t ? 2 : 1),
    };
  },
  regex: ({ regexName: e, regexMatch: t, token: s }) => {
    const n = {
      alphaLower: 26,
      alphaUpper: 26,
      alpha: 52,
      alphanumeric: 62,
      digits: 10,
      symbols: 33,
    };
    return e in n
      ? n[e] ** s.length
      : "recentYear" === e
      ? Math.max(Math.abs(parseInt(t[0], 10) - Y), 20)
      : 0;
  },
  repeat: ({ baseGuesses: e, repeatCount: t }) => e * t,
  sequence: ({ token: e, ascending: t }) => {
    const s = e.charAt(0);
    let n = 0;
    return (
      (n = ["a", "A", "z", "Z", "0", "1", "9"].includes(s)
        ? 4
        : s.match(/\d/)
        ? 10
        : 26),
      t || (n *= 2),
      n * e.length
    );
  },
  spatial: ({ graph: e, token: t, shiftedCount: s, turns: n }) => {
    let a = K({ token: t, graph: e, turns: n });
    if (s) {
      const e = t.length - s;
      if (0 === s || 0 === e) a *= 2;
      else {
        let t = 0;
        for (let n = 1; n <= Math.min(s, e); n += 1) t += U.nCk(s + e, n);
        a *= t;
      }
    }
    return Math.round(a);
  },
};
var Q = (e, t) => {
  const s = {};
  if ("guesses" in e && null != e.guesses) return e;
  const n = ((e, t) => {
      let s = 1;
      return (
        e.token.length < t.length && (s = 1 === e.token.length ? 10 : 50), s
      );
    })(e, t),
    a = ((e, t) =>
      J[e]
        ? J[e](t)
        : B.matchers[e] && "scoring" in B.matchers[e]
        ? B.matchers[e].scoring(t)
        : 0)(e.pattern, e);
  let r = 0;
  "number" == typeof a
    ? (r = a)
    : "dictionary" === e.pattern &&
      ((r = a.calculation),
      (s.baseGuesses = a.baseGuesses),
      (s.uppercaseVariations = a.uppercaseVariations),
      (s.l33tVariations = a.l33tVariations));
  const o = Math.max(r, n);
  return { ...e, ...s, guesses: o, guessesLog10: U.log10(o) };
};
const ee = {
  password: "",
  optimal: {},
  excludeAdditive: !1,
  fillArray(e, t) {
    const s = [];
    for (let n = 0; n < e; n += 1) {
      let e = [];
      "object" === t && (e = {}), s.push(e);
    }
    return s;
  },
  makeBruteforceMatch(e, t) {
    return {
      pattern: "bruteforce",
      token: this.password.slice(e, +t + 1 || 9e9),
      i: e,
      j: t,
    };
  },
  update(e, t) {
    const s = e.j,
      n = Q(e, this.password);
    let a = n.guesses;
    t > 1 && (a *= this.optimal.pi[n.i - 1][t - 1]);
    let r = U.factorial(t) * a;
    this.excludeAdditive || (r += 1e4 ** (t - 1));
    let o = !1;
    Object.keys(this.optimal.g[s]).forEach((e) => {
      const n = this.optimal.g[s][e];
      parseInt(e, 10) <= t && n <= r && (o = !0);
    }),
      o ||
        ((this.optimal.g[s][t] = r),
        (this.optimal.m[s][t] = n),
        (this.optimal.pi[s][t] = a));
  },
  bruteforceUpdate(e) {
    let t = this.makeBruteforceMatch(0, e);
    this.update(t, 1);
    for (let s = 1; s <= e; s += 1) {
      t = this.makeBruteforceMatch(s, e);
      const n = this.optimal.m[s - 1];
      Object.keys(n).forEach((e) => {
        "bruteforce" !== n[e].pattern && this.update(t, parseInt(e, 10) + 1);
      });
    }
  },
  unwind(e) {
    const t = [];
    let s = e - 1,
      n = 0,
      a = Infinity;
    const r = this.optimal.g[s];
    for (
      r &&
      Object.keys(r).forEach((e) => {
        const t = r[e];
        t < a && ((n = parseInt(e, 10)), (a = t));
      });
      s >= 0;

    ) {
      const e = this.optimal.m[s][n];
      t.unshift(e), (s = e.i - 1), (n -= 1);
    }
    return t;
  },
};
var te = {
  mostGuessableMatchSequence(e, t, s = !1) {
    (ee.password = e), (ee.excludeAdditive = s);
    const n = e.length;
    let a = ee.fillArray(n, "array");
    t.forEach((e) => {
      a[e.j].push(e);
    }),
      (a = a.map((e) => e.sort((e, t) => e.i - t.i))),
      (ee.optimal = {
        m: ee.fillArray(n, "object"),
        pi: ee.fillArray(n, "object"),
        g: ee.fillArray(n, "object"),
      });
    for (let c = 0; c < n; c += 1)
      a[c].forEach((e) => {
        e.i > 0
          ? Object.keys(ee.optimal.m[e.i - 1]).forEach((t) => {
              ee.update(e, parseInt(t, 10) + 1);
            })
          : ee.update(e, 1);
      }),
        ee.bruteforceUpdate(c);
    const r = ee.unwind(n),
      o = r.length,
      i = this.getGuesses(e, o);
    return { password: e, guesses: i, guessesLog10: U.log10(i), sequence: r };
  },
  getGuesses(e, t) {
    const s = e.length;
    let n = 0;
    return (n = 0 === e.length ? 1 : ee.optimal.g[s - 1][t]), n;
  },
};
class se {
  match({ password: e, omniMatch: t }) {
    const s = [];
    let n = 0;
    for (; n < e.length; ) {
      const a = this.getGreedyMatch(e, n),
        r = this.getLazyMatch(e, n);
      if (null == a) break;
      const { match: o, baseToken: i } = this.setMatchToken(a, r);
      if (o) {
        const e = o.index + o[0].length - 1,
          a = this.getBaseGuesses(i, t);
        s.push(this.normalizeMatch(i, e, o, a)), (n = e + 1);
      }
    }
    return s.some((e) => e instanceof Promise) ? Promise.all(s) : s;
  }
  normalizeMatch(e, t, s, n) {
    const a = {
      pattern: "repeat",
      i: s.index,
      j: t,
      token: s[0],
      baseToken: e,
      baseGuesses: 0,
      repeatCount: s[0].length / e.length,
    };
    return n instanceof Promise
      ? n.then((e) => ({ ...a, baseGuesses: e }))
      : { ...a, baseGuesses: n };
  }
  getGreedyMatch(e, t) {
    const s = /(.+)\1+/g;
    return (s.lastIndex = t), s.exec(e);
  }
  getLazyMatch(e, t) {
    const s = /(.+?)\1+/g;
    return (s.lastIndex = t), s.exec(e);
  }
  setMatchToken(e, t) {
    const s = /^(.+?)\1+$/;
    let n,
      a = "";
    if (t && e[0].length > t[0].length) {
      n = e;
      const t = s.exec(n[0]);
      t && (a = t[1]);
    } else (n = t), n && (a = n[1]);
    return { match: n, baseToken: a };
  }
  getBaseGuesses(e, t) {
    const s = t.match(e);
    if (s instanceof Promise)
      return s.then((t) => te.mostGuessableMatchSequence(e, t).guesses);
    return te.mostGuessableMatchSequence(e, s).guesses;
  }
}
class ne {
  constructor() {
    this.MAX_DELTA = 5;
  }
  match({ password: e }) {
    const t = [];
    if (1 === e.length) return [];
    let s = 0,
      n = null;
    const a = e.length;
    for (let r = 1; r < a; r += 1) {
      const a = e.charCodeAt(r) - e.charCodeAt(r - 1);
      if ((null == n && (n = a), a !== n)) {
        const o = r - 1;
        this.update({ i: s, j: o, delta: n, password: e, result: t }),
          (s = o),
          (n = a);
      }
    }
    return this.update({ i: s, j: a - 1, delta: n, password: e, result: t }), t;
  }
  update({ i: e, j: t, delta: s, password: n, result: a }) {
    if (t - e > 1 || 1 === Math.abs(s)) {
      const r = Math.abs(s);
      if (r > 0 && r <= this.MAX_DELTA) {
        const r = n.slice(e, +t + 1 || 9e9),
          { sequenceName: o, sequenceSpace: i } = this.getSequence(r);
        return a.push({
          pattern: "sequence",
          i: e,
          j: t,
          token: n.slice(e, +t + 1 || 9e9),
          sequenceName: o,
          sequenceSpace: i,
          ascending: s > 0,
        });
      }
    }
    return null;
  }
  getSequence(e) {
    let t = "unicode",
      s = 26;
    return (
      P.test(e)
        ? ((t = "lower"), (s = 26))
        : A.test(e)
        ? ((t = "upper"), (s = 26))
        : R.test(e) && ((t = "digits"), (s = 10)),
      { sequenceName: t, sequenceSpace: s }
    );
  }
}
class ae {
  constructor() {
    this.SHIFTED_RX = /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/;
  }
  match({ password: e }) {
    const t = [];
    return (
      Object.keys(B.graphs).forEach((s) => {
        const n = B.graphs[s];
        T(t, this.helper(e, n, s));
      }),
      v(t)
    );
  }
  checkIfShifted(e, t, s) {
    return !e.includes("keypad") && this.SHIFTED_RX.test(t.charAt(s)) ? 1 : 0;
  }
  helper(e, t, s) {
    let n;
    const a = [];
    let r = 0;
    const o = e.length;
    for (; r < o - 1; ) {
      let i = r + 1,
        c = 0,
        l = 0;
      for (n = this.checkIfShifted(s, e, r); ; ) {
        const h = t[e.charAt(i - 1)] || [];
        let u = !1,
          d = -1,
          g = -1;
        if (i < o) {
          const t = e.charAt(i),
            s = h.length;
          for (let e = 0; e < s; e += 1) {
            const s = h[e];
            if (((g += 1), s)) {
              const e = s.indexOf(t);
              if (-1 !== e) {
                (u = !0),
                  (d = g),
                  1 === e && (n += 1),
                  c !== d && ((l += 1), (c = d));
                break;
              }
            }
          }
        }
        if (!u) {
          i - r > 2 &&
            a.push({
              pattern: "spatial",
              i: r,
              j: i - 1,
              token: e.slice(r, i),
              graph: s,
              turns: l,
              shiftedCount: n,
            }),
            (r = i);
          break;
        }
        i += 1;
      }
    }
    return a;
  }
}
class re {
  constructor() {
    this.matchers = {
      date: F,
      dictionary: Z,
      regex: _,
      repeat: se,
      sequence: ne,
      spatial: ae,
    };
  }
  match(e) {
    const t = [],
      s = [];
    return (
      [...Object.keys(this.matchers), ...Object.keys(B.matchers)].forEach(
        (n) => {
          if (!this.matchers[n] && !B.matchers[n]) return;
          const a = new (this.matchers[n]
            ? this.matchers[n]
            : B.matchers[n].Matching)().match({ password: e, omniMatch: this });
          a instanceof Promise
            ? (a.then((e) => {
                T(t, e);
              }),
              s.push(a))
            : T(t, a);
        }
      ),
      s.length > 0
        ? new Promise((e) => {
            Promise.all(s).then(() => {
              e(v(t));
            });
          })
        : v(t)
    );
  }
}
const oe = 2678400,
  ie = 32140800,
  ce = {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    month: oe,
    year: ie,
    century: 100 * ie,
  };
class le {
  translate(e, t) {
    let s = e;
    void 0 !== t && 1 !== t && (s += "s");
    const { timeEstimation: n } = B.translations;
    return n[s].replace("{base}", `${t}`);
  }
  estimateAttackTimes(e) {
    const t = {
        onlineThrottling100PerHour: e / (100 / 3600),
        onlineNoThrottling10PerSecond: e / 10,
        offlineSlowHashing1e4PerSecond: e / 1e4,
        offlineFastHashing1e10PerSecond: e / 1e10,
      },
      s = {
        onlineThrottling100PerHour: "",
        onlineNoThrottling10PerSecond: "",
        offlineSlowHashing1e4PerSecond: "",
        offlineFastHashing1e10PerSecond: "",
      };
    return (
      Object.keys(t).forEach((e) => {
        const n = t[e];
        s[e] = this.displayTime(n);
      }),
      {
        crackTimesSeconds: t,
        crackTimesDisplay: s,
        score: this.guessesToScore(e),
      }
    );
  }
  guessesToScore(e) {
    return e < 1005
      ? 0
      : e < 1000005
      ? 1
      : e < 100000005
      ? 2
      : e < 10000000005
      ? 3
      : 4;
  }
  displayTime(e) {
    let t,
      s = "centuries";
    const n = Object.keys(ce),
      a = n.findIndex((t) => e < ce[t]);
    return (
      a > -1 &&
        ((s = n[a - 1]),
        0 !== a ? (t = Math.round(e / ce[s])) : (s = "ltSecond")),
      this.translate(s, t)
    );
  }
}
var he = () => null,
  ue = () => ({
    warning: B.translations.warnings.dates,
    suggestions: [B.translations.suggestions.dates],
  });
const de = (e, t) => {
  let s = "";
  const n = e.dictionaryName,
    a = "lastnames" === n || n.toLowerCase().includes("firstnames");
  return (
    "passwords" === n
      ? (s = ((e, t) => {
          let s = "";
          return (
            !t || e.l33t || e.reversed
              ? e.guessesLog10 <= 4 &&
                (s = B.translations.warnings.similarToCommon)
              : (s =
                  e.rank <= 10
                    ? B.translations.warnings.topTen
                    : e.rank <= 100
                    ? B.translations.warnings.topHundred
                    : B.translations.warnings.common),
            s
          );
        })(e, t))
      : n.includes("wikipedia")
      ? (s = ((e, t) => {
          let s = "";
          return t && (s = B.translations.warnings.wordByItself), s;
        })(0, t))
      : a
      ? (s = ((e, t) =>
          t
            ? B.translations.warnings.namesByThemselves
            : B.translations.warnings.commonNames)(0, t))
      : "userInputs" === n && (s = B.translations.warnings.userInputs),
    s
  );
};
var ge = (e, t) => {
    const s = de(e, t),
      n = [],
      a = e.token;
    return (
      a.match(C)
        ? n.push(B.translations.suggestions.capitalization)
        : a.match(O) &&
          a.toLowerCase() !== a &&
          n.push(B.translations.suggestions.allUppercase),
      e.reversed &&
        e.token.length >= 4 &&
        n.push(B.translations.suggestions.reverseWords),
      e.l33t && n.push(B.translations.suggestions.l33t),
      { warning: s, suggestions: n }
    );
  },
  pe = (e) =>
    "recentYear" === e.regexName
      ? {
          warning: B.translations.warnings.recentYears,
          suggestions: [
            B.translations.suggestions.recentYears,
            B.translations.suggestions.associatedYears,
          ],
        }
      : { warning: "", suggestions: [] },
  fe = (e) => {
    let t = B.translations.warnings.extendedRepeat;
    return (
      1 === e.baseToken.length && (t = B.translations.warnings.simpleRepeat),
      { warning: t, suggestions: [B.translations.suggestions.repeated] }
    );
  },
  me = () => ({
    warning: B.translations.warnings.sequences,
    suggestions: [B.translations.suggestions.sequences],
  }),
  be = (e) => {
    let t = B.translations.warnings.keyPattern;
    return (
      1 === e.turns && (t = B.translations.warnings.straightRow),
      {
        warning: t,
        suggestions: [B.translations.suggestions.longerKeyboardPattern],
      }
    );
  };
const ye = { warning: "", suggestions: [] };
class ke {
  constructor() {
    (this.matchers = {
      bruteforce: he,
      date: ue,
      dictionary: ge,
      regex: pe,
      repeat: fe,
      sequence: me,
      spatial: be,
    }),
      (this.defaultFeedback = { warning: "", suggestions: [] }),
      this.setDefaultSuggestions();
  }
  setDefaultSuggestions() {
    this.defaultFeedback.suggestions.push(
      B.translations.suggestions.useWords,
      B.translations.suggestions.noNeed
    );
  }
  getFeedback(e, t) {
    if (0 === t.length) return this.defaultFeedback;
    if (e > 2) return ye;
    const s = B.translations.suggestions.anotherWord,
      n = this.getLongestMatch(t);
    let a = this.getMatchFeedback(n, 1 === t.length);
    return (
      null != a
        ? (a.suggestions.unshift(s), null == a.warning && (a.warning = ""))
        : (a = { warning: "", suggestions: [s] }),
      a
    );
  }
  getLongestMatch(e) {
    let t = e[0];
    return (
      e.slice(1).forEach((e) => {
        e.token.length > t.token.length && (t = e);
      }),
      t
    );
  }
  getMatchFeedback(e, t) {
    return this.matchers[e.pattern]
      ? this.matchers[e.pattern](e, t)
      : B.matchers[e.pattern] && "feedback" in B.matchers[e.pattern]
      ? B.matchers[e.pattern].feedback(e, t)
      : ye;
  }
}
const we = () => new Date().getTime(),
  Me = (e, t, s) => {
    const n = new ke(),
      a = new le(),
      r = te.mostGuessableMatchSequence(t, e),
      o = we() - s,
      i = a.estimateAttackTimes(r.guesses);
    return {
      calcTime: o,
      ...r,
      ...i,
      feedback: n.getFeedback(i.score, r.sequence),
    };
  },
  xe = e({
    name: "StrengthMeter",
    props: { value: j.string, showInput: j.bool.def(!0), disabled: j.bool },
    emits: ["score-change", "change"],
    setup(e, { emit: i }) {
      const c = t(""),
        { prefixCls: l } = s("strength-meter"),
        h = n(() => {
          const { disabled: t } = e;
          if (t) return -1;
          const s = a(c)
            ? ((e) => {
                const t = new re(),
                  s = we(),
                  n = t.match(e);
                return n instanceof Promise
                  ? n.then((t) => Me(t, e, s))
                  : Me(n, e, s);
              })(a(c)).score
            : -1;
          return i("score-change", s), s;
        });
      return (
        r(() => {
          c.value = e.value || "";
        }),
        o(
          () => a(c),
          (e) => {
            i("change", e);
          }
        ),
        {
          getPasswordStrength: h,
          handleChange: function (e) {
            c.value = e.target.value;
          },
          prefixCls: l,
          innerValueRef: c,
        }
      );
    },
  }),
  je = ["data-score"];
const Te = x(
  i(xe, [
    [
      "render",
      function (e, t, s, n, a, r) {
        const o = M;
        return (
          c(),
          l(
            "div",
            { class: w([e.prefixCls, "relative"]) },
            [
              e.showInput
                ? (c(),
                  h(
                    o,
                    b({ key: 0 }, e.$attrs, {
                      "allow-clear": "",
                      value: e.innerValueRef,
                      disabled: e.disabled,
                      onChange: e.handleChange,
                    }),
                    u({ _: 2 }, [
                      d(Object.keys(e.$slots), (t) => ({
                        name: t,
                        fn: g((s) => [
                          p(e.$slots, t, f(m(s || {})), void 0, !0),
                        ]),
                      })),
                    ]),
                    1040,
                    ["value", "disabled", "onChange"]
                  ))
                : y("", !0),
              k(
                "div",
                { class: w(`${e.prefixCls}-bar`) },
                [
                  k(
                    "div",
                    {
                      class: w(`${e.prefixCls}-bar--fill`),
                      "data-score": e.getPasswordStrength,
                    },
                    null,
                    10,
                    je
                  ),
                ],
                2
              ),
            ],
            2
          )
        );
      },
    ],
    ["__scopeId", "data-v-3c1639a1"],
  ])
);
export { Te as S };
